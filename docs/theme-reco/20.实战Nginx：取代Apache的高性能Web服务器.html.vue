<template><div><h1 id="实战nginx-取代apache的高性能web服务器" tabindex="-1"><a class="header-anchor" href="#实战nginx-取代apache的高性能web服务器" aria-hidden="true">#</a> 实战Nginx：取代Apache的高性能Web服务器</h1>
<p>张宴</p>
<h2 id="◆-第1章" tabindex="-1"><a class="header-anchor" href="#◆-第1章" aria-hidden="true">#</a> ◆ 第1章</h2>
<h3 id="◆-1-3-选择nginx的理由" tabindex="-1"><a class="header-anchor" href="#◆-1-3-选择nginx的理由" aria-hidden="true">#</a> ◆ 1.3 选择Nginx的理由</h3>
<blockquote>
<blockquote>
<p>官方测试Nginx能够支撑5万并发连接，在实际生产环境中可支撑2～4万并发连接数。这得益于Nginx使用了最新的epoll（Linux 2.6内核）和kqueue（freebsd）网络I/O模型，而Apache使用的则是传统的select模型，其比较稳定的Prefork模式为多进程模式，需要经常派生子进程，所消耗的CPU等服务器资源要比Nginx高得多。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>笔者曾完成6台Web Server从Apache到Nginx服务器的迁移（这6台Web Server搭建的是一个日均2500万PV的分类信息网站，迁移前每台服务器的平均系统负载为50～60、CPU使用率为70%～90%，迁移后平均系统负载为1～4，CPU使用率为20%～40%，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx + PHP（FastCGI）服务器在3万并发连接下，开启的10个Nginx进程消耗150MB内存（15MB×10=150MB），开启的64个php-cgi进程消耗1280MB内存（20MB×64=1280MB），加上系统自身消耗的内存，总共消耗不到2GB的内存。如果服务器内存较小，完全可以只开启25个php-cgi进程，这样php-cgi消耗的总内存数才500MB。用Webbench做压力测试，在3万并发连接下，访问Nginx + PHP（FastCGI）服务器的PHP程序，运行速度仍然飞快。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实际的生产环境下，两台Nginx + PHP5（FastCGI）服务器运行多个复杂性一般的纯PHP动态程序，从Nginx的日志可以统计出，单台Nginx + PHP5（FastCGI）服务器处理PHP动态程序的能力已经超过“700次请求/秒”（见图1-5），相当于每天可以承受6000万（700×60×60 ×24=60480000）的访问量，而服务器的系统负载也不算高</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下是这两台服务器的配置清单及运行的程序说明：服务器①：DELL PowerEdge 1950（两个Intel(R) Xeon(R) 双核CPU 5120 @ 1.86GHz，4GB内存）。服务器②：DELL PowerEdge 1950（一个Intel(R) Xeon(R) 双核CPU 5140 @ 2.33GHz，4GB内存）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Web服务器：CentOS Linux 4.4 + Nginx 0.5.35 + PHP 5.2.6RC2（300 FastCGI Procees, unix-domain socket, with XCache）。PHP程序内容：大量Memcached读写操作，少量MySQL读操作，大量文件队列写操作。请求数统计方式：从Nginx访问日志中，统计每分钟的第15秒共有多少条日志记录。同等硬件环境下，Nginx的处理能力相当于Apache的5～10倍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>支持Rewrite重写规则能够根据域名、URL的不同，将HTTP请求分到不同的后端服务器群组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>节省带宽支持GZIP压缩，可以添加浏览器本地缓存的Header头。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-4-nginx与apache、lighttpd的综合对比" tabindex="-1"><a class="header-anchor" href="#◆-1-4-nginx与apache、lighttpd的综合对比" aria-hidden="true">#</a> ◆ 1.4 Nginx与Apache、Lighttpd的综合对比</h3>
<blockquote>
<blockquote>
<p>表1-2 Nginx与Apache、Lighttpd的综合对比[插图]</p>
</blockquote>
</blockquote>
<h2 id="◆-第2章-nginx服务器的安装与配置" tabindex="-1"><a class="header-anchor" href="#◆-第2章-nginx服务器的安装与配置" aria-hidden="true">#</a> ◆ 第2章 Nginx服务器的安装与配置</h2>
<blockquote>
<blockquote>
<p>GCC编译器及相关工具：GCC全称为GNU Compiler Collection， 是GNU社区推出的功能强大、性能优越的用于编程开发的自由编译器，是GNU的代表作品之一，目前可以编译的语言包括：C、C++、Objective-C、Fortran、Java等。您必须确保您的操作系统安装有GCC编译器。另外，您还必须安装Autoconf和Automake工具，它们用于自动创建功能完善的Makefile，当前大多数软件包都是用这一工具生成Makefile的，Nginx也不例外。在CentOS系统下，您可以使用yum命令安装GCC编译器及相关工具：yum -y install gcc gcc-c++ autoconf automake</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的一些模块需要其他第三方库的支持，例如gzip模块需要zlib库， rewrite模块需要pcre库，ssl功能需要openssl库等。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-4-nginx的启动、停止、平滑重启" tabindex="-1"><a class="header-anchor" href="#◆-2-4-nginx的启动、停止、平滑重启" aria-hidden="true">#</a> ◆ 2.4 Nginx的启动、停止、平滑重启</h3>
<blockquote>
<blockquote>
<p>Nginx的停止方法有很多种，一般通过发送系统信号给Nginx主进程的方式来停止Nginx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们可以直接通过以下命令来完成平滑重启，省下寻找Nginx主进程号的步骤：kill - 信号类型 <code v-pre>/usr/local/webserver/nginx/logs/nginx.pid</code>（1）从容停止Nginx。kill - QUIT Nginx主进程号或kill - QUIT <code v-pre>/usr/local/webserver/nginx/logs/nginx.pid</code></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）快速停止Nginx。kill - TERM Nginx主进程号kill - TERM <code v-pre>/usr/local/webserver/nginx/logs/nginx.pid</code></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>或kill - INT Nginx主进程号kill - INT <code v-pre>/usr/local/webserver/nginx/logs/nginx.pid</code>（3）强制停止所有Nginx进程。pkill -9 nginx</p>
</blockquote>
</blockquote>
<h3 id="◆-2-6-nginx的信号控制" tabindex="-1"><a class="header-anchor" href="#◆-2-6-nginx的信号控制" aria-hidden="true">#</a> ◆ 2.6 Nginx的信号控制</h3>
<blockquote>
<blockquote>
<p>Nginx支持以下几种信号：● TERM, INT 快速关闭；● QUIT 从容关闭；● HUP 平滑重启，重新加载配置文件；● USR1重新打开日志文件，在切割日志时用途较大；● USR2平滑升级可执行程序；● WINCH 从容关闭工作进程。</p>
</blockquote>
</blockquote>
<h2 id="◆-第4章-nginx与php-fastcgi-的安装、配置与优化" tabindex="-1"><a class="header-anchor" href="#◆-第4章-nginx与php-fastcgi-的安装、配置与优化" aria-hidden="true">#</a> ◆ 第4章 Nginx与PHP（FastCGI）的安装、配置与优化</h2>
<blockquote>
<blockquote>
<p>提高PHP（FastCGI），那么FastCGI是什么呢？FastCGI是语言无关的、可伸缩架构的CGI开放扩展，其主要行为是将CGI解释器进程保持在内存中并因此获得较高的性能。众所周知，CGI解释器的反复加载是CGI性能低下的主要原因，如果CGI解释器保持在内存中并接受FastCGI进程管理器调度，则可以提供良好的性能、伸缩性、Fail-Over特性等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>FastCGI的工作原理是：（1）FastCGI进程管理器自身初始化，启动多个CGI解释器进程（多个php-cgi进程）并等待来自Web Server的连接。在本文中，采用PHP-FPM进程管理器启动多个php-cgi FastCGI进程。启动php-cgi FastCGI进程时，可以配置以TCP和UNIX套接字两种方式启动。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）当客户端请求到达Web服务器（Nginx）时，Web服务器将请求采用TCP协议或UNIX套接字方式转发到FastCGI主进程，FastCGI主进程选择并连接到一个CGI解释器（子进程）。Web服务器将CGI环境变量和标准输入发送到FastCGI子进程php-cgi。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）FastCGI子进程完成处理后将标准输出和错误信息从同一连接返回Web服务器（Nginx）。当FastCGI子进程关闭连接时，请求便告知处理完成。FastCGI子进程接着等待并处理来自FastCGI进程管理器的下一个连接。而在一般的普通CGI模式中，php-cgi在此便退出了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所以，你可以想象普通的CGI模式有多慢。每一个Web请求PHP都必须重新解析php.ini、重新载入全部扩展并重新初始化全部数据结构。使用FastCGI，所有这些都只在进程启动时发生一次。一个额外的好处是，持续数据库连接（Persistent database connection）可以工作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP FastCGI的优点：（1）PHP脚本运行速度更快。PHP解释程序被载入内存而不用每次需要时从存储器读取，此举极大提升了依靠脚本运行站点的性能。（2）须要使用的系统资源更少。由于服务器不用在每次需要时都载入PHP解释程序，你可以将站点的传输速度提升很多而不必增加CPU负担。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）不需要对现有的代码作任何改变。运行在Apache+PHP上的程序，无须修改即可适用于PHP的FastCGI。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-4-配置开机自动启动nginx-php" tabindex="-1"><a class="header-anchor" href="#◆-4-4-配置开机自动启动nginx-php" aria-hidden="true">#</a> ◆ 4.4 配置开机自动启动Nginx + PHP</h3>
<blockquote>
<blockquote>
<p>配置开机自动启动Nginx + PHP用vi编辑器打开文件/etc/rc.local：vi /etc/rc.local在末尾增加以下内容：ulimit -SHn 65535/usr/local/webserver/php/sbin/php-fpm start/usr/local/webserver/nginx/sbin/nginx</p>
</blockquote>
</blockquote>
<h3 id="◆-4-6-在不停止nginx服务的情况下平滑变更nginx配置" tabindex="-1"><a class="header-anchor" href="#◆-4-6-在不停止nginx服务的情况下平滑变更nginx配置" aria-hidden="true">#</a> ◆ 4.6 在不停止Nginx服务的情况下平滑变更Nginx配置</h3>
<blockquote>
<blockquote>
<p>在不停止Nginx服务的情况下平滑变更Nginx配置</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这时，输入以下命令查看Nginx主进程号：ps -ef | grep &quot;nginx: master process&quot; | grep -v &quot;grep&quot; | awk -F ' ' '{print $2}'屏幕显示的即为Nginx主进程号，例如：6302这时，执行以下命令即可使修改过的Nginx配置文件生效：kill -HUP 6302或者无须这么麻烦，找到Nginx的pid文件：kill -HUP <code v-pre>cat /usr/local/webserver/nginx/nginx.pid</code></p>
</blockquote>
</blockquote>
<h3 id="◆-4-7-编写每天定时切割nginx日志的脚本" tabindex="-1"><a class="header-anchor" href="#◆-4-7-编写每天定时切割nginx日志的脚本" aria-hidden="true">#</a> ◆ 4.7 编写每天定时切割Nginx日志的脚本</h3>
<blockquote>
<blockquote>
<p>编写每天定时切割Nginx日志的脚本（1）创建脚本/usr/local/webserver/nginx/sbin/cut_nginx_log.sh：vi /usr/local/webserver/nginx/sbin/cut_nginx_log.sh输入以下内容，如代码4-19所示：代码4-19#!/bin/bash# This script run at 00:00# The Nginx logs pathlogs_path=&quot;/usr/local/webserver/nginx/logs/&quot;mkdir -p ${logs_path}$(date -d &quot;yesterday&quot; +&quot;%Y&quot;)/$(date -d &quot;yesterday&quot; +&quot;%m&quot;)/mv ${logs_path}access.log ${logs_path}$(date -d &quot;yesterday&quot; +&quot;%Y&quot;)/$(date -d&quot;yesterday&quot; +&quot;%m&quot;)/access_$(date -d &quot;yesterday&quot; +&quot;%Y%m%d&quot;).logkill -USR1 <code v-pre>cat /usr/local/webserver/nginx/nginx.pid</code>（2）设置crontab，每天凌晨00:00切割nginx访问日志：crontab -e输入以下内容：00 00 * * * /bin/bash /usr/local/webserver/nginx/sbin/cut_nginx_log.sh</p>
</blockquote>
</blockquote>
<h2 id="◆第6章" tabindex="-1"><a class="header-anchor" href="#◆第6章" aria-hidden="true">#</a> ◆第6章</h2>
<h3 id="◆-6-2-常见的web负载均衡方法" tabindex="-1"><a class="header-anchor" href="#◆-6-2-常见的web负载均衡方法" aria-hidden="true">#</a> ◆ 6.2 常见的Web负载均衡方法</h3>
<blockquote>
<blockquote>
<p>常见的Web负载均衡方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Web负载均衡的方法有很多，下面介绍几种常见的负载均衡方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户手动选择方式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这是一种较为古老的方式，通过在主站首页入口提供不同线路、不同服务器链接的方式，来实现负载均衡。这种方式在一些提供下载业务的网站中比较常见，例如：华军软件园</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DNS轮询方式大多域名注册商都支持对同一主机名添加多条A记录，这就是DNS轮询，DNS服务器将解析请求按照A记录的顺序，随机分配到不同的IP上，这样就完成了简单的负载均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>添加完成后，我们用Linux下的dig命令查看ntp.api.bz域名的域名解析情况</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DNS负载均衡存在两个明显的缺点。1. 可靠性低</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设一个域名DNS轮询多台服务器，如果其中的一台服务器发生故障，那么所有的访问该服务器的请求将不会有所回应，这是任何人都不愿意看到的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即使从DNS中去掉该服务器的IP，但在Internet上，各地区电信、网通等宽带接入商将众多的DNS存放在缓存中，以节省访问时间， DNS记录全部生效需要几个小时，甚至更久。所以，尽管DNS轮流在一定程度上解决了负载均衡问题，但是却存在可靠性不高的缺点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>负载分配不均衡DNS负载均衡采用的是简单的轮询负载算法，不能区分服务器的差异，不能反映服务器的当前运行状态，不能做到为性能较好的服务器多分配请求，甚至会出现客户请求集中在某一台服务器上的情况</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DNS服务器是按照一定的层次结构组织的，本地DNS服务器会缓冲已解析的域名到IP地址的映射，这会导致使用该DNS服务器的用户在一段时间内访问的是同一台Web服务器，导致Web服务器间的负载不均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户本地计算机也会缓存已解析的域名到IP地址的映射。当多个用户计算机都缓存了某域名到IP地址的映射时，而这些用户又继续访问该域名下的网页，这时也会导致不同Web服务器间的负载分配不均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DNS轮询方式仅适用于一些可靠性要求不高的服务器集群，例如：图片服务器集群、纯静态网页服务器集群等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>四/七层负载均衡设备由于DNS轮询的缺点，一些对可靠性要求较高的服务器集群，则通过采用四/七层负载均衡设备来实现服务器的负载均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>参见图6-3）。一至四层被认为是低层，这些层与数据移动密切相关。五至七层是高层，包含应用程序级的数据。每一层负责一项具体的工作，然后把数据传送到下一层。由低到高具体分为：物理层、数据链路层、网络层、传输层、会话层、表示层和应用层</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>物理层包括物理连网媒介，实际上就是布线、光纤、网卡和其他用来把两台网络通信设备连接在一起的设施。它规定了激活、维持、关闭通信端点之间的机械特性、电气特性、功能特性及过程特性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据链路层的主要作用是控制网络层与物理层之间的通信。它保证了数据在不可靠的物理线路上进行可靠的传递。它把从网络层接收到的数据分割成特定的可被物理层传输的帧，保证了传输的可靠性。它的主要作用包括：物理地址寻址、数据的成帧、流量控制、数据的检错、重发等。它是独立于网络层和物理层的，工作时无须关心计算机是否正在运行软件还是其他操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据链路层协议的主要内容包括：SDLC、HDLC、PPP、STP、帧中继等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>网络层负责对子网间的数据包进行路由选择，它通过综合考虑发送优先权、网络拥塞程度、服务质量及可选路由的花费来决定一个网络中两个节点的最佳路径。另外，它还可以实现拥塞控制、网际互联等功能。网络层协议的主要内容包括：IP、IPX、RIP、OSPF等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>传输层是OSI模型中最重要的一层，它是两台计算机经过网络进行数据通信时，第一个端到端的层次，起到缓冲作用。当网络层的服务质量不能满足要求时，它将提高服务，以满足高层的要求；而当网络层服务质量较好时，它只须进行很少的工作。另外，它还要处理端到端的差错控制和流量控制等问题，最终为会话提供可靠的、无误的数据传输。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>传输层协议的主要内容包括：TCP、UDP、SPX等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在IP协议栈中第四层是TCP（传输控制协议）和UDP（用户数据报协议）所在的协议层。TCP和UDP包含端口号，它可以唯一区分每个数据包包含哪些应用协议（例如HTTP、FTP、telnet等）。TCP/UDP端口号提供的附加信息可以为网络交换机所利用，四层交换机利用这种信息来区分包中的数据，这是第四层交换的基础。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>会话层负责在网络中的两节点之间建立和维持通信，并保持会话同步，它还决定通信是否中断，以及通信中断时决定从何处重新发送。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表示层的作用是管理数据的解密与加密，如常见的系统口令处理，当你的账户数据在发送前被加密，在网络的另一端，表示层将对接收到的数据解密。另外，表示层还要对图片和文件格式信息进行解码和编码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用层就是为操作系统或网络应用程序提供访问网络服务的接口，包括文件传输、文件管理及电子邮件等的信息处理。应用层协议的代表包括：Telnet、FTP、HTTP、SNMP等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现代负载均衡技术通常操作于OSI网络模型的第四层或第七层。第四层负载均衡将一个Internet上合法注册的IP地址映射为多个内部服务器的IP地址，对每次TCP连接请求动态使用其中一个内部IP地址，达到负载均衡的目的。在第四层交换机中，此种均衡技术得到广泛的应用，一个目标地址是服务器群VIP（虚拟IP，Virtual IP address）连接请求的数据包流经交换机，交换机根据源端和目的IP地址、TCP或UDP端口号和一定的负载均衡策略，在服务器IP和VIP间进行映射，选取服务器群中最好的服务器来处理连接请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>第七层负载均衡控制应用层服务的内容，提供了一种对访问流量的高层控制方式，适合对HTTP服务器群的应用。第七层负载均衡技术通过检查流经的HTTP报头，根据报头内的信息来执行负载均衡任务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常见的四/七层负载均衡设备：1. 硬件四/七层负载均衡交换机硬件四/七层负载均衡交换机的代表有：F5 BIG-IP、Citrix NetScaler、Radware、Cisco CSS、Foundry等产品，这些产品价格不菲，高达几十万元人民币。在中国大陆，采用F5 Network公司的BIG-IP负载均衡交换机的网站（有些网站为部分频道采用）最多，包括：新浪网、雅虎、百度、搜狐、凤凰网、央视国际、中华英才网、猫扑、慧聪网等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图6-4 F5 BIG-IP实现动、静态网页分离的负载均衡架构图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）如图，假设域名blog.s135.com被解析到F5的外网/公网虚拟IP：61.1.1.3（vs_squid），该虚拟IP下有一个服务器池（pool_squid），该服务器池下包含两台真实的Squid服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（192.168.1.11和192.168.1.12）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）如果Squid缓存未命中，则会请求F5的内网虚拟IP：192.168.1.3（vs_apache），该虚拟IP下有一个默认服务器池（pool_apache_default），该服务器池下包含两台真实的Apache服务器（192.168.1.21和192.168.1.22），当该虚拟IP匹配iRules规则时，则会访问另外一个服务器池（pool_apache_irules），该服务器池下同样包含两台真实的Apache服务器（192.168.1.23和192.168.1.24）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）另外，所有真实服务器的默认网关指向F5的自身内网IP，即192.168.1.2。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）所有的真实服务器通过SNAT IP地址61.1.1.4访问互联网。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>软件四层负载均衡</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>软件四层负载均衡的代表作品为LVS（Linux Virtual Server）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>LVS是一个开源的软件，可以实现LINUX平台下的简单负载均衡。LVS集群采用IP负载均衡技术和基于内容请求分发技术。调度器具有很好的吞吐率，将请求均衡地转移到不同的服务器上执行，且调度器自动屏蔽掉服务器的故障，从而将一组服务器构成一个高性能的、高可用的虚拟服务器。整个服务器集群的结构对客户是透明的，而且无须修改客户端和服务器端的程序。为此，在设计时要考虑系统的透明性、可伸缩性、高可用性和易管理性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="3">
<li>软件七层负载均衡软件的七层负载均衡大多基于HTTP反向代理方式，代表产品有Nginx、L7SW（Layer7 switching）、HAProxy等。Nginx的反向代理负载均衡能够很好地支持虚拟主机，可配置性很强，可以按轮询、IP哈希、URL哈希、权重等多种方式对后端服务器做负载均衡，同时还支持后端服务器的健康检查。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多线多地区智能DNS解析与混合负载均衡方式以新浪首页（www.sina.com.cn）为例，负载均衡同时用到了“多线多地区智能DNS解析、DNS轮询、四/七层负载均衡交换机”等技术。智能DNS解析能够根据用户本地设置的DNS服务器线路和地区，将对同一个域名请求解析到不同的IP上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如：当北京电信用户访问www.sina.com.cn时，会被新浪的DNS服务器解析到北京电信机房的IP上；当北京网通用户访问www.sina.com.cn时，会被解析到北京网通机房的IP上；当教育网的用户访问 www.sina.com.cn 时，会</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解析到教育网机房的IP上；当广东电信的用户访问www.sina.com.cn 时，会被解析到广州电信机房的IP上；当湖南、湖北的电信用户访问www.sina.com.cn时，会被解析到武汉电信机房的IP上，等等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将DNS地址设为北京电信的DNS服务器219.141.136.10，通过Linux下的dig命令可以发现，访问 www.sina.com.cn 被解析到了北京电信的多台服务器的IP上，这属于智能DNS解析+DNS轮询解决负载均衡</p>
</blockquote>
</blockquote>
<h3 id="◆-6-3-nginx负载均衡与反向代理的配置实例" tabindex="-1"><a class="header-anchor" href="#◆-6-3-nginx负载均衡与反向代理的配置实例" aria-hidden="true">#</a> ◆ 6.3 Nginx负载均衡与反向代理的配置实例</h3>
<blockquote>
<blockquote>
<p>通过上述示例，我们已经看到Nginx对于多个域名的负载均衡是如何配置的。Upstream指令用于设置一组可以在proxy_pass和fastcgi_pass指令中使用的代理服务器，默认的负载均衡方式为轮询。Upstream模块中的Server指令用于指定后端服务器的名称和参数，服务器的名称可以是一个域名、一个IP地址、端口号或UNIX Socket。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>而在server{...}虚拟主机内，可以通过proxy_pass和fastcgi_pass指令设置进行反向代理的upstream服务器集群。proxy_set_header指令用于在向反向代理的后端Web服务器发起请求时添加指定的Header头信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当后端Web服务器上有多个基于域名的虚拟主机时，要通过添加Header头信息Host，用于指定请求的域名，这样后端Web服务器才能识别该反向代理访问请求由哪一个虚拟主机来处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用反向代理之后，后端Web服务器（以PHP为例）就不能直接通过$_SERVER[&quot;REMOTE_ADDR&quot;]变量来获取用户的真实IP了，通过$_SERVER[&quot;REMOTE_ADDR&quot;]获取的将是Nginx负载均衡服务器的IP。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这时，就要通过在Nginx反向代理时添加Header头信息X-Forwarded-For，让后端Web服务器（以PHP为例）能够通过$_SERVER[&quot;HTTP_X_FORWARDED_FOR&quot;]获取到用户的真实IP。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>动、静态网页分离，就是让动态PHP等程序网页去访问PHP Web服务器，让缓存页、图片、JavaScript、CSS、Flash去访问Squid等缓存服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>NetScaler负载均衡交换机动静分离系统架构图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>NetScarler的七层负载均衡是基于TCP的，可以用于Web Server、MySQL数据库、邮件服务器等大多数基于TCP服务器的负载均衡。Nginx的七层负载均衡仅支持HTTP、邮件协议，能够实现Web Server、邮件服务器的负载均衡。在Web服务器集群应用中，可以通过Nginx负载均衡，来实现并代替NetScaler七层负载均衡的部分功能。对于以上的NetScaler负载均衡架构，我们可以用以下的Nginx负载均衡架构来代替其中的Web服务器部分，如图6-7所示。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx反向代理负载均衡动静分离系统架构图</p>
</blockquote>
</blockquote>
<h3 id="◆-6-4-nginx负载均衡的http-upstream-模块" tabindex="-1"><a class="header-anchor" href="#◆-6-4-nginx负载均衡的http-upstream-模块" aria-hidden="true">#</a> ◆ 6.4 Nginx负载均衡的HTTP Upstream 模块</h3>
<blockquote>
<blockquote>
<p>Upstream模块是Nginx负载均衡的主要模块，它提供了一个简单方法来实现在轮询和客户端IP之间的后端服务器负载均衡，并可以对后端服务器进行健康检查。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>upstream backend  {  server backend1.example.com weight=5;  server backend2.example.com:8080;  server unix:/tmp/backend3;}server {  location / {    proxy_pass  http://backend;  }}</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所以，如果后端的动态应用服务器能够做到SESSION共享，还是建议采用后端服务器的SESSION共享方式来代替Nginx的ip_hash方式。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-5-nginx负载均衡服务器的双机高可用" tabindex="-1"><a class="header-anchor" href="#◆-6-5-nginx负载均衡服务器的双机高可用" aria-hidden="true">#</a> ◆ 6.5 Nginx负载均衡服务器的双机高可用</h3>
<blockquote>
<blockquote>
<p>如果只有一台Nginx负载均衡服务器，当该服务器发生故障时，则会导致整个网站无法访问。因此，我们需要两台以上的Nginx负载均衡服务器，实现故障转移与高可用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>双机高可用一般是通过虚拟IP（也称漂移IP）方式来实现的，基于Linux/Unix的IP别名技术。双机高可用方式目前可分为两种：第一种方式为一台主服务器加一台热备服务器，正常情况下主服务器绑定一个公网虚拟IP，提供负载均衡服务，热备服务器处于空闲状态，当主服务器发生故障时，热备服务器接管主服务器的虚拟IP，提供负载均衡服务；第二种方式为两台负载均衡服务器都处于活动状态，各自绑定一个公网虚拟IP，提供负载均衡服务，当其中一台服务器发生故障时，另一台服务器接管发生故障服务器的虚拟IP。第一种方式较为常见，但始终有一台服务器处于空闲状态，浪费了一台服务器的负载均衡处理能力。第二种方式需要多用一个公网IP，笔者已经在金山游戏官方网站——逍遥网（xoyo.com）线上环境成功使用，能够在正常情况下将两台服务器都用于实际的负载均衡处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>第一种方式：（1）www.yourdomain.com域名解析到虚拟IP 61.1.1.2上。（2）正常情况下，主机61.1.1.4绑定虚拟IP 61.1.1.2。/sbin/ifconfig eth0:1 61.1.1.2 broadcast  61.1.1.255 netmask 255.255.255.0 up/sbin/route add -host 61.1.1.2 dev eth0:1/sbin/arping -I eth0 -c 3 -s 61.1.1.2 61.1.1.1（3）用户访问www.yourdomain.com（虚拟IP 61.1.1.2）实际访问的是主机61.1.1.4，而备机61.1.1.5则处于空闲状态。（4）如果主机61.1.1.4发生故障，备机61.1.1.5将在几秒钟内接管虚拟IP 61.1.1.2，与自己绑定，并发送ARPing包给IDC的公网网关刷新MAC地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）这时，用户访问www.yourdomain.com（虚拟IP 61.1.1.2）实际上访问的是备机61.1.1.5，从而实现故障转移与高可用，避免了单点故障。转移过程如图6-8所示。[插图]图6-8 一台主机配一台备机的可用服务方式另外，第一种方式还可以利用基于VRRP路由协议的Keepalived软件来实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>第二种方式：（1）www.yourdomain.com域名通过DNS轮询解析到虚拟IP 61.1.1.2和61.1.1.3上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）正常情况下，服务器①61.1.1.4绑定虚拟IP 61.1.1.2，服务器②61.1.1.5绑定虚拟IP 61.1.1.3。其联结与运行方式如图6-9所示。[插图]图6-9 两台负载均衡服务器的高可用服务方式（正常状态）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在服务器①61.1.1.4上执行以下命令：/sbin/ifconfig eth0:1 61.1.1.2 broadcast  61.1.1.255 netmask 255.255.255.0 up/sbin/route add -host 61.1.1.2 dev eth0:1/sbin/arping -I eth0 -c 3 -s 61.1.1.2 61.1.1.1在服务器②61.1.1.5上执行以下命令：/sbin/ifconfig eth0:1 61.1.1.3 broadcast  61.1.1.255 netmask 255.255.255.0 up/sbin/route add -host 61.1.1.3 dev eth0:1/sbin/arping -I eth0 -c 3 -s 61.1.1.3 61.1.1.1（3）用户访问www.yourdomain.com（虚拟IP 61.1.1.2和61.1.1.3）实际上是根据DNS轮询访问两台负载均衡服务器，两台服务器均处于活动状态。（4）如果服务器①发生故障，服务器②将在几秒钟内接管服务器①的虚拟IP 61.1.1.2，与自己绑定，并发送ARPing包给IDC的公网网关刷新MAC地址。这时，服务器②同时绑定61.1.1.2和61.1.1.3两个虚拟IP</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图6-10 其中一台负载均衡服务器发生故障的运行方式在服务器②61.1.1.5上执行以下命令：/sbin/ifconfig eth0:1 61.1.1.2 broadcast  61.1.1.255 netmask 255.255.255.0 up/sbin/route add -host 61.1.1.2 dev eth0:1/sbin/arping -I eth0 -c 3 -s 61.1.1.2 61.1.1.1我们可以写两个shell脚本，来实现第二种方式的自动故障转移。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下代码6-7为脚本1（nginx_ha1.sh），部署在Nginx负载均衡服务器①：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Nginx负载均衡服务器①将脚本驻留后台运行：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下代码6-8为脚本2（server2.sh），部署在Nginx负载均衡服务器②：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Nginx负载均衡服务器②将脚本驻留后台运行：</p>
</blockquote>
</blockquote>
<h2 id="◆-第7章-nginx的rewrite规则与实例" tabindex="-1"><a class="header-anchor" href="#◆-第7章-nginx的rewrite规则与实例" aria-hidden="true">#</a> ◆ 第7章 Nginx的Rewrite规则与实例</h2>
<blockquote>
<blockquote>
<p>通过Rewrite规则，可以实现规范的URL、根据变量来做URL转向及选择配置。例如，一些使用MVC框架的程序只有一个入口，可以通过Rewrite来实现。一些动态URL地址须要伪装成静态HTML，便于搜索引擎抓取，也需要Rewrite来处理。一些由于目录结构、域名变化的旧URL，须要跳转到新的URL上，也可以通过Rewrite来处理。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-2-nginx-rewrite规则相关指令" tabindex="-1"><a class="header-anchor" href="#◆-7-2-nginx-rewrite规则相关指令" aria-hidden="true">#</a> ◆ 7.2 Nginx Rewrite规则相关指令</h3>
<blockquote>
<blockquote>
<p>Nginx Rewrite规则相关指令有if、rewrite、set、return、break等，其中rewrite是最关键的指令</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>break指令语法：break默认值：none使用环境：server, location, if该指令的作用是完成当前的规则集，不再处理rewrite指令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>if 指令语法：if (condition) { ... }默认值：none使用环境：server, location该指令用于检查一个条件是否符合，如果条件符合，则执行大括号内的语句。if指令不支持嵌套，不支持多个条件&amp;&amp;和||处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下信息可以被指定为条件：（1）变量名，错误的值包括：空字符串&quot;&quot;，或者任何以0开始的字符串；（2）变量比较可以使用“=”（表示等于）和“!=”（表示不等于）运算符；（3）正则表达式模式匹配可以使用“~<em>”和“~”符号；（4）“~”符号表示区分大小写字母的匹配；（5）“~</em>”符号表示不区分大小写字母的匹配（例如firefox与FireFox是匹配的）；</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）“!~”和“!~<em>”符号的作用刚好和“~”、“!~</em>”相反，表示不匹配；（7）“-f”和“!-f”用来判断文件是否存在；（8）“-d”和“!-d”用来判断目录是否存在；（9）“-e”和“!-e”用来判断文件或目录是否存在；（10）“-x”和“!-x”用来判断文件是否可执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>部分正则表达式可以在圆括号“()”内，其值可以通过后面的变量$1至$9访问</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>return 指令语法：return code默认值：none使用环境：server, location, if该指令用于结束规则的执行并返回状态码给客户端。状态码可以使用这些值：204, 400, 402~406, 408, 410, 411, 413,416及500~504。此外，非标准状态码444将以不发送任何Header头的方式结束连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>示例，如果访问的URL以“.Sh”和“.Bash”结尾，则返回状态码403：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>介绍return指令支持的状态码。204 No Content服务器成功处理了请求，但无须返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。如果客户端是浏览器，那么用户浏览器应保留发送了该请求的页面，而不产生任何文档视图上的变化，即使按照规范新的或更新后的元信息，也应当被应用到用户浏览器活动视图中的文档。400 Bad Request</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于包含语法错误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。402 Payment Required该状态码是为了将来可能的需求而预留的。403 Forbidden</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个HEAD请求，而且服务器希望能够讲清楚为何请求不能被执行，就应该在实体内描述拒绝的原因。当然服务器也可以返回一个404响应，假如它不希望让客户端获得任何信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>404 Not Found请求失败，请求所希望得到的资源未在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久地不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示为何请求被拒绝，或者没有其他适合的响应可用的情况下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>405 Method Not Allowed请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow头信息，用以表示出当前资源能够接受的请求方法的列表。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>鉴于PUT，DELETE方法会对服务器上的资源进行写操作，因而绝大部分的网页服务器都不支持或在默认配置下不支持上述请求方法，对于此类请求均会返回405错误。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>406 Not Acceptable请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。除非这是一个HEAD请求，否则该响应就应当返回一个包含可以让用户或浏览器从中选择最合适的实体特性及地址列表的实体。实体的格式由Content-Type头中定义的媒体类型决定。浏览器可以根据格式及自身能力自行作出最佳选择。但是，规范中并没有定义任何作出此类自动选择的标准。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>408 Request Timeout请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无须进行任何更改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>410 Gone被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址。这样的状况应当被认为是永久性的。如果可能，拥有链接编辑功能的客户端应当在获得用户许可后删除所有指向这个地址的引用。如果服务器不知道或无法确定这个状况是否是永久的，就应该使用404状态码。除非额外说明，否则这个响应是可缓存的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>410响应的目的主要是帮助网站管理员维护网站，通知用户该资源已经不再可用，并且服务器拥有者希望所有指向这个资源的远端连接也被删除。这类事件在限时、增值服务中很普遍。同样，410响应也被用于通知客户端在当前服务器站点上，原本属于某个个人的资源已经不再可用。当然，是否要把所有永久不可用的资源标记为'410 Gone'，以及是否要保持此标记多长时间，完全取决于服务器拥有者。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>411 Length Required服务器拒绝在没有定义Content-Length头的情况下接受请求。在添加了表明请求消息体长度的有效Content-Length头之后，客户端可以再次提交该请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>413 Request Entity Too Large服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或能够处理的范围。此种情况下，服务器可以关闭连接以免客户端继续发送此请求。如果这个状况是临时的，服务器应当返回一个Retry-After的响应头，以告知客户端可以在多少时间以后重新尝试。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>416 Requested Range Not Satisfiable如果请求中包含了Range请求头，并且Range中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义If-Range请求头，那么服务器就应当返回416状态码。假如Range使用的是字节范围，那么这种情况就是指请求指定的所有数据范围的首字节位置都超过了当前资源的长度。服务器也应当在返回416状态码的同时，包含一个Content-Range实体头，用以指明当前资源的长度。这个响应也被禁止使用multipart/byteranges作为其Content-Type。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>500 Internal Server Error服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。501 Not Implemented服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求时。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>502 Bad Gateway作为网关或代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>503 Service Unavailable由于临时的服务器维护或过载，服务器当前无法处理请求。这个状况是临时的，并且将在一段时间以后恢复。如果能够预计延迟时间，那么响应中可以包含一个Retry-After头用以标明这个延迟时间。如果没有给出这个Retry-After信息，那么客户端应当以处理500响应的方式处理它。注意：503状态码的存在并不意味着服务器在过载的时候必须使用它。某些服务器只不过是希望拒绝客户端的连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>504 Gateway Timeout作为网关或代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如HTTP、FTP、LDAP）或辅助服务器（例如DNS）收到响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>/photos/123456重定向到：/path/to/photos/12/1234/123456.png可以用以下方法（注意双引号）：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在if、location、rewrite指令中，可以使用以下全局变量：● $args● $content_length● $content_type● $document_root● $document_uri● $host</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>● $http_user_agent● $http_cookie● $limit_rate● $request_body_file● $request_method● $remote_addr</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>● $remote_port● $remote_user● $request_filename● $request_uri● $query_string● $scheme● $server_protocol● $server_addr</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>● $server_name● $server_port● $uri</p>
</blockquote>
</blockquote>
<h3 id="◆-7-4-nginx的rewrite规则编写实例" tabindex="-1"><a class="header-anchor" href="#◆-7-4-nginx的rewrite规则编写实例" aria-hidden="true">#</a> ◆ 7.4 Nginx的Rewrite规则编写实例</h3>
<blockquote>
<blockquote>
<p>文件和目录不存在时，重定向到某个PHP文件上，适用于WordPress等MVC结构的开源博客系统：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多目录转成参数abc.domian.com/sort/2 =&gt; abc.domian.com/index.php?act=sort&amp;name= abc&amp;id=2：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目录对换/123456/xxxx -&gt; /xxxx?id=123456：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果客户端使用IE浏览器，则重定向到/nginx-ie目录下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>禁止访问多个目录：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>禁止访问以/data开头的文件：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>设置某些类型文件的浏览器缓存时间：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将多级目录下的文件转换成一个文件/job-123-456-789.html指向/job/123/456/789.html：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>禁止访问以.sh、.flv、.mp4为文件名后缀的URL地址：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>#适用于Zend Framework的重写规则：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>根据Referer信息防盗链，代码如下：[插图]</p>
</blockquote>
</blockquote>
<h2 id="◆-第8章-nginx模块开发" tabindex="-1"><a class="header-anchor" href="#◆-第8章-nginx模块开发" aria-hidden="true">#</a> ◆ 第8章 Nginx模块开发</h2>
<blockquote>
<blockquote>
<p>一些访问量非常大、业务逻辑简单的Web应用，如果采用PHP等解析型语言去处理，虽然可行，但是在并发能力、处理速度上将受到限制，耗费的系统资源也会较大，这就要求我们增加更多的服务器来处理这类应用。而采用Nginx模块来处理这类Web应用，在性能上将得到极大的提高，大大减少服务器的数量，并将在很大程度上节省服务器的运维成本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要编写一个Nginx模块，你要熟悉Nginx的配置文件。Nginx配置文件主要分成4部分：main （全局配置）、server（虚拟主机配置）、upstream（主要为反向代理、负载均衡相关配置）和location （目录匹配配置），每部分包含若干个指令。main部分的指令将影响其他所有部分；server部分的指令主要用于指定虚拟主机域名、IP和端口；upstream的指令用于设置反向代理及后端服务器的负载均衡；location部分用于匹配网页位置（例如，根目录“/”、“/images”，等等）。location部分会继承server部分的指令，而server部分会继承main部分的指令；upstream既不会继承指令也不会影响其他部分。它有自己的特殊指令，不需要在其他地方应用。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-1-nginx模块概述" tabindex="-1"><a class="header-anchor" href="#◆-8-1-nginx模块概述" aria-hidden="true">#</a> ◆ 8.1 Nginx模块概述</h3>
<blockquote>
<blockquote>
<p>Nginx的模块不能够像Apache那样动态添加，所有的模块都要预先编译进Nginx的二进制可执行文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx模块有3种角色：（1）Handlers（处理模块）——用于处理HTTP请求并输出内容；（2）Filters（过滤模块）——用于过滤Handler输出的内容；（3）Load-balancers（负载均衡模块）——当有多于一台的后端服务器供选择时，选择一台后端服务器并将HTTP请求转发到该服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当Nginx发送文件或转发请求到其他服务器时，可以用Handlers处理模块为其服务；当需要Nginx把输出压缩或在服务端加一些东西时，可以用Filters过滤模块；Nginx的核心模块主要管理网络层和应用层协议，以及启动针对特定应用的一系列候选模块。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>介绍Nginx模块的处理流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>客户端发送HTTP请求到Nginx服务器→Nginx基于配置文件中的位置选择一个合适的处理模块→负载均衡模块选择一台后端服务器（反向代理情况下）→处理模块进行处理并把输出缓冲放到第一个过滤模块上→第一个过滤模块处理后输出给第二个过滤模块→然后第二个过滤模块又到第三个过滤模块→第N个过滤模块→最后把处理结果发送给客户端。</p>
</blockquote>
</blockquote>
<h2 id="◆-第9章-nginx的web缓存服务与新浪网的开源ncache模块" tabindex="-1"><a class="header-anchor" href="#◆-第9章-nginx的web缓存服务与新浪网的开源ncache模块" aria-hidden="true">#</a> ◆ 第9章 Nginx的Web缓存服务与新浪网的开源NCACHE模块</h2>
<blockquote>
<blockquote>
<p>Web缓存位于内容源Web服务器和客户端之间，当用户访问一个URL时，Web缓存服务器会去后端Web源服务器取回要输出的内容，然后，当下一个请求到来时，如果访问的是相同的URL，Web缓存服务器直接输出内容给客户端，而不是向源服务器再次发送请求。Web缓存降低了内容源Web服务器、数据库的负载，减少了网络延迟，提高了用户访问的响应速度，增强了用户体验。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Web缓存服务器中，最著名的要数Squid Cache（简称为Squid），已经在大多数网站中使用。Squid是一个流行的自由软件（GNU通用公共许可证）的代理服务器和Web缓存服务器。Squid有广泛的用途，从作为网页服务器的前置cache服务器缓存相关请求来提高Web服务器的速度，到为一组人共享网络资源而缓存万维网、域名系统和其他网络搜索，到通过过滤流量帮助网络安全，到局域网通过代理上网。Squid主要设计用于在Unix一类系统运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>新版本Nginx的proxy_cache指令开始支持Web缓存服务，另外，新浪网为Nginx开发的NCACHE模块，也能够支持Web缓存服务，解决了Squid不能充分利用多核CPU的局限，速度比Squid更快。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-2-nginx的web缓存服务" tabindex="-1"><a class="header-anchor" href="#◆-9-2-nginx的web缓存服务" aria-hidden="true">#</a> ◆ 9.2 Nginx的Web缓存服务</h3>
<blockquote>
<blockquote>
<p>Nginx从0.7.48版开始，支持了类似Squid的缓存功能。这个缓存是把URL及相关组合当作Key，用md5算法对Key进行哈希，得到硬盘上对应的哈希目录路径，从而将缓存内容保存在该目录内。它可以支持任意URL链接，同时也支持404/301/302这样的非200状态码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目前官方的Nginx Web缓存服务只能为指定URL或状态码设置过期时间，不支持类似Squid的PURGE指令，手动清除指定缓存页面，但是，通过一个第三方的ngx_cache_purge模块，可以清除指定URL的缓存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>金山逍遥网已经在生产环境使用Nginx的proxy_cache缓存功能多月，十分稳定，速度不逊于Squid。在功能上，Nginx已经具备Squid所拥有的Web缓存加速功能、清除指定URL缓存的功能。而在性能上，Nginx对多核CPU的利用，胜过Squid不少。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在反向代理、负载均衡、健康检查、后端服务器故障转移、重写、易用性上，Nginx也比Squid强大很多。这使得一台Nginx可以同时作为“负载均衡服务器”与“Web缓存服务器”来使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的Web缓存服务主要由proxy_cache相关指令集和fastcgi相关指令集构成，前者用于反向代理时，对后端内容源服务器进行缓存，后者主要用于对FastCGI的动态程序进行缓存。两者的功能基本上一样。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>proxy_cache指令语法：proxy_cache zone_name;默认值：None使用环境：http, server, location该指令用于设置哪个缓存区将被使用，zone_name的值为proxy_cache_path指令创建的缓存区名称。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>proxy_cache_path指令语法：proxy_cache_path path [levels=number]keys_zone=zone_name:zone_size [inactive=time] [max_size=size];默认值：None使用环境：http该指令用于设置缓存文件的存放路径。示例如下：[插图]</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>keys_zone参数用来为这个缓存区起名，500m指内存缓存空间大小为500MB；inactive的1d指如果缓存数据在1天内没有被访问，将被删除；max_size的30g是指硬盘缓存空间为30GB。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="3">
<li>proxy_cache_methods指令语法：proxy_cache_methods [GET HEAD POST];默认值：proxy_cache_methods GET HEAD;使用环境：http, server, location该指令用于设置缓存哪些HTTP方法，默认缓存HTTP GET/HEAD方法，不缓存HTTP POST方法。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="4">
<li>proxy_cache_min_uses指令语法：proxy_cache_min_uses the_number;默认值：proxy_cache_min_uses 1;使用环境：http, server, location该指令用于设置缓存的最小使用次数，默认值为1。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="5">
<li>proxy_cache_valid指令语法：proxy_cache_valid reply_code [reply_code ...] time;默认值：None使用环境：http, server, location该指令用于对不同返回状态码的URL设置不同的缓存时间，例如：[插图]</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="6">
<li>proxy_cache_key指令语法：proxy_cache_key line;默认值：None使用环境：http, server, location该指令用来设置Web缓存的Key值，Nginx根据Key值md5哈希存储缓存。一般根据$host （域名）、$request_uri（请求的路径）等变量组合成proxy_cache_key。例如：[插图]</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们要按照以下步骤，把第三方的ngx_cache_purge模块编译安装到Nginx中，用来清除指定URL的缓存</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>http{ include     mime.types; default_type  application/octet-stream; #charset  utf-8; server_names_hash_bucket_size 128; client_header_buffer_size 32k; large_client_header_buffers 4 32k; sendfile on; #tcp_nopush    on; keepalive_timeout 30; tcp_nodelay on; #注：proxy_temp_path和proxy_cache_path指定的路径必须在同一分区 proxy_temp_path /data0/proxy_temp_path; #设置Web缓存区名称为cache_one，内存缓存空间大小为500MB，自动清除超过1天没有被访问的缓存数据，硬盘缓存空间大小为30GB。 proxy_cache_path  /data0/proxy_cache_path  levels=1:2  keys_zone=cache_one:200m inactive=1d max_size=30g;upstream my_server_pool {  server  192.168.1.2:80 weight=1 max_fails=2 fail_timeout=30s;  server  192.168.1.3:80 weight=1 max_fails=2 fail_timeout=30s;  server  192.168.1.4:80 weight=1 max_fails=2 fail_timeout=30s;}server{  listen     80;  server_name  my.domain.com;  location /  {      proxy_set_header Host  $host;      proxy_set_header X-Forwarded-For  $remote_addr;      proxy_pass http://my_server_pool;  }  location ~ .<em>.(gif|jpg|jpeg|png|bmp|swf|js|css)$  {      #使用Web缓存区cache_one      proxy_cache cache_one;      #对不同HTTP状态码缓存设置不同的缓存时间      proxy_cache_valid  200 304 12h;      proxy_cache_valid  301 302 1m;      proxy_cache_valid  any 1m;      #设置Web缓存的Key值，Nginx根据Key值md5哈希存储缓存，这里根据“域名、URI、参数”组合成Key。      proxy_cache_key $host$uri$is_args$args;      #反向代理，访问后端内容源服务器      proxy_set_header Host  $host;      proxy_set_header X-Forwarded-For  $remote_addr;      proxy_pass http://my_server_pool;  }  #用于清除缓存，假设一个URL为http:// my.domain.com/test.gif，通过访问  http://my.domain.com/purge/test.gif可以清除该URL的缓存。  location ~ /purge(/.</em>)  {      #设置只允许指定的IP或IP段才可以清除URL缓存。      allow         127.0.0.1;      allow         192.168.0.0/16;      deny         all;      proxy_cache_purge   cache_one  $host$1$is_args$args;  }  access_log  off;}</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>fastcgi_cache指令语法：fastcgi_cache zone_name;默认值：off使用环境：http, server, location该指令用于设置哪个缓存区将被使用，zone_name的值为fastcgi_cache_path指令创建的缓存区名称。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>fastcgi_cache_path指令语法：fastcgi_cache_path path [levels=number] keys_zone=zone_name:zone_size [inactive=time] [max_size=size];默认值：None使用环境：http该指令用于设置缓存文件的存放路径</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>fastcgi_cache_path /data0/fastcgi_cache_dir  levels=1:2  keys_zone=cache_one:500m inactive=1d max_size=30g;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该指令只能在http标签内配置，levels指定该缓存空间有两层hash目录，第一层目录为1个字母，第二层为2个字母，保存的文件名会类似/data0/fastcgi_cache_dir/c/29/b7f54b2df-7773722d382f4809d65029c；keys_zone参数用来为这个缓存区起名，500m指内存缓存空间大小为500MB；inactive的1d指如果缓存数据在1天内没有被访问，将被删除；max_size的30g是指硬盘缓存空间为30GB。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="3">
<li>fastcgi_cache_methods指令语法：fastcgi_cache_methods [GET HEAD POST];默认值：fastcgi_cache_methods GET HEAD;使用环境：http, server, location该指令用于设置缓存哪些HTTP方法，默认缓存HTTP GET/HEAD方法，不缓存HTTP POST方法。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="4">
<li>fastcgi_cache_min_uses指令语法：fastcgi_cache_min_uses the_number;默认值：fastcgi_cache_min_uses 1;使用环境：http, server, location该指令用于设置缓存的最小使用次数，默认值为1。5. fastcgi_cache_valid指令语法：fastcgi_cache_valid reply_code [reply_code ...] time;默认值：None使用环境：http, server, location该指令用于对不同返回状态码的URL设置不同的缓存时间</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果不指定状态码，直接指定缓存时间，则只有200、301、302状态的URL缓存5分钟。fastcgi_cache_valid  200 302 10m;fastcgi_cache_valid  301 1h;fastcgi_cache_valid  any 1m;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对没有单独设置的状态码，全部设置缓存时间为1分钟。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="6">
<li>fastcgi_cache_key指令语法：fastcgi_cache_key line;默认值：None使用环境：http, server, location该指令用来设置Web缓存的Key值，Nginx根据Key值md5哈希存储缓存。一般根据FastCGI服务器的地址和端口、$request_uri（请求的路径）等变量组合成fastcgi_cache_key。例如：fastcgi_cache_key 127.0.0.1:9000$request_uri;</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx配置文件（nginx.conf）：对扩展名为gif、jpg、jpeg、png、bmp、swf、js、css的图片、Flash、JavaScript、CSS文件开启Web缓存，其他文件不缓存</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>server{  listen     80;  server_name  my.domain.com;  root /data0/htdocs;  location ~ .*.(php|php5)$  {      #使用Web缓存区cache_one      fastcgi_cache cache_one;      #对不同HTTP状态码缓存设置不同的缓存时间      fastcgi_cache_valid  200 10m;      fastcgi_cache_valid  301 302 1h;      fastcgi_cache_valid  any 1m;      #设置Web缓存的Key值，Nginx根据Key值md5哈希存储缓存，这里根据“FastCGI服务器的IP、端口、请求的URI”组合成Key。      fastcgi_cache_key 127.0.0.1:9000$request_uri;      #FastCGI服务器      fastcgi_pass  127.0.0.1:9000;      fastcgi_index index.php;      include fcgi.conf;  }</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>access_log  off;}</p>
</blockquote>
</blockquote>
<h2 id="◆-第10章" tabindex="-1"><a class="header-anchor" href="#◆-第10章" aria-hidden="true">#</a> ◆ 第10章</h2>
<h3 id="◆-10-1-nginx反向代理与负载均衡类网站应用案例" tabindex="-1"><a class="header-anchor" href="#◆-10-1-nginx反向代理与负载均衡类网站应用案例" aria-hidden="true">#</a> ◆ 10.1 Nginx反向代理与负载均衡类网站应用案例</h3>
<blockquote>
<blockquote>
<p>2008年的新浪播客（v.sina.com.cn、you.video.sina.com.cn）由静态服务器集群和动态服务器集群两部分组成，分别采用不同的域名。静态服务器集群即我们在浏览器地址栏经常能看到v.sina.com.cn和you.video.sina.com.cn域名，采用Squid做前端缓存，服务器分布在全国各地机房。动态服务器集群采用interface.video.sina.com.cn域名，也称接口服务器，主要用来实时显示播放数、记录播放日志、为Flash视频播放器提供数据、与新浪内部产品、外部合作产品交互。接口服务器最上层采用F5 BIG-IP硬件四/七层负载均衡交换机，对4台Nginx反向代理服务器进行四层负载均衡，由这4台Nginx服务器判断URL，进行分组，对后端的3组Web服务器进行七层负载均衡。F5 BIG-IP也支持七层负载均衡，但是，由于一对F5 BIG-IP要服务新浪的多个产品，七层交换需要耗费F5 BIG-IP不少的CPU资源，而F5 BIG-IP四层交换有专门的硬件芯片来处理，耗费的资源较少，所以，在新浪，F5 BIG-IP一般只用四层负载均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>F5 BIG-IP后端的3组Web服务器，配置不一样，第1组为内存密集型服务器，技术类型主要是PHP+Memcached服务；第2组为CPU密集型服务器，主要耗费的是CPU资源；第3组为磁盘密集型服务器，为记录日志等操作，要求磁盘空间大、磁盘转速高。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码10-1是新浪播客接口服务器的Nginx负载均衡配置，提供按URL分组服务、负载均衡服务：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在金山逍遥网（www.xoyo.com）中，前端的负载均衡服务器采用的是Nginx，两台Nginx服务器为一组，承担多种类型的负载均衡服务，两台负载均衡服务器都处于活动状态，各自绑定一个公网虚拟IP，作为负载均衡服务器，当其中一台服务器发生故障时，另一台服务器接管发生故障服务器的虚拟IP。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码10-2是Nginx负载均衡在金山逍遥网中的配置（nginx.conf）：</p>
</blockquote>
</blockquote>
<h2 id="◆-第11章" tabindex="-1"><a class="header-anchor" href="#◆-第11章" aria-hidden="true">#</a> ◆ 第11章</h2>
<h3 id="◆-11-1-用https-ssl-构建一个安全的nginx-web服务器" tabindex="-1"><a class="header-anchor" href="#◆-11-1-用https-ssl-构建一个安全的nginx-web服务器" aria-hidden="true">#</a> ◆ 11.1 用HTTPS（SSL）构建一个安全的Nginx Web服务器</h3>
<blockquote>
<blockquote>
<p>自行颁发的SSL证书虽然能够实现加密传输功能，但得不到浏览器的信任</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要解决浏览器的信任问题，需要由正规的CA机构来颁发证书。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>能够颁发受浏览器信任的SSL证书的CA机构有很多家，国外著名的CA机构有VeriSign、GlobalSign、GeoTrust、Thawte、Visa、Microsoft等，国内的CA机构有中国互联网络信息中心（CNNIC）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>向CA机构申请SSL证书，同样要按照以下步骤操作，先生成自己的私钥文件和CSR文件。然后把CSR文件（api.bz.csr）提交给CA机构，由CA机构生成CRT证书文件给你。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>openssl genrsa -des3 -out api.bz.key 1024openssl req -new -key api.bz.key -out api.bz.csropenssl rsa -in api.bz.key -out api.bz_nopass.key</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CA机构颁发的SSL证书，通常单域名和泛域名的价格不一样，所以在使用openssl生成CSR文件时，须要注意Common Name的填写，如果你购买的是单域名SSL证书，Common Name填写的内容就必须和你购买的SSL证书域名一致。例如你购买了sms.api.bz域名的SSL证书， Common Name就必须填写sms.api.bz：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在国内的互联网企业中，对于安全性要求较高的网站，例如招商银行网上银行、中国工商银行网上银行、中国建设银行网上银行、支付宝、百度的百付宝、腾讯的财付通，可选择VeriSign作为其SSL证书供应商。其他一些网站，例如网易邮箱、金山逍遥网用户中心，采用的是CNNIC颁发的SSL证书。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上述这些CA机构颁发的SSL证书是要付费的。目前只有一家CA机构，颁发的SSL证书是免费的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>跟VeriSign一样，StartSSL（网址：http://www.startssl.com，公司名：StartCom）也是一家CA机构，它的根证书很早之前就被一些具有开源背景的浏览器支持（Firefox浏览器部分版本、谷歌Chrome浏览器、苹果Safari浏览器等）</p>
</blockquote>
</blockquote>
<h3 id="◆-11-2-采用nginx搭建flv视频服务器" tabindex="-1"><a class="header-anchor" href="#◆-11-2-采用nginx搭建flv视频服务器" aria-hidden="true">#</a> ◆ 11.2 采用Nginx搭建FLV视频服务器</h3>
<blockquote>
<blockquote>
<p>采用Nginx的Flv Stream模块搭建HTTP下载方式的FLV视频服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Flv Stream模块是Nginx的可选模块，需要在编译安装Nginx服务器时，把Flv Stream模块加上，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>server{  listen     80;  server_name  flv.domain.com;  index index.shtml index.html index.htm;  root  /data0/htdocs/flv_files;  limit_rate_after 3m;  limit_rate  512k;  location ~ .flv  {    flv;  }  access_log  off;}</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>limit_rate_after 3m和limit_rate 512k两项指令设置了一开始不限速，在客户端下载FLV视频大小超过3MB后，开始限制下载速度为512KB/秒。一开始不限速可以使得刚播放视频时，下载到客户端的视频文件字节数尽量多，用户播放无须长时间等待缓冲。大小超过3MB的视频文件一般都比较大，可以限速让用户边观看边下载，在不影响用户体验的情况下，可以节省不少服务器带宽资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户拖动Flash播放器的进度条时，会发起一个类似http://flv.domain.com/test.flv?start=12345的请求URL到Nginx服务器，告诉Nginx服务器下载start参数值附近的关键帧之后的那部分FLV文件，从而实现拖动播放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>光配置好Nginx服务器不管用，还需要FLV文件MetaData中含有关键帧信息，才能实现拖动播放。一般从其他视频格式转换成FLV视频格式的文件MetaData中是不含关键帧信息的，可以在Linux下使用开源软件自动为FLV文件添加关键帧信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Linux下为FLV文件添加关键帧的常用软件有两种。（1）开源软件Yamdi：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）开源软件FlvTool2：</p>
</blockquote>
</blockquote>
<h3 id="◆-11-3-nginx-php-mysql在小内存vps服务器上的优化" tabindex="-1"><a class="header-anchor" href="#◆-11-3-nginx-php-mysql在小内存vps服务器上的优化" aria-hidden="true">#</a> ◆ 11.3 Nginx+PHP+MySQL在小内存VPS服务器上的优化</h3>
<blockquote>
<blockquote>
<p>VPS（全称Virtual Private Server）是利用最新虚拟化技术在一台物理服务器上创建多个相互隔离的虚拟私有主机。它们以最大化的效率共享硬件、软件许可证及管理资源。对其用户和应用程序来讲，每一个VPS平台的运行和管理都与一台独立主机完全相同，因为每个VPS均可独立进行重启并拥有自己的root访问权限、用户、IP地址、内存、过程、文件、应用程序、系统函数库及配置文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>VPS服务器最重要的指标就是内存大小，多个VPS服务器可以共享一颗CPU，但不能共享同一块内存。内存越大，价格越贵。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果您的VPS提供商没有为您的VPS划分swap交换分区，则可以自行创建swap交换文件来代替交互分区。（1）创建并激活swap交换文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>cd /var/dd if=/dev/zero of=swapfile bs=1024 count=262144/sbin/mkswap swapfile/sbin/swapon swapfile（2）加到fstab文件中让系统引导时自动启动。vi /etc/fstab在末尾增加以下内容：/var/swapfile swap swap defaults 0 0</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的主配置文件（nginx.conf）优化示例如代码11-6所示：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP（FastCGI）的配置优化（1）php.ini配置文件中关于eAcelerator的优化。只使用1MB共享内存，删除所有在最后3600秒内无法存取的脚本缓存，用磁盘辅助进行缓存</p>
</blockquote>
</blockquote>
<h3 id="◆-11-4-采用nginx搭建正向代理服务器" tabindex="-1"><a class="header-anchor" href="#◆-11-4-采用nginx搭建正向代理服务器" aria-hidden="true">#</a> ◆ 11.4 采用Nginx搭建正向代理服务器</h3>
<blockquote>
<blockquote>
<p>正向代理就是通常所说的代理，是某台电脑通过一台服务器来上Internet网的这种方式，其中这台电脑就叫客户机，这台服务器就叫正向代理服务器，也就是通常所说的代理服务器。一般情况下，客户机必须指定代理服务器（IE浏览器可在工具→Internet选项→连接→局域网设置→代理服务器中设置）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx正向代理的nginx.conf配置文件如代码11-9所示：代码11-9......server{  listen     8080;  location / {      #DNS解析服务器的IP地址      resolver 8.8.8.8;      proxy_pass  http://$host$request_uri;  }  access_log  /data1/logs/proxy.log;}  .....</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置完成后，重启Nginx使配置生效。然后，你就可以在IE浏览器菜单栏中的“工具”→“Internet选项”→“连接”→“局域网设置”→“代理服务器”中设置代理服务器IP地址（假设为61.1.1.1）和端口</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>您的IE浏览器就可以在Nginx代理服务器访问Internet了。</p>
</blockquote>
</blockquote>
<h2 id="◆-第4部分-模块篇" tabindex="-1"><a class="header-anchor" href="#◆-第4部分-模块篇" aria-hidden="true">#</a> ◆ 第4部分 模块篇</h2>
<h2 id="◆-第12章-nginx的核心模块" tabindex="-1"><a class="header-anchor" href="#◆-第12章-nginx的核心模块" aria-hidden="true">#</a> ◆ 第12章 Nginx的核心模块</h2>
</div></template>



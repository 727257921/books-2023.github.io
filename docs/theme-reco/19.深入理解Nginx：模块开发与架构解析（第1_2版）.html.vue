<template><div><h1 id="深入理解nginx-模块开发与架构解析-第2版" tabindex="-1"><a class="header-anchor" href="#深入理解nginx-模块开发与架构解析-第2版" aria-hidden="true">#</a> 深入理解Nginx：模块开发与架构解析（第2版）</h1>
<p>陶辉</p>
<h2 id="◆-第1章" tabindex="-1"><a class="header-anchor" href="#◆-第1章" aria-hidden="true">#</a> ◆ 第1章</h2>
<h3 id="◆-1-1-nginx是什么" tabindex="-1"><a class="header-anchor" href="#◆-1-1-nginx是什么" aria-hidden="true">#</a> ◆ 1.1 Nginx是什么</h3>
<blockquote>
<blockquote>
<p>Nginx的竞争对手——Apache、Lighttpd、Tomcat、Jetty、IIS，它们都是Web服务器，或者叫做WWW（World Wide Web）服务器，相应地也都具备Web服务器的基本功能：基于REST架构风格[插图]，以统一资源描述符（Uniform Resource Identifier，URI）或者统一资源定位符（Uniform Resource Locator，URL）作为沟通依据，通过HTTP为浏览器等客户端程序提供各种网络服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Tomcat和Jetty面向Java语言，先天就是重量级的Web服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>IIS只能在Windows操作系统上运行。Windows作为服务器在稳定性与其他一些性能上都不如类UNIX操作系统，因此，在需要高性能Web服务器的场合下，IIS可能会被“冷落”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Apache的发展时期很长，而且是目前毫无争议的世界第一大Web服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Apache有许多优点，如稳定、开源、跨平台</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它被设计成了一个重量级的、不支持高并发的Web服务器。在Apache服务器上，如果有数以万计的并发HTTP请求同时访问，就会导致服务器上消耗大量内存，操作系统内核对成百上千的Apache进程做进程间切换也会消耗大量CPU资源，并导致HTTP请求的平均响应速度降低，这些都决定了Apache不可能成为高性能Web服务器，这也促使了Lighttpd和Nginx的出现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Lighttpd和Nginx一样，都是轻量级、高性能的Web服务器，欧美的业界开发者比较钟爱Lighttpd，而国内的公司更青睐Nginx，Lighttpd使用得比较少。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用C语言开发了Nginx</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx使用基于事件驱动的架构能够并发处理百万级别的TCP连接，高度模块化的设计和自由的许可证使得扩展Nginx功能的第三方模块层出不穷，而且优秀的设计带来了极佳的稳定性，因此其作为Web服务器被广泛应用到大流量的网站上，包括腾讯、新浪、网易、淘宝等访问量巨大的网站。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于高效处理大规模并发连接，它支持Linux上的epoll（epoll是Linux上处理大并发网络连接的利器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Solaris上的event ports和FreeBSD上的kqueue等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于Linux，Nginx支持其独有的sendfile系统调用，这个系统调用可以高效地把硬盘中的数据发送到网络上（不需要先把硬盘数据复制到用户态内存上再发送），这极大地减少了内核态与用户态数据间的复制动作。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-为什么选择nginx" tabindex="-1"><a class="header-anchor" href="#◆-1-2-为什么选择nginx" aria-hidden="true">#</a> ◆ 1.2 为什么选择Nginx</h3>
<blockquote>
<blockquote>
<p>为什么选择Nginx？因为它具有以下特点：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）更快</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）高扩展性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个正常的HTTP模块在处理完请求后，会有一串HTTP过滤器模块对请求的结果进行再处理。这样，当我们开发一个新的HTTP模块时，不但可以使用诸如HTTP核心模块、events模块、log模块等不同层次或者不同类型的模块，还可以原封不动地复用大量已有的HTTP过滤器模块。这种低耦合度的优秀设计，造就了Nginx庞大的第三方模块</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的模块都是嵌入到二进制文件中执行的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）高可靠性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的高可靠性来自于其核心框架代码的优秀设计、模块设计的简单性；另外，官方提供的常用模块都非常稳定，每个worker进程相对独立，master进程在1个worker进程出错时可以快速“拉起”新的worker子进程提供服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）低内存消耗</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般情况下，10000个非活跃的HTTP Keep-Alive连接在Nginx中仅消耗2.5MB的内存，这是Nginx支持高并发连接的基础。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）单机支持10万以上的并发连接</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>理论上，Nginx支持的并发连接上限取决于内存，10万远未封顶。当然，能够及时地处理更多的并发请求，是与业务特点紧密相关的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）热部署</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>master管理进程与worker工作进程的分离设计，使得Nginx能够提供热部署功能，即可以在7×24小时不间断服务的前提下，升级Nginx的可执行文件。当然，它也支持不停止服务就更新配置项、更换日志文件等功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）最自由的BSD许可协议</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>BSD许可协议不只是允许用户免费使用Nginx，它还允许用户在自己的项目中直接使用或修改Nginx源码，然后发布。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>选择Nginx的核心理由还是它能在支持高并发请求的同时保持高效的服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果Web服务器的业务访问量巨大，就需要保证在数以百万计的请求同时访问服务时，用户可以获得良好的体验，不会出现并发访问量达到一个数字后，新的用户无法获取服务，或者虽然成功地建立起了TCP连接，但大部分请求却得不到响应的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在低并发压力下，用户可以获得高速体验，而在高并发压力下，更多的用户都能接入，可能访问速度会下降，但这只应受制于带宽和处理器的速度，而不应该是服务器设计导致的软件瓶颈。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx先天的事件驱动型设计、全异步的网络I/O处理机制、极少的进程间切换以及许多优化设计，都使得Nginx天生善于处理高并发压力下的互联网请求，同时Nginx降低了资源消耗，可以把服务器硬件资源“压榨”到极致。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-准备工作" tabindex="-1"><a class="header-anchor" href="#◆-1-3-准备工作" aria-hidden="true">#</a> ◆ 1.3 准备工作</h3>
<blockquote>
<blockquote>
<p>Linux 2.6及以上内核才支持epoll，而在Linux上使用select或poll来解决事件的多路复用，是无法解决高并发压力问题的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用uname-a命令来查询Linux内核版本</p>
<p>如果要使用Nginx的常用功能，那么首先需要确保该操作系统上至少安装了如下软件：</p>
<p>（1）GCC编译器</p>
<p>GCC（GNU Compiler Collection）可用来编译C语言程序。Nginx不会直接提供二进制可执行程序（1.2.x版本中已经开始提供某些操作系统上的二进制安装包了，不过，本书探讨如何开发Nginx模块是必须通过直接编译源代码进行的），这有许多原因，本章后面会详述。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）PCRE（Perl Compatible Regular Expressions，Perl兼容正则表达式）是由Philip Hazel开发的函数库，目前为很多软件所使用，该库支持正则表达式。它由RegEx演化而来，实际上，Perl正则表达式也是源自于Henry Spencer写的RegEx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们在配置文件nginx.conf里使用了正则表达式，那么在编译Nginx时就必须把PCRE库编译进Nginx，因为Nginx的HTTP模块要靠它来解析正则表达式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>pcre-devel是使用PCRE做二次开发时所需要的开发库，包括头文件等，这也是编译Nginx所必须使用的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）zlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf里配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量，那么，在编译时就必须把zlib编译进Nginx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zlib是直接使用的库，zlib-devel是二次开发所需要的库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）OpenSSL开发库：如果我们的服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么就需要拥有OpenSSL了。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面所列的4个库只是完成Web服务器最基本功能所必需的。</p>
<p>1.3.3　磁盘目录：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要使用Nginx，还需要在Linux文件系统上准备以下目录。</p>
<p>（1）Nginx源代码存放目录</p>
<p>该目录用于放置从官网上下载的Nginx源码文件，以及第三方或我们自己所写的模块源代码文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）Nginx编译阶段产生的中间文件存放目录</p>
<p>该目录用于放置在configure命令执行后所生成的源文件及目录，以及make命令执行后生成的目标文件和最终连接成功的二进制文件。默认情况下，configure命令会将该目录命名为objs，并放在Nginx源代码目录下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）部署目录</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该目录存放实际Nginx服务运行期间所需要的二进制文件、配置文件等。默认情况下，该目录为/usr/local/nginx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）日志文件存放目录</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>日志文件通常会比较大，当研究Nginx的底层架构时，需要打开debug级别的日志，这个级别的日志非常详细，会导致日志文件的大小增长得极快，需要预先分配一个拥有更大磁盘空间的目录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1.3.4　Linux内核参数的优化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认的Linux内核参数考虑的是最通用的场景，这明显不符合用于支持高并发访问的Web服务器的定义，所以需要修改Linux内核参数，使得Nginx可以拥有更高的性能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常会根据业务特点来进行调整，当Nginx作为静态Web内容服务器、反向代理服务器或是提供图片缩略图功能（实时压缩图片）的服务器时，其内核参数的调整都是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx支持更多并发请求的TCP网络参数做简单说明</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要修改/etc/sysctl.conf来更改内核参数。例如，最常用的配置：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118131636325.png" alt="image-20220118131636325"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>然后执行sysctl-p命令，使上述修改生效。上面的参数意义解释如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ file-max：这个参数表示进程（比如一个worker进程）可以同时打开的最大句柄数，这个参数直接限制最大并发连接数，需根据实际情况配置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_tw_reuse：这个参数设置为1，表示允许将TIME-WAIT状态的socket重新用于新的TCP连接，这对于服务器来说很有意义，因为服务器上总会有大量TIME-WAIT状态的连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_keepalive_time：这个参数表示当keepalive启用时，TCP发送keepalive消息的频度。默认是2小时，若将其设置得小一些，可以更快地清理无效的连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_fin_timeout：这个参数表示当服务器主动关闭连接时，socket保持在FIN-WAIT-2状态的最大时间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_max_tw_buckets：这个参数表示操作系统允许TIME_WAIT套接字数量的最大值，如果超过这个数字，TIME_WAIT套接字将立刻被清除并打印警告信息。该参数默认为180000，过多的TIME_WAIT套接字会使Web服务器变慢。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_max_syn_backlog：这个参数表示TCP三次握手建立阶段接收SYN请求队列的最大长度，默认为1024，将其设置得大一些可以使出现Nginx繁忙来不及accept新连接的情况时，Linux不至于丢失客户端发起的连接请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ ip_local_port_range：这个参数定义了在UDP和TCP连接中本地（不包括连接的远端）端口的取值范围。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ net.ipv4.tcp_rmem：这个参数定义了TCP接收缓存（用于TCP接收滑动窗口）的最小值、默认值、最大值。❑ net.ipv4.tcp_wmem：这个参数定义了TCP发送缓存（用于TCP发送滑动窗口）的最小值、默认值、最大值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ netdev_max_backlog：当网卡接收数据包的速度大于内核处理的速度时，会有一个队列保存这些数据包。这个参数表示该队列的最大值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ rmem_default：这个参数表示内核套接字接收缓存区默认的大小。❑ wmem_default：这个参数表示内核套接字发送缓存区默认的大小。❑ rmem_max：这个参数表示内核套接字接收缓存区的最大大小。❑ wmem_max：这个参数表示内核套接字发送缓存区的最大大小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意：滑动窗口的大小与套接字缓存区会在一定程度上影响并发连接的数目。每个TCP连接都会为维护TCP滑动窗口而消耗内存，这个窗口会根据服务器的处理速度收缩或扩张。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>参数wmem_max的设置，需要平衡物理内存的总大小、Nginx并发处理的最大连接数量（由nginx.conf中的worker_processes和worker_connections参数决定）而确定。当然，如果仅仅为了提高并发量使服务器不出现Out Of Memory问题而去降低滑动窗口大小，那么并不合适，因为滑动窗口过小会影响大数据量的传输速度。rmem_default、wmem_default、rmem_max、wmem_max这4个参数的设置需要根据我们的业务特性以及实际的硬件成本来综合考虑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tcp_syncookies：该参数与性能无关，用于解决TCP的SYN攻击。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-4-编译安装nginx" tabindex="-1"><a class="header-anchor" href="#◆-1-4-编译安装nginx" aria-hidden="true">#</a> ◆ 1.4 编译安装Nginx</h3>
<blockquote>
<blockquote>
<p>configure命令做了大量的“幕后”工作，包括检测操作系统内核和已经安装的软件，参数的解析，中间目录的生成以及根据各种参数生成一些C源码文件、Makefile文件等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>make命令根据configure命令生成的Makefile文件编译Nginx工程，并生成目标文件、最终的二进制文件。make install命令根据configure执行时的参数将Nginx部署到指定的安装目录，包括相关目录的建立和二进制文件、配置文件的复制。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-5-configure详解" tabindex="-1"><a class="header-anchor" href="#◆-1-5-configure详解" aria-hidden="true">#</a> ◆ 1.5 configure详解</h3>
<blockquote>
<blockquote>
<p>configure详解</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>configure的命令参数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它的参数分为了四大类型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1.路径相关的参数</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134206963.png" alt="image-20220118134206963"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.编译相关的参数</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134216892.png" alt="image-20220118134216892"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3.依赖软件的相关参数</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134234199.png" alt="image-20220118134234199"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134251136.png" alt="image-20220118134251136"></p>
<p>4.模块相关的参数</p>
<p>在configure的参数中，我们把它们分为五大类。</p>
<p>❑ 事件模块。</p>
<p>❑ 默认即编译进入Nginx的HTTP模块。</p>
<p>❑ 默认不会编译进入Nginx的HTTP模块。</p>
<p>❑ 邮件代理服务器相关的mail模块。</p>
<p>❑ 其他模块。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-6-nginx的命令行控制" tabindex="-1"><a class="header-anchor" href="#◆-1-6-nginx的命令行控制" aria-hidden="true">#</a> ◆ 1.6 Nginx的命令行控制</h3>
<blockquote>
<blockquote>
<p>在Linux中，需要使用命令行来控制Nginx服务器的启动与停止、重载配置文件、回滚日志文件、平滑升级等行为。默认情况下，Nginx被安装在目录/usr/local/nginx/中，其二进制文件路径为/usr/local/nginc/sbin/nginx，配置文件路径为/usr/local/nginx/conf/nginx.conf。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）默认方式启动</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>直接执行Nginx二进制程序</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>会读取默认路径下的配置文件：/usr/local/nginx/conf/nginx.conf。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）另行指定配置文件的启动方式使用-c参数指定配置文件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>会读取-c参数后指定的nginx.conf配置文件来启动Nginx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）另行指定安装目录的启动方式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）另行指定全局配置项的启动方式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用-V参数除了可以显示Nginx的版本信息外，还可以显示配置编译阶段的信息，如GCC编译器的版本、操作系统的版本、执行configure时的参数等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用-s stop可以强制停止Nginx服务。-s参数其实是告诉Nginx程序向正在运行的Nginx服务发送信号量，Nginx程序通过nginx.pid文件中得到master进程的进程ID，再向运行中的master进程发送TERM信号来快速地关闭Nginx服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果通过kill命令直接向nginx master进程发送TERM或者INT信号，效果是一样的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134840439.png" alt="image-20220118134840439"></p>
<p>或者：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134854300.png" alt="image-20220118134854300"></p>
<p>上述两条命令的效果与执行/usr/local/nginx/sbin/nginx-s stop是完全一样的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果希望Nginx服务可以正常地处理完当前所有请求再停止服务，那么可以使用-s quit参数来停止服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该命令与快速停止Nginx服务是有区别的。当快速停止服务时，worker进程与master进程在收到信号后会立刻跳出循环，退出进程。而“优雅”地停止服务时，首先会关闭监听端口，停止接收新的连接，然后把当前正在处理的连接全部处理完，最后再退出进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与快速停止服务相似，可以直接发送QUIT信号给master进程来停止服务，其效果与执行-s quit命令是一样的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134801897.png" alt="image-20220118134801897"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果希望“优雅”地停止某个worker进程，那么可以通过向该进程发送WINCH信号来停止服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118134914736.png" alt="image-20220118134914736"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（12）日志文件回滚：使用-s reopen参数可以重新打开日志文件，这样可以先把当前日志文件改名或转移到其他目录中进行备份，再重新打开时就会生成新的日志文件。这个功能使得日志文件不至于过大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（13）平滑升级Nginx：当Nginx服务升级到新的版本时，必须要将旧的二进制文件Nginx替换掉，通常情况下这是需要重启服务的，但Nginx支持不重启服务来完成新版本的平滑升级。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>升级时包括以下步骤：</p>
<p>1）通知正在运行的旧版本Nginx准备升级。通过向master进程发送USR2信号可达到目的。例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118135051854.png" alt="image-20220118135051854"></p>
<p>这时，运行中的Nginx会将pid文件重命名，如将/usr/local/nginx/logs/nginx.pid重命名为/usr/local/nginx/logs/nginx.pid.oldbin，这样新的Nginx才有可能启动成功。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）启动新版本的Nginx</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）通过kill命令向旧版本的master进程发送SIGQUIT信号，以“优雅”的方式关闭旧版本的Nginx。随后将只有新版本的Nginx服务运行，此时平滑升级完毕。</p>
</blockquote>
</blockquote>
<h2 id="◆-第2章" tabindex="-1"><a class="header-anchor" href="#◆-第2章" aria-hidden="true">#</a> ◆ 第2章</h2>
<h3 id="◆-2-1-运行中的nginx进程间的关系" tabindex="-1"><a class="header-anchor" href="#◆-2-1-运行中的nginx进程间的关系" aria-hidden="true">#</a> ◆ 2.1 运行中的Nginx进程间的关系</h3>
<blockquote>
<blockquote>
<p>worker进程的数量与服务器上的CPU核心数相等。每一个worker进程都是繁忙的，它们在真正地提供互联网服务，master进程则很“清闲”，只负责监控管理worker进程。worker进程之间通过共享内存、原子操作等一些进程间通信机制来实现负载均衡等功能</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118135211803.png" alt="image-20220118135211803"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx是支持单进程（master进程）提供服务的，那么为什么产品环境下要按照master-worker方式配置同时启动多个进程呢？这样做的好处主要有以下两点：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 由于master进程不会对用户请求提供服务，只用于管理真正提供服务的worker进程，所以master进程可以是唯一的，它仅专注于自己的纯管理工作，为管理员提供命令行服务，包括诸如启动服务、停止服务、重载配置文件、平滑升级程序等。master进程需要拥有较大的权限，例如，通常会利用root用户启动master进程。worker进程的权限要小于或等于master进程，这样master进程才可以完全地管理worker进程。当任意一个worker进程出现错误从而导致coredump时，master进程会立刻启动新的worker进程继续服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 多个worker进程处理互联网请求不但可以提高服务的健壮性（一个worker进程出错后，其他worker进程仍然可以正常提供服务），最重要的是，这样可以充分利用现在常见的SMP多核架构，从而实现微观上真正的多核并发处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为什么要把worker进程数量设置得与CPU核心数量一致呢？这正是Nginx与Apache服务器的不同之处。在Apache上每个进程在一个时刻只处理一个请求，因此，如果希望Web服务器拥有并发处理的请求数更多，就要把Apache的进程或线程数设置得更多，通常会达到一台服务器拥有几百个工作进程，这样大量的进程间切换将带来无谓的系统资源消耗。而Nginx</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个worker进程可以同时处理的请求数只受限于内存大小，而且在架构设计上，不同的worker进程之间处理并发请求时几乎没有同步锁的限制，worker进程通常不会进入睡眠状态，因此，当Nginx上的进程数与CPU核心数相等时（最好每一个worker进程都绑定特定的CPU核心），进程间切换的代价是最小的。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-nginx配置的通用语法" tabindex="-1"><a class="header-anchor" href="#◆-2-2-nginx配置的通用语法" aria-hidden="true">#</a> ◆ 2.2 Nginx配置的通用语法</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118135710335.png" alt="image-20220118135710335"></p>
</blockquote>
</blockquote>
<h5 id="_2-2-1-块配置项" tabindex="-1"><a class="header-anchor" href="#_2-2-1-块配置项" aria-hidden="true">#</a> 2.2.1　块配置项：</h5>
<blockquote>
<blockquote>
<p>块配置项由一个块配置项名和一对大括号组成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>events、http、server、location、upstream等都是块配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>块配置项可以嵌套。内层块直接继承外层块，例如，上例中，server块里的任意配置都是基于http块里的已有配置的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，上例在http模块中已经打开了“gzip on;”，但其下的location/webstatic又把gzip关闭了：gzip off;，最终，在/webstatic的处理模块中，gzip模块是按照gzip off来处理请求的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果配置项值中包括语法符号，比如空格符，那么需要使用单引号或双引号括住配置项值，否则Nginx会报语法错误。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当指定空间大小时，可以使用的单位包括：❑ K或者k千字节（KiloByte，KB）。❑ M或者m兆字节（MegaByte，MB）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118135913292.png" alt="image-20220118135913292"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当指定时间时，可以使用的单位包括：❑ ms（毫秒），s（秒），m（分钟），h（小时），d（天），w（周，包含7天），M（月，包含30天），y（年，包含365天）。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118140003332.png" alt="image-20220118140003332"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有些模块允许在配置项中使用变量，如在日志记录部分</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种变量只有少数模块支持，并不是通用的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在执行configure命令时，我们已经把许多模块编译进Nginx中，但是否启用这些模块，一般取决于配置文件中相应的配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大部分模块都必须在nginx.conf中读取某个配置项后才会在运行时启用。例如，只有当配置http{...}这个配置项时，ngx_http_module模块才会在Nginx中启用，其他依赖ngx_http_module的模块也才能正常使用。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-3-nginx服务的基本配置" tabindex="-1"><a class="header-anchor" href="#◆-2-3-nginx服务的基本配置" aria-hidden="true">#</a> ◆ 2.3 Nginx服务的基本配置</h3>
<blockquote>
<blockquote>
<p>Nginx在运行时，至少必须加载几个核心模块和一个事件类模块</p>
</blockquote>
</blockquote>
<h5 id="❑-用于调试、定位问题的配置项。" tabindex="-1"><a class="header-anchor" href="#❑-用于调试、定位问题的配置项。" aria-hidden="true">#</a> ❑ 用于调试、定位问题的配置项。</h5>
<h5 id="❑-正常运行的必备配置项。" tabindex="-1"><a class="header-anchor" href="#❑-正常运行的必备配置项。" aria-hidden="true">#</a> ❑ 正常运行的必备配置项。</h5>
<h5 id="❑-优化性能的配置项。" tabindex="-1"><a class="header-anchor" href="#❑-优化性能的配置项。" aria-hidden="true">#</a> ❑ 优化性能的配置项。</h5>
<h5 id="❑-事件类配置项-有些事件类配置项归纳到优化性能类-这是因为它们虽然也属于events-块-但作用是优化性能-。" tabindex="-1"><a class="header-anchor" href="#❑-事件类配置项-有些事件类配置项归纳到优化性能类-这是因为它们虽然也属于events-块-但作用是优化性能-。" aria-hidden="true">#</a> ❑ 事件类配置项（有些事件类配置项归纳到优化性能类，这是因为它们虽然也属于events{}块，但作用是优化性能）。</h5>
<blockquote>
<blockquote>
<p>先来看一下用于调试进程、定位问题的配置项，如下所示。</p>
<p>（1）是否以守护进程方式运行Nginx语法：daemon on|off;默认：daemon on;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>守护进程（daemon）是脱离终端并且在后台运行的进程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx还是提供了关闭守护进程的模式，之所以提供这种模式，是为了方便跟踪调试Nginx，毕竟用gdb调试进程时最烦琐的就是如何继续跟进fork出的子进程了。</p>
</blockquote>
</blockquote>
<p>备注：</p>
<h5 id="一、gdb简介" tabindex="-1"><a class="header-anchor" href="#一、gdb简介" aria-hidden="true">#</a> 一、gdb简介</h5>
<p>GDB是一个由GNU开源组织发布的、UNIX/<a href="https://so.csdn.net/so/search?q=LINUX%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">LINUX操作系统<ExternalLinkIcon/></a>下的、基于命令行的、功能强大的程序调试工具。 对于一名Linux下工作的c/c++程序员，gdb是必不可少的工具；</p>
<blockquote>
<blockquote>
<p>（2）是否以master/worker方式工作语法：master_process on|off;默认：master_process on;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>提供master_process配置也是为了方便跟踪调试Nginx。如果用off关闭了master_process方式，就不会fork出worker子进程来处理请求，而是用master进程自身来处理请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）error日志的设置</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：error_log/path/file level;默认：error_log logs/error.log error;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>/path/file也可以是/dev/null，这样就不会输出任何日志了，这也是关闭error日志的唯一手段；/path/file也可以是stderr，这样日志会输出到标准错误文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>level是日志的输出级别，取值范围是debug、info、notice、warn、error、crit、alert、emerg，从左至右级别依次增大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当设定为一个级别时，大于或等于该级别的日志都会被输出到/path/file文件中，小于该级别的日志则不会输出。例如，当设定为error级别时，error、crit、alert、emerg级别的日志都会输出。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果设定的日志级别是debug，则会输出所有的日志，这样数据量会很大，需要预先确保/path/file所在磁盘有足够的磁盘空间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意：如果日志级别设定到debug，必须在configure时加入--with-debug配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）是否处理几个特殊的调试点语法：debug_points[stop|abort]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个配置项也是用来帮助用户跟踪调试Nginx的。它接受两个参数：stop和abort。Nginx在一些关键的错误逻辑中（Nginx 1.0.14版本中有8处）设置了调试点。如果设置了debug_points为stop，那么Nginx的代码执行到这些调试点时就会发出SIGSTOP信号以用于调试。如果debug_points设置为abort，则会产生一个coredump文件，可以使用gdb来查看Nginx当时的各种信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）仅对指定的客户端输出debug级别的日志</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：debug_connection[IP|CIDR]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个配置项实际上属于事件类配置，因此，它必须放在events{...}中才有效。它的值可以是IP地址或CIDR地址，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118140812826.png" alt="image-20220118140812826"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>仅仅来自以上IP地址的请求才会输出debug级别的日志，其他请求仍然沿用error_log中配置的日志级别。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）指定coredump文件生成目录语法：working_directory path;worker进程的工作目录。这个配置项的唯一用途就是设置coredump文件所放置的目录，协助定位问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面是正常运行的配置项的相关介绍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）定义环境变量语法：env VAR|VAR=VALUE这个配置项可以让用户直接设置操作系统上的环境变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）嵌入其他配置文件语法：include/path/file;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>include配置项可以将其他配置文件嵌入到当前的nginx.conf文件中，它的参数既可以是绝对路径，也可以是相对路径（相对于Nginx的配置目录，即nginx.conf所在的目录），例如：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>参数的值可以是一个明确的文件名，也可以是含有通配符*的文件名，同时可以一次嵌入多个配置文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）pid文件的路径</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：pid path/file;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>保存master进程ID的pid文件存放路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）Nginx worker进程运行的用户及用户组语法：user username[groupname];默认：user nobody nobody;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>user用于设置master进程启动后，fork出的worker进程运行在哪个用户和用户组下。当按照“user username;”设置时，用户组名与用户名相同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>若用户在configure命令执行时使用了参数--user=username和--group=groupname，此时nginx.conf将使用参数中指定的用户和用户组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）指定Nginx worker进程可以打开的最大句柄描述符个数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：worker_rlimit_nofile limit;设置一个worker进程可以打开的最大文件句柄数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）限制信号队列语法：worker_rlimit_sigpending limit;设置每个用户发往Nginx的信号队列的大小。也就是说，当某个用户的信号队列满了，这个用户再发送的信号量会被丢掉。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面是优化性能的配置项的相关介绍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）Nginx worker进程个数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：worker_processes 1;</p>
<p>在master/worker运行方式下，定义worker进程的个数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每个worker进程都是单线程的进程，它们会调用各个模块以实现多种多样的功能。如果这些模块确认不会出现阻塞式的调用，那么，有多少CPU内核就应该配置多少个进程；反之，如果有可能出现阻塞式调用，那么需要配置稍多一些的worker进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，如果业务方面会致使用户请求大量读取本地磁盘上的静态资源文件，而且服务器上的内存较小，以至于大部分的请求访问静态资源文件时都必须读取磁盘（磁头的寻址是缓慢的），而不是内存中的磁盘缓存，那么磁盘I/O调用可能会阻塞住worker进程少量时间，进而导致服务整体性能下降。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多worker进程可以充分利用多核系统架构，但若worker进程的数量多于CPU内核数，那么会增大进程间切换带来的消耗（Linux是抢占式内核）。一般情况下，用户要配置与CPU内核数相等的worker进程，并且使用下面的worker_cpu_affinity配置来绑定CPU内核。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）绑定Nginx worker进程到指定的CPU内核</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：worker_cpu_affinity cpumask[cpumask...]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为什么要绑定worker进程到指定的CPU内核呢？假定每一个worker进程都是非常繁忙的，如果多个worker进程都在抢同一个CPU，那么这就会出现同步问题。反之，如果每一个worker进程都独享一个CPU，就在内核的调度策略上实现了完全的并发。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，如果有4颗CPU内核，就可以进行如下配置：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118141642648.png" alt="image-20220118141642648"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>worker_cpu_affinity配置仅对Linux操作系统有效。Linux操作系统使用sched_setaffinity()系统调用实现这个功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）SSL硬件加速</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：ssl_engine device；如果服务器上有SSL硬件加速设备，那么就可以进行配置以加快SSL协议的处理速度。用户可以使用OpenSSL提供的命令来查看是否有SSL硬件加速设备：<img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118141815729.png" alt="image-20220118141815729"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）系统调用gettimeofday的执行频率</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下，每次内核的事件调用（如epoll、select、poll、kqueue等）返回时，都会执行一次gettimeofday，实现用内核的时钟来更新Nginx中的缓存时钟。在早期的Linux内核中，gettimeofday的执行代价不小，因为中间有一次内核态到用户态的内存复制。当需要降低gettimeofday的调用频率时，可以使用timer_resolution配置。例如，“timer_resolution 100ms；”表示至少每100ms才调用一次gettimeofday。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但在目前的大多数内核中，如x86-64体系架构，gettimeofday只是一次vsyscall，仅仅对共享内存页中的数据做访问，并不是通常的系统调用，代价并不大，一般不必使用这个配置。而且，如果希望日志文件中每行打印的时间更准确，也可以使用它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）Nginx worker进程优先级设置</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：worker_priority nice;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：worker_priority 0;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Linux或其他类UNIX操作系统中，当许多进程都处于可执行状态时，将按照所有进程的优先级来决定本次内核选择哪一个进程执行。进程所分配的CPU时间片大小也与进程优先级相关，优先级越高，进程分配到的时间片也就越大（例如，在默认配置下，最小的时间片只有5ms，最大的时间片则有800ms）。这样，优先级高的进程会占有更多的系统资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>优先级由静态优先级和内核根据进程执行情况所做的动态调整（目前只有±5的调整）共同决定。nice值是进程的静态优先级，它的取值范围是–20~+19，–20是最高优先级，+19是最低优先级。因此，如果用户希望Nginx占有更多的系统资源，那么可以把nice值配置得更小一些，但不建议比内核进程的nice值（通常为–5）还要小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面是事件类配置项的相关介绍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）是否打开accept锁语法：accept_mutex[on|off]默认：accept_mutext on;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>accept_mutex是Nginx的负载均衡锁</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>accept_mutex这把锁可以让多个worker进程轮流地、序列化地与新的客户端建立TCP连接。当某一个worker进程建立的连接数量达到worker_connections配置的最大连接数的7/8时，会大大地减小该worker进程试图建立新TCP连接的机会，以此实现所有worker进程之上处理的客户端请求数尽量接近。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>accept锁默认是打开的，如果关闭它，那么建立TCP连接的耗时会更短，但worker进程之间的负载会非常不均衡，因此不建议关闭它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）lock文件的路径语法：lock_file path/file;默认：lock_file logs/nginx.lock;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>accept锁可能需要这个lock文件，如果accept锁关闭，lock_file配置完全不生效。如果打开了accept锁，并且由于编译程序、操作系统架构等因素导致Nginx不支持原子锁，这时才会用文件锁实现accept锁</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样lock_file指定的lock文件才会生效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在基于i386、AMD64、Sparc64、PPC64体系架构的操作系统上，若使用GCC、Intel C++、SunProC++编译器来编译Nginx，则可以肯定这时的Nginx是支持原子锁的，因为Nginx会利用CPU的特性并用汇编语言来实现它</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这时的lock_file配置是没有意义的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）使用accept锁后到真正建立连接之间的延迟时间语法：accept_mutex_delay Nms;默认：accept_mutex_delay 500ms;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用accept锁后，同一时间只有一个worker进程能够取到accept锁。这个accept锁不是阻塞锁，如果取不到会立刻返回。如果有一个worker进程试图取accept锁而没有取到，它至少要等accept_mutex_delay定义的时间间隔后才能再次试图取锁。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）批量建立新连接语法：multi_accept[on|off];默认：multi_accept off;当事件模型通知有新连接时，尽可能地对本次调度中客户端发起的所有TCP请求都建立连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）选择事件模型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：use[kqueue|rtsig|epoll|/dev/poll|select|poll|eventport];默认：Nginx会自动使用最适合的事件模型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于Linux操作系统来说，可供选择的事件驱动模型有poll、select、epoll三种。epoll当然是性能最高的一种</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）每个worker的最大连接数语法：worker_connections number;定义每个worker进程可以同时处理的最大连接数。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-4-用http核心模块配置一个静态web服务器" tabindex="-1"><a class="header-anchor" href="#◆-2-4-用http核心模块配置一个静态web服务器" aria-hidden="true">#</a> ◆ 2.4 用HTTP核心模块配置一个静态Web服务器</h3>
<blockquote>
<blockquote>
<p>静态Web服务器的主要功能由ngx_http_core_module模块（HTTP框架的主要成员）实现</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143434478.png" alt="image-20220118143434478"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx为配置一个完整的静态Web服务器提供了非常多的功能，下面会把这些配置项分为以下8类进行详述：</p>
<p>虚拟主机与请求的分发、</p>
<p>文件路径的定义、</p>
<p>内存及磁盘资源的分配、</p>
<p>网络连接的设置、</p>
<p>MIME类型的设置、</p>
<p>对客户端请求的限制、</p>
<p>文件操作的优化、</p>
<p>对客户端请求的特殊处理。</p>
<p>这种划分只是为了帮助大家从功能上理解这些配置项。</p>
</blockquote>
</blockquote>
<h5 id="虚拟主机与请求的分发" tabindex="-1"><a class="header-anchor" href="#虚拟主机与请求的分发" aria-hidden="true">#</a> 虚拟主机与请求的分发</h5>
<blockquote>
<blockquote>
<p>由于IP地址的数量有限，因此经常存在多个主机域名对应着同一个IP地址的情况，这时在nginx.conf中就可以按照server_name（对应用户请求中的主机域名）并通过server块来定义虚拟主机，每个server块就是一个虚拟主机，它只处理与之相对应的主机域名请求。这样，一台服务器上的Nginx就能以不同的方式处理访问不同主机域名的HTTP请求了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）监听端口</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：listen address:port[default(deprecated in0.8.21)|default_server|[backlog=num|rcvbuf=size|sndbuf=size|accept_filter=filter|deferred|bind|ipv6only=[on|off]|ssl]];</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：listen 80;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在listen后可以只加IP地址、端口或主机名</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143545833.png" alt="image-20220118143545833"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果服务器使用IPv6地址，那么可以这样使用：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143558835.png" alt="image-20220118143558835"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在地址和端口后，还可以加上其他参数，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143609122.png" alt="image-20220118143609122"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面说明listen可用参数的意义。</p>
<p>❑ default：将所在的server块作为整个Web服务的默认server块。如果没有设置这个参数，那么将会以在nginx.conf中找到的第一个server块作为默认server块。为什么需要默认虚拟主机呢？当一个请求无法匹配配置文件中的所有主机域名时，就会选用默认的虚拟主机（在11.3节介绍默认主机的使用）。</p>
<p>❑ default_server：同上。</p>
<p>❑ backlog=num：表示TCP中backlog队列的大小。默认为–1，表示不予设置。在TCP建立三次握手过程中，进程还没有开始处理监听句柄，这时backlog队列将会放置这些新连接。可如果backlog队列已满，还有新的客户端试图通过三次握手建立TCP连接，这时客户端将会建立连接失败。</p>
<p>❑ rcvbuf=size：设置监听句柄的SO_RCVBUF参数。</p>
<p>❑ sndbuf=size：设置监听句柄的SO_SNDBUF参数。</p>
<p>❑ accept_filter：设置accept过滤器，只对FreeBSD操作系统有用。</p>
<p>❑ deferred：在设置该参数后，若用户发起建立连接请求，并且完成了TCP的三次握手，内核也不会为了这次的连接调度worker进程来处理，只有用户真的发送请求数据时（内核已经在网卡中收到请求数据包），内核才会唤醒worker进程处理这个连接。这个参数适用于大并发的情况下，它减轻了worker进程的负担。当请求数据来临时，worker进程才会开始处理这个连接。只有确认上面所说的应用场景符合自己的业务需求时，才可以使用deferred配置。</p>
<p>❑ bind：绑定当前端口/地址对，如127.0.0.1:8000。只有同时对一个端口监听多个地址时才会生效。</p>
<p>❑ ssl：在当前监听的端口上建立的连接必须基于SSL协议。</p>
<p>（2）主机名称</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>server_name后可以跟多个主机名称，如server_namewww.testweb.com、download.testweb.com;。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在开始处理一个HTTP请求时，Nginx会取出header头中的Host，与每个server中的server_name进行匹配，以此决定到底由哪一个server块来处理这个请求。有可能一个Host与多个server块中的server_name都匹配，这时就会根据匹配优先级来选择实际处理的server块。server_name与Host的匹配优先级如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）首先选择所有字符串完全匹配的server_name，如www.testweb.com。</p>
<p>2）其次选择通配符在前面的server_name，如*.testweb.com。*</p>
<p><em>3）再次选择通配符在后面的server_name，如www.testweb.</em>。</p>
<p>4）最后选择使用正则表达式才匹配的server_name，如~^.testweb.com$。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果Host与所有的server_name都不匹配，这时将会按下列顺序选择处理的server块。1）优先选择在listen配置项后加入[default|default_server]的server块。2）找到匹配listen端口的第一个server块。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果server_name后跟着空字符串（如server_name&quot;&quot;;），那么表示匹配没有Host这个HTTP头部的请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）server_names_hash_bucket_size</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：server_names_hash_bucket_size 32|64|128;配置块：http、server、location为了提高快速寻找到相应server name的能力，Nginx使用散列表来存储server name。server_names_hash_bucket_size设置了每个散列桶占用的内存大小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）server_names_hash_max_size</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：server_names_hash_max_size 512;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>server_names_hash_max_size会影响散列表的冲突率。server_names_hash_max_size越大，消耗的内存就越多，但散列key的冲突率则会降低，检索速度也更快。server_names_hash_max_size越小，消耗的内存就越小，但散列key的冲突率可能增高。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）重定向主机名称的处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：server_name_in_redirect on;配置块：http、server或者location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该配置需要配合server_name使用。在使用on打开时，表示在重定向请求时会使用server_name里配置的第一个主机名代替原先请求中的Host头部，而使用off关闭时，表示在重定向请求时使用请求本身的Host头部。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）location语法：location[=|~|~*|^~|@]/uri/{...}配置块：server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>location会尝试根据用户请求中的URI来匹配上面的/uri表达式，如果可以匹配，就选择location{}块中的配置来处理用户请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）=表示把URI作为字符串，以便与参数中的uri做完全匹配。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143837734.png" alt="image-20220118143837734"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）~表示匹配URI时是字母大小写敏感的。3）~*表示匹配URI时忽略字母大小写问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）^~表示匹配URI时只需要其前半部分与uri参数匹配即可。例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143849140.png" alt="image-20220118143849140"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）@表示仅用于Nginx服务内部请求之间的重定向，带有@的location不直接处理用户请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在uri参数里是可以用正则表达式的，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143857973.png" alt="image-20220118143857973"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>location是有顺序的，当一个请求有可能匹配多个location时，实际上这个请求会被第一个location处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在以上各种匹配方式中，都只能表达为“如果匹配...则...”。如果需要表达“如果不匹配...则...”，就很难直接做到。有一种解决方法是在最后一个location中使用/作为参数，它会匹配所有的HTTP请求，这样就可以表示如果不能匹配前面的所有location，则由“/”这个location处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍一下文件路径的定义配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）以root方式设置资源路径语法：root path;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：root html;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server、location、if</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，定义资源文件相对于HTTP请求的根目录。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118143931281.png" alt="image-20220118143931281"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在上面的配置中，如果有一个请求的URI是/download/index/test.html，那么Web服务器将会返回服务器上/opt/web/html/download/index/test.html文件的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）以alias方式设置资源路径语法：alias path;</p>
<p>配置块：location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>alias也是用来设置文件资源路径的，它与root的不同点主要在于如何解读紧跟location后面的uri参数，这将会致使alias与root以不同的方式将用户请求映射到真正的磁盘文件上。例如，如果有一个请求的URI是/conf/nginx.conf，而用户实际想访问的文件在/usr/local/nginx/conf/nginx.conf，那么想要使用alias来进行设置的话，可以采用如下方式：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144032228.png" alt="image-20220118144032228"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果用root设置，那么语句如下所示：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144121128.png" alt="image-20220118144121128"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用alias时，在URI向实际文件路径的映射过程中，已经把location后配置的/conf这部分字符串丢弃掉，因此，/conf/nginx.conf请求将根据alias path映射为path/nginx.conf。root则不然，它会根据完整的URI请求来映射，因此，/conf/nginx.conf请求会根据root path映射为path/conf/nginx.conf。这也是root可以放置到http、server、location或if块中，而alias只能放置到location块中的原因。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>alias后面还可以添加正则表达式，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144257925.png" alt="image-20220118144257925"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样，请求在访问/test/nginx.conf时，Nginx会返回/usr/local/nginx/conf/nginx.conf文件中的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）访问首页</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：index file...;默认：index index.html;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>访问站点时的URI是/，这时一般是返回网站的首页，而这与root和alias都不同。这里用ngx_http_index_module模块提供的index配置实现。index后可以跟多个文件参数，Nginx将会按照顺序来访问这些文件，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144347267.png" alt="image-20220118144347267"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>接收到请求后，Nginx首先会尝试访问path/index.php文件，如果可以访问，就直接返回文件内容结束请求，否则再试图返回path/html/index.php文件的内容，依此类推。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）根据HTTP返回码重定向页面</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：error_page code[code...][=|=answer-code]uri|@named_location配置块：http、server、location、if</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当对于某个请求返回错误码时，如果匹配上了error_page中设置的code，则重定向到新的URI中。例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144410031.png" alt="image-20220118144410031"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然重定向了URI，但返回的HTTP错误码还是与原来的相同。用户可以通过“=”来更改返回的错误码，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144419437.png" alt="image-20220118144419437"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以不指定确切的返回错误码，而是由重定向后实际处理的真实结果来决定，这时，只要把“=”后面的错误码去掉即可</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144438633.png" alt="image-20220118144438633"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果不想修改URI，只是想让这样的请求重定向到另一个location中进行处理，那么可以这样设置：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144446081.png" alt="image-20220118144446081"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）是否允许递归使用error_page语法：recursive_error_pages[on|off];默认：recursive_error_pages off;配置块：http、server、location确定是否允许递归地定义error_page。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）try_files语法：try_files path1[path2]uri;配置块：server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>try_files后要跟若干路径，如path1 path2...，而且最后必须要有uri参数，意义如下：尝试按照顺序访问每一个path，如果可以有效地读取，就直接向用户返回这个path对应的文件结束请求，否则继续向下访问。如果所有的path都找不到有效的文件，就重定向到最后的参数uri上。因此，最后这个参数uri必须存在，而且它应该是可以有效重定向的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144522377.png" alt="image-20220118144522377"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面这段代码表示如果前面的路径，如/system/maintenance.html等，都找不到，就会反向代理到http://backend服务上。还可以用指定错误码的方式与error_page配合使用，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118144541876.png" alt="image-20220118144541876"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍处理请求时内存、磁盘资源分配的配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）HTTP包体只存储到磁盘文件中语法：client_body_in_file_only on|clean|off;默认：client_body_in_file_only off;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当值为非off时，用户请求中的HTTP包体一律存储到磁盘文件中，即使只有0字节也会存储为文件。当请求结束时，如果配置为on，则这个文件不会被删除（该配置一般用于调试、定位问题），但如果配置为clean，则会删除该文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）HTTP包体尽量写入到一个内存buffer中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：client_body_in_single_buffer on|off;默认：client_body_in_single_buffer off;配置块：http、server、location用户请求中的HTTP包体一律存储到内存buffer中。当然，如果HTTP包体的大小超过了下面client_body_buffer_size设置的值，包体还是会写入到磁盘文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）存储HTTP头部的内存buffer大小</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：client_header_buffer_size size;默认：client_header_buffer_size 1k;配置块：http、server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面配置项定义了正常情况下Nginx接收用户请求中HTTPheader部分（包括HTTP行和HTTP头部）时分配的内存buffer大小。有时，请求中的HTTP header部分可能会超过这个大小，这时large_client_header_buffers定义的buffer将会生效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）存储超大HTTP头部的内存buffer大小</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：large_client_header_buffers number size;默认：large_client_header_buffers 48k;配置块：http、server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>large_client_header_buffers定义了Nginx接收一个超大HTTP头部请求的buffer个数和每个buffer的大小。如果HTTP请求行（如GET/index HTTP/1.1）的大小超过上面的单个buffer，则返回&quot;Request URI too large&quot;(414)。请求中一般会有许多header，每一个header的大小也不能超过单个buffer的大小，否则会返回&quot;Bad request&quot;(400)。当然，请求行和请求头部的总和也不可以超过buffer个数*buffer大小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）存储HTTP包体的内存buffer大小语法：client_body_buffer_size size;默认：client_body_buffer_size 8k/16k;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP包体会先接收到指定的这块缓存中，之后才决定是否写入磁盘。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果用户请求中含有HTTP头部Content-Length，并且其标识的长度小于定义的buffer大小，那么Nginx会自动降低本次请求所使用的内存buffer，以降低内存消耗。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）HTTP包体的临时存放目录语法：client_body_temp_path dir-path[level1[level2[level3]]]默认：client_body_temp_path client_body_temp;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在接收HTTP包体时，如果包体的大小大于client_body_buffer_size，则会以一个递增的整数命名并存放到client_body_temp_path指定的目录中。后面跟着的level1、level2、level3，是为了防止一个目录下的文件数量太多，从而导致性能下降，因此使用了level参数，这样可以按照临时文件名最多再加三层目录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118145733109.png" alt="image-20220118145733109"></p>
<p>如果新上传的HTTP包体使用00000123456作为临时文件名，就会被存放在这个目录中。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118145745445.png" alt="image-20220118145745445"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）connection_pool_size语法：connection_pool_size size;默认：connection_pool_size 256;配置块：http、server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx对于每个建立成功的TCP连接会预先分配一个内存池，上面的size配置项将指定这个内存池的初始大小</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用于减少内核对于小块内存的分配次数。需慎重设置，因为更大的size会使服务器消耗的内存增多，而更小的size则会引发更多的内存分配次数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）request_pool_size语法：request_pool_size size;默认：request_pool_size 4k;配置块：http、server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx开始处理HTTP请求时，将会为每个请求都分配一个内存池，size配置项将指定这个内存池的初始大小（即ngx_http_request_t结构体中的pool内存池初始大小</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用于减少内核对于小块内存的分配次数。TCP连接关闭时会销毁connection_pool_size指定的连接内存池，HTTP请求结束时会销毁request_pool_size指定的HTTP请求内存池，但它们的创建、销毁时间并不一致，因为一个TCP连接可能被复用于多个HTTP请求。</p>
</blockquote>
</blockquote>
<h5 id="下面介绍网络连接的设置配置项。" tabindex="-1"><a class="header-anchor" href="#下面介绍网络连接的设置配置项。" aria-hidden="true">#</a> 下面介绍网络连接的设置配置项。</h5>
<blockquote>
<blockquote>
<p>（1）读取HTTP头部的超时时间语法：client_header_timeout time（默认单位：秒）;默认：client_header_timeout 60;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>客户端与服务器建立连接后将开始接收HTTP头部，在这个过程中，如果在一个时间间隔（超时时间）内没有读取到客户端发来的字节，则认为超时，并向客户端返回408(&quot;Requesttimed out&quot;)响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）读取HTTP包体的超时时间语法：client_body_timeout time（默认单位：秒）；默认：client_body_timeout 60;配置块：http、server、location此配置项与client_header_timeout相似，只是这个超时时间只在读取HTTP包体时才有效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）发送响应的超时时间语法：send_timeout time;默认：send_timeout 60;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个超时时间是发送响应的超时时间，即Nginx服务器向客户端发送了数据包，但客户端一直没有去接收这个数据包。如果某个连接超过send_timeout定义的超时时间，那么Nginx将会关闭这个连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）reset_timeout_connection语法：reset_timeout_connection on|off;默认：reset_timeout_connection off;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>连接超时后将通过向客户端发送RST包来直接重置连接。这个选项打开后，Nginx会在某个连接超时后，不是使用正常情形下的四次握手关闭TCP连接，而是直接向用户发送RST重置包，不再等待用户的应答，直接释放Nginx服务器上关于这个套接字使用的所有缓存（如TCP滑动窗口）。相比正常的关闭方式，它使得服务器避免产生许多处于FIN_WAIT_1、FIN_WAIT_2、TIME_WAIT状态的TCP连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用RST重置包关闭连接会带来一些问题，默认情况下不会开启。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）lingering_close语法：lingering_close off|on|always;默认：lingering_close on;配置块：http、server、location该配置控制Nginx关闭用户连接的方式。always表示关闭用户连接前必须无条件地处理连接上所有用户发送的数据。off表示关闭连接时完全不管连接上是否已经有准备就绪的来自用户的数据。on是中间值，一般情况下在关闭连接前都会处理连接上的用户发送的数据，除了有些情况下在业务上认定这之后的数据是不必要的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）lingering_time语法：lingering_time time;默认：lingering_time 30s;配置块：http、server、locationlingering_close启用后，这个配置项对于上传大文件很有用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户请求的Content-Length大于max_client_body_size配置时，Nginx服务会立刻向用户发送413（Request entity too large）响应。但是，很多客户端可能不管413返回值，仍然持续不断地上传HTTP body，这时，经过了lingering_time设置的时间后，Nginx将不管用户是否仍在上传，都会把连接关闭掉。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）lingering_timeout语法：lingering_timeout time;默认：lingering_timeout 5s;配置块：http、server、locationlingering_close生效后，在关闭连接前，会检测是否有用户发送的数据到达服务器，如果超过lingering_timeout时间后还没有数据可读，就直接关闭连接；否则，必须在读取完连接缓冲区上的数据并丢弃掉后才会关闭连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）对某些浏览器禁用keepalive功能语法：keepalive_disable[msie6|safari|none]...</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP请求中的keepalive功能是为了让多个请求复用一个HTTP长连接，这个功能对服务器的性能提高是很有帮助的。但有些浏览器，如IE 6和Safari，它们对于使用keepalive功能的POST请求处理有功能性问题。因此，针对IE 6及其早期版本、Safari浏览器默认是禁用keepalive功能的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（9）keepalive超时时间</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：keepalive_timeout 75;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个keepalive连接在闲置超过一定时间后（默认的是75秒），服务器和浏览器都会去关闭这个连接。当然，keepalive_timeout配置项是用来约束Nginx服务器的，Nginx也会按照规范把这个时间传给浏览器，但每个浏览器对待keepalive的策略有可能是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（10）一个keepalive长连接上允许承载的请求最大数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：keepalive_requests 100;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个keepalive连接上默认最多只能发送100个请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（11）tcp_nodelay语法：tcp_nodelay on|off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>确定对keepalive连接是否使用TCP_NODELAY选项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（12）tcp_nopush</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：tcp_nopush on|off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在打开sendfile选项时，确定是否开启FreeBSD系统上的TCP_NOPUSH或Linux系统上的TCP_CORK功能。打开tcp_nopush后，将会在发送响应时把整个响应包头放到一个TCP包中发送。</p>
</blockquote>
</blockquote>
<h5 id="下面是mime类型的设置配置项。" tabindex="-1"><a class="header-anchor" href="#下面是mime类型的设置配置项。" aria-hidden="true">#</a> 下面是MIME类型的设置配置项。</h5>
<blockquote>
<blockquote>
<p>❑ MIME type与文件扩展的映射</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>定义MIME type到文件扩展名的映射。多个扩展名可以映射到同一个MIME type。例如：<img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118150755231.png" alt="image-20220118150755231"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 默认MIME type</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：default_type text/plain;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当找不到相应的MIME type与文件扩展名之间的映射时，使用默认的MIME type作为HTTP header中的Content-Type。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ types_hash_bucket_size</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：types_hash_bucket_size 32|64|128;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了快速寻找到相应MIME type，Nginx使用散列表来存储MIME type与文件扩展名。types_hash_bucket_size设置了每个散列桶占用的内存大小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ types_hash_max_size</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：types_hash_max_size 1024;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>types_hash_max_size影响散列表的冲突率。types_hash_max_size越大，就会消耗更多的内存，但散列key的冲突率会降低，检索速度就更快。types_hash_max_size越小，消耗的内存就越小，但散列key的冲突率可能上升。</p>
</blockquote>
</blockquote>
<h5 id="下面介绍对客户端请求的限制的配置项。" tabindex="-1"><a class="header-anchor" href="#下面介绍对客户端请求的限制的配置项。" aria-hidden="true">#</a> 下面介绍对客户端请求的限制的配置项。</h5>
<blockquote>
<blockquote>
<p>（1）按HTTP方法名限制用户请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：limit_except method...{...}</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>方法名可取值包括：GET、HEAD、POST、PUT、DELETE、MKCOL、COPY、MOVE、OPTIONS、PROPFIND、PROPPATCH、LOCK、UNLOCK或者PATCH。例如：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>允许GET方法就意味着也允许HEAD方法。因此，上面这段代码表示的是禁止GET方法和HEAD方法，但其他HTTP方法是允许的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）HTTP请求包体的最大值</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：client_max_body_size 1m;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>浏览器在发送含有较大HTTP包体的请求时，其头部会有一个Content-Length字段，client_max_body_size是用来限制Content-Length所示值的大小的。因此，这个限制包体的配置非常有用处，因为不用等Nginx接收完所有的HTTP包体——这有可能消耗很长时间——就可以告诉用户请求过大不被接受。例如，用户试图上传一个10GB的文件，Nginx在收完包头后，发现Content-Length超过client_max_body_size定义的值，就直接发送413(&quot;Request Entity Too Large&quot;)响应给客户端。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）对请求的限速</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：limit_rate 0;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server、location、if</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对客户端请求限制每秒传输的字节数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认参数为0，表示不限速。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>针对不同的客户端，可以用$limit_rate参数执行不同的限速策略。例如：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）limit_rate_after</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：limit_rate_after 1m;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server、location、if</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置表示Nginx向客户端发送的响应长度超过limit_rate_after后才开始限速。例如：[插图]</p>
</blockquote>
</blockquote>
<h5 id="下面介绍文件操作的优化配置项。" tabindex="-1"><a class="header-anchor" href="#下面介绍文件操作的优化配置项。" aria-hidden="true">#</a> 下面介绍文件操作的优化配置项。</h5>
<blockquote>
<blockquote>
<p>（1）sendfile系统调用语法：sendfile on|off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以启用Linux上的sendfile系统调用来发送文件，它减少了内核态与用户态之间的两次内存复制，这样就会从磁盘中读取文件后直接在内核态发送到网卡设备，提高了发送文件的效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）AIO系统调用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：aio off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置项表示是否在FreeBSD或Linux系统上启用内核级别的异步文件I/O功能。注意，它与sendfile功能是互斥的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）directio</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：directio off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置项在FreeBSD和Linux系统上使用O_DIRECT选项去读取文件，缓冲区大小为size，通常对大文件的读取速度有优化作用。注意，它与sendfile功能是互斥的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）directio_alignment</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：directio_alignment 512;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它与directio配合使用，指定以directio方式读取文件时的对齐方式。一般情况下，512B已经足够了，但针对一些高性能文件系统，如Linux下的XFS文件系统，可能需要设置到4KB作为对齐方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）打开文件缓存</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：open_file_cache max=N[inactive=time]|off;默认：open_file_cache off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>文件缓存会在内存中存储以下3种信息：</p>
<p>❑ 文件句柄、文件大小和上次修改时间。</p>
<p>❑ 已经打开过的目录结构。</p>
<p>❑ 没有找到的或者没有权限操作的文件信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过读取缓存就减少了对磁盘的操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该配置项后面跟3种参数。</p>
<p>❑ max：表示在内存中存储元素的最大个数。当达到最大限制数量后，将采用LRU（Least Recently Used）算法从缓存中淘汰最近最少使用的元素。</p>
<p>❑ inactive：表示在inactive指定的时间段内没有被访问过的元素将会被淘汰。默认时间为60秒。</p>
<p>❑ off：关闭缓存功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118151232446.png" alt="image-20220118151232446"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）是否缓存打开文件错误的信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：open_file_cache_errors off;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置项表示是否在文件缓存中缓存打开文件时出现的找不到路径、没有权限等错误信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）不被淘汰的最小访问次数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：open_file_cache_min_uses 1;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它与open_file_cache中的inactive参数配合使用。如果在inactive指定的时间段内，访问次数超过了open_file_cache_min_uses指定的最小次数，那么将不会被淘汰出缓存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）检验缓存中元素有效性的频率语法：open_file_cache_valid time;默认：open_file_cache_valid 60s;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认为每60秒检查一次缓存中的元素是否仍有效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍对客户端请求的特殊处理的配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）忽略不合法的HTTP头部语法：ignore_invalid_headers on|off;默认：ignore_invalid_headers on;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置块：http、server</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果将其设置为off，那么当出现不合法的HTTP头部时，Nginx会拒绝服务，并直接向用户发送400（Bad Request）错误。如果将其设置为on，则会忽略此HTTP头部。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）HTTP头部是否允许下划线</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法：underscores_in_headers on|off;默认：underscores_in_headers off;配置块：http、server默认为off，表示HTTP头部的名称中不允许带“_”（下划线）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）对If-Modified-Since头部的处理策略语法：if_modified_since[off|exact|before];默认：if_modified_since exact;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>出于性能考虑，Web浏览器一般会在客户端本地缓存一些文件，并存储当时获取的时间。这样，下次向Web服务器获取缓存过的资源时，就可以用If-Modified-Since头部把上次获取的时间捎带上，而if_modified_since将根据后面的参数决定如何处理If-Modified-Since头部。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>相关参数说明如下。</p>
<p>❑ off：表示忽略用户请求中的If-Modified-Since头部。这时，如果获取一个文件，那么会正常地返回文件内容。HTTP响应码通常是200。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ exact：将If-Modified-Since头部包含的时间与将要返回的文件上次修改的时间做精确比较，如果没有匹配上，则返回200和文件的实际内容，如果匹配上，则表示浏览器缓存的文件内容已经是最新的了，没有必要再返回文件从而浪费时间与带宽了，这时会返回304 NotModified，浏览器收到后会直接读取自己的本地缓存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ before：是比exact更宽松的比较。只要文件的上次修改时间等于或者早于用户请求中的If-Modified-Since头部的时间，就会向客户端返回304 Not Modified。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）文件未找到时是否记录到error日志语法：log_not_found on|off;默认：log_not_found on;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）merge_slashes语法：merge_slashes on|off;默认：merge_slashes on;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置项表示是否合并相邻的“/”，例如，//test///a.txt，在配置为on时，会将其匹配为location/test/a.txt；如果配置为off，则不会匹配，URI将仍然是//test///a.txt。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）DNS解析地址语法：resolver address...;配置块：http、server、location</p>
<p>设置DNS名字解析服务器的地址，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118151416642.png" alt="image-20220118151416642"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）DNS解析的超时时间语法：resolver_timeout time;默认：resolver_timeout 30s;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）返回错误页面时是否在Server中注明Nginx版本语法：server_tokens on|off;默认：server_tokens on;配置块：http、server、location表示处理请求出错时是否在响应的Server头部中标明Nginx版本，这是为了方便定位问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_http_core_module模块提供的变量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在记录access_log访问日志文件时，可以使用ngx_http_core_module模块处理请求时所产生的丰富的变量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，当URI中的某个参数满足设定的条件时，有些HTTP模块的配置项可以使用类似$arg_PARAMETER这样的变量。又如，若想把每个请求中的限速信息记录到access日志文件中，则可以使用$limit_rate变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118151452758.png" alt="image-20220118151452758"></p>
</blockquote>
</blockquote>
<h3 id="◆-2-5-用http-proxy-module配置一个反向代理服务器" tabindex="-1"><a class="header-anchor" href="#◆-2-5-用http-proxy-module配置一个反向代理服务器" aria-hidden="true">#</a> ◆ 2.5 用HTTP proxy module配置一个反向代理服务器</h3>
<h5 id="用http-proxy-module配置一个反向代理服务器" tabindex="-1"><a class="header-anchor" href="#用http-proxy-module配置一个反向代理服务器" aria-hidden="true">#</a> 用HTTP proxy module配置一个反向代理服务器</h5>
<blockquote>
<blockquote>
<p>反向代理（reverse proxy）方式是指用代理服务器来接受Internet上的连接请求，然后将请求转发给内部网络中的上游服务器，并将从上游服务器上得到的结果返回给Internet上请求连接的客户端，此时代理服务器对外的表现就是一个Web服务器。充当反向代理服务器也是Nginx的一种常见用法（反向代理服务器必须能够处理大量并发请求）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于Nginx具有“强悍”的高并发高负载能力，因此一般会作为前端的服务器直接向客户端提供静态文件服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx通常会被配置为既是静态Web服务器也是反向代理服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不适合Nginx处理的请求就会直接转发到上游服务器中处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118151613171.png" alt="image-20220118151613171"></p>
</blockquote>
</blockquote>
<h5 id="与squid等其他反向代理服务器相比-nginx的反向代理功能有自己的特点" tabindex="-1"><a class="header-anchor" href="#与squid等其他反向代理服务器相比-nginx的反向代理功能有自己的特点" aria-hidden="true">#</a> 与Squid等其他反向代理服务器相比，Nginx的反向代理功能有自己的特点</h5>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118151631232.png" alt="image-20220118151631232"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当客户端发来HTTP请求时，Nginx并不会立刻转发到上游服务器，而是先把用户的请求（包括HTTP包体）完整地接收到Nginx所在服务器的硬盘或者内存中，然后再向上游服务器发起连接，把缓存的客户端请求转发到上游服务器。而Squid等代理服务器则采用一边接收客户端请求，一边转发到上游服务器的方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的这种工作方式有什么优缺点呢？很明显，缺点是延长了一个请求的处理时间，并增加了用于缓存请求内容的内存和磁盘空间。而优点则是降低了上游服务器的负载，尽量把压力放在Nginx服务器上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的这种工作方式为什么会降低上游服务器的负载呢？通常，客户端与代理服务器之间的网络环境会比较复杂，多半是“走”公网，网速平均下来可能较慢，因此，一个请求可能要持续很久才能完成。而代理服务器与上游服务器之间一般是“走”内网，或者有专线连接，传输速度较快。Squid等反向代理服务器在与客户端建立连接且还没有开始接收HTTP包体时，就已经向上游服务器建立了连接。例如，某个请求要上传一个1GB的文件，那么每次Squid在收到一个TCP分包（如2KB）时，就会即时地向上游服务器转发。在接收客户端完整HTTP包体的漫长过程中，上游服务器始终要维持这个连接，这直接对上游服务器的并发处理能力提出了挑战。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx则不然，它在接收到完整的客户端请求（如1GB的文件）后，才会与上游服务器建立连接转发请求，由于是内网，所以这个转发过程会执行得很快。这样，一个客户端请求占用上游服务器的连接时间就会非常短，也就是说，Nginx的这种反向代理方案主要是为了降低上游服务器的并发压力。</p>
</blockquote>
</blockquote>
<h5 id="负载均衡的基本配置" tabindex="-1"><a class="header-anchor" href="#负载均衡的基本配置" aria-hidden="true">#</a> 负载均衡的基本配置</h5>
<blockquote>
<blockquote>
<p>作为代理服务器，一般都需要向上游服务器的集群转发请求。这里的负载均衡是指选择一种策略，尽量把请求平均地分布到每一台上游服务器上。下面介绍负载均衡的配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）upstream块语法：upstream name{...}配置块：http</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>upstream块定义了一个上游服务器的集群，便于反向代理中的proxy_pass使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118163938243.png" alt="image-20220118163938243"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）server语法：server name[parameters];配置块：upstream</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>server配置项指定了一台上游服务器的名字，这个名字可以是域名、IP地址端口、UNIX句柄等，在其后还可以跟下列参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ weight=number：设置向这台上游服务器转发的权重，默认为1。❑ max_fails=number：该选项与fail_timeout配合使用，指在fail_timeout时间段内，如果向当前的上游服务器转发失败次数超过number，则认为在当前的fail_timeout时间段内这台上游服务器不可用。max_fails默认为1，如果设置为0，则表示不检查失败次数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ fail_timeout=time：fail_timeout表示该时间段内转发失败多少次后就认为上游服务器暂时不可用，用于优化反向代理功能。它与向上游服务器建立连接的超时时间、读取上游服务器的响应超时时间等完全无关。fail_timeout默认为10秒。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ down：表示所在的上游服务器永久下线，只在使用ip_hash配置项时才有用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ backup：在使用ip_hash配置项时它是无效的。它表示所在的上游服务器只是备份服务器，只有在所有的非备份上游服务器都失效后，才会向所在的上游服务器转发请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164130722.png" alt="image-20220118164130722"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）ip_hash语法：ip_hash;</p>
<p>配置块：upstream</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在有些场景下，我们可能会希望来自某一个用户的请求始终落到固定的一台上游服务器中。例如，假设上游服务器会缓存一些信息，如果同一个用户的请求任意地转发到集群中的任一台上游服务器中，那么每一台上游服务器都有可能会缓存同一份信息，这既会造成资源的浪费，也会难以有效地管理缓存信息。ip_hash就是用以解决上述问题的，它首先根据客户端的IP地址计算出一个key，将key按照upstream集群里的上游服务器数量进行取模，然后以取模后的结果把请求转发到相应的上游服务器中。这样就确保了同一个客户端的请求只会转发到指定的上游服务器中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ip_hash与weight（权重）配置不可同时使用。如果upstream集群中有一台上游服务器暂时不可用，不能直接删除该配置，而是要down参数标识，确保转发策略的一贯性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164343659.png" alt="image-20220118164343659"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）记录日志时支持的变量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果需要将负载均衡时的一些信息记录到access_log日志中，那么在定义日志格式时可以使用负载均衡功能提供的变量</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164441311.png" alt="image-20220118164441311"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表2-2　访问上游服务器时可以使用的变量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍反向代理的基本配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）proxy_pass语法：proxy_pass URL;配置块：location、if此配置项将当前请求反向代理到URL参数指定的服务器上，URL可以是主机名或IP地址加端口的形式，例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164505679.png" alt="image-20220118164505679"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以是UNIX句柄：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164517219.png" alt="image-20220118164517219"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下反向代理是不会转发请求中的Host头部的。如果需要转发，那么必须加上配置：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164532619.png" alt="image-20220118164532619"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）proxy_method语法：proxy_method method;</p>
<p>配置块：http、server、location此配置项表示转发时的协议方法名。例如设置为：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164550314.png" alt="image-20220118164550314"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么客户端发来的GET请求在转发时方法名也会改为POST。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）proxy_hide_header语法：proxy_hide_header the_header;配置块：http、server、locationNginx会将上游服务器的响应转发给客户端，但默认不会转发以下HTTP头部字段：Date、Server、X-Pad和X-Accel-*。使用proxy_hide_header后可以任意地指定哪些HTTP头部字段不能被转发。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164613572.png" alt="image-20220118164613572"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）proxy_pass_header语法：proxy_pass_header the_header;配置块：http、server、location与proxy_hide_header功能相反，proxy_pass_header会将原来禁止转发的header设置为允许转发。例如：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164624604.png" alt="image-20220118164624604"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）proxy_pass_request_body语法：proxy_pass_request_body on|off;默认：proxy_pass_request_body on;配置块：http、server、location作用为确定是否向上游服务器发送HTTP包体部分。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）proxy_pass_request_headers语法：proxy_pass_request_headers on|off;默认：proxy_pass_request_headers on;配置块：http、server、location作用为确定是否转发HTTP头部。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）proxy_redirect语法：proxy_redirect[default|off|redirect replacement];默认：proxy_redirect default;配置块：http、server、location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当上游服务器返回的响应是重定向或刷新请求（如HTTP响应码是301或者302）时，proxy_redirect可以重设HTTP头部的location或refresh字段。例如，如果上游服务器发出的响应是302重定向请求，location字段的URI是http://localhost:8000/two/some/uri/，那么在下面的配置情况下，实际转发给客户端的location是http://frontend/one/some/uri/。<img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164635355.png" alt="image-20220118164635355"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用默认的default参数时，会按照proxy_pass配置项和所属的location配置项重组发往客户端的location头部。例如，下面两种配置效果是一样的：</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118164648929.png" alt="image-20220118164648929"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）proxy_next_upstream</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认：proxy_next_upstream error timeout;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此配置项表示当向一台上游服务器转发请求出现错误时，继续换一台上游服务器处理这个请求。前面已经说过，上游服务器一旦开始发送应答，Nginx反向代理服务器会立刻把应答包转发给客户端。因此，一旦Nginx开始向客户端发送响应包，之后的过程中若出现错误也是不允许换下一台上游服务器继续处理的。这很好理解，这样才可以更好地保证客户端只收到来自一个上游服务器的应答。proxy_next_upstream的参数用来说明在哪些情况下会继续选择下一台上游服务器转发请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ error：当向上游服务器发起连接、发送请求、读取响应时出错。</p>
<p>❑ timeout：发送请求或读取响应时发生超时。</p>
<p>❑ invalid_header：上游服务器发送的响应是不合法的。</p>
<p>❑ http_500：上游服务器返回的HTTP响应码是500。</p>
<p>❑ http_502：上游服务器返回的HTTP响应码是502。</p>
<p>❑ http_503：上游服务器返回的HTTP响应码是503。</p>
<p>❑ http_504：上游服务器返回的HTTP响应码是504。</p>
<p>❑ http_404：上游服务器返回的HTTP响应码是404。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ off：关闭proxy_next_upstream功能—出错就选择另一台上游服务器再次转发。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的反向代理模块还提供了很多种配置，如设置连接的超时时间、临时文件如何存储，以及最重要的如何缓存上游服务器响应等功能。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-6-小结" tabindex="-1"><a class="header-anchor" href="#◆-2-6-小结" aria-hidden="true">#</a> ◆ 2.6 小结</h3>
<blockquote>
<blockquote>
<p>Nginx的Wiki网站（http://wiki.nginx.org/Modules）上列出了官方提供的所有模块及配置项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>网页http://wiki.nginx.org/3rdPartyModules中列出了Wiki上已知的几十个第三方模块</p>
</blockquote>
</blockquote>
<h2 id="◆-第3章-开发一个简单的http模块" tabindex="-1"><a class="header-anchor" href="#◆-第3章-开发一个简单的http模块" aria-hidden="true">#</a> ◆ 第3章 开发一个简单的HTTP模块</h2>
<blockquote>
<blockquote>
<p>如何开发一个充满异步调用、无阻塞的HTTP模块呢？首先，需要把程序嵌入到Nginx中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最终编译出的二进制程序Nginx要包含我们的代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其次，这个全新的HTTP模块要能介入到HTTP请求的处理流程中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>满足上述两个前提后，我们的模块才能开始处理HTTP请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>正式处理请求时，还要可以获得Nginx框架接收、解析后的用户请求信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>业务执行完毕后，则要考虑发送响应给用户</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>包括将磁盘中的文件以HTTP包体的形式发送给用户</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-如何调用http模块" tabindex="-1"><a class="header-anchor" href="#◆-3-1-如何调用http模块" aria-hidden="true">#</a> ◆ 3.1 如何调用HTTP模块</h3>
<blockquote>
<blockquote>
<p>典型的HTTP模块是如何介入Nginx处理用户请求流程的，图3-1是一个简化的时序图，这里省略了许多异步调用，忽略了多个不同的HTTP处理阶段，仅标识了在一个典型请求的处理过程中主要模块被调用的流程，以此帮助读者理解HTTP模块如何处理用户请求。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118165009000.png" alt="image-20220118165009000"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图3-1　Nginx HTTP模块调用的简化流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>worker进程会在一个for循环语句里反复调用事件模块检测网络事件。当事件模块检测到某个客户端发起的TCP请求时（接收到SYN包），将会为它建立TCP连接，成功建立连接后根据nginx.conf文件中的配置会交由HTTP框架处理。HTTP框架会试图接收完整的HTTP头部，并在接收到完整的HTTP头部后将请求分发到具体的HTTP模块中处理。这种分发策略是多样化的，其中最常见的是根据请求的URI和nginx.conf里location配置项的匹配度来决定如何分发</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP模块在处理请求的结束时，大多会向客户端发送响应，此时会自动地依次调用所有的HTTP过滤模块，每个过滤模块可以根据配置文件决定自己的行为。例如，gzip过滤模块根据配置文件中的gzip on|off来决定是否压缩响应。HTTP处理模块在返回时会将控制权交还给HTTP框架，如果在返回前设置了subrequest，那么HTTP框架还会继续异步地调用适合的HTTP模块处理子请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开发HTTP模块时，首先要注意的就是HTTP框架到具体的HTTP模块间数据流的传递，以及开发的HTTP模块如何与诸多的过滤模块协同工作</p>
</blockquote>
</blockquote>
<h3 id="◆-3-2-准备工作" tabindex="-1"><a class="header-anchor" href="#◆-3-2-准备工作" aria-hidden="true">#</a> ◆ 3.2 准备工作</h3>
<blockquote>
<blockquote>
<p>为了让HTTP模块正常工作，首先需要把它编译进Nginx</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其次需要设定模块如何在运行中生效</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）典型调用方式：</p>
<p>配置文件中的location块决定了匹配某种URI的请求将会由相应的HTTP模块处理，因此，运行时HTTP框架会在接收完毕HTTP请求的头部后，将请求的URI与配置文件中的所有location进行匹配</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>匹配后再根据location{}内的配置项选择HTTP模块来调用。这是一种最典型的HTTP模块调用方式。</p>
<p>（2）非典型方式：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>既然有典型的调用方式，自然也有非典型的调用方式，比如ngx_http_access_module模块，它是根据IP地址决定某个客户端是否可以访问服务的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx使用ngx_int_t封装有符号整型，使用ngx_uint_t封装无符号整型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_list_t是Nginx封装的链表容器，它在Nginx中使用得很频繁，例如HTTP的头部就是用ngx_list_t来存储的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_list_t是一个链表容器，而链表中的元素又是一个数组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_list_part_t数组中的元素才是用户想要存储的东西，ngx_list_t链表能够容纳的元素数量由ngx_list_part_t数组元素的个数与每个数组所能容纳的元素相乘得到。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-如何将自己的http模块编译进nginx" tabindex="-1"><a class="header-anchor" href="#◆-3-3-如何将自己的http模块编译进nginx" aria-hidden="true">#</a> ◆ 3.3 如何将自己的HTTP模块编译进Nginx</h3>
<blockquote>
<blockquote>
<p>Nginx提供了一种简单的方式将第三方的模块编译到Nginx中。首先把源代码文件全部放到一个目录下，同时在该目录中编写一个文件用于通知Nginx如何编译本模块，这个文件名必须为config。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只要在configure脚本执行时加入参数--add-module=PATH（PATH就是上面我们给定的源代码、config文件的保存目录），就可以在执行正常编译安装流程时完成Nginx编译工作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有时，Nginx提供的这种方式可能无法满足我们的需求，其实，在执行完configure脚本后Nginx会生成objs/Makefile和objs/ngx_modules.c文件，完全可以自己去修改这两个文件，这是一种更强大也复杂得多的方法</p>
</blockquote>
</blockquote>
<h3 id="◆-3-7-发送响应" tabindex="-1"><a class="header-anchor" href="#◆-3-7-发送响应" aria-hidden="true">#</a> ◆ 3.7 发送响应</h3>
<blockquote>
<blockquote>
<p>请求处理完毕后，需要向用户发送HTTP响应，告知客户端Nginx的执行结果。HTTP响应主要包括响应行、响应头部、包体三部分。发送HTTP响应时需要执行发送HTTP头部（发送HTTP头部时也会发送响应行）和发送HTTP包体两步操作。</p>
<p>为了减少内存碎片的数量，并通过统一管理来减少代码中出现内存泄漏的可能性，Nginx设计了ngx_pool_t内存池数据结构</p>
</blockquote>
</blockquote>
<h3 id="◆-3-8-将磁盘文件作为包体发送-sendfile" tabindex="-1"><a class="header-anchor" href="#◆-3-8-将磁盘文件作为包体发送-sendfile" aria-hidden="true">#</a> ◆ 3.8 将磁盘文件作为包体发送（sendfile）</h3>
<blockquote>
<blockquote>
<p>在发送文件时完全可以先把文件读取到内存中再向用户发送数据，但是这样做会有两个缺点：</p>
<p>❑ 为了不阻塞Nginx，每次只能读取并发送磁盘中的少量数据，需要反复持续多次。</p>
<p>❑ Linux上高效的sendfile系统调用不需要先把磁盘中的数据读取到用户态内存再发送到网络中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx已经封装好了多种接口，以便将磁盘或者缓存中的文件发送给用户。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx会异步地将整个文件高效地发送给用户，但是我们必须要求HTTP框架在响应发送完毕后关闭已经打开的文件句柄，否则将会出现句柄泄露问题。设置清理文件句柄也很简单，只需要定义一个ngx_pool_cleanup_t结构体</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将我们刚得到的文件句柄等信息赋给它，并将Nginx提供的ngx_pool_cleanup_file函数设置到它的handler回调方法中即可。</p>
</blockquote>
</blockquote>
<h5 id="_3-8-3-支持用户多线程下载和断点续传" tabindex="-1"><a class="header-anchor" href="#_3-8-3-支持用户多线程下载和断点续传" aria-hidden="true">#</a> 3.8.3　支持用户多线程下载和断点续传</h5>
<blockquote>
<blockquote>
<p>RFC2616规范中定义了range协议，它给出了一种规则使得客户端可以在一次请求中只下载完整文件的某一部分，这样就可支持客户端在开启多个线程的同时下载一份文件，其中每个线程仅下载文件的一部分，最后组成一个完整的文件。range也支持断点续传，只要客户端记录了上次中断时已经下载部分的文件偏移量，就可以要求服务器从断点处发送文件之后的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx对range协议的支持非常好，因为range协议主要增加了一些HTTP头部处理流程，以及发送文件时的偏移量处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx设计了HTTP过滤模块，每一个请求可以由许多个HTTP过滤模块处理，而http_range_header_filter模块就是用来处理HTTP请求头部range部分的，它会解析客户端请求中的range头部，最后告知在发送HTTP响应包体时将会调用到的ngx_http_range_body_filter_module模块，该模块会按照range协议修改指向文件的ngx_buf_t缓冲区中的file_pos和file_last成员，以此实现仅发送一个文件的部分内容到客户端。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>支持range协议对我们来说很简单，只需要在发送前设置ngx_http_request_t的成员allow_ranges变量为1即可，之后的工作都会由HTTP框架完成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样，我们就支持了多线程下载和断点续传功能。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-9-用c-语言编写http模块" tabindex="-1"><a class="header-anchor" href="#◆-3-9-用c-语言编写http模块" aria-hidden="true">#</a> ◆ 3.9 用C++语言编写HTTP模块</h3>
<blockquote>
<blockquote>
<p>Nginx及其官方模块都是由C语言开发的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C语言是面向过程的编程语言，C++则是面向对象的编程语言</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 不要试图用C++编译器（如G++）来编译Nginx的官方代码，这会带来大量的不可控错误。正确的做法是仍然用C编译器来编译Nginx官方提供的各模块，而用C++编译器来编译用C++语言开发的模块，最后利用C++向前兼容C语言的特性，使用C++编译器把所有的目标文件链接起来（包括C编译器由Nginx官方模块生成的目标文件和C++编译器由第三方模块生成的目标文件），这样才可以正确地生成二进制文件Nginx。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 保证C++编译的Nginx模块与C编译的Nginx模块互相适应。所谓互相适应就是C++模块要能够调用Nginx框架提供的C语言方法，而Nginx的HTTP框架也要能够正常地回调C++模块中的方法去处理请求。这一点用C++提供的extern“C”特性即可实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编译方式的修改Nginx的configure脚本没有对C++语言编译模块提供支持，因此，修改编译方式就有以下两种思路：1）修改configure相关的脚本。2）修改configure执行完毕后生成的Makefile文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们推荐使用第2种方法，因为Nginx的一个优点是具备大量的第三方模块，这些模块都是基于官方的configure脚本而写的，擅自修改configure脚本会导致我们的Nginx无法使用第三方模块。</p>
</blockquote>
</blockquote>
<h2 id="◆-第4章-配置、error日志和请求上下文" tabindex="-1"><a class="header-anchor" href="#◆-第4章-配置、error日志和请求上下文" aria-hidden="true">#</a> ◆ 第4章 配置、error日志和请求上下文</h2>
<blockquote>
<blockquote>
<p>编写全异步的HTTP模块时，必须要有上下文来维持一个请求的必要信息</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-http配置项的使用场景" tabindex="-1"><a class="header-anchor" href="#◆-4-1-http配置项的使用场景" aria-hidden="true">#</a> ◆ 4.1 http配置项的使用场景</h3>
<blockquote>
<blockquote>
<p>Nginx的设计是非常灵活的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它在每一个http块、server块或location块下，都会生成独立的数据结构来存放配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们允许当用户访问的请求不同时（如请求的URL分别是/url1、/url2、/url3），配置项test_str可以具有不同的值。那么，当请求是/url1时，test_str的值应当是location块下的loc1，还是这个location所属的server块下的server80，又或者是其所属http块下的值main呢？完全由mytest模块自己决定，我们可以定义这个行为。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-2-怎样使用http配置" tabindex="-1"><a class="header-anchor" href="#◆-4-2-怎样使用http配置" aria-hidden="true">#</a> ◆ 4.2 怎样使用http配置</h3>
<blockquote>
<blockquote>
<p>处理http配置项可以分为下面4个步骤：</p>
<p>1）创建数据结构用于存储配置项对应的参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）设定配置项在nginx.conf中出现时的限制条件与回调方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）实现第2步中的回调方法，或者使用Nginx框架预设的14个回调方法。</p>
<p>4）合并不同级别的配置块中出现的同名配置项。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-5-请求的上下文" tabindex="-1"><a class="header-anchor" href="#◆-4-5-请求的上下文" aria-hidden="true">#</a> ◆ 4.5 请求的上下文</h3>
<blockquote>
<blockquote>
<p>上下文是什么？简单地讲，就是在一个请求的处理过程中，用类似struct这样的结构体把一些关键的信息都保存下来，这个结构体可以称为请求的上下文。每个HTTP模块都可以有自己的上下文结构体，一般都是在刚开始处理请求时在内存池上分配它，之后当经由epoll、HTTP框架再次调用到HTTP模块的处理方法时，这个HTTP模块可以由请求的上下文结构体中获取信息。请求结束时就会销毁该请求的内存池，自然也就销毁了上下文结构体。以上就是HTTP请求上下文的使用场景，由于1个上下文结构体是仅对1个请求1个模块而言的，所以它是低耦合的。如果这个模块不需要使用上下文，也可以完全不理会HTTP上下文这个概念。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为什么要定义HTTP上下文这个概念呢？因为Nginx是个强大的全异步处理的Web服务器，意味着1个请求并不会在epoll的1次调度中处理完成，甚至可能成千上万次的调度各个HTTP模块后才能完成请求的处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以Apache服务器为例，Apache就像某些高档餐厅，每位客人（HTTP请求）都有1位服务员（一个Apache进程）全程服务，每位服务员只有从头至尾服务完这位客人后，才能去为下一个客人提供服务。因此餐厅的并发处理数量受制于服务员的数量，但服务员的数量也不是越多越好，因为餐厅的固定设施（CPU）是有限的，它的管理成本（Linux内核的进程切换成本）也会随着服务员数量的增加而提高，最终影响服务质量。Nginx则不同</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1位服务员同时处理所有客人的需求。当1位客人进入餐厅后，服务员首先给它安排好桌子并把菜单给客人后就离开了，继续服务于其他客人。当这位客人决定点哪些菜后，就试图去叫服务员过来处理点菜需求，当然，服务员可能正在忙于其他客人，但只要一有空闲就会过来拿菜单并交给厨房，再去服务于其他客人。直到厨房通知这位客人的菜已烹饪完毕，服务员再取来菜主动地传递给客人，请他用餐，之后服务员又去寻找是否有其他客人在等待服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以注意到，当1位客人进入Nginx“餐厅”时，首先是由客人来“激活”Nginx“服务员”的。Nginx“服务员”再次来处理这位客人的请求时，有可能是因为这位客人点完菜后大声地叫Nginx“服务员”，等候她来服务，也有可能是因为厨房做好菜后厨师“激活”了这位客人的服务，也就是说“激活”Nginx“服务员”的对象是不固定的。餐厅的流程是先点菜，再上菜，最后收账单以及撤碗盘，但客人是不想了解这个流程的，所以Nginx“服务员”需要为每位客人建立上下文结构体来表示客人进行到哪个步骤，即他点了哪些菜、目前已经上了哪些菜，这些信息都需要独立的保存。“服务员”不会去记住所有客人的“上下文信息”，因为要同时服务的客人可能很多，只有在服务到某位客人时才会去查对应的“上下文信息”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面说的Nginx“服务员”就像Nginx worker进程，客人就是一个个请求，一个Nginx进程同时可以处理百万级别的并发HTTP请求。厨房这些设施可能是网卡、硬盘等硬件。因此，如果我们开发的HTTP模块会多次反复处理同1个请求，那么必须定义上下文结构体来保存处理过程的中间状态，因为谁也不知道下一次是由网卡还是硬盘等服务来激活Nginx进程继续处理这个请求。Nginx框架不会维护这个上下文，只能由这个请求自己保存着上下文结构体。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>再把这个例子对应到HTTP框架中。点菜可能是一件非常复杂的事，因为可能涉及凉菜、热菜、汤、甜品等。假如HTTP模块A负责凉菜、HTTP模块B负责热菜、HTTP模块C负责汤。当一位新客人到来后，他招呼着服务员（worker进程）和HTTP框架处理他的点菜需求时（假设他想点2个凉菜、5个热菜、1个汤），HTTP模块A刚处理了1个凉菜，又有其他客人将服务员叫走了，那么，这个客人处必须有一张纸记录着关于凉菜刚点了一个，另一张纸记录着热菜一个没点，由于HTTP模块C知道，当前的餐厅汤已经卖完，业务实在是太简单了（回顾一下第3章的helloword例子），所以不需要再有一张纸记录着汤有没有点。这两张纸只从属于这个客人，对于其他客人没有意义，这就是上面所说的，上下文只是对于一个请求而言。同时，每个HTTP模块都可以拥有记录客人（请求）状态的纸，这张纸就其实就是上下文结构体。当这个客人叫来服务员时，各个HTTP模块可以查看客人身前的两张纸，了解到点了哪些菜，这才可以继续处理下去。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无论是subrequest还是upstream，都必须有上下文结构体来支持异步地访问第三方服务。</p>
</blockquote>
</blockquote>
<h2 id="◆-第5章-访问第三方服务" tabindex="-1"><a class="header-anchor" href="#◆-第5章-访问第三方服务" aria-hidden="true">#</a> ◆ 第5章 访问第三方服务</h2>
<blockquote>
<blockquote>
<p>当需要访问第三方服务时，Nginx提供了两种全异步方式来与第三方服务器通信：upstream与subrequest。upstream可以保证在与第三方服务器交互时（包括三次握手建立TCP连接、发送请求、接收响应、四次握手关闭TCP连接等）不会阻塞Nginx进程处理其他请求，也就是说，Nginx仍然可以保持它的高性能。因此，在开发HTTP模块时，如果需要访问第三方服务是不能自己简单地用套接字编程实现的，这样会破坏Nginx优秀的全异步架构。subrequest只是分解复杂请求的一种设计模式，它本质上与访问第三方服务没有任何关系，但从HTTP模块开发者的角度而言，使用subrequest访问第三方服务却很常用，当然，subrequest访问第三方服务最终也是基于upstream实现的。这两种机制是HTTP框架为用户准备的、无阻塞访问第三方服务的利器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>upstream和subrequest的设计目标是完全不同的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>upstream被定义为访问上游服务器，也就是说，它把Nginx定义为代理服务器，首要功能是透传，其次才是以TCP获取第三方服务器的内容。Nginx的HTTP反向代理模块就是基于upstream方式实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>subrequest是从属请求的意思，在这里我们更倾向于称它为子请求，也就是说，subrequest将会为客户请求创建子请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为异步无阻塞程序的开发过于复杂，所以HTTP框架提供了这种机制将一个复杂的请求分解为多个子请求，每个子请求负责一种功能，而最初的原始请求负责构成并发送响应给客户端。例如，用subrequest访问第三方服务，一般都是派生出子请求访问上游服务器，父请求在完全取得上游服务器的响应后再决定如何处理来自客户端的请求。这样做的好处是每个子请求专注于一种功能。例如，对于一个子请求，通常在NGX_HTTP_CONTENT_PHASE阶段仅会使用一个HTTP模块处理，这大大降低了模块开发的复杂度。从HTTP框架的内部来说，subrequest与upstream也完全不同，upstream是从属于用户请求的，subrequest与原始的用户请求相比是一个（或多个）独立的新请求，只是新的子请求与原始请求之间可以并发的处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当我们希望把第三方服务的内容几乎原封不动地返回给用户时，一般使用upstream方式，它可以非常高效地透传HTTP</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们访问第三方服务只是为了获取某些信息，再依据这些信息来构造响应并发送给用户，这时应该用subrequest方式，因为从业务上来说，这是两件事：获取上游响应，再根据响应内容处理请求，应由两个请求处理。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-1-upstream的使用方式" tabindex="-1"><a class="header-anchor" href="#◆-5-1-upstream的使用方式" aria-hidden="true">#</a> ◆ 5.1 upstream的使用方式</h3>
<blockquote>
<blockquote>
<p>Nginx的核心功能——反向代理是基于upstream模块（该模块属于HTTP框架的一部分）实现的。在弄清楚upstream的用法后，完全可以根据自己的需求重写Nginx的反向代理功能。例如，反向代理模块是在先接收完客户请求的HTTP包体后，才向上游服务器建立连接并转发请求的。假设用户要上传大小为1GB的文件，由于网速限制，文件完整地到达Nginx需要10小时，恰巧Nginx与上游服务器间的网络也很差（当然这种情况很少见），反向代理这个请求到上游服务也需要10小时，因此，根据用户的网速也许本来只要10个小时的上传过程，最终可能需要20个小时才能完成。在了解了upstream功能后，可以试着改变反向代理模块的这种特性，比如模仿squid反向代理模式，在接收完整HTTP请求的头部后就与上游服务器建立连接，并开始将请求向上游服务器透传。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>upstream的使用方式并不复杂，它提供了8个回调方法，用户只需要视自己的需要实现其中几个回调方法就可以了。在了解这8个回调方法之前，首先要了解upstream是如何嵌入到一个请求中的。</p>
<p>模块在处理任何一个请求时都有ngx_http_request_t结构的对象r，而请求r中又有一个ngx_http_upstream_t类型的成员upstream。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118180048217.png" alt="image-20220118180048217"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）首先需要创建上面介绍的upstream成员，注意，upstream在初始状态下是NULL空指针。可以调用HTTP框架提供好的ngx_http_upstream_create方法来创建upstream。</p>
<p>2）接着设置上游服务器的地址。在HTTP反向代理功能中似乎只能使用在nginx.conf中配置好的上游服务器（参见2.5节的upstream配置块内容），而实际上upstream机制并没有这种要求，用户能够以任意方式指定上游服务器的IP地址。例如，可以从请求的URL或HTTP头部中动态地获取上游服务器地址，ngx_http_upstream_t中的resolved成员就可以帮助用户设置上游服务器（详见5.1.3节）。</p>
<p>3）由于upstream非常灵活，在各个执行阶段中都会试图回调使用它的HTTP模块实现的8个方法（详见5.1.4节），因此，在mytest模块例子中，用户要定义好这些回调方法。</p>
<p>4）在mytest模块中，调用ngx_http_upstream_init方法即可启动upstream机制。注意，ngx_http_mytest_handler方法此时必须返回NGX_DONE，这是在要求HTTP框架不要按阶段继续向下处理请求了，同时它告诉HTTP框架请求必须停留在当前阶段，等待某个HTTP模块主动地继续处理这个请求（例如，在上游服务器主动关闭连接时，upstream模块就会主动地继续处理这个请求，很可能会向客户端发送502响应码）。</p>
<p>使用upstream模块提供的ngx_http_upstream_init方法后，HTTP框架到底如何运行upstream机制呢？图5-2给出了一个常见的upstream执行示意图，它仅在概念上表示主要流程，与代码的执行没有关系。第12章将详细介绍upstream机制到底是如何执行的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图5-2所示的upstream流程包含了epoll模块多次调度、处理一个请求的过程，它虽然与实际代码执行关系不大，但却指出了最常用的3个回调方法——create_request、process_header、finalize_request是如何回调的。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118180253988.png" alt="image-20220118180253988"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图5-2　upstream执行的一般流程</p>
</blockquote>
</blockquote>
<p>注意：upstream提供了3种处理上游服务器包体的方式，包括交由HTTP模块使用input_filter回调方法直接处理包体、以固定缓冲区转发包体、以多个缓冲加磁盘文件的方式转发包体等。在后两种转发包体的方式中，upstream还与文件缓存功能紧密相关，但为了让大家更清晰地理解upstream，本章中将不涉及文件缓存。</p>
<p>upstream有3种处理上游响应包体的方式，但HTTP模块如何告诉upstream使用哪一种方式处理上游的响应包体呢？当请求的ngx_http_request_t结构体中subrequest_in_memory标志位为1时，将采用第1种方式，即upstream不转发响应包体到下游，由HTTP模块实现的input_filter方法处理包体；当subrequest_in_memory为0时，upstream会转发响应包体。当ngx_http_upstream_conf_t配置结构体中的buffering标志位为1时，将开启更多的内存和磁盘文件用于缓存上游的响应包体，这意味上游网速更快；当buffering为0时，将使用固定大小的缓冲区（就是上面介绍的buffer缓冲区）来转发响应包体。</p>
<p>注意：上述的8个回调方法中，只有create_request、process_header、finalize_request是必须实现的，其余5个回调方法——input_filter_init、input_filter、reinit_request、abort_request、rewrite_redirect是可选的。</p>
<p>ngx_http_upstream_t中的conf成员，它用于设置upstream模块处理请求时的参数，包括连接、发送、接收的超时时间等。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118180821480.png" alt="image-20220118180821480"></p>
<p>HTTP反向代理模块在nginx.conf文件中提供的配置项大都是用来设置ngx_http_upstream_conf_t结构体中的成员的。上面列出的3个超时时间是必须要设置的，因为它们默认为0，如果不设置将永远无法与上游服务器建立起TCP连接（因为connect_timeout值为0）。</p>
<p>注意：每一个请求都有独立的ngx_http_upstream_conf_t结构体，这意味着每一个请求都可以拥有不同的网络超时时间等配置，用户甚至可以根据HTTP请求信息决定连接上游服务器的超时时间、缓存上游响应包体的临时文件存放位置等，这些都只需要在设置r-&gt;upstream-&gt;conf时简单地进行赋值即可，有时这非常有用。</p>
<h5 id="_5-1-3-设置需要访问的第三方服务器地址" tabindex="-1"><a class="header-anchor" href="#_5-1-3-设置需要访问的第三方服务器地址" aria-hidden="true">#</a> 5.1.3　设置需要访问的第三方服务器地址</h5>
<p>ngx_http_upstream_t结构中的resolved成员可以直接设置上游服务器的地址。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118181052177.png" alt="image-20220118181052177"></p>
<p>在ngx_http_upstream_resolved_t结构的成员中，必须设置的是上面代码中列出的3个。</p>
<h5 id="_5-1-5-如何启动upstream机制" tabindex="-1"><a class="header-anchor" href="#_5-1-5-如何启动upstream机制" aria-hidden="true">#</a> 5.1.5　如何启动upstream机制</h5>
<p>直接执行ngx_http_upstream_init方法即可启动upstream机制。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118181206267.png" alt="image-20220118181206267"></p>
<p>调用ngx_http_upstream_init就是在启动upstream机制，这时要通过返回NGX_DONE告诉HTTP框架暂停执行请求的下一个阶段。这里还需要执行r-&gt;main-&gt;count++，这是在告诉HTTP框架将当前请求的引用计数加1，即告诉ngx_http_mytest_handler方法暂时不要销毁请求，因为HTTP框架只有在引用计数为0时才能真正地销毁请求。这样的话，upstream机制接下来才能接管请求的处理工作。</p>
<h5 id="_5-2-1-create-request回调方法" tabindex="-1"><a class="header-anchor" href="#_5-2-1-create-request回调方法" aria-hidden="true">#</a> 5.2.1　create_request回调方法</h5>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118181359079.png" alt="image-20220118181359079"></p>
<p>图5-3　create_request回调场景的序列图</p>
<p>1）在Nginx主循环（这里的主循环是指8.5节提到的ngx_worker_process_cycle方法）中，会定期地调用事件模块，以检查是否有网络事件发生。</p>
<p>2）事件模块在接收到HTTP请求后会调用HTTP框架来处理。假设接收、解析完HTTP头部后发现应该由mytest模块处理，这时会调用mytest模块的ngx_http_mytest_handler来处理。</p>
<p>3）这里mytest模块此时会完成5.1.2节~5.1.4节中所列出的步骤。</p>
<p>4）调用ngx_http_upstream_init方法启动upstream。</p>
<p>5）upstream模块会去检查文件缓存，如果缓存中已经有合适的响应包，则会直接返回缓存（当然必须是在使用反向代理文件缓存的前提下）。为了让读者方便地理解upstream机制，本章将不再提及文件缓存。</p>
<p>6）回调mytest模块已经实现的create_request回调方法。</p>
<p>7）mytest模块通过设置r-&gt;upstream-&gt;request_bufs已经决定好发送什么样的请求到上游服务器。</p>
<p>8）upstream模块将会检查5.1.3节中介绍过的resolved成员，如果有resolved成员的话，就根据它设置好上游服务器的地址r-&gt;upstream-&gt;peer成员。</p>
<p>9）用无阻塞的TCP套接字建立连接。</p>
<p>10）无论连接是否建立成功，负责建立连接的connect方法都会立刻返回。</p>
<p>11）ngx_http_upstream_init返回。</p>
<p>12）mytest模块的ngx_http_mytest_handler方法返回NGX_DONE。</p>
<p>13）当事件模块处理完这批网络事件后，将控制权交还给Nginx主循环。</p>
<h5 id="_5-2-2-reinit-request回调方法" tabindex="-1"><a class="header-anchor" href="#_5-2-2-reinit-request回调方法" aria-hidden="true">#</a> 5.2.2　reinit_request回调方法</h5>
<p>reinit_request可能会被多次回调。它被调用的原因只有一个，就是在第一次试图向上游服务器建立连接时，如果连接由于各种异常原因失败，那么会根据upstream中conf参数的策略要求再次重连上游服务器，而这时就会调用reinit_request方法了。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118182035296.png" alt="image-20220118182035296"></p>
<p>图5-4　reinit_request回调场景的序列图</p>
<p>1）Nginx主循环中会定期地调用事件模块，检查是否有网络事件发生。</p>
<p>2）事件模块在确定与上游服务器的TCP连接建立成功后，会回调upstream模块的相关方法处理。</p>
<p>3）upstream模块这时会把r-&gt;upstream-&gt;request_sent标志位置为1，表示连接已经建立成功了，现在开始向上游服务器发送请求内容。</p>
<p>4）发送请求到上游服务器。</p>
<p>5）发送方法当然是无阻塞的（使用了无阻塞的套接字），会立刻返回。</p>
<p>6）upstream模块处理第2步中的TCP连接建立成功事件。</p>
<p>7）事件模块处理完本轮网络事件后，将控制权交还给Nginx主循环。</p>
<p>8）Nginx主循环重复第1步，调用事件模块检查网络事件。</p>
<p>9）这时，如果发现与上游服务器建立的TCP连接已经异常断开，那么事件模块会通知upstream模块处理它。</p>
<p>10）在符合重试次数的前提下，upstream模块会毫不犹豫地再次用无阻塞的套接字试图建立连接。</p>
<p>11）无论连接是否建立成功都立刻返回。</p>
<p>12）这时检查r-&gt;upstream-&gt;request_sent标志位，会发现它已经被置为1了。</p>
<p>13）如果mytest模块没有实现reinit_request方法，那么是不会调用它的。而如果reinit_request不为NULL空指针，就会回调它。</p>
<p>14）mytest模块在reinit_request中处理完自己的事情。</p>
<p>15）处理完第9步中的TCP连接断开事件，将控制权交还给事件模块。</p>
<p>16）事件模块处理完本轮网络事件后，交还控制权给Nginx主循环。</p>
<p>没写完，有需要的话还要继续细看。</p>
<h4 id="_5-4-subrequest的使用方式" tabindex="-1"><a class="header-anchor" href="#_5-4-subrequest的使用方式" aria-hidden="true">#</a> 5.4　subrequest的使用方式</h4>
<p>subrequest是由HTTP框架提供的一种分解复杂请求的设计模式，它可以把原始请求分解为许多子请求，使得诸多请求协同完成一个用户请求，并且每个请求只关注于一个功能。它与访问第三方服务及upstream机制有什么关系呢？首先，只要不是完全将上游服务器的响应包体转发到下游客户端，基本上都会使用subrequest创建出子请求，并由子请求使用upstream机制访问上游服务器，然后由父请求根据上游响应重新构造返回给下游客户端的响应。其次，在HTTP框架的设计上，subrequest与upstream也是密切相关的。例如，上文讲过，描述HTTP请求的ngx_http_request_t结构体中有一个标志位subrequest_in_memory，它决定upstream对待上游响应包体的行为。但是从名字上我们可以看到，它是与subrequest有关的，实际上，在创建子请求的方法中就可以设置subrequest_in_memory。</p>
<p>subrequest设计的基础是生成一个（子）请求的代价要非常小，消耗的内存也要很少，并且不会一直占用进程资源。因此，每个请求都应该做简单、独立的工作，而由多个子请求合成为一个父请求向客户端提供完整的服务。在Nginx中，大量功能复杂的模块都是基于subrequest实现的。</p>
<p>使用subrequest的方式要比upstream简单得多，只需要完成以下4步操作即可。</p>
<p>1）在nginx.conf文件中配置好子请求的处理方式。</p>
<p>2）启动subrequest子请求。</p>
<p>3）实现子请求执行结束时的回调方法。</p>
<p>4）实现父请求被激活时的回调方法。</p>
<h2 id="◆-第6章-开发一个简单的http过滤模块" tabindex="-1"><a class="header-anchor" href="#◆-第6章-开发一个简单的http过滤模块" aria-hidden="true">#</a> ◆ 第6章 开发一个简单的HTTP过滤模块</h2>
<h3 id="◆-6-1-过滤模块的意义" tabindex="-1"><a class="header-anchor" href="#◆-6-1-过滤模块的意义" aria-hidden="true">#</a> ◆ 6.1 过滤模块的意义</h3>
<p>一个请求可以被任意个HTTP过滤模块处理。因此，普通的HTTP模块更倾向于完成请求的核心功能，如static模块负责静态文件的处理。HTTP过滤模块则处理一些附加的功能，如gzip过滤模块可以把发送给用户的静态文件进行gzip压缩处理后再发出去，image_filter这个第三方过滤模块可以将图片类的静态文件制作成缩略图。而且，这些过滤模块的效果是可以根据需要叠加的，比如先由not_modify过滤模块处理请求中的浏览器缓存信息，再交给range过滤模块处理HTTP range协议（支持断点续传），然后交由gzip过滤模块进行压缩，可以看到，一个请求经由各HTTP过滤模块流水线般地依次进行处理了。</p>
<p>HTTP过滤模块的另一个特性是，在普通HTTP模块处理请求完毕，并调用ngx_http_ send_header发送HTTP头部，或者调用ngx_http_output_filter发送HTTP 包体时，才会由这两个方法依次调用所有的HTTP过滤模块来处理这个请求。因此，HTTP过滤模块仅处理服务器发往客户端的HTTP响应，而不处理客户端发往服务器的HTTP请求。</p>
<p>Nginx明确地将HTTP响应分为两个部分：HTTP头部和HTTP包体。因此，对应的HTTP过滤模块可以选择性地只处理HTTP头部或者HTTP包体，当然也可以二者皆处理。例如，not_modify过滤模块只处理HTTP头部，完全不关心http包体；而gzip过滤模块首先会处理HTTP头部，如检查浏览器请求中是否支持gzip解压，然后检查响应中HTTP头部里的Content-Type是否属于nginx.conf中指定的gzip压缩类型，接着才处理HTTP包体，针对每一块buffer缓冲区都进行gzip压缩，这样再交给下一个HTTP过滤模块处理。</p>
<h3 id="◆-6-2-过滤模块的调用顺序" tabindex="-1"><a class="header-anchor" href="#◆-6-2-过滤模块的调用顺序" aria-hidden="true">#</a> ◆ 6.2 过滤模块的调用顺序</h3>
<h4 id="◆-6-2-1-过滤链表是如何构成的" tabindex="-1"><a class="header-anchor" href="#◆-6-2-1-过滤链表是如何构成的" aria-hidden="true">#</a> ◆ 6.2.1 过滤链表是如何构成的</h4>
<p>在编译Nginx源代码时，已经定义了一个由所有HTTP过滤模块组成的单链表，这个单链表与一般的链表是不一样的，它有另类的风格：链表的每一个元素都是一个独立的C源代码文件，而这个C源代码文件会通过两个static静态指针（分别用于处理HTTP头部和HTTP包体）再指向下一个文件中的过滤方法。在HTTP框架中定义了两个指针，指向整个链表的第一个元素，也就是第一个处理HTTP头部、HTTP包体的方法。</p>
<h4 id="◆-6-2-2-过滤链表的顺序" tabindex="-1"><a class="header-anchor" href="#◆-6-2-2-过滤链表的顺序" aria-hidden="true">#</a> ◆ 6.2.2 过滤链表的顺序</h4>
<p>HTTP过滤模块之间的调用顺序是非常重要的。如果两个HTTP过滤模块按照相反的顺序执行，完全可能生成两个不同的HTTP响应包。例如，如果现在有一个图片缩略图过滤模块，还有一个图片裁剪过滤模块，当返回一张图片给用户时，这两个模块的执行顺序不同的话就会导致用户接收到不一样的图片。</p>
<p>Nginx在编译过程中就会决定HTTP过滤模块的顺序。这件事情到底是怎样发生的呢？这其实与3.3节中所说的普通HTTP模块的顺序是一样的，也是由configure生成的ngx_modules数组中各模块的顺序决定的。</p>
<p>由于每个HTTP过滤模块的初始化方法都会把自己加入到单链表的首部，所以，什么时候、以何种顺序调用这些HTTP过滤模块的初始化方法，将会决定这些HTTP过滤模块在单链表中的位置。</p>
<p>注意 对于HTTP过滤模块来说，在ngx_modules数组中的位置越靠后，在实际执行请求时就越优先执行。因为在初始化HTTP过滤模块时，每一个http过滤模块都是将自己插入到整个单链表的首部的。</p>
<p>configure执行时是怎样确定Nginx模块间的顺序的呢？当我们下载官方提供的Nginx源代码包时，官方提供的HTTP过滤模块顺序已经写在auto目录下的modules脚本中了。</p>
<p>如果在执行configure命令时使用--add-module选项新加入第三方的HTTP过滤模块，那么第三方过滤模块会处于ngx_modules数组中的哪个位置呢？答案也可以在图6-1中找到。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118183404709.png" alt="image-20220118183404709"></p>
<p>图6-1 默认即编译进Nginx的官方HTTP过滤模块与第三方HTTP过滤模块间的顺序</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220118183442658.png" alt="image-20220118183442658"></p>
<p>表6-1 默认即编译进Nginx的HTTP过滤模块</p>
<p>从表6-1中可以了解到这些默认的HTTP过滤模块为什么要以图6-1的顺序排列，同样可以弄清楚第三方过滤模块为何要在ngx_http_headers_filter_module模块之后、ngx_http_ userid_filter_module模块之前。</p>
<p>在开发HTTP过滤模块时，如果对configure执行后的过滤模块顺序不满意，那么在修改ngx_modules.c文件时先要对照表6-1看一下每个模块的功能是否符合它的位置。</p>
<h3 id="◆-6-3-http过滤模块的开发步骤" tabindex="-1"><a class="header-anchor" href="#◆-6-3-http过滤模块的开发步骤" aria-hidden="true">#</a> ◆ 6.3 HTTP过滤模块的开发步骤</h3>
<h3 id="◆-6-4-http过滤模块的简单例子" tabindex="-1"><a class="header-anchor" href="#◆-6-4-http过滤模块的简单例子" aria-hidden="true">#</a> ◆ 6.4 HTTP过滤模块的简单例子</h3>
<h2 id="◆-第8章-nginx基础架构" tabindex="-1"><a class="header-anchor" href="#◆-第8章-nginx基础架构" aria-hidden="true">#</a> ◆ 第8章：nginx基础架构</h2>
<h3 id="_8-1-web服务器设计中的关键约束" tabindex="-1"><a class="header-anchor" href="#_8-1-web服务器设计中的关键约束" aria-hidden="true">#</a> 8.1 Web服务器设计中的关键约束</h3>
<h4 id="_1-nginx性能" tabindex="-1"><a class="header-anchor" href="#_1-nginx性能" aria-hidden="true">#</a> 1.nginx性能</h4>
<p>（1）网络性能</p>
<p>是针对Nginx服务而言的。网络性能是指
在不同负载下，Web服务在网络通信上的吞吐量。而带宽这个概念，就是指在特定的网络连接上可以达到的最大吞吐量。因此，网络性能肯定会受制于带宽，当然更多的是受制于Web服务的软件架构。</p>
<p>在大多数场景下，随着服务器上并发连接数的增加，网络性能都会有所下降。目前，我们在谈网络性能时，更多的是对应于高并发场景。例如，在几万或者几十万并发连接下，要求我们的服务器仍然可以保持较高的网络吞吐量，而不是当并发连接数达到一定数量时，服务器的CPU等资源大都浪费在进程间切换、休眠、等待等其他活动上，导致吞吐量大幅下降。</p>
<p>（2）单次请求的延迟性</p>
<p>单次请求的延迟性与上面说的网络性能的差别很明显，这里只是针对一个用户而言的。对于Web服务器，延迟性就是指服务器初次接收到一个用户请求直至返回响应之间持续的时间。服务器在低并发和高并发连接数量下，单个请求的平均延迟时间肯定是不同的。Nginx在设计时更应该考虑的是在高并发下如何保持平均时延性，使其不要上升得太快。</p>
<p>（3）网络效率</p>
<p>例如，使用长连接（keepalive）代替短连接以减少建立、关闭连接带来的网络交互，使用压缩算法来增加相同吞吐量下的信息携带量，使用缓存来减少网络交互次数等，它们都可以提高网络效率。</p>
<p>2.可伸缩性</p>
<p>可伸缩性指架构可以通过添加组件来提升服务，或者允许组件之间具有交互功能。一般可以通过简化组件、降低组件间的耦合度、将服务分散到许多组件等方法来改善可伸缩性。可伸缩性受到组件间的交互频率，以及组件对一个请求是使用同步还是异步的方式来处理等条件制约。</p>
<p>3.简单性</p>
<p>简单性通常指组件的简单程度，每个组件越简单，就会越容易理解和实现，也就越容易被验证（被测试）。一般，我们通过分离关注点原则来设计组件，对于整体架构来说，通常使用通用性原则，统一组件的接口，这样就减少了架构中的变数。</p>
<p>4.可修改性
简单来讲，可修改性就是在当前架构下对于系统功能做出修改的难易程度，对于Web服务器来说，它还包括动态的可修改性，也就是部署好Web服务器后可以在不停止、不重启服务的前提下，提供给用户不同的、符合需求的功能。可修改性可以进一步分解为可进化性、可扩展性、可定制性、可配置性和可重用性，下面简单说明一下这些概念。</p>
<p>（1）可进化性
可进化性表示我们在修改一个组件时，对其他组件产生负面影响的程度。当然，每个组件的可进化性都是不同的，越是核心的组件其可进化性可能会越低，也就是说，对这个组件的功能做出修改时可能同时必须修改其他大量的相关组件。
对于Web服务器来说，“进化”这个概念按照服务是否在运行中又可以分为静态进化和动态进化。优秀的静态进化主要依赖于架构的设计是否足够抽象，而动态进化则不然，它与整个服务的设计都是相关的。
（2）可扩展性
可扩展性表示将一个新的功能添加到系统中的能力（不影响其他功能）。与可进化性一样，除了静态可扩展性外，还有动态可扩展性（如果已经部署的服务在不停止、不重启情况下添加新的功能，就称为动态可扩展性）。</p>
<p>（3）可定制性
可定制性是指可以临时性地重新规定一个组件或其他架构元素的特性，从而提供一种非常规服务的能力。如果某一个组件是可定制的，那么是指用户能够扩展该组件的服务，而不会对其他客户产生影响。支持可定制性的风格一般会提高简单性和可扩展性，因为通常情况下只会实现最常用的功能，不太常用的功能则交由用户重新定制使用，这样组件的复杂性就降低了，整个服务也会更容易扩展。</p>
<p>（4）可配置性可配置性是指在Web服务部署后，通过对服务提供的配置文件进行修改，来提供不同的功能。它与可扩展性、可重用性相关。</p>
<p>（5）可重用性
可重用性指的是一个应用中的功能组件在不被修改的情况下，可以在其他应用中重用的程度。</p>
<p>5.可见性
在Web服务器这个应用场景中，可见性通常是指一些关键组件的运行情况可以被监控的程度。例如，服务中正在交互的网络连接数、缓存的使用情况等。通过这种监控，可以改善服务的性能，尤其是可靠性。</p>
<p>6.可移植性</p>
<p>7.可靠性
可靠性可以看做是在服务出现部分故障时，一个架构容易受到系统层面故障影响的程度。可以通过以下方法提高可靠性：避免单点故障、增加冗余、允许监视，以及用可恢复的动作来缩小故障的范围。</p>
<p>所有的模块都遵循着同样的ngx_module_t接口设计规范，这减少了整个系统中的变数，模块的基本接口ngx_module_t足够简单，只涉及模块的初始化、退出以及对配置项的处理，这同时也带来了足够的灵活性，使得Nginx比较简单地实现了动态可修改性</p>
<p>ngx_module_t结构体作为所有模块的通用接口，它只定义了init_master、
init_module、init_process、init_thread、exit_thread、exit_process、exit_master这7个回调方法
（事实上，init_master、init_thread、exit_thread这3个方法目前都没有使用），它们负责模块的初始化和退出，同时它们的权限也非常高，可以处理系统的核心结构体ngx_cycle_t。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108145931586.png" alt="image-20211108145931586"></p>
<p>（4）核心模块接口的简单化
Nginx还定义了一种基础类型的模块：核心模块，它的模块类型叫做
NGX_CORE_MODULE。目前官方的核心类型模块中共有6个具体模块，分别是
ngx_core_module、ngx_errlog_module、ngx_events_module、ngx_openssl_module、ngx_http_module、ngx_mail_module模块。为什么要定义核心模块呢？因为这样可以简化Nginx的设计，使得非模块化的框架代码只关注于如何调用6个核心模块（大部分Nginx模块都是非核心模块）。</p>
<p>官方Nginx共有五大类型的模块：核心模块、配置模块、事件模块、HTTP模块、mail模块。虽然它们都具备相同的ngx_module_t接口，但在请
求处理流程中的层次并不相同。就如同上面介绍过的核心模块一样，事件模块、HTTP模块、mail模块都会再次具体化ngx_module_t接口</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108150333720.png" alt="image-20211108150333720"></p>
<p>在事件模块中，ngx_event_core_module事件模块是其他所有事件模块的基础；在HTTP模块中，ngx_http_core_module模块是其他所有HTTP模块的基础；在mail模块中，ngx_mail_core_module模块是其他所有mail模块的基础。</p>
<h3 id="_8-2-2-事件驱动架构" tabindex="-1"><a class="header-anchor" href="#_8-2-2-事件驱动架构" aria-hidden="true">#</a> 8.2.2 事件驱动架构</h3>
<p>所谓事件驱动架构，简单来说，就是由一些事件发生源来产生事件，由一个或者多个事件收集器来收集、分发事件，然后许多事件处理器会注册自己感兴趣的事件，同时会“消费”这些事件。</p>
<p>Nginx这个Web服务器而言，一般会由网卡、磁盘产生事件，事件模块将负责事件的收集、分发操作，而所有的模块都可能是事件消费者，它们首先需要向事件模块注册感兴趣的事件类型，这样，在有事件产生时，事件模块会把事件分发到相应的模
块中进行处理。</p>
<p>Nginx采用完全的事件驱动架构来处理业务，这与传统的Web服务器（如Apache）是不同的。对于传统Web服务器而言，采用的所谓事件驱动往往局限在TCP连接建立、关闭事件上，一个连接建立以后，在其关闭之前的所有操作都不再是事件驱动，这时会退化成按序执行每个操作的批处理模式，这样每个请求在连接建立后都将始终占用着系统资源，直到连接关闭才会释放资源。要知道，这段时间可能会非常长，从1毫秒到1分钟都有可能，而且这段时间内占用着内存、CPU等资源也许并没有意义，整个事件消费进程只是在等待某个条件而已，造成了服务器资源的极大浪费，影响了系统可以处理的并发连接数。</p>
<p>这种传统Web服务器往往把一个进程或线程作为事件消费者，当一个请求产生的事件被该进程处理时，直到这个请求处理结束时进程资源都将被这一个请求所占用。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108181926937.png" alt="image-20211108181926937"></p>
<p>Nginx则不然，它不会使用进程或线程来作为事件消费者，所谓的事件消费者只能是某个模块（在这里没有进程的概念）。只有事件收集、分发器才有资格占用进程资源，它们会 在分发某个事件时调用事件消费模块使用当前占用的进程资源</p>
<p>图8-4中列出了5个不同的事件，在事件收集、分发者进程的一次处理过程中，这5个事件按照顺序被收集后，将开始使用当前进程分发事件，从而调用相应的事件消费者模块来处理事件。当然，这种分发、调用也是有序的。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220119084938356.png" alt="image-20220119084938356"></p>
<p>图8-4 Nginx处理事件的简单模型</p>
<p>传统Web服务器与Nginx间的重要差别：前者是每个事件消费者独占一个进程资源，后者的事件消费者只是被事件分发者进程短期调用而已。这种设计使得网络性能、用户感知的请求时延（延时性）都得到了提升，每个用户的请求所产生的事件会及时响应，整个服务器的网络吞吐量都会由于事件的及时响应而增大。但这也会带来一个重要的弊端，即每个事件消费者都不能有阻塞行为，否则将会由于长时间占用事件分发者进程而导致其他事件得不到及时响应。尤其是每个事件消费者不可以让进程转变为休眠状态或等待状态，如在等待一个信号量条件的满足时会使进程进入休眠状态。这加大了事件消费程序的开发者的编程难度，因此，这也导致了Nginx的模块开发相对于Apache来说复杂不少。</p>
<h3 id="_8-2-3-请求的多阶段异步处理" tabindex="-1"><a class="header-anchor" href="#_8-2-3-请求的多阶段异步处理" aria-hidden="true">#</a> 8.2.3 请求的多阶段异步处理</h3>
<p>​		请求的多阶段异步处理只能基于事件驱动架构实现。什么意思呢？就是把一个请求的处理过程按照事件的触发方式划分为多个阶段，每个阶段都可以由事件收集、分发器来触发。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108191604391.png" alt="image-20211108191604391"></p>
<p>这个例子中大致分为7个阶段，这些阶段是可以重复发生的，因此，一个下载静态资源请求可能会由于请求数据过大、网速不稳定等因素而被分解为成百上千个表8-1中所列出的阶段。</p>
<p>异步处理和多阶段是相辅相成的，只有把请求分为多个阶段，才有所谓的异步处理。也就是说，当一个事件被分发到事件消费者中进行处理时，事件消费者处理完这个事件只相当于处理完1个请求的某个阶段。什么时候可以处理下一个阶段呢？这只能等待内核的通知，即当下一次事件出现时，epoll等事件分发器将会获取到通知，再继续调用事件消费者处理请求。这样，每个阶段中的事件消费者都不清楚本次完整的操作究竟什么时候会完成，只能异步被动地等待下一次事件的通知。</p>
<p>请求的多阶段异步处理优势在哪里？这种设计配合事件驱动架构，将会极大地提高网络性能，同时使得每个进程都能全力运转，不会或者尽量少地出现进程休眠状况。因为一旦出现进程休眠，必然减少并发处理事件的数目，一定会降低网络性能，同时会增加请求处理时间的平均时延！这时，如果网络性能无法满足业务需求将只能增加进程数目，进程数目过多就会增加操作系统内核的额外操作：进程间切换，可是频繁地进行进程间切换仍会消耗CPU等资源，从而降低网络性能。同时，休眠的进程会使进程占用的内存得不到有效释放，这最终必然导致系统可用内存的下降，从而影响系统能够处理的最大并发连接数。</p>
<p>根据什么原则来划分请求的阶段呢？一般是找到请求处理流程中的阻塞方法（或者造成阻塞的代码段），在阻塞代码段上按照下面4种方式来划分阶段：
（1）将阻塞进程的方法按照相关的触发事件分解为两个阶段</p>
<p>（2）将阻塞方法调用按照时间分解为多个阶段的方法调用</p>
<pre><code>		例如读取文件的调用（非异步I/O），如果我们读取10MB的文件，这些文件在磁盘中的块未必是连续的，这意味着当这10MB文件内容不在操作系统的缓存中时，可能需要多次驱动硬盘寻址。在寻址过程中，进程多半会休眠或者等待。我们可能会希望像上文所说的那样把读取文件调用分解成两个阶段：发送读取命令且不等待结果阶段、读取结果返回阶段。这样当然很好，可惜的是，如果我们的事件收集、分发者不支持这么做，该怎么办？例如，在Linux上Nginx的事件模块在没打开异步I/O时就不支持这种方法，像ngx_epoll_module模块主要是针对网络事件的，而主机的磁盘事件目前还不支持（必须通过内核异步I/O）。这时，我们可以这样来分解读取文件调用：把10MB均分成1000份，每次只读取10KB。这样，读取10KB的时间就是可控的，意味着这个事件接收器占用进程的时间不会太久，整个系统可以及时地处理其他请求。

那么，在读取0KB~10KB的阶段完成后，怎样进入10KB~20KB阶段呢？这有很多种方
式，如读取完10KB文件后，可能需要使用网络来发送它们，这时可以由网络事件来触发。
或者，如果没有网络事件，也可以设置一个简单的定时器，在某个时间点后再次调用下一个阶段。
</code></pre>
<p>（3）在“无所事事”且必须等待系统的响应，从而导致进程空转时，使用定时器划分阶段</p>
<p>（4）如果阻塞方法完全无法继续划分，则必须使用独立的进程执行这个阻塞方法</p>
<p>​		请求的多阶段异步处理将会提高网络性能、降低请求的时延，在与事件驱动架构配合工作后，可以使得Web服务器同时处理十万甚至百万级别的并发连接，我们在开发Nginx模块时必须遵循这一原则。</p>
<h3 id="_8-2-4-管理进程、多工作进程设计" tabindex="-1"><a class="header-anchor" href="#_8-2-4-管理进程、多工作进程设计" aria-hidden="true">#</a> 8.2.4 管理进程、多工作进程设计</h3>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108192828143.png" alt="image-20211108192828143"></p>
<p>包括完全相同的worker进程、1个可选的cache manager进程以及1个可选的
cache loader进程。
这种设计带来以下优点：
（1）利用多核系统的并发处理能力，多个进程可以占用不同的CPU核心来工
作。如果只有一个进程在处理请求，则必然会造成CPU资源的浪费！如果多个进程间的地位不平等，则必然会有某一级同一地位的进程成为瓶颈，因此，Nginx中所有的worker工作进程都是完全平等的。这提高了网络性能、降低了请求的时延。</p>
<p>（2）负载均衡
多个worker工作进程间通过进程间通信来实现负载均衡，也就是说，一个请求到来时更容易被分配到负载较轻的worker工作进程中处理。这将降低请求的时延，并在一定程度上提高网络性能。</p>
<p>（3）管理进程会负责监控工作进程的状态，并负责管理其行为，管理进程不会占用多少系统资源，它只是用来启动、停止、监控或使用其他行为来控制工作进程。首先，这提高了系统的可靠性，当工作进程出现问题时，管理进程可以启动新的
工作进程来避免系统性能的下降。其次，管理进程支持Nginx服务运行中的程序升级、配置项的修改等操作，这种设计使得动态可扩展性、动态定制性、动态可进化性较容易实现。</p>
<h3 id="_8-2-6-内存池的设计" tabindex="-1"><a class="header-anchor" href="#_8-2-6-内存池的设计" aria-hidden="true">#</a> 8.2.6 内存池的设计</h3>
<p>为了避免出现内存碎片、减少向操作系统申请内存的次数、降低各个模块的开发复杂
度，Nginx设计了简单的内存池。这个内存池没有很复杂的功能：通常它不负责回收内存池中已经分配出的内存。这种内存池最大的优点在于：把多次向系统申请内存的操作整合成一次，这大大减少了CPU资源的消耗，同时减少了内存碎片。</p>
<p>通常每一个请求都有一个这种简易的独立内存池，Nginx为每一个TCP连接都分配了1个内存池，HTTP框架为每一个HTTP请求又分配了1个内存池，而在请求结束时则会销毁整个内存池，把曾经分配的内存一次性归还给操作系统。这种设计大大提高了模块开发的简单性，而且因为分配内存次数的减少使得请求执行的时延得到了降低，同时，通过减少内存碎片，提高了内存的有效利用率和系统可处理的并发连接数，从而增强了网络性能。</p>
<h3 id="_8-2-7-使用统一管道过滤器模式的http过滤模块" tabindex="-1"><a class="header-anchor" href="#_8-2-7-使用统一管道过滤器模式的http过滤模块" aria-hidden="true">#</a> 8.2.7 使用统一管道过滤器模式的HTTP过滤模块</h3>
<p>有一类HTTP模块被命名为HTTP过滤模块，其中每一个过滤模块都有输入端和输出端，这些输入端和输出端都具有统一的接口。这些过滤模块将按照configure执行时决定的顺序组成一个流水线式的加工HTTP响应的中心，每一个过滤模块都是完全独立的，它处理着输入端接收到的数据，并由输出端传递给下一个过滤模块。每一个过滤模块都必须可以增量地处理数据，也就是说能够正确处理完整数据流的一部分。</p>
<p>这种统一管理过滤器的设计方式的好处非常明显：首先它允许把整个HTTP过滤系统的输入/输出简化为一个个过滤模块的简单组合，这大大提高了简单性；其次，它提供了很好的可重用性，任意两个HTTP过滤模块都可以连接在一起（在可允许的范围内）；再次，整个过滤系统非常容易维护、增强。例如，开发了一个新的过滤模块后，可以非常方便地添加到过滤系统中，这是一种高可扩展性。又如，旧的过滤模块可以很容易地被升级版的过滤模块所替代，这是一种高可进化性；接着，它在可验证性和可测试性上非常友好，我们可以灵活地变动这个过滤模块流水线来验证功能；最后，这样的系统完全支持并发执行。</p>
<h3 id="_8-3-nginx框架中的核心结构体ngx-cycle-t" tabindex="-1"><a class="header-anchor" href="#_8-3-nginx框架中的核心结构体ngx-cycle-t" aria-hidden="true">#</a> 8.3 Nginx框架中的核心结构体ngx_cycle_t</h3>
<p>Nginx核心的框架代码一直在围绕着一个结构体展开，它就是ngx_cycle_t。无论是master管理进程、worker工作进程还是cache manager（loader）进程，每一个进程都毫无例外地拥有唯一一个ngx_cycle_t结构体。服务在初始化时就以ngx_cycle_t对象为中心来提供服务，在正常运行时仍然会以ngx_cycle_t对象为中心。</p>
<h3 id="_8-4-nginx启动时框架的处理流程" tabindex="-1"><a class="header-anchor" href="#_8-4-nginx启动时框架的处理流程" aria-hidden="true">#</a> 8.4 Nginx启动时框架的处理流程</h3>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108194601671.png" alt="image-20211108194601671"></p>
<p>1）在Nginx启动时，首先会解析命令行，处理各种参数。因为Nginx是以配置文件作为核心提供服务的，所以最主要的就是确定配置文件nginx.conf的路径。这里会预先创建一个临时的ngx_cycle_t类型变量，用它的成员存储配置文件路径（实际上还会使用这个临时ngx_cycle_t结构体的其他成员，如log成员会指向屏幕输出日志），最后调用表8-2中的ngx_process_options方法来设置配置文件路径等参数。</p>
<p>2）图8-6中的第2步实际上就是在调用表8-2中的ngx_add_inherited_sockets方法。Nginx在不重启服务升级时，也就是我们说过的平滑升级（参见1.9节）时，它会不重启master进程而启动新版本的Nginx程序。这样，旧版本的master进程会通过execve系统调用来启动新版本的master进程（先fork出子进程再调用exec来运行新程序），这时旧版本的master进程必须要通过一种方式告诉新版本的master进程这是在平滑升级，并且传递一些必要的信息。Nginx是通过环境变量来传递这些信息的，新版本的master进程通过ngx_add_inherited_sockets方法由环境变量里读取平滑升级信息，并对旧版本Nginx服务监听的句柄做继承处理。</p>
<p>3）第3步~第8步，都是在ngx_init_cycle方法中执行的。在初始化ngx_cycle_t中的所有容器后，会为读取、解析配置文件做准备工作。因为每个模块都必须有相应的数据结构来存储配置文件中的各配置项，创建这些数据结构的工作都需要在这一步进行。Nginx框架只关心NGX_CORE_MODULE核心模块，这也是为了降低框架的复杂度。这里将会调用所有核心模块的create_conf方法（也只有核心模块才有这个方法），这意味着需要所有的核心模块开始构造用于存储配置项的结构体。其他非核心模块怎么办呢？其实很简单。这些模块大都从属于一个核心模块，如每个HTTP模块都由ngx_http_module管理（如图8-2所示），这样ngx_http_module在解析自己感兴趣的“http”配置项时，将会调用所有HTTP模块约定的方法来创建存储配置项的结构体（如第4章中介绍过的xxx_create_main_conf、xxx_create_srv_conf、
xxx_create_loc_conf方法）。</p>
<p>4）调用配置模块提供的解析配置项方法。遍历nginx.conf中的所有配置项，对于任一个配置项，将会检查所有核心模块以找出对它感兴趣的模块，并调用该模块在ngx_command_t结构体中定义的配置项处理方法</p>
<p>5）调用所有NGX_CORE_MODULE核心模块的init_conf方法。这一步骤的目的在于让所有核心模块在解析完配置项后可以做综合性处理。</p>
<p>6）在之前核心模块的init_conf或者create_conf方法中，可能已经有些模块（如缓存模块）在ngx_cycle_t结构体中的pathes动态数组和open_files链表中添加了需要打开的文件或者目录，本步骤将会创建不存在的目录，并把相应的文件打开。同时，ngx_cycle_t结构体的shared_memory链表中将会开始初始化用于进程间通信的共享内存。
7）之前第4步在解析配置项时，所有的模块都已经解析出自己需要监听的端口，如
HTTP模块已经在解析http{...}配置项时得到它要监听的端口，并添加到listening数组中了。这一步骤就是按照listening数组中的每一个ngx_listening_t元素设置socket句柄并监听端口（实际上，这一步骤的主要工作就是调用表8-2中的ngx_open_listening_sockets方法）。</p>
<p>8）在这个阶段将会调用所有模块的init_module方法。接下来将会根据配置的Nginx运行模式决定如何工作。
9）如果nginx.conf中配置为单进程工作模式，这时将会调用ngx_single_process_cycle方法进入单进程工作模式。
10）调用所有模块的init_process方法。单进程工作模式的启动工作至此全部完成，将进入正常的工作模式，也就是8.5节和8.6节分别介绍的worker进程工作循环、master进程工作循环的结合体。
11）如果进入master、worker工作模式，在启动worker子进程、cache manage子进程、cache loader子进程后，就开始进入8.6节提到的工作状态，至此，master进程启动流程执行完毕</p>
<p>12）由master进程按照配置文件中worker进程的数目，启动这些子进程（也就是调用表8-2中的ngx_start_worker_processes方法）。
13）调用所有模块的init_process方法。worker进程的启动工作至此全部完成，接下来将进入正常的循环处理事件流程，也就是8.5节中介绍的worker进程工作循环的
ngx_worker_process_cycle方法。
14）在这一步骤中，由master进程根据之前各模块的初始化情况来决定是否启动cachemanage子进程，也就是根据ngx_cycle_t中存储路径的动态数组pathes中是否有某个路径的manage标志位打开来决定是否启动cache manage子进程。如果有任何1个路径的manage标志位为1，则启动cache manage子进程。</p>
<p>15）与第14步相同，如果有任何1个路径的loader标志位为1，则启动cache loader子进程。对于第14步和第15步而言，都是与文件缓存模块密切相关的，但本章不会详述。
16）关闭只有worker进程才需要监听的端口。</p>
<p>在以上16个步骤中，简要地列举出了Nginx在单进程模式和master工作方式下的启动流程</p>
<h3 id="_8-5-worker进程是如何工作的" tabindex="-1"><a class="header-anchor" href="#_8-5-worker进程是如何工作的" aria-hidden="true">#</a> 8.5 worker进程是如何工作的</h3>
<p>​		master进程如何通知worker进程停止服务或更换日志文件呢？对于这样控制进程运行的进程间通信方式，Nginx采用的是信号（详见14.5节）。因此，worker进程中会有一个方法来处理信号，它就是ngx_signal_handler方法。</p>
<p>对于worker进程的工作方法ngx_worker_process_cycle来说，它会关注以下4个全局标志位。</p>
<p>其中的ngx_terminate、ngx_quit、ngx_reopen都将由ngx_signal_handler方法根据接收到的信号来设置。例如，当接收到QUIT信号时，ngx_quit标志位会设为1，这是在告诉worker进程需要优雅地关闭进程；当接收到TERM信号时，ngx_terminate标志位会设为1，这是在告诉worker进程需要强制关闭进程；当接收到USR1信号时，ngx_reopen标志位会设为1，这是在告诉Nginx需要重新打开文件（如切换日志文件时）</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108210209441.png" alt="image-20211108210209441"></p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108210348792.png" alt="image-20211108210348792"></p>
<p>在ngx_worker_process_cycle方法中，通过检查ngx_exiting、ngx_terminate、ngx_quit、ngx_reopen这4个标志位来决定后续动作。</p>
<p>如果ngx_exiting为1，则开始准备关闭worker进程。首先，根据当前ngx_cycle_t中所有正在处理的连接，调用它们对应的关闭连接处理方法（就是将连接中的close标志位置为1，再调用读事件的处理方法。调用所有活动连接的读事件处理方法处理连接关闭事件后，将检查ngx_event_timer_rbtree红黑树（保存所有事件的定时器，在第9章中会介绍它）是否为空，如果不为空，表示还有事件需要处理，将继续向下执行，调用ngx_process_events_and_timers方法处理事件；如果为空，表示已经处理完所有的事件，这时将调用所有模块的exit_process方法，最后销毁内存池，退出整个worker进程。</p>
<p>如果ngx_exiting不为1，那么调用ngx_process_events_and_timers方法处理事件</p>
<p>接下来检查ngx_terminate标志位，如果ngx_terminate不为1，则继续向下检查，否则开始准备退出worker进程。与上一步ngx_exiting为1的退出流程不同，这里不会调用所有活动连接的处理方法去处理关闭连接事件，也不会检查是否已经处理完所有的事件，而是立刻调用所有模块的exit_process方法，销毁内存池，退出worker进程。</p>
<p>​		接下来再检查ngx_quit标志位，如果标志位为1，则表示需要优雅地关闭连接。这时，Nginx首先会将所在进程的名字修改为“worker process is shutting down”，然后调用ngx_close_listening_sockets方法来关闭监听的端口，接着设置ngx_exiting标志位为1，继续向下执行（检查ngx_reopen_files标志位）。
​		最后检查ngx_reopen标志位，如果为1，则表示需要重新打开所有文件。这时，调用ngx_reopen_files方法重新打开所有文件。之后继续下一个循环，再去检查ngx_exiting标志位。</p>
<h3 id="_8-6-master进程是如何工作的" tabindex="-1"><a class="header-anchor" href="#_8-6-master进程是如何工作的" aria-hidden="true">#</a> 8.6 master进程是如何工作的</h3>
<p>​		master进程不需要处理网络事件，它不负责业务的执行，只会通过管理worker等子进程来实现重启服务、平滑升级、更换日志文件、配置文件实时生效等功能。它会通过检查以下7个标志位来决定ngx_master_process_cycle方法的运行。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108223356578.png" alt="image-20211108223356578"></p>
<p>ngx_signal_handler方法会根据接收到的信号设置ngx_reap、ngx_quit、ngx_terminate、
ngx_reconfigure、ngx_reopen、ngx_change_binary、ngx_noaccept这些标志位</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108223636378.png" alt="image-20211108223636378"></p>
<p>ngx_processes数组，也就是最多只能有1024个子进程，master进程中所有子进程相关的状态信息都保存在ngx_processes数组中。</p>
<p>master进程怎样启动一个子进程呢？其实很简单，fork系统调用即可以完成。</p>
<p>ngx_spawn_process方法封装了fork系统调用，并且会从ngx_processes数组中选择一个还未使
用的ngx_process_t元素存储这个子进程的相关信息。如果所有1024个数组元素中已经没有空
余的元素，也就是说，子进程个数超过了最大值1024，那么将会返回NGX_INVALID_PID。
因此，ngx_processes数组中元素的初始化将在ngx_spawn_process方法中进行。</p>
<p>ngx_processes数组中这些进程的状态是怎么改变的呢？依靠信号！当每个子进程意外退出时，master父进程会接收到Linux内核发来的CHLD信号，而处理信号的ngx_signal_handler方法这时将会做以下处理：将sig_reap标志位置为1，调用ngx_process_get_status方法修改ngx_processes数组中所有子进程的状态（通过waitpid系统调用得到意外结束的子进程ID，然后遍历ngx_processes数组找到该子进程ID对应的ngx_process_t结构体，将其exited标志位置为1）。</p>
<p>那么，一个子进程意外结束后，如何启动新的子进程呢？这可以在图8-8所示的master进程的工作循环中找到答案。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211108224032797.png" alt="image-20211108224032797"></p>
<h3 id="_8-7-ngx-pool-t内存池" tabindex="-1"><a class="header-anchor" href="#_8-7-ngx-pool-t内存池" aria-hidden="true">#</a> 8.7 ngx_pool_t内存池</h3>
<p>与ngx_pool_t内存池相关的15个方法</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109094926382.png" alt="image-20211109094926382"></p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109094943390.png" alt="image-20211109094943390"></p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109094955720.png" alt="image-20211109094955720"></p>
<p>Nginx已经提供封装了malloc、free的ngx_alloc、ngx_free方法，为什么还需要一个挺复杂的内存池呢？对于没有垃圾回收机制的C语言编写的应用来说，最容易犯的错就是内存泄露。当分配内存与释放内存的逻辑相距遥远时，还很容易发生同一块内存被释放两次。内存
池就是为了降低程序员犯错几率的：模块开发者只需要关心内存的分配，而释放则交由内存池来负责。</p>
<p>“所谓宏，就是一些命令组织在一起，作为一个单独命令完成一个特定任务；Microsoft Word中对宏定义为“宏就是能组织到一起作为一独立的命令使用的一系列word命令，它能使日常工作变得更容易”。”</p>
<p>ngx_pool_t内存池什么时候会释放内存呢？一般地，内存池销毁时才会将内存释放回操作系统（例外就是表8-5中的ngx_pfree方法）。在一个内存池上，可以任意次的申请内存，不用释放它们，唯一要做的就是记得销毁内存池。这一策略在降低程序员们出错概率的同时，引入了另一问题：如果这个内存池的生命周期很长，而每一块内存的生命周期很短，早期申请的内存会一直无谓地占用着珍贵的内存资源，这不是造成严重的内存浪费吗？比如生成内存池后1天后销毁它，这1天中每秒申请1K的内存，而申请到的每块内存在这一秒中就已经使用完毕，这样1天结束时这个内存池已经占用了86MB的内存！没错，如果内存与内存池的生命周期是如此差异，那么这个问题是存在的。所以，一般性的应用中没有见过这样的内存池设计。但是ngx_pool_t内存池却可以应用在Nginx上，这是因为Nginx是一个很纯
粹的web服务器，与客户端的每一个TCP连接有明确的生命周期，TCP连接上的每一个HTTP请求有非常短暂的生命周期，如果每个请求、连接都有各自的内存池，而模块开发者们评估待申请内存的使用周期，如果隶属于一个HTTP请求，则在请求的内存池上分配内存，如果
隶属于一个连接，则在连接的内存池上分配内存，如果一直伴随着模块，则可以在ngx_conf_t的内存池上分配内存。似乎我们得到了不用释放内存的好处，却增加了关心内存生命周期的额外工作？事实不是这样的，绝大多数模块都在单纯的处理请求，只需要使用
ngx_http_request_t中的内存池即可。</p>
<p>ngx_pool_t内存池的设计上还考虑到了小块内存的频繁分配在效率上有提升空间，以及内存碎片还可以再减少些。</p>
<p>NGX_MAX_ALLOC_FROM_POOL宏是一个很重要的标准：在X86架构上就是4095字节。通常，小于等于NGX_MAX_ALLOC_FROM_POOL就意味着小块内存。这并不是绝对的，当调用ngx_create_pool创建内存池时，如果传递的size参数小于NGX_MAX_ALLOC_FROM_POOL+sizeof(ngx_pool_t)，则对于这个内存池来说，size-sizeof(ngx_pool_t)字节就是小块内存的标准。大块内存与小块内存的处理很不一样，看看ngx_pool_t的定义就知道了：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>typedef struct ngx_pool_s ngx_pool_t;
struct ngx_pool_s {
    // 描述小块内存池。当分配小块内存时，剩余的预分配空间不足时，会再分配1个ngx_pool_t，
    // 它们会通过d中的next成员构成单链表
    ngx_pool_data_t d;
    // 评估申请内存属于小块还是大块的标准
    size_t max;
    // 多个小块内存池构成链表时，current指向分配内存时遍历的第1个小块内存池
    ngx_pool_t *current;
    // 用于ngx_output_chain，与内存池关系不大，略过
    ngx_chain_t *chain;
    // 大块内存都直接从进程的堆中分配，为了能够在销毁内存池时同时释放大块内存，
    // 就把每一次分配的大块内存通过ngx_pool_large_t组成单链表挂在large成员上
    ngx_pool_large_t *large;
    // 所有待清理资源（例如需要关闭或者删除的文件）以ngx_pool_cleanup_t对象构成单链表，挂在cleanup成员上
    ngx_pool_cleanup_t *cleanup;
    // 内存池执行中输出日志的对象
    ngx_log_t *log;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当申请的内存算是大块内存时（大于ngx_pool_t的max成员），是直接调用ngx_alloc从进程的堆中分配的，同时会再分配一个ngx_pool_large_t结构体挂在large链表中，</p>
<p>小块内存，通过从进程的堆中预分配更多的内存（ngx_create_pool的size参数决定预分配大小），而后直接使用这块内存的一部分作为小块内存返回给申请者，以此实现减少碎片和调用malloc的次数。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>typedef struct {
    // 指向未分配的空闲内存的首地址
    u_char *last;
    // 指向当前小块内存池的尾部
    u_char *end;
    // 同属于一个pool的多个小块内存池间，通过next相连
    ngx_pool_t *next;
    // 每当剩余空间不足以分配出小块内存时，failed成员就会加1。failed成员大于4后
    // （Nginx1.4.4版本），ngx_pool_t的current将移向下一个小块内存池
    ngx_uint_t failed;
} ngx_pool_data_t;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当内存池预分配的size不足使用时，就会再接着分配一个小块内存池，预分配大小与原内存池相等，且仍然使用ngx_pool_t表示这个纯粹的小块内存池，用ngx_pool_data_t的next成员相连。这样，这个新增的ngx_pool_t结构体中与小块内存无关的其他成员此时是无意义
的，例如max不会赋值、large链表为空等。ngx_pool_t不只希望程序员不用释放内存，而且还能不需要释放如文件等资源。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 实现这个回调方法时，data参数将是ngx_pool_cleanup_pt的data成员
typedef void (*ngx_pool_cleanup_pt)(void *data);
typedef struct ngx_pool_cleanup_s ngx_pool_cleanup_t;
struct ngx_pool_cleanup_s {
    // handler初始为NULL，需要设置为清理方法
    ngx_pool_cleanup_pt handler;
    // ngx_pool_cleanup_add方法的size>0时data不为NULL，此时可改写data指向的内存，
    // 用于为handler指向的方法传递必要的参数
    void *data;
    // 由ngx_pool_cleanup_add方法设置next成员，用于将当前ngx_pool_cleanup_t
    // 添加到ngx_pool_t的cleanup链表中
    ngx_pool_cleanup_t *next;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图8-10以分配地址对齐的内存为例，列出了主要步骤的流程图，可以给读者朋友们更直
观的印象，下面详细解释各步骤：</p>
<p>1）将申请的内存大小size与ngx_pool_t的max成员比较，以决定申请的是小块内存还是大块内存。如果size&lt;=max，则继续执行第2步开始分配小块内存；否则，跳到第10步分配大块内存。
2）取到ngx_pool_t的current指针，它表示应当首先尝试从这个小块内存池里分配，因为current之前的pool已经屡次分配失败（大于4次），其剩余的空间多半无法满足size。这当然是一种存在浪费的预估，但性能不坏。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109105523704.png" alt="image-20211109105523704"></p>
<p>3）从当前小块内存池的ngx_pool_data_t的last指针入手，先调用ngx_align_ptr找到last后最近的对齐地址。</p>
<p>4）比较对齐地址与ngx_pool_data_t的end指针间是否可以容纳size字节。如果endm&gt;=size，那么继续执行第5步准备返回地址m；否则，再检查ngx_pool_data_t的next指针是否为NULL，如果是空指针，那么跳到第6步准备再申请新的小块内存池，不为空则跳到第3步
继续遍历小块内存池构成的链表。</p>
<p>5）先将ngx_pool_data_t的last指针置为下次空闲内存的首地址，再返回地址m，分配内存流程结束。</p>
<p>6）分配一个大小与上一个ngx_pool_t一致的内存池专用于小块内存的分配。内存池大小获取很简单</p>
<p>7）将新内存池的空闲地址的首地址对齐，作为返回给申请的内存，再设last到空闲内存的首地址。</p>
<p>8）从current指向的小块内存池开始遍历到当前的新内存池，依次将各failed成员加1，并把current指向首个failed&lt;=4的小块内存池，用于下一次的小块内存分配。
9）返回第7步对齐的地址，分配流程结束。
10）调用ngx_alloc方法从进程的堆内存中分配size大小的内存。</p>
<p>11）遍历ngx_pool_t的large链表，看看有没有ngx_pool_large_t的alloc成员值为NULL（这
个alloc指向的大块内存执行过ngx_pfree方法）。如果找到了这个ngx_pool_large_t，继续执行
第12步；否则，跳到第13步执行。需要注意的是，为了防止large链表过大，遍历次数是有限
制的，例如最多4次还未找到alloc==NULL的元素，也会跳出这个遍历循环执行第13步。
12）把ngx_pool_large_t的alloc成员置为第10步分配的内存地址，返回地址，分配流程结
束。
13）从内存池中分配出ngx_pool_large_t结构体，alloc成员置为第10步分配的内存地址，
将ngx_pool_large_t添加到ngx_pool_t的large链表首部，返回地址，分配流程结束。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109110703001.png" alt="image-20211109110703001"></p>
<h2 id="◆-第9章-事件模块" tabindex="-1"><a class="header-anchor" href="#◆-第9章-事件模块" aria-hidden="true">#</a> ◆ 第9章 事件模块</h2>
<blockquote>
<blockquote>
<p>ngx_event_t事件和ngx_connection_t连接是处理TCP连接的基础数据结构</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>epoll是目前Linux操作系统上最强大的事件管理机制，本书描述的场景都是使用epoll来驱动事件的处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx的定时器事件是由红黑树实现的，它也由epoll等事件模块触发</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx是如何解决多个worker子进程监听同一端口引起的“惊群”现象的，以及如何均衡多个worker子进程上处理的连接数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Linux内核提供的文件异步I/O是不同于glibc库实现的多线程伪异步I/O的，它充分利用了在Linux内核中CPU与I/O设备独立工作的特性，使得进程在提交文件异步I/O操作后可以占用CPU做其他工作。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-1-事件处理框架概述" tabindex="-1"><a class="header-anchor" href="#◆-9-1-事件处理框架概述" aria-hidden="true">#</a> ◆ 9.1 事件处理框架概述</h3>
<blockquote>
<blockquote>
<p>事件处理框架所要解决的问题是如何收集、管理、分发事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>主要以网络事件和定时器事件为主，而网络事件中又以TCP网络事件为主（Nginx毕竟是个Web服务器）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于网络事件与网卡中断处理程序、内核提供的系统调用密切相关，所以网络事件的驱动既取决于不同的操作系统平台，在同一个操作系统中也受制于不同的操作系统内核版本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx支持多少种操作系统（包括支持哪些版本），就必须提供多少个事件驱动机制，因为基本上每个操作系统提供的事件驱动机制（通常事件驱动机制还有个名字，叫做I/O多路复用）都是不同的。例如，Linux内核2.6之前的版本或者大部分类UNIX操作系统都可以使用poll（ngx_poll_module模块实现）或者select（ngx_select_module模块实现），而Linux内核2.6之后的版本可以使用epoll（ngx_epoll_module模块实现），FreeBSD上可以使用kqueue（ngx_kqueue_module模块实现），Solaris 10上可以使用eventport（ngx_ eventport_module模块实现）等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>事件处理框架需要在不同的操作系统内核中选择一种事件驱动机制支持网络事件的处理（Nginx的高可移植性亦来源于此）。Nginx是如何做到这一点的呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它定义了一个核心模块ngx_events_module，这样在Nginx启动时会调用ngx_ init_cycle方法解析配置项，一旦在nginx.conf配置文件中找到ngx_events_module感兴趣的“events {}”配置项，ngx_events_module模块就开始工作了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_events_module模块定义了事件类型的模块，它的全部工作就是为所有的事件模块解析“events {}”中的配置项，同时管理这些事件模块存储配置项的结构体。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx定义了一个非常重要的事件模块ngx_event_core_module，这个模块会决定使用哪种事件驱动机制，以及如何管理事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx定义了一系列（目前为9个）运行在不同操作系统、不同内核版本上的事件驱动模块，包括：ngx_epoll_module、ngx_kqueue_module、ngx_poll_module、ngx_select_ module、ngx_devpoll_module、ngx_eventport_module、ngx_aio_module、ngx_rtsig_module和基于Windows的ngx_select_module模块。在ngx_event_core_module模块的初始化过程中，将会从以上9个模块中选取1个作为Nginx进程的事件驱动模块。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-2-nginx事件的定义" tabindex="-1"><a class="header-anchor" href="#◆-9-2-nginx事件的定义" aria-hidden="true">#</a> ◆ 9.2 Nginx事件的定义</h3>
<blockquote>
<blockquote>
<p>在Nginx中，每一个事件都由ngx_event_t结构体来表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每一个事件最核心的部分是handler回调方法，它将由每一个事件消费模块实现，以此决定这个事件究竟如何“消费”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有的Nginx模块只要处理事件就必然要设置handler回调方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开始说明操作事件的方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>事件是不需要创建的，因为Nginx在启动时已经在ngx_cycle_t的read_events成员中预分配了所有的读事件，并在write_events成员中预分配了所有的写事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每一个连接将自动地对应一个写事件和读事件，只要从连接池中获取一个空闲连接就可以拿到事件了。那么，怎么把事件添加到epoll等事件驱动模块中呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx为我们封装了两个简单的方法用于在事件驱动模块中添加或者移除事件，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以调用ngx_ event_actions_t结构体的add或者del等方法，但并不推荐这样做，因为Nginx提供的ngx_handle_read_event和ngx_handle_write_event方法还是做了许多通用性的工作的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_handle_read_event方法会将读事件添加到事件驱动模块中，这样该事件对应的TCP连接上一旦出现可读事件（如接收到TCP连接另一端发送来的字符流）就会回调该事件的handler方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_handle_write_event方法会将写事件添加到事件驱动模块中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般在向epoll中添加可读或者可写事件时，都是使用ngx_handle_read_event或者ngx_ handle_write_event方法的。对于事件驱动模块实现的ngx_event_actions结构体中的事件设置方法，最好不要直接调用，下面这4个方法直接使用时都会与具体的事件驱动机制强相关，而使用ngx_handle_read_event或者ngx_handle_write_event方法则可以屏蔽这种差异。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220119180441873.png" alt="image-20220119180441873"></p>
</blockquote>
</blockquote>
<h3 id="◆-9-3-nginx连接的定义" tabindex="-1"><a class="header-anchor" href="#◆-9-3-nginx连接的定义" aria-hidden="true">#</a> ◆ 9.3 Nginx连接的定义</h3>
<blockquote>
<blockquote>
<p>作为Web服务器，每一个用户请求至少对应着一个TCP连接，为了及时处理这个连接，至少需要一个读事件和一个写事件，使得epoll可以有效地根据触发的事件调度相应模块读取请求或者发送响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx中定义了基本的数据结构ngx_connection_t来表示连接，这个连接表示是客户端主动发起的、Nginx服务器被动接受的TCP连接，我们可以简单称其为被动连接。同时，在有些请求的处理过程中，Nginx会试图主动向其他上游服务器建立连接，并以此连接与上游服务器通信，因此，这样的连接与ngx_connection_t又是不同的，Nginx定义了ngx_peer_connection_t结构体来表示主动连接，当然，ngx_peer_connection_t主动连接是以ngx_connection_t结构体为基础实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这两种连接都不可以随意创建，必须从连接池中获取</p>
</blockquote>
</blockquote>
<h5 id="_9-3-1-被动连接" tabindex="-1"><a class="header-anchor" href="#_9-3-1-被动连接" aria-hidden="true">#</a> 9.3.1 被动连接</h5>
<p>本章中未加修饰提到的“连接”都是指客户端发起的、服务器被动接受的连接，这样的连接都是使用ngx_connection_t结构体表示的</p>
<h5 id="_9-3-2-主动连接" tabindex="-1"><a class="header-anchor" href="#_9-3-2-主动连接" aria-hidden="true">#</a> 9.3.2 主动连接</h5>
<p>作为Web服务器，Nginx也需要向其他服务器主动发起连接，当然，这样的连接与上一节介绍的被动连接是不同的，它使用ngx_peer_connection_t结构体来表示主动连接。不过，一个待处理连接的许多特性在被动连接结构体ngx_connection_t中都定义过了，因此，在ngx_peer_connection_t结构体中引用了ngx_connection_t这个结构体</p>
<h5 id="_9-3-3-ngx-connection-t连接池" tabindex="-1"><a class="header-anchor" href="#_9-3-3-ngx-connection-t连接池" aria-hidden="true">#</a> 9.3.3 ngx_connection_t连接池</h5>
<blockquote>
<blockquote>
<p>Nginx在接受客户端的连接时，所使用的ngx_connection_t结构体都是在启动阶段就预分配好的，使用时从连接池中获取即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在ngx_cycle_t中的connections和free_connections这两个成员构成了一个连接池，其中connections指向整个连接池数组的首部，而free_connections则指向第一个ngx_connection_t空闲连接。所有的空闲连接ngx_connection_t都以data成员（见9.3.1节）作为next指针串联成一个单链表，如此，一旦有用户发起连接时就从free_ connections指向的链表头获取一个空闲的连接，同时free_connections再指向下一个空闲连接。而归还连接时只需把该连接插入到free_connections链表表头即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120124703783.png" alt="image-20220120124703783"></p>
<p>图9-1 ngx_connection_t连接池示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx认为每一个连接一定至少需要一个读事件和一个写事件，有多少连接就分配多少个读、写事件。怎样把连接池中的任一个连接与读事件、写事件对应起来呢？很简单。由于读事件、写事件、连接池是由3个大小相同的数组组成，所以根据数组序号就可将每一个连接、读事件、写事件对应起来，这个对应关系在ngx_event_core_module模块的初始化过程中就已经决定了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这3个数组的大小都是由nginx. conf中的connections配置项决定的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用连接池时，Nginx也封装了两个方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们开发的模块直接使用了连接池，那么就可以用这两个方法来获取、释放ngx_ connection_t结构体。</p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120124843112.png" alt="image-20220120124843112"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表9-1 连接池的使用方法</p>
</blockquote>
</blockquote>
<h3 id="◆-9-6-epoll事件驱动模块" tabindex="-1"><a class="header-anchor" href="#◆-9-6-epoll事件驱动模块" aria-hidden="true">#</a> ◆ 9.6 epoll事件驱动模块</h3>
<blockquote>
<blockquote>
<p>以epoll为例，讨论Linux操作系统内核是如何实现epoll事件驱动机制的，在简单了解它的用法后，会进一步说明ngx_epoll_module模块是如何基于epoll实现Nginx的事件驱动的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>同时可以弄清楚Nginx在几十万并发连接下是如何做到高效利用服务器资源的。</p>
</blockquote>
</blockquote>
<h5 id="epoll的原理和用法" tabindex="-1"><a class="header-anchor" href="#epoll的原理和用法" aria-hidden="true">#</a> epoll的原理和用法</h5>
<blockquote>
<blockquote>
<p>设想一个场景：有100万用户同时与一个进程保持着TCP连接，而每一时刻只有几十个或几百个TCP连接是活跃的（接收到TCP包），也就是说，在每一时刻，进程只需要处理这100万连接中的一小部分连接。那么，如何才能高效地处理这种场景呢？进程是否在每次询问操作系统收集有事件发生的TCP连接时，把这100万个连接告诉操作系统，然后由操作系统找出其中有事件发生的几百个连接呢？实际上，在Linux内核2.4版本以前，那时的select或者poll事件驱动方式就是这样做的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在某一时刻，进程收集有事件的连接时，其实这100万连接中的大部分都是没有事件发生的。因此，如果每次收集事件时，都把这100万连接的套接字传给操作系统（这首先就是用户态内存到内核态内存的大量复制），而由操作系统内核寻找这些连接上有没有未处理的事件，将会是巨大的资源浪费，然而select和poll就是这样做的，因此它们最多只能处理几千个并发连接。而epoll不这样做，它在Linux内核中申请了一个简易的文件系统，把原先的一个select或者poll调用分成了3个部分：调用epoll_create建立1个epoll对象（在epoll文件系统中给这个句柄分配资源）、调用epoll_ctl向epoll对象中添加这100万个连接的套接字、调用epoll_wait收集发生事件的连接。这样，只需要在进程启动时建立1个epoll对象，并在需要的时候向它添加或删除连接就可以了，因此，在实际收集事件时，epoll_wait的效率就会非常高，因为调用epoll_wait时并没有向它传递这100万个连接，内核也不需要去遍历全部的连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>简单说明一下epoll是如何高效处理事件的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当某一个进程调用epoll_create方法时，Linux内核会创建一个eventpoll结构体，这个结构体中有两个成员与epoll的使用方式密切相关</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120125451804.png" alt="image-20220120125451804"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每一个epoll对象都有一个独立的eventpoll结构体，这个结构体会在内核空间中创造独立的内存，用于存储使用epoll_ctl方法向epoll对象中添加进来的事件。这些事件都会挂到rbr红黑树中，这样，重复添加的事件就可以通过红黑树而高效地识别出来（epoll_ctl方法会很快）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有添加到epoll中的事件都会与设备（如网卡）驱动程序建立回调关系，也就是说，相应的事件发生时会调用这里的回调方法。这个回调方法在内核中叫做ep_poll_callback，它会把这样的事件放到上面的rdllist双向链表中。这个内核中的双向链表与ngx_queue_t容器几乎是完全相同的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当调用epoll_wait检查是否有发生事件的连接时，只是检查eventpoll对象中的rdllist双向链表是否有epitem元素而已，如果rdllist链表不为空，则把这里的事件复制到用户态内存中，同时将事件数量返回给用户。因此，epoll_wait的效率非常高。epoll_ctl在向epoll对象中添加、修改、删除事件时，从rbr红黑树中查找事件也非常快，也就是说，epoll是非常高效的，它可以轻易地处理百万级别的并发连接。</p>
</blockquote>
</blockquote>
<h5 id="如何使用epoll" tabindex="-1"><a class="header-anchor" href="#如何使用epoll" aria-hidden="true">#</a> 如何使用epoll</h5>
<blockquote>
<blockquote>
<p>epoll通过下面3个epoll系统调用为用户提供服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）epoll_create系统调用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>epoll_create返回一个句柄，之后epoll的使用都将依靠这个句柄来标识。参数size是告诉epoll所要处理的大致事件数目。不再使用epoll时，必须调用close关闭这个句柄。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）epoll_ctl系统调用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>epoll_ctl向epoll对象中添加、修改或者删除感兴趣的事件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）epoll_wait系统调用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>收集在epoll监控的事件中已经发生的事件，如果epoll中没有任何一个事件发生，则最多等待timeout毫秒后返回。epoll_wait的返回值表示当前发生的事件个数，如果返回0，则表示本次调用中没有事件发生，如果返回–1，则表示出现错误，需要检查errno错误码判断错误类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>epoll有两种工作模式： LT（水平触发）模式和ET（边缘触发）模式。默认情况下，epoll采用LT模式工作，这时可以处理阻塞和非阻塞套接字</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ET模式的效率要比LT模式高，它只支持非阻塞套接字。ET模式与LT模式的区别在于，当一个新的事件到来时，ET模式下当然可以从epoll_wait调用中获取到这个事件，可是如果这次没有把这个事件对应的套接字缓冲区处理完，在这个套接字没有新的事件再次到来时，在ET模式下是无法再次从epoll_wait调用中获取这个事件的；而LT模式则相反，只要一个事件对应的套接字缓冲区还有数据，就总能从epoll_wait中获取这个事件。因此，在LT模式下开发基于epoll的应用要简单一些，不太容易出错，而在ET模式下事件发生时，如果没有彻底地将缓冲区数据处理完，则会导致缓冲区中的用户请求得不到响应。默认情况下，Nginx是通过ET模式使用epoll的</p>
</blockquote>
</blockquote>
<h3 id="◆-9-7-定时器事件" tabindex="-1"><a class="header-anchor" href="#◆-9-7-定时器事件" aria-hidden="true">#</a> ◆ 9.7 定时器事件</h3>
<blockquote>
<blockquote>
<p>Nginx实现了自己的定时器触发机制，它与epoll等事件驱动模块处理的网络事件不同：在网络事件中，网络事件的触发是由内核完成的，内核如果支持epoll就可以使用ngx_ epoll_module模块驱动事件，内核如果仅支持select那就得使用ngx_select_module模块驱动事件；定时器事件则完全是由Nginx自身实现的，它与内核完全无关。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx与一般的服务器不同，出于性能的考虑（不需要每次获取时间都调用gettimeofday方法），Nginx使用的时间是缓存在其内存中的，这样，在Nginx模块获取时间时，只是获取内存中的几个整型变量而已</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx中的每个进程都会单独地管理当前时间</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个缓存时间什么时候会更新呢？对于worker进程而言，除了Nginx启动时更新一次时间外，任何更新时间的操作都只能由ngx_epoll_process_events方法（参见9.6.3节）执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>定时器是通过一棵红黑树实现的。ngx_event_timer_rbtree就是所有定时器事件组成的红黑树，而ngx_event_timer_sentinel就是这棵红黑树的哨兵节点</p>
</blockquote>
</blockquote>
<h3 id="◆-9-8-事件驱动框架的处理流程" tabindex="-1"><a class="header-anchor" href="#◆-9-8-事件驱动框架的处理流程" aria-hidden="true">#</a> ◆ 9.8 事件驱动框架的处理流程</h3>
<blockquote>
<blockquote>
<p>事件驱动框架的处理流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx出于充分发挥多核CPU架构性能的考虑，使用了多个worker子进程监听相同端口的设计，这样多个子进程在accept建立新连接时会有争抢，这会带来著名的“惊群”问题，子进程数量越多问题越明显，这会造成系统性能下降。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>建立连接时还会涉及负载均衡问题。在多个子进程争抢处理一个新连接事件时，一定只有一个worker子进程最终会成功建立连接，随后，它会一直处理这个连接直到连接关闭。那么，如果有的子进程很“勤奋”，它们抢着建立并处理了大部分连接，而有的子进程则“运气不好”，只处理了少量连接，这对多核CPU架构下的应用是很不利的，因为子进程间应该是平等的，每个子进程应该尽量地独占一个CPU核心。子进程间负载不均衡，必然影响整个服务的性能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上述问题的解决离不开Nginx的post事件处理机制。这个post事件是什么意思呢？它表示允许事件延后执行。Nginx设计了两个post队列，一个是由被触发的监听连接的读事件构成的ngx_posted_accept_events队列，另一个是由普通读/写事件构成的ngx_ posted_events队列。这样的post事件可以让用户完成什么样的功能呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>□ 将epoll_wait产生的一批事件，分到这两个队列中，让存放着新连接事件的ngx_posted_accept_events队列优先执行，存放普通事件的ngx_posted_events队列最后执行，这是解决“惊群”和负载均衡两个问题的关键。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>□ 如果在处理一个事件的过程中产生了另一个事件，而我们希望这个事件随后执行（不是立刻执行），就可以把它放到post队列中。</p>
</blockquote>
</blockquote>
<h5 id="_9-8-1-如何建立新连接" tabindex="-1"><a class="header-anchor" href="#_9-8-1-如何建立新连接" aria-hidden="true">#</a> 9.8.1 如何建立新连接</h5>
<blockquote>
<blockquote>
<p>处理新连接事件的回调函数是ngx_event_accept</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面简单介绍一下它的流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）首先调用accept方法试图建立新连接，如果没有准备好的新连接事件，ngx_event_ accept方法会直接返回。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）设置负载均衡阈值ngx_accept_disabled，这个阈值是进程允许的总连接数的1/8减去空闲连接数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）调用ngx_get_connection方法由连接池中获取一个ngx_connection_t连接对象。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）为ngx_connection_t中的pool指针建立内存池。在这个连接释放到空闲连接池时，释放pool内存池。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）设置套接字的属性，如设为非阻塞套接字。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）将这个新连接对应的读事件添加到epoll等事件驱动模块中，这样，在这个连接上如果接收到用户请求epoll_wait，就会收集到这个事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7）调用监听对象ngx_listening_t中的handler回调方法。ngx_listening_t结构体的handler回调方法就是当新的TCP连接刚刚建立完成时在这里调用的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果监听事件的available标志位为1，再次循环到第1步，否则ngx_event_ accept方法结束。事件的available标志位对应着multi_accept配置项。当available为1时，告诉Nginx一次性尽量多地建立新连接，它的实现原理也就在这里。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120130945748.png" alt="image-20220120130945748"></p>
</blockquote>
</blockquote>
<h5 id="_9-8-2-如何解决-惊群-问题" tabindex="-1"><a class="header-anchor" href="#_9-8-2-如何解决-惊群-问题" aria-hidden="true">#</a> 9.8.2 如何解决“惊群”问题</h5>
<blockquote>
<blockquote>
<p>只有打开了accept_mutex锁，才可以解决“惊群”问题。何谓“惊群”？就像上面说过的那样，master进程开始监听Web端口， fork出多个worker子进程，这些子进程开始同时监听同一个Web端口。一般情况下，有多少CPU核心，就会配置多少个worker子进程，这样所有的worker子进程都在承担着Web服务器的角色。在这种情况下，就可以利用每一个CPU核心可以并发工作的特性，充分发挥多核机器的“威力”。但下面假定这样一个场景：没有用户连入服务器，某一时刻恰好所有的worker子进程都休眠且等待新连接的系统调用（如epoll_wait），这时有一个用户向服务器发起了连接，内核在收到TCP的SYN包时，会激活所有的休眠worker子进程，当然，此时只有最先开始执行accept的子进程可以成功建立新连接，而其他worker子进程都会accept失败。这些accept失败的子进程被内核唤醒是不必要的，它们被唤醒后的执行很可能也是多余的，那么这一时刻它们占用了本不需要占用的系统资源，引发了不必要的进程上下文切换，增加了系统开销。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>很多操作系统的最新版本的内核已经在事件驱动机制中解决了“惊群”问题，但Nginx作为可移植性极高的Web服务器，还是在自身的应用层面上较好地解决了这一问题。既然“惊群”是多个子进程在同一时刻监听同一个端口引起的，那么Nginx的解决方式也很简单，它规定了同一时刻只能有唯一一个worker子进程监听Web端口，这样就不会发生“惊群”了，此时新连接事件只能唤醒唯一正在监听端口的worker子进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在打开accept_mutex锁的情况下，只有调用ngx_trylock_accept_ mutex方法后，当前的worker进程才会去试着监听web端口</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_accept_mutex实际上是Nginx进程间的同步锁。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_ shmtx_trylock方法是一个非阻塞的获取锁的方法即可。如果成功获取到锁，则返回1，否则返回0。ngx_shmtx_unlock方法负责释放锁。ngx_accept_mutex_held是当前进程的一个全局变量，如果为1，则表示这个进程已经获取到了ngx_accept_mutex锁；如果为0，则表示没有获取到锁，这个标志位主要用于进程内各模块了解是否获取到了ngx_accept_mutex锁</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此，在调用ngx_trylock_accept_mutex方法后，要么是唯一获取到ngx_accept_mutex锁且其epoll等事件驱动模块开始监控Web端口上的新连接事件，要么是没有获取到锁，当前进程不会收到新连接事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果ngx_trylock_accept_mutex方法没有获取到锁，接下来调用事件驱动模块的process_events方法时只能处理已有的连接上的事件；如果获取到了锁，调用process_events方法时就会既处理已有连接上的事件，也处理新连接的事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>什么时候释放ngx_accept_mutex锁呢？等到这批事件全部执行完吗？这当然是不可取的，因为这个worker进程上可能有许多活跃的连接，处理这些连接上的事件会占用很长时间，也就是说，会有很长时间都没有释放ngx_accept_mutex锁，这样，其他worker进程就很难得到处理新连接的机会。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如何解决长时间占用ngx_accept_mutex锁的问题呢？这就要依靠ngx_posted_accept_ events队列和ngx_posted_events队列了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>调用ngx_trylock_accept_mutex试图处理监听端口的新连接事件，如果ngx_accept_ mutex_held为1，就表示开始处理新连接事件了，这时将flags标志位加上NGX_POST_ EVENTS。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当flags标志位包含NGX_POST_EVENTS时是不会立刻调用事件的handler回调方法的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于写事件，也可以采用同样的处理方法。实际上，ngx_posted_accept_events队列和ngx_posted_events队列把这批事件归类了，即新连接事件全部放到ngx_posted_accept_ events队列中，普通事件则放到ngx_posted_events队列中。这样，接下来会先处理ngx_ posted_accept_events队列中的事件，处理完后就要立刻释放ngx_accept_mutex锁，接着再处理ngx_posted_events队列中的事件（参见图9-7），这样就大大减少了ngx_accept_mutex锁占用的时间。</p>
</blockquote>
</blockquote>
<h5 id="_9-8-3-如何实现负载均衡" tabindex="-1"><a class="header-anchor" href="#_9-8-3-如何实现负载均衡" aria-hidden="true">#</a> 9.8.3 如何实现负载均衡</h5>
<blockquote>
<blockquote>
<p>与“惊群”问题的解决方法一样，只有打开了accept_mutex锁，才能实现worker子进程间的负载均衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>初始化了一个全局变量ngx_accept_disabled，它就是负载均衡机制实现的关键阈值，实际上它就是一个整型数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Nginx启动时，ngx_accept_disabled的值就是一个负数，其值为连接总数的7/8。其实，ngx_accept_disabled的用法很简单，当它为负数时，不会进行触发负载均衡操作；而当ngx_accept_disabled是正数时，就会触发Nginx进行负载均衡操作了。Nginx的做法也很简单，就是当ngx_accept_disabled是正数时当前进程将不再处理新连接事件，取而代之的仅仅是ngx_accept_disabled值减1</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在当前使用的连接到达总连接数的7/8时，就不会再处理新连接了，同时，在每次调用process_events时都会将ngx_accept_disabled减1，直到ngx_accept_ disabled降到总连接数的7/8以下时，才会调用ngx_trylock_accept_mutex试图去处理新连接事件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx各worker子进程间的负载均衡仅在某个worker进程处理的连接数达到它最大处理总数的7/8时才会触发，这时该worker进程就会减少处理新连接的机会，这样其他较空闲的worker进程就有机会去处理更多的新连接，以此达到整个Web服务的均衡处理效果。虽然这样的机制不是很完美，但在维护一定程度上的负载均衡时，很好地避免了当某个worker进程由于连接池耗尽而拒绝服务，同时，在其他worker进程上处理的连接还远未达到上限的问题。因此，Nginx将accept_mutex配置项默认设为accept_mutex on。</p>
</blockquote>
</blockquote>
<h5 id="_9-8-4-post事件队列" tabindex="-1"><a class="header-anchor" href="#_9-8-4-post事件队列" aria-hidden="true">#</a> 9.8.4 post事件队列</h5>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120132033612.png" alt="image-20220120132033612"></p>
<h5 id="_9-8-5-ngx-process-events-and-timers流程" tabindex="-1"><a class="header-anchor" href="#_9-8-5-ngx-process-events-and-timers流程" aria-hidden="true">#</a> 9.8.5 ngx_process_events_and_timers流程</h5>
<h3 id="◆-9-9-文件的异步i-o" tabindex="-1"><a class="header-anchor" href="#◆-9-9-文件的异步i-o" aria-hidden="true">#</a> ◆ 9.9 文件的异步I/O</h3>
<blockquote>
<blockquote>
<p>事件驱动模块都是在处理网络事件，而没有涉及磁盘上文件的操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Linux内核2.6.2x之后版本中支持的文件异步I/O，以及ngx_epoll_module模块是如何与文件异步I/O配合提供服务的。这里提到的文件异步I/O并不是glibc库提供的文件异步I/O。glibc库提供的异步I/O是基于多线程实现的，它不是真正意义上的异步I/O。而本节说明的异步I/O是由Linux内核实现，只有在内核中成功地完成了磁盘操作，内核才会通知进程，进而使得磁盘文件的处理与网络事件的处理同样高效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用这种方式的前提是Linux内核版本中必须支持文件异步I/O。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx把读取文件的操作异步地提交给内核后，内核会通知I/O设备独立地执行操作，这样，Nginx进程可以继续充分地占用CPU。而且，当大量读事件堆积到I/O设备的队列中时，将会发挥出内核中“电梯算法”的优势，从而降低随机读取磁盘扇区的成本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Linux内核级别的文件异步I/O是不支持缓存操作的，也就是说，即使需要操作的文件块在Linux文件缓存中存在，也不会通过读取、更改缓存中的文件块来代替实际对磁盘的操作，虽然从阻塞worker进程的角度上来说有了很大好转，但是对单个请求来说，还是有可能降低实际处理的速度，因为原先可以从内存中快速获取的文件块在使用了异步I/O后则一定会从磁盘上读取。异步文件I/O是把“双刃剑”，关键要看使用场景，如果大部分用户请求对文件的操作都会落到文件缓存中，那么不要使用异步I/O，反之则可以试着使用文件异步I/O，看一下是否会为服务带来并发能力上的提升。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx仅支持在读取文件时使用异步I/O，因为正常写入文件时往往是写入内存中就立刻返回，效率很高，而使用异步I/O写入时速度会明显下降。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Nginx中，文件异步I/O事件完成后的通知是集成到epoll中的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它是通过IOCB_FLAG_RESFD标志位完成的。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-10-tcp协议与nginx" tabindex="-1"><a class="header-anchor" href="#◆-9-10-tcp协议与nginx" aria-hidden="true">#</a> ◆ 9.10 TCP协议与Nginx</h3>
<p>TCP是一个面向连接的协议，它必须基于建立好的TCP连接来为通信的两方提供可靠的
字节流服务。建立TCP连接是我们耳熟能详的三次握手：
1）客户端向服务器发起连接（SYN）。
2）服务器确认收到并向客户端也发起连接（ACK+SYN）。
3）客户端确认收到服务器发起的连接（ACK）。</p>
<p>​		这个建立连接的过程是在操作系统内核中完成的，而如Nginx这样的应用程序只是从内
核中取出已经建立好的TCP连接。大多时候，Nginx是作为连接的服务器方存在的，我们看一
看Linux内核是怎样处理TCP连接建立的，如图9-8所示。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109170437577.png" alt="image-20211109170437577"></p>
<p>简单地表达了一个观点：内核在我们调用listen方法时，就已经为这个监听端口
建立了SYN队列和ACCEPT队列，当客户端使用connect方法向服务器发起TCP连接，随后图
中1.1步骤客户端的SYN包到达了服务器后，内核会把这一信息放到SYN队列（即未完成握手
队列）中，同时回一个SYN+ACK包给客户端。2.1步骤中客户端再次发来了针对服务器SYN
包的ACK网络分组时，内核会把连接从SYN队列中取出，再把这个连接放到ACCEPT队列
（即已完成握手队列）中。而服务器在第3步调用accept方法建立连接时，其实就是直接从
ACCEPT队列中取出已经建好的连接而已。</p>
<p>这样，如果大量连接同时到来，而应用程序不能及时地调用accept方法，就会导致以上
两个队列满（ACCEPT队列满，进而也会导致SYN队列满），从而导致连接无法建立。这其
实很常见，比如Nginx的每个worker进程都负责调用accept方法，如果一个Nginx模块在处理请
求时长时间陷入了某个方法的执行中（如执行计算或者等待IO），就有可能导致新连接无法
建立。</p>
<p>建立好连接后，TCP提供了可靠的字节流服务。怎么理解所谓的“可靠”呢？可以简单概
括为以下4点：
1）TCP的send方法可以发送任意大的长度，但数据链路层不会允许一个报文太大的，当
报文长度超过MTU大小时，它一定会把超大的报文切成小报文。这样的场景是不被TCP接受
的，切分报文段既然不可避免，那么就只能发生在TCP协议内部，这才是最有效率的。</p>
<p>2）每一个报文在发出后都必须收到“回执”——ACK，确保对方收到，否则会在超时时
间达到后重发。相对的，接收到一个报文时也必须发送一个ACK告诉对方。</p>
<p>3）报文在网络中传输时会失序，TCP接收端需要重新排序失序的报文，组合成发送时
的原序再给到应用程序。当然，重复的报文也要丢弃。
4）当连接的两端处理速度不一致时，为防止TCP缓冲区溢出，还要有个流量控制，减
缓速度更快一方的发送速度。</p>
<p>从以上4点可以看到，内核为每一个TCP连接都分配了内存分别充当发送、接收缓冲
区，这与Nginx这种应用程序中的用户态缓存不同。搞清楚内核的TCP读写缓存区，对于我们
判断Nginx的处理能力很有帮助，毕竟无论内核还是应用程序都在抢物理内存。</p>
<p>先来看看调用send这样的方法发送TCP字节流时，内核到底做了哪些事。图9-9是一个简
单的send方法调用时的流程示意图。</p>
<p>TCP连接建立时，就可以判断出双方的网络间最适宜的、不会被再次切分的报文大小，TCP层把它叫做MSS最大报文段长度（当然，MSS是可变的）。在图9-9的场景中，假定待发送的内存将按照MSS被切分为3个报文，应用程序在第1步调用send方法、第10步send方法返
回之间，内核的主要任务是把用户态的内存内容拷贝到内核态的TCP缓冲区上，在第5步时
假定内核缓存区暂时不足，在超时时间内又等到了足够的空闲空间。从图中可以看到，send
方法成功返回并不等于就把报文发送出去了（当然更不等于对方接收到了报文）。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109174426741.png" alt="image-20211109174426741"></p>
<p>当调用recv这样的方法接收报文时，Nginx是基于事件驱动的，也就是说只有epoll通知
worker进程收到了网络报文，recv才会被调用（socket也被设为非阻塞模式）。图9-10就是一
个这样的场景，在第1~4步表示接收到了无序的报文后，内核是怎样重新排序的。第5步开
始，应用程序调用了recv方法，内核开始把TCP读缓冲区的内容拷贝到应用程序的用户态内
存中，第13步recv方法返回拷贝的字节数。图中用到了linux内核中为TCP准备的2个队列：
receive队列是允许用户进程直接读取的，它是将已经接收到的TCP报文，去除了TCP头部、排好序放入的、用户进程可以直接按序读取的队列；out_of_order队列存放乱序的报文。</p>
<p>Nginx使用好TCP协议主要在于如何有效率地使用CPU和内存。只在必要时
才调用TCP的send/recv方法，这样就避免了无谓的CPU浪费。例如，只有接收到报文，甚至
只有接收到足够多的报文（SO_RCVLOWAT阈值），worker进程才有可能调用recv方法。同
样，只在发送缓冲区有空闲空间时才去调用send方法。这样的调用才是有效率的。Nginx对内
存的分配是很节俭的，但Linux内核使用的内存又如何控制呢？</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109175253490.png" alt="image-20211109175253490"></p>
<p>首先，我们可以控制内存缓存的上限，例如基于setsockopt方法实现的SO_SNDBUF、
SO_RCVBUF（Nginx的listen配置里的sndbuf和rcvbuf也是在改它们，参见2.4.1节）。
SO_SNDBUF表示这个连接上的内核写缓存上限（事实上SO_SNDBUF也并不是精确的上限，
在内核中会把这个值翻一倍再作为写缓存上限使用）。它受制于系统级配置的上下限
net.core.wmem_max（参见1.3.4节）。SO_RCVBUF同理。读写缓存的实际内存大小与场景有
关。对读缓存来说，接收到一个来自连接对端的TCP报文时，会导致读缓存增加，如果超过
了读缓存上限，那么这个报文会被丢弃。当进程调用read、recv这样的方法读取字节流时，
读缓存就会减少。因此，读缓存是一个动态变化的、实际用到多少才分配多少的缓冲内存。
当用户进程调用send方法发送TCP字节流时，就会造成写缓存增大。当然，如果写缓存已经到达上限，那么写缓存维持不变，向用户进程返回失败。而每当接收到连接对端发来的
ACK，确认了报文的成功发送时，写缓存就会减少。可见缓存上限所起作用为：丢弃新报
文，防止这个TCP连接消耗太多的内存。</p>
<p><img src="@source/docs/theme-reco/C:/Users/happing/AppData/Roaming/Typora/typora-user-images/image-20211109180208252.png" alt="image-20211109180208252"></p>
<h2 id="◆-第10章-http框架的初始化" tabindex="-1"><a class="header-anchor" href="#◆-第10章-http框架的初始化" aria-hidden="true">#</a> ◆ 第10章 HTTP框架的初始化</h2>
<blockquote>
<blockquote>
<p>Nginx作为Web服务器，其HTTP模块的数量远超过了其他4类模块（核心模块、事件模块、配置模块、邮件模块）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP框架大致由1个核心模块（ngx_http_module）、两个HTTP模块（ngx_http_core_module、ngx_ http_upstream_module）组成，它将负责调度其他HTTP模块来一起处理用户请求。</p>
</blockquote>
</blockquote>
<h5 id="http模块通常会做哪些工作" tabindex="-1"><a class="header-anchor" href="#http模块通常会做哪些工作" aria-hidden="true">#</a> HTTP模块通常会做哪些工作：</h5>
<blockquote>
<blockquote>
<p>1）处理已经解析完毕的HTTP请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）获取到nginx.conf里自己感兴趣的配置项，无论它们是否同时出现在不同的http{}配置块、server{}配置块或者location{}配置块下，都需要正确地解析出，以此决定针对不同的用户请求定制不同的功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）调用HTTP框架提供的方法就可以发送HTTP响应，包括使用磁盘I/O读取数据并发送。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）将一个请求分为顺序性的多个处理阶段，前一个阶段的结果会影响后一个阶段的处理。例如，ngx_http_access_module模块根据IP信息拒绝一个用户请求后，本应接着执行的其他HTTP模块将没有机会再处理这个请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）异步接收HTTP请求中的包体，可以将网络数据保存到磁盘上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）异步访问第三方服务。</p>
<p>7）分解出多个子请求来构造处理复杂业务的能力，子请求间的处理仍然是异步化、非阻塞的。</p>
</blockquote>
</blockquote>
<h5 id="探讨一下http框架至少要完成哪些基础性的工作" tabindex="-1"><a class="header-anchor" href="#探讨一下http框架至少要完成哪些基础性的工作" aria-hidden="true">#</a> 探讨一下HTTP框架至少要完成哪些基础性的工作</h5>
<blockquote>
<blockquote>
<p>1）处理所有http{}块内的配置项，管理每个HTTP模块感兴趣的配置项（允许同一个http{}下出现多个server{}、location{}等子配置块，允许同名的配置项同时出现在各种配置块中）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）HTTP框架要能够使用第9章介绍的事件模块监听Web端口，并处理新连接事件、可读事件、可写事件等。</p>
<p>3）HTTP框架需要有状态机来分析接收到的TCP字符流是否是完整的HTTP包。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）HTTP框架能够根据接收到的HTTP请求中的URI和HTTP头部，并以nginx.conf中server_name和location等配置项为依据，将请求按照其所在阶段准确地分发到某一个HTTP模块，从而调用它的回调方法来处理该请求。</p>
<p>5）向HTTP模块提供必要的工具方法，可以处理网络I/O（读取HTTP包体、发送HTTP响应）和磁盘I/O。</p>
<p>6）提供upstream机制帮助HTTP模块访问第三方服务。</p>
<p>7）提供subrequest机制帮助HTTP模块实现子请求。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-1-http框架概述" tabindex="-1"><a class="header-anchor" href="#◆-10-1-http框架概述" aria-hidden="true">#</a> ◆ 10.1 HTTP框架概述</h3>
<blockquote>
<blockquote>
<p>□ HTTP框架是支持在http{}块内拥有多个server{}、location{}配置块的。</p>
<p>□ 选择使用哪一个server虚拟主机块是取决于server_name的。</p>
<p>□ 任意的server块内都可以用listen来监听端口，在不同的server块内允许监听相同的端口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>□ 选择使用哪一个location块是将用户请求URI与合适的server块内的所有location表达式做匹配后决定的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>□ 同一个配置项可以出现在任意的http{}、server{}、location{}等配置块中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP框架的首要任务是通过调用ngx_http_module_t接口中的方法来管理所有HTTP模块的配置项，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有的server虚拟主机会以散列表的数据结构组织起来，以达到高效查询的目的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有的location表达式会以一个静态的二叉查找树组织起来，以达到高效查询的目的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于每一个HTTP请求，都会以流水线形式划分为多个阶段，以供HTTP模块插入到HTTP框架中来共同处理请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>□ 直接隶属于http{}块内的配置项称为main配置项。□ 直接隶属于server{}块内的配置项称为srv配置项。□ 直接隶属于location{}块内的配置项称为loc配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于每一个HTTP模块，都必须实现ngx_http_module_t接口。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-2-管理http模块的配置项" tabindex="-1"><a class="header-anchor" href="#◆-10-2-管理http模块的配置项" aria-hidden="true">#</a> ◆ 10.2 管理HTTP模块的配置项</h3>
<blockquote>
<blockquote>
<p>对于HTTP模块而言，只需关心工作时能够取到正确的配置项。但对于HTTP框架而言，任何一个HTTP模块的server相关的配置项都是可能出现在main级别中，而location相关的配置项可能出现在main、srv级别中。而server是可能存在许多个的，location更是可以反复嵌套的，这样就要为每个HTTP模块按照nginx.conf里的配置块建立许多份配置。在10.1节的例子中，共出现了7个配置块，对于HTTP框架而言，就需要为所有的HTTP模块分配7个用于存储配置结构体指针的数组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在处理http{}块内的main级别配置项时，对每个HTTP模块来说，都会调用create_main_conf、create_srv_conf、create_loc_conf方法建立3个结构体，分别用于存储HTTP全局配置项、server配置项、location配置项。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-3-监听端口的管理" tabindex="-1"><a class="header-anchor" href="#◆-10-3-监听端口的管理" aria-hidden="true">#</a> ◆ 10.3 监听端口的管理</h3>
<blockquote>
<blockquote>
<p>监听端口属于server虚拟主机，它是由server{}块下的listen配置项决定的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每监听一个TCP端口，都将使用一个独立的ngx_http_conf_port_t结构体来表示</p>
</blockquote>
</blockquote>
<h3 id="◆-10-5-location的快速检索" tabindex="-1"><a class="header-anchor" href="#◆-10-5-location的快速检索" aria-hidden="true">#</a> ◆ 10.5 location的快速检索</h3>
<blockquote>
<blockquote>
<p>每一个server块可以对应着多个location块，而一个location块还可以继续嵌套多个location块。每一批location块是通过双向链表与它的父配置块（要么属于server块，要么属于location块）关联起来的。由双向链表的查询效率可以知道，当一个请求根据10.4节中描述过的散列表快速查询到server块时，必须遍历其下的所有location组成的双向链表才能找到与其URI匹配的location配置块，这也是用户无法接受的。下面看看HTTP框架又是怎样通过静态的二叉查找树来保存location的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里的二叉查找树并不是第7章中介绍过的红黑树，不过，为什么不使用红黑树呢？因为location是由nginx.conf中读取到的，它是静态不变的，不存在运行过程中在树中添加或者删除location的场景，而且红黑树的查询效率也没有重新构造的静态的完全平衡二叉树高。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这棵静态的二叉平衡查找树是用ngx_http_location_tree_node_t结构体来表示的</p>
</blockquote>
</blockquote>
<h3 id="◆-10-6-http请求的11个处理阶段" tabindex="-1"><a class="header-anchor" href="#◆-10-6-http请求的11个处理阶段" aria-hidden="true">#</a> ◆ 10.6 HTTP请求的11个处理阶段</h3>
<h5 id="nginx为什么要把http请求的处理过程分为多个阶段呢" tabindex="-1"><a class="header-anchor" href="#nginx为什么要把http请求的处理过程分为多个阶段呢" aria-hidden="true">#</a> Nginx为什么要把HTTP请求的处理过程分为多个阶段呢？</h5>
<blockquote>
<blockquote>
<p>Nginx的模块化设计使得每一个HTTP模块可以仅专注于完成一个独立的、简单的功能，而一个请求的完整处理过程可以由无数个HTTP模块共同合作完成。这种设计有非常好的简单性、可测试性、可扩展性，然而，当多个HTTP模块流水式地处理同一个请求时，单一的处理顺序是无法满足灵活性需求的，每一个正在处理请求的HTTP模块很难灵活、有效地指定下一个HTTP处理模块是哪一个。而且，不划分处理阶段也会让HTTP请求的完整处理流程难以管理，每一个HTTP模块也很难正确地将自己插入到完整流程中的合适位置中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTP框架依据常见的处理流程将处理阶段划分为11个阶段，其中每个处理阶段都可以由任意多个HTTP模块流水式地处理请求。先来回顾一下第3章中曾经提到过的ngx_http_phases阶段的定义，如下所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120155422302.png" alt="image-20220120155422302"></p>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120155432583.png" alt="image-20220120155432583"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于这11个处理阶段，有些阶段是必备的，有些阶段是可选的，当然也可以有多个HTTP模块同时介入同一阶段（这时，将会在一个阶段中按照这些HTTP模块的ctx_index顺序来依次执行它们提供的handler处理方法）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ngx_http_phases定义的11个阶段是有顺序的，必须按照其定义的顺序执行。同时也要意识到，并不是说一个用户请求最多只能经过11个HTTP模块提供的ngx_ http_handler_pt方法来处理，NGX_HTTP_POST_READ_PHASE、NGX_HTTP_SERVER_ REWRITE_PHASE、NGX_HTTP_REWRITE_PHASE、NGX_HTTP_PREACCESS_PHASE、NGX_HTTP_ACCESS_PHASE、NGX_HTTP_CONTENT_PHASE、NGX_HTTP_LOG_ PHASE这7个阶段可以包括任意多个处理方法，它们是可以同时作用于同一个用户请求的。而NGX_HTTP_FIND_CONFIG_PHASE、NGX_HTTP_POST_REWRITE_PHASE、NGX_HTTP_POST_ACCESS_PHASE、NGX_HTTP_TRY_FILES_PHASE这4个阶段则不允许HTTP模块加入自己的ngx_http_handler_pt方法处理用户请求，它们仅由HTTP框架实现。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-7-http框架的初始化流程" tabindex="-1"><a class="header-anchor" href="#◆-10-7-http框架的初始化流程" aria-hidden="true">#</a> ◆ 10.7 HTTP框架的初始化流程</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/19.深入理解Nginx：模块开发与架构解析（第1+2版）/image-20220120155601478.png" alt="image-20220120155601478"></p>
<p>下面分别介绍图10-10中的15个步骤。</p>
<p>1）按照在ngx_modules数组中的顺序，由0开始依次递增地设置所有HTTP模块的ctx_index字段。这个字段的值将决定HTTP模块应用于请求时的顺序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）第2步～第7步实际上就是10.2.1节中描述的内容。解析到http{}块时产生1个ngx_http_conf_ctx_t结构体，同时初始化它的main_conf、srv_conf、loc_conf 3个指针数组，数组的容量就是第1步中获取到的所有HTTP模块的数量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）依次调用所有HTTP模块的create_main_conf方法，产生的配置结构体指针将按照各模块ctx_index字段指定的顺序放入ngx_http_conf_ctx_t结构体的main_conf数组中。</p>
<p>4）依次调用所有HTTP模块的create_srv_conf方法，产生的配置结构体指针将按照各模块ctx_index字段指定的顺序放入ngx_http_conf_ctx_t结构体的srv_conf数组中。</p>
<p>5）依次调用所有HTTP模块的create_loc_conf方法，产生的配置结构体指针将按照各模块ctx_index字段指定的顺序放入ngx_http_conf_ctx_t结构体的loc_conf数组中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）依次调用所有HTTP模块的preconfiguration方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7）解析http{}块下的main级别配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在解析main级别配置项时，如果遇到server{}配置块，将会触发ngx_http_core_ server方法，并开始解析server级别下的配置项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在解析srv级别配置项时，如果遇到location{}配置块，将会触发ngx_http_core_location方法，并开始解析location级别下的配置项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>8）依次调用所有HTTP模块的init_main_conf方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>9）调用ngx_http_merge_servers方法合并配置项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10）按照10.5节介绍的方式，创建由location块构造的静态二叉平衡查找树。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>11）在10.6节中我们介绍过，有7个HTTP阶段（NGX_HTTP_POST_READ_PHASE、NGX_HTTP_SERVER_REWRITE_PHASE、NGX_HTTP_REWRITE_PHASE、NGX_HTTP_PREACCESS_PHASE、NGX_HTTP_ACCESS_PHASE、NGX_HTTP_CONTENT_PHASE、NGX_HTTP_LOG_PHASE）是允许任何一个HTTP模块实现自己的ngx_http_handler_pt处理方法，并将其加入到这7个阶段中去的。在调用HTTP模块的postconfiguration方法向这7个阶段中添加处理方法前，需要先将phases数组中这7个阶段里的handlers动态数组初始化（ngx_array_t类型需要执行ngx_array_init方法初始化），在这一步骤中，通过调用ngx_ http_init_phases方法来初始化这7个动态数组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>12）依次调用所有HTTP模块的postconfiguration方法。HTTP模块可以在这一步骤中将自己的ngx_http_handler_pt处理方法添加到以上7个HTTP阶段中。13）在上一步中，各HTTP模块会向全局的ngx_http_core_main_conf_t结构体中的phases数组添加处理方法，该数组中存在11个成员，每个成员都是动态数组，可能包含任何数量的处理方法。这一步骤将遍历以上所有处理方法，构造由所有处理方法构成的有序的phase_engine. handlers数组。关于HTTP阶段的用法可参见10.6节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14）这一步骤构造server虚拟主机构成的支持通配符的散列表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>15）这一步骤构造监听端口与server间的关联关系，设置新连接事件的回调方法为ngx_http_init_connection</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以上15个步骤就是HTTP框架在Nginx的启动过程中所做的主要工作。</p>
</blockquote>
</blockquote>
</div></template>



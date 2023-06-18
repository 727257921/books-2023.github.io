<template><div><h1 id="十五-精选多家互联网公司php面试题" tabindex="-1"><a class="header-anchor" href="#十五-精选多家互联网公司php面试题" aria-hidden="true">#</a> 十五.精选多家互联网公司PHP面试题</h1>
<h2 id="一、同城帮" tabindex="-1"><a class="header-anchor" href="#一、同城帮" aria-hidden="true">#</a> 一、同城帮</h2>
<p>之前隶属于360公司，是360的一个分支，现在慢慢独立出去，属于创业性质的公司，主要是O2O方面的，面试内容如下：</p>
<h4 id="_1、说说项目-他比较感兴趣360老兵那个项目-其他项目没有看-问项目的具体内容-遇到的挑战-具体解决办法-缓存的使用-为什使用redis-为什么使用独立文件服务器。" tabindex="-1"><a class="header-anchor" href="#_1、说说项目-他比较感兴趣360老兵那个项目-其他项目没有看-问项目的具体内容-遇到的挑战-具体解决办法-缓存的使用-为什使用redis-为什么使用独立文件服务器。" aria-hidden="true">#</a> 1、说说项目（他比较感兴趣360老兵那个项目，其他项目没有看），问项目的具体内容，遇到的挑战，具体解决办法，缓存的使用，为什使用redis，为什么使用独立文件服务器。</h4>
<h4 id="_2、缓存-问了memcache与redis的区别-redis的优势之处。怎样解决memcache命中率低的问题-问了在实际项目中memcache命中率。是否部署过redis服务器。" tabindex="-1"><a class="header-anchor" href="#_2、缓存-问了memcache与redis的区别-redis的优势之处。怎样解决memcache命中率低的问题-问了在实际项目中memcache命中率。是否部署过redis服务器。" aria-hidden="true">#</a> 2、缓存，问了memcache与redis的区别，redis的优势之处。怎样解决memcache命中率低的问题，问了在实际项目中memcache命中率。是否部署过redis服务器。</h4>
<h4 id="_3、svn与git-的区别-让说具体的工作流程-使用git-的好处-以及怎样处理冲突-基本的命令写了两个。" tabindex="-1"><a class="header-anchor" href="#_3、svn与git-的区别-让说具体的工作流程-使用git-的好处-以及怎样处理冲突-基本的命令写了两个。" aria-hidden="true">#</a> 3、svn与git 的区别，让说具体的工作流程，使用git 的好处，以及怎样处理冲突，基本的命令写了两个。</h4>
<h4 id="_4、数据库" tabindex="-1"><a class="header-anchor" href="#_4、数据库" aria-hidden="true">#</a> 4、数据库</h4>
<h6 id="_1-数据库的存储引擎-myisam与innodb的区别-说出除了这两种外的其他存储引擎。" tabindex="-1"><a class="header-anchor" href="#_1-数据库的存储引擎-myisam与innodb的区别-说出除了这两种外的其他存储引擎。" aria-hidden="true">#</a> （1）数据库的存储引擎，myisam与innodb的区别，说出除了这两种外的其他存储引擎。</h6>
<p>执行如下指令查看所有mysql所有的存储引擎</p>
<p>SHOW ENGINES
1</p>
<p>InnoDB存储引擎</p>
<p>InnoDB是事务型数据库的首选引擎，支持事务安全表（ACID），支持行锁定和外键，上图也看到了，InnoDB是默认的MySQL引擎。InnoDB主要特性有：</p>
<p>1、InnoDB给MySQL提供了具有提交、回滚和崩溃恢复能力的事物安全（ACID兼容）存储引擎。InnoDB锁定在行级并且也在SELECT语句中提供一个类似Oracle的非锁定读。这些功能增加了多用户部署和性能。在SQL查询中，可以自由地将InnoDB类型的表和其他MySQL的表类型混合起来，甚至在同一个查询中也可以混合</p>
<p>2、InnoDB是为处理巨大数据量的最大性能设计。它的CPU效率可能是任何其他基于磁盘的关系型数据库引擎锁不能匹敌的</p>
<p>3、InnoDB存储引擎完全与MySQL服务器整合，InnoDB存储引擎为在主内存中缓存数据和索引而维持它自己的缓冲池。InnoDB将它的表和索引在一个逻辑表空间中，表空间可以包含数个文件（或原始磁盘文件）。这与MyISAM表不同，比如在MyISAM表中每个表被存放在分离的文件中。InnoDB表可以是任何尺寸，即使在文件尺寸被限制为2GB的操作系统上</p>
<p>4、InnoDB支持外键完整性约束，存储表中的数据时，每张表的存储都按主键顺序存放，如果没有显示在表定义时指定主键，InnoDB会为每一行生成一个6字节的ROWID，并以此作为主键</p>
<p>5、InnoDB被用在众多需要高性能的大型数据库站点上</p>
<p>InnoDB不创建目录，使用InnoDB时，MySQL将在MySQL数据目录下创建一个名为ibdata1的10MB大小的自动扩展数据文件，以及两个名为ib_logfile0和ib_logfile1的5MB大小的日志文件</p>
<p>MyISAM存储引擎</p>
<p>MyISAM基于ISAM存储引擎，并对其进行扩展。它是在Web、数据仓储和其他应用环境下最常使用的存储引擎之一。MyISAM拥有较高的插入、查询速度，但不支持事物。MyISAM主要特性有：</p>
<p>1、大文件（达到63位文件长度）在支持大文件的文件系统和操作系统上被支持</p>
<p>2、当把删除和更新及插入操作混合使用的时候，动态尺寸的行产生更少碎片。这要通过合并相邻被删除的块，以及若下一个块被删除，就扩展到下一块自动完成</p>
<p>3、每个MyISAM表最大索引数是64，这可以通过重新编译来改变。每个索引最大的列数是16</p>
<p>4、最大的键长度是1000字节，这也可以通过编译来改变，对于键长度超过250字节的情况，一个超过1024字节的键将被用上</p>
<p>5、BLOB和TEXT列可以被索引</p>
<p>6、NULL被允许在索引的列中，这个值占每个键的0~1个字节</p>
<p>7、所有数字键值以高字节优先被存储以允许一个更高的索引压缩</p>
<p>8、每个MyISAM类型的表都有一个AUTO_INCREMENT的内部列，当INSERT和UPDATE操作的时候该列被更新，同时AUTO_INCREMENT列将被刷新。所以说，MyISAM类型表的AUTO_INCREMENT列更新比InnoDB类型的AUTO_INCREMENT更快</p>
<p>9、可以把数据文件和索引文件放在不同目录</p>
<p>10、每个字符列可以有不同的字符集</p>
<p>11、有VARCHAR的表可以固定或动态记录长度</p>
<p>12、VARCHAR和CHAR列可以多达64KB</p>
<p>使用MyISAM引擎创建数据库，将产生3个文件。文件的名字以表名字开始，扩展名之处文件类型：frm文件存储表定义、数据文件的扩展名为.MYD（MYData）、索引文件的扩展名时.MYI（MYIndex）</p>
<p>MEMORY存储引擎</p>
<p>MEMORY存储引擎将表中的数据存储到内存中，未查询和引用其他表数据提供快速访问。MEMORY主要特性有：</p>
<p>1、MEMORY表的每个表可以有多达32个索引，每个索引16列，以及500字节的最大键长度</p>
<p>2、MEMORY存储引擎执行HASH和BTREE缩影</p>
<p>3、可以在一个MEMORY表中有非唯一键值</p>
<p>4、MEMORY表使用一个固定的记录长度格式</p>
<p>5、MEMORY不支持BLOB或TEXT列</p>
<p>6、MEMORY支持AUTO_INCREMENT列和对可包含NULL值的列的索引</p>
<p>7、MEMORY表在所由客户端之间共享（就像其他任何非TEMPORARY表）</p>
<p>8、MEMORY表内存被存储在内存中，内存是MEMORY表和服务器在查询处理时的空闲中，创建的内部表共享</p>
<p>9、当不再需要MEMORY表的内容时，要释放被MEMORY表使用的内存，应该执行DELETE FROM或TRUNCATE TABLE，或者删除整个表（使用DROP TABLE）</p>
<p>存储引擎的选择</p>
<p>如果要提供提交、回滚、崩溃恢复能力的事物安全（ACID兼容）能力，并要求实现并发控制，InnoDB是一个好的选择</p>
<p>如果数据表主要用来插入和查询记录，则MyISAM引擎能提供较高的处理效率</p>
<p>如果只是临时存放数据，数据量不大，并且不需要较高的数据安全性，可以选择将数据保存在内存中的Memory引擎，MySQL中使用该引擎作为临时表，存放查询的中间结果</p>
<p>如果只有INSERT和SELECT操作，可以选择Archive，Archive支持高并发的插入操作，但是本身不是事务安全的。Archive非常适合存储归档数据，如记录日志信息可以使用Archive</p>
<p>使用哪一种引擎需要灵活选择，一个数据库中多个表可以使用不同引擎以满足各种性能和实际需求，使用合适的存储引擎，将会提高整个数据库的性能</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Bwd3dw,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述">————————————————</p>
<h6 id="_2-int-与bigint的区别-实际使用的时候主键选择哪个-int-10-与int-11-的区别-var-char与char的区别" tabindex="-1"><a class="header-anchor" href="#_2-int-与bigint的区别-实际使用的时候主键选择哪个-int-10-与int-11-的区别-var-char与char的区别" aria-hidden="true">#</a> （2）int 与bigint的区别，实际使用的时候主键选择哪个？int（10）与int（11）的区别，var_char与char的区别</h6>
<p>有符号int最大可以支持到约22亿，远远大于我们的需求和MySQL单表所能支持的性能上限。对于OLTP应用来说，单表的规模一般要保持在千万级别，不会达到22亿上限。如果要加大预留量，可以把主键改为改为无符号int，上限为42亿，这个预留量已经是非常的充足了。
使用bigint，会占用更大的磁盘和内存空间，内存空间毕竟有限，无效的占用会导致更多的数据换入换出，额外增加了IO的压力，对性能是不利的。</p>
<p>因此推荐自增主键使用int unsigned类型，但不建议使用bigint。</p>
<p><img src="@source/docs/theme-reco/img/1433000-20181105082501102-1805571062.png" alt="img"></p>
<p><strong>bigint</strong>
从 -2^63 (-9223372036854775808) 到 2^63-1 (9223372036854775807) 的整型数据（所有数字）。存储大小为 8 个字节。
P.S. bigint已经有长度了，在mysql建表中的length，只是用于显示的位数
<strong>int</strong>
从 -2^31 (-2,147,483,648) 到 2^31 – 1 (2,147,483,647) 的整型数据（所有数字）。存储大小为 4 个字节。int 的 SQL-92 同义字为 integer。</p>
<h6 id="_3-数据库设计-用户表与登录表分开的好处" tabindex="-1"><a class="header-anchor" href="#_3-数据库设计-用户表与登录表分开的好处" aria-hidden="true">#</a> （3）数据库设计，用户表与登录表分开的好处，</h6>
<h4 id="_6、计算机网络" tabindex="-1"><a class="header-anchor" href="#_6、计算机网络" aria-hidden="true">#</a> 6、计算机网络</h4>
<h6 id="_1-三次握手与四次挥手的过程-主要是画图-各个参数的含义" tabindex="-1"><a class="header-anchor" href="#_1-三次握手与四次挥手的过程-主要是画图-各个参数的含义" aria-hidden="true">#</a> （1）三次握手与四次挥手的过程（主要是画图），各个参数的含义</h6>
<p>TCP首部有6个标志比特。</p>
<p>SYN是其中之一，它是个同步序号，当TCP连接建立时会把SYN置1。</p>
<p>一般请求端会发送一个报文，其中包含这样的字段SYN 1415531521：1415531521(0)。</p>
<p>然后服务端收到后会返回一个ack 1415531522，ack表示确认收到。
SYN，ACK是标志位。</p>
<p>SEQ，AN是数据包序号。</p>
<p>SYN=1, ACK=0, SEQ=200 的意思是：发送的为一个SYN请求，发送端的初始数据包序号为200</p>
<p>SYN=1, ACK=1, SEQ=4800, AN=201 的意思是：接收端的确认信息，且接收端的初始数据包。序号为4800。</p>
<h6 id="_2-http与https的区别-https怎样保准安全-结合ssl" tabindex="-1"><a class="header-anchor" href="#_2-http与https的区别-https怎样保准安全-结合ssl" aria-hidden="true">#</a> （2）http与https的区别，https怎样保准安全（结合ssl）</h6>
<h4 id="_7、数据结构" tabindex="-1"><a class="header-anchor" href="#_7、数据结构" aria-hidden="true">#</a> 7、数据结构</h4>
<h6 id="_1-链表的结构体-线性和链式-插入一个元素的操作代码-纸上写" tabindex="-1"><a class="header-anchor" href="#_1-链表的结构体-线性和链式-插入一个元素的操作代码-纸上写" aria-hidden="true">#</a> （1）链表的结构体（线性和链式），插入一个元素的操作代码（纸上写）</h6>
<h6 id="_2-排序部分-时间复杂度-写出一个排序算法。" tabindex="-1"><a class="header-anchor" href="#_2-排序部分-时间复杂度-写出一个排序算法。" aria-hidden="true">#</a> （2）排序部分，时间复杂度，写出一个排序算法。</h6>
<h6 id="_3-二分查找的思想-时间复杂度" tabindex="-1"><a class="header-anchor" href="#_3-二分查找的思想-时间复杂度" aria-hidden="true">#</a> （3）二分查找的思想，时间复杂度</h6>
<h4 id="_8、开发环境-linux常用命令-apache与ngiax的区别-平常用的开发环境是win还是linux等" tabindex="-1"><a class="header-anchor" href="#_8、开发环境-linux常用命令-apache与ngiax的区别-平常用的开发环境是win还是linux等" aria-hidden="true">#</a> 8、开发环境，linux常用命令，apache与ngiax的区别，平常用的开发环境是win还是linux等</h4>
<h2 id="二、新浪微博" tabindex="-1"><a class="header-anchor" href="#二、新浪微博" aria-hidden="true">#</a> 二、新浪微博</h2>
<h4 id="_1、为什么想加入新浪-对新浪的印象" tabindex="-1"><a class="header-anchor" href="#_1、为什么想加入新浪-对新浪的印象" aria-hidden="true">#</a> 1、为什么想加入新浪，对新浪的印象</h4>
<h4 id="_2、未来的计划、目标、打算" tabindex="-1"><a class="header-anchor" href="#_2、未来的计划、目标、打算" aria-hidden="true">#</a> 2、未来的计划、目标、打算？</h4>
<h4 id="_3、有没有微博号-昵称是什么-粉丝数多少" tabindex="-1"><a class="header-anchor" href="#_3、有没有微博号-昵称是什么-粉丝数多少" aria-hidden="true">#</a> 3、有没有微博号，昵称是什么，粉丝数多少？</h4>
<h4 id="_4、填空-主要写结果" tabindex="-1"><a class="header-anchor" href="#_4、填空-主要写结果" aria-hidden="true">#</a> 4、填空：(主要写结果)</h4>
<h6 id="_1-判断null的函数" tabindex="-1"><a class="header-anchor" href="#_1-判断null的函数" aria-hidden="true">#</a> （1）判断null的函数</h6>
<h6 id="_2-判断变量是否存在的函数" tabindex="-1"><a class="header-anchor" href="#_2-判断变量是否存在的函数" aria-hidden="true">#</a> （2）判断变量是否存在的函数</h6>
<h6 id="_3-判断是否为空的函数" tabindex="-1"><a class="header-anchor" href="#_3-判断是否为空的函数" aria-hidden="true">#</a> （3）判断是否为空的函数</h6>
<h4 id="_5、php转换json为数-组的函数" tabindex="-1"><a class="header-anchor" href="#_5、php转换json为数-组的函数" aria-hidden="true">#</a> 5、php转换json为数:组的函数</h4>
<h4 id="_6、php-得到前一天的日期-格式如下-2015-08-24-10-20-然后写入到文件-usr-test中" tabindex="-1"><a class="header-anchor" href="#_6、php-得到前一天的日期-格式如下-2015-08-24-10-20-然后写入到文件-usr-test中" aria-hidden="true">#</a> 6、php 得到前一天的日期，格式如下（2015-08-24 10:20）然后写入到文件 /usr/test中</h4>
<h4 id="_7、提取url-要求从-sina-中提取url部分-要求使用两种方法" tabindex="-1"><a class="header-anchor" href="#_7、提取url-要求从-sina-中提取url部分-要求使用两种方法" aria-hidden="true">#</a> 7、提取url，要求从&quot;sina&quot;中提取url部分（要求使用两种方法）</h4>
<h4 id="_8、连续子数组的最大和例如输入数组为-1-2-3-10-4-7-2-5-最大的子数组-3-10-4-7-2-和为18" tabindex="-1"><a class="header-anchor" href="#_8、连续子数组的最大和例如输入数组为-1-2-3-10-4-7-2-5-最大的子数组-3-10-4-7-2-和为18" aria-hidden="true">#</a> 8、连续子数组的最大和例如输入数组为{1，-2，3，10，-4，7，2，5}最大的子数组{3，10，-4，7，2}和为18</h4>
<h4 id="_9、写出常见的linux命令功能-top、ps、mv、find、df、cat、chmod、chgrp、grep、wc" tabindex="-1"><a class="header-anchor" href="#_9、写出常见的linux命令功能-top、ps、mv、find、df、cat、chmod、chgrp、grep、wc" aria-hidden="true">#</a> 9、写出常见的linux命令功能：top、ps、mv、find、df、cat、chmod、chgrp、grep、wc</h4>
<h4 id="_10、写出linux查看80端口的命令" tabindex="-1"><a class="header-anchor" href="#_10、写出linux查看80端口的命令" aria-hidden="true">#</a> 10、写出linux查看80端口的命令</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>服务器上的一些统计数据：

1)统计80端口连接数

netstat -nat|grep -i “80”|wc -l

2)统计httpd协议连接数

ps -ef|grep httpd|wc -l

3)、统计已连接上的，状态为“established

netstat -na|grep ESTABLISHED|wc -l

4)、查出哪个IP地址连接最多，将其封了。

netstat -na|grep ESTABLISHED|awk {print $5}|awk -F： {print $1}|sort|uniq -c|sort -r +0n

netstat -na|grep SYN|awk {print $5}|awk -F： {print $1}|sort|uniq -c|sort -r +0n

1、查看apache当前并发访问数：

netstat -an | grep ESTABLISHED | wc -l

对比httpd.conf中MaxClients的数字差距多少。

2、查看有多少个进程数：

ps aux|grep httpd|wc -l

3、可以使用如下参数查看数据

server-status？auto

#ps -ef|grep httpd|wc -l

1388

统计httpd进程数，连个请求会启动一个进程，使用于Apache服务器。

表示Apache能够处理1388个并发请求，这个值Apache可根据负载情况自动调整。

#netstat -nat|grep -i “80”|wc -l

4341

netstat -an会打印系统当前网络链接状态，而grep -i “80”是用来提取与80端口有关的连接的，wc -l进行连接数统计。

最终返回的数字就是当前所有80端口的请求总数。

#netstat -na|grep ESTABLISHED|wc -l

376

netstat -an会打印系统当前网络链接状态，而grep ESTABLISHED 提取出已建立连接的信息。 然后wc -l统计。

最终返回的数字就是当前所有80端口的已建立连接的总数。

netstat -nat||grep ESTABLISHED|wc - 可查看所有建立连接的详细记录

查看Apache的并发请求数及其TCP连接状态：

Linux命令：

netstat -n | awk ‘/^tcp/ {++S［$NF］} END {for(a in S) print a， S［a］}’

返回结果示例：

LAST_ACK 5

SYN_RECV 30

ESTABLISHED 1597

FIN_WAIT1 51

FIN_WAIT2 504

TIME_WAIT 1057

其中的

SYN_RECV表示正在等待处理的请求数；

ESTABLISHED表示正常数据传输状态；

TIME_WAIT表示处理完毕，等待超时结束的请求数。

查看httpd进程数(即prefork模式下Apache能够处理的并发请求数)：

Linux命令：

ps -ef | grep httpd | wc -l

查看Apache的并发请求数及其TCP连接状态：

Linux命令：

netstat -n | awk ‘/^tcp/ {++S［$NF］} END {for(a in S) print a， S［a］}’

返回结果示例：

LAST_ACK 5

SYN_RECV 30

ESTABLISHED 1597

FIN_WAIT1 51

FIN_WAIT2 504

TIME_WAIT 1057

说明：

SYN_RECV表示正在等待处理的请求数；

ESTABLISHED表示正常数据传输状态；

TIME_WAIT表示处理完毕，等待超时结束的请求数。

netstat常见参数

-a (all)显示所有选项，默认不显示LISTEN相关

-t (tcp)仅显示tcp相关选项

-u (udp)仅显示udp相关选项

-n 拒绝显示别名，能显示数字的全部转化成数字。

-l 仅列出有在 Listen (监听) 的服？兆刺？/p》

-p 显示建立相关链接的程序名

-r 显示路由信息，路由表

-e 显示扩展信息，例如uid等

-s 按各个协议进行统计

-c 每隔一个固定时间，执行该netstat命令。

提示：LISTEN和LISTENING的状态只有用-a或者-l才能看到

上面就是Linux使用netstat命令查看80端口连接数的方法，想要查看80端口连接数的朋友可以使用netstat命令试试看。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、有一个ip日志文件每行一个ip-统计某一个ip出现的次数" tabindex="-1"><a class="header-anchor" href="#_11、有一个ip日志文件每行一个ip-统计某一个ip出现的次数" aria-hidden="true">#</a> 11、有一个ip日志文件每行一个ip，统计某一个ip出现的次数</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cat ip.txt | grep '192.168.1.1' | wc | awk '{print $1}'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211225233124089.png" alt="image-20211225233124089"></p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211225231922256.png" alt="image-20211225231922256"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>grep -r 'GET /weixin/weixin_izp/index.html' ./chunyun.access.log > ~/access.log 
cat access.log |awk '{print $1}'|cut -d, -f3|sort|uniq -c > mycount.log    
 
 
1.要提取访问量最大的IP，需要先从日志中把IP段提取出来。 
 
$ cat aa.txt |awk -F " " '{print $1}' 
127.0.0.1 
192.168.1.100 
192.168.1.100 
192.168.1.100 
 
（PS，此处也可以用cut命令实现。 
 
$ cut -d " " -f 1 aa.txt 
127.0.0.1 
192.168.1.100 
192.168.1.100 
192.168.1.100） 
 
2.对IP进行统计，看各IP出现过多少次 
 
$ cat aa.txt |awk -F " " '{print $1}' |uniq -c 
      1 127.0.0.1 
      3 192.168.1.100 
 
（PS：wc -l也可以对行数统计，但统计的是整体的，所有行数。不会分类统计） 
 
3.按IP出现次数从大到小排列 
 
$ awk '{print $1}' ip.txt  | sort -r | uniq -c | sort -r
      3 192.168.1.100 
      1 127.0.0.1 
 
 
 sort  | uniq -c | sort -nr | head -10
是计算重复行并且列出重复量最大的N 条记录的基本用法了
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。

awk的用法

awk 'BEGIN{ commands } pattern{ commands } END{ commands }'
第一步：运行BEGIN{ commands }语句块中的语句。

第二步：从文件或标准输入(stdin)读取一行。然后运行pattern{ commands }语句块，它逐行扫描文件，从第一行到最后一行反复这个过程。直到文件所有被读取完成。

第三步：当读至输入流末尾时，运行END{ commands }语句块。

BEGIN语句块在awk開始从输入流中读取行之前被运行，这是一个可选的语句块，比方变量初始化、打印输出表格的表头等语句通常能够写在BEGIN语句块中。

END语句块在awk从输入流中读取全然部的行之后即被运行。比方打印全部行的分析结果这类信息汇总都是在END语句块中完毕，它也是一个可选语句块。

pattern语句块中的通用命令是最重要的部分，它也是可选的。假设没有提供pattern语句块，则默认运行{ print }，即打印每个读取到的行。awk读取的每一行都会运行该语句块。

这三个部分缺少任何一部分都可以。

可用awk来统计固定格式日志里的一些数据，如日志中出现过所有不同的IP

awk ‘{i=$1;count[i]++}END{for(i in count)print(i,count[i])}’ /var/log/httpd/access_log
awk对文件进行流处理，每次读取一行。$1就是IP，count[i]++是将IP作为一个数组的下标，并且使得统计这个IP所对应的数组元素自增1.END后面的语句是打印结果，只执行一次。

也可以用来找出访问次数最多的ip。

awk '{a[$1] += 1;} END {for (i in a) printf("%d %s\n", a[i], i);}' 日志文件 | sort -n | tail -n 10 #用tail显示最后10行
首先用awk统计出来一个列表，然后用sort进行排序，最后用tail取最后的10个。

以上参数可以略作修改显示更多的数据，比如将tail加上-n参数等，另外日志格式不同命令也可能需要稍作修改。

 

当前WEB服务器中联接次数最多的ip地址

netstat -ntu |awk '{print $5}' |sort | uniq -c| sort -nr
查看日志中访问次数最多的前10个IP

cat access_log |cut -d ' ' -f 1 | sort |uniq -c | sort -nr | awk '{print $0 }' | head -n 10 | less
查看日志中出现100次以上的IP

cat access_log |cut -d ' ' -f 1 | sort |uniq -c | awk '{if ($1 > 100) print $0}'｜sort -nr | less
查看最近访问量最高的文件

cat access_log | tail -10000 | awk '{print $7}' | sort | uniq -c | sort -nr | less
查看日志中访问超过100次的页面

cat access_log | cut -d ' ' -f 7 | sort |uniq -c | awk '{if ($1 > 100) print $0}' | less
统计某url，一天的访问次数

cat access_log | grep '12/Aug/2009' | grep '/images/index/e1.gif' | wc | awk '{print $1}'
前五天的访问次数最多的网页

cat access_log | awk '{print $7}' | uniq -c | sort -n -r | head -20
从日志里查看该ip在干嘛

cat access_log | grep 218.66.36.119 | awk '{print $1"\t"$7}' | sort | uniq -c | sort -nr | less
列出传输时间超过 30 秒的文件

cat access_log | awk '($NF > 30){print $7}' | sort -n | uniq -c | sort -nr | head -20
列出最最耗时的页面(超过60秒的)

cat access_log | awk '($NF > 60 &amp;&amp; $7~/\.php/){print $7}' | sort -n | uniq -c | sort -nr 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、数据库设计-有一个发布文章的数据字段-文章id-文章标题-发表人-类别id-子类别id-所属地id-创建时间-状态" tabindex="-1"><a class="header-anchor" href="#_12、数据库设计-有一个发布文章的数据字段-文章id-文章标题-发表人-类别id-子类别id-所属地id-创建时间-状态" aria-hidden="true">#</a> 12、数据库设计，有一个发布文章的数据字段：文章id，文章标题，发表人，类别id，子类别id，所属地id，创建时间，状态</h4>
<p>问题：（1）划出数据库设计图（表之间的关系），表可以自己添加，说明这样设计的目的，好处</p>
<p>（2）写出创建创建文章表的语句，说说选择字段的依据。</p>
<p>（3）写出查找最新发表的10篇文章的sql语句，说说优化的方法。</p>
<h2 id="一面-技术面" tabindex="-1"><a class="header-anchor" href="#一面-技术面" aria-hidden="true">#</a> 一面（技术面）：</h2>
<h4 id="_1-系统设计" tabindex="-1"><a class="header-anchor" href="#_1-系统设计" aria-hidden="true">#</a> 1.系统设计</h4>
<p>场景：现在要做一个用户日程提醒系统，需求如下，可以记录用户每天的日程，代办日程到了以后，以短信或者是邮箱的形式通知用户，用户可以查看历史日程，可以管理自己的日程（增删改查），用户有好友，可以查看好友开放出来的日程，可以进行好友聊天。</p>
<p>要求：1：考虑并发性。</p>
<p>2：用户量在千万级别，日程数量在亿，10亿级别</p>
<p>3：保证安全、首页家在流畅</p>
<p>4：使用缓存服务器</p>
<p>问题：（1）你感觉这个系统的难点在什么地方</p>
<p>（2）这个系统各个模块之间的关系，</p>
<p>（3）这个系统实施的具体细节（缓存，大数据方面）</p>
<p>（4）系统的安全性怎样保证</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h5 id="_1、主要是关于这个系统的数据表设计" tabindex="-1"><a class="header-anchor" href="#_1、主要是关于这个系统的数据表设计" aria-hidden="true">#</a> 1、主要是关于这个系统的数据表设计</h5>
<h5 id="_2、这个系统当用户比较多的时候可能反应较慢-怎样解决" tabindex="-1"><a class="header-anchor" href="#_2、这个系统当用户比较多的时候可能反应较慢-怎样解决" aria-hidden="true">#</a> 2、这个系统当用户比较多的时候可能反应较慢，怎样解决</h5>
<p>回答：利用缓存来解决频繁的数据库查找，用户的好友关系、好友的历史日程，我的历史日程可以缓存，他问当好友关系发生变化的时候怎样处理，一开始我说清除缓存，下次查询直接查数据库，他说这样不好，这样数据库压力瞬间变大，让我再想想，我说可以清除缓存的后在查数据库恢复缓存，他说不是最好的解决方法，最后他说可以先更新数据库，然后根据更新的好友关系在更新缓存（少查了一次数据库，其实很简单）。</p>
<h5 id="_3、这个系统的首页加载比较慢怎样办" tabindex="-1"><a class="header-anchor" href="#_3、这个系统的首页加载比较慢怎样办" aria-hidden="true">#</a> 3、这个系统的首页加载比较慢怎样办？</h5>
<p>开始我说，采用页面静态化，他说首页是动态加载，页面静态化没有效果，反而会拖慢系统，文件IO需要消耗性能，让我想想还有什么办法，我说缓存首页数据，但是要注意缓存更新时间。</p>
<h5 id="_4、登陆问题-慢慢的系统的登陆比较慢-你知道为什么吗-怎样解决" tabindex="-1"><a class="header-anchor" href="#_4、登陆问题-慢慢的系统的登陆比较慢-你知道为什么吗-怎样解决" aria-hidden="true">#</a> 4、登陆问题，慢慢的系统的登陆比较慢，你知道为什么吗，怎样解决</h5>
<p>我说应该是用户量太大，登陆的SQL语句优化不好，或者是没有加索引，他说加上索引并且SQL优化到最好，还是比较慢是什么问题，我说是用户量实在太大了，超出了mysql的单表容量了，他问该怎么解决。我说可以水平拆分，缓解数据增长的压力，他说什么是数据库拆分，水平拆分和垂直拆分有什么区别我说垂直拆分解决表与表之间的IO竞争，不解决单表中数据量增长出现的压力，把不向关的表放在其他的服务器上，水平拆分解决单表中数据量增长出现的压力，不解决表与表之间的IO争夺，感觉自己不是多懂，他说怎么拆分依据是什么（我对拆分只是了解）我说可以按照时间拆分，他说但是这样的拆分没有一点用，他说你再想想，我说我感觉可以，拆分之后单表数据变小了，查询肯定快啊，他说你登录的时候怎样确定用户在哪个表里面呢？我说在hash把用户与分表的关系hash到一个表里面，他说不是最好的解决办法，并且hash麻烦，需要确定那张表才能进行查找。。。他让我再想想，我从存储过程，数据库缓存来说，最后他说不好使，他说你可以采用用户名分表，用户名（a-z）分26个表，登陆的时候一下就可以找到他在的那张表了。这个问题大约谈了30分钟，回答的不是多好。</p>
<h4 id="_2、第三方登录问题" tabindex="-1"><a class="header-anchor" href="#_2、第三方登录问题" aria-hidden="true">#</a> 2、第三方登录问题</h4>
<p>他问做过第三方登陆没有，我说我自己尝试过，利用qq做第三方登录，主要调用的腾讯提供的的接口，他又问我第三方登陆的原理，auth认证方面的，原理，说说https的安全传输原理。</p>
<h4 id="_3、接口-token问题" tabindex="-1"><a class="header-anchor" href="#_3、接口-token问题" aria-hidden="true">#</a> 3、接口（token问题）</h4>
<p>他问我做过接口没有，我说做过，他问接口怎样判断用户登录，我说是生成token，他问token的生成原理，token的安全怎样解决，token被劫持了该怎样半，有什么好的办法。token被劫持我不知道该怎么处理，这个可以查一查，反正当时我没想到好办法，我从token的生成规则，过期时间，添加令牌方面回答的，他说还可以。</p>
<h4 id="【前端安全】cookie和token都存放在header中-为什么不会劫持token" tabindex="-1"><a class="header-anchor" href="#【前端安全】cookie和token都存放在header中-为什么不会劫持token" aria-hidden="true">#</a> 【前端安全】cookie和token都存放在header中，为什么不会劫持token？</h4>
<p>token不是为了防止XSS的，而是为了防止CSRF的；</p>
<p>CSRF攻击的原因是浏览器会自动带上cookie，而不会带上token；</p>
<p>以CSRF攻击为例：</p>
<p>cookie：用户点击了链接，cookie未失效，导致发起请求后后端以为是用户正常操作，于是进行扣款操作；
token：用户点击链接，由于浏览器不会自动带上token，所以即使发了请求，后端的token验证不会通过，所以不会进行扣款操作；
————————————————
版权声明：本文为CSDN博主「abloume」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u013451157/article/details/98478484</p>
<h4 id="app-token防劫持" tabindex="-1"><a class="header-anchor" href="#app-token防劫持" aria-hidden="true">#</a> App token防劫持</h4>
<h5 id="_2次非对称加密获取token-原理图" tabindex="-1"><a class="header-anchor" href="#_2次非对称加密获取token-原理图" aria-hidden="true">#</a> 2次非对称加密获取token 原理图:</h5>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211225234810478.png" alt="image-20211225234810478"></p>
<p>1.第一步,2次非对称加密获取token</p>
<p>2.你拿到后，放在你本地或者内存中，每次请求用token+userid+时间戳md5后带过来</p>
<p>3.验签</p>
<p>4.短信验证码</p>
<p>a、在存储的时候把 token 进行对称加密存储，用时解开。
b、将请求 URL、时间戳、token 三者进行合并加盐签名，服务端校验有效性。
c、HTTPS 对 URL 进行判断。</p>
<h2 id="三、美丽说" tabindex="-1"><a class="header-anchor" href="#三、美丽说" aria-hidden="true">#</a> 三、美丽说</h2>
<p>国内最大的女性快时尚电子商务平台，致力于为年轻时尚爱美的女性用户提供最流行的时尚购物体验，拥有超过1亿的女性注册，面试内容做了一套卷子，试题如下：</p>
<h4 id="_1、mysql的索引是那种数据结构-为什么使用这种数据结构。" tabindex="-1"><a class="header-anchor" href="#_1、mysql的索引是那种数据结构-为什么使用这种数据结构。" aria-hidden="true">#</a> 1、mysql的索引是那种数据结构，为什么使用这种数据结构。</h4>
<p>b+tree，</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203231949411.png" alt="image-20220203231949411"></p>
<h4 id="_2、设计一个数据表-用来存储url信息-此表会经常发生插入删除操作-应用场景是查找某个url是否存在-请写出表结构-并加说明。" tabindex="-1"><a class="header-anchor" href="#_2、设计一个数据表-用来存储url信息-此表会经常发生插入删除操作-应用场景是查找某个url是否存在-请写出表结构-并加说明。" aria-hidden="true">#</a> 2、设计一个数据表，用来存储url信息，此表会经常发生插入删除操作，应用场景是查找某个url是否存在，请写出表结构，并加说明。</h4>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203232023709.png" alt="image-20220203232023709"></p>
<h4 id="_3、比较单词a-和-b判断b单词的字母是否都在a中。-子串算法" tabindex="-1"><a class="header-anchor" href="#_3、比较单词a-和-b判断b单词的字母是否都在a中。-子串算法" aria-hidden="true">#</a> 3、比较单词a 和 b判断b单词的字母是否都在a中。（子串算法）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$c = "abc";
$a = "abdc";
$b = 'fafabcvd';
$res = strpos($b,$a);
var_dump($res); //bool(false)
$res1 = strpos($b,$c);
var_dump($res1); //int(3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203232208677.png" alt="image-20220203232208677"></p>
<h4 id="_4、写一个timer类-用来统计应用程序的运行时间-并写出调用方法。" tabindex="-1"><a class="header-anchor" href="#_4、写一个timer类-用来统计应用程序的运行时间-并写出调用方法。" aria-hidden="true">#</a> 4、写一个timer类，用来统计应用程序的运行时间，并写出调用方法。</h4>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203232343144.png" alt="image-20220203232343144"></p>
<h4 id="_5、session与cookie的区别-说明禁用cookie后-session还能不能运行" tabindex="-1"><a class="header-anchor" href="#_5、session与cookie的区别-说明禁用cookie后-session还能不能运行" aria-hidden="true">#</a> 5、session与cookie的区别，说明禁用cookie后 session还能不能运行</h4>
<h4 id="_6、新浪微博一年产生的数据量是多少-应该怎么存储这些数据。" tabindex="-1"><a class="header-anchor" href="#_6、新浪微博一年产生的数据量是多少-应该怎么存储这些数据。" aria-hidden="true">#</a> 6、新浪微博一年产生的数据量是多少，应该怎么存储这些数据。</h4>
<p>TokuDB 是一个高性能、支持事务处理的 MySQL 和 MariaDB 的存储引擎。TokuDB 的主要特点则是对高写压力的支持。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203232447191.png" alt="image-20220203232447191"></p>
<h4 id="_7、状态吗-204-304-404的含义-可以参考-http-tool-oschina-net-commons-type-5" tabindex="-1"><a class="header-anchor" href="#_7、状态吗-204-304-404的含义-可以参考-http-tool-oschina-net-commons-type-5" aria-hidden="true">#</a> 7、状态吗：204，304，404的含义，可以参考（http://tool.oschina.net/commons?type=5）</h4>
<p>204：<strong>浏览器不用刷新页面.也不用导向新的页面</strong>，服务器成功处理了请求，但没有返回任何内容。</p>
<table>
<thead>
<tr>
<th>304（未修改）</th>
<th>自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。如果网页自请求者上次请求后再也没有更改过，您应将服务器配置为返回此响应（称为 If-Modified-Since HTTP 标头）。服务器可以告诉 Googlebot 自从上次抓取后网页没有变更，进而节省带宽和开销。</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="_8、介绍你了解的开源项目" tabindex="-1"><a class="header-anchor" href="#_8、介绍你了解的开源项目" aria-hidden="true">#</a> 8、介绍你了解的开源项目</h4>
<h4 id="_1、介绍php的魔术方法" tabindex="-1"><a class="header-anchor" href="#_1、介绍php的魔术方法" aria-hidden="true">#</a> 1、介绍php的魔术方法</h4>
<h4 id="_2、索引的最左原则" tabindex="-1"><a class="header-anchor" href="#_2、索引的最左原则" aria-hidden="true">#</a> 2、索引的最左原则</h4>
<h4 id="_3、数据库sql的优化-哪些sql语句执行会忽略索引。" tabindex="-1"><a class="header-anchor" href="#_3、数据库sql的优化-哪些sql语句执行会忽略索引。" aria-hidden="true">#</a> 3、数据库sql的优化，哪些sql语句执行会忽略索引。</h4>
<ol>
<li>前导LIKE 语句
前导模糊查询不生效 (如 like '%XX'或者like '%XX%')</li>
<li>“or“ 条件</li>
<li>“in“ 条件</li>
<li>“&lt;&gt;“ 不等于判断</li>
<li>“between“ 范围条件，可使用 where xx&gt; 1 and xx&lt;3代替</li>
<li>IS NULL 或 IS NOT NULL，判断为空</li>
<li>不能在索引上做任何操作（计算、函数、自动/手动类型转换）</li>
</ol>
<h4 id="mysql索引类型" tabindex="-1"><a class="header-anchor" href="#mysql索引类型" aria-hidden="true">#</a> <strong>MYSQL索引类型</strong></h4>
<p><strong>索引类型</strong></p>
<ol>
<li>
<p>普通索引 （index）</p>
</li>
<li>
<p>唯一索引 (unique)</p>
</li>
</ol>
<blockquote>
<p>在普通索引的基础上，会进行排除重复值</p>
</blockquote>
<ol start="3">
<li>主键索引 (primary key)</li>
</ol>
<blockquote>
<p>和唯一索引的区别在于一个表里只能有一个主键索引，但是唯一索引可以有多个。</p>
</blockquote>
<ol start="4">
<li>组合索引</li>
</ol>
<blockquote>
<p>ALTER TABLE <code v-pre>table_name</code> ADD INDEX index_name ( <code v-pre>column1</code>, <code v-pre>column2</code>, <code v-pre>column3</code> )</p>
</blockquote>
<ol start="5">
<li>全文索引 (fulltext)</li>
</ol>
<p><strong>普通索引／唯一索引／主键索引 哪个速度更快？</strong></p>
<blockquote>
<p>速度是一样的快，因为三者都是采用btree二叉树算法进行查找。</p>
</blockquote>
<p><strong>2种索引算法</strong></p>
<p>BTREE算法</p>
<blockquote>
<p>Innodb和MyISAM默认的索引是BTREE索引
采用二叉树算法，左边的树枝小于根节点关键词，右边大于根节点，两边的树的深度不大于1，从而降低时间复杂度。</p>
</blockquote>
<p>HASH算法</p>
<blockquote>
<p>Mermory默认的索引是Hash索引
Hash索引只能用于HASH值比较，例如=,&lt;&gt; 操作符，不像BTREE索引需要从根节点到枝节点，最后才能访问到页节点这样多次IO访问，所以检索效率远高于BTREE索引。</p>
</blockquote>
<p><strong>为什么不默认采用HASH索引呢？</strong></p>
<blockquote>
<p>HASH只能用在=和&lt;&gt;上，所以功能受限，所以默认采用BTREE。</p>
</blockquote>
<h4 id="_4、策略问题-4个人过桥-a要1分钟-b要2分钟-c-要5分钟-d要10分钟-两人同时过桥-过桥速度以慢的为准-一人拿手电-过完桥后一个人吧手电送回来-问最快多长时间过完桥。" tabindex="-1"><a class="header-anchor" href="#_4、策略问题-4个人过桥-a要1分钟-b要2分钟-c-要5分钟-d要10分钟-两人同时过桥-过桥速度以慢的为准-一人拿手电-过完桥后一个人吧手电送回来-问最快多长时间过完桥。" aria-hidden="true">#</a> 4、策略问题： 4个人过桥，a要1分钟， b要2分钟，c 要5分钟，d要10分钟，两人同时过桥，过桥速度以慢的为准，一人拿手电，过完桥后一个人吧手电送回来，问最快多长时间过完桥。</h4>
<h4 id="_2、浏览器输入url到页面呈现-经过的过程" tabindex="-1"><a class="header-anchor" href="#_2、浏览器输入url到页面呈现-经过的过程" aria-hidden="true">#</a> 2、浏览器输入url到页面呈现，经过的过程，</h4>
<h4 id="_3、mc与redis的区别-内存管理方面。" tabindex="-1"><a class="header-anchor" href="#_3、mc与redis的区别-内存管理方面。" aria-hidden="true">#</a> 3、mc与redis的区别，内存管理方面。</h4>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203233204313.png" alt="image-20220203233204313"></p>
<h4 id="_3、redis与mc的区别-写出其中一个的内存管理机制" tabindex="-1"><a class="header-anchor" href="#_3、redis与mc的区别-写出其中一个的内存管理机制" aria-hidden="true">#</a> 3、redis与MC的区别，写出其中一个的内存管理机制</h4>
<h2 id="四、360金融" tabindex="-1"><a class="header-anchor" href="#四、360金融" aria-hidden="true">#</a> 四、360金融</h2>
<p>笔试题：</p>
<h4 id="_1、写出php中以-array-开头的函数-并说明用法-至少写6个" tabindex="-1"><a class="header-anchor" href="#_1、写出php中以-array-开头的函数-并说明用法-至少写6个" aria-hidden="true">#</a> 1、写出PHP中以 array_ 开头的函数，并说明用法，至少写6个</h4>
<p>array_unshift  开头插入数据</p>
<p>array_shift  开头取出数据</p>
<p>array_push 数组尾部推入数据</p>
<p>array_pop 数组尾部弹出数据</p>
<p>array_merge   合并数组</p>
<p>array_unique 数组唯一</p>
<p>array_values  数组中所有的值</p>
<p>array_keys 数组中的所有键</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220203233252489.png" alt="image-20220203233252489"></p>
<h4 id="_2、mysql常用的存储引擎-说出3个以上-并写出每个应用场景-优缺点" tabindex="-1"><a class="header-anchor" href="#_2、mysql常用的存储引擎-说出3个以上-并写出每个应用场景-优缺点" aria-hidden="true">#</a> 2、mysql常用的存储引擎，说出3个以上，并写出每个应用场景，优缺点</h4>
<p>myisam</p>
<p>innodb</p>
<p>memory</p>
<p>bob</p>
<blockquote>
<p>引擎（Engine）是电子平台上开发程序或系统的核心组件。利用引擎，开发者可迅速建立、铺设程序所需的功能，或利用其辅助程序的运转。一般而言，引擎是一个程序或一套系统的支持部分。常见的程序引擎有游戏引擎，搜索引擎，杀毒引擎等。</p>
</blockquote>
<p>Ok，我们知道了，引擎就是一个程序的核心组件。</p>
<p>简单来说，存储引擎就是指<strong>表的类型以及表在计算机上的存储方式</strong>。</p>
<p>存储引擎的概念是MySQL的特点，Oracle中没有专门的存储引擎的概念，Oracle有OLTP和OLAP模式的区分。不同的存储引擎决定了MySQL数据库中的表可以用不同的方式来存储。我们可以根据数据的特点来选择不同的存储引擎。</p>
<p>在MySQL中的存储引擎有很多种，可以通过“SHOW ENGINES”语句来查看。下面重点关注InnoDB、MyISAM、MEMORY这三种。</p>
<h5 id="一-innodb存储引擎" tabindex="-1"><a class="header-anchor" href="#一-innodb存储引擎" aria-hidden="true">#</a> 一.InnoDB存储引擎</h5>
<p>InnoDB给MySQL的表提供了<strong>事务处理</strong>、<strong>回滚</strong>、<strong>崩溃修复能力</strong>和<strong>多版本并发控制</strong>的事务安全。在MySQL从3.23.34a开始包含InnnoDB。它是MySQL上第一个提供外键约束的表引擎。而且InnoDB对事务处理的能力，也是其他存储引擎不能比拟的。靠后版本的MySQL的默认存储引擎就是InnoDB。</p>
<p>InnoDB存储引擎总支持<strong>AUTO_INCREMENT</strong>。自动增长列的值不能为空，并且值必须唯一。MySQL中规定自增列必须为主键。在插入值的时候，如果自动增长列不输入值，则插入的值为自动增长后的值；如果输入的值为0或空（NULL），则插入的值也是自动增长后的值；如果插入某个确定的值，且该值在前面没有出现过，就可以直接插入。</p>
<p>InnoDB还支持<strong>外键（FOREIGN KEY）</strong>。外键所在的表叫做子表，外键所依赖（REFERENCES）的表叫做父表。父表中被字表外键关联的字段必须为主键。当删除、更新父表中的某条信息时，子表也必须有相应的改变，这是数据库的<strong>参照完整性规则</strong>。</p>
<p>InnoDB中，创建的表的表结构存储在*.frm*文件中（我觉得是frame的缩写吧）。数据和索引存储在innodb_data_home_dir和innodb_data_file_path定义的表空间中。</p>
<p>InnoDB的优势在于提供了良好的事务处理、崩溃修复能力和并发控制。缺点是读写效率较差，占用的数据空间相对较大。</p>
<h5 id="二-myisam存储引擎" tabindex="-1"><a class="header-anchor" href="#二-myisam存储引擎" aria-hidden="true">#</a> 二.MyISAM存储引擎</h5>
<p>MyISAM是MySQL中常见的存储引擎，曾经是MySQL的默认存储引擎。MyISAM是基于ISAM引擎发展起来的，增加了许多有用的扩展。</p>
<p>MyISAM的表存储成3个文件。文件的名字与表名相同。拓展名为<em>frm</em>、<em>MYD</em>、<em>MYI</em>。其实，frm文件存储表的结构；MYD文件存储数据，是MYData的缩写；MYI文件存储索引，是MYIndex的缩写。</p>
<p>基于MyISAM存储引擎的表支持3种不同的存储格式。包括静态型、动态型和压缩型。其中，静态型是MyISAM的默认存储格式，它的字段是固定长度的；动态型包含变长字段，记录的长度不是固定的；压缩型需要用到myisampack工具，占用的磁盘空间较小。</p>
<p>MyISAM的优势在于占用空间小，处理速度快。缺点是不支持事务的完整性和并发性。</p>
<h5 id="三-memory存储引擎" tabindex="-1"><a class="header-anchor" href="#三-memory存储引擎" aria-hidden="true">#</a> 三.MEMORY存储引擎</h5>
<p>MEMORY是MySQL中一类特殊的存储引擎。它使用存储在内存中的内容来创建表，而且<strong>数据全部放在内存中</strong>。这些特性与前面的两个很不同。</p>
<p>每个基于MEMORY存储引擎的表实际对应一个磁盘文件。该文件的文件名与表名相同，类型为<em>frm</em>类型。该文件中只存储表的结构。而其数据文件，都是存储在内存中，这样有利于数据的快速处理，提高整个表的效率。值得注意的是，服务器需要有足够的内存来维持MEMORY存储引擎的表的使用。如果不需要了，可以释放内存，甚至删除不需要的表。</p>
<p>MEMORY默认使用哈希索引。速度比使用B型树索引快。当然如果你想用B型树索引，可以在创建索引时指定。</p>
<p>注意，MEMORY用到的很少，因为它是把数据存到内存中，如果内存出现异常就会影响数据。如果重启或者关机，所有数据都会消失。因此，基于MEMORY的表的生命周期很短，一般是一次性的。</p>
<h5 id="四-怎样选择存储引擎" tabindex="-1"><a class="header-anchor" href="#四-怎样选择存储引擎" aria-hidden="true">#</a> 四.怎样选择存储引擎</h5>
<p>在实际工作中，选择一个合适的存储引擎是一个比较复杂的问题。每种存储引擎都有自己的优缺点，不能笼统地说谁比谁好。</p>
<p><a href="https://images2015.cnblogs.com/blog/851461/201703/851461-20170306202857781-1607368004.png" target="_blank" rel="noopener noreferrer"><img src="https://images2015.cnblogs.com/blog/851461/201703/851461-20170306202857781-1607368004.png" alt="img"><ExternalLinkIcon/></a></p>
<p><em><strong>InnoDB</strong></em>：支持事务处理，支持外键，支持崩溃修复能力和并发控制。如果需要<strong>对事务的完整性要求比较高</strong>（比如银行），<strong>要求实现并发控制</strong>（比如售票），那选择InnoDB有很大的优势。如果需要<strong>频繁的更新、删除</strong>操作的数据库，也可以选择InnoDB，因为支持事务的提交（commit）和回滚（rollback）。</p>
<p><em><strong>MyISAM</strong></em>：插入数据快，空间和内存使用比较低。如果表主要是<strong>用于插入新记录和读出记录</strong>，那么选择MyISAM能实现处理高效率。如果应用的完整性、并发性要求比 较低，也可以使用。</p>
<p><em><strong>MEMORY</strong></em>：所有的数据都在内存中，数据的处理速度快，但是安全性不高。如果需要<strong>很快的读写速度</strong>，对数据的安全性要求较低，可以选择MEMOEY。它对表的大小有要求，不能建立太大的表。所以，这类数据库只使用在相对较小的数据库表。</p>
<p>注意，同一个数据库也可以使用多种存储引擎的表。如果一个表要求比较高的事务处理，可以选择InnoDB。这个数据库中可以将查询要求比较高的表选择MyISAM存储。如果该数据库需要一个用于查询的临时表，可以选择MEMORY存储引擎。</p>
<h4 id="_5、用c语言实现php中的base64编码函数" tabindex="-1"><a class="header-anchor" href="#_5、用c语言实现php中的base64编码函数" aria-hidden="true">#</a> 5、用C语言实现php中的base64编码函数</h4>
<p>最近写的程序要用到base64_encode，网上一搜“C语言 base64”出来一堆代码，但是我向来是不惮以最坏的恶意来推测这些代码的。于是看了一下PHP源码，base64_encode函数定义在ext\standard\base64.c文件中。我把它改写了一下，需要注意内存是动态分配的，使用完之后记得free掉，否则会造成内存泄露。</p>
<blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>unsigned char *base64_encode(const unsigned char *str)
{
 static const char base64_table[] =
 { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '\0'
 };
 static const char base64_pad = '=';
 const unsigned char *current = str;
 int length = strlen(str);
 unsigned char *p;
 unsigned char *result;

 if ((length + 2) &lt; 0 || ((length + 2) / 3) >= (1 &lt;&lt; (sizeof(int) * 8 - 2))) {
     return NULL;
 }

 result = (unsigned char *)malloc(((length + 2) / 3) * 4 * sizeof(char) + 1);
 p = result;

 while (length > 2) { 
     *p++ = base64_table[current[0] >> 2];
     *p++ = base64_table[((current[0] &amp; 0x03) &lt;&lt; 4) + (current[1] >> 4)];
     *p++ = base64_table[((current[1] &amp; 0x0f) &lt;&lt; 2) + (current[2] >> 6)];
     *p++ = base64_table[current[2] &amp; 0x3f];

     current += 3;
     length -= 3; 
 }

 if (length != 0) {
     *p++ = base64_table[current[0] >> 2];
     if (length > 1) {
         *p++ = base64_table[((current[0] &amp; 0x03) &lt;&lt; 4) + (current[1] >> 4)];
         *p++ = base64_table[(current[1] &amp; 0x0f) &lt;&lt; 2];
         *p++ = base64_pad;
     } else {
         *p++ = base64_table[(current[0] &amp; 0x03) &lt;&lt; 4];
         *p++ = base64_pad;
         *p++ = base64_pad;
     }
 }
 *p = '\0';
 return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="_6、用php写出快速排序" tabindex="-1"><a class="header-anchor" href="#_6、用php写出快速排序" aria-hidden="true">#</a> 6、用PHP写出快速排序</h4>
<p>面试问：</p>
<h4 id="_7、微博中reids的应用场景-redis的内存分配机制-为什么使用redis不适用mc-mc与redis的并发哪个较高" tabindex="-1"><a class="header-anchor" href="#_7、微博中reids的应用场景-redis的内存分配机制-为什么使用redis不适用mc-mc与redis的并发哪个较高" aria-hidden="true">#</a> 7、微博中reids的应用场景，redis的内存分配机制，为什么使用redis不适用MC，mc与redis的并发哪个较高</h4>
<p>Redis 在新浪微博中的应用</p>
<h5 id="redis简介" tabindex="-1"><a class="header-anchor" href="#redis简介" aria-hidden="true">#</a> Redis简介</h5>
<h6 id="_1-支持5种数据结构" tabindex="-1"><a class="header-anchor" href="#_1-支持5种数据结构" aria-hidden="true">#</a> 1. 支持5种数据结构</h6>
<p>支持strings, hashes, lists, sets, sorted sets
string是很好的存储方式，用来做计数存储。sets用于建立索引库非常棒；</p>
<h6 id="_2-k-v-存储-vs-k-v-缓存" tabindex="-1"><a class="header-anchor" href="#_2-k-v-存储-vs-k-v-缓存" aria-hidden="true">#</a> 2. K-V 存储 vs K-V 缓存</h6>
<p>新浪微博目前使用的98%都是持久化的应用，2%的是缓存，用到了600+服务器
Redis中持久化的应用和非持久化的方式不会差别很大：
非持久化的为8-9万tps，那么持久化在7-8万tps左右；
当使用持久化时，需要考虑到持久化和写性能的配比，也就是要考虑redis使用的内存大小和硬盘写的速率的比例计算；</p>
<h6 id="_3-社区活跃" tabindex="-1"><a class="header-anchor" href="#_3-社区活跃" aria-hidden="true">#</a> 3. 社区活跃</h6>
<p>Redis目前有3万多行代码, 代码写的精简，有很多巧妙的实现，作者有技术洁癖
Redis的社区活跃度很高，这是衡量开源软件质量的重要指标，开源软件的初期一般都没有商业技术服务支持，如果没有活跃社区做支撑，一旦发生问题都无处求救；</p>
<h5 id="redis基本原理" tabindex="-1"><a class="header-anchor" href="#redis基本原理" aria-hidden="true">#</a> Redis基本原理</h5>
<p>redis持久化(aof) append online file：
写log(aof), 到一定程度再和内存合并. 追加再追加, 顺序写磁盘, 对性能影响非常小</p>
<h6 id="_1-单实例单进程" tabindex="-1"><a class="header-anchor" href="#_1-单实例单进程" aria-hidden="true">#</a> 1. 单实例单进程</h6>
<p>Redis使用的是单进程，所以在配置时，一个实例只会用到一个CPU；
在配置时，如果需要让CPU使用率最大化，可以配置Redis实例数对应CPU数, Redis实例数对应端口数(8核Cpu, 8个实例, 8个端口), 以提高并发:
单机测试时, 单条数据在200字节, 测试的结果为8~9万tps；</p>
<h6 id="_2-replication" tabindex="-1"><a class="header-anchor" href="#_2-replication" aria-hidden="true">#</a> 2. Replication</h6>
<p>过程: 数据写到master--&gt;master存储到slave的rdb中--&gt;slave加载rdb到内存。
存储点(save point): 当网络中断了, 连上之后, 继续传.
Master-slave下第一次同步是全传，后面是增量同步；、</p>
<h6 id="_3-数据一致性" tabindex="-1"><a class="header-anchor" href="#_3-数据一致性" aria-hidden="true">#</a> 3. 数据一致性</h6>
<p>长期运行后多个结点之间存在不一致的可能性；
开发两个工具程序：
1.对于数据量大的数据，会周期性的全量检查；
2.实时的检查增量数据，是否具有一致性；</p>
<p>对于主库未及时同步从库导致的不一致，称之为延时问题；
对于一致性要求不是那么严格的场景，我们只需要要保证最终一致性即可；
对于延时问题，需要根据业务场景特点分析，从应用层面增加策略来解决这个问题；
例如：
1.新注册的用户，必须先查询主库；
2.注册成功之后，需要等待3s之后跳转，后台此时就是在做数据同步。</p>
<h5 id="新浪redis使用历程" tabindex="-1"><a class="header-anchor" href="#新浪redis使用历程" aria-hidden="true">#</a> 新浪Redis使用历程</h5>
<p>2009年, 使用memcache(用于非持久化内容), memcacheDB(用于持久化+计数),
memcacheDB是新浪在memcache的基础上，使用BerkeleyDB作为数据持久化的存储实现；</p>
<h6 id="_1-面临的问题" tabindex="-1"><a class="header-anchor" href="#_1-面临的问题" aria-hidden="true">#</a> 1. 面临的问题</h6>
<ul>
<li>数据结构(Data Structure)需求越来越多, 但memcache中没有, 影响开发效率</li>
<li>性能需求, 随着读操作的量的上升需要解决，经历的过程有:
数据库读写分离(M/S)--&gt;数据库使用多个Slave--&gt;增加Cache (memcache)--&gt;转到Redis</li>
<li>解决写的问题：
水平拆分，对表的拆分，将有的用户放在这个表，有的用户放在另外一个表；</li>
<li>可靠性需求
Cache的&quot;雪崩&quot;问题让人纠结
Cache面临着快速恢复的挑战</li>
<li>开发成本需求
Cache和DB的一致性维护成本越来越高(先清理DB, 再清理缓存, 不行啊, 太慢了!)
开发需要跟上不断涌入的产品需求
硬件成本最贵的就是数据库层面的机器，基本上比前端的机器要贵几倍，主要是IO密集型，很耗硬件；</li>
<li>维护性复杂
一致性维护成本越来越高；
BerkeleyDB使用B树，会一直写新的，内部不会有文件重新组织；这样会导致文件越来越大；大的时候需要进行文件归档，归档的操作要定期做；
这样，就需要有一定的down time；</li>
</ul>
<p>基于以上考虑， 选择了Redis</p>
<h6 id="_2-寻找开源软件的方式及评判标准" tabindex="-1"><a class="header-anchor" href="#_2-寻找开源软件的方式及评判标准" aria-hidden="true">#</a> 2. 寻找开源软件的方式及评判标准</h6>
<ul>
<li>对于开源软件，首先看其能做什么，但更多的需要关注它不能做什么，它会有什么问题？</li>
<li>上升到一定规模后，可能会出现什么问题，是否能接受？</li>
<li>google code上, 国外论坛找材料(国内比国外技术水平滞后5年）</li>
<li>观察作者个人的代码水平</li>
</ul>
<h5 id="redis应用场景" tabindex="-1"><a class="header-anchor" href="#redis应用场景" aria-hidden="true">#</a> Redis应用场景</h5>
<h6 id="_1-业务使用方式" tabindex="-1"><a class="header-anchor" href="#_1-业务使用方式" aria-hidden="true">#</a> 1. 业务使用方式</h6>
<ul>
<li>hash sets: 关注列表, 粉丝列表, 双向关注列表(key-value(field), 排序)</li>
<li>string(counter): 微博数, 粉丝数, ...(避免了select count(*) from ...)</li>
<li>sort sets(自动排序): TopN, 热门微博等, 自动排序</li>
<li>lists(queue): push/sub提醒,...</li>
</ul>
<p>上述四种, 从精细化控制方面，hash sets和string(counter)推荐使用, sort sets和lists(queue)不推荐使用
还可通过二次开发，进行精简。比如: 存储字符改为存储整形, 16亿数据, 只需要16G内存
存储类型保存在3种以内，建议不要超过3种；</p>
<p>将memcache +myaql 替换为Redis：
Redis作为存储并提供查询，后台不再使用mysql，解决数据多份之间的一致性问题；</p>
<h6 id="_2-对大数据表的存储" tabindex="-1"><a class="header-anchor" href="#_2-对大数据表的存储" aria-hidden="true">#</a> 2. 对大数据表的存储</h6>
<p>（eg：140字微博的存储）
一个库就存唯一性id和140个字；
另一个库存id和用户名，发布日期、点击数等信息，用来计算、排序等，等计算出最后需要展示的数据时再到第一个库中提取微博内容；</p>
<p>改进的3个步骤:
1）发现现有系统存在问题;
2）发现了新东西, 怎么看怎么好, 全面转向新东西;
3）理性回归, 判断哪些适合新东西, 哪些不适合, 不合适的回迁到老系统</p>
<h6 id="_3-一些技巧" tabindex="-1"><a class="header-anchor" href="#_3-一些技巧" aria-hidden="true">#</a> 3. 一些技巧</h6>
<ul>
<li>很多应用, 可以承受数据库连接失败, 但不能承受处理慢</li>
<li>一份数据, 多份索引(针对不同的查询场景)</li>
<li>解决IO瓶颈的唯一途径: 用内存</li>
<li>在数据量变化不大的情况下，优先选用Redis</li>
</ul>
<h5 id="遇到的问题及解决办法" tabindex="-1"><a class="header-anchor" href="#遇到的问题及解决办法" aria-hidden="true">#</a> 遇到的问题及解决办法</h5>
<p>(注意: 都是量特别大时候会出现的, 量小了怎么都好说)</p>
<h5 id="_1-problem-replication中断后-重发-网络突发流量" tabindex="-1"><a class="header-anchor" href="#_1-problem-replication中断后-重发-网络突发流量" aria-hidden="true">#</a> 1.Problem: Replication中断后, 重发--&gt;网络突发流量</h5>
<p>Solution: 重写Replication代码, rdb+aof(滚动)</p>
<h5 id="_2-problem-容量问题" tabindex="-1"><a class="header-anchor" href="#_2-problem-容量问题" aria-hidden="true">#</a> 2.Problem: 容量问题</h5>
<p>Solution: 容量规划和M/S的sharding功能(share nothing, 抽象出来的数据对象之间的关联数据很小)
增加一些配置, 分流, 比如: 1,2,3,4, 机器1处理%2=1的, 机器2处理%2=0的.
低于内存的1/2使用量, 否则就扩容（建议Redis实例使用的数据，最大不要超过内存的80%）
我们线上96G/128G内存服务器不建议单实例容量大于20/30G。
微博应用中单表数据最高的有2T的数据，不过应用起来已经有些力不从心；
每个的端口不要超过20G；测试磁盘做save所需要的时间，需要多长时间能够全部写入；内存越大，写的时间也就越长；
单实例内存容量较大后，直接带来的问题就是故障恢复或者Rebuild从库的时候时间较长，对于普通硬盘的加载速度而言，我们的经验一般是redis加载1G需要1分钟；（加载的速度依赖于数据量的大小和数据的复杂度）
Redis rewrite aof和save rdb时，将会带来非常大且长的系统压力，并占用额外内存，很可能导致系统内存不足等严重影响性能的线上故障。</p>
<p>reblance: 现有数据按照上述配置重新分发。
后面使用中间层，路由HA；
注：目前官方也正在做这个事，Redis Cluster，解决HA问题；</p>
<h5 id="_3-problem-bgsave-or-bgwriteaof的冰晶问题" tabindex="-1"><a class="header-anchor" href="#_3-problem-bgsave-or-bgwriteaof的冰晶问题" aria-hidden="true">#</a> 3. Problem: bgsave or bgwriteaof的冰晶问题</h5>
<p>Solution: 磁盘性能规划和限制写入的速度, 比如: 规定磁盘以200M/s的速度写入, 细水长流, 即使到来大量数据. 但是要注意写入速度要满足两个客观限制:
符合磁盘速度
符合时间限制(保证在高峰到来之前, 就得写完)</p>
<h5 id="_4-problem-运维问题" tabindex="-1"><a class="header-anchor" href="#_4-problem-运维问题" aria-hidden="true">#</a> 4.Problem: 运维问题</h5>
<p>1）Inner Crontab: 把Crontab迁移到Redis内部, 减少迁移时候的压力
本机多端口避免同时做 - 能做到
同一业务多端口(分布在多机上), 避免同时做 - 做不到
2）动态升级: 先加载.so文件, 再管理配置, 切换到新代码上(Config set命令)
把对redis改进的东西都打包成lib.so文件，这样能够支持动态升级
自己改的时候要考虑社区的升级。当社区有新的版本，有很好用的新功能时，要能很容易的与我们改进后的版本很好的merge；
升级的前提条件: 模块化, 以模块为单位升级
加载时间取决于两个方面: 数据大小, 数据结构复杂度. 一般, 40G数据耗时40分钟
分布式系统的两个核心问题: A.路由问题 B.HA问题</p>
<p>3）危险命令的处理: 比如: fresh all删除全部数据, 得进行控制
运维不能只讲数据备份，还得考虑数据恢复所需要的时间；
增加权限认证(管理员才有权限)eg：flashall 权限认证，得有密码才能做；
当然，高速数据交互一般都不会在每次都进行权限认证，通用的处理策略是第一次认证，后期都不用再认证；
控制hash策略(没有key, 就找不到value; 不知道hash策略, 就无法得到key)</p>
<p>4）Config Dump:
内存中的配置项动态修改过, 按照一定策略写入到磁盘中(Redis已支持)
5）bgsave带来aof写入很慢:
fdatasync在做bgsave时, 不做sync aof(会有数据出入)
6）成本问题: (22T内存, 有10T用来计数)
Redisscounter(16亿数据占用16G内存) - 全部变为整型存储, 其余(字符串等)全不要
Redis+SSD(counterService计数服务)
顺序自增, table按照顺序写, 写满10个table就自动落地(到SSD)
存储分级: 内存分配问题, 10K和100K写到一块, 会有碎片. Sina已经优化到浪费只占5%以内(已经很好了!)</p>
<h5 id="_5-problem-分布式问题" tabindex="-1"><a class="header-anchor" href="#_5-problem-分布式问题" aria-hidden="true">#</a> 5.Problem: 分布式问题</h5>
<p>1.Config Server: 命名空间, 特别大的告诉访问, 都不适合用代理, 因为代理降低速度, 但是, Sina用了(单机多端口, Redis Cluster, sentinel)
Config Server放到Zookeeper上
最前面是命名服务，后面跟的是无状态的twmemproxy（twitter的改进的，用C写的） ,后面才是redis；
2.twmemproxy
应用不必关心连接失败, 由代理负责重连
把Hash算法放到代理商
代理后边的升级, 前端不关心, 解决了HA的问题
无状态, 多台代理无所谓
3.AS --&gt; Proxy --&gt;Redis
4.Sina的Redis都是单机版, 而Redis-Cluster交互过于复杂，没有使用
做HA的话，一定要配合监控来做，如果挂了之后，后续该如何做；
并不是追求单机性能，而是集群的吞吐量，从而可以支持无线扩展；</p>
<h5 id="经验总结" tabindex="-1"><a class="header-anchor" href="#经验总结" aria-hidden="true">#</a> 经验总结</h5>
<ul>
<li>提前做好数据量的规划, 减少sharding(互联网公司一般以年为单位)</li>
<li>只存精细化数据(内存很金贵!)</li>
<li>存储用户维度的数据
对象维度的数据要有生命周期
特别是数据量特别大的时候，就很有必要来进行划分了；</li>
<li>暴露服务的常见过程: IP--&gt;负载均衡--&gt;域名--&gt;命名服务(一张表: 名字+资源(IP+端口))</li>
<li>对于硬件消耗，IO、网络和CPU相比，Redis最消耗的是CPU，复杂的数据类型必定带来CPU消耗；</li>
<li>新浪微博响应时间超时目前设置为5s；（返回很慢的记录key，需记录下来分析，慢日志）；</li>
<li>备份的数据要定期要跑一下生产的数据；用来检查备份数据的有效性；</li>
<li>slave挂多了肯定会对master造成比较的影响；新浪微博目前使用的M/S是一拖一，主要用来做容灾；
同步时，是fork出一个单独进程来和slave进行同步；不会占用查询的进程；</li>
<li>升级到2.6.30以后的linux内核；
在2.6.30以上对软中断的问题处理的很好，性能提升效果明显，差不多有15%到30%的差距；</li>
<li>redis不用读写分离，每个请求都是单线程，为什么要进行读写分离。</li>
</ul>
<h4 id="_2、array-map的使用场景-array-merge-合并数组之后的键名变换情况" tabindex="-1"><a class="header-anchor" href="#_2、array-map的使用场景-array-merge-合并数组之后的键名变换情况" aria-hidden="true">#</a> 2、array_map的使用场景，array_merge(),合并数组之后的键名变换情况</h4>
<p>array_map() 函数将用户自定义函数作用到数组中的每个值上，并返回用户自定义函数作用后的带有新值的数组。</p>
<p>简单来说 “array_map” 会对数组中的每一项进行处理，并返回处理后的数据。</p>
<p><strong>定义：</strong></p>
<p>array_map的参数为array_map(处理函数，数组,数组...)</p>
<p>处理函数可以是匿名函数，也可以是具名函数</p>
<p>数组可以是多个数组或者是单个数组</p>
<p><strong>用法：</strong></p>
<p>应用场景1：对数组的每一项进行乘法操作</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$arr = array(1,2,3,4,5);
$result = array_map(function ( $value ){
　　return $value * 10;
},$arr);
print_r($result);   //Array ( [0] => 10 [1] => 20 [2] => 30 [3] => 40 [4] => 50 )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景2：二维数组转换成一维数组</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$arr = array(
　　　　array(
　　　　　　array('id'=>1,'name'=>'a'),
　　　　　　array('id'=>2,'name'=>'b')
　　　　),
　　　　array(
　　　　　　array('id'=>3,'name'=>'c'),
　　　　　　array('id'=>4,'name'=>'d'),
　　　　　　array('id'=>5,'name'=>'e')
　　　　)
　　);
 
　　$result = array();
　　array_map(function ($value) use (&amp;$result){
　　　　$result = array_merge($result,array_values($value));
　　},$arr);
　　/*
　　讲一下function () use (){}  是php5.3后新增的闭包,use()的括号里面可以对外部的变量进行传参，共匿名函数使用
 
 
　　Array
　　(
    [0] => Array
        (
            [id] => 1
            [name] => a
        )
 
    [1] => Array
        (
            [id] => 2
            [name] => b
        )
 
    [2] => Array
        (
            [id] => 3
            [name] => c
        )
 
    [3] => Array
        (
            [id] => 4
            [name] => d
        )
 
    [4] => Array
        (
            [id] => 5
            [name] => e
        )
 
　　)&lt;br>　　*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、php几个编码函数区别-json-encode-http-build-query-urlencode等区别" tabindex="-1"><a class="header-anchor" href="#_3、php几个编码函数区别-json-encode-http-build-query-urlencode等区别" aria-hidden="true">#</a> 3、php几个编码函数区别（json_encode, http_build_query, urlencode等区别）</h4>
<p>最近，在公司负责第三方短信运营商对接开发时，遇到了转码和序列化的问题，再请教了大神之后才终于解决了，下边重点回顾下PHP中的各种序列化和编码的功能和应用场景。</p>
<h6 id="一、urlencode与urldecode" tabindex="-1"><a class="header-anchor" href="#一、urlencode与urldecode" aria-hidden="true">#</a> 一、urlencode与urldecode</h6>
<p>功能：便于将字符串编码并将其用于 URL 的请求部分，同时它还便于将变量传递给下一页。</p>
<p>场景：此字符串中除了 -_. 之外的所有非字母数字字符都将被替换成百分号（%）后跟两位十六进制数，空格则编码为加号（+）。此编码与 WWW 表单 POST 数据的编码方式是一样的，同时与 application/x-www-form-urlencoded 的媒体类型编码方式一样。</p>
<p>编码原理：将需要转码的字符转为16进制，然后从右到左，取4位(不足4位直接处理)，每2位做一位，前面加上%，编码成%XY格式。</p>
<p>注1：这个不仅仅用于页面传递url参数部分，在交换数据时也可以采用此种编码，只要双方协商好就行了。</p>
<p>注2：此编码在将空格编码为加号（+）。</p>
<p>注3：超全局变量 $_GET 和 $_REQUEST 已经被解码了。对 $_GET 或 $_REQUEST 里的元素使用 urldecode() 将会导致不可预计和危险的结果。</p>
<h6 id="二、rawurldecode与rawurlencode" tabindex="-1"><a class="header-anchor" href="#二、rawurldecode与rawurlencode" aria-hidden="true">#</a> 二、rawurldecode与rawurlencode</h6>
<p>功能和场景和urlencode和urldecode类似，区别在于处理+的问题上。</p>
<p>rawurlencode将空格编码为%20；</p>
<p>rawurldecode() 不会把加号（'+'）解码为空格。</p>
<p>注：支持直接中文操作。</p>
<h6 id="三、igbinary-serialize与igbinary-unserialize" tabindex="-1"><a class="header-anchor" href="#三、igbinary-serialize与igbinary-unserialize" aria-hidden="true">#</a> 三、igbinary_serialize与igbinary_unserialize</h6>
<p>功能：序列化与反序列化，igbinary 來解決這個問題，而且速度比 serailizer 和 json 快很多。</p>
<p>场景：对象序列化，支持中文直接操作。</p>
<p>注：使用此函数必须安装igbinary扩展，速度方面igbinary &gt; json &gt;serailizer。</p>
<h6 id="四、http-build-query与parse-url" tabindex="-1"><a class="header-anchor" href="#四、http-build-query与parse-url" aria-hidden="true">#</a> 四、http_build_query与parse_url</h6>
<p>功能：生成 URL-encode 之后的请求字符串；生成url的组成部分。</p>
<p>主：支持直接中文操作，会自动进行url-encode。</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'foo'</span><span class="token operator">=></span><span class="token string single-quoted-string">'bar'</span><span class="token punctuation">,</span>
              <span class="token string single-quoted-string">'baz'</span><span class="token operator">=></span><span class="token string single-quoted-string">'boom'</span><span class="token punctuation">,</span>
              <span class="token string single-quoted-string">'cow'</span><span class="token operator">=></span><span class="token string single-quoted-string">'milk'</span><span class="token punctuation">,</span>
              <span class="token string single-quoted-string">'php'</span><span class="token operator">=></span><span class="token string single-quoted-string">'hypertext processor'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">echo</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">"\n"</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'&amp;amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*结果
foo=bar&amp;baz=boom&amp;cow=milk&amp;php=hypertext+processor
foo=bar&amp;amp;baz=boom&amp;amp;cow=milk&amp;amp;php=hypertext+processor
*/</span>
 
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'http://username:password@hostname:9090/path?arg=value#anchor'</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">parse_url</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//结果</span>
<span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"scheme"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"http"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"host"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"hostname"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"port"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">9090</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"user"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"username"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"pass"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"password"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"path"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"/path"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"query"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"arg=value"</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">"fragment"</span><span class="token punctuation">]</span><span class="token operator">=></span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">"anchor"</span>
<span class="token punctuation">}</span>
 
<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="五、base64-decode与base64-encode" tabindex="-1"><a class="header-anchor" href="#五、base64-decode与base64-encode" aria-hidden="true">#</a> 五、base64_decode与base64_encode</h6>
<p>功能：采用MIME base64对data进行编码和解码。</p>
<p>场景：对订单号进行加密，因为是可逆的。</p>
<h6 id="六、serialize与unserialize" tabindex="-1"><a class="header-anchor" href="#六、serialize与unserialize" aria-hidden="true">#</a> 六、serialize与unserialize</h6>
<p>功能：产生一个可存储的值的表示，支持直接中文操作。</p>
<p>场景：对象的传输必须系列化二进制才行，必须用到此函数。</p>
<p>注1：unserialize若被解序列化的变量是一个对象，在成功地重新构造对象之后，PHP 会自动地试图去调用 __wakeup() 成员函数（如果存在的话）。</p>
<p>注2：当序列化对象时，PHP 将试图在序列动作之前调用该对象的成员函数 __sleep()。</p>
<h6 id="七、json-encode与json-decode" tabindex="-1"><a class="header-anchor" href="#七、json-encode与json-decode" aria-hidden="true">#</a> 七、json_encode与json_decode</h6>
<p>功能：对变量进行 JSON 编码（所有字符串数据的编码必须是 UTF-8）；</p>
<p>对 JSON 格式的字符串进行解码（这个函数仅能处理 UTF-8 编码的数据）；</p>
<p>场景：数据传输时需要序列化和反序列化，尤其是在跨语言操作时，json是一种标准。</p>
<h6 id="八-php-session编码和解码" tabindex="-1"><a class="header-anchor" href="#八-php-session编码和解码" aria-hidden="true">#</a> 八.PHP - session编码和解码</h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php 
    //session编码
    session_start();
    $_SESSION['name'] = 'Jack';
    $_SESSION['sex'] = 'men';
    $envar = session_encode();
    echo $envar;//name|s:4:"Jack";sex|s:3:"men";
    echo '&lt;br/>';
    //session解码
    session_decode($envar);
    echo $_SESSION['name']."-".$_SESSION['sex'];
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>PHP中的session默认情况下是使用客户端的Cookie。当客户端的Cookie被禁用时，会自动通过Query_String来传递。

Php处理会话的函数一共有11个，我们详细介绍一下将要用到几个函数。

1、 session_start

函数功能：开始一个会话或者返回已经存在的会话。

函数原型：boolean session_start(void);

返回值：布尔值

功能说明：这个函数没有参数，且返回值均为true。最好将这个函数置于最先，而且在它之前不能有任何输出，否则会报警，如：Warning: Cannot send session cache limiter - headers already sent (output started at /usr/local/apache/htdocs/cga/member/1.php:2) in /usr/local/apache/htdocs/cga/member/1.php on line 3

2、 session_register

函数功能：登记一个新的变量为会话变量

函数原型：boolean session_register(string name);

返回值：布尔值。

功能说明：这个函数是在全局变量中增加一个变量到当前的SESSION中，参数name就是想要加入的变量名，成功则返回逻辑值true。可以用$_SESSION[name]或$HTTP_SESSION_VARS[name]的形式来取值或赋值

3、 session_is_registered

函数功能：检查变量是否被登记为会话变量。

函数原型：boobean session_is_registered(string name);

返回值：布尔值

功能说明：这个函数可检查当前的session之中是否已有指定的变量注册，参数name就是要检查的变量名。成功则返回逻辑值true。

4、 session_unregister

函数功能：删除已注册的变量。

函数原型：boolean session_session_unregister(string name);

返回值：布尔值

功能说明：这个函数在当前的session之中删除全局变量中的变量。参数name就是欲删除的变量名，成功则返回true.

5、 Session_destroy

函数功能：结束当前的会话，并清空会话中的所有资源。

函数原型：boolean session destroy(void);

返回值：布尔值。

功能说明：这个函数结束当前的session，此函数没有参数，且返回值均为true

上面介绍函数下文将会用到，但还有一些有关session的函数也介绍一下：

6、 session_encode

函数功能：sesssion信息编码

函数原型：string session_encode(void);

返回值：字符串

功能说明：返回的字符串中包含全局变量中各变量的名称与值，形式如：a|s:12:"it is a test";c|s:4:"lala"; a是变量名 s:12代表变量a的值"it is a test的长度是12 变量间用分号”;”分隔。

7、 session_decode
函数功能：sesssion信息解码
函数原型：boolean session_decode (string data)
返回值：布尔值
功能说明：这个函数可将session信息解码，成功则返回逻辑值true

8、 session_name

函数功能：存取当前会话名称

函数原型：boolean session_name(string [name]);

返回值：字符串

功能说明：这个函数可取得或重新设置当前session的名称。若无参数name则表示获取当前session名称，加上参数则表示将session名称设为参数name

9、 session_id

函数功能：存取当前会话标识号

函数原型：boolean session_id(string [id]);

返回值：字符串

功能说明：这个函数可取得或重新设置当前存放session的标识号。若无参数id则表示只获取当前session的标识号，加上参数则表示将session的标识号设成新指定的id

10、 session_unset

函数功能：删除所有已注册的变量。

函数原型：void session_unset (void)

返回值：布尔值

功能说明：这个函数和Session_destroy不同，它不结束会话。就如同用函数session_unregister逐一注销掉所有的会话变量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="九-php-在utf8和gbk编码下使用serialize和unserialize互相序列化和反序列化会出现无法成功反序列化的问题。" tabindex="-1"><a class="header-anchor" href="#九-php-在utf8和gbk编码下使用serialize和unserialize互相序列化和反序列化会出现无法成功反序列化的问题。" aria-hidden="true">#</a> 九.php 在utf8和gbk编码下使用serialize和unserialize互相序列化和反序列化会出现无法成功反序列化的问题。</h6>
<p>问题出现的原因主要是在不同编码下strlen函数计算中文字符串长度不同的原因。</p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211226151446523.png" alt="image-20211226151446523"></p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211226151500226.png" alt="image-20211226151500226"></p>
<h6 id="十-字符转为html实体" tabindex="-1"><a class="header-anchor" href="#十-字符转为html实体" aria-hidden="true">#</a> 十.字符转为HTML实体：</h6>
<p>htmlentities() / html_entity_decode()</p>
<p>所有字符转换为 HTML 实体</p>
<p>htmlspecialchars() / htmlspecialchars_decode()</p>
<p>将特殊字符&quot;&lt;&quot; （小于）和 &quot;&gt;&quot; （大于）转换为 HTML 实体</p>
<p>uuencode编码：</p>
<p>convert_uuencode();</p>
<p>convert_uudecode();</p>
<h6 id="字符集编码相互转换" tabindex="-1"><a class="header-anchor" href="#字符集编码相互转换" aria-hidden="true">#</a> 字符集编码相互转换：</h6>
<p>iconv();</p>
<p>mb_convert_encoding();</p>
<h6 id="字符写入数据库自动转义" tabindex="-1"><a class="header-anchor" href="#字符写入数据库自动转义" aria-hidden="true">#</a> 字符写入数据库自动转义：</h6>
<p>// magic_quotes_runtime 相关函数在PHP 5.3.0中已 <em>弃用</em>，并且自PHP 7.0.0起已<em>删除</em></p>
<p>get_magic_quotes_runtime() 取得 PHP 环境变量 magic_quotes_runtime 的值。设置返回 1 或者 true</p>
<p>set_magic_quotes_runtime() 可以让程序员在代码中动态开启或关闭 magic_quotes_runtime，</p>
<p>set_magic_quotes_runtime(1) 表示开启，set_magic_quotes_runtime(0) 则表示关闭。当set_magic_quotes_runtime(1) 时，从数据库或通过fread之类的函数读取的文本，将自动对’ “和自动加上反斜杠进行转义，防止溢出。这在对数据库的数据进行转移的时候非常有用。</p>
<p>但在一般情况下，应当将其关闭，否则从数据库读取出来的数据单引号、双引号和反斜杠都会被加上，导致显示不正常。像Discuz，PHPWind都在公共文件的头部加上一句 set_magic_quotes_runtime(0); 强制关闭 magic_quotes_runtime 。</p>
<p>​    作用范围：从文件中读取的数据或执行exec()的结果或是从ＳＱＬ查询中得到的；</p>
<p>作用时间：每次当脚本访问运行状态中产生的数据．</p>
<h6 id="字符转义" tabindex="-1"><a class="header-anchor" href="#字符转义" aria-hidden="true">#</a> 字符转义：</h6>
<p>// 自PHP 5.3.0起，此功能已被<em>弃用</em> ，自PHP 5.4.0 起已被 <em>删除</em>。</p>
<p>magic_quotes_gpc</p>
<p>magic_quotes_gpc 为 on，它主要是对所有的 GET、POST 和 COOKIE 数据自动运行 addslashes()，一般在数据入库前要先进行转义**。**不要对已经被 magic_quotes_gpc 转义过的字符串使用 addslashes()，因为这样会导致双层转义。遇到这种情况时可以使用函数 get_magic_quotes_gpc() 进行检测，如果 magic_quotes_gpc 为关闭时返回 0，否则返回 1。或者始终<code v-pre>FALSE</code>从PHP 5.4.0开始返回。</p>
<p>作用范围是：ＷＥＢ客户服务端；</p>
<p>作用时间：请求开始是，例如当脚本运行时。</p>
<h6 id="反斜线转义字符串" tabindex="-1"><a class="header-anchor" href="#反斜线转义字符串" aria-hidden="true">#</a> 反斜线转义字符串：</h6>
<p>addslashes() / stripslashes() 互为反函数</p>
<p>addslashes() 函数返回在预定义字符之前添加反斜杠的字符串。
预定义字符是：单引号（'），双引号（&quot;），反斜杠（\），NULL</p>
<p>指定字符前添加反斜杠：</p>
<p><a href="http://php.net/manual/zh/function.addcslashes.php" target="_blank" rel="noopener noreferrer">addcslashes<ExternalLinkIcon/></a>() / stripcslashes() 互为反函数</p>
<p>注释：addcslashes() 函数对大小写敏感。 以 C 语言风格使用反斜线转义字符串中的字符。</p>
<p>注释：对以下字符应用 addcslashes() 时请小心：0（NULL）, r（回车）, n（换行）, f 换页）、t（制表符）以及 v（垂直制表符）。在 PHP 中，\0, \r, \n, \t, \f 以及 \v 是预定义的转义序列。</p>
<p>string addcslashes ( string $str , string $charlist )</p>
<p>返回字符串，该字符串在属于参数 charlist 列表中的字符前都加上了反斜线。</p>
<p>如果 charlist 中包含有 \n，\r 等字符，将以 C 语言风格转换，而其它非字母数字且 ASCII 码低于 32 以及高于 126 的字符均转换成使用八进制表示。</p>
<h4 id="_4、正则表达式中-的含义" tabindex="-1"><a class="header-anchor" href="#_4、正则表达式中-的含义" aria-hidden="true">#</a> 4、正则表达式中 . * + / 的含义</h4>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220204134818692.png" alt="image-20220204134818692"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. .*

. 表示匹配除换行符 \n 之外的任何单字符，*表示零次或多次。所以.*在一起就表示任意字符出现零次或多次。没有?表示贪婪模式。比如a.*b，它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索aabab的话，它会匹配整个字符串aabab。这被称为贪婪匹配。
又比如模式src=`.*`， 它将会匹配最长的以 src=` 开始，以`结束的最长的字符串。用它来搜索 &lt;img src=``test.jpg` width=`60px` height=`80px`/> 时，将会返回 src=``test.jpg` width=`60px` height=`80px`

2. .*?

?跟在*或者+后边用时，表示懒惰模式。也称非贪婪模式。就是匹配尽可能少的字符。就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。
a.*?b匹配最短的，以a开始，以b结束的字符串。如果把它应用于aabab的话，它会匹配aab（第一到第三个字符）和ab（第四到第五个字符）。
又比如模式 src=`.*?`，它将会匹配 src=` 开始，以 ` 结束的尽可能短的字符串。且开始和结束中间可以没有字符，因为*表示零到多个。用它来搜索 &lt;img src=``test.jpg` width=`60px` height=`80px`/> 时，将会返回 src=``。

3. .+?

同上，?跟在*或者+后边用时，表示懒惰模式。也称非贪婪模式。就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。
a.+?b匹配最短的，以a开始，以b结束的字符串，但a和b中间至少要有一个字符。如果把它应用于ababccaab的话，它会匹配abab（第一到第四个字符）和aab（第七到第九个字符）。注意此时匹配结果不是ab,ab和aab。因为a和b中间至少要有一个字符。
又比如模式 src=`.+?`，它将会匹配 src=` 开始，以 ` 结束的尽可能短的字符串。且开始和结束中间必须有字符，因为+表示1到多个。用它来搜索 &lt;img src=``test.jpg` width=`60px` height=`80px`/> 时，将会返回 src=``test.jpg`。注意与.*?时的区别，此时不会匹配src=``，因为src=` 和 ` 之间至少有一个字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、各个进制数字之间的转换-给定一个数字-2进制转换成16进制" tabindex="-1"><a class="header-anchor" href="#_5、各个进制数字之间的转换-给定一个数字-2进制转换成16进制" aria-hidden="true">#</a> 5、各个进制数字之间的转换？给定一个数字，2进制转换成16进制</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$binary = '0b00111111'; 二进制
echo bindec($binary);//63  二进制转10进制
echo dechex(bindec($binary));//3f  2进制转16进制
echo decoct(bindec($binary));//77  2进制转8进制
echo "&lt;hr>";
echo decbin(63);//111111   //10进制转为2进制
echo "&lt;hr>";
echo octdec(77);//63    //8进制转为10进制
echo "&lt;hr>";
echo hexdec('3f'); //63		16进制转为10进制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>本文实例讲述了PHP实现十进制、二进制、八进制和十六进制转换相关函数用法。分享给大家供大家参考，具体如下：

1.二进制：

1.1.二进制转十进制：

函数：bindec(string $binary_string)

@param $binary_string 参数表示所要转换的二进制字符串。
@return  返回与$binary_string参数所表示的二进制数的十进制数等价值。

函数说明：

bindec()将一个二进制数转换成Integer类型或者出于大小的需要，转换为float类型。
bindec()将所有的$binary_string值解释为无符号整数。这是因为bindec()函数将其最高有效位视为数量级而非符号位。【即最高位0或1并不被bindec()表示为+或-而是按值来表示1就是1，0就是0】

注意：参数必须为字符串，使用其他的数据类型会导致不可预知的结果。

范例：

&lt;?php
  echo bindec('10010') . "\n";
  echo bindec('00110') . "\n";
  echo bindec('1111') . "\n";
以上程序语句会依次输出：18，6，15

1.2.二进制转十六进制

函数：bin2hex(string $str)

@param  $str 将要转换的ASCII字符的字符串。
@return  返回转换字符串的十六进制值。

函数说明：

bin2hex() 函数把 ASCII 字符的字符串转换为十六进制值。字符串可通过使用 pack() 函数再转换回去。
bin2hex() 函数转换使用字节方式，高四位字优先。

范例：

（1）bin2hex()转换‘chengdu'为十六进制值：

&lt;?php
  $str = bin2hex('chengdu');
  echo $str;
以上程序语句会输出：6368656e676475

（2）把一个字符串值从二进制转换为十六进制，再转换回去：

&lt;?php
  $str = 'chengdu';
  echo bin2hex($str) . "&lt;br/>";
  echo pack("H*", bin2hex($str)) . "&lt;br/>";
以上程序语句依次输出：6368656e676475, chengdu

2.八进制：

2.1.八进制转十进制：

函数：octdec(string $octal_string)

@param  $octal_string 参数表示将要转换的八进制字符串。
@return   返回$octal_string参数所表示的八进制数的十进制等值。

函数说明：

octdec()可以处理Integer大数字，但在这种情况下它会返回float类型。

范例：

&lt;?php
  echo octdec( '010' ) . "\n";
  echo octdec( decoct( 45 ) );
以上程序语句会输出：8, 45

3.十进制：

3.1.十进制转二进制：

函数：decbin(int $number)

@param  $number  所要转换的十进制数字，所能转换的最大数值为十进制的4294967295，其decbin结果为 32 个 1 的字符串。
@return   返回十进制数字转换后的二进制字符串。

函数说明：

decbin()函数所能转换的最大十进制数值为4294967295，其结果为 32 个 1 的字符串。

范例：

&lt;?php
  echo decbin ( 10 ) . "\n";
  echo decbin ( 50 );
以上程序语句会输出：1010, 110010

3.2.十进制转八进制:

函数：decoct(int $number)

@param  $number 所要转换的十进制数字，所能转换的最大数值是十进制的4294967295，其decoct()结果为 "37777777777"。
@return   返回一个包含有给定$number参数的八进制表示的字符串。

函数说明：

decoct()函数所能转换的最大十进制数数值为4294967295，其结果为 "37777777777"。

范例：

&lt;?php
  echo decoct ( 10 ) . "\n" ;
  echo decoct ( 50 );
以上程序语句会依次输出：12, 62

3.3.十进制转十六进制：

函数：dechex(int $number)

@param $number 将要转换的十进制数字。
@return   返回一个包含给定$number参数的十六进制表示的字符串。

函数说明：

dechex()函数所能转换的十进制的最大数值是：PHP_INT_MAX*2 +/- 1，在32位系统上是十进制的4294967295，其dechex()的结果为ffffffff。

注意：PHP的Integer类型是有符号的，但是dechex()只能处理无符号整数，负整数会以无符号来处理。

范例：

&lt;?php
  echo dechex ( 10 ) . "\n" ;
  echo dechex ( 58 );
以上程序语句会依次输出：a, 3a

4.十六进制：

4.1.十六进制转二进制：

函数：hex2bin(string $data);   转换十六进制字符串为二进制字符串

@param  $data  使用十六进制表示的数据。
@return    返回给定数据的二进制字符串或者在失败时返回FALSE。

函数说明：

如果输入的十六进制字符串是奇数长度或者是无效的十六进制字符串，则会抛出一个E_WARNING级别的错误。

范例：

&lt;?php
  $hex = hex2bin ( "6368656e67206475" );
  echo $hex;
以上程序语句会输出:cheng du

4.2十六进制转十进制：

函数：hexdec(string $hex_string);   转换十六进制字符串为二进制字符串

@param  $hex_string 将要转换的十六进制的字符串。
@return    返回与$hex_string参数所表示的十六进制数等值的十进制数。

函数说明：

hexdec()会忽略它遇到的任意非十六进制的字符。

PHP 4.1.0 开始，该函数可以处理 integer大数字，这种情况下，它会返回float类型。

范例：

&lt;?php
  var_dump ( hexdec ( "See" ));
  var_dump ( hexdec ( "ee" ));
  // 上面两个都输出: "int(238)"
  var_dump ( hexdec ( "that" )); // 输出"int(10)"
  var_dump ( hexdec ( "a0" )); // 输出"int(160)"
  //通过上面的例子可以看出来：hexdec()会忽略它遇到的任意非十六进制的字符。
5.任意进制转换的base_convert() 函数：

函数：base_convert(string $number, int $frombase, int $tobase)

@param $number 将要转换的的数。
@param  $frombase参数$number的进制。
@param  $tobase 将要转换成的进制。
@return   返回一个包含$number以$tobase进制表示的字符串。

函数说明：

$number本身的进制由$formbase来指定。
$formbase和$tobase都只能是2和36（包括2和36）之间的整数值。

注意：由于使用内部的 "double" 或 "float" 类型，base_convert()的操作可能会导致大数值中的精度丢失。

范例：

&lt;?php
  $hexadecimal = 'A37334' ;
  echo base_convert ( $hexadecimal , 16 , 2 );
  //print 101000110111001100110100
  echo base_convert ( $hexadecimal , 16 , a);
  //print 10711860
&lt;?php
  $hexadecimal = 'A37334' ;
  echo base_convert ( $hexadecimal , 16 , 2 );
  //print 101000110111001100110100
  echo base_convert ( $hexadecimal , 16 , a);
  //print 10711860
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、美-网" tabindex="-1"><a class="header-anchor" href="#五、美-网" aria-hidden="true">#</a> 五、美*网</h2>
<p>笔试题：</p>
<h4 id="_1、打印前一天的日期时间格式-2016-03-18-10-15-12-打印上个月的最后一天的日期" tabindex="-1"><a class="header-anchor" href="#_1、打印前一天的日期时间格式-2016-03-18-10-15-12-打印上个月的最后一天的日期" aria-hidden="true">#</a> 1、打印前一天的日期时间格式：2016.03.18 10:15:12，打印上个月的最后一天的日期</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.获取上个月第一天及最后一天.

echo date('Y-m-01', strtotime('-1 month'));
echo "&lt;br/>";
echo date('Y-m-t', strtotime('-1 month'));
echo "&lt;br/>";

2.获取当月第一天及最后一天
$BeginDate=date('Y-m-01', strtotime(date("Y-m-d")));
echo $BeginDate;
echo "&lt;br/>";
echo date('Y-m-d', strtotime("$BeginDate +1 month -1 day"));
echo "&lt;br/>";

3.获取当天年份、月份、日及天数.
echo " 本月共有:".date("t")."天";
echo " 当前年份".date('Y');
echo " 当前月份".date('m');
echo " 当前几号".date('d');
echo "&lt;br/>";

4.使用函数及数组来获取当月第一天及最后一天,比较实用,出自网友.

function getthemonth($date)//$date的格式是yyyy-mm-dd{
    $firstday = date('Y-m-01', strtotime($date));
    $lastday = date('Y-m-d', strtotime("$firstday +1 month -1 day"));
    return array($firstday,$lastday);
}
$today = date("Y-m-d");
$day=getthemonth($today);
echo "当月的第一天: ".$day[0]." 当月的最后一天: ".$day[1];
echo "&lt;br/>";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、说出-empty-isset-array-key-exits-的区别" tabindex="-1"><a class="header-anchor" href="#_2、说出-empty-isset-array-key-exits-的区别" aria-hidden="true">#</a> 2、说出 empty()，isset() array_key_exits();的区别</h4>
<h4 id="_3、浏览器地址栏输入-www-baidu-com-以后发生的事情-和用到的协议" tabindex="-1"><a class="header-anchor" href="#_3、浏览器地址栏输入-www-baidu-com-以后发生的事情-和用到的协议" aria-hidden="true">#</a> 3、浏览器地址栏输入 www.baidu.com 以后发生的事情，和用到的协议</h4>
<h4 id="_4、从连接中-a-href-www-meicai-com-index-html-提取出url" tabindex="-1"><a class="header-anchor" href="#_4、从连接中-a-href-www-meicai-com-index-html-提取出url" aria-hidden="true">#</a> 4、从连接中（&lt; a href=‘www.meicai.com/index.html’&gt;）提取出url</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$str = "&lt; a href='www.meicai.com/index.html'>";
preg_match("/.*?href=\'(.*?)\'/",$str,$res);
var_dump($res[1]);
// array(2) {
//   [0]=>
//   string(36) "&lt; a href='www.meicai.com/index.html'"
//   [1]=>
//   string(25) "www.meicai.com/index.html"
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、php发送请求的方法-有什么不同点" tabindex="-1"><a class="header-anchor" href="#_5、php发送请求的方法-有什么不同点" aria-hidden="true">#</a> 5、PHP发送请求的方法，有什么不同点</h4>
<h4 id="_6、写出10个mysql-的字段类型-说明使用场景" tabindex="-1"><a class="header-anchor" href="#_6、写出10个mysql-的字段类型-说明使用场景" aria-hidden="true">#</a> 6、写出10个mysql 的字段类型，说明使用场景</h4>
<p>int</p>
<p>smallint</p>
<p>tinyint</p>
<p>varchar</p>
<p>char</p>
<p>text</p>
<p>bigint</p>
<p>enum</p>
<p>mediuint</p>
<p>float</p>
<p>decimal</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/v2-1c20d584ac47cb6bab1a496dc83ecb83_720w.jpg" alt="img"></p>
<p>表示小数的一共有三种类型：float是单精度，double是双精度，decimal是数字型，它们所占的内存空间不一样，表示的位数也不一样。</p>
<p>1、精度：</p>
<ul>
<li>float单精度小数部分能精确到小数点后面6位，用 32 位二进制进行描述</li>
<li>double双精度小数部分能精确到小数点后的15位，，用64位二进制进行描述，比float型更精确</li>
</ul>
<p>2、占内存及处理速度：</p>
<ul>
<li>float单精度内存占4个字节</li>
<li>double双精度内存占8个字节，是float型的两倍，且运算速度也比float慢得多</li>
</ul>
<p>结论：虽然double型比float型精度高，但由于占内存更大，运算速度慢，且即使是double依然会存在精度损失的问题，且不会报告任何的错误，也不会有任何的异常产生。所以如果涉及到小数计算的话，我们会用到下边的decimal型：</p>
<p>1、精度：</p>
<p>decimal用l128位高精度浮点数，常用于金融运算，不会出现浮点数计算的误差</p>
<p>2、占内存及处理速度：</p>
<p>decimal类型的数据存储形式是，将每9位十进制数存储为4个字节</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/v2-0c98ce4d108068a6cc3704b6659c4e32_720w.jpg" alt="img"></p>
<p>举个例子：
1）字段decimal(5,2)，5-2=3，其中小数部分为2，对应上表1个字节，整数部分为3，对应上表2个字节
2）字段decimal(20,6)，20-6=14，其中小数部分为6，就对应上表中的3个字节，而整数部分为14，14-9=5，就是4个字节再加上表中的3个字节</p>
<p>结论：decimal型比浮点型计算精度要高，通常使用更少的空间。所以通常我们在设置小数的时候，都是用的decimal类型。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>A、数字类型：
整型
Int：4字节，最大空间长度为11，范围（-2147483648~2147483647）
Tinyint：1字节，最大长度为255，范围（-128~127）
Smallint：2字节，最大长度为65535，范围（-32768~32767）
浮点型
Float：4字节，单精度浮点型
Decimal：8字节，是存储为字符串的浮点数
值得注意的是：整型字段实际上设置长度并不能影响他们的存储数据长度。
既你设置了Int(1) 也一样可以存储数据为 100超越个位的数

B、字符串类型：
Char：必须设置长度，最大255个字符
Varchar：必须设置长度，最大65535个字符
Text：长度必须为空，最大65535个字符
MEDIUMTEXT：长度必须为空，最大2的24次方-1个字符
值得注意的是：字符串类型的长度所指的并不是字节，而是字符，既不管汉字英文还是数字，
都各占一个字符，而存储的空间，则是依据对应的字符的编码集来计算字节数。
并且当长度大约255字符时，每个字符的存储空间将增加2个字节数。

3、简单的说下个个字段的应用场景：
int，可用于存储时间戳与自增ID主键
Tinyint，一般只用于状态字段，比如订单状态识别，账号安全级别等
Decimal：常用于返点率，订单金额存储
Char：常用于主键不自增ID，还有订单编号存储，简单的msg记录等
Varchar：不建议超过1024长度，否则使用Text字段代替，常用于内容描述或摘要存储，中长度msg存储，中长度json数据存储。
Text：超长度json数据存储，中长度文本内容存储
MEDIUMTEXT：超长度log、json，文本内容存储

4、值得注意的是：
本文并没有介绍时间类型为常用的字段类型，因为MySql中Time类型是有许多暗藏的缺陷，所以并不推荐大家使用，
在时间开发中要是用到时间存储的话，推荐使用Int(10)存储相应的时间戳，
而真要能用到时间类型的场景只有以下一个：
就是你存储log日志，并无其他表相关链接的情况下，可以使用Timestamp类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、一个数据表-70个字段-10g的数据量-每天50w的数据增量-说出有哪些优化的方法-暂无答案" tabindex="-1"><a class="header-anchor" href="#_7、一个数据表-70个字段-10g的数据量-每天50w的数据增量-说出有哪些优化的方法-暂无答案" aria-hidden="true">#</a> 7、一个数据表，70个字段，10G的数据量，每天50w的数据增量，说出有哪些优化的方法（暂无答案）</h4>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220204134750147.png" alt="image-20220204134750147"></p>
<h4 id="_8、写一个定时任务-每天2点到8点-每隔10分钟调用一次php脚本-data-www-test-php" tabindex="-1"><a class="header-anchor" href="#_8、写一个定时任务-每天2点到8点-每隔10分钟调用一次php脚本-data-www-test-php" aria-hidden="true">#</a> 8、写一个定时任务，每天2点到8点，每隔10分钟调用一次PHP脚本 /data/www/test.php</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>crontab -e
10 2-8 * * * php /data/www/test.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、写出查看php-fpm进程数的linux命令" tabindex="-1"><a class="header-anchor" href="#_9、写出查看php-fpm进程数的linux命令" aria-hidden="true">#</a> 9、写出查看php-fpm进程数的linux命令</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ps -aux | grep php-fpm | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_10、写一个函数-判断重一副扑克牌中随机抽出的5张牌是不是顺子-顺子的定义-5张牌是连续的牌比如-23456-其中2-10是原数字-a是1-j是11-q是12-k是13-小王大王是任意数。" tabindex="-1"><a class="header-anchor" href="#_10、写一个函数-判断重一副扑克牌中随机抽出的5张牌是不是顺子-顺子的定义-5张牌是连续的牌比如-23456-其中2-10是原数字-a是1-j是11-q是12-k是13-小王大王是任意数。" aria-hidden="true">#</a> 10、写一个函数，判断重一副扑克牌中随机抽出的5张牌是不是顺子，顺子的定义：5张牌是连续的牌比如 23456 其中2-10是原数字，A是1，J是11，Q是12，k是13，小王大王是任意数。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$card_num = 54;
function wash_card($card_num){
	$cards = $tmp = array();

	for($i=1;$i&lt;=13;$i++){
		for($j=0;$j&lt;4;$j++){
			$tmp[] = $i;
		}
	}
	shuffle($tmp);
	return $tmp;
}

function get_card($card_num){
	$cards = wash_card($card_num);
	$arr = array_rand($cards,5);
	for($i=0;$i&lt;5;$i++){
		$data[] = $cards[$arr[$i]];
	}
	sort($data);
	var_dump($data);
	if(($data[4]-$data[0]) == 4){
		return "是顺子";
	}else{
		return "不是顺子";
	}
}

print_r(get_card($card_num));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、瓜子二手车" tabindex="-1"><a class="header-anchor" href="#六、瓜子二手车" aria-hidden="true">#</a> 六、瓜子二手车</h2>
<h4 id="_1、介绍一个写过的项目-画出架构和技术点" tabindex="-1"><a class="header-anchor" href="#_1、介绍一个写过的项目-画出架构和技术点" aria-hidden="true">#</a> 1、介绍一个写过的项目，画出架构和技术点</h4>
<h4 id="_2、coding-杨辉三角-求m行n列的值-暂无答案" tabindex="-1"><a class="header-anchor" href="#_2、coding-杨辉三角-求m行n列的值-暂无答案" aria-hidden="true">#</a> 2、coding 杨辉三角，求m行n列的值（暂无答案）</h4>
<p>前9层写出来如下：
　　　　　　　　１
　　　　　　　１　１
　　　　　　１　２　１
　　　　　１　３　３　１
　　　　１　４　６　４　１
　　　１　５　10　10　５　１
　　１　６　15　20　15　６　１
　１　７　21　35　35　21　７　１
１　８　28　56　70　56　28　８　１</p>
<hr>
<p><strong>递归法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>首先给大家介绍一种最简单的求杨辉三角mn值的方法（m为行，n为列，比如(5,3)即为第五行第三个，值为6）即为递归法：
function recursion($m, $n) {
    if ($n == 1 || $n == $m || $m == 1) {
        return 1;
    }

    $val = recursion($m-1, $n - 1) + recursion($m-1, $n);

    return $val;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法实现最简单，但是如果mn的值特别大的话，性能会非常差，我试了个100，78，就把机器卡死了。。</p>
<p><strong>迭代法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>迭代法从第一层开始循环，只循环每行中必要的列，最后求出mn位置的值。代码如下：
function setNum($row, $list)
{
    $arr = array();
    for ($i = 0; $i &lt; $row; $i++) {
        $start = ($list - ($row - $i)) &lt; 0 ? 0 : ($list - ($row - $i));
        $end = ($list - 1) > $i ? $i : ($list - 1);
        for ($j = $start; $j &lt;= $end; $j++) {
            if ($i == 0 || $i == 1 || $j == 0 || $i == $j) {
                $arr[$i][$j] = 1;
            } else {
                $arr[$i][$j] = $arr[$i - 1][$j] + $arr[$i - 1][$j - 1];
            }
        }
    }
    return $arr[--$row][--$list];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>公式法</strong></p>
<p>当然了，根据杨辉三角的性质:第n行的m个数可表示为 C(n-1，m-1),用排列组合的公式也可以获得mn的值，代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function express($m, $n) {
    $up = 1;
    for ($i = $m - 1; $i > ($m - $n); $i--) {
        $up *= $i;
    }


    $down = 1;
    for ($i = $n - 1; $i > 0; $i--) {
        $down *= $i;
    }

    return $up / $down;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、使用正则表达式判断ip的合法性-要考虑全面" tabindex="-1"><a class="header-anchor" href="#_3、使用正则表达式判断ip的合法性-要考虑全面" aria-hidden="true">#</a> 3、使用正则表达式判断ip的合法性，要考虑全面</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function is_ip($gonten){
	$ip=explode(”.”,$gonten);
	for($i=0;$i&lt;count($ip);$i++){
		if($ip[$i]>255){
			return(0);
		}
	}
	return ereg(”^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$”,$gonten);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、redis中数据存储方式-各种数据结构应用的场景-redis做消息队列与专业的消息队列有什么区别和优势" tabindex="-1"><a class="header-anchor" href="#_5、redis中数据存储方式-各种数据结构应用的场景-redis做消息队列与专业的消息队列有什么区别和优势" aria-hidden="true">#</a> 5、redis中数据存储方式，各种数据结构应用的场景，redis做消息队列与专业的消息队列有什么区别和优势</h4>
<h4 id="_6、最左原则的原理和sql的优化机制-什么时候不会用到索引。" tabindex="-1"><a class="header-anchor" href="#_6、最左原则的原理和sql的优化机制-什么时候不会用到索引。" aria-hidden="true">#</a> 6、最左原则的原理和sql的优化机制，什么时候不会用到索引。</h4>
<h4 id="_7、分条件查询的优化和系统设计与架构" tabindex="-1"><a class="header-anchor" href="#_7、分条件查询的优化和系统设计与架构" aria-hidden="true">#</a> 7、分条件查询的优化和系统设计与架构</h4>
<h4 id="_8、你最近学习的新技术-你对架构师的理解-你对go语言的理解-速度快吗-快在哪" tabindex="-1"><a class="header-anchor" href="#_8、你最近学习的新技术-你对架构师的理解-你对go语言的理解-速度快吗-快在哪" aria-hidden="true">#</a> 8、你最近学习的新技术，你对架构师的理解，你对GO语言的理解，速度快吗？快在哪？</h4>
<p>二面（技术面）：</p>
<h4 id="_1、一条sql语句的优化机制-大数据分页处理" tabindex="-1"><a class="header-anchor" href="#_1、一条sql语句的优化机制-大数据分页处理" aria-hidden="true">#</a> 1、一条sql语句的优化机制，大数据分页处理</h4>
<h4 id="_4、抓取-a-html页面-把含有a便签中的href全部抓取-如果url含有-guazi-com就把该条url标题上guazi-然后再抓取该链接对应的页面-这样不断的遵化你抓取-你怎样解决死循环问题和页面抓取效率问题。" tabindex="-1"><a class="header-anchor" href="#_4、抓取-a-html页面-把含有a便签中的href全部抓取-如果url含有-guazi-com就把该条url标题上guazi-然后再抓取该链接对应的页面-这样不断的遵化你抓取-你怎样解决死循环问题和页面抓取效率问题。" aria-hidden="true">#</a> 4、抓取 a.html页面，把含有a便签中的href全部抓取，如果url含有 guazi.com就把该条url标题上guazi，然后再抓取该链接对应的页面，这样不断的遵化你抓取，你怎样解决死循环问题和页面抓取效率问题。</h4>
<h2 id="七、百度外卖" tabindex="-1"><a class="header-anchor" href="#七、百度外卖" aria-hidden="true">#</a> 七、百度外卖</h2>
<h4 id="_1、说项目-介绍知识点-画结构图" tabindex="-1"><a class="header-anchor" href="#_1、说项目-介绍知识点-画结构图" aria-hidden="true">#</a> 1、说项目，介绍知识点，画结构图</h4>
<h4 id="_2、数据库最左原则含义用法" tabindex="-1"><a class="header-anchor" href="#_2、数据库最左原则含义用法" aria-hidden="true">#</a> 2、数据库最左原则含义用法</h4>
<h4 id="_3、一个日志文件-打印某一时刻的并发数-记录日志的条数" tabindex="-1"><a class="header-anchor" href="#_3、一个日志文件-打印某一时刻的并发数-记录日志的条数" aria-hidden="true">#</a> 3、一个日志文件，打印某一时刻的并发数（记录日志的条数）</h4>
<p>linux查看某个时间段的日志</p>
<p>cat syslog | sed -n '/Feb  4 07/p'</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20220204140023687.png" alt="image-20220204140023687"></p>
<p>删除某行
[root@localhost ruby] # sed '1d' ab       #删除第一行
[root@localhost ruby] # sed '$d' ab       #删除最后一行
[root@localhost ruby] # sed '1,2d' ab      #删除第一行到第二行
[root@localhost ruby] # sed '2,$d' ab      #删除第二行到最后一行</p>
<p>显示某行
.  [root@localhost ruby] # sed -n '1p' ab      #显示第一行
[root@localhost ruby] # sed -n '$p' ab      #显示最后一行
[root@localhost ruby] # sed -n '1,2p' ab    #显示第一行到第二行
[root@localhost ruby] # sed -n '2,$p' ab    #显示第二行到最后一行</p>
<p>使用模式进行查询
[root@localhost ruby] # sed -n '/ruby/p' ab  #查询包括关键字ruby所在所有行
[root@localhost ruby] # sed -n '/$/p' ab    #查询包括关键字$所在所有行，使用反斜线\屏蔽特殊含义</p>
<h4 id="_4、一个数组按照固定的值排序-按照id排序" tabindex="-1"><a class="header-anchor" href="#_4、一个数组按照固定的值排序-按照id排序" aria-hidden="true">#</a> 4、一个数组按照固定的值排序(按照id排序)</h4>
<p>$a = [
[‘abc’] =&gt; [‘id’ =&gt; 1, ‘value’ =&gt; 233],
[‘bcd’] =&gt; [‘id’ =&gt; 2, ‘value’ =&gt; 463]
]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$a = [
	'bcdddd' => ['id' => 4, 'value' => 463],
	'abc' => ['id' => 1, 'value' => 233],
	'bcd' => ['id' => 2, 'value' => 463],
	'dd' => ['id' => 5, 'value' => 463]
];
foreach($a as $k=>$v){
	$ids[$k] = $v['id'];
}

array_multisort($ids,SORT_ASC,$a);
var_dump($a);
// array(4) {
//   ["abc"]=>
//   array(2) {
//     ["id"]=>
//     int(1)
//     ["value"]=>
//     int(233)
//   }
//   ["bcd"]=>
//   array(2) {
//     ["id"]=>
//     int(2)
//     ["value"]=>
//     int(463)
//   }
//   ["bcdddd"]=>
//   array(2) {
//     ["id"]=>
//     int(4)
//     ["value"]=>
//     int(463)
//   }
//   ["dd"]=>
//   array(2) {
//     ["id"]=>
//     int(5)
//     ["value"]=>
//     int(463)
//   }
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二面-技术面" tabindex="-1"><a class="header-anchor" href="#二面-技术面" aria-hidden="true">#</a> 二面（技术面）：</h4>
<h4 id="_1、说说项目" tabindex="-1"><a class="header-anchor" href="#_1、说说项目" aria-hidden="true">#</a> 1、说说项目</h4>
<h4 id="_2、数据库最左原则" tabindex="-1"><a class="header-anchor" href="#_2、数据库最左原则" aria-hidden="true">#</a> 2、数据库最左原则</h4>
<h4 id="_3、数据库索引建立的原则" tabindex="-1"><a class="header-anchor" href="#_3、数据库索引建立的原则" aria-hidden="true">#</a> 3、数据库索引建立的原则</h4>
<h4 id="_4、数据库引擎-说出特点" tabindex="-1"><a class="header-anchor" href="#_4、数据库引擎-说出特点" aria-hidden="true">#</a> 4、数据库引擎，说出特点</h4>
<h4 id="_5、redis和mc的优缺点-都在什么场景下使用" tabindex="-1"><a class="header-anchor" href="#_5、redis和mc的优缺点-都在什么场景下使用" aria-hidden="true">#</a> 5、redis和MC的优缺点，都在什么场景下使用</h4>
<h4 id="_6、打印日志文件中-出现最多的前100个ip" tabindex="-1"><a class="header-anchor" href="#_6、打印日志文件中-出现最多的前100个ip" aria-hidden="true">#</a> 6、打印日志文件中，出现最多的前100个IP</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>如何在日志文件中查找出访问最多的前10个IP地址
 
我们开发时候经常会统计一些访问日志，访问日志中的url是海量的，并且好多是重复内容。以url为例，统计url中出现频率次数前10的url，并按出现次数的降序排序。

linux命令：

cat url.log | sort | uniq -c |sort -n -r -k 1 -t   ' ' | awk -F  '//'  '{print $2}' | head -10
现在来一一分析这些命令组合的含义。

1、原始访问日志
log

2、排序
cat  t1.log | sort
输入图片说明

表示对data文件中的内容进行排序。sort命令是对于每一行的内容根据字典序（ASCII码）进行排序，这样可以保证重复的记录时相邻的。

3、合并相邻重复记录，统计重复数
cat  t1.log | sort | uniq -c
这里，通过管道（|）将左边部分的命令的输出作为右边部分的输入。uniq -c 表示合并相邻的重复记录，并统计重复数。因为uniq -c 只会合并相邻的记录，所以在使用该命令之前需要先排序。

4、对记录重新排序，需要用到sort命令的 -k 1 、-n、-r 三个命令参数
cat  t1.log | sort | uniq -c | sort -k 1 -n -r
经过uniq -c 处理之后的数据格式形如"2 data"，第一个字段是数字，表示重复的记录数；第二个字段为记录的内容。我们将对此内容进行排序。sort -k 1表示对于每行的第一个字段进行排序，这里即指代表重复记录数的那个字段。因为sort命令的默认排序是按照ASCII，这就会导致按从大到小进行排序时，数值2会排在数值11的前面，所以需要使用-n 参数指定sort命令按照数值大小进行排序。-r 表示逆序，即按照从大到小的顺序进行排序。

5、使用awk -F命令分隔IP地址，并取数组的第二部分
cat  t1.log | sort  | uniq -c | sort -k 1 -n -r | awk -F '//'  '{print  $2}'
经过sort data | uniq -c | sort -k 1 -n -r 处理后的文本是 http://192.168.1.100 这样的格式，我们需要的结果是192.168.1.100这样的格式，需要去掉http://这些字段，采用awk才处理，awk -F '//' 是将http://192.168.1.100分组成2部分 http:// 和 192.168.1.100，{print  $2}的作用是取数组的第二部分，即192.168.1.100

6、使用head -n命令选取前n行
cat  t1.log | sort | uniq -c | sort -k 1 -n -r | awk -F '//'  '{print  $2}'| head -10
head 命令表示选取文本的前x行。通过head -10 就可以得到排序结果中前十行的内容。

7、上面 http://192.168.1.100 这样日志格式只是一个简单的示例，实际中的格式会比较复杂 如：/Get   http://192.168.1.100/auth, 我们可以通过awk -F 或者cut  -k 命令来截取url。详情参考awk、cut 命令使用方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、说出linux中常用的命令" tabindex="-1"><a class="header-anchor" href="#_7、说出linux中常用的命令" aria-hidden="true">#</a> 7、说出linux中常用的命令</h4>
<h4 id="_8、php-和其他语言不同的地方-php中弱类型的实现-太难" tabindex="-1"><a class="header-anchor" href="#_8、php-和其他语言不同的地方-php中弱类型的实现-太难" aria-hidden="true">#</a> 8、php 和其他语言不同的地方，PHP中弱类型的实现（太难）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>实现php弱类型变量的方法：1、通过Zend引擎用C实现弱类型，在ZE中用结构体zval来保存；2、通过Zend引擎是判别、存储PHP中的多种数据类型，根据type来选择获取【zvalue_value】的值。

b5a62f22c55e11bd144afc9b697ff20e.png

实现php弱类型变量的方法：

PHP是弱类型，动态的语言脚本。在申明一个变量的时候，并不需要指明它保存的数据类型。例如：&lt;?php

$var = 1;

$var = "variable";

$var = 1.00;

$var = array();

$var = new Object();

动态变量，在运行期间是可以改变的，并且在使用前无需声明变量类型。

问题一、Zend引擎是如何用C实现这种弱类型的呢？

实际上，在PHP中声明的变量，在ZE中都是用结构体zval来保存的。

首先我们打开Zend/zend.h来看zval的定义：typedef struct _zval_struct zval;

struct _zval_struct {
/* Variable information */

zvalue_value value; /* value */

zend_uint refcount__gc;

zend_uchar type; /* active type */

zend_uchar is_ref__gc;

};

typedef union _zvalue_value {
long lval; /* long value */

double dval; /* double value */

struct {
char *val;

int len;

} str;

HashTable *ht; /* hash table value */

zend_object_value obj;

} zvalue_value;

Zend/zend_types.h：typedef unsigned char zend_bool;

typedef unsigned char zend_uchar;

typedef unsigned int zend_uint;

typedef unsigned long zend_ulong;

typedef unsigned short zend_ushort;

从上述代码中，可以看到_zvalue_value是真正保存数据的关键部分。通过共用体实现的弱类型变量声明

问题二、Zend引擎是如何判别、存储PHP中的多种数据类型的呢？

_zval_struct.type中存储着一个变量的真正类型，根据type来选择如何获取zvalue_value的值。

type值列表(Zend/zend.h)：#define IS_NULL 0

#define IS_LONG 1

#define IS_DOUBLE 2

#define IS_BOOL 3

#define IS_ARRAY 4

#define IS_OBJECT 5

#define IS_STRING 6

#define IS_RESOURCE 7

#define IS_CONSTANT 8

#define IS_CONSTANT_ARRAY 9

来看一个简单的例子：&lt;?php

$a = 1;

//此时zval.type = IS_LONG,那么zval.value就去取lval.

$a = array();

//此时zval.type = IS_ARRAY,那么zval.value就去取ht.

这其中最复杂的，并且在开发第三方扩展中经常需要用到的是”资源类型”.

在PHP中，任何不属于PHP的内建的变量类型的变量，都会被看作资源来进行保存。

比如：数据库句柄、打开的文件句柄、打开的socket句柄。

资源类型，会用lval，此时它是一个整型指示器， 然后PHP会再根据这个指示器在PHP内建的一个资源列表中查询相对应的资源。

正是因为ZE这样的处理方式，使PHP就实现了弱类型，而对于ZE的来说，它所面对的永远都是同一种类型zval。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、c语言中结构体和共用体的区别-每个占用多少内存-二者已给出" tabindex="-1"><a class="header-anchor" href="#_9、c语言中结构体和共用体的区别-每个占用多少内存-二者已给出" aria-hidden="true">#</a> 9、C语言中结构体和共用体的区别，每个占用多少内存（二者已给出）</h4>
<p>C语言结构体占用内存原理解析
结构体内存原理解析：
共用体内存原理解析：
结构体内存原理解析：
结构体在内存中的存储有以下规则：</p>
<p>结构体成员中的其实地址应该是该成员所占内存的整数倍，如果不足整数倍需要补齐
结构体所占内存为结构体成员中最大基础数据类型的整数倍。
这里说下基础类型：int,char,long,long long,double,float
规则1解析：
typedef struct{
char a;
int b;
}Msg;</p>
<p>结构体Msg在内存中的存储方式如下图所示：</p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211226192613174.png" alt="image-20211226192613174"></p>
<p>a占用了第0个字节，b并没有占用第一个字节，因为b的起始位置要是b的整数倍，所以b空了3个字节占用了4,5,6,7字节。所以这个结构体sizeof的结果就是8；
规则2解析：</p>
<p>typedef struct {
int a;
char c[6];</p>
<p>}Data;
typedef struct{
double head;
Data data;
}Msg;</p>
<p>结构体Msg的存储方式如下：</p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211226192629405.png" alt="image-20211226192629405"></p>
<p>head占用了0-7共8个字节，结构体Data中的成员a占用了8-11共4个字节字符串c占用了12-17共6个字节，此时该结构体共占内存18个字节，但是规则2中规定了结构所占内存为成员中最大基本类型的整数倍，最小基准类型为double,所以为8的整数倍2乘以8&lt;18&lt;3乘以8;故此结构体Msg占内存3*8=24个字节。如果子结构体中的成员类型为最大基本类型，那么结构体所占内存就是子结构体中最大基本类型的整数倍。下面举例：</p>
<p>typedef struct {
double a;
char c[3];</p>
<p>}Data;
typedef struct{
int head;
Data data;
}Msg;</p>
<p>结构体Msg的存储方式如下：</p>
<p><img src="@source/docs/theme-reco/img/最高级多方面面试题/image-20211226192642936.png" alt="image-20211226192642936"></p>
<p>head占用4个字节，子结构体成员a占用8个字节此时注意规则1，所以空4个字节从8-15存储a，字符串的基本类型是char所以不用空，共占用19个字节下面考虑对其补齐：</p>
<p>如果按照结构体成员最大类型int为最大基本类型算出来所占内存就是20字节；
如果按照最大类型为子结构体（子结构体所占内存为16字节）为最大类型算出来所占内存就是就是32字节；
如果按照子结构体和子结构体成员基本类型为最大类型（double为最大基本类型）那么算出所占内存就为24字节。
上面总结了三种对其方式C语言中的对其补齐方式，C语言中的补齐方式为第3种，前2种也是读者在计算结构体占用内存可能出现错误的地方。所以规则2中强调的是基本类型，不包括结构体，共用体这种。
通过上面的存储方式分析，希望读者在定义结构体时成员顺序要有考量，否则会导致无效的内存占用：</p>
<p>typedef struct{
char b;
int head;
char a;
}Msg;</p>
<p>上面这么定义结构体占用内存空间为12字节；
下面两种定义方式结构体占用内存空间为8字节；</p>
<p>typedef struct{
int head;
char b;
char a;
}Msg;</p>
<p>typedef struct{
char b;
char a;
int head;
}Msg;</p>
<p>共用体内存原理解析：
共用体多个数据成员只能同时存在一种，并不是将空间分配给每个成员，而是只按照最大成员的大小分配内存空间。如果共用体中出现结构体，那么就先算出结构体所占空间，和其他成员比较所占内存大小，按照最大的成员分配内存空间。</p>
<p>共同体作用：让几个不同类型的变量共享同一个内存地址。
共用体所占内存大小：共用体所占内存的大小即公用体中长度最大元素所占用的字节数。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#include&lt;stdio.h>
typedef union
{ 
	long i; 
	double dog; 
	int k[6]; //4*6=24
	char c;
}DATE;
struct data
{ 
	char *a;//8,本机指针占用8字节 
	int cat; //4  +4
	DATE cow; //24,前面刚好是8(double)的倍数 
	double dog;//8
	char a1; //1 +1
	short dom;//2
}too;
main()
{
	printf("%d\n",sizeof(DATE));//共用体所占内存的大小即公用体中长度最大元素所占用的字节数。
	printf("%d\n",sizeof(too));//56
 } 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、有没有自己写的一些作品-或者开源的东西" tabindex="-1"><a class="header-anchor" href="#_10、有没有自己写的一些作品-或者开源的东西" aria-hidden="true">#</a> 10、有没有自己写的一些作品，或者开源的东西</h4>
<h4 id="_11、系统设计-百度外卖活动中的秒杀怎么设计-注意点是什么" tabindex="-1"><a class="header-anchor" href="#_11、系统设计-百度外卖活动中的秒杀怎么设计-注意点是什么" aria-hidden="true">#</a> 11、系统设计：百度外卖活动中的秒杀怎么设计，注意点是什么</h4>
<h4 id="三面-技术面" tabindex="-1"><a class="header-anchor" href="#三面-技术面" aria-hidden="true">#</a> 三面（技术面）：</h4>
<h4 id="_1、介绍做的项目-画出你做的一个模块的流程和开发关键点" tabindex="-1"><a class="header-anchor" href="#_1、介绍做的项目-画出你做的一个模块的流程和开发关键点" aria-hidden="true">#</a> 1、介绍做的项目，画出你做的一个模块的流程和开发关键点</h4>
<h4 id="_2、有没有学习新的东西-比如新的技术-语言" tabindex="-1"><a class="header-anchor" href="#_2、有没有学习新的东西-比如新的技术-语言" aria-hidden="true">#</a> 2、有没有学习新的东西，比如新的技术，语言</h4>
<h4 id="_3、go-语言看过吗-有什么优点-用在什么地方合适" tabindex="-1"><a class="header-anchor" href="#_3、go-语言看过吗-有什么优点-用在什么地方合适" aria-hidden="true">#</a> 3、GO 语言看过吗，有什么优点，用在什么地方合适</h4>
<h4 id="_4、为什么选择百度外卖" tabindex="-1"><a class="header-anchor" href="#_4、为什么选择百度外卖" aria-hidden="true">#</a> 4、为什么选择百度外卖</h4>
<h4 id="_5、为什么不愿意留在原公司-离职的原因在哪" tabindex="-1"><a class="header-anchor" href="#_5、为什么不愿意留在原公司-离职的原因在哪" aria-hidden="true">#</a> 5、为什么不愿意留在原公司，离职的原因在哪</h4>
<h4 id="四面-技术面" tabindex="-1"><a class="header-anchor" href="#四面-技术面" aria-hidden="true">#</a> 四面（技术面）：</h4>
<h4 id="_1、介绍一个最深刻的项目-说出技术点" tabindex="-1"><a class="header-anchor" href="#_1、介绍一个最深刻的项目-说出技术点" aria-hidden="true">#</a> 1、介绍一个最深刻的项目，说出技术点</h4>
<h4 id="_3、以后有什么打算-学习的目标或者是自己的规划目标" tabindex="-1"><a class="header-anchor" href="#_3、以后有什么打算-学习的目标或者是自己的规划目标" aria-hidden="true">#</a> 3、以后有什么打算，学习的目标或者是自己的规划目标</h4>
<h4 id="_4、收到的offer都有哪些-为什么没有选择这些公司" tabindex="-1"><a class="header-anchor" href="#_4、收到的offer都有哪些-为什么没有选择这些公司" aria-hidden="true">#</a> 4、收到的offer都有哪些，为什么没有选择这些公司</h4>
<h4 id="_5、原来后台项目有多少个人-每一个人的技术实力在哪" tabindex="-1"><a class="header-anchor" href="#_5、原来后台项目有多少个人-每一个人的技术实力在哪" aria-hidden="true">#</a> 5、原来后台项目有多少个人，每一个人的技术实力在哪</h4>
<h2 id="八、小米科技" tabindex="-1"><a class="header-anchor" href="#八、小米科技" aria-hidden="true">#</a> 八、小米科技</h2>
<h4 id="一面-技术面-1" tabindex="-1"><a class="header-anchor" href="#一面-技术面-1" aria-hidden="true">#</a> 一面（技术面）：</h4>
<h4 id="_1、写一个类-一个单例类-输入两个数组-arr1-arr2-每个数组中存有整数-0-9-这个类提供两个方法-一个是排序-arr1-一个是把两个数组当成两个大数然后进行相减-返回结果-第一个数组如果是-5-2-3-4-相当于数字-5234" tabindex="-1"><a class="header-anchor" href="#_1、写一个类-一个单例类-输入两个数组-arr1-arr2-每个数组中存有整数-0-9-这个类提供两个方法-一个是排序-arr1-一个是把两个数组当成两个大数然后进行相减-返回结果-第一个数组如果是-5-2-3-4-相当于数字-5234" aria-hidden="true">#</a> 1、写一个类，一个单例类，输入两个数组，$arr1, $arr2，每个数组中存有整数（0-9）， 这个类提供两个方法，一个是排序$arr1，一个是把两个数组当成两个大数然后进行相减，返回结果（第一个数组如果是[5, 2, 3, 4] ,相当于数字：5234）</h4>
<h4 id="_2、讲解做的项目-讲述知识点和自己的贡献。" tabindex="-1"><a class="header-anchor" href="#_2、讲解做的项目-讲述知识点和自己的贡献。" aria-hidden="true">#</a> 2、讲解做的项目，讲述知识点和自己的贡献。</h4>
<h4 id="_3、数据库中两个笛卡尔积在join中的体现-说出left-join的中间过程" tabindex="-1"><a class="header-anchor" href="#_3、数据库中两个笛卡尔积在join中的体现-说出left-join的中间过程" aria-hidden="true">#</a> 3、数据库中两个笛卡尔积在join中的体现，说出left join的中间过程</h4>
<h4 id="_4、最左原则的意义-数据库索引的使用情况和优化" tabindex="-1"><a class="header-anchor" href="#_4、最左原则的意义-数据库索引的使用情况和优化" aria-hidden="true">#</a> 4、最左原则的意义，数据库索引的使用情况和优化</h4>
<h4 id="_5、网站打开慢的原因和解决办法" tabindex="-1"><a class="header-anchor" href="#_5、网站打开慢的原因和解决办法" aria-hidden="true">#</a> 5、网站打开慢的原因和解决办法</h4>
<h4 id="二面-技术面-1" tabindex="-1"><a class="header-anchor" href="#二面-技术面-1" aria-hidden="true">#</a> 二面（技术面）：</h4>
<h4 id="_1、讲解项目的架构-redis在项目中的使用情况" tabindex="-1"><a class="header-anchor" href="#_1、讲解项目的架构-redis在项目中的使用情况" aria-hidden="true">#</a> 1、讲解项目的架构，redis在项目中的使用情况</h4>
<h4 id="_2、为什么不留在原来的平台" tabindex="-1"><a class="header-anchor" href="#_2、为什么不留在原来的平台" aria-hidden="true">#</a> 2、为什么不留在原来的平台</h4>
<h4 id="_3、数据库事务原理-是否使用过" tabindex="-1"><a class="header-anchor" href="#_3、数据库事务原理-是否使用过" aria-hidden="true">#</a> 3、数据库事务原理，是否使用过</h4>
<h4 id="三面-技术面-1" tabindex="-1"><a class="header-anchor" href="#三面-技术面-1" aria-hidden="true">#</a> 三面（技术面）：</h4>
<h4 id="_1、数据库优化-索引建立原则" tabindex="-1"><a class="header-anchor" href="#_1、数据库优化-索引建立原则" aria-hidden="true">#</a> 1、数据库优化，索引建立原则</h4>
<h4 id="_32-myisam-索引实现" tabindex="-1"><a class="header-anchor" href="#_32-myisam-索引实现" aria-hidden="true">#</a> 32.MyISAM 索引实现？</h4>
<h4 id="_2、数据库事务的含义" tabindex="-1"><a class="header-anchor" href="#_2、数据库事务的含义" aria-hidden="true">#</a> 2、数据库事务的含义</h4>
<h4 id="_3、redis与mc的区别-redis支持的数据结构有哪些" tabindex="-1"><a class="header-anchor" href="#_3、redis与mc的区别-redis支持的数据结构有哪些" aria-hidden="true">#</a> 3、redis与MC的区别，redis支持的数据结构有哪些</h4>
<h4 id="_4、框架使用-优缺点" tabindex="-1"><a class="header-anchor" href="#_4、框架使用-优缺点" aria-hidden="true">#</a> 4、框架使用，优缺点</h4>
<h4 id="_5、php中的魔术方法" tabindex="-1"><a class="header-anchor" href="#_5、php中的魔术方法" aria-hidden="true">#</a> 5、PHP中的魔术方法</h4>
<h4 id="_6、是否使用过前端框架-js-jquery是否学习过" tabindex="-1"><a class="header-anchor" href="#_6、是否使用过前端框架-js-jquery是否学习过" aria-hidden="true">#</a> 6、是否使用过前端框架，js，jquery是否学习过</h4>
<h4 id="四面-技术面-1" tabindex="-1"><a class="header-anchor" href="#四面-技术面-1" aria-hidden="true">#</a> 四面（技术面）：</h4>
<h4 id="_1、为什么来小米网-对我们了解多少" tabindex="-1"><a class="header-anchor" href="#_1、为什么来小米网-对我们了解多少" aria-hidden="true">#</a> 1、为什么来小米网，对我们了解多少</h4>
<h4 id="_2、给两个数组得到交集-各自的差集" tabindex="-1"><a class="header-anchor" href="#_2、给两个数组得到交集-各自的差集" aria-hidden="true">#</a> 2、给两个数组得到交集，各自的差集</h4>
<h4 id="_3、给两张表-得到各自的交集和差集" tabindex="-1"><a class="header-anchor" href="#_3、给两张表-得到各自的交集和差集" aria-hidden="true">#</a> 3、给两张表，得到各自的交集和差集</h4>
<p>[b]需求：从两个不同的结果集（一个是子集，一个是父集），字段为电话号码phone_number,找出父集中缺少的电话号码，以明确用户身份。
结合网上资料，整理sql如下：[/b]</p>
<p>//[b]mysql取差集[/b]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>select num FROM(select u.code_sn as id,u.phone_number as num from t1 bleft join t2 uon b.from_user=u.code_snwhere b.to_account='1000' and b.json_info like '%09月份%'

union all

select u.code_sn as id,u.phone_number as num from t3 oleft join t2 uon o.buyer_code_sn=u.code_snwhere o.seller_account_code_sn='1000' and o.json_info like '%09月份%' )t3group by num having count(num)=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//[b]mysql取交集[/b]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>select num FROM(select u.code_sn as id,u.phone_number as num from t1 bleft join t2 uon b.from_user=u.code_snwhere b.to_account='1000' and b.json_info like '%09月份%'union allselect u.code_sn as id,u.phone_number as num from t1 oleft join t2 uon o.buyer_code_sn=u.code_snwhere o.seller_account_code_sn='1000' and o.json_info like '%09月份%' )t3group by num having count(num)=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>//[b]mysql取并集[/b]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>select num FROM(select u.code_sn as id,u.phone_number as num from t1 bleft join t2 uon b.from_user=u.code_snwhere b.to_account='1000' and b.json_info like '%09月份%'union all select u.code_sn as id,u.phone_number as num from t1 oleft join t2 uon o.buyer_code_sn=u.code_sn where o.seller_account_code_sn='1000' and o.json_info like '%09月份%' )t3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、数据库索引的字段-哪些会用到索引-该怎样查看。" tabindex="-1"><a class="header-anchor" href="#_4、数据库索引的字段-哪些会用到索引-该怎样查看。" aria-hidden="true">#</a> 4、数据库索引的字段，哪些会用到索引，该怎样查看。</h4>
<h4 id="_5、php短标签-怎样开启。结束标签有什么影响" tabindex="-1"><a class="header-anchor" href="#_5、php短标签-怎样开启。结束标签有什么影响" aria-hidden="true">#</a> 5、PHP短标签，怎样开启。结束标签有什么影响</h4>
<p>short_open_tag = On</p>
<h4 id="_6、session和cookie的区别于联系-怎样保证集群下的session同步的问题" tabindex="-1"><a class="header-anchor" href="#_6、session和cookie的区别于联系-怎样保证集群下的session同步的问题" aria-hidden="true">#</a> 6、session和cookie的区别于联系，怎样保证集群下的session同步的问题</h4>
<h4 id="_7、对架构师的理解-你认为怎样才能达到架构师" tabindex="-1"><a class="header-anchor" href="#_7、对架构师的理解-你认为怎样才能达到架构师" aria-hidden="true">#</a> 7、对架构师的理解，你认为怎样才能达到架构师</h4>
<h4 id="_8、div-怎样实现三栏式布局" tabindex="-1"><a class="header-anchor" href="#_8、div-怎样实现三栏式布局" aria-hidden="true">#</a> 8、div 怎样实现三栏式布局</h4>
<p>常见的布局方式: float布局、Position定位、table布局、弹性(flex)布局、网格(grid)布局</p>
<p>那么我们就是用以上5种方式完成三栏布局，不过前提是左右宽度(假如左右宽度为300px),整个高度已知(假如高度为100px)，中间宽度自适应</p>
<h5 id="_1、float布局" tabindex="-1"><a class="header-anchor" href="#_1、float布局" aria-hidden="true">#</a> 1、float布局:</h5>
<p>float最初的设计的初衷是为了解决文字环绕的问题 ，即给一个图片设置float属性之后会使文字环绕在图片周围显示。float之所以可以实现文字环绕是源于设置float属性的元素可以脱离文档流，使父元素高度塌陷。</p>
<p>好了知道了float的作用之后我们来实现三栏布局。</p>
<p>首先先 写html模版代码如下:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>浮动实现三栏布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>中
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>浮动布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>html模版写好，那么我们开始实现CSS样式:</p>
<p>这里我们给左右两栏设置float属性使其脱离文档流左边栏设置 float:left, 右边栏设置float: right ,由于宽度高度已知所以我们可以给其设置指定的宽高 width:300px, height:100px</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #631D9F<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>现在两侧的样式写好了,那么我们来写中间的样式,</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.center{
    margin-left: 300px;
    margin-right: 300px;
    background-color: #4990E2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>这里为什么要设置margin-left、和margin-right呢？ 如果动手写这个代码的小伙伴会发现不设置这两个属性效果在中间元素内容比较少的时候效果是正常的，但是如果如果中间元素的子元素内容特别多的时候会出现如下情况:如下图:</p>
<p><img src="https://img-blog.csdnimg.cn/20190616145846121.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzMTk4Mzk2,size_16,color_FFFFFF,t_70" alt="img"><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>所以这两个属性还是需要添加的。到此位置float实现三栏布局已经OK了，这里特别提醒由于我们使用了float, 所以为了不影响其他元素的显示这里需要清除浮动,清除浮动的方式有很多大家可以自行搜索使用我这里使用伪元素的方式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.main::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<h5 id="_2、position布局" tabindex="-1"><a class="header-anchor" href="#_2、position布局" aria-hidden="true">#</a> 2、Position布局:</h5>
<p>首先先写html模版:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    *{
        margin: 0;
        padding: 0;
    }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>中
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>绝对定位<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>position是设置元素定位类型的那么我们该用那种定位呢？ 这里我们可以简单了解一下属性的类型</p>
<p>position其属性有5种 :</p>
<p>​    inherit: 继承父元素的position属性值</p>
<p>static: 默认值，没有定位</p>
<p>fixed: 生成绝对定位的元素,相对于浏览器窗口进行定位（不管屏幕内容怎么滑动,其位置不会改变）</p>
<p>relative:生成相对定位,相对于其正常位置进行定位</p>
<p>absolute:生成绝对定位的元素,相当于static定位以外的第一个父元素进行定位。</p>
<p>根据以上内容我们可以看出我们需要选择给 左 中 右 都使用 absolute 绝对定位，由于absolute 是相当于static定位以外的第一个父元素进行定位，所以我们要给其父元素添加 position:relative属性, 这样这三个子元素可以相对于父元素进行绝对定位。</p>
<p>由此我们可以很简单的写出CSS样式:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #3A2CAC<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>只要理解了position属性的含义这种方式写起来就比较简单</p>
<h5 id="_3、table布局" tabindex="-1"><a class="header-anchor" href="#_3、table布局" aria-hidden="true">#</a> 3、table布局:</h5>
<p>首先先写html模版: 这里的html模版和 position使用的html一样,这里就不复制代码了。</p>
<p>table是一种常见的布局方式,他可以将整个页面按照表格的方式设置为多行多列,但是由于书写table标签比较麻烦尤其是涉及到table内嵌table的时候，所以CSS给我们提供了display: table的方式可以让让们方便的使用table布局, 设置子元素为列的属性为display:table-cell</p>
<p>了解了table布局的属性那么就可以写出CSS样式:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left,.center,.right</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>由于table布局本身已经有自己特有的属性,所以我们只需要设置其dispaly属性就可以达到我们的目的。使用起来还是很方便的。</p>
<h5 id="_4、弹性-flex-布局" tabindex="-1"><a class="header-anchor" href="#_4、弹性-flex-布局" aria-hidden="true">#</a> 4、弹性(flex)布局:</h5>
<p>首先先写html模版: 这里的html模版和 position使用的html一样,这里就不复制代码了。</p>
<p>flex布局是W3C提出了一种新的方案，可以简便、完整、响应式地实现各种页面布局。</p>
<p>当给元素设置display:flex，则该元素就是一个flex容器,其子元素就是容器成员,称之为flex项目,每个项目默认按照从左到右方式排列，所以我们可以很轻松的写出CSS样式:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>如果想了解更多的flex布局大家可以查看一下链接:</p>
<p>http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</p>
<h5 id="_5、网格-gird-布局" tabindex="-1"><a class="header-anchor" href="#_5、网格-gird-布局" aria-hidden="true">#</a> 5、网格(gird)布局:</h5>
<p>首先先写html模版: 这里的html模版和 position使用的html一样,这里就不复制代码了。</p>
<p>网格它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。</p>
<p>将属性 <code v-pre>display</code> 值设为 <code v-pre>grid</code> 或 <code v-pre>inline-grid</code> 就创建了一个网格容器，所有容器直接子结点自动成为网格项目。</p>
<p>gird提供了 gird-template-columns、grid-template-rows属性让我们设置行和列的高、宽</p>
<p>根据属性我们可以写出如下CSS样式:</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px auto 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/data:image/gif;base64,R0lGODlhAQABAPABAP/wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p>
<p>只需要四行CSS代码就可以实现三栏布局,是不是感觉到了gird的强大之处呢</p>
<h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结:</h5>
<p>以上提供了5种实现三栏布局的方式那么他们的优缺点呢？</p>
<p>1、float布局是现在用的比较多的布局很多门户网站目前使用这个布局方式,使用的时候只需要注意一定要清除浮动。</p>
<p>2、Position布局只是根据定位属性去直接设置元素位置,个人感觉不太适合用做页面布局</p>
<p>3、table布局使用起来方便,兼容性也不存在问题，不利于搜索引擎抓取信息</p>
<p>4、flex布局比较强大,但是还是存在IE上兼容性问题，只能支持到IE9以上</p>
<p>5、grid布局很强大，但是兼容性很差。</p>
<h4 id="_9、php-各个框架的应用-php的安全相关" tabindex="-1"><a class="header-anchor" href="#_9、php-各个框架的应用-php的安全相关" aria-hidden="true">#</a> 9、php 各个框架的应用，php的安全相关</h4>
<h4 id="_10、数据库的优化-怎样保证大数据量的数据库访问正常" tabindex="-1"><a class="header-anchor" href="#_10、数据库的优化-怎样保证大数据量的数据库访问正常" aria-hidden="true">#</a> 10、数据库的优化，怎样保证大数据量的数据库访问正常</h4>
<p>随着互联网应用的广泛普及，海量数据的存储和访问成为了系统设计的瓶颈问题。对于一个大型的互联网应用，每天百万级甚至上亿的PV无疑对数据库造成了相当高的负载。对于系统的稳定性和扩展性造成了极大的问题。</p>
<p><strong>一、那么数据库如何处理海量数据呢？</strong></p>
<p><strong>1、编写优良的程序代码</strong></p>
<p>处理数据离不开优秀的程序代码，尤其在进行复杂数据处理时，必须使用程序。好的程序代码对数据的处理至关重要，这不仅仅是数据处理准确度的问题，更是数据处理效率的问题。良好的程序代码应该包含好的算法，包含好的处理流程，包含好的效率，包含好的异常处理机制等。</p>
<p><strong>2、对海量数据进行分区操作</strong></p>
<p>对海量数据进行分区操作十分必要，例如针对按年份存取的数据，我们可以按年进行分区，不同的数据库有不同的分区方式，不过处理机制大体相同。例如SQL Server的数据库分区是将不同的数据存于不同的文件组下，而不同的文件组存于不同的磁盘分区下，这样将数据分散开，减小磁盘I/O，减小了系统负荷，而且还可以将日志，索引等放于不同的分区下。</p>
<p><strong>3、建立广泛的索引</strong></p>
<p>对海量的数据处理，对大表建立索引是必行的，建立索引要考虑到具体情况，例如针对大表的分组、排序等字段，都要建立相应索引，一般还可以建立复合索引，对 经常插入的表则建立索引时要小心，笔者在处理数据时，曾经在一个ETL流程中，当插入表时，首先删除索引，然后插入完毕，建立索引，并实施聚合操作，聚合 完成后，再次插入前还是删除索引，所以索引要用到好的时机，索引的填充因子和聚集、非聚集索引都要考虑。</p>
<p><strong>4、加大虚拟内存</strong></p>
<p>如果系统资源有限，内存提示不足，则可以靠增加虚拟内存来解决。笔者在实际项目中曾经遇到针对18亿条的数据进行处理，内存为1GB，1个P4 2.4G的CPU，对这么大的数据量进行聚合操作是有问题的，提示内存不足，那么采用了加大虚拟内存的方法来解决，在6块磁盘分区上分别建立了6个 4096M的磁盘分区，用于虚拟内存，这样虚拟的内存则增加为 4096*6 + 1024 = 25600 M，解决了数据处理中的内存不足问题。</p>
<p><strong>5、分批处理</strong></p>
<p>海量数据处理难因为数据量大，那么解决海量数据处理难的问题其中一个技巧是减少数据量。可以对海量数据分批处理，然后处理后的数据再进行合并操作，这样逐 个击破，有利于小数据量的处理，不至于面对大数据量带来的问题，不过这种方法也要因时因势进行，如果不允许拆分数据，还需要另想办法。不过一般的数据按 天、按月、按年等存储的，都可以采用先分后合的方法，对数据进行分开处理。</p>
<p><strong>6、使用数据仓库和多维数据库存储</strong></p>
<p>数据量加大是一定要考虑OLAP的，传统的报表可能5、6个小时出来结果，而基于Cube的查询可能只需要几分钟，因此处理海量数据的利器是OLAP多维分析，即建立数据仓库，建立多维数据集，基于多维数据集进行报表展现和数据挖掘等。</p>
<p><strong>7、使用采样数据，进行数据挖掘</strong></p>
<p>基于海量数据的数据挖掘正在逐步兴起，面对着超海量的数据，一般的挖掘软件或算法往往采用数据抽样的方式进行处理，这样的误差不会很高，大大提高了处理效率和处理的成功率。一般采样时要注意数据的完整性和，防止过大的偏差。笔者曾经对1亿2千万行的表数据进行采样，抽取出400万行，经测试软件测试处理的误差为千分之五，客户可以接受。</p>
<p>还有一些方法，需要在不同的情况和场合下运用，例如使用代理键等操作，这样的好处是加快了聚合时间，因为对数值型的聚合比对字符型的聚合快得多。类似的情况需要针对不同的需求进行处理。</p>
<p>海量数据是发展趋势，对数据分析和挖掘也越来越重要，从海量数据中提取有用信息重要而紧迫，这便要求处理要准确，精度要高，而且处理时间要短，得到有价值信息要快，所以，对海量数据的研究很有前途，也很值得进行广泛深入的研究。</p>
<p><strong>二、下面注意讲解下负载均衡技术、数据库的读写分离、数据库拆分(分布式)</strong></p>
<h5 id="_1、负载均衡技术" tabindex="-1"><a class="header-anchor" href="#_1、负载均衡技术" aria-hidden="true">#</a> <strong>1、负载均衡技术</strong></h5>
<p>负载均衡集群是由一组相互独立的计算机系统构成，通过常规网络或专用网络进行连接，由路由器衔接在一起，各节点相互协作、共同负载、均衡压力，对客户端来说，整个群集可以视为一台具有超高性能的独立服务器。</p>
<p><strong>实现原理</strong></p>
<p>实现数据库的负载均衡技术，首先要有一个可以控制连接数据库的控制端。在这里，它截断了数据库和程序的直接连接，由所有的程序来访问这个中间层，然后再由中间层来访问数据库。这样，我们就可以具体控制访问某个数据库了，然后还可以根据数据库的当前负载采取有效的均衡策略，来调整每次连接到哪个数据库。</p>
<p><strong>实现多据库数据同步</strong></p>
<p>对于负载均衡，最重要的就是所有服务器的数据都是实时同步的。这是一个集群所必需的，因为，如果数不据实时、不同步，那么用户从一台服务器读出的数据，就有别于从另一台服务器读出的数据，这是不能允许的。所以必须实现数据库的数据同步。这样，在查询的时候就可以有多个资源，实现均衡。比较常用的方法是Moebius for SQL Server集群，Moebius for SQL Server集群采用将核心程序驻留在每个机器的数据库中的办法，这个核心程序称为Moebius for SQL Server 中间件，主要作用是监测数据库内数据的变化并将变化的数据同步到其他数据库中。数据同步完成后客户端才会得到响应，同步过程是并发完成的，所以同步到多个数据库和同步到一个数据库的时间基本相等；另外同步的过程是在事务的环境下完成的，保证了多份数据在任何时刻数据的一致性。正因为Moebius 中间件宿主在数据库中的创新，让中间件不但能知道数据的变化，而且知道引起数据变化的SQL语句，根据SQL语句的类型智能的采取不同的数据同步的策略以保证数据同步成本的最小化。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/20145709105711_0.gif" alt="img">数据条数很少，数据内容也不大，则直接同步数据</p>
<p>数据条数很少，但是里面包含大数据类型，比如文本，二进制数据等，则先对数据进行压缩然后再同步，从而减少网络带宽的占用和传输所用的时间。</p>
<p>数据条数很多，此时中间件会拿到造成数据变化的SQL语句， 然后对SQL语句进行解析，分析其执行计划和执行成本，并选择是同步数据还是同步SQL语句到其他的数据库中。此种情况应用在对表结构进行调整或者批量更改数据的时候非常有用。</p>
<p><strong>优缺点</strong></p>
<p>(1) 扩展性强：当系统要更高数据库处理速度时，只要简单地增加数据库服务器就 可以得到扩展。</p>
<p>(2) 可维护性：当某节点发生故障时，系统会自动检测故障并转移故障节点的应用，保证数据库的持续工作。</p>
<p>(3) 安全性：因为数据会同步的多台服务器上，可以实现数据集的冗余，通过多份数据来保证安全性。另外它成功地将数据库放到了内网之中，更好地保护了数据库的安全性。</p>
<p>(4) 易用性：对应用来说完全透明，集群暴露出来的就是一个IP</p>
<h5 id="_2、数据库的读写分离" tabindex="-1"><a class="header-anchor" href="#_2、数据库的读写分离" aria-hidden="true">#</a> <strong>2、数据库的读写分离</strong></h5>
<p><strong>实现原理</strong></p>
<p>读写分离简单的说是把对数据库读和写的操作分开对应不同的数据库服务器，这样能有效地减轻数据库压力，也能减轻io压力。主数据库提供写操作，从数据库提供读操作，其实在很多系统中，主要是读的操作。当主数据库进行写操作时，数据要同步到从的数据库，这样才能有效保证数据库完整性。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/20145709105711_1.jpg" alt="img">　　(ebay的读写比率是260:1,ebay的读写分离)</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/20145709105711_2.jpg" alt="img">　　(微软数据库分发)</p>
<p></p>
<p><strong>实现方法</strong></p>
<p>在MS Sql server中可以使用发布定义的方式实现数据库复制，实现读写分离，复制是将一组数据从一个数据源拷贝到多个数据源的技术，是将一份数据发布到多个存储站点上的有效方式。使用复制技术，用户可以将一份数据发布到多台服务器上。复制技术可以确保分布在不同地点的数据自动同步更新，从而保证数据的一致性。SQL SERVER复制技术类型有三种，分别是：快照复制、事务复制、合并复制。SQL SERVER 主要采用出版物、订阅的方式来处理复制。源数据所在的服务器是出版服务器，负责发表数据。出版服务器把要发表的数据的所有改变情况的拷贝复制到分发服务器，分发服务器包含有一个分发数据库，可接收数据的所有改变，并保存这些改变，再把这些改变分发给订阅服务器。</p>
<p><strong>优缺点</strong></p>
<p>(1)数据的实时性差:数据不是实时同步到自读服务器上的，当数据写入主服务器后，要在下次同步后才能查询到。</p>
<p>(2)数据量大时同步效率差：单表数据量过大时插入和更新因索引,磁盘IO等问题，性能会变的很差。</p>
<p>(3)同时连接多个（至少两个）数据库：至少要连接到两个数据数据库，实际的读写操作是在程序代码中完成的，容易引起混乱</p>
<p>(4)读具有高性能高可靠性和可伸缩:只读服务器，因为没有写操作，会大大减轻磁盘IO等性能问题，大大提高效率；只读服务器可以采用负载均衡，主数据库发布到多个只读服务器上实现读操作的可伸缩性。</p>
<h5 id="_3-、数据库拆分-分布式" tabindex="-1"><a class="header-anchor" href="#_3-、数据库拆分-分布式" aria-hidden="true">#</a> 3**、数据库拆分(分布式)**</h5>
<p>通过某种特定的条件，将存放在同一个数据库中的数据分散存放到多个数据库上，实现分布存储，通过路由规则路由访问特定的数据库，这样一来每次访问面对的就不是单台服务器了，而是N台服务器，这样就可以降低单台机器的负载压力。</p>
<p>垂直(纵向)拆分：是指按功能模块拆分，比如分为订单库、商品库、用户库...这种方式多个数据库之间的表结构不同。</p>
<p>水平(横向)拆分：将同一个表的数据进行分块保存到不同的数据库中，这些数据库中的表结构完全相同。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/20145709105711_3.jpg" alt="img">　　（纵向拆分）</p>
<p><img src="http://image.studyofnet.com/upfileImages/20140409/20145709105711_4.jpg" alt="img">　　（横向拆分）</p>
<p><strong>实现原理</strong></p>
<p>使用垂直拆分，主要要看应用类型是否合适这种拆分方式，如系统可以分为，订单系统，商品管理系统，用户管理系统业务系统比较明的，垂直拆分能很好的起到分散数据库压力的作用。业务模块不明晰，耦合（表关联）度比较高的系统不适合使用这种拆分方式。但是垂直拆分方式并不能彻底解决所有压力问题，例如 有一个5000w的订单表，操作起来订单库的压力仍然很大，如我们需要在这个表中增加（insert）一条新的数据，insert完毕后，数据库会针对这张表重新建立索引，5000w行数据建立索引的系统开销还是不容忽视的，反过来，假如我们将这个表分成100个table呢，从table_001一直到table_100，5000w行数据平均下来，每个子表里边就只有50万行数据，这时候我们向一张只有50w行数据的table中insert数据后建立索引的时间就会呈数量级的下降，极大了提高了DB的运行时效率，提高了DB的并发量，这种拆分就是横向拆分</p>
<p><strong>实现方法</strong></p>
<p>垂直拆分，拆分方式实现起来比较简单，根据表名访问不同的数据库就可以了。横向拆分的规则很多，这里总结前人的几点，</p>
<p><strong>(1)顺序拆分</strong></p>
<p>如可以按订单的日前按年份才分，2003年的放在db1中，2004年的db2,以此类推。当然也可以按主键标准拆分。</p>
<p><strong>优点</strong>：可部分迁移</p>
<p><strong>缺点</strong>：数据分布不均，可能2003年的订单有100W，2008年的有500W。</p>
<p><strong>(2)hash取模分</strong></p>
<p>对user_id进行hash（或者如果user_id是数值型的话直接使用user_id的值也可），然后用一个特定的数字，比如应用中需要将一个数据库切分成4个数据库的话，我们就用4这个数字对user_id的hash值进行取模运算，也就是user_id%4,这样的话每次运算就有四种可能：结果为1的时候对应DB1；结果为2的时候对应DB2；结果为3的时候对应DB3；结果为0的时候对应DB4，这样一来就非常均匀的将数据分配到4个DB中。
<strong>优点</strong>：数据分布均匀
<strong>缺点</strong>：数据迁移的时候麻烦；不能按照机器性能分摊数据 。</p>
<p><strong>(3)在认证库中保存数据库配置</strong></p>
<p>就是建立一个DB，这个DB单独保存user_id到DB的映射关系，每次访问数据库的时候都要先查询一次这个数据库，以得到具体的DB信息，然后才能进行我们需要的查询操作。
<strong>优点</strong>：灵活性强，一对一关系
<strong>缺点</strong>：每次查询之前都要多一次查询，会造成一定的性能损失。</p>
<h4 id="_11、数据库集群的特点和数据同步的机制-最全高级笔记里有答案" tabindex="-1"><a class="header-anchor" href="#_11、数据库集群的特点和数据同步的机制-最全高级笔记里有答案" aria-hidden="true">#</a> 11、数据库集群的特点和数据同步的机制（最全高级笔记里有答案）</h4>
<h4 id="_12、什么是响应式设计" tabindex="-1"><a class="header-anchor" href="#_12、什么是响应式设计" aria-hidden="true">#</a> 12、什么是响应式设计</h4>
<h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h2>
<p>最近一段时间, 在北京参加30多家大中小互联网公司面试, 其中有百度, 腾讯, 蘑菇街, 滴滴, 美丽说, 互联网金融等公司, 面试过程也是学习过程, 从中发现这些知识点范围是固定的, 或者说如果你细心准备, 大概考点都差不多吧, 下面我会把这些知识点范围总结下, 仅仅是问题,没有答案. 同时也欢迎你在下面评论中进行补充. 如果列出问题,你能会80%以上, 我想你能够拿到每月25k以上的薪水.</p>
<h2 id="有赞" tabindex="-1"><a class="header-anchor" href="#有赞" aria-hidden="true">#</a> 有赞:</h2>
<h4 id="b-树和b-树区别-数据库索引原理-组合索引怎么使用-最左匹配的原理-最全高级题里有答案" tabindex="-1"><a class="header-anchor" href="#b-树和b-树区别-数据库索引原理-组合索引怎么使用-最左匹配的原理-最全高级题里有答案" aria-hidden="true">#</a> B-树和B+树区别，数据库索引原理，组合索引怎么使用？最左匹配的原理（最全高级题里有答案）</h4>
<h4 id="斐波那契数列非递归实现" tabindex="-1"><a class="header-anchor" href="#斐波那契数列非递归实现" aria-hidden="true">#</a> 斐波那契数列非递归实现</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>非递归写法：
function fbnq($n){ //传入数列中数字的个数
    if($n &lt;= 0){
        return 0;
    }
    $array[1] = $array[2] = 1; //设第一个值和第二个值为1
    for($i=3;$i&lt;=$n;$i++){ //从第三个值开始
        $array[$i] = $array[$i-1] + $array[$i-2];
    //后面的值都是当前值的前一个值加上前两个值的和
    }
    return $array;
}

function f2($n){
    $num1 = $num2 = $temp = 1;
    for($i=2;$i&lt;$n;$i++){
//1 1 2 3 5 8 13 ....
        $temp = $num1 + $num2;  //$temp = 2
        $num1 = $num2;          //$num1 = 1
        $num2 = $temp;          //$num2 = 2
    }
    return $temp;
}
 
递归写法：
function fbnq($n){
    if($n &lt;= 0) return 0;
    if($n == 1 || $n == 2) return 1;
    return fbnq($n - 1) + fbnq($n - 2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="短url实现" tabindex="-1"><a class="header-anchor" href="#短url实现" aria-hidden="true">#</a> 短URL实现</h4>
<p>1.背景介绍</p>
<p>相信很多人手机上都收到过一些营销短信，短信里面有时候会附带一些网址，如下图</p>
<p>这些网址往往都是非常短，但是当我们打开之后，如果你仔细观察，中间会有跳转，最终浏览器地址栏显示的网址并不是你短信里面看到的网址，这就是短网址！</p>
<p>2.原理和应用</p>
<p>短网址一般是采用一个非常短域名下，路径参数一般只有3-6个字符组成，非常简洁！</p>
<p>使用短网址的前提是先生成短网址，主要是采用某种算法让一段短的字符对应一个长的字符，比如说从常用的0-9、a-z、A-Z共62个字符中选择6个字符，那意味着有62的6次方种组合，大概有568亿不重复的短网址可用！</p>
<p>服务器通过路径参数查询到真实的长网址，然后使用301/302跳转到真实的网址即可！</p>
<p>关于跳转，301 是永久重定向，302 是临时重定向。短地址一经生成就不会变化，所以用 301 是符合 http 语义的，浏览器会记录跳转地址，同时对服务器压力也会有一定减少。但是如果使用了 301，我们就无法统计到短地址被点击的次数了，如果对数据统计有要求的话，使用302跳转可能比较好一些！</p>
<p>短网址的主要好处是方便传输记忆，特别是在短信里面使用的时候，短信对内容字数有限制，还有比如说微博分享也使用了短网址！</p>
<p>3.市面现有案例</p>
<p>目前市面上有很多免费的短链接服务，功能基本上都一样，也没有什么限制！</p>
<p>(1)百度的短链接(dwz.cn/)，百度不仅仅提供了网页入口，也提供了接口和开发文档，简单易用！</p>
<p>(2)新浪的短链接(sina.lt/)，目前仅提供网页入口，未发现接口服务！</p>
<p>(3)淘宝的短链接(tb.am/)，目前仅提供网页入口，未发现接口服务！</p>
<p>市面还有很多其它的小的公司提供短链接服务，有些是部分免费，有些短链接是有效期的，这里不一一介绍！</p>
<p>4.常用算法</p>
<p>网上比较流行的算法有进制算法、摘要（Hash）算法、随机数算法，下面简单介绍一下：</p>
<p>一.进制算法</p>
<p>这个算法网上也有叫作自增序列算法，特点就是永不重复，设置 id 自增，一个 10进制 id 对应一个62进制的数值，1对1，也就不会出现重复的情况，这个利用的就是低进制转化为高进制时，字符数会减少的特性。</p>
<p>计算机中常见的进制有2进制，8进制，10进制，16进制，进制越大，能够表示的数越大，占用的字数也越少。下面举个例：</p>
<p>10进制的1000，在8进制里面是1750，在16进制里面就是3E8，那在62进制里面呢？有人说，计算机里面没有62进制。。。虽然没有，但是我们可以造一个，进制的转换算法是固定的，最常见的就是“除基取余法”！</p>
<p>我们假设62进制的字符序列为 0-9a-zA-Z，顺序可以打乱，但是应该固定下来，是一个从0角标开始的到61的数组，我们暂且称之为字母表！</p>
<p>====&gt; 1000/62 = 16，余8</p>
<p>====&gt; 16/62 = 0，余16</p>
<p>余数得到的数字是16、8，然后找到字母表里面角标为16和8的字符拼起来，就是g8，非常短，只有2位数！假如说我们想至少产生6位字符，那么我们可以从一个比较大的数字开始，具体可以看下图：</p>
<p>1位 62 0 - 61 2位 3844 62 - 3843 3位 约 23万 3844 - 238327 4位 约 1400万 238328 - 14776335 5位 约 9.1亿 14776336 - 916132831 6位 约 568亿 916132832 - 56800235583 复制代码</p>
<p>二.Hash算法</p>
<p>第一种方式：</p>
<p>简单的对长链接进行加盐md5，会生成一个32位的字符串，随机从里面取6个字符，或者简单粗暴取最后6位，但是md5只包含0-9A-Fa-f,比字母表的里面字符还少，冲突几率更大！</p>
<p>第二种方式：</p>
<p>1.将长网址 md5 生成 32 位签名串,分为 4 段, 每段 8 个字节</p>
<p>2.对这四段循环处理, 取 8 个字节, 将他看成 16 进制串与 0x3fffffff(30位1) 与操作, 即超过 30 位的忽略处理</p>
<p>3.这 30 位分成 6 段, 每 5 位的数字作为字母表的索引取得特定字符, 依次进行获得 6 位字符串</p>
<p>4.总的 md5 串可以获得 4 个 6 位串,取里面的任意一个就可作为这个长 url 的短 url 地址</p>
<p>生成的方式更加复杂，重复的几率低，但是依然会出现冲突！</p>
<p>三.随机数算法</p>
<p>这个更简单，直接对这个62个字符数组做随机选择，选择其中6个字符当作短链接码，简单易用，但是难免会出现重复冲突！</p>
<p>四.算法对比</p>
<p>第一种算法只要解决自增id问题就可以避免冲突，自增id可以采用数据库自增主键，每次生成短码只需一次数据库操作（insert操作，获取主键id，然后算出短码即可）</p>
<p>第二种和第三种算法其实都差不多，都是依赖于程序随机，容易出现冲突，这就需要每次在插入数据库的时候判重，效率低一些！</p>
<p>5.安全</p>
<p>短链接虽然方便了传输和记忆，但是由于链接组成的字符个数少，更容易被爆破、猜测攻击，攻击者可以轻松遍历所有字符组成的链接！</p>
<p>所以不建议使用短链接发送具有私密性的网址，比如说重置密码链接，对一些权限、敏感信息的链接要做好二次鉴权！</p>
<p>答案2：</p>
<h6 id="短网址实现逻辑" tabindex="-1"><a class="header-anchor" href="#短网址实现逻辑" aria-hidden="true">#</a> 短网址实现逻辑</h6>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code>比如b站
短网址：<span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//b23.tv/CXXiW6</span>
长网址：<span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//www.bilibili.com/video/BV13E411a7N5?p=21&amp;share_medium=android&amp;share_plat=android&amp;share_source=COPY&amp;share_tag=s_i&amp;timestamp=1596294161&amp;unique_k=CXXiW6</span>

1. 通过算法把长网址转换成比较短的网址，方便传播、发布、而且美观
2. <span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//b23.tv/ 这个是b站的短网址域名</span>
3. CXXiW6 就是对应 <span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//www.bilibili.com/video/BV13E411a7N5?p=21&amp;share_medium=android&amp;share_plat=android&amp;share_source=COPY&amp;share_tag=s_i&amp;timestamp=1596294161&amp;unique_k=CXXiW6</span>
4. <span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//b23.tv/ 获取 / 后面第一参数 CXXiW6 然后到数据库或者缓存中对比找到对应的长网址进行301跳转；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="短网址算法" tabindex="-1"><a class="header-anchor" href="#短网址算法" aria-hidden="true">#</a> 短网址算法</h6>
<div class="language-undefined line-numbers-mode" data-ext="undefined"><pre v-pre class="language-undefined"><code>随手复制一个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/大厂面试题/005ROyqyly1ghftg5b9pxj30ld09vt9o.jpg" alt="短网址方法.jpg"></p>
<h6 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> nginx配置</h6>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>让所有请求都到 /index.php 这个文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p><img src="@source/docs/theme-reco/img/大厂面试题/005ROyqyly1ghft8xb30vj30ut0ajmy1.jpg" alt="短连接nginx服务器配置.jpg"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php生成短网址：
function duan($url){
	$code = floatval(sprintf('%u',crc32($url)));
	// var_dump($code);die();
	$shortUrl = '';
	while($code){
		$mod = fmod($code,62);

		if($mod>9 &amp;&amp; $mod &lt; 35){
			$mod = chr($mod+61);
		}
		$shortUrl .= $mod;
		$code = floor($code/62);
	}
	return $shortUrl;
}
var_dump(duan("http://www.dptkbs.com/vp/78748/1/19.html"));//string(7) "R61YN^3"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h3>
<h4 id="tcptcp-有哪些机制确保可靠性-拥塞控制怎么实现-close-wait-太多怎么处理-为什么会出现这种情况" tabindex="-1"><a class="header-anchor" href="#tcptcp-有哪些机制确保可靠性-拥塞控制怎么实现-close-wait-太多怎么处理-为什么会出现这种情况" aria-hidden="true">#</a> tcptcp 有哪些机制确保可靠性？拥塞控制怎么实现？close_wait 太多怎么处理？为什么会出现这种情况？</h4>
<h4 id="讲讲三次握手-四次挥手" tabindex="-1"><a class="header-anchor" href="#讲讲三次握手-四次挥手" aria-hidden="true">#</a> 讲讲三次握手，四次挥手?</h4>
<h4 id="keepalive-有什么用-https-原理-知道哪些-http-状态码有哪些-http-有哪些请求方法-put、post-实现上有什么区别" tabindex="-1"><a class="header-anchor" href="#keepalive-有什么用-https-原理-知道哪些-http-状态码有哪些-http-有哪些请求方法-put、post-实现上有什么区别" aria-hidden="true">#</a> keepalive 有什么用？Https 原理？知道哪些 http 状态码有哪些？http 有哪些请求方法？put、post 实现上有什么区别？</h4>
<h4 id="前后端分离与不分离的区别-各有什么优缺点" tabindex="-1"><a class="header-anchor" href="#前后端分离与不分离的区别-各有什么优缺点" aria-hidden="true">#</a> 前后端分离与不分离的区别？各有什么优缺点？</h4>
<h4 id="常见-web-攻击有哪些-了解-csrf-攻击么" tabindex="-1"><a class="header-anchor" href="#常见-web-攻击有哪些-了解-csrf-攻击么" aria-hidden="true">#</a> 常见 web 攻击有哪些？了解 csrf 攻击么？</h4>
<h4 id="nginx-达到上限了怎么办-怎么对-nginx-负载均衡-dns" tabindex="-1"><a class="header-anchor" href="#nginx-达到上限了怎么办-怎么对-nginx-负载均衡-dns" aria-hidden="true">#</a> nginx 达到上限了怎么办？怎么对 nginx 负载均衡？dns？</h4>
<h4 id="nginx-负载均衡有哪些算法-各自有什么优缺点" tabindex="-1"><a class="header-anchor" href="#nginx-负载均衡有哪些算法-各自有什么优缺点" aria-hidden="true">#</a> nginx 负载均衡有哪些算法？各自有什么优缺点？</h4>
<h4 id="restful-的作用-有哪些优点和缺点" tabindex="-1"><a class="header-anchor" href="#restful-的作用-有哪些优点和缺点" aria-hidden="true">#</a> restful 的作用？有哪些优点和缺点？</h4>
<h4 id="什么是-cdn-header-中涉及到缓存的字段有哪些-cookie-session-介绍一下html-页面-怎么与后端交互-流程是什么-涉及到哪些组件-http-协议-报文格式" tabindex="-1"><a class="header-anchor" href="#什么是-cdn-header-中涉及到缓存的字段有哪些-cookie-session-介绍一下html-页面-怎么与后端交互-流程是什么-涉及到哪些组件-http-协议-报文格式" aria-hidden="true">#</a> 什么是 cdn？header 中涉及到缓存的字段有哪些？cookie session 介绍一下html 页面，怎么与后端交互？流程是什么？涉及到哪些组件？http 协议，报文格式？</h4>
<h3 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h3>
<h4 id="什么是设计模式-你是否在你的代码里面使用过" tabindex="-1"><a class="header-anchor" href="#什么是设计模式-你是否在你的代码里面使用过" aria-hidden="true">#</a> 什么是设计模式？你是否在你的代码里面使用过？</h4>
<h4 id="java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式" tabindex="-1"><a class="header-anchor" href="#java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式" aria-hidden="true">#</a> Java 中什么叫单例设计模式？请用 Java 写出线程安全的单例模式</h4>
<h4 id="在-java-中-什么叫观察者设计模式" tabindex="-1"><a class="header-anchor" href="#在-java-中-什么叫观察者设计模式" aria-hidden="true">#</a> 在 Java 中，什么叫观察者设计模式？</h4>
<h4 id="举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次" tabindex="-1"><a class="header-anchor" href="#举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次" aria-hidden="true">#</a> 举一个用 Java 实现的装饰模式(decorator design pattern) ？它是作用于对象层次还是类层次？</h4>
<h4 id="单例对于单例-你知道哪些实现方法-实现一个懒加载单例双重校验锁为什么需要双重校验" tabindex="-1"><a class="header-anchor" href="#单例对于单例-你知道哪些实现方法-实现一个懒加载单例双重校验锁为什么需要双重校验" aria-hidden="true">#</a> 单例对于单例，你知道哪些实现方法？实现一个懒加载单例双重校验锁为什么需要双重校验？</h4>
<h4 id="使用工厂模式最主要的好处是什么-在哪里使用" tabindex="-1"><a class="header-anchor" href="#使用工厂模式最主要的好处是什么-在哪里使用" aria-hidden="true">#</a> 使用工厂模式最主要的好处是什么？在哪里使用？</h4>
<h3 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h3>
<h4 id="有哪些分布式组件是你最熟悉的-简单聊一聊。" tabindex="-1"><a class="header-anchor" href="#有哪些分布式组件是你最熟悉的-简单聊一聊。" aria-hidden="true">#</a> 有哪些分布式组件是你最熟悉的，简单聊一聊。</h4>
<h4 id="cap-是指什么-mysql-满足-cap-中哪些" tabindex="-1"><a class="header-anchor" href="#cap-是指什么-mysql-满足-cap-中哪些" aria-hidden="true">#</a> cap 是指什么？mysql 满足 cap 中哪些？</h4>
<h4 id="分布式锁有哪些方式可以实现-各有什么优缺点" tabindex="-1"><a class="header-anchor" href="#分布式锁有哪些方式可以实现-各有什么优缺点" aria-hidden="true">#</a> 分布式锁有哪些方式可以实现？各有什么优缺点？</h4>
<h4 id="什么是一致性-hash-自己实现一致性-hash-会用什么数据结构" tabindex="-1"><a class="header-anchor" href="#什么是一致性-hash-自己实现一致性-hash-会用什么数据结构" aria-hidden="true">#</a> 什么是一致性 hash？自己实现一致性 hash，会用什么数据结构？</h4>
<h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3>
<h4 id="微服务架构有哪些优势" tabindex="-1"><a class="header-anchor" href="#微服务架构有哪些优势" aria-hidden="true">#</a> 微服务架构有哪些优势？</h4>
<h4 id="单片-soa-和微服务架构有什么区别" tabindex="-1"><a class="header-anchor" href="#单片-soa-和微服务架构有什么区别" aria-hidden="true">#</a> 单片，SOA 和微服务架构有什么区别？</h4>
<h4 id="什么是-rpc-怎么实现幂等性" tabindex="-1"><a class="header-anchor" href="#什么是-rpc-怎么实现幂等性" aria-hidden="true">#</a> 什么是 RPC？怎么实现幂等性？</h4>
<h4 id="什么是-rest-restful-以及它的用途是什么" tabindex="-1"><a class="header-anchor" href="#什么是-rest-restful-以及它的用途是什么" aria-hidden="true">#</a> 什么是 REST / RESTful 以及它的用途是什么？</h4>
<h4 id="配置中心有哪些选项-apollo-的架构-怎么无感实现已加载数据更新" tabindex="-1"><a class="header-anchor" href="#配置中心有哪些选项-apollo-的架构-怎么无感实现已加载数据更新" aria-hidden="true">#</a> 配置中心有哪些选项？apollo 的架构？怎么无感实现已加载数据更新？</h4>
<h4 id="讲一下熔断概念-熔断原理-令牌桶-熔断三个状态关系" tabindex="-1"><a class="header-anchor" href="#讲一下熔断概念-熔断原理-令牌桶-熔断三个状态关系" aria-hidden="true">#</a> 讲一下熔断概念？熔断原理？令牌桶？熔断三个状态关系？</h4>
<h4 id="熔断会影响性能么-有遇到过线上发生熔断么-不加会怎样" tabindex="-1"><a class="header-anchor" href="#熔断会影响性能么-有遇到过线上发生熔断么-不加会怎样" aria-hidden="true">#</a> 熔断会影响性能么？有遇到过线上发生熔断么？不加会怎样？</h4>
<h3 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h3>
<h4 id="基本都会问时间复杂度" tabindex="-1"><a class="header-anchor" href="#基本都会问时间复杂度" aria-hidden="true">#</a> 基本都会问时间复杂度</h4>
<h4 id="有哪些常用排序算法" tabindex="-1"><a class="header-anchor" href="#有哪些常用排序算法" aria-hidden="true">#</a> 有哪些常用排序算法？</h4>
<h4 id="手写快排-快排时间复杂度是多少" tabindex="-1"><a class="header-anchor" href="#手写快排-快排时间复杂度是多少" aria-hidden="true">#</a> 手写快排，快排时间复杂度是多少？</h4>
<h4 id="快排算法是不是稳定的-什么是稳定性" tabindex="-1"><a class="header-anchor" href="#快排算法是不是稳定的-什么是稳定性" aria-hidden="true">#</a> 快排算法是不是稳定的？什么是稳定性？</h4>
<h4 id="给定一个字母组成的字符串-找出不含有重复字符的最长子串的长度。" tabindex="-1"><a class="header-anchor" href="#给定一个字母组成的字符串-找出不含有重复字符的最长子串的长度。" aria-hidden="true">#</a> 给定一个字母组成的字符串，找出不含有重复字符的最长子串的长度。</h4>
<h4 id="_9-个硬币中有一个劣币-用天平秤-最坏几次" tabindex="-1"><a class="header-anchor" href="#_9-个硬币中有一个劣币-用天平秤-最坏几次" aria-hidden="true">#</a> 9 个硬币中有一个劣币，用天平秤，最坏几次？</h4>
<h4 id="深度优先-广度优先" tabindex="-1"><a class="header-anchor" href="#深度优先-广度优先" aria-hidden="true">#</a> 深度优先，广度优先</h4>
<h4 id="括号匹配-时间复杂度-空间复杂度" tabindex="-1"><a class="header-anchor" href="#括号匹配-时间复杂度-空间复杂度" aria-hidden="true">#</a> 括号匹配，时间复杂度，空间复杂度</h4>
<h4 id="单向链表的归并排序" tabindex="-1"><a class="header-anchor" href="#单向链表的归并排序" aria-hidden="true">#</a> 单向链表的归并排序</h4>
<h4 id="_1g-大小文件-里面每行是最大-16k-的单词-限制内存-1m-统计单词频率最多的-100-个单词" tabindex="-1"><a class="header-anchor" href="#_1g-大小文件-里面每行是最大-16k-的单词-限制内存-1m-统计单词频率最多的-100-个单词" aria-hidden="true">#</a> 1g 大小文件，里面每行是最大 16k 的单词，限制内存 1m，统计单词频率最多的 100 个单词</h4>
<h4 id="手写-100-位带小数的大数字的减法" tabindex="-1"><a class="header-anchor" href="#手写-100-位带小数的大数字的减法" aria-hidden="true">#</a> 手写 100 位带小数的大数字的减法</h4>
<h4 id="为什么要优化-ngin-https-延迟" tabindex="-1"><a class="header-anchor" href="#为什么要优化-ngin-https-延迟" aria-hidden="true">#</a> 为什么要优化 Ngin HTTPS 延迟</h4>
<p>Nginx 常作为最常见的服务器，常被用作负载均衡 (Load Balancer)、反向代理 (Reverse Proxy)，以及网关 (Gateway) 等等。一个配置得当的 Nginx 服务器单机应该可以 期望承受住 50K 到 80K 左右 [1] 每秒的请求，同时将 CPU 负载在可控范围内。</p>
<p>但在很多时候，负载并不是需要首要优化的重点。比如对于卡拉搜索来说，我们希望用户在每次击键的时候，可以体验即时搜索的感觉，也就是说， 每个搜索请求必须在 100ms - 200ms 的时间 内端对端地返回给用户，才能让用户搜索时没有“卡顿”和“加载”。因此，对于我们来说，优化请求延迟才是最重要的优化方向。</p>
<p>这篇文章中，我们先介绍 Nginx 中的 TLS 设置有哪些与请求延迟可能相关，如何调整才能最大化加速。然后我们用优化 卡拉搜索 [2] Nginx 服务器的实例来分享如何调整 Nginx TLS/SSL 设置，为首次搜索的用户提速 30% 左右。我们会详细讨论每一步我们做了一些什么优化，优化的动机和效果。希望可以对其它遇到类似问题的同学提供帮助。</p>
<h2 id="_01-蚂蚁金服面试题之mysql" tabindex="-1"><a class="header-anchor" href="#_01-蚂蚁金服面试题之mysql" aria-hidden="true">#</a> 01 蚂蚁金服面试题之MySQL</h2>
<p>之前的阿里面试题都有做总结，具体面试题内容整理成了文档，本文是针对MySQL系列的，所以下面只展示了自己第一次面试阿里时被吊打问到的一些MySQL难题。</p>
<h4 id="_1、请解释关系型数据库概念及主要特点" tabindex="-1"><a class="header-anchor" href="#_1、请解释关系型数据库概念及主要特点" aria-hidden="true">#</a> 1、请解释关系型数据库概念及主要特点？</h4>
<h4 id="_2、请说出关系型数据库的典型产品、特点及应用场景" tabindex="-1"><a class="header-anchor" href="#_2、请说出关系型数据库的典型产品、特点及应用场景" aria-hidden="true">#</a> 2、请说出关系型数据库的典型产品、特点及应用场景？</h4>
<h4 id="_3、请详细描述-sql-语句分类及对应代表性关键字。" tabindex="-1"><a class="header-anchor" href="#_3、请详细描述-sql-语句分类及对应代表性关键字。" aria-hidden="true">#</a> 3、请详细描述 SQL 语句分类及对应代表性关键字。</h4>
<h4 id="_4、什么是-mysql-多实例-如何配置-mysql-多实例" tabindex="-1"><a class="header-anchor" href="#_4、什么是-mysql-多实例-如何配置-mysql-多实例" aria-hidden="true">#</a> 4、什么是 MySQL 多实例，如何配置 MySQL 多实例？</h4>
<h4 id="_5、如何加强-mysql-安全-请给出可行的具体措施" tabindex="-1"><a class="header-anchor" href="#_5、如何加强-mysql-安全-请给出可行的具体措施" aria-hidden="true">#</a> 5、如何加强 MySQL 安全，请给出可行的具体措施？</h4>
<h4 id="_6、误操作执行了一个-drop-库-sql-语句-如何完整恢复" tabindex="-1"><a class="header-anchor" href="#_6、误操作执行了一个-drop-库-sql-语句-如何完整恢复" aria-hidden="true">#</a> 6、误操作执行了一个 drop 库 SQL 语句，如何完整恢复？</h4>
<h4 id="_7、详述-mysql-主从复制原理及配置主从的完整步骤。" tabindex="-1"><a class="header-anchor" href="#_7、详述-mysql-主从复制原理及配置主从的完整步骤。" aria-hidden="true">#</a> 7、详述 MySQL 主从复制原理及配置主从的完整步骤。</h4>
<h4 id="_8、mysql-如何实现双向互为主从复制-并说明应用场景" tabindex="-1"><a class="header-anchor" href="#_8、mysql-如何实现双向互为主从复制-并说明应用场景" aria-hidden="true">#</a> 8、MySQL 如何实现双向互为主从复制，并说明应用场景？</h4>
<h4 id="_9、mysql-如何实现级联同步-并说明应用场景" tabindex="-1"><a class="header-anchor" href="#_9、mysql-如何实现级联同步-并说明应用场景" aria-hidden="true">#</a> 9、MySQL 如何实现级联同步，并说明应用场景？</h4>
<h4 id="_10、mysql-主从复制故障如何解决" tabindex="-1"><a class="header-anchor" href="#_10、mysql-主从复制故障如何解决" aria-hidden="true">#</a> 10、MySQL 主从复制故障如何解决？</h4>
<h4 id="_4、分布式锁" tabindex="-1"><a class="header-anchor" href="#_4、分布式锁" aria-hidden="true">#</a> 4、分布式锁</h4>
<h4 id="_5、nginx的请求转发算法-如何配置根据权重转发" tabindex="-1"><a class="header-anchor" href="#_5、nginx的请求转发算法-如何配置根据权重转发" aria-hidden="true">#</a> 5、nginx的请求转发算法，如何配置根据权重转发</h4>
<h4 id="_11、一万个人抢100个红包-如何实现-不用队列-如何保证2个人不能抢到同一个红包-可用分布式锁" tabindex="-1"><a class="header-anchor" href="#_11、一万个人抢100个红包-如何实现-不用队列-如何保证2个人不能抢到同一个红包-可用分布式锁" aria-hidden="true">#</a> 11、一万个人抢100个红包，如何实现（不用队列），如何保证2个人不能抢到同一个红包，可用分布式锁</h4>
<h4 id="_21、io会阻塞吗-readline是不是阻塞的" tabindex="-1"><a class="header-anchor" href="#_21、io会阻塞吗-readline是不是阻塞的" aria-hidden="true">#</a> 21、IO会阻塞吗？readLine是不是阻塞的</h4>
<h4 id="_34、memcache和redis的区别" tabindex="-1"><a class="header-anchor" href="#_34、memcache和redis的区别" aria-hidden="true">#</a> 34、memcache和redis的区别</h4>
<h4 id="_35、mysql的行级锁加在哪个位置" tabindex="-1"><a class="header-anchor" href="#_35、mysql的行级锁加在哪个位置" aria-hidden="true">#</a> 35、Mysql的行级锁加在哪个位置</h4>
<h4 id="_37、myisam和innodb的区别-innodb是行级锁-myisam是表级锁" tabindex="-1"><a class="header-anchor" href="#_37、myisam和innodb的区别-innodb是行级锁-myisam是表级锁" aria-hidden="true">#</a> 37、myisam和innodb的区别（innodb是行级锁，myisam是表级锁）</h4>
<h4 id="_38、mysql其他的性能优化方式" tabindex="-1"><a class="header-anchor" href="#_38、mysql其他的性能优化方式" aria-hidden="true">#</a> 38、MySQL其他的性能优化方式</h4>
<h4 id="_39、linux系统日志在哪里看" tabindex="-1"><a class="header-anchor" href="#_39、linux系统日志在哪里看" aria-hidden="true">#</a> 39、Linux系统日志在哪里看</h4>
<h4 id="_40、如何查看网络进程" tabindex="-1"><a class="header-anchor" href="#_40、如何查看网络进程" aria-hidden="true">#</a> 40、如何查看网络进程？</h4>
<h4 id="_41、统计一个整数的二进制表示中bit为1的个数" tabindex="-1"><a class="header-anchor" href="#_41、统计一个整数的二进制表示中bit为1的个数" aria-hidden="true">#</a> 41、统计一个整数的二进制表示中bit为1的个数</h4>
<h2 id="蚂蚁金服" tabindex="-1"><a class="header-anchor" href="#蚂蚁金服" aria-hidden="true">#</a> 蚂蚁金服：</h2>
<h6 id="mysql引擎及区别-项目用的哪个-为什么" tabindex="-1"><a class="header-anchor" href="#mysql引擎及区别-项目用的哪个-为什么" aria-hidden="true">#</a> MySQL引擎及区别，项目用的哪个，为什么</h6>
<h6 id="rpc为什么用http做通信" tabindex="-1"><a class="header-anchor" href="#rpc为什么用http做通信" aria-hidden="true">#</a> RPC为什么用http做通信？</h6>
<h6 id="rpc两端如何进行负载均衡" tabindex="-1"><a class="header-anchor" href="#rpc两端如何进行负载均衡" aria-hidden="true">#</a> RPC两端如何进行负载均衡？</h6>
<h6 id="mycat分库分表、读写分离的实现" tabindex="-1"><a class="header-anchor" href="#mycat分库分表、读写分离的实现" aria-hidden="true">#</a> mycat分库分表、读写分离的实现</h6>
<h6 id="分布式数据如何保证数据一致性" tabindex="-1"><a class="header-anchor" href="#分布式数据如何保证数据一致性" aria-hidden="true">#</a> 分布式数据如何保证数据一致性</h6>
<h6 id="高并发请求处理-流量削峰措施有哪些" tabindex="-1"><a class="header-anchor" href="#高并发请求处理-流量削峰措施有哪些" aria-hidden="true">#</a> 高并发请求处理，流量削峰措施有哪些</h6>
<p><strong>流量削峰的由来</strong></p>
<p>主要是还是来自于互联网的业务场景，例如，马上即将开始的春节火车票抢购，大量的用户需要同一时间去抢购；以及大家熟知的阿里双11秒杀， 短时间上亿的用户涌入，瞬间流量巨大（高并发），比如：200万人准备在凌晨12:00准备抢购一件商品，但是商品的数量缺是有限的100-500件左右。</p>
<p>这样真实能购买到该件商品的用户也只有几百人左右， 但是从业务上来说，秒杀活动是希望更多的人来参与，也就是抢购之前希望有越来越多的人来看购买商品。</p>
<p>但是，在抢购时间达到后，用户开始真正下单时，秒杀的服务器后端缺不希望同时有几百万人同时发起抢购请求。</p>
<p>我们都知道服务器的处理资源是有限的，所以出现峰值的时候，很容易导致服务器宕机，用户无法访问的情况出现。</p>
<p><img src="https:////upload-images.jianshu.io/upload_images/15069341-728b21c14010e8ab?imageMogr2/auto-orient/strip|imageView2/2/w/439/format/webp" alt="img"></p>
<p>这就好比出行的时候存在早高峰和晚高峰的问题，为了解决这个问题，出行就有了错峰限行的解决方案。</p>
<p>同理，在线上的秒杀等业务场景，也需要类似的解决方案，需要平安度过同时抢购带来的流量峰值的问题，这就是流量削峰的由来。</p>
<p><strong>怎样来实现流量削峰方案</strong></p>
<p>削峰从本质上来说就是更多地延缓用户请求，以及层层过滤用户的访问需求，遵从“最后落地到数据库的请求数要尽量少”的原则。</p>
<p><strong>1.消息队列解决削峰</strong></p>
<p>要对流量进行削峰，最容易想到的解决方案就是用消息队列来缓冲瞬时流量，把同步的直接调用转换成异步的间接推送，中间通过一个队列在一端承接瞬时的流量洪峰，在另一端平滑地将消息推送出去。</p>
<p>消息队列中间件主要解决应用耦合，异步消息， 流量削锋等问题。常用消息队列系统：目前在生产环境，使用较多的消息队列有 ActiveMQ、RabbitMQ、 ZeroMQ、Kafka、MetaMQ、RocketMQ 等。</p>
<p>在这里，消息队列就像“水库”一样，拦蓄上游的洪水，削减进入下游河道的洪峰流量，从而达到减免洪水灾害的目的。</p>
<p>具体的消息队列MQ选型和应用场景可以参考我的往期文章：《高并发架构系列：详解分布式之消息队列的特点、选型、及应用场景》</p>
<p><strong>2.流量削峰漏斗：层层削峰</strong></p>
<p>针对秒杀场景还有一种方法，就是对请求进行分层过滤，从而过滤掉一些无效的请求。</p>
<p>分层过滤其实就是采用“漏斗”式设计来处理请求的，如下图所示：</p>
<p><img src="https:////upload-images.jianshu.io/upload_images/15069341-4275977ca5551477?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="img"></p>
<p>这样就像漏斗一样，尽量把数据量和请求量一层一层地过滤和减少了。</p>
<p><strong>1）分层过滤的核心思想</strong></p>
<p>通过在不同的层次尽可能地过滤掉无效请求。</p>
<p>通过CDN过滤掉大量的图片，静态资源的请求。</p>
<p>再通过类似Redis这样的分布式缓存，过滤请求等就是典型的在上游拦截读请求。</p>
<p><strong>2）分层过滤的基本原则</strong></p>
<p>对写数据进行基于时间的合理分片，过滤掉过期的失效请求。</p>
<p>对写请求做限流保护，将超出系统承载能力的请求过滤掉。</p>
<p>涉及到的读数据不做强一致性校验，减少因为一致性校验产生瓶颈的问题。</p>
<p>对写数据进行强一致性校验，只保留最后有效的数据。</p>
<p>最终，让“漏斗”最末端(数据库)的才是有效请求。例如：当用户真实达到订单和支付的流程，这个是需要数据强一致性的。</p>
<p>总结</p>
<p>1.对于秒杀这样的高并发场景业务，最基本的原则就是将请求拦截在系统上游，降低下游压力。如果不在前端拦截很可能造成数据库(mysql、oracle等)读写锁冲突，甚至导致死锁，最终还有可能出现雪崩等场景。</p>
<p>2.划分好动静资源，静态资源使用CDN进行服务分发。</p>
<p>3.充分利用缓存(redis等)：增加QPS，从而加大整个集群的吞吐量。</p>
<p>4.高峰值流量是压垮系统很重要的原因，所以需要Kafka等消息队列在一端承接瞬时的流量洪峰，在另一端平滑地将消息推送出去。</p>
<p>以上是就是流量削峰的详解。</p>
<p>作者：mikechen的互联网架构
链接：https://www.jianshu.com/p/6746140bbb76
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
<h6 id="线程死锁排查" tabindex="-1"><a class="header-anchor" href="#线程死锁排查" aria-hidden="true">#</a> 线程死锁排查</h6>
<h6 id="mysql-limit分页如何保证可靠性" tabindex="-1"><a class="header-anchor" href="#mysql-limit分页如何保证可靠性" aria-hidden="true">#</a> mysql limit分页如何保证可靠性</h6>
<h6 id="b-树和红黑树时间复杂度" tabindex="-1"><a class="header-anchor" href="#b-树和红黑树时间复杂度" aria-hidden="true">#</a> B+树和红黑树时间复杂度</h6>
<h6 id="redis持久化rdb和aof-的区别" tabindex="-1"><a class="header-anchor" href="#redis持久化rdb和aof-的区别" aria-hidden="true">#</a> Redis持久化RDB和AOF 的区别</h6>
<h6 id="mq底层实现原理" tabindex="-1"><a class="header-anchor" href="#mq底层实现原理" aria-hidden="true">#</a> MQ底层实现原理</h6>
<h6 id="详细介绍下分布式-一致性hash算法" tabindex="-1"><a class="header-anchor" href="#详细介绍下分布式-一致性hash算法" aria-hidden="true">#</a> 详细介绍下分布式 一致性Hash算法</h6>
<h6 id="nginx负载均衡的算法" tabindex="-1"><a class="header-anchor" href="#nginx负载均衡的算法" aria-hidden="true">#</a> nginx负载均衡的算法</h6>
<h6 id="nginx-的-upstream目前支持-哪4-种方式的分配" tabindex="-1"><a class="header-anchor" href="#nginx-的-upstream目前支持-哪4-种方式的分配" aria-hidden="true">#</a> Nginx 的 upstream目前支持 哪4 种方式的分配</h6>
<p>序言
接下来，我将大概说明下nginx的upstream目前支持4种方式的分配
我的博客关于nginx的内容地址为：https://blog.csdn.net/zengwende/article/category/8635956
正文
1、轮询（默认方式）</p>
<p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器挂掉，能自动剔除。</p>
<p>2、weight（权重）
指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
例如：
upstream bakend {undefined
server 192.168.X.1 weight=10;
server 192.168.X.2 weight=10;
}</p>
<p>注：以上的配置就是说请求进入的两台服务器的几率是一样的，都为10。服务器配置的weight（权重）越高，请求进入那台服务器处理的几率也就越高。</p>
<p>2、ip_hash
每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。
例如：
upstream bakend {undefined
ip_hash;
server 192.168.0.14:88;
server 192.168.0.15:80;
}</p>
<p>注：一个IP请求就会有一个固定的服务器，这样就不会有共享session的问题。</p>
<p>3、fair（第三方）
按后端服务器的响应时间来分配请求，响应时间短的优先分配。
upstream backend {undefined
server server1;
server server2;
fair;
}</p>
<p>4、url_hash（第三方）</p>
<p>按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</p>
<p>例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</p>
<p>upstream backend {undefined
server squid1:3128;
server squid2:3128;
hash $request_uri;
hash_method crc32;
}</p>
<p>实例：</p>
<p>upstream bakend{#定义负载均衡设备的Ip及设备状态}{undefined
ip_hash;
server 127.0.0.1:9090 down;
server 127.0.0.1:8080 weight=2;
server 127.0.0.1:6060;
server 127.0.0.1:7070 backup;
}
在需要使用负载均衡的server中增加
proxy_pass http://bakend/;</p>
<p>每个设备的状态设置为:
1.down表示单前的server暂时不参与负载
2.weight为weight越大，负载的权重就越大。
3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误
4.fail_timeout:max_fails次失败后，暂停的时间。
5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</p>
<p>nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</p>
<p>client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug
client_body_temp_path设置记录文件的目录 可以设置最多3层目录</p>
<p>location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡
————————————————
版权声明：本文为CSDN博主「zengwende」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/zengwende/article/details/86620858</p>
<h6 id="分布式集群部署后-从应用端哪些需要怎么调整" tabindex="-1"><a class="header-anchor" href="#分布式集群部署后-从应用端哪些需要怎么调整" aria-hidden="true">#</a> 分布式集群部署后，从应用端哪些需要怎么调整</h6>
<h6 id="mongodb、redis和memcached的应用场景-各自优势" tabindex="-1"><a class="header-anchor" href="#mongodb、redis和memcached的应用场景-各自优势" aria-hidden="true">#</a> mongoDB、redis和memcached的应用场景，各自优势</h6>
<h6 id="谈谈你性能优化的实践案例-优化思路" tabindex="-1"><a class="header-anchor" href="#谈谈你性能优化的实践案例-优化思路" aria-hidden="true">#</a> 谈谈你性能优化的实践案例，优化思路？</h6>
<h6 id="两千万用户并发抢购-你怎么来设计" tabindex="-1"><a class="header-anchor" href="#两千万用户并发抢购-你怎么来设计" aria-hidden="true">#</a> 两千万用户并发抢购，你怎么来设计？</h6>
<h2 id="io问题" tabindex="-1"><a class="header-anchor" href="#io问题" aria-hidden="true">#</a> IO问题：</h2>
<h4 id="了解-nio-么-讲讲" tabindex="-1"><a class="header-anchor" href="#了解-nio-么-讲讲" aria-hidden="true">#</a> 了解 NIO 么？讲讲</h4>
<h4 id="nio-与-bio-有什么区别" tabindex="-1"><a class="header-anchor" href="#nio-与-bio-有什么区别" aria-hidden="true">#</a> NIO 与 BIO 有什么区别？</h4>
<h4 id="了解-netty-原理么" tabindex="-1"><a class="header-anchor" href="#了解-netty-原理么" aria-hidden="true">#</a> 了解 Netty 原理么</h4>
<h2 id="腾讯笔试面试经历" tabindex="-1"><a class="header-anchor" href="#腾讯笔试面试经历" aria-hidden="true">#</a> <strong>腾讯笔试面试经历</strong></h2>
<p>笔试时间是4.8晚上，因为要求电脑要有摄像头，好不容易借了个，笔试题考的范围很广，还有各种语言，我只会C/C++，所以对于Python，java，object-c看到这类题就直接选C，选择题磕磕绊绊，大题还好考的比较基础，无奈自己基础不牢，但还是认真填写了。</p>
<p>面试时间是4.14-4.17
本以为笔试挂了打算去霸面的，结果4.13下午收到面试通知，后来一问，班上参加笔试的同学基本都通过了，暗自庆幸了。13号下午有个在腾讯学长说他们部门可以另外推荐面试，要我们发简历，想着可以有两次面试机会，就发了份简历，没想到晚上就收到面试通知。
我的两个面试都是下午，我的同学上午面试的很多，大家都在群里讨论，最快的有些上午就直接二面，心里有些不安定了。下午的面试一个2点，一个4点，吃过饭就早早赶去面试酒店。腾讯真的很土豪，几乎把整个酒店都包下了，从6-29楼都是面试的。
第一个面试，我提前到达面试房间，我应该是下午第一个，去的时候门还没开，估计面试官在休息。进去后，面试官直接要我写代码，反转链表，他就自己烧水去了，我5分钟就写了（其实不用这么久，佯装思考了下，嘿嘿），然后边跟他讲思路，边指代码。面试官看了没问题，就拿着简历问项目，然后又问了虚函数的实现，最后聊了几句，问我有什么问的，就结束了，我看了下时间总共才17分钟。出来之后心里七上八下的，面的时间太短了。</p>
<p>第二个面试，相当于霸面，提前跟部门leader通了电话约时间，刚好我电话过去，他们部门leader说有时间，我就直接去了面试房间。面试官很亲切，问了下项目，指出了项目中的一些不足，我们讨论了下。然后就是各种问题目，写代码，运气很好，问的都是我会的，具体题目后面有。结束时，面试官问我之前那个面试官的房间号。这面总共面了30多分钟，自我感觉不错。
回来路上已经是下午5点多了，收到一个学长的qq消息，说他们部门leader对我的印象不错，要我好好准备，等二面，当时心中一阵窃喜，到了晚上，那边学长又说，第一个面的部门也通过了，要我先从流程上结束第一个部门的面试才能转到他们部门来，想想两个部门都通过一面了，心里何止是喜悦，比捡钱还高兴。</p>
<p><strong>转折点</strong>
接下来的时间就是等二面通知了，我的其他同学也有很多通过一面的，基本他们都是（4.14）晚上就收到二面通知，第二天（4.15）去面试，最快的已经到hr面了，我查了下我的状态还是初试阶段，当时我就想只要没挂，反正那边已经查到一面过了，我就安心等吧，第二天我安心的查漏补缺，我有些被拒的同学已经去霸面了，我等了一天也没收到任何通知。当晚（4.15）已有部门同学收到hr面的通知了，我还是初试状态，到了第三天（4.16），我有些坐不住了，打算再没消息就直接过去问问，结果到了中午，我同学电话我说在那边没有查到我的任何面试通过的信息，我查了微信状态，居然变成不适合该岗位，把我拒了，心情顿时低落的，马上收拾心情，打电话跟学长讲了自己的情况，他也很惊讶，他帮我问了下，说他们部门二面面试官下午就要走了，所以没办法安排二面面试了，所以这次就这样结束了。我心里很不甘心，想着马上要走了，我立马动身打的赶到了面试地点，找学长要了他leader（一面面试官）的电话，直接打电话过去，刚好他马上要离开，我请求他帮我安排二面，当时他说帮我问问，后来过了几分钟，我觉得不妥，又打电话过去确认，最后帮我将我的面试流程改成复试，说下午如果二面面试官有时间才面试，没有就没办法了，让我先等着。我已经很感激面试官帮我争取了这么个机会了，到了下午，面试官们开始面试了，我只能等着，想了想等着不是个事，我打听到了二面面试官的房间号，自己直接就上去了，在房外等着有机会就进去，运气还比较好，我前面就一个人面试，等着面试完，我直接进了面试房间，确认下是不是那个部门的面试官，然后说明了自己的来历，面试官同意让我面试了，随便聊聊之后，面试官说下午要赶着回去，今天就这样了，有机会就帮你看看。心里已经很满足了，能够争取到这么多已经不容易了，就带着一丝不甘心回去等了。</p>
<p>第四天（4.17）身边同学都面完hr了，我这边却没有任何音信，我也就不再关心这事了，知道自己没戏了。
后来知道4.21-4.24在长沙面试，买了个车票打算去长沙霸面。
到了4.20号，突然接到一个深圳的电话，居然是腾讯hr打来的，说要面试，简单的聊了20分钟，最后说等通知，聊完就把车票给退了。这真是又意外，又惊喜。
4.24号中午吃饭前收到腾讯hr电话，确认信息，给offer了。
这一路过来，心路历程各种坎坷，经历了大起大落，终于取得正果，坚持就是胜利。</p>
<p><strong>个人经历感觉，面试过程必备下面四个方面：</strong></p>
<p><strong>1.研究生一般会先问项目，所以对项目的描述一定要重点突出，细节部分要了如指掌，要将项目的背景提升到一个大的高度，最重要的是体现自己的工作量（包括遇到的困难，如何解决）。</strong>
<strong>2.基础知识要熟悉，这里说的并不是所有的基础知识，常问也就那么几个，为了面试针对性的复习就好了（后面有干货）。</strong>
<strong>3.手写代码技能，个人感觉要在代码中体现两点，边界条件考虑；能体现思路清晰，不一定每个函数都得实现，但算法思路一定要体现。另外还有必要的注释会帮助面试官理解你的思路。</strong>
<strong>4.最后来一碗鸡汤：对自己想要的东西，要不顾一切的去追求，不要轻易放弃。</strong></p>
<p>谢谢牛友听我啰嗦完，下面是本次腾讯面试的题目汇总，有些是身边同学提供的，没有给出答案，相信牛友们会自己找的。</p>
<p><strong>面试题汇总（干货）</strong></p>
<h4 id="计算机网络相关" tabindex="-1"><a class="header-anchor" href="#计算机网络相关" aria-hidden="true">#</a> <strong>计算机网络相关</strong></h4>
<h6 id="_1-tcp三次握手、四次握手" tabindex="-1"><a class="header-anchor" href="#_1-tcp三次握手、四次握手" aria-hidden="true">#</a> 1 TCP三次握手、四次握手</h6>
<h6 id="_2-tcp滑动窗口机制" tabindex="-1"><a class="header-anchor" href="#_2-tcp滑动窗口机制" aria-hidden="true">#</a> 2 TCP滑动窗口机制</h6>
<h6 id="_3-tcp拥塞控制机制" tabindex="-1"><a class="header-anchor" href="#_3-tcp拥塞控制机制" aria-hidden="true">#</a> 3 TCP拥塞控制机制</h6>
<h6 id="_4-socket模型" tabindex="-1"><a class="header-anchor" href="#_4-socket模型" aria-hidden="true">#</a> 4 socket模型</h6>
<p>Socket编程实践 --5种I/O模型</p>
<ol>
<li>
<p>阻塞I/O</p>
<p>说明1：当上层应用Application1调用recv系统调用时，如果对等方没有发送数据(Linux内核缓冲区中没有数据),上层应用Application1将阻塞[默认:被Linux内核阻塞)</p>
<p>说明2：当对等方发送了数据，Linux内核recv端缓冲区数据到达,内核会把数据copy给用户空间。然后上层应用Application1解除阻塞,执行下一步操作。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/1" alt="Socket编程实践 5种I/O模型"></p>
</li>
<li></li>
</ol>
<p>非阻塞I/O</p>
<p>说明1： 上层应用程序Application2将套接字设置成非阻塞模式。</p>
<p>说明2： 上层应用程序Application2轮询调用recv函数，接受数据。若缓冲区没有数据，上层程序Application2不会阻塞，recv返回值为-1，错误码是EWOULDBLOCK。</p>
<p>说明3：上层应用程序不断轮询有没有数据到来。造成上层应用忙等待。大量消耗CPU。很少直接用。应用范围小，一般和select IO复用配合使用。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/212" alt="Socket编程实践 5种I/O模型"></p>
<ol start="3">
<li></li>
</ol>
<p>I/O多路复用[重点]</p>
<p>说明1： 上层应用程序Application3调用select（该机制由Linux内核支持，避免了Application3忙等待），进行轮询文件描述符的状态变化。</p>
<p>说明2：当select管理的文件描述符没有数据（或者状态没有变化时），上层应用程序Application3也会阻塞。</p>
<p>说明3：好处是:select机制可以管理多个文件描述符</p>
<p>说明4：select可以看成一个管理者，用select来管理多个IO。</p>
<p>一旦检测到的一个I/O或者多个IO，有我们感兴事件发生时，select函数将返回，返回值为检测到的事件个数。进而可以利用select相关API函数，操作具体事件。</p>
<p>说明5：select函数可以设置等待时间，避免了上层应用程序Application3长期僵死。</p>
<p>说明6: 和阻塞IO模型相比，selectI/O复用模型相当于提前阻塞了。等到有数据到来时，再调用recv就不会发生阻塞。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/33233" alt="Socket编程实践 5种I/O模型"></p>
<ol start="4">
<li></li>
</ol>
<p>信号驱动I/O</p>
<p>说明1： 上层应用程序Application4建立SIGIO信号处理程序。当缓冲区有数据到来，内核会发送信号告诉上层应用程序Application4。</p>
<p>说明2：上层应用程序Application4接收到信号后，调用recv函数，因缓冲区有数据，recv函数一般不会阻塞。</p>
<p>说明3：这种用于模型用的比较少，属于典型的“拉模式(上层应用被动的去Linux内核空间中拉数据)”。即：上层应用Application4,需要调用recv函数把数据拉进来,会有时间延迟,我们无法避免在延迟时,会又有新的信号的产生。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/绕弯儿翁r" alt="Socket编程实践 5种I/O模型"></p>
<ol start="5">
<li></li>
</ol>
<p>异步I/O[重点]</p>
<p>说明1：上层应用程序Application5调用aio_read函数，同时提交一个应用层的缓冲区buf；调用完毕后，不会阻塞。上层应用程序Application5可以继续其他任务。</p>
<p>说明2：当TCP/IP协议缓冲区有数据时，Linux主动的把内核数据copy到用户空间。然后再给上层应用Application5发送信号；告诉Application5数据到来,需要处理！</p>
<p>说明3：典型的“推模式”</p>
<p>说明4： 效率最高的一种模式，上层应用程序Application5有异步处理的能力（在Linux内核的支持下,处理其他任务的同时，也可支持IO通讯）。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/二位" alt="Socket编程实践 5种I/O模型"></p>
<ol start="6">
<li>
<p>6</p>
<p>异步I/O是指什么？</p>
<p>上层应用程序Application5,在进行其他任务的同时时,也可以接收数据(接受异步通信事件)。而且上层应用程序并不需要调用recv函数</p>
</li>
</ol>
<p>另一种回答：</p>
<p>服务器程序，简单的说就是接收网络数据，处理后并返回结果数据。网络模块是其必不可少的部分，它本质上就是处理socket的五类事件:accept(客户端接入),connect(连接上服务器),read,write和error。socket接口有两种工作模式，一种是阻塞模式，一种是非阻塞模式。阻塞模式通常不会用，因为它有两个弊端：一是会阻塞线程，要想处理多个连接就必须要一个连接一个线程，这样线程开销大且复杂度高;二是read时，如果对端链路异常了，协议栈无法正常得到关闭通知，那么就永远阻塞住了。非阻塞模式现今有两类：一类是同步事件分离器，以select,epoll为代表;一类是异步io,以iocp为代表。在非阻塞模式的实践上，通常会使用reactor和proactor这两种设计模式。</p>
<hr>
<p><strong>涉及的系统接口</strong></p>
<p><strong><img src="@source/docs/theme-reco/img/大厂面试题/991936-20170205005607417-421393330.jpg" alt="img"></strong></p>
<hr>
<p><strong>reactor</strong></p>
<p>reactor由资源、事件处理器、资源管理器、调度器和同步事件分离器构成。资源是抽象出的能产生某些事件的对象，资源的种类表示着reactor功能的数量，在本文特指socket。事件处理器是资源产生事件时执行的函数。资源管理器是资源和事件处理器的容器。调度器是一个过程，调用同步事件分离器检测多个资源产生的事件，然后唤醒对应的事件处理器。同步事件分离器就是select,epoll等系统函数。reactor基于事件循环(调度器不断执行),能以单线程同步检测处理多路socket的事件。其输入就是资源和事件处理器，其输出为唤醒事件处理器。libev就是典型的实现。</p>
<p>其优点为：</p>
<ul>
<li>单线程处理多路socket,规范了一套处理流程。</li>
</ul>
<p>其缺点为：</p>
<ul>
<li>使用者的知识度没有减少，需要自己进行accept,read,write和错误判断。</li>
<li>假设为单线程环境，接口都不是线程安全的，在多线程项目中用起来不是很平滑。(与模式无关，libev等实现的缺陷)</li>
</ul>
<hr>
<p><strong>proactor</strong></p>
<p>它由资源、请求、请求完成处理器、资源管理器、调度器和异步处理器构成。资源同reactor。请求是对资源的实际操作，如read,write,accept,每个请求对应于一个异步处理器,请求不会立刻执行，而是先缓存在请求队列中，由调度器统一处理。请求完成处理器是请求完成后的回调函数。资源管理器是资源、请求和请求完成处理器的容器。调度器也是一个过程，从资源管理器中取出请求，调用相应的异步处理器，在异步处理完毕后调用请求完成处理器。异步处理器为操作系统提供的异步操作函数，如iocp，或者用线程去模拟。它也是基于事件循环，能以单线程并发处理多路socket的事件。其输入为资源和请求，其输出为请求完成通知。libuv就是典型的实现。</p>
<p>其优点为：</p>
<ul>
<li>单线程处理多路socket,规范了一套处理流程。</li>
<li>在操作系统支持真异步处理器时，有并发性。</li>
<li>使用者所需知识度低，不需要了解实际的事件处理。</li>
</ul>
<p>其缺点为：</p>
<ul>
<li>假设为单线程环境，接口都不是线程安全的，在多线程项目中用起来不是很平滑。(与模式无关，libuv等实现的缺陷)</li>
</ul>
<hr>
<p><strong>reactor和proactor的区别</strong></p>
<p>**
**reactor侧重的是告诉使用者a资源发生了b事件，怎么处理你看着办吧。proactor侧重的是告诉使用者，主人你对a资源进行的b请求完成了。以做软件项目为例子，在reactor时，它就是老板，你就是程序员，某天它对你下达一个开发x软件的任务，然后你就去调研需求，设计编码;在proactor时，它就是程序员，你就是老板，某天你对它下达一个开发x软件的任务，它开发完毕后告诉你，老板，x软件开发完毕。</p>
<p>从实现细节来看，reactor就是缺少异步处理器，如果内部为每种事件提供一个异步处理器，将输入的事件侦听变为提交请求，那么reactor就变为proactor了。</p>
<hr>
<p><strong>更好的proactor</strong></p>
<p>我希望所有的请求操作都是线程安全的，请求完成通知不是通过回调函数由内部发起，而是转化为一条消息，由外部主动获取。这样能更好的整合到项目中。它的接口是这样的：</p>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> 1 #ifndef SSOCKET_H
 2 #define SSOCKET_H
 3 
 4 #define    SS_MSG_ACCEPT 1 //客户端连接消息
 5 #define SS_MSG_OPEN 2 //连接服务器成功消息
 6 #define SS_MSG_DATA 3 //数据消息
 7 #define SS_MSG_CLOSE 4 //对方断开消息
 8 #define SS_MSG_ERROR 5 //错误消息，发生时，socket已经断开
 9 #define SS_MSG_FILE 6 //文件发送成功消息
10 
11 struct ss_message{
12     int type;
13     int id;
14     void *ud;
15     int size; //在type = SS_MSG_ACCEPT时，size为客户端的id;在SS_MSG_DATA时，size为data的大小
16 
17     //在SS_MSG_DATA时,data为数据;在SS_MSG_ACCEPT时,data为ip地址字符串;在SS_MSG_ERROR时，data为错误消息;在SS_MSG_FILE时,data为文件路径;
18     //SS_MSG_DATA,SS_MSG_ACCEPT,SS_MSG_FILE,data需要外部释放
19     char *data;
20 };
21 
22 int ss_init();
23 //获取一条网络消息，return >0有消息
24 int ss_poll(struct ss_message *m);
25 
26 //以下接口都是线程安全的
27 int ss_listen(const char *addr,int port,int bks,void *ud);
28 int ss_connect(const char *addr,int port,void *ud);
29 void ss_close(int id);
30 void ss_bind(int id,void *ud);
31 void ss_start(int id);
32 void ss_send(int id,char *data,int n);
33 int ss_send_file(int id,const char *path);
34 
35 #endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<p>socket句柄不暴露给外部，而是暴露内部的id，内部的id可以映射到实际的socket句柄，这样做更安全，通过id，内部可以检测该socket是否有效。</p>
<p>由外部循环调用ss_poll来获取请求完成通知。</p>
<p>ss_bind可以为id绑定一个用户数据，该id的请求完成消息里会带上该用户数据。</p>
<p>ss_start用于开始accept,read这些持续性请求，而不需要一次一次发起。</p>
<p>ss_send将要发送的数据送入id的发送队列，内部会保证有序的发送出去。</p>
<p>ss_send_file:因为内部有发送队列要缓存数据，所以并不适合文件这种大数据量的需求，该接口会使用sendfile要处理文件发送，从而避免缓存文件数据。</p>
<p>ss_close在关闭时会保证发送队列已经全部发送，否则不会关闭socket.</p>
<p>具体的实现放在<a href="https://github.com/watercoldyi/ssocket" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a>上。</p>
<hr>
<p><strong>在服务器程序上使用</strong></p>
<p>**
**多线程的服务器程序通常是这样的结构：</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/991936-20170205132726401-1022866096.png" alt="img"></p>
<p>网关用于提供入口点，会收到所有的socket消息，在accept时会创建一个agent,此后该socket的消息就会发送到该agent。agent负责解码网络数据，分解出一个个协议包，然后调用协议包处理器处理该包，再将处理的结果编码为协议包发送到该socket。因为proactor是单线程的，为了并发，一般有两种方式：</p>
<ol>
<li>agent解码出协议包后，用线程池来执行包处理逻辑。</li>
<li>agent缓存住网络数据，由线程池来调度agent,以一定的频率来进行解码、包处理。</li>
</ol>
<p>网关和agent的作用是隔离网络层，进行网络协议和内部协议的转换。agent除了转换协议，还可以保存中间状态，在有状态的协议中，agent和socket是一一配对的。在无状态的协议中，所有的socket可以共用一个agent。</p>
<h4 id="linux以及操作系统相关-重点" tabindex="-1"><a class="header-anchor" href="#linux以及操作系统相关-重点" aria-hidden="true">#</a> <strong>linux以及操作系统相关</strong> （重点）</h4>
<h6 id="_1-内存池实现" tabindex="-1"><a class="header-anchor" href="#_1-内存池实现" aria-hidden="true">#</a> 1 内存池实现</h6>
<h6 id="_2-进程间通信机制" tabindex="-1"><a class="header-anchor" href="#_2-进程间通信机制" aria-hidden="true">#</a> 2 进程间通信机制</h6>
<p>​		信号量，信号，消息队列，共享内存，事件</p>
<h6 id="_3-linux-ps命令-以及看内存当前使用状态的命令" tabindex="-1"><a class="header-anchor" href="#_3-linux-ps命令-以及看内存当前使用状态的命令" aria-hidden="true">#</a> 3 Linux ps命令，以及看内存当前使用状态的命令</h6>
<p>​		top命令</p>
<p>top命令是<a href="https://so.csdn.net/so/search?from=pc_blog_highlight&amp;q=Linux" target="_blank" rel="noopener noreferrer">Linux<ExternalLinkIcon/></a>下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，类似于Windows的任务管理器。</p>
<p>运行 top 命令后，CPU 使用状态会以全屏的方式显示，并且会处在对话的模式 -- 用基于 top 的命令，可以控制显示方式等等。退出 top 的命令为 q （在 top 运行中敲 q 键一次）。</p>
<p>​		<img src="@source/docs/theme-reco/img/大厂面试题/image-20211223102824368.png" alt="image-20211223102824368"></p>
<p>内容解释：</p>
<p>第一行（top）：</p>
<p>15:24:36 系统当前时刻</p>
<p>14 days 系统启动后到现在的运作时间</p>
<p>3 users 当前登录到系统的用户，更确切的说是登录到用户的终端数 -- 同一个用户同一时间对系统多个终端的连接将被视为多个用户连接到系统，这里的用户数也将表现为终端的数目</p>
<p>load average 当前系统负载的平均值，后面的三个值分别为1分钟前、5分钟前、15分钟前进程的平均数，一般的可以认为这个数值超过 CPU 数目时，CPU 将比较吃力的负载当前系统所包含的进程</p>
<p>第二行（Tasks）：</p>
<p>288 total 当前系统进程总数</p>
<p>1 running 当前运行中的进程数</p>
<p>287 sleeping 当前处于等待状态中的进程数</p>
<p>0 stoped 被停止的系统进程数</p>
<p>0 zombie 僵尸进程数</p>
<p>第三行（Cpus）：</p>
<p>7.3% us 用户空间占用CPU百分比
　　2.0% sy 内核空间占用CPU百分比
　　0.0% ni 用户进程空间内改变过优先级的进程占用CPU百分比
　　90.4% id 空闲CPU百分比
　　0.3% wa 等待输入输出的CPU时间百分比
　　0.0% hi
　　0.0% si</p>
<p>0.0% st</p>
<p>第四行（Mem）：</p>
<p>2042616 total 物理内存总量
　　1770116 used 使用的物理内存总量
　　272500 free 空闲内存总量
　　163912 buffers 用作内核缓存的内存量</p>
<p>第五行（Swap）：</p>
<p>表示类别同第四行（Mem），但此处反映着交换分区（Swap）的使用情况。通常，交换分区（Swap）被频繁使用的情况，将被视作物理内存不足而造成的。</p>
<p>2094076 total 交换区总量
　　45052 used 使用的交换区总量
　　2049024 free 空闲交换区总量
　　346624 cached 缓冲的交换区总量</p>
<p>最下部分的进程列表栏：</p>
<p>以 PID 区分的进程列表将根据所设定的画面更新时间定期的更新。通过 top 内部命令可以控制此处的显示方式:</p>
<p>PID：进程的ID
　　USER：进程所有者
　　PR：进程的优先级别，越小越优先被执行
　　NInice：值
　　VIRT：进程占用的虚拟内存
　　RES：进程占用的物理内存
　　SHR：进程使用的共享内存
　　S：进程的状态。S表示休眠，R表示正在运行，Z表示僵死状态，N表示该进程优先值为负数
　　%CPU：进程占用CPU的使用率
　　%MEM：进程使用的物理内存和总内存的百分比
　　TIME+：该进程启动后占用的总的CPU时间，即占用CPU使用时间的累加值。
　　COMMAND：进程启动命令名称</p>
<p>top 运行中可以通过 top 的内部命令对进程的显示方式进行控制。内部命令如下表：</p>
<p>s- 改变画面更新频率</p>
<p>l - 关闭或开启第一部分第一行 top 信息的表示</p>
<p>t - 关闭或开启第一部分第二行 Tasks 和第三行 Cpus 信息的表示</p>
<p>m - 关闭或开启第一部分第四行 Mem 和 第五行 Swap 信息的表示</p>
<p>N - 以 PID 的大小的顺序排列表示进程列表（第三部分后述）</p>
<p>P - 以 CPU 占用率大小的顺序排列进程列表 （第三部分后述）</p>
<p>M - 以内存占用率大小的顺序排列进程列表 （第三部分后述）</p>
<p>h - 显示帮助</p>
<p>n - 设置在进程列表所显示进程的数量</p>
<p>q - 退出 top</p>
<p>s -改变画面更新周期</p>
<p>ps命令</p>
<p>ps命令用于报告当前系统的进程状态。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/image-20211223102905875.png" alt="image-20211223102905875"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>F 代表这个程序的旗标 (flag)， 4 代表使用者为 super user；

　　S 代表这个程序的状态 (STAT)；

　　PID 程序的 ID ；

　　C CPU 使用的资源百分比

　　PRI 这个是 Priority (优先执行序) 的缩写；

　　NI 这个是 Nice 值。

　　ADDR 这个是 kernel function，指出该程序在内存的那个部分。如果是个 running # 的程序，一般就是『 - 』

　　SZ 使用掉的内存大小；

　　WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作；

　　TTY 登入者的终端机位置；

　　TIME 使用掉的 CPU 时间。

　　CMD 所下达的指令

{STAT状态：

R——Runnable（运行）：正在运行或在运行队列中等待
S——sleeping（中断）：休眠中，受阻，在等待某个条件的形成或接收到信号
D——uninterruptible sleep(不可中断)：收到信号不唤醒和不可运行，进程必须等待直到有中断发生
Z——zombie（僵死）：进程已终止，但进程描述还在，直到父进程调用wait4()系统调用后释放
T——traced or stoppd(停止)：进程收到SiGSTOP,SIGSTP,SIGTOU信号后停止运行

常用命令含义：

-a  显示所有终端机下执行的进程，除了阶段作业领导者之外。
 a  显示现行终端机下的所有进程，包括其他用户的进程。
-A  显示所有进程。
-c  显示CLS和PRI栏位。
 c  列出进程时，显示每个进程真正的指令名称，而不包含路径，参数或常驻服务的标示。
-C  &lt;指令名称> 　指定执行指令的名称，并列出该指令的进程的状况。
-d  显示所有进程，但不包括阶段作业领导者的进程。
-e  此参数的效果和指定"A"参数相同。
 e  列出进程时，显示每个进程所使用的环境变量。
-f   显示UID,PPIP,C与STIME栏位。
 f   用ASCII字符显示树状结构，表达进程间的相互关系。
-g  &lt;群组名称> 　此参数的效果和指定"-G"参数相同，当亦能使用阶段作业领导者的名称来指定。
 g  显示现行终端机下的所有进程，包括群组领导者的进程。
-G  &lt;群组识别码> 　列出属于该群组的进程的状况，也可使用群组名称来指定。
 h  不显示标题列。
-H  显示树状结构，表示进程间的相互关系。
-j或j 　采用工作控制的格式显示进程状况。
-l或l 　采用详细的格式来显示进程状况。
 L 　   列出栏位的相关信息。
-m或m 　显示所有的执行绪。
 n 　以数字来表示USER和WCHAN栏位。
-N 　显示所有的进程，除了执行ps指令终端机下的进程之外。
-p   &lt;进程识别码> 　指定进程识别码，并列出该进程的状况。
 p   &lt;进程识别码> 　此参数的效果和指定"-p"参数相同，只在列表格式方面稍有差异。
 r 　只列出现行终端机正在执行中的进程。
-s   &lt;阶段作业> 　指定阶段作业的进程识别码，并列出隶属该阶段作业的进程的状况。
 s 　采用进程信号的格式显示进程状况。
 S 　列出进程时，包括已中断的子进程资料。
-t   &lt;终端机编号> 　指定终端机编号，并列出属于该终端机的进程的状况。
 t   &lt;终端机编号> 　此参数的效果和指定"-t"参数相同，只在列表格式方面稍有差异。
-T 　显示现行终端机下的所有进程。
-u   &lt;用户识别码> 　此参数的效果和指定"-U"参数相同。
 u 　以用户为主的格式来显示进程状况。
-U   &lt;用户识别码> 　列出属于该用户的进程的状况，也可使用用户名称来指定。
 U   &lt;用户名称> 　列出属于该用户的进程的状况。
 v 　采用虚拟内存的格式显示进程状况。
-V或V 　显示版本信息。
-w或w 　采用宽阔的格式来显示进程状况。　
 x 　显示所有进程，不以终端机来区分。
 X 　采用旧式的Linux i386登陆格式显示进程状况。
 -y    配合参数"-l"使用时，不显示F(flag)栏位，并以RSS栏位取代ADDR栏位。

常用组合：
ps -ef
ps aux 或 ps -aux
ps auxc 或 ps -auxc

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-du-h和df-h区别" tabindex="-1"><a class="header-anchor" href="#_5-du-h和df-h区别" aria-hidden="true">#</a> 5.du -h和df -h区别：</h6>
<p>一 、du (disk usage): 显示每个文件和目录的磁盘使用空间，也就是文件的大小。
命令参数：</p>
<p>-k 、 -m  #显示目录中文件的大小，-k 单位KB，-m 单位MB</p>
<p>-h            #以K  M  G为单位显示，提高可读性（最常用的一个）</p>
<p>--max-depth=1  #显示层级</p>
<p>du -h --max-depth=1</p>
<p>二 、 df(disk free)：显示磁盘分区上可以使用的磁盘空间
-a    #查看全部文件系统，单位默认KB</p>
<p>-h    #使用-h选项以KB、MB、GB的单位来显示，可读性高~~~（最常用）</p>
<p>————————————————</p>
<h6 id="_4-进程与线程的区别-共享的数据" tabindex="-1"><a class="header-anchor" href="#_4-进程与线程的区别-共享的数据" aria-hidden="true">#</a> 4 进程与线程的区别，共享的数据</h6>
<h6 id="_5-进程的内存空间" tabindex="-1"><a class="header-anchor" href="#_5-进程的内存空间" aria-hidden="true">#</a> 5 进程的内存空间</h6>
<p>进程的内存空间布局</p>
<p>进程的内存布局在结构上是有规律的，具体来说对于 linux 系统上的进程，其内存空间一般可以粗略地分为以下几大段【1】，从高内存到低内存排列：</p>
<p>1、内核态内存空间，其大小一般比较固定（可以编译时调整），但 32 位系统和 64 位系统的值不一样。</p>
<p>2、用户态的堆栈，大小不固定，可以用 ulimit -s 进行调整，默认一般为 8M，从高地址向低地址增长。</p>
<p>3、mmap 区域，进程茫茫内存空间里的主要部分，既可以从高地址到低地址延伸(所谓 flexible layout)，也可以从低到高延伸(所谓 legacy layout)，看进程具体情况【2】【3】。</p>
<p>4、brk 区域，紧邻数据段(甚至贴着)，从低位向高位伸展，但它的大小主要取决于 mmap 如何增长，一般来说，即使是 32 位的进程以传统方式延伸，也有差不多 1 GB 的空间（准确地说是 TASK_SIZE/3 - 代码段数据段，参看 arch/x86/include/asm/processor.h 里的定义)【4】</p>
<p>5、数据段，主要是进程里初始化和未初始化的全局数据总和，当然还有编译器生成一些辅助数据结构等等)，大小取决于具体进程，其位置紧贴着代码段。</p>
<p>6、代码段，主要是进程的指令，包括用户代码和编译器生成的辅助代码，其大小取决于具体程序，但起始位置根据 32 位还是 64 位一般固定(-fPIC, -fPIE等除外【5】)。</p>
<p>以上各段(除了代码段数据段)其起始位置根据系统是否起用 randomize_va_space 一般稍有变化，各段之间因此可能有随机大小的间隔，千言万语不如一幅图（x86-32位下）：</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/978007-20170208113706760-1208301174.png" alt="img"></p>
<p>32位下bash进程的示例：</p>
<p><img src="@source/docs/theme-reco/img/大厂面试题/978007-20170208115019557-806960227.png" alt="img"></p>
<h4 id="算法与数据结构-手写代码实现" tabindex="-1"><a class="header-anchor" href="#算法与数据结构-手写代码实现" aria-hidden="true">#</a> <strong>算法与数据结构</strong>  <strong>（手写代码实现）</strong></h4>
<p>1 大整数加、减、乘、除、求模运算实现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>原理是把数字拆除单个字符，从个位开始相加减。
大整数相加
function plus($a, $b) {
	if (!is_string($a) || !is_string($b)) {
		echo '参数必须是字符串类型';
		return;
	}
	$len = strlen($a) > strlen($b) ?  strlen($a) : strlen($b);

	/// 反转字符串
	$ar = strrev($a);
	$br = strrev($b);

	$result = '';
	for($i = 0 ;$i &lt; $len; $i++) {
		//从个位开始加，缺的补0 
		$temp = (empty($ar[$i]) ? 0 : $ar[$i]) + (empty($br[$i]) ? 0 : $br[$i]);
		if (!empty($apendOne)) {
			//当后一位进1时加1
			$temp += 1;
		}
		
		$apendOne = false;
		if ($temp > 9) {
			/// 如果结果大于9 向前进1 减10 做标记
			$apendOne = true;
			$temp -= 10;
		}
		$result = $temp . $result;
	}
	
	return (string)$result;
}

echo plus("321312312312313123131231231232", "13") . '&lt;br>';
echo 321312312312313123131231231232 +13;

结果：
321312312312313123131231231245
3.2131231231231E+29


大整数相减
function minus($a, $b) {
	if (!is_string($a) || !is_string($b)) {
		echo '参数必须是字符串类型';
		return;
	}
	$len = strlen($a) > strlen($b) ?  strlen($a) : strlen($b);
	
	/// 反转字符串
	$ar = strrev($a);
	$br = strrev($b);

	$result = '';
	for($i = 0 ;$i &lt; $len; $i++) {
		//从个位开始减，缺的补0 
		$temp = (empty($ar[$i]) ? 0 : $ar[$i]) - (empty($br[$i]) ? 0 : $br[$i]);
		if (!empty($borrowOne)) {
			//当后一位借1时减1
			$temp -= 1;
		}
		
		$borrowOne = false;
		if ($temp &lt; 0) {
			/// 如果结果是负数 向前借1 加10 做标记
			$borrowOne = true;
			$temp += 10;
		}
		$result = $temp . $result;
	}
	
	return $result;
}

echo minus("321312312312313123131231231232", "13") . '&lt;br>';
echo 321312312312313123131231231232 -13;

结果：
321312312312313123131231231219
3.2131231231231E+29

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_1-php大数据之加减乘除" tabindex="-1"><a class="header-anchor" href="#_1-php大数据之加减乘除" aria-hidden="true">#</a> 1.PHP大数据之加减乘除</h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
//加法，注意(string)$a
$a=bcadd("111111111111111111","111111111111111110");
//$a=222222222222222221
 
//减法，注意(string)$a
$a=bccomp("111111111111111111","111111111111111110");
//$a=1
 
//乘法，注意(string)$a
$a=bcmul("111111111111111111","10");
//$a=1111111111111111110
 
//除法，注意(string)$a
$a=bcdiv("111111111111111111","1");
//$a=111111111111111111
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_1-php大数加减乘除" tabindex="-1"><a class="header-anchor" href="#_1-php大数加减乘除" aria-hidden="true">#</a> 1.PHP大数加减乘除</h6>
<p>出了bcxxx以外， 可以利用数组进行运算</p>
<p>需要说明的是</p>
<p>数组的每一个数对应真实十进制数的每一位，数组索引为0，表示个位，数组索引为1，表示十位，索引为2，表示百位，以此类推
此段代码是对C语言的改写，感谢开源的博客（很对不起那篇博主，我忘记那篇C语言的代码出自何处了）
代码需要改进的地方
对高位的0未做处理
处理效率低，拟之后用数组里面一个数表示多位十进制数优化
对于除法，商和余数目前是分开的，以后可以合并</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function cmp($a, $b)//比较两个数的大小
{
    $lena = count($a);
    $lenb = count($a);
    for(; $lena>0 &amp;&amp; $a[$lena-1]==0; $lena--);
    for(; $lenb>0 &amp;&amp; $b[$lenb-1]==0; $lenb--);
    if($lena&lt;$lenb)
        return -1;
    else if($lena==$lenb)
    {
        for($i=$lena-1; $i>=0; $i--)
            if($a[$i]>$b[$i])
                return 1;
            else
                if($a[$i]&lt;$b[$i])
                    return -1;
        return 0;
    }
    else return 1;
}

function sub($a,$b) {
    $lena = count($a);
    $lenb = count($b);
    for(; $a[$lena-1]==0 &amp;&amp; $lena>=0; $lena--);
    for(; $b[$lenb-1]==0 &amp;&amp; $lenb>=0; $lenb--);
    $flag=cmp($a,$b);
    if($flag==0) {
        $c[0]=0;
        return $c;
    }
    if($flag==1) {
        for ($i=0;$i&lt;$lenb;$i++) {
            if($a[$i]&lt;$b[$i]){
                $a[$i+1]--;
                $a[$i]+=10;
            }
            $a[$i]-=$b[$i];
        }
        while($lena>0&amp;&amp;$a[$lena-1]==0)$lena--;
        return $a;
    }
}



function numcpy($p, $q, $det) {
    $lenp = count($p);
    $lenq = count($q);
    for(; $p[$lenp-1]==0 &amp;&amp; $lenp-1>=0; $lenp--);
    for($i=0; $i&lt;$lenq; $i++)
        $q[$i] = 0;
    for ($i=0;$i&lt;$lenp;$i++) {
        $q[$i+$det]=$p[$i];
    }
    return $q;
}

function mod($a,$b) {
    //商的位数不超过被除数的位数－除数的位数+1
    $lenc = count($a)-count($b)+1;
    $tmp = $a;
    for($i=0;$i&lt;$lenc;$i++){
        $c[$i] = 0;
    }
    for ($i=$lenc-1;$i>=0;$i--)//每次循环确定某位商的的值，从高位开始?
    {
        $tmp = numcpy($b,$tmp, $i);
        while(cmp($a,$tmp)>=0) {
            $c[$i]++;
            $a = sub($a,$tmp);
        }
    }
    return $a;
}

function div($a,$b) {
    //商的位数不超过被除数的位数－除数的位数+1
    $lenc = count($a)-count($b)+1;
    $tmp = $a;
    for($i=0;$i&lt;$lenc;$i++){
        $c[$i] = 0;
    }
    for ($i=$lenc-1;$i>=0;$i--)//每次循环确定某位商的的值，从高位开始?
    {
        $tmp = numcpy($b,$tmp, $i);
        while(cmp($a,$tmp)>=0) {
            $c[$i]++;
            $a = sub($a,$tmp);
        }
    }
    return $c;
}


//大整形相加
function add($a, $b)
{
    $len_a = count($a);
    $len_b = count($b);
    if ($len_a > $len_b)
    {
        return add($b, $a);
    }
    else
    {
        $c = $b;
        for ($i=0; $i &lt; $len_a; $i++)
        {
            $c[$i] += $a[$i];
            $c[$i+1] += (int)($c[$i] / 10);
            $c[$i] %= 10;
        }
        return $c;
    }
}

//相乘后再取模
function mul($a, $b)
{
    $lena = count($a);
    $lenb = count($b);
    $lenc = $lena+$lenb;
    for($i=0;$i&lt;$lenc;$i++)
        $c[$i] = 0;
    for($i=0;$i&lt;$lena;$i++)
    {
        for($j=0;$j&lt;$lenb;$j++)
        {
            $c[$i+$j] += $a[$i] * $b[$j];
        }
    }
    for ($i=0; $i &lt; $lenc; $i++)
    {
        $c[$i+1] += (int)($c[$i] / 10);
        $c[$i] %= 10;
    }
    return $c;
}

function equals_zero($arr)
{
	$len = count($arr);
	for($i=0; $i&lt;$len; ++$i)
		if ($arr[$i])
			return 0;
	return 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-很多整数-找其中出现次数最多的那个数" tabindex="-1"><a class="header-anchor" href="#_2-很多整数-找其中出现次数最多的那个数" aria-hidden="true">#</a> 2 很多整数，找其中出现次数最多的那个数</h6>
<h6 id="_3-单链表翻转-两个指针如何实现-、查找、删除、插入以及双向链表、有序链表合并" tabindex="-1"><a class="header-anchor" href="#_3-单链表翻转-两个指针如何实现-、查找、删除、插入以及双向链表、有序链表合并" aria-hidden="true">#</a> 3 单链表翻转（两个指针如何实现）、查找、删除、插入以及双向链表、有序链表合并</h6>
<h6 id="_4-判断一个整数是否是2的整数次幂-n-n-1" tabindex="-1"><a class="header-anchor" href="#_4-判断一个整数是否是2的整数次幂-n-n-1" aria-hidden="true">#</a> 4 判断一个整数是否是2的整数次幂.(n&amp;(n-1))</h6>
<h6 id="_5-二分查找-注意边界条件" tabindex="-1"><a class="header-anchor" href="#_5-二分查找-注意边界条件" aria-hidden="true">#</a> 5 二分查找（注意边界条件）</h6>
<h6 id="_6-常见排序算法的实现以及稳定性-快排跟归并考的很多" tabindex="-1"><a class="header-anchor" href="#_6-常见排序算法的实现以及稳定性-快排跟归并考的很多" aria-hidden="true">#</a> 6 常见排序算法的实现以及稳定性（快排跟归并考的很多）</h6>
<h6 id="_7-字符串翻转-o-n-、匹配-kmp算法" tabindex="-1"><a class="header-anchor" href="#_7-字符串翻转-o-n-、匹配-kmp算法" aria-hidden="true">#</a> 7 字符串翻转（O(n)）、匹配（KMP算法）</h6>
<h6 id="_8-最长递增子序列-nlogn的算法" tabindex="-1"><a class="header-anchor" href="#_8-最长递增子序列-nlogn的算法" aria-hidden="true">#</a> 8 最长递增子序列（nlogn的算法）</h6>
<h6 id="_9-链表判断是否有环-环的入口-两个链表是否相交-快慢指针-。" tabindex="-1"><a class="header-anchor" href="#_9-链表判断是否有环-环的入口-两个链表是否相交-快慢指针-。" aria-hidden="true">#</a> 9 链表判断是否有环，环的入口，两个链表是否相交（快慢指针）。</h6>
<h6 id="_10-指定一个数组-求2个数的和等于指定的和-某一个数-如果是3-4-5-n个等于个的和-某一个数-呢-可以看作背包问题" tabindex="-1"><a class="header-anchor" href="#_10-指定一个数组-求2个数的和等于指定的和-某一个数-如果是3-4-5-n个等于个的和-某一个数-呢-可以看作背包问题" aria-hidden="true">#</a> 10 指定一个数组，求2个数的和等于指定的和（某一个数），如果是3,4,5，n个等于个的和（某一个数）呢？（可以看作背包问题）</h6>
<h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> <strong>其他</strong></h4>
<h6 id="_1-红黑树的性质以及插入和删除" tabindex="-1"><a class="header-anchor" href="#_1-红黑树的性质以及插入和删除" aria-hidden="true">#</a> 1 红黑树的性质以及插入和删除</h6>
<h6 id="_2-解析xml文件" tabindex="-1"><a class="header-anchor" href="#_2-解析xml文件" aria-hidden="true">#</a> 2 解析XML文件</h6>
<h6 id="_3-千万级的用户-提供一个服务-该服务有很多模块-现在有一个底层模块需要优化-问怎么实现-在不影响其他服务模块以及用户体验的情况下。-面ieg" tabindex="-1"><a class="header-anchor" href="#_3-千万级的用户-提供一个服务-该服务有很多模块-现在有一个底层模块需要优化-问怎么实现-在不影响其他服务模块以及用户体验的情况下。-面ieg" aria-hidden="true">#</a> 3 千万级的用户，提供一个服务，该服务有很多模块，现在有一个底层模块需要优化，问怎么实现，在不影响其他服务模块以及用户体验的情况下。（面IEG）</h6>
<h6 id="_4-卡特兰数以及公式推导-应多很多" tabindex="-1"><a class="header-anchor" href="#_4-卡特兰数以及公式推导-应多很多" aria-hidden="true">#</a> 4 卡特兰数以及公式推导（应多很多）</h6>
<h6 id="_5-未知大小的文件-翻转整个文件" tabindex="-1"><a class="header-anchor" href="#_5-未知大小的文件-翻转整个文件" aria-hidden="true">#</a> 5 未知大小的文件，翻转整个文件</h6>
<h6 id="_6-如果内存中有个cache存储qq号和最近登录时间问怎么样做hit和淘汰" tabindex="-1"><a class="header-anchor" href="#_6-如果内存中有个cache存储qq号和最近登录时间问怎么样做hit和淘汰" aria-hidden="true">#</a> 6 如果内存中有个cache存储qq号和最近登录时间问怎么样做hit和淘汰</h6>
<h6 id="_7-检测短信敏感词" tabindex="-1"><a class="header-anchor" href="#_7-检测短信敏感词" aria-hidden="true">#</a> 7 检测短信敏感词</h6>
<h6 id="_8-大数据问题" tabindex="-1"><a class="header-anchor" href="#_8-大数据问题" aria-hidden="true">#</a> 8 大数据问题</h6>
<h6 id="_9-c-、java和php有什么本质区别" tabindex="-1"><a class="header-anchor" href="#_9-c-、java和php有什么本质区别" aria-hidden="true">#</a> 9 C++、java和PHP有什么本质区别</h6>
<h2 id="七-新浪面试高级题-php" tabindex="-1"><a class="header-anchor" href="#七-新浪面试高级题-php" aria-hidden="true">#</a> 七.新浪面试高级题（PHP）</h2>
<h4 id="_1-echo-count-abc-输出什么" tabindex="-1"><a class="header-anchor" href="#_1-echo-count-abc-输出什么" aria-hidden="true">#</a> 1.echo count(&quot;abc&quot;); 输出什么？</h4>
<p>答：&quot;1&quot;</p>
<p>count — 计算数组中的单元数目或对象中的属性个数
int count ( mixed $var [, int $mode ] ), 如果 var 不是数组类型或者实现了 Countable 接口的对象，将返回 1，有一个例外，如果 var 是 NULL 则结果是 0。</p>
<p>对于对象，如果安装了 SPL，可以通过实现 Countable 接口来调用 count()。该接口只有一个方法 count()，此方法返回 count() 函数的返回值。</p>
<h4 id="_2-用php写出显示客户端ip与服务器ip的代码" tabindex="-1"><a class="header-anchor" href="#_2-用php写出显示客户端ip与服务器ip的代码" aria-hidden="true">#</a> 2.用PHP写出显示客户端IP与服务器IP的代码</h4>
<p>答：$_SERVER['SERVER_ADDR'] 服务器</p>
<p>$_SERVER['REMOTE_ADDR']客户端
function getOnlineIP(){
if (getenv('HTTP_CLIENT_IP')) return getenv('HTTP_CLIENT_IP');
if (getenv('HTTP_X_FORWARDED_FOR')) return getenv('HTTP_X_FORWARDED_FOR');
if ($_SERVER[&quot;REMOTE_ADDR&quot;]) return $_SERVER[&quot;REMOTE_ADDR&quot;];
if (!empty($HTTP_SERVER_VARS['REMOTE_ADDR'])) return $HTTP_SERVER_VARS['REMOTE_ADDR'];
}</p>
<h4 id="_3-error-reporting-2047-什么作用" tabindex="-1"><a class="header-anchor" href="#_3-error-reporting-2047-什么作用" aria-hidden="true">#</a> 3.error_reporting(2047)什么作用？</h4>
<p>答：PHP 显示所有错误 E_ALL</p>
<h4 id="_4-echo-print-和print-r-有什么区别" tabindex="-1"><a class="header-anchor" href="#_4-echo-print-和print-r-有什么区别" aria-hidden="true">#</a> 4.echo，print()和print_r()有什么区别？</h4>
<p>答：echo是一个语言结构，没有返回值。
print是一个函数，返回int类型的值。[只能打印int string]
print_r()是一个函数，返回bool类型值，按结构输出变量的值。打印关于变量的易于理解的信息[数组、对象等]</p>
<h4 id="_5-打开php-ini中的safe-mode-会影响哪些函数-至少说出6个。" tabindex="-1"><a class="header-anchor" href="#_5-打开php-ini中的safe-mode-会影响哪些函数-至少说出6个。" aria-hidden="true">#</a> 5.打开php.ini中的Safe_mode，会影响哪些函数？至少说出6个。</h4>
<p>答：1:用户输入输出函数(fopen() file() require(),只能用于调用这些函数有相同脚本的拥有者)
2:创建新文件(限制用户只在该用户拥有目录下创建文件)
3:用户调用popen() systen() exec()等脚本，只有脚本处在safe_mode_exec_dir配置指令指定的目 录中才可能
4:加强HTTP认证，认证脚本拥有者的UID的划入认证领域范围内，此外启用安全模式下，不会设置PHP_AUTH
5:mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同
6:受影响的函数变量以及配置命令达到40个</p>
<h4 id="_6-写个函数来解决多线程同时读写一个文件的问题。" tabindex="-1"><a class="header-anchor" href="#_6-写个函数来解决多线程同时读写一个文件的问题。" aria-hidden="true">#</a> 6.写个函数来解决多线程同时读写一个文件的问题。</h4>
<p>答：flock($hander,LOCK_EX); 这个可是内置函数啊，
这个尚待解决</p>
<h4 id="_7-请写一个函数验证电子邮件的格式是否正确-要求使用正则" tabindex="-1"><a class="header-anchor" href="#_7-请写一个函数验证电子邮件的格式是否正确-要求使用正则" aria-hidden="true">#</a> 7.请写一个函数验证电子邮件的格式是否正确（要求使用正则）</h4>
<p>答：preg_match('/^[\w-.]+@[\w-]+(.\w+)+$/', $email);</p>
<h4 id="_9-mysql数据库-一天一万条以上的增量-怎么优化" tabindex="-1"><a class="header-anchor" href="#_9-mysql数据库-一天一万条以上的增量-怎么优化" aria-hidden="true">#</a> 9.MySQL数据库，一天一万条以上的增量，怎么优化？</h4>
<p>答：我们曾做过短信SP的东西，有个短信发送的日志表，每天增量也很大，处理的方法是按月进行分表，因为是日志表，主要操作是insert操作，所以每月初自动生成新的数据表，数据插入到对应月份的那张数据表。[比如表明前缀是cdb_smslog 后面加200910 及时cdb_smslog_200910]
其他优化方式暂时想不起来，对于myISAM, 考虑容量的话，也有优化的方案</p>
<p>但是对于那种查询操作的表的话，我的思路是根据作者的发布时间存储到不同的表里面</p>
<p>所以对sina那种海量数据的处理很感兴趣，很好奇他们的处理方法，[以前同事说sina 的首页同时操作10多个数据库]</p>
<h4 id="_10-写出一种排序算法-要写出代码-并说出优化它的方法。" tabindex="-1"><a class="header-anchor" href="#_10-写出一种排序算法-要写出代码-并说出优化它的方法。" aria-hidden="true">#</a> 10.写出一种排序算法（要写出代码），并说出优化它的方法。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答：
//冒泡排序
function maopao($arr) {
	$count = count($arr);
	for($i=0; $i&lt;$count-1; ++$i) {
		for($j=0; $j&lt;$count-$i-1; ++$j) {
			if($arr[$j] > $arr[$j+1]) {
				$temp = $arr[$j];
				$arr[$j] = $arr[$j+1];
				$arr[$j+1] = $temp;
			}
		}
	}
	return $arr;
}

//顺序排序
function shunxu($arr) {
	$count = count($arr);
	for($i=0; $i&lt;$count-1; ++$i) {
		$p = $i;
		for($j=$i+1; $j&lt;$count; ++$j) {
			$p = $arr[$p] > $arr[$j] ? $j : $p;
		}
		if($p != $i) {
			$tvalue = $arr[$i];
			$arr[$i] = $arr[$p];
			$arr[$p] = $tvalue;
		}
	}
	return $arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-写个函数用来对二维数组排序。" tabindex="-1"><a class="header-anchor" href="#_11-写个函数用来对二维数组排序。" aria-hidden="true">#</a> 11.写个函数用来对二维数组排序。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function array_sort_by_any_row($array_name, $row_id, $order_type){
	$array_temp=array();
	
	foreach($array_name as $key=>$value){
		$array_temp[$key]=$value[$row_id];
	}

	if($order_type==="ASC"){ //顺序
		asort($array_temp);
	} else {
		arsort($array_temp);
	}

	$result_array=array();

	foreach($array_temp as $key=>$value){
		$result_array[$key]=$array_name[$key];
	}

	return $result_array;
}

$arr = array(
	array('num'=>5, 'value'=>6),
	array('num'=>2, 'value'=>39),
	array('num'=>36, 'value'=>29)
);

$sortarr = array_sort_by_any_row($arr, 'num', 'DESC');
print_r($sortarr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-写5个不同的自己的函数-来截取一个全路径的文件的扩展名-允许封装php库中已有的函数。" tabindex="-1"><a class="header-anchor" href="#_12-写5个不同的自己的函数-来截取一个全路径的文件的扩展名-允许封装php库中已有的函数。" aria-hidden="true">#</a> 12.写5个不同的自己的函数，来截取一个全路径的文件的扩展名，允许封装php库中已有的函数。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答：
$path = str_replace('\\', '/',__FILE__);
echo $path.'&lt;br />';
function extname1($path) {
	return strrchr($path, '.');
}

function extname2($path) {
	$position = strrpos($path, '.');
	return substr($path, $position);
}

function extname3($path) {
	$arr = explode('.', $path);
	return $arr[count($arr) - 1];
}

function extname4($path) {
	preg_match_all('/[\w\/\:\-]+\.([\w]+)$/', $path, $out);
	return $out[1][0];
}

function extname5($path) {
	return preg_replace('/^[^\.]+\.([\w]+)$/', '${1}', basename($path));
}

print_r(extname5($path));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目里的技术特点" tabindex="-1"><a class="header-anchor" href="#电商项目里的技术特点" aria-hidden="true">#</a> 电商项目里的技术特点?</h2>
<p>①技术更新较快：根据市场的需求，不断迭代更新.
②技术涉及面广：除了 PHP，还会用到 Python,GO 等其他的一些语言；数据库中 MySQL,nosql 是最频繁使用的（当然也有的公司会用 oracle，但是 PHP 一般都是以 MySQL 为主），服务器端使用 Linux（少部分公司会用到 Unix），还经常涉及到服务器安全、系统安全等安全方面的技术.
③分布式：从前的单一的机器上运行，现在是分散到不同机器上，最后将数据集中汇总。集中式向分布式进行发展是由需求来推动.
④高并发、集群（高可用集群）、负载均衡：由并发问题采用集群进行处理，其中，集群会涉及服务器的主从以及分布问题，使用负载均衡。(权重高低)高可用是对用户而言，用户的服务不中断(系统升级，服务不中断，公司电商系统的部分更新等)。
⑤海量数据：每年商家的各类活动（双 11，双 12 等等）订单量、浏览数、商品量、活动相关数据都将会超级大超级多（一般随同高并发出现）.
⑥业务复杂：电商业务并不简单：并不是商品展示出来后，简单的加入购物车后购买就完成了。除此以外后台业务逻辑是相当复杂，比如优惠(包邮、满减)，秒杀，抢购等.
⑦系统安全：系统上线必须通过系统安全部门审核通过，安全性问题正逐步的被放到台面上，而且很多企业对这块相当重视.</p>
<h4 id="系统功能" tabindex="-1"><a class="header-anchor" href="#系统功能" aria-hidden="true">#</a> 系统功能</h4>
<p>本商城系统是一个综合性的 B2C 平台，类似京东商城、天猫商城.</p>
<p><strong>用户：</strong></p>
<ol>
<li>用户可以通过注册成为商城的会员，登录商城</li>
<li>根据会员等级获得相应的优惠和特权</li>
<li>用户可以浏览商品，可以根据商品类型进行搜索</li>
<li>用户可以对购物车进行操作（增删改查商品的数量、商品详情等）</li>
<li>用户下订单、退订单，对订单的结算等</li>
</ol>
<p><strong>商家：</strong></p>
<ol>
<li>商家可以入驻商城，在商城里开店售卖自己的商品.</li>
<li>商家也有商家等级，如果在商城好评和商品销售量到达一定数量，可获得商家的一些特权</li>
<li>商家可以管理自己店铺的商品：上架下架商品；设定库存量；设定自己店铺的会员制度等</li>
</ol>
<h4 id="电商项目的思维图" tabindex="-1"><a class="header-anchor" href="#电商项目的思维图" aria-hidden="true">#</a> 电商项目的思维图</h4>
<p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/oFA4QOeEEpMHpdTR6F0vWANib9wNKCuafBwicAP2BxVCMpmicpNSuibZb77AbWYFenJAxPa8Zg0vGSRbXfshnricbrg/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片"></p>
<p>以上是大部分常用模块，如有其它模块自行补充。根据上图的体系架构，一层层的进行归纳记忆，从项目——模块——功能一点点的往深入熟悉记忆，并且加以理解.</p>
<h4 id="项目团队构成" tabindex="-1"><a class="header-anchor" href="#项目团队构成" aria-hidden="true">#</a> 项目团队构成</h4>
<p>产品经理：1 人，确定需求以及给出产品原型图。
项目经理：1 人，项目管理。
UI 设计  ：1 人, 制作项目原型效果图。
前端团队：1 人，根据产品经理给出的原型制作静态页面。
后端团队：3 人，实现产品功能。
运维    ：1 人 ，负责公司运维项目的系统。
测试团队：2 人，测试所有的功能。（小公司不会有测试）</p>
<p>(上述是以团队为单位，有的公司技术部不止一个团队，还有运维、UI、交互设计师等等，视情况而定）</p>
<h4 id="项目开发流程" tabindex="-1"><a class="header-anchor" href="#项目开发流程" aria-hidden="true">#</a> 项目开发流程</h4>
<p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/oFA4QOeEEpMHpdTR6F0vWANib9wNKCuafP1XhJLvib2UUe05Jrfdw5Gibc56KAmgNiaegE8RibKQmgp6WhI59q5YdzA/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片"></p>
<h4 id="涉及技术" tabindex="-1"><a class="header-anchor" href="#涉及技术" aria-hidden="true">#</a> 涉及技术</h4>
<p>**前端：**HTML CSS JS/JQ(Bootstrap、node.js、angluar.js 等可以了解下) AJAX
**PHP：**PHP+MySQL session 和 cookie Nosql（redis memcache mongdb）  接口技术 缓存技术 优化技术等等
**服务器方面：**Linux Nginx
**开发环境：**WAMP 或者是 LAMP 比较常见，除此以外还有 LNMP 等</p>
<p>（简历中或者是面试中尽量不要提及版本号，如果要写则需要把版本号对齐，否则不要写版本号)</p>
<h2 id="哈啰单车笔试题-php" tabindex="-1"><a class="header-anchor" href="#哈啰单车笔试题-php" aria-hidden="true">#</a> 哈啰单车笔试题(PHP)</h2>
<hr>
<h4 id="常见web攻击类型" tabindex="-1"><a class="header-anchor" href="#常见web攻击类型" aria-hidden="true">#</a> 常见Web攻击类型</h4>
<h4 id="java反序列化" tabindex="-1"><a class="header-anchor" href="#java反序列化" aria-hidden="true">#</a> Java反序列化</h4>
<h4 id="为什么要放置dmz-dmz放置什么设备" tabindex="-1"><a class="header-anchor" href="#为什么要放置dmz-dmz放置什么设备" aria-hidden="true">#</a> 为什么要放置DMZ，DMZ放置什么设备</h4>
<h4 id="php对象注入" tabindex="-1"><a class="header-anchor" href="#php对象注入" aria-hidden="true">#</a> PHP对象注入</h4>
<h4 id="php反序列化漏洞" tabindex="-1"><a class="header-anchor" href="#php反序列化漏洞" aria-hidden="true">#</a> php反序列化漏洞</h4>
<h4 id="文件包含是否可以读取文件内容-怎样读取" tabindex="-1"><a class="header-anchor" href="#文件包含是否可以读取文件内容-怎样读取" aria-hidden="true">#</a> 文件包含是否可以读取文件内容，怎样读取</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php://filter/read=convert.base64-encode/resource=filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="php伪协议读取。" tabindex="-1"><a class="header-anchor" href="#php伪协议读取。" aria-hidden="true">#</a> php伪协议读取。</h4>
<p>​		PHP 中使用 open_basedir 配置限制访问在指定的区域</p>
<p>​		过滤.（点）/（反斜杠）\（反斜杠）等特殊字符</p>
<p>​		尽量关闭allow_url_include配置</p>
<p>​		JSON hijack</p>
<p>​		CSRF的领域，只不过请求的是json数据包。</p>
<h4 id="算法对应数学难题" tabindex="-1"><a class="header-anchor" href="#算法对应数学难题" aria-hidden="true">#</a> 算法对应数学难题</h4>
<p>​		大数因子分解难解性 | RSA |
​		离散对数难解性 | ElGamal公钥加密算法 |
​		椭圆曲线离散对数难解性 | ECC算法 |</p>
<h4 id="什么是web指纹-如何自动化识别web指纹" tabindex="-1"><a class="header-anchor" href="#什么是web指纹-如何自动化识别web指纹" aria-hidden="true">#</a> 什么是Web指纹，如何自动化识别Web指纹</h4>
<h4 id="cc攻击-原理-预防" tabindex="-1"><a class="header-anchor" href="#cc攻击-原理-预防" aria-hidden="true">#</a> CC攻击，原理，预防</h4>
<p>​		攻击者借助代理服务器生成指向受害主机的合法请求，实现DDOS和伪装就叫：			CC(Challenge Collapsar)。</p>
<h2 id="微步在线-通用" tabindex="-1"><a class="header-anchor" href="#微步在线-通用" aria-hidden="true">#</a> 微步在线（通用）</h2>
<p><strong>薪资待遇：双休、不便透露</strong></p>
<p>**所在城市：**北京</p>
<p>**面试职位：**安全服务工程师</p>
<p>**面试过程：**公司主要是做威胁情报，情报分析，二进制那块的，是一家很有潜力的公司。校招跟着一起投的，大部分问题回答不完美，毕竟也是第一次，查漏补缺。</p>
<p><strong>面试官的问题：</strong></p>
<h4 id="_1-说一下快速排序和冒泡排序" tabindex="-1"><a class="header-anchor" href="#_1-说一下快速排序和冒泡排序" aria-hidden="true">#</a> 1.说一下快速排序和冒泡排序</h4>
<h4 id="_2-mysql主键和外键的区别" tabindex="-1"><a class="header-anchor" href="#_2-mysql主键和外键的区别" aria-hidden="true">#</a> 2.Mysql主键和外键的区别</h4>
<h4 id="_3-tcp三次握手四次挥手" tabindex="-1"><a class="header-anchor" href="#_3-tcp三次握手四次挥手" aria-hidden="true">#</a> 3.TCP三次握手四次挥手</h4>
<p><strong>三次握手：</strong>
（1）客户端首先发送一个带有SYN标志的数据包给服务端
（2）服务端接收到SYN包后，回传一个带有SYN/ACK标志的数据包传递确认信息，表示成功接收
（3）客户端收到SYN/ACK包后，再回传一个带有ACK标志的数据包，确认建立连接成功</p>
<p><strong>四次挥手：</strong>
（1）客户端发送一个FIN，用来关闭到服务端的数据传送，服务端进入终止等待1状态
（2）服务端收到FIN后，发送一个ACK给客户端，确认序号为收到序号+1，服务端进入关闭等待状态
（3）第三次挥手：服务端发送一个FIN，用来关闭到客户端的数据传送，服务端进入最后确认状态
（4）客户端收到FIN后，进入时间等待状态，发送一个ACK给服务端，确认序号为收到序号+1，服务端进入关闭状态，连接断开</p>
<h4 id="_4-tcp和udp区别" tabindex="-1"><a class="header-anchor" href="#_4-tcp和udp区别" aria-hidden="true">#</a> 4.TCP和UDP区别</h4>
<p>​		tcp面向连接，udp面向报文</p>
<p>​		tcp对系统资源的要求多，udp结构简单</p>
<p>​		tcp保证数据完整性和顺序，udp不保证</p>
<h4 id="_5-七层模型说一下" tabindex="-1"><a class="header-anchor" href="#_5-七层模型说一下" aria-hidden="true">#</a> 5.七层模型说一下</h4>
<h4 id="_6-网页状态码" tabindex="-1"><a class="header-anchor" href="#_6-网页状态码" aria-hidden="true">#</a> 6.网页状态码</h4>
<ul>
<li>
<ul>
<li>1** - 信息，服务器收到请求，需要请求者继续执行操作</li>
<li>2** - 成功</li>
<li>3** - 重定向</li>
<li>4** - 客户端错误，请求包含语法错误或无法完成请求</li>
<li>5** - 服务器错误，服务器在处理请求的过程中发生了错误</li>
</ul>
</li>
</ul>
<h4 id="_7-linux下rws权限中s是什么意思" tabindex="-1"><a class="header-anchor" href="#_7-linux下rws权限中s是什么意思" aria-hidden="true">#</a> 7.linux下rws权限中s是什么意思</h4>
<p>​		linux中的rws中的s为特殊权限,赋值方式同样和普通的文件操作是一样的,命令如下: chmod 1755 filename。</p>
<h4 id="_8-linux替换文本用什么-具体命令" tabindex="-1"><a class="header-anchor" href="#_8-linux替换文本用什么-具体命令" aria-hidden="true">#</a> 8.linux替换文本用什么，具体命令</h4>
<blockquote>
<p>我知道是用sed，但参数过于晦涩，不常用根本记不住。</p>
</blockquote>
<h4 id="_9-linux下last-lastb命令" tabindex="-1"><a class="header-anchor" href="#_9-linux下last-lastb命令" aria-hidden="true">#</a> 9.linux下last, lastb命令</h4>
<blockquote>
<p>知识盲区。感觉我不太会了，就开始问windows。</p>
</blockquote>
<h4 id="_10-windows-查看过登录日志么" tabindex="-1"><a class="header-anchor" href="#_10-windows-查看过登录日志么" aria-hidden="true">#</a> 10.Windows 查看过登录日志么</h4>
<h4 id="_11-windows-查看进程表-如何修改注册表" tabindex="-1"><a class="header-anchor" href="#_11-windows-查看进程表-如何修改注册表" aria-hidden="true">#</a> 11.Windows 查看进程表，如何修改注册表</h4>
<p>tasklist，netstat</p>
<h4 id="_12-python爬虫" tabindex="-1"><a class="header-anchor" href="#_12-python爬虫" aria-hidden="true">#</a> 12.python爬虫</h4>
<p>​	如果遇到验证码如何处理，常用第三方库说5个。</p>
<h4 id="_13-owasp-top10" tabindex="-1"><a class="header-anchor" href="#_13-owasp-top10" aria-hidden="true">#</a> 13.OWASP TOP10</h4>
<ul>
<li>
<ul>
<li>SQL注入防护方法</li>
<li>失效的身份认证和会话管理</li>
<li>跨站脚本攻击XSS</li>
<li>直接引用不安全的对象</li>
<li>安全配置错误</li>
<li>敏感信息泄露</li>
<li>缺少功能级的访问控制</li>
<li>跨站请求伪造CSRF</li>
<li>使用含有已知漏洞的组件</li>
<li>未验证的重定向和转发</li>
</ul>
</li>
<li>
<p>CSRF/SSRF</p>
</li>
<li>
<p>自己挖过的漏洞、修复方法。</p>
<p>特别强调了如何<strong>修复</strong>，<strong>具体</strong>？信息泄露，这不是开发该干的。</p>
</li>
<li>
<p>Apache解析漏洞</p>
</li>
<li>
<p>信息收集流程</p>
</li>
<li>
<p>内网渗透中如何进行主机探测</p>
</li>
</ul>
<blockquote>
<p>微步是我面的之中综合能力考察最高的，除了网络，计算机基础，Web安全，系统安全，渗透功底都考察到了，凉是必然的。</p>
<p>主要这个面试官从来也没正脸看过我，摄像头就是摆设，很不尊重人，体验很差，而且是从上午11点排队，也不是预约时间或者给定时间，方方面面给人体验很差。</p>
</blockquote>
<blockquote></blockquote>
</div></template>



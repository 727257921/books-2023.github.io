<template><div><h3 id="第一套" tabindex="-1"><a class="header-anchor" href="#第一套" aria-hidden="true">#</a> 第一套：</h3>
<p>2．以下程序近似地表示了一种在PHP4中无法实现的特性，这个特性叫（c　）</p>
<p>A．多重继承B．封装C．抽象方法D．private 方法E．函数重载</p>
<p>​		在面向对象编程语言中，抽象方法指一些只有方法声明，而没有具体方法体的方法。如果my_class是继承了父类，子类没有实现my_funct()方法，那么在调用子类的这个方法时会抛出一个错误。显然，这种方式简单地实现了类似抽象方法的功能。选项C正确。</p>
<p>4.关于MySQL索引的说法中，
500万数据的用户表user在性别字段sex上建立了索引，语句“select * fromuser where sex=1”并不会提速多少</p>
<p>​	一般情况下不鼓励使用like操作，类似地“like &quot;abc%&quot;”可以使用索引</p>
<p>​	对于需要写入数据的操作，例如DELETE、UPDATE以及INSERT操作，索引会降低它们的速度</p>
<p>​	唯一性索引列允许空值，而主键列不允许为空值，但除了这个不同外其他也并不是都相同的，如主键可以做外键，唯一索引不可以。</p>
<p>4.2	MySQL的索引都有哪些?</p>
<p>​	答案：MySQL的索引如下：</p>
<p>​		1）唯一索引。唯一索引避免了表中存在重复的数据，提高了检索速度。创建唯一索引的目的是避免表中插入重复的数据，从而提高表的查询速度。</p>
<p>​		2）普通索引。普通索引允许被索引的数据列包含重复的值。优点如下：①简化MySQL对这个索引的管理工作，使工作更有效率；②MySQL会对新插入的数据自动检测是否有重复的值。</p>
<p>​		3）主索引。即主键索引，关键字PRIMARY。</p>
<p>​		4）外键索引。外键约束。</p>
<p>​		5）复合索引。索引可以覆盖多列数据，例如，INDEX（column A,column B）。这种索引的特点是MySQL可以有选择地使用索引，例如，INDEX（A，B，C）可以当作A或（A，B）的索引来使用，但不能当作B或（B，C）来使用。</p>
<p>​		6）索引的长度。在为char和varchar类型的数据列定义索引时，可以把索引的长度限制为一个给定的字符个数，这个数字必须小于这个字段所允许的最大字符个数。</p>
<p>​		7）全文索引。针对内容开头的字符进行检索操作，如果检索的内容由多个字段构成，数据量很大，那么全文索引是必要的。注意，MySQL的InnoDB引擎不支持全文搜索索引。</p>
<p>6.下列关于全文检索技术的说法中：</p>
<p>​		Sphinx是一个基于SQL的全文检索引擎，可以结合MySQL、PostgreSQL做全文搜索，它可以提供比数据库本身更专业的搜索功能，使得应用程序更容易实现专业化的全文检索。</p>
<p>​		Solr是一个独立的企业级搜索应用服务器，用户可以通过HTTP请求访问它，它是采用Java5开发的，基于Lucene的全文搜索服务器，同时对其进行了扩展，提供了比Lucene更加丰富的查询语言，实现了可配置、可扩展并对查询性能进行了优化，并且提供了一个完善的功能管理界面，是一款非常优秀的全文搜索引擎。Solr比Lucene的搜索效率高很多，但是PHP调用Solr并不方便</p>
<p>​		MySQL中的MyISAM和InnoDB都是支持FULLTEXT全文索引的。全文搜索引擎可以在不使用模板匹配操作的情况下查找单词或短语。</p>
<p>​		Lucene附带的二元分词分析器CJKAnalyzer切词速度很快，能满足一般的全文检索需要</p>
<ol start="7">
<li>默认情况下，PHP 把会话（Session）数据存储在（　）里。</li>
</ol>
<p>​	默认情况下，PHP 把所有会话信息存储在/tmp文件夹中；在没有这个文件夹的操作系统中（例如 Windows），必须在 php.ini 中给 session.save_path 设置一个合适的位置（例如C:\Temp）。</p>
<p>8.虚拟机技术并不是不可用在大型网站上，因为它可以产生非常多的虚拟机将大型网站的流量进行分散，减少同一个服务器的访问压力，将压力分散到不同的虚拟机中，而虚拟机的性能问题是可以通过分配内存解决的。</p>
<p>9.关于nosql的说法：</p>
<p>​		MongoDB支持CAP定理中的AP，MySQL支持CAP中的CA，全部都支持不可能存在</p>
<p>​		Memcache既支持TCP协议，也支持UDP协议，可以把PHP的Session存放到Memcache中</p>
<p>​		MongoDB不用先创建Collection的结构就可以直接插入数据，目前MongoDB不支持事务</p>
<p>​		Redis目前是可以支持简单的事务的，由于Redis是单线程来处理所有client的请求，一般情况下，Redis在接收到一个client发来的命令后会立即处理并返回处理结果，但是当一个client在一个连接中发出multi命令，这个连接会进入一个事务上下文，该连接后续的命令并不是立即执行，而是先放到一个队列中。当此连接收到exec命令后，Redis会顺序地执行队列中的所有命令，并将所有命令的运行结果打包到一起返回给client，然后此连接结束事务上下文。</p>
<p>​		get方法是通过URL路径传递数据，而URL的长度和大小有限制，不能进行大量数据的发送，而post可以发送大量数据。</p>
<p>二.</p>
<p>1．在HTTP 1.0中，状态码 401的含义是______<strong>客户端在授权头信息中没有有效的身份信息时访问受到密码保护的页面；</strong>__________；如果返回“找不到文件”的提示，则可用 header 函数，其语句为________header(&quot;HTTP/1.0 404 Not Found&quot;);________。</p>
<p>2．以Apache模块的方式安装PHP，在文件http.conf中首先要用语句_______动态装载PHP模块，然后用语句_______使得Apache把所有扩展名为PHP的文件都作为PHP脚本处理。</p>
<p>​		答案：①LoadModule；②AddType application/x-httpd-php .php。</p>
<p>​		分析：在用Apache模块的方式安装PHP时，需要先在http.conf配置文件中加入LoadModule说明加载PHP模块的功能。保存好配置文件后，还需要使用AddTypeapplication/x-httpd-php .php指明Apache对PHP文件的支持。</p>
<p>3.可以执行系统命令的函数有：①system()函数可以执行外部程序并显示输出；②exec()函数可以执行一个外部程序；③popen()函数可以打开进程文件指针。</p>
<p>4.Cookie 存储在_____________，Session 是将数据存储在__________,会话的生命周期默认为__________。</p>
<p>​	答案：客户端；服务端；1440s。</p>
<p>​	分析：Cookie存储在客户端，而Session存储在服务器端，PHP中的Session默认有效期是1440s（24min），即用户在24min内没有刷新，当前Session就会失效。如果用户关闭了浏览器，Session也会消失。</p>
<p>5.分析：include和require引用文件的区别在于，当引用文件出错时，include会产生一个警告并继续执行后面的代码，而require则提示是致命错误，并停止继续执行。为了避免多次包含同一个文件，可以使用require_once()或include_once()代替它们。</p>
<p>1．面向对象的特征是什么?</p>
<p>​	1）抽象：抽象就是忽略一个主体中与当前目标无关的那些方面，以便更充分地注意与当前目标有关的方面。抽象并不打算了解全部问题，而只是选择其中的一部分，暂时不用部分细节。抽象包括两个方面，一是过程抽象，二是数据抽象。</p>
<p>​	2）继承：继承是一种联结类的层次模型，并且允许和鼓励类的重用，它提供了一种明确表述共性的方法。对象的一个新类可以从现有的类中派生，这个过程称为类继承。新类继承了原始类的特性，新类称为原始类的派生类（子类），而原始类称为新类的基类（父类）。派生类可以从它的基类那里继承方法和实例变量，并且子类可以修改或增加新的方法使之更适合特殊的需要。</p>
<p>​	3）封装：封装是指将客观事物抽象成类，每个类对自身的数据和方法实行保护。类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的信息进行隐藏。</p>
<p>​	4）多态：多态是指允许不同类的对象对同一消息做出响应。多态包括参数化多态和包含多态。多态性语言具有灵活、抽象、行为共享、代码共享的优势，很好地解决了应用程序函数同名问题。</p>
<p>2．写出3种以上MySQL数据库存储引擎的名称（提示：不区分大小写）。</p>
<p>​	答案：MyISAM、InnoDB、DBD(Berkeley DB)、Merge、Memory(Heap)、Example、Federated等。以下为4种常用数据库存储引擎的简单介绍。</p>
<p>MyISAM：默认的MySQL插件式存储引擎。如果应用是以读写和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么可选用此种存储引擎。</p>
<p>InnoDB：用于事务处理应用程序，支持外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据一致性，数据操作除了插入和查询以外，还包括很多的更新、删除操作，那么InnoDB比较合适。InnoDB存储引擎除了能有效地降低由于删除和更新操作导致的锁定，还可以确保事务的完整提交和回滚。</p>
<p>Memory：将所有的数据保存在RAM中，在需要快速定位记录和其他类似数据的环境下，可提供极快的访问。Memory的缺陷首先是对表的大小有限制，太大的表无法缓存在内存中，其次要确保表数据可以恢复，数据库异常终止后表中的数据是可以恢复的。Memory表通常用于更新不太频繁的小表，从而快速得到访问结果。</p>
<p>Merge：用于将一系列等同的MyISAM表以逻辑方式组合在一起，并作为一个对象引用它们。Merge表的优点在于可以突破对单个MyISAM表大小的限制，并且将不同的表分布在多个磁盘上，可以有效地改善Merge表的访问效率。</p>
<p>3．如何优化MySQL数据库?</p>
<p>​	1）库表设计方面。设计结构良好的数据库表，考虑良好的范式规则，避免join操作，提高查询效率。</p>
<p>​	2）系统架构设计方面。散列方法，把海量数据散列到不同的表中，进行快慢表设计，进行服务器主从设计。</p>
<p>​	3）索引的使用。给所有经常查询的字段增加适当的索引。</p>
<p>​	4）优化SQL语句，减少distinct、group、join等语句的操作。</p>
<p>3.2	优化MySQL数据库的方法有哪些?</p>
<p>​		1）选取最适用的字段属性，尽可能减少定义字段长度，尽量把字段设置为NOTNULL，例如‘省份，性别’，最好设置为ENUM。</p>
<p>​		2）使用连接（JOIN）来代替子查询。① 删除没有任何订单的客户：DELETE FROM customer WHERE customeridNOT in(SELECT customerid FROM orderinfo)。② 提取所有没有订单的客户：SELECT * FROM customer WHERE customeridNOT in(SELECT customerid FROM orderinfo)。③ 提高②的速度优化：SELECT * FROM customer c LEFT JOIN orderidinfo iON c.customerid = i.customerid WHERE i.customerid IS NULL。</p>
<p>​		3）使用联合（UNION）查询来代替手动创建的临时表。</p>
<p>​			select name from  'table'	Union 	select 	username 	from 	'table2'</p>
<p>​		4）事务处理。保证数据完整性，例如添加和修改，两者成立则都执行，一者失败则都失败。</p>
<p>​		5）锁定表，优化事务处理。① 用一个 SELECT 语句取出初始数据，通过一些计算，用 UPDATE 语句将新值更新到表中。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014144922288.png" alt="image-20211014144922288" style="zoom: 33%;" />		
<p>4．程序、进程与线程的区别是什么?</p>
<p><img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211011153951450.png" alt="image-20211011153951450"></p>
<p>5．PHP的垃圾回收机制是什么?</p>
<p>​		PHP可以自动进行内存管理，清除不再需要的对象。PHP使用了引用计数的垃圾回收机制。每个对象都内含一个引用计数器，当reference连接到对象时，计数器加1。当reference离开作用域或被设置为NULL时，计算器减1。当某个对象的引用计数器为0时，则PHP认为不再需要使用这个对象，释放其所占的内存空间。</p>
<p>1．如何快速下载一个远程HTTP服务器上的图片文件到本地?</p>
<p>​		先通过fopen()函数打开要下载的图片路径，然后使用fread()函数读取图片，再在本地打开指定存储图片的目录，将读取到的图片信息写入该目录内的文件中，即可远程下载一个图片到本地。实现代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$file = "http://www.baidu.com/images/1.png";
$fp = fopne($file,'rb');
$img = fread($fp,100000);
$dir = './';
$local = fopen($dir.'/'.basename($file),'w');
fwrite($local,$img);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 抓取远程图片到本地，会用到什么函数?这些函数有什么作用?</p>
<p>​		答案：fsockopen、fread、fwrite和fclose。由于需要抓取远程图片，因此需要使用fsocketopen来打开一个网络连接，然后可以通过这个网络连接（打开的地址为这个网络上的图片地址），打开成功后会返回一个文件句柄，然后可以使用fread函数读取文件内容，使用fwrite函数把文件内容写到本地（实现了把远程图片抓取到本地的功能），最后使用fclose关闭这个连接。</p>
<p>2．输出用户的IP地址，并且判断用户的IP地址是否在192.168.1.100～192.168.1.150之间。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ip = getenv("REMOTE_ADDR");
$nip = str_replace('.','',$ip);
if($nip>1921681100 &amp;&amp; $nip&lt;1921681150){
	echo $ip.'在192.168.1.100--192.168.1.150之间'；
}else{
	echo $ip.'不在192.168.1.100--192.168.1.150之间'；
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3．请写一个函数验证电子邮件的格式是否正确。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function checkEmail($mail){
	$pregEmail = "/^[0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/i";
	return pref_match($presEmail,$mail);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：邮箱首尾两个斜杠/是正则表达式的限定符，这是Perl正则的标准，而PHP与Perl有相同的正则规范。两个斜杠之间表示的是正则内容，后面的i表示忽略大小写。这个正则表达式表示的含义如下：</p>
<p>1）必须以（[0-9A-Za-z\-_\.]+)开头，也就是说，邮件地址以多个字母、数组、“-”或“.”开头。</p>
<p>2）紧接着是字符“@”。</p>
<p>3）然后是多个字母或数字的字符串，接着是一个字符“.”和两个或三个字母；后面一部分可有可无，即一个“.”后面跟着两个字母。</p>
<p>4）邮件的结束符是满足3）的字符串。</p>
<p>4．对于用户输入一串字符串$string，要求$string中只能包含大于0的数字和英文逗号，请用正则表达式验证，对于不符合要求的$string返回出错信息。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function check($str){
	if(preg_match("/^([1-9,])+$/",$str)){
		return true;
	}

	return false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二套" tabindex="-1"><a class="header-anchor" href="#第二套" aria-hidden="true">#</a> 第二套：</h3>
<p>1.可以用于服务器共享session的方式有</p>
<p>​	分析：共享Session的方式主要有以下几种：</p>
<p>​	1）基于NFS的Session共享。NFS（Network File System）最早由Sun公司为解决Unix网络主机间的目录共享而研发。仅需将共享目录服务器mount到其他服务器的本地Session目录即可。</p>
<p>​	2）基于数据库的Session共享。</p>
<p>​	3）基于Cookie的Session共享。它的原理是将全站用户的Session信息加密、序列化后以Cookie的方式，统一种植在根域名下（如.host.com），利用浏览器访问该根域名下的所有二级域名站点时，会传递与之域名对应的所有Cookie内容的特性，从而实现用户的Cookie化Session 在多服务间的共享访问。</p>
<p>​	4）基于缓存（Memcache）的Session共享。Memcache是一款基于Libevent多路异步I/O技术的内存共享系统，简单的Key + Value数据存储模式使得代码小巧且高效，因此在并发处理能力上占据了绝对优势。</p>
<p><img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211011170953115.png" alt="image-20211011170953115"></p>
<p>分析：strcmp($str1,$str2)函数的功能是比较两个字符串的大小，如果$str1==$str2，则返回0；如果$str1 &gt;$str2，则返回值大于0，具体值为1乘上两个字符串相比不相同的字符个数；如果$str1 &lt;$str2，则返回值小于0，具体值为-1乘上两个字符串相比不相同的字符个数。本题中， $str =&quot;LAMP&quot;，$str1 =&quot;LAMPBrother&quot;，两个字符串不相同的字符有7个，且$str &lt; $str2，所以，返回值为负数，即(-1*7)= -7。在switch语句的各类case语句中，匹配到“-7”</p>
<p>8.session默认是在文件系统中存着：</p>
<p>分析：默认情况下，php.ini中设置的Session保存方式是files，Session文件保存的目录由 session. save_path指定，文件的前缀为sess_，后跟Session ID，例如sess_c62665af28a8b19c0fe11afe3b59b41b。文件中的数据即是序列化之后的Session数据。当访问量大的时候，产生的Session文件会比较多，在这种情况下，可以设置分级目录对Session文件进行保存，从而提高性能，设置方法为session.save_path=&quot;N;/save_path&quot;，其中，N为分级的级数，save_path为开始目录。</p>
<p>1.getdate()函数返回的是一个数组。</p>
<p>分析：getdate()函数返回指定时间的时间戳或当前时间的时间格式，它返回的是一个数组。该数组中包含的内容有秒、分、小时、一个月中的第几天、一周中的某一天、月、年、一年中的某一天、星期几的名称、月份的名称、自 Unix 纪元以来经过的秒数等。</p>
<p>2.程序echo strtotime (&quot;November 11,1952&quot;);在 Windows 系统上输出的是__________。</p>
<p>​	答案：-540892800。</p>
<p>​	分析：strtotime()是将时间转换成时间戳，但是时间戳是以1970年1月1日00：00：00时间点开始进行计算的，而题目中的代码是将1952年11月11日转换成时间戳，但该时间点并不在时间戳范围内，不能转换成时间戳，所以结果输出为-540892800。</p>
<h4 id="_1-组合与继承的区别是什么" tabindex="-1"><a class="header-anchor" href="#_1-组合与继承的区别是什么" aria-hidden="true">#</a> 1．组合与继承的区别是什么?</h4>
<p>​	答案：组合和继承是面向对象中两种代码复用的方式。组合是指在新类里面引用原有类的对象，重复利用已有类的功能。继承是面向对象的主要特性之一，它允许设计人员根据其他类的实现来定义一个类的实现。组合和继承都允许在新的类中设置子对象（subobject），只是组合是显式的，而继承则是隐式的。组合和继承存在着对应关系：组合中的整体类和继承中的子类对应，组合中的局部类和继承中的父类对应。</p>
<p>​	二者的区别在哪里呢?首先分析一个实例。Car表示汽车对象，Vehicle表示交通工具对象，Tire表示轮胎对象。三者的类关系如下图所示。</p>
<p>​	<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011172258003.png" alt="image-20211011172258003" style="zoom:50%;" /></p>
<p>​	从上图中可以看出，Car是Vehicle的一种，因此是一种继承关系（又被称为is-a关系）；而Car包含了多个Tire，因此是一种组合关系（又被称为has-a关系）。其实现方式如下：</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011172352007.png" alt="image-20211011172352007" style="zoom:50%;" />
<h4 id="_2-请简单介绍什么是视图。" tabindex="-1"><a class="header-anchor" href="#_2-请简单介绍什么是视图。" aria-hidden="true">#</a> 2．请简单介绍什么是视图。</h4>
<p>答案：视图是从数据库的基本表中选取出来的数据组成的逻辑窗口，它不同于基本表，是一个虚表，在数据库中，存放的只是视图的定义而已，而不存放视图包含的数据项，这些项目仍然存放在原来的基本表结构中。</p>
<p>视图的作用非常多，主要有以下几点：首先，可以简化数据查询语句；其次，可以使用户从多角度看待同一数据；再次，通过引入视图，可以提高数据的安全性；最后，视图提供了一定程度的逻辑独立性等。</p>
<p>通过引入视图机制，用户可以将注意力集中在其关心的数据上而非全部数据，这样就大大提高了用户效率与用户满意度，而且如果这些数据来源于多个基本表结构，或者数据不仅来自于基本表结构，还有一部分数据来源于其他视图，并且搜索条件又比较复杂，那么需要编写的查询语句就会比较烦琐，此时定义视图就可以使数据的查询语句变得简单可行。定义视图可以将表与表之间的复杂操作连接和搜索条件对用户不可见，用户只需要简单地对一个视图进行查询即可，所以增加了数据的安全性，但是不能提高查询的效率。</p>
<h4 id="_3-memcache和memcached有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-memcache和memcached有什么区别" aria-hidden="true">#</a> 3．Memcache和Memcached有什么区别?</h4>
<p>答案：Memcache是一个自由开放的高性能内存对象缓存系统，可用于加速动态web应用程序，减轻数据库负载。Memcache是这个软件项目的一般叫法，但项目的主程序文件叫Memcached.exe，在服务端主要靠这个守护进程管理HashTable。因为这个进程名可以把这个软件系统叫Memcached。</p>
<p>PHP对该软件存在两个pecl扩展，分别是Memcache和Memcached。它们的区别如下：</p>
<p>1）Memcache扩展是完全在PHP框架内开发的，而Memcached扩展是使用libMemcached开发的，在方法上Memcached的方法比Memcache多，但是用法方式都差不多。</p>
<p>2）Memcached因为使用了libMemcached所以只支持OO接口，而Memcache是OO和非OO两套接口并存的。</p>
<p>3）Memcached是支持Binary Protocol的，而Memcache不支持，所以Memcached的性能更高。</p>
<h4 id="_4-utf8编码需要注意哪些问题" tabindex="-1"><a class="header-anchor" href="#_4-utf8编码需要注意哪些问题" aria-hidden="true">#</a> 4．utf8编码需要注意哪些问题?</h4>
<p>答案：网站存在十几种不同的编码，如果编码不同，那么网页内容显示就会出现乱码。如果网站的编码为utf-8，那么相关的文件和数据库都必须使用utf-8编码，否则网页就会出现乱码。</p>
<p>具体需要注意utf8编码的文件有：</p>
<p>1）数据库需要用utf8编码，包括创建的数据库和表都必须使用utf8编码。</p>
<p>2）PHP代码连接数据库的时候，也必须指定所使用的编码为utf-8。</p>
<p>3）网站中所有文件都使用utf-8编码，在php文件中指定头部编码为utf-8，即header （&quot;content-type:text/html;charset=utf-8&quot;)，html文件也需要指定utf-8编码，即utf-8 header（&quot;content -type:text/html;charset=utf-8&quot;)。</p>
<h4 id="_5-什么是单例模式" tabindex="-1"><a class="header-anchor" href="#_5-什么是单例模式" aria-hidden="true">#</a> 5．什么是单例模式?</h4>
<p>​	答案：单例模式是在应用程序中最多只能拥有一个该类的实例存在，一旦创建就会一直在内存中。</p>
<p>​	由于单例模式的设定，所以它常应用于数据库类设计，可以保证只连接一次数据库。单例类的特点如下：</p>
<p>1）单例类不能直接实例化创建，只能由类本身实例化。因此，构造函数必须标记为private，从而防止类被实例化。</p>
<p>2）需要保证一个能访问到的实例公开的静态方法和一个私有静态成员变量来保存类实例。</p>
<p>3）类中通常需要有一个空的私有__clone()方法防止别人对单例类进行实例复制。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011173430613.png" alt="image-20211011173430613" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011180116724.png" alt="image-20211011180116724" style="zoom:50%;" />
<h4 id="_2-产生的随机数是整数1-10的均匀分布" tabindex="-1"><a class="header-anchor" href="#_2-产生的随机数是整数1-10的均匀分布" aria-hidden="true">#</a> 2．产生的随机数是整数1～10的均匀分布</h4>
<p>已知随机数生成函数rand7()能产生的随机数是整数1～7的均匀分布，如何构造rand10()函数，使其产生的随机数是整数1～10的均匀分布。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011180405906.png" alt="image-20211011180405906" style="zoom:50%;" />
<p>分析：要保证rand10()产生的随机数是整数1～10的均匀分布，可以构造一个1～10<em>n的均匀分布的随机整数区间（n为任何正整数）。假设x是这个1～10</em>n区间上的一个随机数，那么x%10+1就是均匀分布在1～10区间上的整数。</p>
<p>根据题意，rand7()函数返回1～7的随机数，那么rand7()-1则得到一个离散整数集合，该集合为{0，1，2，3，4，5，6}，集合中每个整数的出现概率都为1/7。那么(rand7()-1)<em>7得到另一个离散整数集合A，该集合元素为7的整数倍，即A={0，7，14，21，28，35，42}，其中，每个整数的出现概率也都为1/7。而由于rand7()得到的集合B={1，2，3，4，5，6，7}，其中每个整数出现的概率也为1/7。显然集合A与集合B中任何两个元素和组合可以与1～49之间的一个整数一一对应，即1～49之间的任何一个数，可以唯一地确定A和B中两个元素的一种组合方式，这个结论反过来也成立。由于集合A和集合B中元素可以看成是独立事件，根据独立事件的概率公式P(AB)=P(A)P(B)，得到每个组合的概率是1/7</em>1/7=1/49。因此，(rand7()-1)*7+rand7()生成的整数均匀分布在1～49之间，而且，每个数的概率都是1/49。</p>
<p>所以，(rand7()-1)*7+rand7()可以构造出均匀分布在1～49的随机数，为了将49种组合映射为1～10之间的10种随机数，就需要进行截断，即将41～49这样的随机数剔除掉，得到的数1～40仍然是均匀分布在1～40的，这是因为每个数都可以看成一个独立事件。由1～40区间上的一个随机数x，可以得到x%10+1就是均匀分布在1～10区间上的整数。</p>
<h4 id="_3-10个房间里放着随机数量的金币" tabindex="-1"><a class="header-anchor" href="#_3-10个房间里放着随机数量的金币" aria-hidden="true">#</a> 3.10个房间里放着随机数量的金币</h4>
<p>10个房间里放着随机数量的金币。每个房间只能进入一次，并只能在一个房间中拿金币。一个人采取如下策略：前4个房间只看不拿。随后的房间只要看到比前4个房间都多的金币数，就拿；否则就拿最后一个房间的金币。编程计算这种策略拿到最多金币的概率。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011181139368.png" alt="image-20211011181139368" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011181152058.png" alt="image-20211011181152058" style="zoom:50%;" />
<p>结果为：0.421</p>
<p>运行结果与金币个数的选择以及模拟的次数都有关系，而且由于是个随机问题，因此同样的程序每次的运行结果也会不同。</p>
<p>分析：这道题是要求一个概率的问题，由于10个房间里放的金币的数量是随机的，因此，在编程实现的时候首先需要生成10个随机数来模拟10个房间里金币的数量。然后判断通过这种策略是否能拿到最多的金币。如果仅仅通过一次模拟来求拿到最多金币的概率显然是不准确的，那么就需要进行多次模拟，通过记录模拟的次数m，拿到最多金币的次数n，从而可以计算出拿到最多金币的概率n/m。显然这个概率与金币的数量以及模拟的次数有关系，模拟的次数越多，越能接近真实值。</p>
<h4 id="_4-已知三个升序整数数组-a-l-、b-m-和-c-n" tabindex="-1"><a class="header-anchor" href="#_4-已知三个升序整数数组-a-l-、b-m-和-c-n" aria-hidden="true">#</a> 4.已知三个升序整数数组 a[l]、b[m]和 c[n]</h4>
<p>已知三个升序整数数组 a[l]、b[m]和 c[n]，在三个数组中各找一个元素，使得组成的三元组距离最小。三元组距离的定义是，假设 a[i]、b[j]和 c[k]是一个三元组，那么距离为Distance=max(|a[i]-b[j]|,|a[i]-c[k]|,|b[j]-c[k]|)，请设计一个求最小三元组距离的最优算法。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011181417133.png" alt="image-20211011181417133" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011181429577.png" alt="image-20211011181429577" style="zoom:50%;" />
<p>采用这种算法最多只需要对三个数组分别遍历一遍，因此，时间复杂度为O(l+m+n)。</p>
<p>分析：假设当前遍历到这三个数组中的元素分别为ai、bi、ci，并且ai&lt;=bi&lt;=ci，此时它们的距离肯定为Di=ci-ai，那么可以分如下三种情况讨论：</p>
<p>1）如果接下来求ai、bi、ci+1的距离，由于ci+1&gt;= ci，此时它们的距离必定为Di+1=ci+1-ai，显然Di+1&gt;=Di，因此，Di+1不可能为最小距离。</p>
<p>2）如果接下来求ai、bi+1、ci的距离，由于bi+1&gt;= bi，如果bi+1&lt;= ci，此时它们的距离仍然为Di+1=ci-ai；如果bi+1&gt; ci，那么此时它们的距离为Di+1= bi+1-ai，显然Di+1&gt;=Di，因此，Di+1不可能为最小距离。</p>
<p>3）如果接下来求ai+1、bi、ci的距离，如果ai+1&lt;ci-|ci-ai|，此时它们的距离Di+1=max（ci-ai+1, ci=bi），显然Di+1&lt; Di，因此，Di+1有可能是最小距离。</p>
<p>综上所述，在求最小距离的时候只需要考虑第3种情况即可。具体实现思路为，从三个数组的第一个元素开始，首先求出它们的距离minDist，接着找出这三个数中最小数所在的数组，只对这个数组的下标往后移一个位置，接着求三个数组中当前遍历元素的距离，如果比minDist小，则把当前距离赋值给minDist，以此类推，直到遍历完其中一个数组为止。</p>
<p>例如，给定数组$a = [ 3, 4, 5, 7 ,15 ]; $b = [ 10, 12, 14, 16, 17 ]; $c = [ 20, 21,23, 24, 37, 30 ];</p>
<p>1）从三个数组中找出第一个元素3、10、20，显然它们的距离为20-3=17。</p>
<p>2）由于3最小，因此，数组a往后移一个位置，求4、10、20的距离为16，由于16&lt;17，因此，当前数组的最小距离为16。</p>
<p>3）同理，对数组a后移一个位置，依次类推，直到遍历到15的时候，当前遍历到三个数组中的值分别为15、10、20，最小距离为10。</p>
<p>4）由于10最小，因此，数组b往后移动一个位置遍历12，此时三个数组遍历到的数字分别为15、12、20，距离为8，当前最小距离是8。</p>
<p>5）由于12最小，数组b往后移动一个位置为14，依然是三个数中最小值，往后移动一个位置为16，当前的最小距离变为5，由于15是数组a的最后一个数字，因此，遍历结束，求得最小距离为5。</p>
<h3 id="第三套" tabindex="-1"><a class="header-anchor" href="#第三套" aria-hidden="true">#</a> 第三套：</h3>
<h4 id="_1-php数组的说法" tabindex="-1"><a class="header-anchor" href="#_1-php数组的说法" aria-hidden="true">#</a> 1.php数组的说法：</h4>
<p>​	处理PHP数组，foreach的效率要比for高很多，是因为foreach走的是链表的遍历</p>
<p>​	PHP数组底层采用的是循环链表，正向、反向遍历数组都很方便</p>
<p>​	访问节点时只需要下标即可快速访问到，如果要在数组的某个位置插入或删除，那么需要移动到某个元素后面进行操作，最坏的情况是N次，时间复杂度应该是O(N)。</p>
<p>​	无论是 array(1,2,3)，还是array(1 =&gt; 2,2=&gt; 4)等，本质上都是hash_table</p>
<p>2.答案：C</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011184701293.png" alt="image-20211011184701293" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211011184725562.png" alt="image-20211011184725562" style="zoom:50%;" />
<p>4.______提供了一个高性能的解决面向对象中重复出现的问题的方案？</p>
<p>​	答案：面向对象。分析：面向对象提高了代码的重用性和灵活性，使代码的结构更加清晰。</p>
<p>5.______操作符在两个操作数中有一个（不是全部）为true时返回true。</p>
<p>​	答案：逻辑异或（xor）运算符。</p>
<p>​	分析：如果$a或$b任一为true，另一为false时，那么返回true。</p>
<p>1．面向对象的开发方式有什么优点?</p>
<p>​	答案：采用面向对象的开发方式有诸多的优点，下面主要介绍其中三个优点：</p>
<p>​	1）较高的开发效率（灵活性）。采用面向对象的开发方式，可以对现实的事物进行抽象，把现实的事物直接映射为开发的对象，与人类的思维过程相似。例如，可以设计一个Car类来表示现实中的汽车，这种方式非常直观明了，也非常接近人们的正常思维。同时，由面向对象的开发方式可以通过继承或者组合的方式来实现代码的重用，因此可以大大地提高软件的开发效率。</p>
<p>​	2）保证软件的鲁棒性（重用性）。正是由于面向对象的开发方法有很高的重用性，在开发的过程中可以重用已有的而且在相关领域经过长期测试的代码，所以，自然而然地对软件的鲁棒性起到了良好的促进作用。</p>
<p>​	3）保证软件的高可维护性（扩展性）。采用面向对象的开发方式，使得代码的可读性非常好，同时面向对象的设计模式也使得代码结构更加清晰明了。同时针对面向对象的开发方式，已有许多非常成熟的设计模式，这些设计模式可以使程序在面对需求的变更时，只需要修改部分的模块就可以满足需求，因此维护起来非常方便。</p>
<p>2．HTTP的Keep-Alive作用是什么?</p>
<p>​	答案：</p>
<p>​		HTTP的Keep-Alive作用如下：Keep-Alive使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。Web服务器基本上都支持HTTP Keep-Alive。</p>
<p>​		缺点：对于提供静态内容的网站来说，这个功能通常很有用。但是，对于负担较重的网站来说，虽然为客户保留打开的连接有一定的好处，但它同样影响了性能，因为在暂停使用的期间，本来可以释放的资源仍旧被占用。所以当Web服务器和应用服务器在同一台机器上运行时，Keep-Alive功能对资源利用的影响尤其突出。</p>
<p>​		解决：Keep-Alive:timeout=5,max=100</p>
<p>​		timeout：过期时间5s（对应httpd.conf里的参数是KeepAliveTimeout），max是最多请求100次，强制断掉连接。在timeout时间内又有新的连接过来时，max会自动减1，直到为0时，强制断掉。</p>
<p>3.PHP缓存技术有哪些?框架ThinkPHP是局部缓存还是完全缓存?</p>
<p>1）全页面静态化缓存技术。即将页面全部生成为HTML静态页面，当用户访问时直接访问静态页面，而不用去执行PHP服务器解析。</p>
<p>2）页面部分缓存技术。即在一个页面中把不经常变化的部分进行静态缓存，而经常变化的模块不缓存，然后将它们组装在一起，可以提高页面的访问速度。</p>
<p>3）数据缓存技术。通过ID请求的数据，先将数据缓存到一个文件中，然后将ID和文件进行对应，可以通过这个ID请求直接读这个文件，进而提高数据的加载速度。</p>
<p>4）查询缓存技术。它和数据缓存类似，主要根据查询语句的数据内容进行缓存存储，当再次查询相同内容时，可以直接读取对应的存储数据。</p>
<p>除了PHP自身存在的以上4种缓存技术外，开发中常用的缓存工具主要有Memcache和Redis。</p>
<p>框架ThinkPHP主要使用完全缓存技术，当把框架中每一个方法取出的数据分配到视图中使用时，将自动在缓存文件夹中生成一个缓存文件，当页面再次请求这个方法时，会直接加载缓存文件，如果有数据变化，那么会重新读取方法再次更新缓存文件。</p>
<p>4．什么是抽象类和接口?抽象类和接口有什么不同和相似的地方?</p>
<p>答案：被关键字abstract修饰的类叫作抽象类，抽象类是不能被实例化的。被abstract修饰的方法为抽象方法，一个类只要有一个抽象方法，这个类一定是抽象类。</p>
<p>接口是通过关键字interface来定义的，可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体实现。PHP类只支持单重继承，但通过接口可以实现PHP类的多重继承。</p>
<p>抽象类和接口的不同和相似的地方如下：</p>
<p>1）抽象类是一种不能被实例化的类，只能作为其他类的父类来使用。</p>
<p>2）抽象类是通过关键字abstract来声明的。</p>
<p>3）抽象类与普通类相似，都包含成员变量和成员方法，两者的区别在于，抽象类中至少要包含一个抽象方法。</p>
<p>4）抽象方法没有方法体，该方法天生就是要被子类重写的。</p>
<p>5）抽象方法的格式为abstract function abstractMethod()；。</p>
<p>6）因为PHP中只支持单重继承，所以如果想实现多重继承，那么就要使用接口。也就是说，子类可以实现多个接口。</p>
<p>7）接口类是通过interface关键字来声明的，接口类中的成员变量和方法都是public的，可以不用显式地使用public来修饰。</p>
<p>8）接口中的方法没有方法体。接口中的方法天生就是要被子类继承实现的。</p>
<p>9）子类继承抽象类使用extends关键字，子类实现接口使用implements关键字。</p>
<p>4.2	请写出面向对象中接口和抽象类的区别及应用场景。</p>
<p>答案：1）被abstract修饰的类叫作抽象类，抽象类可以没有抽象方法，但是一个类如果存在抽象方法，那么这个类一定是抽象类。抽象方法必须使用abstract关键字修饰。</p>
<p>​			2）接口中全部是抽象方法，方法不需要用abstract定义。</p>
<p>​			3）当多个同类的类要设计一个上层时，通常设计为抽象类，当多个异构的类要设计一个上层时，通常设计为接口。</p>
<p>5．请描述出OSI七层网络模型的名称。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012094718880.png" alt="image-20211012094718880" style="zoom:50%;" />
<p>2．请编写一个方法，计算数组中最大数和最小数的差。</p>
<p>可以使用函数max(). min(), 执行效率最高，max()函数和min()函数是PHP内置函数，可以快速求解出最大、最小值（求最大值和最小值最差的时间复杂度为O（n））</p>
<p>还可以使用排序函数sort() ，使用了排序算法，最好的排序算法的时间复杂度为O（nlogn），所以1）的执行效率最高。</p>
<p>3.假设某人有100000元现金。每经过一次路口需要进行一次交费。交费规则为当他现金大于50 000元时每次需要交5%，如果现金小于等于50 000元时每次交5000。请编写一程序计算此人可以经过多少次这个路口。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.第一种方法：
function countNum($money){
	static $num = 0;
	if($money &lt; 5000){
		return $num;
	}elseif($money > 50000){
		$num++;
		$money -= $money*0.05;
		return countNum($money);
	}else{
		$num++;
		$money -= 5000;
		return countNum($money);
	}
}

$res = countNum(100000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>2.第二种方法：
function countNum(){
	for($money=100000,$num=0;$money>5000;$num++){
		if($money>50000){
			$money *= 0.95;
		}else{
			$money -= 5000;
		}
	}
	return $num;
}

$res = countNum();
var_dump($res);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4．一群猴子排成一圈，按1，2，…，n依次编号。然后从第1只开始数，数到第m只,把它踢出圈，从它后面再开始数，再数到第m只，再把它踢出去，…，如此不停地进行下去，直到最后只剩下一只猴子为止，那只猴子就称为大王。要求编程模拟此过程，输入m、n后输出最后那个大王的编号。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.方法1
function king($n,$m){
	$arr = range(1,$n);
	$i = 0;
	$k = $n;
	while(count($arr) > 1){
		if(($i+1)%$m == 0){
			unset($arr[$i]);
		}else{
			array_push($arr,$arr[$i]);
			unset($arr[$i]);
		}
		$i++;
	}

	return current($arr);
}
echo king(5,2); //3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四套：</p>
<p>1.某城市发生了一起汽车撞人逃跑事件，该城市只有两种颜色的车，其中，白色车占15%，黑色车占85%，事发时有一个人在现场看见似乎是一辆白色的车，但是根据专家在现场分析，在当时那种条件能看正确的可能性是80%。那么，肇事车是白车的概率是（　）</p>
<p>分析：本题中，肇事车的情况一共存在着以下4种可能性：</p>
<p>1）如果肇事车是白色车，被正确识别的概率P1=15%<em>80%=12%。</em></p>
<p>*2）如果肇事车是白色车，被看成是黑车的概率P2=15%*20%=3%。</p>
<p>3）如果肇事车是黑色车，被正确识别的概率P3=85%<em>80%=68%。</em></p>
<p>*4）如果肇事车是黑色车，被看成是白车的概率P4=85%*20%=17%。肇事车是白色车的概率P=P1 / (P1+P4) = 12% /(12%+17%) = 41.3%</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012112539333.png" alt="image-20211012112539333" style="zoom:50%;" />
<p>分析：在PHP中，如果一个函数的名字不是确定的，那么可以把函数名存放到一个变量中，然后通过如下两种方法调用：</p>
<p>1）直接通过“$变量名()”进行调用。</p>
<p>2）通过内置函数来进行调用，即</p>
<p>① mixed call_user_func ( callback $function [, mixed $parameter [, mixed$...]] )</p>
<p>② mixed call_user_func_array ( callback $function, array $param_arr )</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012112619475.png" alt="image-20211012112619475" style="zoom:50%;" />
<p>对于本题而言，通过$x.'_result'拼接出的字符串为display_result，因此，${$x.'_result'}()也就等价于$display_result()，显然变量名display_result是不存在的，因此编译无法通过，一种可行写法为$y=$x.'_result'; $y ();。所以，本题的答案为C。</p>
<p>4.分析：PHP主要有8种数据类型，根据类型还可以被划分为3大类，标量类型中包含布尔型、整型和浮点型，复合类型包括数组和对象，特殊类型包括资源类型和空类型。除此之外，PHP还可以存在伪类型，主要是数据存在混合相关联，所以存在伪类型。</p>
<ol start="5">
<li></li>
</ol>
<p><img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211012112854735.png" alt="image-20211012112854735"></p>
<p>分析：在PHP中，取模运算符%的操作数在运算之前都会转换成整数（除去小数部分）。其运算结果和被除数的符号（正负号）相同，即$a%$b的结果和$a的符号相同。本题中，24%（-5）的符号为正，结果为4。</p>
<p>9．file()函数返回的数据类型是数组，</p>
<p>分析：file()函数可以把整个文件读入一个数组中，将文件作为一个数组返回，如果失败，那么返回false。</p>
<p>1.运行时（run-time）包含一个PHP脚本使用__________，而编译时（compile-time）包含一个 PHP 脚本使用__________。</p>
<p>​		答案：include，require。</p>
<p>​		分析：require（或requier_once()）和 include()（或 include_once()）都可以用来包含PHP文件，它们的唯一区别是，如果包含的文件不存在，那么require（或require_once()）将产生一个致命错误，同时终止脚本的执行；而include（或include_once()）只会产生一个警告，不终止后续脚本的执行。二者在运行和编译引用文件时没有区别。</p>
<p>2.函数__________能读取文本文件中的一行。读取二进制文件或者其他文件时，应当使用__________函数。</p>
<p>​	答案：fgets()，fread()。</p>
<p>​	分析：fgets()函数主要用于读取文本文件中的一行，而fread()函数主要用于读取二进制文件。fseek()函数主要用于在打开的文件中定位，fputs()函数用于写入文件。</p>
<p>3.__________函数能返回脚本里任意行中调用的函数的名称。该函数同时还经常被用在调试中，用来判断错误是如何发生的。</p>
<p>​	答案：debug_backtrace。分析：debug_backtrace()的作用是，返回在特定位置调用过的函数名组成的数组，经常被用于调试中。</p>
<p>4．什么是内存管理?</p>
<p>内存管理主要指程序运行时对计算机内存资源的分配、使用和释放等技术，内存管理的目标是高效、快速地分配内存，同时及时地释放和回收内存资源。</p>
<p>内存管理主要包括是否有足够的内存供程序使用，从内存池中获取可用内存，使用后及时销毁并重新分配给其他程序使用。</p>
<p>在PHP开发过程中，如果遇到大数组等操作，那么可能会造成内存溢出等问题。一些常见的处理方法如下：</p>
<p>​	1）通过ini_set（'memory_limit','64M'）方法重置php可以使用的内存大小，一般在远程主机上是不能修改php.ini文件的，只能通过程序设置。注：在safe_mode（安全模式）下，ini_set会失效。</p>
<p>​	2）对数组进行分批处理，及时销毁无用的变量，尽量减少静态变量的使用，在需要数据重用时，可以考虑使用引用（&amp;）。同时对于数据库、文件操作完要及时关闭，对象使用完，要及时调用析构函数等。</p>
<p>​	3）及时使用unset()函数释放变量，使用时需要注意以下两点：</p>
<p>​		① unset()函数只能在变量值占用内存空间超过256B时才会释放内存空间。</p>
<p>​		② 只有当指向该变量的所有变量都销毁后，才能成功释放内存。</p>
<p>2．抽象类至少有一个抽象方法吗?</p>
<p>​	答案：如果一个类中有一个抽象方法，那么该类必须为抽象类，但抽象类中可以没有抽象方法。</p>
<p>3．PHP如何判断变量为空?</p>
<p>​	答案：在PHP中，NULL与空是两种不同的概念。isset()主要用来判断变量是否被初始化过。empty()可以将值为“假”“空”“0”“NULL”“未初始化”的变量都判断为true。is_null()仅把值为“NULL”的变量判断为true。“var == null”把值为“假”“空”“0”“NULL”的变量都判断为true。“var === null”仅把值为“NULL”的变量判断为true。</p>
<p>4．类与对象的区别是什么?</p>
<p>​	对象是系统中用来描述客观事物的一个实体，它是构成系统的一个基本单位。一个对象由一组属性和对这组属性进行操作的一组服务组成。类是具有相同属性和服务的一组对象的集合。它为属于该类的所有对象提供了统一的抽象描述，其内部包括属性和服务两个主要部分。在面向对象的编程语言中，类是一个独立的程序单位，它应该有一个类名并包括属性说明和服务说明两个主要部分。</p>
<p>类的方法和变量的权限修饰符有如下3种：public、protected和private。伪变量 $this 可以在当一个方法在对象内部调用时使用。$this是一个到调用对象（该对象通常是方法所属于的对象，但也可以是另一个对象，如果该方法是从第二个对象内调用的）的引用。类与对象的关系就如模具和铸件的关系，类的实例化结果就是对象，而这一类对象的抽象就是类。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012114750942.png" alt="image-20211012114750942" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012114802954.png" alt="image-20211012114802954" style="zoom:50%;" />
<p>5．Memcache的最大优势是什么?</p>
<p>答案：Memcache最大的优势是具有很好的水平可扩展性，在一个巨大的系统中，客户端做了一次存储后，很容易增加大量的数据到Memcache的集群中，Memcache之间没有互相通信，因此不会增加Memcache的负载，也不会网络通信量爆炸。</p>
<p>5.2	请简要描述你对Memcache的理解，它的优点有哪些?</p>
<p>​			答案：Memcache是一个高性能的分布式内存对象缓存系统，主要通过在内存里维护一个巨大的hash表进行数据缓存。它主要是将数据调用到内存中，然后从内存中读取数据，从而提高读取速度。它主要通过key-value的形式存储各种数据，包括图像、视频、文件等。</p>
<p>​			它具有以下优点：</p>
<p>​			1）支持多台服务器使用Memcache。由于Memcache的存储数据大小必须小于内存的大小，所以可以将Memcache使用在多台服务器上，增加缓存容量。</p>
<p>​			2）支持均衡请求。当使用多台Memcache服务器时，可以均衡请求，避免所有请求都进入一台Memcache服务器中，导致服务器挂掉。</p>
<p>​			3）支持分布式。可以解决缓存本身水平线性扩展的问题和缓存大并发下的本身性能问题，避免缓存的单点故障问题。</p>
<p>​			4）支持部分容灾问题。即如果多台服务器存储了Memcache数据，那么其中一台Memcache服务器挂掉，部分请求还是可以在Memcache中命中，为修复挂掉的服务器争取一些时间。</p>
<p>1．据说著名犹太历史学家约瑟夫（Josephus）有过以下的故事：在罗马人占领乔塔帕特后，39 个犹太人与约瑟夫及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，41个人排成一个圆圈，由第1个人开始报数，每报数到第3个人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。然而约瑟夫和他的朋友并不想遵从，约瑟夫要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。约瑟夫问题可用代数分析来求解，假设现在您与m个朋友不幸参与了这个游戏，您要如何保护您与您的朋友?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function test($n,$m){
	$arr = range(1,$n);
	$i = 0;
	$k = $n;
	while(count($arr)>2){
		if(($i+1)%$m == 0){
			unset($arr[$i]);
		}else{
			array_push($arr,$arr[$i]);
			unset($arr[$i]);
		}
		$i++;
	}

	return $arr;
}
$res = test(41,3);
var_dump($res);//array(2) { [117]=> int(16) [118]=> int(31) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2．一个数如果恰好等于它的因子之和，这个数就称为“完数”。例如，6=1+2+3。编程找出1000以内的所有完数。</p>
<p>答案：外层循环998次，每次循环得到的$i传入下个循环内，内部循环求解出符合$i整除$k等于0的数，如果能够整除，那么说明$k是$i的一个因子，则用$sum累加，直到$sum+1等于$i条件成立，说明$i是一个“完数”。需要注意的是，因为$sum求解出的因子是不包括1的，所以还需要额外地加1到$sum中，并且$i的一个因子不会大于$i/2，所以内部循环判断是否继续循环的条件为$i/2。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012131913358.png" alt="image-20211012131913358" style="zoom:50%;" />
<p>3．实现一个队列的数据结构，使其具有入队列、出队列、查看队列首尾元素、查看队列大小等功能。</p>
<p>答案：队列的实现也有两种方法，分别为采用数组来实现和采用链表来实现。下面分别详细介绍这两种方法。下图给出了一种最简单的实现方式，用front来记录队列首元素的位置，用rear来记录队列尾元素往后一个位置。入队列的时候只需要将待入队列的元素放到数组下标为rear的位置，同时rear++，出队列的时候只需要执行front++即可。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class queue{
	private $queueList;
	private $size;

	public function __construct(){
		$this->queueList = array();
		$this->size = 0;
	}

	//入队
	public function enQueue($data){
		$this->queueList[$this->size++] = $data;
		return $this;
	}

	//出队
	public function outQueue(){
		if(!$this->isEmpty()){
			--$this->size;
			$front = array_splice($this->queueList, 0,1);
			return $front[0];
		}
		return false;
	}

	//获取队列
	public function getQueue(){
		return $this->queueList;
	}

	//获取队头元素
	public function getFront(){
		if(!$this->isEmpty()){
			return $this->queueList[0];
		}

		return false;
	}

	//获取队尾元素
	public function getRear(){
		if(!$this->isEmpty()){
			$len = count($this->queueList);
			return $this->queueList[$len-1];
		}

		return false;
	}

	//获取元素数量
	public function getSize(){
		return $this->size;
	}

	//检测队列是否为空
	public function isEmpty(){
		return 0 == $this->size;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4．IP是否可以伪造?PHP中如何拿到真实IP?</p>
<p>答案：IP地址是可以伪造的，客户端可以伪造IP地址或使用代理IP导致IP地址不是用户的真实IP地址。在$_SERVER函数中，参数REMOTE_ADDR代表客户端的IP地址，HTTP_X_FORWARDED _FOR是代理服务器的IP地址，存放真实的IP和各级代理IP。实现代码如下：</p>
<p>php获取客户端IP地址有四种方法，这五种方法分别为</p>
<p>​	REMOTE_ADDR</p>
<p>​	HTTP_CLIENT_IP</p>
<p>​	HTTP_X_FORWARDED_FOR</p>
<p>​	HTTP_VIA</p>
<p>REMOTE_ADDR 是你的客户端跟你的服务器“握手”时候的IP。如果使用了“匿名代理”，REMOTE_ADDR将显示代理服务器的IP。
HTTP_CLIENT_IP 是代理服务器发送的HTTP头。如果是“超级匿名代理”，则返回none值。同样，REMOTE_ADDR也会被替换为这个代理服务器的IP。</p>
<p>$_SERVER['REMOTE_ADDR']; //访问端（有可能是用户，有可能是代理的）IP</p>
<p>$_SERVER['HTTP_CLIENT_IP']; //代理端的（有可能存在，可伪造）</p>
<p>$_SERVER['HTTP_X_FORWARDED_FOR']; //用户是在哪个IP使用的代理（有可能存在，也可以伪造）</p>
<p>相关文章推荐：
1.php如何获取用户的ip地址
2.php如何获取客户端的ip地址？
相关视频推荐：
1.独孤九贱(4)_PHP视频教程
三个值区别如下：</p>
<p>一、没有使用代理服务器的情况：</p>
<p>REMOTE_ADDR = 您的 IP
HTTP_VIA = 没数值或不显示
HTTP_X_FORWARDED_FOR = 没数值或不显示</p>
<p>二、使用透明代理服务器的情况：Transparent Proxies</p>
<p>REMOTE_ADDR = 最后一个代理服务器 IP
HTTP_VIA = 代理服务器 IP
HTTP_X_FORWARDED_FOR = 您的真实 IP ，经过多个代理服务器时，这个值类似如下：203.98.182.163, 203.98.182.163, 203.129.72.215。</p>
<p>这类代理服务器还是将您的信息转发给您的访问对象，无法达到隐藏真实身份的目的。</p>
<p>三、使用普通匿名代理服务器的情况：Anonymous Proxies</p>
<p>REMOTE_ADDR = 最后一个代理服务器 IP
HTTP_VIA = 代理服务器 IP
HTTP_X_FORWARDED_FOR = 代理服务器 IP ，经过多个代理服务器时，这个值类似如下：203.98.182.163, 203.98.182.163, 203.129.72.215。</p>
<p>隐藏了您的真实IP，但是向访问对象透露了您是使用代理服务器访问他们的。</p>
<p>四、使用欺骗性代理服务器的情况：Distorting Proxies</p>
<p>REMOTE_ADDR = 代理服务器 IP
HTTP_VIA = 代理服务器 IP
HTTP_X_FORWARDED_FOR = 随机的 IP ，经过多个代理服务器时，这个值类似如下：203.98.182.163, 203.98.182.163, 203.129.72.215。</p>
<p>告诉了访问对象您使用了代理服务器，但编造了一个虚假的随机IP代替您的真实IP欺骗它。</p>
<p>五、使用高匿名代理服务器的情况：High Anonymity Proxies (Elite proxies)</p>
<p>REMOTE_ADDR = 代理服务器 IP
HTTP_VIA = 没数值或不显示
HTTP_X_FORWARDED_FOR = 没数值或不显示 ，经过多个代理服务器时，这个值类似如下：203.98.182.163, 203.98.182.163, 203.129.72.215。</p>
<p>完全用代理服务器的信息替代了您的所有信息，就象您就是完全使用那台代理服务器直接访问对象。</p>
<p>六、获取客户端真实的IP地址实例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function get_real_ip()

{

    $ip=FALSE;
    //客户端IP 或 NONE
    if(!empty($_SERVER["HTTP_CLIENT_IP"])){
        $ip = $_SERVER["HTTP_CLIENT_IP"];
    }
    //多重代理服务器下的客户端真实IP地址（可能伪造）,如果没有使用代理，此字段为空
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode (", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
        if ($ip) { array_unshift($ips, $ip); $ip = FALSE; }
        for ($i = 0; $i &lt; count($ips); $i++) {
            if (!eregi ("^(10│172.16│192.168).", $ips[$i])) {
                $ip = $ips[$i];
                break;
            }
        }
    }
    //客户端IP 或 (最后一个)代理服务器 IP
    return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 获取用户真实 IP
 */
function clientIP()
{
    static $realip;
    if (isset($_SERVER)){
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $realip = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $realip = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv("HTTP_X_FORWARDED_FOR")){
            $realip = getenv("HTTP_X_FORWARDED_FOR");
        } else if (getenv("HTTP_CLIENT_IP")) {
            $realip = getenv("HTTP_CLIENT_IP");
        } else {
            $realip = getenv("REMOTE_ADDR");
        }
    }
    return $realip;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五套" tabindex="-1"><a class="header-anchor" href="#第五套" aria-hidden="true">#</a> 第五套</h3>
<ol start="2">
<li>
<p>用 stream_get_meta_data 函数，流 API 无法提供（　）</p>
<p>A．是否仍然有数据未读</p>
<p>B．流是否过期</p>
<p>C．流是否被阻挡</p>
<p>D．通过流传输了多少数据</p>
<p>E．流构建的成分</p>
<p>分析：stream_get_meta_data()函数可以获取是否仍然有数据未读、流是否过期、流是否被阻挡、流构建的成分等信息，但是无法显示通过流传输了多少数据，只能显示还剩多少数据需要传输。选项D正确，选项A、选项B、选项C、选项E错误。</p>
</li>
</ol>
<p>3．通过 PHP 发送有多个收件人或者 MIME 兼容的邮件，需要遵循的步骤是（　）</p>
<p>​		A．将必要的头信息（header）通过$message 参数（第三个参数）传递给 mail函数</p>
<p>​		B．用PHP代码，通过SMTP直接与MTA连接</p>
<p>​		C．将附加的头信息传递给mail函数的$additional_headers 参数（第四个参数），每个header一行</p>
<p>​		D．向多个收件人发送 E-mail 是允许的。PHP 不支持发送 MIME E-mail</p>
<p>​		E．向mail函数传递$additional_headers 参数，每个header一行，行以\r\n结尾</p>
<p>​		答案：E。分析：对于选项A，在使用mail()函数的第三个参数进行信息发送的时候，header不是必要的。选项A错误。对于选项B，PHP可以使用mail函数发送任何格式合法的电子邮件，必须使用SMTP的PHP脚本，但是不一定要与MTA连接。选项B错误。对于C选项，在E-mail中添加额外的头信息，需要向函数传递$additional_headers参数，每个头信息以一个回车符（\n）和一个换行符（\r\n）结尾。选项E正确，选项C错误。对于选项D，如果发送的邮件由多种文本格式组成，比如带有附件或HTML的邮件，那么不仅需要添加额外的头信息，而且还需要添加MIME类型。选项D错误。所以，本题的答案为E。</p>
<p>5．你的PHP以CGI的形式运行在 Linux+Apache 系统的 cgi-bin 文件夹中。如果有人打开以下 URL那么将发生什么?/cgi-bin/php?/etc/passwd。（　）</p>
<p>​		A．/etc/passwd 目录下的文件都会被显示出来，造成安全隐患</p>
<p>​		B．操作系统会检查 Apache 是否允许打开/etc/passwd 目录</p>
<p>​		C．/etc/passwd 字符串作为参数传给了脚本</p>
<p>​		D．什么都不会发生。CGI 模式下的 PHP 将自动拒绝此次访问</p>
<p>​		E．PHP 尝试把/etc/passwd 作为 PHP 脚本进行解释</p>
<p>答案：D。分析：对于选项A，因为PHP以 CGI 模式运行，所以为了安全，PHP会采取一些措施来减少常见的安全隐患。选项A错误。PHP中的安全措施是应用在把任意某个文件作为命令行参量传递给解释器执行的时候。如果不是执行这个措施，那么PHP将尝试读取/etc/passwd——一个“全球可读（world-readable）”的文件，同时解释器把它视作 PHP 脚本来执行，最终导致所有的用户账号被输出到客户端上。因为PHP内建的安全机制，所以页面是不会有内容输出的。选项D正确，选项B、选项C、选项E错误。</p>
<p>6.php面向对象中类名可以是任何非 PHP 保留字的合法标签，汉字也可以作为PHP的类名</p>
<p>7．以下关于JavaScript的说法中，不正确的是（　A）</p>
<p>​		A．语句“alert(1==true);”和语句“alert(2==true);”的结果都是true</p>
<p>​		B．JS的数组其实就是对象，用for...in语句可以遍历数组的所有属性</p>
<p>​		C．JS中的对象通过引用来传递，它们永远不会被复制</p>
<p>​		D．JS中的函数就是对象，所以它们可以像任何其他的值一样被使用</p>
<p>​		分析：alert(2==true)返回的是false，因为JavaScript默认1等同true，0等同false，而其他数字和布尔型都不相等，所以返回的结果都是false。选项A说法错误。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012150029810.png" alt="image-20211012150029810" style="zoom:70%;" />
<p>分析：dir(&quot;.&quot;)函数用来获取当前文件夹的路径，返回的是一个对象给$x，接着就可以通过$x读取文件夹下的文件，通过while语句输出。</p>
<p>9．概要分析器（profiler）的作用是（　）</p>
<p>​		A．创建关于脚本结构的档案</p>
<p>​		B．把脚本转化成 UML 图</p>
<p>​		C．精确测算脚本不同部分的运行时间</p>
<p>​		D．计算脚本通过Web服务器执行时的维度</p>
<p>​		E．扫描脚本，识别由常见错误导致的 bug</p>
<p>​		答案：C。分析：概要分析器（profiler）能监视脚本的运行，并记录单个部分的运行时间，可以用来找出网站的问题和解决网站瓶颈。选项C正确，选项A、选项B、选项D、选项E错误。</p>
<p>10.分析：echo和print都可以直接把变量输出来，但echo输出的效率比print高，因为echo输出没有返回值，而print输出后会自带返回值。echo和print的区别在于，echo可以输出一个或多个字符串，而print只允许输出一个字符串，返回值总为 1。</p>
<p>11．一个函数的参数不能是对变量的引用，除非在php.ini中把________设为on。</p>
<p>​		答案：allow_call_time_pass_reference。</p>
<p>​		分析：在PHP函数调用的时候，基本数据类型默认会使用值传递，而不是引用传递。allow_call_time_pass_reference选项的作用为是否启用在函数调用时强制参数按照引用传递。如果把allow_call_time_pass_reference配置为on，那么在函数调用的时候会默认使用引用传值。但是不推荐使用这种方法，原因是该方法在未来的版本中很可能不再支持。如果想使用引用传递，那么推荐在函数调用的时候显式地使用&amp;进行引用传递。</p>
<p>12.类的属性可以序列化后保存到 session 中，从而以后可以恢复整个类，这要用到的函数是_______。</p>
<p>​		答案：serialize()/unserialize()。分析：serialize()函数可以将对象或数组序列化为可持久化或可传输的格式的过程，而unserialize()函数是和序列化相对的反序列化函数，它可以将流转换为对象或数组，重新创建该对象。所以如果要保存一个类的属性在session中，那么可以使用serialize()将该类的属性序列化，然后存储在session中，在需要使用该类的属性的地方再通过unserialize()转换为对象属性进行使用。</p>
<p>13.对数组进行逆向排序并保持索引关系的函数是__________，将字符串转换成小写的是__________，字符串反转函数是__________。</p>
<p>​		答案：arsort()，strtolower()，strrev()。分析：对数组进行逆向排序，并且保持原有的索引关系的函数是arsort()。将字符串转换成小写的函数是strtolower()，而将字符串反转的函数是strrev()函数。</p>
<p>14.线程同步有哪些机制?</p>
<p>​		答案：现在流行的进程、线程同步互斥的控制机制，其实是由最原始、最基本的4种方法（临界区、互斥量、信号量和事件）实现的。</p>
<p>​		1）临界区：通过对多线程的串行化来访问公共资源或一段代码，其速度快，适合控制数据访问。在任意时刻只允许一个线程访问共享资源，如果有多个线程试图访问共享资源，那么当有一个线程进入后，其他试图访问共享资源的线程将会被挂起，并一直等到进入临界区的线程离开，临界在被释放后，其他线程才可以抢占。</p>
<p>​		2）互斥量：为协调对一个共享资源的单独访问而设计，只有拥有互斥量的线程才有权限去访问系统的公共资源，因为互斥量只有一个，所以能够保证资源不会同时被多个线程访问。互斥不仅能实现同一应用程序的公共资源安全共享，还能实现不同应用程序的公共资源安全共享。</p>
<p>​		3）信号量：为控制一个具有有限数量的用户资源而设计。它允许多个线程在同一个时刻去访问同一个资源，但一般需要限制同一时刻访问此资源的最大线程数目。</p>
<p>​		4）事件：用来通知线程有一些事件已发生，从而启动后继任务的开始。</p>
<p>15.GET和POST的区别有哪些?</p>
<p>​		答案：主要区别有4个方面：</p>
<p>​		1）语义不同，GET是获取数据，POST是提交数据。</p>
<p>​		2）HTTP协议规定GET比POST安全，因为GET只做读取，不会改变服务器中的数据。但这只是规范，并不能保证请求方法的实现也是安全的。</p>
<p>​		3）GET请求会把附加参数带在URL上，而POST请求会把提交数据放在报文内。在浏览器中，URL长度会被限制，所以GET请求能传递的数据有限，但HTTP协议其实并没有对其做限制，都是浏览器在控制。</p>
<p>​		4）HTTP协议规定GET是幂等的，而POST不是，所谓幂等是指多次请求返回的结果相同。实际应用中，并不会这么严格，当GET获取动态数据时，每次的结果可能会有所不同。</p>
<p>16.Redis与 Memcache有什么区别?</p>
<p>​		答案：Redis是一个完全开源免费的高性能key-value数据库，它具有丰富的数据类型，可以支持数据的持久化，将内存中的数据保存在磁盘中，当重启服务器时可以再次加载使用。Memcache是一个高性能的分布式内存对象缓存系统，用于动态的Web应用中帮助数据库减轻负担，在内存中缓存数据和对象，减少每次访问数据时对数据库的访问次数，从而提高访问速度。</p>
<p>​		它们具有以下几点区别：</p>
<p>​		1）Redis和Memcache的最大区别是，虽然Memcache和Redis都是将数据存在内存中，是内存数据库，但当Redis存储时，并不是所有的数据都一直存储在内存中，而Memcache存储时，数据都存在内存中。</p>
<p>​		2）数据安全问题，由于Memcache把数据全部存在内存之中，当服务器挂掉后，重启服务器数据就会丢失，而Redis可以定期保存数据到磁盘中做持久化存储，当需要时可以再加载使用。对于灾难恢复，当Memcache挂掉后，数据不可恢复，但Redis数据丢失后可以通过aof恢复。</p>
<p>​		3）Redis支持多种数据结构存储，例如list、set、hash等数据结构的存储，而Memcache主要是在内存中维护一个统一的巨大的hash表进行存储数据，它只支持简单的key/value类型的数据存储，但它可以存储图片、视频、文件及数据库检索结果等。</p>
<p>​		4）数据备份问题，Redis支持数据的备份，即master-slave模式的数据备份。而因为Memcache不支持数据持久化，所以无法进行数据备份。</p>
<p>​		5）在内存使用率上，如果使用简单的key-value存储，那么Memcache的内存利用率更高，而如果Redis采用hash结构来做key-value存储，那么由于其组合式的压缩，其内存利用率会高于Memcache。具体和应用场景、数据特性有关。</p>
<p>​		6）在线程上的比较，因为Memcache是支持多线程的，而Redis只支持单线程，所以CPU利用方面Memcache优于Redis。</p>
<p>​		7）它们的扩展都需要做集群；实现方式：master-slave、Hash。</p>
<p>​		8）数据的读写方面，Redis和Memcache在写入性能上面差别不大，读取性能上面尤其是批量读取性能上Memcache更强。</p>
<p>17．什么是数据库索引?主键索引与唯一索引有什么区别?索引的优缺点是什么?</p>
<p>​		答案：索引是一种单独的、物理的对数据库表中一列或多列的值进行排序的存储结构，它是某个表中一列或若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单。它主要提供指向存储在表的指定列中的数据值的指针，然后根据指定的排序顺序对这些指针排序。数据库使用索引以找到特定值，然后顺指针找到包含该值的行。这样可以使对应于表的SQL语句执行得更快，可快速访问数据库表中的特定信息。</p>
<p>​		主键索引与唯一索引的区别是主键是一种唯一性索引，必须指定为主键，并且每个表只能有一个主键。而唯一索引的索引列的每个值都只能出现一次，即数据必须唯一。</p>
<p>​		索引的优点如下：</p>
<p>​		1）通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。</p>
<p>​		2）可以大大加快数据的检索速度。</p>
<p>​		3）加速表与表之间的连接。</p>
<p>​		4）使用索引后，在数据检索时使用分组和排序子句可以显著减少查询中分组和排序的时间。</p>
<p>​		5）通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。</p>
<p>​		索引的缺点如下：</p>
<p>​		1）索引的创建和维护都会耗费时间，并且耗费的时间随着数据量的增加而增加。</p>
<p>​		2）除了数据表需要占据空间外，索引也需要占据一定的物理空间，并且建立聚簇索引，需要的空间更大。</p>
<p>​		3）当对表中的数据进行增删改时，索引需要动态的维护，降低了数据的维护速度。</p>
<p>2．猴子第一天摘了若干个桃子，当即吃了一半，它还不解馋，于是又多吃了一个；第二天，它吃了剩下桃子的一半，还不过瘾，又多吃了一个；以后每天都吃前一天剩下的一半多一个，到第10天想再吃时，只剩下一个桃子了。问第一天共摘了多少个桃子?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function count1($n){
	for($i=10;$i>1;$i--){
		$n = ($n+1)*2;
	}

	return $n;
}

$res = count1(1);
echo $res; //1534
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.若有一只兔子，它每个月生一只小兔子，而小兔子一个月后也开始生产。起初只有一只兔子，一个月后就有两只兔子，两个月后就有三只兔子，三个月后有五只兔子，以此类推，12个月后有多少只兔子?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function count1($n){
	if($n == 1 || $n==2){
		return 1;
	}else{
		return count1($n-1)+count1($n-2);
	}
}

$res = count1(12);
echo $res; // 144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.创建poll表，用于记录单选投票用户的数据，字段包括 id[ Autoincreace ]、ip、time、iid（用户选择的选项，int型）。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>create table if not exists `poll`(
	`id` int(11) not null auto_increment,
	`ip` varchar(16) character set utf8 not null,
	`time` datetime not null,
	`iid` int(15) not null,
	primary key(`id`)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5．给定一个没有排序的链表，去掉其重复项，并保留原顺序，例如，链表1-&gt;3-&gt;1-&gt;5-&gt;5-&gt;7，去掉重复项后变为1-&gt;3-&gt;5-&gt;7。</p>
<h3 id="第六套" tabindex="-1"><a class="header-anchor" href="#第六套" aria-hidden="true">#</a> 第六套：</h3>
<ol>
<li></li>
</ol>
<p>​		<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012181321136.png" alt="image-20211012181321136" style="zoom:50%;" /></p>
<p>分析：根据题目中的描述，可以画一个表示时针与分针的图例，如下图所示。[插图]假设小明开始等待女神的那一时刻时针与分针的夹角为θ弧度，那么，等到时针与分针正好互换位置时，时针走过了θ弧度，而由于分针转动一圈表示的时间为一个小时，钟表一圈是一个圆，表示的弧度值为2π，分针因为要转若干圈才能到达时针的位置，记分钟所转圈数为n，此时分针转过的角度则为2πn-θ弧度。</p>
<p>题目强调，“时间一分一秒地流逝，两个多小时过去了，女神还没有出现”，通过这条信息可知，分针转了2～3圈，接近3圈，此时可知，n值取3，所以，时针转过的角度值为θ，分针转过的角度值为2π<em>3-θ=6π-θ。对于时针而言，2π代表一圈，即12个小时，那么弧度θ表示的时间值为12</em>θ/2π小时，对于分针而言，2π代表一圈，即60分钟，那么6π-θ表示的是60*(6π-θ)/2π分钟。由于时钟走过的时间值与分钟走过的时间值所代表的时间量是一个量，故而二者是相等的，由此可以构建如下等式关系：(12θ/2π)<em>60 =60</em>(6π-θ)/2π求解上述等式可知，θ=6π/13，即小明等待的时间反映在钟表上为6π/13弧度值，所以，小明一共等了12*(6π/13)/2π小时，即36/13小时，合166分钟。所以，本题的答案为D。</p>
<ol start="2">
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211012181636553.png" alt="image-20211012181636553" style="zoom:50%;" />
<p>答案：C、D。</p>
<p>分析：在上传前，一定要用 is_uploaded_file()函数确保文件名正确传输，并把本地临时文件通过move_upload_file()函数在上传文件前检查文件，再移动文件到安全位置进行长期保存，防止文件丢失。而在操作前不需要特意地对文件名进行对比和使用file_exists()函数判断文件是否存在。其次，文件的上传，PHP并不是只信任临时文件目录下的文件。选项C、选项D正确。所以，本题的答案为C、D。</p>
<ol start="13">
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013094731388.png" alt="image-20211013094731388" style="zoom:67%;" />
<p>分析：</p>
<p>​		对于选项A，可以通过context参数设置超时时间。选项A错误。</p>
<p>​		对于选项B，file()函数可以安全用于读取二进制文件。选项B错误。</p>
<p>​		对于选项C，表单中没有文件上传时，PHP的$_FILES变量值为NULL。选项C正确。</p>
<p>​		对于选项D，fputs()用于写入字符串到文件中时，只能用于上传不能用于下载ftp文件。选项D错误。</p>
<ol start="14">
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013095458052.png" alt="image-20211013095458052" style="zoom:67%;" />
<p>分析：对于选项A，open_basedir可将用户访问文件的活动范围限制在指定的区域，通常是其家目录的路径，也可用符号“.”来代表当前目录。注意，用open_basedir指定的限制实际上是前缀，而不是目录名。举例来说，若“open_basedir = /dir/user”，那么目录“/dir/user”和“/dir/user1”都是可以访问的。所以如果要将访问限制在仅为指定的目录，那么要用斜线结束路径名。例如，设置成“open_basedir = /dir/user/”。</p>
<p>对于选项B，register_globals的意思就是注册为全局变量，所以当它的值被设为on的时候，传递过来的值会被直接注册为全局变量来使用。当被设为off的时候，要到特定的数组里去获得它。但需要注意的是：</p>
<p>​		1）从PHP4.2.0版开始，配置文件中register_globals的默认值从on改为off，虽然可以设置它为on，但是当无法控制服务器的时候，代码的兼容性就成为一个大问题，所以，最好从现在就开始使用off的风格来编程。</p>
<p>​		2）当register_globals打开以后，各种变量都会被注入代码中，例如，来自HTML表单的请求变量。再加上PHP在使用变量之前是无须进行初始化的，这就使得更容易写出不安全的代码。当打开时，人们使用变量时确实不知道变量是哪里来的。但是register_globals的关闭改变了这种代码内部变量和客户端发送的变量混杂在一起的糟糕情况。</p>
<p>​		对于选项C，disable_functions限制程序使用一些可以直接执行系统命令的函数，如system、exec、passthru、shell_exec、proc_open等。所以如果想保证服务器的安全，那么要将这个函数加到disable_functions里或者将安全模式打开。</p>
<p>​		对于选项D，file_uploads是决定PHP文件上传时记录file_uploads指令是否启用的函数，默认值为on。该函数和安全最不相关，选项D正确。</p>
<p>所以，本题的答案为D。</p>
<ol start="15">
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013095905311.png" alt="image-20211013095905311" style="zoom:67%;" />
<p>​		答案：A、D。</p>
<p>​		分析：对于选项A，Windows/Novell版本通过SMTP可以直接用MTA发送邮件，而UNIX的PHP需要用sendmail程序通过MTA发送邮件。选项A正确，选项E错误。</p>
<p>​		对于选项B，在Windows/Novell上使用mail()时，需要配置sendmail_from才能使用，并不是通过sendmail_from配置决定邮件中的From信息。而UNIX发邮件是交给sendmail程序来处理的。选项D正确，选项B错误。</p>
<p>​		对于选项C，条件允许的情况下，Windows/Novell上的PHP可以进行配置，通过“sendmail”封装器模拟sendmail发信，可以发送多个收件人的电子邮件。选项C错误。</p>
<p>1.假设机器上没有安装sendmail，要想 mail 函数能在Windows下使用，需要__________。</p>
<p>​		答案：改变 php.ini 的设置。分析：在UNIX、Linux系统中，PHP主要使用sendmail程序来处理邮件。而在Windows中除非已经有sendmail包装器，否则只能使用服务器的SMTP配置进行，而SMTP是可以在php.ini文件中进行配置开启的。</p>
<p>2.PHP支持的流传输方式的是__________和__________。</p>
<p>答案：STDIO、stream。分析：PHP 只支持两种流传输，分别为本地操作的STDIO和远程操作的stream，并且可以根据创建的流的类型来自动选择合适的传输方式。</p>
<p>3.使用final关键字时，应注意的问题有__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>。</p>
<p>​		答案：定义的类禁止继承；定义的成员禁止继承；定义的方法禁止重写。</p>
<p>5.即时加载一个类的方法是 __________。</p>
<p>​		答案：spl_autoload_register()函数。分析：spl_autoload_register()提供了一种更加灵活的方式来实现类的自动加载（同一个应用文件中，可支持任意数量的加载器，比如第三方库中的类文件）。而_autoload()函数在PHP7.2版本中已经被废除。</p>
<h3 id="第七套" tabindex="-1"><a class="header-anchor" href="#第七套" aria-hidden="true">#</a> 第七套：</h3>
<ol>
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013101530864.png" alt="image-20211013101530864" style="zoom:50%;" />
<p>​		答案：B。分析：substr_replace()函数用来把字符串的一部分替换为另一部分，语法为substr_replace（检查的字符串，需要插入的字符串，何处开始替换（可选），替换多少个字符（可选））。所以substr_replace（$x,'x',1,2）的意思是，从索引位置等于1的$x字符串位置开始，把$x中的2个字符串替换为一个字符串x，可以得到axle。选项B正确。</p>
<h1 id="php中的for-和foreach性能对比" tabindex="-1"><a class="header-anchor" href="#php中的for-和foreach性能对比" aria-hidden="true">#</a> <a href="https://www.cnblogs.com/phpper/p/7296237.html" target="_blank" rel="noopener noreferrer">php中的for 和foreach性能对比<ExternalLinkIcon/></a></h1>
<p>总体来说，如果数据库过几十万了，才能看出来快一点还是慢一点，如果低于10万的循环，就不用测试了，两者性差异不明显。但是我还是推荐用foreach。
循环数字数组时,for需要事先count($arr)计算数组长度,需要引入自增变量$i,每次循环都要进行条件判断$i&lt;$c,然后自增$i++,输出数组元素时,$arr[$i]需要进行哈希操作.</p>
<p>而foreach循环数组时,指针会自动指向下一个元素,不需要计算数组长度,没有条件判断和自增变量,调用元素时也没有哈希操作,所以性能肯定要比for和while高.另外,for和while对存在键值映射的关联数组无能为力.所以,遍历数组,首选foreach.foreach也是我PHP里最喜欢的关键字,因为它确实强大.array_map/array_filter/array_walk遍历数组的方式和foreach一样,但需要执行回调函数,所以也比foreach慢。</p>
<p>6.在循环操作非顺序索引的数组时，可以用来读取数组当前元素的索引值的函数是（A　）</p>
<p>​		A．key()</p>
<p>​		B．next()</p>
<p>​		C．prev()</p>
<p>​		D．current()</p>
<p>​		分析：key()函数的作用是从当前内部指针的位置返回元素键名，next()函数将内部指针指向数组中的下一个元素，并输出。prev()函数将内部指针指向数组中的上一个元素，并输出。current()函数返回数组中的当前元素的值。所以，可以通过key()函数读取数组当前元素的索引值，选项A正确。</p>
<p>8．在忽略浏览器bug的正常情况下，如何用一个与先前设置的域名（domain）不同的新域名来访问某个Cookie?（　）</p>
<p>​		A．通过 HTTP_REMOTE_Cookie 访问</p>
<p>​		B．不可能</p>
<p>​		C．在调用 setcookie()时设置一个不同的域名</p>
<p>​		D．向浏览器发送额外的请求</p>
<p>​		E．使用 JavaScript，把 Cookie 包含在 URL 中发送</p>
<p>​		答案：B。</p>
<p>​		分析：domain表示的是Cookie所在的域，默认情况下为请求的地址，例如，网址www.shuaiqi100.com/index.php/index/hello，它的domain默认为www.shuaiqi100.com。对于Cookie的跨域名访问，只支持同域名下的多级域名访问，如域A为a.hello.com，域B为b.hello.com，那么域名A和域名B共同访问域名A或域名B生成的Cookie，它们的domain都要设置为“.hello.com”才行。而如果要在域A中生成一个域名B不能访问的Cookie，那么只需要将Cookie的domain设置为“a.hello.com”。</p>
<p>​		如果先前设置了一个域名domain，那么使用新域名访问domain域名的Cookie时，会出现新域名不在domain的范围内的情况，导致Cookie不能被访问到，所以这个domain的Cookie是不可能被新域名访问到的。选项B正确。</p>
<p>10.如果不在php.ini中禁用register_globals，那么为了确保程序代码的安全，以下说法正确有效的是（　）（双选）</p>
<p>​		A．使用难以猜测的变量名以避免用户注入</p>
<p>​		B．过滤全部来自于程序外部的变量</p>
<p>​		C．在显示的页面内容中如直接使用GET/POST方式取得的变量，将可能引起注入漏洞</p>
<p>​		D.在显示的页面内容中通过base64_encode()对URL进行编码以转义特殊字符</p>
<p>​		答案：B、C。分析：php.ini配置中的register_globals被称为注册全局变量，默认值为off，如果为on开启，那么取传输过来的数据是不用到特定的数组里面取，可以直接通过变量获取值。</p>
<p>​		对于选项A，对于难以猜测的变量名，也可以通过全局的变量打印出来查看到对应的变量名，从而进行注入。选项A错误。对于选项B，通过过滤全部程序外的变量可以避免用户注入。选项B正确。</p>
<p>​		对于选项C，通过GET/POST传输数据时，用户可以对HTTP进行抓包，可能引起注入漏洞。选项C正确。</p>
<p>​		对于选项D，在显示的页面中即使通过base64_encode对编码进行转义，但是用户还是可以通过base64_decode进行解密，程序也并不安全有效。选项D错误。</p>
<p>11.要防止跨站攻击，以下需要做的是（　）（三选）</p>
<p>​		A．永远不要使用 include 和 require 引入靠用户输入决定路径的文件（比如：include &quot;$username/script.txt&quot;;）</p>
<p>​		B．除非网站需要，否则关闭 allow_url_fopen</p>
<p>​		C．避免使用如curl这类用来打开远程连接的扩展库</p>
<p>​		D．使用类似 strip_tags()一类的函数过滤一个用户输入给另一个用户看的内容</p>
<p>​		E．以上都对</p>
<p>​		答案：A、B、D。分析：如果用户通过篡改URL来修改$username变量，并且allow_url_fopen是打开的，那么PHP将会下载某台非信任的远程服务器上的script.txt文件，并把它当作本地PHP脚本来执行。所以不要使用include和require的方式引用文件，也尽量关闭allow_url_fopen。选项A、选项B正确。</p>
<p>​		对于选项C，如果需要在PHP中打开远程连接受信任的扩展库，那么使用curl方法是可以的。选项C错误。</p>
<p>​		对于选项D，一个用户输入的内容给另一个用户看时是需要使用strip_tags()函数过滤HTML标签的，这能有效防止造成跨站攻击或者浏览器bug。选项D正确。所以，本题的答案为A、B、D。</p>
<p>12．某些时候需要在 PHP 脚本中使用第三方功能，来实现一些 PHP 不能完成的任务（比如调用压缩软件压缩某种 PHP 不支持其格式的文件）。当在 PHP 脚本中执行系统命令时，以下选项中，能确保没有命令注入的是（　）（双选）</p>
<p>​		A．总是要给在exec()中执行的命令加'</p>
<p>​		B．总是使用shell_exec()函数，它能够在执行前对命令进行安全检查</p>
<p>​		C．使用escapeshellcmd()函数转义命令中的特殊字符</p>
<p>​		D．在执行命令前，先用ini_set()打开safe_mode</p>
<p>​		E．用escapeshellarg()函数在执行前转义命令参数</p>
<p>​		答案：C、E。分析：在PHP中执行带参数的系统命令时，是没有办法保证任何一个函数是绝对安全的，可以使用escapeshellcmd()函数和escapeshellarg()函数转义命令中的特殊字符或命令参数，再传递给shell，这样可以保证字符和命令参数的安全。选项C、选项E正确。</p>
<p>15．以下错误类型中，无法被自定义的错误处理器捕捉到的有（　）</p>
<p>​		A．E_WARNING</p>
<p>​		B．E_ERROR</p>
<p>​		C．E_USER_ERROR</p>
<p>​		D．E_PARSE</p>
<p>​		E．E_NOTICE</p>
<p>答案：B、D。分析：用户自定义的错误管理器是在脚本里，出现错误时无法解析脚本，错误管理器无法执行，像E_ERROR会显示错误并且中断程序执行。因为E_PARSE是语法错误，也会中断程序执行，所以无法执行到用户自定义的错误处理器捕捉返回错误。选项B、选项D正确。</p>
<p>​		而E_WARNING和E_NOTICE会显示警告和提示并继续执行，E_USER_ERROR表示用户产生的错误信息，当执行到错误信息会弹出错误并且继续执行到错误处理器并被捕捉。选项A、选项C、选项E错误。所以，本题的答案为B、D。</p>
<p>16 . error_reporting(0); echo $value; echo &quot;hello PHP&quot;;，以上代码运行后会输出__________。</p>
<p>​		答案：“hello PHP”。分析：error_reporting()的作用是设置PHP的报错级别并返回当前级别。函数原型为error_reporting（report_level），如果参数report_level未指定，那么当前报错级别将被返回。参数0可以关闭错误报告，E_ALL可以返回所有的错误和警告（不包括 E_STRICT）（E_STRICT will be part of E_ALL as of PHP 6.0）。因为error_reporting(0)可以关闭错误提示，所以即使$value未定义也不会有错误信息提示，页面输出结果“hello PHP”。</p>
<p>17.Nginx主要使用的网络协议是__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、__________。</p>
<p>​		答案：TCP/IP、HTTP、HTTPS、Websocket等网络协议。</p>
<h3 id="第八套" tabindex="-1"><a class="header-anchor" href="#第八套" aria-hidden="true">#</a> 第八套：</h3>
<p>​		1.PHP是一种解释型语言，因为其底层是由C语言编写的，所以PHP代码需要编译为opcode之后再交由Zend引擎执行，Zend引擎将这些PHP指令转变成C语言指令，而C语言指令又会转变成汇编语言，最后汇编语言将根据处理器的规则转变成机器码执行。</p>
<p>​		2.生成49个随机字符组成的字符串：</p>
<p>​		<img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211013110240499.png" alt="image-20211013110240499"></p>
<p>​		<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013110338392.png" alt="image-20211013110338392" style="zoom: 67%;" /></p>
<p>分析：对于选项A，在字符串中用{}包括变量可以告诉编译器花括号内是一个变量，选项A是可以直接把yellow输出的，选项A错误。</p>
<p>对于选项B，$fruits['banana']变量被双引号包括时，编译器会认为单引号也是键名的一部分，$fruits的键名就不是“banana”而是“'banana'”了，导致执行编译时得不到这个键名而报错，如果需要输出这个变量，那么可以直接写成$fruits[banana]进行输出。选项B正确。</p>
<p>对于选项C，用{}括起来的$fruits[banana]在编译时编译器知道是变量，然后会判断banana是不是一个常量，如果不是常量，那么就会被自动转换成字符串输出对应键名的值，所以可以得到yellow，但是输出前会出现Notice提示这里的banana键名问题。选项C错误。</p>
<p>对于选项D，双引号包括的数组键名不用加单引号，否则编译器会认为单引号也是键名的一部分，所以$fruits[banana]没有单引号是正确的。选项D错误。</p>
<p>所以，本题的答案为B</p>
<ol start="5">
<li></li>
</ol>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013110515198.png" alt="image-20211013110515198" style="zoom:67%;" />
<p>答案：A、D。分析：使用preg_replace()函数正则匹配时不区分字符串的大小进行匹配。选项A正确，选项B错误。对于选项C、D，相同的字符串，通过正则匹配后获得的$result值为abc。选项D正确，选项C错误。所以，本题的答案为A、D。</p>
<p>header()函数的作用是向客户端发送原始的HTTP报头，即必须在任何实际的输出被发送之前调用header()函数。</p>
<p>8．当PDO对象创建成功以后，与数据库的连接已经建立，就可以使用PDO对象了，下面不是PDO对象中的成员方法的是（　）</p>
<p>​		A．errorInfo()</p>
<p>​		B．bindParam()</p>
<p>​		C．exec()</p>
<p>​		D．prepare()</p>
<p>​		分析：bindParam是PDOStatement类的方法，其余是PDO类的方法（PDOStatement也有errorInfo方法）。errorInfo：从数据库返回一个含有错误信息的数组，如果有的话。exec：执行一条SQL语句并返回影响的行数。prepare：为执行准备一条SQL语句。所以，本题的答案为B。</p>
<p>9.在PHP中，用来获取浏览器属性的方法是__________。</p>
<p>​	答案：$_SERVER['HTTP_USER_AGENT']。</p>
<p>10.假设有一个名为'index.php'的文件的路径为c:/apache/htdocs/phptutor/index.php，那么basename($<em>SERVER['PHP_SELF'])的返回值为</em>_________。</p>
<p>​	答案：/htdocs/phptutor/index.php。分析：$_SERVER['PHP_SELF']可以获取到正在执行脚本的网页路径，除了根路径不能获取外，可以获取具体到除了根路径后的路径名+当前执行文件名。</p>
<p>11.修改MySQL用户root的密码的指令是__________。</p>
<p>​		答案：mysql admin -u root password test。分析：修改MySQL用户root密码的指令格式为mysql admin -u 用户名 password密码。</p>
<p>12.默认情况下，PHP把所有会话信息存储在/tmp文件夹中；在没有这个文件夹的操作系统中（例如Windows），必须在php.ini中给session.save_path设置一个合适的位置（例如C:\Temp）。</p>
<h3 id="第9套" tabindex="-1"><a class="header-anchor" href="#第9套" aria-hidden="true">#</a> 第9套</h3>
<p>9.1要比较两个字符串，以下最万能的方法是（　）</p>
<p>​		A．用 strpos函数</p>
<p>​		B．用==操作符</p>
<p>​		C．用 strcasecmp()</p>
<p>​		D．用 strcmp()</p>
<p>答案：D。分析：strcmp()函数提供了安全的字符串比较机制，比较的字符区分大小写。选项D正确。strcasecmp()函数也可以用来比较两个字符串，但不区分大小写，它的二进制是安全的。该函数与strncasecmp()函数类似，不同的是，通过strncasecmp()可以指定每个字符串用于比较的字符数。strcasecmp()不是一个“万能”函数，因为它不区分大小写。选项C错误。</p>
<p>9.2 假设浏览器没有重启，那么在最后一次访问后的多久，会话（Session）才会过期并被回收?（　）</p>
<p>​		A．1440s后</p>
<p>​		B．在Session.gc_maxlifetime设置的时间过了后</p>
<p>​		C．除非手动删除，否则永不过期</p>
<p>​		D．除非浏览器重启，否则永不过期</p>
<p>分析：session.gc_maxlifetime 设置的是用户最后一次请求到Session被回收之间的时间间隔。尽管数据文件并没有被真正删除，不过一旦Session被回收，将无法对此Session进行访问。巧合的是，session.gc_maxlifetime 的默认设置正好是1440s，但这个数字是可以被系统管理员调整的。选项B正确。</p>
<p>9.3 计算三个稠密矩阵A、B、C的乘积ABC，假定三个矩阵的尺寸分别为m<em>n、n</em>p和p*q，且m&lt;n&lt;p&lt;q，以下计算顺序中，效率最高的是（　）</p>
<p>​		A．(AB)C</p>
<p>​		B．A(BC)</p>
<p>​		C．(AC)B</p>
<p>​		D．(BC)A</p>
<p>答案：A。分析：根据矩阵运算知识，可以排除选项C与选项D，因为矩阵A与矩阵B相乘，矩阵A的列数必须与矩阵B的行数相等。对于选项A与选项B，一个m<em>n的矩阵A乘以n</em>q的矩阵B，会用矩阵A的第一行，乘以矩阵B的第一列并相加。这一运算需要耗费n次乘法以及n-1次加法，矩阵B有q列，矩阵A有m行，所以，A<em>B的复杂度为m</em>(2n-1)<em>q。根据上面的分析可知，选项A的复杂度为m</em>(2n-1)<em>p + m</em>(2p-1)<em>q，而选项B的复杂度为m</em>(2n-1)<em>q+ n</em>(2p-1)*q，很显然，选项A的效率高于选项B。所以，本题的答案为A。</p>
<p>9.4  n从1开始，每个操作可以选择对n加1或者对n加倍。如果需要获得整数2013，最少需要（　）个操作。</p>
<p>​		A．18</p>
<p>​		B．24</p>
<p>​		C．21</p>
<p>​		D．不可能</p>
<p>​		答案：A。分析：本题最容易想到的方法就是直接进行运算，采用反推的方法，从1到2013只允许执行加1操作或者加倍操作，那么从2013到1就只允许减1操作或者减半操作。具体步骤如下：由于2013是奇数，不能被2整除，此时对2013执行减1操作，变为2012，2012为偶数，能够被2整除，此时执行减半操作，变为1006，1006为偶数操作，于是继续执行减半操作，按照奇数减1，偶数减半的操作一直执行下去，最终结果就变为1。</p>
<p>​		整个过程如下：2013→2012→1006→503→502→251→250→125→124→62→31→30→15→14→7→6→3→2→1，此过程一共执行了18次。正向推理过程也为18次。选项A正确。所以，本题的答案为A。</p>
<p>9.5．Gethostbyname函数的作用是（　）</p>
<p>​		分析：gethostbynamel()函数的作用是根据主机名获取该主机名的所有IP列表。</p>
<p>9.6．处理数据库中读取的日期数据时，以下有助于避免bug的方法是（　）（三选）</p>
<p>​		A．确保日期数据与服务器使用相同的时区</p>
<p>​		B．如果日期需要被转换成 UNIX 时间戳进行操作，那么要确保结果不会溢出</p>
<p>​		C．用数据库功能测试日期的合法性</p>
<p>​		D．如果可能，那么用数据库功能计算日期的值</p>
<p>​		E．用代码控制日期只能在 PHP 中进行处理</p>
<p>​		答案：B、C、D。分析：数据库存储日期/时间的能力比PHP强。大多数DBMS能够处理格里历上所有的日期，而基于UNIX时间戳的PHP只能处理较短的一个时间段里的日期。因此在脚本中处理日期时，必须确保在它转换成时间戳后不会溢出（答案B）。此外，在处理日期时，无论是验证一个日期的合法性（答案C）还是进行计算（答案 D），都最好尽量让数据库来完成。</p>
<p>9.7.语句echo intval((0.7+0.1)*10);的打印结果为__________。</p>
<p>​		答案：7。分析：由于浮点数的精度是有限的，因此它在内存中存储的是一个近似值，而不是准确的值。对于（（0.1+0.7）*10），在内存中实际存储的值为7.999999….，当通过intval把它转换为整型的时候（向下取整），转换的结果就是7。正因为如此，在条件判断的时候一般不能通过“==”来比较两个浮点数是否相等。</p>
<p>9.8.在PHP运算符中，优先级从高到低分别是__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>。</p>
<p>​		答案：算术运算符、关系运算符、逻辑运算符。分析：PHP默认的优先级高低是先进行算术运算符的判断，再到关系运算符的判断，最后才到逻辑运算符判断。</p>
<p>9.9 使用php操作mysql时，想取得最近一条查询的信息，应该使用的函数是__________。</p>
<p>​		分析：mysql_info()函数可以返回最近一条查询的信息。</p>
<h3 id="第10套" tabindex="-1"><a class="header-anchor" href="#第10套" aria-hidden="true">#</a> 第10套：</h3>
<p>10.1  S市共有A、B两个区，人口比例为3∶5，据历史统计，A区的犯罪率为0.01%，B区的犯罪率为0.015%，现有一起新案件发生在S市，那么案件发生在A区的可能性是（　）</p>
<p>​			A．37.5%      	B．32.5%		C．28.6%		D．26.1%</p>
<p>​		答案：C。分析：根据题目意思可知，假设A区的人数为3X，那么，B区人口数为5X，A区犯罪的人数为3X<em>0.01%，B区犯罪的人数为5X</em>0.015%。A区犯罪的可能性=（A区犯罪人数）/（A区犯罪人数+B区犯罪人数）=（3X<em>0.01%）/（3X</em>0.01%+5X*0.015%）=28.6%。</p>
<p>10.2  GMT 时区下的时间戳与你所在时区下的时间戳的秒数差距是（　）</p>
<p>​			A．取决于你所在时区与GMT 时区的时间差</p>
<p>​			B．没有差别</p>
<p>​			C．只当你也在GMT 时区时才会相同</p>
<p>​			D．永远不会相同</p>
<p>​		答案：B。分析：GMT叫格林尼治时间，其本身就是时间戳，任何时区下的当前时间都是相同的，当前时间是一个绝对的时间点，不存在秒数的差距。选项B正确。</p>
<p>10.3   分析：在PHP4.0的概念中，抽象类、final类、public、private、protected(PPP)方法都没有实现。</p>
<p>10.4 以下有关PHP高级特性的说法中，正确的是（B　）</p>
<p>​		A．可以定义一个类去实现预定义接口Iterator，然后就能像访问数组一样访问这个类创建的对象</p>
<p>​		B．spla_utoload_register()提供了一种更加灵活的方式来实现类的自动加载，不再建议使用autoload()函数</p>
<p>​		C．PHP在对象中调用一个不可访问方法时，invoke()方法会被自动调用</p>
<p>​		D．匿名函数也叫闭包函数，常用作回调函数参数的值，但是不能作为变量的值来使用</p>
<p>​		分析：对于选项A，只有ArrayAccess能够提供像访问数组一样访问这个对象的接口，不能定义一个类或预定义接口Iterator去实现这个功能。选项A错误。</p>
<p>​		对于选项B，因为可以通过spla_utoload_register()函数创建autoload函数的队列，按定义顺序逐个执行，比__autoload()只可以定义一次使用更方便，所以不建议使用autoload()函数。选项B正确。</p>
<p>​		对于选项C，__call方法是在创建一个类实例化后就可以直接调用对象使用，当调用的方法不可访问或没有权限访问时，会自动调用__call方法。选项C错误。</p>
<p>​		对于选项D，匿名函数是可以赋值给变量的。选项D错误。</p>
<p>10.5 以下没有PHP扩展库的DBMS是（　）</p>
<p>​		A．MySQL</p>
<p>​		B．IBM DB/2</p>
<p>​		C．PostgreSQL</p>
<p>​		D．Microsoft SQL Server</p>
<p>​		E．以上都不对</p>
<p>​		答案：E。分析：PHP支持大部分的数据库连接使用。对于 PostgreSQL 和 MySQL 数据库，PHP都拥有对应的扩展库。访问IBM DB/2可以用ODBC扩展，访问Microsoft SQL Server可以用TDS和mssql扩展。选项E正确。</p>
<p>10.6</p>
<p>分析：当浏览器中显示图片时，首先需要使用Header函数来发送头信息，设置文件的内容，这里可以通过Header(&quot;content-type:image/jpeg&quot;)设定内容为一张jpeg的图片，然后使用imagecreatefromjpeg()函数来显示jpeg图片或者创建一个新图像，再通过imagejpeg()函数生成对应的jpeg格式图片，最后用imagedestroy($img)清除图片资源。选项B正确。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013134154910.png" alt="image-20211013134154910" style="zoom:67%;" />
<p>10.7．如果php.ini配置允许，那么下面选项中，fopen()函数不支持的网络协议是（　）</p>
<p>​					A．HTTP		B．ftp		C．mail		D．zlib</p>
<p>​			答案：C。分析：因为fopen()函数可以打开文件或者URL，所以格式为HTTP，ftp的网页路径可以打开，zlib的文件格式也是可以打开的。但是不支持打开mail函数查看邮件。选项C正确。</p>
<p>10.8 array_push()函数的作用是 __<strong><strong>将一个或多个元素压入数组的末尾。</strong></strong>。</p>
<p>10.9 更改mysql的表字段名的标准语法为__________。</p>
<p>​		答案：alter table 表名 change 原名新名新类型[first|after]。分析：修改表字段名：alter table 表名CHANGE 原字段名 新字段名 类型;修改字段类型：alter table 表名MODIFY 字段名 类型;增加一个字段：alter table 表名add COLUMN 字段名 类型 NOT NULL（或DEFAULT NULL）；新增一个字段默认不为空（或默认为空）;删除一个字段：alter table 表名DROP COLUMN 字段名;</p>
<p>10.10 JS表单弹出对话框函数是:  alert()、prompt()、confirm()；focus()。</p>
<p>10.11. 在PHP中，“+”操作符的功能包括_________、__________。</p>
<p>​			答案：数组数据合并、变量数据相加。</p>
<p>10.12 <?php echo 1+2+"3+4+5"; ?>程序的运行结果为__________。</p>
<p>​			分析：首先运行1+2结果为3，在执行+&quot;3+4+5&quot;;的时候会强制把这个字符串转换为整数，这个字符串转换后的整数为3，因此最终运行结果为3+3=6。</p>
<h3 id="第11套" tabindex="-1"><a class="header-anchor" href="#第11套" aria-hidden="true">#</a> 第11套：</h3>
<p>11.1．有如下代码，数据库关闭指令将关闭的连接标识是（　）</p>
<p><img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211013135702936.png" alt="image-20211013135702936"></p>
<p>​		A．$link1		B．$link2		C．全部关闭		D．报错</p>
<p>​		答案：B。分析：当数据库连接时，默认使用最后被mysql_connect()打开的连接。如果没有找到该连接，那么函数会尝试调用mysql_connect()建立连接并使用它。如果发生意外，没有找到连接或无法建立连接，那么系统会发出E_WARNING级别的警告信息。选项B正确。</p>
<p>11.2．假设需要编写一个脚本，用来通过任意一个流读取文本数据，并用另一个ROT13编码的流写回。编码必须在用第二个流写回时进行。以下最合适的方法是（　）</p>
<p>​		A．把编码后的数据存在临时变量中，把这个变量写入流</p>
<p>​		B．用流过滤器即时编码</p>
<p>​		C．创建一个 ROT13 查询表，然后一个字符一个字符地即时写入</p>
<p>​		D．ROT13 无法即时编码</p>
<p>​		E．以上都不对</p>
<p>​		答案：B。分析：PHP中的流过滤器可以应用在任何流上，并且能对数据流同时进行多个操作。可以给一个流同时添加ROT13过滤器和base64过滤器，来合并成base64/ROT13编码。选项B正确。</p>
<p>11.3  strcmp()函数用于比较两个字符串，区分大小写。strcasecmp()函数用于比较两个字符串，不区分大小写。stristr()函数用于搜索一个字符串在另一字符串中第一次出现的位置。</p>
<p>11.4  要查看一个变量的数据类型，可使用函数（BC　）A．type()   B．gettype()		C．GetType()		D．Type()</p>
<p>​		分析：PHP官方自带的查看变量类型的函数为gettype()函数，把变量作为参数来调用gettype函数，就可以得到变量的类型。由于PHP函数名是不区分大小写的，因此gettype()和GetType()函数是一样的。选项B、选项C正确。</p>
<p>11.5  发送一封包含 HTML、富文本和普通文本三个版本的邮件，要想客户端能选择一个合适的版本打开，MIME的content-type应该是（　）</p>
<p>​		A．multipart/mixed</p>
<p>​		B．multipart/alternative</p>
<p>​		C．multipart/default</p>
<p>​		D．multipart/related</p>
<p>​		E．不可能用 content-type 实现</p>
<p>​		答案：B。分析：如果需要发送多文本内容的邮件，那么MIME类型需要定义一个含有多个内容相同的自版本片段的母片段，即multipart/alternative片段可以包含text/plain和text/HTML版本的片段，然后通过电子邮件客户端选择一个适合的版本显示给用户浏览。一般情况下，最好放入一个文本格式的版本中，这样不支持MIME的邮件客户端也可以正常读取。选项B正确。</p>
<p>11.6 程序echo getservbyname('ftp','TCP')输出的是__________。</p>
<p>​		答案：21。分析：getservbyname()函数可以获取互联网服务协议对应的端口。而这里获取的是TCP服务器指定的“FTP”协议中对应的端口，默认值是21，所以输出得到21。</p>
<p>11.7 以下关于PHP命名空间的说法中，不正确的是（　）</p>
<p>​		A．访问任意全局类、函数或常量，都可以使用完全限定名称，例如，\strlen()或\Exception或\INI_ALL</p>
<p>​		B．关键字 namespace可用来显式访问当前命名空间或子命名空间中的元素，它等价于类中的 this 操作符</p>
<p>​		C．任意合法的PHP代码都可以包含在命名空间中，但只有三种类型的代码受命名空间的影响，它们是类、函数和常量</p>
<p>​		D．常量__NAMESPACE__的值是当前命名空间名称的字符串。如果是在全局中，那么它不包括任何命名空间中的代码，本身是一个空字符串</p>
<p>​		答案：B。分析：namespace关键字是用来声明命名空间用的，它并不能等价于this操作符的功能。所以，选项B说法不对。</p>
<p>11.8 创建一个自定义的流处理器的方法是（　）</p>
<p>​		A．调用 stream_wrapper_register()函数，并定义一个进行流操作的类</p>
<p>​		B．用 stream_wrapper_register()注册一个处理函数</p>
<p>​		C．创建一个和要处理的流封装器同名的类，并用 fopen()打开</p>
<p>​		D．用 stream_load()加载流封装器</p>
<p>​		答案：A。分析：stream_wrapper_register()函数能注册一个新的流封装器，它需要接收操作流的类名称。</p>
<p>11.9 final关键字的用法可以用于__________。</p>
<p>​		答案：声明方法和类，分别表示方法不可被覆盖、类不可被继承（不能再派生出新的子类）。</p>
<h3 id="第13套" tabindex="-1"><a class="header-anchor" href="#第13套" aria-hidden="true">#</a> 第13套</h3>
<p>13.1  在PHP面向对象中，以下关于__call()方法的描述中，错误的是（　）__</p>
<p>​		A．__call方法在调用对象中不存在的方法时会自动调用</p>
<p>​		B．<strong>call方法有两个参数</strong></p>
<p>​		C．格式如下：function __call（$方法名，$参数数组）{ //.....}</p>
<p>​		D．__call方法在使用对象报错时会自动调用</p>
<p>​		答案：D。分析：__call()方法用于监视错误的方法调用。为了避免当调用的方法不存在时产生错误，可以使用 __call()方法来避免。该方法在调用的方法不存在时会自动调用，程序仍会继续执行下去。方法原型如下：[插图]其中，第一个参数$function_name会自动接收不存在的方法名，第二个参数$arguments则以数组的方式接收不存在方法的多个参数。选项A、选项B、选项C的说法都正确，选项D说法错误。</p>
<p>13.2 下列语句中，正确定义一个常量的是（　）</p>
<p>​		A．var const PI=3.14;		B．const PI=3.14;		C．public const PI=3.14;		D．static PI=3.14;</p>
<p>答案：B。分析：const与define都可以用于定义常量，而const本身就是一个语言结构，使用const的代码简单易读，而define是一个函数。而且，const在编译时要比define快很多。</p>
<p>具体而言，const与define在定义常量方面，区别如下：</p>
<p>1）const用于类成员变量的定义，一经定义，不可修改。define不可用于类成员变量的定义，可用于全局常量。</p>
<p>2）const可在类中使用，define不能。</p>
<p>3）const不能在条件语句中定义常量。</p>
<p>4）const采用一个普通的常量名称，define可以采用表达式作为名称。</p>
<p>5）const只能接受静态的标量，而define可以采用任何表达式。</p>
<p>6）const定义的常量是大小写敏感的，而define可通过第三个参数（为true表示大小写不敏感）来指定大小写是否敏感。</p>
<p>​		public通常用来声明类中的方法，static是定义静态变量或方法。静态变量仅在局部函数域中存在且只被初始化一次，当程序执行离开此作用域时，其值不会消失，下次调用的时候不会重新初始化，而会使用上次执行的结果。static关键字在类中，描述一个成员是静态的，被static修饰的成员是属于类的，不属于任何对象实例。</p>
<p>13.3．要把 microtime()的输出转化成一个数字值，以下方法最简便的是（　）</p>
<p>​		A．$time = implode (' ', microtime());</p>
<p>​		B．$time = explode (' ', microtime()); $time = $time[0] + $time[1];</p>
<p>​		C．$time = microtime() + microtime();</p>
<p>​		D．$time = array_sum (explode (' ', microtime()));</p>
<p>​		答案：D。分析：microtime 函数返回一个由时间戳和小数两部分组成的字符串，两部分由空格分开。因此，explode()将字符串分割并放入数组，array_sum()把它们相加，转换成数字。选项D正确。</p>
<p>13.4</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013145946701.png" alt="image-20211013145946701" style="zoom: 67%;" />
<p>​		答案：A、C、D。分析：如果要从给定的文本信息中创建一份合法的MIME邮件，那么MIME邮件在开头处必须有MIME-Version头信息，而邮件的每个片段（包括“root”片段）都必须有Content-Type和content-transfer-encoding这两个部分。而Content-Disposition和Content-ID两个头信息是可选的，Content-Disposition用来指出片段要如何显示（比如显示为附件），Content-ID是片段中的各个内容的唯一识别符。选项A、选项C、选项D正确。</p>
<p>13.5 如果register_globals必须要被打开，那么能防止恶意用户危害系统安全的是（　）（双选）</p>
<p>​		A．过滤所有来自非信任源的数据</p>
<p>​		B．过滤所有外部数据</p>
<p>​		C．所有变量在使用前先初始化</p>
<p>​		D．使用难猜变量名来防止用户篡改数据</p>
<p>​		E．以上都对</p>
<p>​		答案：B、C。分析：对于选项A，即使过滤所有来自非信任源的数据，也可能造成安全问题。选项A错误。对于选项B，可以通过过滤所有外部数据来防止第三方用户的恶意注入。选项B正确。对于选项C，如果register_globals打开，那么需要保证所有变量在使用前都已初始化，以防止用户恶意注入。选项C正确。对于选项D，即使变量名难猜，也可以传入恶意信息。选项D错误。</p>
<p>13.6 分析：在MySQL中通过set names *设定字符集时，主要设置客户端使用的编码字符集（character_set_client）、数据库给客户端返回时使用的字符集（character_set_results）、连接数据库的字符集设置编码类型（character_set_connection）等三个系统变量的值。</p>
<p>13.7 能把字符串里存储的二进制数据转化成十六进制的函数是</p>
<p>​			pack()函数可以将数据装入一个二进制字符串中，可以将字符转化成十六进制表示。bin2hex()函数也可以将字符串转化成十六进制。hex2bin()函数可以把ASCII字符的字符串转换为十六进制值，并通过pack()函数转换回来。而printf()函数可以把数字转换成十六进制，但是不能转换字符串为十六进制。</p>
<p>13.8 PHP中的PEAR是__________。</p>
<p>​		答案：PEAR全称为PHP扩展与应用库（PHP Extension and ApplicationRepository），它是一个PHP扩展及应用的一个代码仓库。可以直接下载下来，在代码中包含扩展开发使用。</p>
<p>13.9 代码return ？ =='a';在“？”中加入__________函数后返回true。</p>
<p>​		答案：chr(65)。分析：ord()函数可以返回字符串的首个字符的ASCII值。chr()函数可以返回指定ASCII值的字符串，可以通过chr（65）转换成字符串A（备注：字符'A'的ASCII值为65），和A比较为真返回TRUE。而65+''和''+65都不能强制转换成字符串A，无法和A比较为真。</p>
<h3 id="第14套" tabindex="-1"><a class="header-anchor" href="#第14套" aria-hidden="true">#</a> 第14套：</h3>
<p>14.1 	php函数不区分大小写，变量区分大小写</p>
<p>14.2 /tmp是上传文件的默认存储目录，如果更改这个目录，那么需要编辑哪个文件的哪个属性值?</p>
<p>​		php.ini文件的upload_tmp_dir属性</p>
<p>14.3 分析：mail()函数的语法为mail（“规定邮件的接收者”，“规定邮件的主题，该参数不能包含任何换行字符，规定要发送的消息”，“规定额外的报头，比如 From、Cc以及Bcc”，“规定sendmail 程序的额外参数”）。由mail()函数的语法解析知道，php@wilson.gs是邮件接收者的邮箱地址。而reply@wahaha.org.tw是规定的报头，并且使用mail()函数可以进行邮件的发送。</p>
<p>14.4 在不把文件内容预加载到变量中的前提下，解析一个以特殊格式格式化过的多行文件的方法是（　）</p>
<p>​		A．用file()函数把它分割放入数组</p>
<p>​		B．用sscanf()</p>
<p>​		C．用fscanf()</p>
<p>​		D．用fgets()</p>
<p>​		E．用fnmatch()</p>
<p>​		答案：C。分析：fscanf()函数可以用指定格式来解析文件的内容。而sscanf()函数只能用来操作字符串。fgets()函数只能用于读取单行文本，file()函数可以读取整个文件，fnmatch()函数是根据指定的模式来匹配文件名或字符串，它们都不能解析格式化过的多行文件。选项C正确。</p>
<p>14.5  __________函数能创建并注册一个 PHP 的流封装器。</p>
<p>​		答案：stream_wrapper_register()。分析：stream_wrapper_register()函数可以创建并注册一个用户自定义的文件封装器（以类的形式创建）作为封装协议。它需要两个参数：新协议的名称和操作它的类的名称。</p>
<p>14.6 (^\s*)|(\s*$)这个正则表达式作用是__________。</p>
<p>​		答案：匹配以0个或多个空白符开头，或者匹配0个或多个空白符结尾的字符串。分析：“^”表示匹配输入字符串的开始位置，“\s*”表示匹配任意的空白符，“$”表示以多个空白符结尾的字符串，所以该正则表达式的作用是，匹配以0个或多个空白符开头，或者匹配0个或多个空白符结尾的字符串。</p>
<p>14.7 分析：error_reporting(0)表示的是关闭所有的错误提示，但编译类型的错误无法隐藏关闭。</p>
<h3 id="第15套" tabindex="-1"><a class="header-anchor" href="#第15套" aria-hidden="true">#</a> 第15套：</h3>
<p>15.1 array_rand()函数的作用是随机返回数组的一个键名。</p>
<p>15.2</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013160044994.png" alt="image-20211013160044994" style="zoom:50%;" />
<p>分析：对于选项A，子类继承父类，如果子类没有构造函数和析构函数，那么实例化子类时会自动调用父类的构造函数和析构函数；但如果子类只有构造函数没有析构函数，那么实例化子类时，自动调用的是子类的构造函数，销毁对象时调用父类的析构函数；如果子类没有构造函数只有析构函数，那么实例化子类时会自动调用父类的构造函数，销毁对象时调用子类的析构函数。选项A说法不完全，选项A错误。</p>
<p>对于选项B，成员变量使用了public、protected、private修饰定义变量时是不需要var关键字的。选项B说法正确，选项B错误。对于选项C，父类中的静态成员，子类中是不可以直接访问的。</p>
<p>选项C说法正确，选项C错误。</p>
<p>对于选项D，一个包含抽象方法的类必须是抽象类，并且抽象类不能被实例化。选项D说法正确，选项D错误。</p>
<p>15.3 当执行serialize()序列化时，会检查是否存在魔法函数__sleep()，如果存在，那么先执行__sleep()，然后才执行serialize()序列化，这个功能可以清理对象，并返回一个包含对象中所有变量名的数组。而__wakeup()方法是在执行unserialize()反序列化前使用，预先准备对象数据。</p>
<p>15.4  PDO通过执行SQL查询与数据库进行交互，可以分为多种不同的策略，使用哪一种方法取决于要做什么操作。如果向数据库发送DML语句，那么下面最合适的方式是（　）</p>
<p>​		A．使用PDO对象中的exec()方法</p>
<p>​		B．使用PDO对象中的query()方法</p>
<p>​		C．使用PDO对象中的prepare()和PDOStatement对象中的execute()两个方法结合</p>
<p>​		D．以上方式都可以</p>
<p>​		分析：PDO-&gt;exec()方法主要是针对没有结果集合返回的操作，例如 INSERT、UPDATE、DELETE等操作，它返回的结果是当前操作影响的列数。选项A正确。</p>
<p>15.5 同时满足这样条件的数：被10除余9，被9除余8，被8除余7，在100～1000之间，有个__________。</p>
<p>​		答案：2个。分析：假设要求解的数为P，分析过程如下：P除以10余9，可知P+1能被10整除；P除以9余8，可知P+1能被9整除；P除以8余7，可知P+1能被8整除；所以P=(8，9，10的公倍数)-1；8=2<em>2</em>2，9=3<em>3，10=2</em>5；则P+1一定是2<em>2</em>2<em>3</em>3*5的倍数（只能约掉一个2）；又100≤P≤1000；101≤P+1≤1001；所以P+1=360，720；即P=359，719；由分析可知，有两个这样的数存在，分别是359和719。</p>
<p>15.6 有一个字符串变量$String，去除其中的HTML标记的正则表达式为__________。</p>
<p>​			答案：$result = preg_replace(&quot;/&lt;/?[^&lt;&gt;]*?&gt;/&quot;,&quot;&quot;,$String);。</p>
<p>15.7 事务必须满足__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、__________四个属性。</p>
<p>​		答案：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability），即ACID四种属性。</p>
<p>15.8 Memcache最大能存储的单个item为多大？__________。</p>
<p>​		答案：1MB。分析：Memcache存储的单个最大数据为1MB，如果数据大于1MB，那么可以考虑将数据进行拆分存储到不同的key中。</p>
<h3 id="第16套" tabindex="-1"><a class="header-anchor" href="#第16套" aria-hidden="true">#</a> 第16套</h3>
<p>16.1 分析：在UNIX、Linux系统中，PHP主要使用sendmail程序来处理邮件。而在Windows中除非已经有sendmail包装器，否则只能使服务器的SMTP配置进行，而SMTP是可以在php.ini文件中进行配置开启的。选项D正确，选项A、选项B错误。对于选项E，PHP中发送邮件的办法有使用PHP内置的mail()函数或者使用封装的SMTP协议邮件类才能进行邮件的发送，否则不能实现邮件的发送。</p>
<p>16.2  在一个不透明的箱子里，一共有红、黄、蓝、绿和白五种颜色的小球，每种颜色的小球大小相同，质量相等，数量充足。每个人从篮子里抽出两个小球，那么要保证有两个人抽到的小球颜色相同，至少需要抽球的人数为（　）</p>
<p>​			A．11个		B．8个		C．16个		D．13个</p>
<p>​		答案：C。分析：题目要求两个人抽到的小球颜色相同，而此题有两个关键点需要注意：第一，每个人取的是两个球，而不是一个球，所以，必须要求两个球的颜色都是一模一样的才能称为小球颜色相同。第二，每种球的数量充足，可以理解为球的数量是无限的，不存在某一种颜色的球被全部取完后面的人无法取到的情况。由于球的颜色有5种，根据排列组合原理，5种情况下取的球的颜色情况可以分为两类情况：</p>
<p>1）取的两个球的颜色相同（每个人取的球的颜色是相同的），有5种情况。</p>
<p>2）取的两个球的颜色不同，C（5,2)=10，有10种情况。</p>
<p>以上两种情况合计共有15种情况。如果前15个人取的球的颜色都不相同，那么当第16个人取球时，必然会与前面的15个人中的某一个相同。本题的答案为16个。</p>
<p>16.3  以下方法中，能保证锁在任何竞争情况下都安全的是（　）</p>
<p>​		A．用fock()锁住指定文件</p>
<p>​		B．用fopen()在系统的临时文件夹里打开文件</p>
<p>​		C．用tempnam()创建一个临时文件</p>
<p>​		D．用mkdir()创建一个临时文件夹</p>
<p>​		E．用tmpfile()创建一个临时文件</p>
<p>​		答案：D。分析：</p>
<p>​		对于选项A，fock()函数使用的是协议锁定机制，即所有其他访问此文件的线程都必须使用fock()，如果某个线程没有这么做，那么就会产生竞争，锁就不安全了。选项A错误。</p>
<p>​		对于选项B，使用fopen()打开的临时文件不能保证文件锁的安全，一样会产生竞争。</p>
<p>​		对于选项C和选项E创建的临时文件也不能保证不存在竞争。</p>
<p>​		对于选项D，用mkdir创建一个文件夹能保证任何时刻只有一个进程能处理这个文件夹，即保证操作的原子性。因此，在多线程编程的时候，也可以使用这个特性来达到多线程安全的目的。具体实现方法：多线程可以通过创建一个相同的临时文件夹来实现多线程的同步，操作结束后再删除这个文件夹。在此过程中，一旦其中一个线程创建成功了这个临时文件夹后，其他线程将无法创建同名的文件夹。在这种情况下，其他线程只能等待这个临时文件夹被删除后才能继续往下执行，直到I/O操作完成。选项D正确。</p>
<p>16.4</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013172647173.png" alt="image-20211013172647173" style="zoom:67%;" />
<p>答案：D。分析：header(&quot;Content-type:image/jpeg&quot;)可以指定浏览器输出一张图片，readfile()函数可以输出文件。如果输出文件成功，那么会输出文件中读入的字节数，如果输出文件失败，那么返回False。因为存在image.jpg文件，所以会直接下载image.jpg图片。选项D正确。</p>
<p>16.5 用PHP写出一个正则表达式，过滤网页上的所有js脚本__________。</p>
<p>​		因为网页中的js脚本代码以<script></script>包裹，所以可以对匹配包含这些字符的代码进行过滤，即过滤js脚本，正则匹配格式为/&lt;script[^&gt;]<em>?&gt;.</em>?&lt;/script&gt;/si。</p>
<p>16.6 一个函数的参数不能是对变量的引用，除非在php.ini中把__________设为on。</p>
<p>​		答案：allow_call_time_pass_reference。分析：主要通过在php.ini配置文件里对allow_call_time_pass_reference进行启用，在函数调用时强制参数按照引用传递。对于该方法，目前已经不推荐使用，推荐在函数定义时显式地指定哪些参数需要使用引用传递。</p>
<h3 id="第17套" tabindex="-1"><a class="header-anchor" href="#第17套" aria-hidden="true">#</a> 第17套：</h3>
<p>17.1 假如何老师看到摆钟的时间是17:32，那么此时时针与分针的最小夹角是（B　）</p>
<p>​				A．25°		B．26°		C．28°		D．32°</p>
<p>​		答案：B。分析：首先，选定一个参考物，以12点正点刻度顺时针作为参考量，首先算出时针与该参考量的偏移量，然后算出分针与该参考量的偏移量，二者相减即可求解出时针与分针的夹角。众所周知，时针行走一圈为360°，合12个小时，所以，时针每小时转动的角度值为360°/12=30°，17:32的时针偏移量为30°*（5+32/60）=166°，即时针与12点正点时刻的夹角为166°。分针每走一圈为360°，合1个小时（60分钟），所以，分针每分钟转动的角度值为360°/60=6°，17:32的分针偏移量为6°*32=192°。时针与分针的差值即为所求解，192°-166°=26°。</p>
<p>​</p>
<p>17.2  执行如下代码，结果是（　）</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013175043810.png" alt="image-20211013175043810" style="zoom:50%;" />
<p>​		A．-3		B．4		C．-7		D．1</p>
<p>答案：A。分析：$a和$b通过按位或运算（|）运算时会把$a和$b分别进行二进制运算，然后把$a或$b中为1的位设为1。$a为-3，它的二进制为正数3的补码即1100，而$b=4，二进制数为0100，所以，$a|$b等价于（1100）|（0100），它们二进制中为1的位数都设为1，得到1100，即-3，输出得到-3。选项A正确。</p>
<p>17.3</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013175632124.png" alt="image-20211013175632124" style="zoom: 33%;" />
<p>答案：C。分析：通过sort_my_array(&amp;$a1)将数组$a1的引用传递到sort_my_array()函数中排序，这种写法在PHP5.3版本及以前是支持这样的格式的，sort()函数排序成功会返回true，失败会返回false。而return sort($array)返回的是排序后的结果值true，所以var_dump()打印后得到的是bool(true)。但是PHP5.3以后的版本已经废除这样的写法，如果在PHP5.3以后的版本中使用这种方法，那么将会报致命错误。因此，不建议再使用这种方式值的引用。选项C正确。</p>
<p>17.4 _____________函数能让服务器输出header：set-Cookie：foo=bar。</p>
<p>​		答案：setcookie()或setrawCookie()。分析：由这个header头里面的信息set-Cookie知道是对Cookie进行设置，所以可以通过setcookie()或setrawCookie()函数输出HTTP发送Cookie的信息。</p>
<p>17.5 如果在PHP中使用Oracle数据库作为数据库服务器，那么应该在PDO中加载___________驱动程序。</p>
<p>​		答案：PDO_OCI。分析：PDO_OCI is a driver that implements thePHP Data Objects (PDO)interfaceto enable access from PHP to Oracle databases through the OCIlibrary。</p>
<p>17.6 POST和GET传输的最大容量分别是_______________和_____________。</p>
<p>​		答案：POST默认是2MB，php.ini可设置，GET是1KB。分析：GET是通过URL提交数据的，因此，GET可提交的数据量就跟URL所能达到的最大长度有直接关系。URL不存在参数上限的问题，HTTP协议规范也没有对URL长度进行限制。IE对URL长度的限制是2083B（2KB+35B）。对于其他浏览器，例如，FireFox、Netscape等，则没有长度限制，这个时候其限制取决于服务器的操作系统。即如果url太长，那么服务器可能会因为安全方面的设置从而拒绝请求或者发生不完整的数据请求。理论上讲，POST是没有大小限制的，HTTP协议规范也没有进行大小限制，但实际上，POST所能传递的数据量大小取决于服务器的设置和内存大小。对于PHP语言而言，上传文件涉及的参数PHP默认的上传上限为2MB，更改这个值需要更改php.conf的post_max_size这个值。</p>
<h3 id="第18套" tabindex="-1"><a class="header-anchor" href="#第18套" aria-hidden="true">#</a> 第18套：</h3>
<p>18.1 如果等式12*25=311成立，那么使用的是（　）进制运算。</p>
<p>​		A．七		B．八		C．九		D．十一</p>
<p>​	答案：C。分析：当进行乘法运算时，无论是什么进制的数进行运算，其基本方法都是相同的，以十进制数的计算为例：2*5=10。如果是七进制，那么运算结果最后一位一定是10%7=3，相乘后进位值为10/7=1。同理，如果是八进制，相乘结果最后一位一定等于10%8=2。如果是九进制，最后一位一定是10%9=1。如果是十一进制，最后一位一定是10%11=A（类似于十六进制中，使用A表示数字10）。本题中，计算结果为311，最后一位为1，可以排除选项A、选项B和选项D，只有选项C满足题意。</p>
<p>18.2 考虑如下脚本：运行时，尽管文件test.txt已经被用unlink()函数删除，脚本仍然输出1，1。在脚本的最后添加什么函数才能解决这个问题?（　）</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211013181540553.png" alt="image-20211013181540553" style="zoom:50%;" />
<p>A．clearstatcache()		B．ffush()		C．ob_fush()		D．touch()</p>
<p>答案：A。分析：脚本仍然输出1，1，是因为PHP会缓存某些文件系统函数的返回值，例如file_exists()函数，为了提高脚本处理重复操作时的效率，所以可以使用clearstatcache()函数清理缓存，防止unlink()删除文件后仍然输出1，1。选项A正确。ffush()函数是将缓冲内容输出到文件，ob_fush()函数是输出缓冲区中的内容，touch()函数是设置指定文件的访问和修改时间。选项B、选项C、选项D错误。</p>
<p>18.3 在 PHP 的“安全模式”下，有助于降低安全风险的是（　）</p>
<p>​		A．限制 shell 命令的执行</p>
<p>​		B．限制对系统环境变量的访问</p>
<p>​		C．限制 PHP 的文件包含目录</p>
<p>​		D．限制允许对数据库进行的操作</p>
<p>​		E．以上全部</p>
<p>答案：A、B、C。分析：在安全模式下，增加了许多附加的安全验证，从而降低了安全隐患。但是在安全模式下无法执行系统命令、访问环境变量和判断文件引入是否安全。正是这些限制使得安全模式下运行的代码有更小的风险。选项A、选项B、选项C正确。</p>
<p>18.4</p>
<p>MySQL目前只有InnoDB和BDB两个数据表类型才支持事务</p>
<p>有关PHP字符串的说法：</p>
<p>​		如果一个脚本的编码是ISO-8859-1，则其中的字符串也会被编码为 ISO-8859-1，</p>
<p>​		PHP的字符串在内部是字节组成的数组，用花括号访问或修改字符串对多字节字符集很不安全，</p>
<p>​		一个布尔值 Boolean的 true被转换成 string的“1”，false被转换成空字符串，</p>
<p>​		substr()、strpos()、strlen()、htmlentities()处理字符串时依据的编码方式是不相同的，substr在处理多字节字符的时候可能会出现乱码。</p>
<p>​</p>
<p>18.5  $array['anykey']和$array[anykey]的区别是____________________。</p>
<p>​		答案：数组中键名一般由单引号指明键名为字符串，如果没有单引号，那么系统首先认为键名为常量，如果发现没有定义该常量值，那么认为该值为字符串并且会报NOTICE错误，但这样执行效率较低。它们的根本区别在于编译时系统认为'anykey'是字符串，而anykey可能是常量或者字符串。</p>
<p>18.6 PHP中获取图像尺寸大小的方法是____________________。</p>
<p>​		答案：getimagesize()、Imagesx()、Imagesy()。分析：1）可以使用getimagesize()获取图片的大小及相关信息，使用方法为getimagesize（图片路径），如果成功获取，那么返回数组，如果不成功，那么返回false。2）可以使用Imagesx()函数用于获取图像的宽度，单位为像素，返回值为整型。3）可以使用Imagesy()函数用于获取图像的高度，单位为像素，返回值为整型。</p>
<h3 id="第19套" tabindex="-1"><a class="header-anchor" href="#第19套" aria-hidden="true">#</a> 第19套：</h3>
<p>19.1 以下关于设计模式的说法中，错误的是（A	　）</p>
<p>A．观察者模式中，观察者可以改变被观察者的状态，再由被观察者通知所有观察者依据被观察者的状态进行</p>
<p>B．MVC模型的基本工作原理是基于观察者模式，实现是基于命令模式</p>
<p>C．设计模式的核心原则是“开-闭”原则，即对扩展开放，对修改关闭</p>
<p>D．创立型模式的根本意图是要把对象的创建和使用分离的责任进行分离，从而降低系统的耦合度</p>
<p>​		分析：观察者只能观察到被观察者状态的变化，而不能改变被观察者的状态。</p>
<p>19.2 宽带的1Mbit/s理论上的下载速度是（　128kbit/s ）</p>
<p>​		分析：因为下载速度是以Byte做单位，1B=8bit，所以1Mbit/s的理论上下载速度是1Mbit/s = 1024kbit/s。所以可得1*1024/8bit/s = 128kbit/s。</p>
<p>19.3 打开php.ini中的safe_mode，会影响的函数有__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、___________。</p>
<p>​		答案：fopen()、mkdir()、rmdir()、set_time_limit()、mysql_connect()、mail()。</p>
<p>​		分析：PHP的safa_mode提供了一个基本安全的共享环境，在一个有多个用户账户存在的PHP开发的Web服务器上。当安全模式打开的时候，部分函数将被完全地禁止，而还有部分函数的功能将会受到限制。下面重点给出其中的一部分：</p>
<p>​		1）fopen()、mkdir()、rmdir() 检查被操作的目录是否与正在执行的脚本有相同的UID。</p>
<p>​		2）创建新文件（只能在属于当前用户的目录下创建文件）。</p>
<p>​		3）dl()函数在安全模式下被禁用。</p>
<p>​		4）set_time_limit()在安全模式下不起作用。</p>
<p>​		5）mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同。</p>
<p>​		6）mail()在安全模式下，第5个参数被屏蔽。</p>
<p>19.4   session的运行机制是___________________________。</p>
<p>​		答案：服务器使用一种类似于散列表的结构（也可能就是使用散列表）来保存信息。</p>
<p>​		分析：Session是一种服务器端的机制，服务器使用一种类似于散列表的结构（也可能就是使用散列表）来保存信息。</p>
<p>​		当程序需要为某个客户端的请求创建一个Session的时候，服务器首先检查这个客户端的请求里是否已包含了一个Session标识SessionID，如果已包含一个SessionID，则说明已经为此客户端创建Session，服务器就按照SessionID把这个Session检索出来使用，如果客户端请求不包含SessionID，那么为此客户端创建一个Session并且生成一个与此Session相关联的SessionID，SessionID的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个SessionID将被在本次响应中返回给客户端保存。</p>
<p>19.4.2	Session的原理是什么?大型网站中，使用Session应注意什么?</p>
<p>​		答案：Session用来标识服务器与浏览器的一次会话过程，服务器会给每个Session分配一个唯一的会话ID（SID）。SID可以看作与任意数量的数据有关联，在HTTP无状态行为下，可以通过两种方式实现：</p>
<p>​		1）通过Cookie存储SID并在必要时获取SID，在页面中使用和SID相关的各项数据，即使会话结束了，Cookie也可以在客户端保存，并在后续会话中读取使用。</p>
<p>​		2）URL重写，在每个请求页面的本地URL上增加SID。无论客户什么时候点击这些链接，都会通过SID自动传播，这样即使客户端禁用Cookie，也不影响会话处理功能，可以正常使用；但是这种方法也存在一些问题，例如，URL重写在会话之间不能保持持久性，也无法阻止用户将URL分享给别人。</p>
<p>​		在大型网站中，因为访问量比较大，所以应用服务器一般都会做集群部署，Session是存储在每个服务器中的，这时需要注意实现各个服务器之间的Session共享。</p>
<p>19.5  MySQL的事务是：</p>
<p>​		答案：事务是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成，事务则提交，那么其修改将作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消。</p>
<h3 id="第20套" tabindex="-1"><a class="header-anchor" href="#第20套" aria-hidden="true">#</a> 第20套：</h3>
<p>20.1 一张表，里面有ID自增主键，当insert了17条记录之后，删除了第15，16，17条记录，再把MySQL重启，再insert一条记录，这条记录的ID是（　）</p>
<p>​		A．表类型是MyISAM则ID是18，表类型是InnoDB则ID是15</p>
<p>​		B．表类型是MyISAM则ID是18，表类型是InnoDB则ID是18</p>
<p>​		C．表类型是MyISAM则ID是15，表类型是InnoDB则ID是15</p>
<p>​		D．表类型是MyISAM则ID是17，表类型是InnoDB则ID是15</p>
<p>​		答案：A。分析：因为MyISAM表会把自增主键的最大ID记录到数据文件中，重启MySQL自增主键的最大ID也不会丢失。所以，插入后的ID值为18。而InnoDB表只是把自增逐渐的最大ID记录到内存中，重启MySQL或对表进行OPTIMIZE操作，都会导致最大ID丢失。所以，插入后ID的值为15。</p>
<p>20.2   $result=preg_replace(&quot;/\s*[quote][\n\r]<em>(.+？)[\n\r]</em>[/quote]\s*/is&quot;,&quot;\1&quot;,$str); 该语句会匹配和替换出什么样的$str？（　）</p>
<p>​		A．[quote] [/quote]不区分大小写</p>
<p>​		B．[quote] [/quote]区分大小写</p>
<p>​		C．如果$str = &quot;[quote]\t\nabc\t\n[/quote]，那么$result = &quot;\t\nabc\t\n&quot;;</p>
<p>​		D．如果$str=&quot;[quote]\t\nabc\t\n[/quote]，那么$result = 'abc';</p>
<p>​		答案：A、D。分析：preg_replace()函数正则匹配时不区分字符串的大小进行匹配。选项A正确，选项B错误。对于选项C、D相同的字符串，通过正则匹配后获得的$result值为abc。选项D正确，选项C错误。</p>
<p>20.3  error_reporting（2047）的作用是（　）</p>
<p>​		分析：2047=1+2+4+8+16+32+64+128+256+512+1024。其中，1对应E_ERROR，2对应E_WARNING，4对应E_PARSE，8对应E_NOTICE，16对应E_CORE_ERROR，32对应E_CORE_WARNING，64对应E_COMPILE_ERROR，128对应E_COMPILE_WARNING，256对应E_USER_ERROR，512对应E_USER_WARNING，1024对应E_USER_NOTICE。综上分析，error_reporting(2047)表示上述错误都会显示出来。</p>
<p>20.4  Memcache能接受的key的最大长度是_____________________。</p>
<p>​		答案：250个字符。分析：Memcache要求key的最大长度是250个字符，如果使用的客户端支持“key”的前缀，那么key可以是前缀+原始key，最大长度可以超过250个字符。但是为了节省内存和带宽，不建议使用太长字符做key。</p>
<h2 id="简答题和算法题" tabindex="-1"><a class="header-anchor" href="#简答题和算法题" aria-hidden="true">#</a> 简答题和算法题：</h2>
<p>6.1</p>
<p>5名海盗抢得了窖藏的100枚金币，并打算瓜分这些战利品。这是一些讲民主的海盗（当然是他们自己特有的民主），他们的习惯是按下面的方式进行分配：最厉害的一名海盗提出分配方案，然后所有的海盗（包括提出方案者本人）就此方案进行表决。如果50%或更多的海盗赞同此方案，此方案就获得通过并据此分配战利品。否则提出方案的海盗将被扔到海里，然后下一名最厉害的海盗又重复上述过程。</p>
<p>所有的海盗都乐于看到他们的一位同伙被扔进海里，不过，如果让他们选择的话，他们还是宁可得一笔现金。他们当然也不愿意自己被扔到海里。所有的海盗都是有理性的，而且知道其他的海盗也是有理性的。此外，没有两名海盗是同等厉害的——这些海盗按照完全由上到下的等级排好了座次，并且每个人都清楚自己和其他所有人的等级。这些金块不能再分，也不允许几名海盗共有金块，因为任何海盗都不相信他的同伙会遵守关于共享金块的安排。这是一伙每人都只为自己打算的海盗。</p>
<p>最凶的一名海盗应当提出什么样的分配方案才能使他获得最多的金子呢?</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014112258578.png" alt="image-20211014112258578" style="zoom:50%;" />
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014112310554.png" alt="image-20211014112310554" style="zoom:50%;" />
<p>6.2  	如何定义一个函数?函数名区分大小写吗?</p>
<p>​	答案：定义一个函数的步骤为以下几点，函数名的大小写是不区分的。</p>
<p>​		1）通过function关键字声明函数，格式为function 函数名(){}。</p>
<p>​		2）函数命名遵循变量命名的规则，以字母或下划线开头，且不能以数字开头。</p>
<p>​		3）函数名不可以使用系统函数的名称，且不能使用已经声明过的函数名。</p>
<p>​		PHP中函数名、方法名、类名不区分大小写，但PHP的变量名是区分大小写的。</p>
<p>​	<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014112457505.png" alt="image-20211014112457505" style="zoom:50%;" /></p>
<p>​		函数名是abc小写，但是可以通过ABC大写去调用该函数。</p>
<p>6.3	请介绍说明观察者模式。</p>
<p>​		答案：观察者模式（也被称为发布/订阅模式）提供了避免组件之间紧密耦合的另一种方法，它将观察者和被观察的对象分离开。在该模式中，一个对象通过添加一个方法（该方法允许另一个对象，即观察者注册自己）使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。这些观察者使用该信息执行的操作与可观察的对象无关，结果是对象可以相互对话，而不必了解原因。</p>
<p>例如，用户界面可以作为一个观察者，业务数据是被观察者，用户界面观察业务数据的变化，发现数据变化后，就显示在界面上。面向对象设计的一个原则是，系统中的每个类将重点放在某一个功能上，而不是其他方面。一个对象只做一件事情，并且将它做好。观察者模式在模块之间划定了清晰的界限，提高了应用程序的可维护性和重用性。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
//观察者接口
interface InterfaceObserver{
	function onListen($sender,$args);
	function getObserverName();
}

//可被观察者接口
interface InterfaceObservable{
	function addObserver($observer);
	function removeObserver($observer_name);
}

//观察者抽象类
abstract class Observer implements InterfaceObserver{
	protected $observer_name;

	function getObserverName(){
		return $this->observer_name;
	}

	function onListen($sender,$args){

	}
}
//可被观察类
abstract class Observable implements InterfaceObservable{
	protected $observers = array();
	public function addObserver($observer){
		if($observer instanceof InterfaceObserver){
			$this->observers[] = $observer;
		}
	}

	public function removeObserver($observer_name){
		foreach($this->observers as $index->$observer){
			if($observer->getObserverName() == $observer_name){
				array_splice($this->observers,$index,1);
				return;
			}
		}
	}
}

//模拟一个可以被观察的类
class A extends Observable{
	public function addListener($listener){
		foreach($this->observers as $observer){
			$observer->onListen($this,$listener);
		}
	}
}
//模拟一个观察者类
class B extends Observer{
	protected $observer_name = 'B';
	public function onListen($sender,$args){
		var_dump($sender);
		echo "&lt;br>";
		var_dump($args);
		echo '&lt;br>';
	}
}
//模拟另一个观察者类
class C extends Observer{
	protected $observer_name = 'C';
	public function onListen($sender,$args){
		var_dump($sender);
		echo "&lt;br>";
		var_dump($args);
		echo '&lt;br>';
	}
}
$a = new A();
//注入观察者
$a->addObserver(new B());
$a->addObserver(new C());
//可以看到观察到的信息
$a->addListener('D');
//移除观察者
$a->removeObserver('B');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.4 Memcache的工作原理是什么?</p>
<p>答案：</p>
<p>​		Memcache的工作就是在专门的机器内存里维护一张巨大的hash表，存储经常被读写的一些文件与数据，从而极大地提高网站的运行效率。</p>
<p>​		Memcache的程序运行在一个或多个服务器中，Memcache把全部的数据保存在内存中，通过hash表的方式，每条数据由key/value的形式构成，随时接受客户端的请求，然后返回结果。</p>
<p>​		客户端与Memcache建立连接后，存储对象主要是通过唯一的key存储value到内存中，取数据时通过这个key从内存中获取对应的value。因为Memcache的数据是存储在内存中而不是保存在cache文件中，所以Memcache访问比较快。但是因为这些数据不是永久化存储，所以不建议存储重要数据在Memcache中，因为重启服务器后这些数据就会消失。</p>
<p>6.4.2	Memcache对item的过期时间有什么限制?</p>
<p>​	答案：Memcache的item过期时间最长可以为30天，Memcache把传入的过期时间解释成时间点后，当到了这个时间点，Memcache就把item设置为失效状态。当使用Memcache存储数据时，设置一个值为永久时间或一段时间，如果Memcache分配的内存使用完毕，则首先会替换掉已失效的数据，其次是最近少使用的数据。</p>
<p>6.5 	数字1～1000放在含有1001个元素的数组中，其中只有唯一的一个元素值重复，其他数字均只出现一次。设计一个算法，将重复元素找出来，要求每个数组元素只能访问一次。如果不使用辅助存储空间，能否设计一个算法实现?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

function findDup($arr){
	$count = count($arr);
	if(!$arr || $count&lt;=0){
		return -1;
	}

	for($i=0;$i&lt;$count;$i++){
		$newArr[$i] = 0;
	}

	for($i=0;$i&lt;$count;$i++){
		if($newArr[$arr[$i]] == 0){
			$newArr[$arr[$i]] = 1;
		}else{
			return $arr[$i];
		}
	}

	return -1;
}

$arr = [1,3,3,2,4,5];
printf("%d",findDup($arr));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.6 	设计一个算法，判断给定的一个数n是否是某个数的平方，不能使用开方运算。例如，16就满足条件，因为它是4的平方；而15则不满足条件，因为不存在一个数使得其平方值为15。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>方法1:
&lt;?php
class SquareRoot{ 
	/**
	 * 题目：判断一个自然数是否是某个数的平方。当然不能使用开方运算 
	 * 方法1.squareRoot0  二分查找 
     * 方法2.squareRoot1   
     * 考虑等差数列 1 3 5 7 9...发现 
     * 1^2=1 
     * 2^2=1+3 
     * 3^2=1+3+5 
     * ... 
     * 因此，N-1-3-5...若刚好可减至0，则N是某正整数的平方 
	 */

	public function isPower($n){
		if($n &lt;= 0){
			printf("%d不是自然数\n",n);
			return false;
		}
		$minus = 1;
		while($n > 0){
			$n = $n - $minus;
			if($n == 0){
				return true;
			}elseif($n &lt; 0){
				return false;
			}else{
				$minus += 2;
			}
		}

		return false;
	}
}

$obj = new SquareRoot();
var_dump($obj->isPower(25));

方法2:
function isSquare($num){
	if($num == 0 || $num == 1){
			return true;
	}
	
	for($i=2;$i&lt;$num/2;$i++){
			if($i * $i == $num){
					return true;
			}else{
					if($i*$i > $num){
							return false;
					}
			}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7把链表相邻元素翻转-例如-给定链表为1-2-3-4-5-6-7-则翻转后的链表变为2-1-4-3-6-5-7。" tabindex="-1"><a class="header-anchor" href="#_6-7把链表相邻元素翻转-例如-给定链表为1-2-3-4-5-6-7-则翻转后的链表变为2-1-4-3-6-5-7。" aria-hidden="true">#</a> 6.7	把链表相邻元素翻转，例如，给定链表为1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6-&gt;7，则翻转后的链表变为2-&gt;1-&gt;4-&gt;3-&gt;6-&gt;5-&gt;7。</h4>
<p>暂时未看</p>
<p>7.1	如何摧毁会话?</p>
<p>​		如果使用的session会话，那么可以通过unset($_SESSION['名称'])或者session_destroy()两种方法对session会话进行销毁。</p>
<p>​		如果会话使用的是Cookie，那么删除Cookie的方法为使被销毁的Cookie变量的日期变为过去时间点就可以让它过期销毁，例如setcookie('user','',time()-3600)，即让这个变量过期一小时即可实现删除。删除Cookie还可以通过setcookie('user','')或setcookie('user',NULL)来实现。</p>
<p>7.2 	PHP有哪几种常用的设计模式?请简单说明。</p>
<p>​		（1）工厂模式工厂模式专门负责实例化有大量公共接口的类。工厂模式可以动态地决定将哪一个类实例化，而不必事先知道每次要实例化哪一个类。客户类和工厂类是分开的。消费者无论什么时候需要某种产品，需要做的只是向工厂提出请求即可。消费者无须修改就可以接纳新产品。这种方法当然也存在缺点，就是当产品修改时，工厂类也要做相应地修改。</p>
<p>​		（2）单例模式这种模式涉及一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象。</p>
<p>​		（3）观察者模式观察者模式提供了避免组件之间耦合的另一种方法，该模式非常简单，一个对象通过添加方法（该方法允许另一个对象，即观察者自己）使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。</p>
<p>​		（4）命令链模式以松散耦合主题为基础，发送消息、命令和请求，或通过一组处理程序发送任意内容。每个处理程序都会自行判断自己能否处理请求，如果可以，那么该请求被处理，进程停止。</p>
<p>​		（5）策略模式在策略模式中，创建表示各种策略的对象和一个行为随着策略对象的改变而改变的context对象，并且一个类的行为或其算法可以在运行时更改。</p>
<p>7.3 	Redis的原理是什么?它有什么优势?</p>
<p>​	答案：Redis是一个访问速度非常快的高性能key-value存储的非关系型数据库，它的出现很大程度上弥补了Memcache的key/value存储的不足。首先，它支持5种value数据类型存储，包括String、list、set、zset和hash。其次，它主要把数据存储在内存中，所以保证了访问速度的快速，并且Redis可以周期性地把更新的数据写入磁盘或者追加到记录文件中，从而实现数据永久性存储和主从同步。</p>
<p>​	Redis具有以下几点优势：</p>
<p>1）它支持的数据结构多，例如String、list、set、zset、hash数据结构。</p>
<p>2）支持事务操作，具有原子性，即对数据的更改要么都执行，要么都不执行。</p>
<p>3）具备丰富的特性，用于消息、缓存，对key设置过期时间，过期后将自动删除等。</p>
<p>4）访问速度快，因为数据存在内存中，具有HashMap的优势，所以查找和操作的时间复杂度都是O（1)。</p>
<p>​</p>
<p>7.4	请举例说明在开发过程中可以用什么方法来加快页面的加载速度。</p>
<p>答案：</p>
<p>1）实现页面的静态化，减少页面的动态加载。</p>
<p>2）使用Redis、Memcache等缓存技术，减少不必要的数据库请求，将动态数据缓存在内存中，当需要时直接调取使用。</p>
<p>3）对于大的文件、图片等可以使用单独的服务器。</p>
<p>4）对代码通过优化工具进行优化，使文件加载效率提高。</p>
<p>5）对数据库进行优化，提高数据库的查询速度。</p>
<p>6）保证服务器的配置比较好，保证页面的加载速度。</p>
<p>7.5	一个有序数列，序列中的每一个值都能够被2或者3或者5所整除，1是这个序列的第一个元素。求第1500个值是多少。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function num($n){
	$count = 0;
	$num = 0;
	for($i=1;;$i++){
		if($i%2==0 || $i%3==0 || $i%5 == 0){
			$count++;
		}
		if($count == $n){
			$num = $i;
			break;
		}
	}

	return $num;
}
$res = num(1500);
var_dump($res); //2045
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.6	把一个含有 n 个元素的数组循环右移K（K是正数）位，要求时间复杂度为 O（N），且只允许使用两个附加变量。</p>
<p>​		通常人们的直觉可能是每次将数组中的元素右移一位，但这样的复杂度为O(K*N)，不符合题目的要求。
​		假如数组为abcd1234，循环右移4位的话，我们希望到达的状态是1234abcd。不妨设K是一个非负的整数，当K为负整数的时候，右移K位，相当于左移（-K）位。左移和右移在本质上是一样的。</p>
<p>​		大家开始可能会有这样的潜在假设，K&lt;N。事实上，很多时候也的确是这样的。但严格地说，我们不能用这样的“惯性思维”来思考问题。尤其在编程的时候，全面地考虑问题是很重要的，K可能是一个远大于N的整数，在这个时候，上面的解法是需要改进的。</p>
<p>​		仔细观察循环右移的特点，不难发现：每个元素右移N位后都会回到自己的位置上。因此，如果K &gt; N，右移K-N之后的数组序列跟右移K位的结果是一样的。进而可得出一条通用的规律：右移K位之后的情形，跟右移K’= K % N位之后的情形一样。</p>
<p>​		假设原数组序列为abcd1234，要求变换成的数组序列为1234abcd，即循环右移了4位。比较之后，不难看出，其中有两段的顺序是不变的：1234和abcd，可把这两段看成两个整体。右移K位的过程就是把数组的两部分交换一下。变换的过程通过以下步骤完成：</p>
<p>​		1.  逆序排列abcd：abcd1234 → dcba1234；</p>
<p>​		2.  逆序排列1234：dcba1234 → dcba4321；</p>
<p>​		3.  全部逆序：dcba4321 → 1234abcd。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function reverse(&amp;$arr,$start,$end){
	while($start &lt; $end){
		$tmp = $arr[$start];
		$arr[$start] = $arr[$end];
		$arr[$end] = $tmp;
		$start++;
		$end--;
	}
}

function rightShift(&amp;$arr,$len,$k){
	if(!$arr || $len&lt;1){
		return '参数不合法';
	}

	$k %= $len;
	reverse($arr,0,$len-$k-1);
	reverse($arr,$len-$k,$len-1);
	reverse($arr,0,$len-1);
}

$arr = [1,2,3,4,5,6,'zmj','aa','cc'];
rightShift($arr,count($arr),2);
var_dump($arr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		算法性能分析：此时的时间复杂度为O（n）。主要是完成翻转（逆序）操作，并且只用了一个辅助空间。</p>
<p>7.7	100个灯泡排成一排，第一轮将所有灯泡打开；第二轮每隔一个灯泡关掉一个，即排在偶数的灯泡被关掉，第三轮每隔两个灯泡，将开着的灯泡关掉，关掉的灯泡打开。依次类推，第100轮结束的时候，还有几盏灯泡亮着?</p>
<p>7.8	将一组数字、字母或符号进行排列，以得到不同的组合顺序，例如，1 2 3这三个数的排列组合有1 2 3、1 3 2、2 1 3、2 3 1、3 1 2、3 2 1。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 排列组合算法
 * 将一组数字、字母或符号进行排列，以得到不同的组合顺序，例如，1 2 3这三个数的排列组合有1 2 3、1 3 2、2 1 3、2 3 1、3 1 2、3 2 1。
 *
 */

//从$input数组中取$m个数的组合算法
function comb($input, $m)
{
    if($m==1)
    {
        foreach($input as $item)
        {
            $result[]=array($item);
        }
        return $result;
    }
    for($i=0;$i&lt;=count($input)-$m;$i++)
    {
        $nextinput=array_slice($input,$i+1);
        $nextresult=comb($nextinput,$m-1);
        foreach($nextresult as $one)
        {
            $result[]=array_merge(array($input[$i]),$one);
        }
    }
    return $result;
}

//从$input数组中取$m个数的排列算法
function perm($input,$m)
{
    if($m==1)
    {
        foreach($input as $item)
        {
            $result[]=array($item);
        }
        return $result;
    }
    for($i=0;$i&lt;count($input);$i++)
    {
        $nextinput=array_merge(array_slice($input,0,$i),array_slice($input,$i+1));
        $nextresult=perm($nextinput,$m-1);
        foreach($nextresult as $one)
        {
            $result[]=array_merge(array($input[$i]),$one);
        }
    }
    return $result;
}

$input=array(1,2,3,4,5);
print_r(comb($input,3)); //10
print_r(perm($input,3)); //60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总共所有的排列情况有5x4x3x2x1 = 60种，如果不考虑顺序的话，也就是123和132算一种的话，就只有10种</p>
<p>一、排列算法：</p>
<p>全排列是将一组数按一定顺序进行排列，如果这组数有n个，那么全排列数为n!个。现以{1, 2, 3}为例说明如何编写全排列的递归算法。 如下图所示：</p>
<p><img src="https://img-blog.csdn.net/20180606180302461" alt="img"></p>
<p>上图中，第一层S1表示第一个数分别与第1、2、3个数交换位置，如123是1和第一个数1交换，213是1和第二个数2交换，321是1和第三个数交换。第二层S2是第二个数分别与第2、3个数交换位置。则最后一层的所有叶子节点，即为全排列的所有结果。第k层中的节点Sk就是父节点中的第k个数，分别与第k、k+1...n个数交换位置。</p>
<p>8.1	什么是会话?为什么要使用它?</p>
<p>​		答案：会话是指通过HTTP协议在Web服务器与客户端（浏览器）之间的相互通信。</p>
<p>​		因为HTTP协议是Web服务器与客户端（浏览器）相互通信的协议，它是一种无状态协议，即HTTP请求是独立且不持久的。HTTP协议没有一个内建的机制来维护两个事务之间的状态，用户请求一个页面后再去请求另一个页面，HTTP无法告诉我们这两个请求是否来自同一个用户。所以需要使用HTTP会话控制，去跟踪一个变量，通过变量追踪使多个请求事务之间建立联系，从一个网页到另一个网页的请求访问可以知道是同一个用户。</p>
<p>8.2  做一套图片管理系统，关于用户图片的上传，如何尽量避免以下问题的发生：①图片被盗用；②图片重复上传。图片上传保存目录如何设置?</p>
<p>​		答案：1）可以创建.htaccess文件防盗链，并且给上传的图片加水印声明版权。2）当单击上传图片后，上传按钮禁止再次被单击，直到上传完成后才能再次上传。3）图片的目录根据月份再到日进行存放。</p>
<p>8.3	什么是HTTP请求?</p>
<p>​		答案：HTTP请求是指从客户端到服务器端的请求消息，建立HTTP请求需要经历以下7个步骤才能请求成功：</p>
<p>1）建立TCP连接。在HTTP开始工作前，Web浏览器需先通过网络和Web服务器连接，连接过程主要使用TCP/IP协议完成。</p>
<p>2）Web浏览器向Web服务器发送请求命令。一旦建立了TCP连接，Web浏览器就会向Web服务器发送请求命令。</p>
<p>3）Web浏览器发送请求头信息。Web浏览器发送其请求命令后，还要以头信息的形式向Web服务器发送一些信息，浏览器最后通过发送一空白行来通知服务器它结束了该头信息的发送。</p>
<p>4）Web服务器应答。客户端向服务端发出请求后，服务端会给客户端回送应答，例如，HTTP/1.1 200 OK，应答的编码含义为协议的版本号和应答状态码。</p>
<p>5）Web服务器发送应答头信息。服务器会随同应答向用户发送关于它自己的数据及被请求的文档。</p>
<p>6）Web服务器向浏览器发送数据。Web服务器向浏览器发送头信息后，它会发送一个空白行来表示头信息的发送到此结束，接着，它以Content-Type应答头信息所描述的格式发送用户所请求的实际数据。</p>
<p>7）Web服务器关闭TCP连接。一般情况下，一旦Web服务器向浏览器发送了请求数据，它就要关闭TCP连接，然后浏览器或者服务器在其头信息加入了这行代码：Connection：keep-alive，TCP连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。</p>
<p>8.4	数据库中的事务是什么?它有什么特性?</p>
<p>答案：事务是执行一系列的操作完成一项任务，如果存在某个操作没有成功，那么认为事务执行失败，此时发生回滚事件，撤销前面的全部操作，进而保证数据的一致性。为了保证数据的一致性，操作会被暂时放在缓存中，等所有操作执行成功后才提交数据库执行。事务作为一个逻辑单元执行的一系列操作，具有四大特性，即原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability），简称为ACID。</p>
<p>（1）原子性事务必须是原子工作单元；对于其数据修改，要么全都执行，要么全都不执行。</p>
<p>（2）一致性事务完成时，必须使所有的数据都保持一致状态。在相关数据库中，所有规则都必须应用于事务的修改，以保持所有数据的完整性。事务结束时，所有的内部数据结构（例如，B树索引或双向链表）都必须是正确的。</p>
<p>（3）隔离性 由并发事务所做的修改必须与任何其他并发事务所做的修改隔离。当事务查看数据时，数据所处的状态要么是另一并发事务修改它之前的状态，要么是另一事务修改它之后的状态，事务不会查看中间状态的数据，这称为可串行性。因为它能够重新装载起始数据，并且重播一系列事务，所以数据结束时的状态与原始事务执行的状态相同。</p>
<p>（4）持久性事务完成之后，它对于系统的影响是永久性的，即使出现系统故障该修改也将一直保持。</p>
<p>8.5	使用五种以上方式获取一个文件的扩展名。要求：dir/upload.image.jpg，找出jpg或.jpg。必须使用PHP自带的处理函数进行处理，方法不能重复，可以封装成函数，比如getext1($filename)，getext2($filename)。</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014173301944.png" alt="image-20211014173301944" style="zoom:50%;" />
<p>8.6	用PHP脚本解析出：http://srfi.schemers.org/srfi-28/mail-archive/maillist.html这个页面中出现的所有email，并保存到数组。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

function pregMail($url){
	$mail = file_get_contents($url);
	$pattern = "/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/";
	if(preg_match_all($pattern,$mails,$matches)){
		print_r($matches);
	}
}
pregMail('http://srfi.schemers.org/srfi-28/mail-archive/maillist.html');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.7	1）有一新记录（小王13254748547高中毕业 2017-05-06），请用SQL语句新增至user表中。</p>
<p>​			2）请用SQL语句把张三的时间更新为当前系统时间。</p>
<p>INSERT INTO user（'UserName','Tel','Content','Date') VALUES（'小王', '13254748547', '高中毕业','2017-05-06');</p>
<p>UPDATE user SET Date=DATE_FORMAT（NOW(),'%Y-%m-%d') WHEREUserName= '张三';</p>
<p>9.1	如何合理地使用Memcache缓存?如果缓存数据量过大，那么如何部署?（分布式，缓存时间，优化缓存数据）</p>
<p>答案：要合理地使用Memcache缓存，需要注意以下几点内容：</p>
<p>1）因为Memcache支持最大的存储对象大小为1MB，所以当合理使用Memcache缓存时，要求不能往Memcache存储一个大于1MB的数据。</p>
<p>2）Memcache存储的所有数据，如果数据大小分布于各种chunk大小区间，从64B到1MB都有，那么会造成内存的极大浪费和Memcache的异常。所以需要注意数据大小的分布区间。</p>
<p>3）key的长度不能大于250个字符。</p>
<p>4）虚拟主机不允许运行Memcache服务，所以不能把Memcache部署到虚拟主机中。</p>
<p>5）因为Memcache可以运行在不安全的环境中，所以如果对数据安全要求高，那么需要着重考虑运行环境的安全问题。</p>
<p>6）因为Memcache存储的数据都在内存中，服务器挂掉就会清空内存，所以缓存中的数据尽量是丢失了也不会有太大影响的数据。</p>
<p>如果缓存中的数据量过大，那么可以采取以下的办法：</p>
<p>1）使用Memcache服务器集群的方法。首先是将数据放在不同的Memcache服务器上，此时可以将不同硬件服务器上的Memcache服务器再做成一个数据互相备份的组，以避免数据的单点丢失问题。</p>
<p>2）缓存数据到数据库中。首先在数据库中建一张表来说明Memcache服务器集群中缓存数据的存放逻辑，然后实现把缓存数据存到数据库中，可以保证数据库和缓存的数据双向存取。</p>
<p>9.1.2	使用Memcache需要注意哪些问题?</p>
<p>答案：1）将程序、Memcache、mysql分开存放。在实际的开发过程中，因为Memcache使用过程中把数据缓存在内存中，因此会消耗很大的内存。所以建议把代码、mysql数据库和Memcache分开存放。</p>
<p>​			2）不要使用Memcache保存重要数据。因为Memcache是把数据存放在内存中，所以服务器突然断电或挂掉，重启后数据就会消失，没有办法找回。所以建议不要使用Memcache保存重要的数据。</p>
<p>​			3）定期查看缓存的分布状况和击中情况。只有定期查看缓存的分布状况和击中情况才能更好地分析缓存的工作效率和对缓存进行优化，发现缓存中可能存在的问题并及时解决。</p>
<p>9.2 	global关键词如何使用?预定义的全局变量数组$GLOBALS如何使用?</p>
<p>​		答案：global主要是在函数内对变量进行声明定义使用，使用方式为global$a。在函数内使用global定义的变量主要是获取函数外同名的变量的值。而预定义的全局变量$GLOBALS可以在函数内使用，使用方式为$GLOBALS['变量名']，可以获取对应变量名的全局变量的值，而$GLOBALS['变量名']主要是获取外部的全局变量本身，即对$GLOBALS变量修改，全局变量也会修改。</p>
<p>​		global关键字和$GLOBALS全局变量的使用方式代码为</p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211014175917899.png" alt="image-20211014175917899" style="zoom:50%;" />
<p>9.3	在浏览器中，一个页面从输入URL到加载完成，都有哪些步骤?</p>
<p>​		答案：为了便于理解，将这个过程简单地分为5步：</p>
<p>​		1）域名解析，根据域名找到服务器的IP地址。</p>
<p>​		2）建立TCP连接，浏览器与服务器经过3次握手后建立连接。</p>
<p>​		3）浏览器发起HTTP请求，获取想要的资源。</p>
<p>​		4）服务器响应HTTP请求，返回指定的资源。</p>
<p>​		5）浏览器渲染页面，解析接收到的HTML、CSS和JavaScript文件。</p>
<p>9.4	在MySQL中，简述InnoDB和MyISAM的优劣。</p>
<p>答案：MySQL中默认的引擎是MyISAM，如果数据库的基本操作主要是CRUD操作，那么使用MyISAM是最好的。MyISAM基于传统的ISAM类型，是IndexedSequential Access Method（有索引的顺序访问方法）的缩写，它是存储记录和文件的标准方法。MyISAM的优点是拥有检查和修复表格的大多数工具，它的表格可以被压缩并支持全文搜索，如果只是执行大量的SELECT，那么MyISAM是最好的选择，其效率比InnoDB高。它的缺点是不支持外键和事务回滚，不具有原子性。</p>
<p>InnoDB的引擎类型是事务安全的。它和BDB类型引擎具有相同的特性，并且支持外键和事务回滚。它的优点是具有比BDB还丰富的特性，对于要求事务安全的存储使用它是最好的。当执行大量的INSERT或UPDATE时，在性能上应该使用InnoDB表。它的缺点是因为AUTOCOMMIT默认设置是打开的，程序没有显式调用BEGIN开始事务，导致每插入一条数据都自动commit，严重影响了速度，所以可以在执行SQL前调用begin，使多条SQL形成一个事务。</p>
<p>9.5  已知两个链表head1 和head2 各自有序（例如升序排列），请把它们合并成一个链表，要求合并后的链表依然有序。</p>
<p>9.6	 请写一段PHP代码，确保多个进程同时写入同一个文件成功。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 请写一段PHP代码，确保多个进程同时写入同一个文件成功。
 * 
 **/
function lockFile($filename,$content){
	$lock = $filename.'lck';
	$write_length = 0;
	while(true){
		if(file_exists($lock)){
			usleep(100);
		}else{
			touch($lock);
			$write_length = file_put_contents($filename, $content,LOCK_EX);
			break;
		}
	}

	if(file_exists($lock)){
		unlink($lock);
	}

	return $write_length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：file_put_contents()函数语法为file_put_contents(file,data,mode,context)，其中file是写入数据的文件名，该参数是必需的，如果文件不存在，那么就会新创建一个文件；data是要写入的数据，该参数是必需的，写入内容可以是字符串、数组或数据流；mode是规定如何打开或写入文件；context是规定文件句柄的环境。关于mode的模式有①FILE_USE_INCLUDE_PATH，它可以检查<em>filename</em>副本的内置路径；②FILE_APPEND，将需要添加的内容移至文件末尾，否则会清空文件内容；③LOCK_EX，它的作用是锁定文件。当多个进程需要对文件进行写操作时，为了保证文件内容一致性，一个进程写这个文件时需要给文件上锁，使得其他进程不能对这个文件进行操作，从而防止出现文件冲突，只有当写文件的进程完成操作后才释放这个锁，这时其他线程才可以对文件进行写操作，所以使用LOCK_EX模式。</p>
<p>9.7	请用单例设计模式方法设计类，要求满足如下需求，用PHP5代码编写类实现在每次对数据库连接的访问中都只能获取唯一的一个数据库连接，具体连接数据库的详细代码忽略，写出主要逻辑代码。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class Database{
	static public $_instance;
	private function __construct(){
		//连接数据库
	}

	public static function getInstance(){
		//实例化
		if(!self::$_instance){
			self::$_instance = new self();
			return self::$_instance;
		}
	}

	private function __clone{

	}

	public function query(){
		//查询
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.1	请说明在php.ini中safe_mode开启之后对于PHP系统函数的影响。</p>
<p>​		答案：</p>
<p>​			PHP中的save_mode开启后，可以提供一个安全的共享环境，它主要对系统的操作、文件、权限设置等产生影响。但该模式在PHP5.4.0以后已经被废除。该模式会对以下的函数产生影响：</p>
<p>​			1）首先是与操作文件系统有关的函数，这些函数访问文件时会被限制，例如，ckdir()、move_uploaded_file()、chgrp()、parse_ini_file()、chown()、rmdir()、copy()、rename()、fopen()、require()、highlight_file()、show_source()、include()、symlink()、link()、touch()、mkdir()、unlink()等函数。</p>
<p>​			2）其次还有一些其他的函数也会有影响，例如，exec()、shell_exec()、pasathru()、system()、popen()等。</p>
<p>10.2	什么是数据库三级封锁协议?</p>
<p>​			答案：</p>
<p>​			众所周知，基本的封锁类型有两种：排它锁（X锁）和共享锁（S锁）。所谓X锁是事务T对数据A加上X锁时，只允许事务T读取和修改数据A。所谓S锁是事务T对数据A加上S锁时，其他事务只能再对数据A加S锁，而不能加X锁，直到T释放A上的S锁。若事务T对数据对象A加了S锁，则T就可以对A进行读取，但不能进行更新（S锁因此又称为读锁），在T释放A上的S锁以前，其他事务可以再对A加S锁，但不能加X锁，从而可以读取A，但不能更新A。</p>
<p>​			在运用X锁和S锁对数据对象加锁时，还需要约定一些规则，例如，何时申请X锁或S锁、持锁时间、何时释放等，称这些规则为封锁协议（Locking Protocol）。对封锁方式规定不同的规则，就形成了各种不同的封锁协议。一般使用三级封锁协议，也称为三级加锁协议。该协议是为了保证正确地调度事务的并发操作。三级加锁协议是事务在对数据库对象加锁、解锁时必须遵守的一种规则。下面分别介绍这三级封锁协议。</p>
<p>​			一级封锁协议：事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放。事务结束包括正常结束（COMMIT）和非正常结束（ROLLBACK）。一级封锁协议可以防止丢失修改，并保证事务T是可恢复的。使用一级封锁协议可以解决丢失修改问题。在一级封锁协议中，如果仅仅是读数据不对其进行修改，是不需要加锁的，它不能保证可重复读和不读“脏”数据。</p>
<p>​			二级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，读完后方可释放S锁。二级封锁协议除防止了丢失修改，还可以进一步防止读“脏”数据。但在二级封锁协议中，由于读完数据后即可释放S锁，所以它不能保证可重复读。</p>
<p>​			三级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，直到事务结束才释放。三级封锁协议除防止了丢失修改和不读“脏”数据外，还进一步防止了不可重复读。</p>
<p>10.3	面向对象几大原则是什么?</p>
<p>​			答案：面向对象存在五大基本原则，分别是单一职责原则、开放封闭原则、替换原则、依赖倒置原则和接口隔离原则。</p>
<p>​		（1）单一职责原则：所谓单一职责原则，即一个类最好只做一件事，以提高内聚性来减少引起变化的原因，单一原则是低耦合、高内聚在面向对象原则上的引申。</p>
<p>​		（2）开放封闭原则：软件的功能应该是可扩展的，尽可能减少修改，因为修改程序可能会对原来的程序造成影响。虽然建议尽可能不修改程序，但是允许通过添加功能来减少修改。</p>
<p>​		（3）替换原则：只有子类能够替换基类，在继承机制的约束规范中，子类替换基类时，可以保证运行期内识别子类，保证继承复用。</p>
<p>​		（4）依赖倒置原则：高层模块不依赖底层模块，二者都依赖于抽象，抽象不依赖于实体，而实体依赖于抽象。模块间的依赖是通过抽象方法发生的，实现类中不发生直接的依赖关系，而依赖关系是通过接口或抽象类产生的。即接口或抽象类不依赖于实现类，而实现类依赖于接口和抽象类。这种依赖倒置原则可以有效地减少类之间的耦合性，提高系统的稳定性，减少并发引起的风险，提高代码的可读性和可维护性。</p>
<p>​		（5）接口隔离原则：建议开发使用多个小的、专门的接口，避免使用一个大的总接口。即每一个功能有一个专门的功能接口，需要用到才调用，不需要全部功能汇总到一个接口，这样可以提高代码的灵活性，降低类之间的耦合性，提高稳定性。</p>
<p>10.4	SVN与Git的区别是什么?它们的工作流程是什么?使用Git有什么好处?怎样处理冲突?Git中基本的命令有哪些?</p>
<p>​		答案：SVN和Git的区别如下：</p>
<p>​		1）SVN属于集中化的版本控制系统，使用起来更像是档案仓库，支持并行读写，支持代码的版本化管理，可以对代码进行取出、导入、更新、分支、还原、改名和合并等。而SVN和Git一样都有一个版本库或服务器，被使用时是分布式模式，每个开发人员从中心版本库或服务器上下载代码到自己的机器，然后自己有专属的版本库，可以对这个版本库进行开发管理。</p>
<p>​		2）SVN是按文件进行存储，而Git是把内容按元数据方式存储。</p>
<p>​		3）SVN有一个全局的版本号，而Git没有。</p>
<p>​		4）Git的内容完整性比SVN完整。Git对内容存储主要使用的是SHA-1哈希算法，确保了代码内容的完整性，即使遇到硬盘或网络故障对代码的损害都可以降低。</p>
<p>​		5）在Git上的分支可以很快速地在工作目录下和分支间进行切换，然后发现未合并的分支可以进行合并。而SVN的分支相当于版本库中的另一个目录，合并需要手动输入命令完成。</p>
<p>​		使用Git的好处有代码库占的空间小，对程序源代码进行差异化的版本管理，存在多个分支代码开发等。</p>
<p>​		在提交代码到Git中遇到冲突时，可以根据开发者的反馈进行判断，如果是主开发者发现两个开发者之间的冲突，那么可以让他们自行解决冲突，让其中一个人先提交代码。如果是主开发者可以自己解决的问题，那么就自己解决冲突再上传。</p>
<p>​		Git中主要使用的基本命令有：</p>
<p>​		1）通过Git clone '版本库地址' 把项目复制到本地。</p>
<p>​		2）通过Git add . 可以将代码的修改全部修改提交到本地暂存区。</p>
<p>​		3）通过Git commit -m '注释' 使用commit命令提交添加到缓存区的文件到本地仓库。</p>
<p>​		4）通过Git push 将本地分支更新的部分推送到远程主机上。</p>
<p>10.5	写一个函数，尽可能高效地从一个标准 url 里取出文件的扩展名。例如，http://www.sina.com.cn/abc/de/fg.php?id=1 需要取出 php 或 .php。</p>
<p>​		<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211015104305819.png" alt="image-20211015104305819"  /></p>
<p>11.1	请简述数据库设计的范式及应用。</p>
<p>​			答案：</p>
<p>​				对于表结构的优化，一般划分到第三范式，因为这样可以避免应用过于复杂和SQL语句过于冗长造成系统执行效率低下的问题。</p>
<p>​				范式按规范可以划分为以下几种。</p>
<p>​				第一范式：若关系模式R的每一个属性是不可再分解的，则为第一范式。</p>
<p>​				第二范式：若R属于第一范式，且所有的非码属性都完全函数依赖于码属性，则为第二范式。</p>
<p>​				第三范式：若R属于第二范式，且所有的非码属性没有一个是传递函数依赖于候选码，则属于第三范式。</p>
<p>11.2	MySQL数据库基本的三个优化法则是什么?除了增加硬件和带宽。</p>
<p>​			答案：</p>
<p>​				1）系统服务优化，把MySQL的key_buffer、cache_buffer、query_cache等增加容量。</p>
<p>​				2）给所有经常查询的字段增加适当的索引。</p>
<p>​				3）优化SQL语句，减少Distinct、Group、Join等语句的操作。</p>
<p>11.3	写一个函数，算出两个文件的相对路径。例如，$a = /a/b/c/d/e.php;，$b= /a/b/12/34/c.php;，计算出$b相对于$a的相对路径应该是 ../../c/d。</p>
<p>11.4	请用PHP和MySQL实现数据库分页。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$num_rec_per_page = 10;
mysql_connect('localhost','root','123456');
mysql_select_db('carshop');
if(isset($_GET['page'])){
	$page = $_GET['page'];
}else{
	$page = 1;
}

$start_from = ($page-1)*$num_rec_per_page;
$sql = "select*from cs_article limit $start_from,$num_rec_per_page";
$result = mysql_query($sql);
?>

&lt;table>
	&lt;tr>
		&lt;td>
			学生名
		&lt;/td>
		&lt;td>
			性别
		&lt;/td>
	&lt;/tr>
	&lt;?php
		while($row = mysql_fetch_assoc($result)){
	?>

	&lt;tr>
		&lt;td>
			&lt;?php echo $row['id'];?>
		&lt;/td>
		&lt;td>
			&lt;?php echo $row['title'];?>
		&lt;/td>
	&lt;/tr>

	&lt;?php
		};
	?>
&lt;/table>
&lt;?php
	$sql = "select * from cs_article";
	$result = mysql_query($sql);
	$total_records = mysql_num_rows($result);//统计总条数
	$total_pages = ceil($total_records/$num_rec_per_page); //计算总页数
	echo "&lt;a href='pagination.php?page=1'>".'|&lt;'."&lt;/a>"; //第一页
	for($i=1;$i&lt;=$total_pages;$i++){
		echo "&lt;a href='pagination.php?page=".$i.">".$i."&lt;/a>";
	}
	echo "&lt;a href='pagination.php?page=$total_pages'>".'|&lt;'."&lt;/a>"; //最后一页
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.5	有5个人偷了一堆苹果，准备在第二天分赃。晚上，有一人溜出来，把所有菜果分成5份，但是多了一个，顺手把这个扔给树上的猴子，自己先拿1/5藏了。没想到其他四人也都是这么想的，都如第一个人一样分成5份把多的那一个扔给了猴子，偷走了1/5。第二天，大家分赃，也是分成5份多一个扔给猴子。最后一人分了一份。问：共有多少 苹果?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
/**
 * 有5个人偷了一堆苹果，准备在第二天分赃。晚上，有一人溜出来，把所有菜果分成5份，但是多了一个，顺手把这个扔给树上的猴子，自己先拿1/5藏了。没想到其他四人也都是这么想的，都如第一个人一样分成5份把多的那一个扔给了猴子，偷走了1/5。第二天，大家分赃，也是分成5份多一个扔给猴子。最后一人分了一份。问：共有多少 苹果?
 */

// 解析
// 假设总苹果数量为 totalApple

// 上一个人对苹果划分时剩余的苹果为 remainingApple,藏起来的苹果数量为 totalApple/5，多的一个扔给了猴子

// 推导出公式为 remainingApple = taotalApple - totalApple/5 - 1

// 第一个人分的苹果总数totalApple是最初苹果总数

// 第二个人分的苹果总数是在第一个分完之后所有剩下的苹果总数，如此下去，直到第5个分完

// 举个栗子：有N个苹果，第一个分完之后的数量 

for ($s = 5; ; $s++) {
   // 第一个分苹果
   if ($s % 5 == 1) {
       $one = round($s - $s / 5) - 1;
       // 第二个分苹果
       if ($one % 5 == 1) {
           $two = round($one - $one / 5) - 1;
           // 第三个分苹果
           if ($two % 5 == 1) {
               $three = round($two - $two / 5) - 1;
               // 第四个人分苹果
               if ($three % 5 == 1) {
                   $four = round($three - $three / 5) - 1;
                   // 第五个人分苹果
                   if ($four % 5 == 1) {
                       $five = round($four - $four / 5) - 1;
                       if ($five % 5 == 1) {
                           // 总苹果数量
                           echo $s; //15621
                           exit;
                       }
                   }
               }
           }
       }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12.1	如果某段与数据库交互的程序运行较慢，那么你将如何处理?</p>
<p>答案：1）首先提高数据库的查询速度，比如增加索引、优化表的结构。</p>
<p>​			2）优化程序代码，如果查询比较多，那么可以尽量用条件查询，减少查询语句，比如能用一条查询语句就不用两条。</p>
<p>​			3）提高服务器的配置，优化服务器，把不必要的进程关掉。</p>
<p>12.2	请写出内核线程和用户线程的区别。</p>
<p>​		答案：根据操作系统内核是否对线程可感知，可以把线程分为内核线程和用户线程。</p>
<p>​			内核线程的建立和销毁都是由操作系统负责、通过系统调用完成的，操作系统在调度时，参考各进程内的线程运行情况做出调度决定。如果一个进程中没有就绪态的线程，那么这个进程也不会被调度占用CPU。和内核线程相对应的是用户线程，用户线程指不需要内核支持而在用户程序中实现的线程，其不依赖于操作系统核心，用户进程利用线程库提供创建、同步、调度和管理线程的函数来控制用户线程。用户线程多见于一些历史悠久的操作系统，如UNIX操作系统，不需要用户态/核心态切换，速度快，操作系统内核不知道多线程的存在，因此一个线程阻塞将使得整个进程（包括它的所有线程）阻塞。由于这里的处理器时间片分配是以进程为基本单位的，所以每个线程执行的时间相对减少。为了在操作系统中加入线程支持，采用了在用户空间增加运行库来实现线程，这些运行库被称为“线程包”，用户线程是不能被操作系统所感知的。</p>
<p>​			引入用户线程有以下4个方面的优势：</p>
<p>​			1）可以在不支持线程的操作系统中实现。</p>
<p>​			2）创建和销毁线程、线程切换等线程管理的代价比内核线程少得多。</p>
<p>​			3）允许每个进程定制自己的调度算法，线程管理比较灵活。</p>
<p>​			4）线程能够利用的表空间和堆栈空间比内核级线程多。</p>
<p>​			用户线程的缺点主要有以下两点：</p>
<p>​			1）同一进程中只能同时有一个线程在运行，如果有一个线程使用了系统调用而阻塞，那么整个进程都会被挂起。</p>
<p>​			2）页面失效也会导致整个进程都会被挂起。</p>
<p>​			内核线程的优缺点刚好与用户线程相反。实际上，操作系统可以使用混合的方式来实现线程。</p>
<p>12.3	什么是MAC地址?</p>
<p>​			答案：MAC地址，也称为物理地址，用来定义网络设备的位置，它总共有48位，以十六进制表示，由两大块组成：IEEE（电气和电子工程师学会）分配给厂商的识别码和厂商内部定义的唯一识别码（如00-36-76-47-D6-7A）。</p>
<p>​			MAC地址会被烧入进网卡中，每块网卡的MAC地址在全世界都是唯一的。MAC地址应用在OSI参考模型中的数据链路层，通过MAC地址能够转发数据帧。</p>
<p>​</p>
<p>12.4	公鸡5文钱1只，母鸡3文钱1只，小鸡1文钱买3只，现在用100文钱共买了100只鸡，问：在这100只鸡中，公鸡、母鸡和小鸡各是多少只?（设每种至少一只）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
/**
 * 公鸡5文钱1只，母鸡3文钱1只，小鸡1文钱买3只，现在用100文钱共买了100只鸡，问：在这100只鸡中，公鸡、母鸡和小鸡各是多少只?（设每种至少一只）
 */

for($i=1;$i&lt;=98;$i++){
	for($j=1;$j&lt;=98;$j++){
		for($k=1;$k&lt;=98;$k++){
			$sum = $i*5+$j*3+$k*1/3;
			if($i+$j+$k == 100 &amp;&amp; $sum == 100){
				echo $i.'---'.$j.'----'.$k;
			}
		}	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/D:/BaiduNetdiskDownload/计算机书籍笔记/img/image-20211015135215825.png" alt="image-20211015135215825"></p>
<p>12.5	给定两个单链表，链表的每个结点代表一位数，计算两个数的和。例如，输入链表（3-&gt;1-&gt;5）和链表（5-&gt;9-&gt;2），输出8-&gt;0-&gt;8，即513+295=808，注意个位数在链表头。</p>
<p>13.1	假设有5台服务器，请大致描述一下，如何搭建一个日pv300万左右的中型网站?</p>
<p>​		答案：3台Web服务器，2台MySQL数据库服务器，采样master/slave同步的方式减轻数据库负载，Web服务器可以结合缓存来减少负载，同时3台Web服务器内容一致，可以采用DNS轮询的方式来进行负载均衡。</p>
<p>13.2	写代码创建二维数组存储10位同学的学号和本课程的成绩，10组数据：（“20170101”，95）（“20170102”，88）（“20170103”，47）（“20170104”，92）（“20170105”，90）（“20170106”，75）（“20170107”，85）（“20170108”，65）（“20170109”，98）（“20170110”，55）。1）求出成绩最高者显示在网页上。2）求出不及格的学生信息显示在网页上。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$score = array(95,88,47,92,90,75,85,65,98,55);
for($i=1;$i&lt;=10;$i++){
	$arr['2017010'.$i][] = $score[$i-1];
}

var_dump(array_search(max($arr),$arr));
(2)遍历即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13.3	给定一个由n-1个整数组成的未排序的数组序列，其元素都是1～n中的不同的整数。请写出一个寻找数组序列中缺失整数的线性时间算法。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function getnum($arr,$len){
	if(!$arr || $len &lt;= 0){
		return -1;
	}
	$suma = 0;
	$sumb = 0;
	for($i=0;$i&lt;$len;$i++){
		$suma += $arr[$i];
		$sumb += $i;
	}	
	$sumb += $len+$len+1;
	return $sumb-$suma;
}
$arr = [1,4,3,2,7,5];
printf("%d",getnum($arr,count($arr)));  //6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14.1	类的属性可以序列化后保存到Session中，从而以后可以恢复整个类，这要用到的函数是什么?</p>
<p>​		答案：serialize()/unserialize()。serialize()函数可以将对象或数组序列化为可持久化或可传输的格式，而unserialize()函数是和序列化相对的反序列化函数，它可以将流转换为对象或数组，重新创建该对象。所以如果要保存一个类的属性在Session中，那么可以使用serialize()将该类的属性序列化，然后存储在Session中，在需要使用该类的属性的地方再通过unserialize()转换为对象属性进行使用。</p>
<p>14.2	SQL注入产生的原因是什么?如何防止?</p>
<p>答案：SQL注入产生的原因：由于程序开发过程中不注意规范书写SQL语句和对特殊字符进行过滤，导致客户端可以通过全局变量POST和GET提交一些特殊字符，让SQL语句正常执行。防止SQL注入的常用方法有如下几种：</p>
<p>​		1）开启配置文件中的magic_quotes_gpc和magic_quotes_runtime设置，对一些字符过滤。</p>
<p>​		2）执行SQL语句时使用addslashes()函数，对特殊字符转义后再执行SQL语句。</p>
<p>​		3）SQL语句书写尽量不要省略单引号（''）。</p>
<p>​		4）过滤掉SQL语句中的一些关键字，例如，update、insert、delete、select、*等。</p>
<p>​		5）提高数据库表和字段的命名技巧，对一些重要的字段根据程序的特点命名，取不易被猜到的名字。</p>
<p>​		6）PHP配置文件中设置register_globals为off，关闭全局变量注册。</p>
<p>​		7）控制错误信息，不要在浏览器上输出错误信息，将错误信息写到日志文件中。</p>
<p>​		8）使用mysqli或PDO预处理。</p>
<p>14.3	说说你对缓存技术的了解。</p>
<p>答案：对缓存技术的了解有以下几点：</p>
<p>​	1）缓存技术可以将不常变的数据存储起来避免数据的重复创建、处理和传输，可有效提高性能。</p>
<p>​	2）对于同一数据、逻辑功能和用户界面的多次请求，每次都进行请求处理会消耗很大的资源，从而造成系统的不稳定。而缓存技术可以降低数据库的访问次数，减轻数据库的负担和提高数据库的服务能力。</p>
<p>​	3）缓存技术可以保证部分数据的正常访问，如果数据库存在意外停止，那么当用户访问时，如果有缓存，则会优先使用缓存而不需要访问数据库，这种方法不仅不会影响用户的使用，而且还提高了系统的可用性。系统使用缓存技术主要优势在于可以减少交互的通信量，有效减少进程的执行和数据的传输量；降低系统中的处理量，减少处理次数；降低磁盘的访问次数等。</p>
<p>14.4	有一头母牛，到4岁时可生育，每年可生育一头小牛，假设所生均是一样的母牛，到15岁绝育，不再能生，20岁死亡，问n年后有多少头牛？</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function bullnum($n){
	static $num = 1;
	for($i=1;$i&lt;=$n;$i++){
		if($i>=4 &amp;&amp; $i&lt;15){
			$num++;
			bullnum($n-$i);
		}

		if($j == 20){
			$num--;
		}
	}

	return $num;
}
echo bullnum(8);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14.5	给一行文字$String，如何编写一个正规表达式，把$String内的div标签除去?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$string = "&lt;div>this is word&lt;/div>";
$pattern = '/&lt;(.*?)>(.*?)&lt;\/(.*?)>/';
echo preg_replace($pattern,'\\2',$string); //this is word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15">
<li>1 写出一个能创建多级目录的函数。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function create_dir($path,$mode=077){
	if(is_dir($path)){
		echo "folder exist";
	}else{
		if(mkdir($path,$mode,true)){
			echo "create success";
		}else{
			echo "create failed";
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16.1	什么是虚拟内存?</p>
<p>​	答案：虚拟内存简称虚存，是计算机系统内存管理的一种技术。它是相对于物理内存而言的，可以理解为“假的”内存。它使得应用程序认为它拥有连续可用的内存（一个连续完整的地址空间），允许程序员编写并运行比实际系统拥有的内存大得多的程序，这使得许多大型软件项目能够在具有有限内存资源的系统上实现。而实际上，它通常被分割成多个物理内存碎片，还有部分暂时存储在外部磁盘存储器上，在需要时进行数据交换。相比实存，虚存有以下好处：</p>
<p>​		1）扩大了地址空间。无论段式虚存，还是页式虚存，或是段页式虚存，寻址空间都比实存大。</p>
<p>​		2）内存保护。每个进程运行在各自的虚拟内存地址空间，互相不能干扰对方。另外，虚存还对特定的内存地址提供写保护，可以防止代码或数据被恶意篡改。</p>
<p>​		3）公平分配内存。采用了虚存之后，每个进程都相当于有同样大小的虚存空间。</p>
<p>​		4）当进程需要通信时，可采用虚存共享的方式实现。</p>
<p>​		不过，使用虚存也是有代价的，主要表现在以下几个方面：</p>
<p>​		1）虚存的管理需要建立很多数据结构，这些数据结构要占用额外的内存。</p>
<p>​		2）虚拟地址到物理地址的转换，增加了指令的执行时间。</p>
<p>​		3）页面的换入换出需要磁盘I/O，这是很耗时间的。</p>
<p>​		4）如果一页中只有一部分数据，会浪费内存。</p>
<p>16.2	虚拟地址、逻辑地址、线性地址、物理地址有什么区别?</p>
<p>​		答案：虚拟地址是指由程序产生的由段选择符和段内偏移地址组成的地址。这两部分组成的地址并没有直接访问物理内存，而是要通过分段地址的变换处理后才会对应到相应的物理内存地址。</p>
<p>​		逻辑地址指由程序产生的段内偏移地址。有时直接把逻辑地址当成虚拟地址，两者并没有明确的界限。</p>
<p>​		线性地址是指虚拟地址到物理地址变换之间的中间层，是处理器可寻址的内存空间（称为线性地址空间）中的地址。程序代码会产生逻辑地址，或者说是段中的偏移地址，加上相应段基址就生成了一个线性地址。如果启用了分页机制，那么线性地址可以再经过变换产生物理地址。若是没有采用分页机制，那么线性地址就是物理地址。物理地址是指现在CPU外部地址总线上的寻址物理内存的地址信号，是地址变换的最终结果。</p>
<p>​		虚拟地址到物理地址的转化方法是与体系结构相关的，一般有分段与分页两种方式。以x86 CPU为例，分段、分页都是支持的。内存管理单元负责从虚拟地址到物理地址的转化。逻辑地址是段标识+段内偏移量的形式，MMU通过查询段表，可以把逻辑地址转化为线性地址。如果CPU没有开启分页功能，那么线性地址就是物理地址；如果CPU开启了分页功能，MMU还需要查询页表来将线性地址转化为物理地址，即逻辑地址（段表）→线性地址（页表）→物理地址。</p>
<p>​		映射是一种多对一的关系，即不同的逻辑地址可以映射到同一个线性地址上；不同的线性地址也可以映射到同一个物理地址上。而且，同一个线性地址在发生换页以后，也可能被重新装载到另外一个物理地址上，所以这种多对一的映射关系也会随时间发生变化。</p>
<p>16.3	smarty的工作原理是什么?如何对smarty进行二次开发?</p>
<p>​		答案：</p>
<p>​			1）PHP程序运行时，初始化smarty模版引擎（创建对象，设置属性）。</p>
<p>​			2）加载smarty模板文件（.html或.tpl文件），并对其编译，生成编译文件放置在编译目录下。</p>
<p>​			3）执行编译文件，并做模板替换，生成静态文件。若开启静态缓存，则会将静态缓存文件缓存到cache目录下。</p>
<p>​			4）最后输出结果到浏览器。</p>
<p>​		做smarty的二次开发：可以通过自定义变量调解器、函数等插件方式来实现辅助开发，还有重写smarty的一些方法可以扩展开发。</p>
<p>​</p>
<p>16.4	请写出一个正则表达式用于提取一个网页中的所有链接。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>PHP正则表达式提取html超链接中的href地址
用php的正则表达式相关函数，实现提取html超链接&lt;a href="地址">&lt;/a>中的地址
&lt;?php

$preg='/&lt;a .*?href="(.*?)".*?>/is';

$str ='&lt;a href="链接1">URLNAME&lt;/a>文本段1&lt;a href="链接2" target="_blank">URLNAME&lt;/a>文本段2&lt;a  target="_blank" href="链接3">URLNAME&lt;/a>...文本段n';
preg_match_all($preg,$str,$match);//在$str中搜索匹配所有符合$preg加入$match中
for($i=0;$i&lt;count($match[1]);$i++)//逐个输出超链接地址
{
  echo $match[1][$i]."&lt;br />";
}

?>
最终输出：
链接1&lt;br />链接2&lt;br />链接3&lt;br />


PHP的正则表达式提取图片地址的代码。

$str='&lt;p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 200%;">&lt;img border="0" src="upfiles/2009/07/1246430143_4.jpg" alt=""/>&lt;/p>&lt;p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 200%;">&lt;img border="0" src="upfiles/2009/07/1246430143_3.jpg" alt=""/>&lt;/p>&lt;p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 200%;">&lt;img border="0" src="upfiles/2009/07/1246430143_1.jpg" alt=""/>&lt;/p>'; 

$pattern="/&lt;[img|IMG].*?src=['|"](.*?(?:[.gif|.jpg]))['|"].*?[/]?>/"; 

preg_match_all($pattern,$str,$match); 

print_r($match);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16.5	如何通过PHP程序防止外部页面提交表单?编写一段代码。</p>
<p>​		这题就是防止表单重复提交或者防止csrf</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
	session_start();
	if(isset($_POST['user']) &amp;&amp; !empty($_POST['user'])){
		if($_POST['check'] == $_SESSION['check']){
			echo "内部访问";
		}else{
			echo "外部访问";
		}
	}

	$token = md5(uniqid(rand(),true));
	$_SESSION['check'] = $token;

?>
&lt;form method="post" action="">
	&lt;input type="text" name="user">
	&lt;input type="text" name="check" value="&lt;?=$token;?>">
	&lt;input type="submit">
&lt;/form>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>17.1	sort()函数、asort()函数和ksort()函数有什么区别?它们分别在什么情况下使用?</p>
<p>​			答案：sort()函数对索引数组的键值进行升序排序并且不保留键名，键值为字母时按26字母的顺序进行排序。asort()函数对关联数组的键值进行升序排序并且保留键名，键值为数字时按升序进行排序。ksort()函数对关联数组按照键名进行升序排序并且保留键名，对一个数组排序使用ksort()函数时，关联数组的键名主要按照26个字母的顺序进行升序排序。它们的使用情况为，如果对索引数组进行升序排序，不考虑保留原数组顺序键名时，那么可以使用sort()函数进行排序。如果是对关联数组进行升序排序，需要按键值进行升序排序，那么可以使用asort()函数，如果需要按键名进行升序排序，那么可以使用ksort()函数。</p>
<p>17.2	如何设计或配置MySQL，才能达到高效使用的目的?</p>
<p>​			答案：</p>
<p>​		1）数据库设计方面，设计结构良好的数据库，允许部分数据冗余。</p>
<p>​		2）选取最适用的字段属性，尽可能把字段设置为NOT NULL，这样在查询的时候，数据库不用去比较NULL值。</p>
<p>​		3）系统架构设计方面，进行表散列，把海量数据散列到几个不同的表里面，进行集群，数据库查询和写入分开。</p>
<p>​		4）编写高效SQL语句，以提高效率。</p>
<p>​		5）使用连接（JOIN）来代替子查询。</p>
<p>​		6）使用联合（UNION）来代替手动创建的临时表。</p>
<p>​		7）必要的时候用不同的存储引擎，比如InnoDB可以减少死锁，HEAP可以提高一个数量级的查询速度。</p>
<p>​		8）合理使用事务、外键和索引。</p>
<p>17.3	如果页面字符出现乱码，那么该怎么解决?</p>
<p>​		答案：1）首先查看当前文件是否设置了字符集。如果是HTML页面，那么查看meta标签中是否存在charset设置文件字符集，如果是PHP页面，那么可以查看是否在header()函数中指定了charset设置文件字符集。</p>
<p>​			例如，header(&quot;content-type:text/html;charset=utf-8&quot;);，可以通过该函数设置网站编码。</p>
<p>​			2）如果通过方法1）发现已经设置了字符集，那么接下来需要判断当前文件保存的编码格式是否与页面设置的字符集保持一致，如果不一致，那么需要修改保证两者字符集统一。</p>
<p>​			3）如果是从数据库取数据出现的乱码，那么需要查看数据库查询时设置的字符集与当前页面设置的字符集是否一致，并保证两者字符集统一。对数据库取值设置编码的方法为mysql_query（&quot;set names utf8&quot;)。</p>
<p>​</p>
<p>17.4	请写出将两个数组连接成一个新数组的两种方法。</p>
<p>​	答案：把两个数组合并有以下几种方法。</p>
<p>​		1）使用array_merge()函数。array_merge()函数可以把一个或多个数组合并为一个数组，语法为</p>
<p>​				array_merge($array1, $array2,....)。实现代码如下：</p>
<p>​			<img src="@source/docs/theme-reco/img/common/image-20211018095759533.png" alt="image-20211018095759533"  /></p>
<p>​</p>
<p>​		2）使用array_merge_recursive()函数合并。</p>
<p>​			array_merge_recursive()函数可以把一个或多个数组合并为一个数组，使用方法以及作用和array_merge()函数一样。但是在使用array_merge()合并的数组时，如果存在相同的字符串键名，那么后一个数组会覆盖前一个数组的键值。而使用array_merge_recursive()时，如果存在相同的字符串键名，那么在相同键名下会合并成一个新的数组。</p>
<p>​		<img src="@source/docs/theme-reco/img/common/image-20211018095919755.png" alt="image-20211018095919755"></p>
<p><img src="@source/docs/theme-reco/img/common/image-20211018095935032.png" alt="image-20211018095935032"></p>
<p>​</p>
<p>​	3）创建一个新的数组，把数组一和数组二压入新数组中。</p>
<p>​			可以通过创建一个新的数组，对合并的数组进行遍历依次压入新数组中，从而合并数组。</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211018100013303.png" alt="image-20211018100013303"></p>
<p>​</p>
<p>17.5	请编写函数计算出两个日期之间的天数。</p>
<p>​		可以首先把两个日期转换为时间戳，求出两个时间戳的差值，接着用这个差值除以一天的秒数得到天数的差值，最后通过foor()函数对计算结果向下取整得到天数。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211018100149103.png" alt="image-20211018100149103"></p>
<p>18.1	正则表达式是什么?PHP中有哪些常用的与正则相关的函数?请写出一个email的正则表达式、中国手机号码和座机号码的正则表达式?</p>
<p>​		答案：正则表达式是一种字符串匹配的模式，可以判断一个字符串的组成是否满足某种特定的模式，将匹配的子串替换或者从某个串中取出符合某个条件的子串等。</p>
<p>​		常用的正则函数有：</p>
<p>​			1）preg_match()函数用于通过正则表达式匹配字符串。</p>
<p>​			2）preg_quote()函数可以转义正则表达式字符。</p>
<p>​			3）preg_replace()函数用于执行正则表达式的搜索和替换。</p>
<p>​			4）preg_replace_callback()函数可以执行一个正则表达式搜索和使用回调替换。</p>
<p>​			5）preg_split()函数可以通过一个正则表达式分隔字符串。</p>
<p>​		email拥有固定的格式，可以根据这个格式匹配正确的email，它的正则表达式为/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/。</p>
<p>​		中国手机号码的正则表达式如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/^1[3-5,8,6,7,9]{1}[0-9]{9}$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		座机号码的验证的正则表达式如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/^([0-9]{3,4}-)?[0-9]{7,8}$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>18.2	PHP的魔术方法包含哪些（越多越好）?在什么情况下被自动调用?</p>
<p>​		答案：PHP可用的魔术方法会在特定情况下被自动调用，但是前提是特定的条件被触发，并且这些魔术方法可以在类中作为方法。</p>
<p>​		PHP的魔术方法有：</p>
<p>​		<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211018110753574.png" alt="image-20211018110753574" style="zoom: 67%;" /></p>
<img src="D:\BaiduNetdiskDownload\计算机书籍笔记\img\image-20211018110811415.png" alt="image-20211018110811415" style="zoom:67%;" />
<p>18.3	请简述HTTP中POST、GET、PUT、DELETE方式的区别。</p>
<p>​			答案：HTTP定义了与服务器交互的不同的方法，最基本的方法是POST、GET、PUT和DELETE，URL全称是资源描述符，可以认为一个URL地址用于描述一个网络上的资源，而对应的HTTP中的四种方法GET、POST、PUT、DELETE对应这个资源的查、改、增和删四个操作。它们的具体功能如下：</p>
<p>​			1）根据HTTP规范，GET用于信息获取，信息应该是安全的。</p>
<p>​			2）根据HTTP规范，POST表示可以修改服务器上的资源的请求。</p>
<p>​			3）PUT和POST极为相似，都是向服务器发送数据，但它们之间有一个重要区别，PUT通常指定了资源的存放位置，而POST则没有，POST的数据存放位置由服务器决定。</p>
<p>​			4）DELETE的功能是删除某一个资源。</p>
<p>18.4	文件上传需要注意哪些细节?怎么把文件保存到指定目录?怎么避免上传文件重名问题?</p>
<p>​			答案：文件上传需要注意以下几点：</p>
<p>​			1）确保php.ini中已经开启了文件上传功能。</p>
<p>​			2）如果对文件上传的大小有限制，那么需在php.ini中修改允许上传的最大值，默认是2MB。</p>
<p>​			3）在上传图片的表单中，form标签需要加上enctype=&quot;multipart/form-data&quot;。</p>
<p>​			4）表单上传图片时，method必须使用post。</p>
<p>​			5）表单使用file类型，并且有name属性值，后台才能获取。</p>
<p>​			6）必须保证上传文件的大小不会超出限制，文件类型符合上传要求，上传文件的存储路径不存在问题。</p>
<p>​			7）需要使用$_FILES接收上传文件信息。其中$_FILES是一个二维数组，一维是上传空间的name，二维对应了文件名、文件类型、上传到临时目录下的临时文件名、文件大小、是否有错误等信息。如果是批量上传，那么二维数组下标是数组而不是字符串。</p>
<p>​			文件上传后是放置在服务器端的临时路径下的，需要使用move_uploaded_file()函数将上传后的文件保存到指定目录。</p>
<p>​			为了避免上传图片重名，可以使用时间戳加随机数的方式给文件重新命名。</p>
<p>18.4.2	详细描述PHP处理Web上传文件的流程。如何限制上传文件的大小不能超过某个数值?</p>
<p>​		答案：首先用户在浏览器端选择上传的文件，提交后，通过post方式上传到Apache服务器由PHP引擎处理，判断文件是否能够上传到PHP配置文件中指定的临时目录，之后获取文件后缀名判断文件是否是允许上传的文件格式，没有问题后再通过$_FILES[&quot;file&quot;][&quot;size&quot;]得到上传文件的数值大小，判断其是否小于设置的值，如果没问题，则按照随机数+时间的方式生成文件的名字+后缀。最后将文件从临时目录转移至Apache服务器目录。</p>
<p>​		也可以在PHP配置文件通过file_upload_max设置其值限制上传文件大小。</p>
<p>18.5	打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如，153是一个“水仙花数”，因为153=1的三次方+5的三次方+3的三次方。</p>
<p>​			答案：利用for循环控制100～999个数，每个数分解出个位、十位和百位。利用循环，分别用$i代表百位，$j代表十位，$m代表个位，且百位的初始数值是1～9，而十位和个位初始数值是0～9，然后按百位、十位、个位的顺序嵌套循环，判断找出符合“水仙花数”的公式的数。PHP代码实现如下：</p>
<p>​			<img src="@source/docs/theme-reco/img/common/image-20211018113621671.png" alt="image-20211018113621671"></p>
<p>​		array(4) { [0]=&gt; int(153) [1]=&gt; int(370) [2]=&gt; int(371) [3]=&gt; int(407) }</p>
<p>18.6	给定一个数d和n，如何计算d的n次方?例如，d=2，n=3，d的n次方为23=8。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function power($d,$n){
	if($n == 0)	return 1;
	if($n == 1) return $d;
	$result = 1.0;
	if($n>0){
		for($i=1;$i&lt;=$n;$i++){
			$result *= $d;
		}
		return $result;
	}else{
		for($i=1;$i&lt;=abs($n);$i++){
			$result = $result/$d;
		}
		return $result;
	}
}

printf("%0.2f&lt;br>",power(2,3)); //8.00
printf("%0.2f&lt;br>",power(-2,3)); //-8.00
printf("%0.3f",power(2,-3)); //0.125
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		算法性能分析：这个算法时间复杂度为O(n)，需要注意的是，当n非常大的时候，这种算法的效率是非常低下的。</p>
<p>18.7	有一个函数fun能返回0和1两个值，返回0和1的概率都是1/2，问怎么利用这个函数得到另一个函数fun2，使fun2也只能返回0和1，且返回0的概率为1/4，返回1的概率为3/4。</p>
<p>​			答案：func1得到1与0的概率都为1/2。因此，可以调用两次func1，分别生成两个值a1与a2，用这两个数组成一个二进制a2a1，它的取值的可能性为00，01，10，11，并且得到每个值的概率都为（1/2）*（1/2）=1/4，因此，如果得到的结果为00，则返回0（概率为1/4），其他情况返回1（概率为3/4）。实现代码如下：</p>
<p>​			<img src="@source/docs/theme-reco/img/common/image-20211018120053714.png" alt="image-20211018120053714"></p>
<p>​		程序的运行结果为:</p>
<p>​			<img src="@source/docs/theme-reco/img/common/image-20211018120217294.png" alt="image-20211018120217294"></p>
<p>​		由于结果是随机的，调用的次数越大，返回的结果越接近1/4与3/4。</p>
<p>19.1	mysql_fetch_row()和mysql_fetch_array()有什么区别?</p>
<p>​		答案：mysql_fetch_row()把数据库的一列存储在一个以零为基数的阵列中，第一栏在阵列的索引0，第二栏在索引1，如此类推。mysql_fetch_assoc()把数据库的一列存储在一个关联阵列中，阵列的索引就是栏位名称，例如，数据库查询送回“first_name”“last_name”“email”三个栏位，阵列的索引便是“first_name”“last_name”和“email”。mysql_fetch_array()可以同时送回mysql_fetch_row()和mysql_fetch_assoc()的值。</p>
<p>19.2	触发器分为事前触发和事后触发，二者有什么区别?语句级触发和行级触发有什么区别?</p>
<p>​		答案：事前触发发生在事件发生之前验证一些条件或进行一些准备工作；事后触发发生在事件发生之后，做收尾工作，保证事务的完整性。而事前触发可以获得之前和新的字段值。语句级触发器可以在语句执行之前或之后执行，而行级触发在触发器所影响的每一行触发一次。</p>
<p>19.3	请用PHP编程，实现一个简单的异常类。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 请用PHP编程，实现一个简单的异常类。
 */
class MyException extends Exception{
	public function errmsg(){
		$msg = "exception occur";
		return $msg;
	}
}

function getNum($num){
	if($num >10){
		throw new MyException("Exception ocur");
	}
	return true;
}

try{
	getNum(100);
}catch(MyException $e){
	echo "Exception msg:".$e->errmsg();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>19.4	请用PHP编程实现连接本地的redis操作，并对变量a进行赋值和取值，并删除变量a。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 请用PHP编程实现连接本地的redis操作，并对变量a进行赋值和取值，并删除变量a。
 */
public function connectRedis(){
	$redis = new Redis();
	$redis->connect('127.0.0.1',6379);
	$res = $redis->set('a','bbbb');
	$a = $redis->get('a');
	$res = $redis->delete('a');
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20.1	一、二、三、四范式有何区别?</p>
<p>​		答案：在设计与操作维护数据库时，最关键的问题就是要确保数据正确地分布到数据库的表中，使用正确的数据结构，不仅有助于对数据库进行相应的存取操作，还可以极大地简化应用程序的其他内容（查询、窗体、报表、代码等），正确地进行表的设计称为“数据库规范化”，它的目的就是减少数据库中的数据冗余，从而增加数据的一致性。范化是在识别数据库中的数据元素、关系，以及定义所需的表和各表中的项目这些初始工作之后的一个细化的过程。常见的范式有1NF、2NF、3NF、BCNF以及4NF。</p>
<p>1NF，第一范式。是指数据库表的每一列都是不可分割的基本数据项，同一列中不能有多个值，即实体中的某个属性不能有多个值或者不能有重复的属性。如果出现重复的属性，那么就可能需要定义一个新的实体，新的实体由重复的属性构成，新实体与原实体之间为一对多关系。第一范式的模式要求属性值不可再分裂成更小部分，即属性项不能是属性组合或由组属性组成。简而言之，第一范式就是无重复的列。例如，由“职工号”“姓名”“电话号码”组成的表（一个人可能有一个办公电话和一个移动电话），这时将其规范化化为1NF可以将电话号码分为“办公电话”和移动电话两个属性，即职工（职工号，姓名，办公电话，移动电话）。</p>
<p>2NF，第二范式。第二范式（2NF）是在第一范式（1NF）的基础上建立起来的，即满足第二范式（2NF）必须先满足第一范式（1NF）。第二范式（2NF）要求数据库表中的每个实例或行必须可以被唯一地区分。为实现区分通常需要为表加上一个列，以存储各个实例的唯一标识。如果关系模式R为第一范式，并且R中每一个非主属性完全函数依赖于R的某个候选键，则称R为第二范式模式。（如果A是关系模式R的候选键的一个属性，则称A是R的主属性，否则称A是R的非主属性。）例如，在选课关系表（学号，课程号，成绩，学分）中，关键字为组合关键字（学号，课程号），但由于非主属性学分仅依赖于课程号，对关键字（学号，课程号）只是部分依赖，而不是完全依赖，所以此种方式会导致数据冗余以及更新异常等问题，解决办法是将其分为两个关系模式：学生表（学号，课程号，分数）和课程表（课程号，学分），新关系通过学生表中的外关键字课程号联系，在需要时进行连接。</p>
<p>3NF，第三范式。如果关系模式R是第二范式，且每个非主属性都不传递依赖于R的候选键，则称R是第三范式的模式。例如，学生表（学号，姓名，课程号，成绩），其中学生姓名无重名，所以该表有两个候选码（学号，课程号）和（姓名，课程号），则存在函数依赖：学号→姓名，（学号，课程号）→成绩，（姓名，课程号）→成绩，唯一的非主属性成绩对码不存在部分依赖，也不存在传递依赖，所以属于第三范式。</p>
<p>BCNF。它构建在第三范式的基础上，如果关系模式R是第一范式，且每个属性都不传递依赖于R的候选键，那么称R为BCNF的模式。假设仓库管理关系表（仓库号，存储物品号，管理员号，数量），满足一个管理员只在一个仓库工作；一个仓库可以存储多种物品。则存在如下关系：</p>
<p>（仓库号，存储物品号）→（管理员号，数量）</p>
<p>（管理员号，存储物品号）→（仓库号，数量）</p>
<p>所以，（仓库号，存储物品号）和（管理员号，存储物品号）都是仓库管理关系表的候选码，表中的唯一非关键字段为数量，它是符合第三范式的。但是，由于存在如下决定关系：</p>
<p>（仓库号）→（管理员号）</p>
<p>（管理员号）→（仓库号）</p>
<p>即存在关键字段决定关键字段的情况，所以其不符合BCNF范式。把仓库管理关系表分解为两个关系表：仓库管理表（仓库号，管理员号）和仓库表（仓库号，存储物品号，数量），这样的数据库表是符合BCNF范式的，消除了删除异常、插入异常和更新异常。</p>
<p>4NF，第四范式。设R是一个关系模式，D是R上的多值依赖集合。如果D中成立非平凡多值依赖X→Y时，X必是R的超键，那么称R是第四范式的模式。例如，职工表（职工编号，职工孩子姓名，职工选修课程），在这个表中同一个职工也可能会有多个职工孩子姓名，同样，同一个职工也可能会有多个职工选修课程，即这里存在着多值事实，不符合第四范式。如果要符合第四范式，那么只需要将上表分为两个表，使它们只有一个多值事实，例如，职工表一（职工编号，职工孩子姓名），职工表二（职工编号，职工选修课程），两个表都只有一个多值事实，所以符合第四范式。</p>
<img src="@source/docs/theme-reco/img/common/image-20211018133225374.png" alt="image-20211018133225374" style="zoom:50%;" />
<p>20.2	如果数据库日志满了，那么会出现什么情况?</p>
<p>答案：日志文件（Log File）记录所有对数据库数据的修改，主要是保护数据库以防止故障，以及恢复数据时使用。其特点如下：</p>
<p>1）每一个数据库至少包含两个日志文件组。每个日志文件组至少包含两个日志文件成员。</p>
<p>2）日志文件组以循环方式进行写操作。</p>
<p>3）每一个日志文件成员对应一个物理文件。</p>
<p>通过日志文件来记录数据库事务可以最大限度地保证数据的一致性与安全性，但一旦数据库中日志满了，就只能执行查询等读操作，不能执行更改、备份等操作，原因是任何写操作都要记录日志，也就是说，基本上处于不能使用的状态。</p>
<p>20.3	请写出HTTP头，并符合以下要求：</p>
<p>​		1）这是一个post请求。</p>
<p>​		2）目标为http://www.example.com:8080/test。</p>
<p>​		3）POST变量：</p>
<p>​										<img src="@source/docs/theme-reco/img/common/image-20211018134044453.png" alt="image-20211018134044453"></p>
<p>​		4）包含以下Cookie信息：</p>
<p>​										<img src="@source/docs/theme-reco/img/common/image-20211018134057929.png" alt="image-20211018134057929"></p>
<p>​</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>----------------------------
Cookie:Cur_query:you&amp;me
Host:www.example.com
Referer:http://www.example.com:8080/test
User-Agent:Mozilla/5.0...
----------------------------
Username:test
Pwd:test2
Intro:hello world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20.4	用面向对象来实现A对象继承B对象和C对象。</p>
<p>​		答案：由于PHP不支持多重继承，因此可以通过实现多个接口的方式来间接地实现多重继承。具体实现方式为，声明B、C对象为接口，再让类A实现B和C。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Interface B{...}
Interface C{...}

Class A implements B,C{
	.....
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



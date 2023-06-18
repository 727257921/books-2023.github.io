<template><div><h4 id="_9-关于nosql的说法" tabindex="-1"><a class="header-anchor" href="#_9-关于nosql的说法" aria-hidden="true">#</a> 9.关于nosql的说法：</h4>
<p>​		MongoDB支持CAP定理中的AP，MySQL支持CAP中的CA，全部都支持不可能存在</p>
<p>​		Memcache既支持TCP协议，也支持UDP协议，可以把PHP的Session存放到Memcache中</p>
<p>​		MongoDB不用先创建Collection的结构就可以直接插入数据，目前MongoDB不支持事务</p>
<p>​		Redis目前是可以支持简单的事务的，由于Redis是单线程来处理所有client的请求，一般情况下，Redis在接收到一个client发来的命令后会立即处理并返回处理结果，但是当一个client在一个连接中发出multi命令，这个连接会进入一个事务上下文，该连接后续的命令并不是立即执行，而是先放到一个队列中。当此连接收到exec命令后，Redis会顺序地执行队列中的所有命令，并将所有命令的运行结果打包到一起返回给client，然后此连接结束事务上下文。</p>
<p>​		get方法是通过URL路径传递数据，而URL的长度和大小有限制，不能进行大量数据的发送，而post可以发送大量数据。</p>
<h4 id="_1-在http-1-0中-状态码-401的含义是-客户端在授权头信息中没有有效的身份信息时访问受到密码保护的页面-如果返回-找不到文件-的提示-则可用-header-函数-其语句为-header-http-1-0-404-not-found-。" tabindex="-1"><a class="header-anchor" href="#_1-在http-1-0中-状态码-401的含义是-客户端在授权头信息中没有有效的身份信息时访问受到密码保护的页面-如果返回-找不到文件-的提示-则可用-header-函数-其语句为-header-http-1-0-404-not-found-。" aria-hidden="true">#</a> 1．在HTTP 1.0中，状态码 401的含义是______<strong>客户端在授权头信息中没有有效的身份信息时访问受到密码保护的页面；</strong>__________；如果返回“找不到文件”的提示，则可用 header 函数，其语句为________header(&quot;HTTP/1.0 404 Not Found&quot;);________。</h4>
<h4 id="_2-以apache模块的方式安装php-在文件http-conf中首先要用语句-动态装载php模块-然后用语句-使得apache把所有扩展名为php的文件都作为php脚本处理。" tabindex="-1"><a class="header-anchor" href="#_2-以apache模块的方式安装php-在文件http-conf中首先要用语句-动态装载php模块-然后用语句-使得apache把所有扩展名为php的文件都作为php脚本处理。" aria-hidden="true">#</a> 2．以Apache模块的方式安装PHP，在文件http.conf中首先要用语句_______动态装载PHP模块，然后用语句_______使得Apache把所有扩展名为PHP的文件都作为PHP脚本处理。</h4>
<p>​		答案：①LoadModule；②AddType application/x-httpd-php .php。</p>
<p>​		分析：在用Apache模块的方式安装PHP时，需要先在http.conf配置文件中加入LoadModule说明加载PHP模块的功能。保存好配置文件后，还需要使用AddTypeapplication/x-httpd-php .php指明Apache对PHP文件的支持。</p>
<p>3.可以执行系统命令的函数有：①system()函数可以执行外部程序并显示输出；②exec()函数可以执行一个外部程序；③popen()函数可以打开进程文件指针。</p>
<h4 id="_5-php的垃圾回收机制是什么" tabindex="-1"><a class="header-anchor" href="#_5-php的垃圾回收机制是什么" aria-hidden="true">#</a> 5．PHP的垃圾回收机制是什么?</h4>
<p>​		PHP可以自动进行内存管理，清除不再需要的对象。PHP使用了引用计数的垃圾回收机制。每个对象都内含一个引用计数器，当reference连接到对象时，计数器加1。当reference离开作用域或被设置为NULL时，计算器减1。当某个对象的引用计数器为0时，则PHP认为不再需要使用这个对象，释放其所占的内存空间。</p>
<h4 id="_1-如何快速下载一个远程http服务器上的图片文件到本地" tabindex="-1"><a class="header-anchor" href="#_1-如何快速下载一个远程http服务器上的图片文件到本地" aria-hidden="true">#</a> 1．如何快速下载一个远程HTTP服务器上的图片文件到本地?</h4>
<p>​		先通过fopen()函数打开要下载的图片路径，然后使用fread()函数读取图片，再在本地打开指定存储图片的目录，将读取到的图片信息写入该目录内的文件中，即可远程下载一个图片到本地。实现代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$file = "http://www.baidu.com/images/1.png";
$fp = fopne($file,'rb');
$img = fread($fp,100000);
$dir = './';
$local = fopen($dir.'/'.basename($file),'w');
fwrite($local,$img);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-抓取远程图片到本地-会用到什么函数-这些函数有什么作用" tabindex="-1"><a class="header-anchor" href="#_1-2-抓取远程图片到本地-会用到什么函数-这些函数有什么作用" aria-hidden="true">#</a> 1.2 抓取远程图片到本地，会用到什么函数?这些函数有什么作用?</h4>
<p>​		答案：fsockopen、fread、fwrite和fclose。由于需要抓取远程图片，因此需要使用fsocketopen来打开一个网络连接，然后可以通过这个网络连接（打开的地址为这个网络上的图片地址），打开成功后会返回一个文件句柄，然后可以使用fread函数读取文件内容，使用fwrite函数把文件内容写到本地（实现了把远程图片抓取到本地的功能），最后使用fclose关闭这个连接。</p>
<h4 id="_3-请写一个函数验证电子邮件的格式是否正确。" tabindex="-1"><a class="header-anchor" href="#_3-请写一个函数验证电子邮件的格式是否正确。" aria-hidden="true">#</a> 3．请写一个函数验证电子邮件的格式是否正确。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function checkEmail($mail){
	$pregEmail = "/^[0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/i";
	return pref_match($presEmail,$mail);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：邮箱首尾两个斜杠/是正则表达式的限定符，这是Perl正则的标准，而PHP与Perl有相同的正则规范。两个斜杠之间表示的是正则内容，后面的i表示忽略大小写。这个正则表达式表示的含义如下：</p>
<p>1）必须以（[0-9A-Za-z\-_\.]+)开头，也就是说，邮件地址以多个字母、数组、“-”或“.”开头。</p>
<p>2）紧接着是字符“@”。</p>
<p>3）然后是多个字母或数字的字符串，接着是一个字符“.”和两个或三个字母；后面一部分可有可无，即一个“.”后面跟着两个字母。</p>
<p>4）邮件的结束符是满足3）的字符串。</p>
<h4 id="_1-可以用于服务器共享session的方式有" tabindex="-1"><a class="header-anchor" href="#_1-可以用于服务器共享session的方式有" aria-hidden="true">#</a> 1.可以用于服务器共享session的方式有</h4>
<p>​	分析：共享Session的方式主要有以下几种：</p>
<p>​	1）基于NFS的Session共享。NFS（Network File System）最早由Sun公司为解决Unix网络主机间的目录共享而研发。仅需将共享目录服务器mount到其他服务器的本地Session目录即可。</p>
<p>​	2）基于数据库的Session共享。</p>
<p>​	3）基于Cookie的Session共享。它的原理是将全站用户的Session信息加密、序列化后以Cookie的方式，统一种植在根域名下（如.host.com），利用浏览器访问该根域名下的所有二级域名站点时，会传递与之域名对应的所有Cookie内容的特性，从而实现用户的Cookie化Session 在多服务间的共享访问。</p>
<p>​	4）基于缓存（Memcache）的Session共享。Memcache是一款基于Libevent多路异步I/O技术的内存共享系统，简单的Key + Value数据存储模式使得代码小巧且高效，因此在并发处理能力上占据了绝对优势。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-2php的魔术方法包含哪些-越多越好-在什么情况下被自动调用" tabindex="-1"><a class="header-anchor" href="#_18-2php的魔术方法包含哪些-越多越好-在什么情况下被自动调用" aria-hidden="true">#</a> 18.2	PHP的魔术方法包含哪些（越多越好）?在什么情况下被自动调用?</h4>
<p>​		答案：PHP可用的魔术方法会在特定情况下被自动调用，但是前提是特定的条件被触发，并且这些魔术方法可以在类中作为方法。</p>
<p>​		PHP的魔术方法有：</p>
<p>​		<img src=".\img\common\image-20211018110753574.png" alt="image-20211018110753574" style="zoom: 67%;" /></p>
<img src=".\img\common\image-20211018110811415.png" alt="image-20211018110811415" style="zoom:67%;" />
<ul>
<li><strong>__construct()，类的构造函数</strong></li>
<li><strong>__destruct()，类的析构函数</strong></li>
<li><strong>__call()，在对象中调用一个不可访问方法时调用</strong></li>
<li><strong>__callStatic()，用静态方式中调用一个不可访问方法时调用</strong></li>
<li><strong>__get()，获得一个类的成员变量时调用</strong></li>
<li><strong>__set()，设置一个类的成员变量时调用</strong></li>
<li><strong>__isset()，当对不可访问属性调用isset()或empty()时调用</strong></li>
<li><strong>__unset()，当对不可访问属性调用unset()时被调用。</strong></li>
<li><strong>__sleep()，执行serialize()时，先会调用这个函数</strong></li>
<li><strong>__wakeup()，执行unserialize()时，先会调用这个函数</strong></li>
<li><strong>__toString()，类被当成字符串时的回应方法</strong></li>
<li><strong>__invoke()，调用函数的方式调用一个对象时的回应方法</strong></li>
<li><strong>__set_state()，调用var_export()导出类时，此静态方法会被调用。</strong></li>
<li><strong>__clone()，当对象复制完成时调用</strong></li>
</ul>
<h4 id="_19-2-宽带的1mbit-s理论上的下载速度是-128kbit-s" tabindex="-1"><a class="header-anchor" href="#_19-2-宽带的1mbit-s理论上的下载速度是-128kbit-s" aria-hidden="true">#</a> 19.2 宽带的1Mbit/s理论上的下载速度是（　128kbit/s ）</h4>
<p>​		分析：因为下载速度是以Byte做单位，1B=8bit，所以1Mbit/s的理论上下载速度是1Mbit/s = 1024kbit/s。所以可得1*1024/8bit/s = 128kbit/s。</p>
<h4 id="_18-5-array-anykey-和-array-anykey-的区别是-。" tabindex="-1"><a class="header-anchor" href="#_18-5-array-anykey-和-array-anykey-的区别是-。" aria-hidden="true">#</a> 18.5  $array['anykey']和$array[anykey]的区别是____________________。</h4>
<p>​		答案：数组中键名一般由单引号指明键名为字符串，如果没有单引号，那么系统首先认为键名为常量，如果发现没有定义该常量值，那么认为该值为字符串并且会报NOTICE错误，但这样执行效率较低。它们的根本区别在于编译时系统认为'anykey'是字符串，而anykey可能是常量或者字符串。</p>
<h4 id="_4-什么是内存管理" tabindex="-1"><a class="header-anchor" href="#_4-什么是内存管理" aria-hidden="true">#</a> 4．什么是内存管理?</h4>
<p>内存管理主要指程序运行时对计算机内存资源的分配、使用和释放等技术，内存管理的目标是高效、快速地分配内存，同时及时地释放和回收内存资源。</p>
<p>内存管理主要包括是否有足够的内存供程序使用，从内存池中获取可用内存，使用后及时销毁并重新分配给其他程序使用。</p>
<p>在PHP开发过程中，如果遇到大数组等操作，那么可能会造成内存溢出等问题。一些常见的处理方法如下：</p>
<p>​	1）通过ini_set（'memory_limit','64M'）方法重置php可以使用的内存大小，一般在远程主机上是不能修改php.ini文件的，只能通过程序设置。注：在safe_mode（安全模式）下，ini_set会失效。</p>
<p>​	2）对数组进行分批处理，及时销毁无用的变量，尽量减少静态变量的使用，在需要数据重用时，可以考虑使用引用（&amp;）。同时对于数据库、文件操作完要及时关闭，对象使用完，要及时调用析构函数等。</p>
<p>​	3）及时使用unset()函数释放变量，使用时需要注意以下两点：</p>
<p>​		① unset()函数只能在变量值占用内存空间超过256B时才会释放内存空间。</p>
<p>​		② 只有当指向该变量的所有变量都销毁后，才能成功释放内存。</p>
<h4 id="_4-什么是抽象类和接口-抽象类和接口有什么不同和相似的地方" tabindex="-1"><a class="header-anchor" href="#_4-什么是抽象类和接口-抽象类和接口有什么不同和相似的地方" aria-hidden="true">#</a> 4．什么是抽象类和接口?抽象类和接口有什么不同和相似的地方?</h4>
<p>答案：被关键字abstract修饰的类叫作抽象类，抽象类是不能被实例化的。被abstract修饰的方法为抽象方法，一个类只要有一个抽象方法，这个类一定是抽象类。</p>
<p>接口是通过关键字interface来定义的，可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体实现。PHP类只支持单重继承，但通过接口可以实现PHP类的多重继承。</p>
<p>抽象类和接口的不同和相似的地方如下：</p>
<p>1）抽象类是一种不能被实例化的类，只能作为其他类的父类来使用。</p>
<p>2）抽象类是通过关键字abstract来声明的。</p>
<p>4）抽象方法没有方法体，该方法天生就是要被子类重写的。</p>
<p>5）抽象方法的格式为abstract function abstractMethod()；。</p>
<p>6）因为PHP中只支持单重继承，所以如果想实现多重继承，那么就要使用接口。也就是说，子类可以实现多个接口。</p>
<p>7）接口类是通过interface关键字来声明的，接口类中的成员变量和方法都是public的，可以不用显式地使用public来修饰。</p>
<p>8）接口中的方法没有方法体。接口中的方法天生就是要被子类继承实现的。</p>
<p>9）子类继承抽象类使用extends关键字，子类实现接口使用implements关键字。</p>
<h4 id="_4-2请写出面向对象中接口和抽象类的区别及应用场景。" tabindex="-1"><a class="header-anchor" href="#_4-2请写出面向对象中接口和抽象类的区别及应用场景。" aria-hidden="true">#</a> 4.2	请写出面向对象中接口和抽象类的区别及应用场景。</h4>
<p>答案：1）被abstract修饰的类叫作抽象类，抽象类可以没有抽象方法，但是一个类如果存在抽象方法，那么这个类一定是抽象类。抽象方法必须使用abstract关键字修饰。</p>
<p>​			2）接口中全部是抽象方法，方法不需要用abstract定义。</p>
<p>​			3）当多个同类的类要设计一个上层时，通常设计为抽象类，当多个异构的类要设计一个上层时，通常设计为接口。</p>
<h4 id="_5-请描述出osi七层网络模型的名称。" tabindex="-1"><a class="header-anchor" href="#_5-请描述出osi七层网络模型的名称。" aria-hidden="true">#</a> 5．请描述出OSI七层网络模型的名称。</h4>
<img src=".\img\common\image-20211012094718880.png" alt="image-20211012094718880" style="zoom:50%;" />
<h4 id="_5" tabindex="-1"><a class="header-anchor" href="#_5" aria-hidden="true">#</a> 5.</h4>
<p><img src="@source/docs/theme-reco/img/common/image-20211012112854735.png" alt="image-20211012112854735"></p>
<p>分析：在PHP中，取模运算符%的操作数在运算之前都会转换成整数（除去小数部分）。其运算结果和被除数的符号（正负号）相同，即$a%$b的结果和$a的符号相同。本题中，24%（-5）的符号为正，结果为4。</p>
<h4 id="_14-线程同步有哪些机制" tabindex="-1"><a class="header-anchor" href="#_14-线程同步有哪些机制" aria-hidden="true">#</a> 14.线程同步有哪些机制?</h4>
<p>​		答案：现在流行的进程、线程同步互斥的控制机制，其实是由最原始、最基本的4种方法（临界区、互斥量、信号量和事件）实现的。</p>
<p>​		1）临界区：通过对多线程的串行化来访问公共资源或一段代码，其速度快，适合控制数据访问。在任意时刻只允许一个线程访问共享资源，如果有多个线程试图访问共享资源，那么当有一个线程进入后，其他试图访问共享资源的线程将会被挂起，并一直等到进入临界区的线程离开，临界在被释放后，其他线程才可以抢占。</p>
<p>​		2）互斥量：为协调对一个共享资源的单独访问而设计，只有拥有互斥量的线程才有权限去访问系统的公共资源，因为互斥量只有一个，所以能够保证资源不会同时被多个线程访问。互斥不仅能实现同一应用程序的公共资源安全共享，还能实现不同应用程序的公共资源安全共享。</p>
<p>​		3）信号量：为控制一个具有有限数量的用户资源而设计。它允许多个线程在同一个时刻去访问同一个资源，但一般需要限制同一时刻访问此资源的最大线程数目。</p>
<p>​		4）事件：用来通知线程有一些事件已发生，从而启动后继任务的开始。</p>
<h4 id="_16-3-以下方法中-能保证锁在任何竞争情况下都安全的是" tabindex="-1"><a class="header-anchor" href="#_16-3-以下方法中-能保证锁在任何竞争情况下都安全的是" aria-hidden="true">#</a> 16.3  以下方法中，能保证锁在任何竞争情况下都安全的是（　）</h4>
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
<h3 id="所有算法" tabindex="-1"><a class="header-anchor" href="#所有算法" aria-hidden="true">#</a> 所有算法：</h3>
<h4 id="_2-产生的随机数是整数1-10的均匀分布" tabindex="-1"><a class="header-anchor" href="#_2-产生的随机数是整数1-10的均匀分布" aria-hidden="true">#</a> 2．产生的随机数是整数1～10的均匀分布</h4>
<p>已知随机数生成函数rand7()能产生的随机数是整数1～7的均匀分布，如何构造rand10()函数，使其产生的随机数是整数1～10的均匀分布。</p>
<img src=".\img\common\image-20211011180405906.png" alt="image-20211011180405906" style="zoom:50%;" />
<p>分析：要保证rand10()产生的随机数是整数1～10的均匀分布，可以构造一个1～10<em>n的均匀分布的随机整数区间（n为任何正整数）。假设x是这个1～10</em>n区间上的一个随机数，那么x%10+1就是均匀分布在1～10区间上的整数。</p>
<p>根据题意，rand7()函数返回1～7的随机数，那么rand7()-1则得到一个离散整数集合，该集合为{0，1，2，3，4，5，6}，集合中每个整数的出现概率都为1/7。那么(rand7()-1)<em>7得到另一个离散整数集合A，该集合元素为7的整数倍，即A={0，7，14，21，28，35，42}，其中，每个整数的出现概率也都为1/7。而由于rand7()得到的集合B={1，2，3，4，5，6，7}，其中每个整数出现的概率也为1/7。显然集合A与集合B中任何两个元素和组合可以与1～49之间的一个整数一一对应，即1～49之间的任何一个数，可以唯一地确定A和B中两个元素的一种组合方式，这个结论反过来也成立。由于集合A和集合B中元素可以看成是独立事件，根据独立事件的概率公式P(AB)=P(A)P(B)，得到每个组合的概率是1/7</em>1/7=1/49。因此，(rand7()-1)*7+rand7()生成的整数均匀分布在1～49之间，而且，每个数的概率都是1/49。</p>
<p>所以，(rand7()-1)*7+rand7()可以构造出均匀分布在1～49的随机数，为了将49种组合映射为1～10之间的10种随机数，就需要进行截断，即将41～49这样的随机数剔除掉，得到的数1～40仍然是均匀分布在1～40的，这是因为每个数都可以看成一个独立事件。由1～40区间上的一个随机数x，可以得到x%10+1就是均匀分布在1～10区间上的整数。</p>
<h4 id="_3-10个房间里放着随机数量的金币" tabindex="-1"><a class="header-anchor" href="#_3-10个房间里放着随机数量的金币" aria-hidden="true">#</a> 3.10个房间里放着随机数量的金币</h4>
<p>10个房间里放着随机数量的金币。每个房间只能进入一次，并只能在一个房间中拿金币。一个人采取如下策略：前4个房间只看不拿。随后的房间只要看到比前4个房间都多的金币数，就拿；否则就拿最后一个房间的金币。编程计算这种策略拿到最多金币的概率。</p>
<img src=".\img\common\image-20211011181139368.png" alt="image-20211011181139368" style="zoom:50%;" />
<img src=".\img\common\image-20211011181152058.png" alt="image-20211011181152058" style="zoom:50%;" />
<p>结果为：0.421</p>
<p>运行结果与金币个数的选择以及模拟的次数都有关系，而且由于是个随机问题，因此同样的程序每次的运行结果也会不同。</p>
<p>分析：这道题是要求一个概率的问题，由于10个房间里放的金币的数量是随机的，因此，在编程实现的时候首先需要生成10个随机数来模拟10个房间里金币的数量。然后判断通过这种策略是否能拿到最多的金币。如果仅仅通过一次模拟来求拿到最多金币的概率显然是不准确的，那么就需要进行多次模拟，通过记录模拟的次数m，拿到最多金币的次数n，从而可以计算出拿到最多金币的概率n/m。显然这个概率与金币的数量以及模拟的次数有关系，模拟的次数越多，越能接近真实值。</p>
<h4 id="_4-已知三个升序整数数组-a-l-、b-m-和-c-n" tabindex="-1"><a class="header-anchor" href="#_4-已知三个升序整数数组-a-l-、b-m-和-c-n" aria-hidden="true">#</a> 4.已知三个升序整数数组 a[l]、b[m]和 c[n]</h4>
<p>已知三个升序整数数组 a[l]、b[m]和 c[n]，在三个数组中各找一个元素，使得组成的三元组距离最小。三元组距离的定义是，假设 a[i]、b[j]和 c[k]是一个三元组，那么距离为Distance=max(|a[i]-b[j]|,|a[i]-c[k]|,|b[j]-c[k]|)，请设计一个求最小三元组距离的最优算法。</p>
<img src=".\img\common\image-20211011181417133.png" alt="image-20211011181417133" style="zoom:50%;" />
<img src=".\img\common\image-20211011181429577.png" alt="image-20211011181429577" style="zoom:50%;" />
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
<h4 id="_2-一个数如果恰好等于它的因子之和-这个数就称为-完数-。例如-6-1-2-3。编程找出1000以内的所有完数。" tabindex="-1"><a class="header-anchor" href="#_2-一个数如果恰好等于它的因子之和-这个数就称为-完数-。例如-6-1-2-3。编程找出1000以内的所有完数。" aria-hidden="true">#</a> 2．一个数如果恰好等于它的因子之和，这个数就称为“完数”。例如，6=1+2+3。编程找出1000以内的所有完数。</h4>
<p>答案：外层循环998次，每次循环得到的$i传入下个循环内，内部循环求解出符合$i整除$k等于0的数，如果能够整除，那么说明$k是$i的一个因子，则用$sum累加，直到$sum+1等于$i条件成立，说明$i是一个“完数”。需要注意的是，因为$sum求解出的因子是不包括1的，所以还需要额外地加1到$sum中，并且$i的一个因子不会大于$i/2，所以内部循环判断是否继续循环的条件为$i/2。</p>
<img src=".\img\common\image-20211012131913358.png" alt="image-20211012131913358" style="zoom:50%;" />
<h4 id="_6-3请介绍说明观察者模式。" tabindex="-1"><a class="header-anchor" href="#_6-3请介绍说明观察者模式。" aria-hidden="true">#</a> 6.3	请介绍说明观察者模式。</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-5-数字1-1000放在含有1001个元素的数组中-其中只有唯一的一个元素值重复-其他数字均只出现一次。设计一个算法-将重复元素找出来-要求每个数组元素只能访问一次。如果不使用辅助存储空间-能否设计一个算法实现" tabindex="-1"><a class="header-anchor" href="#_6-5-数字1-1000放在含有1001个元素的数组中-其中只有唯一的一个元素值重复-其他数字均只出现一次。设计一个算法-将重复元素找出来-要求每个数组元素只能访问一次。如果不使用辅助存储空间-能否设计一个算法实现" aria-hidden="true">#</a> 6.5 	数字1～1000放在含有1001个元素的数组中，其中只有唯一的一个元素值重复，其他数字均只出现一次。设计一个算法，将重复元素找出来，要求每个数组元素只能访问一次。如果不使用辅助存储空间，能否设计一个算法实现?</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7把链表相邻元素翻转-例如-给定链表为1-2-3-4-5-6-7-则翻转后的链表变为2-1-4-3-6-5-7。" tabindex="-1"><a class="header-anchor" href="#_6-7把链表相邻元素翻转-例如-给定链表为1-2-3-4-5-6-7-则翻转后的链表变为2-1-4-3-6-5-7。" aria-hidden="true">#</a> 6.7	把链表相邻元素翻转，例如，给定链表为1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6-&gt;7，则翻转后的链表变为2-&gt;1-&gt;4-&gt;3-&gt;6-&gt;5-&gt;7。</h4>
<h4 id="_11-3写一个函数-算出两个文件的相对路径。例如-a-a-b-c-d-e-php-b-a-b-12-34-c-php-计算出-b相对于-a的相对路径应该是-c-d。" tabindex="-1"><a class="header-anchor" href="#_11-3写一个函数-算出两个文件的相对路径。例如-a-a-b-c-d-e-php-b-a-b-12-34-c-php-计算出-b相对于-a的相对路径应该是-c-d。" aria-hidden="true">#</a> 11.3	写一个函数，算出两个文件的相对路径。例如，$a = /a/b/c/d/e.php;，$b= /a/b/12/34/c.php;，计算出$b相对于$a的相对路径应该是 ../../c/d。</h4>
<h4 id="_7-2-php有哪几种常用的设计模式-请简单说明。" tabindex="-1"><a class="header-anchor" href="#_7-2-php有哪几种常用的设计模式-请简单说明。" aria-hidden="true">#</a> 7.2 	PHP有哪几种常用的设计模式?请简单说明。</h4>
<p>​		（1）工厂模式工厂模式专门负责实例化有大量公共接口的类。工厂模式可以动态地决定将哪一个类实例化，而不必事先知道每次要实例化哪一个类。客户类和工厂类是分开的。消费者无论什么时候需要某种产品，需要做的只是向工厂提出请求即可。消费者无须修改就可以接纳新产品。这种方法当然也存在缺点，就是当产品修改时，工厂类也要做相应地修改。</p>
<p>​		（2）单例模式这种模式涉及一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象。</p>
<p>​		（3）观察者模式观察者模式提供了避免组件之间耦合的另一种方法，该模式非常简单，一个对象通过添加方法（该方法允许另一个对象，即观察者自己）使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。</p>
<p>​		（4）命令链模式以松散耦合主题为基础，发送消息、命令和请求，或通过一组处理程序发送任意内容。每个处理程序都会自行判断自己能否处理请求，如果可以，那么该请求被处理，进程停止。</p>
<p>​		（5）策略模式在策略模式中，创建表示各种策略的对象和一个行为随着策略对象的改变而改变的context对象，并且一个类的行为或其算法可以在运行时更改。</p>
<h3 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数：</h3>
<p>strcmp($str1,$str2)函数的功能是比较两个字符串的大小，如果$str1==$str2，则返回0；如果$str1 &gt;$str2，则返回值大于0。</p>
<p>getdate()函数返回指定时间的时间戳或当前时间的时间格式，它返回的是一个数组。该数组中包含的内容有秒、分、小时、一个月中的第几天、一周中的某一天、月、年、一年中的某一天、星期几的名称、月份的名称、自 Unix 纪元以来经过的秒数等。</p>
<p>file()函数可以把整个文件读入一个数组中，将文件作为一个数组返回，如果失败，那么返回false。</p>
<p>fgets()函数主要用于读取文本文件中的一行，而fread()函数主要用于读取二进制文件。fseek()函数主要用于在打开的文件中定位，fputs()函数用于写入文件。</p>
<p>debug_backtrace()的作用是，返回在特定位置调用过的函数名组成的数组，经常被用于调试中。</p>
<p>stream_get_meta_data()函数可以获取是否仍然有数据未读、流是否过期、流是否被阻挡、流构建的成分等信息，但是无法显示通过流传输了多少数据，只能显示还剩多少数据需要传输。</p>
<p>dir(&quot;.&quot;)函数用来获取当前文件夹的路径，返回的是一个对象给$x，接着就可以通过$x读取文件夹下的文件，通过while语句输出。</p>
<p>一个函数的参数不能是对变量的引用，除非在php.ini中把________设为on。</p>
<p>​		答案：allow_call_time_pass_reference。</p>
<p>13.对数组进行逆向排序并保持索引关系的函数是__________，将字符串转换成小写的是__________，字符串反转函数是__________。</p>
<p>​		答案：arsort()，strtolower()，strrev()。分析：对数组进行逆向排序，并且保持原有的索引关系的函数是arsort()。将字符串转换成小写的函数是strtolower()，而将字符串反转的函数是strrev()函数。</p>
<p>disable_functions限制程序使用一些可以直接执行系统命令的函数，如system、exec、passthru、shell_exec、proc_open等。所以如果想保证服务器的安全，那么要将这个函数加到disable_functions里或者将安全模式打开。</p>
<p>当register_globals打开以后，各种变量都会被注入代码中，例如，来自HTML表单的请求变量。再加上PHP在使用变量之前是无须进行初始化的，这就使得更容易写出不安全的代码。当打开时，人们使用变量时确实不知道变量是哪里来的。但是register_globals的关闭改变了这种代码内部变量和客户端发送的变量混杂在一起的糟糕情况。</p>
<p>2.PHP支持的流传输方式的是__________和__________。</p>
<p>答案：STDIO、stream。分析：PHP 只支持两种流传输，分别为本地操作的STDIO和远程操作的stream，并且可以根据创建的流的类型来自动选择合适的传输方式。</p>
<p>3.使用final关键字时，应注意的问题有__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>。</p>
<p>​		答案：定义的类禁止继承；定义的成员禁止继承；定义的方法禁止重写。</p>
<p>spl_autoload_register()提供了一种更加灵活的方式来实现类的自动加载（同一个应用文件中，可支持任意数量的加载器，比如第三方库中的类文件）。而_autoload()函数在PHP7.2版本中已经被废除。</p>
<p>substr_replace()函数用来把字符串的一部分替换为另一部分，语法为substr_replace（检查的字符串，需要插入的字符串，何处开始替换（可选），替换多少个字符（可选））。所以substr_replace（$x,'x',1,2）的意思是，从索引位置等于1的$x字符串位置开始，把$x中的2个字符串替换为一个字符串x，可以得到axle。</p>
<p>key()函数的作用是从当前内部指针的位置返回元素键名，next()函数将内部指针指向数组中的下一个元素，并输出。prev()函数将内部指针指向数组中的上一个元素，并输出。current()函数返回数组中的当前元素的值。</p>
<p>要防止跨站攻击，以下需要做的是：</p>
<p>A．永远不要使用 include 和 require 引入靠用户输入决定路径的文件（比如：include &quot;$username/script.txt&quot;;）</p>
<p>B．除非网站需要，否则关闭 allow_url_fopen</p>
<p>D．使用类似 strip_tags()一类的函数过滤一个用户输入给另一个用户看的内容</p>
<p>当在 PHP 脚本中执行系统命令时，以下选项中，能确保没有命令注入的是（　）（双选）</p>
<p>C．使用escapeshellcmd()函数转义命令中的特殊字符</p>
<p>E．用escapeshellarg()函数在执行前转义命令参数</p>
<p>Nginx主要使用的网络协议是：TCP/IP、HTTP、HTTPS、Websocket等网络协议。</p>
<p>1.PHP是一种解释型语言，因为其底层是由C语言编写的，所以PHP代码需要编译为opcode之后再交由Zend引擎执行，Zend引擎将这些PHP指令转变成C语言指令，而C语言指令又会转变成汇编语言，最后汇编语言将根据处理器的规则转变成机器码执行。</p>
<p>在PHP中，用来获取浏览器属性的方法是 $_SERVER['HTTP_USER_AGENT']。</p>
<p>假设有一个名为'index.php'的文件的路径为c:/apache/htdocs/phptutor/index.php，那么basename($<em>SERVER['PHP_SELF'])的返回值为</em>__/htdocs/phptutor/index.php_______。</p>
<p>$_SERVER['PHP_SELF']可以获取到正在执行脚本的网页路径，除了根路径不能获取外，可以获取具体到除了根路径后的路径名+当前执行文件名。</p>
<p>strcmp()函数提供了安全的字符串比较机制，比较的字符区分大小写。</p>
<p>strcasecmp()函数也可以用来比较两个字符串，但不区分大小写，它的二进制是安全的。该函数与strncasecmp()函数类似，不同的是，通过strncasecmp()可以指定每个字符串用于比较的字符数。strcasecmp()不是一个“万能”函数，因为它不区分大小写。</p>
<p>gethostbynamel()函数的作用是根据主机名获取该主机名的所有IP列表</p>
<p>使用php操作mysql时，想取得最近一条查询的信息，应该使用的函数是______mysql_info()函数可以返回最近一条查询的信息____。</p>
<p>在PHP4.0的概念中，抽象类、final类、public、private、protected(PPP)方法都没有实现。</p>
<p>ArrayAccess能够提供像访问数组一样访问这个对象的接口，不能定义一个类或预定义接口Iterator去实现这个功能。</p>
<p>__call方法是在创建一个类实例化后就可以直接调用对象使用，当调用的方法不可访问或没有权限访问时，会自动调用__call方法。</p>
<p>fopen()函数可以打开文件或者URL，所以格式为HTTP，ftp的网页路径可以打开，zlib的文件格式也是可以打开的。但是不支持打开mail函数查看邮件。</p>
<p>修改表字段名：alter table 表名CHANGE 原字段名 新字段名 类型;</p>
<p>修改字段类型：alter table 表名MODIFY 字段名 类型;</p>
<p>增加一个字段：alter table 表名add COLUMN 字段名 类型 NOT NULL（或DEFAULT NULL）；</p>
<p>新增一个字段默认不为空（或默认为空）;</p>
<p>删除一个字段：alter table 表名DROP COLUMN 字段名;</p>
<p>stristr()函数用于搜索一个字符串在另一字符串中第一次出现的位置。</p>
<p>要查看一个变量的数据类型，可使用函数gettype()和GetType()</p>
<p>php函数不区分大小写，变量区分大小写</p>
<p>getservbyname()函数可以获取互联网服务协议对应的端口。echo getservbyname('ftp','TCP')输出的是______21____。</p>
<p>microtime 函数返回一个由时间戳和小数两部分组成的字符串，两部分由空格分开。因此，explode()将字符串分割并放入数组，array_sum()把它们相加，转换成数字。$time = array_sum (explode (' ', microtime()));把 microtime()的输出转化成一个数字值</p>
<p>13.7 能把字符串里存储的二进制数据转化成十六进制的函数是</p>
<p>​			pack()函数可以将数据装入一个二进制字符串中，可以将字符转化成十六进制表示。bin2hex()函数也可以将字符串转化成十六进制。hex2bin()函数可以把ASCII字符的字符串转换为十六进制值，并通过pack()函数转换回来。而printf()函数可以把数字转换成十六进制，但是不能转换字符串为十六进制。</p>
<p>PEAR全称为PHP扩展与应用库（PHP Extension and ApplicationRepository），它是一个PHP扩展及应用的一个代码仓库。可以直接下载下来，在代码中包含扩展开发使用。</p>
<p>return  chr(65) =='a';</p>
<p>fscanf()函数可以用指定格式来解析文件的内容。而sscanf()函数只能用来操作字符串。fgets()函数只能用于读取单行文本，file()函数可以读取整个文件，fnmatch()函数是根据指定的模式来匹配文件名或字符串，它们都不能解析格式化过的多行文件。</p>
<p>array_rand()函数的作用是随机返回数组的一个键名。</p>
<p>当执行serialize()序列化时，会检查是否存在魔法函数__sleep()，如果存在，那么先执行__sleep()，然后才执行serialize()序列化，这个功能可以清理对象，并返回一个包含对象中所有变量名的数组。而__wakeup()方法是在执行unserialize()反序列化前使用，预先准备对象数据。</p>
<p>有一个字符串变量$String，去除其中的HTML标记的正则表达式为__________。</p>
<p>​			答案：$result = preg_replace(&quot;/&lt;/?[^&lt;&gt;]*?&gt;/&quot;,&quot;&quot;,$String);。</p>
<p>Memcache存储的单个最大数据为1MB，如果数据大于1MB，那么可以考虑将数据进行拆分存储到不同的key中。</p>
<p>header(&quot;Content-type:image/jpeg&quot;)可以指定浏览器输出一张图片，readfile()函数可以输出文件。如果输出文件成功，那么会输出文件中读入的字节数，如果输出文件失败，那么返回False。因为存在image.jpg文件，所以会直接下载image.jpg图片。</p>
<p>PHP写出一个正则表达式，过滤网页上的所有js脚本  /&lt;script[^&gt;]<em>?&gt;.</em>?&lt;/script&gt;/si。</p>
<p>数组函数 arsort 的作用是__对数组进行逆向排序并保持索引关系__;语句 error_reporting(2047)的作用是__报告所有错误和警告__。</p>
<p><strong>parse_url用法：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$url = "http://www.sina.com.cn/abc/de/fg.php?id=1";
$arr = parse_url($url);
var_dump($arr);die();
array(4) { ["scheme"]=> string(4) "http" ["host"]=> string(15) "www.sina.com.cn" ["path"]=> string(14) "/abc/de/fg.php" ["query"]=> string(4) "id=1" }

echo basename($arr['path']); //fg.php
echo dirname($arr['path']); ///abc/de
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16.6 一个函数的参数不能是对变量的引用，除非在php.ini中把__________设为on。</p>
<p>​		答案：allow_call_time_pass_reference。分析：主要通过在php.ini配置文件里对allow_call_time_pass_reference进行启用，在函数调用时强制参数按照引用传递。对于该方法，目前已经不推荐使用，推荐在函数定义时显式地指定哪些参数需要使用引用传递。</p>
<p>$a为-3，它的二进制为正数3的补码即1100，而$b=4，二进制数为0100</p>
<p>负数的二进制走的是补码。</p>
<p>17.4 _____________函数能让服务器输出header：set-Cookie：foo=bar。</p>
<p>​		答案：setcookie()或setrawCookie()。分析：由这个header头里面的信息set-Cookie知道是对Cookie进行设置，所以可以通过setcookie()或setrawCookie()函数输出HTTP发送Cookie的信息。</p>
<p>MySQL目前只有InnoDB和BDB两个数据表类型才支持事务</p>
<p>substr()、strpos()、strlen()、htmlentities()处理字符串时依据的编码方式是不相同的，substr在处理多字节字符的时候可能会出现乱码。</p>
<h4 id="_86-在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-重点" tabindex="-1"><a class="header-anchor" href="#_86-在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-重点" aria-hidden="true">#</a> 86.在PHP中，当前脚本的名称（不包括路径和查询字符串）记录在预定义变量（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>（1）中；而链接到当前页面的的前一页面URL记录在预定义变量
（2）中 
&lt;?php
    //本页地址，SCRIPT_NAME也可以:php/test.php
    echo $_SERVER['PHP_SELF']."&lt;br />";
    //链接到当前页面的前一页面的 URL 地址:
    echo $_SERVER['HTTP_REFERER']."&lt;br />";
    //前执行脚本的绝对路径名:D:Inetpubwwwrootphp est.php 
    echo $_SERVER["SCRIPT_FILENAME"]."&lt;br />";
    //正在浏览当前页面用户的 IP 地址:127.0.0.1
    echo $_SERVER["REMOTE_ADDR"]."&lt;br />";
    //查询（query）的字符串（URL 中第一个问号 ? 之后的内容）:id=1&amp;bi=2
    echo $_SERVER["QUERY_STRING"]."&lt;br />";
    //当前运行脚本所在的文档根目录:d:inetpubwwwroot
    echo $_SERVER["DOCUMENT_ROOT"]."&lt;br />";
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_91-写出匹配url的正则表达式" tabindex="-1"><a class="header-anchor" href="#_91-写出匹配url的正则表达式" aria-hidden="true">#</a> 91.写出匹配URL的正则表达式.</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="防止sql注射漏洞一般用-addslashes-函数。" tabindex="-1"><a class="header-anchor" href="#防止sql注射漏洞一般用-addslashes-函数。" aria-hidden="true">#</a> 防止SQL注射漏洞一般用__addslashes___函数。</h4>
<p>echo 8%(-2); //0
echo -8%(2); //0
echo -8%(3); //-2
echo (-8)%(3); //-2
echo 8%(-3); //2</p>
<h4 id="_94-删除目录-重点" tabindex="-1"><a class="header-anchor" href="#_94-删除目录-重点" aria-hidden="true">#</a> 94.删除目录（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php  //自定义函数递归的删除整个目录

 function delDir($directory) {
  if(file_exists($directory)) {  //判断目录是否存在，如果存在则执行
	 if($dir_handle=@opendir($directory)){ //打开返回目录资源，并判断
	  while($filename=readdir($dir_handle)){ //遍历目录读出目录中信息
		if($filename!="." &amp;&amp; $filename!="..") { //一定要排除两个特殊目录
		 $subFile=$directory."/".$filename;//将目录下文件和当前目录相连
		 if(is_dir($subFile))        //如果是目录条件则成立
		   delDir($subFile);        //递归调用自己删除子目录
		 if(is_file($subFile))       //如果是文件条件则成立
		   unlink($subFile);        //直接删除这个文件
		 }
	  }
	  closedir($dir_handle);            	//关闭目录资源
	  rmdir($directory);              //删除空目录
	  }
  }
 }
 delDir("phpMyAdmin");  //调用函数，将程序所在目录中phpMyAdmin文件夹删除
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<h4 id="_129-使用五种以上的方式获取一个文件的扩展名" tabindex="-1"><a class="header-anchor" href="#_129-使用五种以上的方式获取一个文件的扩展名" aria-hidden="true">#</a> 129.使用五种以上的方式获取一个文件的扩展名</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>要求：dir/upload.image.jpg,找出jpg或.jpg。
必须使用PHP自带的处理函数进行处理，方法不能明显重复，可以封装成函数，
比如：getext1($filename),getext2($filename);
function getext1($filename){
	return strrchr($filename,'.');
}
function getext2($filename){
	return substr($filename,strrpos($filename,'.'))
}
function getext3($filename){
	return array_pop(explode('.',$filename));
}
function getext4($filename){
	$p = pathinfo($filename);
	return $p["extension"];
}
function getext5($filename){
	return strrev(substr(sttev($filename),0,strpos(strrev($filename),'.')))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_257-php处理数组的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_257-php处理数组的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 257.PHP处理数组的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
<p>（1）array() 创建数组</p>
<p>（2）in_array() 判断元素是否在数组中</p>
<p>（3）count() 返回数组中元素的数目</p>
<p>（4）array_merge() 将多个数组合并成一个数组</p>
<p>（5）array_diff() 比较两个或两个以上数组的差异</p>
<p>（6）array_intersect() 获取两个或两个数组以上的交集</p>
<p>（7）array_keys() 获取数组的key列表</p>
<p>（8）array_values() 获取数组的值列表</p>
<p>（9）array_unique() 删除数组中的重复值</p>
<p>（10）array_push()将一个或多个元素插入数组的末尾（入栈）</p>
<p>（11）array_pop() 弹出并返回 array 数组的最后一个单元（出栈）</p>
<p>（12）array_walk() 使用用户自定义函数对数组中的每个元素做回调处理</p>
<h4 id="_258-php处理字符串的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_258-php处理字符串的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 258.PHP处理字符串的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
<p>（1）trim() 移除字符串两侧的空白字符和其他字符；</p>
<p>（2）strlen() 获取字符串的长度</p>
<p>（3）mb_strlen() 获取字符串长度（可指定字符编码，对中文字符串计算长度）</p>
<p>（4）substr()返回字符串的一部分；</p>
<p>（5）str_replace() 子字符串替换</p>
<p>（6）str_repeat () 重复一个字符串</p>
<p>（7）is_string() 检测变量是否是字符串；</p>
<p>（8）str_shuffle () 随机打乱一个字符串</p>
<p>（9）sprintf() 返回根据格式化字符串生成的字符串（通常用于获取分表后的数据表名）</p>
<p>（10）strstr() 查找字符串的首次出现</p>
<p>（11）addslashes 使用反斜线引用字符串</p>
<h4 id="_259-php处理时间的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_259-php处理时间的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 259.PHP处理时间的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
<p>（1）date() 格式化一个本地时间／日期。</p>
<p>（2）getdate() 取得日期／时间信息。</p>
<p>（3）date_default_timezone_set() 设定默认时区。</p>
<p>（4）date_default_timezone_get() 返回默认时区。</p>
<p>（5）mktime() 返回一个日期的 Unix时间戳。</p>
<p>（6）strtotime() 将任何字符串的日期时间描述解析为 Unix 时间戳</p>
<p>（7）strftime() 根据区域设置格式化本地时间／日期</p>
<h4 id="_261-php操作文件的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_261-php操作文件的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 261.PHP操作文件的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
<p>（1）打开文件 fopen()</p>
<p>（2）读取文件 fgets() ; 注：file_get_contents()也是读取文件</p>
<p>（3）写入文件fwrite() ; 注：file_put_contents()同样可以写入文件</p>
<p>（4）关闭文件句柄 fclose()</p>
<p>（5）移动 / 重命名文件 rename()</p>
<p>（6）复制文件 copy()</p>
<p>（7）创建文件 vim 或 touch</p>
<p>（8）删除文件 unlink()</p>
<p>（9）获取文件上次访问的时间 fileatime()</p>
<p>（10）获取文件上次修改的时间 filemtime()</p>
<p>（11）获取文件大小 filesize()</p>
<p>（12）获取文件类型 filetype()</p>
<p>（13）获取文件详细信息 state()</p>
<p>（14）判断是否是目录 is_dir()</p>
<h4 id="_262-php操作目录-文件夹-的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_262-php操作目录-文件夹-的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 262.PHP操作目录（文件夹）的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
<p>（1）打开目录 opendir()</p>
<p>（2）读取目录 readdir()</p>
<p>（3）删除目录 rmdir()</p>
<p>（4）关闭目录句柄 closedir()</p>
<p>（5）创建目录 mkdir()</p>
<p>（6）返回路径中的目录部分 dirname()</p>
<p>（7）取得当前工作目录 getcwd()</p>
<p>（8）列出指定路径中的文件和目录 scandir()</p>
<h4 id="_136-请写一段php代码-确保多个进程同时写入同一个文件成功" tabindex="-1"><a class="header-anchor" href="#_136-请写一段php代码-确保多个进程同时写入同一个文件成功" aria-hidden="true">#</a> 136.请写一段PHP代码，确保多个进程同时写入同一个文件成功?</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$fp = fopen("lock.txt",w+);
if(flock($fp,LOCK_EX)){
	fwrite($fp,"xxxx");
	flock($fp,LOCK_UN);
}else{
	echo "file is locking";
}
fclose($fp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PHP中获取图像尺寸大小的方法是：答案：getimagesize()、Imagesx()、Imagesy()。分析：1）可以使用getimagesize()获取图片的大小及相关信息，使用方法为getimagesize（图片路径），如果成功获取，那么返回数组，如果不成功，那么返回false。2）可以使用Imagesx()函数用于获取图像的宽度，单位为像素，返回值为整型。3）可以使用Imagesy()函数用于获取图像的高度，单位为像素，返回值为整型。</p>
<p>19.3 打开php.ini中的safe_mode，会影响的函数有__________、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、<strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong>、___________。</p>
<p>​		答案：fopen()、mkdir()、rmdir()、set_time_limit()、mysql_connect()、mail()。</p>
<p>​		分析：PHP的safa_mode提供了一个基本安全的共享环境，在一个有多个用户账户存在的PHP开发的Web服务器上。当安全模式打开的时候，部分函数将被完全地禁止，而还有部分函数的功能将会受到限制。下面重点给出其中的一部分：</p>
<p>​		1）fopen()、mkdir()、rmdir() 检查被操作的目录是否与正在执行的脚本有相同的UID。</p>
<p>​		2）创建新文件（只能在属于当前用户的目录下创建文件）。</p>
<p>​		3）dl()函数在安全模式下被禁用。</p>
<p>​		4）set_time_limit()在安全模式下不起作用。</p>
<p>​		5）mysql服务器所用的用户名必须与调用mysql_connect()的文件的拥有者用户名相同。</p>
<p>​		6）mail()在安全模式下，第5个参数被屏蔽。</p>
<p>20.3  error_reporting（2047）的作用是（　）</p>
<p>​		分析：2047=1+2+4+8+16+32+64+128+256+512+1024。其中，1对应E_ERROR，2对应E_WARNING，4对应E_PARSE，8对应E_NOTICE，16对应E_CORE_ERROR，32对应E_CORE_WARNING，64对应E_COMPILE_ERROR，128对应E_COMPILE_WARNING，256对应E_USER_ERROR，512对应E_USER_WARNING，1024对应E_USER_NOTICE。综上分析，error_reporting(2047)表示上述错误都会显示出来。</p>
<p>Memcache要求key的最大长度是250个字符，如果使用的客户端支持“key”的前缀，那么key可以是前缀+原始key，最大长度可以超过250个字符。但是为了节省内存和带宽，不建议使用太长字符做key。</p>
<p>8.5	使用五种以上方式获取一个文件的扩展名。要求：dir/upload.image.jpg，找出jpg或.jpg。必须使用PHP自带的处理函数进行处理，方法不能重复，可以封装成函数，比如getext1($filename)，getext2($filename)。</p>
<img src=".\img\common\image-20211014173301944.png" alt="image-20211014173301944" style="zoom:50%;" />
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
<h4 id="_9-6-请写一段php代码-确保多个进程同时写入同一个文件成功。" tabindex="-1"><a class="header-anchor" href="#_9-6-请写一段php代码-确保多个进程同时写入同一个文件成功。" aria-hidden="true">#</a> 9.6	 请写一段PHP代码，确保多个进程同时写入同一个文件成功。</h4>
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
<h4 id="_9-7请用单例设计模式方法设计类-要求满足如下需求-用php5代码编写类实现在每次对数据库连接的访问中都只能获取唯一的一个数据库连接-具体连接数据库的详细代码忽略-写出主要逻辑代码。" tabindex="-1"><a class="header-anchor" href="#_9-7请用单例设计模式方法设计类-要求满足如下需求-用php5代码编写类实现在每次对数据库连接的访问中都只能获取唯一的一个数据库连接-具体连接数据库的详细代码忽略-写出主要逻辑代码。" aria-hidden="true">#</a> 9.7	请用单例设计模式方法设计类，要求满足如下需求，用PHP5代码编写类实现在每次对数据库连接的访问中都只能获取唯一的一个数据库连接，具体连接数据库的详细代码忽略，写出主要逻辑代码。</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-1请说明在php-ini中safe-mode开启之后对于php系统函数的影响。" tabindex="-1"><a class="header-anchor" href="#_10-1请说明在php-ini中safe-mode开启之后对于php系统函数的影响。" aria-hidden="true">#</a> 10.1	请说明在php.ini中safe_mode开启之后对于PHP系统函数的影响。</h4>
<p>​		答案：</p>
<p>​			PHP中的save_mode开启后，可以提供一个安全的共享环境，它主要对系统的操作、文件、权限设置等产生影响。但该模式在PHP5.4.0以后已经被废除。该模式会对以下的函数产生影响：</p>
<p>​			1）首先是与操作文件系统有关的函数，这些函数访问文件时会被限制，例如，ckdir()、move_uploaded_file()、chgrp()、parse_ini_file()、chown()、rmdir()、copy()、rename()、fopen()、require()、highlight_file()、show_source()、include()、symlink()、link()、touch()、mkdir()、unlink()等函数。</p>
<p>​			2）其次还有一些其他的函数也会有影响，例如，exec()、shell_exec()、pasathru()、system()、popen()等。</p>
<h4 id="_10-2什么是数据库三级封锁协议" tabindex="-1"><a class="header-anchor" href="#_10-2什么是数据库三级封锁协议" aria-hidden="true">#</a> 10.2	什么是数据库三级封锁协议?</h4>
<p>​			答案：</p>
<p>​			众所周知，基本的封锁类型有两种：排它锁（X锁）和共享锁（S锁）。所谓X锁是事务T对数据A加上X锁时，只允许事务T读取和修改数据A。所谓S锁是事务T对数据A加上S锁时，其他事务只能再对数据A加S锁，而不能加X锁，直到T释放A上的S锁。若事务T对数据对象A加了S锁，则T就可以对A进行读取，但不能进行更新（S锁因此又称为读锁），在T释放A上的S锁以前，其他事务可以再对A加S锁，但不能加X锁，从而可以读取A，但不能更新A。</p>
<p>​			在运用X锁和S锁对数据对象加锁时，还需要约定一些规则，例如，何时申请X锁或S锁、持锁时间、何时释放等，称这些规则为封锁协议（Locking Protocol）。对封锁方式规定不同的规则，就形成了各种不同的封锁协议。一般使用三级封锁协议，也称为三级加锁协议。该协议是为了保证正确地调度事务的并发操作。三级加锁协议是事务在对数据库对象加锁、解锁时必须遵守的一种规则。下面分别介绍这三级封锁协议。</p>
<p>​			一级封锁协议：事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放。事务结束包括正常结束（COMMIT）和非正常结束（ROLLBACK）。一级封锁协议可以防止丢失修改，并保证事务T是可恢复的。使用一级封锁协议可以解决丢失修改问题。在一级封锁协议中，如果仅仅是读数据不对其进行修改，是不需要加锁的，它不能保证可重复读和不读“脏”数据。</p>
<p>​			二级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，读完后方可释放S锁。二级封锁协议除防止了丢失修改，还可以进一步防止读“脏”数据。但在二级封锁协议中，由于读完数据后即可释放S锁，所以它不能保证可重复读。</p>
<p>​			三级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，直到事务结束才释放。三级封锁协议除防止了丢失修改和不读“脏”数据外，还进一步防止了不可重复读。</p>
<h4 id="_10-5写一个函数-尽可能高效地从一个标准-url-里取出文件的扩展名。例如-http-www-sina-com-cn-abc-de-fg-php-id-1-需要取出-php-或-php。" tabindex="-1"><a class="header-anchor" href="#_10-5写一个函数-尽可能高效地从一个标准-url-里取出文件的扩展名。例如-http-www-sina-com-cn-abc-de-fg-php-id-1-需要取出-php-或-php。" aria-hidden="true">#</a> 10.5	写一个函数，尽可能高效地从一个标准 url 里取出文件的扩展名。例如，http://www.sina.com.cn/abc/de/fg.php?id=1 需要取出 php 或 .php。</h4>
<p>​		<img src=".\img\common\image-20211015104305819.png" alt="image-20211015104305819"  /></p>
<p>$_SERVER[‘REMOTE_ADDR’]; 客户端ip</p>
<p>$_SERVER[‘‘Server_ADDR’]; 服务器端ip</p>
<p>$str = &quot;open_door&quot;;
$str = str_replace (&quot;_&quot;, &quot; &quot;, $str);
$str = ucwords( $str ); //Open Door
$str = str_replace (&quot; &quot;, &quot;&quot;, $str);
echo $str;//OpenDoor</p>
<p>遍历文件夹：</p>
<p>function getDir($dir){
$files = array();
if($handle = opendir($dir)){
while(($file = readdir($handle)) !== false){
if($file != &quot;..&quot; &amp;&amp; $file != &quot;.&quot;){
if(is_dir($dir.&quot;/&quot;.$file)){
$files[$file] = getDir($dir.&quot;/&quot;.$file);
}else{
$files[] = $file;
}
}
}
closeDir($handle);
return $files;
}
}</p>
<h4 id="_48-写出匹配邮箱地址和url的两个正则表达式。类似下面的-重点" tabindex="-1"><a class="header-anchor" href="#_48-写出匹配邮箱地址和url的两个正则表达式。类似下面的-重点" aria-hidden="true">#</a> 48. <strong>写出匹配邮箱地址和URL的两个正则表达式。类似下面的：</strong>（重点）</h4>
<p>邮箱地址：user_name.first@example.com.cn</p>
<p>URL地址：http://www.example.com.cn/user_profile.php?uid=100</p>
<p>（提示：使用标准的正则表达式，就是PHP中preg_* 类的正则处理函数能够解析的正则）</p>
<p>邮箱：/\w+([-+.]\w+)<em>@\w+([-.]\w+)</em>.\w+([-.]\w+)*/</p>
<p>URL：/^http://[\w]+.[\w]+[\S]*/</p>
<h4 id="_50-使用socket抓取百度首页-并且得到搜索框-重点" tabindex="-1"><a class="header-anchor" href="#_50-使用socket抓取百度首页-并且得到搜索框-重点" aria-hidden="true">#</a> 50.使用socket抓取百度首页，并且得到搜索框：（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$url='www.baidu.com';  
$Port = 80;  
$host_ip  = gethostbyname('www.baidu.com');  
$Header  = trim('Host:www.baidu.com')."\r\n";  
$Header  .= trim('Connection: Close')."\r\n";  
$Request  = "GET / HTTP/1.1\r\n";  
$Request .= $Header;  
$Request .= "\r\n";  
$sockHttp   = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);  
$resSockHttp = socket_connect($sockHttp, $host_ip, $Port);  
socket_write($sockHttp, $Request, strlen($Request));  
$Response = '';  
while ($Read_data = socket_read($sockHttp, 4096)){  
  $Response .= $Read_data;  
}  
socket_close($sockHttp);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_55-请写出并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数-重点" tabindex="-1"><a class="header-anchor" href="#_55-请写出并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数-重点" aria-hidden="true">#</a> 55.请写出并说明如何在命令行下运行PHP脚本（写出两种方式）同时向PHP脚本传递参数（重点）</h4>
<p>方法一：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
if ($argc > 1){
  print_r($argv);
}
?>
php.exe test.php welcome Ricky Feng
$argv  只在  register_argc_argv = Off  配置打开的情况下可以用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2：</p>
<p>还有一种这样的，提示用户输入，然后获取输入的参数。有点像C语言</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
  	fwrite(STDOUT, "Enter your name: ");
  	$name = trim(fgets(STDIN));
	fwrite(STDOUT, "Hello, $name!");
?>
$>php io.php
Enter your name: test name
Hello, test name!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法3：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
	$options = getopt("f:");
	var_dump($options);
?>
php aaa.php -f "123456"
输出：
 array(1) {
 	["f"]=>
 	string(5) "123456"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_61-什么是-cgi-什么是-fastcgi-php-fpm-fastcgi-nginx-之间是什么关系-重点" tabindex="-1"><a class="header-anchor" href="#_61-什么是-cgi-什么是-fastcgi-php-fpm-fastcgi-nginx-之间是什么关系-重点" aria-hidden="true">#</a> 61.什么是 CGI？什么是 FastCGI？php-fpm，FastCGI，Nginx 之间是什么关系？（重点）</h4>
<p>CGI，通用网关接口，用于WEB服务器和应用程序间的交互，定义输入输出规范，用户的请求通过WEB服务器转发给FastCGI进程，FastCGI进程再调用应用程序进行处理，如php解析器，应用程序的处理结果如html返回给FastCGI，FastCGI返回给Nginx 进行输出。假设这里WEB服务器是Nginx，应用程序是 PHP，而 php-fpm 是管理 FastCGI 的，这也就是 php-fpm，FastCGI，和 Nginx 之间的关系。</p>
<p>FastCGI 用来提高 cgi 程序性能，启动一个master，再启动多个 worker，不需要每次解析 php.ini. 而 php-fpm 实现了 FastCGI 协议，是 FastCGI 的进程管理器，支持平滑重启，可以启动的时候预先生成多个进程。</p>
<h4 id="_61-请简述php在apache下的几种运行方式并加以比较-如何让php在linux-apache下以fast-cgi方式运行" tabindex="-1"><a class="header-anchor" href="#_61-请简述php在apache下的几种运行方式并加以比较-如何让php在linux-apache下以fast-cgi方式运行" aria-hidden="true">#</a> 61.请简述PHP在Apache下的几种运行方式并加以比较？如何让PHP在Linux+Apache下以Fast CGI方式运行？</h4>
<p>答：php在apache有3中运行方式：CGI模式、FastCGI模式、Apache 模块DLL。
比较：
Cgi模式和模块dll加载方式比较：
Cgi模式下，apache调用外部执行器php.exe执行php代码，并将解释后生成的html代码和原html整合，再传递给apache服务器，其在执行时每次都需要重新解析php.ini、重新载入全部dll扩展并重初始化全部数据结构，运行速度非常慢，但因为是外部加载执行器，php代码执行出错不会导致apache崩溃。</p>
<p>在模块化(DLL)中，PHP是与Web服务器一起启动并运行的。所以从某种角度上来说，以apache模块方式安装的 PHP4有着比CGI模式更好的安全性以及更好的执行效率和速度。</p>
<p>Cgi和fastcgi模式比较：
Fastcig是cgi的升级版，Cgi和fastcgi工作模式大抵相同，但fastcgi模式中fastcgi的进程管理器可用来管理cgi解释器，该管理器在cgi解释器完成请求后，会处于挂起状态，用以等待接下来的请求，因为向比较cgi每次都需要重新解析php.ini、重新载入全部dll扩展并重初始化全部数据结构，fastcig模式明显要快很多。</p>
<h4 id="_62-什么是-csrf-攻击-xss-攻击-如何防范-重点" tabindex="-1"><a class="header-anchor" href="#_62-什么是-csrf-攻击-xss-攻击-如何防范-重点" aria-hidden="true">#</a> 62.什么是 CSRF 攻击 ？XSS 攻击？如何防范？（重点）</h4>
<p>​		CSRF，跨站请求伪造，攻击方伪装用户身份发送请求从而窃取信息或者破坏系统。</p>
<p>​		讲述基本原理：用户访问A网站登陆并生成了cookie，再访问B网站，如果A网站存在CSRF漏洞，此时B网站给A网站的请求（此时相当于是用户访问），A网站会认为是用户发的请求，从而B网站就成功伪装了你的身份，因此叫跨站脚本攻击。</p>
<p>​		CSRF防范：</p>
<p>​			1.合理规范api请求方式，GET，POST</p>
<p>​			2.对POST请求加token令牌验证，生成一个随机码并存入session，表单中带上这个随机码，提交的时候服务端进行验证随机码是否相同。</p>
<p>​		XSS，跨站脚本攻击。</p>
<p>​		防范：不相信任何输入，过滤输入。</p>
<h4 id="_63-写一个函数得到header头信息-重点" tabindex="-1"><a class="header-anchor" href="#_63-写一个函数得到header头信息-重点" aria-hidden="true">#</a> 63.写一个函数得到header头信息（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function getHeader()
{
  $headers = [];
  if (function_exists('getallheaders')) {
    	$headers = getallheaders();
  }elseif (function_exists('http_get_request_headers')) {
    	$headers = http_get_request_headers();
  }else{
        foreach ($_SERVER as $key => $value) {
              if(strstr($key, 'HTTP_')) {
                	$newk = ucwords(strtolower(str_replace('_', '-', substr($key, 5))));
                	$headers[$newk] = $value;
              }
        }
  }
  var_dump($headers);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_68-简述如何得到当前执行脚本路径-包括所得到参数-echo-server-script-filename-server-query-string" tabindex="-1"><a class="header-anchor" href="#_68-简述如何得到当前执行脚本路径-包括所得到参数-echo-server-script-filename-server-query-string" aria-hidden="true">#</a> 68.简述如何得到当前执行脚本路径，包括所得到参数：echo $_SERVER['SCRIPT_FILENAME'].&quot;?&quot;.$_SERVER['QUERY_STRING'];</h4>
<h4 id="_70-php使用pdo连接oracle数据库-重点" tabindex="-1"><a class="header-anchor" href="#_70-php使用pdo连接oracle数据库-重点" aria-hidden="true">#</a> 70.php使用Pdo连接oracle数据库？（重点）</h4>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211215114242096.png" alt="image-20211215114242096"></p>
<h4 id="_77-有一个网页地址-比如php开发资源网主页-http-www-phpddt-com-如何得到它的内容-重点" tabindex="-1"><a class="header-anchor" href="#_77-有一个网页地址-比如php开发资源网主页-http-www-phpddt-com-如何得到它的内容-重点" aria-hidden="true">#</a> 77.有一个网页地址, 比如PHP开发资源网主页: http://www.phpddt.com/,如何得到它的内容?（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答:
方法1(对于PHP5及更高版本):
  $readcontents = fopen("http://www.phpddt.com/", "rb");
  $contents = stream_get_contents($readcontents);
  fclose($readcontents);
  echo $contents;
方法2:
  echo file_get_contents("[http://www.phpddt.com](http://www.phpddt.com/) .com/");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_78-写一个函数-尽可能高效的-从一个标准-url-里取出文件的扩展名-重点" tabindex="-1"><a class="header-anchor" href="#_78-写一个函数-尽可能高效的-从一个标准-url-里取出文件的扩展名-重点" aria-hidden="true">#</a> 78.写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>例如: http://www.sina.com.cn/abc/de/fg.php?id=1 需要取出 php 或 .php
答案1:
  function getExt($url){
      $arr = parse_url($url);
      $file = basename($arr['path']);
      $ext = explode(".",$file);
      return $ext[1];
  }
答案2:
  function getExt($url) {
      $url = basename($url);
      $pos1 = strpos($url,".");
      $pos2 = strpos($url,"?");
      if(strstr($url,"?")){
          return substr($url,$pos1 + 1,$pos2 - $pos1 - 1);
      } else {
       	  return substr($url,$pos1);
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_79-写一个函数-算出两个文件的相对路径-重点" tabindex="-1"><a class="header-anchor" href="#_79-写一个函数-算出两个文件的相对路径-重点" aria-hidden="true">#</a> 79.写一个函数，算出两个文件的相对路径（重点）</h4>
<p>​	如 $a = '/a/b/c/d/e.php';
　　$b = '/a/b/12/34/c.php';
　　计算出 $b 相对于 $a 的相对路径应该是 ../../c/d将()添上</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答：
function getRelativePath($a, $b) {  
      $returnPath = array(dirname($b));  
      $arrA = explode('/', $a);  
      $arrB = explode('/', $returnPath[0]);  
      for ($n = 1, $len = count($arrB); $n &lt; $len; $n++) {  
            if ($arrA[$n] != $arrB[$n]) {  
                break;  
            }  
      }  
      if ($len - $n > 0) {  
            $returnPath = array_merge($returnPath, array_fill(1, $len - $n, '..'));  
      }  
    
      $returnPath = array_merge($returnPath, array_slice($arrA, $n));  
  	  return implode('/', $returnPath);  
}  
echo getRelativePath($a, $b); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-server-php-self-中-而链接到当前页面的url记录在预定义变量-server-http-referer-中" tabindex="-1"><a class="header-anchor" href="#在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-server-php-self-中-而链接到当前页面的url记录在预定义变量-server-http-referer-中" aria-hidden="true">#</a> 在PHP中，当前脚本的名称(不包括路径和查询字符串)记录在预定义变量__$_SERVER['PHP_SELF']<strong>中;而链接到当前页面的URL记录在预定义变量</strong>$_SERVER['HTTP_REFERER']__中</h4>
<p>1）addslashes()作用及使用</p>
<p>addslashes()通常用于防止sql注入，它可对通过get，post和cookie传递过来的参数的单引号和双引号已经null前加“\”进行转义</p>
<p>如：如变量$str=$_POST[&quot;str&quot;];的值为：bb' or 1='1。通过addslashes()函数过滤后会变为：bb' or 1='1；</p>
<p>2）htmlspecialchars()作用及使用</p>
<p>htmlspecialchars()也是对字符进行转义，与addslashes（）不同的是htmlspecialchars()是将特殊字符用引用实体替换。</p>
<p>如<script>alert('xss')</script>通过htmlspecialchars()过滤后为&lt;script&gt;alert('xss')&lt;/script&amp;gt</p>
<ol start="3">
<li>htmlentities</li>
</ol>
<p>​    htmlentities把HTML中可以转义的内容转义成HTML Entity。html_entity_decode为htmlentities的decode函数。</p>
<p>mysql_real_escape_string</p>
<p>​    mysql_real_escape_string会调用MySQL的库函数mysql_real_escape_string，对(\x00), (\n), (\r), (), (‘), (\x1a)进行转义，即在前面添加反斜杠()，预防SQL注入。</p>
<p>​    注意你不需要在读取数据库数据的时候调用stripslashes来进行unescape，因为这些反斜杠是在数据库执行SQL的时候添加的，当把数据写入到数据库的时候反斜杠会被移除，所以写入到数据库的内容就是原始数据，并不会在前面多了反斜杠。</p>
<p>​    5. strip_tags</p>
<p>​    strip_tags会过滤掉NUL，HTML和PHP的标签。</p>
<h3 id="php的socket用法" tabindex="-1"><a class="header-anchor" href="#php的socket用法" aria-hidden="true">#</a> php的socket用法：</h3>
<p><strong>一、开启socket</strong></p>
<p>phpinfo();查看是否开启了socket扩展，否则在php.ini中开启。</p>
<p><strong>二、服务器端代码的写法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
error_reporting(E_ALL);
set_time_limit(0);
//ob_implicit_flush();

$address = '127.0.0.1';
$port = 10005;
//创建端口
if( ($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) === false) {
	echo "socket_create() failed :reason:" . socket_strerror(socket_last_error()) . "\n";
}

//绑定
if (socket_bind($sock, $address, $port) === false) {
	echo "socket_bind() failed :reason:" . socket_strerror(socket_last_error($sock)) . "\n";
}

//监听
if (socket_listen($sock, 5) === false) {
	echo "socket_bind() failed :reason:" . socket_strerror(socket_last_error($sock)) . "\n";
}

do {
	//得到一个链接
	if (($msgsock = socket_accept($sock)) === false) {
		echo "socket_accepty() failed :reason:".socket_strerror(socket_last_error($sock)) . "\n";
		break;
	}
	//welcome  发送到客户端
	$msg = "&lt;font color='red'>server send:welcome&lt;/font>&lt;br/>";
	socket_write($msgsock, $msg, strlen($msg));
	echo 'read client message\n';
	$buf = socket_read($msgsock, 8192);
	$talkback = "received message:$buf\n";
	echo $talkback;
	if (false === socket_write($msgsock, $talkback, strlen($talkback))) {
		echo "socket_write() failed reason:" . socket_strerror(socket_last_error($sock)) ."\n";
	} else {
		echo 'send success';
	}
	socket_close($msgsock);
} while(true);
//关闭socket
socket_close($sock);


?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器端需要在cli模式是执行，有可能cli模式下php.ini文件载入的不一样</p>
<p>可以像如下输出</p>
<p><a href="http://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_2.png" target="_blank" rel="noopener noreferrer"><img src="https://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_thumb.png" alt="image"><ExternalLinkIcon/></a></p>
<p>这时候在zhoxh目录下就有个tem.text文件。查看 Configuration File (php.ini) Path =&gt; C:\WINDOWS 。不是我的php.ini 文件，这说明调用的php.ini文件时错误的。这时候我们要指定php.ini文件命令如下</p>
<p><a href="http://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_4.png" target="_blank" rel="noopener noreferrer"><img src="https://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_thumb_1.png" alt="image"><ExternalLinkIcon/></a></p>
<p>注意的是我的php可以直接执行时配置了环境变量。</p>
<p><strong>三、客户端</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
//error_reporting(E_ALL);
echo "&lt;h2>tcp/ip connection &lt;/h2>\n";
$service_port = 10005;
$address = '127.0.0.1';

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
	echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
} else {
	echo "OK. \n";
}

echo "Attempting to connect to '$address' on port '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if($result === false) {
	echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
	echo "OK \n";
}
$in = "HEAD / http/1.1\r\n";
$in .= "HOST: localhost \r\n";
$in .= "Connection: close\r\n\r\n";
$out = "";
echo "sending http head request ...";
socket_write($socket, $in, strlen($in));
echo  "OK\n";

echo "Reading response:\n\n";
while ($out = socket_read($socket, 8192)) {
	echo $out;
}
echo "closeing socket..";
socket_close($socket);
echo "ok .\n\n";
 
执行结果： 
server:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_6.png" target="_blank" rel="noopener noreferrer"><img src="https://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_thumb_2.png" alt="image"><ExternalLinkIcon/></a></p>
<p>client:</p>
<p><a href="http://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_8.png" target="_blank" rel="noopener noreferrer"><img src="https://images.cnblogs.com/cnblogs_com/phpzxh/WindowsLiveWriter/phpsocket_E8E0/image_thumb_3.png" alt="image"><ExternalLinkIcon/></a></p>
<h4 id="php的curl用法" tabindex="-1"><a class="header-anchor" href="#php的curl用法" aria-hidden="true">#</a> php的curl用法：</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$MyAES = new MyAES();
        $jiaRes = $MyAES->desEncryptStr($data,"1102130405061708");
        $header[] = "Content-type: text/xml;charset=UTF-8";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,REURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jiaRes);
        $aa = curl_exec($ch);
        // grab URL, and print
        if(curl_errno($ch)){
            print curl_error($ch);
        }
        curl_close($ch);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>一，curl

cURL 是一个用来传输数据的工具，支持多种协议，如在 Linux 下用 curl 命令行可以发送各种 HTTP 请求。PHP 的 cURL 是一个底层的库，它能根据不同协议跟各种服务器通讯，HTTP 协议是其中一种。

post请求

public static function http_post($url,$data_string,$timeout = 60)
{
//curl验证成功
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS,$data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 跳过证书检查
curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
'Content-Type: application/json',
'Content-Length: ' . strlen($data_string)
));

 
$result = curl_exec($ch);
if (curl_errno($ch)) {
	print curl_error($ch);
}

curl_close($ch);
	return $result;
}

GET请求
1,curl请求http

$url = '//www.jb51.net';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($curl);
curl_close($curl);
var_dump($data);

2,curl请求https

$url = 'https://www.jb51.net';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);//这个是重点。
$data = curl_exec($curl);
curl_close($curl);
var_dump($data);

/**当请求https的数据时，会要求证书，这时候，加上下面这两个参数，规避ssl的证书检查

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // https请求 不验证证书和hosts

**/

二，stream流的方式

stream_context_create 作用：创建并返回一个文本数据流并应用各种选项，可用于 fopen(), file_get_contents() 等过程的超时设置、代理服务器、请求方式、头信息设置的特殊过程。

**详细介绍地址www.jb51.net/article/68891.htm

post 例子

function post($url, $data)
{
  $postdata = http_build_query(
    $data
  );//数组转化为路径格式
  $opts = array('http' =>
           array(
             'method' => 'POST',
             'header' => 'Content-type: application/x-www-form-urlencoded',
             'content' => $postdata
           )
  );
  $context = stream_context_create($opts);
  $result = file_get_contents($url, false, $context);
  return $result;
}

三，socket方式
使用套接字建立连接，拼接 HTTP 报文发送数据进行 HTTP 请求。

一个 GET 方式的例子：

&lt;?php
$fp = fsockopen("www.example.com", 80, $errno, $errstr, 30);
if (!$fp) {
  echo "$errstr ($errno)&lt;br />\n";
} else {
  $out = "GET / HTTP/1.1\r\n";
  $out .= "Host: www.example.com\r\n";
  $out .= "Connection: Close\r\n\r\n";
  fwrite($fp, $out);
  while (!feof($fp)) {
    echo fgets($fp, 128);
  }
  fclose($fp);
}

?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-opcache-opcode-apc和apcu的区别" tabindex="-1"><a class="header-anchor" href="#_5-opcache-opcode-apc和apcu的区别" aria-hidden="true">#</a> 5.opcache，opcode，apc和apcu的区别</h3>
<p>​		opcode</p>
<p>​		opcode是php解析器生成的操作码，类似java的字节码，main.class文件。</p>
<p>​		opcache</p>
<p>​		opcache是php的扩展，是一个实现将PHP字节码（OPCode）缓存到共享内存中到扩展。缓存字节码的好处就是减少CPU对PHP程序的加载和解析。</p>
<p>​		APC（可选的PHP缓存）</p>
<p>​		APC也是用来缓存PHP字节码的扩展。但是现在主要使用的是APCu和OPcache。</p>
<h3 id="_8-谈谈web服务器和数据库服务器的通信" tabindex="-1"><a class="header-anchor" href="#_8-谈谈web服务器和数据库服务器的通信" aria-hidden="true">#</a> 8.谈谈web服务器和数据库服务器的通信？</h3>
<p>​		Web服务器与数据库服务器的数据通信一般基于标准的TCP，即便它们位于同一台物理主机也是如此。其通信连接的建立和释放涉及代表一段内核高速缓冲区的文件描述符的创建和销毁，这需要不少的时间开销，包括系统调用导致的内核态切换以及某些异步阻塞I/O模型采用的文件描述符队列扫描机制。所以，频繁的数据库连接和释放无疑将导致数据访问等待时间的加长，这段时间浪费得毫无意义。</p>
<p>使用数据库持久连接有效地解决了这一难题，它包括不同程度上的持久化，本质的区别在于持久连接的应用范围和生命周期，比如某个进程内部的全局数据库连接，供进程内所有计算任务共享，在这个进程终止后便被释放；或者在某个动态内容的执行周期内，代码层面的持久连接对象，在动态内容计算结束后便不复存在；还有跨进程的数据库连接池，保存多个持久连接供应用程序重复使用。在这些采用数据库持久连接的应用设计中，同时还要注意保证数据访问的线程安全性。</p>
<h3 id="_13-数据从主机进入线路会经过哪些环节" tabindex="-1"><a class="header-anchor" href="#_13-数据从主机进入线路会经过哪些环节" aria-hidden="true">#</a> 13.数据从主机进入线路会经过哪些环节？</h3>
<p>应用程序首先得将要发送的数据写入该进程的内存地址空间中</p>
<p>应用程序通过系统函数库接口（比如send函数）向内核发出系统调用，由系统内核来进行随后的操作，它将这些数据从用户态内存区复制到由内核维护的一段称为内核缓冲区的内存地址空间。这块地址空间的大小通常是有限的，所有要发送的数据将以队列的形式进入这里，这些数据可能来自于多个进程，每块数据都有一定的额外记号来标记它们的去向。如果要发送的数据比较多，那么该系统调用需要多次进行，每次复制一定的数据大小，这个大小取决于网络数据包的大小以及内核缓冲区的承载能力。重复的系统调用体现在应用编程层面重复调用send函数。</p>
<p>当数据写入内核缓冲区后，内核会通知网卡控制器前来取数据，同时CPU转而处理其他进程。网卡控制器接到通知后，便根据网卡驱动信息得知对应内核缓冲区的地址，将要发送的数据复制到网卡的缓冲区中。注意在以上一系列的数据复制中，数据始终按照连接两端设备的内部总线宽度来复制，也就是字节的整数倍，比如在32位总线的主机系统中，采用PCI-X总线接口的网卡一般使用32位总线宽度，那么从内核缓冲区到网卡缓冲区的数据复制过程中，任何时刻只能复制32位的比特信息。</p>
<p>4.网卡缓冲区中的数据需要发送到线路中，同时释放缓冲区来获取更多要发送的数据。但是我们知道，只有二进制的数字信号才可以在线路中传输，所以这时候需要对数据进行字节到位的转换，这种转换不难想象，就是将数据的每个位按照顺序依次发出。</p>
<p>5.发送时，网卡会使用内部特定的物理装置来生成可以传播的各种信号，比如在使用铜线线路时，网卡会根据“0”和“1”的变化产生不同的电信号；而使用光纤线路时，网卡会产生不同的光信号。</p>
<p>每时每刻的发送速度都是传输协议根据接收方的接收能力不断调整的，比如通过数据链路层或者传输层的滑动窗口技术等流量控制机制进行速度的调整。</p>
<h3 id="_18-假如100个用户同时向服务器分别进行10次请求-与1个用户向服务器连续进行1000次请求-效果一样吗-也就是说给服务器带来的压力一样吗" tabindex="-1"><a class="header-anchor" href="#_18-假如100个用户同时向服务器分别进行10次请求-与1个用户向服务器连续进行1000次请求-效果一样吗-也就是说给服务器带来的压力一样吗" aria-hidden="true">#</a> 18.假如100个用户同时向服务器分别进行10次请求，与1个用户向服务器连续进行1000次请求，效果一样吗？也就是说给服务器带来的压力一样吗？</h3>
<p>虽然看起来服务器都需要连续处理1000 个请求，其实关键的区别就在于，是否真的“连续”。首先有一点需要明白，对于压力测试中提到的每一个用户，连续发送请求实际上是指在发送一个请求并接收到响应数据后再发送下一个请求。这样一来，从微观层面来看，1 个用户向服务器连续进行1000 次请求的过程中，任何时刻服务器的网卡接收缓冲区中只有来自该用户的1个请求，而100个用户同时向服务器分别进行10次请求的过程中，服务器网卡接收缓冲区中最多有100个等待处理的请求，显然这时候服务器的压力更大。</p>
<h3 id="_21-dma技术原理" tabindex="-1"><a class="header-anchor" href="#_21-dma技术原理" aria-hidden="true">#</a> 21.DMA技术原理？</h3>
<p><a href="http://www.elecfans.com/tags/dma/" target="_blank" rel="noopener noreferrer">DMA<ExternalLinkIcon/></a>技术是Direct Memory Access的缩写。其意思是“<a href="http://www.hqchip.com/app/724" target="_blank" rel="noopener noreferrer">存储器<ExternalLinkIcon/></a>直接访问”。它是指一种高速的数据传输操作，允许在外部设备和存储器之间直接读写数据，既不通过<a href="http://m.elecfans.com/article/645277.html" target="_blank" rel="noopener noreferrer">CPU<ExternalLinkIcon/></a>，也不需要CPU干预。</p>
<p>​		整个数据传输操作在一个称为“DMA控制器”的控制下进行的。CPU除了在数据传输开始和结束时作一点处理外，在传输过程中CPU可以进行其它的工作。这样，在大部分时间里，CPU和输入输出都处在并行操作。因此，使整个<a href="http://www.hqchip.com/app/873" target="_blank" rel="noopener noreferrer">计算机<ExternalLinkIcon/></a>系统的效率大大提高。</p>
<h4 id="_22-父进程创建子进程后-会做哪些事" tabindex="-1"><a class="header-anchor" href="#_22-父进程创建子进程后-会做哪些事" aria-hidden="true">#</a> 22.父进程创建子进程后，会做哪些事？</h4>
<p>子进程会把父进程的地址空间的所有数据复制到自己的地址空间中，完全继承父进程的所有上下文信息，他们之间可以通信，但是不相互依赖。</p>
<h1 id="http协议部分" tabindex="-1"><a class="header-anchor" href="#http协议部分" aria-hidden="true">#</a> http协议部分</h1>
<h3 id="响应状态码" tabindex="-1"><a class="header-anchor" href="#响应状态码" aria-hidden="true">#</a> 响应状态码：</h3>
<p>100 Continue ：表明到目前为止都很正常，客户端可以继续发送请求或者忽略这个响应。</p>
<ol>
<li>200 OK</li>
<li>204 No Content ：请求已经成功处理，但是返回的响应报文不包含实体的主体部分。一般在只需要从客户端往服务器发送信息，而不需要返回数据时使用。</li>
<li>206 Partial Content ：表示客户端进行了范围请求，响应报文包含由 Content-Range 指定范围的实体内容。</li>
</ol>
<p>3XX 重定向</p>
<ol>
<li>
<p>301 Moved Permanently ：永久性重定向；</p>
</li>
<li>
<p>302 Found ：临时性重定向；</p>
</li>
<li>
<p>303 See Other ：和 302 有着相同的功能，但是 303 明确要求客户端应该采用 GET 方法获取资源。</p>
</li>
<li>
<p>304 Not Modified ：如果请求报文首部包含一些条件，例如：If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since，如果不满足条件，则服务器会返回 304 状态码。</p>
</li>
<li>
<p>307 Temporary Redirect ：临时重定向，与 302 的含义类似，但是 307 要求浏览器不会把重定向请求的 POST 方法改成 GET 方法。</p>
</li>
</ol>
<p>4XX 客户端错误</p>
<ol>
<li>
<p>400 Bad Request ：请求报文中存在语法错误。</p>
</li>
<li>
<p>401 Unauthorized ：该状态码表示发送的请求需要有认证信息（BASIC 认证、DIGEST 认证）。如果之前已进行过一次请求，则表示用户认证失败。</p>
</li>
<li>
<p>403 Forbidden ：请求被拒绝。</p>
</li>
<li>
<p>404 Not Found</p>
</li>
</ol>
<p>5XX 服务器错误</p>
<ol>
<li>
<p>500 Internal Server Error ：服务器正在执行请求时发生错误；</p>
</li>
<li>
<p>503 Service Unavailable ：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。</p>
</li>
</ol>
<p>502  网关错误，bad  gatway</p>
<p><strong>2.408 Request Timeout和504 Gateway Timeout的区别</strong></p>
<p>408是说请求超时，就是建立连接之后再约定的时间内客户端没有发送请求到客户端到服务端。本质上原因在于客户端或者网络拥塞。504是网关超时，是说代理服务器把客户端请求转发到应用服务器后再约定的时间内没有收到应用服务器的响应。本质上原因在于服务端的响应过慢，也有可能是网络问题。</p>
<h3 id="_3、http-方法有哪些" tabindex="-1"><a class="header-anchor" href="#_3、http-方法有哪些" aria-hidden="true">#</a> 3、HTTP 方法有哪些？</h3>
<p>3客户端发送的 请求报文 第一行为请求行，包含了方法字段。</p>
<ol>
<li>GET：获取资源，当前网络中绝大部分使用的都是 GET；</li>
<li>HEAD：获取报文首部，和 GET 方法类似，但是不返回报文实体主体部分；</li>
<li>POST：传输实体主体</li>
<li>PUT：上传文件，由于自身不带验证机制，任何人都可以上传文件，因此存在安全性问题，一般不使用该方法。</li>
<li>PATCH：对资源进行部分修改。PUT 也可以用于修改资源，但是只能完全替代原始资源，PATCH 允许部分修改。</li>
<li>OPTIONS：查询指定的 URL 支持的方法；因为并不是所有的服务器都支持规定的方法，为了安全有些服务器可能会禁止掉一些方法例如DELETE、PUT等。那么OPTIONS就是用来询问服务器支持的方法。</li>
<li>CONNECT：要求在与代理服务器通信时建立隧道。使用 SSL（Secure Sockets Layer，安全套接层）和 TLS（Transport Layer Security，传输层安全）协议把通信内容加密后经网络隧道传输。</li>
<li>TRACE：追踪路径。服务器会将通信路径返回给客户端。发送请求时，在 Max-Forwards 首部字段中填入数值，每经过一个服务器就会减 1，当数值为 0 时就停止传输。通常不会使用 TRACE，并且它容易受到 XST 攻击（Cross-Site Tracing，跨站追踪）。</li>
</ol>
<p>安全和幂等
安全：GET、HEAD（只读）
不安全：POST、PUT、DELETE（修改服务器资源和增删数据）
幂等：GET、HEAD、PUT
非幂等：POST</p>
<h3 id="_9、谈下-http-1-0-和-1-1、1-2-的主要变化" tabindex="-1"><a class="header-anchor" href="#_9、谈下-http-1-0-和-1-1、1-2-的主要变化" aria-hidden="true">#</a> 9、谈下 HTTP 1.0 和 1.1、1.2 的主要变化？</h3>
<p>HTTP1.1 的主要变化：</p>
<ol>
<li>
<p>HTTP1.0 经过多年发展，在 1.1 提出了改进。首先是提出了长连接，HTTP 可以在一次 TCP 连接中不断发送请求。</p>
</li>
<li>
<p>然后 HTTP1.1 支持只发送 header 而不发送 body。原因是先用 header 判断能否成功，再发数据，节约带宽，事实上，post 请求默认就是这样做的。</p>
</li>
<li>
<p>HTTP1.1 的 host 字段。由于虚拟主机可以支持多个域名，所以一般将域名解析后得到 host。</p>
</li>
</ol>
<p>HTTP2.0 的主要变化：</p>
<ol>
<li>HTTP2.0 支持多路复用，同一个连接可以并发处理多个请求，方法是把 HTTP数据包拆为多个帧，并发有序的发送，根据序号在另一端进行重组，而不需要一个个 HTTP请求顺序到达；</li>
<li>HTTP2.0 支持服务端推送，就是服务端在 HTTP 请求到达后，除了返回数据之外，还推送了额外的内容给客户端；</li>
<li>HTTP2.0 压缩了请求头，同时基本单位是二进制帧流，这样的数据占用空间更少；</li>
<li>HTTP2.0 适用于 HTTPS 场景，因为其在 HTTP和 TCP 中间加了一层 SSL 层。</li>
</ol>
<h3 id="五-rpc比http请求快的原因" tabindex="-1"><a class="header-anchor" href="#五-rpc比http请求快的原因" aria-hidden="true">#</a> 五，RPC比HTTP请求快的原因</h3>
<p>(1)http使用http协议，rpc使用tcp协议，比http少了应用层，表示层，会话层，这3层
(2)rpc使用长连接，当网络通信使用tcp协议时，在真正的读写操作前，需要完成3次握手，来建立连接。当读写完成时，需要四次握手来释放连接，每个连接的建立和释放都是需要资源和时间的，所以长连接比短连接
更节省资源，效率更高</p>
<p>第一层：物理层
第二层：数据链路层 802.2、802.3ATM、HDLC、FRAME RELAY
第三层：网络层 IP、IPX、ARP、APPLETALK、ICMP
第四层：传输层 TCP、UDP、SPX
第五层：会话层 RPC、SQL、NFS 、X WINDOWS、ASP
第六层：表示层 ASCLL、PICT、TIFF、JPEG、 MIDI、MPEG
第七层：应用层 HTTP,FTP,SNMP等</p>
<p>tcp的keep-alive和http人Keep-alive
（1） Tcp的keep-alive是检查当前tcp是否存活，表现就是当一个连接在一段时间没有数据传输是，一方会发一个心跳包，果对方有回包则表明当前连接有效，继续监控。</p>
<p>（2） http的Keep-alive是让一个tcp连接活久点。在浏览器设置</p>
<h3 id="_10、https-的工作过程" tabindex="-1"><a class="header-anchor" href="#_10、https-的工作过程" aria-hidden="true">#</a> 10、HTTPS 的工作过程？</h3>
<ol>
<li>
<p>客户端发送自己支持的加密规则给服务器，代表告诉服务器要进行连接了；</p>
</li>
<li>
<p>服务器从中选出一套加密算法和 hash 算法以及自己的身份信息（地址等）以证书的形式发送给浏览器，证书中包含服务器信息，加密公钥，证书的办法机构；</p>
</li>
<li>
<p>客户端收到网站的证书之后要做下面的事情：</p>
</li>
</ol>
<p>3.1 验证证书的合法性；</p>
<p>3.2 果验证通过证书，浏览器会生成一串随机数，并用证书中的公钥进行加密；</p>
<p>3.3 用约定好的 hash 算法计算握手消息，然后用生成的密钥进行加密，然后一起发送给服务器。</p>
<ol start="4">
<li>服务器接收到客户端传送来的信息，要做下面的事情：</li>
</ol>
<p>4.1 用私钥解析出密码，用密码解析握手消息，验证 hash 值是否和浏览器发来的一致；</p>
<p>4.2 使用密钥加密消息；</p>
<ol start="5">
<li>如果计算法 hash 值一致，握手成功。</li>
</ol>
<p>缺点：</p>
<ol>
<li>
<p>HTTPS 协议握手阶段比较费时，会使页面的加载时间延长近 50%，增加 10% 到 20% 的耗电；</p>
</li>
<li>
<p>HTTPS 连接缓存不如 HTTP 高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；</p>
</li>
<li>
<p>SSL 证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用；</p>
</li>
<li>
<p>SSL 证书通常需要绑定 IP，不能在同一 IP 上绑定多个域名，IPv4 资源不可能支撑这个消耗；</p>
</li>
<li>
<p>HTTPS 协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的，SSL 证书的信用链体系并不安全，特别是在某些国家可以控制 CA 根证书的情况下，中间人攻击一样可行。</p>
</li>
</ol>
<h3 id="_14、什么是数字证书" tabindex="-1"><a class="header-anchor" href="#_14、什么是数字证书" aria-hidden="true">#</a> 14、什么是数字证书？</h3>
<p>对称加密中，双方使用公钥进行解密。虽然数字签名可以保证数据不被替换，但是数据是由公钥加密的，如果公钥也被替换，则仍然可以伪造数据，因为用户不知道对方提供的公钥其实是假的。所以为了保证发送方的公钥是真的，CA 证书机构会负责颁发一个证书，里面的公钥保证是真的，用户请求服务器时，服务器将证书发给用户，这个证书是经由系统内置证书的备案的。</p>
<h3 id="_15、什么是对称加密和非对称加密" tabindex="-1"><a class="header-anchor" href="#_15、什么是对称加密和非对称加密" aria-hidden="true">#</a> 15、什么是对称加密和非对称加密？</h3>
<p>对称密钥加密是指加密和解密使用同一个密钥的方式，这种方式存在的最大问题就是密钥发送问题，即如何安全地将密钥发给对方。</p>
<p>非对称加密指使用一对非对称密钥，即：公钥和私钥，公钥可以随意发布，但私钥只有自己知道。发送密文的一方使用对方的公钥进行加密处理，对方接收到加密信息后，使用自己的私钥进行解密。</p>
<p>由于非对称加密的方式不需要发送用来解密的私钥，所以可以保证安全性。但是和对称加密比起来，它非常的慢，所以我们还是要用对称加密来传送消息，但对称加密所使用的密钥我们可以通过非对称加密的方式发送出去。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211223143218458.png" alt="image-20211223143218458"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GET /wxisme HTTP/1.1  
Host: www.cnblogs.com 
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.0; zh-CN; rv:1.8.1) Gecko/20061010 Firefox/2.0  
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5  
Accept-Language: en-us,zh-cn;q=0.7,zh;q=0.3  
Accept-Encoding: gzip,deflate  
Accept-Charset: gb2312,utf-8;q=0.7,*;q=0.7  
Keep-Alive: 300  
Proxy-Connection: keep-alive  
Cookie: ASP.NET_SessionId=ey5drq45lsomio55hoydzc45
Cache-Control: max-age=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.响应报文</strong></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211223143302882.png" alt="image-20211223143302882"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>HTTP/1.1 200 OK
Date: Tue, 12 Jul 2016 21:36:12 GMT
Content-Length: 563
Content-Type: text/html

&lt;html>
    &lt;body>
    Hello http!
    &lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="tcp知识" tabindex="-1"><a class="header-anchor" href="#tcp知识" aria-hidden="true">#</a> TCP知识：</h1>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217174129181.png" alt="image-20211217174129181"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217174405836.png" alt="image-20211217174405836"></p>
<p>tcp:首部20-60个字节，一对一，面向连接，安全，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制，在数据传完后，还会断开连接用来节约系统资源），这难以避免增加了许多开销，如确认，流量控制，计时器以及连接管理等。这不仅使协议数据单元的首部增大很多，还要占用许多处理机资源。对应应用层协议有：http,smtp,pop3, ftp,telnet</p>
<p>udp: 无连接，一对多或者多对一，多对多，首部8个字节，面向报文，没有拥塞控制，网络拥塞不会使主机的发送速率降低,对应应用层协议：dns, snmp tftp</p>
<h3 id="_9、详细说下-tcp-三次握手的过程" tabindex="-1"><a class="header-anchor" href="#_9、详细说下-tcp-三次握手的过程" aria-hidden="true">#</a> 9、详细说下 TCP 三次握手的过程？</h3>
<ol>
<li>三次握手</li>
</ol>
<p>TCP 建立连接的过程叫做握手，握手需要在客户和服务器之间交换三个 TCP 报文段。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217174437173.png" alt="image-20211217174437173"></p>
<p>最初客户端和服务端都处于 CLOSED(关闭) 状态。本例中 A（Client） 主动打开连接，B（Server） 被动打开连接。</p>
<p>一开始，B 的 TCP 服务器进程首先创建传输控制块TCB，准备接受客户端进程的连接请求。然后服务端进程就处于 LISTEN(监听) 状态，等待客户端的连接请求。如有，立即作出响应。</p>
<p>第一次握手：A 的 TCP 客户端进程也是首先创建传输控制块 TCB。然后，在打算建立 TCP 连接时，向 B 发出连接请求报文段，这时首部中的同步位 SYN=1，同时选择一个初始序号 seq = x。TCP 规定，SYN 报文段（即 SYN = 1 的报文段）不能携带数据，但要消耗掉一个序号。这时，TCP 客户进程进入 SYN-SENT（同步已发送）状态。</p>
<p>第二次握手：B 收到连接请求报文后，如果同意建立连接，则向 A 发送确认。在确认报文段中应把 SYN 位和 ACK 位都置 1，确认号是 ack = x + 1，同时也为自己选择一个初始序号 seq = y。请注意，这个报文段也不能携带数据，但同样要消耗掉一个序号。这时 TCP 服务端进程进入 SYN-RCVD（同步收到）状态。</p>
<p>第三次握手：TCP 客户进程收到 B 的确认后，还要向 B 给出确认。确认报文段的 ACK 置 1，确认号 ack = y +  1，而自己的序号 seq = x + 1。这时 ACK 报文段可以携带数据。但如果不携带数据则不消耗序号，这种情况下，下一个数据报文段的序号仍是 seq = x + 1。这时，TCP 连接已经建立，A 进入 ESTABLISHED（已建立连接）状态。</p>
<p>TCP首部有6个标志比特。</p>
<p>SYN是其中之一，它是个同步序号，当TCP连接建立时会把SYN置1。</p>
<p>一般请求端会发送一个报文，其中包含这样的字段SYN 1415531521：1415531521(0)。</p>
<p>然后服务端收到后会返回一个ack 1415531522，ack表示确认收到。
SYN，ACK是标志位。</p>
<p>SEQ，AN是数据包序号。</p>
<p>SYN=1, ACK=0, SEQ=200 的意思是：发送的为一个SYN请求，发送端的初始数据包序号为200</p>
<p>SYN=1, ACK=1, SEQ=4800, AN=201 的意思是：接收端的确认信息，且接收端的初始数据包。序号为4800。</p>
<h3 id="_10、三次握手与四次挥手" tabindex="-1"><a class="header-anchor" href="#_10、三次握手与四次挥手" aria-hidden="true">#</a> 10、三次握手与四次挥手</h3>
<p>(1). 三次握手(我要和你建立链接，你真的要和我建立链接么，我真的要和你建立链接，成功)：</p>
<p>第一次握手：Client将标志位SYN置为1，随机产生一个值seq=J，并将该数据包发送给Server，Client进入SYN_SENT状态，等待Server确认。</p>
<p>第二次握手：Server收到数据包后由标志位SYN=1知道Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，并将该数据包发送给Client以确认连接请求，Server进入SYN_RCVD状态。</p>
<p>第三次握手：Client收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给Server，Server检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client与Server之间可以开始传输数据了。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217181508730.png" alt="image-20211217181508730"></p>
<p>(2). 四次挥手(我要和你断开链接；好的，断吧。我也要和你断开链接；好的，断吧)：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217181519476.png" alt="image-20211217181519476"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/774f5f51373635983fbf84da29e2dae3.png" alt="774f5f51373635983fbf84da29e2dae3.png"></p>
<p>第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。</p>
<p>第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。此时TCP链接处于半关闭状态，即客户端已经没有要发送的数据了，但服务端若发送数据，则客户端仍要接收。</p>
<p>第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。</p>
<p>第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。</p>
<p>客户端需要等待足够长的时间，具体来说，是 2 个 MSL(Maximum Segment Lifetime，报文最大生存时间), 在这段时间内如果客户端没有收到服务端的重发请求，那么表示 ACK 成功到达，挥手结束，否则客户端重发 ACK。</p>
<p>如果不等待，客户端直接跑路，当服务端还有很多数据包要给客户端发，且还在路上的时候，若客户端的端口此时刚好被新的应用占用，那么就接收到了无用数据包，造成数据包混乱。所以，最保险的做法是等服务器发来的数据包都死翘翘再启动新的应用。</p>
<h5 id="那-照这样说一个-msl-不就不够了吗-为什么要等待-2-msl" tabindex="-1"><a class="header-anchor" href="#那-照这样说一个-msl-不就不够了吗-为什么要等待-2-msl" aria-hidden="true">#</a> 那，照这样说一个 MSL 不就不够了吗，为什么要等待 2 MSL?</h5>
<p>1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端
1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达
这就是等待 2MSL 的意义。</p>
<p>TCP端口状态说明ESTABLISHED、TIME_WAIT</p>
<p>1、LISTENING状态
FTP服务启动后首先处于侦听（LISTENING）状态。</p>
<p>2、ESTABLISHED状态
ESTABLISHED的意思是<strong>建立连接。表示两台机器正在通信</strong>。</p>
<p>3、CLOSE_WAIT</p>
<p>对方主动关闭连接或者网络异常导致连接中断，这时我方的状态会变成CLOSE_WAIT 此时我方要调用close()来使得连接正确关闭</p>
<p>4、TIME_WAIT</p>
<p><strong>我方主动调用close()断开连接，收到对方确认后状态变为TIME_WAIT</strong>。TCP协议规定TIME_WAIT状态会一直持续2MSL(即两倍的分 段最大生存期)，以此来确保旧的连接状态不会对新连接产生影响。处于TIME_WAIT状态的连接占用的资源不会被内核释放，所以作为服务器，在可能的情 况下，尽量不要主动断开连接，以减少TIME_WAIT状态造成的资源浪费。</p>
<p>5、SYN_SENT状态</p>
<p>SYN_SENT状态表示请求连接，当你要访问其它的计算机的服务时首先要发个同步信号给该端口，此时状态为SYN_SENT，如果连接成功了就变为 ESTABLISHED，此时SYN_SENT状态非常短暂。但如果发现SYN_SENT非常多且在向不同的机器发出，那你的机器可能中了冲击波或震荡波 之类的病毒了。这类病毒为了感染别的计算机，它就要扫描别的计算机，在扫描的过程中对每个要扫描的计算机都要发出了同步请求，这也是出现许多 SYN_SENT的原因。</p>
<p>根据TCP协议定义的3次握手断开连接规定,发起socket主动关闭的一方 socket将进入TIME_WAIT状态,TIME_WAIT状态将持续2个MSL(Max Segment Lifetime),在Windows下默认为4分钟,即240秒,TIME_WAIT状态下的socket不能被回收使用. 具体现象是对于一个处理大量短连接的服务器,如果是由服务器主动关闭客户端的连接,将导致服务器端存在大量的处于TIME_WAIT状态的socket, 甚至比处于Established状态下的socket多的多,严重影响服务器的处理能力,甚至耗尽可用的socket,停止服务. TIME_WAIT是TCP协议用以保证被重新分配的socket不会受到之前残留的延迟重发报文影响的机制,是必要的逻辑保证.</p>
<p>TCP协议中有TIME_WAIT这个状态
<strong>主要有两个原因</strong>
1。防止上一次连接中的包，迷路后重新出现，影响新连接（经过2MSL，上一次连接中所有的重复包都会消失）
2。可靠的关闭TCP连接。在主动关闭方发送的最后一个 ack(fin) ，有可能丢失，这时被动方会重新发
fin, 如果这时主动方处于 CLOSED 状态 ，就会响应 rst 而不是 ack。所以主动方要处于 TIME_WAIT 状态，而不能是 CLOSED 。</p>
<h3 id="_11-2-为什么断开连接需要四次" tabindex="-1"><a class="header-anchor" href="#_11-2-为什么断开连接需要四次" aria-hidden="true">#</a> 11.2.为什么断开连接需要四次</h3>
<p>根据状态流程图，我们可以看出服务端响应断开连接的请求时，其ACK和FIN包并不是一起发送给客户端的，因为第一次由客户端-&gt;服务端的FIN信号表示的是客户端想要断开连接。服务端先给出ACK确认信号，表示已经收到FIN请求，然后当自己也可以结束的时候，再次发送FIN信号，所以需要挥手交互需要四次。</p>
<h3 id="_11-3-四次挥手主动方为什么需要等待2msl" tabindex="-1"><a class="header-anchor" href="#_11-3-四次挥手主动方为什么需要等待2msl" aria-hidden="true">#</a> 11.3.四次挥手主动方为什么需要等待2MSL</h3>
<p>主动关闭方在收到被动一方发出的FIN信号，会立马发送ACK确认信号，之后状态转变为TIME_WAIT，等待2MSL后才会进入CLOSE状态。</p>
<p><strong>MSL</strong>表示最大报文生存周期，任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。主动关闭方需要等待2MSL是为了，防止最后一次ACK没有被正确的传给被动方，被动关闭方会再次发送第三次的FIN信号。</p>
<h3 id="_12、server-端收到-client-端的-syn-后-为什么还要传回-syn" tabindex="-1"><a class="header-anchor" href="#_12、server-端收到-client-端的-syn-后-为什么还要传回-syn" aria-hidden="true">#</a> 12、Server 端收到 Client 端的 SYN 后，为什么还要传回 SYN？</h3>
<p>接收端传回发送端所发送的 SYN 是为了告诉发送端，我接收到的信息确实就是你所发送的信号了。</p>
<p>SYN 是 TCP / IP 建立连接时使用的握手信号。在客户机和服务器之间建立正常的 TCP 网络连接时，客户机首先发出一个 SYN 消息，服务器使用 SYN-ACK 应答表示接收到了这个消息，最后客户机再以 ACK(Acknowledgement[汉译：确认字符，在数据通信传输中，接收站发给发送站的一种传输控制字符。它表示确认发来的数据已经接受无误]）消息响应。这样在客户机和服务器之间才能建立起可靠的 TCP 连接，数据才可以在客户机和服务器之间传递。</p>
<h3 id="tcp-ip-报文头部结构" tabindex="-1"><a class="header-anchor" href="#tcp-ip-报文头部结构" aria-hidden="true">#</a> TCP/IP 报文头部结构</h3>
<p>TCP（Transmission Control Protocol）传输控制协议是一种面向连接的、可靠的、基于字节流的传输层协议</p>
<p>TCP报文格式：</p>
<p><img src="https://static.coonote.com/v2-2aa192d35fb785d6ff699035d060dc47_1440w.jpg" alt="TCP报文格式"></p>
<p><img src="https://static.coonote.com/20180520124426161.jpg" alt="TCP报文格式"></p>
<p>TCP报文各段说明：</p>
<ul>
<li>源端口和目的端口:　　各占 2 字节.端口是传输层与应用层的服务接口.传输层的复用和分用功能都要通过端口才能实现</li>
<li>序号:　　占 4 字节.TCP 连接中传送的数据流中的每一个字节都编上一个序号.序号字段的值则指的是本报文段所发送的数据的第一个字节的序号</li>
<li>确认号:　　占 4 字节,是期望收到对方的下一个报文段的数据的第一个字节的序号</li>
<li>数据偏移/首部长度:　　占 4 位,它指出 TCP 报文段的数据起始处距离 TCP 报文段的起始处有多远.“数据偏移”的单位是 32 位字(以 4 字节为计算单位)</li>
<li>保留:　　占 6 位,保留为今后使用,但目前应置为 0</li>
<li>紧急URG:　　当 URG=1 时,表明紧急指针字段有效.它告诉系统此报文段中有紧急数据,应尽快传送(相当于高优先级的数据)</li>
<li>确认ACK:　　只有当 ACK=1 时确认号字段才有效.当 ACK=0 时,确认号无效</li>
<li>PSH(PuSH):　　接收 TCP 收到 PSH = 1 的报文段,就尽快地交付接收应用进程,而不再等到整个缓存都填满了后再向上交付</li>
<li>RST (ReSeT):　　当 RST=1 时,表明 TCP 连接中出现严重差错（如由于主机崩溃或其他原因）,必须释放连接,然后再重新建立运输连接</li>
<li>同步 SYN:　　同步 SYN = 1 表示这是一个连接请求或连接接受报文</li>
<li>终止 FIN:　　用来释放一个连接.FIN=1 表明此报文段的发送端的数据已发送完毕,并要求释放运输连接</li>
<li>检验和:　　占 2 字节.检验和字段检验的范围包括首部和数据这两部分.在计算检验和时,要在 TCP 报文段的前面加上 12 字节的伪首部</li>
<li>紧急指针:　　占 16 位,指出在本报文段中紧急数据共有多少个字节（紧急数据放在本报文段数据的最前面）</li>
<li>选项:　　长度可变.TCP 最初只规定了一种选项,即最大报文段长度 MSS.MSS 告诉对方 TCP：“我的缓存所能接收的报文段的数据字段的最大长度是 MSS 个字节.” [MSS(Maximum Segment Size)是 TCP 报文段中的数据字段的最大长度.数据字段加上 TCP 首部才等于整个的 TCP 报文段]</li>
<li>填充:　　这是为了使整个首部长度是 4 字节的整数倍</li>
<li>其他选项:</li>
</ul>
<ol>
<li>窗口扩大:　　占 3 字节,其中有一个字节表示移位值 S.新的窗口值等于TCP 首部中的窗口位数增大到(16 + S),相当于把窗口值向左移动 S 位后获得实际的窗口大小</li>
<li>时间戳:　　占10 字节,其中最主要的字段时间戳值字段(4字节)和时间戳回送回答字段(4字节)</li>
<li>选择确认:　　接收方收到了和前面的字节流不连续的两2字节.如果这些字节的序号都在接收窗口之内,那么接收方就先收下这些数据,但要把这些信息准确地告诉发送方,使发送方不要再重复发送这些已收到的数据</li>
</ol>
<p>上图中有几个字段需要重点介绍下：</p>
<p>（1）序号：seq序号，占32位，用来标识从TCP源端向目的端发送的字节流，发起方发送数据时对此进行标记。</p>
<p>（2）确认序号：ack序号，占32位，只有ACK标志位为1时，确认序号字段才有效，ack=seq+1。</p>
<p>（3）标志位：共6个，即URG、ACK、PSH、RST、SYN、FIN等，具体含义如下：</p>
<p>ACK：确认序号有效。
FIN：释放一个连接。
PSH：接收方应该尽快将这个报文交给应用层。
RST：重置连接。
SYN：发起一个新连接。
URG：紧急指针（urgent pointer）有效。
需要注意的是：</p>
<p>不要将确认序号ack与标志位中的ACK搞混了。
确认方ack=发起方seq+1，两端配对。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/0396f454d9a84b4687a43c1927082b71.jpeg" alt="TCP和UDP的区别"></p>
<h3 id="_19-tcp协议如何来保证传输的可靠性" tabindex="-1"><a class="header-anchor" href="#_19-tcp协议如何来保证传输的可靠性" aria-hidden="true">#</a> 19.TCP协议如何来保证传输的可靠性</h3>
<p>TCP提供一种面向连接的、可靠的字节流服务。其中，面向连接意味着两个使用TCP的应用（通常是一个客户和一个服务器）在彼此交换数据之前必须先建立一个TCP连接。在一个TCP连接中，仅有两方进行彼此通信；而字节流服务意味着两个应用程序通过TCP链接交换8bit字节构成的字节流，TCP不在字节流中插入记录标识符。
（1）对于可靠性，TCP通过以下方式进行保证：</p>
<p>​		数据包校验：目的是检测数据在传输过程中的任何变化，若校验出包有错，则丢弃报文段并且不给出响应，这时TCP发送数据端超时后会重发数据；
​		对失序数据包重排序：既然TCP报文段作为IP数据报来传输，而IP数据报的到达可能会失序，因此TCP报文段的到达也可能会失序。TCP将对失序数据进行重新排序，然后才交给应用层；
​		丢弃重复数据：对于重复数据，能够丢弃重复数据；
​		应答机制：当TCP收到发自TCP连接另一端的数据，它将发送一个确认。这个确认不是立即发送，通常将推迟几分之一秒；
​		超时重发：当TCP发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段；
​		流量控制：TCP连接的每一方都有固定大小的缓冲空间。TCP的接收端只允许另一端发送接收端缓冲区所能接纳的数据，这可以防止较快主机致使较慢主机的缓冲区溢出，这就是流量控制。TCP使用的流量控制协议是可变大小的滑动窗口协议。
（2）滑动窗口
位于传输层的TCP协议是面向连接的，可靠的传输协议，拥有着确认机制。理论上，每发一个数据包都会收到其对应的确认包，然后才可以继续发送数据。
在三次握手阶段，双方互相将自己的最大可接收的数据量告诉对方，也就是自己的数据接收缓冲池的大小。这样对方可以根据已发送的数据量来计算是否可以接着发送。在处理过程中，当接收缓冲池的大小发生变化时，要给对方发送更新窗口大小的通知，利用滑动窗口机制有效提高通信效率。</p>
<p>（4）TCP的拥塞处理
计算机网络中的带宽、交换结点中的缓存及处理机等都是网络的资源。在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络的性能就会变坏，这种情况就叫做拥塞。拥塞控制就是 防止过多的数据注入网络中，这样可以使网络中的路由器或链路不致过载。注意，拥塞控制和流量控制不同，前者是一个全局性的过程，而后者指点对点通信量的控制。拥塞控制的方法主要有以下四种：</p>
<ul>
<li><strong>慢启动</strong>：不要一开始就发送大量的数据，先探测一下网络的拥塞程度，也就是说由小到大逐渐增加拥塞窗口的大小;</li>
<li><strong>拥塞避免</strong>：拥塞避免算法让拥塞窗口缓慢增长，即每经过一个往返时间RTT就把发送方的拥塞窗口cwnd加1，而不是加倍，这样拥塞窗口按线性规律缓慢增长。</li>
</ul>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211217181337240.png" alt="image-20211217181337240"></p>
<ul>
<li><strong>快重传</strong>：快重传要求接收方在收到一个 失序的报文段 后就立即发出 重复确认（为的是使发送方及早知道有报文段没有到达对方）而不要等到自己发送数据时捎带确认。快重传算法规定，发送方只要一连收到三个重复确认就应当立即重传对方尚未收到的报文段，而不必继续等待设置的重传计时器时间到期。</li>
</ul>
<p>快恢复：快重传配合使用的还有快恢复算法，当发送方连续收到三个重复确认时，就执行“乘法减小”算法，把ssthresh门限减半，但是接下去并不执行慢开始算法：因为如果网络出现拥塞的话就不会收到好几个重复的确认，所以发送方现在认为网络可能没有出现拥塞。所以此时不执行慢开始算法，而是将cwnd设置为ssthresh的大小，然后执行拥塞避免算法。</p>
<h3 id="_17、保活计时器的作用" tabindex="-1"><a class="header-anchor" href="#_17、保活计时器的作用" aria-hidden="true">#</a> 17、保活计时器的作用？</h3>
<p>除时间等待计时器外，TCP 还有一个保活计时器（keepalive  timer）。设想这样的场景：客户已主动与服务器建立了 TCP 连接。但后来客户端的主机突然发生故障。显然，服务器以后就不能再收到客户端发来的数据。因此，应当有措施使服务器不要再白白等待下去。这就需要使用保活计时器了。</p>
<p>服务器每收到一次客户的数据，就重新设置保活计时器，时间的设置通常是两个小时。若两个小时都没有收到客户端的数据，服务端就发送一个探测报文段，以后则每隔  75 秒钟发送一次。若连续发送 10个 探测报文段后仍然无客户端的响应，服务端就认为客户端出了故障，接着就关闭这个连接。</p>
<h3 id="_19、谈谈你对停止等待协议的理解" tabindex="-1"><a class="header-anchor" href="#_19、谈谈你对停止等待协议的理解" aria-hidden="true">#</a> 19、谈谈你对停止等待协议的理解？</h3>
<p>停止等待协议是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组；在停止等待协议中，若接收方收到重复分组，就丢弃该分组，但同时还要发送确认。主要包括以下几种情况：无差错情况、出现差错情况（超时重传）、确认丢失和确认迟到、确认丢失和确认迟到。</p>
<h3 id="_20、谈谈你对-arq-协议的理解" tabindex="-1"><a class="header-anchor" href="#_20、谈谈你对-arq-协议的理解" aria-hidden="true">#</a> 20、谈谈你对 ARQ 协议的理解？</h3>
<p><strong>自动重传请求 ARQ 协议</strong></p>
<p>停止等待协议中超时重传是指只要超过一段时间仍然没有收到确认，就重传前面发送过的分组（认为刚才发送过的分组丢失了）。因此每发送完一个分组需要设置一个超时计时器，其重传时间应比数据在分组传输的平均往返时间更长一些。这种自动重传方式常称为自动重传请求 ARQ。</p>
<p><strong>连续 ARQ 协议</strong></p>
<p>连续 ARQ 协议可提高信道利用率。发送方维持一个发送窗口，凡位于发送窗口内的分组可以连续发送出去，而不需要等待对方确认。接收方一般采用累计确认，对按序到达的最后一个分组发送确认，表明到这个分组为止的所有分组都已经正确收到了。</p>
<h3 id="_21、谈谈你对滑动窗口的了解" tabindex="-1"><a class="header-anchor" href="#_21、谈谈你对滑动窗口的了解" aria-hidden="true">#</a> 21、谈谈你对滑动窗口的了解？</h3>
<p>TCP 利用滑动窗口实现流量控制的机制。滑动窗口（Sliding window）是一种流量控制技术。早期的网络通信中，通信双方不会考虑网络的拥挤情况直接发送数据。由于大家不知道网络拥塞状况，同时发送数据，导致中间节点阻塞掉包，谁也发不了数据，所以就有了滑动窗口机制来解决此问题。</p>
<p>TCP 中采用滑动窗口来进行传输控制，滑动窗口的大小意味着接收方还有多大的缓冲区可以用于接收数据。发送方可以通过滑动窗口的大小来确定应该发送多少字节的数据。当滑动窗口为 0 时，发送方一般不能再发送数据报，但有两种情况除外，一种情况是可以发送紧急数据，例如，允许用户终止在远端机上的运行进程。另一种情况是发送方可以发送一个 1 字节的数据报来通知接收方重新声明它希望接收的下一字节及发送方的滑动窗口大小。</p>
<p>TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。</p>
<h3 id="_24、什么是粘包" tabindex="-1"><a class="header-anchor" href="#_24、什么是粘包" aria-hidden="true">#</a> 24、什么是粘包？</h3>
<p>在进行 Java NIO 学习时，可能会发现：如果客户端连续不断的向服务端发送数据包时，服务端接收的数据会出现两个数据包粘在一起的情况。</p>
<ol>
<li>
<p>TCP 是基于字节流的，虽然应用层和 TCP 传输层之间的数据交互是大小不等的数据块，但是 TCP 把这些数据块仅仅看成一连串无结构的字节流，没有边界；</p>
</li>
<li>
<p>从 TCP 的帧结构也可以看出，在 TCP 的首部没有表示数据长度的字段。</p>
</li>
</ol>
<p>基于上面两点，在使用 TCP 传输数据时，才有粘包或者拆包现象发生的可能。一个数据包中包含了发送端发送的两个数据包的信息，这种现象即为粘包。</p>
<p>接收端收到了两个数据包，但是这两个数据包要么是不完整的，要么就是多出来一块，这种情况即发生了拆包和粘包。拆包和粘包的问题导致接收端在处理的时候会非常困难，因为无法区分一个完整的数据包。</p>
<h3 id="_25、tcp-黏包是怎么产生的" tabindex="-1"><a class="header-anchor" href="#_25、tcp-黏包是怎么产生的" aria-hidden="true">#</a> 25、TCP 黏包是怎么产生的？</h3>
<p>发送方产生粘包</p>
<p>采用 TCP 协议传输数据的客户端与服务器经常是保持一个长连接的状态（一次连接发一次数据不存在粘包），双方在连接不断开的情况下，可以一直传输数据。但当发送的数据包过于的小时，那么 TCP 协议默认的会启用 Nagle 算法，将这些较小的数据包进行合并发送（缓冲区数据发送是一个堆压的过程）；这个合并过程就是在发送缓冲区中进行的，也就是说数据发送出来它已经是粘包的状态了。</p>
<p>接收方产生粘包</p>
<p>接收方采用 TCP 协议接收数据时的过程是这样的：数据到接收方，从网络模型的下方传递至传输层，传输层的 TCP 协议处理是将其放置接收缓冲区，然后由应用层来主动获取（C 语言用 recv、read 等函数）；这时会出现一个问题，就是我们在程序中调用的读取数据函数不能及时的把缓冲区中的数据拿出来，而下一个数据又到来并有一部分放入的缓冲区末尾，等我们读取数据时就是一个粘包。（放数据的速度 &gt; 应用层拿数据速度）</p>
<h3 id="_26、怎么解决拆包和粘包" tabindex="-1"><a class="header-anchor" href="#_26、怎么解决拆包和粘包" aria-hidden="true">#</a> 26、怎么解决拆包和粘包？</h3>
<p>分包机制一般有两个通用的解决方法：</p>
<ol>
<li>
<p>特殊字符控制；</p>
</li>
<li>
<p>在包头首都添加数据包的长度。</p>
</li>
</ol>
<p>如果使用 netty 的话，就有专门的编码器和解码器解决拆包和粘包问题了。</p>
<p>tips：UDP 没有粘包问题，但是有丢包和乱序。不完整的包是不会有的，收到的都是完全正确的包。传送的数据单位协议是 UDP 报文或用户数据报，发送的时候既不合并，也不拆分。</p>
<h3 id="_65-osi-tcp-ip-五层协议的体系结构" tabindex="-1"><a class="header-anchor" href="#_65-osi-tcp-ip-五层协议的体系结构" aria-hidden="true">#</a> 65.OSI ， TCP/IP ，五层协议的体系结构</h3>
<p>OSI分层（7层） ：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。</p>
<p>TCP/IP分层（4层） ：网络接口层、网际层、运输层、应用层。</p>
<p>五层协议（5层） ：物理层、数据链路层、网络层、运输层、应用层。</p>
<h3 id="_69-tcp-的可靠性如何保证" tabindex="-1"><a class="header-anchor" href="#_69-tcp-的可靠性如何保证" aria-hidden="true">#</a> 69.TCP 的可靠性如何保证？</h3>
<p>TCP的可靠性是通过顺序编号和确认（ACK）来实现的。</p>
<h1 id="laravel问题" tabindex="-1"><a class="header-anchor" href="#laravel问题" aria-hidden="true">#</a> laravel问题：</h1>
<p>用Laravel开发前前后后有2个月左右了，之前一直写Java，就像找到Java和PHP之前的共同点，用Java的某些原理去理解PHP会发现还是有很多共通之处的。Java的依赖注入已经是一个很常见的概念了，Spring框架主要就是解决了这一点，在PHP的laravel框架中，也出现了依赖注入的方式。</p>
<p>依赖注入就控制反转的一种是实现方式，面向对象的特征的重要体现，那么依赖注入中什么是依赖呢，这点用Java开发的人很多都能理解。笼统的说依赖就是一种联系，变量和实现的联系。有关于依赖注入的理解之前写过，传送门：http://www.cnblogs.com/Summer7C/p/5415887.html</p>
<p>接下来说说Laravel中的依赖注入。</p>
<p>之前就听说Laravel的特点中依赖注入就是其中之一，一直在寻找依赖注入和Spring的感觉。</p>
<p>Laravel提供了多种依赖注入的方式。首先就将实现构造器或者方法参数的注入，这种依赖注入的方式比较简单，也不需要怎么配置。只要在方法的参数中写入类的类型，这个时候，类的实例就会注入到这个参数上，我们在使用的时候，就可以直接使用，而不用我们再去new这个类的实例，这个new的过程，已经由框架替我们做了。</p>
<p>例如：</p>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> 1 class Test
 2 {
 3     //这是一个类        
 4 }
 5 
 6 class TestController extend Controller
 7 {
 8     public function __contract(Test $test)
 9     {
10         print_r($test);
11     }
12 }    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<p>这样我们不用对$test变量做任何的赋值操作，Laravel会帮我们把Test的实例赋值给$test变量，这就是一种依赖注入的使用。我们的依赖的Test就这样被注入到了参数里头。我们平时使用Laravel的控制器中接收页面参数的时候，就是依赖注入。</p>
<p>那么，我们在Java中常用的一种面向接口编程的方式，Laravel框架也同样提供了，这种面向接口编程的方式。这种方式很简单，首先我们的所有调用都是面向接口的。我们这里先写一个接口：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1 interface TestInterface
2 {
3 //接口的方法
4 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义好了接口，我们就要定义接口的实现类：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1 class TestService implements TestInterface
2 {
3 //实现的方法
4 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何将依赖完成呢？Laravel的实现很简单，通过一个方法可以将实现和接口绑定起来。我们在Laravel框架下找app/Providers/AppServiceProider.php这个文件，打开之后他是长这样的：</p>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>13 class AppServiceProvider extends ServiceProvider
14 {
20     public function boot()
21     {
22        35     }
36 
42     public function register()
43     {
44         //
45     }
46 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<p>在register方法下降接口绑定到实现上，在其中加入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1 $this->app->bind(
2     'Interface\TestInterface',
3     'Service\TestService'
4 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在方法的参数中，只要把接口写上，就可以注入依赖了。</p>
<h1 id="laravel-5-x-启动过程分析" tabindex="-1"><a class="header-anchor" href="#laravel-5-x-启动过程分析" aria-hidden="true">#</a> Laravel 5.x 启动过程分析</h1>
<p>1.注册基本的绑定</p>
<p>2.注册基本服务提供者并启动</p>
<p>3.注册核心服务容器别名</p>
<p>4.设置根路径</p>
<p>5.注册共享的Kernel和异常处理器</p>
<p>6.处理请求和响应</p>
<p>请求过来后，先走路由，然后有中间件的话走路由的中间件，然后handle处理请求，b.handle处理请求 —— 经过路由发送请求：</p>
<ul>
<li>
<p>$request是经过Symfony封装的请求对象</p>
</li>
<li>
<p>注册request实例到容器 ($app['request']-&gt;Illuminate\Http\Request)</p>
</li>
<li>
<p>清空之前容器中的request实例</p>
</li>
<li>
<p>调用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法，启动一系列启动类的bootstrap方法：</p>
<ol>
<li>Illuminate\Foundation\Bootstrap\DetectEnvironment 环境配置（$app['env']）</li>
<li>Illuminate\Foundation\Bootstrap\LoadConfiguration  基本配置（$app['config']）</li>
<li>Illuminate\Foundation\Bootstrap\ConfigureLogging  日志文件（$app['log']）</li>
<li>Illuminate\Foundation\Bootstrap\HandleExceptions  错误&amp;异常处理</li>
<li>Illuminate\Foundation\Bootstrap\RegisterFacades   清除已解析的Facade并重新启动，注册config文件中alias定义的所有Facade类到容器</li>
<li>Illuminate\Foundation\Bootstrap\RegisterProviders  注册config中providers定义的所有Providers类到容器</li>
<li>Illuminate\Foundation\Bootstrap\BootProviders    调用所有已注册Providers的boot方法</li>
</ol>
</li>
<li>
<p>通过<code v-pre>Pipeline</code>发送请求，经过中间件，再由路由转发，最终返回响应</p>
</li>
</ul>
<p>响应信息发送到浏览器</p>
<p>laravel有容器，控制反转，依赖注入这些概念。</p>
<p><strong>这种由外部负责其依赖需求的行为，我们可以称其为 “控制反转（IoC）”。</strong></p>
<p>工厂模式，顾名思义，就是一个类所依赖的外部事物的实例，都可以被一个或多个 “工厂” 创建的这样一种开发模式，就是 “工厂模式”。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>我们为了给超人制造超能力模组，我们创建了一个工厂，它可以制造各种各样的模组，且仅需要通过一个方法：

1
class SuperModuleFactory
2
{
3
    public function makeModule($moduleName, $options)
4
    {
5
        switch ($moduleName) {
6
            case 'Fight': 
7
                return new Fight($options[0], $options[1]);
8
            case 'Force': 
9
                return new Force($options[0]);
10
            case 'Shot': 
11
                return new Shot($options[0], $options[1], $options[2]);
12
        }
13
    }
14
}
这时候，超人 创建之初就可以使用这个工厂！

1
class Superman
2
{
3
    protected $power;
4
​
5
    public function __construct()
6
    {
7
        // 初始化工厂
8
        $factory = new SuperModuleFactory;
9
​
10
        // 通过工厂提供的方法制造需要的模块
11
        $this->power = $factory->makeModule('Fight', [9, 100]);
12
        // $this->power = $factory->makeModule('Force', [45]);
13
        // $this->power = $factory->makeModule('Shot', [99, 50, 2]);
14
        /*
15
        $this->power = array(
16
            $factory->makeModule('Force', [45]),
17
            $factory->makeModule('Shot', [99, 50, 2])
18
        );
19
        */
20
    }
21
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ioc-容器的重要组成-——-依赖注入" tabindex="-1"><a class="header-anchor" href="#ioc-容器的重要组成-——-依赖注入" aria-hidden="true">#</a> <strong>IoC 容器的重要组成 —— 依赖注入</strong></h3>
<p>由 “超人” 对 “超能力” 的依赖变成 “超人” 对 “超能力模组工厂” 的依赖后，对付小怪兽们变得更加得心应手。但这也正如你所看到的，依赖并未解除，只是由原来对多个外部的依赖变成了对一个 “工厂” 的依赖。假如工厂出了点麻烦，问题变得就很棘手。</p>
<p>由于工厂模式下，所有的模组都已经在工厂类中安排好了，如果有新的、高级的模组加入，我们必须修改工厂类（好比增加新的生产线）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class SuperModuleFactory
{
    public function makeModule($moduleName, $options)
    {
        switch ($moduleName) {
            case 'Fight': 
                return new Fight($options[0], $options[1]);
            case 'Force': 
                return new Force($options[0]);
            case 'Shot': 
                return new Shot($options[0], $options[1], $options[2]);
            // case 'more': .......
            // case 'and more': .......
            // case 'and more': .......
            // case 'oh no! its too many!': .......
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于对超能力模组的需求不断增大，我们需要集合整个世界的高智商人才，一起解决问题，不应该仅仅只有几个工厂垄断负责。不过高智商人才们都非常自负，认为自己的想法是对的，创造出的超能力模组没有统一的接口，自然而然无法被正常使用。这时我们需要提出一种契约，这样无论是谁创造出的模组，都符合这样的接口，自然就可被正常使用。</p>
<h4 id="什么叫做依赖注入" tabindex="-1"><a class="header-anchor" href="#什么叫做依赖注入" aria-hidden="true">#</a> <strong>什么叫做依赖注入？</strong></h4>
<p>本文从开头到现在提到的一系列依赖，只要不是由内部生产（比如初始化、构造函数 __construct 中通过工厂方法、自行手动 new 的），而是由外部以参数或其他形式注入的，都属于依赖注入（DI） 。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 超能力模组
$superModule = new XPower;
// 初始化一个超人，并注入一个超能力模组依赖
$superMan = new Superman($superModule);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更为先进的工厂-——-ioc-容器" tabindex="-1"><a class="header-anchor" href="#更为先进的工厂-——-ioc-容器" aria-hidden="true">#</a> <strong>更为先进的工厂 —— IoC 容器</strong></h3>
<p>刚刚列了一段代码：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$superModule = new XPower;
$superMan = new Superman($superModule);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>读者应该看出来了，手动的创建了一个超能力模组、手动的创建超人并注入了刚刚创建超能力模组。呵呵，手动。</p>
<p>一群怪兽来了，如此低效率产出超人是不现实，我们需要自动化 —— 最多一条指令，千军万马来相见。我们需要一种高级的生产车间，我们只需要向生产车间提交一个脚本，工厂便能够通过指令自动化生产。这种更为高级的工厂，就是工厂模式的升华 —— IoC 容器。</p>
<p>真正的 IoC 容器会根据类的依赖需求，自动在注册、绑定的一堆实例中搜寻符合的依赖需求，并自动注入到构造函数参数中去。Laravel 框架的服务容器正是这么做的。</p>
<p>这种自动搜寻依赖需求的功能，是通过反射（Reflection）实现的</p>
<p>Laravel 的核心就是一个 IoC 容器，也恰好是我之前所说的高级的 IoC 容器。</p>
<p>可以说，Laravel 的核心本身十分轻量，并没有什么很神奇很实质性的应用功能。很多人用到的各种功能模块比如 Route（路由）、Eloquent ORM（数据库 ORM 组件）、Request（请求）以及 Response（响应）等等等等，实际上都是与核心无关的类模块提供的，这些类从注册到实例化，最终被你所使用，其实都是 Laravel 的服务容器负责的。</p>
<p><strong>一个类要被容器所能够提取，必须要先注册至这个容器。既然 Laravel 称这个容器叫做服务容器，那么我们需要某个服务，就得先注册、绑定这个服务到容器，那么提供服务并绑定服务至容器的东西，就是服务提供者（Service Provider）。</strong></p>
<p>虽然，绑定一个类到容器不一定非要通过服务提供者。</p>
<p>但是，我们知道，有时候我们的类、模块会有需要其他类和组件的情况，为了保证初始化阶段不会出现所需要的模块和组件没有注册的情况，Laravel 将注册和初始化行为进行拆分，注册的时候就只能注册，初始化的时候就是初始化。拆分后的产物就是现在的服务提供者。</p>
<p>服务提供者主要分为两个部分，<code v-pre>register</code>（注册） 和 <code v-pre>boot</code>（引导、初始化），具体参考<a href="https://xueyuanjun.com/post/91.html" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a>。<code v-pre>register</code> 负责进行向容器注册“脚本”，但要注意注册部分不要有对未知事物的依赖，如果有，就要移步至 <code v-pre>boot</code> 部分。</p>
<h4 id="门面-facade" tabindex="-1"><a class="header-anchor" href="#门面-facade" aria-hidden="true">#</a> <strong>门面（Facade）</strong></h4>
<p>我们现在解答之前关于 Route 的方法为何能以静态方法访问的问题。实际上这个问题文档上有写，简单说来就是模拟一个类，提供一个静态魔术方法<code v-pre>__callStatic</code>，并将该静态方法映射到真正的方法上。</p>
<h1 id="创建自定义-facades-类" tabindex="-1"><a class="header-anchor" href="#创建自定义-facades-类" aria-hidden="true">#</a> 创建自定义 Facades 类</h1>
<p>过程是:
1.创建需要绑定到服务容器的Test类，放在app/Facades中</p>
<p>2.创建一个静态指向Test类的门面类TestClass</p>
<p>3.接下来在服务提供者中绑定Test类到服务容器，修改TestServerPriver</p>
<p>4.再然后需要到配置文件<code v-pre>config/app.php</code>中注册门面类别名：</p>
<p>5.注意：不要忘了在调用门面类 <code v-pre>TestClass</code> 的文件顶部使用 <code v-pre>use TestClass;</code> 引入<code v-pre>TestClass</code>，否则将不能正确调用。</p>
<h3 id="依赖注入-ioc容器-控制反转的概念" tabindex="-1"><a class="header-anchor" href="#依赖注入-ioc容器-控制反转的概念" aria-hidden="true">#</a> 依赖注入，IOC容器，控制反转的概念</h3>
<p>还是用我最喜欢的现实代入的方法来说明。</p>
<ol>
<li>假设我们制造一部手机，所有的功能都是集成在一个电路板上的，在一条生产线上完成，这样我们增减功能，需要修改整个设计图纸，同时修改每条生产线。这就是我们说的对象的耦合度。</li>
<li>为了解决这种功能的耦合度，我们考虑将手机上的功能模块化，建立一个模块生产车间（工厂模式），这个车间可以生产各种功能模块，然后功能模块在装配车间安装，这个时候调整手机的功能，只需要调整对应功能模块的功能设计，最后选择对应型号的模块安装就可以了。这个时候，功能的耦合度下降了很多，但是手机的整个生产还是在一个工厂里。</li>
<li>这个时候其实工厂运转的已经很不错了，但是问题还是出现了，随着产销量越来越大，技术发展，越来越多的功能模块需要被开发出来，模块车间已经满足不了这种需求了，我们需要从外部采购成品功能模块使用，同时为了保证每个工厂生产的模块都能使用，使用接口的形式进行约束，这样保证了每个模块都有相同的，这个时候我们直接把外部采购部件并使用叫做依赖注入。</li>
<li>但是还有个问题没有解决，之前的装配和采购都是手工进行的，我们也太落后了，所以这个时候我们使用机器代替人工（IOC容器），把控制交给机器，这也就是控制反转的概念，我们把每个模块的采购方式，模块的组装方式都bind到机器人程序中，然后下达make指令，机器人就会根据输入的指令生产出对应型号的产品了。</li>
</ol>
<p>以上就是依赖注入，IOC容器，控制反转的概念了</p>
<p>laravel使用对象的3中方式：</p>
<p>依赖注入，make创建：$app-&gt;make('request');,  门面模式</p>
<h1 id="tp5和laravel框架的区别" tabindex="-1"><a class="header-anchor" href="#tp5和laravel框架的区别" aria-hidden="true">#</a> TP5和Laravel框架的区别</h1>
<p>一．TP5和Laravel框架的区别</p>
<p>区别：</p>
<p>1、提交数据的方式，Laravel在提交表单时需要在表单中加入@csrf或者{undefined{ csrf_token() }}来防止跨域攻击，而TP不会。</p>
<p>2、路由，Laravel必须先定义，再使用，路由文件为routes.php，TP在配置文件中开启路由后，路由格式是：‘路由表达式’ =&gt; ‘路由地址和参数’（使用路由的前提是URL支持phthinfo并且开启路由），路由可以使URL更符合SEO。</p>
<p>3、中间件，Laravel的中间件，中间件就是HTTP请求到达之前经过的层，通过中间件我们可以验证用户是否登录等一些通用操作。</p>
<p>4、操作数据库方式，都可以使用实例化（建立相对应的模型类）和DB:table(‘表名’)来操作数据库，使用原生查询时不太相同，Laravel使用Db::操作(‘原生sql’)，TP使用Db::query(‘原生sql’)；</p>
<p>5、Laravel升级十分简易，而TP大版本的升级要重构代码。</p>
<p>6.条件判断语句书写方式的差异:</p>
<p>Laravel框架里 if else判断语句和foreach语句 书写时必须以@if开头 以@endif结尾,如果没有则报语法错误,@foreach @endforeach同理;</p>
<p>而TP框架则和PHP语法规则使用方式一致直接ifesle语句判断和foreach循环遍历</p>
<p>二．CSRF保护</p>
<p>CSRF跨站点请求伪造(Cross—Site Request Forgery)，跟XSS攻击一样，存在巨大的危害性，</p>
<p>防御CSRF攻击：
目前防御 CSRF 攻击主要有三种策略：验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证</p>
<p>主要区别:(thinkPHP更适合国人的编码习惯)</p>
<p>1.渲染模版方式的不同:</p>
<p>在Laravel框架里,使用return view()来渲染模版;</p>
<p>而ThinkPHP里则使用了$this-&gt;display()的方式渲染模版;</p>
<p>2.在Laravel框架里,由于其考虑到了跨站请求伪造, 所以如果使用form表单以post方式进行传值时,如果不再form表单中加入{{csrf_field()}}则会报出TokenMethodnotfound的语法错误;</p>
<p>而TP框架则需要自己手动完成防止跨站攻击的代码;</p>
<p>3.Laravel是一个重路由的框架(5.4),所有的功能都是由路由发起的,哪怕没有控制器方法,只要写了路由就能够访问,thinkPHP(3.2),必须要有控制器方法才能正常访问;</p>
<p>4.laravel具有强大的社区化扩展，（composer扩展自动加载）;</p>
<p>5.laravel具有强大的Blade模版引擎;</p>
<p>6.中间件，Laravel特点，可以实现访问前后的处理，例如请求和返回，权限认证等;
7.条件判断语句书写方式的差异:</p>
<p>Laravel框架里 if else判断语句和foreach语句 书写时必须以@if开头  以@endif结尾,如果没有则报语法错误,@foreach @endforeach同理;</p>
<p>而TP框架则和PHP语法规则使用方式一致直接ifesle语句判断和foreach循环遍历
————————————————</p>
<h3 id="tp5启动流程" tabindex="-1"><a class="header-anchor" href="#tp5启动流程" aria-hidden="true">#</a> tp5启动流程：</h3>
<p><a href="https://images2018.cnblogs.com/blog/953680/201802/953680-20180228172303538-524391691.png" target="_blank" rel="noopener noreferrer"><img src="@source/docs/theme-reco/img/common/总结/953680-20180228172303538-524391691.png" alt="img"><ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ThinkPHP5的启动流程按照文件分为三步：
1、请求入口(public/index.php)
2、框架启动(thinkphp/start.php)
3、应用启动(thinkphp/library/App.php)
 
ThinkPHP框架默认是单入口框架，默认的入口文件为public/index.php，所有请求全部经过入口文件index.php来进行访问。
index.php代码如下：
// 定义应用目录
define('APP_PATH', __DIR__ . '/../application/');    // 定义应用的根目录 APP_PATH 为 /application
// 加载框架引导文件
require __DIR__ . '/../thinkphp/start.php';
做了两件事：
1、定义APP_PATH常量
2、加载文件start.php。
 
start.php代码如下：
namespace think;    // 定义think命名空间，所有thinkphp类都在think及其子命名空间下。程序中用到框架类的时候要先use该类的命名空间；
 
// ThinkPHP 引导文件
// 1. 加载基础文件
require __DIR__ . '/base.php’;    // 主要完成了常量定义、注册自动加载、注册错误和异常处理机制、加载惯例配置文件(convention.php)这些步骤。
 
// 2. 执行应用
App::run()->send();    // run()方法可以在/tp5/thinkphp/library/think/App.php文件中找到对应方法，这个方法是整个框架的核心方法，实现了路由转换、获取调度信息、根据调度信息执行相应模块控制器的方法、获取方法返回数据、将返回数据赋值给Response对象等一系列操作。最后，调用返回的Response对象的send()方法将信息返回给客户端，一次完整的http请求完成。
做了三件事：
1、定义整个框架的命名空间think
2、加载文件base.php
3、执行App类的run()方法，启动应用
 
而在base.php中，主要做了如下六件事：
1、定义系统常量，包括框架的运行信息、目录组织、运行环境等；
define('THINK_VERSION', '5.0.12');
define('THINK_START_TIME', microtime(true));
define('THINK_START_MEM', memory_get_usage());
define('EXT', '.php');
define('DS', DIRECTORY_SEPARATOR);
defined('THINK_PATH') or define('THINK_PATH', __DIR__ . DS);
define('LIB_PATH', THINK_PATH . 'library' . DS);
define('CORE_PATH', LIB_PATH . 'think' . DS);
define('TRAIT_PATH', LIB_PATH . 'traits' . DS);
defined('APP_PATH') or define('APP_PATH', dirname($_SERVER['SCRIPT_FILENAME']) . DS);
defined('ROOT_PATH') or define('ROOT_PATH', dirname(realpath(APP_PATH)) . DS);
defined('EXTEND_PATH') or define('EXTEND_PATH', ROOT_PATH . 'extend' . DS);
defined('VENDOR_PATH') or define('VENDOR_PATH', ROOT_PATH . 'vendor' . DS);
defined('RUNTIME_PATH') or define('RUNTIME_PATH', ROOT_PATH . 'runtime' . DS);
defined('LOG_PATH') or define('LOG_PATH', RUNTIME_PATH . 'log' . DS);
defined('CACHE_PATH') or define('CACHE_PATH', RUNTIME_PATH . 'cache' . DS);
defined('TEMP_PATH') or define('TEMP_PATH', RUNTIME_PATH . 'temp' . DS);
defined('CONF_PATH') or define('CONF_PATH', APP_PATH); // 配置文件目录
defined('CONF_EXT') or define('CONF_EXT', EXT); // 配置文件后缀
defined('ENV_PREFIX') or define('ENV_PREFIX', 'PHP_'); // 环境变量的配置前缀
 
// 环境常量
define('IS_CLI', PHP_SAPI == 'cli' ? true : false);
define('IS_WIN', strpos(PHP_OS, 'WIN') !== false);
2、载入Loader类(/thinkphp/library/think/Loader.php)
// 载入Loader类
require CORE_PATH . 'Loader.php';
3、加载环境变量配置文件（/.env），如果该文件不存在，就跳过；
// 加载环境变量配置文件
if (is_file(ROOT_PATH . '.env')) {
    $env = parse_ini_file(ROOT_PATH . '.env', true);
 
    foreach ($env as $key => $val) {
        $name = ENV_PREFIX . strtoupper($key);
 
        if (is_array($val)) {
            foreach ($val as $k => $v) {
                $item = $name . '_' . strtoupper($k);
                putenv("$item=$v");
            }
        } else {
            putenv("$name=$val");
        }
    }
}
4、注册自动加载
// 注册自动加载
\think\Loader::register();
5、注册错误和异常处理机制
// 注册错误和异常处理机制
\think\Error::register();
6、加载惯例配置文件
// 加载惯例配置文件
\think\Config::set(include THINK_PATH . 'convention' . EXT);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="laravel和lumen区别" tabindex="-1"><a class="header-anchor" href="#laravel和lumen区别" aria-hidden="true">#</a> laravel和lumen区别：</h3>
<p><a href="https://so.csdn.net/so/search?q=Laravel&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Laravel<ExternalLinkIcon/></a>是用于Web开发的开源PHP框架。它是免费的，由Taylor Otwell创建。它基于MVC(模型视图控制器)架构模式。它主要用于开发Web应用程序。Laravel易于理解，并且健壮的MVC框架可用于PHP中的Web应用程序开发。Lumen是一个微型框架，意味着更小，更简单，更精简和更快，Lumen主要用于构建具有松耦合组件的微服务，这些组件可降低复杂性并轻松增强改进。</p>
<p>Laravel</p>
<p>Laravel易于理解，并且健壮的<a href="https://so.csdn.net/so/search?q=MVC%E6%A1%86%E6%9E%B6&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">MVC框架<ExternalLinkIcon/></a>可用于PHP中的Web应用程序开发。它是在麻省理工学院获得许可的。它最初于2011年6月发布。它完全用PHP编程语言编写。Laravel通过最新功能为开发提供了丰富的功能集。在网络攻击盛行的网络安全情况下，Laravel的安全功能非常出色。</p>
<p>Lumen</p>
<p>Lumen是由Laravel的创建者泰勒·奥特威尔(Taylor Otwell)创建的一个微型框架。Lumen意味着整个Web应用程序框架的更小，更简单，更精简和更快的版本。Lumen框架的基础级别与大多数相似组件在Laravel级别相同。在配置Web应用程序时，Lumen具有较少的配置和不同的路由参数，并有助于快速开发。</p>
<p>Laravel与Lumen之间的主要区别：</p>
<p>两者都是市场上流行的选择。让我们讨论一些主要区别：</p>
<p>Laravel是一个全栈Web应用程序框架，可打包或支持许多第三方工具和框架，而Lumen是一个微框架，用于开发微服务和API开发，旨在提供快速和高响应时间。</p>
<p>Laravel对于服务器和与应用程序一起使用的其他工具需要不同类型的配置，而Lumen微型框架是Laravel版本的一种轻型形式，它提供了专门的功能，例如API开发，Cookie，模板，缓存，日志记录，路由，HTTP会议等</p>
<p>Laravel具有以下特点：干净的体系结构，开源，不断发展的社区，依赖注入仅适用于PHP的框架，而Lumen是一个微框架，API功能，宁静的支持，雄辩且易于使用。</p>
<p>与Lumen相比，Laravel可以与更多数量的工具集成，而Lumen与其他工具的集成设施数量较少。</p>
<p>在SQL查询和从应用程序级别调整数据库的情况下，Laravel的性能将很好，而与Laravel相比，在SQL查询和较少的功能的情况下，Lumen的性能会下降。</p>
<p>Laravel在雄辩的ORM框架中有不同的规范，而Blade是完全用PHP编写的默认模板引擎，而Lumen没有直接衍生自Laravel的规范。</p>
<p>Laravel有自己的命令行界面，与框架一起内置，而Lumen是功能丰富的微框架。</p>
<p>Laravel具有出色的内置对象关系映射框架，而Lumen易于升级。</p>
<p>Laravel非常适合构建RESTful API(应用程序编程接口)，而Lumen是构建微服务的性能最高的微框架API之一。</p>
<p>Laravel有一个很好的文档来进行项目启动和初始化，而Lumen没有清晰的文档，但是易于使用。</p>
<p>Laravel易于将身份验证与应用程序集成在一起，而Lumen没有内置或易于集成的第三方工具。</p>
<p>Laravel可以轻松处理事件排队，而Lumen没有内置功能。</p>
<p>Laravel具有强大的模板系统，而Lumen没有这种功能。</p>
<p>Laravel有一个陡峭的学习曲线来掌握框架，而Lumen的学习曲线更少并且易于实现。</p>
<p>与Lumen相比，Laravel的性能和速度较差，而Lumen的性能却很好。</p>
<p>Laravel有一个Symfony框架，可以用来创建Symfony组件，因为Lumen没有这些功能。</p>
<h3 id="深入剖析php7内核源码-一-php架构与生命周期" tabindex="-1"><a class="header-anchor" href="#深入剖析php7内核源码-一-php架构与生命周期" aria-hidden="true">#</a> 深入剖析PHP7内核源码（一）- PHP架构与生命周期</h3>
<h2 id="php7-为什么这么快" tabindex="-1"><a class="header-anchor" href="#php7-为什么这么快" aria-hidden="true">#</a> PHP7 为什么这么快？</h2>
<ul>
<li>全新的zval 更节约的空间，栈上分配内存</li>
<li>zend_string 存储字符串的Hash值,数组查询的时候不需要进行Hash计算</li>
<li>在HashTable桶内直接存数据,减少了内存的申请次数,提升了cache命中率和内存访问速度</li>
<li>zend_parse_parameters改为了宏实现,性能提升5%</li>
<li>增加opcode指令 call_user_function,is_init/string/array,strlen,defined函数变成opcode指令,速度更快</li>
<li>排序算法的改进</li>
</ul>
<h2 id="php7-架构" tabindex="-1"><a class="header-anchor" href="#php7-架构" aria-hidden="true">#</a> PHP7 架构</h2>
<p><img src="@source/docs/theme-reco/img/common/总结/456913-20190720170520772-2012479341.png" alt="img"></p>
<ul>
<li>Zend 引擎：Zend引擎为PHP提供了基础服务，包括词法分析 语法分析 ，AST抽象语法树编译 opcodes执行，PHP的变量设计、内存管理、进程管理。</li>
<li>PHP层：绑定了SAPI层并处理与它的通信，它同时对safe_mode和open_basedir的检测提供一致的控制层，将fopen()、fread()和fwrite()等用户空间的函数与文件和网络I/O联系起来。</li>
<li>SAPI：包括了cli fpm等，把接口对外接口都抽象出来，只要遵守SAPI协议便可以实现一个server。</li>
<li>拓展：zend 引擎提供了核心能力和接口规范，在此基础上可以开发拓展</li>
</ul>
<p>这里的拓展分为了两种，通常在php.ini中，通过extension=*加载的扩展我们称为PHP扩展，通过zend_extension=*加载的扩展我们称为Zend扩展，但从源码的角度来讲，PHP扩展应该称为“模块”（源码中以module命名），而Zend扩展称为“扩展”（源码中以extension命名）。两者最大的区别在于向引擎注册的钩子，向用户层面提供一些C实现的PHP函数，需要用到zend_module_entry（即作为PHP扩展），而需要hook到Zend引擎的话，就得用到zend_extension（即作为Zend扩展）。</p>
<h2 id="php7执行流程" tabindex="-1"><a class="header-anchor" href="#php7执行流程" aria-hidden="true">#</a> PHP7执行流程</h2>
<p><img src="https://img2018.cnblogs.com/blog/456913/201907/456913-20190720174852094-526303663.jpg" alt="img"></p>
<ol>
<li>词法分析，把源代码切割成多个字符串单元（Token）</li>
<li>语法分析器把Token转换成AST抽象语法树</li>
<li>抽象语法树转换成opcodes(opcode指令集合)</li>
<li>虚拟机解释执行执行opcodes(opcode是一组指令标识，对应handler处理函数)</li>
</ol>
<h4 id="执行实例" tabindex="-1"><a class="header-anchor" href="#执行实例" aria-hidden="true">#</a> 执行实例</h4>
<h5 id="词法分析" tabindex="-1"><a class="header-anchor" href="#词法分析" aria-hidden="true">#</a> 词法分析</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token keyword">echo</span> <span class="token string double-quoted-string">"Hello world"</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切割成了4部分</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  <span class="token operator">=></span> <span class="token comment">#define T_OPEN_TAG 379</span>

<span class="token keyword">echo</span> <span class="token operator">=></span> <span class="token comment">#define T_ECHO 328</span>

空格 <span class="token operator">=></span>  <span class="token comment">#define T_WHITESPACE 382</span>

<span class="token string double-quoted-string">"hello world"</span> <span class="token operator">=></span> <span class="token comment">#define T_CONSTANT_ENCAPSED_STRING 323</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h5>
<blockquote>
<p>单独存在的词块不能完整表达语义，还需要语法分析器，它会检查语法，匹配Token，对Token进行关联，组织串联后的产物就是AST.AST 分为多种类型,对应PHP语法，比如赋值语句，生成的抽象语法树节点是ZEND_AST_ASSIGN，赋值语句的左右会被作为ZEND_AST_ASSIGN类型节点的孩子（AST是PHP7才加入的，解耦了编译器和解释器）.</p>
<p>AST（抽象语法树），这是PHP 7新引入的特性，而AST是编译原理中的基础概念，可以用来表达PHP代码的文法含义，同时，对AST进行深度遍历可以生成对应的opcode，以便在Zend虚拟机中执行，AST的引入为PHP解决了很多语法上的问题。</p>
</blockquote>
<h5 id="opcodes" tabindex="-1"><a class="header-anchor" href="#opcodes" aria-hidden="true">#</a> opcodes</h5>
<p>opcode是PHP执行过程中的中间代码，生成后由虚拟机执行，生成的opcode是类似下面的样子</p>
<div class="language-vhdl line-numbers-mode" data-ext="vhdl"><pre v-pre class="language-vhdl"><code>line     op
<span class="token number">1</span>        ECHO
<span class="token number">2</span>        <span class="token keyword">RETURN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码中对应的opcode及handler</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>ZEND_ECHO <span class="token comment">// handler:ZEND_ECHO_SPEC_CONST_HANDLER 实现的功能是输出"hello world"</span>
ZEND_RETURN  <span class="token comment">// handler:ZEND_RETURN_SPEC_CONST_HANDLER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-生命周期" tabindex="-1"><a class="header-anchor" href="#php-生命周期" aria-hidden="true">#</a> PHP 生命周期</h2>
<h3 id="cli生命周期" tabindex="-1"><a class="header-anchor" href="#cli生命周期" aria-hidden="true">#</a> CLI生命周期</h3>
<p><img src="@source/docs/theme-reco/img/common/总结/456913-20190721174426703-192589801.png" alt="img"></p>
<ul>
<li>php_module_startup:注册全局变量GPC等，加载内部拓展和外部拓展。</li>
<li>php_request_startup:重置垃圾回收器，初始化执行器，初始化扫描器，设置超时时间等。</li>
<li>php_execute_script</li>
</ul>
<div class="language-ruby line-numbers-mode" data-ext="rb"><pre v-pre class="language-ruby"><code><span class="token operator">=></span> compile_file
<span class="token operator">=></span> open_file_for_scanning<span class="token punctuation">(</span>读取<span class="token constant">PHP</span>代码内容<span class="token punctuation">,</span>并使词法分析指针指向第一个位置<span class="token punctuation">)</span> 
<span class="token operator">=></span> zendparse<span class="token punctuation">(</span>词法分析语法分析后生成<span class="token constant">AST</span><span class="token punctuation">)</span> <span class="token operator">=></span> init_op_array<span class="token punctuation">(</span>初始化op_array<span class="token punctuation">)</span> 
<span class="token operator">=></span> zend_compile_top_stmt<span class="token punctuation">(</span>把<span class="token constant">AST</span>转为op_array<span class="token punctuation">)</span> 
<span class="token operator">=></span> pass_two<span class="token punctuation">(</span>设置op_array对应的zend虚拟机handler<span class="token punctuation">)</span> 
<span class="token operator">=></span> 生成op_array
<span class="token operator">=></span> zend_execute<span class="token punctuation">(</span>zend虚拟机中执行op_array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>php_request_shutdown:调用所有关闭函数,调用所有析构函数，输出缓冲区内容,重置最大执行时间,关闭输出层(HTTP头等),释放所有request的全局变量</li>
<li>php_module_shutdown:调用module对应的flush函数,清理持久化的符号表,销毁全局变量,关闭所有拓展,关闭内存管理,关闭输出output,析构垃圾回收</li>
</ul>
<h3 id="fpm模式的生命周期" tabindex="-1"><a class="header-anchor" href="#fpm模式的生命周期" aria-hidden="true">#</a> FPM模式的生命周期</h3>
<p><img src="@source/docs/theme-reco/img/common/总结/456913-20190721182654100-781612031.png" alt="img"></p>
<ul>
<li>FPM跟CLI模式不同的是，FPM是常驻内存的，所以php_module_startup只在启动进程的时候做一次初始化，对应的php_module_shutdown也只做一次。</li>
<li>进入循环,调用fcgi_accept_request(accept) 阻塞等待，如果请求进来，则进入php_request_startup，初始化请求，同时加了锁来防止惊群效应</li>
</ul>
<div class="language-rust line-numbers-mode" data-ext="rs"><pre v-pre class="language-rust"><code>fcgi<span class="token punctuation">.</span>c 
<span class="token punctuation">...</span>
<span class="token constant">FCGI_LOCK</span><span class="token punctuation">(</span>req<span class="token punctuation">-></span>listen_socket<span class="token punctuation">)</span><span class="token punctuation">;</span> 
req<span class="token punctuation">-></span>fd <span class="token operator">=</span> <span class="token function">accept</span><span class="token punctuation">(</span>listen_socket<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token type-definition class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>sa<span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">FCGI_UNLOCK</span><span class="token punctuation">(</span>req<span class="token punctuation">-></span>listen_socket<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总之php的执行流程是" tabindex="-1"><a class="header-anchor" href="#总之php的执行流程是" aria-hidden="true">#</a> 总之php的执行流程是：</h4>
<p>第1步：词法分析将PHP代码转换为有意义的标识Token。该步骤的词法分析器使用Re2c实现。</p>
<p>第2步：语法分析将Token和符合文法规则的代码生成抽象语法树。语法分析器基于Bison实现。语法分析使用了BNF（Backus-NaurForm，巴科斯范式）来表达文法规则，Bison借助状态机、状态转移表和压栈、出栈等一系列操作，生成抽象语法树。</p>
<p>第3步：上步的抽象语法树生成对应的opcode，并被虚拟机执行。opcode是PHP 7定义的一组指令标识，指令对应着相应的handler（处理函数）。当虚拟机调用opcode，会找到opcode背后的处理函数，执行真正的处理。以常见的echo语句为例，其对应的opcode便是ZEND_ECHO。</p>
<p>PHP提供了token_get_all()函数来获取PHP代码被切割后的Token：</p>
<p>token_get_all(&quot;<?php echo 111; ?>&quot;)</p>
<p>AST是PHP 7版本新特性。在这之前的版本中，PHP代码的执行过程中是没有生成AST这一步的。PHP 7对抽象语法树的支持，实现了PHP编译器和解释器解耦，有效提升了可维护性。</p>
<p>PHP-Parser工具，它可以用来查看PHP代码生成的AST。</p>
<p>AST扮演了源码到中间代码的临时存储介质的角色，还需要将其转换为opcode，才能被引擎直接执行。opcode只是单条指令，opcodes是opcode的集合形式，是PHP执行过程中的中间代码，类似Java中的字节码。opcode生成之后由虚拟机执行。</p>
<h3 id="_2-2-php-7内核架构" tabindex="-1"><a class="header-anchor" href="#_2-2-php-7内核架构" aria-hidden="true">#</a> 2.2 PHP 7内核架构</h3>
<blockquote>
<blockquote>
<p>Zend引擎中包含了编译器和解释器，从PHP代码到opcode的执行，均由Zend引擎完成。</p>
</blockquote>
</blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204205946716.png" alt="image-20211204205946716"></p>
<blockquote>
<blockquote>
<p>该架构图大致分为四大部分。</p>
<p>1）Zend引擎：前文介绍的词法/语法分析、AST编译和opcodes的执行均在Zend引擎中实现。此外，PHP的变量设计、内存管理、进程管理等也在引擎层实现。引擎为PHP提供了基础服务，PHP的可靠性和高性能都依赖引擎的基础支撑。同时，Zend引擎的可扩展性，还是PHP得以大规模应用的重要原因之一。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）PHP层：Zend引擎为PHP提供基础能力（如内存分配和回收），而来自外部的交互则需要通过PHP层来处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）SAPI:SAPI是Server API的缩写，其中包含了常见的cli SAPI和fpm SAPI。PHP定义好输入/输出规范，依据此规范与PHP交互的一方都可以称为Server。这样做的好处便是Server方可以忽略PHP的内部实现，只要遵守定义好的SAPI协议，便可完成交互，极大丰富了PHP可以支持的Server类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）扩展部分：Zend引擎提供了核心能力和接口规范。在此基础上开发的扩展，为PHP代码的性能和功能的多样性提供了更丰富的选项。</p>
</blockquote>
</blockquote>
<p>php cli模式的生命周期：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211208160206350.png" alt="image-20211208160206350"></p>
<p>php -fpm模式生命周期：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211208160735239.png" alt="image-20211208160735239"></p>
<h4 id="网络编程-socket创建" tabindex="-1"><a class="header-anchor" href="#网络编程-socket创建" aria-hidden="true">#</a> 网络编程-socket创建</h4>
<blockquote>
<blockquote>
<p>在Linux中，Nginx服务器和PHP-FPM可以通过TCP Socket和UNIX Socket两种方式实现。其中，UNIX Socket是一种终端，可以使同一台操作系统上的两个或多个进程进行数据通信。这种方式需要在Nginx配置文件中填写PHP-FPM的pid文件位置，效率要比TCP Socket高。TCPSocket的优点是可以跨服务器，当Nginx和PHP-FPM不在同一台机器上时，只能使用这种方式。配置方式如下：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211208161522207.png" alt="image-20211208161522207"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>master进程会创建Socket，而worker进程会通过创建的fd来accept请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>accept请求</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>worker进程会进入循环，当没有请求时，会阻塞在fcgi_accept_request，让出CPU资源，成为空闲进程，当请求到达时会有一个worker进程抢到并处理，进入FasCGI的处理阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHPDBG是一个PHP的SAPI模块，可以在不修改代码和不影响性能的情况下控制PHP的运行环境。PHPDBG的目标是成为一个轻量级、强大、易用的PHP调试平台，从PHP 5.6开始集成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHPDBG提供了类似GDB的功能，支持单步调试，可以灵活地打断点，可以查看类方法、函数、文件的行、内存地址、opcode等，可直接调用PHP的eval，另外还支持远程debug。</p>
</blockquote>
</blockquote>
<h4 id="内存对齐的问题" tabindex="-1"><a class="header-anchor" href="#内存对齐的问题" aria-hidden="true">#</a> 内存对齐的问题：</h4>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204213433693.png" alt="image-20211204213433693"></p>
<blockquote>
<blockquote>
<p>结构体是按照8字节对齐的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然char a只占了1字节，int b只占了4字节，但是long c并不是紧跟着b，而是根据8字节对齐后，c和b之间空了3字节。同样，char* f和int e之间也空了4字节，因此总大小为40字节。虽然浪费了7字节，但得益于内存对齐，存取速度会更快。这是结构体对齐的基础。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结构体和联合体的区别，以及结构体的对齐。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>联合体是成员变量共享一块内存，可以根据使用确定含义；而结构体是不共享的，成员变量不共享一块内存。另外，结构体存在对齐问题。</p>
</blockquote>
</blockquote>
<p>1）栈区（stack）——存储参数值、局部变量，维护函数调用关系等。</p>
<p>2）堆区（heap）——动态内存区域，随时申请和释放，程序自身要对内存泄漏负责。</p>
<p>3）全局区（静态区）——存储全局和静态变量。</p>
<p>4）字面量区——常量字符串存储区。</p>
<p>5）程序代码区——存储二进制代码。</p>
<h4 id="php变量的底层实现" tabindex="-1"><a class="header-anchor" href="#php变量的底层实现" aria-hidden="true">#</a> php变量的底层实现：</h4>
<p>PHP中的变量是使用结构体zval来表示的</p>
<h4 id="_1-php-5的zval" tabindex="-1"><a class="header-anchor" href="#_1-php-5的zval" aria-hidden="true">#</a> （1）PHP 5的zval：</h4>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204214457250.png" alt="image-20211204214457250"></p>
<p>PHP 5的zval核心由一个zvalue_value类型的联合体和zend_uchar类型的type组成。在PHP5.3之后相继引入了refcount__gc字段通过引用计数进行垃圾回收，同时增加了新的字段is_ref__gc来标记是否为引用类型。默认在i386:x86-64架构下，上面的zvalue_value结构体中lval和dval大小为8字节，str结构体大小为12字节，ht和ast是指针类型，大小为8字节，obj结构体大小为12字节，所以在内存对齐的情况下_zval_struct中的value大小为16字节，加上refcount__gc大小为4字节和两个1字节的type、is_ref__gc, _zval_struct结构体本身大小为24字节（考虑到结构体对齐）。</p>
<p>但是并不是php的任何一个变量都占一个zval</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204214827331.png" alt="image-20211204214827331"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204215105795.png" alt="image-20211204215105795"></p>
<blockquote>
<blockquote>
<p>因为整型和浮点型不需要进行gc，所以对于整型和浮点型会有内存浪费。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在开启Zend内存池的情况下，zval_gc_info在内存池中分配，内存池会为每个zval_gc_info额外申请一个大小为16字节的zend_mm_block结构体，用来存放内存相关信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>最终一个变量在PHP 5中实际占用的内存大小为48字节</strong></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204215209372.png" alt="image-20211204215209372"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这48字节的大小其实有很多的浪费，而这点PHP开发者在PHP 7中做了重点优化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_2-php-7的zval" tabindex="-1"><a class="header-anchor" href="#_2-php-7的zval" aria-hidden="true">#</a> （2）PHP 7的zval</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中zval结构体有了一些变化，zval依然保留了value字段，但跟PHP 5不同的是value里面支持更丰富的类型，且PHP 7的zval不再存储复杂类型的结构，复杂类型的数据都是通过指针操作的，新的联合体中value的内存占用只有8字节。</p>
</blockquote>
</blockquote>
<p>在PHP 5时代，所有的变量都在堆中申请，但是对于临时变量是没有必要的，而PHP 7对此做了优化，这种临时变量直接在栈中申请。</p>
<p>“堆与栈的区别有：1、栈由系统自动分配，而堆是人为申请开辟；2、栈获得的空间较小，而堆获得的空间较大；3、栈由系统自动分配，速度较快，而堆一般速度比较慢；4、栈是连续的空间，而堆是不连续的空间。”</p>
<h5 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型：</h5>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204220242244.png" alt="image-20211204220242244"></p>
<p>_zend_string的头部维护着gc的信息，并且冗余了hash值h，这个操作据说为PHP7提高了5%的性能，避免了在数组操作中hash值的重复计算。len表示字符串的长度，val记录了字符串的内容。这里的val值采用了柔性数组（被收入到C99标准中），这种方式相较于PHP 5中的字符串与结构体分离，读写的效率更高。</p>
<p>PHP 7主要依赖zend_string结构体来实现字符串存储，而PHP 5.x则依赖zval结构体实现字符串存储。</p>
<p>两者的相同点是字符串值的存储都是val变量，都由一个len变量记录字符串的长度，都由一个refcount变量记录引用计数，除了相同点，两者之间同样存在很大的不同点</p>
<p>（1）字符串结构的完全改变：</p>
<p>PHP 5的字符串实现是直接嵌入到zval结构体中，占用内存大小在i386:x86-64（下面所说的内存占用都是以它为准）架构下是24字节；</p>
<p>而PHP 7的字符串是单独的zend_string结构体，其大小是32字节（8位对齐后），相较于PHP 5有上升。</p>
<p>（2）字符串真正存储的val字段的实现方式不同</p>
<p>相比于PHP 5的指针存储方式（char *）, PHP 7使用了C语言新的特性：柔性数组。除了这两点不同外，PHP 7的字符串增加了哈希值（h字段）的存储，增加了PHP 7统一的gc头部，用来支持gc。</p>
<p>zend_string内存占用情况zend_string结构体整体占用了32字节，包含了gc、h、len、val四个字段，每个字段各占8字节</p>
<p><strong>对于PHP 7来说，其通过zend_string结构体对字符串重新封装，读取的数据长度以自身结构体len值为准，不再像C语言一样将特殊格式“\0”作为字符串结尾，保证了字符串读写的二进制安全。</strong></p>
<h6 id="_2-字符串的写时分离" tabindex="-1"><a class="header-anchor" href="#_2-字符串的写时分离" aria-hidden="true">#</a> 2．字符串的写时分离</h6>
<p>​		当字符串的refcount&gt;1时，也就是有多个变量引用同一块内存值，对其中一个变量的值进行修改，会触发写时分离，此机制的好处就是，保证了各变量间的独立性。</p>
<p>只有zval为string、array、resource时，才会有写时分离，对象、传址引用等不支持。</p>
<h5 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h5>
<p>数组是PHP代码中比较重要的一个结构，本质上PHP的数组是有序的字典，即它们表示key-value对的有序列表，其中key-value映射是使用HashTable实现的。PHP将字符串key通过哈希函数运算返回一个整数。这个整数被用作“普通”数组的索引。但是带来新的问题是，两个不同的字符串可能得到相同的哈希值，因此这样的HashTable需要实现某种机制来解决冲突。</p>
<p>HashTable结构体头部包含gc结构体，头部的gc结构体解决数组的引用计数和循环引用的问题。</p>
<blockquote>
<blockquote>
<p>本质上，PHP数组是一个有序的字典。它必须同时满足如下两个语义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语义一：PHP数组是一个字典，存储着键-值（key-value）对。通过键可以快速地找到对应的值，键可以是整型，也可以是字符串。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语义二：PHP数组是有序的。这个有序指的是插入顺序，即遍历数组的时候，遍历元素的顺序应该和插入顺序一致，而不像普通字典一样是随机的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了实现语义一，PHP使用HashTable来存储键-值对。但是HashTable本身并不能保证语义二，为了实现语义二，PHP不同版本中都对HashTable进行了一些额外设计来保证有序，而其中尤以PHP 7的设计最为巧妙。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的数组zend_array对应的是HashTable。HashTable是哈希表（也叫散列表），也是一种通过某种哈希函数将特定的键映射到特定值的一种数据结构，它维护着键和值的一一对应关系，并且可以快速地根据键检索到值，查找效率为O(1)。</p>
<p>hashtable结构：</p>
<blockquote>
<blockquote>
<p>1）key：键，通过它可以快速检索到对应的value。一般是数字或字符串。</p>
<p>2）value：值，目标数据。可以是复杂的数据结构。</p>
<p>3）bucket：桶，HashTable中存储数据的单元。用来存储key和value以及辅助信息的容器。</p>
<p>4）slot：槽，HashTable有多个槽，一个bucket必须从属于具体的某一个slot，一个slot下可以有多个bucket。</p>
<p>5）哈希函数：需要自己实现，在存储的时候，会对key应用哈希函数确定所在的slot。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）哈希冲突：当多个key经过哈希计算后，得出的slot的位置是同一个，那么就叫作哈希冲突。这时，一般有两种方法解决冲突——链地址法和开放地址法。PHP中采用的是链地址法，即将同一个slot中的bucket通过链表连接起来。</p>
<p>哈希函数拆分成了hash1和hash2函数。hash1将key映射为h值，hash2将h值映射为slot的索引值。</p>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个h值的作用是什么呢？笔者认为是出于两方面的考虑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一方面由于HashTable中key可能是数字，也有可能是字符串，所以bucket在设计key的时候，需要做拆分，拆分成数字key和字符串key，在上图的bucket中，“h”代表数字key，“key”代表字符串key。实际上，对于数字key, hash1函数没有做任何事情，h值就是数字key。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>另一方面，每一个字符串key，经过hash1函数都会计算出一个h值。这个h值可以加快字符串key之间的比较速度。如果要比较两个字符串key1和key2是否相等，会首先比较key1和key2的h值是否相等，如果相等，再去比较字符串的长度以及内容。否则，可直接判定key1和key2不相等。在大部分场景，不同字符串的h值都不会发生碰撞，这大大提高了HashTable插入、查找的速度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如何基于HashTable实现高效优雅的数组呢？有些读者可能会想，既然是HashTable，如果通过链地址法解决哈希冲突，那么链表是必然需要的。同时为了保证顺序性，的确需要再维护一个全局链表，看起来PHP 5的实现已经是无懈可击了。难道PHP 7数组采用了其他哈希冲突解决方案（比如开放地址法）？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实际上，PHP 7的思路依然是通过链地址法解决哈希冲突。不过此“链”非彼“链”。PHP 5的链表是物理上的链表，链表中bucket之间的上下游关系通过真实存在的指针来维护。而PHP 7的链表是一种逻辑上的链表，所有bucket都分配在连续的数组内存中，不再通过指针维护上下游关系，每一个bucket只维护下一个bucket在数组中的索引（因为是连续内存，通过索引可以快速定位到bucket），即可完成链表上bucket的遍历。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 7中，数组的核心结构是struct _zend_array和bucket，并且为struct_zend_array起了两个别名：HashTable和zend_array。</p>
</blockquote>
</blockquote>
<h5 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> <strong>引用类型：</strong></h5>
<blockquote>
<blockquote>
<p>从PHP 7的zval设计上可以看到，zval没有存储引用计数的相关信息，所以在处理“&amp;”符号引用的问题上，PHP 7采用完全不同的一种方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 5在引入引用计数后，使用了refcount__gc来记录次数，同时使用is_ref__gc来记录是否是引用类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7引入了新的类型IS_REFERENCE来处理这个问题，首先看看zend_reference的结构体：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204221236245.png" alt="image-20211204221236245"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zend_reference由记录gc信息的zend_refcounted_h结构体和zval结构体组成，由val来存储实际的值，zend_refcounted_h结构体用来存储引用计数的信息。前面提到过，在PHP 7中复杂类型的引用计数的信息都记录在自身头部的gc中，zval没有存储引用计数的字段，所以增加了这种结构用于垃圾回收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用“&amp;”操作时，会创建一种新的中间结构体zend_reference，这个结构体会指向真正的zend_string结构体，所以zend_string结构体的引用计数不变，同时zend_reference结构体的引用计数变为2，因为$c和$b此时的类型都会变为zend_reference。这样的好处是原始的zend_string在内存中始终只有一份（避免了由于字符串的重复申请导致的内存浪费），更加易于维护。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用“&amp;”后，会改变“=”号两边的变量的类型，新生成的类型指向字符串当前的地址</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204221555122.png" alt="image-20211204221555122"></p>
</blockquote>
</blockquote>
<p>PHP 7中变量的类型有20种，而PHP 5中只有11种。</p>
<h5 id="常量和常量ast" tabindex="-1"><a class="header-anchor" href="#常量和常量ast" aria-hidden="true">#</a> 常量和常量AST</h5>
<p>常量就是指值固定，在执行期间不会改变，这些固定的值也叫作字面量。PHP底层在做词法和语法解析时会将字面量解析，并将其类型修改为IS_CONST。</p>
<h5 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h5>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211204222309779.png" alt="image-20211204222309779"></p>
<p>PHP 7中对象的属性数据存储在properties_table数组中，而properties是一个HashTable，它的key为对象的属性名，value为属性值在properties_table数组中的偏移量，通过偏移量可以在properties_table数组中取到真正的数据。</p>
<p>另外对象结构体的头部也包含了引用计数的信息</p>
<p>复杂类型的引用计数都是由自身来维护的。</p>
<p>头部的gc结构体解决了PHP 5中重复计数的问题。</p>
<h3 id="php内存管理" tabindex="-1"><a class="header-anchor" href="#php内存管理" aria-hidden="true">#</a> php内存管理：</h3>
<p>PHP 7的内存管理是在C的内存函数库之上做了一层封装</p>
<p>向操作系统申请内存以及释放内存、回收内存，会产生用户态和内核态的切换，是高耗时的操作。PHP 7内存管理器充当了应用层和操作系统内核的中间人，大大减少应用直接向内核频繁申请小块内存的操作，同时PHP 7内存管理器会择时释放，提升系统的整体性能。</p>
<p>PHP 7内存管理还会减少内存“碎片化”问题。没有内存管理器，如果PHP程序持续运行、反复申请与释放内存导致连续内存产生大量碎片，会使得内存利用率降低；内存管理器的内存池技术能按块大小分级分配和回收，减少碎片化。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211208140549222.png" alt="image-20211208140549222"></p>
<p>PHP脚本运行所需的内存空间不是直接从系统申请，而是调用Zend Memory Manager（Zend内存管理器，以下简称MM）提供的一系列接口函数（如zend_mm_alloc_small）申请：如果MM中的可用内存够用，直接分配给PHP程序；如果MM中的可用内存不够，MM再从系统申请。可见这样能有效减少系统调用的次数，并优化内存空间的使用效率。</p>
<blockquote>
<blockquote>
<p>我们需要内存池技术，当申请者第一次申请内存时，直接申请一块大块内存（通常是一页），将此次申请需要的内存部分返回给申请者，并将剩下的内部放到池子中，以后申请者再申请内存时，直接在剩下的部分中选取合适的大小返回给申请者。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存池提供了一个更有效率的解决方案，即预先规划一定数量的内存区块，使得整个程序可以在运行期规划（allocate）、使用（access）、归还（free）内存区块。</p>
</blockquote>
</blockquote>
<p>PHP 7的Zend MM借鉴了jemalloc和tcmalloc这两个成熟的内存管理方案。两者都在业内广泛应用：jemalloc是Firfox浏览器的默认内存管理器，而tcmalloc则是Chrome和Safari的默认内存管理器。抛开jemalloc和tcmalloc的实现细节，MM和“前辈”的内存分配思想是一致的：系统申请大块内存，再按固定的几种规格分割成较小的内存块，由内存池统一管理。当调用方申请内存时，从池子中匹配已经预分配的合适大小的内存块返回。</p>
<p>它维护了3种规格的内存，分别是chunk、page、slot，其中一个chunk大小是2MB，一个page是4KB，一个chunk可以划分成多个page，而一个page又可划分成多个slot，每种规格的内存的应用场景不同，因此它们的分配方式有所不同，对于MM而言，只有chunk是通过malloc的方式向系统申请内存的。</p>
<p>所有类型的chunk都是内存中一块连续的区域，一个chunk的大小是2MB。page是在chunk中分配的，那么一个chunk可以分为2MB/4KB=512个page</p>
<p>PHP 7的MM将申请内存按大小分成了3类：small内存、large内存、huge内存。</p>
<p>1）small内存：小于等于3KB的内存。</p>
<p>2）large内存：大于3KB且小于等于（2MB-4KB）的内存，可以对应整数倍的page，之所以要减掉4KB一个page的大小，后面会详细展开。</p>
<p>3）huge内存：大于2MB-4KB的内存，可以直接对应整数倍的chunk。</p>
<p>内存回收：</p>
<p>内存使用完之后必须要进行释放，通过huge方式和large方式申请的内存的释放比较简单，前面已经讲过。这里主要介绍small内存的释放。释放small内存的一个slot时，并没有判断此slot所在的连续page中的slot是否已全部释放。因为small内存的申请和释放比较频繁，每次都判断不太划算，但MM在申请chunk失败后，会进行内存整理。如果一次申请small内存申请到的连续page中的slot已全部释放，则释放这几个page，再继续申请chunk。</p>
<blockquote>
<blockquote>
<p>PHP 7中复杂类型的引用计数都维护在各个结构体头部的gc中，那么gc的作用是什么？答案是对垃圾回收的支持。什么是垃圾回收呢？垃圾回收是一种自动的内存管理机制，当一个变量在程序中不再被需要时，应该予以释放，这种内存资源管理称为垃圾回收。其中一种垃圾回收的方式是使用引用计数，通过对数据存储的物理空间多附加一个计数器空间，当其他数据与其相关时，计数器加一，反之，相关解除时计数器减一。定期检查各存储对象的计数器，计数器为零的话，则认为该对象已经被抛弃而应将其所占物理空间回收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中垃圾回收的实现方法是定期遍历和标记若干存储对象的数组，再通过算法将是垃圾的物理空间回收。</p>
</blockquote>
</blockquote>
<h3 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> git命令：</h3>
<p><strong>1) 远程仓库相关命令</strong></p>
<p>检出仓库：$ git clone git://<a href="https://so.csdn.net/so/search?q=github&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a>.com/jquery/jquery.git</p>
<p>查看远程仓库：$ git remote -v</p>
<p>添加远程仓库：$ git remote add [name] [url]</p>
<p>删除远程仓库：$ git remote rm [name]</p>
<p>修改远程仓库：$ git remote set-url --push [name] [newUrl]</p>
<p>拉取远程仓库：$ git pull [remoteName] [localBranchName]</p>
<p>推送远程仓库：$ git push [remoteName] [localBranchName]</p>
<p>*如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，如下：</p>
<p>$git push origin test:master     // 提交本地test分支作为远程的master分支</p>
<p>$git push origin test:test        // 提交本地test分支作为远程的test分支</p>
<p><strong>2）分支(branch)操作相关命令</strong></p>
<p>查看本地分支：$ git branch</p>
<p>查看远程分支：$ git branch -r</p>
<p>创建本地分支：$ git branch [name] ----注意新分支创建后不会自动切换为当前分支</p>
<p>切换分支：$ git checkout [name]</p>
<p>创建新分支并立即切换到新分支：$ git checkout -b [name]</p>
<p>删除分支：$ git branch -d [name] ---- -d选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D选项</p>
<p>合并分支：$ git merge [name] ----将名称为[name]的分支与当前分支合并</p>
<p>创建远程分支(本地分支push到远程)：$ git push origin [name]</p>
<p>删除远程分支：$ git push origin :heads/[name] 或 $ gitpush origin :[name]</p>
<p><strong>Git 常用命令</strong></p>
<p>git branch 查看本地所有分支
git status 查看当前状态
git commit 提交
git branch -a 查看所有的分支
git branch -r 查看本地所有分支
git commit -am &quot;init&quot; 提交并且加注释
git remote add origin git@192.168.1.119:ndshow
git push origin master 将文件给推到服务器上
git remote show origin 显示远程库origin里的资源
git push origin master:develop
git push origin master:hb-dev 将本地库与服务器上的库进行关联
git checkout --track origin/dev 切换到远程dev分支
git branch -D master develop 删除本地库develop
git checkout -b dev 建立一个新的本地分支dev
git merge origin/dev 将分支dev与当前分支进行合并
git checkout dev 切换到本地dev分支
git remote show 查看远程库
git add .
git rm 文件名(包括路径) 从git中删除指定文件
git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git commit -a 提交当前repos的所有的改变
git add [file name] 添加一个文件到git index
git commit -v 当你用－v参数的时候可以看commit的差异
git commit -m &quot;This is the message describing the commit&quot; 添加commit信息
git commit -a -a是代表add，把所有的change加到git index里然后再commit
git commit -a -v 一般提交命令
git log 看你commit的日志
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m &quot;remove&quot; 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git stash push 将文件给push到一个临时空间中
git stash pop 将文件从临时空间pop下来
---------------------------------------------------------
git remote add origin git@github.com:username/Hello-World.git
git push origin master 将本地项目给提交到服务器中
-----------------------------------------------------------
git pull 本地与服务器端同步
-----------------------------------------------------------------
git push (远程仓库名) (分支名) 将本地分支推送到服务器上去。
git push origin serverfix:awesomebranch
------------------------------------------------------------------
git fetch 相当于是从远程获取最新版本到本地，不会自动merge
git commit -a -m &quot;log_message&quot; (-a是提交所有改动，-m是加入log信息) 本地修改同步至服务器端 ：
git branch branch_0.1 master 从主分支master创建branch_0.1分支
git branch -m branch_0.1 branch_1.0 将branch_0.1重命名为branch_1.0
git checkout branch_1.0/master 切换到branch_1.0/master分支
du -hs</p>
<h3 id="composer命令" tabindex="-1"><a class="header-anchor" href="#composer命令" aria-hidden="true">#</a> composer命令</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer selfupdate  更新自身
composer dumpautoload  当我们更改了 composer.json 文件中的 autoload 时，需要执行 composer dumpautoload，来让 autoload 立即生效。而不必执行 install 或 update 命令。

composer install 依据当前目录下的 composer.lock（锁文件） 或 composer.json 文件，所定义的依赖关系，安装依赖包。install 命令会先检查 composer.lock 锁文件是否存在，如果存在，它将下载 composer.lock 文件中指定的版本，而忽略 composer.json 文件中的定义。

composer update 如果你想更新你的依赖版本，或者你修改了 composer.json 中的依赖关系，想让 composer 按照 composer.json 文件中的定义执行更新操作，就用 update 命令。

composer require  require 命令一般用来安装新的依赖包，并将依赖写入当前目录的 composer.json 文件中。如果 composer.json 文件中，添加或改变了依赖，修改后的依赖关系将被安装或者更新。你也可以直接在命令中指明需要安装的依赖包。

composer create-project --prefer-dist laravel/laravel blog 5.5.*   从现有的包中创建一个新的项目。它相当于执行了 git clone 命令后，将这个包的依赖安装到它自己的 vendor 目录。如果没有指定版本号，就默认安装最新的版本。--prefer-dist: 当有可用的包时，从 dist 安装。

composer search monolog  search 命令可以搜索远程的依赖包，通常它只搜索 packagist.org 上的包，你可以简单的输入你的搜索条件。

composer show 列出已安装的依赖包，你可以使用 show 命令。

composer show monolog/monolog  查看某个指定的依赖包的详细信息，你可以输入包名称。

composer config -g --list  config 命令允许你编辑 Composer 的一些基本设置，无论是本地的 composer.json 还是全局的 config.json 文件。查看 Composer 的全局配置信息：

composer config -g repo.packagist composer http://www...xxxx				全局配置 Composer 的国内镜像：

composer run-script post-install-cmd  		run-script 命令，可用来手动执行脚本，只需要指定脚本的名称即可。假如，composer.json 中存在如下脚本。运行所有 post-install-cmd 事件下定义的脚本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="php-详解理解php变量的底层原理" tabindex="-1"><a class="header-anchor" href="#php-详解理解php变量的底层原理" aria-hidden="true">#</a> PHP：详解理解PHP变量的底层原理</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>对程序的同学来说，变量不陌生，php的数据结构类型是不得不提的一件事儿，人按照年龄分有少年、青年、中年、老年，php也一样，有属于自己的分类。

PHP是一门弱类型语言，本身不严格区分变量的类型。PHP在变量申明的时候不需要指定类型。PHP在程序运行期间可能进行变量类型的隐示转换。 和其他强类型语言一样，程序中也可以进行显示的类型转换。


PHP变量可以分为简单类型(int、string、bool)、集合类型(array resource object)和常量(const)。以上所有的变量在底层都是同一种结构 zval。用debug_zval_dump打印查看类型。

debug_zval_dump($name); 
//输出：long(30) refcount(2) 

传值和引用赋值

$name = 'stark';
$age = 30;

用一个变量$name指定赋值，在内存中分配一块内存，指针指向内存地址。


图①两个变量同时内存中的同一块地址，有时你会看见$name_bak = &amp;$name,这种的操作叫引用赋值，传递的变量的地址，实际操作上用的不多，这个用不好很容易出错。

Zval主要由三部分组成：
type：指定了变量所述的类型（整数、字符串、数组等）
refcount&amp;is_ref：用来实现引用计数(后面具体介绍)
value：核心部分，存储了变量的实际数据
Zvalue是用来保存一个变量的实际数据。因为要存储多种类型，所以zvalue是一个union，也由此实现了弱类型。

变量（zval）需要注意的知识点：
引用计数在内存回收、字符串操作等地方使用非常广泛。 PHP中的变量就是引用计数的典型应用。Zval的引用计数通过成员变量is_ref和ref_count实现，通过引用计数，多个变量可以共享同一份数据。避免频繁拷贝带来的大量消耗。在进行赋值操作时，zend将变量指向相同的zval同时ref_count++，在unset操作时，对应的ref_count-1。只有ref_count减为0时才会真正执行销毁操作。如果是引用赋值，则zend会修改is_ref为1。

PHP变量通过引用计数实现变量共享数据，那如果改变其中一个变量值呢？当试图写入一个变量时，Zend若发现该变量指向的zval被多个变量共 享，则为其复制一份ref_count为1的zval，并递减原zval的refcount，这个过程称为“zval分离”。可见，只有在有写操作发生时 zend才进行拷贝操作，因此也叫copy-on-write(写时拷贝)对于引用型变量，其要求和非引用型相反，引用赋值的变量间必须是捆绑的，修改一个变量就修改了所有捆绑变量。整数、浮点数是PHP中的基础类型之一，也是一个简单型变量。对于整数和浮点数，在zvalue中直接存储对应的值。其类型分别是long和double。

从zvalue结构中可以看出，对于整数类型，和c等强类型语言不同， PHP是不区分int、unsigned int、long、long long等类型的，对它来说，整数只有一种类型也就是long。由此，可以看出，在PHP里面，整数的取值范围是由编译器位数来决定而不是固定不变的。

对于浮点数，类似整数，它也不区分float和double而是统一只有double一种类型。在PHP中，如果整数范围越界了怎么办？这种情况下会自动转换为double类型，这个一定要小心，很多trick都是由此产生。

和整数一样，字符变量也是PHP中的基础类型和简单型变量。通过zvalue结构可以看出，在PHP中，字符串是由由指向实际数据的指针和长度结 构体组成，这点和c++中的string比较类似。由于通过一个实际变量表示长度，和c不同，它的字符串可以是2进制数据（包含\0），同时在PHP中， 求字符串长度strlen是O(1)操作。在新增、修改、追加字符串操作时，PHP都会重新分配内存生成新的字符串。最后，出于安全考虑，PHP在生成一个字符串时末尾仍然会添加。

PHP的数组通过Zend HashTable来天然实现。foreach操作如何实现？对一个数组的foreach就是通过遍历hashtable中的双向链表完成。对于索引数组，通过foreach遍 历效率比for高很多，省去了key->value的查找。count操作直接调用 HashTable->NumOfElements，O(1)操作。对于’123’这样的字符串，zend会转换为其整数形 式。a r r [ ‘ 123 ’ ] 和 arr[‘123’]和arr[‘123’]和arr[123]是等价的。

资源类型变量是PHP中最复杂的一种变量，也是一种复合型结构。 PHP的zval可以表示广泛的数据类型，但是对于自定义的数据类型却很难充分描述。由于没有有效的方式描绘这些复合结构，因此也没有办法对它们使用传统的操作符。要解决这个问题，只需要通过一个本质上任意的标识符（label）引用指针，这种方式被称为资源。

在zval中，对于resource，lval作为指针来使用，直接指向资源所在的地址。Resource可以是任意的复合结构，我们熟悉的mysqli、fsock、memcached等都是资源。

资源(Resource)/数组(Array)
资源 resource 是一种特殊变量，保存了到外部资源的一个引用。资源是通过专门的函数来建立和使用的。引用计数系统是 Zend 引擎的一部分，可以自动检测到一个资源不再被引用了（和 Java 一样）。这种情况下此资源使用的所有外部资源都会被垃圾回收系统释放。因此，很少需要手工释放内存。

Note: 持久数据库连接比较特殊，它们不会被垃圾回收系统销毁。
1
PHP 中的数组实际上是一个有序映射。映射是一种把 values 关联到 keys 的类型。此类型在很多方面做了优化，因此可以把它当成真正的数组，或列表（向量），散列表（是映射的一种实现），字典，集合，栈，队列以及更多可能性。由于数组元素的值也可以是另一个数组，树形结构和多维数组也是允许的。

使用资源发生了什么？

注册：对于一个自定义的数据类型，要想将它作为资源。首先需要进行注册，zend会为它分配全局唯一标示。

获取一个资源变量：对于资源，zend维护了一个id->实际数据的hash_tale。对于一个resource，在zval中只记录了它的id。fetch的时候通过id在hash_table中找到具体的值返回。

资源销毁：资源的数据类型是多种多样的。Zend本身没有办法销毁它。因此需要用户在注册资源的时候提供销毁函数。当unset资源时，zend调用相应的函数完成析构。同时从全局资源表中删除它。

资源可以长期驻留，不只是在所有引用它的变量超出作用域之后，甚至是在一个请求结束了并且新的请求产生之后。这些资源称为持久资源，因为它们贯通 SAPI的整个生命周期持续存在，除非特意销毁。很多情况下，持久化资源可以在一定程度上提高性能。比如我们常见的mysql_pconnect ,持久化资源通过pemalloc分配内存，这样在请求结束的时候不会释放。 对zend来说，对两者本身并不区分。

HashTable，一个经典又不好理解的数据结构，HashTable的数据结构PHP编程快速便捷的灵魂所在。

HashTable
php数组中的应用和redis里的有序集合有点相似，都多处用到了双向链表和散列。在hash table中既有key->value形式的散列结构，也有双向链表模式，使得它能够非常方便的支持快速查找和线性遍历。

1、散列结构：Zend的散列结构是典型的hash表模型，通过链表的方式来解决冲突。需要注意的是zend的hash table是一个自增长的数据结构，当hash表数目满了之后，其本身会动态以2倍的方式扩容并重新元素位置。初始大小均为8。另外，在进行 key->value快速查找时候，zend本身还做了一些优化，通过空间换时间的方式加快速度。比如在每个元素中都会用一个变量 nKeyLength标识key的长度以作快速判定。

2、双向链表：Zend hash table通过一个链表结构，实现了元素的线性遍历。理论上，做遍历使用单向链表就够了，之所以使用双向链表，主要目的是为了快速删除，避免遍历。 Zend hash table是一种复合型的结构，作为数组使用时，即支持常见的关联数组也能够作为顺序索引数字来使用，甚至允许2者的混合。PHP关联数组：关联数组是典型的hash_table应用。一次查询过程经过如下几步（从代码可以看出，这是一个常见的hash查询过程并增加一些快速判定加速查找。）：

getKeyHashValue h;
index = n &amp; nTableMask;
Bucket *p = arBucket[index];
while (p) {
       if ((p->h == h) &amp;&amp; (p->nKeyLength == nKeyLength)) {
              RETURN p->data;   
        }
        p=p->next;
}
RETURN FALTURE;


————————————————
版权声明：本文为CSDN博主「stark张宇」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xuezhiwu001/article/details/100108438
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="php7的性能优化总结" tabindex="-1"><a class="header-anchor" href="#php7的性能优化总结" aria-hidden="true">#</a> PHP7的性能优化总结</h1>
<p>php5:开发效率快,语言本身性能差
在普通的网站:io密集型,瓶颈在mysql上,体现不出php的性能劣势
然而在密集计算方面,比c/c++/java就差几十甚至几百倍</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php7的重点新特性
	函数的参数增加标量类型限定声明,以前支持对象和数组
  函数的返回值增加类型限定声明
 //为JIT特性做准备的,让JIT可以准确的判断变量的类型,生成最佳的机器码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/common/总结/image-20220209170821758.png" alt="image-20220209170821758"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209170836158.png" alt="image-20220209170836158"></p>
<p><strong>1. zval使用了栈内存</strong></p>
<p>在zend引擎和扩展中,经常要创建一个php变量,底层就是一个<code v-pre>zval指针</code>(与symbol_table的变量名有关).之前是通过MAKE_STD_ZVAL动态的从<code v-pre>堆上分配</code>一个<code v-pre>zval内存</code>的,而在php7可以直接使用<code v-pre>栈内存</code></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209170949590.png" alt="image-20220209170949590"></p>
<p><strong>2.zend_string存储hash值,array查询不再需要重复计算hash</strong></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209171011151.png" alt="image-20220209171011151"></p>
<p><strong>3.在hashtable桶内直接存数据,减少了内存的申请次数,提升了cache命中率和内存访问速度(因为几乎在同一个内存页中了)</strong></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209171157851.png" alt="image-20220209171157851"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209171218046.png" alt="image-20220209171218046"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209171228374.png" alt="image-20220209171228374"></p>
<p>直接就是一大块内存,在内存之上就是一个一个的桶.
这样的好处就是,在php7之前每次有数据插入,都要申请一次内存.而在7中,只需要一次分配一块大内存就行了.减少了内存申请的次数
4.zend_parse_parameters改为了宏实现,性能提升5%
主要用扩展开发,功能是从php变量到c扩展函数之间交换参数,交换返回值.
php7之前,这个函数是c函数实现的:
<img src="@source/docs/theme-reco/img/common/总结/image-20220209171325229.png" alt="image-20220209171325229"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209171334539.png" alt="image-20220209171334539"></p>
<p><strong>5.增加4中opcode指令</strong></p>
<blockquote>
<p>call_user_function,is_init/string/array,strlen,defined函数变成opcode指令,速度更快</p>
</blockquote>
<p><strong>6.其他</strong>
<code v-pre>基础类型int,float,bool等赋值的时候改为直接的值拷贝(之前使用的是php的引用技术,zval有关)</code>
<code v-pre>排序算法改进,PCRE withJIT(正则表达式编译成机器码)</code></p>
<p>了解一下gdb的pgo功能</p>
<p>JIT:
<img src="@source/docs/theme-reco/img/common/总结/20181102005234921.png" alt="在这里插入图片描述"></p>
<h3 id="php8中的jit是什么" tabindex="-1"><a class="header-anchor" href="#php8中的jit是什么" aria-hidden="true">#</a> PHP8中的JIT是什么？</h3>
<p>JIT是一种编译器策略，它将代码表述为一种中间状态，在运行时将其转换为依赖于体系结构的机器码，并即时执行，在PHP8中，Zend VM不需要解释某些操作码，并且这些指令将直接作为CPU级指令执行。</p>
<p>PHP 8 的 JIT</p>
<p>PHP 8 Just In Time (JIT) 编译器带来的影响是毋庸置疑的。但是到目前为止，我发现关于 JIT 应该做什么却知之甚少。</p>
<p>推荐视频教程：《PHP编程从入门到精通》</p>
<p>经过多次研究和放弃，我决定亲自检查 PHP 源代码。结合我对 C 语言的一些知识和我目前收集到的所有零散信息，我提出了这篇文章，我希望它能帮助您更好地理解 PHP 的 JIT。</p>
<p>简单一点来说 ： 当 JIT 按预期工作时，您的代码不会通过 Zend VM 执行，而是作为一组 CPU 级指令直接执行。</p>
<p>这就是全部的想法。</p>
<p>但是为了更好地理解它，我们需要考虑 php 如何在内部工作。不是很复杂，但需要一些介绍。</p>
<p>PHP 的代码是怎么执行的？</p>
<p>总所周知， PHP 是解释型语言，但这句话本身是什么意思呢？</p>
<p>每次执行 PHP 代码（命令行脚本或者 WEB 应用）时，都要经过 PHP 解释器。最常用的是 PHP-FPM 和 CLI 解释器。</p>
<p>解释器的工作很简单：接收 PHP 代码，对其进行解释，然后返回结果。</p>
<p>一般的解释型语言都是这个流程。有些语言可能会减少几个步骤，但总体的思路相同。在 PHP 中，这个流程如下：</p>
<p>读取 PHP 代码并将其解释为一组称为 Tokens 的关键字。这个过程让解释器知道各个程序都写了哪些代码。 这一步称为 Lexing 或 Tokenizing 。</p>
<p>拿到 Tokens 集合以后，PHP 解释器将尝试解析他们。通过称之为 Parsing 的过程生成抽象语法树（AST）。这里 AST 是一个节点集表示要执行哪些操作。比如，「 echo 1 + 1 」实际含义是 「打印 1 + 1 的结果」 或者更详细的说 「打印一个操作，这个操作是 1 + 1」。</p>
<p>有了 AST ，可以更轻松地理解操作和优先级。将抽象语法树转换成可以被 CPU 执行的操作需要一个用于过渡的表达式 (IR)，在 PHP 中我们称之为 Opcodes 。将 AST 转换为 Opcodes 的过程称为 compilation 。</p>
<p>有了 Opcodes ，有趣的部分就来了： executing 代码！ PHP 有一个称为 Zend VM 的引擎，该引擎能够接收一系列 Opcodes 并执行它们。执行所有 Opcodes 后， Zend VM 就会将该程序终止。</p>
<p>这是包含 Opcache 扩展的流程示意图：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220209172218989.png" alt="image-20220209172218989"></p>
<p>JIT 编译有什么效果？</p>
<p>听了 Zeev 在 PHP Internals News 发表的 PHP 和 JIT 广播 之后，我弄清了 JIT 实际做了什么事情。</p>
<p>如果说 Opcache 扩展可以更快的获取 Opcodes 将其直接转到 Zend VM，则 JIT 让它们完全不使用 Zend VM 即可运行。</p>
<p>Zend VM 是用 C 编写的程序，充当 Opcodes 和 CPU 之间的一层。 JIT 在运行时直接生成编译后的代码，因此 PHP 可以</p>
<p>跳过 Zend VM 并直接被 CPU 执行。 从理论上说，性能会更好。</p>
<p>这听起来很奇怪，因为在编译成机器码之前，需要为每种类型的结构体编写一个具体的实现。但实际上这也是合理的。</p>
<p>PHP 的 JIT 使用了名为 DynASM (Dynamic Assembler) 的库，该库将一种特定格式的一组 CPU 指令映射为许多不同 CPU 类型的汇编代码。因此，编译器只需要使用 DynASM 就可以将 Opcodes 转换为特定结构体的机器码。</p>
<p>但是，有一个问题困扰了我很久。</p>
<p>如果预加载能够在执行之前将 PHP 代码解析为 Opcodes，并且 DynASM 可以将 Opcodes 编译为机器码 (Just In Time 编译) ，为什么我们不立即使用运行前编译 (Ahead of Time 编译) 立即编译 PHP 呢？</p>
<p>通过收听 Zeev 的广播，我找到的原因之一就是 PHP 是弱类型语言，这意味着在 Zend VM 尝试执行某个操作码之前， PHP 通常不知道变量的类型。</p>
<p>可以查看 Zend_value 联合类型 得知，很多指针指向不同类型的变量。每当 Zend VM 尝试从 Zend_value 获取值时，它都会使用像 ZSTR_VAL 这样的宏，获取联合类型中字符串的指针。</p>
<p>例如，这个 Zend VM handler 是处理「小于或等于」(&lt;=) 表达式。看看它编码这么多的 if else 分支，只是为了类型推断。</p>
<p>使用机器码执行类型推断逻辑是不可行的，并且可能变得更慢。</p>
<p>先求值再编译也不是一个好选择，因为编译为机器码是 CPU 密集型任务。因此，在运行时编译所有内容也不好。</p>
<ul>
<li>Opcache会做opcode层面的优化，比如图中的俩条opcode合并为一条</li>
<li>PHP8的JIT目前是在Opcache之中提供的</li>
<li>JIT在Opcache优化之后的基础上，结合Runtime的信息再次优化，直接生成机器码</li>
<li>JIT不是原来Opcache优化的替代，是增强</li>
<li>目前PHP8只支持x86架构的CPU</li>
</ul>
<h3 id="redis底层" tabindex="-1"><a class="header-anchor" href="#redis底层" aria-hidden="true">#</a> Redis底层：</h3>
<p>除了常用得5种数据结构外，还有hyperloglog用于基数统计</p>
<p>Redis GEO 主要用于存储地理位置信息，并对存储的信息进行操作，该功能在 Redis 3.2 版本新增。</p>
<p>Redis Stream 是 Redis 5.0 版本新增加的数据结构。</p>
<p>Redis Stream 主要用于消息队列（MQ，Message Queue），Redis 本身是有一个 Redis 发布订阅 (pub/sub) 来实现消息队列的功能，但它有个缺点就是消息无法持久化，如果出现网络断开、Redis 宕机等，消息就会被丢弃。</p>
<p>简单来说发布订阅 (pub/sub) 可以分发消息，但无法记录历史消息。</p>
<p>而 Redis Stream 提供了消息的持久化和主备复制功能，可以让任何客户端访问任何时刻的数据，并且能记住每一个客户端的访问位置，还能保证消息不丢失。</p>
<p>Redis 通过监听一个 TCP 端口或者 Unix socket 的方式来接收来自客户端的连接，当一个连接建立后，Redis 内部会进行以下一些操作：</p>
<ul>
<li>首先，客户端 socket 会被设置为非阻塞模式，因为 Redis 在网络事件处理上采用的是非阻塞多路复用模型。</li>
<li>然后为这个 socket 设置 TCP_NODELAY 属性，禁用 Nagle 算法</li>
<li>然后创建一个可读的文件事件用于监听这个客户端 socket 的数据发送</li>
</ul>
<p>string 类型是二进制安全的，意思是 Redis 的 string 可以包含任何数据，比如图片或者序列化的对象，一个 redis 中字符串 value 最多可以是 512M。</p>
<p>查看数据类型： object encoding  key</p>
<p>可以看到实现string数据类型的数据结构有 embstr 以及 int。</p>
<h5 id="_1-字符串" tabindex="-1"><a class="header-anchor" href="#_1-字符串" aria-hidden="true">#</a> 1.字符串</h5>
<p>redis中字符串是简单动态字符串，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>struct sdshdr{
     //记录buf数组中已使用字节的数量
     //等于 SDS 保存字符串的长度
     int len;
     //记录 buf 数组中未使用字节的数量
     int free;
     //字节数组，用于保存字符串
     char buf[];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看上面对于 SDS 数据类型的定义：</p>
<p>1、len 保存了SDS保存字符串的长度</p>
<p>2、buf[] 数组用来保存字符串的每个元素</p>
<p>3、free j记录了 buf 数组中未使用的字节数量</p>
<p>上面的定义相对于 C 语言对于字符串的定义，多出了 len 属性以及 free 属性。为什么不使用C语言字符串实现，而是使用 SDS呢？这样实现有什么好处？</p>
<p><strong>①、常数复杂度获取字符串长度</strong></p>
<p>由于 len 属性的存在，我们获取 SDS 字符串的长度只需要读取 len 属性，时间复杂度为 O(1)。而对于 C 语言，获取字符串的长度通常是经过遍历计数来实现的，时间复杂度为 O(n)。通过 strlen key 命令可以获取 key 的字符串长度。</p>
<p><strong>②、杜绝缓冲区溢出</strong></p>
<p>我们知道在 C 语言中使用 strcat 函数来进行两个字符串的拼接，一旦没有分配足够长度的内存空间，就会造成缓冲区溢出。而对于 SDS 数据类型，在进行字符修改的时候，会首先根据记录的 len 属性检查内存空间是否满足需求，如果不满足，会进行相应的空间扩展，然后在进行修改操作，所以不会出现缓冲区溢出。</p>
<p><strong>③、减少修改字符串的内存重新分配次数</strong></p>
<p>C语言由于不记录字符串的长度，所以如果要修改字符串，必须要重新分配内存（先释放再申请），因为如果没有重新分配，字符串长度增大时会造成内存缓冲区溢出，字符串长度减小时会造成内存泄露。</p>
<p>而对于SDS，由于len属性和free属性的存在，对于修改字符串SDS实现了空间预分配和惰性空间释放两种策略：</p>
<p>1、空间预分配：对字符串进行空间扩展的时候，扩展的内存比实际需要的多，这样可以减少连续执行字符串增长操作所需的内存重分配次数。</p>
<p>2、惰性空间释放：对字符串进行缩短操作时，程序不立即使用内存重新分配来回收缩短后多余的字节，而是使用 free 属性将这些字节的数量记录下来，等待后续使用。（当然SDS也提供了相应的API，当我们有需要时，也可以手动释放这些未使用的空间。）</p>
<p><strong>④、二进制安全</strong></p>
<p>因为C字符串以空字符作为字符串结束的标识，而对于一些二进制文件（如图片等），内容可能包括空字符串，因此C字符串无法正确存取；而所有 SDS 的API 都是以处理二进制的方式来处理 buf 里面的元素，并且 SDS 不是以空字符串来判断是否结束，而是以 len 属性表示的长度来判断字符串是否结束。</p>
<p><strong>⑤、兼容部分 C 字符串函数</strong></p>
<p>虽然 SDS 是二进制安全的，但是一样遵从每个字符串都是以空字符串结尾的惯例，这样可以重用 C 语言库&lt;string.h&gt; 中的一部分函数。</p>
<p><strong>⑥、总结</strong></p>
<p><img src="@source/docs/theme-reco/img/common/总结/1120165-20180527234349672-568401853.png" alt="img"></p>
<p>一般来说，SDS 除了保存数据库中的字符串值以外，SDS 还可以作为缓冲区（buffer）：包括 AOF 模块中的AOF缓冲区以及客户端状态中的输入缓冲区。</p>
<h5 id="_2-链表" tabindex="-1"><a class="header-anchor" href="#_2-链表" aria-hidden="true">#</a> 2.链表</h5>
<p>链表是一种常用的数据结构，C 语言内部是没有内置这种数据结构的实现，所以Redis自己构建了链表的实现。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>typedef  struct listNode{
       //前置节点
       struct listNode *prev;
       //后置节点
       struct listNode *next;
       //节点的值
       void *value;  
}listNode
　　通过多个 listNode 结构就可以组成链表，这是一个双向链表，Redis还提供了操作链表的数据结构：

typedef struct list{
     //表头节点
     listNode *head;
     //表尾节点
     listNode *tail;
     //链表所包含的节点数量
     unsigned long len;
     //节点值复制函数
     void (*free) (void *ptr);
     //节点值释放函数
     void (*free) (void *ptr);
     //节点值对比函数
     int (*match) (void *ptr,void *key);
}list;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis链表特性：</p>
<p>①、双端：链表具有前置节点和后置节点的引用，获取这两个节点时间复杂度都为O(1)。</p>
<p>②、无环：表头节点的 prev 指针和表尾节点的 next 指针都指向 NULL,对链表的访问都是以 NULL 结束。</p>
<p>③、带链表长度计数器：通过 len 属性获取链表长度的时间复杂度为 O(1)。</p>
<p>④、多态：链表节点使用 void* 指针来保存节点值，可以保存各种不同类型的值。</p>
<h5 id="_3-字典" tabindex="-1"><a class="header-anchor" href="#_3-字典" aria-hidden="true">#</a> 3.字典</h5>
<p>字典又称为符号表或者关联数组、或映射（map），是一种用于保存键值对的抽象数据结构。字典中的每一个键 key 都是唯一的，通过 key 可以对值来进行查找或修改。C 语言中没有内置这种数据结构的实现，所以字典依然是 Redis自己构建的。</p>
<p>Redis 的字典使用哈希表作为底层实现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>哈希表结构定义：

1
2
3
4
5
6
7
8
9
10
11
12
typedef struct dictht{
     //哈希表数组
     dictEntry **table;
     //哈希表大小
     unsigned long size;
     //哈希表大小掩码，用于计算索引值
     //总是等于 size-1
     unsigned long sizemask;
     //该哈希表已有节点的数量
     unsigned long used;
 
}dictht
　　哈希表是由数组 table 组成，table 中每个元素都是指向 dict.h/dictEntry 结构，dictEntry 结构定义如下：

typedef struct dictEntry{
     //键
     void *key;
     //值
     union{
          void *val;
          uint64_tu64;
          int64_ts64;
     }v;
 
     //指向下一个哈希表节点，形成链表
     struct dictEntry *next;
}dictEntry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key 用来保存键，val 属性用来保存值，值可以是一个指针，也可以是uint64_t整数，也可以是int64_t整数。</p>
<p>注意这里还有一个指向下一个哈希表节点的指针，我们知道哈希表最大的问题是存在哈希冲突，如何解决哈希冲突，有开放地址法和链地址法。这里采用的便是链地址法，通过next这个指针可以将多个哈希值相同的键值对连接在一起，用来解决<strong>哈希冲突</strong>。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/1120165-20180528080655703-1600710948.png" alt="img"></p>
<p>**①、哈希算法：**Redis计算哈希值和索引值方法如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#1、使用字典设置的哈希函数，计算键 key 的哈希值``hash = dict->type->hashFunction(key);``#2、使用哈希表的sizemask属性和第一步得到的哈希值，计算索引值``index = hash &amp; dict->ht[x].sizemask;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**②、解决哈希冲突：**这个问题上面我们介绍了，方法是链地址法。通过字典里面的 *next 指针指向下一个具有相同索引值的哈希表节点。</p>
<p>**③、扩容和收缩：**当哈希表保存的键值对太多或者太少时，就要通过 rerehash(重新散列）来对哈希表进行相应的扩展或者收缩。具体步骤：</p>
<p>1、如果执行扩展操作，会基于原哈希表创建一个大小等于 ht[0].used*2n 的哈希表（也就是每次扩展都是根据原哈希表已使用的空间扩大一倍创建另一个哈希表）。相反如果执行的是收缩操作，每次收缩是根据已使用空间缩小一倍创建一个新的哈希表。</p>
<p>2、重新利用上面的哈希算法，计算索引值，然后将键值对放到新的哈希表位置上。</p>
<p>3、所有键值对都迁徙完毕后，释放原哈希表的内存空间。</p>
<p><strong>④、触发扩容的条件：</strong></p>
<p>1、服务器目前没有执行 BGSAVE 命令或者 BGREWRITEAOF 命令，并且负载因子大于等于1。</p>
<p>2、服务器目前正在执行 BGSAVE 命令或者 BGREWRITEAOF 命令，并且负载因子大于等于5。</p>
<p>ps：负载因子 = 哈希表已保存节点数量 / 哈希表大小。</p>
<ul>
<li>当哈希表的负载因子小于0.1时，redis会自动开始对哈希表进行缩容操作。</li>
</ul>
<p>其中哈希表的负载因子可以通过公式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 负载因子 = 哈希表以保存节点数量/哈希表大小</span>
load_factor <span class="token operator">=</span> ht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.used / ht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>⑤、渐近式 rehash</strong></p>
<p>什么叫渐进式 rehash？也就是说扩容和收缩操作不是一次性、集中式完成的，而是分多次、渐进式完成的。如果保存在Redis中的键值对只有几个几十个，那么 rehash 操作可以瞬间完成，但是如果键值对有几百万，几千万甚至几亿，那么要一次性的进行 rehash，势必会造成Redis一段时间内不能进行别的操作。所以Redis采用渐进式 rehash,这样在进行渐进式rehash期间，字典的删除查找更新等操作可能会在两个哈希表上进行，第一个哈希表没有找到，就会去第二个哈希表上进行查找。但是进行 增加操作，一定是在新的哈希表上进行的。</p>
<h5 id="_4-跳跃表" tabindex="-1"><a class="header-anchor" href="#_4-跳跃表" aria-hidden="true">#</a> 4.跳跃表</h5>
<p>跳跃表（skiplist）是一种有序数据结构，它通过在每个节点中维持多个指向其它节点的指针，从而达到快速访问节点的目的。具有如下性质：</p>
<p>1、由很多层结构组成；</p>
<p>2、每一层都是一个有序的链表，排列顺序为由高层到底层，都至少包含两个链表节点，分别是前面的head节点和后面的nil节点；</p>
<p>3、最底层的链表包含了所有的元素；</p>
<p>4、如果一个元素出现在某一层的链表中，那么在该层之下的链表也全都会出现（上一层的元素是当前层的元素的子集）；</p>
<p>5、链表中的每个节点都包含两个指针，一个指向同一层的下一个链表节点，另一个指向下一层的同一个链表节点；</p>
<p><img src="@source/docs/theme-reco/img/common/总结/1120165-20180528210921601-949409375.png" alt="img"></p>
<p>有序集合就是跳跃表实现的。</p>
<p>①、搜索：从最高层的链表节点开始，如果比当前节点要大和比当前层的下一个节点要小，那么则往下找，也就是和当前层的下一层的节点的下一个节点进行比较，以此类推，一直找到最底层的最后一个节点，如果找到则返回，反之则返回空。</p>
<p>②、插入：首先确定插入的层数，有一种方法是假设抛一枚硬币，如果是正面就累加，直到遇见反面为止，最后记录正面的次数作为插入的层数。当确定插入的层数k后，则需要将新元素插入到从底层到k层。</p>
<p>③、删除：在各个层中找到包含指定值的节点，然后将节点从链表中删除即可，如果删除以后只剩下头尾两个节点，则删除这一层。</p>
<p>Redis 有序集合和集合一样也是 string 类型元素的集合,且不允许重复的成员。</p>
<p>不同的是每个元素都会关联一个 double 类型的分数。redis 正是通过分数来为集合中的成员进行从小到大的排序。</p>
<p>有序集合的成员是唯一的,但分数(score)却可以重复。</p>
<p>集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。 集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。</p>
<h5 id="_5-整数集合" tabindex="-1"><a class="header-anchor" href="#_5-整数集合" aria-hidden="true">#</a> 5.整数集合</h5>
<blockquote>
<blockquote>
<p>整数集合（intset）是集合键的底层实现之一，当一个集合只包含整数值元素，并且这个集合的元素数量不多时，Redis就会使用整数集合作为集合键的底层实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们创建一个只包含五个元素的集合键，并且集合中的所有元素都是整数值，那么这个集合键的底层实现就会是整数集合：</p>
</blockquote>
</blockquote>
<p>整数集合（intset）是Redis用于保存整数值的集合抽象数据类型，它可以保存类型为int16_t、int32_t 或者int64_t 的整数值，并且保证集合中不会出现重复元素。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>typedef struct intset{
     //编码方式
     uint32_t encoding;
     //集合包含的元素数量
     uint32_t length;
     //保存元素的数组
     int8_t contents[];
}intset;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集合对象的编码可以是 intset 或者 hashtable。</p>
<p>Redis 中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。</p>
<p>集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。</p>
<p>整数集合是集合键的底层实现之一。</p>
<p><strong>①、升级</strong></p>
<p>当我们新增的元素类型比原集合元素类型的长度要大时，需要对整数集合进行升级，才能将新元素放入整数集合中。具体步骤：</p>
<p>1、根据新元素类型，扩展整数集合底层数组的大小，并为新元素分配空间。</p>
<p>2、将底层数组现有的所有元素都转成与新元素相同类型的元素，并将转换后的元素放到正确的位置，放置过程中，维持整个元素顺序都是有序的。</p>
<p>3、将新元素添加到整数集合中（保证有序）。</p>
<p>升级能极大地节省内存。</p>
<p><strong>②、降级</strong></p>
<p>整数集合不支持降级操作，一旦对数组进行了升级，编码就会一直保持升级后的状态。</p>
<p>❑整数集合的底层实现为数组，这个数组以有序、无重复的方式保存集合元素，在有需要时，程序会根据新添加元素的类型，改变这个数组的类型。</p>
<p>❑升级操作为整数集合带来了操作上的灵活性，并且尽可能地节约了内存。</p>
<p>❑整数集合只支持升级操作，不支持降级操作。</p>
<h5 id="_7、压缩列表" tabindex="-1"><a class="header-anchor" href="#_7、压缩列表" aria-hidden="true">#</a> 7、压缩列表</h5>
<p>压缩列表（ziplist）是Redis为了节省内存而开发的，是由一系列特殊编码的连续内存块组成的顺序型数据结构，一个压缩列表可以包含任意多个节点（entry），每个节点可以保存一个字节数组或者一个整数值。</p>
<p><strong>压缩列表的原理：压缩列表并不是对数据利用某种算法进行压缩，而是将数据按照一定规则编码在一块连续的内存区域，目的是节省内存。</strong></p>
<p>①、previous_entry_ength：记录压缩列表前一个字节的长度。previous_entry_ength的长度可能是1个字节或者是5个字节，如果上一个节点的长度小于254，则该节点只需要一个字节就可以表示前一个节点的长度了，如果前一个节点的长度大于等于254，则previous length的第一个字节为254，后面用四个字节表示当前节点前一个节点的长度。利用此原理即当前节点位置减去上一个节点的长度即得到上一个节点的起始位置，压缩列表可以从尾部向头部遍历。这么做很有效地减少了内存的浪费。</p>
<p>②、encoding：节点的encoding保存的是节点的content的内容类型以及长度，encoding类型一共有两种，一种字节数组一种是整数，encoding区域长度为1字节、2字节或者5字节长。</p>
<p>③、content：content区域用于保存节点的内容，节点内容类型和长度由encoding决定。</p>
<blockquote>
<blockquote>
<p>压缩列表（ziplist）是列表键和哈希键的底层实现之一。当一个列表键只包含少量列表项，并且每个列表项要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做列表键的底层实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当一个哈希键只包含少量键值对，比且每个键值对的键和值要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做哈希键的底层实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>哈希键里面包含的所有键和值都是小整数值或者短字符串。</p>
</blockquote>
</blockquote>
<h5 id="_8、总结" tabindex="-1"><a class="header-anchor" href="#_8、总结" aria-hidden="true">#</a> 8、总结</h5>
<p>大多数情况下，Redis使用简单字符串SDS作为字符串的表示，相对于C语言字符串，SDS具有常数复杂度获取字符串长度，杜绝了缓存区的溢出，减少了修改字符串长度时所需的内存重分配次数，以及二进制安全能存储各种类型的文件，并且还兼容部分C函数。</p>
<p>通过为链表设置不同类型的特定函数，Redis链表可以保存各种不同类型的值，除了用作列表键，还在发布与订阅、慢查询、监视器等方面发挥作用（后面会介绍）。</p>
<p>Redis的字典底层使用哈希表实现，每个字典通常有两个哈希表，一个平时使用，另一个用于rehash时使用，使用链地址法解决哈希冲突。</p>
<p>跳跃表通常是有序集合的底层实现之一，表中的节点按照分值大小进行排序。</p>
<p>整数集合是集合键的底层实现之一，底层由数组构成，升级特性能尽可能的节省内存。</p>
<p>压缩列表是Redis为节省内存而开发的顺序型数据结构，通常作为列表键和哈希键的底层实现之一。</p>
<h5 id="对象-1" tabindex="-1"><a class="header-anchor" href="#对象-1" aria-hidden="true">#</a> 对象</h5>
<blockquote>
<blockquote>
<p>Redis用到的所有主要数据结构，比如简单动态字符串（SDS）、双端链表、字典、压缩列表、整数集合等等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis并没有直接使用这些数据结构来实现键值对数据库，而是基于这些数据结构创建了一个对象系统，这个系统包含字符串对象、列表对象、哈希对象、集合对象和有序集合对象这五种类型的对象，每种对象都用到了至少一种我们前面所介绍的数据结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过这五种不同类型的对象，Redis可以在执行命令之前，根据对象的类型来判断一个对象是否可以执行给定的命令。使用对象的另一个好处是，我们可以针对不同的使用场景，为对象设置多种不同的数据结构实现，从而优化对象在不同场景下的使用效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis的对象系统还实现了基于引用计数技术的内存回收机制，当程序不再使用某个对象的时候，这个对象所占用的内存就会被自动释放；另外，Redis还通过引用计数技术实现了对象共享机制，这一机制可以在适当的条件下，通过让多个数据库键共享同一个对象来节约内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis的对象带有访问时间记录信息，该信息可以用于计算数据库键的空转时长，在服务器启用了maxmemory功能的情况下，空转时长较大的那些键可能会优先被服务器删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis使用对象来表示数据库中的键和值，每次当我们在Redis的数据库中新创建一个键值对时，我们至少会创建两个对象，一个对象用作键值对的键（键对象），另一个对象用作键值对的值（值对象）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis中的每个对象都由一个redisObject结构表示，该结构中和保存数据有关的三个属性分别是type属性、encoding属性和ptr属性.</p>
</blockquote>
</blockquote>
<p>使用OBJECT ENCODING命令可以查看一个数据库键的值对象的编码</p>
<p>（1）字符串对象：</p>
<p>字符串对象的编码可以是int、raw或者embstr。</p>
<p>如果字符串对象保存的是一个字符串值，并且这个字符串值的长度大于32字节，那么字符串对象将使用一个简单动态字符串（SDS）来保存这个字符串值，并将对象的编码设置为raw。</p>
<p>如果字符串对象保存的是一个字符串值，并且这个字符串值的长度小于等于32字节，那么字符串对象将使用embstr编码的方式来保存这个字符串值。</p>
<p>raw编码会调用两次内存分配函数来分别创建redisObject结构和sdshdr结构，而embstr编码则通过调用一次内存分配函数来分配一块连续的空间，空间中依次包含redisObject和sdshdr两个结构</p>
<p>如果一个字符串对象保存的是整数值，并且这个整数值可以用long类型来表示，那么字符串对象会将整数值保存在字符串对象结构的ptr属性里面（将void*转换成long），并将字符串对象的编码设置为int。</p>
<p>（2）列表对象</p>
<p>编码可以是ziplist或者linkedlist。</p>
<p>在列表对象包含的元素比较少时，Redis使用压缩列表作为列表对象的底层实现：</p>
<p>❑因为压缩列表比双端链表更节约内存，并且在元素数量较少时，在内存中以连续块方式保存的压缩列表比起双端链表可以更快被载入到缓存中；</p>
<p>❑随着列表对象包含的元素越来越多，使用压缩列表来保存元素的优势逐渐消失时，对象就会将底层实现从压缩列表转向功能更强、也更适合保存大量元素的双端链表上面；</p>
<p><strong>总结：列表对象的实现有两种：压缩列表和双端链表</strong></p>
<p>对象的结构也是有：type , encoding , ptr.数据都在ptr里存着</p>
<blockquote>
<blockquote>
<p>字符串对象是Redis五种类型的对象中唯一一种会被其他四种类型对象嵌套的对象。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当列表对象可以同时满足以下两个条件时，列表对象使用ziplist编码：</p>
<p>​		❑列表对象保存的所有字符串元素的长度都小于64字节；</p>
<p>​		❑列表对象保存的元素数量小于512个；不能满足这两个条件的列表对象需要使用linkedlist编码。</p>
<p>​		以上两个条件的上限值是可以修改的，具体请看配置文件中关于list-max-ziplist-value选项和list-max-ziplist-entries选项的说明。</p>
</blockquote>
</blockquote>
<p>（3）哈希对象</p>
<p><strong>哈希对象的编码可以是ziplist或者hashtable。</strong></p>
<blockquote>
<blockquote>
<p>ziplist编码的哈希对象使用压缩列表作为底层实现，每当有新的键值对要加入到哈希对象时，程序会先将保存了键的压缩列表节点推入到压缩列表表尾，然后再将保存了值的压缩列表节点推入到压缩列表表尾，因此：❑保存了同一键值对的两个节点总是紧挨在一起，保存键的节点在前，保存值的节点在后；❑先添加到哈希对象中的键值对会被放在压缩列表的表头方向，而后来添加到哈希对象中的键值对会被放在压缩列表的表尾方向。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>hashtable编码的哈希对象使用字典作为底层实现，哈希对象中的每个键值对都使用一个字典键值对来保存：❑字典的每个键都是一个字符串对象，对象中保存了键值对的键；❑字典的每个值都是一个字符串对象，对象中保存了键值对的值。</p>
</blockquote>
</blockquote>
<p>当哈希对象可以同时满足以下两个条件时，哈希对象使用ziplist编码：</p>
<p>❑哈希对象保存的所有键值对的键和值的字符串长度都小于64字节；</p>
<p>❑哈希对象保存的键值对数量小于512个；</p>
<p>不能满足这两个条件的哈希对象需要使用hashtable编码。</p>
<p>（4）集合对象</p>
<p><strong>集合对象的编码可以是intset或者hashtable。</strong></p>
<p>intset编码的集合对象使用整数集合作为底层实现，集合对象包含的所有元素都被保存在整数集合里面。</p>
<p>hashtable编码的集合对象使用字典作为底层实现，字典的每个键都是一个字符串对象，每个字符串对象包含了一个集合元素，而字典的值则全部被设置为NULL。</p>
<p>当集合对象可以同时满足以下两个条件时，对象使用intset编码：</p>
<p>❑集合对象保存的所有元素都是整数值；</p>
<p>❑集合对象保存的元素数量不超过512个。</p>
<p>不能满足这两个条件的集合对象需要使用hashtable编码。第二个条件的上限值是可以修改的，具体请看配置文件中关于set-max-intset-entries选项的说明。</p>
<p>（5）有序集合对象</p>
<p>有序集合的编码可以是ziplist或者skiplist。</p>
<blockquote>
<blockquote>
<p>ziplist编码的压缩列表对象使用压缩列表作为底层实现，每个集合元素使用两个紧挨在一起的压缩列表节点来保存，第一个节点保存元素的成员（member），而第二个元素则保存元素的分值（score）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>压缩列表内的集合元素按分值从小到大进行排序，分值较小的元素被放置在靠近表头的方向，而分值较大的元素则被放置在靠近表尾的方向。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>skiplist编码的有序集合对象使用zset结构作为底层实现，一个zset结构同时包含一个字典和一个跳跃表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zset结构中的zsl跳跃表按分值从小到大保存了所有集合元素，每个跳跃表节点都保存了一个集合元素：跳跃表节点的object属性保存了元素的成员，而跳跃表节点的score属性则保存了元素的分值。通过这个跳跃表，程序可以对有序集合进行范围型操作，比如ZRANK、ZRANGE等命令就是基于跳跃表API来实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zset结构中的dict字典为有序集合创建了一个从成员到分值的映射，字典中的每个键值对都保存了一个集合元素：字典的键保存了元素的成员，而字典的值则保存了元素的分值。通过这个字典，程序可以用O（1）复杂度查找给定成员的分值，ZSCORE命令就是根据这一特性实现的，而很多其他有序集合命令都在实现的内部用到了这一特性。</p>
</blockquote>
</blockquote>
<p>当有序集合对象可以同时满足以下两个条件时，对象使用ziplist编码：</p>
<p>❑有序集合保存的元素数量小于128个；</p>
<p>❑有序集合保存的所有元素成员的长度都小于64字节；</p>
<p>不能满足以上两个条件的有序集合对象将使用skiplist编码。</p>
<p>对于LLEN命令来说：</p>
<p>​		❑在执行LLEN命令之前，服务器会先检查输入数据库键的值对象是否为列表类型，也即是，检查值对象redisObject结构type属性的值是否为REDIS_LIST，如果是的话，服务器就对键执行LLEN命令；</p>
<p>​		❑否则的话，服务器就拒绝执行命令并向客户端返回一个类型错误；</p>
<p>如果我们对一个键执行LLEN命令，那么服务器除了要确保执行命令的是列表键之外，还需要根据键的值对象所使用的编码来选择正确的LLEN命令实现：</p>
<p>​		❑如果列表对象的编码为ziplist，那么说明列表对象的实现为压缩列表，程序将使用ziplistLen函数来返回列表的长度；</p>
<p>​		❑如果列表对象的编码为linkedlist，那么说明列表对象的实现为双端链表，程序将使用listLength函数来返回双端链表的长度；</p>
<h5 id="内存回收" tabindex="-1"><a class="header-anchor" href="#内存回收" aria-hidden="true">#</a> 内存回收：</h5>
<p>Redis在自己的对象系统中构建了一个引用计数（reference counting）技术实现的内存回收机制，通过这一机制，程序可以通过跟踪对象的引用计数信息，在适当的时候自动释放对象并进行内存回收。</p>
<p>对象的引用计数信息会随着对象的使用状态而不断变化：</p>
<p>❑在创建一个新对象时，引用计数的值会被初始化为1；</p>
<p>❑当对象被一个新程序使用时，它的引用计数值会被增一；</p>
<p>❑当对象不再被一个程序使用时，它的引用计数值会被减一；</p>
<p>❑当对象的引用计数值变为0时，对象所占用的内存会被释放。</p>
<h5 id="对象共享" tabindex="-1"><a class="header-anchor" href="#对象共享" aria-hidden="true">#</a> 对象共享</h5>
<p>除了用于实现引用计数内存回收机制之外，对象的引用计数属性还带有对象共享的作用。</p>
<p>在Redis中，让多个键共享同一个值对象需要执行以下两个步骤：1）将数据库键的值指针指向一个现有的值对象；2）将被共享的值对象的引用计数增一。</p>
<p>目前来说，Redis会在初始化服务器时，创建一万个字符串对象，这些对象包含了从0到9999的所有整数值，当服务器需要用到值为0到9999的字符串对象时，服务器就会使用这些共享对象，而不是新创建对象。</p>
<blockquote>
<blockquote>
<p>举个例子，如果我们创建一个值为100的键A，并使用OBJECT REFCOUNT命令查看键A的值对象的引用计数，我们会发现值对象的引用计数为2，</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211201183923704.png" alt="image-20211201183923704"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>引用这个值对象的两个程序分别是持有这个值对象的服务器程序，以及共享这个值对象的键A</p>
</blockquote>
</blockquote>
<p>尽管共享更复杂的对象可以节约更多的内存，但受到CPU时间的限制，Redis只对包含整数值的字符串对象进行共享。</p>
<p>除了前面介绍过的type、encoding、ptr和refcount四个属性之外，redisObject结构包含的最后一个属性为lru属性，该属性记录了对象最后一次被命令程序访问的时间</p>
<p>OBJECT IDLETIME命令可以打印出给定键的空转时长，这一空转时长就是通过将当前时间减去键的值对象的lru时间计算得出的</p>
<h3 id="rabbitmq面试" tabindex="-1"><a class="header-anchor" href="#rabbitmq面试" aria-hidden="true">#</a> rabbitmq面试：</h3>
<p>消费者链接到reabbitmq服务器，并订阅到队列上，消费者消费一条消息时，只是消费消息的消息体，在消息路由的过程中，消息的标签会丢弃，，存入到队列中的消息只有消息体，消费者也只会消费到消息体，也就不知道消息的生产者是谁，当然消费者也不需要知道。</p>
<blockquote>
<blockquote>
<p>Broker：消息中间件的服务节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于RabbitMQ来说，一个RabbitMQ Broker可以简单地看作一个RabbitMQ服务节点，或者RabbitMQ服务实例。大多数情况下也可以将一个RabbitMQ Broker看作一台RabbitMQ服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Queue：队列，是RabbitMQ的内部对象，用于存储消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ中消息都只能存储在队列中，这一点和Kafka这种消息中间件相反。Kafka将消息存储在topic（主题）这个逻辑层面，而相对应的队列逻辑只是topic实际存储文件中的位移标识。RabbitMQ的生产者生产消息并最终投递到队列中，消费者可以从队列中获取消息并消费。</p>
</blockquote>
</blockquote>
<p>多个消费者可以订阅同一个队列，这时队列中的消息会被平均分摊（Round-Robin，即轮询）给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理</p>
<p>生产者将消息发送到Exchange（交换器，通常也可以用大写的“X”来表示），由交换器将消息路由到一个或者多个队列中。如果路由不到，或许会返回给生产者，或许直接丢弃</p>
<blockquote>
<blockquote>
<p>RoutingKey：路由键。生产者将消息发给交换器的时候，一般会指定一个RoutingKey，用来指定这个消息的路由规则，而这个Routing Key需要与交换器类型和绑定键（BindingKey）联合使用才能最终生效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在交换器类型和绑定键（BindingKey）固定的情况下，生产者可以在发送消息给交换器时，通过指定RoutingKey来决定消息流向哪里。</p>
</blockquote>
</blockquote>
<p>Binding：绑定。RabbitMQ中通过绑定将交换器与队列关联起来，在绑定的时候一般会指定一个绑定键（BindingKey），这样RabbitMQ就知道如何正确地将消息路由到队列了</p>
<p>生产者将消息发送给交换器时，需要一个RoutingKey，当BindingKey和RoutingKey相匹配时，消息会被路由到对应的队列中。在绑定多个队列到同一个交换器的时候，这些绑定允许使用相同的BindingKey。BindingKey并不是在所有的情况下都生效，它依赖于交换器类型，比如fanout类型的交换器就会无视BindingKey，而是将消息路由到所有绑定到该交换器的队列中。</p>
<p>**RabbitMQ常用的交换器类型有fanout、direct、topic、headers这四种。**AMQP协议里还提到另外两种类型：System和自定义</p>
<blockquote>
<blockquote>
<p>fanout它会把所有发送到该交换器的消息路由到所有与该交换器绑定的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>directdirect类型的交换器路由规则也很简单，它会把消息路由到那些BindingKey和RoutingKey完全匹配的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>topic类型的交换器在匹配规则上进行了扩展，它与direct类型的交换器相似，也是将消息路由到BindingKey和RoutingKey相匹配的队列中，但这里的匹配规则有些不同，它约定：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RoutingKey为一个点号“.”分隔的字符串（被点号“.”分隔开的每一段独立的字符串称为一个单词），如“com.rabbitmq.client”、“java.util.concurrent”、“com.hidden.client”；BindingKey和RoutingKey一样也是点号“.”分隔的字符串；BindingKey中可以存在两种特殊字符串“*”和“＃”，用于做模糊匹配，其中“＃”用于匹配一个单词，“＃”用于匹配多规格单词（可以是零个）。</p>
</blockquote>
</blockquote>
<p>headers类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的headers属性进行匹配。在绑定队列和交换器时制定一组键值对，当发送消息到交换器时，RabbitMQ会获取到该消息的headers（也是一个键值对的形式），对比其中的键值对是否完全匹配队列和交换器绑定时指定的键值对，如果完全匹配则消息会路由到该队列，否则不会路由到该队列。headers类型的交换器性能会很差，而且也不实用，基本上不会看到它的存在。</p>
<h5 id="virtual-host" tabindex="-1"><a class="header-anchor" href="#virtual-host" aria-hidden="true">#</a> virtual host</h5>
<p>在rabbitmq server上可以创建多个虚拟的message broker，又叫做virtual hosts (vhosts)。每一个vhost本质上是一个mini-rabbitmq server，分别管理各自的exchange，和bindings。vhost相当于物理的server，可以为不同app提供边界隔离，使得应用安全的运行在不同的vhost实例上，相互之间不会干扰。producer和consumer连接rabbit server需要指定一个vhost。</p>
<h5 id="通信过程" tabindex="-1"><a class="header-anchor" href="#通信过程" aria-hidden="true">#</a> 通信过程</h5>
<p>假设P1和C1注册了相同的Broker，Exchange和Queue。P1发送的消息最终会被C1消费。基本的通信流程大概如下所示：</p>
<ol>
<li>P1生产消息，发送给服务器端的Exchange</li>
<li>Exchange收到消息，根据ROUTINKEY，将消息转发给匹配的Queue1</li>
<li>Queue1收到消息，将消息发送给订阅者C1</li>
<li>C1收到消息，发送ACK给队列确认收到消息</li>
<li>Queue1收到ACK，删除队列中缓存的此条消息</li>
</ol>
<p>Consumer收到消息时需要显式的向rabbit broker发送basic.ack消息或者consumer订阅消息时设置auto_ack参数为true。在通信过程中，队列对ACK的处理有以下几种情况：</p>
<ol>
<li>如果consumer接收了消息，发送ack,rabbitmq会删除队列中这个消息，发送另一条消息给consumer。</li>
<li>如果cosumer接受了消息, 但在发送ack之前断开连接，rabbitmq会认为这条消息没有被deliver,在consumer在次连接的时候，这条消息会被redeliver。</li>
<li>如果consumer接受了消息，但是程序中有bug,忘记了ack,rabbitmq不会重复发送消息。</li>
<li>rabbitmq2.0.0和之后的版本支持consumer reject某条（类）消息，可以通过设置requeue参数中的reject为true达到目地，那么rabbitmq将会把消息发送给下一个注册的consumer。</li>
</ol>
<p>首先来看看RabbitMQ里的几个重要概念：</p>
<ul>
<li>生产者（Producer）：发送消息的应用。</li>
<li>消费者（Consumer）：接收消息的应用。</li>
<li>队列（Queue）：存储消息的缓存。</li>
<li>消息（Message）：由生产者通过RabbitMQ发送给消费者的信息。</li>
<li>连接（Connection）：连接RabbitMQ和应用服务器的TCP连接。</li>
<li>通道（Channel）：连接里的一个虚拟通道。当你通过消息队列发送或者接收消息时，这个操作都是通过通道进行的。</li>
<li>交换机（Exchange）：交换机负责从生产者那里接收消息，并根据交换类型分发到对应的消息列队里。要实现消息的接收，一个队列必须到绑定一个交换机。</li>
<li>绑定（Binding）：绑定是队列和交换机的一个关联连接。</li>
<li>路由键（Routing Key）：路由键是供交换机查看并根据键来决定如何分发消息到列队的一个键。路由键可以说是消息的目的地址。</li>
</ul>
<p>给带有多个队列的交换机发送的消息是通过绑定和路由键来进行分发的。绑定是你设置的用来连接一个队列和交换机的连接。路由键是消息的一个属性。交换机会根据路由键来决定消息分发到那个队列里（取决于交换机的类型）。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220210145716604.png" alt="image-20220210145716604"></p>
<h3 id="rabbitmq-7种消息传递形式" tabindex="-1"><a class="header-anchor" href="#rabbitmq-7种消息传递形式" aria-hidden="true">#</a> rabbitmq 7种消息传递形式：</h3>
<h5 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h5>
<h5 id="rabbitmq消息确认机制" tabindex="-1"><a class="header-anchor" href="#rabbitmq消息确认机制" aria-hidden="true">#</a> rabbitmq消息确认机制：</h5>
<p>RabbitMQ的消息确认有两种。</p>
<p><strong>一种是消息发送确认</strong>。这种是用来确认生产者将消息发送给交换器，交换器传递给队列的过程中，消息是否成功投递。发送确认分为两步，一是确认是否到达交换器，二是确认是否到达队列。</p>
<p><strong>第二种是消费接收确认</strong>。这种是确认消费者是否成功消费了队列中的消息。</p>
<h5 id="二-消息发送确认" tabindex="-1"><a class="header-anchor" href="#二-消息发送确认" aria-hidden="true">#</a> 二：消息发送确认</h5>
<p>（1）<strong>ConfirmCallback</strong></p>
<p>通过实现ConfirmCallBack接口，消息发送到交换器<strong>Exchange</strong>后触发回调。</p>
<p>使用该功能需要开启确认，spring-boot中配置如下：</p>
<p>spring.rabbitmq.publisher-confirms = true</p>
<p>（2）<strong>ReturnCallback</strong></p>
<p>通过实现ReturnCallback接口，如果消息从交换器发送到对应队列失败时触发（比如根据发送消息时指定的routingKey找不到队列时会触发）</p>
<p>使用该功能需要开启确认，spring-boot中配置如下：</p>
<p>spring.rabbitmq.publisher-returns = true</p>
<h5 id="三-消息接收确认" tabindex="-1"><a class="header-anchor" href="#三-消息接收确认" aria-hidden="true">#</a> 三：消息接收确认</h5>
<p>（1）确认模式</p>
<ul>
<li>AcknowledgeMode.NONE：不确认</li>
<li>AcknowledgeMode.AUTO：自动确认</li>
<li>AcknowledgeMode.MANUAL：手动确认</li>
</ul>
<p>（2）消息确认的作用是什么？</p>
<p>为了防止消息丢失。消息丢失分为发送丢失和消费者处理丢失，相应的也有两种确认机制。</p>
<p>生产者消息投递过程</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>生产者连接到Broker 建立一个连接，然后开启一个信道

接着生产者声明一个交换器 ，并设置相关属性，比如交换机类型、是否持久化、是否自动删除、是否内置等

生产者声明一个队列井设置相关属性，比如是否排他、是否持久化、是否自动删除、消息最大过期时间、消息最大长度、消息最大字节数等

生产者通过路由键将交换器和队列绑定起来

生产者发送消息至Broker ，发送的消息包含消息体和含有路由键、交换器、优先级、是否持久化、过期时间、延时时间等信息的标签

相应的交换器根据接收到的路由键查找相匹配的队列如果找到 ，则将从生产者发送过来的消息存入相应的队列中

如果没有找到 ，则根据生产者配置的属性选择丢弃还是回退给生产者

关闭信道

关闭连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消费者消费消息过程</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>消费者连接到Broker ，建立一个连接，开启一个信道

消费者向 RabbitMQ Broker 请求消费相应队列中的消息，在这个过程中可能会设置消费者标签、是否自动确认、是否排他等

等待 RabbitMQ Broker 回应并投递相应队列中的消息， 消费者接收消息。

消费者确认接收到的消息

RabbitMQ从队列中删除相应己经被确认的消息

关闭信道

关闭连接。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>是否持久化

将数据持久化到磁盘中

是否自动删除

当一个队列或交换机的所有消费者都与之断开连接时则这个队列或交换机就会自动删除

是否内置

客户端程序无法直接发送消息到这个交换器中，只能通过交换器路由到交换器这种方式

是否排他

如果一个队列被声明为排他队列，该队列仅对首次声明它的连接可见，并在连接断开时自动删除。这里需要注意的是：

排他队列是基于连接可见的，同一个连接的不同信道是可以同时访问同一连接创建的排他队列; "首次"是指如果一个连接己经声明了排他队列，其他连接是不允许建立同名的排他队列的，这个与普通队列不同:即使该队列是持久化的，一旦连接关闭或者客户端退出，该排他队列都会被自动删除，这种队列适用于一个客户端同时发送和读取消息的应用场景。


自动确认

消费者在订阅队列时，可以指定 autoAck 参数，当 autoAck 等于 false时， RabbitMQ会等待消费者显式地回复确认信号后才从内存(或者磁盘)中移去消息(实质上是先打上删除标记，之后再删除)

当 autoAck 等于 true 时， RabbitMQ 会自动把发送出去的消息置为确认，然后从内存(或者磁盘)中删除，而不管消费者是否真正地消费到了这些消息

采用消息确认机制后，只要设置 autoAck 参数为 false ，消费者就有足够的时间处理消息，不用担心处理消息过程中消费者进程挂掉后消息丢失的问题。因为 RabbitMQ 会一直等待持有消息直到消费者显式确认收到消息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Connection和Channel。我们知道无论是生产者还是消费者，都需要和RabbitMQ Broker建立连接，这个连接就是一条TCP连接，也就是Connection。一旦TCP连接建立起来，客户端紧接着可以创建一个AMQP信道（Channel），每个信道都会被指派一个唯一的ID。信道是建立在Connection之上的虚拟连接，RabbitMQ处理的每条AMQP指令都是通过信道完成的。</p>
<h5 id="消息属性详解" tabindex="-1"><a class="header-anchor" href="#消息属性详解" aria-hidden="true">#</a> 消息属性详解：</h5>
<blockquote>
<blockquote>
<p>当你使用RabbitMQ发布消息时，消息由AMQP规范中的三个低层帧类型组成：Basic.Publish方法帧、内容头帧和消息体帧。这三种帧类型按顺序一起工作，以便将消息传递到它应该去的地方并确保它们到达时完好无损</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>包含在消息头帧中的消息属性是一组预定义的值，这些值通过Basic.Properties数据结构进行指定</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>某些属性（如delivery-mode）在AMQP规范中具有明确的含义，而有些属性（如type）则没有明确的规范。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220126102005694.png" alt="image-20220126102005694"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>列举的各个基本属性：</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 使用content-type属性让消费者知道如何解释消息体。</p>
<p>■ 使用content-encoding属性来指示消息体使用某种特殊的方式进行压缩或编码。</p>
<p>■ 填充message-id和correlation-id来唯一标识消息和消息响应，用于在工作流程中实现消息跟踪。</p>
<p>■ 利用timestamp属性减少消息大小，并创建一个规范定义来描述消息创建时间。</p>
<p>■ 使用expiration属性表明消息过期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 告诉RabbitMQ使用delivery-mode将消息写入磁盘或内存队列。</p>
<p>■ 使用app-id和user-id来帮助追踪出现问题的消息发布者应用程序。</p>
<p>■ 使用type属性来定义发布者和消费者之间的契约。</p>
<p>■ 使用reply-to属性实现响应消息的路由。</p>
<p>■ 使用headers映射表定义自由格式的属性和实现RabbitMQ路由。</p>
</blockquote>
</blockquote>
<h5 id="_4-1-5-基于事务的批量处理" tabindex="-1"><a class="header-anchor" href="#_4-1-5-基于事务的批量处理" aria-hidden="true">#</a> 4.1.5 基于事务的批量处理</h5>
<blockquote>
<blockquote>
<p>在投递确认出现之前，确保消息被成功投递的唯一方法是事务。AMQP事务（也就是TX）类提供了一种机制，通过这种机制，消息可以批量发布到RabbitMQ，然后提交到队列或回滚。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>事务机制提供了一种方法，通过这种方法可以通知发布者消息被成功投递到RabbitMQ代理服务器上的队列。要启动一个事务，发布者发送一个TX.Select RPC请求给RabbitMQ，RabbitMQ将回复一个TX.SelectOk响应。一旦事务被打开，发布者可以向RabbitMQ发送一个或多个消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220126102434610.png" alt="image-20220126102434610"></p>
</blockquote>
</blockquote>
<h5 id="_4-1-6-使用ha队列避免节点故障" tabindex="-1"><a class="header-anchor" href="#_4-1-6-使用ha队列避免节点故障" aria-hidden="true">#</a> 4.1.6 使用HA队列避免节点故障</h5>
<blockquote>
<blockquote>
<p>当你希望加强发布者与RabbitMQ之间的契约以保证消息投递时，请不要忽视高可用队列（HA队列）在核心消息通信体系架构中扮演的重要角色。HA队列是RabbitMQ团队创建的一项增强功能（未包含在AMQP规范中），它允许队列在多个服务器上拥有冗余副本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HA队列需要RabbitMQ集群环境，可以通过以下两种方式之一进行设置：使用AMQP或使用基于Web的管理界面。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在以下示例中，你将使用Queue.Declare AMQP命令中的传入参数创建一个新队列，该队列跨越RabbitMQ集群中的每个节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当发布消息到设置为高可用的队列中时，该消息会被发送到集群中的每台服务器（见图4.7），该集群管理着HA队列。一旦消息在集群中的任何节点都完成消费，那么消息的所有副本将立即从其他节点中删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220126102506060.png" alt="image-20220126102506060"></p>
<p>图4.7 发布到HA队列中的消息存储在为其配置的每台服务器上</p>
</blockquote>
</blockquote>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220126102607196.png" alt="image-20220126102607196"></p>
<p>图4.10 当收到delivery-mode属性被设置为2的消息时，RabbitMQ必须将该消息写入磁盘</p>
<p>声明队列时指定死信交换器是相当简单的。只需在创建rabbitpy Queue对象时将交换器名称作为dead_letter_exchange参数进行传入，或者在发出Queue.Declare RPC请求时作为x-dead-letter-exchange参数进行传入。自定义参数允许你指定与队列定义一起存储的任意键/值对。</p>
<p>一致性哈希交换器采用一致性哈希算法来决定哪个队列将会收到消息。所有队列都有可能成为消息潜在的目的地。不同于将队列绑定至路由键或者头信息，队列将被绑定至一个基于整型的权重值。算法的一部分将采用该权重值来决定消息应如何投递。</p>
<p>集群方案</p>
<ol>
<li>单一模式：
最简单的情况，非集群模式。</li>
<li>默认的集群模式。
对于Queue来说，消息实体只存在于其中一个节点，A、B两个节点仅有相同的元数据即队列结构。
当消息进入A节点的Queue中后，consumer从B节点拉取时，RabbitMQ会临时在A、B间进行消息传输，把A中的消息实体取出并经过B发送给consumer。
该模式存在一个问题就是当A节点故障后，B节点无法取到A节点中还未消费的消息实体。
如果做了消息持久化，那么得等A节点恢复，然后才可被消费；如果没有持久化的话，然后就没有然后了……</li>
<li>镜像模式：把需要的队列做成镜像队列，均在与多个节点，属于RabbitMQ的HA方案。
该模式解决了上述问题，其实质和普通模式不同之处在于，消息实体会主动在镜像节点间同步，而不是在consumer取数据时临时拉取。
该模式带来的副作用也很明显，除了降低系统性能外，如果镜像队列数量过多，加之大量的消息进入，集群内部的网络带宽将会被这种同步通讯大大消耗掉。</li>
</ol>
<h5 id="rabbitmq-5种模式" tabindex="-1"><a class="header-anchor" href="#rabbitmq-5种模式" aria-hidden="true">#</a> rabbitmq  5种模式：</h5>
<p>MQ两种消息传输方式，点对点（代码中的简单传递模式），发布/订阅（代码中路由模式）。</p>
<p>simple：  一个生产者 一个消费者</p>
<p>work模式：一个生产者，多个消费者</p>
<p>direct交换机：</p>
<p>​	生产者发送消息给指定交换机，绑定的某个队列。</p>
<p>​	消费者通过监听某交换机绑定的某个队列接受消息。</p>
<p>topic交换机：匹配模式</p>
<p>fanout 交换机：广播模式，一个消息可以给多个消费者消费</p>
<p>headers交换机</p>
<h1 id="nginx重点" tabindex="-1"><a class="header-anchor" href="#nginx重点" aria-hidden="true">#</a> nginx重点：</h1>
<blockquote>
<blockquote>
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
<p>多worker进程可以充分利用多核系统架构，但若worker进程的数量多于CPU内核数，那么会增大进程间切换带来的消耗（Linux是抢占式内核）。一般情况下，用户要配置与CPU内核数相等的worker进程，并且使用下面的worker_cpu_affinity配置来绑定CPU内核。</p>
<p>可以使用GDB是一个由GNU开源组织发布的、UNIX/<a href="https://so.csdn.net/so/search?q=LINUX%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">LINUX操作系统<ExternalLinkIcon/></a>下的、基于命令行的、功能强大的程序调试工具。 对于一名Linux下工作的c/c++程序员，gdb是必不可少的工具；使用gdb里调试nginx，只需要设置master进程来处理请求，不fork   worker进程就可以了，这样就可以跟踪请求。还要设置nginx的日志为debug</p>
</blockquote>
</blockquote>
<h4 id="_4-系统调用gettimeofday的执行频率" tabindex="-1"><a class="header-anchor" href="#_4-系统调用gettimeofday的执行频率" aria-hidden="true">#</a> （4）系统调用gettimeofday的执行频率</h4>
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
<h4 id="_5-nginx-worker进程优先级设置" tabindex="-1"><a class="header-anchor" href="#_5-nginx-worker进程优先级设置" aria-hidden="true">#</a> （5）Nginx worker进程优先级设置</h4>
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
<h4 id="_6-accept-mutex是nginx的负载均衡锁" tabindex="-1"><a class="header-anchor" href="#_6-accept-mutex是nginx的负载均衡锁" aria-hidden="true">#</a> （6）accept_mutex是Nginx的负载均衡锁</h4>
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
<p>accept锁可能需要这个lock文件，如果accept锁关闭，lock_file配置完全不生效。如果打开了accept锁，并且由于编译程序、操作系统架构等因素导致Nginx不支持原子锁，这时才会用文件锁实现accept锁</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样lock_file指定的lock文件才会生效。在基于i386、AMD64、Sparc64、PPC64体系架构的操作系统上，若使用GCC、Intel C++、SunProC++编译器来编译Nginx，则可以肯定这时的Nginx是支持原子锁的，因为Nginx会利用CPU的特性并用汇编语言来实现它。在使用accept锁后，同一时间只有一个worker进程能够取到accept锁。这个accept锁不是阻塞锁，如果取不到会立刻返回。如果有一个worker进程试图取accept锁而没有取到，它至少要等accept_mutex_delay定义的时间间隔后才能再次试图取锁。</p>
</blockquote>
</blockquote>
<h4 id="_5-选择事件模型" tabindex="-1"><a class="header-anchor" href="#_5-选择事件模型" aria-hidden="true">#</a> （5）选择事件模型</h4>
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
<h4 id="_6-root和alias的区别" tabindex="-1"><a class="header-anchor" href="#_6-root和alias的区别" aria-hidden="true">#</a> （6）root和alias的区别：</h4>
<blockquote>
<blockquote>
<p>（2）以alias方式设置资源路径语法：alias path;</p>
<p>配置块：location</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>alias也是用来设置文件资源路径的，它与root的不同点主要在于如何解读紧跟location后面的uri参数，这将会致使alias与root以不同的方式将用户请求映射到真正的磁盘文件上。例如，如果有一个请求的URI是/conf/nginx.conf，而用户实际想访问的文件在/usr/local/nginx/conf/nginx.conf，那么想要使用alias来进行设置的话，可以采用如下方式：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220118144032228-1642488140581.png" alt="image-20220118144032228"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果用root设置，那么语句如下所示：</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20220118144121128-1642488140582.png" alt="image-20220118144121128"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用alias时，在URI向实际文件路径的映射过程中，已经把location后配置的/conf这部分字符串丢弃掉，因此，/conf/nginx.conf请求将根据alias path映射为path/nginx.conf。root则不然，它会根据完整的URI请求来映射，因此，/conf/nginx.conf请求会根据root path映射为path/conf/nginx.conf。这也是root可以放置到http、server、location或if块中，而alias只能放置到location块中的原因。</p>
</blockquote>
</blockquote>
<h4 id="_7-tcp链接内存池" tabindex="-1"><a class="header-anchor" href="#_7-tcp链接内存池" aria-hidden="true">#</a> （7）TCP链接内存池</h4>
<blockquote>
<blockquote>
<p>connection_pool_size语法：connection_pool_size size;默认：connection_pool_size 256;配置块：http、server</p>
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
<h4 id="_8-请求内存池" tabindex="-1"><a class="header-anchor" href="#_8-请求内存池" aria-hidden="true">#</a> （8）请求内存池</h4>
<blockquote>
<blockquote>
<p>request_pool_size语法：request_pool_size size;默认：request_pool_size 4k;配置块：http、server</p>
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
<h4 id="_9-读取http头和http包体都会有超时时间设置-还有发送响应的超时时间" tabindex="-1"><a class="header-anchor" href="#_9-读取http头和http包体都会有超时时间设置-还有发送响应的超时时间" aria-hidden="true">#</a> （9）读取http头和http包体都会有超时时间设置，还有发送响应的超时时间</h4>
<p>客户端与服务器建立连接后将开始接收HTTP头部，在这个过程中，如果在一个时间间隔（超时时间）内没有读取到客户端发来的字节，则认为超时，并向客户端返回408(&quot;Requesttimed out&quot;)响应。</p>
<blockquote>
<blockquote>
<p>发送响应的超时时间语法：send_timeout time;默认：send_timeout 60;配置块：http、server、location</p>
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
<p>nginx还可以对某些浏览器禁用Keepalive，对某些浏览器禁用keepalive功能语法：keepalive_disable[msie6|safari|none]...</p>
<p>keepalive超时时间：一个keepalive连接在闲置超过一定时间后（默认的是75秒），服务器和浏览器都会去关闭这个连接。当然，keepalive_timeout配置项是用来约束Nginx服务器的，Nginx也会按照规范把这个时间传给浏览器，但每个浏览器对待keepalive的策略有可能是不同的。</p>
<p>一个keepalive长连接上允许承载的请求最大数：keepalive_requests 100;</p>
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
<p>还有可以对请求包体限速的配置：limit_rate 0;</p>
<h4 id="_10-sendfile" tabindex="-1"><a class="header-anchor" href="#_10-sendfile" aria-hidden="true">#</a> （10）sendfile：</h4>
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
<h4 id="_11-打开文件缓存" tabindex="-1"><a class="header-anchor" href="#_11-打开文件缓存" aria-hidden="true">#</a> （11）打开文件缓存</h4>
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
<h4 id="_12-反向代理服务器" tabindex="-1"><a class="header-anchor" href="#_12-反向代理服务器" aria-hidden="true">#</a> （12）反向代理服务器：</h4>
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
<h5 id="squid与nginx的反向代理的区别" tabindex="-1"><a class="header-anchor" href="#squid与nginx的反向代理的区别" aria-hidden="true">#</a> Squid与Nginx的反向代理的区别：</h5>
<p>![image-20220118151631232](file://D:/BaiduNetdiskDownload/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/img/19.%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Nginx%EF%BC%9A%E6%A8%A1%E5%9D%97%E5%BC%80%E5%8F%91%E4%B8%8E%E6%9E%B6%E6%9E%84%E8%A7%A3%E6%9E%90%EF%BC%88%E7%AC%AC1+2%E7%89%88%EF%BC%89/image-20220118151631232.png?lastModify=1642481793)</p>
<p>当客户端发来HTTP请求时，Nginx并不会立刻转发到上游服务器，而是先把用户的请求（包括HTTP包体）完整地接收到Nginx所在服务器的硬盘或者内存中，然后再向上游服务器发起连接，把缓存的客户端请求转发到上游服务器。而Squid等代理服务器则采用一边接收客户端请求，一边转发到上游服务器的方式。</p>
<p>Nginx的这种工作方式有什么优缺点呢？很明显，缺点是延长了一个请求的处理时间，并增加了用于缓存请求内容的内存和磁盘空间。而优点则是降低了上游服务器的负载，尽量把压力放在Nginx服务器上。</p>
<p>Nginx的这种工作方式为什么会降低上游服务器的负载呢？通常，客户端与代理服务器之间的网络环境会比较复杂，多半是“走”公网，网速平均下来可能较慢，因此，一个请求可能要持续很久才能完成。而代理服务器与上游服务器之间一般是“走”内网，或者有专线连接，传输速度较快。Squid等反向代理服务器在与客户端建立连接且还没有开始接收HTTP包体时，就已经向上游服务器建立了连接。例如，某个请求要上传一个1GB的文件，那么每次Squid在收到一个TCP分包（如2KB）时，就会即时地向上游服务器转发。在接收客户端完整HTTP包体的漫长过程中，上游服务器始终要维持这个连接，这直接对上游服务器的并发处理能力提出了挑战。</p>
<p>Nginx则不然，它在接收到完整的客户端请求（如1GB的文件）后，才会与上游服务器建立连接转发请求，由于是内网，所以这个转发过程会执行得很快。这样，一个客户端请求占用上游服务器的连接时间就会非常短，也就是说，Nginx的这种反向代理方案主要是为了降低上游服务器的并发压力。</p>
<h4 id="_13-http模块调用方式" tabindex="-1"><a class="header-anchor" href="#_13-http模块调用方式" aria-hidden="true">#</a> （13）http模块调用方式：</h4>
<p>典型方式：</p>
<p>运行http的框架会在接收完毕Http请求的头部后，将请求的UrI与配置文件中的所有Location进行匹配。匹配后再根据Localhost{}内的配置项选择http模块来调用。</p>
<p>非典型的方式：</p>
<p>比如ngx_http_access_modules模块根据ip地址来决定某个客户端是否可以访问服务。</p>
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
<h4 id="_14-ngx-pool-t内存池数据结构" tabindex="-1"><a class="header-anchor" href="#_14-ngx-pool-t内存池数据结构" aria-hidden="true">#</a> （14）ngx_pool_t内存池数据结构</h4>
<p>为了减少内存碎片的数量，并通过统一管理来减少代码中出现内存泄漏的可能性，Nginx设计了ngx_pool_t内存池数据结构</p>
<h4 id="_15-将磁盘文件作为包体发送" tabindex="-1"><a class="header-anchor" href="#_15-将磁盘文件作为包体发送" aria-hidden="true">#</a> （15）将磁盘文件作为包体发送</h4>
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
<h4 id="_16-支持用户多线程下载和断点续传" tabindex="-1"><a class="header-anchor" href="#_16-支持用户多线程下载和断点续传" aria-hidden="true">#</a> （16）支持用户多线程下载和断点续传</h4>
<p>http_range_header_filter模块就是用来处理HTTP请求头部range部分的，它会解析客户端请求中的range头部，最后告知在发送HTTP响应包体时将会调用到的</p>
<h4 id="_17-什么是请求的上下文" tabindex="-1"><a class="header-anchor" href="#_17-什么是请求的上下文" aria-hidden="true">#</a> （17）什么是请求的上下文？</h4>
<blockquote>
<blockquote>
<p>上下文是什么？简单地讲，就是在一个请求的处理过程中，用类似struct这样的结构体把一些关键的信息都保存下来，这个结构体可以称为请求的上下文。每个HTTP模块都可以有自己的上下文结构体，一般都是在刚开始处理请求时在内存池上分配它，之后当经由epoll、HTTP框架再次调用到HTTP模块的处理方法时，这个HTTP模块可以由请求的上下文结构体中获取信息。请求结束时就会销毁该请求的内存池，自然也就销毁了上下文结构体。以上就是HTTP请求上下文的使用场景，由于1个上下文结构体是仅对1个请求1个模块而言的，所以它是低耦合的。如果这个模块不需要使用上下文，也可以完全不理会HTTP上下文这个概念。</p>
</blockquote>
</blockquote>
<p>为什么要定义HTTP上下文这个概念呢？因为Nginx是个强大的全异步处理的Web服务器，意味着1个请求并不会在epoll的1次调度中处理完成，甚至可能成千上万次的调度各个HTTP模块后才能完成请求的处理。</p>
<h4 id="_18-nginx访问第三方服务的机制有哪些" tabindex="-1"><a class="header-anchor" href="#_18-nginx访问第三方服务的机制有哪些" aria-hidden="true">#</a> （18）nginx访问第三方服务的机制有哪些？</h4>
<blockquote>
<blockquote>
<p>当需要访问第三方服务时，Nginx提供了两种全异步方式来与第三方服务器通信：upstream与subrequest。upstream可以保证在与第三方服务器交互时（包括三次握手建立TCP连接、发送请求、接收响应、四次握手关闭TCP连接等）不会阻塞Nginx进程处理其他请求，也就是说，Nginx仍然可以保持它的高性能。因此，在开发HTTP模块时，如果需要访问第三方服务是不能自己简单地用套接字编程实现的，这样会破坏Nginx优秀的全异步架构。subrequest只是分解复杂请求的一种设计模式，它本质上与访问第三方服务没有任何关系，但从HTTP模块开发者的角度而言，使用subrequest访问第三方服务却很常用，当然，subrequest访问第三方服务最终也是基于upstream实现的。这两种机制是HTTP框架为用户准备的、无阻塞访问第三方服务的利器。</p>
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
<h4 id="_19-可以二次开发upstream模块达到squid的功能" tabindex="-1"><a class="header-anchor" href="#_19-可以二次开发upstream模块达到squid的功能" aria-hidden="true">#</a> （19）可以二次开发Upstream模块达到squid的功能：</h4>
<p>Nginx的核心功能——反向代理是基于upstream模块（该模块属于HTTP框架的一部分）实现的。在弄清楚upstream的用法后，完全可以根据自己的需求重写Nginx的反向代理功能。例如，反向代理模块是在先接收完客户请求的HTTP包体后，才向上游服务器建立连接并转发请求的。假设用户要上传大小为1GB的文件，由于网速限制，文件完整地到达Nginx需要10小时，恰巧Nginx与上游服务器间的网络也很差（当然这种情况很少见），反向代理这个请求到上游服务也需要10小时，因此，根据用户的网速也许本来只要10个小时的上传过程，最终可能需要20个小时才能完成。在了解了upstream功能后，可以试着改变反向代理模块的这种特性，比如模仿squid反向代理模式，在接收完整HTTP请求的头部后就与上游服务器建立连接，并开始将请求向上游服务器透传。</p>
<h4 id="_20-upstream有3种处理上游响应包体的方式" tabindex="-1"><a class="header-anchor" href="#_20-upstream有3种处理上游响应包体的方式" aria-hidden="true">#</a> （20）upstream有3种处理上游响应包体的方式</h4>
<p>upstream有3种处理上游响应包体的方式，但HTTP模块如何告诉upstream使用哪一种方式处理上游的响应包体呢？当请求的ngx_http_request_t结构体中subrequest_in_memory标志位为1时，将采用第1种方式，即upstream不转发响应包体到下游，由HTTP模块实现的input_filter方法处理包体；当subrequest_in_memory为0时，upstream会转发响应包体。当ngx_http_upstream_conf_t配置结构体中的buffering标志位为1时，将开启更多的内存和磁盘文件用于缓存上游的响应包体，这意味上游网速更快；当buffering为0时，将使用固定大小的缓冲区（就是上面介绍的buffer缓冲区）来转发响应包体。</p>
<h4 id="_21-http过滤模块怎么进行工作的" tabindex="-1"><a class="header-anchor" href="#_21-http过滤模块怎么进行工作的" aria-hidden="true">#</a> （21）http过滤模块怎么进行工作的？</h4>
<p>Nginx明确地将HTTP响应分为两个部分：HTTP头部和HTTP包体。因此，对应的HTTP过滤模块可以选择性地只处理HTTP头部或者HTTP包体，当然也可以二者皆处理。例如，not_modify过滤模块只处理HTTP头部，完全不关心http包体；而gzip过滤模块首先会处理HTTP头部，如检查浏览器请求中是否支持gzip解压，然后检查响应中HTTP头部里的Content-Type是否属于nginx.conf中指定的gzip压缩类型，接着才处理HTTP包体，针对每一块buffer缓冲区都进行gzip压缩，这样再交给下一个HTTP过滤模块处理。</p>
<h4 id="_22-nginx的5大模块" tabindex="-1"><a class="header-anchor" href="#_22-nginx的5大模块" aria-hidden="true">#</a> （22）nginx的5大模块</h4>
<p>官方Nginx共有五大类型的模块：核心模块、配置模块、事件模块、HTTP模块、mail模块。虽然它们都具备相同的ngx_module_t接口，但在请
求处理流程中的层次并不相同。</p>
<h4 id="_23-事件驱动架构" tabindex="-1"><a class="header-anchor" href="#_23-事件驱动架构" aria-hidden="true">#</a> （23）事件驱动架构</h4>
<p>所谓事件驱动架构，简单来说，就是由一些事件发生源来产生事件，由一个或者多个事件收集器来收集、分发事件，然后许多事件处理器会注册自己感兴趣的事件，同时会“消费”这些事件。</p>
<p>Nginx这个Web服务器而言，一般会由网卡、磁盘产生事件，事件模块将负责事件的收集、分发操作，而所有的模块都可能是事件消费者，它们首先需要向事件模块注册感兴趣的事件类型，这样，在有事件产生时，事件模块会把事件分发到相应的模
块中进行处理。</p>
<p>Nginx采用完全的事件驱动架构来处理业务，这与传统的Web服务器（如Apache）是不同的。对于传统Web服务器而言，采用的所谓事件驱动往往局限在TCP连接建立、关闭事件上，一个连接建立以后，在其关闭之前的所有操作都不再是事件驱动，这时会退化成按序执行每个操作的批处理模式，这样每个请求在连接建立后都将始终占用着系统资源，直到连接关闭才会释放资源。要知道，这段时间可能会非常长，从1毫秒到1分钟都有可能，而且这段时间内占用着内存、CPU等资源也许并没有意义，整个事件消费进程只是在等待某个条件而已，造成了服务器资源的极大浪费，影响了系统可以处理的并发连接数。</p>
<p>这种传统Web服务器往往把一个进程或线程作为事件消费者，当一个请求产生的事件被该进程处理时，直到这个请求处理结束时进程资源都将被这一个请求所占用。</p>
<p>Nginx则不然，它不会使用进程或线程来作为事件消费者，所谓的事件消费者只能是某个模块（在这里没有进程的概念）。只有事件收集、分发器才有资格占用进程资源，它们会 在分发某个事件时调用事件消费模块使用当前占用的进程资源</p>
<h4 id="_24-请求的多阶段异步处理" tabindex="-1"><a class="header-anchor" href="#_24-请求的多阶段异步处理" aria-hidden="true">#</a> （24）请求的多阶段异步处理</h4>
<p>​		请求的多阶段异步处理只能基于事件驱动架构实现。什么意思呢？就是把一个请求的处理过程按照事件的触发方式划分为多个阶段，每个阶段都可以由事件收集、分发器来触发。</p>
<p>​		请求的多阶段异步处理将会提高网络性能、降低请求的时延，在与事件驱动架构配合工作后，可以使得Web服务器同时处理十万甚至百万级别的并发连接，我们在开发Nginx模块时必须遵循这一原则。</p>
<h4 id="_25-nginx的管理进程和worker进程设计的好处" tabindex="-1"><a class="header-anchor" href="#_25-nginx的管理进程和worker进程设计的好处" aria-hidden="true">#</a> （25）nginx的管理进程和worker进程设计的好处？</h4>
<p>这种设计带来以下优点：
（1）利用多核系统的并发处理能力，多个进程可以占用不同的CPU核心来工
作。如果只有一个进程在处理请求，则必然会造成CPU资源的浪费！如果多个进程间的地位不平等，则必然会有某一级同一地位的进程成为瓶颈，因此，Nginx中所有的worker工作进程都是完全平等的。这提高了网络性能、降低了请求的时延。</p>
<p>（2）负载均衡
多个worker工作进程间通过进程间通信来实现负载均衡，也就是说，一个请求到来时更容易被分配到负载较轻的worker工作进程中处理。这将降低请求的时延，并在一定程度上提高网络性能。</p>
<p>（3）管理进程会负责监控工作进程的状态，并负责管理其行为，管理进程不会占用多少系统资源，它只是用来启动、停止、监控或使用其他行为来控制工作进程。首先，这提高了系统的可靠性，当工作进程出现问题时，管理进程可以启动新的
工作进程来避免系统性能的下降。其次，管理进程支持Nginx服务运行中的程序升级、配置项的修改等操作，这种设计使得动态可扩展性、动态定制性、动态可进化性较容易实现。</p>
<h4 id="_26-内存池的设计" tabindex="-1"><a class="header-anchor" href="#_26-内存池的设计" aria-hidden="true">#</a> （26）内存池的设计</h4>
<p>为了避免出现内存碎片、减少向操作系统申请内存的次数、降低各个模块的开发复杂度，Nginx设计了简单的内存池。这个内存池没有很复杂的功能：通常它不负责回收内存池中已经分配出的内存。这种内存池最大的优点在于：把多次向系统申请内存的操作整合成一次，这大大减少了CPU资源的消耗，同时减少了内存碎片。</p>
<p>通常每一个请求都有一个这种简易的独立内存池，Nginx为每一个TCP连接都分配了1个内存池，HTTP框架为每一个HTTP请求又分配了1个内存池，而在请求结束时则会销毁整个内存池，把曾经分配的内存一次性归还给操作系统。这种设计大大提高了模块开发的简单性，而且因为分配内存次数的减少使得请求执行的时延得到了降低，同时，通过减少内存碎片，提高了内存的有效利用率和系统可处理的并发连接数，从而增强了网络性能。</p>
<h4 id="_27-nginx启动时框架的处理流程" tabindex="-1"><a class="header-anchor" href="#_27-nginx启动时框架的处理流程" aria-hidden="true">#</a> （27）Nginx启动时框架的处理流程</h4>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108194601671.png" alt="image-20211108194601671"></p>
<h4 id="_28-worker进程是如何工作的" tabindex="-1"><a class="header-anchor" href="#_28-worker进程是如何工作的" aria-hidden="true">#</a> （28）worker进程是如何工作的</h4>
<p>​		master进程如何通知worker进程停止服务或更换日志文件呢？对于这样控制进程运行的进程间通信方式，Nginx采用的是信号（详见14.5节）。因此，worker进程中会有一个方法来处理信号，它就是ngx_signal_handler方法。</p>
<p>对于worker进程的工作方法ngx_worker_process_cycle来说，它会关注以下4个全局标志位。</p>
<p>其中的ngx_terminate、ngx_quit、ngx_reopen都将由ngx_signal_handler方法根据接收到的信号来设置。例如，当接收到QUIT信号时，ngx_quit标志位会设为1，这是在告诉worker进程需要优雅地关闭进程；当接收到TERM信号时，ngx_terminate标志位会设为1，这是在告诉worker进程需要强制关闭进程；当接收到USR1信号时，ngx_reopen标志位会设为1，这是在告诉Nginx需要重新打开文件（如切换日志文件时）</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108210209441.png" alt="image-20211108210209441"></p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108210348792.png" alt="image-20211108210348792"></p>
<p>在ngx_worker_process_cycle方法中，通过检查ngx_exiting、ngx_terminate、ngx_quit、ngx_reopen这4个标志位来决定后续动作。</p>
<p>如果ngx_exiting为1，则开始准备关闭worker进程。首先，根据当前ngx_cycle_t中所有正在处理的连接，调用它们对应的关闭连接处理方法（就是将连接中的close标志位置为1，再调用读事件的处理方法。调用所有活动连接的读事件处理方法处理连接关闭事件后，将检查ngx_event_timer_rbtree红黑树（保存所有事件的定时器，在第9章中会介绍它）是否为空，如果不为空，表示还有事件需要处理，将继续向下执行，调用ngx_process_events_and_timers方法处理事件；如果为空，表示已经处理完所有的事件，这时将调用所有模块的exit_process方法，最后销毁内存池，退出整个worker进程。</p>
<p>如果ngx_exiting不为1，那么调用ngx_process_events_and_timers方法处理事件</p>
<p>接下来检查ngx_terminate标志位，如果ngx_terminate不为1，则继续向下检查，否则开始准备退出worker进程。与上一步ngx_exiting为1的退出流程不同，这里不会调用所有活动连接的处理方法去处理关闭连接事件，也不会检查是否已经处理完所有的事件，而是立刻调用所有模块的exit_process方法，销毁内存池，退出worker进程。</p>
<p>​		接下来再检查ngx_quit标志位，如果标志位为1，则表示需要优雅地关闭连接。这时，Nginx首先会将所在进程的名字修改为“worker process is shutting down”，然后调用ngx_close_listening_sockets方法来关闭监听的端口，接着设置ngx_exiting标志位为1，继续向下执行（检查ngx_reopen_files标志位）。
​		最后检查ngx_reopen标志位，如果为1，则表示需要重新打开所有文件。这时，调用ngx_reopen_files方法重新打开所有文件。之后继续下一个循环，再去检查ngx_exiting标志位。</p>
<h4 id="_29-master进程是如何工作的" tabindex="-1"><a class="header-anchor" href="#_29-master进程是如何工作的" aria-hidden="true">#</a> （29）master进程是如何工作的</h4>
<p>​		master进程不需要处理网络事件，它不负责业务的执行，只会通过管理worker等子进程来实现重启服务、平滑升级、更换日志文件、配置文件实时生效等功能。它会通过检查以下7个标志位来决定ngx_master_process_cycle方法的运行。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108223356578.png" alt="image-20211108223356578"></p>
<p>ngx_signal_handler方法会根据接收到的信号设置ngx_reap、ngx_quit、ngx_terminate、
ngx_reconfigure、ngx_reopen、ngx_change_binary、ngx_noaccept这些标志位</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108223636378.png" alt="image-20211108223636378"></p>
<p>ngx_processes数组，也就是最多只能有1024个子进程，master进程中所有子进程相关的状态信息都保存在ngx_processes数组中。</p>
<p>master进程怎样启动一个子进程呢？其实很简单，fork系统调用即可以完成。</p>
<p>ngx_spawn_process方法封装了fork系统调用，并且会从ngx_processes数组中选择一个还未使
用的ngx_process_t元素存储这个子进程的相关信息。如果所有1024个数组元素中已经没有空
余的元素，也就是说，子进程个数超过了最大值1024，那么将会返回NGX_INVALID_PID。
因此，ngx_processes数组中元素的初始化将在ngx_spawn_process方法中进行。</p>
<p>ngx_processes数组中这些进程的状态是怎么改变的呢？依靠信号！当每个子进程意外退出时，master父进程会接收到Linux内核发来的CHLD信号，而处理信号的ngx_signal_handler方法这时将会做以下处理：将sig_reap标志位置为1，调用ngx_process_get_status方法修改ngx_processes数组中所有子进程的状态（通过waitpid系统调用得到意外结束的子进程ID，然后遍历ngx_processes数组找到该子进程ID对应的ngx_process_t结构体，将其exited标志位置为1）。</p>
<p>那么，一个子进程意外结束后，如何启动新的子进程呢？这可以在图8-8所示的master进程的工作循环中找到答案。</p>
<p><img src="@source/docs/theme-reco/img/common/总结/image-20211108224032797.png" alt="image-20211108224032797"></p>
<p>（30）谈谈你对nginx内存池的理解：</p>
<p>nginx内存池创建用的是ngx_create_pool方法创建，然后创建的时候可以指定大小，一般是一次16KB，不够的话会再次请求16kb，他还有内存池销毁和重置方法，重置的时候，是将内存池中原有的内存释放后继续使用，这个方法的实现是会把大块的内存释放给操作系统，小块的内存则在不释放的情况下继续复用。</p>
<h4 id="_31-什么是地址对齐" tabindex="-1"><a class="header-anchor" href="#_31-什么是地址对齐" aria-hidden="true">#</a> （31）什么是地址对齐？</h4>
<p>1.什么是地址对齐
1、所谓对齐bai就是数据在存du储器中存放的规则，32位系统中一般zhi有字节对齐（dao8bit）、半字对zhuan齐(16bit)、字对齐（32bit）三种方式，分别对齐到连续地址、偶数地址、被4整除的地址。
2、arm体系结构中有ARM指令集和Thumb指令集2种，其中ARM指令为32位指令，按照4字节对齐存储，一条指令必须从4的整数倍地址来取；Thumb指令为16位指令，按2字节对齐存储，一条指令必须从偶数地址来取。
3、数据的存储：字符型数据一般为字节对齐存储、短整型按照双字节对齐存储、整型/浮点型按照4字节对齐存储。</p>
<p>2.为什么要地址对齐
　　地址对齐其实就是CPU设计中的一个时空权衡，这里采用的是空间换时间的。主要的解决问题是如何能过快速的读取给定的一个变量。</p>
<p>目前的主流计算机有32位，64位这是地址线，一般数据线与地址线条数相同。</p>
<p>如果放置数据时不考虑地址对齐，32位的CPU读取一个4字节的int最少需要一次内存访问，最多需要2次访问内存。下图中左面，取一个int要两次内存访问，而右边的只需要一次内存访问。</p>
<p>3.AXIZ中的地址对齐
在AXI中，主要是三种猝发模式，FIXED，INCR，WRAP。前两种比较容易理解，第三种的边界计算如下。</p>
<p>WRAP猝发类似于INCR猝发。在WRAP中，地址将根据SiZE递增，但是达到地址上限时，地址将换到地址下限。
在WRAP地址计算过程中有两个注意事项，</p>
<p>计算WRAP的地址上限
低位地址回旋到WRAP</p>
<h4 id="_32-nginx已经提供封装了malloc、free的ngx-alloc、ngx-free方法-为什么还需要一个挺复杂的内存池呢" tabindex="-1"><a class="header-anchor" href="#_32-nginx已经提供封装了malloc、free的ngx-alloc、ngx-free方法-为什么还需要一个挺复杂的内存池呢" aria-hidden="true">#</a> （32）Nginx已经提供封装了malloc、free的ngx_alloc、ngx_free方法，为什么还需要一个挺复杂的内存池呢？</h4>
<p>对于没有垃圾回收机制的C语言编写的应用来说，最容易犯的错就是内存泄露。当分配内存与释放内存的逻辑相距遥远时，还很容易发生同一块内存被释放两次。内存
池就是为了降低程序员犯错几率的：模块开发者只需要关心内存的分配，而释放则交由内存池来负责。</p>
<h4 id="_33-内存分配" tabindex="-1"><a class="header-anchor" href="#_33-内存分配" aria-hidden="true">#</a> （33）内存分配：</h4>
<p>当申请的内存算是大块内存时（大于ngx_pool_t的max成员），是直接调用ngx_alloc从进程的堆中分配的，同时会再分配一个ngx_pool_large_t结构体挂在large链表中，</p>
<p>小块内存，通过从进程的堆中预分配更多的内存（ngx_create_pool的size参数决定预分配大小），而后直接使用这块内存的一部分作为小块内存返回给申请者，以此实现减少碎片和调用malloc的次数。</p>
<p>当内存池预分配的size不足使用时，就会再接着分配一个小块内存池，预分配大小与原内存池相等，且仍然使用ngx_pool_t表示这个纯粹的小块内存池，用ngx_pool_data_t的next成员相连。这样，这个新增的ngx_pool_t结构体中与小块内存无关的其他成员此时是无意义的，例如max不会赋值、large链表为空等。ngx_pool_t不只希望程序员不用释放内存，而且还能不需要释放如文件等资源。</p>
<h4 id="_34-事件处理机制" tabindex="-1"><a class="header-anchor" href="#_34-事件处理机制" aria-hidden="true">#</a> （34）事件处理机制</h4>
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
<p>Nginx支持多少种操作系统（包括支持哪些版本），就必须提供多少个事件驱动机制，因为基本上每个操作系统提供的事件驱动机制（通常事件驱动机制还有个名字，叫做I/O多路复用）都是不同的。例如，Linux内核2.6之前的版本或者大部分类UNIX操作系统都可以使用poll（ngx_poll_module模块实现）或者select（ngx_select_module模块实现），而Linux内核2.6之后的版本可以使用epoll（ngx_epoll_module模块实现），FreeBSD上可以使用kqueue（ngx_kqueue_module模块实现），Solaris 10上可以使用eventport（ngx_ eventport_module模块实现）等。</p>
<h4 id="_35-epoll事件驱动模块" tabindex="-1"><a class="header-anchor" href="#_35-epoll事件驱动模块" aria-hidden="true">#</a> （35）epoll事件驱动模块</h4>
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
<p>epoll有两种工作模式： LT（水平触发）模式和ET（边缘触发）模式。默认情况下，epoll采用LT模式工作，这时可以处理阻塞和非阻塞套接字</p>
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
<h4 id="_36-定时器事件" tabindex="-1"><a class="header-anchor" href="#_36-定时器事件" aria-hidden="true">#</a> （36）定时器事件</h4>
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
<h4 id="_37-事件驱动框架的处理流程" tabindex="-1"><a class="header-anchor" href="#_37-事件驱动框架的处理流程" aria-hidden="true">#</a> （37）事件驱动框架的处理流程</h4>
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
<h4 id="_38-文件异步io" tabindex="-1"><a class="header-anchor" href="#_38-文件异步io" aria-hidden="true">#</a> （38）文件异步IO</h4>
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
<p>（39）</p>
<p>如果大量连接同时到来，而应用程序不能及时地调用accept方法，就会导致以上
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
</div></template>



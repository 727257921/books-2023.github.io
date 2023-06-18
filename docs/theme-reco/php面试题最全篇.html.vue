<template><div><h4 id="_1-抓取远程图片到本地-你会用什么函数" tabindex="-1"><a class="header-anchor" href="#_1-抓取远程图片到本地-你会用什么函数" aria-hidden="true">#</a> 1.抓取远程图片到本地,你会用什么函数?</h4>
<p>​		file_get_contents 或者 curl</p>
<h4 id="_2-已知姓名a-姓名b-给一个求他们缘份的算法-重点" tabindex="-1"><a class="header-anchor" href="#_2-已知姓名a-姓名b-给一个求他们缘份的算法-重点" aria-hidden="true">#</a> <strong>2.已知姓名A,姓名B,给一个求他们缘份的算法</strong>（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
&lt;?php
//测试两人有没有缘分
 header("Content-type:text/html;charset=utf-8");
$aname = $_POST['aname'];
$bname = $_POST['bname'];
$cname = $_POST['cname'];
 
function is_meet($a,$b,$c=50){
	//这是测试两人有没有缘分的函数
    //默认两人是在50个人中相遇的概率
	$random1 = rand(1,$c);
	$random2 = rand(1,$c);
	if($random1 == $random2){
		echo $a."和".$b."你俩有缘！";
	}
    else{
		echo $a."和".$b."可惜，你俩没缘分！";
	}
}
echo is_meet($aname,$bname,$cname);
————————————————
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-简述post-和get传输的最大容量分别是多少" tabindex="-1"><a class="header-anchor" href="#_3-简述post-和get传输的最大容量分别是多少" aria-hidden="true">#</a> <strong>3.简述POST 和GET传输的最大容量分别是多少?</strong></h4>
<p>POST 根据你php.ini文件配置(默认是8M)   GET的话 大小限制在2KB</p>
<p>GET方式提交的数据最多只能是1024字节&quot;，因为GET是通过URL提交数据，那么GET可提交的数据量就跟URL的长度有直接关系 了。而实际上，URL不存在参数上限的问题，HTTP协议规范没有对URL长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持。 　　注意这是限制是整个URL长度，而不仅仅是你的参数值数据长度。</p>
<p>get是发送请求HTTP协议通过url参数传递进行接收,而post是实体数据,可以通过表单提交大量信息.</p>
<h4 id="_4-用最少的代码写一个求3值最大值的函数" tabindex="-1"><a class="header-anchor" href="#_4-用最少的代码写一个求3值最大值的函数" aria-hidden="true">#</a> 4.<strong>用最少的代码写一个求3值最大值的函数.</strong></h4>
<p>$max = max($a ,$b $c);</p>
<h4 id="_6-session与cookie的区别" tabindex="-1"><a class="header-anchor" href="#_6-session与cookie的区别" aria-hidden="true">#</a> 6.<strong>session与cookie的区别?</strong></h4>
<p>答:session:储存用户访问的全局唯一变量,存储在服务器上的php指定的目录中的（session_dir）的位置进行的存放</p>
<p>cookie:用来存储连续訪問一个頁面时所使用，是存储在客户端，对于Cookie来说是存储在用户WIN的Temp目录中的。</p>
<p>两者都可通过时间来设置时间长短</p>
<p>cookie数据存放在第三方应用的浏览器上，session数据放在服务器上。
cookie不是很安全，别人可以分析存放在本地的COOKIE，进行COOKIE欺骗,考虑到安全应当使用session。
session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能,考虑到减轻服务器性能方面，应当使用COOKIE。
单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
session的过期时间，指的是静默时间，例如：某个用户的登录session设置的是20分钟过期时间，如果前18分钟用户都没有任何操作，在第19分钟访问了session，有了操作，那么，过期时间重新计算，从0开始计数。而cookie设置了20分钟，无论有无访问，20分钟到了，就是过期了
另外 session可以设置存放形式，默认是文件（file）形式，可以设置为user形式，将session放在缓存或数据库中。</p>
<h4 id="_7-数据库中的事务是什么" tabindex="-1"><a class="header-anchor" href="#_7-数据库中的事务是什么" aria-hidden="true">#</a> 7.<strong>数据库中的事务是什么?</strong></h4>
<p>答:事务（transaction）是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成，</p>
<p>事务则提交，其修改将作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消。</p>
<p>ACID特性：原子性，一致性，持久性，隔离性</p>
<h4 id="_8-用php打印出前一天的时间-格式是2006-5-10-22-21-21" tabindex="-1"><a class="header-anchor" href="#_8-用php打印出前一天的时间-格式是2006-5-10-22-21-21" aria-hidden="true">#</a> 8.<strong>用PHP打印出前一天的时间，格式是2006-5-10 22:21:21</strong></h4>
<p>答:echo date('Y-m-d H:i:s', strtotime('-1 days'));</p>
<h4 id="_8-php最大值和最小值变量" tabindex="-1"><a class="header-anchor" href="#_8-php最大值和最小值变量" aria-hidden="true">#</a> 8.php最大值和最小值变量？</h4>
<p>在64位系统上，PHP内部是使用有符号的64位整形来表示IS_LONG, 分别有俩个常量来表示这俩个值, 分别是PHP_INT_MIN和PHP_INT_MAX。</p>
<h4 id="_9-echo-print-print-r-的区别" tabindex="-1"><a class="header-anchor" href="#_9-echo-print-print-r-的区别" aria-hidden="true">#</a> 9.echo(),print(),print_r()的区别</h4>
<p>答:echo是PHP语句, print和print_r是函数,语句没有返回值,函数可以有返回值(即便没有用)</p>
<p>print（） 只能打印出简单类型变量的值(如int,string)</p>
<p>print_r（）可以打印出复杂类型变量的值(如数组,对象)</p>
<p>echo 输出一个或者多个字符串</p>
<h4 id="_10-能够使html和php分离开使用的模板" tabindex="-1"><a class="header-anchor" href="#_10-能够使html和php分离开使用的模板" aria-hidden="true">#</a> 10.能够使HTML和PHP分离开使用的模板</h4>
<p>答:Smarty,Dwoo,TinyButStrong,Template Lite,Savant,phemplate,XTemplate</p>
<h4 id="_11-如何实现字符串翻转" tabindex="-1"><a class="header-anchor" href="#_11-如何实现字符串翻转" aria-hidden="true">#</a> 11.<strong>如何实现字符串翻转?</strong></h4>
<p>答:echo strrev($a);</p>
<h4 id="_13-php的意思" tabindex="-1"><a class="header-anchor" href="#_13-php的意思" aria-hidden="true">#</a> 13.<strong>PHP的意思</strong></h4>
<p>答:PHP是一个基于服务端来创建动态网站的脚本语言，您可以用PHP和HTML生成网站主页</p>
<h4 id="_14-mysql取得当前时间的函数是-格式化日期的函数是" tabindex="-1"><a class="header-anchor" href="#_14-mysql取得当前时间的函数是-格式化日期的函数是" aria-hidden="true">#</a> 14.MYSQL取得当前时间的函数是?，格式化日期的函数是</h4>
<p>答:now(),date(),DATE_FORMAT(date,format)</p>
<h4 id="_15-实现中文字串截取无乱码的方法。-重点" tabindex="-1"><a class="header-anchor" href="#_15-实现中文字串截取无乱码的方法。-重点" aria-hidden="true">#</a> 15.<strong>实现中文字串截取无乱码的方法。(重点)</strong></h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>第一种方法：
// 0xa0代表十进制160，十六进制整常数的前缀为0X或0x。其数码取值为0~9，A~F或a~f。
// 0xa0 中后两位，a0 先可以转化为二进制 1010 0000 就等于 2*2*2*2*2*2*2+2*2*2*2*2=160
function GBsubstr($string, $start, $length) {

	if(strlen($string)>$length){
		$str=null;
		$len=$start+$length;
		for($i=$start;$i&lt;$len;$i++){
			if(ord(substr($string,$i,1))>0xa0){//在ASCII中，0xa0表示汉字的开始，ord() 函数返回字符串的首个字符的 ASCII 值。
				$str.=substr($string,$i,2);
				$i++;
			}else{
				$str.=substr($string,$i,1);
			}
		}
		return $str.'...';
	}else{
		return $string;
	}
}

第二种方法：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211214174004369.png" alt="image-20211214174004369"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211214174124887.png" alt="image-20211214174124887"></p>
<h4 id="_17-用php写出显示客户端ip与服务器ip的代码-重点" tabindex="-1"><a class="header-anchor" href="#_17-用php写出显示客户端ip与服务器ip的代码-重点" aria-hidden="true">#</a> 17.<strong>用PHP写出显示客户端IP与服务器IP的代码?(重点)</strong></h4>
<p>答:打印客户端IP:echo $_SERVER[‘REMOTE_ADDR’]; 或者: getenv('REMOTE_ADDR');</p>
<p>获取客户端IP，很多代码都会拿 <code v-pre>HTTP_CLIENT_IP</code>的值，其次拿 <code v-pre>HTTP_X_FORWARDED_FOR</code>，最后是 <code v-pre>REMOTE_ADDR</code>。</p>
<p>答案：</p>
<p><code v-pre>REMOTE_ADDR</code>不可以显式的伪造，虽然可以通过代理将ip地址隐藏，但是这个地址仍然具有参考价值，因为它就是与你的服务器实际连接的ip地址。</p>
<p>相比之下，前两种ip地址都可以通过http <a href="https://so.csdn.net/so/search?q=header&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">header<ExternalLinkIcon/></a>来伪造，但并不意味着它们一无是处。生产环境中很多服务器隐藏在负载均衡节点后面，你通过<code v-pre>REMOTE_ADDR</code>只能获取到负载均衡节点的ip地址，一般的负载均衡节点会把前端实际的ip地址通过<code v-pre>HTTP_CLIENT_IP</code>或者<code v-pre>HTTP_X_FORWARDED_FOR</code>这两种http头传递过来</p>
<p>后端再去读取这个值就是真实可信的，因为它是负载均衡节点告诉你的而不是客户端。但当你的服务器直接暴露在客户端前面的时候，请不要信任这两种读取方法，只需要读取<code v-pre>REMOTE_ADDR</code>就行了</p>
<p>获取客户端ip 1.'REMOTE_ADDR' 是远端IP，默认来自tcp 连接是，客户端的Ip。可以说，它最准确，确定是，只会得到直接连服务器客户端IP。如果对方通过代理服务器上网，就发现。获取到的是代理服务器IP了。 如：a-&gt;b(proxy)-&gt;c ,如果c 通过'REMOTE_ADDR' ，只能获取到b的IP,获取不到a的IP了。 另外:该I...</p>
<img src=".\img\php面试题最全篇\image-20220212201617445.png" alt="image-20220212201617445"  />
<p>打印服务器IP:echo gethostbyname(&quot;www.bolaiwu.com&quot;)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//显示客户端I
function get_client_ip() {
    if(getenv('HTTP_CLIENT_IP')) {
    	$client_ip = getenv('HTTP_CLIENT_IP');
    } elseif(getenv('HTTP_X_FORWARDED_FOR')) {
    	$client_ip = getenv('HTTP_X_FORWARDED_FOR');
    } elseif(getenv('REMOTE_ADDR')) {
    	$client_ip = getenv('REMOTE_ADDR');
    } else {
    	$client_ip = $HTTP_SERVER_VAR['REMOTE_ADDR'];
    }
    return $client_ip;
}
//服务器IP
function get_server_ip(){
    if (isset($_SERVER)){
        if($_SERVER['SERVER_ADDR']) {
        	$huoqu_ip=$_SERVER['SERVER_ADDR'];
        }else {
        	$huoqu_ip=$_SERVER['LOCAL_ADDR'];
        }
    } else {
        $huoqu_ip=getenv('SERVER_ADDR');
    }
    return $huoqu_ip;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_21-求两个日期的差数-例如2007-2-5-2007-3-6-的日期差数" tabindex="-1"><a class="header-anchor" href="#_21-求两个日期的差数-例如2007-2-5-2007-3-6-的日期差数" aria-hidden="true">#</a> 21.<strong>求两个日期的差数，例如2007-2-5 ~ 2007-3-6 的日期差数</strong></h4>
<p>$begin=strtotime('2007-2-5');</p>
<p>$end=strtotime('2007-3-6');</p>
<p>echo ($end-$begin)/(24*3600);</p>
<h4 id="_18-语句include和require的区别是什么-为避免多次包含同一文件-可用-语句代替它们-重点" tabindex="-1"><a class="header-anchor" href="#_18-语句include和require的区别是什么-为避免多次包含同一文件-可用-语句代替它们-重点" aria-hidden="true">#</a> 18.<strong>语句include和require的区别是什么?为避免多次包含同一文件，可用(?)语句代替它们?(重点)</strong></h4>
<p>require()和include()除了怎样处理失败之外在各方面都完全一样。include()产生一个警告而require()则导致一个致命错误。</p>
<p>换句话说，如果你想在丢失文件时停止处理页面,用require()。include() 就不是这样，脚本会继续运行。</p>
<p>require()无论如何都会包含文件,而include()可以有选择地包含.www.</p>
<p>代替用</p>
<p>include_once</p>
<p>require_once</p>
<h4 id="_19-如何修改session的生存时间-重点" tabindex="-1"><a class="header-anchor" href="#_19-如何修改session的生存时间-重点" aria-hidden="true">#</a> 19.<strong>如何修改SESSION的生存时间.</strong>(重点)</h4>
<p>答:</p>
<p>方法1：将php.ini中的session.gc_maxlifetime设置为9999重启apache</p>
<p>方法2：$savePath = &quot;./session_save_dir/&quot;;</p>
<p>​		$lifeTime = 小时 * 秒;</p>
<p>​		session_save_path($savePath);</p>
<p>​		session_set_cookie_params($lifeTime);</p>
<p>​		session_start();</p>
<p>方法3：setcookie() and session_set_cookie_params($lifeTime);</p>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<h4 id="_20-如何用php的环境变量得到一个网页地址的内容-ip地址又要怎样得到-重点" tabindex="-1"><a class="header-anchor" href="#_20-如何用php的环境变量得到一个网页地址的内容-ip地址又要怎样得到-重点" aria-hidden="true">#</a> 20.<strong>如何用php的环境变量得到一个网页地址的内容？ip地址又要怎样得到？</strong>(重点)</h4>
<p>REQUEST_URI 返回的是包括后面数据串的地址，如 index.php?str=1234 PHP_SELF 是 index.php</p>
<p>echo $_SERVER ['PHP_SELF'];</p>
<p>echo $_SERVER ['SERVER_ADDR'];</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>print_r($_SERVER);

?>

输出：

Array

(

[HTTP_HOST] => localhost

[HTTP_USER_AGENT] => Mozilla/5.0 (Windows NT 6.1; rv:24.0) Gecko/20100101 Firefox/24.0

[HTTP_ACCEPT] => text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

[HTTP_ACCEPT_LANGUAGE] => zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3

[HTTP_ACCEPT_ENCODING] => gzip, deflate

[HTTP_CONNECTION] => keep-alive

[HTTP_CACHE_CONTROL] => max-age=0

[PATH] => C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;

[SystemRoot] => C:\Windows

[COMSPEC] => C:\Windows\system32\cmd.exe

[PATHEXT] => .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC

[WINDIR] => C:\Windows

[SERVER_SIGNATURE] =>

[SERVER_SOFTWARE] => Apache/2.2.6 (Win32) PHP/5.2.5

[SERVER_NAME] => localhost

[SERVER_ADDR] => 127.0.0.1

[SERVER_PORT] => 80

[REMOTE_ADDR] => 127.0.0.1

[DOCUMENT_ROOT] => D:/wamp/www

[SERVER_ADMIN] => webmaster@localhost

[SCRIPT_FILENAME] => D:/wamp/www/index.php

[REMOTE_PORT] => 54001

[GATEWAY_INTERFACE] => CGI/1.1

[SERVER_PROTOCOL] => HTTP/1.1

[REQUEST_METHOD] => GET

[QUERY_STRING] =>

[REQUEST_URI] => /index.php

[SCRIPT_NAME] => /index.php

[PHP_SELF] => /index.php

[REQUEST_TIME] => 1381126174

[argv] => Array

(

)

[argc] => 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-请写一个函数-实现以下功能-字符串-open-door-转换成-opendoor-、-make-by-id-转换成-makebyid-。" tabindex="-1"><a class="header-anchor" href="#_22-请写一个函数-实现以下功能-字符串-open-door-转换成-opendoor-、-make-by-id-转换成-makebyid-。" aria-hidden="true">#</a> 22.**请写一个函数，实现以下功能：**字符串“open_door” 转换成 “OpenDoor”、”make_by_id” 转换成 ”MakeById”。</h4>
<p>方法1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$str = "open_door";
$str = str_replace ("_", " ", $str);
$str = ucwords ( $str ); //Open Door
$str = str_replace (" ", "", $str);
echo $str;//OpenDoor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$arrStr=explode('_',$str);
foreach($arrStr as $key=>$value){
 	$arrStr[$key]=strtoupper(substr($value,0,1)).substr($value,1);
}
return implode('',$arrStr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23-请简述数据库设计的范式及应用。" tabindex="-1"><a class="header-anchor" href="#_23-请简述数据库设计的范式及应用。" aria-hidden="true">#</a> 23.<strong>请简述数据库设计的范式及应用。</strong></h4>
<p>一般第3范式就足以，用于表结构的优化，这样做既可以避免应用程序过于复杂同时也避免了SQL语句过于庞大所造成系统效率低下。</p>
<p>ANSWER：</p>
<p>第一范式：若关系模式R的每一个属性是不可再分解的，再属于第一范式。</p>
<p>第二范式：若R属于第一范式，且所有的非码属性都完全函数依赖于码属性，则为第二范式。</p>
<p>第三范式：若R属于第二范式，且所有的非码属性没有一个是传递函数依赖于候选码，则属于第三范式。</p>
<h4 id="_24-一个表中的id有多个记录-把所有这个id的记录查出来-并显示共有多少条记录数-用sql语句及视图、存储过程分别实现。-重点" tabindex="-1"><a class="header-anchor" href="#_24-一个表中的id有多个记录-把所有这个id的记录查出来-并显示共有多少条记录数-用sql语句及视图、存储过程分别实现。-重点" aria-hidden="true">#</a> 24.<strong>一个表中的Id有多个记录，把所有这个id的记录查出来，并显示共有多少条记录数，用SQL语句及视图、存储过程分别实现。</strong>（重点）</h4>
<p>存储过程：</p>
<p>[php]</p>
<p>DELIMITER //</p>
<p>create procedure proc_countNum(in columnId int,out rowsNo int)</p>
<p>begin</p>
<p>select count(*) into rowsNo from member where member_id=columnId;</p>
<p>end</p>
<p>call proc_countNum(1,@no);</p>
<p>select @no;</p>
<h4 id="_25-写一个函数-能够遍历一个文件夹下的所有文件和子文件夹。-目录操作-重点" tabindex="-1"><a class="header-anchor" href="#_25-写一个函数-能够遍历一个文件夹下的所有文件和子文件夹。-目录操作-重点" aria-hidden="true">#</a> 25.<strong>写一个函数，能够遍历一个文件夹下的所有文件和子文件夹。（目录操作）</strong>（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function getDir($dir){
	$files = array();
	if($handle = opendir($dir)){
		while(($file = readdir($handle)) !== false){
			if($file != ".." &amp;&amp; $file != "."){
				if(is_dir($dir."/".$file)){
					$files[$file] = getDir($dir."/".$file);
				}else{
					$files[] = $file;
				}
			}
		}
		closeDir($handle);
		return $files;
	}
}
$res = getDir("C:\Users\happing\Downloads\xitu_extension-online-v1.0.0.279.standalone.crx");
var_dump($res);
// array(2) {
//   [0]=>
//   string(47) "xitu_extension-online-v1.0.0.279.standalone.crx"
//   ["__MACOSX"]=>
//   array(1) {
//     [0]=>
//     string(49) "._xitu_extension-online-v1.0.0.279.standalone.crx"
//   }
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_94-删除目录-重点" tabindex="-1"><a class="header-anchor" href="#_94-删除目录-重点" aria-hidden="true">#</a> 94.删除目录（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_213-写出一个能创建多级目录的php函数" tabindex="-1"><a class="header-anchor" href="#_213-写出一个能创建多级目录的php函数" aria-hidden="true">#</a> 213.写出一个能创建多级目录的PHP函数</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function createDir($path,$Mode=0777){
	if(is_dir($path)){
		echo "目录已存在";
	}else{
		if(mkdir($path,$mode,true)){
			echo "创建目录成功";
		}else{
			echo "创建目录失败";
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_26-两张表-city表和province表。分别为城市与省份的关系表。" tabindex="-1"><a class="header-anchor" href="#_26-两张表-city表和province表。分别为城市与省份的关系表。" aria-hidden="true">#</a> 26.<strong>两张表 city表和province表。分别为城市与省份的关系表。</strong></h4>
<p>city:</p>
<p>id City Provinceid</p>
<p>1 广州 1</p>
<p>2 深圳 1</p>
<p>3 惠州 1</p>
<p>4 长沙 2</p>
<p>5 武汉 3</p>
<p>………. 广州</p>
<p>province:</p>
<p>id Province</p>
<p>1 广东</p>
<p>2 湖南</p>
<p>3 湖北</p>
<p>……….</p>
<p>（1） 写一条sql语句关系两个表，实现：显示城市的基本信息。？</p>
<p>（2） 显示字段：城市id ，城市名， 所属省份 。</p>
<p>如：</p>
<p>Id（城市id） Cityname(城市名) Privence(所属省份)</p>
<p>。。。。。。。。。</p>
<p>。。。。。。。。。</p>
<p>（2）如果要统计每个省份有多少个城市，请用group by 查询出来。？</p>
<p>显示字段：省份id ，省份名，包含多少个城市。</p>
<p>ANSWER:</p>
<p>1.select A.id,A.Cityname,B.Province from city A,province B where A.provinceid=B.id</p>
<p>2.select B.id,B.Province,count(*) as num from city A,province B where A.provinceid=B.id group by B.id</p>
<h4 id="_29-按照你的经验请简述软件工程进行软件开发的步骤。以下工具rational-rose、powerdesigner、project、vss或cvs、testdirector使用过那种-有缺点是什么" tabindex="-1"><a class="header-anchor" href="#_29-按照你的经验请简述软件工程进行软件开发的步骤。以下工具rational-rose、powerdesigner、project、vss或cvs、testdirector使用过那种-有缺点是什么" aria-hidden="true">#</a> 29.按照你的经验请简述软件工程进行软件开发的步骤。以下工具Rational Rose、PowerDesigner、Project、VSS或CVS、TestDirector使用过那种,有缺点是什么？</h4>
<p>​		公司用dbdesigner及cvs,测试管理工具用的是Mantis</p>
<h4 id="_32-假设给你5台服务器-请大致的描述一下-如何使用你所熟悉的开源软件-搭建一个日pv-300万左右的中型网站-重点" tabindex="-1"><a class="header-anchor" href="#_32-假设给你5台服务器-请大致的描述一下-如何使用你所熟悉的开源软件-搭建一个日pv-300万左右的中型网站-重点" aria-hidden="true">#</a> 32.<strong>假设给你5台服务器，请大致的描述一下，如何使用你所熟悉的开源软件，搭建一个日PV 300万左右的中型网站</strong>.（重点）</h4>
<p>3台Web服务器，两台MySQL数据库服务器，采用Master/Slave同步的方式减轻数据库负载，Web服务器可以结合Memcache缓存来减少负载，同时三台Web服务器内容一致，
可以采用DNS轮询的方式来进行负载平衡。</p>
<h4 id="_35-使用过memcache缓存吗-如果使用过-能够简单的描述一下它的工作原理吗-重点" tabindex="-1"><a class="header-anchor" href="#_35-使用过memcache缓存吗-如果使用过-能够简单的描述一下它的工作原理吗-重点" aria-hidden="true">#</a> 35.<strong>使用过Memcache缓存吗，如果使用过，能够简单的描述一下它的工作原理吗？（重点）</strong></h4>
<p>Memcahce是把所有的数据保存在内存当中，采用hash表的方式，每条数据又key和value组成，每个key是独一无二的，当要访问某个值的时候先按照找到值，然后返回结果。</p>
<p>Memcahce采用LRU算法来逐渐把过期数据清除掉。</p>
<h4 id="_36-说说下面这些这些协议的全称和中文解释-提示-都是工作在应用层-重点" tabindex="-1"><a class="header-anchor" href="#_36-说说下面这些这些协议的全称和中文解释-提示-都是工作在应用层-重点" aria-hidden="true">#</a> 36. <strong>说说下面这些这些协议的全称和中文解释（提示：都是工作在应用层）</strong>（重点）</h4>
<p>​		SMTP、POP3、HTTP、FTP、DNS</p>
<p>SMTP (Simple Mail Transfer Protocol) 简单邮件传输协议</p>
<p>POP3 (Post Office Protocol 3) 邮局协议第3版</p>
<p>HTTP (Hypertext Transfer Protocol) 超文本传输协议</p>
<p>FTP  (File Transfer Protocol）文件传输协议</p>
<p>DNS  (Domain Name System and Domain Name Service protocol) 域名系统（服务）协议</p>
<h4 id="_37-请描述出osi七层网络模型的名称-由下到上-可以使用中文描述-重点" tabindex="-1"><a class="header-anchor" href="#_37-请描述出osi七层网络模型的名称-由下到上-可以使用中文描述-重点" aria-hidden="true">#</a> 37. <strong>请描述出OSI七层网络模型的名称，由下到上（可以使用中文描述）</strong>（重点）</h4>
<p>​		物理层、数据链路层、网络层、传输层、会话层、表示层、应用层</p>
<h4 id="_38-说说linux下的find命令和grep命令的区别-重点" tabindex="-1"><a class="header-anchor" href="#_38-说说linux下的find命令和grep命令的区别-重点" aria-hidden="true">#</a> 38. 说说Linux下的find命令和grep命令的区别（重点）</h4>
<p>​		Find：按照文件名查找</p>
<p>​		Grep：按照文件内容查找</p>
<h4 id="_39-使用过vim编辑器吗-如果使用过-如何在vim里切分多个可视化窗口-包括横排和纵排。-重点" tabindex="-1"><a class="header-anchor" href="#_39-使用过vim编辑器吗-如果使用过-如何在vim里切分多个可视化窗口-包括横排和纵排。-重点" aria-hidden="true">#</a> 39. <strong>使用过Vim编辑器吗？如果使用过，如何在vim里切分多个可视化窗口，包括横排和纵排。（重点）</strong></h4>
<p>​		横：split（sp）</p>
<p>​		纵：vsplit（vsp）</p>
<h4 id="_40-出五种以上你使用过的php的扩展的名称-提示-常用的php扩展" tabindex="-1"><a class="header-anchor" href="#_40-出五种以上你使用过的php的扩展的名称-提示-常用的php扩展" aria-hidden="true">#</a> 40. <strong>出五种以上你使用过的PHP的扩展的名称（提示：常用的PHP扩展）</strong></h4>
<p>​		mb_string、Iconv、Curl、GD、SHM、libxml、socket、MySQL、PDO 等等</p>
<h4 id="_42-请描述出两点以上xhtml和html最显著的区别-重点" tabindex="-1"><a class="header-anchor" href="#_42-请描述出两点以上xhtml和html最显著的区别-重点" aria-hidden="true">#</a> 42. <strong>请描述出两点以上XHTML和HTML最显著的区别</strong>?（重点）</h4>
<p>​		(1)XHTML必须强制指定文档类型DocType，HTML不需要</p>
<p>​		(2)XHTML所有标签必须闭合，HTML比较随意</p>
<h4 id="_48-写出匹配邮箱地址和url的两个正则表达式。类似下面的-重点" tabindex="-1"><a class="header-anchor" href="#_48-写出匹配邮箱地址和url的两个正则表达式。类似下面的-重点" aria-hidden="true">#</a> 48. <strong>写出匹配邮箱地址和URL的两个正则表达式。类似下面的：</strong>（重点）</h4>
<p>邮箱地址：user_name.first@example.com.cn</p>
<p>URL地址：http://www.example.com.cn/user_profile.php?uid=100</p>
<p>（提示：使用标准的正则表达式，就是PHP中preg_* 类的正则处理函数能够解析的正则）</p>
<p>邮箱：/\w+([-+.]\w+)<em>@\w+([-.]\w+)</em>.\w+([-.]\w+)*/</p>
<p>URL：/^http://[\w]+.[\w]+[\S]*/</p>
<h4 id="_67-请写一个函数验证电子邮件的格式是否正确-。-重点" tabindex="-1"><a class="header-anchor" href="#_67-请写一个函数验证电子邮件的格式是否正确-。-重点" aria-hidden="true">#</a> 67.请写一个函数验证电子邮件的格式是否正确 。（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//if the email address is valid, return true,else return false

function validateEmail($email)
{
    if(eregi('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*$',$email) ){
        return true;
    }else{
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_91-写出匹配url的正则表达式" tabindex="-1"><a class="header-anchor" href="#_91-写出匹配url的正则表达式" aria-hidden="true">#</a> 91.写出匹配URL的正则表达式.</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_233-用正则表达式判断-a是否是一个以半角逗号分隔的多个手机号码组成的字符串-是输出yes-卓望" tabindex="-1"><a class="header-anchor" href="#_233-用正则表达式判断-a是否是一个以半角逗号分隔的多个手机号码组成的字符串-是输出yes-卓望" aria-hidden="true">#</a> 233.用正则表达式判断$a是否是一个以半角逗号分隔的多个手机号码组成的字符串，是输出yes（卓望</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216203401142.png" alt="image-20211216203401142"></p>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h4>
<h4 id="_47-说出你所知道的三种以上开源数据库的名称-提示-想想目前国外流行的开源数据库-重点" tabindex="-1"><a class="header-anchor" href="#_47-说出你所知道的三种以上开源数据库的名称-提示-想想目前国外流行的开源数据库-重点" aria-hidden="true">#</a> 47. <strong>说出你所知道的三种以上开源数据库的名称（提示：想想目前国外流行的开源数据库）</strong>（重点）</h4>
<p>​		MySQL、SQLite、BDB（Berkeley DB）、PostgreSQL、Firebird</p>
<h4 id="_46-写出三种以上mysql数据库存储引擎的名称-提示-不区分大小写-重点" tabindex="-1"><a class="header-anchor" href="#_46-写出三种以上mysql数据库存储引擎的名称-提示-不区分大小写-重点" aria-hidden="true">#</a> 46. <strong>写出三种以上MySQL数据库存储引擎的名称（提示：不区分大小写）</strong>（重点）</h4>
<p>​		MyISAM、InnoDB、BDB（Berkeley DB）、Merge、Memory（Heap）、Example、Federated、Archive、CSV、Blackhole、MaxDB 等等十几个引擎</p>
<h4 id="_45-mysql数据库中的字段类型varchar和char的主要区别是什么-那种字段的查找效率要高-为什么-重点" tabindex="-1"><a class="header-anchor" href="#_45-mysql数据库中的字段类型varchar和char的主要区别是什么-那种字段的查找效率要高-为什么-重点" aria-hidden="true">#</a> 45. <strong>MySQL数据库中的字段类型varchar和char的主要区别是什么？那种字段的查找效率要高，为什么?</strong>（重点）</h4>
<p>Varchar是变长，节省存储空间，char是固定长度。查找效率要char型快，因为varchar是非定长，必须先查找长度，然后进行数据的提取，比char定长类型多了一个步骤，所以效率低一些.</p>
<h4 id="_44-mysql数据库基本的三个优化法则是什么-除了增加硬件和带宽-提示-从服务配置、应用、开发角度考虑-重点" tabindex="-1"><a class="header-anchor" href="#_44-mysql数据库基本的三个优化法则是什么-除了增加硬件和带宽-提示-从服务配置、应用、开发角度考虑-重点" aria-hidden="true">#</a> 44. <strong>MySQL数据库基本的三个优化法则是什么，除了增加硬件和带宽？（提示：从服务配置、应用、开发角度考虑）</strong>（重点）</h4>
<p>（1）系统服务优化，把MySQL的key_buffer、cache_buffer、query_cache等增加容量</p>
<p>（2）给所有经常查询的字段增加适当的索引</p>
<p>（3）优化SQL语句，减少Ditinct、Group、Join等等语句的操作</p>
<h4 id="_49-php中的list-用法中要注意的地方-重点" tabindex="-1"><a class="header-anchor" href="#_49-php中的list-用法中要注意的地方-重点" aria-hidden="true">#</a> <strong>49.php中的list()用法中要注意的地方</strong>?（重点）</h4>
<p>php中list()函数是用数组对一列值进行赋值，该函数只用于数字索引的数组，且假定数字索引从0开始。(这句话很重要,是从索引0开始为变量赋值,如果对应的数字索引不存在，则对应位的变量也为空值。)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$arr=array(
	"1"=>"book",
	"3"=>"pen",
	"5"=>"paper"
);
list($a,$b,$c)=$arr;
echo "a:".$a;echo "&lt;br/>";
echo "b:".$b;echo "&lt;br/>";
echo "c:".$c;echo "&lt;br/>";
// a:
// b:book
// c:
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_50-使用socket抓取百度首页-并且得到搜索框-重点" tabindex="-1"><a class="header-anchor" href="#_50-使用socket抓取百度首页-并且得到搜索框-重点" aria-hidden="true">#</a> 50.使用socket抓取百度首页，并且得到搜索框：（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_77-有一个网页地址-比如php开发资源网主页-http-www-phpddt-com-如何得到它的内容-重点" tabindex="-1"><a class="header-anchor" href="#_77-有一个网页地址-比如php开发资源网主页-http-www-phpddt-com-如何得到它的内容-重点" aria-hidden="true">#</a> 77.有一个网页地址, 比如PHP开发资源网主页: http://www.phpddt.com/,如何得到它的内容?（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答:
方法1(对于PHP5及更高版本):
  $readcontents = fopen("http://www.phpddt.com/", "rb");
  $contents = stream_get_contents($readcontents);
  fclose($readcontents);
  echo $contents;
方法2:
  echo file_get_contents("[http://www.phpddt.com](http://www.phpddt.com/) .com/");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> </h4>
<h4 id="_51-用php实现一个双向队列-重点" tabindex="-1"><a class="header-anchor" href="#_51-用php实现一个双向队列-重点" aria-hidden="true">#</a> 51.用PHP实现一个双向队列：（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class doubleQueue{
	private $queue = array();
	public function addFirst($v){
		array_unshift($this->queue,$v);
	}
	public function addLast($v){
		array_push($this->queue,$v);
	}
	public function removeFirst(){
		array_shift($this->queue);
	}
	public function removeLast($v){
		array_pop($this->queue);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_52-打开-php-ini-中的-safe-mode-会影响哪些函数-至少说出-6个。-重点" tabindex="-1"><a class="header-anchor" href="#_52-打开-php-ini-中的-safe-mode-会影响哪些函数-至少说出-6个。-重点" aria-hidden="true">#</a> 52. 打开 php.ini  中的 safe_mode ，会影响哪些函数？至少说出 6个。（重点）</h4>
<p>​		safe_mode，php 安全模式，它提供一个基本安全的共享环境，在一个有多个用户账户存在的 php 开发的 web 服务器上。当安全模式打开的时候，一些函数将被完全的禁止，而另一些函数的功能将会受到限制，如：chdir, move_uploaded_file,chgrp,parse_ini_file, chown,rmdir, copy, rename, fopen, require,mkdir, unlink 等。注意，在 php5.3 以上版本，safe_mode 被弃用，在 php5.4 以上版本，则将此特性完全去除了。</p>
<h4 id="_53-php5-中魔术方法函数有哪几个-请举例说明各自的用法-重点" tabindex="-1"><a class="header-anchor" href="#_53-php5-中魔术方法函数有哪几个-请举例说明各自的用法-重点" aria-hidden="true">#</a> <strong>53.</strong> PHP5 中魔术方法函数有哪几个，请举例说明各自的用法（重点）</h4>
<p>__get（）读取一个对象属性，若属性存在则返回，不存在则调用此函数</p>
<p>__set 设置一个对象的属性时，若属性存在，则直接赋值，若不存在，则调用__set 函数</p>
<p>__call 对象调用某个方法，若存在该方法，则直接调用，若不存在，则调用__call 函数</p>
<p>__construct 构造函数，实例化对象时被调用</p>
<p>__destruct 析构函数，当对象销毁时被调用</p>
<p>__sleep serialize 之前被调用</p>
<p>__wakeup unserialize 时被调用</p>
<p>__clone 克隆对象时被调用</p>
<p>__unset unset 一个对象的属性时被调用</p>
<p>__isset 检测一个对象的属性是否存在时被调用</p>
<p>__autoload 实例化一个对象时，如果对应的类不存在，则该方法被调用</p>
<p>__toString 打印一个对象时被调用</p>
<p>__set_state 调用 var_export 时被调用，用__set_state 的返回值作为 var_export 的返回值</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
class MethodTest 
{
	private $data = array();

	public function __call ($name, $arguments) {
		echo "Calling object method '$name' ". implode(', ', $arguments). "\n";
	}

	public static function __callStatic ($name, $arguments) {
		echo "Calling static method '$name' ". implode(', ', $arguments). "\n";
	}

	public function __set($name, $value){
		$this->data[$name] = $value;
	}

	public function __get($name){
		if(array_key_exists($name, $this->data))

		return $this->data[$name];
	}

	public function __isset($name){
		return isset($this->data[$name]);
	}

	public function unset($name){
		unset($this->data[$name]);
	}
}
 
// $obj = new MethodTest;
// $obj->runTest('in object context');
// MethodTest::runTest('in static context');
//Calling object method 'runTest' in object context Calling static method 'runTest' in static context


class Connection 
{
	protected $link;
	private $server, $username, $password, $db;

	public function __construct($server, $username, $password, $db)
	{
		$this->server = $server;
		$this->username = $username;
		$this->password = $password;
		$this->db = $db;
		$this->connect();
	}
 
	private $data = array();

	public function __call ($name, $arguments) {
		echo "Calling object method '$name' ". implode(', ', $arguments). "\n";
		echo "&lt;hr>";
	}

	public static function __callStatic ($name, $arguments) {
		echo "Calling static method '$name' ". implode(', ', $arguments). "\n";
		echo "&lt;hr>";
	}

	public function __set($name, $value){
		$this->data[$name] = $value;
	}

	public function __get($name){
		if(array_key_exists($name, $this->data))

		return $this->data[$name];
	}

	public function __isset($name){
		return isset($this->data[$name]);
	}

	public function unset($name){
		unset($this->data[$name]);
	}

	private function connect()
	{
		$this->link = mysqli_connect($this->server, $this->username, $this->password);
		// var_dump($this->link);die();
		mysqli_select_db($this->link,$this->db);
	}

	public function __sleep()
	{
		echo 111;
		return array('server', 'username', 'password', 'db');
	}
 
	public function __wakeup()
	{
		echo 22;
		$this->connect();
	}

	public function __toString() {
	  	return 'this is a object'; //对象当成字符串时的回应方法。例如使用echo $obj;来输出一个对象,这个方法只能返回字符串，而且不可以在这个方法中抛出异常，否则会出现致命错误。
	}

	public function __invoke() {
	  echo 'this is a object'; //调用函数的方式调用一个对象时的回应方法。
	  echo "&lt;hr>";
	}

	public $var1;
 	public $var2;
	 
 	public static function __set_state($an_array) { //调用var_export()导出类时，此静态方法会被调用。
 		echo "&lt;hr>";
 		echo '__set_state';
		$obj = new A;
		$obj->var1 = $an_array['var1'];
		$obj->var2 = $an_array['var2'];
		return $obj;
 	}

 	// 防止克隆实例
	 public function __clone(){//当对象复制完成时调用。例如在设计模式详解及PHP实现：单例模式一文中提到的单例模式实现方式，利用这个函数来防止对象被克隆。
	 	echo "&lt;hr>";
	  	die('Clone is not allowed.' . E_USER_ERROR);//Clone is not allowed.256
	 }
}



// 当我们在执行serialize()和unserialize()时，会先调用这两个函数。例如我们在序列化一个对象时，这个对象有一个数据库链接，想要在反序列化中恢复链接状态，则可以通过重构这两个函数来实现链接的恢复。
$obj2 = new Connection('127.0.0.1','root','root','laravel54');
$a = serialize($obj2);//111
$aa = unserialize($a);//22

echo $obj2;  //this is a object
var_dump(is_callable($obj)); //bool(false) __invoke()调用函数的方式调用一个对象时的回应方法。

$obj2->runTest('in object context');
Connection::runTest('in static context');
//Calling object method 'runTest' in object context Calling static method 'runTest' in static context

$obj2->var1 = 5;
$obj2->var2 = 'foo';
var_dump(var_export($obj2));

// $obj3 = clone($obj2);
// var_dump($obj3);
echo "&lt;hr>";



// spl_autoload_register3中用法1:
// spl_autoload_register(function($name){
// 	$file = "./".$name.".php";
// 	if(is_file($file)){
// 		require_once($file);
// 	}
// });

// spl_autoload_register3中用法2:
// function getLand($name){
// 	$file = "./".$name.".php";
// 	if(is_file($file)){
// 		require_once($file);
// 	}
// }
// spl_autoload_register('getLand');

// spl_autoload_register3中用法3:
class Load{
	public function autoload($name){
		$file = "./".$name.".php";
		if(is_file($file)){
			require_once($file);
		}
	}
}
spl_autoload_register([new Load,'autoload']);

//自动加载类用法
$obj5 = new Autoload();
echo "&lt;hr>";
echo $obj5->index();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_54-请对posix-风格和兼容perl-风格两种正则表达式的主要函数进行类比说明-重点" tabindex="-1"><a class="header-anchor" href="#_54-请对posix-风格和兼容perl-风格两种正则表达式的主要函数进行类比说明-重点" aria-hidden="true">#</a> 54.请对POSIX 风格和兼容Perl 风格两种正则表达式的主要函数进行类比说明（重点）</h4>
<p>主要区别有以下三种：</p>
<ol>
<li>preg_replace()里面的正则可以写成型如：&quot;/.xxx/&quot;而 ereg_replace()里面的正则需写成型如</li>
</ol>
<p>&quot;xxx&quot;</p>
<ol start="2">
<li>
<p>preg_replace()能操作数组，而 ereg_replace()不可以</p>
</li>
<li>
<p>在逆向引用用 preg_replace()可使用 0-99 个，而 ereg_replace()最多为 9 个</p>
</li>
</ol>
<p>使用 Perl 兼容正则表达式语法的 preg_match() 函数通常是比 ereg() 更快的替代方案。</p>
<h4 id="_55-请写出让php能够在命令行下以脚本方式执行时安装php所必须指定的configure参数-并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数" tabindex="-1"><a class="header-anchor" href="#_55-请写出让php能够在命令行下以脚本方式执行时安装php所必须指定的configure参数-并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数" aria-hidden="true">#</a> 55.请写出让PHP能够在命令行下以脚本方式执行时安装PHP所必须指定的configure参数，并说明如何在命令行下运行PHP脚本（写出两种方式）同时向PHP脚本传递参数？</h4>
<p>答：由于 –enable-cli 和 –enable-cgi 同时默认有效，因此，不必再配置行中加上 –enable-cli 来使得 CLI 在 make install 过程中被拷贝到 {PREFIX}/bin/php</p>
<p>php -f “index.php”
php -r “print_r(get_defined_constants());”</p>
<h4 id="_55-请写出并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数-重点" tabindex="-1"><a class="header-anchor" href="#_55-请写出并说明如何在命令行下运行php脚本-写出两种方式-同时向php脚本传递参数-重点" aria-hidden="true">#</a> 55.请写出并说明如何在命令行下运行PHP脚本（写出两种方式）同时向PHP脚本传递参数（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>php中的getop是用于接收cmd参数的时候用的，例如当你再linxu 中 需要用php调试的时候，往往需要带参数调试，getopt就是可以实现带参数传入的命令。</p>
<p>使用方式：</p>
<p>array getopt ( string$options [, array$longopts ] )
string 形如 字符[:]字符[:]如 f:hg:字符表示可以接受命令行包含形如-字符的参数如 -f，字符后面的冒号:表示，当冒号前面的字符出现在参数中时，后面必须跟该参数对应的取整，</p>
<p>​		如 -f   name</p>
<p>​		note: 包含当运行于<a href="http://www.cnblogs.com/zcy_soft/archive/2011/06/29/features.commandline.php" target="_blank" rel="noopener noreferrer">命令行<ExternalLinkIcon/></a>下时传递给当前脚本的参数的数组。</p>
<p>​		Note: 这个变量仅在 <a href="#ini.register-argc-argv">register_argc_argv</a> 打开时可用。</p>
<h4 id="_56-子类重写父类的-protected-方法有什么限制-或者说有什么要遵守的规则-重点" tabindex="-1"><a class="header-anchor" href="#_56-子类重写父类的-protected-方法有什么限制-或者说有什么要遵守的规则-重点" aria-hidden="true">#</a> <strong>56.</strong> 子类重写父类的 protected 方法有什么限制？或者说有什么要遵守的规则？（重点）</h4>
<p>1、覆盖的方法的方法名称和参数类型必须要和被覆盖的方法的标志完全匹配，才能达到覆盖的效果；
2、覆盖的方法的返回值必须和被覆盖的方法的返回一致；
3、覆盖的方法所抛出的异常必须和被覆盖方法的所抛出的异常一致，或者是其子类，或者什么也不抛出；
4、被覆盖的方法不能为private，否则在其子类中只是新定义了一个方法，并没有对其进行覆盖。
5、覆盖的方法的<a href="https://www.baidu.com/s?wd=%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90&amp;tn=44039180_cpr&amp;fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3PHn4nhnYnHTLmWfdnAfv0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPHDYnjTkPHTd" target="_blank" rel="noopener noreferrer">访问权限<ExternalLinkIcon/></a>必须大于等于被覆盖方法的<a href="https://www.baidu.com/s?wd=%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90&amp;tn=44039180_cpr&amp;fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3PHn4nhnYnHTLmWfdnAfv0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPHDYnjTkPHTd" target="_blank" rel="noopener noreferrer">访问权限<ExternalLinkIcon/></a>。
6、被覆盖的方法不能是final类型的，因为final类型的方法就是声明不能被覆盖。但是覆盖的方法可以是final类型的，不会影响覆盖效果。
7、静态的方法不会发生覆盖。所以如果父类中的方法为静态的，而子类中的方法不是静态的，但是两个方法除了这一点外其他都满足覆盖条件，那么会发生编译错误。反之亦然。即使父类和子类中的方法都是静态的，并且满足覆盖条件，但是仍然不会发生覆盖，因为静态方法是在编译的时候把静态方法和类的引用类型进行匹配。</p>
<p>用例子说明，以 Laravel 框架中的控制器作为说明</p>
<p>①final修饰的类方法不可被子类重写</p>
<p>②PHP是否重写父类方法只会根据方法名是否一致判断（5.3以后重写父类方法参数个数必须一致）</p>
<p>③重写时访问级别只可以等于或者宽松于父类 不可提升访问级别</p>
<h4 id="_57-php文件末尾是否应该加-结束符号-为什么-重点" tabindex="-1"><a class="header-anchor" href="#_57-php文件末尾是否应该加-结束符号-为什么-重点" aria-hidden="true">#</a> 57.PHP文件末尾是否应该加 ?&gt; 结束符号，为什么？（重点）</h4>
<p>如果是PHP和HTML混编时，一定要有结束符号?&gt;，否则有可能导致语法错误。
如果是一个纯粹的PHP页面，最后的结束符?&gt;最好一定不要添加
这样做的好处是：如果这个是一个被别人包含的程序，没有这个结束符，可以减少很多很多问题，比如说：header,
setcookie, session_start这些动作之前不能有输出，如果不小心在?&gt;
后边加了不可见字符（多余的空格、换行符）等破坏页面显示，就会报”Header already
sent”错误，不写的话不会有此问题</p>
<p>主要防止 include，require 引用文件，把文件末尾可能的回车和空格等字符引用进来，还有一些函数必须在没有任何输出之前调用，就会造成不是期望的结果。PHP文件的编码不包含BOM的UTF8. 这也是PSR-2中的规范：纯PHP代码文件必须省略最后的 ?&gt; 结束标签。</p>
<h4 id="_59-memcache-和-redis-的读写性能-qps-如何-两者优缺点-redis-支持哪些数据类型-redis-如何持久化-重点" tabindex="-1"><a class="header-anchor" href="#_59-memcache-和-redis-的读写性能-qps-如何-两者优缺点-redis-支持哪些数据类型-redis-如何持久化-重点" aria-hidden="true">#</a> 59.Memcache 和 Redis 的读写性能（qps）如何？两者优缺点？Redis 支持哪些数据类型？Redis 如何持久化？（重点）</h4>
<p>读写性能：</p>
<p>memcache更加快速，在读取性能上比 Redis 快，缺点是仅支持字符串。</p>
<p>Redis支持丰富的数据结构类型，字符串，散列（哈希），集合，有序集合，还支持订阅发布，地理位置等等。</p>
<p>实际运用中可以redis，memcache结合，memcache可作为session存储的方式，session都是KV类型键值对。</p>
<p>Redis 提供了多种不同级别的持久化方式：</p>
<p>RDB 持久化可以在指定的时间间隔内生成数据集的时间点快照（point-in-time snapshot）。</p>
<p>AOF 持久化记录服务器执行的所有写操作命令，并在服务器启动时，通过重新执行这些命令来还原数据集。 AOF 文件中的命令全部以 Redis 协议的格式来保存，新命令会被追加到文件的末尾。 Redis 还可以在后台对 AOF 文件进行重写（rewrite），使得 AOF 文件的体积不会超出保存数据集状态所需的实际大小。</p>
<p>Redis 还可以同时使用 AOF 持久化和 RDB 持久化。 在这种情况下， 当 Redis 重启时， 它会优先使用 AOF 文件来还原数据集， 因为 AOF 文件保存的数据集通常比 RDB 文件所保存的数据集更完整。</p>
<p>你甚至可以关闭持久化功能，让数据只在服务器运行时存在。</p>
<h4 id="_60-使用-php-下载网络图片-有哪些方法-重点" tabindex="-1"><a class="header-anchor" href="#_60-使用-php-下载网络图片-有哪些方法-重点" aria-hidden="true">#</a> 60.使用 PHP 下载网络图片，有哪些方法？（重点）</h4>
<p>1.file_get_contents</p>
<p>2.readfile读取内容</p>
<p>3.fopen系列函数</p>
<p>4.curl</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. 使用file_get_contents
function dlfile($file_url, $save_to)
{
	$content = file_get_contents($file_url);
	file_put_contents($save_to, $content);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>2.使用CURL
function dlfile($file_url, $save_to)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 0); 
    curl_setopt($ch,CURLOPT_URL,$file_url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    $file_content = curl_exec($ch);
    curl_close($ch);
    $downloaded_file = fopen($save_to, 'w');
    fwrite($downloaded_file, $file_content);
    fclose($downloaded_file);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>3.使用fopen
function dlfile($file_url, $save_to)
{
    $in=   fopen($file_url, "rb");
    $out=  fopen($save_to, "wb");
    while ($chunk = fread($in,8192))
    {
    	fwrite($out, $chunk, 8192);
    }
    fclose($in);
    fclose($out);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_61-什么是-cgi-什么是-fastcgi-php-fpm-fastcgi-nginx-之间是什么关系-重点" tabindex="-1"><a class="header-anchor" href="#_61-什么是-cgi-什么是-fastcgi-php-fpm-fastcgi-nginx-之间是什么关系-重点" aria-hidden="true">#</a> 61.什么是 CGI？什么是 FastCGI？php-fpm，FastCGI，Nginx 之间是什么关系？（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_65、在php中-heredoc是一种特殊的字符串-它的结束标志必须-重点" tabindex="-1"><a class="header-anchor" href="#_65、在php中-heredoc是一种特殊的字符串-它的结束标志必须-重点" aria-hidden="true">#</a> 65、在PHP中，heredoc是一种特殊的字符串，它的结束标志必须?（重点）</h4>
<p>在大部分语言里，双引号是字符串，单引号是字符。但是在PHP里，字符串的表现形式有3种。即：</p>
<p>单引号</p>
<p>双引号</p>
<p>定界符（heredoc syntax）</p>
<p>看见了吧，单引号居然可以用来表示字符串。那么如果我想表示单引号怎么办？和大多数语言一样，使用转义符号吧。即反斜线&quot;&quot;.那么使用单引号和双引号有什么区别呢？我的观点是没有多大区别。唯一的区别就是双引号可以应用更多的转义符。</p>
<p>让我们定界符吧。它的语法是&quot;&lt;&lt;&lt;&quot;。用法是在其后提供一个标识符，然后在标识符后提供字符串，再在字符串后提供此标识符来结尾。例如：</p>
<?php 

$str = <<<EOD

Hello, this is an example for HEREDOC Syntax.

Please attention to it.

EOD;

echo $str; 

?>注意，这里的提供的标志符是EOD，中间的是字符串。
<p>&lt;&lt;&lt;EOD这个开头并没有分号</p>
<p>结束标志必须顶格写，并且要有分号结束</p>
<h4 id="_66-请说明php中传值与传引用的区别。什么时候传值-什么时候传引用-重点" tabindex="-1"><a class="header-anchor" href="#_66-请说明php中传值与传引用的区别。什么时候传值-什么时候传引用-重点" aria-hidden="true">#</a> 66.请说明php中传值与传引用的区别。什么时候传值，什么时候传引用？（重点）</h4>
<p>按值传递：函数范围内对值的任何改变在函数外部都会被忽略</p>
<p>按引用传递：函数范围内对值的任何改变在函数外部也能反映出这些修改 PHPma</p>
<p>优缺点：按值传递时，php必须复制值。特别是对于大型的字符串和对象来说，这将会是一个代价很大的操作。</p>
<p>按引用传递则不需要复制值，对于性能提高很有好处。</p>
<h4 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> </h4>
<h4 id="_69-mysql-fetch-row-和mysql-fetch-array之间有什么区别-重点" tabindex="-1"><a class="header-anchor" href="#_69-mysql-fetch-row-和mysql-fetch-array之间有什么区别-重点" aria-hidden="true">#</a> 69.mysql_fetch_row() 和mysql_fetch_array之间有什么区别？（重点）</h4>
<p>mysql_fetch_row -- 从结果集中取得一行作为枚举数组</p>
<p>mysql_fetch_array -- 从结果集中取得一行作为关联数组，或数字数组，或二者兼有</p>
<h4 id="_70-php使用pdo连接oracle数据库-重点" tabindex="-1"><a class="header-anchor" href="#_70-php使用pdo连接oracle数据库-重点" aria-hidden="true">#</a> 70.php使用Pdo连接oracle数据库？（重点）</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215114242096.png" alt="image-20211215114242096"></p>
<h4 id="_73-请举例说明在你的开发过程中用什么方法来加快页面的加载速度-重点" tabindex="-1"><a class="header-anchor" href="#_73-请举例说明在你的开发过程中用什么方法来加快页面的加载速度-重点" aria-hidden="true">#</a> 73.请举例说明在你的开发过程中用什么方法来加快页面的加载速度（重点）</h4>
<p>答：要用到服务器资源时才打开，及时关闭服务器资源，数据库添加索引，页面可生成静态，图片等大文件单独服务器。使用代码优化工具啦</p>
<h4 id="_74-写出一个正则表达式-过虑网页上的所有js-vbs脚本-即把script标记及其内容都去掉-重点" tabindex="-1"><a class="header-anchor" href="#_74-写出一个正则表达式-过虑网页上的所有js-vbs脚本-即把script标记及其内容都去掉-重点" aria-hidden="true">#</a> 74.写出一个正则表达式，过虑网页上的所有JS/VBS脚本（即把script标记及其内容都去掉）（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
    $script="以下内容不显示：&lt;script language='javascript'>alert('cc');&lt;/script>";
    echo preg_replace("/&lt;script[^>].*?>.*?&lt;/script>/si", "替换内容", $script);
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_75-sort-、asort-、和-ksort-有什么分别-它们分别在什么情况下使用-重点" tabindex="-1"><a class="header-anchor" href="#_75-sort-、asort-、和-ksort-有什么分别-它们分别在什么情况下使用-重点" aria-hidden="true">#</a> 75.sort()、asort()、和 ksort() 有什么分别？它们分别在什么情况下使用？（重点）</h4>
<p>sort()
根据阵列中元素的值，以英文字母顺序排序，索引键会由 0 到 n-1 重新编号。主要是当阵列索引键的值无关疼痒时用来把阵列排序。
asort()
与 sort() 一样把阵列的元素按英文字母顺序来排列，不同的是所有索引键都获得保留，特别适合替联想阵列排序。
ksort()
根据阵列中索引键的值，以英文字母顺序排序，特别适合用于希望把索引键排序的联想阵列。</p>
<p>数组函数 arsort 的作用是__对数组进行逆向排序并保持索引关系__</p>
<h4 id="_76-有一表-menu-mainmenu-submenu-url-请用递归法写出一树形菜单-将所有的menu列出来-重点" tabindex="-1"><a class="header-anchor" href="#_76-有一表-menu-mainmenu-submenu-url-请用递归法写出一树形菜单-将所有的menu列出来-重点" aria-hidden="true">#</a> 76.有一表 menu(mainmenu,submenu,url),请用递归法写出一树形菜单，将所有的menu列出来（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;html>
&lt;head>&lt;title>这里是标题&lt;/title>&lt;/head>
&lt;body>
&lt;form>
&lt;?php
function GenerateMenu($id=0,$str="")
{
     $result=mysql_query("select mainmenu,url,submenu from menu where mainmenu=$id");
     while($row=mysql_fetch_array($result))
     {
         echo $str.$row["url"]."&lt;br />";
         GenerateMenu($row["submenu"],$str."--");
     }
     mysql_free_result($result);
}
$link=mysql_connect("localhost","root","");
mysql_select_db("phpinterview");
GenerateMenu();
mysql_close($link)
?> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_78-写一个函数-尽可能高效的-从一个标准-url-里取出文件的扩展名-重点" tabindex="-1"><a class="header-anchor" href="#_78-写一个函数-尽可能高效的-从一个标准-url-里取出文件的扩展名-重点" aria-hidden="true">#</a> 78.写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_129-使用五种以上的方式获取一个文件的扩展名" tabindex="-1"><a class="header-anchor" href="#_129-使用五种以上的方式获取一个文件的扩展名" aria-hidden="true">#</a> 129.使用五种以上的方式获取一个文件的扩展名</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> </h4>
<h4 id="_79-写一个函数-算出两个文件的相对路径-重点" tabindex="-1"><a class="header-anchor" href="#_79-写一个函数-算出两个文件的相对路径-重点" aria-hidden="true">#</a> 79.写一个函数，算出两个文件的相对路径（重点）</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_82-以apache模块的方式安装php-在文件http-conf中首先要用语句动态装载php模块-然后再用语句使得apache把所有扩展名为php的文件都作为php脚本处理。" tabindex="-1"><a class="header-anchor" href="#_82-以apache模块的方式安装php-在文件http-conf中首先要用语句动态装载php模块-然后再用语句使得apache把所有扩展名为php的文件都作为php脚本处理。" aria-hidden="true">#</a> 82.以Apache模块的方式安装PHP，在文件http.conf中首先要用语句动态装载PHP模块，然后再用语句使得Apache把所有扩展名为php的文件都作为PHP脚本处理。</h4>
<p>LoadModule php5_module &quot;c:/php/php5apache2.dll&quot; ,</p>
<p>AddType application/x-httpd-php .php,</p>
<h4 id="_83-一个函数的参数不能是对变量的引用-除非在php-ini中把-allow-call-time-pass-reference-boolean-设为on" tabindex="-1"><a class="header-anchor" href="#_83-一个函数的参数不能是对变量的引用-除非在php-ini中把-allow-call-time-pass-reference-boolean-设为on" aria-hidden="true">#</a> 83.一个函数的参数不能是对变量的引用，除非在php.ini中把__allow_call_time_pass_reference boolean__设为on.</h4>
<h4 id="_84-简述论坛中无限分类的实现原理。-重点" tabindex="-1"><a class="header-anchor" href="#_84-简述论坛中无限分类的实现原理。-重点" aria-hidden="true">#</a> 84.简述论坛中无限分类的实现原理。（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
答:
&lt;?php
/*
数据表结构如下:
CREATE TABLE `category` (
 `categoryID` smallint(5) unsigned NOT NULL auto_increment,
 `categoryParentID` smallint(5) unsigned NOT NULL default '0',
 `categoryName` varchar(50) NOT NULL default '',
 PRIMARY KEY (`categoryID`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;
INSERT INTO `category` ( `categoryParentID`, `categoryName`) VALUES 
(0, '一级类别'),
(1, '二级类别'),
(1, '二级类别'),
(1, '二级类别'),
(2, '三级类别'),
(2, '333332'),
(2, '234234'),
(3, 'aqqqqqd'),
(4, '哈哈'),
(5, '66333666');
*/
//指定分类id变量$category_id,然后返回该分类的所有子类
//$default_category为默认的选中的分类
function Get_Category($category_id = 0,$level = 0, $default_category = 0)
{
     global $DB;
     $sql = "SELECT * FROM category ORDER BY categoryID DESC";
     $result = $DB->query( $sql );
     while ($rows = $DB->fetch_array($result)) 
     {
         $category_array[$rows[categoryParentID]][$rows[categoryID]] = array('id' => $rows[categoryID], 'parent' => $rows[categoryParentID], 'name' => $rows
        [categoryName]);
     }
 if (!isset($category_array[$category_id]))
 {
 	return "";
 }
 foreach($category_array[$category_id] AS $key => $category)
 { 
     if ($category['id'] == $default_category){
     	echo "&lt;option selected value=".$category['id']."";
     }else{
     	echo "&lt;option value=".$category['id']."";
     }
     if ($level > 0){
     	echo ">" . str_repeat( " ", $level ) . " " . $category['name'] . "&lt;/option>/n";
     }else{
     	echo ">" . $category['name'] . "&lt;/option>/n";
     }
 	 Get_Category($key, $level + 1, $default_category);
 }
 unset($category_array[$category_id]);
}
/*
函数返回的数组格式如下所示:
Array 
(
 [1] => Array ( [id] => 1 [name] => 一级类别 [level] => 0 [ParentID] => 0 )
 [4] => Array ( [id] => 4 [name] => 二级类别 [level] => 1 [ParentID] => 1 )
 [9] => Array ( [id] => 9 [name] => 哈哈 [level] => 2 [ParentID] => 4 )
 [3] => Array ( [id] => 3 [name] => 二级类别 [level] => 1 [ParentID] => 1 ) 
 [8] => Array ( [id] => 8 [name] => aqqqqqd [level] => 2 [ParentID] => 3 )
 [2] => Array ( [id] => 2 [name] => 二级类别 [level] => 1 [ParentID] => 1 )
 [7] => Array ( [id] => 7 [name] => 234234 [level] => 2 [ParentID] => 2 )
 [6] => Array ( [id] => 6 [name] => 333332 [level] => 2 [ParentID] => 2 ) 
 [5] => Array ( [id] => 5 [name] => 三级类别 [level] => 2 [ParentID] => 2 ) 
 [10] => Array ( [id] => 10 [name] => 66333666 [level] => 3 [ParentID] => 5 ) 
)
*/
//指定分类id,然后返回数组
function Category_array($category_id = 0,$level=0)
{
     global $DB;
     $sql = "SELECT * FROM category ORDER BY categoryID DESC";
     $result = $DB->query($sql);
     while ($rows = $DB->fetch_array($result)){
     	$category_array[$rows['categoryParentID']][$rows['categoryID']] = $rows;
     }
     foreach ($category_array AS $key=>$val){
     	if ($key == $category_id){
     		foreach ($val AS $k=> $v){
     			$options[$k] = array(
     	'id' => $v['categoryID'], 'name' => $v['categoryName'], 'level' => $level, 'ParentID'=>$v['categoryParentID']
     			);
     			$children = Category_array($k, $level+1);
     			if (count($children) > 0){
     				$options = $options + $children;
     			}
     		}
     	}
     }
     unset($category_array[$category_id]);
     return $options;
}
?>
 
&lt;?php
class cate
{
        function Get_Category($category_id = 0,$level = 0, $default_category = 0)
        {
             echo $category_id;
             $arr = array(
              '0' => array(
                            '1' => array('id' => 1, 'parent' => 0, 'name' => '1111'),
                            '2' => array('id' => 2, 'parent' => 0, 'name' => '2222'),
                            '4' => array('id' => 4, 'parent' => 0, 'name' => '4444')    
                          ),
              '1' => array(
                            '3' => array('id' => 3, 'parent' => 1, 'name' => '333333'),
                            '5' => array('id' => 5, 'parent' => 1, 'name' => '555555')     
                          ),
                          
              '3' => array(
                            '6' => array('id' => 6, 'parent' => 3, 'name' => '66666'),
                            '7' => array('id' => 7, 'parent' => 3, 'name' => '77777')
                          ),
              '4' => array(
                            '8' => array('id' => 8, 'parent' => 4, 'name' => '8888'),
                            '9' => array('id' => 9, 'parent' => 4, 'name' => '9999')
                          )    
             );
             if (!isset($arr[$category_id]))
             {
                	return "";
             }
    
             foreach($arr[$category_id] AS $key => $cate)
             {
                 if ($cate['id'] == $default_category)
                 {
                     $txt = "&lt;option selected value=".$cate['id']."";
                 }else{
                     $txt = "&lt;option value=".$cate['id']."";
                 }
            
                 if ($level > 0)
                 {
                    $txt1 = ">" . str_repeat( "-", $level ) . " " . $cate['name'] . "&lt;/option>/n";
                 }else{
                     $txt1 = ">" . $cate['name'] . "&lt;/option>/n";
                 }
                 $val = $txt.$txt1;
                 echo $val;
                 self::Get_Category($key, $level + 1, $default_category);
             }
            
        }
        function getFlush($category_id = 0,$level = 0, $default_category = 0)
        {
            ob_start();
            self::Get_Category($category_id ,$level, $default_category);
            $out = ob_get_contents();
            ob_end_clean();
            return $out;
        }    
}
$id =$_GET['id'];
echo "&lt;select>";
$c = new cate();
//$c->Get_Category();
$ttt=  $c->getFlush($id,'0','3');
echo $ttt;
echo "&lt;/select>";
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_85-执行程序段echo-8-2-将输出-。" tabindex="-1"><a class="header-anchor" href="#_85-执行程序段echo-8-2-将输出-。" aria-hidden="true">#</a> 85.执行程序段echo 8%(-2)将输出__。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo 8%(-2); //0
echo -8%(2); //0
echo -8%(3); //-2
echo (-8)%(3); //-2
echo 8%(-3); //2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_86-在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-重点" tabindex="-1"><a class="header-anchor" href="#_86-在php中-当前脚本的名称-不包括路径和查询字符串-记录在预定义变量-重点" aria-hidden="true">#</a> 86.在PHP中，当前脚本的名称（不包括路径和查询字符串）记录在预定义变量（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>（1）中；而链接到当前页面的的前一页面URL记录在预定义变量
（2）中 
&lt;?php
    //本页地址，SCRIPT_NAME也可以:php/test.php
    echo $_SERVER['PHP_SELF']."&lt;br />";
    //链接到当前页面的前一页面的 URL 地址:
    echo $_SERVER['HTTP_REFERER']."&lt;br />";
    //其它的见参考手册：语言参考》变量》预定义变量
    //前执行脚本的绝对路径名:D:Inetpubwwwrootphp est.php 
    echo $_SERVER["SCRIPT_FILENAME"]."&lt;br />";
    //正在浏览当前页面用户的 IP 地址:127.0.0.1
    echo $_SERVER["REMOTE_ADDR"]."&lt;br />";
    //查询（query）的字符串（URL 中第一个问号 ? 之后的内容）:id=1&amp;bi=2
    echo $_SERVER["QUERY_STRING"]."&lt;br />";
    //当前运行脚本所在的文档根目录:d:inetpubwwwroot
    echo $_SERVER["DOCUMENT_ROOT"]."&lt;br />";
    
    echo $_SERVER ['PHP_SELF']; ///test/obj.php
    echo $_SERVER ['SERVER_ADDR']; //127.0.0.1
    echo $_SERVER ['REMOTE_ADDR']; //127.0.0.1
    echo $_SERVER ['SCRIPT_FILENAME'] //当前执行脚本路径
    echo $_SERVER ['QUERY_STRING'] //当前执行脚本参数
    // print_r($_SERVER);
    $_SERVER['PHP_SELF']//当前脚本的名称(不包括路径和查询字符串)记录在预定义变量中;
    $_SERVER['HTTP_REFERER']//链接到当前页面的URL记录在预定义变量
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_90-不使用cookie向客户端发送一个cookie-重点" tabindex="-1"><a class="header-anchor" href="#_90-不使用cookie向客户端发送一个cookie-重点" aria-hidden="true">#</a> 90.不使用cookie向客户端发送一个cookie.（重点）</h4>
<p>理解：session_start（）开启时，生成一个常量 SID，当COOKIE开启时，这个常量为空，当COOKIE关闭时，这个常量中存储了PHPSESSID的值。通过在URL后加一个SID参数来传递SESSIONID的值，从而使客户端页面可以使用SESSION里面的值。</p>
<p>当客户端开启COOKIE和服务器端开启SESSION时。</p>
<p>浏览器第一次请求，服务器会向浏览器端发送一个COOKIE里面存储SESSIONID.</p>
<p>当浏览器第二次请求时，会把已存在的COOKIE一起提交到服务器端。</p>
<h4 id="_93-防止sql注射漏洞一般用-addslashes-函数。-重点" tabindex="-1"><a class="header-anchor" href="#_93-防止sql注射漏洞一般用-addslashes-函数。-重点" aria-hidden="true">#</a> 93.防止SQL注射漏洞一般用__addslashes___函数。（重点）</h4>
<h4 id="_95-web应用中-数据库的读取频率远高于写入频率-如何优化mysql而应对此种情景" tabindex="-1"><a class="header-anchor" href="#_95-web应用中-数据库的读取频率远高于写入频率-如何优化mysql而应对此种情景" aria-hidden="true">#</a> 95.web应用中,数据库的读取频率远高于写入频率, 如何优化MySQL而应对此种情景 ?</h4>
<p>1、选择最合适的字段属性</p>
<p>2、使用连接join来替代子查询</p>
<p>3、使用联合union类替代手动创建的临时表</p>
<p>4、事务</p>
<p>5、锁定表</p>
<p>6、使用外键</p>
<p>7、使用索引</p>
<p>8优化的查询语句。</p>
<h4 id="_96-分别列出如下类型的有符号和无符号范围-tinyint-smallint-mediumint-int-。-重点" tabindex="-1"><a class="header-anchor" href="#_96-分别列出如下类型的有符号和无符号范围-tinyint-smallint-mediumint-int-。-重点" aria-hidden="true">#</a> 96.分别列出如下类型的有符号和无符号范围 TINYINT SMALLINT MEDIUMINT INT 。（重点）</h4>
<p>​		TINYINT：-2^7 - 2^7-10    ~     2^8-1
​		SMALLINT：-2^15 - 2^15-1       0 ~ 2^16-1
​		MEDIUMINT：-2^23 - 2^23-1       0 ~ 2^24-1
​		INT：   -2^31 - 2^31-1       0 ~ 2^32-1</p>
<h4 id="_97-下列http状态码出现的可能原因-如何处理-200-301-404-502-503" tabindex="-1"><a class="header-anchor" href="#_97-下列http状态码出现的可能原因-如何处理-200-301-404-502-503" aria-hidden="true">#</a> 97.下列HTTP状态码出现的可能原因, 如何处理 200, 301, 404, 502, 503</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>200 
　　请求已成功，请求所希望的响应头或数据体将随此响应返回。 
301 
　　被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。 　　新的永久性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。 　　如果这不是一个 GET 或者 HEAD 请求，因此浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。 　　注意：对于某些使用 HTTP/1.0 协议的浏览器，当它们发送的 POST 请求得到了一个301响应的话，接下来的重定向请求将会变成 GET 方式。 

404 
　　请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。 
502 
　　作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。 
503 
　　由于临时的服务器维护或者过载，服务器当前无法处理请求。这个状况是临时的，并且将在一段时间以后恢复。如果能够预计延迟时间，那么响应中可以包含一个 Retry-After 头用以标明这个延迟时间。如果没有给出这个 Retry-After 信息，那么客户端应当以处理500响应的方式处理它。 　　注意：503状态码的存在并不意味着服务器在过载的时候必须使用它。某些服务器只不过是希望拒绝客户端的连接。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>200 OK 一切正常，对GET和POST请求的应答文档跟在后面。 
301 Moved Permanently 客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL 
404 Not Found 无法找到指定位置的资源。这也是一个常用的应答。 
502 Bad Gateway 服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。 
503 Service Unavailable 服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个Retry-After头。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_98-用autoload-class-实现lib目录下的类的自动加载并可以兼容子目录-重点" tabindex="-1"><a class="header-anchor" href="#_98-用autoload-class-实现lib目录下的类的自动加载并可以兼容子目录-重点" aria-hidden="true">#</a> 98.用autoload($class) 实现Lib目录下的类的自动加载并可以兼容子目录 （重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
$request->action = lcfirst(implode(array_map( 
    'ucfirst', 
    explode('-', strtolower($request->action)) 
))); 

function __autoload($class) { 
    $cls = strtolower(str_replace("_","/",$class)); 
    if(file_exsits(LIB.$cls.'.php')){ 
    	include_once(LIB.$cls.'.php'); 
    }else{ 
    	die("not found {$class} class"); 
    } 
} 
defined("LIB",'/data/wwwroot/www.xx.com/lib/'); 
$author = new Lib_Author(); 

function __authload($class){ 
	$cls = explode("_",$class); 
    if(@is_dir($cls[1])){ 
    	if(@is_file($cls[2])){ 
    		include_once("CON_PATH".$cls[1].'/'.$cls[2].".php"); 
    	}else{ 
    		dir('error'); 
    	} 
	}else if(@is_file($cls[1].".php")){ 
		include_once("CON_PATH".$cls[1].".php"); 
	}else{ 
		dir('error'); 
	} 
} 

function __autoload($class){ 
    $cls = explode("_",$class); 
    $file = get_file($cls); 
    if($file=='error'){ 
    	die('error'); 
    } 
    include_once($file); 
} 
function get_file($dir){ 
    if(is_array($dir)){ 
        foreach($dir as $k=>$v){ 
            $tmpdir .= $v.'/'; 
            if(is_dir('CON_PATH'.$tmpdir)){ 
                continue(); 
            }else if(is_file('CON_PATH'.$tmpdir.".php")){ 
        		return 'CON_PATH'.$tmpdir.".php"; 
    		}else{ 
            	return 'error'; 
            } 
		} 
		return 'error'; 
	} 
	return 'error'; 
} 
defined("CON_PATH","/data/wwwroot/www.xx.com/app/cntroller/"); 
$sb = new controller_sb(); 
function __autoload_my_classes($classname){ 
	# ... your logic to include classes here 
} 
spl_autoload_register('__autoload_my_classes'); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_99-用set-error-handle-去捕获错误并输出-级别自己定-重点" tabindex="-1"><a class="header-anchor" href="#_99-用set-error-handle-去捕获错误并输出-级别自己定-重点" aria-hidden="true">#</a> 99.用set_error_handle 去捕获错误并输出, 级别自己定  （重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>set_error_handle(callback,level) 
function callback(int $errno , string $errstr [, string $errfile [, int $errline [, array $errcontext ]]] ){ 

} 

function dealErrorHandler($errno,$errstr,$errfile,$errline){ 
    switch($errno){ 
    	case E_USER_ERROR: 
            echo "error [$errno] $errstr fatal error on line $errline in file $errfile"; 
            break; 
    	case E_USER_WARNING: 
            echo "my warning [$errno] $errstr": 
            break; 
        case E_USER_NOTICE: 
            echo "my notice[$errno] $errstr"; 
            break; 
        default: 
            echo "unkonwn error type :[$errno] $errstr"; 
            break; 
	} 
} 
set_erro_handler(dealErrorHandler); 
trigger_error("notice", E_USER_NOTICE); 
trigger_error("warning", E_USER_WARNING); 
trigger_error("error", E_USER_ERROR);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_100-简述两种屏蔽php程序的notice警告的方法-重点" tabindex="-1"><a class="header-anchor" href="#_100-简述两种屏蔽php程序的notice警告的方法-重点" aria-hidden="true">#</a> 100.简述两种屏蔽php程序的notice警告的方法 （重点）</h4>
<p>初始化变量，文件开始设置错误级别或者修改php.ini 设置error_reporting set_error_handler 和 @抑制错误
1.在程序中添加：error_reporting (E_ALL &amp; ~E_NOTICE);
2.或者修改php.ini中的：error_reporting = E_ALL 	改为：error_reporting = E_ALL &amp; ~E_NOTICE
3.error_reporting(0);或者修改php.inidisplay_errors=Off</p>
<h4 id="_102-下面php程序输出的内容是什么-为什么" tabindex="-1"><a class="header-anchor" href="#_102-下面php程序输出的内容是什么-为什么" aria-hidden="true">#</a> 102.下面php程序输出的内容是什么? 为什么?</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php 
    $str = "aa\tbb\tcc"; 
    @list($a, $b, $c) = explode('\t', $str); 
    echo $a,$b,$c; 
?> 
aabbcc;//'\t'不会以\t切割字符串,explode之后申城一个array(0=>"aa\tbb\tcc")所以。。。,'\t'换成"\t"就被切割 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_103-现有一个函数-有不确定多少个的参数-可能有5个也可能有50个-如何去定义这个函数-重点" tabindex="-1"><a class="header-anchor" href="#_103-现有一个函数-有不确定多少个的参数-可能有5个也可能有50个-如何去定义这个函数-重点" aria-hidden="true">#</a> 103.现有一个函数, 有不确定多少个的参数(可能有5个也可能有50个), 如何去定义这个函数  （重点）</h4>
<p>方法一: 不借助php内置函数
方法二: 提示func_num_args() func_get_arg() unc_get_args()</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function param() 
{ 
	$numargs = func_num_args(); 
	echo "Number of arguments: $numargs&lt;br />\n"; 
	if ($numargs >= 2) { 
		echo "Second argument is: " . func_get_arg(1) . "&lt;br />\n"; 
	} 
	$arg_list = func_get_args(); 
	for ($i = 0; $i &lt; $numargs; $i++) { 
		echo "Argument $i is: " . $arg_list[$i] . "&lt;br />\n"; 
	} 
} 

param(1,2,3,4,5); 
// Number of arguments: 5
// Second argument is: 2
// Argument 0 is: 1
// Argument 1 is: 2
// Argument 2 is: 3
// Argument 3 is: 4
// Argument 4 is: 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/** 
* 例子写完后，本来认为完事了，结果遇到有人问call_user_func_array(),看了一下手册 
* 原来，我上面的那个test函数还可以精简成如下的例子， 
*/ 
function otest1 ($a) { 
	echo( '一个参数' ); 
}  
function otest2 ( $a,$b) { 
 	echo( '二个参数' ); 
} 

function otest3 ( $a,$b,$c){ 
	echo( '三个啦' ); 
} 

function otest (){ 
	$args=func_get_args(); 
	$num=func_num_args(); 
	call_user_func_array( 'otest'.$num,$args ); 
} 

otest(1,2); //二个参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_104-应用中我们经常会遇到在user表随机调取10条数据来展示的情况-简述你如何实现该功能-不能使用sql函数以及order-by等语句-重点" tabindex="-1"><a class="header-anchor" href="#_104-应用中我们经常会遇到在user表随机调取10条数据来展示的情况-简述你如何实现该功能-不能使用sql函数以及order-by等语句-重点" aria-hidden="true">#</a> 104.应用中我们经常会遇到在user表随机调取10条数据来展示的情况, 简述你如何实现该功能, 不能使用sql函数以及order by等语句 （重点）</h4>
<p>表 user 字段uid, username</p>
<p>估计一个user表中的区间,在此区间用php去一个随机数</p>
<p>sql语句大于或者小于此id取limit几十条(保证10条数据)</p>
<p>再不够散乱的话,取出来的数据shuffle函数打乱数组,</p>
<p>array_rand随即取出10个</p>
<h4 id="_105-假设下面的sql语句里面的uid都能获取到具体值-经过下面语句查询后uid的顺序是什么-如何去按照uid-in-输入的顺序去排序-重点" tabindex="-1"><a class="header-anchor" href="#_105-假设下面的sql语句里面的uid都能获取到具体值-经过下面语句查询后uid的顺序是什么-如何去按照uid-in-输入的顺序去排序-重点" aria-hidden="true">#</a> 105.假设下面的sql语句里面的uid都能获取到具体值, 经过下面语句查询后uid的顺序是什么, 如何去按照uid in 输入的顺序去排序 （重点）</h4>
<p>select uid from user where uid in(10, 1, 3, 8, 11, 4, 7);</p>
<p>可观的结果是1,3,4,7,8,10,11升序,有种情况特殊就是不确定因为中间的某些id人为直接修改可能不是升序了，如果按照uid in的顺序需要重新循环一次根据id获取查询结果数组中的值放进新数组中即可 。</p>
<p>也可以使用</p>
<p>select * from district_location   where id in (110109,110107,110106,110102)   order by field(id,110109,110107,110106,110102)</p>
<p>有文章指出：</p>
<p>FIELD(str,str1,str2,str3,…)</p>
<p>Returns the index (position) of str in the str1, str2, str3, … list. Returns 0 if str is not found.</p>
<p>排序过程：把选出的记录的 id 在 FIELD 列表中进行查找，并返回位置，以位置作为排序依据。</p>
<p>这样的用法，会导致 Using filesort，是效率很低的排序方式。除非数据变化频率很低，或者有长时间的缓存，否则不建议用这样的方式排序。</p>
<p>使用explain测试会导致using filesort。</p>
<p>建议在程序代码中自行排序。</p>
<p>mysql in 排序 也可以按in里面的顺序来排序</p>
<h4 id="_106-用php将一个字符串中的字母替换成" tabindex="-1"><a class="header-anchor" href="#_106-用php将一个字符串中的字母替换成" aria-hidden="true">#</a> 106.用PHP将一个字符串中的字母替换成**</h4>
<p>​		preg_replace('/[a-zA-Z]*/','<strong>',$str);
​		如果指定的字符就可以str_replace('ooxx','</strong>',$str);</p>
<h4 id="_107-mysql-在sql语句中有-等词的时候-要对sql语句的每个具体值做些什么处理" tabindex="-1"><a class="header-anchor" href="#_107-mysql-在sql语句中有-等词的时候-要对sql语句的每个具体值做些什么处理" aria-hidden="true">#</a> 107.mysql 在sql语句中有' / 等词的时候, 要对sql语句的每个具体值做些什么处理</h4>
<p>​			mysql_real_escape_string</p>
<h4 id="_108-简述call-user-func的功能-重点" tabindex="-1"><a class="header-anchor" href="#_108-简述call-user-func的功能-重点" aria-hidden="true">#</a> 108.简述call_user_func的功能 （重点）</h4>
<p>​			调用函数或者类里面的函数，返回第一个参数的值。类似的功能call_user_func_array</p>
<h4 id="_109-linux下某文件的属性为-drwxr-xr-x-用数字表示其权限是" tabindex="-1"><a class="header-anchor" href="#_109-linux下某文件的属性为-drwxr-xr-x-用数字表示其权限是" aria-hidden="true">#</a> 109.linux下某文件的属性为 drwxr-xr-x 用数字表示其权限是</h4>
<p>​		目录权限为755所有者u拥有读写修改权限所属组g拥有读、修改权限所属组之外o的拥有读和修改权限</p>
<h4 id="_110-宽带的1mbps理论上的下载速度是多少kbps-计算的方法" tabindex="-1"><a class="header-anchor" href="#_110-宽带的1mbps理论上的下载速度是多少kbps-计算的方法" aria-hidden="true">#</a> 110.宽带的1Mbps理论上的下载速度是多少KBps, 计算的方法</h4>
<p>​		1*1024/8  = 125kBps
​		1M=1024KB
​		1KB=1024B
​		1B=8bit</p>
<h4 id="_112-例举几个常用的魔术方法-并说明作用-如何在打印一个对象的时候展示我们自定义的内容" tabindex="-1"><a class="header-anchor" href="#_112-例举几个常用的魔术方法-并说明作用-如何在打印一个对象的时候展示我们自定义的内容" aria-hidden="true">#</a> 112.例举几个常用的魔术方法, 并说明作用? 如何在打印一个对象的时候展示我们自定义的内容?</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>魔术函数 

1。__construct() 
实例化对象时被调用， 
当__construct和以类名为函数名的函数同时存在时，__construct将被调用，另一个不被调用。 

2。__destruct() 
当删除一个对象或对象操作终止时被调用。 

3。__call() 
对象调用某个方法， 
若方法存在，则直接调用； 
若不存在，则会去调用__call函数。 

4。__get() 
读取一个对象的属性时， 
若属性存在，则直接返回属性值； 
若不存在，则会调用__get函数。 

5。__set() 
设置一个对象的属性时， 
若属性存在，则直接赋值； 
若不存在，则会调用__set函数。 

6。__toString() 
打印一个对象的时被调用。如echo $obj;或print $obj; 

7。__clone() 
克隆对象时被调用。如：$t=new Test();$t1=clone $t; 

8。__sleep() 
serialize之前被调用。若对象比较大，想删减一点东东再序列化，可考虑一下此函数。 

9。__wakeup() 
unserialize时被调用，做些对象的初始化工作。 

10。__isset() 
检测一个对象的属性是否存在时被调用。如：isset($c->name)。 

11。__unset() 
unset一个对象的属性时被调用。如：unset($c->name)。 

12。__set_state() 
调用var_export时，被调用。用__set_state的返回值做为var_export的返回值。 

13。__autoload() 
实例化一个对象时，如果对应的类不存在，则该方法被调用。 

魔术常量 

1。__LINE__ 
返回文件中的当前行号。 

2。__FILE__ 
返回文件的完整路径和文件名。如果用在包含文件中，则返回包含文件名。自 PHP 4.0.2 起，__FILE__ 总是包含一个绝对路径，而在此之前的版本有时会包含一个相对路径。 

3。__FUNCTION__ 
返回函数名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该函数被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。 

4。__CLASS__ 
返回类的名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该类被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。 

5。__METHOD__ 
返回类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_113-现在有一个mysql-主库-丛库-请问php-mysql查询的时候怎么在php程序中实现主从分离-主从分离有什么好处" tabindex="-1"><a class="header-anchor" href="#_113-现在有一个mysql-主库-丛库-请问php-mysql查询的时候怎么在php程序中实现主从分离-主从分离有什么好处" aria-hidden="true">#</a> 113.现在有一个mysql 主库/丛库, 请问php mysql查询的时候怎么在php程序中实现主从分离? 主从分离有什么好处？</h4>
<p>配置主从数组文件,自己封转几个model函数,</p>
<p>查询的加载slave配置实例化,</p>
<p>破坏数据的操作加载master进行实例化</p>
<p>优点:并发负载能力提高,利于数据维护和安全,提高可用性</p>
<p>缺点:数据同步有些延迟</p>
<h4 id="_114-简述ucenter的单点登录机制" tabindex="-1"><a class="header-anchor" href="#_114-简述ucenter的单点登录机制" aria-hidden="true">#</a> 114.简述UCenter的单点登录机制</h4>
<p>所谓单点登录，无非就是几个站点共用一个用户中心，实现同步登陆，同步退出。</p>
<p>其实最终还是用户去登录，只是采用了ajax （javascript利用src异步跨域调用）用户不会发现。</p>
<p>而且利用了p3p头实现了，不同域名，单点登录(ucenter用的cookie)</p>
<p>缺点就是采用ajax 客服端请求 ，如果有10个以上应用，登录速度就慢下来了。</p>
<h4 id="_115-linux相关-有一个包-http-www-120-net-test-1-0-0-tar-gz" tabindex="-1"><a class="header-anchor" href="#_115-linux相关-有一个包-http-www-120-net-test-1-0-0-tar-gz" aria-hidden="true">#</a> 115.linux相关 有一个包 http://www.120.net/test-1.0.0.tar.gz</h4>
<p>a. 将它下载到/usr/local/src
b. 将其源码编译安装到/usr/local/test 目录
c. 他依赖mysql包, 位于/usr/local/mysql 目录
写出下载编译安装过程</p>
<p>wget - c http://www.120.net/test-1.0.0.tar.gz/usr/local/srctar</p>
<p>tar  -zxvf 	/usr/local/src/test-1.0.0.tar.gz</p>
<p>cd	 /usr/local/src/test-1.0.0</p>
<p>./configure 	--prefix=/usr/local/test 	--exec--prefix=/usr/local/mysql</p>
<p>make</p>
<p>make install</p>
<h4 id="_116-使用php-的memcache扩展编写一个获取数据的函数-缓存即将过期超时加锁" tabindex="-1"><a class="header-anchor" href="#_116-使用php-的memcache扩展编写一个获取数据的函数-缓存即将过期超时加锁" aria-hidden="true">#</a> 116.使用php 的memcache扩展编写一个获取数据的函数(缓存即将过期超时加锁)</h4>
<p>a. 数据超时之后去mysql获取, 获取完后更新memcache
b. 去mysql获取数据的时候加锁, 让一个进程去mysql拉数据, 其他人返回memcache中的数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public function get_cache($key) { 
    if($this->memcahe) { 
        $var = $this->memcahe->get($this->pre.$key); 
        $valid = $this->memcahe->get($this->pre.$key.'_valid'); 
        if($var &amp;&amp; !$valid) { 
            $lock = $this->memcahe->get($this->pre.$key.'_lock'); 
            if(!$lock) { 
                $this->memcahe->set($this->pre.$key.'_lock', true, 0, 60); 
                return false; 
            } 
        } 
        return $var; 
    } 
	return false; 
} 
public function set_cache($key, $var = null, $expire = 0) { 
    if($this->memcahe) { 
        $expire = (int)$expire; 
        $expire = ($expire ? $expire : $this->expire); 
        $this->memcahe->set($this->pre.$key, $var, 0, $expire+300); 
        $this->memcahe->set($this->pre.$key.'_lock', false, 0, $expire); 
        $this->memcahe->set($this->pre.$key.'_valid', true, 0, $expire); 
        return true; 
    } 
	return false; 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_117-arrayaccess-定义如下-用它实现一个数组-重点" tabindex="-1"><a class="header-anchor" href="#_117-arrayaccess-定义如下-用它实现一个数组-重点" aria-hidden="true">#</a> 117.arrayaccess 定义如下 用它实现一个数组 （重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ArrayAccess { 
    /* Methods */ 
    abstract public boolean offsetExists ( string $offset ) 
    abstract public mixed offsetGet ( string $offset ) 
    abstract public void offsetSet ( string $offset , string $value ) 
    abstract public void offsetUnset ( string $offset ) 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class Single implements ArrayAccess {
	private $name;
	private static $_Instance = null;
	private function __construct() {
	}
	static function load() {
		if(null == self::$_Instance) {
			self::$_Instance = new Single();
		}
		return self::$_Instance;
	}
	public function setName($name) {
		$this->name = $name;
	}
	public function getName() {
		return $this->name;
	}
	/** * 实现四个方法 * offsetExists()，用于标识一个元素是否已定义 * offsetGet()，用于返回一个元素的值 * offsetSet()，用于为一个元素设置新值 * offsetUnset()，用于删除一个元素和相应的值 **/
	public function offsetSet($offset, $value) {
		if (is_null($offset)) {
			$this->container[] = $value;
		} else {
			$this->container[$offset] = $value;
		}
	}
	public function offsetGet($offset) {
		return isset($this->container[$offset]) ? $this->container[$offset] : null;
	}
	public function offsetExists($offset) {
		return isset($this->container[$offset]);
	}
	public function offsetUnset($offset) {
		unset($this->container[$offset]);
	}
}
$s = Single::load();
$s->setName("jack");
$s["name"] = "mike";
echo $s->getName();
//jackecho $s["name"]; //mike

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_118-假设coreseek安装目录为-usr-local-coreseek" tabindex="-1"><a class="header-anchor" href="#_118-假设coreseek安装目录为-usr-local-coreseek" aria-hidden="true">#</a> 118.假设coreseek安装目录为/usr/local/coreseek</h4>
<p>配置文件为/usr/local/coreseek/etc/test.conf
索引名为 post
a. 创建索引
b. 启动服务
c. 重建索引(重建过程中保证搜索服务仍然可用)</p>
<p>indexer -c /usr/local/coreseek/etc/test.conf --allsearchd -c /usr/local/coreseek/etc/test.conf indexer -c /usr/local/coreseek/etc/test.conf --all --rotate12.</p>
<p>假设您有一张posts帖子表 对该表进行sphinx增量准实时索引, 描述你的方案
使用“主索引+增量索引”方法有个简单的实现，在数据库中增加一个计数表，记录每次重新构建主索引时，被索引表的最后一个数据id，这样在增量索引时只需要索引这个id以后的数据即可，每次重新构建主索引时都更新这个表。</p>
<h4 id="_120-例如google-baidu等大型网站-当使用不同客户端-如手机和pc机-访问同样的url时-呈现的页面却不相同-这是何原理-如果能给出实际解决方案-可加分。" tabindex="-1"><a class="header-anchor" href="#_120-例如google-baidu等大型网站-当使用不同客户端-如手机和pc机-访问同样的url时-呈现的页面却不相同-这是何原理-如果能给出实际解决方案-可加分。" aria-hidden="true">#</a> 120.例如google,baidu等大型网站，当使用不同客户端（如手机和PC机）访问同样的URL时，呈现的页面却不相同，这是何原理？ 如果能给出实际解决方案，可加分。</h4>
<p>​		简单的可以用user_agent判断,但是及其初步</p>
<p>​		可以的话通过服务器或者手机终端特征或者wap网关accept信息等</p>
<h4 id="_121-生产环境php-ini中magic-quotes-gpc及magic-quotes-runtime值应该设置为什么" tabindex="-1"><a class="header-anchor" href="#_121-生产环境php-ini中magic-quotes-gpc及magic-quotes-runtime值应该设置为什么" aria-hidden="true">#</a> 121.生产环境php.ini中magic_quotes_gpc及magic_quotes_runtime值应该设置为什么？</h4>
<p>​	on</p>
<p>​	off</p>
<p>（1） magic_quotes_gpc函数在php中的作用是判断解析用户提示的数据，如包括有:post、get、cookie过来的数据增加转义字符“\”，以确保这些数据不会引起程序，特别是数据库语句因为特殊字符引起的污染而出现致命的错误</p>
<p>在magic_quotes_gpc=On的情况下，如果输入的数据有</p>
<p>单引号（’）、双引号（”）、反斜线（）与 NUL（NULL 字符）等字符都会被加上反斜线。这些转义是必须的，如果这个选项为off，那么我们就必须调用addslashes这个函数来为字符串增加转义。</p>
<p>正是因为这个选项必须为On，但是又让用户进行配置的矛盾，在PHP6中删除了这个选项，一切的编程都需要在magic_quotes_gpc=Off下进行了。在这样的环境下如果不对用户的数据进行转义，后果不仅仅是程序错误而已了。同样的会引起数据库被注入攻击的危险。所以从现在开始大家都不要再依赖这个设置为On了，以免有一天你的服务器需要更新到PHP6而导致你的程序不能正常工作。</p>
<p>（2）magic_quotes_gpc和magic_quotes_runtime的区别和用法详解</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>当你的数据中有一些   "  ' 

这样的字符要写入到数据库里面，又想不被过滤掉的时候，它就很有用，会在这些字符前**自动**加上，如

中国地大物博"哈哈"

中国\地大物博"哈哈"

可以使用**set_maginc_quotes_runtime(0)**关闭掉，当然你也可以直接在php.ini中设置。

**get_magic_quotes_runtime()** 取得 PHP 环境变量 magic_quotes_runtime 的值。

**magic_quotes_gpc** 为 on，它主要是对所有的 GET、POST 和 COOKIE 数据自动运行 addslashes()。不要对已经被 magic_quotes_gpc 转义过的字符串使用 addslashes()，因为这样会导致双层转义。遇到这种情况时可以使用函数 **get_magic_quotes_gpc()** 进行检测。

**两者不同**

**set_magic_quotes_runtime()** 可以让程序员在代码中动态开启或关闭 **magic_quotes_runtime**，

**set_magic_quotes_runtime(1)** 表示开启，**set_magic_quotes_runtime(0)** 则表示关闭。当**set_magic_quotes_runtime(1)** 时，从数据库或通过fread之类的函数读取的文本，将自动对’ “和自动加上反斜杠进行转义，防止溢出。这在对数据库的数据进行转移的时候非常有用。

**但在一般情况下，应当将其关闭，否则从数据库读取出来的数据单引号、双引号和反斜杠都会被加上，导致显示不正常。像Discuz，PHPWind都在公共文件的头部加上一句 set_magic_quotes_runtime(0); 强制关闭 magic_quotes_runtime 。**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_122-php调用远程http接口时可使用file-get-contents-但当远程主机不可达或响应过慢-会导致本地php进程被长时间挂起-从而影响本地服务器稳定性-如何避免超时时-php进程长时间被挂起" tabindex="-1"><a class="header-anchor" href="#_122-php调用远程http接口时可使用file-get-contents-但当远程主机不可达或响应过慢-会导致本地php进程被长时间挂起-从而影响本地服务器稳定性-如何避免超时时-php进程长时间被挂起" aria-hidden="true">#</a> 122.PHP调用远程http接口时可使用file_get_contents, 但当远程主机不可达或响应过慢，会导致本地PHP进程被长时间挂起，从而影响本地服务器稳定性，如何避免超时时，PHP进程长时间被挂起?</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>file_get_contents可以设置下超时时间
$ctx = stream_context_create(
	array( 'http' => array( 
				'timeout' => 1 
			) 
	) 
); 
file_get_contents("http://www.want.com/", 0, $ctx); 
curl实现获取远程http接口也可以，同样需要设置超时时间curl_setopt($s,CURLOPT_TIMEOUT,$timeout); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_123-同上题-如何避免dns查询过慢导致超时" tabindex="-1"><a class="header-anchor" href="#_123-同上题-如何避免dns查询过慢导致超时" aria-hidden="true">#</a> 123.同上题，如何避免DNS查询过慢导致超时？</h4>
<h4 id="_124-mysql字符集set-names-命令设置哪几个系统变量的值" tabindex="-1"><a class="header-anchor" href="#_124-mysql字符集set-names-命令设置哪几个系统变量的值" aria-hidden="true">#</a> 124.mysql字符集set names * 命令设置哪几个系统变量的值？</h4>
<p>Character_set_client</p>
<p>Character_set_results</p>
<p>Character_set_connection</p>
<h4 id="_125-以下哪种校对规则不区分大小写-a" tabindex="-1"><a class="header-anchor" href="#_125-以下哪种校对规则不区分大小写-a" aria-hidden="true">#</a> 125.以下哪种校对规则不区分大小写？（A）</h4>
<p>utf8_general_ci</p>
<h4 id="_132-echo-count-abc-输出什么" tabindex="-1"><a class="header-anchor" href="#_132-echo-count-abc-输出什么" aria-hidden="true">#</a> 132.echo count(&quot;abc&quot;)输出什么？</h4>
<p>​	答案:1</p>
<h4 id="_133-有一个一维数组-里面存储整形数据-请写一个函数-将他们按从大到小的顺序排列。要求执行效率高-并说明如何改善执行效率。" tabindex="-1"><a class="header-anchor" href="#_133-有一个一维数组-里面存储整形数据-请写一个函数-将他们按从大到小的顺序排列。要求执行效率高-并说明如何改善执行效率。" aria-hidden="true">#</a> 133.有一个一维数组，里面存储整形数据，请写一个函数，将他们按从大到小的顺序排列。要求执行效率高，并说明如何改善执行效率。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
function BubbleSort(&amp;$arr) {
    $cnt = count($arr);
    $flag = 1;
    for ($i=0;$i&lt;$cnt;$++) {
        if($flag == 0 ) {
            return;

        }
    	$flag = 0;
        for ($j=0;$j&lt;$arr[$j+1]) {
            $tmp = $arr[$j];
            $arr[$j] = $arr[$j+1];
            $arr[$j+1] = $tmp;
            $flag = 1;
        }
    }
}
$test = array(1,3,6,8,2,7);
BubbleSort($test);
var_dump($test);
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_134-以下哪些函数能用来验证字符串的完整性-三选" tabindex="-1"><a class="header-anchor" href="#_134-以下哪些函数能用来验证字符串的完整性-三选" aria-hidden="true">#</a> 134.以下哪些函数能用来验证字符串的完整性？（三选）</h4>
<p>A．md5()</p>
<p>B．sha1()</p>
<p>C．str_rot13()</p>
<p>D．crypt()</p>
<p>E．crc32()</p>
<p>正确答案是 A，B 和 E。用 crypt()和 str_rot13()来验证一个字符串是否被改变，效率很低。crc32()比前面两个函数好些，如果能容忍一些小错误的话，它是个不错的选择。</p>
<h4 id="_135-以下哪些函数能把字符串里存储的二进制数据转化成十六进制-双选" tabindex="-1"><a class="header-anchor" href="#_135-以下哪些函数能把字符串里存储的二进制数据转化成十六进制-双选" aria-hidden="true">#</a> 135.以下哪些函数能把字符串里存储的二进制数据转化成十六进制？（双选）</h4>
<p>A．encode_hex()</p>
<p>B．pack()</p>
<p>C．hex2bin()</p>
<p>D．bin2hex()</p>
<p>E．printf()</p>
<p>​			正确答案是 B 和 D。pack 函数能对二进制数据进行复杂的格式化，包括将字符串中的字符转化成十六进制表示。bin2hex 函数也有同样的转化功能。注意，printf()能将整数转化成十六进制数，但无法转化字符串。</p>
<h4 id="_136-哪个函数能用来确保一个字符串的字符数总是大于一个指定值" tabindex="-1"><a class="header-anchor" href="#_136-哪个函数能用来确保一个字符串的字符数总是大于一个指定值" aria-hidden="true">#</a> 136.哪个函数能用来确保一个字符串的字符数总是大于一个指定值？</h4>
<p>这是在说 str_pad 函数，它可以把字符串填充到指定长度。</p>
<h4 id="_137-wordwrap-—-打断字符串为指定数量的字串" tabindex="-1"><a class="header-anchor" href="#_137-wordwrap-—-打断字符串为指定数量的字串" aria-hidden="true">#</a> 137.wordwrap — 打断字符串为指定数量的字串</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162255471.png" alt="image-20211215162255471"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162309446.png" alt="image-20211215162309446"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162323211.png" alt="image-20211215162323211"></p>
<h4 id="_138-file-get-contets-函数" tabindex="-1"><a class="header-anchor" href="#_138-file-get-contets-函数" aria-hidden="true">#</a> 138.file_get_contets()函数：</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162411533.png" alt="image-20211215162411533"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162429865.png" alt="image-20211215162429865"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211215162443377.png" alt="image-20211215162443377"></p>
<h4 id="_139-文件操作" tabindex="-1"><a class="header-anchor" href="#_139-文件操作" aria-hidden="true">#</a> 139.文件操作</h4>
<p>你可能觉得PHP的文件操作功能并不怎样，但实际上它对开发者来说非常有用。即使你是做网站开发的，学会相关技能也能让你如虎添翼。多亏了流包装器（stream wrappers，将在第十章详细介绍），PHP才能够打开并读取远程文件，让在本地使用第三方网站的内容变</p>
<p>得可能。站在更底层的角度，文件输入/输出能完成多种任务。可以用他读取预制文件的内容，比如第三方提供的内容；或者通过PHP脚本让浏览器打开一个二进制文件，使得你能更切实的控制它。无论如何，本章不仅考验你打开、关闭和读取文件的能力，还考查多进程下进行文件操作的基础知识——例如文件锁。</p>
<h4 id="_140-函数-能读取文本文件中的一行。读取二进制文件或者其他文件时-应当使用-函数。" tabindex="-1"><a class="header-anchor" href="#_140-函数-能读取文本文件中的一行。读取二进制文件或者其他文件时-应当使用-函数。" aria-hidden="true">#</a> 140.函数______能读取文本文件中的一行。读取二进制文件或者其他文件时，应当使用____函数。</h4>
<p>A．fgets(), fseek()</p>
<p>B．fread(), fgets()</p>
<p>C．fputs(), fgets()</p>
<p>D．fgets(), fread()</p>
<p>E．fread(), fseek()</p>
<p>​				 fgets函数主要用来从文本文件中读取一行，当然你也可以指定每次读取的最大长度。</p>
<p>​				fread函数主要用来读取二进制数据。答案是D。</p>
<h4 id="_141-文件指针能在php脚本结束时自动关闭-但你也可以用-函数来关闭。" tabindex="-1"><a class="header-anchor" href="#_141-文件指针能在php脚本结束时自动关闭-但你也可以用-函数来关闭。" aria-hidden="true">#</a> 141.文件指针能在PHP脚本结束时自动关闭，但你也可以用______函数来关闭。</h4>
<p>答案：____________fclose</p>
<h4 id="_142-考虑如下php脚本-它一行一行的读取并显示某文本文件的内容。在问号处填入什么才能使脚本正常运作" tabindex="-1"><a class="header-anchor" href="#_142-考虑如下php脚本-它一行一行的读取并显示某文本文件的内容。在问号处填入什么才能使脚本正常运作" aria-hidden="true">#</a> 142.考虑如下PHP脚本，它一行一行的读取并显示某文本文件的内容。在问号处填入什么才能使脚本正常运作？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$file = fopen("test", "r");
while(!feof($file)) {
	echo ????????????;
}
fclose($file);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A．file_get_contents($file)</p>
<p>B．file($file)</p>
<p>C．read_file($file)</p>
<p>D．fgets($file)</p>
<p>E．fread($file)</p>
<p>​					 fgets函数能从文件中读取单独一行。因此答案是D。</p>
<h4 id="_143-以下哪种方法能保证锁在任何竞争情况下都安全" tabindex="-1"><a class="header-anchor" href="#_143-以下哪种方法能保证锁在任何竞争情况下都安全" aria-hidden="true">#</a> 143.以下哪种方法能保证锁在任何竞争情况下都安全？</h4>
<p>A．用flock()锁住指定文件</p>
<p>B．用fopen()在系统的临时文件夹里打开文件</p>
<p>C．用tempnam()创建一个临时文件</p>
<p>D．用mkdir()创建一个文件夹来当</p>
<p>E．用tmpfile()创建一个临时文件</p>
<p>正确答案是D。你必须记住，flock()使用一种“协议”锁定机制，即所有其他访问此文件的进程也必须要使用flock()。如果某个进程没有这么做，竞争就会产生，锁就不安全。用mkdir创建一个文件夹能保证任何时刻只有一个进程处理能处理某文件，即保证操作的原子性。因此，你可以创建一个临时文件夹并“护”住它，直到I/O操作完成。</p>
<h4 id="_144-以下哪个函数能够获得文件的全部内容-并能够用在表达式中-双选" tabindex="-1"><a class="header-anchor" href="#_144-以下哪个函数能够获得文件的全部内容-并能够用在表达式中-双选" aria-hidden="true">#</a> 144.以下哪个函数能够获得文件的全部内容，并能够用在表达式中？（双选）</h4>
<p>A．file_get_contents()</p>
<p>B．fgets()</p>
<p>C．fopen()</p>
<p>D．file()</p>
<p>E．readfile()</p>
<p>​			只有file_get_contents和file函数返回文件的全部内容，因此答案是A和D。readfile函数也能读取文件的全部内容，但它直接把内容送入了输出缓存，因此不能用在表达式中。</p>
<h4 id="_145-在不把文件内容预加载到变量中的前提下-如何解析一个以特殊格式格式化过的多行文件" tabindex="-1"><a class="header-anchor" href="#_145-在不把文件内容预加载到变量中的前提下-如何解析一个以特殊格式格式化过的多行文件" aria-hidden="true">#</a> 145.在不把文件内容预加载到变量中的前提下，如何解析一个以特殊格式格式化过的多行文件？</h4>
<p>A．用file()函数把它分割放入数组</p>
<p>B．用sscanf()</p>
<p>C．用fscanf()</p>
<p>D．用fgets()</p>
<p>E．用fnmatch()</p>
<p>​		fscanf函数能根据指定格式解析文件内容，因此答案是C。sscanf函数只能用来操作字符串。</p>
<h4 id="_146-考虑如下脚本-最后文件myfile-txt的内容是什么" tabindex="-1"><a class="header-anchor" href="#_146-考虑如下脚本-最后文件myfile-txt的内容是什么" aria-hidden="true">#</a> 146．考虑如下脚本，最后文件myfile.txt的内容是什么？</h4>
<p>$array = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';</p>
<p>$f = fopen (&quot;myfile.txt&quot;, &quot;r&quot;);</p>
<p>for ($i = 0; $i &lt; 50; $i++) {</p>
<p>fwrite ($f, $array[rand(0, strlen ($array) - 1)]);</p>
<p>}</p>
<p>?&gt;</p>
<p>A．什么都没有，因为$array实际上是一个字符串，而不是数组</p>
<p>B．49个随机字符</p>
<p>C．50个随机字符</p>
<p>D．41个随机字符</p>
<p>E．什么都没有，或者文件不存在，脚本输出一个错误</p>
<p>答案是E。注意，文件被以r模式打开，即只读模式。因此，如果文件不存在，PHP将输出一个错误来指出没有找到文件。如果文件存在，fopen()将被成功调用，但由于是以只读方式打开，fwrite()会失败。如果我们用w代替r，脚本就能正常运行，并且myfile.txt内将有50个随机字符（记住，可以像访问数组那样使用索引来访问字符串）。</p>
<h4 id="_147-函数delete是做什么的" tabindex="-1"><a class="header-anchor" href="#_147-函数delete是做什么的" aria-hidden="true">#</a> 147．函数delete是做什么的？</h4>
<p>PHP里没有叫delete()的函数。删除文件用unlink()，删除文件夹用rmdir()，数据库记录用SQL语句删除，释放变量用unset()。</p>
<h4 id="_148-考虑如下脚本-哪个php函数和它的功能最接近" tabindex="-1"><a class="header-anchor" href="#_148-考虑如下脚本-哪个php函数和它的功能最接近" aria-hidden="true">#</a> 148．考虑如下脚本，哪个PHP函数和它的功能最接近？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function my_funct ($file_name, $data)
{
    $f = fopen ($file_name, 'w');
    fwrite ($f, $data);
    fclose ($f);
}
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B．file_put_contents()</p>
<h4 id="_149-如果你的脚本无法正确识别一个存储于另一个平台上的文件的行结尾-你该怎么办" tabindex="-1"><a class="header-anchor" href="#_149-如果你的脚本无法正确识别一个存储于另一个平台上的文件的行结尾-你该怎么办" aria-hidden="true">#</a> 149．如果你的脚本无法正确识别一个存储于另一个平台上的文件的行结尾，你该怎么办？</h4>
<p>A．改变auto_detect_line_ending的设置</p>
<p>B．用正则表达式侦测行的最后一个字母</p>
<p>C．用fpos()</p>
<p>D．用ftok()</p>
<p>E．每次读取一个字符</p>
<p>​		PHP4.3.0开始，php.ini引入了auto_detect_line_endings设置，系统在保存文本文件时能够自动侦测行结束符号的类型，因此答案是A。</p>
<h4 id="_150-如果想要可读可写得打开一个文件-该给fopen-传什么参数-双选" tabindex="-1"><a class="header-anchor" href="#_150-如果想要可读可写得打开一个文件-该给fopen-传什么参数-双选" aria-hidden="true">#</a> 150．如果想要可读可写得打开一个文件，该给fopen()传什么参数？（双选）</h4>
<p>A．w</p>
<p>B．r</p>
<p>C．a</p>
<p>D．+</p>
<p>​		要可读可写的打开文件，你必须使用r+模式，因此答案是B和D。</p>
<h4 id="_151-能够读写常规文件中的二进制数据的函数是-该函数返回的资源能被fgets-使用。" tabindex="-1"><a class="header-anchor" href="#_151-能够读写常规文件中的二进制数据的函数是-该函数返回的资源能被fgets-使用。" aria-hidden="true">#</a> 151．能够读写常规文件中的二进制数据的函数是______，该函数返回的资源能被fgets()使用。</h4>
<p>答案：__________这是在说fopen()函数。</p>
<h4 id="_152-以下哪些函数能读取文件的全部内容-三选" tabindex="-1"><a class="header-anchor" href="#_152-以下哪些函数能读取文件的全部内容-三选" aria-hidden="true">#</a> 152．以下哪些函数能读取文件的全部内容？（三选）</h4>
<p>A．fgets()</p>
<p>B．file_get_contents()</p>
<p>C．fread()</p>
<p>D．readfile()</p>
<p>E．file()</p>
<p>​			正确答案是B，D和E。file，readfile和file_get_contents都能读取文件的全部内容。</p>
<h4 id="_153-哪个函数能够往文本文件中写入一个字符串" tabindex="-1"><a class="header-anchor" href="#_153-哪个函数能够往文本文件中写入一个字符串" aria-hidden="true">#</a> 153．哪个函数能够往文本文件中写入一个字符串？</h4>
<p>答案：____________fwrite()和fputs()两个函数在这里都可以，而后者其实是前者的别名。在PHP中，写入二进制数据和写入字符串没有区别。</p>
<h4 id="_154-考虑如下脚本。运行时-尽管文件test-txt已经被用unlink-函数删除-脚本仍然输出1-1。在脚本的最后添加什么函数才能解决这个问题" tabindex="-1"><a class="header-anchor" href="#_154-考虑如下脚本。运行时-尽管文件test-txt已经被用unlink-函数删除-脚本仍然输出1-1。在脚本的最后添加什么函数才能解决这个问题" aria-hidden="true">#</a> 154．考虑如下脚本。运行时，尽管文件test.txt已经被用unlink()函数删除，脚本仍然输出1,1。在脚本的最后添加什么函数才能解决这个问题？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$f = fopen ("test.txt", "w");
fwrite ($f, "test");
fclose ($f);
echo (int) file_exists("test.txt") . ', ';
unlink ("c:\\test.txt");
echo (int) file_exists ("test.txt");
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A．clearstatcache()</p>
<p>B．fflush()</p>
<p>C．ob_flush()</p>
<p>D．touch()</p>
<p>E．以上都不对</p>
<p>​			PHP会缓存某些文件系统函数的返回值——包括file_exists()，这样能提高脚本处理重复</p>
<p>操作时的效率。当脚本里有大量删除文件的操作时，缓存很容易就会过时，因此需要清</p>
<p>理缓存。答案是A。</p>
<h4 id="_155-函数-能判断一个文件是否可写。" tabindex="-1"><a class="header-anchor" href="#_155-函数-能判断一个文件是否可写。" aria-hidden="true">#</a> 155．函数______能判断一个文件是否可写。</h4>
<p>答案：______<em><strong>这是在说is_writeable函数，它返回一个表示文件是否可写的布尔值。</strong></em></p>
<h4 id="_156-以下哪个选项能将文件指针移到开头" tabindex="-1"><a class="header-anchor" href="#_156-以下哪个选项能将文件指针移到开头" aria-hidden="true">#</a> 156．以下哪个选项能将文件指针移到开头？</h4>
<p>A．reset()</p>
<p>B．fseek(-1)</p>
<p>C．fseek(0, SEEK_END)</p>
<p>D．fseek(0, SEEK_SET)</p>
<p>E．fseek(0, SEEK_CUR)</p>
<p>​		正确答案是D。fseek()用来移动文件指针。SEEK_SET指出偏移量从文件开头开始计算。如果没有特别指出，SEEK_SET就是fseek()的默认模式。注意，rewind函数等效于fseek(0,SEEK_SET)。</p>
<h4 id="_157-stat-和fstat-有什么区别" tabindex="-1"><a class="header-anchor" href="#_157-stat-和fstat-有什么区别" aria-hidden="true">#</a> 157．stat()和fstat()有什么区别？</h4>
<p>A．stat()基于文件指针工作，fstat()基于路径工作</p>
<p>B．fstat()基于文件指针工作，stat()基于路径工作</p>
<p>C．fstat()不能处理文件</p>
<p>D．stat()不能处理文件</p>
<p>E．fstat()是stat()的别名</p>
<p>​		答案是B。fstat函数通过已打开的文件指针取得文件信息，stat()获取指定路径的文件信息。</p>
<h4 id="_159-假设image-jpg存在并能够被php读取-调用以下脚本时-浏览器上显示什么" tabindex="-1"><a class="header-anchor" href="#_159-假设image-jpg存在并能够被php读取-调用以下脚本时-浏览器上显示什么" aria-hidden="true">#</a> 159．假设image.jpg存在并能够被PHP读取，调用以下脚本时，浏览器上显示什么？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>header ("Content-type: image/jpeg");
?>
readfile ("image.jpg");
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A．一张JPEG图片</p>
<p>B．一个二进制文件</p>
<p>C．下载一个二进制文件</p>
<p>D．下载一张JPEG图片</p>
<p>E．一张残破的图片</p>
<p>答案是E。你注意到两个代码块之间的空行了吗？它将被输出到浏览器上，使得整个图片的二进制数据出错。因此浏览器将显示一个破碎的图片（或者是一条信息，指出图片出错）。 译者注：原文中两个代码块之间并没有空行，而在我添加了空行之后，也没有调试出答案中描述的情况。）</p>
<h4 id="_161-一段脚本如何才算彻底终止" tabindex="-1"><a class="header-anchor" href="#_161-一段脚本如何才算彻底终止" aria-hidden="true">#</a> 161．一段脚本如何才算彻底终止？</h4>
<p>A．当调用 exit()时</p>
<p>B．当执行到文件结尾时</p>
<p>C．当 PHP 崩溃时</p>
<p>D．当 Apache 由于系统故障而终止时</p>
<p>答案是 A。一段脚本并不会在执行到文件末尾时终止，所以当前文件才能被其他脚本包含。至于 PHP 和 Apache 崩溃，这两个说法就太恶搞了。</p>
<h4 id="_163-浏览器的缓存原理" tabindex="-1"><a class="header-anchor" href="#_163-浏览器的缓存原理" aria-hidden="true">#</a> 163.浏览器的缓存原理</h4>
<p>浏览器缓存将文件保存在客户端，好的缓存策略可以减少对网络带宽的占用，可以提高访问速度，提高用户的体验，还可以减轻服务器的负担。因此我们有必要了解它的实现原理，用来提高网站的性能。</p>
<p>当一个客户端请求web服务器, 请求的内容可以从以下几个地方获取：服务器、浏览器缓存中或缓存服务器中。这取决于服务器端输出的页面信息。页面文件有三种缓存状态。</p>
<p>1.最新的：选择不缓存页面，每次请求时都从服务器获取最新的内容。</p>
<p>2.未过期的：在给定的时间内缓存，如果用户刷新或页面过期则去服务器请求，否则将读取本地的缓存，这样可以提高浏览速度。</p>
<p>3.过期的：也就是陈旧的页面，当请求这个页面时，必须进行重新获取。</p>
<h4 id="_164-真静态与伪静态的区别" tabindex="-1"><a class="header-anchor" href="#_164-真静态与伪静态的区别" aria-hidden="true">#</a> 164.真静态与伪静态的区别</h4>
<pre><code>  1、使用真静态和假静态对SEO来说没有什么区别
</code></pre>
<p>2、使用真静态可能将导致硬盘损坏并将影响论坛性能</p>
<p>3、使用伪静态将占用一定量的CPU占有率，大量使用将导致CPU超负荷</p>
<p>4、最重要的一点，我们要静态是为了SEO</p>
<p>所以：</p>
<p>1、使用真静态的方法可以直接排除了，因为无论怎么生成，对硬盘来说都是很伤的。</p>
<p>2、既然真伪静态的效果一样，我们就可以选择伪静态了。</p>
<p>3、但是伪静态大量使用会照成CPU超负荷。</p>
<p>4、所以我们只要不大量使用就可以了。</p>
<p>5、既然静态只是给SEO看的，我们只需要伪静态给SEO就行了，不需要给用户使用。</p>
<p>6、所以我们只要在专门提供给SEO爬的Archiver中使用伪静态就可以了。</p>
<h4 id="_165-url重写技术" tabindex="-1"><a class="header-anchor" href="#_165-url重写技术" aria-hidden="true">#</a> 165.url重写技术</h4>
<p>第一：有利于搜索引擎的抓取，因为现在大部分的搜索引擎对动态页面的抓取还比较弱，</p>
<p>它们更喜欢抓取一些静态的页面。而我们现在的页面大部分的数据都是动态的显示的。</p>
<p>这就需要我们把动态页面变成静态的页面，有利于搜索引擎的抓取。</p>
<p>第二：让用户更容易理解，很少有用户去关心你网站的页面的地址，但对一般的大中型网站增强可读性还是必须的。这样会让你的网站更加完美。
第三：隐藏技术的实现，我们可以通过Url重写可以实现技术的隐藏。不至于暴露你所采用的技术，给一些想攻击你网站的爱好者提供方便。
第四：可以很方便的重用，提高网站的移植性。如果我们后台方法改动的话，可以保证前台的页面部分不用改。这样就提高了网站的移植性。</p>
<h4 id="_166-html纯静态页的好处有4点" tabindex="-1"><a class="header-anchor" href="#_166-html纯静态页的好处有4点" aria-hidden="true">#</a> 166.html纯静态页的好处有4点：</h4>
<p>1、加载的时候不需要调用数据库，打开速度快。
2、减少了服务器对数据响应的负荷。
3、从安全角度讲，纯静态网页不易遭受黑客攻击。
4、从网站稳定性来讲，即使网站代码或数据库出了问题，静态网站也不会受到影响。
真静态最大的缺点就是程序生成了大量文件，占用过多的网站空间，增加网站制作成本。
伪静态既url重写，就是截取传入的Web请求并自动将请求重定向到其他url的过程，其目的主    要是通过重写URL的方法实现去掉动态网页的参数，从而更加有利于搜索引擎的收录。伪静态的优点有5点：
1、维护方便，网页每天都自动变化，不用维护或者说极大地减少了维护量。
2、可以方便的实现对搜索引擎的优化，易于被搜索引擎收录。
3、缩短了url的长度，隐藏文件实际路径提高了安全性，易于用户记忆和输入。
4、占空间比较小，不像纯静态那样多占用近过多的空间。
5、安全性能通过url地址隐藏或加密，让黑客无法找到真实的动态页面，同时动态文件不需要太高的权限，从而避免了木马的注入。
伪静态最大的缺点就是会占用一定量的CPU使用率，增加服务器的响应时间。
1、既然真伪静态和伪静态对搜索引擎的效果一样，我们就可以选择伪静态了，毕竟它的优点是纯静态不可取代的。
2、大量使用伪静态会照成CPU超负荷，所以我们只要不大量使用就可以了，设计在线使用了相应的编译缓存技术，己经很好的优化并解决这个问题了。</p>
<h4 id="_167-如何实现自定义遍历" tabindex="-1"><a class="header-anchor" href="#_167-如何实现自定义遍历" aria-hidden="true">#</a> 167.如何实现自定义遍历？</h4>
<p>回答：实现迭代器接口就可以了，Iterator。</p>
<h4 id="_168-spl-autoload-register用法" tabindex="-1"><a class="header-anchor" href="#_168-spl-autoload-register用法" aria-hidden="true">#</a> 168.spl_autoload_register用法：</h4>
<p>spl_autoload_register — 注册__autoload()函数，注意spl_autoload_register函数的用法，
如果是普通函数，只需要填写函数名即可
如果是类中的方法，需要告知是哪个类的哪个方法，使用数组的形式传递.
spl_autoload_register(array(self,&quot;load&quot;))</p>
<p>static代表当前类时只有5.4版本才支持</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// spl_autoload_register3中用法1:
// spl_autoload_register(function($name){
// 	$file = "./".$name.".php";
// 	if(is_file($file)){
// 		require_once($file);
// 	}
// });

// spl_autoload_register3中用法2:
// function getLand($name){
// 	$file = "./".$name.".php";
// 	if(is_file($file)){
// 		require_once($file);
// 	}
// }
// spl_autoload_register('getLand');

// spl_autoload_register3中用法3:
class Load{
	public function autoload($name){
		$file = "./".$name.".php";
		if(is_file($file)){
			require_once($file);
		}
	}
}
spl_autoload_register([new Load,'autoload']);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_169-如何完整的删除与当前session相关的全部数据" tabindex="-1"><a class="header-anchor" href="#_169-如何完整的删除与当前session相关的全部数据" aria-hidden="true">#</a> 169.如何完整的删除与当前session相关的全部数据：</h4>
<p>session_destroy();删除数据区
unset($_SESSION) 销毁变量
setCookie('session_name()','',time()-1)销毁cookie中的session-ID</p>
<h4 id="_170-如何清空session数据" tabindex="-1"><a class="header-anchor" href="#_170-如何清空session数据" aria-hidden="true">#</a> 170.如何清空session数据？</h4>
<p>因为$_session是个数组，所以常规的删除数组元素对于普通数组可以，但是对于session不行，例如unset($_SESSION)不行，因为在其他session机制里地也有引用到这个session数据，我们这种方式只是把变量删除了，数据没有清空的。所以此时操作应该为：</p>
<p>$_SESSION=array();</p>
<h4 id="_173-你如何替-php-的应用程式侦错" tabindex="-1"><a class="header-anchor" href="#_173-你如何替-php-的应用程式侦错" aria-hidden="true">#</a> 173.你如何替 PHP 的应用程式侦错？</h4>
<p>我并不常这样做，我曾经试过很多不同的侦错工具，在 Linux 系统中设定这些工具一点也不容易。不过以下我会介绍一个近来颇受注目的侦错工具。
PHP - Advanced PHP Debugger 或称 PHP - APD，第一步是执行以下的指令安装：
pear install apd安装后在你的脚本的开头位置加入以下的语句开始进行侦错：
apd_set_pprof_trace();执行完毕，打开以下档案来查阅执行日志：
apd.dumpdir
你也可以使用 pprofp 来格式化日志。</p>
<h4 id="_175-php程序中如何设置当前页面的编码为utf-8" tabindex="-1"><a class="header-anchor" href="#_175-php程序中如何设置当前页面的编码为utf-8" aria-hidden="true">#</a> 175.php程序中如何设置当前页面的编码为utf-8?</h4>
<p>header(“content-type:text/html;charset=utf-8”);</p>
<h4 id="_176-如果我的网站用的utf-8编码-为防止乱码出现-都需要注意哪些地方" tabindex="-1"><a class="header-anchor" href="#_176-如果我的网站用的utf-8编码-为防止乱码出现-都需要注意哪些地方" aria-hidden="true">#</a> 176.如果我的网站用的utf-8编码，为防止乱码出现，都需要注意哪些地方？</h4>
<p>​		1数据库中库和表都用utf8_general_ci编码
​		2 php连接mysql，指定数据库编码为utf8 mysql_query(“set names utf8”);
​		3 php文件指定头部编码为utf-8 header(“content-type:text/html;charset=utf-8”);
​		4网站下所有文件的编码为utf8
​		5 html文件指定编码为utf-8 <meta http-equiv="Content-Type" 			content="text/html; charset=utf-8" /></p>
<h4 id="_178-写出两种对变量加密的函数" tabindex="-1"><a class="header-anchor" href="#_178-写出两种对变量加密的函数" aria-hidden="true">#</a> 178.写出两种对变量加密的函数？</h4>
<p>md5($str); 	sha1($str);</p>
<h4 id="_179-一个浏览器做多可以产生多少个cookie-每个cookie文件最大不能超过多少" tabindex="-1"><a class="header-anchor" href="#_179-一个浏览器做多可以产生多少个cookie-每个cookie文件最大不能超过多少" aria-hidden="true">#</a> 179.一个浏览器做多可以产生多少个cookie，每个cookie文件最大不能超过多少？</h4>
<p>​			20个，每个做多不超过4K</p>
<h4 id="_180-设置或读取session之前-需要做什么" tabindex="-1"><a class="header-anchor" href="#_180-设置或读取session之前-需要做什么" aria-hidden="true">#</a> 180.设置或读取session之前，需要做什么？</h4>
<p>​		可以直接在php.ini中开启session.auto_start = 1或者在页面头部用session_start();开启session，session_start()前面不能有任何输出，包括空行。</p>
<h4 id="_181-如何定义一个常量-判断常量是否存在用什么函数" tabindex="-1"><a class="header-anchor" href="#_181-如何定义一个常量-判断常量是否存在用什么函数" aria-hidden="true">#</a> 181.如何定义一个常量，判断常量是否存在用什么函数？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>define(“TEST”,’happy new year!’);
If( defined(“TEST”)){
	echo TEST;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_182-如何把一个gb2312格式的字符串装换成utf-8格式" tabindex="-1"><a class="header-anchor" href="#_182-如何把一个gb2312格式的字符串装换成utf-8格式" aria-hidden="true">#</a> 182.如何把一个GB2312格式的字符串装换成UTF-8格式？</h4>
<p>​			Iconv(“GB2312”,”UTF-8”,”test!!!”);</p>
<h4 id="_183-说出php的超级全局变量数组-共九种" tabindex="-1"><a class="header-anchor" href="#_183-说出php的超级全局变量数组-共九种" aria-hidden="true">#</a> 183.说出PHP的超级全局变量数组，共九种？</h4>
<p>$_ENV; $_SERVER; $_REQUEST; $_FILES; $_SESSION; $_COOKIE; $_GET; $_POST;$GLOBALS;</p>
<h4 id="_187-请写出php连mysql连接中-获取下一个自增长id值的方法-可以写多个。" tabindex="-1"><a class="header-anchor" href="#_187-请写出php连mysql连接中-获取下一个自增长id值的方法-可以写多个。" aria-hidden="true">#</a> 187.请写出php连mysql连接中，获取下一个自增长id值的方法，可以写多个。</h4>
<h4 id="_188-请问cgi和fastcgi有什么不同-你在什么情况下会选择哪个" tabindex="-1"><a class="header-anchor" href="#_188-请问cgi和fastcgi有什么不同-你在什么情况下会选择哪个" aria-hidden="true">#</a> 188.请问cgi和fastcgi有什么不同，你在什么情况下会选择哪个</h4>
<p>原理一样，都是利用标准输入输出流处理HTTP之类的文本协议，都是通过多进程模式处理多请求。不同之处在于FastCGI的一个进程处理完一个请求之后重置状态并挂起，待下一个请求来时继续处理；而CGI的一个进程则处理完一个请求后退出，下一个请求来时再创建新进程。</p>
<h4 id="_191-zend-optimizer是什么" tabindex="-1"><a class="header-anchor" href="#_191-zend-optimizer是什么" aria-hidden="true">#</a> 191.zend optimizer是什么</h4>
<p>Zend Optimizer可以加速PHP脚本的执行，提高PHP应用程序的执行速度。实现的原
理是对那些程序在被最终执行之前由运行编译器(Run-Time Compiler)产生的代码进行优化。
一般情况下，执行使用Zend Optimizer的PHP程序比不使用的要快40%到100%。这意
味着网站的访问者可以更快的浏览网页，从而完成更多的事务，创造更好的客户满意度。
Zend Optimizer还可以给用Zend加密的文件解密。</p>
<h4 id="_192-如何用命令把mysql里的数据备份出来" tabindex="-1"><a class="header-anchor" href="#_192-如何用命令把mysql里的数据备份出来" aria-hidden="true">#</a> 192.如何用命令把mysql里的数据备份出来</h4>
<h4 id="_193-请说明html文档中dtd的意义和作用" tabindex="-1"><a class="header-anchor" href="#_193-请说明html文档中dtd的意义和作用" aria-hidden="true">#</a> 193.请说明HTML文档中DTD的意义和作用</h4>
<h4 id="_194-ajax-数据库触发器-gui-中断机制的共同思想。谈一谈该种思想-机制-。" tabindex="-1"><a class="header-anchor" href="#_194-ajax-数据库触发器-gui-中断机制的共同思想。谈一谈该种思想-机制-。" aria-hidden="true">#</a> 194.Ajax,数据库触发器，GUI，中断机制的共同思想。谈一谈该种思想（机制）。</h4>
<p>主要就是异步，主进程不会被一个异步任务阻塞，当进程发出命令之后，继续执行主任务，不用等待子任务执行完，这样效率更高。
数据库触发器和中断机制是数据库自动完成的，而ajax触发器是用户激发的。ajax把GUI和数据库异步优化。</p>
<h4 id="_195-把一篇英文文档中所有单词的首字母转为大写-文档存在doc-txt中。可以在多种编程语言中选择-c-c-java-php-写出你的思路-尽量优化你的程序。" tabindex="-1"><a class="header-anchor" href="#_195-把一篇英文文档中所有单词的首字母转为大写-文档存在doc-txt中。可以在多种编程语言中选择-c-c-java-php-写出你的思路-尽量优化你的程序。" aria-hidden="true">#</a> 195.把一篇英文文档中所有单词的首字母转为大写，文档存在doc.txt中。可以在多种编程语言中选择（C\C++,JAVA,PHP...)写出你的思路，尽量优化你的程序。</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216200945475.png" alt="image-20211216200945475"></p>
<h4 id="_197-数据库优化" tabindex="-1"><a class="header-anchor" href="#_197-数据库优化" aria-hidden="true">#</a> 197.数据库优化：</h4>
<p>有一个表 PRODUCT(ID,NAME,PRICE,COUNT);
在执行一下查询的时候速度总是很慢：
SELECT * FROM PRODUCT WHERE PRICE=100;
在price字段上加上一个非聚簇索引，查询速度还是很慢。
（1）分析查询慢的原因。
（2）如何进行优化。</p>
<h4 id="_199-将1234567890转换成1-234-567-890-每3位用逗号隔开的形式。" tabindex="-1"><a class="header-anchor" href="#_199-将1234567890转换成1-234-567-890-每3位用逗号隔开的形式。" aria-hidden="true">#</a> 199.将1234567890转换成1,234,567,890 每3位用逗号隔开的形式。</h4>
<p>$str = '1234567890';</p>
<p>​	function str($str){</p>
<p>​		$str = strrev($str);</p>
<p>​		$str = chunk_split($str,3, ',');</p>
<p>​		$str = strrev($str);</p>
<p>​		$str = ltrim($str, ',');</p>
<p>​		var_dump($str);</p>
<p>​	}</p>
<p>​	str($str);</p>
<h4 id="_200-将字符09转换成十进制数字。" tabindex="-1"><a class="header-anchor" href="#_200-将字符09转换成十进制数字。" aria-hidden="true">#</a> 200.将字符09转换成十进制数字。</h4>
<ul>
<li>方法一:</li>
</ul>
<p>$str = '01';</p>
<p>$str = str_replace (&quot;0&quot;, &quot;&quot;, $str);</p>
<ul>
<li>方法二：</li>
</ul>
<p>echo preg_replace('/^0*/', '', $string);</p>
<h4 id="_208-php如何跳转" tabindex="-1"><a class="header-anchor" href="#_208-php如何跳转" aria-hidden="true">#</a> 208.php如何跳转</h4>
<p>方法一：php函数跳转,缺点，header头之前不能有输出，跳转后的程序继续执行，可用exit中断执行后面的程序。
Header(&quot;Location: 网址&quot;); 	//直接跳转
header(&quot;refresh:3;url=http://axgle.za.net&quot;);	//三秒后跳转</p>
<p>方法二：利用meta
echo &quot;<meta http-equiv=refresh content='0; url=网址'>&quot;;</p>
<h4 id="_209-设置cookies" tabindex="-1"><a class="header-anchor" href="#_209-设置cookies" aria-hidden="true">#</a> 209.设置cookies</h4>
<p>bool setcookie ( string name [, string value [, int expire [, string path [, string domain [, bool secure]]]]] )
参数说明: Cookie 的名字，Cookie的值，过期时间，Cookie 在服务器端的有效路径，该 cookie 有效的域名，指明 cookie 是否仅通过安全的 HTTPS 连接传送。当设成 TRUE 时，cookie 仅在安全的连接中被设置。默认值为 FALSE
$value = 'something from somewhere';
setcookie(&quot;TestCookie&quot;, $value);
setcookie(&quot;TestCookie&quot;, $value,time()+3600);  /*有效期为一小时 */
setcookie(&quot;TestCookie&quot;, $value,time()+3600, &quot;/~rasmus/&quot;, &quot;.utoronto.ca&quot;, 1);</p>
<h4 id="_210-cookie、session的联系和区别-多台web服务器如何共享-session" tabindex="-1"><a class="header-anchor" href="#_210-cookie、session的联系和区别-多台web服务器如何共享-session" aria-hidden="true">#</a> 210.COOKIE、SESSION的联系和区别，多台web服务器如何共享 SESSION？</h4>
<pre><code>使用session_start()调用session,服务器端在生成session文件的同时,生成session ID哈希值和默认值为PHPSESSID的session name,并向客户端发送变量为(默认的是)PHPSESSID(session name),值为一个128位的哈希值.服务器端将通过该cookie与客户端进行交互.
session变量的值经php内部系列化后保存在服务器机器上的文本文件中,和客户端的变量名默认情况下为PHPSESSID的coolie进行对应交互.
  即服务器自动发送了http头:header('Set-Cookie: session_name()=session_id(); path=/');
</code></pre>
<p>即setcookie(session_name(),session_id());
当从该页跳转到的新页面并调用session_start()后,PHP将检查与给定ID相关联的服务器端存贮的session数据,如果没找到,则新建一个数据集.</p>
<h4 id="_211-strlen-与mb-strlen的作用分别是什么" tabindex="-1"><a class="header-anchor" href="#_211-strlen-与mb-strlen的作用分别是什么" aria-hidden="true">#</a> 211.strlen()与mb_strlen的作用分别是什么</h4>
<h4 id="_215-写出下列服务的用途和默认端口ftp、ssh、http、telnet、https" tabindex="-1"><a class="header-anchor" href="#_215-写出下列服务的用途和默认端口ftp、ssh、http、telnet、https" aria-hidden="true">#</a> 215.写出下列服务的用途和默认端口ftp、ssh、http、telnet、https</h4>
<ul>
<li>ftp：File Transfer Protocol，文件传输协议，是应用层的协议，它基于传输层，为用户服务，它们负责进行文件的传输，其默认端口是21。</li>
<li>ssh：Secure Shell，安全外壳协议，建立在应用层和传输层基础上的安全协议。SSH是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议，其默端口是22。</li>
<li>http：hypertext transport protocol，超文本传送协议，是一种详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议，其默认端口是80。</li>
<li>telnet：Telnet协议是TCP/IP协议族中的一员，是Internet远程登陆服务的标准协议和主要方式。它为用户提供了在本地计算机上完成远程主机工作的能力，其默认端口是23。</li>
<li>https：Hypertext Transfer Protocol over Secure Socket Layer，是以安全为目标的HTTP通道，用于安全的HTTP数据传输，它的主要作用可以分为两种：
一种是建立一个信息安全通道，来保证数据传输的安全；
另一种就是确认网站的真实性，其默认端口是443。</li>
</ul>
<h4 id="_217-写出下面2个php操作mysql函数的作用和区别" tabindex="-1"><a class="header-anchor" href="#_217-写出下面2个php操作mysql函数的作用和区别" aria-hidden="true">#</a> 217.写出下面2个PHP操作Mysql函数的作用和区别</h4>
<p>mysql_num_rows()</p>
<p>mysql_affected_rows()</p>
<h4 id="_220-系统分析" tabindex="-1"><a class="header-anchor" href="#_220-系统分析" aria-hidden="true">#</a> 220.系统分析</h4>
<p>假设有一个博客系统，数据库存储采用mysql，用户数量为1000万，预计文章总数为10亿，每天有至少10万的更新量，每天访问量为5000万，对数据库的读写操作的比例超过10：1，你如何设计该系统，以确保其系统高效，稳定的运行？</p>
<p>提示：可以从数据库设计，系统框架，及网络架构方面进行描述，可以自由发挥</p>
<h4 id="_221-pear中的数据库连接字符串格式是-。" tabindex="-1"><a class="header-anchor" href="#_221-pear中的数据库连接字符串格式是-。" aria-hidden="true">#</a> 221.<strong>PEAR中的数据库连接字符串格式是____。</strong></h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216200549597.png" alt="image-20211216200549597"></p>
<p>PEAR是PHP扩展与应用库（the PHP Extension and Application Repository）的缩写。它是一个PHP扩展及应用的一个代码仓库，PEAR处理数据库的模块是PEAR DB。</p>
<h4 id="_222-如何实现php、jsp交互" tabindex="-1"><a class="header-anchor" href="#_222-如何实现php、jsp交互" aria-hidden="true">#</a> 222.<strong>如何实现PHP、JSP交互？</strong></h4>
<p>题目有点含糊不清,SOAP,XML_RPC,Socket function,CURL都可以实现这些,如果是考虑PHP和Java的整合，PHP内置了这种机制(如果考PHP和.NET的整合，也可以这么回答)。
PHP提供了支持JAVA的类库文件，或者通过HTTP协议来交互数据。</p>
<h4 id="_223-apache-mysql-php实现最大负载的方法" tabindex="-1"><a class="header-anchor" href="#_223-apache-mysql-php实现最大负载的方法" aria-hidden="true">#</a> 223.apache+mysql+php实现最大负载的方法</h4>
<ol>
<li>问的太笼统,生成静态html页面，squid反向代理，apache，mysql的负载均衡。</li>
<li>可以采取数据缓存的方法，我们通常在统计数据的时候，需要在原始数据的基础上经过计算等一系列操作，才会得到最终的结果，如果每做一个查询都需要这样一系列操作，当数据量大时，势必会带来很多问题。可以建立一个结果表，写一个脚本，用crontab定时触发脚本去原始表取数据，计算，写入到结果表，前端查询从结果表取数据，这也是比较常用的一种做法。</li>
<li>采用分布式，多个apache，多个mysql，其实就是dns负载均衡，dns根据当前用户解析几个ip的ping值，将用户转移到某一台最快的服务器，或者平均分配。</li>
<li>money不是问题的话，可以考虑F5硬件负载均衡!</li>
<li>可以使用Microsoft Windows Server系统的负载均衡设置</li>
</ol>
<h4 id="_224-如何生成静态页面" tabindex="-1"><a class="header-anchor" href="#_224-如何生成静态页面" aria-hidden="true">#</a> 224.如何生成静态页面？</h4>
<p>要生成静态HTML页面，需要使用输出缓冲output buffering及文件操作，首先使用ob_start()函数开启输出缓冲，在页面内容执行完成时，使用ob_get_contents()函数获取保存在输出缓冲区中的内容，然后使用file_put_contents()函数，生成静态HTML页面即可。</p>
<h4 id="_225-请用php实现一个函数-将一个2进制数的无符号非负电位字符串非浮点字符串转成一个10进制数-返回该10进制数。不许使用bin等系统内置函数-嘀嗒团" tabindex="-1"><a class="header-anchor" href="#_225-请用php实现一个函数-将一个2进制数的无符号非负电位字符串非浮点字符串转成一个10进制数-返回该10进制数。不许使用bin等系统内置函数-嘀嗒团" aria-hidden="true">#</a> 225.请用PHP实现一个函数，将一个2进制数的无符号非负电位字符串非浮点字符串转成一个10进制数，返回该10进制数。不许使用BIN等系统内置函数（嘀嗒团）</h4>
<p>题目本意可能是将一个无符号的2进制字符串转成10进制数，如'10100010'，应该得到10100010的十进制表示162。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216201951463.png" alt="image-20211216201951463"></p>
<h4 id="_226-请使用php设计一个函数-对学生英语考试得分从高到低排序-输入时所有学生的学号和考试得分-返回排好序的考试得分和对应学生的学号。考试满分为100-得分可能会有小数-由于考试评分要求-小数位只会是0或0-5" tabindex="-1"><a class="header-anchor" href="#_226-请使用php设计一个函数-对学生英语考试得分从高到低排序-输入时所有学生的学号和考试得分-返回排好序的考试得分和对应学生的学号。考试满分为100-得分可能会有小数-由于考试评分要求-小数位只会是0或0-5" aria-hidden="true">#</a> 226.<strong>请使用PHP设计一个函数，对学生英语考试得分从高到低排序，输入时所有学生的学号和考试得分，返回排好序的考试得分和对应学生的学号。考试满分为100，得分可能会有小数，由于考试评分要求，小数位只会是0或0.5</strong></h4>
<p>要求：
请不要使用qsort等系统内置排序函数
请使用你认为最快最优的方法实现该函数并使排序的性能最高。（嘀嗒团）</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216202250028.png" alt="image-20211216202250028"></p>
<h4 id="_227-列举流行的ajax框架-说明ajax实现原理是什么及json在ajax中起什么作用-鑫众人云" tabindex="-1"><a class="header-anchor" href="#_227-列举流行的ajax框架-说明ajax实现原理是什么及json在ajax中起什么作用-鑫众人云" aria-hidden="true">#</a> 227.列举流行的Ajax框架？说明Ajax实现原理是什么及json在Ajax中起什么作用？（鑫众人云）</h4>
<p>流行的Ajax框架有jQuery，Prototype，Dojo，MooTools。
Ajax的工作原理是一个页面的指定位置可以加载另一个页面所有的输出内容，这样就实现了一个静态页面也能获取到数据库中的返回数据信息了。所以Ajax技术实现了一个静态网页在不刷新整个页面的情况下与服务器通信，减少了用户等待时间，同时也从而降低了网络流量，增强了客户体验的友好程度。
在使用Ajax时，涉及到数据传输，即将数据从服务器返回到客户端，服务器端和客户端分别使用不同的脚步语言来处理数据，这就需要一种通用的数据格式，XML和json就是最常用的两种，而json比XML更简单。</p>
<h4 id="_228-在unix或windows系统内以-为单位分配资源以-单位分配时间调度-亿邮" tabindex="-1"><a class="header-anchor" href="#_228-在unix或windows系统内以-为单位分配资源以-单位分配时间调度-亿邮" aria-hidden="true">#</a> 228.在UNIX或windows系统内以（）为单位分配资源以（）单位分配时间调度（亿邮）</h4>
<p>进程，时间片</p>
<h4 id="_229-正则表达式中-的作用分别是什么-亿邮" tabindex="-1"><a class="header-anchor" href="#_229-正则表达式中-的作用分别是什么-亿邮" aria-hidden="true">#</a> 229.<strong>正则表达式中</strong>？+的作用分别是什么（亿邮）</h4>
<p>？+都有用来匹配数量的，*表示0或多个，？表示0个或1个，+表示1个或多个。</p>
<h4 id="_230-写出你所知道的xml解析器-亿邮" tabindex="-1"><a class="header-anchor" href="#_230-写出你所知道的xml解析器-亿邮" aria-hidden="true">#</a> 230.写出你所知道的XML解析器（亿邮）</h4>
<p>DOM，SAX，SimpleXML，其中前两种是通用的解析器，和具体语言无关，而SimpleXML则是PHP提供的解析器。</p>
<h4 id="_231-在程序中表示时间可以使用哪几种变量类型-亿邮" tabindex="-1"><a class="header-anchor" href="#_231-在程序中表示时间可以使用哪几种变量类型-亿邮" aria-hidden="true">#</a> 231.在程序中表示时间可以使用哪几种变量类型（亿邮）</h4>
<p>在PHP中可以使用int或字符串来表示（php中没有日期时间类型），在MySQL中，可以使用int，date，datetime，timestamp。</p>
<h4 id="_232-使用utf-8编码存储中文姓名-一般会分配多少个字节的存储空间-亿邮" tabindex="-1"><a class="header-anchor" href="#_232-使用utf-8编码存储中文姓名-一般会分配多少个字节的存储空间-亿邮" aria-hidden="true">#</a> 232.使用Utf-8编码存储中文姓名，一般会分配多少个字节的存储空间（亿邮）</h4>
<p>UTF-8编码是可变长编码，对于中文而言，一个字符使用3个字节来存储。</p>
<h4 id="_234-如果要求每隔5分钟执行一次脚本five-php-如何实现-卓望" tabindex="-1"><a class="header-anchor" href="#_234-如果要求每隔5分钟执行一次脚本five-php-如何实现-卓望" aria-hidden="true">#</a> 234.如果要求每隔5分钟执行一次脚本five.php，如何实现？（卓望）</h4>
<p>用到的函数ignore_user_abort(),set_time_limit(0),sleep($interval)，此代码只要运行一次后关闭浏览器即可。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216203558873.png" alt="image-20211216203558873"></p>
<h4 id="_235-假设有一个博客系统-数据库存储采用mysql-用户数量为1000万-预计文章总数为10亿-每天有至少10万的更新量-每天访问量为5000万-对数据库的读写操作的比例超过10-1-你如何设计该系统-以确保其系统高效-稳定的运行-提示-可以从数据库设计-系统框架-及网络架构方面进行描述-可以自由发挥-新浪网技术部" tabindex="-1"><a class="header-anchor" href="#_235-假设有一个博客系统-数据库存储采用mysql-用户数量为1000万-预计文章总数为10亿-每天有至少10万的更新量-每天访问量为5000万-对数据库的读写操作的比例超过10-1-你如何设计该系统-以确保其系统高效-稳定的运行-提示-可以从数据库设计-系统框架-及网络架构方面进行描述-可以自由发挥-新浪网技术部" aria-hidden="true">#</a> 235.假设有一个博客系统，数据库存储采用mysql，用户数量为1000万，预计文章总数为10亿，每天有至少10万的更新量，每天访问量为5000万，对数据库的读写操作的比例超过10：1，你如何设计该系统，以确保其系统高效，稳定的运行？提示：可以从数据库设计，系统框架，及网络架构方面进行描述，可以自由发挥（新浪网技术部）</h4>
<h6 id="相关题目-我们希望开发一个门户系统-数据存储采用mysql-用户数量为1000万-预计文章总数为10亿-日更新量至少为10万-日访问量为5000万-对数据库的读写操作比例超过10-1-你如何设计该系统-以确保其高效-稳定的运行-提示-可以从数据库设计-系统框架及网络架构方面进行描述-自由发挥-鑫众人云" tabindex="-1"><a class="header-anchor" href="#相关题目-我们希望开发一个门户系统-数据存储采用mysql-用户数量为1000万-预计文章总数为10亿-日更新量至少为10万-日访问量为5000万-对数据库的读写操作比例超过10-1-你如何设计该系统-以确保其高效-稳定的运行-提示-可以从数据库设计-系统框架及网络架构方面进行描述-自由发挥-鑫众人云" aria-hidden="true">#</a> 相关题目：我们希望开发一个门户系统，数据存储采用MySQL，用户数量为1000万，预计文章总数为10亿，日更新量至少为10万，日访问量为5000万，对数据库的读写操作比例超过10:1，你如何设计该系统，以确保其高效，稳定的运行？（提示：可以从数据库设计，系统框架及网络架构方面进行描述，自由发挥）（鑫众人云）</h6>
<h6 id="项目设计-假设有一个包含tag功能的博客系统-数据库存储采用mysql-用户数量为1000万-预计文章总数为10亿-每天有至少10万的更新量-每天访问量为5000万-对数据库的读写操作的比例超过10-1。你如何设计该系统-以确保其系统高效-稳定的运行-提示-可以从数据库设计-系统框架-及网络架构方面进行描述-可以写代码-伪代码辅助说明-可以自由发挥-小米" tabindex="-1"><a class="header-anchor" href="#项目设计-假设有一个包含tag功能的博客系统-数据库存储采用mysql-用户数量为1000万-预计文章总数为10亿-每天有至少10万的更新量-每天访问量为5000万-对数据库的读写操作的比例超过10-1。你如何设计该系统-以确保其系统高效-稳定的运行-提示-可以从数据库设计-系统框架-及网络架构方面进行描述-可以写代码-伪代码辅助说明-可以自由发挥-小米" aria-hidden="true">#</a> 项目设计：假设有一个包含Tag功能的博客系统，数据库存储采用mysql，用户数量为1000万，预计文章总数为10亿，每天有至少10万的更新量，每天访问量为5000万，对数据库的读写操作的比例超过10：1。你如何设计该系统，以确保其系统高效，稳定的运行?提示：可以从数据库设计，系统框架，及网络架构方面进行描述，可以写代码/伪代码辅助说明，可以自由发挥(小米)</h6>
<h4 id="_237-php中-如何获得一个数组的键值-酷讯" tabindex="-1"><a class="header-anchor" href="#_237-php中-如何获得一个数组的键值-酷讯" aria-hidden="true">#</a> 237.PHP中，如何获得一个数组的键值？（酷讯）</h4>
<p>使用key()可以获得数组中当前元素的键名，使用current()则可以返回当前元素的值。
使用array_keys()则可以得到数组中所有的键名。
使用foreach结构foreach($arr as $key=&gt;$value)可以通过$key和$value分别获取键名和值。</p>
<h4 id="_238-编写函数取得上一月的最后一天" tabindex="-1"><a class="header-anchor" href="#_238-编写函数取得上一月的最后一天" aria-hidden="true">#</a> 238.<strong>编写函数取得上一月的最后一天</strong></h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216210202777.png" alt="image-20211216210202777"></p>
<h4 id="_240-php中web上传文件的原理是什么-如何限制上传文件的大小" tabindex="-1"><a class="header-anchor" href="#_240-php中web上传文件的原理是什么-如何限制上传文件的大小" aria-hidden="true">#</a> 240.php中WEB上传文件的原理是什么，如何限制上传文件的大小？</h4>
<p>上传文件的表单使用post方式，并且要在form中添加<code v-pre>enctype='multipart/form-data'</code>。
一般可以加上隐藏域：<code v-pre>&lt;input type=hidden name='MAX_FILE_SIZE' value=dddddd&gt;</code>，位置在file域前面。
value的值是上传文件的客户端字节限制。可以避免用户在花时间等待上传大文件之后才发现文件过大上传失败的麻烦。
使用file文件域来选择要上传的文件，当点击提交按钮之后，文件会被上传到服务器中的临时目录，在脚本运行结束时会被销毁，所以应该在脚本结束之前，将其移动到服务器上的某个目录下，可以通过函数move_uploaded_file()来移动临时文件，要获取临时文件的信息，使用$_FILES。</p>
<p>限制上传文件大小的因素有：</p>
<ol>
<li>客户端的隐藏域MAX_FILE_SIZE的数值（可以被绕开）。</li>
<li>服务器端的upload_max_filesize，post_max_size和memory_limit。这几项不能够用脚本来设置。</li>
<li>自定义文件大小限制逻辑。即使服务器的限制是能自己决定，也会有需要个别考虑的情况。所以这个限制方式经常是必要的。</li>
</ol>
<h4 id="_242-怎么把文件保存到指定目录-怎么避免上传文件重名问题" tabindex="-1"><a class="header-anchor" href="#_242-怎么把文件保存到指定目录-怎么避免上传文件重名问题" aria-hidden="true">#</a> 242.怎么把文件保存到指定目录？怎么避免上传文件重名问题？</h4>
<p>可以自己设置上传文件的保存目录，与文件名拼凑形成一个文件路径，使用move_uploaded_file()，就可以完成将文件保存到指定目录。
可以通过上传的文件名获取到文件后缀，然后使用<code v-pre>时间戳+随机数+文件后缀</code>的方式为文件重新命名，这样就避免了重名。</p>
<h4 id="_243-函数能返回脚本里的任意行中调用的函数的名称。该函数同时还经常被用在调试中-用来判断错误是如何发生的。-奇矩互动" tabindex="-1"><a class="header-anchor" href="#_243-函数能返回脚本里的任意行中调用的函数的名称。该函数同时还经常被用在调试中-用来判断错误是如何发生的。-奇矩互动" aria-hidden="true">#</a> 243._____函数能返回脚本里的任意行中调用的函数的名称。该函数同时还经常被用在调试中，用来判断错误是如何发生的。（奇矩互动）</h4>
<p>debug_print_backtrace()</p>
<h4 id="_244-列举出你所知道的php系统函数库例如-数学函数库-亿邮" tabindex="-1"><a class="header-anchor" href="#_244-列举出你所知道的php系统函数库例如-数学函数库-亿邮" aria-hidden="true">#</a> 244.列举出你所知道的php系统函数库例如，数学函数库(亿邮)</h4>
<p>mysql，gd，pdo，XML，zip，filesystem，mail等</p>
<h4 id="_245-请描述如下url重写规则的用意。-卓望" tabindex="-1"><a class="header-anchor" href="#_245-请描述如下url重写规则的用意。-卓望" aria-hidden="true">#</a> 245.<strong>请描述如下URL重写规则的用意。（卓望）</strong></h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216210736490.png" alt="image-20211216210736490"></p>
<p>如果REQUEST_FILENAME文件存在，就直接访问文件，不进行下面的rewrite规则，
如果REQUEST_FILENAME目录存在，就直接访问目录，不进行下面的rewrite规则，
RewriteRule./index.php[L]的意思是把所有的请求都给index.php处理。</p>
<h4 id="_246-请描述php-或其他语言-session的运行机制-大型网站中session方面应注意什么-小米" tabindex="-1"><a class="header-anchor" href="#_246-请描述php-或其他语言-session的运行机制-大型网站中session方面应注意什么-小米" aria-hidden="true">#</a> 246.请描述PHP(或其他语言)Session的运行机制，大型网站中Session方面应注意什么？（小米）</h4>
<p>session机制是一种服务器端的机制，它将数据保存到服务器端。
当程序需要为某个客户端的请求创建一个session的时候，服务器首先检查这个客户端的请求里是否已包含了一个session标识，称为sessionid，如果已包含一个sessionid则说明以前已经为此客户端创建过session，服务器就按照sessionid把这个session检索出来使用（如果检索不到，可能会新建一个），如果客户端请求不包含sessionid，则为此客户端创建一个session并且生成一个与此session相关联的sessionid，sessionid的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个sessionid将被在本次响应中返回给客户端以cookie的形式保存。</p>
<p>session在大访问量网站上确实影响系统性能，影响性能的原因之一由文件系统设计造成，在同一个目录下超过10000个文件时，文件的定位将非常耗时。另外就是小文件的效率问题，一般我们的session数据都不会太大（1～2K），如果有大量这样1～2K的文件在磁盘上，IO效率肯定会很差，我们可以采用改写session存储机制，比如存放到数据库中。</p>
<h4 id="_247-在子网掩码为255-255-255-248的局域网中能够同时使用的ip有多少个-亿邮" tabindex="-1"><a class="header-anchor" href="#_247-在子网掩码为255-255-255-248的局域网中能够同时使用的ip有多少个-亿邮" aria-hidden="true">#</a> 247.在子网掩码为255.255.255.248的局域网中能够同时使用的IP有多少个？（亿邮）</h4>
<p>6个，255.255.255.248换算成二进制就是11111111.11111111.11111111.11111000
后面的三位用来表示主机，前面的29位用来表示网络。
三位表示主机，就是可以用来表示2＾3＝8个，再减去网络地址和广播地址，就是6个了。</p>
<h4 id="_248-简述tcp协议的三次握手过程。-亿邮" tabindex="-1"><a class="header-anchor" href="#_248-简述tcp协议的三次握手过程。-亿邮" aria-hidden="true">#</a> 248.简述Tcp协议的三次握手过程。（亿邮）</h4>
<p>TCP是主机对主机层的传输控制协议，提供可靠的连接服务，采用三次握手确认建立一个连接：
第一次握手：建立连接时，客户端发送syn包(syn=j)到服务器，并进入SYN_SEND状态，等待服务器确认；
第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
第三次握手：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。
完成三次握手，客户端与服务器开始传送数据。</p>
<h4 id="_249-通过页面输入用户名abc和密码123登录到www-10086-cn-请写出该次请求的http协议报文-包括请求行、消息报头、请求正文-。-卓望" tabindex="-1"><a class="header-anchor" href="#_249-通过页面输入用户名abc和密码123登录到www-10086-cn-请写出该次请求的http协议报文-包括请求行、消息报头、请求正文-。-卓望" aria-hidden="true">#</a> 249.<strong>通过页面输入用户名abc和密码123登录到www.10086.cn，请写出该次请求的HTTP协议报文(包括请求行、消息报头、请求正文)。(卓望)</strong></h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Post www.10086.cn HTTP/1.1 
Accept:text/html,application/xhtml+xml,*/*
Referer:http://localhost/a.html
Accept-Language:zh-CN
User-Agent:Mozilla/5.0
Content-Type:application/x-www-form-urlencoded
Accept-Encoding:gzip,deflate
Host:localhost
Content-length:25
Connection:Keep-Alive

username=abc&amp;password=123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_250-http协议中几个状态码的含义-503-500-401-403-404-200-301-302。。。" tabindex="-1"><a class="header-anchor" href="#_250-http协议中几个状态码的含义-503-500-401-403-404-200-301-302。。。" aria-hidden="true">#</a> 250.HTTP协议中几个状态码的含义:503 500 401 403 404 200 301 302。。。</h4>
<p>200 : 请求成功，请求的数据随之返回。
301 : 永久性重定向。
302 : 暂时行重定向。
401 : 当前请求需要用户验证。
403 : 服务器拒绝执行请求，即没有权限。
404 : 请求失败，请求的数据在服务器上未发现。
500 : 服务器错误。一般服务器端程序执行错误。
503 : 服务器临时维护或过载。这个状态时临时性的。
————————————————</p>
<h4 id="_252-一些编译php时的configure-参数" tabindex="-1"><a class="header-anchor" href="#_252-一些编译php时的configure-参数" aria-hidden="true">#</a> 252.一些编译php时的configure 参数</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>–prefix=/usr/local/php    php安装目录
–with-config-file-path=/usr/local/php/etc 指定php.ini位置
–with-mysql=/usr/local/mysql mysql安装目录，对mysql的支持
–with-mysqli=/usr/local/mysql/bin/mysql_config mysqli文件目录,优化支持
–enable-safe-mode 打开安全模式
–enable-ftp 打开ftp的支持
–enable-zip 打开对zip的支持
–with-bz2 打开对bz2文件的支持 
–with-jpeg-dir 打开对jpeg图片的支持
–with-png-dir 打开对png图片的支持
–with-freetype-dir 打开对freetype字体库的支持
–without-iconv关闭iconv函数，种字符集间的转换
–with-libxml-dir 打开libxml2库的支持
–with-xmlrpc 打开xml-rpc的c语言
–with-zlib-dir 打开zlib库的支持
–with-gd 打开gd库的支持
更多可以使用 ./configure help 查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_253-向php传入参数的三种方法" tabindex="-1"><a class="header-anchor" href="#_253-向php传入参数的三种方法" aria-hidden="true">#</a> 253.向php传入参数的三种方法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>	/*
     * 方法一 使用$argc $argv
     *  在命令行下运行 /usr/local/php/bin/php ./getopt.php -f 123 -g 456
     */
    if ($argc > 1){
        print_r($argv);
    }
    /**
     * 运行结果
     *
     sync@MySUSE11:~/web_app/channel3/interface> /usr/local/php/bin/php ./getopt.php -f 123 -g 456
        Array
        (
            [0] => ./getopt.php
            [1] => -f
            [2] => 123
            [3] => -g
            [4] => 456
        )
     /*
     * 方法二 使用getopt函数（）
     *  在命令行下运行 /usr/local/php/bin/php ./getopt.php -f 123 -g 456
     */
    $options = "f:g:";
    $opts = getopt( $options );
    print_r($opts);
    /**
     * 运行结果
     *
     sync@MySUSE11:~/web_app/channel3/interface> /usr/local/php/bin/php ./getopt.php -f 123 -g 456
        Array
        (
            [f] => 123
            [g] => 456
        )
    /*
     * 方法三 提示用户输入，然后获取输入的参数。有点像C语言
     *  在命令行下运行 /usr/local/php/bin/php ./getopt.php
     */
    fwrite(STDOUT, "Enter your name: ");
    $name = trim(fgets(STDIN));
    fwrite(STDOUT, "Hello, $name!");
    /**
     * 运行结果
     *
     sync@MySUSE11:~/web_app/channel3/interface> /usr/local/php/bin/php ./getopt.php
     Enter your name: francis
     Hello, francis!
     */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_257-php处理数组的常用函数-重点看函数的-参数-和-返回值" tabindex="-1"><a class="header-anchor" href="#_257-php处理数组的常用函数-重点看函数的-参数-和-返回值" aria-hidden="true">#</a> 257.PHP处理数组的常用函数？（重点看函数的‘参数’和‘返回值’）</h4>
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
<h4 id="_177-用户在网站表单提交数据的时候-为了防止脚本攻击-比如用户输入alert-111-php端接收数据的时候-应该如何处理" tabindex="-1"><a class="header-anchor" href="#_177-用户在网站表单提交数据的时候-为了防止脚本攻击-比如用户输入alert-111-php端接收数据的时候-应该如何处理" aria-hidden="true">#</a> 177.用户在网站表单提交数据的时候，为了防止脚本攻击（比如用户输入<script>alert（111）；</script>），php端接收数据的时候，应该如何处理？</h4>
<p>htmlspecialchars($_POST[‘title’]);</p>
<h4 id="_126-如何杜绝xss攻击-如何杜绝csrf攻击" tabindex="-1"><a class="header-anchor" href="#_126-如何杜绝xss攻击-如何杜绝csrf攻击" aria-hidden="true">#</a> 126.如何杜绝XSS攻击? 如何杜绝CSRF攻击?</h4>
<p>（1）strip_tags可以初步过滤,也可以自己写过滤函数针对特殊标签进行处理,用ascii码进行替换
（2）在Web应用程序侧防御CSRF漏洞，一般都是利用referer、token或者验证码，tokenf方式还是比较可信</p>
<h4 id="_239-如果需要原样输出用户输入的内容-在数据入库前-要用哪个函数处理" tabindex="-1"><a class="header-anchor" href="#_239-如果需要原样输出用户输入的内容-在数据入库前-要用哪个函数处理" aria-hidden="true">#</a> 239.如果需要原样输出用户输入的内容，在数据入库前，要用哪个函数处理？</h4>
<p>htmlspecialchars或者htmlentities</p>
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
<h4 id="_92-请简述项目中优化sql语句执行效率的方法-从哪些方面-sql语句性能如何分析-重点" tabindex="-1"><a class="header-anchor" href="#_92-请简述项目中优化sql语句执行效率的方法-从哪些方面-sql语句性能如何分析-重点" aria-hidden="true">#</a> 92.请简述项目中优化sql语句执行效率的方法,从哪些方面,sql语句性能如何分析?（重点）</h4>
<p>（1）选择最有效率的表名顺序</p>
<p>（2）WHERE子句中的连接顺序</p>
<p>（3）SELECT子句中避免使用‘*’</p>
<p>（4）用Where子句替换HAVING子句</p>
<p>（5）通过内部函数提高SQL效率</p>
<p>（6）避免在索引列上使用计算。</p>
<p>（7）提高GROUP BY 语句的效率, 可以通过将不需要的记录在GROUP BY 之前过滤掉。</p>
<h2 id="三-高级面试题" tabindex="-1"><a class="header-anchor" href="#三-高级面试题" aria-hidden="true">#</a> 三.高级面试题：</h2>
<h4 id="_134-php的垃圾收集机制是怎样的" tabindex="-1"><a class="header-anchor" href="#_134-php的垃圾收集机制是怎样的" aria-hidden="true">#</a> 134.PHP的垃圾收集机制是怎样的?</h4>
<p>PHP可以自动进行内存管理，清除不再需要的对象。
PHP使用了引用计数(reference counting)这种单纯的垃圾回收(garbage collection)机制。每个对象都内含一个引用计数器，每个reference连接到对象，计数器加1。当reference离开生存空间或被设为NULL，计数器减1。当某个对象的引用计数器为零时，PHP知道你将不再需要使用这个对象，释放其所占的内存空间。</p>
<h4 id="_135-使对象可以像数组一样进行foreach循环-要求属性必须是私有。-iterator模式的php5实现-写一类实现iterator接口" tabindex="-1"><a class="header-anchor" href="#_135-使对象可以像数组一样进行foreach循环-要求属性必须是私有。-iterator模式的php5实现-写一类实现iterator接口" aria-hidden="true">#</a> 135.使对象可以像数组一样进行foreach循环，要求属性必须是私有。(Iterator模式的PHP5实现，写一类实现Iterator接口)</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_138-请使用socket相关函数-非curl-实现如下功能-构造一个post请求-发送到指定http-server的指定端口的指定请求路径-如http-www-example-com-8080-test-。请求中包含以下变量" tabindex="-1"><a class="header-anchor" href="#_138-请使用socket相关函数-非curl-实现如下功能-构造一个post请求-发送到指定http-server的指定端口的指定请求路径-如http-www-example-com-8080-test-。请求中包含以下变量" aria-hidden="true">#</a> 138.请使用socket相关函数（非curl）实现如下功能：构造一个post请求，发送到指定http server的指定端口的指定请求路径（如http://www.example.com:8080/test）。请求中包含以下变量：</h4>
<p>用户名（username）：金团网</p>
<p>密码（pwd）：&amp;123=321&amp;321=123&amp;</p>
<p>个人简介（intro）：Hello world!</p>
<p>且该http server需要以下cookie来进行简单的用户动作跟踪：</p>
<p>cur_query：you&amp;me</p>
<p>last_tm：...（上次请求的unix时间戳，定为当前请求时间前10分钟）</p>
<p>cur_tm：...（当前请求的unix时间戳）</p>
<p>设置超时为10秒，发出请求后，将http server的响应内容输出。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function encode($data, $sep = ‘&amp;’) {
	while (list($k,$v) = each($data)) {
		$encoded .= ($encoded ? "$sep" : "");
		$encoded .= rawurlencode($k)."=".rawurlencode($v);
	}
	Return $encoded;
}
Function post($url, $post, $cookie) {
	$url = parse_url($url);
	$post = encode($data, ‘&amp;’);
	$cookie = encode($cookieArray, ‘;
	’);
	$fp = fsockopen($url['host'], $url['port'] ? $url['port'] : 80, $errno, $errstr, 10);
	if (!$fp) return "Failed to open socket to $url[host]";
	fputs($fp, sprintf("POST %s%s%s HTTP/1.0\n", $url['path'], $url['query'] ? "?" : "", $url['query']));
	fputs($fp, "Host: $url[host]\n");
	fputs($fp, "Content-type: application/x-www-form-urlencoded\n");
	fputs($fp, "Content-length: " . strlen($encoded) . "\n");
	fputs($fp, "Cookie: $cookie\n\n");
	fputs($fp, "Connection: close\n\n");
	fputs($fp, "$post \n");
	while (!feof($fp)) {
		echo fgets($fp, 128);
	}
	fclose($fp);
}
$url = ‘http://www.example.com:8080/test’;
$encoded = username=金团网&amp; pwd=
$post = array(
 ‘username’=> ‘金团网’,
 ‘pwd => ‘&amp;123=321&amp;321=123&amp;’,
 ‘intro => ‘Hello world!’
);
$cookie = array(
 ‘cur_query’ => ‘you&amp;me,
 ‘last_tm’ => time() - 600,
 ‘cur_tm ‘=> time()
);
Post($url, $post, $cookie);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216210922094.png" alt="image-20211216210922094"></p>
<h4 id="_139-你用什么方法检查php脚本的执行效率-通常是脚本执行时间-和数据库sql的效率-通常是数据库query时间-并定位和分析脚本执行和数据库查询的瓶颈所在" tabindex="-1"><a class="header-anchor" href="#_139-你用什么方法检查php脚本的执行效率-通常是脚本执行时间-和数据库sql的效率-通常是数据库query时间-并定位和分析脚本执行和数据库查询的瓶颈所在" aria-hidden="true">#</a> 139.你用什么方法检查PHP脚本的执行效率（通常是脚本执行时间）和数据库SQL的效率（通常是数据库Query时间），并定位和分析脚本执行和数据库查询的瓶颈所在？</h4>
<p>​		1．脚本执行时间，启用xdebug，使用WinCacheGrind分析。</p>
<p>​		2．数据库查询，mysql使用EXPLAIN分析查询，启用slow query log记录慢查询。</p>
<h4 id="_140-用mysql的查询分析语法explain来优化查询和索引" tabindex="-1"><a class="header-anchor" href="#_140-用mysql的查询分析语法explain来优化查询和索引" aria-hidden="true">#</a> 140.用MySql的查询分析语法explain来优化查询和索引 ?</h4>
<h4 id="_141-请举例说明在你的开发过程中用什么方法来加快页面的加载速度" tabindex="-1"><a class="header-anchor" href="#_141-请举例说明在你的开发过程中用什么方法来加快页面的加载速度" aria-hidden="true">#</a> 141.请举例说明在你的开发过程中用什么方法来加快页面的加载速度?</h4>
<p>​		生成静态HTML，生成xml</p>
<p>​		可不用数据库的尽量不用数据库把变量参数存于文本.
​		打开opcode缓存</p>
<h4 id="_142-表中有a-b-c三列-用sql语句实现-当a列大于b列时选择a列否则选择b列-当b列大于c列时选择b列否则选择c列。" tabindex="-1"><a class="header-anchor" href="#_142-表中有a-b-c三列-用sql语句实现-当a列大于b列时选择a列否则选择b列-当b列大于c列时选择b列否则选择c列。" aria-hidden="true">#</a> 142.表中有A B C三列,用SQL语句实现：当A列大于B列时选择A列否则选择B列，当B列大于C列时选择B列否则选择C列。</h4>
<p>答：select case when A&gt;B then A else B end, case when B&gt;C then B else C end From test</p>
<h4 id="_143-如何排查-php-网站运行速度慢的原因" tabindex="-1"><a class="header-anchor" href="#_143-如何排查-php-网站运行速度慢的原因" aria-hidden="true">#</a> 143.<strong>如何排查 PHP 网站运行速度慢的原因</strong></h4>
<p>· 首先，使用浏览器的开发人员工具(Chrome)或Firefox的Firebug，确定，问题出在前端，还是后端。查看瀑布图，看看是卡在了服务器处理脚本上（典型特征是文档Waiting的时间特别长），还是前端（大量的图片、大量的JS、好多Flash）。<em>90%网站性能问题是由前端造成的。</em></p>
<p>· 若确定是服务器端问题，看看PHP版本是不是过低了、使用<em>XDebug</em>的Profile结合<em>Webgrind</em>等，看看到底哪些函数执行的次数最多、单次时间最长、执行总时间最长，找到根源一击必杀!PHP的编译器不对PHP代码进行任何优化，所以某种意义上蛮考研PHPer的功力。</p>
<p>· 问题有没有可能出在数据库上？（慢查询日志 slow_query_log,慢查询时间：long_query_time）链接、查询的时间是不是过长了？</p>
<p>· <em>缓存、缓存、缓存</em>！能缓存的都缓存了木有～</p>
<p>· 若确定是前端问题，最基础的先看看YSlow(YSlow是Yahoo发布的一款基于FireFox的插件。)的给出的那些提示都做的怎么样。</p>
<h4 id="_144-php5中魔术方法函数有哪几个-请举例说明各自的用法" tabindex="-1"><a class="header-anchor" href="#_144-php5中魔术方法函数有哪几个-请举例说明各自的用法" aria-hidden="true">#</a> 144.PHP5中魔术方法函数有哪几个，请举例说明各自的用法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>__sleep 
__wakeup 
__toString 
__set_state 
__construct, 
__destruct 
__call, 
__get, 
__set, 
__isset, 
__unset 
__sleep, 
__wakeup, 
__toString, 
__set_state, 
__clone 
__autoload 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_145-大概内容是监控ip攻击-ip数据已用文本记录下来-已经按时间有序-记录数量小于10000000-时间从00-00-00到23-59-59" tabindex="-1"><a class="header-anchor" href="#_145-大概内容是监控ip攻击-ip数据已用文本记录下来-已经按时间有序-记录数量小于10000000-时间从00-00-00到23-59-59" aria-hidden="true">#</a> 145.大概内容是监控ip攻击 ip数据已用文本记录下来  已经按时间有序  记录数量小于10000000  时间从00：00：00到23：59：59</h4>
<p>ip范围为0.0.0.0-255.255.255.255
文本输入格式为 第一行为总数据行数  以后各行为记录数据 每行前面是ip 后面是攻击时间 如
11.23.123.33 3：22：22
124.222.134.234 13：33：45
12.231.0.0 23：14：11</p>
<p>设置一个阈值 在x秒内连续访问y次的（9php.com）ip被认作是攻击ip（1秒内可有多个数据包 包括来自同一ip的（9php.com）） 根据记录文本输出并不再重复输出攻击ip  要求编程实现</p>
<h4 id="_146-缓存-逐层深入-先从缓存组织机制-到l1-l2-内存的使用优化-再到smp环境下多进程线程的缓存使用" tabindex="-1"><a class="header-anchor" href="#_146-缓存-逐层深入-先从缓存组织机制-到l1-l2-内存的使用优化-再到smp环境下多进程线程的缓存使用" aria-hidden="true">#</a> 146.缓存  逐层深入 先从缓存组织机制 到L1 L2 内存的使用优化 再到smp环境下多进程线程的缓存使用</h4>
<h4 id="_147-网络相关-先问dos-ddos原理-区别-性价比-接着再问syn-flood对被攻击方的影响主要在哪-要求越具体越好-最后问如果要对一个餐馆进行攻击-该如何去做" tabindex="-1"><a class="header-anchor" href="#_147-网络相关-先问dos-ddos原理-区别-性价比-接着再问syn-flood对被攻击方的影响主要在哪-要求越具体越好-最后问如果要对一个餐馆进行攻击-该如何去做" aria-hidden="true">#</a> 147.网络相关 先问dos ddos原理 区别 性价比  接着再问syn flood对被攻击方的影响主要在哪 要求越具体越好  最后问如果要对一个餐馆进行攻击 该如何去做</h4>
<h4 id="_148-count的完整用法" tabindex="-1"><a class="header-anchor" href="#_148-count的完整用法" aria-hidden="true">#</a> 148.count的完整用法：</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$b[0]  = 7;
$b[5]  = 9;
$b[10] = 11;
var_dump(count($b));  //int(3)
var_dump(count(null));//int(0)
var_dump(count(false));//int(1)
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上后两个在php7.2会报警告</p>
<p>后两个在Php8会致命错误，必须是Countable对象类型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$food = array('fruits' => array('orange', 'banana', 'apple'),
              'veggie' => array('carrot', 'collard', 'pea'));

// recursive count
var_dump(count($food, COUNT_RECURSIVE));//int(8)

// normal count
var_dump(count($food)); //int(2)

?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>count — 计算数组中的单元数目或对象中的属性个数
int count ( mixed $var [, int $mode ] ), 如果 var 不是数组类型或者实现了 Countable 接口的对象，将返回 1，有一个例外，如果 var 是 NULL 则结果是 0。</p>
<p>对于对象，如果安装了 SPL，可以通过实现 Countable 接口来调用 count()。该接口只有一个方法 count()，此方法返回 count() 函数的返回值。</p>
<h4 id="_150-写个函数用来对二维数组排序。" tabindex="-1"><a class="header-anchor" href="#_150-写个函数用来对二维数组排序。" aria-hidden="true">#</a> 150.写个函数用来对二维数组排序。</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function array_sort_by_any_row($array_name, $row_id, $order_type) {
	$array_temp=array();
	foreach($array_name as $key=>$value) {
		$array_temp[$key]=$value[$row_id];
	}
	if($order_type==="ASC") {
		//顺序
		asort($array_temp);
	} else {
		arsort($array_temp);
	}
	$result_array=array();
	foreach($array_temp as $key=>$value) {
		$result_array[$key]=$array_name[$key];
	}
	return $result_array;
}
$arr = array(array('num'=>5, 'value'=>6),
array('num'=>2, 'value'=>39),
array('num'=>36, 'value'=>29)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>151.一群猴子排成一圈，按1，2，...，n依次编号。然后从第1只开始数，数到第m只,把它踢出圈，从它后面再开始数，再数到第m只，在把它踢出去...，如此不停的进行下去，直到最后只剩下一只猴子为止，那只猴子就叫做大王。要求编程模拟此过程，输入m、n, 输出最后那个大王的编号。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function yuesefu($n,$m) {
	$r=0;
    for($i=2; $i&lt;=$n; $i++) {
        $r=($r+$m)%$i;
    }
	return $r+1;
}
print_r(yuesefu(3,3));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_152-max的知识点" tabindex="-1"><a class="header-anchor" href="#_152-max的知识点" aria-hidden="true">#</a> 152.max的知识点？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
echo max(1, 3, 5, 6, 7);  // 7
echo max(array(2, 4, 5)); // 5

// When 'hello' is cast as integer it will be 0. Both the parameters are equally
// long, so the order they are given in determines the result
echo max(0, 'hello');     // 0
echo max('hello', 0);     // hello

echo max('42', 3); // '42'

// Here 0 > -1, so 'hello' is the return value.
echo max(-1, 'hello');    // hello

// With multiple arrays of different lengths, max returns the longest
$val = max(array(2, 2, 2), array(1, 1, 1, 1)); // array(1, 1, 1, 1)

// 对多个数组，max 从左向右比较。
   // 因此在本例中：2 == 2，但 4 &lt; 5
$val = max(array(2, 4, 8), array(2, 5, 7)); // array(2, 5, 7)

// 如果同时给出数组和非数组作为参数，则总是将数组视为
   // 最大值返回
$val = max('string', array(2, 5, 7), 42);   // array(2, 5, 7)
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_153-min的知识点" tabindex="-1"><a class="header-anchor" href="#_153-min的知识点" aria-hidden="true">#</a> 153.min的知识点？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
echo min(2, 3, 1, 6, 7);  // 1
echo min(array(2, 4, 5)); // 2

echo min(0, 'hello');     // 0
echo min('hello', 0);     // hello
echo min('hello', -1);    // -1

// 对多个数组，min 从左向右比较。
// 因此在本例中：2 == 2，但 4 &lt; 5
$val = min(array(2, 4, 8), array(2, 5, 1)); // array(2, 4, 8)

// 如果同时给出数组和非数组作为参数，则不可能返回数组，因为
// 数组被视为最大的
$val = min('string', array(2, 5, 7), 42);   // string
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_154-array-merge的知识点" tabindex="-1"><a class="header-anchor" href="#_154-array-merge的知识点" aria-hidden="true">#</a> 154.array_merge的知识点？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$array1 = array("color" => "red", 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
$result = array_merge($array1, $array2);
print_r($result);
?>
Array
(
    [color] => green
    [0] => 2
    [1] => 4
    [2] => a
    [3] => b
    [shape] => trapezoid
    [4] => 4
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$array1 = array();
$array2 = array(1 => "data");
$result = array_merge($array1, $array2);
?>
Array
(
    [0] => data
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$array1 = array(0 => 'zero_a', 2 => 'two_a', 3 => 'three_a');
$array2 = array(1 => 'one_b', 3 => 'three_b', 4 => 'four_b');
$result = $array1 + $array2;
var_dump($result);
?>
第一个数组的键名将会被保留。在两个数组中存在相同的键名时，第一个数组中的同键名的元素将会被保留，第二个数组中的元素将会被忽略。
array(5) {
  [0]=>
  string(6) "zero_a"
  [2]=>
  string(5) "two_a"
  [3]=>
  string(7) "three_a"
  [1]=>
  string(5) "one_b"
  [4]=>
  string(6) "four_b"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>array_merge() 合并非数组的类型
&lt;?php
$beginning = 'foo';
$end = array(1 => 'bar');
$result = array_merge((array)$beginning, (array)$end);
print_r($result);
?>
Array
    (
        [0] => foo
        [1] => bar
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_154-file-get-contents知识点" tabindex="-1"><a class="header-anchor" href="#_154-file-get-contents知识点" aria-hidden="true">#</a> 154.file_get_contents知识点</h4>
<p>file_get_contents — 将整个文件读入一个字符串</p>
<p>和 <a href="https://www.php.net/manual/zh/function.file.php" target="_blank" rel="noopener noreferrer">file()<ExternalLinkIcon/></a> 一样，只除了 <strong>file_get_contents()</strong> 把文件读入一个字符串。将在参数 <code v-pre>offset</code> 所指定的位置开始读取长度为 <code v-pre>length</code> 的内容。如果失败，<strong>file_get_contents()</strong> 将返回 <strong><code v-pre>false</code></strong>。</p>
<p><strong>file_get_contents()</strong> 函数是用来将文件的内容读入到一个字符串中的首选方法。如果操作系统支持还会使用内存映射技术来增强性能。</p>
<p>如果要打开有特殊字符的 URL （比如说有空格），就需要使用 <a href="https://www.php.net/manual/zh/function.urlencode.php" target="_blank" rel="noopener noreferrer">urlencode()<ExternalLinkIcon/></a> 进行 URL 编码。</p>
<img src=".\img\php面试题最全篇\image-20211216212937055.png" alt="image-20211216212937055" style="zoom:50%;" />
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216213020453.png" alt="image-20211216213020453"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216213028227.png" alt="image-20211216213028227"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216213118047.png" alt=""></p>
<p>此函数可安全用于二进制对象。</p>
<h4 id="_155-s-s-这个正则表达式作用是-匹配以0个或多个空白符开头或者0个或多个空白符结尾的字符串" tabindex="-1"><a class="header-anchor" href="#_155-s-s-这个正则表达式作用是-匹配以0个或多个空白符开头或者0个或多个空白符结尾的字符串" aria-hidden="true">#</a> 155. (^\s*)|(\s*$)这个正则表达式作用是：<em><strong><strong>匹配以0个或多个空白符开头或者0个或多个空白符结尾的字符串</strong></strong></em>；</h4>
<h4 id="_156-使用oracle中日期转换函数-把字符串-2007-1-18-21-22-13-转换成日期类型" tabindex="-1"><a class="header-anchor" href="#_156-使用oracle中日期转换函数-把字符串-2007-1-18-21-22-13-转换成日期类型" aria-hidden="true">#</a> 156.使用oracle中日期转换函数,把字符串“2007-1-18 21:22:13”转换成日期类型</h4>
<p>to_date('$tr_time','YYYY-MM-DD HH24:MI:SS')</p>
<h4 id="_157-linux下-如何查看所有用户" tabindex="-1"><a class="header-anchor" href="#_157-linux下-如何查看所有用户" aria-hidden="true">#</a> 157.linux下，如何查看所有用户_________________________;</h4>
<p>cat /etc/passwd</p>
<h4 id="_158-用php编写代码在页面输出当前的北京时间-格式为-2007-01-18-09-22-03" tabindex="-1"><a class="header-anchor" href="#_158-用php编写代码在页面输出当前的北京时间-格式为-2007-01-18-09-22-03" aria-hidden="true">#</a> 158.用PHP编写代码在页面输出当前的北京时间，格式为“2007-01-18 09:22:03”</h4>
<p>date_default_timezone_set('PRC');</p>
<hr>
<p>echo date(&quot;Y-m-d H:i:s&quot;,time());</p>
<h4 id="_160-简述gbk、gb2312、big5-、gb18030" tabindex="-1"><a class="header-anchor" href="#_160-简述gbk、gb2312、big5-、gb18030" aria-hidden="true">#</a> 160.简述GBK、GB2312、BIG5 、GB18030</h4>
<p>GB2312支持的汉字较少，GBK是相比GB2312汉字更为丰富，GB18030相比GBK增加了一些少数名族汉字汉字库更为多样，但是常人很难用到，一般简体中文使用GBK。而繁体中文使用BIG5.</p>
<h4 id="_161-如果某段与数据库交互的程序运行较慢你将如何处理" tabindex="-1"><a class="header-anchor" href="#_161-如果某段与数据库交互的程序运行较慢你将如何处理" aria-hidden="true">#</a> 161.如果某段与数据库交互的程序运行较慢你将如何处理?</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>一是首先提高数据库的查询速度,比如增加索引,优化表的结构.
二是优化程序代码,如果查询比较多,可以尽量用条件查询,减少查询语句,比如能用一条查询语句就不用两条
三就是提高服务器的速度，优化服务器，把不必要的进程关掉。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_163-linux上的crond服务可对服务器设置计划任务-请问如果我需设置每2分钟执行一次-tmp-test-sh的脚本应如何设置计划任务-请写出操作方法。" tabindex="-1"><a class="header-anchor" href="#_163-linux上的crond服务可对服务器设置计划任务-请问如果我需设置每2分钟执行一次-tmp-test-sh的脚本应如何设置计划任务-请写出操作方法。" aria-hidden="true">#</a> 163.Linux上的crond服务可对服务器设置计划任务，请问如果我需设置每2分钟执行一次/tmp/test.sh的脚本应如何设置计划任务，请写出操作方法。</h4>
<p>首先切换到root用户</p>
<p>然后crontab -e</p>
<p>然后写入命令：2 * * * *  xxx.php  /tmp/test.sh</p>
<h4 id="_164-在很多时候-我们可以通过apache的主配置文件来设置对test目录的访问权限控制-如-http-ip-test请问如果需设置test下的一个子目录的访问控制权限-是否可以在主配置文件中修改-如果不可以应如何解决。" tabindex="-1"><a class="header-anchor" href="#_164-在很多时候-我们可以通过apache的主配置文件来设置对test目录的访问权限控制-如-http-ip-test请问如果需设置test下的一个子目录的访问控制权限-是否可以在主配置文件中修改-如果不可以应如何解决。" aria-hidden="true">#</a> 164.在很多时候，我们可以通过apache的主配置文件来设置对test目录的访问权限控制，如：http://IP/test请问如果需设置test下的一个子目录的访问控制权限，是否可以在主配置文件中修改，如果不可以应如何解决。</h4>
<p><strong>可以，如果不可以在需要控制的子目录下创建.htaccess文件，写入访问控制</strong>。</p>
<h4 id="_165-计算某段字符串中某个字符出现的次数-例如-gdfgfdgd59gmkblg中g的次数-php" tabindex="-1"><a class="header-anchor" href="#_165-计算某段字符串中某个字符出现的次数-例如-gdfgfdgd59gmkblg中g的次数-php" aria-hidden="true">#</a> 165.计算某段字符串中某个字符出现的次数（例如: gdfgfdgd59gmkblg中g的次数）（PHP）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$text = 'gdfgfdgd59gmkblg';
echo substr_count ( $text,'g');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_166-如何通过php程序防止外部页面提交表单-编写一段代码" tabindex="-1"><a class="header-anchor" href="#_166-如何通过php程序防止外部页面提交表单-编写一段代码" aria-hidden="true">#</a> 166.如何通过php程序防止外部页面提交表单？编写一段代码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?
session_start();
if(isset($_POST['name']) &amp;&amp; !empty($_POST['name'])) {
	if($_POST['check']==$_SESSION['check']) {
		echo '正常访问';
	} else {
		echo '外部访问';
	}
}
$token=md5(uniqid(rand(),true));
$_SESSION['check']=$token;
?>
&lt;form method="post" action="">
&lt;input type="text" name="name">&lt;input type="text" name="check" value="&lt;?=$token;?>">&lt;input type="submit">
&lt;/form>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_167-简述论坛中无限分类的实现原理。-新浪" tabindex="-1"><a class="header-anchor" href="#_167-简述论坛中无限分类的实现原理。-新浪" aria-hidden="true">#</a> 167.简述论坛中无限分类的实现原理。（新浪）</h4>
<p>创建类别表如下：</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216205536362.png" alt="image-20211216205536362"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211216205549713.png" alt="image-20211216205549713"></p>
<h4 id="写出192-168-0-1-ip地址的二进制和10进制表示形式" tabindex="-1"><a class="header-anchor" href="#写出192-168-0-1-ip地址的二进制和10进制表示形式" aria-hidden="true">#</a> 写出192.168.0.1 ip地址的二进制和10进制表示形式</h4>
<h4 id="一个字节占多少bit-一个ipv4地址占几个字节-一个ipv6地址呢-8bit-4字节-16字节" tabindex="-1"><a class="header-anchor" href="#一个字节占多少bit-一个ipv4地址占几个字节-一个ipv6地址呢-8bit-4字节-16字节" aria-hidden="true">#</a> 一个字节占多少bit ? 一个IPv4地址占几个字节? 一个IPv6地址呢?  8bit  ,  4字节，16字节</h4>
<h4 id="_28-请使用伪语言结合数据结构冒泡排序法对以下一组数据进行排序-10-2-36-14-10-25-23-85-99-45。-重点" tabindex="-1"><a class="header-anchor" href="#_28-请使用伪语言结合数据结构冒泡排序法对以下一组数据进行排序-10-2-36-14-10-25-23-85-99-45。-重点" aria-hidden="true">#</a> 28.请使用伪语言结合数据结构冒泡排序法对以下一组数据进行排序 10 2 36 14 10 25 23 85 99 45。（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function bubble_sort(&amp; $arr){
    $number=count($arr);
    for($i=0;$i&lt;$number-1;$i++){
     for($j=0;$j&lt;$number-1-$i;$j++){
      if($arr[$j]>$arr[$j+1]){
          $tmp=$arr[$j];
          $arr[$j]=$arr[$j+1];
          $arr[$j+1]=$tmp;
      }
     }
    } 
}

$str="10 2 36 14 10 25 23 85 99 45";
$arr=explode(" ",$str);
bubble_sort($arr);
echo "&lt;pre>";
var_dump($arr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> </h4>
<h4 id="请用php写出以下程序-假设网络中有一台服务器192-168-1-101-开放端口8899进行侦听-请用php的socket相关知识-写出一个简易的client-连接到server-并发送字符串-hello-server-。程序仅对连接的成功和失败进行简易错误判断和处理即可。" tabindex="-1"><a class="header-anchor" href="#请用php写出以下程序-假设网络中有一台服务器192-168-1-101-开放端口8899进行侦听-请用php的socket相关知识-写出一个简易的client-连接到server-并发送字符串-hello-server-。程序仅对连接的成功和失败进行简易错误判断和处理即可。" aria-hidden="true">#</a> 请用php写出以下程序：假设网络中有一台服务器192.168.1.101，开放端口8899进行侦听，请用php的socket相关知识，写出一个简易的client，连接到server，并发送字符串”hello server!”。程序仅对连接的成功和失败进行简易错误判断和处理即可。</h4>
<h4 id="封装一函数、实现统计指定位置上的字符出现在整个字符串中的次数功能-eg-字符串-test-for-test-指定第四位-t-为要查找的字符-运行后返回4-出现了4次" tabindex="-1"><a class="header-anchor" href="#封装一函数、实现统计指定位置上的字符出现在整个字符串中的次数功能-eg-字符串-test-for-test-指定第四位-t-为要查找的字符-运行后返回4-出现了4次" aria-hidden="true">#</a> 封装一函数、实现统计指定位置上的字符出现在整个字符串中的次数功能，eg：字符串“test_for_test”,指定第四位‘t’为要查找的字符，运行后返回4（出现了4次）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function func($str,$pos){
	$s = str[$pos-1];
	substr_count($s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如果发布一条评论限制在120字之内-请写出如何截取多字节字符串-可以用js或php截取。-编码为utf8-如不清楚可以假设其编码范围-。" tabindex="-1"><a class="header-anchor" href="#如果发布一条评论限制在120字之内-请写出如何截取多字节字符串-可以用js或php截取。-编码为utf8-如不清楚可以假设其编码范围-。" aria-hidden="true">#</a> 如果发布一条评论限制在120字之内，请写出如何截取多字节字符串，可以用js或php截取。（编码为UTF8，如不清楚可以假设其编码范围）。</h4>
<h4 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> </h4>
<h4 id="写出一个购物车网站基本实现流程和相关模型。" tabindex="-1"><a class="header-anchor" href="#写出一个购物车网站基本实现流程和相关模型。" aria-hidden="true">#</a> 写出一个购物车网站基本实现流程和相关模型。</h4>
<h4 id="服务器在运行的过程中-随着用户访问数量的增长-如何通过优化-保证性能-如果数据库已经达到最优化-请设计出继续升级的解决方案" tabindex="-1"><a class="header-anchor" href="#服务器在运行的过程中-随着用户访问数量的增长-如何通过优化-保证性能-如果数据库已经达到最优化-请设计出继续升级的解决方案" aria-hidden="true">#</a> 服务器在运行的过程中，随着用户访问数量的增长，如何通过优化，保证性能？如果数据库已经达到最优化，请设计出继续升级的解决方案</h4>
<h4 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> </h4>
<h4 id="php是否有安全问题-如果有-请列举说明。" tabindex="-1"><a class="header-anchor" href="#php是否有安全问题-如果有-请列举说明。" aria-hidden="true">#</a> Php是否有安全问题，如果有，请列举说明。</h4>
<h4 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> </h4>
<h4 id="ajax技术利用了什么协议-简述ajax的工作机制。" tabindex="-1"><a class="header-anchor" href="#ajax技术利用了什么协议-简述ajax的工作机制。" aria-hidden="true">#</a> ajax技术利用了什么协议？简述ajax的工作机制。</h4>
<h4 id="利用ajax开发时-需要考虑浏览器的兼容性么-如果需要-常需要考虑哪些-ajax开发常会遇到哪些问题-试举例说明" tabindex="-1"><a class="header-anchor" href="#利用ajax开发时-需要考虑浏览器的兼容性么-如果需要-常需要考虑哪些-ajax开发常会遇到哪些问题-试举例说明" aria-hidden="true">#</a> 利用ajax开发时，需要考虑浏览器的兼容性么？如果需要，常需要考虑哪些？ajax开发常会遇到哪些问题，试举例说明？</h4>
<h4 id="利用ajax传输数据时-一般默认使用的是什么编码方式-如果出现乱码如何处理" tabindex="-1"><a class="header-anchor" href="#利用ajax传输数据时-一般默认使用的是什么编码方式-如果出现乱码如何处理" aria-hidden="true">#</a> 利用ajax传输数据时，一般默认使用的是什么编码方式？如果出现乱码如何处理？</h4>
<h4 id="说说你对缓存技术的了解" tabindex="-1"><a class="header-anchor" href="#说说你对缓存技术的了解" aria-hidden="true">#</a> 说说你对缓存技术的了解？</h4>
<h4 id="描述php-ini中的以下几个配置选项的作用" tabindex="-1"><a class="header-anchor" href="#描述php-ini中的以下几个配置选项的作用" aria-hidden="true">#</a> 描述php.ini中的以下几个配置选项的作用？</h4>
<pre><code>allow_call_time_pass_reference
</code></pre>
<p>​	vartiable_order</p>
<p>​	magic_quotes_gpc</p>
<p>​	magic_quotes_runtime</p>
<h2 id="二-前端部分" tabindex="-1"><a class="header-anchor" href="#二-前端部分" aria-hidden="true">#</a> 二.前端部分：</h2>
<h4 id="_1-content-abc-和-content-find-abc-哪个效率更高" tabindex="-1"><a class="header-anchor" href="#_1-content-abc-和-content-find-abc-哪个效率更高" aria-hidden="true">#</a> 1.$(“#content .abc”) 和$(“#content”).find(“.abc”) 哪个效率更高？</h4>
<p>后者，后者使用原生的document.getElementByN ame，ID&gt;Tag&gt;Class.</p>
<p>$(“#content”).find(“.abc”) .find()方法会调用浏览器的原生方法（getElementById，getElementByName，getElementByTagName等等），所以速度较快。比$(“#content .abc”) 效率快很多。</p>
<p>第一种慢的原因：在于 jQuery 内部使用各种选择器链条的选择顺序是从右到左，所以这条语句是先选.abc，然后再一个个过滤出父元素#content，这导致它慢很多。</p>
<h4 id="_2-ajax-中如何执行跨域访问-同子域的情况如何处理-不同子域的情况如何处理-重点" tabindex="-1"><a class="header-anchor" href="#_2-ajax-中如何执行跨域访问-同子域的情况如何处理-不同子域的情况如何处理-重点" aria-hidden="true">#</a> 2.ajax 中如何执行跨域访问？同子域的情况如何处理？不同子域的情况如何处理？（重点）</h4>
<p>跨域的存在是因为浏览器的同源策略，一个源表示协议，端口，域名都相同，否则就形成了跨域。</p>
<p>①jsonp，非官方协议，简单实用</p>
<p>通过JavaScript的callback方式调用，jQuery封装了jsonp方式的请求。</p>
<p>callback({“result”:0,”msg”:”ok”,”data”:{xxx}})</p>
<p>②服务器响应头</p>
<p>header(&quot;Access-Control-Allow-Origin:*&quot;);</p>
<p>/星号表示所有的域都可以接受，/</p>
<p>header(“Access-Control-Allow-Methods:GET,POST&quot;);</p>
<p>③iframe实现跨域</p>
<h4 id="_3-this-和-this-关键字在-jquery-中有何不同-重点" tabindex="-1"><a class="header-anchor" href="#_3-this-和-this-关键字在-jquery-中有何不同-重点" aria-hidden="true">#</a> 3.$(this) 和 this 关键字在 jQuery 中有何不同？（重点）</h4>
<p>​		一个是jquery对象，一个是js的属性</p>
<h4 id="_4-jsonp-和-iframe-跨域访问原理是什么-重点" tabindex="-1"><a class="header-anchor" href="#_4-jsonp-和-iframe-跨域访问原理是什么-重点" aria-hidden="true">#</a> 4.jsonp 和 iframe 跨域访问原理是什么？（重点）</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>一个jsonp的例子，js代码：
//JAVASCRIPT
$.getJSON('http://www.example.com/jsonp.php?callback=?','firstname=Jeff',function(res){
  alert('Your name is '+res.fullname);
});
  //SERVER SIDE
 &lt;?php
 	$fname = $_GET['firstname'];
   	if($fname=='Jeff'){
     	//header("Content-Type: application/json");
     	echo $_GET['callback'] . '(' . "{'fullname' : 'Jeff Hansen'}" . ')';
   	}
 ?>
Ajax发jsonp请求：
$.ajax({
    url: "http://api.flickr.com/services/rest/?method=flickr.interestingness.getList ",
    dataType: "jsonp",
    jsonp: 'jsoncallback',
    success: function(data) {
      alert(data);
    }
});
注意：对于上面第二个ajax示例，url中不必带有callback参数，jquery会自动添加。
Jsonp参数是callback名称，指的就是服务端$_GET[‘callback’]里的callback的名称。
实际发的请求就是http://api.flickr.com/services/rest/?method=flickr.interestingness.getList?jsoncallback=jquery332232323&amp;_ 1471419449018
dataType: 'jsonp'，用于表示这是一个 JSONP 请求。
jsonp: 'callback'，用于告知服务器根据这个参数获取回调函数的名称，通常约定就叫 callback。
jsonpCallback: 'dosomething'，回调函数的名称，也是前面callback参数的值，可省略，jquery会自动生成。

JSONP 的原理：
AJAX 无法跨域是受到“同源政策”的限制，但是带有src属性的标签
缺点：防止xss注入
Iframe跨域
如果两个窗口一级域名相同，只是二级域名不同，document.domain设置为同一个主域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-利用css样式表定义已访问的超链接字体大小为14pt-颜色为red。" tabindex="-1"><a class="header-anchor" href="#_5-利用css样式表定义已访问的超链接字体大小为14pt-颜色为red。" aria-hidden="true">#</a> 5.利用CSS样式表定义已访问的超链接字体大小为14pt,颜色为red。</h4>
<p>​			a:visited { font-size: 14pt; color: red; }</p>
<h4 id="_6-如何通过javascript判断一个窗口是否已经被屏蔽" tabindex="-1"><a class="header-anchor" href="#_6-如何通过javascript判断一个窗口是否已经被屏蔽" aria-hidden="true">#</a> 6.如何通过javascript判断一个窗口是否已经被屏蔽</h4>
<p>​	答：获取open()的返回值，如果是null，就是屏蔽了</p>
<h4 id="_7-ajax请求写法" tabindex="-1"><a class="header-anchor" href="#_7-ajax请求写法" aria-hidden="true">#</a> 7.ajax请求写法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;script>
$(function(){
	$('input,select,textarea').blur(function(){
		var url = '{:U('Back/System/updateone')}';
		var data = {
			'seting_id' : $(this).attr('data_setting_id'),
			'value':$(this).val()
		};

		if($(this).attr('type') == 'checkbox'){
			var namestr = $(this).attr('name');
			
		}
		$.post(url,data,function(response){
			if(response.error != 0){
				console.log('编辑配置项失败');
			}
		},'json');
	});
})
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-css布局有哪些" tabindex="-1"><a class="header-anchor" href="#_8-css布局有哪些" aria-hidden="true">#</a> 8.css布局有哪些？</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a) 弹性布局：总体宽度和内部所以栏的值都以em为单位编写，这样使布局能够使用浏览器的指定基本字体大小缩放。
b) 固定布局：总体宽度和所有栏目的值都以像素为单位，布局位于浏览器中间。
c) 流体布局: 总体宽度和其中所有栏的值都以百分比编写，百分比根据浏览器的大小计算
d) 混合布局： 两种或者两种以上的方式布局，例如弹性和流体混合布局，总体宽度使用百分比，左侧则以em为单位编写
e) 绝对定位布局：外栏有绝对定位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-请问-div和span-p标签三者间的区别。" tabindex="-1"><a class="header-anchor" href="#_9-请问-div和span-p标签三者间的区别。" aria-hidden="true">#</a> 9.请问，div和span,p标签三者间的区别。</h4>
<h4 id="_10-请列举几个-meta元素。" tabindex="-1"><a class="header-anchor" href="#_10-请列举几个-meta元素。" aria-hidden="true">#</a> 10.请列举几个 meta元素。</h4>
<h4 id="_11-请写出一条至少3个节点的dom树。" tabindex="-1"><a class="header-anchor" href="#_11-请写出一条至少3个节点的dom树。" aria-hidden="true">#</a> 11.请写出一条至少3个节点的DOM树。</h4>
<h4 id="_12-实现点击按钮弹出窗口的代码。" tabindex="-1"><a class="header-anchor" href="#_12-实现点击按钮弹出窗口的代码。" aria-hidden="true">#</a> 12.实现点击按钮弹出窗口的代码。</h4>
<h4 id="_13-css中class和id的区别。" tabindex="-1"><a class="header-anchor" href="#_13-css中class和id的区别。" aria-hidden="true">#</a> 13.Css中class和id的区别。</h4>
<h4 id="_14-实现这样一个功能-加载页面时-如果遇到失效的图片-为页面美观起效-用默认图片进行取代占位。" tabindex="-1"><a class="header-anchor" href="#_14-实现这样一个功能-加载页面时-如果遇到失效的图片-为页面美观起效-用默认图片进行取代占位。" aria-hidden="true">#</a> 14.实现这样一个功能，加载页面时，如果遇到失效的图片，为页面美观起效，用默认图片进行取代占位。</h4>
<h4 id="_15-怪异模式和xhtml模式下ie的宽的区别。" tabindex="-1"><a class="header-anchor" href="#_15-怪异模式和xhtml模式下ie的宽的区别。" aria-hidden="true">#</a> 15.怪异模式和XHTML模式下IE的宽的区别。</h4>
<h4 id="_16-实现框架的标签-使用举例。" tabindex="-1"><a class="header-anchor" href="#_16-实现框架的标签-使用举例。" aria-hidden="true">#</a> 16.实现框架的标签，使用举例。</h4>
<h4 id="_17-如何在本地网页中实现点击按钮关闭计算机-说明即可-。" tabindex="-1"><a class="header-anchor" href="#_17-如何在本地网页中实现点击按钮关闭计算机-说明即可-。" aria-hidden="true">#</a> 17.如何在本地网页中实现点击按钮关闭计算机（说明即可）。</h4>
<h4 id="_18-简述ubb-code-的实现原理" tabindex="-1"><a class="header-anchor" href="#_18-简述ubb-code-的实现原理" aria-hidden="true">#</a> 18.简述UBB code 的实现原理.</h4>
<h4 id="_19-window-a-中用window-open-打开了window-b-如何从窗口b调用窗口a中的内容-a、b仅仅是窗口的代号-不是窗口名字" tabindex="-1"><a class="header-anchor" href="#_19-window-a-中用window-open-打开了window-b-如何从窗口b调用窗口a中的内容-a、b仅仅是窗口的代号-不是窗口名字" aria-hidden="true">#</a> 19.window（A）中用window.open（）打开了window（B），如何从窗口B调用窗口A中的内容？A、B仅仅是窗口的代号，不是窗口名字</h4>
<p>window.opener.document.getElementById()</p>
<h4 id="_20-了解ajax吗-用过吗" tabindex="-1"><a class="header-anchor" href="#_20-了解ajax吗-用过吗" aria-hidden="true">#</a> 20.了解ajax吗？用过吗？……</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>var xmlhttp = new XMLHttpRequest();
var xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
xmlhttp.open('get',url,true);
xmlhttp.onreadystatechang=function(){
    if(xmlhttp.readyState ==4){
        if(xmlhttp.status==200){alert(xmlhttp.responseText);xmlhttp=null;}
    }
}
xmlhttp.send(null);



Ajax.open("POST",url,true);
//如果是POST方式提交数据，下两行必不可少
Ajax.setrequestheader("content-length",sendData.length);
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send(sendData);// 要POST的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_21-如何添加html-元素的事件-有几钟方法-举例" tabindex="-1"><a class="header-anchor" href="#_21-如何添加html-元素的事件-有几钟方法-举例" aria-hidden="true">#</a> 21.如何添加html 元素的事件,有几钟方法，举例</h4>
<p>直接在页面html元素中添加；</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>例子：&lt;img onclick="alert(‘hello’);" src="hello.jpg">

调用脚本激发控件的某个事件；例子：object.attachEvent("onclick",alert(‘hello’));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22-css盒模型。" tabindex="-1"><a class="header-anchor" href="#_22-css盒模型。" aria-hidden="true">#</a> 22.css盒模型。</h4>
<h4 id="_23-javascript中的prototype。" tabindex="-1"><a class="header-anchor" href="#_23-javascript中的prototype。" aria-hidden="true">#</a> 23.javascript中的prototype。</h4>
<h4 id="_24-javascript中this对象的作用域。" tabindex="-1"><a class="header-anchor" href="#_24-javascript中this对象的作用域。" aria-hidden="true">#</a> 24.javascript中this对象的作用域。</h4>
<h4 id="_25-ie和firefox事件冒泡的不同。" tabindex="-1"><a class="header-anchor" href="#_25-ie和firefox事件冒泡的不同。" aria-hidden="true">#</a> 25.IE和firefox事件冒泡的不同。</h4>
<h4 id="_26-什么是怪异模式-标准模式-近标准模式。" tabindex="-1"><a class="header-anchor" href="#_26-什么是怪异模式-标准模式-近标准模式。" aria-hidden="true">#</a> 26.什么是怪异模式,标准模式，近标准模式。</h4>
<h4 id="_27-dtd的定义" tabindex="-1"><a class="header-anchor" href="#_27-dtd的定义" aria-hidden="true">#</a> 27.DTD的定义</h4>
<h4 id="_28-ie-firefox常用hack" tabindex="-1"><a class="header-anchor" href="#_28-ie-firefox常用hack" aria-hidden="true">#</a> 28.IE/firefox常用hack.</h4>
<h4 id="_29-firefox-ie下的前端js-css调试工具。" tabindex="-1"><a class="header-anchor" href="#_29-firefox-ie下的前端js-css调试工具。" aria-hidden="true">#</a> 29.firefox,IE下的前端js/css调试工具。</h4>
<h4 id="javascript的常用对象有哪些" tabindex="-1"><a class="header-anchor" href="#javascript的常用对象有哪些" aria-hidden="true">#</a> Javascript的常用对象有哪些？</h4>
<h4 id="js表单弹出对话框函数是-获得输入焦点函数是" tabindex="-1"><a class="header-anchor" href="#js表单弹出对话框函数是-获得输入焦点函数是" aria-hidden="true">#</a> JS表单弹出对话框函数是?获得输入焦点函数是?</h4>
<h4 id="js的转向函数是-怎么引入一个外部js文件" tabindex="-1"><a class="header-anchor" href="#js的转向函数是-怎么引入一个外部js文件" aria-hidden="true">#</a> JS的转向函数是?怎么引入一个外部JS文件?</h4>
<h4 id="通过js创建一个当前窗口的子窗口-通过程序实现子窗口对父窗口的操作实例" tabindex="-1"><a class="header-anchor" href="#通过js创建一个当前窗口的子窗口-通过程序实现子窗口对父窗口的操作实例" aria-hidden="true">#</a> 通过JS创建一个当前窗口的子窗口，通过程序实现子窗口对父窗口的操作实例？</h4>
<h4 id="通过js实现页面的前进和后退操作" tabindex="-1"><a class="header-anchor" href="#通过js实现页面的前进和后退操作" aria-hidden="true">#</a> 通过JS实现页面的前进和后退操作？</h4>
<h4 id="浏览器ie和非ie浏览器的划分-区别是什么" tabindex="-1"><a class="header-anchor" href="#浏览器ie和非ie浏览器的划分-区别是什么" aria-hidden="true">#</a> 浏览器IE和非IE浏览器的划分，区别是什么？</h4>
<h4 id="设计一个页面-4个-div-第一个div-宽960px-居中-第2-4个div-3等分960px" tabindex="-1"><a class="header-anchor" href="#设计一个页面-4个-div-第一个div-宽960px-居中-第2-4个div-3等分960px" aria-hidden="true">#</a> 设计一个页面(4个 div 第一个div 宽960px 居中;第2-4个div  3等分960px;)</h4>
<h4 id="用javascript取得一个input的值-取得一个input的属性" tabindex="-1"><a class="header-anchor" href="#用javascript取得一个input的值-取得一个input的属性" aria-hidden="true">#</a> 用javascript取得一个input的值？取得一个input的属性？</h4>
<h4 id="用jquery取得一个input的值-取得一个input的属性" tabindex="-1"><a class="header-anchor" href="#用jquery取得一个input的值-取得一个input的属性" aria-hidden="true">#</a> 用Jquery取得一个input的值？取得一个input的属性？</h4>
<h4 id="请您写一段ajax提交的js代码-或者写出ajax提交的过程逻辑。" tabindex="-1"><a class="header-anchor" href="#请您写一段ajax提交的js代码-或者写出ajax提交的过程逻辑。" aria-hidden="true">#</a> 请您写一段ajax提交的js代码，或者写出ajax提交的过程逻辑。</h4>
<h4 id="_30-javascript能否定义二维数组-如果不能你如何解决-重点" tabindex="-1"><a class="header-anchor" href="#_30-javascript能否定义二维数组-如果不能你如何解决-重点" aria-hidden="true">#</a> 30.<strong>javascript能否定义二维数组，如果不能你如何解决？</strong>（重点）</h4>
<p>​	javascript不支持二维数组定义，可以用arr[0] = new array()来解决</p>
<h4 id="_31-假设a-html和b-html在同一个文件夹下面-用javascript实现当打开a-html五秒钟后-自动跳转到b-html。" tabindex="-1"><a class="header-anchor" href="#_31-假设a-html和b-html在同一个文件夹下面-用javascript实现当打开a-html五秒钟后-自动跳转到b-html。" aria-hidden="true">#</a> 31.<strong>假设a.html和b.html在同一个文件夹下面，用javascript实现当打开a.html五秒钟后，自动跳转到b.html。</strong></h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>javascript代码如下：
&lt;script>
function go2b(){
	window.location = "b.html";
	window.close();
}
setTimeout( "go2b()",5000 ); //5秒钟后自动执行go2b()
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-hidden="true">#</a> </h4>
<h4 id="请用html-div-css-的方式实现以下的网页样式布局-10分-p" tabindex="-1"><a class="header-anchor" href="#请用html-div-css-的方式实现以下的网页样式布局-10分-p" aria-hidden="true">#</a> 请用HTML（div）+css 的方式实现以下的网页样式布局（10分，P）</h4>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wpsE7A2.tmp.png" alt="img"><img src="@source/docs/theme-reco/img/php面试题最全篇/wpsE7A3.tmp.png" alt="img"><img src="@source/docs/theme-reco/img/php面试题最全篇/wpsE7A4.tmp.png" alt="img"></p>
<h4 id="谈谈table与div-css网页排版各自的优缺点" tabindex="-1"><a class="header-anchor" href="#谈谈table与div-css网页排版各自的优缺点" aria-hidden="true">#</a> 谈谈table与div+css网页排版各自的优缺点</h4>
<h4 id="css的盒模式" tabindex="-1"><a class="header-anchor" href="#css的盒模式" aria-hidden="true">#</a> css的盒模式</h4>
<h4 id="js中如何实现类似面向对象的封装-您是如何理解js中this关键字" tabindex="-1"><a class="header-anchor" href="#js中如何实现类似面向对象的封装-您是如何理解js中this关键字" aria-hidden="true">#</a> Js中如何实现类似面向对象的封装,您是如何理解js中this关键字</h4>
<h4 id="ie和ff下各自的js调试工具是什么-列举ie和ff下css兼容语法" tabindex="-1"><a class="header-anchor" href="#ie和ff下各自的js调试工具是什么-列举ie和ff下css兼容语法" aria-hidden="true">#</a> IE和FF下各自的js调试工具是什么, 列举IE和FF下CSS兼容语法</h4>
<h4 id="js中闭包的概念及用法" tabindex="-1"><a class="header-anchor" href="#js中闭包的概念及用法" aria-hidden="true">#</a> Js中闭包的概念及用法</h4>
<h4 id="简要列举主要dtd及其特点" tabindex="-1"><a class="header-anchor" href="#简要列举主要dtd及其特点" aria-hidden="true">#</a> 简要列举主要DTD及其特点</h4>
<h4 id="ajax的定义、谈谈ajax的开发经验" tabindex="-1"><a class="header-anchor" href="#ajax的定义、谈谈ajax的开发经验" aria-hidden="true">#</a> Ajax的定义、谈谈ajax的开发经验</h4>
<p>css盒模型。</p>
<p>javascript中的prototype。</p>
<p>javascript中this对象的作用域。</p>
<p>IE和firefox事件冒泡的不同。</p>
<p>什么是怪异模式,标准模式，近标准模式。</p>
<p>DTD的定义。</p>
<p>IE/firefox常用hack。</p>
<p>firefox,IE下的前端js/css调试工具。</p>
<p><img src="https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiYWYyZTFiYmUtNTZlNy00YzVkLTlkMmEtMGUyOTllZWUyMDEwIiwicmVzb3VyY0d1aWQiOiI2NTJkYWM5NS02YmE4LTQ4NzYtYWE2MC05YTdlOTYxZTkzZTYifQ==" alt="img"></p>
<p>正常如果没有笔试的话直接面试，如果有笔试那么请看一看基础题。</p>
<p>麻烦把简历上自己写的知识点都牢记，假如自己并不是很了解，可以提前背诵，百分之八十会根据你简历的知识点拓展问题哦！</p>
<p>面试官大致分为几类:</p>
<ol>
<li>
<p>第一种----层层深入：先让你说一下对***技术的了解，然后细分，内部用到了什么。</p>
</li>
<li>
<ol>
<li>
<p>数据库引擎用的什么（Innodb, Mysiam）。</p>
</li>
<li>
<p>他俩的数据存储结构（.frm ibd/frm mdy mdi）</p>
</li>
<li>
<p>他俩区别是啥(九条，不细说了总的是 事物、锁、主键、mysiam记录总行数等)。</p>
</li>
<li>
<ol>
<li>
<p>这里有个坑是 Innodb 支持主键，Mysiam 不支持主键</p>
</li>
<li>
<ol>
<li>为什么呢（聚簇索引--叶子结点存放的是数据库单条行的记录，而非聚簇索引—叶子节点存储的是数据标识哦，需要回表查询，这也就导致了Innodb比Mysiam快）</li>
</ol>
</li>
</ol>
</li>
<li></li>
<li>
<p>事物的隔离级别（读未提交、已提交、可重复读、串行化）。</p>
</li>
<li>
<p>Innodb 默认是那个级别（可重复读）。</p>
</li>
<li>
<p>各个场景如何复现（）。</p>
</li>
<li>
<p>然后产生的问题是啥（脏读、不可重复读、幻读）。</p>
</li>
<li>
<p>如何避免上述问题出现呢（）。</p>
</li>
</ol>
</li>
<li>
<p>第二种----根据你简历一个个问，并不会深入询问！！！</p>
</li>
<li>
<ol>
<li>简历上第一条说一下你对他的了解</li>
<li>简历上第二条你说一下对他的了解</li>
</ol>
</li>
</ol>
<h4 id="_13-说出-jquery-常用的几个函数" tabindex="-1"><a class="header-anchor" href="#_13-说出-jquery-常用的几个函数" aria-hidden="true">#</a> 13.说出 JQUERY 常用的几个函数？</h4>
<p>$(selector).hide() 隐藏被选元素
$(selector).show() 显示被选元素
$(selector).toggle() 切换（在隐藏与显示之间）被选元素
$(selector).slideDown() 向下滑动（显示）被选元素
$(selector).slideUp() 向上滑动（隐藏）被选元素
$(selector).slideToggle() 对被选元素切换向上滑动和向下
$(selector).fadeIn() 淡入被选元素$(selector).fadeOut() 淡出被选元素
$(selector).fadeTo() 把被选元素淡出为给定的不透明度
$(selector).animate() 对被选元素执行自定义动画</p>
<h4 id="_14-什么是二次开发-二次开发的弊端" tabindex="-1"><a class="header-anchor" href="#_14-什么是二次开发-二次开发的弊端" aria-hidden="true">#</a> 14.什么是二次开发？二次开发的弊端？</h4>
<p>二次开发，简单的说就是在现有的软件上进行定制修改，功能的扩展，然后达到自己想要的功能，一般来说都不会改变原有系统的内核。dede 二次开发就是以 dede 织梦系统为基础进行的二次开发。
弊端：</p>
<p>1）插件限制太多；
2）修改源文件对升级有影响。</p>
<h4 id="_43-请使用javascript写出三种产生一个image-标签的方法-提示-从方法、对象、html角度考虑-重点" tabindex="-1"><a class="header-anchor" href="#_43-请使用javascript写出三种产生一个image-标签的方法-提示-从方法、对象、html角度考虑-重点" aria-hidden="true">#</a> 43. <strong>请使用JavaScript写出三种产生一个Image 标签的方法（提示：从方法、对象、HTML角度考虑）</strong>（重点）</h4>
<p>(1)var img = new Image();</p>
<p>(2)var img = document.createElementById(“image”)</p>
<p>(3)img.innerHTML = “<img src="D:/BaiduNetdiskDownload/计算机书籍笔记/xxx.jpg" />”</p>
<p>205.如何通过javascript判断一个窗口是否已经被屏蔽。</p>
<p>202.解释下面语句的意思：document.form[&quot;formName&quot;].submit;</p>
<h4 id="_131-js中网页前进和后退的代码" tabindex="-1"><a class="header-anchor" href="#_131-js中网页前进和后退的代码" aria-hidden="true">#</a> 131.js中网页前进和后退的代码</h4>
<p>​		前进：history.forward();history.go(1);</p>
<p>​		后退: history.back(); history.go(-1);</p>
<p>186.可以使用哪些方法使用javascript向服务器发出请求且不离开当前页面，简单对比各自的特点（如果存在）</p>
<h2 id="面试知识点" tabindex="-1"><a class="header-anchor" href="#面试知识点" aria-hidden="true">#</a> 面试知识点</h2>
<h3 id="_1-第一部分" tabindex="-1"><a class="header-anchor" href="#_1-第一部分" aria-hidden="true">#</a> 1.第一部分</h3>
<p>你Mysql扩展库，PHP操作mysql</p>
<p>PHP操作mysql数据库的主要扩展库：mysql（面向过程），mysqli（面向过程和对象），pdo（面向对象）</p>
<p>配置mysql扩展库：php.ini加载extension，配置扩展路径extension_dir</p>
<p>PHP操作mysql：原理，连接数据库（mysql_connect[host,user,pass,new_link]），关闭连接（mysql_close），选择数据库（mysql_select_db），发送sql（mysql_query，不同类型sql的返回值不同），解析结果集资源（mysql_num_rows结果集行数，mysql_fetch系列获得结果集中数据，结果集指针，遍历结果集）</p>
<p>其他相关函数：受影响行数（mysql_affected_rows），新增数据的ID（mysql_insert_id），设置结果集指针（mysql_data_seek）</p>
<p>注册成功跳转功能，分页功能（一次性获取，按页获取）</p>
<p>HTTP协议：超文本传输协议，b/s架构项目遵循的基本协议，浏览器服务器通信的基本原理（请求连接（TCP/IP协议），连接成功，浏览器发送请求，服务器处理请求，浏览器处理结果，关闭连接），HTTP协议两部分（请求，响应），url，特点（支持客户/服务器模式，简单快速[只需请求方法和路径]，灵活[任意数据]，无连接[每次连接只处理一个请求]，无状态[事务处理没有记忆能力]）</p>
<p>HTTP请求：四部分（请求行，请求头，空行，请求主体），请求行（请求方式，请求文件，协议/版本），请求头（host，accept-encoding，referer，connection，accept-language，cookie，user-agent，accept，content-length（post），if-modified-since（get），content-type（post）），空白行，请求主体（post请求数据），telnet模拟请求</p>
<p>HTTP响应：四部分（状态行，响应头，空行，响应主体），状态行（协议/版本，状态码，状态说明），响应头（server，date，last-modified，content-length，content-type，location，refresh，content-encodeing，cache-control），空行，响应主体（内容），header之前不能输出，header设置cookie</p>
<p>函数调用前不能输出的函数：session_start，setcookie，header，output_buffering</p>
<p>常用回应状态信息：1XX（服务器接收请求，继续处理），2XX（成功，200），3XX（重定向，302重定向，304没有修改），4XX（请求错误，404找不到，403禁止），5XX（服务器错误，502无效响应）</p>
<p>PHP模拟响应和请求：响应（跳转，刷新，发送图片，下载（application/octet-stream，content-disposition：attachment;filename），请求（fsockopen，fwrite，feof，fgets，get请求，post请求）</p>
<p>面向对象：面向过程（操作流程）和面向对象（操作主体），oop（一种软件设计架构思想）</p>
<p>基本概念：类（对象的抽象），对象（类的实例化/类类型（自定义数据类型）），实例化，成员（类中的变量，函数，常量）</p>
<p>语法操作：定义类（class），实例化（new，带括号，不带括号），强制转换（object），stdClass（空类），访问修饰限定符（var，public，protected，private，区别），对象访问成员（-&gt;），类中成员只有三个（属性，方法和常量，不能echo），属性定义的值必须是固定值，如何访问私有属性（方法，$this）</p>
<p>内存说明：类，对象，方法，属性（从空间使用上划分，非内存划分）</p>
<p>魔术方法：构造方法（初始化），析构方法（释放资源，unset对象），构造方法私有化</p>
<p>构造方法兼容：类名方法</p>
<p>大小写区分：属性，数组下标和变量</p>
<p>对象传递：引用传递</p>
<p>对象比较：==（同类对象且属性值相同），===（同一对象）</p>
<p>DB类：类文件命名（类名.class.php）</p>
<p>作业：封装getAll和getRow方法</p>
<p>自动加载：实例化对象前必须有类定义，自动加载（__autoload），自动加载原理，自动加载冲突（spl_autoload_register）</p>
<p>类常量：定义（const），内存划分，访问（类访问，范围解析操作符，对象访问（方法）），self关键字，self和this区别</p>
<p>静态成员：定义（static），属性，方法，访问（范围解析操作符），静态属性与常量的访问区别</p>
<p>对象计数器制作：思路</p>
<p>静态方法与非静态方法区别（$this）</p>
<p>魔术方法：__toString()（echo对象），__clone()（复制成不同对象，克隆不走构造方法，阻止克隆（private））</p>
<p>单例模式：概念（一个类只有一个对象），原因（省资源），原理（三私一公）</p>
<p>工厂模式：概念（产生对象），原因（方便管理），工厂单例模式</p>
<p>面向对象不一定有类（js）</p>
<p>Oop三大特性：封装，继承，多态</p>
<p>封装：数据和数据操作，制作类的过程，隐藏对象的属性和实现细节（私有化），对外提供使用接口（限制读和写）</p>
<p>继承：一个对象直接使用另一个对象的属性和方法，减少代码的重复性</p>
<p>多态：接口的多种不同的实现方式，PHP中没有</p>
<p>继承：语法（extends），继承原理，继承成员控制（protected），继承访问（子类访问父类，父类访问子类）</p>
<p>继承冲突：重写，控制级别（子类弱于父类），访问父类同名方法（parent）</p>
<p>PHP单继承，链式继承（多继承），继承的使用（表类继承DB类）</p>
<p>特殊类：不能被继承的类和只能被继承的类，final类，final方法（可以被继承但不能别重写），abstract类（不能实例化），abstract方法</p>
<p>项目设计：项目大，团队多（接口规范，抽象类规范），项目小（不使用）</p>
<p>接口：专门规定类的结构，语法（interface），接口体（常量和方法，不能实现方法，只能public），实现接口（implements），子类必须实现接口所有方法，实现多个接口</p>
<p>面试题：PHP是否支持多继承？如何模拟？接口是不是类？接口是不是抽象类？</p>
<p>PHP重载：用户操作不存在或者不可用的成员属性或者方法时的处理</p>
<p>属性重载：__get()，__set()，__isset()（isset和empty时调用），__unset()（unset调用）</p>
<p>方法重载：__call()，__callStatic()</p>
<p>重载意义：限定用户操作的条件，纠错</p>
<p>作业：最大公约数（辗转相除）</p>
<p>对象保存与还原：file_put_contents保存，file_get_contents获取，对象不能直接保存</p>
<p>序列化：serialize</p>
<p>反序列化：unserialize，PHP_Incomplete_Class，得不到原对象原因（资源释放），引入类文件即可得到原对象，自动加载类，数据库连接失效</p>
<p>对象保存与还原：__wakeup()，__sleep()</p>
<p>对象判断：instanceof，继承对象同属于子类和父类</p>
<p>对象涉及方法：class_exists，interface_exists，method_exists，get_class（得到对象类名），get_parent_class（得到父类名）</p>
<p>对象遍历：属性遍历，常规foreach遍历，类内foreach遍历（$this），类内具体属性遍历（iterator预定义接口）</p>
<p>【PDO】：PDO，功能（方便移植），原理，配置（扩展）</p>
<p>PDO主要类：PDO（数据库连接，sql传输），PDOStatement（结果集，预处理），PDOException（PDO异常处理）</p>
<p>PDO类：构造函数（dsn数据源，用户名，密码），对象销毁（没有提供，unset，null），执行SQL（无结果集exec（增删改），lastInsertId；有结果集PDOStatement query），错误处理（errorCode，errorInfo）</p>
<p>PDOStatement类：相关函数（rowCount，columnCount），遍历结果集（fetch[FETCH_ASSOC，FETCH_NUM，FETCH_BOTH，FETCH_OBJ，FETCH_BOUND]，bindColumn，fetchAll，fetchColumn，fetchObject，setFetchMode），预处理（prepare，execute[array参数]，bindParam[推荐，先绑定后赋值]，bindValue[不推荐，先赋值后绑定，每次都要绑定]），事务处理（beginTransaction，commit，rollBack）</p>
<p>PDO属性设置：setAttribute，getAttribute，属性名与值（PDO::ATTR_AUTOCOMMIT（1,0），PDO::ATTR_CASE（PDO::CASE_LOWER，PDO::CASE_UPPER，PDO::CASE_NATURAL），PDO::ATTR_ERRMODE（PDO::ERRMODE_SILENT，PDO::ERRMODE_WARNING，PDO::ERRMODE_EXCEPTION），PDO::ATTR_PERSISTENT（TRUE，FALSE））</p>
<p>PDOException类：try-catch-throw</p>
<p>反射：reflection反射机制，反射（ReflectionClass::export(类)），反射类内部（new ReflectionClass(类)，getConstants，getProperties，isStatic，getMethods）</p>
<p>Ecshop安装：虚拟主机，gd库扩展，配置数据库，配置后台管理员，安装测试数据，访问后台</p>
<p>购物系统：仿造ecshop制作一个小型的商品管理与购物系统</p>
<p>功能：后台用户登录（表单，session，cookie，验证码），商品分类管理（无限极分类），商品管理（文件处理，缩略图，水印处理，分页，商品批量管理，所见即所得编辑器使用），时间允许（前台商品浏览，购物车动作，用户管理等）</p>
<p>设计项目：从项目管理者角度设计项目（项目架构（框架，源码，开发模式），代码结构（项目目录划分，功能划分）</p>
<p>当前流行开发模式：二次开发，框架开发</p>
<p>数据架构：数据大小，更新频率；两大数据库阵营（SQL，NOSQL），初级架构（表，表功能，表结构，表内数据关系）</p>
<p>前台和后台：前台（用户看，显示数据），后台（管理员看，管理数据），前后台按功能划分，美工和程序员按工作内容划分</p>
<p>项目目录结构，代码分部：项目分前台后台，admin为后台目录；前后台公共部分前台includes下，后台公共文件admin/includes，前后台都有默认访问入口index.php</p>
<p>项目代码设计：数据是核心，代码是访问和管理数据；数据存放在mysql里，PHP通过db.class.php访问数据库（includes下）；逻辑与显示分开；公共功能用类封装（文件上传，图片处理，分页）</p>
<p>后台用户登录功能设计：登录表单（登录，验证码，退出，找回密码，记住密码），admin/templates/login.php，代码由简单到复杂；一类事务请求一个PHP文件（登录：admin/privilege.php）</p>
<p>后台项目初始化：运行环境（错误级别，错误显示），基本目录常量，配置文件系统，公共代码（自动加载函数，跳转等），admin/includes/init.php</p>
<p>Admin/includes/init.php：编码设置（header），目录常量（<strong>DIR</strong>，反斜杠处理，ROOT_DIR，ADMIN_DIR，INCLUDE_DIR，ADMIN_INCLUDE_DIR，ADMIN_TEMPLATE_DIR），5.3低版本目录常量（<strong>FILE</strong>）</p>
<p>配置文件系统：/config/config.php，数据库连接信息，二维数组（便于区分）</p>
<p>加载配置文件：admin/includes/init.php，配置文件目录常量，配置文件全局化（$GLOBALS[‘config’]）</p>
<p>运行环境设置：ini_set()（error_reporting，display_errors），错误级别关系</p>
<p>登录界面：从ecshop拿，js文件，image文件，css文件</p>
<p>登录功能：privilege.php实现，引入初始化文件，引入login.php文件，action（区分动作），if分支判断动作</p>
<p>用户登录表单设计：请求privilege.php，设计隐藏域act，$_REQUEST（GPC，request_order，variables_order）</p>
<p>验证用户信息：设计管理员表（库，表，字段（id，用户名，密码，注册时间，上次登录时间和IP）），插入一条数据，接收用户提交数据进行验证，数据库操作（使用DB类，每张表一个类（/includes/adminTable.class.php））</p>
<p>表类设计：继承db类，属性（table_name，fields）</p>
<p>验证调用表类：自动加载（/includes/function.php），初始化文件引入公共函数库，实例化表对象（传入数据库连接信息，连接数据库），修改实例化方式（db类中自动调用配置文件），使用用户名和密码验证用户（正确得到用户信息，错误返回FALSE），修改用户密码（md5加密）</p>
<p>工作原理分析：用户请求到得到验证结果</p>
<p>验证结果处理：界面跳转（PHP中header，js中document.location.href，HTML中refresh），创建跳转模板/admin/templates/redirect.php，跳转函数admin_redirect在/includes/function.php，privilege中调用跳转函数</p>
<p>验证用户是否登录：定义变量判断，get传参，会话数据</p>
<p>开启会话机制：默认关闭（php.ini的session.auto_start），session_start开启，$_SESSION（访问会话数据），session实现用户登录判断</p>
<p>Session原理：session_start()开启session并读取session文件内容到$_SESSION，脚本结束将$_SESSION内容写到session文件，然后释放$_SESSION变量</p>
<p>会话周期：浏览器关闭session失效，浏览器与服务器会话流程</p>
<p>Cookie会话技术：服务器在浏览器保存数据，cookie原理，session与cookie的区别</p>
<p>Cookie使用：设置cookie，获得cookie（$_COOKIE和$_REQUEST），修改$_COOKIE（再次访问无效），cookie变量有效期，session失效原理，清除cookie（setcookie），cookie目录区分，cookie跨域，cookie变相保存数组</p>
<p>Session文件：存储（php.ini中session.save_path）</p>
<p>Cookie文件：浏览器指定的存储目录，IE和FF区别，FF查看cookie文件</p>
<p>Session登录判定：用户登录时session记录用户信息，index.php中判定session信息，初始化文件开启session</p>
<p>模拟session实现跨脚本</p>
<p>框架布局后台：使用ecshop后台布局，index.php</p>
<p>Index.php实现：与privilege.php处理方式一致，使用ecshop的模板</p>
<p>退出登录：清楚session，跳转到privilege.php登陆页，top.php（target属性）</p>
<p>用户信息显示：$_SESSION，用户上次登录时间（登录后修改上次登录时间）</p>
<p>Session深入：$_SESSION只能是关联数组，session可以保存对象，session过期受cookie影响，session文件销毁（session_destroy，$_SESSION，setcookie），session分层（session.save_path，手动建立文件夹）</p>
<p>禁用cookie后session使用（其他方式让浏览器带sessionID），a标签自动携带sessionID（session.use_trans_id，session.use_only_cookie），PHP脚本传递（手动添加，session_id()，session_name()）</p>
<p>验证码：验证码意义（防恶意请求），原理（Completely Automated Public Turing Test to Tell Computers and Humans Apart (全自动区分计算机和人类的图灵测试)，将验证码内容放到图片上），验证码流程（生成，保存到session中，添加到图片上，用户输入，验证），对比ecshop验证码</p>
<p>GD库：图像处理扩展，GD处理图片流程（创建图片资源（已有或者新建），操作图片（裁剪图片，修改图片，填充图片，缩略图，写验证码），保存或者输出，释放资源）</p>
<p>制作验证码：获得验证码内容，验证码写到session，验证码写到图片，验证码图片显示到表单</p>
<p>封装验证码类：复杂化验证码方法（背景颜色随机，文字颜色随机，添加像素点，添加干扰线）</p>
<p>项目应用验证码：请求动作获得验证码图片，验证用户登录时使用验证码，新增验证验证码方法（验证码类内），点击验证码图片更换验证码（js）</p>
<p>保存用户登录信息：cookie存储记录标识（用户ID），判断用户是否登录（判断session，判断cookie），增加通过用户ID获取用户信息方法，危险</p>
<p>制作商品分类：数据表设计（主键，分类名，排序，父ID），插入数据，category.php，商品分类列表界面，修改连接（menu），商品分类类，调用商品分类的方法，模板显示分类数据</p>
<p>无限极分类：原理（找顶级分类，找子分类），非递归实现（指定父分类），递归（递归点，递归出口），递归原理，缩进（层级标识），根据排序字段排序</p>
<p>构造表全名：表名，db类表前缀，db类中增加表名构造，表类中使用</p>
<p>给字段属性赋值：添加获得表结构方法（获得所有键，主键）</p>
<p>分类文件访问验证：将登录验证放到init.php，引入init.php文件验证，分离需要验证的请求（登录相关不需要验证，$_SERVER[‘SCRIPT_NAME’]，basename()，dir_name()）</p>
<p>分类操作：增加分类（新增表单，提交表单，处理表单数据，分类入库），分类指定上级分类，数组接收数据提交数据，删除分类（提示用户（js），判断分类是否可被删除（是否末级），删除分类）</p>
<p>编辑分类功能：流程（用户点击菜单进入编辑，显示分类数据，用户编辑操作，提交表单，处理编辑数据）</p>
<p>重封装通过id获取数据方法（重复，放到db类），表单添加隐藏分类ID</p>
<p>商品分类完成：没有商品数量，分类列表缓存（判断缓存，更新缓存），无限极分类缩放</p>
<p>商品管理：数据表设计（仿照ecshop），数据插入，goods.php，完善商品列表（菜单连接，动作处理，数据对象操作，列表模板，图标）</p>
<p>分页：流程（确定数据显示数量，确定页数，limit），分页跳转（首页，上一页，下一页，末页，数字页，下拉页）</p>
<p>项目分页：修改配置文件（每页显示数据条数），修改列表功能（页码，每页显示数目参数），修改列表功能（获得总记录数，数据，二维数组），修改调用列表功能</p>
<p>分页类：单独分页不含数据处理（参数），HTML（标签，ID）</p>
<p>删除商品：处理方法（回收站），增加删除标志（修改数据表），删除流程（确认（js），修改删除标志，修改列表功能，更新列表）</p>
<p>回收站操作：分页显示（配置文件，分页类使用），恢复</p>
<p>新增商品：流程（连接，动作，表方法，模板，选项卡功能）</p>
<p>插入功能重复：新增插入方法（db类，验证数组信息，数组拼凑SQL，返回插入结果），调用插入功能</p>
<p>文件上传：post，enctype（mutipart/form-data），$_FILES（专门接收文件数据，字段说明，错误说明（0没有问题，1超出大小，2超出大小，3部分上传，4没有上传，6没有临时文件夹，7文件写入临时文件夹出错）），文件上传原理（PHP服务端），移动临时文件（move_uploaded_file），文件验证（大小，类型，重命名，strrchar）</p>
<p>图片上传类：配置文件（上传大小，上传类型（字符串），上传路径），上传命名规则（不重复，保持原来后缀，易于识别（前缀）），文件上传流程（错误判断，文件大小判断，文件类型判断，重命名，是否上传成功，返回新文件名），文件处理失败商品仍上传（错误提示）</p>
<p>商品插入流程回顾：收集表单数据，设置初始值（点击量），上传文件判断，制作缩略图判断，调用模型，插入数据</p>
<p>制作缩略图：流程（获得图片资源（原始图，目标图），处理（采用，复制），保存或者输出，释放资源），采样（矩形区域确定）</p>
<p>封装缩略图制作：数据获取（原图大小，目标图大小，函数类型使用），缩略图比例（宽高比），缩略图制作流程细化（计算原图宽高和缩略图最大尺寸，确定缩略图大小，创建图片资源（原图，缩略图），采样复制，保存输出，销毁资源）</p>
<p>缩略图补白：缩略图大小固定（不够的地方补白，制作缩略图背景）优劣（方便设计显示，与原图不一致）</p>
<p>水印制作：图片上的标识，两种（文字，图片），基本流程（原图，水印图，合并）</p>
<p>项目水印：配置文件，流程详细（获得原图资源，判断水印图资源，获得水印图资源，获得图片宽高，判断水印位置，计算水印位置，判断合并结果，保存，返回水印图名称），修改上传图片的名字为水印图</p>
<p>MVC：软件设计典范（模型Model，视图View，控制器Controller），输入处理和输出的分离，MVC框架（功能划分M，V，C），PHP代码发展（混编，显示和逻辑分离，数据逻辑与业务逻辑分离），action（C处理一类事务，C包含多个Action），区分（模块module，模型model，模板template）</p>
<p>自动安全更新方法：拼凑sql语句，更新，流程（清理无效字段，拼凑sql语句（更新部分，条件），强制设定条件（判断条件，自动分析条件），返回执行结果）</p>
<p>自动删除：根据ID进行删除（单个=，数组in），流程（参数添加引号，拼凑删除条件，返回删除结果）</p>
<p>Session入库：session入内存，session入库（修改session存储机制），session入库原理，修改session系统（session读写功能），修改流程（准备读写方法，告知session系统（session_set_save_handler()）</p>
<p>Session表设计：字段（sessionID，数据，过期时间）</p>
<p>Session方法完善：读（根据sessionID数据库查询），写（根据sessionID，session数据写入或者更新数据），开启（提取公共连接数据库代码），数据库连接资源作用域，销毁（根据sessionID删除数据），回收（根据配置清理过期session，expire字段），session配置（gc_maxlifetime，gc_probobility，gc_divisor）</p>
<p>封装session类：构造函数（设置session处理器，数组传递参数，开启session，开启父类构造函数），完善各个方法</p>
<p>Session方法执行顺序（读在回收前），修改读方法（不读取过期数据，读判断expire），session销毁（停止执行写方法）</p>
<p>在线编辑器：ckeditor，简介，引入（js引入，调用），保存编辑数据，配置ckeditor（高度，工具栏），ckfinder，配置文件上传（开启上传，上传目录）</p>
<h3 id="_2-第二部分" tabindex="-1"><a class="header-anchor" href="#_2-第二部分" aria-hidden="true">#</a> 2.第二部分</h3>
<p>Php：脚本语言，网站建设，服务器端运行</p>
<p>PHP定义：一种服务器端的 HTML 脚本/编程语言,是一种简单的、面向对象的、解释型的、健壮的、安全的、性能非常之高的、独立于架构的、可移植的、动态的脚本语言。是一种广泛用于 Open Source（开放源代码）的尤其适合 Web 开发并可以嵌入 HTML 的多用途脚本语言。它的语法接近 C，Java 和 Perl，而且容易学习。该语言让 Web 开发人员快速的书写动态生成的网页。</p>
<p>PHP简介：Rasmus Lerdorf发展历程（1994:1.0个人perl，1996:2.0C底层，1998:3.0zendEngine，2000:4.0session+输出缓冲等，2004:5.0zend引擎2代），平台支持（window，Linux，UNIX），数据库支持（Sqlserver，mysql，Oracle，Access），开发环境（Apache2，mysql，php）</p>
<p>服务器：软件，常见服务（HTTP，FTP，MySQL，telnet等）</p>
<p>软件结构：c\s，b\s，PHP地位</p>
<p>Web访问：IP，域名，hosts，域名服务器，网站，web访问</p>
<p>原数据保存：php文件，数据库文件</p>
<p>搭建web服务器：Wamp，lamp，Apache安装（www.apache.org），MySQL安装，PHP安装（无中文路径，CMD执行php.exe -f，VC6和VC9），配置（Apache加载PHP模块：LoadModule php5_module “PHP5apachedll路径”；增加php处理：AddType application/x-httpd-php .php；加载php配置文件：windows，Apache配置文件加载PHPIniDir “PHP配置文件路径”；配置PHP时区：date.timezone）</p>
<p>Php操作数据库：PHP开启MySQL扩展，指定扩展目录（extension_dir）</p>
<p>Web运行原理：静态，动态</p>
<p>虚拟主机配置：基于域名虚拟主机，包含vhost配置，编辑虚拟vhost文件（VirtualHost，ServerName，DocumentRoot），重启，修改hosts文件，localhost重配</p>
<p>PHP脚本执行：读入源程序，zendEngine（词法分析，语法分析），生成opcode，执行opcode，解释，与编译的区别</p>
<p>PHP工作：脚本（服务端脚本，需要web服务器和浏览器），命令行脚本</p>
<p>基本语法：脚本语言（嵌入html），PHP处理（标记识别），标记（<?php?>， <script language="php"></script>默认，<?短标签?>，&lt;%asp标签%&gt;非默认，需开启；不建议使用），最末尾标记可以忽略（建议忽略：Ajax返回，节省流量），PHP语句（分号结束，最后一条可以不加）</p>
<p>变量：$符号，有效变量名（字母或者下划线开始，大小写敏感），变量增删改查（unset断开连接），命名规则（驼峰法，下划线）</p>
<p>常量：定义（define），直接使用，特点（不能修改，区分大小写，不能删除，常量值只能是标量，命名与变量同，无$），常量判断（defined），输出（constant(‘常量名’)）</p>
<p>PHP注释：行注释，块注释</p>
<p>预定义变量：$_POST，$_GET，$_REQUEST，$_FILES，$_SESSION，$_COOKIE，$GLOBALS，$_SERVER，$_ENV</p>
<p>预定义常量：<strong>FILE</strong>，<strong>LINE</strong>，<strong>DIR</strong>，<strong>FUNCTION</strong>，<strong>METHOD</strong>，PHP_OS，PHP_VERSION，PHP_INT_SIZE，PHP_INT_MAX</p>
<p>可变变量</p>
<p>传值：值传递，引用传递</p>
<p>数据类型：PHP若类型，八大数据类型（整型，浮点型，布尔型，字符型，数组型，对象型，资源型，空型），三大类（标量，复合，特殊）</p>
<p>整型：十进制，八进制（0），十六进制（0x），指定进制输出（printf，%d，%o，%x），整型取值范围（PHP_INT_SIZE，PHP_INT_MAX），字节，位，进制转换（十转其他，除取余反取；其他转十，求幂），整型溢出（浮点型），时间戳（格林威治时间，time，date）</p>
<p>浮点型：保留小数输出（printf(‘%.2f’)，float，double</p>
<p>布尔型：真假，TRUE，FALSE（非0），布尔值输出使用var_dump，FALSE（FALSE，0，0.0，’’，’0’，空数组，null值）</p>
<p>字符串：单引号，双引号，区别（解析变量，转义，{}，字符串数组），定界符（初始标记和结束独占一行，结束标记顶格，解析变量，转义，实际应用xml）</p>
<p>运算符：算术运算符（+，-，<em>，/，%），赋值运算符（=，+=，-=，</em>=，/=，%=，.=），比较运算符（&gt;，&lt;，&gt;=，&lt;=，==，===，!=，!==），错误抑制符（@），自操作运算符（++，--），字符串运算符（.），三目运算符（？ ：），逻辑运算符（&amp;&amp;and，||or，！），位运算符（&amp;，|，^，~，&lt;&lt;，&gt;&gt;）</p>
<p>原码反码补码：正数原码反码补码一样，负数符号位除外求反，+1得补码</p>
<p>流程控制：顺序结构，分支结构（if，ifelse，ifelse[else]，switch[case,break,default]），循环结构（for，while，dowhile，foreach，continue，break）</p>
<p>模板语法：标签语法，分支结构和循环结构</p>
<p>函数：主要功能（代码重用，模块化编程），定义（function 函数名(参数列表)），调用（函数名(参数列表)），定义与调用无顺序关系，形参，实参，参数传递（值传递，引用传值，默认值），返回值（return中断执行，单一返回值，多返回值[引用传递参数]），作用域（全局作用域，局部作用域，作用域针对变量，深入分析[js和PHP]，超全局作用域，$GLOBALS和global）</p>
<p>作业：标签语法写乘法表</p>
<p>作业：打印*，求素数</p>
<p>作业：发牌程序</p>
<p>匿名函数</p>
<p>伪类型：mixed，number，callback，void，</p>
<p>数据类型转换：int，integer，bool，Boolean，float，string，array，object，自动转换（值转换）</p>
<p>数据类型判断：is_bool，is_float，is_integer，is_object，is_array，is_string，is_resource，is_scalar，is_null，is_numeric，gettype，settype</p>
<p>引用文件：require，include，require_once，include_once，作用（布局，包含公共文件），文件载入原理（加载非执行，将编译后的文件加载），require和include的区别，文件返回（配置文件）</p>
<p>终止脚本：return，exit，die</p>
<p>载入文件路径：绝对路径，相对路径（./，../，/），文件载入的相对路径问题</p>
<p>字符串相关函数：strlen，substr，strtolower，strtoupper，strrev，strpos，strrpos，strchr，strrchr（获取文件后缀名），trim</p>
<p>时间相关函数：time，date，strtotime，microtime</p>
<p>数学相关函数：abs，floor，ceil，round，rand，mt_rand</p>
<p>数组：概念，使用数组原因（变量关联），PHP数组特点（没有数据类型，数组下标可为字符串[不能使用for循环遍历]，数组长度可变不会溢出），数组定义（array，[]），数组不能直接echo，数组长度（count，遍历），foreach（原理：赋值+指针下移）</p>
<p>二维数组：定义，语法，二维数组遍历，关联二维数组，遍历</p>
<p>Each+list：each（语法），list（语法，只能获得索引数组元素，按照索引顺序赋值），each和list组合遍历数组，each与foreach区别（foreach原理，each原理）</p>
<p>数组相关函数：key，current，next，prev，end ，reset，array_keys，array_values，数据结构模拟（array_shift，array_unshift，array_push，array_pop），字符串分割（explode，implode），array_walk_recursive（回调函数，按址传递）</p>
<p>数组运算：+，array_merge</p>
<p>数组比较：==，===</p>
<p>其他函数： range，array_rand，shuffle</p>
<p>SQL注入：原理，解决方案（addslashes，stripslashes，magic_quotes_gpc5.3前，get_magic_quotes_gpc），公共函数（array_walk_recursive对$_POST转义）</p>
<p>数组算法：排序（冒泡，插入，选择，快排），查找（自定义查找，二分法）</p>
<p>表单传值：网站目的（数据管理：收集，整理，存储，发布），收集（表单实现），数据传递（url，form），传值方式（get，post）</p>
<p>数据接收：$_GET，$_POST，$_REQUEST，数据处理，$_REQUEST不值得信任（覆盖，request_order，variables_order）</p>
<p>点击行为判断：isset($_POST[‘submit’])/empty()</p>
<p>自动配置全局变量：register_gloabals5.3</p>
<p>复选框使用：[]，入库（字符拼接），显示复选框信息（checked），批量删除</p>
<p>文件上传：概念，难点（浏览器端，服务端），流程（表单post，enctype=’multipart/form-data’，PHP配置file_uploads，配置项说明(file_uploades，upload_max_filesize，post_max_size，upload_tmp_dir)），文件上传流程（本地选择文件，提交，文件发送到服务器临时目录，转义临时文件）</p>
<p>PHP处理：$_FILES，$_FILES说明，文件移动（copy，move_uploaded_file），验证文件类型（MIME），文件重命名（唯一性，可识别区分）</p>
<p>上传函数封装</p>
<p>文件操作：原因（保存不经常变化数据量小的数据；配置文件，流量统计，静态网页生成，文件下载。。。）</p>
<p>目录操作：opendir，readdir，rewinddir，closedir，scandir</p>
<p>自定义实现scandir函数功能</p>
<p>文件判断：file_exists，is_dir，is_file，mkdir，rmdir，getcwd，chdir，文件上传按月分类管理</p>
<p>循环输出文件夹下所有文件及子文件夹：静态变量，函数递归（原理，递归点，递归出口）</p>
<p>文件操作：读和写，PHP5（file_get_contents，file_put_contents[FILE_APPEND，FILE_USE_INCLUDE_PATH]，array file），PHP4（fopen，Mode[r，r+，w，w+，a，a+]，fgetc，fgets，fread，fputs，fwrite，fclose，fseek）</p>
<p>文件相关函数：copy，unlink，rename，filemtime，filesize，fileperms</p>
<p>文件下载：html下载（a href=‘use.zip’，缺点：文件格式简单，暴露文件完整路径），PHP（header(&quot;Content-type: application/octet-stream&quot;)，header(&quot;Content-Disposition: attachment; filename=filename&quot; )，输出文件内容）</p>
<p>作业：</p>
<p>\1. 文件上传保存到数据库（路径）</p>
<p>\2. 站点计数功能：记录访客记录，IP，访问时间</p>
<p>\3. 循环删除空文件夹</p>
<p>\4. 下载站点制作：数据库实现（序号，文件名，描述，地址，下载次数，假名）</p>
<p>\5. 斐波那契数列：后一下等于前两项的和，求N项值</p>
<p>\6. 100以内素数</p>
<h3 id="_3-第三部分mysql核心" tabindex="-1"><a class="header-anchor" href="#_3-第三部分mysql核心" aria-hidden="true">#</a> 3.第三部分mysql核心</h3>
<p><strong>整体知识介绍</strong>：mysql基本操作和使用，mysql优化（索引，分表等），mysql部署（读写分离，负载均衡等）</p>
<p><strong>数据库基本介绍</strong>：数据库概念，常用数据库，web应用三大软件分工，PHP动态语言特点（处理数据），数据的存放（脚本运行时和执行完毕），数据库系统</p>
<p><strong>关系型数据库</strong>：概念（关系+二维表），教学系统实例，常见关系型数据库，关系型数据库特点（所有数据相同结构，没有数据也分配存储空间）</p>
<p><strong>非关系型数据库</strong>：键值对型，常见非关系型数据库，非关系型数据库特点（内存运行，硬盘同步）</p>
<p><strong>关系型数据库典型概念</strong>：行row（记录record），列col（字段field），SQL（概念，DDL，DML（DML+DQL），DCL）</p>
<p><strong>M****ysql基本介绍</strong>：mysql软件介绍（c/s结构），mysql操作步骤，客户端的工作，mysql单独安装，mysql目录及文件介绍，mysql服务端管理（服务和mysqld.exe），客户端连接服务端（连接认证，执行sql，退出）</p>
<p><strong>M****ysql数据对象</strong>：mysql服务器à数据库à数据表à字段</p>
<p><strong>基本SQL操作</strong>：库操作（create[if not exists][charset,collation]，库文件夹介绍，数据库命名规则，特殊名字处理；show[like pattern]，通配符，查看库创建语句；drop；alter），表操作（表与字段的依赖性；create [engine,charset]，表文件分析，表与库的关系，保留字冲突，从已有表创建[like]；show[like pattern]，查看表字段[desc/describe/show columns from tb_name]，查看表创建语句；drop；alter [操作add/drop/modify/change][位置first after]，rename to重命名；数据操作（insert into省略字段和选择字段;select from[where条件]，=比较；delete from[where]；update set[where]；删除和更新不可逆）</p>
<p><strong>字符集</strong>：快速解决问题（set names），字符集，mysql字符集（数据存储，数据传输），数据存储字符集（服务器端，库，表，字段，图解），字符集优先级（字段à表à库à服务器端），数据传输过程字符集（图解（客户端clientà连接层connectionà服务器à客户端result），character_set变量，set names分析）</p>
<p><strong>校对集</strong>：字符比较（ASCII比较），校对集工作（查看show collation），校对集设置（表选项中collate=校对集），校对集命名规则（_bin二进制，_ci[case insensitive]，_cs[case sensitive]），utf8&amp;gbk（utf8不支持中文比较，gbk支持拼音）</p>
<p><strong>存储引擎</strong>：概览mysql存储引擎，主要引擎[InnoDB和MyISAM]，引擎的未来发展，引擎区别（MyISAM[查询和新增，全文索引]，InnoDB[更新和删除，事务，5.5之后全文索引]，文件区别）</p>
<p><strong>乱码问题解决</strong>：作图（浏览器—PHP--mysql）</p>
<p><strong>字段（列）类型</strong>：mysql数据类型（数值型，字符串型，日期时间型），数值类型（整型[tinyint，smallint，mediumint，int，bigint]，显示宽度，0填充，无符号；浮点型[float，double]，语法float(M,D)，浮点支持科学计数法；定点数[decimal(M,D)]，定点与浮点的存储方式区别），字符串类型（char(L)；varchar(L)；text；char与varchar比较表，mysql记录总长限制，文本不受限制(10字节)；枚举enum[值存储，2字节，单选，方便插入[数值或者字符串]，从1开始]；集合set[存储方式二进制，多选，8字节]；二进制文本），日期和时间类型（datetime[格式，8字节存储，时间跨度9999]；date[]；time[时间间隔]；year[1字节存储，跨度1900-2155或70-69]；timestamp[标准整型存储，表现与datetime一致]）</p>
<p><strong>列属性（约束）</strong>：NULL（概念[与PHP不同]，语法NULL/NOT NULL），默认值（default，用法，插入数据时使用default关键字），键（主键[primary key，唯一标识，设计表图解，主键优势，主键语法包括建表和修改，删除主键]；唯一键[unique key，优点，增加包含建表时和修改表结构，删除唯一键平[只能通过删除索引方式]]），自动增长（auto_increment，常用主键ID），注释（comment，SQL通用注释语法[--空格，#，/<em>块注释</em>/]）</p>
<p><strong>关系</strong>：关系分类（1：N[学生与班级对应关系，设计]；M：N[教师与班级对应关系，设计]；1：1[学生与学生关系]）</p>
<p><strong>外键（约束）</strong>：外键（foreign key，学生与班级关系，外键功能，外键定义[外键（逻辑上），外键约束（语法上）]，增加外键[创建表时和修改表结构]，约束作用，删除约束[约束名]，增加约束名[constraint]，约束对应的索引），外键约束（主表和从表，约束操作[严格控制restrict，置空set null，级联cascade]，约束范围[删除和更新]，外键支持[InnoDB，类型严格一致，置空操作字段必须可以为空]）</p>
<p><strong>范式</strong>：范式定义（Normal Format），范式等级（1到6），数据库范式（满足到第三等级），1NF（原子性），2NF（部分依赖，复合主键），3NF（传递依赖），范式有点（通用，减低数据冗余），逆规范化（设置必要数据冗余，效率与磁盘空间的对抗）</p>
<p><strong>高级数据操作</strong>：插入数据（选择插入[insert into tb_name select子句]，主键冲突[insert into … on duplicate key update]，替换插入[replace into]），删除数据（搭配orderby和limit，清空表[truncate]，delete与truncate区别），修改数据（搭配orderby和limit），查询数据（select选项[all和distinct]，字段列表[表达式，字段别名]，from子句[多表，表别名，虚拟表dual]，五子句[where，group by，having，order by，limit]），where子句（操作流程，mysql布尔类型和值，表达式[关系运算符 =，in和not in，between and和not between and，is null和is not null；逻辑运算符；like运算符，通配符；运算符优先级]），group by子句（分组统计，合计函数[count(对非空字段统计)，max()，min()，sum()，avg()]，grou_concat(字段)[分组专用字段连接]，group by[排序asc|desc]，多字段分组，回溯统计[with rollup]），having子句（与where功能相似，可以使用字段别名，可以使用合计函数，与where操作数据不同），order by子句（排序，多字段排序），limit子句（限制记录数，指定索引位置，分页）</p>
<p><strong>联合查询</strong>：联合查询（union，结果间联合，条件简化，union选项[all和distinct]，字段数量一致类型无所谓[原因，var_dump看结果]，union的select子句分别排序[子句需要括号，需要配合limit]）</p>
<p>作业：实现用户在浏览器端创建数据库，创建数据表</p>
<p><strong>连接查询</strong>：概念，连接分类（内连接[inner join [on]，参与连接数据都必须存在，where替代on，默认连接方式，连接原理，where与on的区别，using去重]，外连接[left/right join on，参与连接的数据有对应不上[左外保留左表数据，右外保留右表数据]，full全外mysql不支持，on和using使用]，交叉连接[内连接的无条件模式]，自然连接[natural [left/right] join，相当与其他连接使用using，不能使用on]）</p>
<p><strong>子查询</strong>：子查询概念，功能，子查询分类（位置分类[where，from，exists]，返回形式分类[标量子查询[单一值，用于比较]，列子查询[配合in和not in，any，all和some]，行子查询[使用括号语法构建行]，表子查询[典型from子查询]]）</p>
<p><strong>视图</strong>：概念（虚拟表），视图作用（查询数据，提供接口，隐藏真实数据），视图管理（创建[create view as select子句]，删除视图[drop view]，修改视图[alter view v_name as select子句]，查看视图[show create view v_name，查看视图字段，查看视图创建语句]，视图算法[概念，合并算法merge，临时表temptable，未定义undefined，视图指定算法[create algorithm=temptable view]]）</p>
<p><strong>数据备份还原</strong>：导出（select into outfile ‘路径’，导出文件不能重名，字段分隔符[fields terminated by，enclosed by，escaped by]，记录分隔符[lines terminated by/starting by]，导出文件编码），导入（load data infile ‘路径’ into table tb_name 选项）</p>
<p><strong>数据备份</strong>：MyISAM备份，mysqldump（mysqldump客户端，语法，表备份[库 表 表/ -b 库]，数据库备份），还原（source，mysql库名 表名 &lt; sql文件）</p>
<p><strong>事务</strong>：事务目的，事务操作（开启[start transaction]，提交[commit]，回滚[rollback]，回滚点[savepoint name，rollback to name]），事务基本原理（mysql执行SQL方式[执行+提交]，默认自动提交autocommit），事务安全日志（保存事务执行中间结果ib_logfile，InnoDB支持事务），事务特点ACID（原子性[Atomicity，事务是整体]，一致性[consistency，事务前后数据完整性一致]，持久性[事务一旦提交，数据改变永久]，隔离性[isolation，多用户并发互不干扰，相互隔离]）</p>
<p><strong>触发器</strong>：概念，语法（创建[create trigger t_name 事件时机 事件类型 on 表 for each row]，事件时机[before，after]，事件类型[insert，delete，update]，mysql不支持在同一事件上创建多个出发程序；删除[drop trigger t_name]；获取触发程序相关记录[old，new]，分支结构[if 条件 then 代码 end if]，多语句[begin，end]，语句结束符）</p>
<p><strong>变量</strong>：系统变量，自定义变量（set，使用变量，select into，变量赋值符[:=]），变量有效期，变量作用域</p>
<p><strong>SQL函数</strong>：内置函数（substring，char_length，length，instr，lpad，insert,strcmp），自定义函数（概念，函数要素[函数名，参数列表，函数体，返回值]，语法[创建create function f_name(参数列表) returns 返回值类型]，调用函数[select f_name(参数)]，分支结构，循环结构[标签]，内部定义变量[全局变量@var，局部变量declare var]，中断（leave，iterate））</p>
<p><strong>存储过程</strong>：概念，与函数的区别，语法（创建[create procedure pr_name(过程参数in out inout)]，过程参数类型，过程调用call）</p>
<p><strong>M****ysql用户管理</strong>：root密码忘记（重装，mysql管理用户的表user），重置root密码（带参数重启服务[--skip-grant-tables]，无密码登录，修改用户表root密码[update set]，加密算法[sha1，md5，password()，重启]），普通用户管理（创建用户[create user user_name[ identified by ‘密码’]，用户名形式[username@host]]，删除用户[drop user username@host]），设置用户权限（添加[grant 权限列表 on 表名 to 用户]，权限列表，表名表示方法，特殊权限[all privileges]，刷新缓存[flush privileges，flush tables]，删除用户权限[revoke 权限列表 on 表名 from 用户]）</p>
<p><strong>索引</strong>：概念，mysql索引类型[主键索引，唯一索引，全文索引，普通索引，复合索引]</p>
<p><strong>PHP操作mysql</strong>：PHP变身客户端，开启该扩展，典型扩展（mysql，mysqli，pdo-mysql），libmysql.dll（连接服务提供者），查看mysql是否加载（PHPinfo），PHP操作mysql（连接认证mysql_connect()，准备和发送sql语句mysql_query，处理执行结果mysql_fetch_assoc()，释放资源[结果集]，关闭连接mysql_close()），mysql_query（mysql_query返回值[布尔型，结果集]，有返回值的语句[select,show,desc]，没有返回值的语句[insert,update,delete ,DDL]），其他常用函数(mysql_errno()，mysql_error()，常见处理方式，mysql_fetch_array()，mysql_fetch_row()的区别，mysql_data_seek()，Mysql_affected_rows，Mysql_insert_id)</p>
<p>功能：注册成功跳转，分页（一次性，limit）</p>
<h3 id="_4-正则题" tabindex="-1"><a class="header-anchor" href="#_4-正则题" aria-hidden="true">#</a> 4.正则题</h3>
<p>1.JS中匹配中文如何匹配？PHP中呢
1.js中是：[\u4e00-\u9fa5]
php中：/[\x{4e00}-\x{9fa5}]/u
2.匹配中文的语法？区别？
2./[\x{4e00}-\x{9fa5}]/u是只匹配出中文，而既能匹配中文又能匹配英文的是：
'/.+/'和'/.+/u'
3.用户名字母数字下划线开头，不以数字开头，长度4-20，可以包含中文
3./^[a-zA-Z_\x{4e00}-\x{9fa5}][\w\x{4e00}-\x{9fa5}]{3,19}$/u
4.邮箱正则验证。
4./^[\w-]+@([\w-]+.)+[\w-]+$/
5.判断密码在6-12位，判断密码强度，必须包含大小写字母和数字。
5.$passwrod_pattern = '/^\S{6,12}$/';
if(0 == preg_match($password_pattern),$password){
echo '密码位数不在6-12位';
}else{
//判断密码强度
$upper = preg_match('/[A-Z]/',$password);
$lower = preg_match('/[a-z]/',$password);
$number = preg_match('/\d/',,$password);
if(($upper+$lower+$number)❤️){
echo '密码强度不够';
}
}
6.匹配整数：正负数，最左不能为0，纯数字
6./^[+-]?[1-9]\d*$/</p>
<h3 id="_5-mysql复习大纲" tabindex="-1"><a class="header-anchor" href="#_5-mysql复习大纲" aria-hidden="true">#</a> 5.mysql复习大纲</h3>
<p>MySQL复习：
一.
1.如何安装和配置mysql
2.连接数据库命令
3.数据库操作层次图会画
4.sql语句分类：4种
5.创建数据库语句（带字符集和校验规则）
6.默认字符集和校验规则
7.collate utf8_bin和collate utf8_general_ci校验规则的区别
8.显示数据库语句
9.显示数据库创建语句
10.数据库删除语句
11.备份数据库
12.恢复被删除的数据库
13.备份数据库中指定的表
14.恢复指定的表
15.备份多个数据库
16.恢复多个数据库？
二.
1.创建数据表（完整的），默认存储引擎是什么？
2.创建表的结构，不同的存储引擎对应的文件有什么不同？三个文件分别代表什么，在哪个位置</p>
<p>4.数值型有几种：占得字节数，有无符号的值大小
5.zerofill的用法，注意事项：4点
6.int(6)的意思是什么？
7.bit的含义，显示的时候是以什么显示的？占得字节数
8.bit的细节说明：4点
9.小数类型：float(m,d)md的含义，占用的空间字节数多少？
10.float(4,2)和float(4,2) unsigned表示的范围
11.decimal(4,2)和decimal(4,2)unsigned表示的范围
12.fload和decimal的区别分析：精确位数，float精确到几位，decimal的D是0代表什么，M最大位数是多少？支持的十进制最大位数D是多少？如果D被省略，默认是多少？如果M被省略默认是多少?
13.如果没有给float 和decimal的指定M,D， 那么规则是多少？
14.字符类型有哪几种？各自的长度大小？在区分字符编码的情况下是多少？各自的占得字节数多少？
15.char和varchar是字符还是字节？char(4)和varchar(4)分别代表什么？
16.char最多多少个字符？varchar最多多少个字符？如果是utf8编码size是多少，如果是gbk呢，latin1呢？如果一个字段设置了not null ,那么varchar最大的字符是多少？
17.varchar和char在实际占用空间的区别？他们之间的区别？
18.什么时候用varchar，或者char?他们之间的查询速度区别？
19.varchar和char在保留空格的说明？谁会谁不会？
20.text什么时候用，要注意一点是什么？
21.日期和时间类型三种分别是什么？区别？
22.enum和 set分别代表什么？什么时候用？
23.enum和 set要注意一点不能有什么？两个用的语法，创建表的时候如何写？插入数据的时候如何写？
24.enum和 set的添加要注意什么？在添加值的时候？能添加一个还是多个值？
25.对于enum和 set的查询方式是什么？例如查询sex为男的，再查hobby是菠萝的？
26.enum的细节说明：enum考虑效率问题，存储的是数字，每个选项的值对应的是什么规律的数字？最多多少个？
27.使用数字来添加enum类型字段？
28.set一个单元格可存储多个值，处于效率考虑，存储的也是数字，每个选项对应的数字是多少？最多多少个数？如果想得到3,7,9等值怎么做？代表什么？
29.如何对齐显示我们的数据？例如把控制台宽度设置为800，，对齐显示中文。</p>
<p>三。
1.在表zmj上添加一个image字段,并且在name后面?
2.修改job列，使其长度为60
3.删除sex列
4.表名改为user
5.修改表的字符集为utf-8
6.修改表的列名name为username
7.往表里添加数据
8.插入数据注意细节：数据类型，数据大小，位置，字符和日期型注意单引号，空值。多条记录添加方式，
9.update语句写法
10.修改字段salary为5000，在name=de的时候
11.修改多个字段值方法
12.删除表中name=zmj的记录，删除所有记录，两种方法删除所有记录
13.delete和truncate的区别
14.如何删除某一列的值？delete可以吗？delete和drop的区别？
15.delete的使用细节？
16.清空表中所有记录的方法？两种，区别：速度，灵活性。</p>
<p>四.
1.查询基本语法?</p>
<p>2.给列取别名？</p>
<p>3.是否剔除重复数据写法：</p>
<p>4.where子句中经常使用的运算符?</p>
<p>5.排序语句用法？</p>
<p>6.统计某列数量？</p>
<p>7.count(列名)的含义？</p>
<p>8.对多列求和用法？</p>
<p>9.sum只能对哪种类型求和？</p>
<p>10.求平均值的语句？求最大值语句？求最小值语句？</p>
<p>11.分组语句？和过滤语句？语法</p>
<p>12.having的作用？</p>
<p>五.
1.如何显示当前日期的函数？如何显示当前的时间？如何显示当前的时间戳？分别用这三种日期函数插入一条数据？</p>
<p>2.得到datetime的日期部分</p>
<p>3.在date2中加上日期或者时间,在date2上减去一个时间,选出10分钟内发布的信息。（两种方法）</p>
<p>4.两个日期差（结果是天）</p>
<p>5.两个时间差（多少小时多少分钟多少秒）</p>
<p>6.当前时间</p>
<p>7.年月日</p>
<p>8.添加数据时使用unix时间戳？</p>
<p>9.取出数据把unix时间戳转换？并且按照自己定义的时间格式显示？</p>
<p>10.如何查看表的某个字段的字符编码，用哪个函数？</p>
<p>11.连接字符串的函数是哪个？</p>
<p>12.把字母全部转为大写？</p>
<p>13..把字母全部转为小写？</p>
<p>14.查看字段的长度？</p>
<p>15.替换字符中的某个字符为另一个字符？</p>
<p>16.截取字符串中的内容？</p>
<p>17.逐个比较两个字符串的大小？</p>
<p>18.取绝对值得函数？向上取整的函数？向下取整的函数？</p>
<p>19.十进制转二进制？转16进制？进制转换？</p>
<p>20.求最小值？求余？</p>
<p>21.取0-1的随机数，包含0和1</p>
<p>22.保留小数位数？</p>
<p>23.判断一列不为空？</p>
<p>24.如果a为真的话返回b，否则返回c</p>
<p>25.如果c为空，就返回b，否则返回c</p>
<p>26.如果a&gt;b为真，返回1，否则返回2</p>
<p>27.查询当前用户的函数？查询当前数据库名的函数？md5加密一个数据的函数？对Mysql数据库的用户密码加密？</p>
<p>28.显示公司每个员工和它的上级的名字?
28.select worker.ename as '下属',boss.ename as '上级' from emp worker,emp boss where worker.mgr=boss.empno;</p>
<p>29.如何显示工资比部门30的所有员工的工资高的员工的姓名、工资和部门号,两种方法？all
29.方法一：
select ename,sal,deptno from emp where sal&gt;(select max(sal) from emp where deptno=30)
方法二：
select ename,sal,deptno from emp where sal&gt;all(select sal from emp where deptno=30)</p>
<p>30.如何显示工资比部门30的任意一个员工的工资高的员工的姓名、工资和部门号，两种方法？any
30.select ename,sal,deptno from emp where sal&gt;(select max(sal) from emp where deptno=30)
select ename,sal,deptno from emp where sal&gt;any(select sal from emp where deptno=30) and deptno != 30;</p>
<p>进行表的自我复制？
31.如何创建一个表的结构
31.create table myemp like emp;
32.把emp 表的数据导入myemp
32.insert into myemp select * from emp
33.自我复制
33.insert into myemp select * from myemp;</p>
<p>34.合并查询？合并，并且去掉重复的行？或者合并不去掉重复行？
34.把 两个查询的结果合并在一起显示，在显示的时候，会自动的去掉重复的行.union 用法会合并，并且去掉重复的行
union all用法会合并，不去掉重复的行</p>
<p>比较难的题，再次练习的？
一。
11.备份数据库
12.恢复被删除的数据库
13.备份数据库中指定的表
14.恢复指定的表
15.备份多个数据库
16.恢复多个数据库？
二。
2.创建表的结构，不同的存储引擎对应的文件有什么不同？三个文件分别代表什么，在哪个位置
18.什么时候用varchar，或者char?他们之间的查询速度区别？
25.对于enum和 set的查询方式是什么？例如查询sex为男的，再查hobby是菠萝的？
26.enum的细节说明：enum考虑效率问题，存储的是数字，每个选项的值对应的是什么规律的数字？最多多少个？
29.如何对齐显示我们的数据？例如把控制台宽度设置为800，，对齐显示中文。
三。
1.在表zmj上添加一个image字段,并且在name后面?
2.修改job列，使其长度为60
3.删除sex列
4.表名改为user
5.修改表的字符集为utf-8
6.修改表的列名name为username
7.往表里添加数据
8.插入数据注意细节：数据类型，数据大小，位置，字符和日期型注意单引号，空值。多条记录添加方式，
9.update语句写法
10.修改字段salary为5000，在name=de的时候
11.修改多个字段值方法
12.删除表中name=zmj的记录，删除所有记录，两种方法删除所有记录
13.delete和truncate的区别
14.如何删除某一列的值？delete可以吗？delete和drop的区别？
15.delete的使用细节？
16.清空表中所有记录的方法？两种，区别：速度，灵活性。
四.</p>
<p>3.是否剔除重复数据写法：
4.where子句中经常使用的运算符?
6.统计某列数量？</p>
<h3 id="_6-mysql复习大纲的答案" tabindex="-1"><a class="header-anchor" href="#_6-mysql复习大纲的答案" aria-hidden="true">#</a> 6.mysql复习大纲的答案：</h3>
<p>MySQL复习：
一.
2.mysql -h 主机名 -p端口 -u root -p 密码
其中-p端口必须连着，要不会出错
3.
4.DML:数据操作语言（insert update delete）
DDL:数据定义语言（create alter drop）
DCL:数据控制语言（grant revlke  commit  rollback  savepoint事务和数据库管理的操作）
DQL:数据查询语言（select）</p>
<p>5.create database 数据库名 character set字符集 collate 校验规则
create database 数据库名 charset=字符集 collate 校验规则
6.utf8 和 utf8_general_ci  utf8不区分大小写
7.utf8_bin区分大小写A B a b，utf8_general_ci不区分a A b B，校验规则是排序规则.
8.show database
9.show create databases  数据库名
10.drop database  (if exists) 数据库名
11.(1)	进入到mysql/bin 目录下
//下面的指令，就是把 test 数据库，备份到 d:/test.bak 文件中<br>
mysqldump   -u root  -p  test  &gt; d:/test.bak
12.创建一个空的数据库：db5
mysql&gt;use db5
mysql&gt;source  d:/test.bak
13.mysqldump  -u root -p 数据库1  表1 表2  &gt;d:/db1.bak</p>
<ol start="14">
<li>mysql&gt;use  db5;
mysql&gt;source  d:/t.bak
15.mysqldump -u root -p -B 数据库1  数据库2.... &gt;d:/dbs.bak
16.mysql&gt;source  d:/db2.bak
二.
1.create table 表名 (字段1，字段2，字段3...)charset=utf8 collate 校验规则 engine  存储引擎。默认是innodb</li>
</ol>
<p>2.InnoDN对应一个文件，MyISAM对应三个文件：.frm是表信息，.MYD是存储数据，.MYI是存储索引信息</p>
<p>4.bit,tinyint,bool,smallint,int,bigint,float,double,decimal
bit和bool是1个字节，tinyint1个字节，smallint2个字节，int4个字节，bigint8个字节</p>
<p>5.只能配合unsigned使用，如果位数不足用0补齐，只要设置了zerofill就默认是Unsiged</p>
<p>6.代表当zerofill时，如果数据的位数不足6位，将用0填充剩下的位数。如果没有设置zerofill那个Int（6）这个6没有任何含义。</p>
<p>7.bit是按位存放的， 显示的时候是以对应的ascii码字符显示的.二进制的概念: 一个字节占8位</p>
<p>8.bit字段在显示时，按照ascii对应的字符显示，查询时也可用，如果是一个值只有0,1时考虑使用，bit(M)指定位数，默认值1，范围1-64</p>
<p>9.M代表长度，D是小数位数，占4个字节</p>
<p>10.-99.99到99.99   和0-99.99</p>
<p>11.-99.99到99.99   和0-99.99</p>
<p>12.float精确到小数7位，decimal的D代表小数点后位数，M小数位数总数，支持的十进制最大位数D是30，如果D被省略，默认是0，如果M被省略默认是10</p>
<p>13.最大位数D是30，如果D被省略，默认是0，如果M被省略默认是10</p>
<p>14.3种，varchar(65532),char(255) text ,char(size) size 最多255
varchar(size), 这个size 是跟你表的字符编码有关系, 如果你的表的编码是utf8 则size=65532/3 , 如果是gbk size=65532/2, 如果是latin1 size = 65532 ， 如果一个字段设置了not null  , 我们varchar可以最大使用 65533个字节.</p>
<p>15.字符，varchar(4)是两个空间保存字符，一个记录长度，char(4)就是4个空间大小</p>
<p>16.char(size) size 最多255
varchar(size), 这个size 是跟你表的字符编码有关系, 如果你的表的编码是utf8 则size=65532/3 , 如果是gbk size=65532/2, 如果是latin1 size = 65532 ， 如果一个字段设置了not null  , 我们varchar可以最大使用 65533个字节.</p>
<p>17.字符，varchar(4)是两个空间保存字符，一个记录长度，char(4)就是4个空间大小</p>
<p>18.char速度比varchar快</p>
<p>19.char(size) 不会保留添加字段的最后的空格， varchar(size) 会保留最后的空格.</p>
<p>20.当我们要保存大段文本时，可以使用text 字段，但是这个字段不能有默认值.</p>
<p>21.DATE保存日期，DATETIME保存日期和时间，TimeStamp保存时间戳，在Insert和update时自动联动。</p>
<p>22.enum枚举类型，set集合类型，enum在单选时用，set多选时用</p>
<p>23.不能用默认值，
create table votes(
sex enum('男','女') not null,
hobby set('苹果', '西瓜', '菠萝') not null
)
insert into votes values(100, '猪八戒', '男', '西瓜');
insert into votes values(101, '八仙女', '女', '苹果,菠萝');</p>
<ol start="24">
<li></li>
<li></li>
</ol>
<p>enum查询：
select * from votes where sex='男';
set查询：
select * from votes where hobby='菠萝';(x)错误
select * from votes where hobby like '%菠萝%';(x)错误
select * from votes where find_in_set('菠萝', hobby);正确</p>
<p>26.enum对应的数字是：1,2,3,4.。。65535
set对应：1,2,4,8,16</p>
<p>27.insert  into zmj values(7);</p>
<ol start="28">
<li></li>
<li>
<pre><code>设置控制台800宽
</code></pre>
<p>登陆时：mysql --default-character-set=latin1  -uroot -pxxx
设置set names gbk</p>
</li>
</ol>
<p>三.
1.alter table emp add image varchar(30) not null default '' after name</p>
<p>2.alter table emp modify job varchar(60) not null default '';</p>
<p>3.alter table emp drop sex;</p>
<p>4.rename table emp to user</p>
<p>5.alter table emp charset=utf8</p>
<p>6.alter table user change name username varchar(60) not null default '';注意一定要指定类型等，要不会出错。</p>
<p>7.insert into table values(值1，值2.。。);</p>
<p>8.数据类型一致，数据大小不能超，数据位置对应，insert  into values(),(),()</p>
<p>9.update 表名 set 字段=值 where 字段=值</p>
<p>10.update user set salary=5000 where name=de;</p>
<p>11.update user set 字段1=值1，字段2=值2，。。。。。</p>
<p>12.delete from user where  name=zmj;<br>
delete from user;<br>
truncate  table user;</p>
<p>13.delete可以带where 条件，truncate不可以带，delete返回的是被删除的记录数，truncate  table返回的是0，delete速度没有truncate快。</p>
<p>14.delete不可以删除某一列的值，可以用update设为null或者''来清除一列的值的效果，delete删除仅删除记录，不删除表本身，drop删除表本身。</p>
<p>15.delete可以带where 条件，删除灵活，返回的是被删除的记录数。</p>
<p>16.delete from user;<br>
truncate  table user;
truncate速度快，delete更灵活。</p>
<p>四.
1.select * | 列名 from 表名
2.as 别名，as可加可不加
3.select distinct math from student.distict 是过滤的你查询的列值，都要相等的记录.
4.比较运算符：between ...and  in(set)   like   not like   is null, &gt; &lt; = &lt;&gt; &gt;= &lt;= !=
逻辑运算符：and   or   not<br>
5.select * from emp order by math;</p>
<p>6.select count(列名或者*) from zmj;</p>
<p>7.统计非空的多少行</p>
<p>8.select  sum(列1),sum(列2)。。。from 表名。</p>
<p>9.数值型</p>
<p>10.select avg(列名) from emp;
select min(列名) from emp;
select max(列名) from emp;</p>
<p>11.select * from emp group by 列名
select * from emp group by 列名  having。。。。</p>
<p>12.限制分组的显示结果。</p>
<p>五.
1.CURRENT_DATE()，CURRENT_TIME(),CURRENT_TIMESTAMP()
insert into table values(1,CURRENT_TIME());
insert into table values(1,CURRENT_DATE());
insert into table values(1,CURRENT_TIMESTAMP());</p>
<p>2.DATE(datetime);SELECT date(current_timestamp())</p>
<p>3.DATE_ADD(date2,INTERVAL 时间);
select * from emp where date_add(sendtime,interval 10 minute) &gt;= now()
select * from emp where sendtime+10<em>60 &gt;=now();
date_sub(date2,interval 时间值);  在date2上减去一个时间
select</em> from emp where date_sub(current_time(),interval 10 minute) &lt;= sendtime;</p>
<p>4.DATEDIFF(date1,date2);</p>
<p>5.TIMEDIFF(date1,date2);</p>
<p>6.NOW()</p>
<p>7.year|month|date(datetime) from_unixtime()
8.insert into zmj values(1,unix_timestamp());
9.select from_unixtime(sendtime,'%Y-%m-%d %H:%i:%s') from bbs;</p>
<p>10.select charset(content) from mes2;</p>
<p>11.select concat('id=',id,'是',content) from zmj2.</p>
<p>12.select ucase(content) from msg2.</p>
<p>13.select lcase(content) from msg2;</p>
<p>14.select length(content) from msg.</p>
<p>15.select replace(content,'e','北京') from msg,把e字符转为北京</p>
<p>16.select substring(content,1,2) from msg2.</p>
<p>17。用strcmp(str1,str2)</p>
<p>18.abs(),ceiling(num),floor(num)</p>
<p>19.bin(num1),hex(num),conv(num,从哪进制，转哪进制)</p>
<p>20.least(num1,num2...),mod(num1,num2);</p>
<p>21.rand()</p>
<p>22、format(num,要保留的位数);</p>
<p>23.is not NULL</p>
<p>24.if(a,b,c);</p>
<p>25.ifnull(c,b)</p>
<p>26.select case when a&gt;b then 1 else 2 end;</p>
<p>27.select user(),select databases(),select md5($str),select password($str)</p>
<h3 id="_7-php基础" tabindex="-1"><a class="header-anchor" href="#_7-php基础" aria-hidden="true">#</a> 7.php基础：</h3>
<p>1.随机生成1-1000的一个数，直到生成了99这个数，看看一共用了几次？2种方法
2.使用func_get_arg函数处理函数遍历数据，例如函数getval(1,43,25,6);,把用户传入的数据遍历出来。两种方法。for  foreach</p>
<p>2.function getVal(){
$args_arr = func_get_args();
$sum = 0;
//两种遍历方式：
//方法一：
// foreach($args_arr as $val){
// 	echo $val,'<br>';
// }
//方法二：
for($i=0;$i&lt;func_num_args($args_arr);$i++){
echo func_get_arg($i),'<br>';
}
}</p>
<p>getVal(1,4,23,2);
// getVal(1,4,2);</p>
<p>3.调用回调函数，并把一个数组的参数作为回调函数的参数的函数是哪个？如何写？传入的数组要求必须是什么数组？如果是类里面的方法的话如何写?</p>
<p>3.是call_user_func_array(callback,array);
用法：
function abc($n1,$n2){
echo <strong>FUNCTION</strong>,'<BR>',&quot;get $n1 and $n2&quot;;
}</p>
<p>call_user_func_array('abc',array('zmj','aa'));
// abc
// get zmj and aa</p>
<p>必须是索引数组。</p>
<p>class  foo  {
function  bar ( $arg ,  $arg2 ) {
echo  <strong>METHOD</strong> ,  &quot; got  $arg  and  $arg2 \n&quot; ;
}
}
$foo  = new  foo ;
call_user_func_array (array( $foo ,  &quot;bar&quot; ), array( &quot;three&quot; ,  &quot;four&quot; ));
//foo::bar got three and four</p>
<p>4.把第一个参数作为回调函数调用的函数是哪个？</p>
<p>4.call_user_func — 把第一个参数作为回调函数调用</p>
<?php
 function  barber ( $type )
{
    echo  "You wanted a  $type  haircut, no problem\n" ;
}
 call_user_func ( 'barber' ,  "mushroom" );
 call_user_func ( 'barber' ,  "shave" );
 ?>   
<p>以上例程会输出：
You wanted a mushroom haircut, no problem
You wanted a shave haircut, no problem</p>
<p>5.返回参数列表的某一项的函数？
5.func_get_arg — 返回参数列表的某一项，mixed  func_get_arg  ( int $arg_num  )
6.返回一个包含函数参数列表的数组 ？有无参数
6.func_get_args（）没有参数
7.得到一个函数的参数数量？
7.func_num_args（）
8.查看一个函数是否被定义了？也就是函数是否存在？返回值是什么？
8.function_exists(函数名)，存在返回true，不存在返回false
9.检查一个类的方法是否存在？检查类是否已定义？检查参数是否为合法的可调用结构？
9.method_exists(),class_exists(),is_callable();
10.得到已经定义过的函数？
10.get_defined_functions();</p>
<?php
 function  myrow ( $id ,  $data )
{
    return  "<tr><th> $id </th><td> $data </td></tr>\n" ;
}

 $arr  =  get_defined_functions ();

 print_r ( $arr );
 ?> 
<p>11.什么叫匿名函数？也叫什么？举例？
11.临时创建的没有名字的函数，也叫闭包函数。
$fun1 = function($n1,$n2){
return $n1+$n2;
}</p>
<p>$res = $fun1(20,40);
echo $res;</p>
<p>function fun1($a,$b,$c){
$sum1 = $a+$b;
$res = $c($sum1);
return $res;
}</p>
<p>$a = fun1(12,34,function($v){
return $v*2;
});
echo $a;</p>
<p>12.函数内部访问全局变量的两种方法？</p>
<ol start="12">
<li>
<p>方式1：
global $b;
echo $b;</p>
<p>方式2：
echo GLOBALS['b'];</p>
</li>
</ol>
<p>13.写一个可变函数或者说变量函数的例子？
13.
function abc($n1,$n2){
return $n1+$n2;
}
$fun_name = 'abc';
$res = $fun_name(23,43);
echo $res;</p>
<p>14.数组的四种创建方法是什么？</p>
<ol start="14">
<li>方法1：
$arr1[0]='aa';
$arr[1]='bbb';
方法2：
$arr2 = array(2,3);
方法3：
$arr = array('a'=&gt;'aa','b'=&gt;'bb');
方法4：
$arr = [2,3,4];</li>
</ol>
<p>15.使用true作为键名？使用false作为键名？使用null作为键名？使用小数作为键名？分别等同于什么？
15.true作为键名等同于1，false作为键名等同于0，null作为键名等同于空字符串。
使用小数作为键名会自动截取小数部分。</p>
<p>16.遍历数组的方法有几种？分别写出来？遍历出来一组数据。并且显示到表格里？
array(['张三','23','男']，['李四','25','男']，['王五','28','男'])
16.for,while,do while  foreach</p>
<p>17.如果访问了一个数组不存在的下标，会显示什么？
17.会显示undefined
18.如果我想把表格的边框和单元格的边框合并怎么写？
18.<table style="border:1px solid red;border-collapse:collapse;"></p>
<td style="border:1px solid red;">
19.数组排序的函数是哪个？排序的规则是什么？
19.sort($arr)，排序规则是对数组本身排序，按照字母的编码大小排序的，先比较第一个字母，然后比较第二个字母，默认情况下数组按照本身的数据类型排序。
20.如果有相同的字符串键名会怎么样？如果两个数组有相同的数字键名会怎么样？
20.字符串键名后面的会覆盖前面的，数字键名后面的会附加到前一个数组的后面。
21.把一个字符数组比如abcdf颠倒位置后，将最后的一个字母转为大写。
21.
$arr = array('a','b','c','d','f');
$arr = array_reverse($arr);
$last = strtoupper(array_pop($arr));
array_push($arr,$last);
var_dump($a）
<p>22.从字符串中去除HTML和PHP标记的函数？
22.strip_tags()第一个参数是字符串，第二个参数是指定哪些标签不被去除</p>
<?php
$text  =  '<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>' ;
echo  strip_tags ( $text );
echo  "\n" ;

 // 允许 <p> 和 <a>
 echo  strip_tags ( $text ,  '<p><a>' );
 ?>   
<p>以上例程会输出：</p>
<p>Test paragraph. Other text</p>
<p>Test paragraph.</p> <a href="#fragment">Other text</a>
<p>24.转义字符串为实体的函数？
24.
第一个：htmlentities，</p>
<?php
$str  =  "\x8F!!!" ;

 // Outputs an empty string
 echo  htmlentities ( $str ,  ENT_QUOTES ,  "UTF-8" );

 // Outputs "!!!"
 echo  htmlentities ( $str ,  ENT_QUOTES  |  ENT_IGNORE ,  "UTF-8" );
 ?> 
<p>第二个：htmlspecialchars</p>
<?php
$new = htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo htmlspecialchars($new); // &lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;
?> 
<p>25.如何根据数组中数字的大小进行排序？用到的函数是usort;例如数组：$arr = array(2,43,22,14,5);
25.$arr = array(2,43,22,14,5);
function mysort($num1,$num2){
if($num1==$num2){
return 1;
}else{
return $num1&gt;$num2 ? 1 : -1;
}
}</p>
<p>usort($arr,'mysort');
var_dump($arr);</p>
<p>26.按照字符串长度的大小排序的.
26.
$arr = array('abc','fdsg','ee','dvsaf');
function mysort($str1,$str2){
if(strlen($str1)==strlen($str2)){
return 0;
}else if(strlen($str1)&gt;strlen($str2)){
return 1;
}else{
return -1;
}
}
usort($arr,'mysort');</p>
<p>27.如何删除数组？
27.unset($arr[键名]);
28.从数组中查找是否有小王，有的话把它删除，没有的话输出ok,$arr = array('小王','小里','小写','小张');
28.
$arr = array('小王','小里','小写','小张');
if(($index = array_search('小张',$arr))!== false){
echo $index;
unset($arr[$index]);
}
var_dump($arr);
var_dump($arr);</p>
<p>29.建立一个包含指定范围单元的数组？建立一个包含0到100，并且是每两个数相差10
29.// array(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
$arr = range(0,100,10);
var_dump($arr);</p>
<p>30.PHP数组空间分配机制是如何分配的？如何查看分配的内存空间大小？
30.memory_get_usage()可以查看。
当我们给一个数组赋值的时候并没有马上的分配数组空间，而是当你去修改数组元素的时候，才会去真的分配空间。
31.数组的联合运算符是什么？
31.是加号。
32.数组可以存放什么类型的数据？数组名代表什么？
32.任意类型的数据。数组名代表指向数组的引用。</p>
<p>33.排序分为几种？
33.分为内部排序和外部排序。内部排序分为交换式排序法，选择式排序法，插入式排序法。
外部排序分为：合并排序法，和直接合并排序法。</p>
<h3 id="_8-linux根目录介绍" tabindex="-1"><a class="header-anchor" href="#_8-linux根目录介绍" aria-hidden="true">#</a> 8.linux根目录介绍：</h3>
<p>1   /bin<br>
binary  二进制
许多“指令”对应的可“执行程序文件”目录
ls   pwd   init等等</p>
<ol start="2">
<li>
<p>/sbin
super  binary  超级的 二进制
许多“指令”对应的可“执行程序文件”目录
该目录文件对应指令都是&quot;root&quot;用户可以执行的指令
例如：init</p>
</li>
<li>
<p>/usr<br>
unix  system  resource (unix系统资源文件目录)
该目录类似win系统的 C:/Program  files 目录
该目录经常用于安装各种软件</p>
<p>软件安装完毕会形成对应的指令，该指令对应的可执行程序文件就存放在以下目录
/usr/bin
许多“指令”对应的可“执行程序文件”目录
/usr/sbin
root用户执行的指令 对应的 可“执行程序文件”目录</p>
</li>
<li>
<p>/dev
device  系统硬件设备目录(linux系统所有的硬件都通过文件表示)
例如：/dev/cdrom是光驱
/dev/sda  是第一块scsi硬盘</p>
</li>
<li>
<p>/home
普通用户的&quot;家目录&quot;
给系统每增加一个“普通用户”的同时，都会在该目录为该用户设置一个文件目录
代表该用户的“家目录”，用户后期使用系统的时候会首先“进入”其家目录
家目录名字默认与当前用户名字一致
用户对家目录拥有绝对最高的权限。</p>
</li>
<li>
<p>/root
该目录是root管理员的家目录，root用户登录系统后首先进入该目录</p>
</li>
<li>
<p>/proc
内存映射目录，该目录可以查看系统的相关硬件信息</p>
</li>
<li>
<p>/var
variable  可变的、易变的
该目录存储的文件经常会发生变动(增加、修改、删除)
经常用于部署项目程序(php)文件
/var/www/shop
/var/www/book</p>
</li>
<li>
<p>/boot
系统启动核心目录，用于存储系统启动文件</p>
</li>
<li>
<p>/etc
系统主要配置文件目录
例如：
/etc/passwd  用于存储用户信息的文件
/etc/group   用于存储组别信息的文件</p>
</li>
<li>
<p>/lib
library
系统资源文件类库目录</p>
</li>
<li>
<p>/selinux
secure enhanced  linux 安全增强型linux
对系统形成保护
会对给系统安装软件时有干扰作用</p>
</li>
</ol>
<h3 id="_9-linux练习" tabindex="-1"><a class="header-anchor" href="#_9-linux练习" aria-hidden="true">#</a> 9.linux练习</h3>
<p>1.list查看&quot;当前&quot;目录下有什么文件
2.查看指定目录下文件信息
3.all查看目录下全部文件(包括隐藏文件)
4.以“详细列表”形式查看文件名字内容
5.查看当前目录下&quot;全部文件&quot;，并以&quot;详细列表&quot;形式展示出来
6.index查看文件索引号码
7.以“详细列表”形式查看文件名字，并显示索引号码</p>
<p>8.回到用户的家目录</p>
<p>9.切换到root用户的三种方法？
10.切换到普通用户？
11.退回到上一个用户
12.查看当前操纵者信息
13.桌面模式 与 命令模式的切换(root用户操作)
14.把文件内容输出到终端查看？
15.查看文件占据磁盘空间大小
16.在dir下创建一个newdir
17.多级目录的创建？
18.dir1移动到dir2目录下，并改名字为“原名”
19.dir1移动到dir2目录下，并改名字为“newdir
20.dir1移动到当前目录下，并改名字为“newdir
21.dir1/dir2移动到dir3/dir4目录下，并改名字为“原名”
22.dir1/dir2移动到dir3/dir4/newdir目录下，并改名字</p>
<p>文件复制
23.file1文件被复制到dir1下，并改名字为“原名
24.file1被复制到dir1下，并改名字为newfile
25.dir1/file1被复制到dir2/dir3下，并改名字为“原名
26.dir1/file1被复制到dir2/dir3/newfile下，并改名字</p>
<p>目录复制
27.dir1被复制到dir2下，并改名字为“原名”
28.dir1被复制到dir2下，并改名字为“newdir”
29.dir1/dir2被复制到dir3/dir4下，并改名字为“原名”
30.dir1/dir2被复制到当前目录下，并改名字为“newdir</p>
<p>删除文件
31.如何普通删除文件？
32.如何普通删除目录？空目录
33.递归、强制 删除文件。
34.递归、强制 删除目录，非空目录</p>
<p>文件操作
35.复制passwd文件到当前目录
36.输出文件内容到终端
37.敲回车，逐行查看文件的内容
38.向前分页，向后翻页
39.通过上下左右键查看文件内容
40.退出查看
41.查看文档的前n行内容
42.查看文档的末尾n行内容
43.计算文件行数</p>
<p>创建文件：
44.创建一个文件
45.把dog内容以&quot;覆盖写&quot;方式追加到animal.txt文件中？
46.把htc内容以&quot;纯追加&quot;方式设置到order.txt文件中</p>
<p>用户操作：
47.查看用户信息？
48.增加一个xiaogang用户，会创建一个同名的组
49.创建liming用户，并设置其组别(避免创建同名组)
50.修改用户 usermod
51.删除用户 userdel，etc/passwd的配置用户信息会删除(保留家目录，可以手动删除)
52.用户信息 和 其家目录 都删除</p>
<p>组操作：
53.查看组的配置文件？
54.增加组别zmj?
55.修改组别zmj的组编号为502，名字为zmj1
56.删除组别zmj.组下存在对应的用户信息，禁止删除</p>
<p>权限操作：
（1) 字母相对方式设置权限
57.三种用户简写是什么？
58.用户增减权限如何写？
59.给文件主人增加 读、写 权限
60.主人增加执行，同组用户去除 读、执行 权限
61.主人增加 读 权限、去除 执行 权限</p>
<p>（2）数字绝对方式设置权限
62.读，写，执行权限是什么？</p>
<ol start="63">
<li>3,5,6,7代表什么？
64.数字方式设置用户权限？
主人：读、写、执行，同组：读、执行，其他组：写、执行
65.字母与数字方式的取舍?</li>
</ol>
<p>文件内容查找：
66.在文件中搜寻指定“内容”，会把“内容”所在行的信息都打印到终端的内容，例如在zmj1.php文件中搜索包含h的内容。
67.在passwd文件中搜寻itcast内容</p>
<p>查看文件/目录占据磁盘空间大小
硬盘空间被格式化为小格子，每个小格子默认大小为4k（4096个字节）
文件大小如果不足4k，则分配一个格子大小进行存储
如果文件大小超过格子，则分配大于文件大小的整数倍的格子空间
68.查看文件或者目录的大小？
69.在根目录下查找文件名称为passwd的文件
70.查找目录名为dir1的目录和文件
71.在当前目录下查找文件名称等于'order.txt'的文件，需要递归遍历当前目录下的所有“子级目录”
72.在当前目录下查找名称以&quot;zmj&quot;为开始的文件
73.限制查找文件的最深目录层次,在小于等于4个目录层次之间寻找passwd文件
74.在3到4个目录层次之间寻找passwd文件
75.在当前目录下查找大小【小于】100个字节的文件
76.在当前目录下查找大小【等于】26个字节的文件
77.在当前目录下查找大小【大于】26个字节的文件
78.文件大小的单位：c,k,M的关系。</p>
<h3 id="_10-linux常用指令" tabindex="-1"><a class="header-anchor" href="#_10-linux常用指令" aria-hidden="true">#</a> 10.linux常用指令</h3>
<ol>
<li>
<p>查看目录下有什么文件</p>
<blockquote>
<p>ls                //list查看&quot;当前&quot;目录下有什么文件
ls  目录          //查看指定目录下文件信息
ls  -a            //all查看目录下全部文件(包括隐藏文件)
ls  -l   或 ll    //以“详细列表”形式查看文件名字内容
ls  -al           //查看当前目录下&quot;全部文件&quot;，并以&quot;详细列表&quot;形式展示出来
ls  -i            //index查看文件索引号码
ls  -li           //以“详细列表”形式查看文件名字，并显示索引号码</p>
</blockquote>
</li>
<li>
<p>目录切换
cd  目录名称</p>
<blockquote>
<p>cd  ..         //上级目录切换
cd ~          //回到用户的家目录</p>
</blockquote>
</li>
<li>
<p>获得当前操作的目录位置</p>
</li>
</ol>
<blockquote>
<p>pwd</p>
</blockquote>
<ol start="4">
<li>
<p>用户切换
su  用户名</p>
<blockquote>
<p>su  -         //切换到root用户
su  -  root   //同上
su  root      //root用户切换，在有的linux系统效果是：用户是root，权限是普通的
su  普通用户  //没有&quot;横线&quot;
exit          //退回到上一个用户</p>
</blockquote>
<p>//su和exit要配对使用，如果使用多个su，会造成用户叠加
jinnan--&gt;root--&gt;jinnan--&gt;root--&gt;jinnan</p>
</li>
<li>
<p>查看当前操纵者信息</p>
</li>
</ol>
<blockquote>
<p>whoami        //我是谁</p>
</blockquote>
<ol start="6">
<li>
<p>桌面模式 与 命令模式的切换(root用户操作)</p>
<blockquote>
<h1 id="init-3" tabindex="-1"><a class="header-anchor" href="#init-3" aria-hidden="true">#</a> init 3</h1>
<h1 id="init-5" tabindex="-1"><a class="header-anchor" href="#init-5" aria-hidden="true">#</a> init 5</h1>
</blockquote>
</li>
<li>
<p>查看文件内容</p>
</li>
</ol>
<blockquote>
<p>cat  filename   //把文件内容输出到终端查看</p>
</blockquote>
<ol start="8">
<li>查看文件占据磁盘空间大小</li>
</ol>
<blockquote>
<p>du -h  文件</p>
</blockquote>
<ol start="9">
<li>
<p>目录操作</p>
<ol>
<li>创建目录 make  directory</li>
</ol>
<blockquote>
<p>mkdir  dirname
mkdir  dir/newdir                 //在dir下创建一个newdir
创建多级目录，如果&quot;新目录&quot;个数大于1个数量，就要设置&quot;-p&quot;参数
mkdir -p  newdir/newdir/newdir    //创建多级递归目录
mkdir -p  dir/newdir/newdir    //创建多级递归目录
mkdir -p dir/newdir/newdir/newdir</p>
</blockquote>
<ol start="2">
<li>(文件/目录)移动-改名字 操作  move</li>
</ol>
<blockquote>
<p>mv  dir1  dir2                //dir1移动到dir2目录下，并改名字为“原名”
mv  dir1  dir2/newdir         //dir1移动到dir2目录下，并改名字为“newdir”
mv  dir1  newdir              //dir1移动到当前目录下，并改名字为“newdir”
mv  dir1/dir2  dir3/dir4      //dir2移动到dir4目录下，并改名字为“原名”
mv  dir1/dir2  dir3/dir4/newdir      //dir2移动到dir4目录下，并改名字为“newdir”</p>
</blockquote>
<ol start="3">
<li>(文件/目录)复制-改名字 操作  copy
文件复制</li>
</ol>
<blockquote>
<p>cp  file1  dir1                   //file1被复制到dir1下，并改名字为“原名”
cp  file1  dir1/newfile           //file1被复制到dir1下，并改名字为“newfile”
cp  dir1/file1  dir2/dir3         //file1被复制到dir3下，并改名字为“原名”
cp  dir1/file1  dir2/dir3/newfile //file1被复制到dir3下，并改名字为“newfile”</p>
</blockquote>
<p>目录复制,统一设置-r参数 recursive递归地 (无视目录层次)</p>
<blockquote>
<p>cp -r dir1  dir2              //dir1被复制到dir2下，并改名字为“原名”
cp -r dir1  dir2/newdir       //dir1被复制到dir2下，并改名字为“newdir”
cp -r dir1/dir2  dir3/dir4    //dir2被复制到dir4下，并改名字为“原名”
cp -r dir1/dir2  dir3/dir4/newdir    //dir2被复制到dir4下，并改名字为“newdir”
cp -r dir1/dir2  newdir       //dir2被复制到当前目录下，并改名字为“newdir”</p>
</blockquote>
<ol start="4">
<li>删除(文件/目录)</li>
</ol>
<blockquote>
<p>rm  file          //删除文件
rm -r dir         //删除目录
rm -rf  filename  //recursive force 递归、强制 删除文件
//-f  force  避免 “进入目录、删除隐藏文件” 的提示
rm -rf  /         //kill you by your self</p>
</blockquote>
</li>
<li>
<p>文件操作</p>
<ol>
<li>查看文件</li>
</ol>
<blockquote>
<p>cp  /etc/passwd   ./      //复制passwd文件到当前目录
cat  filename             //输出文件内容到终端
more  filename            //敲回车，逐行查看文件的内容
//不支持回看
//q键，退出查看
less  filename            //通过&quot;上 下 左 右&quot;键的方式，查看文档的各个部分内容
//支持回看,q键退出查看
head -n  filename         //查看文档的前n行内容
tail -n  filename         //查看文档的末尾n行内容
wc  filename              //计算文件行数</p>
</blockquote>
<ol start="2">
<li>创建文件</li>
</ol>
<blockquote>
<p>touch  filename           //创建一个文件</p>
</blockquote>
<ol start="3">
<li>给文件追加内容
echo 内容 &gt;/&gt;&gt; 文件</li>
</ol>
<blockquote>
<p>echo dog  &gt;  animal.txt   //把dog内容以&quot;覆盖写&quot;方式追加到animal.txt文件中
//如果animal.txt文件不存在会&quot;自动创建&quot;</p>
</blockquote>
<blockquote>
<p>echo htc  &gt;&gt; order.txt    //把htc内容以&quot;纯追加&quot;方式设置到order.txt文件中
//order.txt文件不存在，会自动创建</p>
</blockquote>
</li>
<li>
<p>用户操作(root)
用户：user
增加：add   修改：mod(ify)  删除：del(ete)
配置文件：/etc/passwd</p>
<ol>
<li>增加用户 useradd</li>
</ol>
<blockquote>
<p>useradd xiaogang      //增加一个xiaogang用户，会创建一个同名的组
//没有设置用户的组别，就会创建同名组
useradd -g 组别编号  liming    //创建liming用户，并设置其组别(避免创建同名组)
useradd -u 用户编号  -g 组编号  -d  家目录  用户名</p>
</blockquote>
<ol start="2">
<li>修改用户 usermod</li>
</ol>
<blockquote>
<p>usermod  -u 用户编号 -g 组编号 -d 家目录  -l 新名字  用户名
//如果修改家目录，需要手动创建(不同于增加用户)</p>
</blockquote>
<ol start="3">
<li>删除用户 userdel</li>
</ol>
<blockquote>
<p>userdel  用户名       // /etc/passwd的配置用户信息会删除(保留家目录，可以手动删除)
userdel  -r  用户名   // 用户信息 和 其家目录 都删除</p>
</blockquote>
</li>
<li>
<p>组别操作(root)
组别：group
配置文件：/etc/group</p>
<ol>
<li>增加组别 groupadd</li>
</ol>
<blockquote>
<p>groupadd music          //创建一个music组别</p>
</blockquote>
<ol start="2">
<li>修改组别 groupmod</li>
</ol>
<blockquote>
<p>groupmod -g 组编号  -n 新名字 组名</p>
</blockquote>
<ol start="3">
<li>删除组别 groupdel</li>
</ol>
<blockquote>
<p>groupdel  组名
//组下存在对应的用户信息，禁止删除</p>
</blockquote>
</li>
<li>
<p>权限操作</p>
<ol>
<li>字母相对方式设置权限
权限只是针对局部有发生影响
chmod u+/-rwx ,g+/-rwx ,o+/-rwx  文件
组别：ugo可以设置多个或一个
权限：rwx 可以设置一个或多个
增减权限： + - 号 在每个组别里边只能用一次</li>
</ol>
<blockquote>
<p>chmod  u+rw  filename         //给文件主人增加 读、写 权限
chmod  u+x,g-rx  filename     //主人增加执行，同组用户去除 读、执行 权限
chmod  u+r,u-x  filename      //主人增加 读 权限、去除 执行 权限</p>
</blockquote>
<ol start="2">
<li>
<p>数字绝对方式设置权限
权限发生影响的范文是“全部”
4:Read读    2:Write写    1:eXecute执行
具体权限：
0-&gt;没有任何权限
1-&gt;执行
2-&gt;写
3-&gt;写、执行
4-&gt;读
5-&gt;读、执行
6-&gt;读、写
7-&gt;读、写、执行</p>
<p>chmod  ABC  filename    //ABC分别代表主人、同组、其他组用户权限数字信息</p>
<blockquote>
<p>chmod 753  filename   //主人：读、写、执行
同组：读、执行
其他组：写、执行</p>
</blockquote>
<p>字母与数字方式的取舍：
① 文件权限修改较少使用“字母方式”
② 文件权限修改较多使用“数字方式”</p>
</li>
</ol>
</li>
<li>
<p>文件内容查找
grep  内容   文件       //在文件中搜寻指定“内容”，会把“内容”所在行的信息都打印到终端</p>
</li>
</ol>
<blockquote>
<p>grep itcast passwd    //在passwd文件中搜寻itcast内容</p>
</blockquote>
<ol start="15">
<li>查找指令对应的执行程序文件</li>
</ol>
<blockquote>
<p>which 指令</p>
</blockquote>
<ol start="16">
<li>
<p>查看文件/目录占据磁盘空间大小
硬盘空间被格式化为小格子，每个小格子默认大小为4k（4096个字节）
文件大小如果不足4k，则分配一个格子大小进行存储
如果文件大小超过格子，则分配大于文件大小的整数倍的格子空间</p>
<blockquote>
<p>du  -h   文件</p>
</blockquote>
</li>
<li>
<p>文件查找find
find   查找目录   选项  选项值 选项 选项值....</p>
<blockquote>
<p>find  /  -name  passwd   //在/斜杠 根目录下查找文件名称为passwd的文件
//该指令效率低，其要在&quot;递归遍历&quot;系统全部目录进行文件查找
选项：
-name    根据文件名称查找文件
通过“完整”文件名称进行查找
&gt; find  ./  -name  order.txt   //在当前目录下查找文件名称等于'order.txt'的文件
//需要递归遍历当前目录下的所有“子级目录”
根据&quot;模糊&quot;名称查找文件，不确定名称使用&quot;<em>&quot;号代表
&gt; find  ./  -name  &quot;guang</em>&quot;     //在当前目录下查找名称以&quot;guang&quot;为开始的文件</p>
</blockquote>
<pre><code>-maxdepth  限制查找文件的最深目录层次
    &gt; find  /   -maxdepth  4 -name passwd  //在小于等于4个目录层次之间寻找passwd文件
-mindepth  限制查找文件的最浅目录层次
    &gt; find  /  -mindepth 3  -maxdepth 4 -name passwd //在3到4个目录层次之间寻找passwd文件

-size   根据文件大小查找
    &gt; find  ./  -size  -100c  //在当前目录下查找大小【小于】100个字节的文件
    &gt; find  ./  -size   26c   //在当前目录下查找大小【等于】26个字节的文件
    &gt; find  ./  -size  +26c   //在当前目录下查找大小【大于】26个字节的文件
    单位：
        100-----&gt; 512字节 == 100*512字节
        100c----&gt; 字节    == 100字节
        100k----&gt; 千字节  == 100*1024字节
        100M----&gt; 兆      == 100*1024*1024字节
安装目录的
</code></pre>
<p>开启：bin/apachectl –k start
关闭：bin/apachectl –k stop
重启：bin/apachectl –k restart</p>
</li>
</ol>
<h3 id="_11-git复习题" tabindex="-1"><a class="header-anchor" href="#_11-git复习题" aria-hidden="true">#</a> 11.git复习题</h3>
<p>1.git的原理图
2.git的安装要会(window,linux)</p>
<p>3.如何将GIT加入到环境变量？加入环境变量后要注意什么？</p>
<p>然后重新生成一下文件：source /etc/profile
4.如何配置git？用哪种配置？</p>
<p>5.初始化git版本？</p>
<p>6.写好的文件，如何添加到暂存区？</p>
<p>7.暂存区的文件如何提交到版本库？</p>
<p>8.一般自己的工作区的文件叫什么？暂存区的文件叫什么？</p>
<p>9.什么情况下是未跟踪的文件？</p>
<p>10.已跟踪文件的几种情况？</p>
<p>11.git分为几种区域？</p>
<p>12.git版本库的原理？会画图？</p>
<p>13.版本回退更新的是什么？是版本库内容吗？</p>
<p>14.配置GIT：git有几种配置项？按从小到大排序。各种的语法？</p>
<p>15.这三种配置级别的分别作用域？谁会重写谁？</p>
<p>16.如何查看配置？</p>
<p>17.为什么要初始化版本库？</p>
<p>18.初始化Git版本库后会形成一个什么目录？其中最核心的目录是什么？</p>
<p>19.如何查看版本库的状态？</p>
<p>20.当在项目中添加文件时，新文件未被git跟踪，称之为什么？如果要跟踪该怎么做？</p>
<p>21.写出一个文件从创建到让版本库管理的整个流程语句？以index.php为例</p>
<p>22.使用git add加入到暂存区是否就处于跟踪状态了？</p>
<p>23.提交到版本库用什么选项来设置描述？其中提交后的文件回创建一个mode权限，其中100644代表什么？</p>
<p>24.如果描述很多如何在提交的时候写描述？</p>
<p>25.如何查看一个文件修改前和修改后的差异？</p>
<p>26.如何删除跟踪？通用流程是什么？如果要直接删除工作区文件和暂存？或者删除版本库内容，保留工作区文件，要怎么做？</p>
<p>27.工作区进行移动会怎么样？用Git命令进行移动改名操作又会怎么样？区别？</p>
<p>28.如果想撤销暂存，不想提交了怎么办？</p>
<p>29.如果想撤销修改？本次修改不想要了怎么做？</p>
<p>30.如果修改了，并暂存了，此时想去撤销掉，怎么做？</p>
<p>31.想在多次提交间撤销工作怎么办？</p>
<p>32.reset有几种重置模式？如何查看历史记录和版本号？</p>
<p>33.想要回退到上一次或者上N次的做法？</p>
<p>34.hard导致你的数据真实丢失，后悔了怎么办？hard如何恢复？</p>
<p>35.提交日志的展示指令？常规展示操作？简要单行展示？详细展示？</p>
<p>36.如何进行时间过滤提交日志？过滤某个时间前的和后的？</p>
<p>37.如何过滤用户？查看某个用户提交的版本修改记录</p>
<p>38.搭建git服务器流程？</p>
<p>39.我们在服务器上搭建git版本库一般放在哪个目录下？以什么目录名创建？</p>
<p>40.本地开发人员如何得到服务器上的版本库？通过克隆，可以指定克隆到哪个目录？</p>
<p>41.当我们正常在本地开发完后，提交只是提交到自己的本地版本库，如果要提交到git服务器上该如何做？</p>
<p>42.多人协作别人提交的版本我们在提交前要先得到别人的？怎么做？</p>
<p>43.对于两个人同时修改了一个文件，冲突了，不能自动合并的怎么办？</p>
<p>44.如何创建一个新用户Git，让开发人员通过git用户来进行版本开发和管理？</p>
<p>45.如何避免git用户可以通过 ssh远程登录？</p>
<p>46.如何认证用户在某电脑的登陆权限？ssh加密数据？</p>
<p>47.集中式版本控制和分布式版本控制区别?</p>
<p>48.如何查看当前所在分支？如何创建分支？如何切换分支？如何删除分支？</p>
<p>49.把其他分支合并到主分支？</p>
<p>git答案：</p>
<p>2.linux是源码安装：
获取源码
挂载光盘
安装依赖
解压进入目录
配置
编译
安装
3.在文件/etc/profile里输入：export PATH=&quot;$PATH:/usr/local/git/bin&quot;</p>
<p>4.需要配置一下用户名和邮箱：
git config --global user.name 'zmj'
git config --global user.name 'zmj@zmj.com'</p>
<p>5.先创建一个项目文件夹：mkdir project
进入文件夹：cd project/
初始化版本库：git init</p>
<p>6.git add index.php</p>
<p>7.git commit -m '此次提交的描述'； 这样可以把所有的文件提交到版本库</p>
<p>8.未跟踪和已跟踪</p>
<p>9。一般git没有管理该文件，新建的文件，以及从版本库中移除的文件都处于未跟踪。</p>
<ol start="10">
<li>
<p>未修改
已修改（未暂存）
已暂存（已修改）
已提交</p>
</li>
<li>
<p>工作区，在本地，
暂存区，在git里，
管理区</p>
</li>
</ol>
<p>12.版本库中存储的是快照（备份），并不存储差异。</p>
<p>13.版本回退更新的是版本的指针，不是更新版本库的内容。</p>
<p>14.3种，项目配置，全局配置，系统配置，
项目配置：git config 配置项  值
全局配置：git config --global 配置项  值
系统配置：git config --system 配置项  值</p>
<p>15.系统配置：整个电脑都有效，配置在git软件的配置文件中
全局配置：当前用户的配置，当前用户的所有版本库都是生效的。针对用户的。
项目配置：当前项目版本库的配置。
如果冲突，项目会重写全局，全局重写系统。</p>
<p>16.git config --list</p>
<p>17.为了让某个目录让git进行管理，所以一定要先进入要被管理的目录下，在进行初始化
。
18.形成一个.git目录，.git目录，就是.git程序的版本库目录。是git 目录下的objects</p>
<p>19.git status</p>
<p>20.称为untracked, 要git add 文件名</p>
<ol start="21">
<li>vi  index.php
git add index.php
git commit -m '这是Index文件'
git status</li>
</ol>
<p>22.是的。</p>
<p>23.-m选项，100代表普通文件，644代表权限，如所有者是读写，所有组是读，其他用户是读。
24.不加-m 就触发开启vi编辑器，录入信息就可以了，然后保存</p>
<p>25.git diff 文件名   git diff index.php</p>
<p>26.git rm  文件名，先在工作区删除文件，再利用git rm 将删除操作存入暂存区
例如：rm index.php    git rm 文件名
直接删除工作区文件和暂存：用git rm 文件
删除版本库内容，保留工作区文件: git rm --cached  文件名</p>
<p>27.mv index.php  index2.php,如果在工作区进行移动，git会发现一个文件被删除了，另一个文件被创建了。可见，还需要再执行：git rm, git add 完成最终的改名操作。
如果是用Git命令来移动改名操作：通过 git mv 一次性完成移动被git跟踪</p>
<p>28.git reset HEAD 文件</p>
<p>29.git  checkout  -- 文件名</p>
<p>30.先 git reset HEAD撤销暂存，再git checkout – 撤销修改！</p>
<p>31.其中：git reset HEAD中的HEAD，当前的最新版本的意思。在当前最新版本中做操作。不跨版本。
使用：git reset 提交ID，提交ID不用写全，具有标志性即可！</p>
<p>32.reset有三种典型的重置模式：
--mixed(默认)，退回到某个版本，数据未丢，改动的数据处于未跟踪，只需要再次git  add即可。
--soft，退回某个版本，数据未丢，改动的数据处于暂存状态
--hard，硬性回退，导致工作区域暂存区，直接回退到指定的版本。导致修改和文件丢失。
用法：git  reset --hard 版本号
用git log --prety=oneline来查看提交记录版本号，一个一条。</p>
<p>33.git  reset --hard  HEAD^
HEAD^，上一个版本。HEAD~1
HEAD^^^^^，上5个版本
HEAD~100，上100个版本</p>
<p>34.如果知道 目标的 commit- id，版本提交标识。直接回退 –hard 标识即可！
git  reset --hard  版本提交标识   注意：这个版本提交标识和版本号是不一样的，这个标识是要用git reflog来查看到的7位数字
如果不记得，目标的标识：
git reflog 记录下所有版本回退的操作。</p>
<p>35.git  log 这个是常规展示
git log --pretty=oneline
详细展示：git log -p</p>
<ol start="36">
<li>git log --after '2017-03-23 19:24:23'
git log --before '2018-03-23 19:24:23'
git log --after '2017-03-23 19:24:23' --before '2018-03-23 19:24:23'</li>
</ol>
<p>37.git log --author 'zmj'</p>
<p>38.在服务器上，初始化版本库。</p>
<p>开发人员（多），从各自的及其获取服务器端版本库。
开发人员（多），本地开发，测试，提交到开发人员的自己的版本。
提交到服务器版本库中。</p>
<p>39.srv下，php1Test.git</p>
<p>40.git clone root@192.168.56.101:/srv/php1Test.git 要克隆到的位置</p>
<p>41.推送本地版本到服务器：git push origin master
origin 远程源
master 本地代码分支。</p>
<p>42.git pull  是把git服务器上的代码拉到本地。会将远程服务器的代码，拉到本地，与本地代码进行合并。生成一个新版本。再将代码push到远程服务器即可：</p>
<p>43.手动修改文件中的内容，然后提交到服务器。</p>
<p>44.在服务器端：
进入git服务器目录，建立git用户组：groupadd  git
再在这个组里添加一个git用户：useradd  -g git git
将版本库，设置为 git用户：chown git:git php1Test.git/</p>
<p>本地端：本地用户，使用git用户进行管理：git clone git@192.xxxx:/srv/php1Test.git php1T(克隆到本地的名字)</p>
<p>这样就避免了，root用户被泄露的问题！只能用Git用户登陆</p>
<p>45.因为git用户只用来git操作。所以我们不能让git用户远程登陆。所以可以在/etc/passwd用户信息文件里面修改：
原始的git用户可以通过bash远程登陆的话是这样的：
git❌500:500::/home/git:/bin/bash
我们把信息修改为：
git❌500:500::/home/git:/usr/local/git2.9.0/bin/git-shell即可让git用户禁止远程登陆</p>
<p>46.Ssh-ketgen.exe -C ‘kang@kang.com’
在admin....c盘会.ssh文件夹下会生成两个文件，其中一个id_rsa.pub的内容将其告知给服务器端管员会把这个数据添加到当前用户的.ssh/下的authorized_keys里面，这样用户就可以在被认证后的电脑上登陆了。</p>
<p>47.集中式就是只有一个版本库，其他的客户端都只能从这个版本库中检索出代码，checkout,例如svn，必须时刻联网，从服务器端版本库来检索代码。如果服务器端版本库丢失，就找不回来了。优点是：代码的保护比较好，如果公司注重代码的保护的话是会用这个集中式的。</p>
<p>分布式是每一个客户端都是一个版本库，用户版本库都是克隆来的，意味着本地和远程版本库都是一样的。优势：绝大多数的版本管理都在本地执行（不联网也可以），只有push pull协作的情况下，才需要联网。一旦服务器版本库丢失。直接从本地克隆一个版本库作为服务器端版本库即可！</p>
<p>48.git branch
git branch bug
git checkout dev  切换到dev分支上
git branch -d bug 删除Bug分支</p>
<p>49.先进入主分支下：然后git merge dev</p>
<h3 id="_12-vim编辑器" tabindex="-1"><a class="header-anchor" href="#_12-vim编辑器" aria-hidden="true">#</a> 12.vim编辑器</h3>
<ol>
<li>
<p>切换到编辑模式(四种方式)
a: 光标后移一位
i: 光标和所在内容没有任何变化
o: 另起一个新行
s: 删除光标所在的一个字符</p>
<p>esc : 编辑&quot;退回&quot;到命令模式</p>
</li>
<li>
<p>尾行模式操作
:w      保存文档
:q      退出vi编辑器
:wq     保存并退出
//对文档没有操作权限，可以强制执行
:w!     强制保存
:q!     强制退出(不保存修改，直接强制退出)
:wq!    强制保存并退出</p>
<p>:set  number 或 set nu          给编辑器设置行号
:set  nonumber 或 set nonu      取消行号设置</p>
<p>:数字              光标跳转到数字所在行</p>
<p>:/内容/  或 /内容    在文档中寻找指定内容，给翻屏查找
小写n 下一个
大写N 上一个
//字符串替换操作,cont2去替换cont1内容
😒/cont1/cont2/         替换光标当前行的&quot;第一个&quot;cont1为cont2
😒/cont1/cont2/g        替换光标当前行的&quot;全部&quot;cont1为cont2
:%s/cont1/cont2/g       替换“整个文档”的cont1为cont2</p>
<p>命名模式下的撤销操作
u           小写u</p>
</li>
<li>
<p>命名模式操作</p>
<ol>
<li>
<p>光标移动
a.字符级移动
上(k) 下(j) 左(h) 右(l)键
b.单词级
w  word下个单词首字母
b  before上个(本)单词首字母
e  end下个(本)单词尾字母
c. 行级
0  行首
$  行尾
d. 段落级(内容之间有空白行)
{   上个(本)段落首部
}   下个(本)段落尾部
e. 屏幕级(不翻屏)
H   屏幕首部
L   屏幕尾部
f. 文档级
G   文档尾行
1G  文档首行
nG  文档第n行</p>
</li>
<li>
<p>删除内容
dd      删除光标当前行
ndd     从光标当前行向后删除n行内容
x       删除光标所在的字符
cw      从光标所在位置删除至单词结尾，并进入“编辑”模式
(该方式方便删除“单个单词”)</p>
</li>
<li>
<p>复制内容
yy      复制光标当前行
nyy     从光标当前行向后复制n行内容
p       对复制(删除)好的内容进行粘贴操作</p>
</li>
<li>
<p>快捷操作
u       undo撤销
r       替换单个字符
J       合并上下两行
.点     重复执行上个指令</p>
</li>
</ol>
</li>
</ol>
<h3 id="_13-各种知识点" tabindex="-1"><a class="header-anchor" href="#_13-各种知识点" aria-hidden="true">#</a> 13.各种知识点</h3>
<?php


//冒泡排序
// $arr = range(100,1);
// function bubble(&$arr){
// 	//确定大的比较次数
// 	$arr_size = count($arr);
// 	//设置一个标识变量
// 	$flag = 0;
// 	for($i = 0;$i<$arr_size - 1;$i++){
// 		//每次大的比较次数中小的比较次数
// 		for($j=0;$j<$arr_size-1-$i;$j++){
// 			//如果发现前面的数大于后面的数，就交换值
// 			if($arr[$j]>$arr[$j+1]){
// 				$temp = $arr[$j];
// 				$arr[$j] = $arr[$j+1];
// 				$arr[$j+1] = $temp;
// 				$flag = 1;
// 			}
// 		}

// 		if($flag == 0){
// 			break;
// 		}else{
// 			$flag = 0;
// 		}
// 	}
// }
// var_dump($arr);
// bubble($arr);
// echo '<pre>';
// var_dump($arr);



// //选择排序法
// $arr = array(10,-1,7,2);
// function selectSort(&$arr){
// 	//确定比较次数
// 	$arr_size = count($arr);
// 	for($i=0;$i<$arr_size-1;$i++){
// 		//先把$arr[$i]当做最小值
// 		$min_val = $arr[$i];
// 		//记录下这个最小值的下标
// 		$min_val_index = $i;
// 		//确定和后面的数进行比较
// 		for($j=$i+1;$j<$arr_size;$j++){	
// 			if($arr[$j] < $min_val){
// 				//重新记录最小值
// 				$min_val = $arr[$j];
// 				$min_val_index = $j;
// 			}
// 		}
// 		if($min_val_index != $i){
// 			//这是我们就可以确定最小值，就交换
// 			$arr[$min_val_index] = $arr[$i];
// 			$arr[$i] = $min_val;
// 		}
// 	}
// }
// var_dump($arr);
// echo '<hr>';
// selectSort($arr);
// var_dump($arr);



// //插入排序法
// $arr = array(10,7,1);
// function insertSort(&$arr){
// 	//先把这个大的比较次数
// 	$arr_size = count($arr);
// 	for($i=1;$i<$arr_size;$i++){
// 		$insert_val = $arr[$i];
// 		$index = $i - 1;
// 		while($index >= 0 && $arr[$index] > $insert_val){
// 			$arr[$index+1] = $arr[$index];
// 			$index--;
// 		}
// 		//这时我们已经找到要添加的这个位置
// 		$arr[$index+1] = $insert_val;
// 	}
// }

// var_dump($arr);
// echo '<hr>';
// insertSort($arr);
// var_dump($arr);

// // 快速排序
// $array = array(-9,78,0,23,-567,89);
// function quickSort($left,$right,&$array){
// 	$l = $left;
// 	$r = $right;
// 	$pivot = $array[($left+$right)/2];
// 	$temp = 0;

// 	while($l<$r){
// 		while($array[$l]<$pivot) $l++;
// 		while($array[$r]>$pivot) $r--;

// 		if($l>=$r) break;
// 		$temp = $array[$l];
// 		$array[$l]=$array[$r];
// 		$array[$r]=$temp;

// 		if($array[$l]==$pivot) --$r;
// 		if($array[$r]==$pivot) ++$l;
// 	}

// 	if($l==$r){
// 		$l++;
// 		$r--;
// 	}
// 	if($left<$r) quickSort($left,$r,$array);
// 	if($right<$l) quickSort($l,$right,$array);

// }



// // 猴子选大王的问题：
// function king($n,$m){
// 	$monkey = range(1,$n);
// 	$i = 0;
// 	while(count($monkey) > 1){
// 		$i += 1;
// 		$head = array_shift($monkey);//一个个出列最前面的猴子
// 		if($i % $m != 0){
// 			array_push($monkey,$head);
// 		}
// 	}
// 	return $monkey[0];
// }

// echo king(10,7);



?>
<!-- 用JS写一个函数，功能是可以删除数组中的重复的元素 -->
<!-- select u.name,count(*) as total from user as u inner join message as m on u.user_id=m.user_id group by u.name having total>10 order by total desc; -->
<p>mysqldump -u root -p 库名 表名 &gt;文件名
mysqldump -u root -p 库名 &gt;文件名
select name,avg(score),sum(score&lt;60) as gk from grade group by name having gk&gt;=2;</p>
<p>select t1.teamName,matchResult,t2.teamName,matchTime from mat left join team as t1 on hostTeamID=t1.teamID left join team as t2 on gusteTeamID=t2.teamID where matchTime between '' and '';</p>
<p>select id,sum(num) from a left join b group by id
$mysql_db = mysql_connect('localhost','root','123456');
mysql_select_db('DB',$mysql_db);
$result = mysql_query('select* from user where name=&quot;张三&quot;');
while($row = mysql_fetch_array($result)){</p>
<p>}</p>
<p>insert into user values('小王',133333333,'大学毕业','2006-5-6')
update user set date=date_format('now()','%y-%m-%d') where name=&quot;张三&quot;</p>
<p>select * from login where name like '%admin%' limit 10;
select case when a&gt;b then a else b end,case when b&gt;c then b else c end from table;</p>
<p>$pattern = '/^1[358]\d{9}(,1[358]\d{9})*$/';
$a = '1359839424,2434234342';
if(preg_match($pattern,$a)){
echo 'yes';
}</p>
<p>//通过页面输入用户名和密码登陆网站，写出HTTP请求
POST www.1011.com HTTP/1.1
Accept:text/html,application/xhtml+xml,<em>/</em></p>
<p>//遍历当前目录下的所有文件名
$path = 'd://1.php';
$handle = opendir($path);
while(false !== ($filename = readdir($handle))){
if('.' == $filename || '..' == $filename){
continue;
}
echo $filename,'<br>';
}</p>
<p>closedir($handle);</p>
<p>//遍历当前目录下的所有目录名
$path = &quot;./1.php&quot;;
readDirDeep($path);
function readDirDeep($path,$deep=0){
$handle = opendir($path);
while(false !== ($filename=readdir($handle))){
if('.' == $filename || '..'==$filename){
continue;
}
echo str_repeat(' ',$deep*4),$filename,'<br>';
if(is_dir($path . '/' . $filename)){
readDirDeep($path.'/'.$filename,$deep+1);
}
}
closedir($handle);
}</p>
<p>//方式二：
function readDirDeepNested($path){
//当前目录下所有文件的集合
$nested = [];
$handle = opendir($path);
//循环获取
while(false !== ($filename = readdir($path))){
if('.' == $filename || '..' == $filename){
continue;
}
$file = ['name'=&gt;$filename];
//判断当前读的是文件还是目录
if(is_dir($path . '/' . $filename)){
$file['type'] = 'dir';
$file['nested'] = readDirDeepNested($path . '/' . $filename);
}else{
$file['type'] = 'file';
}
//存储当前文件信息
$nested[] = $file;
}
//关闭
closedir($handle);
return $nested;
}</p>
<p>1.字符串的转义写法：
$pid = 10;
$cond = 'parent_id = %d';
echo $m_doog-&gt;where($cond,$pid)</p>
<p>2.常用过滤函数：
htmlspecialchars
strip_tags
htmlentities</p>
<p>3.php 特点介绍
(1) 性能好，开发效率高
(2) 跨平台(可以在不同的操作系统上运行[windows/linux/unix])
(3) 上手快(好学)
(4) 面向对象[php4 ,到目前完全支持面向对象]
(5) 成本低(l(linux)a(apache)m(mysql)p(php) , l(linux)n(nginx)m(mysql)p(php))
(6) 开源</p>
<p>4.如果是集成开发工具(zend studio 官方 ， netbean )
如果文本集成开发工具( editplus notepad++, vi vim)</p>
<p>5.安装我们的 apache 服务器
说明 1. netstat -an 是查看当前服务器有哪些端口在监听</p>
<ol start="2">
<li>如果发现 80 端口在监听，说明 apache 启动成功</li>
<li>额外补充</li>
</ol>
<p>a. 如果一个程序要去接受浏览器请求，则一定监听一个端口
b. 一个端口，只能被一个程序监听，比如 80 端口被 apache 监听了，那么别
的程序，就不可以再去监听 80 端口</p>
<p>c. 每个机器有 65535 端口用 , 1-1024 端口不要去使用.</p>
<p>6.apache 的管理命令
httpd.exe -k [install(安装)|uninstall(卸载)|start(启动)|stop(停止)|restart(重启) ]</p>
<p>7.网页访问流程原理分析（理解）</p>
<p>8.查看域名对应的 ip 地址的指令
ping www.baidu.com
nslookup www.baidu.com</p>
<p>关于 netstat 命令的使用
常用的方式</p>
<ol>
<li>cmd&gt;netstat -an | more 【如果有|more 表示分页查看】</li>
<li>cmd&gt;netstat -anb | more 【可以查看是哪个程序在监听端口】</li>
<li>如何关闭某个端口监听的程序
在 windows 下使用任务管理器来结束
在 linux 下使用 kill -9 进程号</li>
</ol>
<p>apache 的端口的修改
在 httpd.conf 文件中，找到
修改 80 为其它端口，就可以监听指定端口。
比如 Listen 8888
记住，只要是修改了 httpd.conf 文件，必须重新启动 apache 才能生效。</p>
<p>关于 apache 端口监听的说明</p>
<ol>
<li>apache 可以同时监听两个或多个端口</li>
<li>一个端口只能被一个程序监听。</li>
</ol>
<p>9.apache 的安全配置（访问权限）
需求 1:我只让自己访问，别的 ip 不能访问
在 httpd.conf 文件中:
Require ip 192.168.0.15  允许访问的IP
Require ip 192.168.0   允许192.168.下的所有的IP都可访问</p>
<p>10.PHP 开发环境怎么安装(WAMP)
(1) 首先下载 wamp
(2) 如果你安装的有 apache,先卸载
进入到你的 apache 的 bin
cmd&gt;httpd.exe -k stop 【先停止服务】
cmd&gt;httpd.exe -k uninstall 【再卸载】
(3) 安装 wamp</p>
<p>说说为什么有些系统就是不成</p>
<ol>
<li>win7,win8,win10 安装的版本不同，比如纯净版，旗舰版. 这样就会系统缺少
dll 文件</li>
<li>解决方法 a.就是把缺的 dll 文件放的 c:/windows/system32, b. 就把这个缺
的 dll 打包安装. DirectX_Repair-v3.3.zip 解压安装。重启机器.</li>
</ol>
<p>11.关于 php 代码的写法 4 种</p>
<?php
代码
?>
<?=变量名?>
<p>用<?=?>必须开启 short_open_tag: On
&lt;%
代码
%&gt;
说明：是 asp 风格，需要在 php.ini 文件中打开 asp_tags = On 才能使用，默认是关闭，我们说明，这个几乎不用.</p>
<p>12.ANSI(美国国家标准组织),他定了编码规范每个操作系统的 ANSI 编码是不一样的，
比如我们的简体中文操作系统, 是 ANSI 是 GBK 或者 GB2312</p>
<p>13.linux系统中：ls -R 可以查看当前目录下所有文件夹及文件夹里面的所有文件</p>
<p>14.字符串的细节说明</p>
<ol>
<li>使用单引号方式</li>
<li>使用双引号方式</li>
<li>使用 heredoc 方式 [如果我们希望返回一段 html 代码 js 代码]</li>
</ol>
<p>15.数据类型自动转换都是超高精度，bool&lt;int&lt;小数</p>
<p>16.elseif和else if的区别</p>
<p>17.函数的参数类型可以是8中任意类型，函数命名只能字母下划线开头</p>
<p>18.对于数组的遍历，注意如果数组下标不连续，不能用for遍历，会出错。所以for遍历数组只能是下标连续并且是数值</p>
<p>19.如何验证我们的 mysql 安装 ok
1.通过在控制台输入
cmd&gt;netstat -anb | more 查看是否有 3306 在监听。
如果有说明服务启动 ok
2.通过登录 mysql 来测试
cmd&gt;mysql -u root -p 【回车,就会提示你输入密码】
如果提示
3.命令行启动mysql:
net stop mysql
net start mysql</p>
<p>20.修改mysql的默认监听端口和数据存储路径：在My.ini中：</p>
<p>The TCP/IP Port the MySQL Server will listen on</p>
<p>port=3306</p>
<p>#Path to installation directory. All paths are usually resolved relative to this.
basedir=&quot;C:/test/mysql5.5.27/&quot;</p>
<p>21.char、varchar 、text区别：
char 型：用于存放字符串, 范围是 1~255  字符
varchar 型，用于存放字符串，范围是 0~65532  字节</p>
<p>说明
(1) varchar 能存放 65532 个字节
(2) varchar 还有 1-3 个字节用来存放该字段的长度.
(3) 我们在创建表的时候，varchar(m), m 这个值的大小和你当前的这个表的编码有
关系,如果你的表的编码是utf8, m最大是 21844字符, 如果表的编码是gbk,这时我们定一个 varchar(m) 类型, m 最大是 32766 , 因为在 gbk 下，一个汉字是两个字节.这个 varchar 和 char 中存放的都是字符数据，不是字节数据。如果其中的内容是字母，也会因此作为字符来处理，一个字符 UTF8 的是占 3 个字符。</p>
<p>text 型： 文本型用来存放文本，如果你的内容较多，可以使用这个字段.</p>
<p>22.我们删除表的记录可以使用
delete from 表名；
还可以使用
truncate table 表名;
他们的区别是:
(1) truncate table 表名执行速度快
(2) delete from 表名会返回一个值，truncate table 表名不返回.
(3) truncate table 表名 不能带条件，因此我们建议尽量使用 delete from 表名  WHERE.</p>
<ol start="23">
<li></li>
</ol>
<p>（1）
Mkdir(目录地址, 权限模式，是否递归创建=false)
Rmdir(目录路径)
Rename(旧路径，新路径)移动，将文件（目录）移动到新的位置：</p>
<p>（2）
当前系统的目录分隔符。Directory_separator
Win: \反斜杠，支持/斜杠
Linux: /斜杠
解决操作系统的差异：两个方案：
方案一：直接用斜杠。/</p>
<p>24.File_put_contents(文件，内容）默认是清空写：
写文件前，将文件内容清空 ，这个 工作！
通过第三个参数： FILE_APPEND 常量，表示 追加写
如果需要将 换行符 展示为浏览器的换行 br，使用 函数 nl2br 来实现</p>
<p>1.匹配所有的超链接：
$str = file_get_contents('./a.html');
$pattern = &quot;/&lt;a[^&gt;]<em>href=<a href=".*?">'&quot;</a>['&quot; ][^&gt;]</em>&gt;/i&quot;;
$result = preg_match_all($pattern,$str,$match_result);
foreach($match_result[1] as $url){
echo $url . '<br>';
}</p>
<p>2.前面有小写字母的大写字母：
$str = &quot;TopicQuestion&quot;;
$pattern = &quot;/(?&lt;=[a-z])([A-Z])/&quot;;
$table_name = preg_replace($pattern,'_$1',$match_result);</p>
<p>$1用在替换字符串中
\1用在正则表达式中</p>
<p>3.去重复
hello----helo
$pattern = &quot;/(\w)\1+/&quot;;
$result = preg_replace($pattern,'$1',$str);</p>
<p>将ABAB改为AABB
$pattern = &quot;/(\w)(\w)\1\2/&quot;;
$result = preg_replace($pattern,'$1$1$2$2',$str);</p>
<p>4.只匹配中文的：
js: '/[\u4e00-\u9fa5]/'
php:'/[\x{4e00}-\x{9fa5}]/u'</p>
<p>5.模式修订符：m多行模式，默认是单行模式
多行模式下会把\n结尾的都给导致出现一个行首和行尾</p>
<p>6.表单数据验证：
用户名字母数字下划线，不以数字开头，长度{4，20}，可以包含中文
$pattern = '/^[a-zA-Z_\x{4e00}-\x{9fa5}][\w\x{4e00}-\x{9fa5}]{3,19}$/u';
邮箱地址：
$pattern = '/^[\w-]+@([\w-]+.)+[\w-]+$/';</p>
<p>\s  匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。</p>
<p>\S 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。</p>
<p>二。HTTP模拟请求：
$host = 'www.baidu.com';
$port = '80';
$link = @fsockopen($host,$port);
if(!$link){
trigger_error('连接失败',E_USER_ERROR);
}</p>
<p>@fsockopen发出HTTP请求：
$host = '127.0.0.1';
$port = '80';
$link = @fsockopen($host,$port);
if(!$link){
trigger_error('连接失败',E_USER_ERROR);
}</p>
<p>GET请求：
define('CRLF',&quot;\r\n&quot;);//注意&quot;\r\n&quot;必须是双引号，单引号会出错
$request = 'GET /test.php HTTP/1.1' . CRLF;
$request .= 'Host: ' . $host . CRLF;
$request .= 'User-Agent: Windows NT 6.1' . CRLF;
$request .= 'Connection:close' . CRLF;
$request .= CRLF;
fwrite($link,$request);</p>
<p>while(!feof($link)){
$reponse = fgets($link,1024);
echo $reponse,'<BR>';
}</p>
<p>POST请求：
define('CRLF',&quot;\r\n&quot;);
$data = [
'username' =&gt; '',
'password' =&gt; '',
'captcha' =&gt; '',
];
$data_str = http_build_query($data);//urlencode编码
//请求行
$request = 'POST /user.php?a=check HTTP/1.1' . CRLF;
$request .= 'Host: ' . $host . CRLF;
$request .= 'User-Agent: zmj-rebot-1.1' . CRLF;
$request .= 'Connection:close' . CRLF;
$request .= 'Content-Type: application/x-www-form-urlencoded' . CRLF;
$request .= 'Content-Length: ' . strlen($data_str) . CRLF;
$request .= CRLF;</p>
<p>CURL模拟请求：
$curl = curl_init();
curl_setopt($curl,CURLOPT_URL,'www.baidu.com');
curl_exec($curl);
curl_close($curl);</p>
<p>curl_setopt($curl,CURLOPT_USERAGENT,'kang-rebel-1.0');
curl_setopt($curl,CURLOPT_REFERER,'www.baidu.com');
$header[] = 'Accept: text/html';
$header[] = 'Accept-Language: zh-CN';
$header[] = 'Connection:close';
curl_setopt($curl,CURLOPT_HTTPHEADER,$header);
curl_setopt($curl,CURLOPT_HEADER,true);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
$response = curl_exec($curl);
echo iconv('utf-8','gbk',$response);</p>
<p>// get请求
$curl = curl_init();
curl_setopt($curl,CURLOPT_URL,'www.baidu.com');
curl_exec($curl);
curl_close($curl);</p>
<p>//post请求
$curl = curl_init();
$url = 'localhost/test.php';
curl_setopt($curl,CURLOPT_URL,$url);
//发出POSt请求
$data = [
'username' =&gt; 'zmj',
'password' =&gt; '111',
'captcha'  =&gt; '123456',
];
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
curl_exec($curl);
curl_close($curl);</p>
<p>模拟上传文件
$data = [
'file' =&gt; '@./index.php'
];
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
curl_exec($curl);
curl_close($curl);</p>
<p>模拟登陆：
$curl = curl_init();
curl_setopt($curl,CURLOPT_URL,'http://www.baidu.php');
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_HEADER,true);
//设置存储cookie的文件
$cookie_file = './1.txt';
curl_setopt($curl,CURLOPT_COOKIEJAR,$cookie_file);
curl_setopt($curl,CURLOPT_COOKIE,'PHP');</p>
<p>//连接memcache服务器
$mem = new Memcache;
$host = '127.0.0.1';
$port = '11211';
$result = $mem-&gt;connect($host,$port);
if(!$result){
die('memcached 服务器连接失败');
}</p>
<p>PHP操作分布式memcache
$mem = new Memcache;
$server_list = [
['host'=&gt;'127.0.0.1','port'=&gt;'11211'],
['host'=&gt;'127.0.0.1','port'=&gt;'11211'],
['host'=&gt;'127.0.0.1','port'=&gt;'11211']
];
foreach($server_list as $server){
$mem-&gt;addServer($server['host'],$server['port']);
}</p>
<p>$data = $mem-&gt;get('className');</p>
<p>mysql锁表：
$db-&gt;lock('goods',2);
$sql = &quot;select number from goods where id=1&quot;;
$number = intval($db-&gt;result($db-&gt;query($sql),0));
if($number&gt;0){
sleep(2);
$sql = &quot;update goods set number = number - 1 where id=1&quot;;
if($db-&gt;query($sql)){
echo 'ok,执行成功';
}else{
echo 'sorry,执行失败';
}
}else{
echo '库存不够了';
}</p>
<p>$db-&gt;unlock();</p>
<p>/**
* 锁表
* @param string $table 表名
* @param int $type 读锁1还是写锁2
*/
public function lock( $table, $type = 1 ) {
$type = ( $type == 1 ) ? 'READ' : 'WRITE';
$this-&gt;query( &quot;LOCK TABLE <code v-pre>$table</code> $type&quot; );
}</p>
<pre><code>/**
* 解锁
*/
public function unlock() {
$this-&gt;query( &quot;UNLOCK TABLES&quot; );
}
</code></pre>
<p>PHP操作redis：
$redis = new Redis();
$redis-&gt;connect('192.168.30.22','6379');
$redis-&gt;select(3);
$redis-&gt;set('flower','rose');</p>
<p>三。JQ的语法：
层次选择器：
$('div span') div下面的所有span标签
$('div&gt;span') div下面的span子元素标签
$('div+span') div下面的第一个兄弟span节点
$('div~span') div下面的所有兄弟节点</p>
<p>并且选择器：
$('div:first')第一个div元素
:last/:eq()/:gt()/:lt()/:even/:odd/:not()/:header()</p>
<p>内容过滤选择器：
$('div:contains(beiing)')div的内容中包含binging的
$('div:empty')获取内容为空元素的div
$('div:has(#apple)')  内部包含指定元素的选择器
<div><span id="apple"></span></div>
$('div:parent')  寻找作为父元素节点存在的div
$('input:lt(4):checked')
$('input:gt(3):lt(2)')每次过滤完后，下标会归零后面的过滤从零开始</p>
<p>属性操作：
JS中：
itnode.属性名
itnode.属性名 = 值
itnode.getAttribute(属性名称)
itnode.setAttribute(属性名称，值)</p>
<p>JQ的操作属性：
$().attr(属性名)		获取属性
$().attr(属性名，属性值)	设置属性
$().attr(属性名，fn)		设置属性
$().removeAttr(属性名)		删除属性
$().attr(json对象)		设置多个属性</p>
<p>class属性值操作：
$().attr('class',值)
$().attr('class')
$().removeAttr('class')
$().addClass(值)
$().removeClass(值)
$().toggleClass(值) 开关效果，有则删除，无就添加</p>
<p>标签包含内容操作：
js里面：
dvnode.innerHTML  获得div包含的信息
dvnode.innerHTML = XXX 设置div包含的信息
JQ:
$().html()  	获得节点包含的信息
$().html(信息)
$().text()	获得节点包含的文本字符串信息
$().text(信息) 设置节点包含的内容，有html标签的就把&lt;&gt;号变为符号实体</p>
<p>html和text区别：
①获取内容
前者可以获取html标签 和 普通字符串内容
后者只获取普通字符串内容
②设置内容	
前者可以设置html标签 和 普通字符串内容
后者只设置普通字符串内容，如果内容里边有tag标签内容，就把其中的”&lt;”“&gt;”符号转变为符号实体 &lt;-----&lt;  &gt;----&gt;   空格------ 以上两种操作(获取/设置)如果针对的操作内容是纯字符串内容，则使用效果一致。</p>
<p>CSS样式操作：
$().css(name,value)
$().css(name)
$().css(json对象)</p>
<p>value属性快捷操作：
$().val()		获得value属性
$().val(信息值)		设置value属性
$().attr('value')
$().attr('value','信息值')</p>
<p>全选反选和不全选的操作：
function selAll(){
$('.hby').attr('checked',true);
}
function selnotAll(){
$('.hby').attr('checked',false);
}
function selFan(){
for(var i=0;i&lt;$('.hby').length;i++){
var flag = $('.hby:eq('+i+')').attr('checked');
$('.hby:eq('+i+')').attr('checked',!flag);
}
}</p>
<p>JQ对象转为DOM对象：
$()[0].style.color = '';    $()[下标]
dom对象转JQ对象:      $(dom对象)</p>
<p>遍历方法：
each()方法
$.each(数组/对象，function处理)
$(选择器).each(function处理);</p>
<p>加载事件：
JS中：</p>
<body onload="函数（）">
window.onload = function(){}
<p>JQ中：
$(document).ready(function处理);
$().ready(function(){})
$(function(){})</p>
<p>普通事件：</p>
<h3 id="_14-js复习" tabindex="-1"><a class="header-anchor" href="#_14-js复习" aria-hidden="true">#</a> 14.js复习：</h3>
<p>1.对象的key 应该是，标准标识符字符串（字母+数字+下划线，不以数字开头的字符串），Value 可以是任意的类型：</p>
<p>2.数组访问通过[下标]，增加元素时：可以通过下标完成，但是不支持自动生成下标：例如var arr[]='zmj'错误， 正确的是：var arr[2] = 'zmj'</p>
<p>3.删除数组元素方法：var arr[1] = undefined,这样只是把此元素置为undefined,如果需要将该元素直接删除，需要自己定义方法实现：思路：将没有被删除的元素取出来，形成一个新的数组。</p>
<p>4.复制时基本类型是值传递，对象和数组是引用传递</p>
<p>5.类型转换方式：
parseInt(); 解析整型
parseFloat()；解析浮点型数据
在 js 中，如果是 数值型和字符串型运算，通常会转成字符串型！
语法上可以完成常用的转换：</p>
<ul>
<li>转成数值型：	+str
!! 布尔型  : 	!!str</li>
</ul>
<p>6.包装对象：
当将基本数据类型，当作对象类型使用时，JS 解释器，会自动完成利用该基本类型获取其对应的对象类型的工作，称之为包装对象（打包对象）</p>
<p>7.变量未声明使用抛出 ReferenceError
8.语法上var 变量可以先使用再声明，也就是var 声明前置，但是用的时候得到的值是undefined，还有如果函数没有返回值或者返回值为空，函数也会返回undefined</p>
<p>因为：js 解释器（浏览器）再获取 js 代码后，先进行编译，编辑的预处理阶段，就会将所有的 var 声明的变量声明完毕。但是仅声明，不赋值。所有的变量都存在，但是值为undefined；</p>
<p>9.短路运算常用于设置默认值：
function func(p1,p2){
var a1 = p1 || 'default_1'
}</p>
<ol start="10">
<li></li>
</ol>
<p>var v3 = 40;
v5 = (v1,v2,v3)//40  括号里的值是v3，整体付给了v5</p>
<ol start="11">
<li>Void ：强制表达式返回空结果,当不需要某个表达式，返回数据时，在前使用 void。</li>
</ol>
<p>var v4 = void (v1+v2)</p>
<p>12.Function 的优先级高，会覆盖同名的 var
例如：
function sayhello(){}
console.log(sayhello);  //sayhello()
var sayhello = 'zmj';
console.log(sayhello);  //zmj</p>
<p>13.定义前置：
function 关键字，定义的函数会提前预处理（类似于 var 声明的变量）
var 和 function 才会前置</p>
<p>14.设置函数参数默认值的两个方法：
function func(p1,p2){
var a1 = p1 || 'default_1'
}
function func(p1=133){</p>
<p>}</p>
<p>15.当 不能确定 参数数量时，可以使用 arguments 完成！形参 与 arguments 元素 是绑定的，是操作的同一个数据。改了其中一个，另一个也会改变！
PHP:func_get_args()</p>
<p>16.switch状态分支：
先计算 case 的状态值，再进行比对：
switch 的比对：=== 全等的比对
var value=4;
switch(value){
case value&gt;4:      -- 相当于：case true
console.log();
break;
}</p>
<p>php里面是==</p>
<p>17.evel(string)  执行string,可以执行JS语句，
例如：evel('console.log('zmj')')</p>
<p>18.typeof 不能检测出来数组的：检测结果，object。
Array.isArray();用来检测数组，返回的是布尔值。
老写法：Object.prototype.toString.call(arr) == '[object Array]'</p>
<p>19.过滤掉数组中undefined的值：
var arr = ['1',2,3,4,'undefined','undefined'];
var arr_new = arr.filter(function(element){
return element !== undefined;
});</p>
<p>20.解析字符串的时间：返回时间戳，毫秒:
Date.parse('2016-5-25')</p>
<p>21.如何得到 M-N 间的随机数(10-20)
Math.floor((20-10+1)*Math.random()+10)</p>
<p>22.控制调用对象：
method.call(调用对象)
method.applay(调用对象)
以上两个方法，可以去设置（改变）调用该方法的对象。
改变方法中在执行时 this 的值。</p>
<ol start="23">
<li></li>
</ol>
<p>方法中的 this 对象一定是方法的所属对象吗？不是。
方法所属的对象，只负责找到该方法。而不是用来确定执行时的 this。
方法中的 this，由调用对象确定。</p>
<p>调用对象两种形式：1，直接调用（o.setName()）2.方法的 call 或者 apply，将调用对象
注入到方法中(o.setName.call(obj))</p>
<p>method.call(object，实参列表)
实参列表：传递给 method 的实参列表。
method.apply(obj, [实参列表]),</p>
<h3 id="_15-nosql学习" tabindex="-1"><a class="header-anchor" href="#_15-nosql学习" aria-hidden="true">#</a> 15.nosql学习</h3>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps1AF9.tmp.jpg" alt="img"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps1AFA.tmp.jpg" alt="img"></p>
<p>聚合模型1：下面这个把数据分成了两个聚合数据：客户和订单，对于单个订单比较好解决，可以查询一个用户的单个订单。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps1AFB.tmp.jpg" alt="img"></p>
<p>聚合模型2：对于我们想要查询某个用户的所有订单，上面这个模型就不适合了，这时候就需要建一个新的模型：下面这种模型是把用户的所有订单进行包裹嵌套</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps1B0C.tmp.jpg" alt="img"></p>
<p>对于nosql有150多种，其中下面的键值，文档，列族都是面向聚合型的数据库，</p>
<p>对于社交网络这种对用户关系很重要的网站，用图方式数据库很好。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps1B0D.tmp.jpg" alt="img"></p>
<h3 id="_16-常用代码" tabindex="-1"><a class="header-anchor" href="#_16-常用代码" aria-hidden="true">#</a> 16.常用代码</h3>
<p>1.输出缓冲
echo str_repeat(' ',1024);
$str = 'helloword';
for($i=0,$l=strlen($str);$i&lt;$l;$i++){
echo $str[$i];
ob_flush();
flush();
sleep(1);
}</p>
<p>ob_start();
$str = ob_get_contents();
ob_end_clean();</p>
<p>$file = '/html.html';
file_put_contents($file,$str);
echo 'shucu ';</p>
<p>2.有一个网页，得到他的内容：
$http_url = &quot;http://www.baidu.com&quot;;
//打开远程文件
$read_file = fopen($http_page_url,'rb');
if(!feof($read_file)){
//读取远程文件
$file_stream = &quot;&quot;;
do{
$data = fread($read_file,8192);
if(strlen($data) == 0){
bread;
}
$file_stream .= $data;
}while(true);
}
echo $file_stream;</p>
<p>3.所谓的消息推送就是从服务器端向移动终端发送连接，传输一定的信息。比如一些新闻客户端，每隔一段时间收到一条或者多条通知，这就是从服务器端传来的推送消息；还比如常用的一些IM软件如微信、GTalk等，都具有服务器推送功能。
推送方法如下：
　　1)通过SMS进行服务器端和客户端的交流通信。
　　在Android平台上，你可以通过拦截SMS消息并且解析消息内容来了解服务器的意图，可以实现完全的实时操作。但是问题是这个方案的成本相对比较高，且依赖于运营商。
　　2)循环主动定时获取
　　这种方法需要客户端来做一个定时或者周期性的访问服务器端接口，以获得最新的消息。轮询的频率太慢可能导致某些消息的延迟，太快则会大量消耗网络带宽和电池。
　　3)持久连接
　　这个方案可以解决由轮询带来的性能问题，但是还是会消耗手机的电池。我们需要开一个服务来保持和服务器端的持久连接（苹果就和谷歌的C2DM是这种机制）。但是对于Android系统，当系统可用资源较低，系统会强制关闭我们的服务或者是应用，这种情况下连接会强制中断。（Apple的推送服务之所以工作的很好，是因为每一台手机仅仅保持一个与服务器之间的连接，事实上C2DM也是这么工作的。即所有的推送服务都是经由一个代理服务器完成的，这种情况下只需要和一台服务器保持持久连接即可。C2DM=Cloud to Device Messaging）。</p>
<p>消息推送其实要看你的业务需求,我们有用极光推送
如果说需要不是一定要实时,那还不如自己在客户端写轮轮询
毕竟第三方的推送基本都是收费的,免费使用的,要么有次数限制,要么有频率限制等等
如果只是你玩一下,那可以用极光推送,或者是百度云推送,集成很简单,都有现在的代码,直接都可以运行的
实现推送,可以归为两种
服务器主动推送消息
客户端定时查询消息
主动推送的话,可以用http长连接,也可以用java socket 一直保持连接,从而实现实时推送(优点是消息实时,缺点是服务器压力大,手机耗电,耗流量, 开发难度大)
客户端定时查询的话,就是启动定时器,格多长时间去查一下服务器看看有没数据就行了(优点是开发简单,客户端耗电和流量少,但是消息不实时)</p>
<p>4.高并发如何解决？</p>
<p>(1)文件锁，flock函数
(2)网站双层架构，选择memcache或者redis作为缓存。也就是mysql数据库之上要有一块缓存数据库
(3)php这边尽量加载尽可能少的模块  安装php加速器</p>
<p>redis在实际中的应用：
第一个，就是文件锁，采用锁机制，让用户操作可以同时网站的同一请求；用户太多也可以采用队列的形式处理，比如买同一个商品，先告诉用户请求成功，接着在后台慢慢处理
队列可以使用redis的list链表或者有序集合来处理</p>
<p>5.网站运行慢怎么解决？
网站运行慢 ：
一个是前段资源加载慢，可以使用专门的服务器存放或者使用页面静态化来处理，或者禁止外部的盗链  减小大量的请求给数据库施压，速度慢也可以使用memcache或者rendis等内存型nosql数据库
将常用资源但不经常修改的数据放入这样的缓存数据库  可以大幅提升数据请求的速度极限情况下，可使用redis搭建集群，主从服务器 类似于负载均衡。</p>
<p>6.用自动加载函数遍历多级目录：</p>
<p>// 可实现自动注册函数和类，实现类似__autoload() 函数功能，简化了类的调用与加载</p>
<p>//第一种方式：函数式<br>
function my_autoload ($className) {<br>
include(<strong>DIR</strong> . DIRECTORY_SEPARATOR . $className . &quot;.php&quot;);<br>
}<br>
spl_autoload_register('my_autoload');</p>
<p>//第二种方式：类式<br>
class autoload<br>
{<br>
public function my_scandir($dir)<br>
{<br>
$files = array();
if($handle = opendir($dir))){
while($file = readdir($handle) !== false){
if('..' != $file &amp;&amp; '.' != $file){
if(is_dir($dir . '/' . $file)){
$files[$file] = my_scandir($dir . '/' . $file);
}else{
$files[] = $file;
}
}
}
}</p>
<p>}</p>
<p>spl_autoload_register(array('my_scandir', 'autoload'));<br>
spl_autoload_register('autoload::my_scandir');</p>
<p>7.　ThinkPHP的优缺点如下：
1、高级模型：可以轻松支持序列化字段、文本字段、只读字段、延迟写入、乐观锁、数据分表等高级特性。
　　2、视图模型：轻松动态地创建数据库视图，多表查询相对简单。
　　3、关联模型：让你以出乎意料的简单、灵活的方式完成多表的关联操作。
　　4、模板引擎：系统内建了一款卓越的基于XML的编译型模板引擎，支持两种类型的模板标签，融合了Smarty和JSP标签库的思想，支持标签库扩展。通过驱动还可以支持Smarty、EaseTemplate、TemplateLite、Smart等第三方模板引擎。
　　5、缓存机制：系统支持包括文件方式、APC、Db、Memcache、Shmop、Eaccelerator和Xcache在内的多种动态数据缓存类型，以及可定制的静态缓存规则，并提供了快捷方法进行存取操作。
　　6、类库导入：ThinkPHP是首先采用基于类库包和命名空间的方式导入类库，让类库导入看起来更加简单清晰，而且还支持冲突检测和别名导入。为了方便项目的跨平台移植，系统还可以严格检查加载文件的大小写。
　　7、扩展机制：系统支持包括类库扩展、驱动扩展、应用扩展、模型扩展、控制器扩展、标签库扩展、模板引擎扩展、Widget扩展、行为扩展和模式扩展在内的强大灵活的扩展机制，让你不再受限于核心的不足和无所适从，随心DIY自己的框架和扩展应用。
　　8、URL模式：系统支持普通模式、PATHINFO模式、REWRITE模式和兼容模式的URL方式，支持不同的服务器和运行模式的部署，配合URL路由功能，让你随心所欲的构建需要的URL地址和进行SEO优化工作。
　　9、编译机制：独创的核心编译和项目的动态编译机制，有效减少OOP开发中文件加载的性能开销。ALLINONE模式更是让你体验飞一般的感觉。
　　10、ORM：简洁轻巧的ORM实现，配合简单的CURD以及AR模式，让开发效率无处不在。
　　11、查询语言：内建丰富的查询机制，包括组合查询、复合查询、区间查询、统计查询、定位查询、动态查询和原生查询，让你的数据查询简洁高效。
　　12、动态模型：无需创建任何对应的模型类，轻松完成CURD操作，支持多种模型之间的动态切换，让你领略数据操作的无比畅快和最佳体验。
　　13、分组模块：不用担心大项目的分工协调和部署问题，分组模块帮你解决跨项目的难题。
　　14、AJAX支持：内置AJAX数据返回方法，支持JSON、XML和EVAL格式返回客户端，并且系统不绑定任何AJAX类库，可随意使用自己熟悉的AJAX类库进行操作。
　　15、多语言支持：系统支持语言包功能，项目和模块都可以有单独的语言包，并且可以自动检测浏览器语言自动载入对应的语言包。</p>
<p>16、模式扩展：除了标准模式外，系统内置了Lite、Thin和Cli模式，针对不同级别的应用开发提供最佳核心框架，还可以自定义模式扩展。
　　17、自动验证和完成：自动完成表单数据的验证和过滤，生成安全的数据对象。</p>
<p>18、字段类型检测：字段类型强制转换，确保数据写入和查询更安全。</p>
<p>19、数据库特性：系统支持多数据库连接和动态切换机制，支持分布式数据库。犹如企业开发的一把利刃，跨数据库应用和分布式支持从此无忧。</p>
<p>优点</p>
<p>1.容易上手，配置、部署方便</p>
<p>2.编译缓存机制有利于性能提升</p>
<p>3.内置了对REST的支持</p>
<p>MVC和OO啥的就不说了...</p>
<p>缺点</p>
<p>1.麻烦的URL路由</p>
<p>正常模式：
URL -&gt; URL路由 -&gt; 将从URL解析得到的参数和请求传递给入口函数</p>
<p>TP的实现（以正则路由为例）：</p>
<p>正则 -&gt; 入口文件 + 动态参数
如：'/^blog/(\d+)$/' =&gt; 'Blog/read?id=:1'</p>
<p>简洁的实现：</p>
<p>'/^blog/(\d+)$/' =&gt; read // function read($id) {...}</p>
<p>此实现便于检查路由规则与入口函数的匹配性并使用户更加方便的使用解析后的URL参数，同时，TP的入口文件设计本就是多此一举。</p>
<p>2.糟糕的模型设计</p>
<p>*1 需要手动建立模型与数据库的关联</p>
<p>缺点：需要进行一系列不必要的配置，与定义模型后自动生成数据库表的行为相悖。</p>
<p>*2 对数据库的抽象远远不够</p>
<p>操作模型时有很强烈的操作数据库感觉，同时由于 2*1 需要手动建立模型与数据库的关联 这一缺点，毫无必要的字段映射让人恼火。</p>
<p>3.垃圾的模板引擎</p>
<p>*1 不支持模板继承</p>
<p>重复写代码很累的亲！</p>
<p>*2 XML格式的模板标签</p>
<p>书写不便，同时容易与HTML标签混淆（最近几年出现的模板引擎已经很少有用XML标签的了...）</p>
<p>*3 不适合前端书写</p>
<p>模板 + 数据 -&gt; 渲染输出</p>
<p>模板由前端书写，数据由后台提供，显然TP的模板对此支持并不好。</p>
<p>*4 不支持模板的部分缓存</p>
<p>缺点：假设页面P由A, B两部分组成，A的更新频率大于B，则页面P的更新频率与A相同。</p>
<p>1.什么是OO，OOP的核心思想是什么？请简述你对OOP的理解?</p>
<p>(1) 什么是OO
OO(Object–Oriented )面向对象，OO方法(Object-Oriented Method，面向对象方法，面向对象的方法)是一种把面向对象的思想应用于软件开发过程中，指导开发活动的系统方法，简称OO (Object-Oriented)方法</p>
<p>(2) OOP的核心思想是什么？
面向对象编程是一种计算机编程架构。OOP 的一条基本原则是计算机程序是由单个能够起到子程序作用的单元或对象组合而成。</p>
<p>核心思想：封装，继承，多态.</p>
<p>OOP 达到了软件工程的三个主要目标：重用性、灵活性和扩展性。</p>
<p>(3)OOP 主要有以下的概念和组件：</p>
<p>组件 － 数据和功能一起在运行着的计算机程序中形成的单元，组件在 OOP 计算机程序中是模块和结构化的基础。</p>
<p>抽象性 － 程序有能力忽略正在处理中信息的某些方面，即对信息主要方面关注的能力。</p>
<p>封装 － 也叫做信息封装：确保组件不会以不可预期的方式改变其它组件的内部状态；只有在那些提供了内部状态改变方法的组件中，才可以访问其内部状态。每类组件都提供了一个与其它组件联系的接口，并规定了其它组件进行调用的方法。</p>
<p>多态性 － 组件的引用和类集会涉及到其它许多不同类型的组件，而且引用组件所产生的结果得依据实际调用的类型。</p>
<p>继承性 － 允许在现存的组件基础上创建子类组件，这统一并增强了多态性和封装性。典型地来说就是用类来对组件进行分组，而且还可以定义新类为现存的类的扩展，这样就可以将类组织成树形或网状结构，这体现了动作的通用性。</p>
<p>由于抽象性、封装性、重用性以及便于使用等方面的原因，以组件为基础的编程在脚本语言中已经变得特别流行。Python 和 Ruby 是最近才出现的语言，在开发时完全采用了 OOP 的思想，而流行的 Perl 脚本语言从版本5开始也慢慢地加入了新的面向对象的功能组件。用组件代替“现实”上的实体成为 JavaScript（ECMAScript） 得以流行的原因，有论证表明对组件进行适当的组合就可以在英特网上代替 HTML 和 XML 的文档对象模型（DOM）。</p>
<p>2.PHP设计模式：
（1）工厂模式：工厂模式 是一种类，它具有为您创建对象的某些方法。您可以使用工厂类创建对象，而不直接使用 new。这样，如果您想要更改所创建的对象类型，只需更改该工厂即可。使用该工厂的所有代码会自动更改。</p>
<p>（2）单元素模式（单例）</p>
<p>某些应用程序资源是独占的，因为有且只有一个此类型的资源。例如，通过数据库句柄到数据库的连接是独占的。您希望在应用程序中共享数据库句柄，因为在保持连接打开或关闭时，它是一种开销，在获取单个页面的过程中更是如此。</p>
<p>（3）观察者模式
观察者模式为您提供了避免组件之间紧密耦合的另一种方法。该模式非常简单：一个对象通过添加一个方法（该方法允许另一个对象，即观察者 注册自己）使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。这些观察者使用该信息执行的操作与可观察的对象无关。结果是对象可以相互对话，而不必了解原因。</p>
<p>（4）命令链模式
命令链 模式以松散耦合主题为基础，发送消息、命令和请求，或通过一组处理程序发送任意内容。每个处理程序都会自行判断自己能否处理请求。如果可以，该请求被处理，进程停止。您可以为系统添加或移除处理程序，而不影响其他处理程序。</p>
<p>（5）策略模式
我们讲述的最后一个设计模式是策略 模式。在此模式中，算法是从复杂类提取的，因而可以方便地替换。例如，如果要更改搜索引擎中排列页的方法，则策略模式是一个不错的选择。思考一下搜索引擎的几个部分 —— 一部分遍历页面，一部分对每页排列，另一部分基于排列的结果排序。在复杂的示例中，这些部分都在同一个类中。通过使用策略模式，您可将排列部分放入另一个类中，以便更改页排列的方式，而不影响搜索引擎的其余代码。</p>
<p>3.有三种常见的方式</p>
<p>（1）、自己设计表单、编程、与数据库链接检索。</p>
<p>（2）、在百度或谷歌注册申请站内搜索功能。获得代码，添加到自己的页面中。</p>
<p>（3）、使用第三方的工具软件，搭建检索功能</p>
<p>4.常见全文索引
coreseek：mmeg+sphinx
XunSearch：SCWS+Xapian</p>
<p>无论任何的全文索引，操作过程都是一致的：</p>
<ol>
<li>建立索引</li>
<li>通过索引搜索</li>
<li>维护索引</li>
</ol>
<p>XunSearch 安装目录/sdk/php 中：后续的操作，都是，使用该目录中提供的 PHP 文件完成的。</p>
<p>建立索引：使用 XunSearch 提供的工具，indexer 完成。
每个索引项目一个配置文件。位置：php-sdk/app/项目名.ini</p>
<p>5.响应式布局用到的技术：
（1）就是把width、padding、margin属性用百分比的形式规定
手机端：320-768   ipad 768-1024   pc 1024以上</p>
<p>（2）视口viewport</p>
<p>以前打开一个网页，自动的按照PC端的浏览器渲染网页（width:600px），600/1366px  如果使用手机打开的时候，为了显示更佳的效果，需要让浏览器按照手机的分辨率显示</p>
<p>强制浏览器按照手机设备的分辨率渲染网页，而不是按照PC端的浏览器渲染网页
width=device-width,	自动按照设备的分辨率渲染网页
initial-scale=1.0,		初始比例:1.0
user-scalable=no		防止用户在手机上手指放大缩小</p>
<meta name="viewport" id="viewport" 
content="width=device-width,initial-scale=1.0,user-scalable=no"/>
<p>（3）媒体查询
介绍：手机、pad、PC电脑，针对这些不同的设备，查询对应样式</p>
<p>container-fluid的width是100％，而container的width是用媒体查询获得的动态尺寸。两者样式肯定是不一样的。并且由于padding的原因两者不可用嵌套，他们就是提供两种视觉风格。</p>
<p>6.JQ插件的使用：</p>
<p>jquery-validation-1.15.0  表单验证插件
jQuery-File-Upload-9.12.5   无刷新文件上传插件
summernote.js    可视化文本编辑器插件
datetimepicker    时间选择插件</p>
<p>7.安装完PHP后，需要在apache的配置文件中加载PHP的处理模块：</p>
<p>LoadModule php5_module &quot;C://..../php5apache2_4.dll&quot;</p>
<FileMatch \.php$>
	SetHandler application/x-httpd-php
</FileMatch>
<p>在安装完mysql后需要整合到开发环境中：</p>
<p>在php.ini文件中开启mysql扩展，指定我们的dll文件在哪个目录下：
extension_dir = &quot;c://mysql/../ext&quot;:</p>
<p>8.PHP的命令行模式：
php.exe -r 代码
php.exe -f 文件</p>
<p>9.myisam和innodb的区别：
①MyISAM不支持事务、也不支持外键，但其访问速度快，对事务完整性没有要求，产生碎片处理. optimize table 表名</p>
<p>InnoDB存储引擎提供了具有提交、回滚和崩溃恢复能力的事 务安全。但是比起MyISAM存储引擎，InnoDB写的处理效率差一些并且会占用更多的磁盘空间以保留数据和索引。</p>
<p>③MEMORY存储引擎使用存在内存中的内容来创建表。 每个MEMORY表只实际对应一个磁盘文件。MEMORY类型的表访问非常得快，因为它的数据是放在内存中的，并且默认使用HASH索引。但是一旦服务关闭，表中的数据就会丢失掉, 表的结构还在</p>
<p>10.create view myview as select empno,ename,sal from emp;
视图是一个虚拟的表：
特点是安全，性能好，灵活</p>
<p>grant select on db1.emp to 'hsp'@'localhost'
create user 'hsp'@'locahost' identified by 'abc'
revoke select on db1.emp from 'hsp'@'znb'
create user 'xxx'@'192.168.1.%'
drop user 'xxx'@'192.168.1.%'</p>
<ol start="11">
<li></li>
</ol>
<p>$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false)
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false)
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
$res = curl_exec($ch);
curl_close($ch);</p>
<p>12.微信9大接口：
你应该指的微信认证后获得的九大安全接口。
1、语音识别    通过语音识别接口，用户发送的语音，将会同时给出语音识别出的文本内容。    2、客服接口    通过客服接口，公众号可以在用户发送过消息的48小时内，向用户回复消息。<br>
3、OAuth2.0网页授权    通过网页授权接口，公众号可以请求用户授权。<br>
4、生成带参数二维码    通过该接口，公众号可以获得一系列携带不同参数的二维码，在用户扫描关注公众号后，公众号可以根据参数分析各二维码的效果。<br>
5、获取用户地理位置    通过该接口，公众号能够获得用户进入公众号会话时的地理位置（需要用户同意）。<br>
6、获取用户基本信息    通过该接口，公众号可以根据加密后的用户OpenID来获取用户基本信息，包括昵称、头像、性别、所在城市、语言和关注时间。<br>
7、获取关注者列表    通过该接口，公众号可以获取所有关注者的OpenID。<br>
8、用户分组接口    通过分组接口，公众号可以在后台为用户移动分组，或创建、修改分组。<br>
9、上传下载多媒体文件    通过该接口，公众号可以在需要时在微信服务器上传下载多媒体文件。</p>
<p>13.如果简单地比较Redis与Memcached的区别，大多数都会得到以下观点：</p>
<pre><code> 1 、Redis不仅仅支持简单的k/v类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
 2 、Redis支持数据的备份，即master-slave模式的数据备份。
 3 、Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用。
</code></pre>
<p>14.树状分类：
function getTree(){
$m_category = M('Category');
$m_category-&gt;tree($list);
}
function tree($list,$category_id=0,$deep=0){
static $tree = array();
foreach($list as $cat){
if($cat['parent_id'] == $category_id){
$cat['deep'] = $deep;
$tree[] = $cat;
$this-&gt;tree($list,$cat['category_id'],$deep+1);
}	
}	
return $tree;
}</p>
<p>嵌套展示：
function getNested(){
//初始化缓存
S(['type'=&gt;'File']);
$key = 'category_nested_0';
if(!($nested = S($key))){
$list = $this-&gt;where(['is_userd'=&gt;1])
-&gt;order('sort_number')
-&gt;select();
$nested = $this-&gt;nested($list);
S($key,$nested);
}
return $nested;
}</p>
<p>public function nested($list,$category_id=0){
$nested = [];
foreach($list as $cat){
if(0 == $cat['is_nav'] &amp;&amp; $cat['parent_id'] == 0){
continue;	
}
if($cat['parent_id'] == $category_id){
$cat['nested'] = $this-&gt;nested($list,$row['parent_id']);
$nested[] = $row;
}
}
return $nested;
}</p>
<p>//面包屑导航
function getSelfAndParent($category_id){
$self = $this-&gt;find($category_id);
return array_merge($self,$this-&gt;getParents($category_id));</p>
<p>}</p>
<p>function getParents($category_id){
static $parents = [];
$parent_id = $this-&gt;getFieldByCategoryId($category_id,'parent_id');
if($parent_id != 0){
$category = $this-&gt;find($parent_id);
$parents[] = $category;
$this-&gt;getParents($category['category_id']);
}
return $parents;
}</p>
<h3 id="_17-换行符知识" tabindex="-1"><a class="header-anchor" href="#_17-换行符知识" aria-hidden="true">#</a> 17.换行符知识：</h3>
<p>\r,\n,\r\n的区别</p>
<p>'\r'是回车，'\n'是换行，前者使光标到行首，后者使光标下移一格，通常敲一个回车键，即是回车，又是换行（\r\n）。Unix中每行结尾只有“&lt;换行&gt;”，即“\n”；Windows中每行结尾是“&lt;换行&gt;&lt;回车&gt;”，即“\n\r”；Mac中每行结尾是“&lt;回车&gt;”。</p>
<p>\n是换行，英文是New line，表示使光标到行首</p>
<p>\r是回车，英文是Carriage return，表示使光标下移一格</p>
<p>\r\n表示回车换行</p>
<p>我们在平时使用电脑时，已经习惯了回车和换行一次搞定，敲一个回车键，即是回车，又是换行。</p>
<p>1、\n 软回车：</p>
<p>在Windows 中表示换行且回到下一行的最开始位置。相当于Mac OS 里的 \r 的效果。
在Linux、unix 中只表示换行，但不会回到下一行的开始位置。</p>
<p>2、\r 软空格：</p>
<p>在Linux、unix 中表示返回到当行的最开始位置。
在Mac OS 中表示换行且返回到下一行的最开始位置，相当于Windows 里的 \n 的效果。</p>
<p>3、\t 跳格（移至下一列）。</p>
<p>它们在双引号或定界符表示的字符串中有效，在单引号表示的字符串中无效。
\r\n 一般一起用，用来表示键盘上的回车键，也可只用 \n。
\t表示键盘上的“TAB”键。</p>
<p>就像你使用 enter和shift+enter的区别</p>
<p>4、文件中的换行符号：</p>
<p>linux,unix: \r\n
windows : \n
Mac OS ： \r</p>
<p>5、常用转义符号的意义：</p>
<p>\n  LF或ASCII中的0x0A(10)
\r  CR或ASCII中的0x0D(13)
\t  水平制表符-HT或ASCII中的0x09（9）
\  反斜杠
$  美圆符
&quot;  双引号
'  单引号</p>
<p>6、&quot;\r\n&quot;与&quot;</br>&quot;的区别</p>
<p>\r\n是输出的HTML代码换行，客户看到的效果没有换行。</p>
<p>如果是输出给浏览器，就用<br/></p>
<p>\r\n，好比你在DreamWeaver里做一个网页，在源代码里按一下回车，是给源代码回车换行。
是输出一个（HTML标记性语言），在HTML中解释为输入的字换行。 \r\n的作用是给源代码回车换行，输入后，查看html源代码，就看会到有换行，而HTML解释器（浏览器）认为它是没用的东西，用不用都一样显示。</p>
<h3 id="_18-字符串和数组" tabindex="-1"><a class="header-anchor" href="#_18-字符串和数组" aria-hidden="true">#</a> 18.字符串和数组：</h3>
<p>1.strchr 是strstr的别名：
查找字符串的首次出现，返回 haystack 字符串从 needle 第一次出现的位置开始到 haystack 结尾的字符串。 如果第三个参数为true，将返回 needle 在 haystack 中的位置之前的部分。</p>
<p>strrchr — 查找指定字符在字符串中的最后一次出现 ，该函数返回 haystack 字符串中的一部分，这部分以 needle 的最后出现位置开始，直到 haystack 末尾。</p>
 <?php
	$email   =  'name@example.com' ;
 	$domain  =  strstr ( $email ,  '@' );
	echo  $domain ;  // 打印 @example.com

 	$user  =  strstr ( $email ,  '@' ,  true );  // 从 PHP 5.3.0 起
 	echo  $user ;  // 打印 name
 ?> 
<p>2.strpos — 查找字符串首次出现的位置
strpos（‘abc’,'a'）
返回 needle 存在于 haystack 字符串起始的位置</p>
<p>strrpos — 查找某个字符在字符串中最后一次出现的位置</p>
<p>3.substr--返回字符串的子串
substr('abc',1，3) 从1开始截取3个字符串
$rest  =  substr ( &quot;abcdef&quot; ,  0 , - 1 );   // 返回 &quot;abcde&quot;
$rest  =  substr ( &quot;abcdef&quot; ,  2 , - 1 );   // 返回 &quot;cde&quot;
$rest  =  substr ( &quot;abcdef&quot; ,  4 , - 4 );   // 返回 &quot;&quot;
$rest  =  substr ( &quot;abcdef&quot; , - 3 , - 1 );  // 返回 &quot;de&quot;</p>
<p>4.strcmp — 二进制安全字符串比较，该比较区分大小写。
strcmp(str1,str2)
如果 str1 小于 str2 返回 &lt; 0； 如果 str1 大于 str2 返回 &gt; 0；如果两者相等，返回 0。</p>
<p>strcasecmp  二进制安全字符串比较，该比较不区分大小写。</p>
<p>5.要理解strcmp（$str1，$str2）函数的意思，比较两个字符串的大小,比较时计算了两个字符串相差（不同）字符的个数一起作为返回
情况如下：
1、$str1==str2   返回 0
2、$str1 &gt; str2   返回 1
3、$str1 &lt; str2   返回 -1</p>
<p>注意：对于第2、3种情况，上面列出的只是返回结果的符号而已，并不是最终的结果
最终返回结果是：   所返回的符号乘上两个字符串相比不相同的字符个数</p>
<p>对于本题来说， $str = “LAMP”; $str1 = “LAMPBrother”;
两个字符串不相同的字符有7个，且 $str &lt; $str2，返回符号为 -1
所以最终返回的结果为 -7 （-1 * 7）</p>
<p>6.属性不能被定义为 final，只有类和方法才能被定义为 final。
php和Java不同，Java中类属性是可以用final修饰表示的是常量，PHP不能，因为PHP的常量只能用define定义。</p>
<p>因为final成员不能被继承，所以在子类中可以再次定义</p>
<p>7.php中使用Oracle数据库作为服务器时PDO需要加载PDO_OCI驱动程序</p>
<ol start="8">
<li></li>
</ol>
<p>PDO中一共提供了三种不同的错误处理模式
① PDO::ERRMODE_SILENT:不报错误
② PDO::ERRMODE_WARNING:以警告的方式报错
③ PDO::ERRMODE_EXCEPTION：以异常的方式报错</p>
<p>9.array_count_values — 统计数组中所有的值出现的次数
返回一个关联数组，用 input 数组中的值作为键名，该值在数组中出现的次数作为值。</p>
<p>10.使用 intval 函数，echo intval(&quot;09&quot;)，或者使用 int 强制类型转换。</p>
<p>11.array_slice — 从数组中取出一段
array_slice(array,3,4);从3开始取4个</p>
<p>12.rsort — 对数组进行逆向排序（最高到最低）。
arsort — 对数组进行逆向排序并保持索引关系，数组的索引保持和单元的关联。</p>
<p>13.substr_count()  返回子字符串needle 在字符串 haystack 中出现的次数。注意 needle 区分大小写。</p>
<p>$text  =  'This is a test' ;
// 字符串被简化为 's is a test'，因此输出 1
echo  substr_count ( $text ,  'is' ,  3 );</p>
<p>14.array_rand — 从数组中随机取出一个或多个单元
array_rand(arr,2);	从arr中抽2个元素</p>
<p>15.如何优化高并发？
把数据先存到队列中，先把响应结果反映给用户，如果保障执行成功，把执行结果保存到日志中，运行结束后分析日志。</p>
<p>队列解决的是并发问题，整体的时间没有变化，只是前台优先显示给用户结果，后台在慢慢地执行程序。</p>
<p>16.strip_tags — 从字符串中去除 HTML 和 PHP 标记
该函数尝试返回给定的字符串 str 去除空字符、HTML 和 PHP 标记后的结果。</p>
<p>echo strip_tags($text, '<p><a>');// 允许 <p> 和 <a>
echo strip_tags($text);去除所有标记</p>
<p>fgetss — 从文件指针中读取一行并过滤掉 HTML 标记,和 fgets() 相同，只除了 fgetss() 尝试从读取的文本中去掉任何 HTML 和 PHP 标记。</p>
<p>17.strrev()反转字符串
chunk_split($str,3,',');  用逗号三个字符一分割。
ltrim（$str,','） 去掉左边的多余逗号字符
implode(',',$array) 把数组分割成字符串，和join一模一样
explode(',',$array); 把字符串分割成数组</p>
<p>18.取得当前文件路径的：
http://localhost:81/demo.php?A=ZMJ</p>
<p>ECHO <strong>FILE</strong>; //D:\www\demo.php
ECHO $_SERVER['SCRIPT_FILENAME'];//D:/www/demo.php
ECHO $_SERVER['QUERY_STRING'];//A=ZMJ
echo $_SERVER['PHP_SELF']; ///demo.php</p>
<p>当前脚本名称：$_SERVER[&quot;PHP_SELF&quot;]  或者 $_SERVER[&quot;SCRIPT_NAME&quot;]；
链接到当前页面的前一页面的 URL 地址：$_SERVER[&quot;HTTP_REFERER&quot;]。</p>
<p>19.数组中排序的函数：
arsort — 对数组进行逆向排序并保持索引关系 ,被按照字母顺序逆向排序，并且单元的索引关系不变。
asort — 对数组进行排序并保持索引关系,按照字母顺序排序，并且单元的索引关系不变。</p>
<p>krsort — 对数组按照键名逆向排序,对数组按照键名逆向排序
ksort — 对数组按照键名排序，对数组按照键名排序，保留键名到数据的关联。本函数主要用于关联数组。</p>
<p>rsort — 对数组逆向排序，被按照字母顺序逆向排序。 单元索引关系会改变</p>
<p>sort — 对数组排序，本函数对数组进行排序。当本函数结束时数组单元将被从最低到最高重新安排。</p>
<p>uasort — 使用用户自定义的比较函数对数组中的值进行排序并保持索引关联</p>
<p>uksort — 使用用户自定义的比较函数对数组中的键名进行排序</p>
<p>usort — 使用用户自定义的比较函数对数组中的值进行排序</p>
<p>20.array_unshift($arr,'jack')把jack加入到数组的最前面
array_fill() — 用给定的值填充数组
array array_fill ( int $start_index , int $num , mixed $value )
array_fill() 用 value 参数的值将一个数组填充 num 个条目，键名由 start_index 参数指定的开始。</p>
<?php
$a = array_fill(5, 6, 'banana');
$b = array_fill(-2, 4, 'pear');
print_r($a);
print_r($b);
?> 
<p>Array
(
[5]  =&gt; banana
[6]  =&gt; banana
[7]  =&gt; banana
[8]  =&gt; banana
[9]  =&gt; banana
[10] =&gt; banana
)</p>
<p>21.str_replace()  -- 替换字符串函数
substr_replace()  -- 对指定字符串中的部分字符串进行替换
addslashes(); -- 转义字符串
htmlspecialchars() -- THML实体转义</p>
<ol start="22">
<li></li>
</ol>
<p>mixed array_rand( array $input [, int $num_req ] )
从数组中随机取出一个或多个单元，它接受 input 作为输入数组和一个可选的参数 num_req，指明了你想取出多少个单元 － 如果没有指定，默认为 1。</p>
<p>如果你只取出一个，array_rand() 返回一个随机单元的键名，否则就返回一个包含随机键名的数组。</p>
<p>所以使用array_rand函数，返回结果要么是键名，有么是数组，在这个例子中，数组是索引数组，所以返回的是整型。</p>
<p>23.is_null -- 检测变量是否为 NULL，如果变量是 null 则返回 TRUE，否则返回 FALSE。
在下列情况下一个变量被认为是 NULL：
1)被赋值为 NULL
2)尚未被赋值
3)被unset()</p>
<p>24.in_array — 检查数组中是否存在某个值</p>
<p>bool in_array ( mixed $needle , array $haystack [, bool $strict = FALSE ] )
如果第三个参数 strict 的值为 TRUE 则 in_array() 函数还会检查 needle 的类型是否和 haystack 中的相同。</p>
<p>例子：
（1）</p>
<?php
$a = array('1.10', 12.4, 1.13);

if (in_array('12.4', $a, true)) {
    echo "'12.4' found with strict check\n";
}

if (in_array(1.13, $a, true)) {
    echo "1.13 found with strict check\n";
}
?>  
<p>以上例程会输出：
1.13 found with strict check</p>
<p>（2）</p>
<?php
$a = array(array('p', 'h'), array('p', 'r'), 'o');

if (in_array(array('p', 'h'), $a)) {
    echo "'ph' was found\n";
}





25.
__sleep    serialize之前被调用

__wakeup  unserialize时被调用
__toString 打印一个对象时被调用

__set_state 调用var_export时被调用，用__set_state的返回值作为var_export的返回值

__construct 构造函数，实例化对象时被调用	
__destruct  析构函数，当对象销毁时被调用

__call 对象调用某个方法，若存在该方法，则直接调用，若不存在，则调用__call 函数

__get 读取一个对象属性时，若属性存在，则直接返回，若不存在，则调用__get 函数

__set 设置一个对象的属性时，若属性存在，则直接赋值，若不存在，则调用__set函数

__isset 检测一个对象的属性是否存在时被调用
__unset unset一个对象的属性时被调用

__clone 克隆对象时被调用
__autoload 实例化一个对象时，如果对应的类不存在，则该方法被调用





26.后边多一个？表示懒惰模式。
必须跟在*或者+后边用
如：<img src="D:/BaiduNetdiskDownload/计算机书籍笔记/test.jpg" width="60px" height="80px"/>
如果用正则匹配src中内容非懒惰模式匹配
src=".*"
匹配结果是：src="test.jpg" width="60px" height="80px"
意思是从="往后匹配，直到最后一个"匹配结束

懒惰模式正则：
src=".*?"
结果：src="test.jpg"
因为匹配到第一个"就结束了一次匹配。不会继续向后匹配。因为他懒惰嘛。

.表示除\n之外的任意字符
*表示匹配0-无穷
+表示匹配1-无穷



27.去除HTML标记：
（1）
<?php
$text = '<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>';
echo strip_tags($text);
echo "\n";

// 允许 <p> 和 <a>
echo strip_tags($text, '<p><a>');
?>  
<p>以上例程会输出：
Test paragraph. Other text</p>
<p>Test paragraph.</p> <a href="#fragment">Other text</a>
<p>（2）
$str = &quot;<div style='color:red'>test string</div><br />&quot;;
$preg = &quot;/&lt;/?[^&gt;]+&gt;/i&quot;;
echo $str;
echo preg_replace($preg,'',$str);</p>
<p>28.写出验证电子邮件的格式？
preg_match('/^[\w-.]+@[\w-]+(.\w+)+$/',$mail);</p>
<p>29.用PHP写出显示客户端IP与服务器IP的代码。
$_SERVER['REMOTE_ADDR'];  客户端
$_SERVER['SERVER_ADDR'];  服务器端</p>
<p>得到当前执行脚本路径，包括所得到参数。
$<em>SERVER['SCRIPT_FILENAME']  或者__FILE</em>_
$_SERVER['QUERY_STRING']</p>
<p>当前脚本的名称：
$_SERVER['PHP_SELF']  或者 $_SERVER['SCRIPT_NAME']</p>
<p>链接到当前页面的前一页面的 URL 地址：
$_SERVER[&quot;HTTP_REFERER&quot;]。</p>
<p>30.ucfirst是把一个字符串的首字母变为大写。
strtolower — 将字符串转化为小写
strtoupper — 将字符串转化为大写
array_slice($arr,1)从数组arr中的下标为1的元素开始截取到最后
substr_count（$str,'a',3,6） — 计算字串出现的次数,在字符串str的3到6的				位置开始计算查找
array_keys -- 返回数组中所有的键名
array_values -- 返回数组中所有的值
key -- 从关联数组中取得键名，$arr = [];key($arr)</p>
<p>trim()  -- 去除字符串首尾处的空白字符（或者其他字符）
strlen()  -- 字符串长度
substr()  -- 截取字符串
str_replace()  -- 替换字符串函数
substr_replace()  -- 对指定字符串中的部分字符串进行替换
strstr()  -- 检索字符串函数
explode()  -- 分割字符串函数
implode()  -- 将数组合并成字符串
str_repeat() -- 重复一个字符串
addslashes(); -- 转义字符串
htmlspecialchars() -- THML实体转义</p>
<p>array_rand( array $input [, int $num_req ] )
从数组中随机取出一个或多个单元，它接受 input 作为输入数组和一个可选的参数 num_req，指明了你想取出多少个单元 － 如果没有指定，默认为 1。
如果你只取出一个，array_rand() 返回一个随机单元的键名，否则就返回一个包含随机键名的数组。
所以使用array_rand函数，返回结果要么是键名，有么是数组，在这个例子中，数组是索引数组，所以返回的是整型。</p>
<p>过滤script标签：
$pattern = '/&lt;script[^&gt;]<em>&gt;.</em>?&lt;/script&gt;/si';</p>
<p>strip_tags（$str,'不过滤的标签'）从字符串中去除 HTML 和 PHP 标记</p>
<p>验证电子邮件格式：
$pattern = '/^[\w-.]+@[\w-]+(.\w+)+$/';</p>
<p>$data = array(
0 =&gt; array('id' =&gt; 8, 'name' =&gt; 'name1'),
1 =&gt; array('id' =&gt; 10, 'name' =&gt; 'name2'),
2 =&gt; array('id' =&gt; 15, 'name' =&gt; 'name3')
);
写出在模板页的代码？ 若用foreach语句又要怎样显示呢？
用section语句：
&lt;{section name=test loop=$data start=0 step=1}&gt;
id:&lt;{$data[test].id}&gt;<br />
name:&lt;{$data[test].name}&gt;<br /><br />
&lt;{sectionelse}&gt;
数组为空
&lt;{/section}&gt;</p>
<p>用foreach语句：
&lt;{foreach from=$data item=test}&gt;
id:&lt;{$test.id}&gt;<br />
name:&lt;{$test.name}&gt;<br /><br />
&lt;{foreachelse}&gt;
数组为空
&lt;{/foreach}&gt;</p>
<p>1.如果要求每隔 5  分钟执行一次脚本 five.php ，如何实现？  （卓
望）
用到的函数 ignore_user_abort(),set_time_limit(0),sleep($interval)，此代码只要运行一次
后关闭浏览器即可。</p>
<?php
ignore_user_abort(); //关掉浏览器，PHP 脚本也可以继续执行.
set_time_limit(0); // 通过 set_time_limit(0)可以让程序无限制的执行下去
$interval=60*5; // 每隔 5 分钟运行
do{
sleep($interval); // 等待 5 分钟
}while(true);



### 19.知识点

1.microtime — 返回当前 Unix 时间戳和微秒数,本函数仅在支持 gettimeofday() 系统调用的操作系统下可用。 

microtime（true）

如果调用时不带可选参数，本函数以 "msec sec" 的格式返回一个字符串，其中 sec 是自 Unix 纪元（0:00:00 January 1, 1970 GMT）起到现在的秒数，msec 是微秒部分。字符串的两部分都是以秒为单位返回的。 

如果给出了 get_as_float 参数并且其值等价于 TRUE，microtime() 将返回一个浮点数。 

2.mysql 数据库基本的三个优化法则是什么？除了增加硬件和带宽，（从服务器配置，应用，并发角度考虑）



3.json_decode($str,true，$depth=512，options)

当第二个参数为 TRUE 时，将返回 array 而非 object 。

接受一个 JSON 格式的字符串并且把它转换为 PHP 变量

options: 位掩码的JSON解码选项。目前只有json_bigint_as_string支持（默认是铸造大整数浮点数）

$depth是递归深度
（1）<?php
$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

var_dump(json_decode($json));
var_dump(json_decode($json, true));

?> 
<p>object(stdClass)#1 (5) {
[&quot;a&quot;] =&gt; int(1)
[&quot;b&quot;] =&gt; int(2)
[&quot;c&quot;] =&gt; int(3)
[&quot;d&quot;] =&gt; int(4)
[&quot;e&quot;] =&gt; int(5)
}</p>
<p>array(5) {
[&quot;a&quot;] =&gt; int(1)
[&quot;b&quot;] =&gt; int(2)
[&quot;c&quot;] =&gt; int(3)
[&quot;d&quot;] =&gt; int(4)
[&quot;e&quot;] =&gt; int(5)
}</p>
<p>（2）<?php
$json = '{"foo-bar": 12345}';
$obj = json_decode($json);
print $obj->{'foo-bar'}; // 12345
?></p>
<p>（3）
php中json_decode返回为NULL
在网上找了很多,都写的例子是json_encode.我把我遇到的这个情况写下吧!</p>
<p>【第一种情况】json_decode 之后什么都没有,.  原因之一json_decode只支持utf-8.
iconv('gbk','utf-8', $result_string),用iconv函数改变的编码格式,我个案是gbk..转成utf-8.</p>
<p>【第二个情况】  数组对象是需要用print_r ,不能用echo的。</p>
<p>【第三个情况】  之后还有乱码情况 ..我的个案是这样的.
header(&quot;Content-Type: text/html; charset=UTF-8&quot;);</p>
<p>// the name and value must be enclosed in double quotes    1.这里是说不要使用单引号,正确应该是 $bad_json = '{ &quot;bar&quot;: &quot;baz&quot; }';
// single quotes are not valid
$bad_json = &quot;{ 'bar': 'baz' }&quot;;
json_decode($bad_json); // null</p>
<p>// the name must be enclosed in double quotes  2.这里是说 名称应该要用&quot;&quot;包含起来.. 正确的应该是 $bad_json = '{ &quot;bar&quot;: &quot;baz&quot; }';就光这个浪费我好几个小时....弄了半天...哎...
$bad_json = '{ bar: &quot;baz&quot; }';
json_decode($bad_json); // null</p>
<p>// trailing commas are not allowed  3.这里是说 最后一个不需要逗号.
$bad_json = '{ bar: &quot;baz&quot;, }';
json_decode($bad_json); // null</p>
<p>(4)</p>
<?php
$json = '12345678901234567890';

var_dump(json_decode($json));
var_dump(json_decode($json, false, 512, JSON_BIGINT_AS_STRING));

?> 
<p>float(1.2345678901235E+19)
string(20) &quot;12345678901234567890&quot;</p>
<p>4.mysql如何在一个页面连接多个服务器？</p>
<p>（1）mysql_connect('服务器名.端口号','用户名','密码',new_link,);
打开或重复使用一个到 MySQL 服务器的连接。</p>
<p>（2）其中服务器名.端口号可以写成：localhost:3306，默认3306</p>
<p>（3）new_link是个布尔值，如果用同样的参数第二次调用 mysql_connect()，将不会建立新连接，而将返回已经打开的连接标识。参数 new_link 改变此行为并使 mysql_connect() 总是打开新的连接，甚至当 mysql_connect() 曾在前面被用同样的参数调用过。</p>
<p>（4）$link = mysql_connect('localhost:80','root','123456') or die('连接失败，原因是：' . mysql_error());
mysql_close($link);</p>
<p>答案：
$conn1 = mysql_connect(&quot;$dbhost&quot;, &quot;$dbuser&quot;,&quot;$dbpassword&quot;);
mysql_select_db( &quot;a&quot;,$conn1);
$conn2 = mysql_connect(&quot;$dbhost&quot;, &quot;$dbuser&quot;,&quot;$dbpassword&quot;,true);
mysql_select_db(&quot;b&quot;,$conn2);看看mysql_connect该函数的第四个参数new_link，mysql_connect()默认new_link为false在一个脚本里用同样的参数调用N次的话, 它不会重新打开新的连接,
而是直接返回上一次打开的连接资源句柄! 如果new_link值为true，它会重新打开一个新的连接并且返回新的连接资源句柄。</p>
<p>5.事件绑定的几种方式？
（1）直接绑定，最常见的绑定事件的方式
通过 jQuery 对象的事件同名方法。$(selector).click(function(){})
该方法可以实现多事件绑定
$('#button')</p>
<p>（2）bind()绑定
$(&quot;#button&quot;).bind('click',function(event){
console.log('bind',event);
});</p>
<p>直接绑定，bind 绑定，on 委派绑定，one 一次性绑定。</p>
<p>6.给class=abc的元素下面id以a开头的Li元素增加一个active类
$('.abc').children(&quot;li[id^='a']&quot;).addClass('active');</p>
<p>7.nginx可以做什么服务器？
web服务器，mail服务器，负载均衡服务器，反向代理服务器</p>
<p>8.<div id="main" width="300px"><span>aaaaa</span><span>sssss</span></div>
获取第一个span的值</p>
<p>9.存在类Common\Controller\BaseController
要求在命名空间Home\Front 下定义User类，继承BaseController
在User类构造函数中首先输出‘hello’字符串,然后调用父类的构造函数，
在User类析构函数ld'字符串，然后输出当前的时间，格式为：2016/08/01 18:30:20   写出类定义的完整代码</p>
<p>10.PHP+apache配置：
linux系统下：
LoadModule php5_module  modules/libphp5.so</p>
<FilesMatch \.php$>
	SetHandler application/x-httpd-php
</FilesMatch>
<h3 id="_20-基础面试题" tabindex="-1"><a class="header-anchor" href="#_20-基础面试题" aria-hidden="true">#</a> 20.基础面试题</h3>
<p>问题：在页面中引用 CSS 有几种方式？
<em><strong>*回答*</strong></em>：在页面中使用 CSS 有 3 种方式：
引用外部 CSS 文件
内部定义 Style 样式
内联样式</p>
<p>问题：PHP 支持多继承吗？
<em><strong>*回答*</strong></em>：不可以。PHP 类只能继承一个父类，并用关键字“extended”标识。</p>
<p>问题：请问 PHP 中 echo 和 print 有什么区别？
这两个看起来很相似，因为它们都是将一些值打印在屏幕上。但是 echo 和 print 的本质区别	在于：echo 用来输出字符串，显示多个值的时候可以用逗号隔开。只支持基本类型，print 不仅可以打印字符串值，而且可以打印函数的返回值。</p>
<p>问题：请问 GET 和 POST 方法有什么区别？
<em><strong>*回 答*</strong></em>：我们在网页上填写的表单信息都可以通过这两个方法将数据传递到服务器上，当我们使	用 GET 方法是，所有的信息都会出现在 URL 地址中，并且使用 GET 方法最多只能传递 	1024 个字符，所以如果在传输量小或者安全性不那么重要的情况下可以使用 GET 方法。说到 	POST 方法，最多可以传输 2MB 字节的数据，而且可以根据需要调节。</p>
<p>问题：PHP 中获取图像尺寸大小的方法是什么？
<em><strong>*回答*</strong></em>：getimagesize () 获取图片的尺寸
Imagesx () 获取图片的宽度
Imagesy () 获取图片的高度</p>
<p>问题：PHP 中的 PEAR 是什么？
<em><strong>*回答*</strong></em>：PEAR 也就是为 PHP 扩展与应用库（PHP Extension and Application Repository），它	是一个 PHP 扩展及应用的一个代码仓库。</p>
<p>问题：如何用 PHP 和 MySQL 上传视频？
<em><strong>*回答*</strong></em>：我们可以在数据库中存放视频的地址，而不需要将真正的视频数据存在数据库中。可以将	视频数据存放在服务器的指定文件夹下，上传的默认大小是 2MB，但是我们也可以在 php.ini 文	件中修改 max_file size 选项来改变。</p>
<p>问题：PHP 中的错误类型有哪些？
<em><strong>*回答*</strong></em>：PHP 中遇到的错误类型大致有 3 类。
<em><strong>*提示*</strong></em>：这都是一些非常正常的信息，而非重大的错误，有些甚至不会展示给用户。比如访问不存	在的变量。
<em><strong>*警告*</strong></em>：这是有点严重的错误，将会把警告信息展示给用户，但不会影响代码的输出，比如包含一	些不存在的文件。
<em><strong>*错误*</strong></em>：这是真正的严重错误，比如访问不存在的 PHP 类。</p>
<p>问题：如何在 PHP 中定义常量？
<em><strong>*回答*</strong></em>：PHP 中使用 Define () 来定义常量。
define (“Newconstant”， 30);</p>
<p>问题：如何不使用 submit 按钮来提交表单？
如果我们不想用 submit 按钮来提交表单，我们也可以用超链接来提交，我们可以这样写代码：	Submit Me</p>
<p>· PHP
<em><strong>*基础*</strong></em>：
单引号和双引号区别？
GET和POST的FORM表单的Action有什么区别？
Session工作原理
如何取出数组最后一个值？
Git分支合并
翻转字符串&quot;example&quot;
打印出2014-09-23 23:08:01的时间戳
Debug方法
Composer用法</p>
<p><em><strong>*进阶*</strong></em>：
框架各部分了解程度（路由、设计规则、数据层包装、视图层、可扩展等）
面向对象的了解程度（静态方法、变量可用范围、抽象类、接口、继承、克隆、魔术方法等）
命名空间
测试用例
异常处理
缓存数据（memcache、redis、模板缓存、apc等各类缓存）
正则测试</p>
<p><em><strong>*高级*</strong></em>：
PHP SPL
设计模式（挑选两个，比如工厂、单例讲讲）
排序算法（挑选两个，比如冒泡排序、插入排序讲讲应用点）
加密算法（挑选两个，比如sha、crc32讲讲应用点以及区别）
测试驱动开发
敏捷开发思考
最优开发模式
疑难问题解决方法</p>
<p><strong>·</strong> <em><strong>*安全*</strong></em>
分别讲讲XSS、CSRF原理和防范
SQL注入防范
上传应该注意哪些问题
变量覆盖问题
危险函数该如何处理
服务基线
安全域</p>
<p><strong>·</strong> <em><strong>*数据库*</strong></em>
事务处理
各类锁处理
分库、主从与离线
左连接、右连接、交叉连接
SQL优化
不常用SQL函数应用
曾经遇到的坑</p>
<p><strong>·</strong> <em><strong>*Linux*</strong></em>
挑选两个命令，比如find、awk用法
文件排序方法（比如取某文件夹最后修改的文件并将大小显示为以M为单位的）
python、shell等脚本程度</p>
<p><strong>数据库中的事务是什么？</strong></p>
<p><em><strong>*答*</strong></em>:事务（transaction）是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则	认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成， 事务则提交，其修改将	作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消。</p>
<p><em><strong>*答*</strong></em>：事务就是一系列的操作,这些操作完成一项任务。只要这些操作里有一个操作没有成功,事务就操	作失败,发生回滚事件。即撤消前面的操作,这样可以保证数据的一致性。而且可以把操作暂时放在缓	存里,等所有操作都成功有提交数据库,这样保证费时的操作都是有效操作。</p>
<p><strong>用PHP写出显示客户端IP与服务器IP的代码</strong></p>
<p>答:打印客户端IP:echo $_SERVER['REMOTE_ADDR']; 或者: getenv('REMOTE_ADDR'); 打印服务	器IP:echo gethostbyname('www.meizhi520.com')</p>
<p><strong>error_reporting(2047)什么作用？</strong></p>
<p>答：PHP 显示所有错误 E_ALL</p>
<p><strong>session与cookie的区别?</strong></p>
<p>答:session:储存用户访问的全局唯一变量,存储在服务器上的php指定的目录中的（session_dir）的	位置进行的存放 cookie:用来存储连续訪問一个頁面时所使用，是存储在客户端，对于Cookie来说	是存储在用户WIN的Temp目录中的。 两者都可通过时间来设置时间长短</p>
<p><strong>表单中 get与post提交方法的区别?</strong></p>
<p>答:get是发送请求HTTP协议通过url参数传递进行接收,而post是实体数据,可以通过表单提交大量	信息.</p>
<p><strong>用PHP打印出前一天的时间格式是2013-11-26 12:11:11</strong></p>
<p>答:echodate('Y-m-d H:i:s', strtotime('-1 days'));</p>
<p><strong>打开php.ini中的Safe_mode，会影响哪些函数？至少说出6个。</strong></p>
<p>答： 1:用户输入输出函数(fopen() file()require(),只能用于调用这些函数有相同脚本的拥有者) 2:创建	新文件(限制用户只在该用户拥有目录下创建文件) 3:用户调用popen() systen()exec()等脚本，只有	脚本处在sa fe_mode_exec_dir配置指令指定的 录中才可能 4:加强HTTP认证，认证脚本拥有者的	UID的划入认证领域范围内，此外启用安全模式下，不会设置PHP_AUTH 5:mysql服务器所用的用	户名必须与调用mysql_connect()的文件的拥有者用户名相同 6:受影响的函数变量以及配置命令达	到40个</p>
<p><strong>MySQL数据库，怎么优化？</strong></p>
<p>答： (1)配置优化（服务器配置）  (2)建表优化（表、字段设置） (3)查询优化（sql语句） 答： 1、	选取最适用的字段属性,尽可能减少定义字段长度,尽量把字段设置NOT NULL,例如’省份,性别’,最	好设置为ENUM 2、使用连接（JOIN）来代替子查询: 3、使用联合(UNION)来代替手动创建的临时	表 4、事务处理: 5、锁定表,优化事务处理: 6、使用外键,优化锁定表 7、建立索引: 8、优化查询语句</p>
<p><strong>写一个函数，能够遍历一个文件夹下的所有文件和子文件夹。（目录操作）</strong></p>
<p>$d = dir(dirname(<strong>file</strong>));</p>
<p>echo &quot;Handle: &quot; . $d-&gt;handle . &quot;\n&quot;;</p>
<p>echo &quot;Path: &quot; . $d-&gt;path . &quot;\n&quot;;</p>
<p>while ( false !== ($entry = $d-&gt;read ()) ) {</p>
<p>echo $entry . &quot;&quot;;</p>
<p>}</p>
<p>$d-&gt;close ();</p>
<p><strong>能够使HTML和PHP分离开使用的模板</strong></p>
<p>答:Smarty,Dwoo,TinyButStrong,Template Lite,Savant,phemplate,XTemplate</p>
<p><strong>使用哪些工具进行版本控制?</strong></p>
<p>答:cvs,svn,vss;</p>
<p><strong>如何实现字符串翻转?</strong></p>
<p>答:echo strrev($a);</p>
<p><strong>MYSQL取得当前时间的函数是?，格式化日期的函数是</strong></p>
<p>答:now(),date()</p>
<p><strong>请写一个函数验证电子邮件的格式是否正确</strong></p>
<p>function checkEmail($email)</p>
<p>{</p>
<p>$pregEmail = &quot;/([a-z0-9]<em>[-_.]?[a-z0-9]+)</em>@([a-z0-9]*[-_]?[a-z0-9]+)+[.][a-z]{2,3}([.][a-z]{2})?/i&quot;;</p>
<p>return preg_match($pregEmail,$email);</p>
<p>}</p>
<p><strong>检测一个变量是否有设置的函数是?是否为空的函数是?</strong></p>
<p>答:isset($str),empty($str);</p>
<p><strong>echo(),print(),print_r()的区别</strong></p>
<p>答:echo是PHP语句, print和print_r是函数,语句没有返回值,函数可以有返回值(即便没有	用) print()   只能打印出简单类型变量的值(如int,string) print_r()  可以打印出复杂类型变量的值	(如数组,对象) echo    输出一个或者多个字符串</p>
<p><strong>在PHP中error_reporting这个函数有什么作用?</strong></p>
<p>答:设置错误级别与错误信息回报</p>
<p><strong>PHP的意思</strong></p>
<p>答:PHP是一个基于服务端来创建动态网站的脚本语言，您可以用PHP和HTML生成网站主页</p>
<p><strong>实现中文字串截取无乱码的方法。</strong></p>
<p>function GBsubstr($string, $start, $length) {</p>
<p>if(strlen($string)&gt;$length){</p>
<p>​    $str=null;</p>
<p>​    $len=$start+$length;</p>
<p>​    for($i=$start;$i&lt;$len;$i++){</p>
<p>​      if(ord(substr($string,$i,1))&gt;0xa0){</p>
<p>​        $str.=substr($string,$i,2);</p>
<p>​        $i++;</p>
<p>​      }else{</p>
<p>​        $str.=substr($string,$i,1);</p>
<p>​      }</p>
<p>​    }</p>
<p>​    return $str.'…';</p>
<p>}else{</p>
<p>​    return $string;</p>
<p>}</p>
<p>}</p>
<p><strong>对于大流量的网站,您采用什么样的方法来解决访问量问题?</strong></p>
<p>答:确认服务器硬件是否足够支持当前的流量,数据库读写分离,优化数据表, 程序功能规则,禁止外部的	盗链,控制大文件的下载,使用不同主机分流主要流量</p>
<p><strong>语句include和require的区别是什么?为避免多次包含同一文件，可用(__)语句代替它们?</strong></p>
<p>答:require-&gt;require是无条件包含也就是如果一个流程里加入require,无论条件成立与否都会先执	行require include-&gt;include有返回值，而require没有(可能因为如此require的速度比include	快) 注意:包含文件不存在或者语法错误的时候require是致命的,include不是 使用 <strong>require_once</strong>() 	和 <strong>include_once</strong>()可以避免多次包含同一文件以避免函数重定义，变量重新赋值等问题。 返回值和 	include() 相同。如果文件已被包含，本函数返回 TRUE。 注: require_once() 是 php 4.0.1pl2 中	新加入的。</p>
<p><strong>如何修改SESSION的生存时间</strong></p>
<p>答: 方法1:将php.ini中的session.gc_maxlifetime设置为9999重启apache 方法2: $savePath = &quot;./session_save_dir/&quot;; $lifeTime = 小时 * 秒; session_save_path($savePath); session_set_cookie_params($lifeTime); session_start(); 方法3: setcookie() and session_set_cookie_params($lifeTime);</p>
<p><strong>有一个网页地址, 比如PHP开发资源网主页: http://www.meizhi520.com,如何得到它的内容?</strong></p>
<p>答:方法1(对于PHP5及更高版本): $readcontents = fopen(&quot;http://www.meizhi520.com&quot;, &quot;rb&quot;); $contents = stream_get_contents($readcontents); fclose($readcontents); echo $contents; 方法2: echo file_get_contents(&quot;http://www.meizhi520.com&quot;);</p>
<p><strong>在HTTP 1.0中，状态码401的含义是(_);如果返回“找不到文件”的提示，则可用 header 函数，其语句为(__);</strong></p>
<p>答:状态401代表未被授权,header(&quot;Location:xxx.php&quot;);</p>
<p><strong>谈谈asp,php,jsp的优缺点</strong></p>
<p>答:     ASP全名Active Server Pages，是一个WEB服务器端的开发环境， 利用它可以产生和运行动态的、交互的、高性能的WEB服务应用程序。ASP采用脚本语言VB Script（Java script）作为自己的开发语言。     PHP是一种跨平台的服务器端的嵌入式脚本语言. 它大量地借用C,Java和Perl语言的语法, 并耦合PHP自己的特性,使WEB开发者能够快速地写出动态生成页面.它支持目前绝大多数数据库。还有一点，PHP是完全免费的，不用花钱，你可以从PHP官方站点(http://www.php.net)自由下载。而且你可以不受限制地获得源码，甚至可以从中加进你自己需要的特色。    JSP 是Sun公司推出的新一代站点开发语言，他完全解决了目前ASP,PHP的一个通病－－脚本级执行（据说PHP4 也已经在Zend 的支持下，实现编译运行）.Sun 公司借助自己在Java 上的不凡造诣，将Java 从Java 应用程序 和 Java Applet 之外，又有新的硕果，就是Jsp－－Java Server Page。Jsp 可以在Serverlet和JavaBean的支持下，完成功能强大的站点程序。     三者都提供在 HTML 代码中混合某种程序代码、由语言引擎解释执行程序代码的能力。但JSP代码被编译成 Servlet 并由 Java 虚拟机解释执行，这种编译操作仅在对 JSP 页面的第一次请求时发生。在 ASP 、PHP、JSP 环境下， HTML 代码主要负责描述信息的显示样式，而程序代码则用来描述处理逻辑。普通的 HTML 页面只依赖于 Web 服务器，而 ASP 、PHP、JSP 页面需要附加的语言引擎分析和执行程序代码。程序代码的执行结果被重新嵌入到HTML 代码中，然后一起发送给浏览器。 ASP 、PHP、 JSP三者都是面向 Web 服务器的技术，客户端浏览器不需要任何附加的软件支持。</p>
<p><strong>谈谈对mvc的认识</strong></p>
<p>答: 由模型(model),视图(view),控制器(controller)完成的应用程序 由模型发出要实现的功能到控制	器,控制器接收组织功能传递给视图;</p>
<p><strong>在PHP中，heredoc是一种特殊的字符串，它的结束标志必须?</strong></p>
<p>答:heredoc的语法是用&quot;&lt;&lt;&lt;&quot;加上自己定义成对的标签，在标签范围內的文字视为一个字符串 例	子: $str = &lt;&lt;&lt;EOT this is meizhi520.com; welcome! EOT;</p>
<p><strong>简述如何得到当前执行脚本路径，包括所得到参数。</strong></p>
<p>答:$script_name = basename(<strong>FILE</strong>); print_r($script_name);</p>
<p><strong>请说明php中传值与传引用的区别。什么时候传值什么时候传引用?</strong></p>
<p>答: 按值传递：函数范围内对值的任何改变在函数外部都会被忽略 按引用传递：函数范围内对值的任	何改变在函数外部也能反映出这些修改 优缺点：   按值传递时，php必须复制值。特别是对于大型	的字符串和对象来说，这将会是一个代价很大的操作。   按引用传递则不需要复制值，对于性能提	高很有好处。</p>
<p><strong>JS表单弹出对话框函数是?获得输入焦点函数是?</strong></p>
<p>答:弹出对话框: alert(),prompt(),confirm() 获得输入焦点 focus()</p>
<p><strong>JS的转向函数是?怎么引入一个外部JS文件?</strong></p>
<p>答: window.location.href <script type="text/javascript" src="js/js_function.js"></script></p>
<p><strong>mysql_fetch_row() 和mysql_fetch_array之间有什么区别?</strong></p>
<p>答:mysql_fetch_row是从结果集取出1行数组,作为枚举 mysql_fetch_array是从结果集取出一行数	组作为关联数组,或数字数组,两者兼得</p>
<p><strong>GD库是做什么用的?</strong></p>
<p>答:gd库提供了一系列用来处理图片的API，使用GD库可以处理图片，或者生成图片。 在网站上	GD库通常用来生成缩略图或者用来对图片加水印或者对网站数据生成报表。</p>
<p><strong>指出一些在PHP输入一段HTML代码的办法。</strong></p>
<p>答:echo &quot;<a href='meizhi520.com'>meizhi520</a>&quot;;</p>
<p><strong>下面哪个函数可以打开一个文件，以对文件进行读和写操作?</strong></p>
<p>(a) fget() (b) file_open() (c) fopen() (d) open_file()</p>
<p><strong>下面哪个选项没有将 john 添加到users 数组中?</strong></p>
<p>(a) $users[] = 'john'; (b) array_add($users,'john'); (c) array_push($users,'john'); (d) $users ||= 	'john';</p>
<p><strong>下面的程序会输入是否?</strong></p>
<?php

$num = 10;

function multiply(){

$num = $num * 10;

}

multiply();

echo $num;

?>
<p><strong>如何使用下面的类,并解释下面什么意思?</strong></p>
<p>class test{</p>
<p>function Get_test($num){</p>
<p>​    $num=md5(md5($num).&quot;En&quot;);</p>
<p>​    return $num;</p>
<p>}</p>
<p>}</p>
<p>答: $testnum = &quot;123″; $object = new test(); $encrypt = $object-&gt;Get_test($testnum); echo $encrypt; 类test里面包含Get_test方法,实例化类调用方法多字符串加密</p>
<p><strong>写出以下程序的输出结果</strong></p>
<p>$b=201;</p>
<p>$c=40;</p>
<p>$a=$b&gt;$c?4:5;</p>
<p>echo$a;</p>
<p><strong>取得查询结果集总数的函数是?</strong></p>
<p>答:mysql_num_rows($result);</p>
<p><strong>数组</strong></p>
<p>数组：$arr = array('james', 'tom', 'symfony'); 1.请打印出第一个元素的值    答:echo $array[0]; 2.	请将数组的值用','号分隔并合并成字串输出  答:for($i=0;$i&lt;count($array);$i++){ echo 	$array[$i].&quot;,&quot;;}</p>
<p><strong>$a = 'meizhi520.com'; 请取出$a的值并打印出第一个字母</strong></p>
<p>答:echo $a{0} 或 echo substr($a,0,1)</p>
<p><strong>PHP可以和sql server/oracle等数据库连接吗?</strong></p>
<p>答:当然可以</p>
<p><strong>请写出PHP5权限控制修饰符</strong></p>
<p>答:public(公共),private(私用),protected(继承)</p>
<p><strong>请写出php5的构造函数和析构函数</strong></p>
<p>答:__construct , __destruct</p>
<p>视口：</p>
<meta content=”width=device-width,initial-scale=1.0,user-scalable=no” name=”viewport” id=”viewport”/>
<p>媒体查询：<link rel="stylesheet" type="text/css" href="css/1.css" media="(min-width:750px)"/>  表示最小宽度为750px</p>
<p>栈是先进后出，只能在一端做操作的线性结构.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>foreach(tree($list) as $row) {
	echo str_repeat('&amp;nbsp;', $row['deep']*4);
	echo $row['name'];
	echo '&lt;br>';
}

function tree($list)
{
	$stack = [];// 栈
	$tree = [];
	// 入栈所有的顶级分类
	foreach($list as $row) {
		if (0 == $row['parent_id']) {
			$row['deep'] = 0;// 顶级分类的深度为0
			array_push($stack, $row);
		}
	}
	//stack: 衣服 书籍
	do {
		// 出栈 一个元素,查找其子元素 
		$top = array_pop($stack);
		// stack: 衣服
		// var_dump($top); echo '&lt;br>';
		$tree[] = $top;
		// $top 某个分类, 查找给分类的所有子类
		foreach($list as $row) {
			if ($row['parent_id'] == $top['id']) {
				// 是当前分类的子类,将其入栈
				$row['deep'] = $top['deep']+1;
				array_push($stack, $row);
			}
		}
	} while(!empty($stack));
	return $tree;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>队列：先进先出</p>
<p>用redis队列发邮件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$redis = new Redis;
$result = $redis->connect('127.0.0.1', '6379');
// var_dump($result);
foreach($ids as $id) {
	// 加入redis队列
	$redis->lPush('send_list', $id);
}

// 提示用户, 邮件发送处理中
echo '处理中, 已加入发送队列, 邮件发送完毕!';
while (true) {// 守护进程! 永久执行! 
	// 从队列中获取发送的用户ID
	while ($id = $redis->rpop('send_list')) {
		// 发送邮件
		$email = 'user-'. $id . '@kang.com';
		sendMail($email);	
	}
}

function sendMail($to)
{
	sleep(1);
	// 记录日志
	echo 'SendSuccess:' , $to, "\n";

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>*8月6号总结：*</strong></em></p>
<p>问题：1、数据库优化	2、权限操作	3、支付流程	4、Mvc简述</p>
<p>​	  5、nosql型内存	6、tcp/ip协议</p>
<p><em><strong>*笔试题：*</strong></em></p>
<p>1、抓取远程图片到本地，你会用什么函数?</p>
<p>2、用最少的代码写一个求3值最大值的函数。</p>
<p>3、用PHP打印出前一天的时间，打印格式是2007年5月10日22:21:21。</p>
<p>4、获取URL中？后面的值。</p>
<p>5、假设a.html和b.html在同一个文件夹下面，用javascript实现当打开a.html	五秒钟后，自动跳转到b.html。</p>
<p>6、得到正在浏览器当前页面用户的IP地址。</p>
<p>7、在HTTP1.0中，状态码401的含义是___;</p>
<p>如果返回“找不到文件”的提示，则可用_____函数，其语句为_____</p>
<p>8、向数组尾部添加一个元素。</p>
<p>9、在PHP中error_reporting这个函数有什么作用？</p>
<p>10、如何修改SESSION的生存时间。</p>
<p>11、HTTP协议中GET、POST、和HEAD的区别？</p>
<p>12、有一个网页地址，比如PHP开发资源网主页：http：	//www.yinzifang.com/index.html，如何得到他的内容？</p>
<p>13、请说明php中传值和传引用的区别。什么时候传值什么时候传引用？</p>
<p>14、使用多种方式获取从一个标准url里取出文件扩展名。</p>
<p>15、Php class中static，public，private，protected的区别？</p>
<p>16、MySQL数据库中的字段类型varchar和char的主要区别是什么？哪种字段的查找效率更高，为什么？</p>
<p>17、下列代码输出什么</p>
<?php

$str1 = null;

$str2 = false;

echo $str1 == $str2 ?  ‘相等’ : ’不相等’;

 

$str3 = ’’;

$str4 = 0;

echo $str3 == $str4 ? ‘相等’ : ‘不相等’;

 

$str5 = 0;

$str6 = ‘0’;

echo $str5 === $str6 ? ‘相等’ : ‘不相等’;

?>
<p>18、如果公司框架是自己开发的，没有用现有的框架，他们一般不关心你的项目，更关心你的基础知识，可能会问****mysql引擎，分布式，pdo mongodb redis****
用框架的，会问你项目是怎么实现的，你负责哪些？
笔试题，<em><strong>*一般都有一道正则，数据库题必考！*</strong></em>
他们一般都会问和他们公司现做的东西相关的内容，都问到****跨域请求，存储引擎****</p>
<p>19、HTTP协议以及消息的推送？</p>
<p><em><strong>*8月8号总结：*</strong></em></p>
<p>1、$_REQUEST,$_GET,$_POST,$_SESSION,$_FILES分别代表什么？</p>
<p>2、请写出一个正则表达式。用于匹配一个HTML文件中<img/>标记的图片地址</p>
<p>3、PHP中，模板引擎的目的是什么？你用过哪些模板引擎？</p>
<p>4、倾斜一个函数将1234567890转换成1,234,567,890 每3位用逗号隔开的形式。</p>
<p>5、用PHP打印出前一天的时间格式是2016-04-10 13:18:21（此题重复）</p>
<p>6、用PHP写出显示客户端IP与服务器IP的代码</p>
<p>7、Include和require的区别是什么？</p>
<p>8、有一个网页地址，http：//www.iworker/index.html,如何得到他的内容？（此题重复）</p>
<p>9、请说明PHP中传值和传引用的区别？（此题重复）</p>
<p>10、PHP中error_reporting这个函数有什么作用？</p>
<p>11、如何得到当前执行脚本路径。</p>
<p>12、foo()和@foo()之间有什么区别？</p>
<p>13、检测一个变量是否有设置的函数？是否为空的函数是？</p>
<p>14、$a = “abcdef”;请取出$a的值并打印出第一个字母</p>
<p>15、请写出PHP的构造函数和析构函数</p>
<p>16、写一个函数，从一个标准URL里取出文件的扩展名</p>
<p>例如：http://www.iworker.cn/abc/de/fg.php?id=1 需要取出php	或 .php</p>
<p>17、求$a,$b,$c三个数中的最大值和最小值</p>
<p>18、数据库索引有几类，分别是什么？什么时候该用索引？</p>
<p>19、Mysql_fetch_row() 和 Mysql_fetch_array 之间有什么区别？</p>
<p>20、Explain select*from user; 这个命令的作用？</p>
<p>21、写出发帖数最多的三个人名字的SQL，利用下表</p>
<p>Member表原始数据</p>
<p>Username			posts</p>
<p>------------------------------</p>
<p>Wsp				1403</p>
<p>Hjj					356</p>
<p>King				67</p>
<p>Ford				1340</p>
<p>James				8799</p>
<p>22、写出对应的SQL语句，如果一个员工工资小于等于2000，就返回消息“NO”，如果大于等于4000，就返回“YES”,如果在这两者之间，就返回“OK”，结果集如下：</p>
<p>Salary表原始数据</p>
<p>Name		sal</p>
<p>-------------------</p>
<p>Wap		2300</p>
<p>Hjj			6700</p>
<p>King		6000</p>
<p>Ford		1800</p>
<p>James		1200</p>
<p>按要求，显示效果图</p>
<p>Name				sal				status</p>
<p>----------------------------------------------</p>
<p>Wsp				2300			ok</p>
<p>Hjj					6700			yes</p>
<p>King				6000			yes</p>
<p>Ford				1800			no</p>
<p>James				1200			no</p>
<p>如何防止用户刷APP接口数据？</p>
<h4 id="一-接口被刷表现方式" tabindex="-1"><a class="header-anchor" href="#一-接口被刷表现方式" aria-hidden="true">#</a> <strong>一.接口被刷表现方式</strong></h4>
<p>接口被刷，一般表现为以下两种：</p>
<p>1、数据含有敏感词 或者 广告；</p>
<p>2、一分钟产生大量类似数据；</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps4EAE.tmp.jpg" alt="img"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps4EAF.tmp.jpg" alt="img"></p>
<h4 id="二-防刷处理步骤1-网络层拦截" tabindex="-1"><a class="header-anchor" href="#二-防刷处理步骤1-网络层拦截" aria-hidden="true">#</a> <strong>二.防刷处理步骤1：网络层拦截</strong></h4>
<h5 id="通过access-log查出是否有密集的ip请求应用被刷的接口-如有则封ip-或者-限速-【有效】" tabindex="-1"><a class="header-anchor" href="#通过access-log查出是否有密集的ip请求应用被刷的接口-如有则封ip-或者-限速-【有效】" aria-hidden="true">#</a> <strong>通过access.log查出是否有密集的IP请求应用被刷的接口，如有则封IP 或者 限速</strong>**【有效】**</h5>
<p>通过access.log分析，可以分析出如下两个截图结果：</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps4EB0.tmp.jpg" alt="img"></p>
<p>IP1从某时间段总共请求接口6489次，占总应用访问率97.286次。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/wps4EC1.tmp.jpg" alt="img"><img src="@source/docs/theme-reco/img/php面试题最全篇/wps4EC2.tmp.jpg" alt="img"></p>
<p>IP1每分钟请求接口的次数，10几次-20几次，甚至是20次+，这个统计结果很明显是机器刷数据了，普通网友不可能达到如此速度。</p>
<p>有这种情况，可采取以下两种处理方案：</p>
<p>方案1：通过网络层封掉IP，如果用此方案处理，则该IP不能访问该应用或者说是本公司露出的所有应用【处理方式较狠】；</p>
<p>方案2：对同一IP加些限制，一般表现为对IP进行限速</p>
<p>==&gt;对同一IP来源同一URL进行限速</p>
<p>==&gt;对同一IP来源进行限速</p>
<p>对IP做限速相当于是不能让如此速度快（即机器提交的速度）的提交代码，即防止机器刷数据</p>
<p>具体配置参数==》http://my.oschina.net/xsh1208/blog/657342</p>
<h4 id="三-防刷处理步骤2-程序拦截" tabindex="-1"><a class="header-anchor" href="#三-防刷处理步骤2-程序拦截" aria-hidden="true">#</a> <strong>三.防刷处理步骤2：程序拦截</strong></h4>
<h5 id="-10" tabindex="-1"><a class="header-anchor" href="#-10" aria-hidden="true">#</a> </h5>
<h5 id="_1、对单个用户-ip限制每分钟最多提交的次数-【有效】" tabindex="-1"><a class="header-anchor" href="#_1、对单个用户-ip限制每分钟最多提交的次数-【有效】" aria-hidden="true">#</a> <strong>1、对单个用户/ip限制每分钟最多提交的次数</strong>**【有效】**</h5>
<p>实现方式有多种，常用的方式是记录单次提交成功的单个用户/ip放到mc里面，然后给mc设定2分钟的缓存时间。下次该用户/ip提交数据的时候先查mc是否已过期，没过期，则不给提交；</p>
<h5 id="_2、对提交数据资格进行加严" tabindex="-1"><a class="header-anchor" href="#_2、对提交数据资格进行加严" aria-hidden="true">#</a> <strong>2、对提交数据资格进行加严</strong></h5>
<p>例如可以post数据的权限限制为账号必须通过邮箱激活或者手机号已经被激活了等等处理</p>
<h5 id="_3、对敏感词-广告词-特殊字符进行过滤" tabindex="-1"><a class="header-anchor" href="#_3、对敏感词-广告词-特殊字符进行过滤" aria-hidden="true">#</a> <strong>3、对敏感词/广告词/特殊字符进行过滤</strong></h5>
<p>分析数据可知，大部分数据含有特殊字符（例如前面截图中用横线标识出的字符），需要对该类数据进行过滤；</p>
<h5 id="_4、数据审核" tabindex="-1"><a class="header-anchor" href="#_4、数据审核" aria-hidden="true">#</a> <strong>4、数据审核</strong></h5>
<p>此处可把数据提交到公司公共的审核平台给机器或者人工审核；</p>
<p>【根据业务需要设置，毕竟审核平台可能会拦截了大部分真实的数据，或者拦截不到需要拦截的数据】</p>
<p>【一般考虑发送审核平台不能实时显示数据，会采取先出后审的方式，即问题提交成功后，即显示，等到审核不通过，则会被关闭数据 ==》这块业务可优化为：特别针对被刷的接口，提交数据后，调整方案为 先审后出，即只有审核通过才能显示】</p>
<h5 id="_5、添加访问ip记录" tabindex="-1"><a class="header-anchor" href="#_5、添加访问ip记录" aria-hidden="true">#</a> <strong>5、添加访问IP记录</strong></h5>
<p>如果有加IP记录，则可直接通过后台统计出批量刷数据的IP，可以在后台优先把IP禁掉了</p>
<h4 id="用php做服务器接口客户端用http协议post访问安全性一般怎么做" tabindex="-1"><a class="header-anchor" href="#用php做服务器接口客户端用http协议post访问安全性一般怎么做" aria-hidden="true">#</a> <strong>用PHP做服务器接口客户端用http协议POST访问安全性一般怎么做</strong></h4>
<p>我的问题是，如果不做安全相关处理的话，一些可能改变数据库的操作可能会遭遇垃圾数据提交什么的，毕竟要找到这些信息只要找个http包就可以了</p>
<p>系统无用户登录</p>
<p>新手问题（从来没做过服务端开发），如果可以，给几个主流方法的链接，多谢</p>
<p>直观总结方法二：</p>
<p>1.请求头里带用户username和password，到服务器端做验证，通过才继续下边业务逻辑。
有点：防止了服务器端api被随意调用。
缺点：每次都交互用户名和密码，交互量大，且密码明文传输不安全。</p>
<p>2.第一次请求，要求username和password，验证通过，种cookie到客户端，app保存cookie值。
每次请求带上cookie。
点评：和pc上浏览器认证的原理一样了。</p>
<p>以上两点，只有注册用户，才能有权访问业务逻辑，而app有大量的不需要注册数据api</p>
<p>3.制定一个token生成规则，按某些服务器端和客户端都拥有的共同属性生成一个随机串，客户端生成这个串，服务器收到请求也校验这个串。
缺点：随机串生成规则要保密。
比如:一个使用php框架的工程，框架每次交互都会有 module和action两个参数做路由，这样的话，我就可以用下边这个规则来生成token</p>
<p>app要请求用户列表，api是“index.php?module=user&amp;action=list”
app生成token = md5sum ('user'.'2012-11-28'.'#$@%!'.list) = 880fed4ca2aabd20ae9a5dd774711de2;
实际发起请求为 “index.php?module=user&amp;action=list&amp;token=880fed4ca2aabd20ae9a5dd774711de2”</p>
<p>服务器端接到请求用同样方法计算token，</p>
<p><strong>[php]</strong> <a href="http://blog.csdn.net/gebitan505/article/details/39178035/" target="_blank" rel="noopener noreferrer">view plain<ExternalLinkIcon/></a> <a href="http://blog.csdn.net/gebitan505/article/details/39178035/" target="_blank" rel="noopener noreferrer">copy<ExternalLinkIcon/></a></p>
<p>\1. &lt;span <strong>class</strong>=&quot;preprocessor&quot; style=&quot;color:rgb(153,153,153); font-weight:bold&quot;&gt;&lt;?php</span></p>
<p>\2. &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$module</span> = &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$_GET</span>[&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'module'</span>];</p>
<p>\3. &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$action</span> = &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$_GET</span>[&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'action'</span>];</p>
<p>\4. &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$token</span> = md5sum(&lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$module</span>.date(&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'Y-m-d'</span>,time()).&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'#$@%!*'</span>.&lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$action</span>);</p>
<p>\5. &lt;span <strong>class</strong>=&quot;keyword&quot; style=&quot;font-weight:bold&quot;&gt;<strong>if</strong></span>(&lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$token</span> != &lt;span <strong>class</strong>=&quot;variable&quot; style=&quot;color:teal&quot;&gt;$_GET</span>[&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'token'</span>]){</p>
<p>\6.   alarm(&lt;span <strong>class</strong>=&quot;string&quot; style=&quot;color:rgb(221,17,68)&quot;&gt;'access deny'</span>);</p>
<p>\7.   &lt;span <strong>class</strong>=&quot;keyword&quot; style=&quot;font-weight:bold&quot;&gt;exit</span>();</p>
<p>\8. }</p>
<p>\9. &lt;span <strong>class</strong>=&quot;preprocessor&quot; style=&quot;color:rgb(153,153,153); font-weight:bold&quot;&gt;?&gt;</span></p>
<p>先提这三个，都在项目中用过。</p>
<h3 id="_21-时间的面试题" tabindex="-1"><a class="header-anchor" href="#_21-时间的面试题" aria-hidden="true">#</a> 21.时间的面试题</h3>
<p>php获取当月天数及当月第一天及最后一天、上月第一天及最后一天实现方法
作者：baiheng   更新时间：2014-5-5 7:41:43   阅读：25076
在做查询过程中,例如要实现查上个月从第一天到最后一天的佣金(提成),那我们在程序实现过程中就要让程序在上个月的范围内查询,第一天是比较好办,但最后一天就不定,要去写段函数进行月份及年份判断来得出上个月共有多少天.那就比麻烦,还有获取当前月份,当前年份等常规日期获取函数,以下代码都是经过本公司工程师测试后的正确代码,可以放心使用.
1.获取上个月第一天及最后一天.
echo date('Y-m-01', strtotime('-1 month'));
echo &quot;<br/>&quot;;
echo date('Y-m-t', strtotime('-1 month'));
echo &quot;<br/>&quot;;
2.获取当月第一天及最后一天.
$BeginDate=date('Y-m-01', strtotime(date(&quot;Y-m-d&quot;)));
echo $BeginDate;
echo &quot;<br/>&quot;;
echo date('Y-m-d', strtotime(&quot;$BeginDate +1 month -1 day&quot;));
echo &quot;<br/>&quot;;
3.获取当天年份、月份、日及天数.
echo &quot; 本月共有:&quot;.date(&quot;t&quot;).&quot;天&quot;;
echo &quot; 当前年份&quot;.date('Y');
echo &quot; 当前月份&quot;.date('m');
echo &quot; 当前几号&quot;.date('d');
echo &quot;<br/>&quot;;
4.使用函数及数组来获取当月第一天及最后一天,比较实用,出自网友.
function getthemonth($date)
{
$firstday = date('Y-m-01', strtotime($date));
$lastday = date('Y-m-d', strtotime(&quot;$firstday +1 month -1 day&quot;));
return array($firstday,$lastday);
}
$today = date(&quot;Y-m-d&quot;);
$day=getthemonth($today);
echo &quot;当月的第一天: &quot;.$day[0].&quot; 当月的最后一天: &quot;.$day[1];
echo &quot;<br/>&quot;;</p>
<h3 id="_22-10条编程习惯助你找工作" tabindex="-1"><a class="header-anchor" href="#_22-10条编程习惯助你找工作" aria-hidden="true">#</a> 22.10条编程习惯助你找工作</h3>
<p>10条PHP编程习惯助你找工作
PHP</p>
<p>1、使用单引号括起来的字符串</p>
<p>当使用双引号来括字符串时，PHP解释器会对其进行变量替换、转义等操作，如 “\n”。如果只想输出一个基本的字符串，用单引号会节省一些资源。当然，如果需要进行变量替换的，那就必须用双引号了。</p>
<p>2、字符串的输出</p>
<p>以下哪一条语句的运行速度最快？</p>
<p>print “Hi my name is $a. I am $b”$$
echo “Hi my name is $a. I am $b”$$
echo “Hi my name is “.$a.”. I am “.$b;
echo “Hi my name is “,$a,”. I am “,$b;
echo ‘Hi my name is ‘,$a,’. I am ‘,$b;</p>
<p>最后一条的运行速度是最快的。 print比echo要慢，在字符串中进行变量替换时会慢，而连接字符串要比用逗号连接来得慢，最后一句则是第一个习惯的体现。所以，不在字符串中进行变 量替换不仅会加快程序运行速度，也会让你的代码在任何语法高亮显示的编辑器中显得更为易懂（变量会被高亮显示出来）。很少人知道echo的参数可以用逗号 连接，且速度会比字符串连接要来得快。最后再用上第一个习惯，那这条语句就非常好了。</p>
<p>3、在数组索引中使用单引号</p>
<p>正 如你在上面的测试题中所看到的，$x[sales]从严格意义上来说是错误的，索引应该被括起来，即$x['sales']。这是因为PHP会将 没有括起来的索引辨认为“裸”字符串，并把它解释为一个常量。当找不到该常量的定义时，才将其解释为一个字符串，所以这条语句才是可运行的。把索引括起来 可以省去这部分工作，如果将来正好要用这一字符串定义常量时也就不会有错误了。</p>
<p>4、不使用开始标志的缩写形式</p>
<p>你正在使用 这样的符号吗？“&lt;?”是非常糟糕的符号，它会引起与XML解释器的冲突。而且一旦你发布了这些代码，那么使用者就必须修改php.ini文件来打 开对此符号的支持。所以实在没有理由去使用这种形式。用“&lt;?php“吧。</p>
<p>5、尽量不要使用正则表达式</p>
<p>在进行 常规的字符串操作时，尽可能不要去使用正则表达式（preg和ereg系列函数）。str_replace函数要比preg_replace快得多，甚至 strtr函数也要比str_replace来得快。省去这些不必要的麻烦吧，你的老板会感谢你的。</p>
<p>6、不要在循环声明中使用函数</p>
<p>这个问题不单单出现在PHP中，你可以在其他语言的代码中经常看到：</p>
<p>差：for($i=0;$i&lt; count($array);$i++){…}</p>
<p>好：$count=count($array);for($i=0;$i&amp; lt;$count;$i++){…}</p>
<p>如果在循环声明中使用了 count函数，那每次循环都会调用一次。如果循环次数很多，会浪费非常多的时间。</p>
<p>7、不要使用 register_globals和magic quotes</p>
<p>老版本的PHP在安装时会默认打开这两个功能，这会引起安全漏洞、编程错误及其他的问题，如只有用户输入了数据时才会创建变量等。如今这两个功 能都被舍弃了，每个程序员都应该避免使用。</p>
<p>8、一定要对变量进行初始化（这 里的“初始化”指的是“声明”）</p>
<p>当需要没有初始化的变量，PHP解释器会自动创建一个变量，但依靠这个特性来编程并不是一 个好主意。这会造成程序的粗糙，或者使代码变得另人迷惑，因为你需要探寻这个变量是从哪里开始被创建的。另外，对一个没有初始化的变量进行递增操作要比初 始化过的来得慢。所以对变量进行初始化会是个不错的主意。</p>
<p>9、对代码进行注释</p>
<p>这个问题已经提过很多次了，但再多次也 不够。我知道有些地方是不聘用不对代码进行注释的程序员的。我在前一次工作面试后和副总、面试官一起浏览我写的代码，当他们对我所做的代码注释印象深刻， 还了解了一下我的这一习惯。一天之后，我得到了这个工作。</p>
<p>我知道有些自称为PHP大师的人声称自己的代码写得很好，不需要添加什么注 释。在我看来，这些人都是垃圾。学一写注释的规范和技巧，熟悉一下phpDocumentor或Doxygen之类的注释辅助软件，都是值得的。</p>
<p>10、 遵循一个编程规范</p>
<p>关于这一点，是你需要在面试中询问你潜在的老板的，问问他们正在使用什么编程规范。PEAR？Zend？内部规范？ 要提及你正在使用的编程规范，不管是你自己创建的，还是目前普遍流行的一种。对于PHP这种松松垮垮的语言来说，如果没有一个好的编程规范，那么那些代码 就会看起来想一堆垃圾。发臭的，令人作呕的垃圾。一些基本的规范包括空格规范、打括号匹配、命名风格等。这对任何一个追求高质量的代码的人来说都是必须 的。</p>
<p>有人说：“我讨厌你的4个空格的缩进。”我要说，什么？用4个空格来缩进？这比用制表符过占用3个字符的空间。更重要的是，只要 是使用比记事本高级的编辑器，你可以自定义制表符的缩进值。所以每个程序员都可以以其最习惯的方式来看代码。可以时设置为4，也可以设置为0（如果你是个 受虐狂）。反正我不在乎，但你就是不能用空格来缩进！</p>
<h3 id="_23-php综合" tabindex="-1"><a class="header-anchor" href="#_23-php综合" aria-hidden="true">#</a> 23.php综合</h3>
<ol>
<li>
<p>变量如何定义？</p>
</li>
<li>
<p>如何检查变量是否定义？</p>
<p>isset()</p>
</li>
<li>
<p>如何删除一个变量？</p>
<p>unset()</p>
</li>
<li>
<p>判断一个变量是否为空的函数？</p>
<p>empty()</p>
</li>
<li>
<p>什么是可变变量？
获取一个普通变量的值作为这个可变变量的变量名。</p>
</li>
<li>
<p>php中变量有哪些基本数据类型？</p>
<p>php支持8种原始数据类型。
包括：
四种标量类型（布尔型boolean，整型integer，浮点型float/double , 字符串string）
两种复合类型(数组array ， 对象object)
两种特殊类型（资源resource，NULL）</p>
</li>
<li>
<p>其它类型转换为boolean类型时，哪些被认为是false？</p>
<p>布尔值false，整型值0， 浮点型值0.0， 空白字符串， 字符串'0', 空数组，空对象， 特殊数据类型NULL, 没有设定的变量。</p>
</li>
<li>
<p>标量数据和数组的最大区别是什么？</p>
<p>一个标量只能存放一个数据，而数组可以存放多个数据。</p>
</li>
<li>
<p>常量如何定义? 如何检测一个常量是否被定义？</p>
<p>define() , defined()</p>
</li>
<li>
<p>常量的值只能是哪些数据类型？</p>
<p>常量的值只能是标量类型的数据。</p>
</li>
<li>
<p>常量分为系统内置常量和自定义常量。请说出最常见的几个系统内置常量？</p>
<p><strong>FILE</strong> , <strong>LINE</strong> , PHP_OS , PHP_VERSION</p>
</li>
<li>
<p>如果定义了两个相同的常量，前者和后者哪个起作用？</p>
<p>前者起作用，因为常量一旦定义就不能被重新定义或者取消定义。</p>
</li>
<li>
<p>常量和变量有哪些区别？</p>
<p>1）常量前没有$符号；
2）常量只能通过define()定义，而不能通过赋值语句定义；
3）常量可以在任何地方定义和访问，而变量定义的访问有固定的规则；
4）常量一旦定义就不能被重新定义或者取消定义，而变量而通过赋值方式重新定义；
5）常量的值只能是标量数据，而变量的数据库类型有8中原始数据类型。</p>
</li>
<li>
<p>PHP中常用的几个预定义的全局数组变量是哪些？</p>
<p>有9大预定义的内置数组变量：
$_POST, $_GET, $_REQUEST, $_SESSION, $_COOKIE, $_FILES，$_SERVER, $_ENV, $GLOBALS</p>
</li>
<li>
<p>在实际开发中，常量最常用于哪些地方？</p>
<p>1）连接数据库的信息定义成常量，如数据库服务器的用户名、密码、数据库名、主机名；
2）将站点的部分路径定义成常量，如web绝对路径，smarty的安装路径，model、view或者controller的文件夹路径；
3）网站的公共信息，如网站名称，网站关键词等信息。</p>
</li>
<li>
<p>函数的优越性有哪些？</p>
</li>
<li>
<p>函数名起名有哪些规范？函数名区分大小写吗？</p>
<p>1）函数名以字母或者下划线开头；
2）函数名不区分大小写；
3）函数名不可以使用已经声明过的或者系统自建的函数名称。</p>
</li>
<li>
<p>什么是变量的能见度？
就是变量在程序中的可作用范围。根据变量的能见度，变量分为局部变量和全局变量。</p>
</li>
<li>
<p>什么是局部变量和全局变量？函数内是否可以直接调用全局变量？</p>
<p>局部变量是函数内部定义的变量，其作用域是所在的函数。如果函数外还有一个跟局部变量名字一样的变量，
程序会认为它们两个是完全不同的两个变量。当退出函数的时候，其中的局部变量就同时被清除。</p>
<p>全局变量是定义在所有函数以外的变量，其作用域是整个php文件，但是在用户自定义的函数内部是无法使用的。
如果一定要在用户自定义的函数内部使用全局变量，那么就需要使用global关键字声明。
也就是说如果在函数内的变量前加上golbal来修饰，那么函数内部就可以访问到这个全局变量，
不仅可以利用这个全局变量进行运算而且可以对这个全局变量进行重新赋值。</p>
</li>
<li>
<p>global关键词如何使用？预定义的全局变量数组$GLOBALS如何使用？</p>
</li>
<li>
<p>什么是静态变量？</p>
</li>
<li>
<p>php中函数传递参数的方式有哪些？两者有什么区别？</p>
<p>按值传递和按地址传递（或按引用传递）</p>
</li>
<li>
<p>什么是递归函数？如何进行递归调用？</p>
<p>递归函数其实就是调用自身的函数，但是必须满足以下两个条件：
1）在每一次调用自身时，必须是更接近于最终结果；
2）必须有一个确定的递归终止条件，不会造成死循环。
举例说明：
在实际工作中往往会在遍历文件夹的时候使用。
如果有个例子是希望获取到目录windows下所有的文件，那么先遍历windows目录，如果发现其中还有文件夹，那么就会调用自身，继续往下寻找，依次类推，
直到遍历到再也没有文件夹为止，这也就是意味着遍历出来了所有的文件。</p>
</li>
<li>
<p>include()和require()函数的用法和区别是什么？</p>
</li>
<li>
<p>说出前置++和后置++的区别？</p>
</li>
<li>
<p>什么是三目（或三元）运算符？
表达式1?表达式2:表达式3
27.switch语句使用的注意事项有哪些？</p>
</li>
</ol>
<p>28.break和continue使用过程中有哪些区别？
break可以终止循环。
continue没有break强大，只能终止本次循环而进入到下一次循环中。</p>
<ol start="29">
<li>
<p>数组根据索引分为哪两种，如何区分？</p>
<p>数字索引数组和关联数组。</p>
</li>
<li>
<p>数组的赋值方式有哪两种？</p>
<p>数组的声明方式主要有两种。
1.通过array()函数声明数组；
可以通过key=&gt;value的方式分别定义索引和值，也可以不定义数组的索引下标，只给出数组的元素值。
2.直接为数组元素赋值,不需要调用array()函数。例如：
$arr[0] = 1;
$arr[1] = 2;</p>
</li>
</ol>
<p>31.数组如何遍历？
foreach()</p>
<ol start="32">
<li>
<p>foreach数组的时候指针是如何指向的？list()/each()/while()循环数组的时候指针如何指向的呢？</p>
<p>当foreach开始执行的时候，数组内部的指针会自动指向第一个单元。因为foreach所操作的是指定数组的拷贝，而不是该数组本身。
而each()一个数组后，数组指针将停留在数组中的下一个单元或者碰到数组结尾时停留在最后一个单元。如果要再次使用each()遍历数组，必须要使用reset().
reset()将数组的内部指针倒回到第一个单元并返回第一个数组单元的值。</p>
</li>
<li>
<p>如何计算数组长度（或者说计算数组中所有元素的个数）？字符串怎么取长度？</p>
<p>count() -- 计算数组中的元素个数。
可以使用count(数组名)或者count(数组名,1),如果有第二个参数，并且是数字1，则表示递归统计数组元素的个数。
如果第二个参数是数字0，则等同于只有一个参数的count()函数。
sizeof() -- count() 的别名
字符串：strlen()、mb_strlen();</p>
</li>
<li>
<p>数组排序的常用函数？数组合并的常用函数？
sort(), array_merge();+array_combine();</p>
</li>
<li>
<p>数组合并函数array_merge()和数组加法运算的区别是什么？</p>
</li>
<li>
<p>字符串定义的时候单引号和双引号有什么区别？</p>
</li>
<li>
<p>echo()和print()的区别是什么？</p>
</li>
<li>
<p>按照分类说说都有哪些字符串处理函数？这些函数的作用是什么？</p>
</li>
<li>
<p>正则表达式是什么？php中有哪些常用的跟正则相关的函数？</p>
<p>正则表达式是用于描述字符排列模式的一种语法规则。正则表达式也叫做模式表达式。
网站开发中正则表达式最常用于表单提交信息前的客户端验证。
比如验证用户名是否输入正确，密码输入是否符合要求，email、手机号码等信息的输入是否合法。
在php中正则表达式主要用于字符串的分割、匹配、查找和替换操作。</p>
<p>preg系列函数可以处理。具体有以下几个：</p>
<p>string preg_quote ( string str [, string delimiter] )
转义正则表达式字符 正则表达式的特殊字符包括：. \ + * ? [ ^ ] $ ( ) { } = ! &lt; &gt; | :。
preg_replace -- 执行正则表达式的搜索和替换
mixed preg_replace ( mixed pattern, mixed replacement, mixed subject [, int limit] )
preg_replace_callback -- 用回调函数执行正则表达式的搜索和替换
mixed preg_replace_callback ( mixed pattern, callback callback, mixed subject [, int limit] )
preg_split -- 用正则表达式分割字符串
array preg_split ( string pattern, string subject [, int limit [, int flags]] )</p>
</li>
<li>
<p>获取当前时间戳的函数主要有哪些？</p>
</li>
<li>
<p>header()函数主要的功能有哪些？使用过程中注意什么？</p>
</li>
<li>
<p>empty()函数哪些情况下返回true？</p>
<p>布尔值false，
整型值0，
浮点型值0.0，
空白字符串，
字符串'0',
array()空数组，
特殊数据类型NULL,
没有任何属性的对象，
没有赋值的变量。</p>
</li>
<li>
<p>连接数据库操作的步骤是什么？每一步的返回值是什么数据类型？</p>
</li>
</ol>
<p>$coon = mysql_connect('localhost', 'root' ,''); //返回资源类型
mysql_select_db('bbs', $coon);	// 布尔类型
mysq_query('set names utf8');  //布尔类型
$qry = mysql_query('select * from bbsinfo');  // 资源类型
mysql_fetch_row($qry)；	// 数组类型</p>
<ol start="43">
<li>
<p>说说mysql_affected_rows(),mysql_insert_id()的用法？</p>
</li>
<li>
<p>列举常用的文件处理函数，分别返回什么数据类型？
// 对文件操作
$file = &quot;a.txt&quot;;
$fp = fopen($file, 'a+');	// 资源类型
$fd = fread($fp, 10);		// 字符串
$fw = fwrite($fp, '国家宁'); // 整型(写入的长度)</p>
</li>
<li>
<p>文件上传需要注意哪些细节？怎么把文件保存到指定目录？怎么避免上传文件重名问题？</p>
<p>1.首现要在php.ini中开启文件上传；
2.在php.ini中有一个允许上传的最大值，默认是2MB。必要的时候可以更改；
3.上传表单一定要记住在form标签中写上enctype=&quot;multipart/form-data&quot;；
4.要注意上传文件的大小、文件类型是否符合要求，上传后存放的路径是否存在。</p>
<p>可以通过上传的文件名获取到文件后缀，然后使用时间戳+文件后缀的方式为文件重新命名，这样就避免了重名。
可以自己设置上传文件的保存目录，与文件名拼凑形成一个文件路径，使用move_uploaded_file()，就可以完成
将文件保存到指定目录。</p>
</li>
<li>
<p>$_FILES是几维数组？第一维和第二维的索引下标分别是什么？</p>
<p>二维数组。第一维是上传控件的name，二维下标分别为name/type/tmp_name/size/error.</p>
</li>
<li>
<p>什么是ajax？ajax的原理是什么？ajax的核心技术是什么？ajax的优缺点是什么？</p>
<p>ajax是asynchronous javascript and xml的缩写，是javascript、xml、css、DOM等多个技术的组合。</p>
<p>Ajax的工作原理是一个页面的指定位置可以加载另一个页面所有的输出内容，这样就实现了一个静态页面也能获取到
数据库中的返回数据信息了。所以ajax技术实现了一个静态网页在不刷新整个页面的情况下与服务器通信，
减少了用户等待时间，同时也从而降低了网络流量，增强了客户体验的友好程度。</p>
<p>Ajax的优点是：</p>
<ol>
<li>减轻了服务器端负担，将一部分以前由服务器负担的工作转移到客户端执行，利用客户端闲置的资源进行处理；</li>
<li>在只局部刷新的情况下更新页面，增加了页面反应速度，使用户体验更友好。
Ajax的缺点是不利于seo推广优化，因为搜索引擎无法直接访问到ajax请求的内容。
ajax的核心技术是XMLHttpRequest，它是javascript中的一个对象。</li>
</ol>
</li>
<li>
<p>jquery是什么？jquery简化ajax后的方法有哪些？</p>
</li>
<li>
<p>什么是会话控制？</p>
</li>
<li>
<p>使用cookie的注意事项有哪些？
1） setcookie()之前不可以有任何页面输出，就是空格，空白行也不可以；
2） setcookie()后，在当前页面调用$_COOKIE['cookiename']不会有输出，必须刷新或到下一个页面才可以看到cookie值；
3） 不同的浏览器对cookie处理不同，客户端可以禁用cookie，浏览器也可以闲置cookie的数量，一个浏览器能创建的cookie数量最多300个，并且每个不可以超过4kb，
每个web站点能设置的cookie总数不能超过20个。
4） cookie是保存在客户端的，用户禁用了cookie，那么setcookie就不会起作用了。所以不可以过度依赖cookie。</p>
</li>
<li>
<p>使用session的时候，通过什么来表示当前用户，从而与其他用户进行区分？
sessionid，通过session_id()函数可以取得当前的session_id。</p>
</li>
<li>
<p>session和cookie的使用步骤分别是什么？什么是sesssion和cookie的生命周期？session和cookie的区别是什么？</p>
<p>cookie是保存在客户端机器的，对于未设置过期时间的cookie，cookie值会保存在机器的内存中，只要关闭浏览器则
cookie自动消失。如果设置了cookie的过期时间，那么浏览器会把cookie以文本文件的形式保存到硬盘中，
当再次打开浏览器时cookie值依然有效。</p>
<p>session是把用户需要存储的信息保存在服务器端。每个用户的session信息就像是键值对一样存储在服务器端，
其中的键就是sessionid，而值就是用户需要存储信息。服务器就是通过sessionid来区分存储的session信息是
哪个用户的。</p>
<p>两者最大的区别就是session存储在服务器端，而cookie是在客户端。session安全性更高，而cookie安全性弱。</p>
<p>session在web开发中具有非常重要的份量。它可以将用户正确登录后的信息记录到服务器的内存中，当用户以此身份
访问网站的管理后台时，无需再次登录即可得到身份确认。而没有正确登录的用户则不分配session空间，即便输入了
管理后台的访问地址也不能看到页面内容。通过session确定了用户对页面的操作权限。</p>
<p>使用session的步骤：</p>
<ol>
<li>
<p>启动session：
使用session_start()函数来启动。</p>
</li>
<li>
<p>注册会话：</p>
<p>直接给$_SESSION数组添加元素即可。</p>
</li>
<li>
<p>使用会话：
判断session是否为空或者是否已经注册，如果已经存在则像普通数组使用即可。</p>
</li>
<li>
<p>删除会话：
1.可以使用unset删除单个session；
2.使用$_SESSION=array()的方式，一次注销所有的会话变量；
3.使用session_destroy()函数来彻底销毁session。</p>
</li>
</ol>
<p>cookie怎么使用？</p>
<ol>
<li>记录用户访问的部分信息</li>
<li>在页面间传递变量</li>
<li>将所查看的internet页存储在cookies临时文件夹中，可以提高以后的浏览速度。</li>
</ol>
<p>创建cookie：
setcookie(string cookiename , string value , int expire);
读取cookie：
通过超级全局数组$_COOKIE来读取浏览器端的cookie的值。
删除cookie：有两种方法
1.手工删除方法：
右击浏览器属性，可以看到删除cookies，执行操作即可将所有cookie文件删除。
2.setcookie()方法：
跟设置cookie的方法一样，不过此时讲cookie的值设置为空，有效时间为0或小于当前时间戳。</p>
</li>
<li>
<p>在实际开发中，session在哪些场合使用？</p>
<p>session用来存储用户登录信息和用在跨页面传值。
1）常用在用户登录成功后，将用户登录信息赋值给session；
2）用在验证码图片生成，当随机码生成后赋值给session。</p>
</li>
<li>
<p>注销session会话的形式有几种？</p>
</li>
<li>
<p>什么是OOP?什么是类和对象？什么是类属性？OOP的三大特性是什么？</p>
<p>OOP(object oriented programming)，即面向对象编程，其中两个最重要的概念就是类和对象。
世间万物都具有自身的属性和方法，通过这些属性和方法可以区分出不同的物质。
属性和方法的集合就形成了类，类是面向对象编程的核心和基础，
通过类就将零散的用于实现某个功能的代码有效地管理起来了。</p>
<p>类只是具备了某些功能和属性的抽象模型，而实际应用中需要一个一个实体，也就是需要对类进行实例化，
类在实例化之后就是对象。</p>
<p>OOP具有三大特点：</p>
<ol>
<li>封装性：
也称为信息隐藏，就是将一个类的使用和实现分开，只保留部分接口和方法与外部联系，或者说只公开了一些供开发人员使用的方法。
于是开发人员只需要关注这个类如何使用，而不用去关心其具体的实现过程，这样就能实现MVC分工合作，也能有效避免程序间相互依赖，</li>
</ol>
<p>实现代码模块间松藕合。</p>
<ol start="2">
<li>
<p>继承性：
就是子类自动继承其父级类中的属性和方法，并可以可以添加新的属性和方法或者对部分属性和方法进行重写。继承增加了代码的可重用性。
php只支持单继承，也就是说一个子类只能有一个父类。</p>
</li>
<li>
<p>多态性：
子类继承了来自父级类中的属性和方法，并对其中部分方法进行重写。
于是多个子类中虽然都具有同一个方法，但是这些子类实例化的对象调用这些相同的方法后却可以获得完全不同的结果，这种技术就是多态性。
多态性增强了软件的灵活性。</p>
</li>
</ol>
</li>
<li>
<p>常用的属性的访问修饰符有哪些？分别代表什么含义？</p>
<p>private，protected，public。如果不使用这三个关键词，也可以使用var关键字。但是var不可以跟权限修饰词一起使用。</p>
</li>
<li>
<p>$this和self、parent这三个关键词分别代表什么？在哪些场合下使用？</p>
</li>
</ol>
<p>48.类中如何定义常量、如何类中调用常量、如何在类外调用常量。
类中的常量也就是成员常量，常量就是不会改变的量，是一个恒值。
定义常量使用关键字const.
例如：const PI = 3.1415326;
无论是类内还是类外，常量的访问和变量是不一样的，常量不需要实例化对象，
访问常量的格式都是类名加作用域操作符号（双冒号）来调用。
即：类名 :: 类常量名;</p>
<ol start="48">
<li>
<p>作用域操作符::如何使用？</p>
</li>
<li>
<p>什么是魔术方法？常用的魔术方法有哪几个？</p>
</li>
<li>
<p>什么是构造方法和析构方法？</p>
<p>构造方法就是在实例化一个对象的同时自动执行的成员方法，作用就是初始化对象。
php5之前，一个跟类名完全相同的方法是构造方法，php5之后魔术方法__construct()就是构造方法。
如果类中没有定义构造方法，那么php会自动生成一个，这个自动生成的构造方法没有任何参数，
没有任何操作。
构造方法的格式如下：
function __construct(){}
或者：function 类名(){}
构造方法可以没有参数，也可以有多个参数。</p>
<p>析构方法的作用和构造方法正好相反，是对象被销毁时被自动调用的，作用是释放内存。
析构方法的定义方法为：__destruct();
因为php具有垃圾回收机制，能自动清除不再使用的对象，释放内存，一般情况下可以不手动创建析构方法。</p>
</li>
<li>
<p>__autoload()方法的工作原理是什么？</p>
<p>使用这个魔术函数的基本条件是类文件的文件名要和类的名字保持一致。
当程序执行到实例化某个类的时候，如果在实例化前没有引入这个类文件，那么就自动执行__autoload()函数。
这个函数会根据实例化的类的名称来查找这个类文件的路径，当判断这个类文件路径下确实存在这个类文件后
就执行include或者require来载入该类，然后程序继续执行，如果这个路径下不存在该文件时就提示错误。
使用自动载入的魔术函数可以不必要写很多个include或者require函数。</p>
</li>
<li>
<p>什么是抽象类和接口？抽象类和接口有什么不同和相似的地方？
抽象类是一种不能被实例化的类，只能作为其他类的父类来使用。</p>
<p>抽象类是通过关键字 abstract 来声明的。
抽象类与普通类相似，都包含成员变量和成员方法，两者的区别在于，抽象类中至少要包含一个抽象方法，
抽象方法没有方法体，该方法天生就是要被子类重写的。
抽象方法的格式为：abstract function abstractMethod();</p>
<p>因为php中只支持单继承，如果想实现多重继承，就要使用接口。也就是说子类可以实现多个接口。
接口类是通过interface关键字来声明的，接口类中的成员常量和方法都是public的，方法可以不写关键字public，
接口中的方法也是没有方法体。接口中的方法也天生就是要被子类实现的。</p>
<p>抽象类和接口实现的功能十分相似，最大的不同是接口能实现多继承。在应用中选择抽象类还是接口要看具体实现。
子类继承抽象类使用extends，子类实现接口使用implements。</p>
</li>
<li>
<p>__call的参数有几个，类型是什么，意义是什么？</p>
<p>魔术方法__call()的作用是当程序调用一个不存在或不可见的成员方法时，php会先调用__call()方法，
将那个不存在的方法的方法名和参数都存储下来。
__call()包含两个参数，第一个参数是那个不存在的方法的方法名，是个字符串类型；
第二个参数是那个不存在的方法的所有参数，是个数组类型。</p>
<p>本人认为__call()方法的意义更多在于调试，可以定位到错误。同时可以捕捉异常，如果某个方法不存在，
则执行其它可替代方法。</p>
</li>
<li>
<p>字符串怎么转成整数，有几种方法？怎么实现？</p>
<p>强制类型转换: (整型)字符串变量名;
直接转换：settype(字符串变量,整型);
intval(字符串变量);</p>
</li>
</ol>
<p>55.页面字符出现乱码，怎么解决?
1.首先考虑当前文件是不是设置了字符集。查看是不是meta标签中写了charset，如果是php页面还可以看看是不是
在header()函数中指定了charset；
2.如果设置了字符集（也就是charset），那么判断当前文件保存的编码格式是否跟页面设置的字符集保持一致，
两者必须保持统一；
3.如果涉及到从数据库提取数据，那么判断数据库查询时的字符集是否跟当前页面设置的字符集一致，两者必须统一。</p>
<p>56.说出数组涉及到的常用函数。
array --  声明一个数组
count -- 计算数组中的单元数目或对象中的属性个数
foreach -- 遍历数组
list -- 遍历数组
explode -- 将字符串转成数组
implode -- 将数组转成一个新字符串
array_merge -- 合并一个或多个数组
is_array -- 检查是否是数组</p>
<pre><code>print_r -- 输出数组
sort -- 数组排序

array_keys -- 返回数组中所有的键名
array_values -- 返回数组中所有的值
key -- 从关联数组中取得键名
</code></pre>
<ol start="57">
<li>
<p>smarty模板技术的用途是什么？</p>
</li>
<li>
<p>smarty配置主要有哪几项？</p>
</li>
<li>
<p>smarty在使用过程中需要注意哪些细节？</p>
<p>Smarty是基于MVC概念的一种模板引擎，它将一个页面程序分成了两部分来实现：即视图层和控制层，
也就是说smarty技术将用户UI与php代码分离开。
这样程序员和美工各司其职，互不干扰。</p>
<p>smarty运用过程中要注意以下几个问题：
1.正确配置smarty。主要要配置smarty模板文件的路径；
2.php页面中使用assign赋值 和 display显示页面；
3.smarty模板文件中不允许出现php代码段，所有的注释，变量，函数都要包含在定界符内。</p>
</li>
<li>
<p>什么是MVC？MVC的目的是什么？</p>
</li>
</ol>
<p>PHP理论题：</p>
<p>​	<strong>1.类中如何定义常量、如何类中调用常量、如何在类外调用常量。</strong></p>
<p>​		类中的常量也就是成员常量，常量就是不会改变的量，是一个恒值。</p>
<p>​		定义常量使用关键字const.</p>
<p>​		例如：const PI = 3.1415326;</p>
<p>​		无论是类内还是类外，常量的访问和变量是不一样的，常量不需要实例化对象，</p>
<p>​		访问常量的格式都是类名加作用域操作符号（双冒号）来调用。</p>
<p>​		即：类名 :: 类常量名;</p>
<p>​	<strong>2.接口和抽象类的区别是什么？</strong></p>
<p>​		抽象类是一种不能被实例化的类，只能作为其他类的父类来使用。</p>
<p>​		抽象类是通过关键字 abstract 来声明的。</p>
<p>​		抽象类与普通类相似，都包含成员变量和成员方法，两者的区别在于，抽象类中至少要包含一个抽象方法，</p>
<p>​		抽象方法没有方法体，该方法天生就是要被子类重写的。</p>
<p>​		抽象方法的格式为：abstract function abstractMethod();</p>
<p>​</p>
<p>​		因为php中只支持单继承，如果想实现多重继承，就要使用接口。也就是说子类可以实现多个接口。</p>
<p>​		接口是通过interface关键字来声明的，接口中的成员常量和方法都是public的，方法可以不写关键字public，</p>
<p>​		接口中的方法也是没有方法体。接口中的方法也天生就是要被子类实现的。</p>
<p>​		抽象类和接口实现的功能十分相似，最大的不同是接口能实现多继承。在应用中选择抽象类还是接口要看具体实现。</p>
<p>​		子类继承抽象类使用extends，子类实现接口使用implements。</p>
<p>​	3.__call的参数有几个，类型是什么，意义是什么？</p>
<p>​		魔术方法__call()的作用是当程序调用一个不存在或不可见的成员方法时，php会先调用__call()方法，</p>
<p>​		将那个不存在的方法的方法名和参数都存储下来。</p>
<p>​		__call()包含两个参数，第一个参数是那个不存在的方法的方法名，是个字符串类型；</p>
<p>​		第二个参数是那个不存在的方法的所有参数，是个数组类型。</p>
<p>​		本人认为__call()方法的意义更多在于调试，可以定位到错误。同时可以捕捉异常，如果某个方法不存在，</p>
<p>​		则执行其它可替代方法。</p>
<p>​	4.构造方法、析构方法是如何定义的？</p>
<p>​		构造方法就是在实例化一个对象的同时自动执行的成员方法，作用就是初始化对象。</p>
<p>​		php5之前，一个跟类名完全相同的方法是构造方法，php5之后魔术方法__construct()就是构造方法。</p>
<p>​		如果类中没有定义构造方法，那么php会自动生成一个，这个自动生成的构造方法没有任何参数，</p>
<p>​		没有任何操作。</p>
<p>​		构造方法的格式如下：</p>
<p>​		function __construct(){}</p>
<p>​		或者：function 类名(){}</p>
<p>​		构造方法可以没有参数，也可以有多个参数。</p>
<p>​		析构方法的作用和构造方法正好相反，是对象被销毁时被自动调用的，作用是释放内存。</p>
<p>​		析构方法的定义方法为：__destruct();</p>
<p>​		因为php具有垃圾回收机制，能自动清除不再使用的对象，释放内存，一般情况下可以不手动创建析构方法。</p>
<p>​	5.===是什么运算？</p>
<p>​		是php比较运算符中的一种，表示恒等，说明两个变量不只是数值上相等，而且两者的数据类型也相等。</p>
<p>​		如果$a !== $b,那么说明两个变量要么数值不等，要么就是数据类型不相同。</p>
<p>​	6.__autoload()函数是如何运作的？</p>
<p>​		使用这个魔术函数的基本条件是类文件的文件名要和类的名字保持一致。</p>
<p>​		当程序执行到实例化某个类的时候，如果在实例化前没有引入这个类文件，那么就自动执行__autoload()函数。</p>
<p>​		这个函数会根据实例化的类的名称来查找这个类文件的路径，当判断这个类文件路径下确实存在这个类文件后</p>
<p>​		就执行include或者require来载入该类，然后程序继续执行，如果这个路径下不存在该文件时就提示错误。</p>
<p>​		使用自动载入的魔术函数可以不必要写很多个include或者require函数。</p>
<p>​	7.网页静态化要用到哪类函数？</p>
<p>​		使用ob系列函数。这个问题需要到php高级才学。</p>
<p>​	8.PHP有几组函数来处理正则表达式？</p>
<p>​		preg系列函数可以处理。具体有以下几个：</p>
<p>​</p>
<p>​		string preg_quote ( string str [, string delimiter] )</p>
<p>​			转义正则表达式字符 正则表达式的特殊字符包括：. \ + * ? [ ^ ] $ ( ) { } = ! &lt; &gt; | :。</p>
<p>​		preg_replace -- 执行正则表达式的搜索和替换</p>
<p>​		mixed preg_replace ( mixed pattern, mixed replacement, mixed subject [, int limit] )</p>
<p>​		preg_replace_callback -- 用回调函数执行正则表达式的搜索和替换</p>
<p>​		mixed preg_replace_callback ( mixed pattern, callback callback, mixed subject [, int limit] )</p>
<p>​		preg_split -- 用正则表达式分割字符串</p>
<p>​		array preg_split ( string pattern, string subject [, int limit [, int flags]] )</p>
<p>​	9.试举正则表达式对字符串最常用的3种操作？</p>
<p>​		1. 利用正则表达式，实现对一个字符串的切割，切割后返回一个数组。如split()。</p>
<p>​		2. 利用正则可以实现对一个字符串中符合的内容批量替换。如果替换为空则达到了过滤的作用。如preg_replace()。</p>
<p>​		3. 利用正则判断一个字符串中是否含有符合的子字符串。如preg_match()。</p>
<p>​	10.字符串怎么转成整数，有几种方法？怎么实现？</p>
<p>​		强制类型转换: (整型)字符串变量名;</p>
<p>​		直接转换：settype(字符串变量,整型);</p>
<p>​		intval(字符串变量);</p>
<p>​	11.php怎么定义函数？</p>
<p>​		使用关键字function加函数名，参数和函数体来定义函数。格式为：</p>
<p>​		function 函数名(参数){函数体};</p>
<p>​	12.函数内怎么使用局部变量和全局变量？</p>
<p>​		局部变量是函数内部定义的变量，其作用域是所在的函数。如果函数外还有一个跟局部变量名字一样的变量，</p>
<p>​		程序会认为它们两个是完全不同的两个变量。当退出函数的时候，其中的局部变量就同时被清除。</p>
<p>​		全局变量是定义在所有函数以外的变量，其作用域是整个php文件，但是在用户自定义的函数内部是无法使用的。</p>
<p>​		如果一定要在用户自定义的函数内部使用全局变量，那么就需要使用global关键字声明。</p>
<p>​		也就是说如果在函数内的变量前加上golbal来修饰，那么函数内部就可以访问到这个全局变量，</p>
<p>​		不仅可以利用这个全局变量进行运算而且可以对这个全局变量进行重新赋值。</p>
<p>​	13.字符串和数组怎么取长度？</p>
<p>​		字符串：strlen();</p>
<p>​		count() -- 计算数组中的元素个数。</p>
<p>​		可以使用count(数组名)或者count(数组名,1),如果有第二个参数，并且是数字1，则表示递归统计数组元素的个数。</p>
<p>​		如果第二个参数是数字0，则等同于只有一个参数的count()函数。</p>
<p>​		sizeof() -- count() 的别名</p>
<p>​	14.页面字符出现乱码，怎么解决?</p>
<p>​		1.首先考虑当前文件是不是设置了字符集。查看是不是meta标签中写了charset，如果是php页面还可以看看是不是</p>
<p>​		在header()函数中指定了charset；</p>
<p>​		2.如果设置了字符集（也就是charset），那么判断当前文件保存的编码格式是否跟页面设置的字符集保持一致，</p>
<p>​		两者必须保持统一；</p>
<p>​		3.如果涉及到从数据库提取数据，那么判断数据库查询时的字符集是否跟当前页面设置的字符集一致，两者必须统一。</p>
<p>​	15.php访问数据库有哪几步？</p>
<p>​		1.连接数据库服务器：</p>
<p>​			mysql_connect('数据库服务器的主机名或ip','数据库服务器的用户名','数据库服务器的密码');</p>
<p>​		2.选择数据库：</p>
<p>​			mysql_select_db(数据库名);</p>
<p>​		3.设置从数据库提取数据的字符集：</p>
<p>​			mysql_query(&quot;set names utf8&quot;);</p>
<p>​		4.执行sql语句：</p>
<p>​			mysql_query(sql语句);</p>
<p>​		5.关闭结果集，释放资源：</p>
<p>​			mysql_free_result($result);</p>
<p>​		6.关闭与数据库服务器的连接：</p>
<p>​			mysql_close($link);</p>
<p>​	16.文件上传应该注意哪些细节？</p>
<p>​		1.首现要在php.ini中开启文件上传；</p>
<p>​		2.在php.ini中有一个允许上传的最大值，默认是2MB。必要的时候可以更改；</p>
<p>​		3.上传表单一定要记住在form标签中写上enctype=&quot;multipart/form-data&quot;；</p>
<p>​		4.要注意上传文件的大小、文件类型是否符合要求，上传后存放的路径是否存在。</p>
<p>​	17.怎么把文件保存到指定目录？怎么避免上传文件重名问题？</p>
<p>​		可以通过上传的文件名获取到文件后缀，然后使用时间戳+文件后缀的方式为文件重新命名，这样就避免了重名。</p>
<p>​		可以自己设置上传文件的保存目录，与文件名拼凑形成一个文件路径，使用move_uploaded_file()，就可以完成</p>
<p>​		将文件保存到指定目录。</p>
<p>​	18.session和cookie有什么区别？</p>
<p>​		cookie是保存在客户端机器的，对于未设置过期时间的cookie，cookie值会保存在机器的内存中，只要关闭浏览器则</p>
<p>​		cookie自动消失。如果设置了cookie的过期时间，那么浏览器会把cookie以文本文件的形式保存到硬盘中，</p>
<p>​		当再次打开浏览器时cookie值依然有效。</p>
<p>​</p>
<p>​		session是把用户需要存储的信息保存在服务器端。每个用户的session信息就像是键值对一样存储在服务器端，</p>
<p>​		其中的键就是sessionid，而值就是用户需要存储信息。服务器就是通过sessionid来区分存储的session信息是</p>
<p>​		哪个用户的。</p>
<p>​</p>
<p>​		两者最大的区别就是session存储在服务器端，而cookie是在客户端。session安全性更高，而cookie安全性弱。</p>
<p>​	19.session有什么用？怎么使用？</p>
<p>​		session在web开发中具有非常重要的份量。它可以将用户正确登录后的信息记录到服务器的内存中，当用户以此身份</p>
<p>​		访问网站的管理后台时，无需再次登录即可得到身份确认。而没有正确登录的用户则不分配session空间，即便输入了</p>
<p>​		管理后台的访问地址也不能看到页面内容。通过session确定了用户对页面的操作权限。</p>
<p>​</p>
<p>​		使用session的步骤：</p>
<p>​		1. 启动session：</p>
<p>​			使用session_start()函数来启动。</p>
<p>​		2. 注册会话：</p>
<p>​	  	直接给$_SESSION数组添加元素即可。</p>
<p>​		3. 使用会话：</p>
<p>​			判断session是否为空或者是否已经注册，如果已经存在则像普通数组使用即可。</p>
<p>​		4. 删除会话：</p>
<p>​			1.可以使用unset删除单个session；</p>
<p>​			2.使用$_SESSION=array()的方式，一次注销所有的会话变量；</p>
<p>3.使用session_destroy()函数来彻底销毁session。</p>
<p>​	20.cookie有什么用？怎么使用？</p>
<p>​		1. 记录用户访问的部分信息</p>
<p>​		2. 在页面间传递变量</p>
<p>​		3. 将所查看的internet页存储在cookies临时文件夹中，可以提高以后的浏览速度。</p>
<p>​		创建cookie：</p>
<p>​			setcookie(string cookiename , string value , int expire);</p>
<p>​		读取cookie：</p>
<p>​			通过超级全局数组$_COOKIE来读取浏览器端的cookie的值。</p>
<p>​		删除cookie：有两种方法</p>
<p>​			1.手工删除方法：</p>
<p>​				右击浏览器属性，可以看到删除cookies，执行操作即可将所有cookie文件删除。</p>
<p>​			2.setcookie()方法：</p>
<p>​				跟设置cookie的方法一样，不过此时讲cookie的值设置为空，有效时间为0或小于当前时间戳。</p>
<p>​	21.怎么定义常量？</p>
<p>​		define('变量名','值');</p>
<p>​		还可以使用constant()函数来定义一个常量。例如constant(常量名).</p>
<p>​	22.break和continue的区别？</p>
<p>​		break可以终止循环。</p>
<p>​		continue没有break强大，只能终止本次循环而进入到下一次循环中。</p>
<p>​	23.循环语句有哪几种？</p>
<p>​		while(){};</p>
<p>​		do{}whlie();</p>
<p>​		for(){};</p>
<p>​		foreach(){};</p>
<p>​</p>
<p>​	24.数组怎么声明？怎么赋值？</p>
<p>​		数组的声明方式主要有两种。</p>
<p>​		1.通过array()函数声明数组；</p>
<p>​			可以通过key=&gt;value的方式分别定义索引和值，也可以不定义数组的索引下标，只给出数组的元素值。</p>
<p>​		2.直接为数组元素赋值,不需要调用array()函数。例如：</p>
<p>​			$arr[0] = 1;</p>
<p>​			$arr[1] = 2;</p>
<p>​	25.说出数组涉及到的常用函数。</p>
<p>​		array --  声明一个数组</p>
<p>​		count -- 计算数组中的单元数目或对象中的属性个数</p>
<p>​		foreach -- 遍历数组</p>
<p>​		list -- 遍历数组</p>
<p>​		explode -- 将字符串转成数组</p>
<p>​		implode -- 将数组转成一个新字符串</p>
<p>​		array_merge -- 合并一个或多个数组</p>
<p>​		is_array -- 检查是否是数组</p>
<p>​		print_r -- 输出数组</p>
<p>​		sort -- 数组排序</p>
<p>​		array_keys -- 返回数组中所有的键名</p>
<p>​		array_values -- 返回数组中所有的值</p>
<p>​		key -- 从关联数组中取得键名</p>
<p>​	26.数组有哪几种类型？</p>
<p>​		数字索引数组</p>
<p>​		关联数组</p>
<p>​		根据数组构造还可以分一维数组、二维数组、多维数组。</p>
<p>​	27.foreach 用法。</p>
<p>​		foreach($数组名 as $key=&gt;$value){</p>
<p>​			循环体</p>
<p>​		};</p>
<p>​	28.说出有哪几种分支语句。</p>
<p>​		if(){};</p>
<p>​		if(){}else{};</p>
<p>​		if(){}elseif(){}else{};</p>
<p>​		swich(){case1 ,case2,……};</p>
<p>​	29.什么是全局变量，自定义函数中如何使用全局变量？</p>
<p>​		全局变量是定义在所有函数以外的变量，其作用域是整个php文件，但是在用户自定义的函数内部是无法使用的。</p>
<p>​		如果一定要在用户自定义的函数内部使用全局变量，那么就需要使用global关键字声明。</p>
<p>​		也就是说如果在函数内的变量前加上golbal来修饰，那么函数内部就可以访问到这个全局变量，</p>
<p>​		不仅可以利用这个全局变量进行运算而且可以对这个全局变量进行重新赋值。</p>
<p>​	30.字符串的常用函数？</p>
<p>​		trim();--去除空格</p>
<p>​		strlen();--字符串长度</p>
<p>​		substr();--截取字符串</p>
<p>​		str_replace();--替换字符串函数</p>
<p>​		substr_replace() -- 对指定字符串中的部分字符串进行替换</p>
<p>​		strstr();--检索字符串函数</p>
<p>​		explode();--分割字符串函数</p>
<p>​		strcasecmp();--比较字符串函数</p>
<p>​	31.PHP数据类型有哪些?</p>
<p>​		php支持8种原始数据类型。</p>
<p>​		包括：</p>
<p>​		四种标量类型（布尔型boolean，整型interger，浮点型float/double , 字符串string）</p>
<p>​		两种复合类型(数组array ， 对象object)</p>
<p>​		两种特殊类型（资源resource，NULL）</p>
<p>​	32.如何定义一个变量？</p>
<p>​		使用$和变量名表示，变量名区分大小写。变量名不可以以数字或者@等特殊字符开头。</p>
<p>​	33.怎么定义一个整数变量？</p>
<p>​		$变量名=整数值;</p>
<p>​	34.print与echo有什么区别？</p>
<p>​		echo可以一次输出多个值，中间用逗号隔开。而print一次只能输出一个值。</p>
<p>​	35.你是怎么理解正则表达式的？</p>
<p>​	正则表达式是用于描述字符排列模式的一种语法规则。正则表达式也叫做模式表达式。</p>
<p>​	网站开发中正则表达式最常用于表单提交信息前的客户端验证。</p>
<p>​	比如验证用户名是否输入正确，密码输入是否符合要求，email、手机号码等信息的输入是否合法。</p>
<p>​	在php中正则表达式主要用于字符串的分割、匹配、查找和替换操作。</p>
<p>​</p>
<p>​</p>
<p>​	36.你是如何认识ajax的？</p>
<p>​	ajax是asynchronous javascript and xml的缩写，是javascript、xml、css、DOM等多个技术的组合。</p>
<p>​	Ajax的工作原理是一个页面的指定位置可以加载另一个页面所有的输出内容，这样就实现了一个静态页面也能获取到</p>
<p>​	数据库中的返回数据信息了。所以ajax技术实现了一个静态网页在不刷新整个页面的情况下与服务器通信，</p>
<p>​	减少了用户等待时间，同时也从而降低了网络流量，增强了客户体验的友好程度。</p>
<p>​</p>
<p>​	Ajax的优点是：</p>
<p>​	1.  减轻了服务器端负担，将一部分以前由服务器负担的工作转移到客户端执行，利用客户端闲置的资源进行处理；</p>
<p>​	2.  在只局部刷新的情况下更新页面，增加了页面反应速度，使用户体验更友好。</p>
<p>​	Ajax的缺点是不利于seo推广优化，因为搜索引擎无法直接访问到ajax请求的内容。</p>
<p>​	ajax的核心技术是XMLHttpRequest，它是javascript中的一个对象。</p>
<p>​</p>
<p>​</p>
<p>​	37. 你如何理解smarty，smarty的运用过程中注意哪些细节？</p>
<p>​	Smarty是基于MVC概念的一种模板引擎，它将一个页面程序分成了两部分来实现：即视图层和控制层，</p>
<p>​	也就是说smarty技术将用户UI与php代码分离开。</p>
<p>​	这样程序员和美工各司其职，互不干扰。</p>
<p>​</p>
<p>​	smarty运用过程中要注意以下几个问题：</p>
<p>​	1.正确配置smarty。主要要配置smarty模板文件的路径；</p>
<p>​	2.php页面中使用assign赋值 和 display显示页面；</p>
<p>​	3.smarty模板文件中不允许出现php代码段，所有的注释，变量，函数都要包含在定界符内。</p>
<p>​</p>
<p>​	38. 如果理解oop？</p>
<p>​	OOP(object oriented programming)，即面向对象编程，其中两个最重要的概念就是类和对象。</p>
<p>​	世间万物都具有自身的属性和方法，通过这些属性和方法可以区分出不同的物质。</p>
<p>​	属性和方法的集合就形成了类，类是面向对象编程的核心和基础，</p>
<p>​	通过类就将零散的用于实现某个功能的代码有效地管理起来了。</p>
<p>​</p>
<p>​	类只是具备了某些功能和属性的抽象模型，而实际应用中需要一个一个实体，也就是需要对类进行实例化，</p>
<p>​	类在实例化之后就是对象。</p>
<p>​	OOP具有三大特点：</p>
<p>​	1. 封装性：</p>
<p>​	  也称为信息隐藏，就是将一个类的使用和实现分开，只保留部分接口和方法与外部联系，或者说只公开了一些供开发人员使用的方法。</p>
<p>​	  于是开发人员只需要关注这个类如何使用，而不用去关心其具体的实现过程，这样就能实现MVC分工合作，也能有效避免程序间相互依赖，</p>
<pre><code> 实现代码模块间松藕合。
</code></pre>
<p>​	2. 继承性：</p>
<p>​	  就是子类自动继承其父级类中的属性和方法，并可以添加新的属性和方法或者对部分属性和方法进行重写。继承增加了代码的可重用性。</p>
<p>​	  php只支持单继承，也就是说一个子类只能有一个父类。</p>
<p>​	3. 多态性：</p>
<p>​	  子类继承了来自父级类中的属性和方法，并对其中部分方法进行重写。</p>
<p>​	  于是多个子类中虽然都具有同一个方法，但是这些子类实例化的对象调用这些相同的方法后却可以获得完全不同的结果，这种技术就是多态性。</p>
<p>​	  多态性增强了软件的灵活性。</p>
<p>PHP机试题：</p>
<p>一. 写一个用户注册模块：</p>
<p>\1. 注册项目有：</p>
<p>用户名、密码、确认密码、性别、学历（研究生、大本、专科、高中）、爱好（网游、运动、文学、旅游）、个人介绍。</p>
<p>其中学历采用下拉菜单，爱好采用多选框。</p>
<p>\2. 具体要求：</p>
<p>A. 需要对所有项目做客户端javascript验证，其中用户名项必须使用ajax对用户名做异步验证；</p>
<p>B. 异步验证文件以及涉及到数据库的文件，需要采用oop编程方式；</p>
<p>C. 注册成功跳转到模拟会员后台页，该页采用smarty模版技术来加载；</p>
<p>D. 注册成功后要注意SESSION的使用。</p>
<h3 id="_1-什么叫吞吐率" tabindex="-1"><a class="header-anchor" href="#_1-什么叫吞吐率" aria-hidden="true">#</a> 1.什么叫吞吐率？</h3>
<p>即每秒处理请求数，也称吞吐率，注意这里的吞吐率不是指单位时间处理的数据量，而是请求数。影响服务器吞吐率的因素非常多，比如服务器的并发策略、I/O模型、I/O性能、CPU核数等，当然也包括应用程序本身的逻辑复杂度等。</p>
<h3 id="_2-浏览器本地计算时间都包括哪些" tabindex="-1"><a class="header-anchor" href="#_2-浏览器本地计算时间都包括哪些" aria-hidden="true">#</a> 2.浏览器本地计算时间都包括哪些？</h3>
<p>​		浏览器本地计算和渲染的时间自然消耗在浏览器端，它依赖的因素包括浏览器采用的并发策略、样式渲染方式、脚本解释器的性能、页面大小、页面组件的数量、页面组件缓存状况、页面组件域名分布以及域名DNS解析等</p>
<h3 id="_3-站点当前究竟使用了多少带宽吗-这些带宽都用到哪里了呢-如何计算站点现在和可预见未来使用的带宽-带宽增加后下载速度就可以加快吗-使用独享带宽和共享带宽的本质区别是什么-如何节省带宽" tabindex="-1"><a class="header-anchor" href="#_3-站点当前究竟使用了多少带宽吗-这些带宽都用到哪里了呢-如何计算站点现在和可预见未来使用的带宽-带宽增加后下载速度就可以加快吗-使用独享带宽和共享带宽的本质区别是什么-如何节省带宽" aria-hidden="true">#</a> 3.站点当前究竟使用了多少带宽吗？这些带宽都用到哪里了呢？如何计算站点现在和可预见未来使用的带宽？带宽增加后下载速度就可以加快吗？使用独享带宽和共享带宽的本质区别是什么？如何节省带宽？</h3>
<h3 id="_4-减少网页中的http请求的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_4-减少网页中的http请求的方法有哪些" aria-hidden="true">#</a> 4.减少网页中的HTTP请求的方法有哪些？</h3>
<p>设计更简单的网页，包含更少的脚本和图片；</p>
<p>将多个图片合并为一个文件，利用CSS背景图片的偏移技术呈现在网页中，避免了多个图片的下载。</p>
<p>合并js脚本或者css样式表</p>
<p>充分利用HTTP中的浏览器端Cache策略，减少重复下载。</p>
<h3 id="_5-opcache-opcode-apc和apcu的区别" tabindex="-1"><a class="header-anchor" href="#_5-opcache-opcode-apc和apcu的区别" aria-hidden="true">#</a> 5.opcache，opcode，apc和apcu的区别</h3>
<p>​		opcode</p>
<p>​		opcode是php解析器生成的操作码，类似java的字节码，main.class文件。</p>
<p>​		opcache</p>
<p>​		opcache是php的扩展，是一个实现将PHP字节码（OPCode）缓存到共享内存中到扩展。缓存字节码的好处就是减少CPU对PHP程序的加载和解析。</p>
<p>​		APC（可选的PHP缓存）</p>
<p>​		APC也是用来缓存PHP字节码的扩展。但是现在主要使用的是APCu和OPcache。</p>
<h3 id="_6-实现负载均衡的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_6-实现负载均衡的方法有哪些" aria-hidden="true">#</a> 6.实现负载均衡的方法有哪些？</h3>
<p>​		简单的http重定向</p>
<p>​		反向代理服务器</p>
<p>​		DNS轮询解析</p>
<p>​		LVS组件服务器集群</p>
<h3 id="_7-实现负载均衡应该考虑的问题有哪些" tabindex="-1"><a class="header-anchor" href="#_7-实现负载均衡应该考虑的问题有哪些" aria-hidden="true">#</a> 7.实现负载均衡应该考虑的问题有哪些？</h3>
<p>​		是否能真正的均衡调度请求，是否具备高可用性，还有影响规模扩张的制约因素。</p>
<h3 id="_8-谈谈web服务器和数据库服务器的通信" tabindex="-1"><a class="header-anchor" href="#_8-谈谈web服务器和数据库服务器的通信" aria-hidden="true">#</a> 8.谈谈web服务器和数据库服务器的通信？</h3>
<p>​		Web服务器与数据库服务器的数据通信一般基于标准的TCP，即便它们位于同一台物理主机也是如此。其通信连接的建立和释放涉及代表一段内核高速缓冲区的文件描述符的创建和销毁，这需要不少的时间开销，包括系统调用导致的内核态切换以及某些异步阻塞I/O模型采用的文件描述符队列扫描机制。所以，频繁的数据库连接和释放无疑将导致数据访问等待时间的加长，这段时间浪费得毫无意义。</p>
<p>使用数据库持久连接有效地解决了这一难题，它包括不同程度上的持久化，本质的区别在于持久连接的应用范围和生命周期，比如某个进程内部的全局数据库连接，供进程内所有计算任务共享，在这个进程终止后便被释放；或者在某个动态内容的执行周期内，代码层面的持久连接对象，在动态内容计算结束后便不复存在；还有跨进程的数据库连接池，保存多个持久连接供应用程序重复使用。在这些采用数据库持久连接的应用设计中，同时还要注意保证数据访问的线程安全性。</p>
<h3 id="_9-什么是系统调用-系统调用都会发生什么" tabindex="-1"><a class="header-anchor" href="#_9-什么是系统调用-系统调用都会发生什么" aria-hidden="true">#</a> 9.什么是系统调用？系统调用都会发生什么？</h3>
<h3 id="_10-数据链路层的原理是什么" tabindex="-1"><a class="header-anchor" href="#_10-数据链路层的原理是什么" aria-hidden="true">#</a> 10.数据链路层的原理是什么？</h3>
<p>数据链路层最重要的作用就是：通过一些数据链路层协议(即链路控制规程)，在不太可靠的物理链路上实现可靠的数据传输。
工作原理：
1．链路管理：当网络中的两个结点要进行通信时，数据的发方必须确知收方是否已经处在准备接收的状态。为此，通信的双方必须先要交换一些必要的信息。或者用我们的术语，必须先建立一条数据链路。同样地，在传输数据时要维持数据链路，而在通信完毕时要释放数据链路。数据链路的建立、维持和释放就叫做链路管理。
2．帧同步：在数据链路层，数据的传送单位是帧。数据一帧一帧地传送，就可以在出现差错时，将有差错的帧再重传一次，而避免了将全部数据都进行重传。帧同步指的是收方如何从收到的比特流中准确地区分出一帧的开始和结束。
3．流量控制：发方发送数据的速率必须使收方来得及接收。当收方来不及接收时，就必须及时控制发方发送数据的速率。
4．差错控制：在计算机通信中，一般都要求有极低的比特差错率。为此，广泛地采用了编码技术。编码技术有两大类。一类是前向纠错，即收方收到有差错的数据帧时，能够自动将差错改正过来。这种方法的开销较大，不适合于计算机通信。另一类是检错重发，即收方可以检测出收到的帧中有差错(但并不知道是哪几个比特错了)。于是就让发方重复发送这一帧，直到收方正确收到这一帧为止。这种方法在计算机通信中是最常用的。本章所要讨论的协议，都是采用检错重发这种差错控制方法。为了防止发送方等待收方应答时出现等待死锁，还将提供超时控制机制。重发帧后，为了防止收方收到重复帧，通常为帧给定一个帧序号。
5．区分数据和控制信息：由于数据和控制信息都是在同一信道中传送，而在许多情况下，数据和控制信息处于同一帧中。因此一定要有相应的措施使收方能够将它们区分开来。
6．透明传输：简单的说，透明传输就是发送方发送什么的数据，不管数据传输过程是如何实现的接收方将收到什么样的数据。更确切地说，所谓透明传输就是不管所传数据是什么样的比特组合，都应当能够在链路上传送。当所传数据中的比特组合恰巧出现了与某一个控制信息完全一样时，必须采取适当的措施，使收方不会将这样的数据误认为是某种控制信息。这样才能保证数据链路层的传输的透明的。
7．寻址：在多点连接的情况下，必须保证每一帧都能送到正确的目的站。收方也应当知道发方是哪一个站。</p>
<h3 id="_11-传输层都干了什么" tabindex="-1"><a class="header-anchor" href="#_11-传输层都干了什么" aria-hidden="true">#</a> 11.传输层都干了什么？</h3>
<p>相当于传输层的数据包，包括头部信息和正文，在头部信息中指明了用端口号来代表的进程，它们实现了真正意义上的两个主机进程之间的网络通信，而很好地屏蔽了底层的传输细节。在故事中，传输包在有些时候表现出了不同的特性，它们代表了某些传输层协议的控制机制，包括流量控制、流量限制、错误重发等。常见的传输层协议包括TCP和UDP。</p>
<h3 id="_12-什么是带宽" tabindex="-1"><a class="header-anchor" href="#_12-什么是带宽" aria-hidden="true">#</a> 12.什么是带宽？</h3>
<p>带宽的单位是bit/s,也就是单位时间的比特数，可以理解为数据在线路中的移动速度，常说的比如100M带宽，全称应该是100Mbit/s，或者100Mbps，后边的“bit/s”经常省略。</p>
<p>我们所讲的带宽是指数据的发送速度。比如我们的百兆网卡，便是指网卡的最大发送速度为100Mbps，也就是网卡在1秒钟最多可以发出100Mb的数据。那么，我们当然希望发送速度越快越好，究竟这个发送速度的大小跟什么有关呢？简单说包括以下几个因素：</p>
<p>要提高计算机总线的带宽，包括提高总线频率和总线宽度两种方法，比如使用64位总线系统或者使用主频更高的处理器等。</p>
<h3 id="_13-数据从主机进入线路会经过哪些环节" tabindex="-1"><a class="header-anchor" href="#_13-数据从主机进入线路会经过哪些环节" aria-hidden="true">#</a> 13.数据从主机进入线路会经过哪些环节？</h3>
<p>应用程序首先得将要发送的数据写入该进程的内存地址空间中</p>
<p>应用程序通过系统函数库接口（比如send函数）向内核发出系统调用，由系统内核来进行随后的操作，它将这些数据从用户态内存区复制到由内核维护的一段称为内核缓冲区的内存地址空间。这块地址空间的大小通常是有限的，所有要发送的数据将以队列的形式进入这里，这些数据可能来自于多个进程，每块数据都有一定的额外记号来标记它们的去向。如果要发送的数据比较多，那么该系统调用需要多次进行，每次复制一定的数据大小，这个大小取决于网络数据包的大小以及内核缓冲区的承载能力。重复的系统调用体现在应用编程层面重复调用send函数。</p>
<p>当数据写入内核缓冲区后，内核会通知网卡控制器前来取数据，同时CPU转而处理其他进程。网卡控制器接到通知后，便根据网卡驱动信息得知对应内核缓冲区的地址，将要发送的数据复制到网卡的缓冲区中。注意在以上一系列的数据复制中，数据始终按照连接两端设备的内部总线宽度来复制，也就是字节的整数倍，比如在32位总线的主机系统中，采用PCI-X总线接口的网卡一般使用32位总线宽度，那么从内核缓冲区到网卡缓冲区的数据复制过程中，任何时刻只能复制32位的比特信息。</p>
<p>4.网卡缓冲区中的数据需要发送到线路中，同时释放缓冲区来获取更多要发送的数据。但是我们知道，只有二进制的数字信号才可以在线路中传输，所以这时候需要对数据进行字节到位的转换，这种转换不难想象，就是将数据的每个位按照顺序依次发出。</p>
<p>5.发送时，网卡会使用内部特定的物理装置来生成可以传播的各种信号，比如在使用铜线线路时，网卡会根据“0”和“1”的变化产生不同的电信号；而使用光纤线路时，网卡会产生不同的光信号。</p>
<p>每时每刻的发送速度都是传输协议根据接收方的接收能力不断调整的，比如通过数据链路层或者传输层的滑动窗口技术等流量控制机制进行速度的调整。</p>
<h3 id="_14-交换机和路由器的区别是什么" tabindex="-1"><a class="header-anchor" href="#_14-交换机和路由器的区别是什么" aria-hidden="true">#</a> 14.交换机和路由器的区别是什么？</h3>
<p><strong>交换机和路由器的区别：</strong></p>
<p>◆ 路由器可以给你的局域网自动分配IP，虚拟拨号，就像一个交通警察，指挥着你的电脑该往哪走，你自己不用操心那么多了。</p>
<p>交换机只是用来分配网络数据的。</p>
<p>◆ 路由器可以把一个IP分配给很多个主机使用，这些主机对外只表现出一个IP。</p>
<p>交换机可以把很多主机连起来，这些主机对外各有各的IP。</p>
<p>◆ 交换机工作在中继层，根据MAC地址寻址。</p>
<p>路由器工作在网络层，根据IP地址寻址，可以处理TCP/IP协议，而交换机不可以。</p>
<p>◆ 路由器提供了<a href="https://www.zhihu.com/search?q=%E9%98%B2%E7%81%AB%E5%A2%99&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A27708844%7D" target="_blank" rel="noopener noreferrer">防火墙<ExternalLinkIcon/></a>的服务，交换机不能提供该功能。路由器仅仅转发特定地址的数据包，不传送不支持路由协议的数据包传送和未知目标网络数据包的传送，从而可以防止广播风暴。</p>
<p>◆ 举个例子,路由器相当于小邮局，就一个地址(IP)，负责一个地方的收发(个人电脑，某个服务器，所以你家上网要这个东西)，交换机是省里的大邮政中心，负责由一个地址给各个小地方的联系。</p>
<p>简单的说路由器专管入网，交换机只管配送，路由就是给你找路让你上网的，交换机只负责开<a href="https://link.zhihu.com/?target=http%3A//www.meilele.com/category-men/" target="_blank" rel="noopener noreferrer">门<ExternalLinkIcon/></a>，交换机上面要没有路由你是上不了网的。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211211225525291.png" alt="image-20211211225525291"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211211225648630.png" alt="image-20211211225648630"></p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211211225718932.png" alt="image-20211211225718932"></p>
<p>15.字节和带宽，下载速度之间如何转换？</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>我们平时说的家用或者服务器带宽多少兆，其具体单位是Mbps，换算成下载传输速度并不等同于多少兆每秒，这之间有一个换算公式。信息最小的单位是bit，也称为比特位，习惯用b来表示，而数据存储的基础单位是字节，写作Byte，常用B表示，一个字节占8位（bit），下面我们来看下单位换算。

1比特(bit)=1b

1B=1Byte=8b(bit)

KB——千字节

MB——兆字节

1KB=1024B=8192b

1MB=1024KB
带宽的常用单位是Mbps,单位是兆比特每秒，即Mbit/s，由于数据存储单位是字节（Byte，简称B），一个字节占用8比特位，所以带宽换算成传输是要除以8的，具体如下：

1Mbps=1024Kbps

转换为下载速度：

1*1024Kbps/8b=128KB/s

这是1兆带宽的理论最大传输速度，考虑到信号衰减等一些其他问题，一般能保持在100KB每秒。

10M带宽的理论最大传输速度：

10*1024/8=1280KB/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-共享带宽和独享带宽" tabindex="-1"><a class="header-anchor" href="#_15-共享带宽和独享带宽" aria-hidden="true">#</a> 15.共享带宽和独享带宽？</h3>
<p>另一台主机使用了共享100M带宽，也就是100Mbit/s的数据发送速度，换算成字节便是12．5MBytes/s。事实上很多普通的服务器托管都采用这种带宽方案，它的价格较低，但是请注意这里的“共享”是指交换机不保证你的主机出口带宽能达到100M，原因很简单，假设交换机为50台主机同时提供共享100M带宽接入，每台主机理论上都能以最高100Mbit/s的速度将数据发送到交换机，但是这些数据汇集到路由器后，都得从路由器的出口转发到其他网络，可是路由器的出口带宽是运营商买来的，假设这里也就100M而已，那这些数据就得在路由器的高速缓冲区中以100Mbit/s的速度转发，那么交换机也要配合这个速度来调整自己的发送速度，同时每台主机也会自动调整发送速度，这些都是由底层传输协议自动完成的，本质是为了防止发送速度大于接收速度导致接收端缓冲区的数据还没来得及处理就被新的数据覆盖。</p>
<p>每台主机的实际带宽就要根据这些主机的总体通信量来决定了，假如50台主机都要发送大量的数据（大文件下载），那么每台的发送速度大概控制在2Mbit/s左右，也就是250kBytes/s；假如有49台主机在某时刻不发送数据，则剩余的1台主机此刻理论可以达到100Mbit/s的速度，但是一般交换机对于共享带宽都会限制最高峰值，比如限制为10Mbit/s，那么即使某个时刻只有1台主机需要发送数据，交换机也会让它减速。</p>
<p>这些发送速度（即带宽）都是针对从发送端发出的所有数据而言，但是这些数据往往来自于主机的多个进程，而且也要发向五湖四海不同的目的地，比如北京、上海和深圳的3个用户通过HTTP同时下载主机上的数据文件，这些数据不分你我地夹杂在一起从主机进入路由器，这一过程的发送速度前面已经讲得很清楚了，当它们进入某城市交换节点的时候，大家分道扬镳，分别前往三个目的地，这时从各个目的地的角度而言，单位时间接收到的数据一定比从服务器发出的数据少，这种从最终接收端体验到的速度我们一般称为“下载速度”，也就是我们经常看到在浏览器下载进度条上显示的数值，可见下载速度无论如何都小于发送速度。在刚才的例子中，即便是三个目的地的下载速度总和也一定小于服务器对这些数据的发送速度，</p>
<p>在一般情况下当你使用普通的家庭宽带接入互联网时，宽带服务商往往会在你接入的交换节点上进行带宽限制，比如你申请安装了1M独享宽带，那么交换节点上连接到你家的端口缓冲区将会以1Mbit/s的速度接收来自服务器的数据，这样你的下载速度将受到限制，但是服务器的数据发送速度基本不变，因为它发出的数据不只是到你一家。</p>
<p>16.什么是下载速度？如何计算？响应时间都包括哪些？如何计算？</p>
<p>下载速度就是单位时间从服务器到达PC用户机的数据量的多少、数据量的多少用字节表示，单位Bytes/s.</p>
<p>响应时间 = 发送时间 + 传播时间 + 处理时间，发送时间很容易计算，即“数据量/带宽”。比如要发送100Mbit的数据，而且发送速度为100Mbit/s，也就是带宽为100M，那么发送时间便为1s。值得注意的是，在两台主机之间往往存在多个交换节点，每次的数据转发，都需要花费发送时间，那么总的发送时间也包括这些转发时所花费的发送时间。</p>
<p>传播时间主要依赖于传播距离，因为传播速度我们可以近似认为约等于2．0×108m/s，那么传播时间便等于传播距离除以传播速度。比如两个交换节点之间线路的长度为1000km，相当于北京到上海的直线距离，那么一个比特信号从线路的一端到另一端的传播时间为0．005s。</p>
<p>处理时间就是指数据在交换节点中为存储转发而进行一些必要的处理所花费的时间，其中的重要组成部分就是数据在缓冲区队列中排队所花费的时间</p>
<p>响应时间 = (数据量比特数 / 带宽) + (传播距离 / 传播速度) + 处理时间</p>
<p>下载速度的计算公式如下：下载速度 = 数据量字节数 / 响应时间</p>
<h3 id="_16-假设这样一个场景-我们的web服务器托管在北京的某互联网数据中心-idc-以10m独享带宽的方式接入互联网。位于西安的一位用户通过小区提供的1m独享带宽的方式接入互联网-他通过pc的浏览器下载该web服务器上的一个100mb大小的文件-换算成比特也就是800mb-响应时间和下载速度是多少呢" tabindex="-1"><a class="header-anchor" href="#_16-假设这样一个场景-我们的web服务器托管在北京的某互联网数据中心-idc-以10m独享带宽的方式接入互联网。位于西安的一位用户通过小区提供的1m独享带宽的方式接入互联网-他通过pc的浏览器下载该web服务器上的一个100mb大小的文件-换算成比特也就是800mb-响应时间和下载速度是多少呢" aria-hidden="true">#</a> 16.假设这样一个场景，我们的Web服务器托管在北京的某互联网数据中心（IDC），以10M独享带宽的方式接入互联网。位于西安的一位用户通过小区提供的1M独享带宽的方式接入互联网，他通过PC的浏览器下载该Web服务器上的一个100MB大小的文件，换算成比特也就是800Mb，响应时间和下载速度是多少呢？</h3>
<blockquote>
<blockquote>
<p>为了在这个具体的场景中充分说明时间的花费，我们先假设服务器和用户PC之间的交换节点很少，然后逐步增加。首先，假设Web服务器直接连接在交换节点A，那么从Web服务器到交换节点A，因为使用了10M独享带宽，所以数据发送速度为10Mbit/s，所以这部分发送时间为：800Mbit / (10Mbit/s) = 80s然后，用户的接入方式为1M独享带宽，所以用户PC接入的交换节点B到用户PC的发送速度为1Mbit/s，所以这部分发送时间为：800Mbit / (1Mbit/s) = 800s</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>而至于以上两个交换节点A和B，我们假设它们都是所在城市的城域网顶级节点，而且它们直接通过光缆相连，带宽假设为40G，那么这部分发送时间为：800Mbit / (40Gbit/s) = 0．02s以上的发送时间相加就是总的发送时间。</p>
</blockquote>
</blockquote>
<p>我们计算传播时间，由于北京到西安的高速公路距离大约为1000km，所以我们假设Web服务器到用户PC的线路距离总和为1000km，传播速度我们统一按照2．0×10<sup>8</sup>m/s计算，那么传播时间为：1000km / (2．0×10<sup>8</sup>m/s) = 0．005s这样一来，忽略处理时间，响应时间便为：80s + 800s + 0．02s + 0．005s = 880．025s</p>
<p>下载速度便为：100MByte / 880．025s = 113．63KB/s</p>
<p>那么，这个 113．63KB/s的下载速度真的就是实际速度吗？绝对不是。不要忘了我们在以上的计算过程中忽略了很多可能没有提到过的非理想因素，这些因素在实际环境下是不可避免的，它们将导致实际下载速度必然或多或少地低于 113．63KB/s。注意这里说的实际速度，其实就是我们用浏览器或其他下载工具时看到的下载速度值。</p>
<blockquote>
<blockquote>
<p>这些非理想因素主要包括：</p>
<p>● 在共享带宽以及网络通信数据量过大时，交换节点中数据在转发队列中的等待时间便不能忽略，这部分时间往往也是影响下载速度的重要部分。大家应该都有亲身体验，比如几台PC通过同一宽带路由器上网，如果其中一台PC正在持续下载电影，那么其他几台PC的下载速度必然受到较大的影响。</p>
<p>● 有时候我们下载的数据需要直接写入磁盘，比如下载几百兆的文件到某文件目录下。我们知道，PC网卡接收到的数据进入内存后，便完成了数据接收，但是下载进程一般要将这些数据即时写入磁盘后，才会进行下一次接收数据的系统调用，而写入磁盘的过程需要经历位于内核态内存中磁盘高速缓冲区的转发，而且有些下载进程（如IE的文件下载）为了减少磁盘写操作的压力，会在每次接收数据的系统调用之间进行休眠停顿，这样一来，实际上单线程的下载过程中接收数据并不是绝对连贯的，所以我们一般喜欢用多线程下载工具来加速下载，就是因为多个执行流可以使得下载过程在单位时间内执行相对更多次数的数据接收系统调用，充分占用带宽。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>● 在一些长距离的传播线路（如跨城光缆）中必须使用中继器，以此防止电磁波信号在传播中过分衰减，所以这些中继器需要对信号进行接收和转发，也存在发送时间的消耗，但是不多。</p>
<p>● 为了容易描述网络结构，在前面我们经常提到的“交换节点”普遍特指“交换路由器”，也就是一个设备同时具备路由器和交换机的功能，很多人在家里使用的宽带路由器便是这样的节点设备。而有些交换节点，可能采用了独立的路由器和交换机，那么一旦数据需要经其转发到其他网络，这个交换节点便需要对数据进行两次转发，也就是转发次数翻倍，不过不必担心，和上边的中继器转发一样，这部分时间的确也不是很多，但是有必要说明这些可能存在的环节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所以，要搞清楚响应时间的消耗，必须根据实际情况，找出转发路径中是否存在一些较低带宽的交换节点，正是这些节点成为影响下载速度的瓶颈所在。</p>
</blockquote>
</blockquote>
<h3 id="_17-什么是服务器的并发处理能力-什么是吞吐率" tabindex="-1"><a class="header-anchor" href="#_17-什么是服务器的并发处理能力-什么是吞吐率" aria-hidden="true">#</a> 17.什么是服务器的并发处理能力？什么是吞吐率？</h3>
<p>就是单位时间内服务器处理的请求数。单位是“reqs/s”。</p>
<p>我们普遍使用“压力测试”的方法，通过模拟足够数目的并发用户数，分别持续发送一定的HTTP请求，并统计测试持续的总时间，计算出基于这种“压力”下的吞吐率，即为一个平均计算值。</p>
<h3 id="_18-假如100个用户同时向服务器分别进行10次请求-与1个用户向服务器连续进行1000次请求-效果一样吗-也就是说给服务器带来的压力一样吗" tabindex="-1"><a class="header-anchor" href="#_18-假如100个用户同时向服务器分别进行10次请求-与1个用户向服务器连续进行1000次请求-效果一样吗-也就是说给服务器带来的压力一样吗" aria-hidden="true">#</a> 18.假如100个用户同时向服务器分别进行10次请求，与1个用户向服务器连续进行1000次请求，效果一样吗？也就是说给服务器带来的压力一样吗？</h3>
<p>虽然看起来服务器都需要连续处理1000 个请求，其实关键的区别就在于，是否真的“连续”。首先有一点需要明白，对于压力测试中提到的每一个用户，连续发送请求实际上是指在发送一个请求并接收到响应数据后再发送下一个请求。这样一来，从微观层面来看，1 个用户向服务器连续进行1000 次请求的过程中，任何时刻服务器的网卡接收缓冲区中只有来自该用户的1个请求，而100个用户同时向服务器分别进行10次请求的过程中，服务器网卡接收缓冲区中最多有100个等待处理的请求，显然这时候服务器的压力更大。</p>
<h3 id="_19-浏览器对并发下载数的限制是多少" tabindex="-1"><a class="header-anchor" href="#_19-浏览器对并发下载数的限制是多少" aria-hidden="true">#</a> 19.浏览器对并发下载数的限制是多少？</h3>
<p>用户访问Web站点通常使用浏览器，而浏览器在下载一个网页以及网页中的多个组件时，采用多线程的并发下载方式，但是对于同一域名下URL的并发下载数是有最大限制的，具体限制视浏览器的不同而不同，比如在HTTP/1．1下，IE7支持两个并发连接，IE8支持6个并发连接，Firefox3支持4个并发连接，我们使用诸如HttpWatch这样的HTTP监视工具可以很清晰地看到这一点。所以，我们前面说到的服务器支持的最大并发数，具体到真实的用户，可能并不是一对一的关系，一个真实的用户可能会给服务器带来两个或更多的并发用户数的压力，一些高明的用户还可以通过一些方法来修改浏览器的并发数限制。</p>
<p>不是同时来了多少用户请求就建立多少连接，Web服务器一般会限制同时服务的最多用户数，比如Apache的MaxClients参数，所以这个实际并发用户数，有时候大于服务器所维护的文件描述符总数，而多出的这些用户请求，则在服务器内核的数据接收缓冲区中等待处理，所以这些请求在用户看来处于阻塞状态。</p>
<h3 id="_20-web服务器工作本质" tabindex="-1"><a class="header-anchor" href="#_20-web服务器工作本质" aria-hidden="true">#</a> 20.web服务器工作本质？</h3>
<p>Web服务器所做的工作的本质就是，争取以最快的速度将内核缓冲区中的用户请求数据一个不剩地都拿回来，然后尽最大努力同时快速处理完这些请求，并将响应数据放到内核维护的另一块用于发送数据的缓冲区中，接下来再尽快处理下一拨请求，并尽量让用户请求在内核缓冲区中不要等太久。</p>
<h3 id="_21-dma技术原理" tabindex="-1"><a class="header-anchor" href="#_21-dma技术原理" aria-hidden="true">#</a> 21.DMA技术原理？</h3>
<p><a href="http://www.elecfans.com/tags/dma/" target="_blank" rel="noopener noreferrer">DMA<ExternalLinkIcon/></a>技术是Direct Memory Access的缩写。其意思是“<a href="http://www.hqchip.com/app/724" target="_blank" rel="noopener noreferrer">存储器<ExternalLinkIcon/></a>直接访问”。它是指一种高速的数据传输操作，允许在外部设备和存储器之间直接读写数据，既不通过<a href="http://m.elecfans.com/article/645277.html" target="_blank" rel="noopener noreferrer">CPU<ExternalLinkIcon/></a>，也不需要CPU干预。</p>
<p>​		整个数据传输操作在一个称为“DMA控制器”的控制下进行的。CPU除了在数据传输开始和结束时作一点处理外，在传输过程中CPU可以进行其它的工作。这样，在大部分时间里，CPU和输入输出都处在并行操作。因此，使整个<a href="http://www.hqchip.com/app/873" target="_blank" rel="noopener noreferrer">计算机<ExternalLinkIcon/></a>系统的效率大大提高。</p>
<p>22.父进程创建子进程后，会做哪些事？</p>
<p>子进程会把父进程的地址空间的所有数据复制到自己的地址空间中，完全继承父进程的所有上下文信息，他们之间可以通信，但是不相互依赖。</p>
<h3 id="_22-进程调度器有什么用" tabindex="-1"><a class="header-anchor" href="#_22-进程调度器有什么用" aria-hidden="true">#</a> 22.进程调度器有什么用？</h3>
<blockquote>
<blockquote>
<p>内核中的进程调度器（Scheduler）维护着各种状态的进程队列。在Linux中，进程调度器维护着一个包括所有可运行进程的队列，称为“运行队列（Run Quere）”，以及一个包括所有休眠进程和僵尸进程的列表。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>进程调度器的一项重要工作就是决定下一个运行的进程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>进程优先级除了可以由进程自己决定，进程调度器在进程运行时也可以动态调整它们的优先级，比如对有些进程适当提高优先级，对有些进程则进行处罚，降低它们的优先级，这些行为的出发点都是为了让所有进程更好地重叠利用系统资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在进程调度器维护的运行队列中，任何时刻至少存在一个进程，那就是正在运行的进程。而当运行队列中有不止一个进程的时候，就说明此时CPU比较抢手，其他进程还在等着呢，进程调度器应该尽快让正在运行的进程释放CPU。</p>
</blockquote>
</blockquote>
<h3 id="_23-如何查看进程优先级权重-如何查看正在运行的运行队列中的进程个数和总进程数" tabindex="-1"><a class="header-anchor" href="#_23-如何查看进程优先级权重-如何查看正在运行的运行队列中的进程个数和总进程数" aria-hidden="true">#</a> 23.如何查看进程优先级权重？如何查看正在运行的运行队列中的进程个数和总进程数？</h3>
<p>top可以查看优先级权重</p>
<p>cat /proc/loadavg 可以查看运行队列的进程个数和进程总数。</p>
<p><img src="@source/docs/theme-reco/img/php面试题最全篇/image-20211212143114164.png" alt="image-20211212143114164"></p>
<p>注意10/200这部分，其中的10代表此时运行队列中的进程个数，而200则代表此时的进程总数。最右边的17145代表到此时为止，最后创建的一个进程ID。</p>
<p>接下来，请看左边的三个数值，分别是1．63、0．48、0．21，它们就是我们常说的系统负载。我们都知道，系统负载越高，代表CPU越繁忙，越无法很好地满足所有进程的需要。但是，系统负载是如何计算而来的呢？根据定义，它是在单位时间内运行队列中就绪等待的进程数平均值，所以当运行队列中就绪进程不需要等待就可以马上获得CPU的时候，系统负载便非常低。当系统负载为0．00时，说明任何进程只要就绪后就可以马上获得CPU，不需要等待，这时候系统响应速度最快。</p>
<p>三个数值，便是系统最近1分钟、5分钟和15分钟分别计算得出的系统负载。</p>
<h3 id="_24-进程有哪两种状态" tabindex="-1"><a class="header-anchor" href="#_24-进程有哪两种状态" aria-hidden="true">#</a> 24.进程有哪两种状态？</h3>
<p>用户态和内核态</p>
<p>进程通常运行在用户态，这时候可以使用CPU和内存来完成一些任务（如进行数学计算），而当进程需要对硬件外设进行操作的时候（如读取磁盘文件、发送网络数据等），就必须切换到内核态，这时候它将拥有更多的权力来操控整个计算机，当在内核态的任务完成后，进程又切换回用户态。</p>
<h3 id="_25-什么是系统调用" tabindex="-1"><a class="header-anchor" href="#_25-什么是系统调用" aria-hidden="true">#</a> 25.什么是系统调用？</h3>
<p>用户操作硬件时需要通过内核提供的系统调用来操作硬件，系统调用涉及到用户态到内核态的切换。</p>
<p>系统调用（英语：system call），又称为系统呼叫，<strong>指运行在用户空间的程序向操作系统内核请求需要更高权限运行的服务。</strong></p>
<p>系统调用提供用户程序与操作系统之间的接口。操作系统的进程空间分为用户空间和内核空间：</p>
<ul>
<li>操作系统内核直接运行在硬件上，提供设备管理、内存管理、任务调度等功能。</li>
<li>用户空间通过API请求内核空间的服务来完成其功能——内核提供给用户空间的这些API, 就是系统调用。</li>
</ul>
<h4 id="_26-如何跟踪查看进程的系统调用" tabindex="-1"><a class="header-anchor" href="#_26-如何跟踪查看进程的系统调用" aria-hidden="true">#</a> 26.如何跟踪查看进程的系统调用？</h4>
<p>使用strace来跟踪Apache的一个子进程，获得某次请求处理中的一系列系统调用，如下所示：</p>
<p>strace是一个可用于诊断、调试和教学的Linux用户空间跟踪器。我们用它来监控用户空间进程和内核的交互，比如系统调用、信号传递、进程状态变更等。</p>
<p>一种是通过它启动要跟踪的进程。用法很简单，在原本的命令前加上strace即可。比如我们要跟踪 &quot;ls -lh /var/log/messages&quot; 这个命令的执行，可以这样：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>strace ls -lh /var/log/messages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外一种运行模式，是跟踪已经在运行的进程，在不中断进程执行的情况下，理解它在干嘛。 这种情况，给strace传递个-p pid 选项即可。</p>
<h3 id="_27-nginx运行模式" tabindex="-1"><a class="header-anchor" href="#_27-nginx运行模式" aria-hidden="true">#</a> 27.nginx运行模式？</h3>
<p>Nginx会按需同时运行多个进程：一个主进程(master)和几个工作进程(worker)，配置了缓存时还会有缓存加载器进程(cache loader)和缓存管理器进程(cache manager)等。Nginx主要通过“共享内存”的机制实现进程间通信。主进程以root用户身份运行，而worker、cache loader和cache manager均应以非特权用户身份运行。
在工作方式上，Nginx分为单工作进程和多工作进程两种模式。在单工作进程模式下，除主进程外，还有一个工作进程，工作进程是单线程的；在多工作进程模式下，每个工作进程包含多个线程。Nginx默认为单工作进程模式。</p>
<h3 id="_28-什么是pio和dma" tabindex="-1"><a class="header-anchor" href="#_28-什么是pio和dma" aria-hidden="true">#</a> 28.什么是PIO和DMA?</h3>
<blockquote>
<blockquote>
<p>很早以前，磁盘和内存之间的数据传输是需要CPU控制的，也就是说如果我们读取磁盘文件到内存中，数据要经过CPU存储转发，这种方式称为PIO。显然这种方式非常不合理，需要占用大量的CPU时间来读取文件，造成文件访问时系统几乎停止响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>后来，DMA（直接内存访问，Direct Memory Access）取代了PIO，它可以不经过CPU而直接进行磁盘和内存的数据交换。在DMA模式下，CPU只需要向DMA控制器下达指令，让DMA控制器来处理数据的传送即可，DMA控制器通过系统总线来传输数据，传送完毕再通知CPU，这样就在很大程度上降低了CPU占有率，大大节省了系统资源，而它的传输速度与PIO的差异其实并不十分明显，因为这主要取决于慢速设备的速度。</p>
</blockquote>
</blockquote>
<h3 id="_29-什么是同步阻塞i-o" tabindex="-1"><a class="header-anchor" href="#_29-什么是同步阻塞i-o" aria-hidden="true">#</a> 29.什么是同步阻塞I/O？</h3>
<p>我们说的阻塞是指当前发起I/O操作的进程被阻塞，并不是CPU被阻塞，事实上没有什么能让CPU阻塞的，CPU只知道拼命地计算，对于阻塞一无所知。</p>
<p>同步阻塞I/O是指当进程调用某些涉及I/O操作的系统调用或库函数时，比如accept()、send()、recv()等，进程便暂停下来，等待I/O操作完成后再继续运行。这是一种简单而有效的I/O模型，它可以和多进程结合起来有效地利用CPU资源，但是其代价就是多进程的大量内存开销。</p>
<h3 id="_30-什么是select-poll-epoll-sigio" tabindex="-1"><a class="header-anchor" href="#_30-什么是select-poll-epoll-sigio" aria-hidden="true">#</a> 30.什么是select,poll,epoll,sigio?</h3>
<h3 id="_31-linux的内存映射是什么" tabindex="-1"><a class="header-anchor" href="#_31-linux的内存映射是什么" aria-hidden="true">#</a> 31.Linux的内存映射是什么？</h3>
<p>Linux内核提供一种访问磁盘文件的特殊方式，它可以将内存中某块地址空间和我们要指定的磁盘文件相关联，从而把我们对这块内存的访问转换为对磁盘文件的访问，这种技术称为内存映射。</p>
<p>在大多数情况下，使用内存映射可以提高磁盘I/O的性能，它无须使用read()或write()等系统调用来访问文件，而是通过mmap()系统调用来建立内存和磁盘文件的关联，然后像访问内存一样自由地访问文件。</p>
<p>内存映射文件与虚拟内存有些类似，通过内存映射文件可以保留一个地址空间的区域，同时将物理存储器提交给此区域，只是内存文件映射的物理存储器来自一个已经存在于磁盘上的文件，而非系统的页文件，而且在对该文件进行操作之前必须首先对文件进行映射，就如同将整个文件从磁盘加载到内存。由此可以看出，使用内存映射文件处理存储于磁盘上的文件时，<strong>将不必再对文件执行I/O操作(虚拟内存需要从磁盘加在到物理内存中)</strong>，<strong>这意味着在对文件进行处理时将不必再为文件申请并分配缓存</strong>，所有的文件缓存操作均由系统直接管理，<strong>由于取消了将文件数据加载到内存、数据从内存到文件的回写以及释放内存块等步骤</strong>，使得内存映射文件在处理<a href="http://lib.csdn.net/base/hadoop" target="_blank" rel="noopener noreferrer">大数据<ExternalLinkIcon/></a>量的文件时能起到相当重要的作用。另外，实际工程中的系统往往需要在多个进程之间共享数据，如果数据量小，处理方法是灵活多变的，如果共享数据容量巨大，那么就需要借助于内存映射文件来进行。实际上，内存映射文件正是解决本地多个进程间数据共享的最有效方法。</p>
<h3 id="_32-谈谈对阻塞非阻塞-同步异步的区别" tabindex="-1"><a class="header-anchor" href="#_32-谈谈对阻塞非阻塞-同步异步的区别" aria-hidden="true">#</a> 32.谈谈对阻塞非阻塞，同步异步的区别？</h3>
<p>阻塞和非阻塞是指当进程访问的数据如果尚未就绪，进程是否需要等待，简单说这相当于函数内部的实现区别，即未就绪时是直接返回还是等待就绪；而同步和异步是指访问数据的机制，同步一般指主动请求并等待I/O操作完毕的方式，当数据就绪后在读写的时候必须阻塞，异步则指主动请求数据后便可以继续处理其他任务，随后等待I/O操作完毕的通知，这可以使进程在数据读写时也不发生阻塞。</p>
<h3 id="_33-php的apc和redis的对比" tabindex="-1"><a class="header-anchor" href="#_33-php的apc和redis的对比" aria-hidden="true">#</a> 33.php的apc和redis的对比？</h3>
<p>看印象笔记</p>
<h3 id="_34-什么是页高速缓存" tabindex="-1"><a class="header-anchor" href="#_34-什么是页高速缓存" aria-hidden="true">#</a> 34.什么是页高速缓存？</h3>
<p>文件系统内核缓冲区（Buffer Area）吗？它位于物理内存的内核地址空间，除了使用O_DIRECT标记打开的文件之外，所有对磁盘文件的读写操作都要经过它，所以你也可以把它看成是磁盘的前端设备。这块内核缓冲区也称为页高速缓存（Page Cache），实际上它包括以下两部分：</p>
<p>● 读缓存区</p>
<p>● 写缓存区</p>
<p>读缓存区中保存着最近系统从磁盘上读取的数据，一旦下次需要读取这些数据的时候，内核将直接从这里获得，而不需要访问磁盘。</p>
<p>写缓存区的目的主要在于减少磁盘的物理写操作，通常情况下向磁盘中写入数据并不着急，进程不需要因为写操作而等待，内核缓冲区可以将多次写操作的指令累积起来，通过一次物理磁头的移动来完成。当然，写缓存区导致数据真正写入磁盘会产生几秒的延迟，在实际写入磁盘之前，这些数据被称为脏页（Dirty Page）。</p>
<h3 id="_35-mysql的explain结果中-type和key都可能为哪些值-代表什么" tabindex="-1"><a class="header-anchor" href="#_35-mysql的explain结果中-type和key都可能为哪些值-代表什么" aria-hidden="true">#</a> 35.mysql的explain结果中，type和key都可能为哪些值？代表什么？</h3>
<p>type有const,all,ref</p>
<p>const代表此次查询复杂度为常量，代表听过索引直接找到了一个匹配行。</p>
<p>all代表全表扫描。</p>
<p>ref代表没有使用主键索引或者唯一索引的条件查询，查询结果可能会有多个匹配行，在联合查询中很常见。</p>
<p>key可能为primary代表主键索引，还有unique，还有name代表查询使用了name字段的索引。</p>
<h3 id="_36-myisam表结构有哪些" tabindex="-1"><a class="header-anchor" href="#_36-myisam表结构有哪些" aria-hidden="true">#</a> 36.myisam表结构有哪些？</h3>
<p>MyISAM类型表的存储方式，任何一个MyISAM类型的表包括以下三个文件：frm存储了表的结构信息。MYD存储了表中的数据。MYI存储了表中的索引。</p>
<p>MyISAM类型的表只缓存索引，不缓存数据，也就是说只缓存MYI文件，不缓存MYD文件。那么，如果计算出所有MYI文件的大小，自然就是当前索引缓存区需要的空间大小了，但是显然这不具备可操作性，而且这个数值在不断增长。总之，如果你在大量使用MyISAM类型的表，给key_buffer预设一个较大的空间，并监控索引缓存的空间使用率是非常重要的。</p>
<h3 id="_37-myisam和innodb的写缓存索引机制有什么区别" tabindex="-1"><a class="header-anchor" href="#_37-myisam和innodb的写缓存索引机制有什么区别" aria-hidden="true">#</a> 37.myisam和innodb的写缓存索引机制有什么区别？</h3>
<p>Myisam引擎有Key Cache：专门缓存索引，淘汰算法LRU
Innodb引擎有buffer pool：缓存数据和索引，淘汰算法LRU</p>
<p>Innodb维护事务安全，必须将操作的信息持久化下来，实现回滚，但是这涉及到磁盘操作的开销，所以不可能每次更新的操作，都对磁盘数据文件进行修改更新，所以Mysql采取的方法是更新binlog方法：这涉及到随机写和顺序写，binlog一般都是顺序写，所以减少了磁头寻道的时间，提高了整体的更新的效率。</p>
<h3 id="_38-innodb实现事物的方法是" tabindex="-1"><a class="header-anchor" href="#_38-innodb实现事物的方法是" aria-hidden="true">#</a> 38.innodb实现事物的方法是？</h3>
<p>预写日志，当有事务提交时，Innodb首先将它写到内存中的事务日志缓冲区，随后当事务日志写入磁盘时，Innodb才更新实际数据和索引。这里有一个关键点，那就是事务日志何时写入磁盘。</p>
<h3 id="_39-写入磁盘文件-和-刷新到磁盘-区别" tabindex="-1"><a class="header-anchor" href="#_39-写入磁盘文件-和-刷新到磁盘-区别" aria-hidden="true">#</a> 39.“写入磁盘文件”和“刷新到磁盘”区别？</h3>
<p>它们的区别在于前者只是将数据写入位于物理内存中的内核缓冲区，而后者是将内核缓冲区中的数据真正写入磁盘。</p>
<h3 id="_40-mysql会把临时表存储到哪里" tabindex="-1"><a class="header-anchor" href="#_40-mysql会把临时表存储到哪里" aria-hidden="true">#</a> 40.mysql会把临时表存储到哪里？</h3>
<p>磁盘，内存，临时文件，其中磁盘开销最大，我们曾经看到一些查询在分析时出现Using temporary的状态，这意味着查询过程中需要创建临时表来存储中间数据，我们需要通过合理的索引来避免它。</p>
<h3 id="_41-通常监控后端服务器的哪些方面" tabindex="-1"><a class="header-anchor" href="#_41-通常监控后端服务器的哪些方面" aria-hidden="true">#</a> 41.通常监控后端服务器的哪些方面？</h3>
<p>比如系统负载、响应时间、是否可用、TCP连接数、流量等，它们都是负载均衡调度策略需要考虑的因素。</p>
<h3 id="_42-什么是粘滞会话-如何解决" tabindex="-1"><a class="header-anchor" href="#_42-什么是粘滞会话-如何解决" aria-hidden="true">#</a> 42.什么是粘滞会话？如何解决？</h3>
<blockquote>
<blockquote>
<p>负载均衡调度器最大程度地让用户不必关心后端服务器，我们知道，当采用RR调度策略时，即便是同一用户对同一内容的多次请求，也可能被转发到了不同的后端服务器，这听起来似乎没什么大碍，但有时候，或许会带来一些问题。</p>
<p>● 当某台后端服务器启用了Session来本地化保存用户的一些数据后，下次用户的请求如果转发给了其他后端服务器，将导致之前的Session数据无法访问；</p>
<p>● 后端服务器实现了一定的动态内容缓存，而毫无规律的转发使得这些缓存的利用率下降。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如何解决这些问题呢？从表面上看，我们需要做的就是调整调度策略，让用户在一次会话周期内的所有请求始终转发到一台特定的后端服务器上，这种机制也称为粘滞会话（Sticky Sessions），要实现它的关键在于如何设计持续性调度算法。</p>
</blockquote>
</blockquote>
<p>既然要让调度器可以识别用户，那么将用户的IP地址作为识别标志最为合适，一些反向代理服务器对此都有支持，比如Nginx和HAProxy，它们可以将用户的IP地址进行Hash计算并散列到不同的后端服务器上。</p>
<p>还可以利用Cookies机制来设计持久性算法，比如调度器将某个后端服务器的编号追加到写给用户的Cookies中，这样调度器便可以在该用户随后的请求中知道应该转发给哪台后端服务器。这样做可以更加细粒度地追踪到每一个用户，试想一下，当有很多用户隐藏在一个公开IP地址后面时，利用Cookies的持久性算法将显得更加有效。</p>
<h3 id="_43-wan和lan的区别" tabindex="-1"><a class="header-anchor" href="#_43-wan和lan的区别" aria-hidden="true">#</a> 43.WAN和LAN的区别？</h3>
<p>LAN： Local Area Network 局域网WAN： Wide Area Network 广域网局域网 ( LAN )
局域网是指在较小的地理范围内，将两台以上的计算机通过传输电缆连接起来，实现资源共享。局域网的传输速度通常在10Mb/s～1000Mb/s之间，主干1000Mb/s、桌面100Mb/s是目前的主流技术。局域网的设计通常是针对于一座建筑物内，提高资源和信息的安全性，用于减少管理者的维护操作等。客户/服务系统(C/S----B/S)是现代局域网一个新的应用，目前主要是用在客户/服务数据库系统中。客户端向服务器发送请求，服务器再将处理结果返回给浏览器或者客户端程序。
广域网 ( WAN )
广域网是将一个较大的地理范围内，将多台计算机连接起来相互进行通信、共享资源的网络。与局域网相比，广域网的传输速度相对要慢的多。在线路连接形式上有电话线、专线等几种。在人们的思想中总认为WAN与LAN的区别在，WAN是一种通过电话线路来实现地理位置相隔很远的异地间进行通信的网络。但随着通信技术与网络技术的发展，这个定义已经不再确切，相应地人们将逐步淡化WAN与LAN之间的界限，也可以说是将异地的局域网连在一起便形成广域网。
ADSL 是让用户连上WAN, 它的连接方式是通过电话线(line)来完成的, 所以我们可以认为路由器的LAN出口(3-4个,通过其它方式转换可以更多)是LAN, 而电话线一端是WAN.</p>
<p>我们所上的internet就是WAN上的一种服务.WAN是广域网，就是我们通常所说的Internet，它是一个遍及全世界的网络。 LAN是局域网，相对于WAN而言，主要是指在小范围内的计算机互联网络。这个“小范围”可以是一个家庭，一所学校，一家公司，或者是一个政府部门。 广域网上的每一台电脑（或其他网络设备）都有一个或多个广域网IP地址，广域网IP地址一般要到ISP处交费之后才能申请到，广域网IP地址不能重复；局域网上的每一台电脑（或其他网络设备）都有一个或多个局域网IP地址，局域网IP地址是局域网内部分配的，不同局域网的IP地址可以重复，不会相互影响。广域网与局域网电脑交换数据要通过路由器或网关的NAT（网络地址转换）进行。一般说来，局域网内电脑发起的对外连接请求，路由器或网关都不会加以阻拦，但来自广域网对局域网内电脑电脑连接的请求，路由器或网关在绝大多数情况下都会进行拦截.这就会出现有的路由器支持WAN，有的支持LAN。</p>
<h3 id="_44-hadoop有什么用" tabindex="-1"><a class="header-anchor" href="#_44-hadoop有什么用" aria-hidden="true">#</a> 44.hadoop有什么用？</h3>
<p>Hadoop是一个由Apache基金会所开发的<a href="https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/4905336" target="_blank" rel="noopener noreferrer">分布式系统<ExternalLinkIcon/></a>基础架构。用户可以在不了解分布式底层细节的情况下，开发分布式程序。充分利用集群的威力进行高速运算和存储。Hadoop实现了一个<a href="https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/1250388" target="_blank" rel="noopener noreferrer">分布式文件系统<ExternalLinkIcon/></a>（ Distributed File System），其中一个组件是<a href="https://baike.baidu.com/item/HDFS/4836121" target="_blank" rel="noopener noreferrer">HDFS<ExternalLinkIcon/></a>（Hadoop Distributed File System）。HDFS有高<a href="https://baike.baidu.com/item/%E5%AE%B9%E9%94%99%E6%80%A7/9131391" target="_blank" rel="noopener noreferrer">容错性<ExternalLinkIcon/></a>的特点，并且设计用来部署在低廉的（low-cost）硬件上；而且它提供高吞吐量（high throughput）来访问<a href="https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F/5985445" target="_blank" rel="noopener noreferrer">应用程序<ExternalLinkIcon/></a>的数据，适合那些有着超大数据集（large data set）的应用程序。HDFS放宽了（relax）<a href="https://baike.baidu.com/item/POSIX/3792413" target="_blank" rel="noopener noreferrer">POSIX<ExternalLinkIcon/></a>的要求，可以以流的形式访问（streaming access）文件系统中的数据。Hadoop的框架最核心的设计就是：<a href="https://baike.baidu.com/item/HDFS/4836121" target="_blank" rel="noopener noreferrer">HDFS<ExternalLinkIcon/></a>和<a href="https://baike.baidu.com/item/MapReduce/133425" target="_blank" rel="noopener noreferrer">MapReduce<ExternalLinkIcon/></a>。HDFS为海量的数据提供了存储，而MapReduce则为海量的数据提供了计算</p>
<h3 id="_45-mysql的主从复制原理" tabindex="-1"><a class="header-anchor" href="#_45-mysql的主从复制原理" aria-hidden="true">#</a> 45.mysql的主从复制原理？</h3>
<p>配置的话主要是开启主服务器上的二进制日志，在主服务器和从服务器上分别进行简单的配置和授权就可以了。</p>
<p>MySQL的主从复制是依据主服务器的二进制日志进行的，也就是说主服务器日志中记录的操作会在从服务器上进行重放，从而实现复制，所以主服务器必须开启二进制日志，它会自动记录所有对数据库产生更新的操作，也包括潜在的更新操作，比如没有删除任何实际记录的DELETE操作。</p>
<p>这种复制是异步进行的，从服务器定时向主服务器请求最新日志，而主服务器只需要通过一个I/O线程来读取本地二进制日志，并输送给从服务器即可，所以，复制过程对于主服务器的影响非常有限。但是，当存在多个从服务器同时从一个主服务器进行复制的时候，主服务器的磁盘压力会有不同程度的增长，这也并不是无法解决的，你可以采用多级复制策略，就像前面提到的多级分发一样。</p>
<h3 id="_46-分库-分区-分表-水平分区-垂直分区有啥区别" tabindex="-1"><a class="header-anchor" href="#_46-分库-分区-分表-水平分区-垂直分区有啥区别" aria-hidden="true">#</a> 46.分库，分区，分表，水平分区，垂直分区有啥区别？</h3>
<p>分库是把不同的数据库分布在不同的服务器上。</p>
<p>分区是把一个数据库的一个表中的数据，按照算法规律分布到不同的服务器上。</p>
<p>分表是针对单个服务器的，对单个服务器上的某个表进行拆分表，分出来的表都还在这个服务器上。以后各个表数据多了，还能直接进行分区。</p>
<p>水平分区：是把一个表中的数据，按行分到不同服务器上或者不同表中。</p>
<p>垂直分区：把一个数据库的不同表分到不同的服务器上。</p>
<p>分区的字段一般使用主键或者外键，并且不能自增</p>
<h3 id="_12-优化mysql数据库的方法。-重点" tabindex="-1"><a class="header-anchor" href="#_12-优化mysql数据库的方法。-重点" aria-hidden="true">#</a> 12.<strong>优化MYSQL数据库的方法。(重点)</strong></h3>
<p>答:</p>
<p><strong>(1)、选取最适用的字段属性,尽可能减少定义字段长度,尽量把字段设置NOT NULL,例如'省份,性别',最好设置为ENUM</strong></p>
<p><strong>(2)、使用连接（JOIN）来代替子查询:</strong></p>
<p>a.删除没有任何订单客户:DELETE FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)</p>
<p>b.提取所有没有订单客户:SELECT FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)</p>
<p>c.提高b的速度优化:SELECT FROM customerinfo LEFT JOIN orderid customerinfo.customerid=orderinfo.customerid</p>
<p>WHERE orderinfo.customerid IS NULL</p>
<p><strong>（3）、使用联合(UNION)来代替手动创建的临时表</strong></p>
<p>a.创建临时表:SELECT name FROM <code v-pre>nametest</code> UNION SELECT username FROM <code v-pre>nametest2</code></p>
<p><strong>（4）、事务处理:</strong></p>
<p>a.保证数据完整性,例如添加和修改同时,两者成立则都执行,一者失败都失败</p>
<p>​         mysql_query(&quot;BEGIN&quot;);</p>
<p>​     mysql_query(&quot;INSERT INTO customerinfo (name) VALUES ('$name1')&quot;;</p>
<p>​     mysql_query(&quot;SELECT * FROM <code v-pre>orderinfo</code> where customerid=&quot;.$id&quot;);</p>
<p>​     mysql_query(&quot;COMMIT&quot;);</p>
<p><strong>(5)、锁定表,优化事务处理:</strong></p>
<p>a.我们用一个 SELECT 语句取出初始数据，通过一些计算，用 UPDATE 语句将新值更新到表中。</p>
<p>包含有 WRITE 关键字的 LOCK TABLE 语句可以保证在 UNLOCK TABLES 命令被执行之前，</p>
<p>不会有其它的访问来对 inventory 进行插入、更新或者删除的操作</p>
<p>​     mysql_query(&quot;LOCK TABLE customerinfo READ, orderinfo WRITE&quot;);</p>
<p>​     mysql_query(&quot;SELECT customerid FROM <code v-pre>customerinfo</code> where id=&quot;.$id);</p>
<p>​     mysql_query(&quot;UPDATE <code v-pre>orderinfo</code> SET ordertitle='$title' where customerid=&quot;.$id);</p>
<p>​     mysql_query(&quot;UNLOCK TABLES&quot;);</p>
<p><strong>(6)、使用外键,优化锁定表</strong></p>
<p>a.把customerinfo里的customerid映射到orderinfo里的customerid,</p>
<p>任何一条没有合法的customerid的记录不会写到orderinfo里</p>
<p>​      CREATE TABLE customerinfo</p>
<p>​      (</p>
<p>​        customerid INT NOT NULL,</p>
<p>​        PRIMARY KEY(customerid)</p>
<p>​      )TYPE = INNODB;</p>
<p>​      CREATE TABLE orderinfo</p>
<p>​      (</p>
<p>​        orderid INT NOT NULL,</p>
<p>​        customerid INT NOT NULL,</p>
<p>​        PRIMARY KEY(customerid,orderid),</p>
<p>​        FOREIGN KEY (customerid) REFERENCES customerinfo</p>
<p>​        (customerid) ON DELETE CASCADE</p>
<p>​      )TYPE = INNODB;</p>
<p>​      注意:'ON DELETE CASCADE',该参数保证当customerinfo表中的一条记录删除的话同时也会删除order</p>
<p>​      表中的该用户的所有记录,注意使用外键要定义事务安全类型为INNODB;</p>
<p><strong>(5)、建立索引:</strong></p>
<p>a.格式:</p>
<p>​      (普通索引)-&gt;</p>
<p>​      创建:CREATE INDEX &lt;索引名&gt; ON tablename (索引字段)</p>
<p>​      修改:ALTER TABLE tablename ADD INDEX [索引名] (索引字段)</p>
<p>​      创表指定索引:CREATE TABLE tablename([...],INDEX<a href="%E7%B4%A2%E5%BC%95%E5%AD%97%E6%AE%B5">索引名</a>)</p>
<p>​      (唯一索引)-&gt;</p>
<p>​      创建:CREATE UNIQUE &lt;索引名&gt; ON tablename (索引字段)</p>
<p>​      修改:ALTER TABLE tablename ADD UNIQUE [索引名] (索引字段)</p>
<p>​      创表指定索引:CREATE TABLE tablename([...],UNIQUE<a href="%E7%B4%A2%E5%BC%95%E5%AD%97%E6%AE%B5">索引名</a>)</p>
<p>​      (主键)-&gt;</p>
<p>​      它是唯一索引,一般在创建表是建立,格式为:</p>
<p>​      CREATA TABLE tablename ([...],PRIMARY KEY[索引字段])</p>
<p>(6)、优化查询语句</p>
<p>a.最好在相同字段进行比较操作,在建立好的索引字段上尽量减少函数操作</p>
<p>​    例子1:</p>
<p>​      SELECT * FROM order WHERE YEAR(orderDate)&lt;2008;(慢)</p>
<p>​      SELECT * FROM order WHERE orderDate&lt;&quot;2008-01-01&quot;;(快)</p>
<p>​    例子2:</p>
<p>​      SELECT * FROM order WHERE addtime/7&lt;24;(慢)</p>
<p>​      SELECT * FROM order WHERE addtime&lt;24*7;(快)</p>
<p>​    例子3:</p>
<p>​      SELECT * FROM order WHERE title like &quot;%good%&quot;;</p>
<p>​      SELECT * FROM order WHERE title&gt;=&quot;good&quot; and name&lt;&quot;good&quot;;</p>
<h3 id="_16-对于大流量的网站-您采用什么样的方法来解决访问量问题-重点" tabindex="-1"><a class="header-anchor" href="#_16-对于大流量的网站-您采用什么样的方法来解决访问量问题-重点" aria-hidden="true">#</a> 16.<strong>对于大流量的网站,您采用什么样的方法来解决访问量问题?(重点)</strong></h3>
<p>答:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>首先，确认服务器硬件是否足够支持当前的流量
其次，优化数据库访问。
第三，禁止外部的盗链。
第四，控制大文件的下载。
第五，使用不同主机分流主要流量
第六，使用流量分析统计软件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-11" tabindex="-1"><a class="header-anchor" href="#-11" aria-hidden="true">#</a> </h4>
<h3 id="_47-linux查看系统状态和负载情况的命令" tabindex="-1"><a class="header-anchor" href="#_47-linux查看系统状态和负载情况的命令" aria-hidden="true">#</a> 47.linux查看系统状态和负载情况的命令？</h3>
<p>系统状态：cat   /proc/meminfo</p>
<p>负载：cat  /proc/loadavg</p>
<p>核心表达:</p>
<ol>
<li>人品正</li>
<li>技术够</li>
<li>不怕困难,敢担责任</li>
</ol>
<p>细节:</p>
<ol>
<li>建议简历生成PDF.</li>
<li>标题 孙小贱-PHP工程师-简历</li>
<li>爱好: 团队合作/竞争/毅力</li>
<li>崇拜: 具体/正面(中性,科技/明星/体育.忌负面,政治人物)</li>
<li>失败: 想考察有没有反思.例竞选失败,准备不够充分.(忌推责任,领导锤子,公司太抠...)</li>
<li>能接受加班吗(可以,和公司共同成长,我也会努力提高的工作效率,争取让自己更快的完成工作)</li>
<li>优缺: 优点自己表达. 缺点(忌:人格性的缺陷,如贪财,无诚信;工作上的,Linux不好).最后要能反思缺点,改进</li>
<li>职业规划: (PHP是根基) 前走HTML5前端/ 深挖PHP,源码扩展级别 /后走,运维</li>
<li>了解公司: 业务/团队/技术/行业排名</li>
<li>我们想要有工作经验的:
a) 我有项目经验,这些项目涵盖web常用功能,我相信能胜任这个岗位.
b) 我建议从技术方面对我进行考察,甚至是严格的考察,我相信我能通过技术证明自己.
c) 我也会加倍的努力,来弥补工作经验上的不足.</li>
<li>录用的理由: a) 技术能胜任.b) 有决心去全力做这个份工作.</li>
<li>不要谦虚.</li>
<li>你有什么问题: 可以询问职业发展空间,技术leaer的情况</li>
</ol>
<p>学员心态:</p>
<ol start="0">
<li>
<p>招聘要求1-3年/3年以上工作经验怎么办?
答: 投!
公司只是想 花小钱,买大牛,并非真的限制死这个条件.</p>
</li>
<li>
<p>工作不会做,做不出来怎么办?
答: 只见过面试失败的, 没见过面试通过后,做不出来的.</p>
</li>
</ol>
<ul>
<li>对方面试通过你,就说明你的水平符合这个岗位的难度.</li>
<li>工作中必然有难度,难度必然能解决(岗位虽难,但不会难出你水平的2倍以上,一般只是恰比自己的水平深一点. 同时,我们同学群,有同学,有老师,有搜索引擎,有手册)</li>
<li>岗位也必须比自己的水平高一点,我们才能进步.</li>
</ul>
<ol start="2">
<li>
<p>程序员有没有年龄的限制
答: 年龄肯定是一个影响因素,但不是绝对.</p>
</li>
<li>
<p>大公司是否对学历有要求
答: 学历锦上添花,有更好. 对于社招,学历的权重相对较低.</p>
</li>
<li>
<p>有没有算法/数据结构
答: 这一块相对较弱,学习的时候重心是在PHP编程这一块.
之前也下载过一些教程,如果工作需要,我也会认真去筹备学习.</p>
</li>
<li>
<p>你对薪资的要求
答: 一定要干脆,简短,自信,明确说.
例:我对自己的定位在8-12K.
忌: 扔给对方--你们能给多少.
没有明确数字--我觉得工资不重要.</p>
</li>
<li>
<p>接上,如果技术对你挺满意,但是工资给不到.
答: 我现在处于技术的积累和上升阶段,如果技术团队氛围好的好,也是可以接受的.</p>
</li>
<li>
<p>能否接受出差?
答: 坦诚布公,根据自己的情况来,比如单身狗,全国走.</p>
</li>
</ol>
<p>面试的时候经常被HR的问题唬住，经常被问的非常尴尬甚至不知道如何回答。以下是常见的HR尖锐问题以及参考回答，望有助于你解决面试困扰。</p>
<h2 id="问题一-你有什么业余爱好" tabindex="-1"><a class="header-anchor" href="#问题一-你有什么业余爱好" aria-hidden="true">#</a> 问题一：“你有什么业余爱好？”</h2>
<p>面试官提问目的：考核求职的性格、三观、心态、思维的深度等。通常专业的面试官为了获得深层次的答案会进一步提出问题，比如，求职者说喜欢看书，HR可能继续问：“看哪一类书（千万不要说火隐忍者或者海贼王），最喜欣赏哪一位作家？这个作家的哪一本书你印象最深刻？这本书对你最大的帮助是什么？你能用3分钟把这本书推荐给我吗？”通常能够完整回答的求职者可谓凤毛麟角。
求职者可以这样做：1、面试准备；2、 切忌说自己没有业余爱好。；3、 切忌说低趣味的不入流的爱好。</p>
<h2 id="问题二-谈谈你的优缺点" tabindex="-1"><a class="header-anchor" href="#问题二-谈谈你的优缺点" aria-hidden="true">#</a> 问题二：“谈谈你的优缺点”</h2>
<p>HR的目的是：了解应聘者是否进行过自我反思、自我剖析、甚至自我总结。
每个人的精力是有限的，当一个人能正视自己的优缺点，，对工作帮助将会非常大。尤其是善于扬长避短的人，不断的挖掘自己的优势，正视自己的不足，在工作中提升，不仅自己能成长，也能帮助公司进步。
求职者：1、针对岗位要求，展开一两项优点，用实例证明；2、 绝对不要说自己无缺点。人无完人，任何人都有缺点。3、对缺点的阐述一条足矣，同时坚决不要提关系岗位要求的缺点。 4、简单分析自我缺点，强调你会极力克服。</p>
<h2 id="问题三-介绍你一次最失败的一次经历" tabindex="-1"><a class="header-anchor" href="#问题三-介绍你一次最失败的一次经历" aria-hidden="true">#</a> 问题三：“介绍你一次最失败的一次经历”</h2>
<p>HR的目的是：了解是否经历过困难的磨练，对困难的认知，是否培养正确的处世观。
求职者可以这样做： 1、 找一次失败的经历阐述；2、强调当时对困难的认知不足，有盲目自信的嫌疑； 3、 这一次经历对自己的影响； 4、分析失败的原因，对你成长的帮助。</p>
<h2 id="问题四-为什么应聘我们公司" tabindex="-1"><a class="header-anchor" href="#问题四-为什么应聘我们公司" aria-hidden="true">#</a> 问题四：“为什么应聘我们公司？”</h2>
<p>HR的目的：判断求职者的求职动机、求职主动性以及对待公司的态度。
每一个面试官都希望求职者对自己公司十分了解，并且渴望加入。
求职者可以这么做：1、 先从行业开始入手、接着谈公司，最后结合岗位阐述自己的应聘理由。 2、 例如：XX行业现在是如日中天，我一直喜欢这个行业，现在国家也在扶持这个行业，未来会有很多发展机会；贵公司在行业中声名远播，xx产品我从大学时代就开始使用，非常喜欢；我是xx专业的，大学期间参加过xx实践，对xx技能有一定的把握（此前在xx公司xx岗位工作过，在xx方面有很好经历，熟悉xx技能），非常适合xx岗位。我相信自己一定能胜任岗位。”</p>
<h2 id="问题五-这份工作你有想过会面对哪些困难吗" tabindex="-1"><a class="header-anchor" href="#问题五-这份工作你有想过会面对哪些困难吗" aria-hidden="true">#</a> 问题五：“这份工作你有想过会面对哪些困难吗？”</h2>
<p>HR的目的：考察求职者的专业性、全局观。
切记回答：有！然后就没有了，等面试官再次发问才继续回答。
求职者可以这样做： 1、 从专业、技能、经验等方面评估可能遇到的困难；2、一定要强调自己对困难持积极态度；3、告诉面试官自己一定可以解决这些困难；4、如何解决。
如某公关公司的活动执行，可以说：“1、客户的要求不合理，导致方案延迟；2、由于方案延迟导致时间延期；3、场地费用等造成浪费。通常需要在沟通环节做到耐心细致，尽可能的引导客户按照事先约定的方案走，遇到客户挑剔要及时处理。并且养成邮件抄送的习惯，必要是拿出邮件作为证据等。最后强调任何工作都会遇到各种不可预测的困难，但自己的性格就是喜欢解决这些困难，尤其是在团队协作中，找到解决问题的办法。”</p>
<h2 id="问题六-如果你发现上司做错了-你将怎么办" tabindex="-1"><a class="header-anchor" href="#问题六-如果你发现上司做错了-你将怎么办" aria-hidden="true">#</a> 问题六：“如果你发现上司做错了，你将怎么办？”</h2>
<p>HR的目的：考核求职者的职业性、危机处理能力、沟通协调能力、以及人际关系。
求职者可以这样说： 1、先要判断这个错误是什么性质的，如果是小错误，委婉指出来。比如说，领导，某个问题是不是这样做更好呢？或者说xx事不会出什么问题吧？暗示性的提醒领导！当然作为新人，估计发现不了什么大错误；2、如果真有，肯定是以公司利益为重，相信公司也会有这样的机制或者流程的，我按照公司的流程走。
（暗示性的一般效果都不错，按照流程走，这个就是戳HR的死穴，没有hr会承认自己的公司制度不健全的，如果你回答其他的，估计都是错）</p>
<h2 id="问题七-公司为什么要聘用你" tabindex="-1"><a class="header-anchor" href="#问题七-公司为什么要聘用你" aria-hidden="true">#</a> 问题七：“公司为什么要聘用你？”</h2>
<p>HR的目的：考核求职者换位思考的能力，能否站在公司的立场考虑问题，也进一步考核求职者对岗位和自我的认知程度。
任何公司都希望找到一个符合岗位要求的人，同时也希望求职者对公司有足够的了解。
求职者可以这样做：1、根据岗位要求和面试官之前的问题分析岗位需要什么样的人；2、强调自己基本符合要求；3、强调自己非常想加入公司，恭维公司；4、可以说如果我应聘成功，我将带给公司带来什么（具体结合岗位和个人说）。
具体说法参考：“我认为公司需要一个xx的人。我具备xx能力，符合公司的岗位要求，我非常期待能加入公司，通过自己的努力与公司一起成长。成为公司xx领域未来的专家！”</p>
<h2 id="问题八-作为一名应届毕业生-你将如何胜任工作" tabindex="-1"><a class="header-anchor" href="#问题八-作为一名应届毕业生-你将如何胜任工作" aria-hidden="true">#</a> 问题八：“作为一名应届毕业生，你将如何胜任工作？”</h2>
<p>HR的目的：这是典型的下马威题，也算是简单的压力面试。重点考核的是求职者的心态，有无胜任工作的思路和自信度，以及责任心。
求职者可以这样做：1、正视自己没有经验，但这并不是劣势。2、集合岗位要求强调自己的能力以及责任心；3、强调自己是潜力股。
如：“的确如您所说我确实欠缺经验，但这也会是我的优势，我会毫无保留的学习，投入我的热情。大学期间我争取到两次机会在这个行业里实习。结合理论知识，通过实践积累一定的经验，诚然这经验不足以和工作过的人比，但我确定喜欢这份工作，我做了充足的准备。同时我的责任心和学习能力以及较勤奋，会帮助我更好的胜任岗位，请您放心，我一定能胜任这个职位，和公司一起成长。”</p>
<h2 id="问题九-你希望什么样的上司" tabindex="-1"><a class="header-anchor" href="#问题九-你希望什么样的上司" aria-hidden="true">#</a> 问题九：“你希望什么样的上司？”</h2>
<p>HR的目的：测试求职者的性格以及工作态度。
典型的问题陷阱，但是回答好肯定加分。
求职者应该这样做：1、避开希望，直接强调自己的不足，希望获得领导的帮助，和公司一起成长。 2、同时强调自己快速适应环境，努力做好岗位职责，期待为公司创造价值。</p>
<h2 id="问题十-上一家公司的离职原因" tabindex="-1"><a class="header-anchor" href="#问题十-上一家公司的离职原因" aria-hidden="true">#</a> 问题十：“上一家公司的离职原因？”</h2>
<p>HR的目的：考核求职者的求职动机以及求职心态。
切忌回答原来的公司不好，原来的主管不好。面试官会假设自己的立场，如果你说领导不好，未来自己是不是也这样被你说。
求职者可以这样做：1、多找客观原因，比如公司解散、拖欠工资、发展不顺等；2、千万不要说主观情绪感受：加班严重、人际关系混乱、竞争大、业绩高、领导不好、干的不开心等 3、切忌说想换换环境、不想干这种随意答案； 4、主观上可说：职业发展停滞，急需更好的发展机会，恭维一下现在应聘的公司。 5、记得感谢你的前任雇主。
如“主要是因为这家公司项目重组，我被调到其他部门，不擅长，还是希望做原来的职位。当然我在公司工作4年，领导对我非常好，和同事关系也不错，离开非常不舍。但我还是想继续做原来擅长的事务，所以期待加入贵公司。”</p>
<p>我要说的是，问题是死的，参考答案也是死的，关键是如何灵活运用。说到灵活运用，不得不说，企业的需求就是希望能找到一个胜任自己岗位的人，所有的问题都不是在刁难你，只为帮助你去胜任这个职位。基于这点，求职者的答案一定围绕着我能胜任这个岗位，我是最合适的人选，我具备岗位要求的能力这些点来回答。这样的话你就不觉得问题是在刁难，你也能清楚该说什么不该说什么。同时一定要认可你现在应聘的公司，表现出你非常想加入。
关于个性和共性，公司是一个集体，所以招聘的时候，HR通过问题了解求职者的个性，目的是看看是不是适合企业的氛围，相对来说任何企业都需要礼貌谦逊上进的人，所有有一些特主观的个性尽量收敛，因为如果有妨碍的工作和企业氛围，面试会减分。
最后对于女性经常关注的问题，你是不是有男朋友，什么时候会结婚？这个问题企业只想判断自己的招聘风险，毕竟短时间内女性结婚，那么很多企业会觉得很麻烦。所以这个时候尽量降低企业的顾虑，只需要回答暂时没有这方面的计划！</p>
<p>问题1：你为什么想离开目前的职务?</p>
<p>A.别的同仁认为我是老板前的红人，所以处处排挤我。</p>
<p>B.调薪的结果令我十分失望，完全与我的付出不成正比。</p>
<p>C.老板不愿授权，工作处处受限，绑手绑脚、很难做事。</p>
<p>D.公司营运状况不佳，大家人心惶惶。</p>
<p>解答：超过一半的人事主管选择C，其次为D。选择C的回答，可以显示应征者的企图心、能力强，且希望被赋予更多的职责。选择D，则是因离职原因为个人无法改变的客观外在因素，因此，面谈者也就不会对个人的能力或工作表现，有太多的存疑。</p>
<p>问题2：你对我们公司了解有多少?</p>
<p>A.贵公司在去年里，长达8个月的时间，都高居股王的宝座。</p>
<p>B.贵公司连续3年被XX杂志评选为“求职者最想进入的企业”的第一名。</p>
<p>C.不是很清楚，能否请您做些介绍。</p>
<p>D.贵公司有意改变策略，加强与国外大厂的OEM合作，自有品牌的部分则透过海外经销商。</p>
<p>解答：以D居多。道理很简单，他们希望求职者对所申请的工作有真正的了解，而不仅仅是慕名而来。</p>
<p>问题3：你找工作时，最重要的考虑因素为何?</p>
<p>A.公司的远景及产品竞争力。</p>
<p>B.公司对员工生涯规划的重视及人性化的管理。</p>
<p>C.工作的性质是否能让我发挥所长，并不断成长。</p>
<p>D.合理的待遇及主管的管理风格。</p>
<p>解答：以C居多，因为公司要找工作表现好、能够真正有贡献的人，而非纯粹慕名、求利而来的人。</p>
<p>问题4：为什么我们应该录取你?</p>
<p>A.因为我深信我比别人都优秀。</p>
<p>B.因为我有很强烈的企图心，想要与贵公司共同成长。</p>
<p>C.您可以由我过去的工作表现所呈现的客观数据，明显地看出我全力以赴的工作态度。</p>
<p>D.我在这个产业已耕耘了8年，丰富的人脉是我最大的资产。</p>
<p>解答：这题理想的回答是C。你如何让对方看到你的好?单凭口才，是很难令对方信服的，因此，从履历表内容或之前的回答内容中，如果能以客观数字、具体的工作成果，来辅助说明，是最理想的回答。</p>
<p>问题5：请谈谈你个人的最大特色。</p>
<p>A.我人缘极佳，连续3年担任福委会委员。</p>
<p>B.我的坚持度很高，事情没有做到一个令人满意的结果，绝不罢手。</p>
<p>C.我非常守时，工作以来，我从没有迟到过。</p>
<p>D.我的个性很随和，是大家公认的好好先生(小姐)。</p>
<p>解答：这题理想的回答是B。A、C、D虽然都表示出应征者个性上的优点，但只有B的回答，最能和工作结合，能够与工作表现相结合的优点、特质，才是面谈者比较感兴趣的回答。</p>
<p>问题6：“请你自我介绍一下”</p>
<p>思路：1、这是面试的必考题目。</p>
<p>2、介绍内容要与个人简历相一致。</p>
<p>3、表述方式上尽量口语化。</p>
<p>4、要切中要害，不谈无关、无用的内容。</p>
<p>5、条理要清晰，层次要分明。6、事先最好以文字的形式写好背熟。</p>
<p>问题7：“谈谈你的家庭情况”</p>
<p>思路：1、况对于了解应聘者的性格、观念、心态等有一定的作用，这是招聘单位问该问题的主要原因。</p>
<p>2、简单地罗列家庭人口。</p>
<p>3、宜强调温馨和睦的家庭氛围。</p>
<p>4、宜强调父母对自己教育的重视。</p>
<p>5、宜强调各位家庭成员的良好状况。</p>
<p>6、宜强调家庭成员对自己工作的支持。</p>
<p>7、宜强调自己对家庭的责任感。</p>
<p>问题8：“你有什么业余爱好?”</p>
<p>思路：1、业余爱好能在一定程度上反映应聘者的性格、观念、心态，这是招聘单位问该问题的主要原因。</p>
<p>2、最好不要说自己没有业余爱好。</p>
<p>3、不要说自己有那些庸俗的、令人感觉不好的爱好。</p>
<p>4、最好不要说自己仅限于读书、听音乐、上网，否则可能令面试官怀疑应聘者性格孤僻。</p>
<p>5、最好能有一些户外的业余爱好来“点缀”你的形象。</p>
<p>问题9：“你最崇拜谁?”</p>
<p>思路：1、最崇拜的人能在一定程度上反映应聘者的性格、观念、心态，这是面试官问该问题的主要原因。</p>
<p>2、不宜说自己谁都不崇拜。</p>
<p>3、不宜说崇拜自己。</p>
<p>4、不宜说崇拜一个虚幻的、或是不知名的人。</p>
<p>5、不宜说崇拜一个明显具有负面形象的人。</p>
<p>6、所崇拜的人人最好与自己所应聘的工作能“搭”上关系。</p>
<p>7、最好说出自己所崇拜的人的哪些品质、哪些思想感染着自己、鼓舞着自己。</p>
<p>问题10：“你的座右铭是什么?”</p>
<p>思路：1、座右铭能在一定程度上反映应聘者的性格、观念、心态，这是面试官问这个问题的主要原因。</p>
<p>2、不宜说那些引起不好联想的座右铭。</p>
<p>3、不宜说那些太抽象的座右铭。</p>
<p>4、不宜说太长的座右铭。</p>
<p>5、座右铭最好能反映出自己某种优秀品质。</p>
<p>6、参考答案“只为成功找方法，不为失败找借口”</p>
<p>问题11：“谈谈你的缺点”</p>
<p>思路：1、不宜说自己没缺点。</p>
<p>2、不宜把那些明显的优点说成缺点。</p>
<p>3、不宜说出严重影响所应聘工作的缺点。</p>
<p>4、不宜说出令人不放心、不舒服的缺点。</p>
<p>5、可以说出一些对于所应聘工作“无关紧要”的缺点，甚至是一些表面上看是缺点，从工作的角度看却是优点的缺点.</p>
<p>问题12：“谈一谈你的一次失败经历”</p>
<p>思路：1、不宜说自己没有失败的经历。</p>
<p>2、不宜把那些明显的成功说成是失败。</p>
<p>3、不宜说出严重影响所应聘工作的失败经历。</p>
<p>4、所谈经历的结果应是失败的。</p>
<p>5、宜说明失败之前自己曾信心白倍、尽心尽力。</p>
<p>6、说明仅仅是由于外在客观原因导致失败。</p>
<p>7、失败后自己很快振作起来，以更加饱满的热情面对以后的工作。</p>
<p>问题13：“你为什么选择我们公司?”</p>
<p>思路：1、面试官试图从中了解你求职的动机、愿望以及对此项工作的态度。</p>
<p>2、建议从行业、企业和岗位这三个角度来回答。</p>
<p>3、参考答案“我十分看好贵公司所在的行业，我认为贵公司十分重视人才，而且这项工作很适合我，相信自己一定能做好。”</p>
<p>问题14：“如果我录用你，你将怎样开展工作”</p>
<p>思路：1、如果应聘者对于应聘的职位缺乏足够的了解，最好不要直接说出自己开展工作的具体办法，</p>
<p>2、可以尝试采用迂回战术来回答，如“首先听取领导的指示和要求，然后就有关情况进行了解和熟悉，接下来制定一份近期的工作计划并报领导批准，最后根据计划开展工作。”</p>
<p>问题15：“与上级意见不一是，你将怎么办?”</p>
<p>思路：1、一般可以这样回答“我会给上级以必要的解释和提醒，在这种情况下，我会服从上级的意见。”</p>
<p>2、如果面试你的是总经理，而你所应聘的职位另有一位经理，且这位经理当时不在场，可以这样回答：“对于非原则性问题，我会服从上级的意见，对于涉及公司利益的重大问题，我希望能向更高层领导反映。”“应届毕业生缺乏经验，如何能胜任工作?”</p>
<p>问题16：“我们为什么要录用你?”</p>
<p>思路：1、应聘者最好站在招聘单位的角度来回答。</p>
<p>2、招聘单位一般会录用这样的应聘者：基本符合条件、对这份共组感兴趣、有足够的信心。</p>
<p>3、如“我符合贵公司的招聘条件，凭我目前掌握的技能、高度的责任感和良好的饿适应能力及学习能力，完全能胜任这份工作。我十分希望能为贵公司服务，如果贵公司给我这个机会，我一定能成为贵公司的栋梁!”</p>
<p>问题17：“你能为我们做什么?”</p>
<p>思路：1、基本原则上“投其所好”。</p>
<p>2、回答这个问题前应聘者最好能“先发制人”，了解招聘单位期待这个职位所能发挥的作用。</p>
<p>3、应聘者可以根据自己的了解，结合自己在专业领域的优势来回答这个问题。</p>
<p>问题18：“你是应届毕业生，缺乏经验，如何能胜任这项工作?”</p>
<p>思路：1、如果招聘单位对应届毕业生的应聘者提出这个问题，说明招聘单位并不真正在乎“经验”，关键看应聘者怎样回答。</p>
<p>2、对这个问题的回答最好要体现出应聘者的诚恳、机智、果敢及敬业。</p>
<p>3、如“作为应届毕业生，在工作经验方面的确会有所欠缺，因此在读书期间我一直利用各种机会在这个行业里做兼职。我也发现，实际工作远比书本知识丰富、复杂。但我有较强的责任心、适应能力和学习能力，而且比较勤奋，所以在兼职中均能圆满完成各项工作，从中获取的经验也令我受益非浅。请贵公司放心，学校所学及兼职的工作经验使我一定能胜任这个职位。”</p>
<p>问题19：“你希望与什么样的上级共事?”</p>
<p>思路：1、通过应聘者对上级的“希望”可以判断出应聘者对自我要求的意识，这既上一个陷阱，又上一次机会。</p>
<p>2、最好回避对上级具体的希望，多谈对自己的要求。</p>
<p>3、如“做为刚步入社会新人，我应该多要求自己尽快熟悉环境、适应环境，而不应该对环境提出什么要求，只要能发挥我的专长就可以了。”</p>
<p>问题20：“您在前一家公司的离职原因是什么?”</p>
<p>思路：1、最重要的是：应聘者要使找招聘单位相信，应聘者在过往的单位的“离职原因”在此家招聘单位里不存在。</p>
<p>2、避免把“离职原因”说得太详细、太具体。</p>
<p>3、不能掺杂主观的负面感受，如“太幸苦”、“人际关系复杂”、“管理太混乱”、“公司不重视人才”、“公司排斥我们某某的员工”等。</p>
<p>4、但也不能躲闪、回避，如“想换换环境”、“个人原因”等。</p>
<p>5、不能涉及自己负面的人格特征，如不诚实、懒惰、缺乏责任感、不随和等。</p>
<p>6、尽量使解释的理由为应聘者个人形象添彩。</p>
<p>7、如“我离职是因为这家公司倒闭。我在公司工作了三年多，有较深的感情。从去年始，由于市场形势突变，公司的局面急转直下。到眼下这一步我觉得很遗憾，但还要面对，重新寻找能发挥我能力的舞台。”同一个面试问题并非只有一个答案，而同一个答案并不是在任何面试场合都有效，关键在于应聘者掌握了规律后，对面试的具体情况进行把握，有意识地揣摩面试官提出问题的心理背景，然后投其所好。</p>
</div></template>

<script>
var a = $('#main').children('span').first().html();
alert(a);
</script>

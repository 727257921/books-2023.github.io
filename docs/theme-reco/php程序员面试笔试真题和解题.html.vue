<template><div><p>1.PHP无法实现什么功能?</p>
<p>​		答案：首先，由于PHP是一种跨平台、开源的服务端嵌入式脚本语言，因此它主要用来开发B/S架构的网站，而对于用C/C++做的.exe文件和桌面应用程序，PHP无法实现。其次，对于Android和iOS操作系统的手机软件，PHP也无法实现，但可以使用PHP做Android手机应用的服务端，并提供API接口开发。</p>
<ol start="2">
<li>
<p>PHP 是一种________脚本语言，它基于___引擎。PHP最常被用来开发动态的__________内容，此外，它同样还可被用来生成___（以及其他）文档。</p>
<p>​	嵌入式，Zend，HTML，XML</p>
</li>
<li>
<p>请说出PHP和其他语言不同的地方，PHP的弱类型是如何实现的?</p>
<p>​	答案：PHP和其他语言的不同地方主要在于PHP是弱类型语言，弱类型语言表达简单易懂、容易学习、开发周期短、更加偏向逻辑设计。然而弱类型语言会出现变量判断麻烦、运行效率低、容易出现缺陷错误（bug）难以调试等问题。</p>
<p>PHP中弱类型的实现主要有以下几点内容：</p>
<p>​	1）变量的数据类型没有限制。弱类型的语言对变量数据类型没有强制限制，反而可以在任何时候将变量赋值给任意类型的变量，同时变量也可以转换成任意类型的数据。</p>
<p>​	2）类型之间随意转换。例如，PHP可以把字符串在判断过程中强制转换为布尔值为真执行，也可以把整型0判断为布尔值的false。</p>
<p>​		由于PHP没有像Java和C语言那么强的数据类型限制，因此PHP的编程没有那么严谨和苛刻，在一些字符串比较中容易出现差错。但是PHP的编程风格更加开放随意，而这也使得PHP更容易学习上手。</p>
</li>
<li>
<p>ASP、PHP、JSP的优缺点分别是什么?</p>
<p>答案：ASP是一门开发服务端的脚本语言，主要用来创建动态交互式网页和建立强大的Web应用程序。它具有以下优点：1）可以动态地编辑、改变或者添加网页的任何内容。2）对用户提交的HTML表单信息作出响应。3）访问数据库并从浏览器中获得返回结果。4）为不同的用户定制网页，提高页面的可用性。5）ASP编写的CGI具有简易性和速度快的特点。6）ASP的代码在浏览器中是不可以查看的，有很好的安全性。与此同时，ASP具有以下的缺点：1）ASP漏洞多，一旦出错，错误信息不利于阅读。2）ASP是一种脚本语言，需要使用大量的组件开发，它没有办法提高自身的工作效率。</p>
<p>​	PHP是一种跨平台开源的服务端嵌入式脚本语言，它吸收了C、Java、Perl的语法，并耦合了自身的PHP特性，主要被用来开发动态网页。它具有以下优点：1）可以支持绝大多数的数据库。例如，MySQL、SQL Server、Oracle等。2）完全开源免费，可以从网上直接下载。3）可在不同的平台上使用开发。例如，Windows、Linux、UNIX、Mac Os X等。4）易于学习，并可高效地运行在服务器端。5）与目前几乎所有的正在被使用的服务器相兼容（如Apache、IIS等）。</p>
<p>​		与此同时，PHP具有以下缺点：1）PHP是单进程的程序，由于PHP的扩展都是用C语言编写的，如果任何一个扩展出现线程竞争资源、控制问题等，那么都能让整个程序出现问题。2）核心异步网络不支持，因为PHP很难开发一个能够承受大并发的网络应用，所以无法完成像实时网络游戏那种需要成千上万网络连接的任务。3）PHP只支持Web动态网页开发，不适合开发.exe文件。4）程序后期维护困难，后期提速空间具有较大局限性。</p>
<p>​	JSP是Sun公司推出的新一代站点开发语言，它弥补了ASP和PHP的不足，是一种全新的动态网页开发技术，它使用JSP标签在HTML网页中插入Java代码。JSP具有以下优点：1）性能优越。JSP可以直接在HTML页面中动态嵌入元素而不需要单独引用CGI文件。2）不需像CGI/Perl那样必须先载入解释器和目标脚本，服务器调用已经编译好的JSP文件。3）JSP拥有各种强大的企业级Java API，包括JDBC、JNDI、EJB、JAXP等。4）JSP页面可以和处理业务逻辑的Servlet一起使用，这种模式被Java Servlet模板引擎所支持。</p>
<p>​	与此同时，JSP具有以下缺点：1）JSP技术极大地增加了产品的复杂性。因为JSP需要和JRE、JDK、J2EE、EJB、JSWDK、JavaBeans等技术有效地组合在一起才有很强的功能，所以部署难度较大，而这也增加了产品的复杂性。2）JSP的高效率运行需要占用大量的内存和硬盘空间。由于Java的高速运行是通过.class文件常驻内存来实现的，它还需要硬盘空间来存储对应的.Java文件和.class类文件，所以需要比较大的内存和硬盘空间来支持。3）JSP程序调试困难。当JSP页面执行时，它会先被转换为.java文件，然后编译环境会将.java文件编译为字节码文件，如果出错，那么最终错误都是指向转换后的.java文件，而不是指向JSP本身。</p>
</li>
<li>
<p>PHP版本有哪些差别?</p>
<p>答案：PHP版本的升级经历了从5.2版本到5.6版本，再从5.6版本直接跳到7.0版本和7.1版本。各个版本之间新增的功能如下：</p>
<p>1）PHP5.2以前版本：autoload、PDO和mysqli，类型约束、JSON支持。</p>
<p>2）PHP5.3版本：新增匿名函数、魔术方法、命名空间、后期静态绑定、heredoc和nowdoc、const、三元运算符等。</p>
<p>3）PHP5.4版本：新增ShortOpenTag、数组简写形式、Traits、内置Web服务器、细节修改等；</p>
<p>4）PHP5.5版本：新增yield、list（)用于foreach、细节修改等。</p>
<p>5）PHP5.6版本：新增常量增强、可变函数参数、命名空间增强等；</p>
<p>6）PHP7.0版本：新增空合并运算符、变量类型声明、返回值类型声明、太空船操作符、匿名类、Unicode codepoint 转译语法、Closure::call（)、为unserialize（)提供过滤、IntlChar、预期、Group use declarations等新特性。</p>
<p>7）PHP7.1版本：新增可空类型、list 的方括号简写、允许在 list 中指定 key、void 返回类型、类常量属性设定、多条件 catch等新特性。</p>
</li>
<li>
<p>PHP如何安装扩展?</p>
<p>​	答案：在 Windows 上有两种加载 PHP 扩展的方式：把扩展编译进 PHP，或者加载 DLL文件。加载预编译的扩展是比较简单，也是被推荐的方式。要加载某扩展，需要在系统中有其相对应的“.dll”文件。所有扩展都会由 PHP 小组定期自动编译，只需要到http://pecl.php.net/下载扩展放到PHP主程序目录下的“ext”或者“extension”目录。最后打开php.ini配置文件，在“Dynamic Extensions”配置段中加上“extension=*.dll”，关闭文件，重新启动PHP就可以加载成功了。</p>
</li>
<li>
<p>短标签如何开启?使用结束标签有什么影响?</p>
<p>答案：PHP的开始结束标签为<?php..?>，然而PHP也支持另一种短标签<?..?>，但是这种标签格式需要另外开启才可以使用。具体的开启步骤如下：</p>
<p>1）打开PHP目录，找到php.ini-dist配置文件并打开。</p>
<p>2）按〈Ctrl+F〉快捷键进行搜索short_open_tag。</p>
<p>3）找到配置文件short_open_tag=off，然后只要把off改为on，如果short_open_tag已经是on，那么说明短标签已经开启。</p>
<p>4）保存好文件，重启Apache就可以使用短标签了。</p>
<p>​	在PHP文件中，当PHP有结束标签时，PHP只会执行PHP标签里面的文本，如果是纯PHP文件，那么不建议使用结束标签。但是如果使用了PHP结束标签，那么可能存在以下影响，因为PHP会把脚本执行外的回车、空格、制表符都响应到服务端，所以如果在结束标签后面存在多余的空格或者回车，那么会影响脚本的执行结果，而如果没有结束标签，那么多余的空格回车不会对程序有影响。</p>
</li>
<li>
<p>php-l、php-m、php-r有什么作用?</p>
<p>答案：首先在Windows系统里设置环境变量指向PHP软件，然后在cmd中通过PHP可以执行以下-l、-m、-r方法，它们的作用分别为：</p>
<p>1）-l，对指定 PHP 代码进行语法检查的，语法为：php-l demo.php。</p>
<p>2）-m，PHP将打印出内置以及已加载的，语法为：php及 Zend 模块：php-m。</p>
<p>3）-r，可以在命令行运行 PHP代码，语法为：php-r‘代码’。</p>
</li>
<li>
<p>什么是heredoc?</p>
<p>答案：heredoc是一种Perl风格的字符串输出技术。使用heredoc技术可以实现界面与代码的准分离，比如PHPWind模板。heredoc的语法是用“&lt;&lt;&lt;”加上自己定义成对的标签，在标签范围内的文字被视为一个字符串。规则如下：</p>
<p>​		1）以&lt;&lt;&lt;End开始标记开始，以End结束标记结束，结束标记必须顶格写，不能有缩进和空格，且在结束标记末尾要有分号（;）。开始标记和结束标记相同，比如常用大写的EOT、EOD、EOF来表示，也可以使用其他标记，只要保证开始标记和结束标记不在正文中出现就可以了。</p>
<p>​		2）位于开始标记和结束标记之间的变量可以被正常解析，但函数却不可以。在heredoc中，变量不需要用连接符“.”或“，”来拼接，比如：</p>
<p>​								<img src="@source/docs/theme-reco/img/common/image-20211018150101966.png" alt="image-20211018150101966"></p>
<p>​	代码运行结果为：$a bc因为heredoc里面的变量是原样输出不被解析的，所以程序的运行结果为$a bc。</p>
</li>
<li>
<p>常量分为系统内置常量和自定义常量，请说出最常见的几个系统内置常量。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>答案：系统内置的常量被称为魔术常量，魔术常量有以下几个：1）__LINE__，该常量可以获取文件中的当前行号。2）__FILE__，该常量可以获取文件完整路径和文件名，如果用在包含文件中，那么返回包含文件名。3）__FUNCTION__，该常量可以获取函数名称，返回函数被定义时的名字（区分大小写）。4）__CLASS__，该常量可以获取类的名称，返回该类被定义时的名字（区分大小写）。5）__METHOD__，该常量用于获取类的方法名，返回该方法被定义时的名字（区分大小写）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>类中如何定义常量?如何使用常量?如何在类外使用常量?</p>
<p>答案：在类中的常量叫作成员常量，常量的值一旦被定义就不能被修改，它是一个恒值，不可以被取消或重新定义。在类中定义一个常量需要使用关键字const进行定义。例如，定义abc为常量，值为123，定义方法为const abc=123；在类内或类外使用常量和变量的方法是不一样的，在类外使用常量不需要实例化对象，可以直接类名加作用域操作符号（双冒号）来访问常量，即“类名::类常量名”。在类内使用常量的方法为“self::常量名”。</p>
</li>
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211018151032398.png" alt="image-20211018151032398"></p>
</li>
<li>
<p>什么是标量?</p>
</li>
</ol>
<pre><code>答案：标量指的是标量类型（Integer、Float、String或Boolean）的变量，而array、object和resource等类型的变量不是标量。可以通过is_scalar（）函数判断一个变量是否为标量，如果一个变量通过is_scalar（）函数判断得到值为1，那么说明该变量是标量；如果输出为空，那么说明该变量不是标量。
</code></pre>
<img src="@source/docs/theme-reco/img/common/image-20211018151213294.png" alt="image-20211018151213294" style="zoom:67%;" />
<ol start="14">
<li>如果定义了一个变量$a，但是没有赋初始值，那么$a==0吗?$a==false吗?$a==''吗?$a==NULL吗?$a===NULL吗?</li>
</ol>
<pre><code>​	答案：PHP中定义了一个$a，但是没有赋初始值，运行程序时只要不对$a进行任何操作页面不会有提示。

​	&lt;img src=&quot;./img/common/image-20211018151514187.png&quot; alt=&quot;image-20211018151514187&quot; style=&quot;zoom:67%;&quot; /&gt;
</code></pre>
<ol start="15">
<li>
<p>给一个变量赋值为0123，但是输出该变量的值总是为其他数字，这是什么原因?</p>
<p>答案：PHP变量的整型主要以十进制为主，而当变量为整型且以0开头时，PHP解释器会把它当作是八进制，输出结果是转换为十进制数的结果，所以输出来的结果与原值不同。</p>
</li>
<li>
<p>执行完以下代码后，变量$num的值为（）。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211018152220344.png" alt="image-20211018152220344"></p>
</li>
<li>
<p>运算符“^”的作用是（）。位异或</p>
</li>
<li>
<p>位与，位或，位异或，位移分别是什么?</p>
<p>​	答案：位与运算符为“&amp;”。$a&amp;$b表示为将把$a和$b中都为1的位设为1。位或运算符为“|”。$a|$b表示为将把$a或$b中为1的位都设为1。位异或运算符为“^”。$a^$b表示为将把$a和$b中值不同的位设为1。</p>
<p>位移运算符分为左位移运算符和右位移运算符，分别解释为：</p>
<p>1）左位移运算符为“&lt;&lt;”。$a&lt;&lt;$b表示把$a中的位向左移动$b位（每移动一位都表示“乘以2”)。</p>
<p>2）右位移运算符为“&gt;&gt;”。$a&gt;&gt;$b表示把$a中的位向右移动$b位（每移动一位都表示“除以2”)。</p>
</li>
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211018170228966.png" alt="image-20211018170228966"></p>
<p>​		结果是：-3</p>
<p>​		$a和$b通过按位或运算（|）运算时会把$a和$b分别进行二进制运算，然后把$a或$b中为1的位设为1。$a为-3，它的二进制为正数3的补码即1100，而$b=4，二进制数为0100，所以，$a|$b等价于（1100）|（0100），它们二进制中为1的位数都设为1，得到1100，即-3，输出得到-3</p>
<p>​		PHP的位运算符有“&amp;”，“|”，“～”，“^”，“&lt;&lt;”，“&gt;&gt;”等</p>
<p>​		1&gt;&gt;0是一个右位移运算符，可以将1的位向右移动0次，即1转换成二进制得到0001，向右移动0次还是得到它本身0001，转换得到1，输出得到1。</p>
<p>​		2&gt;&gt;1时将2转换成二进制0010，向右移动一位得到0001，所以转换成十进制得到1，输出1。</p>
<p>​		3&lt;&lt;2是一个左位移运算符，可以将3的位向左移动2次。3转换成二进制得到0011，向左位移2位，得到1100，转换为十进制得到12，输出得到12。</p>
</li>
<li>
<p>位运算知识：</p>
<p>​	“&gt;&gt;”是右位移运算符，式子转换为$a=$a&gt;&gt;2，表示$a向右位移2位，但是每向右位移一次就除一次2</p>
<p>​	“&lt;&lt;”是左位移运算符，式子转换为$a=$a&lt;&lt;2，表示$a向左位移2位，但是每向左位移一次就乘一次2</p>
<p>​</p>
</li>
<li>
<p>$m=&quot;woxihuanPHP&quot;，编程实现：将字符串分割为单个字符存放到一个数组中，并打印数组。</p>
</li>
</ol>
<pre><code>​	答案：可以使用str_split()函数将字符串单个字符进行切割存放到数组中。

​						![image-20211018171527463](./img/common/image-20211018171527463.png)
</code></pre>
<ol start="22">
<li>
<p>如何将一个数组作为附件发送，并能在接收后重新组合?（）</p>
<p>​	用serialize()把它转换成数组，再用base64_encode()进行编码</p>
<p>​	如果要将数组作为附件发送，那么需要先使用serialize()函数对数组进行有序化转换，为了使二进制数据可以通过非纯8-bit的传输层传输，需要使用base64_encode()进行编码后再发送。发送成功后可以对base64_encode()函数和serialize()函数的内容解码恢复成原来的数组。</p>
</li>
<li>
<h2 id="serialize和json-encode-区别" tabindex="-1"><a class="header-anchor" href="#serialize和json-encode-区别" aria-hidden="true">#</a> <a href="https://www.cnblogs.com/jiaoaozuoziji/p/7390021.html" target="_blank" rel="noopener noreferrer">serialize和json_encode 区别<ExternalLinkIcon/></a></h2>
<p>（1）serialize主要用于php的序列化，存储到文件或者数据库中，json_encode 也是序列化，但是 主要用于与其他语言比如js进行交互使用，对于传输来说，json有许多优点。</p>
<p>（2）在显示上，serialize序列化的字符串包含额外的内容，这是值的类型和长度的编码</p>
<p>（3）在进行 json_decode解码的时候需要注意，如果是序列化的数值型数组，那么json_decode 可以还原为原来的数组（数值型数组哦），但是，如果序列化的是关联数组（或者对象），那么由于json_decode无法判断是关联数组还是对象（我们可以理解为这两个长的像无法区分），所以json_decode会默认还原解析为stdclass的对象，如果加了true才解析为关联数组</p>
<p>（4）json_encode不能序列化对象的成员方法，代码如下：</p>
<p>serialize序列化之后，反序列化的数据，可以重新调用成员方法，但是json_decode不行，会报错，具体可以测试、</p>
<p>（5）__sleep和__wakeUp魔术方法</p>
<p>当一个对象被串行化,PHP会调用__sleep方法(如果存在的话，并且进行操作，比如对变量赋值). 在反串行化一个对象后,PHP 会调用__wakeup方法. 这两个方法都不接受参数. __sleep方法必须返回一个数组,包含需要串行化的属性. PHP会抛弃其它属性的值. 如果没有__sleep方法,PHP将保存所有属性.
在程序执行前，serialize() 函数会首先检查是否存在一个魔术方法 __sleep.如果存在，__sleep()方法会先被调用， 然后才执行串行化（序列化）操作。这个功能可以用于清理对象，并返回一个包含对象中所有变量名称的数组（必须返回。与之相反，unserialize()会检查是否存在一个__wakeup方法。如果存在，则会先调用 __wakeup方法，例如可以用于数据库的重新连接</p>
</li>
<li>
<p>利用list. each. while遍历数组</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211018173540097.png" alt="image-20211018173540097"></p>
</li>
<li>
<p>若要输出以下数组的全部元素，则N的值最小应为（6）。</p>
<p>​				<img src="@source/docs/theme-reco/img/common/image-20211018173851264.png" alt="image-20211018173851264"></p>
<p>​	因为$student内的数组值jame没有键名，所以系统自动分配键名0，而mick键名为3，导致后面的tony和terry的键名由系统分配为4、5。而函数内的循环是通过键名输出，且$i是小于N的，所以，N需要为6才能够从0到5输出对应键名的键值。</p>
</li>
<li>
<p>unset()函数和unlink()函数有什么区别?</p>
<p>答案：unset()函数主要用于销毁一个变量，而unlink()函数用于删除一个文件。</p>
</li>
<li>
<p>PHP可以执行系统命令的函数是（至少写出3个）。</p>
<ol>
<li>​	答案：可以执行系统命令的函数分别有：①system()函数可以执行外部程序并显示输出；②exec()函数可以执行一个外部程序；③popen()函数可以打开进程文件指针。</li>
</ol>
</li>
<li>
<p>PHP的序列化和反序列化，有什么用途?</p>
<ol>
<li>​	答案：PHP可以使用serialize()函数进行序列化，为的是产生一个可存储的值，便于存储除resource类型的所有数据，而反序列函数unserialize()可以将序列化的数据还原为原来的值。</li>
</ol>
</li>
<li>
<p>echo，print()，print_r()，printf()，sprintf()，var_dump()有什么区别?</p>
<p>答案：echo、print、print_r、printf、sprintf、var_dump是PHP的主要输出函数，但是它们的应用地方并不一样，区别如下。</p>
<p>1）echo：是语句不是函数，没有返回值，可输出多个变量值，不需要圆括号。不能输出数组和对象，只能打印简单类型（如int，String)。</p>
<p>2）print：是语句不是函数，有返回值1，只能输出一个变量，不需要圆括号。不能输出数组和对象，只能打印简单类型（如int、String）。echo和print功能一样，但是区别在于输出的变量个数不同，关键的是print打印的时候会有返回值，而echo没有返回值。3）print_r：是函数，可以打印复合类型。例如，string、int、foat、array、object等，输出array时会用结构表示，而且可以通过print_r（$str,true)来使print_r不输出而是返回print_r处理后的值。该函数返回的处理值有以下两种情况：</p>
<p>​		① $str是数字或字符串，用echo print_r($str,true)的形式输出，得到的结果是$str原来的值；</p>
<p>​		② $str是数组时，用echo print_r($str,true)的形式输出，得到的结果是Array([0]=&gt; 1,……)。</p>
<p>4）printf：是函数，可以把文字格式化以后输出。具体的格式化输出为：$number=9;$str=&quot;北京&quot;;printf（&quot;在%s有%u万辆自行车。&quot;，$str，$number);可以得到结果：在北京有9百万辆自行车。</p>
<p>5）sprintf：是函数，跟printf相似，但不打印，而是返回格式化后的文字，需要将sprintf函数赋值给一个变量，然后输出才能有对应的结果，其他的使用与printf一样。</p>
<p>6）var_dump：是函数，主要用于输出变量的内容、类型或字符串的内容、类型、长度。常用来调试。</p>
</li>
<li>
<p>有哪几种方式可以取代Session机制?简单描述各自的优劣。</p>
<p>​	答案：</p>
<ol>
<li>1）通过Cookie加密存储Session信息，同样可以实现Session的运行机制。但是Cookie的信息因为存储在客户端，不良用户可以进行Cookie欺诈登录系统，所以相对Session安全较低。</li>
<li>2）使用数据库取代Session，这样可以解决服务器宕机后数据丢失的问题。但是程序需要定制，并且每次都对数据库进行请求一次才能获得对应数据，读写开销不小。</li>
<li>3）使用Memcache取代Session，这种方式和数据库类似但性能比数据库好，但是数据存储在内存中，如果服务器宕机需要重启，那么数据会丢失，并且程序需要定制，增加工作量。</li>
</ol>
</li>
<li>
<p>如何不使用Cookie向客户端发送一个Cookie?</p>
<ol>
<li>答案：可以通过Session的方式向客户端发送一个Cookie。首先服务端需要使用session_start()开启，接着把sessionID保存到一个常量的SID里，当Cookie开启时，常量SID为空，Cookie关闭时，常量SID存储sessionID的值，可以在URL后加一个SID参数来传递sessionID的值，让客户端获得SID后，客户端每次请求服务端时都带着SID给服务端，保证Session会话的进行。</li>
</ol>
</li>
<li>
<p>用Cookie的注意事项有哪些?</p>
<p>​	答案：使用Cookie注意事项如下：</p>
<ol>
<li>1）Cookie数据的存储有限制，不能超过4KB。</li>
<li>2）由于不同的浏览器对Cookie的处理不同，所以不同的浏览器对Cookie的存储和数量会有不同的限制，一般一个浏览器存储的Cookie数量有上限为300个。一个网站在浏览器上存储的Cookie数量也有上限，大概30个，具体看浏览器的实现。</li>
<li>3）因为Cookie是保存在客户端的，所以如果用户禁用了Cookie，那么Cookie就不能被使用了。</li>
<li>4）setcookie（)前不能有任何页面输出，即使是空格或空白行。</li>
<li>5）setcookie（)后，在当前页面调用$_COOKIE是没有输出的，需要在下一个页面刷新后才能有Cookie值。</li>
<li>6）如果Cookie不设置过期时间，那么它的生命周期是浏览器的会话期间，因为Cookie是被存储在内存中而不是硬盘中，所以关闭浏览器时，Cookie就会被清空。</li>
</ol>
</li>
<li>
<p>Session与Cookie的联系和区别是什么?Session共享问题的解决方案是什么?</p>
<ol>
<li>答案：Session和Cookie的联系是它们都可以用来让网站追踪用户，实现用户信息的同步。并且Session依靠Cookie来工作，通过$_COOKIE['PHPSESSID']获取到sessionID，再通过sessionID可以获取Session的其他数据。Session和Cookie的区别如下：1）Cookie是将数据存储在客户端的浏览器上，而Session是将数据存储在服务器端的。2）因为Cookie是存储数据在客户端的，用户可以分析存放在本地的Cookie文件，从而进行Cookie欺诈，所以Cookie安全性比Session差。3）Cookie的存储大小不能超过4KB，而Session没有存储大小限制，并且可以存储更复杂的数据类型。</li>
<li>Session的共享方案有如下几种：1）通过Cookie加密的方式保存Session在客户端，在A服务器上登录，用户浏览网页时添加加密的Cookie，当用户访问B服务器时，检查有无Session，如果没有，那么检查Cookie是否有效，有效则在B服务器也创建一个Session，这样可以减少服务器的压力，也保证了Session的数据共享。2）服务器间同步，定时同步各个服务器间的Session信息，保证数据的一致性。3）把会话数据存储到某台Memcache服务器中，可以把Session文件存放的目录改为nfs网络文件系统，从而实现文件的跨机器共享。4）把Session数据保存到数据库中，保证全部的机器都从同一个数据库中读取Session数据而共享。</li>
</ol>
</li>
<li>
<img src="@source/docs/theme-reco/img/common/image-20211018180111683.png" alt="image-20211018180111683" style="zoom:67%;" />
</li>
<li>
<p>以下代码会产生什么问题，如何解决?</p>
<p>​							<img src="@source/docs/theme-reco/img/common/image-20211018180329421.png" alt="image-20211018180329421"></p>
<p>​			答案：这种写法是不安全的，并且禁止这种写法。如果需要用户提供目录，那么必须对输入的内容进行过滤和安全的防范，防止表单注入。解决办法：1）使用函数addslashes（)转义提交的内容。2）验证用户的http请求方式，防止恶意的用户可以模拟http对网站进行请求产生恶意攻击。3）可以使用token机制，验证表单来源的唯一性，防止黑客伪造表单提交。</p>
</li>
<li>
<p>将$_REQUEST得到的参数用在MySQL查询语句的条件里时需做什么处理?</p>
<p>答案：需要对$_REQUEST获取的字符判断是否合法，合法才能对MySQL进行查询，这样做的目的是防止表单注入和sql注入。防止SQL注入攻击的方法如下：</p>
<ol>
<li>1）预处理语句和参数分别发送到数据库服务器进行解析。</li>
<li>2）使用函数addslashes（)转义提交的内容。</li>
<li>3）PHP配置文件中开启magic_quotes_gpc=on;将自动转换用户查询的SQL语句，对防SQL注入有重大作用。</li>
<li>4）在PHP配置文件中，将register_globals设置为off，关闭全局变量注册。</li>
<li>5）在PHP配置文件中，开启安全模式safe_mode=on。</li>
<li>6）SQL语句的书写尽量不要省略小引号与单引号。</li>
<li>7）提高数据库表和字段的命名技巧，对一些重要的字段根据程序的特点命名，取不易被猜到的名字。</li>
<li>8）控制错误信息，关闭错误信息的输出，将错误信息写到日志文件中，不要在网站暴露错误信息。</li>
</ol>
</li>
<li>
<p>类似http://www.abc.com/search?p=a%20b的访问，如果用$p=$_REQUEST['p']，那么p等于什么?</p>
<ol>
<li>%20代表空格</li>
</ol>
</li>
<li>
<p>如何在页面之间传递变量（至少两种方式）?</p>
<p>​	答案：</p>
<ol>
<li>1）通过页面间传递变量可以通过url的方式传递，在另一个页面中用get方法获取变量。</li>
<li>2）也可以通过表单的post方法提交数据，在另一个页面中使用$_POST方法获取变量。</li>
<li>3）可以使用Session或Cookie的方法进行页面间传递变量。</li>
</ol>
</li>
<li>
<p>写出PHP获取文件内容的方法和对应的函数。</p>
<ol>
<li>答案：可以使用以下方法中的函数：
<ol>
<li>​	1）使用fopen（)函数打开url或文件，然后通过fgets（)函数获取内容。
<ol>
<li>2）file_get_contents（)可以获得url或文件的内容，把整个文件读入一个字符串中。</li>
<li>3）通过fsockopen（)函数打开url或文件，可以通过get或post方式获取完整的数据，包括header和body内容。</li>
<li>4）先在php.ini中开启curl扩展，再通过curl库获取文件的内容。</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
<li>
<p>以下可以用来开启档案以便读/写的函数是（C）。</p>
<p>​	A.fget() 	B.file_open() 	C.fopen() 	D.open_file()</p>
<p>​		fopen()函数可以用来开启档案以便读、写。而PHP中不存在fget()、file_open()、open_file()等函数。</p>
</li>
<li>
<p>考虑如下脚本，和它的功能最接近的PHP函数是（）。//file_put_contents()</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211019094005508.png" alt="image-20211019094005508"></p>
</li>
<li>
<p>打开、关闭文件分别使用什么函数?读写文件使用什么函数?删除文件使用什么函数?</p>
<p>答案：打开文件使用fopen()函数，关闭文件使用fclose()函数。fread()函数可以对文件进行读操作，fwrite()函数可以对文件进行写操作。删除文件使用unlik()函数。</p>
</li>
<li>
<p>判断一个文件是否存在使用哪个函数?新建目录使用哪个函数?</p>
<ol>
<li>答案：file_exists()函数可以判断一个文件是否存在，mkdir()函数可以创建目录。</li>
</ol>
</li>
<li>
<p>简述如何得到当前执行脚本路径，包括所得到参数。</p>
<ol>
<li>​	答案：可以使用魔术常量__FILE__或 $_SERVER['SCRIPT_FILENAME']方法获取当前执行脚本路径。获取参数可以使用$_SERVER['QUERY_STRING']方法。</li>
</ol>
</li>
<li>
<p>写一个程序，远程抓取http://www.google.cn/search?q=PHP网页内容，并匹配出该网址网页内的所有超链接地址，写入url.txt。</p>
<ol>
<li>
<p>​	答案：可以使用file_get_contents()获取http://www.google.cn/search?q=PHP的网页内容，通过正则匹配获取href内的url链接，依次遍历链接数组，将不是空的url链接拼接，通过file_put_contents()函数写入到url.txt文件中。</p>
</li>
<li>
<p>实现代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$str = file_get_contents("https://www.baidu.com/s?wd=php");
preg_match_all('/href=\"(.*?)\"/i', $str, $matchs);
foreach($matchs[1] as $u){
	if(empty($u)){
		continue;
		$url .= empty($url) ? $u:"\n$u";
	}

	file_put_contents("url.txt", $url);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p>要做一套图片管理系统，关于用户图片的上传，如何尽量避免以下问题的发生：（1）图片被盗用；（2）图片重复上传。图片上传保存目录如何设置?</p>
<p>答案：1）可以通过创建.htaccess文件防盗链，并且给上传的图片加水印声明版权。2）当图片单击上传后，上传按钮禁止再次单击，直到上传完成才能再次上传。3）图片的目录根据月份再到日进行存放。</p>
</li>
<li>
<p>写一个函数，要求能够遍历一个文件夹下的所有文件和子文件夹。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019095851170.png" alt="image-20211019095851170"></p>
</li>
<li>
<p>考虑如下脚本，假设 http://www.php.net 能被访问，脚本将输出（）。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019100126890.png" alt="image-20211019100126890"></p>
<p>​	代码中通过file_get_contents()可以获取网页www.php.net中所有的内容，然后通过strip_tags()去除<p>标签以外的所有HTML标签。count()函数用于计算数组的长度，而$s是字符串，count()函数作用在字符串的时候永远返回1。所以，选项C正确。</p>
</li>
<li>
<p>考虑如下脚本，最后文件myfile.txt的内容是什么?</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019100221254.png" alt="image-20211019100221254"></p>
<p>答案：因为文件打开的方式是“r”只读模式，不能向文件写入，所以使用fwrite()函数向文件写入字符串时会写入失败，如果myfile.txt的内容为空，那么依然为空，如果myfile.txt文件存在内容，那么依然是原来的内容。</p>
</li>
<li>
<p>如果一个脚本无法正确识别一个存储于另一个平台上的文件的行结尾，那么最好的解决办法是（改变auto_detect_line_ending的设置）。</p>
<p>​		在php.ini中可以通过设置auto_detect_line_endings来实现当系统保存文件的时候可以自动检测结束符类型的目的。它设置的值有on和off，默认为off。当为on时，PHP 将检查通过fgets()和file()取得的数据中的行结束符号是符合 UNIX、MS-DOS，还是 Macintosh 的习惯。</p>
</li>
<li>
<p>写一个函数实现删除指定目录包括其下的所有子目录以及文件。</p>
<p>​	答案：需要对传入的文件路径判断是文件还是目录，如果是目录，那么使用scandir()函数进行升序排序，可以得到文件在前，目录在后的排序，方便遍历文件时，判断文件是否存在多级，如果不存在，则删除目录下的当前文件，如果存在多级目录，则依次递归文件夹进行删除，直到整个文件夹下的文件全部删除。实现代码如下：</p>
<p>​								<img src="@source/docs/theme-reco/img/common/image-20211019100643121.png" alt="image-20211019100643121" style="zoom:67%;" /></p>
</li>
<li>
<p>写一个函数来解决多线程同时读写一个文件的问题。</p>
</li>
</ol>
<pre><code>1. ​	答案：可以使用fock()函数对程序对文件加锁或释放锁，通过fopen()函数打开一个可读可写文件，然后通过fock()函数锁定文件，设置为LOCK_EX即独占锁定的写入程序。如果可以独占写入，那么就执行文件写入，否则提示不能锁定文件且不能进行读写操作。

   ![image-20211019100738399](./img/common/image-20211019100738399.png)
</code></pre>
<ol start="53">
<li>在文件hello.txt头部写入一行“hello World”字符串，请写出代码，并要求代码完整。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$str = "Hello world";
$fpl = fopen("hello.txt",'w');
fwrite($fpl,$str);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="54">
<li>
<p>当文件上传时，可以让浏览器来显示上传的文件大小吗?（可以	）</p>
<p>​	使用filesize()函数可以返回指定文件的大小，当文件上传时，filesize()函数读取上传文件的大小并且返回文件大小</p>
<p>​	可以在php.ini文件中设置上传的文件大小，默认为2MB。也可以通过filesize()函数判断上传文件的大小，如果超过这个容量，那么禁止上传。</p>
<p>​	PHP文件上传时，主要使用字节（B）作为文件上传的大小单位。</p>
<p>​	在上传前，一定要用 is_uploaded_file()函数确保文件名正确传输，并把本地临时文件通过move_upload_file()函数在上传文件前检查文件，再移动文件到安全位置进行长期保存，防止文件丢失。而在操作前不需要特意地对文件名进行对比和使用file_exists()函数判断文件是否存在。其次文件的上传，PHP并不是只信任临时文件目录下的文件。</p>
<p>​	file()函数可以把整个文件读入一个数组中，将文件作为一个数组返回，如果失败，那么返回false。</p>
<p>​	fstat()基于文件指针工作，stat()基于路径工作，stat()函数可以通过指定的路径获取文件信息，而fstat()函数通过文件指针操作打开文件的统计信息。</p>
<p>​	fgets()函数主要用于读取文本文件中的一行，而fread()函数主要用于读取二进制文件。fseek()函数主要用于在打开的文件中定位，fputs()函数用于写入文件。</p>
<p>​		fseek()函数可以移动文件指针在文件中定位。可以设定参数“SEEK_SET”指出偏移量从文件开头开始计算。“SEEK_END”的作用是设定指针偏移量从文件末尾开始计算，“SEEK_CUR”的作用是设定指针偏移量从文件当前位置开始计算。fseek(0,SEEK_SET)</p>
<p>​		file_get_contents()、readfile()、file()三个函数都可以直接获取文件中的全部内容并且输出。fgets()函数只能获取文件单行内容。fread()函数需要指定文件的内容大小再读取。</p>
</li>
<li>
<p>$<em>FILES是几维数组?第一维和第二维的索引下标分别是什么?批量上传文件时需要注意什么?</em></p>
<p>答案：$_FILES是二维数组。第一维是上传控件的name值，二维下标分别对应为name、type、tmp_name、size、error等。批量上传文件时需注意：</p>
<ol>
<li>1）上传的文件格式、大小是否符合要求。</li>
<li>2）上传的图片名字不能相同，避免先上传的图片被后来上传的图片覆盖。</li>
<li>3）防止用户上传恶意文件。</li>
<li>4）对部分上传失败的文件不能影响已上传成功的文件，并且提示上传失败的错误。</li>
</ol>
</li>
<li>
<p>PHP中实现文件操作的函数有哪些?</p>
<ol>
<li>答案：1）basename（)函数可以返回路径中的文件名部分。2）chown（)函数可以改变文件所有者。3）copy（)函数可以复制文件。4）unlink（)函数可以删除文件。5）dirname（)函数可以返回路径中的目录名称部分。6）fclose（)函数可以关闭打开的文件。7）file（)函数可以把文件读取到数组。8）file_get_contents（)函数可以把整个文件的内容读入到一个字符串中。9）fopen（)函数可以打开一个文件或 URL。10）fread（)函数可以读取打开的文件。11）filesize（)函数可以返回文件的大小。12）filetype（)函数可以返回文件类型。13）fwrite（)函数可以将内容写入文件。14）is_dir（)函数可以判断指定的文件名是否是一个目录。</li>
</ol>
</li>
<li>
<p>考虑如下PHP脚本，它一行行地读取并显示某文本文件的内容。在问号处填入什么才能使脚本正常运作?（）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$file = fopen('text','r');
while(!feof($file)){
		echo ?;
}
fclose($file);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>header()函数主要的功能有哪些?使用过程中应该注意什么?</p>
</li>
</ol>
<pre><code>​	答案：header()函数可以向客户端发送各种状态代码，也可以实现一些输出下载。它具有以下作用：

1. 1）跳转功能，当函数头为header（'Location:http://www.baidu.com/')时，浏览器接收到头信息就会自动跳转到Location指定的URL。
2. 2）指定网页内容，通过header（'Content-type:application/xml')告诉浏览器按照XML格式来解析内容，如果是header（'Content-type:text/xml')，那么浏览器将其看作纯文本解析。
3. 3）指定内容为附件，通过header（'Content-Disposition:attachment;filename=&quot;downloaded.pdf&quot;');告诉浏览器该文件是一个附件，当浏览器执行该页面时，会直接下载downloaded.pdf文件到本地。
</code></pre>
<ol start="59">
<li>
<p>文件下载时如何使用header()函数?</p>
<p>答案：header()函数有以下可取的值，可以指明文件类型，接收范围，可接收的文件长度和下载后的文件名。可参考的代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>header("content-type:application/octet-stream;charset=UTF-8");
header("accept-ranges:bytes");
header("accept-length:".filesize($filedir.$filename));
header("content-disposition:attachment;filename=".$filedir.$filename);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>PHP自定义报错日志用什么函数?</p>
<ol>
<li>答案：PHP自定义报错日志可以使用4个函数，如下所示：1）error_log（)函数可以发送错误信息到某个地方。2）error_reporting（)函数规定不同的错误报告。3）可以通过ini_set（)函数修改php.ini内的配置选项，设置display_errors开启PHP错误提示。4）trigger_error（)函数可以创建用户级别的错误消息。</li>
</ol>
</li>
<li>
<p>以下说法是否正确：PHP中的警告信息会中断脚本的执行。</p>
<ol>
<li>​	答案：该说法是错误的，警告和提示都不会中断程序，而致命错误和语法错误才会导致脚本执行中断。</li>
</ol>
</li>
<li>
<p>如何记录PHP程序错误至系统日志?</p>
<ol>
<li>​	答案：先将PHP中的log_errors开启，然后默认将记录存储到Web服务器的日志文件中，例如Apache中的error.log文件。如果需要修改错误日志到指定的文件，那么可以修改error_log中的文件指定，也可以设置error_log=syslog，将这些错误信息记录到操作系统的日志中。</li>
</ol>
</li>
<li>
<p>能否仅调用一个函数就关闭脚本内所有的错误报告?（）</p>
<ol>
<li>​	A.能 B.不能答案：A。</li>
<li>error_reporting(0)函数在脚本执行前放入，可以关闭脚本内所有的错误报告。所以，选项A正确，选项B错误。</li>
</ol>
</li>
<li>
<p>PHP中的错误类型有哪些?</p>
<p>答案：PHP中遇到的错误类型可以分为三类：</p>
<p>​	提示（E_NOTICE）：对于信息可以正常访问，存在的问题不算严重，不会终止程序的运行，例如不存在某个变量。</p>
<p>​	警告（E_WARMING）：存在的问题比提示严重，会将该错误显示给用户，但不影响程序的后续执行，例如include包含的文件不存在。</p>
<p>​	错误（E_ERROR，E_PARSE）：存在很严重的错误，会影响程序的执行，整个程序会停止执行，例如语法错误或执行的类文件不存在。</p>
</li>
<li>
<p>PHP有什么不同的错误?</p>
<p>​		答案：PHP有以下4种错误：</p>
<p>​			1）解析错误：代码存在简单的语法错误，例如少了分号、括号、花括号等。</p>
<p>​			2）致命错误：指的是运行错误，例如不存在对象或函数未声明。</p>
<p>​			3）警告错误：该类错误不会停止脚本执行，但会出现警告并执行后续代码。例如，包含的文件不存在。</p>
<p>​			4）注意错误：注意错误不会停止后面脚本，但会提示后继续执行下去。例如，声明的变量未定义。</p>
</li>
<li>
<p>如何理解Run-time errors、Run-time warnings、Compile-timeparse errors、Compile-time errors?（PHP内部错误机制）</p>
<p>答案：它们的意思分别为：</p>
<p>​		1）Run-time errors：解释执行错误。</p>
<p>​		2）Run-time warnings：运行时警告。</p>
<p>​		3）Compile-time parse errors：解析错误。</p>
<p>​		4）Compile-time errors：编译错误</p>
</li>
<li>
<p>PHP如何抛出和捕获异常?</p>
<p>​		答案：使用try/catch代码块，其中把可能会出现异常的代码放在try代码块内，而把对异常处理的代码放在catch代码块中。如果没有触发异常，那么代码继续执行，一旦异常被触发，就会抛出一个异常，然后代码会跳转到catch块继续执行。catch代码块捕获异常，并创建一个包含异常信息的对象。$e-&gt;getMessage()，输出异常的错误信息。</p>
<p>​		除了try/catch代码块外，还有try/catch/finally代码块，经常被用在需要释放资源的情况下，一般的使用方法为：</p>
<p>​		<img src="@source/docs/theme-reco/img/common/image-20211019104256980.png" alt="image-20211019104256980"></p>
<p>​		即使try块与catch块中有return，finally块还是会被执行的，当碰到return时，代码会先执行finally的逻辑，再返回对应的try 或者catch里执行return返回的值。如果try catch finally都有return，那么最终返回的是finally块中的返回值。</p>
</li>
<li>
<p>PHP错误机制中，PHP如何抛出和接收错误?</p>
<p>答案：可以使用try...catch捕捉PHP抛出错误和接收错误。try内放异常的代码，如果程序没有触发异常，那么代码会继续执行，如果异常被触发，那么会抛出一个异常。并且在catch中捕获异常，通过一个包含异常信息的对象（$e-&gt;message（））进行输出异常的错误信息。</p>
</li>
<li>
<p>foo()和@foo()之间有什么区别?</p>
</li>
</ol>
<pre><code>​		答案：在函数前添加一个“@”时，可以把表达式可能产生的任何错误信息都忽略，不在浏览器中显示。而foo()函数执行时如果有错，那么会在浏览器中报错输出。“@”只对表达式有效，可以放在变量、函数、include()或常量前，但是不能放在用户自定义的函数或类前，也不能用于if和foreach()等。
</code></pre>
<ol start="70">
<li>
<p>error_reporting(2047)的作用是什么?</p>
<p>​		答案：2047=1+2+4+8+16+32+64+128+256+512+1024。其中，1对应E_ERROR，2对应E_WARNING，4对应E_PARSE，8对应E_NOTICE，16对应E_CORE_ERROR，32对应E_CORE_WARNING，64对应E_COMPILE_ERROR，128对应E_COMPILE_WARNING，256对应E_USER_ERROR，512对应E_USER_WARNING，1024对应E_USER_NOTICE。所以，error_reporting(2047)表示上述错误都会显示出来。</p>
</li>
<li>
<p>简述两种屏蔽PHP程序的notice警告的方法。</p>
<p>​			答案：可以使用以下方法屏蔽PHP的notice警告：</p>
<p>​			1）修改php.ini配置文件，将error_reporting默认设置为显示所有的错误，所以设置error_reporting=E_ALL&amp;～E_NOTICE，可以从全部错误中排除Notice错误。</p>
<p>​			2）屏蔽notice警告可以在要屏蔽的程序前加入error_reporting（0)将程序中的全部错误屏蔽掉。</p>
<p>​			3）可以在php.ini配置文件中修改display_errors=Off，将所有的错误屏蔽。</p>
<p>​			4）可以对可能会报出notice警告的语句使用“@”错误抑制符屏蔽notice类型错误。</p>
</li>
<li>
<p>页面空值，输出404，是什么原因造成的?解决办法是什么?</p>
<p>答案：页面如果为空值，那么可能因为错误被屏蔽或没有开启错误显示导致没有内容输出，也有可能页面没有值输出。所以可以在页面开启错误提示，并在页面输出测试内容查看页面是否有内容显示，针对不同问题进行解决。404：请求的页面不存在的原因，导致提示404错误。需要检查文件路径，保证文件能够正确访问。</p>
</li>
<li>
<p>HTTP中，GET、POST和HEAD的区别是什么?</p>
<p>​			答案：HEAD，只请求页面的首部。GET，请求指定的页面信息，并返回实体主体。POST，请求服务器接收所指定的文档，作为对所标识的URI新的从属实体。</p>
<p>​			1）HTTP定义了与服务器交互的不同方法，最基本的方法是GET和POST。事实上GET适用于多数请求，而保留POST仅用于更新站点。</p>
<p>​			2）在form表单中提交时，如果不指定Method，那么默认为GET请求，form中提交的数据将会附加在url之后，以?与url分开。字母数字字符原样发送，但空格转换为“+”号，其他符号转换为“%XX”，其中XX为该符号以十六进制表示的ASCII（或ISO Latin-1）值。GET请求提交的数据放置在HTTP请求协议头中，而POST提交的数据则放在实体数据中；GET方式提交的数据最多只能有1024字节，而POST没有此限制。</p>
<p>​			3）GET是浏览器向服务器请求最常用的方法。POST这个方法也是用来传送数据的，但是与GET不同的是，使用POST时，数据不是附在url后面传递的，而是在浏览器内部传输，它作为独立的行来传递，此时还必须要发送一个Content_length标题，以标明数据长度，随后一个空白行，就是实际传送的数据。网页的表单通常是用POST来传送的。</p>
</li>
<li>
<p>请描述下面这些协议的全称和中文解释（提示：都是工作在应用层）SMTP、POP3、HTTP、FTP、DNS。</p>
<p>​		答案：SMTP(Simple Mail Transfer Protocol)：邮件传输协议。</p>
<p>​			POP3(Post Office Protocol 3)：邮局协议第三版。</p>
<p>​			HTTP(Hypertext Transfer Protocol)：超文本传输协议。</p>
<p>​			FTP（File Transfer Protocol）：文件传输协议。</p>
<p>​			DNS（Domain Name System and Domain Name Service protocol）：域名系统（服务）协议。</p>
</li>
<li>
<p>如何理解HTTP的gzip压缩传输?</p>
<p>​		答案：HTTP下的gzip是一种流行的文件压缩算法，在Linux平台上使用十分广泛，gzip压缩传输能更加有效节约带宽流量。它先把文本压缩为.gz然后传输给浏览器，最后由浏览器负责解压缩呈现给用户，可以降低网络传输的字节数，加快网页的加载速度。</p>
</li>
<li>
<p>HTTP中几个状态码的含义。</p>
<p>​		答案：</p>
<p>​			1）5开头表示服务器错误，服务端存在问题：</p>
<p>​					501——服务器不支持请求的函数。</p>
<p>​					502——服务器暂时不可用，有时是为了防止系统发生过载。</p>
<p>​					503——服务器过载或暂停维修。</p>
<p>​					500：内部服务器错误（服务器端的CGI、ASP、JSP、PHP等程序发生错误）。</p>
<p>​			2）4开头表示客户端错误，请求存在语法错误或无法完成请求：</p>
<p>​					400——错误请求，如语法错误。</p>
<p>​					401——请求授权失败。</p>
<p>​					403——请求不允许。</p>
<p>​					404——访问的文件不存在。</p>
<p>​			3）3开头表示重定向，需进一步完成请求：</p>
<p>​					300——请求的资源可在多处得到。</p>
<p>​					301——删除请求数据。</p>
<p>​					302：临时重定向（指出被请求的文档已被临时移动到别处，此文档新的URL在Location响应头中给出）。</p>
<p>​					304：未修改（表示客户端缓存的版本是最新的，客户端应该继续使用它）</p>
<p>​			4）2开头表示成功，操作被成功接收处理：</p>
<p>​					200——通信成功。</p>
<p>​					201——提示知道新文件的URL。</p>
<p>​					202——接收和处理、但处理未完成。</p>
<p>​					203——返回信息不确定或不完整。</p>
<p>​					204——请求收到，但返回信息为空。</p>
<p>​					205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件。</p>
<p>​					206——服务器已经完成了部分用户的GET请求。</p>
</li>
<li>
<p>如何给动态文件（如PHP页面）做缓存?（即第二次刷新浏览器时，返回304状态）</p>
<p>​			答案：304状态的意思是当客户端向服务端请求时，服务端告诉客户端缓存的文档没有过期可以继续使用。可以通过以下方法作浏览器缓存：</p>
<p>​				1）当用户首次请求该文件时，通过HTTP HEAD的Last-Modified字段将该文件的最后修改日期发送到客户端，让客户端知道该文件的版本，例如：</p>
<p>​				<img src="@source/docs/theme-reco/img/common/image-20211019110001314.png" alt="image-20211019110001314"></p>
<p>​				2）在浏览器再次请求该文件时，会自动将该时间作为请求的HTTP HEAD的If-Modified-Since字段内容，例如：</p>
<p>​				<img src="@source/docs/theme-reco/img/common/image-20211019110020413.png" alt="image-20211019110020413"></p>
<p>​				3）服务端根据If-Modified-Since字段的内容（如果存在该字段)来判断客户端的文件是否已经过期，如果已经过期，那么重新返回新的文件，如果没有，那么只需要返回304状态码，就可结束输出，这样代表浏览器端的文件版本是最新的，不需要返回文件内容。</p>
</li>
<li>
<p>HTTPS的原理是什么?适用于什么场合?</p>
</li>
</ol>
<pre><code>​			答案：HTTPS可以理解为HTTP+SSL/TLS，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容需要SSL，用于安全的 HTTP 数据传输。它的原理是在真正请求数据前会和服务器进行几次握手验证身份，验证流程为：

​			1）浏览器将自己支持的一套加密规则发送给网站。

​			2）网站从中选出一组加密算法与HASH算法，并将自己的身份信息以证书的形式发回给浏览器。证书里面包含了网站地址、加密公钥，以及证书的颁发机构等信息。

​			3）浏览器获得网站证书之后浏览器要做以下工作。

​					① 验证证书的合法性（颁发证书的机构是否合法，证书中包含的网站地址是否与正在访问的地址一致等），如果证书受信任，那么浏览器栏里面会显示一个小锁头，否则会给出证书不受信任的提示；

​					② 如果证书受信任，或者是用户接收了不受信的证书，那么浏览器会生成一串随机数的密码，并用证书中提供的公钥加密；

​					③ 使用约定好的HASH算法计算握手消息，并使用生成的随机数对消息进行加密，最后将之前生成的所有信息发送给网站。

​			4）网站接收浏览器发来的数据之后要进行以下的操作：

​					① 使用自己的私钥将信息解密取出密码，使用密码解密浏览器发来的握手消息，并验证HASH是否与浏览器发来的一致；					② 使用密码加密一段握手消息，发送给浏览器。

​			5）浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，那么此时握手过程结束，之后所有的通信数据将由之前浏览器生成的随机密码并利用对称加密算法进行加密。

​			流程如下图所示。

​			![image-20211019110428840](./img/common/image-20211019110428840.png)

​	HTTPS可以适用于任何场合下，因为HTTP无法加密数据，通信时的数据在网络中使用明文传输，所以容易导致数据泄露和被篡改，甚至受到流量劫持、钓鱼攻击等安全问题。而HTTPS可以用来解决HTTP明文传输的缺陷，通过SSL/TSL证书保证数据在网络间加密后安全传输。
</code></pre>
<ol start="79">
<li>
<p>写出HTTP和HTTPS的区别。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019111210476.png" alt="image-20211019111210476"></p>
</li>
<li>
<p>用PHP写出显示客户端IP与服务器IP的代码。</p>
<p>​	答案：获取客户端IP可以使用$_SERVER['REMOTE_ADDR']方法获取。获取服务端IP可以使用$_SERVER['SERVER_ADDR']方法获取。</p>
</li>
</ol>
<h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式：</h3>
<ol start="81">
<li>
<p>写出正则表达式的组成。</p>
<ol>
<li>答案：一个正则表达式是由普通字符（数字或英文字符）以及特殊字符（也叫元字符）组成的文字模式，并且要求一个正则表达式中至少包含一个原子（普通字符）。</li>
</ol>
</li>
<li>
<p>请写出以下常用的正则表达式。</p>
<p>​		答案：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>匹配中文字符的正则表达式：[\u4e00-\u9fa5]
匹配双字节字符(包括汉字在内)：[^\x00-\xff]
匹配空行的正则表达式：\n[\s|]*\r
匹配HTML标记的正则表达式：/&lt;(.*)>.*&lt;\/\1>|&lt;(.*)\/>/
匹配首尾空格的正则表达式：(^\s*)|(\s*$)
匹配E-mail地址的正则表达式：\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
匹配网址URL的正则表达式：^[a-zA-z]+://(\\w+(-\\w+)*)(\\.(\\w+(-\\w+)*))*(\\?\\S*)?$
匹配账号是否合法（字母开头，允许5～16字节，允许字母、数字、下画线）：^[a-zA-Z] [a-zA-Z0-9_]{4,15}$
匹配国内电话号码：(\d{3}-|\d{4}-)?(\d{8}|\d{7})?
匹配腾讯QQ号：^[1-9]*[1-9][0-9]*$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>(^\s*)|(\s*$)这个正则表达式作用是什么?</p>
</li>
</ol>
<pre><code>​		答案：“^”表示匹配输入字符串的开始位置，“\s*”表示匹配任意的空白符，“$”表示以多个空白符结尾的字符串。所以该正则表达式的作用是，匹配以0个或多个空白符开头，或者匹配0个或多个空白符结尾的字符串。
</code></pre>
<ol start="84">
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>写出正则表达式中，以下关键字的含义。
$+?^[^]?&lt;g1>?!?&lt;!?:

答案：含义分别为：
“$”匹配输入字符串的结束位置；
“+?”匹配一个以上字符；
“^”匹配字符串开始；
“[^]”匹配范围以外；
“?&lt;g1>”分组别名，例如（?&lt;name>）；
“?!”匹配后面不是什么；
“?&lt;!”匹配前面不是；
“?:”匹配但不加入分组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>给一行文字$String，如何编写一个正规表达式，把$String内的HTML标签除去?</p>
<p>​	答案：根据题意，可使用正则匹配去掉HTML标签，实现代码如下：</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211019111722764.png" alt="image-20211019111722764"></p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>写出匹配邮箱地址和URL的两个正则表达式。类似下面的：
邮箱地址user_name.first@example.com.cn
URL地址http://www.example.com.cn/user_profile.php?uid=1
（提示：使用标准的正则表达式，就是PHP中preg_*类的正则处理函数能够解析的正则）

答案：邮箱正则处理方法：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/common/image-20211019111934708.png" alt="image-20211019111934708"></p>
<p>​	URL正则处理方法：</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211019111951908.png" alt="image-20211019111951908"></p>
</li>
<li>
<p>请写一个函数验证电子邮件的格式是否正确。</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211019112047837.png" alt="image-20211019112047837"></p>
</li>
</ol>
<p>这首尾两个斜杠“/”是正则表达式的限定符，这是Perl正则的标准，而PHP与Perl有相同的正则的规范。表示两个斜杠之间就是正则内容，后面的i表示忽略大小写。这个正则表达式表示的含义如下：</p>
<p>​		1）必须以（[0-9A-Za-z\-_\.]+)开头，也就是说，邮件地址以多个字母、数组、“-”或“.”开头。</p>
<p>​		2）紧接着是字符“@”。</p>
<p>​		3）然后接着是多个字母或数字的字符串，接着是一个字符“.”，接着是两个或三个字母；然后接下来一部分可有可无的：一个“.”后面跟着两个字母。</p>
<p>​		4）邮件的结束符是满足第三条的字符串。</p>
<ol start="88">
<li>
<p>有一个字符串变量$String，请编写正则表达式，去除其中的HTML标记。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>	答案：$result=preg_replace（〞/＜\/？[^＜＞]*？＞/〞，〞〞，$String）；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>PHP提供了两套正则表达式函数库，分别是哪两套?答案：分别是PCRE和POSIX两套正则表达式函数库。PCRE函数库，是一个Perl库，包括Perl兼容的正则表达式库，函数以preg_为前缀。POSIX函数库是便携式的操作系统接口，函数以ereg_为前缀。</p>
</li>
<li>
<p>对于用户输入一串字符串$String，要求$String中只能包含大于0的数字和英文逗号，请用正则表达式验证，对于不符合要求的$String返回出错信息。</p>
<ol>
<li>答案：通过preg_match()函数匹配符合正则规则的字符串，匹配大于0的数字和英文逗号的表达式为：/^([1-9,])+$/。其中，“/”表示后跟的字符为特殊字符不解析，“^”表示匹配的字符必须在开头，“[1-9,]”表示匹配大于0 的数字和英文逗号，“+”表示匹配加号前面的字符1次或n次，“$”表示匹配最末尾的字符。</li>
</ol>
<p><img src="@source/docs/theme-reco/img/common/image-20211019112447013.png" alt="image-20211019112447013"></p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>请写出一个正则表达式，用于匹配一个HTML文件中＜img/＞标记中的图片地址：$url=〞＜img src=′11.jpg′/＞〞；

答案：根据题意，可以对 img 内的标签进行转义，只针对 src 内的字符进行任意匹配，所以正则表达式可以写为：
/＜img[\s]*src=[′|\〞]（.*）[′|\〞][\s]*\/＞/。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211019112536777.png" alt="image-20211019112536777"></p>
</li>
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211019112633677.png" alt="image-20211019112633677"></p>
</li>
</ol>
<p><img src="@source/docs/theme-reco/img/common/image-20211019112645328.png" alt="image-20211019112645328"></p>
<ol start="94">
<li>按要求编写程序，有mail.log的一个文档，内容为若干邮件地址，用'\n'分隔换行。挑选sina.com的地址（包括从文件读取、过滤到列印出来）。</li>
</ol>
<pre><code>1. ​		答案：根据题意，实现代码如下：

   ![image-20211019112833383](./img/common/image-20211019112833383.png)

   程序运行结果为：Array ([0]=&gt; Array ([0]=&gt; 1@sina.com [1]=&gt; 3@sina.com))
</code></pre>
<ol start="95">
<li>
<p>请用PHP将一个字符串中的字母替换成**。**</p>
<p>答案：可以使用 preg_replace（）函数正则替换字符串，匹配方法为：preg_replace（′/[a-zA-Z]*/′，′**′，$str）；</p>
</li>
<li>
<p>【真题502】 用PHP基本函数及正则，将以下字符集中出现的所有手机号码，中间4位全部替换“<strong><strong>”然后再打印出来。例如，13712345678转变为137</strong></strong>5678再打印出来。答案：通过正则的匹配方法为：</p>
<p>​	<img src="@source/docs/theme-reco/img/common/image-20211019112953726.png" alt="image-20211019112953726"></p>
</li>
<li>
<p>【真题503】 写一个通用的正则表达式，可以匹配下面任何一个字符串：</p>
</li>
</ol>
<pre><code>![image-20211019113026501](./img/common/image-20211019113026501.png)

​	答案：该数字格式符合固话的格式，所以可以通过固话的格式进行匹配下面的字符串。正则为：/^([0-9]{3,4}-)?[0-9]{7,8}$/
</code></pre>
<ol start="98">
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211019113140525.png" alt="image-20211019113140525"></p>
<p>​	答案：这是一个将日期格式从MM/DD/YYYY的格式转化成DD/MM/YYYY格式的正则替换表达式，该表达式可以用来转换日期格式的排序。通过式子“\2/\1/\3”替换对应的正则格式位置。</p>
</li>
<li>
<p>写出一个正则表达式，过滤网页上的所有JS/VBS脚本（即把script标记及其内容都去掉）。</p>
<ol>
<li>​	答案：该正则表达式实现的代码如下：</li>
<li><img src="@source/docs/theme-reco/img/common/image-20211019113210768.png" alt="image-20211019113210768"></li>
</ol>
</li>
<li>
<p>写出一个正则表达式用于提取一个网页中的所有链接。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019113305300.png" alt="image-20211019113305300"></p>
</li>
</ol>
<h3 id="php面向对象和设计模式" tabindex="-1"><a class="header-anchor" href="#php面向对象和设计模式" aria-hidden="true">#</a> PHP面向对象和设计模式</h3>
<ol start="101">
<li>作用域操作符在哪些场合下使用?答案：作用域操作符的使用场合如下所示：</li>
</ol>
<pre><code> ​		（1）类中self::类常量，self::静态熟悉，self::方法()，parent::方法()。

 ​		（2）子类中parent::类常量，parent::静态属性（只能是public，protected），parent::方法（只能是public，protected）。

 ​		（3）类外类名::类常量，类名::静态属性(只能是public)，类名::静态方法(只能是public)。
</code></pre>
<ol start="102">
<li>
<p>面向对象中，self与$this，parent的区别是什么?</p>
<p>​		答案：$this指向的是当前对象中的指针，而self指向的是当前类的指针，parent指向的是父类的指针。</p>
</li>
<li>
<p>使用final关键字时，应注意的问题有哪些?</p>
<p>​	答案：final关键字定义的类禁止继承，定义的成员禁止继承，定义的方法禁止重写。</p>
</li>
<li>
<p>final关键字能定义类中的成员属性吗?</p>
<p>​	答案：不能，类的成员属性只能用public、private、protected、var 来定义。</p>
</li>
<li>
<p>说出几个smarty3的系统插件，并说明其作用。</p>
<p>​	答案：</p>
<p>{append} 追加属性信息</p>
<p>{assign} 定义属性并赋值</p>
<p>{config_load} 加载配置文件</p>
<p>{debug} 调试</p>
<p>{extends} 模板继承</p>
<p>{for} 循环</p>
<p>{foreach}，</p>
<p>{foreachelse}</p>
<p>循环遍历</p>
<p>{function} 在模板中定义函数{if}，{elseif}，{else} 判断</p>
<p>{include} 导入其他模板</p>
</li>
<li>
<p>PHP加速模式/扩展有哪些?PHP调试模式/工具有哪些?</p>
<p>答案：可以使用Zend Optimizer加速扩展。PHP的调试工具有xdebug。</p>
</li>
<li>
<p>框架中什么是单一入口和多入口?单一入口的优缺点是什么?</p>
<p>​	答案：单一入口的应用程序就是说用一个文件处理所有的HTTP请求，例如不管是列表页还是文章页，都是从浏览器访问index.php文件，这个文件就是这个应用程序的单一入口。</p>
<p>​		框架的多入口是指可以通过访问不同的PHP文件运行对应的功能，而不需要先访问指定的入口文件。</p>
<p>​		单一入口的优点：</p>
<p>​			1）由于所有的HTTP请求都由index.php接收，所以可以集中进行安全性检查，如果不是单一入口，那么开发者就必须在每一个文件的开头加上安全性检查代码。</p>
<p>​			2）还可以对url参数和post方法进行必要的检查和对特殊字符过滤、记录日志、访问统计等各种可以集中处理的任务。</p>
<p>​		单一入口的缺点：</p>
<p>​				由于所有HTTP请求都是针对index.php，所以程序的url看起来不美观，特别是对搜索引擎来说很不友好。</p>
</li>
<li>
<p>什么是单点入口?</p>
<p>​		答案：单点入口的意思是整个程序只有一个入口进行访问，所有功能的实现都通过这个入口转发。例如，codeIgniter框架就是通过index.php作为单入口。</p>
<p>​		它的优点如下：</p>
<p>​				1）程序的结果清晰明了。</p>
<p>​				2）方便处理系统全局变量，方法都可以在单入口中加载处理，并且对数据过滤，也可以在入口文件中注册需要使用的对象和变量，在其他页面中使用。</p>
</li>
<li>
<p>写出Zend框架的目录结构，简单说明目录作用。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019132521435.png" alt="image-20211019132521435"></p>
</li>
<li>
<p>对于大流量的网站，从软件结构上采用什么样的方法可以解决或缓解访问量问题?</p>
<p>​	答案：对于大流量网站的访问，可以通过以下方法解决：</p>
<p>1）保证服务器硬件能够支持大流量的访问。服务器是支撑流量的载体，如果流量超过10万，就必须配置一台更高性能的专用服务器解决问题，否则再怎么优化也没有办法解决性能问题。</p>
<p>2）优化数据库访问。服务器负载过大的根本原因是CPU的负荷过大，可以让前端数据实现静态化，减少数据库的访问，尝试使用动态数据存储到缓存文件中，动态调用这些文件，减少不必要的数据库访问。</p>
<p>3）禁止外部的盗链。如果外部网站引用了本网站的图片或者文件，会带来大量的负载压力，就应该严格限制外部网站对本网站的图片或者文件进行盗链。</p>
<p>4）控制大文件的下载。因为大量文件下载会消耗CPU，使网站响应能力下降，所以尽量不要提供超过2MB的大文件下载。</p>
<p>5）实行主机分流，可以将不同的文件放在不同的主机上，提供不同的镜像给用户下载，从而减轻主服务器的压力。</p>
<p>6）使用流量分析统计软件，可以知道哪些地方耗费流量大，进而有针对性地对页面进行优化，提高访问速度。</p>
<p>7）使用Redis或Memcache等缓存技术，提高数据的访问速度，减少对数据库的不必要的请求加载。</p>
</li>
<li>
<p>说说对缓存技术的了解。</p>
<p>​		答案：对缓存技术的了解有以下几点：</p>
<p>​	1）缓存技术可以将不常变的数据存储起来避免数据的重复创建、处理和传输，可有效提高性能。</p>
<p>​	2）对于同一数据、逻辑功能和用户界面的多次请求，每次都进行请求处理会消耗很大的资源，从而造成系统的不稳定。而缓存技术可以降低数据库的访问次数，减轻数据库的负担和提高数据库的服务能力。</p>
<p>​	3）缓存技术可以保证部分数据的正常访问，如果数据库存在意外停止，那么当用户访问时，如果有缓存，就优先使用缓存而不需要访问数据库。这种方法不仅不会影响用户的使用，而且还提高了系统的可用性。</p>
<p>系统使用缓存技术主要优势在于可以减少交互的通信量，有效减少进程的执行和数据的传输量；降低系统中的处理量，减少处理次数；降低磁盘的访问次数等。</p>
</li>
</ol>
<h3 id="php扩展库" tabindex="-1"><a class="header-anchor" href="#php扩展库" aria-hidden="true">#</a> PHP扩展库</h3>
<ol start="112">
<li>写出使用GD2库创建图像的步骤。</li>
</ol>
<pre><code> ​		答案：GD2库可以用于绘画验证码、绘画海报、绘画图片等，以下简单介绍使用GD2库绘画二维码的步骤：

 ​	1）使用imagecreate（)函数创建一个空白画布。

 ​	2）使用imagecolorallocate（)函数设置画布背景颜色，可以使用RGB设置颜色。

 ​	3）使用imagecolorallocate（)设置文字颜色。

 ​	4）使用imageString（)在画布上书写文字。

 ​	5）对应的可以设置以png、gif、jpeg的图片格式将图像输出到浏览器或文件：由于图片格式不同，对应的函数可以为imagepng（)、imagegif（)、imagejpeg（)等。

 ​	6）使用完GD2库后，需要使用imagedestroy（)清除图像资源。
</code></pre>
<ol start="113">
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211019134133601.png" alt="image-20211019134133601"></p>
</li>
<li>
<p><img src="@source/docs/theme-reco/img/common/image-20211019134159699.png" alt="image-20211019134159699"></p>
</li>
<li>
<p>PHP中获取图像尺寸大小的方法是什么?</p>
<p>​		答案：</p>
<p>​		1）可以使用getimagesize（）获取图片的大小及相关信息，使用方法为：getimagesize（图片路径），如果成功获取，则返回数组，如果不成功，则返回false。</p>
<p>​		2）可以使用Imagesx（)函数用于获取图像的宽度，单位为像素，返回值为整型。</p>
<p>​		3）可以使用Imagesy（)函数用于获取图像的高度，单位为像素，返回值为整型。</p>
</li>
<li>
<p>怎么找到php.ini的路径?</p>
<p>​		答案：可以使用以下的方法找到php.ini的路径。</p>
<p>​		1）找到PHP文件夹，直接在PHP文件夹里面搜索php.ini即可找到。</p>
<p>​		2）可以创建一个PHP页面，在里面输出phpinfo（)函数的返回结果，然后找到Loaded Configuration File，即可看到php.ini的存放路径。</p>
</li>
<li>
<p>magic_quotes_gpc()、magic_quotes_runtime()的意思是什么?</p>
<p>​		答案：</p>
<p>​		在PHP配置中，如果将magic_quotes_gps=off配置改为on，就会自动让POST、GET、Cookie中的字符串进行转义，即数据中存在的单引号、双引号、反斜杠会通过“\”进行转义字符。</p>
<p>​		magic_quotes_runtime（）是PHP中的函数，不需要在php.ini中开启，当函数内的参数为true时，每次从数据库取出的数据中，如果存在单引号、双引号、反斜杠，就会自动加上反斜杠（\）进行转义。</p>
</li>
<li>
<p>MySQL字符集set names*命令设置哪几个系统变量的值?（）</p>
<p>主要设置客户端使用的编码字符集（character_set_client）为数据库给客户端返回时使用的字符集设定，（character_set_results）为连接数据库的字符集设置编码类型，（character_set_connection）等三个系统变量的值。</p>
</li>
<li>
<p>Nginx如何实现pathinfo?</p>
<p>​		答案：PHP中有两个pathinfo：</p>
<p>​			一个是环境变量$_SERVER['PATH_INFO']；</p>
<p>​			另一个是pathinfo()函数，pathinfo()函数以数组的形式返回文件路径的信息。Nginx默认是不会设置PATH_INFO环境变量的值的，需要PHP设置cgi.fix_pathinfo=1来完成路径信息的获取，但同时会带来安全隐患。把cgi.fix_pathinfo设置为0，这样PHP就获取不到PATH_INFO信息，那些依赖PATH_INFO进行URL美化的程序就会失效。</p>
<p>​			可以通过以下方法实现pathinfo：</p>
<p>​				1）通过rewrite方式代替PHP中的PATH_INFO。</p>
<p>​				2）Nginx配置文件中设置PATH_INFO值。</p>
</li>
<li>
<p>Apache默认使用进程管理还是线程管理?如何判断并设置最大连接数?</p>
<p>​		答案：Apache主要有进程管理（Prefork）和线程管理（Worker）两种模式。进程管理模式是Apache的默认使用方式，该模式使用多个子进程，每个子进程只有一个线程。每个进程在某个确定的时间只能维持一个连接，虽然效率高，但内存占用量比较大。线程管理使用多个子进程，每个子进程有多个线程，每个线程在某个确定的时间只能维持一个连接，内存占用量比较小，适合高流量的HTTP服务器。缺点是假如一个线程崩溃，整个进程就会连同其任何线程一起崩溃。</p>
<p>​		对于判断进程数，可以查看Apache下的prefork模式配置详解，会出现如下代码，可以通过查看MaxClients来获取当前Apache支持的最大连接数。</p>
<p>​		<img src="@source/docs/theme-reco/img/common/image-20211019134948770.png" alt="image-20211019134948770"></p>
<p>ServerLimit：默认的MaxClient最大是256个线程，如果想设置更大的MaxClient值，则必须设置这个ServerLimit参数。20000是ServerLimit这个参数的最大值。如果需要更大，则必须编译Apache。MaxClients：限定同一时间客户端最大接入请求的数量（单个进程并发线程数），默认为256。任何超过MaxClients限制的请求都将进入等候队列，一旦一个连接被释放，队列中的请求将得到服务。要增大这个值，必须同时增大ServerLimit的值。</p>
</li>
<li>
<p>在很多时候，可以通过Apache的主配置文件来设置对test目录的访问权限控制。例如：http://ip/test，如果需设置test下的一个子目录的访问控制权限，那么是否可以在主配置文件中修改?如果不可以，则应如何解决?</p>
<p>​		答案：是可以的，但需要在控制的子目录下创建.htaccess文件，实现写入访问控制。htaccess文件是Apache服务器中的一个配置文件，它负责相关目录下的网页配置。通过htaccess文件可以实现：网页301重定向、自定义404错误页面、改变文件扩展名、允许/阻止特定的用户或者目录的访问、禁止目录列表、配置默认文档等功能。</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211019135410926.png" alt="image-20211019135410926"></p>
</li>
<li>
<p>写出Apache与Nginx的区别。</p>
<p>​		答案：Nginx相对于Apache的区别为：</p>
<p>​		1）Nginx属于轻量级，同样运行Web 服务，比Apache 占用更少的内存及资源。</p>
<p>​		2）Nginx抗并发，Nginx 处理请求是异步非阻塞的，而Apache 则是阻塞型的。</p>
<p>​		3）在高并发下Nginx 能保持低资源低消耗高性能。</p>
<p>​		4）Nginx高度模块化的设计，编写模块相对简单。</p>
<p>​		5）Nginx社区活跃，各种高性能模块开发迅速。</p>
<p>​			Apache 相对于Nginx 的优点如下：</p>
<p>​		1）Apache的rewrite比Nginx 的rewrite强大。</p>
<p>​		2）Apache模块非常多，基本想到的都可以找到。</p>
<p>​		3）Apache的bug少，Nginx的bug相对较多。</p>
<p>​			Apache 相对于Nginx 的优点如下：Apache的rewrite比Nginx的rewrite强大，模块非常多，基本想到的都可以找到，比较稳定，少bug，Nginx 的bug 相对较多。</p>
<p>​			原因：这得益于Nginx使用了最新的epoll（Linux 2.6内核）和kqueue（freebsd）网络I/O模型，而Apache则使用的是传统的select模型。目前，能够承受高并发访问的Squid、Memcached等都采用epoll网络I/O模型。而处理大量的连接的读写，Apache所采用的select网络I/O模型则非常低效。</p>
<p>​			Microsoft Windows IIS是Web服务器中的一个，PHP是可以在IIS服务器上运行的，除了IIS外，PHP还可以在Nginx、Apache等服务器上运行。</p>
</li>
<li>
<p>说说你对SVN的了解，它的优缺点是什么?</p>
<p>​		答案：SVN是一个代码管理工具，它可以帮助团队统一的负责代码托管和帮助团队开发项目的整理合并，提高开发人员的工作效率。项目负责人可以根据需求可以让代码回到任意版本。SVN的优点如下：代码进行集中管理，版本控制容易，操作比较简单，权限控制方便，功能完善，界面简洁上手容易。SVN的缺点如下：不能随意修改服务器项目文件夹，多人同时修改一个文件后提交代码会出现冲突。</p>
</li>
<li>
<p>请描述出OSI七层网络模型的名称。</p>
<p>​		答案：OSI参考模型将复杂的协议分成了7层（见下表），每一层各司其职，并且能独立使用，这相当于软件中的模块化开发，有较强的扩展性和灵活性。分层是一种管理哲学，将同一类功能的网络协议分到一层中，使协议变得灵活可控。	<img src="@source/docs/theme-reco/img/common/image-20211019160055571.png" alt="image-20211019160055571"></p>
</li>
<li>
<p>描述两点以上XHTML和HTML最显著的区别。</p>
</li>
</ol>
<pre><code> ​		答案：1）XHTML必须强制指定文档类型为DocType，HTML则不需要。2）XHTML所有标签必须闭合，HTML比较随意。
</code></pre>
<ol start="126">
<li>
<p>请写出单点登录原理。</p>
<p>​		答案：单点登录全称Single Sign On（SSO），是指在多系统应用群中登录一个系统，便可在其他所有系统中得到授权而无须再次登录，包括单点登录与单点注销两部分。</p>
<p>​		1）用户访问系统1受保护资源，系统1发现用户未登录，跳转至SSO认证中心，并将自己的地址作为参数。</p>
<p>​		2）SSO认证中心发现用户未登录，将用户引导至登录页面。</p>
<p>​		3）用户输入用户名密码提交登录申请。</p>
<p>​		4）SSO认证中心校验用户信息，创建用户与SSO认证中心之间的会话，称为全局会话，同时创建授权令牌。</p>
<p>​		5）SSO认证中心带着令牌跳转回最初的请求地址（系统1）。</p>
<p>​		6）系统1拿到令牌，去SSO认证中心校验令牌是否有效。</p>
<p>​		7）SSO认证中心校验令牌，返回有效，注册系统1。</p>
<p>​		8）系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源。</p>
<p>​		9）用户访问系统2的受保护资源。</p>
<p>​		10）系统2发现用户未登录，跳转至SSO认证中心，并将自己的地址作为参数。</p>
<p>​		11）SSO认证中心发现用户已登录，跳转回系统2的地址，并附上令牌。</p>
<p>​		12）系统2拿到令牌，去SSO认证中心校验令牌是否有效。</p>
<p>​		13）SSO认证中心校验令牌，返回有效，注册系统2。</p>
<p>​		14）系统2使用该令牌创建与用户的局部会话，返回受保护资源。</p>
<p>​		15）用户登录成功之后，会与SSO认证中心及各个子系统建立会话，用户与SSO认证中心建立的会话称为全局会话，用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统时，受保护资源将不再通过SSO认证中心，全局会话与局部会话有如下约束关系：局部会话存在，全局会话一定存在；全局会话存在，局部会话不一定存在；全局会话销毁，局部会话必须销毁。</p>
</li>
<li>
<p>什么是静态路由?其特点是什么?什么是动态路由?其特点是什么?</p>
<p>​		答案：静态路由是由系统管理员设计与构建的路由表规定的路由，适用于网关数量有限且网络拓扑结构不经常变化的网络。其缺点是不能动态地适用网络状况的变化，当网络状况变化后，必须由网络管理员修改路由表。</p>
<p>​			动态路由是由路由选择协议动态构建的，路由协议之间通过交换各自所拥有的路由信息实时更新路由表的内容。动态路由可以自动学习网络的拓扑结构，并更新路由表。其缺点是路由广播更新信息将占据大量的网络带宽。</p>
</li>
<li>
<p>“2M”ADSL宽带连接，理想情况下，最大下载速度是多少kbit/s?</p>
<p>​		答案：因为网络的带宽一般按bit/s（位每秒）作为单位，所以“2M”的ADSL宽带网速可以达到2Mbit/s。而因为网速是以B/s（字节每秒）作为单位，1Byte=8bit，所以“2M”宽带理想的下载速度应该是：2Mbit/s/8=256KB/s，即256KB/s。</p>
</li>
<li></li>
</ol>
<p>​</p>
</div></template>



<template><div><h1 id="高性能php-7" tabindex="-1"><a class="header-anchor" href="#高性能php-7" aria-hidden="true">#</a> 高性能PHP 7</h1>
<p>Altaf Hussain</p>
<h2 id="◆-2-php7新特性" tabindex="-1"><a class="header-anchor" href="#◆-2-php7新特性" aria-hidden="true">#</a> ◆ 2 php7新特性：</h2>
<h3 id="◆-oop特性" tabindex="-1"><a class="header-anchor" href="#◆-oop特性" aria-hidden="true">#</a> ◆ OOP特性</h3>
<blockquote>
<blockquote>
<p>在使用PHP 7之前，我们在函数和类之间传递参数时不必声明变量类型。同样地，在返回数据时也不必声明变量类型。任何数据类型都可以被传递、返回。这样便给PHP带来一个很大的问题——PHP不清楚你传递的是什么类型的变量，函数、方法接收到的变量也不知道是什么类型。为了解决这个问题，PHP 7引入了类型声明，目前明确的有两类变量可以声明类型：形参、返回值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7支持的形参类型声明的类型有整型、浮点型、字符串型、布尔类型，可以用在函数形参及对象的方法形参上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下，形参类型声明不是被完全限制的，这就意味着我们可以传递一个浮点数给期望得到整型数的方法。</p>
<img src="\img\6.高性能PHP 7\image-20211202194841659.png" alt="image-20211202194841659" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当然，也可以做一些限制。代码如下。</p>
<img src="\img\6.高性能PHP 7\image-20211202194919475.png" alt="image-20211202194919475" style="zoom:67%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此时我们若再传递一个浮点数给age方法的话，便会得到一个Uncaught TypeError，这个Fatal错误告诉我们Person::age只能接受一个整型数而非浮点型数。在需要字符串形参的情况下，如果你不提供字符串形参的话，也会出现类似的报错。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>返回类型声明PHP 7的另一个重要特性就是支持返回类型的声明，无论是在函数还是对象的方法中。这有点类似形参类型声明，我们对刚才的Person类稍加修改，代码如下。</p>
<img src="\img\6.高性能PHP 7\image-20211202195035651.png" alt="image-20211202195035651" style="zoom:67%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7引入了批量的use声明，下面列举三种use声明的模式。</p>
<p>·　非混合模式的use声明</p>
<p>·　混合模式的use声明</p>
<p>·　复合模式的use声明</p>
<p>![](\img\6.高性能PHP 7\image-20211202195259028.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>![image-20211202195318216](\img\6.高性能PHP 7\image-20211202195318216.png)</p>
<p>![image-20211202195417892](\img\6.高性能PHP 7\image-20211202195417892.png)</p>
<p>虽然我们看到的匿名类是没有命名的，但在PHP内部，会在内存的引用地址表中为其分配一个全局唯一的名称。例如全局的一个匿名类的名称为class@0x4f6a8d124。</p>
<img src="\img\6.高性能PHP 7\image-20211202195530048.png" alt="image-20211202195530048" style="zoom:67%;" />
<p>匿名类在继承方面与命名类相同，一样可以继承父类及父类的方法，以下面代码为例。</p>
<p>![image-20211202195623628](\img\6.高性能PHP 7\image-20211202195623628.png)</p>
<p>Throwable接口：</p>
<p>PHP 7提供了一种全局的接口，使得所有的类都可以基于此使用throw关键字。</p>
<p>在PHP中，异常与错误难免会遇到。在PHP 7之前，异常可以被截获，但是错误不可能被截获。从PHP 7开始，任何完整程序或一部分程序中的Fatal错误都可以被截获。为了更好地截获诸多的错误（大多数的Fatal错误），PHP7提供了throwable接口，异常与错误都继承于这个接口。</p>
<p>我们自己写的PHP类是不能继承throwable接口的，如果希望继承throwable接口，需要继承某个异常类。</p>
<p>大多数情况下，error实例会在大部分Fatal错误的情况下被抛出，但是对于一些错误情况，只有error的子实例会被抛出，例如TypeError、DivisionByZeroError、ParseError等。</p>
<img src="\img\6.高性能PHP 7\image-20211202195931000.png" alt="image-20211202195931000" style="zoom:67%;" />
</blockquote>
</blockquote>
<h3 id="◆-新的操作符" tabindex="-1"><a class="header-anchor" href="#◆-新的操作符" aria-hidden="true">#</a> ◆ 新的操作符</h3>
<blockquote>
<blockquote>
<p><strong>(1)太空飞船操作符：</strong></p>
<p>（&lt;=&gt;）太空飞船操作符在比较变量时非常有用，这里说的变量包括数值（字符串型、整型、浮点型等）、数组、对象。这个操作符将三个比较符号（==、&lt;、&gt;）打包在了一起，可以用于书写清晰易读的用于usort、uasort、uksort的回调函数，具体使用规则如下。</p>
<p>·　当符号两边相等时返回0</p>
<p>·　当符号右边大于符号左边时返回-1</p>
<p>·　当符号左边大于符号右边时返回1</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以用这个操作符来对比字符串、对象、数组，这些类型的比较都基于标准的PHP比较方式。</p>
</blockquote>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function space_sort($a,$b):int{

	return  $a &lt;=>$b;

}

$arr = [12,31,5,66,3,11,3,66];

usort($arr,'space_srot');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)null合并运算符（??）</p>
<p>![image-20211202200820337](\img\6.高性能PHP 7\image-20211202200820337.png)</p>
<p>![image-20211202200834269](\img\6.高性能PHP 7\image-20211202200834269.png)</p>
<p>◆ 其他特性和变更</p>
<blockquote>
<blockquote>
<p>（1）常量数组：</p>
<img src="\img\6.高性能PHP 7\image-20211202200954694.png" alt="image-20211202200954694" style="zoom:67%;" />
<p>（2）Switch中的多个default默认值：</p>
<img src="\img\6.高性能PHP 7\image-20211202201026605.png" alt="image-20211202201026605" style="zoom:67%;" />
<p>（3）Session_start函数中的选项数组：</p>
<p>在PHP 7之前，当我们要使用session时，必须先调用session_start()函数。这个函数并没有参数需要传递，所有session相关的配置都在php.ini文件中。从PHP 7开始，可以在调用函数时传递参数选项数组，这些设置信息将覆盖php.ini中的session配置。</p>
<img src="\img\6.高性能PHP 7\image-20211202201154872.png" alt="image-20211202201154872" style="zoom:67%;" />
<p>（4）Unserialize函数引入过滤器：</p>
<p>![image-20211202201320597](\img\6.高性能PHP 7\image-20211202201320597.png)</p>
<p>在本章中，我们讨论了新的OOP特性，例如类型声明、匿名函数、Throwable接口、批量use声明命名空间以及两个很重要的新操作符：宇宙飞船操作符、null合并运算。同时，我们讨论了统一变量语法和一些新的小特性，例如常量数组、switch中的唯一default默认值、Session_start()函数的选项数组等。</p>
</blockquote>
</blockquote>
<h2 id="◆-3-php-7应用性能提升" tabindex="-1"><a class="header-anchor" href="#◆-3-php-7应用性能提升" aria-hidden="true">#</a> ◆ 3 PHP 7应用性能提升</h2>
<blockquote>
<blockquote>
<p>为了提升性能，PHP 7已经完全基于PHPNG进行重写。不过，依然有很多其他方法可以用来进一步提升PHP 7的应用性能，譬如高性能的代码、采用最佳实践、WebServer调优、缓存等。</p>
</blockquote>
</blockquote>
<h3 id="◆-nginx与apache" tabindex="-1"><a class="header-anchor" href="#◆-nginx与apache" aria-hidden="true">#</a> ◆ Nginx与Apache</h3>
<blockquote>
<blockquote>
<p>因为Apache是在进程内部解析大多数脚本语言的，所以没有软件间通信的开销。</p>
<p>Apache处理请求的模式有三种：prefork模式（线程创建进程）、worker模式（进程创建线程）、事件驱动模式（与Worker模式相似，但这种模式会为连接保持创建专用线程，活动请求使用另外创建的线程）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每一个请求都会由一个线程或一个进程处理，所以Apache在处理请求时开销很大。当它应用在高并发场景时，其性能低下的问题便会突显出来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了解决高并发场景下的性能低下问题，Nginx应运而生。Nginx提供了异步、事件驱动、非阻塞请求处理。由于请求异步处理，Nginx不必等待每个请求完成，避免锁住资源。Nginx创建许多工作进程，每个工作进程可以处理数千个链接，因此可以使用很少的进程来承载高并发流量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx没有内置任何解释型语言</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常我们认为Nginx要快于Apache，但是在一些场景下，例如静态资源（图片资源、.css与.js文件等）下，Apache也有自己的优势。在构建高性能服务器时，Apache并不是问题所在，PHP才是真正的瓶颈。</p>
</blockquote>
</blockquote>
<h3 id="◆-http-server优化" tabindex="-1"><a class="header-anchor" href="#◆-http-server优化" aria-hidden="true">#</a> ◆ HTTP Server优化</h3>
<blockquote>
<blockquote>
<p>缓存静态文件通常情况下，图片、css文件、js文件、字体文件这些静态文件的变更是不频繁的。所以，这类资源可以很好地被缓存在用户设备上。为了达到这样的效果，WebServer程序需要添加特殊的响应头信息，以便让用户在浏览内容的同时将静态内容缓存在用户设备上。其在Apache和Nginx上的配置分别如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Apache：</p>
<p>​		用户设备在Apache上缓存静态内容时，配置如下。</p>
<p>![image-20211202201842605](\img\6.高性能PHP 7\image-20211202201842605.png)</p>
<p>​		上面的内容需要被配置在.htaccess文件中，我们使用到Apache的FilesMatch命令来匹配相应文件的扩展名。如果对应文件扩展名的文件被匹配到，Apache将添加头信息，以标识这类文件可以被用户端设备缓存七天，浏览器发现这样的头信息后便会缓存文件，在这个例子中浏览器会缓存七天。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx：</p>
<p>​		下面的内容需要配置到/etc/nginx/sites-available/your-virtual-hostconf-file文件中。</p>
<p>​		![image-20211202201918474](\img\6.高性能PHP 7\image-20211202201918474.png)</p>
<p>​		在上面的配置中，我们使用到了Nginx的Location区块定义了一批文件扩展名，过期时间被标记为七天。Nginx同样会在匹配到相应静态文件时添加对应的头信息。设置好上面的配置信息后，响应头信息内容如下图所示。</p>
<p>![image-20211202201937069](\img\6.高性能PHP 7\image-20211202201937069.png)</p>
<p>从上图中可以清晰地看到，.js文件是从Cache中加载的，并且被设置了七天或604800秒的有效期。在有效时间耗尽时，浏览器会请求服务器资源并且再次将静态内容缓存在本地，同时设置七天的有效期。这一切都取决于我们在Web Server中对缓存控制头信息进行的配置。</p>
</blockquote>
</blockquote>
<h3 id="◆-http持久链接" tabindex="-1"><a class="header-anchor" href="#◆-http持久链接" aria-hidden="true">#</a> ◆ HTTP持久链接</h3>
<blockquote>
<blockquote>
<p>HTTP持久链接：（或者称为HTTP Keep-alive技术）表示一条TCP/IP链接上承载着多个上下行请求。相对于传统的单链接模式（一次请求需要创建一条单独的BS链接的模式）而言，HTTP Keep-alive技术有着大幅度的性能提升。下列几种情况分别是HTTP keep-alive模式的优点。</p>
<p>·　CPU和内存的负载会减轻。因为同一时刻打开的TCP链接数变少了，后续请求和响应无须打开新链接，可以继续基于这些TCP链接发送上下行数据。</p>
<p>·　当TCP链接建立后，请求的等待时间将会减少。TCP建立链接时的三次握手发生在用户侧与Server之间。当握手成功时，一条TCP链接就被建立起来了。在Keepalive模式下，握手环节是一次性的，即在链接建立时便会发生。链接建立后发生的数据传递不产生握手环节，这部分的开销将会被优化，因此可以有效地提升请求上下行数据的性能。</p>
<p>·　网络阻塞情况减轻。因为在同一时刻只会有少数的链接保持着。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它的不足：许多的服务器有并发数限制，当并发数上升到一定程度时，程序的性能将大幅下降。为了解决这个问题，设置链接超时时间便非常有必要。设置以后，超过设定时间的链接将会被自动关闭。</p>
<p>现在我们来看看如何配置来启动Apache与Nginx技术方案下的Keep-alive模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Apache程序开启Keep-alive的方式有两种，分别是通过修改.htaccess文件的方式和修改Apache配置文件的方式。若是通过修改.htaccess文件的方式来开启Keep-alive，需要将下面的内容配置在你的.htaccess文件末尾。</p>
<p>![image-20211202202225299](\img\6.高性能PHP 7\image-20211202202225299.png)</p>
<p>在上面的这段配置中，我们为keep-alive设置了链接头信息。由于.htaccess配置文件相对于Apache的配置文件有更高的优先级，所以无论Apache配置文件如何改动，keep-alive的配置都会采用.htaccess文件中的这段配置。若是通过修改Apache配置文件的方式来开启Keep-alive，我们需要修改三处配置项。搜索下列内容并按照如下示例进行修改。</p>
<img src="\img\6.高性能PHP 7\image-20211202202243842.png" alt="image-20211202202243842" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过设置KeepAlive为On，来开启Keep-alive的支持。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MaxKeepAliveRequests配置，它限制了Keep-alive在同一时刻的最大链接数。100是Apache的默认配置，这个值可以根据实际需求进行修改。一般为了追求性能的最大化，这个值应该设置得高一些。如果设置为0，就意味着Apache将不对Keep-alive的链接数进行限制，不建议大家这样设置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>KeepAliveTimeout，通常设置为100秒，意味着Apache针对同一个长链接保持的等待时间是100秒。如果对于同一长链接，Apache等待了100秒还未收到下一条请求，便会主动断开。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>NginxHTTP请求的keep-alive是由Nginx的http_core模块支持的，默认情况下是开启的。在Nginx的配置文件中，我们可以对长链接相关的配置稍加修改，例如超时时间。打开nginx配置文件，并且编辑下面的信息，设置需要的配置值。</p>
<p>![image-20211202202349766](\img\6.高性能PHP 7\image-20211202202349766.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置中，keepalive_requests定义了单个客户端在一条长链接链路上可以同时发起的请求数，keepalive_timeout定义了长链接的超时时间，超过了这个时间后，Nginx会断开长链接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_1-gzip压缩" tabindex="-1"><a class="header-anchor" href="#_1-gzip压缩" aria-hidden="true">#</a> （1）GZIP压缩：</h4>
<p>将网络中传输的内容进行压缩后再传递，可以有效减轻传输负担，从而提升HTTP请求的响应速度。Apache与Nginx都支持GZIP压缩，现如今的大多数浏览器也都已支持GZIP压缩数据的解析。当GZIP压缩开启后，HTTP服务器会将每次输出的HTML、CSS、JavaScript、图片等文件进行压缩，缩小其大小，这样内容会被更快地送达用户终端。浏览器会在请求服务器时告知自己是否支持GZIP压缩，若支持，服务器端程序在输出内容时便使用GZIP压缩。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Apache依然是修改.htaccess文件，具体如下。</p>
<p>![image-20211202203007874](\img\6.高性能PHP 7\image-20211202203007874.png)</p>
<p>在上述配置内容中，我们使用Apache deflate模块开启压缩，通过配置文件类型过滤器，对.html、.xml、.css、.js等文件进行内容输出前压缩。我们没有设置图片的压缩处理，因为压缩后的图片质量会受到很大影响。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx与前面的配置类似，将下列内容置于需要使用压缩技术的虚拟机配置中即可。</p>
<p>![image-20211202203026765](\img\6.高性能PHP 7\image-20211202203026765.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>GZIP压缩被gzip on设置开启，之后的gzip_vary on将会启用varying头。gzip_types这行配置定义了将会被压缩的文件类型，任何类型的文件若需要压缩，都可以在这里定义。gzip_com_level 4表明压缩等级，此处的值请小心斟酌，不宜设置太高，取值区间是1～9，建议设置中间值。</p>
<p>![image-20211202203101084](\img\6.高性能PHP 7\image-20211202203101084.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_2-php独立部署服务" tabindex="-1"><a class="header-anchor" href="#_2-php独立部署服务" aria-hidden="true">#</a> （2）PHP独立部署服务：</h4>
<p>Apache是以mod_php模块的方式加载PHP的。在这种方式下，PHP与Apache耦合得很紧，所有的请求都会由Apache模块处理，这会非常消耗机器的硬件资源。我们可以让PHP-FPM与Apache结合，它们都独立部署，通过FastCGI协议相互传递数据。这样的话，Apache只需关注HTTP请求链接即可，PHP进程则由PHP-FPM创建与维护。Nginx则有些不同，Nginx不提供内建PHP模块的方法，所以Nginx与PHP本身就是相互独立的。</p>
<h4 id="_3-关闭不用的模块" tabindex="-1"><a class="header-anchor" href="#_3-关闭不用的模块" aria-hidden="true">#</a> （3）关闭不用的模块：</h4>
<p>Apache与Nginx都有许多内部默认携带的模块，大多数情况下我们用不到。因此最好的方式是将这些用不到的模块统统禁用。这里有一个小技巧用于筛选出有用的模块：先将所有的模块禁用并重启服务器，然后逐个开启并检查应用程序是否运行正常。同样地，将所有模块默认全部开启，然后逐个关闭并检查应用程序是否正常运行，也可以剔除掉不用的模块。你可能会发现，某个模块虽然并不需要，但一些其他的有用模块还要依赖这个模块。所以，最好的方法是做一个列表标识启用或禁用的模块。</p>
<h4 id="_4-web服务器资源" tabindex="-1"><a class="header-anchor" href="#_4-web服务器资源" aria-hidden="true">#</a> （4）WEB服务器资源：</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Web服务器硬件方面最大的问题当数RAM内存问题，RAM内存越多，服务器就可以处理更多的请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx提供两个变量worker_processes、wordker_connections来适应资源情况。worker_processes设置决定着可以有多少Nginx进程被运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常，一个进程运行在一个CPU核上是比较合适的。所以，假如你的服务器是四核，该配置便设置为4比较好。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>worker_connections配置决定这一个进程中同时可以处理的链接数。简而言之，worker_connections告诉Nginx同时处理请求的个数。这里的配置也取决于系统的处理核数。通过下面的命令可以查看Linux系统（Debian/Ubuntu）的核数信息。</p>
<img src="\img\6.高性能PHP 7\image-20211202203631803.png" alt="image-20211202203631803" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>执行这行命令后显示的数值，就可以作为worker_connections配置的设置值。假设服务器进程处理器为四核，并且每个核显示处理进程数为512，则这台设备上运行的Nginx配置中的这两项配置如下。配置文件在Debian/Ubuntu系统上，位于/etc/nginx/nginx.conf。在配置文件中找到下面两行配置。</p>
<p>![image-20211202203723902](\img\6.高性能PHP 7\image-20211202203723902.png)</p>
</blockquote>
</blockquote>
<h3 id="◆-内容分发网络-cdn" tabindex="-1"><a class="header-anchor" href="#◆-内容分发网络-cdn" aria-hidden="true">#</a> ◆ 内容分发网络（CDN）</h3>
<blockquote>
<blockquote>
<p>由于内容是静态的，不频繁更改，因此CDN会将它们缓存在内存中。当某个文件的请求到达时，CDN直接从缓存中发送文件，这比从磁盘中加载文件并将其发送到浏览器更快。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果CDN在伦敦、纽约和迪拜有服务器，请求来自中东，则CDN将从迪拜服务器发送内容，这样可以减少响应时间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在应用中该如何使用CDN呢？比较好的方案是这样，如果应用的流量很大，则要创建很多个子域名用于你的CDN节点。例如，可以创建用于CSS和JavaScript文件的单独域用于图像的子域，以及用于音频/视频文件的另一个单独的子域。这样，浏览器将为每种内容类型发送并行请求。假设每种内容类型都有如下所示样式的网址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>For CSS and JavaScript: http://css-js.yourcdn.com·　For images: http://images.yourcdn.com·　For other media: http://media.yourcdn.com</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大多数有名的JavaScript库和模板引擎都将其静态资源托管在自己的CDN上。Google在自己的CDN上托管查询库、字体和其他JavaScript库，可以直接在应用程序中引用并使用。</p>
</blockquote>
</blockquote>
<h3 id="◆-css与javascript优化" tabindex="-1"><a class="header-anchor" href="#◆-css与javascript优化" aria-hidden="true">#</a> ◆ CSS与JavaScript优化</h3>
<blockquote>
<blockquote>
<p>性能在Web应用程序中起着至关重要的作用，甚至谷歌也很在意其查询性能。不要因为一个几KB的文件只需要1毫秒的下载时间就不去重视，因为涉及性能时每个毫秒都需要去关注。最好能优化、压缩和缓存一切。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在合并过程中，我们可以将所有CSS文件合并为一个文件，并且使用同样的方法对JavaScript文件进行合并，从而为CSS和JavaScript创建一个单独的文件。假如我们有10个CSS文件，浏览器要发送10个请求给所有这些文件。但是，如果我们将它们合并到一个文件中，浏览器只需发送一个请求即可，从而节省了9个请求所需的时间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在缩小过程中，从CSS和JavaScript文件中删除所有空行、注释和额外空格。这样，文件尺寸大大减小，从而文件加载速度更快。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大多数开源应用程序，如Magento、Drupal和WordPress，对缩小文件提供了内置支持，或通过第三方插件/模块支持这一功能。在这里我们不介绍如何在这些应用程序中合并CSS或JavaScript文件了，只讨论一些可以合并CSS和JavaScript文件的工具。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Minify是一组完全使用PHP编写的库。Minify支持CSS、JavaScript文件的合并与缩小，代码是完全面向对象和命名空间的，所以它可以嵌入任何当前流行或自主研发的框架中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Minify主页地址是http://minifier.org，同时它也被托管在GitHub上，地址是https://github.com/matthiasmullie/minify。要注意的是，Minify库依赖于同一个作者所写的路径转换库，路径转换器库可以从https://github.com/matthiasmullie/path-converter下载，下载此库并将其放置在与minify库相同的文件夹中即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>![image-20211202204324139](\img\6.高性能PHP 7\image-20211202204324139.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Grunt是一个JavaScript任务运行器，它能够将某些重复的任务自动化，避免反复工作。</p>
</blockquote>
</blockquote>
<h3 id="◆-全页缓存" tabindex="-1"><a class="header-anchor" href="#◆-全页缓存" aria-hidden="true">#</a> ◆ 全页缓存</h3>
<blockquote>
<blockquote>
<p>在全页缓存中，网站的完整页面存储在缓存中，为下一个请求提供此缓存页面。如果你的网站内容不经常更改，那么全页缓存效果更好。</p>
</blockquote>
</blockquote>
<h3 id="◆-varnish" tabindex="-1"><a class="header-anchor" href="#◆-varnish" aria-hidden="true">#</a> ◆ Varnish</h3>
<blockquote>
<blockquote>
<p>Varnish是一个开源的Web应用程序加速器，在Web服务器软件之前运行。它必须配置在端口80上，这样才能使每个请求都到达。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当请求到达Varnish时，它检查该请求的数据在其高速缓存中是否可用。如果有缓存的数据，则将缓存的数据返回请求，并且没有请求发送到Web服务器或下游。如果Varnish在其缓存中未找到任何数据，则会向Web服务器发送数据请求，当它从Web服务器接收到数据时，首先缓存此数据，然后将其返回请求。</p>
<p>Varnish同样提供了负载平衡和运行状况检查等功能。此外，Varnish不支持SSL和cookies。如果Varnish从Web服务器或后端接收到cookies，则不会缓存此页面。</p>
</blockquote>
</blockquote>
<h3 id="◆-基础设施-负载均衡haproxy" tabindex="-1"><a class="header-anchor" href="#◆-基础设施-负载均衡haproxy" aria-hidden="true">#</a> ◆ 基础设施（负载均衡HAProxy）</h3>
<blockquote>
<blockquote>
<p>负载均衡（LB）：</p>
<p>第一部分是负载均衡器（LB）。负载均衡是指，根据每个Web服务器上的负载情况，将外网流量以一定规则分发给Web服务器。</p>
<p>对于负载均衡，可以使用广泛运用的HAProxy。HAProxy会检查每个Web服务器的运行状况，如果Web服务器关闭，它会自动将此Web服务器的流量重定向到其他可用的Web服务器上。为此，只有LB会监听端口80。</p>
<p>我们不想将外部的SSL请求传递到Web服务器（在以上例子中是两个Web服务器），那样会加重Web服务器的负载，因此需要在HAProxy服务器上终结SSL。当LB收到带有SSL的请求时，将转换SSL请求并向其中一个Web服务器发送正常请求。当HAProxy接收到响应时，它将加密响应并将其发送回客户端。这样，就不会让两个Web服务器同时进行SSL加密/解密，只有一个LB服务器在做此事。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Varnish也可以用作负载均衡器，但这有点牵强，因为Varnish的核心目的是HTTP缓存。</p>
<p>HAProxy安装和实现</p>
<p>接下来介绍如何使用HAProxy。你需要以下三台服务器。</p>
<p>·　首先需要有一台安装了HAProxy的服务器，我们且称之为LB。在本书的实践过程中，这台LB服务器的IP是10.211.55.1。这台LB机器监听80端口，并且所有HTTP请求将会落到这台服务器上。实际上，这台机器此时就是所有请求的承载服务器，是最前端的机器。</p>
<p>·　其次需要一个Web服务器，此处称之为Web1。它安装了Nginx、PHP 7、MySQL或者PerconaServer数据库程序。这台机器的IP地址是10.211.55.2。这台机器不需要监听80或者其他端口，我们让它监听8080端口。</p>
<p>·　最后，第三台服务器，此处称之为Web2，它的IP为10.211.55.3。这台服务器上安装程序的情况与Web1保持一致，并且也监听8080端口。</p>
<p>Web1与Web2服务器被称为后端服务器，我们先配置LB服务器监听80端口。</p>
<p>![image-20211202205039679](\img\6.高性能PHP 7\image-20211202205039679.png)</p>
<p>上面的配置中，我们在Web后端添加了两个服务器。后端的引用名是web-backend，它也在前端配置中使用。我们知道两个Web服务器都在监听8080端口，所以在每台Web服务器的配置行中都配置了8080端口。此外，在每个Web服务器的定义结束时都使用check配置项，告诉HAProxy检查服务器的运行状况。</p>
<p>启动HAProxy，可以使用sudo service haproxy start命令。停止HAProxy，可以使用sudo servicehaproxy stop命令。</p>
<p>现在，在浏览器中输入LB服务器的IP或主机名，Web应用程序页面将从Web1或Web2获取数据并显示出来。</p>
<p>停用任意一个Web服务器，然后重新加载页面。应用程序仍然可以工作，因为HAProxy自动检测到其中一个Web服务器已关闭，并将流量重定向到第二个Web服务器中。</p>
<p>HAProxy还提供了一个可以通过浏览器来查看的stats页面，该页面可以显示关于LB和所有后端的完整状态信息。要启用stats，需要打开haprox.cfg，并将以下代码置于文件末尾。</p>
<p>具体可以再细看</p>
</blockquote>
</blockquote>
<h2 id="◆-4-提升数据库性能" tabindex="-1"><a class="header-anchor" href="#◆-4-提升数据库性能" aria-hidden="true">#</a> ◆ 4  提升数据库性能</h2>
<h3 id="◆-mysql数据库" tabindex="-1"><a class="header-anchor" href="#◆-mysql数据库" aria-hidden="true">#</a> ◆ MySQL数据库</h3>
<blockquote>
<blockquote>
<p>查询缓存是MySQL的一个重要性能特性，它缓存了SELECT查询及其结果数据集。当一个同样的SELECT查询发生时，MySQL从内存中直接取出结果，这样就加快了查询的执行速度，同时减小了数据库的压力。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>查看MySQL服务器上的查询缓存是否已经打开，要在MySQL命令行界面执行以下命令。</p>
<p>![image-20211202205450179](\img\6.高性能PHP 7\image-20211202205450179.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果query_cache_type被设置为1并且query_cache_size为0，则不会分配任何内存空间，查询缓存被禁用；如果query_cache_size值大于0，那么就开启了查询缓存，并且分配了内存空间。所有不超过query_cache_limit值的查询，或者使用SQL_NO_CACHE选项的查询，都会被缓存。</p>
<p>![image-20211202205505391](\img\6.高性能PHP 7\image-20211202205505391.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果query_cache_type被设置为0并且query_cache_size为0，则不会分配任何内存空间，查询缓存被禁用；如果query_cache_size值大于0，内存将会分配，但是不缓存任何数据，查询缓存被禁用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>query_cache_size：这个选项表示将会分配多少内存。</p>
<p>query_cache_size较合适的值是在100 MB和200 MB之间。然后，我们就能监控性能，并如上文所说调整查询缓存依赖的其他变量的值。我们对一个中等流量的Magento站点使用了128 MB的配置值，它工作得非常好。将这个值设置为0可以关闭查询缓存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>query_cache_limit：定义了能被缓存的查询结果的最大体积。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果查询结果的体积大于这个值，将不会被缓存。这个配置值可以通过找到最大的SELECT查询结果的体积而推测出来。</p>
</blockquote>
</blockquote>
<h3 id="◆-存储引擎" tabindex="-1"><a class="header-anchor" href="#◆-存储引擎" aria-hidden="true">#</a> ◆ 存储引擎</h3>
<blockquote>
<blockquote>
<p>存储引擎是表的根基，同一个数据库中不同的表可以设置不同的存储引擎。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MyISAM为速度而设计，和SELECT搭配起来使用更好。</p>
<p>·　如果表的数据偏向静态，即表中的数据不经常更新/删除，大多仅仅是查询操作，那么使用MyISAM是最好的选择。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MyISAM支持表级锁，如果要在表中的数据上执行一个特定的操作，那么整张表可以被锁起来。在上锁期间，表上不能进行其他的操作。如果表是偏向动态的，即数据会经常变更，则会引起性能降级。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MyISAM支持全文检索。</p>
<p>·　MyISAM支持数据压缩、自我复制、查询缓存、数据加密。</p>
<p>·　MyISAM不支持外键。</p>
<p>·　MyISAM不支持事务，所以没有COMMIT和ROLLBACK操作。如果表上执行了一个查询，则没有回退的余地。</p>
<p>·　MyISAM不支持集群数据库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>InnoDB是为高可靠性和高性能而设计的，适合处理大量数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>InnoDB只对SELECT、DELETE或UPDATE操作的特定数据行上锁。在上锁期间，表中的其他数据依然能被操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>InnoDB支持外键，对外键约束强制。</p>
<p>·　InnoDB支持事务，可以执行COMMIT和ROLLBACK操作，因此一个事务中的数据变化可以回退。·　InnoDB支持数据压缩、自我复制、查询缓存、数据加密。</p>
<p>·　InnoDB可以用在集群环境，但是并没有完全支持。不过，InnoDB表可以转换为NDB存储引擎，这样就能用在集群环境。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>innodb_buffer_pool_size这个配置定义了InnoDB数据和载入内存的索引可以使用多少内存空间。对于一个“全职”的MySQL服务器，推荐此配置值为服务器安装内存的50%～80%。如果这个值设置得过高，操作系统和MySQL的其他子系统（例如事务日志）将会没有内存可用。所以，请打开my.cnf文件，搜索innodb_buffer_pool_size，将其值设置到推荐的值之间（RAM内存的50%～80%）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Innodb_log_file_size用于设置记录查询信息的日志文件的大小。对于一个“全职”的服务器，最大的安全值是4GB，如果日志文件太大，用于崩溃后恢复的时间就会增加。所以最好是将其值设置到1GB到4GB之间。</p>
</blockquote>
</blockquote>
<h3 id="◆-percona-server-mysql的fork" tabindex="-1"><a class="header-anchor" href="#◆-percona-server-mysql的fork" aria-hidden="true">#</a> ◆ Percona Server - MySQL的fork</h3>
<blockquote>
<p>根据Percona官方网站的介绍，Percona是免费、开源的数据库，对MySQL完全兼容且提供加强功能，可完全代替MySQL并能提供更好的文档、性能、扩展性。Percona由MySQL衍生而来，支持MySQL的所有特性，并在此基础上拥有更多的功能和更好的性能。Percona使用一种改进的存储引擎，称为XtraDB。根据Percona官网的介绍，XtraDB是InnoDB的加强版，有更多的特性和更快的速度，在现代硬件上有着更好的扩展性，Percona XtraDB在高负载环境下使用内存的效率也更高。</p>
</blockquote>
<h3 id="◆-mysql性能监控工具" tabindex="-1"><a class="header-anchor" href="#◆-mysql性能监控工具" aria-hidden="true">#</a> ◆ MySQL性能监控工具</h3>
<blockquote>
<blockquote>
<h4 id="_1-phpmyadmin" tabindex="-1"><a class="header-anchor" href="#_1-phpmyadmin" aria-hidden="true">#</a> （1）phpMyAdmin：</h4>
<p>是最著名的用于管理MySQL数据库的工具。phpMyAdmin基于Web，开源且免费。除了管理MySQL服务器外，phpMyAdmin还提供一些监控MySQL服务器的工具。登录phpMyAdmin并点击顶部的Status标签，将会看到如下图所示界面。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>![image-20211202210006875](\img\6.高性能PHP 7\image-20211202210006875.png)</p>
<p>![image-20211202210022147](\img\6.高性能PHP 7\image-20211202210022147.png)</p>
<p>仔细观察这张图表可以看到，SELECT查询占54%。如果我们使用缓存，例如Memcached或Redis，SELECT查询所占的比例不应该这么高。所以，这张图和统计信息为我们提供了一种分析缓存系统的思路。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下一个标签是All Status Variables，展示了所有的MySQL变量及其当前的值。在这张列表中，我们可以很容易看到MySQL是如何配置的。下图显示了查询缓存变量和它的对应值。</p>
<p>![image-20211202210106514](\img\6.高性能PHP 7\image-20211202210106514.png)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>phpMyAdmin提供的下一个标签项是Monitor。这是一个强大的工具，用图形的形式实时展示服务器的资源使用率。</p>
<p>![image-20211202210127910](\img\6.高性能PHP 7\image-20211202210127910.png)</p>
<p>如上图所示，我们可以通过美观的图形界面查看到问题、连接数/进程数、系统CPU使用率、流量、系统内存、系统交换内存及信息。</p>
<p>![image-20211202210204360](\img\6.高性能PHP 7\image-20211202210204360.png)</p>
<h4 id="_2-percona工具箱" tabindex="-1"><a class="header-anchor" href="#_2-percona工具箱" aria-hidden="true">#</a> （2）Percona工具箱：</h4>
<p>上面提到的工具都是用可视化的方式显示数据库服务器信息的。然而，在显示更多有用信息、提供更多方便我们生活的功能特性上，仍然有很大提升空间。为了克服这个不足，我们可以使用另一种命令行工具箱，即Percona工具箱。</p>
<h4 id="_3-pt-query-digest" tabindex="-1"><a class="header-anchor" href="#_3-pt-query-digest" aria-hidden="true">#</a> （3）pt-query-digest：</h4>
<p>pt-query-digest工具从慢日志、通用日志和二进制日志中分析查询，生成一份关于查询的复杂报告。</p>
<p>![image-20211202210357643](\img\6.高性能PHP 7\image-20211202210357643.png)</p>
<p>![image-20211202210429369](\img\6.高性能PHP 7\image-20211202210429369.png)</p>
<p>![image-20211202210445890](\img\6.高性能PHP 7\image-20211202210445890.png)</p>
<h4 id="_4-pt-duplicate-key-checker" tabindex="-1"><a class="header-anchor" href="#_4-pt-duplicate-key-checker" aria-hidden="true">#</a> （4）pt-duplicate-key-checker：</h4>
<p>这一工具能找出重复的索引和重复的外键，既可以检测指定的表，也可以检测整个数据库。我们在一个大数据库上运行一下这个工具，命令如下。</p>
</blockquote>
</blockquote>
<h3 id="◆-percona-xtradb-集群-pxc" tabindex="-1"><a class="header-anchor" href="#◆-percona-xtradb-集群-pxc" aria-hidden="true">#</a> ◆ Percona XtraDB 集群（PXC）</h3>
<p>​		Percona XtraDB集群提供了高性能的集群环境，能轻松配置和管理多台数据库服务器，使得数据库之间能使用二进制日志来互相通信。集群环境能将负载分散到不同的数据库服务器中，并提供灾备，以防止服务器死机。</p>
<p>​		具体安装配置看书</p>
<p>​		在本章中，我们主要介绍了MySQL和Percona服务器，详细讨论了查询缓存和MySQL中其他和性能有关的配置选项。我们提到了不同的存储引擎，例如MyISAM、InnoDB和Percona XtraDB，同时还配置了一个三节点的Percona XtraDB集群。我们讨论了不同的监控工具，例如phpMyAdmin工具、MySQL工作台性能监控、Percona工具箱，还讨论了用于PHP和MySQL数据缓存的Redis及Memcached。</p>
<h2 id="◆-5-调试和分析" tabindex="-1"><a class="header-anchor" href="#◆-5-调试和分析" aria-hidden="true">#</a> ◆ 5 调试和分析</h2>
<blockquote>
<blockquote>
<p>将讨论压力测试及其不同的工具，使用XDebug、Apache JMeter、ApacheBench和Siege来对不同的开源系统进行压力测试，例如WordPress、Magento、Drupal以及PHP的不同版本，并在性能上与PHP 7进行对比。</p>
<p>我们经常需要弄清楚一个脚本程序消耗了多少资源，包括内存消耗、CPU以及执行时间。</p>
<p>本章主要包括以下内容：</p>
<p>·　Xdebug</p>
<p>·　使用Sublime Text 3调试</p>
<p>·　使用Eclipse调试</p>
<p>·　使用Xdebug分析</p>
<p>·　PHP DebugBar</p>
<h4 id="_1-xdebug" tabindex="-1"><a class="header-anchor" href="#_1-xdebug" aria-hidden="true">#</a> （1）Xdebug：</h4>
<p>​		Xdebug是一种PHP扩展，为PHP脚本提供了调试和分析信息。针对错误，Xdebug能提供全部的追踪信息，包括函数名、行号和文件名。同时，Xdebug也提供用IDE进行交互式调试脚本的能力，这些IDE包括Sublime Text、Eclipse、PHP Storm、Zend Studio等。</p>
<p>​		Xdebug的配置在php.ini文件中，或者有单独的.ini配置文件。在笔者的安装中，Xdebug配置在单独的20-xdebug.ini文件中，位于/etc/php/7.0/fpm/conf.d/目录下。为了编写本书，我们使用了Laravel Homestead，这是一种Vagrant“盒子”，提供了基于Ubuntu14.04 LTS的完整工具集，包含带有Xdebug的PHP 7、Nginx和MySQL等。Laravel Homestead非常适合用于开发环境，详情请查看https://laravel.com/docs/5.1/homestead。</p>
<p>​		使用Sublime Text调试Sublime Text编辑器中有一种插件可以用来调试PHP代码。首先来安装Sublime Text的xdebug插件。</p>
<p>​		使用Eclipse调试Eclipse是使用最为广泛的免费且功能强大的集成开发环境（IDE）。它几乎支持所有的主流编程语言，包括PHP。下面我们将会讨论如何配置Eclipse来使用Xdebug调试。</p>
<p>​		使用Xdebug分析</p>
<h4 id="_2-php-debugbar" tabindex="-1"><a class="header-anchor" href="#_2-php-debugbar" aria-hidden="true">#</a> （2）PHP DebugBar：</h4>
<p>​		PHP DebugBar是另一款性能很好的工具，在它的页面底部有一个美观、全面的调试信息条。该信息条能显示为了调试而添加的自定义消息以及完整的请求信息，包括$_COOKIE、$_SERVER、$_POST、$_GET数组等。除此之外，PHP DebugBar还能显示出现的异常详情、数据库查询详情。而且，它能显示脚本占用的内存和页面加载的时长。</p>
<p>​		DebugBar安装很容易。你可以下载完整的源码，放到工程中的某处，并设置好自动加载器来加载所有的类。你也可以用Composer来安装。我们将使用Composer，因为这是一种简单干净的安装方式。</p>
<p>​	![image-20211202211915269](\img\6.高性能PHP 7\image-20211202211915269.png)</p>
<p>![image-20211202212010771](\img\6.高性能PHP 7\image-20211202212010771.png)</p>
<p>还有一些收集器提供了收集第三方框架数据的能力，这些框架包括Twig、Swift Mailer、Doctrine等，这些收集器被称为桥接收集器。PHP DebugBar可以很容易地被集成到Laravel和ZendFramework 2等著名的PHP框架中。</p>
<p>有许多关于PHPDebugBar的很棒的文档提供了全面的细节信息和例子，获取地址是http://phpdebugbar.com/docs/readme.html。</p>
</blockquote>
</blockquote>
<h2 id="◆-6-php应用的压力-负载测试" tabindex="-1"><a class="header-anchor" href="#◆-6-php应用的压力-负载测试" aria-hidden="true">#</a> ◆ 6 PHP应用的压力/负载测试</h2>
<p>本章包括以下几方面内容：</p>
<p>·　Apache JMeter</p>
<p>·　ApacheBench (ab)</p>
<p>·　Siege</p>
<p>·　在PHP 5.6和PHP 7上对Magento 2进行压力测试</p>
<p>·　在PHP 5.6和PHP 7上对Drupal 8进行压力测试</p>
<p>·　在PHP 5.6和PHP 7上对WordPress进行压力测试</p>
<h2 id="◆-第七章" tabindex="-1"><a class="header-anchor" href="#◆-第七章" aria-hidden="true">#</a> ◆ 第七章</h2>
<h3 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格" aria-hidden="true">#</a> 代码风格：</h3>
<p>​		目前有很多代码风格规范，例如PSR-0、PSR-1、PSR-2、PSR-3等。虽然开发者可以根据自己所需选用不同的代码风格，但是为了使代码可读性更强，一般都会选用与所用类库风格一致的代码。例如Laravel使用PSR-1和PSR-4代码规范，所以当我们基于Laravel进行开发的时候就应该遵循对应的代码规范。另一些框架遵循PSR-2代码风格规范，比如Yii 2和Zend Framework 2。这些框架都不会只遵循一套规范，绝大多数都会根据自身需求混合多种风格规范。</p>
<p>​		PHP通用性框架小组（PHP-FIG）是一个定义PHP代码风格的组织，想要了解关于PSR规范的更多细节可以浏览该组织的网站http://www.php-fig.org/。</p>
<p>​		·　类名中每个单词的首字母必须大写，左大括号应该在类名后新起一行，右大括号应该在类结束后新起一行</p>
<p>​	    ·　类的方法和函数命名应该是驼峰式的。左大括号应该在方法名后新起一行，右大括号在函数定义结束后新起一行，方法名及其后面的括号中间不应该有空格。同理，第一个参数和前面的括号、最后一个参数和后面的括号之间也都不应该有空格。每个参数和紧跟着的逗号之间不应有空格，但逗号和后面的参数之间应该用空格分割。</p>
<p>​		·　命名空间的声明之后应该空一行。如果用到use xxx;的话，它们应该在命名空间声明之后且一行一个，use和后面的内容之间应有一个空格。extends和implements关键字应该和类声明在同一行。</p>
<p>​		![image-20211202213248316](\img\6.高性能PHP 7\image-20211202213248316.png)</p>
<p>​	·　Visibility类的所有属性都应该明确指出其可见性（private protected public）并且属性名应该是驼峰式的。对于私有属性和受保护的属性，属性名不可以用下划线作为前缀。</p>
<img src="\img\6.高性能PHP 7\image-20211202213415358.png" alt="image-20211202213415358" style="zoom:67%;" />
<p>​	·　要是有abstract关键字的话，则一定是在class关键字之前的，final关键字则应该在方法可见性之前。此外，static关键字是在方法可见性之后的。</p>
<p>![image-20211202213501594](\img\6.高性能PHP 7\image-20211202213501594.png)</p>
<p>​	·　所有PHP关键字都应该小写，包括true和false。常量都应该大写。</p>
<p>​	·　对于所有控制结构语句，控制结构关键词后都应该有空格。若控制结构中含有表达式，表达式和外面的括号之间不应有空格，后面的代码段也不应该有。括号和左大括号之间应该有一个空格，控制结构语句的左大括号应该和控制结构在同一行，结束的右括号则在代码段之后新起一行。</p>
<h3 id="测试驱动开发-tdd" tabindex="-1"><a class="header-anchor" href="#测试驱动开发-tdd" aria-hidden="true">#</a> 测试驱动开发（TDD）</h3>
<p>​			phpunit单元测试</p>
<h3 id="面向服务的体系架构-soa" tabindex="-1"><a class="header-anchor" href="#面向服务的体系架构-soa" aria-hidden="true">#</a> 面向服务的体系架构（SOA）</h3>
<p>​			在面向服务的体系架构中，应用的各组件通过既定的协议互相提供服务。每个组件互相低耦合，互相通信的唯一方式是通过各自提供的服务。</p>
<p>​			在PHP领域中，Symfony提供了最佳的SOA方式，因为Symfony是一种以HTTP为中心的框架。Symfony作为最成熟且经过充分测试的类库集合，被如Zend Framework、Yii、Laravel等许多其他框架广泛使用。</p>
<p>​			思考这样一个场景：有一个包含后台、前台的网站和一个移动端应用。通常在大多数应用中，后台和前台基于同一套代码并且使用同一个单一入口，同时构建一套API接口或者web服务来实现移动应用与后台的通信。若要精益求精，则对于有着高性能和高扩展性的应用而言，可以使分离的组件彼此独立运行，互相间需要通信就通过Web服务来实现。</p>
<p>​			Web服务位于前台与后台以及移动端与后台通信的中间。后台是主要数据和其他所有业务逻辑的集散中心，它可以使用如PHP等任意编程语言构建并独立出来。前台可以使用普通HTML/CSS、AngularJS、Node.js、jQuery及其它技术构建。类似地，移动端应用可以是原生的或者使用跨平台技术构建的。后台不用关心前台和移动端是如何搭建的。</p>
<h3 id="持续集成-ci" tabindex="-1"><a class="header-anchor" href="#持续集成-ci" aria-hidden="true">#</a> 持续集成（CI）</h3>
<p>​		是一项使团队所有成员都将代码集成到同一共享仓库的技术，每项检查由团队成员通过自动构建验证以捕获早期开发中的错误和问题。PHP领域有一系列工具可以用来实现CI，例如PHPCI、Jenkins、Travis CI等。</p>
<h3 id="apigilityapigility" tabindex="-1"><a class="header-anchor" href="#apigilityapigility" aria-hidden="true">#</a> ApigilityApigility：</h3>
<p>​		是Zend公司在Zend Framework 2中开发和构建的。Apigility为创建和管理API接口提供了简单的GUI操作界面，使用简单且有能力创建混合API接口。下面，从使用Composer安装Apigility开始，在终端键入下列命令。</p>
<p>![image-20211202215043743](\img\6.高性能PHP 7\image-20211202215043743.png)</p>
<p>![image-20211202215054540](\img\6.高性能PHP 7\image-20211202215054540.png)</p>
<p>![image-20211202215107973](\img\6.高性能PHP 7\image-20211202215107973.png)</p>
<p>![image-20211202215119321](\img\6.高性能PHP 7\image-20211202215119321.png)</p>
<p>Apigility非常强大且提供了许多如RESTFul APIs、HTTP认证、使用容易创建的DB连接器的数据库连接服务、为服务提供一系列表等功能。当使用Apigility时，我们无须关心API、服务结构安全及其他事项，只需关注API和服务的业务逻辑即可。</p>
<h1 id="php-7从零基础到项目实战" tabindex="-1"><a class="header-anchor" href="#php-7从零基础到项目实战" aria-hidden="true">#</a> PHP 7从零基础到项目实战</h1>
<p>陈小龙</p>
<h3 id="◆-11-2-错误有关配置" tabindex="-1"><a class="header-anchor" href="#◆-11-2-错误有关配置" aria-hidden="true">#</a> ◆ 11.2 错误有关配置</h3>
<blockquote>
<blockquote>
<p>PHP中使用error_log()函数可将错误信息发送到某个地方</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP中提供一个set_error_handler()方法，支持用户自定义一个错误处理函数，本函数可以用自定义的方式来处理运行中的错误，例如，在应用程序中严重发生错误时，或者在特定条件下触发了一个错误（使用trigger_error()），需要对程序进行处理时。</p>
<img src="\img\5.PHP 7从零基础到项目实战\image-20211202174741763.png" alt="image-20211202174741763" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的异常处理机制不完善，无法自动抛出异常，用户也可使用set_error_handler()这种方式将异常当作错误来处理，这样用户就可以使用自定义的错误处理函数来自动捕获异常了。代码演示如下：</p>
<img src="\img\5.PHP 7从零基础到项目实战\image-20211202174805572.png" alt="image-20211202174805572" style="zoom:80%;" />
</blockquote>
</blockquote>
<h3 id="◆-11-3-php-7中的错误处理" tabindex="-1"><a class="header-anchor" href="#◆-11-3-php-7中的错误处理" aria-hidden="true">#</a> ◆ 11.3 PHP 7中的错误处理</h3>
<blockquote>
<blockquote>
<p>PHP 7改变了大多数错误的报告方式。不同于传统（PHP 5）的错误报告机制，现在大多数错误被作为Error异常自动抛出，而不必将错误看作异常抛出。这种Error异常可以像Exception异常一样被第一个匹配的try /catch块所捕获。Error类并非继承自Exception类，所以不能用catch (Exception $e) { ... }来捕获Error，而是用catch (Error$e) { ... }来捕获。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如下代码自动捕获一个致命错误：</p>
<p>![image-20211202175051933](\img\6.高性能PHP 7-ok全部整理完\image-20211202175051933.png)</p>
<p>执行以上程序的结果为：error msg:Class 'cat' not founderror line:78。这种形式的错误处理只在PHP 7中可用。</p>
</blockquote>
</blockquote>
<h3 id="◆-20-1-构建一个api的世界" tabindex="-1"><a class="header-anchor" href="#◆-20-1-构建一个api的世界" aria-hidden="true">#</a> ◆ 20.1 构建一个API的世界</h3>
<blockquote>
<blockquote>
<p>Server端程序可以使用流行的restful规范，可以抽象出一个基类，如果App和PC需要的数据一样的话，可以使用同一个接口，需要用到不同的接口时，先在Server端封装一个基类，然后分别继承这个基类写两个接口，分别适用于App和PC。总体来说，要实现高内聚、低耦合，即业务逻辑在方法内部实现，对外提供完好的客户端需要的数据，这样各个方法之间依赖度低，有利于维护整合。能抽象出来的就单独拿出来，能封装的就封装，在开发中遵循don'trepeat yourself的法则。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般是客户端和服务端使用相同的签名实现算法，客户端在向服务端发起请求时携带参与签名计算的参数和计算后的签名字符串（一般称作signature），服务端接收到这些参数后，按照相同的算法加密这些参数，生成自己的签名字符串，将这个signature和接收到的signature进行比较，若相等则验证通过。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这里我们规定一种签名算法，客户端发起请求时需携带signature（加密签名）、timestamp（时间戳）、randstr（随机字符串）、data（消息内容，多个请求参数间用&amp;连接，如uid=1111&amp;name=chenxiaolong;）4个参数。</p>
<p>加密/校验流程如下：· 将randstr、timestamp、data组成数组。</p>
<p>对数组进行字典排序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>循环数组的值组成一个字符串，对字符串进行sha1加密，生成signature签名。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其中，sign参数由客户端根据上面的加密流程生成。服务端的解密流程如下：</p>
<p>（1）将接收到的randstr、timestamp、data（在本例中为uid=1111&amp;name=chenxiaolong）组成数组。</p>
<p>（2）对数组进行字典排序。</p>
<p>（3）循环数组的值组成一个字符串，对字符串进行sha1加密，生成signature签名。将这个signature和接收的参数sign的值进行比较，若相等则验证通过。</p>
<p>以上方式只是简易流程，并不安全。</p>
</blockquote>
</blockquote>
<h3 id="◆-20-2-传输消息的加解密" tabindex="-1"><a class="header-anchor" href="#◆-20-2-传输消息的加解密" aria-hidden="true">#</a> ◆ 20.2 传输消息的加解密</h3>
<blockquote>
<blockquote>
<p>通常的加密方式主要有三种，包括单向散列加密、对称加密和非对称加密，开发者在编程中可根据需要采取不同的加密方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>单向散列加密是对不同输入长度的信息进行散列计算，得到固定长度的散列计算值。输入信息的任何微小变化都会导致散列的很大不同，并且这种计算是不可逆的，即无法根据散列值获得明文信息。单向散列加密可用于用户密码的保存，即不将用户输入的密码直接保存到数据库，而是对密码进行单向散列加密，将密文存入数据库，用户登录时进行密码验证，同样对输入密码进行散列加密与数据库中密码的密文进行对比，若一致，则验证成功。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然不能通过算法从散列密文解出明文，但是由于人们设置的密码具有一定的模式（比如使用生日或名字作为密码），因此通过彩虹表（密码和对应的密文关系表）等手段都可以进行猜测式的破解。为了增加单向散列被破解的难度，还可以给散列算法加盐值（salt）, salt相当于加密时的密钥，增加破解时的难度。常用的单向散列算法有MD5、SHA等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对称加密是指加密和解密使用的是同一个密钥。对称加密类似接口签名验证，将明文和密钥按照一定的算法进行加密，同样使用密钥和一定的算法对密文进行解密获得明文。PHP中提供了一个MCRYPT扩展，可用于对称加密。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在讲解使用MCRYPT加解密前需要明确以下几个概念。</p>
<p>· 算法名称：MCRYPT扩展所支持的密码算法，详细列表可参见mcrypt.c文件。MCRYPT支持的算法见本小节末。</p>
<p>· 算法模式：MCRYPT_MODE_modename常量中的一个，或&quot;ecb&quot;、&quot;cbc&quot;、&quot;cfb&quot;、&quot;ofb&quot;、&quot;nofb&quot;和&quot;stream&quot;字符串中的一个。·      算法模块：使用mcrypt_module_open()打开的指定算法和模式对应的模块，是一个资源类型。</p>
<p>· 初始向量：加密时需要用到的一个参数，使用mcrypt_create_iv()从随机源创建。</p>
<p>· 初始向量大小：由mcrypt_get_iv_size()返回的指定算法/模式组合的初始向量大小。mcrypt_create_iv()根据初始向量大小创建初始向量。</p>
</blockquote>
</blockquote>
<h3 id="◆-24-3-数据库的使用" tabindex="-1"><a class="header-anchor" href="#◆-24-3-数据库的使用" aria-hidden="true">#</a> ◆ 24.3 数据库的使用</h3>
<blockquote>
<blockquote>
<p>数据切分指通过某种特定的条件，将存放在同一个数据库中的数据分散存放到多个数据库（服务器），以达到分散单台设备负载的效果。根据不同的切分规则可将数据库的切分模式分为两种，一种是按照不同的表将数据分别存储到不同的数据库服务器上，称为垂直切分或纵向切分；另一种是按照一定的规则将同一个表中的数据拆分到不同的数据库服务器上存储，称为水平切分或横向切分。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．垂直切分垂直切分相对水平切分比较容易，垂直切分是根据业务表的特点来实现数据存储分离的，拆表规则比较清晰，对应用程序的影响比较小。一个数据库由很多表构成，每个表对应着不同的业务，垂直切分是指按照业务将表进行分类，分布到不同的数据库上面，这样也就将数据和压力分担到不同的库上面。一个架构设计良好的应用系统，各个功能模块相互独立，通过各种接口来实现不同模块功能的复用，系统的耦合度比较低，每个业务模块使用各自的数据表。例如一个商城系统包括用户模块、订单模块、支付模块等，每个模块可以使用不同的数据表或数据库存储，降低了业务系统之间的耦合度，也有利于数据库的垂直切分。一般来说，系统各个模块的独立性越好越适合数据的垂直切分，但是对于存在着复杂join业务的场景，往往难以实现数据的垂直切分。数据库的垂直切分主要优点是拆分后的业务清晰，系统之间整合或扩展相对容易，数据的可维护性更高。而其也有相应的缺点，部分业务无法join，只能通过接口来实现，使用起来不是很方便，另外由于是按照业务拆分的数据，会出现某些业务数据庞大，存在单库读写和存储的瓶颈问题，这时候就需要水平切分来解决。</p>
</blockquote>
</blockquote>
</div></template>



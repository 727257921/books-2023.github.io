<template><div><h1 id="php高性能开发-基础、框架与项目实战" tabindex="-1"><a class="header-anchor" href="#php高性能开发-基础、框架与项目实战" aria-hidden="true">#</a> PHP高性能开发：基础、框架与项目实战</h1>
<p>王甲临</p>
<h2 id="◆-第5章-好用的php开发环境——-phpstorm" tabindex="-1"><a class="header-anchor" href="#◆-第5章-好用的php开发环境——-phpstorm" aria-hidden="true">#</a> ◆ 第5章 好用的PHP开发环境—— PHPStorm</h2>
<blockquote>
<blockquote>
<p>目前移动端主流的IDE工具，如图5-2所示。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203185736849.png" alt="image-20211203185736849"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHPStorm是目前最为火热的PHP开发IDE，主要具有以下几点特性和优势：·跨平台，目前支持Windows、Mac OS和Linux操作系统。</p>
<p>·具有代码高亮、自动提示等功能。</p>
<p>·支持类模板和代码片段。</p>
<p>·支持一键代码重构。</p>
<p>·内置版本控制工具，代码状态一目了然，如Git、SVN等。</p>
<p>·内置数据库管理工具。</p>
<p>·内置完善的文档操作工具，如支持PHPDoc</p>
<p>·内置类关系图管理，查看方便。</p>
<p>·方便的调试支持，如支持xdebug工具。</p>
<p>·方便的测试支持，如支持PHPUnit。</p>
<p>·内置强大的搜索和自定义快捷键功能。</p>
</blockquote>
</blockquote>
<h2 id="◆-第6章-php依赖的自动化管理工具——composer" tabindex="-1"><a class="header-anchor" href="#◆-第6章-php依赖的自动化管理工具——composer" aria-hidden="true">#</a> ◆ 第6章 PHP依赖的自动化管理工具——Composer</h2>
<blockquote>
<blockquote>
<p>使用Composer的必要前提有：</p>
<p>·PHP版本要高于PHP 5.3.2。</p>
<p>·PHP支持OpenSSL扩展。</p>
<p>·安装有Git版本管理工具。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Composer工具，除了内置了命令行管理，还整合了下载器、安装器等。在项目中，开发者只需要通过命令输入要安装的依赖包，Composer就会自动下载和安装。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置Packagist全量中国镜像为了加快访问速度，安装完毕后需要配置Composer全量中国镜像。镜像服务器在国内，可以提高访问速度，在检索和使用时也更加便捷。官方提供了两种方式，可以任选一种进行更新，在这里只需要在命令行中输入以下命令：composer config -g repo.packagist composer https://packagist.phpcomposer.com若没有任何返回提示，则说明已经配置成功。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203185859366.png" alt="image-20211203185859366"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过浏览这些目录和文件，此时大概可以知道vendor目录存储的是Composer下载和安装的类库、autoload.php（自动加载的文件）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只需要手动引入autoload.php文件，就可以使用Composer安装的包工具了。修改index.php脚本文件，增加以下代码：// 引入Composer自动加载文件require_once <strong>DIR</strong> .'/vendor/autoload.php';// 实例化PHPMailer对象$mailer = new \PHPMailer\PHPMailer\PHPMailer();// 在浏览器中打印并查看实例对象的结构var_dump($mailer);</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了通过表达式来实现版本约束外，还可以指定安装包的版本是开发版（dev）还是稳定版（stable），例如默认都安装稳定版（stable），只需要在composer.json中添加以下配置项即可：&quot;minimum-stability&quot;:&quot;stable&quot;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般情况，需要提交项目的composer.lock（包括composer.json）文件到版本库中。因为执行composer install命令时，会自动检查锁文件是否存在，如果存在，它将下载指定的版本（忽略composer.json文件中的定义，如更新的版本号等）。这样，当任何人建立项目时，都将下载与指定版本（composer.lock中记录的版本号）完全相同的依赖，以避免不同版本的依赖对项目产生的各种影响。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>若需要更新依赖的版本号，可以使用以下命令：composer update</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<h2 id="◆-第2篇-框架进阶篇" tabindex="-1"><a class="header-anchor" href="#◆-第2篇-框架进阶篇" aria-hidden="true">#</a> ◆ 第2篇 框架进阶篇</h2>
<blockquote>
<blockquote>
<p>·预处理脚本。虽然可以直接使用Bootstrap提供的CSS预定义样式表，不过Bootstrap的源码是基于最流行的CSS预处理脚本——Less和Sass开发。开发者可以采用预编译的CSS文件快速开发，也可以从源码定制自己需要的样式。·一个框架、多种设备。网站和应用能在Bootstrap的帮助下通过同一份代码快速、有效适配手机、平板电脑、PC设备，实现响应式布局。·齐全的预定义样式。Bootstrap提供了全面、美观的文档。在这里可以找到最常见的HTML元素、HTML和CSS组件、jQuery插件，并有详细的文档说明。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Bootstrap使用了CSS预处理脚本技术。其核心思想是：使用专门的编程技术，为CSS增加了编程语言的特性，将CSS作为目标生成文件，开发者就只需要使用这种语言进行编码工作即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通俗地说，CSS预处理脚本技术用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。传统CSS样式表与预处理脚本处理流程的区别，如图7-2所示。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190044707.png" alt="image-20211203190044707"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用传统方式编写CSS样式表，在版本迭代开发时，随着代码量的逐步提升，批量修改会变得十分烦琐，此时引入编程语言里面的变量、逻辑判断和函数方法的概念，可以减少重复工作。此外，类似继承概念的引入，也可以减少开发者的工作量。这种技术被称为预处理脚本技术，虽然多一个步骤，但实际上却帮了开发者大忙。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目前，CSS预处理器脚本已经非常成熟，涌现出了很多种不同的CSS预处理器语言。主流的预处理脚本语言有Less、Sass和Stylus等，因为Bootstrap内置了Less</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．使用变量定义样式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>变量的使用，可以允许开发者单独定义一系列的样式，然后在需要的时候去调用。所以在做全局样式调整的时候，开发者可能只需要修改几行代码就可以了。典型的变量使用如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190346307.png" alt="image-20211203190346307"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．嵌套规则开发者可以在一个选择器中嵌套另一个选择器来实现继承，这样可以减少代码编写量，并且使代码看起来更加清晰。要引出代码，并且要有代码的简要说明。具体如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190418225.png" alt="image-20211203190418225"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编写标准的CSS样式表中，样式的嵌套非常烦琐，每一级嵌套都要带上父级名称</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190432950.png" alt="image-20211203190432950"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>而使用Less父级元素，只需要在外层定义一次即可</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190442584.png" alt="image-20211203190442584"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．函数和运算</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Less的运算提供了加、减、乘、除操作，开发者可以做属性值和颜色的运算，这样就可以实现属性值之间的复杂关系管理。Less中的函数，实际上映射了JavaScript脚本代码方法，开发者可以对属性进行独立控制</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190507302.png" alt="image-20211203190507302"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>响应式布局技术的原理，就是根据设备显示宽度，自动调整元素的显示布局。在页面实现上，不需要针对不同的页面宽度，编写专门的处理代码，只需要一次开发，就可以自动适配，这也是响应式布局技术最大的优势。这里以Bootstrap中文网（访问地址http://www.bootcss.com/）为例，根据用户不同的访问宽度，来演示什么是响应式布局。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1.PC的浏览器宽度常见的PC浏览器宽度在1377像素到1920像素之间。访问Bootstrap中文网，确保浏览器保持最大宽度，此时的显示效果如图7-3所示。可以看到页面布局分别由：导航条、页面头部和页面列表三部分组成，因为页面宽度足够，因此导航条直接展示菜单项，页面列表每行展示四个元素。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．平板设备（平板电脑）的浏览器宽度平板设备的逻辑显示宽度，一般介于手机与PC之间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在平板设备模式下，可以看到布局减少了导航条元素（“关于”按钮自动隐藏，参见图7-3）, Bootstrap把页面列表横向展示数量减少为两个，而非等比缩小，此时用户看到的元素大小与PC访问效果类似，并不会因为元素在更窄屏幕下访问，而强制缩小元素导致用法无法看清。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．手机设备的浏览器宽度手机类设备浏览器访问宽度一般较低，在浏览器模拟手机设备访问后，可以看到导航条菜单已经完全隐藏，用户通过单击右侧交互按钮，可以进行菜单选择。页面列表中每行的元素也自动变为一个，充分根据手机特性进行适配</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>响应式布局在不同的页面大小下，会自动地改变页面的布局。实现了一次编写，达到多端适应的效果。提示：响应式布局虽然有种种优势，但不是所有的页面都适合这样的布局方式，还有很多其他的布局方式，如自适应布局等，可以满足不同的页面需求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>布局容器与栅格系统实现各式各样的页面布局，开发者需要结合盒模型、内外边距和div容器等各种方式，在满足需求的同时，编写大量的业务代码，这不仅耗费时间，还会因为多终端、跨浏览器等问题，导致开发效率低下。Bootstrap框架内置了布局容器与栅格系统，开发者只需像搭积木一样，用最少的代码最快实现效果。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．布局容器Bootstrap框架提供了两个预定义样式来实现最外层的包裹效果。</p>
<p>（1）固定布局容器使用预定义的样式“.container”结合div元素，可以实现一个固定宽度并且支持响应式布局的容器，实例代码如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190655544.png" alt="image-20211203190655544"></p>
<p>（2）全窗口布局容器使用预定义的样式“.container-fluid”结合div元素，容器宽度为100%，实现窗口的布局容器。容器可以根据页面的宽度自适应，以保证全部覆盖显示：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203190705599.png" alt="image-20211203190705599"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．栅格系统Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或浏览器窗口尺寸的增加，系统会自动分为最多12列。而布局都是通过预定义的样式类来操作，开发者可以组合出所需的布局方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>栅格系统有点类似表格布局，但可以实现的功能更强大。使用栅格布局需要注意以下几点：</p>
<p>·预定义样式container/container-fluid外层布局样式。</p>
<p>·行（row）定义布局的上下层级关系，可以理解为表格table元素中的tr元素。</p>
<p>·列（cols）定义容器在行（row）内的布局关系，可以理解为tr元素中的td单元格元素。</p>
<p>·行（row）没有数量限制，列（cols）最少1个，最多12个。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>基于Bootstrap的后台模板样式——AdminLTE</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AdminLTE是一套基于Bootstrap框架的后台模板样式，不仅提供了登录注册、用户中心、表单表格和页面提示等常用模板样式组件，还提供了像动态导航、下拉菜单和表格无刷新排序等JavaScript组件，方便用户直接调用。AdminLTE拥有完整的Bootstrap框架特性，对于了解Bootstrap框架的开发者来说，基本上都可以快速入门。</p>
</blockquote>
</blockquote>
<h2 id="◆-第8章-thinkphp命令行操作与接口开发实战" tabindex="-1"><a class="header-anchor" href="#◆-第8章-thinkphp命令行操作与接口开发实战" aria-hidden="true">#</a> ◆ 第8章 ThinkPHP命令行操作与接口开发实战</h2>
<blockquote>
<blockquote>
<p>短地址的生成一般都有特定的算法。以新浪短地址为例，该短地址中包含了一个唯一的地址码。这个地址码可以对应原始地址，这样就实现了短地址的使用。使用在线的短地址生成器时，每次都需要手动操作。例如在电商网站中，每个页面都需要手动生成短地址，工作量巨大，所以就需要网站可以自动生成短地址。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191127041.png" alt="image-20211203191127041"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191159009.png" alt="image-20211203191159009"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191216047.png" alt="image-20211203191216047">在程序实现上，需要建立短地址与原始地址的唯一映射关系，用户在访问当前页面时，系统查询是否已经生成并保存短地址，如没有则自动生成，最终展示在页面上。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191318191.png" alt="image-20211203191318191"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实现接口权限验证开发用户接口实例之前，还需要设计一套严格的接口验证方法，保证API接口的安全性。常见的接口验证一般包含以下几种：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191413962.png" alt="image-20211203191413962"></p>
<p>·接口时效性验证。为了防止大量的重复请求，可以设置每次请求的时效。小到以秒为单位，大到可以是半个小时。</p>
<p>·接口参数完整性验证。一般的接口攻击，都会截获请求，附带额外参数进行攻击，需要进行过滤验证。此时就需要客户端把所有的请求参数根据一个特定的算法，生成一个签名字符串，并在请求时一并发送。服务器接收到这个签名字符串后进行验证。</p>
<p>·用户唯一Token。用户每次登录都会生成唯一的Token信息，注销或者超时会话时Token都会被注销，防止被非法获取。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191522335.png" alt="image-20211203191522335"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.实现权限验证基类在application目录下创建名为api的应用模块，随后新建控制器Api.php。操作步骤如下。</p>
<p>（1）定义返回值方法在Api.php控制器文件中，新增以下方法：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191538956.png" alt="image-20211203191538956"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开发RESTful API接口类为了快速生成控制器类，在命令行下切换到应用根目录下，执行以下命令：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191620478.png" alt="image-20211203191620478"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191630844.png" alt="image-20211203191630844"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191652840.png" alt="image-20211203191652840"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191714422.png" alt="image-20211203191714422"></p>
<p>系统会自动生成一个User资源控制器类，并创建对应资源操作的几个方法。为了在URL中可以访问资源，则需要定义资源路由规则。在application目录下的route.php文件中，追加以下内容：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191742501.png" alt="image-20211203191742501"></p>
<p>按资源路由的注册方法，定义一个名为users的路由，其实内部会自动注册7个路由规则，</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191819557.png" alt="image-20211203191819557"></p>
</blockquote>
</blockquote>
<h2 id="◆-第3篇-项目实战篇" tabindex="-1"><a class="header-anchor" href="#◆-第3篇-项目实战篇" aria-hidden="true">#</a> ◆ 第3篇 项目实战篇</h2>
<blockquote>
<blockquote>
<p>图9-1是开发者使用较多的几个PHP内容管理框架。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203191923710.png" alt="image-20211203191923710"></p>
</blockquote>
</blockquote>
<h2 id="◆-第11章-crontab计划任务管理" tabindex="-1"><a class="header-anchor" href="#◆-第11章-crontab计划任务管理" aria-hidden="true">#</a> ◆ 第11章 Crontab计划任务管理</h2>
<blockquote>
<blockquote>
<p>在实际开发中，经常会遇见有计划任务需求的场景，如创建但未支付的订单，或失败需要退款的商品等，这些都需要定时执行某些操作。类似的场景还有许多。本节主要讲解常见的几种计划任务的实现方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP脚本实现计划任务因为PHP脚本是基于浏览器运行的，在关闭浏览器后程序会自动终止，同时程序执行的最大时间默认为30秒，所以要让PHP脚本实现计划任务，就需要一个或多个脚本，不依赖浏览器的动作而可以一直执行。下面给出常见方法。</p>
<p>·脚本执行时间限制：使用PHP内置的set_time_limit()方法可以实现让脚本持续执行。</p>
<p>·浏览器关闭，程序不终止：使用PHP内置的ignore_user_abort()方法，可以让脚本在关闭浏览器的情况下可以继续执行。</p>
<p>·脚本定时执行：为了不让PHP提前结束进程，使用语言内置的无限循环结构和sleep()等待方法可以让脚本定时执行，如5秒执行一次。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里给出一个简单的脚本实例，演示PHP计划任务的实现过程。新建task.php脚本文件，实现代码如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203192118197.png" alt="image-20211203192118197"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不过使用这种方式，若更新了PHP文件内容，需要重启PHP进程才可以使计划任务生效。此外，若出现程序错误或者内存溢出，PHP当前运行的进程也会被终止，故使用这种方式具有极大的不稳定性，维护起来并不方便。</p>
<p>使用crontab</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>传统网站应用中一般都有限时、限量购买等功能。很多时候会发生在极短时间内有大量用户访问（如秒杀商品等）的情况，这会对网站系统带来巨大的考验，而且所带来的超高并发流量也会产生一系列的问题。常见的问题有以下几种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．服务器夯机</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无论是Apache服务器，还是Nginx服务器，在一定的硬件配置下（如四核CPU、8GB内存），其在固定时间内可以处理的数据量是一定的，例如单台可以处理并发数量为200个，但是一下子涌进来20000个用户同时进行操作，服务器的处理能力就会急速下滑，甚至最终导致宕机。此时，重启服务器并不能解决问题。因为重启后的服务器，仍旧不能满足处理需求，无法解决根本问题。此时经常会使用以下方案来缓解压力。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）增加应用服务器对于单台应用服务器的架构，无法通过无限地升级单台服务器的硬件配置来提升性能，毕竟服务器软件本身也会有瓶颈。为了解决这个问题，引入了服务器集群，即使用负载均衡器，把请求分发到各个应用服务器中，减缓单台应用服务器的压力，提高服务器的处理能力。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>负载均衡有很多方式，从专门的硬件，到Nginx软件层面</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203192411448.png" alt="image-20211203192411448"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）减少用户重复请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如在商品抢购这个应用场景下，暂且约束用户每次只能抢购一个商品，那么每个账号在购买前，都需要查询是否购买过此商品，</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203192424263.png" alt="image-20211203192424263"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此时该用户若同时开启多个浏览器，或使用脚本发送大量的查询请求，如图12-2所示的流程就会反复地处理，极大增加服务器负担。此时可以使用缓存服务（如Redis），对用户的请求进行标记，只要用户发送过一次查询请求，第二次发送时，就可以强制用户退出</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203192451469.png" alt="image-20211203192451469"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）禁止单一用户多浏览器同时登录为了防止用户多账号同时登录导致的僵尸操作，可以让用户只能在一端登录，其他登录都会“踢掉”现有的登录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．订单超发:</p>
<p>订单超发是常见的高并发问题。例如在商品抢购场景，当商品还剩最后一个库存的时候，有2个及以上的用户执行下单抢购逻辑，服务器处理并发请求，在同一时间内，所有的用户都查询（MySQL）到还剩下一个库存，通过了库存的判断，继而进入到下单操作，导致订单超发。解决这类问题主要有以下两种解决方案。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）悲观锁与乐观锁:</p>
<p>悲观锁和乐观锁都有数据库的特性。先来看悲观锁，使用这种方式，无论有多少个请求，当前正在处理的请求只有一个，并在处理前进行加锁操作，期间其他请求处于等待的状态。当前请求处理完毕后，数据库会自动解除锁定状态，其他的请求再依次进行处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种方式虽然保证了数据的一致性，但当在高并发场景下，会有大量的请求在等待“锁（Lock）”，可能会出现某些请求无法抢到商品，也就导致了常见的死锁，导致系统处理能力降低，响应时间变长。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>相比悲观锁，乐观锁允许所有的请求同时处理，每个请求都带有一个唯一的版本号（Vesion），最后只有满足条件的版本号才可以执行成功，也防止了死锁的出现。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203193522692.png" alt="image-20211203193522692"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）抢购队列:</p>
<p>抢购队列的方式，实际上是规避了并发请求直接到达数据库的问题。所有的请求统一进入到队列（内存），遵循先进先出的规则，逐一消费处理。借助常见的队列工具，如Beanstalkd、RabbitMQ等，可以很好地实现抢购队列模型。而入队和出队的两个操作相对独立</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203193541960.png" alt="image-20211203193541960"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203193619122.png" alt="image-20211203193619122"></p>
<p>提示：使用基于内存存储的队列工具，要注意数据丢失问题，队列消费的程序脚本需要有较高的稳定性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于抢购系统的设计，防止订单超发是核心，同时也需要在客户端阻挡非必要的请求，使这些请求尽可能少地抵达MySQL数据库层面，减少系统的整体压力。与此同时，使用抢购队列屏蔽并发请求信息，其核心技术可以使用Redis本身自带的消息发布订阅机制，结合守护进程与计划任务，实现一个简易的抢购系统模型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户抢购逻辑用户登录进入商品详情页后，就可以进行抢购操作了，对应的就是入队列操作。设计时应包含下面两部分功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>·判断用户是否已经抢购过当前商品。为了避免直接对MySQL数据库进行操作，用户每次的抢购请求都会记录在Redis中，存储格式为Hash表。此表的名称为“goods_商品id”，这样每个商品就有一个唯一的Hash表，用户一旦单击过“抢购商品”按钮后，抢购请求就会存储在当前商品的Hash表中，存储的字符串格式为：“商品id_用户id”，下次再发出请求的时候，如果查询到已存储的请求则提示用户已经抢购过，不再进行下一步操作。·抢购信息入队列。通过查询是否购买的验证后，系统自动向队列写入“商品id_用户id”这样的数据，这两个信息构成了是否能下单的唯一信息。完成抢购信息入队列操作后，提示用户耐心等待队列出队操作结果。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203193859844.png" alt="image-20211203193859844"></p>
<p>图12-7 验证是否抢购和入队列操作的流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）队列消费的逻辑</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本着队列先进先出的原则，无论有多少个用户请求在不停地进入队列，都是依据谁先来谁先抢到的原则执行（Redis单线程执行）。一个队列只对应一个消费进程，此进程不停地进行出队操作。同时进程脚本每隔一定时间被调用一次，可以使用Crontab计划任务或者守护进程实现（本实例采用Redis的订阅机制，自动监听消息，实现更实时的队列消费）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194025375.png" alt="image-20211203194025375"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis消息发布/订阅机制为了实现商品抢购队列，需要先理解Redis的消息发布和订阅机制。</p>
<p>Redis发布/订阅（pub/sub）是一种消息通信模式，发布者（pub）发送消息到特定的频道（channel），订阅者（sub）通过观察频道（channel）接收消息。这种模式其实类似在收音机上听路况信息，电台主持人会不定时地发送路况信息（pub），用户（sub）通过特定的频道（channel），关注和获取实时信息。</p>
<p>在Redis中，每个频道都可以被多个客户端订阅，没有数量上的限制，当没有消息发布的时候，每个客户端都保持订阅的状态。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194332719.png" alt="image-20211203194332719"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实际使用中，Redis主要使用subscribe和publish命令分别实现消息订阅和发布的操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先打开Redis客户端，创建名为gamenews的频道名，命令如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194357129.png" alt="image-20211203194357129"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>执行后，在命令行中展示结果如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194408393.png" alt="image-20211203194408393"></p>
<p>此时不要关闭Redis命令终端，再次打开一个新的命令终端执行发布消息的操作</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194510341.png" alt="image-20211203194510341"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194522019.png" alt="image-20211203194522019"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194553296.png" alt="image-20211203194553296"></p>
<p>为何要用Redis的发布/订阅模式。回归前面讲过的内容，为了解决订单超发、用户订单竞争的关系，可以使用队列的方式存储用户唯一的抢购识别码，在队列中，先进先出，统一处理。Redis发布/订阅模式中的频道（channel），实际上实现了队列的功能，发布者（用户）发布消息（抢购信息）到频道中（队列），订阅者（PHP消费脚本负责获取队列消息）则会收到消息（根据抢购信息进行后续操作）。相比传统的队列，使用这种模式的优势在于：</p>
<p>·自动化的队列入队、出队操作，不用手动编写处理脚本。</p>
<p>·PHP队列处理脚本，直接使用PHP Redis扩展中的订阅消息的接口，即可实时地监听频道消息，传统队列操作一般使用轮询访问，有时间间隔（如1秒一次），时效性不高。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了Redis，使用MySQL、Memcache和Beanstalk也可以实现队列功能的支持，它们本质上没有区别，只是在数据的存储格式、提供的功能组件上有所区别，开发者可以根据自己的实际需求，进行相应的选择。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Redis也有基于PHP实现的可视化管理工具phpRedisAdmin，并且可以免客户端安装，相比命令行管理，可视化管理使用的效率更高</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用PHP实现Redis订阅/发布实例在上述实例中，已经可以使用Redis原生的命令实现消息发布/订阅模式，本节尝试在PHP中实现相同的操作。</p>
<p><strong>1．实现消息订阅脚本:</strong></p>
<p>在根目录下新增sub.php脚本文件，借助PHP Redis扩展的方法来实现，代码如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194829896.png" alt="image-20211203194829896"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为需要一直监听Redis中的频道动态，sub.php需要持续执行，所以不能使用浏览器访问，同时为了防止与Redis连接超时，定义脚本的命令如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194908267.png" alt="image-20211203194908267"></p>
<p>Redis扩展中的subscribe()方法传入了两个参数。第一个参数是需要订阅的频道名，可以是多个，例如数组类型；第二个参数是一个回调方法，其包含3个参数，分别是Redis对象（$redis）、频道名（$chan）和消息（$msg）。在subscribe()方法体内对不同频道进行筛分执行不同的工作，代码如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203194955205.png" alt="image-20211203194955205"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>2.实现消息发布功能:</strong></p>
<p>在sub.php脚本的同级目录下，新增pub.php脚本用来给特定频道发布消息。sub.php脚本实现队列消费的功能，而pub.php脚本则模拟实现入队列的操作。实现代码如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195117472.png" alt="image-20211203195117472"></p>
<p>相比消息订阅方法，publish()方法的使用较为简单，只需要传入频道名称和消息这两个参数即可：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195133086.png" alt="image-20211203195133086"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>3.实现抢购队列消费脚本——订单处理:</strong></p>
<p>实现商城抢购系统，需要先实现订单处理脚本，即负责监听抢购队列中的抢购信息，一旦订阅成功，就会根据抢购信息（商品id+用户id）来进行订单操作。当然，对不符合要求的用户信息，如已经抢购过商品的用户等，则不会进入订单相关逻辑。</p>
<p><strong>（1）PHP脚本常驻进程</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然可以使用PHP Redis扩展来实现消息发布/订阅模式，但关闭命令行工具后，PHP脚本进程也就自动终止了，所以首先要解决的问题就是：使PHP订单创建脚本常驻进程。这里以Linux操作系统为基础，实现思路如下。在命令行中，使用setsid命令和“&amp;”操作符，让PHP脚本转入后台运行。以sub.php脚本为例，只需要在命令行中执行以下命令：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195418495.png" alt="image-20211203195418495"></p>
<p>执行后会让程序转入后台执行，结果如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195428886.png" alt="image-20211203195428886"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195451326.png" alt="image-20211203195451326"></p>
<p><strong>（2）判断脚本是否运行</strong></p>
<p>使用PHP脚本常驻进程执行某些任务，可能会因为潜在的数据库错误、内存溢出等导致进程终止。为了防止这类情况的发生，编写以下shell脚本，定期判断进程是否存在，若不存在则主动启动脚本。在系统中定义alive.sh文件并定义脚本内容如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195629804.png" alt="image-20211203195629804"></p>
<p>上述脚本中先通过ps命令判断脚本是否还在运行，命令如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195648525.png" alt="image-20211203195648525"></p>
<p>此命令执行后，若进程存在则返回1，反之返回0，单独在命令行中执行结果如下：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195659755.png" alt="image-20211203195659755"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>3．订单处理脚本</strong></p>
<p>继续在wangcmf实例项目下的extend目录下新增Task/task.php脚本文件，用来订阅Redis的频道消息，同时根据消息类型定义订单处理逻辑，实现步骤如下。</p>
<p>（1）实现消息订阅逻辑</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203195950187.png" alt="image-20211203195950187"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）验证用户抢购商品信息</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200131697.png" alt="image-20211203200131697"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200141682.png" alt="image-20211203200141682"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200209919.png" alt="image-20211203200209919"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200232888.png" alt="image-20211203200232888"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200313877.png" alt="image-20211203200313877"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200341263.png" alt="image-20211203200341263"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203200356777.png" alt="image-20211203200356777"></p>
<p><strong>4.实现抢购入队操作——抢购处理</strong></p>
<p>抢购处理主要分为两个部分：第一部分是把用户抢购信息发送到特定的频道中，排队等待订单处理脚本进行消费处理；第二部分就是主动查询订单状态，查询用户是否抢购成功。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．将抢购信息发布到接口：</p>
<p>实现把用户抢购信息（商品id_用户id）发送到频道中，这里新增一个控制器来完成处理，在application\index\controller目录下新增Task.php控制器文件，在其中增加publish()方法用来发布订阅消息：</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201124881.png" alt="image-20211203201124881"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201138911.png" alt="image-20211203201138911"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201155895.png" alt="image-20211203201155895"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201400082.png" alt="image-20211203201400082"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201416640.png" alt="image-20211203201416640"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201448318.png" alt="image-20211203201448318"></p>
<p><strong>2．商品详情页抢购逻辑的实现</strong></p>
<p>商品详情页作为用户抢购的主要操作界面，主要功能就是提供抢购入口并提供抢购反馈。</p>
<p>在程序实现上主要包含以下3部分：</p>
<p>​		·用户单击“马上抢购”按钮后，异步（AJAX）发送数据到发布订阅消息接口（Task/publish）。</p>
<p>​		·发送完成后，主动查询订单处理的进度。</p>
<p>​		·在页面上显示抢购的状态信息。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201626307.png" alt="image-20211203201626307"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实现以上几个逻辑的步骤如下。</p>
<p>（1）开发订单查询接口：</p>
<p>修改application\index\controller\task.php文件，新增getOrderStatus()方法，根据传入的商品ID，获取当前用户是否已经完成订单操作。</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201655787.png" alt="image-20211203201655787"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201709845.png" alt="image-20211203201709845"></p>
<p>（2）使用AJAX异步调用订阅消息发布接口</p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201750263.png" alt="image-20211203201750263"></p>
</blockquote>
</blockquote>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201801304.png" alt="image-20211203201801304"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201811873.png" alt="image-20211203201811873"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201819329.png" alt="image-20211203201819329"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203201956752.png" alt="image-20211203201956752"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203202017061.png" alt="image-20211203202017061"></p>
<p><img src="@source/docs/theme-reco/img/3.PHP高性能开发：基础、框架与项目实战/image-20211203202051981.png" alt="image-20211203202051981"></p>
</div></template>



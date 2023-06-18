<template><div><p>PHP安全之道：项目安全的架构、技术与实践</p>
<p>栾涛</p>
<h2 id="◆-名词解释" tabindex="-1"><a class="header-anchor" href="#◆-名词解释" aria-hidden="true">#</a> ◆ 名词解释</h2>
<blockquote>
<blockquote>
<p>│漏洞│指一个系统存在的弱点或缺陷，可能来自应用软件或操作系统设计时的缺陷或编码时产生的错误，也可能来自业务在交互处理过程中的设计缺陷或逻辑流程上的不合理之处。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>│白帽子│也称为白帽黑客，指能够识别计算机系统或网络系统中安全漏洞的安全技术专家，但他们并不会恶意利用漏洞，而是提交给企业，帮助企业在被其他人恶意利用之前修补漏洞，以维护计算机和互联网安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>│攻击者│本书中统一将针对缺陷实施攻击的人称为攻击者。这里的缺陷，包括软件缺陷、硬件缺陷、网络协议缺陷、管理缺陷和人为失误。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-1-php项目安全形势不容乐观" tabindex="-1"><a class="header-anchor" href="#◆-1-1-php项目安全形势不容乐观" aria-hidden="true">#</a> ◆ 1.1 PHP项目安全形势不容乐观</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203094207099.png" alt="image-20211203094207099"></p>
<p>图1-3 由NVD所做的历年常见漏洞类型的统计数据变化情况</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP通常用来开发Web应用。对于Web应用来说，传统的Web网络层的防护手段，如防火墙、入侵检测系统、入侵防御系统等，无法阻止或检测到Web应用层的攻击。攻击者一旦发现Web漏洞就可以穿透网络层，直接对后面的业务层数据库、文件系统、服务器发起攻击，毁坏或窃取企业数据。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-php项目安全问题产生的原因" tabindex="-1"><a class="header-anchor" href="#◆-1-2-php项目安全问题产生的原因" aria-hidden="true">#</a> ◆ 1.2 PHP项目安全问题产生的原因</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203094311511.png" alt="image-20211203094311511"></p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-php项目安全原则" tabindex="-1"><a class="header-anchor" href="#◆-1-3-php项目安全原则" aria-hidden="true">#</a> ◆ 1.3 PHP项目安全原则</h3>
<blockquote>
<blockquote>
<p>PHP项目安全原则</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）不可信原则</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对所有用户的输入和输出进行检查。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>合法的输入才可以进入流程，这样才能最大限度地保证程序的安全。一般情况下，需要检查的输入内容包括URL、GET、POST、Cookie、Referer、User-Agent等，当用户提交数据时需要根据字段本身的性质进行检查，检查数据长度、范围、格式、类型是否正确，如邮编必须为六位数字、身份证号码必须符合身份证号码的编码规则等。当发现非法数据时，应该立即阻断响应，而不是修复数据，防止发生二次污染或者遭到攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了限制并过滤输入的非法信息外，还要严禁上传非法文件，防止发生越权、命令执行等漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要保障输出数据的合法性，防止输出数据夹杂用户的自定义数据。防止输出内容中夹杂用户可控的HTML、JavaScript数据，因为攻击者可以通过这些数据控制页面内容、窃取服务器以及用户信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）最小化原则</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>研发人员在PHP项目中要对用户的每一次访问、每一次数据操作都进行身份认证。确认当前用户的真实身份后，将用户的可见范围控制在允许的最小范围，并去访问用户所拥有的权限和数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一│权限最小化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于服务器目录的权限也应该做出规定。比如，存放上传文件的目录，在绝大多数情况下是不应该有执行权限的，应防止用户通过可执行程序获取服务器权限等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二│暴露最小化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203094524564.png" alt="image-20211203094524564" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>功能正常、保障系统可用、业务流程完整，是对一个系统的基本要求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于内置组件的使用，应当有明确的使用范围；对于自己注册的组件，必须认真考虑组件的效率和是否有漏洞；对于第三方组件，要明确来源，检测是否有后门程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如PHP本身的图片处理功能比较弱，通常通过借助第三方组件ImageMagick来加强PHP的图像处理能力。ImageMagick是一个功能强大的开源图形处理软件，可以用来处理的图片格式超过90种，包括流行的JPEG、GIF、PNG、PDF以及PhotoCD等，它可以对图片进行切割、旋转、组合等多种特效处理。由于功能强大、性能较好，并且对很多语言有拓展支持，因此在程序研发中ImageMagick被广泛使用，比如生成用户头像，编辑图片等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2016年5月，ImageMagick被曝出命令执行漏洞，虽然危害不是太大，但是由于大量的Web程序使用了其拓展功能，导致这些本地命令执行漏洞在Web环境里可以被远程触发，变成了危害巨大的远程命令执行。</p>
</blockquote>
</blockquote>
<h2 id="◆-第2章-php项目安全基础" tabindex="-1"><a class="header-anchor" href="#◆-第2章-php项目安全基础" aria-hidden="true">#</a> ◆ 第2章 PHP项目安全基础</h2>
<blockquote>
<blockquote>
<p>研发人员除熟悉各种PHP漏洞外，还可以通过修改PHP配置文件来加固PHP的运行环境。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当配置好PHP的Web运行环境后，通常需要修改配置来达到安全目的。在优化配置、增强性能的同时，正确地配置PHP可以避免很多安全问题。修改PHP的配置，一般是修改php.ini[插图]文件。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-1-信息屏蔽" tabindex="-1"><a class="header-anchor" href="#◆-2-1-信息屏蔽" aria-hidden="true">#</a> ◆ 2.1 信息屏蔽</h3>
<blockquote>
<blockquote>
<p>信息屏蔽可以有效地防止服务器信息泄露，避免被恶意攻击者获取服务器信息，为实行下一步攻击做准备。这些信息主要包括服务器信息上的操作系统更新、各种软件信息、PHP版本信息等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）屏蔽PHP错误信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的错误日志控制项可以控制PHP是否将脚本执行的error、notice、warning日志打印出来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在配置文件中设置display_errors=On开启了PHP错误显示，在PHP程序遇到错误时，如下的错误信息会被打印在页面上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个提示信息暴露了程序和系统的路径，很容易被攻击者利用来了解服务器的目录结构。可以通过修改PHP配置文件将提示信息隐藏。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203094947056.png" alt="image-20211203094947056"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在生产环境中，display_errors一般要设置为Off，不要暴露错误信息给用户；研发的时候，可以设置为On。最好的方式是将所有PHP的错误信息记录在日志中，以方便查看。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）防止版本号暴露</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2015年5月20日，PHP被爆出存在远程DoS漏洞。若攻击者利用该漏洞构造非法请求发起连接，容易导致目标主机CPU被迅速消耗，使服务器宕机，影响正常业务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>漏洞产生的原因是PHP在解析HTTP中的multipart/form-data格式数据时，会不断地重复复制字符串导致DoS。远程攻击者可以通过发送恶意构造的multipart/form-data请求，导致服务器CPU资源被耗尽，从而导致服务器无法响应正常请求。此漏洞涉及众多PHP版本，因而影响范围极大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>受该漏洞影响的PHP版本号如下。··PHP 5.0.0—5.0.5··PHP 5.1.0—5.1.6··PHP 5.2.0—5.2.17··PHP 5.3.0—5.3.29··PHP 5.4.0—5.4.40··PHP 5.5.0—5.5.24··PHP 5.6.0—5.6.8</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这些版本的PHP很容易被攻击者进行DoS攻击。攻击者要利用该漏洞，首先要知道服务器上的PHP版本号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在默认配置情况下，PHP版本号显示是开启状态，expose_php设置值为On，默认将PHP的版本号返回到HTTP请求的头部信息中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图2-3所示是一个HTTP请求返回的Response头部数据，HTTP头里返回服务端状态的信息。其中X-Powered-By:PHP/7.2.0的版本号暴露无遗，攻击者很容易捕获此信息。一旦该版本的PHP存在漏洞，攻击者很容易将其利用。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203095006120.png" alt="image-20211203095006120"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>建议在生产环境中隐藏PHP版本号，在PHP配置文件中查找expose_php，将值设置为Off，PHP的版本显示关闭</p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-防止全局变量覆盖" tabindex="-1"><a class="header-anchor" href="#◆-2-2-防止全局变量覆盖" aria-hidden="true">#</a> ◆ 2.2 防止全局变量覆盖</h3>
<blockquote>
<blockquote>
<p>（3）防止全局变量覆盖</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP全局变量功能开启的情况下，传递过来的数据会被直接注册为全局变量使用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在关闭的情况下，PHP会把接收到的数据存放在规定好的全局数组中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将register_globals设置为全局变量开启。接下来用下面的一段代码提交一个用户登录的表单，其中包含用户名和密码。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203095214370.png" alt="image-20211203095214370"></p>
<p>当register_globals=On时，程序可以直接使用$username和$password来接收值，同时用户也可以定义其他全局变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，register_globals配置选项打开之后，可导致下面代码中的$authorized变量被覆盖，无需认证用户名和密码就可以直接设置authorized的值为true，跳过认证进入登录状态，这会造成很大的安全隐患。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203095414651.png" alt="image-20211203095414651"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>设置PHP配置文件中register_globals=Off，程序只能使用$_GET['username']、$_GET['password']或$<em>REQUEST['username']、$</em> REQUEST ['password']来接收传递过来的值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此从系统安全角度出发，建议设置register_globals=Off，客户端所有提交到服务端的数据都应该通过PHP预定义内置的全局数组来获取。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 5.3中将register_globals设置为关闭状态。在新版的PHP 5.6及PHP 7中，官方已经将register_globals选项去除，以防止全局变量的产生。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-3-使用php的访问限制" tabindex="-1"><a class="header-anchor" href="#◆-2-3-使用php的访问限制" aria-hidden="true">#</a> ◆ 2.3 使用PHP的访问限制</h3>
<blockquote>
<blockquote>
<p>（4）文件系统限制：open_basedir</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中可以通过配置open_basedir来限制PHP访问文件系统的位置，将PHP执行权限限制在特定目录下。当PHP访问服务器的文件系统时，这个设置的位置将被检查。当访问的文件在目录之外时，PHP将拒绝访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开启open_basedir可以有效地对抗文件包含、目录遍历等攻击，防止攻击者访问非授权目录文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）远程访问限制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当PHP的远程访问选项allow_url_fopen开启时，允许PHP系统拥有从远程检索数据的功能，如通过PHP来访问远程FTP或Web，使用file_get_contents()访问远程数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）开启安全模式：safe_mode</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的安全模式是为试图解决共享服务器（shared-server）的安全问题而设立的。开启之后，主要会对系统操作、文件、权限设置等方法产生影响，减少被攻击者植入webshell所带来的某些安全问题，从而在一定程度上避免一些未知的攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以通过在PHP配置文件中修改safe_mode的值为On来开启PHP安全模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>启动safe_mode时，会对许多PHP函数进行限制，特别是与系统相关的文件打开、命令执行等函数。所有操作文件的函数将只能操作与脚本UID相同的文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果要将其放宽到GID比较，则设置safe_mode_gid=On可以考虑只比较文件的GID。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>设置safe_mode以后，所有命令执行的函数将被限制只能执行php.ini里safe_mode_exec_dir指定目录里的程序，例如使用shell_exec()、exec()等函数执行命令的方式会被禁止。如果确实需要调用其他程序，可以在php.ini中进行如下设置。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203095836449.png" alt="image-20211203095836449"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP配置文件中设置选项safe_mode_include_dir，然后复制可执行程序到/usr/local/php/exec目录，这个目录中的可执行程序不受UID/GID检查约束，PHP脚本就可以用shell.exec()、exec()、stustem()等函数来执行这些程序。而且该目录里的Shell脚本还可以调用其他目录里的系统命令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当启用安全模式时，可以通过PHP设置选项safe_mode_allowed_env_vars来设置哪些系统环境变量可以被修改，用户只能改变在这里提供的前缀的环境变量。默认情况下，用户只能设置以PHP_开头的环境变量（例如PHP_FOO = BAR）。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203100514407.png" alt="image-20211203100514407"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>safe_mode_allowed_env_vars设置项为空，PHP将使用户可以修改任何环境变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的safe_mode_protected_env_vars设置项，包含由一个逗号分隔的环境变量的列表，最终用户不能用putenv()来改变这些环境变量，甚至在safe_mode_allowed_env_vars中设置了允许修改时也不能改变这些变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）禁用危险函数：disable_functions</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP配置文件中的disable_functions选项能够在PHP中禁用指定的函数。PHP中有很多危险的内置功能函数，如果使用不当，可能造成系统崩溃。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP配置文件中添加需要禁用的函数可以有效地避免webshell，如下所示就是在PHP配置中添加了多个常用的禁用函数。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203100600651.png" alt="image-20211203100600651"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表2-1 建议禁用的函数[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203100620574.png" alt="image-20211203100620574"></p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203100638783.png" alt="image-20211203100638783"></p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203100651873.png" alt="image-20211203100651873"></p>
</blockquote>
</blockquote>
<h3 id="◆-2-4-php中的cookie安全" tabindex="-1"><a class="header-anchor" href="#◆-2-4-php中的cookie安全" aria-hidden="true">#</a> ◆ 2.4 PHP中的Cookie安全</h3>
<blockquote>
<blockquote>
<p>（8）PHP中的Cookie安全</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HttpOnly可以让Cookie在浏览器中不可见，开启HttpOnly可以防止脚本通过document对象获取Cookie。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要在PHP配置文件中设置HttpOnly开关，将session.cookie_httponly的值设置为1表示开启HttpOnly。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果Web传输协议使用的是HTTPS，则应开启cookie_secure选项，当Secure属性设置为true时，Cookie只有在HTTPS下才能上传到服务器，而在HTTP下是没法上传的。防止Cookie被窃取，需要在PHP配置中修改，将session.cookie_secure的值设置为1，标示开启Secure。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Cookie一定要设置超时和Domain，敏感信息尽量不要保存在Cookie中，Cookie中的数据尽量进行加密，设置domain时尽量不要设置*.ptpress.com.cn之类通配域名，以避免其他同根域网站的XSS漏洞引起的跨站Cookie窃取，PHP中使用setcookie()函数进行Cookie的设置。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-5-php的安装与升级" tabindex="-1"><a class="header-anchor" href="#◆-2-5-php的安装与升级" aria-hidden="true">#</a> ◆ 2.5 PHP的安装与升级</h3>
<blockquote>
<blockquote>
<p>（1）PHP 7中移除了一些不安全的函数。如移除了对于MySQL函数的支持，MySQL函数在许多情况下是不安全的，经常由于使用不当而造成SQL注入；移除了对ereg函数的支持，ereg函数存在%00截断漏洞，导致了正则过滤被绕过。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）在PHP 7中，password_hash()函数的盐（salt）选项被弃用，因为研发人员会生成自己的salt，通常自己生成的salt是不安全的。该功能本身提供salt的加密安全，函数内部默认带有salt能力，无须研发人员提供salt。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$hash = password_hash("zmj",PASSWORD_DEFAULT);
echo $hash;//$2y$10$a1fnx5ei8X0tjRpCjoai9efFlsP13VA8oeQjYN/FL.nOlMDjJLRee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203101433086.png" alt="image-20211203101433086" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）capture_session_meta函数中的SSL上下文选项被弃用，PHP 7中通过stream_get_meta_data()函数使用SSL元数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）PHP 7中允许在代码中增加标量类型说明，有效地防止了因数据转换造成的安全隐患。PHP 7中标量类型声明有如下两种模式。</p>
<p>··强制模式：强制模式是默认模式，不需要指定。强制模式代码示例如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203102515990.png" alt="image-20211203102515990"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上述强制模式执行代码输出“18”。··严格模式：严格模式必须明确标明。给每一个PHP文件，添加一个新的可选指令“declare(strict_types=1)；”可让同一个PHP文件内的全部函数调用和语句返回，都有一个“严格约束”的标量类型声明检查，且必须按指定变量类型来进行赋值，使变量传递变得更加安全，否则PHP会抛出错误异常。下面代码是严格模式的示例。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203102546531.png" alt="image-20211203102546531"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图2-11所示是严格模式的执行输出结果。由于传入参数与定义参数的数据类型不一致，因此PHP抛出了异常。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）在PHP 7版本中使用了更安全的随机数生成器，添加了更好的随机数random_int()、random_bytes()，并用其代替PHP 5的mt_rand()。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>random_bytes()函数返回string类型，并接收一个int类型为参数，该参数规定了所返回字符串的字节长度。代码示例如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203102635999.png" alt="image-20211203102635999"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）尽量减少非必要模块加载</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用第三方安全扩展</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Suhosin是PHP项目的一个保护系统，它的设计初衷是为了保护服务器和用户抵御PHP项目和PHP核心中已知或者未知的缺陷。Suhosin有两个独立的部分，可以分开使用或者联合使用。第一部分是一个用于PHP核心的补丁，它能抵御缓冲区溢出或者格式化串的弱点；第二部分是一个强大的PHP扩展，它包含其他所有的保护措施。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Taint是一个用于检测xss/sqli/shell注入的PHP扩展模块，用来监测来自GET、POST、Cookie中的数据。这些从客户端接收到的数据如果没有经过过滤或转义处理而被服务端直接使用，Taint会抛出安全提示信息来警示研发人员。</p>
</blockquote>
</blockquote>
<h2 id="◆-第3章-php编码安全" tabindex="-1"><a class="header-anchor" href="#◆-第3章-php编码安全" aria-hidden="true">#</a> ◆ 第3章 PHP编码安全</h2>
<h3 id="◆-3-1-弱数据类型安全" tabindex="-1"><a class="header-anchor" href="#◆-3-1-弱数据类型安全" aria-hidden="true">#</a> ◆ 3.1 弱数据类型安全</h3>
<blockquote>
<blockquote>
<p>使用PHP进行判断的时候，为了避免安全漏洞，在使用弱类型机制的时候需要特别留意。下面代码是一些弱类型判断示例。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203103548263.png" alt="image-20211203103548263"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>弱数据类型在项目研发过程中，主要表现在Hash比较、bool比较、数字转换比较、switch比较、数组比较等几种比较方式常常被忽视。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_1-hash比较缺陷" tabindex="-1"><a class="header-anchor" href="#_1-hash比较缺陷" aria-hidden="true">#</a> （1）Hash比较缺陷</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>研发人员在对比Hash字符串的时候常常用到等于（==）、不等于（!=）进行比较。如果Hash值以0e开头，后面都是数字，当与数字进行比较时，就会被解析成0×10n，会被判断与0相等，使攻击者可以绕过某些系统逻辑。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203103633187.png" alt="image-20211203103633187"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当密码经过散列计算后可能会以0e开头。下面示例在进行密码判断时可以绕过登录逻辑。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203103743132.png" alt="image-20211203103743132"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用hash_equals()函数比较Hash值，可以避免对比被恶意绕过。hash_equals()函数要求提供的两个参数必须是相同长度的字符串，如果所提供的字符串长度不同，会立即返回false。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203103830048.png" alt="image-20211203103830048" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>hash_equals()函数在PHP 5.6中得到支持，如果系统版本号低于5.6，建议进行自定义实现该函数，代码如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203103849615.png" alt="image-20211203103849615" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_2-bool比较缺陷" tabindex="-1"><a class="header-anchor" href="#_2-bool比较缺陷" aria-hidden="true">#</a> （2）bool比较缺陷</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用json_decode()函数或unserialize()函数时，部分结构被解释成bool类型，也会造成缺陷，运行结果超出研发人员的预期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>json_decode示例代码如下。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104219316.png" alt="image-20211203104219316" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>执行结果为：登录成功！unserialize示例代码如下。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104315972.png" alt="image-20211203104315972" style="zoom:80%;" />
<p>执行结果为：登录成功！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>比较容易出现问题的做法就是将数据系列化后放入了浏览器的Cookie中，将用户信息保存在Cookie中是一种极其不安全的做法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>避免bool比较隐患的做法是，严格判断数据是否相等的时候使用绝对相等——三个等号（===）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_3-数字转换比较缺陷" tabindex="-1"><a class="header-anchor" href="#_3-数字转换比较缺陷" aria-hidden="true">#</a> （3）数字转换比较缺陷</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当赋值给PHP变量的整型超过PHP的最大值PHP_INT_MAX时，PHP将无法计算出正确结果，攻击者可能会利用其跳过某些校验逻辑，如密码校验（无须输入正确的密码就可以直接登录用户的账号）、账号充值校验（充值很小的金额就可以进行巨额资金入账）等。下面代码示例中$a、$b、$aa、$bb均超出了PHP的最大值，所以运算结果超出了预期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104401419.png" alt="image-20211203104401419" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实际的业务逻辑中（如充值金额、订单数量），一定要对最大值进行限制，避免数据越界而导致错误的执行结果。下面是一段商品购买的示例代码，其中对传入的价格和购买数量进行了范围校验，可避免数据越界产生错误的结果。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104417047.png" alt="image-20211203104417047" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当赋值给PHP变量超长浮点数时，PHP的结果也将出现错误。在下面的代码示例中，当uid=0.99999999999999999时，代码逻辑会正常进入if语句，查询出uid=0的用户信息。以此类推，1.99999999999999999将会跳入$uid==&quot;2&quot;的判断中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104432033.png" alt="image-20211203104432033" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用变量时要先校验所传入的数据类型是否符合预期，如果超出预期，应该终止系统逻辑执行，避免浮点数在转换成整数时发生意外情况。下面是修复后的代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104519245.png" alt="image-20211203104519245" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_4-switch比较缺陷" tabindex="-1"><a class="header-anchor" href="#_4-switch比较缺陷" aria-hidden="true">#</a> （4）switch比较缺陷</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当在switch中使用case判断数字时，switch会将其中的参数转换为int类型进行计算，在进入switch逻辑前一定要判断数据的合法性，对不合法的数据要进行及时阻断。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104605300.png" alt="image-20211203104605300" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_5-数组比较缺陷" tabindex="-1"><a class="header-anchor" href="#_5-数组比较缺陷" aria-hidden="true">#</a> （5）数组比较缺陷</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用in_array()或array_search()函数时，如果$strict参数没有设置为true，则in_array()或array_search()将使用松散比较来判断$needle是否在$haystack中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面是in_array()或array_search()函数在没有设置$strict参数时的执行结果。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104650570.png" alt="image-20211203104650570" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>建议在使用时将$strict的值设置为true，这样in_array()或array_search()就会严格地比较$needls的类型与$haystack中的类型是否相同，以避免一些安全问题。下面是修复后的代码。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203104705229.png" alt="image-20211203104705229" style="zoom:80%;" />
</blockquote>
</blockquote>
<h3 id="◆-3-2-php代码执行漏洞" tabindex="-1"><a class="header-anchor" href="#◆-3-2-php代码执行漏洞" aria-hidden="true">#</a> ◆ 3.2 PHP代码执行漏洞</h3>
<blockquote>
<blockquote>
<p>PHP代码里包含eval()、assert()、preg_repace()、create_function()等能够执行代码的函数，且没有对用户输入的参数进行过滤，会造成代码执行漏洞，可导致攻击者在服务器端任意执行代码，进而控制整个Web服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP中可以直接读取包含PHP代码的字符串进行执行</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>eval()函数可以把字符串code作为PHP代码执行。eval()函数语言结构是非常危险的，因为它允许执行任意PHP代码。如果必须使用，应多加注意，不要允许传入任何由用户提供的未经完整验证过的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>eval()函数可将参数中的变量值执行，通常用于处理模板和动态加载PHP代码，但也常常被攻击者利用。比如下面代码所示的一句话后门程序。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203104842716.png" alt="image-20211203104842716"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该代码成功执行了phpinfo()函数，执行结果如图3-1所示。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203104908218.png" alt="image-20211203104908218"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ul>
<li>图3-1 eval()函数执行结果</li>
</ul>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="二│危险的assert-函数" tabindex="-1"><a class="header-anchor" href="#二│危险的assert-函数" aria-hidden="true">#</a> 二│危险的assert()函数</h4>
<p>assert()函数在PHP中用来判断一个表达式是否成立，返回真或假。如果直接将PHP代码传入也会被执行。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203105016609.png" alt="image-20211203105016609"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>服务端存在上述代码，当请求http://localhost:8080/assert.php?cmd=phpinfo()后phpinfo()函数被执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203105036336.png" alt="image-20211203105036336" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="三│危险的preg-replace-函数" tabindex="-1"><a class="header-anchor" href="#三│危险的preg-replace-函数" aria-hidden="true">#</a> 三│危险的preg_replace()函数</h4>
<p>在preg_replace()函数中，当第一个参数的正则表达式有e修正符时，第二个参数的字符串当作PHP代码执行。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203105931040.png" alt="image-20211203105931040"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当请求preg_replace.php?cmd=phpinfo()后phpinfo()函数被执行。图3-3所示是执行结果。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203105952716.png" alt="image-20211203105952716"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="四│危险的create-function-函数" tabindex="-1"><a class="header-anchor" href="#四│危险的create-function-函数" aria-hidden="true">#</a> 四│危险的create_function()函数</h4>
<p>create_function()函数的作用是从传递的参数创建匿名函数，并返回唯一的名称。当PHP不正确过滤传递给create_function()的输入时，远程攻击者可以利用漏洞以特权应用程序权限执行任意代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如下代码是create_function()函数引起的代码执行漏洞。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110113430.png" alt="image-20211203110113430"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>请求http://localshot/create_function.php?code=;}phpinfo();/*后phpinfo会在没有调用函数的情况下被执行。图3-4所示是执行结果。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110209286.png" alt="image-20211203110209286"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="五│容易导致安全问题的其他函数" tabindex="-1"><a class="header-anchor" href="#五│容易导致安全问题的其他函数" aria-hidden="true">#</a> 五│容易导致安全问题的其他函数</h4>
<p>PHP中存在大量的此类危险函数，表3-1中列举了一些，希望读者在使用时加以注意。表3-1 容易导致代码执行的PHP函数</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110244847.png" alt="image-20211203110244847"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110258115.png" alt="image-20211203110258115"></p>
<h4 id="代码执行防御" tabindex="-1"><a class="header-anchor" href="#代码执行防御" aria-hidden="true">#</a> 代码执行防御</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>escapeshellarg()、escapeshellcmd()函数用来保证传入的命令执行函数里的参数确实是以字符串参数的形式存在的，不能被注入。escapeshellarg()函数使用示例如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110331002.png" alt="image-20211203110331002"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>escapeshellarg()将给字符串增加一个单引号，并且能引用或者转码任何已经存在的单引号，以确保能够直接将一个字符串传入shell函数，并且是安全的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>escapeshellcmd()对字符串中可能会欺骗shell命令执行任意命令的字符进行转义。该函数保证用户输入的数据在传送到exec()函数或system()函数或执行操作符之前进行转义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110355154.png" alt="image-20211203110355154"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>escapeshellcmd()函数应被用在完整的命令字符串上。即使如此，攻击者还是可以传入任意数量的参数。应使用escapeshellarg()函数对单个参数进行转义。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-php变量安全" tabindex="-1"><a class="header-anchor" href="#◆-3-3-php变量安全" aria-hidden="true">#</a> ◆ 3.3 PHP变量安全</h3>
<blockquote>
<blockquote>
<p>变量覆盖常常被恶意攻击者用来跳过正常的业务逻辑，越过权限限制，恶意攻击系统，严重时将造成系统瘫痪。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="全局变量覆盖" tabindex="-1"><a class="header-anchor" href="#全局变量覆盖" aria-hidden="true">#</a> 全局变量覆盖</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当register_globals全局变量设置开启时，传递过来的值会被直接注册为全局变量而直接使用，这会造成全局变量覆盖。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果通过$GLOBALS从浏览器动态获取变量，也会发生变量覆盖的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>攻击者在请求中构造authorized=true，无须认证用户名和密码就可以直接设置authorized的值为true，从而跳过认证进入登录状态。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了避免全局变量覆盖的发生，研发人员不应该使用上面的方式从客户端接收动态变量将其放入全局的$GLOBALS中。以下是修复后的代码。<img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203110454505.png" alt="image-20211203110454505"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="动态变量覆盖" tabindex="-1"><a class="header-anchor" href="#动态变量覆盖" aria-hidden="true">#</a> 动态变量覆盖</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数extract()变量覆盖</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>extract()函数的作用是从数组中导入变量到当前符号表中，检查每个键是否是有效的变量名。它还检查与符号表中现有变量是否冲突。为了防止发生变量覆盖，在使用的时候需要将flags设置为EXTR_SKIP，以免将已有变量覆盖。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203111259797.png" alt="image-20211203111259797"></p>
<p>当用户提交的参数中包含authorized=true时，在执行authenticated_user()步骤之前，extract()函数从$_REQUEST中解析到authorized并设置全局变量，它的值被设置为true。此时，用户在无须通过校验的情况下可直接向下执行，绕过了校验逻辑，造成任意越权访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了避免全局变量覆盖的发生，应尽量不使用extract()函数接收客户端参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数import_request_variables()变量覆盖</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>import_request_variables()函数的作用是导入GET/POST/Cookie变量进入全局范围。如果在PHP配置中禁用了register_globals，但是又希望导入一些全局变量，可能会用到import_request_variables()函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>parse_str()函数用于解析客户端以x-www-form-urlencoded编码格式的字符串到PHP变量中。该函数有指定输出变量和不指定输出变量两种使用方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203111323397.png" alt="image-20211203111323397" style="zoom:80%;" />
<p>在不指定输出变量的情况下，极易出现变量覆盖，影响正常业务逻辑</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了避免全局变量覆盖的发生，应尽量使用指定输出变量的方式。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-4-url重定向安全" tabindex="-1"><a class="header-anchor" href="#◆-3-4-url重定向安全" aria-hidden="true">#</a> ◆ 3.4 URL重定向安全</h3>
<blockquote>
<blockquote>
<p>URL重定向安全</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般情况下，会将登录后需要跳转的地址“http://localhost:8080/Home”放到登录页面的参数中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203111422566.png" alt="image-20211203111422566"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在控制页面转向的地方校验传入的URL是否为可信域名，通常采用URL白名单机制。该机制可以有效地防止任意跳转。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203111437755.png" alt="image-20211203111437755" style="zoom:80%;" />
</blockquote>
</blockquote>
<h3 id="◆-3-5-请求伪造攻击-ssrf" tabindex="-1"><a class="header-anchor" href="#◆-3-5-请求伪造攻击-ssrf" aria-hidden="true">#</a> ◆ 3.5 请求伪造攻击（SSRF）</h3>
<blockquote>
<blockquote>
<p>服务器请求伪造(Server-Side Request Forgery，SSRF)漏洞是一种由攻击者利用某服务器请求来获取内网或外网系统资源，从服务器发起请求的一个安全漏洞。正因为它是由服务器发起的，所以它能够请求到与它相连而与外网隔离的内部系统。一般情况下，SSRF攻击的目标是企业的内网系统。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSRF可以对外网、服务器所在内网、本地进行端口扫描，获取一些服务的banner信息。攻击运行于内网或本地的应用程序（比如攻击内部数据库系统），并通过扫描默认Web文件对内网Web应用进行指纹识别，同时可以利用file协议读取本地文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSRF形成的原因大多是由于服务器提供了从其他服务器应用中获取数据的功能且没有对目标地址进行过滤与限制，比如从指定URL地址中获取网页文本内容、加载指定地址的图片、下载等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSRF漏洞流程如图3-9所示，即：</p>
<p>（1）攻击者构造请求；</p>
<p>（2）服务器根据攻击者构造的请求对内网服务器进行请求；</p>
<p>（3）内网服务器将请求反馈给服务器；</p>
<p>（4）服务器将获取到的内网资源返回给攻击者。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203111543495.png" alt="image-20211203111543495"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSRF漏洞的主要危害是使服务器资源泄露，内网服务任意扫描泄露内网信息。很多网站提供了通过用户指定的URL上传图片和文件的功能，可以将第三方的图片和文件直接保存在当前的Web系统上，如果用户输入的URL是无效的，大部分的Web应用会返回错误信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于上面不安全编码的代码，容易被攻击者利用对内网Web应用进行指纹识别，识别内网应用所使用的框架、平台、模块以及cms，这实际上为潜在的攻击提供了很多“便利”。大多数Web应用框架有一些独特的文件和目录，通过这些文件可以识别出应用的类型，甚至是详细的版本。根据这些信息就可以有针对性地搜集漏洞进行攻击。比如可以通过访问下列文件来判断phpMyAdmin是否安装。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203111612493.png" alt="image-20211203111612493"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>容易出现SSRF漏洞的功能代码通常是为了获取远程或本地内容，例如使用file_get_contents()、fsockopen()、curl()等函数。如使用file_get_contents()函数从用户指定的URL中获取文件，然后把它输出到浏览器端用于下载。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203111627807.png" alt="image-20211203111627807"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>正常情况下，用户的下载地址是通过服务端提供的base64编码后的路径回传到服务端进行下载操作的，不会造成SSRF漏洞，但是攻击者很容易识别base64的内容，如果攻击者将下载地址替换成自己伪造的编码内容，则可以下载服务器上的任意文件，以及对内网地址进行扫描。如将/etc/password进行base64编码之后放在URL参数中，会直接将/etc/password的内容展示在页面上，使得攻击者能直接获取服务器的所有用户列表，从而危害服务器的安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用fsockopen()函数实现获取用户指定URL中的数据。这个函数会使用socket与服务器建立tcp连接，传输原始数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户一旦传入“主机名+端口+地址”之后，攻击者可以对内网服务器进行任意扫描。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203111900894.png" alt="image-20211203111900894" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>curl函数使用不当获取数据也会造成SSRF漏洞。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203111922476.png" alt="image-20211203111922476" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSRF都是由于服务端需要获取其他服务器的相关服务的功能而造成的，因此可以列举几种在Web应用中常见的从服务端获取其他服务器信息的功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>一│页面分享</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户输入希望分享的URL，该网站会通过自己的后端服务器获取URL中的内容返回到用户页面中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112009490.png" alt="image-20211203112009490"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过目标URL地址获取了网页标题、图片和相关文本内容。如果在此功能中没有对目标地址的范围进行过滤与限制，则就存在着SSRF漏洞。国内多家知名互联网企业曾因为分享功能而被曝出SSRF漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>二│页面转码</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过搜索，将PC端的页面转成适应移动端浏览器可查看的页面。一旦控制不当，很容易产生SSRF漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>三│翻译服务</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了不懂外语的用户可以正常浏览外语页面，翻译服务通过URL地址翻译对应页面中文本的内容，以方便用户阅读。如果不做好内网穿透限制，则很容易被攻击者利用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>四│图片加载与下载：</strong></p>
<p>通过URL地址加载或下载图片。比如，加载图片服务器上的图片展示给用户，为了有更好的用户体验，通常对图片进行尺寸比例调整、水印添加、图片格式转换、压缩等，就可能造成SSRF漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>五│图片、文章收藏功能</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>早期，有好的个人博客，可以将其他互联网服务商的内容，例如图片、文字内容等，通过爬虫或者单个URL获取页面中的内容，并复制到自己的服务器上。通常不会限制访问路径，很容易造成SSRF漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>SSRF漏洞防御</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>防止SSRF漏洞的主要方式是合理控制访问权限，尽可能地控制PHP的访问权限，防止穿透到内网以及访问非授权的资源。通常需要做到以下几点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）无特殊需要的情况下，不要从用户那里接收要访问的URL，防止用户自行构建URL地址进行穿透访问。</p>
<p>（2）在没有对服务器本身文件访问需求的情况下，建议开启PHP的open_basedir配置，将PHP的访问限制在特定目录下，禁止PHP随意访问服务器任意路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开启open_basedir可以有效地防止file_get_content、curl、fopen等函数对服务器敏感文件进行访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）如果必须接收用户传递的URL，建议使用白名单机制。如下面的代码示例中，只允许用户请求特定的网址，限制请求的端口为HTTP常用的端口，比如80、443，同时只允许用户访问特定的文件类型，如只允许访问静态文件。并且统一系统返回的错误信息，避免请求的错误信息直接返回给用户，避免用户可以根据错误信息来判断远端服务器的端口状态。禁用不需要的协议，仅仅允许HTTP和HTTPS请求，可以防止类似于file:///、gopher://、ftp://等引起的安全问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112244071.png" alt="image-20211203112244071"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）如果在项目中需要获取外网资源，建议使用黑名单屏蔽内网，以避免应用被用来获取内网数据，攻击内网。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112302208.png" alt="image-20211203112302208"></p>
</blockquote>
</blockquote>
<h3 id="◆-3-6-文件上传安全" tabindex="-1"><a class="header-anchor" href="#◆-3-6-文件上传安全" aria-hidden="true">#</a> ◆ 3.6 文件上传安全</h3>
<blockquote>
<blockquote>
<p>在PHP项目中，提供上传功能并在服务器端未对上传的文件格式进行合理的校验是存在巨大风险的。如果恶意攻击者利用上传漏洞上传一些webshell，则可能完全控制整个网站程序，执行系统命令，获取数据库链接字串进行操作数据库等危险操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>1.文件上传漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下是一个不安全的上传代码示例，即文件上传PHP接收代码upload.php。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112404695.png" alt="image-20211203112404695"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下是文件上传HTML代码upload.html。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112427475.png" alt="image-20211203112427475"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>是一个简单的上传文件功能，其中由用户上传文件，如果上传成功，保存文件的路径为http://服务器路径/uploads/文件名称。如果攻击者上传一个如下内容的hacker.php脚本文件到服务器：则攻击者就可以通过该文件进行URL请求http://服务器路径/uploads/hacker.php?shell=ls%20-al，从而可以执行任何shell命令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>2.检查文件类型防止上传漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果要限制，通常的做法是限制文件上传类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面在PHP代码中增加了文件类型限制来防止上传漏洞。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112515354.png" alt="image-20211203112515354"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这种情况下，如果攻击者试图上传shell.php，则应用程序在上传请求中将检查文件MIME类型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但是如果只进行上传文件类型的检查也是不够的，攻击者通过修改POST数据包中Content-Type：text/plain字段为Content-Type：image/gif，然后发送数据包，即可成功实现恶意脚本的上传。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>3.检查文件扩展名称防止上传漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了检查文件类型外，研发人员最常用的防范方法之一，就是基于白名单或者黑名单，验证所传文件的扩展名称是否符合。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从黑名单和白名单两种不同的验证方法来看，白名单方式绝对要比黑名单安全得多。但是，并不是说采用白名单方式验证就足够安全了。IIS服务存在一个漏洞（Microsoft Internet Infomation Server 6.0 ISAPI Filename AnalyticVulnerability），如上传一个名为hacker.php;.gif的文件到服务器，PHP脚本文件因限制最后4个字符，所以本文件是合法的，但是当上传后浏览该文件——http://服务器路径/uploads/hacker.php;.gif时，就可以绕过Web程序的逻辑检查，从而能导致服务器以IIS进程权限执行任意恶意用户定义的脚本。此漏洞只针对于IIS特定版本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Apache程序中，同样存在一个由扩展名解析的漏洞。当恶意攻击上传一个有多个扩展名的PHP脚本文件时，如果最后的扩展名未定义，就会解析前一个扩展，比如hacker.php.2018文件。当将该文件上传时，如果是以白名单、黑名单方式进行验证，就可以绕过验证，上传非法文件到服务器，当浏览http://服务器路径/uploads/hacker.php.2018时，就会被当成PHP脚本执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以上例子说明，不可以只通过一种安全手段来阻止攻击者进行非法文件上传，应该同时综合应用检测文件类型、检查文件后缀、黑白名单、使用随机文件名称等多种方法进行防范。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112707121.png" alt="image-20211203112707121"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>验证上传文件的扩展名，以白名单、黑名单方式为主，但最好使用白名单。除了在代码逻辑中防止上传漏洞外，同时也可以在项目部署时将上传目录放到项目工程目录之外，当作静态资源文件处理，并且对文件的权限进行设定，禁止文件的执行权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户上传文件到服务器保存时，一定要使用随机文件名进行存储，并保证所存储的扩展名合法。保证文件名的唯一性，也保证了存储的安全性，可以防止上传文件非法扩展进行解析。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-7-避免反序列化漏洞" tabindex="-1"><a class="header-anchor" href="#◆-3-7-避免反序列化漏洞" aria-hidden="true">#</a> ◆ 3.7 避免反序列化漏洞</h3>
<blockquote>
<blockquote>
<p>反序列化漏洞也称为对象注入漏洞，即恶意攻击者利用PHP的对象序列化和反序列化进行攻击，将恶意数据注入PHP的代码中进行执行的漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中使用serialize()函数可以把变量，包括对象，转化成连续bytes数据。可以将序列化后的变量存在文件里或在网络上传输，然后通过unserialize()反序列化还原为原来的数据。由于传输过程中和存放的位置可能被恶意人员篡改，从而导致反序列化回来的对象数据可能携带有恶意攻击者精心构造的攻击逻辑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112802510.png" alt="image-20211203112802510"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>__construct()函数和__destruct()函数会在对象创建或者销毁时自动调用，在程序执行前serialize()函数会首先检查对象是否存在一个魔术方法__sleep()。如果存在，则__sleep()方法会先被调用，然后才执行串行化（序列化）操作。__sleep()方法必须返回一个数组，包含需要串行化的属性，PHP会抛弃其他属性的值，如果没有__sleep()方法，PHP将保存所有属性。与之相反，unserialize()会检查是否存在一个__wakeup()方法。如果存在，则会先调用__wakeup()方法，预先准备对象数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203112841799.png" alt="image-20211203112841799"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从序列化后的数据可以看出，恶意攻击者一旦截获序列化数据，理论上可以调用系统中任意可执行的类，同时也可以调用未定义的magic函数，例如对象调用一个不存在的函数，那么__call函数将被调用；如果试图访问类中不存在的类变量，__get和__set函数将被调用。如果项目系统使用的是开源框架或者代码被攻击者熟知，攻击者可以在服务器上执行任意命令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>避免反序列化漏洞最好的方法是，禁止将序列化后的数据进行网络传输，不要保存在容易被修改或拦截的地方，如Cookie、URL中。</p>
</blockquote>
</blockquote>
<h2 id="◆-第4章" tabindex="-1"><a class="header-anchor" href="#◆-第4章" aria-hidden="true">#</a> ◆ 第4章</h2>
<h3 id="◆-4-1-sql注入漏洞" tabindex="-1"><a class="header-anchor" href="#◆-4-1-sql注入漏洞" aria-hidden="true">#</a> ◆ 4.1 SQL注入漏洞</h3>
<blockquote>
<blockquote>
<p>目前常见的SQL注入的攻击方式有报错注入、普通注入、隐式类型注入、盲注、宽字节注入、二次解码注入。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>报错注入</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>报错注入是指恶意攻击者用特殊的方式使数据库发生错误并产生报错信息，从而获得数据库和系统信息，方便攻击者进行下一步攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止报错信息被攻击者直接看到，网站上线后需要设置display_errors=Off。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>普通注入</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面的示例是普通注入。攻击者在地址栏输入下面带有部分SQL语句的请求。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113119478.png" alt="image-20211203113119478"></p>
<p>最终的SQL语句变成如下形式。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113126887.png" alt="image-20211203113126887"></p>
<p>从而输入任何参数都可以满足查询条件，使其变成一个万能查询语句。同样，可以使用UNION和多语句进行查询，获取数据库的全部信息。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113138693.png" alt="image-20211203113138693"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据库当前表中的数据将被全部备份在/tmp/backup.sql文件中。当攻击者再利用其他漏洞找到下载方式，将文件下载或者复制走，最终造成被拖库时，Web站点的数据就会全部暴露。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果执行下面请求，将发生更可怕的事情。执行上面的请求后，在原有的SQL语句后面拼接了name';DELETE FROM hacker；SELECT * FROMusername WHERE 'a'='a，查询语句变成了以下形式。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113219029.png" alt="image-20211203113219029"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据库里的数据被攻击者完全删除。如果没有提前对数据进行备份，这对于系统造成的伤害将是毁灭性的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>隐式类型注入</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113321467.png" alt="image-20211203113321467"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该查询语句的作用是通过email查询相应的用户信息，由于将email的值误写为0，在图4-1的执行结果中可以看到数据库返回了表中的所有内容。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113331415.png" alt="image-20211203113331415"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为在MySQL中执行SQL查询时，如果SQL语句中字段的数据类型和对应表中字段的数据类型不一致，MySQL查询优化器会将数据的类型进行隐式转换。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113347360.png" alt="image-20211203113347360"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过表中的转换关系可以看出，在上面的查询语句中，MySQL将数据类型转换为DOUBLE后进行查询，由于STRING转换后的值为0，同时查询条件中的值也为0，所以匹配到了整张表的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>盲注</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在页面无返回的情况下，攻击者也可以通过延时等技术实现发现和利用注入漏洞。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113416933.png" alt="image-20211203113416933"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>判断数据库版本，执行成功，浏览器返回会延时并利用BENCHMARK()函数进行延时注入。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113443775.png" alt="image-20211203113443775"></p>
<p>该请求会使MySQL的查询睡眠5秒，攻击者可以通过添加判断条件到SQL语句中，如果睡眠了5秒，那么说明MySQL版本为5，否则不是。通过盲注可以掌握数据库和服务器的相关信息，为攻击提供便利。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>宽字节注入</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要触发宽字节注入，有一个前提条件，即数据库和程序编码都是GBK的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>二次解码注入</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常情况下，为了防止SQL注入的发生，采取转义特殊字符，例如对用户输入的单引号（'）、双引号（&quot;）进行转义变成“'&quot;”。有一个误区就是通过配置PHP的GPC开关进行自动转义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当攻击者将参数二次编码时，PHP的自动转义将无法识别用户的恶意输入。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当PHP接收到请求时会自动进行一次URL解码，变为name%27，然后代码里又使用urldecode()函数或rawurldecode()函数进行解码，%27变成了单引号，URL最终变成name=name'引发SQL注入。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-2-sql注入漏洞防护" tabindex="-1"><a class="header-anchor" href="#◆-4-2-sql注入漏洞防护" aria-hidden="true">#</a> ◆ 4.2 SQL注入漏洞防护</h3>
<blockquote>
<blockquote>
<p>使用MySQL提供的预编译进行SQL注入防护，在PHP中使用PHP数据对象扩展或MySQLi扩展连接数据库，并且对SQL语句进行预编译处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个完整的MySQL预编译处理分为编译、执行、释放三步，预编译遵循指令和数据分离的原则，可以有效地防止SQL注入的发生。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先是编译，通过PREPARE stmt_name FROM preparable_stm来预编译一条SQL语句。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113619789.png" alt="image-20211203113619789"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过EXECUTE stmt_name [USING @var_name [,@var_name]…]的语法来执行预编译语句。</p>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203113632403.png" alt="image-20211203113632403" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MySQL中的预编译语句作用域是会话级，但可以通过max_prepared_stmt_count变量来控制全局最大存储的预编译语句。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当预编译条数达到阈值时，可以看到MySQL会报出如上所示的错误。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果要释放一条预编译语句，则可以使用{DEALLOCATE | DROP} PREPARE stmt_name的语法进行操作。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113652765.png" alt="image-20211203113652765"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每次SQL执行会分两次进行。第一次先将需要编译的SQL语句发送给数据库进行编译，数据部分用占位符代替。第二次将用户数据提交给数据库执行。SQL语句不会再次进行编译，即使用户数据中包含SQL字符也会被当成数据处理，不会改变原语句的结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113728294.png" alt="image-20211203113728294"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在默认情况下，使用PDO并没有让MySQL数据库执行真正的预处理语句。为了解决这个问题，应该禁止PDO模拟预处理语句，添加PDO::ATTR_EMULATE_PREPARES、PDO::ATTR_ERRMODE属性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113743748.png" alt="image-20211203113743748"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203113754800.png" alt="image-20211203113754800" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于预处理是先提交SQL语句到MySQL服务端，执行预编译，客户端需要执行SQL语句时只需上传输入参数，分离了参数与SQL语句，因此不会导致恶意参数的执行，从根本上保障了数据库的安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>宽字节注入防护要防止这类整型的宽字节注入，可以在进行SQL查询前使用intval对变量进行强制转换。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以使用mysql_real_escape_string进行防御，在使用前需要mysql_set_charset指定当前所使用的字符集格式才能生效。如前面的宽字节注入的解决方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203113852993.png" alt="image-20211203113852993" style="zoom:80%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>还有一种方式就是将character_set_client设置为binary，在执行SQL前先执行以下代码。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203113925230.png" alt="image-20211203113925230"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将character_set_client设置成二进制格式，就不存在宽字节或多字节的问题了，所有数据以二进制的形式传递，就能有效地避免宽字符注入。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>禁用魔术引号</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP中的魔术引号选项magic_quotes_gpc推荐关闭，它并不能有效地防止SQL注入，已知已经有若干种方法可以绕过它，甚至由于它的存在反而衍生出一些新的安全问题。XSS、SQL注入等漏洞，都应该由应用在正确的方法中解决，同时关闭魔术引号还能提高性能。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-3-xml注入漏洞防护" tabindex="-1"><a class="header-anchor" href="#◆-4-3-xml注入漏洞防护" aria-hidden="true">#</a> ◆ 4.3 XML注入漏洞防护</h3>
<blockquote>
<blockquote>
<p>XML注入攻击也称为XXE(XML External Entity attack)漏洞，XML文件的解析依赖于libxml库，libxml2.9及以前的版本默认支持并开启了外部实体的引用，服务端解析用户提交的XML文件时未对XML文件引用的外部实体（含外部普通实体和外部参数实体）进行合适的处理，并且实体的URL支持file://和php://等协议，攻击者可以在XML文件中声明URI指向服务器本地的实体造成攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>XXE漏洞一旦被攻击者利用，可以读取服务器任意文件、执行任意代码、发起DDos攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在XML中引入外部实体一定要注意其安全性，需要进行严格的检查，或者禁止引入。（1）对用户的输入进行过滤，如&lt;、&gt;、'、&quot;、&amp;等。（2）常见的XML解析方法有DOMDocument、SimpleXML、XMLReader，这三者都基于libxml库解析XML，所以均受影响。xml_parse()函数则基于expact解析器，默认不载入外部DTD，不受影响。可以在PHP解析XML文件之前使用libxml_disable_entity_loader(true)来禁止加载外部实体（对上述三种XML解析组件都有效），并使用libxml_use_internal_errors()禁止报错。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-4-邮件安全" tabindex="-1"><a class="header-anchor" href="#◆-4-4-邮件安全" aria-hidden="true">#</a> ◆ 4.4 邮件安全</h3>
<blockquote>
<blockquote>
<p>邮件注入是针对PHP内置邮件功能的一种攻击类型。攻击者通过注入任何邮件头字段如BCC、CC、主题等，利用系统邮件服务器发送垃圾邮件。这种攻击的主要原因是由于没有对用户的输入进行严格的过滤和审查，接收用户信息并发送电子邮件消息的应用程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中使用mail()函数进行邮件发送。如果对用户的输入没有进行检查通常会造成邮件注入</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以通过filter_var()函数检测防止邮件注入的发生。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203114048381.png" alt="image-20211203114048381" style="zoom:80%;" />
<p>除此之外，在允许用户自定义邮件标题和内容的情况下，建议对标题和内容进行过滤。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-5-php组件漏洞防护" tabindex="-1"><a class="header-anchor" href="#◆-4-5-php组件漏洞防护" aria-hidden="true">#</a> ◆ 4.5 PHP组件漏洞防护</h3>
<blockquote>
<blockquote>
<p>PHP库文件、PHP框架和其他PHP的软件模块，几乎总是以全部权限运行。如果一个带有漏洞的组件被利用，这种攻击可能会造成严重的数据丢失或服务器接管。应用程序使用带有已知漏洞的组件会破坏应用程序防御系统，并使一系列的攻击和影响成为可能。组件本身存在严重的漏洞，如FCKeditor编辑器、OpenSSL等均曝出过较严重的漏洞。防止此类漏洞，一定要时刻关注该软件的更新，总是使用最新版本的组件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>RSS安全漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>聚合内容(Really Simple Syndication，RSS)是在线共享内容的一种简易方式。通常在时效性比较强的内容上使用RSS订阅能更快速获取信息，网站提供RSS输出，有利于让用户获取网站内容的最新更新。网络用户可以在客户端借助于支持RSS的聚合工具软件（例如SharpReader、NewzCrawler、FeedDemon），在不打开网站内容页面的情况下阅读支持RSS输出的网站内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>受攻击的应用一般有以下几种。（1）本地RSS阅读器，如Foxmail、GreatNews、浏览器自带的RSS订阅、其他客户端、浏览器等。如果对此类进行攻击，可以执行更大的权限，一般为本地JavaScript权限。（2）Web RSS阅读器，如Google Reader、Bloglines、NewsGator、抓虾等。如果对此类进行攻击，将对Web用户造成伤害。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>PHPMailer漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHPMailer是一个用于发送电子邮件的PHP函数包，堪称全球最流行的邮件发送类之一。全球范围内有很多用户直接用PHPMailer进行发送，且无须搭建复杂的Email服务。（1）PHPMailer在5.2.18之前的版本存在一个漏洞，远程攻击者利用该漏洞，可在Web服务器中执行任意远程代码，攻击者主要在常见的Web表单中，如意见反馈表单、注册表单、邮件密码重置表单等，使用邮件发送的组件时利用此漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）PHPMailer在5.2.21及之前的版本中存在任意文件读取漏洞，攻击者利用该漏洞，可获取服务器中的任意文件内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>OpenSSL漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>OpenSSL是一个安全套接字层密码库，包括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其他目的使用，用来实现网络通信的高强度加密，现在已被广泛地用于各种网络应用程序中。Apache使用它加密HTTPS，OpenSSH使用它加密SSH，但是，不应该只将其作为一个库来使用，它其实是一个多用途、跨平台的密码工具。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）OpenSSL 1.0.1n、1.0.1o、1.0.2b、1.0.2c版本，crypto/x509/x509_vfy.c内的函数X509_verify_cert，在替代证书链过程识别中没有正确处理X.509 Basic Constraints CA值，存在安全漏洞，这可使攻击者通过有效的证书，利用此漏洞冒充CA，发布无效的证书。（2）2014年4月7号，OpenSSL被谷歌安全工程师发现Heartbleed漏洞，这项严重漏洞的产生是由于未能在memcpy()调用受害用户输入内容作为长度参数之前正确进行边界检查。攻击者可以追踪OpenSSL所分配的64KB缓存，将超出必要范围的字节信息复制到缓存当中再返回缓存内容，这样一来受害者的内存内容就会以每次64KB的速度泄露。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSL v2.0协议漏洞</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为SSL v2.0协议存在许多安全漏洞问题，所以容易遭遇中间人攻击且容易被破解。由于许多系统和Web服务器还支持SSL v2.0协议，因此为了增强用户浏览网页的安全，目前所有主流新版浏览器都已经不支持不安全的SSL v2.0协议。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SSL v2.0主要存在以下问题。</p>
<p>（1）同一加密密钥用于消息身份验证和加密。</p>
<p>（2）弱消息认证代码结构和只支持不安全的MD5散列函数。</p>
<p>（3）SSL握手过程没有采取任何防护，这意味着非常容易遭遇中间人攻击。</p>
<p>（4）使用TCP连接关闭，以指示数据的末尾（没有明确的会话关闭通知）。这意味着截断攻击是可能的：攻击者只需伪造一个TCP FIN，使得接收方无法识别数据结束消息的合法性。</p>
<p>（5）仅能提供单一服务和绑定一个固定域名，这与Web服务器中的虚拟主机标准功能有冲突，这意味着许多网站无法使用SSL。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-6-文件包含安全" tabindex="-1"><a class="header-anchor" href="#◆-4-6-文件包含安全" aria-hidden="true">#</a> ◆ 4.6 文件包含安全</h3>
<blockquote>
<blockquote>
<p>PHP文件包含漏洞的产生原因是在通过PHP的函数引入文件时，由于研发人员的疏忽，传入的文件名没有经过合理的校验，从而被攻击者操作了预想之外的文件，导致文件泄露。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将文件包含漏洞分成简单文件包含漏洞、受限制的文件包含漏洞、ZIP文件包含漏洞、远程文件包含漏洞等几类。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一│简单文件包含漏洞下面的代码是一个简单文件包含漏洞的示例。程序的正常逻辑是，当浏览器不传入file参数时，默认显示首页的页面；当file参数为list.php时，显示列表页面；当file参数为content.php时，显示内容页面。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114536204.png" alt="image-20211203114536204"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码在处理请求参数时，没对参数进行任何校验和处理，直接将客户端传过来的文件名称引入代码逻辑中。由于没有对输入进行限制和过滤，造成了文件包含漏洞，攻击者可以在file参数中构造各种路径，例如以下形式。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114601146.png" alt="image-20211203114601146"></p>
<p>如果PHP具有root权限，还可以读取以下内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114613365.png" alt="image-20211203114613365"></p>
<p>以至于可以直接获取服务器root账号权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="二│受限制的文件包含漏洞" tabindex="-1"><a class="header-anchor" href="#二│受限制的文件包含漏洞" aria-hidden="true">#</a> 二│受限制的文件包含漏洞</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止简单文件包含漏洞的发生，有些研发人员刻意限制被包含文件的类型，如下面的代码在原来代码的基础上添加.php文件类型限制。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114634370.png" alt="image-20211203114634370"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在路径里指定了后缀，只能包含.php文件，限制了文件类型。但是即使这样也很容易被攻击者绕过，只要添加%00文件截断就可以让程序包含自己希望的文件。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114652198.png" alt="image-20211203114652198"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="三│zip文件包含漏洞" tabindex="-1"><a class="header-anchor" href="#三│zip文件包含漏洞" aria-hidden="true">#</a> <strong>三│ZIP文件包含漏洞</strong></h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中可以直接读取ZIP压缩包里的文件流</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>四│远程文件包含漏洞</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当在PHP配置文件中设置allow_url_fopen=On以及allow_url_include=On，很容易造成远程文件包含漏洞，攻击者可以将远程可执行文件直接嵌入现有的代码逻辑中进行执行。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114810536.png" alt="image-20211203114810536"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>避免文件包含漏洞</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP项目中文件包含漏洞常出现在include()、include_once()、require()、require_once()、spl_autoload()等函数的调用中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用上述函数时要注意以下问题。</p>
<p>（1）保证接收的用户参数不可构造成文件路径。</p>
<p>（2）禁用远程访问，修改PHP配置。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114848964.png" alt="image-20211203114848964"></p>
<p>（3）指定默认文件名称和路径，不允许用户自行传递文件名称。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）使用basename进行过滤，如：</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203114908852.png" alt="image-20211203114908852"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-7-系统命令注入" tabindex="-1"><a class="header-anchor" href="#◆-4-7-系统命令注入" aria-hidden="true">#</a> ◆ 4.7 系统命令注入</h3>
<blockquote>
<blockquote>
<p>系统命令注入攻击(OS Command Injection)是指恶意攻击者通过非正常手段提交shell命令，通过PHP函数进行系统调用执行，以达到恶意攻击系统的目的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>易发生命令注入的函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一│exec()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>exec()函数可执行系统命令，并返回输出结果到$output中，然后使用foreach循环返回数组元素，得到命令结果。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二│system()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>system()函数的作用是执行系统命令，并返回所有结果到标准输出设备上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如下代码中，用户在浏览器中访问http://localhost/system.php?cmd=ls–al，cmd中的脚本命令将被执行，执行结果输出到页面上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>三│passthru()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>passthru()函数调用系统命令，把运行结果二进制数据原样地直接输出到标准输出设备上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如下代码中，用户在浏览器中访问http://localhost/passthru.php?cmd=ls–al，cmd中的脚本命令将被执行，执行结果输出到页面上。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120006680.png" alt="image-20211203120006680"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>四│popen()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>popen()函数可以执行系统命令，允许与程序进行交互，与pclose()函数一起使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如下代码中，用户在浏览器中访问http://localhost/popen.php?cmd=ls–al，cmd中的脚本命令将被执行，执行结果输出到页面上。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203115952732.png" alt="image-20211203115952732"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>五│执行运算符（backtick operator）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP支持执行反引号运算符（<code v-pre>）。注意，这不是单引号！PHP将尝试将反引号中的内容作为外壳命令来执行，并将其输出信息返回（例如，可以赋给一个变量而不是简单地丢弃到标准输出）。使用反引号运算符“</code>”的效果与shell_exec()函数相同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户在URL地址栏中输入http://localhost/backtick_operator.php?cmd=ls–al时，cmd中的命令将被执行，执行结果直接反馈在页面上。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120030894.png" alt="image-20211203120030894"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>六│shell_exec()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>shell_exec()函数通过shell执行命令并返回完整的输出字符串，等同于执行运算符。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户在浏览器中访问http://localhost/shell_exec.php?cmd=ls–al，cmd中的脚本命令将被执行，执行结果输出到页面上</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120052847.png" alt="image-20211203120052847"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>七│pcntl_exec()函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>pcntl是Linux系统下的一个扩展，可以支持PHP的多线程操作，pcntl_exec()函数的作用是在当前进程空间执行指定程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户在浏览器中访问http://localhost/pcntl_exec.php?cmd=ls&amp;args[]=-la，cmd中的脚本命令将被执行。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120110831.png" alt="image-20211203120110831"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>防御命令注入</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中为了防止命令注入的产生，应该注意以下几点。</p>
<p>（1）尽量避免使用此类函数，避免从用户端接收执行命令。</p>
<p>（2）如果必须使用此类函数，由于它的危险性，执行命令的参数应禁止外部获取，防止用户构造。</p>
<p>（3）设置php.ini配置文件中safe_mode=On选项，默认为Off，使用disable_functions将这些函数禁用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120137616.png" alt="image-20211203120137616"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）使用自定义函数或函数库来替代外部命令的功能。</p>
<p>（5）结合使用escapeshellarg()、escapeshellcmd()函数来处理命令参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>escapeshellarg()函数会将任何引起参数或命令结束的字符转义，单引号“'”替换成“'”，双引号“&quot;”替换成“&quot;”，分号“；”替换成“;”。（6）使用safe_mode_exec_dir指定可执行文件的路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用safe_mode_exec_dir指定可执行文件的路径，可以把会使用的命令提前放入此路径内。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203120217201.png" alt="image-20211203120217201"></p>
<p>参数的值尽量使用引号包裹，并在拼接前调用addslashes进行转义。</p>
</blockquote>
</blockquote>
<h2 id="◆-第5章-php与客户端交互安全" tabindex="-1"><a class="header-anchor" href="#◆-第5章-php与客户端交互安全" aria-hidden="true">#</a> ◆ 第5章 PHP与客户端交互安全</h2>
<h3 id="◆-5-1-浏览器跨域安全" tabindex="-1"><a class="header-anchor" href="#◆-5-1-浏览器跨域安全" aria-hidden="true">#</a> ◆ 5.1 浏览器跨域安全</h3>
<blockquote>
<blockquote>
<h4 id="浏览器同源策略" tabindex="-1"><a class="header-anchor" href="#浏览器同源策略" aria-hidden="true">#</a> <strong>浏览器同源策略</strong></h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在浏览器中规定URL由协议、域名、端口和路径组成，如果两个URL的协议、域名和端口相同，则表示它们同源。在非同源的情况下，从一个域上加载的脚本（如JavaScript脚本）是不允许访问另外一个非同源域中的文档的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203145839840.png" alt="image-20211203145839840"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个恶意网站的页面通过iframe嵌入了银行的登录页面（两者不同源），如果没有同源限制，恶意网页上的JavaScript脚本就可以在用户登录银行的时候获取用户名和密码。在浏览器中，script、img、iframe、link等标签都可以加载跨域资源，而不受同源限制。但浏览器限制了JavaScript脚本的权限，使其不能读、写加载的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>出于安全原因，浏览器限制从脚本内发起的跨源HTTP请求。例如，XMLHttpRequest和Fetch API遵循同源策略。这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非使用CORS策略。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="浏览器跨域资源共享" tabindex="-1"><a class="header-anchor" href="#浏览器跨域资源共享" aria-hidden="true">#</a> 浏览器跨域资源共享</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>跨域资源共享（Cross-Origin Resource Sharing，CORS）是浏览器的一种机制，允许应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行。浏览器支持在API容器中（例如XMLHttpRequest或Fetch）使用CORS，以降低跨域HTTP请求所带来的风险。CORS定义浏览器与服务器进行交互，以确定是否允许跨域请求的方式。CORS比只允许相同的源请求更强大，但是它比简单地允许所有这样的跨源请求更安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CORS协议在HTTP中的格式如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150027321.png" alt="image-20211203150027321"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150039402.png" alt="image-20211203150039402"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中使用header()函数可对CORS进行设置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150101950.png" alt="image-20211203150101950"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目前的主流浏览器都支持XMLHttpRequest跨域在JavaScript中使用，XMLHttpRequest能够与远程的服务器进行信息交互，XMLHttpRequest是一个纯粹的JavaScript对象，使用XMLHttpRequest可以在不重新加载页面的情况下向服务器发送数据并且从服务器请求数据更新网页。交互过程是在后台进行的，用户无法察觉，因此，如果XMLHttpRequest使用不当，会突破原有的JavaScript的安全限制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在HTTP中的CORS扩展字段，在相应网页头部加入字段表示允许访问的domain和HTTP method，浏览器通过检查自己的域是否在允许列表中来决定是否处理响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>JSONP资源加载安全</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于script标签可以加载跨域的JavaScript脚本，并且被加载的脚本和当前文档不属于同一个域，因此在文档中可以调用和访问脚本中的数据和函数。如果JavaScript脚本中的数据是动态生成的，那么只要在文档中动态创建script标签就可以实现与服务端的数据交互。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>JSONP（JSON with Padding）就是利用script&gt;标签的跨域能力实现跨域数据的访问，请求动态生成的JavaScript脚本同时带一个callback函数名作为参数。其中callback函数可以调用本地文档的JavaScript函数，服务器端动态生成的脚本会产生数据，并在代码中以产生的数据为参数调用callback函数。当这段脚本加载到本地文档时，callback函数就被调用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下代码是一个静态页面http://localhost:80使用JSONP方式调用非同源地址http://localhost:8080中的JSONP数据。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150401723.png" alt="image-20211203150401723"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下是服务端http://localhost:8080的动态代码，它输出了一个JSONP形式的数据供上面的静态页面中的JavaScript脚本使用。[插图]</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150421881.png" alt="image-20211203150421881"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>JSONP执行结果如图5-2所示。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150438757.png" alt="image-20211203150438757"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从上面的结果可以看到，80端口跨域获取了8080端口的内容。为了防止JSONP跨域造成数据泄露，应使用CORS白名单机制，只允许受信任域名进行数据请求，防止恶意请求。下面是在PHP中设置CORS白名单的方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150455451.png" alt="image-20211203150455451"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了可以在PHP中配置CORS外，还可以直接在Nginx或Apache配置文件中进行配置。以下是在Nginx中使用CORS白名单机制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150546499.png" alt="image-20211203150546499"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下是在Apache中使用CORS白名单机制。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150632813.png" alt="image-20211203150632813"></p>
</blockquote>
</blockquote>
<h3 id="◆-5-2-xss漏洞防御" tabindex="-1"><a class="header-anchor" href="#◆-5-2-xss漏洞防御" aria-hidden="true">#</a> ◆ 5.2 XSS漏洞防御</h3>
<blockquote>
<blockquote>
<p>跨站脚本攻击指的是攻击者在Web页面里插入了恶意代码，其没有被严格的控制或过滤，最终显示给来访的用户。攻击者通过注入的代码执行恶意指令，这些恶意网页程序通常是JavaScript、VBScript、ActiveX、Flash等，使用户加载并执行攻击者恶意制造的网页程序，从而达到恶意攻击用户的特殊目的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>XSS容易引起的安全问题如表5-3所示。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150707068.png" alt="image-20211203150707068"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_1-反射型xss" tabindex="-1"><a class="header-anchor" href="#_1-反射型xss" aria-hidden="true">#</a> （1）反射型XSS</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>反射型XSS也叫非持久化型XSS，是指攻击者通过构造非法请求将恶意代码嵌入页面，欺骗用户主动点击浏览进行触发，攻击者主要通过邮件或者聊天窗口向用户发送一些链接，让受害者进行点击。同样也会出现在搜索引擎收录的搜索页面中，当用户进行关键字搜索并点击时可触发XSS攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，研发人员为了方便，在页面上显示当前页码直接从浏览器读取。下面的写法会造成XSS漏洞。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150750385.png" alt="image-20211203150750385"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户在浏览器输入的参数中带有JavaScript可执行脚本时会产生XSS攻击脚本。例如，攻击者可以在地址栏中输入下面的代码进行XSS漏洞探测。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150803723.png" alt="image-20211203150803723"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将下页的URL输入到浏览器地址栏中（URL开头的“http://”被默认隐藏），可以将获取的Cookie发送给远程的攻击者，造成Cookie泄露，攻击者可以获取用户访问该站的全部权限。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150825514.png" alt="image-20211203150825514"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150912489.png" alt="image-20211203150912489"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203150957846.png" alt="image-20211203150957846"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户正常登录Web应用程序，浏览器会保存用户的全部Cookie信息，其中包含Session ID。</p>
<p>（2）攻击者将含有恶意代码的URL发送给用户。</p>
<p>（3）用户打开攻击者发送过来的恶意URL。</p>
<p>（4）浏览器程序执行用户发出的请求。</p>
<p>（5）同时执行该恶意URL中所含的攻击者的恶意代码。</p>
<p>（6）攻击者使用的攻击代码的作用是将用户的Cookie信息发送到攻击者的服务器并记录下来。</p>
<p>（7）攻击者在得到用户的Cookie信息后，将可以利用这些信息来劫持用户的会话，以该用户的身份进行登录。</p>
<h4 id="_2-存储型xss" tabindex="-1"><a class="header-anchor" href="#_2-存储型xss" aria-hidden="true">#</a> （2）存储型XSS</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>存储型XSS也叫持久化型XSS。当攻击者输入恶意数据保存在数据库，再由服务器脚本程序从数据库中读取数据，然后显示在页面上时，所有浏览该页面的用户都会受到攻击。攻击行为伴随着攻击数据一直存在，如在发表文章等地方加入代码，如果没有过滤或过滤不严，那么这些代码将储存到服务器中，用户访问该页面的时候就会触发代码执行。这种XSS比较危险，容易造成蠕虫、盲打后端管理平台、盗窃Cookie等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203151109637.png" alt="image-20211203151109637"></p>
<p>图5-6 存储型XSS</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）攻击者通过XSS漏洞将恶意代码提交到Web服务器进行永久存储。</p>
<p>（2）用户/网站管理员正常登录Web应用程序，登录成功则浏览器保存用户的全部Cookie，其中包含会话ID。用户/网站管理员请求受感染页面。</p>
<p>（3）服务器将用户请求的页面返回到浏览器。</p>
<p>（4）浏览器执行恶意页面中所含的攻击者的恶意代码。</p>
<p>（5）恶意代码将用户的Cookie信息发送到攻击者的服务器并记录下来。</p>
<p>（6）攻击者在得到用户的Cookie信息后，利用这些信息来劫持用户的会话，以该用户的身份进行登录，其中包括以平台管理员身份登录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>·Joomla!是一套全球知名的内容管理系统（Content Management System，CMS），是使用PHP语言加MySQL所研发的软件系统，本书成稿时其最新版本是3.8，可以在Linux、Windows、macOS等各种不同的平台上执行。自2012年以来，Joomla!连续多年成为CMS评奖的冠军。2015年、2016年、2017年在全球CMS评测中，它连续获得“最佳开源CMS”奖!·在Joomla!3.0.0至Joomla!3.8.7版本中存在多个跨站点脚本（XSS）漏洞，如CVE-2017-7985、CVE-2017-7986、CVE-2018-11326，远程攻击者可以将恶意代码插入到Joomla!中，然后在受害者浏览器中执行它。这样就可以让远程攻击者获得对受害者浏览器的控制权，并劫持受害者的Joomla!账户。如果是拥有超级管理员权限的用户登录，可以直接被利用添加超级管理员权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_3-dom型xss" tabindex="-1"><a class="header-anchor" href="#_3-dom型xss" aria-hidden="true">#</a> （3）DOM型XSS</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DOM型XSS是一种特殊类型的XSS，它也是一种反射型XSS，是基于文档对象模型（DocumentObject Model，DOM）的一种漏洞。触发漏洞的原因是，使用JavaScript将用户的请求嵌入页面，从而执行了用户的恶意代码。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203151423314.png" alt="image-20211203151423314"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203151940954.png" alt="image-20211203151940954"></p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152101436.png" alt="image-20211203152101436"></p>
<p><strong>1.通过编码过滤和转换进行防御：</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>过滤是指对DOM属性和标签进行过滤，如通过程序逻辑将script、iframe、style等标签过滤掉，将onclick、onload等常用方法过滤掉。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>转换是指将输出到客户端的HTML特殊符号进行转义，通常的做法是转换为HTML实体，防止浏览器对其进行解析。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过HTML实体转化后的字符串不再具有HTML特性，浏览器按HTML实体字符串将其解析成可展示的字符串。进行HTML实体转化，可以有效地防止XSS代码执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以通过PHP中的htmlentities()函数进行转换。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152138858.png" alt="image-20211203152138858"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用htmlspecialchars()函数把预定义的字符转换为HTML实体。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152206825.png" alt="image-20211203152206825"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>2.DOM标签过滤</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>XSS漏洞的产生在大部分情况下是由于恶意攻击者构造了可执行脚本，将DOM标签过滤掉则可以防止攻击者构造完整的可执行脚本。在PHP中可以使用strip_tags()函数过滤掉字符串中的HTML、XML以及PHP的标签。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152313942.png" alt="image-20211203152313942"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152342494.png" alt="image-20211203152342494"></p>
<p>除了对JavaScript标签进行过滤外，为了防止将JavaScript事件直接输出到标签中，还需要对JavaScript事件函数进行过滤。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>3.URL编码转换</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中使用urlencode()函数将含有HTML的字符串转换为HTML实体，用于输出处理字符型参数，防止XSS的发生。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152453218.png" alt="image-20211203152453218"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>4.数据类型转换</strong></p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152537809.png" alt="image-20211203152537809"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_4-开启httponly防御xss" tabindex="-1"><a class="header-anchor" href="#_4-开启httponly防御xss" aria-hidden="true">#</a> （4）开启HttpOnly防御XSS</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Cookie操作函数setcookie()和setrawcookie()也专门添加了第七个参数来作为HttpOnly的选项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对Cookie进行IP绑定用户登录后对用户的Cookie和客户端的IP进行绑定，即使Cookie被攻击者拦截，判断来源IP是否是登录时的用户IP可以在一定程度上防止用户会话被劫持的风险。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_5-浏览器策略防御xss" tabindex="-1"><a class="header-anchor" href="#_5-浏览器策略防御xss" aria-hidden="true">#</a> （5）浏览器策略防御XSS</h4>
<p>防御XSS最有效的方式是编码和过滤，同时要配合浏览器策略来进行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>一│X-XSS-Protection</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>微软一开始在IE 8中，引入了针对XSS攻击的防御。这种浏览器内置的功能称为XSS过滤器，旨在缓解XSS攻击。Webkit后来有了自己的版本，叫作Chrome和Safari的XSS审计。这个想法很简单：如果一个恶意输入被反映在文档中，反射的部分将被删除或整个文档根本不会被渲染。通过X-XSS-Protection来进行设置。在PHP中使用header()函数设置X-XSS-Protection的值为1来开启XSS保护选项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152850879.png" alt="image-20211203152850879"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面的代码开启了XSS保护，浏览器在检测到恶意XSS时会直接删除不安全的代码部分。如果在后面追加mode = block参数，则浏览器检测到XSS时不会渲染文档，代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152909126.png" alt="image-20211203152909126"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>二│Content-Security-Policy</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Content-Security-Policy缩写为CSP，主要是用来定义页面可以加载哪些资源，减少XSS的发生。研发人员可以通过CSP明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。可以通过HTTP头信息的Content-Security-Policy字段启用CSP。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152941380.png" alt="image-20211203152941380"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以通过网页meta标签启用CSP</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203152950923.png" alt="image-20211203152950923"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>启用后，不符合CSP的外部资源将被阻止加载。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-4-跨站请求伪造防御" tabindex="-1"><a class="header-anchor" href="#◆-5-4-跨站请求伪造防御" aria-hidden="true">#</a> ◆ 5.4 跨站请求伪造防御</h3>
<blockquote>
<blockquote>
<p>跨站请求伪造防御跨站请求伪造（Cross-Site Request Forgery）也被称为One Click Attack或者Session Riding，通常缩写为CSRF或者XSRF，是一种使已登录用户在不知情的情况下执行某种动作的攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CSRF在违反同源策略的情况下，攻击主要用来执行某种非法动作，而非窃取用户数据。例如，当受害者是一个普通用户时，CSRF可以实现在其不知情的情况下进行转移用户资金、发送邮件等操作。但是如果受害者是一个具有管理员权限的用户，CSRF则可能威胁到整个Web系统的安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户登录站点A（例如存在CSRF漏洞的某银行站点）。</p>
<p>（2）登录成功后A站点将Cookie信息保存在用户的浏览器端。</p>
<p>（3）在未登出A站点的情况下，并且A站点的Cookie还在有效期内，用户访问攻击者的网站B站点。</p>
<p>（4）在用户不知情的情况下，浏览器执行B站点的恶意代码，要求用户浏览器请求A站点。</p>
<p>（5）用户浏览器在用户不知情情况下携带用户的Cookie对A站点发起请求触发CSRF攻击（例如转账给某人，用户遭受损失）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CSRF攻击者拥有用户的全部权限，可以控制用户执行受控网站的所有操作，攻击者可以构造复杂的请求欺骗用户进行一系列的操作，例如购物和完成各种授权。CSRF攻击是攻击者借助受害者的Cookie骗取服务器的信任，但是攻击者并不能拿到Cookie，也看不到Cookie的内容。另外，对于服务器返回的结果，由于浏览器同源策略的限制，攻击者也无法进行解析。因此，攻击者无法从返回的结果中得到任何东西，他所能做的就是给服务器发送请求，以执行请求中所描述的命令，在服务器端直接改变数据的值，而非窃取服务器中的数据。所以，要保护的对象是那些可以直接产生数据改变的服务，而对于读取数据的服务，则不需要进行CSRF的保护。比如，银行系统中转账的请求会直接改变账户的金额，会遭到CSRF攻击，所以需要保护。而查询余额是对金额的读取操作，不会改变数据，CSRF攻击无法解析服务器返回的结果，所以无须保护。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于CSRF漏洞是由非授权访问的第三方引起的，因此相对于其他漏洞来说容易进行防御，通常使用的方法是校验访问来源Referer、添加校验Token、重要页面表单添加验证码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>（1）使用Referer校验请求</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在服务器端检测HTTP header中的Referer字段。服务器判断Referer是否是自己的站点，如果不是，则拒绝服务。对于当前的业务系统，不需要改变任何已有代码和逻辑，没有风险，非常便捷。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153112735.png" alt="image-20211203153112735"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Referer也并非万无一失。Referer的值是由浏览器提供的，虽然HTTP上有明确的要求，但是每个浏览器对于Referer的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。使用验证Referer值的方法，就是把安全性都依赖于第三方（即浏览器）来保障，从理论上来讲，这样并不安全。事实上，对于某些浏览器，比如FireFox，目前已经有一些方法可以篡改Referer值。攻击者完全可以把用户浏览器的Referer值设为需要的域名地址，这样就可以通过验证，从而发起CSRF攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即便是使用最新的浏览器，攻击者无法篡改Referer值，但这种方法仍然有问题。因为Referer值会记录下用户的访问来源，有些用户认为这样会侵犯到自己的隐私权，特别是有些组织担心Referer值会把组织内网中的某些信息泄露到外网中。因此，用户自己可以设置浏览器使其在发送请求时不再提供Referer。当这些用户正常访问银行网站时，网站会因为请求没有Referer值而认为是CSRF攻击，从而拒绝合法用户的访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>（2）使用Token校验</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在表单请求中添加Token认证机制可以加大CSRF的难度，同时可以防止表单的重复提交。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153212052.png" alt="image-20211203153212052"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用Token时还需要注意，必须保证Token不唯一，并且只能使用一次，防止攻击者使用其他方式获取Token，而利用不变的Token对系统发起攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>（3）在HTTP头中自定义属性并验证</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种方法也是使用Token并进行验证，与上一种方法不同的是，这里并不是把Token以参数的形式置于HTTP请求之中，而是把它放到HTTP头中自定义的属性里。通过XMLHttpRequest这个类，可以一次性给所有该类请求加上X-CSRF-TOKEN这个HTTP头属性，并把Token值放入其中。这样解决了上一种方法在请求中加入Token的不便，同时，通过XMLHttpRequest请求的地址不会被记录到浏览器的地址栏，也不用担心Token会透过Referer泄露到其他网站中去。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>然而这种方法的局限性非常大。XMLHttpRequest请求通常用于Ajax方法中对页面局部的异步刷新，并非所有的请求都适合用这个类来发起，而且通过该类请求得到的页面不能被浏览器所记录，从而进行前进、后退、刷新、收藏等操作，给用户带来不便。另外，对于没有进行CSRF防护的遗留系统来说，要采用这种方法来进行防护，需要把所有请求都改为XMLHttpRequest请求，这样几乎是要重写整个网站，代价无疑是不能接受的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>（4）添加图片验证码校验</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在一些重要操作页面，如登录、支付提交数据的时候，要求输入图片验证码或者短信验证码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>（5）Flash配置</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果使用到Flash，要严格配置Flash的Crossdomain.xml文件进行权限限制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153309021.png" alt="image-20211203153309021"></p>
</blockquote>
</blockquote>
<h3 id="◆-5-5-防止点击劫持" tabindex="-1"><a class="header-anchor" href="#◆-5-5-防止点击劫持" aria-hidden="true">#</a> ◆ 5.5 防止点击劫持</h3>
<blockquote>
<blockquote>
<p>有这样一种情况，攻击者伪造一个钓鱼站点，将Web嵌套到钓鱼站点的Frame中，通过误导用户完成恶意攻击者构造的操作，劫持用户的输入和操作。可以通过配置浏览器X-Frame-Options选项来防止点击劫持（Clickjacking）。X-Frame-OptionsHTTP响应头是用来给浏览器指示允许一个页面可否在frame、frame或者object中展现的标记，网站可以使用此功能来确保自己网站的内容没有被嵌到别人的网站中，也从而避免被点击劫持的攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP配置中添加X-Frame-Options如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153354961.png" alt="image-20211203153354961"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置Apache在所有页面上发送X-Frame-Options响应头，需要把下面的代码添加到'site'的配置中。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153415314.png" alt="image-20211203153415314"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置Nginx发送X-Frame-Options响应头，把下面的代码添加到'http'、'server'或者'location'的配置中。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153426004.png" alt="image-20211203153426004"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153456807.png" alt="image-20211203153456807"></p>
</blockquote>
</blockquote>
<h3 id="◆-5-6-http响应拆分漏洞" tabindex="-1"><a class="header-anchor" href="#◆-5-6-http响应拆分漏洞" aria-hidden="true">#</a> ◆ 5.6 HTTP响应拆分漏洞</h3>
<blockquote>
<blockquote>
<p>HTTP响应拆分漏洞也称为CRLF注入漏洞。恶意攻击者将CRLF换行符加入到请求中，从而使一个请求产生两个响应，前一个响应是服务器的响应，而后一个则是攻击者设计的响应。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中能引起响应拆分漏洞的函数有header()、setcookie()、session_id()、setrawcookie()等。在PHP5.1.2之后，该漏洞被修复，可以一次性阻止多个报文信息的发送。如果使用的是旧版本的PHP，应该设置字符替换。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-7-会话攻击安全防御" tabindex="-1"><a class="header-anchor" href="#◆-5-7-会话攻击安全防御" aria-hidden="true">#</a> ◆ 5.7 会话攻击安全防御</h3>
<blockquote>
<blockquote>
<p>PHP内置的会话管理机制并没有提供安全措施。具体的安全措施，应该有应用程序的研发团队来实施。恶意攻击者可以通过服务器系统漏洞非法获取服务器上的Session信息，即会话泄露（Session leak）。险些之外，恶意攻击者通过伪造客户端请求发起的Session攻击手段主要还有会话劫持（Session hijacking）和会话固定（Session fixation）两种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP项目中，通常把一些个人信息和敏感数据保存在Session信息中，会话数据一般以文件形式保存在服务器上，例如\tmp目录，或者以数据形式保存在Redis、Memcache、MySQL中。如果数据库或文件目录被攻陷，这些存储的会话就会暴露给攻击者。在存储会话之前对会话数据进行加密处理是很有必要的。可以使用session_set_save_handler()函数来进行自定义会话机制的加密存储和解密读取，以避免Session泄露造成的进一步损失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153706866.png" alt="image-20211203153706866"></p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203153717620.png" alt="image-20211203153717620"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>会话劫持（Session hijacking）是指攻击者利用各种手段获取目标用户的Session ID。一旦获取到Session ID，那么攻击者就可以利用目标用户的身份来登录网站，获取目标用户的操作权限。会话劫持的第一步是取得一个合法的会话标识来伪装成合法用户，因此要达到防御目的就需要保证会话标识不被泄露。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154249779.png" alt="image-20211203154249779"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）网站用户登录网站服务器。</p>
<p>（2）登录成功后，该用户得到网站提供的一个会话标识符Session ID。</p>
<p>（3）攻击者劫持用户的Session ID（例如通过XSS漏洞）。</p>
<p>（4）攻击者通过劫持到的Session ID访问网站，可获取该用户的所用信息。一般攻击者非法获取用户Session ID的方法有以下几种。</p>
<p>​		（1）暴力破解：尝试各种Session ID，直到破解为止。</p>
<p>​		（2）计算：如果Session ID使用非随机的方式产生，那么就有可能计算出来。</p>
<p>​		（3）窃取：使用网络截获、目录泄露、XSS攻击等方法获得。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>会话固定（Session fixation）是攻击者利用服务器的Session不变机制，向受害者发送固定的SessionID，受害者使用固定的Session ID与服务器进行交互，攻击者以此来获得用户权限的过程。如在浏览器中禁止掉Cookie，这种情况下，会话状态信息只能通过URL中的参数来传递到服务器端。这种方式的安全性很差，很容易发生会话固定攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​		（1）攻击者通过某种手段向目标用户发送Session ID。</p>
<p>​		（2）用户携带攻击者的Session ID进行登录。</p>
<p>​		（3）攻击者通过固定的Session ID获得会话，获取用户权限和信息。</p>
<p>​		<img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154343852.png" alt="image-20211203154343852"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止被恶意攻击者利用，在用户登录成功后应该使用session_regenerate_id()函数重新创建一个Session ID，销毁旧的Session ID。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154611691.png" alt="image-20211203154611691"></p>
</blockquote>
</blockquote>
<h2 id="◆-第6章" tabindex="-1"><a class="header-anchor" href="#◆-第6章" aria-hidden="true">#</a> ◆ 第6章</h2>
<h3 id="◆-6-1-用户密码安全" tabindex="-1"><a class="header-anchor" href="#◆-6-1-用户密码安全" aria-hidden="true">#</a> ◆ 6.1 用户密码安全</h3>
<blockquote>
<blockquote>
<p>不建议使用des和MD5等弱加密算法对密码等敏感信息进行加密，散列算法推荐使用SHA256或SHA512。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154638635.png" alt="image-20211203154638635"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP内置了hash()函数，只需要将加密方式传给hash()函数，直接指明使用SHA256、SHA512等加密方式即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以增加普通MD5等快速算法的迭代次数生成复杂的salt，或者使用mcrypt这样更为复杂的加密算法，迫使攻击者在暴力破译的时候需要更长的时间。由于将加密算法控制在微秒级即可给攻击者的破译带来灾难性打击，而同时单个用户登录时验证的耗时又不算太长，这种方法可以说有效地解决了攻击者破译密码的危险。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多次加密的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154728415.png" alt="image-20211203154728415"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>生成较长、较复杂的随机salt的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154839029.png" alt="image-20211203154839029"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用password_hash()函数，指定第二个参数为PASSWORD_BCRYPT进行加密密码的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154905237.png" alt="image-20211203154905237"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了以上方式外，还可以用自己的方式对字符串进行混淆，创造更为复杂的密码加密方式。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203154950883.png" alt="image-20211203154950883"></p>
<p>bcrypt其实就是blowfish和crypt()[插图]函数的结合。通过CRYPT_BLOWFISH判断blowfish是否可用，然后生成一个salt。不过这里需要注意的是，crypt()的salt必须以$2a$或者$2y$开头。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-2-防止暴力破解" tabindex="-1"><a class="header-anchor" href="#◆-6-2-防止暴力破解" aria-hidden="true">#</a> ◆ 6.2 防止暴力破解</h3>
<blockquote>
<blockquote>
<p>暴力破解（Brute-force Attack）又被称为穷举破解，是一种密码的破译方法，即将密码进行逐个尝试直到找出真正的密码为止。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常见的防御方法有以下几种：</p>
<p>（1）使用验证码进行验证登录。</p>
<p>（2）使用Token生成form_hash，然后验证。</p>
<p>（3）使用随机数时，要确保用户无法获取随机数生成算法。</p>
<p>（4）身份验证需要用户凭短信、邮件接收验证码时，需要对验证次数进行限制。</p>
<p>（5）限制某时间段内验证次数。</p>
<p>（6）用户在设置密码时要求用户使用特殊字符和字母数字组合，并限制最小长度。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-3-随机数安全" tabindex="-1"><a class="header-anchor" href="#◆-6-3-随机数安全" aria-hidden="true">#</a> ◆ 6.3 随机数安全</h3>
<blockquote>
<blockquote>
<p>随机数有真随机数和伪随机数之分。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>真随机数使用真随机数发生器(True Random Number Generator，TRNG)生成，是利用不可预知的物理方式来产生的随机数，例如掷钱币、骰子，转轮，使用电子元件的噪声、核裂变等。</p>
<p>伪随机数使用伪随机数发生器(Pseudo Random Number Generator，PRNG)生成，是计算机利用一定的算法或种子来产生的。计算机中生成的都是伪随机数，其中伪随机又分为强伪随机数（难以预测的随机数）和弱伪随机数（易于预测的随机数）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>项目中通常使用随机数的场景有密码salt生成、验证码生成、Token生成、UUID生成、密钥生成、数字签名生成、加密向量生成、Nonce生成等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不正确地使用随机数会导致一系列的安全问题。</p>
<p>（1）在研发过程中使用时间戳作为随机数［MD5(时间戳)，MD5(用户ID+时间戳)］，但是由于时间戳是可以预测的，因此很容易被猜解。</p>
<p>（2）生成密码用的slat以及找回密码的Token，需要一个随机数，如果直接根据用户ID成Token，很容易被攻击者猜解。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）OAuth 2.0中需要第三方传递一个state参数作为CSRF Token来防止CSRF攻击，很多研发人员根本不使用这个参数，或者是传入一个固定的值。由于认证方无法对这个值进行业务层面的有效性校验，导致了OAuth的CSRF攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）在抽奖程序中如果使用的随机数不均匀或者可猜解，可直接造成奖品损失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）PHP 5在Windows操作系统下调用rand()函数的时候会发生随机数不均匀的情况，其他操作系统不会有这样的情况。PHP提供了另一个高质量、非常好的随机数发生器mt_rand()，在涉及项目安全的时候可选用这个函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 7中提供了很好的实现方法，使用random_int与random_bytes来生成随机数。下面是一个随机Token的生成示例。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155339721.png" alt="image-20211203155339721"></p>
</blockquote>
</blockquote>
<h3 id="◆-6-4-数字摘要" tabindex="-1"><a class="header-anchor" href="#◆-6-4-数字摘要" aria-hidden="true">#</a> ◆ 6.4 数字摘要</h3>
<blockquote>
<blockquote>
<p>数字摘要也称作数字签名，是将任意长度的消息变成固定长度的短消息。它是一个单向的、不可逆转的加密方法，一般采用单项Hash函数将需要加密的明文“摘要”成一串固定长度（如128位）的密文，这一串密文又称为数字指纹，它有固定的长度，而且不同的明文摘要成密文结果总是不同的，而同样的明文摘要必定一致。数字摘要常用于互联网上传输的信息加密认证，进行防篡改识别。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常用的数字摘要算法有MD5和SHA等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息摘要算法第五版（Message Digest Algorithm MD5，MD5）是计算机安全领域广泛使用的一种散列函数，用以提供消息的完整性保护。MD5被广泛用于数字摘要，是因为对原数据进行任何改动，哪怕只修改1字节，所得到的MD5值都有很大区别。并且，已知原数据和其MD5值，要找到一个具有相同MD5值的数据（即伪造数据）是非常困难的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如文件下载，在很多提供软件下载的网站，会列出文件下载的MD5码，下载的人可以自行计算下载回来的档案是否与网站提供的MD5码相符，从而验证这个程式是否曾经被修改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其他常用的散列函数如下。</p>
<p>··hash_file()：使用给定文件的内容生成散列值。</p>
<p>··hash_hmac()：使HMAC方法生成密钥散列值。</p>
<p>··hash_init()：初始化增量散列运算。</p>
<p>··hash()：生成散列值。</p>
<p>··password_hash()：创建散列密码。</p>
<p>··crypt()：返回一个基于标准UWIX DES算法或系统上其他可用的替代算法的散列字符串。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-5-mac和hmac简介" tabindex="-1"><a class="header-anchor" href="#◆-6-5-mac和hmac简介" aria-hidden="true">#</a> ◆ 6.5 MAC和HMAC简介</h3>
<blockquote>
<blockquote>
<p>消息认证码（Message Authentication Code，MAC）在发送消息的基础上通过Key生成加密摘要，通常被用于检测消息在传输过程中是否被篡改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息认证过程中，消息的发送方通过密钥和MAC算法生成MAC数据标记，然后将消息和MAC标签发送到接收方。消息接收方依次使用相同的密钥通过相同的MAC算法运行传输的消息部分，产生MAC数据标签。接收器将在传输中接收的MAC标签与自己生成的MAC标签进行比较。如果它们相同，则接收方可以认为消息在传输期间未发生改变或篡改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="\img\6.PHP安全之道：项目安全的架构、技术与实践\image-20211203155612404.png" alt="image-20211203155612404" style="zoom:80%;" />
<p>​																				图6-1 MAC消息认证过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止重放攻击，消息本身必须包含确保该相同消息仅能被发送一次的数据，例如使用时间戳、序列号或使用一次MAC。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>散列消息身份验证码（Hashed Message Authentication Code，HMAC）是在MAC算法基础上基于加密散列算法实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在下面的PHP代码中使用hash_hmac()函数来使用MD5方式给原始消息生成散列值。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155725321.png" alt="image-20211203155725321"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果需要给文件生成散列值，可使用hash_hmac_file()函数，在下面的示例代码中使用SHA256算法生成散列值</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155806786.png" alt="image-20211203155806786"></p>
</blockquote>
</blockquote>
<h3 id="◆-6-6-对称加密" tabindex="-1"><a class="header-anchor" href="#◆-6-6-对称加密" aria-hidden="true">#</a> ◆ 6.6 对称加密</h3>
<blockquote>
<blockquote>
<p>对称加密算法是指，数据发信方将明文（原始数据）和密钥一起经过加密处理后，使其变成复杂的加密密文发送出去。收信方收到密文后，若要解读原文，则需要使用加密密钥及相同算法的逆算法对密文进行解密，使其恢复成可读明文。对称加密算法的优点是算法公开、计算量小、加密速度快、加密效率高，适用于加密大量数据的场合。常用的算法有DES、3DES、TDEA、Blowfish、RC2、RC4、RC5、IDEA、SKIPJACK、AES等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP中如果需要使用对称加密算法，则需要mcrypt扩展的支持。PHP的mcrypt扩展提供了强大的加密解密方法，支持19种加密算法和8种加密模式，具体可以通过函数mcrypt_list_algorithms()和mcrypt_list_modes()来显示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155906381.png" alt="image-20211203155906381"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155923552.png" alt="image-20211203155923552"></p>
<p>使用DES方式加密的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203155941163.png" alt="image-20211203155941163"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用DES方式解密的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160037768.png" alt="image-20211203160037768"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AES目前有五种加密模式。</p>
<p>（1）电码本（Electronic Codebook，ECB）模式。</p>
<p>（2）密码分组链接（Cipher Block Chaining，CBC）模式。</p>
<p>（3）计数（Counter，CTR）模式。</p>
<p>（4）密码反馈（Cipher FeedBack，CFB）模式。</p>
<p>（5）输出反馈（Output FeedBack，OFB）模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP的mcrypt扩展中，rijndael-128、rijndael-192、rijndael-256就是AES加密，三种分别使用不同的数据块和密钥长度进行加密。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在AES的ECB模式中，一般是16字节为一块，然后对这一整块进行加密，如果输入的字符串不够16字节，就需要补位。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用AES-ECB方式进行加密数据的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160246159.png" alt="image-20211203160246159"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用AES-ECB方式进行解密数据如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160304017.png" alt="image-20211203160304017"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AES的CBC加密模式，需要添加初始化向量（IV），默认是16个0。由于是分组加密，因此下一组的IV就用前一组的加密的密文来充当。CFB、OFB模式类似，只不过更复杂，从而破解难度更大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用AES-CBC方式进行加密解密数据的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160328753.png" alt="image-20211203160328753"></p>
</blockquote>
</blockquote>
<h3 id="◆-6-7-非对称加密" tabindex="-1"><a class="header-anchor" href="#◆-6-7-非对称加密" aria-hidden="true">#</a> ◆ 6.7 非对称加密</h3>
<blockquote>
<blockquote>
<p>对称加密算法在加密和解密时使用的是同一个密钥。与对称加密算法不同，非对称加密算法需要两个密钥——公开密钥（public key，简称公钥）和私有密钥（private key，简称私钥）进行加密和解密。公开密钥与私有密钥是一对，如果用公开密钥对数据进行加密，只有用对应的私有密钥才能解密；如果用私有密钥对数据进行加密，那么只有用对应的公开密钥才能解密。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在非对称加密中使用的主要算法有RSA、Elgamal、背包算法、Rabin、D-H、ECC（椭圆曲线加密算法）等。RSA是目前最有影响力的公钥加密算法之一，它能够抵抗到目前为止已知的绝大多数密码攻击，已被ISO组织推荐为公钥数据加密标准。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160549455.png" alt="image-20211203160549455"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP中用RSA进行加密解密如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160604427.png" alt="image-20211203160604427"></p>
</blockquote>
</blockquote>
<h2 id="◆-第7章" tabindex="-1"><a class="header-anchor" href="#◆-第7章" aria-hidden="true">#</a> ◆ 第7章</h2>
<h3 id="◆-7-1-单一入口" tabindex="-1"><a class="header-anchor" href="#◆-7-1-单一入口" aria-hidden="true">#</a> ◆ 7.1 单一入口</h3>
<blockquote>
<blockquote>
<p>PHP项目使用单一入口，用一个入口文件处理所有的HTTP请求和返回所有的请求数据。例如，不管是列表页还是文章页，都是从浏览器访问index.php文件，这个文件就是这个应用程序的单一入口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>单一入口实现起来很简单，可以在访问index.php时使用一个特定的参数。例如index.php?action=list就是访问列表页，而index.php?action=single则是访问文章页。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>单一入口应用程序的所有请求都是通过index.php接收并转发到功能代码中的，所以在index.php中能完成许多实际工作。由于所有的请求都由index.php接收，因此可以进行集中的安全性检查。如果不是单一入口，那么研发人员就必须记住在每一个文件的开始加上安全性检查代码（当然，安全性检查可以写到另一个文件中，只需要用include语句即可）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在入口里，还可以对URL参数和POST进行必要的检查和特殊字符过滤、记录日志、访问统计等各种可以集中处理的任务。这样就可以看出，由于这些工作都被集中到index.php来完成，可以减轻维护其他功能代码的难度，对用户的请求更好地进行控制，很大程度上防止攻击者的非法入侵。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>单一入口可以使程序可读性更高，更容易维护，相对产生更少的BUG和安全漏洞</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止恶意用户从非单一入口进入，需要在入口文件开头使用define定义入口常量。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160845206.png" alt="image-20211203160845206"></p>
<p>在非入口文件中用defined来检测用户是否从正常入口进入。如果没有检测到入口常量，则必须让PHP脚本立即停止执行。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203160856250.png" alt="image-20211203160856250"></p>
</blockquote>
</blockquote>
<h3 id="◆-7-2-项目部署安全-kms" tabindex="-1"><a class="header-anchor" href="#◆-7-2-项目部署安全-kms" aria-hidden="true">#</a> ◆ 7.2 项目部署安全（KMS）</h3>
<blockquote>
<blockquote>
<p>使用规范的文件目录结构，有助于提高项目的逻辑结构合理性，对项目扩展、团队合作研发以及安全部署均有好处。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先，网站的根目录（Public目录）下建议只存放PHP项目的入口文件，将其他的库文件和不允许用户直接访问的文件与入口文件进行隔离存放，这样可以避免攻击者遍历网站目录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>动态文件和静态文件要分离到不同的目录中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161045092.png" alt="image-20211203161045092"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应该限制Web目录和文件的权限。一般情况下，对目录，建议只设置R（读取）和X）执行）权限，对脚本文件只设置R(读取）权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止用户之间互相窥探到对方的源码，应该限制用户组的权限，以使得除root权限之外，不能随意互相窥探其他人的源码、数据库资料等。建议去掉同用户组和其他用户组的R（读取）权限，具体做法是设置目录权限为500(读取+执行），同时文件权限为400(读取)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>设置较为安全的目录、文件权限，应遵循下面的原则。</p>
<p>（1）尽可能减少Web路径下可写入目录的数量。</p>
<p>（2）文件的写入和执行权限只能选择其一，避免同时出现写入和执行权限。例如，Upload中被用户上传到服务器上的文件只允许写入权限，严格禁止可执行权限。在Nginx和Apache中配置禁止PHP的可执行权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx下禁止指定目录运行PHP脚本，在server配置段中增加配置，可以通过location条件匹配定位后进行权限禁止。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161149260.png" alt="image-20211203161149260"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>避免敏感配置硬编码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP项目中通常把数据库密码、加密用的salt、加密密钥、加密向量等保存在程序文件中，一旦代码投入生产环境中使用，除非对代码进行修改，否则再也不能改变密码了。所有拥有代码读取权限的人都能得到这个密码，如代码保存在GIT、SVN中，随时存在泄露的风险，密码硬编码会削弱系统安全性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>建议将配置密码保存在专业的密匙配置管理系统中的密钥管理服务（Key Management Serice，KMS）系统中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将系统中的密码进行加密处理，再将加密后的密码存入KMS，由于纯文本密钥不会被写入磁盘，KMS管理员无法从该服务中检索纯文本密钥。系统在使用时再从KMS系统中取出进行解密。同时可以使用多个KMS系统，将单个密码进行加密后，随机拆分成多个数据包，存储在不同的KMS系统中，确保每一个KMS没有完整的数据包，在使用时再将其拼装起来进行解密，在最大程度上保障密码安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161305822.png" alt="image-20211203161305822"></p>
</blockquote>
</blockquote>
<h3 id="◆-7-3-保障内容安全" tabindex="-1"><a class="header-anchor" href="#◆-7-3-保障内容安全" aria-hidden="true">#</a> ◆ 7.3 保障内容安全</h3>
<blockquote>
<blockquote>
<p>HTTP传输的数据都是未加密的，也就是明文，因此在传输过程中，随时可能被截获，客户端与服务器之间没有任何身份确认的过程，数据全部明文传输，所以很容易遭到攻击，因此使用HTTP传输隐私信息非常不安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>普通HTTP的传输，HTTP传输面临以下风险。</p>
<p>（1）窃听风险：攻击者可以获取所有通信内容。</p>
<p>（2）篡改风险：攻击者可以修改所有通信内容。</p>
<p>（3）冒充风险：攻击者以冒充他人身份参与通信</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161405809.png" alt="image-20211203161405809"></p>
<p>图7-2 HTTP被拦截</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止上述现象的发生，研发人员对传输的信息进行对称加密。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161456409.png" alt="image-20211203161456409"></p>
<p>图7-3 对称加密</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用对称加密，双方拥有相同的密钥，信息得到安全传输，但此种方式有以下缺点。</p>
<p>（1）不同的客户端、服务器数量庞大，所以双方都需要维护大量的密钥，维护成本很高。</p>
<p>（2）因每个客户端、服务器的安全级别不同，所以密钥极易泄露。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止对称加密中的密钥泄露</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用非对称加密客户端用公钥对请求内容加密，服务器使用私钥对内容解密，反之亦然。但这个过程也存在缺点，公钥是公开的（也就是攻击者也会有公钥），所以服务端私钥加密的信息，如果被恶意攻击者截获，攻击者可以使用公钥行解密，获取其中的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了兼顾性能和安全问题，人们将对称加密、非对称加密两者结合起来，发挥两者各自的优势。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161548165.png" alt="image-20211203161548165"></p>
<p>图7-5 混合加密</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>客户端使用公钥加密对称密钥，服务器收到信息后，用私钥解密，提取出对称加密算法和对称密钥后，后续两者之间信息的传输便可使用对称加密的方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但是还存在以下问题：</p>
<p>（1）客户端获得的公钥无法确定是真实的还是攻击者伪造的。</p>
<p>（2）无法确认服务器是真实的而不是攻击者的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161700692.png" alt="image-20211203161700692"></p>
<p>图7-6 加密传输被劫持</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了保证这些隐私数据能加密传输，Netscape（网景）公司设计了安全套接层（Secure SocketsLayer，SSL）协议用于对HTTP传输的数据进行加密，从而诞生了HTTPS。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HTTPS能够加密信息，可防止数据信息在传输过程中被第三方窃取、修改，确保数据的完整性，所以很多银行网站或电子邮箱等安全级别较高的服务采用了HTTPS。随着安全意识的提高，目前主流网站陆续在使用HTTPS。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203161836935.png" alt="image-20211203161836935"></p>
<p>图7-7 HTTPS请求过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）浏览器读取证书中的证书所有者、有效期等信息并进行一一校验。</p>
<p>（2）浏览器开始查找操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发。</p>
<p>（3）如果找不到，浏览器就会报错，说明服务器发来的证书是不可信任的。</p>
<p>（4）如果找到，浏览器就会从操作系统中取出颁发者CA的公钥，然后对服务器发来的证书里的签名进行解密。</p>
<p>（5）浏览器使用相同的散列算法计算出服务器发来的证书的散列值，将这个计算的散列值与证书中签名进行对比。</p>
<p>（6）如果对比结果一致，则证明服务器发来的证书合法，没有被冒充。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）此时浏览器就可以读取证书中的公钥，用于后续加密。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过发送SSL证书的形式，既解决了公钥获取问题，又解决了攻击者冒充问题，所以相比HTTP，HTTPS传输更加安全。</p>
<p>（1）所有信息都是加密传播的，攻击者无法窃听。</p>
<p>（2）具有校验机制，一旦被篡改，通信双方都会立刻发现。</p>
<p>（3）配备身份证书，防止身份被冒充。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>相比HTTP，HTTPS增加了很多握手、加密解密等流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_2-防止盗链" tabindex="-1"><a class="header-anchor" href="#_2-防止盗链" aria-hidden="true">#</a> （2）防止盗链</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>盗链是指网站拥有者自己不对资源进行存储，而是通过技术手段盗取其他网站服务商的内容资源直接在自己的网站上进行展示，骗取最终用户的浏览和点击。盗取的内容主要是图片、视频以及其他资源下载文件。网站盗链会大量消耗被盗链网站的带宽和系统资源，从而增加服务器的负担，损害企业的利益，同时给企业形象造成负面影响。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止服务器资源被盗取，通常可以检测访问源的Referer来进行过滤，如在Nginx中配置Referer检查，检查Referer是否是在指定的域名来源中，如www.ptpress.com.cn、ptpress.com.cn，防止jpg|gif|png|swf|flv|wma|wmv|mp3|zip|rar这些静态资源被第三方引用。如果没有通过检测，则直接返回“404资源无法找到”。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164204098.png" alt="image-20211203164204098"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果是使用Apache作为Web服务器，可以直接在.htaccess中进行配置，设置方式如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164224829.png" alt="image-20211203164224829"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果是一些动态资源，则可以使用PHP检查Referer白名单的方式以防止盗链。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164257962.png" alt="image-20211203164257962"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除判断Referer外，还有其他防止盗链的方式，如验证码、Token校验、Cookie验证、登录验证等</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_3-敏感词" tabindex="-1"><a class="header-anchor" href="#_3-敏感词" aria-hidden="true">#</a> （3）敏感词</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每一个系统都应该保证接收和传输到用户端的内容是合法健康的，所以需要建立有效的过滤或安全限制机制。其中，涉及“政治”“毒品”“色情”“武器”“暴力”“恐怖”“广告”“业务违规”等内容的，一定要进行过滤并禁止传输或接收，以防止被攻击者和不法分子用于广告宣传、言论攻击等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常的做法是建立敏感词词库，当用户提交内容后，对内容进行分词处理，将分词后的数据与敏感词库中的数据一一对比。一旦命中，就禁止用户提交。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图7-8展示了系统在检测到敏感词，拒绝用户提交数据的过程。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164346268.png" alt="image-20211203164346268"></p>
<p>图7-8 检测到敏感词</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只有检测后的内容不包括敏感词，才允许对用户的内容进行保存。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-4-防止越权和权限控制" tabindex="-1"><a class="header-anchor" href="#◆-7-4-防止越权和权限控制" aria-hidden="true">#</a> ◆ 7.4 防止越权和权限控制</h3>
<blockquote>
<blockquote>
<p>越权访问（Broken Access Control，BAC）分为垂直越权访问和水平越权访问</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164427621.png" alt="image-20211203164427621"></p>
<p>图7-10 越权图示</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>垂直越权是指不同用户级别之间的越权操作。如有两个用户角色分别是普通用户和管理员，普通用户拥有查看和购买产品的权限，管理员拥有发布商品和删除商品权限，由于没有做好角色之间的权限控制，导致普通用户可以对商品进行发布和删除，跨角色操作了不属于本角色的操作和数据访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>水平越权是指相同级别用户之间的越权操作。如处于同一级别的用户A和用户B，拥有相同的权限等级，他们能各自获取自己的私有数据（数据A和数据B），但如果系统只验证了能访问数据的角色，而没有对数据进行细分或者校验，导致用户A能访问到用户B的数据（数据B），那么用户A访问数据B的这种行为就叫作水平越权访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在功能页面或者接口中，如果身份认证或授权功能不完善，对数据库进行增、删、改、查的限制不严格，就很容易产生越权漏洞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用程序在功能对用户可见之前，应该验证功能级别的访问权限和数据级别的访问权限。并且需要在每个功能或数据被访问时在服务器端执行相同的访问控制检查。如果请求没有被验证或者验证失效，攻击者就能够伪造请求以在未经允许的情况下访问某些功能或数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>攻击者通过水平越权访问其他正常用户的信息，用户数据泄露给攻击者，间接地给用户和企业带来损失。垂直越权的危害比较大，直接允许攻击者访问未经授权的功能，轻者可查看未授权系统数据，重则可能导致整个系统被攻击者控制或者导致系统瘫痪。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常情况下，研发一个项目的功能时，流程是登录→提交请求→验证权限→数据查询→返回结果。如果“验证权限”环节存在缺陷，那么便会导致越权。例如，一种常见的存在越权的情形是研发人员安全意识不足，认为通过登录即可验证用户的身份，而对用户登录之后的操作不进行进一步的权限验证，进而导致越权问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．通过隐藏菜单实现访问控制仅通过隐藏菜单实现访问控制。例如，使用管理员身份登录后可以看到后台管理页面的菜单，但是以普通用户登录则看不到该菜单。在这种情况下，研发人员认为普通用户不知道或者很难猜到后台管理页面的URL，因此可以实现对管理功能的保护。这其实是一种错误观点，因为攻击者完全有可能通过其他方式（如HTML/js源码分析、暴力猜解URL、利用其他漏洞等）得到后台管理URL。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．敏感数据存储不当造成的越权有些研发人员缺乏安全意识，将用户信息，例如用户ID、电话、角色标示等，保存在Cookie或者URL中作为鉴别权限的依据，每次请求访问服务器从URL或Cookie中读取用户信息来判定用户是否登录，再从Cookie或URL中拿到相应的数据ID去数据库中查询详细数据。由于恶意攻击者可直接对Cookie或URL进行更改，误导业务程序，从而越权获取其他用户或者角色的数据，并且可以进行角色切换直接以受害用户的身份下达任何系统指令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．静态资源未进行访问限制用户访问动态页面时会执行相应的访问控制检查，以确定用户是否拥有执行相关操作所需的权限。但是，用户仍然会提交对静态资源的访问请求，如下载网站中的Word、Excel、PDF文档等。这些文档都是完全静态的资源，其内容直接由资源服务器返回，并不在项目服务器上运行。因此，静态资源自身并不能执行任何检查以确认用户的访问权限。如果这些静态资源没有得到有效的保护，则任何知晓URL命名规则的人都可以越权访问这些静态资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．数据归属未进行绑定校验</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当用户使用系统时，如果只进行了权限校验而未对数据归属进行校验，例如一个购物网站，只对登录进行了校验，用户使用账号登录系统，就可以查看自己的订单，未对订单的归属进行校验，攻击者随意注册账号，成功登录系统，可以通过遍历订单ID查看不属于自己的订单。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP项目研发尽量使用单入口模式，使用单入口可以使项目权限得到统一管理，在入口处对每个请求的URL进行权限控制，区分每个URL的访问权限。在读取数据时要确定当前用户是否有数据的使用权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RBAC（Role-Based Access Control），即基于角色的访问控制，支持公认的安全原则：最小特权原则、责任分离原则和数据抽象原则。将权限问题转换为who、what、how的问题，who、what、how构成了访问权限三元组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>··who：定义用户和角色。··what：定义可以访问的资源对象。··how：定义访问形式——增、删、改、查。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在遵循RBAC的基础上还不能很好地防止越权，还要对功能和数据进行访问鉴权，例如登录认证、接口访问鉴权、数据访问鉴权，鉴权的同时还要做好鉴权失败的频次限制。服务器接收请求，一定要明确这个请求来自哪个用户，请求访问哪个接口、哪些数据，对接口和数据有没有访问权限。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>禁止使用用户直接提交的参数进行数据查询返回敏感数据，例如使用OrderId查询订单详情、Phone、Uid查询用户信息等。应该使用身份鉴权信息与提交的参数鉴定关联性，如果属于用户的信息再进行返回。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-5-api接口访问安全" tabindex="-1"><a class="header-anchor" href="#◆-7-5-api接口访问安全" aria-hidden="true">#</a> ◆ 7.5 API接口访问安全</h3>
<blockquote>
<blockquote>
<p>由于HTTP是无状态的，因此正常情况下在浏览器浏览网页，服务器都是通过访问者的会话ID（SessionID）来辨别客户端的身份，当客户端与服务器交互的时候，服务端会拿自己的Session ID与客户端的进行对比，这样客户端再次访问服务器即可识别用户的身份。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但是对于API服务器，不能让访问者使用Session ID进行访问，这样既不安全，也不友好。由HTTP进行通信的数据大多是未经加密的明文，包括请求参数、返回值、Cookie、Header等数据，因此，外界通过对通信的监听，便可轻而易举根据请求和响应双方的格式，伪造请求与响应，修改和窃取各种信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有的认证信息一定要经过加密处理，禁止身份认证信息进行明文传输，避免被攻击者窃取。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果接口只是针对个别业务使用，建议添加IP白名单。通过IP白名单来限制访问源，可以有效避免外部恶意攻击者的请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般情况下需要客户端提供一个KEY和一个SECRET串（每个KEY与用户是一对一关联的）来识别请求者的身份，并且需要对每次请求进行认证，来判断发起请求的是不是就是该用户，以及请求信息是否被篡改。一般采用对请求信息（主要是URL和参数）进行摘要认证的方法来解决。由于摘要算法的不可逆性，因此这种方式能够在一定程度上防止信息被篡改，从而保障通信的安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用程序首先需要给使用API的用户分配KEY和SECRET。可以使用MD5或SHA算法生成摘要，然后按照表7-1所列的流程进行摘要加密和认证。</p>
<p>表7-1 摘要加密和认证流程</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203164736516.png" alt="image-20211203164736516"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于HTTP都是明文请求，虽然可以通过摘要进行一定的安全保证确保信息不被篡改，但是无法保证每次请求的唯一性，也就是如果请求数据被别人获取再次请求，此时也可能带来很严重的安全性问题。于是便需要用户在每次请求中设置一个递增的参数Nonce，来确保每次请求都是唯一的。不过这样也可能带来一个问题，就是如果用户近乎同时发起A和B两个请求，由于网络阻塞，可能后发起的B先到达服务器，这样当A达到的时候，服务器会认为A的Nonce已过期而拒绝。为了解决这样的问题，允许用户设置一个expire值来避免Nonce认证带来的问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="oauth认证" tabindex="-1"><a class="header-anchor" href="#oauth认证" aria-hidden="true">#</a> OAuth认证</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开放授权（Open Authorization，OAuth）是一个开放标准，为用户资源的授权提供了一个安全、开放而又简易的标准。不用将用户名和密码提供给第三方应用，就可以允许用户让第三方应用访问该用户在某一网站上存储的用户资源。OAuth的基本流程如图7-13所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170445396.png" alt="image-20211203170445396"></p>
<p>图7-13 OAuth基本流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户打开应用以后，应用要求用户给予授权。</p>
<p>（2）用户同意给予第三方应用授权。</p>
<p>（3）应用使用上一步获得的授权，向认证服务器申请令牌。</p>
<p>（4）认证服务器对第三方应用进行认证以后，确认无误，同意发放令牌。</p>
<p>（5）应用使用令牌，向资源服务器申请获取资源。</p>
<p>（6）资源服务器确认令牌无误，同意向应用开放资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在第二步中，用户给予应用进行授权。有了这个授权以后，应用就可以获取令牌，进而凭令牌获取资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用获取授权有4种模式，它必须得到用户的授权，才能获得令牌。在OAuth 2.0中定义了4种授权模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．授权码模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>授权码模式(Authorization Code)是功能最完整、流程最严密的授权模式之一。它的特点就是通过应用的后端服务器，与“服务提供商”的认证服务器进行互动。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170659898.png" alt="image-20211203170659898"></p>
<p>图7-14 授权码模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户访问应用。</p>
<p>（2）应用判断用户是否登录，如果未登录则将用户导向认证服务器。</p>
<p>（3）用户选择是否给予当前应用授权。如果用户给予授权，认证服务器则发放授权码。</p>
<p>（4）认证服务器将用户导向该应用事先指定的“重定向URL”，同时附上刚才的授权码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）应用收到授权码，使用授权码向认证服务器申请令牌。这一步是在应用的后端的服务器上完成的，对用户不可见。</p>
<p>（6）认证服务器核对授权码，确认无误后，向应用发送访问令牌（Access Token）或更新令牌（Refresh Token）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．隐式授权模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>隐式授权(Implicit Grant)模式也叫作client-side模式，该模式不通过第三方应用程序的服务器，主要用在没有或无法安全存储访问令牌的使用场景，适用于需要通过客户端访问的方式，例如需要通过浏览器的JavaScript代码，或者计算机/移动终端上的客户端访问时。隐式授权模式如图7-15所示。</p>
<p>（1）用户访问应用。</p>
<p>（2）应用将用户导向认证服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170757205.png" alt="image-20211203170757205"></p>
<p>图7-15 隐式授权模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）用户同意授权，认证服务器将用户导向应用指定的“重定向URL”，并在URL的Url_Hash部分包含了访问令牌，用户通过解析脚本对Url_Hash解析获取令牌。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．密码模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>密码模式（Resource Owner Password Credentials），即用户将令牌发到应用中，用户向应用提供自己的用户名和密码。应用使用这些信息，向“服务提供商”索要授权。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这种模式中，用户必须把自己的密码给应用，但是应用不得储存密码。这通常用在用户对应用高度信任的情况下，比如应用是操作系统的一部分，或者由一家著名企业出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式。密码模式如图7-16所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170820141.png" alt="image-20211203170820141"></p>
<p>图7-16 密码模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）用户向应用提供用户名和密码。（2）应用将用户名和密码发给认证服务器，向应用服务器请求令牌。（3）认证服务器确认无误后，向应用提供访问令牌。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．客户端应用模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>客户端应用模式（Client Credentials）是指应用程序以自己的名义，而不是以用户的名义，向“服务提供商”进行认证。在这种模式中，应用以自己的名义要求“服务提供商”提供服务，其实不存在授权问题。客户端应用模式如图7-17所示。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170846798.png" alt="image-20211203170846798"></p>
<p>图7-17 客户端应用模式</p>
<p>（1）应用向认证服务器进行身份认证，并要求一个访问令牌。</p>
<p>（2）认证服务器确认无误后，向应用提供访问令牌。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-6-防止接口重放" tabindex="-1"><a class="header-anchor" href="#◆-7-6-防止接口重放" aria-hidden="true">#</a> ◆ 7.6 防止接口重放</h3>
<blockquote>
<blockquote>
<p>在接口调用业务或生成业务数据环节中（如短信验证码、邮件验证码、订单生成、评论提交等），对其业务环节进行多次调用测试。如果业务经过调用后多次生成有效的业务或数据结果，则称为重放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>重放攻击（Replay Attacks）又称重播攻击、回放攻击，这种攻击会不断恶意或欺诈性地重复一个有效的API请求。攻击者利用网络监听或者其他方式盗取API请求，进行一定的处理后，再把它重新发给认证服务器。这是攻击者常用的攻击方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>使用时间戳</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每次HTTP请求，将当前的时间戳保存在timestamp参数中，然后把时间戳和其他参数一起进行数字签名，发送到服务端。因为一次正常的HTTP请求，从发出到达服务器一般不会超过60秒，所以服务器收到HTTP请求之后，首先判断时间戳参数与当前时间相差是否超过了60秒，如果超过则认为是非法的请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170929608.png" alt="image-20211203170929608"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面代码中展示的是对时间戳的验证。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203170944375.png" alt="image-20211203170944375"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般情况下，攻击者抓包重放请求耗时远远超过60秒，所以此时请求中的timestamp参数已经失效。由于攻击者不知道Token，没有办法生成新的数字签名，如果攻击者修改timestamp参数为当前的时间戳，则sign参数对应的数字签名就会失效。如果在60秒之内进行重放攻击，那就没办法了，所以这种方式不能保证请求仅一次有效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>使用Nonce</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nonce是Number once的缩写，在密码学中Nonce是一个只被使用一次的任意或非重复的随机数值。生成一个仅一次有效的随机字符串，要求每次请求时，该参数要保证唯一。例如可以使用客户端的IP地址，加上时间戳作为Nonce进行签名。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用签名的代码如下：</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203171101577.png" alt="image-20211203171101577"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将每次请求的Nonce参数存储到一个“集合”中，如可以存储在Redis的集合中。每次处理HTTP请求时，首先判断该请求的Nonce参数是否在该“集合”中，如果存在则认为是非法请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>验证签名的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203171121580.png" alt="image-20211203171121580"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nonce参数在首次请求时，已经被存储到“集合”中，再次发送请求会被识别并被拒绝。Nonce参数作为数字签名的一部分，是无法篡改的，因为攻击者不清楚Token，所以不能生成新的sign。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种方式也有很大的问题，那就是存储Nonce参数的“集合”会越来越大，验证Nonce是否存在于“集合”的耗时就会越来越长。为了不让Nonce“集合”走向“无限大”，需要定期清理该“集合”，但是一旦该“集合”被清理，就无法验证被清理了的Nonce参数。也就是说，假设该“集合”平均一天清理一次，抓取到的该URL，虽然当时无法进行重放攻击，但是还是可以每隔一天进行一次重放攻击的。而且存储24小时内，所有请求的Nonce参数，也将会是一笔不小的开销。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>同时使用时间戳和Nonce</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常同时使用时间戳和Nonce来防止重放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nonce的一次性可以解决timestamp参数60秒的问题，时间戳可以解决Nonce参数“集合”越来越大的问题。在时间戳方案的基础上，加上Nonce参数，是因为timstamp参数对于超过60秒的请求都认为非法请求，所以只需要存储60秒的Nonce参数的“集合”即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>同时使用时间戳和签名的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203171150119.png" alt="image-20211203171150119"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>验证参数防止重放的代码如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203171205928.png" alt="image-20211203171205928"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果在60秒内重放该HTTP请求，因为Nonce参数已经在首次请求时被记录在服务器的Nonce“集合”中，所以会被判断为非法请求。超过60秒之后，timestamp参数就会失效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在60秒之内的重放攻击可以由Nonce参数保证，超过60秒的重放攻击可以由timestamp参数保证。Nonce参数只会在60秒之内起作用，所以只需要保存60秒之内的Nonce参数即可。并不一定要每个60秒去清理该Nonce参数的集合，只需要在新的Nonce到来时，判断Nonce集合最后一次修改时间，超过60秒，就清空该集合，存放新的Nonce参数集合。其实Nonce参数集合可以存放得时间更久一些，但是最少是60秒。</p>
</blockquote>
</blockquote>
<h2 id="◆-第8章" tabindex="-1"><a class="header-anchor" href="#◆-第8章" aria-hidden="true">#</a> ◆ 第8章</h2>
<h3 id="◆-8-1-短信安全" tabindex="-1"><a class="header-anchor" href="#◆-8-1-短信安全" aria-hidden="true">#</a> ◆ 8.1 短信安全</h3>
<blockquote>
<blockquote>
<p>短信的安全隐患</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）未对短信发送次数进行限制造成短信轰炸。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）短信验证码在多次尝试失败后未进行失效处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过短信进行登录、密码重置后，如果没有对短信验证码进行失效处理而被攻击者利用，会大大提高系统被暴力破解的概率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）短信验证码有效期过长。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果短信验证码的有效期过长，如在一分钟之后未进行失效处理，可能会导致其他人看到用户的验证码后冒用——更改密码或注册登录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）服务端对验证码的校验只校验有效性，未校验其与手机号的对应关系。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果没有严格校验对应关系，就会造成任意登录、注册、密码找回等一系列的安全问题，系统的鉴权机制会变得形同虚设。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）短信验证码过短，很容易进行枚举。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过短信验证码进行登录、密码重置，如短信验证码只有4位、一分钟有效期、每个验证码尝试3次失效，攻击者会通过一万个有效的手机号，轮询获取验证码，并且对每个手机号的验证码进行3次猜测，由于4位验证码每一次猜对的概率是万分之一，但是使用大量手机号即可猜到多个用户验证码，从而登录其他人的账号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）在发送短信验证码之前没有进行人机识别。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>没有进行人机识别会导致恶意攻击者可随意调用短信发送接口，对手机号码进行遍历随意发送短信，从而对用户产生短信骚扰，导致短信资源被消耗，给企业造成经济损失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）短信内容用户可控。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果发送的短信内容包含用户可控内容，即用户可以随意更改短信内容，或者在短信内容中可插入自定义内容，会导致被攻击者利用而随意定义短信内容，并用于发送广告和非法言论，会给企业造成不可估量的损失，如企业形象和名誉损失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>短信安全策略</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）在短信发送前必须进行人机识别，例如增加图形验证码校验，这样可以有效地增加攻击者通过直接调用接口进行发送短信的成本。（2）将针对来源IP和手机号频率限制，单个IP针对大量手机号调用进行次数限制，防止攻击者使用同一个IP进行批量发送，这样可以增加攻击者的接口调用成本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）单个手机号在一定时间段内进行次数限制，降低手机号被破解的可能性，尽可能地增加攻击者的时间成本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）将手机验证码设置得尽量长和尽量复杂，如尽量使用6～9位英文和数字混合的验证码，不使用4位数字短信验证码，以降低被破解成功的概率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）手机和验证码对应关系存放在redis或数据库中，每个验证码尝试三次或一次失败后从redis或数据库中删除，以降低被撞库成功的可能性。</p>
<p>（6）验证码有效期为60秒，在同一时间段内生效的验证码有且只有一个，增加攻击者的猜测成本，以降低破解成功的概率。（7）防止短信内容被用户控制，避免被攻击者利用，避免给企业造成损失。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-2-敏感信息泄露" tabindex="-1"><a class="header-anchor" href="#◆-8-2-敏感信息泄露" aria-hidden="true">#</a> ◆ 8.2 敏感信息泄露</h3>
<blockquote>
<blockquote>
<p>如果在需要身份验证的Web上都没有使用SSL加密，攻击者只需监控网络数据流（比如一个开放的无线网络），并窃取一个已通过验证的用户会话Cookie，然后利用这个Cookie执行重放攻击并接管用户的会话，就可访问用户的隐私数据。为了防止重放攻击，可以在验证时加个随机数，以保证验证单次有效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>资源遍历泄露是指，在接口传入的参数中存在资源ID类参数，ID为递增整数且权限控制不当将导致资源被遍历。为了防止这种情况，例如用户上传的文件ID、用户ID、企业ID、商品ID、订单ID等，尽量不使用连续的ID序号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132413419.png" alt="image-20211203132413419"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>物理路径泄露</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当攻击者通过接口输入非法数据时，导致服务器端应用程序出现错误，并返回网站物理路径。攻击者利用此信息，可通过本地文件包含漏洞直接得到webshell。系统上线后应当关闭PHP的错误输出，防止调试信息泄露，或者当应用程序出错时，统一返回一个错误页面或直接跳转至首页。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132453451.png" alt="image-20211203132453451"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP程序代码中关闭错误显示如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132509591.png" alt="image-20211203132509591"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序使用版本泄露</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP关闭版本号显示如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132523638.png" alt="image-20211203132523638"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Nginx关闭版本号显示如下。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132533288.png" alt="image-20211203132533288"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>JSON劫持导致用户信息泄露：</p>
<p>​		QQ Mail曾经曝出相关漏洞，比如通过构造URL让用户访问，可以获得QQ Mail的邮件列表。该漏洞由于需要在Web QQ里共享QQ Mail里的邮件信息，因此QQ Mail开放了一个JSON接口以提供第三方的域名来获得QQ Mail的信息，但是由于该接口缺乏足够的认证，因此导致任何第三方域名都可以用Script的方式来获取该邮件列表。尽量避免跨域的数据传输，对于同域的数据传输使用XMLHttp的方式作为数据获取方式，通过JavaScript在浏览器域里的安全性保护数据。如果是跨域的数据传输，必须对敏感的数据获取进行权限认证，例如对referer的来源进行限制、加入Token等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要定期在Web能访问到的目录下警惕以下几类文件的出现，如出现，应及时删除，以防范源码泄露。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132647964.png" alt="image-20211203132647964"></p>
</blockquote>
</blockquote>
<h3 id="◆-8-3-人机识别策略" tabindex="-1"><a class="header-anchor" href="#◆-8-3-人机识别策略" aria-hidden="true">#</a> ◆ 8.3 人机识别策略</h3>
<blockquote>
<blockquote>
<p>除了常见的图片、短信、语音验证码外，根据自己业务情况还可以选择其他方式的人机验证，如图片滑块拖拽验证、文字按顺序选择在图片上点击、好友确认等。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-4-常见业务流程安全" tabindex="-1"><a class="header-anchor" href="#◆-8-4-常见业务流程安全" aria-hidden="true">#</a> ◆ 8.4 常见业务流程安全</h3>
<blockquote>
<blockquote>
<h4 id="_1-注册安全" tabindex="-1"><a class="header-anchor" href="#_1-注册安全" aria-hidden="true">#</a> 1.注册安全</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）恶意注册。恶意批量注册容易造成垃圾数据，给系统带来压力，增加维护成本。</p>
<p>（2）恶意遍历。注册时一般服务端会提供检测用户名、手机号是否被使用的请求接口，这容易被攻击者利用来遍历手机号和用户名。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>注册流程的安全解决方案如下。</strong></p>
<p>（1）注册功能增加人机认证，如图片验证码，防止恶意批量注册。</p>
<p>（2）记录IP的请求次数，控制单位时间内IP的请求次数，防止恶意遍历注册用户。</p>
<p>（3）用户名要经过敏感词过滤，防止出现非法内容。</p>
<p>（4）不要提供独立的用户名检测接口，防止被恶意利用，如果必须提供，同样需要进行人机验证。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）信息泄露。登录错误提示信息太明确导致账号、密码被枚举攻击，比如“用户名不存在”“密码错误”“手机号不存在”这样的提示可以给攻击者提供很好的线索。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）密码爆破。登录次数未进行频率限制，没有图片验证码导致账号、密码被枚举攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）验证码绕过。进行了IP限制但攻击者利用代理池绕过，加了图片验证码但验证码太容易识别，攻击者利用打码平台绕过。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>安全登录解决方案包括以下方面。</strong></p>
<p>（1）手机号验证码登录，可参考验证码安全方案。</p>
<p>（2）登录错误提示建议使用“用户名或密码错误”。</p>
<p>（3）登录进行密码尝试频率限制，每个账号每天可登录失败三次。</p>
<p>（4）增加人机验证，如图片验证码，可参考验证码安全方案。</p>
<p>（5）强行要求密码复杂度，如必须为特殊符号、英文大小写、数字等组合。</p>
<p>（6）“记住我”功能可通过将Token过期时间延长来实现，在校验Token同时校验浏览器登录环境是否已经改变。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_2-密码找回安全" tabindex="-1"><a class="header-anchor" href="#_2-密码找回安全" aria-hidden="true">#</a> <strong>2.密码找回安全</strong></h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>在找回密码流程中要注意以下几点安全问题。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）验证码使用不当。手机验证码重置密码的主要问题为验证码使用不当，可参考验证码安全方案。</p>
<p>（2）密码恶意重置。邮箱链接里的Token未使用复杂的随机数，而是使用了用户名、固定散列值等可预测字符串，导致攻击者重置其他用户密码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203132954872.png" alt="image-20211203132954872"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>重置密码操作，服务端仅验证了邮箱链接里Token的有效性，未验证和被重置账号的对应关系，导致攻击者重置其他用户密码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>邮箱链接重置密码方案：</p>
<p>①申请重置接口，让用户提交重置的用户名。</p>
<p>②服务端根据用户名查找到对应的邮箱。</p>
<p>③生成重置密码链接，链接里的Token使用复杂随机数，比如UUID，并保存Token与用户名的对应关系。</p>
<p>④将重置密码链接发送到对应的用户名的邮箱。</p>
<p>⑤用户点开邮箱中的链接，跳到设置密码页面，填好密码提交设置请求，请求将URL中的Token、密码一起提交到服务端。</p>
<p>⑥服务端根据Token找到用户名并为其设置密码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_3-修改密码安全" tabindex="-1"><a class="header-anchor" href="#_3-修改密码安全" aria-hidden="true">#</a> 3.修改密码安全</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常的密码修改流程为用户登录、输入旧密码和新密码、校验旧密码、校验新密码、系统保存新密码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>密码修改中容易出现的安全问题有以下几点：</p>
<p>（1）未校验旧密码。修改密码时没有对旧密码进行验证，导致攻击者利用CSRF等漏洞恶意修改他人密码。</p>
<p>（2）弱密码。允许修改为弱密码，比如123456、admin、mysql等，很容易被攻击者猜解。</p>
<p>（3）未登录修改：如果允许用户在未登录的情况下修改密码，则使用账号和旧密码验证功能很容易对他人密码进行爆</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>修改密码的通用安全方案如下。</p>
<p>（1）修改密码请求填写旧密码，服务端接口验证旧密码通过后为其设置新密码。</p>
<p>（2）修改密码接口必须登录才能访问，此接口不从客户端获取被修改的账号，而是利用Session或Token获取当前账号，防止利用账号+旧密码对他人密码进行爆破。</p>
<p>（3）校验密码的复杂度，如必须为英文大小写+数字+特殊字符，且不少于8位。</p>
<p>（4）为了防止暴力修改，应该使用人机认证，可参考验证码安全方案。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<h4 id="_4-支付安全" tabindex="-1"><a class="header-anchor" href="#_4-支付安全" aria-hidden="true">#</a> 4.支付安全</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常的支付流程是商品下单、用户确认订单信息、用户支付、支付成功、系统确认支付信息、订单支付成功</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果在商品下单或者确认订单过程中，对于正负数没有严格验证，则可以通过数量输入负数或者修改价格实现低价购买或者刷钱。如果在支付成功后，没有对前面下单、订单信息、支付进行严格验证，则可以跳过前面步骤，直接进入支付，然后成功支付。支付成功后未对支付的金额与购买的订单信息进行再次确认，很容易造成用非规定价格购买大量商品。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>订单支付安全要注意以下几个方面。</p>
<p>（1）支付过程中数据包中的支付金额被篡改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种漏洞是支付漏洞中比较常见的。研发人员为了方便，在支付的关键步骤数据包中直接传递需要支付的金额，而这种金额后端没有进行校验，传递过程中也没有进行签名，导致可以随意篡改金额并提交。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）没有对购买数量进行限制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>产生的原因是研发人员没有对购买的数量参数进行严格限制。这种同样是数量的参数没有进行签名，导致可随意修改，经典的修改方式就是改成负数。当购买的数量是一个负数时，总额的算法仍然是“购买数量×单价=总价”。所以这样就会导致有一个负数的需支付金额。若支付成功，则可能导致购买到了一个负数数量的产品，并有可能返还相应的积分/金币到你的账户上。也有将数量改成一个超大的数或者负数，可能导致商品数量或者支付的金额超过一定数值而归零。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）订单请求重放。未对订单唯一性进行验证，导致购买商品成功后，重放其中请求，可以使购买商品一直增加。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）其他参数干扰。对商品价格、数量等以外的其他会影响最终金额的参数，例如运费、优惠卡，如果缺乏验证将可能导致最终金额被控制。</p>
</blockquote>
</blockquote>
<h2 id="◆-第9章" tabindex="-1"><a class="header-anchor" href="#◆-第9章" aria-hidden="true">#</a> ◆ 第9章</h2>
<h3 id="◆-9-1-应用指纹安全" tabindex="-1"><a class="header-anchor" href="#◆-9-1-应用指纹安全" aria-hidden="true">#</a> ◆ 9.1 应用指纹安全</h3>
<blockquote>
<blockquote>
<p>系统指纹通常是指一些开源软件的特定识别方式，一般存在于服务端返回的报文数据中，如HTTP-Header、HTTP-Response，通过对返回内容进行分析，如路径、文件的识别，可以确定所用的系统类型，从而利用开源系统中已经存在的漏洞进行攻击。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过上面的HTTP响应信息，可以看到其中包含有Server：Apache/2.4.7(Ubuntu)，得知Web服务器用的是Apache，并且可以得到Apache的版本号是2.4.7，且是在Ubuntu操作系统下。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-2-服务器端口安全" tabindex="-1"><a class="header-anchor" href="#◆-9-2-服务器端口安全" aria-hidden="true">#</a> ◆ 9.2 服务器端口安全</h3>
<blockquote>
<blockquote>
<p>服务器的安全设置环节中，必不可少的操作环节是要屏蔽一些危险端口，如在CentOS中可以通过iptables将其禁用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>·445端口是一个毁誉参半的端口，有了它，研发人员可以在局域网中轻松访问各种共享文件夹或共享打印机，但也正是因为有了它，攻击者才有了可乘之机，他们能通过该端口偷偷共享你的硬盘，甚至会在悄无声息中将你的硬盘格式化掉！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>·勒索病毒通过共享端口进行传播，如果没有特殊需要建议及时关闭445、135、137、138、139端口，关闭网络共享。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-3-apache的使用安全" tabindex="-1"><a class="header-anchor" href="#◆-9-3-apache的使用安全" aria-hidden="true">#</a> ◆ 9.3 Apache的使用安全</h3>
<blockquote>
<blockquote>
<p>最小化原则是项目安全中最基本的原则之一，限制使用者对系统及数据进行存取所需要的最小权限</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在刚刚安装完Apache后，Apache服务通常是由root账户来运行的。如果Apache进程具有root用户特权，那么它将给系统的安全构成很大的威胁，应确保Apache进程以尽可能低的权限用户来运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常使用nobody来运行Apache服务。nobody是一个普通账户，拥有很低的系统权限，同时这个用户是无法直接登录系统的，攻击者很难通过漏洞连接到你的服务器。因此nobody账户拥有比较高的安全性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>防止越权使用造成非法攻击，通过修改httpd.conf文件中的User选项，以nobody用户运行Apache达到相对安全的目的。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-4-nginx的使用安全" tabindex="-1"><a class="header-anchor" href="#◆-9-4-nginx的使用安全" aria-hidden="true">#</a> ◆ 9.4 Nginx的使用安全</h3>
<blockquote>
<blockquote>
<p>严禁使用root账户运行Nginx（首字母大写代表软件，首字母小写代表指令），应该使用nginx用户或者nobody运行Nginx。在Nginx配置中使用user来指定Nginx worker进程运行用户以及用户组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122118789.png" alt="image-20211203122118789"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置文件禁止放在Web目录中，因为一旦攻击者对Web目录拥有读写权限后即可更改nginx.conf。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在线上服务器中一定要将Nginx访问日志启用，日志不允许存放在Web目录下，并且设置日志操作权限为root。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用log_format配置命令来配置Nginx日志格式。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122149295.png" alt="image-20211203122149295"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>凡允许“上传或写入”目录的权限，执行权限必须设置成禁止访问。在Nginx中使用deny all指令来实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>禁止对目录访问并返回403 Forbidden，可以使用下面的配置。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122205063.png" alt="image-20211203122205063"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了防止Nginx的版本号指纹暴露，线上服务器要对Nginx的信息进行隐藏，通常可以通过修改配置文件来实现。进入Nginx配置文件的目录，如/etc/nginx.conf,在http标签里加上server_tokens off。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122225769.png" alt="image-20211203122225769"></p>
</blockquote>
</blockquote>
<h3 id="◆-9-5-mysql的使用安全" tabindex="-1"><a class="header-anchor" href="#◆-9-5-mysql的使用安全" aria-hidden="true">#</a> ◆ 9.5 MySQL的使用安全</h3>
<blockquote>
<blockquote>
<p>为了防止攻击者通过MySQL漏洞越权获取更高的权限，不要使用系统root用户运行MySQL服务器。mysqld默认拒绝使用root运行，如果对mysqld服务需要指定用户进行运行，应该使用普通非特权用户运行mysqld，同时为数据库建立独立的Linux中的MySQL账户，该账户只用于管理和运行MySQL。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认安装的MySQL的root用户密码是空密码，为了安全起见，必须修改为强密码，即至少8位，由字母、数字和符号组成的不规律密码。使用MySQL自带的mysqladmin命令修改root密码。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122545207.png" alt="image-20211203122545207"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>同时可以使用下面的命令登录数据库对密码进行修改。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122555279.png" alt="image-20211203122555279"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>系统MySQL的默认管理员名称是root，而一般情况下，数据库管理员都没有进行修改，这在一定程度上为系统用户密码暴力破解的恶意攻击行为提供了便利，应该修改为复杂的用户名，加强账号的安全，同时不要使用admin或者administrator，因为它们也在易猜解的用户字典中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要正确地给用户分配权限，不要将全部权限分配给普通用户，有选择性地分配读写权限，如只分配查询权限给用户。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不要将with grant option授权给普通用户，防止普通用户将权限授予他人，造成管理混乱。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果是单机运行MySQL，推荐开启skip-networking，可以彻底关闭MySQL的TCP/IP连接方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122706103.png" alt="image-20211203122706103"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果是固定IP访问MySQL，可以在配置文件中增加bind-address=IP，前提是关闭skip-networking。</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122722876.png" alt="image-20211203122722876"></p>
</blockquote>
</blockquote>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203122827889.png" alt="image-20211203122827889"></p>
<h3 id="◆-9-6-redis的使用安全" tabindex="-1"><a class="header-anchor" href="#◆-9-6-redis的使用安全" aria-hidden="true">#</a> ◆ 9.6 Redis的使用安全</h3>
<blockquote>
<blockquote>
<p>避免使用管理员账号启动服务，尽可能用nobody或Redis用户来启动Redis，并设置禁止登录。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>作为服务端的redis-server，常常需要禁用以上命令来使服务器更加安全，如config、flushall、flushdb等操作都是很关键的，不小心就会导致数据库不可用。可以通过配置文件在SECURITY这一项中，通过rename-command重命名或禁用这些命令。</p>
<p>密码安全</p>
<p>登录访问限制</p>
<p>运行安全</p>
</blockquote>
</blockquote>
<h2 id="◆-第10章" tabindex="-1"><a class="header-anchor" href="#◆-第10章" aria-hidden="true">#</a> ◆ 第10章</h2>
<h3 id="◆-10-3-建立合理的安全体系" tabindex="-1"><a class="header-anchor" href="#◆-10-3-建立合理的安全体系" aria-hidden="true">#</a> ◆ 10.3 建立合理的安全体系</h3>
<blockquote>
<blockquote>
<p>进行安全测试进行专门的安全测试，如进行白盒安全扫描、黑盒安全扫描。在上线前有必要进行专业的安全渗透，将安全风险降至最低。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>线上安全项目交付上线后，应该对日志进行实时监控，对访问日志进行分析，发现暗藏的风险。同时应该周期性地进行漏洞扫描，如弱口令扫描、系统服务扫描、Web漏洞扫描等，这样可以在被攻击者发现可利用的漏洞之前进行修复，将可能带来的损害减至最低。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-4-安全应急响应" tabindex="-1"><a class="header-anchor" href="#◆-10-4-安全应急响应" aria-hidden="true">#</a> ◆ 10.4 安全应急响应</h3>
<blockquote>
<blockquote>
<p>没有绝对的安全，攻防的不对等，外部恶意攻击者或白帽子总能发现安全盲点。有资金能力的企业可积极建立沟通渠道，建立自己的应急响应中心（Security Response Center，SRC），通过给白帽子发放丰厚的奖励，如奖金、礼物等，将企业的漏洞信息收集上来，借助白帽子的力量，将漏洞的影响范围缩减至最小。中小企业在没有SRC机制的情况下，可以借助第三方SRC来帮助自己发现安全问题，例如国内知名的第三方SRC补天平台。</p>
</blockquote>
</blockquote>
<h2 id="◆-附录" tabindex="-1"><a class="header-anchor" href="#◆-附录" aria-hidden="true">#</a> ◆ 附录</h2>
<blockquote>
<blockquote>
<p>附录1 PHP各版本漏洞</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>公共漏洞和暴露(Common Vulnerabilities and Exposures)简称CVE[插图]，CVE就像是一个全球漏洞字典，为公开披露的网络安全漏洞和风险提供唯一定义</p>
</blockquote>
</blockquote>
<h2 id="◆-附录2-常见php开源系统指纹" tabindex="-1"><a class="header-anchor" href="#◆-附录2-常见php开源系统指纹" aria-hidden="true">#</a> ◆ 附录2 常见PHP开源系统指纹</h2>
<blockquote>
<blockquote>
<p>附录2 常见PHP开源系统指纹</p>
<p><img src="@source/docs/theme-reco/img/6.PHP安全之道：项目安全的架构、技术与实践/image-20211203121422937.png" alt="image-20211203121422937"></p>
</blockquote>
</blockquote>
</div></template>



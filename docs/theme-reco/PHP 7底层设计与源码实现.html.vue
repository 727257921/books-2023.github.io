<template><div><h1 id="php-7底层设计与源码实现" tabindex="-1"><a class="header-anchor" href="#php-7底层设计与源码实现" aria-hidden="true">#</a> PHP 7底层设计与源码实现</h1>
<p>陈雷等</p>
<h2 id="◆-前言-preface" tabindex="-1"><a class="header-anchor" href="#◆-前言-preface" aria-hidden="true">#</a> ◆ 前言 Preface</h2>
<blockquote>
<blockquote>
<p>于是我建立了一个学习圈，发给团队的同事们，他们可以自愿参加，学习的时间是每天早上8:50～10:30，正好不影响工作，但是早晨要提前100分钟来公司，学习的内容是研读工作中使用的LNMP源码，首先学习和研究的就是PHP 7的源码。出乎意料，团队几乎所有的同事都参加了这个学习圈，包括实习生。而这个学习圈一直坚持到现在，真是风雨无阻，大家已经习惯了按时一起讨论、研究，遇到问题时大家各自查找相关资料，顿悟难题时大家欣喜若狂。最令我欣喜的是，学习圈的同事们的快速成长，后来我们这个学习圈加入了滴滴公司的学习圈，得到了更多的资源支持。在学习过程中，我们每天都会记录日志，时间久了，发现得到了一个丰富的知识库，于是大家提议，写一本书，这样我们决定写一本PHP 7源码学习和研究的书，希望我们整理的资料能够帮助有意愿研究PHP 7源码的读者。</p>
</blockquote>
</blockquote>
<p>◆ 1.1 PHP简史与新特性</p>
<blockquote>
<blockquote>
<p>PHP 7除了在性能方面有极大提升外，还添加了很多新的特性，如太空船操作符、标量类型声明、返回值的类型声明、全局的throwable接口、抽象语法树等</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）太空船操作符太空船操作符用于比较两个表达式。例如，当$a小于、等于或大于$b时，它分别返回-1、0或1。比较的原则沿用PHP的常规比较规则进行。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo 1 &lt;=> 1; //0
echo 1 &lt;=> 2; //-1
echo 2 &lt;=> 1; //1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/theme-reco/img/common/image-20211020102032100.png" alt="image-20211020102032100" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）标量类型声明和返回值的类型声明PHP 7可以对下面几种类型的参数做声明：字符串（string）、整型（int）、浮点型（float）以及布尔型（bool）。注意参数类型声明不受制于默认模式和严格模式。默认模式下，当传入的参数不符合声明类型时，会首先尝试转换类型；而严格模式下，则直接报错。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020102114791.png" alt="image-20211020102114791" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7.1对函数返回值的声明做了扩充，可以定义其返回值为void，无论是否开启严格模式，只要函数中有“return; ”以外的其他return语句都会报错。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意：参数类型不可以是void。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7.1.0对参数类型和返回值类型还有进一步的支持，其类型可以是可空类型，在参数或返回值类型声明前边加上“? ”，表示返回值要么是null，要么是声明的类型：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）null合并操作符</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7提供了一个新的语法糖“? ? ”，如果变量存在且值不为null，它会返回自身的值，否则返回它的第二个操作数。可以这样改写代码：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020102349335.png" alt="image-20211020102349335" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当代码中有连续的三元运算符的时候还可以像下边这样写：</p>
<p>​									<img src="@source/docs/theme-reco/img/common/image-20211020102425175.png" alt="image-20211020102425175" style="zoom:50%;" /></p>
<p>（4）常量数组</p>
<p>在PHP 7之前是无法通过define来定义一个数组常量的，PHP 7支持了这个操作：</p>
<p>​									<img src="@source/docs/theme-reco/img/common/image-20211020102509842.png" alt="image-20211020102509842" style="zoom:50%;" /></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）namespace批量导入</p>
<img src="@source/docs/theme-reco/img/common/image-20211020102557919.png" alt="image-20211020102557919" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）throwable接口</p>
<p>​			在PHP 7之前，如果代码中有语法错误，或者fatal error时，程序会直接报错退出，但是在PHP 7中有了改变。PHP 7实现了全局throwable接口，原来的Exception和部分Error实现了该接口。这种Error可以像Exception一样被第一个匹配的try / catch块捕获。如果没有匹配的catch块，则调用异常处理函数进行处理。如果尚未注册异常处理函数，则按照传统方式处理（fatal error）。Error类并非继承自Exception类，所以不能用catch (Exception $e) { ... } 来捕获Error。可以用catch (Error $e) { ... }，或者通过注册异常处理函数（set_exception_handler()）来捕获Error：</p>
<p>​							<img src="@source/docs/theme-reco/img/common/image-20211020102826867.png" alt="image-20211020102826867" style="zoom:50%;" /></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）Closure::call()</p>
<p>​				在PHP 7之前，我们需要动态地给一个对象添加方法时，可以通过Closure来复制一个闭包对象，并绑定到一个$this对象和类作用域：</p>
<p>​							<img src="@source/docs/theme-reco/img/common/image-20211020102942978.png" alt="image-20211020102942978" style="zoom:50%;" /></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​				在PHP 7中新添加了Closure::call()，可以通过call来暂时绑定一个闭包对象到$this对象并调用它：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020103012011.png" alt="image-20211020103012011" style="zoom:50%;" />  		
<p>（8）intdiv函数</p>
<p>PHP 7还增加了一个新的整除函数，在代码中不需要再手动转了：下面结果都是3</p>
<img src="@source/docs/theme-reco/img/common/image-20211020103059340.png" alt="image-20211020103059340" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（9）list的方括号写法</p>
<img src="@source/docs/theme-reco/img/common/image-20211020103242714.png" alt="image-20211020103242714" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote></blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP7还有很多其他的改变和特性。例如，foreach遍历数组时不再修改内部指针、移除了ASP和script PHP标签、移除了$HTTP_RAW_POST_DATA、匿名类、类常量可见性等</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-php-7安装和调试" tabindex="-1"><a class="header-anchor" href="#◆-1-2-php-7安装和调试" aria-hidden="true">#</a> ◆ 1.2 PHP 7安装和调试</h3>
<blockquote>
<blockquote>
<img src="@source/docs/theme-reco/img/common/image-20211020103347192.png" alt="image-20211020103347192" style="zoom:50%;" />
<p>​		<img src="@source/docs/theme-reco/img/common/image-20211020103454774.png" alt="image-20211020103454774" style="zoom:50%;" /></p>
<p>默认情况下，make install命令会把执行文件和库文件安装到/usr/local/bin和/usr/local/lib目录。为了后续研究方便，我们使用--prefix将PHP 7安装到当前目录的output目录下，同时安装php-fpm。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>php是CLI模式下的PHP脚本执行程序。PEAR（PHP Extension and Application Repository, PHP扩展与应用库），是PHP官方开源类库，可以使用pear list列出所有已经安装的包。通过pear install可以安装需要的包。PECL是PHP的扩展库，可以通过PEAR的Package Manager的管理方式来下载和安装扩展代码。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020103808639.png" alt="image-20211020103808639" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>php-config是输出PHP编译信息的辅助命令。phpdbg是一个轻量级，具有丰富功能的调试平台。PHP 5.4以上版本支持，比如可以使用它查看opcode：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020103832806.png" alt="image-20211020103832806" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>phpize命令用来动态安装扩展，如果在安装PHP时没有安装某个扩展，可以通过这个命令随时安装。</p>
</blockquote>
</blockquote>
<h4 id="◆-1-2-2-使用gdb调试php-7" tabindex="-1"><a class="header-anchor" href="#◆-1-2-2-使用gdb调试php-7" aria-hidden="true">#</a> ◆ 1.2.2 使用GDB调试PHP 7</h4>
<blockquote>
<blockquote>
<p>GDB是一个由GNU开源组织发布的、UNIX/Linux操作系统下的、基于命令行的、功能强大的程序调试工具。当程序发生coredump，通过GDB可以从core文件中复现场景，定位问题。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020104120209.png" alt="image-20211020104120209" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="@source/docs/theme-reco/img/common/image-20211020104224021.png" alt="image-20211020104224021" style="zoom:50%;" />
<img src="@source/docs/theme-reco/img/common/image-20211020104244788.png" alt="image-20211020104244788" style="zoom:50%;" />
<img src="@source/docs/theme-reco/img/common/image-20211020104328588.png" alt="image-20211020104328588" style="zoom:50%;" />
<p>这段配置设定php-fpm的运行模式为static，其最大进程数为1、启动进程数为1、最大和最小的空余进程数为1。为什么要这么设定呢？这是为了保证GDB调试的进程一定是我们当前访问的进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>完成Nginx和php-fpm的配置以后，重启这两个服务，可以看到www.local的项目只有一个进程，其pid为4459（后文还会用到该pid）：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在学习和研究PHP 7的过程中，经常需要查看opcodes，除了上文提到的phpdbg可以查看，另外还有一个vld扩展也非常好用，下面介绍下vld扩展。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP代码的执行实际上是在执行代码解析后的各种opcode。通过vld扩展可以很方便地看到执行过程中的opcode。扩展可以从https://github.com/derickr/vld下载安装，下面是安装示例：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020104516082.png" alt="image-20211020104516082" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​			接下来只需要在PHP的配置文件php.ini中启用该扩展即可</p>
<p>php   -m  |	grep	vld	可以查看这个扩展是否安装成功</p>
<img src="@source/docs/theme-reco/img/common/image-20211020104756762.png" alt="image-20211020104756762" style="zoom: 33%;" />
<p>​		保存这段代码为vld.php，然后在命令行执行：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020104734031.png" alt="image-20211020104734031" style="zoom:70%;" />
<p>vld扩展有下边几个参数。</p>
<p>1）vld.active：是否在执行PHP的同时激活vld——1激活，0不激活（默认不激活）。</p>
<p>2）vld.execute：是否输出程序的执行结果——1输出，0不输出（默认输出）。</p>
<p>3）vld.verbosity：显示更详细的opcode信息，开启后可以显示每个opcode的操作数的类型等信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）vld.skip_prepend：是否跳过php.ini配置文件中auto_prepend_file配置项指定的文件，默认为0，即不跳过包含的文件。vld.execute为0时有效；</p>
<p>5）vld.skip_append：是否跳过php.ini配置文件中auto_append_file指定的文件，默认为0，即不跳过包含的文件。vld.execute为0时有效；</p>
<p>6）vld.format：是否启用自定义输出格式——1启用，0不启用（默认不启用）；</p>
<p>7）vld.col_sep：自定义输出格式间隔符，vld.format为1时有效；</p>
<p>8）vld.save_dir：指定文件输出的路径，默认路径为/tmp；</p>
<p>9）vld.save_paths：控制是否输出dot语言文件，默认为0，表示不输出；</p>
<p>10）vld.dump_paths：控制是否输出分支及路径信息——1输出，0不输出（默认输</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>小知识dot是一种描述图形的语言，可以由Graphviz工具包来绘制dot描述的图形。vld扩展可以直接通过命令来生成dot脚本，现以下面的代码来演示一下：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020105046110.png" alt="image-20211020105046110" style="zoom:50%;" />
</blockquote>
</blockquote>
<img src="@source/docs/theme-reco/img/common/image-20211020105101709.png" alt="image-20211020105101709" style="zoom:50%;" />
<img src="@source/docs/theme-reco/img/common/image-20211020105114719.png" alt="image-20211020105114719" style="zoom:50%;" />
<h3 id="◆-1-3-php-7源码阅读工具介绍" tabindex="-1"><a class="header-anchor" href="#◆-1-3-php-7源码阅读工具介绍" aria-hidden="true">#</a> ◆ 1.3 PHP 7源码阅读工具介绍</h3>
<p>​				Windows下的Source Insight、Mac下的Understand以及Linux下的Vim+Ctags</p>
<h3 id="◆-2-1-php-7语言的执行原理" tabindex="-1"><a class="header-anchor" href="#◆-2-1-php-7语言的执行原理" aria-hidden="true">#</a> ◆ 2.1 PHP 7语言的执行原理</h3>
<blockquote>
<blockquote>
<p>C\C++、Python、PHP、Go、Pascal等。而这些语言根据运行的方式不同，大体分为两种：编译型语言和解释型语言。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编译型语言包括C\C++、Pascal、Go等。这里说的编译是指在应用源程序执行之前，就将程序源代码“翻译”成汇编语言，然后进一步根据软硬件环境编译成目标文件。一般称完成编译工作的工具为编译器。而解释型语言，在程序运行时才被“翻译”为机器语言。但是执行一次“翻译”一次，所以执行效率较低。解释器的工作就是解释型语言中，负责“翻译”源代码的程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于一段C语言代码，需要经过预编译、编译、汇编和链接，才能成为可执行的二进制文件。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020105706306.png" alt="image-20211020105706306" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>第1步：C语言代码预处理（比如依赖处理、宏替换等）。如以上代码示例，#inlcude&lt;stdio.h&gt;就会在预处理阶段被替换。</p>
<p>第2步：编译。编译器会把C语言翻译成汇编语言程序，一条C语言通常编译为多条汇编代码。同时编译器会对程序进行优化，生成目标汇编程序。</p>
<p>第3步：编译得到的汇编语言通过汇编器再汇编成目标程序hello.o。</p>
<p>第4步：链接。程序中往往包含一些共享目标文件，如示例程序中的printf()函数，位于静态库，需要经过链接器（如Uinx连接器ld）进行链接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以C语言为代表的编译型语言，代码发生更新都要经过以上步骤。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于编译型语言，编译结果已经是针对当前CPU体系的指令；而解释型语言，需要先编译成中间代码，再经由该解释型语言的特定虚拟机，翻译成特定CPU体系的指令被执行。解释型语言是在运行过程中，翻译为目标平台的指令。常说解释型语言“慢”，主要也是慢在这里。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 7中，源代码首先进行词法分析，将源代码切割为多个字符串单元，分割后的字符串称为Token。而一个一个独立的Token是无法表达完整语义的，需经过语法分析阶段，将Token转换为抽象语法树（简称AST）。之后，抽象语法树被转换为机器指令执行。在PHP中，这些指令称为opcode（后文会对opcode做更详细的解释，此处读者可以将其看待为CPU指令）。到AST的生成这一步，编译型语言与解释型语言所需经历的过程相似。从抽象语法树之后开始产生差异。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="@source/docs/theme-reco/img/common/image-20211020105859718.png" alt="image-20211020105859718" style="zoom:50%;" />
<p>第1步：词法分析将PHP代码转换为有意义的标识Token。该步骤的词法分析器使用Re2c实现。</p>
<p>第2步：语法分析将Token和符合文法规则的代码生成抽象语法树。语法分析器基于Bison实现。语法分析使用了BNF（Backus-NaurForm，巴科斯范式）来表达文法规则，Bison借助状态机、状态转移表和压栈、出栈等一系列操作，生成抽象语法树。</p>
<p>第3步：上步的抽象语法树生成对应的opcode，并被虚拟机执行。opcode是PHP 7定义的一组指令标识，指令对应着相应的handler（处理函数）。当虚拟机调用opcode，会找到opcode背后的处理函数，执行真正的处理。以常见的echo语句为例，其对应的opcode便是ZEND_ECHO。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Token是PHP代码被切割成的有意义的标识。本书介绍的PHP 7版本中有137种Token</p>
<img src="@source/docs/theme-reco/img/common/image-20211020110134270.png" alt="image-20211020110134270" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP提供了token_get_all()函数来获取PHP代码被切割后的Token，可以在深入源码学习前，粗略查看PHP代码被切割后的Token。</p>
<p>例如：输出hello. world这个代码</p>
<p><img src="@source/docs/theme-reco/img/common/image-20211020110247610.png" alt="image-20211020110247610"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>查看它的token为：输出结果为：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020110322500.png" alt="image-20211020110322500" style="zoom:50%;" />
<p>上面二维数组的每个成员数组的第一个值为Token对应的枚举值。第二个值为Token对应的原始字符串内容。第三个值为代码对应的行号。可以看出，词法解析器将“&lt;? php echo &quot;hello world&quot;; ”这段文本内容切分成了4部分。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020110458549.png" alt="image-20211020110458549" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可见，Token就是一个个的“词块”，但是单独存在的词块不能表达完整的语义，还需要借助规则进行组织串联。语法分析器就是这个组织者。它会检查语法，匹配Token，对Token进行关联。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中，组织串联的产物就是AST（Abstract Syntax Tree，抽象语法树）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST是PHP 7版本新特性。在这之前的版本中，PHP代码的执行过程中是没有生成AST这一步的。PHP 7对抽象语法树的支持，实现了PHP编译器和解释器解耦，有效提升了可维护性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST的节点分为多种类型，对应着PHP语法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP-Parser工具，它可以用来查看PHP代码生成的AST。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP-Parser是PHP 7内核作者之一Nikic编写的将PHP源码生成AST的工具。源码见https://github.com/nikic/PHP-Parser。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST扮演了源码到中间代码的临时存储介质的角色，还需要将其转换为opcode，才能被引擎直接执行。opcode只是单条指令，opcodes是opcode的集合形式，是PHP执行过程中的中间代码，类似Java中的字节码。opcode生成之后由虚拟机执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP工程优化措施中有一个比较常见的“开启opcache”，指的就是这里的opcodes的缓存（opcodes cache）。通过省去从源码到opcode的阶段，引擎可以直接执行缓存的opcode，以此提升性能。</p>
<p>内核在zend_vm_opcodes.h中定义了186种opcodes</p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-php-7内核架构" tabindex="-1"><a class="header-anchor" href="#◆-2-2-php-7内核架构" aria-hidden="true">#</a> ◆ 2.2 PHP 7内核架构</h3>
<blockquote>
<blockquote>
<p>Zend引擎中包含了编译器和解释器，从PHP代码到opcode的执行，均由Zend引擎完成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend引擎除了实现了PHP的核心功能，还提供了一套接口，让PHP可以在更多的场景中使用，如命令行环境、Web环境等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<img src="@source/docs/theme-reco/img/common/image-20211020112059224.png" alt="image-20211020112059224" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
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
<h3 id="◆-2-3-php-7源码结构初步介绍" tabindex="-1"><a class="header-anchor" href="#◆-2-3-php-7源码结构初步介绍" aria-hidden="true">#</a> ◆ 2.3 PHP 7源码结构初步介绍</h3>
<blockquote>
<blockquote>
<p>PHP 7主要包含这些源码目录：sapi、Zend、main、ext、TSRM，本节会简要介绍各目录构成。</p>
<p><strong>sapi目录</strong>是对输入和输出层的抽象，是PHP提供对外服务的规范。PHP程序的输入可以是来自于命令行的标准输入，也可以是来自基于cgi/fastcgi协议的网络请求。同理，输出可以写到命令行的标准输出，也可以作为基于cgi/fastcgi协议的网络响应返回给客户端。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP为支持多场景交互，为不同的场景模式编写独立的程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>命令行模式对应的是二进制程序bin/php；内置模块的模式不需要提供二进制程序，作为普通函数供Apache或任意C/C++程序来调用即可；CGI模式对应的是二进制程序bin/cgi; FastCGI模式对应的是二进制程序sbin/php-fpm。同时，对多个模式抽象出了相同的模板（源码实现为结构体sapi_module_struct），其定义了模式启动、关闭、激活（处理请求前）、失效（处理请求后）等多个钩子函数指针。每一个模式将这些函数指针指向自己的函数，实现不同模式之间处理输入、输出的差异化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有了这一层，可以轻松扩展PHP对外服务的方式。假设需要以一种二进制协议的方式来和PHP交互，只需要实例化一个新的sapi_module_struct，并实现需要的钩子函数即可。当然，你需要在钩子函数里面关心如何根据二进制协议解析出相应的脚本文件和参数等输入/输出问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍几种常用的SAPI。</p>
<p>1）apache2handler:Apache扩展，编译后生成动态链接库，配置到Apache下，当有http请求到Apache时，根据配置会调用此动态链接库，执行PHP代码，完成与PHP的交互。</p>
<p>2）cgi-fcgi：编译后生成支持CGI协议的可执行程序，webserver（通常为Apache或Nginx）通过CGI协议把请求传给CGI进程，执行代码将结果返回给webserver，退出进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）fpm-fcgi:fpm全称为FastCGI Process Manager, PHP官方提供的FastCGI进程管理器。以Nginx服务器为例，当有http协议请求发送到Nginx服务器，Nginx按照FastCGI协议把请求交给php-fpm进程处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）cli:Command Line Interface的简称，PHP的命令行交互接口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>Zend目录是PHP的核心代码。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．内存管理模块PHP实现了自己的内存管理器，主要操作实现在zend_alloc_sizes.h、zend_alloc.h、zend_alloc.c三个文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）zend_alloc_sizes.h:PHP的内存管理器也实行分级管理，即分配策略按照需要的大小共有三种规格，分配时会根据实际需要空间选择对齐，再进行分配。规格分级从小到大分别称为small、large和huge。该文件便定义了PHP内存分配的基本单位。这里简要说明下三种规格。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ small内存小于3072B。当PHP申请的内存小于3072字节，使用small分配策略；❑ large内存介于3072B和4KB之间；❑ huge内存大于2MB。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）zend_alloc.h：主要是一些内存操作函数的声明。PHP内存管理器在C语言常见内存操作函数malloc()、free()等之上做了一层封装。3）zend_alloc.c：定义了内存操作函数的实现以及PHP内存管理器的核心数据结构_zend_mm_heap等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了解决循环引用问题，PHP引入了垃圾回收机制。PHP 7垃圾回收的实现主要包含在源文件zend_gc.h和zend_gc.c中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>支撑数组的底层数据结构HashTable也经常在扩展开发中被开发者使用。PHP 7数组的底层设计主要在zend_hash.c和zend_hash.h两个文件中实现</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>main目录是SAPI层和Zend层的黏合剂。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend层实现了PHP脚本的编译和执行，sapi层实现了输入和输出的抽象，main目录则起到了承上启下的作用：承上，解析SAPI的请求，分析要执行的脚本文件和参数；启下，调用Zend引擎之前，完成必要的初始化等工作。如模块初始化——php_module_startup()。上文SAPI目录提到的模式启动的钩子函数都会调用这个API，再如脚本执行——php_execute_script()，它是执行PHP脚本的通用入口，可以在main目录中找到。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ext是PHP扩展相关的目录，常用的array、str、pdo等系列函数都在这里定义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP在早期更多的是单个进程、单线程模型运行的，在后期才引入了线程安全机制ZTS（Zend Thread Safety）。TSRM正是在这样的场景之下诞生的。TSRM是Thread Safe Resource Manager的缩写——线程安全资源管理器。不同于本章其他小节在PHP应用开发中的广泛涉及与实践，PHP多线程实际开发场景要少得多。PHP提供了条件编译选项——enable-maintainer-zts，以激活定义ZTS常量，支持线程安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>线程安全机制主要为了保证共享资源的安全。PHP的线程安全机制简洁直观——在多线程环境下，为每个线程提供独立的全局变量副本。具体实施是通过TSRM为每个线程分配（分配前加锁）一个独立ID（自增）作为当前线程的全局变量内存区索引，在以后的全局变量访问中，实现线程之间的完全独立。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-基本知识" tabindex="-1"><a class="header-anchor" href="#◆-3-1-基本知识" aria-hidden="true">#</a> ◆ 3.1 基本知识</h3>
<blockquote>
<blockquote>
<p>数据类型是一种为了对数据（或数据值）进行分类而由用户定义的类型，在数据结构中的定义是一个值集合以及定义在这个值集合上的一组操作。基本的数据类型有int、double、long、char及各种指针类型。在C语言中，使用变量时，提前定义变量并指定变量类型，而在PHP中变量不需要指定类型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C语言的数据类型在不同的操作系统中长度不同，举个例子，x86-64系统架构下，一个char类型的数据占1个字节，一个int类型的数据占4个字节，一个指针类型的数据占8个字节，一个long类型的数据占8个字节</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结构体与联合体</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结构体是使用struct定义的结构，比如定义一个如下的结构体：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114036740.png" alt="image-20211020114036740" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结构体是按照8字节对齐的，那么可以画出对齐后占用的字节数，如图3-1所示。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114129865.png" alt="image-20211020114129865" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然char a只占了1字节，int b只占了4字节，但是long c并不是紧跟着b，而是根据8字节对齐后，c和b之间空了3字节。同样，char* f和int e之间也空了4字节，因此总大小为40字节。虽然浪费了7字节，但得益于内存对齐，存取速度会更快。这是结构体对齐的基础。所以结构体的总大小是40字节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>联合体的定义跟结构体类似</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114253091.png" alt="image-20211020114253091" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么联合体是怎样的一种格式呢？它复用了同一块内存：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114348484.png" alt="image-20211020114348484" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>a、b和c共用同一块内存，修改a，也会影响b和c的值，同时可以知道联合体的大小为其最大成员的大小，比如图3-2中联合体test的大小为其最大的成员long c的大小，也就是8。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这就是结构体和联合体的区别，以及结构体的对齐。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>总结：联合体是成员变量共享一块内存，可以根据使用确定含义；而结构体是不共享的，成员变量不共享一块内存。另外，结构体存在对齐问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序执行时的内存布局主要如下：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114540645.png" alt="image-20211020114540645" style="zoom:50%;" />
<p>程序的堆和栈：</p>
<p>1）栈区（stack）——存储参数值、局部变量，维护函数调用关系等。</p>
<p>2）堆区（heap）——动态内存区域，随时申请和释放，程序自身要对内存泄漏负责。</p>
<p>3）全局区（静态区）——存储全局和静态变量。</p>
<p>4）字面量区——常量字符串存储区。</p>
<p>5）程序代码区——存储二进制代码。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020114831257.png" alt="image-20211020114831257" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>总体来讲，栈上的变量是局部的，随着局部空间的销毁而销毁，由系统负责。堆上的变量可以提供全局访问，需要自行处理其生命周期。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-2-变量的类型和实现" tabindex="-1"><a class="header-anchor" href="#◆-3-2-变量的类型和实现" aria-hidden="true">#</a> ◆ 3.2 变量的类型和实现</h3>
<blockquote>
<blockquote>
<p>PHP的变量是弱类型的，也实现了如整型、浮点型、字符串、数组和对象等类型。PHP中的变量是使用结构体zval来表示的</p>
<p>首先来看PHP 5中_zval_struct（zval）这个结构体：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020115312845.png" alt="image-20211020115312845" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​			PHP 5的zval核心由一个zvalue_value类型的联合体和zend_uchar类型的type组成。在PHP 5.3之后相继引入了refcount__gc字段通过引用计数进行垃圾回收，同时增加了新的字段is_ref__gc来标记是否为引用类型。默认在i386:x86-64架构下，上面的zvalue_value结构体中lval和dval大小为8字节，str结构体大小为12字节，ht和ast是指针类型，大小为8字节，obj结构体大小为12字节，所以在内存对齐的情况下_zval_struct中的value大小为16字节，加上refcount__gc大小为4字节和两个1字节的type、is_ref__gc, _zval_struct结构体本身大小为24字节（考虑到结构体对齐）。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020115703930.png" alt="image-20211020115703930" style="zoom:50%;" />
</blockquote>
<blockquote>
<p>因为整型和浮点型不需要进行gc，所以对于整型和浮点型会有内存浪费。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在开启Zend内存池的情况下，zval_gc_info在内存池中分配，内存池会为每个zval_gc_info额外申请一个大小为16字节的zend_mm_block结构体（限于篇幅，这里不展开讨论），用来存放内存相关信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最终一个变量在PHP 5中实际占用的内存大小为48字节</p>
<img src="@source/docs/theme-reco/img/common/image-20211020115913415.png" alt="image-20211020115913415" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这48字节的大小其实有很多的浪费，而这点PHP开发者在PHP 7中做了重点优化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中zval结构体有了一些变化，zval依然保留了value字段，但跟PHP 5不同的是value里面支持更丰富的类型，且PHP 7的zval不再存储复杂类型的结构，复杂类型的数据都是通过指针操作的，新的联合体中value的内存占用只有8字节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>value支持更多的类型。除了value字段之外，zval结构体中还有两个重要的字段u1和u2，它们都是联合体结构，却各有用途。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）u2中的字段信息1）next：用来解决哈希冲突问题，记录冲突的下一个元素位置，具体会在第5章中详细说明。2）cache_slot：运行时缓存。在执行函数时会优先去缓存中查找，若缓存中没有，会在全局的function表中查找。3）lineno：文件执行的行号，应用在AST节点上。Zend引擎在词法和语法解析时会将当前文件的行号记录下来，记录在zend_ast中的lineno中，如果zend_ast这个节点的kind刚好是ZEND_AST_ZVAL（值为64），则会将该zend_ast强制转换成zend_ast_zval类型，而对应的lineno则记录在zend_ast_zval结构体中内嵌的zval里。这部分会在第11章中详细展开。4）num_args：函数调用时传入参数的个数。5）fe_pos：遍历数组时的当前位置。比如在对数组执行foreach时，fe_pos每执行一次都会加1。当再次调用foreach对数组遍历时，会首先对数组的fe_pos指针重置。这同样也会在第5章中详细说明。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）fe_iter_idx：跟fe_pos用途类似，只是这个字段是针对对象的。对象的属性也是HashTable，传入的参数是对象时，会获取对象的属性表，因此遍历对象就是遍历对象的属性。7）access_flags：对象类的访问标志，常用的标识有public、protected、private。这个会在第6章中阐述。8）property_guard：防止类中魔术方法的循环调用，比如__get、__set等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>相对于PHP 5时代的zval, PHP 7的zval节省了很大的内存</p>
<img src="@source/docs/theme-reco/img/common/image-20211020120307532.png" alt="image-20211020120307532" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 5时代，所有的变量都在堆中申请，但是对于临时变量是没有必要的，而PHP 7对此做了优化，这种临时变量直接在栈中申请。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中定义了20种宏，用来标记u1.v.type字段，其中伪类型将逐渐淘汰，这里暂不讨论。根据不同的type值取value中对应的不同值。以u1.v.type值为IS_ARRAY为例，那么取value.arr的值，对应zend_array。同样，如果u1.v.type值为IS_LONG，通过value. lval取值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了常见类型之外，这里有几个新增的类型需要注意。1）IS_UNDEF：标记未定义，表示数据可以被覆盖或者删除。比如在对数组元素进行unset操作时，PHP 7并不会直接将数据从分配给HashTable的内存中删掉，而是先将该元素所在的Bucket的位置标记为IS_UNDEF，当HashTable中IS_UNDEF元素个数到达一定阈值时，进行rehash操作时再将IS_UNDEF标记的元素覆盖或删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）IS_TRUE和IS_FALSE：这里将IS_BOOL优化成两个，直接将布尔类型的标记记录在type中，这样做可以优化类型的检查，不需要再做一次类型判断。3）IS_REFERENCE：是新增的类型，PHP 7中使用不同的处理方式来处理“&amp;”</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）IS_INDIRECT：同样也是新增的类型，由于PHP 7中HashTable的设计跟PHP5中有很大的不同，所以在解决全局符号表访问CV变量表的问题上，引入了IS_INDRECT类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）IS_PTR：该类型被定义为指针类型，用来解析value.ptr，通常用在函数类型上。比如声明一个函数或者方法。6）_IS_ERROR：为新增的错误类型，校验zval的类型是否合法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于整型和浮点型的数据，由于其占用空间小，在zval中是直接存储的，所以在进行赋值的时候会直接创建两个zval，在对应的value中取lval或dval。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>_zend_string的头部维护着gc的信息，并且冗余了hash值h，这个操作据说为PHP7提高了5%的性能，避免了在数组操作中hash值的重复计算。len表示字符串的长度，val记录了字符串的内容。这里的val值采用了柔性数组（被收入到C99标准中），这种方式相较于PHP 5中的字符串与结构体分离，读写的效率更高。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中的字符串是通过zval.str指向zend_string结构体的</p>
<h5 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组：</h5>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​		数组是PHP代码中比较重要的一个结构，本质上PHP的数组是有序的字典，即它们表示key-value对的有序列表，其中key-value映射是使用HashTable实现的。PHP将字符串key通过哈希函数运算返回一个整数。这个整数被用作“普通”数组的索引。但是带来新的问题是，两个不同的字符串可能得到相同的哈希值，因此这样的HashTable需要实现某种机制来解决冲突。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020131242400.png" alt="image-20211020131242400" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​		头部的gc结构体解决数组的引用计数和循环引用的问题</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>引用的问题</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>传值即PHP代码中的赋值操作，如上面的代码所示，当改变$b值时，$a的值需要保持不变，因此需要在此分离。传址意味着当改变$b的值时，$a也会跟着变。</p>
</blockquote>
</blockquote>
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
<p>将$a赋值给$b, refcount__gc会增加，但是并不会改变引用类型。当使用“&amp;”操作时，将$b赋值给$c, zval的is_ref__gc值会改变，使得此时的zval必须进行分离，但是实际上它们的值还没有变化，这使得需要在堆中维护两个值为“hello”的zval。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7引入了新的类型IS_REFERENCE来处理这个问题，首先看看zend_reference的结构体：</p>
<img src="@source/docs/theme-reco/img/common/image-20211020131955860.png" alt="image-20211020131955860" style="zoom:50%;" />
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
<img src="@source/docs/theme-reco/img/common/image-20211020132441522.png" alt="image-20211020132441522" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote></blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>间接zval</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中变量的类型有20种，而PHP 5中只有11种。常规类型是一些比较容易理解的类型，而内部类型绝对很陌生了。内部类型是对外无感知的，只在内部使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP代码通过词法和语法解析生成AST树（第10章会介绍如何通过词法和语法解析生成AST树），zend引擎根据AST树生成opcodes数组（后面第11章也会介绍PHP7是如何生成op_array的），zend引擎模拟了一个执行栈来逐条执行opcodes数组中的opcode。在这里有一个需要注意的地方，在编译时已知的所有变量都被赋予一个索引，并且它们的值将存储在编译变量（CV）表中。但是PHP也允许通过使用变量来动态地引用变量，或者如果在全局范围内，则使用$GLOBALS。如果发生这样的访问，PHP将为函数/脚本创建一个符号表，其中包含从变量名到其值的映射。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常量就是指值固定，在执行期间不会改变，这些固定的值也叫作字面量。PHP底层在做词法和语法解析时会将字面量解析，并将其类型修改为IS_CONST。为了方便理解，以PHP代码为例：[插图]上面示例中“hello”“a”就是常量，常量在PHP底层被标记为可引用和可复制的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常量AST树比较特殊，是用来标记特殊的AST树的，这种树可以有引用计数。它跟普通的AST树节点的区别是头部多了一个zend_refcounted_h结构，用于存储引用计数相关信息。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020132753659.png" alt="image-20211020132753659" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>​		常量AST也是可引用和可拷贝的，这个跟常量是一样的。</p>
<p><strong>资源类型：</strong></p>
<p>​		文件句柄、Socket链接等是资源类型，通过void * 指针可以指向任何结构体。</p>
<p>​		<img src="@source/docs/theme-reco/img/common/image-20211020132929608.png" alt="image-20211020132929608" style="zoom:50%;" /></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中对象的结构如下所示：</p>
<p>​				<img src="@source/docs/theme-reco/img/common/image-20211020133325163.png" alt="image-20211020133325163" style="zoom:50%;" /></p>
<p>​		PHP 7中对象的属性数据存储在properties_table数组中，而properties是一个HashTable，它的key为对象的属性名，value为属性值在properties_table数组中的偏移量，通过偏移量可以在properties_table数组中取到真正的数据。</p>
<p>​		另外对象结构体的头部也包含了引用计数的信息，如前面所说，复杂类型的引用计数都是由自身来维护的。头部的gc结构体解决了PHP 5中重复计数的问题。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-变量的作用域" tabindex="-1"><a class="header-anchor" href="#◆-3-3-变量的作用域" aria-hidden="true">#</a> ◆ 3.3 变量的作用域</h3>
<blockquote>
<blockquote>
<p>全局变量就是在程序的任何一处都可以使用的变量。在PHP底层维护了全局的符号表（symbol_table），它本身是一个HashTable , PHP代码中的全局变量都维护在这个HashTable中，符号表的作用域是整个PHP代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>局部变量是在函数内部定义说明的。函数的调用过程是不断地压栈和出栈，出栈后内部变量被销毁，因此其作用域仅限于函数内，离开该函数后再使用这种变量是非法的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP代码中有一种操作，会产生一种类型为IS_TMP_VAR的变量，姑且称为“中间变量”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP代码执行过程中会将局部变量存储在zend_execute_data相邻的内存中，但是静态变量会存在_zend_op_array.static_variables中。局部变量在函数执行结束后被销毁，而静态变量不会被销毁。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常量也有全局常量和局部常量的区分，两者的作用域不同。在全局变量的结构中有zend_constants的HashTable，同时类和对象constants_table的HashTable用来存放类中定义的常量。常量的类型为IS_CONSTANT，同时常量具有可引用和可拷贝的属性，但是常量不能被回收。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-4-对垃圾回收的支持" tabindex="-1"><a class="header-anchor" href="#◆-3-4-对垃圾回收的支持" aria-hidden="true">#</a> ◆ 3.4 对垃圾回收的支持</h3>
<blockquote>
<blockquote>
<p>PHP 7中复杂类型的引用计数都维护在各个结构体头部的gc中，那么gc的作用是什么？答案是对垃圾回收的支持。</p>
<p>什么是垃圾回收呢？垃圾回收是一种自动的内存管理机制，当一个变量在程序中不再被需要时，应该予以释放，这种内存资源管理称为垃圾回收。其中一种垃圾回收的方式是使用引用计数，通过对数据存储的物理空间多附加一个计数器空间，当其他数据与其相关时，计数器加一，反之，相关解除时计数器减一。定期检查各存储对象的计数器，计数器为零的话，则认为该对象已经被抛弃而应将其所占物理空间回收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中垃圾回收的实现方法是定期遍历和标记若干存储对象的数组，再通过算法将是垃圾的物理空间回收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以数组为例，在PHP 7中使用“&amp;”会改变等号两边zval的类型（改为IS_REFERENCE），引用计数记录在新的结构体（zend_reference）中，并且引用计数为2。这时如果等号两边是同一变量，那么这个变量的引用计数就变为2，自己引用自己。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7垃圾回收实际包含两部分，垃圾收集器和垃圾回收算法。垃圾收集器是将可能是垃圾的元素收集在回收池中，然后由垃圾回收算法回收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>gc_root_buffer是一个双向链表，同时记录引用计数的相关信息，zend_gc_globals维护着gc的整个信息，各字段含义如下。1）gc_enabled：是否开启gc。2）gc_active：垃圾回收算法是否运行。3）gc_full：垃圾缓冲区是否满了，在debug模式下有用。4）buf：垃圾缓冲区，PHP 7默认大小为10000个节点位置，第0个位置保留，即不会使用，定义在zend/zend_gc.c文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了将右边的独立元素回收该如何实现这个算法。引用计数大于0说明它还在其他地方使用，那么先将元素的引用计数减1。如果发现引用计数为0，则说明任何地方都不再使用它，那么它就是垃圾，需要被回收掉。反之说明不是垃圾，需要将其从回收池移出去。而垃圾回收算法也是围绕这个核心条件进行的。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-字符串的结构" tabindex="-1"><a class="header-anchor" href="#◆-4-1-字符串的结构" aria-hidden="true">#</a> ◆ 4.1 字符串的结构</h3>
<blockquote>
<blockquote>
<p>在源码中每个字符串都有自己所属的分类，上述代码中的字符串因为从属的类别不相同，在PHP执行过程中存在的生命周期也不同。由简到难，我们先从PHP字符串的底层存储结构说起。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7主要依赖zend_string结构体来实现字符串存储，而PHP 5.x则依赖zval结构体实现字符串存储。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020140230411.png" alt="image-20211020140230411" style="zoom:50%;" />
<img src="@source/docs/theme-reco/img/common/image-20211020140247374.png" alt="image-20211020140247374" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对比两个结构体可以发现两者的相同点是字符串值的存储都是val变量，都由一个len变量记录字符串的长度，都由一个refcount变量记录引用计数，除了相同点，两者之间同样存在很大的不同点</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）字符串结构的完全改变</p>
<p>PHP 5的字符串实现是直接嵌入到zval结构体中，占用内存大小在i386:x86-64（下面所说的内存占用都是以它为准）架构下是24字节；而PHP 7的字符串是单独的zend_string结构体，其大小是32字节（8位对齐后），相较于PHP 5有上升。（2）字符串真正存储的val字段的实现方式不同相比于PHP 5的指针存储方式（char *）, PHP 7使用了C语言新的特性：柔性数组。除了这两点不同外，PHP 7的字符串增加了哈希值（h字段）的存储，增加了PHP 7统一的gc头部，用来支持gc。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zend_string内存占用情况zend_string结构体整体占用了32字节，包含了gc、h、len、val四个字段，每个字段各占8字节</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）gc字段gc字段的类型是自定义的结构体zend_refcounted_h，其主要作用是存放引用计数等。比如引用计数存放在refcount字段、类别信息存储在flags字段、字符串所属的变量类别则存储在type字段。zend_string结构体中因为加入了gc字段，使得其和数组、对象一样可被多个zval引用，相较于PHP 5的字符串来说更具有独立性及使用效率上的提升。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）h字段h字段的作用是缓存字符串的哈希值，它的值只有当字符串需要被作为数组key时才会初始化，同一个字符串被多次当作key使用时，不会重复计算其对应的哈希值。数组计算key对应的索引值时会用到h字段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）val字段val字段的作用是存储字符串值，类型是char，在这里，很多读者应该都会有几个疑问。1）PHP 7值存储为何采用的是char[1]，而不是延用PHP 5的char *？2）为什么使用char val[1]占位，而不是char val[]或者char val[0]占位？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于第1个问题，char[1]称为柔性数组，当结构体中仅有一个变长的字符串且为最后一个字段时，就可采用这种实现方式。那么使用柔性数组的优势是什么呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在分配字符串内存时，一次申请的内存大小不仅仅是结构体的大小，还要额外加上字符串值的长度len+1。至此，柔性数组val字段就占用了末尾连续的一块内存，用于存储不定长度的字符串值。这样，struct中字符串的值与其他成员便存储在同一块连续的空间中，在分配、释放内存时便可将struct当成整体处理。</p>
<img src="@source/docs/theme-reco/img/common/image-20211020140650724.png" alt="image-20211020140650724" style="zoom:50%;" />
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>char[]的好处很明显，读写字符串值时可以省一次内存读写，假设val字段还沿用PHP5中的char*，要去读写val时，需访问两块内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于第2个问题，是因为val[]、val[0]在C99标准中是合法的，这种定义被称为变长数组（variable-length array）。由于下标为空，这里的val就像是一个占位符，只有符号意义，但却并不实际占用空间。在C99以前的标准中，是不允许变长数组出现的，但支持val[1], val[1]会实际占用1字节。PHP 7采用val[1]而不用val[]占位是为了兼容不同版本的C编译器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）len字段字符串的长度是通过len字段来记录的，类型是size_t（long unsigned int）, len的类型也决定了一个字符串的最大长度，相较于PHP 5, PHP 7所支持的字符串长度有所增加。需要记录字符串的长度具体有以下两个原因：、</p>
<p>​		1）时间换空间的做法，直接记录以避免重复计算字符串的长度。</p>
<p>​		2）保证了PHP字符串操作二进制安全。对于二进制安全的讲解请见4.1.2节。</p>
<p>​		以上为PHP 7底层字符串存储的主要结构体的介绍，依赖这个结构体，基本可满足PHP代码中大部分字符串的存储与操作需求。接下来继续介绍字符串的二进制安全。</p>
<h4 id="_4-1-2-字符串的二进制安全" tabindex="-1"><a class="header-anchor" href="#_4-1-2-字符串的二进制安全" aria-hidden="true">#</a> 4.1.2 字符串的二进制安全</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C字符串中的字符必须符合某种编码（比如ASCII），并且除了字符串的末尾之外，字符串里面不能包含“\0”（空字符），否则字符串中的“\0”将被误认为是字符串结束符，这些限制使得C字符串只能保存文本数据，而不能保存像图片、音频、视频、压缩文件这样的二进制数据。而PHP的字符串则不同，其支持二进制数据的存储，PHP在处理带二进制字符的字符串时，程序不会对其中的数据做任何限制、过滤或者假设，数据在写入时是什么样的，它被读取时就是什么样，这种能力称为字符串的二进制安全。</p>
<p>对于C语言来说，“\0”就是字符串的结束符，当读取字符串“aaa\0b”时，读到“\0”就会默认字符读取已经结束，而抛掉后面的字符“b”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于PHP 7来说，其通过zend_string结构体对字符串重新封装，读取的数据长度以自身结构体len值为准，不再像C语言一样将特殊格式“\0”作为字符串结尾，保证了字符串读写的二进制安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zend_string API是基于zend_string结构体封装的各类字符串操作函数集合，主要有字符串的扩容、截断、初始化、销毁、判等、计算哈希值等函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>zend_string_init函数zend_string_init函数把一个普通字符串初始化成zend_string。比如PHP的词法解析器在解析PHP源码时，会把扫描遇到的每个字符串初始化成zend_string结构存储，然后关联到AST的zval节点，初始化的过程就是调用zend_string_init函数。zend_string_init函数的源码如下。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>整体步骤大致如下。第1步：申请一块连续的内存，内存的大小的计算公式为：实际申请大小= 结构体的大小（24） + 字符串的长度（len）+1，实际申请大小是按照8字节对齐的，不一定等于实际计算的结果。第2步：指针偏移到val字段所在位置，进行字符串内容拷贝。第3步：追加结束符“\0”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二进制安全比较函数其实就是打破原有C语言读字符串遇到“\0”就返回的惯性，结合字符串长度字段len循环读取、比较字符串而已。</p>
</blockquote>
</blockquote>
<h2 id="◆-6-1-类的种类" tabindex="-1"><a class="header-anchor" href="#◆-6-1-类的种类" aria-hidden="true">#</a> ◆ 6.1 类的种类</h2>
<blockquote>
<blockquote>
<p>PHP 7中支持多种类（class）的实现，包括普通类、抽象类、接口、特性以及final类和匿名类。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）类的属性和方法有三个访问级别，分别为public（公有）, protected（受保护）或private（私有）。类的外部不能直接调用protected（受保护）或private（私有）的方法和属性。2）类的属性有普通属性和静态、常量属性，静态、常量属性则分别用关键字“static”和“const”声明。3）类的普通方法、属性被自己的成员函数调用时可使用“$this-&gt;”，静态方法及静态属性也可通过这种方式访问。4）类的常量属性、静态属性、静态方法，通过“self::”调用。非静态的方法也可以通过“::”调用，但是非静态的属性不能通过“::”访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 5开始支持抽象类和抽象方法，抽象类不能被实例化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>说明：1）抽象方法必须被子类继承实现，所以不能为私有，只能是受保护的或公有的；2）抽象类的方法访问控制级别必须和子类相等或更为宽松。例如，父类的抽象方法是受保护的，子类实现时则必须为受保护的或者公有的；3）抽象方法的实现，必传参数的数量及类型必须严格一致；4）抽象类的非抽象方法，子类可不实现，等同于普通类方法的继承；5）抽象类中的抽象方法，只能定义，不能实现其方法体；6）抽象类可定义常量，且可被子类覆盖。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP与大多数面向对象编程语言一样，不支持多重继承，每个类只能继承一个父类。对象接口（interface）里定义的方法子类需全部实现，且接口不能直接被实例化。接口的主要特性和需注意的点如下。1）接口类可以通过extend继承一个或多个接口类，多个接口之间用逗号分隔，用以实现接口类的扩充。2）接口类定义的方法必须声明为公有，因此子类的实现方法也只能为公有。接口方法体也必须为空。3）接口类定义的常量和类常量使用方式一样，但不能被子类或者子接口覆盖。4）普通类通过关键字“implements”来实现一个或多个接口。5）继承多个接口，方法不能有重名。6）普通类继承接口，必须实现接口类里面所有的方法，参数也和接口方法定义相同。可加默认参数，这点和抽象类方法的实现基本一致。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>特性（trait）从PHP5.4.0开始启用，便于在不同层次结构内实现代码复用。特性不能直接被实例化，主要特性和需注意的点如下。1）特性与普通类相似，有自己的方法、属性等，但是不可通extends继承，也没有类常量。2）特性的方法如果和当前类方法冲突，会被当前类的方法覆盖。如果和基类方法冲突，特性方法会覆盖基类中的方法。优先级：当前类&gt;特性类&gt;基类。3）一个类加载了多个特性，当多个特性中方法有重名时，需要在代码中通过关键字“insteadof”设置优先级或者通过“as”关键字重命名处理，否则报错。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结合PHP代码实践特性的定义与用法。（1）特性的定义[插图]（2）特性扩容[插图]可见，此时B包含了A的所有内容，扩容非常简单。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）优先级冲突解决当两个特性的方法相同时，需要通过“insteadof”关键字定义谁优先，或通过“as”关键字修改方法名。先定义一个方法与A冲突的特性D：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>8）修改特性方法的访问控制级别。在普通类中加载特性，也可通过“as”来修改其访问控制级别</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果不希望一个类被继承，可以使用“final”来修饰。如果一个方法不想被子类覆盖，也可以这样声明。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）final修饰的类不能被继承</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>类的属性不能定义为final，只有类和类方法才能被定义为final。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当我们想快速实例化一个对象，可以通过匿名类来实现。从PHP 7开始支持匿名类，可通过new class函数创建，不能有类名。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>快速创建一个简单匿名对象：[插图]</p>
</blockquote>
</blockquote>
<p>◆ 6.2 类的特性</p>
<blockquote>
<blockquote>
<p>类的成员方法中，可以通过“$this-&gt;”访问非静态、非常量属性；通过“self::”来访问常量及静态属性。接下来逐步介绍各个属性的异同。1）普通属性：普通属性指的是无static、const声明的属性。普通属性通过“-&gt;”访问，类实例化成对象后，会把这些属性复制到对象中。2）静态属性：静态属性指的是通过关键字static声明的属性，访问时通过“::”调用。3）常量属性：常量属性指的是通过关键字const声明的属性，常量属性不能被修改，访问时通过“::”调用。4）动态属性：动态属性指的是在程序运行中产生的属性，不是在类中声明的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意① 在普通类、匿名类和final类中，方法及属性的访问控制声明不受限制，可设为public、protected和private三者中的任意一个；② 在抽象类和接口中，方法及属性的访问控制不能被声明为private；③ 在特性类中，方法及属性的访问控制只能被声明为public。</p>
</blockquote>
</blockquote>
<p>◆ 6.3 类的实现</p>
<blockquote>
<blockquote>
<p>方法：类的方法（包括类的静态方法和类的普通方法）和普通方法（非成员方法）编译后生成的zend_op_array基本没有区别。唯一区别就是类的方法编译后生成的zend_op_array是存在于类结构体的function_table中，不像普通方法，编译后存储在全局变量CG(function_table)中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>类成员方法的访问权限（private、protected、public）以及是否是静态方法等信息，存储在zend_op_array中的fn_flags字段里。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>类的普通方法调用与静态方法调用基本无异。区别在于普通方法可以使用$this变量获取到当前所在对象。因此，在ZEND_INIT_METHOD_CALL操作中，最后初始化调用栈的时候会将当前对象当成参数$this传入。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此，如果在一个类的普通方法的实现中，没有用到$this变量，那么把普通方法当成静态方法调用是没有问题的，否则会报语法错误。这和C++语言的实现基本上一样。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP只支持单一继承，也就是一个子类只能有一个父类。而为了实现类似于C++的多重继承的功能，PHP引入了接口的概念。接下来介绍接口的实现。在一个类初始化时，已经确定了此类的接口个数，而关联一个类与其所实现的接口，是通过函数zend_do_implement_interface()来实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>特性与类进行关联通过方法zend_do_bind_traits()来实现：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>继承划分了类的层次，父类代表的是更一般、更泛化的类，而子类则更为具体、细化。继承是实现代码重用、扩展软件功能的重要手段。子类中与父类完全相同的属性和方法不必重写，只需写出新增或改写的内容，不必一切从零开始。PHP只支持单一继承，实现相对简单。PHP父类和子类是分别编译的。编译完成后，再对父类和子类进行继承。继承操作在函数do_bind_inherited_class()中完成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．继承属性普通属性和静态属性的继承是先后完成的。在类结构中二者的存储十分相近，继承的操作也十分相近，这里只介绍普通属性继承的实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）申请一个元素类型是zval的数组table，大小为父类的普通属性个数（parent_ce-&gt;default_properties_count）和子类的普通属性个数（ce-&gt;default_properties_count）之和。2）将父类的普通属性中parent_ce-&gt;default_properties_table的元素拷贝到数组table。3）将子类的普通属性中的ce-&gt;default_properties_table的ce-&gt;default_properties_count个元素拷贝到table+parent_ce-&gt;default_properties_count。4）释放子类的普通属性指针ce-&gt;default_properties_table，将table赋值给ce-&gt;default_properties_table。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>类的静态属性也如此完成合并。可以看出，子类的静态属性和普通属性在元素中的位置，相对于合并前都有偏移，所以要对其在HashTable中的偏移进行重置，重置的大致步骤如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>常量存储是用HashTable实现的，两个HashTable的合并比较简单，无非就是遍历父类的constants_table。❑ 如果子类中存在此常量，则不进行任何操作。❑ 如果子类中不存在此常量，则把此key-&gt;val键值对插入到子类的constants_table中。</p>
</blockquote>
</blockquote>
<p>◆ 6.5 其他特性</p>
<blockquote>
<blockquote>
<p>PHP 7中提供了两种自动加载方式：__autoload()和spl_autoload_register()。1）__autoload：这个自动加载方法比较简单，在PHP中实现了此方法后，会存储在EG(autoload_func)中。当需要加载新的类时，内核会调用此方法加载类。此外，内核自己实现了__autoload的默认版本PHP_FUNCTION(spl_autoload)。2）spl_autoload_register：这种加载方法比较高级。除了可以实现多个加载逻辑之外，还可以设置优先级（把加载逻辑放在最高优先级或者最低优先级）。知名管理工具Composer便主要是靠spl_autoload_register来实现的。而且，还可以通过spl_autoload_unregister来删除某个加载逻辑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现在我们知道，通过spl_autoload_register来进行自动加载，大体有以下几个特征：多个、优先级、可查找（查找后删除）。那么之前学到的内核数据结构有没有可以满足这个需求的？答案是有，内核强大的HashTable完全可以满足这些需求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>事实上，内核确实就是用HashTable来实现的。内核使用HashTable存储在全局变量SPL_G(autoload_functions)中。SPL_G(autoload_functions)初始化为NULL，当程序第一次调用spl_autoload_register()方法来增加自动加载逻辑时，内核会对其进行初始化。由于spl_autoload_register()可以通过方法、类的普通方法甚至是闭包来实现自动加载，所以这个HashTable的value用zend_function或用zval都不能满足需求，为了满足需求，内核定义了一个结构体autoload_func_info，用于存储用户实现的自动加载逻辑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无论实现了哪种自动加载，都是在PHP_FUNCTION(spl_autoload_call)中对自动加载方法进行调用。如果全局变量SPL_G(autoload_functions)已初始化，则按顺序调用加载逻辑，直到此类正确加载。否则直接调用__autoload实现。</p>
</blockquote>
</blockquote>
<p>◆ 第7章 生命周期</p>
<blockquote>
<blockquote>
<p>PHP 7的生命周期主要分为5大阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>理解PHP代码的整个执行过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对PHP 7的执行有一个全局的认识。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7有多种模式运行，比如常用的CLI（命令行）模式、FPM模式，以及CGI模式、embed模式、Apache2Handler模式、litespeed模式等</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>讨论一下各种模式下PHP代码是如何执行的</p>
</blockquote>
</blockquote>
<p>◆ 7.1 基础知识</p>
<blockquote>
<blockquote>
<p>由于PHP进程启动时需要对信号进行处理，首先我们了解一下信号的基本概念。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.1.1 信号处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>UNIX信号有1～63个，其中编号为1～31的信号为传统UNIX支持的信号，是不可靠信号（非实时信号），编号为32～63的信号是后来扩充的，是可靠信号（实时信号）。不可靠信号和可靠信号的区别在于前者不支持排队（多次发送），可能会造成信号丢失，而后者不会</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表7-1 UNIX信号对照表[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在以上列出的信号中：1）程序不可捕获、阻塞或忽略的信号有SIGKILL和SIGSTOP；2）不能恢复至默认动作的信号有SIGILL和SIGTRAP；3）默认会导致进程流产的信号有SIGABRT、SIGBUS、SIGFPE、SIGILL、SIGQUIT、SIGSEGV、SIGTRAP、SIGXCPU和SIGXFSZ；4）默认会导致进程退出的信号有SIGALRM、SIGHUP、SIGINT、SIGKILL、SIGPIPE、SIGPROF、SIGSYS、SIGTERM、SIGUSR1、SIGUSR2和SIGVTALRM；5）默认会导致进程停止的信号有SIGSTOP、SIGTSTP、SIGTTIN和SIGTTOU；6）默认进程忽略的信号有SIGCHLD、SIGPWR、SIGURG和SIGWINCH。在PHP 7进程启动时，会对一些信号进行屏蔽，另外FPM的master进程会监听一些信号，对worker进行处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>信号处理还需要了解3个重要函数，如表7-2所示。表7-2 UNIX信号处理函数[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）可靠信号（≥34）不会丢失，N个可靠信号经过排队，在信号处理的时候仍然是N个。非可靠信号（＜34）会丢失，N个非可靠信号经过排队，在信号处理的时候是1个。2）sigprocmask系统调用是设置进程的信号掩码的。信号掩码的意义是，掩码中的信号会进入队列排队处理。3）对于2）中进入队列的信号，进程可以通过sigsuspend(&amp;newMask)从队列中取出阻塞的信号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>信号分为可靠信号和非可靠信号，非可靠信号发送多次会丢失，只保留1个。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SAPI提供了一个接口，使得PHP可以和其他应用交互数据。只要按照SAPI的接口规范，就可以编写不同的运行模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.1.2 SAPI简介</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SAPI（Server Application Programimg Interface，服务端应用编程接口）相当于PHP外部环境的代理器。PHP可以应用在终端上，也可以应用在Web服务器中，应用在终端上的SAPI就叫作CLI SAPI，应用在Web服务器中的就叫作CGI SAPI。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SAPI有一个非常核心的数据结构——_sapi_module_struct，它是在文件main/SAPI.h中定义的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于_sapi_module_struct这个结构体，每种模式都定义了这个结构体的实现，比如在FPM中：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在CLI里面同样有定义：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于每种模式定义的sapi_module_struct，在PHP的生命周期中，会调用其中定义的函数指针来实现各自的功能。以FPM模式下的sapi_cgi_read_cookies为例，调用这个函数可以读取cookie的信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CLI和FPM都是基于SAPI的实现，都定义了sapi_module_struct结构。SAPI的结构是我们分析PHP 7生命周期的基础，另外还有一个重要的数据结构——sapi_globals，其对应的宏为SG(v)，这个结构体中的变量跟生命周期相关，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.1.3 SAPI核心结构SG(v)</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>宏定义SG(v)用于取sapi_globals成员变量的值，代码如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>sapi_globals对应的结构体为sapi_globals_struct</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于FPM模式，比较重要的部分是sapi_request_info request_info，对应了HTTP协议中的很多字段。</p>
</blockquote>
</blockquote>
<p>◆ 7.2 CLI模式的生命周期</p>
<blockquote>
<blockquote>
<p>7.2 CLI模式的生命周期</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从版本4.3.0开始，PHP支持一种新类型的CLI SAPI, CLI意为Command Line Interface，即命令行接口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该CLI SAPI模块主要用于PHP的外壳应用开发。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在CLI模式下，PHP的执行过程主要分为5大阶段，分别是模块初始化、请求初始化、执行、请求关闭和模块关闭。这5个阶段分别对应php_module_startup、php_request_startup、php_execute_script、php_request_shutdown以及php_module_shutdown</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图7-2 PHP 7生命周期示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.1 模块初始化阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在模块初始化阶段之前，首先调用sapi_startup(sapi_module)，对sapi_model进行一些初始化工作，其中sapi_model对应的是7.1.2节中_sapi_module_struct的实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过调用sapi_model的startup函数，CLI调用了php_cli_startup函数，该函数又调用了php_module_startup函数，也就是对应的模块初始化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>看一下php_module_startup的具体功能，如图7-3所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>core_globals也是在全局变量区申请的，维护了比较多的变量，其大小为656字节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的“编译”入口是函数compile_file，这是词法和语法解析的入口；而对opcodes进行执行的入口是execute_ex函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>模块初始化阶段做的事情比较多，对于FPM模式，进程启动后只会进行一次模块初始化，进而进入循环，进行请求的初始化。同样对于CLI模式，模块初始化完成后，也是进入请求初始化阶段。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.2 请求初始化阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>请求初始化阶段的函数入口为php_requet_startup，其执行过程如图7-7所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.3 执行阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>执行阶段的入口函数是php_execute_script，该函数会调用zend_execute_scripts，该函数通过调用compile_file对PHP代码进行词法和语法分析，生成AST，进而生成op_array。执行阶段的执行过程如图7-8所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图7-8 执行阶段的执行过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在zend_compile中，首先通过函数zendparse进行词法和语法分析，生成抽象语法树，然后调用init_op_array、zend_compile_top_stmt和pass_two函数将抽象语法树转为op_array，进一步调用zend_execute在Zend虚拟机中执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>执行阶段完成后，会进入请求关闭阶段。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.4 请求关闭阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>请求关闭阶段的入口函数为php_request_shutdown，整个阶段分成了16步</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>请求关闭阶段，一共有16个过程，PHP 7源码对此有清晰的注释，主要工作如下。1）调用各模块中注册的关闭函数和析构函数。2）将输出缓冲器中的内容输出。3）调用所有扩展注册的钩子RSHUTDOWN函数。4）销毁request相关的全局变量，关闭编译器和执行器。5）还原ini配置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>完成这些工作后，FPM模式会循环等待请求到来，继续进行请求的初始化，而CLI模式将进入最后一个阶段，即模块关闭阶段。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.5 模块关闭阶段</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>模块关闭阶段的入口函数为php_module_shutdown，这个阶段与模块初始化阶段基本是相反的，用于对各种初始化的变量进行销毁。具体执行过程如图7-10所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>主要工作如下：1）调用加载模块对应的flush函数，清理持久化符号表，销毁所有模块；2）关闭与php.ini配置文件解析相关的变量和函数；3）关闭内存管理和垃圾回收机制；4）关闭output输出相关的信息；5）销毁core_globals。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>到此，PHP 7生命周期的5个阶段，我们整体过了一下，并了解了每个阶段的主要工作，同时建议读者使用gdb在CLI模式下，按照本节给出的函数调用关系，从main函数开始，一步一步地调试一下，能更深刻地理解整个PHP 7的生命周期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>动手使用gdb按照函数调用关系一步一步地跟踪，能得到比书中更多的收获，也能更好地阅读和理解PHP 7的源码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.2.6 其他工作</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当我们在CLI模式下执行PHP的时候，可以输入特定参数执行特定的工作，比如php -v php -l等，其全部定义在函数php_cli_usage中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们以php -l为例来看一下其具体工作</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个命令调用了zend_compile_file做词法和语法分析，以校验语法的正确性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们了解了PHP 7生命周期的5大阶段，分别是模块初始化阶段、请求初始化阶段、执行阶段、请求关闭阶段以及模块关闭阶段。模块初始化阶段会调用扩展注册的钩子函数，会调用不同模式对应的初始化函数，这样方便了开发者开发扩展，以及各种不同模式的开发，比如常见的CLI模式和FPM模式，以及其他模式的开发，这些模式都是基于SAPI实现的。</p>
</blockquote>
</blockquote>
<p>◆ 7.3 FPM模式的生命周期</p>
<blockquote>
<blockquote>
<p>[插图]图7-11 FPM模式的生命周期FPM（FastCGI Process Manager）是一个FastCGI进程管理器，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从PHP 5.3.3开始，PHP集成了PHP-FPM。PHP-FPM提供了更好的PHP进程管理方式，可以有效控制内存和进程，支持平滑重启PHP及重载PHP配置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与CLI模式类似，FPM模式的生命周期也有5个阶段，但是又与CLI模式的生命周期不同，因为FPM是常驻内存的进程，所以其模块初始化只做一次，便进入循环，而模块关闭在进程退出时也只做一次，如图7-11所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）调用php_module_startup，加载所有模块。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）进入循环，调用fcgi_accept_request实际调用的是accept，阻塞等待请求；如果有请求进来，会被唤起，进入php_request_startup，初始化请求。为了防止多个进程对accept进行抢占，出现“惊群”情况，增加了锁机制：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>FCGI_LOCK/FCGI_UNLOCK在Linux下已经没有实现了：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这是因为在Linux 2.6内核上，阻塞版本的accept系统调用已经不存在“惊群”了。3）进入php_execute_script，对脚本执行编译。4）调用php_request_shutdown关闭请求，继续进入循环。5）如果进程退出，调用php_module_shutdown关闭所有模块。6）如果请求次数大于max_requests，则跳转5。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Linux 2.6内核上，阻塞版本的accept系统调用已经不存在“惊群”了。大家可以写一个简单的程序测试下，并在父进程中绑定、监听，然后fork出子进程，所有的子进程都会尝试接受（accept）这个监听句柄。这样，当新连接过来时，大家会发现，仅有一个子进程返回新建的连接，其他子进程继续休眠在accept调用上，没有被唤醒。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>具体分析一下整个过程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.3.1 多进程管理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP-FPM是多进程的服务，其中有一个master进程（做管理工作）和多个worker进程（处理数据请求）。下面我们从多进程管理角度对PHP-FPM展开阐述，首先讨论master进程和worker进程是如何创建的，然后讨论进程之间是如何通信的，比如worker进程意外退出，master进程是如何感知并重新创建新的worker进程的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．进程创建</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们以Nginx+PHP-FPM方式为例，讲一下整个Web请求的过程。一般情况下，Nginx会根据服务器的CPU内核数设置worker的进程数，而PHP-FPM的进程有三种设置方式：static、dynamic和ondemand，可以在php-fpm.conf里面设置：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）static模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>static模式始终会保持一个固定数量的子进程，这个数量由pm.max_children定义，比如线上，我们可以将其设置为512个worker，我们可以观察PHP-FPM的进程空闲数，如图7-12所示。[插图]图7-12 PHP-FPM空闲数从图7-12可以看出，随着请求量的变化，PHP-FPM的空闲数也发生了变化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）dynamic模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>子进程的数量是动态变化的。启动时，会生成固定数量的子进程，可以理解成最小子进程数，通过pm.start_servers控制，而最大子进程数则由pm.max_children控制，子进程数会在pm.start_servers～pm.max_children范围内变化，另外，闲置的子进程数还可以由pm.min_spare_servers和pm.max_spare_servers两个配置参数控制。换句话说，闲置的子进程也可以有最小数目和最大数目，而如果闲置的子进程超出了pm.max_spare_servers，则会被杀掉。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）ondemand模式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种模式和dynamic模式正好相反，把内存放在第一位，每个闲置进程在持续闲置了pm.process_idle_timeout秒后就会被杀掉。有了这个模式，到了服务器低峰期，内存自然会降下来，如果服务器长时间没有请求，就只会有一个PHP-FPM主进程，当然其弊端是，遇到高峰期或者pm.process_idle_timeout的值太小的话，无法避免服务器频繁创建进程的问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3种模式对应的定义如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们了解了PHP-FPM的3种运行模式，接下来继续介绍整个webserver的运行过程，如图7-13所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图7-13 Client/Nginx/PHP-FPM通信示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Client通过HTTP方式请求Nginx，请求由Nginx的worker进行处理，转成对应的FastCGI，请求FPM, accept由FPM的worker进程处理，执行完毕再返回给Nginx, Nginx再进一步返回给Client。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>详细讨论一下PHP-FPM进程是怎么启动的。我们使用gdb来启动PHP-FPM，其中PHP-FPM在sbin目录下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在main函数入口处增加断点，然后使用r -y etc/php-fpm.conf指定加载的配置文件，此时启动的进程并不是master进程，而是calling process进程，callingprocess进程会fork出master进程，并退出。为了能够跟随master进程，我们使用gdb里面的命令，以对子进程进行跟踪：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>输入c命令（continue）：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们可以看到，calling process会在fpm-init函数中将master进程fork出来，同时自己退出。对应的代码如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于父进程（calling process）, fork返回的pid是master进程的pid，会走到default逻辑中，最终会退出进程；而master进程会在fpm_run函数中fork子进程（worker进程）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在函数fpm_children_make中，我们可以看到static、dynamic、ondemand这3种模式的不同之处，代码如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从代码中可以看出，在static模式下，会走到最后一个else，进程数为pm_max_children；在dynamic模式下，启动时，进程数为pm_start_servers，而在ondemand模式下，启动时，进程数为0。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>php-fpm启动时，首先启动一个calling process，然后由calling process创建master进程，master进程根据需要创建的子进程数创建work进程，其中master进程的title为php-fpm: master process，而worker进程的名称为php-fpm: pool name，其中name在php-fpm.conf里面设置：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>整个php-fpm进程的创建过程如图7-14所示。[插图]图7-14 PHP-FPM进程的创建过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>分析一下进程是如何管理的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．进程管理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>woker创建完成后，对请求的处理工作都会由worker进程来进行，而master进程负责对worker进程的监控和管理，比如php-fpm reload和php-fpm stop分别用来重新加载和停止FPM。这部分工作是通过信号机制进行的，比如我们执行reload命令时，对主进程发送了SIGUSR2信号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>master进程的信号，其初始化工作是在fpm_init中实现的，具体函数为fpm_signals_init_main</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该函数主要做了两件事情。1）创建了一个双向的管道sp，并将其设置为非阻塞模式。2）设置了SIGTERM、SIGINT、SIGUSR1、SIGUSR2、SIGCHLD、SIGQUIT信号的回调函数sig_handler</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当master进程收到信号时，会将其转换为对应的char，然后将char写入管道的一端，那么谁读取呢？答案是fpm_event_loop函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该函数从管道的另一端读取数据，并回调函数fpm_got_signal。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）对于SIGCHLD信号，该信号是由worker退出时发送的，master进程收到这个信号后调用fpm_children_bury函数对worker进程进行善后工作；同时调用fpm_children_make函数按照不同模式启动worker进程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）对于SIGUSR1信号，调用的是fpm_log_open函数，重新打开日志文件，然后fpm_pctl_kill_all杀掉worker进程；这时候又会收到SIGCHLD信号，进行步骤1。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在大流量请求的情况下，切分日志时，会向php-fpm发送SIGUSR1信号，此时会有批量的worker进程被杀死，在重启完毕前，worker进程数会瞬间变少，这时候会出现请求响应变慢的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）对于SIGINT、SIGTERM、SIGQUIT和SIGUSR2信号，调用的都是fpm_pctl函数，该函数有两个参数，第一个参数表示状态值，第二个参数表示操作类型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>worker进程的信号处理，其实现是在函数中调用fpm_signals_init_child</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．计分板</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了熟练地掌握各woker进程的工作情况，FPM提供了一个计分板的功能，其核心结构体为fpm_scoreboard_s和fpm_scoreboard_proc_s，具体定义如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>fpm_scoreboard_s结构记录FPM所有worker进程的汇总统计信息，而fpm_scoreboard_proc_s对应的是各worker进程的详细信息。FPM提供了3个函数来统计计分。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）fpm_scoreboard_update函数：修改计分板里的各指标，为了保证原子性，使用了锁机制fpm_spinlock，分别对两种action进行处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>7.3.2 网络编程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>Socket创建</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>calling process进程调用fpm_init中的fpm_unix_init_main函数fork出master进程，master进程调用fpm_sockets_init_main函数进行网络的监听</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Linux中，Nginx服务器和PHP-FPM可以通过TCP Socket和UNIX Socket两种方式实现。其中，UNIX Socket是一种终端，可以使同一台操作系统上的两个或多个进程进行数据通信。这种方式需要在Nginx配置文件中填写PHP-FPM的pid文件位置，效率要比TCP Socket高。TCPSocket的优点是可以跨服务器，当Nginx和PHP-FPM不在同一台机器上时，只能使用这种方式。配置方式如下：[插图]</p>
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
<p>7.3.3 FastCGI协议</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>FastCGI是一种协议，它是建立在CGI/1.1基础之上的，把CGI/1.1里面要传递的数据通过FastCGI协议定义的顺序和格式进行传递。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>阐述一下FastCGI协议的内容</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．消息类型</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>FastCGI协议分为10种类型，具体定义如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>整个FastCGI是二进制连续传递的，定义了一个统一结构的消息头，用来读取每个消息的消息体，方便消息包的切割。一般情况下，最先发送的是FCGI_BEGIN_REQUEST类型的消息，然后是FCGI_PARAMS和FCGI_STDIN类型的消息，当FastCGI响应处理完后，将发送FCGI_STDOUT和FCGI_STDERR类型的消息，最后以FCGI_END_REQUEST表示请求的结束。FCGI_BEGIN_REQUEST和FCGI_END_REQUEST分别表示请求的开始和结束，与整个协议相关。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．消息头</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以上10种类型的消息都是以一个消息头开始的，其结构体定义如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其中：1）version标识FastCGI协议版本。2）type标识FastCGI记录类型。3）requestId标识消息所属的FastCGI请求，计算方式如下：[插图]所以requestId的范围为0～216-1，也就是0～65535。4）contentLength是标识消息的contentData组件的字节数，计算方式跟requestId类似，范围同样是0～65535。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）paddingLength是标识消息的paddingData组件的字节数，范围是0～255；协议通过paddingData提供给发送者填充发送的记录的功能，并且方便接受者通过paddingLength快速地跳过paddingData。填充的目的是允许发送者更有效地处理保持对齐的数据。如果内容的长度超过65535字节怎么办？答案是可以分成多个消息发送。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="3">
<li>FCGI_BEGIN_REQUEST</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．名-值对</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5．请求协议</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6．响应协议</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>fcgi_finish_request调用fcgi_flush, fcgi_flush中封装一个FCGI_END_REQUEST消息体，再通过safe_write写入Socket连接的客户端描述符。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>到此我们就完全掌握了FastCGI协议。整个FPM模式实际上是多进程模式，首先由calling process进程fork出master进程，master进程会创建Socket，然后fork出worker进程，worker进程会在accept处阻塞等待，请求过来时，由其中一个worker进程处理，按照FastCGI模式进行各阶段的读取，然后解析PHP并执行，最后按照FastCGI协议返回数据，继续进入accept处阻塞等待。另外，FPM建立了计分板机制，可以关注全局和每个woker的工作情况，方便使用者监控。</p>
</blockquote>
</blockquote>
<p>◆ 7.4 其他模式</p>
<blockquote>
<blockquote>
<ol>
<li>CGI模式</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CGI即通用网关接口（Common Gateway Interface），通俗地讲，CGI就是将Web服务器和PHP执行程序连接起来，把接收的指令传递给PHP执行程序，再把服务器执行程序的结果返还给Web服务器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图7-20 CGI示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于每一个用户请求，都会先创建CGI的子进程，然后处理请求，处理完后结束这个子进程，这就是fork-and-execute模式。用户请求数量非常多会大量挤占系统的资源（如内存、CPU时间等），造成效率低下。所以，对于采用CGI模式的服务器，有多少连接请求，就会有多少CGI子进程，子进程反复加载也是导致CGI性能低下的主要原因，这也是FastCGI出现的原因。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="2">
<li>Embed模式</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP提供了一个Embed SAPI，也就是说，PHP允许在C/C++语言中调用PHP/ZE提供的函数，编译时增加--enable-embed生成。该模式对外提供了两个API，即php_embed_init和php_embed_shutdown。php_embed_ini用于完成模块初始化和请求初始化，php_embed_shutdown用于完成请求关闭和模块关闭工作。实现非常简单，可以在C程序里面调用PHP，具体可以参考博客《使用PHP Embed SAPI实现Opcodes查看器》一文，这里不再展开。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="3">
<li>PHPDBG模式</li>
</ol>
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
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<p>◆ 8.1 配置文件简介</p>
<blockquote>
<blockquote>
<p>PHP在编译安装后，其源码目录下会有两个配置文件，分别是php.ini-production和php.ini-development，这两个文件有什么区别呢？其实它们是PHP官方提供的两个配置好的默认配置文件，php.ini-production有一些高级别的安全设置，可以用做生产环境，php. ini-development的安全设置级别低一些，用做开发环境。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表8-1 配置文件对照表[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP安装以后，安装程序不会自动生成一个默认的配置文件，需要手动把php.ini-production或者php.ini-development复制到PHP的安装目录下</p>
</blockquote>
</blockquote>
<p>◆ 8.2 配置基本语法</p>
<blockquote>
<blockquote>
<ol>
<li>sectionphp.ini本身是一个文本文件，其内部分为多个section。section名字使用方括号括起来，如[PHP]、[date]等。section名字之后是配置项。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>两个比较特殊的section可以分别针对PATH和HOST来做个性化配置，不过这种配置方式只在CGI/FastCGI模式下生效。当我们有多个项目共用一个配置文件并且有个性化配置需求时，就可以采用这种方式。示例：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该配置表示当请求的PHP文件位于/dir目录下时，post_max_size上限为“20M”。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该配置表示当请求的HOST为localhost时，post_max_size上限为“20M”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这两种方式的配置项无法被覆盖，也无法被ini_set函数动态修改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．设定范围</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP中的配置项不是任何时候任何地方都允许修改的，每个配置项有其自己所属的模式，模式一共有4种。❑ PHP_INI_USER：可在用户脚本（如ini_set）或Windows注册表（自PHP 5.3起）以及．user.ini中设定。❑ PHP_INI_PERDIR：可在php.ini、.htaccess或httpd.conf中设定。❑ PHP_INI_SYSTEM：可在php.ini或httpd.conf中设定。❑ PHP_INI_ALL：可在任何地方设定。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．配置项</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置项的格式如下：[插图]指令名大小写敏感，如foo=bar不同于FOO=bar。value的值可以是以下形式：❑ 字符串，如“foo”。❑ 数字，如0、1、1.2。❑ PHP常量，如E_ALL、M_PI。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ ini常量，如On、Off、True、False、Yes、No、None。❑ 表达式，如E_ALL &amp; ～E_NOTICE。❑ 已经存在的配置项，如${open_basedir}，即可以以变量的形式引用已经存在的配置项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当配置项为布尔值的时候，可以使用1、On、True、Yes来表示真，使用0、Off、False、No来表示假。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>value为空或者none，表示将该配置项设置为空：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5．表达式</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP配置文件中的表达式仅有如下几种形式：|（位或）、^（位异或）、&amp;（位与）、～（位非）、！（逻辑非）。</p>
</blockquote>
</blockquote>
<p>◆ 8.3 配置文件的加载</p>
<blockquote>
<blockquote>
<p>CLI是PHP SAPI的一种，也会经历SAPI startup的阶段，配置文件的解析也是在这个过程中进行</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP module的启动过程中调用php_init_config函数来完成配置文件的解析。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP配置文件的解析主要分为文件解析和字符串解析，其主要过程都在这个函数中：1）初始化默认配置，如果当前SAPI存在默认配置的初始化函数，则调用该函数来初始化默认配置。例如，CLI模式的默认配置函数为sapi_cli_ini_defaults。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）初始化extension_lists来保存配置文件中的扩展。3）解析主配置文件。4）解析其他配置文件。5）解析配置字符串。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP有3个命令行参数来控制配置项，分别如下。① -c：指定配置文件，例如php -c /etc/php7.ini test.php。② -d：指定配置参数，例如php -d &quot;memory_limit=256m&quot; -d &quot;post_max_size=30m&quot; test.php。③ -n：忽略配置文件，例如php -n test.php。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面介绍配置文件的加载方式和优先级。（1）主配置文件配置解析的第一步是搜索指定路径或者默认路径下的配置文件，配置文件搜索的优先级从高到低如下。1）使用-c指定的配置文件，使用该方式指定后不再搜索后边的目录，配置文件名可以自定义。2）使用PHPRC环境变量指定的配置文件，配置文件名可以自定义，-n参数下无效。3）在当前目录下搜索，-n参数下无效。4）在PHP安装目录bin和etc下搜索，-n参数下无效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）第2、3、4三种方式指定的目录下，如果php-${sapi}.ini存在，使用这个配置文件，如php-cli.ini，否则使用php.ini。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）其他配置文件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果有很多配置项但是又不想修改默认的配置文件该如何处理呢？PHP提供了以下两种方式来扩展配置，通过这两种方式指定的目录下的任何以．ini为扩展名的文件（包括隐藏文件和链接文件）都会按照文件名称的字母顺序被加载解析。其配置项会覆盖主配置文件（注意：这两种方式互斥，环境变量的方式优先，-n参数下无效）。1）在安装PHP时由--with-config-file-scan-dir参数指定扩展配置文件的目录。2）如果在安装时没有添加--with-config-file-scan-dir参数并且环境变量中存在PHP_INI_SCAN_DIR，则在该路径下寻找。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果同时存在主配置文件和其他配置文件，PHP会多次调用这个函数来完成配置文件的解析。其解析过程主要是词法和语法的解析，PHP将解析后的配置以key-value的形式保存到名为configuration_hash的全局hashtable中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>非PHP的配置项只会保存在configuration_hash，通过ini_get函数无法获取到。不过，PHP提供了get_cfg_var函数来获取PHP配置文件中的自定义配置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图8-1 完整的解析顺序图</p>
</blockquote>
</blockquote>
<p>◆ 8.4 扩展配置</p>
<blockquote>
<blockquote>
<p>在实际的项目开发中，我们可能会用到各种扩展，如date、mbstring、mysqli等，这些扩展其实也有着属于自己的配置项，例如，php.ini中的date section部分就是date模块的配置：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在配置文件的解析过程中，会把配置文件中的PHP扩展和Zend扩展解析出来放在名为extension_lists的结构中以供后续加载。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在配置文件解析完成以后，开始加载PHP核心默认配置项（display_errors、post_max_size等）和Zend默认项（error_reporting、zend.enable_gc等）。其解析的结果保存在名为registered_zend_ini_directives的全局hashtable中，EG(ini_directives)也指向该hashtable。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在核心的默认配置解析完成后，开始加载静态编译的扩展和保存到extension_lists中的动态扩展。</p>
</blockquote>
</blockquote>
<p>◆ 8.5 运行时的配置</p>
<blockquote>
<blockquote>
<p>在PHP代码中，可以通过ini_set函数动态修改一些配置项，这又是怎么做的呢？接下来看下ini_set函数的具体实现。ini_set函数的定义在ext/standard/basic_functions.c中：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数主要有3个阶段。1）到已经解析完成的配置EG(ini_directives)中获取要修改的配置项的当前值。这里注意，如果要修改的配置项不在EG(ini_directives)中，则无法通过这个函数来动态添加配置项。2）判断在开启open_basedir的情况下，要修改的选项是否在这个配置项允许的范围内。3）修改配置：修改配置的函数zend_alter_ini_entry_ex有如下几个阶段。</p>
</blockquote>
</blockquote>
<p>◆ 9.1 内存管理的意义</p>
<blockquote>
<blockquote>
<p>内存管理是指对其分配、使用和回收的管理。在硬件层面，内存管理涉及对RAM等数据存储硬件的管理；在操作系统和应用层面，则是保障各个程序内存的正常分配和回收。PHP 7的内存管理是在C的内存函数库之上做了一层封装</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机系统的运行无时无刻不依赖内存，所以内存管理是否安全、高效也严重影响着系统性能的表现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>既然操作系统已经提供了一套内存管理的函数，那为什么PHP 7还要自己实现一套内存管理方案呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的使用者不需要像C/C++那样手动申请和释放内存。在开发者对内存随用随取（定义对象、数组等）的背后，是PHP 7内核的内存管理提供的支撑，让开发者可以专注于于业务逻辑，而不用关心内存的申请和释放，大大提高了业务支撑的效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>向操作系统申请内存以及释放内存、回收内存，会产生用户态和内核态的切换，是高耗时的操作。PHP 7内存管理器充当了应用层和操作系统内核的中间人，大大减少应用直接向内核频繁申请小块内存的操作，同时PHP 7内存管理器会择时释放，提升系统的整体性能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>很重要的一点是，PHP 7内存管理还会减少内存“碎片化”问题。没有内存管理器，如果PHP程序持续运行、反复申请与释放内存导致连续内存产生大量碎片，会使得内存利用率降低；内存管理器的内存池技术能按块大小分级分配和回收，减少碎片化。图9-1是PHP 7内存管理器示意图。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图9-1 PHP 7内存管理器示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP脚本运行所需的内存空间不是直接从系统申请，而是调用Zend Memory Manager（Zend内存管理器，以下简称MM）提供的一系列接口函数（如zend_mm_alloc_small）申请：如果MM中的可用内存够用，直接分配给PHP程序；如果MM中的可用内存不够，MM再从系统申请。可见这样能有效减少系统调用的次数，并优化内存空间的使用效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般都认为C\C++开发要难于PHP，很大程度上，难度在于内存管理这一块。C\C++开发时，要自己管理动态内存，自己申请，自己释放，申请了却没有释放，会造成内存泄漏，不断浪费内存以致拖慢系统；内存使用越界，会让程序崩溃。虽然C++中的STL库和BOOST库提供了多款智能指针用于管理内存，但是不同的智能指针有不同的应用场景，PHP的内存管理把工程师从内存管理的梦魇中解救出来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认的系统分配和释放内存算法自然也考虑了性能，然而，为了应付更复杂、更广泛的情况，这些内存管理算法的通用版本需要做更多的额外工作。而对于某一个具体的应用程序来说，适合自身特定的内存分配释放模式的自定义内存则可以获得更好的性能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所以我们需要内存池技术，当申请者第一次申请内存时，直接申请一块大块内存（通常是一页），将此次申请需要的内存部分返回给申请者，并将剩下的内部放到池子中，以后申请者再申请内存时，直接在剩下的部分中选取合适的大小返回给申请者。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存池提供了一个更有效率的解决方案，即预先规划一定数量的内存区块，使得整个程序可以在运行期规划（allocate）、使用（access）、归还（free）内存区块。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内在池不仅在用户态应用程序中广泛使用，同时在Linux内核也广泛使用，在内核中有不少地方内存分配不允许失败。所以在这种情况下，为了确保内存能够成功分配，内核开发者创建了一个内存池，只分配给此情况使用，此方法虽然浪费了内存，但是可以从根本上保证系统更加稳定。</p>
</blockquote>
</blockquote>
<p>◆ 9.2 内存管理的准备知识</p>
<blockquote>
<blockquote>
<p>PHP 7在内存管理上的CPU时间节省达到了21%，提升巨大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的Zend MM借鉴了jemalloc和tcmalloc这两个成熟的内存管理方案。两者都在业内广泛应用：jemalloc是Firfox浏览器的默认内存管理器，而tcmalloc则是Chrome和Safari的默认内存管理器。抛开jemalloc和tcmalloc的实现细节，MM和“前辈”的内存分配思想是一致的：系统申请大块内存，再按固定的几种规格分割成较小的内存块，由内存池统一管理。当调用方申请内存时，从池子中匹配已经预分配的合适大小的内存块返回。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>9.2.1 基本概念</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的MM的核心代码在zend_alloc.c中实现，它维护了3种规格的内存，分别是chunk、page、slot，其中一个chunk大小是2MB，一个page是4KB，一个chunk可以划分成多个page，而一个page又可划分成多个slot，每种规格的内存的应用场景不同，因此它们的分配方式有所不同，对于MM而言，只有chunk是通过malloc的方式向系统申请内存的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP是C实现的，在堆中运行。Zend MM也在堆内存运行，它根据完善的运行机制管理着内存的申请和释放。对于堆内存管理而言，chunk是最小操作单位。从本质上来说，所有类型的chunk都是内存中一块连续的区域，一个chunk的大小是2MB。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对应于PHP中，在zend_alloc_sizes.h中有对page和chunk大小的定义：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>page是在chunk中分配的，那么一个chunk可以分为2MB/4KB=512个page</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图9-2 chunk与page示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 7中，对于chunk大块内存的申请是使用mmap函数实现的，其中mmap函数原型如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的MM将申请内存按大小分成了3类：small内存、large内存、huge内存。1）small内存：小于等于3KB的内存。2）large内存：大于3KB且小于等于（2MB-4KB）的内存，可以对应整数倍的page，之所以要减掉4KB一个page的大小，后面会详细展开。3）huge内存：大于2MB-4KB的内存，可以直接对应整数倍的chunk。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与mmap相反的操作是int munmap(void *start, size_t length)，用来取消参数start所指的映射内存起始地址，参数length则是欲取消的内存大小，该函数在释放内存的时候使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>9.2.2 内存对齐</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在用C/C++进行软件开发、申请内存时，编译器可以帮我们实现内存对齐，虽然看上去浪费了内存，但是提升了CPU访问内存的速度。PHP 7内存大小的对齐，和C/C++编译器的内存对齐作用相近。在PHP7的内存池管理中，比如我们申请300B的内存，如果以256B对齐，则对齐后的内存应该是512B（256的2倍）。</p>
</blockquote>
</blockquote>
<p>◆ 9.3 内存管理的数据结构</p>
<blockquote>
<blockquote>
<p>PHP 7内存管理中用到了多个结构体，其中核心的结构体有_zend_mm_heap、_zend_mm_page、_zend_mm_chunk。其中_zend_mm_page最简单，对应的是4KB的char数组</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>9.3.1 _zend_mm_heap</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其主要数据结构。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）size/real_size:size代表的是MM当前申请的已使用的内存，real_size还包括申请的未使用的内存；可以通过PHP的函数memory_get_usage来获取，其PHP函数原型如下：[插图]$real_usage默认为false，只返回使用的内存大小；对于true的情况，会返回包括没有使用的分配内存的大小。在PHP 7的源码中，有对应的实现：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从源码中，可以看出，当$real_usage为true时，返回的是real_size；当$real_usage为false时，返回的是size; size和real_size会在申请和释放内存时进行修改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）peak/real_peak:peak是emalloc上报的内存峰值，而real_peak是MM在本进程申请的内存峰值；可以通过PHP的函数memory_get_peak_usage来获取，其PHP函数原型如下：[插图]$real_usage默认为false，只返回emalloc上报的内存峰值大小；对于true的情况，会返回内存分配峰值的大小；在PHP 7的源码中，有对应的实现：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当$real_usage为true时，返回的是real_peak；当$real_usage为false时，返回的是peak；同样peak和real_peak会在申请内存和释放内存时进行修改。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）free_slot：指针数组，存储30种规格的small内存链表的首地址</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）limit：存储对MM可申请内存的最大值，MM每当向系统申请chunk或huge内存时，会判断申请后的内存值是否大于limit，如果大于，则进行垃圾回收。该参数可以通过在php.ini中修改memory_limit配置项设置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）overflow：当要申请的内存总数超出MM的limit时，先进行垃圾回收，如果回收失败，则判断overflow是否为1，如果为1，则抛出异常，中断进程（PHP项目中经常遇到的“Allowed memory sizeof ** bytes exhausted (tried to allocate ** bytes)”就是这样抛出来的）。6）main_chunk：双向链表，存储使用中的chunk的首地址。7）cached_chunks：双向链表，缓存的chunk的首地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>8）chunks_count：使用中的chunk个数，也就是链表main_chunk中的元素个数。9）peak_chunks_count：此次HTTP请求中申请的chunk个数最大值，初始化为1，且每次请求开始，都会重置为1。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10）cached_chunks_count：缓存中的chunk个数，也就是链表cached_chunks中的元素个数。11）avg_chunks_count：历次请求使用chunk的个数平均值，初始化为1.0，每次请求结束时，会重新计算此值，置为avg_chunks_count和peak_chunks_count的平均值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>12）huge_list：用以挂载分配的大块内存的单向列表，方便后续MM关闭时释放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>9.3.2 _zend_mm_chunk</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的MM是一个多级内存分配器——预先定义内存块级别，按需要分配空间的大小找到对应级别，对齐分配。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>chunk大小为2MB；每个chunk可以切割为512个page，一个page是4KB。在chunk内部，以page为单位进行管理。</p>
</blockquote>
</blockquote>
<p>◆ 9.4 内存管理的详细实现</p>
<blockquote>
<blockquote>
<p>在PHP 7生命周期中，SAPI调用php_module_startup时，会调用start_memory_manager，继而调用alloc_globals_ctor，然后调用MM的初始化函数zend_mm_init</p>
</blockquote>
</blockquote>
<p>◆ 9.5 内存回收</p>
<blockquote>
<blockquote>
<p>内存使用完之后必须要进行释放，通过huge方式和large方式申请的内存的释放比较简单，前面已经讲过。这里主要介绍small内存的释放。释放small内存的一个slot时，并没有判断此slot所在的连续page中的slot是否已全部释放。因为small内存的申请和释放比较频繁，每次都判断不太划算，但MM在申请chunk失败后，会进行内存整理。如果一次申请small内存申请到的连续page中的slot已全部释放，则释放这几个page，再继续申请chunk。</p>
</blockquote>
</blockquote>
<p>◆ 9.6 本章小结</p>
<blockquote>
<blockquote>
<p>研究探讨了PHP 7的内存管理的实现，我们将内存管理比作面包店，可以有利于读者形象地理解内存池管理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假定场景：① 面包店；② 各种规格大小的面包；③ 成袋的面粉；④ 存储面粉的仓库。我们向系统申请内存，就好比去面包店购买面包，那么面包店会如何做呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们到面包店要购买一个牛角面包，一种比较差的办法是，面包店的工作人员去仓库里取一袋面粉，然后和面、作模、烘焙、最后出炉，这类似于malloc。顾客需要等待一定的时间，另外每次只烘焙一个面包，效率是很低的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实际面包店的做法是事先做好不同品种的面包，当顾客购买面包时，选择某种规格的即可。这非常类似于内存管理中的small内存，建立一些规格的内存，当申请者申请时，返回最小的符合申请者要求的内存。那么对于large内存，一个page类似于一整袋面粉，而chunk则相当于仓库里摆放512袋面粉的货架。这样类比起来更容易理解，并且感受到了技术都来源于生活。</p>
</blockquote>
</blockquote>
<p>◆ 第10章 词法和语法分析</p>
<blockquote>
<blockquote>
<p>PHP如何执行一段代码呢？以PHP 7为例，当PHP收到一个请求或执行命令时，会根据参数去加载对应的PHP代码，进行词法和语法分析，生成AST，再生成字节码，PHP中称为opcodes，继而在Zend虚拟机中逐行执行字节码，得到结果返回。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 在PHP 7中，词法分析器代码是使用Re2c[插图]生成的，Re2c将PHP 7源码中的zend_language_scanner.l文件编译为zend_language_scanner.c。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ PHP 7的语法分析器是使用Bison生成的，Bison将PHP 7源码中的zend_language_parser.y编译为zend_language_parser.c。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST（抽象语法树），这是PHP 7新引入的特性，而AST是编译原理中的基础概念，可以用来表达PHP代码的文法含义，同时，对AST进行深度遍历可以生成对应的opcode，以便在Zend虚拟机中执行，AST的引入为PHP解决了很多语法上的问题。</p>
</blockquote>
</blockquote>
<p>◆ 10.1 基础知识</p>
<blockquote>
<blockquote>
<p>掌握一些编译原理的基本知识</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10.1.1 编译器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图10-1 编译器示意图编译器是一个程序，是可以读取某种语言（称作源语言）编写的程序并将其翻译成一个与之等价的另一种语言（称作目标语言）的程序</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10.1.2 源程序分析</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>整个语言处理过程需要几个程序，分别是预处理器、编译器、汇编器以及装载器/连接器。其中，预处理器程序会把存储在不同文件中的程序模块集成为一个完整的源程序；编译器会把源程序编译为目标汇编程序；而汇编器会继续将目标汇编程序转换为可重定位的机器码；然后经过装载器和连接器转为绝对的机器代码。源程序分析的3个阶段如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）词法分析：又叫线性分析，从左到右读取源程序的字符，并将字符转换为一个又一个的记号，称作Token。Token是具有整体含义的字符序列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）语法分析：这个过程会把字符串或者Token在层次上划分为有一定层次的组，每个组有整体的含义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．词法分析</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在编译器中，词法分析称为线性分析，举个例子，对于如下代码：[插图]词法分析会将其分成如下几部分：1）Token a；2）赋值符号=；3）Token b；4）加号+；5）Token c；</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）乘号*；7）数字2。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于表达式里面的空格，词法分析器会将其删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>词法分析是编译的第一个阶段，主要任务是读取源程序，生成Token（其中Token可以理解为特殊的标识），提交给语法分析器使用。词法分析器收到语法分析器发出的“取下一个Token”的命令时，词法分析器继续读入源程序的字符，直到识别出下一个Token。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图10-2 词法分析器与语法分析器之间的交互</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在词法分析中，经常会使用术语“记号”（Token）、“模式”和“词素”表示特定的含义</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表10-1 Token、模式、词素对照表[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>词法分析是用正则表达式来表达和识别记号的，比如PHP 7词法分析中的正则表示如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么如何快速地判断一段文本是不是满足正则表达呢？下面我们引出编译原理中的状态转换图的概念，举个例子，对于下面的正则表达式：[插图]我们可以建立一个不确定的有穷自动机（NFA），如图10-3所示。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．语法分析</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>语法分析是进行的层次分析，称为parsing或者syntax analysis，语法分析用于进一步把源程序分组，将源程序语法短语用语法树来表示，以如下代码为例：[插图]生成的语法分析树如图10-5所示。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>整个代码的层次可以使用递归规则来表达，对于上面的语法树，我们可以定义如下规则：1）任何一个标识符都是表达式。2）任何一个数字（包括a\b\c\2）都是表达式。3）如果exp1和exp2是表达式，则exp1+exp2、exp1<em>exp2、{epx1}也是表达式。规则1和规则2是非递归的基本规则，而规则3使用递归定义了表达式，因此，c</em>2是表达式，a+c*2也是表达式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常情况下，词法分析和语法分析的界限是不确定的，决定词法分析和语法分析界限的因素是源语言是否具有递归结构，词法结构一般不要求递归，语法结构常常需要递归。那么如何规范表达语法呢？那就是BNF范式（巴科斯范式）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>BNF范式是一种用递归的思想来表述计算机语言符号集的定义规范，其法则如下：1）::=表示定义。2）“ ”双引号里的内容表示字符。3）&lt;&gt;尖括号里的内容表示语法单位。4）| 竖线两边的是可选内容，相当于or。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>正则表达式能够表达词法，对于正则的判断可以使用有穷自动机来实现，这是后面词法分析器的基础；而BNF范式能够很好地表达文法，是语法分析的基础。</p>
</blockquote>
</blockquote>
<p>◆ 10.2 词法与语法分析器</p>
<blockquote>
<blockquote>
<p>词法和语法可以使用正则表达式和BNF范式表达，而最终描述文法含义的是状态转换图，那么在做词法分析和语法分析时，我们需要维护复杂的状态转换图吗？答案是否定的，很多开源软件已经把这个工作做了，开发者只需要编写正则或者BNF范式来维护词法和语法分析代码即可，生成状态转换图的工作交给这些开源软件即可，本节会详细介绍一下词法分析器Lex、Re2c，以及语法分析器YACC和Bison的使用方法。</p>
</blockquote>
</blockquote>
<p>◆ 10.3 Token类型</p>
<blockquote>
<blockquote>
<p>PHP 7的Token是在代码zend_language_parser.h里面定义的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7.1.0共定义了136种Token。在对PHP代码进行词法分析时，可根据正则找到对应的Token。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了更好地理解Token，下面举个例子：[插图]1）“&lt;? php”对应的Token为T_OPEN_TAG。2）“$a”与“=”之间的空格对应的Token为T_WHITESPACE。3）文件末尾对应的是END。</p>
</blockquote>
</blockquote>
<p>◆ 10.4 PHP 7词法与语法相关数据结构</p>
<blockquote>
<blockquote>
<p>PHP 7的词法和语法分析用到了很多数据结构，最核心的是维护了一个全局变量compiler_globals，该变量维护了词法和语法分析的核心数据，同时为了方便存取，定义了CG的宏，即CG(v)可以存取compiler_globals中的成员变量。整个compiler_globals占用了2616字节，用到了zend_stack、zend_ast、zend_arena等数据结构。</p>
</blockquote>
</blockquote>
<p>◆ 10.5 PHP 7词法与语法分析</p>
<blockquote>
<blockquote>
<p>分析一下PHP 7词法和语法分析得到AST的具体过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7词法和语法分析的入口函数在zend_language_scanner.c的zend_compile中，具体步骤如下。1）申请1024× 32字节大小的空间，赋值给compiler_globals的ast_arena，用以存放AST。2）调用zendparse(yyparse)进行词法与语法分析，生成AST。3）将AST赋值给CG(ast)。</p>
</blockquote>
</blockquote>
<p>◆ 10.6 AST的优势</p>
<blockquote>
<blockquote>
<p>在PHP 5中，从PHP代码到opcode的执行过程如下：先进行词法扫描分析，将源文件转换成Token；然后进行语法分析，在此阶段生成Op_array。相比PHP 5, PHP 7的执行过程多了一步，其执行过程如下：先进行词法扫描分析，将源文件转换成Token；然后进行语法分析生成AST，最后AST生成Op_array。PHP 7的执行过程比PHP 5的多了一步，所以按常理来说这会增加程序的执行时间，同时会增加内存的消耗。但事实上内存的消耗确实增加了，但是执行时间上有所降低。具体可以使用PHP 7的测试用例验证：https://gist.github.com/nikic/289b0c7538b46c2220bc。得出的结论是使用AST之后程序的执行时间整体上有10%～15%的提升，但是内存的消耗也在增加，在大文件单次编译中增加明显，但是在整个项目执行过程中并不是很严重。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要注意的是，以上的结果都是基于没有opcache的情况。在生产环境打开opcache的情况下，内存的消耗增加也不是很大的问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么AST有什么好处呢？首先AST解决了很多语法问题，比如括号不影响行为，代码如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图10-26 带括号的表达式AST的示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>而我们使用PHP 5执行这段代码会报语法错误：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST还解决了变量语法一致性的问题，PHP 5与PHP 7变量语法对照表如表10-5所示。表10-5 PHP 5与PHP 7变量语法对照表[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7引入AST后，语法规则是从左到右，同时遵循括号不影响行为的原则，给语法表达带来了很大的便利。</p>
</blockquote>
</blockquote>
<p>◆ 第11章 Zend虚拟机</p>
<blockquote>
<blockquote>
<p>编程语言的虚拟机是一种可以运行中间语言的程序。中间语言是抽象出的指令集，由原生语言编译而成，作为虚拟机执行阶段的输入。很多语言都实现了自己的虚拟机，如Java、C#和Lua。PHP语言也有自己的虚拟机，称为Zend虚拟机。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7完成基本的准备工作后，会启动Zend引擎，加载注册的扩展模块，然后读取对应的脚本文件，Zend引擎会对文件进行词法和语法分析，生成AST，接着AST被编译成opcode，如果开启了opcache，编译的环节会被跳过从opcache中直接读取opcode进行执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP 7中，进行词法和语法分析，生成AST，然后编译成opcode及被执行均由Zend虚拟机完成。</p>
</blockquote>
</blockquote>
<p>◆ 11.1 基础知识</p>
<blockquote>
<blockquote>
<p>Zend虚拟机（称为Zend VM）是PHP语言的核心，承担了语法和词法分析、AST编译以及指令的执行工作，下面我们讨论一下Zend虚拟机的基础架构以及相关的基础知识。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend虚拟机架构</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend虚拟机主要分为解释层、中间数据层和执行层</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图11-1 Zend虚拟机架构图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）解释层这一层主要负责对PHP代码进行词法和语法分析，生成对应的AST；另一个工作就是对AST进行编译，生成符号表和指令集。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）中间数据层这一层主要包含了虚拟机的核心部分——执行栈的维护、指令集和符号表的存储，而这些是执行引擎调度执行的基础。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）执行层这一层是执行指令集的引擎，负责最终的执行并生成结果，这一层实现了大量的底层函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>11.1.2 符号表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>符号表是编译程序在编译过程中用来记录源程序中各种名字的特性信息，所以也称为名字特性表。名字一般包含程序名、过程名、函数名、用户定义类型名、变量名、常量名、枚举值名、标号名等。特性信息指的是名字的种类、类型、维数、参数个数、数值及目标地址（存储单元地址）等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>符号表有什么作用呢？一是协助进行语义检查，比如检查一个名字的引用和之前的声明是否相符；二是协助中间代码生成，最重要的是在目标代码生成阶段，当需要为名字分配地址时，符号表中的信息是地址分配的主要依据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图11-2 符号表创建示例</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>符号表一般有3种构造和处理方法，分别是线性查找、二叉树和Hash技术。其中，线性查找法是最简单的，按照符号出现的顺序填表，每次查找从第一个位置开始顺序查找，效率比较低；二叉树实现了对半查找，在一定程度上提高了效率；效率最高的方法是通过Hash技术实现符号表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7中的符号表就是使用HashTable实现的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>11.1.3 函数调用栈</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>符号表、函数调用栈以及指令构成了物理机执行的基本元素，Zend虚拟机也同样实现了符号表、函数调用栈及指令，以运行PHP代码。</p>
</blockquote>
</blockquote>
<p>◆ 11.3 AST编译过程</p>
<blockquote>
<blockquote>
<p>AST（抽象语法树）的编译是生成指令集opcode的过程，词法和语法分析后生成的AST会保存在CG(ast)中，然后Zend虚拟机会将AST进一步转换为zend_op_array，以便在虚拟机中执行。下面我们讨论一下AST的编译过程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编译过程在zend_compile函数中进行，该函数首先调用zendparse进行词法和语法分析，然后对CG(ast)的遍历，根据节点的不同类型编译为不同指令opline</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从上面的过程可以看出，编译的主要过程是op_array的初始化，调用zend_compile_top_stmt遍历AST成opline，以及调用pass_two函数设置handler。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在遍历AST之前，需要先初始化指令集op_array，用来存放指令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先通过emalloc申请内存，大小为sizeof(zend_op_array)=208字节，然后初始化op_array的所有成员变量，把op_array赋值给CG(active_op_array)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AST的编译过程是遍历AST生成对应指令集的过程，编译在zend_compile_top_stmt函数中完成，这个函数是总入口，会被多次递归调用。其中传入的参数为CG(ast)，这个AST是通过词法和语法分析得到的。</p>
</blockquote>
</blockquote>
<p>◆ 11.4 执行过程</p>
<blockquote>
<blockquote>
<p>执行的入口函数为zend_execute，该函数会针对生成的opline指令集进行调度执行。首先会在EG(vm_stack)上分配空间，然后每一条指令依次压栈并调用对应的handler。</p>
</blockquote>
</blockquote>
<p>◆ 11.5 其他调度方式</p>
<blockquote>
<blockquote>
<p>Zend虚拟机默认使用call方式进行调度，另外还支持goto、switch方式，可以在编译PHP时增加参数：[插图]</p>
</blockquote>
</blockquote>
<p>◆ 12.1 条件判断</p>
<blockquote>
<blockquote>
<p>条件判断是用来表达条件逻辑的常用语法。以下面这段伪代码为例：[插图]这段代码由3个PHP条件语句关键字if、elseif、else与各自关键字对应的表达式代码块构成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>条件判断语句的执行过程主要分成3种子过程：1）条件判断：condition是否成立。2）语句执行：如果condition成立，则执行当前condition对应的代码块内包含的statement。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）跳转：包括两种跳转，第一种是条件跳转。如果condition不成立，需要跳转到下一个condition判断处。也就是说，如果上述代码的if语句中的condition1不成立，要跳转到elseif处继续判断；第二种是statement执行完后，要跳到条件判断的最外层。在本例中，如果if语句condition1成立，则执行statement1，执行完直接跳转到第8行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP的底层，也是如此实现条件判断逻辑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过前面所学内容，我们知道Zend引擎会将关键字if、elseif、else等解析成对应的Token，再根据Token生成AST。if、elseif、else对应的Token分别是T_IF、T_ELSEIF、T_ELSE。获取Token后，需要根据预先定义好的语法规则来生成AST，规则的定义在zend_language_parser.y文件中。</p>
</blockquote>
</blockquote>
<p>◆ 12.2 循环语句</p>
<blockquote>
<blockquote>
<p>foreach结构由3部分组成，即expression（可以是数组或者对象）和foreach变量key、value。这里不论是数组还是对象，本质上是对HashTable进行遍历，因为PHP 7中的数组实现就是HashTable，而遍历对象实际上是对对象的属性进行遍历。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>foreach关键字会创建一个kind为ZEND_AST_FOREACH的节点。以该节点为根，共有4个孩子，分别对应为expression（需要遍历的变量）、variable1（foreach变量key）、variable（foreach变量value）和statement（普通表达式）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>foreach遍历的过程是对变量key和value不断赋值，并且记录当前遍历位置的过程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与条件判断语句类似，foreach语法的关键点仍然是跳转——如何在一次遍历之后，跳转到下次遍历要开始的位置。编译的过程大致如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）编译expression（对应图12-3中根节点的child0）生成复制数组或对象的opcode FE_RESET_R。这里如果value是引用类型，会生成opcode ZEND_FE_RESET_RW。如果数组或者对象为空，opcode还需要记录需要跳过的opcode数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）编译value（对应图12-3中根节点的child2）生成opcode为FE_FETCH_R的操作。如果value是引用类型，同样会生成opcode ZEND_FE_FETCH_RW。此时opcode还需要记录遍历指针到达末尾需要跳过的opcode数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）如果存在key（对应图12-3中根节点的child1）则编译一条ASSIGN，对key进行赋值操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）编译循环体中的普通表达式列表statement。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）生成一条ZEND_JMP。因为一次循环结束后，需要跳回遍历开始的位置，然后重新走流程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6）全部opcode条数已经确定，开始设置步骤1）和步骤2）中需要跳过的opcode数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend引擎在执行时，首先重置expression中遍历的位置，这时如果发现遍历的数组或者对象（expression）为空，跳过循环体statement，直接跳转到结束的位置；反之对key和value进行赋值，开始执行循环体statement部分。循环体statement执行完再执行ZEND_JMP，跳到循环体开始的位置，开始下次遍历，最终达到遍历数组或者对象中各个元素的目的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>while语句也是一种常用的循环语句，关键字while生成的Token是T_WHILE。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>while语法会创建一个kind为ZEND_AST_WHILE的AST节点。以其为根，有两个孩子节点。child0用来记录条件表达式（condition）, child1节点存储普通循环体statement。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>condition语句一般会生成kind为ZEND_AST_BINARY_OP节点的子树。该节点在编译时会生成临时变量（true或false）。引擎根据临时变量结果，确定下一个要执行的opcode的位置。如果临时变量结果为true，则执行while循环体的statement；否则，跳出循环。这里与跳转逻辑相似。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>condition不同，生成的子节点的kind也是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>while语法的编译过程大致如下。1）编译条件表达式（condition）部分，同时，需要生成一条ZEND_JMP的opcode，跳转到条件表达式（condition）生成的opcode的位置。目前还不能确定下一个opcode的位置（jmp_offset），需要在编译完循环体statement后更新。2）编译循环体statement，编译后会更新步骤1）中jmp_offset的值。3）编译条件表达式condition。4）编译生成ZEND_JMPNZ的opcode，如果条件成立跳到循环体开始的位置，否则继续执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>for语句由两大部分组成，即多个表达式expressions和循环体statement。for关键字生成的Token为T_FOR</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>for语法结构生成的AST根节点是kind为ZEND_AST_FOR的节点。其有4个子节点，其中前三个节点都是表达式列表（expressions），第四个节点保存循环体statement信息。这里值得注意的是，这4个节点都是zend_ast_list类型，意味着它们都支持多个表达式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>for语法结构生成的AST示意图如图12-6所示。[插图]图12-6 for语法AST示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend引擎编译for语法结构从ZEND_AST_FOR节点的child0开始。这里需要注意的是，前三个子节点虽都是条件表达式，却有所区别。child0用来初始化，child1用来条件判断，child2用来做循环控制。编译过程大致如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）编译child0对应的表达式，生成ZEND_ASSGIN的opcode，该过程会生成临时变量。2）生成ZEND_JMP的opcode，用来跳转到条件判断的位置（编译过程可以看出为何初始化之后不是条件判断的opcode）。当前阶段不能确定跳转的位置，需要后续更新。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）编译循环体。4）编译child2对应的表达式expressions。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5）编译child1对应的表达式列表expressions, for语句的判断条件在这里编译，并更新步骤2）中jmp_offset的值。6）生成ZEND_JMPNZ。依据步骤6）中条件判断的结果，决定下一条要执行的opcode的位置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>for语法的执行过程类似while语法的执行过程，首先通过ZEND_JMP跳到条件判断的opcode位置，如果条件返回true则跳转到循环体开始的位置</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>do while与while基本一样，不同的是do while是先执行循环体，再判断while条件表达式，决定是否继续执行循环体。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>do while结构中循环体statement生成的节点在左边child0位置，而条件condition生成的节点在右边child1位置。相同的是这两棵树下面只有两个节点。do while语法编译的过程跟while语法的流程基本一样</p>
</blockquote>
</blockquote>
<p>◆ 12.3 中断与跳转</p>
<blockquote>
<blockquote>
<p>12.3.1 break的实现</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>goto操作符可以用来跳转到程序中的另一个位置，该目标位置可以用目标名称加上冒号来标记，而跳转指令是goto之后接上目标位置的标记。但是PHP对goto有一定的限制，goto不可以跳出当前文件，不能跳出函数或方法，不能跳进循环结构或者switch结构，但是可以跳出循环或switch结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以一段简单的PHP代码为例：[插图]</p>
</blockquote>
</blockquote>
<p>◆ 12.4 文件引入</p>
<blockquote>
<blockquote>
<p>在PHP中引入文件有两种方式，即include和require，配对的还有include_once和require_once。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>关键字include和require生成的Token分别是T_INCLUDE和T_REQUIRE。各自的语法规则同样定义在zend_language_parser.y文件中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>两个关键字对应的opcode的handler函数均是ZEND_INCLUDE_OR_EVAL_SPEC_CONST_HANDLER。该函数解析文件的绝对路径并将该文件编译生成新的op_array。如果新的op_array不为空，则重新执行一遍文件扫描、解析、编译、执行的过程。如果同个文件中有多条include语句和require语句，每条include语句和require语句都重新执行一遍这个流程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>include_once和require_once会将解析出的文件路径加入到全局的hashtable表EG(included_files)中，下次再被引入时，会优先从EG(included_files)中查找。如果文件已经编译过，则不再对文件进行编译。在包含文件的错误处理上，PHP支持两种模式：对于必要文件的错误，报错并终止（require或require_once）；对于非必要文件的错误，抛出警告（include或include_once）。</p>
</blockquote>
</blockquote>
<p>◆ 12.5 异常/错误处理</p>
<blockquote>
<blockquote>
<p>异常指的是在程序运行过程中发生的异常事件，通常由硬件问题或者程序设计问题引起，需要由程序捕获或者处理。在PHP 7之前，处理致命错误几乎是不可能的，致命错误不会调用由set_error_handler()设置的处理方式，只是停止脚本的执行。PHP 7对此进行了改进，一些错误也会抛出异常，不捕获仍然报fatal错误。PHP 7对异常或者错误的处理与其他语言类似，使用try/catch代码结构，在catch中捕获并处理。以下面的PHP代码为例，介绍异常机制的底层实现：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>try结构由普通表达statement构成，catch和finally也有表达式列表。try、catch、finally关键字会生成T_TRY、T_CATCH和T_FINALLY的Token。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从规则定义可以看出，try关键字会创建以ZEND_AST_TRY节点为根的AST，根节点有3个孩子节点。catch关键字会创建一个kind为ZEND_AST_CATCH的AST节点，它有3个子节点，用于保存接口名称、变量和catch_statement表达式。finally关键字由于其特殊性，最终都会执行，所以作为普通表达式（statement）挂在try的最后一个子节点上。</p>
</blockquote>
</blockquote>
<p>◆ 13.1 基础知识</p>
<blockquote>
<blockquote>
<p>函数是可供重复调用的代码块，是编程语言可复用性的重要组成。当函数被调用时，调用者根据函数名找到函数定义的指令集合、执行指令并返回结果给调用者。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP 7的函数可以分为3大类：用户定义函数、内置函数和匿名函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）用户定义函数：以关键字function定义的函数，在我们的代码中广泛使用。用户函数需要经过引擎的词法和语法解析才能最终生成可供调用的指令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2）内置函数：包含默认编译进PHP的函数，如string系列；还包括其他选择编译的扩展函数，如常用的mysql_connect函数。内置函数无须经过Zend引擎的词法、语法解析即可直接调用。其速度优于用户定义函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）匿名函数：以没有函数名的定义形式出现，实现了闭包的性质。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>介绍PHP 7中函数从PHP代码到AST再到opcode最后被执行的实现机制。</p>
</blockquote>
</blockquote>
<p>◆ 13.2 用户定义函数的编译</p>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP脚本的编译过程主要经历词法分析、语法分析和编译3个阶段，其中词法分析阶段把脚本内容切割为符合词法规则的Token；语法分析阶段将词法分析产生的Token集合组装成AST（抽象语法树）；最后经过编译，由AST生成可调用指令集opcodes。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面的代码清单是从脚本文件经过词法分析生成的Token集合：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的官方标准函数库提供了token_get_all (string source)方法，供开发者查看PHP代码（source）生成的Token集合。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>独立分散的Token是没有意义的，只有按照语法规则组装成AST之后才能表达语义。Token生成AST需经过yyparse的解析，之后，AST被存储到complier_globals.ast中，等待下一步的处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数代码生成AST的过程与其他PHP代码几乎无差别</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数的AST节点依然包含kind属性和attr属性，也就意味着它提供了和其他AST节点一样的对外访问接口；它还定义了起始行和终止行，这一点也容易理解，函数声明是代码块结构，start_lineno和end_lineno定义了代码块的边界。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP函数名对大小写不敏感，这部分会根据要编译函数的小写形式函数名，做一系列合法性校验。例如，定义_autoload函数，必须且只能有1个参数。</p>
</blockquote>
</blockquote>
<p>◆ 13.3 用户定义函数的执行</p>
<blockquote>
<blockquote>
<p>函数提供了一种复用机制，即在代码执行流中可以从调用函数的代码行跳转到真正的代码实现行，并在调用过程中完成参数传递（输入参数和返回结果）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机系统中普遍采用的函数机制的实现：首先要明确的是，要借助栈数据结构的LIFO（Last In First Out）特性，模拟函数调用的层级关系。函数调用发生时，被调用者压栈，函数内定义的局部变量依次压栈；接下来，将控制权转移给被调用函数，执行并计算结果；最后，结果和控制权返回给调用者，被调用函数内局部变量的生存周期随着函数执行完毕、临时栈空间的销毁而结束。函数调用机制示意图如图13-2所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图13-2 函数调用机制示意图</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP函数的实现与其类似。不同的是，PHP不使用操作系统提供的栈，而是在堆上申请内存，用数据结构execute_data模拟栈帧，支持函数调用的层级、嵌套关系。在引擎执行过程中，该结构保存了执行器的现场环境，是执行器最重要的数据结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP实现函数调用的过程共分为3个阶段。第一阶段：调用栈空间初始化。这部分会分配函数执行期间需要的操作空间，并根据参数的实际调用情况（实际传入参数个数）对新分配的空间做进一步赋值。第二阶段：切换作用域，执行函数实体。第三阶段：传递执行结果，释放操作空间，引擎执行位置切换回原始调用位置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面详细说明函数调用的过程。1）根据函数名在EG(function_table) 中进行查找，确认函数是否存在，若不存在则会提示“Call toundefined function”。被查找的函数名由opline-&gt;op2获得。2）分配运行时栈作为函数执行时的操作空间。当引擎执行到函数调用时，会创建新的zend_execute_data结构作为当前函数调用的运行栈。所以，对于递归调用的情况，会逐层创建递归调用栈，消耗大量的调用栈空间及执行时间，这也是我们在一些情况下规避递归的原因。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP函数执行的关键就是自定义数据结构来模拟栈，完成函数调用，好处是能避免操作系统提供的栈的内存大小限制。</p>
</blockquote>
</blockquote>
<p>◆ 13.4 内置函数</p>
<blockquote>
<blockquote>
<p>13.4.1 内置函数的注册</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内置函数定义、注册后，CG(function_table)会将之载入，而无须经过用户定义函数必需的词法、语法解析等编译过程，效率自然更高。PHP 7内核开发者提供了很多核心内置函数。同时，数量庞大的社区开发者也在PHP核心能力之上，开发了众多功能丰富的扩展，供开发者选择。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过方法get_extension_funcs可以获得安装成功的扩展模块相关的内置函数列表。例如，获取xml模块相关函数：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么内置函数如何被开发者直接调用呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注册过程会处理函数类型、作用域等诸多细节，如果忽略细节，函数注册的精简过程是将每一个内置函数存储进CG(function_table)。保存内部函数信息的结构体是zend_internal_function</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>13.4.2 内置函数的执行</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在用户定义函数的执行部分，我们介绍过用户定义函数的调用会编译成ZEND_DO_UCALL类型opcode；而内置函数对应的opcode为ZEND_DO_ICALL。在ZEND_DO_UCALL和ZEND_DO_ICALL对应的handler中，再完成具体操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内置函数还有一种情况，即不生成ZEND_DO_ICALL，直接执行函数对应的opcode。如PHP的内置函数strlen：[插图]生成的opcodes如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果代码为[插图]则生成的opcodes为[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以看到，在第一种情况中，参数为变量，对应的opcode为ZEND_STRLEN；而在第二种情况中，同样为strlen函数，不过参数变成了常量，对应的opcode只有ZEND_RETURN。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用户自定义函数的执行通过引擎执行函数的opcode集合来获得结果；而内置函数的执行，通过internal_function.handler的调用完成，并将返回结果赋值给opline的result.var。其他地方与用户定义函数类似</p>
</blockquote>
</blockquote>
<p>◆ 第14章 扩展</p>
<blockquote>
<blockquote>
<p>PHP的扩展按照归属可以分为四大类，分别如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 核心扩展库：其实属于PHP内核的一部分，这些扩展不能通过编译选项排除掉，如array系列、date系列、string系列、反射等。❑ 绑定的扩展库：常见的iconv、ftp、gd、json等都属于绑定的扩展库。❑ 外部扩展库：常见的curl、dom、mysqli等都属于绑定的外部扩展库，这些扩展库已经包含在PHP源码中但是需要编译它们才能使用，并且可能需要额外的扩展库。❑ PECL扩展库：常见的有Memcached、Yaf、Xhprof等，这些扩展来自PECL，它们可能需要额外的库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的扩展还可以分为两种，一种是PHP扩展，另外一种是Zend扩展。在php_module_start加载扩展时，通过extension=<em>.so加载的扩展称为PHP扩展；通过zend_extension=</em>.so加载的扩展称为Zend扩展。在某些文档中，根据扩展在PHP源码中的定义，把PHP扩展称为模块（PHP源码中有module关键字），把Zend扩展称为扩展（源码中有extension关键字）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了加载方式不同，两种扩展最根本的区别在于实现的不同。PHP扩展需要实现一个名为zend_module_entry的结构体，而Zend扩展需要实现一个名为zend_extension的结构体。扩展xdebug既实现了zend_module_entry，也实现了zend_extension，所以说其实这个扩展有点怪，既是PHP扩展，也是Zend扩展。</p>
</blockquote>
</blockquote>
<p>◆ 14.1 扩展的实现原理</p>
<blockquote>
<blockquote>
<p>无论是PHP扩展还是Zend扩展，它们实现的基本原理都是开发者按照扩展规范和API，实现自己的功能，然后要么以静态编译方式编译到PHP的可执行文件，要么以动态编译方式生成动态链接库．so文件。加载扩展时，PHP将动态链接库文件加载到内存，校验其符合规范后，PHP即可以使用此扩展。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那么这里提到的库是什么呢？库可以看作可复用代码的二进制形式。在计算机世界中，每个程序都要依赖很多基础的底层库。库分为两种：静态链接库和动态链接库。在编译生成可执行程序时，一起被打包到可执行文件的库称为静态链接库，Linux下一般以．a为扩展名（Windows下为．lib）；而生成可执行文件时并未被打包，在运行时才被载入的库，称为动态链接库，Linux下一般以．so为扩展名（Windows下为．dll）。动态链接库使用起来比静态链接库稍微麻烦，但有着非常明显的优势。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1）相对于静态链接库，使用动态链接库可以有效地缩小程序体积，节省空间，在同一个运行环境下，不同的程序可以调用相同的库。2）程序更新时，使用了静态链接库的程序需要重新编译整个程序，用户也需要重新下载安装完整的程序，而使用了动态链接库的程序可以只更新库，实现增量更新。3）有助于节省内存。当我们需要某个扩展时，才将其加载到内存中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）有助于资源共享。这里讲的资源共享，是指在多个进程中实现共享。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面我们来实现一个简单的动态链接库libhelloworld.so并调用：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码很简单，只有一个函数——helloworld，调用这个函数，会输出字符串“hello, world！”。我们将其编译生成动态链接库：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现在我们显式加载此动态链接库：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编译、链接此代码生成可执行程序：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以看到已成功生成可执行文件a.out，运行后输出字符串“hello, world！”。由此可见，动态链接库libhelloworld.so中的函数执行成功。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它一共使用了4个函数来加载动态链接库并执行其中的函数，它们分别是dlopen、dlerror、dlsym、dlclose，分别用来加载动态链接库、获得相关错误信息、获得函数地址、关闭动态链接库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP的扩展实现原理和这段代码极其相似，也是用这4个函数完成了扩展的加载和函数的调用。当在我们在PHP程序中动态通过dl函数或通过php.ini来动态加载扩展时，PHP会从extension_dir配置项指定的目录加载扩展</p>
</blockquote>
</blockquote>
<p>◆ 14.2 PHP扩展</p>
<blockquote>
<blockquote>
<p>14.2.1 扩展的实现</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PHP扩展需要实现一个结构体——zend_module_entry</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]主要字段说明如下。❑ size：此结构体的大小，即sizeof(struct _zend_module_entry)。❑ zend_api:PHP扩展版本号。❑ zend_debug：是否开启debug模式。❑ zts：线程是否安全。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ ini_entry:php.ini相关，详情请看第8章。❑ name：扩展名称，不得与其他扩展名相同。❑ functions：扩展提供的内部函数数组。❑ module_startup_func：模块初始化阶段回调的钩子函数。❑ module_shutdown_func：模块关闭阶段回调的钩子函数。❑ request_startup_func：请求初始化阶段回调的钩子函数。❑ request_shutdown_func：请求关闭阶段回调的钩子函数。❑ info_func：被php_info函数调用的展示扩展信息的函数。❑ version：扩展的版本号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果当前扩展是以动态链接库的方式来使用的，那么扩展除了要实现了struct_zend_module_entry结构外，还需要实现get_module函数来让内核获得当前扩展结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实现的函数名为get_module，如果此扩展名为***，那么定义扩展的变量名必须为***_module_entry。例如，JSON扩展为json_module_entry。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解析php.ini时，PHP扩展和Zend扩展相关配置都会被加载到全局变量extension_lists中，PHP扩展保存在extension_lists.functions中，而Zend扩展保存在extension_lists.engine中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在PHP_MINIT阶段，通过php_ini_register_extensions函数完成扩展的注册：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这个函数中，依次遍历extension_lists.engine和extension_lists.functions，调用php_load_php_extension_cb函数完成对PHP扩展的加载，调用php_load_zend_extension_cb函数完成对Zend扩展的加载：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由源码可知，PHP扩展加载的关键步骤在php_load_extension中完成，现在仔细研究下这个函数：1）获取配置文件定义的扩展目录extension_dir。2）调用dlopen打开对应的动态链接库．so文件。3）调用dlsym找到get_module函数的地址，通过get_module方法获得此扩展的struct_zend_module_entry结构。4）zend api版本校验。5）检查扩展依赖，没有错误的时候将扩展添加到全局变量module_registry中；如果存在内部函数，则将这些函数注册到全局变量EG(function_table)中。至此完成了PHP扩展的加载。</p>
</blockquote>
</blockquote>
<p>◆ 14.3 Zend扩展</p>
<blockquote>
<blockquote>
<p>14.3.1 Zend扩展的实现</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Zend扩展必须要实现的结构体为zend_extension：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>主要字段说明如下。❑ name：扩展名称。❑ version：扩展版本号。❑ author：作者。❑ URL：扩展官方主页。❑ copyright：版本声明。❑ startup：扩展启动钩子函数。❑ shutdown：扩展关闭钩子函数。❑ activate：请求初始化阶段钩子函数。❑ deactivate：请求结束阶段钩子函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>前文我们提到解析php.ini时会把Zend扩展保存在extension_lists.engine中，在通过php_ini_register_extensions注册扩展时会先调用php_load_zend_extension_cb完成对Zend扩展的加载：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]具体的加载流程是在zend_load_extension函数中实现的，其实现和PHP扩展的加载php_load_extension大同小异，不同之处是，内核最终将Zend扩展加载到全局变量zend_extensions中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14.3.2 opcache扩展</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们了解了PHP的执行原理，简单地讲，就是PHP内核把PHP代码编译成opcode，然后再来执行opcode。这个过程看上去挺简单，没有可以优化的地方，其实不然。在PHP代码没有变化的情况下，内核生成的opcode是不会变的，那么我们可以把生成的opcode缓存到文件或内存中，这样可以避免重复执行生成opcode的过程，提高PHP的运行效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>既然如此，为何PHP不能像Java一样，把编译生成的opcode部署到线上，让PHP直接执行opcode，这样就不存在刚才说的重复执行生成opcode的过程了。这的确是一个好办法，不过PHP虽然是跨平台的，但是与Java的跨平台不同，PHP是语言跨平台，生成的opcode并不能跨平台执行，而Java生成的bytecode是可跨平台执行的，另外热部署是PHP的优势之一，直接部署opcode有悖于这一特性。所以PHP开发者最终选择了使用缓存opcode这一功能来优化PHP的执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>此扩展实现的zend_extension结构</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>opcache的module startup方法为accel_startup。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>主要操作步骤如下。1）初始化一个全局变量accel_globals。2）注册内部模块accel。3）校验opcache是否支持当前的sapi。4）分配并初始化共享内存。5）初始化全局变量accel_shared_globals指向的结构体zend_accel_shared_globals。6）hook相关函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>opcache只支持下面几种sapi。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>看上去opcache不支持CLI模式，其实不然。如果想要opcache支持CLI，需要单独在php.ini中设置。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>共享内存的大小在php.ini中配置：opcache.memory_consumption = 64</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>配置中的单位为MB，管理共享内存的全局变量为smm_shared_globals，其为指向结构体zend_smm_shared_globals的指针。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>具体步骤如下。1）校验opcache是否可用，是否已初始化完成，如果不可用或者初始化未成功，则执行原来的编译逻辑。2）判断是否开启了文件路径验证（ZCG(accel_directives).revalidate_path）：[插图]默认状态为关闭。如果关闭，则查找cache时的索引，只能通过文件名、当前工作路径和ZCG(include_path)来生成（ZCG(include_path)的值在php.ini中的include_path字段配置）；如果已开启，则直接使用文件的全路径来查找cache。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3）判断是否开启缓存的有效期验证（ZCG(accel_directives).validate_timestamps）：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认状态为开启。如果关闭，则必须使用opcache_set或者opcache_invalidate函数来手动重置opcache，也可以通过重启Web服务器来使文件系统更改生效；如果开启，则每隔opcache.revalidate_freq秒检查一次文件是否有更新，如果有更新则重新编译。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）校验cache是否合法。为了防止在读取cache的过程中数据被其他进程修改，导致读取到的cache数据异常，需对cache进行校验。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>进行校验的算法为Adler-32。Adler-32是Mark Adler发明的校验和算法，和32位CRC校验算法一样，用于保护数据以防止其被意外更改，但是这个算法较容易被伪造，所以是不安全的。但是比起CRC，它的计算速度很快。这个算法是在Fletcher校验和算法的基础上修改而成的，原始的算法形式略快，但是可依赖性并不高。5）返回cache中的数据或者把重新编译生成的结果存入cache中后返回。</p>
</blockquote>
</blockquote>
<p>◆ 14.4 自定义扩展</p>
<blockquote>
<blockquote>
<p>本节我们来看下如何编写一个自己的扩展。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假定我们要经常获取文件的总行数，命令行下可以直接通过“wc -l filepath”获取，但是我们希望可以做成PHP内置函数来使用，例如：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14.4.1 初始化</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先需要生成扩展的基本框架。PHP官方提供了一个构造器ext_skel以帮助我们生成扩展所必要的文件和基本框架，该文件位于源码目录下的ext目录</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ext_skel有几个参数，其中，--extname参数用来指定要创建的扩展名称，是一个全为小写字母的标识符，仅包含字母和下划线，需要在ext目录下保持唯一；--proto用来指定函数原型（这一步可以省略）。例如，我们创建一个名为wcl的PHP扩展，首先定义函数原型文件：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>接下来生成扩展框架：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>命令执行完，可以看到在当前目录下已经有了一个名为wcl的目录，目录中有很多文件。❑ config.m4:autoconf语法规则的编译配置文件，它可以指定扩展支持的configure选项以及扩展需要的额外的库，包含哪些源文件等。❑ config.w32:Windows平台下的编译配置文件，它的作用同config.m4，但是它是使用JavaScript编写的。❑ CREDITS：用纯文本格式列出了扩展的贡献者和维护者。文件的第一行应保存扩展的名称，第二行是用逗号分隔的贡献者名单。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ EXPERIMENTAL：实验功能说明文件。❑ php_wcl.h：当将扩展作为静态模块构建并放入PHP二进制包时，构建系统要求用php_ 加扩展的名称命名的头文件包含一个对扩展模块结构的指针定义。就像其他头文件，此文件经常包含附加的宏、原型和全局变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ tests：测试脚本目录。❑ wcl.c：扩展的主要源文件，通常，此文件名就是扩展的文件名。此文件包含模块结构定义、ini配置项、扩展提供的函数和其他扩展所需的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ wcl.php：测试脚本，可以输出扩展支持的函数列表以及当前扩展是否已经被编译到PHP。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14.4.2 编译配置</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>框架初始化之后，我们来看下如何修改编译配置文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们在编译安装PHP的时候，会指定一些编译配置选项，有些是-with，有些是-enable，这里有什么区别呢？一般来说，enable表示某个内置功能是否开启，而with表示是否需要添加某个功能，通常需要指定依赖的外部库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>wcl扩展不依赖外部组件，所以这里选择enable方式。修改config.m4，去掉PHP_ARG_ENABLE和--enable-wcl两行前面的dnl（在autoconf语法中，dnl表示注释）。修改后如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>宏说明如下。❑ PHP_ARG_ENABLE宏：第一个参数表示扩展名称；第二个参数在执行．/configure处理到该扩展时，显示该参数的内容；第三个参数是执行．/configure -help的输出信息。❑ PHP_NEW_EXTENSION宏：声明了扩展的名称、源文件列表（多个文件的时候在文件名称后边加空格，如果需要换行还需加上反斜杠“\”）、此扩展是动态库还是静态库，扩展是否只能在CLI或CGI模式下运行等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>们提到使用动态链接库方式的扩展还需要实现get_module方法，这里exk_skel帮我们做了这个工作：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14.4.3 功能实现</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们在生成扩展框架的时候已经指定了函数原型，ext_skel会自动生成该函数的基本定义，并通过宏PHP_FE把函数注册到zend_function_entry。如果不指定原型函数，那么这两步需要我们手动完成。另外，每个扩展都会注册一个名为confirm_扩展名称_compiled的函数用来输出当前扩展是否已经被编译到PHP</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]扩展中函数的定义由PHP_FUNCTION宏来完成，实际展开如下：[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>zend_parse_parameters用来对函数参数做校验并获取函数的参数。第一个参数为传递给函数的参数个数，通常ZEND_NUM_ARGS来获取；第二个参数指定函数的参数类型，其后是要解析的参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>14.4.4 注册配置项</p>
</blockquote>
</blockquote>
<p>◆ 14.5 本章小结</p>
<blockquote>
<blockquote>
<p>其实PHP官方提供的扩展开发工具不是特别好用，在此推荐一款更加灵活好用的第三方开源工具——PHP-X。通过此工具，开发者可以更加高效地开发PHP扩展。</p>
</blockquote>
</blockquote>
<p>◆ A.1 [PHP]相关配置</p>
<blockquote>
<blockquote>
<p>[PHP]相关配置（1）engine配置项：on、off。默认值：on。可修改范围：PHP_INI_ALL。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>说明：设置打开或关闭PHP解析。本指令仅在使用PHP的Apache模块版本时才有用。可以基于目录或者虚拟主机来打开或者关闭PHP。例如：[插图]下面几个Apache指令可以使用户在Apache配置文件内部修改PHP的配置。1）php_value name value：设定指定的值，只能用于PHP_INI_ALL或PHP_INI_PERDIR类型的指令。要清除先前设定的值，把value设为none。不要用php_value设定布尔值，应该用php_flag。2）php_flag name on|off：用来设定布尔值的配置指令，仅能用于PHP_INI_ALL和PHP_INI_PERDIR类型的指令。3）php_admin_value name value：设定指定的指令的值，不能用于．htaccess文件。任何用php_admin_value设定的指令都不能被．htaccess或virtualhost中的指令覆盖。要清除先前设定的值，把value设为none。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4）php_admin_f lag name on|off：用来设定布尔值的配置指令，不能用于．htaccess文件。任何用php_admin_flag设定的指令都不能被．htaccess或virtualhost中的指令覆盖。（2）short_open_tag配置项：on、off。默认值：on。可修改范围：PHP_INI_ALL。说明：设置是否允许使用PHP代码开始标志的缩写形式&lt;? ? &gt;，默认开启。这个特性是为了保持对前兼容而留下来的特性，除非为了兼容老版本的代码，否则不要使用该特性。Zend引擎在编译PHP代码的时候和使用readline扩展进行可交互命令行程序开发的时候会做这个检测。（3）precision配置项：integer。默认值：14。可修改范围：PHP_INI_ALL。说明：设置浮点型数据显示的有效位数，默认14位。代码如下：[插图]（4）output_buffering配置项：on、off、integer(bytes)。默认值：0。可修改范围：PHP_INI_PERDIR。说明：该选项设置为on时，将在所有的脚本中使用输出控制并且buffer无限制大小。如果要限制输出缓冲区的最大值，可将该选项设定为指定的最大字节数，如果输出的内容超过限制的大小，那么PHP将按照限制的大小分块输出，CLI下强制关闭。（5）output_handler配置项：其值只能设置为一个内置的函数名，如mb_output_handler，函数只能设置一个。默认值：null。可修改范围：PHP_INI_PERDIR。说明：该选项可将脚本所有的输出重定向到一个函数。（6）zlib.output_compression配置项：on、off、integer。默认值：off。可修改范围：PHP_INI_ALL。说明：设置是否开启gzip压缩，开启的时候默认为4KB。（7）zlib.output_compression_level配置项：integer。默认值：-1。可修改范围：PHP_INI_ALL。说明：设置gzip压缩级别，默认为-1，最高为9，数字越大，压缩比越高，也越消耗CPU。（8）zlib.output_handler配置项：string。默认值：null。可修改范围：PHP_INI_ALL。说明：作用同output_handler，但是不能同时开启。（9）implicit_flush配置项：on、off。默认值：off。可修改范围：PHP_INI_ALL。说明：若该选项改为true, PHP将使输出层在每段信息块输出后自动刷新。这等同于在每次使用print、echo等函数或每个HTML块之后，调用PHP中的flush函数，CLI下强制开启。（10）unserialize_callback_func配置项：string。默认值：null。可修改范围：PHP_INI_ALL。说明：当设置了该选项时，在反序列化一个字符串的时候，如果反序列化后的数据为一个对象，那么可以把当前对象还原成特定的class对象。例如：[插图]（11）serialize_precision配置项：integer。默认值：-1。可修改范围：PHP_INI_ALL。说明：控制序列化浮点数时候的精度，默认为-1，表示数据保持不变，类似precision。（12）open_basedir配置项：string。默认值：null。可修改范围：PHP_INI_ALL。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>说明：限制PHP打开文件的目录。定义该配置后，PHP将只能打开限定目录下的文件，包括文件本身；多个目录使用冒号（Windows中使用分号）间隔。该配置只匹配前缀，如果配置项为/data，那么/data1或者/data2都是可以访问的，如果要限定某个特定目录，请使用“/”结尾，如/data/。（13）disable_functions配置项：string。默认值：''。可修改范围：PHP_INI_SYSTEM。说明：禁止执行某些函数，多个函数可以使用逗号间隔。PHP扩展加载完成后，会根据这个配置项修改函数对应的handler为zif_display_disabled_function，当执行这个函数的时候就会输出%s() has beendisabled for security reasons。对应代码如下：[插图]（14）disable_classes配置项：string。默认值：''。可修改范围：PHP_INI_SYSTEM。说明：禁止执行某些类，多个类可以使用逗号间隔。PHP扩展加载完成后，会根据这个配置项修改class对应的create_handler为display_disabled_class，同时清空该class的function_table，当初始化这个class的时候就会输出%s() has been disabled for security reasons。对应代码如下：[插图]（15）highlight.string配置项：string十六进制颜色码。默认值：'#DD0000'。可修改范围：PHP_INI_ALL。说明：PHP字符串语法高亮颜色配置。（16）highlight.comment配置项：string十六进制颜色码。默认值：'#FF8000'。可修改范围：PHP_INI_ALL。说明：PHP注释语法高亮颜色配置。（17）highlight.keyword配置项：string十六进制颜色码。默认值：'#007700'。可修改范围：PHP_INI_ALL。说明：PHP关键字语法高亮颜色配置。（18）highlight.default配置项：string十六进制颜色码。默认值：'#0000BB'。可修改范围：PHP_INI_ALL。说明：PHP默认文本语法高亮颜色配置。（19）highlight.html配置项：string十六进制颜色码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认值：'#000000'。可修改范围：PHP_INI_ALL。说明：PHP HTML语法高亮颜色配置。（20）ignore_user_abort配置项：on、off。默认值：'0'。可修改范围：PHP_INI_ALL。说明：如果该选项设置为true，在客户端断开连接后，脚本不会被中止运行。默认为false。（21）realpath_cache_size配置项：integer。默认值：'4096K'。可修改范围：PHP_INI_SYSTEM。说明：指定realpath cache的大小。PHP为了防止过多的include/require造成频繁去include_path中寻找路径，把引用到的文件的真实路径都缓存到了realpath_cache，以减少路径查找。（22）realpath_cache_ttl配置项：integer。默认值：120。可修改范围：PHP_INI_SYSTEM。说明：指定realpath cache过期时间，单位为秒。（23）zend.enable_gc配置项：integer。默认值：1。可修改范围：PHP_INI_ALL。说明：开启或关闭垃圾回收。</p>
</blockquote>
</blockquote>
</div></template>



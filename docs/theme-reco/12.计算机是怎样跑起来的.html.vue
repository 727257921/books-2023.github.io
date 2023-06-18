<template><div><h1 id="计算机是怎样跑起来的" tabindex="-1"><a class="header-anchor" href="#计算机是怎样跑起来的" aria-hidden="true">#</a> 计算机是怎样跑起来的</h1>
<p>矢泽久雄</p>
<h2 id="第1章" tabindex="-1"><a class="header-anchor" href="#第1章" aria-hidden="true">#</a> 第1章</h2>
<h3 id="◆-1-1-计算机的三个根本性基础" tabindex="-1"><a class="header-anchor" href="#◆-1-1-计算机的三个根本性基础" aria-hidden="true">#</a> ◆ 1.1 计算机的三个根本性基础</h3>
<blockquote>
<blockquote>
<h4 id="计算机的三大原则" tabindex="-1"><a class="header-anchor" href="#计算机的三大原则" aria-hidden="true">#</a> 计算机的三大原则</h4>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．计算机是执行输入、运算、输出的机器</p>
<p>2．程序是指令和数据的集合</p>
<p>3．计算机的处理方式有时与人们的思维习惯不同</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-输入、运算、输出是硬件的基础" tabindex="-1"><a class="header-anchor" href="#◆-1-2-输入、运算、输出是硬件的基础" aria-hidden="true">#</a> ◆ 1.2 输入、运算、输出是硬件的基础</h3>
<blockquote>
<blockquote>
<p>从硬件上来看，可以说计算机是执行输入、运算、输出三种操作的机器。计算机的硬件由大量的IC （Integrated Circuit，集成电路）组成（如图1.1所示）。每块IC上都带有许多引脚。这些引脚有的用于输入，有的用于输出。IC会在其内部对外部输入的信息进行运算，并把运算结果输出到外部。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-软件是指令和数据的集合" tabindex="-1"><a class="header-anchor" href="#◆-1-3-软件是指令和数据的集合" aria-hidden="true">#</a> ◆ 1.3 软件是指令和数据的集合</h3>
<blockquote>
<blockquote>
<p>所谓指令，就是控制计算机进行输入、运算、输出的命令。把向计算机发出的指令一条条列出来，就得到了程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序中的数据分为两类，一类是作为指令执行对象的输入数据，一类是从指令的执行结果得到的输出数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在一般的编程过程中，都要先编译再执行。所谓编译就是把用C语言等编程语言编写的文件（源文件）转换成用机器语言（原生代码）编写的文件。假设我们先把代码清单1.1中的代码保存到文件MyProg.c中，然后经过编译就可以生成可执行的程序文件MyProg.exe了。接下来使用能查看文件内容的工具查看MyProg.exe，其内容应该与代码清单1.2类似。可以看到里面仅仅是数值的罗列（这里用十六进制数表示）。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-4-对计算机来说什么都是数字" tabindex="-1"><a class="header-anchor" href="#◆-1-4-对计算机来说什么都是数字" aria-hidden="true">#</a> ◆ 1.4 对计算机来说什么都是数字</h3>
<blockquote>
<blockquote>
<p>不光是颜色，计算机对文字的处理也是如此。计算机内部会先把文字转换成相应的数字再做处理，这样的数字叫作“字符编码”。总之计算机会把什么都用数字来表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如“在这里打开文件，获得文件句柄”“把用公钥加密后的文件用私钥解密”。那么，他们所说的“文件句柄”是什么呢？——是数字。“公钥”是什么呢？——是数字。“私钥”呢？——当然还是数字。无论计算机所处理的信息是什么形式，只要把它们都当成是数字就可以了。虽然这有些违背人们的思维习惯，但是处理数字对计算机来说却是非常简单的。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-5-只要理解了三大原则-即使遇到难懂的最新技术-也能轻松应对" tabindex="-1"><a class="header-anchor" href="#◆-1-5-只要理解了三大原则-即使遇到难懂的最新技术-也能轻松应对" aria-hidden="true">#</a> ◆ 1.5 只要理解了三大原则，即使遇到难懂的最新技术，也能轻松应对</h3>
<blockquote>
<blockquote>
<p>微软公司采用了SOAP以及XML规范。SOAP是关于调用指令的规范，XML则是定义数据格式的规范。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-7-稍微预习一下第2章" tabindex="-1"><a class="header-anchor" href="#◆-1-7-稍微预习一下第2章" aria-hidden="true">#</a> ◆ 1.7 稍微预习一下第2章</h3>
<blockquote>
<blockquote>
<p>计算机内部主要由被称作IC的元件组成。虽然在IC家族当中有功能各异的各种IC，但是在这里希望诸位记住的只有三种：CPU（处理器）、内存以及I/O。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU是计算机的大脑，在其内部可对数据执行运算并控制内存和I/O。内存用于存储指令和数据。I/O负责把键盘、鼠标、显示器等周边设备和主机连接在一起，实现数据的输入与输出。</p>
</blockquote>
<p>在诸位所使用的Windows个人计算机中，多数都只装有一枚名为Pentium（奔腾）的CPU吧。内存的数量则会根据所需存储的大小（少则32MB，多则256MB）装有多条。I/O也会根据周边设备的多少装配有多个。可以认为个人计算机背板上有多少个插孔就有多少个I/O。</p>
</blockquote>
<blockquote>
<blockquote>
<p>只要用电路把CPU、内存以及I/O上的引脚相互连接起来，为每块IC提供电源，再为CPU提供时钟信号，硬件上的计算机就组装起来了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所谓时钟信号，就是由内含晶振的、被称作时钟发生器的元件发出的滴答滴答的电信号。如果是Pentium CPU的话，所使用的时钟信号会从几百MHz到2GHz不等。</p>
<p><img src="@source/docs/theme-reco/img/9.计算机是怎样跑起来的/image-20220110111611594.png" alt="image-20220110111611594"></p>
</blockquote>
</blockquote>
<h2 id="◆-第2章-试着制造一台计算机吧" tabindex="-1"><a class="header-anchor" href="#◆-第2章-试着制造一台计算机吧" aria-hidden="true">#</a> ◆ 第2章 试着制造一台计算机吧</h2>
<blockquote>
<blockquote>
<p>CPU是计算机的大脑，负责解释、执行程序的内容。有时也将CPU称作“处理器”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常用Hz来表示驱动CPU运转的时钟信号的频率。1秒发出1次时钟信号就是1Hz，所以100MHz（兆赫兹）的话就是100×100万 = 1亿次/秒。M（兆）代表100万。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU上数据总线的条数，或者CPU内部参与运算的寄存器的容量，都可以作为衡量CPU性能的比特数。在Z80 CPU中，无论是数据总线的条数还是寄存器的容量都是8比特，所以Z80 CPU是一款8比特的CPU。而在Windows个人计算机中广泛使用的Pentium（奔腾） CPU则是32比特的CPU。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要想彻底掌握计算机的工作原理，最好的方法就是自己搜集零件，试着组装一台微型计算机。微型计算机（MicroCom）是Micro Computer的缩写，字面含义是微小的计算机，但一般也可用于指代IC元件外露的、用于控制的计算机。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-1-制作微型计算机所必需的元件" tabindex="-1"><a class="header-anchor" href="#◆-2-1-制作微型计算机所必需的元件" aria-hidden="true">#</a> ◆ 2.1 制作微型计算机所必需的元件</h3>
<blockquote>
<blockquote>
<p>制作微型计算机所需的基础元件只有3个，CPU、内存和I/O，每种元件都是作为一块独立的IC在市场上出售的。CPU是计算机的大脑，负责解释、执行程序。内存负责存储程序和数据。I/O是Input/Output（输入/输出）的缩写，负责将计算机和外部设备（周边设备）连接在一起。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里我们使用Z80 CPU作为微型计算机的CPU、TC5517作为内存、Z80 PIO作为I/O。Z80 CPU是一款古老的CPU，在NEC的PC-8801、SHARP的MZ-80等8比特计算机广泛应用的时代，曾以爆炸般的速度普及过。TC5517是可以存储2K的8比特数据的内存。在计算机的世界里，K表示210= 1024。TC5517的容量是8比特×2×1024 = 16384比特，即2K字节。</p>
<p><img src="@source/docs/theme-reco/img/9.计算机是怎样跑起来的/image-20220110112415535.png" alt="image-20220110112415535"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了制作微型计算机，除了CPU、内存和I/O，还需要若干辅助元件。为了驱动CPU运转，称为“时钟信号”的电信号必不可少。这种电信号就好像带有一个时钟，滴答滴答地每隔一定时间就变换一次电压的高低</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>输出时钟信号的元件叫作“时钟发生器”。时钟发生器中带有晶振，根据其自身的频率（振动的次数）产生时钟信号。时钟信号的频率可以衡量CPU的运转速度。</p>
<p><img src="@source/docs/theme-reco/img/9.计算机是怎样跑起来的/image-20220110112914201.png" alt="image-20220110112914201"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>电阻是用于阻碍电流流动、降低电压值的元件。为了省去布线的麻烦，这里也会使用将8个电阻集成到1个元件中的集成电阻（如照片2.1(b)所示）。电阻的单位是Ω（欧姆）。电容是存储电荷的元件，衡量存储电荷能力的单位是F（法拉）。要让微型计算机运转起来，5V（伏特）的直流电源是必不可少的。于是还需要使用一个叫作“开关式稳压电源”的装置，将220V的交流电变成5V的直流电。</p>
<p><img src="@source/docs/theme-reco/img/9.计算机是怎样跑起来的/image-20220110113654716.png" alt="image-20220110113654716"></p>
<p><img src="@source/docs/theme-reco/img/9.计算机是怎样跑起来的/image-20220110113757396.png" alt="image-20220110113757396"></p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-电路图的读法" tabindex="-1"><a class="header-anchor" href="#◆-2-2-电路图的读法" aria-hidden="true">#</a> ◆ 2.2 电路图的读法</h3>
<h3 id="◆-2-3-连接电源、数据和地址总线" tabindex="-1"><a class="header-anchor" href="#◆-2-3-连接电源、数据和地址总线" aria-hidden="true">#</a> ◆ 2.3 连接电源、数据和地址总线</h3>
<h3 id="◆-2-4-连接i-o" tabindex="-1"><a class="header-anchor" href="#◆-2-4-连接i-o" aria-hidden="true">#</a> ◆ 2.4 连接I/O</h3>
<blockquote>
<blockquote>
<p>寄存器是位于CPU和I/O中的数据存储器。Z80 PIO上共有4个寄存器。2个用于设定PIO本身的功能，2个用于存储与外部设备进行输入输出的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这4个寄存器分别叫作端口A控制、端口A数据、端口B控制和端口B数据。所谓端口就是I/O与外部设备之间输入输出数据的场所，可以把端口（Port）想象成是轮船装卸货物的港口。</p>
</blockquote>
</blockquote>
<h2 id="◆-第3章-体验一次手工汇编" tabindex="-1"><a class="header-anchor" href="#◆-第3章-体验一次手工汇编" aria-hidden="true">#</a> ◆ 第3章 体验一次手工汇编</h2>
<blockquote>
<blockquote>
<p>标识内存或I/O中存储单元的数字叫作“地址”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>初级问题：不仅是汇编语言，用C语言、Java、BASIC等编程语言编写的程序，也都需要先转换成机器语言才能被执行。机器语言有时也叫作“原生代码”（Native Code）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>中级问题：内存中有多个数据存储单元。计算机用从0开始的编号标识每个存储单元，这些编号就是地址（Address）。I/O中的寄存器也可以用地址来标识。哪个寄存器对应哪个地址，取决于CPU和I/O之间的布线方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>高级问题：Flag的本意是“旗子”，这里引申为“标志”。一旦执行了算术运算、逻辑运算、比较运算等指令后，标志寄存器并不会存放运算结果的值，而是会把运算后的某些状态存储起来，例如运算结果是否为0、是否产生了负数、是否有溢出（Overflow）等。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-从程序员的角度看硬件" tabindex="-1"><a class="header-anchor" href="#◆-3-1-从程序员的角度看硬件" aria-hidden="true">#</a> ◆ 3.1 从程序员的角度看硬件</h3>
<blockquote>
<blockquote>
<p>可以使用哪种机器语言取决于CPU（也称作处理器）的种类。所谓机器语言就是只用0和1两个二进制数书写的编程语言。即便是相同的机器语言，例如01010011，只要CPU的种类不同，对它的解释也就不同。有的CPU会把它解释成是执行加法运算，有的CPU会把它解释成是向I/O输出。这就好比同样是man这个词，有的人会理解成“慢”，有的人会理解成“男人”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于微型计算机上的CPU是Z80 CPU，所以就要使用适用于Z80 CPU的机器语言。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所谓时钟信号的频率，就是由时钟发生器发送给CPU的电信号的频率。表示时钟信号频率的单位是MHz（兆赫兹 = 100万回/秒）。微型计算机使用的是2.5MHz的时钟信号。时钟信号是在0和1两个数之间反复变换的电信号，就像滴答滴答左右摆动的钟摆一样。通常把发出一次滴答的时间称作一个时钟周期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在内存中，每个地址的功能都一样，既可用于存储指令又可用于存储数据。而I/O则不同，地址编号不同（即寄存器的类型不同），功能也就不同。在微型计算机中，是这样分配Z80 PIO上的寄存器的：端口A数据寄存器对应0号地址，端口B数据寄存器对应1号地址，端口A控制寄存器对应2号地址，端口B控制寄存器对应3号地址。端口A数据寄存器和端口B数据寄存器存储的是与周边设备进行输入输出时所需的数据。其中，端口A连接用于输入数据的指拨开关，端口B连接用于输出数据的LED。而端口A控制寄存器和端口B控制寄存器则存储的是用于设定Z80 PIO功能的参数。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-z80-cpu的寄存器结构" tabindex="-1"><a class="header-anchor" href="#◆-3-3-z80-cpu的寄存器结构" aria-hidden="true">#</a> ◆ 3.3 Z80 CPU的寄存器结构</h3>
<blockquote>
<blockquote>
<p>CPU负责解释、执行程序，从内存或I/O输入数据，在内部进行运算，再把运算结果输出到内存或I/O。内存中存放着程序，程序是指令和数据的集合。I/O中临时存放着用于与周边设备进行输入输出的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>既然数据的运算是在CPU中进行的，那么在CPU内部就应该有存储数据的地方。这种存储数据的地方叫作“寄存器”。虽然也叫寄存器，但是与I/O的寄存器不同，CPU的寄存器不仅能存储数据，还具备对数据进行运算的能力。CPU带有什么样的寄存器取决于CPU的种类。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在汇编语言当中，可以将寄存器的名字指定为操作数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>IX、IY、SP、PC这4个寄存器的大小是16比特，其余寄存器的大小都是8比特。寄存器的用途取决于它的类型。有的指令只能将特定的寄存器指定为操作数。举例来说，A寄存器也叫作“累加器”，是运算的核心。所以连接到它上面的导线也一定会比其他寄存器的多。F寄存器也叫作“标志寄存器”，用于存储运算结果的状态，比如是否发生了进位，数字大小的比较结果等。PC寄存器也叫作“程序指针”，存储着指向CPU接下来要执行的指令的地址。PC寄存器的值会随着滴答滴答的时钟信号自动更新，可以说程序就是依靠不断变化的PC寄存器的值运行起来的。SP寄存器也叫作“栈顶指针”，用于在内存中创建出一块称为“栈”的临时数据存储区域。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-4-追踪程序的运行过程" tabindex="-1"><a class="header-anchor" href="#◆-3-4-追踪程序的运行过程" aria-hidden="true">#</a> ◆ 3.4 追踪程序的运行过程</h3>
<blockquote>
<blockquote>
<p>用汇编语言编写的程序是不能直接运行的，必须先转换成机器语言。机器语言是唯一一种CPU能直接理解的编程语言。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-5-尝试手工汇编" tabindex="-1"><a class="header-anchor" href="#◆-3-5-尝试手工汇编" aria-hidden="true">#</a> ◆ 3.5 尝试手工汇编</h3>
<blockquote>
<blockquote>
<p>在CPU的资料中，明确写有所有可以使用的助记符，以及助记符转换成机器语言后的数值。只要查看这些资料，就可以把用汇编语言编写的程序手工转换成机器语言的程序，这样的工作称为“手工汇编”。进行手工汇编时，要一行一行地把用汇编语言编写的程序转换成机器语言。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-6-尝试估算程序的执行时间" tabindex="-1"><a class="header-anchor" href="#◆-3-6-尝试估算程序的执行时间" aria-hidden="true">#</a> ◆ 3.6 尝试估算程序的执行时间</h3>
<blockquote>
<blockquote>
<p>比起C语言或BASIC等高级语言，汇编语言的语法简单、指令数少，说不定会更加容易学习，可是今天还在使用汇编语言的人却是凤毛麟角了。使用汇编语言编程时，因为要事无巨细地列出计算机的行为，所以程序会变得冗长繁复。因此诸位只在纸上体验汇编语言、机器语言以及手工汇编就足够了。只要具备了这些知识，即便是用C语言或BASIC等编程语言编程时，也一样能感受到计算机底层的工作方式，也就是说变得更加了解计算机了。</p>
</blockquote>
</blockquote>
<h2 id="◆-第4章-程序像河水一样流动着" tabindex="-1"><a class="header-anchor" href="#◆-第4章-程序像河水一样流动着" aria-hidden="true">#</a> ◆ 第4章 程序像河水一样流动着</h2>
<blockquote>
<blockquote>
<p>用户的操作等产生事件后，由事件决定程序的流程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>初级问题：流程图（Flow Chart）是指用图的形式表示程序的流程。中级问题：与河流的流动方式一样，程序的流程也分为三种。在程序中，把犹如水流向着一个方向流淌的流程称作“顺序执行”；把犹如水流流着流着产生了支流的流程称作“条件分支”；把犹如水流卷成漩涡的流程称作“循环”。高级问题：Windows应用程序的运行就是由事件驱动的。例如，选择“打开文件”菜单项就能打开一个窗口，在里面可以指定要打开文件的名称和存储位置。之所以能够这样是因为一旦触发了“选中了菜单项”这个事件，程序的流程就相应地流转到了处理打开窗口的那部分。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-程序的流程分为三种" tabindex="-1"><a class="header-anchor" href="#◆-4-1-程序的流程分为三种" aria-hidden="true">#</a> ◆ 4.1 程序的流程分为三种</h3>
<blockquote>
<blockquote>
<p>CPU中有各种各样的各司其职的寄存器。其中有一个被称为PC （ProgramCounter，程序计数器）的寄存器，负责存储内存地址，该地址指向下一条即将执行的指令。每解释执行完一条指令，PC寄存器的值就会自动被更新为下一条指令的地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>PC寄存器的值在大多数情况下只会增加。下面假设PC寄存器正指向内存中一个从10号地址开始的3字节指令。CPU解释执行完这条指令后，PC寄存器中的值就变成10+3 = 13了。也就是说，程序基本上是从内存中的低地址（编号较小的地址）开始，向着高地址（编号较大的地址）流下去的。我们把程序的这种流动称为“顺序执行”</p>
</blockquote>
</blockquote>
<h3 id="◆-4-6-特殊的程序流程——中断处理" tabindex="-1"><a class="header-anchor" href="#◆-4-6-特殊的程序流程——中断处理" aria-hidden="true">#</a> ◆ 4.6 特殊的程序流程——中断处理</h3>
<blockquote>
<blockquote>
<p>介绍一下两种特殊的程序流程——中断处理和事件驱动</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>中断处理是指计算机使程序的流程突然跳转到程序中的特定地方，这样的地方被称为中断处理例程（Routine）或是中断处理程序（Handler），而这种跳转是通过CPU所具备的硬件功能实现的。人们通常把中断处理比作是接听电话。假设诸位都正坐在书桌前处理文件，这时突然来电话了，诸位就不得不停下手头的工作去接电话，接完电话再回到之前的工作。像这样由于外部的原因使正常的流程中断，中断后再返回到之前流程的过程就是中断处理流程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在诸位编写的程序中并不需要编写有关中断处理的代码。因为处理中断请求的程序，或是内置于被烧录在计算机ROM中的BIOS系统（Basic Input Output System，基本输入输出系统）中，或是内置于Windows等操作系统中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机具有硬件上处理中断的能力；中断一词的英文是Interrupt。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-7-特殊的程序流程——事件驱动" tabindex="-1"><a class="header-anchor" href="#◆-4-7-特殊的程序流程——事件驱动" aria-hidden="true">#</a> ◆ 4.7 特殊的程序流程——事件驱动</h3>
<blockquote>
<blockquote>
<p>经常用事件驱动的方式编写那些工作在GUI（Graphical User Inteface，图形用户界面）环境中的应用程序，例如Windows操作系统中的应用程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在程序中有WinMain()和WndProc()两个函数（代码块）。WinMain()是在程序启动时被调用的主例程（Main Routine）。而WndProc()并不会被诸位所编写的程序本身调用，Windows操作系统才是WndProc()的调用者。这种机制就使得Windows和诸位所编写的应用程序这两个程序之间可以进行对话。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常把用户在应用程序中点击鼠标或者敲击键盘这样的操作称作“事件”（Event）。负责检测事件的是Windows。Windows通过调用应用程序的WndProc()函数通知应用程序事件的发生。而应用程序则根据事件的类型做出相应的处理。这种机制就是事件驱动。可以说事件驱动也是一种特殊的条件分支，它以从Windows送来的通知为条件，根据通知的内容决定程序下一步的流程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要实现事件驱动，就必须把应用程序中的WndProc()函数（称为窗口过程，Window Procedure）的起始内存地址告诉Windows。这一步将在应用程序WinMain()中作为初始化处理被执行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序的流程还是只有顺序执行、条件分支和循环这三种，这一点是没有改变的。其中的顺序执行是最基本的程序流程，这是因为CPU中的PC寄存器的值会自动更新。条件分支和循环，在高级语言中用程序块表示，在机器语言和汇编语言中用跳转指令表示，在硬件上是通过把PC寄存器的值设为要跳转到的目的地的内存地址来实现。</p>
</blockquote>
</blockquote>
<h2 id="◆-第5章-与算法成为好朋友的七个要点" tabindex="-1"><a class="header-anchor" href="#◆-第5章-与算法成为好朋友的七个要点" aria-hidden="true">#</a> ◆ 第5章 与算法成为好朋友的七个要点</h2>
<blockquote>
<blockquote>
<p>“哨兵”指的是一种含有特殊值的数据，可用于标识数据的结尾等。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-3-要点2-计算机不靠直觉而是机械地解决问题" tabindex="-1"><a class="header-anchor" href="#◆-5-3-要点2-计算机不靠直觉而是机械地解决问题" aria-hidden="true">#</a> ◆ 5.3 要点2：计算机不靠直觉而是机械地解决问题</h3>
<blockquote>
<blockquote>
<p>辗转相除法（又称欧几里得算法）就是一个机械地求解最大公约数问题的算法。在辗转相除法中分为使用除法运算和使用减法运算两种方法。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-1-要点1-了解内存和变量的关系" tabindex="-1"><a class="header-anchor" href="#◆-6-1-要点1-了解内存和变量的关系" aria-hidden="true">#</a> ◆ 6.1 要点1：了解内存和变量的关系</h3>
<blockquote>
<blockquote>
<p>计算机所处理的数据都存储在了被称为内存的IC（Integrated Circuit，集成电路）中。在一般的个人计算机中，内存内部被分割成了若干个数据存储单元，每个单元可以存储8比特的数据（8比特 = 1字节）。为了区分各个单元，每个单元都被分配了一个编号，这个编号被称为“地址”或是“门牌号码”。如果一台个人计算机装配有64M字节的内存，那么就会有从0到64M（M = 100万）这么多个地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在C语言、Java、BASIC等几乎所有的编程语言中，都是使用变量把数据存储进内存，或从内存中把数据读出来的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于程序员来说，他们并不需要知道变量a被存储到内存空间中的哪个地址上了。因为当程序运行时是由操作系统为我们从尚未使用的内存空间中划分出一部分分配给变量a的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>变量是程序中数据存储的最小单位，每个变量都对应着一块物理上的内存空间。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-2-要点2-了解作为数据结构基础的数组" tabindex="-1"><a class="header-anchor" href="#◆-6-2-要点2-了解作为数据结构基础的数组" aria-hidden="true">#</a> ◆ 6.2 要点2：了解作为数据结构基础的数组</h3>
<blockquote>
<blockquote>
<p>数组是数据结构的基础，之所以这么说是因为数组反映了内存的物理结构本身。在内存中存储数据的空间是连续分布的。而在程序中，往往要从内存整体中分配出一块连续的空间以供使用。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-3-要点3-了解数组的应用——作为典型算法的数据结构" tabindex="-1"><a class="header-anchor" href="#◆-6-3-要点3-了解数组的应用——作为典型算法的数据结构" aria-hidden="true">#</a> ◆ 6.3 要点3：了解数组的应用——作为典型算法的数据结构</h3>
<blockquote>
<blockquote>
<p>通常把像变量i这样的用于记录循环次数的变量称为循环计数器（LoopCounter）。数组之所以方便，就是因为可以把循环计数器的值与数组的索引对应起来使用</p>
</blockquote>
</blockquote>
<h3 id="◆-6-4-要点4-了解并掌握典型数据结构的类型和概念" tabindex="-1"><a class="header-anchor" href="#◆-6-4-要点4-了解并掌握典型数据结构的类型和概念" aria-hidden="true">#</a> ◆ 6.4 要点4：了解并掌握典型数据结构的类型和概念</h3>
<blockquote>
<blockquote>
<p>数组是一种直接利用内存物理结构（计算机的特性）的最基本的数据结构。只需使用for语句，就可以连续地处理数组中所存储的数据，实现各种各样的算法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这些数据结构其实都是通过程序从逻辑上改变了内存的物理结构，即数据在内存上呈现出的连续分布状态。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-5-要点5-了解栈和队列的实现方法" tabindex="-1"><a class="header-anchor" href="#◆-6-5-要点5-了解栈和队列的实现方法" aria-hidden="true">#</a> ◆ 6.5 要点5：了解栈和队列的实现方法</h3>
<blockquote>
<blockquote>
<p>数组有时可以转化为栈，有时可以转化为队列</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实现栈这种数据结构时，首先要定义一个数组和一个变量。数组中所包含的元素个数就是栈的大小（栈中最多能存放多少个数据）。变量中则存储着一个索引，指向存储在栈中最顶端的数据，该变量被称为“栈顶指针”。栈的大小可以根据程序的需求任意指定。假设最多也就有100个数据，那么定义一个能把它们都存储下来的栈就可以了，这样的话就可以定义一个元素数为100的数组。这个数组就是栈的基础。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-6-要点6-了解结构体的组成" tabindex="-1"><a class="header-anchor" href="#◆-6-6-要点6-了解结构体的组成" aria-hidden="true">#</a> ◆ 6.6 要点6：了解结构体的组成</h3>
<blockquote>
<blockquote>
<p>先在struct这个关键词后面接上结构体的名字（也被称作是结构体的标签），然后在名字后面接上用“{”和“}”括起来的程序块，并在程序块中列出若干个数据项。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一旦定义完结构体，就可以把结构体当作是一种数据类型，用它来定义变量。如果把结构体TestResult用作数据类型并定义出了一个名为xiaoming的变量（代表小明的成绩），那么在内存上就相应地分配出了一块空间，这块空间由用于存储Chinese、Math、English这三个成员（Member）数据所需的空间汇集而来。被汇集到结构体中的每个数据项都被称作“结构体的成员”。在为结构体的成员赋值或是读取成员的值时，可以使用形如xiaoming.Chinese（表示小明的语文成绩）的表达式，即以“.”分割变量和结构体的成员</p>
</blockquote>
</blockquote>
<h3 id="◆-6-7-要点7-了解链表和二叉树的实现方法" tabindex="-1"><a class="header-anchor" href="#◆-6-7-要点7-了解链表和二叉树的实现方法" aria-hidden="true">#</a> ◆ 6.7 要点7：了解链表和二叉树的实现方法</h3>
<blockquote>
<blockquote>
<p>链表是一种类似数组的数据结构，这个“数组”中的每个元素和另一个元素都好像是手拉着手一样。在现有的以结构体TestResult为数据类型的数组Student[100]中，为了让各个元素“把手拉起来”，就需要在结构体中再添加一个成员</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在C语言中，把存储着地址的变量称为“指针”。这里的“*”（星号）就是指针的标志。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不使用链表且还要对大量的数据进行排序时应该怎么处理。答案是那就必须要改变元素在内存上的物理排列顺序了。这不仅要改变大量数据的位置，而且程序的处理时间也会变长。如果是使用链表，对元素的排序就只需要变更Ptr的值，程序的处理时间也会缩短。这个特性也适用于对元素进行删除和插入。在实际的程序中，为了能够处理大量的数据，都会在各种各样的情景下灵活地运用链表。不使用链表的情况倒是很少见。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只要明白了链表的构造，也就明白了二叉树的实现方法。在二叉树的实现中，用的还是自我引用的结构体，只不过要改为要带有两个连接信息的成员的自我引用结构体</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二叉树多用于实现那些用于搜索数据的算法，比如“二分查找法”。比起只使用链表，使用二叉树能够更快地找到数据。因为搜索数据时并不是像在简单数组中那样沿一条线搜索，而是寻着二叉树不断生长出来的两根树杈中的某一枝搜索，这样就能更快地找到目标数据了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果诸位有偏爱的编程语言，也请想一想用那门语言该如何实现栈、队列、链表和二叉树。无论是在哪种编程语言中，数据结构的基础都是数组，因此设法灵活地运用数组才是关键。</p>
</blockquote>
</blockquote>
<h2 id="◆-第7章-成为会使用面向对象编程的程序员吧" tabindex="-1"><a class="header-anchor" href="#◆-第7章-成为会使用面向对象编程的程序员吧" aria-hidden="true">#</a> ◆ 第7章 成为会使用面向对象编程的程序员吧</h2>
<blockquote>
<blockquote>
<p>++是表示自增（每次只将变量的值增加1）的C语言运算符。之所以被命名为C++，是因为C++在C语言的基础上增加了面向对象的机制这一点。另外，将C++进一步改良的编程语言就是Java和C#语言。</p>
</blockquote>
</blockquote>
<h3 id="◆-column-来自企业培训现场" tabindex="-1"><a class="header-anchor" href="#◆-column-来自企业培训现场" aria-hidden="true">#</a> ◆ COLUMN 来自企业培训现场</h3>
<blockquote>
<blockquote>
<p>Java是一种在屏蔽了计算机构造的框架中使用的编程语言。虽然使用了Java就可以进行面向对象编程，但这却是一种不用考虑计算机底层状况的编程方法。只要使用了Java提供的类库（代码的集合），不需要考虑算法和数据结构就能解决问题。举例来说，Java的程序员在使用栈这种数据结构时，只需要调用类名为Stack的类就可以轻易地实现功能，因为该类为程序员提供了栈结构本身以及入栈（Push）和出栈（Pop）方法。程序员完全可以无视栈顶指针[插图]的存在。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>先精通C语言再学习Java语言比较好</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以C语言为基础发展出了C++语言，而Java又是以C++为基础开发出的编程语言。如果精通了C语言，不但能够理解Java的优点（高效开发和易于维护），而且能够平滑地过渡到Java的语法结构上。虽然在新人培训上也是有时间限制的，但正所谓欲速则不达。笔者总觉得通过花费与培养一个Java程序员相同的时间，是可以培养出一个熟练掌握C语言的程序员的。然而对于后者，他的经验在Java上也是可以发挥作用的。</p>
</blockquote>
</blockquote>
<h2 id="◆-第9章-通过七个简单的实验理解tcp-ip-网络" tabindex="-1"><a class="header-anchor" href="#◆-第9章-通过七个简单的实验理解tcp-ip-网络" aria-hidden="true">#</a> ◆ 第9章 通过七个简单的实验理解TCP/IP 网络</h2>
<blockquote>
<blockquote>
<p>LAN是Local Area Network（局域网）的缩略语。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>TCP/IP 是 Transmission Control Protocol/InternetProtocol（传输控制协议和网际协议）的缩略语。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所谓MAC地址就是能够标识网卡的编号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常把在一栋建筑物内或是一间办公室里的那种小规模网络称作LAN。与此相对，把互联网那样的大规模网络称作WAN（Wide AreaNetwork，广域网）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>TCP/IP协议族是互联网所使用的一套标准协议。TCP/IP这个名字意味着同时使用了TCP协议和IP协议。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>几乎所有的网卡都会在上市前被分配一个不可变更的MAC地址。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-1-实验环境" tabindex="-1"><a class="header-anchor" href="#◆-9-1-实验环境" aria-hidden="true">#</a> ◆ 9.1 实验环境</h3>
<blockquote>
<blockquote>
<p>“集线器”（Hub）是负责把各台计算机的网线相互连接在一起的集线设备。“路由器”（Router）是负责把公司内的网络和互联网连接起来的设备。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常把像这样部署在一间办公室内的小规模网络称作LAN；把像互联网那样将企业和企业联结起来的大规模网络称作WAN。路由器负责将LAN连接到WAN上。路由器的一端会先连接到互联网服务提供商的路由器上。而在服务提供商（Provider）那里，又会继续将它们的路由器连接到其他路由器上，通过这种方式最终接入到互联网的主干线缆上。以企业内的LAN为一个基本单位，通过服务提供商的路由器把它们和其他企业的LAN互联起来，而把这种联结延伸至世界各个角落的正是互联网。把像LAN这样的一张张小网都联结起来，就能织成一张叫作互联网的大网。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-2-实验1-查看网卡的mac地址" tabindex="-1"><a class="header-anchor" href="#◆-9-2-实验1-查看网卡的mac地址" aria-hidden="true">#</a> ◆ 9.2 实验1：查看网卡的MAC地址</h3>
<blockquote>
<blockquote>
<p>在组建公司内部的网络时，笔者购买了如下4种硬件：1．安装到每台计算机上的网卡（NIC, Network Interface Card）;2．插到网卡上的网线；3．把网线汇集起来连接到一处的集线器；4．用于接入到互联网的路由器。需要注意的是这些硬件的规格只有相互匹配了才能连接在一起。网卡选择的是规格极其普通的以太网（Ethernet）网卡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>网卡的种类一旦确定下来，网线、集线器和路由器的规格也就确定了。既然硬件的规格一致了，就意味着其中传输的电信号的形式也是一致的。这样的话无论是Linux的计算机，还是Windows的计算机，它们在硬件上已经是连通的了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以太网使用了一种略显粗糙的方法连接LAN内的计算机（如图9.2所示）。以太网中的每台计算机都需要先确认一件事：在网线上有没有其他的计算机正在传输电信号，也就是说要先确保没有人在占用网络，然后才能发送自己想传输的电信号。谁先抢到了网线的使用权，谁就先发送。万一遇到了多台计算机同时都想发送电信号的情况，只需要让这些计算机等待一段长度随机的时间后再重新发送相同的电信号即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在以太网中，发送给一台计算机的电信号也可以被其他所有的计算机收到。一台计算机收到了电信号以后会先做判断，如果是发送给自己的则选择接收，反之则选择忽略。可以用被称作MAC（Media Access Control）地址的编号来指定电信号的接收者。在每一块网卡所带有的ROM（Read Only Memory，只读存储器）中，都预先烧录了一个唯一的MAC地址。网卡的制造厂商负责确定这个MAC地址是什么。因为MAC地址是由制造厂商的编号和产品编号两部分组成的，所以世界上的每一个MAC地址都是独一无二的。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-3-实验2-查看计算机的ip地址" tabindex="-1"><a class="header-anchor" href="#◆-9-3-实验2-查看计算机的ip地址" aria-hidden="true">#</a> ◆ 9.3 实验2：查看计算机的IP地址</h3>
<blockquote>
<blockquote>
<p>在TCP/IP网络中，除了硬件上的MAC地址，还需要为每台计算机设定一个软件上的编号。这个编号就是众所周知的IP地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>IP地址是一个32比特的整数，每8比特为一组，组间用“.”分隔，分成4段表示。8比特所表示的整数换算成十进制后范围是0～255，因此可用作IP地址的整数是0.0.0.0～255.255.255.255，共计4294967296个。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过IP地址就可以轻松地对计算机进行分组管理了。比如用IP地址中第1段到第3段的数值代表公司，用第4段的数值代表公司内部的计算机。例如，在AAA.BBB.CCC这个公司内，如果有一台计算机的编号是×××，那么它的IP地址就是AAA.BBB.CCC.XXX。而看到了AAA.BBB.CCC.YYY这样一个IP地址，就能知道它是这个公司内的另一台计算机。通常把IP地址中表示分组（即LAN）的部分称作“网络地址”、表示各台计算机（即主机）的部分称为“主机地址”。在本例中，AAA.BBB.CCC这一部分是网络地址，而XXX或YYY的部分是主机地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>子网掩码的作用是标识出在32比特的IP地址中，从哪一位到哪一位是网络地址，从哪一位到哪一位是主机地址。把255.255.255.240用二进制表示的话，结果如下所示。11111111.11111111.11111111.11110000子网掩码中，值为1的那些位对应着IP地址中的网络地址，后面值为0的那些位则对应着主机地址。因此255.255.255.240这个子网掩码就表示，其所对应的IP地址前28比特是网络地址，后4比特是主机地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4个二进制数可以表示的范围是从0000到1111，共16个数。而因为最开始的0000和最后的1111具有特殊的用途，所以笔者的办公室内最多可以配置14台计算机，它们的主机地址范围是从0001到1110。但是这其中又有一台路由器，所以实际上最多只能放置13台计算机。与MAC地址一样，每个IP地址的值也都是独一无二的。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-4-实验3-了解dhcp服务器的作用" tabindex="-1"><a class="header-anchor" href="#◆-9-4-实验3-了解dhcp服务器的作用" aria-hidden="true">#</a> ◆ 9.4 实验3：了解DHCP服务器的作用</h3>
<blockquote>
<blockquote>
<p>DHCP的全称是Dynamic Host Configuration Protocol（动态主机设置协议）。在笔者搭建的LAN中，使用了一台装有Linux的计算机充当DHCP服务器的角色。因为Windows的计算机也同样支持DHCP的协议，所以即使服务器上装的是Linux，而客户端装的是Windows，也没有关系。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DHCP服务器上记录着可以被分配到LAN内计算机的IP地址范围和子网掩码的值。作为DHCP客户端的计算机在启动时，就可以从中知道哪些IP地址还没有分配给其他计算机。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>路由器就是从LAN通往互联网世界的入口（Gateway）。路由器的IP地址也可以从DHCP服务器获取。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-5-实验4-路由器是数据传输过程中的指路人" tabindex="-1"><a class="header-anchor" href="#◆-9-5-实验4-路由器是数据传输过程中的指路人" aria-hidden="true">#</a> ◆ 9.5 实验4：路由器是数据传输过程中的指路人</h3>
<blockquote>
<blockquote>
<p>在分组管理下，IP地址中的网络地址部分可以代表一个组中的全部计算机，即一个LAN中的计算机全体。互联网就是用路由器把多个LAN连接起来所形成的一张大网。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>路由器正如其名，就是决定数据传输路径的设备。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与LAN内的其他计算机一样，路由器也是连接在集线器上的。因为LAN内采用了CSMA/CD机制，所以所有发送出去的数据也都会发到路由器上。当从公司内的计算机向另一家公司的计算机发送数据时会发生什么呢？首先，一个不属于LAN内计算机的IP地址会被附加到数据的发送目的地字段上。这样的数据虽然会被LAN内的计算机所忽略，但是不会被路由器忽略。因为路由器的工作原理就是查看附加到数据上的IP地址中的网络地址部分，只要发现这个数据不是发送给LAN内计算机的，就把它发送到LAN外，即互联网的世界中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>分布在世界各地的LAN中的路由器相互交换着信息，互联网正是由于这种信息的交换才得以联通。这种信息被称作“路由表”，用来记录应该把数据转发到哪里。在像互联网这样的网络中，传输路径错综复杂，而路由器就是站在各个岔路口的指路人</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在一台路由器的路由表中，只会记录通往与之相邻的路由器的路径，而并不会记录世界范围内的所有传输路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>路由表由5列构成。Network Destination、Netmask、Gateway、Interface这四列记录着数据发送的目的地和路由器的IP地址等信息。Metric这一列记录着路径的权重，这个值由某种算法决定，比如数据传输过程中经过的路由器的数量。如果遇到有多条候选路径都可以通往目的地的情况，路由器就会选择Metric值较小的那条路径。在路由表中还有如下的规则：如果数据的发送目的地就在本LAN中，则可以直接发送数据而无需经过路由器转发；反之如果在LAN外（或发送目的地的IP地址不在路由表中），则需要经过路由器转发。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-7-实验6-dns服务器可以把主机名解析成ip地址" tabindex="-1"><a class="header-anchor" href="#◆-9-7-实验6-dns服务器可以把主机名解析成ip地址" aria-hidden="true">#</a> ◆ 9.7 实验6:DNS服务器可以把主机名解析成IP地址</h3>
<blockquote>
<blockquote>
<p>在互联网的世界中，本应使用IP地址这样的数字来标识计算机才是，而刚刚却能使用一串字符www.grapecity.com来标识GrapeCity的Web服务器。实际上，在互联网中还存在着一种叫作DNS（Domain Name System，域名系统）的服务器。正是该服务器为我们把www.grapecity.com这样的域名解析为了210.160.205.80这样的IP地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常把这种由主机名和域名组合起来形成的名字称作FQDN（Fully QualifiedDomain Name，完整限定域名）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只需要使用FQDN, DNS服务器就可以自动地把它解析为IP地址了（这个过程叫作“域名解析”）。DNS服务器通常被部署在各个LAN中，里面记录着FQDN和IP地址的对应关系表。世界范围内的DNS服务器是通过相互合作运转起来的。如果一台DNS服务器无法解析域名，它就会去询问其他的DNS服务器。这套流程是自动进行的，诸位并不会意识到。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-8-实验7-查看ip地址和mac地址的对应关系" tabindex="-1"><a class="header-anchor" href="#◆-9-8-实验7-查看ip地址和mac地址的对应关系" aria-hidden="true">#</a> ◆ 9.8 实验7：查看IP地址和MAC地址的对应关系</h3>
<blockquote>
<blockquote>
<p>在互联网的世界中，到处传输的都是附带了IP地址的数据。但是能够标识作为数据最终接收者的网卡的，还是MAC地址。于是在计算机中就加入了一种程序，用于实现由IP地址到MAC地址的转换，这种功能被称作ARP（Address ResolutionProtocol，地址解析协议）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ARP的工作方式很有意思。它会对LAN中的所有计算机提问：“有谁的IP地址是210.160.205.80吗？有的话请把你的MAC地址告诉我。”通常把这种同时向所有LAN内的计算机发送数据的过程称作“广播”（Broadcast）。通过广播询问，如果有某台计算机回复了MAC地址，那么这台计算机的IP地址和MAC地址的对应关系也就明确了。ARP的工作流程也是自动进行的，诸位并不会意识到。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>ARP还提供了缓存的功能，当向各个计算机都询问完一轮之后，就会把得到的MAC地址和IP地址的对应关系缓存起来（临时保存在内存中）。存起来的这些对应关系信息称作“ARP缓存表”。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-9-tcp的作用及tcp-ip网络的层级模型" tabindex="-1"><a class="header-anchor" href="#◆-9-9-tcp的作用及tcp-ip网络的层级模型" aria-hidden="true">#</a> ◆ 9.9 TCP的作用及TCP/IP网络的层级模型</h3>
<blockquote>
<blockquote>
<p>IP协议用于指定数据发送目的地的IP地址以及通过路由器转发数据。而TCP协议则用于通过数据发送者和接收者相互回应对方发来的确认信号，可靠地传输数据。通常把像这样的数据传送方式称作“握手”（Handshake）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>TCP协议中还规定，发送者要先把原始的大数据分割成以“包”（Packet）为单位的数据单元，然后再发送，而接收者要把收到的包拼装在一起还原出原始数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>诸位敲打键盘输入的电子邮件正文等数据，并不是原封不动地发送出去的，而是先通过实现了TCP协议的程序附加上遵守TCP约束所需的信息，然后再通过实现了IP协议的程序，进一步附加上遵守IP约束所需的信息。实际上计算机发送的是以包为单位的、附加了各种各样信息的数据</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>硬件上发送数据的是网卡。在网卡之上是设备驱动程序（用于控制网卡这类硬件的程序），设备驱动程序之上是实现了IP协议的程序，IP程序之上则是实现了TCP协议的程序，而再往上才是应用程序，比如Web或电子邮件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>TCP协议使用被称作“TCP端口号”的数字识别上层的应用程序。TCP端口号中有一些是预先定义好的，比如Web使用80端口，电子邮件使用25端口（用于发送）和110端口（用于接收）。</p>
</blockquote>
</blockquote>
<h2 id="◆-第10章-试着加密数据吧" tabindex="-1"><a class="header-anchor" href="#◆-第10章-试着加密数据吧" aria-hidden="true">#</a> ◆ 第10章 试着加密数据吧</h2>
<blockquote>
<blockquote>
<p>由于只是将员工的电脑彼此相连，可能就不太需要对其间传输的数据进行加密。但是在互联网中，由于它联结的是全世界范围的企业和个人，所以会面临很多需要对数据进行加密处理的情况[插图]。举例来说，在网店购物时用户输入的信用卡卡号，就是应该被加密传输的代表性数据。假设卡号未经加密就被发送出去，那么就会面临卡号被同样接入互联网的某人盗取，信用卡被其用来肆意购物的危险。因此像这种网店页面的URL，通常都是以https://开头，表示数据正在使用加密的方式进行传输。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-1-先来明确一下什么是加密" tabindex="-1"><a class="header-anchor" href="#◆-10-1-先来明确一下什么是加密" aria-hidden="true">#</a> ◆ 10.1 先来明确一下什么是加密</h3>
<blockquote>
<blockquote>
<p>由于计算机会把所有的数据都用数字表示，所以即便数据有各种展现形式，对其加密的技术却是基本相同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>文本数据可以由各种各样的字符构成。其中每个字符都被分配了一个数字，我们称之为“字符编码”。定义了应该把哪个编码分配给哪个字符的字符编码体系叫作字符集。字符集分为ASCII字符集、JIS字符集、Shift-JIS字符集，EUC字符集、Unicode字符集等若干种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机会把文本数据处理成数字序列，例如在使用了ASCII编码的计算机中，就会把NIKKEI处理成“78 73 75 75 69 73”。可是只要把这一串数字转换为对应的字符显示在屏幕上，就又变成了人们所认识的NIKKEI了。通常把这种未经加密的文本数据称为“明文”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据一旦以明文的方式在网络中传输，就会有被盗取滥用的危险，因此要对明文进行加密，将它转换成为“密文”。当然密文也仅仅是一串数字，但是如果是把密文显示在屏幕上，那么在人类看来显示的也只不过是读不懂、没有意义的字符序列罢了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然存在各种各样的加密技术，但是其中的基本手段无外乎还是字符编码的变换，即将构成明文的每个字符的编码分别变换成其他的数值。通过反转这种变换过程，加密后的文本数据就可以还原。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-2-错开字符编码的加密方式" tabindex="-1"><a class="header-anchor" href="#◆-10-2-错开字符编码的加密方式" aria-hidden="true">#</a> ◆ 10.2 错开字符编码的加密方式</h3>
<blockquote>
<blockquote>
<p>该程序通过把每一个字符的编码与密钥做XOR运算（eXclusive OR，逻辑异或运算），将明文转换成密文（如代码清单10.3所示）。XOR运算的有趣之处在于，用XOR运算加密后的密文，可以通过相同的XOR运算解密。也就是说，一个程序既可用于加密又可用于解密，很方便</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>XOR运算的法则是把两个数据先分别用二进制表示，然后当一个数据中的某一位与另一个数据中的1相对时，就将这一位反转（若这一位是0就变成1，是1就变成0）[插图]。因为是靠翻转数字实现的加密，所以只要再翻转一次就可以解密。</p>
</blockquote>
</blockquote>
</div></template>



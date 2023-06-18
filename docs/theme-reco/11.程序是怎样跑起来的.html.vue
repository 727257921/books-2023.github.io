<template><div><h1 id="程序是怎样跑起来的" tabindex="-1"><a class="header-anchor" href="#程序是怎样跑起来的" aria-hidden="true">#</a> 程序是怎样跑起来的</h1>
<p>矢泽久雄</p>
<h2 id="◆-第1章-对程序员来说cpu是什么" tabindex="-1"><a class="header-anchor" href="#◆-第1章-对程序员来说cpu是什么" aria-hidden="true">#</a> ◆ 第1章 对程序员来说CPU是什么</h2>
<blockquote>
<blockquote>
<p>1．程序是什么？</p>
<p>2．程序是由什么组成的？</p>
<p>3．什么是机器语言？</p>
<p>4．正在运行的程序存储在什么位置？</p>
<p>5．什么是内存地址？</p>
<p>6．计算机的构成元件中，负责程序的解释和运行的是哪个？</p>
<p>答案：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．指示计算机每一步动作的一组指令</p>
<p>2．指令和数据</p>
<ol start="3">
<li>CPU可以直接识别并使用的语言</li>
<li>内存</li>
<li>内存中，用来表示命令和数据存储位置的数值</li>
<li>CPU</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU能够直接识别和执行的只有机器语言。使用C、Java等语言编写的程序，最后都会转化成机器语言。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>硬盘和磁盘等媒介上保存的程序被复制到内存后才能运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存中保存命令和数据的场所，通过地址来标记和指定。地址由整数值表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机的构成元件中，根据程序的指令来进行数据运算，并控制整个计算机的设备称作CPU。大家熟知的奔腾（Pentium）就是CPU的一种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU内部由数百万至数亿个晶体管构成</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序员还需要理解CPU是如何运行的，特别是要弄清楚负责保存指令和数据的寄存器的机制。了解了寄存器，也就自然而然地理解了程序的运行机制。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-1-cpu的内部结构解析" tabindex="-1"><a class="header-anchor" href="#◆-1-1-cpu的内部结构解析" aria-hidden="true">#</a> ◆ 1.1 CPU的内部结构解析</h3>
<blockquote>
<blockquote>
<p>CPU所负责的就是解释和运行最终转换成机器语言的程序内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110122501107.png" alt="image-20220110122501107"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU和内存是由许多晶体管组成的电子部件，通常称为IC （Integrated Circuit，集成电路</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU的内部由寄存器、控制器、运算器和时钟四个部分构成，各部分之间由电流信号相互连通</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>。寄存器可用来暂存指令、数据等处理对象，可以将其看作是内存的一种。根据种类的不同，一个CPU内部会有20～100个寄存器。控制器负责把内存上的指令、数据等读入寄存器，并根据指令的执行结果来控制整个计算机。运算器负责运算从内存读入寄存器的数据。时钟负责发出CPU开始计时的时钟信号。不过，也有些计算机的时钟位于CPU的外部。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110123236657.png" alt="image-20220110123236657"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常所说的内存指的是计算机的主存储器（main memory），简称主存。主存通过控制芯片等与CPU相连，主要负责存储指令和数据。主存由可读写的元素构成，每个字节（1字节=8位）都带有一个地址编号。CPU可以通过该地址读取主存中的指令和数据，当然也可以写入数据。但有一点需要注意，主存中存储的指令和数据会随着计算机的关机而自动清除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序启动后，根据时钟信号，控制器会从内存中读取指令和数据。通过对这些指令加以解释和运行，运算器就会对数据进行运算，控制器根据该运算结果来控制计算机。看到“控制”一词时，大家可能会将事情想象得过于复杂，其实所谓的控制就是指数据运算以外的处理（主要是数据输入输出的时机控制）。比如内存和磁盘等媒介的输入输出、键盘和鼠标的输入、显示器和打印机的输出等，这些都是控制的内容。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-cpu是寄存器的集合体" tabindex="-1"><a class="header-anchor" href="#◆-1-2-cpu是寄存器的集合体" aria-hidden="true">#</a> ◆ 1.2 CPU是寄存器的集合体</h3>
<blockquote>
<blockquote>
<p>程序是把寄存器作为对象来描述的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>汇编语言采用助记符（memonic）来编写程序，每一个原本是电气信号的机器语言指令都会有一个与其相应的助记符，助记符通常为指令功能的英语单词的简写。例如，mov和add分别是数据的存储（move）和相加（addition）的简写。汇编语言和机器语言基本上是一一对应的。这一点和C语言、Java语言等高级编程语言有很大不同，这也是我们使用汇编语言来说明CPU运行的原因。通常我们将汇编语言编写的程序转化成机器语言的过程称为汇编；反之，机器语言程序转化成汇编语言程序的过程则称为反汇编。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>机器语言级别的程序是通过寄存器来处理的。也就是说，在程序员看来“CPU是寄存器的集合体”。至于控制器、运算器和时钟，程序员只需要知道CPU中还有这几部分就足够了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对程序使用寄存器来实现数据的存储和加法运算这一情况应该有所了解了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>eax和ebp是CPU内部的寄存器的名称。内存的存储场所通过地址编号来区分，而寄存器的种类则通过名字来区分。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用高级语言编写的程序会在编译后转化成机器语言，然后再通过CPU内部的寄存器来处理。例如，a=1+2这样的高级语言的代码程序在转化成机器语言后，就是利用寄存器来进行相加运算和存储处理的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不同类型的CPU，其内部寄存器的数量、种类以及寄存器存储的数值范围都是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>寄存器中存储的内容既可以是指令也可以是数据。其中，数据分为“用于运算的数值”和“表示内存地址的数值”两种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据种类不同，存储该数值的寄存器也不同。CPU中每个寄存器的功能都是不同的。用于运算的数值放在累加寄存器中存储，表示内存地址的数值则放在基址寄存器和变址寄存器中存储。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110130445740.png" alt="image-20220110130445740"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU是具有各种功能的寄存器的集合体。其中，程序计数器、累加寄存器、标志寄存器、指令寄存器和栈寄存器都只有一个，其他的寄存器一般有多个。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110130812155.png" alt="image-20220110130812155"></p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-决定程序流程的程序计数器" tabindex="-1"><a class="header-anchor" href="#◆-1-3-决定程序流程的程序计数器" aria-hidden="true">#</a> ◆ 1.3 决定程序流程的程序计数器</h3>
<blockquote>
<blockquote>
<p>用户发出启动程序的指示后，Windows等操作系统[会把硬盘中保存的程序复制到内存中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实际上，一个命令和数据通常被存储在多个地址上，但为了便于说明，图1-4中把指令、数据分配到了一个地址中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110130827363.png" alt="image-20220110130827363"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>地址0100是程序运行的开始位置。Windows等操作系统把程序从硬盘复制到内存后，会将程序计数器（CPU寄存器的一种）设定为0100，然后程序便开始运行。CPU每执行一个指令，程序计数器的值就会自动加1。例如，CPU执行0100地址的指令后，程序计数器的值就变成了0101（当执行的指令占据多个内存地址时，增加与指令长度相应的数值）。然后，CPU的控制器就会参照程序计数器的数值，从内存中读取命令并执行。也就是说，程序计数器决定着程序的流程。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-4-条件分支和循环机制" tabindex="-1"><a class="header-anchor" href="#◆-1-4-条件分支和循环机制" aria-hidden="true">#</a> ◆ 1.4 条件分支和循环机制</h3>
<blockquote>
<blockquote>
<p>程序的流程分为顺序执行、条件分支和循环三种。顺序执行是指按照地址内容的顺序执行指令。条件分支是指根据条件执行任意地址的指令。循环是指重复执行同一地址的指令。顺序执行的情况比较简单，每执行一个指令程序计数器的值就自动加1。但若程序中存在条件分支和循环，机器语言的指令就可以将程序计数器的值设定为任意地址（不是+1）。这样一来，程序便可以返回到上一个地址来重复执行同一个指令，或者跳转到任意地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图1-5表示把内存中存储的数值（示例中是123）的绝对值输出到显示器的程序的内存状态。程序运行的开始位置是0100地址。随着程序计数器数值的增加，当到达0102地址时，如果累加寄存器的值是正数，则执行跳转指令（jump指令）跳转到0104地址。此时，由于累加寄存器的值是123，为正数，因此0103地址的指令被跳过，程序的流程直接跳转到了0104地址。也就是说，“跳转到0104地址”这个指令间接执行了“将程序计数器设定成0104地址”这个操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110131553071.png" alt="image-20220110131553071"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>条件分支和循环中使用的跳转指令，会参照当前执行的运算结果来判断是否跳转。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无论当前累加寄存器的运算结果是负数、零还是正数，标志寄存器都会将其保存（也负责存放溢出和奇偶校验的结果)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU在进行运算时，标志寄存器的数值会根据运算结果自动设定。条件分支在跳转指令前会进行比较运算。至于是否执行跳转指令，则由CPU在参考标志寄存器的数值后进行判断。运算结果的正、零、负三种状态由标志寄存器的三个位表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>标志寄存器的第一个字节位、第二个字节位和第三个字节位的值为1时，表示运算结果分别为正数、零和负数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设要比较累加寄存器中存储的XXX值和通用寄存器中存储的YYY值，执行比较的指令后，CPU的运算装置就会在内部（暗中）进行XXX-YYY的减法运算。而无论减法运算的结果是正数、零还是负数，都会保存到标志寄存器中。结果为正表示XXX比YYY大，零表示XXX和YYY相等，负表示XXX比YYY小。程序中的比较指令，就是在CPU内部做减法运算。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-5-函数的调用机制" tabindex="-1"><a class="header-anchor" href="#◆-1-5-函数的调用机制" aria-hidden="true">#</a> ◆ 1.5 函数的调用机制</h3>
<blockquote>
<blockquote>
<p>函数调用处理也是通过把程序计数器的值设定成函数的存储地址来实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这和条件分支、循环的机制有所不同，因为单纯的跳转指令无法实现函数的调用。函数的调用需要在完成函数内部的处理后，处理流程再返回到函数调用点（函数调用指令的下一个地址）。因此，如果只是跳转到函数的入口地址，处理流程就不知道应该返回至哪里了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图1-7是给变量a和b分别代入123和456后，将其赋值给参数（parameter）来调用MyFunc函数的C语言程序。图中的地址是将C语言编译成机器语言后运行时的地址。由于1行C语言程序在编译后通常会变成多行的机器语言，所以图中的地址是离散的。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110132123031.png" alt="image-20220110132123031"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过跳转指令把程序计数器的值设定成0260也可实现调用MyFunc函数。函数的调用原点（0132地址）和被调用函数（0260地址）之间的数据传递，可以通过内存或寄存器来实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当函数处理进行到最后的0354地址时，我们知道应该将程序计数器的值设定成函数调用后要执行的0154地址，但实际上这一操作根本无法实现。那么，怎么办才好呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>机器语言的call指令和return指令能够解决这个问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>函数调用使用的是call指令，而不是跳转指令。在将函数的入口地址设定到程序计数器之前，call指令会把调用函数后要执行的指令地址存储在名为栈[插图]的主存内。函数处理完毕后，再通过函数的出口来执行return命令。return命令的功能是把保存在栈中的地址设定到程序计数器中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MyFunc函数被调用之前，0154地址保存在栈中。MyFunc函数的处理完毕后，栈中的0154地址就会被读取出来，然后再被设定到程序计数器中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110132704846.png" alt="image-20220110132704846"></p>
</blockquote>
</blockquote>
<h3 id="◆-1-6-通过地址和索引实现数组" tabindex="-1"><a class="header-anchor" href="#◆-1-6-通过地址和索引实现数组" aria-hidden="true">#</a> ◆ 1.6 通过地址和索引实现数组</h3>
<blockquote>
<blockquote>
<p>基址寄存器和变址寄存器。通过这两个寄存器，我们可以对主内存上特定的内存区域进行划分，从而实现类似于数组注1的操作。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110132811186.png" alt="image-20220110132811186"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们用十六进制数[插图]将计算机内存上00000000～FFFFFFFF的地址划分出来。那么，凡是该范围的内存区域，只要有一个32位的寄存器，即可查看全部的内存地址。但如果想要像数组那样分割特定的内存区域以达到连续查看的目的，使用两个寄存器会更方便些。例如，查看10000000地址～1000FFFF地址时，如图1-9所示，可以将10000000存入基址寄存器，并使变址寄存器的值在00000000～0000FFFF变化。CPU则会把基址寄存器+变址寄存器的值解释为实际查看的内存地址。变址寄存器的值就相当于高级编程语言程序中数组的索引功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110132823779.png" alt="image-20220110132823779"></p>
</blockquote>
</blockquote>
<h3 id="◆-1-7-cpu的处理其实很简单" tabindex="-1"><a class="header-anchor" href="#◆-1-7-cpu的处理其实很简单" aria-hidden="true">#</a> ◆ 1.7 CPU的处理其实很简单</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110132912382.png" alt="image-20220110132912382"></p>
<p>CPU实际处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>① 外围设备指的是连接到计算机的键盘、鼠标、显示器、设备装置、打印机等。</p>
</blockquote>
</blockquote>
<h2 id="◆-第2章-数据是用二进制数表示的" tabindex="-1"><a class="header-anchor" href="#◆-第2章-数据是用二进制数表示的" aria-hidden="true">#</a> ◆ 第2章 数据是用二进制数表示的</h2>
<blockquote>
<blockquote>
<ol>
<li>32位是几个字节？</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．二进制数01011100转换成十进制数是多少？</p>
<p>3．二进制数00001111左移两位后，会变成原数的几倍？</p>
<p>4．补码形式表示的8位二进制数11111111，用十进制数表示的话是多少？</p>
<p>5．补码形式表示的8位二进制数10101010，用16位的二进制数表示的话是多少？</p>
<p>6．反转部分图形模式时，使用的是什么逻辑运算？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>4字节</li>
<li>92</li>
<li>4倍</li>
<li>-1</li>
<li>1111111110101010</li>
<li>XOR运算</li>
</ol>
<p>解析：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．因为8位=1字节，所以32位就是32÷ 8=4字节。</p>
<p>2．将二进制数的各数位的值和位权相乘后再相加，即可转换成十进制数。</p>
<p>3．二进制数左移1位后会变成原来的值的2倍。左移两位后，就是2倍的2倍，即4倍。</p>
<p>4．所有位都是1的二进制数，用十进制数表示的话就是-1。</p>
<p>5．使用原数的最高位1来填充高位。</p>
<ol start="6">
<li>XOR运算只反转与1相对应的位。NOT运算是反转所有的位。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在C和Java等高级语言编写的程序中，数值、字符串和图像等信息在计算机内部都是以二进制数值的形式来表现的。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-1-用二进制数表示计算机信息的原因" tabindex="-1"><a class="header-anchor" href="#◆-2-1-用二进制数表示计算机信息的原因" aria-hidden="true">#</a> ◆ 2.1 用二进制数表示计算机信息的原因</h3>
<blockquote>
<blockquote>
<p>计算机内部是由IC这种电子部件构成的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU（微处理器）和内存也是IC的一种。IC有几种不同的形状，有的像一条黑色蜈蚣，在其两侧有数个乃至数百个引脚；有的则像插花用的针盘，引脚在IC内部并排排列着。IC的所有引脚，只有直流电压0V或5V[插图]两个状态。也就是说，IC的一个引脚，只能表示两个状态。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110133352083.png" alt="image-20220110133352083"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>IC的这个特性，决定了计算机的信息数据只能用二进制数来处理。由于1位（一个引脚）只能表示两个状态，所以二进制的计数方式就变成了0、1、10、11、100…这种形式。虽然二进制数并不是专门为IC而设计的，但是和IC的特性非常吻合</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机处理信息的最小单位——位，就相当于二进制中的一位。位的英文bit是二进制数位（binary digit）的缩写。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110133505472.png" alt="image-20220110133505472"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二进制数的位数一般是8位、16位、32位……也就是8的倍数，这是因为计算机所处理的信息的基本单位是8位二进制数。8位二进制数被称为一个字节。字节是最基本的信息计量单位。位是最小单位，字节是基本单位。内存和磁盘都使用字节单位来存储和读写数据，使用位单位则无法读写数据。因此，字节是信息的基本单位。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用字节单位处理数据时，如果数字小于存储数据的字节数（=二进制数的位数），那么高位上就用0填补。例如，100111这个6位二进制数，用8位（=1字节）表示时为00100111，用16位（=2字节）表示时为0000000000100111。奔腾等32位微处理器，具有32个引脚以用于信息的输入和输出。也就是说，奔腾一次可以处理32位（32位=4字节）的二进制数信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于用二进制数表示的信息，计算机不会区分它是数值、文字，还是某种图片的模式等，而是根据编写程序的各位对计算机发出的指示来进行信息的处理（运算）。例如00100111这样的二进制数，既可以视为纯粹的数值作加法运算，也可以视为“‘”（单引号，single quotation）文字而显示在显示器上，或者视为■■□■■□□□这一图形模式印刷出来。具体进行何种处理，取决于程序的编写方式。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-3-移位运算和乘除运算的关系" tabindex="-1"><a class="header-anchor" href="#◆-2-3-移位运算和乘除运算的关系" aria-hidden="true">#</a> ◆ 2.3 移位运算和乘除运算的关系</h3>
<blockquote>
<blockquote>
<p>无论程序中使用的是几进制，计算机内部都会将其转换成二进制数来处理，因此都能进行移位操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>十进制数39用8位的二进制表示是00100111，左移两位后是10011100，再转换成十进制数就是156。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>移位运算也可以通过数位移动来代替乘法运算和除法运算。例如，将00100111左移两位的结果是10011100，左移两位后数值变成了原来的4倍。用十进制数表示的话，数值从39（00100111）变成了156（10011100），也正好是4倍（39×4=156）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>十进制数左移后会变成原来的10倍、100倍、1000倍……同样，二进制数左移后就会变成原来的2倍、4倍、8倍……反之，二进制数右移后则会变成原来的1/2、1/4、1/8</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110133704761.png" alt="image-20220110133704761"></p>
</blockquote>
</blockquote>
<h3 id="◆-2-4-便于计算机处理的-补数" tabindex="-1"><a class="header-anchor" href="#◆-2-4-便于计算机处理的-补数" aria-hidden="true">#</a> ◆ 2.4 便于计算机处理的“补数”</h3>
<blockquote>
<blockquote>
<p>用来填充右移后空出来的高位的数值，有0和1两种形式。要想区分什么时候补0什么时候补1，只要掌握了用二进制数表示负数的方法即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一起来看看表示负数的方法和右移的方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二进制数中表示负数值时，一般会把最高位作为符号来使用，因此我们把这个最高位称为符号位。符号位是0时表示正数，符号位是1时表示负数。那么-1用8位二进制数来表示的话是什么样的呢？可能很多人会认为“1的二进制数是00000001，因此-1就是10000001”，但这个答案是错的，正确答案是11111111。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机在做减法运算时，实际上内部是在做加法运算。用加法运算来实现减法运算</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在表示负数时就需要使用“二进制的补数”。补数就是用正数来表示负数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了获得补数，我们需要将二进制数的各数位的数值全部取反[插图]，然后再将结果加1。例如，用8位二进制数表示- 1时，只需求得1，也就是00000001的补数即可。具体来说，就是将各数位的0取反成1, 1取反成0，然后再将取反的结果加1，最后就转化成了11111111</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110134253466.png" alt="image-20220110134253466"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于溢出的位，计算机会直接忽略掉。在8位的范围内进行计算时，100000000这个9位二进制数就会被认为是00000000这一8位二进制数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>补数求解的变换方法就是“取反+ 1”。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了1+ (- 1)之外，2+ (- 2)、39+ (- 39)等同样如此。总之，要想使结果为0，就必须通过补数来实现。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结果不为0的运算同样可以通过使用补数来得到正确的结果。不过，有一点需要注意，当运算结果为负数时，计算结果的值也是以补数的形式来表示的。比如3- 5这个运算，用8位二进制数表示3时为00000011，而5=00000101的补数为“取反+ 1”，也就是11111011。因此3- 5其实就是00000011+ 11111011的运算。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>00000011 + 11111011的运算结果为11111110，最高位变成了1。这就表示结果是一个负数，这点大家应该都能理解。那么11111110表示的负数是多少大家知道吗？这时我们可以利用负负得正这个性质。假若11111110是负△△，那么11111110的补数就是正△△。通过求解补数的补数，就可知该值的绝对值。11111110的补数，取反加1后为00000010。这个是2的十进制数。因此，11111110表示的就是- 2。我们也就得到了3- 5的正确结果</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110134310798.png" alt="image-20220110134310798"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>仔细思考一下补数的机制，大家就会明白像- 32768～32767这样负数比正数多一个的原因了。最高位是0的正数，有0～32767共32768个，这其中也包含0。最高位是1的负数，有- 1～- 32768共32768个，这其中不包含0。也就是说，0包含在正数范围内，所以负数就要比正数多1个。虽然0不是正数，但考虑到符号位，就将其划分到了正数中。</p>
<p>int 十进制：-2^31=-21 4748 3648 到 2^31-1=21 4748 3647。共10位，21亿。
在32位或64位机器中，int占4个字节，即32位。（一个字节，占8位）</p>
<p>int能表示的最大正整数为：
0111 1111 1111 1111 1111 1111 1111 1111  (最高位表示符号位，正数符号位为0)对应的10进制数为2^31-1=2147483647，对应的十六进制表示为：0x7FFFFFFF。</p>
<p>int能表示的最小负整数为：
1000 0000 0000 0000 0000 0000 0000 0000  (最高位表示符号位，负数符号位为1)，负数在计算机中以补码的形式存在，所以对应的原码（补码的补码）也是1000 0000 0000 0000 0000 0000 0000 0000，对应的十六进制表示为0x80000000，而C/C++规定该值为-2^31=-2147483648。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-5-逻辑右移和算术右移的区别" tabindex="-1"><a class="header-anchor" href="#◆-2-5-逻辑右移和算术右移的区别" aria-hidden="true">#</a> ◆ 2.5 逻辑右移和算术右移的区别</h3>
<blockquote>
<blockquote>
<p>右移有移位后在最高位补0和补1两种情况。当二进制数的值表示图形模式而非数值时，移位后需要在最高位补0。类似于霓虹灯往右滚动的效果。这就称为逻辑右移</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110135953984.png" alt="image-20220110135953984"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将二进制数作为带符号的数值进行运算时，移位后要在最高位填充移位前符号位的值（0或1）。这就称为算术右移。如果数值是用补数表示的负数值，那么右移后在空出来的最高位补1，就可以正确地实现1/2、1/4、1/8等的数值运算。如果是正数，只需在最高位补0即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将- 4（=11111100）右移两位。这时，逻辑右移的情况下结果就会变成00111111，也就是十进制数63，显然不是- 4的1/4。而算术右移的情况下，结果就会变成11111111，用补数表示就是- 1，即- 4的1/4</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110140010540.png" alt="image-20220110140010540"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>逻辑右移和算术右移的区别</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只有在右移时才必须区分逻辑位移和算术位移。左移时，无论是图形模式（逻辑左移）还是相乘运算（算术左移），都只需在空出来的低位补0即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以8位二进制数为例，符号扩充就是指在保持值不变的前提下将其转换成16位和32位的二进制数。将01111111这个正的8位二进制数转换成16位二进制数时，很容易就能得出0000000001111111这个正确结果，但是像11111111这样用补数来表示的数值，该如何处理比较好呢？实际上处理方法非常简单，将其表示成1111111111111111就可以了。也就是说，不管是正数还是用补数表示的负数，都只需用符号位的值（0或者1）填充高位即可。这就是符号扩充的方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110140147587.png" alt="image-20220110140147587"></p>
</blockquote>
</blockquote>
<h3 id="◆-2-6-掌握逻辑运算的窍门" tabindex="-1"><a class="header-anchor" href="#◆-2-6-掌握逻辑运算的窍门" aria-hidden="true">#</a> ◆ 2.6 掌握逻辑运算的窍门</h3>
<blockquote>
<blockquote>
<p>在运算中，与逻辑相对的术语是算术。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将二进制数表示的信息作为四则运算的数值来处理就是算术。而像图形模式那样，将数值处理为单纯的0和1的罗列就是逻辑。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机能处理的运算，大体可分为算术运算和逻辑运算。算术运算是指加减乘除四则运算。逻辑运算是指对二进制数各数字位的0和1分别进行处理的运算，包括逻辑非（NOT运算）、逻辑与（AND运算）、逻辑或（OR运算）和逻辑异或（XOR运算[插图]）四种。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>逻辑非指的是0变成1、1变成0的取反操作。逻辑与指的是“两个都是1”时，运算结果为1，其他情况下运算结果都为0的运算。逻辑或指的是“至少有一方是1”时，运算结果为1，其他情况下运算结果都是0的运算。逻辑异或指的是排斥相同数值的运算。“两个数值不同”，也就是说，当“其中一方是1，另一方是0”时运算结果是1，其他情况下结果都是0。不管是几位的二进制数，在进行逻辑运算时，都是对相对应的各数位分别进行运算。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>掌握逻辑运算的窍门，就是要摒弃用二进制数表示数值这一想法。大家不要把二进制数表示的值当作是数值，而应该把它看作是图形或者开关上的ON/OFF（1是ON,0是OFF）。逻辑运算的运算对象不是数值，因此不会出现进位的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>总之就是不要将它作为数值来考虑。</p>
</blockquote>
</blockquote>
<h3 id="◆-column如果是你-你会怎样介绍" tabindex="-1"><a class="header-anchor" href="#◆-column如果是你-你会怎样介绍" aria-hidden="true">#</a> ◆ COLUMN如果是你，你会怎样介绍？</h3>
<blockquote>
<blockquote>
<p>通过电流信号，我们就可以给CPU发送指令或者传递数字信息等。比如说，让电脑计算1+2的时候，就要把进行加法计算的命令和1和2这两个数字传递给CPU。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>电流是怎么把指令和数字告诉CPU的呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU的引脚有电流通过时，数值为1，没有电流通过的时候数值为0，这是CPU里的规定。咱们平时使用的是0～9这10个数字，而电脑只用0和1这两个数字符号。</p>
</blockquote>
</blockquote>
<h2 id="◆-第3章-计算机进行小数运算时出错的原因" tabindex="-1"><a class="header-anchor" href="#◆-第3章-计算机进行小数运算时出错的原因" aria-hidden="true">#</a> ◆ 第3章 计算机进行小数运算时出错的原因</h2>
<blockquote>
<blockquote>
<p>1．二进制数0.1，用十进制数表示的话是多少？</p>
<p>2．用小数点后有3位的二进制数，能表示十进制数0.625吗？</p>
<p>3．将小数分为符号、尾数、基数、指数4部分进行表现的形式称为什么？</p>
<p>4．二进制数的基数是多少？</p>
<p>5．通过把0作为数值范围的中间值，从而在不使用符号位的情况下来表示负数的表示方法称为什么？</p>
<p>6．10101100.01010011这个二进制数，用十六进制数表示的话是多少？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote></blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>答案</p>
<ol>
<li>0.5</li>
</ol>
<p>2．能表示</p>
<p>3．浮点数（浮点数形式）</p>
<ol start="4">
<li>
<p>2</p>
</li>
<li>
<p>EXCESS系统表现</p>
</li>
</ol>
<p>6.AC.53</p>
<p>解析：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．二进制数的小数点后第一位的位权是2-1=0.5。也就是说，二进制数0.1→1×0.5→十进制数0.5。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．十进制数0.625转换成二进制数是0.101。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．浮点数是指把小数用“符号 尾数×基数的指数次幂”这种形式来表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．二进制数的基数是2，十进制数的基数是10。以此类推，××进制数的基数就是××。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="5">
<li>EXCESS是“剩余的”的意思。例如，把01111111看作是0的话，比这个数小1的01111110就是-1。</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6．整数部分和小数部分一样，二进制数的4位，就相当于十六进制数的1位。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-将0-1累加100次也得不到10" tabindex="-1"><a class="header-anchor" href="#◆-3-1-将0-1累加100次也得不到10" aria-hidden="true">#</a> ◆ 3.1 将0.1累加100次也得不到10</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110140811099.png" alt="image-20220110140811099"></p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110140832379.png" alt="image-20220110140832379"></p>
</blockquote>
</blockquote>
<h3 id="◆-3-2-用二进制数表示小数" tabindex="-1"><a class="header-anchor" href="#◆-3-2-用二进制数表示小数" aria-hidden="true">#</a> ◆ 3.2 用二进制数表示小数</h3>
<blockquote>
<blockquote>
<p>由于计算机内部所有的信息都是以二进制数的形式来处理的，因此在这一点上，整数和小数并无差别。不过，使用二进制数来表示整数和小数的方法却有很大的不同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>把1011.0011这个有小数点的二进制数转换成十进制数。小数点前面部分的转换方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只需将各数位数值和位权相乘，然后再将相乘的结果相加即可实现。那么，小数点后面的部分要如何进行转换呢？其实，它的处理和整数是一样的，将各数位的数值和位权相乘的结果相加即可</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110145928722.png" alt="image-20220110145928722"></p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-计算机运算出错的原因" tabindex="-1"><a class="header-anchor" href="#◆-3-3-计算机运算出错的原因" aria-hidden="true">#</a> ◆ 3.3 计算机运算出错的原因</h3>
<blockquote>
<blockquote>
<p>计算机之所以会出现运算错误，是因为“有一些十进制数的小数无法转换成二进制数”。例如，十进制数0.1，就无法用二进制数正确表示，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>小数点后4位用二进制数表示时的数值范围为0.0000～0.1111。因此，这里只能表示0.5、0.25、0.125、0.0625这四个二进制数小数点后面的位权组合而成（相加总和）的小数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>小数点后4位能够用二进制数表示的数值二进制数是连续的，十进制数是非连贯</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150055131.png" alt="image-20220110150055131"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>十进制数0的下一位是0.0625。因此，这中间的小数，就无法用小数点后4位数的二进制数来表示。同样，0.0625的下一位数一下子变成了0.125。这时，如果增加二进制数小数点后面的位数，与其相对应的十进制数的个数也会增加，但不管增加多少位，2的-〇〇次幂怎么相加都无法得到0.1这个结果。实际上，十进制数0.1转换成二进制后，会变成0.00011001100…（1100循环）这样的循环小数。这和无法用十进制数来表示1/3是一样的道理。1/3就是0.3333…，同样是循环小数。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-4-什么是浮点数" tabindex="-1"><a class="header-anchor" href="#◆-3-4-什么是浮点数" aria-hidden="true">#</a> ◆ 3.4 什么是浮点数</h3>
<blockquote>
<blockquote>
<p>像1011.0011这样带小数点的表现形式，完全是纸面上的二进制数表现形式，在计算机内部是无法使用的。那么，实际上计算机是以什么样的表现形式来处理小数的呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>很多编程语言中都提供了两种表示小数的数据类型，分别是双精度浮点数和单精度浮点数。双精度浮点数类型用64位、单精度浮点数类型用32位来表示全体小数？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在C语言中，双精度浮点数类型和单精度浮点数类型分别用double和float来表示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与浮点数相对的是定点数，使用定点数表示小数时，小数点的实际位置固定不变。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>浮点数是指用符号、尾数、基数和指数这四部分来表示的小数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为计算机内部使用的是二进制数，所以基数自然就是2。因此，实际的数据中往往不考虑基数，只用符号、尾数、指数这三部分即可表示浮点数。也就是说，64位（双精度浮点数）和32位（单精度浮点数）的数据，会被分为三部分来使用（图3-4）。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150239279.png" alt="image-20220110150239279"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150259575.png" alt="image-20220110150259575"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>双精度浮点数和单精度浮点数在表示同一个数值时使用的位数不同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>双精度浮点数能够表示的数值范围要大于单精度浮点数。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150404679.png" alt="image-20220110150404679"></p>
</blockquote>
</blockquote>
<h3 id="◆-3-6-在实际的程序中进行确认" tabindex="-1"><a class="header-anchor" href="#◆-3-6-在实际的程序中进行确认" aria-hidden="true">#</a> ◆ 3.6 在实际的程序中进行确认</h3>
<blockquote>
<blockquote>
<p>如何用单精度浮点数来表示十进制数0.75</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>该程序执行后，十进制数0.75用单精度浮点数来表示就变成了0-01111110-10000000000000000000000（图3-7）。加入破折号（-）是为了区分符号部分、指数部分、尾数部分。这里，符号部分为0，指数部分为01111110，尾数部分为10000000000000000000000。因为0.75是正数，所以符号位是0。指数部分的01111110是十进制数126，用EXCESS系统表现就是- 1（126- 127=- 1）。根据正则表达式的规则，小数点前面的第1位是1，因此尾数部分10000000000000000000000实际上表示的是1.10000000000000000000000这个二进制数。将尾数部分的二进制数转换成十进制数，结果就是（1 × 2的0次幂）+（1 × 2的-1次幂）=1.5。因此，0-01111110-10000000000000000000000这个单精度浮点数，表示的就是“+ 1.5 × 2的-1次幂”。2的-1次幂是0.5, + 1.5 × 0.5=+ 0.75。正好吻合，结果正确。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们继续使用该程序来看一下如何用单精度浮点数表示十进制数0.1。运行后就会发现结果为0-01111011-10011001100110011001101 （只需将data=(float)0.75；的部分变成data=(float)0.1；即可）。这时，如果反过来计算一下这个数值的十进制数，估计大家又要冒汗了，结果居然不是0.1。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150437754.png" alt="image-20220110150437754"></p>
</blockquote>
</blockquote>
<h3 id="◆-3-7-如何避免计算机计算出错" tabindex="-1"><a class="header-anchor" href="#◆-3-7-如何避免计算机计算出错" aria-hidden="true">#</a> ◆ 3.7 如何避免计算机计算出错</h3>
<blockquote>
<blockquote>
<p>作为程序的数据类型，不管是使用单精度浮点数还是双精度浮点数，都存在计算出错的可能性。接下来将介绍两种避免该问题的方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先是回避策略，即无视这些错误。根据程序目的的不同，有时一些微小的偏差并不会造成什么问题。例如，假设使用计算机设计工业制品。将100个长0.1毫米的零件连接起来后，其长度并非一定要是10毫米，10.000002毫米也没有任何问题。一般来讲，在科学技术计算领域，计算机的计算结果只要能得到近似值就足够了。那些微小的误差完全可以忽略掉。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>另一个策略是把小数转换成整数来计算。计算机在进行小数计算时可能会出错，但进行整数计算（只要不超过可处理的数值范围）时一定不会出现问题。因此，进行小数的计算时可以暂时使用整数，然后再把计算结果用小数表示出来即可。例如，本章一开头讲过的将0.1相加100次这一计算，就可以转换为将0.1扩大10倍后再将1相加100次的计算，最后把结果除以10就可以了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>BCD（Binary Coded Decimal）也是一种使用二进制表示十进制的方法。简单来讲，BCD就是用4位来表示0～9的1位数字的处理方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在涉及财务计算等不允许出现误差的情况下，一定要将小数转换成整数或者采用BCD方法，以确保最终得到准确的数值。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-8-二进制数和十六进制数" tabindex="-1"><a class="header-anchor" href="#◆-3-8-二进制数和十六进制数" aria-hidden="true">#</a> ◆ 3.8 二进制数和十六进制数</h3>
<blockquote>
<blockquote>
<p>在以位为单位表示数据时，使用二进制数很方便，但如果位数太多，看起来就比较麻烦。因此，在实际程序中，也经常会用十六进制数来代替二进制数。在C语言程序中，只需在数值的开头加上0x（0和x）就可以表示十六进制数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二进制数的4位，正好相当于十六进制数的1位。例如，32位二进制数00111101110011001100110011001101用十六进制数来表示的话，就是3DCCCCCD这个8位数。由此可见，通过使用十六进制数，二进制数的位数能够缩短至原来的1/4。位数变少之后，看起来也就更清晰了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150551287.png" alt="image-20220110150551287"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用十六进制数来表示二进制小数时，小数点后的二进制数的4位也同样相当于十六进制数的1位。不够4位时用0填补二进制数的低位即可。例如，1011.011的低位补0后为1011.0110，这时就可以表示为十六进制数B.6（图3-10）。十六进制数的小数点后第1位的位权是16-1，即1/16=0.0625</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110150827765.png" alt="image-20220110150827765"></p>
</blockquote>
</blockquote>
<h2 id="◆-第4章-熟练使用有棱有角的内存" tabindex="-1"><a class="header-anchor" href="#◆-第4章-熟练使用有棱有角的内存" aria-hidden="true">#</a> ◆ 第4章 熟练使用有棱有角的内存</h2>
<blockquote>
<blockquote>
<p>1．有十个地址信号引脚的内存IC（集成电路）可以指定的地址范围是多少？</p>
<p>2．高级编程语言中的数据类型表示的是什么？</p>
<p>3．在32位内存地址的环境中，指针变量的长度是多少位？</p>
<p>4．与物理内存有着相同构造的数组的数据类型长度是多少？</p>
<p>5．用LIFO方式进行数据读写的数据结构称为什么？</p>
<p>6．根据数据的大小链表分叉成两个方向的数据结构称为什么？</p>
<p>答案：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．用二进制数来表示的话是0000000000～1111111111（用十进制数来表示的话是0～1023）</p>
<p>2．占据内存区域的大小和存储在该内存区域的数据类型</p>
<p>3．32位</p>
<p>4．1字节</p>
<p>5．栈</p>
<p>6．二叉查找树（binary search tree）</p>
<p>解析：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．地址信号引脚是十个时表示2的10次方=1024个地址。</p>
<p>2．例如，C语言数据类型中的short类型，它表示的就是占据2字节的内存区域，并且存储整数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．指针指的是用于存储内存地址的变量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．物理内存是以字节为单位进行数据存储的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5．栈是一种后入先出（LIFO=Last In First Out）式的数据结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>6．二叉查找树指的是从节点分成两个叉的树状数据结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机是进行数据处理的设备，而程序表示的就是处理顺序和数据结构。由于处理对象数据是存储在内存和磁盘上的，因此程序必须能自由地使用内存和磁盘。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-内存的物理机制很简单" tabindex="-1"><a class="header-anchor" href="#◆-4-1-内存的物理机制很简单" aria-hidden="true">#</a> ◆ 4.1 内存的物理机制很简单</h3>
<blockquote>
<blockquote>
<p>来看一下内存的物理机制。内存实际上是一种名为内存IC的电子元件。虽然内存IC包括DRAM、SRAM、ROM等多种形式，但从外部来看，其基本机制都是一样的。内存IC中有电源、地址信号、数据信号、控制信号等用于输入输出的大量引脚（IC的引脚），通过为其指定地址（address），来进行数据的读写。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图4-1是内存IC（在这里假设它为RAM[插图]）的引脚配置示例。虽然这是一个虚拟的内存IC，但它的引脚和实际的内存IC是一样的。VCC和GND是电源，A0～A9是地址信号的引脚，D0～D7是数据信号的引脚，RD和WR是控制信号的引脚。将电源连接到VCC和GND后，就可以给其他引脚传递比如0或者1这样的信号。大多数情况下，+ 5V的直流电压表示1,0V表示0。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110151202853.png" alt="image-20220110151202853"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个内存IC中能存储多少数据呢？数据信号引脚有D0～D7共八个，表示一次可以输入输出8位（=1字节）的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>地址信号引脚有A0～A9共十个，表示可以指定0000000000～1111111111共1024个地址。而地址用来表示数据的存储场所，因此我们可以得出这个内存IC中可以存储1024个1字节的数据。因为1024=1K，所以该内存IC的容量就是1KB。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现在大家使用的计算机至少有512M的内存。这就相当于512000个（512MB÷1KB=512K）1KB的内存IC。当然，一台计算机中不太可能放入如此多的内存IC。通常情况下，计算机使用的内存IC中会有更多的地址信号引脚，这样就能在一个内存IC中存储数十兆字节的数据。因此，只用数个内存IC，就可以达到512MB的容量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设要往该内存IC中写入1字节的数据。为了实现该目的，可以给VCC接入+5V，给GND接入0V的电源，并使用A0～A9的地址信号来指定数据的存储场所，然后再把数据的值输入给D0～D7的数据信号，并把WR（write=写入的简写）信号设定成1。执行完这些操作，就可以在内存IC内部写入数据（图4-2 (a)）了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110151556169.png" alt="image-20220110151556169"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>向内存IC中写入和读出数据的方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>读出数据时，只需通过A0～A9的地址信号指定数据的存储场所，然后再将RD（read=读出的简写）信号设成1即可。执行完这些操作，指定地址中存储的数据就会被输出到D0～D7的数据信号引脚（图4-2(b)）中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>像WR和RD这样可以让IC运行的信号称为控制信号。其中，当WR和RD同时为0时，写入和读出的操作都无法进行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存IC内部有大量可以存储8位数据的地方，通过地址指定这些场所，之后即可进行数据的读写。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-2-内存的逻辑模型是楼房" tabindex="-1"><a class="header-anchor" href="#◆-4-2-内存的逻辑模型是楼房" aria-hidden="true">#</a> ◆ 4.2 内存的逻辑模型是楼房</h3>
<blockquote>
<blockquote>
<p>大部分参考书都会用类似于楼房的图形来表示内存。在这个楼房中，1层可以存储1个字节的数据，楼层号表示的就是地址。对于程序员来说，这种形象的解说有助于了解内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然内存的实体是内存IC，不过从程序员的角度来看，也可以把它假想成每层都存储着数据的楼房，并不需要过多地关注内存IC的电源和控制信号等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存为1KB时，表示的是如图4-3所示的有1024层的楼房（这里地址的值是从上往下逐渐变大，不过也有与此相反的情况）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110151716074.png" alt="image-20220110151716074"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编程语言中的数据类型表示存储的是何种类型的数据。从内存来看，就是占用的内存大小（占有的楼层数）的意思。即使是物理上以1个字节为单位来逐一读写数据的内存，在程序中，通过指定其类型（变量的数据类型等），也能实现以特定字节数为单位来进行读写。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-3-简单的指针" tabindex="-1"><a class="header-anchor" href="#◆-4-3-简单的指针" aria-hidden="true">#</a> ◆ 4.3 简单的指针</h3>
<blockquote>
<blockquote>
<p>指针也是一种变量，它所表示的不是数据的值，而是存储着数据的内存的地址。通过使用指针，就可以对任意指定地址的数据进行读写。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在Windows计算机上使用的程序通常都是32位（4字节）的内存地址。这种情况下，指针变量的长度也是32位。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在定义指针时，我们通常会在变量名前加一个星号（*）。我们知道，d、e、f都是用来存储32位（4字节）的地址的变量。然而，为什么这里又用来指定char （1字节）、short（2字节）、long（4字节）这些数据类型呢？大家是不是也感到很奇怪？实际上，这些数据类型表示的是从指针存储的地址中一次能够读写的数据字节数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设d、e、f的值都是100。在这种情况下，使用d时就能够从编号100的地址中读写1个字节的数据，使用e时就是2个字节（100地址和101地址）的数据，使用f时就是4个字节（100地址～103地址）的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110151854185.png" alt="image-20220110151854185"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-4-数组是高效使用内存的基础" tabindex="-1"><a class="header-anchor" href="#◆-4-4-数组是高效使用内存的基础" aria-hidden="true">#</a> ◆ 4.4 数组是高效使用内存的基础</h3>
<blockquote>
<blockquote>
<p>数组是指多个同样数据类型的数据在内存中连续排列的形式。作为数组元素的各个数据会通过连续的编号被区分开来，这个编号称为索引（index）。指定索引后，就可以对该索引所对应地址的内存进行读写操作。而索引和内存地址的变换工作则是由编译器自动实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数组的定义中所指定的数据类型，也表示一次能够读写的内存大小。char类型的数组以1个字节为单位对内存进行读写，而short类型和long类型的数组则分别以2个字节、4个字节为单位对内存进行读写。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>之所以说数组是内存的使用方法的基础，是因为数组和内存的物理构造是一样的。特别是1字节类型的数组，它和内存的物理构造完全一致。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152114828.png" alt="image-20220110152114828"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-5-栈、队列以及环形缓冲区" tabindex="-1"><a class="header-anchor" href="#◆-4-5-栈、队列以及环形缓冲区" aria-hidden="true">#</a> ◆ 4.5 栈、队列以及环形缓冲区</h3>
<blockquote>
<blockquote>
<p>栈和队列，都可以不通过指定地址和索引来对数组的元素进行读写。需要临时保存计算过程中的数据、连接在计算机上的设备或者输入输出的数据时，都可以通过这些方法来使用内存。如果每次保存临时数据都需指定地址和索引，程序就会变得比较麻烦，因此要加以改进。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们在内存中预留出栈和队列所需要的空间，并确定好写入和读出的顺序，就不用再指定地址和索引了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>队列一般是以环状缓冲区（ring buffer）的方式来实现的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设我们要用有6个元素的数组来实现一个队列。这时可以从数组的起始位置开始有序地存储数据，然后再按照存储时的顺序把数据读出。在数组的末尾写入数据后，后一个数据就会被写入数组的起始位置（此时数据已经被读出所以该位置是空的）。这样，数组的末尾就和开头连接了起来，数据的写入和读出也就循环起来了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152150945.png" alt="image-20220110152150945"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-6-链表使元素的追加和删除更容易" tabindex="-1"><a class="header-anchor" href="#◆-4-6-链表使元素的追加和删除更容易" aria-hidden="true">#</a> ◆ 4.6 链表使元素的追加和删除更容易</h3>
<blockquote>
<blockquote>
<p>链表和二叉查找树，都是不用考虑索引的顺序就可以对数组元素进行读写的方式。通过使用链表，可以更加高效地对数组数据（元素）进行追加和删除处理。而通过使用二叉查找树，则可以更加高效地对数组数据进行检索。</p>
<p>在数组的各个元素中，除了数据的值之外，通过为其附带上下一个元素的索引，即可实现链表。数据的值和下一个元素的索引组合在一起，就构成了数组的一个元素。这样，数组元素相连就构成了念珠似的链表。由于链表末尾的元素没有后续的数据，因此就需要用别的值（在这里是-1）来填充（图4-10）。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152306524.png" alt="image-20220110152306524"></p>
<p>在需要追加或删除数据的情况下，使用链表是很高效的。首先，让我们来看一下删除的情况。在图4-10表示的链表中，假设要删除从起始位置开始的第3个元素。此时，我们只需要把第2个元素的“下一个元素：2”变成“下一个元素：3”即可。由于数组的元素通常是按照索引顺序来引用的，因此当我们需要引用构成链表的数组的某一个元素时，通过该元素的索引信息就可以找到下一个元素。当第2个元素的下一个元素变成第4个元素后，那么第3个元素就被删除了。虽然第3个元素在物理内存上还残留着，但在逻辑上则确实被删除了（图4-11）。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152347813.png" alt="image-20220110152347813"></p>
<p>接下来就让我们来看一下如何往链表中追加数据。假设要在图4-10的链表的第5位前追加一个新数据。此时，我们只需要在刚才消除的第3个元素的位置中保存新的数据，并将第4个元素的“下一个元素：5”变更成“下一个元素：2”，以使新追加的元素的索引信息变成“下一个元素： 5”即可。虽然新追加的元素在物理上是第3个，但从逻辑上看来则是第5个（图4-12）。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152411740.png" alt="image-20220110152411740"></p>
<p>如果不使用链表数组，那么中途删除或追加元素时，其后的元素就必须要全部移动。示例中数组的元素只有6个，处理起来不会花费较多时间。而在实际的程序中，有时需要对包含数千至数万个元素的数组进行频繁的数据追加或删除操作。如果每次都需要移动数千至数万个元素，那么哪怕是高速计算机也会花费很长时间（图4-13、图4-14）。反之，使用链表来追加或删除数据则毫不费事。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152440038.png" alt="image-20220110152440038"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-7-二叉查找树使数据搜索更有效" tabindex="-1"><a class="header-anchor" href="#◆-4-7-二叉查找树使数据搜索更有效" aria-hidden="true">#</a> ◆ 4.7 二叉查找树使数据搜索更有效</h3>
<blockquote>
<blockquote>
<p>二叉查找树是指在链表的基础上往数组中追加元素时，考虑到数据的大小关系，将其分成左右两个方向的表现形式。例如，假设我们事先把50这个值保存到了数组中。那么，如果接下来的值比先前保存的数值大的话，就要将其放到右边，反之如果小的话就放在左边。但实际的内存并不会分成两个方向，这是在程序逻辑上实现的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了实现二叉查找树，怎么处理比较好呢？其实数组的每个元素中只要有数据的值和两个索引信息就可以了。图4-16向我们展示了如何用数组来实现图4-15中的二叉查找树。二叉查找树是由链表构造发展而来的表现形式，因此在追加或删除元素方面也同样是有效的。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152600074.png" alt="image-20220110152600074"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110152609981.png" alt="image-20220110152609981"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用二叉查找树的便利之处在于可以使数据的搜索等更有效率。在使用一般的数组时，必须从数组的开头按照索引顺序来查找目标数据。而使用二叉查找树时，当目标数据比现在读出来的数据小时就可以转到左侧，反之目标数据较大时即可转到链表的右侧，这样就加快了找到目标数据的速度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>磁盘。和内存一样，磁盘也是用于存储数据的。磁盘虽然在物理方面只能以扇区为单位进行读写，但通过在程序中多花一些心思，磁盘也可以以各种形态来使用。</p>
</blockquote>
</blockquote>
<h2 id="◆-第5章-内存和磁盘的亲密关系" tabindex="-1"><a class="header-anchor" href="#◆-第5章-内存和磁盘的亲密关系" aria-hidden="true">#</a> ◆ 第5章 内存和磁盘的亲密关系</h2>
<blockquote>
<blockquote>
<p>1．存储程序方式指的是什么？</p>
<p>2．通过使用内存来提高磁盘访问速度的机制称为什么？</p>
<p>3．把磁盘的一部分作为假想内存来使用的机制称为什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4．Windows中，在程序运行时，存储着可以动态加载调用的函数和数据的文件称为什么？</p>
<p>5．在EXE程序文件中，静态加载函数的方式称为什么？</p>
<p>6．在Windows计算机中，一般磁盘的1个扇区是多少字节？</p>
<p>答案：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．在存储装置中保存程序，并逐一运行的方式</p>
<ol start="2">
<li>Disk Cache （磁盘缓存）</li>
<li>虚拟内存（virtual memory）</li>
<li>DLL （DLL文件）</li>
<li>静态链接</li>
<li>512字节</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解析</p>
<p>1．现在计算机采用的是存储程序方式。</p>
<p>2．磁盘缓存是指，把从磁盘中读出的数据存储在内存中，当该数据再次被读取时，不是从磁盘而是直接从内存中高速读出。</p>
<p>3．借助虚拟内存，哪怕是内存容量不足的计算机，也可以运行很大的程序。</p>
<ol start="4">
<li>DLL是Dynamic Link Library的略称。</li>
</ol>
<p>5．函数的加载方式有静态链接和动态链接两种。</p>
<p>6．扇区是磁盘保存数据的物理单位。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在计算机的5大部件中，内存和磁盘也都被归类为存储部件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>利用电流来实现存储的内存，同利用磁效应来实现存储的磁盘，还是有差异的。而从存储容量来看，内存是高速高价，而磁盘则是低速廉价。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大家平时使用的计算机，至少都配备了512M大小的内存和80GB大小的磁盘。在计算机这个系统中，高速小容量的内存与低速高容量的磁盘进行协同作业。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存主要是指主内存（负责存储CPU中运行的程序指令和数据的内存），磁盘主要是指硬盘。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-1-不读入内存就无法运行" tabindex="-1"><a class="header-anchor" href="#◆-5-1-不读入内存就无法运行" aria-hidden="true">#</a> ◆ 5.1 不读入内存就无法运行</h3>
<blockquote>
<blockquote>
<p>程序保存在存储设备中，通过有序地被读出来实现运行，这一点大家都很清楚。这一机制称为存储程序方式（程序内置方式）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机中主要的存储部件是内存和磁盘。磁盘中存储的程序，必须要加载到内存后才能运行。在磁盘中保存的原始程序是无法直接运行的。这是因为，负责解析和运行程序内容的CPU，需要通过内部程序计数器来指定内存地址，然后才能读出程序</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即使CPU可以直接读出并运行磁盘中保存的程序，由于磁盘读取速度慢，程序的运行速度还是会降低。总之，存储在磁盘中的程序需要读入到内存后才能运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20220110153102204.png" alt="image-20220110153102204"></p>
</blockquote>
</blockquote>
<p>◆ 5.2 磁盘缓存加快了磁盘访问速度</p>
<blockquote>
<blockquote>
<p>磁盘缓存加快了磁盘访问速度</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>磁盘缓存指的是把从磁盘中读出的数据存储到内存空间中的方式。这样一来，当接下来需要读取同一数据时，就不用通过实际的磁盘，而是从磁盘缓存中把内容读出。使用磁盘缓存可以大大改善磁盘数据的访问速度</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222136266.png" alt="image-20230304222136266">图5-2 磁盘缓存提高访问速度的机制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>把低速设备的数据保存在高速设备中，需要时可以直接将其从高速设备中读出，这种缓存的方式在其他情况下也会用到。其中的一个实例就是在Web浏览器中的使用。由于Web浏览器是通过网络来获取远程Web服务器的数据并将其显示出来的。因此，在显示较大的图片等文件时，会花费不少时间。于是，Web浏览器就可以把获取的数据暂时保存在磁盘中，然后在需要时再显示磁盘中的数据。也就是说，把低速的网络数据保存到相对高速的磁盘中。</p>
</blockquote>
</blockquote>
<p>◆ 5.3 虚拟内存把磁盘作为部分内存来使用</p>
<blockquote>
<blockquote>
<p>虚拟内存是指把磁盘的一部分作为假想的内存来使用。这与磁盘缓存是假想的磁盘（实际上是内存）相对，虚拟内存是假想的内存（实际上是磁盘）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过借助虚拟内存，在内存不足时也可以运行程序。例如，在只剩下5MB内存空间的情况下也能运行10MB大小的程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虚拟内存虽说是把磁盘作为内存的一部分来使用，但实际上正在运行的程序部分，在这个时间点上是必须存在在内存中的。也就是说，为了实现虚拟内存，就必须把实际内存（也可称为物理内存）的内容，和磁盘上的虚拟内存的内容进行部分置换（swap），并同时运行程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Windows提供了虚拟内存机制作为操作系统。在当前的Windows中，虚拟内存依然发挥着很大的作用。虚拟内存的方法有分页式和分段式[插图]两种。Windows采用的是分页式。该方式是指，在不考虑程序构造的情况下，把运行的程序按照一定大小的页（page）进行分割，并以页为单位在内存和磁盘间进行置换。在分页式中，我们把磁盘的内容读出到内存称为Page In，把内存的内容写入磁盘称为Page Out。一般情况下，Windows计算机的页的大小是4KB。也就是说，把大程序用4KB的页来进行切分，并以页为单位放入磁盘（虚拟内存）或内存中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222207783.png" alt="image-20230304222207783">图5-3 分页式虚拟内存的机制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了实现虚拟内存功能，Windows在磁盘上提供了虚拟内存用的文件（page file，页文件）。该文件由Windows自动做成和管理。文件的大小也就是虚拟内存的大小，通常是实际内存的相同程度至两倍程度。通过Windows的控制面板，可以查看或变更当前虚拟内存的设定。</p>
</blockquote>
</blockquote>
<p>◆ 5.4 节约内存的编程方法</p>
<blockquote>
<blockquote>
<p>通过借助磁盘虚拟内存就可以解决内存不足的问题。而虚拟内存也确实能避免因内存不足导致的应用无法启动。不过，由于使用虚拟内存时发生的Page In和Page Out往往伴随着低速的磁盘访问，因此在这个过程中应用的运行会变得迟钝起来。想必大家也都有过在操作应用的过程中硬盘访问灯一直亮着（这时正在进行Page In和Page Out），导致应用一时无法操作的不愉快经历吧。也就是说，虚拟内存无法彻底解决内存不足的问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了从根本上解决内存不足的问题，需要增加内存的容量，或者尽量把运行的应用文件变小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>介绍两个把应用文件变小的编程方法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）通过DLL文件实现函数共有</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DLL（Dynamic Link Library）文件[插图]，顾名思义，是在程序运行时可以动态加载Library（函数和数据的集合）的文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多个应用可以共有同一个DLL文件。而通过共有同一个DLL文件则可以达到节约内存的效果。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，假设我们编写了一个具有某些处理功能的函数MyFunc()。应用A和应用B都会使用这个函数。在各个应用的运行文件中内置函数MyFunc()（这个称为Static Link，静态链接）后同时运行这两个应用，内存中就存在了具有同一函数的两个程序。但这会导致内存的利用效率降低。所以，有两个同样的函数，还是有点浪费</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222234151.png" alt="image-20230304222234151">图5-5 静态链接导致内存利用效率下降</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果函数MyFunc()是独立的DLL文件而不是应用的执行文件（EXE文件[插图]），那结果会怎样呢？由于同一个DLL文件的内容在运行时可以被多个应用共有，因此内存中存在的函数MyFunc()的程序就只有1个。这样一来，内存的利用效率也就提高了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222244032.png" alt="image-20230304222244032">图5-6 进行动态链接的话即可节约内存</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Windows的操作系统本身也是多个DLL文件的集合体。有时在安装新应用时，DLL文件也会被追加。应用则会通过利用这些DLL文件的功能来运行。像这样，之所以要利用多个DLL文件，其中一个原因就是可以节约内存。而且DLL文件还有一个优点就是，在不变更EXE文件的情况下，只通过升级DLL文件就可以更新。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）通过调用_stdcall来减小程序文件的大小</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过调用_stdcall[插图]来减小程序文件的方法，是用C语言编写应用时可以利用的高级技巧。不过，这一思路应该也可以应用在其他编程语言中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C语言中，在调用函数后，需要执行栈清理处理指令。栈清理处理是指，把不需要的数据从接收和传递函数的参数时使用的内存上的栈区域中清理出去。该命令不是程序记述的，而是在程序编译时由编译器自动附加到程序中的。编译器默认将该处理附加在函数调用方。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码清单5-2 调用MyFunc()的部分程序（汇编语言）<img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222312329.png" alt="image-20230304222312329">C语言通过栈来传递函数的参数。push[插图]是往栈中存入数据的指令。32位CPU中，1次push指令可以存储4个字节的数据。代码清单5-2中，由于使用了两次push指令把两个参数（456和123）存入到了栈中，因此总的来说就是存储了8字节的数据。通过call指令调用函数MyFunc()后，栈中存储的数据就不再需要了。于是这时就通过add esp, 8这个指令，使存储着栈数据的esp寄存器[插图]前进8位（设定为指向高8位字节地址），来进行数据清理。由于栈是在各种情况下都可以再利用的内存领域，因此使用完毕后有必要将其恢复到原状态。上述这些操作就是栈的清理处理。另外，在C语言中，函数的返回值，是通过寄存器而非栈来返回的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>栈清理处理，比起在函数调用方进行，在反复被调用的函数一方进行时，程序整体要小一些。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222325531.png" alt="image-20230304222325531">图5-7 在被调用方进行清理处理可节约内存</p>
</blockquote>
</blockquote>
<p>◆ 5.5 磁盘的物理结构</p>
<blockquote>
<blockquote>
<p>磁盘的物理结构是指磁盘存储数据的形式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>磁盘是通过把其物理表面划分成多个空间来使用的。划分的方式有扇区方式和可变长方式两种，前者是指将磁盘划分为固定长度的空间，后者则是指把磁盘划分为长度可变的空间。一般的Windows计算机所使用的硬盘和软盘，采用的都是扇区方式。扇区方式中，把磁盘表面分成若干个同心圆的空间就是磁道，把磁道按照固定大小（能存储的数据长度相同）划分而成的空间就是扇区</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222343137.png" alt="image-20230304222343137">图5-8 扇区方式的磁盘物理构造</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>扇区是对磁盘进行物理读写的最小单位。Windows中使用的磁盘，一般1个扇区是512字节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Windows在逻辑方面（软件方面）对磁盘进行读写的单位是扇区整数倍簇。根据磁盘容量的不同，1簇可以是512字节（1簇=1扇区）、1KB（1簇=2扇区）、2KB、4KB、8KB、16KB、32KB（1簇=64扇区）。磁盘的容量越大，簇的容量也越大。不过，在软盘中，1簇=512字节=1扇区，簇和扇区的大小是相等的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不管是硬盘还是软盘，不同的文件是不能存储在同一个簇中的，否则就会导致只有一方的文件不能被删除。因此，不管是多么小的文件，都会占用1簇的空间。这样一来，所有的文件都会占用1簇的整数倍的磁盘空间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>仅有1个文字也会占用1簇（512字节）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以簇为单位进行读写时，1簇中没有填满的区域会保持不被使用的状态。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果减少簇的容量，磁盘访问次数就会增加，就会导致读写文件的时间变长。由于在磁盘表面上，表示扇区区分的领域是必要的，因此，如果簇的容量过小，磁盘的整体容量也会减少。扇区和簇的大小，是由处理速度和存储容量的平衡来决定的。</p>
</blockquote>
</blockquote>
<p>◆ 第6章 亲自尝试压缩数据</p>
<blockquote>
<blockquote>
<p>1．文件储存的基本单位是什么？2．DOC、LZH和TXT这些扩展名中，哪一个是压缩文件的扩展名？3．文件内容用“数据的值×循环次数”来表示的压缩方法是RLE算法还是哈夫曼算法？4．在Windows计算机经常使用的SHIFT JIS字符编码中，1个半角英数是用几个字节的数据来表示的？5．BMP（BITMAP）格式的图像文件，是压缩过的吗？6．可逆压缩和非可逆压缩的不同点是什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>1字节（=8位）2. LZH3. RLE算法4. 1字节（=8位）5．没有压缩过6．压缩后的数据能复原的是可逆压缩，无法复原的是非可逆压缩</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．文件是字节数据的集合体。2. LZH是用LHA等工具压缩过的文件的扩展名。3．例如，AAABB这个数据压缩后就是A3B2。4．半角英文数字是用1个字节来表示的，汉字等全角字符是用2个字节来表示的。5．因为BMP格式的图像文件是没有被压缩的，因此要比JPEG格式等压缩过的图像文件大不少。6．像照片（JPEG格式）这样，之所以压缩后也不会让人感到不自然，就是因为使用了非可逆压缩。</p>
</blockquote>
</blockquote>
<p>◆ 6.1 文件以字节为单位保存</p>
<blockquote>
<blockquote>
<p>文件是将数据存储在磁盘等存储媒介中的一种形式。程序文件中存储数据的单位是字节。文件的大小之所以用××KB、××MB等来表示，就是因为文件是以字节（B=Byte）为单位来存储的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>文件就是字节数据的集合。用1字节（=8位）表示的字节数据有256种，用二进制数来表示的话，其范围就是00000000～11111111。如果文件中存储的数据是文字，那么该文件就是文本文件。如果是图形，那么该文件就是图像文件。在任何情况下，文件中的字节数据都是连续存储的，</p>
</blockquote>
</blockquote>
<p>◆ 6.2 RLE算法的机制</p>
<blockquote>
<blockquote>
<p>RLE算法的机制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>尝试一下对存储着AAAAAABBCDDEEEEEF这17个半角字符的文件（文本文件）进行压缩。虽然这些文字没有什么实际意义，但是很适合用来解说RLE算法的压缩机制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于半角字母中，1个字符是作为1个字节的数据被保存在文件中的。因此上述文件的大小就是17个字节。那么如何才能压缩该文件呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只要能使文件小于17字节，我们可以使用任何压缩方法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在观察AAAAAABBCDDEEEEEF这个数据后，不难看出有不少字符是重复出现的。在字符后面加上重复出现次数，AAAAAABBCDDEEEEEF就可以用A6B2C1D2E5F1来表示。A6B2C1D2E5F1是12个字符也就是12字节，因此结果就将原文件压缩了12字节÷17字节≒70％。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>像这样，把文件内容用“数据×重复次数”的形式来表示的压缩方法称为RLE（Run LengthEncoding，行程长度编码）算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RLE算法是一种很好的压缩方法，经常被用于压缩传真的图像等[插图]。因为图像文件本质上也是字节数据的集合体，所以可以用RLE算法来压缩。</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222425236.png" alt="image-20230304222425236"></p>
</blockquote>
</blockquote>
<p>◆ 6.3 RLE算法的缺点</p>
<blockquote>
<blockquote>
<p>RLE算法的缺点</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实际的文本文件中，同样字符多次重复出现的情况并不多见。虽然针对相同数据经常连续出现的图像、文件等，RLE算法可以发挥不错的效果，但它并不适合文本文件的压缩。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>表6-1 借助RLE算法对各文件进行压缩的结果</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222442975.png" alt="image-20230304222442975"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用RLE算法对文本文件进行压缩后，文件却增大了，而且几乎是压缩前的2倍。这是因为文本文件中同样字符连续出现的部分并不多。以存储着“This is a pen.”这14个字符的文本文件为例，使用RLE算法对其进行压缩后，就变成了“T1h1i1s1 1i1s1 1a1 1p1e1n1.1”这样的28个字符，是压缩前的2倍。由于文章中字符大量连续出现的情况并不多见，因此，使用RLE算法后，大部分字符后面都会加上1，这样一来，压缩后的文件自然变成了之前的2倍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与文本文件不同，图像文件的压缩比率[插图]达到了40％。程序的EXE文件的压缩比率也达到了60％，这是因为EXE文件中连续的数据部分，其初始值为0的情况很多。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们也可以在RLE算法的基础上再下点功夫，不以1个字符为单位，而以字符串为单位来查找重复次数。例如，This is a pen.中，is重复了两次。通过利用这个压缩技巧，压缩后的文件也能小一些。</p>
</blockquote>
</blockquote>
<p>◆ 6.4 通过莫尔斯编码来看哈夫曼算法的基础</p>
<blockquote>
<blockquote>
<p>通过莫尔斯编码来看哈夫曼算法的基础</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>哈夫曼算法是哈夫曼（D. A. Huffman）于1952年提出来的压缩算法。日本人比较常用的压缩软件LHA[插图]，使用的就是哈夫曼算法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>文本文件是由不同类型的字符组合而成的，而且不同的字符出现的次数也是不同的。例如，在某一个文本文件中，A出现了100次左右，Q仅用到了3次，类似这样的情况是很常见的。而哈夫曼算法的关键就在于“多次出现的数据用小于8位的字节数来表示，不常用的数据则可以用超过8位的字节数来表示”。A和Q都用8位来表示时，原文件的大小就是100次× 8位 + 3次× 8位=824位，而假设A用2位、Q用10位来表示，压缩后的大小就是100次×2位+3次×10位=230位。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不管是不满8位的数据，还是超过8位的数据，最终都要以8位为单位保存到文件中。这是因为磁盘是以字节（8位）为单位来保存数据的</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222518127.png" alt="image-20230304222518127"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>莫尔斯编码是1837年莫尔斯（Samuel F. B. Morse）提出的。莫尔斯编码不是通过语言，而是通过“嗒嘀嗒嘀”这些长点和短点的组合来传递文本信息的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>莫尔斯编码。对数字领域比较熟悉的读者可能会认为“莫尔斯编码的短点是0，长点是1，其中1个字符用8位来表示”，但实际上，根据字符种类的不同，莫尔斯电码符号的长度也是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>莫尔斯编码把一般文本中出现频率高的字符用短编码来表示。这里所说的出现频率，不是通过对出版物等文章进行统计调查得来的，而是根据印刷行业的印刷活字数目而确定的。</p>
</blockquote>
</blockquote>
<p>◆ 6.5 用二叉树实现哈夫曼编码</p>
<blockquote>
<blockquote>
<p>用二叉树实现哈夫曼编码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>哈夫曼算法是指，为各压缩对象文件分别构造最佳的编码体系，并以该编码体系为基础来进行压缩。因此，用什么样式的编码（哈夫曼编码）对数据进行分割，就要由各个文件而定。用哈夫曼算法压缩过的文件中，存储着哈夫曼编码信息和压缩过的数据</p>
</blockquote>
</blockquote>
<p>◆ 6.6 哈夫曼算法能够大幅提升压缩比率</p>
<blockquote>
<blockquote>
<p>表6-4是将表6-1中的文件应用哈夫曼算法的LHA进行压缩后的结果，大家可以参考一下。可以看出，不管是哪种类型的文件，都得到了很高的压缩比率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222540480.png" alt="image-20230304222540480"></p>
</blockquote>
</blockquote>
<p>◆ 6.7 可逆压缩和非可逆压缩</p>
<blockquote>
<blockquote>
<p>可逆压缩和非可逆压缩</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>。图像文件的使用目的通常是把图像数据输出到显示器、打印机等设备上。Windows的标准图像数据形式为BMP[插图]，是完全未压缩的。由于显示器及打印机输出的bit（点）是可以直接映射（mapping）的，因此便有了BMP=bitmap这一名称。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>JPEG[插图]格式、TIFF[插图]格式、GIF[插图]格式等。与BMP格式不同的是，这些图像数据都会用一些技法来对数据进行压缩。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序的EXE文件以及每个字符、数值都有具体含义的文本文件则必须要还原到和压缩前同样的内容。而对于图像文件来说，即使有时无法还原到压缩前那样鲜明的图像状态，但只要肉眼看不出什么区别，有一些模糊也勉强可以接受。这里，我们把能还原到压缩前状态的压缩称为可逆压缩，无法还原到压缩前状态的压缩称为非可逆压缩</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222556689.png" alt="image-20230304222556689"></p>
</blockquote>
</blockquote>
<p>◆ COLUMN如果是你，你会怎样介绍？</p>
<blockquote>
<blockquote>
<p>内存是如何存储软件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>是通过电流的有无来存储的。你可以这样理解，有电流时是凸，无电流时是凹。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为什么CD能存储更多的数据呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>盒式卡带使用大量内存的话也可以放入大量数据啊。不过，到时候1个盒式卡带就要几千元了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据量大的软件才放在成本较低的CD中进行存储。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>游戏机的内存，只能放入少量的数据。因此，游戏机是一边把CD中存储的软件部分复制入内存，一边运行游戏的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>怪不得游戏中会出现Loading…呢</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>所有的游戏都放在磁盘中的话不也挺好嘛。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但正如刚才所说的那样，游戏要在游戏机中运行必须要复制到内存中才行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>盒式卡带的数据也要复制到内存中吗？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不用。盒式卡带的情况下，可以将游戏机主机的内存完整置换，所以不需要往内存中复制数据。只有磁盘才必须把数据复制到内存中。</p>
</blockquote>
</blockquote>
<p>◆ 第7章 程序是在何种环境中运行的</p>
<blockquote>
<blockquote>
<p>1．应用的运行环境，指的是什么？2．Macintosh用的操作系统（MacOS），在AT兼容机上能运行吗？3．Windows上的应用，在MacOS上能运行吗？4．FreeBSD提供的Ports，指的是什么？5．在Macintosh上可以利用的Windows环境模拟器称为什么？6．Java虚拟机的功能是什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．操作系统和计算机本身(硬件)的种类2．无法运行3．无法运行4．通过使用源代码来提供应用，并根据运行环境进行整合编译，从而得以在该环境下运行的机制5．Virtual PC for Mac6．运行Java应用的字节代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．应用的运行环境通常是用类似于Windows(OS)和AT兼容机（硬件）这样的OS和硬件的种类来表示的。2．不同的硬件种类需要不同的操作系统。3．应用是为了在特定操作系统上运行而作成的。4. FreeBSD是一种Unix操作系统。通过在各个环境中编译Ports中公开的代码，就可以执行由此生成的本地代码了。5．模拟器是指在Macintosh上提供虚拟的Windows环境。6．只要分别为各个环境安装专用的Java虚拟机，同样的字节代码就能在各种环境下运行了。</p>
</blockquote>
</blockquote>
<p>◆ 7.1 运行环境=操作系统 + 硬件</p>
<blockquote>
<blockquote>
<p>机器语言的程序称为本地代码（native code）。程序员用C语言等编写的程序，在编写阶段仅仅是文本文件。文本文件（排除文字编码的问题）在任何环境下都能显示和编辑。我们称之为源代码。通过对源代码进行编译，就可以得到本地代码。在市面上出售的用于Windows的应用软件包CD-ROM中，收录的就不是源代码，而是本地代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222620856.png" alt="image-20230304222620856"></p>
</blockquote>
</blockquote>
<p>◆ 7.3 不同操作系统的API不同</p>
<blockquote>
<blockquote>
<p>应用程序向操作系统传递指令的途径称为API（Application Programming Interface）[插图]。Windows及Unix系列操作系统的API，提供了任何应用程序都可以利用的函数组合。因为不同操作系统的API是有差异的，因此，将同样的应用程序移植到其他操作系统时，就必须要重写应用中利用到API的部分。像键盘输入、鼠标输入、显示器输出、文件输入输出等同外围设备进行输入输出操作的功能，都是通过API提供的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在同类型操作系统下，不管硬件如何，API基本上没有差别。因而，针对某特定操作系统的API所编写的程序，在任何硬件上都可以运行。当然，由于CPU种类不同，机器语言也不相同，因此本地代码当然也是不同的。这种情况下，就需要利用能够生成各CPU专用的本地代码的编译器，来对源代码进行重新编译了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>程序（本地代码）的运行环境是由操作系统和硬件来决定的</p>
</blockquote>
</blockquote>
<p>◆ 7.4 FreeBSD Port帮你轻松使用源代码</p>
<blockquote>
<blockquote>
<p>FreeBSD Port帮你轻松使用源代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不知道各位读者会不会有这样的想法：“既然CPU类型不同会导致同样的本地代码无法重复利用，那么为何不直接把源代码分发给程序呢？”的确，这也是一种方法。部分Unix系列操作系统就对此进行了灵活应用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Unix系列操作系统FreeBSD中，存在一种名为Ports的机制。该机制能够结合当前运行的硬件环境来编译应用的源代码，进而得到可以运行的本地代码系统。如果目标应用的源代码没有在硬件上的话，Ports就会自动使用FTP[插图]连接到相关站点来下载代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222714928.png" alt="image-20230304222714928"></p>
</blockquote>
</blockquote>
<p>◆ 7.5 利用虚拟机获得其他操作系统环境</p>
<blockquote>
<blockquote>
<p>即使不通过移植，也可以使用别的方法来运行其他操作系统的应用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>利用虚拟机软件</p>
</blockquote>
</blockquote>
<p>◆ 7.6 提供相同运行环境的Java虚拟机</p>
<blockquote>
<blockquote>
<p>除虚拟机的方法之外，还有一种方法能够提供不依赖于特定硬件及操作系统的程序运行环境，那就是Java。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大家说的Java，有两个层面的意思。一个是作为编程语言的Java，另一个是作为程序运行环境的Java。同其他编程语言相同，Java也是将Java语法记述的源代码编译后运行。不过，编译后生成的并不是特定CPU使用的本地代码，而是名为字节代码的程序。字节代码的运行环境就称为Java虚拟机（JavaVM,Java Virtual Machine）。Java虚拟机是一边把Java字节代码逐一转换成本地代码一边运行的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Java编译器和Java虚拟机的情况下，编译器会将程序员编写的源代码（sample.java）转换成字节代码（sample.class）。而Java虚拟机（java.exe）则会把字节代码变换成x86系列CPU适用的本地代码，然后由x86系列CPU负责实际的处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果能够结合各种类型的操作系统和硬件作成Java虚拟机，那么，同样字节代码的应用就可以在任何环境下运行了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222733687.png" alt="image-20230304222733687"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从操作系统方面来看，Java虚拟机是一个应用，而从Java应用方面来看，Java虚拟机就是运行环境。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>不同的Java虚拟机之间无法进行完整互换。这是因为，想让所有字节代码在任意Java虚拟机上都能运行是比较困难的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>另一点就是运行速度的问题。Java虚拟机每次运行时都要把字节代码变换成本机代码，这一机制是造成运行速度慢的原因。为此，目前业界也在努力改善这一问题，比如把首次变换后的本地代码保存起来，第2次以后直接利用本地代码，或是对字节代码中处理较为费时的部分进行优化（改善生成的本地代码质量）等。</p>
</blockquote>
</blockquote>
<p>◆ 7.7 BIOS和引导</p>
<blockquote>
<blockquote>
<p>程序的运行环境中，存在着名为BIOS（Basic Input/Output System）的系统。BIOS存储在ROM中，是预先内置在计算机主机内部的程序。BIOS除了键盘、磁盘、显卡等基本控制程序外，还有启动“引导程序”的功能。引导程序是存储在启动驱动器起始区域的小程序。操作系统的启动驱动器一般是硬盘，不过有时也可以是CD-ROM或软盘。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>开机后，BIOS会确认硬件是否正常运行，没有问题的话就会启动引导程序。引导程序的功能是把在硬盘等记录的OS加载到内存中运行。虽然启动应用是OS的功能，但OS并不能自己启动自己，而是通过引导程序来启动。</p>
</blockquote>
</blockquote>
<p>◆ 第8章 从源文件到可执行文件</p>
<blockquote>
<blockquote>
<p>1．CPU可以解析和运行的程序形式称为什么代码？2．将多个目标文件结合生成EXE文件的工具称为什么？3．扩展名为．obj的目标文件的内容，是源代码还是本地代码？4．把多个目标文件收录在一起的文件称为什么？5．仅包含Windows的DLL文件中存储的函数信息的文件称为什么？6．在程序运行时，用来动态申请分配的数据和对象的内存区域形式称为什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．本地代码（机器语言代码）2．链接器3．本地代码4．库文件5．导入库6．堆</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解析1．通过编译源代码得到本地代码。2．通过编译和链接，得到EXE文件。3．通过对源文件进行编译，得到目标文件。例如，C语言中，将Sample1.c这个源文件编译后，就会得到Sample1.obj这个目标文件。目标文件的内容是本地代码。4．链接器会从库文件中抽取出必要的目标文件并将其结合到EXE文件中。此外，还存在一种程序运行时结合的DLL形式的库文件。5．把导入库信息结合到EXE文件中，这样程序在运行时就可以利用DLL内的函数了。6．堆的内存空间会根据程序的命令进行申请及释放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>源代码完成后，就可以编译生成可执行文件了。负责实现该功能的是编译器。</p>
</blockquote>
</blockquote>
<p>◆ 8.1 计算机只能运行本地代码</p>
<blockquote>
<blockquote>
<p>用C语言编写的源文件的扩展名通常是“.c”</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为源文件是简单的文本文件，所以用Windows自带的记事本等文本编辑器就可以编写。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU能直接解析并运行的不是源代码而是本地代码的程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本地（native）这个术语有“母语的”意思。对CPU来说，母语就是机器语言，而转换成机器语言的程序就是本地代码。用任何编程语言编写的源代码，最后都要翻译成本地代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>，否则CPU就不能理解。也就是说，即使是用不同编程语言编写的代码，转换成本地代码后，也都变成用同一种语言（机器语言）来表示了。</p>
</blockquote>
</blockquote>
<p>◆ 8.2 本地代码的内容</p>
<blockquote>
<blockquote>
<p>Dump是指把文件的内容，每个字节用2位十六进制数来表示的方式。</p>
</blockquote>
</blockquote>
<p>◆ 8.3 编译器负责转换源代码</p>
<blockquote>
<blockquote>
<p>读入的源代码还要经过语法解析、句法解析、语义解析等，才能生成本地代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>根据CPU类型的不同，本地代码的类型也不同。因而，编译器不仅和编程语言的种类有关，和CPU的类型也是相关的。例如，Pentium等x86系列CPU用的C编译器，同PowerPC这种CPU用的C编译器就不同。从另一个方面来看，这其实是非常方便的。因为这样一来，同样的源代码就可以翻译成适用于不同CPU的本地代码了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222844392.png" alt="image-20230304222844392"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大家在计算机软件商店等处购买编译器时，可能会跟店员说明3点：“想要买的是何种编程语言用的编译器”“编译器生成的本地代码是用于哪种CPU的”以及“该编译器是在什么环境下使用的”（图8-6）。而实际上，通常只要说明产品名及版本就可以了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222854140.png" alt="image-20230304222854140"></p>
</blockquote>
</blockquote>
<p>◆ 8.4 仅靠编译是无法得到可执行文件的</p>
<blockquote>
<blockquote>
<p>本地文件是无法直接运行的。为了得到可以运行的EXE文件，编译之后还需要进行“链接”处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Borland C++的编译器是bcc32.exe这个命令行工具。在Windows的命令提示符[插图]中，运行下列命令后，由C语言编写的源文件Smaple1.c就会被编译[插图]。[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>编译后生成的不是EXE文件，而是扩展名为“.obj”的目标文件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>把多个目标文件结合，生成1个EXE文件的处理就是链接，运行连接的程序就称为链接器（linkageeditor或连结器）。</p>
</blockquote>
</blockquote>
<p>◆ 8.5 启动及库文件</p>
<blockquote>
<blockquote>
<p>库文件指的是把多个目标文件集成保存到一个文件中的形式。链接器指定库文件后，就会从中把需要的目标文件抽取出来，并同其他目标文件结合生成EXE文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>外部符号是指其他目标文件中的变量或函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>sprintf()等函数，不是通过源代码形式而是通过库文件形式和编译器一起提供的。这样的函数称为标准函数。之所以使用库文件，是为了简化为链接器的参数指定多个目标文件这一过程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过以目标文件的形式或集合多个目标文件的库文件形式来提供函数，就可以不用公开标准函数的源代码内容。</p>
</blockquote>
</blockquote>
<p>◆ 8.6 DLL文件及导入库</p>
<blockquote>
<blockquote>
<p>Windows中，API的目标文件，并不是存储在通常的库文件中，而是存储在名为DLL（Dynamic LinkLibrary）文件的特殊库文件中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>DLL文件是程序运行时动态结合的文件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>存储着目标文件的实体，并直接和EXE文件结合的库文件形式称为静态链接库。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>总结一下Windows中的编译及链接机制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222917809.png" alt="image-20230304222917809"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图8-8 Windows中的编译和链接机制</p>
</blockquote>
</blockquote>
<p>◆ 8.7 可执行文件运行时的必要条件</p>
<blockquote>
<blockquote>
<p>EXE文件是作为单独的文件储存在硬盘中的。通过资源管理器找到并双击EXE文件，就会把EXE文件的内容加载到内存中运行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>请大家思考一下下面的问题。本地代码在对程序中记述的变量进行读写时，是参照数据存储的内存地址来运行命令的。在调用函数时，程序的处理流程就会跳转到存储着函数处理内容的内存地址上。EXE文件作为本地代码的程序，并没有指定变量及函数的实际内存地址。在类似于Windows操作系统这样的可以加载多个可执行程序的运行环境中，每次运行时，程序内的变量及函数被分配到的内存地址都是不同的。那么，在EXE文件中，变量和函数的内存地址的值，是如何来表示的呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那就是EXE文件中给变量及函数分配了虚拟的内存地址。在程序运行时，虚拟的内存地址会转换成实际的内存地址。链接器会在EXE文件的开头，追加转换内存地址所需的必要信息。这个信息称为再配置信息。</p>
</blockquote>
</blockquote>
<p>◆ 8.8 程序加载时会生成栈和堆</p>
<blockquote>
<blockquote>
<p>EXE文件的内容分为再配置信息、变量组和函数组</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当程序加载到内存后，除此之外还会额外生成两个组，那就是栈和堆。栈是用来存储函数内部临时使用的变量（局部变量[插图]），以及函数调用时所用的参数的内存区域。堆是用来存储程序运行时的任意数据及对象的内存领域</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304222934608.png" alt="image-20230304222934608"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>① 不管是什么程序，程序的内容都是由处理和数据构成的。大多数编程语言都是用函数来表示处理、用变量来表示数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>EXE文件中并不存在栈及堆的组。栈和堆需要的内存空间是在EXE文件加载到内存后开始运行时得到分配的。因而，内存中的程序，就是由用于变量的内存空间、用于函数的内存空间、用于栈的内存空间、用于堆的内存空间这4部分构成的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>栈及堆的相似之处在于，他们的内存空间都是在程序运行时得到申请分配的[插图]。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在内存的使用方法上，二者存在些许不同。栈中对数据进行存储和舍弃（清理处理）的代码，是由编译器自动生成的，因此不需要程序员的参与。使用栈的数据的内存空间，每当函数被调用时都会得到申请分配，并在函数处理完毕后自动释放。与此相对，堆的内存空间，则要根据程序员编写的程序，来明确进行申请分配或释放。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>根据编程语言的不同，对堆用的内存空间进行申请分配和释放的程序的编写方法也是多种多样的。C语言中是通过malloc()函数来进行申请分配、通过free()函数来释放的。而C++中则是通过new运算符来申请分配、通过delete运算符来释放的。无论是C语言还是C++，如果没有在程序中明确释放堆的内存空间，那么即使在处理完毕后，该内存空间仍会一直残留。这个现象称为内存泄露</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果内存泄露一直存在的话，就有可能会造成内存不足而导致宕机。</p>
</blockquote>
</blockquote>
<p>◆ 8.9 有点难度的Q&amp;A</p>
<blockquote>
<blockquote>
<p>Q：编译器和解释器有什么不同？A：编译器是在运行前对所有源代码进行解释处理的。而解释器则是在运行时对源代码的内容一行一行地进行解释处理的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：“分割编译”指的是什么？A：将整个程序分为多个源代码来编写，然后分别进行编译，最后链接成一个EXE文件。这样每个源代码都相对变短，便于程序管理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：“Build”指的是什么？A：根据开发工具种类的不同，有的编译器可以通过选择“Build”菜单来生成EXE文件。这种情况下，Build指的是连续执行编译和链接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：使用DLL文件的好处是什么？A:DLL文件中的函数可以被多个程序共用。因此，借助该功能可以节约内存和磁盘。此外，在对函数的内容进行修正时，还不需要重新链接（静态链接）使用这个函数的程序[插图]。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：不链接导入库的话就无法调用DLL文件中的函数吗？A：通过使用LoadLibrary()及GetProcAddress()这些API，即使不链接导入库，也可以在程序运行时调用DLL文件中的函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：“叠加链接”这个术语指的是什么？A：将不会同时执行的函数，交替加载到同一个地址中运行。通过使用“叠加链接器”这一特殊的链接器即可实现。在计算机中配置的内存容量不多的MS-DOS时代，经常使用叠加链接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Q：和内存管理相关的“垃圾回收机制”指的是什么呢？A：垃圾回收机制（garbage collection）指的是对处理完毕后不再需要的堆内存空间的数据和对象[插图]进行清理，释放它们所使用的内存空间</p>
</blockquote>
</blockquote>
<p>◆ 第9章 操作系统和应用的关系</p>
<blockquote>
<blockquote>
<p>1．监控程序的主要功能是什么？2．在操作系统上运行的程序称为什么？3．调用操作系统功能称为什么？4. Windows Vista是多少位的操作系统？5. GUI是什么的缩写？6. WYSIWYG是什么的缩写？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．程序的加载和运行2．应用或应用程序3．系统调用（system call）4. 32位（也有64位的版本）5. Graphical User Interface（图形用户界面）6. What You See Is What Your Get（所见即所得）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．监控程序也可以说是操作系统的原型。2．文字处理软件和表格计算软件等都是应用。3．应用通过系统调用（system call）间接控制硬件。4. Windows Vista有32位CPU用的版本，也有64位CPU用的版本。5．显示器中显示的窗口及图标等通过鼠标点击可以直观操作的用户界面。6. WYSIWYG是指可以直接将显示器中显示的内容在打印机上打印出来。这也是Windows的特征之一。</p>
</blockquote>
</blockquote>
<p>◆ 9.1 操作系统功能的历史</p>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223011593.png" alt="image-20230304223011593"></p>
</blockquote>
</blockquote>
<p>◆ 9.2 要意识到操作系统的存在</p>
<blockquote>
<blockquote>
<p>由于操作系统诞生后，程序员无需再考虑硬件的问题，因此程序员的数量也增加了。哪怕是自称“对硬件一窍不通”的人，也可能会制作出一个有模有样的应用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用的可执行文件指的是，计算机的CPU可以直接解释并运行的本地代码。不过这些代码是无法直接控制计算机中配置的时钟IC及显示器用的I/O等硬件的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在操作系统这个运行环境下，应用并不是直接控制硬件，而是通过操作系统来间接控制硬件的。变量定义中涉及的内存的申请分配，以及time()和printf()这些函数的运行结果，都不是面向硬件而是面向操作系统的。操作系统收到应用发出的指令后，首先会对该指令进行解释，然后会对时钟IC（实时时钟[插图]）和显示器用的I/O进行控制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223029304.png" alt="image-20230304223029304"></p>
</blockquote>
</blockquote>
<p>◆ 9.3 系统调用和高级编程语言的移植性</p>
<blockquote>
<blockquote>
<p>操作系统的硬件控制功能，通常是通过一些小的函数集合体的形式来提供的。这些函数及调用函数的行为统称为系统调用（system call），也就是应用对操作系统（system）的功能进行调用（call）的意思。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C语言等高级编程语言并不依存于特定的操作系统。这是因为人们希望不管是Windows还是Linux，都能使用几乎相同的源代码。因此，高级编程语言的机制就是，使用独自的函数名，然后再在编译时将其转换成相应操作系统的系统调用（也有可能是多个系统调用的组合）。也就是说，用高级编程语言编写的应用在编译后，就转换成了利用系统调用的本地代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223050541.png" alt="image-20230304223050541"></p>
</blockquote>
</blockquote>
<p>◆ 9.4 操作系统和高级编程语言使硬件抽象化</p>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223113963.png" alt="image-20230304223113963"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>变量fp中被赋予的是fopen()函数的返回值。该值称为文件指针。应用打开文件后，操作系统就会自动申请分配用来管理文件读写的内存空间。这个内存空间的地址可以通过fopen()函数的返回值获得。用fopen()打开文件后，接下来就是通过指定文件指针来对文件进行操作。正因为如此，fputs()及fclose()的参数中都指定了文件指针（变量fp）。</p>
</blockquote>
</blockquote>
<p>◆ 9.5 Windows操作系统的特征</p>
<blockquote>
<blockquote>
<p>Windows操作系统的主要特征如下所示。（1）32位操作系统（也有64位版本）（2）通过API函数集来提供系统调用（3）提供采用了图形用户界面的用户界面（4）通过WYSIWYG[插图]实现打印输出（5）提供多任务功能（6）提供网络功能及数据库功能（7）通过即插即用实现设备驱动的自动设定</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多任务指的是同时运行多个程序的功能。Windows是通过时钟分割技术来实现多任务功能的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>时钟分割指的是在短时间间隔内，多个程序切换运行的方式。在用户看来，就是多个程序在同时运行。也就是说，Windows会自动切换多个程序的运行（图9-9）。此外，Windows中还具有以程序中的函数为单位来进行时钟分割的多线程[插图]功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223142986.png" alt="image-20230304223142986"></p>
</blockquote>
</blockquote>
<p>◆ 第10章 通过汇编语言了解程序的实际构成</p>
<blockquote>
<blockquote>
<p>第10章 通过汇编语言了解程序的实际构成</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．本地代码的指令中，表示其功能的英语缩写称为什么？2．汇编语言的源代码转换成本地代码的方式称为什么？3．本地代码转换成汇编语言的源代码的方式称为什么？4．汇编语言的源文件的扩展名，通常是什么格式？5．汇编语言程序中的段定义指的是什么？6．汇编语言的跳转指令，是在何种情况下使用的？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．助记符2．汇编3．反汇编4. .asm5．构成程序的命令和数据的集合组6．将程序流程跳转到其他地址时需要用到该指令</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解析1．汇编语言是通过利用助记符来记述程序的。2．使用汇编器这个工具来进行汇编。3．通过反汇编，得到人们可以理解的代码。4. .asm是assembler（汇编器）的略写。5．在高级编程语言的源代码中，即使指令和数据在编写时是分散的，编译后也会在段定义中集合汇总起来。大家看过汇编语言的源代码后，就会清楚了。6．在汇编语言中，通过跳转指令，可以实现循环和条件分支。</p>
</blockquote>
</blockquote>
<p>◆ 10.1 汇编语言和本地代码是一一对应的</p>
<blockquote>
<blockquote>
<p>通过调查本地代码的内容，可以了解程序最终是以何种形式来运行的。但是，如果直接打开本地代码来看的话，只能看到数值的罗列。如果直接使用这些数值来编写程序的话，还真是不太容易理解。因而就产生了这样一种想法，那就是在各本地代码中，附带上表示其功能的英语单词缩写。例如，在加法运算的本地代码中加上add（addition的缩写）、在比较运算的本地代码中加上cmp（compare的缩写）等。这些缩写称为助记符，使用助记符的编程语言称为汇编语言。这样，通过查看汇编语言编写的源代码，就可以了解程序的本质了。因为这和查看本地代码的源代码，是同一级别的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即使是用汇编语言编写的源代码，最终也必须要转换成本地代码才能运行。负责转换工作的程序称为汇编器，转换这一处理本身称为汇编。在将源代码转换成本地代码这个功能方面，汇编器和编译器是同样的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用汇编语言编写的源代码，和本地代码是一一对应的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以反过来转换成汇编语言的源代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>哪怕是用C语言编写的源代码，编译后也会转换成特定CPU用的本地代码。而将其反汇编的话，就可以得到汇编语言的源代码，并对其内容进行调查。不过，本地代码变换成C语言源代码的反编译，则要比反汇编困难。这是因为，C语言的源代码同本地代码不是一一对应的，因此完全还原到原始的源代码是不太可能的[插图]。</p>
</blockquote>
</blockquote>
<p>◆ 10.2 通过编译器输出汇编语言的源代码</p>
<blockquote>
<blockquote>
<p>除了将本地代码进行反汇编这一方法外，通过其他方式也可以获取汇编语言的源代码。大部分C语言编译器，都可以把利用C语言编写的源代码转换成汇编语言的源代码，而不是本地代码。利用该功能，就可以对C语言的源代码和汇编语言的源代码进行比较研究。</p>
</blockquote>
</blockquote>
<p>◆ 10.3 不会转换成本地代码的伪指令</p>
<blockquote>
<blockquote>
<p>汇编语言的源代码，是由转换成本地代码的指令（后面讲述的操作码）和针对汇编器的伪指令构成的。伪指令负责把程序的构造及汇编的方法指示给汇编器（转换程序）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>伪指令本身是无法汇编转换成本地代码的。</p>
</blockquote>
</blockquote>
<p>◆ 10.4 汇编语言的语法是“操作码+操作数”</p>
<blockquote>
<blockquote>
<p>在汇编语言中，1行表示对CPU的一个指令。汇编语言指令的语法结构是操作码+操作数<img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223304758.png" alt="image-20230304223304758">（也存在只有操作码没有操作数的指令）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>操作码表示的是指令动作，操作数表示的是指令对象。操作码和操作数罗列在一起的语法，就是一个英文的指令文本。操作码是动词，操作数相当于宾语。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>能够使用何种形式的操作码，是由CPU的种类决定的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>操作数中指定了寄存器名、内存地址、常数等。在表10-1中，操作数是用A和B来表示的。表10-1 代码清单10-2中用到的操作码的功能[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本地代码加载到内存后才能运行。内存中存储着构成本地代码的指令和数据。程序运行时，CPU会从内存中把指令和数据读出，然后再将其存储在CPU内部的寄存器中进行处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223316354.png" alt="image-20230304223316354"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>寄存器是CPU中的存储区域。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>寄存器并不仅仅具有存储指令和数据的功能，也有运算功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>寄存器的名称会通过汇编语言的源代码指定给操作数。内存中的存储区域是用地址编号来区分的。CPU内的寄存器是用eax及ebx这些名称来区分的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU内部也有程序员无法直接操作的寄存器。例如，表示运算结果正负及溢出状态的标志寄存器及操作系统专用的寄存器等，都无法通过程序员编写的程序直接进行操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223325840.png" alt="image-20230304223325840"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>x86系列32位CPU的寄存器名称中，开头都带了一个字母e，例如eax、ebx、ecx、edx等。这是因为16位CPU的寄存器名称是ax、bx、cx、dx等。32位CPU寄存器的名称中的e，有扩展（extended）的意思。我们也可以仅利用32位寄存器的低16位，此时只需把要指定的寄存器名开头的字母e去掉即可。</p>
</blockquote>
</blockquote>
<p>◆ 10.5 最常用的mov指令</p>
<blockquote>
<blockquote>
<p>指令中最常使用的是对寄存器和内存进行数据存储的mov指令。mov指令的两个操作数，分别用来指定数据的存储地和读出源。操作数中可以指定寄存器、常数、标签（附加在地址前），以及用方括号（[]）围起来的这些内容。如果指定了没有用方括号围起来的内容，就表示对该值进行处理；如果指定了用方括号围起来的内容，方括号中的值则会被解释为内存地址，然后就会对该内存地址对应的值进行读写操作。</p>
</blockquote>
</blockquote>
<p>◆ 10.6 对栈进行push和pop</p>
<blockquote>
<blockquote>
<p>程序运行时，会在内存上申请分配一个称为栈的数据空间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数据在存储时是从内存的下层（大的地址编号）逐渐往上层（小的地址编号）累积，读出时则是按照从上往下的顺利进行</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223341183.png" alt="image-20230304223341183"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>栈是存储临时数据的区域</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>32位x86系列的CPU中，进行1次push或pop，即可处理32位（4字节）的数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>push指令和pop指令中只有一个操作数。该操作数表示的是“push的是什么及pop的是什么”，而不需要指定“对哪一个地址编号的内存进行push或pop”。这是因为，对栈进行读写的内存地址是由esp寄存器（栈指针）进行管理的。push指令和pop指令运行后，esp寄存器的值会自动进行更新（push指令是-4, pop命令是+4），因而程序员就没有必要指定内存地址了。</p>
</blockquote>
</blockquote>
<p>◆ 10.7 函数调用机制</p>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223400235.png" alt="image-20230304223400235">[插图]</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）、（2）、（7）、（8）的处理适用于C语言中所有的函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）和（4）表示的是将传递给AddNum函数的参数通过push入栈。在C语言的源代码中，虽然记述为函数AddNum（123,456），但入栈时则会按照456、123这样的顺序，也就是位于后面的数值先入栈。这是C语言的规定。（5）的call指令，把程序流程跳转到了操作数中指定的AddNum函数所在的内存地址处。在汇编语言中，函数名表示的是函数所在的内存地址。AddNum函数处理完毕后，程序流程必须要返回到编号（6）这一行。call指令运行后，call指令的下一行（（6）这一行）的内存地址（调用函数完毕后要返回的内存地址）会自动地push入栈。该值会在AddNum函数处理的最后通过ret指令pop出栈，然后程序流程就会返回到（6）这一行。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）部分会把栈中存储的两个参数（456和123）进行销毁处理，也就是在第5章提到的栈清理处理。虽然通过使用两次pop指令也可以实现，不过采用esp寄存器加8的方式会更有效率（处理1次即可）。对栈进行数值的输入输出时，数值的单位是4字节。因此，通过在负责栈地址管理的esp寄存器中加上4的2倍8，就可以达到和运行两次pop命令同样的效果。虽然内存中的数据实际上还残留着，但只要把esp寄存器的值更新为数据存储地址前面的数据位置，该数据也就相当于被销毁了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>push指令和pop指令必须以4字节为单位对数据进行入栈和出栈处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>长度小与4字节的123和456这些值在存储时，也占用了4字节的栈区域。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223414347.png" alt="image-20230304223414347"></p>
</blockquote>
</blockquote>
<p>◆ 10.13 了解程序运行方式的必要性</p>
<blockquote>
<blockquote>
<p>两个函数更新同一个全局变量数值的C语言程序<img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223432500.png" alt="image-20230304223432500"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>C语言源代码中counter *=2；这一个指令的部分，在汇编语言源代码，也就是实际运行的程序中，分成了3个指令。如果只是看counter *=2；的话，就会以为counter的数值被直接扩大为了原来的2倍。然而，实际上执行的却是“把counter的数值读入eax寄存器”“将eax寄存器的数值变成原来的2倍”“把eax寄存器的数值写入counter”这3个处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将全局变量的值翻倍这一部分转换成汇编语言源代码的结果<img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223442598.png" alt="image-20230304223442598"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在多线程处理中，用汇编语言记述的代码每运行1行，处理都有可能切换到其他线程（函数）中。因而，假设 MyFunc1函数在读出counter的数值100后，还未来得及将它的2倍值200写入counter时，正巧MyFunc2函数读出了counter的数值100，那么结果就会导致counter的数值变成了200</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了避免该bug，我们可以采用以函数或C语言源代码的行为单位来禁止线程切换的锁定方法。通过锁定，在特定范围内的处理完成之前，处理不会被切换到其他函数中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现在基本上没有人用汇编语言来编写程序了。因为C语言等高级编程语言用1行就可以完成的处理，使用汇编语言的话有时就需要多行，效率很低。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>汇编语言的经验还是很重要的。因为借助汇编语言，我们可以更好地了解计算机的机制。特别是对专业程序员来说，至少要有一次使用汇编语言的经验</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>没有汇编语言经验的程序员，就相当于只知道汽车的驾驶方法而不了解汽车结构的驾驶员。对这样的驾驶员来说，如果汽车出现了故障或奇怪的现象，他们就无法自己找到原因。不了解汽车结构的话，开车的时候还可能会浪费油。这样的话，作为职业驾驶员是不合格的。与此相对，有汇编语言经验的程序员，也就相当于了解计算机和程序机制的驾驶员，他们不仅能自己解决问题，还能在驾驶过程中省油。</p>
</blockquote>
</blockquote>
<p>◆ 第11章 硬件控制方法</p>
<blockquote>
<blockquote>
<p>1．在汇编语言中，是用什么指令来同外围设备进行输入输出操作的？2．I/O是什么的缩写？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>3．用来识别外围设备的编号称为什么？4．IRQ是什么的缩写？5．DMA是什么的缩写？6．用来识别具有DMA功能的外围设备的编号称为什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol>
<li>IN指令和OUT指令2. Input/Output3. I/O地址或I/O端口号4. Interrupt Request5. Direct Memory Access6. DMA通道</li>
</ol>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．在x86系列CPU用的汇编语言中，通过IN指令来实现I/O输入，OUT指令来实现I/O输出。2．用来实现计算机主机和外围设备输入输出交互的IC称为I/O控制器或简称为I/O。3．所有连接到计算机的外围设备都会分配一个I/O地址编号。4. IRQ指的是用来执行硬件中断请求的编号。5. DMA指的是，不经过CPU中介处理，外围设备直接同计算机的主内存进行数据传输。6．像磁盘这样用来处理大量数据的外围设备都具有DMA功能。</p>
</blockquote>
</blockquote>
<p>◆ 11.1 应用和硬件无关？</p>
<blockquote>
<blockquote>
<p>Windows提供了通过应用来间接控制硬件的方法。利用操作系统提供的系统调用功能就可以实现对硬件的控制。在Windows中，系统调用称为API</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>各API就是应用调用的函数。这些函数的实体被存储在DLL文件中。</p>
</blockquote>
</blockquote>
<p>◆ 11.2 支撑硬件输入输出的IN指令和OUT指令</p>
<blockquote>
<blockquote>
<p>Window控制硬件时借助的是输入输出指令。其中具有代表性的两个输入输出指令就是IN和OUT。这些指令也是汇编语言的助记符。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>IN指令通过指定端口号的端口输入数据，并将其存储在CPU内部的寄存器中。OUT指令则是把CPU寄存器中存储的数据，输出到指定端口号的端口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机主机中，附带了用来连接显示器及键盘等外围设备的连接器。而各连接器的内部，都连接有用来交换计算机主机同外围设备之间电流特性的IC。这些IC，统称为I/O 控制器。由于电压不同，数字信号及模拟信号的电流特性也不同，计算机主机和外围设备是无法直接连接的。为了解决这个问题，I/O控制器就很有必要了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>I/O是Input/Output的缩写。显示器、键盘等外围设备都有各自专用的I/O控制器。I/O控制器中有用于临时保存输入输出数据的内存。这个内存就是端口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>I/O控制器内部的内存，也称为寄存器。虽然都是寄存器，但它和CPU内部的寄存器在功能上是不同的。CPU内部的寄存器是用来进行数据运算处理的，而I/O寄存器则主要是用来临时存储数据的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在实现I/O控制器功能的IC中，会有多个端口。由于计算机中连接着很多外围设备，所以就会有多个I/O控制器，当然也会有多个端口。一个I/O控制器既可以控制一个外围设备，也可以控制多个外围设备。各端口之间通过端口号进行区分。端口号也称为I/O地址。IN指令和OUT指令在端口号指定的端口和CPU之间进行数据的输入输出。这和通过内存地址来进行主内存的读写是一样的道理</p>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223523540.png" alt="image-20230304223523540"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图11-3 以端口为桥梁来实现CPU和外围设备之间的数据传递</p>
</blockquote>
</blockquote>
<p>◆ 11.4 外围设备的中断请求</p>
<blockquote>
<blockquote>
<p>IRQ（Interrupt Request）是中断请求的意思。那么，IRQ主要是用来做什么的呢？IRQ是用来暂停当前正在运行的程序，并跳转到其他程序运行的必要机制。该机制称为中断处理。中断处理在硬件控制中担当着重要角色。因为如果没有中断处理，就有可能出现处理无法顺畅进行的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从中断处理开始到请求中断的程序（中断处理程序）运行结束之前，被中断的程序（主程序）的处理是停止的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>CPU接收到来自中断控制器的中断请求后，会把当前正在运行的主程序中断，并切换到中断处理程序。中断处理程序的第一步处理，就是把CPU所有寄存器的数值保存到内存的栈中。在中断处理程序中完成外围设备的输入输出后，把栈中保存的数值还原到CPU寄存器中，然后再继续进行对主程序的处理。假如CPU寄存器的数值没有还原的话，就会影响到主程序的运行，甚至还有可能会使程序意外停止或者发生运行异常。这是因为主程序在运行过程中，出于某些原因用到CPU寄存器。而这时如果突然插入别的程序，主程序必然会受到影响。因此，在中断请求完毕后，各寄存器的数值必须要还原到中断前的状态。只要寄存器的值保持不变，主程序就可以像没有发生任何事情一样继续处理</p>
</blockquote>
</blockquote>
<p>◆ 11.6 DMA可以实现短时间内传送大量数据</p>
<blockquote>
<blockquote>
<p>DMA是指在不通过CPU的情况下，外围设备直接和主内存进行数据传送。磁盘等都用到了这个DMA机制。通过利用DMA，大量数据就可以在短时间内转送到主内存。之所以这么快速，是因为CPU作为中介的时间被节省了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223603897.png" alt="image-20230304223603897"></p>
</blockquote>
</blockquote>
<p>◆ 11.7 文字及图片的显示机制</p>
<blockquote>
<blockquote>
<p>显示器中显示的信息一直存储在某内存中。该内存称为VRAM（Video RAM）。在程序中，只要往VRAM中写入数据，该数据就会在显示器中显示出来。实现该功能的程序，是由操作系统或BIOS提供，并借助中断来进行处理的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223618563.png" alt="image-20230304223618563"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>显卡等专用硬件中一般都配置有与主内存相独立的VRAM和GPU（GraphicsProcessing Unit，图形处理器，也称为图形芯片）。这是因为，对经常需要描绘图形的Windows来说，数百兆的VRAM是必需的。而为了提升图形的描绘速度，有时还需要专用的图形处理器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存VRAM中存储的数据就是显示器上显示的信息，这一机制是不变的。</p>
</blockquote>
</blockquote>
<p>◆ 第12章 让计算机“思考”</p>
<blockquote>
<blockquote>
<p>1．用计算机进行的模拟试验称为什么？2．伪随机数指的是什么？3．随机数的种子指的什么？4．计算机有思考功能吗？5．计算机有记忆功能吗？6. AI是什么的缩写？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1．计算机模拟2．通过公式产生的伪随机数3．生成伪随机数的公式中使用的参数4．没有5．有6. Artificial Intelligence</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2．伪随机数同真正的随机数不同，具有周期性。3．随机数的种子不同，产生的随机数也是不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>5．内存及磁盘等有记忆功能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<ol start="6">
<li>Artificial Intelligence是“人工智能”的意思。</li>
</ol>
</blockquote>
</blockquote>
<p>◆ C语言的特点</p>
<blockquote>
<blockquote>
<p>C语言虽是高级编程语言，但它也具备了能够和汇编语言相媲美的低层处理（内存操作及位操作）功能。AT&amp;T贝尔实验室开发的Unix，最初是用汇编语言编写的，但后来大部分都用C语言进行了重写。借助C语言，Unix的移植性得到了大幅提升，进而使得更多类型的计算机开始应用Unix操作系统。此外，作为Unix系列操作系统之一的Linux也是用C语言来编写的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Java和C#都不是全新的编程语言，而是在对C语言语法进行了扩张的C++的基础上发展而来的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只要掌握了C语言，也就能很快掌握Java及C#。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大部分的C语言编译器，都具有将C语言源代码转换成汇编语言源代码的功能，以及可以在C语言源代码中嵌入汇编语言的特点。</p>
</blockquote>
</blockquote>
<p>◆ 变量和函数</p>
<blockquote>
<blockquote>
<p>在C语言中，数据用变量来表示，处理用函数来表示。</p>
</blockquote>
</blockquote>
<p>◆ 数据类型</p>
<blockquote>
<blockquote>
<p>数学变量对位数和精度是没有任何限制的。与此相对，程序变量则受位数和精度的限制。这是因为，计算机的存储容量是有限的。计算机中预先被定义过的位数和精度称为数据类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>char、short、int是整数用的数据类型。float和double是小数用的数据类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223635547.png" alt="image-20230304223635547"></p>
</blockquote>
</blockquote>
<p>◆ 数组和循环</p>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/11.程序是怎样跑起来的/image-20230304223655653.png" alt="image-20230304223655653"></p>
</blockquote>
</blockquote>
</div></template>



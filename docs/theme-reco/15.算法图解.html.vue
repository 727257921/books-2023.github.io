<template><div><h1 id="算法图解" tabindex="-1"><a class="header-anchor" href="#算法图解" aria-hidden="true">#</a> 算法图解</h1>
<p>巴尔加瓦</p>
<h3 id="◆-1-1-引言" tabindex="-1"><a class="header-anchor" href="#◆-1-1-引言" aria-hidden="true">#</a> ◆ 1.1 引言</h3>
<blockquote>
<blockquote>
<p>❑ 第1章讨论二分查找，并演示算法如何能够提高代码的速度。在一个示例中，算法将需要执行的步骤从40亿个减少到了32个！❑ GPS设备使用图算法来计算前往目的地的最短路径，这将在第6、7和8章介绍。❑ 你可使用动态规划来编写下国际跳棋的AI算法，这将在第9章讨论。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你将学习至今都没有掌握的问题解决技巧，例如：❑ 如果你喜欢开发电子游戏，可使用图算法编写跟踪用户的AI系统；❑ 你将学习使用K最近邻算法编写推荐系统；❑ 有些问题在有限的时间内是不可解的！书中讨论NP完全问题的部分将告诉你，如何识别这样的问题以及如何设计找到近似答案的算法。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-二分查找" tabindex="-1"><a class="header-anchor" href="#◆-1-2-二分查找" aria-hidden="true">#</a> ◆ 1.2 二分查找</h3>
<blockquote>
<blockquote>
<p>二分查找是一种算法，其输入是一个有序的元素列表（必须有序的原因稍后解释）。如果要查找的元素包含在列表中，二分查找返回其位置；否则返回null。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本书使用大O表示法（稍后介绍）讨论运行时间时，log指的都是log2。使用简单查找法查找元素时，在最糟情况下需要查看每个元素。因此，如果列表包含8个数字，你最多需要检查8个数字。而使用二分查找时，最多需要检查log n个元素。如果列表包含8个元素，你最多需要检查3个元素，因为log 8=3（23=8）。如果列表包含1024个元素，你最多需要检查10个元素，因为log 1024=10（210=1024）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>仅当列表是有序的时候，二分查找才管用。例如，电话簿中的名字是按字母顺序排列的，因此可以使用二分查找来查找名字。如果名字不是按顺序排列的，结果将如何呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221332601.png" alt="image-20230304221332601"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>回到前面的二分查找。使用它可节省多少时间呢？简单查找逐个地检查数字，如果列表包含100个数字，最多需要猜100次。如果列表包含40亿个数字，最多需要猜40亿次。换言之，最多需要猜测的次数与列表长度相同，这被称为线性时间（linear time）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二分查找则不同。如果列表包含100个元素，最多要猜7次；如果列表包含40亿个数字，最多需猜32次。厉害吧？二分查找的运行时间为对数时间（或log时间）。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-大o表示法" tabindex="-1"><a class="header-anchor" href="#◆-1-3-大o表示法" aria-hidden="true">#</a> ◆ 1.3 大O表示法</h3>
<blockquote>
<blockquote>
<p>随着元素数量的增加，二分查找需要的额外时间并不多，而简单查找需要的额外时间却很多。因此，随着列表的增长，二分查找的速度比简单查找快得多。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有鉴于此，仅知道算法需要多长时间才能运行完毕还不够，还需知道运行时间如何随列表增长而增加。这正是大O表示法的用武之地。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大O表示法指出了算法有多快。例如，假设列表包含n个元素。简单查找需要检查每个元素，因此需要执行n次操作。使用大O表示法，这个运行时间为O(n)。单位秒呢？没有——大O表示法指的并非以秒为单位的速度。大O表示法让你能够比较操作数，它指出了算法运行时间的增速。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为检查长度为n的列表，二分查找需要执行log n次操作。使用大O表示法，这个运行时间怎么表示呢？O(log n)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面按从快到慢的顺序列出了你经常会遇到的5种大O运行时间。❑ O(log n)，也叫对数时间，这样的算法包括二分查找。❑ O(n)，也叫线性时间，这样的算法包括简单查找。❑ O(n ＊ log n)，这样的算法包括第4章将介绍的快速排序——一种速度较快的排序算法。❑ O(n2)，这样的算法包括第2章将介绍的选择排序——一种速度较慢的排序算法。❑ O(n! )，这样的算法包括接下来将介绍的旅行商问题的解决方案——一种非常慢的算法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 算法的速度指的并非时间，而是操作数的增速。❑ 谈论算法的速度时，我们说的是随着输入的增加，其运行时间将以什么样的速度增加。❑ 算法的运行时间用大O表示法表示。❑ O(log n)比O(n)快，当需要搜索的元素越多时，前者比后者快得越多。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-1-4-小结" aria-hidden="true">#</a> ◆ 1.4 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 二分查找的速度比简单查找快得多。❑ O(log n)比O(n)快。需要搜索的元素越多，前者比后者就快得越多。❑ 算法运行时间并不以秒为单位。❑ 算法运行时间是从其增速的角度度量的。❑ 算法运行时间用大O表示法表示。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-1-内存的工作原理" tabindex="-1"><a class="header-anchor" href="#◆-2-1-内存的工作原理" aria-hidden="true">#</a> ◆ 2.1 内存的工作原理</h3>
<blockquote>
<blockquote>
<p>这大致就是计算机内存的工作原理。计算机就像是很多抽屉的集合体，每个抽屉都有地址。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>fe0ffeeb是一个内存单元的地址。需要将数据存储到内存时，你请求计算机提供存储空间，计算机给你一个存储地址。需要存储多项数据时，有两种基本方式——数组和链表。但它们并非都适用于所有的情形，因此知道它们的差别很重要。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-数组和链表" tabindex="-1"><a class="header-anchor" href="#◆-2-2-数组和链表" aria-hidden="true">#</a> ◆ 2.2 数组和链表</h3>
<blockquote>
<blockquote>
<p>使用数组意味着所有待办事项在内存中都是相连的（紧靠在一起的）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>现在假设你要添加第四个待办事项，但后面的那个抽屉放着别人的东西！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这就像你与朋友去看电影，找到地方就坐后又来了一位朋友，但原来坐的地方没有空位置，只得再找一个可坐下所有人的地方。在这种情况下，你需要请求计算机重新分配一块可容纳4个待办事项的内存，再将所有待办事项都移到那里。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果又来了一位朋友，而当前坐的地方也没有空位，你们就得再次转移！真是太麻烦了。同样，在数组中添加新元素也可能很麻烦。如果没有了空间，就得移到内存的其他地方，因此添加新元素的速度会很慢。一种解决之道是“预留座位”：即便当前只有3个待办事项，也请计算机提供10个位置，以防需要添加待办事项。这样，只要待办事项不超过10个，就无需转移。这是一个不错的权变措施，但你应该明白，它存在如下两个缺点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 你额外请求的位置可能根本用不上，这将浪费内存。你没有使用，别人也用不了。❑ 待办事项超过10个后，你还得转移。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此，这种权宜措施虽然不错，但绝非完美的解决方案。对于这种问题，可使用链表来解决。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>链表中的元素可存储在内存的任何地方。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>链表的每个元素都存储了下一个元素的地址，从而使一系列随机的内存地址串在一起。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在链表中添加元素很容易：只需将其放入内存，并将其地址存储到前一个元素中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用链表时，根本就不需要移动元素。这还可避免另一个问题。假设你与五位朋友去看一部很火的电影。你们六人想坐在一起，但看电影的人较多，没有六个在一起的座位。使用数组时有时就会遇到这样的情况。假设你要为数组分配10000个位置，内存中有10000个位置，但不都靠在一起。在这种情况下，你将无法为该数组分配内存！链表相当于说“我们分开来坐”，因此，只要有足够的内存空间，就能为链表分配内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>链表的优势在插入元素方面</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>排行榜网站使用卑鄙的手段来增加页面浏览量。它们不在一个页面中显示整个排行榜，而将排行榜的每项内容都放在一个页面中，并让你单击Next来查看下一项内容。例如，显示十大电视反派时，不在一个页面中显示整个排行榜，而是先显示第十大反派（Newman）。你必须在每个页面中单击Next，才能看到第一大反派（Gustavo Fring）。这让网站能够在10个页面中显示广告，但用户需要单击Next九次才能看到第一个，真的是很烦。如果整个排行榜都显示在一个页面中，将方便得多。这样，用户可单击排行榜中的人名来获得更详细的信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]链表存在类似的问题。在需要读取链表的最后一个元素时，你不能直接读取，因为你不知道它所处的地址，必须先访问元素#1，从中获取元素#2的地址，再访问元素#2并从中获取元素#3的地址，以此类推，直到访问最后一个元素。需要同时读取所有元素时，链表的效率很高：你读取第一个元素，根据其中的地址再读取第二个元素，以此类推。但如果你需要跳跃，链表的效率真的很低。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从0开始让基于数组的代码编写起来更容易，因此程序员始终坚持这样做。几乎所有的编程语言都从0开始对数组元素进行编号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当需要在中间插入元素时，链表是更好的选择。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数组和链表哪个用得更多呢？显然要看情况。但数组用得很多，因为它支持随机访问。有两种访问方式：随机访问和顺序访问。顺序访问意味着从第一个元素开始逐个地读取元素。链表只能顺序访问：要读取链表的第十个元素，得先读取前九个元素，并沿链接找到第十个元素。随机访问意味着可直接跳到第十个元素。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>经常说数组的读取速度更快，这是因为它们支持随机访问。很多情况都要求能够随机访问，因此数组用得很多。数组和链表还被用来实现其他数据结构</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.2 假设你要为饭店创建一个接受顾客点菜单的应用程序。这个应用程序存储一系列点菜单。服务员添加点菜单，而厨师取出点菜单并制作菜肴。这是一个点菜单队列：服务员在队尾添加点菜单，厨师取出队列开头的点菜单并制作菜肴。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你使用数组还是链表来实现这个队列呢？（提示：链表擅长插入和删除，而数组擅长随机访问。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.3 我们来做一个思考实验。假设Facebook记录一系列用户名，每当有用户试图登录Facebook时，都查找其用户名，如果找到就允许用户登录。由于经常有用户登录Facebook，因此需要执行大量的用户名查找操作。假设Facebook使用二分查找算法，而这种算法要求能够随机访问——立即获取中间的用户名。考虑到这一点，应使用数组还是链表来存储用户名呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.4 经常有用户在Facebook注册。假设你已决定使用数组来存储用户名，在插入方面数组有何缺点呢？具体地说，在数组中添加新用户将出现什么情况？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>2.5 实际上，Facebook存储用户信息时使用的既不是数组也不是链表。假设Facebook使用的是一种混合数据：链表数组。这个数组包含26个元素，每个元素都指向一个链表。例如，该数组的第一个元素指向的链表包含所有以A打头的用户名，第二个元素指向的链表包含所有以B打头的用户名，以此类推。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-3-选择排序" tabindex="-1"><a class="header-anchor" href="#◆-2-3-选择排序" aria-hidden="true">#</a> ◆ 2.3 选择排序</h3>
<blockquote>
<blockquote>
<p>随着排序的进行，每次需要检查的元素数在逐渐减少，最后一次需要检查的元素都只有一个。既然如此，运行时间怎么还是O(n2)呢？这个问题问得好，这与大O表示法中的常数相关。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你说得没错，并非每次都需要检查n个元素。第一次需要检查n个元素，但随后检查的元素数依次为n -1, n -2, …, 2和1。平均每次检查的元素数为1/2 ×n，因此运行时间为O(n×1/2×n)。但大O表示法省略诸如1/2这样的常数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此简单地写作O(n×n)或O(n2)。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-2-4-小结" aria-hidden="true">#</a> ◆ 2.4 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 计算机内存犹如一大堆抽屉。❑ 需要存储多个元素时，可使用数组或链表。❑ 数组的元素都在一起。❑ 链表的元素是分开的，其中每个元素都存储了下一个元素的地址。❑ 数组的读取速度很快。❑ 链表的插入和删除速度很快。❑ 在同一个数组中，所有元素的类型都必须相同（都为int、double等）。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-递归" tabindex="-1"><a class="header-anchor" href="#◆-3-1-递归" aria-hidden="true">#</a> ◆ 3.1 递归</h3>
<blockquote>
<blockquote>
<p>递归只是让解决方案更清晰，并没有性能上的优势。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果使用循环，程序的性能可能更高；如果使用递归，程序可能更容易理解。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-2-基线条件和递归条件" tabindex="-1"><a class="header-anchor" href="#◆-3-2-基线条件和递归条件" aria-hidden="true">#</a> ◆ 3.2 基线条件和递归条件</h3>
<blockquote>
<blockquote>
<p>编写递归函数时，必须告诉它何时停止递归。正因为如此，每个递归函数都有两部分：基线条件（base case）和递归条件（recursive case）。递归条件指的是函数调用自己，而基线条件则指的是函数不再调用自己，从而避免形成无限循环。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-栈" tabindex="-1"><a class="header-anchor" href="#◆-3-3-栈" aria-hidden="true">#</a> ◆ 3.3 栈</h3>
<blockquote>
<blockquote>
<p>计算机在内部使用被称为调用栈的栈。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面是一个简单的函数。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221550722.png" alt="image-20230304221550722"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你调用greet(&quot;maggie&quot;)，计算机将首先为该函数调用分配一块内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们来使用这些内存。变量name被设置为maggie，这需要存储到内存中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每当你调用函数时，计算机都像这样将函数调用涉及的所有变量的值存储到内存中。接下来，你打印hello, maggie!，再调用greet2(&quot;maggie&quot;)。同样，计算机也为这个函数调用分配一块内存。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机使用一个栈来表示这些内存块，其中第二个内存块位于第一个内存块上面。你打印how are you, maggie?，然后从函数调用返回。此时，栈顶的内存块被弹出。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本节的一个重要概念：调用另一个函数时，当前函数暂停并处于未完成状态。该函数的所有变量的值都还在内存中。执行完函数greet2后，你回到函数greet，并从离开的地方开始接着往下执行：首先打印getting ready to say bye…，再调用函数bye。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个栈用于存储多个函数的变量，被称为调用栈。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用栈虽然很方便，但是也要付出代价：存储详尽的信息可能占用大量的内存。每个函数调用都要占用一定的内存，如果栈很高，就意味着计算机存储了大量函数调用的信息。在这种情况下，你有两种选择。❑ 重新编写代码，转而使用循环。❑ 使用尾递归。这是一个高级递归主题，不在本书的讨论范围内。另外，并非所有的语言都支持尾递归。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-分而治之" tabindex="-1"><a class="header-anchor" href="#◆-4-1-分而治之" aria-hidden="true">#</a> ◆ 4.1 分而治之</h3>
<blockquote>
<blockquote>
<p>如何将一块地均匀地分成方块，并确保分出的方块是最大的呢？使用D&amp;C策略！D&amp;C算法是递归的。使用D&amp;C解决问题的过程包括两个步骤。(1) 找出基线条件，这种条件必须尽可能简单。(2) 不断将问题分解（或者说缩小规模），直到符合基线条件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面就来使用D&amp;C找出前述问题的解决方案。可你能使用的最大方块有多大呢？首先，找出基线条件。最容易处理的情况是，一条边的长度是另一条边的整数倍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果一边长25m，另一边长50m，那么可使用的最大方块为25m×25m。换言之，可以将这块地分成两个这样的方块。现在需要找出递归条件，这正是D&amp;C的用武之地。根据D&amp;C的定义，每次递归调用都必须缩小问题的规模。如何缩小前述问题的规模呢？我们首先找出这块地可容纳的最大方块。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最初要划分的土地尺寸为1680 m×640 m，而现在要划分的土地更小，为640m×400 m。适用于这小块地的最大方块，也是适用于整块地的最大方块。换言之，你将均匀划分1680 m×640 m土地的问题，简化成了均匀划分640 m×400 m土地的问题！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面再次使用同样的算法。对于640 m × 400 m的土地，可从中划出的最大方块为400 m × 400 m。这将余下一块更小的土地，其尺寸为400 m × 240 m。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你可从这块土地中划出最大的方块，余下一块更小的土地，其尺寸为240 m × 160m。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>接下来，从这块土地中划出最大的方块，余下一块更小的土地。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>余下的这块土地满足基线条件，因为160是80的整数倍。将这块土地分成两个方块后，将不会余下任何土地！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此，对于最初的那片土地，适用的最大方块为80m×80m。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里重申一下D&amp;C的工作原理：(1) 找出简单的基线条件；(2) 确定如何缩小问题的规模，使其符合基线条件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>D&amp;C并非可用于解决问题的算法，而是一种解决问题的思路。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-2-快速排序" tabindex="-1"><a class="header-anchor" href="#◆-4-2-快速排序" aria-hidden="true">#</a> ◆ 4.2 快速排序</h3>
<blockquote>
<blockquote>
<p>快速排序是一种常用的排序算法，比选择排序快得多。例如，C语言标准库中的函数qsort实现的就是快速排序。快速排序也使用了D&amp;C。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对排序算法来说，最简单的数组什么样呢？还记得前一节的“提示”吗？就是根本不需要排序的数组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因此，基线条件为数组为空或只包含一个元素。在这种情况下，只需原样返回数组——根本就不用排序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对包含两个元素的数组进行排序也很容易。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>包含三个元素的数组呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先，从数组中选择一个元素，这个元素被称为基准值（pivot）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>接下来，找出比基准值小的元素以及比基准值大的元素。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个子数组都只有一个元素，而你知道如何对这些数组进行排序。现在你就知道如何对包含三个元素的数组进行排序了，步骤如下。(1) 选择基准值。(2) 将数组分成两个子数组：小于基准值的元素和大于基准值的元素。(3) 对这两个子数组进行快速排序。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-3-再谈大o表示法" tabindex="-1"><a class="header-anchor" href="#◆-4-3-再谈大o表示法" aria-hidden="true">#</a> ◆ 4.3 再谈大O表示法</h3>
<blockquote>
<blockquote>
<p>还有一种名为合并排序（merge sort）的排序算法，其运行时间为O(n log n)，比选择排序快得多！快速排序的情况比较棘手，在最糟情况下，其运行时间为O(n2)。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-4-4-小结" aria-hidden="true">#</a> ◆ 4.4 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ D&amp;C将问题逐步分解。使用D&amp;C处理列表时，基线条件很可能是空数组或只包含一个元素的数组。❑ 实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为O(n log n)。❑ 大O表示法中的常量有时候事关重大，这就是快速排序比合并排序快的原因所在。❑ 比较简单查找和二分查找时，常量几乎无关紧要，因为列表很长时，O(logn)的速度比O(n)快得多。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-2-应用案例" tabindex="-1"><a class="header-anchor" href="#◆-5-2-应用案例" aria-hidden="true">#</a> ◆ 5.2 应用案例</h3>
<blockquote>
<blockquote>
<p>这里总结一下，散列表适合用于：❑ 模拟映射关系；❑ 防止重复；❑ 缓存/记住数据，以免服务器再通过处理来生成它们。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-3-冲突" tabindex="-1"><a class="header-anchor" href="#◆-5-3-冲突" aria-hidden="true">#</a> ◆ 5.3 冲突</h3>
<blockquote>
<blockquote>
<p>如果两个键映射到了同一个位置，就在这个位置存储一个链表。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里的经验教训有两个。❑ 散列函数很重要。前面的散列函数将所有的键都映射到一个位置，而最理想的情况是，散列函数将键均匀地映射到散列表的不同位置。❑ 如果散列表存储的链表很长，散列表的速度将急剧下降。然而，如果使用的散列函数很好，这些链表就不会很长！</p>
</blockquote>
</blockquote>
<h3 id="◆-5-4-性能" tabindex="-1"><a class="header-anchor" href="#◆-5-4-性能" aria-hidden="true">#</a> ◆ 5.4 性能</h3>
<blockquote>
<blockquote>
<p>你以前见过常量时间——从数组中获取一个元素所需的时间就是固定的：不管数组多大，从中获取一个元素所需的时间都是相同的。在平均情况下，散列表的速度确实很快。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在最糟情况下，散列表所有操作的运行时间都为O(n)——线性时间，这真的很慢。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在平均情况下，散列表的查找（获取给定索引处的值）速度与数组一样快，而插入和删除速度与链表一样快，因此它兼具两者的优点！但在最糟情况下，散列表的各种操作的速度都很慢。因此，在使用散列表时，避开最糟情况至关重要。为此，需要避免冲突。而要避免冲突，需要有：❑ 较低的填装因子；❑ 良好的散列函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>散列表的填装因子很容易计算。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221646974.png" alt="image-20230304221646974">散列表使用数组来存储数据，因此你需要计算数组中被占用的位置数。例如，下述散列表的填装因子为2/5，即0.4。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>填装因子度量的是散列表中有多少位置是空的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你要在散列表中存储100种商品的价格，而该散列表包含100个位置。那么在最佳情况下，每个商品都将有自己的位置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个散列表的填装因子为1。如果这个散列表只有50个位置呢？填充因子将为2。不可能让每种商品都有自己的位置，因为没有足够的位置！填装因子大于1意味着商品数量超过了数组的位置数。一旦填装因子开始增大，你就需要在散列表中添加位置，这被称为调整长度（resizing）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为此，你首先创建一个更长的新数组：通常将数组增长一倍。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>填装因子越低，发生冲突的可能性越小，散列表的性能越高。一个不错的经验规则是：一旦填装因子大于0.7，就调整散列表的长度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>调整长度的开销很大，因此你不会希望频繁地这样做。但平均而言，即便考虑到调整长度所需的时间，散列表操作所需的时间也为O(1)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>良好的散列函数让数组中的值呈均匀分布。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>糟糕的散列函数让值扎堆，导致大量的冲突。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>什么样的散列函数是良好的呢</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可研究一下SHA函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>散列函数的结果必须是均匀分布的，这很重要。它们的映射范围必须尽可能大。最糟糕的散列函数莫过于将所有输入都映射到散列表的同一个位置。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-5-小结" tabindex="-1"><a class="header-anchor" href="#◆-5-5-小结" aria-hidden="true">#</a> ◆ 5.5 小结</h3>
<blockquote>
<blockquote>
<p>散列表是一种功能强大的数据结构，其操作速度快，还能让你以不同的方式建立数据模型。你可能很快会发现自己经常在使用它。❑ 你可以结合散列函数和数组来创建散列表。❑ 冲突很糟糕，你应使用可以最大限度减少冲突的散列函数。❑ 散列表的查找、插入和删除速度都非常快。❑ 散列表适合用于模拟映射关系。❑ 一旦填装因子超过0.7，就该调整散列表的长度。❑ 散列表可用于缓存数据（例如，在Web服务器上）。❑ 散列表非常适合用于防止重复。</p>
</blockquote>
</blockquote>
<h2 id="◆-第6章-广度优先搜索" tabindex="-1"><a class="header-anchor" href="#◆-第6章-广度优先搜索" aria-hidden="true">#</a> ◆ 第6章 广度优先搜索</h2>
<blockquote>
<blockquote>
<p>❑ 学习广度优先搜索，你可对图使用这种算法回答诸如“到X的最短路径是什么”等问题。❑ 学习有向图和无向图。❑ 学习拓扑排序，这种排序算法指出了节点之间的依赖关系。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>广度优先搜索让你能够找出两样东西之间的最短距离，不过最短距离的含义有很多！使用广度优先搜索可以：❑ 编写国际跳棋AI，计算最少走多少步就可获胜；❑ 编写拼写检查器，计算最少编辑多少个地方就可将错拼的单词改成正确的单词，如将READED改为READER需要编辑一个地方；❑ 根据你的人际关系网络找到关系最近的医生。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-1-图简介" tabindex="-1"><a class="header-anchor" href="#◆-6-1-图简介" aria-hidden="true">#</a> ◆ 6.1 图简介</h3>
<blockquote>
<blockquote>
<p>假设你居住在旧金山，要从双子峰前往金门大桥。你想乘公交车前往，并希望换乘最少。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个算法发现，前往金门大桥的最短路径需要三步。这种问题被称为最短路径问题（shorterst-pathproblem）。你经常要找出最短路径，这可能是前往朋友家的最短路径，也可能是国际象棋中把对方将死的最少步数。解决最短路径问题的算法被称为广度优先搜索。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要确定如何从双子峰前往金门大桥，需要两个步骤。(1) 使用图来建立问题模型。(2) 使用广度优先搜索解决问题。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-2-图是什么" tabindex="-1"><a class="header-anchor" href="#◆-6-2-图是什么" aria-hidden="true">#</a> ◆ 6.2 图是什么</h3>
<blockquote>
<blockquote>
<p>图由节点（node）和边（edge）组成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个节点可能与众多节点直接相连，这些节点被称为邻居。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图用于模拟不同的东西是如何相连的。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-3-广度优先搜索" tabindex="-1"><a class="header-anchor" href="#◆-6-3-广度优先搜索" aria-hidden="true">#</a> ◆ 6.3 广度优先搜索</h3>
<blockquote>
<blockquote>
<p>广度优先搜索是一种用于图的查找算法，可帮助回答两类问题。❑ 第一类问题：从节点A出发，有前往节点B的路径吗？❑ 第二类问题：从节点A出发，前往节点B的哪条路径最短？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你应先在一度关系中搜索，确定其中没有芒果销售商后，才在二度关系中搜索。广度优先搜索就是这样做的！在广度优先搜索的执行过程中，搜索范围从起点开始逐渐向外延伸，即先检查一度关系，再检查二度关系。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只有按添加顺序查找时，才能实现这样的目的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>商</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>队列类似于栈，你不能随机地访问队列中的元素。队列只支持两种操作：入队和出队。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-4-实现图" tabindex="-1"><a class="header-anchor" href="#◆-6-4-实现图" aria-hidden="true">#</a> ◆ 6.4 实现图</h3>
<blockquote>
<blockquote>
<p>散列表是无序的，因此添加键—值对的顺序无关紧要。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Anuj、Peggy、Thom和Jonny都没有邻居，这是因为虽然有指向他们的箭头，但没有从他们出发指向其他人的箭头。这被称为有向图（directed graph），其中的关系是单向的。因此，Anuj是Bob的邻居，但Bob不是Anuj的邻居。无向图（undirected graph）没有箭头，直接相连的节点互为邻居。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-5-实现算法" tabindex="-1"><a class="header-anchor" href="#◆-6-5-实现算法" aria-hidden="true">#</a> ◆ 6.5 实现算法</h3>
<blockquote>
<blockquote>
<p>实现算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>先概述一下这种算法的工作原理。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221715221.png" alt="image-20230304221715221"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>运行时间如果你在你的整个人际关系网中搜索芒果销售商，就意味着你将沿每条边前行（记住，边是从一个人到另一个人的箭头或连接），因此运行时间至少为O（边数）。你还使用了一个队列，其中包含要检查的每个人。将一个人添加到队列需要的时间是固定的，即为O(1)，因此对每个人都这样做需要的总时间为O(人数)。所以，广度优先搜索的运行时间为O(人数+边数)，这通常写作O(V+E)，其中V为顶点（vertice）数，E为边数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从某种程度上说，这种列表是有序的。如果任务A依赖于任务B，在列表中任务A就必须在任务B后面。这被称为拓扑排序，使用它可根据图创建一个有序列表。假设你正在规划一场婚礼，并有一个很大的图，其中充斥着需要做的事情，但却不知道要从哪里开始。这时就可使用拓扑排序来创建一个有序的任务列表。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>树是一种特殊的图，其中没有往后指的边。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-6-小结" tabindex="-1"><a class="header-anchor" href="#◆-6-6-小结" aria-hidden="true">#</a> ◆ 6.6 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 广度优先搜索指出是否有从A到B的路径。❑ 如果有，广度优先搜索将找出最短路径。❑ 面临类似于寻找最短路径的问题时，可尝试使用图来建立模型，再使用广度优先搜索来解决问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 有向图中的边为箭头，箭头的方向指定了关系的方向，例如，rama→adit表示rama欠adit钱。❑ 无向图中的边不带箭头，其中的关系是双向的，例如，ross - rachel表示“ross与rachel约会，而rachel也与ross约会”。❑ 队列是先进先出（FIFO）的。❑ 栈是后进先出（LIFO）的。❑ 你需要按加入顺序检查搜索列表中的人，否则找到的就不是最短路径，因此搜索列表必须是队列。❑ 对于检查过的人，务必不要再去检查，否则可能导致无限循环。</p>
</blockquote>
</blockquote>
<h2 id="◆-第7章-狄克斯特拉算法" tabindex="-1"><a class="header-anchor" href="#◆-第7章-狄克斯特拉算法" aria-hidden="true">#</a> ◆ 第7章 狄克斯特拉算法</h2>
<blockquote>
<blockquote>
<p>❑ 继续图的讨论，介绍加权图——提高或降低某些边的权重。❑ 介绍狄克斯特拉算法，让你能够找出加权图中前往X的最短路径。❑ 介绍图中的环，它导致狄克斯特拉算法不管用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你找出了从A点到B点的路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这是最短路径，因为段数最少——只有三段，但不一定是最快路径。如果给这些路段加上时间，你将发现有更快的路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>前一章使用了广度优先搜索，它找出的是段数最少的路径（如第一个图所示）。如果你要找出最快的路径（如第二个图所示），该如何办呢？为此，可使用另一种算法——狄克斯特拉算法（Dijkstra's algorithm）。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-1-使用狄克斯特拉算法" tabindex="-1"><a class="header-anchor" href="#◆-7-1-使用狄克斯特拉算法" aria-hidden="true">#</a> ◆ 7.1 使用狄克斯特拉算法</h3>
<blockquote>
<blockquote>
<p>其中每个数字表示的都是时间，单位分钟。为找出从起点到终点耗时最短的路径，你将使用狄克斯特拉算法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>狄克斯特拉算法包含4个步骤。(1) 找出“最便宜”的节点，即可在最短时间内到达的节点。(2) 更新该节点的邻居的开销，其含义将稍后介绍。(3) 重复这个过程，直到对图中的每个节点都这样做了。(4) 计算最终路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>狄克斯特拉算法包含4个步骤。(1) 找出最便宜的节点，即可在最短时间内前往的节点。(2) 对于该节点的邻居，检查是否有前往它们的更短路径，如果有，就更新其开销。(3) 重复这个过程，直到对图中的每个节点都这样做了。(4) 计算最终路径。（下一节再介绍！）</p>
</blockquote>
</blockquote>
<h3 id="◆-7-2-术语" tabindex="-1"><a class="header-anchor" href="#◆-7-2-术语" aria-hidden="true">#</a> ◆ 7.2 术语</h3>
<blockquote>
<blockquote>
<p>狄克斯特拉算法用于每条边都有关联数字的图，这些数字称为权重（weight）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>带权重的图称为加权图（weighted graph），不带权重的图称为非加权图（unweighted graph）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要计算非加权图中的最短路径，可使用广度优先搜索。要计算加权图中的最短路径，可使用狄克斯特拉算法。图还可能有环，而环类似右面这样。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这意味着你可从一个节点出发，走一圈后又回到这个节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无向图意味着两个节点彼此指向对方，其实就是环！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在无向图中，每条边都是一个环。狄克斯特拉算法只适用于有向无环图（directedacyclic graph, DAG）。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-3-换钢琴" tabindex="-1"><a class="header-anchor" href="#◆-7-3-换钢琴" aria-hidden="true">#</a> ◆ 7.3 换钢琴</h3>
<blockquote>
<blockquote>
<p>狄克斯特拉算法背后的关键理念：找出图中最便宜的节点，并确保没有到该节点的更便宜的路径！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>第二步：计算前往该节点的各个邻居的开销。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-4-负权边" tabindex="-1"><a class="header-anchor" href="#◆-7-4-负权边" aria-hidden="true">#</a> ◆ 7.4 负权边</h3>
<blockquote>
<blockquote>
<p>如果有负权边，就不能使用狄克斯特拉算法。因为负权边会导致这种算法不管用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在包含负权边的图中，要找出最短路径，可使用另一种算法——贝尔曼-福德算法（Bellman-Ford algorithm）</p>
</blockquote>
</blockquote>
<h3 id="◆-7-6-小结" tabindex="-1"><a class="header-anchor" href="#◆-7-6-小结" aria-hidden="true">#</a> ◆ 7.6 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 广度优先搜索用于在非加权图中查找最短路径。❑ 狄克斯特拉算法用于在加权图中查找最短路径。❑ 仅当权重为正时狄克斯特拉算法才管用。❑ 如果图中包含负权边，请使用贝尔曼-福德算法。</p>
</blockquote>
</blockquote>
<h2 id="◆-第8章-贪婪算法" tabindex="-1"><a class="header-anchor" href="#◆-第8章-贪婪算法" aria-hidden="true">#</a> ◆ 第8章 贪婪算法</h2>
<blockquote>
<blockquote>
<p>第8章 贪婪算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 学习如何处理不可能完成的任务：没有快速算法的问题（NP完全问题）。❑ 学习识别NP完全问题，以免浪费时间去寻找解决它们的快速算法。❑ 学习近似算法，使用它们可快速找到NP完全问题的近似解。❑ 学习贪婪策略——一种非常简单的问题解决策略。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-1-教室调度问题" tabindex="-1"><a class="header-anchor" href="#◆-8-1-教室调度问题" aria-hidden="true">#</a> ◆ 8.1 教室调度问题</h3>
<blockquote>
<blockquote>
<p>8.1 教室调度问题</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设有如下课程表，你希望将尽可能多的课程安排在某间教室上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你没法让这些课都在这间教室上，因为有些课的上课时间有冲突。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你希望在这间教室上尽可能多的课。如何选出尽可能多且时间不冲突的课程呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>具体做法如下。(1) 选出结束最早的课，它就是要在这间教室上的第一堂课。(2) 接下来，必须选择第一堂课结束后才开始的课。同样，你选择结束最早的课，这将是要在这间教室上的第二堂课。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>贪婪算法很简单：每步都采取最优的做法。在这个示例中，你每次都选择结束最早的课。用专业术语说，就是你每步都选择局部最优解，最终得到的就是全局最优解。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>贪婪算法并非在任何情况下都行之有效，但它易于实现</p>
</blockquote>
</blockquote>
<h3 id="◆-8-2-背包问题" tabindex="-1"><a class="header-anchor" href="#◆-8-2-背包问题" aria-hidden="true">#</a> ◆ 8.2 背包问题</h3>
<blockquote>
<blockquote>
<p>在有些情况下，完美是优秀的敌人。有时候，你只需找到一个能够大致解决问题的算法，此时贪婪算法正好可派上用场，因为它们实现起来很容易，得到的结果又与正确结果相当接近。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>8.1 你在一家家具公司工作，需要将家具发往全国各地，为此你需要将箱子装上卡车。每个箱子的尺寸各不相同，你需要尽可能利用每辆卡车的空间，为此你将如何选择要装上卡车的箱子呢？请设计一种贪婪算法。使用这种算法能得到最优解吗？8.2 你要去欧洲旅行，总行程为7天。对于每个旅游胜地，你都给它分配一个价值——表示你有多想去那里看看，并估算出需要多长时间。你如何将这次旅行的价值最大化？请设计一种贪婪算法。使用这种算法能得到最优解吗？</p>
</blockquote>
</blockquote>
<h3 id="◆-8-3-集合覆盖问题" tabindex="-1"><a class="header-anchor" href="#◆-8-3-集合覆盖问题" aria-hidden="true">#</a> ◆ 8.3 集合覆盖问题</h3>
<blockquote>
<blockquote>
<p>使用下面的贪婪算法可得到非常接近的解。(1) 选出这样一个广播台，即它覆盖了最多的未覆盖州。即便这个广播台覆盖了一些已覆盖的州，也没有关系。(2) 重复第一步，直到覆盖了所有的州。这是一种近似算法（approximation algorithm）。在获得精确解需要的时间太长时，可使用近似算法。判断近似算法优劣的标准如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 速度有多快；❑ 得到的近似解与最优解的接近程度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>贪婪算法是不错的选择，它们不仅简单，而且通常运行速度很快。在这个例子中，贪婪算法的运行时间为O(n2)，其中n为广播台数量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 集合类似于列表，只是不能包含重复的元素；❑ 你可执行一些有趣的集合运算，如并集、交集和差集。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-4-np完全问题" tabindex="-1"><a class="header-anchor" href="#◆-8-4-np完全问题" aria-hidden="true">#</a> ◆ 8.4 NP完全问题</h3>
<blockquote>
<blockquote>
<p>第1章介绍的旅行商问题。在这个问题中，旅行商需要前往5个不同的城市。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>他需要找出前往这5个城市的最短路径，为此，必须计算每条可能的路径。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>涉及6个城市时，可能的路线有多少条呢？如果你说720条，那就对了。7个城市为5040条，8个城市为40320条。这被称为阶乘函数（factorial function），第3章介绍过。5!=120。假设有10个城市，可能的路线有多少条呢？10!=3628800。换句话说，涉及10个城市时，需要计算的可能路线超过300万条。正如你看到的，可能的路线数增加得非常快！因此，如果涉及的城市很多，根本就无法找出旅行商问题的正确解。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>旅行商问题和集合覆盖问题有一些共同之处：你需要计算所有的解，并从中选出最小/最短的那个。这两个问题都属于NP完全问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对旅行商问题来说，什么样的近似算法不错呢？能找到较短路径的算法就算不错。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我会采取这样的做法：随便选择出发城市，然后每次选择要去的下一个城市时，都选择还没去的最近的城市。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>NP完全问题无处不在！如果能够判断出要解决的问题属于NP完全问题就好了，这样就不用去寻找完美的解决方案，而是使用近似算法即可。但要判断问题是不是NP完全问题很难，易于解决的问题和NP完全问题的差别通常很小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>简言之，没办法判断问题是不是NP完全问题，但还是有一些蛛丝马迹可循的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 元素较少时算法的运行速度非常快，但随着元素数量的增加，速度会变得非常慢。❑ 涉及“所有组合”的问题通常是NP完全问题。❑ 不能将问题分成小问题，必须考虑各种可能的情况。这可能是NP完全问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 如果问题涉及序列（如旅行商问题中的城市序列）且难以解决，它可能就是NP完全问题。❑ 如果问题涉及集合（如广播台集合）且难以解决，它可能就是NP完全问题。❑ 如果问题可转换为集合覆盖问题或旅行商问题，那它肯定是NP完全问题。</p>
</blockquote>
</blockquote>
<h3 id="◆-8-5-小结" tabindex="-1"><a class="header-anchor" href="#◆-8-5-小结" aria-hidden="true">#</a> ◆ 8.5 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 贪婪算法寻找局部最优解，企图以这种方式获得全局最优解。❑ 对于NP完全问题，还没有找到快速解决方案。❑ 面临NP完全问题时，最佳的做法是使用近似算法。❑ 贪婪算法易于实现、运行速度快，是不错的近似算法。</p>
</blockquote>
</blockquote>
<h2 id="◆-第9章-动态规划" tabindex="-1"><a class="header-anchor" href="#◆-第9章-动态规划" aria-hidden="true">#</a> ◆ 第9章 动态规划</h2>
<blockquote>
<blockquote>
<p>❑ 学习动态规划，这是一种解决棘手问题的方法，它将问题分成小问题，并先着手解决这些小问题。❑ 学习如何设计问题的动态规划解决方案。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-1-背包问题" tabindex="-1"><a class="header-anchor" href="#◆-9-1-背包问题" aria-hidden="true">#</a> ◆ 9.1 背包问题</h3>
<blockquote>
<blockquote>
<p>我们再来看看第8章的背包问题。假设你是个小偷，背着一个可装4磅东西的背包。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你可盗窃的商品有如下3件。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221736145.png" alt="image-20230304221736145">为了让盗窃的商品价值最高，你该选择哪些商品？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最简单的算法如下：尝试各种可能的商品组合，并找出价值最高的组合。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样可行，但速度非常慢。在有3件商品的情况下，你需要计算8个不同的集合；有4件商品时，你需要计算16个集合。每增加一件商品，需要计算的集合数都将翻倍！这种算法的运行时间为O(2n)，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只要商品数量多到一定程度，这种算法就行不通。在第8章，你学习了如何找到近似解，这接近最优解，但可能不是最优解。那么如何找到最优解呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>答案是使用动态规划！下面来看看动态规划算法的工作原理。动态规划先解决子问题，再逐步解决大问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于背包问题，你先解决小背包（子背包）问题，再逐步解决原来的问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每个动态规划算法都从一个网格开始，背包问题的网格如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>网格的各行为商品，各列为不同容量（1～4磅）的背包。所有这些列你都需要，因为它们将帮助你计算子背包的价值。网格最初是空的。你将填充其中的每个单元格，网格填满后，就找到了问题的答案！你一定要跟着做。请你创建网格，我们一起来填满它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这是吉他行，意味着你将尝试将吉他装入背包。在每个单元格，都需要做一个简单的决定：偷不偷吉他？别忘了，你要找出一个价值最高的商品集合。第一个单元格表示背包的容量为1磅。吉他的重量也是1磅，这意味着它能装入背包！因此这个单元格包含吉他，价值为1500美元。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>来看下一个单元格。这个单元格表示背包的容量为2磅，完全能够装下吉他！</p>
</blockquote>
</blockquote>
<h3 id="◆-9-2-背包问题faq" tabindex="-1"><a class="header-anchor" href="#◆-9-2-背包问题faq" aria-hidden="true">#</a> ◆ 9.2 背包问题FAQ</h3>
<blockquote>
<blockquote>
<p>动态规划功能强大，它能够解决子问题并使用这些答案来解决大问题。但仅当每个子问题都是离散的，即不依赖于其他子问题时，动态规划才管用。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-3-最长公共子串" tabindex="-1"><a class="header-anchor" href="#◆-9-3-最长公共子串" aria-hidden="true">#</a> ◆ 9.3 最长公共子串</h3>
<blockquote>
<blockquote>
<p>❑ 动态规划可帮助你在给定约束条件下找到最优解。在背包问题中，你必须在背包容量给定的情况下，偷到价值最高的商品。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在问题可分解为彼此独立且离散的子问题时，就可使用动态规划来解决。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 每种动态规划解决方案都涉及网格。❑ 单元格中的值通常就是你要优化的值。在前面的背包问题中，单元格的值为商品的价值。❑ 每个单元格都是一个子问题，因此你应考虑如何将问题分成子问题，这有助于你找出网格的坐标轴。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>下面再来看一个例子。假设你管理着网站dictionary.com。用户在该网站输入单词时，你需要给出其定义。但如果用户拼错了，你必须猜测他原本要输入的是什么单词。例如，Alex想查单词fish，但不小心输入了hish。在你的字典中，根本就没有这样的单词，但有几个类似的单词。在这个例子中，只有两个类似的单词，真是太小儿科了。实际上，类似的单词很可能有数千个。Alex输入了hish，那他原本要输入的是fish还是vista呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 单元格中的值是什么？❑ 如何将这个问题划分为子问题？❑ 网格的坐标轴是什么？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在动态规划中，你要将某个指标最大化。在这个例子中，你要找出两个单词的最长公共子串。hish和fish都包含的最长子串是什么呢？hish和vista呢？这就是你要计算的值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>单元格中的值通常就是你要优化的值。在这个例子中，这很可能是一个数字：两个字符串都包含的最长子串的长度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>计算机科学家有时会开玩笑说，那就使用费曼算法（Feynman algorithm）。这个算法是以著名物理学家理查德·费曼命名的，其步骤如下。(1) 将问题写下来。(2) 好好思考。(3) 将答案写下来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实际上，根本没有找出计算公式的简单办法，你必须通过尝试才能找出管用的公式。有些算法并非精确的解决步骤，而只是帮助你理清思路的框架。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实现这个公式的伪代码类似于下面这样。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但对于最长公共子串问题，答案为网格中最大的数字——它可能并不位于最后的单元格中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里比较的是最长公共子串，但其实应比较最长公共子序列：两个单词中都有的序列包含的字母数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>动态规划都有哪些实际应用呢？❑ 生物学家根据最长公共序列来确定DNA链的相似性，进而判断两种动物或疾病有多相似。最长公共序列还被用来寻找多发性硬化症治疗方案。❑ 你使用过诸如git diff等命令吗？它们指出两个文件的差异，也是使用动态规划实现的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 前面讨论了字符串的相似程度。编辑距离（levenshtein distance）指出了两个字符串的相似程度，也是使用动态规划计算得到的。编辑距离算法的用途很多，从拼写检查到判断用户上传的资料是否是盗版，都在其中。❑ 你使用过诸如Microsoft Word等具有断字功能的应用程序吗？它们如何确定在什么地方断字以确保行长一致呢？使用动态规划！</p>
</blockquote>
</blockquote>
<h3 id="◆-9-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-9-4-小结" aria-hidden="true">#</a> ◆ 9.4 小结</h3>
<blockquote>
<blockquote>
<p>小结❑ 需要在给定约束条件下优化某种指标时，动态规划很有用。❑ 问题可分解为离散子问题时，可使用动态规划来解决。❑ 每种动态规划解决方案都涉及网格。❑ 单元格中的值通常就是你要优化的值。❑ 每个单元格都是一个子问题，因此你需要考虑如何将问题分解为子问题。❑ 没有放之四海皆准的计算动态规划解决方案的公式。</p>
</blockquote>
</blockquote>
<h2 id="◆-第10章-k最近邻算法" tabindex="-1"><a class="header-anchor" href="#◆-第10章-k最近邻算法" aria-hidden="true">#</a> ◆ 第10章 K最近邻算法</h2>
<blockquote>
<blockquote>
<p>❑ 学习使用K最近邻算法创建分类系统。❑ 学习特征抽取。❑ 学习回归，即预测数值，如明天的股价或用户对某部电影的喜欢程度。❑ 学习K最近邻算法的应用案例和局限性。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-1-橙子还是柚子" tabindex="-1"><a class="header-anchor" href="#◆-10-1-橙子还是柚子" aria-hidden="true">#</a> ◆ 10.1 橙子还是柚子</h3>
<blockquote>
<blockquote>
<p>KNN算法虽然简单却很有用！要对东西进行分类时，可首先尝试这种算法。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-2-创建推荐系统" tabindex="-1"><a class="header-anchor" href="#◆-10-2-创建推荐系统" aria-hidden="true">#</a> ◆ 10.2 创建推荐系统</h3>
<blockquote>
<blockquote>
<p>10.2 创建推荐系统假设你是Netfix，要为用户创建一个电影推荐系统。从本质上说，这类似于前面的水果问题！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你可以将所有用户都放入一个图表中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这些用户在图表中的位置取决于其喜好，因此喜好相似的用户距离较近。假设你要向Priyanka推荐电影，可以找出五位与他最接近的用户。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设在对电影的喜好方面，Justin、JC、Joey、Lance和Chris都与Priyanka差不多，因此他们喜欢的电影很可能Priyanka也喜欢！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有了这样的图表以后，创建推荐系统就将易如反掌：只要是Justin喜欢的电影，就将其推荐给Priyanka。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>但还有一个重要的问题没有解决。在前面的图表中，相似的用户相距较近，但如何确定两位用户的相似程度呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>特征抽取在前面的水果示例中，你根据个头和颜色来比较水果，换言之，你比较的特征是个头和颜色。现在假设有三个水果，你可抽取它们的特征。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>再根据这些特征绘图。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上图可知，水果A和B比较像。下面来度量它们有多像。要计算两点的距离，可使用毕达哥拉斯公式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221803888.png" alt="image-20230304221803888">例如，A和B的距离如下。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221813386.png" alt="image-20230304221813386"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你要比较的是Netfix用户，就需要以某种方式将他们放到图表中。因此，你需要将每位用户都转换为一组坐标</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在能够将用户放入图表后，你就可以计算他们之间的距离了。下面是一种将用户转换为一组数字的方式。用户注册时，要求他们指出对各种电影的喜欢程度。这样，对于每位用户，都将获得一组数字！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你是Netfix用户，Netfix将不断提醒你：多给电影评分吧，你评论的电影越多，给你的推荐就越准确。现在你明白了其中的原因：你评论的电影越多，Netfix就越能准确地判断出你与哪些用户类似。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>练习10.1 在Netfix示例中，你使用距离公式计算两位用户的距离，但给电影打分时，每位用户的标准并不都相同。假设你有两位用户——Yogi和Pinky，他们欣赏电影的品味相同，但Yogi给喜欢的电影都打5分，而Pinky更挑剔，只给特别好的电影打5分。他们的品味一致，但根据距离算法，他们并非邻居。如何将这种评分方式的差异考虑进来呢？10.2 假设Netfix指定了一组意见领袖。例如，Quentin Tarantino和WesAnderson就是Netfix的意见领袖，因此他们的评分比普通用户更重要。请问你该如何修改推荐系统，使其偏重于意见领袖的评分呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10.2.2 回归假设你不仅要向Priyanka推荐电影，还要预测她将给这部电影打多少分。为此，先找出与她最近的5个人。顺便说一句，我老说最近的5个人，其实并非一定要选择5个最近的邻居，也可选择2个、10个或10000个。这就是这种算法名为K最近邻而不是5最近邻的原因！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你求这些人打的分的平均值，结果为4.2。这就是回归（regression）。你将使用KNN来做两项基本工作——分类和回归：❑ 分类就是编组；❑ 回归就是预测结果（如一个数字）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>回归很有用。假设你在伯克利开个小小的面包店，每天都做新鲜面包，需要根据如下一组特征预测当天该烤多少条面包：❑ 天气指数1～5（1表示天气很糟，5表示天气非常好）；❑ 是不是周末或节假日（周末或节假日为1，否则为0）；❑ 有没有活动（1表示有，0表示没有）。你还有一些历史数据，记录了在各种不同的日子里售出的面包数量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>今天是周末，天气不错。根据这些数据，预测你今天能售出多少条面包呢？我们来使用KNN算法，其中的K为4。首先，找出与今天最接近的4个邻居。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>距离如下，因此最近的邻居为A、B、D和E。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将这些天售出的面包数平均，结果为218.75。这就是你今天要烤的面包数！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>前面计算两位用户的距离时，使用的都是距离公式。还有更合适的公式吗？在实际工作中，经常使用余弦相似度（cosine similarity）。假设有两位品味类似的用户，但其中一位打分时更保守。他们都很喜欢Manmohan Desai的电影AmarAkbar Anthony，但Paul给了5星，而Rowan只给4星。如果你使用距离公式，这两位用户可能不是邻居，虽然他们的品味非常接近。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>余弦相似度不计算两个矢量的距离，而比较它们的角度，因此更适合处理前面所说的情况。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用KNN时，挑选合适的特征进行比较至关重要。所谓合适的特征，就是：❑ 与要推荐的电影紧密相关的特征；❑ 不偏不倚的特征（例如，如果只让用户给喜剧片打分，就无法判断他们是否喜欢动作片）。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-3-机器学习简介" tabindex="-1"><a class="header-anchor" href="#◆-10-3-机器学习简介" aria-hidden="true">#</a> ◆ 10.3 机器学习简介</h3>
<blockquote>
<blockquote>
<p>10.3 机器学习简介</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>KNN算法真的是很有用，堪称你进入神奇的机器学习领域的领路人！机器学习旨在让计算机更聪明。你见过一个机器学习的例子：创建推荐系统。下面再来看看其他一些例子。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>OCR指的是光学字符识别（optical character recognition），这意味着你可拍摄印刷页面的照片，计算机将自动识别出其中的文字。Google使用OCR来实现图书数字化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如何自动识别出这个数字是什么呢？可使用KNN。(1) 浏览大量的数字图像，将这些数字的特征提取出来。(2) 遇到新图像时，你提取该图像的特征，再找出它最近的邻居都是谁！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一般而言，OCR算法提取线段、点和曲线等特征。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>遇到新字符时，可从中提取同样的特征。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>OCR中的特征提取要复杂得多，但再复杂的技术也是基于KNN等简单理念的。这些理念也可用于语音识别和人脸识别。你将照片上传到Facebook时，它有时候能够自动标出照片中的人物，这是机器学习在发挥作用！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>OCR的第一步是查看大量的数字图像并提取特征，这被称为训练（training）。大多数机器学习算法都包含训练的步骤：要让计算机完成任务，必须先训练它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>垃圾邮件过滤器使用一种简单算法——朴素贝叶斯分类器（Naive Bayesclassifier），你首先需要使用一些数据对这个分类器进行训练。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你收到一封主题为“collect your million dollars now! ”的邮件，这是垃圾邮件吗？你可研究这个句子中的每个单词，看看它在垃圾邮件中出现的概率是多少。例如，使用这个非常简单的模型时，发现只有单词million在垃圾邮件中出现过。朴素贝叶斯分类器能计算出邮件为垃圾邮件的概率，其应用领域与KNN相似。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，你可使用朴素贝叶斯分类器来对水果进行分类：假设有一个又大又红的水果，它是柚子的概率是多少呢？朴素贝叶斯分类器也是一种简单而极其有效的算法。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>10.3.3 预测股票市场使用机器学习来预测股票市场的涨跌真的很难。对于股票市场，如何挑选合适的特征呢？股票昨天涨了，今天也会涨，这样的特征合适吗？又或者每年五月份股票市场都以绿盘报收，这样的预测可行吗？在根据以往的数据来预测未来方面，没有万无一失的方法。未来很难预测，由于涉及的变数太多，这几乎是不可能完成的任务。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-10-4-小结" aria-hidden="true">#</a> ◆ 10.4 小结</h3>
<blockquote>
<blockquote>
<p>小结</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ KNN用于分类和回归，需要考虑最近的邻居。❑ 分类就是编组。❑ 回归就是预测结果（如数字）。❑ 特征抽取意味着将物品（如水果或用户）转换为一系列可比较的数字。❑ 能否挑选合适的特征事关KNN算法的成败。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-1-树" tabindex="-1"><a class="header-anchor" href="#◆-11-1-树" aria-hidden="true">#</a> ◆ 11.1 树</h3>
<blockquote>
<blockquote>
<p>在前面的二分查找示例中，每当用户登录Facebook时，Facebook都必须在一个庞大的数组中查找，核实其中是否包含指定的用户名。前面说过，在这种数组中查找时，最快的方式是二分查找，但问题是每当有新用户注册时，都必须将其用户名插入该数组并重新排序，因为二分查找仅在数组有序时才管用。如果能将用户名插入到数组的正确位置就好了，这样就无需在插入后再排序。为此，有人设计了一种名为二叉查找树（binary search tree）的数据结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于其中的每个节点，左子节点的值都比它小，而右子节点的值都比它大。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在二叉查找树中查找节点时，平均运行时间为O(log n)，但在最糟的情况下所需时间为O(n)；而在有序数组中查找时，即便是在最糟情况下所需的时间也只有O(log n)，因此你可能认为有序数组比二叉查找树更佳。然而，二叉查找树的插入和删除操作的速度要快得多。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>二叉查找树也存在一些缺点，例如，不能随机访问，就像不能这么说：“给我第五个元素。”在二叉查找树处于平衡状态时，平均访问时间也为O(log n)。假设二叉查找树像下面这样处于不平衡状态。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意，这棵树是向右倾斜的，因此性能不佳。也有一些处于平衡状态的特殊二叉查找树，如红黑树。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>那在什么情况下使用二叉查找树呢？B树是一种特殊的二叉树，数据库常用它来存储数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你对数据库或高级数据结构感兴趣，请研究如下数据结构：B树，红黑树，堆，伸展树。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-2-反向索引" tabindex="-1"><a class="header-anchor" href="#◆-11-2-反向索引" aria-hidden="true">#</a> ◆ 11.2 反向索引</h3>
<blockquote>
<blockquote>
<p>11.2 反向索引</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这里非常简单地说说搜索引擎的工作原理。假设你有三个网页，内容如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个散列表的键为单词，值为包含指定单词的页面。现在假设有用户搜索hi，在这种情况下，搜索引擎需要检查哪些页面包含hi。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这是一种很有用的数据结构：一个散列表，将单词映射到包含它的页面。这种数据结构被称为反向索引（inverted index），常用于创建搜索引擎。如果你对搜索感兴趣，从反向索引着手研究是不错的选择。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-3-傅里叶变换" tabindex="-1"><a class="header-anchor" href="#◆-11-3-傅里叶变换" aria-hidden="true">#</a> ◆ 11.3 傅里叶变换</h3>
<blockquote>
<blockquote>
<p>11.3 傅里叶变换</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Better Explained是一个杰出的网站，致力于以通俗易懂的语言阐释数学，它就傅里叶变换做了一个绝佳的比喻：给它一杯冰沙，它能告诉你其中包含哪些成分。换言之，给定一首歌曲，傅里叶变换能够将其中的各种频率分离出来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，如果能够将歌曲分解为不同的频率，就可强化你关心的部分，如强化低音并隐藏高音。傅里叶变换非常适合用于处理信号，可使用它来压缩音乐。为此，首先需要将音频文件分解为音符。傅里叶变换能够准确地指出各个音符对整个歌曲的贡献，让你能够将不重要的音符删除。这就是MP3格式的工作原理！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>数字信号并非只有音乐一种类型。JPG也是一种压缩格式，也采用了刚才说的工作原理。傅里叶变换还被用来地震预测和DNA分析。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用傅里叶变换可创建类似于Shazam这样的音乐识别软件。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-4-并行算法" tabindex="-1"><a class="header-anchor" href="#◆-11-4-并行算法" aria-hidden="true">#</a> ◆ 11.4 并行算法</h3>
<blockquote>
<blockquote>
<p>11.4 并行算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在最佳情况下，排序算法的速度大致为O(n log n)。众所周知，对数组进行排序时，除非使用并行算法，否则运行时间不可能为O(n)！对数组进行排序时，快速排序的并行版本所需的时间为O(n)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>并行算法设计起来很难，要确保它们能够正确地工作并实现期望的速度提升也很难。有一点是确定的，那就是速度的提升并非线性的，因此即便你的笔记本电脑装备了两个而不是一个内核，算法的速度也不可能提高一倍，其中的原因有两个。❑ 并行性管理开销。假设你要对一个包含1000个元素的数组进行排序，如何在两个内核之间分配这项任务呢？如果让每个内核对其中500个元素进行排序，再将两个排好序的数组合并成一个有序数组，那么合并也是需要时间的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 负载均衡。假设你需要完成10个任务，因此你给每个内核都分配5个任务。但分配给内核A的任务都很容易，10秒钟就完成了，而分配给内核B的任务都很难，1分钟才完成。这意味着有那么50秒，内核B在忙死忙活，而内核A却闲得很！你如何均匀地分配工作，让两个内核都一样忙呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要改善性能和可扩展性，并行算法可能是不错的选择！</p>
</blockquote>
</blockquote>
<h3 id="◆-11-5-mapreduce" tabindex="-1"><a class="header-anchor" href="#◆-11-5-mapreduce" aria-hidden="true">#</a> ◆ 11.5 MapReduce</h3>
<blockquote>
<blockquote>
<p>11.5 MapReduce有一种特殊的并行算法正越来越流行，它就是分布式算法。在并行算法只需两到四个内核时，完全可以在笔记本电脑上运行它，但如果需要数百个内核呢？在这种情况下，可让算法在多台计算机上运行。MapReduce是一种流行的分布式算法，你可通过流行的开源工具Apache Hadoop来使用它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你有一个数据库表，包含数十亿乃至数万亿行，需要对其执行复杂的SQL查询。在这种情况下，你不能使用MySQL，因为数据表的行数超过数十亿后，它处理起来将很吃力。相反，你需要通过Hadoop来使用MapReduce！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>又假设你需要处理一个很长的清单，其中包含100万个职位，而每个职位处理起来需要10秒。如果使用一台计算机来处理，将耗时数月！如果使用100台计算机来处理，可能几天就能完工。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>分布式算法非常适合用于在短时间内完成海量工作，其中的MapReduce基于两个简单的理念：映射（map）函数和归并（reduce）函数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>映射函数很简单，它接受一个数组，并对其中的每个元素执行同样的处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>arr2包含[2, 4, 6, 8, 10]：将数组arr1的每个元素都翻倍！将元素翻倍的速度非常快，但如果要执行的操作需要更长的时间呢？请看下面的伪代码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221914672.png" alt="image-20230304221914672">在这个示例中，你有一个URL清单，需要下载每个URL指向的页面并将这些内容存储在数组arr2中。对于每个URL，处理起来都可能需要几秒钟。如果总共有1000个URL，可能耗时几小时！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果有100台计算机，而map能够自动将工作分配给这些计算机去完成就好了。这样就可同时下载100个页面，下载速度将快得多！这就是MapReduce中“映射”部分基于的理念。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>归并函数</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>其理念是将很多项归并为一项。映射是将一个数组转换为另一个数组。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>归并是将一个数组转换为一个元素。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MapReduce使用这两个简单概念在多台计算机上执行数据查询。数据集很大，包含数十亿行时，使用MapReduce只需几分钟就可获得查询结果，而传统数据库可能要耗费数小时。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-6-布隆过滤器和hyperloglog" tabindex="-1"><a class="header-anchor" href="#◆-11-6-布隆过滤器和hyperloglog" aria-hidden="true">#</a> ◆ 11.6 布隆过滤器和HyperLogLog</h3>
<blockquote>
<blockquote>
<p>11.6 布隆过滤器和HyperLogLog</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你管理着网站Reddit。每当有人发布链接时，你都要检查它以前是否发布过，因为之前未发布过的故事更有价值。又假设你在Google负责搜集网页，但只想搜集新出现的网页，因此需要判断网页是否搜集过。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在假设你管理着提供网址缩短服务的bit.ly，要避免将用户重定向到恶意网站。你有一个清单，其中记录了恶意网站的URL。你需要确定要将用户重定向到的URL是否在这个清单中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这些都是同一种类型的问题，涉及庞大的集合。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>给定一个元素，你需要判断它是否包含在这个集合中。为快速做出这种判断，可使用散列表。例如，Google可能有一个庞大的散列表，其中的键是已搜集的网页。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>adit.io是这个散列表中的一个键，这说明已搜集它。散列表的平均查找时间为O(1)，即查找时间是固定的，非常好！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>只是Google需要建立数万亿个网页的索引，因此这个散列表非常大，需要占用大量的存储空间。Reddit和bit.ly也面临着这样的问题。面临海量数据，你需要创造性的解决方案！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>11.6.1 布隆过滤器布隆过滤器提供了解决之道。布隆过滤器是一种概率型数据结构，它提供的答案有可能不对，但很可能是正确的。为判断网页以前是否已搜集，可不使用散列表，而使用布隆过滤器。使用散列表时，答案绝对可靠，而使用布隆过滤器时，答案却是很可能是正确的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ 可能出现错报的情况，即Google可能指出“这个网站已搜集”，但实际上并没有搜集。❑ 不可能出现漏报的情况，即如果布隆过滤器说“这个网站未搜集”，就肯定未搜集。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>布隆过滤器的优点在于占用的存储空间很少。使用散列表时，必须存储Google搜集过的所有URL，但使用布隆过滤器时不用这样做。布隆过滤器非常适合用于不要求答案绝对准确的情况，前面所有的示例都是这样的。对bit.ly而言，这样说完全可行：“我们认为这个网站可能是恶意的，请倍加小心。”</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HyperLogLog是一种类似于布隆过滤器的算法。如果Google要计算用户执行的不同搜索的数量，或者Amazon要计算当天用户浏览的不同商品的数量，要回答这些问题，需要耗用大量的空间！对Google来说，必须有一个日志，其中包含用户执行的不同搜索。有用户执行搜索时，Google必须判断该搜索是否包含在日志中：如果答案是否定的，就必须将其加入到日志中。即便只记录一天的搜索，这种日志也大得不得了！HyperLogLog近似地计算集合中不同的元素数，与布隆过滤器一样，它不能给出准确的答案，但也八九不离十，而占用的内存空间却少得多。面临海量数据且只要求答案八九不离十时，可考虑使用概率型算法！</p>
</blockquote>
</blockquote>
<h3 id="◆-11-7-sha算法" tabindex="-1"><a class="header-anchor" href="#◆-11-7-sha算法" aria-hidden="true">#</a> ◆ 11.7 SHA算法</h3>
<blockquote>
<blockquote>
<p>11.7 SHA算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>散列算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你有一个键，需要将其相关联的值放到数组中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你使用散列函数来确定应将这个值放在数组的什么地方。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这样查找时间是固定的。当你想要知道指定键对应的值时，可再次执行散列函数，它将告诉你这个值存储在什么地方，需要的时间为O(1)。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你希望散列函数的结果是均匀分布的。散列函数接受一个字符串，并返回一个索引号。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>11.7.1 比较文件另一种散列函数是安全散列算法（secure hash algorithm, SHA）函数。给定一个字符串，SHA返回其散列值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SHA是一个散列函数，它生成一个散列值——一个较短的字符串。用于创建散列表的散列函数根据字符串生成数组索引，而SHA根据字符串生成另一个字符串。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于每个不同的字符串，SHA生成的散列值都不同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>说明SHA生成的散列值很长，这里截短了。你可使用SHA来判断两个文件是否相同，这在比较超大型文件时很有用。假设你有一个4 GB的文件，并要检查朋友是否也有这个大型文件。为此，你不用通过电子邮件将这个大型文件发送给朋友，而可计算它们的SHA散列值，再对结果进行比较。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SHA被广泛用于计算密码的散列值。这种散列算法是单向的。你可根据字符串计算出散列值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SHA实际上是一系列算法：SHA-0、SHA-1、SHA-2和SHA-3。本书编写期间，SHA-0和SHA-1已被发现存在一些缺陷。如果你要使用SHA算法来计算密码的散列值，请使用SHA-2或SHA-3。当前，最安全的密码散列函数是bcrypt</p>
</blockquote>
</blockquote>
<h3 id="◆-11-8-局部敏感的散列算法" tabindex="-1"><a class="header-anchor" href="#◆-11-8-局部敏感的散列算法" aria-hidden="true">#</a> ◆ 11.8 局部敏感的散列算法</h3>
<blockquote>
<blockquote>
<p>11.8 局部敏感的散列算法</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>SHA还有一个重要特征，那就是局部不敏感的。假设你有一个字符串，并计算了其散列值。<img src="@source/docs/theme-reco/img/15.算法图解/image-20230304221934531.png" alt="image-20230304221934531">如果你修改其中的一个字符，再计算其散列值，结果将截然不同！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有时候，你希望结果相反，即希望散列函数是局部敏感的。在这种情况下，可使用Simhash。如果你对字符串做细微的修改，Simhash生成的散列值也只存在细微的差别。这让你能够通过比较散列值来判断两个字符串的相似程度，这很有用！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>❑ Google使用Simhash来判断网页是否已搜集。❑ 老师可以使用Simhash来判断学生的论文是否是从网上抄的。❑ Scribd允许用户上传文档或图书，以便与人分享，但不希望用户上传有版权的内容！这个网站可使用Simhash来检查上传的内容是否与小说《哈利·波特》类似，如果类似，就自动拒绝。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>需要检查两项内容的相似程度时，Simhash很有用。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-9-diffie-hellman密钥交换" tabindex="-1"><a class="header-anchor" href="#◆-11-9-diffie-hellman密钥交换" aria-hidden="true">#</a> ◆ 11.9 Diffie-Hellman密钥交换</h3>
<blockquote>
<blockquote>
<p>11.9 Diffie-Hellman密钥交换</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Diffie-Hellman算法，它以优雅的方式解决了一个古老的问题：如何对消息进行加密，以便只有收件人才能看懂呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最简单的方式是设计一种加密算法，如将a转换为1, b转换为2，以此类推。这样，如果我给你发送消息“4,15,7”，你就可将其转换为“d, o, g”。但我们必须就加密算法达成一致，这种方式才可行。我们不能通过电子邮件来协商，因为可能有人拦截电子邮件，获悉加密算法，进而破译消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即便我们能够每天修改，像这样简单的加密算法也很容易使用蛮力攻击破解。假设我看到消息“9,6,13,13,16 24,16,19,13,5”，如果使用加密算法a=1、b=2等，转换结果将如下。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结果是一堆乱码。我们来尝试加密算法a=2、b=3等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结果对了！像这样的简单加密算法很容易破解。在二战期间，德国人使用的加密算法比这复杂得多，但还是被破解了。Diffie-Hellman算法解决了如下两个问题。❑ 双方无需知道加密算法。他们不必会面协商要使用的加密算法。❑ 要破解加密的消息比登天还难。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Diffie-Hellman使用两个密钥：公钥和私钥。顾名思义，公钥就是公开的，可将其发布到网站上，通过电子邮件发送给朋友，或使用其他任何方式来发布。你不必将它藏着掖着。有人要向你发送消息时，他使用公钥对其进行加密。加密后的消息只有使用私钥才能解密。只要只有你知道私钥，就只有你才能解密消息！</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Diffie-Hellman算法及其替代者RSA依然被广泛使用。</p>
</blockquote>
</blockquote>
<h3 id="◆-11-10-线性规划" tabindex="-1"><a class="header-anchor" href="#◆-11-10-线性规划" aria-hidden="true">#</a> ◆ 11.10 线性规划</h3>
<blockquote>
<blockquote>
<p>线性规划用于在给定约束条件下最大限度地改善指定的指标。例如，假设你所在的公司生产两种产品：衬衫和手提袋。衬衫每件利润2美元，需要消耗1米布料和5粒扣子；手提袋每个利润3美元，需要消耗2米布料和2粒扣子。你有11米布料和20粒扣子，为最大限度地提高利润，该生产多少件衬衫、多少个手提袋呢？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目标是利润最大化，而约束条件是拥有的原材料数量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>再举一个例子。你是个政客，要尽可能多地获得支持票。你经过研究发现，平均而言，对于每张支持票，在旧金山需要付出1小时的劳动（宣传、研究等）和2美元的开销，而在芝加哥需要付出1.5小时的劳动和1美元的开销。在旧金山和芝加哥，你至少需要分别获得500和300张支持票。你有50天的时间，总预算为1500美元。请问你最多可从这两个地方获得多少支持票？这里的目标是支持票数最大化，而约束条件是时间和预算。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>线性规划使用Simplex算法</p>
</blockquote>
</blockquote>
</div></template>



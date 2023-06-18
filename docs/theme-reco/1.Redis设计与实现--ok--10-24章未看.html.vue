<template><div><h1 id="redis设计与实现" tabindex="-1"><a class="header-anchor" href="#redis设计与实现" aria-hidden="true">#</a> Redis设计与实现</h1>
<p>黄健宏</p>
<h2 id="◆-前言" tabindex="-1"><a class="header-anchor" href="#◆-前言" aria-hidden="true">#</a> ◆ 前言</h2>
<p>Redis的五种数据类型分别是由什么数据结构实现的？</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis的字符串数据类型既可以存储字符串（比如“hello world”），又可以存储整数和浮点数（比如10086和3.14），甚至是二进制位（使用SETBIT等命令），Redis在内部是怎样存储这些值的？</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis的一部分命令只能对特定数据类型执行（比如APPEND只能对字符串执行，HSET只能对哈希表执行），而另一部分命令却可以对所有数据类型执行（比如DEL、TYPE和EXPIRE），不同的命令在执行时是如何进行类型检查的？</p>
<blockquote>
<blockquote></blockquote>
<p>Redis在内部是否实现了一个类型系统？</p>
<blockquote></blockquote>
</blockquote>
<p>Redis的数据库是怎样存储各种不同数据类型的键值对的？</p>
<blockquote>
<blockquote></blockquote>
<p>数据库里面的过期键又是怎样实现自动删除的？</p>
</blockquote>
<p>除了数据库之外，Redis还拥有发布与订阅、脚本、事务等特性，这些特性又是如何实现的？</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis使用什么模型或者模式来处理客户端的命令请求？</p>
<blockquote>
<blockquote></blockquote>
<p>一条命令请求从发送到返回需要经过什么步骤？</p>
</blockquote>
<blockquote>
<p>本书不仅介绍了Redis的内部机制（比如数据库实现、类型系统、事件模型），而且还介绍了大部分Redis单机特性（比如事务、持久化、Lua脚本、排序、二进制位操作），以及所有Redis多机特性（如复制、Sentinel和集群）。</p>
</blockquote>
<h2 id="◆-第2章-简单动态字符串-simple-dynamic-string-sds" tabindex="-1"><a class="header-anchor" href="#◆-第2章-简单动态字符串-simple-dynamic-string-sds" aria-hidden="true">#</a> ◆ 第2章 简单动态字符串（Simple dynamic string(SDS)）</h2>
<h3 id="_2-1-sds的定义" tabindex="-1"><a class="header-anchor" href="#_2-1-sds的定义" aria-hidden="true">#</a> 2.1 SDS的定义</h3>
<p>每个sds.h/sdshdr结构表示一个SDS值：</p>
<p><img src="\img\Redis设计与实现\image-20211201095251951.png" alt="image-20211201095251951" style="zoom:50%;" /><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201095358588.png" alt="image-20211201095358588"></p>
<img src="\img\Redis设计与实现\image-20211201095500235.png" alt="image-20211201095500235" style="zoom:50%;" />
<blockquote>
<p>SDS遵循C字符串以空字符结尾的惯例，保存空字符的1字节空间不计算在SDS的len属性里面，并且为空字符分配额外的1字节空间，以及添加空字符到字符串末尾等操作，都是由SDS函数自动完成的，所以这个空字符对于SDS的使用者来说是完全透明的。遵循空字符结尾这一惯例的好处是，SDS可以直接重用一部分C字符串函数库里面的函数。</p>
</blockquote>
<h3 id="_2-2-sds与c字符串的区别" tabindex="-1"><a class="header-anchor" href="#_2-2-sds与c字符串的区别" aria-hidden="true">#</a> 2.2 SDS与C字符串的区别</h3>
<blockquote>
<p>根据传统，C语言使用长度为N+1的字符数组来表示长度为N的字符串，并且字符数组的最后一个元素总是空字符'\0'。</p>
</blockquote>
<blockquote>
<p>C语言使用的这种简单的字符串表示方式，并不能满足Redis对字符串在安全性、效率以及功能方面的要求</p>
</blockquote>
<blockquote>
<p>因为C字符串并不记录自身的长度信息，所以为了获取一个C字符串的长度，程序必须遍历整个字符串，对遇到的每个字符进行计数，直到遇到代表字符串结尾的空字符为止，这个操作的复杂度为O（N）。</p>
</blockquote>
<blockquote>
<p>和C字符串不同，因为SDS在len属性中记录了SDS本身的长度，所以获取一个SDS长度的复杂度仅为O（1）。</p>
</blockquote>
<blockquote>
<p>设置和更新SDS长度的工作是由SDS的API在执行时自动完成的，使用SDS无须进行任何手动修改长度的工作。</p>
</blockquote>
<blockquote>
<p>通过使用SDS而不是C字符串，Redis将获取字符串长度所需的复杂度从O（N）降低到了O（1），这确保了获取字符串长度的工作不会成为Redis的性能瓶颈。例如，因为字符串键在底层使用SDS来实现，所以即使我们对一个非常长的字符串键反复执行STRLEN命令，也不会对系统性能造成任何影响，因为STRLEN命令的复杂度仅为O（1）。</p>
</blockquote>
<blockquote>
<p>**除了获取字符串长度的复杂度高之外，C字符串不记录自身长度带来的另一个问题是容易造成缓冲区溢出（buffer overfow）。**举个例子，＜string.h＞/strcat函数可以将src字符串中的内容拼接到dest字符串的末尾：因为C字符串不记录自身的长度，所以strcat假定用户在执行这个函数时，已经为dest分配了足够多的内存，可以容纳src字符串中的所有内容，而一旦这个假定不成立时，就会产生缓冲区溢出。</p>
</blockquote>
<blockquote>
<p>举个例子，假设程序里有两个在内存中紧邻着的C字符串s1和s2，其中s1保存了字符串&quot;Redis&quot;，而s2则保存了字符串&quot;MongoDB&quot;，如果一个程序员将s1的内容修改为&quot;Redis Cluster&quot;，但粗心的他却忘了在执行strcat之前为s1分配足够的空间，那么在strcat函数执行之后，s1的数据将溢出到s2所在的空间中，导致s2保存的内容被意外地修改</p>
</blockquote>
<blockquote>
<p><strong>与C字符串不同，SDS的空间分配策略完全杜绝了发生缓冲区溢出的可能性：当SDS API需要对SDS进行修改时，API会先检查SDS的空间是否满足修改所需的要求，如果不满足的话，API会自动将SDS的空间扩展至执行修改所需的大小，然后才执行实际的修改操作，所以使用SDS既不需要手动修改SDS的空间大小，也不会出现前面所说的缓冲区溢出问题。</strong></p>
</blockquote>
<blockquote>
<p>举个例子，SDS的API里面也有一个用于执行拼接操作的sdscat函数，它可以将一个C字符串拼接到给定SDS所保存的字符串的后面，但是在执行拼接操作之前，sdscat会先检查给定SDS的空间是否足够，如果不够的话，sdscat就会先扩展SDS的空间，然后才执行拼接操作。</p>
</blockquote>
<blockquote>
<p><strong>因为C字符串并不记录自身的长度，所以对于一个包含了N个字符的C字符串来说，这个C字符串的底层实现总是一个N+1个字符长的数组（额外的一个字符空间用于保存空字符）。因为C字符串的长度和底层数组的长度之间存在着这种关联性，所以每次增长或者缩短一个C字符串，程序都总要对保存这个C字符串的数组进行一次内存重分配操作：</strong></p>
</blockquote>
<blockquote>
<p>​			<strong>❑如果程序执行的是增长字符串的操作，比如拼接操作（append），那么在执行这个操作之前，程序需要先通过内存重分配来扩展底层数组的空间大小——如果忘了这一步就会产生缓冲区溢出。</strong></p>
</blockquote>
<blockquote>
<p>​			<strong>❑如果程序执行的是缩短字符串的操作，比如截断操作（trim），那么在执行这个操作之后，程序需要通过内存重分配来释放字符串不再使用的那部分空间——如果忘了这一步就会产生内存泄漏。</strong></p>
</blockquote>
<blockquote>
<p>内存重分配涉及复杂的算法，并且可能需要执行系统调用，所以它通常是一个比较耗时的操作：❑在一般程序中，如果修改字符串长度的情况不太常出现，那么每次修改都执行一次内存重分配是可以接受的。❑但是Redis作为数据库，经常被用于速度要求严苛、数据被频繁修改的场合，如果每次修改字符串的长度都需要执行一次内存重分配的话，那么光是执行内存重分配的时间就会占去修改字符串所用时间的一大部分，如果这种修改频繁地发生的话，可能还会对性能造成影响。</p>
</blockquote>
<blockquote>
<p><strong>为了避免C字符串的这种缺陷，SDS通过未使用空间解除了字符串长度和底层数组长度之间的关联：在SDS中，buf数组的长度不一定就是字符数量加一，数组里面可以包含未使用的字节，而这些字节的数量就由SDS的free属性记录。</strong></p>
</blockquote>
<blockquote>
<p><strong>通过未使用空间，SDS实现了空间预分配和惰性空间释放两种优化策略。</strong></p>
</blockquote>
<blockquote>
<p>**1.空间预分配：**用于优化SDS的字符串增长操作：当SDS的API对一个SDS进行修改，并且需要对SDS进行空间扩展的时候，程序不仅会为SDS分配修改所必须要的空间，还会为SDS分配额外的未使用空间。</p>
</blockquote>
<blockquote>
<p>额外分配的未使用空间数量由以下公式决定：</p>
</blockquote>
<p>如果对SDS进行修改之后，SDS的长度（也即是len属性的值）将小于1MB，那么程序分配和len属性同样大小的未使用空间，这时SDS len属性的值将和free属性的值相同。举个例子，如果进行修改之后，SDS的len将变成13字节，那么程序也会分配13字节的未使用空间，SDS的buf数组的实际长度将变成13+13+1=27字节（额外的一字节用于保存空字符）。❑如果对SDS进行修改之后，SDS的长度将大于等于1MB，那么程序会分配1MB的未使用空间。举个例子，如果进行修改之后，SDS的len将变成30MB，那么程序会分配1MB的未使用空间，SDS的buf数组的实际长度将为30MB+1MB+1byte。</p>
<blockquote>
<p>通过空间预分配策略，Redis可以减少连续执行字符串增长操作所需的内存重分配次数。</p>
</blockquote>
<blockquote>
<p>通过这种预分配策略，SDS将连续增长N次字符串所需的内存重分配次数从必定N次降低为最多N次。</p>
</blockquote>
<blockquote>
<p>**2.惰性空间释放：**用于优化SDS的字符串缩短操作：当SDS的API需要缩短SDS保存的字符串时，程序并不立即使用内存重分配来回收缩短后多出来的字节，而是使用free属性将这些字节的数量记录起来，并等待将来使用。</p>
</blockquote>
<blockquote>
<p>C字符串中的字符必须符合某种编码（比如ASCII），并且除了字符串的末尾之外，字符串里面不能包含空字符，否则最先被程序读入的空字符将被误认为是字符串结尾，这些限制使得C字符串只能保存文本数据，而不能保存像图片、音频、视频、压缩文件这样的二进制数据。</p>
</blockquote>
<blockquote>
<p>为了确保Redis可以适用于各种不同的使用场景，SDS的API都是二进制安全的（binary-safe），所有SDS API都会以处理二进制的方式来处理SDS存放在buf数组里的数据，程序不会对其中的数据做任何限制、过滤、或者假设，数据在写入时是什么样的，它被读取时就是什么样。</p>
</blockquote>
<blockquote>
<p>这也是我们将SDS的buf属性称为字节数组的原因——Redis不是用这个数组来保存字符，而是用它来保存一系列二进制数据。</p>
</blockquote>
<blockquote>
<p>使用SDS来保存之前提到的特殊数据格式就没有任何问题，因为SDS使用len属性的值而不是空字符来判断字符串是否结束，通过使用二进制安全的SDS，而不是C字符串，使得Redis不仅可以保存文本数据，还可以保存任意格式的二进制数据。</p>
</blockquote>
<blockquote>
<p>虽然SDS的API都是二进制安全的，但它们一样遵循C字符串以空字符结尾的惯例：这些API总会将SDS保存的数据的末尾设置为空字符，并且总会在为buf数组分配空间时多分配一个字节来容纳这个空字符，这是为了让那些保存文本数据的SDS可以重用一部分＜string.h＞库定义的函数。</p>
</blockquote>
<blockquote>
<p>如果我们有一个保存文本数据的SDS值sds，那么我们就可以重用＜string.h＞/strcasecmp函数，使用它来对比SDS保存的字符串和另一个C字符串</p>
</blockquote>
<h3 id="_2-4-重点回顾" tabindex="-1"><a class="header-anchor" href="#_2-4-重点回顾" aria-hidden="true">#</a> 2.4 重点回顾</h3>
<blockquote>
<p>Redis只会使用C字符串作为字面量（字面量指的是能够使用简单结构和符号创建对象的表达式。比如字符串字面量，使用一个双引号来创建字符串对象，而不需要完整的调用 new String() 语句。大多数语言都支持字面量，而其中最著名的要数 JavaScript），在大多数情况下，Redis使用SDS（Simple Dynamic String，简单动态字符串）作为字符串表示，比起C字符串，SDS具有以下优点：</p>
<blockquote></blockquote>
<p>1）常数复杂度获取字符串长度。</p>
<blockquote></blockquote>
<p>2）杜绝缓冲区溢出。</p>
<blockquote></blockquote>
<p>3）减少修改字符串长度时所需的内存重分配次数。</p>
<blockquote></blockquote>
<p>4）二进制安全。</p>
<blockquote></blockquote>
<p>5）兼容部分C字符串函数。</p>
</blockquote>
<h2 id="◆-第3章-链表" tabindex="-1"><a class="header-anchor" href="#◆-第3章-链表" aria-hidden="true">#</a> ◆ 第3章 链表</h2>
<blockquote>
<p>链表提供了高效的节点重排能力，以及顺序性的节点访问方式，并且可以通过增删节点来灵活地调整链表的长度。</p>
</blockquote>
<blockquote>
<p>因为Redis使用的C语言并没有内置这种数据结构，所以Redis构建了自己的链表实现。</p>
</blockquote>
<blockquote>
<p>列表键的底层实现之一就是链表。当一个列表键包含了数量比较多的元素，又或者列表中包含的元素都是比较长的字符串时，Redis就会使用链表作为列表键的底层实现。</p>
</blockquote>
<blockquote>
<p>除了链表键之外，发布与订阅、慢查询、监视器等功能也用到了链表，Redis服务器本身还使用链表来保存多个客户端的状态信息，以及使用链表来构建客户端输出缓冲区（output buffer）</p>
</blockquote>
<blockquote>
<p>如果不具备关于链表的基本知识的话，可以参考《算法：C语言实现（第1～4部分）》一书的3.3至3.5节，或者《数据结构与算法分析：C语言描述》一书的3.2节，又或者《算法导论（第三版）》一书的10.2节。</p>
</blockquote>
<h3 id="_3-1-链表和链表节点的实现" tabindex="-1"><a class="header-anchor" href="#_3-1-链表和链表节点的实现" aria-hidden="true">#</a> 3.1 链表和链表节点的实现</h3>
<blockquote>
<p>list结构为链表提供了表头指针head、表尾指针tail，以及链表长度计数器len，而dup、free和match成员则是用于实现多态链表所需的类型特定函数：❑dup函数用于复制链表节点所保存的值；❑free函数用于释放链表节点所保存的值；❑match函数则用于对比链表节点所保存的值和另一个输入值是否相等。</p>
</blockquote>
<blockquote>
<p>Redis的链表实现的特性可以总结如下：❑双端：链表节点带有prev和next指针，获取某个节点的前置节点和后置节点的复杂度都是O（1）。❑无环：表头节点的prev指针和表尾节点的next指针都指向NULL，对链表的访问以NULL为终点。❑带表头指针和表尾指针：通过list结构的head指针和tail指针，程序获取链表的表头节点和表尾节点的复杂度为O（1）。❑带链表长度计数器：程序使用list结构的len属性来对list持有的链表节点进行计数，程序获取链表中节点数量的复杂度为O（1）。❑多态：链表节点使用void*指针来保存节点值，并且可以通过list结构的dup、free、match三个属性为节点值设置类型特定函数，所以链表可以用于保存各种不同类型的值。</p>
</blockquote>
<h3 id="_3-3-重点回顾" tabindex="-1"><a class="header-anchor" href="#_3-3-重点回顾" aria-hidden="true">#</a> 3.3 重点回顾</h3>
<blockquote>
<p>链表被广泛用于实现Redis的各种功能，比如列表键、发布与订阅、慢查询、监视器等。</p>
<blockquote></blockquote>
</blockquote>
<p>每个链表节点由一个listNode结构来表示，每个节点都有一个指向前置节点和后置节点的指针，所以Redis的链表实现是双端链表。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>每个链表使用一个list结构来表示，这个结构带有表头节点指针、表尾节点指针，以及链表长度等信息。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>因为链表表头节点的前置节点和表尾节点的后置节点都指向NULL，所以Redis的链表实现是无环链表。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>通过为链表设置不同的类型特定函数，Redis的链表可以用于保存各种不同类型的值。</p>
<h2 id="◆-第4章-字典" tabindex="-1"><a class="header-anchor" href="#◆-第4章-字典" aria-hidden="true">#</a> ◆ 第4章 字典</h2>
<blockquote>
<p>字典，又称为符号表（symbol table）、关联数组（associative array）或映射（map），是一种用于保存键值对（key-value pair）的抽象数据结构。在字典中，一个键（key）可以和一个值（value）进行关联（或者说将键映射为值），这些关联的键和值就称为键值对。字典中的每个键都是独一无二的，程序可以在字典中根据键查找与之关联的值，或者通过键来更新值，又或者根据键来删除整个键值对，字典经常作为一种数据结构内置在很多高级编程语言里面，但Redis所使用的C语言并没有内置这种数据结构，因此Redis构建了自己的字典实现。</p>
</blockquote>
<blockquote>
<p><strong>Redis的数据库就是使用字典来作为底层实现的</strong>，对数据库的增、删、查、改操作也是构建在对字典的操作之上的，在数据库中创建一个键为&quot;msg&quot;，值为&quot;hello world&quot;的键值对时，这个键值对就是保存在代表数据库的字典里面的。</p>
</blockquote>
<blockquote>
<p><strong>字典还是哈希键的底层实现之一</strong>，当一个哈希键包含的键值对比较多，又或者键值对中的元素都是比较长的字符串时，Redis就会使用字典作为哈希键的底层实现。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201111624998.png" alt="image-20211201111624998" style="zoom:50%;" />
</blockquote>
<h3 id="_4-1-字典的实现" tabindex="-1"><a class="header-anchor" href="#_4-1-字典的实现" aria-hidden="true">#</a> 4.1 字典的实现</h3>
<blockquote>
<p>Redis的字典使用哈希表作为底层实现，一个哈希表里面可以有多个哈希表节点，而每个哈希表节点就保存了字典中的一个键值对。</p>
</blockquote>
<blockquote>
<p>Redis字典所使用的哈希表由dict.h/dictht结构定义，哈希表节点使用dictEntry结构表示，每个dictEntry结构都保存着一个键值对，key属性保存着键值对中的键，而v属性则保存着键值对中的值，其中键值对的值可以是一个指针，或者是一个uint64_t整数，又或者是一个int64_t整数。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201111717895.png" alt="image-20211201111717895" style="zoom:50%;" />
</blockquote>
<blockquote>
<p>next属性是指向另一个哈希表节点的指针，这个指针可以将多个哈希值相同的键值对连接在一次，以此来解决键冲突（collision）的问题。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201111752739.png" alt="image-20211201111752739" style="zoom: 67%;" />
</blockquote>
<h3 id="_4-2-哈希算法" tabindex="-1"><a class="header-anchor" href="#_4-2-哈希算法" aria-hidden="true">#</a> 4.2 哈希算法</h3>
<blockquote>
<p>当要将一个新的键值对添加到字典里面时，程序需要先根据键值对的键计算出哈希值和索引值，然后再根据索引值，将包含新键值对的哈希表节点放到哈希表数组的指定索引上面。</p>
<blockquote></blockquote>
<p>size属性记录了<em>哈希表的</em>大小,也即是table数组的大小,而used属性则记录了哈希表目前已有节点(键值对)的数量。<em>sizemask</em>属性的值总是等于size-1</p>
<blockquote></blockquote>
<p>Redis计算哈希值和索引值的方法如下：</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201112137514.png" alt="image-20211201112137514"></p>
</blockquote>
<blockquote>
<p>当字典被用作数据库的底层实现，或者哈希键的底层实现时，Redis使用MurmurHash2算法来计算键的哈希值。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201112407692.png" alt="image-20211201112407692"></p>
</blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201112645033.png" alt="image-20211201112645033"></p>
<h3 id="_4-3-解决键冲突" tabindex="-1"><a class="header-anchor" href="#_4-3-解决键冲突" aria-hidden="true">#</a> 4.3 解决键冲突</h3>
<blockquote>
<p>当有两个或以上数量的键被分配到了哈希表数组的同一个索引上面时，我们称这些键发生了冲突</p>
</blockquote>
<blockquote>
<p>Redis的哈希表使用链地址法（separate chaining）来解决键冲突，每个哈希表节点都有一个next指针，多个哈希表节点可以用next指针构成一个单向链表，被分配到同一个索引上的多个节点可以用这个单向链表连接起来，这就解决了键冲突的问题。</p>
<blockquote></blockquote>
<p>举个例子，假设程序要将键值对k2和v2添加到图4-6所示的哈希表里面，并且计算得出k2的索引值为2，那么键k1和k2将产生冲突，而解决冲突的办法就是使用next指针将键k2和k1所在的节点连接起来，所以键冲突指的只是计算索引值后冲突了，对于用户使用来说，没有影响的，底层进行的链表连接。</p>
</blockquote>
<blockquote>
<p>因为dictEntry节点组成的链表没有指向链表表尾的指针，所以为了速度考虑，程序总是将新节点添加到链表的表头位置（复杂度为O（1）），排在其他已有节点的前面。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201112904527.png" alt="image-20211201112904527" style="zoom:50%;" />
</blockquote>
<h3 id="_4-4-rehash" tabindex="-1"><a class="header-anchor" href="#_4-4-rehash" aria-hidden="true">#</a> 4.4 rehash</h3>
<blockquote>
<p>随着操作的不断执行，哈希表保存的键值对会逐渐地增多或者减少，为了让哈希表的负载因子（load factor）维持在一个合理的范围之内，当哈希表保存的键值对数量太多或者太少时，程序需要对哈希表的大小进行相应的扩展或者收缩。</p>
</blockquote>
<blockquote>
<p>扩展和收缩哈希表的工作可以通过执行rehash（重新散列）操作来完成，Redis对字典的哈希表执行rehash的步骤如下：</p>
</blockquote>
<blockquote>
<p>哈希表的扩展与收缩当以下条件中的任意一个被满足时，程序会自动开始对哈希表执行扩展操作：</p>
<blockquote></blockquote>
<p>1）服务器目前没有在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于1。</p>
<blockquote></blockquote>
<p>2）服务器目前正在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于5。</p>
<blockquote></blockquote>
<p>具体可以看详细过程</p>
</blockquote>
<h3 id="_4-5-渐进式rehash" tabindex="-1"><a class="header-anchor" href="#_4-5-渐进式rehash" aria-hidden="true">#</a> 4.5 渐进式rehash</h3>
<p>扩展或收缩哈希表需要将ht[0]里面的所有键值对rehash到ht[1]里面，但是，这个rehash动作并不是一次性、集中式地完成的，而是分多次、渐进式地完成的。</p>
<p>这样做的原因在于，如果ht[0]里只保存着四个键值对，那么服务器可以在瞬间就将这些键值对全部rehash到ht[1]；但是，如果哈希表里保存的键值对数量不是四个，而是四百万、四千万甚至四亿个键值对，那么要一次性将这些键值对全部rehash到ht[1]的话，庞大的计算量可能会导致服务器在一段时间内停止服务。</p>
<p>因此，为了避免rehash对服务器性能造成影响，服务器不是一次性将ht[0]里面的所有键值对全部rehash到ht[1]，而是分多次、渐进式地将ht[0]里面的键值对慢慢地rehash到ht[1]。</p>
<p>以下是哈希表渐进式rehash的详细步骤：1）为ht[1]分配空间，让字典同时持有ht[0]和ht[1]两个哈希表。2）在字典中维持一个索引计数器变量rehashidx，并将它的值设置为0，表示rehash工作正式开始。3）在rehash进行期间，每次对字典执行添加、删除、查找或者更新操作时，程序除了执行指定的操作以外，还会顺带将ht[0]哈希表在rehashidx索引上的所有键值对rehash到ht[1]，当rehash工作完成之后，程序将rehashidx属性的值增一。4）随着字典操作的不断执行，最终在某个时间点上，ht[0]的所有键值对都会被rehash至ht[1]，这时程序将rehashidx属性的值设为-1，表示rehash操作已完成。</p>
<p>渐进式rehash的好处在于它采取分而治之的方式，将rehash键值对所需的计算工作均摊到对字典的每个添加、删除、查找和更新操作上，从而避免了集中式rehash而带来的庞大计算量。</p>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201114008874.png" alt="image-20211201114008874"></p>
<h3 id="_4-7-重点回顾" tabindex="-1"><a class="header-anchor" href="#_4-7-重点回顾" aria-hidden="true">#</a> 4.7 重点回顾</h3>
<p>字典被广泛用于实现Redis的各种功能，其中包括数据库和哈希键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis中的字典使用哈希表作为底层实现，每个字典带有两个哈希表，一个平时使用，另一个仅在进行rehash时使用。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当字典被用作数据库的底层实现，或者哈希键的底层实现时，Redis使用MurmurHash2算法来计算键的哈希值。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>哈希表使用链地址法来解决键冲突，被分配到同一个索引上的多个键值对会连接成一个单向链表。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>在对哈希表进行扩展或者收缩操作时，程序需要将现有哈希表包含的所有键值对rehash到新哈希表里面，并且这个rehash过程并不是一次性地完成的，而是渐进式地完成的。</p>
<h2 id="◆-第5章-跳跃表" tabindex="-1"><a class="header-anchor" href="#◆-第5章-跳跃表" aria-hidden="true">#</a> ◆ 第5章 跳跃表</h2>
<blockquote>
<p>跳跃表（skiplist）是一种有序数据结构，它通过在每个节点中维持多个指向其他节点的指针，从而达到快速访问节点的目的。</p>
</blockquote>
<blockquote>
<p>跳跃表支持平均O（logN）、最坏O（N）复杂度的节点查找，还可以通过顺序性操作来批量处理节点。</p>
</blockquote>
<blockquote>
<p>Redis使用跳跃表作为有序集合键的底层实现之一，如果一个有序集合包含的元素数量比较多，又或者有序集合中元素的成员（member）是比较长的字符串时，Redis就会使用跳跃表来作为有序集合键的底层实现。</p>
<blockquote></blockquote>
<p>在大部分情况下，跳跃表的效率可以和平衡树相媲美，并且因为跳跃表的实现比平衡树要来得更为简单，所以有不少程序都使用跳跃表来代替平衡树。</p>
</blockquote>
<blockquote>
<p>Redis只在两个地方用到了跳跃表，一个是实现有序集合键，另一个是在集群节点中用作内部数据结构，除此之外，跳跃表在Redis里面没有其他用途。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201114431565.png" alt="image-20211201114431565"></p>
</blockquote>
<h3 id="_5-1-跳跃表的实现" tabindex="-1"><a class="header-anchor" href="#_5-1-跳跃表的实现" aria-hidden="true">#</a> 5.1 跳跃表的实现</h3>
<blockquote>
<p>Redis的跳跃表由redis.h/zskiplistNode和redis.h/zskiplist两个结构定义，其中zskiplistNode结构用于表示跳跃表节点，而zskiplist结构则用于保存跳跃表节点的相关信息，比如节点的数量，以及指向表头节点和表尾节点的指针等等。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201114713320.png" alt="image-20211201114713320"></p>
<blockquote></blockquote>
<p><strong>一个跳跃表示例，位于图片最左边的是zskiplist结构，该结构包含以下属性：</strong></p>
<blockquote></blockquote>
</blockquote>
<p>header：指向跳跃表的表头节点。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>tail：指向跳跃表的表尾节点。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>level：记录目前跳跃表内，层数最大的那个节点的层数（表头节点的层数不计算在内）。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>length：记录跳跃表的长度，也即是，跳跃表目前包含节点的数量（表头节点不计算在内）。</p>
<blockquote>
<blockquote></blockquote>
<p><strong>位于zskiplist结构右方的是四个zskiplistNode结构，该结构包含以下属性：</strong></p>
<blockquote></blockquote>
</blockquote>
<p>层（level）：节点中用L1、L2、L3等字样标记节点的各个层，L1代表第一层，L2代表第二层，以此类推。每个层都带有两个属性：前进指针和跨度。前进指针用于访问位于表尾方向的其他节点，而跨度则记录了前进指针所指向节点和当前节点的距离。在上面的图片中，连线上带有数字的箭头就代表前进指针，而那个数字就是跨度。当程序从表头向表尾进行遍历时，访问会沿着层的前进指针进行。</p>
<blockquote>
<blockquote></blockquote>
<p>​		跳跃表节点的level数组可以包含多个元素，每个元素都包含一个指向其他节点的指针，程序可以通过这些层来加快访问其他节点的速度，一般来说，层的数量越多，访问其他节点的速度就越快。每次创建一个新跳跃表节点的时候，程序都根据幂次定律（power law，越大的数出现的概率越小）随机生成一个介于1和32之间的值作为level数组的大小，这个大小就是层的“高度”。图5-2分别展示了三个高度为1层、3层和5层的节点，因为C语言的数组索引总是从0开始的，所以节点的第一层是level[0]，而第二层是level[1]，以此类推。</p>
<blockquote></blockquote>
<p>​		❑后退（backward）指针：节点中用BW字样标记节点的后退指针，它指向位于当前节点的前一个节点。后退指针在程序从表尾向表头遍历时使用。</p>
<blockquote></blockquote>
<p>​		❑分值（score）：各个节点中的1.0、2.0和3.0是节点所保存的分值。在跳跃表中，节点按各自所保存的分值从小到大排列。</p>
<blockquote></blockquote>
<p>​		❑成员对象（obj）：各个节点中的o1、o2和o3是节点所保存的成员对象。</p>
<blockquote></blockquote>
<p>2.前进指针每个层都有一个指向表尾方向的前进指针（level[i].forward属性），用于从表头向表尾方向访问节点。图5-3用虚线表示出了程序从表头向表尾方向，遍历跳跃表中所有节点的路径：</p>
<blockquote></blockquote>
<p>​		<img src="\img\Redis设计与实现\image-20211201121038044.png" alt="image-20211201121038044" style="zoom: 67%;" /></p>
<blockquote></blockquote>
<p>1）迭代程序首先访问跳跃表的第一个节点（表头），然后从第四层的前进指针移动到表中的第二个节点。</p>
<blockquote></blockquote>
<p>2）在第二个节点时，程序沿着第二层的前进指针移动到表中的第三个节点。</p>
<blockquote></blockquote>
<p>3）在第三个节点时，程序同样沿着第二层的前进指针移动到表中的第四个节点。</p>
<blockquote></blockquote>
<p>4）当程序再次沿着第四个节点的前进指针移动时，它碰到一个NULL，程序知道这时已经到达了跳跃表的表尾，于是结束这次遍历。</p>
</blockquote>
<h3 id="_5-3-重点回顾" tabindex="-1"><a class="header-anchor" href="#_5-3-重点回顾" aria-hidden="true">#</a> 5.3 重点回顾</h3>
<p>跳跃表是有序集合的底层实现之一。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis的跳跃表实现由zskiplist和zskiplistNode两个结构组成，其中zskiplist用于保存跳跃表信息（比如表头节点、表尾节点、长度），而zskiplistNode则用于表示跳跃表节点。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>每个跳跃表节点的层高都是1至32之间的随机数。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>在同一个跳跃表中，多个节点可以包含相同的分值，但每个节点的成员对象必须是唯一的。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>跳跃表中的节点按照分值大小进行排序，当分值相同时，节点按照成员对象的大小进行排序。</p>
<blockquote>
<blockquote></blockquote>
<p>4.后退指针节点的后退指针（backward属性）用于从表尾向表头方向访问节点：跟可以一次跳过多个节点的前进指针不同，因为每个节点只有一个后退指针，所以每次只能后退至前一个节点。</p>
<blockquote></blockquote>
<p>图5-6用虚线展示了如果从表尾向表头遍历跳跃表中的所有节点：程序首先通过跳跃表的tail指针访问表尾节点，然后通过后退指针访问倒数第二个节点，之后再沿着后退指针访问倒数第三个节点，再之后遇到指向NULL的后退指针，于是访问结束。</p>
<blockquote></blockquote>
<p>5.分值和成员节点的分值（score属性）是一个double类型的浮点数，跳跃表中的所有节点都按分值从小到大来排序。节点的成员对象（obj属性）是一个指针，它指向一个字符串对象，而字符串对象则保存着一个SDS值。在同一个跳跃表中，各个节点保存的成员对象必须是唯一的，但是多个节点保存的分值却可以是相同的：分值相同的节点将按照成员对象在字典序中的大小来进行排序，成员对象较小的节点会排在前面（靠近表头的方向），而成员对象较大的节点则会排在后面（靠近表尾的方向）。</p>
<blockquote></blockquote>
<p>header和tail指针分别指向跳跃表的表头和表尾节点，通过这两个指针，程序定位表头节点和表尾节点的复杂度为O（1）。</p>
<blockquote></blockquote>
<p>通过使用length属性来记录节点的数量，程序可以在O（1）复杂度内返回跳跃表的长度。</p>
<blockquote></blockquote>
<p>level属性则用于在O（1）复杂度内获取跳跃表中层高最大的那个节点的层数量，注意表头节点的层高并不计算在内。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201123509440.png" alt="image-20211201123509440"></p>
</blockquote>
<h2 id="◆-第6章-整数集合" tabindex="-1"><a class="header-anchor" href="#◆-第6章-整数集合" aria-hidden="true">#</a> ◆ 第6章 整数集合</h2>
<blockquote>
<p>整数集合（intset）是集合键的底层实现之一，当一个集合只包含整数值元素，并且这个集合的元素数量不多时，Redis就会使用整数集合作为集合键的底层实现。</p>
</blockquote>
<blockquote>
<p>如果我们创建一个只包含五个元素的集合键，并且集合中的所有元素都是整数值，那么这个集合键的底层实现就会是整数集合：</p>
</blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201123649018.png" alt="image-20211201123649018"></p>
</blockquote>
<h3 id="_6-1-整数集合的实现" tabindex="-1"><a class="header-anchor" href="#_6-1-整数集合的实现" aria-hidden="true">#</a> 6.1 整数集合的实现</h3>
<blockquote>
<p>整数集合（intset）是Redis用于保存整数值的集合抽象数据结构，它可以保存类型为int16_t、int32_t或者int64_t的整数值，并且保证集合中不会出现重复元素。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201123800237.png" alt="image-20211201123800237" style="zoom: 67%;" />
</blockquote>
<blockquote>
<p>contents数组是整数集合的底层实现：整数集合的每个元素都是contents数组的一个数组项（item），各个项在数组中按值的大小从小到大有序地排列，并且数组中不包含任何重复项。</p>
</blockquote>
<blockquote>
<p>length属性记录了整数集合包含的元素数量，也即是contents数组的长度。</p>
</blockquote>
<blockquote>
<p>虽然intset结构将contents属性声明为int8_t类型的数组，但实际上contents数组并不保存任何int8_t类型的值，contents数组的真正类型取决于encoding属性的值：</p>
<blockquote></blockquote>
</blockquote>
<p>如果encoding属性的值为INTSET_ENC_INT16，那么contents就是一个int16_t类型的数组，数组里的每个项都是一个int16_t类型的整数值（最小值为-32768，最大值为32767）。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>如果encoding属性的值为INTSET_ENC_INT32，那么contents就是一个int32_t类型的数组，数组里的每个项都是一个int32_t类型的整数值（最小值为-2147483648，最大值为2147483647）。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>如果encoding属性的值为INTSET_ENC_INT64，那么contents就是一个int64_t类型的数组，数组里的每个项都是一个int64_t类型的整数值（最小值为-9223372036854775808，最大值为9223372036854775807）。</p>
<blockquote>
<p>当向一个底层为int16_t数组的整数集合添加一个int64_t类型的整数值时，整数集合已有的所有元素都会被转换成int64_t类型，所以contents数组保存的四个整数值都是int64_t类型的，不仅仅是-2675256175807981027。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201124030787.png" alt="image-20211201124030787"></p>
</blockquote>
<h3 id="_6-2-升级" tabindex="-1"><a class="header-anchor" href="#_6-2-升级" aria-hidden="true">#</a> 6.2 升级</h3>
<blockquote>
<p>每当我们要将一个新元素添加到整数集合里面，并且新元素的类型比整数集合现有所有元素的类型都要长时，整数集合需要先进行升级（upgrade），然后才能将新元素添加到整数集合里面。</p>
</blockquote>
<blockquote>
<p>升级整数集合并添加新元素共分为三步进行：</p>
</blockquote>
<blockquote>
<p>1）根据新元素的类型，扩展整数集合底层数组的空间大小，并为新元素分配空间。</p>
<blockquote></blockquote>
<p>2）将底层数组现有的所有元素都转换成与新元素相同的类型，并将类型转换后的元素放置到正确的位上，而且在放置元素的过程中，需要继续维持底层数组的有序性质不变。</p>
<blockquote></blockquote>
<p>3）将新元素添加到底层数组里面。</p>
</blockquote>
<blockquote>
<p>因为每次向整数集合添加新元素都可能会引起升级，而每次升级都需要对底层数组中已有的所有元素进行类型转换，所以向整数集合添加新元素的时间复杂度为O（N）。</p>
</blockquote>
<blockquote>
<p>因为引发升级的新元素的长度总是比整数集合现有所有元素的长度都大，所以这个新元素的值要么就大于所有现有元素，要么就小于所有现有元素：□ 在新元素小于所有现有元素的情况下，新元素会被放置在底层数组的最开头（索引0）；□ 在新元素大于所有现有元素的情况下，新元素会被放置在底层数组的最末尾（索引length-1）。</p>
</blockquote>
<h3 id="_6-3-升级的好处" tabindex="-1"><a class="header-anchor" href="#_6-3-升级的好处" aria-hidden="true">#</a> 6.3 升级的好处</h3>
<blockquote>
<p>整数集合的升级策略有两个好处，一个是提升整数集合的灵活性，另一个是尽可能地节约内存。</p>
</blockquote>
<blockquote>
<p>因为C语言是静态类型语言，为了避免类型错误，我们通常不会将两种不同类型的值放在同一个数据结构里面。</p>
</blockquote>
<blockquote>
<p>例如，我们一般只使用int16_t类型的数组来保存int16_t类型的值，只使用int32_t类型的数组来保存int32_t类型的值</p>
</blockquote>
<blockquote>
<p>因为整数集合可以通过自动升级底层数组来适应新元素，所以我们可以随意地将int16_t、int32_t或者int64_t类型的整数添加到集合中，而不必担心出现类型错误，这种做法非常灵活。</p>
</blockquote>
<blockquote>
<p>要让一个数组可以同时保存int16_t、int32_t、int64_t三种类型的值，最简单的做法就是直接使用int64_t类型的数组作为整数集合的底层实现。不过这样一来，即使添加到整数集合里面的都是int16_t类型或者int32_t类型的值，数组都需要使用int64_t类型的空间去保存它们，从而出现浪费内存的情况。</p>
</blockquote>
<blockquote>
<p>整数集合现在的做法既可以让集合能同时保存三种不同类型的值，又可以确保升级操作只会在有需要的时候进行，这可以尽量节省内存。</p>
</blockquote>
<h3 id="_6-4-降级" tabindex="-1"><a class="header-anchor" href="#_6-4-降级" aria-hidden="true">#</a> 6.4 降级</h3>
<blockquote>
<p>整数集合不支持降级操作，一旦对数组进行了升级，编码就会一直保持升级后的状态。</p>
</blockquote>
<h3 id="_6-6-重点回顾" tabindex="-1"><a class="header-anchor" href="#_6-6-重点回顾" aria-hidden="true">#</a> 6.6 重点回顾</h3>
<p>整数集合是集合键的底层实现之一。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>整数集合的底层实现为数组，这个数组以有序、无重复的方式保存集合元素，在有需要时，程序会根据新添加元素的类型，改变这个数组的类型。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>升级操作为整数集合带来了操作上的灵活性，并且尽可能地节约了内存。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>整数集合只支持升级操作，不支持降级操作。</p>
<h2 id="◆-第7章-压缩列表" tabindex="-1"><a class="header-anchor" href="#◆-第7章-压缩列表" aria-hidden="true">#</a> ◆ 第7章 压缩列表</h2>
<blockquote>
<p>压缩列表（ziplist）是列表键和哈希键的底层实现之一。当一个列表键只包含少量列表项，并且每个列表项要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做列表键的底层实现。</p>
</blockquote>
<blockquote>
<p>当一个哈希键只包含少量键值对，比且每个键值对的键和值要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做哈希键的底层实现。</p>
</blockquote>
<blockquote>
<p>哈希键里面包含的所有键和值都是小整数值或者短字符串。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201135823469.png" alt="image-20211201135823469"></p>
</blockquote>
<p>​			<img src="\img\Redis设计与实现\image-20211201135913887.png" alt="image-20211201135913887" style="zoom:80%;" /></p>
<h3 id="_7-1-压缩列表的构成" tabindex="-1"><a class="header-anchor" href="#_7-1-压缩列表的构成" aria-hidden="true">#</a> 7.1 压缩列表的构成</h3>
<blockquote>
<p>压缩列表是Redis为了节约内存而开发的，是由一系列特殊编码的连续内存块组成的顺序型（sequential）数据结构。一个压缩列表可以包含任意多个节点（entry），每个节点可以保存一个字节数组或者一个整数值。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201140026759.png" alt="image-20211201140026759"></p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201140339135.png" alt="image-20211201140339135" style="zoom:80%;" />
>
每个压缩列表节点可以保存一个字节数组或者一个整数值，其中，字节数组可以是以下三种长度的其中一种：
>
</blockquote>
<p>长度小于等于63（2 6–1）字节的字节数组；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>长度小于等于16383（2 14–1）字节的字节数组；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>长度小于等于4294967295（2 32–1）字节的字节数组；而整数值则可以是以下六种长度的其中一种：</p>
<blockquote>
<blockquote></blockquote>
<p>​		❑4位长，介于0至12之间的无符号整数；</p>
<blockquote></blockquote>
<p>​		❑1字节长的有符号整数；</p>
<blockquote></blockquote>
<p>​		❑3字节长的有符号整数；</p>
<blockquote></blockquote>
<p>​		❑int16_t类型整数；</p>
<blockquote></blockquote>
<p>​		❑int32_t类型整数；</p>
<blockquote></blockquote>
<p>​		❑int64_t类型整数。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201140556596.png" alt="image-20211201140556596"></p>
<blockquote></blockquote>
<p>每个节点的previous_entry_length属性都记录了前一个节点的长度：</p>
<blockquote></blockquote>
<p>​		❑如果前一节点的长度小于254字节，那么previous_entry_length属性需要用1字节长的空间来保存这个长度值。</p>
<blockquote></blockquote>
<p>​		❑如果前一节点的长度大于等于254字节，那么previous_entry_length属性需要用5字节长的空间来保存这个长度值。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201140839214.png" alt="image-20211201140839214"></p>
</blockquote>
<h3 id="_7-5-重点回顾" tabindex="-1"><a class="header-anchor" href="#_7-5-重点回顾" aria-hidden="true">#</a> 7.5 重点回顾</h3>
<p>压缩列表是一种为节约内存而开发的顺序型数据结构。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>压缩列表被用作列表键和哈希键的底层实现之一。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>压缩列表可以包含多个节点，每个节点可以保存一个字节数组或者整数值。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>添加新节点到压缩列表，或者从压缩列表中删除节点，可能会引发连锁更新操作，但这种操作出现的几率并不高。</p>
<h2 id="◆-第8章-对象" tabindex="-1"><a class="header-anchor" href="#◆-第8章-对象" aria-hidden="true">#</a> ◆ 第8章 对象</h2>
<blockquote>
<p>Redis用到的所有主要数据结构，比如简单动态字符串（SDS）、双端链表、字典、压缩列表、整数集合等等。</p>
</blockquote>
<blockquote>
<p>Redis并没有直接使用这些数据结构来实现键值对数据库，而是基于这些数据结构创建了一个对象系统，这个系统包含字符串对象、列表对象、哈希对象、集合对象和有序集合对象这五种类型的对象，每种对象都用到了至少一种我们前面所介绍的数据结构。</p>
</blockquote>
<blockquote>
<p>通过这五种不同类型的对象，Redis可以在执行命令之前，根据对象的类型来判断一个对象是否可以执行给定的命令。使用对象的另一个好处是，我们可以针对不同的使用场景，为对象设置多种不同的数据结构实现，从而优化对象在不同场景下的使用效率。</p>
</blockquote>
<blockquote>
<p>Redis的对象系统还实现了基于引用计数技术的内存回收机制，当程序不再使用某个对象的时候，这个对象所占用的内存就会被自动释放；另外，Redis还通过引用计数技术实现了对象共享机制，这一机制可以在适当的条件下，通过让多个数据库键共享同一个对象来节约内存。</p>
</blockquote>
<blockquote>
<p>Redis的对象带有访问时间记录信息，该信息可以用于计算数据库键的空转时长，在服务器启用了maxmemory功能的情况下，空转时长较大的那些键可能会优先被服务器删除。</p>
</blockquote>
<h3 id="_8-1-对象的类型与编码" tabindex="-1"><a class="header-anchor" href="#_8-1-对象的类型与编码" aria-hidden="true">#</a> 8.1 对象的类型与编码</h3>
<blockquote>
<p>Redis使用对象来表示数据库中的键和值，每次当我们在Redis的数据库中新创建一个键值对时，我们至少会创建两个对象，一个对象用作键值对的键（键对象），另一个对象用作键值对的值（值对象）。</p>
</blockquote>
<blockquote>
<p>Redis中的每个对象都由一个redisObject结构表示，该结构中和保存数据有关的三个属性分别是type属性、encoding属性和ptr属性.</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201141954497.png" alt="image-20211201141954497" style="zoom:67%;" />
</blockquote>
<blockquote>
<p>对于Redis数据库保存的键值对来说，键总是一个字符串对象，而值则可以是字符串对象、列表对象、哈希对象、集合对象或者有序集合对象的其中一种.</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201142042008.png" alt="image-20211201142042008" style="zoom:50%;" />
</blockquote>
<blockquote>
<p>当我们称呼一个数据库键为“字符串键”时，我们指的是“这个数据库键所对应的值为字符串对象”；</p>
</blockquote>
<blockquote>
<p>当我们称呼一个键为“列表键”时，我们指的是“这个数据库键所对应的值为列表对象”。</p>
</blockquote>
<blockquote>
<p>当我们对一个数据库键执行TYPE命令时，命令返回的结果为数据库键对应的值对象的类型，而不是键对象的类型</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201142137882.png" alt="image-20211201142137882" style="zoom:50%;" />
</blockquote>
<blockquote>
<p>对象的ptr指针指向对象的底层实现数据结构，而这些数据结构由对象的encoding属性决定。</p>
</blockquote>
<blockquote>
<p>encoding属性记录了对象所使用的编码，也即是说这个对象使用了什么数据结构作为对象的底层实现</p>
</blockquote>
<blockquote>
<p>使用OBJECT ENCODING命令可以查看一个数据库键的值对象的编码</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201142247781.png" alt="image-20211201142247781"></p>
</blockquote>
<blockquote>
<p>在列表对象包含的元素比较少时，Redis使用压缩列表作为列表对象的底层实现：</p>
<blockquote></blockquote>
</blockquote>
<p>因为压缩列表比双端链表更节约内存，并且在元素数量较少时，在内存中以连续块方式保存的压缩列表比起双端链表可以更快被载入到缓存中；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>随着列表对象包含的元素越来越多，使用压缩列表来保存元素的优势逐渐消失时，对象就会将底层实现从压缩列表转向功能更强、也更适合保存大量元素的双端链表上面；</p>
<blockquote>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201142425917.png" alt="image-20211201142425917"></p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201142625475.png" alt="image-20211201142625475" style="zoom: 80%;" />
</blockquote>
<h3 id="_8-2-字符串对象" tabindex="-1"><a class="header-anchor" href="#_8-2-字符串对象" aria-hidden="true">#</a> 8.2 字符串对象</h3>
<blockquote>
<p>字符串对象的编码可以是int、raw或者embstr。</p>
<blockquote></blockquote>
</blockquote>
<blockquote>
<img src="\img\Redis设计与实现\image-20211201142921563.png" alt="image-20211201142921563" style="zoom:50%;" />
>
如果字符串对象保存的是一个字符串值，并且这个字符串值的长度大于32字节，那么字符串对象将使用一个简单动态字符串（SDS）来保存这个字符串值，并将对象的编码设置为raw。
>
如果字符串对象保存的是一个字符串值，并且这个字符串值的长度小于等于32字节，那么字符串对象将使用embstr编码的方式来保存这个字符串值。
>
![image-20211201143221348](\img\Redis设计与实现\image-20211201143221348.png)
>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201143250330.png" alt="image-20211201143250330" style="zoom: 67%;" />
>
embstr编码是专门用于保存短字符串的一种优化编码方式，这种编码和raw编码一样，都使用redisObject结构和sdshdr结构来表示字符串对象，但raw编码会调用两次内存分配函数来分别创建redisObject结构和sdshdr结构，而embstr编码则通过调用一次内存分配函数来分配一块连续的空间，空间中依次包含redisObject和sdshdr两个结构
>
embstr编码的字符串对象在执行命令时，产生的效果和raw编码的字符串对象执行命令时产生的效果是相同的，但使用embstr编码的字符串对象来保存短字符串值有以下好处：
>
>​		❑embstr编码将创建字符串对象所需的内存分配次数从raw编码的两次降低为一次。
>>
>​		❑释放embstr编码的字符串对象只需要调用一次内存释放函数，而释放raw编码的字符串对象需要调用两次内存释放函数。
>>
>​		❑因为embstr编码的字符串对象的所有数据都保存在一块连续的内存里面，所以这种编码的字符串对象比起raw编码的字符串对象能够更好地利用缓存带来的优势。
>>
>如果一个字符串对象保存的是整数值，并且这个整数值可以用long类型来表示，那么字符串对象会将整数值保存在字符串对象结构的ptr属性里面（将void*转换成long），并将字符串对象的编码设置为int。
>>
>![image-20211201143851783](\img\Redis设计与实现\image-20211201143851783.png)
</blockquote>
<h3 id="_8-3-列表对象" tabindex="-1"><a class="header-anchor" href="#_8-3-列表对象" aria-hidden="true">#</a> 8.3 列表对象</h3>
<blockquote>
<p>列表对象的编码可以是ziplist或者linkedlist。</p>
</blockquote>
<blockquote>
<p>ziplist编码的列表对象使用压缩列表作为底层实现，每个压缩列表节点（entry）保存了一个列表元素。举个例子，如果我们执行以下RPUSH命令，那么服务器将创建一个列表对象作为numbers键的值.</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201154645562.png" alt="image-20211201154645562"></p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201154910695.png" alt="image-20211201154910695" style="zoom:80%;" />
>
<img src="\img\Redis设计与实现\image-20211201155024489.png" alt="image-20211201155024489" style="zoom: 67%;" />
</blockquote>
<blockquote>
<p>字符串对象是Redis五种类型的对象中唯一一种会被其他四种类型对象嵌套的对象。</p>
</blockquote>
<blockquote>
<p>当列表对象可以同时满足以下两个条件时，列表对象使用ziplist编码：</p>
<blockquote></blockquote>
<p>​		❑列表对象保存的所有字符串元素的长度都小于64字节；</p>
<blockquote></blockquote>
<p>​		❑列表对象保存的元素数量小于512个；不能满足这两个条件的列表对象需要使用linkedlist编码。</p>
<blockquote></blockquote>
<p>​		以上两个条件的上限值是可以修改的，具体请看配置文件中关于list-max-ziplist-value选项和list-max-ziplist-entries选项的说明。</p>
</blockquote>
<blockquote>
<p>对于使用ziplist编码的列表对象来说，当使用ziplist编码所需的两个条件的任意一个不能被满足时，对象的编码转换操作就会被执行，原本保存在压缩列表里的所有列表元素都会被转移并保存到双端链表里面，对象的编码也会从ziplist变为linkedlist。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201155306094.png" alt="image-20211201155306094" style="zoom:80%;" />
>
![image-20211201155401232](\img\Redis设计与实现\image-20211201155401232.png)
</blockquote>
<h3 id="_8-4-哈希对象" tabindex="-1"><a class="header-anchor" href="#_8-4-哈希对象" aria-hidden="true">#</a> 8.4 哈希对象</h3>
<blockquote>
<p>哈希对象的编码可以是ziplist或者hashtable。</p>
</blockquote>
<blockquote>
<p>ziplist编码的哈希对象使用压缩列表作为底层实现，每当有新的键值对要加入到哈希对象时，程序会先将保存了键的压缩列表节点推入到压缩列表表尾，然后再将保存了值的压缩列表节点推入到压缩列表表尾，因此：❑保存了同一键值对的两个节点总是紧挨在一起，保存键的节点在前，保存值的节点在后；❑先添加到哈希对象中的键值对会被放在压缩列表的表头方向，而后来添加到哈希对象中的键值对会被放在压缩列表的表尾方向。</p>
</blockquote>
<blockquote>
<p>hashtable编码的哈希对象使用字典作为底层实现，哈希对象中的每个键值对都使用一个字典键值对来保存：❑字典的每个键都是一个字符串对象，对象中保存了键值对的键；❑字典的每个值都是一个字符串对象，对象中保存了键值对的值。</p>
</blockquote>
<blockquote>
<p>当哈希对象可以同时满足以下两个条件时，哈希对象使用ziplist编码：❑哈希对象保存的所有键值对的键和值的字符串长度都小于64字节；❑哈希对象保存的键值对数量小于512个；不能满足这两个条件的哈希对象需要使用hashtable编码。</p>
</blockquote>
<blockquote>
<p>对于使用ziplist编码的列表对象来说，当使用ziplist编码所需的两个条件的任意一个不能被满足时，对象的编码转换操作就会被执行，原本保存在压缩列表里的所有键值对都会被转移并保存到字典里面，对象的编码也会从ziplist变为hashtable。</p>
</blockquote>
<blockquote>
<p>除了键的长度太大会引起编码转换之外，值的长度太大也会引起编码转换</p>
</blockquote>
<blockquote>
<p>因为哈希键的值为哈希对象，所以用于哈希键的所有命令都是针对哈希对象来构建的</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201171821891.png" alt="image-20211201171821891"></p>
</blockquote>
<h3 id="_8-5-集合对象" tabindex="-1"><a class="header-anchor" href="#_8-5-集合对象" aria-hidden="true">#</a> 8.5 集合对象</h3>
<blockquote>
<p>集合对象的编码可以是intset或者hashtable。intset编码的集合对象使用整数集合作为底层实现，集合对象包含的所有元素都被保存在整数集合里面。</p>
</blockquote>
<blockquote>
<p>hashtable编码的集合对象使用字典作为底层实现，字典的每个键都是一个字符串对象，每个字符串对象包含了一个集合元素，而字典的值则全部被设置为NULL。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201172053827.png" alt="image-20211201172053827" style="zoom:67%;" />
>
当集合对象可以同时满足以下两个条件时，对象使用intset编码：
>
</blockquote>
<p>集合对象保存的所有元素都是整数值；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>集合对象保存的元素数量不超过512个。</p>
<blockquote>
<blockquote></blockquote>
<p>不能满足这两个条件的集合对象需要使用hashtable编码。第二个条件的上限值是可以修改的，具体请看配置文件中关于set-max-intset-entries选项的说明。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201172405013.png" alt="image-20211201172405013"></p>
</blockquote>
<h3 id="_8-6-有序集合对象" tabindex="-1"><a class="header-anchor" href="#_8-6-有序集合对象" aria-hidden="true">#</a> 8.6 有序集合对象</h3>
<blockquote>
<p>有序集合的编码可以是ziplist或者skiplist。</p>
</blockquote>
<blockquote>
<p>ziplist编码的压缩列表对象使用压缩列表作为底层实现，每个集合元素使用两个紧挨在一起的压缩列表节点来保存，第一个节点保存元素的成员（member），而第二个元素则保存元素的分值（score）。</p>
</blockquote>
<blockquote>
<p>压缩列表内的集合元素按分值从小到大进行排序，分值较小的元素被放置在靠近表头的方向，而分值较大的元素则被放置在靠近表尾的方向。</p>
</blockquote>
<blockquote>
<p>skiplist编码的有序集合对象使用zset结构作为底层实现，一个zset结构同时包含一个字典和一个跳跃表</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201172744205.png" alt="image-20211201172744205"></p>
</blockquote>
<blockquote>
<p>zset结构中的zsl跳跃表按分值从小到大保存了所有集合元素，每个跳跃表节点都保存了一个集合元素：跳跃表节点的object属性保存了元素的成员，而跳跃表节点的score属性则保存了元素的分值。通过这个跳跃表，程序可以对有序集合进行范围型操作，比如ZRANK、ZRANGE等命令就是基于跳跃表API来实现的。</p>
</blockquote>
<blockquote>
<p>zset结构中的dict字典为有序集合创建了一个从成员到分值的映射，字典中的每个键值对都保存了一个集合元素：字典的键保存了元素的成员，而字典的值则保存了元素的分值。通过这个字典，程序可以用O（1）复杂度查找给定成员的分值，ZSCORE命令就是根据这一特性实现的，而很多其他有序集合命令都在实现的内部用到了这一特性。</p>
</blockquote>
<blockquote>
<p>虽然zset结构同时使用跳跃表和字典来保存有序集合元素，但这两种数据结构都会通过指针来共享相同元素的成员和分值，所以同时使用跳跃表和字典来保存集合元素不会产生任何重复成员或者分值，也不会因此而浪费额外的内存。</p>
</blockquote>
<blockquote>
<p>为什么有序集合需要同时使用跳跃表和字典来实现？</p>
</blockquote>
<blockquote>
<p>在理论上，有序集合可以单独使用字典或者跳跃表的其中一种数据结构来实现，但无论单独使用字典还是跳跃表，在性能上对比起同时使用字典和跳跃表都会有所降低。举个例子，如果我们只使用字典来实现有序集合，那么虽然以O（1）复杂度查找成员的分值这一特性会被保留，但是，因为字典以无序的方式来保存集合元素，所以每次在执行范围型操作——比如ZRANK、ZRANGE等命令时，程序都需要对字典保存的所有元素进行排序，完成这种排序需要至少O（NlogN）时间复杂度，以及额外的O（N）内存空间（因为要创建一个数组来保存排序后的元素）。</p>
</blockquote>
<blockquote>
<p>另一方面，如果我们只使用跳跃表来实现有序集合，那么跳跃表执行范围型操作的所有优点都会被保留，但因为没有了字典，所以根据成员查找分值这一操作的复杂度将从O（1）上升为O（logN）。因为以上原因，为了让有序集合的查找和范围型操作都尽可能快地执行，Redis选择了同时使用字典和跳跃表两种数据结构来实现有序集合。</p>
</blockquote>
<blockquote>
<p>当有序集合对象可以同时满足以下两个条件时，对象使用ziplist编码：</p>
<blockquote></blockquote>
</blockquote>
<p>有序集合保存的元素数量小于128个；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>有序集合保存的所有元素成员的长度都小于64字节；</p>
<blockquote>
<blockquote></blockquote>
<p>不能满足以上两个条件的有序集合对象将使用skiplist编码。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201181327816.png" alt="image-20211201181327816" style="zoom:67%;" />
</blockquote>
<h3 id="_8-7-类型检查与命令多态" tabindex="-1"><a class="header-anchor" href="#_8-7-类型检查与命令多态" aria-hidden="true">#</a> 8.7 类型检查与命令多态</h3>
<blockquote>
<p>Redis中用于操作键的命令基本上可以分为两种类型。其中一种命令可以对任何类型的键执行，比如说DEL命令、EXPIRE命令、RENAME命令、TYPE命令、OBJECT命令等。</p>
<blockquote></blockquote>
<p>而另一种命令只能对特定类型的键执行，比如说：</p>
<blockquote></blockquote>
<p>​		❑SET、GET、APPEND、STRLEN等命令只能对字符串键执行；</p>
<blockquote></blockquote>
<p>​		❑HDEL、HSET、HGET、HLEN等命令只能对哈希键执行；</p>
<blockquote></blockquote>
<p>​		❑RPUSH、LPOP、LINSERT、LLEN等命令只能对列表键执行；</p>
<blockquote></blockquote>
<p>​		❑SADD、SPOP、SINTER、SCARD等命令只能对集合键执行；</p>
<blockquote></blockquote>
<p>​		❑ZADD、ZCARD、ZRANK、ZSCORE等命令只能对有序集合键执行；</p>
<blockquote></blockquote>
<p>Redis除了会根据值对象的类型来判断键是否能够执行指定命令之外，还会根据值对象的编码方式，选择正确的命令实现代码来执行命令。</p>
<blockquote></blockquote>
<p>类型特定命令所进行的类型检查是通过redisObject结构的type属性来实现的：❑在执行一个类型特定命令之前，服务器会先检查输入数据库键的值对象是否为执行命令所需的类型，如果是的话，服务器就对键执行指定的命令；❑否则，服务器将拒绝执行命令，并向客户端返回一个类型错误。</p>
</blockquote>
<blockquote>
<p>DEL、EXPIRE等命令和LLEN等命令的区别在于，前者是基于类型的多态——一个命令可以同时用于处理多种不同类型的键，而后者是基于编码的多态——一个命令可以同时用于处理多种不同编码。</p>
<blockquote></blockquote>
<p>举个例子，对于LLEN命令来说：</p>
<blockquote></blockquote>
<p>​		❑在执行LLEN命令之前，服务器会先检查输入数据库键的值对象是否为列表类型，也即是，检查值对象redisObject结构type属性的值是否为REDIS_LIST，如果是的话，服务器就对键执行LLEN命令；</p>
<blockquote></blockquote>
<p>​		❑否则的话，服务器就拒绝执行命令并向客户端返回一个类型错误；</p>
<blockquote></blockquote>
<p>如果我们对一个键执行LLEN命令，那么服务器除了要确保执行命令的是列表键之外，还需要根据键的值对象所使用的编码来选择正确的LLEN命令实现：</p>
<blockquote></blockquote>
<p>​		❑如果列表对象的编码为ziplist，那么说明列表对象的实现为压缩列表，程序将使用ziplistLen函数来返回列表的长度；</p>
<blockquote></blockquote>
<p>​		❑如果列表对象的编码为linkedlist，那么说明列表对象的实现为双端链表，程序将使用listLength函数来返回双端链表的长度；</p>
<blockquote></blockquote>
<p>借用面向对象方面的术语来说，我们可以认为LLEN命令是多态（polymorphism）的，只要执行LLEN命令的是列表键，那么无论值对象使用的是ziplist编码还是linkedlist编码，命令都可以正常执行。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201182728921.png" alt="image-20211201182728921"></p>
</blockquote>
<h3 id="_8-8-内存回收" tabindex="-1"><a class="header-anchor" href="#_8-8-内存回收" aria-hidden="true">#</a> 8.8 内存回收</h3>
<blockquote>
<p>因为C语言并不具备自动内存回收功能，所以Redis在自己的对象系统中构建了一个引用计数（reference counting）技术实现的内存回收机制，通过这一机制，程序可以通过跟踪对象的引用计数信息，在适当的时候自动释放对象并进行内存回收。</p>
</blockquote>
<blockquote>
<p>对象的引用计数信息会随着对象的使用状态而不断变化：</p>
<blockquote></blockquote>
</blockquote>
<p>在创建一个新对象时，引用计数的值会被初始化为1；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当对象被一个新程序使用时，它的引用计数值会被增一；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当对象不再被一个程序使用时，它的引用计数值会被减一；</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当对象的引用计数值变为0时，对象所占用的内存会被释放。</p>
<blockquote>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201182854212.png" alt="image-20211201182854212"></p>
<blockquote></blockquote>
</blockquote>
<h3 id="_8-9-对象共享" tabindex="-1"><a class="header-anchor" href="#_8-9-对象共享" aria-hidden="true">#</a> 8.9 对象共享</h3>
<blockquote>
<p>除了用于实现引用计数内存回收机制之外，对象的引用计数属性还带有对象共享的作用。举个例子，假设键A创建了一个包含整数值100的字符串对象作为值对象，如图8-20所示。如果这时键B也要创建一个同样保存了整数值100的字符串对象作为值对象，那么服务器有以下两种做法：1）为键B新创建一个包含整数值100的字符串对象；2）让键A和键B共享同一个字符串对象；以上两种方法很明显是第二种方法更节约内存。</p>
</blockquote>
<blockquote>
<p>在Redis中，让多个键共享同一个值对象需要执行以下两个步骤：1）将数据库键的值指针指向一个现有的值对象；2）将被共享的值对象的引用计数增一。</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201183701463.png" alt="image-20211201183701463" style="zoom:67%;" />
</blockquote>
<blockquote>
<p>共享对象机制对于节约内存非常有帮助，数据库中保存的相同值对象越多，对象共享机制就能节约越多的内存。</p>
</blockquote>
<blockquote>
<p>目前来说，Redis会在初始化服务器时，创建一万个字符串对象，这些对象包含了从0到9999的所有整数值，当服务器需要用到值为0到9999的字符串对象时，服务器就会使用这些共享对象，而不是新创建对象。</p>
</blockquote>
<blockquote>
<p>创建共享字符串对象的数量可以通过修改redis.h/REDIS_SHARED_INTEGERS常量来修改。</p>
</blockquote>
<blockquote>
<p>举个例子，如果我们创建一个值为100的键A，并使用OBJECT REFCOUNT命令查看键A的值对象的引用计数，我们会发现值对象的引用计数为2，</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201183923704.png" alt="image-20211201183923704"></p>
</blockquote>
<blockquote>
<p>引用这个值对象的两个程序分别是持有这个值对象的服务器程序，以及共享这个值对象的键A</p>
</blockquote>
<blockquote>
<p>这些共享对象不单单只有字符串键可以使用，那些在数据结构中嵌套了字符串对象的对象（linkedlist编码的列表对象、hashtable编码的哈希对象、hashtable编码的集合对象，以及zset编码的有序集合对象）都可以使用这些共享对象。</p>
<blockquote></blockquote>
<p>为什么Redis不共享包含字符串的对象？当服务器考虑将一个共享对象设置为键的值对象时，程序需要先检查给定的共享对象和键想创建的目标对象是否完全相同，只有在共享对象和目标对象完全相同的情况下，程序才会将共享对象用作键的值对象，而一个共享对象保存的值越复杂，验证共享对象和目标对象是否相同所需的复杂度就会越高，消耗的CPU时间也会越多：</p>
<blockquote></blockquote>
<p>​		□ 如果共享对象是保存整数值的字符串对象，那么验证操作的复杂度为O（1）；</p>
<blockquote></blockquote>
<p>​		□ 如果共享对象是保存字符串值的字符串对象，那么验证操作的复杂度为O（N）；</p>
<blockquote></blockquote>
<p>​		□ 如果共享对象是包含了多个值（或者对象的）对象，比如列表对象或者哈希对象，那么验证操作的复杂度将会是O（N 2）。</p>
<blockquote></blockquote>
<p>因此，尽管共享更复杂的对象可以节约更多的内存，但受到CPU时间的限制，Redis只对包含整数值的字符串对象进行共享。</p>
</blockquote>
<h3 id="_8-10-对象的空转时长" tabindex="-1"><a class="header-anchor" href="#_8-10-对象的空转时长" aria-hidden="true">#</a> 8.10 对象的空转时长</h3>
<blockquote>
<p>除了前面介绍过的type、encoding、ptr和refcount四个属性之外，redisObject结构包含的最后一个属性为lru属性，该属性记录了对象最后一次被命令程序访问的时间：</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201185723777.png" alt="image-20211201185723777"></p>
</blockquote>
<blockquote>
<p>OBJECT IDLETIME命令可以打印出给定键的空转时长，这一空转时长就是通过将当前时间减去键的值对象的lru时间计算得出的</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201185757085.png" alt="image-20211201185757085" style="zoom:67%;" />
>
除了可以被OBJECT IDLETIME命令打印出来之外，键的空转时长还有另外一项作用：如果服务器打开了maxmemory选项，并且服务器用于回收内存的算法为volatile-lru或者allkeys-lru，那么当服务器占用的内存数超过了maxmemory选项所设置的上限值时，空转时长较高的那部分键会优先被服务器释放，从而回收内存。
</blockquote>
<h3 id="_8-11-重点回顾" tabindex="-1"><a class="header-anchor" href="#_8-11-重点回顾" aria-hidden="true">#</a> 8.11 重点回顾</h3>
<p>Redis数据库中的每个键值对的键和值都是一个对象。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis共有字符串、列表、哈希、集合、有序集合五种类型的对象，每种类型的对象至少都有两种或以上的编码方式，不同的编码可以在不同的使用场景上优化对象的使用效率。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>服务器在执行某些命令之前，会先检查给定键的类型能否执行指定的命令，而检查一个键的类型就是检查键的值对象的类型。</p>
<p>Redis的对象系统带有引用计数实现的内存回收机制，当一个对象不再被使用时，该对象所占用的内存就会被自动释放。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>Redis会共享值为0到9999的字符串对象。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>对象会记录自己的最后一次被访问的时间，这个时间可以用于计算对象的空转时间。</p>
<h2 id="◆-第9章" tabindex="-1"><a class="header-anchor" href="#◆-第9章" aria-hidden="true">#</a> ◆ 第9章</h2>
<h3 id="_9-1-服务器中的数据库" tabindex="-1"><a class="header-anchor" href="#_9-1-服务器中的数据库" aria-hidden="true">#</a> 9.1 服务器中的数据库</h3>
<blockquote>
<p>Redis服务器将所有数据库都保存在服务器状态redis.h/redisServer结构的db数组中，db数组的每个项都是一个redis.h/redisDb结构，每个redisDb结构代表一个数据库</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201190127587.png" alt="image-20211201190127587"></p>
</blockquote>
<blockquote>
<p>在初始化服务器时，程序会根据服务器状态的dbnum属性来决定应该创建多少个数据库</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201191211861.png" alt="image-20211201191211861"></p>
</blockquote>
<blockquote>
<p>dbnum属性的值由服务器配置的database选项决定，默认情况下，该选项的值为16，所以Redis服务器默认会创建16个数据库</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201191256271.png" alt="image-20211201191256271" style="zoom:80%;" />
</blockquote>
<h3 id="_9-2-切换数据库" tabindex="-1"><a class="header-anchor" href="#_9-2-切换数据库" aria-hidden="true">#</a> 9.2 切换数据库</h3>
<blockquote>
<p>每个Redis客户端都有自己的目标数据库，每当客户端执行数据库写命令或者数据库读命令的时候，目标数据库就会成为这些命令的操作对象。默认情况下，Redis客户端的目标数据库为0号数据库，但客户端可以通过执行SELECT命令来切换目标数据库。</p>
</blockquote>
<blockquote>
<p>在服务器内部，客户端状态redisClient结构的db属性记录了客户端当前的目标数据库，这个属性是一个指向redisDb结构的指针</p>
<blockquote></blockquote>
<img src="\img\Redis设计与实现\image-20211201192140258.png" alt="image-20211201192140258" style="zoom:80%;" />
</blockquote>
<blockquote>
<p>通过修改redisClient.db指针，让它指向服务器中的不同数据库，从而实现切换目标数据库的功能——这就是SELECT命令的实现原理。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201192551129.png" alt="image-20211201192551129"></p>
</blockquote>
<blockquote>
<p>在执行Redis命令特别是像FLUSHDB这样的危险命令之前，最好先执行一个SELECT命令，显式地切换到指定的数据库，然后才执行别的命令。</p>
</blockquote>
<h3 id="_9-3-数据库键空间" tabindex="-1"><a class="header-anchor" href="#_9-3-数据库键空间" aria-hidden="true">#</a> 9.3 数据库键空间</h3>
<blockquote>
<p>Redis是一个键值对（key-value pair）数据库服务器，服务器中的每个数据库都由一个redis.h/redisDb结构表示，其中，redisDb结构的dict字典保存了数据库中的所有键值对，我们将这个字典称为键空间（key space</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201194324871.png" alt="image-20211201194324871"></p>
</blockquote>
<blockquote>
<p>键空间和用户所见的数据库是直接对应的：❑键空间的键也就是数据库的键，每个键都是一个字符串对象。❑键空间的值也就是数据库的值，每个值可以是字符串对象、列表对象、哈希表对象、集合对象和有序集合对象中的任意一种Redis对象。</p>
</blockquote>
<blockquote>
<p>因为数据库的键空间是一个字典，所以所有针对数据库的操作，比如添加一个键值对到数据库，或者从数据库中删除一个键值对，又或者在数据库中获取某个键值对等，实际上都是通过对键空间字典进行操作来实现的</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201194937944.png" alt="image-20211201194937944"></p>
</blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201195222417.png" alt="image-20211201195222417"></p>
<blockquote></blockquote>
<p>对一个数据库键进行取值，实际上就是在键空间中取出键所对应的值对象</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201195512012.png" alt="image-20211201195512012"></p>
</blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201195809976.png" alt="image-20211201195809976"></p>
<blockquote></blockquote>
<p>用于清空整个数据库的FLUSHDB命令，就是通过删除键空间中的所有键值对来实现的。</p>
</blockquote>
<blockquote>
<p>用于随机返回数据库中某个键的RANDOMKEY命令，就是通过在键空间中随机返回一个键来实现的。</p>
</blockquote>
<blockquote>
<p>用于返回数据库键数量的DBSIZE命令，就是通过返回键空间中包含的键值对的数量来实现的。类似的命令还有EXISTS、RENAME、KEYS等，这些命令都是通过对键空间进行操作来实现的。</p>
</blockquote>
<blockquote>
<p>当使用Redis命令对数据库进行读写时，服务器不仅会对键空间执行指定的读写操作，还会执行一些额外的维护操作，其中包括：</p>
<blockquote></blockquote>
<p>​		❑在读取一个键之后（读操作和写操作都要对键进行读取），服务器会根据键是否存在来更新服务器的键空间命中（hit）次数或键空间不命中（miss）次数，这两个值可以在INFO stats命令的keyspace_hits属性和keyspace_misses属性中查看。</p>
<blockquote></blockquote>
<p>​		❑在读取一个键之后，服务器会更新键的LRU（最后一次使用）时间，这个值可以用于计算键的闲置时间，使用OBJECT idletime命令可以查看键key的闲置时间。</p>
</blockquote>
<blockquote>
<p>​		❑如果服务器在读取一个键时发现该键已经过期，那么服务器会先删除这个过期键，然后才执行余下的其他操作</p>
</blockquote>
<blockquote>
<p>​		❑如果有客户端使用WATCH命令监视了某个键，那么服务器在对被监视的键进行修改之后，会将这个键标记为脏（dirty），从而让事务程序注意到这个键已经被修改过</p>
</blockquote>
<blockquote>
<p>​		❑服务器每次修改一个键之后，都会对脏（dirty）键计数器的值增1，这个计数器会触发服务器的持久化以及复制操作</p>
</blockquote>
<blockquote>
<p>​		❑如果服务器开启了数据库通知功能，那么在对键进行修改之后，服务器将按配置发送相应的数据库通知</p>
</blockquote>
<h3 id="_9-4-设置键的生存时间或过期时间" tabindex="-1"><a class="header-anchor" href="#_9-4-设置键的生存时间或过期时间" aria-hidden="true">#</a> 9.4 设置键的生存时间或过期时间</h3>
<blockquote>
<p>通过EXPIRE命令或者PEXPIRE命令，客户端可以以秒或者毫秒精度为数据库中的某个键设置生存时间（Time To Live，TTL），在经过指定的秒数或者毫秒数之后，服务器就会自动删除生存时间为0的键</p>
</blockquote>
<blockquote>
<p>SETEX命令可以在设置一个字符串键的同时为键设置过期时间，因为这个命令是一个类型限定的命令（只能用于字符串键）</p>
</blockquote>
<blockquote>
<p>客户端可以通过EXPIREAT命令或PEXPIREAT命令，以秒或者毫秒精度给数据库中的某个键设置过期时间（expiretime）</p>
</blockquote>
<blockquote>
<p>过期时间是一个UNIX时间戳，当键的过期时间来临时，服务器就会自动从数据库中删除这个键</p>
</blockquote>
<blockquote>
<p>Redis有四个不同的命令可以用于设置键的生存时间（键可以存在多久）或过期时间（键什么时候会被删除）：</p>
<blockquote></blockquote>
<p>​		❑EXPIRE＜key＞＜ttl＞命令用于将键key的生存时间设置为ttl秒。</p>
<blockquote></blockquote>
<p>​		❑PEXPIRE＜key＞＜ttl＞命令用于将键key的生存时间设置为ttl毫秒。</p>
<blockquote></blockquote>
<p>​		❑EXPIREAT＜key＞＜timestamp＞命令用于将键key的过期时间设置为timestamp所指定的秒数时间戳。</p>
<blockquote></blockquote>
<p>​		❑PEXPIREAT＜key＞＜timestamp＞命令用于将键key的过期时间设置为timestamp所指定的毫秒数时间戳。</p>
</blockquote>
<blockquote>
<p>redisDb结构的expires字典保存了数据库中所有键的过期时间，我们称这个字典为过期字典</p>
</blockquote>
<p>过期字典的键是一个指针，这个指针指向键空间中的某个键对象（也即是某个数据库键）。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>过期字典的值是一个long long类型的整数，这个整数保存了键所指向的数据库键的过期时间——一个毫秒精度的UNIX时间戳。</p>
<blockquote>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201215659022.png" alt="image-20211201215659022"></p>
</blockquote>
<blockquote>
<p>PERSIST命令就是PEXPIREAT命令的反操作：PERSIST命令在过期字典中查找给定的键，并解除键和值（过期时间）在过期字典中的关联。</p>
<blockquote></blockquote>
<p>键空间保存了数据库中的所有键值对，而过期字典则保存了数据库键的过期时间。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201220542808.png" alt="image-20211201220542808"></p>
</blockquote>
<blockquote>
<p>过期键的判定通过过期字典，程序可以用以下步骤检查一个给定键是否过期：1）检查给定键是否存在于过期字典：如果存在，那么取得键的过期时间。2）检查当前UNIX时间戳是否大于键的过期时间：如果是的话，那么键已经过期；否则的话，键未过期。</p>
</blockquote>
<h3 id="_9-5-过期键删除策略" tabindex="-1"><a class="header-anchor" href="#_9-5-过期键删除策略" aria-hidden="true">#</a> 9.5 过期键删除策略</h3>
<blockquote>
<p>如果一个键过期了，那么它什么时候会被删除呢？这个问题有三种可能的答案，它们分别代表了三种不同的删除策略：</p>
<blockquote></blockquote>
<p>​		❑定时删除：在设置键的过期时间的同时，创建一个定时器（timer），让定时器在键的过期时间来临时，立即执行对键的删除操作。</p>
<blockquote></blockquote>
<p>​		❑惰性删除：放任键过期不管，但是每次从键空间中获取键时，都检查取得的键是否过期，如果过期的话，就删除该键；如果没有过期，就返回该键。</p>
<blockquote></blockquote>
<p>​		❑定期删除：每隔一段时间，程序就对数据库进行一次检查，删除里面的过期键。至于要删除多少过期键，以及要检查多少个数据库，则由算法决定。</p>
</blockquote>
<blockquote>
<p>定时删除策略对内存是最友好的：通过使用定时器，定时删除策略可以保证过期键会尽可能快地被删除，并释放过期键所占用的内存。</p>
</blockquote>
<blockquote>
<p>定时删除策略的缺点是，它对CPU时间是最不友好的：在过期键比较多的情况下，删除过期键这一行为可能会占用相当一部分CPU时间，在内存不紧张但是CPU时间非常紧张的情况下，将CPU时间用在删除和当前任务无关的过期键上，无疑会对服务器的响应时间和吞吐量造成影响。</p>
</blockquote>
<blockquote>
<p>例如，如果正有大量的命令请求在等待服务器处理，并且服务器当前不缺少内存，那么服务器应该优先将CPU时间用在处理客户端的命令请求上面，而不是用在删除过期键上面。</p>
</blockquote>
<blockquote>
<p>创建一个定时器需要用到Redis服务器中的时间事件，而当前时间事件的实现方式——无序链表，查找一个事件的时间复杂度为O（N）——并不能高效地处理大量时间事件。</p>
</blockquote>
<blockquote>
<p>惰性删除策略对CPU时间来说是最友好的：程序只会在取出键时才对键进行过期检查，这可以保证删除过期键的操作只会在非做不可的情况下进行</p>
</blockquote>
<blockquote>
<p>惰性删除策略的缺点是，它对内存是最不友好的：如果一个键已经过期，而这个键又仍然保留在数据库中，那么只要这个过期键不被删除，它所占用的内存就不会释放。</p>
</blockquote>
<blockquote>
<p>在使用惰性删除策略时，如果数据库中有非常多的过期键，而这些过期键又恰好没有被访问到的话，那么它们也许永远也不会被删除（除非用户手动执行FLUSHDB），我们甚至可以将这种情况看作是一种内存泄漏——无用的垃圾数据占用了大量的内存，而服务器却不会自己去释放它们，这对于运行状态非常依赖于内存的Redis服务器来说，肯定不是一个好消息。</p>
</blockquote>
<p>定时删除占用太多CPU时间，影响服务器的响应时间和吞吐量。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>惰性删除浪费太多内存，有内存泄漏的危险。</p>
<p>定期删除策略每隔一段时间执行一次删除过期键操作，并通过限制删除操作执行的时长和频率来减少删除操作对CPU时间的影响。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>除此之外，通过定期删除过期键，定期删除策略有效地减少了因为过期键而带来的内存浪费。</p>
<h3 id="_9-6-redis的过期键删除策略" tabindex="-1"><a class="header-anchor" href="#_9-6-redis的过期键删除策略" aria-hidden="true">#</a> 9.6 Redis的过期键删除策略</h3>
<blockquote>
<p>Redis服务器实际使用的是惰性删除和定期删除两种策略：通过配合使用这两种删除策略，服务器可以很好地在合理使用CPU时间和避免浪费内存空间之间取得平衡。</p>
</blockquote>
<h3 id="_9-7-aof、rdb和复制功能对过期键的处理" tabindex="-1"><a class="header-anchor" href="#_9-7-aof、rdb和复制功能对过期键的处理" aria-hidden="true">#</a> 9.7 AOF、RDB和复制功能对过期键的处理</h3>
<blockquote>
<p><strong>生成RDB文件：</strong></p>
<blockquote></blockquote>
<p>在执行SAVE命令或者BGSAVE命令创建一个新的RDB文件时，程序会对数据库中的键进行检查，已过期的键不会被保存到新创建的RDB文件中。</p>
<blockquote></blockquote>
<p>举个例子，如果数据库中包含三个键k1、k2、k3，并且k2已经过期，那么当执行SAVE命令或者BGSAVE命令时，程序只会将k1和k3的数据保存到RDB文件中，而k2则会被忽略。</p>
<blockquote></blockquote>
<p><strong>载入RDB文件：</strong></p>
</blockquote>
<blockquote>
<p>在启动Redis服务器时，如果服务器开启了RDB功能，那么服务器将对RDB文件进行载入：</p>
<blockquote></blockquote>
<p>​		❑如果服务器以主服务器模式运行，那么在载入RDB文件时，程序会对文件中保存的键进行检查，未过期的键会被载入到数据库中，而过期键则会被忽略，所以过期键对载入RDB文件的主服务器不会造成影响。</p>
<blockquote></blockquote>
<p>​		❑如果服务器以从服务器模式运行，那么在载入RDB文件时，文件中保存的所有键，不论是否过期，都会被载入到数据库中。不过，因为主从服务器在进行数据同步的时候，从服务器的数据库就会被清空，所以一般来讲，过期键对载入RDB文件的从服务器也不会造成影响。</p>
</blockquote>
<blockquote>
<p><strong>AOF文件写入：</strong></p>
<blockquote></blockquote>
<p>当服务器以AOF持久化模式运行时，如果数据库中的某个键已经过期，但它还没有被惰性删除或者定期删除，那么AOF文件不会因为这个过期键而产生任何影响。</p>
</blockquote>
<blockquote>
<p>当过期键被惰性删除或者定期删除之后，程序会向AOF文件追加（append）一条DEL命令，来显式地记录该键已被删除。</p>
</blockquote>
<blockquote>
<p>举个例子，如果客户端使用GET message命令，试图访问过期的message键，那么服务器将执行以下三个动作：</p>
<blockquote></blockquote>
<p>​		1）从数据库中删除message键。</p>
<blockquote></blockquote>
<p>​		2）追加一条DEL message命令到AOF文件。</p>
<blockquote></blockquote>
<p>​		3）向执行GET命令的客户端返回空回复。</p>
</blockquote>
<blockquote>
<p><strong>AOF重写：</strong></p>
<blockquote></blockquote>
<p>和生成RDB文件时类似，在执行AOF重写的过程中，程序会对数据库中的键进行检查，已过期的键不会被保存到重写后的AOF文件中。</p>
</blockquote>
<blockquote>
<p>数据库中包含过期键不会对AOF重写造成影响。</p>
<blockquote></blockquote>
<p><strong>复制：</strong></p>
</blockquote>
<blockquote>
<p>当服务器运行在复制模式下时，从服务器的过期键删除动作由主服务器控制：</p>
<blockquote></blockquote>
<p>​		❑主服务器在删除一个过期键之后，会显式地向所有从服务器发送一个DEL命令，告知从服务器删除这个过期键。</p>
<blockquote></blockquote>
<p>​		❑从服务器在执行客户端发送的读命令时，即使碰到过期键也不会将过期键删除，而是继续像处理未过期的键一样来处理过期键。</p>
<blockquote></blockquote>
<p>​		❑从服务器只有在接到主服务器发来的DEL命令之后，才会删除过期键。</p>
</blockquote>
<blockquote>
<p>通过由主服务器来控制从服务器统一地删除过期键，可以保证主从服务器数据的一致性，也正是因为这个原因，当一个过期键仍然存在于主服务器的数据库时，这个过期键在从服务器里的复制品也会继续存在。</p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201223903546.png" alt="image-20211201223903546"></p>
<blockquote></blockquote>
<p><img src="@source/docs/theme-reco/img/Redis设计与实现/image-20211201223932997.png" alt="image-20211201223932997"></p>
</blockquote>
<h3 id="_9-8-数据库通知" tabindex="-1"><a class="header-anchor" href="#_9-8-数据库通知" aria-hidden="true">#</a> 9.8 数据库通知</h3>
<blockquote>
<p>数据库通知是Redis 2.8版本新增加的功能，这个功能可以让客户端通过订阅给定的频道或者模式，来获知数据库中键的变化，以及数据库中命令的执行情况。</p>
</blockquote>
<blockquote>
<p>这一类关注“某个键执行了什么命令”的通知称为键空间通知（key-spacenotification），除此之外，还有另一类称为键事件通知（key-eventnotification）的通知，它们关注的是“某个命令被什么键执行了”。</p>
</blockquote>
<blockquote>
<p>发送数据库通知的功能是由notify.c/notifyKeyspaceEvent函数实现的</p>
</blockquote>
<blockquote>
<p>每当一个Redis命令需要发送数据库通知的时候，该命令的实现函数就会调用notify-KeyspaceEvent函数，并向函数传递传递该命令所引发的事件的相关信息。</p>
</blockquote>
<h3 id="_9-9-重点回顾" tabindex="-1"><a class="header-anchor" href="#_9-9-重点回顾" aria-hidden="true">#</a> 9.9 重点回顾</h3>
<p>Redis服务器的所有数据库都保存在redisServer.db数组中，而数据库的数量则由redisServer.dbnum属性保存。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>客户端通过修改目标数据库指针，让它指向redisServer.db数组中的不同元素来切换不同的数据库。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>数据库主要由dict和expires两个字典构成，其中dict字典负责保存键值对，而expires字典则负责保存键的过期时间。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>因为数据库由字典构成，所以对数据库的操作都是建立在字典操作之上的。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>数据库的键总是一个字符串对象，而值则可以是任意一种Redis对象类型，包括字符串对象、哈希表对象、集合对象、列表对象和有序集合对象，分别对应字符串键、哈希表键、集合键、列表键和有序集合键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>expires字典的键指向数据库中的某个键，而值则记录了数据库键的过期时间，过期时间是一个以毫秒为单位的UNIX时间戳。</p>
<p>Redis使用惰性删除和定期删除两种策略来删除过期的键：惰性删除策略只在碰到过期键时才进行删除操作，定期删除策略则每隔一段时间主动查找并删除过期键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>执行SAVE命令或者BGSAVE命令所产生的新RDB文件不会包含已经过期的键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>执行BGREWRITEAOF命令所产生的重写AOF文件不会包含已经过期的键。</p>
<p>当一个过期键被删除之后，服务器会追加一条DEL命令到现有AOF文件的末尾，显式地删除过期键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当主服务器删除一个过期键之后，它会向所有从服务器发送一条DEL命令，显式地删除过期键。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>从服务器即使发现过期键也不会自作主张地删除它，而是等待主节点发来DEL命令，这种统一、中心化的过期键删除策略可以保证主从服务器数据的一致性。</p>
<blockquote>
<blockquote></blockquote>
</blockquote>
<p>当Redis命令对数据库进行修改之后，服务器会根据配置向客户端发送数据库通知。</p>
<h2 id="◆-第10章-rdb持久化" tabindex="-1"><a class="header-anchor" href="#◆-第10章-rdb持久化" aria-hidden="true">#</a> ◆ 第10章 RDB持久化</h2>
<blockquote>
<p>将服务器中的非空数据库以及它们的键值对统称为数据库状态。</p>
</blockquote>
<blockquote>
<p>因为Redis是内存数据库，它将自己的数据库状态储存在内存里面，所以如果不想办法将储存在内存中的数据库状态保存到磁盘里面，那么一旦服务器进程退出，服务器中的数据库状态也会消失不见。</p>
</blockquote>
<blockquote>
<p>Redis提供了RDB持久化功能，这个功能可以将Redis在内存中的数据库状态保存到磁盘里面，避免数据意外丢失</p>
</blockquote>
<blockquote>
<p>DB持久化既可以手动执行，也可以根据服务器配置选项定期执行，该功能可以将某个时间点上的数据库状态保存到一个RDB文件中</p>
</blockquote>
<blockquote>
<p>RDB持久化功能所生成的RDB文件是一个经过压缩的二进制文件，通过该文件可以还原生成RDB文件时的数据库状态</p>
</blockquote>
<blockquote>
<p>因为RDB文件是保存在硬盘里面的，所以即使Redis服务器进程退出，甚至运行Redis服务器的计算机停机，但只要RDB文件仍然存在，Redis服务器就可以用它来还原数据库状态。</p>
</blockquote>
<p>◆ 10.1 RDB文件的创建与载入</p>
<blockquote>
<p>有两个Redis命令可以用于生成RDB文件，一个是SAVE，另一个是BGSAVE。</p>
</blockquote>
<blockquote>
<p>SAVE命令会阻塞Redis服务器进程，直到RDB文件创建完毕为止，在服务器进程阻塞期间，服务器不能处理任何命令请求</p>
</blockquote>
<blockquote>
<p>和SAVE命令直接阻塞服务器进程的做法不同，BGSAVE命令会派生出一个子进程，然后由子进程负责创建RDB文件，服务器进程（父进程）继续处理命令请求</p>
</blockquote>
<blockquote>
<p>创建RDB文件的实际工作由rdb.c/rdbSave函数完成，SAVE命令和BGSAVE命令会以不同的方式调用这个函数</p>
</blockquote>
<blockquote>
<p>和使用SAVE命令或者BGSAVE命令创建RDB文件不同，RDB文件的载入工作是在服务器启动时自动执行的，所以Redis并没有专门用于载入RDB文件的命令，只要Redis服务器在启动时检测到RDB文件存在，它就会自动载入RDB文件。</p>
</blockquote>
<blockquote>
<p>因为AOF文件的更新频率通常比RDB文件的更新频率高，所以：❑如果服务器开启了AOF持久化功能，那么服务器会优先使用AOF文件来还原数据库状态。❑只有在AOF持久化功能处于关闭状态时，服务器才会使用RDB文件来还原数据库状态。</p>
</blockquote>
<blockquote>
<p>当SAVE命令执行时，Redis服务器会被阻塞，所以当SAVE命令正在执行时，客户端发送的所有命令请求都会被拒绝。只有在服务器执行完SAVE命令、重新开始接受命令请求之后，客户端发送的命令才会被处理。</p>
</blockquote>
<blockquote>
<p>因为BGSAVE命令的保存工作是由子进程执行的，所以在子进程创建RDB文件的过程中，Redis服务器仍然可以继续处理客户端的命令请求，但是，在BGSAVE命令执行期间，服务器处理SAVE、BGSAVE、BGREWRITEAOF三个命令的方式会和平时有所不同。</p>
</blockquote>
<blockquote>
<p>在BGSAVE命令执行期间，客户端发送的SAVE命令会被服务器拒绝，服务器禁止SAVE命令和BGSAVE命令同时执行是为了避免父进程（服务器进程）和子进程同时执行两个rdbSave调用，防止产生竞争条件。</p>
</blockquote>
<blockquote>
<p>在BGSAVE命令执行期间，客户端发送的BGSAVE命令会被服务器拒绝，因为同时执行两个BGSAVE命令也会产生竞争条件。</p>
</blockquote>
<blockquote>
<p>BGREWRITEAOF和BGSAVE两个命令不能同时执行：❑如果BGSAVE命令正在执行，那么客户端发送的BGREWRITEAOF命令会被延迟到BGSAVE命令执行完毕之后执行。❑如果BGREWRITEAOF命令正在执行，那么客户端发送的BGSAVE命令会被服务器拒绝。</p>
</blockquote>
<blockquote>
<p>因为BGREWRITEAOF和BGSAVE两个命令的实际工作都由子进程执行，所以这两个命令在操作方面并没有什么冲突的地方，不能同时执行它们只是一个性能方面的考虑——并发出两个子进程，并且这两个子进程都同时执行大量的磁盘写入操作，这怎么想都不会是一个好主意。</p>
</blockquote>
<blockquote>
<p>服务器在载入RDB文件期间，会一直处于阻塞状态，直到载入工作完成为止。</p>
</blockquote>
<p>◆ 10.2 自动间隔性保存</p>
<blockquote>
<p>因为BGSAVE命令可以在不阻塞服务器进程的情况下执行，所以Redis允许用户通过设置服务器配置的save选项，让服务器每隔一段时间自动执行一次BGSAVE命令。</p>
</blockquote>
<blockquote>
<p>用户可以通过save选项设置多个保存条件，但只要其中任意一个条件被满足，服务器就会执行BGSAVE命令。</p>
</blockquote>
<blockquote>
<p>那么只要满足以下三个条件中的任意一个，BGSAVE命令就会被执行：❑服务器在900秒之内，对数据库进行了至少1次修改。❑服务器在300秒之内，对数据库进行了至少10次修改。❑服务器在60秒之内，对数据库进行了至少10000次修改。</p>
</blockquote>
<blockquote>
<p>服务器程序会根据save选项所设置的保存条件，设置服务器状态redisServer结构的saveparams属性</p>
</blockquote>
<blockquote>
<p>saveparams属性是一个数组，数组中的每个元素都是一个saveparam结构，每个saveparam结构都保存了一个save选项设置的保存条件</p>
</blockquote>
<blockquote>
<p>除了saveparams数组之外，服务器状态还维持着一个dirty计数器，以及一个lastsave属性</p>
</blockquote>
<p>dirty计数器记录距离上一次成功执行SAVE命令或者BGSAVE命令之后，服务器对数据库状态（服务器中的所有数据库）进行了多少次修改（包括写入、删除、更新等操作）。❑lastsave属性是一个UNIX时间戳，记录了服务器上一次成功执行SAVE命令或者BGSAVE命令的时间。</p>
<blockquote>
<p>当服务器成功执行一个数据库修改命令之后，程序就会对dirty计数器进行更新：命令修改了多少次数据库，dirty计数器的值就增加多少。</p>
</blockquote>
<p>dirty计数器的值为123，表示服务器在上次保存之后，对数据库状态共进行了123次修改。❑lastsave属性则记录了服务器上次执行保存操作的时间1378270800（2013年9月4日零时）。</p>
<blockquote>
<p>Redis的服务器周期性操作函数serverCron默认每隔100毫秒就会执行一次，该函数用于对正在运行的服务器进行维护，它的其中一项工作就是检查save选项所设置的保存条件是否已经满足，如果满足的话，就执行BGSAVE命令。</p>
</blockquote>
<blockquote>
<p>程序会遍历并检查saveparams数组中的所有保存条件，只要有任意一个条件被满足，那么服务器就会执行BGSAVE命令。</p>
</blockquote>
<p>◆ 10.3 RDB文件结构</p>
<blockquote>
<p>图10-10展示了一个完整RDB文件所包含的各个部分。</p>
</blockquote>
<blockquote>
<p>RDB文件的最开头是REDIS部分，这个部分的长度为5字节，保存着“REDIS”五个字符。通过这五个字符，程序可以在载入文件时，快速检查所载入的文件是否RDB文件。</p>
</blockquote>
<blockquote>
<p>因为RDB文件保存的是二进制数据，而不是C字符串</p>
</blockquote>
<blockquote>
<p>db_version长度为4字节，它的值是一个字符串表示的整数，这个整数记录了RDB文件的版本号，比如&quot;0006&quot;就代表RDB文件的版本为第六版。</p>
</blockquote>
<blockquote>
<p>databases部分包含着零个或任意多个数据库，以及各个数据库中的键值对数据：❑如果服务器的数据库状态为空（所有数据库都是空的），那么这个部分也为空，长度为0字节。❑如果服务器的数据库状态为非空（有至少一个数据库非空），那么这个部分也为非空，根据数据库所保存键值对的数量、类型和内容不同，这个部分的长度也会有所不同。</p>
</blockquote>
<blockquote>
<p>EOF常量的长度为1字节，这个常量标志着RDB文件正文内容的结束，当读入程序遇到这个值的时候，它知道所有数据库的所有键值对都已经载入完毕了。</p>
</blockquote>
<blockquote>
<p>check_sum是一个8字节长的无符号整数，保存着一个校验和，这个校验和是程序通过对REDIS、db_version、databases、EOF四个部分的内容进行计算得出的。服务器在载入RDB文件时，会将载入数据所计算出的校验和与check_sum所记录的校验和进行对比，以此来检查RDB文件是否有出错或者损坏的情况出现。</p>
</blockquote>
<blockquote>
<p>每个非空数据库在RDB文件中都可以保存为SELECTDB、db_number、key_value_pairs三个部分</p>
</blockquote>
<blockquote>
<p>SELECTDB常量的长度为1字节，当读入程序遇到这个值的时候，它知道接下来要读入的将是一个数据库号码。</p>
</blockquote>
<blockquote>
<p>db_number保存着一个数据库号码，根据号码的大小不同，这个部分的长度可以是1字节、2字节或者5字节。当程序读入db_number部分之后，服务器会调用SELECT命令，根据读入的数据库号码进行数据库切换，使得之后读入的键值对可以载入到正确的数据库中。</p>
</blockquote>
<blockquote>
<p>key_value_pairs部分保存了数据库中的所有键值对数据，如果键值对带有过期时间，那么过期时间也会和键值对保存在一起。根据键值对的数量、类型、内容以及是否有过期时间等条件的不同，key_value_pairs部分的长度也会有所不同。</p>
</blockquote>
<blockquote>
<p>RDB文件中的每个key_value_pairs部分都保存了一个或以上数量的键值对，如果键值对带有过期时间的话，那么键值对的过期时间也会被保存在内。</p>
</blockquote>
<blockquote>
<p>不带过期时间的键值对在RDB文件中由TYPE、key、value三部分组成</p>
</blockquote>
<blockquote>
<p>TYPE记录了value的类型，长度为1字节，值可以是以下常量的其中一个：❑REDIS_RDB_TYPE_STRING❑REDIS_RDB_TYPE_LIST❑REDIS_RDB_TYPE_SET❑REDIS_RDB_TYPE_ZSET❑REDIS_RDB_TYPE_HASH❑REDIS_RDB_TYPE_LIST_ZIPLIST❑REDIS_RDB_TYPE_SET_INTSET❑REDIS_RDB_TYPE_ZSET_ZIPLIST❑REDIS_RDB_TYPE_HASH_ZIPLIST</p>
</blockquote>
<blockquote>
<p>以上列出的每个TYPE常量都代表了一种对象类型或者底层编码，当服务器读入RDB文件中的键值对数据时，程序会根据TYPE的值来决定如何读入和解释value的数据。key和value分别保存了键值对的键对象和值对象：</p>
</blockquote>
<p>其中key总是一个字符串对象，它的编码方式和REDIS_RDB_TYPE_STRING类型的value一样。根据内容长度的不同，key的长度也会有所不同。❑根据TYPE类型的不同，以及保存内容长度的不同，保存value的结构和长度也会有所不同</p>
<blockquote>
<p>如果字符串对象的编码为REDIS_ENCODING_RAW，那么说明对象所保存的是一个字符串值，根据字符串长度的不同，有压缩和不压缩两种方法来保存这个字符串：❑如果字符串的长度小于等于20字节，那么这个字符串会直接被原样保存。❑如果字符串的长度大于20字节，那么这个字符串会被压缩之后再保存。</p>
</blockquote>
<blockquote>
<p>以上两个条件是在假设服务器打开了RDB文件压缩功能的情况下进行的，如果服务器关闭了RDB文件压缩功能，那么RDB程序总以无压缩的方式保存字符串值。</p>
</blockquote>
<blockquote>
<p>具体信息可以参考redis.conf文件中关于rdbcompression选项的说明。</p>
</blockquote>
<blockquote>
<p>如果TYPE的值为REDIS_RDB_TYPE_LIST_ZIPLIST、REDIS_RDB_TYPE_HASH_ZIPLIST或者REDIS_RDB_TYPE_ZSET_ZIPLIST，那么value保存的就是一个压缩列表对象，RDB文件保存这种对象的方法是：1）将压缩列表转换成一个字符串对象。2）将转换所得的字符串对象保存到RDB文件。</p>
</blockquote>
<blockquote>
<p>如果程序在读入RDB文件的过程中，碰到由压缩列表对象转换成的字符串对象，那么程序会根据TYPE值的指示，执行以下操作：1）读入字符串对象，并将它转换成原来的压缩列表对象。</p>
</blockquote>
<blockquote>
<p>2）根据TYPE的值，设置压缩列表对象的类型：如果TYPE的值为REDIS_RDB_TYPE_LIST_ZIPLIST，那么压缩列表对象的类型为列表；如果TYPE的值为REDIS_RDB_TYPE_HASH_ZIPLIST，那么压缩列表对象的类型为哈希表；如果TYPE的值为REDIS_RDB_TYPE_ZSET_ZIPLIST，那么压缩列表对象的类型为有序集合。</p>
</blockquote>
<p>◆ 10.4 分析RDB文件</p>
<blockquote>
<p>使用od命令来分析Redis服务器产生的RDB文件，该命令可以用给定的格式转存（dump）并打印输入文件。比如说，给定-c参数可以以ASCII编码的方式打印输入文件，给定-x参数可以以十六进制的方式打印输入文件</p>
</blockquote>
<blockquote>
<p>当一个RDB文件没有包含任何数据库数据时，这个RDB文件将由以下四个部分组成：❑五个字节的&quot;REDIS&quot;字符串。❑四个字节的版本号（db_version）。❑一个字节的EOF常量。❑八个字节的校验和（check_sum）。</p>
</blockquote>
<blockquote>
<p>从od命令的输出中可以看到，最开头的是“REDIS”字符串，之后的0006是版本号，再之后的一个字节377代表EOF常量，最后的334 263 C 360 Z 334 362 V八个字节则代表RDB文件的校验和。</p>
</blockquote>
<blockquote>
<p>当一个数据库被保存到RDB文件时，这个数据库将由以下三部分组成：❑一个一字节长的特殊值SELECTDB。❑一个长度可能为一字节、两字节或者五字节的数据库号码（db_number）。❑一个或以上数量的键值对（key_value_pairs）。</p>
</blockquote>
<blockquote>
<p>观察od命令打印的输出，RDB文件的最开始仍然是REDIS和版本号0006，之后出现的376代表SELECTDB常量，再之后的\0代表整数0，表示被保存的数据库为0号数据库。</p>
</blockquote>
<p>◆ 10.5 重点回顾</p>
<p>RDB文件用于保存和还原Redis服务器所有数据库中的所有键值对数据。❑SAVE命令由服务器进程直接执行保存操作，所以该命令会阻塞服务器。❑BGSAVE令由子进程执行保存操作，所以该命令不会阻塞服务器。❑服务器状态中会保存所有用save选项设置的保存条件，当任意一个保存条件被满足时，服务器会自动执行BGSAVE命令。❑RDB文件是一个经过压缩的二进制文件，由多个部分组成。❑对于不同类型的键值对，RDB文件会使用不同的方式来保存它们。</p>
<p>◆ 第11章 AOF持久化</p>
<blockquote>
<p>与RDB持久化通过保存数据库中的键值对来记录数据库状态不同，AOF持久化是通过保存Redis服务器所执行的写命令来记录数据库状态的</p>
</blockquote>
<blockquote>
<p>RDB持久化保存数据库状态的方法是将msg、fruits、numbers三个键的键值对保存到RDB文件中，而AOF持久化保存数据库状态的方法则是将服务器执行的SET、SADD、RPUSH三个命令保存到AOF文件中。</p>
</blockquote>
<blockquote>
<p>被写入AOF文件的所有命令都是以Redis的命令请求协议格式保存的，因为Redis的命令请求协议是纯文本格式，所以我们可以直接打开一个AOF文件，观察里面的内容。</p>
</blockquote>
<p>◆ 11.1 AOF持久化的实现</p>
<blockquote>
<p>AOF持久化功能的实现可以分为命令追加（append）、文件写入、文件同步（sync）三个步骤。</p>
</blockquote>
<blockquote>
<p>当AOF持久化功能处于打开状态时，服务器在执行完一个写命令之后，会以协议格式将被执行的写命令追加到服务器状态的aof_buf缓冲区的末尾</p>
</blockquote>
<blockquote>
<p>Redis的服务器进程就是一个事件循环（loop），这个循环中的文件事件负责接收客户端的命令请求，以及向客户端发送命令回复，而时间事件则负责执行像serverCron函数这样需要定时运行的函数。</p>
</blockquote>
<blockquote>
<p>因为服务器在处理文件事件时可能会执行写命令，使得一些内容被追加到aof_buf缓冲区里面，所以在服务器每次结束一个事件循环之前，它都会调用fushAppendOnlyFile函数，考虑是否需要将aof_buf缓冲区中的内容写入和保存到AOF文件里面</p>
</blockquote>
<blockquote>
<p>fushAppendOnlyFile函数的行为由服务器配置的appendfsync选项的值来决定</p>
</blockquote>
<blockquote>
<p>如果用户没有主动为appendfsync选项设置值，那么appendfsync选项的默认值为everysec</p>
</blockquote>
<blockquote>
<p>为了提高文件的写入效率，在现代操作系统中，当用户调用write函数，将一些数据写入到文件的时候，操作系统通常会将写入数据暂时保存在一个内存缓冲区里面，等到缓冲区的空间被填满、或者超过了指定的时限之后，才真正地将缓冲区中的数据写入到磁盘里面。</p>
</blockquote>
<blockquote>
<p>这种做法虽然提高了效率，但也为写入数据带来了安全问题，因为如果计算机发生停机，那么保存在内存缓冲区里面的写入数据将会丢失。</p>
</blockquote>
<blockquote>
<p>为此，系统提供了fsync和fdatasync两个同步函数，它们可以强制让操作系统立即将缓冲区中的数据写入到硬盘里面，从而确保写入数据的安全性。</p>
</blockquote>
<blockquote>
<p>如果这时fushAppendOnlyFile函数被调用，假设服务器当前appendfsync选项的值为everysec，并且距离上次同步AOF文件已经超过一秒钟，那么服务器会先将aof_buf中的内容写入到AOF文件中，然后再对AOF文件进行同步。</p>
</blockquote>
<blockquote>
<p>服务器配置appendfsync选项的值直接决定AOF持久化功能的效率和安全性。</p>
</blockquote>
<blockquote>
<p>□ 当appendfsync的值为always时，服务器在每个事件循环都要将aof_buf缓冲区中的所有内容写入到AOF文件，并且同步AOF文件，所以always的效率是appendfsync选项三个值当中最慢的一个，但从安全性来说，always也是最安全的，因为即使出现故障停机，AOF持久化也只会丢失一个事件循环中所产生的命令数据。</p>
</blockquote>
<blockquote>
<p>□ 当appendfsync的值为everysec时，服务器在每个事件循环都要将aof_buf缓冲区中的所有内容写入到AOF文件，并且每隔一秒就要在子线程中对AOF文件进行一次同步。从效率上来讲，everysec模式足够快，并且就算出现故障停机，数据库也只丢失一秒钟的命令数据。</p>
</blockquote>
<blockquote>
<p>□ 当appendfsync的值为no时，服务器在每个事件循环都要将aof_buf缓冲区中的所有内容写入到AOF文件，至于何时对AOF文件进行同步，则由操作系统控制。因为处于no模式下的fushAppendOnlyFile调用无须执行同步操作，所以该模式下的AOF文件写入速度总是最快的，不过因为这种模式会在系统缓存中积累一段时间的写入数据，所以该模式的单次同步时长通常是三种模式中时间最长的。从平摊操作的角度来看，no模式和everysec模式的效率类似，当出现故障停机时，使用no模式的服务器将丢失上次同步AOF文件之后的所有写命令数据。</p>
</blockquote>
<p>◆ 11.2 AOF文件的载入与数据还原</p>
<blockquote>
<p>因为AOF文件里面包含了重建数据库状态所需的所有写命令，所以服务器只要读入并重新执行一遍AOF文件里面保存的写命令，就可以还原服务器关闭之前的数据库状态。</p>
</blockquote>
<blockquote>
<p>Redis读取AOF文件并还原数据库状态的详细步骤如下：1）创建一个不带网络连接的伪客户端（fake client）：因为Redis的命令只能在客户端上下文中执行，而载入AOF文件时所使用的命令直接来源于AOF文件而不是网络连接，所以服务器使用了一个没有网络连接的伪客户端来执行AOF文件保存的写命令，伪客户端执行命令的效果和带网络连接的客户端执行命令的效果完全一样。2）从AOF文件中分析并读取出一条写命令。3）使用伪客户端执行被读出的写命令。4）一直执行步骤2和步骤3，直到AOF文件中的所有写命令都被处理完毕为止。</p>
</blockquote>
<p>◆ 11.3 AOF重写</p>
<blockquote>
<p>因为AOF持久化是通过保存被执行的写命令来记录数据库状态的，所以随着服务器运行时间的流逝，AOF文件中的内容会越来越多，文件的体积也会越来越大，如果不加以控制的话，体积过大的AOF文件很可能对Redis服务器、甚至整个宿主计算机造成影响，并且AOF文件的体积越大，使用AOF文件来进行数据还原所需的时间就越多。</p>
</blockquote>
<blockquote>
<p>为了解决AOF文件体积膨胀的问题，Redis提供了AOF文件重写（rewrite）功能。通过该功能，Redis服务器可以创建一个新的AOF文件来替代现有的AOF文件，新旧两个AOF文件所保存的数据库状态相同，但新AOF文件不会包含任何浪费空间的冗余命令，所以新AOF文件的体积通常会比旧AOF文件的体积要小得多。</p>
</blockquote>
<blockquote>
<p>虽然Redis将生成新AOF文件替换旧AOF文件的功能命名为“AOF文件重写”，但实际上，AOF文件重写并不需要对现有的AOF文件进行任何读取、分析或者写入操作，这个功能是通过读取服务器当前的数据库状态来实现的。</p>
</blockquote>
<blockquote>
<p>如果服务器想要用尽量少的命令来记录list键的状态，那么最简单高效的办法不是去读取和分析现有AOF文件的内容，而是直接从数据库中读取键list的值，然后用一条RPUSH list&quot;C&quot;&quot;D&quot;&quot;E&quot;&quot;F&quot;&quot;G&quot;命令来代替保存在AOF文件中的六条命令，这样就可以将保存list键所需的命令从六条减少为一条了。</p>
</blockquote>
<blockquote>
<p>除了上面列举的列表键和集合键之外，其他所有类型的键都可以用同样的方法去减少AOF文件中的命令数量。首先从数据库中读取键现在的值，然后用一条命令去记录键值对，代替之前记录这个键值对的多条命令，这就是AOF重写功能的实现原理。</p>
</blockquote>
<blockquote>
<p>因为aof_rewrite函数生成的新AOF文件只包含还原当前数据库状态所必须的命令，所以新AOF文件不会浪费任何硬盘空间。</p>
</blockquote>
<blockquote>
<p>在实际中，为了避免在执行命令时造成客户端输入缓冲区溢出，重写程序在处理列表、哈希表、集合、有序集合这四种可能会带有多个元素的键时，会先检查键所包含的元素数量，如果元素的数量超过了redis.h/REDIS_AOF_REWRITE_ITEMS_PER_CMD常量的值，那么重写程序将使用多条命令来记录键的值，而不单单使用一条命令。</p>
</blockquote>
<blockquote>
<p>AOF重写程序aof_rewrite函数可以很好地完成创建一个新AOF文件的任务，但是，因为这个函数会进行大量的写入操作，所以调用这个函数的线程将被长时间阻塞，因为Redis服务器使用单个线程来处理命令请求，所以如果由服务器直接调用aof_rewrite函数的话，那么在重写AOF文件期间，服务期将无法处理客户端发来的命令请求。</p>
</blockquote>
<blockquote>
<p>作为一种辅佐性的维护手段，Redis不希望AOF重写造成服务器无法处理请求，所以Redis决定将AOF重写程序放到子进程里执行，这样做可以同时达到两个目的：❑子进程进行AOF重写期间，服务器进程（父进程）可以继续处理命令请求。❑子进程带有服务器进程的数据副本，使用子进程而不是线程，可以在避免使用锁的情况下，保证数据的安全性。</p>
</blockquote>
<blockquote>
<p>使用子进程也有一个问题需要解决，因为子进程在进行AOF重写期间，服务器进程还需要继续处理命令请求，而新的命令可能会对现有的数据库状态进行修改，从而使得服务器当前的数据库状态和重写后的AOF文件所保存的数据库状态不一致。</p>
</blockquote>
<blockquote>
<p>一个AOF文件重写例子，当子进程开始进行文件重写时，数据库中只有k1一个键，但是当子进程完成AOF文件重写之后，服务器进程的数据库中已经新设置了k2、k3、k4三个键，因此，重写后的AOF文件和服务器当前的数据库状态并不一致，新的AOF文件只保存了k1一个键的数据，而服务器数据库现在却有k1、k2、k3、k4四个键。</p>
</blockquote>
<blockquote>
<p>为了解决这种数据不一致问题，Redis服务器设置了一个AOF重写缓冲区，这个缓冲区在服务器创建子进程之后开始使用，当Redis服务器执行完一个写命令之后，它会同时将这个写命令发送给AOF缓冲区和AOF重写缓冲区</p>
</blockquote>
<blockquote>
<p>这也就是说，在子进程执行AOF重写期间，服务器进程需要执行以下三个工作：1）执行客户端发来的命令。2）将执行后的写命令追加到AOF缓冲区。3）将执行后的写命令追加到AOF重写缓冲区。</p>
</blockquote>
<blockquote>
<p>这样一来可以保证：❑AOF缓冲区的内容会定期被写入和同步到AOF文件，对现有AOF文件的处理工作会如常进行。❑从创建子进程开始，服务器执行的所有写命令都会被记录到AOF重写缓冲区里面。</p>
</blockquote>
<blockquote>
<p>当子进程完成AOF重写工作之后，它会向父进程发送一个信号，父进程在接到该信号之后，会调用一个信号处理函数，并执行以下工作：1）将AOF重写缓冲区中的所有内容写入到新AOF文件中，这时新AOF文件所保存的数据库状态将和服务器当前的数据库状态一致。2）对新的AOF文件进行改名，原子地（atomic）覆盖现有的AOF文件，完成新旧两个AOF文件的替换。</p>
</blockquote>
<blockquote>
<p>这个信号处理函数执行完毕之后，父进程就可以继续像往常一样接受命令请求了。</p>
</blockquote>
<blockquote>
<p>在整个AOF后台重写过程中，只有信号处理函数执行时会对服务器进程（父进程）造成阻塞，在其他时候，AOF后台重写都不会阻塞父进程，这将AOF重写对服务器性能造成的影响降到了最低。</p>
</blockquote>
<blockquote>
<p>一个AOF文件后台重写的执行过程：❑当子进程开始重写时，服务器进程（父进程）的数据库中只有k1一个键，当子进程完成AOF文件重写之后，服务器进程的数据库中已经多出了k2、k3、k4三个新键。❑在子进程向服务器进程发送信号之后，服务器进程会将保存在AOF重写缓冲区里面记录的k2、k3、k4三个键的命令追加到新AOF文件的末尾，然后用新AOF文件替换旧AOF文件，完成AOF文件后台重写操作。</p>
</blockquote>
<blockquote>
<p>以上就是AOF后台重写，也即是BGREWRITEAOF命令的实现原理。</p>
</blockquote>
<p>◆ 11.4 重点回顾</p>
<p>AOF文件通过保存所有修改数据库的写命令请求来记录服务器的数据库状态。❑AOF文件中的所有命令都以Redis命令请求协议的格式保存。</p>
<p>命令请求会先保存到AOF缓冲区里面，之后再定期写入并同步到AOF文件。</p>
<p>appendfsync选项的不同值对AOF持久化功能的安全性以及Redis服务器的性能有很大的影响。❑服务器只要载入并重新执行保存在AOF文件中的命令，就可以还原数据库本来的状态。</p>
<p>AOF重写可以产生一个新的AOF文件，这个新的AOF文件和原有的AOF文件所保存的数据库状态一样，但体积更小。</p>
<p>AOF重写是一个有歧义的名字，该功能是通过读取数据库中的键值对来实现的，程序无须对现有AOF文件进行任何读入、分析或者写入操作。</p>
<p>在执行BGREWRITEAOF命令时，Redis服务器会维护一个AOF重写缓冲区，该缓冲区会在子进程创建新AOF文件期间，记录服务器执行的所有写命令。当子进程完成创建新AOF文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新AOF文件的末尾，使得新旧两个AOF文件所保存的数据库状态一致。最后，服务器用新的AOF文件替换旧的AOF文件，以此来完成AOF文件重写操作。</p>
<p>◆ 第12章 事件</p>
<blockquote>
<p>Redis服务器是一个事件驱动程序，服务器需要处理以下两类事件：</p>
</blockquote>
<p>文件事件（file event）：Redis服务器通过套接字与客户端（或者其他Redis服务器）进行连接，而文件事件就是服务器对套接字操作的抽象。服务器与客户端（或者其他服务器）的通信会产生相应的文件事件，而服务器则通过监听并处理这些事件来完成一系列网络通信操作。</p>
<p>时间事件（time event）：Redis服务器中的一些操作（比如serverCron函数）需要在给定的时间点执行，而时间事件就是服务器对这类定时操作的抽象。</p>
<p>◆ 12.1 文件事件</p>
<blockquote>
<p>Redis基于Reactor模式开发了自己的网络事件处理器：这个处理器被称为文件事件处理器（file event handler）：❑文件事件处理器使用I/O多路复用（multiplexing）程序来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器。❑当被监听的套接字准备好执行连接应答（accept）、读取（read）、写入（write）、关闭（close）等操作时，与操作相对应的文件事件就会产生，这时文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件。</p>
</blockquote>
<blockquote>
<p>虽然文件事件处理器以单线程方式运行，但通过使用I/O多路复用程序来监听多个套接字，文件事件处理器既实现了高性能的网络通信模型，又可以很好地与Redis服务器中其他同样以单线程方式运行的模块进行对接，这保持了Redis内部单线程设计的简单性。</p>
</blockquote>
<blockquote>
<p>文件事件处理器的四个组成部分，它们分别是套接字、I/O多路复用程序、文件事件分派器（dispatcher），以及事件处理器。</p>
</blockquote>
<blockquote>
<p>文件事件是对套接字操作的抽象，每当一个套接字准备好执行连接应答（accept）、写入、读取、关闭等操作时，就会产生一个文件事件。因为一个服务器通常会连接多个套接字，所以多个文件事件有可能会并发地出现。</p>
</blockquote>
<blockquote>
<p>I/O多路复用程序负责监听多个套接字，并向文件事件分派器传送那些产生了事件的套接字。</p>
</blockquote>
<blockquote>
<p>尽管多个文件事件可能会并发地出现，但I/O多路复用程序总是会将所有产生事件的套接字都放到一个队列里面，然后通过这个队列，以有序（sequentially）、同步（synchronously）、每次一个套接字的方式向文件事件分派器传送套接字。当上一个套接字产生的事件被处理完毕之后（该套接字为事件所关联的事件处理器执行完毕），I/O多路复用程序才会继续向文件事件分派器传送下一个套接字</p>
</blockquote>
<blockquote>
<p>文件事件分派器接收I/O多路复用程序传来的套接字，并根据套接字产生的事件的类型，调用相应的事件处理器。</p>
</blockquote>
<blockquote>
<p>服务器会为执行不同任务的套接字关联不同的事件处理器，这些处理器是一个个函数，它们定义了某个事件发生时，服务器应该执行的动作。</p>
</blockquote>
<blockquote>
<p>Redis的I/O多路复用程序的所有功能都是通过包装常见的select、epoll、evport和kqueue这些I/O多路复用函数库来实现的，每个I/O多路复用函数库在Redis源码中都对应一个单独的文件，比如ae_select.c、ae_epoll.c、ae_kqueue.c，诸如此类。</p>
</blockquote>
<blockquote>
<p>因为Redis为每个I/O多路复用函数库都实现了相同的API，所以I/O多路复用程序的底层实现是可以互换的</p>
</blockquote>
<blockquote>
<p>Redis在I/O多路复用程序的实现源码中用#include宏定义了相应的规则，程序会在编译时自动选择系统中性能最高的I/O多路复用函数库来作为Redis的I/O多路复用程序的底层实现</p>
</blockquote>
<blockquote>
<p>I/O多路复用程序可以监听多个套接字的ae.h/AE_READABLE事件和ae.h/AE_WRITABLE事件，这两类事件和套接字操作之间的对应关系如下：❑当套接字变得可读时（客户端对套接字执行write操作，或者执行close操作），或者有新的可应答（acceptable）套接字出现时（客户端对服务器的监听套接字执行connect操作），套接字产生AE_READABLE事件。❑当套接字变得可写时（客户端对套接字执行read操作），套接字产生AE_WRITABLE事件。</p>
</blockquote>
<blockquote>
<p>I/O多路复用程序允许服务器同时监听套接字的AE_READABLE事件和AE_WRITABLE事件，如果一个套接字同时产生了这两种事件，那么文件事件分派器会优先处理AE_READABLE事件，等到AE_READABLE事件处理完之后，才处理AE_WRITABLE事件。</p>
</blockquote>
<blockquote>
<p>这也就是说，如果一个套接字又可读又可写的话，那么服务器将先读套接字，后写套接字。</p>
</blockquote>
<blockquote>
<p>ae.c/aeCreateFileEvent函数接受一个套接字描述符、一个事件类型，以及一个事件处理器作为参数，将给定套接字的给定事件加入到I/O多路复用程序的监听范围之内，并对事件和事件处理器进行关联。</p>
</blockquote>
<blockquote>
<p>ae.c/aeDeleteFileEvent函数接受一个套接字描述符和一个监听事件类型作为参数，让I/O多路复用程序取消对给定套接字的给定事件的监听，并取消事件和事件处理器之间的关联。</p>
</blockquote>
<blockquote>
<p>ae.c/aeGetFileEvents函数接受一个套接字描述符，返回该套接字正在被监听的事件类型：❑如果套接字没有任何事件被监听，那么函数返回AE_NONE。❑如果套接字的读事件正在被监听，那么函数返回AE_READABLE。❑如果套接字的写事件正在被监听，那么函数返回AE_WRITABLE。❑如果套接字的读事件和写事件正在被监听，那么函数返回AE_READABLE|AE_WRITABLE。</p>
</blockquote>
<blockquote>
<p>ae.c/aeWait函数接受一个套接字描述符、一个事件类型和一个毫秒数为参数，在给定的时间内阻塞并等待套接字的给定类型事件产生，当事件成功产生，或者等待超时之后，函数返回。ae.c/aeApiPoll函数接受一个sys/time.h/struct timeval结构为参数，并在指定的时间內，阻塞并等待所有被aeCreateFileEvent函数设置为监听状态的套接字产生文件事件，当有至少一个事件产生，或者等待超时后，函数返回。</p>
</blockquote>
<blockquote>
<p>e.c/aeProcessEvents函数是文件事件分派器，它先调用aeApiPoll函数来等待事件产生，然后遍历所有已产生的事件，并调用相应的事件处理器来处理这些事件。ae.c/aeGetApiName函数返回I/O多路复用程序底层所使用的I/O多路复用函数库的名称：返回&quot;epoll&quot;表示底层为epoll函数库，返回&quot;select&quot;表示底层为select函数库，诸如此类。</p>
</blockquote>
<blockquote>
<p>Redis为文件事件编写了多个处理器，这些事件处理器分别用于实现不同的网络通信需求，比如说：❑为了对连接服务器的各个客户端进行应答，服务器要为监听套接字关联连接应答处理器。❑为了接收客户端传来的命令请求，服务器要为客户端套接字关联命令请求处理器。❑为了向客户端返回命令的执行结果，服务器要为客户端套接字关联命令回复处理器。❑当主服务器和从服务器进行复制操作时，主从服务器都需要关联特别为复制功能编写的复制处理器。</p>
</blockquote>
<blockquote>
<p>服务器最常用的要数与客户端进行通信的连接应答处理器、命令请求处理器和命令回复处理器。</p>
</blockquote>
<blockquote>
<p>networking.c/acceptTcpHandler函数是Redis的连接应答处理器，这个处理器用于对连接服务器监听套接字的客户端进行应答，具体实现为sys/socket.h/accept函数的包装。</p>
</blockquote>
<blockquote>
<p>当Redis服务器进行初始化的时候，程序会将这个连接应答处理器和服务器监听套接字的AE_READABLE事件关联起来，当有客户端用sys/socket.h/connect函数连接服务器监听套接字的时候，套接字就会产生AE_READABLE事件，引发连接应答处理器执行，并执行相应的套接字应答操作</p>
</blockquote>
<blockquote>
<p>networking.c/readQueryFromClient函数是Redis的命令请求处理器，这个处理器负责从套接字中读入客户端发送的命令请求内容，具体实现为unistd.h/read函数的包装。</p>
</blockquote>
<blockquote>
<p>在客户端连接服务器的整个过程中，服务器都会一直为客户端套接字的AE_READABLE事件关联命令请求处理器。</p>
</blockquote>
<blockquote>
<p>假设一个Redis服务器正在运作，那么这个服务器的监听套接字的AE_READABLE事件应该正处于监听状态之下，而该事件所对应的处理器为连接应答处理器。</p>
</blockquote>
<blockquote>
<p>如果这时有一个Redis客户端向服务器发起连接，那么监听套接字将产生AE_READABLE事件，触发连接应答处理器执行。处理器会对客户端的连接请求进行应答，然后创建客户端套接字，以及客户端状态，并将客户端套接字的AE_READABLE事件与命令请求处理器进行关联，使得客户端可以向主服务器发送命令请求。</p>
</blockquote>
<blockquote>
<p>之后，假设客户端向主服务器发送一个命令请求，那么客户端套接字将产生AE_READABLE事件，引发命令请求处理器执行，处理器读取客户端的命令内容，然后传给相关程序去执行。</p>
</blockquote>
<blockquote>
<p>执行命令将产生相应的命令回复，为了将这些命令回复传送回客户端，服务器会将客户端套接字的AE_WRITABLE事件与命令回复处理器进行关联。当客户端尝试读取命令回复的时候，客户端套接字将产生AE_WRITABLE事件，触发命令回复处理器执行，当命令回复处理器将命令回复全部写入到套接字之后，服务器就会解除客户端套接字的AE_WRITABLE事件与命令回复处理器之间的关联。</p>
</blockquote>
<p>◆ 12.2 时间事件</p>
<blockquote>
<p>Redis的时间事件分为以下两类：❑定时事件：让一段程序在指定的时间之后执行一次。比如说，让程序X在当前时间的30毫秒之后执行一次。❑周期性事件：让一段程序每隔指定时间就执行一次。比如说，让程序Y每隔30毫秒就执行一次。</p>
</blockquote>
<blockquote>
<p>一个时间事件主要由以下三个属性组成：❑id：服务器为时间事件创建的全局唯一ID（标识号）。ID号按从小到大的顺序递增，新事件的ID号比旧事件的ID号要大。❑when：毫秒精度的UNIX时间戳，记录了时间事件的到达（arrive）时间。❑timeProc：时间事件处理器，一个函数。当时间事件到达时，服务器就会调用相应的处理器来处理事件。</p>
</blockquote>
<blockquote>
<p>一个时间事件是定时事件还是周期性事件取决于时间事件处理器的返回值：</p>
</blockquote>
<p>如果事件处理器返回ae.h/AE_NOMORE，那么这个事件为定时事件：该事件在达到一次之后就会被删除，之后不再到达。</p>
<p>如果事件处理器返回一个非AE_NOMORE的整数值，那么这个事件为周期性时间：当一个时间事件到达之后，服务器会根据事件处理器返回的值，对时间事件的when属性进行更新，让这个事件在一段时间之后再次到达，并以这种方式一直更新并运行下去。比如说，如果一个时间事件的处理器返回整数值30，那么服务器应该对这个时间事件进行更新，让这个事件在30毫秒之后再次到达。</p>
<blockquote>
<p>目前版本的Redis只使用周期性事件，而没有使用定时事件。</p>
</blockquote>
<blockquote>
<p>服务器将所有时间事件都放在一个无序链表中，每当时间事件执行器运行时，它就遍历整个链表，查找所有已到达的时间事件，并调用相应的事件处理器。</p>
</blockquote>
<blockquote>
<p>我们说保存时间事件的链表为无序链表，指的不是链表不按ID排序，而是说，该链表不按when属性的大小排序。正因为链表没有按when属性进行排序，所以当时间事件执行器运行的时候，它必须遍历链表中的所有时间事件，这样才能确保服务器中所有已到达的时间事件都会被处理。</p>
</blockquote>
<blockquote>
<p>在目前版本中，正常模式下的Redis服务器只使用serverCron一个时间事件，而在benchmark模式下，服务器也只使用两个时间事件。在这种情况下，服务器几乎是将无序链表退化成一个指针来使用，所以使用无序链表来保存时间事件，并不影响事件执行的性能。</p>
</blockquote>
<blockquote>
<p>持续运行的Redis服务器需要定期对自身的资源和状态进行检查和调整，从而确保服务器可以长期、稳定地运行，这些定期操作由redis.c/serverCron函数负责执行，它的主要工作包括：❑更新服务器的各类统计信息，比如时间、内存占用、数据库占用情况等。❑清理数据库中的过期键值对。❑关闭和清理连接失效的客户端。❑尝试进行AOF或RDB持久化操作。❑如果服务器是主服务器，那么对从服务器进行定期同步。❑如果处于集群模式，对集群进行定期同步和连接测试。</p>
</blockquote>
<blockquote>
<p>Redis服务器以周期性事件的方式来运行serverCron函数，在服务器运行期间，每隔一段时间，serverCron就会执行一次，直到服务器关闭为止。</p>
</blockquote>
<blockquote>
<p>在Redis2.6版本，服务器默认规定serverCron每秒运行10次，平均每间隔100毫秒运行一次。从Redis2.8开始，用户可以通过修改hz选项来调整serverCron的每秒执行次数，具体信息请参考示例配置文件redis.conf关于hz选项的说明。</p>
</blockquote>
<p>◆ 12.4 重点回顾</p>
<p>Redis服务器是一个事件驱动程序，服务器处理的事件分为时间事件和文件事件两类。❑文件事件处理器是基于Reactor模式实现的网络通信程序。</p>
<p>文件事件是对套接字操作的抽象：每次套接字变为可应答（acceptable）、可写（writable）或者可读（readable）时，相应的文件事件就会产生。</p>
<p>文件事件分为AE_READABLE事件（读事件）和AE_WRITABLE事件（写事件）两类。❑时间事件分为定时事件和周期性事件：定时事件只在指定的时间到达一次，而周期性事件则每隔一段时间到达一次。❑服务器在一般情况下只执行serverCron函数一个时间事件，并且这个事件是周期性事件。❑文件事件和时间事件之间是合作关系，服务器会轮流处理这两种事件，并且处理事件的过程中也不会进行抢占。❑时间事件的实际处理时间通常会比设定的到达时间晚一些。</p>
<p>文件事件分为AE_READABLE事件（读事件）和AE_WRITABLE事件（写事件）两类。</p>
<p>时间事件分为定时事件和周期性事件：定时事件只在指定的时间到达一次，而周期性事件则每隔一段时间到达一次。</p>
<p>服务器在一般情况下只执行serverCron函数一个时间事件，并且这个事件是周期性事件。</p>
<p>文件事件和时间事件之间是合作关系，服务器会轮流处理这两种事件，并且处理事件的过程中也不会进行抢占。</p>
<p>时间事件的实际处理时间通常会比设定的到达时间晚一些。</p>
<p>◆ 第13章 客户端</p>
<blockquote>
<p>Redis服务器是典型的一对多服务器程序：一个服务器可以与多个客户端建立网络连接，每个客户端可以向服务器发送命令请求，而服务器则接收并处理客户端发送的命令请求，并向客户端返回命令回复。</p>
</blockquote>
<blockquote>
<p>通过使用由I/O多路复用技术实现的文件事件处理器，Redis服务器使用单线程单进程的方式来处理命令请求，并与多个客户端进行网络通信。</p>
</blockquote>
<blockquote>
<p>对于每个与服务器进行连接的客户端，服务器都为这些客户端建立了相应的redis.h/redisClient结构（客户端状态），这个结构保存了客户端当前的状态信息，以及执行相关功能时需要用到的数据结构，其中包括：</p>
</blockquote>
<p>客户端的套接字描述符。❑客户端的名字。❑客户端的标志值（fag）。❑指向客户端正在使用的数据库的指针，以及该数据库的号码。</p>
<p>客户端当前要执行的命令、命令的参数、命令参数的个数，以及指向命令实现函数的指针。❑客户端的输入缓冲区和输出缓冲区。❑客户端的复制状态信息，以及进行复制所需的数据结构。</p>
<p>客户端执行BRPOP、BLPOP等列表阻塞命令时使用的数据结构。❑客户端的事务状态，以及执行WATCH命令时用到的数据结构。❑客户端执行发布与订阅功能时用到的数据结构。❑客户端的身份验证标志。</p>
<p>客户端的创建时间，客户端和服务器最后一次通信的时间，以及客户端的输出缓冲区大小超出软性限制（soft limit）的时间。</p>
<blockquote>
<p>Redis服务器状态结构的clients属性是一个链表，这个链表保存了所有与服务器连接的客户端的状态结构，对客户端执行批量操作，或者查找某个指定的客户端，都可以通过遍历clients链表来完成</p>
</blockquote>
<p>◆ 13.1 客户端属性</p>
<blockquote>
<p>客户端状态包含的属性可以分为两类：❑一类是比较通用的属性，这些属性很少与特定功能相关，无论客户端执行的是什么工作，它们都要用到这些属性。❑另外一类是和特定功能相关的属性，比如操作数据库时需要用到的db属性和dictid属性，执行事务时需要用到的mstate属性，以及执行WATCH命令时需要用到的watched_keys属性等等。</p>
</blockquote>
<blockquote>
<p>执行CLIENT list命令可以列出目前所有连接到服务器的普通客户端，命令输出中的fd域显示了服务器连接客户端所使用的套接字描述符</p>
</blockquote>
<blockquote>
<p>在默认情况下，一个连接到服务器的客户端是没有名字的。</p>
</blockquote>
<blockquote>
<p>使用CLIENT setname命令可以为客户端设置一个名字，让客户端的身份变得更清晰。</p>
</blockquote>
<blockquote>
<p>客户端的标志属性fags记录了客户端的角色（role），以及客户端目前所处的状态</p>
</blockquote>
<blockquote>
<p>通常情况下，Redis只会将那些对数据库进行了修改的命令写入到AOF文件，并复制到各个从服务器。如果一个命令没有对数据库进行任何修改，那么它就会被认为是只读命令，这个命令不会被写入到AOF文件，也不会被复制到从服务器。</p>
</blockquote>
<blockquote>
<p>以上规则适用于绝大部分Redis命令，但PUBSUB命令和SCRIPT LOAD命令是其中的例外。PUBSUB命令虽然没有修改数据库，但PUBSUB命令向频道的所有订阅者发送消息这一行为带有副作用，接收到消息的所有客户端的状态都会因为这个命令而改变。因此，服务器需要使用REDIS_FORCE_AOF标志，强制将这个命令写入AOF文件，这样在将来载入AOF文件时，服务器就可以再次执行相同的PUBSUB命令，并产生相同的副作用。SCRIPT LOAD命令的情况与PUBSUB命令类似：虽然SCRIPT LOAD命令没有修改数据库，但它修改了服务器状态，所以它是一个带有副作用的命令，服务器需要使用REDIS_FORCE_AOF标志，强制将这个命令写入AOF文件，使得将来在载入AOF文件时，服务器可以产生相同的副作用。</p>
</blockquote>
<blockquote>
<p>客户端状态的输入缓冲区用于保存客户端发送的命令请求</p>
</blockquote>
<blockquote>
<p>输入缓冲区的大小会根据输入内容动态地缩小或者扩大，但它的最大大小不能超过1GB，否则服务器将关闭这个客户端。</p>
</blockquote>
<p>◆ 13.2 客户端的创建与关闭</p>
<blockquote>
<p>如果客户端是通过网络连接与服务器进行连接的普通客户端，那么在客户端使用connect函数连接到服务器时，服务器就会调用连接事件处理器（在第12章有介绍），为客户端创建相应的客户端状态，并将这个新的客户端状态添加到服务器状态结构clients链表的末尾。</p>
</blockquote>
<blockquote>
<p>举个例子，假设当前有c1和c2两个普通客户端正在连接服务器，那么当一个新的普通客户端c3连接到服务器之后，服务器会将c3所对应的客户端状态添加到clients链表的末尾</p>
</blockquote>
<blockquote>
<p>一个普通客户端可以因为多种原因而被关闭：❑如果客户端进程退出或者被杀死，那么客户端与服务器之间的网络连接将被关闭，从而造成客户端被关闭。❑如果客户端向服务器发送了带有不符合协议格式的命令请求，那么这个客户端也会被服务器关闭。❑如果客户端成为了CLIENT KILL命令的目标，那么它也会被关闭。</p>
</blockquote>
<p>如果用户为服务器设置了timeout配置选项，那么当客户端的空转时间超过timeout选项设置的值时，客户端将被关闭。不过timeout选项有一些例外情况：如果客户端是主服务器（打开了REDIS_MASTER标志），从服务器（打开了REDIS_SLAVE标志），正在被BLPOP等命令阻塞（打开了REDIS_BLOCKED标志），或者正在执行SUBSCRIBE、PSUBSCRIBE等订阅命令，那么即使客户端的空转时间超过了timeout选项的值，客户端也不会被服务器关闭。❑如果客户端发送的命令请求的大小超过了输入缓冲区的限制大小（默认为1GB），那么这个客户端会被服务器关闭。❑如果要发送给客户端的命令回复的大小超过了输出缓冲区的限制大小，那么这个客户端会被服务器关闭。</p>
<blockquote>
<p>可变大小缓冲区由一个链表和任意多个字符串对象组成，理论上来说，这个缓冲区可以保存任意长的命令回复</p>
</blockquote>
<blockquote>
<p>但是，为了避免客户端的回复过大，占用过多的服务器资源，服务器会时刻检查客户端的输出缓冲区的大小，并在缓冲区的大小超出范围时，执行相应的限制操作。</p>
</blockquote>
<blockquote>
<p>服务器使用两种模式来限制客户端输出缓冲区的大小：❑硬性限制（hard limit）：如果输出缓冲区的大小超过了硬性限制所设置的大小，那么服务器立即关闭客户端。❑软性限制（soft limit）：如果输出缓冲区的大小超过了软性限制所设置的大小，但还没超过硬性限制，那么服务器将使用客户端状态结构的obuf_soft_limit_reached_time属性记录下客户端到达软性限制的起始时间；之后服务器会继续监视客户端，如果输出缓冲区的大小一直超出软性限制，并且持续时间超过服务器设定的时长，那么服务器将关闭客户端；相反地，如果输出缓冲区的大小在指定时间之内，不再超出软性限制，那么客户端就不会被关闭，并且obuf_soft_limit_reached_time属性的值也会被清零。</p>
</blockquote>
<blockquote>
<p>使用client-output-buffer-limit选项可以为普通客户端、从服务器客户端、执行发布与订阅功能的客户端分别设置不同的软性限制和硬性限制</p>
</blockquote>
<blockquote>
<p>服务器会在初始化时创建负责执行Lua脚本中包含的Redis命令的伪客户端，并将这个伪客户端关联在服务器状态结构的lua_client属性中</p>
</blockquote>
<blockquote>
<p>lua_client伪客户端在服务器运行的整个生命期中会一直存在，只有服务器被关闭时，这个客户端才会被关闭。</p>
</blockquote>
<blockquote>
<p>服务器在载入AOF文件时，会创建用于执行AOF文件包含的Redis命令的伪客户端，并在载入完成之后，关闭这个伪客户端。</p>
</blockquote>
<p>◆ 13.3 重点回顾</p>
<blockquote>
<p>重点回顾❑服务器状态结构使用clients链表连接起多个客户端状态，新添加的客户端状态会被放到链表的末尾。❑客户端状态的fags属性使用不同标志来表示客户端的角色，以及客户端当前所处的状态。❑输入缓冲区记录了客户端发送的命令请求，这个缓冲区的大小不能超过1GB。</p>
</blockquote>
<p>命令的参数和参数个数会被记录在客户端状态的argv和argc属性里面，而cmd属性则记录了客户端要执行命令的实现函数。</p>
<p>客户端有固定大小缓冲区和可变大小缓冲区两种缓冲区可用，其中固定大小缓冲区的最大大小为16KB，而可变大小缓冲区的最大大小不能超过服务器设置的硬性限制值。</p>
<p>输出缓冲区限制值有两种，如果输出缓冲区的大小超过了服务器设置的硬性限制，那么客户端会被立即关闭；除此之外，如果客户端在一定时间内，一直超过服务器设置的软性限制，那么客户端也会被关闭。❑当一个客户端通过网络连接连上服务器时，服务器会为这个客户端创建相应的客户端状态。网络连接关闭、发送了不合协议格式的命令请求、成为CLIENT KILL命令的目标、空转时间超时、输出缓冲区的大小超出限制，以上这些原因都会造成客户端被关闭。❑处理Lua脚本的伪客户端在服务器初始化时创建，这个客户端会一直存在，直到服务器关闭。❑载入AOF文件时使用的伪客户端在载入工作开始时动态创建，载入工作完毕之后关闭。</p>
<p>◆ 14.1 命令请求的执行过程</p>
<blockquote>
<p>从客户端发送SET KEY VALUE命令到获得回复OK期间，客户端和服务器共需要执行以下操作：1）客户端向服务器发送命令请求SET KEY VALUE。2）服务器接收并处理客户端发来的命令请求SET KEY VALUE，在数据库中进行设置操作，并产生命令回复OK。3）服务器将命令回复OK发送给客户端。4）客户端接收服务器返回的命令回复OK，并将这个回复打印给用户观看。</p>
</blockquote>
<blockquote>
<p>Redis服务器的命令请求来自Redis客户端，当用户在客户端中键入一个命令请求时，客户端会将这个命令请求转换成协议格式，然后通过连接到服务器的套接字，将协议格式的命令请求发送给服务器</p>
</blockquote>
<blockquote>
<p>当客户端与服务器之间的连接套接字因为客户端的写入而变得可读时，服务器将调用命令请求处理器来执行以下操作：1）读取套接字中协议格式的命令请求，并将其保存到客户端状态的输入缓冲区里面。2）对输入缓冲区中的命令请求进行分析，提取出命令请求中包含的命令参数，以及命令参数的个数，然后分别将参数和参数个数保存到客户端状态的argv属性和argc属性里面。3）调用命令执行器，执行客户端指定的命令。</p>
</blockquote>
<blockquote>
<p>命令执行器要做的第一件事就是根据客户端状态的argv[0]参数，在命令表（command table）中查找参数所指定的命令，并将找到的命令保存到客户端状态的cmd属性里面。</p>
</blockquote>
<blockquote>
<p>命令表是一个字典，字典的键是一个个命令名字，比如&quot;set&quot;、&quot;get&quot;、&quot;del&quot;等等；而字典的值则是一个个redisCommand结构，每个redisCommand结构记录了一个Redis命令的实现信息</p>
</blockquote>
<blockquote>
<p>到目前为止，服务器已经将执行命令所需的命令实现函数（保存在客户端状态的cmd属性）、参数（保存在客户端状态的argv属性）、参数个数（保存在客户端状态的argc属性）都收集齐了，但是在真正执行命令之前，程序还需要进行一些预备操作，从而确保命令可以正确、顺利地被执行，这些操作包括：</p>
</blockquote>
<p>检查客户端状态的cmd指针是否指向NULL，如果是的话，那么说明用户输入的命令名字找不到相应的命令实现，服务器不再执行后续步骤，并向客户端返回一个错误。</p>
<p>根据客户端cmd属性指向的redisCommand结构的arity属性，检查命令请求所给定的参数个数是否正确，当参数个数不正确时，不再执行后续步骤，直接向客户端返回一个错误。比如说，如果redisCommand结构的arity属性的值为-3，那么用户输入的命令参数个数必须大于等于3个才行。</p>
<p>检查客户端是否已经通过了身份验证，未通过身份验证的客户端只能执行AUTH命令，如果未通过身份验证的客户端试图执行除AUTH命令之外的其他命令，那么服务器将向客户端返回一个错误。</p>
<p>如果服务器打开了maxmemory功能，那么在执行命令之前，先检查服务器的内存占用情况，并在有需要时进行内存回收，从而使得接下来的命令可以顺利执行。如果内存回收失败，那么不再执行后续步骤，向客户端返回一个错误。</p>
<p>如果服务器上一次执行BGSAVE命令时出错，并且服务器打开了stop-writes-on-bgsave-error功能，而且服务器即将要执行的命令是一个写命令，那么服务器将拒绝执行这个命令，并向客户端返回一个错误。</p>
<p>如果客户端当前正在用SUBSCRIBE命令订阅频道，或者正在用PSUBSCRIBE命令订阅模式，那么服务器只会执行客户端发来的SUBSCRIBE、PSUBSCRIBE、UNSUBSCRIBE、PUNSUBSCRIBE四个命令，其他命令都会被服务器拒绝。</p>
<p>如果服务器正在进行数据载入，那么客户端发送的命令必须带有l标识（比如INFO、SHUTDOWN、PUBLISH等等）才会被服务器执行，其他命令都会被服务器拒绝。</p>
<p>如果服务器因为执行Lua脚本而超时并进入阻塞状态，那么服务器只会执行客户端发来的SHUTDOWN nosave命令和SCRIPT KILL命令，其他命令都会被服务器拒绝。</p>
<p>如果客户端正在执行事务，那么服务器只会执行客户端发来的EXEC、DISCARD、MULTI、WATCH四个命令，其他命令都会被放进事务队列中。</p>
<p>如果服务器打开了监视器功能，那么服务器会将要执行的命令和参数等信息发送给监视器。当完成了以上预备操作之后，服务器就可以开始真正执行命令了。</p>
<blockquote>
<p>以上只列出了服务器在单机模式下执行命令时的检查操作，当服务器在复制或者集群模式下执行命令时，预备操作还会更多一些。</p>
</blockquote>
<blockquote>
<p>在执行完实现函数之后，服务器还需要执行一些后续工作：❑如果服务器开启了慢查询日志功能，那么慢查询日志模块会检查是否需要为刚刚执行完的命令请求添加一条新的慢查询日志。</p>
</blockquote>
<p>根据刚刚执行命令所耗费的时长，更新被执行命令的redisCommand结构的milliseconds属性，并将命令的redisCommand结构的calls计数器的值增一。</p>
<p>如果服务器开启了AOF持久化功能，那么AOF持久化模块会将刚刚执行的命令请求写入到AOF缓冲区里面。</p>
<p>如果有其他从服务器正在复制当前这个服务器，那么服务器会将刚刚执行的命令传播给所有从服务器。</p>
<blockquote>
<p>当以上操作都执行完了之后，服务器对于当前命令的执行到此就告一段落了，之后服务器就可以继续从文件事件处理器中取出并处理下一个命令请求了。</p>
</blockquote>
<blockquote>
<p>命令实现函数会将命令回复保存到客户端的输出缓冲区里面，并为客户端的套接字关联命令回复处理器，当客户端套接字变为可写状态时，服务器就会执行命令回复处理器，将保存在客户端输出缓冲区中的命令回复发送给客户端。</p>
</blockquote>
<blockquote>
<p>当命令回复发送完毕之后，回复处理器会清空客户端状态的输出缓冲区，为处理下一个命令请求做好准备。</p>
</blockquote>
<p>◆ 14.2 serverCron函数</p>
<blockquote>
<p>Redis服务器中的serverCron函数默认每隔100毫秒执行一次，这个函数负责管理服务器的资源，并保持服务器自身的良好运转。</p>
</blockquote>
<blockquote>
<p>Redis服务器中有不少功能需要获取系统的当前时间，而每次获取系统的当前时间都需要执行一次系统调用，为了减少系统调用的执行次数，服务器状态中的unixtime属性和mstime属性被用作当前时间的缓存</p>
</blockquote>
<blockquote>
<p>因为serverCron函数默认会以每100毫秒一次的频率更新unixtime属性和mstime属性，所以这两个属性记录的时间的精确度并不高：❑服务器只会在打印日志、更新服务器的LRU时钟、决定是否执行持久化任务、计算服务器上线时间（uptime）这类对时间精确度要求不高的功能上。❑对于为键设置过期时间、添加慢查询日志这种需要高精确度时间的功能来说，服务器还是会再次执行系统调用，从而获得最准确的系统当前时间。</p>
</blockquote>
<blockquote>
<p>每个Redis对象都会有一个lru属性，这个lru属性保存了对象最后一次被命令访问的时间</p>
</blockquote>
<blockquote>
<p>当服务器要计算一个数据库键的空转时间（也即是数据库键对应的值对象的空转时间），程序会用服务器的lruclock属性记录的时间减去对象的lru属性记录的时间，得出的计算结果就是这个对象的空转时间</p>
</blockquote>
<blockquote>
<p>serverCron函数默认会以每10秒一次的频率更新lruclock属性的值，因为这个时钟不是实时的，所以根据这个属性计算出来的LRU时间实际上只是一个模糊的估算值。</p>
</blockquote>
<blockquote>
<p>lruclock时钟的当前值可以通过INFO server命令的lru_clock域查看</p>
</blockquote>
<blockquote>
<p>serverCron函数中的trackOperationsPerSecond函数会以每100毫秒一次的频率执行，这个函数的功能是以抽样计算的方式，估算并记录服务器在最近一秒钟处理的命令请求数量，这个值可以通过INFO status命令的instantaneous_ops_per_sec域查看</p>
</blockquote>
<blockquote>
<p>服务器状态中的stat_peak_memory属性记录了服务器的内存峰值大小</p>
</blockquote>
<blockquote>
<p>每次serverCron函数执行时，程序都会查看服务器当前使用的内存数量，并与stat_peak_memory保存的数值进行比较，如果当前使用的内存数量比stat_peak_memory属性记录的值要大，那么程序就将当前使用的内存数量记录到stat_peak_memory属性里面。</p>
</blockquote>
<blockquote>
<p>INFO memory命令的used_memory_peak和used_memory_peak_human两个域分别以两种格式记录了服务器的内存峰值</p>
</blockquote>
<blockquote>
<p>在启动服务器时，Redis会为服务器进程的SIGTERM信号关联处理器sigtermHandler函数，这个信号处理器负责在服务器接到SIGTERM信号时，打开服务器状态的shutdown_asap标识</p>
</blockquote>
<blockquote>
<p>每次serverCron函数运行时，程序都会对服务器状态的shutdown_asap属性进行检查，并根据属性的值决定是否关闭服务器</p>
</blockquote>
<blockquote>
<p>从日志里面可以看到，服务器在关闭自身之前会进行RDB持久化操作，这也是服务器拦截SIGTERM信号的原因，如果服务器一接到SIGTERM信号就立即关闭，那么它就没办法执行持久化操作了。</p>
</blockquote>
<blockquote>
<p>serverCron函数每次执行都会调用clientsCron函数，clientsCron函数会对一定数量的客户端进行以下两个检查：❑如果客户端与服务器之间的连接已经超时（很长一段时间里客户端和服务器都没有互动），那么程序释放这个客户端。❑如果客户端在上一次执行命令请求之后，输入缓冲区的大小超过了一定的长度，那么程序会释放客户端当前的输入缓冲区，并重新创建一个默认大小的输入缓冲区，从而防止客户端的输入缓冲区耗费了过多的内存。</p>
</blockquote>
<blockquote>
<p>serverCron函数每次执行都会调用databasesCron函数，这个函数会对服务器中的一部分数据库进行检查，删除其中的过期键，并在有需要时，对字典进行收缩操作</p>
</blockquote>
<blockquote>
<p>如果服务器开启了AOF持久化功能，并且AOF缓冲区里面还有待写入的数据，那么serverCron函数会调用相应的程序，将AOF缓冲区中的内容写入到AOF文件里面</p>
</blockquote>
<p>◆ 14.3 初始化服务器</p>
<blockquote>
<p>一个Redis服务器从启动到能够接受客户端的命令请求，需要经过一系列的初始化和设置过程，比如初始化服务器状态，接受用户指定的服务器配置，创建相应的数据结构和网络连接等等</p>
</blockquote>
<blockquote>
<p>初始化服务器的第一步就是创建一个struct redisServer类型的实例变量server作为服务器的状态，并为结构中的各个属性设置默认值。</p>
</blockquote>
<blockquote>
<p>初始化server变量的工作由redis.c/initServerConfig函数完成</p>
</blockquote>
<blockquote>
<p>initServerConfig函数设置的服务器状态属性基本都是一些整数、浮点数、或者字符串属性，除了命令表之外，initServerConfig函数没有创建服务器状态的其他数据结构，数据库、慢查询日志、Lua环境、共享对象这些数据结构在之后的步骤才会被创建出来。</p>
</blockquote>
<blockquote>
<p>当initServerConfig函数执行完毕之后，服务器就可以进入初始化的第二个阶段——载入配置选项。</p>
</blockquote>
<blockquote>
<p>服务器在用initServerConfig函数初始化完server变量之后，就会开始载入用户给定的配置参数和配置文件，并根据用户设定的配置，对server变量相关属性的值进行修改。</p>
</blockquote>
<blockquote>
<p>如果用户在启动服务器时为选项databases设置了值32，那么server.dbnum属性的值就会被更新为32，这将使得服务器的数据库数量从默认的16个变为用户指定的32个。</p>
</blockquote>
<blockquote>
<p>在之前执行initServerConfig函数初始化server状态时，程序只创建了命令表一个数据结构，不过除了命令表之外，服务器状态还包含其他数据结构，比如：❑server.clients链表，这个链表记录了所有与服务器相连的客户端的状态结构，链表的每个节点都包含了一个redisClient结构实例。❑server.db数组，数组中包含了服务器的所有数据库。❑用于保存频道订阅信息的server.pubsub_channels字典，以及用于保存模式订阅信息的server.pubsub_patterns链表。❑用于执行Lua脚本的Lua环境server.lua。❑用于保存慢查询日志的server.slowlog属性。</p>
</blockquote>
<blockquote>
<p>除了初始化数据结构之外，initServer还进行了一些非常重要的设置操作，其中包括：❑为服务器设置进程信号处理器。❑创建共享对象：这些对象包含Redis服务器经常用到的一些值，比如包含&quot;OK&quot;回复的字符串对象，包含&quot;ERR&quot;回复的字符串对象，包含整数1到10000的字符串对象等等，服务器通过重用这些共享对象来避免反复创建相同的对象。❑打开服务器的监听端口，并为监听套接字关联连接应答事件处理器，等待服务器正式运行时接受客户端的连接。</p>
</blockquote>
<p>为serverCron函数创建时间事件，等待服务器正式运行时执行serverCron函数。❑如果AOF持久化功能已经打开，那么打开现有的AOF文件，如果AOF文件不存在，那么创建并打开一个新的AOF文件，为AOF写入做好准备。❑初始化服务器的后台I/O模块（bio），为将来的I/O操作做好准备。</p>
<blockquote>
<p>当initServer函数执行完毕之后，服务器将用ASCII字符在日志中打印出Redis的图标，以及Redis的版本号信息</p>
</blockquote>
<blockquote>
<p>在完成了对服务器状态server变量的初始化之后，服务器需要载入RDB文件或者AOF文件，并根据文件记录的内容来还原服务器的数据库状态。</p>
</blockquote>
<blockquote>
<p>根据服务器是否启用了AOF持久化功能，服务器载入数据时所使用的目标文件会有所不同：❑如果服务器启用了AOF持久化功能，那么服务器使用AOF文件来还原数据库状态。❑相反地，如果服务器没有启用AOF持久化功能，那么服务器使用RDB文件来还原数据库状态。</p>
</blockquote>
<blockquote>
<p>在初始化的最后一步</p>
</blockquote>
<blockquote>
<p>开始执行服务器的事件循环（loop）。</p>
</blockquote>
<blockquote>
<p>至此，服务器的初始化工作圆满完成，服务器现在开始可以接受客户端的连接请求，并处理客户端发来的命令请求了。</p>
</blockquote>
<p>◆ 14.4 重点回顾</p>
<p>一个命令请求从发送到完成主要包括以下步骤：1）客户端将命令请求发送给服务器；2）服务器读取命令请求，并分析出命令参数；3）命令执行器根据参数查找命令的实现函数，然后执行实现函数并得出命令回复；4）服务器将命令回复返回给客户端。❑serverCron函数默认每隔100毫秒执行一次，它的工作主要包括更新服务器状态信息，处理服务器接收的SIGTERM信号，管理客户端资源和数据库状态，检查并执行持久化操作等等。❑服务器从启动到能够处理客户端的命令请求需要执行以下步骤：1）初始化服务器状态；2）载入服务器配置；3）初始化服务器数据结构；4）还原数据库状态；5）执行事件循环。</p>
<p>◆ 第15章 复制</p>
<blockquote>
<p>在Redis中，用户可以通过执行SLAVEOF命令或者设置slaveof选项，让一个服务器去复制（replicate）另一个服务器，我们称呼被复制的服务器为主服务器（master），而对主服务器进行复制的服务器则被称为从服务器（slave）</p>
</blockquote>
<blockquote>
<p>进行复制中的主从服务器双方的数据库将保存相同的数据，概念上将这种现象称作“数据库状态一致”，或者简称“一致”。</p>
</blockquote>
<p>◆ 15.1 旧版复制功能的实现</p>
<blockquote>
<p>旧版复制功能的实现Redis的复制功能分为同步（sync）和命令传播（command propagate）两个操作：❑同步操作用于将从服务器的数据库状态更新至主服务器当前所处的数据库状态。❑命令传播操作则用于在主服务器的数据库状态被修改，导致主从服务器的数据库状态出现不一致时，让主从服务器的数据库重新回到一致状态。</p>
</blockquote>
<blockquote>
<p>当客户端向从服务器发送SLAVEOF命令，要求从服务器复制主服务器时，从服务器首先需要执行同步操作，也即是，将从服务器的数据库状态更新至主服务器当前所处的数据库状态。</p>
</blockquote>
<blockquote>
<p>从服务器对主服务器的同步操作需要通过向主服务器发送SYNC命令来完成，以下是SYNC命令的执行步骤：1）从服务器向主服务器发送SYNC命令。2）收到SYNC命令的主服务器执行BGSAVE命令，在后台生成一个RDB文件，并使用一个缓冲区记录从现在开始执行的所有写命令。3）当主服务器的BGSAVE命令执行完毕时，主服务器会将BGSAVE命令生成的RDB文件发送给从服务器，从服务器接收并载入这个RDB文件，将自己的数据库状态更新至主服务器执行BGSAVE命令时的数据库状态。4）主服务器将记录在缓冲区里面的所有写命令发送给从服务器，从服务器执行这些写命令，将自己的数据库状态更新至主服务器数据库当前所处的状态。</p>
</blockquote>
<blockquote>
<p>[插图]图15-2 主从服务器在执行SYNC命令期间的通信过程</p>
</blockquote>
<blockquote>
<p>在同步操作执行完毕之后，主从服务器两者的数据库将达到一致状态，但这种一致并不是一成不变的，每当主服务器执行客户端发送的写命令时，主服务器的数据库就有可能会被修改，并导致主从服务器状态不再一致。</p>
</blockquote>
<blockquote>
<p>为了让主从服务器再次回到一致状态，主服务器需要对从服务器执行命令传播操作：主服务器会将自己执行的写命令，也即是造成主从服务器不一致的那条写命令，发送给从服务器执行，当从服务器执行了相同的写命令之后，主从服务器将再次回到一致状态。</p>
</blockquote>
<p>◆ 15.2 旧版复制功能的缺陷</p>
<blockquote>
<p>旧版复制功能的缺陷</p>
</blockquote>
<blockquote>
<p>在Redis中，从服务器对主服务器的复制可以分为以下两种情况：</p>
</blockquote>
<p>初次复制：从服务器以前没有复制过任何主服务器，或者从服务器当前要复制的主服务器和上一次复制的主服务器不同。</p>
<p>断线后重复制：处于命令传播阶段的主从服务器因为网络原因而中断了复制，但从服务器通过自动重连接重新连上了主服务器，并继续复制主服务器。</p>
<blockquote>
<p>对于初次复制来说，旧版复制功能能够很好地完成任务，但对于断线后重复制来说，旧版复制功能虽然也能让主从服务器重新回到一致状态，但效率却非常低。</p>
</blockquote>
<blockquote>
<p>在时间T10091，从服务器终于重新连接上主服务器，因为这时主从服务器的状态已经不再一致，所以从服务器将向主服务器发送SYNC命令，而主服务器会将包含键k1至键k10089的RDB文件发送给从服务器，从服务器通过接收和载入这个RDB文件来将自己的数据库更新至主服务器数据库当前所处的状态。</p>
</blockquote>
<blockquote>
<p>虽然再次发送SYNC命令可以让主从服务器重新回到一致状态，但如果我们仔细研究这个断线重复制过程，就会发现传送RDB文件这一步实际上并不是非做不可的：❑主从服务器在时间T0至时间T10086中一直处于一致状态，这两个服务器保存的数据大部分都是相同的。</p>
</blockquote>
<p>从服务器想要将自己更新至主服务器当前所处的状态，真正需要的是主从服务器连接中断期间，主服务器新添加的k10087、k10088、k10089三个键的数据。</p>
<p>可惜的是，旧版复制功能并没有利用以上列举的两点条件，而是继续让主服务器生成并向从服务器发送包含键k1至键k10089的RDB文件，但实际上RDB文件包含的键k1至键k10086的数据对于从服务器来说都是不必要的。</p>
<blockquote>
<p>SYNC命令是一个非常耗费资源的操作每次执行SYNC命令，主从服务器需要执行以下动作：</p>
</blockquote>
<blockquote>
<p>1）主服务器需要执行BGSAVE命令来生成RDB文件，这个生成操作会耗费主服务器大量的CPU、内存和磁盘I/O资源。</p>
</blockquote>
<blockquote>
<p>2）主服务器需要将自己生成的RDB文件发送给从服务器，这个发送操作会耗费主从服务器大量的网络资源（带宽和流量），并对主服务器响应命令请求的时间产生影响。</p>
</blockquote>
<blockquote>
<p>3）接收到RDB文件的从服务器需要载入主服务器发来的RDB文件，并且在载入期间，从服务器会因为阻塞而没办法处理命令请求。</p>
</blockquote>
<blockquote>
<p>因为SYNC命令是一个如此耗费资源的操作，所以Redis有必要保证在真正有需要时才执行SYNC命令。</p>
</blockquote>
<p>◆ 15.3 新版复制功能的实现</p>
<blockquote>
<p>为了解决旧版复制功能在处理断线重复制情况时的低效问题，Redis从2.8版本开始，使用PSYNC命令代替SYNC命令来执行复制时的同步操作。</p>
</blockquote>
<blockquote>
<p>PSYNC命令具有完整重同步（full resynchronization）和部分重同步（partialresynchronization）两种模式：❑其中完整重同步用于处理初次复制情况：完整重同步的执行步骤和SYNC命令的执行步骤基本一样，它们都是通过让主服务器创建并发送RDB文件，以及向从服务器发送保存在缓冲区里面的写命令来进行同步。❑而部分重同步则用于处理断线后重复制情况：当从服务器在断线后重新连接主服务器时，如果条件允许，主服务器可以将主从服务器连接断开期间执行的写命令发送给从服务器，从服务器只要接收并执行这些写命令，就可以将数据库更新至主服务器当前所处的状态。</p>
</blockquote>
<blockquote>
<p>PSYNC命令的部分重同步模式解决了旧版复制功能在处理断线后重复制时出现的低效情况</p>
</blockquote>
<blockquote>
<p>对比一下SYNC命令和PSYNC命令处理断线重复制的方法，不难看出，虽然SYNC命令和PSYNC命令都可以让断线的主从服务器重新回到一致状态，但执行部分重同步所需的资源比起执行SYNC命令所需的资源要少得多，完成同步的速度也快得多。执行SYNC命令需要生成、传送和载入整个RDB文件，而部分重同步只需要将从服务器缺少的写命令发送给从服务器执行就可以了。</p>
</blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
<p>◆ 第19章 事务</p>
<blockquote>
<p>Redis通过MULTI、EXEC、WATCH等命令来实现事务（transaction）功能。事务提供了一种将多个命令请求打包，然后一次性、按顺序地执行多个命令的机制，并且在事务执行期间，服务器不会中断事务而改去执行其他客户端的命令请求，它会将事务中的所有命令都执行完毕，然后才去处理其他客户端的命令请求。</p>
</blockquote>
<p>◆ 19.1 事务的实现</p>
<blockquote>
<p>一个事务从开始到结束通常会经历以下三个阶段：1）事务开始。2）命令入队。3）事务执行。</p>
</blockquote>
<blockquote>
<p>MULTI命令的执行标志着事务的开始：</p>
</blockquote>
<blockquote>
<p>当一个客户端切换到事务状态之后，服务器会根据这个客户端发来的不同命令执行不同的操作：❑如果客户端发送的命令为EXEC、DISCARD、WATCH、MULTI四个命令的其中一个，那么服务器立即执行这个命令。❑与此相反，如果客户端发送的命令是EXEC、DISCARD、WATCH、MULTI四个命令以外的其他命令，那么服务器并不立即执行这个命令，而是将这个命令放入一个事务队列里面，然后向客户端返回QUEUED回复。</p>
</blockquote>
<blockquote>
<p>[插图]图19-1 服务器判断命令是该入队还是该执行的过程</p>
</blockquote>
<blockquote>
<p>每个Redis客户端都有自己的事务状态，这个事务状态保存在客户端状态的mstate属性里面</p>
</blockquote>
<blockquote>
<p>事务状态包含一个事务队列，以及一个已入队命令的计数器（也可以说是事务队列的长度）</p>
</blockquote>
<blockquote>
<p>事务队列以先进先出（FIFO）的方式保存入队的命令，较先入队的命令会被放到数组的前面，而较后入队的命令则会被放到数组的后面。</p>
</blockquote>
<blockquote>
<p>当一个处于事务状态的客户端向服务器发送EXEC命令时，这个EXEC命令将立即被服务器执行。服务器会遍历这个客户端的事务队列，执行队列中保存的所有命令，最后将执行命令所得的结果全部返回给客户端。</p>
</blockquote>
<p>◆ 19.2 WATCH命令的实现</p>
<blockquote>
<p>WATCH命令是一个乐观锁（optimistic locking），它可以在EXEC命令执行之前，监视任意数量的数据库键，并在EXEC命令执行时，检查被监视的键是否至少有一个已经被修改过了，如果是的话，服务器将拒绝执行事务，并向客户端返回代表事务执行失败的空回复。</p>
</blockquote>
<blockquote>
<p>每个Redis数据库都保存着一个watched_keys字典，这个字典的键是某个被WATCH命令监视的数据库键，而字典的值则是一个链表，链表中记录了所有监视相应数据库键的客户端</p>
</blockquote>
<blockquote>
<p>通过watched_keys字典，服务器可以清楚地知道哪些数据库键正在被监视，以及哪些客户端正在监视这些数据库键。</p>
</blockquote>
<blockquote>
<p>从这个watched_keys字典中可以看出：❑客户端c1和c2正在监视键&quot;name&quot;。❑客户端c3正在监视键&quot;age&quot;。❑客户端c2和c4正在监视键&quot;address&quot;。</p>
</blockquote>
<blockquote>
<p>所有对数据库进行修改的命令，比如SET、LPUSH、SADD、ZREM、DEL、FLUSHDB等等，在执行之后都会调用multi.c/touchWatchKey函数对watched_keys字典进行检查，查看是否有客户端正在监视刚刚被命令修改过的数据库键，如果有的话，那么touchWatchKey函数会将监视被修改键的客户端的REDIS_DIRTY_CAS标识打开，表示该客户端的事务安全性已经被破坏。</p>
</blockquote>
<blockquote>
<p>当服务器接收到一个客户端发来的EXEC命令时，服务器会根据这个客户端是否打开了REDIS_DIRTY_CAS标识来决定是否执行事务：❑如果客户端的REDIS_DIRTY_CAS标识已经被打开，那么说明客户端所监视的键当中，至少有一个键已经被修改过了，在这种情况下，客户端提交的事务已经不再安全，所以服务器会拒绝执行客户端提交的事务。</p>
</blockquote>
<p>如果客户端的REDIS_DIRTY_CAS标识没有被打开，那么说明客户端监视的所有键都没有被修改过（或者客户端没有监视任何键），事务仍然是安全的，服务器将执行客户端提交的这个事务。</p>
<p>◆ 19.3 事务的ACID性质</p>
<blockquote>
<p>在Redis中，事务总是具有原子性（Atomicity）、一致性（Consistency）和隔离性（Isolation），并且当Redis运行在某种特定的持久化模式下时，事务也具有耐久性（Durability）。</p>
</blockquote>
<blockquote>
<p>事务具有原子性指的是，数据库将事务中的多个操作当作一个整体来执行，服务器要么就执行事务中的所有操作，要么就一个操作也不执行。</p>
</blockquote>
<blockquote>
<p>Redis的事务和传统的关系型数据库事务的最大区别在于，Redis不支持事务回滚机制（rollback），即使事务队列中的某个命令在执行期间出现了错误，整个事务也会继续执行下去，直到将事务队列中的所有命令都执行完毕为止。</p>
</blockquote>
<blockquote>
<p>Redis的作者在事务功能的文档中解释说，不支持事务回滚是因为这种复杂的功能和Redis追求简单高效的设计主旨不相符，并且他认为，Redis事务的执行时错误通常都是编程错误产生的，这种错误通常只会出现在开发环境中，而很少会在实际的生产环境中出现，所以他认为没有必要为Redis开发事务回滚功能。</p>
</blockquote>
<blockquote>
<p>事务具有一致性指的是，如果数据库在执行事务之前是一致的，那么在事务执行之后，无论事务是否执行成功，数据库也应该仍然是一致的。</p>
</blockquote>
<blockquote>
<p>“一致”指的是数据符合数据库本身的定义和要求，没有包含非法或者无效的错误数据。</p>
</blockquote>
<blockquote>
<p>以下三个小节将分别介绍三个Redis事务可能出错的地方，并说明Redis是如何妥善地处理这些错误，从而确保事务的一致性的。</p>
</blockquote>
<blockquote>
<p>1.入队错误如果一个事务在入队命令的过程中，出现了命令不存在，或者命令的格式不正确等情况，那么Redis将拒绝执行这个事务。</p>
</blockquote>
<blockquote>
<p>在Redis 2.6.5以前的版本，即使有命令在入队过程中发生了错误，事务一样可以执行，不过被执行的命令只包括那些正确入队的命令。</p>
</blockquote>
<blockquote>
<p>因为错误的命令不会被入队，所以Redis不会尝试去执行错误的命令，因此，即使在2.6.5以前的版本中，Redis事务的一致性也不会被入队错误影响。</p>
</blockquote>
<blockquote>
<p>2.执行错误除了入队时可能发生错误以外，事务还可能在执行的过程中发生错误。</p>
</blockquote>
<blockquote>
<p>关于这种错误有两个需要说明的地方：❑执行过程中发生的错误都是一些不能在入队时被服务器发现的错误，这些错误只会在命令实际执行时被触发。❑即使在事务的执行过程中发生了错误，服务器也不会中断事务的执行，它会继续执行事务中余下的其他命令，并且已执行的命令（包括执行命令所产生的结果）不会被出错的命令影响。</p>
</blockquote>
<blockquote>
<p>对数据库键执行了错误类型的操作是事务执行期间最常见的错误之一。</p>
</blockquote>
<blockquote>
<p>3.服务器停机如果Redis服务器在执行事务的过程中停机，那么根据服务器所使用的持久化模式，可能有以下情况出现：</p>
</blockquote>
<p>如果服务器运行在无持久化的内存模式下，那么重启之后的数据库将是空白的，因此数据总是一致的。</p>
<p>如果服务器运行在RDB模式下，那么在事务中途停机不会导致不一致性，因为服务器可以根据现有的RDB文件来恢复数据，从而将数据库还原到一个一致的状态。如果找不到可供使用的RDB文件，那么重启之后的数据库将是空白的，而空白数据库总是一致的。</p>
<p>如果服务器运行在AOF模式下，那么在事务中途停机不会导致不一致性，因为服务器可以根据现有的AOF文件来恢复数据，从而将数据库还原到一个一致的状态。如果找不到可供使用的AOF文件，那么重启之后的数据库将是空白的，而空白数据库总是一致的。</p>
<blockquote>
<p>综上所述，无论Redis服务器运行在哪种持久化模式下，事务执行中途发生的停机都不会影响数据库的一致性。</p>
</blockquote>
<blockquote>
<p>事务的隔离性指的是，即使数据库中有多个事务并发地执行，各个事务之间也不会互相影响，并且在并发状态下执行的事务和串行执行的事务产生的结果完全相同。</p>
</blockquote>
<blockquote>
<p>因为Redis使用单线程的方式来执行事务（以及事务队列中的命令），并且服务器保证，在执行事务期间不会对事务进行中断，因此，Redis的事务总是以串行的方式运行的，并且事务也总是具有隔离性的。</p>
</blockquote>
<blockquote>
<p>事务的耐久性指的是，当一个事务执行完毕时，执行这个事务所得的结果已经被保存到永久性存储介质（比如硬盘）里面了，即使服务器在事务执行完毕之后停机，执行事务所得的结果也不会丢失。</p>
</blockquote>
<blockquote>
<p>因为Redis的事务不过是简单地用队列包裹起了一组Redis命令，Redis并没有为事务提供任何额外的持久化功能，所以Redis事务的耐久性由Redis所使用的持久化模式决定：</p>
</blockquote>
<p>当服务器在无持久化的内存模式下运作时，事务不具有耐久性：一旦服务器停机，包括事务数据在内的所有服务器数据都将丢失。</p>
<p>当服务器在RDB持久化模式下运作时，服务器只会在特定的保存条件被满足时，才会执行BGSAVE命令，对数据库进行保存操作，并且异步执行的BGSAVE不能保证事务数据被第一时间保存到硬盘里面，因此RDB持久化模式下的事务也不具有耐久性。</p>
<p>当服务器运行在AOF持久化模式下，并且appendfsync选项的值为always时，程序总会在执行命令之后调用同步（sync）函数，将命令数据真正地保存到硬盘里面，因此这种配置下的事务是具有耐久性的。</p>
<p>当服务器运行在AOF持久化模式下，并且appendfsync选项的值为everysec时，程序会每秒同步一次命令数据到硬盘。因为停机可能会恰好发生在等待同步的那一秒钟之内，这可能会造成事务数据丢失，所以这种配置下的事务不具有耐久性。</p>
<p>当服务器运行在AOF持久化模式下，并且appendfsync选项的值为no时，程序会交由操作系统来决定何时将命令数据同步到硬盘。因为事务数据可能在等待同步的过程中丢失，所以这种配置下的事务不具有耐久性。</p>
<blockquote>
<p>不论Redis在什么模式下运作，在一个事务的最后加上SAVE命令总可以保证事务的耐久性</p>
</blockquote>
<blockquote>
<p>不过因为这种做法的效率太低，所以并不具有实用性。</p>
</blockquote>
<p>◆ 19.4 重点回顾</p>
<blockquote>
<p>重点回顾❑事务提供了一种将多个命令打包，然后一次性、有序地执行的机制。❑多个命令会被入队到事务队列中，然后按先进先出（FIFO）的顺序执行。❑事务在执行过程中不会被中断，当事务队列中的所有命令都被执行完毕之后，事务才会结束。</p>
</blockquote>
<p>带有WATCH命令的事务会将客户端和被监视的键在数据库的watched_keys字典中进行关联，当键被修改时，程序会将所有监视被修改键的客户端的REDIS_DIRTY_CAS标志打开。</p>
<p>只有在客户端的REDIS_DIRTY_CAS标志未被打开时，服务器才会执行客户端提交的事务，否则的话，服务器将拒绝执行客户端提交的事务。❑Redis的事务总是具有ACID中的原子性、一致性和隔离性，当服务器运行在AOF持久化模式下，并且appendfsync选项的值为always时，事务也具有耐久性。</p>
<p>◆ 第23章 慢查询日志</p>
<blockquote>
<p>Redis的慢查询日志功能用于记录执行时间超过给定时长的命令请求，用户可以通过这个功能产生的日志来监视和优化查询速度。</p>
</blockquote>
<blockquote>
<p>服务器配置有两个和慢查询日志相关的选项：❑slowlog-log-slower-than选项指定执行时间超过多少微秒（1秒等于1000 000微秒）的命令请求会被记录到日志上。</p>
</blockquote>
<blockquote>
<p>举个例子，如果这个选项的值为100，那么执行时间超过100微秒的命令就会被记录到慢查询日志；如果这个选项的值为500，那么执行时间超过500微秒的命令就会被记录到慢查询日志。❑slowlog-max-len选项指定服务器最多保存多少条慢查询日志。</p>
</blockquote>
<blockquote>
<p>服务器使用先进先出的方式保存多条慢查询日志，当服务器存储的慢查询日志数量等于slowlog-max-len选项的值时，服务器在添加一条新的慢查询日志之前，会先将最旧的一条慢查询日志删除。</p>
</blockquote>
<blockquote>
<p>首先用CONFIG SET命令将slowlog-log-slower-than选项的值设为0微秒，这样Redis服务器执行的任何命令都会被记录到慢查询日志中，接着将slowlog-max-len选项的值设为5，让服务器最多只保存5条慢查询日志</p>
</blockquote>
<blockquote>
<p>使用SLOWLOG GET命令查看服务器所保存的慢查询日志</p>
</blockquote>
<p>◆ 23.4 重点回顾</p>
<p>Redis的慢查询日志功能用于记录执行时间超过指定时长的命令。❑Redis服务器将所有的慢查询日志保存在服务器状态的slowlog链表中，每个链表节点都包含一个slowlogEntry结构，每个slowlogEntry结构代表一条慢查询日志。</p>
<p>打印和删除慢查询日志可以通过遍历slowlog链表来完成。</p>
<p>slowlog链表的长度就是服务器所保存慢查询日志的数量。</p>
<p>新的慢查询日志会被添加到slowlog链表的表头，如果日志的数量超过slowlog-max-len选项的值，那么多出来的日志会被删除。</p>
<p>◆ 第24章 监视器</p>
<blockquote>
<p>通过执行MONITOR命令，客户端可以将自己变为一个监视器，实时地接收并打印出服务器当前处理的命令请求的相关信息</p>
</blockquote>
<blockquote>
<p>每当一个客户端向服务器发送一条命令请求时，服务器除了会处理这条命令请求之外，还会将关于这条命令请求的信息发送给所有监视器</p>
</blockquote>
<blockquote>
<p>[插图]</p>
</blockquote>
<p>◆ 24.3 重点回顾</p>
<p>客户端可以通过执行MONITOR命令，将客户端转换成监视器，接收并打印服务器处理的每个命令请求的相关信息。❑当一个客户端从普通客户端变为监视器时，该客户端的REDIS_MONITOR标识会被打开。❑服务器将所有监视器都记录在monitors链表中。❑每次处理命令请求时，服务器都会遍历monitors链表，将相关信息发送给监视器。</p>
</div></template>



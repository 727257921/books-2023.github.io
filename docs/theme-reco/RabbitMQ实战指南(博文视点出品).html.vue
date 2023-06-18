<template><div><h1 id="rabbitmq实战指南-博文视点出品" tabindex="-1"><a class="header-anchor" href="#rabbitmq实战指南-博文视点出品" aria-hidden="true">#</a> RabbitMQ实战指南(博文视点出品)</h1>
<p>朱忠华</p>
<h2 id="◆-第1章-rabbitmq简介" tabindex="-1"><a class="header-anchor" href="#◆-第1章-rabbitmq简介" aria-hidden="true">#</a> ◆ 第1章 RabbitMQ简介</h2>
<h3 id="_1-1-什么是消息中间件" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是消息中间件" aria-hidden="true">#</a> 1.1 什么是消息中间件</h3>
<blockquote>
<blockquote>
<p>消息（Message）是指在应用间传送的数据。消息可以非常简单，比如只包含文本字符串、JSON等，也可以很复杂，比如内嵌对象。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息队列中间件（Message Queue Middleware，简称为MQ）是指利用高效可靠的消息传递机制进行与平台无关的数据交流，并基于数据通信来进行分布式系统的集成。通过提供消息传递和消息排队模型，它可以在分布式环境下扩展进程间的通信。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息队列中间件，也可以称为消息队列或者消息中间件。它一般有两种传递模式：点对点（P2P，Point-to-Point）模式和发布/订阅（Pub/Sub）模式。点对点模式是基于队列的，消息生产者发送消息到队列，消息消费者从队列中接收消息，队列的存在使得消息的异步传输成为可能。发布订阅模式定义了如何向一个内容节点发布和订阅消息，这个内容节点称为主题（topic），主题可以认为是消息传递的中介，消息发布者将消息发布到某个主题，而消息订阅者则从主题中订阅消息。主题使得消息的订阅者与消息的发布者互相保持独立，不需要进行接触即可保证消息的传递，发布/订阅模式在消息的一对多广播时采用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>目前开源的消息中间件有很多，比较主流的有RabbitMQ、Kafka、ActiveMQ、RocketMQ等。面向消息的中间件（简称为MOM，Message Oriented Middleware）提供了以松散耦合的灵活方式集成应用程序的一种机制。它们提供了基于存储和转发的应用程序之间的异步数据发送，即应用程序彼此不直接通信，而是与作为中介的消息中间件通信。消息中间件提供了有保证的消息发送，应用程序开发人员无须了解远程过程调用（RPC）和网络通信协议的细节。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息中间件适用于需要可靠的数据传送的分布式环境。采用消息中间件的系统中，不同的对象之间通过传递消息来激活对方的事件，以完成相应的操作。发送者将消息发送给消息服务器，消息服务器将消息存放在若干队列中，在合适的时候再将消息转发给接收者。消息中间件能在不同平台之间通信，它常被用来屏蔽各种平台及协议之间的特性，实现应用程序之间的协同，其优点在于能够在客户和服务器之间提供同步和异步的连接，并且在任何时刻都可以将消息进行传送或者存储转发，这也是它比远程过程调用更进步的原因。</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100156353.png" alt="image-20220126100156353"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息中间件负责处理网络通信，如果网络连接不可用，消息中间件会存储消息，直到连接变得可用，再将消息转发给应用程序B。灵活性的另一方面体现在，当应用程序A发送其消息时，应用程序B甚至可以处于不运行状态，消息中间件将保留这份消息，直到应用程序B开始执行并消费消息，这样还防止了应用程序A因为等待应用程序B消费消息而出现阻塞。这种异步通信方式要求应用程序的设计与现在大多数应用不同。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>消息中间件的作用可以概括如下。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>解耦：在项目启动之初来预测将来会碰到什么需求是极其困难的。消息中间件在处理过程中间插入了一个隐含的、基于数据的接口层，两边的处理过程都要实现这一接口，这允许你独立地扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>冗余（存储）：有些情况下，处理数据的过程会失败。消息中间件可以把数据进行持久化直到它们已经被完全处理，通过这一方式规避了数据丢失风险。在把一个消息从消息中间件中删除之前，需要你的处理系统明确地指出该消息已经被处理完成，从而确保你的数据被安全地保存直到你使用完毕。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>扩展性：因为消息中间件解耦了应用的处理过程，所以提高消息入队和处理的效率是很容易的，只要另外增加处理过程即可，不需要改变代码，也不需要调节参数。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>削峰：在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见。如果以能处理这类峰值为标准而投入资源，无疑是巨大的浪费。使用消息中间件能够使关键组件支撑突发访问压力，不会因为突发的超负荷请求而完全崩溃。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可恢复性：当系统一部分组件失效时，不会影响到整个系统。消息中间件降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入消息中间件中的消息仍然可以在系统恢复后进行处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>顺序保证：在大多数使用场景下，数据处理的顺序很重要，大部分消息中间件支持一定程度上的顺序性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>缓冲：在任何重要的系统中，都会存在需要不同处理时间的元素。消息中间件通过一个缓冲层来帮助任务最高效率地执行，写入消息中间件的处理会尽可能快速。该缓冲层有助于控制和优化数据流经过系统的速度。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>异步通信：在很多时候应用不想也不需要立即处理消息。消息中间件提供了异步处理机制，允许应用把一些消息放入消息中间件中，但并不立即处理它，在之后需要的时候再慢慢处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ是采用Erlang语言实现AMQP（Advanced Message Queuing Protocol，高级消息队列协议）的消息中间件，它最初起源于金融系统，用于在分布式系统中存储转发消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>RabbitMQ的具体特点可以概括为以下几点。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可靠性：RabbitMQ使用一些机制来保证可靠性，如持久化、传输确认及发布确认等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>灵活的路由：在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能，RabbitMQ已经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个交换器绑定在一起，也可以通过插件机制来实现自己的交换器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>扩展性：多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展集群中节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>高可用性：队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队列仍然可用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多种协议：RabbitMQ除了原生支持AMQP协议，还支持STOMP、MQTT等多种消息中间件协议。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多语言客户端：RabbitMQ几乎支持所有常用语言，比如Java、Python、Ruby、PHP、C＃、JavaScript等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>管理界面：RabbitMQ提供了一个易用的用户界面，使得用户可以监控和管理消息、集群中的节点等。插件机制：RabbitMQ提供了许多插件，以实现从多方面进行扩展，当然也可以编写自己的插件。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ是由Erlang语言编写的，也正因如此，在安装RabbitMQ之前需要安装Erlang。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以输入erl命令来验证Erlang是否安装成功</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ的安装比Erlang的安装要简单，直接将下载的安装包解压到相应的目录下即可</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在rabbitmq-server命令后面添加一个“-detached”参数是为了能够让RabbitMQ服务以守护进程的方式在后台运行，这样就不会因为当前Shell窗口的关闭而影响服务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>运行rabbitmqctl status命令查看RabbitMQ是否正常启动</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>也可以通过rabbitmqctl cluster_status命令来查看集群信息，目前只有一个RabbitMQ服务节点，可以看作单节点的集群</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本节将演示如何使用RabbitMQ Java客户端生产和消费消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下，访问RabbitMQ服务的用户名和密码都是“guest”，这个账户有限制，默认只能通过本地网络（如localhost）访问，远程网络访问受限，所以在实现生产和消费消息之前，需要另外添加一个用户，并设置相应的访问权限。</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100329906.png" alt="image-20220126100329906"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码清单1-1 消费者客户端代码</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>上面的生产者客户端的代码首先和RabbitMQ服务器建立一个连接（Connection），然后在这个连接之上创建一个信道（Channel）。之后创建一个交换器（Exchange）和一个队列（Queue），并通过路由键进行绑定，然后发送一条消息，最后关闭资源。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>注意这里采用的是继承DefaultConsumer的方式来实现消费，有过RabbitMQ使用经验的读者也许会喜欢采用QueueingConsumer的方式来实现消费，但是我们并不推荐，使用QueueingConsumer会有一些隐患。同时，在RabbitMQ Java客户端4.0.0版本开始将QueueingConsumer标记为@Deprecated，在后面的大版本中会删除这个类</p>
</blockquote>
</blockquote>
<h2 id="◆-第2章-rabbitmq入门" tabindex="-1"><a class="header-anchor" href="#◆-第2章-rabbitmq入门" aria-hidden="true">#</a> ◆ 第2章 RabbitMQ入门</h2>
<blockquote>
<blockquote>
<p>RabbitMQ整体上是一个生产者与消费者模型，主要负责接收、存储和转发消息。可以把消息传递的过程想象成：当你将一个包裹送到邮局，邮局会暂存并最终将邮件通过邮递员送到收件人的手上，RabbitMQ就好比由邮局、邮箱和邮递员组成的一个系统。从计算机术语层面来说，RabbitMQ模型更像是一种交换机模型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ的整体模型架构如图2-1所示</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100411219.png" alt="image-20220126100411219"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>生产者创建消息，然后发布到RabbitMQ中。消息一般可以包含2个部分：消息体和标签（Label）。消息体也可以称之为payload，在实际应用中，消息体一般是一个带有业务逻辑结构的数据，比如一个JSON字符串。当然可以进一步对这个消息体进行序列化操作。消息的标签用来表述这条消息，比如一个交换器的名称和一个路由键。生产者把消息交由RabbitMQ，RabbitMQ之后会根据标签把消息发送给感兴趣的消费者（Consumer）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Consumer：消费者，就是接收消息的一方。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费者连接到RabbitMQ服务器，并订阅到队列上。当消费者消费一条消息时，只是消费消息的消息体（payload）。在消息路由的过程中，消息的标签会丢弃，存入到队列中的消息只有消息体，消费者也只会消费到消息体，也就不知道消息的生产者是谁，当然消费者也不需要知道。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Broker：消息中间件的服务节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于RabbitMQ来说，一个RabbitMQ Broker可以简单地看作一个RabbitMQ服务节点，或者RabbitMQ服务实例。大多数情况下也可以将一个RabbitMQ Broker看作一台RabbitMQ服务器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图2-2展示了生产者将消息存入RabbitMQ Broker，以及消费者从Broker中消费数据的整个流程。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100427457.png" alt="image-20220126100427457"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>首先生产者将业务方数据进行可能的包装，之后封装成消息，发送（AMQP协议里这个动作对应的命令为Basic.Publish）到Broker中。消费者订阅并接收消息（AMQP协议里这个动作对应的命令为Basic.Consume或者Basic.Get），经过可能的解包处理得到原始的数据，之后再进行业务处理逻辑。这个业务处理逻辑并不一定需要和接收消息的逻辑使用同一个线程。消费者进程可以使用一个线程去接收消息，存入到内存中，比如使用Java中的BlockingQueue。业务处理逻辑使用另一个线程从内存中读取数据，这样可以将应用进一步解耦，提高整个应用的处理效率。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Queue：队列，是RabbitMQ的内部对象，用于存储消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ中消息都只能存储在队列中，这一点和Kafka这种消息中间件相反。Kafka将消息存储在topic（主题）这个逻辑层面，而相对应的队列逻辑只是topic实际存储文件中的位移标识。RabbitMQ的生产者生产消息并最终投递到队列中，消费者可以从队列中获取消息并消费。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多个消费者可以订阅同一个队列，这时队列中的消息会被平均分摊（Round-Robin，即轮询）给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100444121.png" alt="image-20220126100444121"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ不支持队列层面的广播消费，如果需要广播消费，需要在其上进行二次开发，处理逻辑会变得异常复杂，同时也不建议这么做。</p>
</blockquote>
</blockquote>
<h3 id="_2-1-3-交换器、路由键、绑定" tabindex="-1"><a class="header-anchor" href="#_2-1-3-交换器、路由键、绑定" aria-hidden="true">#</a> 2.1.3 交换器、路由键、绑定</h3>
<blockquote>
<blockquote>
<p>Exchange：交换器。在图2-4中我们暂时可以理解成生产者将消息投递到队列中，实际上这个在RabbitMQ中不会发生。真实情况是，生产者将消息发送到Exchange（交换器，通常也可以用大写的“X”来表示），由交换器将消息路由到一个或者多个队列中。如果路由不到，或许会返回给生产者，或许直接丢弃。这里可以将RabbitMQ中的交换器看作一个简单的实体</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>交换器的具体示意图如图2-5所示</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100512036.png" alt="image-20220126100512036"></p>
</blockquote>
</blockquote>
<h4 id="rabbitmq中的交换器有四种类型-不同的类型有着不同的路由策略" tabindex="-1"><a class="header-anchor" href="#rabbitmq中的交换器有四种类型-不同的类型有着不同的路由策略" aria-hidden="true">#</a> RabbitMQ中的交换器有四种类型，不同的类型有着不同的路由策略</h4>
<blockquote>
<blockquote>
<p>RoutingKey：路由键。生产者将消息发给交换器的时候，一般会指定一个RoutingKey，用来指定这个消息的路由规则，而这个Routing Key需要与交换器类型和绑定键（BindingKey）联合使用才能最终生效。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在交换器类型和绑定键（BindingKey）固定的情况下，生产者可以在发送消息给交换器时，通过指定RoutingKey来决定消息流向哪里。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Binding：绑定。RabbitMQ中通过绑定将交换器与队列关联起来，在绑定的时候一般会指定一个绑定键（BindingKey），这样RabbitMQ就知道如何正确地将消息路由到队列了</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>生产者将消息发送给交换器时，需要一个RoutingKey，当BindingKey和RoutingKey相匹配时，消息会被路由到对应的队列中。在绑定多个队列到同一个交换器的时候，这些绑定允许使用相同的BindingKey。BindingKey并不是在所有的情况下都生效，它依赖于交换器类型，比如fanout类型的交换器就会无视BindingKey，而是将消息路由到所有绑定到该交换器的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>交换器相当于投递包裹的邮箱，RoutingKey相当于填写在包裹上的地址，BindingKey相当于包裹的目的地，当填写在包裹上的地址和实际想要投递的地址相匹配时，那么这个包裹就会被正确投递到目的地，最后这个目的地的“主人”——队列可以保留这个包裹。如果填写的地址出错，邮递员不能正确投递到目的地，包裹可能会回退给寄件人，也有可能被丢弃。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在topic交换器类型下，RoutingKey和BindingKey之间需要做模糊匹配，两者并不是相同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>BindingKey其实也属于路由键中的一种</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在绑定的时候使用的路由键。大多数时候，包括官方文档和RabbitMQ Java API中都把BindingKey和RoutingKey看作RoutingKey，为了避免混淆，可以这么理解：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用绑定的时候，其中需要的路由键是BindingKey。涉及的客户端方法如：channel.exchangeBind、channel.queueBind，对应的AMQP命令（详情参见2.2节）为Exchange.Bind、Queue.Bind。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在发送消息的时候，其中需要的路由键是RoutingKey。涉及的客户端方法如channel.basicPublish，对应的AMQP命令为Basic.Publish。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>大多数情况下习惯性地将BindingKey写成RoutingKey，尤其是在使用direct类型的交换器的时候。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ常用的交换器类型有fanout、direct、topic、headers这四种。AMQP协议里还提到另外两种类型：System和自定义</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>fanout它会把所有发送到该交换器的消息路由到所有与该交换器绑定的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>directdirect类型的交换器路由规则也很简单，它会把消息路由到那些BindingKey和RoutingKey完全匹配的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以图2-7为例，交换器的类型为direct，如果我们发送一条消息，并在发送消息的时候设置路由键为“warning”，则消息会路由到Queue1和Queue2，对应的示例代码如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100548766.png" alt="image-20220126100548766"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果在发送消息的时候设置路由键为“info”或者“debug”，消息只会路由到Queue2。如果以其他的路由键发送消息，则消息不会路由到这两个队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>topic：前面讲到direct类型的交换器路由规则是完全匹配BindingKey和RoutingKey，但是这种严格的匹配方式在很多情况下不能满足实际业务的需求。topic类型的交换器在匹配规则上进行了扩展，它与direct类型的交换器相似，也是将消息路由到BindingKey和RoutingKey相匹配的队列中，但这里的匹配规则有些不同，它约定：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RoutingKey为一个点号“.”分隔的字符串（被点号“.”分隔开的每一段独立的字符串称为一个单词），如“com.rabbitmq.client”、“java.util.concurrent”、“com.hidden.client”；BindingKey和RoutingKey一样也是点号“.”分隔的字符串；</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>BindingKey中可以存在两种特殊字符串“*”和“＃”，用于做模糊匹配，其中“＃”用于匹配一个单词，“＃”用于匹配多规格单词（可以是零个）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>●路由键为“com.rabbitmq.client”的消息会同时路由到Queue1和Queue2；●路由键为“com.hidden.client”的消息只会路由到Queue2中；●路由键为“com.hidden.demo”的消息只会路由到Queue2中；</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>●路由键为“java.rabbitmq.demo”的消息只会路由到Queue1中；●路由键为“java.util.concurrent”的消息将会被丢弃或者返回给生产者（需要设置mandatory参数），因为它没有匹配任何路由键。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100616312.png" alt="image-20220126100616312"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>headers</p>
<p>headers类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的headers属性进行匹配。在绑定队列和交换器时制定一组键值对，当发送消息到交换器时，RabbitMQ会获取到该消息的headers（也是一个键值对的形式），对比其中的键值对是否完全匹配队列和交换器绑定时指定的键值对，如果完全匹配则消息会路由到该队列，否则不会路由到该队列。headers类型的交换器性能会很差，而且也不实用，基本上不会看到它的存在。</p>
</blockquote>
</blockquote>
<h3 id="_2-1-5-rabbitmq运转流程" tabindex="-1"><a class="header-anchor" href="#_2-1-5-rabbitmq运转流程" aria-hidden="true">#</a> 2.1.5 RabbitMQ运转流程</h3>
<blockquote>
<blockquote>
<p>在最初状态下，生产者发送消息的时候</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）生产者连接到RabbitMQ Broker，建立一个连接（Connection），开启一个信道（Channel）（详细内容请参考3.1节）。</p>
<p>（2）生产者声明一个交换器，并设置相关属性，比如交换机类型、是否持久化等（详细内容请参考3.2节）。</p>
<p>（3）生产者声明一个队列并设置相关属性，比如是否排他、是否持久化、是否自动删除等</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）生产者通过路由键将交换器和队列绑定起来</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）生产者发送消息至RabbitMQ Broker，其中包含路由键、交换器等信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）相应的交换器根据接收到的路由键查找相匹配的队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（7）如果找到，则将从生产者发送过来的消息存入相应的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（8）如果没有找到，则根据生产者配置的属性选择丢弃还是回退给生产者</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（9）关闭信道。</p>
<p>（10）关闭连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费者接收消息的过程：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（1）消费者连接到RabbitMQ Broker，建立一个连接（Connection），开启一个信道（Channel）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（2）消费者向RabbitMQ Broker请求消费相应队列中的消息，可能会设置相应的回调函数，以及做一些准备工作</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（3）等待RabbitMQ Broker回应并投递相应队列中的消息，消费者接收消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（4）消费者确认（ack）接收到的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（5）RabbitMQ从队列中删除相应已经被确认的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>（6）关闭信道。（7）关闭连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>两个新的概念：Connection和Channel。我们知道无论是生产者还是消费者，都需要和RabbitMQ Broker建立连接，这个连接就是一条TCP连接，也就是Connection。一旦TCP连接建立起来，客户端紧接着可以创建一个AMQP信道（Channel），每个信道都会被指派一个唯一的ID。信道是建立在Connection之上的虚拟连接，RabbitMQ处理的每条AMQP指令都是通过信道完成的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100657124.png" alt="image-20220126100657124"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们完全可以直接使用Connection就能完成信道的工作，为什么还要引入信道呢？试想这样一个场景，一个应用程序中有很多个线程需要从RabbitMQ中消费消息，或者生产消息，那么必然需要建立很多个Connection，也就是许多个TCP连接。然而对于操作系统而言，建立和销毁TCP连接是非常昂贵的开销，如果遇到使用高峰，性能瓶颈也随之显现。RabbitMQ采用类似NIO（Non-blocking I/O）的做法，选择TCP连接复用，不仅可以减少性能开销，同时也便于管理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每个线程把持一个信道，所以信道复用了Connection的TCP连接。同时RabbitMQ可以确保每个线程的私密性，就像拥有独立的连接一样。当每个信道的流量不是很大时，复用单一的Connection可以在产生性能瓶颈的情况下有效地节省TCP连接资源。但是当信道本身的流量很大时，这时候多个信道复用一个Connection就会产生性能瓶颈，进而使整体的流量被限制了。此时就需要开辟多个Connection，将这些信道均摊到这些Connection中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>信道在AMQP中是一个很重要的概念，大多数操作都是在信道这个层面展开的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ是遵从AMQP协议的，换句话说，RabbitMQ就是AMQP协议的Erlang的实现（当然RabbitMQ还支持STOMP[插图]、MQTT[插图]等协议）。AMQP的模型架构和RabbitMQ的模型架构是一样的，生产者将消息发送给交换器，交换器和队列绑定。当生产者发送消息时所携带的RoutingKey与绑定时的BindingKey相匹配时，消息即被存入相应的队列之中。消费者可以订阅相应的队列来获取消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ中的交换器、交换器类型、队列、绑定、路由键等都是遵循的AMQP协议中相应的概念。目前RabbitMQ最新版本默认支持的是AMQP 0-9-1。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>AMQP协议本身包括三层。</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Module Layer：位于协议最高层，主要定义了一些供客户端调用的命令，客户端可以利用这些命令实现自己的业务逻辑。例如，客户端可以使用Queue.Declare命令声明一个队列或者使用Basic.Consume订阅消费一个队列中的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Session Layer：位于中间层，主要负责将客户端的命令发送给服务器，再将服务端的应答返回给客户端，主要为客户端与服务器之间的通信提供可靠性同步机制和错误处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Transport Layer：位于最底层，主要传输二进制数据流，提供帧的处理、信道复用、错误检测和数据表示等。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQP说到底还是一个通信协议，通信协议都会涉及报文交互，从low-level举例来说，AMQP本身是应用层的协议，其填充于TCP协议层的数据部分。而从high-level来说，AMQP是通过协议命令进行交互的。AMQP协议可以看作一系列结构化命令的集合，这里的命令代表一种操作，类似于HTTP中的方法（GET、POST、PUT、DELETE等）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当客户端调用connection.createChannel方法准备开启信道的时候，其包装Channel.Open命令发送给Broker，等待Channel.Open-Ok命令。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当客户端发送消息的时候，需要调用channel.basicPublish方法，对应的AQMP命令为Basic.Publish</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这个命令还包含了Content Header和Content Body。Content Header里面包含的是消息体的属性，例如，投递模式（可以参考3.3节）、优先级等，而Content Body包含消息体本身。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当客户端发送完消息需要关闭资源时，涉及Channel.Close/.Close-Ok与Connection.Close/.Close-Ok的命令交互。详细流转过程如图2-10所示。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100746021.png" alt="image-20220126100746021"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQP消费者流转过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100801279.png" alt="image-20220126100801279"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费者客户端同样需要与Broker建立连接，与生产者客户端一样，协议交互同样涉及Connection.Start/.Start-Ok、Connection.Tune/.Tune-Ok和Connection.Open/.Open-Ok等</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在真正消费之前，消费者客户端需要向Broker发送Basic.Consume命令（即调用channel.basicConsume方法）将Channel置为接收模式，之后Broker回执Basic.Consume-Ok以告诉消费者客户端准备好消费消息。紧接着Broker向消费者客户端推送（Push）消息，即Basic.Deliver命令，有意思的是这个和Basic.Publish命令一样会携带Content Header和Content Body。</p>
</blockquote>
</blockquote>
<h1 id="深入rabbitmq" tabindex="-1"><a class="header-anchor" href="#深入rabbitmq" aria-hidden="true">#</a> 深入RabbitMQ</h1>
<p>加文·罗伊</p>
<h3 id="◆-1-1-rabbitmq特性以及好处" tabindex="-1"><a class="header-anchor" href="#◆-1-1-rabbitmq特性以及好处" aria-hidden="true">#</a> ◆ 1.1 RabbitMQ特性以及好处</h3>
<blockquote>
<blockquote>
<p>RabbitMQ拥有众多特性和好处，我们把最重要的列举如下：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 开源</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 平台和供应商无关性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 轻量级——RabbitMQ是轻量级的，运行RabbitMQ核心功能以及诸如管理界面的插件只需要不到40MB内存。请注意往队列中添加消息可能会增加其内存使用量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 面向大多数现代语言的客户端开发库</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 灵活控制消息通信的平衡性——在消息吞吐量和性能上，RabbitMQ提供了一种灵活性用于控制这两者在可靠消息通信上的平衡。因为它并不是一种“适合所有场景”的应用，消息在投递之前可以指定为是否持久化到硬盘；如果在一个集群中，队列可以被设置成高可用，即消息会存储在多台服务器中确保在某台服务器宕机时不会丢失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 高延迟性环境插件——因为不是所有的网络拓扑和架构都是一样的，RabbitMQ既支持在低延迟环境下的消息通信机制，也提供了针对如互联网的高延迟环境下的插件。这就使得RabbitMQ可以在同一个本地网络或者在跨越多个数据中心的共享互联（federated）机制下构建消息集群。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 第三方插件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，当需要RabbitMQ进行数据库直接写入时，就可以使用第三方插件把消息直接存储到数据库中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 多层安全——在RabbitMQ的多个层次中包含着安全性设计。客户端连接可以通过使用SSL通信和客户端证书验证以提高安全性。在虚拟主机（virtual-host）层可以管理用户访问，从而在较高层次实现消息和资源的隔离。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>作为一款高性能、稳定且支持集群化的消息代理服务器，RabbitMQ无疑是构建大规模消息架构的核心组件</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ基于Erlang语言开发</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>作为一种开发语言和运行时系统，Erlang专注于节点之间消息通信的轻量级进程，提供了状态无关的高并发性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>实时系统 实时系统（Real-Time System）可以是一种硬件平台、软件平台，或者两者兼有，用于满足针对某个事件必须返回响应的需求。软实时系统则是指在任务执行过程中，为了那些更重要的任务会牺牲部分非重要任务的时效性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>基于并行处理和消息通信设计，Erlang成为构建类似RabbitMQ的消息代理服务器的自然选择：消息代理服务器作为一种应用程序，维护并发连接、实现消息路由（route）并管理它们的状态。同时，Erlang的分布式通信架构天然可以用于构建RabbitMQ集群机制。RabbitMQ集群中的服务器充分利用Erlang的进程间通信（Inter-Process Communication，IPC）系统，具备其他竞品消息代理服务器不得不去实现的集群功能</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126100951161.png" alt="image-20220126100951161"></p>
<p>图1.1 RabbitMQ集群使用Erlang自带的进程间通信机制实现虚拟机之间的跨节点通信、共享状态信息以及允许整个集群内进行消息的发布和消费</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ在支持AMQP的同时，也支持其他诸如MQTT、Stomp和XMPP等协议。与其他流行的消息代理服务器相比，RabbitMQ的协议中立性和插件扩展性使其成为构建多协议应用架构的明智选择。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-2-谁在使用rabbitmq-在怎么用" tabindex="-1"><a class="header-anchor" href="#◆-1-2-谁在使用rabbitmq-在怎么用" aria-hidden="true">#</a> ◆ 1.2 谁在使用RabbitMQ，在怎么用</h3>
<blockquote>
<blockquote>
<p>■ Reddit，一家流行的在线社区，每个月在它们的应用平台核心功能上充分利用RabbitMQ服务于10亿级别的网页。当用户进行网上注册、提交一个新的公告或者对一个链接进行投票时，一条消息就会被发送到RabbitMQ并被消费系统异步处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ NASA在它们的Nebula平台中选择RabbitMQ作为消息代理服务器，Nebula为NASA的服务器基础设施提供集中式服务器管理平台，该服务器基础设施正成长为OpenStack平台，后者则是一个非常流行的、用于构建私有和公有云服务的软件平台。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 在Agoura Games，RabbitMQ在面向社区的在线游戏平台中处于核心位置，对大量实时单人和多人游戏数据和事件进行路由。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ Rapportive，一个用于将合同详细信息放在收件箱中的Gmail附加功能，使用RabbitMQ作为数据处理系统的黏合剂。每个月有数以十亿计的消息通过RabbitMQ进行传递，为Rapportive的网页抓取引擎和分析系统提供数据，从而去除需要在Web服务器上进行长时间运行的操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ MercadoLibre，拉丁美洲最大的电子商务生态系统，在它们的企业服务总线（Enterprise ServiceBus，ESB）架构的核心部分使用RabbitMQ对来自紧耦合应用的数据进行解耦，从而确保应用架构中的各种组件能够灵活集成。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ Google的AdMob移动广告网络在它们的RockSteady项目中使用RabbitMQ实现实时度量分析与故障检测，通过构建一个过滤漏斗把消息经由RabbitMQ流转到复杂事件处理系统Esper中。</p>
</blockquote>
</blockquote>
<h3 id="◆-1-3-松耦合架构的优势" tabindex="-1"><a class="header-anchor" href="#◆-1-3-松耦合架构的优势" aria-hidden="true">#</a> ◆ 1.3 松耦合架构的优势</h3>
<blockquote>
<blockquote>
<p>当我第一次开始实现一个基于消息通信的架构时，我在为用户登录网站的场景寻找一种实现方法以便解耦相应的数据库更新操作。网站成长得非常快，但基于现有的设计方案无法实现良好的扩展性。当一个会员成功登录到网站时，几台数据库服务器中的表需要去更新登录时间戳（见图1.2）。该时间戳需要实时更新，因为网站上很多相关活动在某种程度上受这个时间戳值驱动。在社交游戏中，刚登录成功的会员会比其他任何时候都在线的用户处于优先状态。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101031900.png" alt="image-20220126101031900"></p>
<p>图1.2 修改前：每当用户登录，每个数据库都将以顺序和相互依赖的方式更新时间戳。所添加的表越多，所需时间也就越长。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>网站不断发展，会员登录的时间也随之增加。原因显而易见，当添加一个依赖于会员最近登录时间戳的应用时，为了提供尽可能快的响应速度，该应用中的数据库表将保存这个时间戳以避免跨库联合查询。为了确保数据的实时性和准确性，每当会员登录时，新增应用中的数据库表也需要同时更新。采用这种方式，在数据库表不是太多的情况下处理时间并不会太长。性能问题逐渐滋生的原因在于这些数据库更新采用的是串行方式。每一个更新会员最新登录时间戳的查询操作都需要前一个操作完成之后才能开始。如果有10个性能不错的查询操作，每个操作在50ms之间完成，那么累加起来仅仅数据库更新就需要半秒时间。所有这些查询操作都需要在发送授权响应以及重定向到用户之前完成。此外，任何数据库服务器操作上的纰漏都会加剧这一问题。如果一台数据库服务器响应变慢或者变成不可用，会员将无法成功登录网站。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了解耦面向用户的登录应用和数据库写操作，我将视角投向往消息中间件或集中式消息代理服务器中发送消息，它们可以把消息分散到任意数量的消费者应用程序中，然后由这些消费者应用程序执行数据库写操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息中间件（Message-oriented middleware，MOM）是一种软件或硬件基础设施，通过它可以在分布式系统中发送和接收消息。RabbitMQ通过高级路由和消息分发功能巧妙地实现了这一角色，即使需要满足广域网（Wide Area Network，WAN）环境下实现可靠性所应达到的容错条件，分布式系统也可以很容易与其他系统进行互连。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在将登录过程从所需的数据库更新中解耦之后，我发现了一种新的自由度。会员能够快速登录，是因为我们已经不把数据库更新作为整个认证过程中的一环。取而代之的是发送一条会员登录消息，该消息包含了数据库更新所需的相关内容，而消费者应用程序则被设计成可以独立更新数据表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这条登录消息并不包含会员认证信息，相反，它只包含需要在各种数据库和应用中维护会员最新登录状态的相关内容。这就为我们进行数据库水平扩展（horizontally scale）提供了更多的控制权。随着网站规模的不断成长，数据库写入操作加重了系统负载，通过控制写入特定数据库的消费者应用程序数量，我们可以对数据库操作进行限流（throttle）从而解决其所带来的特有扩展性问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101103543.png" alt="image-20220126101103543"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图1.3 修改后：通过使用RabbitMQ，松耦合数据被异步、独立地发布到各个数据库，从而使登录应用的处理过程不需要等待任何数据库写入</p>
</blockquote>
</blockquote>
<h5 id="_1-3-1-解耦你的应用" tabindex="-1"><a class="header-anchor" href="#_1-3-1-解耦你的应用" aria-hidden="true">#</a> 1.3.1 解耦你的应用</h5>
<blockquote>
<blockquote>
<p>通过向基于RabbitMQ的松耦合设计迁移，应用架构不再受限于数据库写入的性能瓶颈，并且可以在不需要改动其他任何核心应用的前提下就可以轻松添加新的应用来操作数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>1.3.2 解耦数据库写入紧耦合架构中，应用在完成一个事务之前必须等待数据库服务器的响应。这样的设计无论在同步还是异步应用中都存在潜在的性能瓶颈。一旦数据库服务器因为缺少优化或硬件问题而出现性能下降，那么应用响应速度也会随之变慢。如果数据库停止响应或宕机，那么应用也可能发生宕机。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过将数据库从应用中解耦出来，就可以创建一种松耦合架构。在这种架构中，作为消息中间件的RabbitMQ扮演着一个中介角色，即处理入库操作之前的数据。消费者从RabbitMQ服务器中获取数据，然后执行与数据库相关的操作</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>[插图]图1.5 松耦合应用使得原本把数据直接存在数据库中的应用能够把数据发送到RabbitMQ，从而实现异步数据处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这个模型中，如果数据库需要进行离线维护，或者写入负载量变得太大，你就可以对消费者应用程序实行限流或者直接关闭。在消费者能够接收消息之前，这些数据都会保存在队列中。这种暂停或限流消费者应用程序的行为恰恰就是使用这类架构的一种优势。</p>
</blockquote>
</blockquote>
<h5 id="_1-3-3-无缝添加新功能" tabindex="-1"><a class="header-anchor" href="#_1-3-3-无缝添加新功能" aria-hidden="true">#</a> 1.3.3 无缝添加新功能</h5>
<blockquote>
<blockquote>
<p>松耦合架构同样允许RabbitMQ对同一份数据进行重复利用。原本只被写到数据库中的数据可以被用作其他目的。RabbitMQ会处理所有的消息副本内容，并将它们路由到多个消费者以满足不同的处理目标</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101156389.png" alt="image-20220126101156389"></p>
<p>图1.6 通过使用RabbitMQ，当将同一份数据同时发送到新的云服务和原本的数据库时，发布者应用程序不需要做任何改变</p>
</blockquote>
</blockquote>
<h5 id="_1-3-4-复制数据与事件" tabindex="-1"><a class="header-anchor" href="#_1-3-4-复制数据与事件" aria-hidden="true">#</a> 1.3.4 复制数据与事件</h5>
<blockquote>
<blockquote>
<p>RabbitMQ提供了跨数据中心进行数据分发的内置工具，支持应用之间的互联化消息投递和同步。互联提供了从本地RabbitMQ向远程RabbitMQ发送消息的机制，并负责处理广域网容错性和网络裂变。通过使用RabbitMQ互联插件，在另外一个数据中心中添加一台RabbitMQ服务器或集群就变得非常容易。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101231471.png" alt="image-20220126101231471"></p>
<p>图1.7 应用RabbitMQ的互联插件，消息可以在多个数据中心之间进行复制并执行相同的任务</p>
</blockquote>
</blockquote>
<h5 id="_1-3-5-多主-multi-master-互联化数据与事件" tabindex="-1"><a class="header-anchor" href="#_1-3-5-多主-multi-master-互联化数据与事件" aria-hidden="true">#</a> 1.3.5 多主（Multi-Master）互联化数据与事件</h5>
<blockquote>
<blockquote>
<p>在2号数据中心中，通过添加相同的前端应用，然后设置RabbitMQ服务器为双向接收互联数据，你就可以创建分布在不同物理位置的高可用应用。位于任意数据中心上的应用所产生的消息将被同时发送到两个数据中心中的消费者那里，从而实现在数据存储和处理上的冗余机制</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>应用架构的这一构建方式为应用提供了水平扩展（scale horizontally）和用户地域无关性，同时也为你的基础设施实现分布式处理提供了一种高性价比的解决方案。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101245237.png" alt="image-20220126101245237"></p>
<p>图1.8 双向互联数据确保同一份数据事件能同时在两个数据中心进行接收和处理</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>针对代理服务器软件，AMQ模型在逻辑上定义了三种抽象组件用于指定消息的路由行为：</p>
<p>■ 交换器（Exchange），消息代理服务器中用于把消息路由到队列的组件。</p>
<p>■ 队列（Queue），用来存储消息的数据结构，位于硬盘或内存中。</p>
<p>■ 绑定（Binding），一套规则，用于告诉交换器消息应该被存储到哪个队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ的灵活性来自于消息如何通过交换器路由到队列的动态特性。介于交换器和队列之间的绑定，以及它们所创建的动态消息路由，构成了消息通信架构的基本组件。使用RabbitMQ所提供的这些基础工具来创建正确的结构，可以使你的应用具有扩展性，并能轻松应对业务需求变更。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了把消息路由到合适的目标地址，RabbitMQ所需的第一种信息就是用于控制路由的交换器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>交换器是AMQ模型定义的三种组件之一。一个交换器接收发送到RabbitMQ中的消息并决定把它们投递到何处。交换器定义消息的路由行为，通常这需要检查消息所携带的数据特性或者包含在消息体内的各种属性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ拥有多种交换器类型，每一种类型具备不同的路由行为。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101310716.png" alt="image-20220126101310716"></p>
<p>图1.9 当发布者发布消息到RabbitMQ时，消息首先到达的是一个交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>队列负责存储接收到的消息，同时也可能包含如何处理消息的配置信息。队列可以把消息只存储在内存中，也可以存储在硬盘中，然后以先进先出（FIFO）的顺序进行投递。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQ模型使用绑定（binding）来定义队列和交换器之间的关系。在RabbitMQ中，绑定或绑定键（binding-key）即告知一个交换器应该将消息投递到哪些队列中。对于某些交换器类型，绑定同时告知交换器如何对消息进行过滤从而决定能够投递到队列的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当发布一条消息到交换器时，应用程序使用路由键（routing-key）属性。路由键可以是队列名称，也可以是一串用于描述消息、具有特定语法的字符串。当交换器对一条消息进行评估以决定路由到哪些合适的队列时，消息的路由键就会和绑定键进行比对（见图1.10）。换句话说，绑定键是绑定队列到交换器的粘合剂，而路由键则是用于比对的标准。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101323740.png" alt="image-20220126101323740"></p>
<p>图1.10 一个队列被绑定到一个交换器，提供了交换器路由一条消息所需的信息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在最简单的场景下，路由键可能就是队列名称</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>每种交换器类型处理路由键的方式可能是不一样的，有些交换器采用简单的相等性校验，而有些则对路由键使用复杂的模式匹配。甚至存在一种直接忽视路由键的交换器类型，该交换器类型是基于消息属性进行路由的。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-1-amqp作为一种rpc传输机制" tabindex="-1"><a class="header-anchor" href="#◆-2-1-amqp作为一种rpc传输机制" aria-hidden="true">#</a> ◆ 2.1 AMQP作为一种RPC传输机制</h3>
<blockquote>
<blockquote>
<p>RabbitMQ提供了一套严格的通信方式，即在与核心产品进行通信的各个方面几乎都采用了远程过程调用（Remote Procedure Call，RPC）模式。远程过程调用是计算机之间的一种通信方式，它允许一台计算机在另一台计算机上执行一段程序或者一个方法。如果你已经经历过使用Web编程实现与远程API进行通信，那么你使用的就是一种常见的RPC模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与RabbitMQ通信时发生的RPC会话与大多数基于Web的API调用不同。在大多数Web API定义中，RPC会话发生在客户端发出命令并且服务器进行响应的过程中，服务器并不会向客户端发回命令。而在AMQP规范中，服务器和客户端都可以发出命令。对于客户端应用程序而言，这意味着它应该监听来自服务器的通信，这与客户端应用程序正在做的事情可能没什么关系。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了说明客户端与RabbitMQ进行通信时RPC是如何工作的，我们来考虑一下连接协商过程。</p>
</blockquote>
</blockquote>
<h5 id="_2-1-1-启动会话" tabindex="-1"><a class="header-anchor" href="#_2-1-1-启动会话" aria-hidden="true">#</a> 2.1.1 启动会话</h5>
<blockquote>
<blockquote>
<p>当你在国外与一位陌生人交流时，不可避免地会用一句问候语开始对话，让彼此之间能够知道对方是否能说同一种语言。当与AMQP交互时，这个问候语就是协议头（protocolheader），由客户端发送给服务器。这个问候语不应该被认为是一个请求，但是与其余的会话不同，这并不是一个命令。RabbitMQ通过Connection.Start命令响应问候语来启动命令/响应序列，而客户端则使用Connection.StartOk响应帧来响应RPC请求</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101408116.png" alt="image-20220126101408116"></p>
<p>图2.1 与RabbitMQ的初始通信协商演示了AMQP中的RPC过程</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要完全连接到RabbitMQ需要完成由三个同步RPC请求所组成的序列，这三个RPC请求分别对应启动、调整和打开连接操作。这个序列一旦完成，RabbitMQ就已经准备好为你的应用程序创建请求了。</p>
</blockquote>
</blockquote>
<h5 id="_2-1-2-调整正确的信道" tabindex="-1"><a class="header-anchor" href="#_2-1-2-调整正确的信道" aria-hidden="true">#</a> 2.1.2 调整正确的信道</h5>
<blockquote>
<blockquote>
<p>在AMQP中，信道使用协商的AMQP连接作为相互传输信息的渠道，而且它们将传输过程与其他正在进行中的会话隔离开来，这点也和双向无线电信道类似。一个AMQP连接可以有多个信道，允许客户端和服务器之间进行多次会话。从技术上讲，这被称为多路复用（multiplexing），对于执行多个任务的多线程或异步应用程序来说，它非常有用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在创建客户端应用程序时，不要使用过多的信道使事情变得复杂。在编组帧的线路上，信道不过是分配给服务器和客户端之间所传递消息的一个整数值；而在RabbitMQ服务器和客户端中，它们代表更多的含义。因为会为每个信道设置内存结构和对象，连接中的信道越多，RabbitMQ用于管理该连接的消息流所需的内存也就越多。如果你能合理地使用它们，你将会有一个更健康的RabbitMQ服务器和一个更简洁的客户端应用程序。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-2-amqp-rpc帧结构" tabindex="-1"><a class="header-anchor" href="#◆-2-2-amqp-rpc帧结构" aria-hidden="true">#</a> ◆ 2.2 AMQP RPC帧结构</h3>
<blockquote>
<blockquote>
<p>AMQP使用类和方法在客户端和服务器之间创建公共语言，这些类和方法被称为AMQP命令（AMQPcommands）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQP中的类定义了一个功能范围，每个类都包含执行不同任务的方法。在连接协商过程中，RabbitMQ服务器发送一个Connection.Start命令，然后编组成一个帧并发送给客户端。如图2.2所示，Connection.Start命令由两个组件组成：AMQP类（Class）和方法（Method）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101450094.png" alt="image-20220126101450094"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用命令与RabbitMQ进行交互时，执行这些命令所需的所有参数被封装在一个称为帧的数据结构中，帧对数据进行编码以便传输。帧为命令及其参数提供了一种有效的方式，用于在网络上进行编码和分隔。你可以把帧想象成一列火车上的货箱。概括来讲，货箱都具有相同的基本结构，但是因所包含的内容而异。低层的AMQP帧也是如此。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>低层AMQP帧由五个不同的组件组成：● 帧类型● 信道编号● 以字节为单位的帧大小● 帧有效载荷● 结束字节标记（ASCII值206）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101515648.png" alt="image-20220126101515648"></p>
<p>图2.3 低层AMQP帧的构造</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>低层AMQP帧的头部是三个字段，这三个字段组合起来被称为帧头（frame header）。第一个字段是指示帧类型的单个字节，第二个字段指定帧的信道，第三个字段携带帧有效载荷的字节大小。帧头和结束字节标记合在一起创建了帧的基本结构。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在帧内部，位于头部之后和结束字节标记之前的内容就是帧的有效载荷。就像货车上的货箱能够保护自身内部物品一样，帧的设计也是为了保护其携带内容的完整性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQP规范定义了五种类型的帧：协议头帧、方法帧、内容头帧、消息体帧及心跳帧。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 协议头帧用于连接到RabbitMQ，仅使用一次。</p>
<p>■ 方法帧携带发送给RabbitMQ或从RabbitMQ接收到的RPC请求或响应。</p>
<p>■ 内容头帧包含一条消息的大小和属性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 消息体帧包含消息的内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 心跳帧在客户端与RabbitMQ之间进行传递，作为一种校验机制确保连接的两端都可用且在正常工作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用客户端库时，协议头帧和心跳帧对于开发者而言通常是透明的，而在编写与RabbitMQ进行通信的应用程序时，方法帧、内容头帧、消息体帧以及它们的结构通常是可见的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果RabbitMQ发送心跳到你的客户端应用程序，然后没有得到响应，RabbitMQ就会断开连接。通常情况下，单线程或异步开发环境下的开发人员会希望将超时时间设置为一个较大的值。如果你发现你的应用程序在一定程度上阻塞了通信，使得心跳机制难以正常运作，那么可以在创建客户端连接时将心跳间隔设置为0来关闭它们。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你选择使用比默认值600秒高得多的值，则可以通过更改rabbitmq.config文件中的heartbat值来更改RabbitMQ的最大心跳间隔。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们使用方法帧、内容头帧和消息体帧向RabbitMQ发布消息。发送的第一个帧是携带命令和执行它所需参数（如交换器和路由键）的方法帧。方法帧之后是内容帧，包含内容头和消息体。内容头帧包含消息属性以及消息体大小。AMQP的帧大小有一个上限，如果消息体超过这个上限，消息内容将被拆分成多个消息体帧。这些帧始终以相同的顺序发送：方法帧、内容头帧以及一个或多个消息体帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101619096.png" alt="image-20220126101619096"></p>
<p>图2.4 发布到RabbitMQ中的单个消息由三种帧类型组成：供Basic.Publish RPC调用的方法帧、消息头帧，以及一个或多个消息体帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当向RabbitMQ发送消息时，在方法帧中会发送一个Basic.Publish命令，随后是一个带有消息属性的内容头帧，该内容头帧包括消息的内容类型和发送时间等。这些属性被封装在AMQP规范中所定义的Basic.Properties数据结构中。最后，消息内容被编组到一定数量的消息体帧中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了更高效地处理并最小化传输的数据大小，方法帧和内容头帧中的内容是人眼不可读的二进制打包数据。而与方法帧和内容头帧不同，在消息体帧内部携带的消息内容没有进行任何打包或编码，可以包含从纯文本到二进制图像数据的任何内容。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在方法帧之后发送的消息头除了告知RabbitMQ该消息的大小之外，还有很多其他数据</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息头帧还包含消息的各种属性，为RabbitMQ服务器和可能接收它的任何应用程序提供了对消息的描述。这些属性存储在Basic.Properties映射表中，可能包含描述消息内容的数据，也可能是完全空白。大多数客户端库将预先填充一小部分字段，比如内容类型和投递模式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101648429.png" alt="image-20220126101648429"></p>
<p>图2.6 消息头携带着消息体大小以及Basic.Properties属性表</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息的消息体帧与正在传输的数据类型无关，并且可能包含二进制或文本数据。无论你是发送如JPEG图片的二进制数据，或是序列化之后的JSON、XML格式数据，消息体帧都是消息中包含实际消息数据的结构</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101659481.png" alt="image-20220126101659481"></p>
<p>图2.7 嵌入在AMQP帧中的消息体</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息属性和消息体组合在一起构成了数据的强大封装格式。将消息的描述性属性与内容无关的消息体结合起来，确保你可以使用RabbitMQ来处理你认为合适的任何类型的数据。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-3-使用协议" tabindex="-1"><a class="header-anchor" href="#◆-2-3-使用协议" aria-hidden="true">#</a> ◆ 2.3 使用协议</h3>
<h5 id="_2-3-1-声明交换器" tabindex="-1"><a class="header-anchor" href="#_2-3-1-声明交换器" aria-hidden="true">#</a> 2.3.1 声明交换器</h5>
<blockquote>
<blockquote>
<p>交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在AMQP规范中都有自己的类。使用Exchange.Declare命令可以创建交换器，该命令提供了定义交换器名称和类型的参数，以及用于消息处理的其他元数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一旦命令被发送，RabbitMQ在创建了交换器之后将发送一个Exchange.DeclareOk方法帧作为响应</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果出于某种原因命令执行失败，则RabbitMQ将使用Channel.Close命令关闭发送Channel.Declare命令的信道。该响应将包含一个数字回复编码和文本值，用于说明Exchange.Declare失败并关闭信道的原因。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101733538.png" alt="image-20220126101733538"></p>
<p>图2.8 声明交换器时的通信时序</p>
</blockquote>
</blockquote>
<h5 id="_2-3-2-声明队列" tabindex="-1"><a class="header-anchor" href="#_2-3-2-声明队列" aria-hidden="true">#</a> 2.3.2 声明队列</h5>
<blockquote>
<blockquote>
<p>一旦交换器创建成功，就可以通过发送Queue.Declare命令让RabbitMQ创建一个队列。像Exchange.Declare命令一样，该命令也会生成一个通信时序</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果Queue.Declare命令执行失败，信道将被关闭。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在声明一个队列时，多次发送同一个Queue.Declare命令并不会有任何副作用。RabbitMQ不会处理后续的队列声明，只会返回队列相关的有用信息，比如队列中待处理消息的数量以及订阅该队列的消费者数量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当你尝试声明一个与现有队列同名的新队列时，如果新队列的属性与现有队列不一样，那么RabbitMQ将关闭发出RPC请求的信道。这种行为与你的客户端应用程序向代理服务器发送命令时可能发生的任何其他类型的错误一致。例如，如果一个用户发出Queue.Declare命令，而该用户并没有在虚拟主机上被配置相应的访问权限时，该信道将关闭并显示403错误。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要正确处理错误，你的客户端应用程序应该监听来自RabbitMQ的Channel.Close命令以便能够正确响应。某些客户端库可能会将此信息当作一种异常，然后让你的应用程序去处理。而其他客户端可能会使用回调风格，通过注册一个回调方法在Channel.Close命令到来时自动触发。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你的客户端应用程序没有监听或处理来自服务器的事件，则可能会丢失消息。如果你向一个不存在或已关闭的信道发送消息，RabbitMQ可能会关闭连接。如果你的应用程序不知道RabbitMQ已经关闭了信道，那么在消费消息时可能不知道RabbitMQ已经停止向你的客户端发送消息，而仍然认为它运行正常并订阅了一个空队列。</p>
</blockquote>
</blockquote>
<h5 id="_2-3-3-绑定队列到交换器" tabindex="-1"><a class="header-anchor" href="#_2-3-3-绑定队列到交换器" aria-hidden="true">#</a> 2.3.3 绑定队列到交换器</h5>
<blockquote>
<blockquote>
<p>一旦创建了交换器和队列，是时候将它们绑定在一起了。如同Queue.Declare命令，将队列绑定到交换器的Queue.Bind命令每次只能指定一个队列。与Exchange.Declare和Queue.Declare命令类似，在发出Queue.Bind命令后，如果处理成功，那么你的应用程序会收到一个Queue.BindOk方法帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>作为RabbitMQ服务器和客户端之间的RPC交互基本示例，Exchange.Declare、Queue.Declare和Queue.Bind命令展示了AMQP规范中所有同步命令类似的通用模式。但是有一些异步命令的执行效果与这种“Action”和“ActionOk”的简单模式有所不同。这些命令处理与RabbitMQ之间的消息发送和接收。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当发布消息到RabbitMQ时，多个帧封装了发送到服务器的消息数据。在实际的消息内容到达RabbitMQ之前，客户端应用程序发送一个Basic.Publish方法帧、一个内容头帧和至少一个消息体帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101807282.png" alt="image-20220126101807282"></p>
<p>图2.11 当发送消息到RabbitMQ时，至少需要发送三个帧：Basic.Publish方法帧、内容头帧和消息体帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当RabbitMQ接收到一个消息的所有帧并确定下一步操作之前，它将检查方法帧以获取它所需要的信息。Basic.Publish方法帧携带消息的交换器名称和路由键。在评估这些数据时，RabbitMQ会尝试将Basic.Publish帧中的交换器名称与配置交换器的数据库进行匹配。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下，如果你使用RabbitMQ配置中不存在的交换器发布消息，它将自动丢弃该消息。要想确保你的消息成功投递，请在发布时将mandatory标志设置为true，或者使用投递确认机制。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当RabbitMQ发现某一个交换器与Basic.Properties方法帧中的交换器名称相匹配时，它将判断该交换器中的绑定信息，并通过路由键寻找匹配的队列。当消息与任一绑定的队列符合匹配标准时，RabbitMQ服务器将以FIFO的顺序将消息放入队列中。放入队列数据结构中的并不是实际消息，而是消息的引用。当RabbitMQ准备投递消息时，它将使用这个引用来编组消息并通过网络进行发送。这为发布到多个队列的消息提供了实质性的优化。当把消息发送到多个目标时，只保存消息的一个实例会占用较少的物理内存。某一个队列中的消息处理方式，无论是被消费、过期还是等待消费，都不会影响该消息在其他队列中的处理方式。一旦RabbitMQ不再需要这个消息，因为它的所有副本都已经被投递或者被删除了，单个消息数据将被从RabbitMQ的内存中移除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下，只要没有消费者正在监听队列，消息就会被存储在队列中。当添加更多消息时，队列的大小也会随之增加。RabbitMQ可以将这些消息保存在内存中或写入磁盘，具体取决于消息Basic.Properties中指定的delivery-mode属性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要消费RabbitMQ队列中的消息，消费者应用程序通过发出Basic.Consume命令来订阅RabbitMQ中的队列。像其他同步命令一样，服务器将使用Basic.ConsumeOk进行响应，让客户端知道它将打开闸门并释放一大堆消息，或者至少是一两条消息。在RabbitMQ的说明文档中，消费者将开始通过我们已经熟悉的一种格式接收消息，这种格式包括对应的Basic.Deliver方法和它们的内容头以及消息体帧</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101824980.png" alt="image-20220126101824980"></p>
<p>图2.12 订阅队列和接收消息时客户端和服务器之间的逻辑帧投递顺序</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一旦发送完Basic.Consume命令，消费者将处于活跃状态，直到某些事件中的其中一个被触发。如果消费者想要停止接收消息，则可以发出一个Basic.Cancel命令。值得注意的是，这个命令是异步发出的，而RabbitMQ可能仍然在发送消息，所以消费者在接收到一个Basic.CancelOk响应帧之前仍然可以接收到RabbitMQ预分配给它的任意数量的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费消息时，有几个设置可以让RabbitMQ知道你想如何接收它们。其中的一个设置是用Basic.Consume命令中的no_ack参数。当设置该参数为true时，RabbitMQ将连续发送消息直到消费者发送一个Basic.Cancel命令或消费者断开连接为止。如果no_ack标志被设置为false，则消费者必须通过发送Basic.Ack RPC请求来确认收到的每条消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101839369.png" alt="image-20220126101839369"></p>
<p>图2.13 RabbitMQ成功投递给客户端的每条消息都将通过Basic.Ack进行响应，直到一个Basic.Cancel命令被发送为止。如果设置了no_ack，则忽略Basic.Ack步骤</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当发送Basic.Ack响应帧时，消费者必须在Basic.Deliver方法帧中传递一个名为投递标签（delivery tag）的参数。RabbitMQ使用投递标签和信道作为唯一标识符来实现消息确认、拒绝和否定确认。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-5-从rabbitmq中获取消息" tabindex="-1"><a class="header-anchor" href="#◆-2-5-从rabbitmq中获取消息" aria-hidden="true">#</a> ◆ 2.5 从RabbitMQ中获取消息</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126101917229.png" alt="image-20220126101917229"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>输入并执行前面的消费者代码，应该看到之前发布的10条消息中的每一条。如果仔细观察，你可能已经注意到，尽管在发布消息时没有指定message_id或timestamp属性，但从消费者打印出来的每条消息中都有它们。如果不指定它们，rabbitpy客户端库将自动为你填充这些属性。另外，如果你发送了一个Python dict结构作为消息，rabbitpy会自动将数据序列化为JSON格式，并将content-type属性设置为application/json。</p>
</blockquote>
</blockquote>
<h3 id="◆-2-6-小结" tabindex="-1"><a class="header-anchor" href="#◆-2-6-小结" aria-hidden="true">#</a> ◆ 2.6 小结</h3>
<blockquote>
<blockquote>
<p>AMQP 0.9.1规范定义了一种在RabbitMQ服务器和客户端之间进行通信的通信协议，该协议使用RPC风格的命令。</p>
</blockquote>
</blockquote>
<h2 id="◆-第3章-消息属性详解" tabindex="-1"><a class="header-anchor" href="#◆-第3章-消息属性详解" aria-hidden="true">#</a> ◆ 第3章 消息属性详解</h2>
<blockquote>
<blockquote>
<p>本章概要：· 消息属性以及对消息投递的影响· 使用消息属性在发布者和消费者之间创建契约</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在第1章中，我详细介绍了如何解耦会员登录事件与数据库写入操作，以解决会员登录网站延迟的问题。很快，我们整个工程团队就明白这样做的好处，使用松耦合的数据库写入架构自然而然就诞生了。随着时间的推移，我们开始在新开发的应用中使用这种架构。我们不再只是处理会员登录事件，而是使用这种架构处理账户删除、电子邮件生成以及任何可以异步执行的应用程序事件。事件通过消息总线发布到消费者应用程序，每个事件都执行自己特有的任务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了提供消息自描述的一致方法，我们查看了AMQP的Basic.Properties数据结构，通过AMQP发布到RabbitMQ的每条消息中都包含这一结构。利用Basic.Properties提供了一种途径，使得消费者可以更加智能——消费者应用程序可以自动反序列化消息，在处理消息之前验证消息的来源及其类型等。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-1-合理使用属性" tabindex="-1"><a class="header-anchor" href="#◆-3-1-合理使用属性" aria-hidden="true">#</a> ◆ 3.1 合理使用属性</h3>
<blockquote>
<blockquote>
<p>当你使用RabbitMQ发布消息时，消息由AMQP规范中的三个低层帧类型组成：Basic.Publish方法帧、内容头帧和消息体帧。这三种帧类型按顺序一起工作，以便将消息传递到它应该去的地方并确保它们到达时完好无损</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>包含在消息头帧中的消息属性是一组预定义的值，这些值通过Basic.Properties数据结构进行指定</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>某些属性（如delivery-mode）在AMQP规范中具有明确的含义，而有些属性（如type）则没有明确的规范。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102005694.png" alt="image-20220126102005694"></p>
<p>图3.2 Basic.Properties，包括AMQP-0-8以后已弃用的cluster-id属性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在将消息放入队列时，delivery-mode值将告诉RabbitMQ把消息保存在内存前是否必须先把它存储到磁盘中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然建议使用消息属性来描述消息，但应确保消费者应用程序所需的所有数据都包含在消息体中。如果你最终尝试使用RabbitMQ来桥接协议（例如MQTT），那么当AMQP特定的消息语义不可用时，你需要确保你的消息不会丢失含义。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>列举的各个基本属性：</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 使用content-type属性让消费者知道如何解释消息体。</p>
<p>■ 使用content-encoding属性来指示消息体使用某种特殊的方式进行压缩或编码。</p>
<p>■ 填充message-id和correlation-id来唯一标识消息和消息响应，用于在工作流程中实现消息跟踪。</p>
<p>■ 利用timestamp属性减少消息大小，并创建一个规范定义来描述消息创建时间。</p>
<p>■ 使用expiration属性表明消息过期。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 告诉RabbitMQ使用delivery-mode将消息写入磁盘或内存队列。</p>
<p>■ 使用app-id和user-id来帮助追踪出现问题的消息发布者应用程序。</p>
<p>■ 使用type属性来定义发布者和消费者之间的契约。</p>
<p>■ 使用reply-to属性实现响应消息的路由。</p>
<p>■ 使用headers映射表定义自由格式的属性和实现RabbitMQ路由。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-2-使用content-type属性创建显式的消息契约" tabindex="-1"><a class="header-anchor" href="#◆-3-2-使用content-type属性创建显式的消息契约" aria-hidden="true">#</a> ◆ 3.2 使用content-type属性创建显式的消息契约</h3>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102045701.png" alt="image-20220126102045701"></p>
<p>图3.3 content-type属性是Basic.Properties中的第一个属性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>content-type传输消息体的MIME类型。例如，如果你的应用程序正在发送JSON序列化的数据值，那么将content-type属性设置为application/json将允许尚待开发的消费者应用程序在收到消息时检查消息类型并对消息进行正确解码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过content-type属性指定序列化格式，可以更好地支持适应未来的消费者应用程序。当消费者可以自动识别它们所支持的序列化格式，并且可以选择性地处理消息时，不必担心在使用新的序列化格式并将其路由到相同的队列时会发生什么状况。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-3-通过gzip和content-encoding属性压缩消息大小" tabindex="-1"><a class="header-anchor" href="#◆-3-3-通过gzip和content-encoding属性压缩消息大小" aria-hidden="true">#</a> ◆ 3.3 通过gzip和content-encoding属性压缩消息大小</h3>
<blockquote>
<blockquote>
<p>默认情况下，通过AMQP发送的消息并不会被压缩。在处理如XML这种过于繁杂的标记语言时，甚至在消息数量较大的场景下处理像JSON或YAML等较少使用标记的轻量级格式时，这都可能会是个问题。你的发布者可以在发布消息之前压缩消息，并在收到消息时进行解压缩，如同我们使用gzip在服务器上压缩网页然后在浏览器端实时解压缩这些网页之后再进行展示一样。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果消息大小影响整体性能和稳定性，那么使用content-encoding消息头将允许消费者对消息进行预判断，确保它们可以解码消息体中发送的任何格式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与HTTP规范一样，content-encoding用于指示content-type之外的某种编码级别。它是一个修饰符字段，通常用于表明消息体的内容已经使用gzip或其他形式的压缩方式进行了压缩。某些AMQP客户端自动将content-encoding值设置为UTF-8，但这是不正确的行为。AMQP规范规定content-encoding用于存储MIME内容编码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你正在使用框架编写你的消费者代码，则可以使用content-encoding属性在收到消息时自动解码消息。通过在调用消费者代码之前进行预处理、反序列化和解压缩消息，可以简化消费者应用程序中的逻辑和代码。你的消费者代码将能够专注于那些处理消息体的任务。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>结合content-type属性后，content-encoding属性使消费者应用程序能够基于一种明确的契约与发布者进行交互。这使你可以编写适应未来的代码，确保你的代码能够抵御由于消息格式变更导致的意外错误。例如，在应用程序的生命周期中，你可能会发现bzip2压缩更加适合你的消息内容。如果你编写消费者应用程序来检查content-encoding属性，则可以拒绝那些不能解码的消息。只知道如何使用zlib或deflate进行解压缩的消费者便会拒绝新的bzip2压缩消息，并把它们留在队列中供其他消费者应用程序去解压缩bzip2消息。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-4-使用message-id和correlation-id引用消息" tabindex="-1"><a class="header-anchor" href="#◆-3-4-使用message-id和correlation-id引用消息" aria-hidden="true">#</a> ◆ 3.4 使用message-id和correlation-id引用消息</h3>
<blockquote>
<blockquote>
<p>在AMQP规范中，message-id和correlation-id是“应用级别使用”的属性，并没有提供正式的行为定义</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这意味着就规范而言，你可以利用它们实现任何目的。这两个字段允许多达255个字节的UTF-8编码数据，并以未压缩的方式存储在Basic.Properties数据结构中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>某些消息类型（如登录事件）并不需要与其关联的唯一标识，但我们很容易想象如销售订单或支持类请求等的消息需要具备这个唯一标识。当消息流经松耦合系统中的各个组件时，message-id属性使得消息能够在消息头中携带数据，该数据可以唯一地识别该消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>关于correlation-id</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它的一个用途是指定该消息是另一个消息的响应，通过携带关联消息的message-id可以做到这一点。另一种选择是使用它来传送关联消息的事务ID或其他类似数据。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-5-创建时间-timestamp属性" tabindex="-1"><a class="header-anchor" href="#◆-3-5-创建时间-timestamp属性" aria-hidden="true">#</a> ◆ 3.5 创建时间：timestamp属性</h3>
<blockquote>
<blockquote>
<p>Basic.Properties中更有用的字段之一是timestamp属性</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>timestamp被指定为“应用级别使用”。即使你的消息没有使用它，timestamp属性在你试图诊断经由RabbitMQ消息流中发生的任何意外行为时非常有用。通过使用timestamp属性来指示消息的创建时间，消费者可以评估消息投递过程的性能。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>你的流程是否需要执行服务级别协议（Service Level Agreement，SLA）？通过判断消息属性中的timestamp，消费者应用程序可以决定是否处理消息、丢弃消息，甚至向监控应用程序发布警报消息，以便让其他人知道消息的生存时间已经超过预期值。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-6-消息自动过期" tabindex="-1"><a class="header-anchor" href="#◆-3-6-消息自动过期" aria-hidden="true">#</a> ◆ 3.6 消息自动过期</h3>
<blockquote>
<blockquote>
<p>如果消息没有被消费，expiration属性告诉RabbitMQ何时应该丢弃消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>它的格式是一个短字符串，最多允许255个字符，而代表时间单位的另一个属性timestamp则是一个整数值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用expiration属性时，如果把一个已经过期的消息发布到服务器，则该消息不会被路由到任何队列，而是直接被丢弃。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-7-使用delivery-mode平衡速度和安全性" tabindex="-1"><a class="header-anchor" href="#◆-3-7-使用delivery-mode平衡速度和安全性" aria-hidden="true">#</a> ◆ 3.7 使用delivery-mode平衡速度和安全性</h3>
<blockquote>
<blockquote>
<p>delivery-mode属性是一个字节字段，向消息代理服务器表明在将消息投递给任何正在等待的消费者之前，你希望先将它持久化到磁盘上（见图3.8）。在RabbitMQ中，持久化消息意味着即使RabbitMQ服务器重新启动，消息也会保留在队列中直到被消费。delivery-mode属性有两个可能的值：1表示非持久化消息，2表示持久化消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息持久化通常可能会与队列中的持久性（durable）设置相混淆。队列的持久性属性告诉RabbitMQ队列的定义在重新启动RabbitMQ服务器或群集之后是否仍然有效。只有消息的delivery-mode才会向RabbitMQ指定消息是否应该被持久化。一个队列可能包含持久化和未持久化的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>将消息设置为非持久化模式将允许RabbitMQ使用纯内存队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>由于内存IO本身比磁盘IO快，因此将delivery-mode指定为1将会尽可能降低消息投递的延迟性。在我的Web应用程序登录场景中，投递模式的选择可能比其他场景更容易。尽管我们希望RabbitMQ服务器发生故障时不会丢失任何登录事件，但这通常不是一个强需求。如果会员登录事件数据丢失了，业务也不太可能受到影响。在这种情况下，我们可以将delivery-mode设置为1。但是，如果你使用RabbitMQ发布金融交易数据，并且你的应用程序架构专注于保证消息的可靠投递而不是消息吞吐量，那么你可以通过设置delivery-mode为2来启用持久化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当指定投递模式为2时，消息被保存到一个支持磁盘存储的队列中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>尽管这提供了一些保证，即当消息代理服务器崩溃时消息不会丢失，但是它存在潜在的性能和伸缩性问题。delivery-mode属性对消息投递和性能影响巨大</p>
</blockquote>
</blockquote>
<h3 id="◆-3-8-使用app-id和user-id验证消息来源" tabindex="-1"><a class="header-anchor" href="#◆-3-8-使用app-id和user-id验证消息来源" aria-hidden="true">#</a> ◆ 3.8 使用app-id和user-id验证消息来源</h3>
<blockquote>
<blockquote>
<p>app-id和user-id属性提供了关于消息的另一层信息，并且有很多潜在的用途</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如同其他可用于在消息中指定行为契约的属性一样，这两个属性也可以携带一些信息以便消费者应用程序在处理消息之前进行验证。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>app-id属性在AMQP规范中定义为“短字符串”，最多允许255个UTF-8字符。如果你的应用程序采用的是以带版本的API为中心的设计，那么在生成消息时可以使用app-id传递特定API和版本号。作为发布者和消费者之间加强契约的方法，在处理消息之前检查app-id允许应用程序丢弃那些来源不明或不受支持的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>app-id的另一个用途是收集统计数据。例如，如果你使用消息来传递登录事件，则可以将app-id属性设置为触发登录事件的平台和应用程序版本。在一个需要同时支持Web端、桌面端和移动端应用的环境中，这将是透明地执行契约并提取数据以便跟踪平台登录的绝佳方式，在这种方式下我们甚至无须检查消息体。如果你希望专门用来收集统计信息的消费者能够和处理登录的消费者一样接收相同的消息，那么这将会非常方便。通过提供app-id属性，收集统计信息的消费者不必对消息体进行反序列化或解码。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当试图追踪队列中的恶意消息时，加强使用app-id可以更容易地追踪恶意消息的来源。在许多应用程序共享RabbitMQ基础设施的大环境中，这点特别有用，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在用户身份验证的应用场景中，使用user-id属性来标识已登录的用户非常常见，但在大多数情况下这种做法并不推荐。RabbitMQ会根据发布消息的RabbitMQ用户信息检查每条已发布消息的user-id属性值，如果这两个值不匹配，则该消息被拒绝。例如，如果你的应用程序在RabbitMQ中的认证用户名为“www”，而消息中的user-id属性值被设置为“linus”，则该消息将被拒绝。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当然，如果你的应用程序像聊天室或即时消息通信服务一样，你可能希望RabbitMQ中的用户为应用程序的每个用户所使用，并且确实希望使用user-id来识别实际登录到应用中的用户。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-9-使用type属性获取明细" tabindex="-1"><a class="header-anchor" href="#◆-3-9-使用type属性获取明细" aria-hidden="true">#</a> ◆ 3.9 使用type属性获取明细</h3>
<blockquote>
<blockquote>
<p>type属性定义为“消息类型名称”，表示它用于应用程序并且没有规定正式的行为</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过结合routing-key值与exchange，通常可以传输足够多的信息用来确定消息内容，但type属性提供了另外一个工具，你的应用程序可以使用它来确定如何处理一个消息。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-10-使用reply-to属性实现动态工作流" tabindex="-1"><a class="header-anchor" href="#◆-3-10-使用reply-to属性实现动态工作流" aria-hidden="true">#</a> ◆ 3.10 使用reply-to属性实现动态工作流</h3>
<blockquote>
<blockquote>
<p>使用reply-to可以构建一个用来回复消息的私有响应队列。尽管在AMQP规范中没有说明私有响应队列的确切定义，但是该属性可以很容易地在最初发布消息的相同交换器中携带特定的队列名称或路由键，这些队列名称或路由键可以用于回复消息。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-11-使用消息头自定义属性" tabindex="-1"><a class="header-anchor" href="#◆-3-11-使用消息头自定义属性" aria-hidden="true">#</a> ◆ 3.11 使用消息头自定义属性</h3>
<blockquote>
<blockquote>
<p>headers属性是一个键/值对表，允许用户自定义任意的键和值（见图3.14）。键可以是ASCII或Unicode字符串，最大长度为255个字符。而值可以是任何有效的AMQP值类型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102218737.png" alt="image-20220126102218737"></p>
<p>图3.14 headers属性允许消息属性中的任意键/值对</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>headers属性允许你添加任何你想要添加的数据到消息头表中。它还具有另一个独特的功能：RabbitMQ可以根据headers表中填充的值路由消息，而不需要依赖于路由键。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-12-优先级属性" tabindex="-1"><a class="header-anchor" href="#◆-3-12-优先级属性" aria-hidden="true">#</a> ◆ 3.12 优先级属性</h3>
<blockquote>
<blockquote>
<p>RabbitMQ已按照AMQP规范实现了priority字段。它的可能值被定义为一个介于0到9之间的整数，用于指定队列中的消息优先级。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果首先发布一条优先级为9的消息，随后再发布一条优先级为0的消息，则新连接的消费者将在优先级为9的消息之前接收到优先级为0的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ将priority字段实现为无符号字节，所以优先级可以是0到255之间的任意值，但优先级应该被限制在0到9之间以保持与规范的互操作性</p>
</blockquote>
</blockquote>
<h3 id="◆-3-13-不能使用的属性-cluster-id-reserved" tabindex="-1"><a class="header-anchor" href="#◆-3-13-不能使用的属性-cluster-id-reserved" aria-hidden="true">#</a> ◆ 3.13 不能使用的属性：cluster-id/reserved</h3>
<blockquote>
<blockquote>
<p>cluster-id属性是在AMQP 0-8中定义的，但随后被删除，RabbitMQ从未实现过关于该属性的任何类型的行为。AMQP 0-9-1将其重命名为reserved，并声明它必须为空。虽然RabbitMQ目前没有根据规范要求它是空的，但你最好完全规避它。</p>
</blockquote>
</blockquote>
<h3 id="◆-3-14-小结" tabindex="-1"><a class="header-anchor" href="#◆-3-14-小结" aria-hidden="true">#</a> ◆ 3.14 小结</h3>
<blockquote>
<blockquote>
<p>由Basic.Properties提供的属性，包括它们的类型、代理服务器或应用程序是否可以使用它们，以及使用上的一些规范和建议。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-1-平衡投递速度与可靠投递" tabindex="-1"><a class="header-anchor" href="#◆-4-1-平衡投递速度与可靠投递" aria-hidden="true">#</a> ◆ 4.1 平衡投递速度与可靠投递</h3>
<blockquote>
<blockquote>
<p>就RabbitMQ而言，金发姑娘原则（Goldilocks Principle）适用于消息投递在不同级别上的保障机制。金发姑娘原则摘自《三只熊的故事》一书，描述了什么是刚刚好（just right）。在RabbitMQ中实现可靠消息投递的情况下，你应该将此原则应用在使用可靠投递机制时所遇到的平衡性问题。有些功能可能对你的应用程序来说太慢了，比如确保消息在RabbitMQ服务器重新启动后仍然存在。另一方面，发布消息而不要求额外的保障机制会快得多，尽管它可能无法为重要的应用程序提供足够安全的环境</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在使用RabbitMQ创建应用程序体系结构时，应该牢记金发姑娘原则。下面的问题可以帮助找到刚刚好的解决方案，用于平衡高性能和消息传递的安全性。</p>
<p>■ 消费发布时保证消息进入队列的重要性有多高？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 如果消息无法路由，是否应将消息返回给发布者？</p>
<p>■ 如果消息无法路由，是否应该将其发送到其他地方稍后进行重新路由？</p>
<p>■ 如果RabbitMQ服务器崩溃，可以接受信息丢失吗？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ RabbitMQ在处理新消息时是否应该确认它已经为发布者执行了所有请求的路由和持久化任务？</p>
<p>■ 消息发布者是否可以批量投递消息，然后从RabbitMQ收到一个确认用于表明所有请求的路由和持久化任务已经批量应用到所有的消息中？</p>
<p>■ 如果你要批量发布消息，而这些消息需要确认路由和持久化，那么对每一条消息是否需要对目标队列实现真正意义上的原子提交？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 在可靠投递方面是否有可接受的平衡性，你的发布者可以使用它来实现更高的性能和消息吞吐量吗？■ 消息发布还有哪些方面会影响消息吞吐量和性能？</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102322780.png" alt="image-20220126102322780"></p>
<p>图4.2 Web服务器collectd的统计信息收集守护进程将监控数据发布到RabbitMQ，以便投递给Graphite和Rocksteady消费者</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这些消息携带诸如CPU负载、内存和服务器网络利用率等信息。Graphite有一个名为carbon的收集器服务，它会消费这些消息并将数据存储在其内部数据存储媒介中。在大多数环境中，即使这些数据在网络的整体运营管理中可能非常重要，它们也会被认为是非核心数据。就算一分钟的数据没有被carbon收集并存储在Graphite中，也不会被认为是失败，这点与金融事务的处理级别不同。缺少样本数据实际上可能表明服务器本身或者将数据发布到Graphite的过程出现了问题，而Rocksteady等系统可以使用此类数据在Nagios或其他类似的应用程序中触发事件，从而对问题进行报警。</p>
</blockquote>
</blockquote>
<h5 id="_4-1-3-发布者确认作为事务的轻量级替代方法" tabindex="-1"><a class="header-anchor" href="#_4-1-3-发布者确认作为事务的轻量级替代方法" aria-hidden="true">#</a> 4.1.3 发布者确认作为事务的轻量级替代方法</h5>
<blockquote>
<blockquote>
<p>RabbitMQ中的发布者确认功能是AMQP规范的增强功能，只能用在支持RabbitMQ特定扩展的客户端库中。尽管在磁盘上存储消息是防止消息丢失的重要一步，但这样做并不会在发布者和RabbitMQ服务器之间创建一个契约以告诉发布者消息已经投递成功。在发布任何消息之前，消息发布者必须向RabbitMQ发出Confirm.Select RPC请求，并等待Confirm.SelectOk响应以获知投递确认已经被启动。在这一点上，对于发布者发送给RabbitMQ的每条消息，服务器会发送一个确认响应（Basic.Ack）或否定确认响应（Basic.Nack），这两个响应都包括一个整数值用于指定确认消息的偏移值（见图4.4）。确认编号通过Confirm.Select RPC请求之后的消息接收顺序来引用消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>无论你是否使用发布者确认，如果你发布消息到不存在的交换器，那么发布用的信道将会被RabbitMQ关闭。在rabbitpy中，这将导致触发rabbitpy.exceptions.RemoteClosedChannelException异常。</p>
</blockquote>
</blockquote>
<h5 id="_4-1-4-使用备用交换器处理无法路由的消息" tabindex="-1"><a class="header-anchor" href="#_4-1-4-使用备用交换器处理无法路由的消息" aria-hidden="true">#</a> 4.1.4 使用备用交换器处理无法路由的消息</h5>
<blockquote>
<blockquote>
<p>备用交换器是由RabbitMQ团队创建的AMQ模型的另一个扩展，用于处理无法路由的消息。备用交换器在第一次声明交换器时被指定，用来提供一种预先存在的交换器，即如果交换器无法路由消息，那么消息就会被路由到这个新的备用交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102401707.png" alt="image-20220126102401707"></p>
<p>图4.5 当一个不可路由的消息发布到一个已经定义了备用交换器的交换器中时，它将被路由到备用交换器</p>
</blockquote>
</blockquote>
<h5 id="_4-1-5-基于事务的批量处理" tabindex="-1"><a class="header-anchor" href="#_4-1-5-基于事务的批量处理" aria-hidden="true">#</a> 4.1.5 基于事务的批量处理</h5>
<blockquote>
<blockquote>
<p>在投递确认出现之前，确保消息被成功投递的唯一方法是事务。AMQP事务（也就是TX）类提供了一种机制，通过这种机制，消息可以批量发布到RabbitMQ，然后提交到队列或回滚。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>事务机制提供了一种方法，通过这种方法可以通知发布者消息被成功投递到RabbitMQ代理服务器上的队列。要启动一个事务，发布者发送一个TX.Select RPC请求给RabbitMQ，RabbitMQ将回复一个TX.SelectOk响应。一旦事务被打开，发布者可以向RabbitMQ发送一个或多个消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102434610.png" alt="image-20220126102434610"></p>
<p>图4.6 发布者通过发送TX.Select命令来启动事务和发布消息，并使用TX.Commit命令来提交消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当RabbitMQ由于错误（例如不存在的交换器）而无法路由消息时，它将在发送TX.CommitOk响应之前返回一个带有Basic.Return响应的消息。希望中止事务的发布者应该发送TX.Rollback RPC请求并等待来自代理服务器的TX.RollbackOk响应，然后再继续后续的工作。</p>
</blockquote>
</blockquote>
<h5 id="rabbitmq与原子事务" tabindex="-1"><a class="header-anchor" href="#rabbitmq与原子事务" aria-hidden="true">#</a> RabbitMQ与原子事务</h5>
<blockquote>
<blockquote>
<p>原子性确保事务中所有操作的完成都将作为事务提交的一部分。在AMQP中，这意味着直到事务中的所有操作都完成为止，你的客户端将不会收到TX.CommitOk响应帧。不幸的是，对于那些寻求真正原子性的人来说，RabbitMQ只在每个发出的命令作用于单个队列时才执行原子事务。如果不止一个队列受到事务中任何命令的影响，则提交就不具备原子性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>尽管当事务中的所有命令仅影响同一个队列时RabbitMQ会执行原子事务，但发布者通常不能很好地控制消息是否被投递到多个队列。使用RabbitMQ的高级路由方法，很容易想象一个应用程序在发布消息到单个队列时启动原子提交，然后有人可能使用同一个路由键绑定一个新的队列。这样任何使用该路由键的发布事务将不再具备原子性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当将delivery-mode值设置为2从而对消息进行持久化时，真正的原子事务可能会导致发布者的性能问题。如果在发送TX.CommitOk帧之前，RabbitMQ正在等待服务器I/O密集型写入操作的完成，那么客户端可能比命令没有被包装在事务中的场景需要等待更长的时间。</p>
</blockquote>
</blockquote>
<h5 id="_4-1-6-使用ha队列避免节点故障" tabindex="-1"><a class="header-anchor" href="#_4-1-6-使用ha队列避免节点故障" aria-hidden="true">#</a> 4.1.6 使用HA队列避免节点故障</h5>
<blockquote>
<blockquote>
<p>当你希望加强发布者与RabbitMQ之间的契约以保证消息投递时，请不要忽视高可用队列（HA队列）在核心消息通信体系架构中扮演的重要角色。HA队列是RabbitMQ团队创建的一项增强功能（未包含在AMQP规范中），它允许队列在多个服务器上拥有冗余副本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HA队列需要RabbitMQ集群环境，可以通过以下两种方式之一进行设置：使用AMQP或使用基于Web的管理界面。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在以下示例中，你将使用Queue.Declare AMQP命令中的传入参数创建一个新队列，该队列跨越RabbitMQ集群中的每个节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当发布消息到设置为高可用的队列中时，该消息会被发送到集群中的每台服务器（见图4.7），该集群管理着HA队列。一旦消息在集群中的任何节点都完成消费，那么消息的所有副本将立即从其他节点中删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102506060.png" alt="image-20220126102506060"></p>
<p>图4.7 发布到HA队列中的消息存储在为其配置的每台服务器上</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HA队列可以跨越集群中的每台服务器，或者仅使用一批独立节点。要指定一批独立节点，不是将x-ha-policy参数设置为all，而是将x-ha-policy设置为nodes，然后再传入另一个参数x-ha-nodes，该参数包含一个应该配置队列的节点列表。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102524279.png" alt="image-20220126102524279"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>即使你没有指定node1、node2或node3，RabbitMQ也将允许你定义队列，如果你要发布一条消息并路由到my-2nd-ha-queue队列，那么它将被投递。如果列出的一个或多个节点确实存在，则消息将被转而发送到这些服务器上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>HA队列有一个主服务器节点，其他所有节点都是辅助节点。如果主节点发生故障，其中一个辅助节点将接管主节点的角色。如果HA队列配置中的一个辅助节点宕机了，其他节点将继续照常运行，共享所有配置节点上发生的操作状态。当一个宕机的节点被添加回来，或者一个新的节点被添加到集群时，它将不包含任何已经存在于现有节点队列中的消息。相反，一旦所有先前发布的消息被消费完毕，它将接收所有新的消息并且只执行同步操作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果RabbitMQ代理服务器在消费消息之前因某种原因发生宕机，那么消息将永远丢失，除非你在发布消息时告诉RabbitMQ你希望在消息处理过程中将它们保存在磁盘上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了使消息在RabbitMQ代理服务器重启之后仍然存在，除了将delivery-mode设置为2，你的队列在创建时必须声明为持久性（durable）。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于没有足够I/O处理能力的服务器来说，消息持久化可能会导致严重的性能问题。与高访问量Web应用程序中的数据库服务器类似，高访问量的RabbitMQ实例必须经常操作磁盘以持久化消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在高吞吐量的消息通信环境中，RabbitMQ将持久化消息写入磁盘，并通过引用追踪它们直到它们不存在于任何队列中为止。一旦消息的所有引用消失，RabbitMQ将从磁盘中删除消息。在进行高速写入时，经常会发生由于硬件配置不足而导致的性能问题，因为在大多数情况下，磁盘的写缓存要比读缓存小得多。在大多数操作系统中，内核将使用空余RAM来缓冲从磁盘读取的页面，而将缓存写入磁盘的组件只有磁盘控制器和磁盘。正因为如此，在使用持久化消息时正确评估硬件需求非常重要。一个容量不足的服务器执行大量写入操作可能导致整个RabbitMQ服务器性能急剧下降。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102541147.png" alt="image-20220126102541147"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图4.9 RabbitMQ一次存储一个持久化消息，并跟踪它存储在所有队列的引用。如果可能的话，避免磁盘读，并且一旦所有引用都消失，消息将会从磁盘上删除</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了正确配置RabbitMQ服务器中用于持久化消息的硬件，你可以应用与OLTP数据库相同的规则。内存为王：除了基于正常消息通信工作负载对服务器RAM大小进行调整之外，还要考虑操作系统的附加RAM，以便将磁盘页面保留在内核磁盘缓存中。这将改善已经从磁盘加载的消息的读取响应时间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>越多越好：虽然固态硬盘可能正在改变常规模式，但这个概念仍然适用。可用硬盘越多，写入吞吐量就越好。由于系统可以将写入工作负载分散到RAID设置的所有磁盘上，因此每个物理设备被阻塞的时间将大大缩短。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>找到一个适当大小、带有备用电池的RAID卡，并配备大量的读写缓存。这会把所写数据缓存到RAID卡中，并允许在写入活动中出现短暂的尖峰，否则这些写入活动将会因为物理设备的限制而被阻塞。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在I/O密集型服务器中，通过操作系统在存储设备之间传输数据时，操作系统将阻塞I/O操作的进程。当RabbitMQ服务器正在尝试执行I/O操作（例如将信息保存到磁盘），并且在等待存储设备响应时操作系统内核发生阻塞，那么RabbitMQ能做的就只有等待。如果RabbitMQ代理服务器经常等待操作系统响应读写请求，消息吞吐量将大大降低</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102607196.png" alt="image-20220126102607196"></p>
<p>图4.10 当收到delivery-mode属性被设置为2的消息时，RabbitMQ必须将该消息写入磁盘</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>尽管消息持久化是保障你的消息最终被投递的最重要方式之一，但实现它的代价也是最大的。磁盘性能不佳可能会大大降低RabbitMQ的消息发布速度。在极端情况下，硬件配置不当造成的I/O延迟可能导致消息丢失。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果RabbitMQ由于操作系统发生I/O阻塞而无法响应发布者或消费者时，那么消息就不能被发布或投递。</p>
</blockquote>
</blockquote>
<h3 id="◆-4-2-rabbitmq回推" tabindex="-1"><a class="header-anchor" href="#◆-4-2-rabbitmq回推" aria-hidden="true">#</a> ◆ 4.2 RabbitMQ回推</h3>
<blockquote>
<blockquote>
<p>如果发布者应用程序因为发布消息太快而开始对RabbitMQ造成压力，那么RabbitMQ将发送Channel.Flow RPC方法（见图4.11）来让你的发布者发生阻塞，即发布者不能发送任何消息直到收到另一条Channel.Flow命令为止。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于那些不重视Channel.Flow命令而滥发消息或“不礼貌”的发布者而言，这被证明是一种相当无效的方法。如果发布者继续发布消息，RabbitMQ最终可能会不堪重负，导致性能和吞吐量问题，甚至可能导致代理服务器崩溃。在RabbitMQ 3.2之前，RabbitMQ团队不推荐使用Channel.Flow，转而使用一种被称为TCP背压（Backpressure）的机制来解决这个问题。RabbitMQ不会礼貌地要求发布者停止发送消息，而是停止接受TCP套接字上的低层数据（见图4.12）。这种方法可以很好地保护RabbitMQ被单个发布者拖垮。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在内部，RabbitMQ使用信用的概念来管理回推发布者的时机。在建立新的连接时，连接将被分配一个预定数量的可用信用值。然后，当RabbitMQ接收每个RPC命令时，将扣除一个点的信用值。一旦RPC请求在内部完成处理，连接就会返还被扣除的信用值。连接的信用值余额由RabbitMQ评估，以确定它是否应该从连接的套接字读取数据。如果一个连接的信用值不足，它将被跳过直到它有足够的信用值为止。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>4.2.2 使用管理API管理连接状态</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你使用的是3.2版本之前的RabbitMQ，则你的应用程序可以使用基于Web的管理API来查询连接的状态。这样做相当简单，但如果使用频率过高，可能会导致RabbitMQ服务器上不必要的负载压力。根据你的集群大小以及你所拥有的队列数量，该API请求可能需要几秒钟才能返回。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>管理API提供RESTful URL端点用于查询连接、信道、队列以及RabbitMQ中任何其他向外暴露对象的状态。在管理API中，阻塞状态适用于连接中的信道，而不是连接本身。查询信道状态时可以获取多个字段，包括name、node、connection_details、consumer_count和client_flow_blocked等。其中client_flow_blocked标志指示RabbitMQ是否将TCP背压应用于连接。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要获取信道的状态，你必须先为其创建合适的名称。信道名称基于连接名称和它的信道ID。要创建连接名称，你需要以下内容：■ 本地主机IP地址和对外TCP端口。■ 远程主机IP地址和TCP端口。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>用于查询RabbitMQ管理API以获取信道状态的API端点为http://host:port/api/channels/[CHANNEL_NAME]。查询时，管理API将以JSON序列化对象的格式返回结果。以下是使用API查询信道状态所返回的简略示例：</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102705849.png" alt="image-20220126102705849"></p>
</blockquote>
</blockquote>
<h3 id="◆-4-3-小结" tabindex="-1"><a class="header-anchor" href="#◆-4-3-小结" aria-hidden="true">#</a> ◆ 4.3 小结</h3>
<blockquote>
<blockquote>
<p>创建应用程序体系架构的主要步骤之一是定义发布者的角色和行为。你应该问自己以下问题：</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>■ 发布者是否要求将消息持久化到磁盘？</p>
<p>■ 应用程序的各个组件需要什么样的保障机制以确保发布的消息都会被接收？</p>
<p>■ 如果应用程序被TCP背压阻塞，或者在将消息发布到RabbitMQ时连接被阻塞，我的环境中将会发生什么？</p>
<p>■ 我的消息有多重要？我可以牺牲消息的可靠投递来实现更高的消息吞吐量吗？</p>
</blockquote>
</blockquote>
<h3 id="◆-5-1-对比basic-get和basic-consume" tabindex="-1"><a class="header-anchor" href="#◆-5-1-对比basic-get和basic-consume" aria-hidden="true">#</a> ◆ 5.1 对比Basic.Get和Basic.Consume</h3>
<blockquote>
<blockquote>
<p>RabbitMQ实现了两个不同的AMQP RPC命令来获取队列中的消息：Basic.Get和Basic.Consume。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Basic.Get不是从服务器获取消息的理想方法。使用最简单的说法，Basic.Get是一个轮询模型，而Basic.Consume是一个推送模型。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当你的应用程序使用Basic.Get请求来获取消息时，每次它想要接收消息就必须发送一个新的请求，即使队列中存在多个消息。当发出一个Basic.Get，如果你想要获取消息的队列中有一条消息正处于等待处理状态，RabbitMQ就会回应一个Basic.GetOk RPC响应</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果队列中没有待处理的消息，它将回复Basic.GetEmpty，表示队列中没有消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用Basic.Get时，你的应用程序应评估来自RabbitMQ的RPC响应以确定是否收到了消息。对于大多数从RabbitMQ接收消息并长时间运行的流程来说，这并不是一种接收和处理消息的有效方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>连接到RabbitMQ并打开信道后，它会使用无限循环向RabbitMQ请求消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102739270.png" alt="image-20220126102739270"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>虽然这是与RabbitMQ进行交互以获取消息的最简单方法，但在大多数情况下，性能顶多算是可以接受的。在简单的消息速度测试中，使用Basic.Consume至少是使用Basic.Get的两倍。速度不同的最明显原因是使用Basic.Get会导致每条消息都会产生与RabbitMQ同步通信的开销，这一过程由发送请求帧的客户端应用程序和发送应答的RabbitMQ组成。避免使用Basic.Get的一个潜在的不太明显的原因是它会影响吞吐量，由于Basic.Get的临时性，RabbitMQ不能以任何方式优化投递过程，因为它永远不知道应用程序何时会请求消息。</p>
</blockquote>
</blockquote>
<h5 id="_5-1-2-basic-consume" tabindex="-1"><a class="header-anchor" href="#_5-1-2-basic-consume" aria-hidden="true">#</a> 5.1.2 Basic.Consume</h5>
<blockquote>
<blockquote>
<p>通过使用Basic.Consume RPC命令来消费消息，你可以使用RabbitMQ注册你的应用程序，并告诉它在消费者可用时以异步方式向消费者发送消息。这通常被称为发布—订阅模式（publish-subscribe pattern，或pub-sub）。与使用Basic.Get时与RabbitMQ创建的同步会话不同，使用Basic.Consume消费消息意味着你的应用程序会在消息可用时自动从RabbitMQ接收消息，直到客户端发出Basic.Cancel为止</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当一个客户端发出一个Basic.Consume时，一旦有消息可用时RabbitMQ就会进行发送，直到客户端发出一个Basic.Cancel为止</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当收到消息时，从RabbitMQ消费消息在代码上会少一步。如下例所示，当应用程序作为消费者接收到来自RabbitMQ的消息时，它不需要评估消息以确定该值是消息还是一个空响应（Basic.GetEmpty）。但是就像Basic.Get一样，你的应用程序仍然需要确认消息以便让RabbitMQ知道消息已经被处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费者标签当你的应用程序发出Basic.Consume时会创建一个唯一的字符串，用来标识通过已建立的信道与RabbitMQ进行通信的应用程序。这个字符串被称为消费者标签（Consumer Tag），RabbitMQ每次都会把该字符串与消息一起发送给你的应用程序。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过发送一个Basic.Cancel RPC命令，消费者标签可以用来取消从RabbitMQ获取消息。如果你的应用程序同时从多个队列中消费消息，这点就非常有用，因为每个收到的消息都在它的方法帧中包含该消息所投递的目标消费者标签。如果你的应用程序需要对从不同队列接收到的消息执行不同的操作，则可以使用Basic.Consume请求中的消费者标签来确定如何处理消息。但是，在大多数情况下，客户端库已经对消费者标签做了封装，所以你不必担心它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>以下消费者代码将监听消息，直至收到仅包含“Stop”消息体的消息为止。</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102809699.png" alt="image-20220126102809699"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消费者启动后，可以使用“5.1.2消息发布者”笔记文件中的代码在新的浏览器页面中发布消息：</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102823375.png" alt="image-20220126102823375"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当你运行发布者，一旦在退出Queue.consume_messages循环时收到stop消息，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>代码将停止运行。当退出循环时，rabbitpy库帮我们做了一些事情。首先，rabbitpy库发送一个Basic.Cancel命令给RabbitMQ。如果RabbitMQ发送到客户端的某个消息没有得到处理，那么一旦接收到Basic.CancelOk RPC响应，rabbitpy将发送一个否定确认命令（Basic.Nack），并指示RabbitMQ重新发送消息。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-2-优化消费者性能" tabindex="-1"><a class="header-anchor" href="#◆-5-2-优化消费者性能" aria-hidden="true">#</a> ◆ 5.2 优化消费者性能</h3>
<blockquote>
<blockquote>
<p>当发布消息时，对消息的消费在吞吐量与可靠投递之间存在一种平衡。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>有几个选项可用于加速RabbitMQ和应用程序之间的消息投递。当发布消息时，RabbitMQ也提供了一些选项，在弱化消息投递保证的同时提高消息投递的吞吐量。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126102842491.png" alt="image-20220126102842491"></p>
<p>图5.5 消费者性能优化维度</p>
</blockquote>
</blockquote>
<h5 id="_5-2-1-使用no-ack模式实现更快的吞吐量" tabindex="-1"><a class="header-anchor" href="#_5-2-1-使用no-ack模式实现更快的吞吐量" aria-hidden="true">#</a> 5.2.1 使用no-ack模式实现更快的吞吐量</h5>
<blockquote>
<blockquote>
<p>在消费消息时，应用程序将自己注册到RabbitMQ，并要求消息在可用时进行投递。你的应用程序发送一个Basic.Consume RPC请求，与该请求一起发送的还有一个no-ack标志。当这个标志被启用时，它会告诉RabbitMQ你的消费者在接收到消息时不会进行确认，RabbitMQ只管尽快发送它们。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过将Queue.consumer方法的参数设置为True，rabbitpy将使用no_ack=True发送Basic.Consume RPC请求。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126113844103.png" alt="image-20220126113844103"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用no_ack=True消费消息是让RabbitMQ将消息投递给消费者的最快方式，但这也是发送消息最不可靠的方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126113857351.png" alt="image-20220126113857351"></p>
<p>图5.6 在消费者应用程序之前有多个数据缓冲区接收消息数据</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当RabbitMQ通过打开的连接发送消息时，它使用TCP套接字连接与客户端进行通信。如果这个连接是打开且可写的，那么RabbitMQ假定一切都处于正常工作状态并且成功投递了消息。如果当RabbitMQ尝试写入套接字以投递消息时出现了网络问题，操作系统将触发套接字错误从而让RabbitMQ知道出现了问题。如果没有发生错误，RabbitMQ将假定消息投递成功。通过Basic.Ack RPC响应发送的消息确认是客户端让RabbitMQ知道已成功接收消息的一种方法，这也是大多数情况下处理消息的方式。但是如果关闭消息确认，那么当有新的可用消息时，RabbitMQ将会发送该消息而不用等待。实际上，如果有可用消息，RabbitMQ将会持续向消费者发送它们直到套接字缓冲区被填满为止。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要增加Linux操作系统中接收套接字缓冲区的数量，我们应该增加net.core.rmem_default和net.core.rmem_max值（默认是128KB）。对于大多数环境而言，16MB （16777216）应该足够了。大多数Linux发行版都可以在/etc/sysctl.conf中更改此值，但也可以通过以下命令来手动设置值：</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126113912496.png" alt="image-20220126113912496"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>因为RabbitMQ并没有等待消息的确认，这种消费消息的方法通常能提供最高的吞吐量。对于可丢失的消息而言，这是创建尽可能高的消息消费速度的理想方式，但不是没有风险。当操作系统的套接字接收缓冲区中存放了数百个1KB的消息时，如果消费者应用程序发生崩溃，我们考虑这种情况下会发生什么。当应用程序崩溃并且套接字关闭时，RabbitMQ认为它已经发送了这些消息，并且不会收到应该从操作系统读取多少消息的指示。应用程序所面临的风险取决于消息的大小和数量以及操作系统中套接字接收缓冲区的大小。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>AMQP规范要求信道具有服务质量（Quality Of Service，QoS）设置，即在确认消息接收之前，消费者可以预先要求接收一定数量的消息。QoS设置允许RabbitMQ通过为消费者预先分配一定数量的消息来实现更高效地消息发送。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与被禁用确认（no_ack=True）的消费者不同，如果消费者应用程序在确认消息之前崩溃，则在套接字关闭时，所有预取的消息将返回到队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在协议级别，可以在信道上发送Basic.QoS RPC请求来指定服务质量。作为这个RPC请求的一部分，你可以指定QoS设置是针对其发送的信道还是针对连接上打开的所有信道。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使用QoS设置的好处之一就是不需要用Basic.Ack RPC响应来确认收到的每条消息。相反，Basic.AckRPC响应具有一个名为multiple的属性，当把它设置为True时就能让RabbitMQ知道你的应用程序想要确认所有以前未确认的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126113933041.png" alt="image-20220126113933041"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>同时确认多个消息可以使处理消息所需的网络通信量最小化，从而提高消息吞吐量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>这种确认带有某种程度的风险。如果你成功地处理了一些消息，并且你的应用程序在确认它们之前就已经死亡，则所有未确认的消息将返回队列以供其他消费者进行处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126113945195.png" alt="image-20220126113945195"></p>
<p>图5.8 同时确认多个消息提高了吞吐量</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除了QoS之外，你还应该考虑使用事务来改善应用程序的消息投递可靠性。</p>
</blockquote>
</blockquote>
<h5 id="_5-2-3-消费者使用事务" tabindex="-1"><a class="header-anchor" href="#_5-2-3-消费者使用事务" aria-hidden="true">#</a> 5.2.3 消费者使用事务</h5>
<blockquote>
<blockquote>
<p>就像将消息发布到RabbitMQ时一样，事务处理允许消费者应用程序提交和回滚批量操作。事务（AMQP TX类）可能会对消息吞吐量产生负面影响，但有一个例外。如果你不使用QoS设置，那么在使用事务来批量确认消息时，实际上可能会看到略微的性能提升</p>
</blockquote>
</blockquote>
<h3 id="◆-5-3-拒绝消息" tabindex="-1"><a class="header-anchor" href="#◆-5-3-拒绝消息" aria-hidden="true">#</a> ◆ 5.3 拒绝消息</h3>
<blockquote>
<blockquote>
<p>消息确认是确保RabbitMQ在丢弃消息之前知道消费者已经接收并处理完消息的一种好方法，但是当消息本身或消息的处理过程出现问题时会发生什么呢？在这些场景下，RabbitMQ提供了两种将消息踢回代理服务器的机制：Basic.Reject和Basic.Nack</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>死信交换器是RabbitMQ对AMQP规范的一个特定扩展，可以帮助识别消息被批量拒绝时的系统问题。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114019384.png" alt="image-20220126114019384"></p>
<p>图5.10 消费者可以对消息进行确认、拒绝或否定确认。Basic.Nack允许一次拒绝多个消息，而Basic.Reject一次只允许拒绝一个消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Basic.Reject是一个AMQP指定的RPC响应，用于通知代理服务器无法对所投递的消息进行处理。像Basic.Ack一样，它携带由RabbitMQ创建的投递标签，用于唯一标识消费者与RabbitMQ进行通信的信道上的消息。当消费者拒绝消息时，你可以指示RabbitMQ丢弃消息或使用requeue标志重新发送消息。当启用requeue标志时，RabbitMQ将把消息放回到队列中并再次处理。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息是如何进行重新发送的。该消息中设置了redelivered标志，用于通知消息的下一个消费者它以前已经被投递过。我已经使用这个功能来执行“双击和出局（two-strikes and you’re out”）”策略。格式错误的消息可能会对消费者造成严重破坏，</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你不确定是消息本身还是消费者的其他原因引发了错误，那么检查redelivered标志是一个好方法，可以帮你在碰到问题时决定是否应该拒绝那些要重新发送或丢弃的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114045129.png" alt="image-20220126114045129"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>像Basic.Ack一样，如果在消息投递之后没有启用no-ack标识，使用Basic.Reject会释放对消息的持有。尽管你可以使用Basic.Ack一次性确认接收或处理多个消息，但不能使用Basic.Reject同时拒绝多个消息——要达到这个效果就需要使用Basic.Nack。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Basic.Reject允许拒绝单个消息，但是如果你正在使用一个可以利用Basic.Ack多消息模式的工作流程，则可能希望在拒绝消息时能够使用类似的功能。不幸的是，AMQP规范不提供这种行为。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Basic.Nack是“negative acknowledgment（否定确认）”的缩写，Basic.Nack和Basic.Reject响应方法的相似性在首次接触时可能比较容易混淆。总而言之，Basic.Nack方法实现与Basic.Reject响应方法相同的行为，但添加了所缺的多消息参数来对Basic.Ack多消息处理行为进行补充。</p>
</blockquote>
</blockquote>
<h5 id="_5-3-3-死信交换器" tabindex="-1"><a class="header-anchor" href="#_5-3-3-死信交换器" aria-hidden="true">#</a> 5.3.3 死信交换器</h5>
<blockquote>
<blockquote>
<p>RabbitMQ的死信交换器（Dead-Letter eXchange，DLX）功能是对AMQP规范的扩展，是一种可以拒绝已投递消息的可选行为。在尝试诊断为何消费特定消息会出现问题时，这个功能非常有用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>例如，我编写的一种消费者应用程序消费基于XML的消息，并使用称为XSL：FO的标准标记语言将其转换为PDF文件。通过结合XSL：FO文档和消息中的XML，我能够使用Apache的FOP应用程序生成一个PDF文件，然后进行电子存档。这个流程工作得很好，但是偶尔会失败。通过在队列中使用死信交换器，我能够检查失败的XML文档，并根据XSL：FO文档手动运行它们以排除故障。如果没有死信交换器，我将不得不向我的消费者添加代码，将XML文档写到某个地方，然后通过命令行手动处理。有了死信交换器，我就能够通过将消费者指向另一个队列来交互式地运行消费者，并且能够发现问题与消息发布者在生成文档时如何处理Unicode字符有关。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>使交换器成为死信交换器的唯一要做的事情是在创建队列时声明该交换器将被用作保存被拒绝的消息。一旦拒绝了一个不重新发送的消息，RabbitMQ将把消息路由到队列的x-dead-letter-exchange参数中指定的交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114109551.png" alt="image-20220126114109551"></p>
<p>图5.11 被拒绝的消息可以作为死信消息由另一个交换器进行路由</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>过期或被拒绝的消息通过死信交换器进行投递，而备用交换器则路由那些无法由RabbitMQ路由的信息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>声明队列时指定死信交换器是相当简单的。只需在创建rabbitpy Queue对象时将交换器名称作为dead_letter_exchange参数进行传入，或者在发出Queue.Declare RPC请求时作为x-dead-letter-exchange参数进行传入。自定义参数允许你指定与队列定义一起存储的任意键/值对。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114120755.png" alt="image-20220126114120755"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>除交换器外，死信功能还允许你使用预先指定的值覆盖路由键。这样可以允许你使用同一个交换器同时处理死信消息和非死信消息，但需要确保死信消息不被投递到相同的队列。</p>
</blockquote>
</blockquote>
<h3 id="◆-5-4-控制队列" tabindex="-1"><a class="header-anchor" href="#◆-5-4-控制队列" aria-hidden="true">#</a> ◆ 5.4 控制队列</h3>
<blockquote>
<blockquote>
<p>对于某些应用程序，可以接受多个消费者监听同一个队列，而对于其他一些消费者，一个队列应该只有一个消费者。聊天应用程序可以为每个房间或每个用户创建一个队列，这种场景下的队列被认为是临时的，而信用卡处理应用程序可以创建一个始终存在的持久队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>定义队列时，有多个设置可以确定队列的行为。队列至少可以做到以下几点：</p>
<p>■ 自动删除自己。</p>
<p>■ 只允许一个消费者进行消费。</p>
<p>■ 自动过期的消息。</p>
<p>■ 保持有限数量的消息。</p>
<p>■ 将旧消息推出堆栈。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一旦你声明了一个队列，你就不能改变用来创建它的任何设置。要更改队列设置，你必须删除队列并重新创建它。</p>
</blockquote>
</blockquote>
<h5 id="_5-4-1-临时队列" tabindex="-1"><a class="header-anchor" href="#_5-4-1-临时队列" aria-hidden="true">#</a> 5.4.1 临时队列</h5>
<h6 id="自动删除队列" tabindex="-1"><a class="header-anchor" href="#自动删除队列" aria-hidden="true">#</a> 自动删除队列</h6>
<blockquote>
<blockquote>
<p>RabbitMQ提供了一些队列，这些队列一旦使用完就会删除自己并且不会再使用。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>自动删除的队列可以被创建并且用来处理消息。一旦消费者完成连接和检索消息，在断开连接时队列将被删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>创建自动删除队列非常简单，只需要在Queue.Declare RPC请求中将auto_delete标志设置为True即可</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114223880.png" alt="image-20220126114223880"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>任意数量的消费者都可以对自动删除队列进行消费；队列只会在没有消费者监听的时候自行删除。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>一个应用场景是在线聊天风格的应用程序，其中每个队列代表一个用户的入站聊天缓冲区。如果一个用户的连接断开了，那么这样的应用程序期望该队列和任何未读消息应该被删除，这点是合理的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>另一个示例是RPC风格的应用程序。对于向消费者发送RPC请求并希望由RabbitMQ投递响应的应用程序而言，创建一个在应用程序终止或断开连接时自行删除的队列允许RabbitMQ进行自动清理。在这个应用场景中，RPC回复队列只能由发布原始RPC请求的应用程序进行消费</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>只允许单个消费者</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果没有在队列上启用exclusive设置，RabbitMQ允许非常随意的消费者行为。它对可以连接到队列并消费消息的消费者数量没有限制。实际上，它鼓励多个消费者，并对能够从队列中接收消息的所有消费者实施轮询（round-robin）投递行为。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在某些情况下，例如RPC工作流中的RPC回复队列，你需要确保只有单个消费者能够消费队列中的消息。启用队列的独占属性需要在队列创建时传递参数，与auto_delete参数一样，启用exclusive属性的队列会在消费者断开连接后自动删除队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>声明为exclusive的队列只能被声明时所指定的同一个连接和信道所消费，与auto_delete属性被设置为True的队列不同，后者的任一连接都可以有任意数量的消费者。当创建队列的信道关闭时，独占队列也将自动被删除，这与设置了auto-delete属性的队列在没有被消费者订阅时自动删除的过程相似。但与auto_delete队列不同，在信道关闭之前，你可以根据需要多次使用和取消exclusive队列的消费者。同样重要的是要注意exclusive队列自动删除行为的发生不会考虑是否已经发出了一个Basic.Consume请求，这是与auto-delete队列不同的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><strong>自动过期队列</strong></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当我们讨论自动删除队列时，RabbitMQ允许在声明一个队列时使用一个可选的参数，这个参数会告诉RabbitMQ，如果一段时间内没有使用该队列就删除它。就像自动删除的独占队列一样，很容易想象可以将自动过期的队列用作RPC回复队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设你有一个对时间敏感的操作，而且你不想无限期地等待RPC回复。你就可以创建一个具有expiration值的RPC回复队列，当该队列过期时就会被删除。使用一种被动的队列声明方式，你就可以轮询队列的存在，并在你看到有消息挂起或队列不再存在时采取动作。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>创建一个自动过期的队列非常简单，要做的事情就是使用x-expires参数声明一个队列，该参数以毫秒为单位设置队列的生存时间（Time To Live，TTL）</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114305895.png" alt="image-20220126114305895"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>自动过期队列有一些严格的规定：■ 队列只有在没有消费者的情况下才会过期。如果你有连接着消费者的队列，则只有在发出Basic.Cancel请求或断开连接之后才会自动将其删除。■ 队列只有在TTL周期之内没有收到Basic.Get请求时才会到期。一旦一个Basic.Get请求中已经包含了一个具有过期值的队列，那么过期设置无效，该队列将不会被自动删除。■ 与任何其他队列一样，不能重新声明或更改x-expires的设置和参数。如果能够重新声明队列，然后用x-expires参数的值延长过期时间，那么你将违反AMQP规范中的硬性规则，即客户端不得尝试用不同的设置重新声明队列。■ RabbitMQ不保证删除过期队列这一过程的时效性。</p>
</blockquote>
</blockquote>
<h5 id="_5-4-2-永久队列" tabindex="-1"><a class="header-anchor" href="#_5-4-2-永久队列" aria-hidden="true">#</a> 5.4.2 永久队列</h5>
<blockquote>
<blockquote>
<p>当声明那些在服务器重新启动之后仍然存在的队列时，应将durable标志设置为True。队列的持久性经常会与消息的持久化相混淆</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当消息发布时将delivery-mode属性设置为2时，消息就会存储在磁盘上。相反，durable标志告诉RabbitMQ希望队列被配置在服务器中，直到Queue.Delete请求被调用为止。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>声明一个持久队列</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114324995.png" alt="image-20220126114324995"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>队列中消息自动过期</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于不是很重要的消息，如果它们在没有被消费的状态下存在太久，有时最好让它们自动消失。无论你是对过期后应该删除的过时数据进行分析处理，或者确保可以轻松恢复那些因为高访问量队列而发生宕机的消费者应用程序，消息级别的TTL设置允许服务器端对消息的最大生存时间进行限制。声明队列时同时指定死信交换器和TTL值将导致该队列中已到期的消息成为死信消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>与消息的过期时间属性（可能因消息而异）相反，x-message-ttl队列设置强制规定了队列中所有消息的最大生存时间。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114333545.png" alt="image-20220126114333545"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>最大长度队列</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>可以在声明队列时指定最大长度。如果在队列上设置了x-max-length参数，一旦达到最大值，RabbitMQ会在添加新消息时删除位于队列前端的消息。在具有回滚缓冲区的聊天室中，用x-max-length声明的队列将确保请求最近n个消息的客户端总能够访问这些消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>像消息过期时间设置和死信设置一样，最大长度设置是队列的一个参数，并且在声明之后不能被改变。如果使用死信交换器声明队列，则从队列前端移除的消息可能成为死信。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114432639.png" alt="image-20220126114432639"></p>
</blockquote>
</blockquote>
<h2 id="◆-第6章-消息路由模式" tabindex="-1"><a class="header-anchor" href="#◆-第6章-消息路由模式" aria-hidden="true">#</a> ◆ 第6章 消息路由模式</h2>
<blockquote>
<blockquote>
<p>本章概要：· RabbitMQ中四种基本类型交换器以及交换器插件· 如何为应用架构选择合适的交换器· 交换器间路由为消息通信带来更多路由选择</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ最强大之处就在于其灵活性：它能根据消息发布方提供的路由信息，将消息路由到不同的队列中去。不论是将消息发往单个队列、多个队列、交换器，还是另一个由交换器插件提供的外部源，RabbitMQ的路由引擎能始终保持极快的速度和高度灵活性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>交换器的四种基本类型，以及架构类型：■ Direct交换器。■ Fanout交换器。■ Topic交换器。■ Headers交换器。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们将使用fanout交换器（fanout exchange）发送图像给面部识别消费者和图像哈希消费者。我们将使用topic交换器（topic exchange）基于路由键中的通配符匹配来有选择地路由消息。headers交换器（headers exchange）则是另一种使用消息本身进行消息路由的方式。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-1-通过direct交换器路由消息" tabindex="-1"><a class="header-anchor" href="#◆-6-1-通过direct交换器路由消息" aria-hidden="true">#</a> ◆ 6.1 通过direct交换器路由消息</h3>
<blockquote>
<blockquote>
<p>当需要投递的消息有一个确定的目标（或者多个目标）时，direct交换器就能派上用场。任何绑定在交换器上的队列，只要它的路由键和发布消息时的一致，它就能收到消息。对于direct交换器来说，RabbitMQ在检查绑定时会比较字符串是否相等。此时不允许使用任意类型的模式匹配</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114458252.png" alt="image-20220126114458252"></p>
<p>图6.1 图中使用了direct交换器，消息发布者1发布的消息将会路由至队列1和队列2，而消息发布者2发布的消息将会路由至队列2和队列3中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>多个队列能够使用相同的路由键绑定到一个direct交换器上。每个使用相同路由键绑定的队列能够收到所有使用该路由键发布过来的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>要创建一个direct交换器非常简单，只需将其声明为direct即可。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114509131.png" alt="image-20220126114509131"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>direct交换器这种简单性，它非常适用于RPC消息通信模式下的路由应答消息。对于那些需要使用由多台服务器提供的不同组件的应用来说，使用RPC来解除应用耦合正是实现高度可扩展性的良方。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>对于那些涉及图像、视频等复杂计算处理过程的应用程序来说，采用远程RPC工作者这一模式将使得应用更具可扩展性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114524390.png" alt="image-20220126114524390"></p>
<p>图6.2 上图描绘了一个简单的RPC模式。消息发布方使用direct交换器发送请求，同时工作者消费该消息，并将结果发还给最初的发布者</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>创建RPC请求时的帧结构是怎样的（见图6.3）。</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114537661.png" alt="image-20220126114537661"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在图6.3中，reply-to和correlation-id字段值存放在Content-Headers属性载荷中。发送过来的消息体中的图片被划分为三块，以AMQP的body帧发送。RabbitMQ最大帧大小为131，072字节。这意味着任何消息体只要超过了这个数字，就必须在AMQP协议级别分块。由于预先分配的7字节必须考虑在内，因此每个消息体帧只能承载131，065字节的不透明图片数据。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当消息发布后并路由到队列上，那么队列上的消费者就能够消费这条消息。消费者可以运行繁重的处理任务，可以执行阻塞的、耗费大量计算能力的或者是IO密集型的操作。如果让前端Web应用程序来处理的话，势必会阻塞其他客户端。通过将这些计算密集型或者IO密集型的任务转交给消费者，前端应用就拥有了异步处理的能力，它能自由地处理其他客户的请求，同时等待来自RPC工作者的应答。一旦工作者完成了图像处理，就会将结果以RPC请求的形式发回给Web前端。这使得Web前端能够将处理结果回应远程移动端客户，以完成客户最初发起的请求。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-2-通过fanout交换器广播消息" tabindex="-1"><a class="header-anchor" href="#◆-6-2-通过fanout交换器广播消息" aria-hidden="true">#</a> ◆ 6.2 通过fanout交换器广播消息</h3>
<blockquote>
<blockquote>
<p>Direct交换器使得队列能够接收特定目的的消息。不同于此，fanout交换器并不作区分。所有发往fanout交换器的消息会被投递到所有绑定到该交换器上的队列中。由于RabbitMQ不需要在投递消息时检测路由键，这将带来可观的性能优势。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>假设除了面部检测之外，你还想要为移动应用程序编写工具，用于实时识别垃圾邮件发送者。我们让Web应用程序在执行面部识别RPC请求时将消息发送至fanout交换器，因此你就能将RPC消费者队列和其他用于消息处理的消费者应用程序绑定到该交换器上。面部识别消费者将会是唯一一个向Web应用程序发送RPC响应的消费者，而其他消费者应用程序可以对发送过来的图片执行其他类型的分析处理，仅供内部使用</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114607769.png" alt="image-20220126114607769"></p>
<p>图6.8 通过采用fanout交换器的方式，新添加另一个消费者将接收到和RPC消费者同样的消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>垃圾邮件发送者经常会使用同样的图片用于注册服务或者向服务端提交内容。其中一种缓解垃圾邮件攻击的方式是计算图片的指纹，并采用图片指纹数据库来检测垃圾邮件，对拥有相同指纹的新上传的图片采取行动。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>Fanout交换器提供了非常棒的方式，让每一个消费者都能访问到原始数据。不过这也成为了一把双刃剑，因为消费者无法对收到的消息进行选择。假设你想要单一交换器，允许路由不同类型的RPC请求，以便执行诸如对每条RPC请求进行审计这样的普通任务而不关心类型。在这一场景中，topic交换器允许RPC工作消费者根据自身的任务来绑定路由键。同时对于请求审计消费者来说，通过使用通配符来匹配所有消息或者其中的某个子集。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-3-使用topic交换器有选择地路由消息" tabindex="-1"><a class="header-anchor" href="#◆-6-3-使用topic交换器有选择地路由消息" aria-hidden="true">#</a> ◆ 6.3 使用topic交换器有选择地路由消息</h3>
<blockquote>
<blockquote>
<p>topic交换器会将消息路由至匹配路由键的任一队列中。但是通过采用句点分隔的形式，队列可以通过使用基于通配符的模式匹配的方式来绑定到路由键上。通过使用星号（*）和井号（＃）字符，你可以在同一时刻匹配路由键的特定部分，甚至是多个部分。星号将会匹配路由键中下一个句点前的所有字符，而井号键将会匹配接下来所有的字符，包括句点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>图6.10展示了由三个部分组成的topic交换器路由键。第一个部分表明消息应当被路由到专门处理图片消息的消费者。第二部分表明该消息包含了新的图片。第三部分包含了额外的数据，用来将消息路由至专门处理资料相关的消费者队列中去。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114628914.png" alt="image-20220126114628914"></p>
<p>图6.10 topic交换器路由键由三部分组成</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果我们想要以图片上传流程为基础，创建基于消息通信的架构来管理网站上所有图片相关的任务的话，那么下面列举的这些路由键可以用来描述其中一部分消息。</p>
<p>● image.new.profile——用于表示包含新资料图片的消息。</p>
<p>● image.new.gallery——用于表示包含新相册图片的消息。</p>
<p>● image.delete.profile——用于表示含有删除资料图片的元数据的消息。</p>
<p>● image.delete.gallery——用于表示含有删除相册图片的元数据的消息。</p>
<p>● image.resize——用于表示要求调整图片大小的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>topic交换器会根据消费者应用程序队列绑定至交换器的方式来决定哪个队列将会收到消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>面部检测RPC工作者队列绑定到了image.new.profile上，其表现仿佛绑定到了direct交换器上，它将只接受新的资料图片请求。图片哈希消费者绑定到了image.new.＃上，它将接收新图片而不关心其来源。用于维护物化用户目录的消费者则从绑定到＃.profile上的队列消费消息，它将接收所有以.profile结尾的消息，并执行物化任务。图片删除消息将被发送到绑定在image.delete.＊上的队列，它允许单个消费者删除上传至站点的所有图片。最后，用于审计的消费者绑定在了image.＃上，它将接收到所有图片相关的消息，打印信息以便问题追踪和行为分析。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114649100.png" alt="image-20220126114649100"></p>
<p>图6.11 基于路由键的构造方式，消息会被有选择地路由到不同的队列中去</p>
</blockquote>
</blockquote>
<h3 id="◆-6-4-使用headers交换器有选择地路由消息" tabindex="-1"><a class="header-anchor" href="#◆-6-4-使用headers交换器有选择地路由消息" aria-hidden="true">#</a> ◆ 6.4 使用headers交换器有选择地路由消息</h3>
<blockquote>
<blockquote>
<p>第四种內建交换器类型是headers交换器。它通过采用消息属性中的headers表支持任意的路由策略。绑定至headers交换器的队列会向Queue.Bind参数中传入键值对数组以及x-match参数。x-match参数是字符串类型，可以设置为any或者all。如果将其设置为any，同时headers表中的值匹配了任何一个绑定值的话，消息就会被路由过去。如果将x-match设置为all的话，那么所有传入Queue.Bind中的参数值必须全部匹配才行。这并不排除消息在headers表中拥有额外的键值对。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-5-交换器性能基准" tabindex="-1"><a class="header-anchor" href="#◆-6-5-交换器性能基准" aria-hidden="true">#</a> ◆ 6.5 交换器性能基准</h3>
<blockquote>
<blockquote>
<p>四种內建交换器类型的性能比较一致。这一基准显示，在比较拥有相同消息headers的消息时，可以发现不管交换器是什么类型，消息发布的速度不会有显著的差异。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通过topic交换器发布的消息拥有相同的消息体和空的headers表，而通过headers交换器发布的消息在headers属性中包含了路由键。在这一场景中，当进行两者之间消息路由的基准比较时，显然topic交换器要比headers交换器拥有更好的性能。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-6-交换器间路由" tabindex="-1"><a class="header-anchor" href="#◆-6-6-交换器间路由" aria-hidden="true">#</a> ◆ 6.6 交换器间路由</h3>
<blockquote>
<blockquote>
<p>如果你认为当前消息路由的灵活性还不够，你的应用程序需要某种交换器类型的一部分功能加上另一种类型的一部分功能来处理同一条消息话，那么RabbitMQ也会带给你惊喜。RabbitMQ团队往RabbitMQ中添加了一种非常灵活的机制（未包含在AMQP规范中），它允许你将消息路由至交换器的任意组合。交换器间的绑定机制类似于队列绑定，与将队列绑定至交换器上不同的是，你需要使用RPC方法Exchange.Bind将一个交换器绑定至另一个交换器上。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当使用交换器间绑定时，绑定交换器的路由逻辑和绑定队列是一致的。任何交换器都可以绑定到任何一个內建类型的交换器上。有了这一功能你就可以发挥想象力将交换器连接起来。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114717698.png" alt="image-20220126114717698"></p>
<p>图6.14 这个小型示例展示了交换器间绑定带来的灵活性</p>
</blockquote>
</blockquote>
<h3 id="◆-6-7-使用一致性哈希交换器路由消息" tabindex="-1"><a class="header-anchor" href="#◆-6-7-使用一致性哈希交换器路由消息" aria-hidden="true">#</a> ◆ 6.7 使用一致性哈希交换器路由消息</h3>
<blockquote>
<blockquote>
<p>一致性哈希交换器采用一致性哈希算法来决定哪个队列将会收到消息。所有队列都有可能成为消息潜在的目的地。不同于将队列绑定至路由键或者头信息，队列将被绑定至一个基于整型的权重值。算法的一部分将采用该权重值来决定消息应如何投递。一致性哈希算法通常会应用于像memcached之类的基于网络缓存的系统的客户端，以及像Riak和Cassandra这样的分布式数据库系统中，还有PostgreSQL中（前提是使用了PL/Proxy分片方法）。对于数据集合或者用于路由的高熵值字符串来说，一致性哈希交换器提供了一种相当统一的分发数据的方法。假设有两个队列绑定在了一致性哈希交换器上，并且这两个队列有相同的权重，那么消息的分发会接近于五五开</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114736012.png" alt="image-20220126114736012"></p>
<p>图6.15 发往一致性哈希交换器的消息会分发至绑定的队列中</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在为消息选择目的地时，你无法施加影响来确保消息的均匀分布。一致性哈希交换器不会轮询（round-robin）消息，而是基于路由键或者消息属性中header-type值的哈希值来做出明确的路由。不过，相较而言，拥有更高权重的队列将能从交换器接收到更高比例的消息。当然，消息在多个队列之间的分布依赖于所发送消息拥有不同的路由键或者header表值。这些值的不同会给消息的分发带来不确定性。拥有相同路由键的五条消息最终会到达同一个队列。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在处理存储的可扩展性需求时，使用分布式存储解决方案是很常见的需求。在接下来的示例中，我们将采用一致性哈希交换器来将消息分布到四个队列，以便将图片存储到四个不同的存储服务器中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>默认情况下将采用路由键的哈希值来分发消息。对于图片来说，我们将采用图片本身的哈希值作为路由键。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你打算通过路由键值的哈希来分发消息的话，那么在声明交换器时不需要什么特别的设置。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114746997.png" alt="image-20220126114746997"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>另一种方案是以header属性表中的值作为哈希值。当采用该方案时，必须在声明交换器时传入hash-header值。hash-header值包含了headers表中的单一键，该键所包含的值将用于消息的哈希计算。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114756244.png" alt="image-20220126114756244"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在将队列绑定至一致性哈希交换器时，需要输入队列的权重（字符串类型）用于哈希算法。假设队列的权重值为10的话，那么就需要在发起AMQP RPC请求Queue.Bind时传入字符串值10作为绑定键。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>值得注意的是，由于一致性哈希算法的工作方式，如果变更了绑定至交换器的队列总数的话，那么消息的分布极有可能会跟着发生变化。假设一条拥有确定路由键或者header表值的消息总是会达到q0队列，而新添加了一个名为q4的队列，那么该消息可能会最终会达到5个队列中的任何一个。之后，拥有相同路由键的消息会始终到达该队列中，直到队列的总数再次发生变化。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了更好地展示采用一致性哈希交换器时数据的分布情况，下列来自“6.7 Simulated ImagePublisher”的代码，向image-storage交换器发送了10万条消息。其中，路由键是用当前时间和消息编号组合起来计算得出的MD5哈希值。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>分布的结果以柱状图的形式展现在图6.16中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114808025.png" alt="image-20220126114808025"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114817358.png" alt="image-20220126114817358"></p>
<p>图6.16 公平随机哈希下的10万条消息的分布情况</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>消息分布接近均衡但并非完全一致。这是因为投递至哪个队列是由用于路由的值决定的。除非对具体路由键的值精心设计，否则无法像轮询（round-robin）的方式那样真正地做到消息的负载均衡。如果你想要在多个队列之间对消息进行负载均衡，而又不想使用一致性哈希方法的话，那么请参考John Brisbin的随机交换器（https://github.com/jbrisbin/random-exchange）吧。这种交换器并不使用路由键来将消息分发至队列当中去，而是使用随机数字生成的方式。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>利用一致性哈希交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>通常不会提升性能或者消息吞吐量。但是如果你想要实现跨越数据中心或者RabbitMQ集群来分发部分消息的话，那么一致性哈希交换器将能体现其价值。</p>
</blockquote>
</blockquote>
<h3 id="◆-6-8-小结" tabindex="-1"><a class="header-anchor" href="#◆-6-8-小结" aria-hidden="true">#</a> ◆ 6.8 小结</h3>
<blockquote>
<blockquote>
<p>表6.1 交换器类型总结</p>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114837208.png" alt="image-20220126114837208"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我建议在构建消息通信架构时要尽可能的灵活。在使用topic交换器时，采用命名空间的方式来定义富含语义的路由键，那么就能轻而易举地掌控消息流。如果换做是用direct交换器来实现主路由机制的话，那么事情就会困难得多。Topic交换器几乎能提供headers交换器所能提供的相同级别的灵活性，而不会因为用到了AMQP消息属性而和协议绑死。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从内部原理来讲，对于流向RabbitMQ的消息来说交换器就是简单的消息路由机制。还有各种各样的交换器插件，例如用于将消息存储至数据库的交换器，例如Riak交换器（https://github.com/jbrisbin/riak-exchange），以及内存型交换器，例如MessageHistory交换器（https://github.com/videlalvaro/rabbitmq-recent-history-exchange）。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-1-集群简介" tabindex="-1"><a class="header-anchor" href="#◆-7-1-集群简介" aria-hidden="true">#</a> ◆ 7.1 集群简介</h3>
<blockquote>
<blockquote>
<p>RabbitMQ集群无缝封装了多台RabbitMQ服务器。在RabbitMQ集群里，运行时状态包含交换器、队列、绑定器、用户、虚拟主机以及策略，它们对所有节点都可用。由于这种共享运行时状态的特性，集群中的每个节点都能绑定、发布或者删除连接到第一个节点时创建的交换器</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114853478.png" alt="image-20220126114853478"></p>
<p>图7.1 集群中跨节点的消息投递</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在大型集群环境中，有专门的节点来服务特定的任务或者队列，这一点不足为奇。举例来说，一些集群节点专门用于服务前端应用程序发布消息，而另一些节点则只用来服务队列和消费者。集群提供了绝佳的方式来创建HA（高可用）队列，以创建可以容错的RabbitMQ环境。HA队列可以跨越多个集群节点并共享同步队列状态和消息数据。假设HA队列中的某个节点发生故障的话，集群中的其他节点仍然保存着消息和队列状态。当故障的节点重新加入集群时，该节点会完全同步自节点故障以来所有被消费的消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ內建集群</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>是按照低延迟环境进行设计的。千万不要跨越WAN或者互联网来搭建RabbitMQ集群。集群中的状态同步和跨节点的消息投递需要低延迟的通信，只有LAN可以满足这一要求。你可以在诸如Amazon EC2这样的云端环境中运行RabbitMQ，但注意在使用时不要跨越可用区。为了在高延迟环境下同步RabbitMQ消息，你可以参考第8章介绍的Shovel和Federation工具。</p>
</blockquote>
</blockquote>
<h5 id="_7-1-1-集群和管理界面" tabindex="-1"><a class="header-anchor" href="#_7-1-1-集群和管理界面" aria-hidden="true">#</a> 7.1.1 集群和管理界面</h5>
<blockquote>
<blockquote>
<p>RabbitMQ集群有多种不同类型的节点，它们的行为都不太一样。当向集群中添加节点时，它必须是磁盘节点或者内存节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>磁盘节点将集群的运行时状态会同时存储在内存和磁盘上。在RabbitMQ中，运行时状态包括集群、队列、绑定、虚拟主机、用户和策略等信息的定义。鉴于此，如果集群拥有大量的运行时状态时，相比内存节点，磁盘节点更容易受到磁盘I/O问题的困扰。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>内存节点仅将运行时状态信息存储在内存数据库中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当创建集群时，确保至少存在一个磁盘型节点。当集群中拥有多个磁盘节点时，就能在发生硬件故障时更加游刃有余。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当集群中有多个节点故障时，如果其中两个磁盘节点对集群的共享状态不一致，那么你在尝试将集群恢复至先前状态时就会遇到困难。假设这事儿真的发生了，那么建议将整个集群关闭并按顺序重启节点。启动那个持有最多正确状态数据的磁盘节点，然后再添加其他节点。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>如果你使用rabbitmq管理插件的话，那么你可以使用另一种节点类型，即统计节点（Stats node）。它只能和磁盘节点搭配使用。统计节点负责收集集群中每个节点的全部统计数据和状态数据。在任意时刻，一个集群只能有一个统计节点。对于大型集群设置来说，最佳策略是配置专门的管理节点，即主磁盘节点和统计节点，并再至少配置一个磁盘节点以提供故障转移的能力</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114924495.png" alt="image-20220126114924495"></p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>根据管理API的使用频率和用途以及RabbitMQ中使用的资源数量，运行管理API可能会带来较高的CPU成本。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在拥有两个磁盘节点的集群拓扑设置中，如果主节点发生故障的话，统计节点将会被指派给备用磁盘节点。当主磁盘节点恢复并重新加入集群后，它并不会重新获得统计节点，除非被指派为统计节点的备用节点停止运行或者离开集群。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114938227.png" alt="image-20220126114938227"></p>
<p>图7.4 RabbitMQ中的消息投递保证选项性能一览</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>当你从左到右进行扩展时，集群内节点间的通信量将会不断放大。当你向一个节点发送的消息将被路由到另一个节点上的队列时，那么这两个节点将会通过一种消息投递保证的方法来进行协调。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>为了提升集群中的消息吞吐量，RabbitMQ会尽可能尝试将新发来的消息路由到预先存在的消费者去。但是，当队列产生消息堆积时，新消息将会被发布到集群中队列定义的节点。在这种场景下，如果你将消费者连上了没有定义该队列的其他节点的话，性能将受到影响</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p><img src="@source/docs/theme-reco/img/RabbitMQ实战指南(博文视点出品)/image-20220126114953962.png" alt="image-20220126114953962"></p>
<p>图7.6 跨集群节点消费消息</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在这一场景中，消息被发送到节点2上的队列中，而消费者则位于节点1。在连接在节点1上的消费者获取消息时，这些消息必须先通过集群路由到节点1才行。如果在连接消费者之前考虑到了队列所处的位置，那就能减少上述开销。</p>
</blockquote>
</blockquote>
<h3 id="◆-7-2-集群设置" tabindex="-1"><a class="header-anchor" href="#◆-7-2-集群设置" aria-hidden="true">#</a> ◆ 7.2 集群设置</h3>
<h2 id="◆-第8章-跨集群的消息分发" tabindex="-1"><a class="header-anchor" href="#◆-第8章-跨集群的消息分发" aria-hidden="true">#</a> ◆ 第8章 跨集群的消息分发</h2>
<blockquote>
<blockquote>
<p>当需要实现跨数据中心的消息通信、RabbitMQ升级以及在不同的RabbitMQ集群间提供透明的消息访问能力时，你也许该考虑使用联合插件。联合插件提供了两种不同的方式来实现集群间的消息通信。通过使用联合交换器，发往其中一台RabbitMQ服务器或者集群的消息会自动路由到下游主机上已绑定的交换器和队列中去。</p>
</blockquote>
</blockquote>
<h3 id="◆-9-1-mqtt和rabbitmq" tabindex="-1"><a class="header-anchor" href="#◆-9-1-mqtt和rabbitmq" aria-hidden="true">#</a> ◆ 9.1 MQTT和RabbitMQ</h3>
<blockquote>
<blockquote>
<p>消息队列遥测传输（MQ Telemetry Transpor，即MQTT）协议是一种轻量级的消息通信协议，在移动端应用中应用广泛。RabbitMQ通过插件机制来支持它。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>MQTT被设计用来在资源约束的设备以及低带宽的环境下使用，而不必牺牲消息通信的可靠性。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>从移动端应用到智能汽车以及家庭自动化，MQTT在这些主流场景中的应用占据着科技新闻的头条。Facebook采用MQTT实现了自家移动端应用的实时消息通信和通知。2013年，福特汽车公司联手IBM，采用IBM基于MQTT的MessageSight产品线，为福特Evo概念车实现了智能汽车技术。商业家庭自动化产品的势头略减，但大量开源且基于开放标准的家庭自动化系统仍采用MQTT，例如FunTechHouse项目（www.fun-tech.se/FunTechHouse/）。同样在2013年，就像AMQP 1.0那年前一样，MQTT被OASIS采纳为开放标准。OASIS是一家非营利机构，它致力于鼓励开放标准的开发与应用。此举为MQTT提供了开放、厂商中立的依靠，为其将来的发展铺平了道路。</p>
</blockquote>
</blockquote>
<h2 id="◆-第10章-数据库集成" tabindex="-1"><a class="header-anchor" href="#◆-第10章-数据库集成" aria-hidden="true">#</a> ◆ 第10章 数据库集成</h2>
<blockquote>
<blockquote>
<p>使用RabbitMQ可以解耦OLTP数据库的写操作。这是一种用来实现数据仓库和基于事件流处理的技术的常见方式。当发送序列化数据并写入数据库时，消费者应用程序在事件和数据库间扮演着桥梁的角色。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>我们可以采用RabbitMQ插件，例如InfluxDB存储交换器。它可以自动将来自RabbitMQ的消息存储到数据库中。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ和外部数据库之间的集成不止于此。另一种强大的应用模式是直接从数据库向RabbitMQ发送消息。我们可以通过使用数据库的扩展或者插件来实现上述功能。另一种方式是将RabbitMQ插件作为数据库的客户端，数据库一有变化时就发布消息。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>RabbitMQ的数据库集成模式。</p>
</blockquote>
</blockquote>
<h3 id="◆-10-4-小结" tabindex="-1"><a class="header-anchor" href="#◆-10-4-小结" aria-hidden="true">#</a> ◆ 10.4 小结</h3>
<blockquote>
<blockquote>
<p>将数据库与RabbitMQ进行集成，减少了在数据库或者RabbitMQ栈外运行消费者或消息发送应用程序的运营成本。不过这种简化也是有成本的。由于RabbitMQ和数据库之间紧密耦合在了一起，故障场景就变得更为复杂了。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>在本章中你学习了如何将PostgreSQL用作消息的来源，将消息通过PostgreSQL扩展pg_amqp或者PostgreSQL LISTEN交换器路由到RabbitMQ。同时，本章还详述了安装和使用InfluxDB存储交换器，演示了发送至RabbitMQ的消息时如何通过RabbitMQ存储至数据库中的。</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>本章中介绍的数据库集成仅仅是冰山一角。还有许多项目可以将数据库直接和RabbitMQ集成起来。例如Riak交换器（https://github.com/jbrisbin/riak-exchange）及其对应的项目。它实现了RiakRabbitMQ提交钩子（commit hooks）（https://github.com/jbrisbin/riak-rabbitmq-commit-hooks），当Riak中发生写事务时会发送消息至RabbitMQ。想要了解有哪些数据库插件可供选择的话，可以访问RabbitMQ Community Plugins（https://www.rabbitmq.com/community-plugins.html）和RabbitMQ Clients&amp;Developer Tools（https://www.rabbitmq.com/devtools.html）。</p>
</blockquote>
</blockquote>
</div></template>



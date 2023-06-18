<template><div><h2 id="_1-go概念详解" tabindex="-1"><a class="header-anchor" href="#_1-go概念详解" aria-hidden="true">#</a> 1.go概念详解</h2>
<h4 id="_1-golang中使用gopath模式和gomodule-gomod-模式的区别" tabindex="-1"><a class="header-anchor" href="#_1-golang中使用gopath模式和gomodule-gomod-模式的区别" aria-hidden="true">#</a> （1）golang中使用GOPATH模式和GoModule（gomod）模式的区别</h4>
<p>在说他们之间的区别时，我们需要先了解了解GoMoudle的前世今生。
以前，Go 语言的的包依赖管理一直都被大家所诟病，Go官方也在一直在努力为开发者提供更方便易用的包管理方案，从最初的 GOPATH 到 GO VENDOR，再到最新的 GO Modules，虽然走了不少的弯路，但最终还是拿出了 Go Modules 这样像样的解决方案。</p>
<p>目前最主流的包依赖管理方式是使用官方推荐的 Go Modules ，在版本 Go 1.14 发布后，官方正式放话，强烈推荐你使用 Go Modules，并且有自信可以用于生产中。</p>
<p>本文会大篇幅的讲解 Go Modules 的使用，但是在那之前，我仍然会简要介绍一下前两个解决方案 GOPATH 和 go vendor 到底是怎么回事？我认为这是有必要的，因为只有了解它的发展历程，才能知道 Go Modules 的到来是有多么的不容易，多么的意义非凡。</p>
<h5 id="一、-最开始使用的gopath" tabindex="-1"><a class="header-anchor" href="#一、-最开始使用的gopath" aria-hidden="true">#</a> <strong>一、 最开始使用的GOPATH</strong></h5>
<p>GOPATH 应该很多人都很眼熟了，之前在配置环境的时候，都配置过吧？</p>
<p>你可以将其理解为工作目录，在这个工作目录下，通常有如下的目录结构</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bin：存放编译后生成的二进制可执行文件
pkg：存放编译后生成的 .a 文件
src：存放项目的源代码，可以是你自己写的代码，也可以是你 go get 下载的包
将你的包或者别人的包全部放在 $GOPATH/src 目录下进行管理的方式，我们称之为 GOPATH 模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个模式下，使用 go install 时，生成的可执行文件会放在 $GOPATH/bin 下
如果你安装的是一个库，则会生成 .a 文件到 $GOPATH/pkg 下对应的平台目录中（由 GOOS 和 GOARCH 组合而成），生成 .a 为后缀的文件。</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115193747905.png" alt="image-20230115193747905"></p>
<p>GOOS，表示的是目标操作系统，有 darwin（Mac），linux，windows，android，netbsd，openbsd，solaris，plan9 等
而 GOARCH，表示目标架构，常见的有 arm，amd64 等</p>
<p>这两个都是 go env 里的变量，你可以通过 go env 变量名 进行查看</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115193841825.png" alt="image-20230115193841825"></p>
<p>至此，你可能不会觉得上面的方案会产生什么样的问题，直到你开始真正使用 GOPATH 去开发程序，就不得不开始面临各种各样的问题，其中最严重的就是版本管理问题，因为 GOPATH 根本没有版本的概念。</p>
<p>以下几点是你使用 GOPATH 一定会碰到的问题：
你无法在你的项目中，使用指定版本的包，因为不同版本的包的导入方法也都一样
其他人运行你的开发的程序时，无法保证他下载的包版本是你所期望的版本，当对方使用了其他版本，有可能导致程序无法正常运行
在本地，一个包只能保留一个版本，意味着你在本地开发的所有项目，都得用同一个版本的包，这几乎是不可能的。</p>
<h5 id="二、go-vendor-模式的过渡" tabindex="-1"><a class="header-anchor" href="#二、go-vendor-模式的过渡" aria-hidden="true">#</a> <strong>二、go vendor 模式的过渡</strong></h5>
<p>为了解决 GOPATH 方案下不同项目下无法使用多个版本库的问题，Go v1.5 开始支持 vendor 。</p>
<p>以前使用 GOPATH 的时候，所有的项目都共享一个 GOPATH，需要导入依赖的时候，都来这里找，正所谓一山不容二虎，在 GOPATH 模式下只能有一个版本的第三方库。
解决的思路就是，在每个项目下都创建一个 vendor 目录，每个项目所需的依赖都只会下载到自己vendor目录下，项目之间的依赖包互不影响。在编译时，v1.5 的 Go 在你设置了开启 GO15VENDOREXPERIMENT=1 （注：这个变量在 v1.6 版本默认为1，但是在 v1.7 后，已去掉该环境变量，默认开启 vendor 特性，无需你手动设置）后，会提升 vendor 目录的依赖包搜索路径的优先级（相较于 GOPATH）。</p>
<p>其搜索包的优先级顺序，由高到低是这样的</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>当前包下的 vendor 目录
向上级目录查找，直到找到 src 下的 vendor 目录
在 GOROOT 目录下查找
在 GOPATH 下面查找依赖包
虽然这个方案解决了一些问题，但是解决得并不完美。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果多个项目用到了同一个包的同一个版本，这个包会存在于该机器上的不同目录下，不仅对磁盘空间是一种浪费，而且没法对第三方包进行集中式的管理（分散在各个角落）。</p>
<p>并且如果要分享开源你的项目，你需要将你的所有的依赖包悉数上传，别人使用的时候，除了你的项目源码外，还有所有的依赖包全部下载下来，才能保证别人使用的时候，不会因为版本问题导致项目不能如你预期那样正常运行。</p>
<p>这些看似不是问题的问题，会给我们的开发使用过程变得非常难受，虽然我是初学者，还未使用过 go vendor，但能有很明显的预感，这个方案照样会另我崩溃。</p>
<h5 id="三、go-mod-的粉墨登场" tabindex="-1"><a class="header-anchor" href="#三、go-mod-的粉墨登场" aria-hidden="true">#</a> <strong>三、go mod 的粉墨登场</strong></h5>
<p>go modules 在 v1.11 版本正式推出，在最新发布的 v1.14 版本中，官方正式发话，称其已经足够成熟，可以应用于生产上。</p>
<p>从 v1.11 开始，go env 多了个环境变量： GO111MODULE ，这里的 111，其实就是 v1.11 的象征标志， go 里好像很喜欢这样的命名方式，比如当初 vendor 出现的时候，也多了个 GO15VENDOREXPERIMENT环境变量，其中 15，表示的vendor 是在 v1.5 时才诞生的。</p>
<p>GO111MODULE 是一个开关，通过它可以开启或关闭 go mod 模式。</p>
<p>它有三个可选值：off、on、auto，默认值是auto。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GO111MODULE=off禁用模块支持，编译时会从GOPATH和vendor文件夹中查找包。
GO111MODULE=on启用模块支持，编译时会忽略GOPATH和vendor文件夹，只根据 go.mod下载依赖。
GO111MODULE=auto，当项目在$GOPATH/src外且项目根目录有go.mod文件时，自动开启模块支持。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go mod 出现后， GOPATH（肯定没人使用了） 和 GOVENDOR 将会且正在被逐步淘汰，但是若你的项目仍然要使用那些即将过时的包依赖管理方案，请注意将 GO111MODULE 置为 off。</p>
<p>具体怎么设置呢？可以使用 go env 的命令，如我要开启 go mod ，就使用这条命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ go env -w GO111MODULE="on"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="四、go-mod-依赖的管理" tabindex="-1"><a class="header-anchor" href="#四、go-mod-依赖的管理" aria-hidden="true">#</a> <strong>四、go mod 依赖的管理</strong></h5>
<p>1、go mod 不再依靠 $GOPATH，使得它可以脱离 GOPATH 来创建项目
2、对项目进行 go modules 的初始化
3、接下来很重要的一点，我们要看看 go install 把下载的包安装到哪里了？</p>
<p>在使用 go modules 模式后，项目目录下会多生成两个文件也就是 go.mod 和 go.sum 。
这两个文件是 go modules 的核心所在，这里不得不好好介绍一下。</p>
<h6 id="_1、go-mod-文件" tabindex="-1"><a class="header-anchor" href="#_1、go-mod-文件" aria-hidden="true">#</a> <strong>①、go.mod 文件</strong></h6>
<p>go.mod 的内容比较容易理解
第一行：模块的引用路径
第二行：项目使用的 go 版本
第三行：项目所需的直接依赖包及其版本</p>
<p>在实际应用上，你会看见更复杂的 go.mod 文件，比如下面这样</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>module github.com/BingmingWong/module-test

go 1.14

require (
    example.com/apple v0.1.2
    example.com/banana v1.2.3
    example.com/banana/v2 v2.3.4
    example.com/pear // indirect
    example.com/strawberry // incompatible
)

exclude example.com/banana v1.2.4
replace（
    golang.org/x/crypto v0.0.0-20180820150726-614d502a4dac => github.com/golang/crypto v0.0.0-20180820150726-614d502a4dac
    golang.org/x/net v0.0.0-20180821023952-922f4815f713 => github.com/golang/net v0.0.0-20180826012351-8a410e7b638d
    golang.org/x/text v0.3.0 => github.com/golang/text v0.3.0
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是多出了两个 flag：</p>
<p>exclude： 忽略指定版本的依赖包
replace：由于在国内访问golang.org/x的各个包都需要f.q，你可以在go.mod中使用replace替换成github上对应的库。</p>
<h6 id="_2、go-sum-文件" tabindex="-1"><a class="header-anchor" href="#_2、go-sum-文件" aria-hidden="true">#</a> <strong>②、go.sum 文件</strong></h6>
<p>反观 go.sum 文件，就比较复杂了，密密麻麻的。</p>
<p>可以看到，内容虽然多，但是也不难理解</p>
<p>每一行都是由 模块路径，模块版本，哈希检验值 组成，其中哈希检验值是用来保证当前缓存的模块不会被篡改。hash 是以h1:开头的字符串，表示生成checksum的算法是第一版的hash算法（sha256）。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>值得注意的是，为什么有的包只有一行
&lt;module> &lt;version>/go.mod &lt;hash>

而有的包却有两行呢

&lt;module> &lt;version> &lt;hash>
&lt;module> &lt;version>/go.mod &lt;hash>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那些有两行的包，区别就在于 hash 值不一行，一个是 h1:hash，一个是 go.mod h1:hash</p>
<p>而 h1:hash 和 go.mod h1:hash两者，要不就是同时存在，要不就是只存在 go.mod h1:hash。那什么情况下会不存在 h1:hash 呢，就是当 Go 认为肯定用不到某个模块版本的时候就会省略它的h1 hash，就会出现不存在 h1 hash，只存在 go.mod h1:hash 的情况。</p>
<p>go.mod 和 go.sum 是 go modules 版本管理的指导性文件，因此 go.mod 和 go.sum 文件都应该提交到你的 Git 仓库中去，避免其他人使用你写项目时，重新生成的go.mod 和 go.sum 与你开发的基准版本的不一致。</p>
<h5 id="五、go-mod-命令的使用" tabindex="-1"><a class="header-anchor" href="#五、go-mod-命令的使用" aria-hidden="true">#</a> <strong>五、go mod 命令的使用</strong></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod init：初始化go mod， 生成go.mod文件，后可接参数指定 module 名，上面已经演示过。
go mod download：手动触发下载依赖包到本地cache（默认为$GOPATH/pkg/mod目录）
go mod graph： 打印项目的模块依赖结构
go mod tidy ：添加缺少的包，且删除无用的包
go mod verify ：校验模块是否被篡改过
go mod why： 查看为什么需要依赖
go mod vendor ：导出项目所有依赖到vendor下
go mod edit ：编辑go.mod文件，接 -fmt 参数格式化 go.mod 文件，接 -require=golang.org/x/text 添加依赖，接 -droprequire=golang.org/x/text 删除依赖，详情可参考 go help mod edit
go list -m -json all：以 json 的方式打印依赖详情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何给项目添加依赖（写进 go.mod）呢？
有两种方法：
你只要在项目中有 import，然后 go build 就会 go module 就会自动下载并添加。
自己手工使用 go get 下载安装后，会自动写入 go.mod 。</p>
<h5 id="六、区别" tabindex="-1"><a class="header-anchor" href="#六、区别" aria-hidden="true">#</a> 六、区别</h5>
<p>在上述分析了那么多之后，我个人总结出来（有可能个人理解不对，如果大家有更好的见解，麻烦给我讲一下，谢谢），两者的区别就是：</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115194756918.png" alt="image-20230115194756918"></p>
<h5 id="七、总结写在最后" tabindex="-1"><a class="header-anchor" href="#七、总结写在最后" aria-hidden="true">#</a> 七、总结写在最后</h5>
<p>如果让我用一段话来评价 GOPATH 和 go vendor，我会说</p>
<p>GOPATH 做为 Golang 的第一个包管理模式，只能保证你能用，但不保证好用，而 go vendor 解决了 GOPATH 忽视包版的本管理，保证好用，但是还不够好用，直到 go mod 的推出后，才使 Golang 包的依赖管理有了一个能让 Gopher 都统一比较满意的方案，达到了能用且好用的标准。</p>
<p>如果是刚开始学习 Golang ，那么 GOPATH 和 go vendor 可以做适当了解，不必深入研究，除非你要接手的项目由于一些历史原因仍然在使用 go vender 械管理，除此之外，任何 Gopher 应该从此刻就投入 go modules 的怀抱。</p>
<h2 id="_2-goroot-和-gopath-的区别" tabindex="-1"><a class="header-anchor" href="#_2-goroot-和-gopath-的区别" aria-hidden="true">#</a> 2.GOROOT 和 GOPATH 的区别</h2>
<h5 id="_1-什么是goroot" tabindex="-1"><a class="header-anchor" href="#_1-什么是goroot" aria-hidden="true">#</a> 1.什么是GOROOT</h5>
<p>GOROOT 是环境变量，它的值是 Golang 安装包路径</p>
<h5 id="_2-什么是gopath" tabindex="-1"><a class="header-anchor" href="#_2-什么是gopath" aria-hidden="true">#</a> 2.什么是GOPATH</h5>
<p>GOPATH 是Golang 1.5版本之前一个重要的环境变量配置，是存放 Golang 项目代码的文件路径。</p>
<p>查看gopath路径：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go env  GOPATH
或者
go env  | grep GOPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-什么是goroot-目录" tabindex="-1"><a class="header-anchor" href="#_3-什么是goroot-目录" aria-hidden="true">#</a> 3.什么是GOROOT 目录</h5>
<p>指的是go的安装目录，go的编译器、标准库等都存放在这个目录下。</p>
<h5 id="_4-什么是gopath-目录" tabindex="-1"><a class="header-anchor" href="#_4-什么是gopath-目录" aria-hidden="true">#</a> 4.什么是GOPATH 目录</h5>
<p>指的是项目的开发目录，存在三个目录结构，分别是src、pkg、bin目录</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bin //编译文件目录
pkg //第三方包目录
src //项目源文件目录，开发项目存放在这个目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到有三个文件夹。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bin 存放编译生成的二进制文件。比如 执行命令 go get github.com/google/gops，bin目录会生成 gops 的二进制文件。

pkg 其中pkg下面以下三个文件夹。

XX_amd64: 其中 XX 是目标操作系统，比如 mac 系统对应的是darwin_amd64, linux 系统对应的是 linux_amd64，存放的是.a结尾的文件。
mod: 当开启go Modules 模式下，go get命令缓存下依赖包存放的位置
sumdb: go get命令缓存下载的checksum数据存放的位置


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src 存放golang项目代码的位置：</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115195638503.png" alt="image-20230115195638503"></p>
<p>因此在使用 GOPATH 模式下，我们需要将应用代码存放在固定的<code v-pre>$GOPATH/src</code>目录下，并且如果执行<code v-pre>go get</code>来拉取外部依赖会自动下载并安装到<code v-pre>$GOPATH</code>目录下。</p>
<p>简单来说，GOPATH模式下，项目代码不能想放哪里就放哪里，哪怕你的学习资料盘满了也不行。</p>
<h5 id="_5-gopath-的缺点" tabindex="-1"><a class="header-anchor" href="#_5-gopath-的缺点" aria-hidden="true">#</a> 5.GOPATH 的缺点</h5>
<ul>
<li>除了需要指定目录，还有哪些缺点吗？</li>
<li>go get 命令的时候，无法指定获取的版本</li>
<li>引用第三方项目的时候，无法处理v1、v2、v3等不同版本的引用问题，因为在GOPATH 模式下项目路径都是 github.com/foo/project</li>
<li>无法同步一致第三方版本号，在运行 Go 应用程序的时候，无法保证其它人与所期望依赖的第三方库是相同的版本。</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. GoPath 的坑
当使用 `go get &lt;package>` 时，GoPath 会在 GOPATH 路径（一个环境变量）上安装第三方包。 
并且在 Go 里，你的代码必须放在 GOPATH 里才能运行。 

那么这里就会有两种选择：

1. 不同项目使用不同的 $GOPATH：这个优点很明显，就像 javascript 里的 node_modules 一样，不同项目自有一套自己的依赖。缺点也很明显，一是重复下载相同的依赖，占用空间大；二是 GoPath 非常垃圾，你下载的第三方包会直接下到你的 src 文件夹里，就是说和你自己写的代码放在一起，导致目录结构极其混乱，意义不明。

2. 不同项目使用同一个 $GOPATH：解决了重复依赖占用空间的问题，但是项目结构就会极其极其混乱，不仅不同项目文件混在一起，而且还和第三方包混在一起。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-为什么需要go-modules" tabindex="-1"><a class="header-anchor" href="#_6-为什么需要go-modules" aria-hidden="true">#</a> 6.为什么需要Go Modules</h5>
<p><strong>GoModule 的优势：</strong></p>
<ol>
<li>如上面所说，自己的代码和第三方包分成了两个路径，项目结构的问题解决了。</li>
<li>这样就可以只设置一个 GoPath，所有项目共用这一个 GoPath，依赖重复的问题也解决了。</li>
<li>GoModule 终于有了依赖管理，终于有了版本管理，版本冲突问题也得到了控制。（但是看网上一些帖子说还是很垃圾，这个等我遇到了再提）</li>
</ol>
<p>在 GoPath 时代，代码只能在 GoPath 上运行，而有了 GoModule 之后，就可以在 GoModule 目录上运行代码。而 GoPath 只是作为一个仓库存放第三方包了。</p>
<p><strong>实现存放项目路径自由和不同版本的管理</strong></p>
<p>在go 1.11 官方出手了推出了 Go Modules， 通过设置环境变量 GO111MODULE 进行开启或者关闭 go mod 模式</p>
<ul>
<li>auto 自动模式，当项目根目录有 go.mod 文件，启用 Go modules</li>
<li>off 关闭 go mod 模式</li>
<li>on 开启go mod 模式</li>
</ul>
<p>开启 go mod 模式后，你的项目代码想放哪里就放哪里，你想引用哪个版本就用哪个版本</p>
<h5 id="_7-goproxy" tabindex="-1"><a class="header-anchor" href="#_7-goproxy" aria-hidden="true">#</a> 7.GOPROXY</h5>
<p>作为开发者基本上都会用到 github 上面的开源仓库，因网络问题，导致有些包是无法下载下来的。不过不用担心，太阳底下无新鲜事，已经现成的Go 镜像站点帮你获取。</p>
<p>环境变量 GOPROXY 就是设置 Go 模块代理的，其作用直接通过镜像站点来快速拉取所需项目代码。</p>
<p>常见代理配置</p>
<ul>
<li>
<p>阿里云</p>
<p>https://mirrors.aliyun.com/goproxy/</p>
</li>
<li>
<p>七牛云</p>
<p><a href="https://goproxy.cn/" target="_blank" rel="noopener noreferrer">https://goproxy.cn<ExternalLinkIcon/></a>,  direct</p>
</li>
</ul>
<p>执行命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go   env   -w   GOPROXY="https://goproxy.cn,direct"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8-初始化modules" tabindex="-1"><a class="header-anchor" href="#_8-初始化modules" aria-hidden="true">#</a> 8.初始化Modules</h5>
<p>（1）新创建一个空目录test_mod，进入该目录，执行命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//test_mod 为项目名称
go mod int test_mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>会在根目录生成一个 go.mod 文件，内容如下：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>module test_mod

<span class="token keyword">go</span> <span class="token number">1.17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想引入第三方网络包，在该项目目录执行 go get 仓库地址。比如引入定时任务：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>robfig<span class="token operator">/</span>cron<span class="token operator">/</span>v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>go.mod 会变成为, indirect 代表是间接依赖，因为当前项目是空的，所以并没有发现这个模块的明确引用。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>module test_mod

go 1.17

require github.com/robfig/cron/v3 v3.0.1 // indirect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且也会新增一个go.sum文件, 它的作用是保证项目所依赖的模块版本，不会被篡改。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>github.com/robfig/cron/v3 v3.0.1 h1:WdRxkvbJztn8LMz/QEvLN5sBU+xKpSqwwUO1Pjr4qDs=
github.com/robfig/cron/v3 v3.0.1/go.mod h1:eQICP3HwyT7UooqI/z+Ov+PtYAWygg1TEWWzGIFLtro=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意此时，我们的项目是没有任何go代码文件的，现在只有 go.mod 和 go.sum 两个文件。</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115200431712.png" alt="image-20230115200431712"></p>
<h5 id="_9-go-mod-tidy" tabindex="-1"><a class="header-anchor" href="#_9-go-mod-tidy" aria-hidden="true">#</a> 9.go mod tidy</h5>
<p>如果我们 go.mod 导入了第三方包，但项目代码中我不用，就是玩。领导发现后，不小心一个 go mod tidy 命令，直接把你回到解放前。</p>
<p>观察 go.mod 会发现已经没有了这串神秘代码</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>require github.com/robfig/cron/v3 v3.0.1 // indirect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>机智的你，可能已经猜到了，go mod tidy 就是去掉go.mod文件中项目不需要的依赖。</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115200544707.png" alt="image-20230115200544707"></p>
<h5 id="_10-go-mod-edit" tabindex="-1"><a class="header-anchor" href="#_10-go-mod-edit" aria-hidden="true">#</a> 10.go mod edit</h5>
<p>如果引入的开源项目的源代码，别人删除了怎么办呢？</p>
<p>自己本地新开发项目代码，还没有推送到远程仓库，其他项目要引用怎么办?</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>方法1

执行命令：
go mod edit -replace [old git package]@[version]=[new git package]@[version]
例如：
go mod edit -replace github.com/bndr/gojenkins=github.com/Bpazy/gojenkins@latest
执行后 ，会发现 go.mod 文件最后有一串神秘代码
replace github.com/bndr/gojenkins => github.com/Bpazy/gojenkins v1.0.2-0.20200708084040-3655c428bba9

方法2

简单粗暴，直接修改go.mod文件，在go.mod文件最后添加以下神秘代码
replace github.com/bndr/gojenkins => github.com/Bpazy/gojenkins v1.0.2-0.20200708084040-3655c428bba9
即可完美解决此问题，replace 还有一个隐藏的秘密，那就是可引入本地项目代码
replace github.com/bndr/gojenkins => ../gojenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_11-什么情况下使用module机制" tabindex="-1"><a class="header-anchor" href="#_11-什么情况下使用module机制" aria-hidden="true">#</a> 11.什么情况下使用<code v-pre>module</code>机制？</h5>
<ul>
<li><strong>当你依赖的所有第三方包都通过<code v-pre>git</code>服务器托管的时候，非常适合使用<code v-pre>module</code>机制。</strong></li>
<li><strong>当你大量使用本地第三方包的时候，不太适合使用<code v-pre>module</code>机制。</strong></li>
</ul>
<p><strong>因为<code v-pre>module</code>模式使用本地第三方包必须编辑<code v-pre>go.mod</code>，用<code v-pre>replace</code>命令指向本地包目录。</strong></p>
<p>因为网络原因，在我们国内使用<code v-pre>module</code>机制有时候并不太方便，当我们要使用来自<code v-pre>golang.org</code>这类被屏蔽的网站的包时，我们一般必须通过其他方式下载到本地，然后编辑<code v-pre>go.mod</code>用<code v-pre>replace</code>命令指向本地目录，这样还不如就用<code v-pre>vendor</code>方式方便，除非你有特殊原因，必须在<code v-pre>GOPATH</code>之外保存源代码。在上面这种情况下，我推荐把下载的第三方包存放在<code v-pre>vendor</code>目录中，这样就可以兼容<code v-pre>非module</code>模式。</p>
<p>当使用本地的私有第三方包时，还是<code v-pre>vendor</code>模式比较方便，因为<code v-pre>module</code>模式使用本地第三方包必须编辑<code v-pre>go.mod</code>，用<code v-pre>replace</code>命令使用本地包。</p>
<p>总结
<img src="@source/docs/theme-reco/img/go语言.assets/bb5b671e7f742f61197f3c3a10063c50.png" alt="img"></p>
<h2 id="_3-彻底搞懂golang的goroot和gopath" tabindex="-1"><a class="header-anchor" href="#_3-彻底搞懂golang的goroot和gopath" aria-hidden="true">#</a> 3.彻底搞懂golang的GOROOT和GOPATH</h2>
<h5 id="_1、gopath-和-goroot" tabindex="-1"><a class="header-anchor" href="#_1、gopath-和-goroot" aria-hidden="true">#</a> <strong>1、GOPATH 和 GOROOT</strong></h5>
<p>不同于其他语言，go中没有项目的说法，只有包, 其中有两个重要的路径，GOROOT 和 GOPATH</p>
<p>Go开发相关的环境变量如下：</p>
<p>GOROOT：GOROOT就是Go的安装目录，（类似于java的JDK）
GOPATH：GOPATH是我们的工作空间,保存go项目代码和第三方依赖包
GOPATH可以设置多个，其中，第一个将会是默认的包目录，使用 go get 下载的包都会在第一个path中的src目录下，使用 go install时，在哪个GOPATH中找到了这个包，就会在哪个GOPATH下的bin目录生成可执行文件</p>
<h5 id="_2、修改-gopath-和-goroot" tabindex="-1"><a class="header-anchor" href="#_2、修改-gopath-和-goroot" aria-hidden="true">#</a> 2、修改 GOPATH 和 GOROOT</h5>
<p>GOROOT
GOROOT是Go的安装路径。GOROOT在绝大多数情况下都不需要修改</p>
<p>Mac中安装Go会自动配置好GOROOT，路径为/usr/local/go。Win中默认的GOROOT是在 C:\Go中，也可自己指定</p>
<p>【如下图所示则我的GORROT为：D:\development\go】，以下是GOROOT目录的内容：
<img src="@source/docs/theme-reco/img/go语言.assets/image-20230115201946194.png" alt="image-20230115201946194"></p>
<p>可以看到GOROOT下有bin，doc和src目录。bin目录下有我们熟悉的go和gofmt工具。可以认为GOOROOT和Java里的JDK目录类似。</p>
<p><strong>GOPATH</strong>
GOPATH是开发时的工作目录。用于：</p>
<p>保存编译后的二进制文件。
go get和go install命令会下载go代码到GOPATH。
import包时的搜索路径</p>
<p><strong>使用GOPATH时，GO会在以下目录中搜索包：</strong></p>
<p>GOROOT/src：该目录保存了Go标准库代码。
GOPATH/src：该目录保存了应用自身的代码和第三方依赖的代码。</p>
<p><strong>假设程序中引入了如下的包：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import "Go-Player/src/chapter17/models"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一步：Go会先去GOROOT的scr目录中查找，很显然它不是标准库的包，没找到。
第二步：继续在GOPATH的src目录去找，准确说是GOPATH/src/Go-Player/src/chapter17/models这个目录。如果该目录不存在，会报错找不到package。在使用GOPATH管理项目时，需要按照GO寻找package的规范来合理地保存和组织Go代码。</p>
<h5 id="_3、helloword——gopath版" tabindex="-1"><a class="header-anchor" href="#_3、helloword——gopath版" aria-hidden="true">#</a> 3、HelloWord——GOPATH版</h5>
<p><strong>（1）设置并查看GOPATH和GOROOT环境变量</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>安装go SKD目录：D:\development\go
go项目存放目录：D:\development\jetbrains\goland\workspace，并且此目录下含有bin、src、pkg三个文件夹，src文件夹用来存放项目代码
当引入module时，首先在GOROOT的src目录下查找，然后再GPOPATH的src目录下查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115202241710.png" alt="image-20230115202241710"></p>
<p>（2）GOLand环境配置</p>
<ul>
<li>
<p>在D:\development\jetbrains\goland\workspace\src目录下新建项目GO-Player</p>
<p>bin：存放编译后的exe文件</p>
<p>pkg：存放自定义包的目录</p>
<p>src：存放项目源文件的目录</p>
</li>
</ul>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115202304908.png" alt="image-20230115202304908"></p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115202316116.png" alt="image-20230115202316116"></p>
<p>（3）测试</p>
<ul>
<li>models：Student.go</li>
</ul>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115202331255.png" alt="image-20230115202331255"></p>
<ul>
<li>main：hello.go</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>package main

import (
	//"./models"  //相对路径
	"Go-Player/src/ademo/models"  //根据GOPATH找
    //根据GOPATH：D:\development\jetbrains\goland\workspace，在其src目录下查找
    //即GOPATH/src/Go-Player/src/ademo/models
	"fmt"
)

func main() {
	stu := models.Student{
		Name: "张三",
	}
	fmt.Println(stu)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、一些踩坑经验
当你开启了GO111MODULE，仍然使用GOPATH模式的方法，在引入自定义模块时会报错。go mod具体使用将在下一篇介绍</p>
<p>GO111MODULE 有三个值：off, on和auto（默认值）。</p>
<ul>
<li>
<p>GO111MODULE=off，go命令行将不会支持module功能，寻找依赖包的方式将会沿用旧版本那种通过vendor目录或者GOPATH模式来查找。</p>
</li>
<li>
<p>GO111MODULE=on，go命令行会使用modules，而一点也不会去GOPATH目录下查找。</p>
</li>
<li>
<p>GO111MODULE=auto，默认值，go命令行将会根据当前目录来决定是否启用module功能。这种情况下可以分为两种情形：</p>
<p>​	当前目录在GOPATH/src之外且该目录包含go.mod文件
​	当前文件在包含go.mod文件的目录下面。
​    当modules 功能启用时，依赖包的存放位置变更为$GOPATH/pkg，允许同一个package多个版本并存，且多个项目可以共享缓存的 module。</p>
</li>
</ul>
<p>（1）使用了了相对路径：import &quot;./models&quot;</p>
<p>报错：build command-line-arguments: cannot find module for path <em>/D</em>/dev这里后面一堆本地路径
这是因为在go module下 你源码中 impot …/ 这样的引入形式不支持了， 应该改成 impot 模块名/ 。 这样就ok了</p>
<p>（2）使用结合了GOPATH的形式：import &quot;Go-Player/src/ademo/models&quot;</p>
<p>于是我们把上面的import改成了结合GOPATH的如上形式</p>
<p>报错：package Go-Player/src/ademo/models is not in GOROOT D:/development/go/src/GPlayer/src/ademo/models
（3）彻底解决方法：用go env -u 恢复初始设置</p>
<p>不再使用go mod：</p>
<p>go env -w GO111MODULE=off  或者  go env -w GO111MODULE=auto
go env -u GO111MODULE
区别在于，如果GO111MODULE=on或者auto，在go get下载包时候，会下载到GOPATH/pkg/mod，引入时也是同样的从这个目录开始。如果这行了上述命令，那么在go get下载包时候，会下载到GOPATH/src 目录下</p>
<h2 id="_4-win10系统下配置go语言环境变量" tabindex="-1"><a class="header-anchor" href="#_4-win10系统下配置go语言环境变量" aria-hidden="true">#</a> 4.Win10系统下配置Go语言环境变量</h2>
<p>本人安装Window系统下的Go语言的相关信息如下：</p>
<p>Go语言版本：go1.14.6</p>
<p>安装包：go1.14.6.windows-amd64.msi</p>
<p>安装路径：D:\Program Files\Go</p>
<ul>
<li>
<h4 id="打开win10下的环境变量设置界面" tabindex="-1"><a class="header-anchor" href="#打开win10下的环境变量设置界面" aria-hidden="true">#</a> 打开Win10下的环境变量设置界面</h4>
</li>
</ul>
<p>右键我的电脑-&gt;属性-&gt;高级系统设置-&gt;环境变量。</p>
<p>它有用户变量和系统变量。两者的区别是用户变量下配置只对当前用户有效，系统变量下配置对所有用户有效。本人建议在用户变量下配置。</p>
<ul>
<li>配置 GOROOT</li>
</ul>
<p>选择&lt;新建&gt;按钮。</p>
<p>变量名：GOROOT</p>
<p>变量值：D:\Program Files\Go</p>
<ul>
<li>配置 path</li>
</ul>
<p>找到path（如果不存在，则新建），点击编辑—&gt;新建，输入：%GOROOT%\bin</p>
<p>保存成功后，按下 Windows+X−&gt;命令提示符，打开DOS命令行，输入：go env</p>
<p>如果能够成功打印出Go语言的相关环境变量，即表示配置成功。例如，打印出Go的版本信息：</p>
<p>输入： go version
go version go1.14.6 windows/amd64</p>
<ul>
<li>配置 GOPATH</li>
</ul>
<p>GOPATH 环境变量是Go项目的工作目录。如果你的项目路径是在：D:\go_work\go目录下进行的，go目录下一般有以下三个子目录，分别是：src、pkg 和 bin。</p>
<p>变量名：GOPATH</p>
<p>变量值：D:\go_work\go</p>
<ul>
<li>配置 GOPROXY</li>
</ul>
<p>Go默认的GOPROXY的值是：GOPROXY=https://proxy.golang.org,direct。这个goproxy在使用go get安装第三方库的时候会报错，导致无法下载成功(原因你懂的)。所以必须要修改一下。</p>
<p>变量名：GOPROXY</p>
<p>变量值：https://goproxy.cn,direct 或者修改为：</p>
<p>GOPROXY的值还可以修改为：https://goproxy.io,direct 或 https://mirrors.aliyun.com/goproxy</p>
<ul>
<li>配置 GO111MODULE</li>
</ul>
<p>GO111MODULE环境变量主要是用来开启或关闭模块支持的。</p>
<p>它有三个可选值：<code v-pre>off</code>、<code v-pre>on</code>、<code v-pre>auto</code>，默认值是 <code v-pre>auto</code>。</p>
<ul>
<li><code v-pre>GO111MODULE=off</code> 无模块支持，go 会从 GOPATH 和 vendor 文件夹寻找包。</li>
<li><code v-pre>GO111MODULE=on</code>  模块支持，go 会忽略 GOPATH 和 vendor 文件夹，只根据 <code v-pre>go.mod</code> 下载依赖。</li>
<li><code v-pre>GO111MODULE=auto</code> 在 <code v-pre>$GOPATH/src</code> 外面且根目录有 <code v-pre>go.mod</code> 文件时，开启模块支持。</li>
</ul>
<p>在使用模块的时候，<code v-pre>GOPATH</code> 是无意义的，不过它还是会把下载的依赖储存在 <code v-pre>$GOPATH/src/mod</code> 中，也会把 <code v-pre>go install</code> 的结果放在 <code v-pre>$GOPATH/bin</code> 中。</p>
<p>可以在DOS命令行下直接使用 go env -w 进行设置。</p>
<p>这个环境变量是在Go-1.11版本引入的，在go1.11版本前，想要对go语言包进行管理，只能依赖第三方库实现，比如<code v-pre>Vendor，``GoVendor，``GoDep，``Dep，``Glide</code>等等。由于我安装的Go语言是1.14版本的，所以选择开启模块支持，设置如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go ``env` `-w GO111MODULE=on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&lt;说明&gt; 也可以使用上面的方法设置环境变量的值，但是个人觉得这种命令行设置的方式更方便一些。可以用 go env -u 恢复其默认设置。例如，恢复GO111MODULE的默认值，可以使用：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go ``env` `-u GO111MODULE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&lt;备注&gt; 从 Go 1.11 开始 Go 语言开始支持 Go modules 来解决大家长久以来诟病的Go语言依赖包管理问题。go module 是Go语言从 1.11 版本之后官方推出的版本管理工具，并且从 Go1.13 版本开始，go module 成为了Go语言默认的依赖管理工具。</p>
<p>在Go语言 1.12 版本之前，要启用 go module 工具首先要设置环境变量 GO111MODULE，不过在Go语言 1.13 及以后的版本则不再需要设置该环境变量。</p>
<p>【2021.5.8号修订】从 Go 1.16版本开始，默认启用modules，这在1.15的时候已经预告过了。现在GO111MODULE的默认值为on。在Go 1.17版本中这个环境变量将会被删除。</p>
<h2 id="_5-golang-语言-gopath、-引入-vendor-机制的-gopath-和-go-module的区别" tabindex="-1"><a class="header-anchor" href="#_5-golang-语言-gopath、-引入-vendor-机制的-gopath-和-go-module的区别" aria-hidden="true">#</a> 5.Golang 语言  GOPATH、 引入 vendor 机制的 GOPATH 和 Go Module的区别</h2>
<h5 id="_01-介绍" tabindex="-1"><a class="header-anchor" href="#_01-介绍" aria-hidden="true">#</a> <strong>01 介绍</strong></h5>
<p>在 Golang 语言中，Golang 程序是由 Golang Package 组成的，go build 的过程实际上就是编译 Golang Package。本文我们介绍 Golang 构建模式主要演进的三个阶段，分别是 GOPATH、 引入 vendor 机制的 GOPATH 和 Go Module。</p>
<h5 id="_02-gopath" tabindex="-1"><a class="header-anchor" href="#_02-gopath" aria-hidden="true">#</a> <strong>02 GOPATH</strong></h5>
<p>Golang 初期版本中就原生内置了 GOPATH 的构建模式，Golang 程序在编译时，Golang 编译器会在 GOPATH 环境变量配置的本地路径下，查找 Golang 程序依赖的三方包，如果依赖包不存在，go build 命令将返回错误「无法找到包 XXX」，此时，我们需要使用 go get 命令手动将 Golang 程序依赖的三方包下载到 GOPATH 环境变量配置的本地路径下，然后再尝试执行 go build 命令。</p>
<p>go get 命令虽然方便，它可以将依赖包以及依赖包的依赖包自动下载到 GOPATH 环境变量配置的本地路径下，但是读者朋友们需要注意的是，go get 命令下载的依赖包是当前依赖包的最新版本，如果我们对依赖包的版本有要求，就不能使用 go get 命令。</p>
<p>比如在多人开发的 Golang 项目中，新加入成员将 Golang 项目下载到本地，使用 go get 命令下载依赖包时，正好赶上依赖包的版本更新了，此时，新成员使用 go build 命令构建 Golang 程序，Golang 程序也将使用最新版本的三方依赖包。如果三方依赖包存在 bug 或不向下兼容，将直接影响 Golang 程序的稳定性。</p>
<h5 id="_03-vendor" tabindex="-1"><a class="header-anchor" href="#_03-vendor" aria-hidden="true">#</a> <strong>03 Vendor</strong></h5>
<p>Golang 官方为了解决 go get 命令会下载最新版本依赖包的问题，在 Golang v1.5 版本中引入 vendor 机制。</p>
<p>所谓 vendor 机制，就是在 Golang 项目的目录中，创建一个目录名为 vendor 的目录，将 Golang 项目的所有依赖包缓存到该目录中。</p>
<p>Golang 程序在编译时，Golang 编译器会优先在 vendor 目录中查找 Golang 程序依赖的三方包，而不是在 GOPATH 环境变量配置的本地路径下查找。</p>
<p>我们只需将 vendor 目录一起提交到代码仓库中，新成员在下载 Golang 项目后，构建项目就不会改变三方依赖包的版本。</p>
<p>读者朋友们需要注意的是，vendor 机制也引入了新的问题，比如想要使用 vendor 机制，Golang 项目必须在 GOPATH 环境变量配置的本地路径下的 src 目录中。</p>
<p>随着项目不断迭代，依赖的三方包也会越来越多，vendor 目录会变得越来越大，将 vendor 目录提交到代码仓库，不仅会影响下载代码的速度，还会影响 Code Review。</p>
<p>此外，vendor 目录中的三方依赖包，也需要我们手动管理，比如手动记录依赖三方包的版本号，手动下载三方依赖包等。</p>
<p>Golang 社区为了解决 vendor 机制引入的问题，推出一些比较流行的解决三方包依赖管理的工具，比如 dep、gb、glide 等三方包依赖管理工具，但是这些社区推出的三方包依赖管理工具都有各自的问题。</p>
<h5 id="_04-modules" tabindex="-1"><a class="header-anchor" href="#_04-modules" aria-hidden="true">#</a> <strong>04 Modules</strong></h5>
<p>Golang 官方在总结 Golang 社区推出的各种三方包依赖管理工具遇到的问题的基础上，在 Golang v1.11 版本中，推出 Go Module 构建模式。</p>
<p>关于 Go Module 构建模式，官方 blog 有相关系列文章介绍，在之前的公众号文章中，也有官方 blog 发表的 Go Module 相关文章的译文。感兴趣的读者朋友可以按需翻阅一下。</p>
<p>Go Module 构建模式可以将 Golang 项目代码放在任意目录，无需同 vendor 机制一样，必须将 Golang 项目代码放在 GOPATH 环境变量配置的本地目录下的 src 目录中。</p>
<p>因为 Golang 官方为了同时支持 GOPATH 构建模式和 Go Module 构建模式，在 Golang v1.11 版本中，Go Module 构建模式默认是「关闭」，除非手动开启 Go Module 构建模式，如果将 Go Module 构建模式设置为「自动」，而 Golang 项目在 GOPATH 环境变量配置的目录中的 src 目录下，go build 命令优先使用 GOPATH 构建模式。</p>
<p>在 Golang v.13 版本中，Go Module 构建模式默认是「自动」，不管 Golang 项目在不在 GOPATH 环境变量配置的本地目录中的 src 目录下，只要项目根目录中包含 go.mod 文件，就启用 Go Module 构建模式，否则启用 GOPATH 构建模式。</p>
<p>所以在 Golang v1.13 版本之前，如果想要使用 Go Module 构建模式，那么 Golang 项目代码不可以放在 <code v-pre>$GOPATH/src</code> 目录中。</p>
<p>在 Golang v1.16 版本开始，Golang 已经默认开启 Go Module 构建模式，未来 Golang 官方还会考虑彻底移除 GOPATH 构建模式，我建议读者朋友们现在开始将 GOPATH 构建模式的老项目迁移到 Go Module 构建模式，并且在新项目中直接使用 Go Module 构建模式。</p>
<p>Golang 项目使用 Go Module 构建模式，那么还需要使用 vendor 机制吗？答案是需要，因为 vendor 机制可以将 Golang 项目依赖的三方包缓存到 vendor 目录，这样在无法访问网络的环境下，我们可以在 vendor 机制下使用 Go Module 构建模式，或者在构建性能敏感的环境中使用 Go Module 构建模式，比如在使用内部 CI 工具构建 Golang 程序时。</p>
<p>在 Go Module 构建模式下，vendor 机制无需像在 GOPATH 构建模式下，需要我们手动管理三方依赖包的版本和下载，Golang 提供了 <code v-pre>go mod vendor</code> 命令，帮助我们创建和管理 vendor 目录。</p>
<p>在我们想要基于 vendor 目录缓存的三方依赖包构建 Golang 程序，而不是基于本地缓存的 Go Module 构建 Golang 程序时，可以在 go build 命令后面加上 -mod=vendor 参数。并且在 Golang v1.14 及以后的版本中，如果 Golang 项目根目录下存在 vendor 目录，go build 命令会默认优先基于 vendor 目录缓存的三方依赖包构建 Golang 程序，除非我们在 go build 命令后面加上 -mod=mod 参数。</p>
<h5 id="_05-总结" tabindex="-1"><a class="header-anchor" href="#_05-总结" aria-hidden="true">#</a> <strong>05 总结</strong></h5>
<p>本文我们介绍了 Golang 的构建模式的演进过程，Golang 官方先后推出三种构建模式，分别是 GOPATH 构建模式，引入 vendor 机制的 GOPATH 构建模式和 Go Module 构建模式。</p>
<p>介绍了为什么要引进 vendor 机制，它解决了什么问题，同时它又带来了什么问题。官方基于社区推出的三方依赖包版本管理工具的基础上推出 Go Module 构建模式，是怎么解决 GOPATH 构建模式中 vendor 机制引入的问题的。</p>
<p>介绍了 vendor 机制在 GOPATH 构建模式和在 Go Module 构建模式中使用的区别是什么，为什么在 Go Module 构建模式中仍然需要使用 vendor 机制，如何在 Go Module 构建模式中使用 vendor 机制。</p>
<p><strong>GOPATH模式下，依赖包存储在$GOPATH/src，该目录下只保存特定依赖包的一个版本，而在GOMODULE模式下，依赖包存储在$GOPATH/pkg/mod，该目录中可以存储特定依赖包的多个版本。</strong></p>
<p><strong>需要注意的是$GOPATH/pkg/mod目录下有个cache目录，它用来存储依赖包的缓存，简单说，go命令每次下载新的依赖包都会在该cache目录中保存一份。</strong></p>
<ul>
<li><code v-pre>export GO111MODULE=off</code>切换到<code v-pre>GOPATH</code>模式</li>
<li><code v-pre>export GO111MODULE=on</code>切换到<code v-pre>GOMODULE</code>模式。</li>
</ul>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115204229602.png" alt="image-20230115204229602"></p>
<p>相较于GOPATH模式，GOMODULE有两处不同点：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>一是依赖包的目录中包含了版本号，每个版本占用一个目录；
二是依赖包的特定版本目录中只包含依赖包文件，不包含.git目录；
由于依赖包的每个版本都有一个唯一的目录，所以在多项目场景中需要使用同一个依赖包的多版本时才不会产生冲突。另外，由于依赖包的每个版本都有唯一的目录，也表示该目录内容不会发生改变，也就不必再存储其位于版本管理系统(如git)中的信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115204337811.png" alt="image-20230115204337811"></p>
<h2 id="_9-常见报错" tabindex="-1"><a class="header-anchor" href="#_9-常见报错" aria-hidden="true">#</a> 9.常见报错</h2>
<ol>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$GOPATH/go.mod exists but should not
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启模块支持后，并不能与<img src="https://math.jianshu.com/math?formula=GOPATH共存%2C所以把项目从" alt="GOPATH共存,所以把项目从">GOPATH中移出即可</p>
</li>
</ol>
<p>​	只需要把<a href="https://so.csdn.net/so/search?q=GoLand&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">GoLand<ExternalLinkIcon/></a>-&gt;settings-&gt;project gopath里边的设置删除即可</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/image-20230115202916537.png" alt="image-20230115202916537"></p>
<h4 id="_2-window的系统变量和用户变量" tabindex="-1"><a class="header-anchor" href="#_2-window的系统变量和用户变量" aria-hidden="true">#</a> 2.window的系统变量和用户变量：</h4>
<p><strong>path的优先级</strong>
上文我们说了Microsoft官方定义的文档，同时还留了一个问题；上述的“；”的两种情况，在没有参数的时候，加不加封号直接影响到执行的结果，这就涉及到path的优先级问题。</p>
<p>我们首先来了path的原理和作用
当我们想要去寻找一个可执行的文件或者外部命令时，系统首先会在当前根目录下去检索寻找，比如我们现在处于“C:\”下，那么当我们键入一个文件时，系统会先在当前的C盘下寻找，如果找不到时，就需要去系统path变量下遍历寻找，如果还是找不到就会去用户path变量下遍历寻找；==但是还是会出现明明定义了path变量或者定义了多个变量但是出现与期望不一样的结果。==这就需要去了解path变量内部遍历顺序。
<strong>path变量遍历顺序</strong>
一般来说，path变量遍历顺序时从上到下遍历的，但是有个例外，就是变量中结尾有“;”时，如上文说的，当“;”没有和其他参数搭配使用时，系统会从 PATH 环境变量中清除现有命令路径。所以检索时系统会把带有“;”的变量放在最后遍历，当有多个带有封号的变量时，系统会将这些变量放在其他变量遍历完后遍历，顺序依然时从上至下，这也是上述问题的原因。
在%CATALINA_HOME%\bin；变量前放有%MAVEN_HOME%\bin;，</p>
<p>**可是真实的执行顺序是这样吗，检索碰到第一个“;”时，就不会检索了，所以相当于只会检索到%MAVEN_HOME%\bin就会停止，这就是为什么当我们执行Tomat启动文件startup.bat反馈找不到文件的原因。**而当去掉封号后，startup.bat能够顺利执行，是因为，去掉封号后检索的顺序提前到之前去了，系统自然能够在遇到“;”前检索到。</p>
<p><strong>编辑path的注意事项</strong>
封号不要随便打，封号过多很有可能导致，找不到指定文件。执行顺序我们是不可改变的，但是我们编辑的习惯可以改变。
面对多个相同文件名不同版本的文件，比如jdk；想要随意切换版本，除了做好文件管理外，我们剩下的就是要注意优先级，我们可以通过将想要的版本的变量上移，来达到优先于其他版本检索到目的。
现在的许多新版本软件在下载.exe或.iml安装版本时，都会自动配置path变量，比如新版的jdk工具安装时就会在path中配置一个默认的变量，我们需要去管理，而不是放任不管。
path变量有时候不能如列表打开，这时候我们需要将首个变量修改为盘符开头格式</p>
<h2 id="_10-go-module-基本使用" tabindex="-1"><a class="header-anchor" href="#_10-go-module-基本使用" aria-hidden="true">#</a> 10.go module 基本使用</h2>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<p>go的版本以至1.13,一直以来令人诟病的依赖管理也有了官方的方向,但是看了一下目前很多blog文章还是比较老的.</p>
<p>所以这里对 go mod 做一个大致的说明</p>
<h3 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h3>
<h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3>
<p>go版本为1.13及以上</p>
<h3 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h3>
<p>如果你想更深层次的了解GO MODULE的意义及开发者们的顾虑,可以直接访问官方文档(EN)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://github.com/golang/go/wiki/Modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="go-module介绍" tabindex="-1"><a class="header-anchor" href="#go-module介绍" aria-hidden="true">#</a> go module介绍</h3>
<p>go module是go官方自带的go依赖管理库,在1.13版本正式推荐使用</p>
<p>go module可以将某个项目(文件夹)下的所有依赖整理成一个 go.mod 文件,里面写入了依赖的版本等</p>
<p>使用go module之后我们可不用将代码放置在src下了</p>
<p>具体的请往下看</p>
<h3 id="开启go-module" tabindex="-1"><a class="header-anchor" href="#开启go-module" aria-hidden="true">#</a> 开启go module</h3>
<p>go在1.13版本默认是auto,代表 当项目在 GOPATH/src 外且项目根目录有 go.mod 文件时，开启 go module.</p>
<p>也就是说,如果你不把代码放置在 GOPATH/src 下则默认使用 MODULE 管理.</p>
<p>不好意思看错了,1.13+的版本判断开不开启MODULE的依据是根目录下有没有go.mod文件</p>
<p>我们也可手动更改为 on(全部开启)/off(全部不开启)</p>
<p>这里演示设置为 on</p>
<p>windows:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>set GO111MODULE=on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mac:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export GO111MODULE=on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 GO111MODULE 选项</p>
<p>为 on 代表修改成功</p>
<h3 id="go-proxy" tabindex="-1"><a class="header-anchor" href="#go-proxy" aria-hidden="true">#</a> GO PROXY</h3>
<p>go module 的目的是依赖管理,所以使用 go module 时你可以舍弃 go get 命令(但是不是禁止使用, 如果要指定包的版本或更新包可使用go get,平时没有必要使用)</p>
<p>因go的网络问题, 所以推荐使用 goproxy.cn 设置详见</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<p>为你的项目第一次使用 GO MODULE(项目中还没有go.mod文件)</p>
<p>进入你的项目文件夹</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cd xxx/xxx/test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化 MODULE</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod init test(test为项目名)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们会发现在项目根目录会出现一个 go.mod 文件</p>
<p>注意,此时的 go.mod 文件只标识了项目名和go的版本,这是正常的,因为只是初始化了</p>
<h3 id="检测依赖" tabindex="-1"><a class="header-anchor" href="#检测依赖" aria-hidden="true">#</a> 检测依赖</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tidy会检测该文件夹目录下所有引入的依赖,写入 go.mod 文件</p>
<p>写入后你会发现 go.mod 文件有所变动</p>
<p>例如:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>module test go 1.13 require (
    github.com/gin-contrib/sessions v0.0.1
    github.com/gin-contrib/sse v0.1.0 // indirect
    github.com/gin-gonic/gin v1.4.0
    github.com/go-redis/redis v6.15.6+incompatible
    github.com/go-sql-driver/mysql v1.4.1
    github.com/golang/protobuf v1.3.2 // indirect
    github.com/jinzhu/gorm v1.9.11
    github.com/json-iterator/go v1.1.7 // indirect
    github.com/kr/pretty v0.1.0 // indirect
    github.com/mattn/go-isatty v0.0.10 // indirect
    github.com/sirupsen/logrus v1.2.0
    github.com/ugorji/go v1.1.7 // indirect
    golang.org/x/sys v0.0.0-20191025021431-6c3a3bfe00ae // indirect
    gopkg.in/yaml.v2 v2.2.4
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时依赖还是没有下载的</p>
<h3 id="下载依赖" tabindex="-1"><a class="header-anchor" href="#下载依赖" aria-hidden="true">#</a> 下载依赖</h3>
<p>我们需要将依赖下载至本地,而不是使用 go get</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你没有设置 GOPROXY 为国内镜像,这步百分百会夯住到死</p>
<p>此时会将依赖全部下载至 GOPATH 下,会在根目录下生成 go.sum 文件, 该文件是依赖的详细依赖, 但是我们开头说了,我们的项目是没有放到 GOPATH 下的,那么我们下载至 GOPATH 下是无用的,照样找不到这些包</p>
<h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行此命令,会将刚才下载至 GOPATH 下的依赖转移至该项目根目录下的 vendor(自动新建) 文件夹下</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/1268810-20191106164938645-353365538.png" alt="img"></p>
<p>此时我们就可以使用这些依赖了</p>
<h3 id="goland设置开启-go-module" tabindex="-1"><a class="header-anchor" href="#goland设置开启-go-module" aria-hidden="true">#</a> GOLAND设置开启 GO MODULE</h3>
<p>可能是因为 GO MODULE 功能还需完善,GOLAND默认是关闭该功能的,我们需要手动打开(不排除之后更新会不会改成默认开启)</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/1268810-20191109170029873-317649978.png" alt="img"></p>
<h3 id="依赖更新" tabindex="-1"><a class="header-anchor" href="#依赖更新" aria-hidden="true">#</a> 依赖更新</h3>
<p>这里的更新不是指版本的更新,而是指引入新依赖</p>
<p>依赖更新请从检测依赖部分一直执行即可,即</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod tidy
go mod download
go mod vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增依赖" tabindex="-1"><a class="header-anchor" href="#新增依赖" aria-hidden="true">#</a> 新增依赖</h3>
<p>有同学会问,不使用 go get ,我怎么在项目中加新包呢?</p>
<p>直接项目中 import 这个包,之后更新依赖即可</p>
<h3 id="在协作中使用-gomodule" tabindex="-1"><a class="header-anchor" href="#在协作中使用-gomodule" aria-hidden="true">#</a> 在协作中使用 GOMODULE</h3>
<p>要注意的是, 在项目管理中,如使用git,请将 vendor 文件夹放入白名单,不然项目中带上包体积会很大</p>
<p>git设置白名单方式为在git托管的项目根目录新建 .gitignore 文件</p>
<p><img src="@source/docs/theme-reco/img/go语言.assets/1268810-20191106170912821-1447852222.png" alt="img"></p>
<p>设置忽略即可.</p>
<p>但是 go.mod 和 go.sum 不要忽略</p>
<p>另一人clone项目后在本地进行依赖更新(同上方依赖更新)即可</p>
<h3 id="gomodule常用命令" tabindex="-1"><a class="header-anchor" href="#gomodule常用命令" aria-hidden="true">#</a> GOMODULE常用命令</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go mod init  # 初始化go.mod
go mod tidy  # 更新依赖文件
go mod download  # 下载依赖文件
go mod vendor  # 将依赖转移至本地的vendor文件
go mod edit  # 手动修改依赖文件
go mod graph  # 打印依赖图
go mod verify  # 校验依赖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-go-get取包原理" tabindex="-1"><a class="header-anchor" href="#_11-go-get取包原理" aria-hidden="true">#</a> 11.go  get取包原理</h2>
<h4 id="_2-go-get-取包原理篇" tabindex="-1"><a class="header-anchor" href="#_2-go-get-取包原理篇" aria-hidden="true">#</a> 2. <code v-pre>go get</code> 取包原理篇</h4>
<p>不论是否开启<code v-pre>Go Module</code>功能，<code v-pre>go get</code>从版本控制系统<code v-pre>VCS</code>中取包的基础过程是类似的，除了在新的实现中不再循环拉取<code v-pre>submodule</code>子模块以外。</p>
<h5 id="_2-1-go-get-基础取包流程" tabindex="-1"><a class="header-anchor" href="#_2-1-go-get-基础取包流程" aria-hidden="true">#</a> 2.1 <code v-pre>go get</code> 基础取包流程</h5>
<p>假设依赖包<code v-pre>github.com/liujianping/foo</code>不在本地，需要通过<code v-pre>go get</code>获取。发起以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$: go get github.com/liujianping/foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令发出后：</p>
<h5 id="_2-1-1-第一步-正则匹配出依赖包的查询路径" tabindex="-1"><a class="header-anchor" href="#_2-1-1-第一步-正则匹配出依赖包的查询路径" aria-hidden="true">#</a> 2.1.1 第一步，正则匹配出依赖包的查询路径</h5>
<p><code v-pre>go get</code>可以指定具体包的<code v-pre>import</code>路径或者通过其自行分析代码中的<code v-pre>import</code>得出需要获取包的路径。但是<code v-pre>import</code>路径，并不直接就是该包的查询路径。在<code v-pre>go get</code>的源码实现中，包的查询路径是通过一组正则匹配出来的。也就是说，<code v-pre>import</code>路径是必须匹配这组正则表达式的，如果不匹配的话，代码是肯定无法编译的。笔者就贴一下这组正则表达式中的github正则与私有仓库的正则：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// Github    {        prefix: "github.com/",        re:     `^(?P&lt;root>github\.com/[A-Za-z0-9_.\-]+/[A-Za-z0-9_.\-]+)(/[\p{L}0-9_.\-]+)*$`,        vcs:    "git",        repo:   "https://{root}",        check:  noVCSSuffix,    },    //省略其它VCS...    // General syntax for any server.     // Must be last.私有仓库将会使用该正则    {        re:   `^(?P&lt;root>(?P&lt;repo>([a-z0-9.\-]+\.)+[a-z0-9.\-]+(:[0-9]+)?(/~?[A-Za-z0-9_.\-]+)+?)\.(?P&lt;vcs>bzr|fossil|git|hg|svn))(/~?[A-Za-z0-9_.\-]+)*$`,        ping: true,    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以包路径<code v-pre>github.com/liujianping/foo</code>为例，正则匹配后，得出的查询路径就是：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://github.com/liujianping/foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再结合<code v-pre>go-get</code>参数，向远端VCS系统发起<code v-pre>https://github.com/liujianping/foo?go-get=1</code>请求。</p>
<h5 id="_2-1-2-第二步-查询得出包的远端仓库地址" tabindex="-1"><a class="header-anchor" href="#_2-1-2-第二步-查询得出包的远端仓库地址" aria-hidden="true">#</a> 2.1.2 第二步，查询得出包的远端仓库地址</h5>
<p>包的远端仓库地址，可以通过<code v-pre>go get</code>请求的响应中的<code v-pre>go-import</code>的meta标签中的content中获取的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$: curl https://github.com/liujianping/foo?go-get=1 | grep go-import&lt;meta name="go-import" content="github.com/liujianping/foo git https://github.com/liujianping/foo.git">
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子中的包对应的远端仓库地址就是：<code v-pre>https://github.com/liujianping/foo.git</code>.</p>
<h5 id="_2-1-3-第三步-根据仓库地址clone到本地" tabindex="-1"><a class="header-anchor" href="#_2-1-3-第三步-根据仓库地址clone到本地" aria-hidden="true">#</a> 2.1.3 第三步，根据仓库地址<code v-pre>clone</code>到本地</h5>
<p>虽然版本控制系统<code v-pre>VCS</code>本身就存在各类区别，但是一些基础操作大多类似。在<code v-pre>go get</code>中具体<code v-pre>clone</code>的过程会根据具体的<code v-pre>VCS</code>采用对应的操作。</p>
<h5 id="_2-2-go-get-代理取包流程" tabindex="-1"><a class="header-anchor" href="#_2-2-go-get-代理取包流程" aria-hidden="true">#</a> 2.2 <code v-pre>go get</code> 代理取包流程</h5>
<p>了解了<code v-pre>go get</code>取包的基础流程后，说说<code v-pre>Go Module</code>功能开启后的完整流程。</p>
<p>开启<code v-pre>Go Module</code>后，<code v-pre>go get</code>增加了一个新的环境变量<code v-pre>GOPROXY</code>。该环境变量一旦开启，<code v-pre>go get</code>就完全切换到新的取包流程，即**<code v-pre>GOPROXY</code>流程**，暂时就这么称呼吧。</p>
<p>在**<code v-pre>GOPROXY</code>流程**中，官方定义了一组代理接口, 请参考官方接口定义。</p>
<blockquote>
<p>GET $GOPROXY//@v/list returns a list of all known versions of the given module, one per line.</p>
<p>GET $GOPROXY//@v/.info returns JSON-formatted metadata about that version of the given module.</p>
<p>GET $GOPROXY//@v/.mod returns the go.mod file for that version of the given module.</p>
<p>GET $GOPROXY//@v/.zip returns the zip archive for that version of the given module.</p>
</blockquote>
<p>其实这组接口的定义就是<code v-pre>$GOPATH/pkg/mod/cache/download</code>中的文件系统。就是说，我们可以直接将此目录下的文件系统作为代理使用，如下命令：<code v-pre>export GOPROXY=file:///$GOPATH/pkg/mod/cache/download/</code></p>
<p>关于<code v-pre>GOPROXY</code>代理服务，网上有很多实现，官方也推荐了几个。各有各的问题，只能这样说。因为，对于一些定制话的需求，例如：</p>
<ul>
<li>私有仓库的权限问题</li>
<li>个别库的镜像国内无法访问等</li>
</ul>
<p>尚无完美的解决方案。但是即使这样，我们还是可以根据具体的工程化需求构建企业内部的一套标准的<code v-pre>GO Module</code>流程来。具体方案，在下一篇<strong>工程实践篇</strong>中讲解。</p>
<h5 id="_2-3-私有仓库取包过程中的常见问题" tabindex="-1"><a class="header-anchor" href="#_2-3-私有仓库取包过程中的常见问题" aria-hidden="true">#</a> 2.3 私有仓库取包过程中的常见问题</h5>
<p>私有仓库的取包过程中出现的问题大多集中在基础取包过程中。具体的异常又可能发生在2.1.1～2.1.3任一阶段。分别列举常见问题与解决思路。</p>
<h5 id="_2-3-1-私有仓库clone阶段的权限问题" tabindex="-1"><a class="header-anchor" href="#_2-3-1-私有仓库clone阶段的权限问题" aria-hidden="true">#</a> 2.3.1 私有仓库<code v-pre>clone</code>阶段的权限问题</h5>
<p>通常情况下，私有仓库的访问是基于账号权限的。例如，<code v-pre>private.vcs.com/group/foo</code>的包路径，在<code v-pre>go get</code>过程中，会正则匹配出<code v-pre>https://private.vcs.com/group/foo.git</code>的仓库路径，假设VCS系统是gitlab搭建的。</p>
<p>那么在<code v-pre>git clone https://private.vcs.com/group/foo.git</code>的过程中，系统会提醒用户提供用户名与登录密码。每次输入就会很累赘。</p>
<p><strong>解决方案</strong>有二：</p>
<ul>
<li>方法一：</li>
</ul>
<blockquote>
<p>增加 <code v-pre>$HOME/.gitconfig</code> 配置:</p>
<p>[url “ssh://<a href="mailto:git@github.com">git@github.com</a>/MYORGANIZATION/“]
insteadOf = https://github.com/MYORGANIZA…</p>
</blockquote>
<p>将原有的https访问方式替换成ssh方式。</p>
<ul>
<li>方法二：</li>
</ul>
<blockquote>
<p>增加 <code v-pre>$HOME/.netrc</code>:</p>
<p>machine github.com login YOU password APIKEY
将其中的 APIKEY 换成自己的登录KEY。</p>
</blockquote>
<p>虽然采用的github为例，但适用于gitlab服务。其实，还有一种解决方案，该方案，还能解决2.3.2中的问题，故在下节中讲解。</p>
<h2 id="_12-go相关工具" tabindex="-1"><a class="header-anchor" href="#_12-go相关工具" aria-hidden="true">#</a> 12.go相关工具</h2>
<p>goctl</p>
</div></template>



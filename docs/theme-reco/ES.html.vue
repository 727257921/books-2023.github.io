<template><div><h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h1>
<p>like如果是大数据的话，十分慢，索引</p>
<p>ES：搜索，百度，github，淘宝电商都在用</p>
<p>1.安装</p>
<p>2,.生态圈</p>
<p>3.分词器IK</p>
<p>4.CURD</p>
<p>5.Restful操作ES</p>
<p>6.sprinigboot集成ES</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220525094611357.png" alt="image-20220525094611357"></p>
<p>大数据就两个问题：第一个是存储的问题，第二个是计算的问题</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220525094822602.png" alt="image-20220525094822602"></p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220525095340441.png" alt="image-20220525095340441"></p>
<p>Lucene是一套信息检索工具包，jar包，不包含搜索引擎系统</p>
<p>包含的：索引结构，读写索引的工具，排序，搜索规则，工具类</p>
<p>Lucene和ES的关系：</p>
<p>ES是基于Lucene做了一些封装和增强</p>
<h3 id="谁在使用" tabindex="-1"><a class="header-anchor" href="#谁在使用" aria-hidden="true">#</a> 谁在使用？</h3>
<p>1.维基百科，搜索推荐,权重</p>
<p>2.国外的新闻网站，用户行为日志（点击，浏览，收藏，评论）+社交网络数据（对某某新闻的相关看法），数据分析，给到每篇新闻作者，让他知道他的文章的公众反馈，好坏，热门，垃圾，鄙视，崇拜。</p>
<p>3.Stack Overflow，IT问题，程序的报错</p>
<p>4.github，搜索上千亿行代码</p>
<p>5.电商网站，检索商品</p>
<p>6.日志数据分析，logstash采集日志，ES进行复杂的数据分析，ELK技术，</p>
<p>7.商品价格监控网站，用户设定某商品的价格阈值，当低于该阈值的时候，发送通知消息给用户，比如说订阅牙膏的监控，如果高露洁牙膏的家庭套装低于50块钱，就通知我，我就去买</p>
<p>8.BI系统，商业智能，比如说有个大型商场集团，BI分析一个某某区域最近3年的用户消费金额的趋势以及用户群体的组成构成，产出相关的数张报表，ES执行数据分析和挖掘，KIbana进行数据可视化</p>
<p>9.国内：站内搜索（电商，招聘，门户），IT系统搜索（OA，CRM，ERP），数据分析（ES热门的一个使用场景）</p>
<h3 id="solr介绍" tabindex="-1"><a class="header-anchor" href="#solr介绍" aria-hidden="true">#</a> solr介绍</h3>
<p>solr也是apache的开源项目，用java开发，基于Lucene的全文搜索服务器，可以独立运行，运行在Jetty，tomcat等这些容器中，solr索引的实现方式很简单，用Post方法向Solr服务器发送一个描述Field及其内容的XML文档，solr根据xml文档添加，删除，更新索引，solr搜索只需要发送Http get请求，然后对solr返回xml，json等格式的查询结果进行解析，组织页面布局，solr不提供构建UI的功能，solr提供了一个管理界面，通过管理界面可以查询solr的配置和运行情况。</p>
<p>solr是基于lucene开发企业级搜索服务器，实际上是封装了lucene。</p>
<p>它提供类似于web-service的api接口，用户可以通过http请求，向搜索引擎服务器提交一定格式的文件，生成索引，也可以通过提出查找请求，并得到返回结果。</p>
<h3 id="lucene简介" tabindex="-1"><a class="header-anchor" href="#lucene简介" aria-hidden="true">#</a> Lucene简介</h3>
<h3 id="es和solr比较" tabindex="-1"><a class="header-anchor" href="#es和solr比较" aria-hidden="true">#</a> ES和Solr比较</h3>
<p>1.单纯的对已有的数据进行搜索时，solr更快</p>
<p>2.当实时建立索引时，solr会产生Io阻塞，查询性能较差，ES具有明显的优势</p>
<p>3.随着数据量的增加，solr的搜索效率会变得更低，而Es完全没有明显的变化。</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613184323466.png" alt="image-20220613184323466"></p>
<h3 id="es下载安装-7-6-1或者2" tabindex="-1"><a class="header-anchor" href="#es下载安装-7-6-1或者2" aria-hidden="true">#</a> ES下载安装：7.6.1或者2</h3>
<p>华为镜像：</p>
<p>ElasticSearch: https://mirrors.huaweicloud.com/elasticsearch/?C=N&amp;O=D
logstash: https://mirrors.huaweicloud.com/logstash/?C=N&amp;O=D
kibana: https://mirrors.huaweicloud.com/kibana/?C=N&amp;O=D</p>
<p>https://www.elastic.co/cn/downloads/elasticsearch</p>
<p>ELK三剑客，解压即用（需要web环境，前端环境）</p>
<p>node.js,python等</p>
<p>目录文件：</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613185941337.png" alt="image-20220613185941337"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bin  启动文件
config  配置文件
	log4j2 日志配置文件
	jvm.options  java虚拟机相关配置
	elasticsearch.yml  es配置文件，默认9200端口，跨域问题,集群等
jdk  环境
lib  相关jar包
modules 功能模块
plugins  插件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config中jvm.option是内存的配置，下面是最大内存1G，我们需要修改</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613185725136.png" alt="image-20220613185725136"></p>
<p>启动es:</p>
<p>在bin目录里，elasticsearch.bat启动，启动后就可以访问9200</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613190908425.png" alt="image-20220613190908425"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ES可视化插件：
elasticsearch head
没有前端基础的，先把基本的环境安装上
1.下载地址：https://github.com/mobz/elasticsearch-head
2.es-head涉及到依赖：
{
  "name": "elasticsearch-head",
  "version": "0.0.0",
  "description": "Front end for an elasticsearch cluster",
  "main": "_site/index.html",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "start": "grunt server",
    "test": "grunt jasmine",
    "proxy": "node proxy/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mobz/elasticsearch-head.git"
  },
  "author": "",
  "license": "Apache2",
  "gitHead": "0c2ac0b5723b493e4454baa7398f386ecb829412",
  "readmeFilename": "README.textile",
  "devDependencies": {
    "grunt": "1.0.1",
    "grunt-contrib-concat": "1.0.1",
    "grunt-contrib-watch": "1.0.0",
    "grunt-contrib-connect": "1.0.2",
    "grunt-contrib-copy": "1.0.0",
    "grunt-contrib-clean": "1.0.0",
    "grunt-contrib-jasmine": "1.0.3",
    "karma": "1.3.0",
    "grunt-karma": "2.0.0",
    "http-proxy": "1.16.x"
  }
}
3.下载完head后，进入目录，执行cnpm install 就会安装依赖，安装完后然后执行npm run start 就会启动，启动成功后，是9100端口
4.安装完后，es-head是使用9100端口，所以9100端口去连接9200，涉及到跨域
这时候去config下的elasticsearch.yml中添加配置
http.cors.enabled:true
http.cors.allow-origin:"*"

然后重启ES，然后应该就可以连接上了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/ES/image-20220613192417500.png" alt="image-20220613192417500"></p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613192456952.png" alt="image-20220613192456952"></p>
<p>安装好后：点击信息就是</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613194245490.png" alt="image-20220613194245490"></p>
<p>es的6.x中有类型，7.x和8.x都淘汰了，所以没人用6.x了</p>
<p>我们把head当做展示工具用，存数据来看一眼而已，更详细的查询用Kiban</p>
<h3 id="elk简介" tabindex="-1"><a class="header-anchor" href="#elk简介" aria-hidden="true">#</a> ELK简介</h3>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613221311433.png" alt="image-20220613221311433"></p>
<p>收集清洗数据=》搜索，存储-》kibana</p>
<p>市面上很多开发只要提到ELK能够一致说出它是一个日志分析框架技术栈总称，但实际上ELK不仅仅适用于日志分析，它可以支持其他任何数据分析和收集的场景，。</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613222157280.png" alt="image-20220613222157280"></p>
<p>大数据</p>
<p>https://www.elastic.co/cn/downloads/kibana</p>
<p>https://github.com/elastic/kibana/blob/main/config/kibana.yml</p>
<p>ELK基本都是拆箱即用</p>
<p>启动测试：</p>
<p>1.解压</p>
<p>2.启动：</p>
<p>3.访问测试</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613223102540.png" alt="image-20220613223102540"></p>
<p>也可以使用post，get，</p>
<p>可以自己修改kibana配置，然后给中文化</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220613224835668.png" alt="image-20220613224835668"></p>
<p>es是面向文档的，所以索引和搜索数据的最小单位是文档，es中，文档有几个重要的属性：</p>
<p>1.自我包含：一篇文档同时包含字段和对应的值，也就是同时包含key:value</p>
<p>2.可以是层次型的，一个文档中包含自文档，复杂的逻辑实体就是这么来的（就是一个json对象，fastjson进行自动转换）</p>
<p>3.灵活的结构，文档不依赖预定义的模式，我们知道关系型数据库中，要提前定义字段才能使用，在es中，对于字段是非常灵活的，有时候我们可以忽略字段，或者动态添加一个新的字段。</p>
<h5 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h5>
<p>类型 文档的逻辑容器，就像关系型数据库一样，表格是行的容器，类型中对于字段的定义称为映射，比如name映射为字符串类型，我们说问的那个是无模式的，他们不需要拥有映射中所定义的所有字段，比如新增一个字段，那么es是怎么做的呢？es会自动将新字段加入映射，但是这个字段的不确定它是什么类型，es就开始猜，如果这个值是18，那么es会认为它是整形，但是es也可能猜的不对，所以最安全的方式就是提前定义好所需要的映射，这点跟关系型数据库殊途同归，先定义好字段，然后再使用。</p>
<h5 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h5>
<p>索引是映射类型的容器，es的索引是一个非常大的文档集合。</p>
<p>物理设计：节点和分片</p>
<p>一个集群至少有一个节点，一个节点就是一个es进程，节点可以有多个索引默认的，如果你创建索引，那么索引会有5个分片构成的（主分片），每一个主分片会有一个副本（副分片）</p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220614093106037.png" alt="image-20220614093106037"></p>
<p><img src="@source/docs/theme-reco/img/ES/image-20220614093237475.png" alt="image-20220614093237475"></p>
<h3 id="rest风格" tabindex="-1"><a class="header-anchor" href="#rest风格" aria-hidden="true">#</a> Rest风格</h3>
<p><img src="@source/docs/theme-reco/img/ES/image-20220614095717440.png" alt="image-20220614095717440"></p>
</div></template>



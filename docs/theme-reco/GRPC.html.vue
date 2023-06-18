<template><div><h3 id="_1-grpc介绍" tabindex="-1"><a class="header-anchor" href="#_1-grpc介绍" aria-hidden="true">#</a> 1.GRPC介绍：</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220821203910603.png" alt="image-20220821203910603"></p>
<h3 id="_2-下载proto编译器-window版-然后配置好环境变量" tabindex="-1"><a class="header-anchor" href="#_2-下载proto编译器-window版-然后配置好环境变量" aria-hidden="true">#</a> 2.下载proto编译器：window版，然后配置好环境变量</h3>
<h3 id="_3-安装idea的proto插件" tabindex="-1"><a class="header-anchor" href="#_3-安装idea的proto插件" aria-hidden="true">#</a> 3.安装Idea的proto插件：</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220821211023374.png" alt="image-20220821211023374"></p>
<p>这个插件是为了开发proto文件时能自动进行语法检查等。</p>
<h3 id="_4-实战案例-news服务端" tabindex="-1"><a class="header-anchor" href="#_4-实战案例-news服务端" aria-hidden="true">#</a> 4.实战案例：news服务端：</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220821211152002.png" alt="image-20220821211152002"></p>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220821211231053.png" alt="image-20220821211231053"></p>
<p>grpc使用了很多构造器模式，来创建对象</p>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220821230030853.png" alt="image-20220821230030853"></p>
<h3 id="_5-news客户端" tabindex="-1"><a class="header-anchor" href="#_5-news客户端" aria-hidden="true">#</a> 5.news客户端：</h3>
<p>也是需要新建一个demo项目，然后pom.xml中插件扩展和服务端一样，然后新建proto目录，新建proto文件，这个文件要和服务端的一样，平时可以在git中管理</p>
<p>然后开始编译，protobuf:compile是生成存根文件</p>
<p>protobuf:compile-custom是生成通讯文件</p>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823082238046.png" alt="image-20220823082238046"></p>
<h3 id="_6-grpc通信原理" tabindex="-1"><a class="header-anchor" href="#_6-grpc通信原理" aria-hidden="true">#</a> 6.GRPC通信原理：</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823083908949.png" alt=""></p>
<p>这个调用过程和大多数的RPC框架都一样</p>
<h3 id="_7-protobuf语法" tabindex="-1"><a class="header-anchor" href="#_7-protobuf语法" aria-hidden="true">#</a> 7.ProtoBuf语法</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//01 使用proto3语法
syntax = "proto3";
//生成多个类
option java_multiple_files = false;
//生成外层类类名
option java_outer_classname = "NewsProto";
//proto包名
package news;
//定义rpc服务RouteGuide
service NewsService{
    //list方法名。NewsRequest代表传入参数，NewsResponse代表返回响应
    rpc list(NewsRequest) returns (NewsResponse) {}
}
/*
    消息是grpc描述信息的基本单位，类似java的实体类
    消息的名字，对应生成代码后的类名
    每一个消息都对应生成一个类，根据java_multiple_files设置不同文件数量也不同
    java_multiple_files=true, protobuf为每一个消息自动生成一个java文件
    java_multiple_files=false,protobuf会生成一个大类，消息作为子类集中在一个Java文件
*/
message NewsRequest{
    /*
        字段：类型  名称=索引值(id)
        每个字段都要定义唯一的索引值，这些数字是用来在消息的二进制格式中识别各个字段的
        一旦开始使用就不能够再改变，最小的标识号可以从1开始，最大的到2的29次方-1，or 536,870,911
        不可以使用其中的[19000-19999]的标识号，protobuf协议实现中对这些进行了预留
        切记：要为将来可能添加的，频繁出现的标识号预留一些标识号
    */
    string date = 1;
}
message NewsResponse{
    //repeated是一个集合（数组），数组每一个元素都是News对象
    repeated News news = 1;//List&lt;News> getNewsList
}
//News新闻实体对象
message News{
    int32 id = 1;
    string title = 2;
    string content = 3;
    int64 createTime = 4;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/GRPC/image-20220823085713286.png" alt="image-20220823085713286"></p>
<p>一个sms.proto的案例：</p>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823090431669.png" alt="image-20220823090431669"></p>
<h3 id="_8-生成代码解析" tabindex="-1"><a class="header-anchor" href="#_8-生成代码解析" aria-hidden="true">#</a> 8.生成代码解析</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823090603525.png" alt="image-20220823090603525"></p>
<p>存根是放在客户端上的</p>
<h3 id="_9-grpc通信模式" tabindex="-1"><a class="header-anchor" href="#_9-grpc通信模式" aria-hidden="true">#</a> 9.GRPC通信模式</h3>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823091525907.png" alt="image-20220823091525907"></p>
<h4 id="一元rpc通信模式" tabindex="-1"><a class="header-anchor" href="#一元rpc通信模式" aria-hidden="true">#</a> 一元RPC通信模式：</h4>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220823091615588.png" alt="image-20220823091615588"></p>
<p>new-server-demo就是一元的通信模式</p>
<p>基本流程：引入依赖-》添加proto文件-》</p>
<h4 id="服务端流式rpc通信模式" tabindex="-1"><a class="header-anchor" href="#服务端流式rpc通信模式" aria-hidden="true">#</a> 服务端流式RPC通信模式</h4>
<p>特点1：返回的是流式：stream</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    public static void main(String[] args){
        ManagedChannel channel = ManagedChannelBuilder.forAddress(host, serverPort).usePlaintext().build();
        //blockingStub支持服务器推流
        SmsServiceGrpc.SmsServiceBlockingStub smsService = SmsServiceGrpc.newBlockingStub(channel);
        //传入参数，服务器推流在客户端使用迭代器接收
        Iterator&lt;SmsProto.SmsResponse> itr = smsService.sendSms(SmsProto.SmsRequest.newBuilder()
                .setContent("下午三点开会")
                .addPhoneNumber("13523459343")
                .addPhoneNumber("13523459344")
                .addPhoneNumber("13523459345")
                .addPhoneNumber("13523459346")
                .addPhoneNumber("13523459347")
                .build()
        );
        while (itr.hasNext()){
            SmsProto.SmsResponse next = itr.next();
            System.out.println(next.getResult());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端流式rpc通信模式" tabindex="-1"><a class="header-anchor" href="#客户端流式rpc通信模式" aria-hidden="true">#</a> 客户端流式RPC通信模式</h4>
<p><img src="@source/docs/theme-reco/img/GRPC/image-20220824222456351.png" alt="image-20220824222456351"></p>
<h4 id="双向流式rpc通信" tabindex="-1"><a class="header-anchor" href="#双向流式rpc通信" aria-hidden="true">#</a> 双向流式RPC通信</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>rpc createAndSendSms(stream PhoneNumberRequest) returns (stream PhoneNumberResponse) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请求和相应都加上stream就代表双向通信了</p>
<h3 id="_10-grpc和微服务架构" tabindex="-1"><a class="header-anchor" href="#_10-grpc和微服务架构" aria-hidden="true">#</a> 10.grpc和微服务架构</h3>
<h4 id="springboot集成grpc" tabindex="-1"><a class="header-anchor" href="#springboot集成grpc" aria-hidden="true">#</a> springboot集成grpc</h4>
<p><img src="@source/docs/theme-reco/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220906091222961.png" alt="image-20220906091222961"></p>
<p>@GrpcService注解的作用：</p>
</div></template>



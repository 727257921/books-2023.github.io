<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1>
<p><img src="@source/docs/theme-reco/img/common/image-20220508112522648.png" alt="image-20220508112522648"></p>
<h2 id="_1-docker为什么出现" tabindex="-1"><a class="header-anchor" href="#_1-docker为什么出现" aria-hidden="true">#</a> 1.docker为什么出现？</h2>
<p>一款产品：开发-上线两套环境，应用环境，应用配置</p>
<p>开发-运维问题：我的电脑可以运行，你得电脑就不能运行为什么？版本更新，导致服务不可用，等等。</p>
<p>每个机器都要部署环境，集群redis，ES，hadoop，费时费力</p>
<p>发布一个项目jar包，运行这个jar是一分钟的事，但是部署redis，mysql，jdk,es等环境都要一整天。并且很多服务器配置不能跨平台。</p>
<p>所以项目能不能带上环境安装打包，这样就部署很快了，docker就是干这事的。</p>
<p>传统的：开发完jar包，运维来做部署的事</p>
<p>现在：开发打包部署上线，一套流程做完。</p>
<p>docker给以上问题，给出了解决方案。</p>
<p>例如：</p>
<p>java开发安卓应用-》打包成apk-》发布到应用商店-》张三使用apk-》安装即可使用</p>
<p>java开发一个项目-》java中还有一些环境-》jar(环境)-》打包项目（带上环境一并打包），这个就叫docker镜像-》把镜像放到docker仓库：商店-》下载我们发布的镜像-》直接运行即可。</p>
<p>docker的思想就来源于集装箱</p>
<p>例如jre程序部署了有多个应用，可能有各种应用端口冲突，原来都是交叉的，这时候怎么办，用docker的隔离思想，把所有东西打包装箱，每个箱子互相隔离。</p>
<p>以前例如一箱水果，一箱生化武器，如果都一起放在linux中，肯定就互相污染了，所以docker通过隔离机制，可以将服务器利用到极致。</p>
<p>本质所有的技术都是因为出现了一些问题，我们才会去学习。</p>
<h2 id="_2-docker的历史" tabindex="-1"><a class="header-anchor" href="#_2-docker的历史" aria-hidden="true">#</a> 2.docker的历史：</h2>
<p><img src="@source/docs/theme-reco/img/docker/image-202205081203499167" alt="image-20220508120349916"></p>
<blockquote>
<p>聊聊docker</p>
</blockquote>
<p><img src="@source/docs/theme-reco/img/docker/image-20220508120736585.png" alt="image-20220508120736585"></p>
<h2 id="_3-docker能干嘛" tabindex="-1"><a class="header-anchor" href="#_3-docker能干嘛" aria-hidden="true">#</a> 3.docker能干嘛？</h2>
<ol>
<li>之前的虚拟机技术：</li>
</ol>
<p><img src="@source/docs/theme-reco/img/docker/image-20220508121026126.png" alt="image-20220508121026126"></p>
<p>虚拟机技术缺点：</p>
<p>资源占用多</p>
<p>冗余步骤多</p>
<p>启动很慢</p>
<p>2.容器化技术：</p>
<p>容器化技术不是一个模拟的完整的操作系统</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220508121246186.png" alt="image-20220508121246186"></p>
<ul>
<li>
<p>传统虚拟机，虚拟出一些硬件，运行一个完整的操作系统，然后这个系统安装和运行软件。</p>
</li>
<li>
<p>容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件，所以就轻便了</p>
</li>
<li>
<p>每个容器是相互隔离的，每个容器内都有一个属于自己的文件系统，互不影响。</p>
</li>
</ul>
<p>DevOps（开发，运维）</p>
<p><strong>应用更快速的交付和部署</strong></p>
<p>传统：一堆帮助文档，安装程序</p>
<p>Docker：打包镜像发布测试，一键运行</p>
<p><strong>更便捷升级和扩缩容</strong></p>
<p>使用了docker之后，我们部署应用就和搭积木一样</p>
<p>Springboot1.5  redis5 tomcat8  等等这些如果要升级的话就要都升级，所以现在项目打包为一个镜像</p>
<p>例如扩展：可以从服务器A直接运行到服务器B</p>
<p><strong>更简单的系统运维</strong></p>
<p>在容器化后，我们的开发测试环境都是高度一致的。</p>
<p><strong>更高效的计算资源利用</strong></p>
<p>Docker是内核级别的虚拟化，不需要管理程序等，可以在一个物理机上运行很多的容器实例。</p>
<p>服务器的性能可以被压榨到极致</p>
<h2 id="_4-docker安装和基本组成" tabindex="-1"><a class="header-anchor" href="#_4-docker安装和基本组成" aria-hidden="true">#</a> 4.docker安装和基本组成：</h2>
<h3 id="_1-基本组成" tabindex="-1"><a class="header-anchor" href="#_1-基本组成" aria-hidden="true">#</a> （1）基本组成：</h3>
<p><img src="@source/docs/theme-reco/img/docker/image-20220508123047429.png" alt="image-20220508123047429"></p>
<p>docker  run 运行一个容器</p>
<p>docker pull 拉一个容器</p>
<p>docker build  构建一个容器，</p>
<p>构建完后就要运行，运行主要是在docker服务上运行，也就是docker daemon上运行，这是个docker的守护进程，守护进程要运行，就是通过docker的镜像去运行images，镜像就好比java的类，或者类模板class</p>
<p>例如tomcat镜像，运行起来形成tomacat1容器，还可以通过这个镜像再运行一个容器tomcat2形成tomcat集群。</p>
<p><strong>镜像（images）：</strong></p>
<p>好比一个模板，通过这个模板可以创建容器服务，tomcat镜像通过run来运行起来-》创建成tomcat1容器（提供服务器），通过这个镜像可以创建多个容器，最终服务运行或者项目运行就在容器中运行的。</p>
<p><strong>容器（container）：</strong></p>
<p>docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。</p>
<p>容器可以启动，停止，删除，基本命令</p>
<p>目前可以把容器理解为就是一个简易的linux系统</p>
<p><strong>仓库（repository）:</strong></p>
<p>仓库就是存放镜像的地方，仓库分为公有仓库和私有仓库</p>
<p>Docker  hub</p>
<p>阿里云各种云都有容器服务器（配置镜像加速）</p>
<h3 id="_2-安装docker" tabindex="-1"><a class="header-anchor" href="#_2-安装docker" aria-hidden="true">#</a> （2）安装docker</h3>
<p>系统环境：</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220508124452774.png" alt="image-20220508124452774"></p>
<p>安装：linux下安装https://docs.docker.com/engine/install/centos/</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.卸载旧的版本：
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
                  
2.需要的安装包：
sudo yum install -y yum-utils
3.设置镜像仓库：
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo  默认是国外的
    
推荐阿里云的镜像地址：
sudo yum-config-manager \
    --add-repo \
	http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#更新yum软件包索引
yum makecache fast

4.安装docker相关的：docker-ce社区版，ee是企业版
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

5.启动docker：
sudo systemctl start docker
使用docker version判断是否安装成功

6.启动镜像：
sudo docker run hello-world

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220508125959181.png" alt="image-20220508125959181"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>7.查看下载的hello-world镜像：
docker images

8.卸载docker:
（1）卸载依赖：
sudo yum remove docker-ce docker-ce-cli containerd.io
（2）删除目录：
 sudo rm -rf /var/lib/docker
 sudo rm -rf /var/lib/containerd
 
 /var/lib/docker  docker的默认工作路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-阿里云镜像加速器" tabindex="-1"><a class="header-anchor" href="#_3-阿里云镜像加速器" aria-hidden="true">#</a> （3）阿里云镜像加速器：</h3>
<h3 id="_4-hello-world启动流程" tabindex="-1"><a class="header-anchor" href="#_4-hello-world启动流程" aria-hidden="true">#</a> （4）hello world启动流程：</h3>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510094500288.png" alt="image-20220510094500288"></p>
<h3 id="_5-底层原理" tabindex="-1"><a class="header-anchor" href="#_5-底层原理" aria-hidden="true">#</a> （5）底层原理</h3>
<p>docker是一个CS结构的系统，server的守护进程运行在主机上，通过socket从客户端访问，dockersever接收到docker-client的命令后，就会执行这个命令</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510094957937.png" alt="image-20220510094957937"></p>
<p>docker为什么比VM快？</p>
<p>1.docker有比虚拟机更少的抽象层</p>
<p>2.docker利用的是宿主机的内核，vm需要是Guest OS</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510095156055.png" alt="image-20220510095156055"></p>
<p>新建一个容器的时候，docker不需要像虚拟机一样重新加载一个操作系统内核，避免引导，虚拟机是加载Guest OS，分钟级别的，而docker是利用宿主机的操作系统，省略了这个复杂的过程。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510095538102.png" alt="image-20220510095538102"></p>
<h2 id="_5-docker的常用命令" tabindex="-1"><a class="header-anchor" href="#_5-docker的常用命令" aria-hidden="true">#</a> 5.docker的常用命令：</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>port  	  # 查看映射端口对应的容器内部源端口
pause	  # 暂停容器
ps        # 猎户容器列表
pull      # 从docker镜像源服务器拉取指定镜像或者库镜像
push      # 推送指定镜像或者库镜像至docker源服务器
restart   # 重启运行的容器
rm        # 移除一个或多个容器
rmi       # 移除一个或多个镜像 （无容器使用该镜像才可删除，否则需要删除相关容器才可继续或 -f 强制删除）
run       # 创建一个新的容器并运行一个命令
save      # 保存一个镜像为一个 tar 包【对应 load】
search    # 在 docker hub 中搜索镜像
start     # 启动容器
stop      # 停止容器
tag       # 给源中镜像打标签
top       # 查看容器中运行的进程信息
unpause   # 取消暂停容器
version   # 查看 docker版本号
wait      # 截取容器停止时的退出状态值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令：</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker version  #显示docker的版本信息
docker info  #显示docker的系统信息，包括镜像和容器的数量
docker 命令 --help #帮助命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令：</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker images 查看所有镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510180312987.png" alt="image-20220510180312987"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker search 搜索镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510180554051.png" alt="image-20220510180554051"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker pull 下载镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510180902520.png" alt="image-20220510180902520"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510181053827.png" alt="image-20220510181053827"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker rmi 删除镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510183520437.png" alt="image-20220510183520437"></p>
<h4 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h4>
<p>说明：我们有了镜像才可以创建容器，linux，下载一个centos镜像来测试学习</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker pull centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="新建容器并启动" tabindex="-1"><a class="header-anchor" href="#新建容器并启动" aria-hidden="true">#</a> <strong>新建容器并启动</strong></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run [可选参数] image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510185124919.png" alt="image-20220510185124919"></p>
<h5 id="列出所有的运行的容器" tabindex="-1"><a class="header-anchor" href="#列出所有的运行的容器" aria-hidden="true">#</a> <strong>列出所有的运行的容器</strong></h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510185503709.png" alt="image-20220510185503709"></p>
<h5 id="退出容器" tabindex="-1"><a class="header-anchor" href="#退出容器" aria-hidden="true">#</a> <strong>退出容器</strong></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>exit  #直接容器停止并退出
ctrl + P +Q #容器不停止退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> <strong>删除容器</strong></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker rm 容器id   #删除容器，不能删除正在运行的容器，如果要强制删除rm -f
docker rm -f $(docker ps -aq)   	#删除所有的容器
docker ps -a -q | xargs docker rm  	#删除所有的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="启动和停止容器的操作" tabindex="-1"><a class="header-anchor" href="#启动和停止容器的操作" aria-hidden="true">#</a> <strong>启动和停止容器的操作</strong></h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker start 容器id   #启动容器
docker restart 容器id #重启容器
docker stop 容器id  #停止容器
docker kill 容器id  #杀掉容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="常用其他命令" tabindex="-1"><a class="header-anchor" href="#常用其他命令" aria-hidden="true">#</a> <strong>常用其他命令</strong></h5>
<h6 id="后台启动容器" tabindex="-1"><a class="header-anchor" href="#后台启动容器" aria-hidden="true">#</a> <strong>后台启动容器</strong></h6>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510190458915.png" alt="image-20220510190458915"></p>
<h6 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> <strong>查看日志</strong></h6>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510191241101.png" alt="image-20220510191241101"></p>
<h6 id="查看容器中进程信息" tabindex="-1"><a class="header-anchor" href="#查看容器中进程信息" aria-hidden="true">#</a> <strong>查看容器中进程信息</strong></h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker top 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="查看镜像的元数据" tabindex="-1"><a class="header-anchor" href="#查看镜像的元数据" aria-hidden="true">#</a> <strong>查看镜像的元数据</strong></h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker inspect d3178d75c575

C:\Users\happing>docker inspect d3178d75c575
[
    {
        "Id": "d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81",
        "Created": "2022-05-10T12:51:13.7963267Z",
        "Path": "/bin/bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1336,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2022-05-10T12:51:15.2114996Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
        "ResolvConfPath": "/var/lib/docker/containers/d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81/hostname",
        "HostsPath": "/var/lib/docker/containers/d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81/hosts",
        "LogPath": "/var/lib/docker/containers/d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81/d3178d75c5754785f877e16efdd14091df8051638519d7ddbc224fd3e7ef4d81-json.log",
        "Name": "/dazzling_bhabha",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                30,
                120
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/dbe96b8bf9846b0985ef2f8ca6f2d95ba3fadcae0d708d80535e35d387ad8a99-init/diff:/var/lib/docker/overlay2/8afb6fbd60b65e95ca55823b2035e4c5b59e2ae11be60cdab0d81e4f2fd07892/diff",
                "MergedDir": "/var/lib/docker/overlay2/dbe96b8bf9846b0985ef2f8ca6f2d95ba3fadcae0d708d80535e35d387ad8a99/merged",
                "UpperDir": "/var/lib/docker/overlay2/dbe96b8bf9846b0985ef2f8ca6f2d95ba3fadcae0d708d80535e35d387ad8a99/diff",
                "WorkDir": "/var/lib/docker/overlay2/dbe96b8bf9846b0985ef2f8ca6f2d95ba3fadcae0d708d80535e35d387ad8a99/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "d3178d75c575",
            "Domainname": "",
            "User": "",
            "AttachStdin": true,
            "AttachStdout": true,
            "AttachStderr": true,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": true,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/bash"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20210915",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "c1b0d911633a526dfac3bc21762fe131d6dc8c4d7ab05f6b8718cac63b6da972",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/c1b0d911633a",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "f7784973f3d254732d2fe1972d49a4dc78074a9d500da8f3472224bdfa67248d",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "ec587649d80d0bd700ae30bb38954bf4b5ef1fb3e32808dae9d2281978a192c6",
                    "EndpointID": "f7784973f3d254732d2fe1972d49a4dc78074a9d500da8f3472224bdfa67248d",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="进入当前正在运行的容器" tabindex="-1"><a class="header-anchor" href="#进入当前正在运行的容器" aria-hidden="true">#</a> <strong>进入当前正在运行的容器</strong></h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker exec -it 容器id /bin/bash
docker attach 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510210016383.png" alt="image-20220510210016383"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker exec  #进入后开启一个新的终端，可以在里面操作（常用）
docker attach  #进入容器正在执行的终端，不会启动新的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="从容器内拷贝文件到主机上" tabindex="-1"><a class="header-anchor" href="#从容器内拷贝文件到主机上" aria-hidden="true">#</a> <strong>从容器内拷贝文件到主机上</strong></h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker cp 容器id:容器内路径  目的主机路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510210818095.png" alt="image-20220510210818095"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>拷贝是一个手动过程，未来我们使用-v卷的技术，可以实现，自动同步，例如把容器的/home目录和我们本地的/home目录打通
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510211414728.png" alt="image-20220510211414728"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker load --input apachedoris-build-env-1.2.image 加载docker镜像
sudo docker pull ubuntu:16.04 添加docker镜像
docker rm &lt;容器名 or ID> 删除容器
docker rmi 镜像 删除镜像
docker search nginx 查找镜像
docker ps -a 查看所有容器列表
Ctrl+P+Q 退出守护式容器，后台运行
docker attach ubuntu 重新进入守护式容器
docker port web 查看端口转发情况
docker kill 026e 停止一个正在运行的容器
docker restart 026e 重启一个正在运行的容器
docker start 026e 启动一个已停止的容器
docker logs -f &lt;容器名 or ID> 查看容器日志
docker -p 127.0.0.1::3306 映射本机的随机可用端口到容器3306端
sudo service docker start 启动docker
sudo chkconfig docker on 开机启动docker服务
docker start 3cb492a27475 启动镜像，然后才可以下一步进入系统
/etc/init.d/ssh status 查看ssh状态[]
/etc/init.d/ssh start 启动ssh
docker exec -it 3cb492a27475 /bin/bash docker启动后再次进入系统（根据dockerId）
docker run -p 8082:8080 manager8082:v1 新新新docker启动一个镜像容器
docker run -p 3306:3306 -it ubuntu /bin/bash 运行个端口转发的容器
docker run -p 80 --name web -it ubuntu /bin/bash 运行个端口转发的容器,并指定名字
docker run -d -p 127.0.0.1:33301:22 centos6-ssh 后台运行容器
docker cp ./jdk1.8.0_161 9ff55cd68387:/opt/ 复制文件夹或文件从linux到docker
docker cp 96f7f14e99ab:/www /tmp/ 容器文件拷到主机
docker exec -ti -u root 7509371edd48 bash 以root权限运行这个docker容器安装solr时候遇到的
docker commit -m "Java Base Image" 9ff55cd68387 ubuntu16.04:java 把当前容器制作成镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1：</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -d --name nginx01 -p 3344:80 nginx
这个是启动Nginx，并且把本地的3344端口映射到容器的80端口
-d  后台运行
--name  容器别名
-p  设置端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>E:\>docker run -d --name nginx01 -p 3344:80 nginx
515f4e3ae2642f997a64d6d5edff4dcdc6f8815e43a8630c68446d2c9f698f0b

E:\>docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
515f4e3ae264   nginx     "/docker-entrypoint.…"   8 seconds ago   Up 4 seconds   0.0.0.0:3344->80/tcp   nginx01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>E:\>curl localhost:3344
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
&lt;title>Welcome to nginx!&lt;/title>
&lt;style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
&lt;/style>
&lt;/head>
&lt;body>
&lt;h1>Welcome to nginx!&lt;/h1>
&lt;p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.&lt;/p>

&lt;p>For online documentation and support please refer to
&lt;a href="http://nginx.org/">nginx.org&lt;/a>.&lt;br/>
Commercial support is available at
&lt;a href="http://nginx.com/">nginx.com&lt;/a>.&lt;/p>

&lt;p>&lt;em>Thank you for using nginx.&lt;/em>&lt;/p>
&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="端口暴露的概念" tabindex="-1"><a class="header-anchor" href="#端口暴露的概念" aria-hidden="true">#</a> 端口暴露的概念</h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510213500206.png" alt="image-20220510213500206"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>E:\>docker exec -it nginx01 /bin/bash
root@515f4e3ae264:/# cd /etc/nginx/
root@515f4e3ae264:/etc/nginx# ls
conf.d  fastcgi_params  mime.types  modules  nginx.conf  scgi_params  uwsgi_params
root@515f4e3ae264:/etc/nginx#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候就可以直接在浏览器访问：http://127.0.0.1:3344/ 其实就是进入了docker中了</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220510213812742.png" alt="image-20220510213812742"></p>
<p>思考问题：每次改动Nginx配置文件，都要进入容器内部，十分的麻烦，我要是可以在容器外部提供一个映射路径，容器修改文件名，容器内部就可以自动修改了？这就是数据卷的技术。</p>
<h3 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2：</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>安装一个tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510214246943.png" alt="image-20220510214246943"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#下载再启动
docker pull tomcat

#启动运行
docker run -d -p 3355:8080 --name tomcat01 tomcat

#测试访问没有问题

#进入容器后
docker exec -it tomcat01 /bin/bash
#发现问题，
1.linux命令少了
2.webapps里没有内容，但是又webapps.dist里面有内容，可以拷贝进去，因为镜像都是最小的镜像，所以不必要的都删除了。

在容器内执行：cp -r  webapps.dist/* webapps
这时候在浏览器访问：http://127.0.0.1:3355/ 就有页面了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220510220104552.png" alt="image-20220510220104552"></p>
<p>思考问题：我们以后部署项目，如果每次都要进入容器是不是十分麻烦？要是可以在容器外提供一个映射路径，webapps，我们在外部放置项目，就自动同步到内部就好了。</p>
<h3 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3：</h3>
<blockquote>
<p>部署es+kibana</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#es 暴露的端口很多
#es 十分的耗内存
#es 的数据一般需要放置到安全目录挂载
# --net somenetwork ? 网络配置

#启动es
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.2

#启动了 linux就卡住了，docker stats 查看cpu的状态

#es是十分耗内存的，
#查看docker状态：docker stats
#测试一下es是成功了


#然后赶紧关闭，增加内存的限制，修改配置文件-e 环境配置修改
docker run -d --name elasticsearch02 -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511135131235.png" alt="image-20220511135131235"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker stats 90738c8dc625  #可以查看es占用的内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511135515602.png" alt="image-20220511135515602"></p>
<h5 id="使用kibana连接es" tabindex="-1"><a class="header-anchor" href="#使用kibana连接es" aria-hidden="true">#</a> 使用kibana连接ES</h5>
<p>kibana如何连接到ES？不能通过直接localhost:9200，因为容器是互相隔离的，所以就需要先转发到Linux，然后linux请求转发到9200</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511140103734.png" alt="image-20220511140103734"></p>
<h3 id="可视化" tabindex="-1"><a class="header-anchor" href="#可视化" aria-hidden="true">#</a> 可视化：</h3>
<p>portainer（先用这个）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -d -p 8088:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rancher（CI/CD再用）</p>
<h5 id="什么是portainer" tabindex="-1"><a class="header-anchor" href="#什么是portainer" aria-hidden="true">#</a> 什么是portainer?</h5>
<p>Docker图形化界面管理工具，提供一个后台面板供我们操作</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -d -p 8088:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="访问测试-localhost-8088" tabindex="-1"><a class="header-anchor" href="#访问测试-localhost-8088" aria-hidden="true">#</a> 访问测试：localhost:8088</h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511141110316.png" alt="image-20220511141110316"></p>
<p>admin/12345678</p>
<h2 id="_6-docker镜像讲解" tabindex="-1"><a class="header-anchor" href="#_6-docker镜像讲解" aria-hidden="true">#</a> 6.docker镜像讲解：</h2>
<h5 id="镜像是什么" tabindex="-1"><a class="header-anchor" href="#镜像是什么" aria-hidden="true">#</a> 镜像是什么？</h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511142013502.png" alt="image-20220511142013502"></p>
<h5 id="docker镜像加载原理" tabindex="-1"><a class="header-anchor" href="#docker镜像加载原理" aria-hidden="true">#</a> docker镜像加载原理：</h5>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511142118239.png" alt="image-20220511142118239"></p>
<p>联合文件系统就是例如linux的centos属于第一层，然后上面放了docker属于第二层，然后docker里又放了容器属于第三层</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511142353230.png" alt="image-20220511142353230"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511143928020.png" alt="image-20220511143928020"></p>
<h5 id="为什么docker镜像要采用分层的结构呢" tabindex="-1"><a class="header-anchor" href="#为什么docker镜像要采用分层的结构呢" aria-hidden="true">#</a> 为什么docker镜像要采用分层的结构呢？</h5>
<p>最大的好处是资源共享了，比如有多个镜像都从相同的base镜像构建而来，那么宿主机只需要在磁盘上保留一份base镜像，同时内存中也只需要加载一份base镜像，这样就可以为所有的容器服务了，而且镜像的每一层都可以被共享。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511144218985.png" alt="image-20220511144218985"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511144337246.png" alt="image-20220511144337246"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511144629754.png" alt="image-20220511144629754"></p>
<p>这时候假设第三层的文件7是app2.0，而第二层的文件5是app1.0，这时候就是检测到只有文件升级了，所以只有文件7替换了文件5而已，其他层文件都复用的。</p>
<blockquote>
<p>特点</p>
<p>docker镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部，这一层就是我们通常说的容器层，容器之下的都叫镜像层。</p>
</blockquote>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511145313655.png" alt="image-20220511145313655"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511145440313.png" alt="image-20220511145440313"></p>
<h5 id="如何提交一个自己的镜像" tabindex="-1"><a class="header-anchor" href="#如何提交一个自己的镜像" aria-hidden="true">#</a> 如何提交一个自己的镜像？</h5>
<h5 id="commit镜像" tabindex="-1"><a class="header-anchor" href="#commit镜像" aria-hidden="true">#</a> commit镜像：</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker commit 提交容器成为一个新的副本

#命令和Git原理类似
docker commit -m="提交的描述信息" -a="作者" 容器id 目标镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实战测试：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#1.启动一个默认的tomcat

#2.发现这个默认的tomcat是没有webapps的，镜像的原因，官方镜像默认webapps下是没有文件的

#3.自己从webapps.dist中拷贝进去到webapps

#4.将我们操作过的容器通过commit提交为一个镜像，我们以后就使用我们修改过的镜像即可，这就是我们自己的一个修改过的镜像。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511174340222.png" alt="image-20220511174340222"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511174459820.png" alt="image-20220511174459820"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511174808698.png" alt="image-20220511174808698"></p>
<p>你想保存当前容器的状态，就可以通过commit来提交，获得一个镜像。</p>
<h2 id="_7-容器数据卷" tabindex="-1"><a class="header-anchor" href="#_7-容器数据卷" aria-hidden="true">#</a> 7.容器数据卷</h2>
<h5 id="什么是容器数据卷" tabindex="-1"><a class="header-anchor" href="#什么是容器数据卷" aria-hidden="true">#</a> 什么是容器数据卷？</h5>
<p>docker的理念：将我们的应用和环境打包成一个镜像！</p>
<p>数据如果都在容器中，那么容器删除后，数据就会丢失，所以有了新的需求：数据持久化。</p>
<p>例如mysql容器删了，那就是删库跑路了，需求：mysql数据可以存储在本地！</p>
<p>容器之间可以有一个数据共享的技术！</p>
<p>docker容器中产生的数据，同步到本地！</p>
<p>这就是卷技术，目录的挂载，将我们的容器内的目录，挂载到linux上面！</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511175717975.png" alt="image-20220511175717975"></p>
<p>总结一句话：容器的持久化和同步操作！容器间也是可以数据共享的。</p>
<h5 id="使用数据卷-本机和容器数据文件同步" tabindex="-1"><a class="header-anchor" href="#使用数据卷-本机和容器数据文件同步" aria-hidden="true">#</a> 使用数据卷（本机和容器数据文件同步）</h5>
<blockquote>
<p>方式1：直接使用命令来挂载 -v</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -it -v 主机目录:容器内目录
例如：docker run -it -v /home/ceshi:/home centos /bin/bash
然后退出容器后，通过docker inspect 容器id   就可以看到mounts，说明挂载成功，注意挂载路径必须是绝对路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511180440258.png" alt="image-20220511180440258"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511181351323.png" alt="image-20220511181351323"></p>
<h5 id="实战-安装mysql" tabindex="-1"><a class="header-anchor" href="#实战-安装mysql" aria-hidden="true">#</a> 实战：安装MYSQL</h5>
<p>思考：mysql的数据持久化问题，mysql的数据目录都在data目录里</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#获取镜像: docker pull mysql:5.7

#运行容器：需要做数据挂载 #安装启动Mysql 需要配置密码的，这是要注意点
#官方测试：docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#启动我们的
-d 后台运行
-p 端口映射
-v 卷挂载
-e 环境配置
--name 容器名字

docker run -d -p 3310:3306 -v E:\ceshi\mysql\conf:/etc/mysql/conf.d -v E:\ceshi\mysql\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql02 mysql:5.7

#启动成功后，我们在本地使用navicate链接测试一下
如果发现没有启动，也没有报错，这时候去docker logs 容器id来看错误日志

#想进入mysql的话：docker exec -it mysql容器id /bin/bash

#这样就把mysql的数据和配置文件放在了本地，映射到了容器中

#如果删除了容器，本地的mysql数据还在，数据不会丢失
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="具名挂载和匿名挂载" tabindex="-1"><a class="header-anchor" href="#具名挂载和匿名挂载" aria-hidden="true">#</a> 具名挂载和匿名挂载</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 匿名挂载
-v 容器内路径
docker run -d -P --name nginx01  -v /etc/nginx  nginx
上面就是只指定了容器内的，没有指定容器外的

#查看所有的volume的情况
docker volume ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511190541904.png" alt="image-20220511190541904"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 具名挂载：
docker run -d -P --name nginx02  -v juming-nginx:/etc/nginx  nginx

#通过-v 卷名：容器内路径
#查看一下这个卷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511190809131.png" alt="image-20220511190809131"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511190912702.png" alt="image-20220511190912702"></p>
<p>所有的docker容器内的卷，没有制定目录的情况下都是在：/var/lib/docker/volumes/xxx    （linux上）</p>
<p>通过具名挂载，可以方便的找到我们的一个卷，大多数情况在使用的<code v-pre>具名挂载</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 如何确定是具名挂载还是匿名挂载，还是指定的路径挂载
-v 容器内路径 #匿名挂载
-v 卷名：容器内路径  #具名挂载
-v /宿主机路径::容器内路径  #指定路径挂载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>通过 -v 容器内的路径 ro rw改变读写权限
ro  readonly  #只读
rw  readwrite  #可读可写

#一旦设置了容器权限，容器对我们挂载出来的内容就有限定了
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro  nginx

docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw  nginx

#ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内部是无法操作的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-初识dockerfile" tabindex="-1"><a class="header-anchor" href="#_8-初识dockerfile" aria-hidden="true">#</a> 8.初识Dockerfile</h2>
<p>Dockerfile就是来构建docker镜像的构建文件，命令脚本，先体验一下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>通过这个脚本可以生成镜像，镜像是一层一层的，脚本就是一个个的命令，每个命令都是一层。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker build -f  E:\docker-compose\dockerfile1 -t kuangshen/centos .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511222145287.png" alt="image-20220511222145287"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>启动下自己写的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511222521681.png" alt="image-20220511222521681"></p>
<p>里面就有两个数据卷：volume01和volume02</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511223000170.png" alt="image-20220511223000170"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511223053669.png" alt="image-20220511223053669"></p>
<p>测试一下刚才的文件是否同步出去了</p>
<p>这种方式我们未来使用的很多，因为我们通常会构建自己的镜像</p>
<p>假设构建镜像时候没有挂载卷，要手动镜像挂载-v 卷名：容器内路径</p>
<h4 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器" aria-hidden="true">#</a> 数据卷容器</h4>
<p>多个mysql同步数据</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511224151668.png" alt="image-20220511224151668"></p>
<p>启动三个容器，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -it --name docker01  kuangshen/centos   #创建的第一个容器
docker run -it --name docker02 --volumes-from docker01  kuangshen/centos   #第二个直接挂载的第一个容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220511224839525.png" alt="image-20220511224839525"></p>
<p>这样dockerfile的数据卷volumn01和volumn02的数据都是共享的。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511225659561.png" alt="image-20220511225659561"></p>
<p>而如果把容器1删除后，容器2和容器3里面还有这两个卷的数据，数据共享只要有容器在用，数据就不会丢失。所以类似于备份的机制。</p>
<h6 id="常见案例-多个mysql或者多个redis数据共享" tabindex="-1"><a class="header-anchor" href="#常见案例-多个mysql或者多个redis数据共享" aria-hidden="true">#</a> 常见案例：多个Mysql或者多个redis数据共享</h6>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -d -p 3310:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7

docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=123456 --name mysql02 --volumens-from mysql01 mysql:5.7

#这个时候就可以实现两个容器数据同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：</p>
<p>容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。</p>
<p>但是一旦你持久化数据到了本地，本地的数据是不会删除的。</p>
<h4 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> DockerFile</h4>
<p>dockerfile是用来构建docker镜像的文件，命令参数脚本</p>
<p>构建步骤：</p>
<p>1.编写一个dockerfile文件</p>
<p>2.docker build 构建成为一个镜像</p>
<p>3.docker run 运行这个镜像</p>
<p>4.docker  push发布镜像（DockerHub,阿里云镜像仓库）</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511231705029.png" alt="image-20220511231705029"></p>
<p>官方既然可以制作镜像，我们也可以</p>
<h2 id="_9-dockerfile构建过程" tabindex="-1"><a class="header-anchor" href="#_9-dockerfile构建过程" aria-hidden="true">#</a> 9.DockerFile构建过程</h2>
<p>基础知识：</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511232309804.png" alt="image-20220511232309804"></p>
<p>dockerfile是面向开发的，我们以后要发布项目，做镜像，就需要编写dockerfile文件，这个文件十分简单。</p>
<p>Docker镜像逐渐成为了企业交付的标准，必须要掌握。</p>
<p>开发，部署，运维：</p>
<p>DockerFile：构建文件，定义了一切的步骤，源代码</p>
<p>DockerImage：通过DockerFile构建生成的镜像，最终发布和运行的产品。</p>
<p>Docker容器：容器是镜像运行起来提供服务器</p>
<h4 id="dockerfile的指令" tabindex="-1"><a class="header-anchor" href="#dockerfile的指令" aria-hidden="true">#</a> DockerFile的指令：</h4>
<p><img src="@source/docs/theme-reco/img/docker/image-20220511232726086.png" alt="image-20220511232726086"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>FROM  基础镜像，一切从这里开始构建 centos
MAINTAINER 镜像是谁写的，姓名+邮箱
RUN  docker镜像构建的时候需要运行的命令
ADD  步骤：tomcat容器，这个tomcat压缩包，添加内容
WORKDIR 镜像的工作目录，
VOLUME  挂载卷，挂载的目录位置
EXPOSE  保留端口配置
CMD  指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被取代
ENTRYPOINT 指定这个容器启动的时候要运行的命令，可以追加命令
ONBUILD 当构建一个被继承Dockerfile这个时候就会运行ONBUILD的指令，触发指令
COPY 类似ADD，将我们文件拷贝到镜像中
ENV 构建的时候设置环境变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如官方的centos镜像里没有vim，ifconfig命令，我们用着不习惯，所以可以在上面增加一些命令，制作成自己的镜像。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.编写自己的dockerfile文件：

FROM centos
MAINTAINER zmj&lt;wenzmj1992@163.com>

ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "----end----"
CMD /bin/bash

2.通过这个文件构建镜像:
docker build -f dockerfile文件路径 -t  镜像名:[tag]
docker build -f E:\docker-compose\mydockerfile-centos -t mycentos:0.1 .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512104428977.png" alt="image-20220512104428977"></p>
<p>从上面可以看到一进来就进入了我们的工作目录，就是因为我们dockerfile文件里设置，然后vim都可以使用了。启动容器的时候一定要设置版本号0.1,要不就去找最新版本的了。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512104617975.png" alt="image-20220512104617975"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>通过docker history可以看到镜像是如何构建的，构建过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512105000050.png" alt="image-20220512105000050"></p>
<p>我们平时拿到一个镜像，可以研究一下它是怎么做到的。</p>
<blockquote>
<p>CMD  指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被取代
ENTRYPOINT 指定这个容器启动的时候要运行的命令，可以追加命令</p>
</blockquote>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512105523518.png" alt="image-20220512105523518"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512105742448.png" alt="image-20220512105742448"></p>
<p>ENTRYPOINT 的追加命令是直接拼接在我们ENTRYPOINT 命令的后面的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run dd824401d72f  -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512110609158.png" alt="image-20220512110609158"></p>
<h2 id="实战-tomcat镜像" tabindex="-1"><a class="header-anchor" href="#实战-tomcat镜像" aria-hidden="true">#</a> 实战：tomcat镜像</h2>
<p>1.准备镜像文件 tomcat压缩包，jdk的压缩包</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512120223312.png" alt="image-20220512120223312"></p>
<p>2.编写dockerfile文件，官方命名Dockerfile，build会自动寻找这个文件，就不需要-f指定了</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>FROM centos:7
MAINTAINER zmj&lt;wenzmj1992@163.com>

COPY readme.txt /usr/local/readme.txt

ADD jdk-8u11-linux-x64.tar.gz  /usr/local/
ADD apache-tomcat-8.5.61.tar.gz  /usr/local/

RUN yum -y install vim
RUN yum -y install net-tools

ENV MYPATH /usr/local
WORKDIR $MYPATH

ENV JAVA_HOME /usr/local/jdk1.8.0.11
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.pack
ENV CATALINA_HOME /usr/local/apache-tomcat-8.5.61
ENV CATALINA_BASH /usr/local/apache-tomcat-8.5.61
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin

EXPOSE 8080

CMD /usr/local/apache-tomcat-8.5.61/bin/startup.sh &amp;&amp; tail -F /usr/local/apache-tomcat-8.5.61/bin/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.构建镜像：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker build -t diytomcat .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.启动镜像</p>
<p>5.访问测试</p>
<p>6.发布项目（由于做了卷挂载，我们直接在我们本地编写项目就可以发布了）</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512124913709.png" alt="image-20220512124913709"></p>
<p>项目部署成功，可以直接访问ok</p>
<p>以后的项目发布，都是Dockerfile的编写。</p>
<h2 id="_10-发布镜像" tabindex="-1"><a class="header-anchor" href="#_10-发布镜像" aria-hidden="true">#</a> 10.发布镜像</h2>
<h4 id="_1-发布到docker-hub" tabindex="-1"><a class="header-anchor" href="#_1-发布到docker-hub" aria-hidden="true">#</a> 1.发布到Docker Hub</h4>
<p>1.注册账号</p>
<p>2.确定这个账号可以登陆:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker login -u  zmj 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.在我们的服务器上提交自己的镜像:</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512125459123.png" alt="image-20220512125459123"></p>
<p>4.登陆完毕后就可以提交镜像了，docker push</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker push zmj/diytomcat:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提交不上去，增加一个tag</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512130045167.png" alt="image-20220512130045167"></p>
<p>提交的时候，也是按照镜像的层级来进行提交的。</p>
<h4 id="_2-发布到阿里云镜像服务上" tabindex="-1"><a class="header-anchor" href="#_2-发布到阿里云镜像服务上" aria-hidden="true">#</a> 2.发布到阿里云镜像服务上</h4>
<p>1.登录阿里云</p>
<p>2.找到容器镜像服务</p>
<p>3.创建命名空间，一个账号只能创建3个命名空间</p>
<p>4.创建容器镜像</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512130338591.png" alt="image-20220512130338591"></p>
<p>5.浏览仓库信息</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512130451538.png" alt="image-20220512130451538"></p>
<h2 id="_11-小结" tabindex="-1"><a class="header-anchor" href="#_11-小结" aria-hidden="true">#</a> 11.小结</h2>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512130759221.png" alt="image-20220512130759221"></p>
<h2 id="_12-docker网络" tabindex="-1"><a class="header-anchor" href="#_12-docker网络" aria-hidden="true">#</a> 12.docker网络</h2>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512131109556.png" alt="image-20220512131109556"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512140207249.png" alt="image-20220512140207249"></p>
<p>三个网络：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#问题：docker是如何处理容器网络访问的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512140256573.png" alt="image-20220512140256573"></p>
<p>两个容器，一个tomcat，一个mysql，他们如何进行链接</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker exec -it tomcat01 ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512140524285.png" alt="image-20220512140524285"></p>
<p>发现容器启动的时候，会得到一个eth0@if262 ip地址，docker分配的</p>
<p>思考：linux能不能Ping 通容器内部</p>
<p>结论：linux是可以ping通docker容器内部的</p>
<blockquote>
<p>原理：</p>
</blockquote>
<p>192.168.0.1 路由器</p>
<p>192.168.0.3</p>
<p>1.每启动一个docker容器，docker就会给docker容器分配一个ip，我们只要安装了docker，就会有一个网卡docker0</p>
<p>桥接模式，使用的技术是evth-pait技术</p>
<p>启动一个容器后，使用ip  addr可以看到多了一个网卡</p>
<p>2.再启动一个容器测试，发现又多了一对网卡</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 我们发现这个容器带来网卡，都是一对对的，linux上263，容器里是264,263和264是相通的
# evth-pair 就是一对的虚拟设备接口，他们都是成对出现的，一段连着协议，一段彼此相连
# 正因为有这个特性，evth-pair充当一个桥梁，连接各种虚拟网络设备的
# OpenStac ，Docker容器之间的连接，OVS的链接，都是使用evth-pair技术
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.我们测试下tomcat01和tomcat02是否可以ping通</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker exec -it tomcat02 ping 172.18.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结论：发现容器1和容器2是可以ping通的</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512143258435.png" alt="image-20220512143258435"></p>
<p>结论：tomcat01和tomcat02是公用的一个路由器，docker0</p>
<p>所有的容器不指定网络的情况下，都是docker0路由的，docker会给我们的容器分配一个默认的可用ip 255.255.0.1/16 域</p>
<blockquote>
<p>小结：</p>
</blockquote>
<p>docker使用的是linux的桥接</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512144630415.png" alt="image-20220512144630415"></p>
<p>docker中的所有的网络接口都是虚拟的，虚拟的转发效率高（内网传递快）</p>
<p>只要容器删除，对应网桥一对就没了</p>
<blockquote>
<p>思考一个场景：我们编写了一个微服务，database url=ip，项目不重启，数据库Ip换掉了，我们希望可以处理这个问题，可以名字来进行访问容器？</p>
</blockquote>
<h4 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> --link</h4>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512150129201.png" alt="image-20220512150129201"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512150628081.png" alt="image-20220512150628081"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512150643518.png" alt="image-20220512150643518"></p>
<p>--link就是我们在/etc/hosts中配置中增加了一个172.18.0.3 tomcat02 312857784cd4</p>
<p>我们现在玩docker已经不建议使用--link了</p>
<p>自定义网络，不适用docker0</p>
<p>docker0问题：他不支持容器名连接访问</p>
<h4 id="自定义网络" tabindex="-1"><a class="header-anchor" href="#自定义网络" aria-hidden="true">#</a> 自定义网络</h4>
<blockquote>
<p>查看所有的docker网络：</p>
</blockquote>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512151300395.png" alt="image-20220512151300395"></p>
<p><strong>网络模式</strong>：</p>
<p>bridge：桥接 docker默认的，自己创建也是用桥接模式</p>
<p>none：不配置网络</p>
<p>host：和宿主机共享网络</p>
<p>container：容器内网络联通（用得少）</p>
<p><strong>测试</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#我们直接启动的命令：--net bridge 默认用得就是这个
docket run -d -P --name  tomcat01  --net bridge  tomcat
docket run -d -P --name  tomcat01 tomcat

#docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker network  create</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512152215552.png" alt="image-20220512152215552"></p>
<p>我们自己的网络就创建好了：</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512152326410.png" alt="image-20220512152326410"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run  -d -P --name tomcat-net-01 --net mynet tomcat
docker run  -d -P --name tomcat-net-02 --net mynet tomcat
这样就用我们自己的网络启动了两个容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试ping链接，是可以ping通的，就是不使用--link就可以ping 名字了。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512152556741.png" alt="image-20220512152556741"></p>
<p>我们自定义的网络docker都已经帮我们维护了对应的关系，推荐我们平时这样使用网络。</p>
<p>好处：</p>
<p>redis- 搭建集群，不同的集群使用不同的网络，保证集群是安全和健康的</p>
<p>mysql-搭建集群，不同的集群使用不同的网络，保证集群是安全和健康的</p>
<h4 id="网络联通" tabindex="-1"><a class="header-anchor" href="#网络联通" aria-hidden="true">#</a> 网络联通</h4>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512154016385.png" alt="image-20220512154016385"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512155244809.png" alt="image-20220512155244809"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#测试打通 tomcat01 - mynet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512155811915.png" alt="image-20220512155811915"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512155947124.png" alt="image-20220512155947124"></p>
<p>结论：假设要跨网络操作别人，就需要使用docker network connect 连通</p>
<h2 id="实战-部署redis集群" tabindex="-1"><a class="header-anchor" href="#实战-部署redis集群" aria-hidden="true">#</a> 实战：部署Redis集群</h2>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512172919301.png" alt="image-20220512172919301"></p>
<p>6台redis服务器，3个主，3个备用</p>
<p>集群就要建自己的网卡</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 创建网卡：
docker network create redis --subnet 172.38.0.0/16

#通过shell脚本创建6个redis配置：

for port in $(seq 1 6); \
do \
mkdir -p /mydata/redis/node-${port}/conf
touch /mydata/redis/node-${port}/conf/redis.conf
cat &lt;&lt; EOF >/mydata/redis/node-${port}/conf/redis.conf
port 6379 
bind 0.0.0.0
cluster-enabled yes 
cluster-config-file nodes.conf
cluster-node-timeout 5000
cluster-announce-ip 172.38.0.1${port}
cluster-announce-port 6379
cluster-announce-bus-port 16379
appendonly yes
EOF
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512173237008.png" alt="image-20220512173237008"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512173050780.png" alt="image-20220512173050780"></p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512173113623.png" alt="image-20220512173113623"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>E:\ceshi>docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
0cbe90a32c15   bridge    bridge    local
4f640f3a96a0   host      host      local
4e31edcecab6   none      null      local
27cb81f0ed57   redis     bridge    local

E:\ceshi>docker network inspect redis
[
    {
        "Name": "redis",
        "Id": "27cb81f0ed572934f93b57f7777dec0a1c7b3d9abc37b82b1e217a5393b500b2",
        "Created": "2022-05-12T09:33:37.2935804Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.38.0.0/16"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/theme-reco/img/docker/image-20220512173741307.png" alt="image-20220512173741307"></p>
<p>以上六个配置文件建立好了。</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512173851358.png" alt="image-20220512173851358"></p>
<p>以上就是开启了一个redis容器，继续开启6个</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512173931707.png" alt="image-20220512173931707"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>for port in $(seq 1 6); \
do
docker run -p 637${port}:6379 -p 1637${port}:16379 --name redis-${port} \
-v /mydata/redis/node-${port}/data:/data \
-v /mydata/redis/node-${port}/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.1${port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf; \
done

==进入其中一个容器===
docker exec -it redis-1 /bin/sh
==创建集群===
redis-cli --cluster create 172.38.0.11:6379 172.38.0.12:6379 172.38.0.13:6379 172.38.0.14:6379 172.38.0.15:6379 172.38.0.16:6379 --cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker搭建redis集群完成：</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220512175422288.png" alt="image-20220512175422288"></p>
<h2 id="springboot微服务打包成docker镜像" tabindex="-1"><a class="header-anchor" href="#springboot微服务打包成docker镜像" aria-hidden="true">#</a> SpringBoot微服务打包成Docker镜像</h2>
<p>1.构建springboot项目</p>
<p>2.打包应用</p>
<p>3.编写dockerfile</p>
<p>4.构建镜像</p>
<p>5.发布运行</p>
<p>以后我们使用了docker之后，给别人交付的就是一个镜像即可！</p>
<p>如果有很多的镜像，100个镜像，要怎么处理呢？那就涉及到compose，和容器编排。</p>
<h1 id="docker安装es" tabindex="-1"><a class="header-anchor" href="#docker安装es" aria-hidden="true">#</a> docker安装ES</h1>
<h1 id="docker安装kibana" tabindex="-1"><a class="header-anchor" href="#docker安装kibana" aria-hidden="true">#</a> docker安装kibana</h1>
<p>kibana做为一个<a href="https://so.csdn.net/so/search?q=elasticsearch&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">elasticsearch<ExternalLinkIcon/></a>的可视化工具，类似操作mysql的navicat工具，此次采用docker进行安装，具体步骤如下：</p>
<h4 id="下载kibana的镜像" tabindex="-1"><a class="header-anchor" href="#下载kibana的镜像" aria-hidden="true">#</a> 下载kibana的镜像</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>docker pull kibana<span class="token operator">:</span><span class="token number">7.6</span><span class="token number">.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>准备kibana的配置文件(docker ps -a查看)</p>
<h4 id="查看容器对应内网ip" tabindex="-1"><a class="header-anchor" href="#查看容器对应内网ip" aria-hidden="true">#</a> 查看容器对应内网ip</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker inspect es的容器id

如下图:


创建配置文件
mkdir -p /data/elk7/kibana/config/
vi /data/elk7/kibana/config/kibana.yml

配置文件里填入如下内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找到 “IPAddress”: &quot;172.17.0.3&quot; 找出es对应的容器ip地址</p>
<p>可以在本地新建E:/ceshi/data/elk7/kibana/config/kibana.yml文件，然后增加下面的配置。其中172.17.0.4是通过：</p>
<p>docker inspect 90738c8dc625   后面的这个是ES的容器id，查看到容器内部的ip地址：</p>
<p><img src="@source/docs/theme-reco/img/docker/image-20220521121211641.png" alt="image-20220521121211641"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>文件E:/ceshi/data/elk7/kibana/config/kibana.yml 配置：

# 找到 “IPAddress”: "172.17.0.4" 找出es对应的容器ip地址
# Default kibana configuration for docker target
server.name: kibana
server.host: "0"
elasticsearch.hosts: ["http://172.17.0.4:9200"]
xpack.monitoring.ui.container.elasticsearch.enabled: true
#kibana汉化  需要的话打开，不需要的话注释掉
#i18n.locale: "zh-CN"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>linux上：启动kibana
docker run -d --restart=always --log-driver json-file --log-opt max-size=100m --log-opt max-file=2 --name kibana5601 -p 5601:5601 -v /www/docker/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.6.2

window上：自己现在E盘创建文件夹：
docker run -d --restart=always --log-driver json-file --log-opt max-size=100m --log-opt max-file=2 --name kibana5601 -p 5601:5601 -v E:/ceshi/data/elk7/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.6.2

上面这两种都是把kibana的配置映射到了本地的配置，如果不想映射，可以直接进入kibana容器中，修改kibana.yml配置文件。

查看docker日志
docker logs -f kibana5601

测试
http://192.168.11.252:5601/

测试数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h4>
<p>GET /_search # 获取所有数据</p>
<h4 id="放一条数据进去" tabindex="-1"><a class="header-anchor" href="#放一条数据进去" aria-hidden="true">#</a> 放一条数据进去</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>PUT /test/1
{
	"name":"test_name",
	"desc": "test_desc",
	"price":30,
	"tags":["meibai", "fangzhu"]
}

GET /test/1

POST /test/1/_update
{
	"doc":{
		"name" :"test_name_new"
	}
}

DELETE /test/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="docker安装gitlab" tabindex="-1"><a class="header-anchor" href="#docker安装gitlab" aria-hidden="true">#</a> docker安装Gitlab</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker安装gitlab
1、拉取指定版本的gielab-ce

网站：https://hub.docker.com/r/gitlab/gitlab-ce/tags?page=3

[root@localhost ~]# docker pull gitlab/gitlab-ce:13.12.5-ce.0

2、 创建GitLab 的配置 (etc) 、 日志 (log) 、数据 (data) 放到容器之外， 便于日后升级， 因此请先准备这三个目录。

mkdir -p /docker/gitlab/etc
mkdir -p /docker/gitlab/log
mkdir -p /docker/gitlab/data



docker run
--detach
--publish 22:22
--publish 8090:8090 
--publish 443:443 
--hostname 127.0.0.1
-v /docker/gitlab/etc:/etc/gitlab 
-v /docker/gitlab/log:/var/log/gitlab  
-v /docker/gitlab/data:/var/opt/gitlab  
--name gitlab 
--restart always 
--privileged=true gitlab/gitlab-ce:13.12.4-ce.0

参数说明：

--detach: 设置容器后台运行
--hostname: 设置容器的 hostname
--publish: 端口转发规则（80：Http 访问端口，443：Https 访问端口，8888：主机的 ssh 访问端口，22：Docker 容器中 ssh 访问端口）
--name：容器名称
--restart always：每次启动容器就重启GitLab
--v: 共享目录挂载，即 docker 容器内外数据共享（/srv/gitlab/data: 应用程序数据，/srv/gitlab/logs：GitLab 的 log，/srv/gitlab/config：GitLab 的配置文件）
--e：配置 Gitlab 运行的环境变量

遇到的问题：
1、容器名已被占用

docker: Error response from daemon: Conflict. The container name "/gitlab" is already in use by container "3c473e1d13d04f39a0d006a0b18c8c8a4eca06d3a26becffafe08dec336b135d". You have to remove (or rename) that container to be able to reuse that name.

解决方法：
（1）查看容器
docker pa -a
（2）停止容器
docker stop names
（3）移除容器
docker rm names

2、端口被占用
docker: Error response from daemon: driver failed programming external connectivity on endpoint gitlab (1e0bc10265dbb815b068304ab96fbd583c603f46cf8d733d2000a40661547952): Error starting userland proxy: listen tcp4 0.0.0.0:22: bind: address already in use.

解决办法：
（1）查看端口
netstat -tanlp
(2) 杀死进程
kill 占用端口进程的PID
docker start gitlab	#启动容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置docker中gitlab中root账号的密码" tabindex="-1"><a class="header-anchor" href="#重置docker中gitlab中root账号的密码" aria-hidden="true">#</a> 重置docker中gitlab中root账号的密码</h2>
<p><a href="https://www.cnblogs.com/zhang-yawei/p/12692493.html#_labelTop" target="_blank" rel="noopener noreferrer">回到顶部<ExternalLinkIcon/></a></p>
<h3 id="一、进入docker的gitlab容器中" tabindex="-1"><a class="header-anchor" href="#一、进入docker的gitlab容器中" aria-hidden="true">#</a> 一、进入Docker的gitlab容器中</h3>
<p>1、查看所有容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、进入gitlab容器中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker exec -it gitlab（容器名字） bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、修改密码" tabindex="-1"><a class="header-anchor" href="#二、修改密码" aria-hidden="true">#</a> 二、修改密码</h3>
<p>官网也有相关的说法：https://docs.gitlab.com/ce/security/reset_root_password.html</p>
<p>1、要重置您的root密码，请首先使用root特权登录到服务器。使用以下命令启动Ruby on Rails控制台</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>gitlab-rails console -e production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、等待控制台加载完毕，有多种找到用户的方法，您可以搜索电子邮件或用户名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>user = User.where(id: ``1``).first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>user = User.find_by(email: ``'admin@example.com'``)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、现在，您可以更改密码</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>user.password = ``'secret_pass'``user.password_confirmation = ``'secret_pass'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、重要的是，您必须同时更改密码和password_confirmation才能使其正常工作，别忘了保存更改</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>user.save!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如此，保存之后，我们就把root账号的密码改为了：secret_pass。</p>
</div></template>



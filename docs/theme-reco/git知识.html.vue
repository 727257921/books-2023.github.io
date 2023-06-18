<template><div><h1 id="git知识" tabindex="-1"><a class="header-anchor" href="#git知识" aria-hidden="true">#</a> git知识：</h1>
<h3 id="_1-如何在gitlab存储库中删除tag" tabindex="-1"><a class="header-anchor" href="#_1-如何在gitlab存储库中删除tag" aria-hidden="true">#</a> 1.如何在GitLab存储库中删除Tag</h3>
<p>首先说一下作用：Git 中的tag指向一次commit的id，通常用来给开发分支做一个标记，如标记一个版本号。</p>
<p>下面就说一下具体的用法：</p>
<p>1.添加标签： git tag -a version -m &quot;note&quot;
注解：git tag 是打标签的命令，-a 是添加标签，其后要跟新标签号，-m 及后面的字符串是对该标签的注释。</p>
<p>2.提交标签到远程仓库 ： git push origin -tags
注解：就像git push origin master 把本地修改提交到远程仓库一样，-tags可以把本地的打的标签全部提交到远程仓库。
3.删除标签： git tag -d version
注解：-d 表示删除，后面跟要删除的tag名字
4.删除远程标签： git push origin :refs/tags/version
注解：就像git push origin :branch_1 可以删除远程仓库的分支branch_1一样， 冒号前为空表示删除远程仓库的tag。
5.查看标签： git tag 或者 git tag -l
————————————————</p>
<h3 id="删除远程tag" tabindex="-1"><a class="header-anchor" href="#删除远程tag" aria-hidden="true">#</a> 删除远程tag：</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git tag -d tag_name
git push origin :refs/tags/tag_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支：</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git push origin :branch_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="gitlab-gitlab-ci-yaml官方配置文件翻译" tabindex="-1"><a class="header-anchor" href="#gitlab-gitlab-ci-yaml官方配置文件翻译" aria-hidden="true">#</a> <a href="https://my.oschina.net/zhengyijie/blog/3171798" target="_blank" rel="noopener noreferrer">GitLab -- Gitlab CI yaml官方配置文件翻译<ExternalLinkIcon/></a></h1>
<p><a href="https://my.oschina.net/zhengyijie" target="_blank" rel="noopener noreferrer">zhengyijie<ExternalLinkIcon/></a></p>
<p><a href="https://my.oschina.net/zhengyijie?tab=newest&amp;catalogId=121679" target="_blank" rel="noopener noreferrer">工作日志<ExternalLinkIcon/></a></p>
<p>2020/02/24 21:38</p>
<p>阅读数 1.2K</p>
<p><a href="https://www.oschina.net/group/ops" target="_blank" rel="noopener noreferrer"><img src="https://static.oschina.net/uploads/img/202008/31180749_ecsT.png" alt="img"><ExternalLinkIcon/></a></p>
<p>本文被收录于专区</p>
<p><a href="https://www.oschina.net/group/ops" target="_blank" rel="noopener noreferrer">运维<ExternalLinkIcon/></a></p>
<p><a href="https://www.oschina.net/group/ops" target="_blank" rel="noopener noreferrer">进入专区参与更多专题讨论 **<ExternalLinkIcon/></a></p>
<p>此文档用于描述.gitlab-ci.yml语法，.gitlab-ci.yml文件被用来管理项目的runner 任务。
如果想要快速的了解GitLab CI ，可查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fquick_start%2FREADME.html" target="_blank" rel="noopener noreferrer">快速引导<ExternalLinkIcon/></a>。</p>
<h2 id="gitlab-ci-yml" tabindex="-1"><a class="header-anchor" href="#gitlab-ci-yml" aria-hidden="true">#</a> .gitlab-ci.yml</h2>
<p>从7.12版本开始，GitLab CI使用<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYAML" target="_blank" rel="noopener noreferrer">YAML<ExternalLinkIcon/></a>文件(.gitlab-ci.yml)来管理项目配置。该文件存放于项目仓库的根目录，它定义该项目如何构建。</p>
<p>开始构建之前YAML文件定义了一系列带有约束说明的任务。这些任务都是以任务名开始并且至少要包含<code v-pre>script</code>部分：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job1:
  script: "execute-script-for-job1"

job2:
  script: "execute-script-for-job2"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子就是一个最简单且带有两个独立任务的CI配置，每个任务分别执行不同的命令。</p>
<p><code v-pre>script</code>可以直接执行系统命令(例如：./configure;make;make install)或者是直接执行脚本(test.sh)。</p>
<p>任务是由<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Frunners%2FREADME.html" target="_blank" rel="noopener noreferrer">Runners<ExternalLinkIcon/></a>接管并且由服务器中runner执行。更重要的是，每一个任务的执行过程都是独立运行的。</p>
<p>用下面这个例子来说明YAML语法还有更多复杂的任务：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>image: ruby:2.1
services:
  - postgres

before_script:
  - bundle install

after_script:
  - rm secrets

stages:
  - build
  - test
  - deploy

job1:
  stage: build
  script:
    - execute-script-for-job1
  only:
    - master
  tags:
    - docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面列出保留字段，这些保留字段不能被定义为<code v-pre>job</code>名称：</p>
<table>
<thead>
<tr>
<th>关键字</th>
<th>是否必须</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>image</td>
<td>否</td>
<td>用于docker镜像，查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fdocker%2FREADME.html" target="_blank" rel="noopener noreferrer">docker<ExternalLinkIcon/></a>文档</td>
</tr>
<tr>
<td>services</td>
<td>否</td>
<td>用于docker服务，查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fdocker%2FREADME.html" target="_blank" rel="noopener noreferrer">docker<ExternalLinkIcon/></a>文档</td>
</tr>
<tr>
<td>stages</td>
<td>否</td>
<td>定义构建阶段</td>
</tr>
<tr>
<td>types</td>
<td>否</td>
<td><code v-pre>stages</code> 的别名(已废除)</td>
</tr>
<tr>
<td>before_script</td>
<td>否</td>
<td>定义在每个job之前运行的命令</td>
</tr>
<tr>
<td>after_script</td>
<td>否</td>
<td>定义在每个job之后运行的命令</td>
</tr>
<tr>
<td>variable</td>
<td>否</td>
<td>定义构建变量</td>
</tr>
<tr>
<td>cache</td>
<td>否</td>
<td>定义一组文件列表，可在后续运行中使用</td>
</tr>
</tbody>
</table>
<h3 id="image和services" tabindex="-1"><a class="header-anchor" href="#image和services" aria-hidden="true">#</a> image和services</h3>
<p>这两个关键字允许使用一个自定义的Docker镜像和一系列的服务，并且可以用于整个job周期。详细配置文档请查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fdocker%2FREADME.html" target="_blank" rel="noopener noreferrer">a separate document<ExternalLinkIcon/></a>。</p>
<h3 id="before-script" tabindex="-1"><a class="header-anchor" href="#before-script" aria-hidden="true">#</a> before_script</h3>
<p><code v-pre>before_script</code>用来定义所有job之前运行的命令，包括deploy(部署) jobs，但是在修复artifacts之后。它可以是一个数组或者是多行字符串。</p>
<h3 id="after-script" tabindex="-1"><a class="header-anchor" href="#after-script" aria-hidden="true">#</a> after_script</h3>
<blockquote>
<p>GitLab 8.7 开始引入，并且要求Gitlab Runner v1.2</p>
</blockquote>
<p><code v-pre>after_script</code>用来定义所有job之后运行的命令。它必须是一个数组或者是多行字符串</p>
<h3 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> stages</h3>
<p><code v-pre>stages</code>用来定义可以被job调用的stages。stages的规范允许有灵活的多级pipelines。</p>
<p>stages中的元素顺序决定了对应job的执行顺序：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. 相同stage的job可以平行执行。
2. 下一个stage的job会在前一个stage的job成功后开始执行。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下仔细看看这个例子，它包含了3个stage：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>stages:
 - build
 - test
 - deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>首先，所有<code v-pre>build</code>的jobs都是并行执行的。</li>
<li>所有<code v-pre>build</code>的jobs执行成功后，<code v-pre>test</code>的jobs才会开始并行执行。</li>
<li>所有<code v-pre>test</code>的jobs执行成功，<code v-pre>deploy</code>的jobs才会开始并行执行。</li>
<li>所有的<code v-pre>deploy</code>的jobs执行成功，commit才会标记为<code v-pre>success</code></li>
<li>任何一个前置的jobs失败了，commit会标记为<code v-pre>failed</code>并且下一个stages的jobs都不会执行。</li>
</ol>
<p>这有两个特殊的例子值得一提：</p>
<ol>
<li>如果<code v-pre>.gitlab-ci.yml</code>中没有定义<code v-pre>stages</code>，那么job's stages 会默认定义为 <code v-pre>build</code>，<code v-pre>test</code> 和 <code v-pre>deploy</code>。</li>
<li>如果一个job没有指定<code v-pre>stage</code>，那么这个任务会分配到<code v-pre>test</code> stage。</li>
</ol>
<h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> types</h3>
<blockquote>
<p>已废除，将会在10.0中移除。用stages替代。</p>
</blockquote>
<p>与stages同义</p>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> variables</h3>
<blockquote>
<p>GitLab Runner V0.5.0. 开始引入</p>
</blockquote>
<p>GItLab CI 允许在<code v-pre>.gitlab-ci.yml</code>文件中添加变量，并在job环境中起作用。因为这些配置是存储在git仓库中，所以最好是存储项目的非敏感配置，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  DATABASE_URL:"postgres://postgres@postgres/my_database"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些变量可以被后续的命令和脚本使用。服务容器也可以使用YAML中定义的变量，因此我们可以很好的调控服务容器。变量也可以定义成<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23job-variables" target="_blank" rel="noopener noreferrer">job level<ExternalLinkIcon/></a>。</p>
<p>除了用户自定义的变量外，Runner也可以定义它自己的变量。<code v-pre>CI_COMMIT_REG_NAME</code>就是一个很好的例子，它的值表示用于构建项目的分支或tag名称。除了在<code v-pre>.gitlab-ci.yml</code>中设置变量外，还有可以通过GitLab的界面上设置私有变量。</p>
<p><a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">更多关于variables<ExternalLinkIcon/></a>。</p>
<h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3>
<blockquote>
<p>Gitlab Runner v0.7.0 开始引入。</p>
</blockquote>
<p><code v-pre>cache</code>用来指定需要在job之间缓存的文件或目录。只能使用该项目工作空间内的路径。</p>
<p><strong>从GitLab 9.0开始，pipelines和job就默认开启了缓存</strong></p>
<p>如果<code v-pre>cache</code>定义在jobs的作用域之外，那么它就是全局缓存，所有jobs都可以使用该缓存。</p>
<p>缓存<code v-pre>binaries</code>和<code v-pre>.config</code>中的所有文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>rspec:
  script: test
  cache:
    paths:
    - binaries/
    - .config

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存git中没有被跟踪的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>rspec:
  script: test
  cache:
    untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存<code v-pre>binaries</code>下没有被git跟踪的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>rspec:
  script: test
  cache:
    untracked: true
    paths:
    - binaries/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>job中优先级高于全局的。下面这个<code v-pre>rspec</code>job中将只会缓存<code v-pre>binaries/</code>下的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  paths:
  - my/files

rspec:
  script: test
  cache:
    key: rspec
    paths:
    - binaries/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，缓存是在jobs之前进行共享的。如果你不同的jobs缓存不同的文件路径，必须设置不同的<strong>cache:key</strong>，否则缓存内容将被重写。</p>
<p>缓存只是尽力而为之，所以别期望缓存会一直存在。查看更多详细内容，请查阅GitLab Runner。</p>
<h4 id="缓存key" tabindex="-1"><a class="header-anchor" href="#缓存key" aria-hidden="true">#</a> 缓存key</h4>
<blockquote>
<p>GitLab Runner v1.0.0 开始引入。</p>
</blockquote>
<p><code v-pre>key</code>指令允许我们定义缓存的作用域(亲和性)，可以是所有jobs的单个缓存，也可以是每个job，也可以是每个分支或者是任何你认为合适的地方。</p>
<p>它也可以让你很好的调整缓存，允许你设置不同jobs的缓存，甚至是不同分支的缓存。</p>
<p><code v-pre>cache:key</code>可以使用任何的<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">预定义变量<ExternalLinkIcon/></a>。</p>
<p>默认key是默认设置的这个项目缓存，因此默认情况下，每个pipelines和jobs中可以共享一切，从GitLab 9.0开始。</p>
<p><strong>配置示例</strong></p>
<p>缓存每个job：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  key: "$CI_JOB_NAME"
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存每个分支：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  key: "$CI_COMMIT_REF_NAME"
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存每个job且每个分支：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  key: "$CI_JOB_NAME/$CI_COMMIT_REF_NAME"
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存每个分支且每个stage：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  key: "$CI_JOB_STAGE/$CI_COMMIT_REF_NAME"
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用的**Windows Batch(windows批处理)**来跑脚本需要用<code v-pre>%</code>替代<code v-pre>$</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cache:
  key: "%CI_JOB_STAGE%/%CI_COMMIT_REF_NAME%"
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> Jobs</h3>
<p><code v-pre>.gitlab-ci.yml</code>允许指定无限量jobs。每个jobs必须有一个唯一的名字，而且不能是上面提到的关键字。job由一列参数来定义jobs的行为。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job_name:
  script:
    - rake spec
    - coverage
  stage: test
  only:
    - master
  except:
    - develop
  tags:
    - ruby
    - postgres
  allow_failure: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Keyword</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>script</td>
<td>yes</td>
<td>Runner执行的命令或脚本</td>
</tr>
<tr>
<td>image</td>
<td>no</td>
<td>所使用的docker镜像，查阅<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fdocker%2Fusing_docker_images.html%23define-image-and-services-from-gitlab-ciyml" target="_blank" rel="noopener noreferrer">使用docker镜像<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>services</td>
<td>no</td>
<td>所使用的docker服务，查阅<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fdocker%2Fusing_docker_images.html%23define-image-and-services-from-gitlab-ciyml" target="_blank" rel="noopener noreferrer">使用docker镜像<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>stage</td>
<td>no</td>
<td>定义job stage（默认：<code v-pre>test</code>）</td>
</tr>
<tr>
<td>type</td>
<td>no</td>
<td><code v-pre>stage</code>的别名（已弃用）</td>
</tr>
<tr>
<td>variables</td>
<td>no</td>
<td>定义job级别的变量</td>
</tr>
<tr>
<td>only</td>
<td>no</td>
<td>定义一列git分支，并为其创建job</td>
</tr>
<tr>
<td>except</td>
<td>no</td>
<td>定义一列git分支，不创建job</td>
</tr>
<tr>
<td>tags</td>
<td>no</td>
<td>定义一列tags，用来指定选择哪个Runner（同时Runner也要设置tags）</td>
</tr>
<tr>
<td>allow_failure</td>
<td>no</td>
<td>允许job失败。失败的job不影响commit状态</td>
</tr>
<tr>
<td>when</td>
<td>no</td>
<td>定义何时开始job。可以是<code v-pre>on_success</code>，<code v-pre>on_failure</code>，<code v-pre>always</code>或者<code v-pre>manual</code></td>
</tr>
<tr>
<td>dependencies</td>
<td>no</td>
<td>定义job依赖关系，这样他们就可以互相传递artifacts</td>
</tr>
<tr>
<td>cache</td>
<td>no</td>
<td>定义应在后续运行之间缓存的文件列表</td>
</tr>
<tr>
<td>before_script</td>
<td>no</td>
<td>重写一组在作业前执行的命令</td>
</tr>
<tr>
<td>after_script</td>
<td>no</td>
<td>重写一组在作业后执行的命令</td>
</tr>
<tr>
<td>environment</td>
<td>no</td>
<td>定义此作业完成部署的环境名称</td>
</tr>
<tr>
<td>coverage</td>
<td>no</td>
<td>定义给定作业的代码覆盖率设置</td>
</tr>
</tbody>
</table>
<h4 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h4>
<p><code v-pre>script</code>是Runner执行的yaml脚本。举个例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  script: "bundle exec rspec"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该参数也可以用数组包含多个命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  script:
    - uname -a
    - bundle exec rspec

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候，<code v-pre>script</code>命令需要被单引号或者是双引号包裹起来。举个例子，当命令中包含冒号(<code v-pre>:</code>)时，script需要被包在双引号中，这样YAML解析器才可以正确解析为一个字符串而不是一个键值对(key:value)。使用这些特殊字符的时候一定要注意：<code v-pre>:</code>,<code v-pre>{</code>,<code v-pre>}</code>,<code v-pre>[</code>,<code v-pre>]</code>,<code v-pre>,</code>,<code v-pre>&amp;</code>,<code v-pre>*</code>,<code v-pre>#</code>,<code v-pre>?</code>,<code v-pre>|</code>,<code v-pre>-</code>,<code v-pre>&lt;</code>,<code v-pre>&gt;</code>,<code v-pre>=</code>,<code v-pre>!</code>。</p>
<h4 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h4>
<p><code v-pre>stage</code>允许一组jobs进入不同的stages。jobs在相同的<code v-pre>stage</code>时会<code v-pre>parallel</code>同时进行。查阅<code v-pre>stages</code>更多的用法请查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23stages" target="_blank" rel="noopener noreferrer">stages<ExternalLinkIcon/></a>。</p>
<h4 id="only-and-except" tabindex="-1"><a class="header-anchor" href="#only-and-except" aria-hidden="true">#</a> only and except</h4>
<p><code v-pre>only</code>和except是两个参数用分支策略来限制jobs构建：</p>
<ol>
<li><code v-pre>only</code>定义哪些分支和标签的git项目将会被job执行。</li>
<li><code v-pre>except</code>定义哪些分支和标签的git项目将不会被job执行。</li>
</ol>
<p>下面是refs策略的使用规则：</p>
<ul>
<li><code v-pre>only</code>和<code v-pre>except</code>可同时使用。如果<code v-pre>only</code>和<code v-pre>except</code>在一个job配置中同时存在，则以<code v-pre>only</code>为准，跳过<code v-pre>except</code>(从下面示例中得出)。</li>
<li><code v-pre>only</code>和<code v-pre>except</code>可以使用正则表达式。</li>
<li><code v-pre>only</code>和<code v-pre>except</code>允许使用特殊的关键字：<code v-pre>branches</code>，<code v-pre>tags</code>和<code v-pre>triggers</code>。</li>
<li><code v-pre>only</code>和<code v-pre>except</code>允许使用指定仓库地址但不是forks的仓库(查看示例3)。</li>
</ul>
<p>在下面这个例子中，<code v-pre>job</code>将只会运行以<code v-pre>issue-</code>开始的refs(分支)，然而except中设置将被跳过。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  # use regexp
  only:
    - /^issue-.*$/
  # use special keyword
  except:
    - branches

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在下面这个例子中，<code v-pre>job</code>将只会执行有tags的refs，或者通过API触发器明确地请求构建。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  # use special keywords
  only:
    - tags
    - triggers

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仓库路径只能用于父级仓库执行jobs，而不是forks：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  only:
    - branches@gitlab-org/gitlab-ce
  except:
    - master@gitlab-org/gitlab-ce

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子将会为所有的分支执行<code v-pre>job</code>，但master分支除外。</p>
<h4 id="job-variables" tabindex="-1"><a class="header-anchor" href="#job-variables" aria-hidden="true">#</a> Job variables</h4>
<p>在job中是可以使用关键字<code v-pre>variables</code>来定义job变量。它的运行原理跟<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23variables" target="_blank" rel="noopener noreferrer">global-level<ExternalLinkIcon/></a>是一样的，但是它允许设置特殊的job变量。</p>
<p>当设置了job级别的关键字<code v-pre>variables</code>，它会覆盖全局YAML和预定义中的job变量。想要关闭全局变量可以在job中设置一个空数组：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job_name:
  variables: []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Job变量的优先级关系可查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">variables文档<ExternalLinkIcon/></a>说明。</p>
<h4 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h4>
<p><code v-pre>tags</code>可以从允许运行此项目的所有Runners中选择特定的Runners来执行jobs。</p>
<p>在注册Runner的过程中，我们可以设置Runner的标签，比如<code v-pre>ruby</code>，<code v-pre>postgres</code>，<code v-pre>development</code>。</p>
<p><code v-pre>tags</code>可通过tags来指定特殊的Runners来运行jobs：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  tags:
    - ruby
    - postgres

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个示例中，需要确保构建此<code v-pre>job</code>的Runner必须定义了<code v-pre>ruby</code>和<code v-pre>postgres</code>这两个tags。</p>
<h3 id="allow-failure" tabindex="-1"><a class="header-anchor" href="#allow-failure" aria-hidden="true">#</a> allow_failure</h3>
<p><code v-pre>allow_failure</code>可以用于当你想设置一个job失败的之后并不影响后续的CI组件的时候。失败的jobs不会影响到commit状态。</p>
<p>当开启了允许job失败，所有的intents和purposes里的pipeline都是成功/绿色，但是也会有一个&quot;CI build passed with warnings&quot;信息显示在merge request或commit或job page。这被允许失败的作业使用，但是如果失败表示其他地方应采取其他（手动）步骤。</p>
<p>下面的这个例子中，<code v-pre>job1</code>和<code v-pre>job2</code>将会并列进行，如果<code v-pre>job1</code>失败了，它也不会影响进行中的下一个stage，因为这里有设置了<code v-pre>allow_failure: true</code>。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job1:
  stage: test
  script:
  - execute_script_that_will_fail
  allow_failure: true

job2:
  stage: test
  script:
  - execute_script_that_will_succeed

job3:
  stage: deploy
  script:
  - deploy_to_staging

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> when</h4>
<p><code v-pre>when</code> is used to implement jobs that are run in case of failure or despite the failure.</p>
<p><code v-pre>when</code>可以设置以下值：</p>
<ol>
<li><code v-pre>on_success</code> - 只有前面stages的所有工作成功时才执行。 这是默认值。</li>
<li><code v-pre>on_failure</code> - 当前面stages中任意一个jobs失败后执行。</li>
<li><code v-pre>always</code> - 无论前面stages中jobs状态如何都执行。</li>
<li>``manual - 手动执行(GitLab8.10增加)。更多请查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23manual-actions" target="_blank" rel="noopener noreferrer">手动操作<ExternalLinkIcon/></a>。</li>
</ol>
<p>举个例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>stages:
- build
- cleanup_build
- test
- deploy
- cleanup

build_job:
  stage: build
  script:
  - make build

cleanup_build_job:
  stage: cleanup_build
  script:
  - cleanup build when failed
  when: on_failure

test_job:
  stage: test
  script:
  - make test

deploy_job:
  stage: deploy
  script:
  - make deploy
  when: manual

cleanup_job:
  stage: cleanup
  script:
  - cleanup after jobs
  when: always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本说明：</p>
<ol>
<li>只有当<code v-pre>build_job</code>失败的时候才会执行``cleanup_build_job` 。</li>
<li>不管前一个job执行失败还是成功都会执行``cleanup_job` 。</li>
<li>可以从GitLab界面中手动执行<code v-pre>deploy_jobs</code>。</li>
</ol>
<h4 id="manual-actions" tabindex="-1"><a class="header-anchor" href="#manual-actions" aria-hidden="true">#</a> Manual actions</h4>
<blockquote>
<p>GitLab 8.10 开始引入手动执行。GitLab 9.0 开始引入手动停止。GitLab 9.2 开始引入保护手动操作。</p>
</blockquote>
<p>手动操作指令是不自动执行的特殊类型的job；它们必须要人为启动。手动操作指令可以从pipeline，build，environment和deployment视图中启动。</p>
<p>部署到生产环境是手动操作指令的一个很好示例。</p>
<p>了解更多请查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fenvironments.html%23manually-deploying-to-environments" target="_blank" rel="noopener noreferrer">environments documentation<ExternalLinkIcon/></a>。</p>
<p>手动操作指令可以是可选的或阻塞。在定义了手动执行的那个stage中，手动操作指令将会停止pipline中的自动执行指令。当有人通过点击play按钮来执行需要手动执行的job时，可以来恢复pipeline的执行。</p>
<p>当pipeline被阻塞时，即使是pipeline是成功状态也不会merge。被阻塞的pipelines也有一个特殊的状态，叫<code v-pre>manual</code>。</p>
<p>手动操作指令默认是不阻塞的。如果你想要手动操作指令产生阻塞，首先需要在job的配置文件<code v-pre>.gitlab-ci.yml</code>中添加<code v-pre>allow_failure:false</code>。</p>
<p>可选的手动操作指令默认设置<code v-pre>allow_failure:true</code>。</p>
<p>可选动作的状态不影响整个pipeline的状态。</p>
<p>手动操作指令被认为是写操作，所以当前用户触发操作时，必须拥有操作保护分支的权限。换句话说，为了触发一个手动操作指令到pipeline中正在运行的指定分支，当前用户必须拥有推送到这分支的权限。</p>
<h3 id="enviroment" tabindex="-1"><a class="header-anchor" href="#enviroment" aria-hidden="true">#</a> enviroment</h3>
<blockquote>
<p>注意：</p>
<ul>
<li>GitLab 8.9 开始引入。</li>
<li>更多关于environment说明或者示例可以查看 <a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fenvironments.html" target="_blank" rel="noopener noreferrer">documentation about environments<ExternalLinkIcon/></a>。</li>
</ul>
</blockquote>
<p><code v-pre>environment</code>用于定义job部署到特殊的环境中。如果指定了<code v-pre>environment</code>，并且没有该名称下的环境，则会自动创建新环境。</p>
<p>在最简单的格式中，环境关键字可以定义为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>deploy to production:
  stage: deploy
  script: git push production HEAD:master
  environment:
    name: production

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个例子中，<code v-pre>deploy to profuction</code>job将会执行部署到<code v-pre>production</code>环境的操作。</p>
<h4 id="environment-name" tabindex="-1"><a class="header-anchor" href="#environment-name" aria-hidden="true">#</a> environment:name</h4>
<blockquote>
<p>注意</p>
<ul>
<li>GitLab 8.11 开始引入。</li>
<li>在GitLab8.11之前，环境名称定义为<code v-pre>environment:production</code>。现在推荐的做法是定义为<code v-pre>name</code>关键字。</li>
</ul>
</blockquote>
<p><code v-pre>environment</code>名称可以包含：</p>
<ul>
<li>英文字母(<code v-pre>letters</code>)</li>
<li>数字(<code v-pre>digits</code>)</li>
<li>空格(<code v-pre>spaces</code>)</li>
<li><code v-pre>-</code></li>
<li><code v-pre>_</code></li>
<li><code v-pre>/</code></li>
<li><code v-pre>$</code></li>
<li><code v-pre>{</code></li>
<li><code v-pre>}</code></li>
</ul>
<p>常用的名称有<code v-pre>qa</code>,<code v-pre>staging</code>，和<code v-pre>production</code>，当然你可以在你的工作流中使用任意名字。</p>
<p>除了在<code v-pre>environment</code>关键字右边紧跟name定义方法外，也是可以为环境名称单独设定一个值。例如，用<code v-pre>name</code>关键字在<code v-pre>environment</code>下面设置：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>deploy to production:
  stage: deploy
  script: git push production HEAD:master
  environment:
    name: production

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="environment-url" tabindex="-1"><a class="header-anchor" href="#environment-url" aria-hidden="true">#</a> environment:url</h4>
<blockquote>
<p>注意：</p>
<ul>
<li>GitLab 8.11 开始引用。</li>
<li>在GitLab 8.11之前，URL只能在GitLab's UI中添加。现在推荐的定义方法是在<code v-pre>.gitlab-ci.yml</code>。</li>
</ul>
</blockquote>
<p>这是设置一个可选值，它会显示在按钮中，点击它可以带你到设置的URL页面。</p>
<p>在下面这个例子中，如果job都成功完成了，在environment/deployments页面中将会创建一个合并请求的按钮，它将指向<code v-pre>https://prod.example.com</code>。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>deploy to production:
  stage: deploy
  script: git push production HEAD:master
  environment:
    name: production
    url: https://prod.example.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="environment-on-stop" tabindex="-1"><a class="header-anchor" href="#environment-on-stop" aria-hidden="true">#</a> environment:on_stop</h4>
<blockquote>
<p>注意：</p>
<ul>
<li>GitLab 8.13中开始<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgitlab.com%2Fgitlab-org%2Fgitlab-ce%2Fmerge_requests%2F6669" target="_blank" rel="noopener noreferrer">引入<ExternalLinkIcon/></a>。</li>
<li>从GitLab 8.14开始，当在environment中定义了一个stop操作，GitLab将会在相关联的分支本删除时自动触发一个stop操作。</li>
</ul>
</blockquote>
<p>关闭(停止)environments可以通过在<code v-pre>environment</code>下定义关键字<code v-pre>on_stop</code>来实现。它定义了一个不同的job，用于关闭environment。</p>
<p>请查看<code v-pre>environment:action</code>模块中例子。</p>
<h4 id="environment-action" tabindex="-1"><a class="header-anchor" href="#environment-action" aria-hidden="true">#</a> environment:action</h4>
<blockquote>
<p>Gitlab 8.13 开始<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgitlab.com%2Fgitlab-org%2Fgitlab-ce%2Fmerge_requests%2F6669" target="_blank" rel="noopener noreferrer">引入<ExternalLinkIcon/></a>。</p>
</blockquote>
<p><code v-pre>action</code>和<code v-pre>on_stop</code>联合使用，定义在job中，用来关闭environment。</p>
<p>举个例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>review_app:
  stage: deploy
  script: make deploy-app
  environment:
    name: review
    on_stop: stop_review_app

stop_review_app:
  stage: deploy
  script: make delete-app
  when: manual
  environment:
    name: review
    action: stop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子中，我们定义了<code v-pre>review_app</code>job来部署到<code v-pre>review</code>环境中，同时我们也定义了一个新<code v-pre>stop_review_app</code>job在<code v-pre>on_stop</code>中。一旦<code v-pre>review_app</code>job执行完成并且成功，它将触发定义在<code v-pre>when</code>中的<code v-pre>stop_review_app</code>job。在这种情况下，我们设置为<code v-pre>manual</code>，需要通过GitLab's web界面来允许<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23manual-actions" target="_blank" rel="noopener noreferrer">manual action<ExternalLinkIcon/></a>。</p>
<p><code v-pre>stop_review_app</code>job需要定义下面这些关键字：</p>
<ul>
<li><code v-pre>when</code> - <a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23when" target="_blank" rel="noopener noreferrer">说明<ExternalLinkIcon/></a></li>
<li><code v-pre>environment:name</code></li>
<li><code v-pre>environment:action</code></li>
<li><code v-pre>stage</code>需要和<code v-pre>review_app</code>相同，以便分支删除被删除的时候自动执行停止。</li>
</ul>
<h4 id="dynamic-environment" tabindex="-1"><a class="header-anchor" href="#dynamic-environment" aria-hidden="true">#</a> dynamic environment</h4>
<blockquote>
<p>注意：</p>
<ul>
<li>GitLab 8.12开始引入，并且要求GitLab Runner 1.6 。</li>
<li>GitLab 8.15开始引入<code v-pre>$CI_ENVIRONMENT_SLUG</code>。</li>
</ul>
</blockquote>
<p><code v-pre>environment</code>也可以是代表配置项，其中包含<code v-pre>name</code>和<code v-pre>url</code>。这些参数可以使用任何的<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23variables" target="_blank" rel="noopener noreferrer">CI variables<ExternalLinkIcon/></a>(包括预定义、安全变量和<code v-pre>.gitlab-ci.yml</code>中的变量)。</p>
<p>举个例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>deploy as review app:
  stage: deploy
  script: make deploy
  environment:
    name: review/$CI_COMMIT_REF_NAME
    url: https://$CI_ENVIRONMENT_SLUG.example.com/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当<code v-pre>$CI_COMMIT_REF_NAME</code> 被Runner设置为<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">environment variable<ExternalLinkIcon/></a>时，<code v-pre>deply as review app</code>job将会被指定部署到动态创建<code v-pre>revuew/$CI_COMMIT_REF_NAME</code>的环境中。<code v-pre>$CI_ENVIRONMENT_SLUG</code>变量是基于环境名称的，最终组合成完整的URLs。在这种情况下，如果<code v-pre>deploy as review app</code>job是运行在名称为<code v-pre>pow</code>的分支下，那么可以通过URL<code v-pre>https&quot;//review-pw.example.com/</code>来访问这个环境。</p>
<p>这当然意味着托管应用程序的底层服务器已经正确配置。</p>
<p>常见的做法是为分支创建动态环境，并讲它们作为Review Apps。可以通过<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgitlab.com%2Fgitlab-examples%2Freview-apps-nginx%2F" target="_blank" rel="noopener noreferrer">https://gitlab.com/gitlab-exa...<ExternalLinkIcon/></a>上查看使用Review Apps的简单示例。</p>
<h3 id="artifacts" tabindex="-1"><a class="header-anchor" href="#artifacts" aria-hidden="true">#</a> artifacts</h3>
<blockquote>
<p>注意：</p>
<ul>
<li>非Windows平台从GitLab Runner v0.7.0中引入。</li>
<li>Windows平台从GitLab Runner V1.0.0中引入。</li>
<li>在GItLab 9.2之前，在artifacts之后存储缓存。</li>
<li>在GItLab 9.2之后，在artifacts之前存储缓存。</li>
<li>目前并不是所有的executors都支持。</li>
<li>默认情况下，job artifacts 只正对成功的jobs收集。</li>
</ul>
</blockquote>
<p><code v-pre>artifacts</code>用于指定成功后应附加到job的文件和目录的列表。只能使用项目工作间内的文件或目录路径。如果想要在不通的job之间传递artifacts，请查<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23dependencies" target="_blank" rel="noopener noreferrer">阅依赖关系<ExternalLinkIcon/></a>。以下是一些例子：</p>
<p>发送<code v-pre>binaries</code>和<code v-pre>.config</code>中的所有文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>artifacts:
  paths:
  - binaries/
  - .config

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发送所有没有被Git跟踪的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>artifacts:
  untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发送没有被Git跟踪和<code v-pre>binaries</code>中的所有文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>artifacts:
  untracked: true
  paths:
  - binaries/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个空的<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23dependencies" target="_blank" rel="noopener noreferrer">dependencies<ExternalLinkIcon/></a>可以禁用artifact传递：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  stage: build
  script: make build
  dependencies: []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候只需要为标签为releases创建artifacts，以避免将临时构建的artifacts传递到生产服务器中。</p>
<p>只为tags创建artifacts（<code v-pre>default-job</code>将不会创建artifacts）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>default-job:
  script:
    - mvn test -U
  except:
    - tags

release-job:
  script:
    - mvn package -U
  artifacts:
    paths:
    - target/*.war
  only:
    - tags

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在job成功完成后artifacts将会发送到GitLab中，同时也会在GitLab UI中提供下载。</p>
<h4 id="artifacts-name" tabindex="-1"><a class="header-anchor" href="#artifacts-name" aria-hidden="true">#</a> artifacts:name</h4>
<blockquote>
<p>GitLab 8.6 和 Runner v1.1.0 引入。</p>
</blockquote>
<p><code v-pre>name</code>允许定义创建的artifacts存档的名称。这样一来，我们可以为每个存档提供一个唯一的名称，当需要从GitLab中下载是才不会混乱。<code v-pre>artifacts:name</code>可以使用任何的<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">预定义变量<ExternalLinkIcon/></a>(<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fvariables%2FREADME.html" target="_blank" rel="noopener noreferrer">predefined variables<ExternalLinkIcon/></a>)。它的默认名称为<code v-pre>artifacts</code>，当下载是就变成了<code v-pre>artifacts.zip</code>。</p>
<hr>
<p><strong>配置示例</strong></p>
<p>通过使用当前job的名字作为存档名称：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    name: "$CI_JOB_NAME"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用当前分支名称或者是tag作为存到名称，只存档没有被Git跟踪的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
   artifacts:
     name: "$CI_COMMIT_REF_NAME"
     untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用当前job名称和当前分支名称或者是tag作为存档名称，只存档没有被Git跟踪的文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    name: "${CI_JOB_NAME}_${CI_COMMIT_REF_NAME}"
    untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用当前<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23stages" target="_blank" rel="noopener noreferrer">stage<ExternalLinkIcon/></a>和分支名称作为存档名称：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    name: "${CI_JOB_STAGE}_${CI_COMMIT_REF_NAME}"
    untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是使用Windows批处理来运行yaml脚本，需要用<code v-pre>%</code>替换<code v-pre>$</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    name: "%CI_JOB_STAGE%_%CI_COMMIT_REF_NAME%"
    untracked: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="artifacts-when" tabindex="-1"><a class="header-anchor" href="#artifacts-when" aria-hidden="true">#</a> artifacts:when</h4>
<blockquote>
<p>GitLab 8.9和GitLab Runner v1.3.0 引入。</p>
</blockquote>
<p>在job失败的时候，<code v-pre>artifacts:when</code>用来上传artifacts或者忽略失败。</p>
<p><code v-pre>artifacts:when</code>可以设置一下值：</p>
<ol>
<li><code v-pre>on_success</code> - 当job成功的时候上传artifacts。默认值。</li>
<li><code v-pre>on_failure</code> - 当job失败的时候上传artifacts。</li>
<li><code v-pre>always</code> - 不论job失败还是成功都上传artifacts。</li>
</ol>
<hr>
<p><strong>示例配置</strong></p>
<p>只在job失败的时候上传artifacts。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    when: on_failure

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="artifacts-expire-in" tabindex="-1"><a class="header-anchor" href="#artifacts-expire-in" aria-hidden="true">#</a> artifacts:expire_in</h4>
<blockquote>
<p>GitLab 8.9 和 GitLab Runner v1.3.0 引入。</p>
</blockquote>
<p><code v-pre>artifacts:expire_in</code>用于过期后删除邮件上传的artifacts。默认情况下，artifacts都是在GitLab中永久保存。<code v-pre>expire_in</code>允许设置设置artifacts的存储时间，从它们被上传存储到GitLab开始计算。</p>
<p>可以通过job页面的<strong>Keep</strong>来修改有效期。</p>
<p>过期后，artifacts会被通过一个默认每小时执行一次的定时job删除，所以在过期后无法访问artifacts。</p>
<p><code v-pre>expire_in</code>是一个时间区间。下面可设置的值：</p>
<ul>
<li>'3 mins 4 sec'</li>
<li>'2 hrs 20 min'</li>
<li>'2h20min'</li>
<li>'6 mos 1 day'</li>
<li>'47 yrs 6 mos and 4d'</li>
<li>'3 weeks and 2 days'</li>
</ul>
<hr>
<p><strong>示例配置</strong></p>
<p>设置artifacts的有效期为一个星期：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job:
  artifacts:
    expire_in: 1 week

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> dependencies</h3>
<blockquote>
<p>GitLab 8.6 和 GitLab RUnner v1.1.1引入。</p>
</blockquote>
<p>这个功能应该与<code v-pre>artifacts</code>一起使用，并允许定义在不同jobs之间传递artifacts。</p>
<p>注意：所有之前的stages都是默认设置通过。</p>
<p>如果要使用此功能，应该在上下文的job中定义<code v-pre>dependencies</code>，并且列出之前都已经通过的jobs和可下载的artifacts。你只能在当前执行的stages前定义jobs。你如果在当前stages或者后续的stages中定义了jobs，它将会报错。可以通过定义一个空数组是当前job跳过下载artifacts。</p>
<hr>
<p>在接下来的例子中，我们定义两个带artifacts的jobs，<code v-pre>build:osx</code>和<code v-pre>build:linux</code>。当<code v-pre>test:osx</code>开始执行的时候，<code v-pre>build:osx</code>的artifacts就会开始下载并且会在build的stages下执行。同样的会发生在<code v-pre>test:linux</code>，从<code v-pre>build:linux</code>中下载artifacts。</p>
<p>因为stages的优先级关系，<code v-pre>deploy</code>job将会下载之前jobs的所有artifacts：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>build:osx:
  stage: build
  script: make build:osx
  artifacts:
    paths:
    - binaries/

build:linux:
  stage: build
  script: make build:linux
  artifacts:
    paths:
    - binaries/

test:osx:
  stage: test
  script: make test:osx
  dependencies:
  - build:osx

test:linux:
  stage: test
  script: make test:linux
  dependencies:
  - build:linux

deploy:
  stage: deploy
  script: make deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="before-script-和-after-script" tabindex="-1"><a class="header-anchor" href="#before-script-和-after-script" aria-hidden="true">#</a> before_script 和 after_script</h3>
<p>它可能会覆盖全局定义的<code v-pre>before_script</code>和<code v-pre>after_script</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>before_script:
- global before script

job:
  before_script:
  - execute this instead of global before script
  script:
  - my command
  after_script:
  - execute this after my script

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="coverage" tabindex="-1"><a class="header-anchor" href="#coverage" aria-hidden="true">#</a> coverage</h3>
<blockquote>
<p>注意：</p>
<p>GitLab 8.17 <a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgitlab.com%2Fgitlab-org%2Fgitlab-ce%2Fmerge_requests%2F7447" target="_blank" rel="noopener noreferrer">引入<ExternalLinkIcon/></a>。</p>
</blockquote>
<p><code v-pre>coverage</code>允许你配置代码覆盖率将会从该job中提取输出。</p>
<p>在这里正则表达式是唯一有效的值。因此，字符串的前后必须使用<code v-pre>/</code>包含来表明一个正确的正则表达式规则。特殊字符串需要转义。</p>
<p>一个简单的例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>job1:
  coverage: '/Code coverage: \d+\.\d+/'

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-strategy" tabindex="-1"><a class="header-anchor" href="#git-strategy" aria-hidden="true">#</a> Git Strategy</h2>
<blockquote>
<p>GitLab 8.9中以试验性功能引入。将来的版本中可能改变或完全移除。<code v-pre>GIT_STRATEGY</code>要求GitLab Runner v1.7+。</p>
</blockquote>
<p>你可以通过设置<code v-pre>GIT_STRATEGY</code>用于获取最新的代码，可以再全局<code v-pre>variables</code>或者是在单个job的<code v-pre>variables</code>模块中设置。如果没有设置，将从项目中使用默认值。</p>
<p>可以设置的值有：<code v-pre>clone</code>，<code v-pre>fetch</code>，和<code v-pre>none</code>。</p>
<p><code v-pre>clone</code>是最慢的选项。它会从头开始克隆整个仓库，包含每一个job，以确保项目工作区是最原始的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GIT_STRATEGY: clone

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当它重新使用项目工作区是，<code v-pre>fetch</code>是更快（如果不存在则返回克隆）。<code v-pre>git clean</code>用于撤销上一个job做的任何改变，<code v-pre>git fetch</code>用于获取上一个job到现在的的commit。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GIT_STRATEGY: fetch

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>none</code>也是重新使用项目工作区，但是它会跳过所有的Git操作（包括GitLab Runner前的克隆脚本，如果存在的话）。它主要用在操作job的artifacts（例如：<code v-pre>deploy</code>）。Git数据仓库肯定是存在的，但是他肯定不是最新的，所以你只能依赖于从项目工作区的缓存或者是artifacts带来的文件。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GIT_STRATEGY: none

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-checout" tabindex="-1"><a class="header-anchor" href="#git-checout" aria-hidden="true">#</a> Git Checout</h2>
<blockquote>
<p>GitLab Runner 9.3 引入。</p>
</blockquote>
<p>当<code v-pre>GIT_STRATEGY</code>设置为<code v-pre>clone</code>或<code v-pre>fetch</code>时，可以使用<code v-pre>GIT_CHECKOUT</code>变量来指定是否应该运行<code v-pre>git checkout</code>。如果没有指定，它默认为true。就像<code v-pre>GIT_STRATEGY</code>一样，它可以设置在全局<code v-pre>variables</code>或者是单个job的<code v-pre>variables</code>中设置。</p>
<p>如果设置为<code v-pre>false</code>，Runner就会：</p>
<ul>
<li><code v-pre>fetch</code> - 更新仓库并在当前版本中保留工作副本，</li>
<li><code v-pre>clone</code> - 克隆仓库并在默认分支中保留工作副本。</li>
</ul>
<p>Having this setting set to <code v-pre>true</code> will mean that for both <code v-pre>clone</code> and <code v-pre>fetch</code> strategies the Runner will checkout the working copy to a revision related to the CI pipeline:</p>
<p>【如果设置这个为<code v-pre>true</code>将意味着<code v-pre>clone</code>和<code v-pre>fetch</code>策略都会让Runner执行项目工作区更新到最新：】</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GIT_STRATEGY: clone
  GIT_CHECKOUT: false
script:
  - git checkout master
  - git merge $CI_BUILD_REF_NAME

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-submodule-strategy" tabindex="-1"><a class="header-anchor" href="#git-submodule-strategy" aria-hidden="true">#</a> Git Submodule Strategy</h2>
<blockquote>
<p>需要GitLab Runner v1.10+。</p>
</blockquote>
<p><code v-pre>GIT_SUBMODULE_STRATEGY</code>变量用于在构建之前拉取代码时，Git子模块是否或者如何被引入。就像<code v-pre>GIT_STRATEGY</code>一样，它可在全局<code v-pre>variables</code>或者是单个job的<code v-pre>variables</code>模块中设置。</p>
<p>它的可用值有：<code v-pre>none</code>，<code v-pre>normal</code>和<code v-pre>recursive</code>：</p>
<ul>
<li><code v-pre>none</code>意味着在拉取项目代码时，子模块将不会被引入。这个是默认值，与v1.10之前相同的。</li>
<li><code v-pre>normal</code>意味着在只有顶级子模块会被引入。它相当于：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git submodule sync
git submodule update --init

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>recursive</code>意味着所有的子模块（包括子模块的子模块）都会被引入，他相当于：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git submodule sync --recursive
git submodule update --init --recursive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：如果想要此功能正常工作，子模块必须配置（在<code v-pre>.gitmodules</code>）下面中任意一个：</p>
<ul>
<li>可访问的公共仓库http(s)地址，</li>
<li>在同一个GitLab服务器上有一个可访问到另外的仓库的真实地址。更多查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fgit_submodules.html" target="_blank" rel="noopener noreferrer">Git 子模块文档<ExternalLinkIcon/></a>。</li>
</ul>
<h2 id="job-stages-attempts" tabindex="-1"><a class="header-anchor" href="#job-stages-attempts" aria-hidden="true">#</a> Job stages attempts</h2>
<blockquote>
<p>GitLab引入，要求GItLab Runner v1.9+。</p>
</blockquote>
<p>正在执行的job将会按照你设置尝试次数依次执行下面的stages：</p>
<table>
<thead>
<tr>
<th>变量</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GET_SOURCES_ATTEMPTS</strong></td>
<td>获取job源的尝试次数</td>
</tr>
<tr>
<td><strong>ARTIFACT_DOWNLOAD_ATTEMPTS</strong></td>
<td>下载artifacts的尝试次数</td>
</tr>
<tr>
<td><strong>RESTORE_CACHE_ATTEMPTS</strong></td>
<td>重建缓存的尝试次数</td>
</tr>
</tbody>
</table>
<p>默认是一次尝试。</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GET_SOURCES_ATTEMPTS: 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在全局<code v-pre>variables</code>模块中设置，也可以在单个job的<code v-pre>variables</code>模块中设置。</p>
<h2 id="shallow-cloning" tabindex="-1"><a class="header-anchor" href="#shallow-cloning" aria-hidden="true">#</a> Shallow cloning</h2>
<blockquote>
<p>GitLab 8.9 以实验性功能引入。在将来的版本中有可能改变或者完全移除。</p>
</blockquote>
<p>你可以通过<code v-pre>GIT_DEPTH</code>来指定抓取或克隆的深度。它可浅层的克隆仓库，这可以显著加速具有大量提交和旧的大型二进制文件的仓库的克隆。这个设置的值会传递给<code v-pre>git fetch</code>和<code v-pre>git clone</code>。</p>
<blockquote>
<p>注意：如果设置depth=1，并且有一个jobs队列或者是重试jobs，则jobs可能会失败。</p>
</blockquote>
<p>由于Git抓取和克隆是基于一个REF，例如分支的名称，所以Runner不能指定克隆一个commit SHA。如果队列中有多个jobs，或者您正在重试旧的job，则需要测试的提交应该在克隆的Git历史记录中存在。设置<code v-pre>GIT_DEPTH</code>太小的值可能会导致无法运行哪些旧的commits。在job日志中可以查看<code v-pre>unresolved reference</code>。你应该考虑设置<code v-pre>GIT_DEPTH</code>为一个更大的值。</p>
<p>当<code v-pre>GIT_DEPTH</code>只设置了部分存在的记录时，哪些依赖于<code v-pre>git describe</code>的jobs也许不能正确的工作。</p>
<p>只抓取或克隆最后的3次commits：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>variables:
  GIT_DEPTH: "3"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hidden-keys" tabindex="-1"><a class="header-anchor" href="#hidden-keys" aria-hidden="true">#</a> Hidden keys</h2>
<blockquote>
<p>GitLab 8.6 和 GitLab Runner v1.1.1引入。</p>
</blockquote>
<p>Key 是以<code v-pre>.</code>开始的，GitLab CI 将不会处理它。你可以使用这个功能来忽略jobs，或者用<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23special-yaml-features" target="_blank" rel="noopener noreferrer">Special YAML features <ExternalLinkIcon/></a>转换隐藏键为模版。</p>
<p>在下面这个例子中，<code v-pre>.key_name</code>将会被忽略：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.key_name:
  script:
    - rake spec

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hidden keys 可以是像普通CI jobs一样的哈希值，但你也可以利用special YAMLfeatures来使用不同类型的结构。</p>
<h2 id="special-yaml-features" tabindex="-1"><a class="header-anchor" href="#special-yaml-features" aria-hidden="true">#</a> Special YAML features</h2>
<p>使用special YAML features 像anchors(<code v-pre>&amp;</code>)，aliases(<code v-pre>*</code>)和map merging(<code v-pre>&lt;&lt;</code>)，这将使您可以大大降低<code v-pre>.gitlab-ci.yml</code>的复杂性。</p>
<p>查看更多<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Flearnxinyminutes.com%2Fdocs%2Fyaml%2F" target="_blank" rel="noopener noreferrer">YAML features<ExternalLinkIcon/></a>。</p>
<h3 id="anchors" tabindex="-1"><a class="header-anchor" href="#anchors" aria-hidden="true">#</a> Anchors</h3>
<blockquote>
<p>GitLab 8.6 和 GitLab Runner v1.1.1引入。</p>
</blockquote>
<p>YAML有个方便的功能称为&quot;锚&quot;,它可以让你轻松的在文档中复制内容。Anchors可用于复制/继承属性，并且是使用<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fyaml%2FREADME.html%23hidden-keys" target="_blank" rel="noopener noreferrer">hidden keys<ExternalLinkIcon/></a>来提供模版的完美示例。</p>
<p>下面这个例子使用了anchors和map merging。它将会创建两个jobs，<code v-pre>test1</code>和<code v-pre>test2</code>，该jobs将集成<code v-pre>.job_template</code>的参数，每个job都自定义脚本：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.job_template: &amp;job_definition  # Hidden key that defines an anchor named 'job_definition'
  image: ruby:2.1
  services:
    - postgres
    - redis

test1:
  &lt;&lt;: *job_definition           # Merge the contents of the 'job_definition' alias
  script:
    - test1 project

test2:
  &lt;&lt;: *job_definition           # Merge the contents of the 'job_definition' alias
  script:
    - test2 project

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&amp;</code>在anchor的名称(<code v-pre>job_definition</code>)前设置，<code v-pre>&lt;&lt;</code>表示&quot;merge the given hash into the current one&quot;，<code v-pre>*</code>包括命名的anchor(<code v-pre>job_definition</code>)。扩展版本如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.job_template:
  image: ruby:2.1
  services:
    - postgres
    - redis

test1:
  image: ruby:2.1
  services:
    - postgres
    - redis
  script:
    - test1 project

test2:
  image: ruby:2.1
  services:
    - postgres
    - redis
  script:
    - test2 project

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们来看另外一个例子。这一次我们将用anchors来定义两个服务。两个服务会创建两个job，<code v-pre>test:postgres</code>和<code v-pre>test:mysql</code>，他们会在<code v-pre>.job_template</code>中共享定义的<code v-pre>script</code>指令，以及分别在<code v-pre>.postgres_services</code>和<code v-pre>.mysql_services</code>中定义的<code v-pre>service</code>指令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.job_template: &amp;job_definition
  script:
    - test project

.postgres_services:
  services: &amp;postgres_definition
    - postgres
    - ruby

.mysql_services:
  services: &amp;mysql_definition
    - mysql
    - ruby

test:postgres:
  &lt;&lt;: *job_definition
  services: *postgres_definition

test:mysql:
  &lt;&lt;: *job_definition
  services: *mysql_definition

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展版本如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.job_template:
  script:
    - test project

.postgres_services:
  services:
    - postgres
    - ruby

.mysql_services:
  services:
    - mysql
    - ruby

test:postgres:
  script:
    - test project
  services:
    - postgres
    - ruby

test:mysql:
  script:
    - test project
  services:
    - mysql
    - ruby

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到hidden keys被方便的用作模版。</p>
<h2 id="triggers" tabindex="-1"><a class="header-anchor" href="#triggers" aria-hidden="true">#</a> Triggers</h2>
<p>Triggers 可用于强制使用API调用重建特定分支，tag或commits。</p>
<p><a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Ftriggers%2FREADME.html" target="_blank" rel="noopener noreferrer">在triggers文档中查看更多。<ExternalLinkIcon/></a></p>
<h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages</h2>
<p>pages是一个特殊的job，用于将静态的内容上传到GitLab，可用于为您的网站提供服务。它有特殊的语法，因此必须满足以下两个要求：</p>
<ol>
<li>任何静态内容必须放在<code v-pre>public/</code>目录下</li>
<li><code v-pre>artifacts</code>必须定义在<code v-pre>public/</code>目录下</li>
</ol>
<p>下面的这个例子是将所有文件从项目根目录移动到<code v-pre>public/</code>目录。<code v-pre>.public</code>工作流是<code v-pre>cp</code>，并且它不会循环复制<code v-pre>public/</code>本身。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pages:
  stage: deploy
  script:
  - mkdir .public
  - cp -r * .public
  - mv .public public
  artifacts:
    paths:
    - public
  only:
  - master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多内容请查看<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fuser%2Fproject%2Fpages%2Findex.html" target="_blank" rel="noopener noreferrer">GitLab Pages用户文档<ExternalLinkIcon/></a>。</p>
<h2 id="validate-the-gitlab-ci-yml" tabindex="-1"><a class="header-anchor" href="#validate-the-gitlab-ci-yml" aria-hidden="true">#</a> Validate the .gitlab-ci.yml</h2>
<p>GitLab CI的每个实例都有一个名为Lint的嵌入式调试工具。 你可以在gitlab实例的<code v-pre>/ci/lint</code>下找到该链接。</p>
<h2 id="skipping-jobs" tabindex="-1"><a class="header-anchor" href="#skipping-jobs" aria-hidden="true">#</a> Skipping jobs</h2>
<p>如果你的commit信息中包含<code v-pre>[ci skip]</code>或者<code v-pre>[skip ci]</code>，不论大小写，那么这个commit将会创建但是jobs也会跳过。</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<p>访问<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fci%2Fexamples%2FREADME.html" target="_blank" rel="noopener noreferrer">examples README<ExternalLinkIcon/></a>来查看各种语言的GitLab CI用法示例。</p>
<h1 id="_3-git合并冲突后如何取消冲突" tabindex="-1"><a class="header-anchor" href="#_3-git合并冲突后如何取消冲突" aria-hidden="true">#</a> 3.git合并冲突后如何取消冲突</h1>
<p>其他分支merge到当前分支，发生了冲突，但是这个时候，又想切换分支的时候，就会出现问题。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案：</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-	git  merge --abort   #丢弃当前合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-git取消合并" tabindex="-1"><a class="header-anchor" href="#_4-git取消合并" aria-hidden="true">#</a> 4.git取消合并</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git merge --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5-git撤销" tabindex="-1"><a class="header-anchor" href="#_5-git撤销" aria-hidden="true">#</a> 5.git撤销</h1>
<p>git reset</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- git reset --soft: 将分支回退到指定提交，工作区维持现状不变,暂存区会在现有基础上增加该commit之后的提交。
- git reset --mixed: （默认操作）将分支回退到指定提交，暂存区也被同步为该指定提交，工作区保持不变。
- git reset --hard: 将分支回退到指定分支，暂存区和工作区都会被同步为该指定的提交。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>git reset后的三个参数回退程度是依次递进。soft最轻微，它不会重置当前工作区和暂存区，只会将回退版本后续的提交加到暂存区。</li>
<li>mixed会改变暂存区，使它和回退版本同步。</li>
<li>hard则会重置工作区和暂存区，使它和回退版本一致。</li>
</ol>
<h2 id="git-取消本地修改" tabindex="-1"><a class="header-anchor" href="#git-取消本地修改" aria-hidden="true">#</a> git 取消本地修改<a href="https://www.cnblogs.com/yangsg/p/13267246.html#766916555" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git checkout .   //当前分支的修改会重置 谨慎使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="处理合并冲突" tabindex="-1"><a class="header-anchor" href="#处理合并冲突" aria-hidden="true">#</a> 处理合并冲突<a href="https://www.cnblogs.com/yangsg/p/13267246.html#2661636680" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>首先要冷静，可以先看哪些文件冲突，是不是自己导致的，若自己导致的，可以使用 git merge --abort取消合并，</p>
<p>如果自己提交的代码，发现有问题或者影响同事代码了，可以使用 git log 查看日志，</p>
<p><img src="https://img2020.cnblogs.com/blog/1566383/202007/1566383-20200708152746902-786431789.png" alt="img"></p>
<p>然后回退版本 git reset --hard ID  比如： git reset --hard 3a169ff</p>
<h2 id="二、git-revert-的用法" tabindex="-1"><a class="header-anchor" href="#二、git-revert-的用法" aria-hidden="true">#</a> 二、git revert 的用法<a href="https://www.cnblogs.com/yangsg/p/13267246.html#3408159460" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>git revert 的作用是通过创建一个新的版本，这个版本的内容与我们要回退到的目标版本一样，但是HEAD指针是指向这个新生成的版本，而不是目标版本。
如果我们想恢复之前的某一版本（该版本不是merge类型），但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。
我们使用<code v-pre>git revert HEAD</code>命令就可以创建一个新的版本，此版本与上一个版本相同。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cat abc.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>git revert HEAD</code> ：撤销前一次 commit</li>
<li><code v-pre>git revert HEAD^</code> ：撤销前前一次 commit</li>
<li><code v-pre>git revert commit + (commit id)</code>： 撤销指定的版本，撤销也会作为一次提交进行保存。</li>
</ul>
<h2 id="git-更新本地分支-实用" tabindex="-1"><a class="header-anchor" href="#git-更新本地分支-实用" aria-hidden="true">#</a> git 更新本地分支（实用)<a href="https://www.cnblogs.com/yangsg/p/13267246.html#3871181497" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git branch -a   //查看远程分支
git remote update origin --prune  //更新分支
git checkout test  //切换分支
//如果这样的方式没起作用
git checkout -b test origin/test  //可以使用这种方法 在本地创建一个和远程分支同样名字的分支 并切换到这个分支
git pull origin test  //然后更新下这个分支的代码 ok了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结<a href="https://www.cnblogs.com/yangsg/p/13267246.html#3703850216" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<ul>
<li><code v-pre>git reset --soft HEAD^</code>：将最近一次提交节点的提交记录回退到暂存区</li>
<li><code v-pre>git reset --mixed HEAD^</code>：将最近一次提交节点的提交记录回退到工作区</li>
<li><code v-pre>git reset --hard HEAD^</code>：将最近一次提交节点的提交记录全部清除</li>
<li>git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。</li>
</ul>
<h1 id="git-拉取远程分支到本地" tabindex="-1"><a class="header-anchor" href="#git-拉取远程分支到本地" aria-hidden="true">#</a> git 拉取远程分支到本地</h1>
<p>步骤：</p>
<p>1、新建一个空文件，文件名为hhhh</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133244761-1830701901.png" alt="img"></p>
<p>2、初始化</p>
<p>​    git init</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133316482-525669302.png" alt="img"></p>
<p>3、自己要与origin master建立连接（下划线为远程仓库链接）</p>
<p>git remote add origin git@github.com:XXXX/nothing2.git</p>
<p>远程仓库链接在github这里，如下图红色框内所示的链接：</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133503232-398366467.png" alt="img"></p>
<p>输入命令：</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133536559-396231009.png" alt="img"></p>
<p>4、把远程分支拉到本地</p>
<p>git fetch origin dev（dev为远程仓库的分支名）</p>
<p>下图红色勾选的为可使用的分支名</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133609018-2076107262.png" alt="img"></p>
<p>下面拉取远程的develop分支，命令：</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133630615-1828121818.png" alt="img"></p>
<p>5、在本地创建分支dev并切换到该分支</p>
<p>git checkout -b dev(本地分支名称) origin/dev(远程分支名称)</p>
<p>命令：</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133702237-1027692029.png" alt="img"></p>
<p>6、把某个分支上的内容都拉取到本地</p>
<p>git pull origin dev(远程分支名称)</p>
<p>命令：</p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133744008-83702072.png" alt="img"></p>
<p>最后，回到本地文件夹hhhh查看，已完成拉取远程某个分支到本地啦！<img src="https://static-blog.csdn.net/xheditor/xheditor_emot/default/proud.gif" alt="得意"></p>
<p><img src="https://img2018.cnblogs.com/blog/1196687/201811/1196687-20181114133820902-399468716.png" alt="img"></p>
<h1 id="_6-卸载gitlab" tabindex="-1"><a class="header-anchor" href="#_6-卸载gitlab" aria-hidden="true">#</a> 6.卸载gitlab</h1>
<p>完全卸载删除gitlab</p>
<p>1、停止gitlab</p>
<table>
<thead>
<tr>
<th>1</th>
<th>gitlab-ctl stop</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>2、卸载gitlab（注意这里写的是gitlab-ce）</p>
<table>
<thead>
<tr>
<th>1</th>
<th>rpm -e gitlab-ce</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>3、查看gitlab进程</p>
<table>
<thead>
<tr>
<th>1</th>
<th>ps aux | grep gitlab</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><img src="http://blog.whsir.com/wp-content/uploads/2017/05/gitlab.png" alt="img"></p>
<p>4、杀掉第一个进程（就是带有好多.............的进程）</p>
<table>
<thead>
<tr>
<th>1</th>
<th>kill -9 18777</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>杀掉后，在ps aux | grep gitlab确认一遍，还有没有gitlab的进程</p>
<p>5、删除所有包含gitlab文件</p>
<table>
<thead>
<tr>
<th>1</th>
<th>find / -name gitlab | xargs rm -rf</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h1 id="_7-git拉取远程分支并创建本地分支" tabindex="-1"><a class="header-anchor" href="#_7-git拉取远程分支并创建本地分支" aria-hidden="true">#</a> 7.git拉取远程分支并创建本地分支</h1>
<h3 id="一、查看远程分支" tabindex="-1"><a class="header-anchor" href="#一、查看远程分支" aria-hidden="true">#</a> 一、查看远程分支</h3>
<p>使用如下git命令查看所有远程分支：</p>
<p><code v-pre>git branch -r</code></p>
<p>查看远程和本地所有分支：
<code v-pre>git branch -a</code></p>
<p>查看本地分支：
<code v-pre>git branch</code>
在输出结果中，前面带<code v-pre>*</code> 的是当前分支。</p>
<h3 id="二、拉取远程分支并创建本地分支" tabindex="-1"><a class="header-anchor" href="#二、拉取远程分支并创建本地分支" aria-hidden="true">#</a> 二、拉取远程分支并创建本地分支</h3>
<h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h4>
<p>使用如下命令：</p>
<p><code v-pre>git checkout -b 本地分支名x origin/远程分支名x</code></p>
<p>使用该方式会在本地新建分支x，并自动切换到该本地分支x。</p>
<p>采用此种方法建立的本地分支会和远程分支建立映射关系。</p>
<h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h4>
<p>使用如下命令：</p>
<p><code v-pre>git fetch origin 远程分支名x:本地分支名x</code></p>
<p>使用该方式会在本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout。</p>
<p>采用此种方法建立的本地分支不会和远程分支建立映射关系。</p>
<h3 id="三、本地分支和远程分支建立映射关系的作用" tabindex="-1"><a class="header-anchor" href="#三、本地分支和远程分支建立映射关系的作用" aria-hidden="true">#</a> 三、本地分支和远程分支建立映射关系的作用</h3>
<h4 id="建立本地分支与远程分支的映射关系-或者为跟踪关系track-。" tabindex="-1"><a class="header-anchor" href="#建立本地分支与远程分支的映射关系-或者为跟踪关系track-。" aria-hidden="true">#</a> 建立本地分支与远程分支的映射关系（或者为跟踪关系track）。</h4>
<p>这样使用git pull或者git push时就不必每次都要指定从远程的哪个分支拉取合并和推送到远程的哪个分支了。
<code v-pre>git branch -vv</code></p>
<p>上面的本地分支和远程分支都有映射关系，如果没有，就需要手动建立：
<code v-pre>git branch -u origin/分支名</code>，
或者
<code v-pre>git branch --set-upstream-to origin/分支名</code>
<code v-pre>origin</code> 为git地址的标志，可以建立当前分支与远程分支的映射关系。</p>
<h4 id="撤销本地分支与远程分支的映射关系" tabindex="-1"><a class="header-anchor" href="#撤销本地分支与远程分支的映射关系" aria-hidden="true">#</a> 撤销本地分支与远程分支的映射关系</h4>
<p><code v-pre>git branch --unset-upstream</code>
之后可以再次用<code v-pre>git branch -vv</code> 查看本地分支和远程分支映射关系</p>
<h4 id="问题思考-本地分支只能跟踪远程的同名分支吗" tabindex="-1"><a class="header-anchor" href="#问题思考-本地分支只能跟踪远程的同名分支吗" aria-hidden="true">#</a> 问题思考：本地分支只能跟踪远程的同名分支吗？</h4>
<p>答案是否定的，本地分支可以与远程不同名的分支建立映射关系
操作和之前的一样，只是可以指定和本地分支名不同的远程分支名，然后使用<code v-pre>git branch -vv</code> 查看映射关系，可以发现建立映射成功。</p>
<h3 id="git修改删除命令" tabindex="-1"><a class="header-anchor" href="#git修改删除命令" aria-hidden="true">#</a> git修改删除命令</h3>
<h3 id="一、git-diff-head-readme-txt可以查看工作区和版本库里面最新版本的区别" tabindex="-1"><a class="header-anchor" href="#一、git-diff-head-readme-txt可以查看工作区和版本库里面最新版本的区别" aria-hidden="true">#</a> 一、git diff HEAD -- readme.txt可以查看工作区和版本库里面最新版本的区别</h3>
<h3 id="二、撤销修改" tabindex="-1"><a class="header-anchor" href="#二、撤销修改" aria-hidden="true">#</a> 二、撤销修改</h3>
<p>1.当改乱了工作区，git checkout -- file可以丢弃工作区的修改
2.当改乱了工作区而且提交到了暂存区，分两步
①git reset head file丢弃了暂存区修改
②git checkout -- file丢弃工作区的修改
3.当已经提交到版本库，使用git reset head^退回上一版本</p>
<h3 id="三、删除" tabindex="-1"><a class="header-anchor" href="#三、删除" aria-hidden="true">#</a> 三、删除</h3>
<p>1.git rm file删除工作区和暂存区文件 加–cached参数只删除暂存区</p>
<ol start="2">
<li>git checkout -- file用于将本地工作区的内容和当前最新版本库保持同步
————————————————</li>
</ol>
<h3 id="git-restore命令是撤销的意思-也就是把文件从缓存区撤销-回到未被追踪的状态。" tabindex="-1"><a class="header-anchor" href="#git-restore命令是撤销的意思-也就是把文件从缓存区撤销-回到未被追踪的状态。" aria-hidden="true">#</a> git restore命令是撤销的意思，也就是把文件从缓存区撤销，回到未被追踪的状态。</h3>
<p>该命令有git restore <file>和git restore --staged <file>两种常用的用法。</p>
<h3 id="本地切换分支-git-checkout-test" tabindex="-1"><a class="header-anchor" href="#本地切换分支-git-checkout-test" aria-hidden="true">#</a> 本地切换分支：  git  checkout test</h3>
<h3 id="本地新建分支并切换到新分支-git-checkout-b-test2" tabindex="-1"><a class="header-anchor" href="#本地新建分支并切换到新分支-git-checkout-b-test2" aria-hidden="true">#</a> 本地新建分支并切换到新分支：git checkout -b test2</h3>
<h3 id="本地新建的分支推到远程并且在远程新建分支-git-push-origin-test2" tabindex="-1"><a class="header-anchor" href="#本地新建的分支推到远程并且在远程新建分支-git-push-origin-test2" aria-hidden="true">#</a> 本地新建的分支推到远程并且在远程新建分支：git push origin test2</h3>
<h3 id="本地查看分支-git-branch" tabindex="-1"><a class="header-anchor" href="#本地查看分支-git-branch" aria-hidden="true">#</a> 本地查看分支：git branch</h3>
<h3 id="本地查看远程所有的分支-git-branch-r" tabindex="-1"><a class="header-anchor" href="#本地查看远程所有的分支-git-branch-r" aria-hidden="true">#</a> 本地查看远程所有的分支：git branch -r</h3>
<h3 id="本地查看本地的所有分支和远程的所有分支-git-branch-all" tabindex="-1"><a class="header-anchor" href="#本地查看本地的所有分支和远程的所有分支-git-branch-all" aria-hidden="true">#</a> 本地查看本地的所有分支和远程的所有分支：git branch --all</h3>
</div></template>



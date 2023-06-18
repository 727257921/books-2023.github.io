<template><div><h2 id="_1-代码规范" tabindex="-1"><a class="header-anchor" href="#_1-代码规范" aria-hidden="true">#</a> 1.代码规范</h2>
<h1 id="一、peppercron" tabindex="-1"><a class="header-anchor" href="#一、peppercron" aria-hidden="true">#</a> 一、PepperCron</h1>
<h4 id="_1-采用驼峰命名" tabindex="-1"><a class="header-anchor" href="#_1-采用驼峰命名" aria-hidden="true">#</a> 1,采用驼峰命名</h4>
<p>目前系统大多数采用驼峰命名。Java由于使用的类名，所有推荐使用驼峰命名方式</p>
<p>例如: VerifiedAuthorDailyReward</p>
<h1 id="二、pepperbus" tabindex="-1"><a class="header-anchor" href="#二、pepperbus" aria-hidden="true">#</a> 二、PepperBus</h1>
<hr>
<h4 id="_1-queue和topic-采用snake-case-全小写" tabindex="-1"><a class="header-anchor" href="#_1-queue和topic-采用snake-case-全小写" aria-hidden="true">#</a> 1,Queue和Topic 采用snake_case, 全小写</h4>
<p>目前系统大多数采 snake_case. 全小写。 所以推荐使用 snake_case, 全小写</p>
<p>例如:</p>
<p>knight_club_score</p>
<p>default</p>
<p>gift_turntable</p>
<h4 id="_2-queue-建议以生产系统名开头" tabindex="-1"><a class="header-anchor" href="#_2-queue-建议以生产系统名开头" aria-hidden="true">#</a> 2,Queue 建议以生产系统名开头</h4>
<p>例如</p>
<p>payment_xxx_xxx</p>
<p>passport_xxx_xx</p>
<p>live_xxx_xxx</p>
<h4 id="_3-topic建议以消费系统名命名开头" tabindex="-1"><a class="header-anchor" href="#_3-topic建议以消费系统名命名开头" aria-hidden="true">#</a> 3,Topic建议以消费系统名命名开头</h4>
<p>例如</p>
<p>activity_xxx_xxx</p>
<p>live_xxx_xxx</p>
<h1 id="_012-java编码规范" tabindex="-1"><a class="header-anchor" href="#_012-java编码规范" aria-hidden="true">#</a> 012-Java编码规范</h1>
<h3 id="一、新人入门" tabindex="-1"><a class="header-anchor" href="#一、新人入门" aria-hidden="true">#</a> 一、新人入门</h3>
<hr>
<p><a href="https://git.huajiao.com/docs/server/blob/master/project/java/HowTo/README.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/server/blob/master/project/java/HowTo/README.md<ExternalLinkIcon/></a></p>
<h3 id="二、阿里巴巴java开发手册" tabindex="-1"><a class="header-anchor" href="#二、阿里巴巴java开发手册" aria-hidden="true">#</a> 二、阿里巴巴java开发手册</h3>
<hr>
<p><a href="https://github.com/alibaba/p3c/tree/master/p3c-gitbook" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/p3c/tree/master/p3c-gitbook<ExternalLinkIcon/></a></p>
<p><a href="https://edu.aliyun.com/certification/cldt02" target="_blank" rel="noopener noreferrer">持证上岗地址<ExternalLinkIcon/></a></p>
<h1 id="一、mysql命名规范" tabindex="-1"><a class="header-anchor" href="#一、mysql命名规范" aria-hidden="true">#</a> 一、Mysql命名规范</h1>
<hr>
<p>1、数据库名称，请注意命名规范：不超过16个字符，只支持数字、字母、下划线，且不能为MySQL的关键字。
2、表名、列明长度超过16。
3、必须有unsigned。
4、必须为innodb。
5、int bigint （10） 不能小于10。
6、varchar长度小于3000。
7、text 字段个数不能大于3。
8、主键必须为int类型。
9、索引不能有重复。
10、索引个数不能大于5个（包括主键）。
11、索引字段必须为not null，并且有default值（除自增键外）。
12、SQL是否使用到索引。
13、审核的SQL不要包含非审核的表。
14、SQL 中不能有*。
14、自增字段必须为int 或者bigint。
16、请不要使用MySQL 预留字（Reserved Words）。
17、数据库名、表名、字段使用snake_case. 使用简单的完整英文不要使用任何简写。</p>
<p>参考</p>
<p><a href="http://hulk.corp.qihoo.net:8360/help/detail/822" target="_blank" rel="noopener noreferrer">http://hulk.corp.qihoo.net:8360/help/detail/822<ExternalLinkIcon/></a></p>
<h1 id="建表操作" tabindex="-1"><a class="header-anchor" href="#建表操作" aria-hidden="true">#</a> <strong>建表操作</strong></h1>
<p>在实例列表中选择一个需要建表的实例，点击『建表』，即可进入建表流程；</p>
<ul>
<li>建表支持批量建立分表功能，可选数字型分表和日期型分表，只需按照提示填写一个表结构并选择分表范围；
<img src="http://p0.qhimg.com/t0191ce863b97629013.png" alt="img"></li>
</ul>
<p>建表语句需要符合一定标准，否则将建表失败，具体审核标准如下：</p>
<ol>
<li>表结构是否合法；</li>
<li>表名、列明长度超过16；</li>
<li>必须有unsigned；</li>
<li>必须为innodb；</li>
<li>int bigint （10） 不能小于10；</li>
<li>varchar长度小于3000；</li>
<li>text 字段个数不能大于3；</li>
<li>主键必须为integer类型；</li>
<li>索引不能有重复；</li>
<li>索引个数不能大于5个（包括主键）；</li>
<li>索引字段必须为not null，并且有default值（除自增键外）；</li>
<li>SQL是否使用到索引；</li>
<li>审核的SQL不要包含非审核的表；</li>
<li>SQL 中不能有*；</li>
<li>自增字段必须为int 或者bigint；</li>
<li>请不要使用MySQL 预留字（Reserved Words）；</li>
</ol>
<p><a href="http://hulk.corp.qihoo.net:8360/help/detail/829" target="_blank" rel="noopener noreferrer">http://hulk.corp.qihoo.net:8360/help/detail/829<ExternalLinkIcon/></a></p>
<h1 id="慢日志优化建议" tabindex="-1"><a class="header-anchor" href="#慢日志优化建议" aria-hidden="true">#</a> <strong>慢日志优化建议</strong></h1>
<p>以下为慢日志分析中的一些优化建议，请按照编号查询，有SQL优化建议、也有SQL标准化建议，但是由于SQL优化，博大精深，不能包含所有，故不全面，请包涵；</p>
<h3 id="ali-001" tabindex="-1"><a class="header-anchor" href="#ali-001" aria-hidden="true">#</a> <strong>ALI.001</strong></h3>
<p>紧急程度：一般
在别名中请使用关键字‘AS’，这样更容易阅读，如：tbl AS alias</p>
<h3 id="ali-002" tabindex="-1"><a class="header-anchor" href="#ali-002" aria-hidden="true">#</a> <strong>ALI.002</strong></h3>
<p>紧急程度：紧急
Aliasing the ‘<em>’ wildcard. Aliasing a column wildcard, such as “SELECT tbl.</em> col1, col2” probably indicates a bug in your SQL. You probably meant for the query to retrieve col1, but instead it renames the last column in the *-wildcarded list.</p>
<h3 id="ali-003" tabindex="-1"><a class="header-anchor" href="#ali-003" aria-hidden="true">#</a> <strong>ALI.003</strong></h3>
<p>紧急程度：一般
别名中使用原来的名字，导致非常难理解</p>
<h3 id="arg-001" tabindex="-1"><a class="header-anchor" href="#arg-001" aria-hidden="true">#</a> <strong>ARG.001</strong></h3>
<p>紧急程度：紧急
有前缀”%” 如：“%foo”.这样使用到不到索引</p>
<h3 id="arg-002" tabindex="-1"><a class="header-anchor" href="#arg-002" aria-hidden="true">#</a> <strong>ARG.002</strong></h3>
<p>紧急程度：一般
like中不包含‘%’，可能触发潜在的SQL bug</p>
<h3 id="cla-001" tabindex="-1"><a class="header-anchor" href="#cla-001" aria-hidden="true">#</a> <strong>CLA.001</strong></h3>
<p>紧急程度：紧急
SELECT 查询中没有WHERE，查询的行数过多</p>
<h3 id="cla-002" tabindex="-1"><a class="header-anchor" href="#cla-002" aria-hidden="true">#</a> <strong>CLA.002</strong></h3>
<p>紧急程度：一般
使用了ORDER BY RAND().虽然能获取随机顺序，ORDER BY RAND()性能非常的差 因为他会排序整个数据集</p>
<h3 id="cla-003" tabindex="-1"><a class="header-anchor" href="#cla-003" aria-hidden="true">#</a> <strong>CLA.003</strong></h3>
<p>severity: note
LIMIT with OFFSET. Paginating a result set with LIMIT and OFFSET is O(n^2) complexity, and will cause performance problems as the data grows larger. Pagination techniques such as bookmarked scans are much more efficient.</p>
<h3 id="cla-004" tabindex="-1"><a class="header-anchor" href="#cla-004" aria-hidden="true">#</a> <strong>CLA.004</strong></h3>
<p>severity: note
Ordinal in the GROUP BY clause. Using a number in the GROUP BY clause, instead of an expression or column name, can cause problems if the query is changed.</p>
<h3 id="cla-005" tabindex="-1"><a class="header-anchor" href="#cla-005" aria-hidden="true">#</a> <strong>CLA.005</strong></h3>
<p>severity: warn
ORDER BY constant column. This is probably a bug in your SQL; at best it is a useless operation that does not change the query results.</p>
<h3 id="cla-006" tabindex="-1"><a class="header-anchor" href="#cla-006" aria-hidden="true">#</a> <strong>CLA.006</strong></h3>
<p>紧急程度：紧急
在不同的表上使用GROUP BY or ORDER BY，这会导致临时表 与filesort（可能造成大量的内存使用与磁盘的临时空间使用）</p>
<h3 id="cla-007" tabindex="-1"><a class="header-anchor" href="#cla-007" aria-hidden="true">#</a> <strong>CLA.007</strong></h3>
<p>紧急程度：紧急
ORDER BY 用不同的顺序排序不同的字段，如 order by a desc,b asc; 这样的语句会阻碍索引的使用</p>
<h3 id="col-001" tabindex="-1"><a class="header-anchor" href="#col-001" aria-hidden="true">#</a> <strong>COL.001</strong></h3>
<p>紧急程度：一般
SELECT <em>. 通过</em>查询所有字段，不仅导致查询了不需要的数据，更会因为表结构的改变，导致程序的错误；</p>
<h3 id="col-002" tabindex="-1"><a class="header-anchor" href="#col-002" aria-hidden="true">#</a> <strong>COL.002</strong></h3>
<p>紧急程度：一般
尽量在insert into后显示添加字段，这样在更改表结构时，尽量避免出错，如：INSERT INTO tbl(col1, col2) VALUES.</p>
<h3 id="lit-001" tabindex="-1"><a class="header-anchor" href="#lit-001" aria-hidden="true">#</a> <strong>LIT.001</strong></h3>
<p>紧急程度：一般
用整数存储IP，性能会更好（ INET_ATON()）</p>
<h3 id="lit-002" tabindex="-1"><a class="header-anchor" href="#lit-002" aria-hidden="true">#</a> <strong>LIT.002</strong></h3>
<p>紧急程度：紧急
date/time没有加引号， 如： “WHERE col&lt;2010-02-12” 是一个能执行的SQL但是可能存在风险</p>
<h3 id="kwr-001" tabindex="-1"><a class="header-anchor" href="#kwr-001" aria-hidden="true">#</a> <strong>KWR.001</strong></h3>
<p>紧急程度：一般
SQL_CALC_FOUND_ROWS性能很差，并且他不能很好的扩展，也不能降低DB的开销</p>
<h3 id="joi-001" tabindex="-1"><a class="header-anchor" href="#joi-001" aria-hidden="true">#</a> <strong>JOI.001</strong></h3>
<p>severity: crit
Mixing comma and ANSI joins. Mixing comma joins and ANSI joins is confusing to humans, and the behavior and precedence differs between some MySQL versions, which can introduce bugs.</p>
<h3 id="joi-002" tabindex="-1"><a class="header-anchor" href="#joi-002" aria-hidden="true">#</a> <strong>JOI.002</strong></h3>
<p>紧急程度：紧急
一个表被join两次，尽量减少表的访问次数</p>
<h3 id="joi-003" tabindex="-1"><a class="header-anchor" href="#joi-003" aria-hidden="true">#</a> <strong>JOI.003</strong></h3>
<p>severity: warn
OUTER JOIN defeated. The reference to an outer table column in the WHERE clause prevents the OUTER JOIN from returning any non-matched rows, which implicitly converts the query to an INNER JOIN. This is probably a bug in the query or a misunderstanding of how OUTER JOIN works.</p>
<h3 id="joi-004" tabindex="-1"><a class="header-anchor" href="#joi-004" aria-hidden="true">#</a> <strong>JOI.004</strong></h3>
<p>severity: warn
Exclusion join uses wrong column in WHERE. The exclusion join (LEFT OUTER JOIN with a WHERE clause that is satisfied only if there is no row in the right-hand table) seems to use the wrong column in the WHERE clause. A query such as ”… FROM l LEFT OUTER JOIN r ON l.l=r.r WHERE r.z IS NULL” probably ought to list r.r in the WHERE IS NULL clause.</p>
<h3 id="res-001" tabindex="-1"><a class="header-anchor" href="#res-001" aria-hidden="true">#</a> <strong>RES.001</strong></h3>
<p>severity: warn
Non-deterministic GROUP BY. The SQL retrieves columns that are neither in an aggregate function nor the GROUP BY expression, so these values will be non-deterministic in the result.</p>
<h3 id="res-002" tabindex="-1"><a class="header-anchor" href="#res-002" aria-hidden="true">#</a> <strong>RES.002</strong></h3>
<p>紧急程度：紧急
LIMIT without ORDER BY. LIMIT without ORDER BY 能导致不确定的结果</p>
<h3 id="sta-001" tabindex="-1"><a class="header-anchor" href="#sta-001" aria-hidden="true">#</a> <strong>STA.001</strong></h3>
<p>紧急程度：一般
!= 不标准，请使用&lt;&gt;代替</p>
<h3 id="sub-001" tabindex="-1"><a class="header-anchor" href="#sub-001" aria-hidden="true">#</a> <strong>SUB.001</strong></h3>
<p>紧急程度：特急
MySQL对IN() and NOT IN() 不能很好的优化，MySQL把子查询变为外部存在的子查询（exists），这样性能会非常的差，可以尽量使用 JOIN or a LEFT OUTER JOIN。在未来的5.6版本会有所改变；请期待</p>
<h1 id="二、hulk建表和改表审核规则" tabindex="-1"><a class="header-anchor" href="#二、hulk建表和改表审核规则" aria-hidden="true">#</a> 二、hulk建表和改表审核规则</h1>
<p><img src="@source/docs/theme-reco/D:/工作文档/img/微信截图_20220307125625.png" alt="微信截图_20220307125625"></p>
<h1 id="三、mysql优化" tabindex="-1"><a class="header-anchor" href="#三、mysql优化" aria-hidden="true">#</a> 三、Mysql优化</h1>
<hr>
<p>1、对查询进行优化，应尽量避免全表扫描，首先应考虑在where及order by涉及的列上建立索引。</p>
<p>2、应尽量避免在where子句中对字段进行null值判断，创建表时NULL是默认值，但大多数时候应该使用NOT NULL，或者使用一个特殊的值，如0，-1作为默认值。</p>
<p>3、应尽量避免在where子句中使用!=或&lt;&gt;操作符，MySQL只有对以下操作符才使用索引：&lt;，&lt;=，=，&gt;，&gt;=，BETWEEN，IN，以及某些时候的LIKE。</p>
<p>4、应尽量避免在where子句中使用or来连接条件，否则将导致引擎放弃使用索引而进行全表扫描，可以使用UNION合并查询：select id from t where num=10 union all select id from t where num=20。</p>
<p>5、in和not in也要慎用，否则会导致全表扫描，对于连续的数值，能用between就不要用in了：Select id from t where num between 1 and 3。</p>
<p>6、下面的查询也将导致全表扫描：select id from t where name like‘%abc%’或者select id from t where name like‘%abc’若要提高效率，可以考虑全文检索。而select id from t where name like‘abc%’才用到索引。</p>
<p>7、如果在where子句中使用参数，也会导致全表扫描。</p>
<p>8、应尽量避免在where子句中对字段进行表达式操作，应尽量避免在where子句中对字段进行函数操作。</p>
<p>9、很多时候用exists代替in是一个好的选择：select num from a where num in(select num from b)。用下面的语句替换：select num from a where exists(select 1 from b where num=a.num)。</p>
<p>10、索引固然可以提高相应的select的效率，但同时也降低了insert及update的效率，因为insert或update时有可能会重建索引，所以怎样建索引需要慎重考虑，视具体情况而定。一个表的索引数最好不要超过6个，若太多则应考虑一些不常使用到的列上建的索引是否有必要。</p>
<p>11、应尽可能的避免更新clustered索引数据列， 因为clustered索引数据列的顺序就是表记录的物理存储顺序，一旦该列值改变将导致整个表记录的顺序的调整，会耗费相当大的资源。若应用系统需要频繁更新clustered索引数据列，那么需要考虑是否应将该索引建为clustered索引。</p>
<p>12、尽量使用数字型字段，若只含数值信息的字段尽量不要设计为字符型，这会降低查询和连接的性能，并会增加存储开销。</p>
<p>13、尽可能的使用varchar/nvarchar代替char/nchar，因为首先变长字段存储空间小，可以节省存储空间，其次对于查询来说，在一个相对较小的字段内搜索效率显然要高些。</p>
<p>14、最好不要使用”“返回所有：select from t ，用具体的字段列表代替“*”，不要返回用不到的任何字段。</p>
<p>15、尽量避免向客户端返回大数据量，若数据量过大，应该考虑相应需求是否合理。</p>
<p>16、使用表的别名(Alias)：当在SQL语句中连接多个表时，请使用表的别名并把别名前缀于每个Column上。这样一来，就可以减少解析的时间并减少那些由Column歧义引起的语法错误。</p>
<p>17、使用“临时表”暂存中间结果 ：</p>
<p>简化SQL语句的重要方法就是采用临时表暂存中间结果，但是临时表的好处远远不止这些，将临时结果暂存在临时表，后面的查询就在tempdb中了，这可以避免程序中多次扫描主表，也大大减少了程序执行中“共享锁”阻塞“更新锁”，减少了阻塞，提高了并发性能。</p>
<p>18、一些SQL查询语句应加上nolock，读、写是会相互阻塞的，为了提高并发性能，对于一些查询，可以加上nolock，这样读的时候可以允许写，但缺点是可能读到未提交的脏数据。</p>
<p>使用nolock有3条原则：</p>
<ul>
<li>查询的结果用于“插、删、改”的不能加nolock；</li>
<li>查询的表属于频繁发生页分裂的，慎用nolock ；</li>
<li>使用临时表一样可以保存“数据前影”，起到类似Oracle的undo表空间的功能，能采用临时表提高并发性能的，不要用nolock。</li>
</ul>
<p>19、常见的简化规则如下：</p>
<p>不要有超过5个以上的表连接（JOIN），考虑使用临时表或表变量存放中间结果。少用子查询，视图嵌套不要过深，一般视图嵌套不要超过2个为宜。</p>
<p>20、将需要查询的结果预先计算好放在表中，查询的时候再Select。这在SQL7.0以前是最重要的手段，例如医院的住院费计算。</p>
<p>21、用OR的字句可以分解成多个查询，并且通过UNION 连接多个查询。他们的速度只同是否使用索引有关，如果查询需要用到联合索引，用UNION all执行的效率更高。多个OR的字句没有用到索引，改写成UNION的形式再试图与索引匹配。一个关键的问题是否用到索引。</p>
<p>22、在IN后面值的列表中，将出现最频繁的值放在最前面，出现得最少的放在最后面，减少判断的次数。</p>
<p>23、尽量将数据的处理工作放在服务器上，减少网络的开销，如使用存储过程。</p>
<p>存储过程是编译好、优化过、并且被组织到一个执行规划里、且存储在数据库中的SQL语句，是控制流语言的集合，速度当然快。反复执行的动态SQL，可以使用临时存储过程，该过程（临时表）被放在Tempdb中。</p>
<p>24、当服务器的内存够多时，配制线程数量 = 最大连接数+5，这样能发挥最大的效率；否则使用 配制线程数量&lt;最大连接数启用SQL SERVER的线程池来解决，如果还是数量 = 最大连接数+5，严重的损害服务器的性能。</p>
<p>25、查询的关联同写的顺序 ：</p>
<p>select a.personMemberID, * from chineseresume a,personmember b where personMemberID = b.referenceid and a.personMemberID = ‘JCNPRH39681’ （A = B ,B = ‘号码’）</p>
<p>select a.personMemberID, * from chineseresume a,personmember b where a.personMemberID = b.referenceid and a.personMemberID = ‘JCNPRH39681’ and b.referenceid = ‘JCNPRH39681’ （A = B ,B = ‘号码’， A = ‘号码’）</p>
<p>select a.personMemberID, * from chineseresume a,personmember b where b.referenceid = ‘JCNPRH39681’ and a.personMemberID = ‘JCNPRH39681’ （B = ‘号码’， A = ‘号码’）</p>
<p>26、尽量使用exists代替select count(1)来判断是否存在记录，count函数只有在统计表中所有行数时使用，而且count(1)比count(*)更有效率。</p>
<p>27、尽量使用“&gt;=”，不要使用“&gt;”。</p>
<p>28、索引的使用规范：</p>
<ul>
<li>索引的创建要与应用结合考虑，建议大的OLTP表不要超过6个索引；</li>
<li>尽可能的使用索引字段作为查询条件，尤其是聚簇索引，必要时可以通过index index_name来强制指定索引；</li>
<li>避免对大表查询时进行table scan，必要时考虑新建索引；</li>
<li>在使用索引字段作为条件时，如果该索引是联合索引，那么必须使用到该索引中的第一个字段作为条件时才能保证系统使用该索引，否则该索引将不会被使用；</li>
<li>要注意索引的维护，周期性重建索引，重新编译存储过程。</li>
</ul>
<p>29、下列SQL条件语句中的列都建有恰当的索引，但执行速度却非常慢：</p>
<p>SELECT * FROM record WHERE substrINg(card_no,1,4)=’5378’ (13秒)</p>
<p>SELECT * FROM record WHERE amount/30&lt; 1000 （11秒）</p>
<p>SELECT * FROM record WHERE convert(char(10),date,112)=’19991201’ （10秒）</p>
<p>**分析： **</p>
<p>WHERE子句中对列的任何操作结果都是在SQL运行时逐列计算得到的，因此它不得不进行表搜索，而没有使用该列上面的索引。</p>
<p>如果这些结果在查询编译时就能得到，那么就可以被SQL优化器优化，使用索引，避免表搜索，因此将SQL重写成下面这样：</p>
<p>SELECT * FROM record WHERE card_no like ‘5378%’ （&lt; 1秒）</p>
<p>SELECT * FROM record WHERE amount&lt; 1000*30 （&lt; 1秒）</p>
<p>SELECT * FROM record WHERE date= ‘1999/12/01’ （&lt; 1秒）</p>
<p>30、当有一批处理的插入或更新时，用批量插入或批量更新，绝不会一条条记录的去更新。</p>
<p>31、在所有的存储过程中，能够用SQL语句的，我绝不会用循环去实现。</p>
<p>例如：列出上个月的每一天，我会用connect by去递归查询一下，绝不会去用循环从上个月第一天到最后一天。</p>
<p>32、选择最有效率的表名顺序（只在基于规则的优化器中有效）：</p>
<p>Oracle的解析器按照从右到左的顺序处理FROM子句中的表名，FROM子句中写在最后的表（基础表 driving table）将被最先处理，在FROM子句中包含多个表的情况下，你必须选择记录条数最少的表作为基础表。</p>
<p>如果有3个以上的表连接查询，那就需要选择交叉表（intersection table）作为基础表，交叉表是指那个被其他表所引用的表。</p>
<p>33、提高GROUP BY语句的效率，可以通过将不需要的记录在GROUP BY之前过滤掉。下面两个查询返回相同结果，但第二个明显就快了许多。</p>
<p>低效：</p>
<p>SELECT JOB , AVG(SAL)</p>
<p>FROM EMP</p>
<p>GROUP BY JOB</p>
<p>HAVING JOB =’PRESIDENT’</p>
<p>OR JOB =’MANAGER’</p>
<p>高效:</p>
<p>SELECT JOB , AVG(SAL)</p>
<p>FROM EMP</p>
<p>WHERE JOB =’PRESIDENT’</p>
<p>OR JOB =’MANAGER’</p>
<p>GROUP BY JOB</p>
<p>34、SQL语句用大写，因为Oracle总是先解析SQL语句，把小写的字母转换成大写的再执行。</p>
<p>35、别名的使用，别名是大型数据库的应用技巧，就是表名、列名在查询中以一个字母为别名，查询速度要比建连接表快1.5倍。</p>
<p>36、避免死锁，在你的存储过程和触发器中访问同一个表时总是以相同的顺序；事务应经可能地缩短，在一个事务中应尽可能减少涉及到的数据量；永远不要在事务中等待用户输入。</p>
<p>37、避免使用临时表，除非却有需要，否则应尽量避免使用临时表，相反，可以使用表变量代替；大多数时候(99%)，表变量驻扎在内存中，因此速度比临时表更快，临时表驻扎在TempDb数据库中，因此临时表上的操作需要跨数据库通信，速度自然慢。</p>
<p>38、最好不要使用触发器：</p>
<ul>
<li>触发一个触发器，执行一个触发器事件本身就是一个耗费资源的过程；</li>
<li>如果能够使用约束实现的，尽量不要使用触发器；</li>
<li>不要为不同的触发事件(Insert，Update和Delete)使用相同的触发器；</li>
<li>不要在触发器中使用事务型代码。</li>
</ul>
<p>39、索引创建规则：</p>
<ul>
<li>表的主键、外键必须有索引；</li>
<li>数据量超过300的表应该有索引；</li>
<li>经常与其他表进行连接的表，在连接字段上应该建立索引；</li>
<li>经常出现在Where子句中的字段，特别是大表的字段，应该建立索引；</li>
<li>索引应该建在选择性高的字段上；</li>
<li>索引应该建在小字段上，对于大的文本字段甚至超长字段，不要建索引；</li>
<li>复合索引的建立需要进行仔细分析，尽量考虑用单字段索引代替；</li>
<li>正确选择复合索引中的主列字段，一般是选择性较好的字段；</li>
<li>复合索引的几个字段是否经常同时以AND方式出现在Where子句中？单字段查询是否极少甚至没有？如果是，则可以建立复合索引；否则考虑单字段索引；</li>
<li>如果复合索引中包含的字段经常单独出现在Where子句中，则分解为多个单字段索引；</li>
<li>如果复合索引所包含的字段超过3个，那么仔细考虑其必要性，考虑减少复合的字段；</li>
<li>如果既有单字段索引，又有这几个字段上的复合索引，一般可以删除复合索引；</li>
<li>频繁进行数据操作的表，不要建立太多的索引；</li>
<li>删除无用的索引，避免对执行计划造成负面影响；</li>
<li>表上建立的每个索引都会增加存储开销，索引对于插入、删除、更新操作也会增加处理上的开销。另外，过多的复合索引，在有单字段索引的情况下，一般都是没有存在价值的；相反，还会降低数据增加删除时的性能，特别是对频繁更新的表来说，负面影响更大。</li>
<li>尽量不要对数据库中某个含有大量重复的值的字段建立索引。</li>
</ul>
<p>40、MySQL查询优化总结：</p>
<p>使用慢查询日志去发现慢查询，使用执行计划去判断查询是否正常运行，总是去测试你的查询看看是否他们运行在最佳状态下。</p>
<p>久而久之性能总会变化，避免在整个表上使用count(*)，它可能锁住整张表，使查询保持一致以便后续相似的查询可以使用查询缓存，在适当的情形下使用GROUP BY而不是DISTINCT，在WHERE、GROUP BY和ORDER BY子句中使用有索引的列，保持索引简单，不在多个索引中包含同一个列。</p>
<p>有时候MySQL会使用错误的索引，对于这种情况使用USE INDEX，检查使用SQL_MODE=STRICT的问题，对于记录数小于5的索引字段，在UNION的时候使用LIMIT不是是用OR。</p>
<p>为了避免在更新前SELECT，使用INSERT ON DUPLICATE KEY或者INSERT IGNORE，不要用UPDATE去实现，不要使用MAX，使用索引字段和ORDER BY子句，LIMIT M，N实际上可以减缓查询在某些情况下，有节制地使用，在WHERE子句中使用UNION代替子查询，在重新启动的MySQL，记得来温暖你的数据库，以确保数据在内存和查询速度快，考虑持久连接，而不是多个连接，以减少开销。</p>
<p>基准查询，包括使用服务器上的负载，有时一个简单的查询可以影响其他查询，当负载增加在服务器上，使用SHOW PROCESSLIST查看慢的和有问题的查询，在开发环境中产生的镜像数据中测试的所有可疑的查询。</p>
<p>41、MySQL备份过程：</p>
<ul>
<li>从二级复制服务器上进行备份；</li>
<li>在进行备份期间停止复制，以避免在数据依赖和外键约束上出现不一致；</li>
<li>彻底停止MySQL，从数据库文件进行备份；</li>
<li>如果使用MySQL dump进行备份，请同时备份二进制日志文件 – 确保复制没有中断；</li>
<li>不要信任LVM快照，这很可能产生数据不一致，将来会给你带来麻烦；</li>
<li>为了更容易进行单表恢复，以表为单位导出数据——如果数据是与其他表隔离的。</li>
<li>当使用mysqldump时请使用–opt；</li>
<li>在备份之前检查和优化表；</li>
<li>为了更快的进行导入，在导入时临时禁用外键约束。；</li>
<li>为了更快的进行导入，在导入时临时禁用唯一性检测；</li>
<li>在每一次备份后计算数据库，表以及索引的尺寸，以便更够监控数据尺寸的增长；</li>
<li>通过自动调度脚本监控复制实例的错误和延迟；</li>
<li>定期执行备份。</li>
</ul>
<p>42、查询缓冲并不自动处理空格，因此，在写SQL语句时，应尽量减少空格的使用，尤其是在SQL首和尾的空格（因为查询缓冲并不自动截取首尾空格）。</p>
<p>43、member用mid做标准进行分表方便查询么？一般的业务需求中基本上都是以username为查询依据，正常应当是username做hash取模来分表。</p>
<p>而分表的话MySQL的partition功能就是干这个的，对代码是透明的；在代码层面去实现貌似是不合理的。</p>
<p>44、我们应该为数据库里的每张表都设置一个ID做为其主键，而且最好的是一个INT型的（推荐使用UNSIGNED），并设置上自动增加的AUTO_INCREMENT标志。</p>
<p>45、在所有的存储过程和触发器的开始处设置SET NOCOUNT ON，在结束时设置SET NOCOUNT OFF。无需在执行存储过程和触发器的每个语句后向客户端发送DONE_IN_PROC消息。</p>
<p>46、MySQL查询可以启用高速查询缓存。这是提高数据库性能的有效MySQL优化方法之一。当同一个查询被执行多次时，从缓存中提取数据和直接从数据库中返回数据快很多。</p>
<p>47、EXPLAIN SELECT查询用来跟踪查看效果：</p>
<p>使用EXPLAIN关键字可以让你知道MySQL是如何处理你的SQL语句的。这可以帮你分析你的查询语句或是表结构的性能瓶颈。EXPLAIN的查询结果还会告诉你你的索引主键被如何利用的，你的数据表是如何被搜索和排序的。</p>
<p>48、当只要一行数据时使用LIMIT 1 ：</p>
<p>当你查询表的有些时候，你已经知道结果只会有一条结果，但因为你可能需要去fetch游标，或是你也许会去检查返回的记录数。</p>
<p>在这种情况下，加上LIMIT 1可以增加性能。这样一来，MySQL数据库引擎会在找到一条数据后停止搜索，而不是继续往后查少下一条符合记录的数据。</p>
<p>49、选择表合适存储引擎：</p>
<ul>
<li>
<p>myisam：应用时以读和插入操作为主，只有少量的更新和删除，并且对事务的完整性，并发性要求不是很高的。</p>
</li>
<li>
<p>InnoDB：事务处理，以及并发条件下要求数据的一致性。除了插入和查询外，包括很多的更新和删除。（InnoDB有效地降低删除和更新导致的锁定）。</p>
<p>对于支持事务的InnoDB类型的表来说，影响速度的主要原因是AUTOCOMMIT默认设置是打开的，而且程序没有显式调用BEGIN 开始事务，导致每插入一条都自动提交，严重影响了速度。可以在执行SQL前调用begin，多条SQL形成一个事物（即使autocommit打开也可以），将大大提高性能。</p>
</li>
</ul>
<p>50、优化表的数据类型，选择合适的数据类型：</p>
<p>原则：更小通常更好，简单就好，所有字段都得有默认值，尽量避免null。</p>
<p>例如：数据库表设计时候更小的占磁盘空间尽可能使用更小的整数类型。(mediumint就比int更合适)</p>
<p>比如时间字段：datetime和timestamp，datetime占用8个字节，而timestamp占用4个字节，只用了一半，而timestamp表示的范围是1970—2037适合做更新时间</p>
<p>MySQL可以很好的支持大数据量的存取，但是一般说来，数据库中的表越小，在它上面执行的查询也就会越快。</p>
<p>因此，在创建表的时候，为了获得更好的性能，我们可以将表中字段的宽度设得尽可能小。</p>
<p>例如：在定义邮政编码这个字段时，如果将其设置为CHAR(255)，显然给数据库增加了不必要的空间。甚至使用VARCHAR这种类型也是多余的，因为CHAR(6)就可以很好的完成任务了。</p>
<p>同样的，如果可以的话，我们应该使用MEDIUMINT而不是BIGIN来定义整型字段，应该尽量把字段设置为NOT NULL，这样在将来执行查询的时候，数据库不用去比较NULL值。</p>
<p>对于某些文本字段，例如“省份”或者“性别”，我们可以将它们定义为ENUM类型。因为在MySQL中，ENUM类型被当作数值型数据来处理，而数值型数据被处理起来的速度要比文本类型快得多。这样，我们又可以提高数据库的性能。</p>
<p>51、字符串数据类型：注意char，varchar，text选择区别。</p>
<p>52、任何对列的操作都将导致表扫描，它包括数据库函数、计算表达式等等，查询时要尽可能将操作移至等号右边</p>
<h1 id="php编码规范" tabindex="-1"><a class="header-anchor" href="#php编码规范" aria-hidden="true">#</a> PHP编码规范：</h1>
<h3 id="一、编辑器格式规范" tabindex="-1"><a class="header-anchor" href="#一、编辑器格式规范" aria-hidden="true">#</a> 一、编辑器格式规范</h3>
<hr>
<ol>
<li>缩进类型，使用4空格。</li>
<li>行字符长度无硬限制，软限制默认80，最长不超过120。</li>
<li>在命名空间(namespace)的声明下面必须有一行空行，并且在导入(use)的声明下面也必须有一行空行。【改动】</li>
<li>类(class)的左花括号必须放到其声明下面自成一行，右花括号则必须放到类主体下面自成一行。</li>
<li>在控制结构关键字及左括号的后面必须有一个空格；而方法(method)和函数(function)的名称后面不可有空格。</li>
<li>控制结构总是使用花括号，且关键词与其他代码均保持一个空格。</li>
<li>在控制结构表达式中，左括号后面和右括号前面不需要空格。</li>
<li>当使用else和elseif，放在同一行。</li>
<li>case和break分别从swith语句处缩进1次、2次。</li>
<li>如果是纯PHP文件，不需要关闭标签?&gt;。</li>
<li>行结束符使用Unix/Mac OS系统的LF（\n）风格。</li>
<li>PHP的开始标签后面不需要一个空行。</li>
<li>匿名函数function与左括号之前需要一个空格。</li>
<li>一元操作符(++,--)与变量之间不需要空格，其他运算符（包括三元操作符）与变量、表达式之前均需要有一个空格。</li>
<li>同一行内部逗号、分号之后均保留1个空格。</li>
<li>文件编码采用UTF-8 with NO BOM。</li>
</ol>
<h3 id="二、php命名及书写规范" tabindex="-1"><a class="header-anchor" href="#二、php命名及书写规范" aria-hidden="true">#</a> 二、PHP命名及书写规范</h3>
<hr>
<ol>
<li>类名命名为骆驼式（StudlyCaps）风格。</li>
<li>类(class)中的常量必须只由大写字母和下划线(_)组成。</li>
<li>方法名(method name) 必须使用驼峰式(cameCase)写法。</li>
<li>变量命名(variable)必须使用驼峰式(cameCase)写法。</li>
<li>true_false_null全小写。</li>
<li>所有的属性(property)和方法(method) 必须有可见性声明；抽象(abstract)和终结(final)声明必须在可见性声明之前；而静态(static)声明必须在可见性声明之后。</li>
<li>类名、方法名、变量、常量必须使用完整的英文，不要使用简写。</li>
</ol>
<p>以上是之前定义的规范。一些细节的规范可以参考【PSR的规范】。 如果【PSR的规范】和【编辑器格式规范】、【PHP命名及书写规范】有冲突，优先使用【编辑器格式规范】、【PHP命名及书写规范】</p>
<p>【PSR的规范】</p>
<p>PSR-1 基本代码规范 <a href="https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-1-basic-coding-standard-cn.md" target="_blank" rel="noopener noreferrer">https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-1-basic-coding-standard-cn.md<ExternalLinkIcon/></a></p>
<p>PSR-2 代码风格规范 <a href="https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-2-coding-style-guide-cn.md" target="_blank" rel="noopener noreferrer">https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-2-coding-style-guide-cn.md<ExternalLinkIcon/></a></p>
<p>PSR-2 补充文档 <a href="https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-2-coding-style-guide-meta-cn.md" target="_blank" rel="noopener noreferrer">https://github.com/PizzaLiu/PHP-FIG/blob/master/PSR-2-coding-style-guide-meta-cn.md<ExternalLinkIcon/></a></p>
<h3 id="三、phpstorm导入配置" tabindex="-1"><a class="header-anchor" href="#三、phpstorm导入配置" aria-hidden="true">#</a> 三、phpstorm导入配置</h3>
<hr>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>打开编辑器，选择File-Import Settings，然后选择settings.jar，点击OK

https://git.huajiao.com/docs/server/tree/master/project/codestyle/php

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、最佳实践" tabindex="-1"><a class="header-anchor" href="#四、最佳实践" aria-hidden="true">#</a> 四、最佳实践</h3>
<hr>
<h3 id="https-git-huajiao-com-docs-server-blob-master-新人指南-best-practices-md" tabindex="-1"><a class="header-anchor" href="#https-git-huajiao-com-docs-server-blob-master-新人指南-best-practices-md" aria-hidden="true">#</a> <a href="https://git.huajiao.com/docs/server/blob/master/%E6%96%B0%E4%BA%BA%E6%8C%87%E5%8D%97/best_practices.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/server/blob/master/新人指南/best_practices.md<ExternalLinkIcon/></a></h3>
<h3 id="五、单元测试" tabindex="-1"><a class="header-anchor" href="#五、单元测试" aria-hidden="true">#</a> 五、单元测试</h3>
<hr>
<p>PHPStorm PHPUnit配置</p>
<p><a href="https://git.huajiao.com/docs/server/blob/master/project/phpstorm.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/server/blob/master/project/phpstorm.md<ExternalLinkIcon/></a></p>
<p>PHPUnit使用</p>
<p><a href="https://git.huajiao.com/docs/server/blob/master/project/phpunit/phpunit.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/server/blob/master/project/phpunit/phpunit.md<ExternalLinkIcon/></a></p>
<h3 id="六、接口规范" tabindex="-1"><a class="header-anchor" href="#六、接口规范" aria-hidden="true">#</a> 六、接口规范</h3>
<hr>
<p>通用数据结构说明</p>
<p><a href="https://git.huajiao.com/docs/interface/blob/master/interface/index.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/interface/blob/master/interface/index.md<ExternalLinkIcon/></a></p>
<p>json_standard</p>
<p><a href="https://git.huajiao.com/docs/interface/blob/master/interface/json_standard.md" target="_blank" rel="noopener noreferrer">https://git.huajiao.com/docs/interface/blob/master/interface/json_standard.md<ExternalLinkIcon/></a></p>
<h1 id="redis规范" tabindex="-1"><a class="header-anchor" href="#redis规范" aria-hidden="true">#</a> Redis规范：</h1>
<p>转至元数据结尾</p>
<ul>
<li>由 <a href="http://wiki.huajiao.com/display/~liuyuqiang" target="_blank" rel="noopener noreferrer">刘玉强<ExternalLinkIcon/></a>创建, 最终由 <a href="http://wiki.huajiao.com/display/~zhangtengda-hj" target="_blank" rel="noopener noreferrer">张腾达<ExternalLinkIcon/></a>修改于 <a href="http://wiki.huajiao.com/pages/diffpagesbyversion.action?pageId=5013957&amp;selectedPageVersions=7&amp;selectedPageVersions=8" target="_blank" rel="noopener noreferrer">二月 08, 2022<ExternalLinkIcon/></a></li>
</ul>
<p>转至元数据起始</p>
<h4 id="一、键值设计" tabindex="-1"><a class="header-anchor" href="#一、键值设计" aria-hidden="true">#</a> <strong>一、键值设计</strong></h4>
<hr>
<h4 id="_1、key名设计" tabindex="-1"><a class="header-anchor" href="#_1、key名设计" aria-hidden="true">#</a> 1、key名设计</h4>
<p><strong>可读性和可管理性</strong>****</p>
<p>以业务名为前缀(防止key冲突)，用冒号分隔，比如业务名:模块:id</p>
<p><strong>简洁性</strong>****</p>
<p>保证语义的前提下，控制key的长度，当key较多时，内存占用也不容忽视</p>
<p><strong>不要包含特殊字符</strong></p>
<p>反例：包含空格、换行、单双引号以及其他转义字符</p>
<h4 id="_2、value设计" tabindex="-1"><a class="header-anchor" href="#_2、value设计" aria-hidden="true">#</a> 2、value设计</h4>
<p><strong>拒绝bigkey</strong>****</p>
<p>防止网卡流量、慢查询，string类型控制在10KB以内，hash、list、set、zset元素个数不要超过5000。</p>
<p>反例：一个包含200万个元素的list。</p>
<p>非字符串的bigkey，不要使用del删除，使用hscan、sscan、zscan方式渐进式删除，同时要注意防止bigkey过期时间自动删除问题</p>
<p><strong>选择适合的数据类型</strong>****</p>
<p>注意节省内存和性能之间的平衡</p>
<p><strong>控制key的生命周期</strong>****</p>
<p>使用expire设置过期时间(条件允许可以打散过期时间，防止集中过期)，不过期的数据重点关注idletime。</p>
<h4 id="二、命令使用" tabindex="-1"><a class="header-anchor" href="#二、命令使用" aria-hidden="true">#</a> <strong>二、命令使用</strong></h4>
<hr>
<h2 id="_1、o-n-命令关注n的数量" tabindex="-1"><a class="header-anchor" href="#_1、o-n-命令关注n的数量" aria-hidden="true">#</a> 1、O(N)命令关注N的数量</h2>
<p>例如hgetall、lrange、smembers、zrange、sinter等并非不能使用，但是需要明确N的值。有遍历的需求可以使用hscan、sscan、zscan代替。</p>
<h2 id="_2、禁用命令" tabindex="-1"><a class="header-anchor" href="#_2、禁用命令" aria-hidden="true">#</a> 2、禁用命令</h2>
<p>禁止线上使用keys、flushall、flushdb等，通过redis的rename机制禁掉命令，或者使用scan的方式渐进式处理。</p>
<h2 id="_3、使用批量操作提高效率" tabindex="-1"><a class="header-anchor" href="#_3、使用批量操作提高效率" aria-hidden="true">#</a> 3、使用批量操作提高效率</h2>
<p>原生命令：例如mget、mset。
非原生命令：可以使用pipeline提高效率。
但要注意控制一次批量操作的元素个数(例如500以内，实际也和元素字节数有关)。
注意两者不同：
原生是原子操作，pipeline是非原子操作。
pipeline可以打包不同的命令，原生做不到
pipeline需要客户端和服务端同时支持。</p>
<h2 id="_4、不建议过多使用redis事务功能" tabindex="-1"><a class="header-anchor" href="#_4、不建议过多使用redis事务功能" aria-hidden="true">#</a> 4、不建议过多使用Redis事务功能</h2>
<p>Redis的事务功能较弱(不支持回滚)</p>
<h2 id="_5、monitor命令" tabindex="-1"><a class="header-anchor" href="#_5、monitor命令" aria-hidden="true">#</a> 5、monitor命令</h2>
<p>必要情况下使用monitor命令时，要注意不要长时间使用。</p>
<h1 id="_016-代码review规范" tabindex="-1"><a class="header-anchor" href="#_016-代码review规范" aria-hidden="true">#</a> 016-代码review规范</h1>
<p>转至元数据结尾</p>
<ul>
<li>由 <a href="http://wiki.huajiao.com/display/~liuyuqiang" target="_blank" rel="noopener noreferrer">刘玉强<ExternalLinkIcon/></a>创建, 最终由 <a href="http://wiki.huajiao.com/display/~zhangtengda-hj" target="_blank" rel="noopener noreferrer">张腾达<ExternalLinkIcon/></a>修改于 <a href="http://wiki.huajiao.com/pages/diffpagesbyversion.action?pageId=5013669&amp;selectedPageVersions=13&amp;selectedPageVersions=14" target="_blank" rel="noopener noreferrer">二月 08, 2022<ExternalLinkIcon/></a></li>
</ul>
<p>转至元数据起始</p>
<h1 id="一、代码逻辑" tabindex="-1"><a class="header-anchor" href="#一、代码逻辑" aria-hidden="true">#</a> 一、代码逻辑</h1>
<hr>
<h4 id="_1-项目结构统一" tabindex="-1"><a class="header-anchor" href="#_1-项目结构统一" aria-hidden="true">#</a> 1,项目结构统一</h4>
<h4 id="_2-项目模块化-遵循高内聚、低耦合" tabindex="-1"><a class="header-anchor" href="#_2-项目模块化-遵循高内聚、低耦合" aria-hidden="true">#</a> 2,项目模块化，遵循高内聚、低耦合</h4>
<h4 id="_3-避免重复代码" tabindex="-1"><a class="header-anchor" href="#_3-避免重复代码" aria-hidden="true">#</a> 3,避免重复代码</h4>
<h4 id="_4-运用设计模式、遵循solid面向对象设计原则" tabindex="-1"><a class="header-anchor" href="#_4-运用设计模式、遵循solid面向对象设计原则" aria-hidden="true">#</a> 4,运用<a href="https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%EF%BC%9A%E5%8F%AF%E5%A4%8D%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%BD%AF%E4%BB%B6%E7%9A%84%E5%9F%BA%E7%A1%80" target="_blank" rel="noopener noreferrer">设计模式<ExternalLinkIcon/></a>、遵循<a href="https://zh.wikipedia.org/wiki/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1)" target="_blank" rel="noopener noreferrer">SOLID面向对象设计原则<ExternalLinkIcon/></a></h4>
<h4 id="_5-代码符合对应语言编码规范" tabindex="-1"><a class="header-anchor" href="#_5-代码符合对应语言编码规范" aria-hidden="true">#</a> 5,代码符合对应语言编码规范</h4>
<p><a href="http://wiki.huajiao.com/pages/viewpage.action?pageId=5013949" target="_blank" rel="noopener noreferrer">012-Java编码规范<ExternalLinkIcon/></a></p>
<p><a href="http://wiki.huajiao.com/pages/viewpage.action?pageId=5013955" target="_blank" rel="noopener noreferrer"> PHP编码规范<ExternalLinkIcon/></a></p>
<h4 id="_6-代码必须进行格式化" tabindex="-1"><a class="header-anchor" href="#_6-代码必须进行格式化" aria-hidden="true">#</a> 6,代码必须进行格式化</h4>
<h4 id="_7-缓存使用" tabindex="-1"><a class="header-anchor" href="#_7-缓存使用" aria-hidden="true">#</a> 7,缓存使用</h4>
<h4 id="_8-异常处理-超时、识别、重试、报警" tabindex="-1"><a class="header-anchor" href="#_8-异常处理-超时、识别、重试、报警" aria-hidden="true">#</a> 8,异常处理 （超时、识别、重试、报警)</h4>
<h4 id="_9-分页逻辑" tabindex="-1"><a class="header-anchor" href="#_9-分页逻辑" aria-hidden="true">#</a> 9,分页逻辑</h4>
<h4 id="_10-循环问题" tabindex="-1"><a class="header-anchor" href="#_10-循环问题" aria-hidden="true">#</a> 10,循环问题</h4>
<p>​    避免循环内调用；循环尽量合并</p>
<h1 id="二、mysql使用" tabindex="-1"><a class="header-anchor" href="#二、mysql使用" aria-hidden="true">#</a> 二、Mysql使用</h1>
<hr>
<h4 id="_1-遵循mysql使用规范" tabindex="-1"><a class="header-anchor" href="#_1-遵循mysql使用规范" aria-hidden="true">#</a> 1, <a href="http://wiki.huajiao.com/pages/viewpage.action?pageId=5013953" target="_blank" rel="noopener noreferrer">遵循mysql使用规范<ExternalLinkIcon/></a></h4>
<h4 id="_2-索引、慢查询" tabindex="-1"><a class="header-anchor" href="#_2-索引、慢查询" aria-hidden="true">#</a> 2,索引、慢查询</h4>
<h4 id="_3-sql注入" tabindex="-1"><a class="header-anchor" href="#_3-sql注入" aria-hidden="true">#</a> 3,SQL注入</h4>
<h4 id="_4-事务和死锁" tabindex="-1"><a class="header-anchor" href="#_4-事务和死锁" aria-hidden="true">#</a> 4,事务和死锁</h4>
<p>事务短小，不要有远程调用。</p>
<h4 id="_5-tps" tabindex="-1"><a class="header-anchor" href="#_5-tps" aria-hidden="true">#</a> 5,TPS</h4>
<h4 id="_6-主从问题" tabindex="-1"><a class="header-anchor" href="#_6-主从问题" aria-hidden="true">#</a> 6,主从问题</h4>
<h1 id="三、redis使用" tabindex="-1"><a class="header-anchor" href="#三、redis使用" aria-hidden="true">#</a> 三、Redis使用</h1>
<hr>
<h4 id="_1-遵循使用规范" tabindex="-1"><a class="header-anchor" href="#_1-遵循使用规范" aria-hidden="true">#</a> 1, <a href="http://wiki.huajiao.com/pages/viewpage.action?pageId=5013957" target="_blank" rel="noopener noreferrer">遵循使用规范<ExternalLinkIcon/></a></h4>
<h4 id="_2-容量规划-过期时间" tabindex="-1"><a class="header-anchor" href="#_2-容量规划-过期时间" aria-hidden="true">#</a> 2,容量规划，过期时间</h4>
<h4 id="_3-qps" tabindex="-1"><a class="header-anchor" href="#_3-qps" aria-hidden="true">#</a> 3,QPS</h4>
<h4 id="_4-主从问题" tabindex="-1"><a class="header-anchor" href="#_4-主从问题" aria-hidden="true">#</a> 4,主从问题</h4>
<h4 id="_5-redis并发问题" tabindex="-1"><a class="header-anchor" href="#_5-redis并发问题" aria-hidden="true">#</a> 5,Redis并发问题</h4>
<h1 id="四、api外部调用" tabindex="-1"><a class="header-anchor" href="#四、api外部调用" aria-hidden="true">#</a> 四、API外部调用</h1>
<hr>
<h4 id="_1-调用频率" tabindex="-1"><a class="header-anchor" href="#_1-调用频率" aria-hidden="true">#</a> 1,调用频率</h4>
<h4 id="_2-是否使用缓存" tabindex="-1"><a class="header-anchor" href="#_2-是否使用缓存" aria-hidden="true">#</a> 2,是否使用缓存</h4>
<h1 id="五、消息队列-pepper-bus" tabindex="-1"><a class="header-anchor" href="#五、消息队列-pepper-bus" aria-hidden="true">#</a> 五、消息队列 pepper bus</h1>
<hr>
<h4 id="_1-消费逻辑" tabindex="-1"><a class="header-anchor" href="#_1-消费逻辑" aria-hidden="true">#</a> 1,消费逻辑</h4>
<h4 id="_2-自动重试" tabindex="-1"><a class="header-anchor" href="#_2-自动重试" aria-hidden="true">#</a> 2,自动重试</h4>
<h4 id="_3-幂等性" tabindex="-1"><a class="header-anchor" href="#_3-幂等性" aria-hidden="true">#</a> 3,幂等性</h4>
<h1 id="六、java" tabindex="-1"><a class="header-anchor" href="#六、java" aria-hidden="true">#</a> 六、Java</h1>
<hr>
<h4 id="_1-遵循编码规范" tabindex="-1"><a class="header-anchor" href="#_1-遵循编码规范" aria-hidden="true">#</a> 1, 遵循编码规范</h4>
<h4 id="_2-检查类属性和静态属性是否可回收" tabindex="-1"><a class="header-anchor" href="#_2-检查类属性和静态属性是否可回收" aria-hidden="true">#</a> 2, 检查类属性和静态属性是否可回收</h4>
<h4 id="_3-并发问题" tabindex="-1"><a class="header-anchor" href="#_3-并发问题" aria-hidden="true">#</a> 3, 并发问题</h4>
<h4 id="_4-内存溢出问题" tabindex="-1"><a class="header-anchor" href="#_4-内存溢出问题" aria-hidden="true">#</a> 4,内存溢出问题</h4>
<h1 id="_017-golang-代码规范" tabindex="-1"><a class="header-anchor" href="#_017-golang-代码规范" aria-hidden="true">#</a> 017-golang 代码规范</h1>
<p>一、目录结构</p>
<p><img src="http://wiki.huajiao.com/download/attachments/13179794/image2022-2-18_11-28-13.png?version=1&amp;modificationDate=1645155642000&amp;api=v2" alt="img"></p>
<p>二、开发规范</p>
<ul>
<li>
<p>http服务 目录结构</p>
<ul>
<li>router层 → service 层-&gt;model(manager) 层 →dao 层</li>
<li>文件、目录 命名 使用用小写下划线，</li>
</ul>
</li>
<li>
<p>grpc服务 目录结构</p>
<ul>
<li>server-&gt;service-&gt;manager→dao层</li>
<li>文件、目录 命名 使用用小写下划线</li>
</ul>
</li>
<li>
<p>代码规范</p>
<ul>
<li>
<p>变量名使用小驼峰(adStatus)，不使用下划线</p>
</li>
<li>
<p>抛出错误时，</p>
<p>不需要记录错误行时，可不使用errors进行包装</p>
<ul>
<li>http 服务 使用errors.wrap(apperr.NewError(codes,&quot;&quot;))  或 errors.new(&quot;xxx&quot;)，可从日志追踪到栈信息</li>
<li>grpc 服务  使用 err = errorx.Wrap(status.Error(codes.InvalidArgument, &quot;不支持的统计类型&quot;)) 或  err = errorx.New(&quot;不支持的统计类型&quot;)</li>
</ul>
</li>
<li>
<p>输出日志时，使用zlog.TraceInfo(...) 获取zlog 实例，日志可打印traceId</p>
</li>
</ul>
</li>
</ul>
</div></template>



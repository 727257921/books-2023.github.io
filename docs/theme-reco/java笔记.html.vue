<template><div><h1 id="_1-springboot配置mybatis的mapper路径" tabindex="-1"><a class="header-anchor" href="#_1-springboot配置mybatis的mapper路径" aria-hidden="true">#</a> 1.springboot配置mybatis的mapper路径</h1>
<p>1、创建xml目录</p>
<p>在src/main/resources/目录下新建mybatis文件夹，将xxx.xml文件放入该文件夹内（也可以创建多级目录）</p>
<p>2、在application.yml文件中配置：</p>
<p>mybatis:</p>
<p>configuration:</p>
<pre><code>mapUnderscoreToCamelCase: true
</code></pre>
<p>mapperLocations: mybatis/*Mapper.xml</p>
<p>3、在Dao接口文件中加注解@Mapper，注意使用xml文件写sql语句要将接口方法上的sql语句去掉</p>
<p>@Mapper
public interface MrInfoMapper
{
/**
* 根据条件查询MR信息
* @param param
* @return
<em>/
public List&lt;Map&lt;String, Object&gt;&gt; findByCondition(Map&lt;String, Object&gt; param);
/</em>*
* 获取页面展示数据
* @param param
* @return
*/
// @Select(&quot;<script>&quot; + &quot;SELECT&quot; + &quot; group_concat(id) id,&quot; + &quot; max(mi.mr) mr,&quot; + &quot; mi.intf_file,&quot;
// + &quot; max(mi.area) area,&quot; + &quot; max(mi.rversion) rversion,&quot; + &quot; concat(&quot;
// + &quot; ifnull(case when mi.ce='Y' then 'CE ' end,''),&quot;
// + &quot; ifnull(case when mi.ne='Y' then 'NE ' end,''),&quot;
// + &quot; ifnull(case when mi.ptn='Y' then 'PTN ' end,''),&quot;
// + &quot; ifnull(case when mi.rtn='Y' then 'RTN ' end,''),&quot;
// + &quot; ifnull(case when mi.trans='Y' then 'TRANS ' end,'')&quot; + &quot;) products,&quot;
// + &quot; group_concat(distinct mi.change_type) change_type,&quot; + &quot; max(mi.table_flag) table_flag&quot; + &quot; FROM &quot;
// + &quot; tb_mr_info mi &quot; + &quot;WHERE&quot; + &quot; mi.intf_file IS NOT NULL&quot; + &quot; AND mi.table_flag = #{searchDate} &quot;
// + &quot;&lt;if test=&quot;productList != null &quot;&gt;&quot; + &quot;&lt;foreach item=&quot;item&quot; collection=&quot;productList&quot; &gt;&quot;
// + &quot; and ${item}='Y'&quot; + &quot;</foreach>&quot; + &quot;</if>&quot; + &quot;GROUP BY&quot; + &quot; mi.intf_file&quot; + &quot;</script>&quot;)
public List&lt;HashMap&lt;String, String&gt;&gt; findDisplayData(Map&lt;String, Object&gt; param);
4、在xxxmapper.xml文件中写SQL，注意namesapce值不要写错。</p>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.huawei.nos.nosimsys.dao.MrInfoMapper">
<select id="findByCondition" parameterType="map" resultType="map">
    SELECT
        *
    FROM
        tb_mr_info tmi
    WHERE 1=1
    AND tmi.table_flag=#{searchDate}
    <if test="productList != null and productList != ''">  
        <foreach collection="productList" item="item">
            and ${item}='Y'
        </foreach>
    </if>
</select>
<h1 id="_2-java-long的赋值-java中long类型直接赋值大数字-注意事项" tabindex="-1"><a class="header-anchor" href="#_2-java-long的赋值-java中long类型直接赋值大数字-注意事项" aria-hidden="true">#</a> 2.java long的赋值_Java中long类型直接赋值大数字 注意事项</h1>
<p>在java中，我们都知道有八种基本数据类型：byte、 char、 short 、int、 long、 float、 double 、boolean</p>
<p>下面列出以下四种数据类型及其取值范围：</p>
<p>本文主要讲述，在java中，在写程序时，直接给long型赋值的问题：</p>
<p>有上述范围可知，long类型范围：-2^63 ~2^63-1,程序如下：</p>
<p>long  testLong = 1000000 * 60 * 36;　　//编译通过</p>
<p>long  totalLong = 2160000000;    　　　　//编译出错，提示&quot;The literal 2160000000 of type int is out of range&quot;</p>
<p>同样的数值，只是一个直接赋值，一个用<em>运算符连接，具体原因不再细说：编译器会在运行时计算</em></p>
<p>而将上述出错的改为下述代码即可，添加long的后缀L(大小写无所谓，但是建议大写)</p>
<p>long  totalLong = 2160000000L;　　　　//编译通过</p>
<p>为什么呢？？？参考上述long型范围，2160000000并未超出其范围？</p>
<p>原因是：在Java代码中直接书写的数字是int类型的，就是说数字的范围在 -2^31 到 2^31 - 1 这个范围之中，无论将这个数字赋值给什么类型。同样，float、double类型在书写上同理，若正确显示需加上相应的后缀F、D;否则在超出int范围时，编译出现上述错误&quot;The literal 2160000000 of type int is out of range&quot;
————————————————</p>
<h1 id="一个spring-boot的完整请求流程" tabindex="-1"><a class="header-anchor" href="#一个spring-boot的完整请求流程" aria-hidden="true">#</a> 一个Spring boot的完整请求流程</h1>
<p>1，由前端发起请求</p>
<p>uni.request({
url: this.domainUrl+&quot;/zyymall/queryorderlist/&quot;+this.cmsSiteId+&quot;/&quot;+this.VolId+&quot;/&quot;+this.orderStatus,
method: 'GET',
data:{
&quot;VolId&quot;:this.VolId,
&quot;orderStatus&quot;:this.orderStatus,
},
header: {
&quot;Content-Type&quot;: this.contenttype,
&quot;volauth&quot;:this.volauth
},
success: (res) =&gt; {
console.log(res);
if (res.statusCode == 200) {
this.orderList=res.data.orders;
console.log(this.orderList);
uni.hideLoading();
}</p>
<pre><code>			}
		});	
</code></pre>
<p>2，根据路径，Springboot会加载相应的Controller进行拦截</p>
<pre><code>@GetMapping(&quot;/queryorderlist/{cmsSiteId}/{volId}/{orderStatus}&quot;)
public ResponseEntity&lt;?&gt; queryOrderList(@PathVariable Integer cmsSiteId,@PathVariable Integer volId,@PathVariable Integer orderStatus,
		@RequestParam Map&lt;String,Integer&gt; params){
	Map&lt;String, ?&gt;cmsSite = CmsSiteCheckUtil.querySiteInfo(cmsSiteId);
	if (cmsSite.get(&quot;status&quot;) != null) {
		return ResponseEntity.ok(cmsSite);
	}
	params.put(&quot;volId&quot;, volId);
	params.put(&quot;orderStatus&quot;, orderStatus);
	return ResponseEntity.ok(mallOrderService.queryOrderList(params));
}
</code></pre>
<p>3，拦截处理后，跳转到相应的Service处理层</p>
<p>public interface MallOrderService {
/**
* 查询订单列表
* @param volId 志愿者ID,orderStatus 订单状态
* @return 返回成功或失败
*/
Map&lt;String, Object&gt; queryOrderList(Map&lt;String, Integer&gt; params);
}</p>
<p>4，跳转到ServiceImplement(service实现类)</p>
<p>@Service
public class MallOrderServiceImpl implements MallOrderService {
@Autowired
private MallOrderDao mallOrderDao;`
@Override
public Map&lt;String, Object&gt; queryOrderList(Map&lt;String, Integer&gt; params) {
Map&lt;String,Object&gt; resultMap = Maps.newConcurrentMap();
//根据用户ID查询用户订单
List<MallOrder> orderList = mallOrderDao.queryOrderListByUid(params);
if (orderList==null || orderList.isEmpty()) {
resultMap.put(&quot;status&quot;, ResponseConstants.HTTP_RESPONSE_MALL_ORDER_NULL_FAIL);
resultMap.put(&quot;msg&quot;, ResponseConstants.HTTP_RESPONSE_MALL_ORDER_NULL_FAIL_DESC);
return resultMap;
}else {
try {
for (MallOrder mallOrder : orderList) {
List<MallOrderGoods> goodsList = mallOrderDao.queryGoodsListByOrderId(mallOrder.getOrderId());
mallOrder.setMallOrderGoods(goodsList);
}
resultMap.put(&quot;orders&quot;,orderList);
} catch (Exception e) {
e.printStackTrace();
resultMap.put(&quot;status&quot;, ResponseConstants.HTTP_RESPONSE_FAIL_REGEDIT);
resultMap.put(&quot;msg&quot;, ResponseConstants.HTTP_RESPONSE_FAIL_REGEDIT_DESC);
return resultMap;
}
resultMap.put(&quot;status&quot;, ResponseConstants.HTTP_RESPONSE_SUCCESS);
resultMap.put(&quot;msg&quot;,ResponseConstants.HTTP_RESPONSE_SUCCESS_DESC);
return resultMap;
}
}</p>
<p>5，在执行serviceimplement时会加载Dao层，操作数据库</p>
<p>public interface MallOrderDao {
//根据志愿者ID查询订单
List<MallOrder> queryOrderListByUid(Map&lt;String, Integer&gt; params);</p>
<p>6，再跳到Dao层实现类</p>
<p>@Repository
public class MallOrderDaoImpl implements MallOrderDao {
@Override
public List<MallOrder> queryOrderListByUid(Map&lt;String, Integer&gt; params) {
return mallOrderMapper.queryOrderListByUid(params);
}</p>
<p>7，执行会跳转到mapper层</p>
<p>public interface MallOrderMapper {
List<MallOrder> queryOrderListByUid(Map&lt;String, Integer&gt; params);
}</p>
<p>8，然后MallMapper会继续找对应的mapper.xml配置文件</p>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.zyy.datasource.mall.mapper.MallOrderMapper">
  <resultMap id="BaseResultMap" type="org.zyy.datasource.mall.entity.MallOrder">
  	<!-- 快递号 -->
    <result column="express_no" jdbcType="VARCHAR" property="expressNo" />
    <!-- 下单时间 -->
    <result column="create_time" jdbcType="TIMESTAMP" property="createTime" />
  </resultMap>
    <select id="queryOrderListByUid" parameterType="java.lang.Integer" resultMap="BaseResultMap">
  	select * from vol_demand.mall_order
  	where vol_id =#{volId,jdbcType=INTEGER}
  	<if test="orderStatus != 3">
  		and	order_status =#{orderStatus,jdbcType=INTEGER}
  	</if>
  </select>
</mapper>
<p>之后便会跳转到第4步继续执行，执行完毕后会将结果返回到第1步，然后</p>
<p>ResponseEntity.ok(mallOrderService.queryOrderList(params));
1
便会将数据以JSON的形式返回到页面，同时返回状态码，正常则会返回200，便会回到步骤1中查询判断。</p>
<p>success: (res) =&gt; {
console.log(res);
if (res.statusCode == 200) {
this.orderList=res.data.orders;
console.log(this.orderList);
uni.hideLoading();
}</p>
<pre><code>			}
</code></pre>
<p>如果判断正常。前端根据数据遍历显示</p>
<pre><code>&lt;!-- 商品列表 --&gt;
	&lt;view class=&quot;orderlist&quot;&gt;
		&lt;view v-for=&quot;(item,index) in orderList&quot;  class=&quot;ordermenu&quot;  @tap=&quot;redirectToDetail(item)&quot;&gt;
			&lt;view&gt;
				&lt;text style=&quot;font-size: 30rpx;margin-top: 12rpx;margin-left: 12rpx;&quot;&gt;订单详情&lt;/text&gt;
				&lt;text class=&quot;orderstatus&quot; v-if=&quot;item.orderStatus==-3&quot;&gt;已拒收&lt;/text&gt;
				&lt;text class=&quot;orderstatus&quot; v-if=&quot;item.orderStatus==-2&quot;&gt;待付款&lt;/text&gt;
				&lt;text class=&quot;orderstatus&quot; v-if=&quot;item.orderStatus==0&quot;&gt;待发货&lt;/text&gt;
				&lt;text class=&quot;orderstatus&quot; v-if=&quot;item.orderStatus==1&quot;&gt;配送中&lt;/text&gt;
				&lt;text class=&quot;orderstatus&quot; v-if=&quot;item.orderStatus==2&quot;&gt;已收货&lt;/text&gt;
			&lt;/view&gt;
			&lt;view class=&quot;ptp&quot; v-for=&quot;(goodsItem,goodsIndex) in item.mallOrderGoods&quot;&gt;
				&lt;view class=&quot;shopname&quot; &gt;
					&lt;text&gt;{{goodsItem.orgName}}&lt;/text&gt;
					&lt;!-- &lt;text class=&quot;orderstatus&quot;&gt;{{orderStatusMap['goodsItem.orderStatus']}}&lt;/text&gt; --&gt;
				&lt;/view&gt;
				&lt;image :src=&quot;goodsItem.goodsTitleImg&quot; mode=&quot;scaleToFill&quot; class=&quot;image-wrapper&quot;&gt;&lt;/image&gt;
				&lt;view class=&quot;goodsprice1&quot; &gt;
					￥{{goodsItem.goodsPrice}}
					&lt;text class=&quot;goodsnum1&quot; &gt;×{{goodsItem.goodsNum}}&lt;/text&gt;
				&lt;/view&gt;
				&lt;text class=&quot;titleclamp&quot;&gt;{{goodsItem.goodsTitle}}&lt;/text&gt;
			&lt;/view&gt;
			&lt;view class=&quot;itemmoney&quot; style=&quot;&quot;&gt;合计
				&lt;text class=&quot;texthournum&quot;&gt;￥{{item.goodsMoney}}&lt;/text&gt;
			&lt;/view&gt;
		&lt;/view&gt;
	&lt;/view&gt;
</code></pre>
<p>这就是我理解的一个请求的完整流程
————————————————
版权声明：本文为CSDN博主「cchaos_li」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_43223954/article/details/103031609</p>
<h1 id="java枚举类的定义与使用" tabindex="-1"><a class="header-anchor" href="#java枚举类的定义与使用" aria-hidden="true">#</a> java枚举类的定义与使用</h1>
<p>1.定义枚举类</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public enum RedActiveStatusEnum {
    NO_START("未开始", 1),
    READY("准备中", 2),
    PROCESSING("进行中", 3),
    END_NO_FINISH("已结束领取未完成", 4),
    END_YES_FINISH("已结束领取完成", 5),
    END_FORCE("强制结束",6);

    private String name;
    private Integer value;
    private RedActiveStatusEnum(String name, Integer value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
}


2.使用枚举类
RedActiveStatusEnum.NO_START.getValue()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="java枚举类的定义及常用方法" tabindex="-1"><a class="header-anchor" href="#java枚举类的定义及常用方法" aria-hidden="true">#</a> java枚举类的定义及常用方法</h1>
<p>枚举类是Java语言列举类中普通基础的一个类。定义和class类的区别是用关键字enum修饰。定义格式如下：</p>
<p>​     {<a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassModifier" target="_blank" rel="noopener noreferrer">ClassModifier<ExternalLinkIcon/></a>} <code v-pre>enum</code> <a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-TypeIdentifier" target="_blank" rel="noopener noreferrer">TypeIdentifier<ExternalLinkIcon/></a> [<a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassImplements" target="_blank" rel="noopener noreferrer">ClassImplements<ExternalLinkIcon/></a>] <a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumBody" target="_blank" rel="noopener noreferrer">EnumBody<ExternalLinkIcon/></a></p>
<p><strong>ClassModifier 默认为public，</strong></p>
<p><a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-TypeIdentifier" target="_blank" rel="noopener noreferrer">TypeIdentifier<ExternalLinkIcon/></a> 实际为枚举类的类名 <img src="https://img2020.cnblogs.com/blog/1667912/202104/1667912-20210418163228145-1486103253.png" alt="img"></p>
<p><a href="https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumBody" target="_blank" rel="noopener noreferrer">EnumBody<ExternalLinkIcon/></a> 即为枚举类的内容。</p>
<p>body里边可以自定义方法。</p>
<p>关于文档中的构造器定义有如下需注意的地方：</p>
<p>1.<strong>构造器方法只能私有</strong>。如果没有显示声明默认也为私有。<strong>It is a compile-time error if a constructor declaration in an enum declaration is public or protected</strong></p>
<p>2.构造器方法中不能有调用父类方法的语句。<strong>It is a compile-time error if a constructor declaration in an enum declaration contains a superclass constructor invocation statement</strong></p>
<p>3.文档中声明的 （String name，int ordinal）的构造方法是隐式声明 和编译器有很大关系。</p>
<p>代码如下：</p>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> 1 enum Color {
 2      RED, GREEN, BLACK;
 3 
 4     /**
 5      * 自有实例方法
 6      */
 7 
 8     protected void saySomething(Color col) {
 9         System.out.println("调用到我了：  " + col.toString() );
10     }
11 
12      /**
13       * 自有静态方法
14       */
15     public  static void directCall() {
16         System.out.println("调用到静态方法了");
17     }
18 
19 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<p>测试方法：</p>
<p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class Test {

       public static void main(String[] args) {

           System.out.println(Arrays.toString(Color.values())); //  [RED, GREEN, BLUE]

           System.out.println(Color.values()[0].getClass()); //  class com.ioc.test.enums.Color

           System.out.println(Color.valueOf("RED")); //  RED 返回枚举值的字符串形式


           for (Color col: Color.values()) {
               System.out.println(col.ordinal()); // 返回每个枚举值在枚举中声明的下标
               col.saySomething(col); // 调用枚举类自己的实例方法
           }

          Color.directCall();


       }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码">](javascript:void(0)😉</p>
<p>输出结果：</p>
<p><img src="https://img2020.cnblogs.com/blog/1667912/202104/1667912-20210418164156770-1886945361.png" alt="img"></p>
<p>valueOf(): 返回枚举类里每个属性的字符串值</p>
<p>values(): 返回枚举类的实例。<strong>该方法由构造器提供，文档中并未列出。</strong></p>
<p>ordinal() : <strong>该方法由final修饰，只能由类的实例调用，返回每个枚举值的下标</strong>。</p>
<h1 id="枚举类的定义" tabindex="-1"><a class="header-anchor" href="#枚举类的定义" aria-hidden="true">#</a> 枚举类的定义</h1>
<p>关于枚举类</p>
<p>1 枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类，如：</p>
<p>星期：Monday（星期一）、……Sunday（星期天）
性别：Man（男）、Woman（女）
季节：Spring（春节）.……Winter（冬天）
支付方式：Cash（现金）、WeChatPay（微信）、Alipay（支付宝）、BankCard（银行卡）、CreditCard（信用卡）
就职状态：Busy、Free、Vocation、Dimission
订单状态：Nonpayment（未付款）、Paid（已付款）、Delivered（已发货）、Return（退货）、Checked（已确认）Fulfilled（已配货）、
线程状态：创建、就绪、运行、阻塞、死亡
2 当需要定义一组常量时，强烈建议使用枚类类</p>
<p>3 如果枚举类中只有一个对象，则可以作为单例模式的实现方式。</p>
<p>如何定义枚举类</p>
<p>方式一：jdk5.0之前，自定义枚举类</p>
<p>方式二：jdk5.0之后，可以使用enum关键字定义枚举类</p>
<p>jdk5.0之前定义枚举类
/**</p>
<ul>
<li>
<p>jdk5.0之前，自定义枚举类
*</p>
</li>
<li>
<p>因为枚举类不能创造其实例，且其对象有限，所以将属性和构造方法都声明为私有，只提供几个枚举类的固定对象，</p>
</li>
<li>
<p>且为public static final类型的
*/
class Season {
private final String seasonName;
private final String SeasonDesc;</p>
<p>private Season(String seasonName, String seasonDesc) {
this.seasonName = seasonName;
this.SeasonDesc = seasonDesc;
}
// 提供当前枚举类的多个对象。必须声明为public static final
public static final Season SPRING = new Season(&quot;春天&quot;, &quot;春意盎然&quot;);
public static final Season SUMMER = new Season(&quot;夏天&quot;, &quot;夏日炎炎&quot;);
public static final Season AUTUMN = new Season(&quot;秋天&quot;, &quot;秋高气爽&quot;);
public static final Season WINTER = new Season(&quot;冬天&quot;, &quot;白雪皑皑&quot;);</p>
<p>public String getSeasonName() {
return seasonName;
}</p>
<p>public String getSeasonDesc() {
return SeasonDesc;
}</p>
<p>@Override
public String toString() {
return &quot;Season{&quot; +
&quot;seasonName='&quot; + seasonName + ''' +
&quot;, SeasonDesc='&quot; + SeasonDesc + ''' +
'}';
}
}
public class SeasonTest {
public static void main(String[] args) {
// jdk5.0之前，自定义枚举类
Season autumn = Season.AUTUMN;
System.out.println(autumn);
}
}</p>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<p>jdk5.0之后定义枚举类
使用enum关键字定义枚举类
/**</p>
</li>
<li>
<p>jdk5.0之后，使用enum关键字定义枚举类
*</p>
</li>
<li>
<p>说明：定义的枚举类默认继承于java.lang.Enum类
*</p>
</li>
<li>
<p>Enum类的主要方法：</p>
</li>
<li>
<p>1 values（）方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。</p>
</li>
<li>
<p>2 valueOf（String str）：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象</p>
</li>
<li>
<p>的“名字”。如不是，会有运行时异常：IllegalArgumentException。</p>
</li>
<li>
<p>3 tostring（）：返回当前枚举类对象常量的名称
*/
enum Season {
//提供当前枚类类的对象，多个对象之间用 , 隔开，末尾对象 ; 结束
SPRING(&quot;春天&quot;, &quot;春意盎然&quot;),
SUMMER(&quot;夏天&quot;, &quot;夏日炎炎&quot;),
AUTUMN(&quot;秋天&quot;, &quot;秋高气爽&quot;),
WINTER(&quot;冬天&quot;, &quot;白雪皑皑&quot;);</p>
</li>
</ul>
<pre><code>private final String seasonName;
private final String SeasonDesc;

private Season(String seasonName, String seasonDesc) {
    this.seasonName = seasonName;
    this.SeasonDesc = seasonDesc;
}

public String getSeasonName() {
    return seasonName;
}

public String getSeasonDesc() {
    return SeasonDesc;
}

// @Override
// public String toString() {
//     return &quot;Season{&quot; +
//             &quot;seasonName='&quot; + seasonName + '\'' +
//             &quot;, SeasonDesc='&quot; + SeasonDesc + '\'' +
//             '}';
// }
}
</code></pre>
<p>public class SeasonTest {
public static void main(String[] args) {
// 1 toString方法测试：调用默认的toString方法，可自己重写String方法
Season autumn = Season.AUTUMN;
System.out.println(autumn);</p>
<pre><code>    // 2 values方法测试
    Season[] values = Season.values();
    for (Season value : values) {
        System.out.println(value);
    }

    // 3 valueOf方法测试。字符串必须是枚举类的名字，区分大小写
    Season spring = Season.valueOf(&quot;SPRING&quot;);
    System.out.println(spring);
}
</code></pre>
<p>使用enum关键字定义的枚举类实现接口
/**</p>
<ul>
<li>jdk5.0之后，使用enum关键字定义枚举类
*</li>
<li>说明：定义的枚举类默认继承于java.lang.Enum类
*</li>
<li>使用enum关键字定义的枚举类实现接口的情况：</li>
<li>情况一：在enum类中实现抽象方法</li>
<li>情况二：让枚举类的对象分别实现接口中的抽象方法
*/
interface InfoOfSeason {
void show1();
void show2();
}
enum Season implements InfoOfSeason {
//提供当前枚类类的对象，多个对象之间用 , 隔开，末尾对象 ; 结束
SPRING(&quot;春天&quot;, &quot;春意盎然&quot;){
@Override
public void show2() {
System.out.println(&quot;这是春季……&quot;);
}
},
SUMMER(&quot;夏天&quot;, &quot;夏日炎炎&quot;){
@Override
public void show2() {
System.out.println(&quot;这是夏季……&quot;);
}
},
AUTUMN(&quot;秋天&quot;, &quot;秋高气爽&quot;){
@Override
public void show2() {
System.out.println(&quot;这是秋季……&quot;);
}
},
WINTER(&quot;冬天&quot;, &quot;白雪皑皑&quot;){
@Override
public void show2() {
System.out.println(&quot;这是冬季……&quot;);
}
};</li>
</ul>
<pre><code>private final String seasonName;
private final String SeasonDesc;

private Season(String seasonName, String seasonDesc) {
    this.seasonName = seasonName;
    this.SeasonDesc = seasonDesc;
}

@Override
public void show1() {
    System.out.println(&quot;这是一个季节&quot;);
}
}
</code></pre>
<p>public class SeasonTest {
public static void main(String[] args) {
Season[] values = Season.values();
for (Season value : values) {
System.out.println(value);
value.show1();
value.show2();
System.out.println(&quot;*************&quot;);
}
}
}
————————————————</p>
<h1 id="_5-java项目连接jdbc报错-com-mysql-jdbc-exceptions-jdbc4-mysqlnontransientconnectionexception-could-not-create-connection-to-database-server" tabindex="-1"><a class="header-anchor" href="#_5-java项目连接jdbc报错-com-mysql-jdbc-exceptions-jdbc4-mysqlnontransientconnectionexception-could-not-create-connection-to-database-server" aria-hidden="true">#</a> 5.java项目连接jdbc报错：com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Could not create connection to database server</h1>
<p>java项目连接jdbc报错：com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Could not create connection to database server</p>
<p><img src="https://images2018.cnblogs.com/blog/1375459/201805/1375459-20180528100644063-696546578.png" alt="img"></p>
<p>原因：相关jar包版本太低</p>
<p>解决方法：下载最新版的mysql-connector-java即可</p>
</div></template>



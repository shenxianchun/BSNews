<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>百事新闻网</title>
<link type="text/css" href="${pageContext.request.contextPath}/css/index.css" rel="stylesheet">
<link type="text/css" href="${pageContext.request.contextPath}/css/semantic.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/index.js"></script> 
</head>
<body>
	<header>
		<input id="basePath" type="hidden" value="${pageContext.request.contextPath}">
		<div class="logo">
			<img src="${pageContext.request.contextPath}/images/logo.png">
			<div class="baishi">百事新闻网</div>
		</div>
		<div class="SearchBox">
			<form>
				<input type="text" id="search" class="searchBox" maxlength="50" size="35">
				<button id="searchBut">搜索</button>
			</form>
		</div>
		<c:choose>
			<c:when test="${username==null || username==''}">
				<div class="userRegister" id="userRegister">
					<a id="userlogon" href="#">[用户登录]</a>
					<!--*logo栏“用户登录”文字*-->
				</div>
				<div id="register" class="ui modal register">
					<i class="close icon myclose" id="close"></i>
					<div class="header registerTitle">用户登录</div>
					<div class="content">
						<div class="ui medium image">
							<img src="${pageContext.request.contextPath}/images/logo.png" style="width: 150px; height: 150px">
						</div>
						<div class="actions">
							<div class="nameLabel">
								<a class="ui teal tag label">用户名</a>
							</div>
							<div class="ui input focus userName">
								<input type="text" id="userName" placeholder="请输入用户名">
							</div>
							<div class="passwordLabel">
								<a class="ui teal tag label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</a>
							</div>
							<div class="ui input focus password">
								<input type="password" id="password"  placeholder="请输入密码">
							</div>
							<div class="reset">重置</div>
							<div class="submit">登录</div>
						</div>
					</div>
				</div>
				<div class="userLogon" id="userLogon">
					<a id="Userlogon" href="${pageContext.request.contextPath}/user/registPage.action" target="_blank">[用户注册]</a>
					<!--*logo栏“用户注册”文字*-->
				</div>
			
			</c:when>
			<c:otherwise>
				<div id="state" style="color:#000000;font-size:16px;font-family:'微软雅黑';float: right;margin-right: 90px;line-height:49px;margin-top:1.5px;">${username }</div>
				<div class="userLogon">
					<a href="#" target="_self">[退出]</a>
					<!--*logo栏“用户注册”文字*-->
				</div>
			</c:otherwise>
		</c:choose>
		
		<span id="showdate"></span>
		<nav>
			<div class="nav">
				<ul id="nav">
					<li style="background-color: #dc0000;">首页</li>
					<li>科技</li>
					<li>军事</li>
					<li>体育</li>
					<li>娱乐</li>
					<li>国际</li>
					<li>国内</li>
					<li>教育</li>
					<li>医疗</li>
					<li>健康</li>
					<li>旅游</li>
				</ul>
			</div>
		</nav>
	</header>
	<div id="content">
		<div class="con_left">
			<div class="floor1">
				<div class="f1">
					<div id="big_caption">
						<a href="comment - 1.html" target="_blank"><h2 class="floor1_h2">习近平主持深改组会议 强调让失信者寸步难行</h2></a> <span id="comment_num_LF1_f1"
							class="comment_num">50</span>
					</div>
					<div id="small_caption">
						<li class="floor1_li">李克强出席2016年夏季达沃斯论坛并发表致辞</li>
					</div>
				</div>
				<div class="f2">
					<div id="big_caption">
						<a href="comment.html" target="_blank"><h2 class="floor1_h2">蔡英文出访过境美国 所获接待规格与马英九相同</h2></a> <span id="comment_num_LF1_f2"
							class="comment_num">50</span>
					</div>
					<div id="small_caption">
						<li class="floor1_li">国产喷气式客机迎来历史性一刻</li>
					</div>
				</div>
				<div class="f3">
					<div id="big_caption">
						<a href="comment - 3.html" target="_blank"><h2 class="floor1_h2">苏格兰首席大臣称将致电欧盟：麻烦留个席位</h2></a> <span id="comment_num_LF1_f3"
							class="comment_num">50</span>
					</div>
					<div id="small_caption">
						<li class="floor1_li">英国音乐节后 留下了1000吨垃圾</li>
					</div>
				</div>
			</div>
			<div class="floor2">
				<div class="f1">
					<figure class="fig">
						<img src="${pageContext.request.contextPath}/images/hangtianyuan.jpg" />
						<figcaption>
							<p>意大利参加洞穴训练</p>
							<div></div>
						</figcaption>
					</figure>
					<h3 class="floor2_h3">中国第二批男航天员首次亮相 参加洞穴训练</h3>
					<span id="comment_num_LF2_f1" class="comment_num">50</span>
				</div>
				<div class="f2">
					<figure class="fig">
						<img src="${pageContext.request.contextPath}/images/wanke.jpg" />
						<figcaption>
							<p>万科2015年股东大会</p>
							<div></div>
						</figcaption>
					</figure>
					<h3 class="floor2_h3">王石：为了各方利益 万科一直在妥协</h3>
					<span id="comment_num_LF2_f2" class="comment_num">50</span>
				</div>
				<div class="f3">
					<figure class="fig">
						<img src="${pageContext.request.contextPath}/images/zuobi.jpg" />
						<figcaption>
							<p>印度状元涉嫌作弊</p>
							<div></div>
						</figcaption>
					</figure>
					<h3 class="floor2_h3">印度高考文理科状元涉嫌作弊：复试1道题都答不对</h3>
					<span id="comment_num_LF2_f3" class="comment_num">50</span>
				</div>
				<div class="f4">
					<figure class="fig">
						<img src="${pageContext.request.contextPath}/images/biji.jpg" />
						<figcaption>
							<p>吉林高考状元卖笔记</p>
							<div></div>
						</figcaption>
					</figure>
					<h3 class="floor2_h3">吉林高考状元卖“状元笔记” 50元一本</h3>
					<span id="comment_num_LF2_f4" class="comment_num">50</span>
				</div>
				<div class="f5">
					<figure class="fig">
						<img src="${pageContext.request.contextPath}/images/yeshengdongwu.jpg" />
						<figcaption>
							<p>野生动物非法贸易</p>
							<div></div>
						</figcaption>
					</figure>
					<h3 class="floor2_h3">云南最大网络野生动物非法贸易案告破</h3>
					<span id="comment_num_LF2_f5" class="comment_num">50</span>
				</div>
			</div>
		</div>
		<div class="con_right">
			<div class="floor1">
				<div class="theRed"></div>
				<div class="Hot">
					<img src="${pageContext.request.contextPath}/images/jinrihuati.png">
				</div>
				<div class="hot_rank">壹</div>
				<div class="hot">
					<img src="${pageContext.request.contextPath}/images/daotian.png">
					<div class="title">巨幅稻田画《大闹天宫》亮相沈阳</div>
					<div class="details">[详细]</div>
					<ul>
						<li><img class="img1" src="${pageContext.request.contextPath}/images/dian.png">盐城6·23事故头七祭：被风卷走的生活</li>
						<li><img class="img2" src="${pageContext.request.contextPath}/images/dian.png">港珠澳大桥主体桥梁成功合龙</li>
						<li><img class="img3" src="${pageContext.request.contextPath}/images/dian.png">宁夏女子被拐36年终与亲人团聚</li>
						<li><img class="img4" src="${pageContext.request.contextPath}/images/dian.png">重庆一公路隧道现场洪水不断涌出</li>
						<li><img class="img5" src="${pageContext.request.contextPath}/images/dian.png">河南大学生领毕业证当天当上四个娃的爹</li>
					</ul>
				</div>
			</div>
			<div class="floor2">
				<div class="theRed"></div>
				<div class="Hot">
					<img src="${pageContext.request.contextPath}/images/worldfeng.png" style="width: 150px; height: 30px;">
				</div>
				<div class="hot_rank">贰</div>
				<div class="hot">
					<img src="${pageContext.request.contextPath}/images/pubu.png">
					<div class="title">美国瑜伽女湍急瀑布前走扁带 高空秀一字马</div>
					<div class="details">[详细]</div>
					<ul>
						<li><img class="img1" src="${pageContext.request.contextPath}/images/dian.png">盐城6·23事故头七祭：被风卷走的生活</li>
						<li><img class="img2" src="${pageContext.request.contextPath}/images/dian.png">港珠澳大桥主体桥梁成功合龙</li>
						<li><img class="img3" src="${pageContext.request.contextPath}/images/dian.png">宁夏女子被拐36年终与亲人团聚</li>
						<li><img class="img4" src="${pageContext.request.contextPath}/images/dian.png">重庆一公路隧道现场洪水不断涌出</li>
						<li><img class="img5" src="${pageContext.request.contextPath}/images/dian.png">河南大学生领毕业证当天当上四个娃的爹</li>
					</ul>
				</div>
			</div>
			<div class="floor3">
				<div class="theRed"></div>
				<div class="Hot">
					<img src="${pageContext.request.contextPath}/images/sss.png">
				</div>
				<div class="hot_rank">叁</div>
				<div class="hot">
					<img src="${pageContext.request.contextPath}/images/xiji.png">
					<div class="title">土耳其最大城市机场发生爆炸 已致28死69伤</div>
					<div class="details">[详细]</div>
					<ul>
						<li><img class="img1" src="${pageContext.request.contextPath}/images/dian.png">盐城6·23事故头七祭：被风卷走的生活</li>
						<li><img class="img2" src="${pageContext.request.contextPath}/images/dian.png">港珠澳大桥主体桥梁成功合龙</li>
						<li><img class="img3" src="${pageContext.request.contextPath}/images/dian.png">宁夏女子被拐36年终与亲人团聚</li>
						<li><img class="img4" src="${pageContext.request.contextPath}/images/dian.png">重庆一公路隧道现场洪水不断涌出</li>
						<li><img class="img5" src="${pageContext.request.contextPath}/images/dian.png">河南大学生领毕业证当天当上四个娃的爹</li>
					</ul>
				</div>
			</div>
			<div class="floor4">
				<div class="theRed"></div>
				<div class="Hot">
					<img src="${pageContext.request.contextPath}/images/swwzs.png">
				</div>
				<div class="hot_rank">肆</div>
				<div id="lunbotu">
					<ul>
						<li>
							<div class="pointLi1" id="1"></div>
						</li>
						<li>
							<div class="pointLi2" id="2"></div>
						</li>
						<li>
							<div class="pointLi3" id="3"></div>
						</li>
						<div class="pointLi4" id="4"></div>
						</li>
						<div class="pointLi5" id="5"></div>
						</li>
					</ul>
				</div>
				<div class="label" id="l1">活着:草根网红养成记</div>
				<div class="label" id="l2" hidden>图话:逆袭的为什么总是保安？</div>
				<div class="label" id="l3" hidden>海洋馆女兽医常遭动物“恶作剧”</div>
				<div class="label" id="l4" hidden>大面积浒苔入侵胶州湾 绿潮成片如草原</div>
				<div class="label" id="l5" hidden>深圳“钉子户”占学校建设用地 要1.5亿补偿</div>
				<img class="change_left" src="${pageContext.request.contextPath}/images/left.jpg"> <img class="change_right" src="${pageContext.request.contextPath}/images/right.jpg">
			</div>
		</div>
	</div>
	<footer>
		<div class="weixin">微信官号</div>
		<div class="weibo">微博官号</div>
		<div class="lianxiwomen">联系我们</div>
		<ul>
			<li>服务协议&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>开放平台&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>广告服务&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>客服中心&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>网站招聘&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>网站导航&nbsp;&nbsp;|&nbsp;&nbsp;</li>
			<li>意见反馈</li>
		</ul>
		<div class="mail">1394518679@qq.com</div>
		<div class="banquan">wanyanpeng&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有</div>
	</footer>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/semantic.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/index_js2.js"></script>
</body>
</html>

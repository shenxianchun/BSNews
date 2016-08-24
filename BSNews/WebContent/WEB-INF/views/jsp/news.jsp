<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>百事新闻网</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/semantic.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/news.css">

</head>
<body onscroll="return window_onscroll()">
	<input id="basePath" type="hidden" value="${pageContext.request.contextPath}">
	<header>
		<!--<span id="showdate"></span>-->
		<nav>
			<div class="nav">
				<ul class="ul">
					<li>首页</li>
					<li>要闻</li>
					<li>娱乐</li>
					<li>社会</li>
					<li>国际</li>
					<li>国内</li>
					<li>军事</li>
					<li>科技</li>
					<li>体育</li>
					<li>汽车</li>
					<li>历史</li>
					<li>百科</li>
				</ul>
				<c:choose>
					<c:when test="${username == null || username =='' }">
						<div class="userRegister" id="userRegister">
							<a id="userRegister" href="#">用户登录</a>
						</div>
						<div class="userLogon" id="userLogon">
							<a id="Userlogon" href="${pageContext.request.contextPath}/user/registPage.action" target="_blank">用户注册</a>
						</div>
					</c:when>
					<c:otherwise>
						<div id="state"
							style="position: absolute; top: 0px; right: 105px; font-size: 17px; text-align: center; line-height: 49px; color: #000000; font-family: '微软雅黑'">${username }</div>
						<div class="userLogon">
							<a href="#" target="_self">[退出]</a>
							<!--*logo栏“用户注册”文字*-->
						</div>
						<input type="hidden" id="userId" value="${user.id}">
						<input type="hidden" id="userImage" value="${user.image}">
					</c:otherwise>
				</c:choose>

			</div>
		</nav>
	</header>
	<div id="content">
		<div class="main">
			<input type="hidden" id="newsId" value="${newsId }">

			<div class="content_left">
				<span class="newstitle">${news.title}</span>
				<div class="author_time">
					<span class="time">发布时间：<fmt:formatDate value="${news.publishtime}" pattern="yyyy-MM-dd HH:mm:ss" /></span> <span class="keyword">关键词：${news.keyword }</span>
					<input id="categoryId" type="hidden" value="${news.categoryid }">
				</div>
				<div class="content">${news.content}</div>
				<span style="margin-left: 400px; font-size: 18px; font-wight: 100; margin-top: 40px">责任编辑：<a href="#"
					style="text-decoration: none; color: black;" id="editor">${news.editor }</a></span>
				<div class="topic_reply">
					<h1 class="np-title">
						<strong id="first">网友评论</strong> <span>文明上网理性发言，请遵守<a href="#">新闻评论服务协议</a></span> <a class="topic" href="#"><span
							style="font-size: 30px; color: orange; font-weight: 600;" id="commentNum">19</span>条评论</a>
					</h1>
					<div class="mycomment">
						<textarea id="commentArea"></textarea>
						<div class="split">
							<div class="submitBtn">登录</div>
							<img alt="" src="" style="display: none"> <span class="np-tip-error" style="display: none"></span>
						</div>
					</div>
					<!--哈哈哈-->
					<div class="ui threaded comments allComments">
						<h3 class="ui dividing header">全部评论</h3>
						<form class="ui reply form" style="display: none">
							<div class="field">
								<textarea class="replycontent"></textarea>
							</div>
							<div class="ui blue labeled icon button" id="replyNews">
								<i class="icon edit"></i> 回复
							</div>
						</form>
					</div>
					<!--哈哈哈-->
				</div>
			</div>
		</div>
		<div class="content_right" id="content_right">
			<div id="myCard">
				<ul class="myul">
					<li class="on" name="myli">推荐</i>
					<li name="myli">热搜</li>
					<li name="myli">新鲜事</li>
				</ul>
				<div id="tuijian">
					<ul>
						<li><label class="tuijian">1</label><label class="wenzi1 huati">武汉破堤 300辆公交连夜转移上万人武汉破堤 300辆公交连夜转移上万人</label></li>
						<li><label class="tuijian">2</label><label class="wenzi2 huati">光棍村的期盼：菩萨保佑我早日娶妻</label></li>
						<li><label class="tuijian">3</label><label class="wenzi3 huati">小伙借高利贷结婚 3天后妻子不辞而别</label></li>
						<li><label class="tuijian">4</label><label class="wenzi4 huati">尼泊尔神秘民族 居无定所捕食猴子</label></li>
						<li><label class="tuijian">5</label><label class="wenzi5 huati">男子堆起大钞“炫富” 钞票上印这4字</label></li>
						<li><label class="tuijian">6</label><label class="wenzi6 huati">航拍江苏洪灾区 大片楼房汽</label></li>
						<li><label class="tuijian">7</label><label class="wenzi7 huati">中国无臂女童被美国夫妇收养 用脚吃饭</label></li>
					</ul>
				</div>
				<div class="hidden" id="resou">
					<ul>
						<li><label class="tuijian">1</label><label class="wenzi1 huati">上海电影节创投十年：资本如何改变了年轻的电影人</label></li>
						<li><label class="tuijian">2</label><label class="wenzi2 huati">光棍村的期盼：菩萨保佑我早日娶妻</label></li>
						<li><label class="tuijian">3</label><label class="wenzi3 huati">小伙借高利贷结婚 3天后妻子不辞而别</label></li>
						<li><label class="tuijian">4</label><label class="wenzi4 huati">网民吐槽降费方案:谁半夜上网</label></li>
						<li><label class="tuijian">5</label><label class="wenzi5 huati">美国摄影师拍摄中国富人阶层生活</label></li>
						<li><label class="tuijian">6</label><label class="wenzi6 huati">洋小伙挑战春运打工卖板砖求票</label></li>
						<li><label class="tuijian">7</label><label class="wenzi7 huati">中国无臂女童被美国夫妇收养 用脚吃饭</label></li>
					</ul>
				</div>
				<div class="hidden" id="xinxianshi">
					<ul>
						<li><label class="tuijian">1</label><label class="wenzi1 huati">重庆“双胞胎村” 全村共39对双胞胎</label></li>
						<li><label class="tuijian">2</label><label class="wenzi2 huati">女孩不让男友湿鞋 背其淌水过马路</label></li>
						<li><label class="tuijian">3</label><label class="wenzi3 huati">病人家属不听劝 轮椅吸上核磁共振仪</label></li>
						<li><label class="tuijian">4</label><label class="wenzi4 huati">陕西大巴坠崖已致30人遇难</label></li>
						<li><label class="tuijian">5</label><label class="wenzi5 huati">汽车冲进河道 女司机爬窗逃生</label></li>
						<li><label class="tuijian">6</label><label class="wenzi6 huati">网友吐槽：总理 他们又骗人呀</label></li>
						<li><label class="tuijian">7</label><label class="wenzi7 huati">TFboys到底有多红？</label></li>
					</ul>
				</div>
			</div>
		</div>
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
					<a class="ui teal tag label">用户密码</a>
				</div>
				<div class="ui input focus password">
					<input type="password" id="password" placeholder="请输入密码">
				</div>
				<div class="reset">重置</div>
				<div class="submit">登录</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/semantic.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/news.js"></script>
</body>
</html>

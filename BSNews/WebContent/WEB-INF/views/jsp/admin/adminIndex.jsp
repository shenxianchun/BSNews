<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>左侧导航</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
	$(".leftsidebar_box dt").css({"background-color":"#3992d0"});
	$(".leftsidebar_box dt img").attr("src","images/left/select_xl01.png");
	$(function(){
		$(".leftsidebar_box dd").hide();
		$(".leftsidebar_box dt").click(function(){
			$(".leftsidebar_box dt").css({"background-color":"#3992d0"})
			$(this).css({"background-color": "#317eb4"});
			$(this).parent().find('dd').removeClass("menu_chioce");
			$(".leftsidebar_box dt img").attr("src","images/left/select_xl01.png");
			$(this).parent().find('img').attr("src","images/left/select_xl.png");
			$(".menu_chioce").slideUp(); 
			$(this).parent().find('dd').slideToggle();
			$(this).parent().find('dd').addClass("menu_chioce");
		});
		function Hid(){
		   $(".fname").css("display","none");
		}
		$("#newc").bind("click",function(){
		    Hid();
		   $("#newcontrol").css("display","inline");
		});
		$("#commentc").bind("click",function(){
		   Hid();
		   $("#commentcontrol").css("display","inline");
		});
		$("#delUser").bind("click",function(){
		   Hid();
		   $("#usercontrol").css("display","inline");
		});
		$("#newCategory").bind("click",function(){
		   Hid();
		   $("#newsCategorycontrol").css("display","inline");
		});
		$("#allUser").bind("click",function(){
		   Hid();
		   $("#allUser_cahrt").css("display","inline");
		});
		$("#clickCategoryRate").bind("click",function(){
		   Hid();
		   $("#clickCategoryRate_cahrt").css("display","inline");
		});
		$("#gender").bind("click",function(){
		   Hid();
		   $("#gender_cahrt").css("display","inline");
		});
		$("#age").bind("click",function(){
		   Hid();
		   $("#age_cahrt").css("display","inline");
		});
		$("#clickNewsRate_chart").bind("click",function(){
		   Hid();
		   $("#clickNewsRate_chart_1").css("display","inline");
		});
		$("#dynamicLine").bind("click",function(){
		   Hid();
		   $("#dynamicLineflash").css("display","inline");
		});
		$("#newp").bind("click",function(){
		   Hid();
		   $("#publish").css("display","inline");
		});
	})
	
</script>
</head>

<body id="bg">

<div >

	<div class="leftsidebar_box">
		<div class="line"></div>
		<dl class="system_log">
			<dt id="dynamicLine">用户管理<img src="${pageContext.request.contextPath}/images/left/select_xl01.png"/></dt>
			<dd class="first_dd" id="delUser">删除用户 </dd>
			<dd id="allUser">用户注册统计</dd>
			<dd id="gender">男女分类统计</dd>
			<dd id="age">年龄分统计类</dd>
		</dl>
	
		<dl class="custom">			
			<dt >新闻管理<img src="${pageContext.request.contextPath}/images/left/select_xl01.png"/></dt>
			<dd class="first_dd" id="newCategory">新闻分类</dd>
			<dd id="newc">新闻操作</dd>
			<dd id="newp">新闻发布</dd>
		</dl>
	
		<dl class="channel">
			<dt>评论管理<img src="${pageContext.request.contextPath}/images/left/select_xl01.png"/></dt>
			<dd class="first_dd" id="commentc">评论操作</dd>
		</dl>
	
		<dl class="app">
			<dt>点击率<img src="${pageContext.request.contextPath}/images/left/select_xl01.png"/></dt>
			<dd class="first_dd" id="clickCategoryRate">新闻类别点击率</dd>
			<dd id="clickNewsRate_chart">新闻点击率</dd>
		</dl>	
	</div>
   
</div>
<div class="fdiv">
 <iframe name="fname" src="${pageContext.request.contextPath}/news/newsManagePage.actoin" class="fname" id="newcontrol"></iframe>
  <iframe name="fname" src="commentManage.jsp" class="fname" id="commentcontrol"></iframe>
  <iframe name="fname" src="userManage.jsp" class="fname" id="usercontrol"></iframe>
  <iframe name="fname" src="newsCategoryManage.jsp" class="fname" id="newsCategorycontrol"></iframe>
  <iframe name="fname" src="allUser_chart.jsp" class="fname" id="allUser_cahrt"></iframe>
  <iframe name="fname" src="gender_chart.jsp" class="fname" id="gender_cahrt"></iframe>
  <iframe name="fname" src="clickCategoryRate_chart.jsp" class="fname" id="clickCategoryRate_cahrt"></iframe>
  <iframe name="fname" src="age_chart.jsp" class="fname" id="age_cahrt"></iframe>
  <iframe name="fname" src="clickNewsRate_chart.jsp" class="fname" id="clickNewsRate_chart_1"></iframe>
  <iframe name="fname" src="dynamicLine.jsp" class="fname" id="dynamicLineflash"></iframe>
  <iframe name="fname" src="publish.jsp" class="fname" id="publish"></iframe>
</div>
</body>
</html>

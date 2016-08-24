<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>用户注册</title>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/regist.css">
<meta charset="utf-8">
</head>
<body>
<img src="${pageContext.request.contextPath}/images/logo2.png" id="logo">
<span class="baishi">百事新闻网</span>
<div class="form">
<input id="basePath" type="hidden" value="${pageContext.request.contextPath}">
	<form action="${pageContext.request.contextPath}/user/regist.action" method="post" enctype="multipart/form-data" id="regist">
	<span class="title">用户注册</span>
	<label class="name_label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label><input name="username" type="text" id="userName" class="userName text" maxlength="20" size="12">
	<label class="set_label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label><input name="password" type="password" id="setPassword" class="setPassword text" maxlength="20" size="12">
	<label class="sure_label">确认密码</label><input type="password" id="surePassword" class="surePassword text" maxlength="20" size="12">
	<label class="gender_label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label><input type="radio" id="gender1" name="gender" class="gender_radio1 radio" checked><label class="nv">女</label> 
	<input type="radio" id="gender2" name="gender" class="gender_radio2 radio"><label class="nan">男</label>
	<input type="hidden" name="sex" id="sex">
	<input type="hidden" id="registtime" name="registtime">
	<label class="birth_label">出生日期</label>	<input  type="date" id="birth" class="birth_date"><input name="birthday" type="hidden" class="birth">	
	<label class="mail_label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</label><input name="email" type="text" id="mail" class="mail text">	
	<label class="photo_label">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像</label><img id="photo" class="photo_img" src="">	
	<input type="file" name="user_pic" id="photo_upload"/>
	</form>
	<button id="submit">注册</button>			 
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/regist.js"></script>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>百事新闻管理者登录</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<!-- CSS -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/assets/css/reset.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/assets/css/supersized.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/assets/css/style.css">
<script src="${pageContext.request.contextPath}/css/assets/js/jquery-1.8.2.min.js" ></script>
<script src="${pageContext.request.contextPath}/css/assets/js/supersized.3.2.7.min.js" ></script>
<script src="${pageContext.request.contextPath}/css/assets/js/supersized-init.js" ></script>
<script src="${pageContext.request.contextPath}/css/assets/js/scripts.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/managerlogin.js"></script>
</head>
<body>
<img src="${pageContext.request.contextPath}/images/logo2.png" id="logo">
<span class="baishi">百事新闻网</span>
<div class="page-container">
  <h1>管理者登录</h1>
  	<form action="${pageContext.request.contextPath}/admin/login.action">
    <input type="hidden" value="${pageContext.request.contextPath}">
    <input type="text"  class="username" placeholder="请输入您的用户名！">
    <input type="password"  class="password" placeholder="请输入您的用户密码！">
    <button class="submit_button">登录</button> 
    <div class="error"><span>+</span></div>
    </form>
</div>
</body>
</html>

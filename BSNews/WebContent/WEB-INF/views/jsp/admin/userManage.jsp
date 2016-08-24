<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" > 
<title>用户管理</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/newsCategory.css">
<link rel="stylesheet" type="text/css"  href="${pageContext.request.contextPath}/css/semantic.min.css">
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/semantic.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/userManage.js" type="text/javascript"></script>
</head>
<body>
<img src="../images/logo2.png" id="logo">
<span class="baishi">百事新闻网</span>
<table id="table" class="ui compact celled definition table" >
  <thead>
    <tr style="text-align:center;">
      <th style="width:50px"></th>
      <th>用户名</th>
      <th>用户密码</th>
	  <th>性别</th>
	  <th>生日</th>
	  <th>电子邮件</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody id="tbody">
  <form id="userManage">
    
  </form>
</table>
<table class="ui compact celled definition table">
 <tfoot class="full-width">
    <tr>
      <th colspan="5">
	  <button class="small ui button checkAll">全选</button>
	  <button class="small ui button unCheck">不选</button>
	  <button class="small ui button otherCheck">反选</button>
	  <button class="ui primary button delChecked">删除选中项</button>
      </th>
    </tr>
  </tfoot>
</table>
</body>
</html>

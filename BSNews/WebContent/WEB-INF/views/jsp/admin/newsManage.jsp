<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>新闻管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/semantic.min.css">
<link href="${pageContext.request.contextPath}/css/table.css" rel="stylesheet" type="text/css">
</head>
<body link="#FFFFFF" alink="#F0F0F0">
<div>
<button class="ui inverted olive button" id="ckall" onClick="ckALL()">全选</button>
<button class="ui inverted purple button" id="deselect" onClick="ckALL2()">取消</button>
<button class="ui inverted red button" id="delect" onClick="deleteRow()">删除</button>
</div>
<div id="div1">
<table class="ui compact celled definition table" id="table" >
 
    <tr>
      <th id="checklength"></th>
      <th>标题</th>
      <th>分类</th>
      <th>发布时间</th>
	  <th>关键字</th>
	  <th>作者</th>
	  <th></th>
    </tr>
</table>
</div>
 <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/semantic.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/newsManage.js"></script>
</body>
</html>

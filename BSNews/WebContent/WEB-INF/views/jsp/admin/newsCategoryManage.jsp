<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" > 
<title>新闻分类管理</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/newsCategory.css">
<link rel="stylesheet" type="text/css"  href="${pageContext.request.contextPath}/js/semantic.min.css">

<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/semantic.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/newsCategory.js" type="text/javascript"></script>
</head>
<body>
<img src="../images/logo2.png" id="logo">
<span class="baishi">百事新闻网</span>
<table id="table" class="ui compact celled definition table" >
  <thead>
    <tr style="text-align:center;">
      <th style="width:50px"></th>
      <th>分类编号</th>
      <th>分类名称</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody id="tbody">
  <form id="newsCategory">

  </form>
  </tbody>
</table>
<table class="ui compact celled definition table">
 <tfoot class="full-width">
    <tr>
      <th colspan="5">
	  <button class="small ui button checkAll">全选</button>
	  <button class="small ui button unCheck">不选</button>
	  <button class="small ui button otherCheck">反选</button>
      <button class="small ui button delChecked">删除选中项</button>
	  <button class="ui primary button addRow">添加分类</button>
      </th>
    </tr>
  </tfoot>
</table>
</body>
</html>


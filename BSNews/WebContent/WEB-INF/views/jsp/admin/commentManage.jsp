<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" /> 
<title>评论管理</title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/js/semantic.min.css">
<link href="${pageContext.request.contextPath}/css/table.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/semantic.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/commentManage.js"></script>
</head>
<body link="#FFFFFF" alink="#F0F0F0">
<div id="div1">
  <div class="ui inverted segment" style="background-color:#3992d0">
    <div class="ui category search">
      <div class="ui icon input">
        <input class="prompt" type="text" placeholder="请输入新闻关键字">
      </div>
      <button class="ui inverted grey button">搜索</button>
    </div>
  </div>
  <table class="ui compact celled definition table" id="table" >
    <tr>
      <th id="checklength" style="width:50px"></th>
      <th>用户名</th>
      <th>评论内容</th>
      <th>发布时间</th>
      <th>点赞</th>
      <th></th>
    </tr>
  </table>
  <div>
    <button class="ui inverted olive button" id="ckall" onClick="ckALL()">全选</button>
    <button class="ui inverted purple button" id="deselect" onClick="ckALL2()">取消</button>
    <button class="ui inverted red button" id="delect" onClick="deleteRow()">删除</button>
  </div>
</div>
<!--查看评论信息-->
<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    <font style="font-size:24px">评论详情</font>
  </div>
  <div class="content">
    <div>
       <font style="font-size:18px;color:#00FFCC">用户名称：</font><span id="yhm"></span>
    </div>
    <div>
	   <font style="font-size:18px; color:#00FFCC">评论内容:</font><div id="plnr" style="width:700px; height:auto; display:inline; word-spacing:inherit"></div>
    </div>
	<div>
	   <font style="font-size:18px;color:#00FFCC">发布时间:</font><span id="fbsj"></span>
	</div>
	<div>
	   <font style="font-size:18px;color:#00FFCC">点赞数:</font><span id="dzs"></span>
	</div>
  </div>
  <div class="actions">
    <div class="ui inverted blue button" id="close">
      关闭
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>

</body>
</html>

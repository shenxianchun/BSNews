<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>用户人数统计表</title>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/allUser_chart.css">
</head>

<body style=" background-color:#FFF">
<span class="chart_title">2016年1月份——12月份注册用人数统计表</span>
<div id="allUser"></div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/echarts-all.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/allUser_chart.js"></script>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>用户年龄比例表</title>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/age_chart.css">
</head>

<body style=" background-color:#FFF">
<span class="chart_title">注册用户年龄比例表</span>
<div id="gender"></div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/echarts-all.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/age_chart.js"></script>
</body>
</html>

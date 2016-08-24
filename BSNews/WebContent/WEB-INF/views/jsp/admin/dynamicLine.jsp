<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.5"/>
<title></title>

</head>
<body>

<style type="text/css">
*{margin:0;padding:0;}
.headline-bg{
	height:680px;
	overflow:hidden;
	background:-webkit-linear-gradient(top,#0076d1,#5db8ff);
	background:-moz-linear-gradient(top,#0076d1,#5db8ff);
	background:-o-linear-gradient(top,#0076d1,#5db8ff);
	background:-ms-linear-gradient(top,#0076d1,#5db8ff)
}
</style>

<div class="headline-bg">
    <canvas id="waves" class="waves"></canvas>
</div>


<script src="${pageContext.request.contextPath}/js/vendors.js"></script>
<script src="${pageContext.request.contextPath}/js/index.js"></script>

</body>
</html>
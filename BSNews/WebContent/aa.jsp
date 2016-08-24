<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
</head>
<body>
	用户名:<input id="username">
	密码：<input id="password">
	<input id="sub" type="button" value="提交">
<script type="text/javascript">
		$("#sub").click(function(){
			var search = {}
			search["username"] = $("#username").val();
			search["password"] = $("#password").val();
			$.ajax({
				type:'post',
				url:'${pageContext.request.contextPath }/user/login.action',
				//请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
				contentType:'application/json;charset=utf-8',
				//数据格式是json串，商品信息
				data:JSON.stringify(search),
				success:function(data){//返回json结果
					alert(data.username);
				}
			});
		})
</script>
</body>
</html>
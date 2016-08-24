$(document).ready(function() {
	$(".submit_button").bind("click", function() {
		var Mname = $(".username")
	})
	var basepath =$("#basepath")
	$(".submit_button").click(function() {
		//用户登录
		$(".submit").click(function(){
			var jsonData = {}
			jsonData["adminname"] = $(".username").val();
			jsonData["adminpassword"] = $("#adminpassword").val();
			$.ajax({
				type : 'post',
				url : basePath+'/amdin/login.action',
				// 请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
				contentType : 'application/json;charset=utf-8',
				// 数据格式是json串
				data : JSON.stringify(jsonData),
				success : function(data) {// 返回json结果
					$('.ui.modal').modal('hide');
					window.location.href=basePath+"/news/newsIndex/"+$("#newsId").val()+"/"+data.id
				},
				error : function(data) {
					alert("系统异常")
				}
			});
		})
	})
})
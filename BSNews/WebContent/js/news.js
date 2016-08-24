$(document)
		.ready(
				function() {	
					var basePath = $("#basePath").val();
				
					$(".submitBtn").click(function() {
						$(".ui.modal").modal('show');
					})
					$("#userRegister").click(function() {
						$(".ui.modal").modal('show');
					})
					$("#close").click(function() {
						$('.ui.modal').modal('hide');
					})
					//加载分类信息
					$.ajax({
						url : basePath+"/category/findAll.action",
						type : "POST",
						dataType : "json",
						contentType : "json/application",
						cache : false,
						async : false,
						data : {},
						success : function(result) {
							$(".nav").children(".ul").empty();
							$(".nav").children(".ul").append('<li>首页</li>');
							var categoryId = $("#categoryId").val();
							for (var i = 0; i < result.length; i++) {
								$(".nav").children(".ul").append("<li class='" + result[i].id + "'>" + result[i].categoryname + "</li>")
							}
							if(categoryId!=null&&categoryId!=''){
								$("."+categoryId).css("background-color"," #dc0000");
							}
						},
						error : function(result) {
							alert("系统异常，请稍后重试！");
						}
					});
					//用户登录
					$(".submit").click(function(){
						var jsonData = {}
						jsonData["username"] = $("#userName").val();
						jsonData["password"] = $("#password").val();
						$.ajax({
							type : 'post',
							url : basePath+'/user/login.action',
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
					//用户退出登录
					$(".userLogon").click(function(){
						$.ajax({
							type : 'post',
							url : basePath+'/user/quit.action',
							// 请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
							contentType : 'application/json;charset=utf-8',
							// 数据格式是json串
							data : {},
							success : function(data) {// 返回json结果
								if(data){
									window.location.href=basePath+"/news/selectByPrimaryKey/"+$("#newsId").val();
								}
								else{
									alert("系统异常,请稍后重试！")
								}
							},
							error : function(data) {
								alert("系统异常,请稍后重试！")
							}
						});
					})
					//显示所有用户评论
					$.ajax({
						url : basePath+"/comment/findCommentsList.action",
						type : "POST",
						dataType : "json",
						// 请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
						contentType : 'application/json;charset=utf-8',
						cache : false,
						async : false,
						data :JSON.stringify({
							"nid":$("#newsId").val()
						}),
						success : function(commentList) {
							console.log(commentList);
							$("#commentNum").text(commentList.length);
							for (var i = 0; i < commentList.length; i++) {
								
								$(".allComments").append(
										"<div class=\"comment\">" + "<a class=\"avatar\"><input class='eachCommentId' type='hidden' value='" + commentList[i].id
												+ "'><img src=\"" + commentList[i].image + "\">" + "</a>" + "<div class=\"content\">"
												+ "<a class=\"author\">" + commentList[i].username + "</a>" + "<div class=\"metadata\">"
												+ "		<span class=\"date\">" +getMyDate(commentList[i].publishtime) + "</span>"
												+ "	</div>" + "	<div class=\"text\">" + commentList[i].comment + "</div>"
												+ "	<div class=\"actions\">"
												+ "	<input type='hidden' class='statue' value='0'><a class=\"support\"><i class=\"pointing up icon\"></i>赞(<span class=\"upNum\">"
												+ commentList[i].up + "</span>)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
												+ "		<a class=\"reply\"><i class=\"reply icon\"></i>回复</a>" + "	</div>" + "</div>"
												+ "</div>");
							}
						}
					
					})
					
				

					$(function() {
					
						var state = $("#state").html();

						if (state != "" && state != null) {
							
							$(".submitBtn").attr('id', 'submitReply');
							$("#submitReply").html("提交");
							$(".np-tip-error").css("display", "block");
							$(".np-tip-error").prev().css("display", "block");
							$("#submitReply").unbind();
			
							$("#submitReply")
									.click(
											function() {
											
												var publishtime = new Date();
												var comment = $("#commentArea").val();
												alert($("#userId").val())
												var jsonData={}
												jsonData["nid"] = $("#newsId").val()
												jsonData["uid"] = $("#userId").val()
												jsonData["comment"] = comment
												jsonData["publishtime"]=publishtime;
												
												//添加用户评论
												$.ajax({
													type : 'post',
													url : basePath+'/comment/addComment.action',
													// 请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
													contentType : 'application/json;charset=utf-8',
													// 数据格式是json串
													data : JSON.stringify(jsonData),
													success : function(data) {// 返回json结果
														/** *************1.添加用户回复***************** */
													
														$("#commentArea").val("");
														$(".allComments")
																.append(
																		"<div class=\"comment\">"
																				+ "<a class=\"avatar\"> <img src=\""
																				+ $("#userImage").val()
																				+ "\">"
																				+ "</a>"
																				+ "<div class=\"content\">"
																				+ "<a class=\"author\">"
																				+ state
																				+ "</a>"
																				+ "<div class=\"metadata\">"
																				+ "		<span class=\"date\">"
																				+ publishtime.getMonth() + "-"
																				+ publishtime.getDay() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
																				+ publishtime.getHours()+ ":" + publishtime.getMinutes()
																				+ "</span>"
																				+ "	</div>"
																				+ "	<div class=\"text\">"
																				+ comment
																				+ "</div>"
																				+ "	<div class=\"actions\">"
																				+ "	<input type='hidden' class='statue' value='0'><a class=\"support\"><i class=\"pointing up icon\"></i>赞(<span class=\"upNum\">0</span>)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
																				+ "		<a class=\"reply\"><i class=\"reply icon\"></i>回复</a>"
																				+ "	</div>" + "</div>" + "</div>");

													},
													error : function() {
														alert("系统异常,请稍后重试！")
													}
												});			
								})
						}
					})
					

					var flag = false;
					var author;
					$(".allComments")
							.click(
									function(event) {
										// $(".replycontent").val()

										var e = $(event.target);
										if (e.parent().attr('class') == "actions" && e.attr('class') == "reply") {
											$(".form").remove();
											flag = false;
											if (flag == false) {
												author = e.parent().parent().children(".author").html();
												e
														.parent()
														.parent()
														.parent(".comment")
														.append(
																"<form class='ui reply form'><div class='field'><textarea class='replycontent'></textarea></div><div class='ui blue labeled icon button' id='replyNews'><i class='icon edit'></i> 回复</div></form>");
												flag = true;
											}
											else {
												e.parent().parent().parent(".comment").children(".form").remove();
												flag = false;
											}
										}
										if (e.parent().parent().attr('class') == "actions" && e.attr('class') == "reply icon") {
											$(".form").remove();
											flag = false;
											if (flag == false) {
												author = e.parent().parent().children(".author").html();
												e
														.parent()
														.parent()
														.parent()
														.parent(".comment")
														.append(
																"<form class='ui reply form'><div class='field'><textarea class='replycontent'></textarea></div><div class='ui blue labeled icon button' id='replyNews'><i class='icon edit'></i> 回复</div></form>");
												flag = true;
											}
											else {
												e.parent().parent().parent().parent(".comment").children(".form").remove();
												flag = false;
											}
										}
									
										// 控制赞的颜色以及数字
										if (e.attr('class') == "support") {
											
											if(e.prev('.statue').val()=="0"){
											//更新赞的数量ajax	
											var element = e.children('.upNum');
											element.prev().addClass("red");
											e.prev('.statue').val(1)
											var upNumber =parseInt(element.html()) + 1
											element.html(upNumber);
											upclick($(".eachCommentId").val(),upNumber,basePath)
											}
										}
										if (e.attr('class') == "pointing up icon") {
											if(e.parent().prev('.statue').val()=="0"){
												var element = e.next('.upNum');
												element.prev().addClass("red");
												e.parent().prev('.statue').val(1)
												var upNumber = parseInt(element.html()) + 1
												element.html(upNumber);
												upclick($(".eachCommentId").val(),upNumber,basePath)
											}
										}
										if (e.attr('id') == "replyNews") {

											e
													.parent()
													.parent()
													.append(
															"<div class='comment'><a class='avatar'><img src='/BSNews/images/avatar/small/matt.jpg'></a><div class='content'><a class='author'>想飞的鱼</a><div class='metadata'><span class='date'>"
																	+ new Date().getHours()
																	+ ":"
																	+ new Date().getMinutes()
																	+ "</span></div><div class='text'>"
																	+ $(".replycontent").val()
																	+ "</div><div class='actions'><a class='reply'>回复@"
																	+ author
																	+ "</a></div></div></div>");
											$(".form").remove();
										}
									})

})
function upclick(cid,upNumber,basePath){
	var jsonData = {}
	jsonData["id"]=cid;
	jsonData["up"]=upNumber
	$.ajax({
		type : 'post',
		url : basePath+'/comment/updateByPrimaryKeySelective.action',
		// 请求是key/value这里不需要指定contentType，因为默认就 是key/value类型
		contentType : 'application/json;charset=utf-8',
		// 数据格式是json串
		data : JSON.stringify(jsonData),
		success:function(){
			
		}
	});
}
//将毫秒数转化成时间
  function getMyDate(str){  
            var oDate = new Date(str),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oTime = oMonth +'-'+ oDay +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ oHour +':'+ oMin;//最后拼接时间  
            return oTime;  
};  

window.onload=function(){  
	var myli=document.getElementsByName("myli");
    var myCard=document.getElementById("myCard");
    var myDiv=myCard.getElementsByTagName("div");
    for(var i=0;i<myli.length;i++){
        myli[i].index=i;
       // myli[i].onclick=function(){
		  myli[i].onmouseover=function(){
            for(var j=0;j<myli.length;j++){
                myli[j].className="";
                myDiv[j].className="hidden";
            }
            this.className="on";
            myDiv[this.index].className="";
        }
    }  
}
function getPosition(node){
	var top=node.offsetTop;
	var parent=node.offsetParent;
	while(parent!=null){
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return top;
}
function window_onscroll(){
	var myDiv=document.getElementById("content_right");
	var Top=getPosition(myDiv);
	//alert(Top);
	//alert(document.body.scrollTop);
	document.getElementById("content_right").style.top=document.body.scrollTop+"px";
}
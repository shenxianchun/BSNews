$(document).ready(
		function() {
			//绝对路径的根路径
			var basePath=$("#basePath").val();
			//点击登录的时候弹出登录框
			$(".userRegister").click(function() {
				$(".ui.modal").modal('show');
			})
			//关闭登录框
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
				data : {

				},
				success : function(result) {
					//添加分类信息
					$("#nav").children('li').remove();
					$("#nav").append('<li style="background-color: #dc0000;">首页</li>');
					for (var i = 0; i < result.length; i++) {
						$("#nav").append("<li class='" + result[i].id + "'>" + result[i].categoryname + "</li>")
					}
				},
				error : function(result) {
					alert("系统异常，请稍后重试！");
				}// 这里不要加","
			});
			
			$(".userLogon").children('a').click(function(){
				$.ajax({
					url : basePath+"/user/quit.action",
					type : "POST",
					dataType : "json",
					contentType : "json/application",
					cache : false,
					async : false,
					data : {},
					success : function(result) {
						if(result){
							//重定向至首页
							window.location.href=basePath+"/user/index.action";
						}else{
							alert("系统异常，请稍后重试！")
						}
					},
					error : function(result) {
						alert("系统异常，请稍后重试！");
					}// 这里不要加","
				});
			})
			
			// /**
			// * 按点击率来排行的新闻
			// */
			$.ajax({
				url : basePath+"/news/findByClickRatio.action",
				type : "POST",
				dataType : "json",
				contentType : "json/application",
				cache : false,
				async : false,
				data : {},
				success : function(list) {
					$(".con_left").children(".floor1").children().remove();

					for (var i = 0; i < list.length; i += 2) {
						var clickratioCount = list[i].clickratio;
						//点击率超过一万的显示XX万
						if (clickratioCount >= 10000) {
							clickratioCount /= 10000;
							clickratioCount = parseInt(clickratioCount) + "万";
						}
						$(".con_left").children(".floor1").append(
								"<div style='width:660px;height:90px;border-bottom:solid 1px #CCCCCC;position:absolute;left:5px;top:"
										+ (5 + parseInt(i / 2) * 110) + "px;'><input type='hidden' value='" + list[i].id
										+ "'><div id='big_caption'><a target='_blank' id='_title'><h2 class='floor1_h2'>" + list[i].title
										+ "</h2></a><span id='comment_num_LF1_f1' class='comment_num'>" + clickratioCount
										+ "</span> </div><div id='small_caption'><input type='hidden' value='" + list[i + 1].id
										+ "'><li class='floor1_li'>" + list[i + 1].title + "</li></div></div>")

					}
				},
				error : function(result) {
					alert("系统异常，请稍后重试！");
				}// 这里不要加","
			});
			/**
			 * 有图片的按最新发布时间来排序的新闻
			 */
			// $.ajax({
			// url : "imageHotNews.action",
			// type : "POST",
			// dataType : "json",
			// cache : false,
			// async : false,
			// data : {},
			// success : function(result) {
			// var newsList = eval("(" + result + ")");
			// var list = newsList[0].newsList
			// var j = 1;
			// for (var i = 0; i < list.length; i++) {
			// $(".con_left").children(".floor2").append("<div style='width:
			// 660px;height: 190px;border-bottom: solid 1px #CCCCCC;position:
			// absolute;top: "+parseInt(5+i*200)+"px;left: 5px;'><figure
			// class=\"fig\"><input class='hidnewsId'type='hidden' value='"
			// + list[i].id + "'><imgsrc=\"" + list[i].image +
			// "\"/><figcaption><p>" + list[i].keyword
			// +
			// "</p><divclass='photo'></div></figcaption></figure><h3class=\"floor2_h3\">"
			// + list[i].title
			// + "</h3><spanid=\"comment_num_LF2_f1\"class=\"comment_num\">" +
			// list[i].clickratio
			// + "</span> </div>");
			// }
			// },
			// error : function(result) {
			// alert("系统异常，请稍后重试！");
			// }// 这里不要加","
			// });
			// 登录操作
			$(".submit").click(function() {
				//
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
						window.location.href=basePath+"/user/index.action";
					},
					error : function(data) {
						alert("系统异常")
					}
				});
			})
			//点击事件
			$(".floor1").click(function(event) {
				var e = $(event.target);
				if (e.attr('class') == 'floor1_li') {
					window.location.href = basePath+"/news/selectByPrimaryKey/" + e.prev().val();
				//	clickRatioAjax(e.prev().val())
				}
				if (e.attr('class') == 'floor1_h2') {
					var newsId = $("#big_caption").prev().val();
					e.parent("#_title").attr("href", basePath+"/news/selectByPrimaryKey/" + newsId)
				//	clickRatioAjax(newsId)
				}
			});
			$(".floor2").click(function() {
				var e = $(event.target);
				if (e.attr('class') == 'photo' || e.attr('class') == 'floor2_h3') {
					var nid = $(".hidnewsId").val();
			//		clickRatioAjax(nid);
					window.location.href = basePath+"/news/selectByPrimaryKey/" + nid;
				}
			})

			// $(".floor1").click(function(event){
			// var e = $(event.target);
			// if(e.attr('class')=='floor1_li'){
			// window.location.href="/News/news/html/comment.jsp?newsId="+e.prev().val();
			// clickRatioAjax(e.prev().val())
			// }
			// if(e.attr('class')=='floor1_h2'){
			// var newsId = $("#big_caption").prev().val();
			// e.parent("#_title").attr("href","/News/news/html/comment.jsp?newsId="+newsId)
			// clickRatioAjax(newsId)
			// }
			// });
			// $(".floor2").click(function(){
			// var e = $(event.target);
			// if(e.attr('class')=='photo' || e.attr('class')=='floor2_h3'){
			// var nid = $(".hidnewsId").val();
			//    	
			// clickRatioAjax(nid);
			// window.location.href="/News/news/html/comment.jsp?newsId="+nid;
			//    		
			// }
			// })
			// })
			// function clickRatioAjax(nid){
			// alert(nid);
			// $.ajax({
			// url: "findLastClickRatio.action",
			// type: "POST",
			// dataType: "json",
			// cache: false,
			// async: false,
			// data: {
			// 'nid':parseInt(nid)
			// },
			// success: function(result) {
			// var clickratio = eval("("+result+")")
			// console.log(clickratio);
			// alert(parseInt(clickratio.clickratio)+1);
			// alert(parseInt(clickratio.clickratio));
			// $.ajax({
			// url: "insertClickRatio.action",
			// type: "POST",
			// dataType: "json",
			// cache: false,
			// async: false,
			// data: {
			// 'clickratio.nid':parseInt(clickratio.nid),
			// 'clickratio.clicktime':new Date().Format("yyyy-MM-dd hh:mm:ss"),
			// 'clickratio.clickratio':(parseInt(clickratio.clickratio)+1)
			// },
			// success: function(result) {
			//					
			// },
			// error:function(result){
			// alert("系统异常，请稍后重试！");
			// }//这里不要加","
			// })
			// },
			// error:function(result){
			// alert("系统异常，请稍后重试！");
			// }//这里不要加","
			// })
			//	
			// }
			$(function() {
				var lunbotu = $("#lunbotu");
				lunbotu.attr("style", "background:url('/BSNews/images/lunbotu1.jpg') no-repeat scroll center top;");

				var num = 1;
				var timer;
				function lunbo() {
					$("#" + num).css("backgroundColor", "#FFF");
					timer = setInterval(function() {
						$("#" + num).css("background", "none");
						$("#l" + num).css("display", "none");
						num++;
						if (num > 5) {
							num = 1;
						}
						$("#" + num).css("backgroundColor", "#FFF");
						lunbotu.attr("style", "background:url('/BSNews/images/lunbotu" + num + ".jpg') no-repeat scroll center top;");
						$("#l" + num).css("display", "block");

					}, 3000);
				}
				lunbo();

				$(".pointLi1").bind("click", function() {
					lunbotu.attr("style", "background:url('/BSNews/images/lunbotu1.jpg') no-repeat scroll center top;");
					$("#1").css("backgroundColor", "#FFF");
					$("#2").css("background", "none");
					$("#3").css("background", "none");
					$("#4").css("background", "none");
					$("#5").css("background", "none");
					$("#l1").css("display", "block");
					$("#l2").css("display", "none");
					$("#l3").css("display", "none");
					$("#l4").css("display", "none");
					$("#l5").css("display", "none");
					num = 1;
					clearInterval(timer);
					lunbo();
				});
				$(".pointLi2").bind("click", function() {
					lunbotu.attr("style", "background:url('/BSNews/images/lunbotu2.jpg') no-repeat scroll center top;");
					$("#2").css("backgroundColor", "#FFF");
					$("#1").css("background", "none");
					$("#3").css("background", "none");
					$("#4").css("background", "none");
					$("#5").css("background", "none");
					$("#l2").css("display", "block");
					$("#l1").css("display", "none");
					$("#l3").css("display", "none");
					$("#l4").css("display", "none");
					$("#l5").css("display", "none");
					num = 2;
					clearInterval(timer);
					lunbo();
				});
				$(".pointLi3").bind("click", function() {
					lunbotu.attr("style", "background:url('/BSNews/images/lunbotu3.jpg') no-repeat scroll center top;");
					$("#3").css("backgroundColor", "#FFF");
					$("#1").css("background", "none");
					$("#2").css("background", "none");
					$("#4").css("background", "none");
					$("#5").css("background", "none");
					$("#l3").css("display", "block");
					$("#l2").css("display", "none");
					$("#l1").css("display", "none");
					$("#l4").css("display", "none");
					$("#l5").css("display", "none");
					num = 3;
					clearInterval(timer);
					lunbo();
				});
				$(".pointLi4").bind("click", function() {
					lunbotu.attr("style", "background:url('/BSNews/images/lunbotu4.jpg') no-repeat scroll center top;");
					$("#4").css("backgroundColor", "#FFF");
					$("#1").css("background", "none");
					$("#2").css("background", "none");
					$("#3").css("background", "none");
					$("#5").css("background", "none");
					$("#l4").css("display", "block");
					$("#l2").css("display", "none");
					$("#l1").css("display", "none");
					$("#l3").css("display", "none");
					$("#l5").css("display", "none");
					num = 4;
					clearInterval(timer);
					lunbo();
				});
				$(".pointLi5").bind("click", function() {
					lunbotu.attr("style", "background:url('/BSNews/images/lunbotu5.jpg') no-repeat scroll center top;");
					$("#5").css("backgroundColor", "#FFF");
					$("#1").css("background", "none");
					$("#2").css("background", "none");
					$("#3").css("background", "none");
					$("#4").css("background", "none");
					$("#l5").css("display", "block");
					$("#l2").css("display", "none");
					$("#l3").css("display", "none");
					$("#l4").css("display", "none");
					$("#l1").css("display", "none");
					num = 5;
					clearInterval(timer);
					lunbo();
				});
				$(".change_right").bind("click", function() {
					clearInterval(timer);
					if (num != 5) {
						$("#" + num).css("background", "none");
						$("#l" + num).css("display", "none");
						num++;
						$("#" + num).css("backgroundColor", "#FFF");
						lunbotu.attr("style", "background:url('/BSNews/images/lunbotu" + num + ".jpg') no-repeat scroll center top;");
						$("#l" + num).css("display", "block");
					}
					else {
						$("#" + num).css("background", "none");
						$("#l" + num).css("display", "none");
						num = 1;
						$("#" + num).css("backgroundColor", "#FFF");
						lunbotu.attr("style", "background:url('/BSNews/images/lunbotu" + num + ".jpg') no-repeat scroll center top;");
						$("#l" + num).css("display", "block");
					}
					lunbo();
				});
				$(".change_left").bind("click", function() {
					clearInterval(timer);
					if (num != 1) {
						$("#" + num).css("background", "none");
						$("#l" + num).css("display", "none");
						num--;
						$("#" + num).css("backgroundColor", "#FFF");
						lunbotu.attr("style", "background:url('/BSNews/images/lunbotu" + num + ".jpg') no-repeat scroll center top;");
						$("#l" + num).css("display", "block");
					}
					else {
						$("#" + num).css("background", "none");
						$("#l" + num).css("display", "none");
						num = 5;
						$("#" + num).css("backgroundColor", "#FFF");
						lunbotu.attr("style", "background:url('/BSNews/images/lunbotu" + num + ".jpg') no-repeat scroll center top;");
						$("#l" + num).css("display", "block");
					}
					lunbo();
				});
			});
		});
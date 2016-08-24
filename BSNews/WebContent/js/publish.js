$(document).ready(function(){
	 var ue = UE.getEditor('editor',{
    	 initialStyle:'p{line-height:1em}',//编辑器层级的基数,可以用来改变字体
    	
    }); 
	 $.ajax({
			url: "findAllCategory.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				
			},
			success: function(result) {
				var categoryList = eval("("+result+")");
					var list = categoryList[0].categoryList;
				for(var i=0;i<list.length;i++){
					$("#category").append("<option value="+list[i].id+">"+list[i].category_name+"</option>")
				}
			},
			error:function(result){ 
             alert("系统异常，请稍后重试！"); 
           }//这里不要加"," 
		});
	$("#save").click(function(){
		$.ajax({
			url: "addNews.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				'news.title':$("#title").val(),
				'news.content':UE.getEditor('editor').getContent(),
				'news.editor':$("#author").val(),
				'news.publishtime':$("#publishtime").val(),
				'news.category_id': $("#category").find('option:selected').val(),
				'news.keyword':$('#keyword').val()
			},
			success: function(result) {
				//window.location.href="/News/news/managerIndex.html";
				alert("提交成功")
				$("#title").val("")
				UE.getEditor('editor').setContent("")
				$("#author").val("")
				$("#publishtime").val("")
				$("#category").find('option:selected').val("")
				$('#keyword').val("")
			},
			error:function(){ 
                alert("系统异常，请稍后重试！"); 
              }//这里不要加"," 
		});
	})
})
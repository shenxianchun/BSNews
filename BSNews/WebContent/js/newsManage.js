$(document).ready(function(){
	$.ajax({
		url: "findAllNews.action",
		type: "POST",
		dataType: "json",
		cache: false,
		async: false,
		data: {
		},
		success: function(result) {
			var list =  eval("("+result+")");
			var newsList=list[0].newsList ;//解析json格式得数据
			console.log(newsList);
			for(var i =0 ;i< newsList.length;i++){
				$("#table").append("<tr id='"+newsList[i].id+"' class='tr'>" +
						          "<td class='checkbox'><input type='checkbox' class='checkbox'></td>" +
						          "<td class='title'>"+newsList[i].title+"</td>" +
								 /* "<td class='content'>"+newsList[i].content+"</td>" +*/
								  "<td class='category_id'>"+newsList[i].category_id+"</td>" +
								  "<td class='publishtime'>"+(parseInt(newsList[i].publishtime.year)+1900)+"-"+newsList[i].publishtime.month+"-"+newsList[i].publishtime.day+"</td>" +
	                            //  "<td class='clickratio'>clickratio</td>" +
								  "<td class='keyword'>"+newsList[i].keyword+"</td>" +
								  "<td class='editor'>"+newsList[i].editor+"</td>" +
								  "<td class='operation'><button class='ui inverted red button delete'>删除</button>" +
                                 "<button class='ui inverted green button modify'>编辑</button></td>" +
								  "</tr>");
				
			}
			//console.log(list);
			//alert("list");
		},
		error:function(result){ 
         alert("系统异常，请稍后重试！"); 
       }//这里不要加"," 
	});
	
	//全选
	$(".checkedAll").bind("click",function(){
		var checkbox=$(".checkbox");
		var trs=$(".tr");
		//alert("dsajg");
		for(var i=0;i<checkbox.length;i++){
			checkbox[i].checked=true;
			//trs[i].css.backgroundColor="#F8F8FF";
		}
	})
	//删除当前
	$(".delete").bind("click",function(){
		var newsId=$(this).parent().parent().attr("id");
		$.ajax({
			url: "deleteNews.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				"newsId":newsId
			},
			success: function(result) {
			},
			error:function(result){ 
	         alert("系统异常，请稍后重试！"); 
	       }//这里不要加"," 
		});
		$(this).parent().parent().remove();
	})
})
	   //取消
	 function ckALL2(){		
	//alert("sgad");
				var cs=document.getElementsByClassName('checkbox');
					for(var i=0; i<cs.length; i++){
	              	cs[i].checked=false;
					//ts[i].style.backgroundColor="#FFF";
	              }        
			}


	   function test(ob){	 
				 if(ob.style.backgroundColor=="white"){	         
	           ob.style.backgroundColor="#F8F8FF"; 
			  ob.cells[0].childNodes[0].checked=true;
		   }
	         else{
			  ob.style.backgroundColor="white";
			    ob.cells[0].childNodes[0].checked=false;
			  } 
			}
	//批量删除
	function deleteRow(){
		alert("sad");
		var table = document.getElementById("table");
	    var tr = document.getElementsByClassName("tr");
		var l=tr.length;
		var i=0;

		while(i<l){
		if(tr[i].cells[0].childNodes[0].checked==true){
			var newsId=$(tr[i]).attr("id");
			$.ajax({
				url: "deleteNews.action",
				type: "POST",
				dataType: "json",
				cache: false,
				async: false,
				data: {
					"newsId":newsId
				},
				success: function(result) {
				},
				error:function(result){ 
		         alert("系统异常，请稍后重试！"); 
		       }//这里不要加"," 
			});	
	    table.deleteRow(i+1);
		i=0;
		l=tr.length;
		}
		else {
		i++;
		}
		}
	}

$(document).ready(function(){
	$.ajax({
		url: "findAllCategory.action",
		type: "POST",
		dataType: "json",
		cache: false,
		async: false,
		data: {
		},
		success: function(result) {
			var lst =  eval("("+result+")");
			var categoryList=lst[0].categoryList ;//解析json格式得数据
			console.log(categoryList);
			for(var i =0 ;i< categoryList.length;i++){
				$("tbody").append("<tr id='"+categoryList[i].id+"'>" +
						          "<td class='check'><input type='checkbox' class='checkbox'></td>" +
						          "<td class='num'>"+categoryList[i].id+"</td>" +
								  "<td class='category'>"+categoryList[i].category_name+"</td>" +
								  "<td class='operation'>" +
								  "<button class='small ui button modify'>修改</button>" +
								  "<button class='small ui button submit' style='display:none;'>提交</button>"+
								  "<button class='small ui button delete'>删除</button>"+
								  "</td></tr>");
			}
		},
		error:function(result){ 
         alert("系统异常，请稍后重试！"); 
       }//这里不要加"," 
	});
	
/**********************************修改******************************************/
  $(".modify").bind("click",function(){
  //var num=$(this).parent().prevAll(".num").text();
  var category=$(this).parent().prevAll(".category").text();
  $(this).parent().prevAll(".category").html("<input class='category_text' type='text' maxlength='20' size='4' value='"+category+"'>");
  $(this).next(".submit").css("display","inline");
  return false;
  })
  function Blur(mythis){
	//var flage1=false;
	var flage2=false;
	var value1=$(mythis).parent().prev().prev().html();
	alert("value1"+value1);
	var value2=$(".category_text").val();
	//alert(value2);
	var regval2=new RegExp("^[\\u4e00-\\u9fa5]{2,8}$");//只能为中文
		//alert(regName);
		var rsval2=regval2.test(value2);
		//alert(rsName);
		if(rsval2==false){
			$(".category_text").css("color","red");
			alert("分类名称填写错误2！");
		}
		else{
			$(".category_text").css("color","#000");
			flage2=true;
		}
		if(flage2==true){
			alert("隐藏提交按钮");
			$(".category_text").parent().html(value2);
			$(mythis).css("display","none");
		
		$.ajax({
			url: "updateCategory.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				'category.id':parseInt(value1),
				'category.category_name':value2
			},
			success: function(result) {
				
			},
			error:function(result){ 
	       alert("系统异常，请稍后重试！"); 
	     }//这里不要加"," 
		});
		}
	return false;
  }
  $(".modify").bind("click",function(){	
	$(this).parent().prevAll(".category").children().focus();
  })
  $(".submit").bind("click",function(){/**********************************提交******************************************/
	//alert("sws");
	$(this).parent().prevAll(".category").blur();
	Blur(this);
	return false;
  })
  
  /**********************************删除当前******************************************/
  $(".delete").bind("click",function(){
	var num=$(this).parent().prevAll(".num").html();
	//alert(num);
	if(confirm("是否确认删除 编号为"+num+" 的新闻分类？")){
	  var categoryId=$(this).parent().parent().attr("id");
	  deleteById(categoryId);
	  $(this).parent().parent().remove();
	}
	return false;
  })
  function deleteById(categoryId){
	  $.ajax({
			url: "deleteCategory.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				'categoryId':categoryId
			},
			success: function(result) {
				
			},
			error:function(result){ 
	         alert("系统异常，请稍后重试！"); 
	       }//这里不要加"," 
		});
  }
  
  /**********************************全选******************************************/
  $(".checkAll").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		//alert(checkbox[i]);
		checkbox[i].checked=true;
	}
  })
  /**********************************不选******************************************/
  $(".unCheck").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		//alert(checkbox[i]);
		checkbox[i].checked=false;
	}
  })
  /**********************************反选******************************************/
  $(".otherCheck").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		//alert(checkbox[i]);
		if(checkbox[i].checked==true){
			checkbox[i].checked=false;
		}
		else{
			checkbox[i].checked=true;
		}
	}
  })
  
  /**********************************删除选中项******************************************/
  $(".delChecked").bind("click",function(){
	    var i;
		var checkbox=document.getElementsByClassName("checkbox");
		var table=document.getElementById("table");
		
		for(i=checkbox.length-1;i>=0;i--){
			//alert("swwwwwwgage");
			alert(checkbox[i].checked);
			if(checkbox[i].checked == true){
		        var categoryId = $(checkbox[i]).parent().parent().attr("id");
		        alert(categoryId);
		        deleteById(categoryId);
			}		
		}
		delChecked();//页面删除
		
  })
  function delChecked(){
		var i;
		var checkbox=document.getElementsByClassName("checkbox");
		var table=document.getElementById("table");
		for(i=checkbox.length-1;i>=0;i--){
			//alert("swwwwwwgage");
			if(checkbox[i].checked == true){
				//alert("sgage");
			 table.deleteRow(i+1);
			}			
		}
	}
  
  /**********************************增加一行******************************************/ 
 $(".addRow").bind("click",function(){
		$("tbody").append("<tr id=''>" +
		          "<td class='check'><input type='checkbox' class='checkbox'></td>" +
		          "<td class='num'></td>" +
				  "<td class='category'><input type='text' class='category_text' maxlength='20' size='4'></td>" +
				  "<td class='operation'>" +
				  "<button class='small ui button modify'>修改</button>" +
				  "<button class='small ui button newsubmit' style='display:inline;'>提交</button>"+
				  "<button class='small ui button delete'>删除</button>"+
				  "</td></tr>");
       $("#table tr:last td:first").next().next().children().focus();
	})
  $("#table").bind("click",function(){
		//alert("newsubmit");
		var Event=$(event.target);
		//alert(Event.attr("class"));
		if(Event.attr("class")=='small ui button newsubmit'){
		var category_name=Event.parent().prev().children().val();
	        //alert(category_name);
			$.ajax({
				url: "insertCategory.action",
				type: "POST",
				dataType: "json",
				cache: false,
				async: false,
				data: {
					'category.category_name':category_name
				},
				success: 
					function(result) {
					   var myid =  eval("("+result+")");
					   //console.log(myid.id);
					   //alert(Event.attr("class"));
					  Event.parent().parent().attr("id",myid.id);
					  //alert(Event.parent().parent().attr("id"));
					  Event.parent().parent().children(".num").html(myid.id);
					  Event.css("display","none");
					},
				error:function(result){ 
		         alert("系统异常，请稍后重试！"); 
		       }//这里不要加"," 
			});
		}
	})
})

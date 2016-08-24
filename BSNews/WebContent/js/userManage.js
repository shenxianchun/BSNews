$(document).ready(function(){
	$.ajax({
		url: "findAllUser.action",
		type: "POST",
		dataType: "json",
		cache: false,
		async: false,
		data: {
			
		},
		success: function(result) {
			var userList = eval("("+result+")");//解析json格式得数据
			console.log(userList);
			//var list = userList[0].allUser;
			for(var i =0 ;i< userList.length;i++){
				$("tbody").append("<tr id='"+userList[i].id+"'>" +
						          "<td class='check'><input type='checkbox' class='checkbox'></td>" +
						          "<td class='name'>"+userList[i].username+"</td>" +
								  "<td class='password'>"+userList[i].password+"</td>" +
								  "<td class='gender'>"+userList[i].sex+"</td>" +
								  "<td class='birthday'>"+(userList[i].birthday.year+1900)+"-"+userList[i].birthday.month+"-"+userList[i].birthday.day+"</td>" +
								  "<td class='email'>"+userList[i].email+"</td>" +
								  "<td class='operation'><button class='small ui button delete'>删除</button></td>" +
								  "</tr>");
				
			}
			//console.log(list);
			//alert("list");
		},
		error:function(result){ 
         alert("系统异常，请稍后重试！"); 
       }//这里不要加"," 
	});
/**********************************删除当前******************************************/
  $(".delete").bind("click",function(){
	var name=$(this).parent().prevAll(".name").html();
	//alert(num);
	if(confirm("是否确认删除用户："+name+"？")){
	   $(this).parent().parent().remove();
	}
	return false;
  })
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
 /*****************************数据库删除当前*********************************/
  $(".delete").click(function(){
	  var userId = $(this).parent().parent().attr("id");
	 // alert(userId);
	  deleteById(userId);
  })
  /*****************************数据库删除选中行*********************************/
  $(".delChecked").click(function(){
	  //alert("check");
	  var checkbox=$(".checkbox");
	  for(i=checkbox.length-1;i>=0;i--){
		  alert(checkbox[i].checked);
			if(checkbox[i].checked == true){
		        var userId = $(checkbox[i]).parent().parent().attr("id");
		        alert(userId);
		        deleteById(userId);
			}			
		}
	  delChecked();
  })
  function delChecked(){
		var i;
		var checkbox=document.getElementsByClassName("checkbox");
		var table=document.getElementById("table");
		for(i=checkbox.length-1;i>=0;i--){
			//alert("swwwwwwgage");
			if(checkbox[i].checked == true){
				//alert("sgage");
				//list.add(checkbox[i].parent().parent().attr("id"));
				//console.log(id);
			 table.deleteRow(i+1);
			}			
		}
	}
  function deleteById(ele){
	  $.ajax({
			url: "deleteUser.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				'user.id':ele
			},
			success: function(result) {
				
			},
			error:function(result){ 
	         alert("系统异常，请稍后重试！"); 
	       }//这里不要加"," 
		});
  }
 })
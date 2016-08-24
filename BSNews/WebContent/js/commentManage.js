$(document).ready(function(){
	$.ajax({
		url: "findAllComment.action",
		type: "POST",
		dataType: "json",
		cache: false,
		async: false,
		data: {
		},
		success: function(result) {
			var commentList =  eval("("+result+")");
			
			for(var i =0 ;i< commentList.length;i++){
				$("#table").append("<tr id='"+commentList[i].id+"' class='tr'>" +
						          "<td class='checkbox'><input type='checkbox' class='checkbox'></td>" +
						          "<td class='uid td'>"+commentList[i].uid+"</td>" +
								  "<td class='comment td'>"+commentList[i].comment+"</td>" +
	                              "<td class='publishtime td'>"+(parseInt(commentList[i].publishtime.year)+1900)+"-"+commentList[i].publishtime.month+"-"+commentList[i].publishtime.day+"</td>" +
								  "<td class='up td'>"+commentList[i].up+"</td>" +
								  "<td class='operation'><button class='ui inverted red button delete'>删除</button>" +
                                 "<button class='ui inverted green button examine check' onclick='Axamine(this)'>查看</button></td>" +
								  "</tr>");
				
			}
			//console.log(list);
			//alert("list");
		},
		error:function(result){ 
         alert("系统异常，请稍后重试！"); 
       }//这里不要加"," 
	});
	
	$('.delete').bind("click",function(){
		var commentId=$(this).parent().parent().attr("id");
		alert(commentId);
		$.ajax({
			url: "deleteComment.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				"commentId":parseInt(commentId)
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
//全选
function ckALL(){	      
			var cs=document.getElementsByClassName('checkbox');
            //var ckall1=document.getElementById('ckall');
			var ts=document.getElementsByName('t1');
				for(var i=0; i<cs.length; i++){
              	cs[i].checked=true;
				//ts[i].style.backgroundColor="#F8F8FF";
				}            
		}
   //取消按钮
 function ckALL2(){			 
			var cs=document.getElementsByClassName('checkbox');
           // var ckall2=document.getElementById('deselect');	
			var ts=document.getElementsByName('t1');		
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
 //删除按钮
function deleteRow(){
	alert("dagdddddd");
	var table = document.getElementById("table");
    var tr = document.getElementsByClassName("tr");
	var l=tr.length;
	var i=0;

	while(i<l){
	if(tr[i].cells[0].childNodes[0].checked==true){
		var commentId=$(tr[i]).attr("id");
		$.ajax({
			url: "deleteComment.action",
			type: "POST",
			dataType: "json",
			cache: false,
			async: false,
			data: {
				"commentId":parseInt(commentId)
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
//查看按钮
function Axamine(this1){
   var cd=this1.parentNode.parentNode.getElementsByClassName("td"); 
   var cell1=cd[0].innerHTML;
   var cell2=cd[1].innerHTML;
   var cell3=cd[2].innerHTML;
   var cell4=cd[3].innerHTML;
   var YHM=document.getElementById("yhm").innerHTML=cell1;
   var YHM=document.getElementById("plnr").innerHTML=cell2;
   var YHM=document.getElementById("fbsj").innerHTML=cell3;
   var YHM=document.getElementById("dzs").innerHTML=cell4;
}
 $(document).ready(function(){
    $(".examine").click(function(){
        $(".ui.modal")
      .modal('show');
    })
    $("#close").click(function(){
    	$('.ui.modal')
      .modal('hide');
    })
  })

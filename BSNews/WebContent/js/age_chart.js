$(document).ready(function(){
	$.ajax({
		url : "showChartsUser.action",
		type : "POST",
		dataType : "json",
		cache : false,
		async : false,
		data : {
		},
		success : function(result) {
		var AgeQueryVo = eval("(" + result + ")")
		option = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient : 'vertical',
				x : 'left',
				data:['少年','中年','老年','18岁以下','18-25岁','26-35岁','36-45岁','46-55岁','56-65岁','66-75岁','75岁以上']
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {
						show: true, 
						type: ['pie', 'funnel']
					},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : false,
			series : [
				{
					name:'用户年龄状态',
					type:'pie',
					selectedMode: 'single',
					radius : [0, 70],
					
					// for funnel
					x: '20%',
					width: '40%',
					funnelAlign: 'right',
					max: 1548,
					
					itemStyle : {
						normal : {
							label : {
								position : 'inner'
							},
							labelLine : {
								show : false
							}
						}
					},
					data:[
						{value:AgeQueryVo.younger, name:'少年'},
						{value:AgeQueryVo.elder, name:'中年'},
						{value:AgeQueryVo.older, name:'老年', selected:true}
					]
				},
				{
					name:'注册用户年龄',
					type:'pie',
					radius : [100, 140],
					
					// for funnel
					x: '60%',
					width: '30%',
					funnelAlign: 'left',
					max: 1048,
					
					data:[
						{value:AgeQueryVo.under18, name:'18岁以下'},
						{value:AgeQueryVo._18_To_25,name:'18-25岁'},
						{value:AgeQueryVo._26_To_35, name:'26-35岁'},
						{value:AgeQueryVo._36_To_45, name:'36-45岁'},
						{value:AgeQueryVo._46_To_55,name:'46-55岁'},
						{value:AgeQueryVo._56_To_65, name:'56-65岁'},
						{value:AgeQueryVo._66_To_75, name:'66-75岁'},
						{value:AgeQueryVo.up75, name:'75岁以上'}
					]
				}
			]
		};
		var myGender=echarts.init(document.getElementById("gender"),"macarons");
		myGender.setOption(option);
		},
		error : function(result) {
			alert("系统异常，请稍后重试！");
		}// 这里不要加","
	})
		
		
})
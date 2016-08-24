$(document).ready(function(){
		//alert("ddddd");
		option = {
			title : {
				text: '人数/人',
				/*subtext: '纯属虚构'*/
			},
			tooltip : {
				trigger: 'axis'
			},
			/*legend: {
				data:['蒸发量','降水量']
			},*/
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'人数',
					type:'bar',
					data:[21,33,48,70,110, 87,92,75,80,0,0,0,0,0],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				/*{
					name:'降水量',
					type:'bar',
					data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					markPoint : {
						data : [
							{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
							{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
						]
					},
					markLine : {
						data : [
							{type : 'average', name : '平均值'}
						]
					}
				}*/
			]
		};
		//alert("dccccccccccccccc");
		var myAllUser=echarts.init(document.getElementById("allUser"),"macarons");
		myAllUser.setOption(option);
		
})
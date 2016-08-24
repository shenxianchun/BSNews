$(document).ready(function(){
	$.ajax({
		url : "newsShowNewsClick.action",
		type : "POST",
		dataType : "json",
		cache : false,
		async : false,
		data : {
		},
		success : function(result) {
		var AgeQueryVo = eval("(" + result + ")")
		console.log(AgeQueryVo[0].title)
	
		console.log(AgeQueryVo);
	option = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : [AgeQueryVo[9].title,AgeQueryVo[8].title,AgeQueryVo[7].title,AgeQueryVo[6].title,AgeQueryVo[5].title,
                    AgeQueryVo[4].title,AgeQueryVo[3].title,AgeQueryVo[2].title,AgeQueryVo[1].title,AgeQueryVo[0].title]
        }
    ],
    series : [
        {
            name:'点击量',
            type:'bar',
            data:[AgeQueryVo[9].clickratio,AgeQueryVo[8].clickratio,AgeQueryVo[7].clickratio,AgeQueryVo[6].clickratio,AgeQueryVo[5].clickratio,
                  AgeQueryVo[4].clickratio,AgeQueryVo[3].clickratio,AgeQueryVo[2].clickratio,AgeQueryVo[1].clickratio,AgeQueryVo[0].clickratio]
        }
    ]
};
                    
                    
		var newClickRate=echarts.init(document.getElementById("clickNewsRate_chart"),"macarons");
		newClickRate.setOption(option);
		},
		error : function(result) {
			alert("系统异常aa，请稍后重试！");
		}// 这里不要加","
	})
		
})
$(document).ready(function(){
	option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'left',
        y : 'bottom',
        data:['要闻','娱乐','社会','国际','国内','军事','科技','体育','汽车','历史','百科']
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
    calculable : true,
    series : [
       
        {
            name:'新闻点击率',
            type:'pie',
            radius : [50, 150],
            center : ['30%', 230],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:[
                {value:10, name:'要闻'},
                {value:5, name:'娱乐'},
                {value:15, name:'社会'},
                {value:25, name:'国际'},
                {value:20, name:'国内'},
                {value:35, name:'军事'},
                {value:30, name:'科技'},
                {value:40, name:'体育'},
				{value:30, name:'汽车'},
				{value:30, name:'历史'},
				{value:30, name:'百科'}
            ]
        }
    ]
};
                    
		var clickRate=echarts.init(document.getElementById("clickRate"),"macarons");
		clickRate.setOption(option);
		
})
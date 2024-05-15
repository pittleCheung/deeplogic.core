export default {
    title: {},
    tooltip: {
        trigger: 'item'
    },
    legend: {
        left: 'left'
    },
    series: [
        {
            name: '分布比例',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '系列1'},
                {value: 735, name: '系列2'},
                {value: 580, name: '系列3'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

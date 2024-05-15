export default {
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  legend: {
    data: ['系列1', '系列2', '系列3']
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  },
  toolbox: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      lineStyle: {
        width: 1
      },
      name: '系列1',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};

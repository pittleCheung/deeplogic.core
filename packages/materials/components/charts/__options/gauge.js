import * as echarts from 'echarts/core';
const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  {
    offset: 0.1,
    color: "#4DD8B5"
  },
  {
    offset: 0.5,
    color: "#FFC76A"
  },
  {
    offset: 1,
    color: "#F31C21"
  }
]);
// colorSet倒过来
export const colorSet = [
  [0.1, '#FF0000'],
  [1, color]
];
export default {
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 600,
      splitNumber: 5,
      name: '仪表盘',
      itemStyle: {
        color: 'rgba(117, 253, 244, 0.52)'
      },
      radius: '90%',
      // 设置内部透明区域颜色宽度
      progress: {
        show: true,
        width: '50'
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 8
        }
      },
      axisTick: {
        distance: 8,
        splitNumber: 1,
        lineStyle: {
          width: 1,
          color: '#999'
        }
      },
      splitLine: {
        distance: 55,
        length: 0,
        lineStyle: {
          width: 5,
          color: '#999'
        }
      },
      axisLabel: {
        distance: -20,
        color: '#999',
        fontSize: 10
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        color: '#000000',
        offsetCenter: [0, '0'],
        fontSize: '1rem',
        fontWeight: 'bolder',
        formatter: '{value}',
      },
      data: [
        {
          value: 20
        }
      ]
    },
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 600,
      radius: '90%',
      itemStyle: {
        color: '#75FDF4'
      },
      progress: {
        show: true,
        width: 8
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      title:{
        offsetCenter : [0, '50%'],//设置完成率位置
        color: 'black'
      },
      data: [
        {
          value: 20,
          name: '仪表盘',
        }
      ]
    }
  ]
  // series: [
  //   {
  //     type: 'gauge',
  //     startAngle: 0,
  //     endAngle: 180,
  //     min: 999, // min和max倒过来
  //     max: 0,
  //     splitNumber: 8,
  //     clockwise: false, // 设置数据逆时针增长
  //     itemStyle: {
  //       color: "#ccc", // 用于替代背景色的颜色
  //       borderColor: "#ccc", // 用跟上面一样的颜色遮住露出的背景色
  //     },
  //     progress: {
  //       show: true,
  //       roundCap: false, // 只适用于平角
  //       width: 10
  //     },
  //     emphasis: {
  //       // 禁用高亮（从v5.3.0开始支持）低版本可以通过设置color为'inherit'或与普通状态相同颜色实现
  //       disabled: true 
  //     },
  //     pointer: {
  //       show: false // 隐藏指针
  //     },
  //     axisLine: {
  //       roundCap: false, // 只适用于平角
  //       lineStyle: {
  //         width: 10,
  //         color: colorSet // 渐变色作为轴的背景色
  //       }
  //     },
  //     axisTick: {
  //       length: 12,
  //       splitNumber: 2,
  //       lineStyle: {
  //         width: 2,
  //         color: '#5B6877',
  //       }
  //     },
  //     splitLine: {
  //       length: 0,
  //       lineStyle: {
  //         width: 5,
  //         color: '#FFFFFF',
     
  //       }
  //     },
  //     axisLabel: {
  //       distance: 25,
  //       color: '#ccc',
  //       fontSize: 0
  //     },
  //     title: {
  //       show: false
  //     },
  //     detail: {
  //       fontSize: 30,

  //       offsetCenter: [0, '0%'],
  //       valueAnimation: true,
  //       formatter: function (value) {
  //         return value;
  //       },
  //       textStyle: {
  //         fontFamily: 'DigitalNumbersRegular',
  //       },
  //       color: color
  //     }, 
  //     data: [
  //       {
  //         value: 200
  //       }
  //     ]
  //   }
  // ]
  // series: [
  //   {
  //     type: 'gauge',
  //     startAngle: 180,
  //     endAngle: 0,
  //     center: ['50%', '75%'],
  //     radius: '90%',
  //     min: 0,
  //     max: 999,
  //     splitNumber: 8,
  //     axisLine: {
  //       lineStyle: {
  //         width: 8,
  //         color: [

  //           [1, color
  //           ]


  //         ]
  //       }
  //     },
  //     pointer: {
  //       icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
  //       length: '12%',
  //       width: 10,
  //       offsetCenter: [10, '-60%'],
  //       itemStyle: {
  //         color: 'auto'
  //       }
  //     },
  //     axisTick: {
  //       length: 12,
  //       show: false,
  //       lineStyle: {
  //         color: '#5B6877',
  //         width: 2
  //       }
  //     },
  //     // 刻度
  //     splitLine: {
  //       length: '8%',
  //       lineStyle: {
  //         color: '#FFFFFF',
  //         width: 5
  //       }
  //     },
  //     axisLabel: {
  //       color: '#464646',
  //       fontSize: 20,
  //       distance: -60,
  //       rotate: 'tangential',
  //       formatter: function (value) {
  //         return null;
  //       }
  //     },
  //     title: {
  //       offsetCenter: [0, '-10%'],
  //       fontSize: 20
  //     },
  //     detail: {
  //       fontSize: 30,
  //       offsetCenter: [0, '-35%'],
  //       valueAnimation: true,
  //       formatter: function (value) {
  //         return value;
  //       },
  //       color: 'inherit'
  //     },
  //     data: [
  //       {
  //         value: 0.7,
  //         // name: '功率'
  //       }
  //     ]
  //   }
  // ]
};
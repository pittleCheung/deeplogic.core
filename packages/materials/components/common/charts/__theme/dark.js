const contrastColor = '#B9B8CE';
const backgroundColor = 'transparent';
const axisCommon = function () {
  return {
    axisLine: {
      lineStyle: {
        color: contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(77,110,154,0.5)'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)']
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: '#20203B'
      }
    }
  };
};

const dark = (primary) => {
  const colorPalette = [
    primary || '#75B0FD',
    '#13c2c2',
    '#faad14',
    '#eb2f96',
    '#722ed1',
    '#a0d911',
    '#fa541c',
    '#f5222d',
    '#2f54eb',
    '#52c41a'
  ];

  return {
    darkMode: true,
    color: colorPalette,
    backgroundColor: backgroundColor,
    axisPointer: {
      lineStyle: {
        color: '#476292'
      },
      crossStyle: {
        color: '#817f91'
      },
      label: {
        color: '#fff'
      }
    },
    legend: {
      textStyle: {
        color: contrastColor
      }
    },
    textStyle: {
      color: contrastColor
    },
    title: {
      textStyle: {
        color: '#FFFFFFD9'
      },
      subtextStyle: {
        color: '#FFFFFFA6'
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: contrastColor
      }
    },
    dataZoom: {
      borderColor: '#71708A',
      textStyle: {
        color: contrastColor
      },
      brushStyle: {
        color: 'rgba(135,163,206,0.3)'
      },
      handleStyle: {
        color: '#353450',
        borderColor: '#C5CBE3'
      },
      moveHandleStyle: {
        color: '#B0B6C3',
        opacity: 0.3
      },
      fillerColor: 'rgba(135,163,206,0.2)',
      emphasis: {
        handleStyle: {
          borderColor: '#91B7F2',
          color: '#4D587D'
        },
        moveHandleStyle: {
          color: '#636D9A',
          opacity: 0.7
        }
      },
      dataBackground: {
        lineStyle: {
          color: '#71708A',
          width: 1
        },
        areaStyle: {
          color: '#71708A'
        }
      },
      selectedDataBackground: {
        lineStyle: {
          color: '#87A3CE'
        },
        areaStyle: {
          color: '#87A3CE'
        }
      }
    },
    visualMap: {
      textStyle: {
        color: contrastColor
      }
    },
    timeline: {
      lineStyle: {
        color: contrastColor
      },
      label: {
        color: contrastColor
      },
      controlStyle: {
        color: contrastColor,
        borderColor: contrastColor
      }
    },
    calendar: {
      itemStyle: {
        color: backgroundColor
      },
      dayLabel: {
        color: contrastColor
      },
      monthLabel: {
        color: contrastColor
      },
      yearLabel: {
        color: contrastColor
      }
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    // series: [{ type: 'line', lineStyle: { width: 1 } }],
    line: {
      symbol: 'circle',
      width: 1
    },
    graph: {
      color: colorPalette
    },
    gauge: {
      title: {
        color: contrastColor
      }
    },
    candlestick: {
      itemStyle: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  };
};

export default dark;

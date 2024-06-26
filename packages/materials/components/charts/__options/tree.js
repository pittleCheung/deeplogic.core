import json from './__data/tree.json';

const data = {
  ...json,
  children: json?.children?.map((datum, index) => {
    if (index % 2 === 0) {
      datum.collapsed = true;
    }
    return datum;
  })
};

export default {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      data: [data],
      top: '1%',
      left: '7%',
      bottom: '1%',
      right: '20%',
      symbolSize: 7,
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left'
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};
import { Popover } from 'antd';
import { commonDeviceHandle as events, commonDeviceStyle as style } from '../../tool';
// import defaultI from '../__deviceImg__/阀门默认.png';
import off from '../__deviceImg__/valve_off.png';
import on from '../__deviceImg__/valve_on.png';

import screenshot from '../__screenshots__/Image_thumbnail.png';

export default {
  componentName: 'ValveImgGif',
  category: '数据展示',
  title: '阀门',
  screenshot,
  isDevice: true,
  props: [
    {
      name: 'devicetype',
      title: {
        label: '设备类型',
        tip: 'devicetype | 设备类型'
      },
      defaultValue: 'D0A30',
      propType: 'string'
    },
    {
      name: 'device',
      title: {
        label: '选择设备',
        tip: 'device | 选择设备'
      },
      propType: 'device'
    },
    {
      name: 'status',
      title: {
        label: '设备状态',
        tip: 'status | 设备状态'
      },
      propType: 'array',
      defaultValue: [
        {
          label: '关闭',
          value: '0',
          key: '1',
          img_src: off
        },
        {
          label: '开启',
          value: '1',
          key: '2',
          img_src: on
        },
        {
          label: '报警',
          value: '0',
          key: '3',
          img_src: off
        }
      ],
      props: [
        {
          name: 'label',
          title: {
            label: '标签',
            tip: 'label | 选项的标签'
          },
          propType: 'string',
          defaultValue: ''
        },
        {
          name: 'value',
          title: {
            label: '值',
            tip: 'value | 选项的值'
          },
          propType: 'string',
          defaultValue: ''
        },
        {
          name: 'expression',
          title: {
            label: '表达式',
            tip: 'value | 选项的值'
          },
          propType: 'string',
          defaultValue: ''
        },
        {
          name: 'color',
          title: {
            label: '颜色',
            tip: 'color | 选择颜色'
          },
          propType: 'color',
          defaultValue: ''
        },
        {
          name: 'img_src',
          title: {
            label: '3D图片',
            tip: '选择一张3D图片'
          },
          propType: 'select',
          defaultValue: off,
          values: {
            [off]: (
              <Popover content={<img src={off} />} title='默认'>
                <img src={off} width={20} height={20} />
                默认
              </Popover>
            ),
            [on]: (
              <Popover content={<img src={on} />} title='运行'>
                <img src={on} width={20} height={20} />
                运行
              </Popover>
            )
          }
        }
      ]
    }
  ],
  style: style({ width: 15, height: 19 }),
  events
};

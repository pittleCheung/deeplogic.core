import { Popover } from 'antd';
import { commonDeviceHandle as events, commonDeviceStyle as style } from '../../tool';
import alarm from '../__deviceImg__/ch_cert_alarm.png';
import fault from '../__deviceImg__/ch_cert_fault.png';
import on from '../__deviceImg__/ch_cert_on.webp';
import off from '../__deviceImg__/ch_cert_off.png';

import screenshot from '../__screenshots__/Image_thumbnail.png';

export default {
  componentName: 'ChillerImgGif',
  category: '数据展示',
  title: '空调主机1',
  screenshot,
  isDevice: true,
  props: [
    {
      name: 'devicetype',
      title: {
        label: '设备类型',
        tip: 'devicetype | 设备类型'
      },
      defaultValue: 'D0A1A',
      propType: 'string'
    },
    {
      name: 'device',
      title: {
        label: '选择设备',
        tip: 'device | 选择设备'
      },
      defaultValue: '',
      propType: 'device'
    },
    {
      name: 'value',
      title: {
        label: '关联阀门',
        tip: 'value | 关联阀门'
      },
      propType: 'device',
      parent: 'D0A30'
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
          label: '故障',
          value: '1',
          key: '3',
          img_src: fault
        },
        {
          label: '停止',
          value: '0',
          key: '1',
          img_src: off
        },
        {
          label: '运行',
          value: '1',
          key: '2',
          img_src: on
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
            tip: 'expression | 选项的值'
          },
          propType: 'string',
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
            ),
            [alarm]: (
              <Popover content={<img src={alarm} />} title='警告'>
                <img src={alarm} width={20} height={20} />
                警告
              </Popover>
            ),
            [fault]: (
              <Popover content={<img src={fault} />} title='故障'>
                <img src={fault} width={20} height={20} />
                故障
              </Popover>
            )
          }
        }
      ]
    }
  ],
  style: style({ width: 105, height: 68 }),
  events
};

// 自动生成配置
export const chlconfig = {
  props: {},
  styles: {}
};

import { Popover } from 'antd';
import { commonDeviceHandle as events, commonDeviceStyle as style } from '../../tool';
import warn from '../__deviceImg__/罐报警.gif';
import fault from '../__deviceImg__/罐故障.gif';
import run from '../__deviceImg__/罐运行.gif';
import defaultI from '../__deviceImg__/罐默认.png';
import screenshot from '../__screenshots__/Image_thumbnail.png';

export default {
  componentName: 'TankImgGif',
  category: '数据展示',
  title: '储气干罐',
  screenshot,
  isDevice: true,
  props: [
    {
      name: 'devicetype',
      title: {
        label: '设备类型',
        tip: 'devicetype | 设备类型'
      },
      defaultValue: 'D0C1E',
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
          color: '#f5222d'
        },
        {
          label: '停止',
          value: '0',
          key: '1',
          color: '#8c8c8c'
        },
        {
          label: '运行',
          value: '1',
          key: '2',
          color: '#73d13d'
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
          defaultValue: defaultI,
          values: {
            [defaultI]: (
              <Popover content={<img src={defaultI} />} title='默认'>
                <img src={defaultI} width={20} height={20} />
                默认
              </Popover>
            ),
            [run]: (
              <Popover content={<img src={run} />} title='运行'>
                <img src={run} width={20} height={20} />
                运行
              </Popover>
            ),
            [warn]: (
              <Popover content={<img src={warn} />} title='警告'>
                <img src={warn} width={20} height={20} />
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
  style: style({ width: 30, height: 60 }),
  events
};

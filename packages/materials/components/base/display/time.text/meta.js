import { customStyle } from '../../../_utils/baseMeta';

// 默认格式
export const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DEFAULT_INTERVAL = 1;
export default {
  componentName: 'TimeText',
  category: '数据展示',
  title: '时间文本',
  isElement: false,
  props: [
    {
      name: 'format',
      title: {
        label: '格式',
        tip: 'format | dayjs的时间格式字符串,YYYY:年, MM:月, DD:日, HH:时, mm:分, ss:秒'
      },
      defaultValue: DEFAULT_FORMAT,
      propType: 'string'
    },
    {
      name: 'interval',
      title: {
        label: '显示频率',
        tip: 'interval | 时间显示的频率，单位：秒'
      },
      defaultValue: DEFAULT_INTERVAL,
      propType: 'number'
    }
  ],
  style: customStyle({}, { show: ['size', 'font'] })
};

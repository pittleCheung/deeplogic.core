import { customStyle } from '../../../_utils/baseMeta';

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export default {
  componentName: 'LogRoller',
  category: '数据展示',
  title: '滚动日志',
  isElement: true,
  props: [
    {
      name: 'value',
      title: {
        label: '值',
        tip: 'value | 滚动显示的日志'
      },
      propType: 'string',
      defaultValue: '就绪'
    },
    {
      name: 'title',
      title: {
        label: '标题',
        tip: 'title | 日志显示区域的标题文本'
      },
      propType: 'string',
      defaultValue: '控制信息'
    },
    {
      name: 'number',
      title: {
        label: '显示数量',
        tip: 'number | 显示日志的数量'
      },
      propType: 'number',
      min: 1,
      defaultValue: 8
    },
    {
      name: 'showTime',
      title: {
        label: '日志时间',
        tip: 'showTime | 是否显示时间'
      },
      propType: 'boolean',
      defaultValue: true
    },
    {
      name: 'timeFormat',
      title: {
        label: '时间格式',
        tip: 'timeFormat | dayjs的格式字符串, YYYY:年, MM:月, DD:日, HH:时, mm:分, ss:秒'
      },
      propType: 'boolean',
      defaultValue: DEFAULT_TIME_FORMAT
    },
    {
      name: 'standByText',
      title: {
        label: '就绪文字',
        tip: 'standByText | 无日志时显示的文字'
      },
      propType: 'string',
      defaultValue: '就绪'
    },
    {
      name: 'standByDelay',
      title: {
        label: '就绪时间',
        tip: 'standByDelay | 清空日志的空闲时间，单位：秒'
      },
      propType: 'number',
      min: 1,
      defaultValue: 180
    },
    {
      name: 'titleColor',
      title: {
        label: '标题颜色',
        tip: 'titleColor | 标题颜色'
      },
      propType: 'color'
    },
    {
      name: 'logColor',
      title: {
        label: '日志颜色',
        tip: 'logColor | 日志颜色'
      },
      propType: 'color'
    },
    {
      name: 'timeColor',
      title: {
        label: '时间颜色',
        tip: 'timeColor | 时间颜色'
      },
      propType: 'color'
    },
    {
      name: 'dotColor',
      title: {
        label: '点颜色',
        tip: 'dotColor | 点颜色'
      },
      propType: 'color'
    }
  ],
  style: customStyle({}, { show: ['size', 'font', 'background', 'border', 'spacing'] })
};

import { addon } from './_base.meta';
import { customStyle } from '../../../_utils/baseMeta';
export default {
  componentName: 'numeral.text',
  category: '数据展示',
  title: '数字文本',
  props: [
    // {
    //   name: 'level',
    //   title: {
    //     label: '级别',
    //     tip: 'level | 重要程度，相当于 h1、h2、h3、h4、h5'
    //   },
    //   propType: 'select',
    //   defaultValue: '5',
    //   values: {
    //     1: 'H1',
    //     2: 'H2',
    //     3: 'H3',
    //     4: 'H4',
    //     5: 'H5'
    //   }
    // },
    // {
    //   name: 'size',
    //   title: {
    //     label: '文字大小',
    //     tip: 'size | 文字大小'
    //   },
    //   propType: 'string'
    // },
    {
      name: 'value',
      title: {
          label: '内容',
          tip: 'value | 内容'
      },
      propType: 'number',
      defaultValue: '0'
  },
    {
      name: 'decimalSeparator',
      title: {
        label: '小数点',
        tip: 'decimalSeparator | 小数点'
      },
      propType: 'number'
    },
    {
      name: 'percent',
      title: {
        label: '百分比',
        tip: 'percent | 百分比'
      },
      propType: 'boolean',
      defaultValue: false
    },
    // ...addon,
    {
      name: 'isBefore',
      title: {
        label: '显示前缀',
        tip: 'isBefore | 是否显示前缀'
      },
      propType: 'boolean',
      defaultValue: false
    },
    {
      name: 'isAfter',
      title: {
        label: '显示后缀',
        tip: 'isAfter | 是否显示后缀'
      },
      propType: 'boolean',
      defaultValue: false
    },
    {
      name: 'before',
      title: {
        label: '前缀配置',
        tip: 'before | 前缀配置'
      },
      propType: 'object',
      defaultValue: {
        value: '前缀'
      },
      props: addon,
      relatedProps: { isBefore: true }
    },

    {
      name: 'after',
      title: {
        label: '后缀配置',
        tip: 'after | 后缀配置'
      },
      propType: 'object',
      defaultValue: {
        value: 'Kw'
      },
      props: addon,
      relatedProps: { isAfter: true }
    }
  ],
  style: customStyle({
    fontSize: 12,
    color: '#CEF389',
    fontFamily: 'DigitalNumbersRegular',
    margin: 0,
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    background: 'linear-gradient(180deg, #1c1c1c 0%, rgba(33, 33, 33, 0.57) 100%)',
    border: '1px solid',
    borderRadius: 2,
    textAlign: 'center',
    width: 'auto',
  }, { show: ['font', 'background', 'border', 'spacing'] }),
};

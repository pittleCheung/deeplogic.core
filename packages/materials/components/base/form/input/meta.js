import { customEvents, customStyle } from '../../../_utils/baseMeta';

export default {
  componentName: 'Input',
  title: '输入框',
  category: '表单',
  screenshot: null,
  props: [
    {
      name: 'value',
      title: {
        label: '值',
        tip: 'value | 输入框内容'
      },
      propType: 'string',
      defaultValue: ''
    },
    // {
    //     name: 'defaultValue',
    //     title: {
    //         label: '默认值',
    //         tip: 'defaultValue | 默认值'
    //     },
    //     propType: 'string',
    //     defaultValue: ''
    // },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: 'size | 尺寸'
      },
      propType: 'select',
      defaultValue: 'middle',
      values: {
        large: '大',
        middle: '默认',
        small: '小'
      }
    },
    {
      name: 'type',
      title: {
        label: '类型',
        tip: 'type | 声明 input 类型，同原生 input 标签的 type 属性'
      },
      propType: 'select',
      defaultValue: 'text',
      values: {
        text: '文本',
        password: '密码',
        textarea: '多行文本',
        number: '数值'
      }
    },
    {
      name: 'placeholder',
      title: {
        label: '占位符',
        tip: 'placeholder | 输入框的占位符'
      },
      propType: 'string',
      defaultValue: ''
    },

    {
      name: 'disabled',
      title: {
        label: '禁用',
        tip: 'disabled | 是否禁用'
      },
      propType: 'boolean',
      defaultValue: false
    },
    {
      name: 'variant',
      title: {
        label: '变体',
        tip: 'variant | 形态变体'
      },
      propType: 'select',
      defaultValue: 'outlined',
      values: {
        outlined: '描边',
        filled: '填充',
        borderless: '无边框'
      }
    },
    {
      name: 'allowClear',
      title: {
        label: '允许清除',
        tip: 'allowClear | 是否允许清除'
      },
      propType: 'boolean',
      defaultValue: false
    },
    {
      name: 'isPush',
      title: {
        label: '数据下发',
        tip: 'isPush | 开启后，输入框鼠移入时右侧会出现一个按钮，点击后会触发 onPush 事件'
      },
      propType: 'boolean',
      defaultValue: false
    },
    {
      name: 'showCount',
      title: {
        label: '显示计数',
        tip: 'showCount | 是否显示计数'
      },
      propType: 'boolean',
      defaultValue: false
    }
  ],
  style: customStyle({}, {}, false),
  events: customEvents({
    events: [
      {
        name: 'onChange',
        title: {
          label: '改变',
          tip: 'onChange | 输入框发生变化的回调'
        }
      },
      {
        name: 'onPressEnter',
        title: {
          label: '按下回车',
          tip: 'onPressEnter | 按下回车的回调'
        }
      },
      {
        name: 'onPush',
        title: {
          label: '数据下发',
          tip: 'onPush | 数据下发的回调'
        }
      }
    ],
    isDefault: false
  })
};

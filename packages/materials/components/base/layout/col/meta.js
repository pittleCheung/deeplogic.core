import { customStyle } from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Textare_ thumbnail.png';

export default {
  componentName: 'Col',
  title: 'Col布局',
  category: '通用',
  screenshot,
  isElement: true,
  props: [
    {
      name: 'type',
      title: {
        label: '类型',
        tip: 'type | 设置占位类型'
      },
      defaultValue: 'span',
      propType: 'select',
      values: {
        span: '栅格',
        flex: '弹性'
      }
    },
    {
      name: 'span',
      title: {
        label: '栅格数',
        tip: 'span | 栅格占位格数，指 1 到 24 的值来表示其跨越的范围，一行总栅格为24，为 0 时此列不显示'
      },
      defaultValue: 6,
      min: 1,
      max: 24,
      propType: 'number',
      relatedProps: { type: 'span' }
    },
    {
      name: 'flex',
      title: {
        label: '弹性布局',
        tip: 'flex | 设置为 数值px 时为具体列宽度，设置为 auto 时为自动扩展剩余宽度，设置为 none 时为自动宽度'
      },
      defaultValue: '',
      propType: 'string',
      relatedProps: { type: 'flex' }
    }
  ],
  style: customStyle({
    padding: 8
  })
};

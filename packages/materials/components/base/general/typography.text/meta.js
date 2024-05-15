import { customEvents, customStatus, customStyle } from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Text_thumbnail.png';

export default {
  componentName: 'Typography.Text',
  category: '数据展示',
  title: '文本',
  screenshot,
  isElement: false,
  props: [
    {
      name: 'value',
      title: {
        label: '文本内容',
        tip: 'value | 文本内容'
      },
      defaultValue: '文本内容',
      propType: 'string'
    },
    customStatus({
      props: [
        {
          name: 'backgroundColor',
          title: {
            label: '背景颜色',
            tip: 'color | 选择颜色'
          },
          propType: 'color',
          defaultValue: ''
        }
      ]
    })
  ],
  style: customStyle({}, { show: ['size', 'font', 'background', 'border', 'spacing'] }),
  events: customEvents({})
};

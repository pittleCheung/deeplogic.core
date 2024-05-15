import { defaultValues } from '../../../_utils/baseMeta';

export default {
  componentName: 'LayoutFooter',
  category: '布局',
  title: '页脚',
  isElement: true,
  props: [
    {
      name: 'title',
      title: {
        label: '标题',
        tip: 'title | 标题'
      },
      propType: 'string',
      defaultValue: 'DeepLogic © 2023'
    },
    {
      name: 'subTitle',
      title: {
        label: '副标题',
        tip: 'subTitle | 副标题'
      },
      propType: 'string',
      defaultValue: ''
    }
  ],
  style: {
    name: 'style',
    title: {
      label: '样式',
      tip: 'style | 样式'
    },
    propType: 'object',
    setter: {
      component: 'StyleSetter',
      props: {
        open: true,
        show: ['size', 'font', 'border', 'background', 'spacing'],
        values: {
          ...defaultValues,
          textAlign: 'center',
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 24,
          paddingBottom: 24,
          paddingSide: 'side'
        }
      }
    }
  }
};

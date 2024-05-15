import { customStyle } from '../../../_utils/baseMeta';

export default {
  componentName: 'Flex',
  title: 'Flex弹性布局',
  category: '通用',
  isElement: true,
  props: [
    {
      name: 'gap',
      title: {
        label: '列间距',
        tip: 'gap | 用于设置行与列之间的间隙，可以为 small | middle | large | string | number'
      },
      defaultValue: 12,
      propType: 'number',
      min: 0
    }
  ],
  style: customStyle({
    padding: 12
  })
};

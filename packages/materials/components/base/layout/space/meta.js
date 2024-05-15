import screenshot from './__screenshots__/Toolbar_thumbnail.png';

export default {
  componentName: 'Space',
  title: '间距',
  category: '通用',
  screenshot,
  isElement: true,
  props: [
    {
      name: 'align',
      title: {
        label: '对齐方式',
        tip: 'align | 对齐方式'
      },
      defaultValue: 'start',
      propType: 'select',
      values: {
        start: '左对齐',
        end: '右对齐',
        center: '居中对齐',
        baseline: '基线对齐'
      }
    },
    {
      name: 'direction',
      title: {
        label: '排列方向',
        tip: 'direction | 排列方向'
      },
      defaultValue: 'horizontal',
      propType: 'select',
      values: {
        horizontal: '水平',
        vertical: '垂直'
      }
    },
    {
      name: 'size',
      title: {
        label: '间距大小',
        tip: 'size | 间距大小'
      },
      defaultValue: 'middle',
      propType: 'select',
      values: {
        small: '小',
        middle: '中',
        large: '大'
      }
    },
    {
      name: 'wrap',
      title: {
        label: '自动换行',
        tip: 'wrap | 是否自动换行'
      },
      defaultValue: false,
      propType: 'boolean'
    }
  ]
};

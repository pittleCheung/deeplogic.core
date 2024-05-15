import { customStyle } from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Progress_bar_thumbnail.png';

export default {
  componentName: 'Columns',
  title: 'Columns布局',
  category: '通用',
  screenshot,
  isElement: true,
  props: [
    {
      name: 'columns',
      title: {
        label: '栅格数',
        tip: 'columns | 用于设置栅格中的列数'
      },
      defaultValue: 2,
      propType: 'number',
      min: 1,
      max: 24
    },
    // {
    //   name: 'align',
    //   title: {
    //     label: '垂直对齐',
    //     tip: 'align | flex 布局下的垂直对齐方式'
    //   },
    //   defaultValue: 'top',
    //   propType: 'select',
    //   values: {
    //     top: '顶部对齐',
    //     middle: '居中对齐',
    //     bottom: '底部对齐'
    //   }
    // },
    // 这个属性与 样式的 padding 冲突，无法正常使用
    // {
    //   name: 'gutter',
    //   title: {
    //     label: '栅格间隔',
    //     tip: 'gutter | 栅格间隔，单位 px，左右平分'
    //   },
    //   min: 0,
    //   defaultValue: 12,
    //   propType: 'number'
    // },
    // {
    //   name: 'justify',
    //   title: {
    //     label: '水平排列',
    //     tip: 'justify | flex 布局下的水平排列方式'
    //   },
    //   defaultValue: 'start',
    //   propType: 'select',
    //   values: {
    //     start: '左对齐',
    //     end: '右对齐',
    //     center: '居中对齐',
    //     'space-around': '两侧间隔相等',
    //     'space-between': '两端对齐',
    //     'space-evenly': '每个元素间隔相等'
    //   }
    // },
    {
      name: 'wrap',
      title: {
        label: '自动换行',
        tip: 'wrap | 是否自动换行'
      },
      defaultValue: false,
      propType: 'boolean'
    },
    {
      name: 'nodes',
      title: {
        label: '子元素',
        tip: 'nodes | 子元素'
      },
      defaultValue: null,
      propType: 'array',
      hidden: true
    }
  ],
  style: customStyle({
    padding: 8
  })
};

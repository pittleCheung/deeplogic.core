import screenshot from './__screenshots__/Label_thumbnail.png';

export default {
  componentName: 'Pagination',
  category: '导航',
  title: '分页',
  screenshot,
  isElement: true,
  props: [
    {
      name: 'total',
      title: {
        label: '总数',
        tip: 'total | 总数',
      },
      defaultValue: 100,
      propType: 'number',
    },
    {
      name: 'pageSize',
      title: {
        label: '每页条数',
        tip: 'pageSize | 每页条数',
      },
      defaultValue: 10,
      propType: 'number',
    },
    {
      name: 'current',
      title: {
        label: '当前页',
        tip: 'current | 当前页',
      },
      defaultValue: 1,
      propType: 'number',
    },
    {
      name: 'showSizeChanger',
      title: {
        label: '显示每页条数',
        tip: 'showSizeChanger | 显示每页条数',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'showQuickJumper',
      title: {
        label: '显示快速跳转',
        tip: 'showQuickJumper | 显示快速跳转',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    // {
    //   name: 'showTotal',
    //   title: {
    //     label: '显示总数',
    //     tip: 'showTotal | 显示总数',
    //   },
    //   defaultValue: false,
    //   propType: 'boolean',
    // },
    {
      name: 'simple',
      title: {
        label: '简单模式',
        tip: 'simple | 简单模式',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'responsive',
      title: {
        label: '自适应',
        tip: 'responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'hideOnSinglePage',
      title: {
        label: '单页隐藏',
        tip: 'hideOnSinglePage | 只有一页时是否隐藏分页器',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'showTitle',
      title: {
        label: '显示原生',
        tip: 'showTitle | 是否显示原生 tooltip 页码提示',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'disabled',
      title: {
        label: '禁用',
        tip: 'disabled | 禁用分页',
      },
      defaultValue: false,
      propType: 'boolean',
    },
    {
      name: 'showLessItems',
      title: {
        label: '显示较少',
        tip: 'showLessItems | 是否显示较少页面内容',
      },
      defaultValue: 3,
      propType: 'number',
    },

    {
      name: 'pageSizeOptions',
      title: {
        label: '每页条数选项',
        tip: 'pageSizeOptions | 每页条数选项',
      },
      defaultValue: ['10', '20', '30', '40'],
      propType: 'array',
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: 'size | 尺寸',
      },
      defaultValue: 'default',
      propType: 'select',
      values: {
        default: '默认',
        small: '小',
      },
    },
  ],
};

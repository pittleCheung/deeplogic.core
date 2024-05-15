export const defaultOptions = [
  {
    name: 'tags',
    title: {
      label: '点表',
      tip: 'tags | 点表，用于获取点表数据'
    },
    linkable: true,
    hidden: true,
    propType: 'point'
  },
  {
    name: 'dateType',
    title: {
      label: '周期',
      tip: 'dateType | 周期，用于通过不同的（日/周/月/年）周期获取数据，默认为日'
    },
    propType: 'select',
    defaultValue: 'day',
    linkable: true,
    values: {
      day: '日',
      week: '周',
      month: '月',
      quarter: '季',
      year: '年'
    }
  },
  {
    name: 'ranges',
    title: {
      label: '范围',
      tip: 'ranges | 时间范围，用于获取指定时间范围内的数据，默认为当天'
    },
    propType: 'date',
    relatedProps: 'dateType',
    defaultValue: [],
    linkable: true,
    showTime: true,
    isRange: true
  },
  {
    name: 'aggregate',
    title: {
      label: '聚合',
      tip: 'aggregate | 聚合方式，用于获取聚合类型的点表数据'
    },
    propType: 'select',
    defaultValue: 'last',
    linkable: true,
    values: {
      first: '首位',
      last: '末尾',
      avg: '平均值',
      min: '最小值',
      max: '最大值',
      sum: '求和'
    }
  },
  {
    name: 'timeType',
    title: {
      label: '粒度',
      tip: 'timeType | 时间粒度，用于获取不同粒度的点表数据'
    },
    propType: 'select',
    defaultValue: '5 minutes',
    linkable: true,
    values: {
      '30 seconds': '30秒',
      '1 minute': '1分钟',
      '5 minutes': '5分钟',
      '30 minutes': '30分钟',
      '1 hour': '1小时',
      '1 day': '1天',
      '1 week': '1周',
      '30 days': '30天'
    }
  }
];

export const defaultPoint = {
  name: 'pointSource',
  title: {
    label: '点表',
    tip: 'pointSource | 绑定的点表为数据源，用于显示点的数据'
  },
  propType: 'point',
  defaultValue: ''
};

export const boolSetter = {
  normalize: (value) => value === 'true'
};

export const defaultValues = {
  width: '100%',
  widthType: 'relative',
  height: 300,
  heightType: 'fixed',
  heightUnit: 'px',
  spacing: 0,
  paddingSide: 'all',
  padding: 0,
  marginSide: 'all',
  margin: 0
};

export const defaultStyle = {
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
      values: defaultValues,
      show: ['size', 'border', 'background', 'spacing']
    }
  }
};

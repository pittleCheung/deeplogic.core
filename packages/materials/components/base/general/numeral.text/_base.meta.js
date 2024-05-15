export const addon = [
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
        name: 'type',
        title: {
            label: '文本类型',
            tip: 'type | 文本类型 secondary | success | warning | danger'
        },
        propType: 'select',
        defaultValue: '',
        values: {
            secondary: '次要',
            success: '成功',
            warning: '警告',
            danger: '危险'
        }
    },
    {
        name: 'color',
        title: {
            label: '颜色',
            tip: 'color | 文本颜色'
        },
        propType: 'color',
        defaultValue: '#5DFF88'
    },
    {
        name: 'size',
        title: {
          label: '文字大小',
          tip: 'size | 文字大小'
        },
        propType: 'string'
      },
    {
        name: 'strong',
        title: {
            label: '加粗',
            tip: 'strong | 是否加粗'
        },
        propType: 'boolean',
        defaultValue: false
    },
    {
        name: 'italic',
        title: {
            label: '斜体',
            tip: 'italic | 是否斜体'
        },
        propType: 'boolean',
        defaultValue: false
    },
    {
        name: 'underline',
        title: {
            label: '下划线',
            tip: 'underline | 添加下划线样式'
        },
        propType: 'boolean',
        defaultValue: false
    },
];

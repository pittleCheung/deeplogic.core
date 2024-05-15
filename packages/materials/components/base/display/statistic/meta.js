import screenshot from './__screenshots__/Toolbar_thumbnail.png';

export default {
    componentName: 'Statistic',
    category: '数据展示',
    title: '统计数值',
    screenshot,
    props: [
        {
            name: 'title',
            title: {
                label: '标题',
                tip: 'title | 数值的标题',
            },
            propType: 'string',
            defaultValue: '总功率',
        },
        {
            name: 'value',
            title: {
                label: '数值',
                tip: 'value | 数值的内容',
            },
            propType: 'string',
            defaultValue: '1000',
        },
        {
            name: 'precision',
            title: {
                label: '精度',
                tip: 'precision | 数值的精度',
            },
            propType: 'number',
            defaultValue: 0,
        },
        {
            name: 'prefix',
            title: {
                label: '前缀',
                tip: 'prefix | 数值的前缀',
            },
            propType: 'string',
            defaultValue: '',
        },
        {
            name: 'suffix',
            title: {
                label: '后缀',
                tip: 'suffix | 数值的后缀',
            },
            propType: 'string',
            defaultValue: '',
        },
        {
            name: 'formatter',
            title: {
                label: '格式化',
                tip: 'formatter | 格式化数值的函数',
            },
            propType: 'function',
            defaultValue: null,
        },
    ],
};

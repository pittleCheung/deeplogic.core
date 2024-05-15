import screenshot from './__screenshots__/Link_thumbnail.png';

export default {
    componentName: 'Badge',
    category: '数据展示',
    title: '徽标数',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'count',
            title: {
                label: '数字',
                tip: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏'
            },
            propType: 'number',
            defaultValue: 0
        },

        {
            name: 'overflowCount',
            title: {label: '封顶数字', tip: '	展示封顶的数字值'},
            propType: 'number',
            defaultValue: 99
        },

        {
            name: 'size',
            title: {
                label: '大小',
                tip: '在设置了 count 的前提下有效，设置小圆点的大小'
            },
            propType: 'select',
            values: {default: '默认', small: '小'}
        },
        {
            name: 'dot',
            title: {label: '显示红点', tip: '不展示数字，只有一个小红点'},
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'showZero',
            title: {label: '为0显示', tip: '当数值为 0 时，是否展示 Badge'},
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'color',
            title: {label: '颜色', tip: '自定义小圆点的颜色'},
            propType: 'color',
            defaultValue: '#ff4d4f'
        }
    ]
};

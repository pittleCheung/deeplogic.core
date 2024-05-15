import screenshot from './__screenshots__/Card_thumbnail.png';

export default {
    componentName: 'Card',
    category: '数据展示',
    title: '卡片',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'template',
            title: {
                label: '预设',
                tip: 'template | 预设样式'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                default: '默认',
                line: '线条',
                gradient: '渐变',
                green: '绿色'
            }
        },
        {
            name: 'title',
            title: {
                label: '标题',
                tip: 'title | 卡片标题'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'extra',
            title: {
                label: '额外内容',
                tip: 'extra | 卡片右上角的操作区域'
            },
            propType: 'string',
            defaultValue: ''
        },

        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 卡片尺寸'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                default: '默认',
                small: '小'
            }
        },
        {
            name: 'type',
            title: {
                label: '类型',
                tip: 'type | 卡片类型'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                default: '默认',
                inner: '内嵌'
            }
        },
        {
            name: 'bordered',
            title: {
                label: '边框',
                tip: 'bordered | 是否有边框'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'hoverable',
            title: {
                label: '悬停',
                tip: 'hoverable | 鼠标移过时可浮起'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'loading',
            title: {
                label: '加载中',
                tip: 'loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位'
            },
            propType: 'boolean',
            defaultValue: false
        }
    ]
};

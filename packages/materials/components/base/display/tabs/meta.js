export default {
    componentName: 'Tabs',
    category: '数据展示',
    title: '标签页',
    isElement: true,
    props: [
        {
            name: 'type',
            title: {
                label: '类型',
                tip: 'type | 页签的基本样式，可选 line、card editable-card 类型'
            },
            propType: 'select',
            defaultValue: 'line',
            values: {
                line: '线条',
                card: '卡片'
            }
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 大小，提供 large middle 和 small 三种大小'
            },
            propType: 'select',
            defaultValue: 'middle',
            values: {
                middle: '默认',
                small: '小',
                large: '大'
            }
        },

        {
            name: 'defaultActiveKey',
            title: {
                label: '默认激活',
                tip: 'defaultActiveKey | 初始化选中面板的 key'
            },
            propType: 'string',
            defaultValue: ''
        },

        {
            name: 'tabBarGutter',
            title: {
                label: '间距',
                tip: 'tabBarGutter | tab bar 之间的间距'
            },
            propType: 'number',
            defaultValue: 0
        },
        {
            name: 'tabPosition',
            title: {
                label: '位置',
                tip: 'tabPosition | 页签位置，可选值有 top right bottom left'
            },
            propType: 'select',
            defaultValue: 'top',
            values: {
                top: '上',
                right: '右',
                bottom: '下',
                left: '左'
            }
        },
        {
            name: 'centered',
            title: {
                label: '居中',
                tip: 'centered | 标签居中展示'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'destroyInactiveTabPane',
            title: {
                label: '销毁',
                tip: 'destroyInactiveTabPane | 当标签隐藏时是否销毁内容'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'items',
            title: {
                label: '标签',
                tip: 'items | 标签页的列表'
            },
            propType: 'array',
            defaultValue: [
                {
                    label: '标签1',
                    key: '1',
                    children: '内容1'
                },
                {
                    label: '标签2',
                    key: '2',
                    children: '内容2'
                }
            ],
            props: [
                {
                    name: 'label',
                    title: {label: '标题', tip: 'label | 选项卡头显示文字'},
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'key',
                    title: {label: '键', tip: 'key | 对应 activeKey'},
                    hidden: true,
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'disabled',
                    title: {label: '禁用', tip: 'disabled | 禁用某一项'},
                    propType: 'boolean',
                    defaultValue: false
                },
                {
                    name: 'closable',
                    title: {label: '可关闭', tip: 'closable | 是否显示选项卡的关闭按钮，在 type="editable-card" 时有效'},
                    propType: 'boolean',
                    defaultValue: true
                },
                {
                    name: 'children',
                    title: {label: '内容', tip: 'children | 选项卡头显示内容'},
                    propType: 'ReactNode',
                    hidden: true,
                    defaultValue: ''
                }
            ]
        }
    ]
};

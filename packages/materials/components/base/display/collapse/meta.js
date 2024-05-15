import screenshot from './__screenshots__/Accordion_thumbnail.png';

export default {
    componentName: 'Collapse',
    category: '数据展示',
    title: '折叠面板',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'size',
            title: {
                label: '尺寸',
                tips: 'size | 设置折叠面板大小'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                middle: '默认',
                small: '小',
                large: '大'
            }
        },
        {
            name: 'expandIconPosition',
            title: {
                label: '图标位置',
                tips: 'expandIconPosition | 箭头图标位置'
            },
            propType: 'select',
            defaultValue: 'left',
            values: {
                left: '左',
                right: '右'
            }
        },
        {
            name: 'accordion',
            title: {
                label: '手风琴',
                tips: 'accordion | 手风琴模式，每次只打开一个tab'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'bordered',
            title: {
                label: '边框',
                tips: 'bordered | 是否显示边框'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'ghost',
            title: {
                label: '幽灵',
                tips: 'ghost | 是否幽灵模式'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'items',
            title: {
                label: '数据',
                tips: 'items | 折叠面板的数据'
            },
            propType: 'array',
            defaultValue: [
                {key: 1, label: '面板1'},
                {key: 2, label: '面板2'},
                {key: 3, label: '面板3'}
            ],
            props: [
                {
                    name: 'label',
                    title: {
                        label: '标题',
                        tips: 'label | 面板标题'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'key',
                    title: {
                        label: '键值',
                        tips: 'key | 面板键值'
                    },
                    hidden: true,
                    propType: 'string'
                },
                {
                    name: 'children',
                    title: {
                        label: '内容',
                        tips: 'children | 面板内容'
                    },
                    propType: 'ReactNode',
                    hidden: true
                }
            ]
        }
    ]
};

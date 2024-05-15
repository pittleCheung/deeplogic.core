import screenshot from './__screenshots__/Dropdown_thumbnail.png';

export default {
    componentName: 'Dropdown',
    category: '导航',
    title: '下拉菜单',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'trigger',
            title: {
                label: '触发方式',
                tip: 'trigger | 触发方式'
            },
            defaultValue: ['hover'],
            propType: 'select',
            values: {
                hover: '鼠标移入',
                click: '点击'
            }
        },
        {
            name: 'placement',
            title: {
                label: '弹出位置',
                tip: 'placement | 弹出位置'
            },
            defaultValue: 'bottom',
            propType: 'select',
            values: {
                bottom: '下',
                bottomLeft: '下左',
                bottomRight: '下右',
                top: '上',
                topLeft: '上左',
                topRight: '上右'
            }
        },
        {
            name: 'children',
            title: {
                label: '子元素',
                tip: 'children | 子元素'
            },
            defaultValue: '下拉菜单',
            propType: 'string'
        },
        {
            name: 'disabled',
            title: {
                label: '禁用',
                tip: 'disabled | 禁用'
            },
            defaultValue: false,
            propType: 'boolean'
        },
        {
            name: 'arrow',
            title: {
                label: '显示箭头',
                tip: 'arrow | 下拉框箭头是否显示'
            },
            defaultValue: true,
            propType: 'boolean'
        },
        {
            name: 'autoAdjustOverflow',
            title: {
                label: '自动调整',
                tip: 'autoAdjustOverflow | 下拉框被遮挡时自动调整位置'
            },
            defaultValue: true,
            propType: 'boolean'
        },
        {
            name: 'autoFocus',
            title: {
                label: '自动聚焦',
                tip: 'autoFocus | 下拉框显示时自动聚焦'
            },
            defaultValue: false,
            propType: 'boolean'
        },
        {
            name: 'destroyPopupOnHide',
            title: {
                label: '隐藏销毁',
                tip: 'destroyPopupOnHide | 关闭后是否销毁下拉框'
            },
            defaultValue: false,
            propType: 'boolean'
        },
        {
            name: 'menu',
            title: {
                label: '菜单配置',
                tip: 'layout | 菜单配置'
            },
            defaultValue: {
                style: {
                    maxWidth: 240
                },
                items: [
                    {
                        label: '菜单项1',
                        key: '1',
                        disabled: false,
                        links: ''
                    },
                    {
                        label: '菜单项2',
                        key: '2',
                        disabled: false,
                        links: ''
                    },
                    {
                        label: '菜单项3',
                        key: '3',
                        disabled: false,
                        links: ''
                    }
                ]
            },
            propType: 'object',
            props: [
                {
                    name: 'items',
                    title: {
                        label: '菜单项',
                        tip: 'items | 菜单项'
                    },
                    propType: 'array',
                    defaultValue: [],
                    props: [
                        {
                            name: 'links',
                            title: {
                                label: '链接',
                                tip: 'links | 超链接'
                            },
                            defaultValue: '',
                            propType: 'links'
                        },
                        {
                            name: 'label',
                            title: {
                                label: '标题',
                                tip: 'label | 菜单项标题'
                            },
                            defaultValue: '',
                            propType: 'string'
                        },
                        {
                            name: 'disabled',
                            title: {
                                label: '禁用',
                                tip: 'disabled | 是否禁用'
                            },
                            defaultValue: false,
                            propType: 'boolean'
                        }
                    ]
                }
            ]
        }
    ]
};

import screenshot from './__screenshots__/Skeleton_thumbnail.png';

export default {
    componentName: 'Descriptions',
    category: '数据展示',
    title: '描述列表',
    screenshot,
    props: [
        {
            name: 'title',
            title: {
                label: '标题',
                tip: 'title | 描述列表的标题，显示在最顶部'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'column',
            title: {
                label: '列数',
                tip: 'column | 一行内容显示的列数'
            },
            propType: 'number',
            defaultValue: 3
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效'
            },
            propType: 'select',
            defaultValue: 'middle',
            values: {
                middle: '默认',
                small: '小'
            }
        },
        {
            name: 'layout',
            title: {
                label: '布局',
                tip: 'layout | 描述布局'
            },
            propType: 'select',
            defaultValue: 'horizontal',
            values: {
                horizontal: '水平',
                vertical: '垂直'
            }
        },
        {
            name: 'colon',
            title: {
                label: '冒号',
                tip: 'colon | 是否显示冒号'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'bordered',
            title: {
                label: '边框',
                tip: 'bordered | 是否展示边框'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'isExtra',
            title: {
                label: '额外内容',
                tip: 'isExtra | 是否展示额外的信息'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'items',
            title: {
                label: '描述项',
                tip: 'items | 描述列表的数据源'
            },
            propType: 'array',
            defaultValue: [
                {
                    key: '1',
                    label: '姓名',
                    children: '张某某',
                    span: 1
                },
                {
                    key: '2',
                    label: '手机号',
                    children: '1810000000',
                    span: 1
                },
                {
                    key: '3',
                    label: '居住地',
                    children: '浙江杭州',
                    span: 1
                },
                {
                    key: '4',
                    label: '备注',
                    children: '暂无',
                    span: 1
                },
                {
                    key: '5',
                    label: '详细地址',
                    children: '浙江杭州北京大街 18 号',
                    span: 1
                }
            ],
            props: [
                {
                    name: 'label',
                    title: {
                        label: '标签',
                        tip: 'label | 描述项的标签'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'children',
                    title: {
                        label: '内容',
                        tip: 'children | 描述项的内容'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'span',
                    title: {
                        label: '列数',
                        tip: 'span | 该描述项占据的列数'
                    },
                    propType: 'number',
                    defaultValue: 1
                }
            ]
        }
    ]
};

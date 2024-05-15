import {customStyle} from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Menu_thumbnail.png';

const items = [
    {
        key: '1',
        label: '导航一',
        disabled: false
    },
    {
        key: '2',
        label: '导航二',
        disabled: false
    },
    {
        key: '3',
        label: '导航三',
        disabled: false
    },
    {
        key: '4',
        label: '导航四',
        disabled: false
    }
];

export default {
    componentName: 'Menu',
    title: '菜单',
    category: '通用',
    screenshot,
    isElement: false,
    props: [
        {
            name: 'selectedKeys',
            title: {
                label: '选中项',
                tip: 'selectedKeys | 当前选中的菜单项 key 数组'
            },
            propType: 'string'
        },
        {
            name: 'inlineIndent',
            title: {
                label: '缩进宽度',
                tip: 'inlineIndent | 内嵌菜单缩进宽度'
            },
            defaultValue: 24,
            propType: 'number'
        },
        {
            name: 'mode',
            title: {
                label: '菜单类型',
                tip: 'mode | 菜单类型'
            },
            defaultValue: 'vertical',
            propType: 'select',
            values: {
                vertical: '垂直',
                horizontal: '水平',
                inline: '内嵌'
            }
        },
        {
            name: 'items',
            title: {
                label: '菜单数据',
                tip: 'items | 菜单数据'
            },
            propType: 'array',
            defaultValue: items,
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
    ],
    style: {
        ...customStyle({borderBottomWidth: 0, lineHeight: '46px'})
    }
};

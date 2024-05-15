import {customEvents, customStatus, customStyle} from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Button_thumbnail.png';

export default {
    componentName: 'Button',
    title: '按钮',
    category: '通用',
    screenshot,
    props: [
        {
            name: 'children',
            title: {
                label: '内容',
                tip: 'children | 内容'
            },
            defaultValue: '按钮',
            propType: 'string'
        },
        {
            name: 'template',
            title: {
                label: '预设',
                tip: 'template | 预设模板'
            },
            defaultValue: 'default',
            propType: 'select',
            values: {
                default: '默认',
                science: '科技',
                line: '线条',
                hexagon: '不规则',
                navigation: '导航'
            }
        },
        {
            name: 'type',
            title: {
                label: '类型',
                tip: 'type | 设置按钮类型'
            },
            defaultValue: 'default',
            propType: 'select',
            values: {
                default: '默认',
                primary: '主要',
                dashed: '虚线',
                link: '链接',
                text: '文本'
            }
        },
        {
            name: 'shape',
            title: {
                label: '按钮形状',
                tip: 'type | 设置按钮形状'
            },
            defaultValue: 'default',
            propType: 'select',
            values: {
                round: '圆角',
                circle: '圆形',
                default: '默认'
            }
        },
        {
            name: 'icon',
            title: {
                label: '图标',
                tip: 'icon | 设置按钮图标'
            },
            defaultValue: '',
            propType: 'icon'
        },
        {
            name: 'htmlType',
            title: {
                label: '表单类型',
                tip: 'htmlType | 设置 button 原生的 type 值，需放置于表单项中使用'
            },
            defaultValue: 'button',
            propType: 'select',
            values: {
                button: '按钮',
                submit: '提交',
                reset: '重置'
            }
        },
        {
            name: 'isHighlight',
            title: {
                label: '是否高亮',
                tip: '预设-导航 | 是否高亮'
            },
            defaultValue: 'default',
            propType: 'select',
            values: {
                default: '默认',
                primary: '高亮',
            }
        },
        customStatus({})
    ],
    style: customStyle({
        paddingSide: 'side',
        padding: 4,
        paddingTop: 4,
        paddingRight: 15,
        paddingBottom: 4,
        paddingLeft: 15,
        textAlign: 'center',
        height: 32,
        width: 'initial'
    }),
    events: customEvents({})
};

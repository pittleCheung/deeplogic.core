import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'Form',
    title: '表单',
    category: '表单',
    screenshot: null,
    isElement: true,
    props: [
        {
            name: 'name',
            title: {
                label: '字段名',
                tip: 'name | 字段名'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'colon',
            title: {
                label: '冒号',
                tip: 'colon | 表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'disabled',
            title: {
                label: '禁用',
                tip: 'disabled | 设置表单组件禁用，仅对 antd 组件有效'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'labelWrap',
            title: {
                label: '标签换行',
                tip: 'labelWrap | label 标签的文本换行方式\t'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'labelAlign',
            title: {
                label: '标签对齐',
                tip: 'labelAlign | label 标签的文本对齐方式'
            },
            propType: 'select',
            defaultValue: 'right',
            values: {
                right: '右对齐',
                left: '左对齐'
            }
        },
        {
            name: 'layout',
            title: {
                label: '布局',
                tip: 'layout | 表单布局'
            },
            propType: 'select',
            defaultValue: 'horizontal',
            values: {
                horizontal: '水平',
                vertical: '垂直',
                inline: '内联'
            }
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 表单组件大小'
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
            name: 'labelCol',
            title: {
                label: '标签栅格',
                tip: 'labelCol | label 标签布局'
            },
            propType: 'object',
            props: [
                {
                    name: 'span',
                    title: {
                        label: '占位格数',
                        tip: 'span | 栅格占位格数，为 0 时相当于 display: none'
                    },
                    propType: 'number',
                    max: 24,
                    min: 0
                },
                {
                    name: 'offset',
                    title: {
                        label: '左侧间隔',
                        tip: 'offset | 栅格左侧的间隔格数，间隔内不可以有栅格'
                    },
                    propType: 'number',
                    min: 0
                }
            ]
        },
        {
            name: 'wrapperCol',
            title: {
                label: '控件栅格',
                tip: 'wrapperCol | 表单组件布局'
            },
            propType: 'object',
            props: [
                {
                    name: 'span',
                    title: {
                        label: '占位格数',
                        tip: 'span | 栅格占位格数，为 0 时相当于 display: none'
                    },
                    propType: 'number',
                    max: 24,
                    min: 0
                },
                {
                    name: 'offset',
                    title: {
                        label: '左侧间隔',
                        tip: 'offset | 栅格左侧的间隔格数，间隔内不可以有栅格'
                    },
                    propType: 'number',
                    min: 0
                }
            ]
        }
    ],
    events: customEvents({
        events: [
            {
                name: 'onFinish',
                title: {
                    label: '完成',
                    tip: 'onFinish | 表单完成回调'
                },
                fieldProps: {
                    labelWidth: 80
                },
                props: {
                    type: 'event',
                    placeholder: '表单完成回调'
                }
            }
        ],
        isDefault: false
    }),
    style: customStyle({}, {}, false)
};

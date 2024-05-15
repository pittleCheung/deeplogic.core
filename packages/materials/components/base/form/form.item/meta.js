import {customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'FormItem',
    title: '表单项',
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
            name: 'label',
            title: {
                label: '标签',
                tip: 'label | 标签'
            },
            propType: 'string',
            defaultValue: ''
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
        },
        {
            name: 'rules',
            title: {
                label: '校验规则',
                tip: 'rules | 校验规则'
            },
            propType: 'array',
            defaultValue: [],
            props: [
                {
                    name: 'required',
                    title: {
                        label: '必填',
                        tip: 'required | 必填'
                    },
                    propType: 'boolean',
                    defaultValue: false
                },
                {
                    name: 'type',
                    title: {
                        label: '类型',
                        tip: 'type | 类型'
                    },
                    propType: 'select',
                    defaultValue: 'string',
                    values: {
                        string: '字符串',
                        number: '数字',
                        array: '数组',
                        integer: '整数',
                        float: '浮点数',
                        regexp: '正则表达式',
                        object: '对象'
                    }
                },
                {
                    name: 'max',
                    title: {
                        label: '最大长度',
                        tip: 'max | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度'
                    },
                    propType: 'number',
                    defaultValue: null
                },
                {
                    name: 'min',
                    title: {
                        label: '最小长度',
                        tip: 'min | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度'
                    },
                    propType: 'number',
                    defaultValue: null
                },
                {
                    name: 'message',
                    title: {
                        label: '提示信息',
                        tip: 'message | 提示信息'
                    },
                    propType: 'string',
                    defaultValue: ''
                }
            ]
        }
    ],
    style: customStyle({}, {}, false)
};

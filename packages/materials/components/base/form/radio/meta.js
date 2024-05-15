import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'Radio',
    title: '单选框',
    category: '表单',
    screenshot: null,
    props: [
        {
            name: 'optionType',
            title: {
                label: '选项类型',
                tip: 'optionType | 选项类型'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                default: '默认',
                button: '按钮'
            }
        },
        {
            name: 'disabled',
            title: {
                label: '禁用',
                tip: 'disabled | 是否禁用'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'size',
            title: {
                label: '大小',
                tip: 'size | 单选框大小'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                small: '小',
                default: '默认',
                large: '大'
            }
        },
        {
            name: 'options',
            title: {
                label: '选项',
                tip: 'options | 选项'
            },
            propType: 'array',
            defaultValue: [
                {
                    label: '选项1',
                    value: '1',
                    key: '1'
                },
                {
                    label: '选项2',
                    value: '2',
                    key: '2'
                }
            ],
            props: [
                {
                    name: 'label',
                    title: {
                        label: '标签',
                        tip: 'label | 选项的标签'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'value',
                    title: {
                        label: '值',
                        tip: 'value | 选项的值'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'disabled',
                    title: {
                        label: '禁用',
                        tip: 'disabled | 是否禁用'
                    },
                    propType: 'boolean',
                    defaultValue: false
                }
            ]
        }
    ],
    style: customStyle({}, {}, false),
    events: customEvents({
        events: [
            {
                name: 'onChange',
                title: {
                    label: '改变',
                    tip: 'onChange | 单选框发生变化的回调'
                }
            }
        ],
        isDefault: false
    })
};

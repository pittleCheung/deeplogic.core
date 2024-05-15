import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'Select',
    title: '选择器',
    category: '表单',
    screenshot: null,
    props: [
        {
            name: 'placeholder',
            title: {
                label: '占位符',
                tip: 'placeholder | 选择器的占位符'
            },
            propType: 'string',
            defaultValue: '请选择'
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 选择框大小'
            },
            propType: 'select',
            defaultValue: 'middle',
            values: {
                large: '大',
                middle: '默认',
                small: '小'
            }
        },
        {
            name: 'mode',
            title: {
                label: '模式',
                tip: 'mode | 设置 Select 的模式为多选或标签'
            },
            propType: 'select',
            values: {
                multiple: '多选',
                tags: '标签'
            }
        },
        {
            name: 'optionType',
            title: {
                label: '预设选项',
                tip: 'optionType | 内置的选项'
            },
            propType: 'select',
            defaultValue: 'default',
            values: {
                default: '默认',
                aggregate: '聚合',
                timeType: '粒度',
                level: '层级',
                durationFilter: '持续时间'
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
            name: 'allowClear',
            title: {
                label: '允许清除',
                tip: 'allowClear | 是否允许清除'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'variant',
            title: {
                label: '变体',
                tip: 'variant | 形态变体'
            },
            propType: 'select',
            defaultValue: 'outlined',
            values: {
                outlined: '描边',
                filled: '填充',
                borderless: '无边框'
            }
        },
        {
            name: 'options',
            title: {
                label: '选项',
                tip: 'options | 选择器的选项'
            },
            propType: 'array',
            defaultValue: [
                {value: '1', label: '选项1'},
                {value: '2', label: '选项2'},
                {value: '3', label: '选项3'}
            ],
            props: [
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
                    name: 'label',
                    title: {
                        label: '标签',
                        tip: 'label | 选项的标签'
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
                    tip: 'onChange | 选择框发生变化的回调'
                }
            }
        ],
        isDefault: false
    })
};

import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'TimePicker',
    category: '表单',
    title: '时间选择器',
    screenshot: null,
    props: [
        {
            name: 'placeholder',
            title: {
                label: '占位符',
                tip: 'placeholder | 时间选择器的占位符'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'format',
            title: {
                label: '格式',
                tip: 'format | 展示的时间格式'
            },
            propType: 'select',
            defaultValue: 'HH:mm:ss',
            values: {
                'HH:mm:ss': '14:00:00',
                'HH:mm': '14:00',
                HH: '14'
            }
        },
        {
            name: 'size',
            title: {
                label: '大小',
                tip: 'size | 时间选择器大小'
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
            name: 'hourStep',
            title: {
                label: '小时步长',
                tip: 'hourStep | 小时选项间隔'
            },
            propType: 'number',
            defaultValue: 1,
            min: 1,
            max: 24
        },
        {
            name: 'minuteStep',
            title: {
                label: '分钟步长',
                tip: 'minuteStep | 分钟选项间隔'
            },
            propType: 'number',
            defaultValue: 1,
            min: 1,
            max: 60
        },
        {
            name: 'secondStep',
            title: {
                label: '秒步长',
                tip: 'secondStep | 秒选项间隔'
            },
            propType: 'number',
            defaultValue: 1,
            min: 1,
            max: 60
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
            name: 'showNow',
            title: {
                label: '显示此刻',
                tip: 'showNow | 是否显示此刻按钮'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'showSecond',
            title: {
                label: '显示秒',
                tip: 'showSecond | 是否显示秒'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'use12Hours',
            title: {
                label: '12小时制',
                tip: 'use12Hours | 是否使用12小时制'
            },
            propType: 'boolean',
            defaultValue: false
        }
    ],
    style: customStyle({}, {}, false),
    events: customEvents({
        events: [
            {
                name: 'onChange',
                title: {
                    label: '改变',
                    tip: 'onChange | 时间发生变化的回调'
                }
            }
        ],
        isDefault: false
    })
};

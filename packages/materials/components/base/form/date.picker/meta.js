import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'DatePicker',
    category: '表单',
    title: '日期选择器',
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
            name: 'picker',
            title: {
                label: '选择器',
                tip: 'picker | 时间选择器的类型'
            },
            propType: 'select',
            defaultValue: 'date',
            values: {
                year: '年',
                month: '月',
                week: '周',
                date: '日期',
                quarter: '季度'
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
            name: 'format',
            title: {
                label: '格式',
                tip: 'format | 展示的时间格式'
            },
            propType: 'select',
            defaultValue: 'YYYY-MM-DD',
            values: {
                'YYYY-MM-DD': '2023-12-20',
                'YYYY-MM-DD HH:mm:ss': '2023-12-20 14:00:00',
                'YYYY-MM-DD HH:mm': '2023-12-20 14:00',
                'YYYY-MM-DD HH': '2023-12-20 14',
                'YYYY-MM': '2023-12',
                'YYYY-QQ': '2023-Q1',
                YYYY: '2023'
            }
        },
        {
            name: 'placement',
            title: {
                label: '弹出位置',
                tip: 'placement | 弹出位置'
            },
            propType: 'select',
            defaultValue: 'bottomLeft',
            values: {
                bottomLeft: '下左',
                bottomRight: '下右',
                topLeft: '上左',
                topRight: '上右'
            }
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
            name: 'range',
            title: {
                label: '范围',
                tip: 'range | 是否为时间范围选择'
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
            name: 'showTime',
            title: {
                label: '显示时间',
                tip: 'showTime | 是否显示时间选择器'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'showToday',
            title: {
                label: '显示今天',
                tip: 'showToday | 是否显示今天按钮'
            },
            propType: 'boolean',
            defaultValue: true
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
        }
    ],
    style: customStyle({}, {}, false),
    events: customEvents({
        events: [
            {
                name: 'onChange',
                title: {
                    label: '改变',
                    tip: 'onChange | 日期时间发生变化的回调'
                }
            }
        ],
        isDefault: false
    })
};

import dayjs from 'dayjs';
import {DICTS_C051, DICTS_C052, DICTS_C056, DICTS_C057, DICTS_C058} from '../../global';
import {getDict} from './utils';

export const boolSetter = {
    normalize: (value) => value === 'true'
};

export const defaultValues = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    widthType: 'relative',
    heightType: 'fit-content',
    fontFamily: 'Microsoft YaHei',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'left',
    spacing: 0,
    paddingSide: 'all',
    marginSide: 'all'
};

export const defaultStyle = {
    name: 'style',
    title: {
        label: '样式',
        tip: 'style | 样式'
    },
    propType: 'object',
    setter: {
        component: 'StyleSetter',
        props: {
            open: true,
            values: defaultValues
        }
    }
};

export const defaultOnClick = {
    name: 'onClick',
    title: {
        label: '点击',
        tip: 'onClick | 点击'
    },
    fieldProps: {
        labelWidth: 80
    },
    props: {
        type: 'event',
        placeholder: '点击事件'
    }
};

export const customStyle = (styles, props, hideDefault) => {
    const style = hideDefault ? {} : defaultValues;

    return {
        name: 'style',
        title: {
            label: '样式',
            tip: 'style | 样式'
        },
        propType: 'object',
        setter: {
            component: 'StyleSetter',
            props: {
                open: true,
                ...props,
                values: {
                    ...style,
                    ...styles
                }
            }
        }
    };
};

export const customSvgStyle = (style, props) => {
    return {
        name: 'style',
        title: {
            label: '样式',
            tip: 'style | 样式'
        },
        propType: 'object',
        setter: {
            component: 'NodeSetter',
            props: {
                open: true,
                values: {
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    width: 100,
                    height: 100,
                    fill: '#000',
                    opacity: 1,
                    borderRadius: 0,
                    ...style
                },
                ...props
            }
        }
    };
};

export const customStatus = ({props = [], defaultValue = []}) => {
    return {
        name: 'status',
        title: {
            label: '状态',
            tip: 'status | 用于绑定点表状态'
        },
        propType: 'array',
        defaultValue,
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
                name: 'expression',
                title: {
                    label: '表达式',
                    tip: 'expression | 选项的值'
                },
                propType: 'string',
                defaultValue: ''
            },
            {
                name: 'color',
                title: {
                    label: '文本颜色',
                    tip: 'color | 选择文字颜色'
                },
                propType: 'color',
                defaultValue: ''
            },
            ...props
        ]
    };
};

export const customEvents = ({events = [], isDefault = true}) => {
    const props = isDefault ? [defaultOnClick, ...events] : events;

    return {
        name: 'events',
        title: {
            label: '事件',
            tip: 'events | 用于绑定事件'
        },
        setter: {
            component: 'EventSetter',
            props
        }
    };
};

export const customPopConfirm = ({props = []}) => {
    return [
        {
            name: 'isPopConfirm',
            title: {
                label: '弹窗确认',
                tip: 'isPopConfirm | 是否弹窗确认'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'popConfirm',
            title: {
                label: '弹窗确认',
                tip: 'popConfirm | 弹窗确认'
            },
            propType: 'object',
            relatedProps: {isPopConfirm: true},
            props: [
                {
                    name: 'title',
                    title: {
                        label: '标题',
                        tip: 'title | 确认框标题'
                    },
                    propType: 'string',
                    defaultValue: '数据下发'
                },
                {
                    name: 'content',
                    title: {
                        label: '内容',
                        tip: 'content | 弹窗内容'
                    },
                    propType: 'string',
                    defaultValue: '是否确认下发数据？'
                },
                {
                    name: 'okText',
                    title: {
                        label: '确认',
                        tip: 'okText | 确认按钮文字'
                    },
                    propType: 'string',
                    defaultValue: '确认'
                },
                {
                    name: 'cancelText',
                    title: {
                        label: '取消',
                        tip: 'cancelText | 取消按钮文字'
                    },
                    propType: 'string',
                    defaultValue: '取消'
                },
                {
                    name: 'showCancel',
                    title: {
                        label: '显示取消',
                        tip: 'showCancel | 是否显示取消按钮'
                    },
                    propType: 'boolean',
                    defaultValue: true
                },
                ...props
            ]
        }
    ];
};

/**
 * 默认点表参数
 */
export const defaultPointOptions = [
    {
        name: 'tags',
        title: {
            label: '点表',
            tip: 'tags | 点表'
        },
        linkable: true,
        hidden: true
    },
    {
        name: 'dateType',
        title: {
            label: '周期',
            tip: 'dateType | 周期，用于通过不同的（日/周/月/年）周期获取数据，默认为日'
        },
        propType: 'select',
        defaultValue: 'day',
        linkable: true,
        hidden: true,
        values: {
            day: '日',
            week: '周',
            month: '月',
            quarter: '季',
            year: '年'
        }
    },
    {
        name: 'ranges',
        title: {
            label: '范围',
            tip: 'ranges | 时间范围，用于获取指定时间范围内的数据，默认为当天'
        },
        propType: 'date',
        relatedProps: 'dateType',
        defaultValue: dayjs(),
        hidden: true,
        linkable: true
    },
    {
        name: 'begin',
        title: {
            label: '开始时间',
            tip: 'begin | 开始时间'
        },
        linkable: true,
        propType: 'date'
    },
    {
        name: 'end',
        title: {
            label: '结束时间',
            tip: 'end | 结束时间'
        },
        linkable: true,
        propType: 'date'
    },
    {
        name: 'aggregate',
        title: {
            label: '聚合',
            tip: 'aggregate | 聚合方式，用于获取聚合类型的点表数据'
        },
        propType: 'select',
        defaultValue: 'last',
        linkable: true,
        values: getDict(DICTS_C057)
    },
    {
        name: 'timeType',
        title: {
            label: '粒度',
            tip: 'timeType | 时间粒度，用于获取不同粒度的点表数据'
        },
        propType: 'select',
        defaultValue: '5 minutes',
        linkable: true,
        values: getDict(DICTS_C056)
    }
];

// 默认报警参数
export const defaultWarningOptions = [
    {
        name: 'key',
        title: {
            label: '关键字',
            tip: 'key | 查询报警名称/内容'
        },
        linkable: true,
        propType: 'string',
        defaultValue: ''
    },
    {
        name: 'dateType',
        title: {
            label: '周期',
            tip: 'dateType | 周期，用于通过不同的（日/周/月/年）周期获取数据，默认为日'
        },
        propType: 'select',
        defaultValue: 'day',
        linkable: true,
        values: {
            day: '日',
            week: '周',
            month: '月',
            year: '年'
        },
        relatedProps: {date: ''}
    },
    {
        name: 'date',
        title: {
            label: '开始时间',
            tip: 'startDate | 开始时间'
        },
        linkable: true,
        propType: 'date',
        relatedProps: {dateType: ''}
    },
    {
        name: 'endDate',
        title: {
            label: '结束时间',
            tip: 'endDate | 结束时间'
        },
        linkable: true,
        propType: 'date',
        relatedProps: {dateType: ''}
    },
    {
        name: 'subSystemId',
        title: {
            label: '子系统',
            tip: 'subSystemId | 子系统'
        },
        linkable: true,
        propType: 'subSystem'
    },
    {
        name: 'level',
        title: {
            label: '级别',
            tip: 'level | 级别'
        },
        propType: 'select',
        linkable: true,
        values: getDict(DICTS_C052)
    },
    {
        name: 'type',
        title: {
            label: '类型',
            tip: 'type | 报警类型Key'
        },
        propType: 'select',
        linkable: true,
        values: getDict(DICTS_C051)
    },
    {
        name: 'durationFilter',
        title: {
            label: '持续时间',
            tip: 'durationFilter | 持续时间'
        },
        propType: 'select',
        linkable: true,
        values: getDict(DICTS_C058)
    },
    {
        name: 'needData',
        title: {
            label: '是否需要数据',
            tip: 'needData | 是否需要数据'
        },
        propType: 'boolean',
        linkable: true,
        defaultValue: true
    }
];

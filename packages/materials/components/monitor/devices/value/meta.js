import screenshot from '../__screenshots__/Image_thumbnail.png';
import { commonDeviceStyle as style, deviceTypeOptions, commonDeviceHandle as events } from '../../tool';

export default {
    componentName: 'Valve',
    category: '数据展示',
    title: '阀门',
    screenshot,
    isDevice: true,
    props: [
        {
            name: 'devicetype',
            title: {
                label: '设备类型',
                tip: 'devicetype | 设备类型',
            },
            defaultValue: 'D0A30',
            propType: 'string',
        },
        {
            name: 'device',
            title: {
                label: '选择设备',
                tip: 'device | 选择设备',
            },
            propType: 'device',
        },
        {
            name: 'status',
            title: {
                label: '设备状态',
                tip: 'status | 设备状态'
            },
            propType: 'array',
            defaultValue: [
                {
                    label: '关闭',
                    value: '0',
                    key: '1'
                },
                {
                    label: '开启',
                    value: '1',
                    key: '2'
                },
                {
                    label: '报警',
                    value: '0',
                    key: '3'
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
                    name: 'expression',
                    title: {
                        label: '表达式',
                        tip: 'value | 选项的值'
                    },
                    propType: 'string',
                    defaultValue: ''
                },
                {
                    name: 'color',
                    title: {
                        label: '颜色',
                        tip: 'color | 选择颜色'
                    },
                    propType: 'color',
                    defaultValue: ''
                }
            ]
        }
    ],
    style: style({width: 15, height: 19}),
    events
};

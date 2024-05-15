import screenshot from '../__screenshots__/Image_thumbnail.png';
import { commonDeviceHandle as events, deviceTypeOptions, commonDeviceStyle as style } from '../../tool';

export default {
    componentName: 'PipeH',
    category: '数据展示',
    title: '横向管道',
    screenshot,
    isDevice: true,
    props: [
        {
            name: 'direction',
            title: {
                label: '水流方向',
                tip: 'direction | 水流方向',
            },
            defaultValue: '0',
            propType: 'select',
            values: {
                '0': '正向',
                '1': '逆向',
            },
        },
        {
            name: 'status',
            title: {
                label: '水管状态',
                tip: 'status | 水管状态'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'waterstyle',
            title: {
                label: '水管样式',
                tip: 'waterstyle | 水管样式',
            },
            defaultValue: '0',
            propType: 'select',
            values: {
                '0': '冷冻水出水', //#407FCB
                '1': '冷却水出水', //#EEBE57
                '2': '冷冻水回水', //#7C90BA
                '3': '冷却水回水' //#ABBA6F
            },
        },

    ],
    style: style({width: 150, height: 5, fill: ''}),
    events
};

import screenshot from '../__screenshots__/Image_thumbnail.png';
import { commonDeviceStyle as style } from '../../tool';
import { commonDeviceHandle as events } from '../../tool';

export default {
    componentName: 'PipeT',
    category: '数据展示',
    title: '三通连接头',
    screenshot,
    isDevice: true,
    style: style({width: 15, height: 18}),
    events
};

import screenshot from '../__screenshots__/Image_thumbnail.png';
import { commonDeviceStyle as style } from '../../tool';
import { commonDeviceHandle as events } from '../../tool';

export default {
    componentName: 'PipeC',
    category: '数据展示',
    title: '十字连接头',
    screenshot,
    isDevice: true,
    style: style({width: 16, height: 16}),
    events
};

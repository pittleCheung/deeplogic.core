import screenshot from '../__screenshots__/Image_thumbnail.png';
import { commonDeviceStyle as style, commonDeviceHandle as events } from '../../tool';

export default {
    componentName: 'PipeW',
    category: '数据展示',
    title: '弯头连接头',
    screenshot,
    isDevice: true,
    style: style({width: 14, height: 21}),
    events
};

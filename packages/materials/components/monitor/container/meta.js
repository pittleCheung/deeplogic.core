import {customStyle} from '../../_utils/baseMeta';
import screenshot from './__screenshots__/Icon_thumbnail.png';

export default {
    componentName: 'DrawCanva',
    category: '监控组态',
    title: '监控组态',
    screenshot,
    isElement: true,
    style: customStyle({height: document.documentElement.clientHeight - 144 + 'px', width: '100%'},['size', 'background']),
    
};

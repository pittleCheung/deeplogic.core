import {customSvgStyle} from '../../_utils/baseMeta';

export default {
    componentName: 'SvgMaterial',
    title: '图片素材',
    category: '素材',
    props: [
        {
            name: 'component',
            title: {
                label: '组件',
                tip: 'component | 组件'
            },
            defaultValue: '',
            propType: 'svg',
            hidden: true
        }
    ],
    style: customSvgStyle({}, {show: ['size', 'fill']})
};

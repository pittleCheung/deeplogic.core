import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'GenericIcon',
    title: '图标',
    category: '通用',
    props: [
        {
            name: 'icon',
            title: {
                label: '图标',
                tip: 'icon | 图标'
            },
            defaultValue: 'AntDesignOutlined',
            propType: 'icon'
        }
    ],
    style: customStyle({}, {show: ['font', 'spacing']}),
    events: customEvents({})
};

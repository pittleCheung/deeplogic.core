import {customEvents} from '../../../_utils/baseMeta';

export default {
    componentName: 'Link',
    category: '基础',
    title: '链接',
    isElement: true,
    props: [
        {
            name: 'href',
            title: {
                label: '链接',
                tip: 'href | 链接'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'target',
            title: {
                label: '打开方式',
                tip: 'target | 链接打开方式'
            },
            propType: 'select',
            defaultValue: '_blank',
            values: {
                _blank: '新窗口',
                _self: '当前窗口'
            }
        },
        {
            name: 'children',
            title: {
                label: '文本',
                tip: 'children | 文本'
            },
            propType: 'string',
            defaultValue: '超链接'
        }
    ],
    events: customEvents({})
};

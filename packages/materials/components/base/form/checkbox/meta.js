import {customEvents, customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'Checkbox',
    title: '多选框',
    category: '表单',
    screenshot: null,
    props: [
        {
            name: 'value',
            title: {
                label: '值',
                tip: 'value | 选中的值'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'label',
            title: {
                label: '标签',
                tip: 'value | 选中的值'
            },
            propType: 'string',
            defaultValue: ''
        },
        {
            name: 'options',
            title: {
                label: '选项',
                tip: 'options | 选项'
            },
            propType: 'array',
            defaultValue: [],
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
                    name: 'disabled',
                    title: {
                        label: '禁用',
                        tip: 'disabled | 是否禁用'
                    },
                    propType: 'boolean',
                    defaultValue: false
                }
            ]
        }
    ],
    style: customStyle({}, {}, false),
    events: customEvents({
        events: [
            {
                name: 'onChange',
                title: {
                    label: '改变',
                    tip: 'onChange | 日期时间发生变化的回调'
                }
            }
        ],
        isDefault: false
    })
};

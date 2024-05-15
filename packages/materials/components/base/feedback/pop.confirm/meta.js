import {customEvents} from '../../../_utils/baseMeta';

export default {
    componentName: 'PopConfirm',
    category: '反馈',
    title: '气泡确认框',
    isElement: true,
    props: [
        {
            name: 'title',
            title: {
                label: '标题',
                tip: 'title | 确认框标题'
            },
            propType: 'string',
            defaultValue: '数据下发'
        },
        {
            name: 'content',
            title: {
                label: '内容',
                tip: 'content | 弹窗内容'
            },
            propType: 'string',
            defaultValue: '是否确认下发数据？'
        },
        {
            name: 'okText',
            title: {
                label: '确认',
                tip: 'okText | 确认按钮文字'
            },
            propType: 'string',
            defaultValue: '确认'
        },
        {
            name: 'cancelText',
            title: {
                label: '取消',
                tip: 'cancelText | 取消按钮文字'
            },
            propType: 'string',
            defaultValue: '取消'
        },
        {
            name: 'showCancel',
            title: {
                label: '显示取消',
                tip: 'showCancel | 是否显示取消按钮'
            },
            propType: 'boolean',
            defaultValue: true
        }
    ],
    events: customEvents({
        events: [
            {
                name: 'onConfirm',
                title: {
                    label: '确认',
                    tip: 'onConfirm | 点击确认的回调'
                },
                fieldProps: {
                    labelWidth: 80
                },
                props: {
                    type: 'event',
                    placeholder: '点击确认的回调'
                }
            }
        ],
        isDefault: false
    })
};

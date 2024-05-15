import screenshot from './__screenshots__/Divider_thumbnail.png';

export default {
    componentName: 'Divider',
    category: '通用',
    title: '分割线',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'type',
            title: {
                label: '类型',
                tip: 'type | 水平还是垂直类型'
            },
            defaultValue: 'horizontal',
            propType: 'select',
            values: {
                horizontal: '水平',
                vertical: '垂直'
            }
        },
        {
            name: 'orientation',
            title: {
                label: '文字位置',
                tip: 'orientation | 分割线标题的位置'
            },
            defaultValue: 'center',
            propType: 'select',
            values: {
                left: '左',
                center: '中',
                right: '右'
            }
        },
        {
            name: 'children',
            title: {
                label: '内容',
                tip: 'children | 分割线标题的内容'
            },
            defaultValue: '',
            propType: 'string'
        },
        {
            name: 'orientationMargin',
            title: {
                label: '间距',
                tip: 'orientationMargin | 分割线标题的位置间距'
            },
            propType: 'number',
            defaultValue: 8
        },
        {
            name: 'dashed',
            title: {
                label: '虚线',
                tip: 'dashed | 是否虚线'
            },
            defaultValue: false,
            propType: 'boolean'
        },
        {
            name: 'plain',
            title: {
                label: '文本',
                tip: 'plain | 是否只有文本'
            },
            defaultValue: false,
            propType: 'boolean'
        }
    ]
};

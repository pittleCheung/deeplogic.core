export default {
    componentName: 'Modal',
    category: '反馈',
    title: '对话框',
    screenshot: null,
    isElement: true,
    props: [
        {
            name: 'width',
            title: {
                label: '宽度',
                tip: 'width | 宽度'
            },
            propType: 'number',
            defaultValue: 520
        },
        {
            name: 'centered',
            title: {
                label: '垂直居中',
                tip: 'centered | 垂直居中展示 Modal'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'destroyOnClose',
            title: {
                label: '关闭销毁',
                tip: 'destroyOnClose | 关闭时销毁 Modal 里的子元素'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'isTitle',
            title: {
                label: '标题',
                tip: 'isTitle | 是否显示标题'
            },
            defaultValue: true,
            propType: 'boolean'
        },
        {
            name: 'isFooter',
            title: {
                label: '底部',
                tip: 'isFooter | 是否显示底部'
            },
            defaultValue: false,
            propType: 'boolean'
        },

        {
            name: 'mask',
            title: {
                label: '遮罩',
                tip: 'mask | 是否展示遮罩'
            },
            defaultValue: true,
            propType: 'boolean'
        },
        {
            name: 'closable',
            title: {
                label: '关闭按钮',
                tip: 'closable | 是否显示右上角的关闭按钮'
            },
            defaultValue: true,
            propType: 'boolean'
        },

        {
            name: 'maskClosable',
            title: {
                label: '蒙层关闭',
                tip: 'maskClosable | 点击蒙层是否允许关闭'
            },
            defaultValue: true,
            propType: 'boolean'
        }
    ]
};

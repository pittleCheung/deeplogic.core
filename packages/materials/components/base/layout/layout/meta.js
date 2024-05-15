export default {
    componentsName: 'Layout',
    category: '布局',
    title: '布局',
    props: [
        {
            name: 'type',
            title: {
                label: '布局',
                tip: 'type | 布局',
            },
            propType: 'select',
            defaultValue: 'horizontal',
            values: {
                horizontal: '水平',
                vertical: '垂直',
            },
        },
        {
            name: 'theme',
            title: {
                label: '主题',
                tip: 'theme | 主题',
            },
            propType: 'select',
            defaultValue: 'light',
            values: {
                light: '亮色',
                dark: '暗色',
            },
        },
        {
            name: 'isHeader',
            title: {
                label: '头部',
                tip: 'isHeader | 是否显示头部',
            },
            propType: 'boolean',
            defaultValue: true,
        },
        {
            name: 'isFooter',
            title: {
                label: '底部',
                tip: 'isFooter | 是否显示底部',
            },
            propType: 'boolean',
            defaultValue: true,
        },
        {
            name: 'isSider',
            title: {
                label: '侧边栏',
                tip: 'isSider | 是否显示侧边栏',
            },
            propType: 'boolean',
            defaultValue: true,
        },
    ],
};

import screenshot from './__screenshots__/Avatar_thumbnail.png';

export default {
    componentName: 'Avatar',
    category: '数据展示',
    title: '头像',
    screenshot,
    props: [
        // {
        //   name: 'icon',
        //   title: { label: '图标', tip: '设置头像的自定义图标' },
        //   defaultValue: '',
        //   propType: 'string'
        // },
        {
            name: 'shape',
            title: {label: '形状', tip: '指定头像的形状'},
            defaultValue: 'circle',
            propType: 'select',
            values: {circle: '圆形', square: '方形'}
        },
        {
            name: 'size',
            title: {label: '大小', tip: '设置头像的大小'},
            defaultValue: 'default',
            propType: 'select',
            values: {small: '小', default: '中', large: '大'}
        },
        {
            name: 'src',
            title: {
                label: '图片',
                tip: '图片类头像的资源地址或者图片元素'
            },
            propType: 'image'
        }
    ]
};

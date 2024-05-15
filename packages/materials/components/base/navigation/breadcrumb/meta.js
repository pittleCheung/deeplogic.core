import screenshot from './__screenshots__/Link_thumbnail.png';

export default {
    componentName: 'Breadcrumb',
    category: '导航',
    title: '面包屑',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'separator',
            title: {
                label: '分隔符',
                tip: 'separator | 自定义分隔符',
            },
            defaultValue: '/',
            propType: 'string',
        },
        {
            name: 'items',
            title: {
                label: '面包屑项',
                tip: 'items | 面包屑项',
            },
            defaultValue: [
                {
                    title: '首页',
                    link: '/',
                },
                {
                    title: '列表页',
                    link: '/list',
                },
                {
                    title: '详情页',
                    link: '/detail',
                },
            ],
            propType: 'array',
            config: {
                columns: [
                    {
                        name: 'title',
                        title: '文本',
                        propType: 'string',
                    },
                    {
                        name: 'link',
                        title: '链接',
                        propType: 'string',
                    },
                    {
                        name: 'target',
                        title: '打开方式',
                        propType: 'select',
                        values: {
                            _self: '当前窗口',
                            _blank: '新窗口',
                        }
                    },
                ],
            }
        },
    ],
};

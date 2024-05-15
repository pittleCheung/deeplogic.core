import {defaultValues} from '../../../_utils/baseMeta';

export default {
    componentName: 'LayoutSider',
    category: '布局',
    title: '侧边栏',
    isElement: true,
    props: [
        {
            name: 'theme',
            title: {
                label: '主题',
                tip: 'theme | 侧边栏主题'
            },
            propType: 'select',
            defaultValue: 'light',
            values: {
                light: '亮色',
                dark: '暗色'
            }
        },
        {
            name: 'width',
            title: {
                label: '宽度',
                tip: 'width | 侧边栏宽度'
            },
            propType: 'number',
            defaultValue: 200
        },
        {
            name: 'breakpoint',
            title: {
                label: '断点',
                tip: 'breakpoint | 触发响应式布局的断点'
            },
            propType: 'select',
            defaultValue: 'lg',
            values: {
                xs: '≥480px',
                sm: '≥576px',
                md: '≥768px',
                lg: '≥992px',
                xl: '≥1200px',
                xxl: '≥1600px'
            }
        }
    ],
    style: {
        name: 'style',
        title: {
            label: '样式',
            tip: 'style | 样式'
        },
        propType: 'object',
        setter: {
            component: 'StyleSetter',
            props: {
                open: true,
                show: ['size', 'font', 'border', 'background', 'spacing'],
                values: {
                    ...defaultValues,
                    textAlign: 'center',
                    paddingSide: 'side'
                }
            }
        }
    }
};

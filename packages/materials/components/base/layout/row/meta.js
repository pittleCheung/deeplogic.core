import {defaultStyle as style} from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Progress_bar_thumbnail.png';

export default {
    componentName: 'Row',
    title: 'Row布局',
    category: '通用',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'align',
            title: {
                label: '垂直对齐',
                tip: 'align | flex 布局下的垂直对齐方式'
            },
            defaultValue: 'top',
            propType: 'select',
            values: {
                top: '顶部对齐',
                middle: '居中对齐',
                bottom: '底部对齐'
            }
        },
        {
            name: 'gutter',
            title: {
                label: '栅格间隔',
                tip: 'gutter | 栅格间隔，单位 px，左右平分'
            },
            defaultValue: 0,
            propType: 'number'
        },
        {
            name: 'justify',
            title: {
                label: '水平排列',
                tip: 'justify | flex 布局下的水平排列方式'
            },
            defaultValue: 'start',
            propType: 'select',
            values: {
                start: '左对齐',
                end: '右对齐',
                center: '居中对齐',
                'space-around': '两侧间隔相等',
                'space-between': '两端对齐',
                'space-evenly': '每个元素间隔相等'
            }
        },
        {
            name: 'wrap',
            title: {
                label: '自动换行',
                tip: 'wrap | 是否自动换行'
            },
            defaultValue: false,
            propType: 'boolean'
        }
    ],
    style
};

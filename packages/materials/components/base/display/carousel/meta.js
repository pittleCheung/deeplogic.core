import defaultImg from '../../../assets/building.png';
import {customStyle} from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Card_thumbnail.png';

export default {
    componentName: 'Carousel',
    category: '数据展示',
    title: '走马灯',
    screenshot,
    isElement: true,
    props: [
        {
            name: 'dotPosition',
            title: {
                label: '位置',
                tip: 'dotPosition | 指示器位置，可选值为 top left right bottom'
            },
            propType: 'select',
            defaultValue: 'bottom',
            values: {
                top: '上',
                left: '左',
                right: '右',
                bottom: '下'
            }
        },
        {
            name: 'autoplay',
            title: {
                label: '自动切换',
                tip: 'autoplay | 是否自动切换'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'fade',
            title: {
                label: '渐显',
                tip: 'fade | 切换动画方式是否为渐显'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'infinite',
            title: {
                label: '无限循环',
                tip: 'infinite | 是否循环播放'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'waitForAnimate',
            title: {
                label: '等待动画',
                tip: 'waitForAnimate | 是否等待动画执行'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'items',
            title: {
                label: '数据',
                tip: 'items | 展示轮播的数据'
            },
            propType: 'array',
            defaultValue: [
                {
                    key: '1',
                    title: '轮播 1',
                    src: defaultImg
                },
                {
                    key: '2',
                    title: '轮播 2',
                    src: defaultImg
                },
                {
                    key: '3',
                    title: '轮播 3',
                    src: defaultImg
                }
            ],
            props: [
                {
                    name: 'key',
                    title: {
                        label: '键',
                        tip: 'key | 唯一标识'
                    },
                    hidden: true,
                    propType: 'string'
                },
                {
                    name: 'title',
                    title: {
                        label: '标题',
                        tip: 'title | 标题'
                    },
                    propType: 'string',
                    hidden: true,
                    defaultValue: ''
                },
                {
                    name: 'src',
                    title: {
                        label: '图片',
                        tip: 'src | 图片地址'
                    },
                    propType: 'image'
                }
            ]
        }
    ],
    style: {
        ...customStyle({height: '240px', heightType: 'fixed'})
    }
};

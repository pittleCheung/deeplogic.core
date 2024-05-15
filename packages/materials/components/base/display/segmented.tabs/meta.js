import {customStyle} from '../../../_utils/baseMeta';

export default {
    componentName: 'SegmentedTabs',
    category: '数据展示',
    title: '分段标签',
    isElement: true,
    props: [
        {
            name: 'position',
            title: {
                label: '位置',
                tip: 'position | 标签位置，当存在标题时无效'
            },
            propType: 'select',
            defaultValue: 'right',
            relatedProps: {isTitle: false},
            values: {
                left: '左',
                right: '右'
            }
        },
        {
            name: 'isTitle',
            title: {
                label: '标题',
                tip: 'isTitle | 是否显示标题'
            },
            propType: 'boolean',

            defaultValue: false
        },
        {
            name: 'segmented',
            title: {
                label: '分段器配置',
                tip: 'segmented | 分段器配置'
            },
            propType: 'object',
            defaultValue: {
                value: '1',
                options: [
                    {
                        label: '选项一',
                        value: '1',
                        disabled: false
                    },
                    {
                        label: '选项二',
                        value: '2',
                        disabled: false
                    }
                ]
            },
            props: [
                {
                    name: 'value',
                    title: {
                        label: '默认值',
                        tip: 'value | 默认选中的值'
                    },
                    propType: 'string',
                    defaultValue: '1'
                },
                {
                    name: 'size',
                    title: {
                        label: '尺寸',
                        tip: 'size | 控件尺寸'
                    },
                    propType: 'select',
                    defaultValue: 'middle',
                    values: {
                        small: '小',
                        middle: '默认',
                        large: '大'
                    }
                },
                {
                    name: 'disabled',
                    title: {
                        label: '禁用',
                        tip: 'disabled | 是否禁用'
                    },
                    propType: 'boolean',
                    defaultValue: false
                },
                {
                    name: 'block',
                    title: {
                        label: '宽度',
                        tip: 'block | 是否宽度铺满父元素'
                    },
                    propType: 'boolean',
                    defaultValue: false
                },

                {
                    name: 'options',
                    title: {
                        label: '选项',
                        tip: 'options | 数据化配置选项内容'
                    },
                    propType: 'array',
                    props: [
                        {
                            name: 'icon',
                            title: {
                                label: '图标',
                                tip: 'icon | 选项图标'
                            },
                            defaultValue: '',
                            propType: 'icon'
                        },
                        {
                            name: 'label',
                            title: {
                                label: '标签',
                                tip: 'label | 选项显示的内容'
                            },
                            defaultValue: '',
                            propType: 'string'
                        },
                        {
                            name: 'value',
                            title: {
                                label: '值',
                                tip: 'value | 选项对应的值'
                            },
                            defaultValue: '',
                            propType: 'string'
                        },
                        {
                            name: 'disabled',
                            title: {
                                label: '禁用',
                                tip: 'disabled | 是否禁用'
                            },
                            defaultValue: false,
                            propType: 'boolean'
                        }
                    ],
                    defaultValue: [
                        {
                            label: '选项一',
                            value: '1',
                            disabled: false
                        },
                        {
                            label: '选项二',
                            value: '2',
                            disabled: false
                        }
                    ]
                }
            ]
        }
    ],
    style: customStyle({}, {show: ['size', 'font', 'border', 'background', 'spacing']})
};

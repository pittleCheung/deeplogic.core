import dayjs from 'dayjs';
import {TABLE_COLUMNS_OPTIONS} from '../../../../global';
import {customStyle, defaultPointOptions, defaultWarningOptions} from '../../../_utils/baseMeta';
import screenshot from './__screenshots__/Tablist_thumbnail.png';

export default {
    componentName: 'Table',
    category: '数据展示',
    title: '表格',
    screenshot,
    isLink: true,
    isExport: true,
    props: [
        {
            name: 'source',
            title: {
                label: '数据源',
                tip: 'source | 选择要绑定的数据源'
            },
            propType: 'select',
            defaultValue: '',
            values: {
                alarm: '报警数据',
                point: '点表数据'
            }
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 表格大小'
            },
            propType: 'select',
            defaultValue: 'middle',
            values: {
                middle: '中等',
                small: '小',
                large: '大'
            }
        },
        {
            name: 'loading',
            title: {
                label: '加载中',
                tip: 'loading | 页面是否加载中'
            },
            propType: 'boolean',
            defaultValue: false,
            hidden: true
        },
        {
            name: 'bordered',
            title: {
                label: '边框',
                tip: 'bordered | 是否展示外边框和列边框'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'showHeader',
            title: {
                label: '表头',
                tip: 'showHeader | 是否显示表头'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'isPagination',
            title: {
                label: '分页器',
                tip: 'isPagination | 是否显示分页器'
            },
            propType: 'boolean',
            defaultValue: true
        },
        {
            name: 'isScroll',
            title: {
                label: '滚动',
                tip: 'isScroll | 是否支持滚动'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'columns',
            title: {
                label: '列配置',
                tip: 'columns | 表格列的配置描述'
            },
            propType: 'array',
            defaultValue: [],
            props: [
                {
                    name: 'title',
                    title: {
                        label: '标题',
                        tip: 'title | 列头显示文字'
                    },
                    propType: 'select',
                    values: TABLE_COLUMNS_OPTIONS
                },
                {
                    name: 'dataIndex',
                    title: {
                        label: '数据索引',
                        tip: 'dataIndex | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法'
                    },
                    hidden: true,
                    propType: 'string'
                },
                {
                    name: 'ellipsis',
                    title: {
                        label: '省略',
                        tip: 'ellipsis | 超过宽度将自动省略'
                    },
                    propType: 'boolean',
                    defaultValue: false
                },
                {
                    name: 'align',
                    title: {
                        label: '对齐方式',
                        tip: 'align | 设置列内容的对齐方式'
                    },
                    propType: 'select',
                    defaultValue: 'left',
                    values: {
                        left: '左对齐',
                        right: '右对齐',
                        center: '居中'
                    }
                },
                {
                    name: 'fixed',
                    title: {
                        label: '固定',
                        tip: "fixed | 列是否固定，可选 true(等效于 left) 'left' 'right'"
                    },
                    propType: 'select',
                    defaultValue: 'left',
                    values: {
                        left: '左固定',
                        right: '右固定'
                    }
                },
                {
                    name: 'width',
                    title: {
                        label: '宽度',
                        tip: 'width | 列宽度'
                    },
                    propType: 'number'
                }
            ]
        },
        {
            name: 'alarm',
            title: {
                label: '报警',
                tip: 'alarm | 报警参数配置'
            },
            linkable: true,
            propType: 'object',
            relatedProps: {source: 'alarm'},
            defaultValue: {
                needData: true
            },
            props: defaultWarningOptions
        },
        {
            name: 'point',
            title: {
                label: '点表',
                tip: 'point | 点表参数配置'
            },
            linkable: true,
            propType: 'object',
            relatedProps: {source: 'point'},
            defaultValue: {
                begin: dayjs()?.format(),
                end: dayjs()?.format(),
                tags: [],
                aggregate: 'last',
                timeType: '5 minutes'
            },
            props: defaultPointOptions
        },
        {
            name: 'scroll',
            title: {
                label: '滚动',
                tip: 'scroll | 横向或纵向支持滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 "max-content"'
            },
            propType: 'object',
            relatedProps: {isScroll: true},
            defaultValue: {
                x: 1000,
                y: 300
            },
            props: [
                {
                    name: 'x',
                    title: {
                        label: '水平滚动',
                        tip: '水平方向可滚动的距离，单位 px'
                    },
                    propType: 'number'
                },
                {
                    name: 'y',
                    title: {
                        label: '垂直滚动',
                        tip: '垂直方向可滚动的距离，单位 px'
                    },
                    propType: 'number'
                }
            ]
        },
        {
            name: 'pagination',
            title: {
                label: '分页',
                tip: 'pagination | 分页器'
            },
            propType: 'object',
            relatedProps: {isPagination: true},
            defaultValue: {
                pageSize: 10,
                page: 0
            },
            props: [
                {
                    name: 'pageSize',
                    title: {
                        label: '条数',
                        tip: 'pageSize | 每页显示的条数'
                    },
                    propType: 'select',
                    defaultValue: 10,
                    values: {
                        10: '10条/页',
                        20: '20条/页',
                        50: '50条/页',
                        100: '100条/页'
                    }
                },
                {
                    name: 'page',
                    title: {
                        label: '页码',
                        tip: 'page | 当前页码'
                    },
                    propType: 'number',
                    defaultValue: 0,
                    hidden: true
                },
                {
                    name: 'total',
                    title: {
                        label: '总数',
                        tip: 'total | 数据总数'
                    },
                    propType: 'number',
                    defaultValue: 0,
                    hidden: true
                }
            ]
        },
        {
            name: 'extra',
            title: {
                label: '额外',
                tip: 'extra | 额外的配置'
            },
            propType: 'object',
            defaultValue: {},
            extra: true,
            hidden: true
        }
    ],
    style: customStyle({}, {show: ['size', 'font', 'border', 'background', 'spacing']})
};

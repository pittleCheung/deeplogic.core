import {defaultOptions, defaultPoint, defaultStyle} from '../__config';
import {pieOption as defaultValue} from '../__options';

export default {
    componentName: 'Pie',
    title: '饼图',
    category: '图表',
    screenshot: null,
    props: [
        ...defaultOptions,
        {
            name: 'option',
            title: {
                label: '配置项',
                tip: 'option | 配置项'
            },
            propType: 'array',
            defaultValue,
            setter: {
                component: 'ChartSetter',
                props: [
                    {
                        name: 'series',
                        title: '系列',
                        propType: 'series',
                        defaultValue: [
                            {
                                name: 'Access From',
                                type: 'pie',
                                radius: '50%',
                                data: [
                                    {value: 1048, name: 'Search Engine'},
                                    {value: 735, name: 'Direct'},
                                    {value: 580, name: 'Email'}
                                ]
                            }
                        ],
                        setter: {
                            component: 'SeriesSetter',
                            props: [
                                {
                                    name: 'name',
                                    title: {
                                        label: '名称',
                                        tip: 'name | 系列名称，用于tooltip的显示，legend 的图例筛选'
                                    },
                                    propType: 'string',
                                    defaultValue: '',
                                    hidden: true
                                },
                                {
                                    name: 'radius',
                                    title: {
                                        label: '半径',
                                        tip: 'radius | 饼图的半径，数组的第一项是内半径，第二项是外半径。可以将内半径设大显示成圆环图（Donut chart）'
                                    },
                                    propType: 'string',
                                    defaultValue: '50%'
                                },
                                {
                                    name: 'data',
                                    title: {
                                        label: '数据',
                                        tip: 'data | 数据'
                                    },
                                    propType: 'array',
                                    defaultValue: [],
                                    props: [
                                        {
                                            name: 'name',
                                            title: {
                                                label: '名称',
                                                tip: 'name | 数据项名称'
                                            },
                                            propType: 'string',
                                            defaultValue: '',
                                            hidden: true
                                        },
                                        {
                                            name: 'value',
                                            title: {
                                                label: '值',
                                                tip: 'value | 数据项值'
                                            },
                                            propType: 'number',
                                            defaultValue: 0,
                                            hidden: true
                                        },
                                        defaultPoint
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        name: 'title',
                        title: '标题',
                        propType: 'object',
                        defaultValue: {
                            text: '折线图堆叠'
                        },
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示标题组件'
                                },
                                propType: 'boolean'
                            },
                            {
                                name: 'text',
                                title: {
                                    label: '主标题',
                                    tip: 'text | 主标题文本'
                                },
                                propType: 'string'
                            },
                            {
                                name: 'subtext',
                                title: {
                                    label: '副标题',
                                    tip: 'subtext | 副标题文本'
                                },
                                propType: 'string'
                            },
                            {
                                name: 'left',
                                title: {
                                    label: '左',
                                    tip: 'left | 标题左侧位置'
                                },
                                propType: 'number'
                            },
                            {
                                name: 'top',
                                title: {
                                    label: '上',
                                    tip: 'top | 标题上侧位置'
                                },
                                propType: 'number'
                            }
                        ]
                    },
                    {
                        name: 'tooltip',
                        title: '提示框',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示提示框组件'
                                },
                                propType: 'boolean'
                            },
                            {
                                name: 'trigger',
                                title: {
                                    label: '触发类型',
                                    tip: 'trigger | 提示框触发类型'
                                },
                                propType: 'select',
                                values: {item: '数据项', axis: '坐标', none: '无'}
                            },
                            {
                                name: 'alwaysShowContent',
                                title: {
                                    label: '永远显示',
                                    tip: 'alwaysShowContent | 是否永远显示提示框浮层'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'triggerOn',
                                title: {
                                    label: '触发类型',
                                    tip: 'triggerOn | 提示框触发的条件'
                                },
                                propType: 'select',
                                values: {
                                    click: '点击',
                                    mousemove: '鼠标移动',
                                    none: '不触发'
                                },
                                defaultValue: 'mousemove'
                            },
                            {
                                name: 'showDelay',
                                title: {
                                    label: '显示延迟',
                                    tip: 'showDelay | 浮层显示的延迟，单位为 ms'
                                },
                                propType: 'number',
                                defaultValue: 0
                            },
                            {
                                name: 'hideDelay',
                                title: {
                                    label: '隐藏延迟',
                                    tip: 'hideDelay | 浮层隐藏的延迟，单位为 ms'
                                },
                                propType: 'number',
                                defaultValue: 100
                            },
                            {
                                name: 'confine',
                                title: {
                                    label: '限制',
                                    tip: 'confine | 是否将 tooltip 框限制在图表的区域内'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'transitionDuration',
                                title: {
                                    label: '动画时长',
                                    tip: 'transitionDuration | 提示框浮层的动画变换时长，单位为 s'
                                },
                                propType: 'number',
                                defaultValue: 0.4
                            },
                            {
                                name: 'backgroundColor',
                                title: {
                                    label: '背景',
                                    tip: 'backgroundColor | 提示框浮层的背景颜色'
                                },
                                propType: 'color',
                                defaultValue: 'rgba(50,50,50,0.7)'
                            },
                            {
                                name: 'borderColor',
                                title: {
                                    label: '边框颜色',
                                    tip: 'borderColor | 提示框浮层的边框颜色'
                                },
                                propType: 'color',
                                defaultValue: '#333'
                            },
                            {
                                name: 'borderWidth',
                                title: {
                                    label: '边框宽度',
                                    tip: 'borderWidth | 提示框浮层的边框宽'
                                },
                                propType: 'number',
                                defaultValue: 0
                            },
                            {
                                name: 'padding',
                                title: {
                                    label: '内边距',
                                    tip: 'padding | 提示框浮层内边距，单位px'
                                },
                                propType: 'number',
                                defaultValue: 5
                            }
                        ]
                    },
                    {
                        name: 'legend',
                        title: '图例',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示图例'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            },
                            {
                                name: 'type',
                                title: {
                                    label: '图例类型',
                                    tip: 'type | 图例的类型'
                                },
                                propType: 'select',
                                values: {
                                    plain: '普通图例',
                                    scroll: '可滚动翻页的图例',
                                    '': '无'
                                },
                                defaultValue: 'plain'
                            },
                            {
                                name: 'orient',
                                title: {
                                    label: '布局朝向',
                                    tip: 'orient | 图例列表的布局朝向'
                                },
                                propType: 'select',
                                values: {
                                    horizontal: '水平',
                                    vertical: '垂直'
                                },
                                defaultValue: 'horizontal'
                            },
                            {
                                name: 'left',
                                title: {
                                    label: '左',
                                    tip: 'left | 图例组件离容器左侧的距离'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'top',
                                title: {
                                    label: '上',
                                    tip: 'top | 图例组件离容器上侧的距离'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'right',
                                title: {
                                    label: '右',
                                    tip: 'right | 图例组件离容器右侧的距离'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'bottom',
                                title: {
                                    label: '下',
                                    tip: 'bottom | 图例组件离容器下侧的距离'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'itemWidth',
                                title: {
                                    label: '图形宽度',
                                    tip: 'itemWidth | 图例标记的图形宽度'
                                },
                                propType: 'number',
                                defaultValue: 25
                            },
                            {
                                name: 'itemHeight',
                                title: {
                                    label: '图形高度',
                                    tip: 'itemHeight | 图例标记的图形高度'
                                },
                                propType: 'number',
                                defaultValue: 14
                            },
                            {
                                name: 'itemGap',
                                title: {
                                    label: '图形间隔',
                                    tip: 'itemGap | 图例每项之间的间隔'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'icon',
                                title: {
                                    label: '图形',
                                    tip: 'icon | 图例项的 icon'
                                },
                                propType: 'select',
                                values: {
                                    circle: '圆形',
                                    rect: '矩形',
                                    roundRect: '圆角矩形',
                                    triangle: '三角形',
                                    diamond: '菱形',
                                    pin: '标注',
                                    arrow: '箭头',
                                    '': '无'
                                },
                                defaultValue: 'roundRect'
                            }
                        ]
                    },
                    {
                        name: 'toolbox',
                        title: '工具栏',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示工具栏组件。如果启用，可以通过点击工具栏上的按钮切换图表类型。'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'orient',
                                title: {
                                    label: '布局朝向',
                                    tip: 'orient | 工具栏 icon 的布局朝向。'
                                },
                                propType: 'select',
                                values: {
                                    horizontal: '水平',
                                    vertical: '垂直'
                                },
                                defaultValue: 'horizontal'
                            },
                            {
                                name: 'left',
                                title: {
                                    label: '左',
                                    tip: 'left | 工具栏组件离容器左侧的距离。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'top',
                                title: {
                                    label: '上',
                                    tip: 'top | 工具栏组件离容器上侧的距离。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'right',
                                title: {
                                    label: '右',
                                    tip: 'right | 工具栏组件离容器右侧的距离。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'bottom',
                                title: {
                                    label: '下',
                                    tip: 'bottom | 工具栏组件离容器下侧的距离。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'width',
                                title: {
                                    label: '宽度',
                                    tip: 'width | 工具栏组件的宽度。默认自适应。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'height',
                                title: {
                                    label: '高度',
                                    tip: 'height | 工具栏组件的高度。默认自适应。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'itemSize',
                                title: {
                                    label: '大小',
                                    tip: 'itemSize | 工具栏 icon 的大小。'
                                },
                                propType: 'number',
                                defaultValue: 15
                            },
                            {
                                name: 'itemGap',
                                title: {
                                    label: '间隔',
                                    tip: 'itemGap | 工具栏 icon 每项之间的间隔。'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'showTitle',
                                title: {
                                    label: '显示标题',
                                    tip: 'showTitle | 是否在鼠标 hover 的时候显示每个工具 icon 的标题。'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            }
                        ]
                    }
                ]
            }
        }
    ],
    style: defaultStyle
};

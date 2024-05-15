import {defaultOptions, defaultPoint, defaultStyle} from '../__config';
import {barOption as defaultValue} from '../__options';

export default {
    componentName: 'Bar',
    title: '柱状图',
    category: '图表',
    screenshot: null,
    isLink: true,
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
                                name: '系列1',
                                type: 'bar',
                                data: [120, 200, 150, 80, 70, 110, 130]
                            }
                        ],
                        setter: {
                            component: 'SeriesSetter',
                            props: [
                                {
                                    name: 'type',
                                    title: {
                                        label: '类型',
                                        tip: 'type | 系列类型'
                                    },
                                    hidden: true,
                                    defaultValue: 'bar'
                                },
                                {
                                    name: 'name',
                                    title: {
                                        label: '名称',
                                        tip: 'name | 系列名称'
                                    },
                                    propType: 'string',
                                    defaultValue: '',
                                    hidden: true
                                },
                                {
                                    name: 'stack',
                                    title: {
                                        label: '堆叠',
                                        tip: 'stack | 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。'
                                    },
                                    propType: 'string',
                                    defaultValue: '',
                                    hidden: true
                                },
                                {
                                    name: 'stackStrategy',
                                    title: {
                                        label: '堆叠策略',
                                        tip: 'stackStrategy | 堆叠策略，可选值为：'
                                    },
                                    propType: 'select',
                                    defaultValue: 'samesign',
                                    hidden: true,
                                    values: {
                                        all: '总和',
                                        samesign: '同符号',
                                        positive: '正',
                                        negative: '负',
                                        '': '无'
                                    }
                                },
                                {
                                    name: 'barWidth',
                                    title: {
                                        label: '柱宽',
                                        tip: 'barWidth | 柱条的宽度，不设时自适应。'
                                    },
                                    propType: 'number',
                                    defaultValue: null
                                },
                                {
                                    name: 'barGap',
                                    title: {
                                        label: '柱间距',
                                        tip: 'barGap | 柱间距离，默认为柱形宽度的 30%，可设固定值。'
                                    },
                                    propType: 'number',
                                    defaultValue: '30%'
                                },
                                {
                                    name: 'barCategoryGap',
                                    title: {
                                        label: '类目间距',
                                        tip: 'barCategoryGap | 类目间柱形距离，默认为类目间距的20%，可设固定值。'
                                    },
                                    propType: 'number',
                                    defaultValue: '20%'
                                },
                                {
                                    name: 'large',
                                    title: {
                                        label: '大数据量',
                                        tip: 'large | 是否开启大数据量优化'
                                    },
                                    propType: 'boolean',
                                    defaultValue: false
                                },
                                {
                                    name: 'data',
                                    title: {
                                        label: '数据',
                                        tip: 'data | 系列数据'
                                    },
                                    propType: 'array',
                                    defaultValue: [],
                                    hidden: true
                                },
                                defaultPoint
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
                        name: 'grid',
                        title: '网格',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示直角坐标系网格。'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'left',
                                title: {
                                    label: '左',
                                    tip: 'left | 直角坐标系网格左侧的位置'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'top',
                                title: {
                                    label: '上',
                                    tip: 'top | 直角坐标系网格顶部的位置'
                                },
                                propType: 'number',
                                defaultValue: 60
                            },
                            {
                                name: 'right',
                                title: {
                                    label: '右',
                                    tip: 'right | 直角坐标系网格右侧的位置'
                                },
                                propType: 'number',
                                defaultValue: 10
                            },
                            {
                                name: 'bottom',
                                title: {
                                    label: '下',
                                    tip: 'bottom | 直角坐标系网格底部的位置'
                                },
                                propType: 'number',
                                defaultValue: 60
                            },
                            {
                                name: 'width',
                                title: {
                                    label: '宽度',
                                    tip: 'width | 直角坐标系网格的宽度。默认自适应'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'height',
                                title: {
                                    label: '高度',
                                    tip: 'height | 直角坐标系网格的高度。默认自适应'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'containLabel',
                                title: {
                                    label: '包含标签',
                                    tip: 'containLabel | grid 区域是否包含坐标轴的刻度标签。'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'backgroundColor',
                                title: {
                                    label: '背景',
                                    tip: 'backgroundColor | 网格背景色，默认透明。'
                                },
                                propType: 'color',
                                defaultValue: 'rgba(255,255,255,0)'
                            },
                            {
                                name: 'borderColor',
                                title: {
                                    label: '边框颜色',
                                    tip: 'borderColor | 网格的边框颜色'
                                },
                                propType: 'color',
                                defaultValue: '#ccc'
                            },
                            {
                                name: 'borderWidth',
                                title: {
                                    label: '边框宽度',
                                    tip: 'borderWidth | 网格的边框线宽'
                                },
                                propType: 'number',
                                defaultValue: 1
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
                    },
                    {
                        name: 'xAxis',
                        title: 'X轴',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示 x 轴。'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            },
                            {
                                name: 'type',
                                title: {
                                    label: '类型',
                                    tip: 'type | 坐标轴类型。'
                                },
                                propType: 'select',
                                values: {
                                    value: '数值轴',
                                    category: '类目轴',
                                    time: '时间轴'
                                },
                                defaultValue: 'value'
                            },
                            {
                                name: 'name',
                                title: {
                                    label: '名称',
                                    tip: 'name | 坐标轴名称。'
                                },
                                propType: 'string',
                                defaultValue: ''
                            },
                            {
                                name: 'nameLocation',
                                title: {
                                    label: '位置',
                                    tip: 'nameLocation | 坐标轴名称显示位置。'
                                },
                                propType: 'select',
                                values: {
                                    start: '开始',
                                    middle: '中间',
                                    end: '结束'
                                },
                                defaultValue: 'end'
                            },
                            {
                                name: 'nameGap',
                                title: {
                                    label: '距离',
                                    tip: 'nameGap | 坐标轴名称与轴线之间的距离。'
                                },
                                propType: 'number',
                                defaultValue: 15
                            },
                            {
                                name: 'nameRotate',
                                title: {
                                    label: '旋转',
                                    tip: 'nameRotate | 坐标轴名字旋转，角度值。'
                                },
                                propType: 'number',
                                defaultValue: 0
                            },
                            {
                                name: 'inverse',
                                title: {
                                    label: '是否反向',
                                    tip: 'inverse | 是否是反向坐标轴。'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'boundaryGap',
                                title: {
                                    label: '留白',
                                    tip: 'boundaryGap | 坐标轴两边留白策略。'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            },
                            {
                                name: 'min',
                                title: {
                                    label: '最小值',
                                    tip: 'min | 坐标轴刻度最小值。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'max',
                                title: {
                                    label: '最大值',
                                    tip: 'max | 坐标轴刻度最大值。'
                                },
                                propType: 'number',
                                defaultValue: 'auto'
                            },
                            {
                                name: 'data',
                                title: {
                                    label: '类目数据',
                                    tip: 'data | 类目数据，在类目轴（type: "category"）中有效。'
                                },
                                hidden: true,
                                propType: 'array',
                                defaultValue: null
                            }
                        ]
                    },
                    {
                        name: 'yAxis',
                        title: 'Y轴',
                        propType: 'object',
                        props: [
                            {
                                name: 'show',
                                title: {
                                    label: '显示',
                                    tip: 'show | 是否显示 y 轴。'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            },
                            {
                                name: 'type',
                                title: {
                                    label: '类型',
                                    tip: 'type | 坐标轴类型。'
                                },
                                propType: 'select',
                                values: {
                                    value: '数值轴',
                                    category: '类目轴',
                                    time: '时间轴',
                                    log: '对数轴'
                                },
                                defaultValue: 'value'
                            },
                            {
                                name: 'name',
                                title: {
                                    label: '名称',
                                    tip: 'name | 坐标轴名称。'
                                },
                                propType: 'string',
                                defaultValue: null
                            },
                            {
                                name: 'nameLocation',
                                title: {
                                    label: '位置',
                                    tip: 'nameLocation | 坐标轴名称显示位置。'
                                },
                                propType: 'select',
                                values: {
                                    start: '起始位置',
                                    middle: '中间位置',
                                    end: '末尾位置'
                                },
                                defaultValue: 'end'
                            },
                            {
                                name: 'nameGap',
                                title: {
                                    label: '距离',
                                    tip: 'nameGap | 坐标轴名称与轴线之间的距离。'
                                },
                                propType: 'number',
                                defaultValue: null
                            },
                            {
                                name: 'nameRotate',
                                title: {
                                    label: '旋转',
                                    tip: 'nameRotate | 坐标轴名字旋转，角度值。'
                                },
                                propType: 'number',
                                defaultValue: null
                            },
                            {
                                name: 'inverse',
                                title: {
                                    label: '是否反向',
                                    tip: 'inverse | 是否是反向坐标轴。'
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'boundaryGap',
                                title: {
                                    label: '留白',
                                    tip: 'boundaryGap | 坐标轴两边留白策略。'
                                },
                                propType: 'boolean',
                                defaultValue: true
                            },
                            {
                                name: 'min',
                                title: {
                                    label: '最小值',
                                    tip: 'min | 坐标轴刻度最小值。'
                                },
                                propType: 'number',
                                defaultValue: null
                            },
                            {
                                name: 'max',
                                title: {
                                    label: '最大值',
                                    tip: 'max | 坐标轴刻度最大值。'
                                },
                                propType: 'number',
                                defaultValue: null
                            },
                            {
                                name: 'scale',
                                title: {
                                    label: '包含零',
                                    tip: "scale | 只在数值轴中（type: 'value'）有效。设置成 true 后坐标刻度不会强制包含零刻度。"
                                },
                                propType: 'boolean',
                                defaultValue: false
                            },
                            {
                                name: 'data',
                                title: {
                                    label: '类目数据',
                                    tip: 'data | 类目数据，在类目轴（type: "category"）中有效。'
                                },
                                hidden: true,
                                propType: 'array',
                                defaultValue: null
                            }
                        ]
                    }
                ]
            }
        }
    ],
    style: defaultStyle
};

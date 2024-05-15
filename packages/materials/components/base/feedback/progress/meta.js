export default {
    componentName: 'Progress',
    category: '反馈',
    title: '进度条',
    props: [
        {
            name: 'percent',
            title: {
                label: '进度',
                tip: 'percent | 进度百分比'
            },
            propType: 'number',
            defaultValue: 0
        },
        {
            name: 'type',
            title: {
                label: '类型',
                tip: 'type | 类型，可选：line circle dashboard'
            },
            propType: 'select',
            defaultValue: 'line',
            values: {
                line: '线条',
                circle: '圆形',
                dashboard: '仪表盘'
            }
        },
        {
            name: 'status',
            title: {
                label: '状态',
                tip: 'status | 状态，可选：success exception normal active(仅限 line)'
            },
            propType: 'select',
            defaultValue: 'normal',
            values: {
                normal: '正常',
                success: '成功',
                exception: '异常',
                active: '激活'
            }
        },
        {
            name: 'size',
            title: {
                label: '尺寸',
                tip: 'size | 尺寸，可选：default small'
            },
            propType: 'string',
            defaultValue: 'default'
        },
        {
            name: 'steps',
            title: {
                label: '步骤',
                tip: 'steps | 步骤，可选：0-100'
            },
            propType: 'number',
            defaultValue: 0,
            min: 0,
            max: 100,
            relatedProps: {type: 'line'}
        },
        {
            name: 'strokeColor',
            title: {
                label: '颜色',
                tip: 'strokeColor | 进度条的色彩，传入 object 时为渐变'
            },
            propType: 'color',
            defaultValue: '#1890ff'
        },
        {
            name: 'strokeWidth',
            title: {
                label: '宽度',
                tip: 'strokeWidth | 进度条的宽度，单位 px'
            },
            propType: 'number',
            defaultValue: 6,
            min: 0
        },
        {
            name: 'gapDegree',
            title: {
                label: '间隔角度',
                tip: 'gapDegree | 圆形进度条缺口角度，可取值 0 ~ 360'
            },
            propType: 'number',
            defaultValue: 0,
            min: 0,
            max: 360,
            relatedProps: {type: 'dashboard'}
        },
        {
            name: 'gapPosition',
            title: {
                label: '间隔位置',
                tip: 'gapPosition | 圆形进度条缺口位置，可选：top bottom left right'
            },
            propType: 'select',
            defaultValue: 'bottom',
            values: {
                top: '上',
                bottom: '下',
                left: '左',
                right: '右'
            },
            relatedProps: {type: 'dashboard'}
        }
    ]
};

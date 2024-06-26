import {defaultValues} from '../../../_utils/baseMeta';
// import aperture from "./__images__/aperture.svg"
// import future from "./__images__/future.svg"
// import metals from "./__images__/metals.svg"
// import science from "./__images__/science.svg"
import { ReactComponent as aperture } from "./__images__/aperture.svg"
import { ReactComponent as future } from "./__images__/future.svg"
import { ReactComponent as metals } from "./__images__/metals.svg"
import { ReactComponent as science } from "./__images__/science.svg"

export default {
    componentName: 'LayoutHeader',
    category: '布局',
    title: '页头',
    isElement: true,
    isGroup: true,
    props: [
        {
            name: 'template',
            title: {
                label: '预设模板',
                tip: 'template | 预设模板',
            },
            propType: 'template',
            defaultValue: 'default',
            values: {
                default: '默认',
                science: {
                    label: '科技',
                    image: science,
                },
                metals: {
                    label: '金属',
                    image: metals,
                },
                aperture: {
                    label: '光圈',
                    image: aperture,
                },
                future: {
                    label: '未来',
                    image: future,
                },
            },
        },
        {
            name: 'title',
            title: {
                label: '标题',
                tip: 'title | 标题',
            },
            propType: 'string',
            defaultValue: '数据中心',
        },
    ],
    style: {
        name: 'style',
        title: {
            label: '样式',
            tip: 'style | 样式',
        },
        propType: 'object',
        setter: {
            component: 'StyleSetter',
            props: {
                open: true,
                show: ['size', 'font', 'border', 'layout', 'background', 'spacing'],
                values: {
                    ...defaultValues,
                    background: 'transparent',
                    height: 64,
                    heightType: 'fixed',
                    heightUnit: 'px',
                    textAlign: 'center',
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingSide: 'side',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                },
            },
        },
    },
};

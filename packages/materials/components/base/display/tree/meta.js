import {DICTS_C050} from '../../../../global';
import {customEvents, customStyle} from '../../../_utils/baseMeta';
import {getDict} from '../../../_utils/utils';

export default {
    componentName: 'Tree',
    category: '数据展示',
    title: '树形控件',
    screenshot: null,
    props: [
        {
            name: 'checkable',
            title: {
                label: '可选',
                tip: 'checkable | 节点前添加 Checkbox 复选框'
            },
            propType: 'boolean'
        },
        {
            name: 'defaultExpandAll',
            title: {
                label: '展开所有',
                tip: 'defaultExpandAll | 默认展开所有树节点'
            },
            propType: 'boolean',
            defaultValue: false
        },
        {
            name: 'showLine',
            title: {
                label: '显示线',
                tip: 'showLine | 是否展示连接线'
            },
            propType: 'boolean',
            defaultValue: false
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
            name: 'type',
            title: {
                label: '数据类型',
                tip: 'type | 远程请求的数据类型'
            },
            propType: 'select',
            values: getDict(DICTS_C050),
            defaultValue: []
        }
    ],
    style: customStyle({}),
    events: customEvents({
        events: [
            {
                name: 'onCheck',
                title: {
                    label: '选中',
                    tip: 'onCheck | 点击复选框触发'
                }
            }
        ],
        isDefault: false
    })
};

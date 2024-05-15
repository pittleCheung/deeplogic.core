import {Spin, theme, Tree as AntTree} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {memo, useEffect, useState} from 'react';
import {craft, isArray} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {updateTreeData} from './_helper';
import {getSearchLite, getTreeData} from './_service';
import css from './_style';
import meta from './meta';

function Tree(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {token} = theme?.useToken() || {};
    if (!props) return null;

    const {state, enabled, projId, getNodeProps, setProps, connectDrag} = useComponent(props);

    if (!state) return null;

    /*
     * @description: 获取树数据
     */
    const getData = async (type, sid) => {
        if (type && !!type?.length) {
            setLoading(true);
            try {
                const res = await getTreeData({type, pid: projId, sid});
                if (res) {
                    return res;
                }
            } catch (e) {
                console.error(e);
                return [];
            } finally {
                setLoading(false);
            }
        }
    };

    /**
     * @description: 加载树节点
     * @param children
     * @param key
     * @returns {Promise<T>}
     */
    const onLoadData = async ({children, key}) => {
        setLoading(true);
        return new Promise(async (resolve) => {
            if (children || !!children?.length || state?.type !== 'DEVICE_TAG') {
                resolve();
                return;
            }

            const res = await getSearchLite({pid: projId, sid: key});
            if (res) {
                setData((origin) => updateTreeData(origin, key, res));
                resolve();
            }
            resolve();
        }).finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        getData(state?.type).then((res) => {
            if (res) {
                setData(res);
            }
        });
    }, [state?.type]);

    const onCheck = (checkedKeys) => {
        const events = state?.events?.onCheck;
        if (events) {
            const {action} = events;
            if (action === 'linkTo') {
                const link = events?.link;
                if (link) {
                    const {component, props: field} = link;
                    if (isArray(component)) {
                        component?.forEach((item) => {
                            const source = getNodeProps(item)?.source;
                            const nodeProps = {[field]: checkedKeys};
                            const params = source ? {[source]: nodeProps} : {[field]: checkedKeys};
                            setProps(item, {...params});
                        });
                    } else {
                        setProps(component, {[field]: checkedKeys});
                    }
                }
            }
        }
    };

    // console.log('Tree', data);

    return (
        <Drag connectDrag={connectDrag} style={{width: '100%'}}>
            <Spin spinning={loading}>
                <div className={cls(enabled && css.enabled(token), css.content)}>
                    {!!data?.length && (
                        <AntTree
                            treeData={data}
                            loadData={state?.type === 'DEVICE_TAG' && onLoadData}
                            {...state}
                            onCheck={onCheck}
                            className={cls(css.tree(token))}
                        />
                    )}
                    {!data?.length && enabled && <div>未配置数据源</div>}
                </div>
            </Spin>
        </Drag>
    );
}

Tree.craft = craft(meta);

export default memo(Tree, equal);

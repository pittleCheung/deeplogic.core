import {Element} from '@craftjs/core';
import {Segmented, theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {nanoid} from 'nanoid';
import {memo, useMemo} from 'react';
import {craft} from '../../../_utils/utils';
import {CustomNode, Drag, Icon} from '../../../common';
import {useComponent} from '../../../useComponent';
import Container from '../../layout/container';
import css from './_style';
import meta from './meta';

function SegmentedTabs(props) {
    const {token} = theme?.useToken();
    const {id, state, setProps, connectDrag, getLinkNodes} = useComponent(props);

    if (!state) return null;

    /**
     * @description: 选项卡选项
     */
    const options = state?.segmented?.options?.map((item) => {
        return {
            ...item,
            key: nanoid(10),
            icon: item?.icon ? <Icon icon={item?.icon}/> : ''
        };
    });

    /**
     * @description: 选项卡容器
     */
    const container = useMemo(() => {
        return state?.segmented?.options?.map((item) => {
            if (item?.value !== state?.segmented?.value) return null;
            return (
                <CustomNode>
                    <Element canvas is={Container} key={item?.value || nanoid(10)} id={`container-${item?.value}`}/>
                </CustomNode>
            );
        });
    }, [state.segmented.options, state.segmented.value]);

    /**
     * @description: 选项卡切换事件
     * @param value
     */
    const onChange = (value) => {
        setProps(id, {segmented: {value}});
    };

    return (
        <Drag connectDrag={connectDrag} style={state?.style}>
            <div className={cls(css.tabs(token), css[state?.position])}>
                {state?.isTitle && (
                    <div className={cls(css.title)}>
                        <CustomNode>
                            <Element canvas is={Container} id={`title`}/>
                        </CustomNode>
                    </div>
                )}
                <Segmented {...state?.segmented} options={options} onChange={onChange}/>
            </div>
            <div>{container}</div>
        </Drag>
    );
}

SegmentedTabs.craft = craft(meta);

export default memo(SegmentedTabs, equal);

import {Segmented as AntdSegmented} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo, useCallback} from 'react';
import {craft} from '../../../_utils/utils';
import {Drag, Icon} from '../../../common';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function Segmented(props) {
    const {id, state, connectDrag, setProps} = useComponent(props);

    if (!state) return null;

    const options = useCallback(() => {
        return state?.options?.map((item) => {
            return {
                ...item,
                icon: item?.icon ? <Icon icon={item?.icon}/> : ''
            };
        });
    }, [state?.options]);

    const onChange = (val) => {
        const event = state?.events?.onChange;

        if (event) {
            const {action, link} = event;
            if (action === 'linkTo' && link) {
                setProps(link.component, {[link.props]: val});
            }
        }

        setProps(id, {value: val});
    };

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntdSegmented {...state} options={options() || []} onChange={onChange}/>
        </Drag>
    );
}

Segmented.craft = craft(meta);

export default memo(Segmented, equal);

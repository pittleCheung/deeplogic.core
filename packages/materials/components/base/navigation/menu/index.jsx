import {Menu as AntMenu} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo, useState} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function Menu(props) {
    const {id, state, enabled, rootFunction, setProps, connectDrag} = useComponent(props);

    if (!state) return null;

    const [value, setValue] = useState(state?.selectedKeys || '');

    const onClick = ({key}) => {
        const selected = state?.items?.find((item) => item?.key === key || item?.id === key);
        if (!selected) return;

        if (!enabled) {
            const links = selected?.links;
            if (rootFunction) {
                rootFunction?.[links?.action]?.(links?.link);
            }
        }

        setValue(selected?.id || selected?.key);
        if (enabled) {
            setProps(id, {selectedKeys: selected?.id || selected?.key});
        }
    };

    return (
        <Drag connectDrag={connectDrag}>
            <AntMenu {...state} selectedKeys={[value]} onClick={onClick}/>
        </Drag>
    );
}

Menu.craft = craft(meta);

export default memo(Menu, equal);

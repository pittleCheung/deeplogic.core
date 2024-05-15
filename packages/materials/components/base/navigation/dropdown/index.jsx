import { Dropdown as AntdDropdown, Typography } from 'antd';
import { craft } from '../../../_utils/utils';
import { Icon } from '../../../common';
import Drag from '../../../common/drag';
import { useComponent } from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import { memo } from 'react';

function Dropdown(props) {
    const { state, connectDrag, rootFunction } = useComponent(props);

    const newitems = (state.menu?.items || []).map(t => {
        return {
            ...t,
            label: <div onClick={() => {
                rootFunction?.[t.links?.action]?.(t.links?.link);
            }}>{t.label}</div>
        }
    })

    return (
        <Drag connectDrag={connectDrag} style={{ width: 'fit-content' }}>
            <AntdDropdown {...state} menu={{ ...state.menu, items: newitems }}>
                <div style={{padding: '0 15px'}}>
                    {state?.icon ? <Icon icon={state.icon} /> : <></>}
                    <Typography.Text>{state?.children}</Typography.Text>
                </div>
            </AntdDropdown>
        </Drag>
    );
}

Dropdown.craft = craft(meta);

export default memo(Dropdown, equal);

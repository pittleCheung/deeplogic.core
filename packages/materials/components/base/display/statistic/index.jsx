import {Statistic as AntStatistic} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Statistic(props) {
    const {state, connectDrag} = useComponent(props);

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntStatistic {...state} />
        </Drag>
    );
}

Statistic.craft = craft(meta);

export default memo(Statistic, equal);

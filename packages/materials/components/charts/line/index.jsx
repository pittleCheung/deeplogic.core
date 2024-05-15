import {isEqual} from 'lodash-es';
import {memo} from 'react';
import {craft} from '../../_utils/utils';
import Charts from '../../common/charts';
import {useComponent} from '../../useComponent';
import meta from './meta';

function Line(props) {
    if (!props) return null;

    const {state, ...other} = useComponent(props);

    if (!state) return null;

    const params = {...other, ...state};

    return <Charts type='line' {...params} />;
}

Line.craft = craft(meta);

export default memo(Line, isEqual);

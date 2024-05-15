import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../_utils/utils';
import Charts from '../../common/charts';
import {useComponent} from '../../useComponent';
import meta from './meta';

function TreeChart(props) {
    if (!props) return null;

    const {state, ...other} = useComponent(props);

    if (!state) return null;

    const params = {...other, ...state};

    return <Charts type='tree' {...params} />;
}

TreeChart.craft = craft(meta);

export default memo(TreeChart, equal);

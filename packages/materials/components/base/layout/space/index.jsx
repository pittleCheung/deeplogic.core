import {Space as AntSpace} from 'antd';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import css from './index.module.less';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Space(props) {
    const {state, enabled, connectDrag} = useComponent(props);

    return (
        <AntSpace style={enabled && {padding: 4}} {...state} ref={connectDrag}>
            {state?.children || <>{enabled && <div className={css.normalize}>拖入填充内容</div>}</>}
        </AntSpace>
    );
}

Space.craft = craft(meta);

export default memo(Space, equal);

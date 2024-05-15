import {Row as AntRow} from 'antd';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import css from './index.module.less';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Row(props) {
    const {state, enabled, connectDrag} = useComponent(props);

    return (
        <AntRow {...state} ref={connectDrag}>
            {state?.children || <>{enabled && <div className={css.normalize}>拖入Col填充内容</div>}</>}
        </AntRow>
    );
}

Row.craft = craft(meta);

export default memo(Row, equal);

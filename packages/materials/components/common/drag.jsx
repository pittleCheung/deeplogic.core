import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Drag({connectDrag, children, style, ...props}) {
    return (
        <div ref={connectDrag} style={{...style}} {...props}>
            {children}
        </div>
    );
}

export default memo(Drag, equal);

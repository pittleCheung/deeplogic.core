import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function SvgRender({viewBox = '0 0 1920 96', children}) {
    return (
        <svg viewBox={viewBox} fill='none' width='100%' height='100%' preserveAspectRatio='none'>
            {children}
        </svg>
    );
}

export default memo(SvgRender, equal);

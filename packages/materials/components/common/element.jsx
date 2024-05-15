import {Element as CraftElement} from '@craftjs/core';
import {nanoid} from 'nanoid';

function Element({is, children, ...props}) {
    const id = nanoid();

    return (
        <CraftElement {...props} is={is} id={id} canvas>
            {children}
        </CraftElement>
    );
}

export default Element;

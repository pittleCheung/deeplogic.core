import {Carousel as AntdCarousel, Image, theme} from 'antd';
import cls from 'classnames';
import {craft, previewUrl} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import css from './_style';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Carousel(props) {
    const {token} = theme?.useToken();
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {items, ...rest} = state;

    return (
        <Drag connectDrag={connectDrag}>
            <AntdCarousel {...rest} className={cls(css.carousel)}>
                {items?.map((item) => {
                    return (
                        <div key={item?.key} className={cls(css.container(token))}>
                            <Image src={previewUrl(item?.src)} className={cls(css.image(token))} preview={false}/>
                        </div>
                    );
                })}
            </AntdCarousel>
        </Drag>
    );
}

Carousel.craft = craft(meta);

export default memo(Carousel, equal);

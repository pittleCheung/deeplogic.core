import {Image as AntdImage} from 'antd';
import {DEFAULT_IMAGE_PREVIEW} from '../../../../global';
import {craft, isUrl} from '../../../_utils/utils';
import Resizer from '../../../common/resizer';
import {useComponent} from '../../../useComponent';
// import defaultImage from '@assets/building.jpg';
import defaultImage from "../../../assets/building.jpg"
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Image(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {src, style,...other} = state;
    const {width, height} = style || {};

    const image = src ? (isUrl(src) ? src : `${DEFAULT_IMAGE_PREVIEW}${src}`) : defaultImage;

    return (
        <Resizer isStyle={false} style={{width, height}} width={width} height={height}>
            <AntdImage  {...other} style={{...style,objectFit: 'cover'}} width={width} height={height} src={image} 
                       preview={false}/>
                       {/* <img src={image} alt=""  width={width} height={height}  style={{objectFit: 'cover'}} srcset="" /> */}
        </Resizer>
    );
}

Image.craft = craft(meta);

export default memo(Image, equal);

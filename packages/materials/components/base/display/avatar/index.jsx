import {Avatar as AntdAvatar} from 'antd';
import {craft, isUrl} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import {DEFAULT_IMAGE_PREVIEW} from "../../../../global";
// import defaultImage from "@/assets/building.png";
import defaultImage from "../../../assets/building.png"
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Avatar(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;
    const {src} = state;
    const image = src ? (isUrl(src) ? src : `${DEFAULT_IMAGE_PREVIEW}${src}`) : defaultImage;

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntdAvatar {...state} src={image}/>
        </Drag>
    );
}

Avatar.craft = craft(meta);

export default memo(Avatar, equal);

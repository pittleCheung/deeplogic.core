import { useEditor ,ROOT_NODE} from '@craftjs/core';
import {memo,useMemo} from 'react';
import {craft} from '../../../_utils/utils';
import meta from './meta';
import Display from './display';
import Edit from './edit'
function TypographyText(props) {
    const { query } = useEditor();
    const {enabled, root} = useMemo(() => {
        return {
          enabled: query?.getOptions()?.enabled,
          root: query?.node(ROOT_NODE)?.get?.()
        }
      }, [query,ROOT_NODE]);
    return enabled? <Edit {...props} {...root} /> : <Display {...props}  />

} 

TypographyText.craft = craft(meta);

export default memo(TypographyText);

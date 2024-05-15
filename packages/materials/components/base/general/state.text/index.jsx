import { useEditor } from '@craftjs/core';
import { memo, useMemo } from 'react';
import { craft } from '../../../_utils/utils';
import meta from './meta';
import Display from './display';
import Edit from './edit';
function StateText(props) {
  const { query } = useEditor();
  const enabled = useMemo(() => {
      return query?.getOptions()?.enabled;
    }, [query]);
  return enabled? <Edit {...props} /> : <Display {...props} />;
}
StateText.craft = craft(meta);

export default memo(StateText);

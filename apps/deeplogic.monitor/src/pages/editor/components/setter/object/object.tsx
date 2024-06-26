import equal from 'fast-deep-equal/es6';
import { memo } from 'react';
import { ObjectProvider } from '../_hooks/useObject';
import { ObjectItems } from './_components';

const ObjectSetter = (props) => {
  return (
    <ObjectProvider {...props}>
      <ObjectItems />
    </ObjectProvider>
  );
};

export default memo(ObjectSetter, equal);

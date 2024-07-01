import equal from 'fast-deep-equal/es6';
import { memo, useCallback, useReducer,useMemo } from 'react';
import { DesignerContext } from './hooks/useDesigner';

const initialState = {
  open: false,
  selected: null,
  editorRef: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setOpen':
      return { ...state, open: action.payload };
    case 'setSelected':
      return { ...state, selected: action.payload };
    case 'setEditorRef':
      return { ...state, editorRef: action.payload };
    default:
      return state;
  }
};

function DesignerProvider({ children, ...props }) {
  console.log('DesignerProviderprops: ', props);
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateOpen = useCallback((payload) => {
    dispatch({ type: 'setOpen', payload });
  }, []);

  const updateSelected = useCallback((payload) => {
    dispatch({ type: 'setSelected', payload });
  }, []);

  const updateEditorRef = useCallback((payload) => {
    dispatch({ type: 'setEditorRef', payload });
  }, []);

  const contextValue = useMemo(() => ({
    ...props,
    state,
    updateOpen,
    updateSelected,
    updateEditorRef,
  }), [props, state, updateOpen, updateSelected, updateEditorRef]);

  return (
    <DesignerContext.Provider value={contextValue}>
      {children}
    </DesignerContext.Provider>
  );
}

export default memo(DesignerProvider, equal);

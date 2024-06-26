import { createContext, useContext, useEffect, useState } from 'react';

export const DesignerContext = createContext({

})

function useDesigner():any {
  // const context = useContext(DesignerContext);
  // const [state, setState] = useState(context);

  // useEffect(() => {
  //   setState(context);
  // }, [context]);

  // return state;
  const context = useContext(DesignerContext);
  return context;
  
}

export default useDesigner;

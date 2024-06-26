import { createContext, useContext } from 'react';

const ObjectContext = createContext(null);

export function ObjectProvider({ children, ...props }) {
  return <ObjectContext.Provider value={{ ...props }}>{children}</ObjectContext.Provider>;
}

function useObject() {
  return useContext(ObjectContext);
}

export default useObject;

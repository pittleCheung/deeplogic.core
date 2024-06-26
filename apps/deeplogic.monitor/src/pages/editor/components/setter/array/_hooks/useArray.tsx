import { createContext, useContext } from 'react';

const ArrayContext = createContext(null);

export function ArrayProvider({ children, ...props }) {
  return (
    <ArrayContext.Provider value={{ ...props }}>
      {children}
    </ArrayContext.Provider>
  );
}

function useArray() {
  return useContext(ArrayContext);
}

export default useArray;

import { createContext, useContext, useEffect, useState } from 'react';

const SetterContext = createContext(null);

export function SetterProvider({ values, children, ...props }) {
  const [styleData, setStyleData] = useState(values);

  useEffect(() => {
    if (values) {
      setStyleData(values);
    }
  }, [values]);

  return <SetterContext.Provider value={{ ...props, styleData }}>{children}</SetterContext.Provider>;
}

function useSetter() {
  return useContext(SetterContext);
}

export default useSetter;

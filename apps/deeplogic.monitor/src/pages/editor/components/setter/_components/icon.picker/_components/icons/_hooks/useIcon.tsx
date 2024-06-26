import { createContext, useContext } from 'react';

const IconContext = createContext({});

const IconProvider = ({ children, ...props }) => {
  return <IconContext.Provider value={{ ...props }}>{children}</IconContext.Provider>;
};

const useIcon = () => {
  const context = useContext(IconContext);
  if (!context) {
    throw new Error('useIcon must be used within a IconProvider');
  }
  return context;
};

export { IconProvider, useIcon };

import { createContext, useContext } from 'react';

const EventContext = createContext(null);

export const EventProvider = ({ children, ...props }) => {
  return <EventContext.Provider value={{ ...props }}>{children}</EventContext.Provider>;
};

export const useEvent = () => {
  return useContext(EventContext);
};

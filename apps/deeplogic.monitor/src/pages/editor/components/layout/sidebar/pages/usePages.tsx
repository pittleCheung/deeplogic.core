import { createContext, useContext, useState } from 'react';

export const PagesContext = createContext(null);
export const PagesProvider = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  const [groupId, setGroupId] = useState('');

  return (
    <PagesContext.Provider
      value={{
        ...props,
        open,
        setOpen,
        groupId,
        setGroupId
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

function usePages() {
  return useContext(PagesContext);
}

export default usePages;

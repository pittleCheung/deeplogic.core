import { useEditor } from '@craftjs/core';
import { createContext, useContext, useState } from 'react';

export const SettingsContext = createContext(null);

export const SettingsProvider = (props) => {
  const { children, value } = props;
  const [active, setActive] = useState('props');
  const [content, setContent] = useState(null);
  const {
    actions: { setCustom, setProp }
  } = useEditor();

  /**
   * 切换Tab
   * @param tab
   */
  function onTabClick(tab) {
    setActive(tab);
  }

  /**
   *  初始化Element
   * @param element
   */
  function initContent(element) {
    setContent(element);
  }

  return (
    <SettingsContext.Provider value={{ ...value, active, content, onTabClick, initContent, setCustom, setProp }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }
  return context;
};

export default useSettings;

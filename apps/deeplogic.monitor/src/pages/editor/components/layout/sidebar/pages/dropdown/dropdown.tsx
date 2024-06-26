import { DeleteBin7Line, EditBoxLine, FileCopyLine, FileReduceLine, Home5Line } from '@/components/icons';
import { Dropdown as AntDropdown } from 'antd';
import { useRef } from 'react';
import { groupMenus, pageMenus } from '../config.json';
import css from "./dropdown.module.less"

const icons = {
  rename: <EditBoxLine />,
  duplicate: <FileCopyLine />,
  home: <Home5Line />,
  delete: <DeleteBin7Line />,
  login: <FileReduceLine />
};

function Dropdown({ type, trigger, children, onClick }) {
  const ref = useRef(null);

  function renderMenu(data) {
    return data?.map((item) => {
      return {
        ...item,
        icon: icons[item.key]
      };
    });
  }

  return (
    <div ref={ref}>
      <AntDropdown
        menu={{
          items: renderMenu(type === 'group' ? groupMenus?.dataList : pageMenus?.dataList),
          onClick
        }}
        trigger={trigger}
        destroyPopupOnHide
        overlayClassName={css.dropdown}
      >
        <div>{children}</div>
      </AntDropdown>
    </div>
  );
}

export default Dropdown;

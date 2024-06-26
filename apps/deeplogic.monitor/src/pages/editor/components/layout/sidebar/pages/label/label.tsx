import { AddLine } from '@/components/icons';
import { Input } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Action from '../action';
import Dropdown from '../dropdown';
import usePages from '../usePages';
import css from "./label.module.less"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

function Label(props) {
  const { title, id, type } = props;
  const { onRename, onRemove, onDuplicate, setOpen, setGroupId, setHome, setLogin } = usePages();
  const inputRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const onClick = ({ key, domEvent }) => {
    domEvent?.stopPropagation();

    switch (key) {
      case 'rename':
        inputRef.current.focus({
          cursor: 'all'
        });
        setIsEdit(true);
        break;
      case 'duplicate':
        onDuplicate?.({ id, title });
        break;
      case 'delete':
        onRemove?.({ id, type });
        break;
      case 'home':
        setHome?.({ pageid: id });
        break;
      case 'login':
        setLogin?.({ pageid: id });
      default:
        break;
    }
  };

  /**
   * @description: 修改名称
   */
  const handleChange = (e) => {
    const val = e?.target?.value;
    if (isEdit) {
      if (title !== val) {
        onRename?.({ id, title: val, type });
      }
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (title) setValue(title);
  }, []);

  return (
    <motion.div
      className={css.label}
      onClick={(event) => isEdit && event.stopPropagation()}
      onHoverStart={() => setIsHover(!isHover)}
      onHoverEnd={() => setIsHover(!isHover)}
    >
      <div style={{ width: '100%' }}>
        <Dropdown type={type} trigger={['contextMenu']} onClick={onClick}>
          <div className={css.title}>
            <Input
              ref={inputRef}
              value={value}
              maxLength={32}
              readOnly={!isEdit}
              showCount={isEdit}
              onBlur={handleChange}
              className={`${!isEdit && css.input}`}
              variant={isEdit ? 'outlined' : 'borderless'}
              onChange={(event) => setValue(event.target.value)}
              onPressEnter={handleChange}
            />
          </div>
        </Dropdown>
      </div>
      {type === 'group' && (
        <Action
          onClick={() => {
            setGroupId(id);
            setOpen(true);
          }}
        >
          <AddLine />
        </Action>
      )}
    </motion.div>
  );
}

export default Label;

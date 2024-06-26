import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { Select, Tooltip } from 'antd';
import { useState } from 'react';
import { flexControl, justifyContent } from './config.json';
import css from './flexcontrol.module.less';

function FlexControl({ value, onChange }) {
  const [active, setActive] = useState(value);
  const [hover, setHover] = useState(null);
  const renderItem = () => {
    return [25, 30, 20].map((item, index) => (
      <div className={css.item} key={item} style={{ minHeight: `${item}%` }}>
        {index + 1}
      </div>
    ));
  };

  return (
    <div className={css.flex}>
      <div className={css.body}>
        <div className={css.container}>
          <div className={css.align}>
            <UpOutlined />
            <Select
              allowClear
              size={'small'}
              variant={'borderless'}
              placement={'bottomLeft'}
              popupMatchSelectWidth={120}
              value={active?.alignItems || ''}
              options={justifyContent?.dataList}
              onChange={(value) => {
                setActive({ ...active, alignItems: value });
                onChange?.({ ...active, alignItems: value });
              }}
            />
            <DownOutlined />
          </div>
          <div className={css.control} onMouseLeave={() => setHover(null)}>
            <div className={`${css.preview} ${hover && css.isHover}`} style={active}>
              {renderItem()}
            </div>
            {hover && (
              <div className={css.hover} style={hover}>
                {renderItem()}
              </div>
            )}
            <div className={css.action}>
              {flexControl?.dataList?.map((item) => (
                <div
                  key={item?.key}
                  onMouseEnter={() => setHover(item)}
                  onClick={() => {
                    setActive(item);
                    onChange?.(item);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <Tooltip title={'主轴对齐方式'}>
          <div className={css.justify}>
            <div style={{ width: 32 }} />
            <LeftOutlined />
            <Select
              allowClear
              size={'small'}
              variant={'borderless'}
              options={justifyContent?.dataList}
              value={active?.justifyContent || ''}
              onChange={(value) => {
                setActive({ ...active, justifyContent: value });
                onChange?.({ ...active, justifyContent: value });
              }}
            />
            <RightOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default FlexControl;

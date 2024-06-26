import { cx } from '@emotion/css';
import { theme } from 'antd';
import { useState } from 'react';
import { position } from './_config.js';
import { gradient, gradientItem, gradientItemActive } from './_style';

const { useToken } = theme;

function Position({ onChange }) {
  const { token } = useToken();
  const [active, setActive] = useState('centerCenter');

  return (
    <div className={gradient(token)}>
      {position?.map((item, index) => {
        return (
          <div
            key={index}
            className={cx(
              gradientItem(token),
              active === item?.key && gradientItemActive(token),
            )}
            onClick={() => {
              setActive(item?.key);
              onChange?.(item?.value);
            }}
          />
        );
      })}
    </div>
  );
}

export default Position;

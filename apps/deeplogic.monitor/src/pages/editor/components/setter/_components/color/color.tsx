import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect, useState } from 'react';
import Field from '../field';
import Popover from '../popover';
import css from './color.module.less';
import Picker, { REMOVE_COLOR_BG, UNSET_STYLE } from './picker';

function isLinear(rgbaColor) {
  if (!rgbaColor || !rgbaColor.indexOf) return;
  // console.log('rgbaColor: ', rgbaColor);
  return rgbaColor.indexOf('gradient') > -1;
}

function rgbaToHex(rgbaColor) {
  if (!rgbaColor) return '无';
  if (isLinear(rgbaColor)) return '渐变';
  if (rgbaColor === UNSET_STYLE) return '无';
  // if (rgbaColor === 'unset') return '无';
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(rgbaColor)) return rgbaColor;

  const rgbaValues = rgbaColor?.substring?.(rgbaColor?.indexOf?.('(') + 1, rgbaColor?.lastIndexOf?.(')'))?.split?.(',');
  // console.log('rgbaValues: ', rgbaValues);
  if (!rgbaValues) {
    return;
  }
  const r = parseInt(rgbaValues[0], 10);
  const g = parseInt(rgbaValues[1], 10);
  const b = parseInt(rgbaValues[2], 10);
  return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}

function Color({ className, value, isLinear = true, onChange }) {
  const [color, setColor] = useState(value || UNSET_STYLE);

  const handleChange = (colorAttrs) => {
    const color = colorAttrs === REMOVE_COLOR_BG ? UNSET_STYLE : colorAttrs;
    setColor(color);
    onChange?.(color);
  };

  useEffect(() => {
    setColor(value || UNSET_STYLE);
  }, [value]);

  return (
    <Field className={cls(css.picker, className)}>
      <Popover
        content={
          <Picker value={color === UNSET_STYLE ? REMOVE_COLOR_BG : color} hideControls={isLinear} onChange={handleChange} />
        }
      >
        <div className={css.row}>
          <div className={css.color} style={{ background: color }} />
          <div className={css.label}>{rgbaToHex(color)}</div>
        </div>
      </Popover>
    </Field>
  );
}

export default memo(Color, equal);

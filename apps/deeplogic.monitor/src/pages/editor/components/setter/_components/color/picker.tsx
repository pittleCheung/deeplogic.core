import equal from 'fast-deep-equal/es6';
import { memo } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import css from './picker.module.less';

export const UNSET_STYLE = 'unset';
// export const TRANSPARENT = 'transparent';
// export const TRANSPARENT_BG =
//   'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")';
export const REMOVE_COLOR_BG =
  'center / contain no-repeat url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yIC0yIDU0IDU0IiB3aWR0aD0nNTAnIGhlaWdodD0nNTAnPgoJPHBhdGggZD0iTTAgNTAgNTAgMFoiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPC9zdmc+")';

const customPresets = [
  'rgb(245, 34, 45)',
  'rgb(255, 122, 69)',
  'rgb(255, 169, 64)',
  'rgb(255, 197, 61)',
  'rgb(255, 236, 61)',
  'rgb(186, 230, 55)',
  'rgb(115, 209, 61)',
  'rgb(54, 207, 201)',
  'rgb(22, 119, 255)',
  'rgb(89, 126, 247)',
  'rgb(146, 84, 222)',
  'rgb(255, 255, 255)',
  'rgb(217, 217, 217)',
  'rgb(191, 191, 191)',
  'rgb(140, 140, 140)',
  'rgb(89, 89, 89)',
  'rgb(67, 67, 67)',
  'rgb(38, 38, 38)'
];

function Picker({ value, onChange, hideControls }) {
  let presets;
  if (hideControls) {
    presets = Array.from(customPresets);
    presets.unshift(REMOVE_COLOR_BG);
  } else {
    presets = customPresets;
  }
  return (
    <div className={css.picker}>
      <ColorPicker value={value} onChange={onChange} hideControls={hideControls} presets={presets} />
    </div>
  );
}

export default memo(Picker, equal);

import { createFromIconfontCN } from '@ant-design/icons';
import fontJson from './fonts/iconfont.json'
import './fonts/iconfont.js'
export const IconFont = createFromIconfontCN({
    // scriptUrl: '//at.alicdn.com/t/c/font_4520510_wkmpnwnq69h.js', // 在 iconfont.cn 上生成
    scriptUrl: '', // 在 iconfont.cn 上生成
});

// 动态获取 iconfont.json 中的所有图标类名。记得加前缀
const other = fontJson?.glyphs?.map?.(glyph => fontJson.css_prefix_text + glyph.font_class);

// 计算出所有图标的 JSX 元素
const Icons = other.reduce((acc, className) => {
    return {
      ...acc,
      [className]: <IconFont type={className} />
    };
  }, {});

// console.log('other: ', other,Icons);

export const categories = {
    other
};

export const category = {
    other: '网站通用图标'
};

export const theme = [];

export default {
    category,
    theme,
    items: categories,
    icons: Icons
};

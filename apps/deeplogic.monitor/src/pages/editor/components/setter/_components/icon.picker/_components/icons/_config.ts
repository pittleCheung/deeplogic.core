import { createElement } from 'react';
import fields from './_fields';
import IconItem from './icon.item';
import IconFontItem from './iconFont.item';

export default {
  tabs: [
    { key: 'antd', label: 'Ant Design', children: createElement(IconItem, fields?.antd) },
    { key: 'iconfont', label: 'iconfont', children: createElement(IconFontItem, fields?.iconfont)  }
  ]
};

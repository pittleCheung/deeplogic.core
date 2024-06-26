---
localeCode: zh-CN
title: Color 颜色选择器
brief: 用于选择颜色的组件，支持渐变色。
---

## 代码引用

```js
import Color from '@/_components/setter/color';
```

## 引用组件

[React-best-gradient-color-picker](https://github.com/hxf31891/react-gradient-color-picker)

### 组件示例

#### Color Picker

```typescript jsx
import React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';

function MyApp() {
  const [color, setColor] = useState('rgba(255,255,255,1)');

  return <ColorPicker value={color} onChange={setColor} />;
}
```

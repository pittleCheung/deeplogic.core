# Bind Component Documentation

`Bind`是一个基于`antd`的React组件，用于显示一个标签，这个标签包含绑定的值信息。当标签关闭时，可以触发一个回调函数。此组件主要用于展示绑定到全局变量、表达式、函数、点表或组件属性的值。

## Props

| Prop      | Type     | Default | Description  |
|-----------|----------|---------|--------------|
| `value`   | object   | -       | 包含绑定值和类型的对象。 |
| `onClose` | function | -       | 标签关闭时的回调函数。  |

### `value` Object

`value`对象包含以下属性：

- `bind`: 绑定的值，类型为`string`。
- `type`: 绑定值的类型，可以是`global`、`expressions`、`function`、`points`或`components`中的一个。

## Usage

下面是如何使用`Bind`组件的示例：

```jsx
import React from 'react';
import Bind from './Bind';

const App = () => {
  const value = {
    bind: 'user.name',
    type: 'global'
  };

  const handleClose = () => {
    console.log('Tag closed');
  };

  return <Bind value={value} onClose={handleClose} />;
};

export default App;

# StyleSetter 组件文档

## 概述

`StyleSetter` 组件提供了一个界面用于编辑和设置元素的样式属性。它包括尺寸、字体、边框、背景、布局和间距等常用样式设置。该组件通过动态渲染指定的设置项，为用户提供灵活的样式配置工具。

## 组件属性

`StyleSetter`组件通过`TabRenderer`子组件来渲染用户可交互的样式设置项。以下是它接受的属性说明：

| 属性名        | 类型       | 默认值                                                                         | 说明                        |
|------------|----------|-----------------------------------------------------------------------------|---------------------------|
| `show`     | array    | `['size', 'font', 'border', 'background', 'layout', 'spacing', 'position']` | 要显示的样式设置项的列表。             |
| `values`   | array    | `styleValue.dataList`                                                       | 样式的初始值。                   |
| `open`     | boolean  | -                                                                           | 面板是否展开。                   |
| `name`     | string   | -                                                                           | 组件名称。                     |
| `onChange` | function | -                                                                           | 样式更改时的回调函数。               |
| `...props` | -        | -                                                                           | 传递给`SetterProvider`的其他属性。 |

## 使用示例

```jsx
function ExampleComponent() {
  const [styleSettings, setStyleSettings] = useState({
    size: { width: 100, height: 50 },
    font: { fontFamily: 'Arial', fontSize: 14 },
    // 其他样式设置
  });

  const handleChange = (newValues) => {
    setStyleSettings(newValues);
  };

  return (
    <StyleSetter
      values={styleSettings}
      onChange={handleChange}
      // 指定要展示的样式设置项
      show={['size', 'font', 'border']}
    />
  );
}
```

## 功能特性

- **灵活的样式设置**：支持多种样式属性的设置，包括尺寸、字体、边框、背景、布局和间距。
- **动态配置**：通过`show`属性动态控制需要展示哪些样式设置项。
- **统一的样式数据管理**：使用`SetterProvider`来管理样式设置的状态，确保数据一致性。

## 样式定制

`StyleSetter`组件及其子组件（如`Size`、`Font`等）的样式可通过对应的样式文件进行定制。你可以通过修改这些样式文件来调整组件的外观，以适应不同的设计需求。

## 注意事项

- 确保在使用`StyleSetter`组件之前，已经正确实现了所有子组件（如`Size`、`Font`等）。
- `values`属性应包含所有可设置样式的初始值，以保证组件正常渲染和功能使用。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)

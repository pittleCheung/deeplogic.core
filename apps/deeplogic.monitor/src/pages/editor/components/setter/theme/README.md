# ThemeSetter 组件文档

## 概述

`ThemeSetter` 组件用于配置和设置应用主题的属性，如主题风格、主题色和圆角等。它结合 `Panel` 和 `Form.Item`
组件提供一个简洁的用户界面，允许用户对应用的视觉风格进行定制。

## 组件属性

| 属性名       | 类型            | 说明                          |
|-----------|---------------|-----------------------------|
| `title`   | string/object | 面板标题，支持字符串或对象（对象可包含额外提示信息）。 |
| `setProp` | function      | 设置主题属性值的函数。                 |

## 使用示例

```jsx
function AppThemeConfigurator() {
  const handleSetProp = (propPath, value) => {
    // 更新主题配置逻辑
  };

  return (
    <ThemeSetter
      title="主题设置"
      setProp={handleSetProp}
    />
  );
}
```

## 功能特性

- **主题风格选择**：通过 `ThemeCheckBox` 组件提供主题风格的选择。
- **主题色设置**：使用 `Color` 组件允许用户选择主题色。
- **圆角大小配置**：通过 `InputNumber` 组件设置圆角的大小。

## 样式定制

`ThemeSetter` 组件及其子组件的样式可以通过对应的样式文件进行定制。也可以通过 `Form.Item` 的 `labelCol` 和 `colon`
等属性来调整表单项的布局和显示。

## 注意事项

- 组件内部使用了 `Panel` 来组织不同的设置项，确保 `Panel` 组件已正确实现并可用。
- `title` 属性可以是字符串或对象，如果是对象，可以包含额外的提示信息，例如 `label` 和 `tip`。
- `setProp` 函数负责更新主题配置，确保传入此函数能正确处理属性路径和值的更新。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)

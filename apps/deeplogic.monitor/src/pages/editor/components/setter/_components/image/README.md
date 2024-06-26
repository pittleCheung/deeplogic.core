# ImageSetter 组件文档

## 概述

`ImageSetter` 组件用于图片的选择和预览。它结合了`Upload`组件来处理图片的上传和更改，通过`Popover`
组件提供一个交互式的界面，允许用户上传和预览图片。当前选中的图片会在一个`Field`组件内显示。

## 代码导入

```javascript
import ImageSetter from '路径/to/ImageSetter';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明              |
|------------|----------|-----|-----------------|
| `value`    | string   | -   | 当前选中的图片URL。     |
| `onChange` | function | -   | 当选中的图片变化时的回调函数。 |
| `onUpload` | function | -   | 触发上传操作的回调函数。    |

## 使用示例

```jsx
<ImageSetter
  value="image-url"
  onChange={(newUrl) => console.log('图片已更改:', newUrl)}
  onUpload={(file) => console.log('文件上传:', file)}
/>
```

## 功能特性

- **图片上传与预览**：整合`Upload`组件实现图片的上传功能，并在`Popover`中预览上传的图片。
- **动态样式适配**：使用`theme.useToken`获取当前主题的样式令牌，以适配不同的主题样式。
- **图片展示与信息**：选中的图片将以背景图的形式在`Field`内展示，同时显示图片URL。

## 样式定制

通过`_style`相关的CSS文件对组件的样式进行定制。利用`theme.useToken`动态获取并应用主题样式，增强组件的视觉一致性和可定制性。

## 注意事项

- 确保`antd`库和React环境已正确设置并可用。
- 该组件利用`previewUrl`函数处理图片URL以适用于背景图片的展示方式，确保此函数能正确返回预览URL。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [Typography 组件](https://ant.design/components/typography/)

```

# Upload 组件文档

## 概述

`Upload`
组件提供了一个上传功能，支持本地文件上传和网络地址输入两种模式。用户可以通过切换模式来选择上传本地文件或者输入一个网络资源地址。组件通过`Segmented`
控件来切换不同的上传模式，并根据选中的模式显示相应的上传界面。

## 代码导入

```javascript
import Upload from '路径/to/Upload';
```

## 属性说明

| 属性名            | 类型       | 说明                           |
|----------------|----------|------------------------------|
| `onChange`     | function | 上传值变化时的回调函数。                 |
| `value`        | string   | 输入的值或上传的文件地址。                |
| `type`         | string   | 初始上传类型（`local` 或 `network`）。 |
| `onTypeChange` | function | 上传类型变化时的回调函数。                |
| `onUpload`     | function | 文件上传操作的回调函数。                 |

## 使用示例

```jsx
function ExampleComponent() {
  const [uploadType, setUploadType] = useState('local');
  const [uploadValue, setUploadValue] = useState('');

  const handleTypeChange = (newType) => {
    setUploadType(newType);
  };

  const handleChange = (e) => {
    setUploadValue(e.target.value);
  };

  const handleUpload = (file) => {
    console.log('File uploaded:', file);
  };

  return (
    <Upload
      type={uploadType}
      value={uploadValue}
      onChange={handleChange}
      onTypeChange={handleTypeChange}
      onUpload={handleUpload}
    />
  );
}
```

## 功能特性

- **模式切换**：通过`Segmented`组件允许用户在"本地"和"网络"上传模式之间切换。
- **本地上传**：在"本地"模式下，用户可以上传文件。
- **网络地址输入**：在"网络"模式下，用户可以输入一个网络资源的URL。
- **自动识别网络地址**：在"网络"模式下，若`value`为有效的URL，则显示在输入框中。

## 样式定制

组件的样式通过修改`_style`文件进行定制，并使用`cls`函数与`theme.useToken`来适应不同的主题样式，实现样式的动态调整。

## 注意事项

- 确保已安装并正确导入`antd`及相关依赖。
- 使用组件时，请确保传入的`type`属性为有效值（即`local`或`network`）。
- 网络模式下的输入校验仅限于检查是否为有效的URL，更详细的校验逻辑可能需要自定义实现。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/input-cn/)
- [Ant Design 官方文档（Segmented）](https://ant.design/components/segmented-cn/)

# EventSetter 组件文档

## 概述

`EventSetter` 组件提供了一个界面，允许用户为特定元素配置事件。它结合了`Popover`和`EventContent`
组件来提供一个详细的事件配置界面，包括事件类型选择、页面跳转、函数执行等。用户可以通过点击事件名称旁边的图标来打开配置弹窗。

## 代码导入

```javascript
import EventSetter from '路径/to/EventSetter';
```

## 属性说明

| 属性名        | 类型       | 说明                                |
|------------|----------|-----------------------------------|
| `data`     | array    | 事件配置项数据。                          |
| `pages`    | array    | 页面列表，用于页面跳转事件的页面选择。               |
| `values`   | object   | 当前事件的配置值。                         |
| `resolver` | function | 自定义函数，用于解析事件配置为实际操作（如页面跳转、执行函数等）。 |
| `onChange` | function | 当事件配置变化时的回调函数，参数为新的事件配置值。         |
| `...props` | -        | 传递给`EventContent`组件的其他属性。         |

## 使用示例

```jsx
function ExampleComponent() {
  const eventConfigData = [
    { name: 'onClick', title: { tip: '点击事件' } }
  ];
  const [eventValues, setEventValues] = useState({});

  const handleEventChange = (newValues) => {
    setEventValues(newValues);
  };

  return (
    <EventSetter
      data={eventConfigData}
      pages={[{ F_PAGE_ID: 'page1', F_TITLE: '首页' }]}
      values={eventValues}
      onChange={handleEventChange}
    />
  );
}
```

## 功能特性

- **事件配置**: 支持对元素的事件进行详细配置，如点击事件。
- **动态内容**: 根据配置项`data`动态生成事件配置的输入界面。
- **页面选择**: 对于页面跳转类型的事件，提供页面选择功能。
- **配置反馈**: 通过`Popover`展示事件的配置界面，并通过`Badge`显示事件是否已配置。

## 样式定制

组件的样式通过修改`_style`文件进行定制，并利用`theme.useToken`根据主题动态调整样式。

## 注意事项

- 组件的功能依赖于`values`属性，该属性应为当前事件的配置值。
- `data`属性为事件配置项数据，需要合理定义以满足不同事件的配置需求。
- 使用`Popover`和`EventContent`组件提供详细的事件配置界面，确保这些组件已正确实现。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)

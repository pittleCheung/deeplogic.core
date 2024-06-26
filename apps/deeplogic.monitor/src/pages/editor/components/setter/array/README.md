# ArraySetter 组件文档

## 概述

`ArraySetter`
组件是一个动态数组编辑器，允许用户以图形界面的方式添加、删除、编辑和排序数组项。它支持字符串数组和对象数组，适用于复杂数据结构的动态编辑需求。组件利用`SortableList`
实现拖拽排序，以及`ArrayEdit`进行数组项的编辑和添加。

## 代码导入

```javascript
import ArraySetter from '路径/to/ArraySetter';
```

## 属性说明

| 属性名            | 类型       | 说明                        |
|----------------|----------|---------------------------|
| `title`        | string   | 组件标题。                     |
| `value`        | array    | 当前数组值。                    |
| `defaultValue` | array    | 默认数组值。                    |
| `attribute`    | array    | 数组项的属性配置，用于`ArrayEdit`组件。 |
| `onChange`     | function | 数组值变化时的回调函数。              |
| `pages`        | array    | 页面列表，用于配置`ArrayProvider`。 |
| `...props`     | -        | 其他传递给`ArrayProvider`的属性。  |

## 使用示例

```jsx
function ExampleComponent() {
  const [arrayValue, setArrayValue] = useState([]);

  const handleChange = (newValue) => {
    setArrayValue(newValue);
  };

  return (
    <ArraySetter
      title="示例数组编辑器"
      value={arrayValue}
      onChange={handleChange}
      attribute={[{ name: 'exampleAttribute' }]}
    />
  );
}
```

## 功能特性

- **动态数组编辑**：支持添加、编辑、删除和排序数组项。
- **字符串与对象数组**：兼容字符串数组和对象数组的编辑。
- **拖拽排序**：通过`SortableList`实现数组项的拖拽排序功能。
- **数组项编辑**：通过`ArrayEdit`组件实现数组项的详细编辑。

## 样式定制

组件的样式可通过修改`array.less`文件进行定制。使用`cls`方法动态应用样式，根据`theme.useToken`调整样式以适应不同主题。

## 注意事项

- 组件依赖于`SortableList`和`ArrayEdit`等内部组件，请确保这些组件已正确实现。
- 使用`useEffect`监听`value`和`defaultValue`的变化，以初始化或更新数组项。
- 利用`memo`和`equal`（`fast-deep-equal/es6`）优化组件性能，减少不必要的重新渲染。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
- [fast-deep-equal GitHub 仓库](https://github.com/epoberezkin/fast-deep-equal)

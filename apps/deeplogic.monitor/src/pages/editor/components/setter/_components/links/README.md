# Links 组件文档

## 概述

`Links` 组件用于链接的选择和展示。它允许用户从给定的页面列表中选择一个链接，并展示所选链接的标题。组件结合了`Popover`
来提供一个配置界面，以及`EventConfig`组件来处理链接的配置和更改。

## 代码导入

```javascript
import Links from '路径/to/Links';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明                       |
|------------|----------|-----|--------------------------|
| `value`    | Object   | -   | 当前选中的链接对象，包含链接ID或URL等信息。 |
| `pages`    | Array    | -   | 可供选择的页面列表，每个页面包含页面ID和标题。 |
| `onChange` | function | -   | 当选中的链接变化时的回调函数。          |

## 使用示例

```jsx
<Links
  value={{ link: 'some-link-id' }}
  pages={[{ F_PAGE_ID: 'page1', F_TITLE: '首页' }, { F_PAGE_ID: 'page2', F_TITLE: '联系我们' }]}
  onChange={(newLink) => console.log('选中的链接:', newLink)}
/>
```

## 功能特性

- **链接选择与展示**：通过`Popover`组件和`EventConfig`组件，用户可以配置链接，并在`Field`内展示所选链接的标题或URL。
- **动态链接信息更新**：组件利用`useEffect` Hook来根据`value`的变化动态更新显示的文本。

## 样式定制

组件的样式可以通过修改`_style`相关的CSS文件来定制。使用`theme.useToken`来适配当前主题的样式，增强视觉一致性。

## 注意事项

- 确保`antd`库和React环境已正确设置并可用。
- 该组件使用`memo`和`fast-deep-equal`库来优化性能，避免不必要的重新渲染。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [fast-deep-equal GitHub 仓库](https://github.com/epoberezkin/fast-deep-equal)

```

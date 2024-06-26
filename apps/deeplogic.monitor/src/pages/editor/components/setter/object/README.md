# 动态 UI 组件详细文档

本文档详细介绍了一套动态 UI 组件的使用方法及其属性，这套组件适用于基于 JSON 或对象配置动态生成用户界面的场景。

## 组件概览

以下是该套件中包含的核心组件及其作用：

### 1. ObjectSetter

#### 作用

用作配置对象的根组件，提供上下文和渲染策略给子组件。

#### Props

| 属性名 | 类型 | 默认值 | 说明             |
|-----|----|-----|----------------|
| -   | -  | -   | 继承父组件的所有 props |

### 2. RenderSetter

#### 作用

根据配置渲染具体的设置组件。

#### Props

| 属性名      | 类型     | 默认值 | 说明            |
|----------|--------|-----|---------------|
| `setter` | object | -   | 描述要渲染的组件及其属性。 |
| `name`   | string | -   | 组件名。          |
| 其他       | -      | -   | 传递给子组件的额外属性。  |

### 3. Label

#### 作用

显示属性的标签和工具提示。

#### Props

| 属性名     | 类型     | 默认值 | 说明         |
|---------|--------|-----|------------|
| `title` | object | -   | 标签文本和工具提示。 |

### 4. ObjectItems

#### 作用

渲染一个对象的所有可配置项。

#### Props

无额外 props，使用 `useObject` Hook 获取上下文中的属性。

### 5. RenderItem

#### 作用

渲染单个配置项，包括绑定和渲染具体的设置组件。

#### Props

| 属性名            | 类型      | 默认值 | 说明                 |
|----------------|---------|-----|--------------------|
| `name`         | string  | -   | 配置项名称。             |
| `title`        | object  | -   | 配置项标题。             |
| `propType`     | string  | -   | 属性类型。              |
| `fieldProps`   | object  | -   | Form.Item 组件的额外属性。 |
| `setter`       | object  | -   | 设置组件描述对象。          |
| `hidden`       | boolean | -   | 是否隐藏。              |
| `defaultValue` | any     | -   | 默认值。               |

### 6. ObjectRender

#### 作用

根据属性类型决定渲染哪个组件。

#### Props

| 属性名        | 类型     | 默认值 | 说明           |
|------------|--------|-----|--------------|
| `propType` | string | -   | 属性类型。        |
| 其他         | -      | -   | 传递给子组件的额外属性。 |

## 使用示例

```jsx
// 示例配置
const configData = {
  name: '配置名称',
  propType: 'string',
  setter: {
    component: 'StringSetter',
    props: {
      placeholder: '请输入配置值'
    }
  }
};

// 使用 ObjectSetter 组件
<ObjectSetter {...configData} onChange={handleConfigChange} />;
```

## 结论

此动态 UI 组件套件提供了灵活的界面生成机制，适用于需动态编辑 JSON 或对象配置的应用场景。通过组合使用这些组件，可以轻松实现复杂配置的动态编辑功能。

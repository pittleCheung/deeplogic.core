# Metadata 说明

## 参数说明

| 参数            | 说明      | 类型      | 默认值   |
|---------------|---------|---------|-------|
| componentName | 组件英文名称  | string  | -     |
| category      | 分类名称    | string  | -     |
| title         | 组件标题    | string  | -     |
| screenshot    | 组件截图    | string  | -     |
| isElement     | 是否为画布组件 | boolean | false |
| isGroup       | 是否为组合组件 | boolean | false |
| isDevice      | 是否为设备组件 | boolean | false |
| props         | 组件属性    | object  | -     |
| events        | 组件事件    | object  | -     |
| style         | 组件样式    | object  | -     |

### props

| 参数名          | 说明                 | 类型     | 默认值 |
|--------------|--------------------|--------|-----|
| name         | 属性名称               | string | -   |
| title        | 属性标题               | string | -   |
| propType     | 属性类型               | string | -   |
| defaultValue | 属性默认值              | any    | -   |
| values       | propType是Select的选项 | object | -   |
| fieldProps   | 属性Item配置           | object | -   |
| props        | 子属性                | array  | -   |
| setter       | 组件单独配置器            | object | -   |

#### propType

| 参数名     | 说明     | 类型       | 默认值 |
|---------|--------|----------|-----|
| string  | 字符串类型  | string   | -   |
| number  | 数字类型   | number   | -   |
| boolean | 布尔类型   | boolean  | -   |
| segment | 分段类型   | string   | -   |
| select  | 选择类型   | string   | -   |
| color   | 颜色类型   | string   | -   |
| image   | 图片类型   | string   | -   |
| array   | 数组类型   | array    | -   |
| object  | 对象类型   | object   | -   |
| series  | 图表系列类型 | array    | -   |
| event   | 事件类型   | function | -   |

#### setter

| 参数名       | 说明   | 类型     | 默认值 |
|-----------|------|--------|-----|
| name      | 属性名称 | string | -   |
| component | 属性组件 | string | -   |
| props     | 属性选项 | object | -   |

### component

| 参数名          | 说明      |
|--------------|---------|
| StyleSetter  | 样式配置器   |
| EventSetter  | 事件配置器   |
| ArraySetter  | 数组配置器   |
| ChartSetter  | 图表配置器   |
| ThemeSetter  | 主题配置器   |
| ObjectSetter | 对象配置器   |
| SeriesSetter | 系列配置器   |
| JSONSetter   | JSON配置器 |
| NodeSetter   | 节点配置器   |
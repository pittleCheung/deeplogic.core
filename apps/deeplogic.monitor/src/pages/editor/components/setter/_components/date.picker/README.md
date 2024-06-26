# DatePicker 组件文档

`DatePicker` 是基于 `antd` 的 `DatePicker` 和 `RangePicker`
组件进行封装的React组件，它提供了单选和范围选择的日期选择器。此组件使用 `dayjs` 来处理日期和时间，支持单个日期选择或日期范围选择，并允许通过属性来定制组件行为。

## 属性

以下是 `DatePicker` 组件的主要属性：

| 属性             | 类型              | 默认值   | 描述                                                |
|----------------|-----------------|-------|---------------------------------------------------|
| `value`        | string \| array | -     | 组件的值，可以是单个日期字符串或日期字符串数组（对于范围选择）。                  |
| `onChange`     | function        | -     | 日期改变时的回调函数。接收改变后的日期值作为参数。                         |
| `showTime`     | boolean         | false | 是否显示时间选择器。                                        |
| `isRange`      | boolean         | false | 是否为日期范围选择器。如果为true，将使用 `RangePicker`。             |
| `relatedProps` | string          | -     | 关联属性的名称，用于从 `form` 中获取值作为日期选择器的参数。                |
| `form`         | object          | -     | 包含 `getFieldValue` 方法的表单对象，与 `relatedProps` 配合使用。 |

## 使用示例

### 单个日期选择

```jsx
import React, { useState } from 'react';
import DatePicker from './DatePicker';

const App = () => {
  const [date, setDate] = useState('');

  return <DatePicker value={date} onChange={setDate} />;
};

export default App;
```

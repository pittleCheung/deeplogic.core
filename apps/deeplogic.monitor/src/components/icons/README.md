---
localeCode: zh-CN
order: 20
title: Icon 图标
brief: 自定义图标。
---

### SVG 源

[https://remixicon.com/](https://remixicon.com/)

### 说明

> 该组件可以用来方便地使用自定义的 SVG 图标，通过引入 SVG 文件并动态创建对应的组件，实现了简单的图标组件化。

所有组件置于`svg`文件夹下，每个组件对应一个`svg`文件，文件名即为组件名。

### 注意

- 该组件暂未实现动态导入 svg 文件，因此需要手动引入所有的 svg 文件。
- 在书写组件时，需要手动引入对应的 svg 文件。

### TODO

- [ ] 通过`webpack`的`require.context`实现动态导入。
- [ ] 通过`webpack`的`svg-sprite-loader`实现 svg 文件的合并。

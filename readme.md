# intro

```js
usePages  => useSidebar
const { page } = useSidebar();
<PagesProvider {...page}> 

useSidebar => useDesigner
const { sidebar } = useDesigner();

useDesigner
=> DesignerProvider 

{/* 初始化props */}
props = {
    pages: [], // 项目所有页面
    pageId: "", // 当前页面
    content: {}, // 当前页面内容
    comLibs: [], // 组件库分类
    comLib: {}, // 组件库
    customs: [], // 自定义组件
    customCategory: [], // 自定义组件分类
    devices: null, // 设备树
    refresh: true, // 是否刷新页面
}
<DesignerProvider
  projId={props.projId}
  {...props}
  resolver={{ ...materials }}
>
DesignerProvider的props传下来到 contextValue
const contextValue = useMemo(() => ({
  ...props,
  state,
  updateOpen,
  updateSelected,
  updateEditorRef,
}), [props, state, updateOpen, updateSelected, updateEditorRef]);

<DesignerContext.Provider value={contextValue}>
      {children}
</DesignerContext.Provider>
```

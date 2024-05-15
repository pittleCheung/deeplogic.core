## useComponent

### 介绍

useComponent 是一个用于管理组件的 hooks，可以用于组件的注册、获取、卸载等操作。

### 组件返回参数

| 参数          | 说明      | 类型      | 默认值 |
|-------------|---------|---------|-----|
| id          | 组件 id   | string  | -   |
| theme       | 组件主题    | string  | -   |
| actions     | 组件操作    | object  | -   |
| query       | 组件查询    | object  | -   |
| state       | 组件状态    | object  | -   |
| enabled     | 组件是否可编辑 | boolean | -   |
| selected    | 组件是否选中  | boolean | -   |
| descendants | 组件子组件   | array   | -   |

#### actions

##### add(nodes: Node, parentId?: NodeId, index?: number) => void

Add a Node to the given parent node ID at the specified index. By default the parentId is the id of the Root Node

##### addNodeTree(tree: NodeTree, parentId?: NodeId) => void

Add a NodeTree to the given parent node ID at the specified index. By default the parentId is the id of the Root Node

##### clearEvents() => void

Resets the editors events state

##### delete(nodeID: NodeId) => void

Delete the specified Node

##### deserialize(data: SerializedNodes | string) => void

Recreate Nodes from a SerializedNodes object/json. This will clear all the current Nodes in the editor state with the
recreated Nodes

##### move(nodeId: NodeId, targetParentId: NodeId, index: number) => void

Move a Node to the specified parent Node at the given index.

##### setProp(nodeId: NodeId, update: (props: Object) => void) => void

Manipulate the props of the given Node

##### setCustom(nodeId: NodeId, update: (custom: Object) => void) => void

Manipulate the custom values of the given Node

##### setHidden(nodeId: NodeId, bool: boolean) => void

When set to true, the User Component of the specified Node will be hidden, but not removed

##### setOptions(options: Object) => void

Update the editor's options. The options object passed is the same as the <Editor /> props.

##### selectNode(nodeId: NodeId | null) => void

Select the specified node. You can clear the selection by passing `null`

##### history

- undo() => void
    - Undo the last recorded action
- redo() => void
    - Redo the last undone action
- ignore() => ActionMethods
    - Run an action without recording its changes in the history
- throttle(throttleRate: number = 500) => ActionMethods
    - Run an action while throttling its changes recorded to the history. This is useful if you need to group the
      changes made by a certain action as a single history record

#### query

##### getSerializedNodes() => SerializedNodes

Return the current Nodes into a simpler form safe for storage

##### serialize() => String

Return getSerializedNodes() in JSON

##### getOptions() => Object

Get the options specified in the <Editor /> component

##### getDropPlaceholder(sourceNodeId: NodeId, targetNodeId: NodeId, pos: {x: number, y: number}, nodesToDOM?: (node: Node) => HTMLElement = node => node.dom)

Given the target Node and mouse coordinates on the screen, determine the best possible location to drop the source Node.
By default, the Node's DOM property is taken into consideration.

##### node(id: NodeId) => NodeHelpers

Returns an object containing helper methods to describe the specified Node. Click here for more information.

##### parseReactElement(element: React.ReactElement) => Object

##### toNodeTree(normalize?: (node: Node, jsx: React.ReactElement) => void) => NodeTree

Parse a given React element into a NodeTree

##### parseSerializedNode(node: SerializedNode) => Object

- toNode(normalize?: (node: Node) => void) => Node
    - Parse a serialized Node back into it's full Node form

##### parseFreshNode(node: FreshNode) => Object

- toNode(normalize?: (node: Node) => void) => Node
    - Parse a fresh/new Node object into it's full Node form, ensuring all properties of a Node is correctly initia
      lised. This is useful when you need to create a new Node.

### 组件方法

| 方法名         | 说明                  | 参数                      |
|-------------|---------------------|-------------------------|
| setProps    | 设置组件属性              | (props: object) => void |
| connectRef  | 将组件设置为可选中，用于给设备组件使用 | (ref: Element) => void  |
| connectDrag | 将组件设置为可拖拽           | (ref: Element) => void  |
| onSelect    | 选中组件时触发             | (id: string) => void    |

#### setProps

设置组件属性

```js
import {useComponent} from 'meaterials';

const {setProps} = useComponent();

setProps({
    title: '标题',
    subTitle: '副标题',
});
```

#### connectRef

将组件设置为可选中，用于给设备组件使用

```js
import {useComponent} from 'meaterials';

const {connectRef} = useComponent();

const render = () => {
    return (
        <div ref={connectRef}>
            ...
        </div>
    );
}
```

#### connectDrag

将组件设置为可拖拽

```js

import {useComponent} from 'meaterials';

const {connectDrag} = useComponent();

const render = () => {
    return (
        <div ref={connectDrag}>
            ...
        </div>
    );
}
```

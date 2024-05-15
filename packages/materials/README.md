# 低代码编辑器的物料库

这是一款专门为低代码编辑器设计的组件库。我们的目标是让开发者能够以更高效、更灵活的方式构建他们的应用。该库基于 `antd5`
——一个广受好评的用户界面库，同时引入了 `craftjs`
——一款优秀的可视化构建库。这种组合确保了我们的组件库在维持简洁、统一的设计风格的同时，也充满了活力和创造性。我们的组件库致力于为开发者提供最佳的拖拽、编辑和定制化体验，从而显著提高开发效率，释放他们的创新潜力。

## 🎯 主要特性

- **丰富的组件库**：我们为您提供了一系列精心设计和实现的组件，用于快速搭建和定制化您的低代码编辑器。所有组件都遵循 `antd5`
  的设计原则和UI风格，无论是单独使用，还是组合使用，都能提供一致的视觉效果。

- **深度集成 Craft.js**：我们对每一个组件都进行了深度的 `craftjs`
  集成，让您能够在低代码环境下，享受到完全的拖拽和编辑体验。无论是简单的拖拽，还是复杂的嵌套和排序，都能得到出色的表现。

- **高度可定制**：在保持组件设计原则的同时，我们还为每个组件提供了丰富的属性和事件接口，让您能够根据项目需求，对组件进行深度的定制和扩展。

- **优秀的性能**：在设计和实现过程中，我们始终将性能放在重要的位置，确保无论是在开发阶段，还是在生产环境，都能获得出色的性能体验。

- **良好的兼容性**：我们的组件不仅可以在所有现代浏览器上使用，还保证了对主流开发框架的良好兼容性，支持在 React 中使用。

- **持续的更新**：我们团队对此项目进行了长期的维护和更新，无论是对现有组件的优化，还是新组件的添加，我们都保持着高效和稳定的节奏。

## 📦 组件清单

我们的库目前包含以下组件，且我们正在持续开发更多新的组件：

- `Avatar`
- `Badge`
- `Breadcrumb`
- `Button`
- `Card`
- `Carousel`
- `Col`
- `Collapse`
- `Container`
- `Descriptions`
- `Divider`
- `Dropdown`
- `Image`
- `Menu`
- `Page`
- `Pagination`
- `Resizer`
- `Row`
- `Segmented`
- `Space`
- `Table`
- `TypographyText`

当然可以，基于git子组件的使用方式如下：

## 🛠️ 使用指北

要使用我们的组件库，首先需要在你的项目中添加它作为 git 子模块。注意：以下命令只在新项目未引用此项目时执行，**如果项目的.gitmodules文件中已有相关子模块配置，则不需执行以下命令**：

```bash
git submodule add http://10.0.0.2:8000/deepctrls/deeplogic.designer.editor.git src/pages/editor/components/materials
```

然后，你需要更新子模块以确保获取最新的代码：

```bash
git submodule update --init --recursive
```
如果需要在主项目中修改和提交此子模块的代码需要做如下操作：
```bash
cd <submodule-path>
git checkout <branch>
cd <parent-repo-path>
git config -f .gitmodules submodule.<submodule-path>.branch <branch>
git config -f .gitmodules submodule.<submodule-path>.update <rebase|merge>
```
以上   
> - &lt;submodule-path&gt; 为子模块所在目录.
> - &lt;parent-repo-path&gt; 为主模块所在目录.
> - &lt;branch&gt; 一般为 master.
  
<br>
 
现在，你可以在你的代码中引入你所需的组件：

```javascript
import {Button, Card} from './meaterials';
```

至此，你就可以在你的低代码编辑器中自由地使用这些组件了。

如果组件库有更新，你可以使用下面的命令更新子模块：

```bash
git submodule update --remote --merge
```

## 📂 目录结构

```bash
components                                      # 组件
├── _utils                                      # 工具函数                 
│   ├── baseMeta.js                             # 基础元数据
│   ├── request.jsx                             # 请求函数
│   └── utils.js                                # 工具函数
├── base                                        # 基础组件
│   ├── display                                 # 展示组件
│   │   ├── avatar                              # 头像
│   │   ├── badge                               # 徽标
│   │   ├── card                                # 卡片
│   │   ├── card.header                         # 卡片头部
│   │   ├── carousel                            # 走马灯
│   │   ├── collapse                            # 折叠面板
│   │   ├── descriptions                        # 描述列表
│   │   ├── logs.roller                         # 日志滚动器
│   │   ├── segmented                           # 分段控制器
│   │   ├── segmented.tabs                      # 分段标签页
│   │   ├── statistic                           # 统计
│   │   ├── table                               # 表格
│   │   ├── tabs                                # 标签页
│   │   └── tree                                # 树形控件
│   ├── feedback                                # 反馈组件
│   │   ├── drawer                              # 抽屉
│   │   ├── modal                               # 模态框
│   │   ├── pop.confirm                         # 气泡确认框
│   │   └── progress                            # 进度条
│   ├── form                                    # 表单组件
│   │   ├── checkbox                            # 复选框
│   │   ├── date.picker                         # 日期选择器
│   │   ├── form                                # 表单
│   │   ├── form.item                           # 表单项
│   │   ├── input                               # 输入框
│   │   ├── login                               # 登录
│   │   ├── radio                               # 单选框
│   │   ├── select                              # 选择器
│   │   └── time.picker                         # 时间选择器
│   ├── general                                 # 通用组件
│   │   ├── button                              # 按钮
│   │   ├── generic.icon                        # 通用图标
│   │   ├── image                               # 图片
│   │   ├── link                                # 链接
│   │   ├── state.text                          # 状态文本
│   │   └── typography.text                     # 排版文本
│   ├── layout                                  # 布局组件
│   │   ├── col                                 # 列
│   │   ├── columns                             # 多列
│   │   ├── container                           # 容器
│   │   ├── divider                             # 分割线
│   │   ├── layout                              # 布局
│   │   ├── layout.footer                       # 布局底部
│   │   ├── layout.header                       # 布局头部
│   │   ├── layout.sider                        # 侧边布局
│   │   ├── page                                # 页面
│   │   ├── row                                 # 行
│   │   └── space                               # 间距
│   └── navigation                              # 导航组件
│       ├── breadcrumb                          # 面包屑
│       ├── dropdown                            # 下拉菜单
│       ├── menu                                # 菜单
│       └── pagination                          # 分页
├── charts                                      # 图表
│   ├── __config                                # 配置
│   │   └── index.js                            # 主配置文件
│   ├── __options                               # 选项
│   │   ├── __data                              # 数据配置
│   ├── bar                                     # 柱状图
│   ├── gauge                                   # 仪表盘
│   ├── line                                    # 折线图
│   ├── pie                                     # 饼图
│   ├── sankey                                  # 桑基图
│   ├── scatter                                 # 散点图
│   └── tree.chart                              # 树图
├── common                                      # 通用
│   ├── charts                                  # 图表
│   │   ├── __helper                            # 辅助
│   │   │   └── utils.js                        # 工具函数
│   │   ├── __service                           # 服务
│   │   │   └── service.js                      # 服务函数
│   │   ├── __theme                             # 主题
│   │   │   └── dark.js                         # 暗色主题
│   │   ├── charts.jsx                          # 图表组件
│   │   └── index.js                            # 索引文件
│   ├── custom                                  # 自定义
│   ├── drag.jsx                                # 拖拽组件
│   ├── element.jsx                             # 元素组件
│   ├── icon                                    # 图标
│   ├── resizer                                 # 调整大小组件
│   └── svg.jsx                                 # SVG组件
├── images                                      # 图片
│   └── svg.material                            # SVG素材
├── monitor                                     # 监控
│   ├── container                               # 容器
│   ├── devices                                 # 设备
└── useComponent.jsx                            # 组件解析Hooks
```

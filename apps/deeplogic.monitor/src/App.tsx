import React, { useEffect, useLayoutEffect } from "react"
import { RouterProvider } from "react-router-dom"
import dayjs from "dayjs"
import { Editor, Frame, Element, useEditor } from "@craftjs/core"
import zhCN from "antd/locale/zh_CN"
import { useNode } from "@craftjs/core"
import materials from "@deeplogic/materials"
import { source3 as source, deviceModelMap, links, global } from "./data"
import themeConfig from "./layouts/theme"
import { ConfigProvider } from "antd"
import router from "./router"


// if (import.meta.hot) {
//   import.meta.hot.accept("./auto3d/handleSource", (newModule) => {
//     console.log("触发热更新")
//   })
// }

// Load save state from server on page load
// 初始化语言
dayjs.locale('zh-cn');

function App() {
  // 配置弹窗等样式
  ConfigProvider.config({
    holderRender: (children: any) => (
      // <StyleProvider hashPriority="high">
        <ConfigProvider locale={zhCN} theme={themeConfig}>
          {children}
        </ConfigProvider>
      // </StyleProvider>
    ),
  })

  return (
    <>
      <div>
        <ConfigProvider locale={zhCN} theme={themeConfig}>
          <RouterProvider router={router} />
        </ConfigProvider>        
      </div>
    </>
  )
}

export default App

import { DefaultEventHandlers, Editor, Frame, useEditor } from "@craftjs/core";
import { Layout as AntdLayout, Spin } from "antd"
import Layout from "./components/layout"
import materials from "@deeplogic/materials";
import { debounce } from "lodash-es";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { deleteCustom, jsonCompress, setProject } from "./components/helper/utils";
import { DesignerView } from "./components/DesignerView";

class CustomEventHandlers extends DefaultEventHandlers {
  handlers() {
    const defaultHandlers = super.handlers()

    return {
      ...defaultHandlers,
    }
  }
}


// 空压
export const EditorContainer = () => {
  const contentJson = useRef<any>(null)
  /**
   * @description 节点变化
   * @param query
   * @type {(function(*): void)|*}
   */
  const onNodesChange = useCallback(
    debounce(async (query) => {
      const json = query.serialize()

      const removeCustomJson = deleteCustom(json)
      if (contentJson.current === removeCustomJson) {
        return
      }

      contentJson.current = removeCustomJson
      const compressed = await jsonCompress(removeCustomJson)

      setProject(compressed)
      // onChange?.(compressed)
    }, 500),
    [],
  )

  useEffect(() => {
    return () => {
      // 取消防抖函数
      onNodesChange.cancel()
    }
  }, [onNodesChange])

  return (
    <AntdLayout className="mainContent">
      <Editor
        resolver={{ ...materials }}
        enabled={true}
        onNodesChange={onNodesChange}>
        <Layout>
          <DesignerView />
        </Layout>
      </Editor>
    </AntdLayout>
  )
}


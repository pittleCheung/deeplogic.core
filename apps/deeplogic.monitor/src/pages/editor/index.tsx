import { DefaultEventHandlers, Editor, Frame, useEditor } from "@craftjs/core";
import { Layout as AntdLayout, Spin } from "antd"
import resolver from "@deeplogic/materials"
import { debounce } from "lodash-es";
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { deleteCustom, jsonCompress, setProject } from "./components/helper/utils";
import { DesignerView } from "./components/DesignerView";
import Layout from "./components/layout"
import DesignerProvider from "./components/designerProvider"
import { pages } from "./data"
import { useAppStore } from "src/store/index"

interface CustomEventHandlersProps {
  store: any
  isMultiSelectEnabled: () => boolean
  removeHoverOnMouseleave: boolean
}
class CustomEventHandlers extends DefaultEventHandlers {
  constructor(props: CustomEventHandlersProps) {
    super(props)
  }
  handlers() {
    const defaultHandlers = super.handlers()
    return {
      ...defaultHandlers,
    }
  }
}

export const EditorContainer = () => {
  const contentJson = useRef<any>(null)
  const { sites, updateSites } = useAppStore()
  const [materials, setMaterials] = useState([])
  const [libraries, setLibraries] = useState([])

  // json测试数据
  useEffect(() => {
    const pagelist = localStorage.getItem("pages")
    updateSites({
      ...sites,
      pages: pagelist ? JSON.parse(pagelist) : pages,
    })
  }, [])

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

  const onHandlers = useCallback((store:any) => {
    return new CustomEventHandlers({
      store,
      isMultiSelectEnabled: () => false,
      removeHoverOnMouseleave: true,
    })
  }, [])

  /**
   * 保存
   * @returns {Promise<void>}
   */

  const onSave = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/save", payload })
    },
    [],
  )

  /**
   * 上传图片
   * @param payload
   */
  const onUpload = useCallback(
    (payload:any) => {
      // return dispatch({ type: "apps/upload", payload })
    },
    [],
  )

  /**
   * 创建页面/分组
   * @param payload
   */
  const onCreate = useCallback((payload:any) => {
    // if ("F_PAGE_ID" in payload) {
    //   return dispatch({ type: "editor/createPage", payload })
    // }
    // return dispatch({ type: "editor/createGroup", payload })
  }, [])

  /**
   * 重命名页面/分组
   * @type {(function({id: *, title: *, type: *}): void)|*}
   */
  const onRename = useCallback(({ id, title, type }:any) => {
    // if (type === "page") {
    //   return dispatch({
    //     type: "editor/renamePage",
    //     payload: { pageid: id, newTitle: title },
    //   })
    // }
    // return dispatch({
    //   type: "editor/renameGroup",
    //   payload: { ptid: id, newName: title },
    // })
  }, [])

  /**
   * 删除页面/分组
   * @type {(function({id: *, type: *}): void)|*}
   */
  const onRemove = useCallback(({ id, type }) => {
    // if (type === "page") {
    //   return dispatch({ type: "editor/removePage", payload: { pageid: id } })
    // }
    // return dispatch({ type: "editor/removeGroup", payload: { ptid: id } })
  }, [])

  /**
   * 复制页面
   * @param payload
   */
  const onDuplicate = useCallback(({ id, title }) => {
    // return dispatch({
    //   type: "editor/copyPage",
    //   payload: { pageid: id, newTitle: `${title} 拷贝` },
    // })
  }, [])

  /**
   * 选择页面
   * @type {(function(*): void)|*}
   */
  const onPageSelect = useCallback((payload:any) => {
    // return dispatch({ type: "editor/fetchPageContent", payload })
  }, [])

  /**
   * 获取自定义组件
   * @param payload
   */
  const onMaterialSelect = useCallback(
    (payload:any) => {
      // if (global.CUSTOM === payload) {
      //   return dispatch({ type: "editor/getCustom" })
      // }
      // return dispatch({ type: "editor/getComLib", payload })
    },
    [],
  )
  /**
   * 更新内容
   * @param payload
   */
  // function onChange(payload:any) {
  //   return dispatch({ type: 'editor/updateContent', payload });
  // }
  const onChange = useCallback(
    (payload:any) => {
      console.log("onChange: ", payload)
      // return dispatch({ type: "editor/updateContent", payload })
    },
    [],
  )

  /**
   * 创建自定义组件
   * @param payload
   */
  const onCreateCustom = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/createCustom", payload })
    },
    [],
  )

  /**
   * 删除自定义组件
   * @param payload
   */
  const onRemoveCustom = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/removeCustom", payload })
    },
    [],
  )

  /**
   * 创建自定义分类
   * @param payload
   */
  const onCreateCategory = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/createCustomCategory", payload })
    },
    [],
  )

  const getCustomCategory = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/getCustomCategory", payload })
    },
    [],
  )

  /**
   * 删除自定义分类
   * @param payload
   */
  const onRemoveCategory = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/removeCustomCategory", payload })
    },
    [],
  )

  /**
   * 设置首页
   * @param payload
   */
  const setHome = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/setHomePage", payload })
    },
    [],
  )

  /**
   * 设置登录页
   * @param payload
   */
  const setLogin = useCallback(
    (payload:any) => {
      // return dispatch({ type: "editor/setLoginPage", payload })
    },
    [],
  )

  const pageSidebar = useMemo(
    () => ({
      pages:sites.pages,
      pageId:sites.pageId,
      onCreate,
      onRename,
      onRemove,
      setHome,
      setLogin,
      onDuplicate,
      onSelect: onPageSelect,
    }),
    [
      sites.pages,
      sites.pageId,
      onCreate,
      onRename,
      onRemove,
      setHome,
      setLogin,
      onDuplicate,
      onPageSelect,
    ],
  )

  const customSidebar = useMemo(
    () => ({
      customs: sites.customs,
      customCategory: sites.customCategory,
      onRemoveCustom,
      onCreateCustom,
      onCreateCategory,
      onRemoveCategory,
      getCustomCategory,
    }),
    [
      sites.customs,
      sites.customCategory,
      onRemoveCustom,
      onCreateCustom,
      onCreateCategory,
      onRemoveCategory,
      getCustomCategory,
    ],
  )

  const materialsSidebar = useMemo(
    () => ({
      // menus: getMaterials(comLibs),
      menus: materials,
      // components: getComponents(comLib),
      components: libraries,
      onSelect: onMaterialSelect,
      custom: customSidebar,
    }),
    [sites.comLibs, sites.comLib, onMaterialSelect, customSidebar, materials, libraries],
  )

  const sidebar = useMemo(
    () => ({
      page: pageSidebar,
      materials: materialsSidebar,
    }),
    [pageSidebar, materialsSidebar],
  )

  useEffect(() => {
    return () => {
      // 取消防抖函数
      onNodesChange.cancel()
    }
  }, [onNodesChange])

  return (
    <AntdLayout className="mainContent">
      <DesignerProvider
        projId={sites.projId}
        {...sites}
        sidebar={sidebar}
        resolver={{ ...resolver }}>
        <Editor
          resolver={{ ...resolver } as any}
          enabled={true}
          handlers={onHandlers}
          onNodesChange={onNodesChange}>
          <Layout>
            <DesignerView />
          </Layout>
        </Editor>
      </DesignerProvider>
    </AntdLayout>
  )
}


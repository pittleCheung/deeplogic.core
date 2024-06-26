import React, { useCallback, useEffect, useMemo } from "react"
import { Frame, Element } from "@craftjs/core"
import { merge } from "lodash-es"
import { useDesigner, useLayout } from "./hooks"
import { defaultPage, pageStyle } from "./helper/config.json"
import {Page} from "@deeplogic/materials"

export const DesignerView = () => {
  const { layout, projId } = useDesigner()
  const { onRender } = useLayout()

  const initRender = useCallback(() => {
    const ROOT = {
      ROOT: merge({}, defaultPage?.dataList?.ROOT, {
        props: {
          ...Page.craft?.props,
          projId,
          style: merge({}, Page.craft?.props?.style, pageStyle?.dataList),
        },
        custom: merge({}, Page.craft?.custom, { device: { id: null } }),
      }),
    }
    onRender?.(
      layout?.content?.F_CONTENT || JSON.stringify(ROOT),
      projId,
    ).finally(() => {
    })
  }, [layout?.content.F_CONTENT, projId])

   useEffect(() => {
     initRender?.()
     console.log("initRender: ", initRender)
   }, [initRender])
   const style = useMemo(() => pageStyle?.dataList, [pageStyle?.dataList])
   const displayName = useMemo(() => ({ displayName: "App" }), [])
   
  return (
    <Frame>
      <Element is={Page} style={style} canvas custom={displayName} />
    </Frame>
  )
}

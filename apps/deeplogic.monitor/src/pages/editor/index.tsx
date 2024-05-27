import { Editor, Frame, useEditor } from "@craftjs/core";
import materials from "@deeplogic/materials";
import React, { useLayoutEffect } from "react";
// 空调
import { handleSource } from "../../auto3d/handleSource"
import { source3 as source, deviceModelMap, links, global } from "../../data/data"

// 空压


const ContainerDemo = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  const startTime = performance.now()

  useLayoutEffect(() => {
    //  const json = lz.decompress(lz.decodeBase64(stateToLoad))
    // const startTime = performance.now()
    // 空调
    const result = handleSource(source, deviceModelMap, links, global, "HVAC")
    // const endTime = performance.now()
    // const renderTime = endTime - startTime
    // console.log(`JSON generator time: ${renderTime} ms`)
    // console.log("是不是走了热更新了123")
    // actions.deserialize({})
    // console.log("result====>", result, renderTime)

    // 空压
    // const result = handleSource(source, deviceModelMap, links, global, "HVAC")
    
    actions.deserialize(result)
    // window.location.reload()
  }, [])

  // useEffect(() => {
  //   const endTime = performance.now()
  //   const renderTime = endTime - startTime
  //   console.log(`JSON render time: ${renderTime} ms`, handleSource)
  // },[source])

  return <Frame />
}

export const Container = () => {
  return (
    <Editor resolver={{ ...materials }}>
      <ContainerDemo />
    </Editor>
  )
}
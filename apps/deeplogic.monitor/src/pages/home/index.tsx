import { Editor, Frame, useEditor } from "@craftjs/core"
import materials from "@deeplogic/materials"
import React, { useLayoutEffect } from "react"
import { source3 as source, deviceModelMap, links, global } from "../../data"

import handleSource from "../../auto3d/home/index"


const ContainerDemo = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  const startTime = performance.now()

  useLayoutEffect(() => {
    //  const json = lz.decompress(lz.decodeBase64(stateToLoad))
    // const startTime = performance.now()
    const result = handleSource(source, deviceModelMap, links, global)
    const endTime = performance.now()
    const renderTime = endTime - startTime
    // console.log(`JSON generator time: ${renderTime} ms`)
    // console.log("是不是走了热更新了123")
    // actions.deserialize({})
    console.log("result====>", result, renderTime)
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

export const Home = () => {
  return (
    <Editor resolver={{ ...materials }}>
      <ContainerDemo />
    </Editor>
  )
}

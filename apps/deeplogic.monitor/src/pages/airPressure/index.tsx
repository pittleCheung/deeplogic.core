import { Editor, Frame, useEditor } from "@craftjs/core"
import materials from "@deeplogic/materials"
import React, { useLayoutEffect, useEffect, useRef } from "react"
// 空调
import { handleSource } from "../../auto3d/airPressure/handleSource"
import {
  re,
  deviceModelMap,
  links,
  global,
} from "../../data/at"

// 空压

const ContainerDemo = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))
  const timer = useRef<any>({current:null})

  const startTime = performance.now()


  useLayoutEffect(() => {
    //  const json = lz.decompress(lz.decodeBase64(stateToLoad))
    // const startTime = performance.now()
    // 空压

    // const endTime = performance.now()
    // const renderTime = endTime - startTime
    // console.log(`JSON generator time: ${renderTime} ms`)
    // console.log("是不是走了热更新了123")
    // actions.deserialize({})
    // console.log("result====>", result, renderTime)

    // timer.current = setTimeout(() => {
    //   const item = Object.keys(re?.CAS_PLANTS || {})?.[0]
    //   const result = handleSource(
    //     re.CAS_PLANTS[item],
    //     deviceModelMap,
    //     links,
    //     global,
    //     re.CAS_PLANTS,
    //   )
    //   actions.deserialize(result)
    // }, 100)

    //  const item = Object.keys(re?.CAS_PLANTS || {})?.[0]
    //  const result = handleSource(
    //    re.CAS_PLANTS[item],
    //    deviceModelMap,
    //    links,
    //    global,
    //    re.CAS_PLANTS,
    //  )
    //  actions.deserialize(result)

    // window.location.reload()
    return () => {
      clearTimeout(timer.current)
    }
  }, [actions, re, deviceModelMap, links, global])


  useEffect(() => {
    const item = Object.keys(re?.CAS_PLANTS || {})?.[0]
    const result = handleSource(
      re.CAS_PLANTS[item],
      deviceModelMap,
      links,
      global,
      re.CAS_PLANTS,
    )
    actions.deserialize(result)
    // console.log("执行了多少次呢")
  }, [actions,re, deviceModelMap, links, global])




  


  // useEffect(() => {
  //   const endTime = performance.now()
  //   const renderTime = endTime - startTime
  //   console.log(`JSON render time: ${renderTime} ms`, handleSource)
  // },[source])

  return <Frame />
}

export const AirPressure = () => {
  console.log("result===>1")
  return (
    <Editor resolver={{ ...materials }} enabled={false}>
      <ContainerDemo />
    </Editor>
  )
}

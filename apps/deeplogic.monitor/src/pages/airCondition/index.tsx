import { Editor, Frame, useEditor } from "@craftjs/core";
import materials from "@deeplogic/materials";
import React, { useLayoutEffect } from "react";
// 空调
import { handleSource } from "../../auto3d/handleSource"
import {
  source as source,
  deviceModelMap,
  links,
  global,
} from "../../data/data"
import { source_re5 } from "../../data/datb"
import { nanoid } from "nanoid";
// 空调
const ContainerDemo = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  const startTime = performance.now()

  useLayoutEffect(() => {
    //  const json = lz.decompress(lz.decodeBase64(stateToLoad))
    // const startTime = performance.now()
    // 空调
    // 设备弹窗
    const deviceModelMap:any = {}
    const deviceNameMap = {
      CHLS: "制冷机",
      CHWPS: "冷冻泵",
      CWPS: "冷却泵",
      CTS: "冷却塔",
      DVS: "阀门",
    }
    const deviceNameMao = Object.keys(deviceNameMap)
    // const deviceName = ['制冷机', '冷冻泵', '冷却泵', '冷却塔', '阀门'];
    const deviceArr = []
    for (const item0 of deviceNameMao) {
      // 当前JSON中存在 deviceNameMao中的其中一个设备
        deviceModelMap[item0] = {}
        // 当前的deviceNameMao里面的每个设备的key的集合
        const deviceKeys = Object.keys(source[item0])
        // 遍历每一台设备 获取每一台设备的点表数据传入相应的json函数
        for (let i = 0; i < deviceKeys.length; i++) {
          const t:any = deviceKeys[i]
          const id = nanoid(22)
          const sour = source[t] // 每一台设备的属性(包含点表信息)
          // console.log(deviceName[n] + (i + 1) + '页面' + 'result: ', result);
          const mapname = item0 == "DVS" ? "VALVES" : item0
          deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id }
        }
    }

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
    <Editor resolver={{ ...materials }} enabled={false}>
      <ContainerDemo />
    </Editor>
  )
}
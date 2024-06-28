import headDefault, { bottomDefault, footDefault } from "./headDefault"
import {
  bottomid,
  box,
  boxid,
  chl_Out,
  chl_pump,
  chl_tower,
  ct_cw_pump,
  device,
  deviceMapIdsTool,
  footid,
  generateText,
  generateTypoText,
  headid,
  parentbox,
  pump_In,
  pump_chl,
  root,
  rootHeader,
  systemTempratureMap,
  tower_chl,
  valuesMapsHandle,
} from "./nodesDefault"
import { pageDefault, pageLayout } from "./pageDefault"
import { drawpointmap, rootPointMap } from "./pageNodeDefault"
import { deviceNumToole, deviceTranform, styleMap } from "./stylesDefault"

export const handleSource = (source, deviceModelMap, links, global) => {
  // test
  // console.log('source, deviceModelMap, links, global: ', source, deviceModelMap, links, global);
  let result = {
    ROOT: root,
    [parentbox]: pageDefault(parentbox, boxid, headid, footid, bottomid),
    ...headDefault(headid, parentbox, source, null, footid),
    ...pageLayout(parentbox, source),
    [boxid]: box,
    ...footDefault(footid, parentbox, source),
    ...bottomDefault(bottomid, parentbox, source, links),
  }
  result.ROOT.props["projId"] = global?.ProjectId
  result.ROOT.props["global"] = {
    ProjectName: global?.ProjectName,
    ProjectId: global?.ProjectId,
  }
  // const pointsObject = { ...rootPointMap(source), ...drawpointmap(), MODE_SYS: 0, HINT: '' }; // 点表映射
  const pointsObject = {
    ...rootPointMap(source),
    ...drawpointmap(source),
    [source["MODE_SYS"]?.NAME || "MODE_SYS"]: 0,
    [source["HINT"]?.NAME || "HINT"]: "",
    [source["LOAD"]?.NAME || "LOAD"]: "",
    [source["ONECLICK_START"]?.NAME || "ONECLICK_START"]: 0,
    [source["ONECLICK_STOP"]?.NAME || "ONECLICK_STOP"]: 0,
    T_OUTDOOR: 0,
    TW_OUTDOOR: 0,
    RH_OUTDOOR: 0,
  } // 点表映射
  const CHLS = Object.values(source.CHLS)
  const CHWPS = Object.values(source.CHWPS)
  const CWPS = Object.values(source.CWPS)
  const CTS = Object.values(source.CTS)
  const DVS = Object.values(source.DVS)
  systemTempratureMap({
    cwout: source.T_CW_S,
    cwin: source.T_CW_R,
    chwout: source.T_CHW_S,
    chwin: source.T_CHW_R,
  })
  // 根据设备数量 canvas区域宽高来计算横向和纵向的margin
  deviceNumToole({
    CHLS: CHLS.length,
    CHWPS: CHWPS.length,
    CWPS: CWPS.length,
    CTS: CTS.length,
  })

  // 将chls下的CHWPS里面的SUITE_IDS属性放入到connectCHWMap中 键值对 {CHLS.ID: [...CHWPS.SUITE_IDS]}
  // {oM6qEMxe50PY3Jv1JGxGVi: ['oM6qEMxe50PY3Jv1JGxGVi', 'jXGJPr5bbu8Pm1azp1qVLz', '3T4PM4a_xeb9HSfb6CA2vP', 'yxOjIyO9w9FfhRDEZmKWZC']}
  const connectCHWMap = {}

  const connectCWMap = {}
  const chlsArr = []

  // ['制冷机 CHLS', '冷冻泵 CHWPS', '冷却泵 CWPS', '冷却塔 CTS', '阀门 DVS'];
  CHLS.forEach((item, index) => {
    const { ID, CHWPS, CWPS, VALVES } = item
    CHWPS.forEach((t) => {
      const ids = t.SUITE_IDS.find((t1) => connectCHWMap[t1]?.length > 1)
      if (ids) {
        connectCHWMap[ids] = Array.from(
          new Set([...connectCHWMap[ids], ...t.SUITE_IDS]),
        )
      } else {
        connectCHWMap[ID] = Array.from(
          new Set([...(connectCHWMap[ID] || []), ...t.SUITE_IDS]),
        )
      }
    })
    CWPS.forEach((t) => {
      const ids = t.SUITE_IDS.find((t1) => connectCWMap[t1]?.length > 1)
      if (ids) {
        connectCWMap[ids] = Array.from(
          new Set([...connectCWMap[ids], ...t.SUITE_IDS]),
        )
      } else {
        connectCWMap[ID] = Array.from(
          new Set([...(connectCWMap[ID] || []), ...t.SUITE_IDS]),
        )
      }
    })
    valuesMapsHandle(ID, VALVES, deviceModelMap?.VALVES)
    const resultMap = device(
      "Chiller",
      item,
      pointsObject,
      deviceModelMap?.CHLS?.[item.ID],
    )
    deviceMapIdsTool(item.ID, resultMap.id, item)
    resultMap.props.style = {
      ...styleMap["CHLS"],
      ...deviceTranform(index, "CHLS"),
    }
    result[resultMap.id] = resultMap
    pointsObject[item.P.NAME] = 0
    pointsObject[item.I_PCT.NAME] = 0
    chlsArr.push(resultMap)
    // 计算x文字居中的偏移量 和 文字居中的位置
    const [xAxis, center] = calcAxis(resultMap, item.NAME)
    const { translateX, translateY } = generateTypoText({
      result,
      resultMap,
      deviceName: item.NAME,
      xAxis,
      yAxis: -10,
    })
    // 64为数码管的宽度 10和20为向左向右的偏移量
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.P,
      unit: "kW",
      percent: null,
      index: 1,
      type: "Chiller",
      translateX,
      translateY,
      yAxis: 30,
      xAxis: center - 64 - 10,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.I_PCT,
      unit: null,
      percent: true,
      index: 0,
      type: "Chiller",
      translateX,
      translateY,
      // yAxis: 60,
      yAxis: 30,
      xAxis: center + 20,
    })
  })

  CHLS.forEach((item, index) => {
    /**chl -out 1. 冷机右侧上连接出口 (冷机右侧上 四横线一竖线)*/
    chl_Out(
      result,
      index,
      index == chlsArr.length - 1,
      chlsArr[index]?.props.style,
      item,
      CHLS,
    )
  })

  // 冷冻水
  CHWPS.forEach((item, index) => {
    const resultMap = device(
      "Pump",
      item,
      pointsObject,
      deviceModelMap?.CHWPS?.[item.ID],
    )
    deviceMapIdsTool(item.ID, resultMap.id, item)
    // 计算和冷机之间的设备高度差 距离空压机2/3的位置上 - 上下两个横管的高度 + 垂直位移差
    const diff = ((styleMap.Acop.height - styleMap.CHWPS.height) / 3) * 2 - styleMap.h.height * 2 + 2
    resultMap.props.style = {
      ...styleMap["CHWPS"],
      ...deviceTranform(index, "CHWPS"),
      marginTop: diff,
    }
    result[resultMap.id] = resultMap
    pointsObject[item.P.NAME] = 0
    pointsObject[item.FREQ.NAME] = 0
    // 计算x文字居中的偏移量
    const [xAxis, center] = calcAxis(resultMap, item.NAME)
    const { translateX, translateY } = generateTypoText({
      result,
      resultMap,
      deviceName: item.NAME,
      xAxis,
      yAxis: diff,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.P,
      unit: "kW",
      percent: null,
      index: 0,
      type: "Pump",
      translateX,
      translateY,
      yAxis: 30,
      xAxis: center - 64 - 10,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.FREQ,
      unit: "Hz",
      percent: null,
      index: 1,
      type: "Pump",
      translateX,
      translateY,
      // yAxis: 60,
      yAxis: 30,
      xAxis: center + 20,
    })
  })

  // 冷却水
  CWPS.forEach((item, index) => {
    const resultMap = device(
      "Pump",
      item,
      pointsObject,
      deviceModelMap?.CWPS?.[item.ID],
    )
    deviceMapIdsTool(item.ID, resultMap.id, item)
    const diff = ((styleMap.Acop.height - styleMap.CHWPS.height) / 3) * 2 - styleMap.h.height * 2 + 2
    resultMap.props.style = {
      ...styleMap["CWPS"],
      ...deviceTranform(index, "CWPS"),
      marginTop: diff,
    }
    result[resultMap.id] = resultMap
    pointsObject[item.P.NAME] = 0
    pointsObject[item.FREQ.NAME] = 0
    // 计算x文字居中的偏移量
    const [xAxis, center] = calcAxis(resultMap, item.NAME)
    const { translateX, translateY } = generateTypoText({
      result,
      resultMap,
      deviceName: item.NAME,
      xAxis,
      yAxis: diff,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.P,
      unit: "kW",
      index: 0,
      type: "Pump",
      translateX,
      translateY,
      yAxis: 30,
      xAxis: center - 64 - 10,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.FREQ,
      unit: "Hz",
      percent: null,
      other: -30,
      index: 1,
      type: "Pump",
      translateX,
      translateY,
      // yAxis: 60,
      yAxis: 30,
      xAxis: center + 20,
    })
  })

  CTS.forEach((item, index) => {
    const resultMap = device(
      "Tower",
      item,
      pointsObject,
      deviceModelMap?.CTS?.[item.ID],
    )
    deviceMapIdsTool(item.ID, resultMap.id, item)
    valuesMapsHandle(item.ID, item.VALVES, deviceModelMap?.VALVES)
    resultMap.props.style = {
      ...styleMap["CTS"],
      ...deviceTranform(index, "CTS"),
    }
    result[resultMap.id] = resultMap
    pointsObject[item.P.NAME] = 0
    pointsObject[item.FREQ.NAME] = 0
    // 计算x文字居中的偏移量
    const [xAxis, center] = calcAxis(resultMap, item.NAME)
    const { translateX, translateY } = generateTypoText({
      result,
      resultMap,
      deviceName: item.NAME,
      xAxis,
      yAxis: 5,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.P,
      unit: "kW",
      percent: null,
      other: -15,
      index: 0,
      type: "Tower",
      translateX,
      translateY,
      yAxis: 25,
      xAxis: center - 64 - 10,
    })
    generateText({
      result: result,
      resultMap: resultMap,
      name: item.FREQ,
      unit: "Hz",
      percent: null,
      other: -10,
      index: 1,
      type: "Tower",
      translateX,
      translateY,
      // yAxis: 60,
      yAxis: 25,
      xAxis: center + 20,
    })
  })

  DVS.forEach((item) => {
    pointsObject[item.ONOFF.NAME] = 0
    pointsObject[item.FAULT.NAME] = 0
  })

  const connectCHW = Object.values(connectCHWMap) // 冷冻侧冷机总管
  const connectCW = Object.values(connectCWMap) // 冷却测冷机总管
  const connectCHWP = connectCHW.map((item) => {
    // 每一个总管对应的冷冻泵
    return Array.from(
      new Set(
        item
          .map((item0) => source.CHLS[item0]?.CHWPS?.map((t) => t.ID))
          .flat(2),
      ),
    )
  })
  const connectCWP = connectCW.map((item) => {
    // 每一个总管对应的冷却塔
    return Array.from(
      new Set(
        item.map((item0) => source.CHLS[item0]?.CWPS?.map((t) => t.ID)).flat(2),
      ),
    )
  })
  const connectCT = connectCW.map((item) => {
    // 每一个总管对应的冷却塔
    return Array.from(
      new Set(
        item.map((item0) => source.CHLS[item0]?.CTS?.map((t) => t.ID)).flat(2),
      ),
    )
  })

  /** chl - pump 2. 冷机右侧下方 连接水泵(冷机右侧下 四横线一竖线)*/
  connectCHW.forEach((item, index) => {
    chl_pump(item, result, "chw", "CHLS", "2", connectCHWP[index], index)
    //chwTransform(i);
  })

  // 3. 最后一个水泵的右侧(右侧水泵入水口 即最后一个水泵右侧四横线一竖线)
  pump_In(CHWPS, result)

  /** 冷却侧 chl - pump  4. 冷机左侧上方连接冷却塔(冷机左上四横线一竖线)*/
  connectCW.forEach((item, index) => {
    chl_tower(item, result, index, connectCT[index])
  })

  /**
   * 冷却塔与冷却泵与冷机的连接方式是一样的
   */
  /** tower-chl tower-pump   5. 冷却塔左侧连接冷机 右侧连接水泵(冷却塔左三横线 右四横线一竖线)*/
  connectCT.forEach((item, index) => {
    const chlarr = Array.from(
      new Set(item.map((item0) => source.CTS[item0]?.SUITE_IDS).flat(2)),
    ).sort() //当前冷却塔组关联的冷机
    connectCW.forEach((t0, i0) => {
      if ([...t0].sort().toString() === chlarr.toString()) {
        // 冷却塔右四横线一竖线
        // chl_pump(item, result, "chw", "CTS", "3", connectCWP[index], index) //冷却泵关联冷却塔 冷却塔组的关联冷机===冷却泵组关联的冷机
        ct_cw_pump(item, result, "chw", "CTS", "3", connectCWP[index], index) //冷却泵关联冷却塔 冷却塔组的关联冷机===冷却泵组关联的冷机
        // 冷却塔左三横线or水泵左三横线情况7
        // 对应水泵是
        pump_chl(
          connectCT[i0],
          result,
          "chw",
          connectCW[index][connectCW[index].length - 1],
          "tower",
          "1",
          index,
        )
      }
    })
  })

  /** 冷却侧 chl - pump 6. 冷机左侧下方三横线一竖线*/
  connectCW.forEach((item, index) => {
    chl_pump(item, result, "cw", "CHLS", "3", connectCWP[index], index)
    // chl_tower(item, result, index, connectCT[index]);
  })

  /**pump - chl
   * 每组第一个冷机的位置就是总管的位置，
   * 所有水泵的管子最终流向总管
   */
  // 7. 最后一个冷冻水泵的左侧连接冷机 (水泵左侧连接冷机 即最后一个水泵左侧三横线一竖线)
  connectCHWP.forEach((item, index) => {
    pump_chl(
      item,
      result,
      "chw",
      connectCHW[index][connectCHW[index].length - 1],
      null,
      "2",
      index,
    ) // 冷冻水回水
  })

  // /** 冷却侧 pump - chl 8. 第一个水泵左侧三横一竖连接到冷却塔 和 右侧三横一竖连接到冷机*/
  connectCWP.forEach((item, index) => {
    pump_chl(
      item,
      result,
      "chw",
      connectCT[index][connectCT[index].length - 1],
      "tower_pump",
      "3",
      index,
    )
    pump_chl(
      item,
      result,
      "cw",
      connectCW[index][connectCW[index].length - 1],
      null,
      "3",
      index,
    )
  })

  // 9. 冷却塔左侧一条竖线连接到冷机
  connectCT.forEach((item, index) => {
    tower_chl(item, result, index)
  })

  const boxidChild = Object.values(result).filter((t) => t?.parent === boxid)
  // console.log(boxidChild, "======>boxidChild")
  result["ROOT"].props.points = pointsObject
  result[boxid].nodes = boxidChild?.map((t) => t.id)
  const translateXCollect = boxidChild?.map((t) => t.props.style.translateX)
  const translateYCollect = boxidChild?.map((t) => t.props.style.translateY)
  result[boxid].props.style.contentMaxX = Math.max(...translateXCollect)
  result[boxid].props.style.contentMinX = Math.min(...translateXCollect)
  result[boxid].props.style.contentMinY = Math.min(...translateYCollect)
  result[boxid].props.style.contentMaxY = Math.max(...translateYCollect)
  
  result = {
    ...result,
    ...rootHeader,
  }
  // console.log('pointsObject', pointsObject)
  // console.log('result', result, boxid)
  // console.log('result: ', result);
  return replace2Gif(result)
}

function replace2Gif(result) {
  const cmpCollect = {
    Acop: 1,
    AHU: 1,
    CentAcop: 1,
    Chiller: 1,
    DesDryer: 1,
    Pump: 1,
    RefDryer: 1,
    Tank: 1,
    Tower: 1,
    Valve: 1,
    WetTank: 1,
  }
  for (let cmp in result) {
    const item = result[cmp]
    const resolvedName = item.type.resolvedName
    if (cmpCollect[resolvedName]) {
      item.type.resolvedName = resolvedName + "ImgGif"
    }
  }
  return result
}

/**
 *
 * @param {*} deviceName 设备文字
 * @param {*} font 根据需要设置字体大小和类型
 * @returns
 */
const calcAxis = (resultMap, deviceName, font = "12px Arial") => {
  const width = getTextWidth(deviceName, font)
  // 文字偏移量
  const xAxis = (resultMap.props.style.width - width) / 2
  // 文字中心偏移量
  const center = width / 2
  // console.log('calcAxis=======>', resultMap.props.style.width, width);
  return [xAxis, center]
}

function getTextWidth(text, font) {
  // 创建一个canvas元素用于测量文字宽度
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")

  // 设置与目标元素相同的字体
  context.font =
    font || getComputedStyle(document.body).getPropertyValue("font")

  // 测量文本
  const metrics = context.measureText(text)

  // 返回文本宽度
  return metrics.width
}

/**
 * 冷机-冷冻泵 冷机-末端
 *
 * 冷冻水回水的情况：
 * 要判断是否用同一个总管，
 * 生成冷机时，自动生成一个横管，一个转接头，
 * 第一台冷机和最后一台冷机单独处理。
 * 第一台冷机的转接头用弯头转接头，最后一台冷机的转接头用90度的三头转接头，并且生成的管子也变为两个横管
 *
 * 总管逻辑：
 * 当next冷机是记录里的冷机，那么用同一个总管，自动生成一个竖管。
 * 如果next冷机的id是从来没有被记录的，那么单独用一个总管，就不生成竖管。并且cur冷机的转接头改用90度三头转接头，并且再生成一个横管。
 * 冷冻水出水的情况：
 * 生成冷机时，自动生成一个竖管，一个横贯，一个转接头
 * 最后一台冷机的转接头用90度的弯头
 *
 *
 */

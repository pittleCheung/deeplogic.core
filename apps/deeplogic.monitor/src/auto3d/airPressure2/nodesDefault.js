/**
 * 空压
 */
import { device, pipe, text, boxid, statusText } from "../nodesDefault"
import { styleMap } from "../stylesDefault"
import { onPoints } from "./handleSource"
import { calcAxis } from "../util"
import { nanoid } from "nanoid"

// 竖管高度
export const pipevHeight = 150
// 横管宽度
export const pipehWidth = 150

// 计算 X轴和Y轴之间的间距
// X轴最小间距为横管宽度的倍
// export let acopXGap = styleMap.h.width * 1.0
// Y轴最小间距为80  // todo: 最小80 最大160
// export let acopYGap = 80

export const pGap = {
  acopXGap: styleMap.h.width * 1.3,
  acopYGap: 80,
}

/**
 * 最大高度
 */

// export const getMaxHieght = (ACOPS, ARWTS, RDRYS, DDRYS, ARDTS) => {
//     return Math.max(
//         Object.keys(ACOPS).length * (styleMap.Acop.height + 80),
//         Object.keys(ARWTS).length * (styleMap.WetTank.height + 10 + 80),
//         Object.keys(RDRYS).length * (styleMap.RefDryer.height + 10 + 80),
//         Object.keys(DDRYS).length * (styleMap.DesDryer.height + 10 + 80),
//         Object.keys(ARDTS).length * (styleMap.Tank.height + 10 + 80)
//     )
// }
export const getMaxHieght = (ACOPS, ARWTS, RDRYS, DDRYS, ARDTS) => {
  return Math.max(
    Object.keys(ACOPS).length * styleMap.Acop.height,
    Object.keys(ARWTS).length * styleMap.WetTank.height,
    Object.keys(RDRYS).length * styleMap.RefDryer.height,
    Object.keys(DDRYS).length * styleMap.DesDryer.height,
    Object.keys(ARDTS).length * styleMap.Tank.height,
  )
}

/**
 * 设备位置
 */
export const position = ({ index, initTop, prevX, laststyle }) => {
  return {
    // translateY: (index + 1) * (styleMap.Acop.height + 80) + initTop,
    // 当前设备的垂直位移 = 当前设备索引 * (按照Acop的高度算 + 上下设备之间的间隙) + 初始化距离顶部的高度
    translateY: index * (styleMap.Acop.height + pGap.acopYGap) + initTop,
    // translateX: (laststyle ? (prevX + styleMap.h.width) : 160) + (laststyle ? laststyle.props.style.width: 0)
    // 当前设备的水平位移 = 前一个设备的宽度+前一个设备的位移+ 距离前一个设备的位移
    // 80为默认的初始化的位移
    translateX: laststyle
      ? prevX + laststyle.props.style.width + pGap.acopXGap
      : 80,
    // translateX: (laststyle ? (prevX + styleMap.h.width) : 100) + (laststyle ? laststyle.props.style.width + 80: 0)
  }
}

// const deviceMap = {
//     'D0C1A': ['Acop', null, ['PR_DISCHARGE', 'Mpa'], ['T_DISCHARGE', '℃'],{
//         width:"104px",
//         height:"120px",
//     }],
//     // 'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
//     'D0C1D': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}],
//     'D0C1B': ['RefDryer', 'RDRYS',[],[], {width:"95px",height:"100px"}],
//     'D0C1C': ['DesDryer', 'DDRYS',[],[], {width:"120px",height:"100px"}],
//     'D0C1E': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}]
// }

const deviceMap = {
  D0C1A: [
    "Acop",
    null,
    ["PR_DISCHARGE", "Mpa"],
    ["T_DISCHARGE", "℃"],
    {
      // 空压机
      width: "104px",
      height: "120px",
    },
  ],
  // 'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
  D0C1D: ["Tank", null, ["PR", "Mpa"], [], { width: "78px", height: "120px" }],
  D0C1B: [
    "RefDryer",
    "RDRYS",
    ["T_DEW", "℃"],
    [],
    { width: "95px", height: "100px" },
  ], // 冷干机
  D0C1C: [
    "DesDryer",
    "DDRYS",
    ["T_DEW", "℃"],
    [],
    { width: "120px", height: "100px" },
  ], // 吸干机
  D0C1E: ["Tank", null, ["PR", "Mpa"], [], { width: "78px", height: "120px" }],
  all: [
    ["PR_PLANT", "Mpa"],
    ["FLOW_PLANT_AIR", "Nm³/min"],
  ],
}
// const deviceMap = {
//   D0C1A: ["AcopImgGif", null, ["PR_DISCHARGE", "Mpa"], ["T_DISCHARGE", "℃"]],
//   // 'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
//   D0C1D: ["TankImgGif", null, ["PR", "Mpa"]],
//   D0C1B: ["RefDryerImgGif", "RDRYS"],
//   D0C1C: ["DesDryerImgGif", "DDRYS"],
//   D0C1E: ["TankImgGif", null, ["PR", "Mpa"]],
// }
/**
 * 保留一位小数
 */
const fix = (num) => {
  return Number(Number(num).toFixed(1))
}
const childMap = new Map()
/**
 *
 * @param {*} arr 当前的设备的NEXT_NODE
 * @param {*} result json数据
 * @param {*} tag  标记管子是否在左侧还是右侧
 * @param {*} prevX    为当前设备X轴的的位移
 * @param {*} initTop  初始化计算的距离顶部的高度
 * @param {*} lastdevice  上一个设备的json
 * @param {*} idsList  当前CAS_PLANTS下所有的相关设备的数据
 * @param {*} deviceModelMap  当前所有相关设备的id
 * @param {*} lastLen       上一个设备的len长度
 * @param {*} pointsObject  点表
 * @returns
 */
export const helpFunction = ({
  arr,
  result,
  tag,
  prevX,
  initTop,
  lastdevice,
  idsList,
  deviceModelMap,
  lastLen,
  pointsObject,
}) => {
  // 都是循环里面有条件的递归 下级如何没有设备 结束递归遍历
  if (!arr || !arr.length) return
  let len = arr.length - 1
  let str = ""
  // 存的格式是{key1.1:key2.1,key1.2:key:2.2}
  // 表示key2下一层的设备id和当前层设备key1的id的映射关系
  const obj = {}

  // 将湿罐 和 后面串联的冷干机一一对应
  arr.forEach((t0) => {
    // 将NEXT_NODE的ID集合作为key 当前的设备的每个[ID]为value
    const curName = JSON.stringify(t0?.NEXT_NODE?.map((t) => t?.ID))
    if (!obj[curName]) {
      obj[curName] = [t0.ID]
    } else {
      obj[curName].push(t0.ID)
    }
    if (idsList[t0.ID]?.ONOFF) {
      pointsObject[idsList[t0.ID].ONOFF.NAME] = 0
      str += `${"${" + idsList[t0.ID].ONOFF.NAME + "}"}==1&&`
    }
  })

  // console.log("position====>0", Object.values(obj), obj, arr)

  // 画设备逻辑
  // 从湿罐开始循环 里面有条件调用自身helpFunction
  // 串联逻辑 只有一层湿罐循环 每一层循环 画一排 湿罐 冷干机 吸干机  但是第一层循环将所有的储气干罐画好,以后每层循环都是
  // 并联逻辑 第一层循环 循环湿罐0 进入冷干机0循环 进入吸干机0循环 ,完成储气干罐的循环 递归入栈
  // 第二层吸干机循环(吸干机1 吸干机2) 冷干机循环冷干机(冷干机1 冷干机2) 湿罐循环(湿罐1 湿罐2) 递归退栈

  // 遍历当前层的id
  Object.values(obj).forEach((t, i) => {
    // 湿罐串联 t => ['Ts0opsFugDQPtmAVBwq0ng']
    // 干罐并联 t => ['ReX4jaC8HxW7OMSlM3jFal', 'n4GwOLBgJdMert1OCprPOL', '95ktirI2q4TfxYpVOZO12H']
    if (Array.isArray(t)) {
      t.forEach((item, index) => {
        // 将点表的数据合并到current中
        const current = { ...idsList[item], ...arr.find((t) => t?.ID === item) }
        const deviceItem = device(
          deviceMap[current.TYPE][0],
          current,
          pointsObject,
          deviceModelMap?.[deviceMap[current.TYPE]?.[1]]?.[item],
          // ...[deviceMap[current.TYPE]?.[4]]
        ) // 创建设备
        result[deviceItem.id] = deviceItem
        result[deviceItem.id].props.style = {
          ...styleMap[deviceMap[current.TYPE][0]],
          ...position({
            index: t.length > 1 ? index : i, // t.length > 1 表示的是所有的干罐并联的情况, index表示干罐的索引
            initTop,
            prevX,
            laststyle: lastdevice,
          }),
        }
        const newprevX = result[deviceItem.id].props.style.translateX
        const target = result[deviceItem.id].props.style
        const nameText = text()
        nameText.props.value = current.NAME
        const [xAxis, center] = calcAxis(deviceItem, current.NAME)
        nameText.props.style = {
          ...nameText.props.style,
          translateX: target.translateX + xAxis, // 这里的xAxis为偏移量,只有一个数码管的情况需要添加偏移量
          translateY: target.translateY + target.height + 10,
        }
        result[nameText.id] = nameText
        deviceMap[current.TYPE].slice(2).forEach((textItem, textIndex) => {
          if (!textItem || !Array.isArray(textItem) || !textItem?.length) return
          pointsObject[current[textItem[0]].NAME] = 0
          generateText({
            result,
            current,
            item: textItem,
            index: textIndex,
            parentStyle: nameText.props.style,
            xAxis: center + 64 - 10,
          })
        })

        // 左侧管
        const pipeh1 = pipe("h", "0")
        pipeh1.props.waterstyle = "1"
        pipeh1.props.style = { ...styleMap["h"], fill: "#407FCB" }
        // pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.33)
        // 调整设备左侧管道宽度 默认调整为.5个管子宽度
        pipeh1.props.style.width = fix(pipeh1.props.style.width / 2)
        pipeh1.props.style.translateX =
          target.translateX - pipeh1.props.style.width
        // 直接利用空压机的高度算
        pipeh1.props.style.translateY =
          target.translateY + styleMap.Acop.height * 0.65
        // 宽度添加10px 向左添加10px偏移量
        pipeh1.props.style.width = pipeh1.props.style.width + 20
        pipeh1.props.style.zIndex = -1

        if (current?.ONOFF) {
          // 走到这里说明是冷干机和吸干机
          pipeh1.props.status = {
            bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
            type: "expressions",
            point: [current.ONOFF.NAME],
          }
          // console.log("current=====>", current.NAME, pipeh1.props.status)
        } else {
          // 如果当前Node没有ONOFF属性(湿罐干罐目前没有) 取决于冷干机或吸干机的状态
          // 储气湿罐#1 preStates = ${ACOP1#ONOFF}==1||${ACOP2#ONOFF}==1||${ACOP3#ONOFF}==1||
          if (current?.NEXT_NODE?.length === 1) {
            const curr = current.NEXT_NODE?.[0]
            
            pipeh1.props.status = {
              bind: `(${current?.preStates.slice(0, -2)})&&${"${" + idsList[curr.ID].ONOFF.NAME + "}"}==1`,
              type: "expressions",
              point: onPoints(`(${current?.preStates.slice(0, -2)})&&${"${" + idsList[curr.ID].ONOFF.NAME + "}"}==1`),
            }
          } else {
            // 并联
            pipeh1.props.status = {
              bind: current?.preStates?.slice(0, -2),
              type: "expressions",
              point: onPoints(current?.preStates?.slice(0, -2)),
            }
            // console.log("current====>", current.NAME, pipeh1.props.status)
            // todo...
            //  if(current.NEXT_NODE.length > 1){}
          }
        }

        // 储气湿罐 冷干机 吸干机 储气干罐 左侧横管
        result[pipeh1.id] = pipeh1

        const pipeh2 = pipe("h", "0")


        // 并联 最后一个储气干罐左侧 最后一个冷干机左侧 和 最后一个吸干机左侧横管
        if (
          tag === "R" &&   // 表示是并联
          // index === t.length - 1 &&
          current.NEXT_NODE?.length > 1 // 最后一个储气干罐不走这里
        ) {
          if (current.NO - 1 === current.LEN >> 1) {
            // 生成总管横管
            pipeh2.props.waterstyle = "1"
            pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
            // 连接处的宽度等于间隙宽度 - 管子两侧宽度(现在每侧默认是.5个管子宽度)
            pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
            // pipeh2.props.style.translateX = 当前设备的位移+设备宽度+右侧管子宽度(目前和左侧管子宽度一样所以这里按照左侧管子算)
            pipeh2.props.style.translateX =
              target.translateX + target.width + pipeh1.props.style.width - 20
            pipeh2.props.style.translateY = pipeh1.props.style.translateY
            if (current.LEN % 2 === 0) {
              pipeh2.props.style.translateY = pipeh2.props.style.translateY - (pGap.acopYGap + styleMap.Acop.height) / 2
            }
            pipeh2.props.status = {
              bind: current?.prePipeStates?.slice(0, -2),
              type: "expressions",
              point: onPoints(current?.prePipeStates?.slice(0, -2)),
            }
            result[pipeh2.id] = pipeh2
          }
        }

        // 串联 会走这里 因为只有一个t.length === 1
        if (
          // 纯串联的模式
          (tag === "L" 
          && lastLen === 1 
          && index === t.length - 1 
          // && t.length === lastLen// 串联储气干罐不走这里
          ) 
          || (tag === "L" && t.length === 1)  // 存在湿罐并联串联吸干机
        ) {
          // 生成总管
          pipeh2.props.waterstyle = "1"
          pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
          // 连接处的宽度等于间隙宽度 - 管子两侧宽度(现在每侧默认是.5个管子宽度)
          pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
          // 连接处的位移= 左侧管子的位移 - 当前管子的宽度
          pipeh2.props.style.translateX =
            pipeh1.props.style.translateX - pipeh2.props.style.width
          // pipeh2.props.style.translateX = 当前设备的位移+设备宽度+右侧管子宽度(目前和左侧管子宽度一样所以这里按照左侧管子算)
          pipeh2.props.style.translateY = pipeh1.props.style.translateY
          if (current?.ONOFF) {
            pipeh2.props.status = {
              bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
              type: "expressions",
              point: [current.ONOFF.NAME],
            }
          } else {
            pipeh2.props.status = {
              bind: current?.preStates?.slice(0, -2),
              type: "expressions",
              point: onPoints(current?.preStates?.slice(0, -2)),
            }
          }
          result[pipeh2.id] = pipeh2

          // 串联 最后一个吸干机右侧添加 横管总管
          if (
            current.NO - 1 === current.LEN >> 1 && t.length < current.NEXT_NODE?.length
          ) {
            // 横管总管
            const pipeh3 = pipe("h", "0")
            pipeh3.props.waterstyle = "1"
            pipeh3.props.style = { ...styleMap["h"], fill: "#407FCB" }
            pipeh3.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
            // 这里pipeh2.props.style.width 是左侧管的宽度(和右侧管的宽度是一样的) 20是pipeh2管子的向左的偏移量
            pipeh3.props.style.translateX = target.translateX + target.width + pipeh2.props.style.width + 20 +styleMap["v"].width * 2
            pipeh3.props.style.translateY = pipeh2.props.style.translateY
            if (current.LEN % 2 === 0) {
              pipeh3.props.style.translateY = pipeh2.props.style.translateY - (pGap.acopYGap + styleMap.Acop.height) / 2
            }
            if (current?.prePipeStates) {
              pipeh3.props.status = {
                bind: current?.prePipeStates?.slice(0, -2),
                type: "expressions",
                point: onPoints(current?.prePipeStates?.slice(0, -2)),
              }
            }
            result[pipeh3.id] = pipeh3
            // console.log("current=====>", current.NAME, pipeh3.props.status)
          }
        }

        // 串联储气湿罐左侧竖管 
        if (lastLen > 1 && current.NEXT_NODE?.length === 1) {
          let pipev0
          if (arr.length % 2 === 0) {
            // 偶数
            if (i === len >> 1) {
              pipev0 = pipe("v", "1")
              pipev0.props.waterstyle = "1"
              pipev0.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev0.props.style.height =
                (styleMap.Acop.height + pGap.acopYGap) / 2
              pipev0.props.style.translateY = pipeh1.props.style.translateY
            } else if (i === (len >> 1) + 1) {
              pipev0 = pipe("v", "0")
              pipev0.props.waterstyle = "1"
              pipev0.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev0.props.style.height =
                (styleMap.Acop.height + pGap.acopYGap) / 2
              pipev0.props.style.translateY =
                pipeh1.props.style.translateY - pipev0.props.style.height
            } else {
              pipev0 = pipe("v", i >= len >> 1 ? "0" : "1")
              pipev0.props.waterstyle = "1"
              pipev0.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev0.props.style.height = styleMap.Acop.height + pGap.acopYGap
              pipev0.props.style.translateY = pipeh1.props.style.translateY
              if (i >= len >> 1) {
                pipev0.props.style.translateY =
                  pipev0.props.style.translateY - pipev0.props.style.height
              }
            }
            pipev0.props.style.translateX = pipeh1.props.style.translateX
          } else {
            // 奇数
            if (i !== len) {
              // 最后一根线不需要展示
              pipev0 = pipe("v", i >= len >> 1 ? "0" : "1")
              pipev0.props.waterstyle = "1"
              pipev0.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev0.props.style.height = styleMap.Acop.height + pGap.acopYGap
              pipev0.props.style.translateX = pipeh1.props.style.translateX
              pipev0.props.style.translateY = pipeh1.props.style.translateY
            }
          }
          if (pipev0) {
            // pipev0 说明不是最后一根储气湿罐竖管(奇数情况下最后一根竖管是隐藏的)
            // 串联
            const curr = current.NEXT_NODE?.[0]
            const nextExp = idsList[curr.ID].preStates.slice(0,-2)
            pipev0.props.status = {
              bind: `(${current?.preStates.slice(0, -2)})&&(${nextExp})`,
              type: "expressions",
              point: onPoints(`(${current?.preStates.slice(0, -2)})&&(${nextExp})`),
            }
            result[pipev0.id] = pipev0
          }
        }

        // 并联储气干罐 冷干机 吸干机左侧竖管
        if (t.length > 1) {
          let pipev1
          if (current.LEN % 2 === 0) {
            // 偶数
            let i = current.NO - 1
            let len = current.LEN - 1
            if (i === len >> 1) {
              pipev1 = pipe("v", "1")
              pipev1.props.waterstyle = "1"
              pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev1.props.style.height =
                (styleMap.Acop.height + pGap.acopYGap) / 2
              pipev1.props.style.translateY = pipeh1.props.style.translateY
            } else if (i === (len >> 1) + 1) {
              pipev1 = pipe("v", "0")
              pipev1.props.waterstyle = "1"
              pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev1.props.style.height =
                (styleMap.Acop.height + pGap.acopYGap) / 2
              pipev1.props.style.translateY =
                pipeh1.props.style.translateY - pipev1.props.style.height
            } else {
              pipev1 = pipe("v", i >= len >> 1 ? "0" : "1")
              pipev1.props.waterstyle = "1"
              pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev1.props.style.height = styleMap.Acop.height + pGap.acopYGap
              pipev1.props.style.translateY = pipeh1.props.style.translateY
              if (i >= len >> 1) {
                pipev1.props.style.translateY =
                  pipev1.props.style.translateY - pipev1.props.style.height
              }
            }
            pipev1.props.style.translateX = pipeh1.props.style.translateX
          } else {
            // 奇数
            if (current.NO !== current.LEN) {
              pipev1 = pipe(
                "v",
                current.NO - 1 >= (current.LEN - 1) >> 1 ? "0" : "1",
              )
              pipev1.props.waterstyle = "1"
              pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
              // pipev1.props.style.height = vheight
              pipev1.props.style.height = styleMap.Acop.height + pGap.acopYGap
              pipev1.props.style.translateX = pipeh1.props.style.translateX
              pipev1.props.style.translateY = pipeh1.props.style.translateY
            }
          }
          if (pipev1) {
             pipev1.props.status = {
               bind: current?.preStates?.slice(0, -2),
               type: "expressions",
               point: onPoints(current?.preStates?.slice(0, -2)),
             }
            result[pipev1.id] = pipev1
            //  console.log("current======>", current.NAME, pipev1.props.status)
          }
        }


        let newtag = "R" // 并联 L为串联
        const curlen = current.LEN || 0
        const nextlen = arr?.[0]?.NEXT_NODE?.length
        if (
          i == 0 
          &&  (arr?.[0]?.NEXT_NODE?.length > 1 || t.length > 1)// 下一个节点的数据要超过1 说明并联 或者 当前节点数量大于1也是属于并联
          &&  arr?.[0]?.NEXT_NODE?.some((t) => !childMap.get(t.ID)) // 串联的情况下并联储气干罐要特殊处理只能进一次,第二轮储气湿罐的循环就不走到这里面来了
        ) {
          // 最后一个储气干罐 和 并联的情况
          // if (arr.length >= current?.NEXT_NODE.length) {
          //   newtag = "R"
          // }
          const obj = []
          arr?.[0]?.NEXT_NODE.map((t, i0) => {
            childMap.set(t.ID, true)
            obj.push({
              ...t,
              LEN: Object.values(idsList).filter((t0) => t0.TYPE === t.TYPE)
                .length,
              isMin: i0 > (arr?.[0]?.NEXT_NODE.length - 1) >> 1 ? "donw" : "up",
            })
          })
          if (t.length > 1 && arr?.[0]?.NEXT_NODE?.length === 1 && index !== t.length - 1) {
            // 储气湿罐多个并联 后面串联一个冷干机 或者吸干机的情况
          }else{   
             helpFunction({
               arr: obj,
               result,
               tag: newtag,
               prevX: newprevX,
               initTop:initTop +(curlen - nextlen) *(styleMap.Acop.height + pGap.acopYGap) * 0.5,
               lastdevice: result[deviceItem.id],
               idsList,
               deviceModelMap,
               lastLen: t.length,
               pointsObject,
             })
          }
        } else if (arr?.[i]?.NEXT_NODE?.length == 1) {
          // 储气湿罐 和 冷干机 串联(并联不会走这里)
          const obj = []
          arr?.[i]?.NEXT_NODE.forEach((t, i0) => {
            obj.push({
              ...t,
              LEN: Object.values(idsList).filter((t0) => t0.TYPE === t.TYPE)
                .length,
              isMin: i0 > (arr?.[i]?.NEXT_NODE.length - 1) >> 1 ? "donw" : "up",
            })
          })
          let targetInitTop;
          // 串联上一个设备数量大于下一个设备数量
          if (t.length > nextlen) {
            // 储气湿罐多个并联 后面串联一个冷干机 或者吸干机的情况
            targetInitTop = initTop + (curlen - nextlen) *(styleMap.Acop.height + pGap.acopYGap) * 0.5
          } else {
            targetInitTop = initTop + i * (styleMap.Acop.height + pGap.acopYGap)
          }
          // const targetInitTop = initTop + i * (styleMap.Acop.height + pGap.acopYGap);
          // helpFunction({
          //   arr: obj,
          //   result,
          //   tag: "L",
          //   prevX: newprevX,
          //   initTop:targetInitTop,
          //   // initTop:initTop + i * (styleMap.Acop.height + pGap.acopYGap),
          //   // initTop:initTop +(curlen - nextlen) *(styleMap.Acop.height + pGap.acopYGap) * 0.5,
          //   lastdevice: result[deviceItem.id],
          //   idsList,
          //   deviceModelMap,
          //   lastLen: t.length,
          //   pointsObject,
          // })
          if (
            t.length > 1 &&
            arr?.[0]?.NEXT_NODE?.length === 1 &&
            index !== t.length - 1
          ) {
            // 储气湿罐多个并联 后面串联一个冷干机 或者吸干机的情况
          } else {
            helpFunction({
              arr: obj,
              result,
              tag: "L",
              prevX: newprevX,
              initTop: targetInitTop,
              // initTop:initTop + i * (styleMap.Acop.height + pGap.acopYGap),
              // initTop:initTop +(curlen - nextlen) *(styleMap.Acop.height + pGap.acopYGap) * 0.5,
              lastdevice: result[deviceItem.id],
              idsList,
              deviceModelMap,
              lastLen: t.length,
              pointsObject,
            })
          }
        } else {
          
        }

        //  右侧管
        if (current.TYPE) {
          const pipehr1 = pipe("h", "0")
          pipehr1.props.waterstyle = "1"
          pipehr1.props.style = { ...styleMap["h"], fill: "#407FCB" }
          // pipehr1.props.style.width = fix(pipehr1.props.style.width * 0.33);
          // 调整设备右侧管道宽度 默认调整为.5个管子宽度
          pipehr1.props.style.width = fix(pipehr1.props.style.width / 2)
          pipehr1.props.style.translateX = target.translateX + target.width
          // 1. 利用 设备之间的高度差距算
          // pipehr1.props.style.translateY =
          // target.translateY + target.height * 0.65 + 10 * 0.65
          // 2. 管子的高度直接利用空压机的高度*.65来算
          pipehr1.props.style.translateY =
            target.translateY + styleMap.Acop.height * 0.65

          // 宽度添加20px 向左添加20px偏移量
          pipehr1.props.style.width = pipehr1.props.style.width + 20
          pipehr1.props.style.translateX = pipehr1.props.style.translateX - 20
          pipehr1.props.style.zIndex = -1

          if (current?.ONOFF) {
            // 吸干机右侧情况
            pipehr1.props.status = {
              bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
              type: "expressions",
              point: [current.ONOFF.NAME],
            }
            // 冷干机右侧为吸干机情况
            const nextId = current.NEXT_NODE[0].ID
            if (current?.NEXT_NODE?.length === 1 && idsList[nextId].ONOFF) {
              pipehr1.props.status = {
                bind: `${"${" + current.ONOFF.NAME + "}"}==1&&${"${" + idsList[nextId].ONOFF.NAME + "}"}==1`,
                type: "expressions",
                point: [current.ONOFF.NAME, idsList[nextId].ONOFF.NAME],
              }
            }
          } else {
            if (current.NEXT_NODE?.length === 1) {
              const next = current.NEXT_NODE[0]
              pipehr1.props.status = {
                bind: `(${current?.preStates.slice(0, -2)})&&${"${" + idsList[next.ID].ONOFF.NAME + "}"}==1`,
                type: "expressions",
                point: onPoints(
                  `(${current?.preStates.slice(0, -2)})&&${"${" + idsList[next.ID].ONOFF.NAME + "}"}==1`,
                ),
              }
            } else {
              // 并联
              pipehr1.props.status = {
                bind: current?.preStates?.slice(0, -2),
                type: "expressions",
                point: onPoints(current?.preStates?.slice(0, -2)),
              }
              // todo...
              //  if(current.NEXT_NODE?.length > 1){}
            }
          }

          // 储气湿罐 冷干机 吸干机 储气干罐 右侧横管
          result[pipehr1.id] = pipehr1

          const rX = pipehr1.props.style.translateX + pipehr1.props.style.width

          // 并联 吸干机 冷干机 储气湿罐 右边竖管 以及  串联 吸干机右边竖管
          // t.length > 1为考虑两储气湿罐 后面一台冷干机或吸干机
          if (arr?.[i]?.NEXT_NODE?.length > 1 || t.length > 1) {
            // 这里使用current.NO current.LEN代替 i 和 len
            let pipev1
            if (current.LEN % 2 === 0) {
              // 偶数
              let i = current.NO - 1
              let len = current.LEN - 1
              if (i === len >> 1) {
                pipev1 = pipe("v", "0")
                pipev1.props.waterstyle = "1"
                pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
                pipev1.props.style.height =
                  (styleMap.Acop.height + pGap.acopYGap + styleMap.h.height) / 2
                pipev1.props.style.translateX = rX
                pipev1.props.style.translateY = pipehr1.props.style.translateY
              } else if (i === (len >> 1) + 1) {
                pipev1 = pipe("v", "1")
                pipev1.props.waterstyle = "1"
                pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
                pipev1.props.style.height =
                  (styleMap.Acop.height + pGap.acopYGap + styleMap.h.height) / 2
                pipev1.props.style.translateX = rX
                pipev1.props.style.translateY =
                  pipehr1.props.style.translateY -
                  pipev1.props.style.height +
                  styleMap.h.height
              } else {
                pipev1 = pipe(
                  "v",
                  current.NO - 1 >= (current.LEN - 1) >> 1 ? "1" : "0",
                )
                pipev1.props.waterstyle = "1"
                pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
                pipev1.props.style.height =
                  styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
                pipev1.props.style.translateX = rX
                pipev1.props.style.translateY = pipehr1.props.style.translateY
                if (i >= len >> 1) {
                  pipev1.props.style.translateY =
                    pipev1.props.style.translateY -
                    pipev1.props.style.height +
                    styleMap.h.height
                }
              }
            } else {
              // 奇数
              if (current.NO !== current.LEN) {
                pipev1 = pipe(
                  "v",
                  current.NO - 1 >= (current.LEN - 1) >> 1 ? "1" : "0",
                )
                pipev1.props.waterstyle = "1"
                pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
                pipev1.props.style.height =
                  styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
                pipev1.props.style.translateX = rX
                pipev1.props.style.translateY = pipehr1.props.style.translateY
              }
            }

            if (pipev1) {
              if (current?.ONOFF) {
                // pipev1.props.status = {
                //   bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
                //   type: "expressions",
                //   point: [current.ONOFF.NAME],
                // }
                pipev1.props.status = {
                  bind: current.preStates.slice(0, -2),
                  type: "expressions",
                  point: [current.ONOFF.NAME],
                }
                // console.log("current=====>", current.NAME, pipev1.props.status)
              } else {
                if (current.NEXT_NODE?.length === 1) {
                  const next = current.NEXT_NODE[0]
                  pipev1.props.status = {
                    bind: `(${current?.preStates.slice(0, -2)})&&${"${" + idsList[next.ID].ONOFF.NAME + "}"}==1`,
                    type: "expressions",
                    point: onPoints(
                      `(${current?.preStates.slice(0, -2)})&&${"${" + idsList[next.ID].ONOFF.NAME + "}"}==1`,
                    ),
                  }
                } else {
                  // 并联
                  pipev1.props.status = {
                    bind: current?.preStates?.slice(0, -2),
                    type: "expressions",
                    point: onPoints(current?.preStates?.slice(0, -2)),
                  }
                  // todo...
                  //  if(current.NEXT_NODE?.length > 1){}
                }
              }
              result[pipev1.id] = pipev1
            }

            // pipev1.props.status = {
            //   bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
            //   type: "expressions",
            // }

            //  串联吸干机和储气干罐右上竖管
            // result[pipev1.id] = pipev1
          }

          // 储气干罐右边竖管
          if (current.TYPE === "D0C1E") {
            let piperv
            if (current.LEN % 2 === 0 && current.LEN > 2) {
              // 偶数
              if (
                current.NO === current.LEN >> 1 ||
                current.NO === (current.LEN >> 1) + 1
              ) {
                piperv = pipe("v", "0")
                piperv.props.waterstyle = "1"
                piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
                piperv.props.style.height =
                  styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
                piperv.props.style.translateX = rX
                piperv.props.style.translateY = pipehr1.props.style.translateY
              } else {
                piperv = pipe(
                  "v",
                  current.NO - 1 > current.LEN >> 1 ? "1" : "0",
                )
                piperv.props.waterstyle = "1"
                piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
                piperv.props.style.height =
                  styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
                piperv.props.style.translateX = rX
                piperv.props.style.translateY = pipehr1.props.style.translateY
                if (current.NO >= (current.LEN >> 1) + 1) {
                  piperv.props.style.translateY =
                    piperv.props.style.translateY - piperv.props.style.height
                }
              }
            } else {
              if (current.NO !== current.LEN) {
                piperv = pipe(
                  "v",
                  current.NO - 1 >= (current.LEN - 1) >> 1 ? "1" : "0",
                )
                piperv.props.waterstyle = "1"
                piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
                piperv.props.style.height =
                  styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
                piperv.props.style.translateX = rX
                piperv.props.style.translateY = pipehr1.props.style.translateY
              }
            }
            if (piperv) {
              if (idsList[arr[i + 1].ID]?.ONOFF) {
                piperv.props.status = {
                  bind: `${"${" + idsList[arr[i + 1].ID].ONOFF.NAME + "}"}==1`,
                  type: "expressions",
                  point: [idsList[arr[i + 1].ID].ONOFF.NAME],
                }
              } else {
                piperv.props.status = {
                  bind: current?.preStates.slice(0, -2),
                  type: "expressions",
                  point: onPoints(current?.preStates.slice(0, -2)),
                }
              }
              result[piperv.id] = piperv
            }
          }
          // if (current.TYPE === "D0C1E" && index !== current.LEN - 1) {
          //   const piperv = pipe("v", "0")
          //   piperv.props.waterstyle = "1"
          //   piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
          //   piperv.props.style.height =
          //     styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
          //   piperv.props.style.translateX = rX
          //   piperv.props.style.translateY = pipehr1.props.style.translateY
          //   if (idsList[arr[i + 1].ID]?.ONOFF) {
          //     piperv.props.status = {
          //       bind: `${"${" + idsList[arr[i + 1].ID].ONOFF.NAME + "}"}==1`,
          //       type: "expressions",
          //     }
          //   } else {
          //     piperv.props.status = {
          //       bind: current?.preStates,
          //       type: "expressions",
          //     }
          //   }
          //   result[piperv.id] = piperv
          // }

          // D0C1E 储气干罐   干罐右侧出口一根横线
          if (current.TYPE === "D0C1E") {
            const pipehr2 = pipe("h", "0")
            pipehr2.props.waterstyle = "1"
            pipehr2.props.style = { ...styleMap["h"], fill: "#407FCB" }
            pipehr2.props.style.width = fix(pipehr2.props.style.width / 2)
            pipehr2.props.style.translateX = rX
            pipehr2.props.style.translateY = pipehr1.props.style.translateY
            pipehr2.props.status = {
              bind: current?.preStates.slice(0, -2),
              type: "expressions",
              point: onPoints(current?.preStates.slice(0, -2)),
            }
            if (
              current.LEN % 2 === 0 &&
              (current.NO === current.LEN >> 1 ||
                current.NO === (current.LEN >> 1) + 1)
            ) {
              result[pipehr2.id] = pipehr2
              // PR_PLANT 为总管压力 FLOW_PLANT_AIR为总管流量
              generateText({
                result,
                current: "PR_PLANT",
                item: deviceMap["all"][0],
                index: 1,
                parentStyle: pipehr2.props.style,
                xAxis: 0,
                yAxis: 15,
              })
              generateText({
                result,
                current: "FLOW_PLANT_AIR",
                item: deviceMap["all"][1],
                index: 1,
                parentStyle: pipehr2.props.style,
                xAxis: 0,
                yAxis: 45,
              })
            } else if (current.NO === (current.LEN >> 1) + 1) {
              result[pipehr2.id] = pipehr2
              // PR_PLANT 为总管压力 FLOW_PLANT_AIR为总管流量
              generateText({
                result,
                current: "PR_PLANT",
                item: deviceMap["all"][0],
                index: 1,
                parentStyle: pipehr2.props.style,
                xAxis: 0,
                yAxis: 15,
              })
              generateText({
                result,
                current: "FLOW_PLANT_AIR",
                item: deviceMap["all"][1],
                index: 1,
                parentStyle: pipehr2.props.style,
                xAxis: 0,
                yAxis: 45,
              })
            }
          }
        }
      })
    }
  })
}



// const wrapContainer = ({ containerId, nodes }) => {
//   return {
//     id: containerId,
//     type: {
//       resolvedName: "Container",
//     },
//     displayName: "Container",
//     props: {
//       style: {
//         // display: "flex",
//         // jusitifyContent: "center",
//         // position: "relative",
//         width: "80px",
//         height: "10px",
//         background: "#f40",
//       },
//       displayName: "Container",
//     },
//     parent: boxid,
//     nodes,
//   }
// }

// export const generateText = ({
//   result,
//   current,
//   item,
//   index,
//   parentStyle,
//   xAxis = 0,
//   yAxis = 30,
//   center = 0,
// }) => {
//   const containerId = nanoid(10)
//   const poc = statusText(null, item[1], containerId)
//   result[poc.id] = poc
//   const container = wrapContainer({ containerId, nodes: [poc.id] })
  
//   // 调整数码管的位置  64为数码管的宽度
//   // poc.props.style = {
//   //   // ...commonTextStyle,
//   //   translateX:
//   //     parentStyle.translateX,
//   //   translateY: parentStyle.translateY + yAxis,
//   // }
//   container.props.style = {
//     ...container.props.style,
//     translateX: parentStyle.translateX ,
//     translateY: parentStyle.translateY + yAxis,
//   }
//   console.log("container=====>", container.props.style)
//   poc.props.value = {
//     bind: current?.[item[0]]?.NAME ? current?.[item[0]]?.NAME : current,
//     type: "points",
//   }
//   result[containerId] = container
// }

// const statusText = (percent, unit, containerId) => {
//   const id = nanoid(10)
//   return {
//     id,
//     type: {
//       resolvedName: "NumeralText",
//     },
//     isCanvas: false,
//     props: {
//       displayName: "NumeralText",
//       level: "5",
//       size: "",
//       decimalSeparator: !!percent ? 0 : 1,
//       percent: false,
//       value: "",
//       type: "success",
//       strong: false,
//       italic: false,
//       underline: false,
//       disabled: false,
//       mark: false,
//       keyboard: false,
//       delete: false,
//       code: false,
//       isBefore: false,
//       isAfter: !!unit || !!percent,
//       style: {
//         fontSize: "12px",
//       },
//       before: {
//         value: "前缀",
//       },
//       after: {
//         value: percent ? "%" : unit,
//         type: "secondary",
//         props: {
//           size: "10px",
//         },
//       },
//     },
//     displayName: "NumeralText",
//     custom: {},
//     parent: containerId,
//     hidden: false,
//     nodes: [],
//     linkedNodes: {},
//   }
// }

export const generateText = ({
  result,
  current,
  item,
  index,
  parentStyle,
  xAxis = 0,
  yAxis = 30,
  center = 0,
}) => {
  const poc = statusText(null, item[1])
  // 调整数码管的位置  64为数码管的宽度
  poc.props.style = {
    // ...commonTextStyle,
    translateX: parentStyle.translateX + (index === 0 ? center - 64 - 10 : center + 20) + xAxis,
    translateY: parentStyle.translateY + yAxis,
  }
  poc.props.value = {
    bind: current?.[item[0]]?.NAME ? current?.[item[0]]?.NAME : current,
    type: "points",
  }
  result[poc.id] = poc
}

export default {
  helpFunction,
  getMaxHieght,
  position,
  pipe,
  generateText,
}

/**
 * 空压
 */
import { styleMap, commonTextStyle } from '../stylesDefault'
import { pipe, device, statusText, text } from '../nodesDefault';
import { calcAxis } from "../util"

// 竖管高度
export const pipevHeight = 150;
// 横管宽度
export const pipehWidth = 150;

// 计算 X轴和Y轴之间的间距
// X轴最小间距为横管宽度的倍
// export let acopXGap = styleMap.h.width * 1.0
// Y轴最小间距为80  // todo: 最小80 最大160 
// export let acopYGap = 80

export const pGap = {
  acopXGap: styleMap.h.width * 1.0,
  acopYGap: 80
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
    Object.keys(ACOPS).length * (styleMap.Acop.height),
    Object.keys(ARWTS).length * (styleMap.WetTank.height),
    Object.keys(RDRYS).length * (styleMap.RefDryer.height),
    Object.keys(DDRYS).length * (styleMap.DesDryer.height),
    Object.keys(ARDTS).length * (styleMap.Tank.height),
  )
}



/**
 * 设备位置
 */
export const position = ({ index, initTop, prevX, laststyle }) => {
  console.log(
    "position====>1",
    laststyle,
    "initTop===>",
    initTop,
    (index + 1) * (styleMap.Acop.height + pGap.acopYGap) + initTop,
    "sup===>",
    styleMap.Acop.height,
    pGap.acopYGap,
    initTop,
  )
  return {
    // translateY: (index + 1) * (styleMap.Acop.height + 80) + initTop,
    // 当前设备的垂直位移 = 当前设备索引 * (按照Acop的高度算 + 上下设备之间的间隙) + 初始化距离顶部的高度
    translateY: (index) * (styleMap.Acop.height + pGap.acopYGap) + initTop,
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
    'D0C1A': ['Acop', null, ['PR_DISCHARGE', 'Mpa'], ['T_DISCHARGE', '℃'],{
        width:"104px",
        height:"120px",
    }],
    // 'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
    'D0C1D': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}],
    'D0C1B': ['RefDryer', 'RDRYS',[],[], {width:"95px",height:"100px"}],
    'D0C1C': ['DesDryer', 'DDRYS',[],[], {width:"120px",height:"100px"}],
    'D0C1E': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}]
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
    return Number(Number(num).toFixed(1));
};
const childMap = new Map();
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
  if (!arr || !arr.length) return
  let len = arr.length - 1
  let str = ""
  // 存的格式是{key1.1:key2.1,key1.2:key:2.2}
  // 表示key2下一层的设备id和当前层设备key1的id的映射关系
  const obj = {}

  arr.forEach((t0) => {
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

  console.log("position====>0", Object.values(obj), obj, tag)

  // 遍历当前层的id
  Object.values(obj).forEach((t, i) => {
    if (Array.isArray(t)) {
      t.forEach((item, index) => {
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
            index: t.length > 1 ? index : i,
            initTop,
            prevX,
            laststyle: lastdevice,
          }),
        }
        // console.log("position====>", prevX, lastdevice)
        // result[deviceItem.id].props.style.translateY = result[deviceItem.id].props.style.translateY + 10
        const newprevX = result[deviceItem.id].props.style.translateX
        const target = result[deviceItem.id].props.style
        const nameText = text()
        nameText.props.value = current.NAME
        const xAxis = calcAxis(deviceItem, item.NAME)
        nameText.props.style = {
          ...nameText.props.style,
          translateX: target.translateX + xAxis, // 这里的xAxis为偏移量,只有一个数码管的情况需要添加偏移量
          translateY: target.translateY + target.height + 10,
        }
        result[nameText.id] = nameText
        deviceMap[current.TYPE].slice(2).forEach((textItem, textIndex) => {
          if (!textItem || !Array.isArray(textItem) || !textItem?.length) return
          pointsObject[textItem[0]] = 0
          // generateText(result, textItem, textIndex, target);
          generateText({
            result,
            item: textItem,
            index: textIndex,
            parentStyle: nameText.props.style,
            xAxis: 50,
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
        // pipeh1.props.style.translateY = target.translateY + target.height * 0.7;
        // 1. 利用 设备之间的高度差距算
        // pipeh1.props.style.translateY =
        //   target.translateY + target.height * 0.65 + 10 * 0.65
        // 2. 直接利用空压机的高度算
        pipeh1.props.style.translateY =
          target.translateY + styleMap.Acop.height * 0.65

        // 宽度添加10px 向左添加10px偏移量
        pipeh1.props.style.width = pipeh1.props.style.width + 20
        pipeh1.props.style.zIndex = -1

        if (current?.ONOFF) {
          pipeh1.props.status = {
            bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
            type: "expressions",
          }
        } else {
          pipeh1.props.status = {
            bind: current?.preStates,
            type: "expressions",
          }
        }
        result[pipeh1.id] = pipeh1

        const pipeh2 = pipe("h", "0")
        // let vheight = len % 2 == 0 ? pipevHeight : pipevHeight * 0.5
        let vheight =
          len % 2 == 0
            ? styleMap.Acop.height + pGap.acopYGap
            : (styleMap.Acop.height + pGap.acopYGap) * 0.5

        if (len == 0 && current.NEXT_NODE?.length > 1) {
          vheight = vheight * 0.5
        }
        const objle = Object.values(obj).length

        // 储气湿罐 和 冷干机 串联 右侧添加一根连接相邻设备的总管
        // if (
        //   (tag === "R" &&
        //     index === (t.length - 1) >> 1 &&
        //     (objle > 1 ? i === (objle - 1) >> 1 : 1)) ||
        //   (tag === "L" && lastLen === 1 && index === (t.length - 1) >> 1)
        // ) {
        //   // 生成总管
        //   pipeh2.props.waterstyle = "1"
        //   pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
        //   // pipeh2.props.style.width = fix(pipeh2.props.style.width * 0.33) + 2;
        //   // pipeh2.props.style.translateX = pipeh1.props.style.translateX - pipeh1.props.style.width;
        //   // 连接处的宽度等于间隙宽度 - 管子两侧宽度(现在每侧默认是.5个管子宽度)
        //   pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
        //   // 连接处的位移= 左侧管子的位移 - 当前管子的宽度
        //   pipeh2.props.style.translateX =
        //     pipeh1.props.style.translateX - pipeh2.props.style.width
        //   pipeh2.props.style.translateY =
        //     pipeh1.props.style.translateY + (len % 2 == 0 ? 0 : vheight)
        //   if (str.length > 0) {
        //     pipeh2.props.status = {
        //       bind: str.slice(0, -2),
        //       type: "expressions",
        //     }
        //   } else {
        //     pipeh2.props.status = {
        //       bind: current?.preStates,
        //       type: "expressions",
        //     }
        //   }
        //   result[pipeh2.id] = pipeh2
        // }

        // 储气干罐 和 储气湿罐左侧的的竖管
        // if (
        //   (lastLen > 1 && (index != t.length - 1 || t.length === 1)) ||
        //   (t.length > 1 && index != t.length - 1)
        // ) {
        //   if (
        //     current.NO === (current.LEN - 1) >> 1 ||
        //     (current.LEN == 2 && current.NO === 1)
        //   ) {
        //     const pipev1 = pipe("v", "1")
        //     pipev1.props.waterstyle = "1"
        //     pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
        //     pipev1.props.style.height = vheight
        //     // pipev1.props.style.height = styleMap.Acop.height + pGap.acopYGap
        //     pipev1.props.style.translateX = pipeh1.props.style.translateX
        //     pipev1.props.style.translateY = pipeh1.props.style.translateY
        //     pipev1.props.status = {
        //       bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
        //       type: "expressions",
        //     }
        //     result[pipev1.id] = pipev1
        //     if (len % 2 == 1) {
        //       // 生成总管的地方要生成两个竖管
        //       const pipev2 = pipe("v", "0")
        //       pipev2.props.waterstyle = "1"
        //       pipev2.props.style = { ...styleMap["v"], fill: "#407FCB" }
        //       pipev2.props.style.height = vheight
        //       pipev2.props.style.translateX = pipeh1.props.style.translateX
        //       pipev2.props.style.translateY =
        //         pipev1.props.style.translateY + vheight
        //       pipev2.props.status = {
        //         bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
        //         type: "expressions",
        //       }
        //       result[pipev2.id] = pipev2
        //     }
        //   } else if (i !== len) {
        //     // 最后一个湿罐左侧竖管
        //     const pipev = pipe(
        //       "v",
        //       current.NO > (current.LEN - 1) >> 1 ? "0" : "1",
        //     )
        //     pipev.props.waterstyle = "1"
        //     pipev.props.style = { ...styleMap["v"], fill: "#407FCB" }
        //     // pipev.props.style.height = pipevHeight;
        //     pipev.props.style.height = styleMap.Acop.height + pGap.acopYGap
        //     pipev.props.style.translateX = pipeh1.props.style.translateX
        //     pipev.props.style.translateY = pipeh1.props.style.translateY
        //     if (idsList[arr[i + 1].ID]?.ONOFF) {
        //       pipev.props.status = {
        //         bind: `${"${" + idsList[arr[i + 1].ID].ONOFF.NAME + "}"}==1`,
        //         type: "expressions",
        //       }
        //     } else {
        //       pipev.props.status = {
        //         bind: current?.preStates,
        //         type: "expressions",
        //       }
        //     }
        //     result[pipev.id] = pipev
        //   }
        // }

        let newtag = "L"
        const curlen = current.LEN || 0
        if (
          i == 0 &&
          arr?.[0]?.NEXT_NODE?.length > 1 &&
          arr?.[0]?.NEXT_NODE?.some((t) => !childMap.get(t.ID))
        ) {
          // 最后一个储气干罐
          if (arr.length >= current?.NEXT_NODE.length) {
            newtag = "R"
          }
          const nextlen = arr?.[0]?.NEXT_NODE?.length
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
          // helpFunction(obj, result, newtag, newprevX, initTop + Math.abs(curlen - nextlen) * pipevHeight * 0.5, result[deviceItem.id], idsList, deviceModelMap, t.length, pointsObject);
          helpFunction({
            arr: obj,
            result,
            tag: newtag,
            prevX: newprevX,
            // initTop: initTop + Math.abs(curlen - nextlen) * (pipevHeight) * 0.5,
            initTop:
              initTop +
              Math.abs(curlen - nextlen) *
                (styleMap.Acop.height + pGap.acopYGap) *
                0.5,
            lastdevice: result[deviceItem.id],
            idsList,
            deviceModelMap,
            lastLen: t.length,
            pointsObject,
          })
        } else if (arr?.[i]?.NEXT_NODE?.length == 1) {
          // 储气湿罐 和 冷干机 串联
          const obj = []
          arr?.[i]?.NEXT_NODE.forEach((t, i0) => {
            obj.push({
              ...t,
              LEN: Object.values(idsList).filter((t0) => t0.TYPE === t.TYPE)
                .length,
              isMin: i0 > (arr?.[i]?.NEXT_NODE.length - 1) >> 1 ? "donw" : "up",
            })
          })
          // helpFunction(obj, result, 'R', newprevX, initTop + (t.length > 1 ? index : i) * pipevHeight, result[deviceItem.id], idsList, deviceModelMap, t.length, pointsObject);
          console.log(
            "position====>2",
            i,
            t.length > 1,
            "index====>",
            index,
            initTop + (t.length > 1 ? index : i) * (pipevHeight + pGap.acopYGap),
          )
          helpFunction({
            arr: obj,
            result,
            tag: "R",
            prevX: newprevX,
            // initTop: initTop + (t.length > 1 ? index : i) * (pipevHeight),
            initTop:
              initTop +
              (t.length > 1 ? index : i) * (styleMap.Acop.height + pGap.acopYGap),
            lastdevice: result[deviceItem.id],
            idsList,
            deviceModelMap,
            lastLen: t.length,
            pointsObject,
          })
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
          // pipehr1.props.style.translateY = target.translateY + target.height * 0.7;
          // 1. 利用 设备之间的高度差距算
          // pipehr1.props.style.translateY =
          // target.translateY + target.height * 0.65 + 10 * 0.65
          // 2. 直接利用空压机的高度算
          pipehr1.props.style.translateY =
            target.translateY + styleMap.Acop.height * 0.65

          // 宽度添加20px 向左添加20px偏移量
          pipehr1.props.style.width = pipehr1.props.style.width + 20
          pipehr1.props.style.translateX = pipehr1.props.style.translateX - 20
          pipehr1.props.style.zIndex = -1

          if (current?.ONOFF) {
            pipehr1.props.status = {
              bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
              type: "expressions",
            }
          } else {
            pipehr1.props.status = {
              bind: current?.preStates,
              type: "expressions",
            }
          }
          result[pipehr1.id] = pipehr1
          const rX = pipehr1.props.style.translateX + pipehr1.props.style.width
          if (tag === "L" && index === (t.length - 1) >> 1 && index !== 0) {
            // 生成总管
            const pipehr2 = pipe("h", "0")
            pipehr2.props.waterstyle = "1"
            pipehr2.props.style = { ...styleMap["h"], fill: "#407FCB" }
            // pipehr2.props.style.width = fix(pipehr2.props.style.width * 0.33) + 2;
            pipehr2.props.style.width = fix(pipehr2.props.style.width / 3)
            pipehr2.props.style.translateX = rX - 1
            pipehr2.props.style.translateY =
              pipehr1.props.style.translateY + +(len % 2 == 0 ? 0 : vheight)
            if (str.length > 0) {
              pipehr2.props.status = {
                bind: str.slice(0, -2),
                type: "expressions",
              }
            } else {
              pipehr2.props.status = {
                bind: current?.preStates,
                type: "expressions",
              }
            }
            result[pipehr2.id] = pipehr2
          }
          // D0C1E 储气干罐
          if (current.TYPE === "D0C1E" && current.NO !== current.LEN) {
            if (
              current.NO == (current.LEN - 1) >> 1 ||
              (current.NO == 1 && current.LEN == 2)
            ) {
              const pipehr2 = pipe("h", "0")
              pipehr2.props.waterstyle = "1"
              pipehr2.props.style = { ...styleMap["h"], fill: "#407FCB" }
              pipehr2.props.style.width = fix(pipehr2.props.style.width * 0.33)
              pipehr2.props.style.translateX = rX
              pipehr2.props.style.translateY =
                pipehr1.props.style.translateY + vheight
              pipehr2.props.status = {
                bind: current?.preStates,
                type: "expressions",
              }
              result[pipehr2.id] = pipehr2
            }
          }
          if (
            (current.TYPE === "D0C1E" ||
              (arr?.[i]?.NEXT_NODE?.length > 1 &&
                (index != t.length - 1 || t.length === 1))) &&
            current.NO !== current.LEN
          ) {
            if (i === len >> 1) {
              // 串联 吸干机和储气干罐右边竖管
              const pipev1 = pipe(
                "v",
                current.NO > (current.LEN - 1) >> 1 ? "0" : "1",
              )
              pipev1.props.waterstyle = "1"
              pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
              pipev1.props.style.height = vheight
              pipev1.props.style.translateX = rX
              pipev1.props.style.translateY = pipehr1.props.style.translateY
              pipev1.props.status = {
                bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                type: "expressions",
              }
              //  串联吸干机和储气干罐右上竖管
              result[pipev1.id] = pipev1
              if (len % 2 == 1 || (curlen > 0 && len == 0)) {
                // 生成总管的地方要生成两个竖管
                const pipev2 = pipe(
                  "v",
                  current.NO > (current.LEN - 1) >> 1 ? "1" : "0",
                )
                pipev2.props.waterstyle = "1"
                pipev2.props.style = { ...styleMap["v"], fill: "#407FCB" }
                // 串联
                pipev2.props.style.height = vheight + styleMap.h.height
                pipev2.props.style.translateX = rX
                pipev2.props.style.translateY =
                  pipev1.props.style.translateY + vheight
                pipev2.props.status = {
                  bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                  type: "expressions",
                }
                // 串联吸干机和储气干罐右下竖管
                result[pipev2.id] = pipev2
              }
            } else if (i !== len && i !== len >> 1) {
              // 并联 吸干机和储气干罐右边竖管
              const piperv = pipe("v", i > len >> 1 ? "1" : "0")
              piperv.props.waterstyle = "1"
              piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
              // piperv.props.style.height = pipevHeight + styleMap.h.height
              // piperv.props.style.height = vheight + styleMap.h.height
              piperv.props.style.height = styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
              // console.log(
              //   "vheight + styleMap.h.height====>",
              //   vheight,
              //   styleMap.h.height,
              //   styleMap.Acop.height ,pGap.acopYGap,
              // )
              piperv.props.style.translateX = rX
              piperv.props.style.translateY = pipehr1.props.style.translateY
              if (idsList[arr[i + 1].ID]?.ONOFF) {
                piperv.props.status = {
                  bind: `${"${" + idsList[arr[i + 1].ID].ONOFF.NAME + "}"}==1`,
                  type: "expressions",
                }
              } else {
                piperv.props.status = {
                  bind: current?.preStates,
                  type: "expressions",
                }
              }
              result[piperv.id] = piperv
            }
          }
        }
      })
    }
  })
}

export const generateText = ({ result, item, index, parentStyle,xAxis = 0 }) => {
  const poc = statusText(null, item[1])
  // poc.props.style = {
  //     ...commonTextStyle,
  //     translateX: parentStyle.translateX - 40,
  //     translateY: (index) * 50 + parentStyle.translateY,
  // }
  // 调整数码管的位置
  poc.props.style = {
    // ...commonTextStyle,
    translateX: parentStyle.translateX + xAxis + (index === 0 ? -50 : 50),
    translateY: parentStyle.translateY + 30,
  }
  poc.props.value = {
    bind: item[0],
    type: "points",
  }
  result[poc.id] = poc
}

export default {
    helpFunction,
    getMaxHieght,
    position,
    pipe,
    generateText
}

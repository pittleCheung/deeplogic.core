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
  acopXGap: styleMap.h.width * 1.3,
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
    'D0C1A': ['Acop', null, ['PR_DISCHARGE', 'Mpa'], ['T_DISCHARGE', '℃'],{ // 空压机
        width:"104px",
        height:"120px",
    }],
    // 'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
    'D0C1D': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}], 
    'D0C1B': ['RefDryer', 'RDRYS',['T_DEW', '℃'],[], {width:"95px",height:"100px"}],   // 冷干机
    'D0C1C': ['DesDryer', 'DDRYS',['T_DEW', '℃'],[], {width:"120px",height:"100px"}],  // 吸干机
    'D0C1E': ['Tank', null, ['PR', 'Mpa'],[], {width:"78px",height:"120px"}],
    "all":[["PR_PLANT","Mpa"],["FLOW_PLANT_AIR","Mpa"]]
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
  // 都是循环里面有条件的递归 所有有无出口不重要,这行代码无效
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
  // 串联逻辑只有一层湿罐循环 每一层循环 画一排 湿罐 冷干机 吸干机  但是第一层循环将所有的储气干罐画好,以后每层循环都是

  // 并联逻辑 第一层循环 循环湿罐0 进入冷干机0循环 进入吸干机0循环 ,完成储气干罐的循环 递归入栈
  // 第二层吸干机1循环 冷干机1循环 湿罐1循环 递归退栈

  // 遍历当前层的id
  Object.values(obj).forEach((t, i) => {
    // 湿罐串联 t => ['Ts0opsFugDQPtmAVBwq0ng']
    // 干罐并联 t => ['ReX4jaC8HxW7OMSlM3jFal', 'n4GwOLBgJdMert1OCprPOL', '95ktirI2q4TfxYpVOZO12H']
    if (Array.isArray(t)) {
      t.forEach((item, index) => {
        // 将点表的数据合并到current中
        const current = { ...idsList[item], ...arr.find((t) => t?.ID === item) }

        // console.log(
        //   "position====>1",
        //   lastLen,
        //   t,
        //   i,
        //   current.NAME,
        //   Object.values(obj),
        //   index,
        // )
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
        // console.log("position====>", prevX, lastdevice)
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
          pointsObject[textItem[0]] = 0
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
          // 走到这里说明是冷干机和吸干机
          pipeh1.props.status = {
            bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
            type: "expressions",
          }
        } else {
          // 如果当前Node没有ONOFF属性(湿罐干罐目前没有) 取决于冷干机或吸干机的状态
          // 储气湿罐#1 preStates = ${ACOP1#ONOFF}==1||${ACOP2#ONOFF}==1||${ACOP3#ONOFF}==1||
          if (current.NEXT_NODE.length === 1) {
            const curr = current.NEXT_NODE[0]
            pipeh1.props.status = {
              bind:
                current?.preStates.slice(0, -2) +
                `&&${"${" + idsList[curr.ID].ONOFF.NAME + "}"}==1`,
              type: "expressions",
            }
          } else {
            // 并联
            pipeh1.props.status = {
              bind: current?.preStates.slice(0, -2),
              type: "expressions",
            }
            // todo...
            //  if(current.NEXT_NODE.length > 1){}
          }
        }

        // 储气湿罐 冷干机 吸干机 储气干罐 左侧横管
        result[pipeh1.id] = pipeh1

        const pipeh2 = pipe("h", "0")

        let vheight =
          len % 2 == 0
            ? styleMap.Acop.height + pGap.acopYGap
            : (styleMap.Acop.height + pGap.acopYGap) * 0.5

        if (len == 0 && current.NEXT_NODE?.length > 1) {
          vheight = vheight * 0.5
        }
        const objle = Object.values(obj).length

        //  rewrite: 储气湿罐 和 冷干机 串联 右侧添加一根连接相邻设备的总管
        // if (
        //   tag === "R" &&
        //   index === (t.length - 1) >> 1
        //   && (objle > 1 ? i === (objle - 1) >> 1 : 1)
        //    || (tag === "L" && lastLen === 1 && index === (t.length - 1) >> 1)
        // ) {
        //   // 生成总管
        //   pipeh2.props.waterstyle = "1"
        //   pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
        //   // 连接处的宽度等于间隙宽度 - 管子两侧宽度(现在每侧默认是.5个管子宽度)
        //   pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
        //   // 连接处的位移= 左侧管子的位移 - 当前管子的宽度
        //   pipeh2.props.style.translateX =
        //     pipeh1.props.style.translateX - pipeh2.props.style.width
        //   // pipeh2.props.style.translateY =
        //   //   pipeh1.props.style.translateY + (len % 2 == 0 ? 0 : vheight)
        //   pipeh2.props.style.translateY = pipeh1.props.style.translateY

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
        //   console.log("position====>3", current.NAME, vheight, len)
        //   result[pipeh2.id] = pipeh2
        // }

        // 并联 最后一个储气干罐左侧 最后一个冷干机左侧 和 最后一个吸干机左侧横管
        // 串联 也会走这里 因为只有一个t.length === 1
        if (
          (tag === "R" && index === t.length - 1) ||
          // && (objle > 1 ? i === (objle - 1) >> 1 : 1)
          (tag === "L" && lastLen === 1 && index === t.length - 1)
        ) {
          // 生成总管
          pipeh2.props.waterstyle = "1"
          pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
          // 连接处的宽度等于间隙宽度 - 管子两侧宽度(现在每侧默认是.5个管子宽度)
          pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
          // 连接处的位移= 左侧管子的位移 - 当前管子的宽度
          pipeh2.props.style.translateX =
            pipeh1.props.style.translateX - pipeh2.props.style.width
          pipeh2.props.style.translateY = pipeh1.props.style.translateY

          // if (str.length > 0) {
          //   pipeh2.props.status = {
          //     bind: str.slice(0, -2),
          //     type: "expressions",
          //   }
          // } else {
          //   pipeh2.props.status = {
          //     bind: current?.preStates,
          //     type: "expressions",
          //   }
          // }
          if (current?.ONOFF) {
            pipeh2.props.status = {
              bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
              type: "expressions",
            }
          }else{
            pipeh2.props.status = {
              bind: current?.preStates.slice(0,-2),
              type: "expressions",
            }
          }
          console.log(
            "position=====>start",
            pipeh2.props.status,
            current?.ONOFF,
            current,
            current.preStates,
            current.NAME,
            current.NEXT_NODE,
          )
          // console.log("position====>5", current.NAME, t, index, arr, tag)
          result[pipeh2.id] = pipeh2
        }

        // rewrite: 储气干罐 和 储气湿罐左侧的的竖管 总管
        // if (
        //   (lastLen > 1 && (index != t.length - 1 || t.length === 1)) || // 储气湿罐左侧竖管  lastLen > 1的情况是3个空压机
        //   (t.length > 1 && index != t.length - 1)    // 储气干罐左侧竖管
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

        // 储气湿罐左侧竖管
        if (lastLen > 1 && (index != t.length - 1 || t.length === 1)) {
          if (i !== len) {
            // 最后一根线不需要展示
            const pipev1 = pipe("v", "1")
            pipev1.props.waterstyle = "1"
            pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
            pipev1.props.style.height = vheight
            // pipev1.props.style.height = styleMap.Acop.height + pGap.acopYGap
            pipev1.props.style.translateX = pipeh1.props.style.translateX
            pipev1.props.style.translateY = pipeh1.props.style.translateY
            // pipev1.props.status = {
            //   bind: str.length > 0 ? str.slice(0, -2) : current?.preStates.slice(0, -2),
            //   type: "expressions",
            // }
            // 串联
            if (current.NEXT_NODE.length === 1) {
              const curr = current.NEXT_NODE[0]
              pipev1.props.status = {
                bind:
                  current?.preStates.slice(0, -2) +
                  `&&${"${" + idsList[curr.ID].ONOFF.NAME + "}"}==1`,
                type: "expressions",
              }
            } else {
              // 并联
              // todo...
            }
            result[pipev1.id] = pipev1
          }
        }

        // 储气干罐左侧竖管
        if (t.length > 1 && index != t.length - 1) {
          // 最后一根线不需要展示
          const pipev1 = pipe("v", "1")
          pipev1.props.waterstyle = "1"
          pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
          // pipev1.props.style.height = vheight
          pipev1.props.style.height = styleMap.Acop.height + pGap.acopYGap
          pipev1.props.style.translateX = pipeh1.props.style.translateX
          pipev1.props.style.translateY = pipeh1.props.style.translateY
          pipev1.props.status = {
            bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
            type: "expressions",
          }
          result[pipev1.id] = pipev1
        }

        let newtag = "L"
        const curlen = current.LEN || 0
        if (
          i == 0 &&
          arr?.[0]?.NEXT_NODE?.length > 1 && // 下一个节点的数据要超过1 说明并联
          arr?.[0]?.NEXT_NODE?.some((t) => !childMap.get(t.ID)) // 串联的情况下并联储气干罐要特殊处理只能进一次,第二轮储气湿罐的循环就不走到这里面来了
        ) {
          // 最后一个储气干罐 和 并联的情况
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
          // console.log("position====>2", arr, obj)
          helpFunction({
            arr: obj,
            result,
            tag: newtag,
            prevX: newprevX,
            initTop:
              initTop +
              Math.abs(curlen - nextlen) *
                (styleMap.Acop.height + pGap.acopYGap) *
                0.5,
            // Math.abs(curlen - nextlen) *
            //   (styleMap.Acop.height + pGap.acopYGap) *
            //   1,
            lastdevice: result[deviceItem.id],
            idsList,
            deviceModelMap,
            lastLen: t.length,
            pointsObject,
          })
        } else if (arr?.[i]?.NEXT_NODE?.length == 1) {
          // 储气湿罐 和 冷干机 串联(并联不会走这里)
          const obj = []
          // console.log("position====>3/2", i, current, arr)
          arr?.[i]?.NEXT_NODE.forEach((t, i0) => {
            obj.push({
              ...t,
              LEN: Object.values(idsList).filter((t0) => t0.TYPE === t.TYPE)
                .length,
              isMin: i0 > (arr?.[i]?.NEXT_NODE.length - 1) >> 1 ? "donw" : "up",
            })
          })
          helpFunction({
            arr: obj,
            result,
            tag: "R",
            prevX: newprevX,
            // initTop: initTop + (t.length > 1 ? index : i) * (styleMap.Acop.height + pGap.acopYGap),
            initTop: initTop + i * (styleMap.Acop.height + pGap.acopYGap),
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
            pipehr1.props.status = {
              bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
              type: "expressions",
            }
          } else {
            if (current.NEXT_NODE.length === 1) {
              const curr = current.NEXT_NODE[0]
              pipehr1.props.status = {
                bind:
                  current?.preStates.slice(0, -2) +
                  `&&${"${" + idsList[curr.ID].ONOFF.NAME + "}"}==1`,
                type: "expressions",
              }
            } else {
              // 并联
              pipehr1.props.status = {
                bind: current?.preStates.slice(0, -2),
                type: "expressions",
              }
              // todo...
              //  if(current.NEXT_NODE.length > 1){}
            }
          }
          // 储气湿罐 冷干机 吸干机 储气干罐 右侧横管
          result[pipehr1.id] = pipehr1

          const rX = pipehr1.props.style.translateX + pipehr1.props.style.width

          // rewrite: 吸干机和储气干罐右边竖管
          // if (
          //   (current.TYPE === "D0C1E" ||
          //     (arr?.[i]?.NEXT_NODE?.length > 1 &&
          //       (index != t.length - 1 || t.length === 1))) &&
          //   current.NO !== current.LEN
          // ) {
          //   if (i === len >> 1) {
          //     // 串联 吸干机和储气干罐右边竖管
          //     const pipev1 = pipe(
          //       "v",
          //       current.NO > (current.LEN - 1) >> 1 ? "0" : "1",
          //     )
          //     pipev1.props.waterstyle = "1"
          //     pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
          //     pipev1.props.style.height = vheight
          //     pipev1.props.style.translateX = rX
          //     pipev1.props.style.translateY = pipehr1.props.style.translateY
          //     pipev1.props.status = {
          //       bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
          //       type: "expressions",
          //     }
          //     console.log("position====>4", current, t)
          //     //  串联吸干机和储气干罐右上竖管
          //     result[pipev1.id] = pipev1
          //     if (len % 2 == 1 || (curlen > 0 && len == 0)) {
          //       // 生成总管的地方要生成两个竖管
          //       const pipev2 = pipe(
          //         "v",
          //         current.NO > (current.LEN - 1) >> 1 ? "1" : "0",
          //       )
          //       pipev2.props.waterstyle = "1"
          //       pipev2.props.style = { ...styleMap["v"], fill: "#407FCB" }
          //       // 串联
          //       pipev2.props.style.height = vheight + styleMap.h.height
          //       pipev2.props.style.translateX = rX
          //       pipev2.props.style.translateY =
          //         pipev1.props.style.translateY + vheight
          //       pipev2.props.status = {
          //         bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
          //         type: "expressions",
          //       }

          //       // 串联吸干机和储气干罐右下竖管
          //       result[pipev2.id] = pipev2
          //     }
          //   } else if (i !== len && i !== len >> 1) {
          //     // 并联 吸干机和储气干罐右边竖管
          //     const piperv = pipe("v", i > len >> 1 ? "1" : "0")
          //     piperv.props.waterstyle = "1"
          //     piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
          //     // piperv.props.style.height = pipevHeight + styleMap.h.height
          //     // piperv.props.style.height = vheight + styleMap.h.height
          //     piperv.props.style.height =
          //       styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
          //     piperv.props.style.translateX = rX
          //     piperv.props.style.translateY = pipehr1.props.style.translateY
          //     if (idsList[arr[i + 1].ID]?.ONOFF) {
          //       piperv.props.status = {
          //         bind: `${"${" + idsList[arr[i + 1].ID].ONOFF.NAME + "}"}==1`,
          //         type: "expressions",
          //       }
          //     } else {
          //       piperv.props.status = {
          //         bind: current?.preStates,
          //         type: "expressions",
          //       }
          //     }
          //     console.log("position=======>end", current)
          //     // result[piperv.id] = piperv
          //   }
          // }

          // 吸干机右边竖管
          if (current.NO !== current.LEN && arr?.[i]?.NEXT_NODE?.length > 1) {
            const pipev1 = pipe("v", "0")
            pipev1.props.waterstyle = "1"
            pipev1.props.style = { ...styleMap["v"], fill: "#407FCB" }
            pipev1.props.style.height =
              styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
            pipev1.props.style.translateX = rX
            pipev1.props.style.translateY = pipehr1.props.style.translateY
            pipev1.props.status = {
              bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
              type: "expressions",
            }
            // console.log("position====>4", current, t, arr)
            //  串联吸干机和储气干罐右上竖管
            result[pipev1.id] = pipev1
          }

          // 储气干罐右边竖管
          if (current.TYPE === "D0C1E" && index !== current.LEN - 1) {
            const piperv = pipe("v", "0")
            piperv.props.waterstyle = "1"
            piperv.props.style = { ...styleMap["v"], fill: "#407FCB" }
            piperv.props.style.height =
              styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
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
            // console.log("position=======>end", current)
            result[piperv.id] = piperv
          }

          // D0C1E 储气干罐   干罐右侧出口一根横线
          if (current.TYPE === "D0C1E" && current.NO === current.LEN - 1) {
            const pipehr2 = pipe("h", "0")
            pipehr2.props.waterstyle = "1"
            pipehr2.props.style = { ...styleMap["h"], fill: "#407FCB" }
            pipehr2.props.style.width = fix(pipehr2.props.style.width)
            pipehr2.props.style.translateX = rX
            // pipehr2.props.style.translateY = pipehr1.props.style.translateY + vheight
            pipehr2.props.style.translateY =
              pipehr1.props.style.translateY +
              styleMap.Acop.height +
              pGap.acopYGap

            pipehr2.props.status = {
              bind: current?.preStates,
              type: "expressions",
            }
            result[pipehr2.id] = pipehr2
            generateText({
              result,
              current,
              item: deviceMap["all"][0],
              index: 1,
              parentStyle: pipehr2.props.style,
              xAxis: 0,
              yAxis: 10,
            })
            generateText({
              result,
              current,
              item: deviceMap["all"][1],
              index: 1,
              parentStyle: pipehr2.props.style,
              xAxis: 80,
              yAxis: 10,
            })
          }
          // rewrite: 生成总管(储气湿罐右侧一根横管)
          // if (tag === "L" && index === (t.length - 1) >> 1 && index !== 0) {
          //   const pipehr2 = pipe("h", "0")
          //   pipehr2.props.waterstyle = "1"
          //   pipehr2.props.style = { ...styleMap["h"], fill: "#407FCB" }
          //   pipehr2.props.style.width = fix(pipehr2.props.style.width / 3)
          //   pipehr2.props.style.translateX = rX - 1
          //   pipehr2.props.style.translateY =
          //     pipehr1.props.style.translateY + +(len % 2 == 0 ? 0 : vheight)
          //   if (str.length > 0) {
          //     pipehr2.props.status = {
          //       bind: str.slice(0, -2),
          //       type: "expressions",
          //     }
          //   } else {
          //     pipehr2.props.status = {
          //       bind: current?.preStates,
          //       type: "expressions",
          //     }
          //   }
          //   // result[pipehr2.id] = pipehr2
          // }
        }
      })
    }
  })
}

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
    translateX:
      parentStyle.translateX +
      (index === 0 ? center - 64 - 10 : center + 20) +
      xAxis,
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
    generateText
}

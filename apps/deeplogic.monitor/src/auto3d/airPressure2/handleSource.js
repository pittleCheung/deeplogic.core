import { nanoid } from "nanoid"
import headDefault, { bottomDefault, footDefault } from "../headDefault"
import {
  bottomid,
  box,
  boxid,
  device,
  footid,
  headid,
  parentbox,
  pipe,
  root,
  rootHeader,
  text,
} from "../nodesDefault"
import { pageDefault, pageLayout } from "../pageDefault"
import { drwaitemair, rootPointAirMap } from "../pageNodeDefault"
import { styleMap } from "../stylesDefault"
import { calcAxis, replace2Gif } from "../util"
import {
  generateText,
  getMaxHieght,
  helpFunction,
  // pGap.acopXGap,
  // pGap.acopYGap,
  pGap,
  position,
} from "./nodesDefault"


// 垂直间隙 80
export const handleSource = (
  source,
  deviceModelMap,
  links,
  global,
  allsource,
) => {
  // let result = {
  //     ROOT: root, // 根节点
  //     [parentbox]: pageDefault(parentbox, boxid, headid, footid),
  //     ...headDefault(headid, parentbox, source, 'air', allsource),
  //     ...pageLayout(parentbox, source, 'air'),
  //     // 页面框架节点
  //     [boxid]: box,
  //     ...footDefault(footid, parentbox, source, 'air'),
  // }
  const { ConHeight } = styleMap
  let result = {
    ROOT: root,
    ...rootHeader,
    [parentbox]: pageDefault(parentbox, boxid, headid, footid, bottomid),
    ...headDefault(headid, parentbox, source, "air", allsource),
    ...pageLayout(parentbox, source, "air"),
    [boxid]: box,
    ...footDefault(footid, parentbox, source, "air"),
    ...bottomDefault(bottomid, parentbox, source, links),
  }
  result.ROOT.props["projId"] = global?.ProjectId
  result.ROOT.props["global"] = {
    ProjectName: global?.ProjectName,
    ProjectId: global?.ProjectId,
  }
  const pointsObject = {
    ...rootPointAirMap(source),
    ...drwaitemair(source),
    [source["MODE_SYS"]?.NAME || "MODE_SYS"]: 0,
    [source["HINT"]?.NAME || "HINT"]: "",
    T_OUTDOOR: 0,
    TW_OUTDOOR: 0,
    RH_OUTDOOR: 0,
  } // 点表映射
  const ACOPS = source?.ACOPS || {} // 空压机
  const ARWTS = source?.ARWTS || {} // 储气湿罐
  const RDRYS = source?.RDRYS || {} // 冷干机
  const DDRYS = source?.DDRYS || {} // 吸干机
  const ARDTS = source?.ARDTS || {} // 储气干罐

  // 初始化预设点表
  onPreExpressInit(ACOPS, ARWTS, RDRYS, DDRYS, ARDTS)

  const idsList = {
    ...ACOPS,
    ...ARWTS,
    ...RDRYS,
    ...DDRYS,
    ...ARDTS,
  }
  // let initTop = (ConHeight - getMaxHieght(ACOPS, ARWTS, RDRYS, DDRYS, ARDTS)) / 2 - 200; // 初始位置
  // initTop = initTop < 0 ? -100 : initTop;
  // 默认的设备距离顶部的高度为-(styleMap.Acop.height + pGap.acopYGap)

  // 计算间距
  const maxHeight = getMaxHieght(ACOPS, ARWTS, RDRYS, DDRYS, ARDTS)

  let gapY = (ConHeight - maxHeight) / (Object.keys(ACOPS).length - 1)

  // 设置间距的最大值和最小值
  if (gapY > 130) {
    pGap.acopYGap = 130
  } else if (gapY < 80) {
    pGap.acopYGap = 80
  }
  // console.log("maxHeight====>", maxHeight, ConHeight, "gapY====>",gapY , pGap.acopYGap)
  // let initTop = -(styleMap.Acop.height + pGap.acopYGap)
  // 默认初始化距离顶部的距离为0
  let initTop = 0

  // 当前空压机数量小于湿罐数量 空压机需要往下移动
  const acopKeys = Object.keys(ACOPS)
  if(acopKeys.length === 0) return; // 没有空压机的情况
  let curlen = acopKeys.length
  // 按照空压机的下一个设备计算 空压机的位置
  // let nextlen = Object.keys(ARWTS).length
  // 按照所有设备最高的设备计算 空压机的位置
  let currNode = ACOPS[acopKeys[0]]
  let maxNodeNumber = Math.max(
    currNode.ARDTS?.length,
    currNode.ARWTS?.length,
    currNode.RDRYS?.length,
    currNode.DDRYS?.length,
  )
  if (curlen < maxNodeNumber) {
    initTop =
      initTop +
      (styleMap.Acop.height + pGap.acopYGap) * Math.abs(curlen - maxNodeNumber) * 0.5
  }

  console.log("initTop======>", currNode)

  let prevX = 0 //前一个节点的横坐标
  // 空压机分组 x: 50, y: height
  const ACOPSobj = {}
  for (let key in ACOPS) {
    const { NEXT_NODE } = ACOPS?.[key] || {}
    if (NEXT_NODE) {
      // 防止 NEXT_NODE 不存在时去序列号导致报错
      const nextNode = JSON.stringify(NEXT_NODE)
      if (ACOPSobj[nextNode]) {
        ACOPSobj[nextNode].push(key)
      } else {
        ACOPSobj[nextNode] = [key]
      }
    }
  }
  // tag 默认是L
  // let tag = "L"
  // for (let key in ACOPSobj) {
  //   // 空压机设备数量 大于等于 下一级的数量
  //   if (ACOPSobj[key].length >= JSON.parse(key).length) {
  //     tag = "R"
  //   }
  // }
  // 考虑下一级设备 大于 空压机设备的数量
  let tag = "R"

  let ACOPSARR = Object.values(ACOPSobj)
  /**
   * 保留一位小数
   */
  const fix = (num) => {
    return Number(Number(num).toFixed(1))
  }
  // 空压机
  // 总管的位置: 在少的那一侧的中间设备上
  // console.log("initTopinitTopinitTop", initTop, ACOPSARR, ACOPSobj) // 当前设备 -100

  // console.log("source=====>", source, ACOPSARR)

  // console.log("len====>0", ACOPS)
  // 两类的情况
  // [
  //     [ 'KpdXsavFmUDYpGuGkuNtGq' ],
  //     [ 'rmZ48XSm2xG2PfR32f8TbM', 'dO0iw_2KrfkCerlRk6Yf6S' ]
  // ]
  // [['KpdXsavFmUDYpGuGkuNtGq','rmZ48XSm2xG2PfR32f8TbM','dO0iw_2KrfkCerlRk6Yf6S']]

  // 多组空压机的情况 统一处理成一组
  let newArr = []
  ACOPSARR.forEach((item) => newArr.push(...item))
  ACOPSARR = [newArr]

  let str0 = ""
  let str1 = ""
  let arr1 = []
  ACOPSARR.forEach((item, index) => {
    // 总管是否在当前侧,就是多设定一个横管
    const len = item.length - 1 // 假设3个空压item  这里的len 第一个类为len=0  第二类为len=1
    // console.log("len====>3 index", len, index)
    let str = ""
    let arr = []
    item.forEach((t0) => {
      str += `${"${" + ACOPS[t0].ONOFF.NAME + "}"}==1||`
      arr.push(ACOPS[t0].ONOFF.NAME)
    })

    item.forEach((t, i) => {
      const current = ACOPS[t]
      const deviceItem = device(
        "Acop",
        current,
        pointsObject,
        deviceModelMap?.ACOPS?.[current.ID],
        // {
        //     width:"104px",
        //     height:"120px"
        // }
      )
      result[deviceItem.id] = deviceItem
      // 计算空压机的位置
      result[deviceItem.id].props.style = {
        ...styleMap["Acop"],
        ...position({
          index: index + i,
          initTop,
          prevX: 0,
        }),
      }
      // target为当前设备Acop的样式
      const target = result[deviceItem.id].props.style

      // const pointItemWrap = pointContainer("Container",boxid)
      // // const pointItem = pointContainer("Container", pointItemWrap.id)
      // // pointItemWrap.nodes = [pointItem.id]
      // // result[pointItem.id] = pointItem
      // pointItemWrap.props.style = {
      //   translateX: target.translateX + target.width,
      //   translateY: target.translateY + target.height * 0.45,
      //   // transform: `translate(${target.translateX + target.width}px, ${target.translateY + target.height * 0.45}px)`,
      //   width: 15,
      //   height: 10,
      //   backgroundColor: "#FA5151",
      //   borderRadius:2
      // }
      // result[pointItemWrap.id] = pointItemWrap

      const pointItemWrap = textPoint(ACOPS[t])
      pointItemWrap.props.style = {
        translateX: target.translateX + target.width + 5,
        translateY: target.translateY + target.height * 0.45,
        width: 15,
        height: 10,
        backgroundColor: "#FA5151",
        borderRadius: 2,
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        alignItems: "center",
        fontSize: 8,
      }
      result[pointItemWrap.id] = pointItemWrap


      // prevX为当前设备X轴的的位移
      prevX = result[deviceItem.id].props.style.translateX

      const nameText = text()
      nameText.props.value = current.NAME
      const [xAxis, center] = calcAxis(deviceItem, current.NAME)
      // console.log("xAxis=====>", xAxis, deviceItem.props.style.width, center)
      nameText.props.style = {
        ...nameText.props.style,
        // translateX: target.translateX + target.width * 0.5 - 20,
        translateX: target.translateX + xAxis,
        translateY: target.translateY + target.height + 10,
      }
      result[nameText.id] = nameText
      ;[
        ["PR_DISCHARGE", "Mpa"],
        ["T_DISCHARGE", "℃"],
      ].forEach((textItem, textIndex) => {
        // generateText(result, textitem, textindex, target);
        generateText({
          result,
          current,
          item: textItem,
          index: textIndex,
          parentStyle: nameText.props.style,
          relativeHeight: styleMap.Acop.height,
          center,
        })
      })
      pointsObject[current.PR_DISCHARGE.NAME] = 0
      pointsObject[current.T_DISCHARGE.NAME] = 0

      const pipeh1 = pipe("h", "0")
      pipeh1.props.waterstyle = "1"
      pipeh1.props.style = { ...styleMap["h"], fill: "#407FCB" }
      // pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.33);
      // pipeh1.props.style.width = fix(pipeh1.props.style.width / 3)
      // 1. 让空压机和储气湿罐直接连接
      // pipeh1.props.style.width = fix(pGap.acopXGap - pipeh1.props.style.width / 2)
      // 2. 让空压机和储气湿罐 不直接连接 而是通过总管连接
      pipeh1.props.style.width = pipeh1.props.style.width / 2
      // 空压连接处管子 X轴位移 位于空压设备右侧
      pipeh1.props.style.translateX = target.translateX + target.width
      // 宽度添加10px 向左添加10px偏移量
      pipeh1.props.style.width = pipeh1.props.style.width + 10
      pipeh1.props.style.translateX = pipeh1.props.style.translateX - 10
      pipeh1.props.style.zIndex = -1
      // pipeh1.props.style.translateY = target.translateY + target.height * 0.7 + styleMap['h'].height;
      // 空压连接处管子 Y轴位移 位于空压设备高度的70%处
      // pipeh1.props.style.translateY = target.translateY + target.height * .7;
      // 用空压机的高度开始算 管子Y轴位于空压机的65%的位置 空压机的高度默认是70(在styleMap中定义了) 其他和空压机连接的设备的高度是60
      // 因此其他设备的管子Y轴的位置 位于该设备的target.translateY + target.height * .65 + (70 - 60) * .65
      pipeh1.props.style.translateY = target.translateY + target.height * 0.65
      pipeh1.props.status = {
        bind: `${"${" + current.ONOFF.NAME + "}"}==1`,
        type: "expressions",
        point: [current.ONOFF.NAME],
      }
      result[pipeh1.id] = pipeh1
      const X = pipeh1.props.style.translateX + pipeh1.props.style.width

      // 总管竖管
      if (item.length % 2 === 0) {
        // 空压是偶数 len >> 1  和 ((len >> 1) + 1) 表示的是中间的两个设备
        const height = styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
        let pipev
        if (i === len >> 1) {
          // 顺时针  中间半根竖管
          pipev = pipe("v", "0")
          pipev.props.waterstyle = "1"
          pipev.props.style = { ...styleMap["v"], fill: "#407FCB" }
          pipev.props.style.height = height / 2
          pipev.props.style.translateX = X
          pipev.props.style.translateY = pipeh1.props.style.translateY
          str0 += `${"${" + ACOPS[item[i]].ONOFF.NAME + "}"}==1||`
          pipev.props.status = {
            bind: str0.slice(0, -2),
            type: "expressions",
            point: onPoints(str0.slice(0, -2)),
          }
        } else if (i === (len >> 1) + 1) {
          // 逆时针 中间半根竖管子
          pipev = pipe("v", "1")
          pipev.props.waterstyle = "1"
          pipev.props.style = { ...styleMap["v"], fill: "#407FCB" }
          pipev.props.style.height = height / 2
          pipev.props.style.translateX = X
          pipev.props.style.translateY =
            pipeh1.props.style.translateY -
            pipev.props.style.height +
            styleMap.h.height
          // 偶数的情况 i表示的是中间的两个设备的第二个设备
          str1 = ""
          // 逆时针点表和顺时针的点表方向相反
          for (let j = i; j <= len; j++) {
            str1 += `${"${" + ACOPS[item[j]].ONOFF.NAME + "}"}==1||`
          }
          pipev.props.status = {
            bind: str1.slice(0, -2),
            type: "expressions",
            point: onPoints(str1.slice(0, -2)),
          }
        } else {
          // 上部分顺时针竖管 和 下部分逆时针竖管
          pipev = pipe("v", i >= len >> 1 ? "1" : "0")
          pipev.props.waterstyle = "1"
          pipev.props.style = { ...styleMap["v"], fill: "#407FCB" }
          pipev.props.style.height = height
          pipev.props.style.translateX = X
          pipev.props.style.translateY = pipeh1.props.style.translateY
          if (i >= len >> 1) {
            // 大于中间位置的管子往上画竖管 逆时针
            pipev.props.style.translateY =
              pipev.props.style.translateY - height + styleMap.h.height
            // 偶数的情况 i表示的是中间的两个设备的第二个设备
            str1 = ""
            // 逆时针点表和顺时针的点表方向相反
            for (let j = i; j <= len; j++) {
              str1 += `${"${" + ACOPS[item[j]].ONOFF.NAME + "}"}==1||`
            }
            pipev.props.status = {
              bind: str1.slice(0, -2),
              type: "expressions",
              point: onPoints(str1.slice(0, -2)),
            }
          } else {
            //  小于中间位置的管子往下画竖管 顺时针
            str0 += `${"${" + ACOPS[item[i]].ONOFF.NAME + "}"}==1||`
            pipev.props.status = {
              bind: str0.slice(0, -2),
              type: "expressions",
              point: onPoints(str0.slice(0, -2)),
            }
          }
        }
        result[pipev.id] = pipev
      } else {
        // 空压是奇数 点表ok
        if (i !== len) {
          // i !== len表示最后一个设备的竖管不显示
          const pipev = pipe("v", i >= len >> 1 ? "1" : "0")
          pipev.props.waterstyle = "1"
          pipev.props.style = { ...styleMap["v"], fill: "#407FCB" }
          const height =
            styleMap.Acop.height + pGap.acopYGap + styleMap.h.height
          pipev.props.style.height = height
          pipev.props.style.translateX = X
          pipev.props.style.translateY = pipeh1.props.style.translateY
          if (i >= len >> 1) {
            // 1 表示逆时针 i表示的是中间的那个设备
            str1 = ""
            // 逆时针点表和顺时针的点表方向相反
            for (let j = i + 1; j <= len; j++) {
              str1 += `${"${" + ACOPS[item[j]].ONOFF.NAME + "}"}==1||`
            }
            pipev.props.status = {
              bind: str1.slice(0, -2),
              type: "expressions",
              point: onPoints(str1.slice(0, -2)),
            }
          } else {
            // 0 顺时针
            str0 += `${"${" + ACOPS[item[i]].ONOFF.NAME + "}"}==1||`
            pipev.props.status = {
              bind: str0.slice(0, -2),
              type: "expressions",
              point: onPoints(str0.slice(0, -2)),
            }
          }
          result[pipev.id] = pipev
        }
      }
      // 中间一根横管(总管) 点表ok  item.length>>1用于找到中间位置
      if (i === item.length >> 1) {
        const pipeh2 = pipe("h", "0")
        pipeh2.props.waterstyle = "1"
        pipeh2.props.style = { ...styleMap["h"], fill: "#407FCB" }
        pipeh2.props.style.width = fix(pGap.acopXGap - styleMap.h.width)
        pipeh2.props.style.translateX = X
        pipeh2.props.style.translateY = pipeh1.props.style.translateY
        // 空压为偶数的情况 需要一个减去半个pGap.acopYGap 居中
        if (item.length % 2 === 0) {
          pipeh2.props.style.translateY =
            pipeh1.props.style.translateY -
            (pGap.acopYGap + styleMap.Acop.height) / 2
        }
        pipeh2.props.style.zIndex = -1
        pipeh2.props.status = {
          bind: str.slice(0, -2),
          type: "expressions",
          point: onPoints(str.slice(0, -2)),
        }
        result[pipeh2.id] = pipeh2
      }

      if (i == 0) {
        const nextlen = current.NEXT_NODE?.length
        const curlen = item.length
        current.NEXT_NODE.forEach((d) => {
          d.LEN = nextlen
        })
        let newInitTop = initTop
        if (curlen === nextlen) {
          // 啥都不做
        } else if (curlen > nextlen) {
          // 空压设备数量大于下一个设备数量
          newInitTop =
            newInitTop +
            (styleMap.Acop.height + pGap.acopYGap) * (curlen - nextlen) * 0.5
        } else {
          // 当前空压机数量小于湿罐数量 空压机需要往上移动 那么湿罐需要往上移动
          newInitTop =
            newInitTop +
            (styleMap.Acop.height + pGap.acopYGap) *
              Math.abs(curlen - nextlen) *
              -0.5
        }
        helpFunction({
          arr: current.NEXT_NODE,
          result,
          tag,
          prevX,
          // initTop: initTop + (curlen - nextlen) * pipevHeight * 0.5,
          initTop: newInitTop,
          lastdevice: result[deviceItem.id],
          idsList,
          deviceModelMap,
          lastLen: item.length,
          pointsObject,
        })
      }
    })
  })
  const boxidChild = Object.values(result).filter((t) => t?.parent === boxid)
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
    "3GQM1xL3jA": {
      type: {
        resolvedName: "Container",
      },
      isCanvas: true,
      props: {
        style: {
          position: "relative",
          width: "100%",
          height: "68px",
          widthType: "relative",
          heightType: "fixed",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: "left",
          spacing: 0,
          paddingSide: "side",
          padding: 0,
          marginSide: "side",
          margin: 0,
          background:
            "linear-gradient(rgba(25, 28, 44, 1), rgba(25, 28, 44, 1))",
          backgroundList: [
            {
              id: "EKzxxXgFQm",
              type: "color",
              key: "EKzxxXgFQm",
              value: "rgba(25, 28, 44, 1)",
              disabled: false,
            },
          ],
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 20,
          paddingTop: 0,
          paddingRight: 10,
          paddingLeft: 30,
          paddingBottom: 0,
          display: "flex",
          flexDirection: "row",
          key: "centerLeft",
          justifyContent: "flex-start",
          alignItems: "center",
          widthUnit: "%",
          heightUnit: "px",
        },
        displayName: "Container",
      },
      displayName: "Container",
      custom: {},
      parent: "ROOT",
      hidden: false,
      nodes: ["r8EFbkcVe0", "YdPQ0AdAa_"],
      linkedNodes: {},
    },
    r8EFbkcVe0: {
      type: {
        resolvedName: "TypographyText",
      },
      isCanvas: false,
      props: {
        displayName: "Typography.Text",
        value: {
          bind: "ProjectName",
          type: "global",
        },
        events: {},
        style: {
          position: "relative",
          width: "100%",
          height: "auto",
          widthType: "relative",
          heightType: "fit-content",
          fontSize: 18,
          fontWeight: "bolder",
          lineHeight: 1.5,
          textAlign: "left",
          spacing: 0,
          paddingSide: "all",
          padding: 0,
          marginSide: "all",
          margin: 0,
        },
      },
      displayName: "TypographyText",
      custom: {},
      parent: "3GQM1xL3jA",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    YdPQ0AdAa_: {
      type: {
        resolvedName: "Container",
      },
      isCanvas: true,
      props: {
        style: {
          position: "relative",
          width: "300px",
          height: "auto",
          widthType: "fixed",
          heightType: "fit-content",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: "left",
          spacing: 0,
          paddingSide: "all",
          padding: 0,
          marginSide: "all",
          margin: 0,
          background: null,
          backgroundList: [],
          widthUnit: "px",
          display: "flex",
          flexDirection: "row",
          key: "centerRight",
          justifyContent: "flex-end",
          alignItems: "center",
        },
        displayName: "Container",
      },
      displayName: "Container",
      custom: {},
      parent: "3GQM1xL3jA",
      hidden: false,
      nodes: ["6sMAEekVGW", "HwVZcC64He"],
      linkedNodes: {},
    },
    HwVZcC64He: {
      type: {
        resolvedName: "GenericIcon",
      },
      isCanvas: false,
      props: {
        displayName: "GenericIcon",
        icon: "LogoutOutlined",
        events: {
          onClick: {
            action: "logout",
          },
        },
        style: {
          position: "relative",
          width: "100%",
          height: "auto",
          widthType: "relative",
          heightType: "fit-content",
          fontSize: 18,
          fontWeight: "bolder",
          lineHeight: 1.5,
          textAlign: "left",
          spacing: 0,
          paddingSide: "all",
          padding: 0,
          marginSide: "side",
          margin: 0,
          color: "rgb(255, 255, 255)",
          marginTop: 0,
          marginRight: 20,
          marginLeft: 40,
          marginBottom: 0,
        },
      },
      displayName: "GenericIcon",
      custom: {},
      parent: "YdPQ0AdAa_",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    "6sMAEekVGW": {
      type: {
        resolvedName: "Menu",
      },
      isCanvas: false,
      props: {
        theme: "light",
        multiple: false,
        selectable: true,
        inlineIndent: 24,
        mode: "horizontal",
        triggerSubMenuAction: "hover",
        value: "2",
        selectedKeys: "2",
        items: [
          {
            id: "1",
            label: "首页",
            key: "1",
            disabled: false,
            links: {
              action: "navigateTo",
              link: links?.[0],
            },
          },
          {
            id: "2",
            label: "监控",
            key: "2",
            disabled: false,
            links: {
              action: "navigateTo",
              link: links?.[1],
            },
          },
          {
            id: "3",
            label: "能耗",
            key: "3",
            disabled: false,
            links: {
              action: "navigateTo",
              link: links?.[2],
            },
          },
          {
            id: "4",
            label: "报警",
            key: "4",
            disabled: false,
            links: {
              action: "navigateTo",
              link: links?.[3],
            },
          },
          {
            id: "5",
            label: "报表",
            key: "5",
            disabled: false,
            links: {
              action: "navigateTo",
              link: links?.[4],
            },
          },
        ],
        style: {
          position: "relative",
          width: "300px",
          height: "auto",
          widthType: "fixed",
          heightType: "fit-content",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "46px",
          textAlign: "left",
          spacing: 0,
          paddingSide: "all",
          padding: 0,
          marginSide: "all",
          margin: 0,
          borderBottomWidth: 0,
          background: "transparent",
          backgroundList: [],
          widthUnit: "px",
        },
        displayName: "Menu",
      },
      displayName: "Menu",
      custom: {},
      parent: "3GQM1xL3jA",
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  }
  // console.log('result', result)
  // return result;
  return replace2Gif(result)
}

export function onPoints(inputString) {
  if (!inputString) return
  // 使用正则表达式提取模式 `${...}`
  const regex = /\${(.*?)}/g
  let matches
  const result = []
  // 使用正则表达式匹配所有符合条件的字符串
  while ((matches = regex.exec(inputString)) !== null) {
    result.push(matches[1])
  }
  return result
}

function onRYS(arr) {
  let str0 = "",
    str1 = ""
  let len = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      // 偶数
      if (i === len >> 1) {
        // 中间第一个设备 顺时针
        str0 += `${"${" + arr[i].ONOFF.NAME + "}"}==1||`
        arr[i].preStates = str0
      } else if (i === (len >> 1) + 1) {
        // 中间第二个设备 逆时针
        for (let j = i; j <= len; j++) {
          str1 += `${"${" + arr[j].ONOFF.NAME + "}"}==1||`
        }
        arr[i].preStates = str1
      } else {
        // 上部分 和 下部分设备 和奇数逻辑大体一样 区别:偶数的j从i开始
        if (i >= len >> 1) {
          // 逆时针
          str1 = ""
          for (let j = i; j <= len; j++) {
            str1 += `${"${" + arr[j].ONOFF.NAME + "}"}==1||`
          }
          arr[i].preStates = str1
        } else {
          // 顺时针
          str0 += `${"${" + arr[i].ONOFF.NAME + "}"}==1||`
          arr[i].preStates = str0
        }
      }
    } else if (i !== len) {
      // 奇数 并且不是最后一台
      if (i >= len >> 1) {
        // 逆时针
        str1 = ""
        for (let j = i + 1; j <= len; j++) {
          str1 += `${"${" + arr[j].ONOFF.NAME + "}"}==1||`
        }
        arr[i].preStates = str1
      } else {
        // 顺时针
        str0 += `${"${" + arr[i].ONOFF.NAME + "}"}==1||`
        arr[i].preStates = str0
      }
    }
  }
}

function onPreExpressInit(ACOPS, ARWTS, RDRYS, DDRYS, ARDTS) {
  // 储气湿罐预设表达式
  for (const t in ARWTS) {
    let str = ""
    let points = []
    for (const t0 in ACOPS) {
      str += `${"${" + ACOPS[t0].ONOFF.NAME + "}"}==1||`
      points.push(ACOPS[t0].ONOFF.NAME)
    }
    str.slice(-2)
    ARWTS[t].preStates = str // 设备预设表达式
    ARWTS[t].prePipeStates = str // 管子预设表达式
    ARWTS[t].prePoints = points
  }
  // 冷干机
  let arrRDRYS = []
  for (const t in RDRYS) {
    let str = ""
    let points = []
    for (const t0 in RDRYS) {
      str += `${"${" + RDRYS[t0].ONOFF.NAME + "}"}==1||`
      points.push(RDRYS[t0].ONOFF.NAME)
      // arr.push(RDRYS[t0])
    }
    points.push(RDRYS[t].ONOFF.NAME)
    arrRDRYS.push(RDRYS[t])
    // console.log("current=====>", arr)
    RDRYS[t].prePipeStates = str
    RDRYS[t].prePoints = points
  }
  onRYS(arrRDRYS)

  // 吸干机
  let arrDDRYS = []
  for (const t in DDRYS) {
    let str = ""
    let points = []
    for (const t0 in DDRYS) {
      str += `${"${" + DDRYS[t0].ONOFF.NAME + "}"}==1||`
      points.push(DDRYS[t0].ONOFF.NAME)
    }
    points.push(DDRYS[t].ONOFF.NAME)
    arrDDRYS.push(DDRYS[t])
    DDRYS[t].prePipeStates = str
    DDRYS[t].prePoints = points
  }
  onRYS(arrDDRYS)

  for (const t in ARDTS) {
    let str = ""
    let points = []
    let obj = {}
    // 吸干机不存在 储气干罐表达式 使用冷干机判断
    if (Object.keys(DDRYS).length !== 0) {
      obj = DDRYS
    } else {
      obj = RDRYS
    }
    for (const t0 in obj) {
      str += `${"${" + obj[t0].ONOFF.NAME + "}"}==1||`
      points.push(obj[t0].ONOFF.NAME)
    }
    str.slice(-2)
    ARDTS[t].preStates = str
    ARDTS[t].prePoints = points
  }
}

function pointContainer(type,boxid) {
  const containerId = nanoid(10)
  return {
    id: containerId,
    type: {
      resolvedName: type,
    },
    displayName: type,
    props: {
      style: {},
      class: "zhangsan",
      displayName: "Container",
    },
    nodes: [],
    linkedNodes: {},
    custom: {},
    hidden: false,
    isCanvas: true,
    parent: boxid,
  }
}


export const textPoint = (source) => {
  const id = nanoid(10)
  return {
    id,
    type: {
      resolvedName: "TypographyText",
    },
    displayName: "TypographyText",
    props: {
      displayName: "Typography.Text",
      value: {
        bind: source.LOAD_ST?.NAME,
        type: "points",
      },
      value:1,
      status: [
        {
          id: "rYycDgubH4",
          label: "L",
          value: "1",
          expression: {
            bind: source.LOAD_ST?.NAME,
            type: "points",
          },
          color: "#FFF",
          backgroundColor: "#00B032",
        },
        {
          id: "0XiqiE1kOn",
          label: "",
          value: "0",
          expression: {
            bind: `\${${source.LOAD_ST?.NAME} || 0}`,
            type: "expressions",
          },
          color: "transparent",
          backgroundColor: "transparent",
        },
        // {
        //   id: "0XiqiE1kOn",
        //   label: "U",
        //   value: "0",
        //   expression: "#FA5151",
        //   color: "rgba(115, 209, 61, 1)",
        //   backgroundColor: "transparent",
        // },
      ],
    },
    parent: boxid,
    nodes: [],
    custom: {},
    nodes: [],
    linkedNodes: {},
    hidden: false,
    isCanvas: false,
  }
}


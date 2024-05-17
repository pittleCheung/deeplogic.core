/**
 * 默认样式
 * 根据索引和类型画出对应的样式
 */
// containerdraw容器中 144为上顶部 168为下底部
// const ConHeight = document.documentElement.clientHeight - 144 - 168; // 容器默认高度 
// const ConHeight = document.documentElement.clientHeight - 144 - 80; // 容器默认高度
const ConHeight = document.documentElement.clientHeight - 139 - 80; // ConHeight为容器默认高度 139为上部分高  80为底下高


const commonStyle = {
    translateX: 0,
    translateY: 0,
    scale: 1,
    fill: '#7D8B9A',
    stroke: '#000',
    strokeWidth: 1,
    opacity: 1,
    borderRadius: 0,
    zIndex: 1,
    rotate: 0
}
export const commonTextStyle = {
    "position": "relative",
    "width": "100%",
    "height": "auto",
    "widthType": "relative",
    "heightType": "fit-content",
    "fontFamily": "PingFang SC",
    "fontSize": 14,
    "fontWeight": 400,
    "lineHeight": 1.5,
    "textAlign": "left",
    "spacing": 0,
    "paddingSide": "all",
    "padding": 0,
    "marginSide": "all",
    "margin": 0,
}

// const chlWH = { width: 105, height: 69, }; // 冷机
// const pumpWH = { width: 25, height: 40, }; // 水泵
// const ctWH = { width: 60, height: 57, };  // 冷却塔

// 新设计稿设备宽高度
const chlWH = { width: 166, height: 80, }; // 冷机
const pumpWH = { width: 32, height: 50, }; // 水泵
const ctWH = { width: 66, height: 80, };  // 冷却塔

const hWH = { width: 150, height: 5, fill: '' }; 
const vWH = { width: 5, height: 150, fill: '' }; 
const ACOPStyle = { ...commonStyle, width: 90, height: 70 };
const DDRYStyle = { ...commonStyle, width: 65, height: 60 }; // margin 10
const RDRYStyle = { ...commonStyle, width: 55, height: 60 }; // margin 10
const ARWTStyle = { ...commonStyle, width: 30, height: 60 }; // margin 10
const ARDTStyle = { ...commonStyle, width: 30, height: 60 }; // margin 10
const chlStyle = { ...commonStyle, ...chlWH }; // 冷机默认样式
const pumpStyle = { ...commonStyle, ...pumpWH }; // 水泵默认样式
const ctStyle = { ...commonStyle, ...ctWH }; // 冷却塔默认样式
const pipeHStyle1 = { ...commonStyle, ...hWH }; // 横管
const pipeVStyle = { ...commonStyle, ...vWH }; // 竖管
const pipeWStyle = { ...commonStyle, width: 12, height: 12, zIndex: 5 }; // 弯头
const pipeTStyle = { ...commonStyle, width: 16, height: 12, zIndex: 5 }; // 三头
const pipeCStyle = { ...commonStyle, width: 16, height: 16, zIndex: 5 }; // 十字头
const valveStyle = { ...commonStyle, width: 15, height: 19, zIndex: 10 }
export const styleMap = {
    CHLS: chlStyle,
    CHWPS: pumpStyle,
    CWPS: pumpStyle,
    CTS: ctStyle,
    v: pipeVStyle,
    w: pipeWStyle,
    c: pipeCStyle,
    h: pipeHStyle1,
    t: pipeTStyle,
    Valve: valveStyle,
    Acop: ACOPStyle,
    DesDryer: DDRYStyle,
    RefDryer: RDRYStyle,
    WetTank: ARWTStyle,
    Tank: ARDTStyle,
    ConHeight
};
// export const deviceMargin = {
//     CHLS: 34,
//     Pump: 63,
//     CTS: 46,
//     CHWPS: 63,
//     CWPS: 63
// }; // 设备垂直边距

export const deviceMargin = {
    CHLS: 34,
    Pump: 63,
    // CTS: 46,
    CTS:31,
    CHWPS: 63,
    CWPS: 63
}; // 设备垂直边距

// 设备X轴之间的间隙


export let deviceXGap = 0;


const deviceTranformX = {};    // 设备水平位移
let deviceTotalTransformY = 0; // 设备总的最大垂直位移
// ['制冷机 CHLS', '冷冻泵 CHWPS', '冷却泵 CWPS', '冷却塔 CTS', '阀门 DVS'];
export const deviceNumToole = (obj) => {
  const { CHLS, CHWPS, CWPS, CTS } = obj; // 设备数量
  // 动态计算deviceMargin
  const maxH = Math.max(...Object.values(obj)); // 计算最多的设备数量
  // 方式1: 默认用冷机的高度算: 冷机间隙 = 可视化内容高度 / 最多的设备数量 - 冷机数量 * 冷机高度;
  // let CHLSH = ConHeight / maxH - CHLS * chlWH.height;
  // 方式2: 默认用冷机的高度算: 设备间隙  = (可视化内容高度 - 冷机数量 * 冷机高度) / 最多的设备数量
  // Y轴上下两侧留白区域
  const paddingY = 0
  let CHLSMarginHeight = (ConHeight - CHLS * chlWH.height - paddingY * 2) / maxH;
  // 计算冷机设备垂直间隙限定最大值 大于100取100 小于80取80间距  小于50取50间距
  // CHLSMarginHeight = CHLSMarginHeight > 100 ? 100 : (CHLSMarginHeight < 80 ? (CHLSMarginHeight < 50 ? 50 : CHLSMarginHeight) : CHLSMarginHeight);
  console.log("CHLSMarginHeight======>1", CHLSMarginHeight)
  CHLSMarginHeight = CHLSMarginHeight > 40 ? 40 : CHLSMarginHeight
  // 计算冷机设备垂直间隙限定最小值
  // CHLSMarginHeight = CHLSMarginHeight < 35 ? 35 : CHLSMarginHeight;
  if (CHLS < 4) {
    CHLSMarginHeight = 45
  }else{
    CHLSMarginHeight = 30
  }
  
  console.log("CHLSMarginHeight======>2", CHLSMarginHeight, CHLS)
  // 拼接设备间隙
  deviceMargin.CHLS = deviceMargin.CHLS + CHLSMarginHeight;
  deviceMargin.Pump = deviceMargin.Pump + CHLSMarginHeight;
  deviceMargin.CTS = deviceMargin.CTS + CHLSMarginHeight;
  deviceMargin.CHWPS = deviceMargin.CHWPS + CHLSMarginHeight;
  deviceMargin.CWPS = deviceMargin.CWPS + CHLSMarginHeight;

  //  console.log("CHLSMarginHeight======>3", deviceMargin.Pump )
  
  const newobj = {
    CHLS: (deviceMargin.CHLS + chlStyle.height) * CHLS,
    CHWPS: (deviceMargin.CHWPS + pumpStyle.height) * CHWPS,
    CWPS: (deviceMargin.CWPS + pumpStyle.height) * CWPS,
    CTS: (deviceMargin.CTS + ctStyle.height) * CTS
  };

// 距离顶部和底部平均的偏移距离 = (容器高度 - 设备区域最大跨度 - 设备跨度) / 2
 deviceTotalTransformY =
   (ConHeight - Math.max(...Object.values(newobj))) / 2

 deviceTotalTransformY = deviceTotalTransformY > 0 ? deviceTotalTransformY : 0

  // console.log("newobj=====>", newobj, deviceTotalTransformY, ConHeight)
  //   deviceTotalTransformY = deviceTotalTransformY > 150 ? 150 : deviceTotalTransformY; // 最大垂直距离小于150
  deviceTotalTransformY = deviceTotalTransformY < 100 ? 100 : deviceTotalTransformY; // 最大垂直距离小于100为100
  //  deviceTotalTransformY = 0;

  // 计算横向设备之间的间隙 宽度默认先写死1400px 
  let canvasWidth = 1400;
  // if(window.screen.width > 2000){
  //     canvasWidth = 1600
  // }
  // X轴左右两侧留白区域
  const paddingX = 100;
  // 设备之间的间隙 = (容器区域-所有设备宽度-两侧留白宽度) / (设备种类数量 - 1)
  deviceXGap =
    (canvasWidth - chlWH.width - pumpWH.width * 2 - ctWH.width - 2 * paddingX) /
    (4 - 1)
  // 从冷却塔开始算 起始位置给一个paddingX
  deviceTranformX.CTS = paddingX; 
  deviceTranformX.CWPS =
    ctStyle.width + deviceTranformX.CTS + deviceXGap
  deviceTranformX.CHLS = pumpStyle.width + deviceTranformX.CWPS + deviceXGap
  deviceTranformX.CHWPS = chlStyle.width + deviceTranformX.CHLS + deviceXGap
  
  // 
  // deviceTranformX.CTS = hWH.width / 3 + pipeTStyle.width + 100; // 150 / 3 + 16 + 100 => 横管1/3 + 三头 + 100  = 166 从冷却塔开始算
  // // 冷却塔宽度 + 横管宽度 + 三头宽度*2 + 冷却塔位移 
  // deviceTranformX.CWPS = ctStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CTS;
  // deviceTranformX.CHLS = pumpStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CWPS;
  // deviceTranformX.CHWPS = chlStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CHLS;

  console.log(
    "newobj======>",
    newobj,
    "deviceMargin====>",
    deviceMargin,
    ConHeight,
    "maxH===>",
    maxH,
    "CHLS====>",
    CHLS,
    "CHLSMarginHeight",
    CHLSMarginHeight,
    "deviceXGap====>",
    deviceXGap,
  )
  localStorage.setItem(
    "test",
    JSON.stringify({
      deviceMargin,
      ConHeight,
      maxH,
      CHLSMarginHeight,
      deviceTotalTransformY,
      deviceXGap,
    }),
  )

}
/**
 * 设备位移
 * @param index 设备索引
 * @param type 设备类型
 */
export const deviceTranform = (index, type, tag) => {
    const translateY = deviceTotalTransformY + deviceMargin[type] * index + styleMap[type].height * index + tag;
    return {
        translateY,
        translateX: deviceTranformX[type],
    }
}
/**
 * 文本框位置
 */
export const textTransform = ({
  translateX,
  translateY,
  xAxis = 0,
  yAxis = 0,
}) => {
  return {
    translateX: translateX + xAxis,
    translateY: translateY + yAxis,
  }
}
/**
 * 系统文本框位置
 */
export const textSystemTransform = (data, tag, other) => {
    return {
        translateX: data.props.style.translateX + data.props.style.width * 0.5 - (tag ? 8 : 3) + (other || 0),
        translateY: data.props.style.translateY + (tag ? 13 : 25 * -1 - 5)
    }
}
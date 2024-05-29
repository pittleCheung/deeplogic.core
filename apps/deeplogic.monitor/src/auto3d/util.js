export function replace2Gif(result) {
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
export const calcAxis = (resultMap, deviceName, font = "12px Arial") => {
  const width = getTextWidth(deviceName, font)
  const xAxis = (resultMap.props.style.width - width) / 2

  // console.log('calcAxis=======>', resultMap.props.style.width, width);
  return xAxis
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

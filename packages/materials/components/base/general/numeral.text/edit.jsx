import { theme, Typography } from "antd"
import cls from "classnames"
import { memo, useMemo } from "react"
import { craft } from "../../../_utils/utils"
import { useComponent } from "../../../useComponent"
import css from "./_style"
import styleModule from "./index.module.less"
import meta from "./meta"
function StateText(props) {
  const { token } = theme?.useToken()
  const { state, connectDrag } = useComponent(props)

  if (!state) return null

  /**
   * @description: 格式化值
   */
  const formatVale = useMemo(() => {
    const num = parseFloat(state?.value || 0)
    if (isNaN(num)) {
      return state?.value
    }
    let { percent, decimalSeparator } = state || {}
    // toFixed 最多支持小数点后100位
    decimalSeparator = Math.max(0, Math.min(100, decimalSeparator || 0))
    if (percent) {
      return (num * 100).toFixed(decimalSeparator) + "%"
    } else if (decimalSeparator !== undefined) {
      return num.toFixed(decimalSeparator)
    } else {
      return num.toString()
    }
  }, [state?.value, state?.percent, state?.decimalSeparator])

  const style = useMemo(() => {
    const { borderColor, transform, ...otherStyle } = state.style || {}
    // 处理边框渐变色,只能通过 border-image 设置
    const hasBorderColorGradient = borderColor?.includes("linear-gradient")
    return {
      before: {
        color: state?.before?.color,
        fontSize: state?.before?.size || 14,
        wordBreak: "normal",
      },
      title: {
        ...otherStyle,
        ...(hasBorderColorGradient
          ? { borderImage: borderColor }
          : { borderColor }),
      },
      after: {
        color: state?.after?.color,
        fontSize: state?.after?.size || 14,
        wordBreak: "normal",
      },
    }
  }, [state.style, state?.before, state?.after])
  console.log("state: ", state, style.title)

  return (
    <div className={cls(css.status(token))} ref={connectDrag}>
      {state?.isBefore && (
        <Typography.Text
          type={state?.before?.type}
          strong={state?.before?.strong}
          italic={state?.before?.italic}
          underline={state?.before?.underline}
          disabled={state?.before?.disabled}
          mark={state?.before?.mark}
          keyboard={state?.before?.keyboard}
          code={state?.before?.code}
          style={style.before}>
          {state?.before?.value}
        </Typography.Text>
      )}
      <div style={style.title} className={styleModule["numeral-text"]}>
        {formatVale}
      </div>
      {state?.isAfter && (
        <Typography.Text
          type={state?.after?.type}
          strong={state?.after?.strong}
          italic={state?.after?.italic}
          underline={state?.after?.underline}
          disabled={state?.after?.disabled}
          mark={state?.after?.mark}
          keyboard={state?.after?.keyboard}
          code={state?.after?.code}
          style={style.after}>
          {state?.after?.value}
        </Typography.Text>
      )}
    </div>
  )
}

StateText.craft = craft(meta)

export default memo(StateText)

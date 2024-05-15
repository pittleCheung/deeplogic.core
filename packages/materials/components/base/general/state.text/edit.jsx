import { theme, Typography } from 'antd';
import cls from 'classnames';
import { isObject } from 'lodash-es';
import { memo, useMemo } from 'react';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import css from './_style';
import meta from './meta';

function StateText(props) {
  const { token } = theme?.useToken();
  const { state, connectDrag } = useComponent(props);

  if (!state) return null;

  /**
   * @description: 格式化值
   */
  const formatVale = useMemo(() => {
    const num = parseFloat(state?.value || 0);
    if (isNaN(num)) {
      if (isObject(state?.value)) {
        return state?.value?.bind ? `$\{${state?.value?.bind}\}` : '-';
      }
      return state?.value;
    }

    if (state?.percent) {
      return (num * 100).toFixed(state?.decimalSeparator) + '%';
    } else if (state?.decimalSeparator !== undefined) {
      return num.toFixed(state?.decimalSeparator);
    } else {
      return num.toString();
    }
  }, [state?.value, state?.percent, state?.decimalSeparator]);
  // console.log('formatVale-edit: ', formatVale, state, props);

  const style = useMemo(() => {
    const { borderColor, ...otherStyle } = state.style || {};
    // 处理边框渐变色,只能通过 border-image 设置
    const hasBorderColorGradient = borderColor?.includes('linear-gradient');
    return {
      before: {
        color: state?.before?.color,
        fontSize: state?.before?.size || 12
      },
      title: {
        ...otherStyle,
        ...(hasBorderColorGradient ? { borderImage: borderColor } : { borderColor })
      },
      after: {
        color: state?.after?.color,
        fontSize: state?.after?.size || 12
      }
    };
  }, [state.style, state?.before, state?.after]);
  // console.log('style: ', state,style);

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
          style={style.before}
        >
          {state?.before?.value}
        </Typography.Text>
      )}
      {/* <Typography.Title
                level={Number(state?.level)}
                type={state?.type}
                strong={state?.strong}
                italic={state?.italic}
                underline={state?.underline}
                disabled={state?.disabled}
                mark={state?.mark}
                keyboard={state?.keyboard}
                code={state?.code}
                style={style.title}
            >
                {formatVale}
            </Typography.Title> */}
      <div style={style.title}>{formatVale}</div>
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
          style={style.after}
        >
          {state?.after?.value}
        </Typography.Text>
      )}
    </div>
  );
}

StateText.craft = craft(meta);

export default memo(StateText);

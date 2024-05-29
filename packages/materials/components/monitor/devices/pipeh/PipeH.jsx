/**
 * 横向管道
 */
import cls from 'classnames';
import equal from 'fast-deep-equal';
import { memo } from 'react';
import { EFAULT_PUMP_MAP } from '../../../../global';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import '../../index.less';
import NodesBox from '../../nodes/nodesBox';
import css from '../_style';
import meta from './meta';

function PipeH(props) {
  const { ext } = props;
  const { state, connectRef, enabled } = useComponent(props);

  if (!state) return null;

  const { status, style, waterstyle, direction } = state;
  const { height } = style;
  const fill = style?.fill || EFAULT_PUMP_MAP[waterstyle]?.[0];

  // const animationVariants = {
  //   animate: {
  //     x: [-100, 0], // 假设-100是初始位置，0是结束位置
  //     transition: {
  //       x: {
  //         repeat: Infinity, // 无限重复
  //         repeatType: 'loop', // 循环动画
  //         duration: 2, // 动画时长，单位秒
  //         ease: 'linear' // 线性动画
  //       }
  //     }
  //   }
  // };

  /**
   * 蓝色对应颜色 ECF2F9
   */
  return (
    <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height={height}
        width='100%'
        // fill={fill}
        color={fill}
        ref={connectRef}
        style={{ width: '100%', height }}
      >
        <path d='M0 0H16000' stroke='currentColor' shape-rendering='crispEdges' stroke-width='100%' />
        <path
          d={`M0 ${height * 0.5}H16000`}
          className={
           !enabled && status
              ? direction === '0'
                ? `${cls(
                    css.water_flow({
                      color: EFAULT_PUMP_MAP?.[fill] || '#fff',
                      height: height * 0.5
                    })
                  )} water_flow`
                : `${cls(
                    css.reverse_awter_flow({
                      color: EFAULT_PUMP_MAP?.[fill] || '#fff',
                      height: height * 0.5
                    })
                  )} reverse_awter_flow`
              : ''
          }
        />
      </svg>
    </NodesBox>
  );
}

PipeH.craft = craft(meta);

export default memo(PipeH, equal);

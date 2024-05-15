import equal from 'fast-deep-equal/es6';
import { isEmpty } from 'lodash-es';
import { memo, useEffect, useRef, useState } from 'react';
import { craft } from '../../../_utils/utils';
import { Drag } from '../../../common';
import { useComponent } from '../../../useComponent';
import LogList from './LogList';
import meta from './meta';

function LogsRoller(props) {
  const { state, connectDrag, enabled } = useComponent(props);
  const [logs, setLogs] = useState([])

  // 定时器ID
  let timerRef = useRef(0);

  if (!state) return null;

  // 获取组件属性
  const { value, number, standByText = '就绪', standByDelay = 180} = state;
  // console.log('number: ', number);

  // 记录日志数据
  useEffect(() => {
    if (!isEmpty(value)) {
      const list = [...logs]
      while (list.length >= number) {
        list.pop();
      }
      list.unshift({ time: new Date(), log: value });
      setLogs(list)
    }
  }, [value]);

  // 处理最后一次日志变化，以及定时器
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = 0;
    }
    timerRef.current = setTimeout(() => {
      setLogs([{ log: standByText}]);
      clearTimeout(timerRef.current);
      timerRef.current = 0;
    }, standByDelay * 1000);

    // 清除timeout
    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = 0;
    };
  }, [value, standByDelay, standByText]);

  return enabled ? (
    <Drag connectDrag={connectDrag}>
      <LogList logs={logs} {...state} />
    </Drag>
  ) : (
    <LogList logs={logs} {...state} />
  );
}

LogsRoller.craft = craft(meta);

export default memo(LogsRoller, equal);

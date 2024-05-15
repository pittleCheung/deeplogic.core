import dayjs from 'dayjs';
import { isEmpty } from 'lodash-es';
import { memo, useEffect, useRef, useState } from 'react';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import meta, { DEFAULT_FORMAT, DEFAULT_INTERVAL } from './meta';

function TimeText(props) {
  const intervalID = useRef(0);
  const [time, setTime] = useState(dayjs().format(DEFAULT_FORMAT));
  const { state, enabled, connectDrag } = useComponent(props);

  if (!state) return null;
  const { style, format, interval } = state;

  // 定时显示时间
  function showTime(format, interval) {
    if (intervalID.current) {
      clearInterval(intervalID.current);
      intervalID.current = 0;
    }

    if (interval < 1) interval = DEFAULT_INTERVAL;
    if (!format || isEmpty(format)) format = DEFAULT_FORMAT;
    intervalID.current = setInterval(
      (_format) => {
        setTime(dayjs().format(_format));
      },
      interval * 1000,
      format
    );
  }

  // 组件属性变化的事件
  useEffect(() => {
    showTime(format, interval);
  }, [format, interval]);

  // 初始化
  useEffect(() => {
    setTime(dayjs().format(DEFAULT_FORMAT));

    return () => {
      clearInterval(intervalID.current);
      intervalID.current = 0;
    };
  }, []);

  return (
    <span style={{ ...style }} ref={enabled ? connectDrag : null}>
      {time}
    </span>
  );
}

TimeText.craft = craft(meta);

export default memo(TimeText);

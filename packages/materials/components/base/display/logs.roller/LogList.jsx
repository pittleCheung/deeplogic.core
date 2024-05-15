import { Space, Timeline, theme } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import css from './_style';
import { DEFAULT_TIME_FORMAT } from './meta';

// 日志列表组件
function LogList ({ title, showTime, timeFormat, logs, style, ...reset }) {
  const { token } = theme.useToken();

  const items = useMemo(()=>{
    return logs.map((item) => ({
        children: (
          <div key={item.time || item.log}>
            <span className={css.log(reset, token)}>{item.log}</span>
            <span className={css.time(reset, token)}>{dayjs(item.time)?.format(timeFormat ?? DEFAULT_TIME_FORMAT)}</span>
          </div>
        ),
        dot: <span key={item.time || item.log} className={css.dot(reset, token)}/>
      }))
  },[logs])

  return (
    <div style={{ ...style, height: 'unset', width: 'unset' }} className={css.logroller(reset, token)}>
      <div className={css.title(reset, token)}>{title}</div>
      <div className={css.list(reset, token)} style={{ ...style }}>
        <Timeline size="small" items={items}/>
      </div>
    </div>
  );
}

export default LogList;

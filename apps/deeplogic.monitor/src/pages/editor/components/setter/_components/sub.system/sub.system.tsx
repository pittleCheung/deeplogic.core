import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getInitData } from './_service';

function SubSystem({ projId, value, onChange }) {
  const [option, setOption] = useState([]);

  const getData = async () => {
    const resp = await getInitData({ pid: projId });
    if (resp) {
      setOption(resp?.stations?.map((item) => ({ label: item?.F_STATION_NAME, value: item?.F_STATION_ID })) || []);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Select value={value} onChange={onChange} options={option} allowClear />;
}

export default SubSystem;

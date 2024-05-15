
import {memo,useMemo} from 'react';
import {craft, isObject} from '../../_utils/utils';
import Charts from '../../common/charts';
import {useComponent} from '../../useComponent';
import meta from './meta';

function Gauge(props) {
    if (!props) return null;

    const {state, ...other} = useComponent(props);
   
    
    if (!state) return null;
  
    const params = useMemo(() => {
        state.option = {
            ...state.option, // 保留原始的 state.option 中的其他属性
            series: state.option?.series?.map(item => {
              const [first] = item.data;
              const newData = [{ ...first, value: isObject(props.value) ? 0 : props.value || 0 }];
          
              return {
                ...item,
                data: newData
              };
            })
          };
          
        return {
            ...other,...state
        }
    }, [other,state,props.value]);
    // console.log('Gaugeprops: ', props,props.value,state,other,params);
    return <Charts type='gauge' {...params} />;
}

Gauge.craft = craft(meta);

export default memo(Gauge);

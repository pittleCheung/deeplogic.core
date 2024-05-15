import {Layout} from 'antd';

function LazyChildComponent({children, ...props}) {
    return <Layout.Content style={{...props?.style, minHeight: '100vh'}}>{children}</Layout.Content>;
}

export default LazyChildComponent;

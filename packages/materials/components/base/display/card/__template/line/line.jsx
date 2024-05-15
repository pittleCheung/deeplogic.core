import {Card, theme} from 'antd';
import {border, main, module} from './_style';

const {useToken} = theme;

function Line(props) {
    const {token} = useToken();

    return (
        <Card {...props} className={main}>
            <div className={module(token)}>{props?.children}</div>
            <div className={border(token)}></div>
        </Card>
    );
}

export default Line;

import {Card, theme} from 'antd';
import {main} from './_style';

const {useToken} = theme;

function Gradient(props) {
    const {token} = useToken();

    return (
        <Card {...props} className={main(token)}>
            {props.children}
        </Card>
    );
}

export default Gradient;

import {Card, theme} from 'antd';
import {content, main} from './_style';

const {useToken} = theme;

function Green(props) {
    const {token} = useToken();
    return (
        <Card {...props} className={main(token)}>
            <div className={content(token)}>{props.children}</div>
        </Card>
    );
}

export default Green;

import {Button} from 'antd';

function DefaultButton({children, ...props}) {
    return <Button {...props}>{children}</Button>;
}

export default DefaultButton;

import { Button, theme } from 'antd';
import styles from './_style';

const { useToken } = theme;

function Hexagon(props) {
  const { token } = useToken();
  const { style } = props;

  return (
    <Button {...props} style={style} className={styles.bordered(token, style)}>
      <span className={styles.text}>{props.children}</span>
    </Button>
  );
}

export default Hexagon;

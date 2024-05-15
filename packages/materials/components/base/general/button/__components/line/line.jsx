import { Button, theme } from 'antd';
import styles from './_style';

const { useToken } = theme;

function Line(props) {
  const { token } = useToken();

  return (
    <Button {...props} className={styles.primary}>
      <div className={styles.lines1}>
        <div className={styles.lines2}>
          <div className={styles.text(token)}>{props.children}</div>
        </div>
      </div>
    </Button>
  );
}

export default Line;

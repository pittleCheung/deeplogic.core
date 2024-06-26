import {
  CloudUploadOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';
import { Space, theme } from 'antd';
import styles from './_style';

const { useToken } = theme;

function DefaultButton({ loading }) {
  const { token } = useToken();

  return (
    <div className={styles?.button(token)}>
      <Space>
        {loading ? (
          <Loading3QuartersOutlined
            spin
            style={{ color: token?.colorPrimary }}
          />
        ) : (
          <CloudUploadOutlined />
        )}
        <span>上传图片</span>
      </Space>
    </div>
  );
}

export default DefaultButton;

import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import { previewUrl } from '../../../../_helper/utils';
import styles from './_style';

const { useToken } = theme;

function DefaultImage({ src, onResize }) {
  const { token } = useToken();

  return (
    <div className={styles?.preview(token)}>
      <div className={styles?.thumb(token)}>
        <div className={styles?.img(token)} style={{ backgroundImage: `url(${previewUrl(src)})` }} />
      </div>
      <div className={styles?.overlay(token)} data-id='overlay'>
        <Button type='primary' icon={<CloudUploadOutlined />} onClick={() => onResize?.()}>
          重新上传
        </Button>
      </div>
    </div>
  );
}

export default DefaultImage;

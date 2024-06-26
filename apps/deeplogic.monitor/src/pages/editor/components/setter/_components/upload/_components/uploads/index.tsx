import defaultImg from '@/assets/building.png';
import { Upload as AntUpload } from 'antd';
import { useEffect, useState } from 'react';
import styles from './_style';
import { beforeUpload } from './_utils';
import DefaultButton from './button';
import DefaultImage from './image';

function Uploads({ value, onUpload, onChange }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);

  const onUploadChange = (info) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', info?.file);

    onUpload?.(formData)?.then((res) => {
      if (res) {
        setLoading(false);
        setImageUrl(res);
        onChange?.(res);
        return;
      }

      setLoading(false);
      setImageUrl(null);
    });
  };

  useEffect(() => {
    setImageUrl(value || defaultImg);
  }, [value]);

  return (
    <AntUpload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      beforeUpload={() => {
        const isError = beforeUpload();
        if (isError) {
          setLoading(false);
          setImageUrl(null);
        }
        return isError;
      }}
      onChange={onUploadChange}
      rootClassName={styles?.upload}
      disabled={loading}
    >
      {!!imageUrl ? (
        <DefaultImage
          src={imageUrl}
          onResize={() => {
            setImageUrl(null);
            onChange?.(null);
          }}
        />
      ) : (
        <DefaultButton loading={loading} />
      )}
    </AntUpload>
  );
}

export default Uploads;

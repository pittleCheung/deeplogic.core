import { theme, Typography } from 'antd';
import { previewUrl } from '../../_helper/utils';
import Field from '../field';
import Popover from '../popover';
import Upload from '../upload';
import { content, field, img, text } from './_style';

function ImageSetter({ value, onChange, onUpload }) {
  console.log('ImageSettervalue: ', value,previewUrl(value));
  const { token } = theme.useToken();

  return (
    <Field className={field(token)}>
      <Popover content={<Upload value={value} onChange={onChange} onUpload={onUpload} />} align={{ targetOffset: [104, 0] }}>
        <div className={content(token)}>
          <div
            className={img(token)}
            style={{
              backgroundImage: `url(${previewUrl(value)})`
            }}
          />
          <Typography.Text ellipsis className={text(token)} title={value}>
            {value || '图片'}
          </Typography.Text>
        </div>
      </Popover>
    </Field>
  );
}

export default ImageSetter;

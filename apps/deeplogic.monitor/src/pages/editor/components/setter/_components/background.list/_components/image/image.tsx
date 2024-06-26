import { theme } from 'antd';
import { previewUrl } from '../../../../_helper/utils';
import Field from '../../../field';
import Popover from '../../../popover';
import ImageConfig from './_components/config';
import { content, field, img } from './_style';

const { useToken } = theme;

function BackgroundImage({ value, onChange }) {
  const { token } = useToken();

  return (
    <Field className={field(token)}>
      <Popover content={<ImageConfig value={value} onChange={onChange} />}>
        <div className={content(token)}>
          <div
            className={img(token)}
            style={{
              backgroundImage: `url(${previewUrl(value?.backgroundImage)})`
            }}
          />
          <div>背景图片</div>
        </div>
      </Popover>
    </Field>
  );
}

export default BackgroundImage;

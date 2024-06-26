import { cx } from '@emotion/css';
import { theme } from 'antd';
import { isObject } from 'lodash-es';
import cls from './_style';

function TemplatePicker(props) {
  const { templates, onChange, value = 'default' } = props;
  const { token } = theme.useToken();

  if (!templates) return null;

  function onTemplateChange(key) {
    const isBool = isObject(templates[key]);
    onChange?.(!isBool ? key : { key, ...templates[key] });
  }

  return (
    <div className={cls.template(token)}>
      <ul className={cls.list(token)}>
        {Object.keys(templates).map((key) => (
          <li
            key={key}
            className={cx(
              cls.item(token),
              (key === value || key === value?.key) && 'active',
            )}
            onClick={() => onTemplateChange(key)}
          >
            {templates[key]?.image ? (
              <div className={cls.image(token)}>
                <img src={templates[key]?.image} alt={''} />
              </div>
            ) : (
              templates[key]?.label || templates[key]
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplatePicker;

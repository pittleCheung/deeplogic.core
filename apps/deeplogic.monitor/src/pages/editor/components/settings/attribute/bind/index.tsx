import { Space, Tag, Tooltip } from 'antd';
import useSettings from '../../useSettings';
import css from "../attribute.module.less"

function Bind({ id, name, value }) {
  const { onUnbind } = useSettings();

  return (
    <Tooltip title={value?.bind}>
      <Tag
        bordered={false}
        color='processing'
        closable
        onClose={(e) => {
          e.stopPropagation();
          onUnbind?.({ id, name });
        }}
        className={css.tag}
      >
        <Space size={2} align={'center'}>
          <b>
            ${' '}
            {
              {
                global: value?.bind || '变量',
                expressions: '表达式',
                function: '函数',
                points: value?.bind || '点表',
                components: '组件属性'
              }[value?.type]
            }
          </b>
        </Space>
      </Tag>
    </Tooltip>
  );
}

export default Bind;

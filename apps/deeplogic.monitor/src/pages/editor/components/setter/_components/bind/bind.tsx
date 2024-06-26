import { Space, Tag, Tooltip } from 'antd';
import css from "./bind.module.less"

function Bind({ value, onClose }) {
  return (
    <Tooltip title={value?.bind}>
      <Tag
        bordered={false}
        color='processing'
        closable
        onClose={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
        className={css.tag}
      >
        <Space size={2} align={'center'}>
          <b>
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

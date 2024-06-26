import { EllipsisOutlined } from '@ant-design/icons';
import { Breadcrumb as AntBreadcrumb, Button, Dropdown, theme } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo } from 'react';
import useSettings from '../useSettings';
import { nodes2items } from '../utils';
import { btn } from './_style';

const { useToken } = theme;

function Breadcrumb(props) {
  const { nodes, custom, onSelected } = useSettings();
  const { token } = useToken();
  if (!nodes || nodes?.length < 2) return null;

  return (
    <AntBreadcrumb
      {...props}
      separator='>'
      items={nodes2items(nodes, custom)}
      itemRender={({ id, title, items }) => {
        if (id !== 'ellipsis') {
          return (
            <Button
              size={'small'}
              type={'text'}
              className={btn(token)}
              disabled={id === 'current'}
              onClick={() => onSelected(id)}
            >
              {title}
            </Button>
          );
        } else {
          return (
            <Dropdown
              menu={{
                items,
                onClick: ({ key }) => onSelected(key)
              }}
            >
              <Button size={'small'} type={'text'} className={btn(token)} icon={<EllipsisOutlined />} />
            </Dropdown>
          );
        }
      }}
    />
  );
}

export default memo(Breadcrumb, equal);

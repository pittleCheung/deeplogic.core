import { Card, Image, List, Pagination, Space, Typography } from 'antd';
import css from "./template.module.less"

const templateList = [
  {
    title: 'Title 1',
    image: 'https://cdn.dribbble.com/userupload/4585415/file/original-7b9b300faf22e9fe2fd176ec1c70cadc.jpg'
  },
  {
    title: 'Title 2',
    image: 'https://cdn.dribbble.com/userupload/4716689/file/original-4c038c9f4b66d3fc4a411dcf48d05d1e.png'
  },
  {
    title: 'Title 3',
    image: 'https://cdn.dribbble.com/userupload/4499319/file/original-7a15cc7cc5987997218f70b70298764d.png'
  },
  {
    title: 'Title 4',
    image: 'https://cdn.dribbble.com/userupload/4395394/file/original-a941e1fda6498370f9b5c32b8b4b6d87.png'
  }
];

function Template() {
  return (
    <Space direction='vertical' size={[0, 0]}>
      <Typography.Title level={5} style={{ margin: 0, marginBottom: 12 }}>
        从模板中创建
      </Typography.Title>
      <List
        grid={{ gutter: 12, column: 2 }}
        dataSource={templateList}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable size='small' className={css.card} styles={{ body: { padding: 0 } }} bordered={false}>
              <Image src={item.image}></Image>
            </Card>
          </List.Item>
        )}
      />
      <div style={{ textAlign: 'right' }}>
        <Pagination total={12} current={1} />
      </div>
    </Space>
  );
}

export default Template;

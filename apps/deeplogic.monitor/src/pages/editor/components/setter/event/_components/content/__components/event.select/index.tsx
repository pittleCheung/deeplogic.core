import { Form, TreeSelect } from 'antd';
import { useEvent } from '../../__hooks/useEvent';

function EventSelect() {
  const { pages, name } = useEvent();

  const treeData = (data) => {
    if (!data) return [];
    return data?.map((item) => {
      return {
        title: item?.F_TITLE,
        value: item?.F_PAGE_ID,
        selectable: !item?.IS_GROUP,
        children: item?.IS_GROUP ? treeData(item?.PAGES) : null
      };
    });
  };

  return (
    <>
      <Form.Item name={[name, 'link']} noStyle>
        <TreeSelect
          style={{ width: '100%' }}
          listHeight={120}
          treeData={treeData(pages)}
          placeholder='请选择页面/弹窗'
          treeDefaultExpandAll
          allowClear
        />
      </Form.Item>
    </>
  );
}

export default EventSelect;

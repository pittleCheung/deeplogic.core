import { Element } from '@craftjs/core';
import { Row } from 'antd';
import equal from 'fast-deep-equal/es6';
import { Children, memo, useCallback, useEffect } from 'react';
import { craft, generateArray } from '../../../_utils/utils';
import { CustomNode } from '../../../common';
import { useComponent } from '../../../useComponent';
import Col from '../col';
import meta from './meta';

function Columns(props) {
  const { id, actions, query, state, setProps, connectDrag, getLinkNodes } = useComponent(props);

  const generateColumns = useCallback((columns) => {
    const nodes = query?.node(id)?.get()?.data?.nodes;
    if (nodes && nodes?.length && Number(columns) !== Number(nodes?.length)) {
      nodes.forEach((node) => {
        actions?.delete(node);
      });
    }
    generateArray(columns)?.forEach((span, index) => {
      const nodes = query
        ?.parseReactElement(
          <CustomNode>
            <Element id={`col-${index}`} is={Col} canvas span={span} />
          </CustomNode>
        )
        ?.toNodeTree();
      actions?.addNodeTree(nodes, id);
    }, []);
  }, []);

  useEffect(() => {
    const childLength = Children.toArray(state?.children);

    if (!childLength?.length && !childLength[0]) {
      generateColumns(state?.columns);
      return;
    }

    const cols = childLength[0]?.props?.children?.length;

    if (!cols || Number(state?.columns) === Number(cols)) return;
    if (!!cols && Number(state?.columns) !== Number(cols)) {
      generateColumns(state?.columns);
    }
  }, [state?.columns, state?.children]);
  // console.log("=>(index.jsx:22) state", state);

  return (
    <Row ref={connectDrag} {...state}>
      <CustomNode linkNodes={getLinkNodes(id)} setProps={setProps}>
        {state?.children}
      </CustomNode>
    </Row>
  );
}

Columns.craft = craft(meta);

export default memo(Columns, equal);

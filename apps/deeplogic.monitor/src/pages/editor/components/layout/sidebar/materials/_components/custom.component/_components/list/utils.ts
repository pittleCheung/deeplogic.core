import { isArray } from 'lodash-es';
import { createElement } from 'react';
import CustomItemExtra from './extra';

export const formatCustomComponents = (data, node) => {
  if (!data || data?.length === 0 || !isArray(data)) return [];

  const formatItem = (item) => {
    const { F_TITLE, F_C_ID, F_UCT_ID, F_CONTENT } = item;

    return {
      key: F_C_ID || F_UCT_ID,
      id: F_UCT_ID,
      cid: F_C_ID,
      label: F_TITLE,
      content: F_CONTENT,
      showArrow: false,
      extra: createElement(CustomItemExtra, { uid: F_UCT_ID }),
    };
  };

  return data?.map((item) => {
    const { Components } = item;

    return {
      ...formatItem(item),
      children: Components
        ? createElement(node, {
            items: Components.map((item) => formatItem(item)),
          })
        : null,
    };
  });
};

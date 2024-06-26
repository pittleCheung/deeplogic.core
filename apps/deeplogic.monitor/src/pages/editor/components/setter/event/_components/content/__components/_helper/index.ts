import { ROOT_NODE } from '@craftjs/utils';
import { uniqBy } from 'lodash-es';
import { isArray } from '../../../../../_helper/utils';

export const linkNodes = ({ query, resolver, isAll = false }) => {
  const processNode = (key) => {
    const node = query?.node(key)?.get();
    const type = node?.data?.name || node?.data?.displayName;
    const craft = resolver?.[type]?.craft || resolver?.[type]?.type?.craft;

    return {
      ...node,
      data: {
        ...node?.data,
        custom: craft?.custom
      }
    };
  };

  const processProps = (props) =>
    props
      ?.map((prop) => {
        if (prop?.linkable) {
          const title = prop?.title?.label || prop?.title;
          const children = prop?.props ? processProps(prop?.props) : [];
          return {
            title,
            children,
            label: title,
            value: prop?.name,
            selectable: children?.length === 0
          };
        }
      })
      ?.filter(Boolean);

  const labelCount = {};
  const descendants = query?.node(ROOT_NODE)?.descendants(true);
  return descendants
    ?.map(processNode)
    ?.filter(Boolean)
    ?.map((item) => {
      const label = item?.data?.custom?.title;
      const isLink = item?.data?.custom?.isLink;
      labelCount[label] = (labelCount[label] || 0) + 1;
      const uniqueLabel = labelCount[label] > 0 ? `${label}${labelCount[label]}` : label;

      return {
        value: item?.id,
        isLink: !!isLink,
        label: uniqueLabel,
        children: processProps(item?.data?.custom?.props)
      };
    })
    ?.filter((item) => (isAll ? true : item?.isLink));
};

export const linkProps = ({ keys, data }) => {
  if (isArray(keys)) {
    const values = keys
      ?.map((key) => {
        return data?.find((item) => item?.value === key)?.children;
      })
      ?.filter(Boolean)
      ?.flat();
    return uniqBy(values || [], 'value');
  } else {
    return data?.find((item) => item?.value === keys)?.children || [];
  }
};

export const getValues = ({ data, value }) => {
  const find = (nodes, path = []) => {
    for (let node of nodes) {
      // 构建当前路径
      const currentPath = [...path, node.value];

      // 检查当前节点是否是目标节点
      if (node.value === value) {
        return currentPath;
      }

      // 如果有子节点，递归查找
      if (node.children && node.children.length > 0) {
        const result = find(node.children, currentPath);
        if (result) {
          return result;
        }
      }
    }
    // 如果没有找到，返回 null
    return null;
  };

  return find(data);
};

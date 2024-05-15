export const getChildrenProps = (children, query) => {
  if (!children || !children?.props?.children) return null;

  const childrenProps = children.props.children;

  return childrenProps
    ?.map((child) => child?.props?.id)
    ?.filter((id) => id != null)
    ?.map((id) => query?.node(id)?.get()?.data)
    ?.filter((node) => node != null)
    ?.map((node) => node?.props?.events?.onChange)
    ?.filter(Boolean)?.[0]?.link?.props;
};

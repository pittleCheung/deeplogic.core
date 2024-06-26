import Icon from '@douyinfe/semi-icons';

function SvgIcon({ svg, ...props }) {
  return (
    <Icon
      {...props}
      svg={<div dangerouslySetInnerHTML={{ __html: svg.replace(/<svg /, `<svg width="1em" height="1em" `) }}></div>}
    />
  );
}

export default SvgIcon;

import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function Stop(props: IconProps) {
  return (
    <SvgIcon
      {...props}
      svg={
        <g>
          <path d="M10 10h30v30H10z"></path>
        </g>
      }
    />
  );
}

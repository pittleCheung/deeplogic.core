import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function Pause(props: IconProps) {
  return (
    <SvgIcon
    {...props}
      svg={
        <g>
          <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
          <path            
            strokeWidth="3"
            d="M16 12v24m16-24v24"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
        </g>
      }
    />
  );
}

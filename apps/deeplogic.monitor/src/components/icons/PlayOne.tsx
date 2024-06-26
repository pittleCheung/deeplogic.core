import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function PlayOne(props: IconProps) {
  return (
    <SvgIcon
    {...props}
      svg={
        <g>
          <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
          <path
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 24V11.876l10.5 6.062L36 24l-10.5 6.062L15 36.124V24Z"
            data-follow-fill="currentColor"
            data-follow-stroke="currentColor"
            fill={props.fill}
            stroke={props.stroke}
          />
        </g>
      }
    />
  );
}

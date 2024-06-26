import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function Electrocardiogram(props: IconProps) {
  return (
    <SvgIcon
    {...props}
      svg={
        <g>
          <path fillRule="evenodd" fill="#FFF" fillOpacity=".01" d="M0 0h48v48H0z" />
          <circle
            r="20"
            cy="24"
            cx="24"
            strokeLinejoin="round"
            fill="none"
            strokeWidth="2"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            d="M11 28.132h5.684L21.224 13l3.671 22 4.553-10.382 3.465 3.514H37"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
        </g>
      }
    />
  );
}

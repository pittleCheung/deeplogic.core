import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function Clear(props: IconProps) {
  return (
    <SvgIcon
      {...props}
      svg={
        <g>
          <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            d="M20 5.914h8v8h15v8H5v-8h15v-8Z"
            clipRule="evenodd"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
          <path
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 40h32V22H8v18Z"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            d="M16 39.898v-5.984m8 5.984v-6m8 6v-5.984M12 40h24"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
        </g>
      }
    />
  );
}

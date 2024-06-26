import IconProps from './IconProps';
import SvgIcon from './SvgIcon';

export default function Ring(props: IconProps) {
  return (
    <SvgIcon
    {...props}
      svg={
        <g>
          <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
          <path
            strokeLinejoin="round"
            strokeWidth="2"
            d="M24 11.619c2.093 0 3.79-1.706 3.79-3.81C27.79 5.707 26.092 4 24 4s-3.79 1.706-3.79 3.81c0 2.103 1.697 3.809 3.79 3.809ZM9.79 40.19c2.092 0 3.789-1.705 3.789-3.809s-1.697-3.81-3.79-3.81C7.697 32.572 6 34.278 6 36.382s1.697 3.81 3.79 3.81Zm28.42 0c2.093 0 3.79-1.705 3.79-3.809s-1.697-3.81-3.79-3.81c-2.092 0-3.789 1.706-3.789 3.81s1.697 3.81 3.79 3.81Z"
            data-follow-fill="currentColor"
            data-follow-stroke="currentColor"
            fill={props.fill}
            stroke={props.stroke}
          />
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            d="M33.143 10.314A18.105 18.105 0 0 1 42 25.904c0 .578-.027 1.148-.08 1.711v0m-10.906 14.96A17.863 17.863 0 0 1 24 44c-2.488 0-4.858-.507-7.014-1.425M6.08 27.615a18.416 18.416 0 0 1-.08-1.71 18.105 18.105 0 0 1 8.857-15.59"
            data-follow-stroke="currentColor"
            stroke={props.stroke}
          />
        </g>
      }
    />
  );
}

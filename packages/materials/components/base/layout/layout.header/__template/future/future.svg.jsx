import { generate } from '@ant-design/colors';
import { useEffect, useState } from 'react';
import SvgRender from '../../../../../common/svg';

function FutureSvg({ theme }) {
  const { colorPrimary } = theme?.token;
  const [color, setColor] = useState([]);

  useEffect(() => {
    const themeType = theme?.algorithm === 'darkAlgorithm' ? 'dark' : 'default';
    setColor(generate(colorPrimary, { theme: themeType }));
  }, [theme.token, theme.algorithm]);

  return (
    <SvgRender viewBox="0 0 1834 110">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1279.11 13.4111H1313.13L1234.62 40.4436L1162.34 71.3366L1103.13 89.2449L1040.89 94.8751H952.309L935.472 89.2449H901.239L880.741 94.8751L801.955 95.0426L734.506 89.2449C734.506 89.2449 666.17 69.8775 646.289 61.103C578.941 31.3772 515.668 13.4111 515.668 13.4111H1279.11Z"
        fill="url(#paint0_linear_2_8724)"
      />
      <g filter="url(#filter0_f_2_8724)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M955.893 103.555L930.969 95.042H902.612L877.596 103.555H955.893Z"
          fill={colorPrimary}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M955.893 103.555L930.969 95.042H902.612L877.596 103.555H955.893Z"
        fill={colorPrimary}
      />
      <path
        d="M1 2.10449C1 2.10449 421.046 14.7727 491.811 24.471C521.952 28.6016 563.168 39.4336 604.21 55.5678C659.53 77.3147 701.188 96.6164 744.353 99.7654C805.586 104.232 878.811 102.137 878.811 102.137L903.148 95.3685H917.345"
        stroke={color[1]}
        strokeWidth="3"
      />
      <path
        d="M493.691 13.4111C493.691 13.4111 575.277 27.7546 614.918 47.1635C654.56 66.5725 693.337 81.5277 741.541 90.687C785.895 96.4586 876.496 94.5822 876.496 94.5822L898.421 89.2448H917.346"
        stroke={color[3]}
        strokeWidth="3"
      />
      <path
        d="M1833.69 2.10449C1833.69 2.10449 1413.64 14.7727 1342.88 24.471C1312.74 28.6016 1271.52 39.4336 1230.48 55.5678C1175.16 77.3147 1133.5 96.6164 1090.34 99.7654C1029.11 104.232 955.88 102.137 955.88 102.137L931.544 95.3685H917.346"
        stroke={color[1]}
        strokeWidth="3"
      />
      <path
        d="M1340.2 13.4111C1340.2 13.4111 1258.61 27.7546 1218.97 47.1635C1179.33 66.5725 1140.55 81.5277 1092.35 90.687C1048 96.4586 957.395 94.5822 957.395 94.5822L935.47 89.2448H916.545"
        stroke={color[3]}
        strokeWidth="3"
      />
      <path
        d="M734.504 89.2441C761.673 96.1583 876.495 94.5815 876.495 94.5815L898.42 89.2441H935.47L957.395 94.5815C957.395 94.5815 1067.86 95.8261 1090.98 91.0263"
        stroke={color[3]}
        strokeWidth="3"
      />
      <defs>
        <filter
          id="filter0_f_2_8724"
          x="871.596"
          y="89.042"
          width="90.2969"
          height="20.5137"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_2_8724"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2_8724"
          x1="515.668"
          y1="13.4111"
          x2="515.668"
          y2="95.0426"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color[1]} stopOpacity="0.014902" />
          <stop offset="1" stopColor={color[0]} />
        </linearGradient>
      </defs>
    </SvgRender>
  );
}

export default FutureSvg;

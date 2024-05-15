import {generate} from '@ant-design/colors';

import {useEffect, useState} from 'react';
import SvgRender from '../../../../../common/svg';

function ScienceSvg({theme}) {
    const {colorPrimary} = theme?.token;
    const [color, setColor] = useState([]);
    const [light, setLight] = useState('white');

    useEffect(() => {
        const themeType = theme?.algorithm === 'darkAlgorithm' ? 'dark' : 'default';
        const colors = generate(colorPrimary, {theme: themeType});
        setColor(colors);
        setLight(themeType === 'dark' ? 'white' : colors[4]);
    }, [theme.token, theme.algorithm]);

    return (
        <SvgRender viewBox="0 0 1536 60">
            <mask
                xmlns="http://www.w3.org/2000/svg"
                id="mask0_3_566"
                style={{maskType: 'luminance'}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1536"
                height="60"
            >
                <path
                    d="M0.920044 0L21.59 38.12C25.0207 44.4497 30.0961 49.7362 36.2808 53.4217C42.4656 57.1072 49.5304 59.0551 56.73 59.06H539.47C547.822 59.0577 556.089 57.3919 563.79 54.16L571.94 50.74C579.639 47.5032 587.908 45.8372 596.26 45.84H1269.15C1277.5 45.8372 1285.77 47.5032 1293.47 50.74L1301.61 54.16C1309.31 57.3919 1317.58 59.0577 1325.93 59.06H1479.71C1486.91 59.0551 1493.97 57.1072 1500.16 53.4217C1506.34 49.7362 1511.42 44.4497 1514.85 38.12L1535.49 0H0.920044Z"
                    fill={light}
                />
            </mask>
            <g xmlns="http://www.w3.org/2000/svg" mask="url(#mask0_3_566)">
                <path
                    d="M1535.31 -0.119995H0.73999V95.79H1535.31V-0.119995Z"
                    fill={color[0]}
                />
                <path
                    d="M7.13 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.73999 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M19.92 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M13.53 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M32.7101 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M26.3101 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M45.5 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M39.1001 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M58.28 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M51.89 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M71.0701 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M64.6801 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M83.8601 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M77.4701 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M96.65 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M90.25 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M109.44 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M103.04 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M122.22 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M115.83 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M135.01 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M128.62 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M147.8 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M141.41 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M160.59 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M154.19 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M173.38 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M166.98 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M186.16 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M179.77 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M198.95 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M192.56 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M211.74 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M205.35 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M224.53 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M218.13 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M237.32 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M230.92 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M250.1 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M243.71 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M262.89 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M256.5 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M275.68 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M269.29 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M288.47 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M282.07 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M301.26 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M294.86 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M314.04 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M307.65 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M326.83 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M320.44 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M339.62 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M333.23 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M352.41 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M346.01 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M365.2 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M358.8 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M377.99 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M371.59 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M390.77 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M384.38 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M403.56 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M397.17 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M416.35 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M409.96 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M429.14 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M422.74 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M441.93 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M435.53 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M454.71 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M448.32 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M467.5 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M461.11 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M480.29 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M473.9 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M493.08 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M486.68 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M505.87 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M499.47 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M518.65 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M512.26 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M531.44 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M525.05 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M544.23 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M537.84 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M557.02 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M550.62 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M569.81 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M563.41 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M582.59 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M576.2 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M595.38 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M588.99 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M608.17 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M601.78 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M620.96 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M614.56 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M633.75 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M627.35 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M646.53 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M640.14 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M659.32 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M652.93 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M672.11 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M665.72 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M684.9 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M678.5 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M697.69 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M691.29 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M710.47 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M704.08 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M723.26 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M716.87 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M736.05 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M729.66 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M748.84 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M742.45 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M761.63 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M755.23 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M774.42 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M768.02 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M787.2 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M780.81 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M799.99 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M793.6 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M812.78 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M806.39 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M825.57 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M819.17 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M838.36 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M831.96 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M851.14 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M844.75 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M863.93 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M857.54 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M876.72 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M870.33 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M889.51 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M883.11 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M902.3 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M895.9 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M915.08 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M908.69 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M927.87 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M921.48 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M940.66 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M934.27 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M953.45 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M947.05 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M966.24 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M959.84 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M979.02 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M972.63 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M991.81 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M985.42 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1004.6 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M998.21 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1017.39 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1010.99 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1030.18 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1023.78 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1042.96 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1036.57 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1055.75 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1049.36 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1068.54 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1062.15 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1081.33 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1074.93 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1094.12 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1087.72 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1106.9 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1100.51 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1119.69 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1113.3 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1132.48 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1126.09 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1145.27 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1138.88 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1158.06 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1151.66 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1170.85 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1164.45 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1183.63 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1177.24 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1196.42 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1190.03 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1209.21 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1202.82 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1222 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1215.6 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1234.79 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1228.39 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1247.57 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1241.18 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1260.36 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1253.97 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1273.15 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1266.76 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1285.94 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1279.54 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1298.73 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1292.33 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1311.51 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1305.12 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1324.3 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1317.91 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1337.09 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1330.7 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1349.88 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1343.48 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1362.67 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1356.27 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1375.45 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1369.06 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1388.24 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1381.85 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1401.03 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1394.64 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1413.82 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1407.42 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1426.61 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1420.21 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1439.39 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1433 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1452.18 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1445.79 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1464.97 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1458.58 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1477.76 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1471.36 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1490.55 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1484.15 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1503.34 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1496.94 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1516.12 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1509.73 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1528.91 -0.110001V95.79"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 -0.119995V95.78"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1522.52 95.79V-0.110001"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 6.27H0.800049"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.800049 -0.119995H1535.3"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 19.06H0.800049"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.800049 12.67H1535.3"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 31.85H0.800049"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.800049 25.46H1535.3"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 44.64H0.800049"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.800049 38.24H1535.3"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M1535.3 57.43H0.800049"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    d="M0.800049 51.03H1535.3"
                    stroke={color[4]}
                    strokeWidth="0.4"
                    strokeMiterlimit="10"
                />
                <path
                    opacity="0.2"
                    d="M0.920044 0L21.59 38.12C25.0207 44.4497 30.0961 49.7362 36.2808 53.4217C42.4656 57.1072 49.5304 59.0551 56.73 59.06H539.47C547.822 59.0577 556.089 57.3919 563.79 54.16L571.94 50.74C579.639 47.5032 587.908 45.8372 596.26 45.84H1269.15C1277.5 45.8372 1285.77 47.5032 1293.47 50.74L1301.61 54.16C1309.31 57.3919 1317.58 59.0577 1325.93 59.06H1479.71C1486.91 59.0551 1493.97 57.1072 1500.16 53.4217C1506.34 49.7362 1511.42 44.4497 1514.85 38.12L1535.49 0H0.920044Z"
                    fill={colorPrimary}
                />
                <path
                    d="M1533.83 1L1513.99 37.68C1510.65 43.8591 1505.7 49.0195 1499.66 52.6143C1493.63 56.2092 1486.73 58.1047 1479.71 58.1H1325.93C1317.71 58.109 1309.57 56.47 1302 53.28L1293.85 49.86C1286.03 46.5612 1277.63 44.8611 1269.15 44.86H596.26C587.775 44.8543 579.375 46.5547 571.56 49.86L563.41 53.28C555.833 56.4711 547.692 58.11 539.47 58.1H56.7C49.6756 58.1047 42.7807 56.2092 36.7458 52.6143C30.711 49.0195 25.7609 43.8591 22.42 37.68L2.59004 1H1533.83ZM1535.49 0H0.920044L21.59 38.12C25.0207 44.4497 30.0961 49.7362 36.2808 53.4217C42.4656 57.1072 49.5304 59.0551 56.73 59.06H539.47C547.822 59.0577 556.089 57.3919 563.79 54.16L571.94 50.74C579.639 47.5032 587.908 45.8372 596.26 45.84H1269.15C1277.5 45.8372 1285.77 47.5032 1293.47 50.74L1301.61 54.16C1309.31 57.3919 1317.58 59.0577 1325.93 59.06H1479.71C1486.91 59.0551 1493.97 57.1072 1500.16 53.4217C1506.34 49.7362 1511.42 44.4497 1514.85 38.12L1535.49 0Z"
                    fill="url(#paint0_linear_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 95.16C276.111 95.16 315 78.9975 315 59.06C315 39.1225 276.111 22.96 228.14 22.96C180.169 22.96 141.28 39.1225 141.28 59.06C141.28 78.9975 180.169 95.16 228.14 95.16Z"
                    fill="url(#paint1_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 80.29C269.501 80.29 303.03 70.785 303.03 59.06C303.03 47.335 269.501 37.83 228.14 37.83C186.779 37.83 153.25 47.335 153.25 59.06C153.25 70.785 186.779 80.29 228.14 80.29Z"
                    fill="url(#paint2_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 62.05C244.537 62.05 257.83 60.7113 257.83 59.06C257.83 57.4087 244.537 56.07 228.14 56.07C211.743 56.07 198.45 57.4087 198.45 59.06C198.45 60.7113 211.743 62.05 228.14 62.05Z"
                    fill="url(#paint3_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1337.21 95.16C1385.18 95.16 1424.07 78.9975 1424.07 59.06C1424.07 39.1225 1385.18 22.96 1337.21 22.96C1289.24 22.96 1250.35 39.1225 1250.35 59.06C1250.35 78.9975 1289.24 95.16 1337.21 95.16Z"
                    fill="url(#paint4_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1337.21 80.29C1378.57 80.29 1412.1 70.785 1412.1 59.06C1412.1 47.335 1378.57 37.83 1337.21 37.83C1295.85 37.83 1262.32 47.335 1262.32 59.06C1262.32 70.785 1295.85 80.29 1337.21 80.29Z"
                    fill="url(#paint5_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1337.21 62.05C1353.61 62.05 1366.9 60.7113 1366.9 59.06C1366.9 57.4087 1353.61 56.07 1337.21 56.07C1320.81 56.07 1307.52 57.4087 1307.52 59.06C1307.52 60.7113 1320.81 62.05 1337.21 62.05Z"
                    fill="url(#paint6_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1386.3 11.0171C1430.73 10.7302 1466.72 6.06081 1466.68 0.587783C1466.65 -4.88524 1430.6 -9.08942 1386.17 -8.80249C1341.74 -8.51557 1305.75 -3.8462 1305.79 1.62682C1305.82 7.09985 1341.87 11.304 1386.3 11.0171Z"
                    fill="url(#paint7_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1386.24 2.71001C1430.68 2.71001 1466.7 1.97575 1466.7 1.07001C1466.7 0.16426 1430.68 -0.570007 1386.24 -0.570007C1341.8 -0.570007 1305.78 0.16426 1305.78 1.07001C1305.78 1.97575 1341.8 2.71001 1386.24 2.71001Z"
                    fill="url(#paint8_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M765.28 4.13C852.342 4.13 922.92 2.67044 922.92 0.869995C922.92 -0.930453 852.342 -2.39 765.28 -2.39C678.218 -2.39 607.64 -0.930453 607.64 0.869995C607.64 2.67044 678.218 4.13 765.28 4.13Z"
                    fill="url(#paint9_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M34.3719 59.1035C39.1574 56.4475 34.568 39.0351 24.1212 20.2117C13.6743 1.38829 1.32598 -11.718 -3.45955 -9.0621C-8.24507 -6.40616 -3.65565 11.0063 6.79122 29.8297C17.2381 48.6531 29.5864 61.7594 34.3719 59.1035Z"
                    fill="url(#paint10_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M33.8909 59.3699C34.6891 58.9419 27.0893 43.2145 16.9162 24.2417C6.74308 5.26899 -2.15096 -9.7645 -2.94919 -9.33649C-3.74743 -8.90848 3.8524 6.81896 14.0255 25.7917C24.1986 44.7645 33.0926 59.7979 33.8909 59.3699Z"
                    fill="url(#paint11_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M53.3498 39.7376C56.6329 35.3585 45.331 21.3398 28.1064 8.42594C10.8817 -4.48792 -5.74319 -11.4067 -9.02632 -7.02764C-12.3094 -2.64856 -1.00759 11.3701 16.2171 24.284C33.4418 37.1979 50.0666 44.1167 53.3498 39.7376Z"
                    fill="url(#paint12_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M53.0142 40.1721C53.568 39.4553 40.2067 28.2044 23.1709 15.0424C6.13506 1.88034 -8.1241 -8.20854 -8.67786 -7.4918C-9.23163 -6.77505 4.1297 4.47591 21.1655 17.6379C38.2013 30.7999 52.4605 40.8888 53.0142 40.1721Z"
                    fill="url(#paint13_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M31.4864 10.9821C53.0123 10.6778 70.3998 5.99466 70.3224 0.522065C70.245 -4.95053 52.7321 -9.14024 31.2062 -8.8359C9.6803 -8.53156 -7.70717 -3.84843 -7.6298 1.62416C-7.55243 7.09676 9.96049 11.2864 31.4864 10.9821Z"
                    fill="url(#paint14_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M31.3301 2.71001C52.8582 2.71001 70.3101 1.97575 70.3101 1.07001C70.3101 0.16426 52.8582 -0.570007 31.3301 -0.570007C9.80203 -0.570007 -7.6499 0.16426 -7.6499 1.07001C-7.6499 1.97575 9.80203 2.71001 31.3301 2.71001Z"
                    fill="url(#paint15_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1529.74 29.7952C1540.19 10.9718 1544.78 -6.44066 1539.99 -9.0966C1535.21 -11.7525 1522.86 1.35376 1512.41 20.1772C1501.96 39.0006 1497.37 56.413 1502.16 59.0689C1506.95 61.7249 1519.29 48.6186 1529.74 29.7952Z"
                    fill="url(#paint16_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1522.61 25.8336C1532.78 6.8608 1540.38 -8.86661 1539.59 -9.29462C1538.79 -9.72263 1529.89 5.31084 1519.72 24.2836C1509.55 43.2563 1501.95 58.9838 1502.75 59.4118C1503.54 59.8398 1512.44 44.8063 1522.61 25.8336Z"
                    fill="url(#paint17_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1520.2 23.968C1537.42 11.0512 1548.72 -2.96952 1545.43 -7.34803C1542.15 -11.7265 1525.53 -4.80481 1508.3 8.11203C1491.08 21.0289 1479.78 35.0495 1483.07 39.428C1486.35 43.8065 1502.97 36.8849 1520.2 23.968Z"
                    fill="url(#paint18_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1515.43 17.6693C1532.47 4.50732 1545.83 -6.7437 1545.27 -7.46045C1544.72 -8.17719 1530.46 1.91175 1513.43 15.0738C1496.39 28.2358 1483.03 39.4867 1483.58 40.2035C1484.14 40.9202 1498.4 30.8314 1515.43 17.6693Z"
                    fill="url(#paint19_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1544.28 1.64072C1544.36 -3.83188 1526.97 -8.51504 1505.45 -8.81938C1483.92 -9.12371 1466.41 -4.93398 1466.33 0.538619C1466.26 6.01121 1483.64 10.6944 1505.17 10.9987C1526.69 11.303 1544.21 7.11331 1544.28 1.64072Z"
                    fill="url(#paint20_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1505.24 2.71001C1526.77 2.71001 1544.22 1.97575 1544.22 1.07001C1544.22 0.16426 1526.77 -0.570007 1505.24 -0.570007C1483.71 -0.570007 1466.26 0.16426 1466.26 1.07001C1466.26 1.97575 1483.71 2.71001 1505.24 2.71001Z"
                    fill="url(#paint21_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 38.47C409.411 38.47 556.36 22.3075 556.36 2.37C556.36 -17.5675 409.411 -33.73 228.14 -33.73C46.8692 -33.73 -100.08 -17.5675 -100.08 2.37C-100.08 22.3075 46.8692 38.47 228.14 38.47Z"
                    fill="url(#paint22_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 23.6C384.437 23.6 511.14 14.095 511.14 2.37C511.14 -9.35501 384.437 -18.86 228.14 -18.86C71.8434 -18.86 -54.86 -9.35501 -54.86 2.37C-54.86 14.095 71.8434 23.6 228.14 23.6Z"
                    fill="url(#paint23_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M228.14 5.36C290.095 5.36 340.32 4.02133 340.32 2.37C340.32 0.718664 290.095 -0.619995 228.14 -0.619995C166.185 -0.619995 115.96 0.718664 115.96 2.37C115.96 4.02133 166.185 5.36 228.14 5.36Z"
                    fill="url(#paint24_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M704.3 47.64C705.206 47.64 705.94 36.5904 705.94 22.96C705.94 9.32962 705.206 -1.72 704.3 -1.72C703.394 -1.72 702.66 9.32962 702.66 22.96C702.66 36.5904 703.394 47.64 704.3 47.64Z"
                    fill="url(#paint25_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M810.38 47.64C811.286 47.64 812.02 36.5904 812.02 22.96C812.02 9.32962 811.286 -1.72 810.38 -1.72C809.474 -1.72 808.74 9.32962 808.74 22.96C808.74 36.5904 809.474 47.64 810.38 47.64Z"
                    fill="url(#paint26_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M916.47 47.64C917.376 47.64 918.11 36.5904 918.11 22.96C918.11 9.32962 917.376 -1.72 916.47 -1.72C915.564 -1.72 914.83 9.32962 914.83 22.96C914.83 36.5904 915.564 47.64 916.47 47.64Z"
                    fill="url(#paint27_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1022.56 47.64C1023.47 47.64 1024.2 36.5904 1024.2 22.96C1024.2 9.32962 1023.47 -1.72 1022.56 -1.72C1021.65 -1.72 1020.92 9.32962 1020.92 22.96C1020.92 36.5904 1021.65 47.64 1022.56 47.64Z"
                    fill="url(#paint28_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M1128.65 47.64C1129.56 47.64 1130.29 36.5904 1130.29 22.96C1130.29 9.32962 1129.56 -1.72 1128.65 -1.72C1127.74 -1.72 1127.01 9.32962 1127.01 22.96C1127.01 36.5904 1127.74 47.64 1128.65 47.64Z"
                    fill="url(#paint29_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M756.1 48.28C772.497 48.28 785.79 46.6816 785.79 44.71C785.79 42.7383 772.497 41.14 756.1 41.14C739.703 41.14 726.41 42.7383 726.41 44.71C726.41 46.6816 739.703 48.28 756.1 48.28Z"
                    fill="url(#paint30_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M756.1 57.28C786.525 57.28 811.19 32.0512 811.19 0.929993C811.19 -30.1913 786.525 -55.42 756.1 -55.42C725.675 -55.42 701.01 -30.1913 701.01 0.929993C701.01 32.0512 725.675 57.28 756.1 57.28Z"
                    fill="url(#paint31_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M756.1 34.07C782.334 34.07 803.6 19.2327 803.6 0.929993C803.6 -17.3727 782.334 -32.21 756.1 -32.21C729.867 -32.21 708.6 -17.3727 708.6 0.929993C708.6 19.2327 729.867 34.07 756.1 34.07Z"
                    fill="url(#paint32_radial_3_566)"
                />
                <path
                    style={{mixBlendMode: 'overlay'}}
                    d="M756.1 5.60001C766.5 5.60001 774.93 3.50916 774.93 0.929993C774.93 -1.64918 766.5 -3.74001 756.1 -3.74001C745.701 -3.74001 737.27 -1.64918 737.27 0.929993C737.27 3.50916 745.701 5.60001 756.1 5.60001Z"
                    fill="url(#paint33_radial_3_566)"
                />
            </g>
            <defs xmlns="http://www.w3.org/2000/svg">
                <linearGradient
                    id="paint0_linear_3_566"
                    x1="768.2"
                    y1="59.06"
                    x2="768.2"
                    y2="-0.0099992"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={colorPrimary}/>
                    <stop offset="1" stopColor={color[4]}/>
                </linearGradient>
                <radialGradient
                    id="paint1_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(227.491 56.9336) scale(79.8957 17.6148)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint2_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(229.668 67.0207) scale(69.201 10.6947)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint3_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(237.336 76.0317) scale(27.0513 1.2582)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint4_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1335.62 56.9336) scale(79.8957 17.6148)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint5_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1342.8 67.0207) scale(69.201 10.6947)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint6_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1335.03 76.0317) scale(27.0513 1.2582)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint7_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1383.75 -6.78175) rotate(-0.37) scale(74.2458 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint8_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1389.3 -0.0360051) scale(74.2458 0.853404)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint9_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(765.796 5.48281) scale(145.078 1.7068)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint10_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.2046 22.245) rotate(60.97) scale(35.8428 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint11_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.6698 28.0687) rotate(61.8) scale(35.8428 0.8534)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint12_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(29.0493 10.1843) rotate(36.86) scale(35.8428 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint13_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(23.2231 17.9496) rotate(37.69) scale(35.8428 0.8534)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint14_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(32.1569 -7.24038) rotate(-0.81) scale(35.8428 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint15_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(32.2669 0.623798) scale(35.8428 0.853404)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint16_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1514.87 23.0056) rotate(119.03) scale(35.8428 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint17_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1516.78 24.206) rotate(118.2) scale(35.8428 0.8534)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint18_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1510.14 10.7795) rotate(143.13) scale(35.8428 4.6937)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint19_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1511.96 13.4509) rotate(142.31) scale(35.8428 0.8534)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint20_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1506.6 -7.24957) rotate(-179.19) scale(35.8428 4.69372)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint21_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1506.4 -0.166206) rotate(180) scale(35.8428 0.853404)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint22_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(228.962 4.6356) rotate(180) scale(301.968 17.6148)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint23_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(228.138 -6.7651) rotate(180) scale(260.447 10.6947)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint24_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(223.078 -8.88199) rotate(180) scale(103.172 1.2582)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint25_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(700.664 25.5232) rotate(90) scale(22.6151 0.853408)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint26_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(807.213 25.5214) rotate(90) scale(22.6151 0.853408)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint27_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(913.772 25.5196) rotate(90) scale(22.6151 0.853408)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint28_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1020.32 25.5178) rotate(90) scale(22.6151 0.853376)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint29_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1126.87 25.516) rotate(90) scale(22.6151 0.853408)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint30_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(741.221 53.1897) rotate(180) scale(27.0513 1.8873)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint31_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(755.466 -2.144) rotate(180) scale(50.9571 27.6804)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint32_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(756.712 -2.8024) rotate(180) scale(44.037 16.3566)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
                <radialGradient
                    id="paint33_radial_3_566"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(771 16.0632) rotate(180) scale(17.6148 2.5164)"
                >
                    <stop stopColor={light}/>
                    <stop offset="0.8" stopColor={color[0]} stopOpacity="0"/>
                </radialGradient>
            </defs>
        </SvgRender>
    );
}

export default ScienceSvg;

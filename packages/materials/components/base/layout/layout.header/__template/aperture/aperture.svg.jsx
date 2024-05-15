import {theme} from 'antd';
import SvgRender from '../../../../../common/svg';

function ApertureSvg({color}) {
    const {token} = theme.useToken();

    return (
        <SvgRender viewBox="0 0 1920 74">
            <line
                y1="43"
                x2="737"
                y2="43"
                stroke="url(#paint0_linear_316_27497)"
                strokeWidth="2"
            />
            <line
                y1="-1"
                x2="737"
                y2="-1"
                transform="matrix(-1 0 0 1 1920 44)"
                stroke="url(#paint1_linear_316_27497)"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M705 0.649002C712.934 23.775 741.912 66.3245 807.446 66.3245H959.446H959.946H1111.95C1177.48 66.3245 1206.46 23.775 1214.39 0.649002L1212.5 0C1204.77 22.5406 1176.41 64.3245 1111.95 64.3245H959.946H959.446H807.446C742.98 64.3245 714.625 22.5406 706.892 0L705 0.649002Z"
                fill={color}
            />
            <g filter="url(#filter0_df_316_27497)">
                <line
                    x1="840"
                    y1="65.5"
                    x2="1112"
                    y2="65.5"
                    stroke="url(#paint2_linear_316_27497)"
                    shapeRendering="crispEdges"
                />
            </g>
            <line
                x1="840"
                y1="65.5"
                x2="1112"
                y2="65.5"
                stroke="url(#paint3_linear_316_27497)"
            />
            <g opacity="0.34">
                <mask
                    id="mask0_316_27497"
                    style={{maskType: 'alpha'}}
                    maskUnits="userSpaceOnUse"
                    x="705"
                    y="-1"
                    width="491"
                    height="67"
                >
                    <path
                        d="M815.5 64.5C747.142 68.3404 715.408 27.321 706.937 3.83359C706.429 2.42669 707.504 1 709 1L1148.96 0.125326C1189.99 0.0437534 1212.47 22.7437 1177.97 44.9528C1175.88 46.2947 1173.73 47.6447 1171.5 49C1168.89 50.4791 1166.17 51.8546 1163.39 53.1453C1143.88 62.1863 1122.04 64.5 1100.54 64.5H815.5Z"
                        fill="#232323"
                        stroke="black"
                        strokeWidth="2"
                    />
                </mask>
                <g mask="url(#mask0_316_27497)">
                    <rect
                        x="727"
                        y="32"
                        width="466"
                        height="34"
                        fill="url(#paint4_linear_316_27497)"
                    />
                </g>
            </g>
            <g opacity="0.77" filter="url(#filter1_f_316_27497)">
                <ellipse cx="956.5" cy="64.5" rx="120.5" ry="0.5" fill="white"/>
            </g>
            <path
                opacity="0.6"
                d="M783.164 24H789.066L793 36H787.098L783.164 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                opacity="0.4"
                d="M768.082 24H773.984L777.918 36H772.016L768.082 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                opacity="0.2"
                d="M753 24H758.902L762.836 36H756.934L753 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                opacity="0.6"
                d="M1137.84 24H1131.93L1128 36H1133.9L1137.84 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                opacity="0.4"
                d="M1152.92 24H1147.02L1143.08 36H1148.98L1152.92 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                opacity="0.2"
                d="M1168 24H1162.1L1158.16 36H1164.07L1168 24Z"
                fill={token?.colorPrimaryHover}
            />
            <path
                d="M0 55H754"
                stroke="url(#paint6_linear_316_27497)"
                strokeOpacity="0.24"
                strokeWidth="2"
            />
            <path
                d="M1920 54H1164.5"
                stroke="url(#paint7_linear_316_27497)"
                strokeOpacity="0.24"
                strokeWidth="2"
            />
            <defs>
                <filter
                    id="filter0_df_316_27497"
                    x="832"
                    y="57"
                    width="288"
                    height="17"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.858824 0 0 0 0 0.6 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_316_27497"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_316_27497"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="2"
                        result="effect2_foregroundBlur_316_27497"
                    />
                </filter>
                <filter
                    id="filter1_f_316_27497"
                    x="830"
                    y="58"
                    width="253"
                    height="13"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3"
                        result="effect1_foregroundBlur_316_27497"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_316_27497"
                    x1="737"
                    y1="44"
                    x2="0"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={color}/>
                    <stop offset="1" stopColor={color} stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_316_27497"
                    x1="737"
                    y1="0"
                    x2="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={color}/>
                    <stop offset="1" stopColor={color} stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_316_27497"
                    x1="1112"
                    y1="66"
                    x2="840"
                    y2="66"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE0A7" stopOpacity="0"/>
                    <stop offset="0.498593" stopColor="#FFE0A7"/>
                    <stop offset="1" stopColor="#FFE0A7" stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_316_27497"
                    x1="1112"
                    y1="66"
                    x2="840"
                    y2="66"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE0A7" stopOpacity="0"/>
                    <stop offset="0.498593" stopColor="#FFE0A7"/>
                    <stop offset="1" stopColor="#FFE0A7" stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_316_27497"
                    x1="947.291"
                    y1="66.5"
                    x2="947.291"
                    y2="37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={token?.colorPrimaryHover}/>
                    <stop
                        offset="1"
                        stopColor={token?.colorPrimaryHover}
                        stopOpacity="0"
                    />
                </linearGradient>
                <radialGradient
                    id="paint5_radial_316_27497"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(959.819 66.5881) scale(198.791 3.58861)"
                >
                    <stop stopColor="white"/>
                    <stop offset="0.1375" stopColor={token?.colorPrimaryBorderHover}/>
                    <stop offset="0.2097" stopColor={token?.colorPrimaryHover}/>
                    <stop offset="0.2424" stopColor={token?.colorPrimaryText}/>
                    <stop offset="0.2882" stopColor={token?.colorPrimaryTextActive}/>
                    <stop offset="0.3386" stopColor="#835A00"/>
                    <stop offset="0.3924" stopColor="#604200"/>
                    <stop offset="0.4505" stopColor="#422D00"/>
                    <stop offset="0.5142" stopColor="#2A1D00"/>
                    <stop offset="0.5859" stopColor="#171000"/>
                    <stop offset="0.6702" stopColor="#0A0700"/>
                    <stop offset="0.779" stopColor={token?.['green-10']}/>
                    <stop offset="1"/>
                </radialGradient>
                <linearGradient
                    id="paint6_linear_316_27497"
                    x1="737"
                    y1="55.9959"
                    x2="0"
                    y2="55.9959"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={color}/>
                    <stop offset="1" stopColor={color} stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_316_27497"
                    x1="1183"
                    y1="54.9959"
                    x2="1920"
                    y2="54.9959"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={color}/>
                    <stop offset="1" stopColor={color} stopOpacity="0"/>
                </linearGradient>
                <clipPath id="clip0_316_27497">
                    <rect
                        width="397.64"
                        height="7.18"
                        fill="white"
                        transform="translate(761 63)"
                    />
                </clipPath>
            </defs>
        </SvgRender>
    );
}

export default ApertureSvg;

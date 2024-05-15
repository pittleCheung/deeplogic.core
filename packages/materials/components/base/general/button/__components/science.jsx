import {Button} from 'antd';
import {button, svg, text} from './_style';

function Science({children, ...props}) {
    return (
        <Button className={button} {...props}>
            <span className={text}>{children}</span>
            <svg
                className={svg}
                viewBox="0 0 105 40"
                fill="none"
                preserveAspectRatio="xMidYMin slice"
            >
                <g opacity="0.5">
                    <g filter="url(#filter0_i_0_1245)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.3801 1H93.3009L104 11.6472V27.7707L93.4691 39H11.3897L1 28.8643V11.0622L11.3801 1Z"
                            fill="url(#paint0_linear_0_1245)"
                        />
                    </g>
                    <path
                        d="M1.30495 11.1913L11.5036 1.30495H93.175L103.695 11.774V27.65L93.337 38.695H11.5138L1.30495 28.7357V11.1913Z"
                        stroke="#23FFF9"
                        strokeOpacity="0.625417"
                        strokeWidth="0.609901"
                    />
                </g>
                <path
                    opacity="0.5"
                    d="M53 39V30"
                    stroke="url(#paint1_linear_0_1245)"
                    strokeWidth="0.5"
                />
                <path
                    opacity="0.5"
                    d="M53 10V1"
                    stroke="url(#paint2_linear_0_1245)"
                    strokeWidth="0.5"
                />
                <path
                    d="M102.426 29.3568L93.6021 38.6379H11.3537L2.01697 29.3568"
                    stroke="url(#paint3_linear_0_1245)"
                    strokeWidth="0.609901"
                    strokeLinecap="round"
                />
                <circle
                    cx="1.5"
                    cy="28.7355"
                    r="1.19505"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.19505"
                    transform="matrix(-1 0 0 1 104.93 27.2355)"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <path
                    d="M102.426 10.4916L93.6021 1.21045H11.3537L2.01697 10.4916"
                    stroke="url(#paint4_linear_0_1245)"
                    strokeWidth="0.609901"
                    strokeLinecap="round"
                />
                <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.19505"
                    transform="matrix(1 0 0 -1 0 12.613)"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <circle
                    cx="103.43"
                    cy="11.113"
                    r="1.19505"
                    transform="rotate(-180 103.43 11.113)"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <path
                    d="M15.6677 20.0757H1.8009"
                    stroke="url(#paint5_linear_0_1245)"
                    strokeWidth="0.609901"
                    strokeLinecap="round"
                />
                <circle
                    cx="1.5"
                    cy="19.7953"
                    r="1.19505"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <path
                    d="M88.8559 20.0757H102.723"
                    stroke="url(#paint6_linear_0_1245)"
                    strokeWidth="0.609901"
                    strokeLinecap="round"
                />
                <circle
                    cx="1.5"
                    cy="1.5"
                    r="1.19505"
                    transform="matrix(-1 0 0 1 104.93 18.2953)"
                    fill="#064459"
                    stroke="#0BC0DC"
                    strokeWidth="0.609901"
                />
                <defs>
                    <filter
                        id="filter0_i_0_1245"
                        x="1"
                        y="1"
                        width="103"
                        height="38"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0.878431 0 0 0 0 0.858824 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_0_1245"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_0_1245"
                        x1="1"
                        y1="1"
                        x2="1"
                        y2="39"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#002C41"/>
                        <stop offset="0.499804" stopColor="#000A25"/>
                        <stop offset="1" stopColor="#002139"/>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_0_1245"
                        x1="52.9554"
                        y1="39"
                        x2="52.9554"
                        y2="31.6037"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0DD5E4"/>
                        <stop offset="0.682323" stopColor="#077997"/>
                        <stop offset="1" stopColor="#044E73" stopOpacity="0.01"/>
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_0_1245"
                        x1="52.9554"
                        y1="10"
                        x2="52.9554"
                        y2="2.60372"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#044E73" stopOpacity="0.01"/>
                        <stop offset="0.317677" stopColor="#077997"/>
                        <stop offset="1" stopColor="#0DD5E4"/>
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_0_1245"
                        x1="-0.064297"
                        y1="24.6715"
                        x2="101.315"
                        y2="24.6715"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0DD5E4"/>
                        <stop offset="0.498681" stopColor="#000B26"/>
                        <stop offset="1" stopColor="#0DD5E4"/>
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_0_1245"
                        x1="-0.064297"
                        y1="15.1769"
                        x2="101.315"
                        y2="15.1769"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0DD5E4"/>
                        <stop offset="0.498681" stopColor="#000B26"/>
                        <stop offset="1" stopColor="#0DD5E4"/>
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_0_1245"
                        x1="1.31011"
                        y1="20.6153"
                        x2="15.9199"
                        y2="20.6153"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0DD5E4"/>
                        <stop offset="0.682323" stopColor="#077997"/>
                        <stop offset="1" stopColor="#044E73" stopOpacity="0.01"/>
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_0_1245"
                        x1="103.214"
                        y1="20.6153"
                        x2="88.6037"
                        y2="20.6153"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0DD5E4"/>
                        <stop offset="0.682323" stopColor="#077997"/>
                        <stop offset="1" stopColor="#044E73" stopOpacity="0.01"/>
                    </linearGradient>
                </defs>
            </svg>
        </Button>
    );
}

export default Science;

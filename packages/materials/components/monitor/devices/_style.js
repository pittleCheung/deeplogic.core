import {css} from '@emotion/css';

function water_flow(width) {
 if (width > 200) {
        return '110s';
    } else {
        return '80s';
    }
}

function reverse_awter_flow(width) {
    if (width > 400) {
        return '20s';
    } else if (width > 200) {
        return '14s';
    } else {
        return '8s';
    }
}

export default {
    water_flow: (token) => css`
        stroke: ${token.color};
        stroke-width: ${token.height};
        stroke-dasharray: 12;
        animation: water_flow 0.8s linear infinite; 
        opacity: 0.35;
    `,

    reverse_awter_flow: (token) => css`
        stroke: ${token.color};
        stroke-width: ${token.height};
        stroke-dasharray: 12;
        animation: reverse_water_flow 0.8s linear infinite;
        opacity: 0.35;
    `,

    water_flow_vertical: (token) => css`
        stroke: ${token.color};
        stroke-width: ${token.height};
        stroke-dasharray: 12;
        animation:water_flow 0.8s linear infinite;
        opacity: 0.35;
    `,

    reverse_water_flow_vertical: (token) => css`
        stroke: ${token.color};
        stroke-width: ${token.height};
        stroke-dasharray: 12;
        animation: reverse_water_flow 0.8s linear infinite;
        opacity: 0.35;
    `
};

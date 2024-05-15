import data from './__data/sankey.json';

export default {
    title: {},
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: [
        {
            type: 'sankey',
            data: data.nodes,
            links: data.links,
            emphasis: {
                focus: 'adjacency',
            },
            lineStyle: {
                color: 'gradient',
                curveness: 0.5,
            },
        },
    ],
};

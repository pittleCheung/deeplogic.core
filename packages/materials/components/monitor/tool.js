/**
 * 管子固定横竖方向改变宽高
 * @param {*} e
 */

const toolstyle = (e) => {
    document.querySelector(`.node${e.target.id}`).style.cssText += e.cssText;
    document.querySelector(`.node${e.target.id}`).childNodes[0].childNodes[0].style.width = e.style.width;
    document.querySelector(`.node${e.target.id}`).childNodes[0].childNodes[0].style.height = e.style.height;
    e.target.style.cssText += e.cssText;
};

const beforToolestyle = (id, style) => {
    document.querySelector(`.node${id}`).childNodes[0].childNodes[0].style.width = style.width;
    document.querySelector(`.node${id}`).childNodes[0].childNodes[0].style.height = style.height;
    document.querySelector(`.node${id}`).childNodes[0].childNodes[0].style.transform = style.transform;
}

const resizestyle = (e) => {
    e.target.firstChild.firstChild.style.cssText += `width: ${e.width}px; height: ${e.height}px; display: flex;`;
    e.target.style.transform = e.drag.transform;
};

// 分解translate的x和y
const getTranslate = (transform) => {
    const translate = transform.match(/translate\(([^,]+),([^)]+)\)/);
    if (!!translate?.length) { 
        return {
            x: parseInt(translate[1].replace('px', '')),
            y: parseInt(translate[2].replace('px', '')),
        };
    } 
    return {
        x: 0,
        y: 0
    }
};

// 获取旋转角度
export const getRotate = (transform) => {
    if (!transform) return;
    const translate = transform.match(/translate\(([^,]+),([^)]+)\) rotate\(([^]+)deg\)/);
    if (!translate) return 0;
    return isNaN(parseInt(translate[3])) ? 0 : parseInt(translate[3]);
};

export const getTranslate2 = (transform) => {
    if (!transform) return;
    const translate = transform.match(/translate\(([^,]+),([^)]+)\) rotate\(([^]+)deg\)/);
    if (!!translate?.length) {
        return {
            x: parseInt(translate[1].replace('px', '')),
            y: parseInt(translate[2].replace('px', '')),
            r: parseInt(translate[3])
        };
    }
    return {
        x: 0,
        y: 0,
        r: 0
    }
};

// 遍历所有元素，获取距离盒子顶部最近的
const alignNodes = (nodes, tag, setAllChildren, allChildren) => {
    const boxstyle = document.querySelector('.containerdraw')?.getBoundingClientRect();
    const obj = allChildren;
    if (tag == 'left') {
        const minleft = Math.min(...nodes?.map((t) => t.getBoundingClientRect().left));
        nodes.forEach((child) => {
            const currentNode = document.getElementById(child.id).style;
            obj[child.id] = {
                y: currentNode?.top ? Number(currentNode.top.replace('px', '')) : 0,
                x: currentNode?.left ? currentNode?.left.replace('px', '') : 0,
                transform: currentNode?.transform || '',
            };
            if (currentNode.transform.includes('translate')) {
                // 给translate赋值
                const translate = getTranslate(currentNode.transform.replaceAll(' ', '')); // {x: xxx, y: xxx}
                currentNode.transform = `translate(${minleft - child.getBoundingClientRect().left + translate.x}px, ${translate.y
                    }px)`;
                obj[child.id].transform = `translate(${minleft - child.getBoundingClientRect().left + translate.x}px, ${translate.y
                    }px)`;
            } else {
                // 给定位赋值
                currentNode.left = `${minleft - boxstyle.left}px`;
                obj[child.id].x = minleft - boxstyle.left;
            }
        });
    }
    if (tag == 'top') {
        const mintop = Math.min(...nodes?.map((t) => t.getBoundingClientRect().top));
        nodes.forEach((child) => {
            const currentNode = document.getElementById(child.id).style;
            obj[child.id] = {
                y: currentNode?.top ? Number(currentNode.top.replace('px', '')) : 0,
                x: currentNode?.left ? currentNode?.left.replace('px', '') : 0,
                transform: currentNode?.transform || '',
            };
            if (currentNode.transform.includes('translate')) {
                // 给translate赋值
                const translate = getTranslate(currentNode.transform.replaceAll(' ', '')); // {x: xxx, y: xxx}
                currentNode.transform = `translate(${translate.x}px, ${mintop - child.getBoundingClientRect().top + translate.y}px)`;
                obj[child.id].transform = `translate(${translate.x}px, ${mintop - child.getBoundingClientRect().top + translate.y
                    }px)`;
            } else {
                // 给定位赋值
                currentNode.top = `${mintop - boxstyle.top}px`;
                obj[child.id].y = mintop - boxstyle.top;
            }
        });
    }
    setAllChildren(obj);
};

/**
 * 设备类型下拉框
 */
const deviceTypeOptions = {
    D0A1B: '冷冻水泵',
    D0A1C: '冷却水泵',
    D0A1E: '二次冷冻水泵',
    D0AZC: '其他水泵',
    // D0A30 阀门
    // D0A1A 冷机
};

/**
 * 通用设备样式
 */
const commonDeviceStyle = (values) => {
    return {
        name: 'style',
        title: {
            label: '样式',
            tip: 'style | 样式',
        },
        propType: 'object',
        setter: {
            component: 'NodeSetter',
            props: {
                open: true,
                values: {
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    width: 100,
                    height: 100,
                    fill: '#c8c8c8',
                    stroke: '#000',
                    strokeWidth: 1,
                    opacity: 1,
                    borderRadius: 0,
                    ...values,
                },
            },
        },
    };
};

/**
 * 通用设备事件
 */
const commonDeviceHandle = {
    name: 'events',
    title: {
        label: '事件',
        tip: 'events | 事件',
    },
    setter: {
        component: 'EventSetter',
        props: [
            {
                name: 'onClick',
                title: {
                    label: '点击',
                    tip: 'onClick | 点击',
                },
                fieldProps: {
                    labelWidth: 80,
                },
                props: {
                    type: 'event',
                    placeholder: '点击事件',
                },
            },
        ],
    },
};

function debounce(func, delay) {
    let timer;
    return function (...args) {
        // 如果已经设置了定时器，则清除之前的定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 创建一个新的定时器，延迟执行传入的函数
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * 添加关键帧到文档头部
 * @param name
 * @param keyframes
 */
export const addKeyframes = (name, keyframes) => {
    const styleSheet = document.styleSheets[0];
    const isExist = Array.from(styleSheet.cssRules).some((rule) => rule.name === name);

    if (!isExist) {
        const keyframeRule = `
      @keyframes ${name} {
        ${keyframes}
      }
    `;
        styleSheet.insertRule(keyframeRule);
    }
};

const translate = {
    x: 'translateX',
    y: 'translateY',
};
/**
 * 添加横向滚动动画
 * @param type x,y
 * @param width
 */
export const addScroll = () => {
    const keyframes =  `
    from { stroke-dashoffset: 24; }   
    `
    addKeyframes(`water_flow`, keyframes);
};

/**
 * 添加横向逆向滚动动画
 * @param type x,y
 * @param width
 */
export const addReversScroll = () => {
  const keyframes =  `
  to { stroke-dashoffset: 24; }    
  `
    addKeyframes(`reverse_awter_flow`, keyframes);
};

/**
 * 把target里面不存在的元素过滤出去
 */
export const filterNonentityNodes = (target, source) => {
    if (!target || !source) return [];
    const idMap = source?.map((t) => t?.props.id);
    return target.filter((t) => idMap.includes(t.id));
};

/**
 * 边界计算
 */
export const getBoundary = ({ offsetX, offsetY }) => {
    let width = document.querySelector('.container').parentElement.style.width;
    const clientWidth = document.documentElement.clientWidth;
    width = width === '100%' ? clientWidth - (24 * 2 + 252 * 2 + 16 * 2) : width;
    let height = document.querySelector('.container').parentElement.style.height;
    height = height === '100%' ? 736 : height.slice(0, -2);
    const x = offsetX < 75 ? 0 : width - offsetX < 75 * 2 ? width - (75 * 2 - 32) : offsetX;
    const y = offsetY < 62 ? 0 : height - offsetY < 62 ? height - 62 : offsetY;
    return { x, y };
};

/**
 * 顶部对齐
 * @param ref
 */
export const alignTop = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child) => {
        child.request(
            'draggable',
            {
                y: rect.top,
            },
            true,
        );
    });

    rect.current?.updateRect();
};
/**
 * 底部对齐
 * @param ref
 */
export const alignBottom = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child) => {
        child.request(
            'draggable',
            {
                y: rect.top + rect.height,
            },
            true,
        );
    });

    rect.current?.updateRect();
};

/**
 * 
 * @param {左侧对齐} ref 
 * @returns 
 */
export const alignLeft = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child) => {
        child.request(
            'draggable',
            {
                x: rect.left,
            },
            true,
        );
    });

    rect.current?.updateRect();
};

/**
 * 右侧对齐
 * @param ref
 */
export const alignRight = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child) => {
        child.request(
            'draggable',
            {
                x: rect.left + rect.width,
            },
            true,
        );
    });

    rect.current?.updateRect();
};
/**
 * 水平居中
 * @param ref
 */
export const alignHorizontallyCenter = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child, i) => {
        child.request(
            'draggable',
            {
                x: rect.left + rect.width / 2 - rect.children[i].width / 2,
            },
            true,
        );
    });

    rect.current?.updateRect();
};
/**
 * 垂直居中
 * @param ref
 */
export const alignVerticallyCenter = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();

    if (movables.length <= 1) return;

    movables.forEach((child, i) => {
        child.request(
            'draggable',
            {
                y: rect.top + rect.height / 2 - rect.children[i].height / 2,
            },
            true,
        );
    });

    rect.current?.updateRect();
}
/**
 * 水平间距
 * @param ref
 */
const arrangeHorizontallySpacing = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();
    let left = rect.left;

    if (movables.length <= 1) return;

    const gap = (rect.width - rect.children.reduce((prev, cur) => {
        return prev + cur.width;
    }, 0)) / (movables.length - 1);
    movables.sort((a, b) => {
        return a.state.left - b.state.left;
    });

    movables.forEach((child) => {
        const rect = child.getRect();
        child.request(
            'draggable',
            {
                x: left,
            },
            true,
        );
        left += rect.width + gap;
    });

    rect.current?.updateRect();
}
/**
 * 垂直间距
 * @param ref
 */
const arrangeVerticalSpacing = (ref) => {
    if (!ref || !ref.current) return;

    const rect = ref?.current?.getRect();
    const movables = ref?.current?.getMoveables();
    let top = rect.top;

    if (movables.length <= 1) return;

    const gap = (rect.height - rect.children.reduce((prev, cur) => {
        return prev + cur.height;
    }, 0)) / (movables.length - 1);
    movables.sort((a, b) => {
        return a.state.top - b.state.top;
    });

    movables.forEach((child) => {
        const rect = child.getRect();
        child.request(
            'draggable',
            {
                x: top,
            },
            true,
        );
        top += rect.height + gap;
    });

    rect.current?.updateRect();
}
export const alignment = {
    alignTop,
    alignBottom,
    alignLeft,
    alignRight,
    alignHorizontallyCenter,
    alignVerticallyCenter,
    arrangeHorizontallySpacing,
    arrangeVerticalSpacing
};

export {
    alignNodes,
    commonDeviceHandle,
    commonDeviceStyle,
    debounce,
    deviceTypeOptions,
    getTranslate,
    resizestyle,
    toolstyle,
    beforToolestyle
};

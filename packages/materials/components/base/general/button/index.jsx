import {useEffect} from 'react';
import {craft} from '../../../_utils/utils';
import {Drag, Icon} from '../../../common';
import {useComponent} from '../../../useComponent';
import {DefaultButton, Green, Hexagon, Line, Science, Navigation} from './__components';
import meta from './meta';

function Button(props) {
    const {state, enabled, theme, setHidden, connectDrag, getData, getStateColor} = useComponent(props);

    if (!state) return null;

    const {template, icon, status, displayName, events, token, ...other} = state;

    const onClick = () => {
        const events = state?.events?.onClick;

        if (events) {
            const {action, link} = events;
            if (action === 'displayComponent' && link) {
                const node = getData(link.component);
                if (node) {
                    setHidden(link.component, !node?.hidden);
                }
            }
        }
    };

    // 用于获取状态文字及颜色
    const statusValue = getStateColor(state?.status)?.[0];
    const button = {onClick, ...other, ...theme, icon: icon ? <Icon icon={icon}/> : ''};
    
    useEffect(() => {
        if (props?.onPropChange) {
            props?.onPropChange?.(state);
        }
    }, [state]);

    if (enabled) {
        return (
            <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
                {
                    {
                        default: <DefaultButton {...button} style={{...button.style, background: statusValue?.color || button.style.background}}/>,
                        science: <Science {...button} />,
                        green: <Green {...button} />,
                        line: <Line {...button} />,
                        hexagon: <Hexagon {...button} />,
                        navigation: <Navigation {...button} />
                    }[template]
                }
            </Drag>
        );
    } else {
        return (
            <>
                {
                    {
                        default: <DefaultButton {...button} style={{...button.style, background: statusValue?.color || button.style.background}}/>,
                        science: <Science {...button} />,
                        green: <Green {...button} />,
                        line: <Line {...button} />,
                        hexagon: <Hexagon {...button} />,
                        navigation: <Navigation {...button} />
                    }[template]
                }
            </>
        );
    }
}

Button.craft = craft(meta);

export default Button;

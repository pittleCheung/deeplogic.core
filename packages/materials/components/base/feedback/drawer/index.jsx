import { Element } from '@craftjs/core';
import { Drawer as AntDrawer } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useCallback, useState ,useMemo} from 'react';
import { craft } from '../../../_utils/utils';
import { CustomNode } from '../../../common';
import Drag from '../../../common/drag';
import { useComponent } from '../../../useComponent';
import Button from '../../general/button';
import Container from '../../layout/container';
import meta from './meta';

function Drawer(props) {
	const [show, setShow] = useState(false);

	const { state, connectDrag, rootDOM } = useComponent(props);
	if (!state) return null;

	const { isTitle, isFooter, isExtra, children, getContainer,...restState } = state;
	const title = (
		<CustomNode>
			<Element
				canvas
				id='drawer-title'
				is={Container}
			/>
		</CustomNode>
	);
	const footer = (
		<CustomNode>
			<Element
				canvas
				id='drawer-footer'
				is={Container}
			/>
		</CustomNode>
	);
	const extra = (
		<CustomNode>
			<Element
				canvas
				id='drawer-extra'
				is={Container}
			/>
		</CustomNode>
	);
	const content = (
		<CustomNode>
			<Element
				canvas
				id='drawer-content'
				is={Container}
			/>
		</CustomNode>
	);

	const { rootStyle, container,width } = useMemo(() => {
		return {
			rootStyle: getContainer === 'body' ? { position: 'absolute' } : {},
			container: getContainer === 'body' ? rootDOM : false,
			width: {width:'fit-content'}
		}
	}, [getContainer])

	const handleOpen = useCallback(() => {
		setShow(true)
	},[])
	const onClose = useCallback(() => {
		setShow(false)
	},[])

	return (
		<>
			<Drag
				connectDrag={connectDrag}
				style={width}>
				<div onClick={handleOpen}>
					{children || (
						<Element
							canvas
							id={'drawer-button'}
							is={Button}>
							打开
						</Element>
					)}
				</div>
				<AntDrawer
					open={show}
					title={isTitle && title}
					extra={isExtra && extra}
					footer={isFooter && footer}
					onClose={onClose}
					rootStyle={rootStyle}
					getContainer={container}
					forceRender
					{...restState}>
					{content}
				</AntDrawer>
			</Drag>
		</>
	);
}

Drawer.craft = craft(meta);

export default memo(Drawer, equal);

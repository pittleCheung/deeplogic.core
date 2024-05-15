import {theme} from 'antd';
import cls from 'classnames';
import Selecto from 'react-selecto'; // 多选
import '../index.less';
import css from './_style';
import {useCanvas} from './hooks/useCanvas';

const SelectTool = () => {
    const {token} = theme?.useToken();
    const {targets, selectoRef, movableRef, setBoundBool, onMultipleSelect} = useCanvas();

    return (
        <Selecto
            className={cls('selectoBox', css.selector(token))}
            ref={selectoRef}
            rootContainer={document.getElementsByClassName('container')} // select 关联 无限画布
            dragContainer={window}
            selectableTargets={['.container .target']}
            hitRate={0}
            selectByClick={true}
            selectFromInside={false}
            continueSelectWithoutDeselect={true}
            continueSelect={false}
            boundContainer={false}
            toggleContinueSelect={['shift']}
            ratio={0} // 100
            onDragStart={(e) => {
                const movable = movableRef?.current || null;
                const target = e.inputEvent.target;
                if (
                    !e.inputEvent.craft ||
                    target.tagName === 'BUTTON' ||
                    movable.isMoveableElement(target) ||
                    targets.some((t) => t === target || t.contains(target))
                ) {
                    e.stop();
                }
            }}
            // onDragEnd={e => {
            //     if (!boundBool && e.datas) { // 更改拖进来的位置
            //         // setProps('currentkey', {
            //         //     style: {
            //         //         top: (e.clientX - e.datas.containerX),
            //         //         left: (e.clientY - e.datas.containerY)
            //         //     }
            //         // })
            //     }
            // }}
            onSelectStart={() => setBoundBool(true)}
            onSelectEnd={(e) => {
                const movable = movableRef?.current || null;
                if (e.isDragStart) {
                    e.inputEvent.preventDefault();
                    movable.waitToChangeTarget().then(() => movable.dragStart(e.inputEvent));
                }
                onMultipleSelect(e.selected);
                setBoundBool(false);
            }}
        ></Selecto>
    );
};

export default SelectTool;

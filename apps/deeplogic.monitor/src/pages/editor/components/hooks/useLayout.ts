import { useRef ,useCallback} from 'react';
import { editor } from '../helper/editor';
import useDesigner from './useDesigner';

function useLayout() {
  const { layout, sidebar } = useDesigner();
  const { pageId } = sidebar?.page ? sidebar?.page : {};
  const parseNodeRef = useRef(null);
  const { query, enabled, actions, onPaste, onUndo, onRedo, onDelete, onParent, isRoot, selected, ...other } = editor();
  /**
   * 复制
   * @type {(function(): void)|*}
   */
  const onCopy = useCallback(async () => {
    parseNodeRef.current = null;
    if (selected && !isRoot) {
      parseNodeRef.current = selected?.id;
    }
  }, [selected, isRoot]);

  /**
   * 层级调整
   * @type {(function(*): void)|*}
   */
  const onBring = (key) => {
    if (selected?.id) {
      const { id } = selected;
      const { custom } = selected?.data;

      if (!custom?.isDevice) return;

      switch (key) {
        case 'top':
          actions?.setProp(id, (prop) => {
            prop.style.zIndex = 960;
          });
          break;
        case 'up':
          actions?.setProp(id, (prop) => {
            if (prop.style.zIndex === 960) return;
            prop.style.zIndex = prop.style.zIndex ? prop.style.zIndex + 1 : 1;
          });
          break;
        case 'down':
          actions?.setProp(id, (prop) => {
            if (prop.style.zIndex === 0) return;

            prop.style.zIndex = prop.style.zIndex ? prop.style.zIndex - 1 : 0;
          });
          break;
        case 'bottom':
          actions?.setProp(id, (prop) => {
            prop.style.zIndex = 0;
          });
          break;
        default:
          break;
      }
    }
  };

  const onMove = useCallback((key) => {
    if (!selected?.id) return;

    const id = selected?.id;

    switch (key) {
      case 'up':
        actions?.setProp(id, (prop) => {
          prop.style.translateY = prop.style.translateY ? prop.style.translateY - 1 : 0;
        });
        break;
      case 'down':
        actions?.setProp(id, (prop) => {
          prop.style.translateY = prop.style.translateY ? prop.style.translateY + 1 : 0;
        });
        break;
      case 'left':
        actions?.setProp(id, (prop) => {
          prop.style.translateX = prop.style.translateX ? prop.style.translateX - 1 : 0;
        });
        break;
      case 'right':
        actions?.setProp(id, (prop) => {
          prop.style.translateX = prop.style.translateX ? prop.style.translateX + 1 : 0;
        });
        break;
      default:
        break;
    }
  }, [selected, actions]);

  /**
   * 键盘事件
   * @type {(function(*): void)|*}
   */
  const onKeyboard = useCallback((key) => {
    switch (key) {
      case 'c':
        onCopy?.();
        break;
      case 'v':
        onPaste?.(parseNodeRef.current);
        break;
      case 'z':
        onUndo?.();
        break;
      case 'y':
        onRedo?.();
        break;
      case 'Delete':
      case 'Backspace':
        onDelete?.(selected?.id);
        break;
      case 'RightDelete':
        onDelete?.(selected?.id);
        break;
      case 'Ctrl+ArrowUp':
        onParent?.();
        break;
      case 'Alt+1':
        onBring?.('top');
        break;
      case 'Alt+ArrowUp':
        onBring?.('up');
        break;
      case 'Alt+ArrowDown':
        onBring?.('down');
        break;
      case 'Alt+0':
        onBring?.('bottom');
        break;
      case 'ArrowUp':
        onMove?.('up');
        break;
      case 'ArrowDown':
        onMove?.('down');
        break;
      case 'ArrowLeft':
        onMove?.('left');
        break;
      case 'ArrowRight':
        onMove?.('right');
        break;
      default:
        break;
    }
  }, [onCopy, onPaste, onUndo, onRedo, onDelete, onParent, onBring, onMove, selected]);

  /**
   * 键盘按下事件
   * @param event
   */
  const onKeyDown = useCallback((event) => {
    const { key, ctrlKey, altKey, repeat } = event;

    if (!repeat) {
      if (ctrlKey || altKey) {
        const tempKey = `${ctrlKey ? 'Ctrl+' : ''}${altKey ? 'Alt+' : ''}${key}`;
        onKeyboard?.(tempKey);
      } else {
        onKeyboard?.(key);
      }
    }
  }, [onKeyboard]);

  return {
    ...layout,
    ...other,
    query,
    pageId,
    isRoot,
    enabled,
    selected,
    onPaste,
    onUndo,
    onRedo,
    onDelete,
    onParent,
    onKeyDown,
    onKeyboard,
    nodeId: selected?.id,
    isParse: parseNodeRef.current,
    nodeCustom: selected?.data?.custom,
    custom: sidebar?.materials?.custom
  };
}

export default useLayout;

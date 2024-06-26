import {
  ArrowGoBackLine,
  ArrowGoForwardLine,
  ArrowUpLine,
  BringForward,
  BringToFront,
  DeleteBin7Line,
  File4Line,
  FileCopyLine,
  SendBackward,
  SendToBack
} from '@/components/icons';
import Label from './label';

export default (isDevice, isRoot, isParse, isUndo, isRedo) => {
  return [
    {
      label: <Label label='复制' tag='Ctrl + C' />,
      icon: <FileCopyLine />,
      key: 'c',
      disabled: isRoot
    },
    {
      label: <Label label='粘贴' tag='Ctrl + V' />,
      icon: <File4Line />,
      key: 'v',
      disabled: !isParse
    },
    {
      label: <Label label='删除' tag='Delete' />,
      icon: <DeleteBin7Line />,
      key: 'RightDelete',
      disabled: isRoot
    },
    {
      label: <Label label='选择父级' tag='Ctrl + ↑' />,
      icon: <ArrowUpLine />,
      key: 'Ctrl+ArrowUp',
      disabled: isRoot
    },
    {
      type: 'divider'
    },
    {
      label: <Label label='置于顶层' tag='Alt + ↑' />,
      icon: <BringToFront />,
      key: 'Alt+ArrowUp',
      disabled: isDevice
    },
    {
      label: <Label label='上移一层' tag='Alt + 1' />,
      icon: <BringForward />,
      key: 'Alt+1',
      disabled: isDevice
    },
    {
      label: <Label label='下移一层' tag='Alt + 0' />,
      icon: <SendBackward />,
      key: 'Alt+0',
      disabled: isDevice
    },
    {
      label: <Label label='至于底层' tag='Alt + ↓' />,
      icon: <SendToBack />,
      key: 'Alt+ArrowDown',
      disabled: isDevice
    },
    {
      type: 'divider'
    },
    {
      label: <Label label='撤销' tag='Ctrl + Z' />,
      icon: <ArrowGoBackLine />,
      key: 'z',
      disabled: !isUndo
    },
    {
      label: <Label label='恢复' tag='Ctrl + Y' />,
      icon: <ArrowGoForwardLine />,
      key: 'y',
      disabled: !isRedo
    }
  ];
};

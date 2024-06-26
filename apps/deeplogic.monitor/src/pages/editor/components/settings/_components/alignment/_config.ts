import {
  AlignmentBottom,
  AlignmentHorizontally,
  AlignmentLeft,
  AlignmentRight,
  AlignmentTop,
  AlignmentVertically,
  DistributeHorizontally,
  DistributeVertically,
} from '@/components/icons';

export default [
  { itemKey: 'alignBottom', icon: AlignmentBottom, label: '底部对齐' },
  { itemKey: 'alignHorizontallyCenter', icon: AlignmentHorizontally, label: '水平居中' },
  { itemKey: 'alignLeft', icon: AlignmentLeft, label: '左对齐' },
  { itemKey: 'alignRight', icon: AlignmentRight, label: '右对齐' },
  { itemKey: 'alignTop', icon: AlignmentTop, label: '顶部对齐' },
  { itemKey: 'alignVerticallyCenter', icon: AlignmentVertically, label: '垂直居中' },
  { itemKey: 'arrangeHorizontallySpacing', icon: DistributeHorizontally, label: '水平间距' },
  { itemKey: 'arrangeVerticalSpacing', icon: DistributeVertically, label: '垂直间距' },
];

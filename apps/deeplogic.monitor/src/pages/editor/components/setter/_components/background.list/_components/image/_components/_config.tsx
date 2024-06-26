import { FileImageLine, FolderImageLine, FullscreenLine, ShapeLine } from '@/components/icons';
import { Tooltip } from 'antd';

export default {
  size: [
    {
      label: (
        <Tooltip title='拉伸'>
          <FullscreenLine />
        </Tooltip>
      ),
      value: '100% 100%',
      key: '100% 100%'
    },
    {
      label: (
        <Tooltip title='自动'>
          <ShapeLine />
        </Tooltip>
      ),
      value: 'auto',
      key: 'auto'
    },
    {
      label: (
        <Tooltip title='最大包含'>
          <FolderImageLine />
        </Tooltip>
      ),
      value: 'cover',
      key: 'cover'
    },
    {
      label: (
        <Tooltip title='固定比例'>
          <FileImageLine />
        </Tooltip>
      ),
      value: 'contain',
      key: 'contain'
    }
  ],
  repeat: [
    {
      label: 'repeat-x',
      value: 'repeat-x',
      key: 'repeat-x'
    },
    {
      label: 'repeat-y',
      value: 'repeat-y',
      key: 'repeat-y'
    },
    {
      label: 'repeat',
      value: 'repeat',
      key: 'repeat'
    },
    {
      label: 'no-repeat',
      value: 'no-repeat',
      key: 'no-repeat'
    },
    {
      label: 'round',
      value: 'round',
      key: 'round'
    },
    {
      label: 'space',
      value: 'space',
      key: 'space'
    }
  ]
};

import { message } from 'antd';

export const beforeUpload = (file) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/png' ||
    file.type === 'image/gif' ||
    file.type === 'image/jpg' ||
    file.type === 'image/bmp' ||
    file.type === 'image/webp' ||
    file.type === 'image/svg+xml' ||
    file.type === 'image/tiff' ||
    file.type === 'image/x-icon' ||
    file.type === 'image/vnd.microsoft.icon' ||
    file.type === 'image/vnd.wap.wbmp' ||
    file.type === 'image/x-xbitmap' ||
    file.type === 'image/x-jng' ||
    file.type === 'image/x-ms-bmp' ||
    file.type === 'image/x-bmp' ||
    file.type === 'image/x-win-bitmap' ||
    file.type === 'image/x-windows-bmp' ||
    file.type === 'image/ms-bmp' ||
    file.type === 'image/x-icon' ||
    file.type === 'image/x-ico' ||
    file.type === 'image/icon' ||
    file.type === 'image/x-image' ||
    file.type === 'image/x-jpeg' ||
    file.type === 'image/x-jpg' ||
    file.type === 'image/x-png' ||
    file.type === 'image/x-svg+xml' ||
    file.type === 'image/svg+xml' ||
    file.type === 'image/svg' ||
    file.type === 'image/svgz' ||
    file.type === 'image/vnd.adobe.svg+xml' ||
    file.type === 'image/vnd.wap.wbmp';

  if (!isJpgOrPng) {
    message.error('只支持JPG/PNG格式的图片');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小不能大于 2MB!');
  }

  return false;
};

import screenshot from './__screenshots__/Image_thumbnail.png';
import {customEvents,customStyle} from "../../../_utils/baseMeta";

export default {
  componentName: 'Image',
  category: '数据展示',
  title: '图片',
  screenshot,
  props: [
    // {
    //     name: 'height',
    //     title: {
    //         label: '高度',
    //         tip: 'height | 图片高度'
    //     },
    //     propType: 'number',
    //     defaultValue: 240
    // },
    // {
    //     name: 'width',
    //     title: {
    //         label: '宽度',
    //         tip: 'width | 图片宽度'
    //     },
    //     propType: 'number',
    //     defaultValue: 240
    // },
    {
      name: 'src',
      title: {
        label: '图片地址',
        tip: 'src | 图片地址'
      },
      propType: 'image'
    }
  ],
  style: customStyle(
    {
      width: '240px',
      height: '240px',
      widthType: 'fixed',
      heightType: 'fixed'
    },
    { show: ['size', 'spacing', 'border'] }
  ),
  events: customEvents({})
};

import { defaultStyle as style } from '../../../_utils/baseMeta';

export default {
  componentName: 'Page',
  title: '页面',
  category: '布局',
  screenshot: null,
  isElement: true,
  props: [
    {
      name: 'title',
      title: {
        label: '标题',
        tip: 'title | 页面标题'
      },
      defaultValue: '页面标题',
      propType: 'string'
    },
    {
      name: 'theme',
      title: {
        label: '主题配置',
        tip: 'theme | 页面主题'
      },
      defaultValue: {
        algorithm: 'defaultAlgorithm',
        token: {
          colorPrimary: '#1677ff'
        }
      },
      setter: {
        component: 'ThemeSetter',
        props: [
          {
            name: 'algorithm',
            title: {
              label: '主题配置',
              tip: 'theme | 页面主题'
            },
            propType: 'select',
            defaultValue: 'defaultAlgorithm',
            values: {
              defaultAlgorithm: '白色',
              darkAlgorithm: '黑色',
              darkBlue: '深蓝'
            }
          },
          {
            name: 'token',
            title: {
              label: '页面主题',
              tip: 'token | 用于设置页面主题'
            },
            propType: 'object',
            defaultValue: {
              colorPrimary: '#1677ff',
              borderRadius: 6
            },
            props: [
              {
                name: 'colorPrimary',
                title: {
                  label: '主色',
                  tip: 'colorPrimary | 设置页面的主题色'
                },
                propType: 'color',
                defaultValue: '#1677ff'
              },
              {
                name: 'borderRadius',
                title: {
                  label: '圆角',
                  tip: 'borderRadius | 设置页面组件的圆角'
                },
                propType: 'number',
                defaultValue: 6
              }
            ]
          }
        ]
      }
    }
  ],
  style
};

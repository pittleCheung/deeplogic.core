import { theme } from 'antd';

export const darkBlue = {
  token: {
    borderRadius: 2,
    colorPrimary: '#95f6f3',
    colorInfo: '#95f6f3',
    colorBgBase: '#244269',
    colorTextBase: '#f4f6f9',
    wireframe: true,
    colorError: '#e85b49',
    colorSuccess: '#4bae3d',
    fontSize: 16
  },
  components: {
    Menu: {
      itemSelectedBg: 'rgb(27, 47, 88)'
    },
    DatePicker: {
      activeShadow: '0 0 0 2px rgba(255, 255, 255, 0.1)',
      errorActiveShadow: '0 0 0 2px rgba(255,255,255, 0.06)',
      warningActiveShadow: '0 0 0 2px rgba(255,255,255, 0.1)'
    },
    Input: {
      activeShadow: '0 0 0 2px rgba(255,255,255, 0.1)',
      errorActiveShadow: '0 0 0 2px rgba(255,255,255, 0.06)',
      warningActiveShadow: '0 0 0 2px rgba(255,255,255, 0.1)'
    },
    InputNumber: {
      activeShadow: '0 0 0 2px rgba(255,255,255, 0.1)',
      errorActiveShadow: '0 0 0 2px rgba(255,255,255, 0.06)',
      warningActiveShadow: '0 0 0 2px rgba(255,255,255, 0.1)'
    },
    Mentions: {
      activeShadow: '0 0 0 2px rgba(255,255,255, 0.1)',
      errorActiveShadow: '0 0 0 2px rgba(255,255,255, 0.06)',
      warningActiveShadow: '0 0 0 2px rgba(255,255,255, 0.1)'
    },
    Select: {
      activeShadow: '0 0 0 2px rgba(255,255,255, 0.1)',
      errorActiveShadow: '0 0 0 2px rgba(255,255,255, 0.06)',
      warningActiveShadow: '0 0 0 2px rgba(255,255,255, 0.1)',
      optionSelectedBg: 'rgb(27, 47, 88)',
      optionSelectedColor: 'rgb(149, 246, 243)',
      controlOutline: 'rgba(255, 255, 255, 0.1)',
      colorWarningOutline: 'rgba(255, 255, 255, 0.1)',
      colorErrorOutline: 'rgba(255, 255, 255, 0.1)'
    },
    Button: {
      primaryShadow: '0 2px 0 rgba(20,30,45, 0.1)',
      dangerShadow: '0 2px 0 rgba(20,30,45, 0.06)',
      defaultShadow: '0 2px 0 rgba(20,30,45, 0.02)'
    },
    Alert: {
      colorErrorBg: 'rgba(170, 175, 209, 0.1)',
      colorErrorBorder: 'rgba(84, 41, 36, 0)',
      colorInfoBg: 'rgba(170, 175, 209, 0.1)',
      colorInfoBorder: 'rgba(59, 88, 87, 0)',
      colorSuccessBg: 'rgba(170, 175, 209, 0.1)',
      colorSuccessBorder: 'rgba(37, 66, 32, 0)',
      colorWarningBg: 'rgba(170, 175, 209, 0.1)',
      colorWarningBorder: 'rgba(89, 66, 20, 0)'
    },
    Modal: {
      headerBg: 'rgb(11, 65, 122)',
      contentBg: 'rgb(11, 65, 122)',
      footerBg: 'rgb(11, 65, 122)',
      colorSplit: 'rgb(47, 77, 126)',
      borderRadiusLG: 8
    },
    Table: {
      colorBgContainer: 'rgba(36, 66, 105, 0)',
      footerBg: 'rgba(250, 250, 250, 0)',
      headerBg: 'rgba(250, 250, 250, 0)'
    },
    Tree: {
      colorBgContainer: 'rgba(36, 66, 105, 0)'
    },
    Drawer: {
      colorBgElevated: 'rgb(32, 60, 97)'
    }
  },
  algorithm: theme.darkAlgorithm
};

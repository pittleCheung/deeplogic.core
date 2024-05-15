import { defineConfig } from 'vite'
import { convertLegacyToken } from "@ant-design/compatible/lib"
import react from '@vitejs/plugin-react-swc'
import themeConfig from "./src/layouts/theme"
import { theme } from "antd"

// v4 to v5 theme variable migration
const { defaultAlgorithm, defaultSeed, getDesignToken } = theme;
const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);
const v5Token = getDesignToken(themeConfig);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...mapToken,
          ...v4Token,
          ...v5Token,
          // 编辑器相关Token
          editorHeaderHeight: 48,
          editorPageTabsHeight: 50,
        },
      },
    },
  },
})

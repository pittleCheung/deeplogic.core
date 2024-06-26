import { defineConfig } from 'vite'
import { convertLegacyToken } from "@ant-design/compatible/lib"
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"
import themeConfig from "./src/layouts/theme"
import { theme } from "antd"
import path from "path"

// v4 to v5 theme variable migration
const { defaultAlgorithm, defaultSeed, getDesignToken } = theme;
const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);
const v5Token = getDesignToken(themeConfig);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/nrwl/nx/issues/19282
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "%config": path.resolve(__dirname, "src/utils/config"),
      "%request": path.resolve(__dirname, "src/utils/request"),
      "%common": path.resolve(__dirname, "src/utils/common"),
      "%rights": path.resolve(__dirname, "src/utils/rights"),
      "%lesscommon": path.resolve(__dirname, "src/pages/common.less"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
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

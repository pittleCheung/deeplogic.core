import { StateCreator } from "zustand"

type State = {
  sites: {}
}

type Action = {
  updateSites: (sites: State["sites"]) => void
}

export type sitesSlice = State & Action

export const useSitesStore: StateCreator<sitesSlice, [], [], sitesSlice> = (set) => ({
  sites: {
    pages: [], // 项目所有页面
    pageId: "", // 当前页面
    content: {}, // 当前页面内容
    comLibs: [], // 组件库分类
    comLib: {}, // 组件库
    customs: [], // 自定义组件
    customCategory: [], // 自定义组件分类
    devices: null, // 设备树
    refresh: true, // 是否刷新页面
  },
  updateSites: (sites) => {
    set((state) => ({ ...state, sites }))
  },
})

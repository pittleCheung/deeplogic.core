import { StateCreator } from "zustand";

type State = {
  pages:[];
};

type Action = {
  updatePageList: (pages: State["pages"]) => void
}

export type pageSlice = State & Action;

export const usePageStore: StateCreator<pageSlice, [], [], pageSlice> = (
  set
) => ({
  pages: [],
  updatePageList: (pages) => {
    set((state) => ({ ...state, pages }));
  }
});

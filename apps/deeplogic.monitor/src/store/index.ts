import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/shallow"
import { usePageStore, pageSlice } from "./pages"
import { useSitesStore, sitesSlice } from "./site"

type AppType = pageSlice & sitesSlice

export const useAppStore = createWithEqualityFn<AppType>(
  (...a) => ({
    ...usePageStore(...a),
    ...useSitesStore(...a),
  }),
  shallow,
)

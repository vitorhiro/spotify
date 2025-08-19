import { create } from "zustand";
import { persist } from "zustand/middleware";

import { SearchModel } from "./types";

export const useSearchStore = create<SearchModel>()(
  persist(
    (set) => ({
      search: "",
      setSearch: (value: string) => set({ search: value }),
    }),
    {
      name: "search",
    }
  )
);

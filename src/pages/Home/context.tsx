import { ReactNode, createContext, useContext, useState } from "react";

import { useSearch } from "@/api/Search/search.hooks";
import { useSearchStore } from "@/stores/search/useSearchStore";
import { SearchResults } from "@/types/search";
import { useDebounce } from "use-debounce";

import { HomeContextValues } from "./types";

const HomeContext = createContext<HomeContextValues>({} as HomeContextValues);

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState("artists");
  const { search } = useSearchStore();

  const [searchTerm] = useDebounce(search, 500);

  const { data, isLoading } = useSearch(searchTerm);

  return (
    <HomeContext.Provider
      value={{
        searchTerm,
        searchResults: data as SearchResults,
        isLoadingSearch: isLoading,
        filter,
        setFilter,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

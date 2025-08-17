import { ReactNode, createContext, useContext, useState } from "react";

import { useDebounce } from "use-debounce";

import { HomeContextValues } from "./types";

const HomeContext = createContext<HomeContextValues>({} as HomeContextValues);

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");

  const [searchTerm] = useDebounce(search, 500);

  return (
    <HomeContext.Provider value={{ search, searchTerm, setSearch }}>
      {children}
    </HomeContext.Provider>
  );
};

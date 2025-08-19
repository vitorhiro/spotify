import { Dispatch, SetStateAction } from "react";

import { SearchResults } from "@/types/search";

export interface HomeContextValues {
  searchTerm: string;
  searchResults: SearchResults;
  isLoadingSearch: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

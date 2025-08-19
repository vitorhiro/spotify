import { SearchResults } from "@/types/search";

export interface HomeContextValues {
  searchTerm: string;
  searchResults: SearchResults;
  isLoadingSearch: boolean;
}

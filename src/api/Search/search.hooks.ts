import { SearchResults } from "@/types/search";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { getSearchResults } from "./search.service";

export function useSearch(search: string): UseQueryResult<SearchResults> {
  return useQuery({
    queryKey: ["search-results", search],
    queryFn: () => getSearchResults(search),
    enabled: !!search,
    staleTime: 1000 * 60,
  });
}

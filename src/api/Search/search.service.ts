import { SearchResults } from "@/types/search";

import { api } from "..";

export const getSearchResults = async (search: string): Promise<SearchResults> => {
  const params = { q: search, type: "artist,album", limit: 10, offset: 0 };

  const { data } = await api.get("/search", {
    params,
  });

  return data;
};

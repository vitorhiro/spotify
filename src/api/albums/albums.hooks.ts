import { AlbumsResponse } from "@/types/album";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { fetchAlbums } from "./albums.service";

export function useFetchArtists(): UseQueryResult<AlbumsResponse> {
  return useQuery({
    queryKey: ["fetch-artists"],
    queryFn: () => fetchAlbums(),
  });
}

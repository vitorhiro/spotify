import { type UseQueryResult, useQuery } from "@tanstack/react-query";

import type { Artist, ArtistResponse, ArtistSearchResponse } from "../../types/artists";
import { fetchArtists, getArtistsById, getArtistsBySearch } from "./artists.service";

export function useFetchArtists(): UseQueryResult<ArtistResponse> {
  return useQuery({
    queryKey: ["fetch-artists"],
    queryFn: () => fetchArtists(),
  });
}

export function useArtistById(id: string): UseQueryResult<Artist> {
  return useQuery({
    queryKey: ["get-artist-by-id", id],
    queryFn: () => getArtistsById(id),
    enabled: !!id,
  });
}

export function useArtistBySearch(search: string): UseQueryResult<ArtistSearchResponse> {
  return useQuery({
    queryKey: ["search-artist", search],
    queryFn: () => getArtistsBySearch(search),
    enabled: !!search,
    staleTime: 1000 * 60,
  });
}

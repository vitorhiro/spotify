import { type UseQueryResult, useQuery } from "@tanstack/react-query";

import type {
  Artist,
  ArtistAlbumsResponse,
  ArtistResponse,
  ArtistSearchResponse,
} from "../../types/artist";
import {
  fetchArtists,
  getAlbumByArtist,
  getArtistTopTrack,
  getArtistsById,
  getArtistsBySearch,
} from "./artists.service";

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

export function useArtistTopTrack(id: string) {
  return useQuery({
    queryKey: ["get-artist-top-track", id],
    queryFn: () => getArtistTopTrack(id),
    enabled: !!id,
  });
}

export function useAlbumsByArtist({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}): UseQueryResult<ArtistAlbumsResponse> {
  const props = { id, limit, offset };
  return useQuery({
    queryKey: ["get-albums-by-artist", id, limit, offset],
    queryFn: () => getAlbumByArtist(props),
    enabled: !!id,
    placeholderData: (previousData) => previousData,
  });
}

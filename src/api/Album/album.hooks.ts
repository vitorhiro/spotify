import { AlbumDetails } from "@/types/album";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { getAlbumById } from "./album.service";

export function useAlbumById(id: string): UseQueryResult<AlbumDetails> {
  return useQuery({
    queryKey: ["get-artist-by-id", id],
    queryFn: () => getAlbumById(id),
    enabled: !!id,
  });
}

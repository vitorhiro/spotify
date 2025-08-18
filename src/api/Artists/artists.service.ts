import { api } from "@/api";
import { artistsIds } from "@/constants";
import { Artist, ArtistAlbumsResponse, ArtistResponse, ArtistSearchResponse } from "@/types/artist";
import { TrackResponse } from "@/types/track";

export const fetchArtists = async (): Promise<ArtistResponse> => {
  const params = { ids: artistsIds.join(",") };

  const { data } = await api.get("/artists", {
    params,
  });

  return data;
};

export const getArtistsById = async (id: string): Promise<Artist> => {
  const { data } = await api.get(`/artists/${id}`);

  return data;
};

export const getArtistsBySearch = async (search: string): Promise<ArtistSearchResponse> => {
  const params = { q: search, type: "artist", limit: 10, offset: 0 };

  const { data } = await api.get("/search", {
    params,
  });

  return data;
};

export const getArtistTopTrack = async (id: string): Promise<TrackResponse> => {
  const { data } = await api.get(`/artists/${id}/top-tracks`);

  return data;
};

export const getAlbumByArtist = async ({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}): Promise<ArtistAlbumsResponse> => {
  const params = { limit, offset };

  const { data } = await api.get(`/artists/${id}/albums`, { params });

  return data;
};

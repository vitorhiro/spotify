import { api } from "@/api";
import { artistsIds } from "@/constants";
import { Artist, ArtistResponse, ArtistSearchResponse } from "@/types/artists";

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

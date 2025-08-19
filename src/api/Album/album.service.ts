import { AlbumDetails } from "@/types/album";

import { api } from "..";

export const getAlbumById = async (id: string): Promise<AlbumDetails> => {
  const { data } = await api.get(`/albums/${id}`);

  return data;
};

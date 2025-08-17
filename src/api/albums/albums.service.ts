import { AlbumsResponse } from "@/types/album";

import { api } from "..";

export const fetchAlbums = async (): Promise<AlbumsResponse> => {
  const { data } = await api.get("/artists", {});
  return data;
};

import { Album } from "@/types/album";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AlbumModel } from "./types";

export const useAlbumStore = create<AlbumModel>()(
  persist(
    (set) => ({
      currentAlbum: {} as Album,
      setCurrentAlbum: (album: Album) => set({ currentAlbum: album }),
    }),
    {
      name: "album",
    }
  )
);

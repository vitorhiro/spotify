import { Artist } from "@/types/artist";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ArtistModel } from "./types";

export const useArtistStore = create<ArtistModel>()(
  persist(
    (set) => ({
      currentArtist: {} as Artist,
      setCurrentArtist: (artist: Artist) => set({ currentArtist: artist }),
    }),
    {
      name: "artist",
    }
  )
);

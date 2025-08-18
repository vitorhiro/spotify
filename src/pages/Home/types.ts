import { Dispatch, SetStateAction } from "react";

import { Artist } from "@/types/artist";

export interface HomeContextValues {
  search: string;
  searchTerm: string;
  setSearch: Dispatch<SetStateAction<string>>;
  currentArtist: Artist;
  setCurrentArtist: Dispatch<SetStateAction<Artist>>;
}

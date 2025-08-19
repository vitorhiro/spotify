import { Artist } from "@/types/artist";

export interface ArtistModel {
  currentArtist: Artist;
  setCurrentArtist: (artist: Artist) => void;
}

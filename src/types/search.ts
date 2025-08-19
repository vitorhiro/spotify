import { AlbumSearched } from "./album";
import { ArtistSearched } from "./artist";

export interface SearchResults {
  artists: ArtistSearched;
  albums: AlbumSearched;
}

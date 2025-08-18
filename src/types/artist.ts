import { Album } from "./album";
import { ExternalUrls, Image, PaginationInfo } from "./generics";

export interface Followrs {
  href: string | null;
  total: number;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followrs;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export interface ArtistResponse {
  artists: Artist[];
}

export interface ArtistSearched extends PaginationInfo {
  items: Artist[];
}

export interface ArtistSearchResponse extends PaginationInfo {
  artists: ArtistSearched;
}

export interface ArtistAlbumsResponse extends PaginationInfo {
  items: Album[];
}

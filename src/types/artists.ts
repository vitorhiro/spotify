import { ExternalUrls, Image } from "./generics";

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

export interface ArtistSearched {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface ArtistSearchResponse {
  href: string;
  limit: number;
  next: "https://api.spotify.com/v1/search?offset=10&limit=10&query=queen&type=artist&locale=en-US,en;q%3D0.9,pt;q%3D0.8";
  offset: number;
  previous: string | null;
  total: number;
  artists: ArtistSearched;
}

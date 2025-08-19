import { Artist } from "./artist";
import { Copyright, ExternalIds, ExternalUrls, Image, PaginationInfo } from "./generics";
import { Track } from "./track";

export interface AlbumRestriction {
  reason: string;
}

export type SpotifyAlbumType = "album" | "single" | "compilation";
export type SpotifyAlbumGroup = "album" | "single" | "compilation" | "appears_on";

export interface Album {
  album_type: SpotifyAlbumType;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: AlbumRestriction;
  type: "album";
  uri: string;
  artists: Omit<Artist, "followers" | "genres" | "images" | "popularity">[];
  album_group?: SpotifyAlbumGroup;
}

export interface AlbumDetails extends Album {
  tracks: {
    items: Track[];
  };
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
}

export interface AlbumSearched extends PaginationInfo {
  items: Album[];
}

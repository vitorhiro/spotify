import { Album } from "@/types/album";

export interface AlbumModel {
  currentAlbum: Album;
  setCurrentAlbum: (Album: Album) => void;
}

import { ReactNode, createContext, useContext } from "react";

import { useAlbumById } from "@/api/Album/album.hooks";
import { useAlbumStore } from "@/stores/album/useAlbumStore";
import { AlbumDetails } from "@/types/album";

import { AlbumDetailContextValues } from "./types";

const AlbumDetailContext = createContext<AlbumDetailContextValues>({} as AlbumDetailContextValues);

export const useAlbumDetail = () => useContext(AlbumDetailContext);

export const AlbumDetailProvider = ({ children }: { children: ReactNode }) => {
  const { currentAlbum } = useAlbumStore();

  const { data } = useAlbumById(currentAlbum.id);
  console.log("🚀 ~ AlbumDetail ~ data:", data);
  console.log("🚀 ~ AlbumDetail ~ currentAlbum:", currentAlbum);

  return (
    <AlbumDetailContext.Provider
      value={{
        dataAlbumDetail: data || ({} as AlbumDetails),
      }}
    >
      {children}
    </AlbumDetailContext.Provider>
  );
};

import { useNavigate } from "react-router";

import Carousel from "@/components/Carousel";
import { useAlbumStore } from "@/stores/album/useAlbumStore";
import { useSearchStore } from "@/stores/search/useSearchStore";
import { Album } from "@/types/album";

import { useHome } from "../context";

export default function CarouselAlbums() {
  const { searchResults, isLoadingSearch } = useHome();

  const { setSearch } = useSearchStore();
  const { setCurrentAlbum } = useAlbumStore();

  const navigate = useNavigate();

  const handleDetails = (album: Album) => {
    setCurrentAlbum(album);
    setSearch("");
    navigate(`/album/${album.id}`);
  };

  return (
    <Carousel
      loading={isLoadingSearch}
      data={searchResults?.albums?.items || []}
      type="album"
      handleClick={handleDetails}
    />
  );
}

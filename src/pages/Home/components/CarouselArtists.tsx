import { useNavigate } from "react-router";

import { useFetchArtists } from "@/api/Artists/artists.hooks";
import Carousel from "@/components/Carousel";
import { useArtistStore } from "@/stores/artist/useArtistStore";
import { useSearchStore } from "@/stores/search/useSearchStore";
import { Artist } from "@/types/artist";

import { useHome } from "../context";

export default function CarouselArtists() {
  const { searchTerm, searchResults, isLoadingSearch } = useHome();
  const { setSearch } = useSearchStore();
  const { setCurrentArtist } = useArtistStore();

  const { data: defaultArtists, isLoading: isLoadingDefault } = useFetchArtists();

  const navigate = useNavigate();

  const artistis: Artist[] | undefined = searchTerm
    ? searchResults?.artists?.items
    : defaultArtists?.artists;

  const handleDetails = (artist: Artist) => {
    setCurrentArtist(artist);
    setSearch("");
    navigate(`/artist/${artist.id}`);
  };

  return (
    <Carousel
      loading={isLoadingDefault || isLoadingSearch}
      data={artistis || []}
      type="artist"
      handleClick={handleDetails}
    />
  );
}

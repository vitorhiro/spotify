import backgroundImage from "@/assets/images/background-image.jpg";

import ArtistDetail from "./components/ArtistDetail";
import CarouselArtists from "./components/CarouselArtists";
import Header from "./components/Header";
import { useHome } from "./context";

export default function HomePage() {
  const { currentArtist } = useHome();

  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden bg-cover bg-fixed font-sans text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2 py-20">
        <Header />
        <div className="flex max-h-[80vh] w-full flex-col px-40 py-6">
          {currentArtist?.id ? (
            <ArtistDetail />
          ) : (
            <div className="flex flex-col">
              <CarouselArtists />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

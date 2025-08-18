import { AnimatePresence } from "framer-motion";

import { useHome } from "../../context";
import Albums from "./components/Albums";
import Info from "./components/Info";
import TopTracks from "./components/TopTracks";

export default function ArtistDetail() {
  const { currentArtist } = useHome();

  return (
    <AnimatePresence>
      <div className="flex h-screen max-h-full w-full">
        {currentArtist.id && currentArtist?.images[0]?.url && (
          <div className="flex w-full gap-4 p-4">
            <div className="flex flex-7 flex-col gap-4">
              <Info />
              <TopTracks />
            </div>
            <div className="flex flex-3">
              <Albums />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

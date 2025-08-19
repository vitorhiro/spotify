import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router";

import backgroundImage from "@/assets/images/background-image.jpg";
import { useArtistStore } from "@/stores/artist/useArtistStore";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Albums from "./components/Albums";
import Info from "./components/Info";
import TopTracks from "./components/TopTracks";

export default function ArtistDetail() {
  const { currentArtist } = useArtistStore();

  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden bg-cover bg-fixed font-sans text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex max-h-[80vh] w-full flex-col px-40 py-6">
        <div className="mt-10 flex w-full items-center gap-4 p-4">
          <motion.button
            layoutId="button-home"
            onClick={() => navigate(-1)}
            className="p-04 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/10"
          >
            <MdOutlineHome size={28} />
          </motion.button>
        </div>
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
      </div>
    </div>
  );
}

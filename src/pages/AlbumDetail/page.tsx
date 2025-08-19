import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router";

import backgroundImage from "@/assets/images/background-image.jpg";
import { useAlbumStore } from "@/stores/album/useAlbumStore";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Albums from "./components/Albums";
import Info from "./components/Info";
import TopTracks from "./components/TopTracks";

export default function AlbumDetailPage() {
  const { currentAlbum } = useAlbumStore();
  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen w-full flex-col overflow-y-scroll bg-cover bg-fixed font-sans text-white xl:overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex max-h-[80vh] w-full flex-col px-6 py-0 xl:px-40 xl:py-6">
        <div className="mt-10 flex w-full items-center gap-4 p-4">
          <motion.button
            layoutId="button-home"
            onClick={() => navigate(-1)}
            className="absolute right-4 bottom-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-500 hover:bg-white/10 xl:static xl:bg-white/20 xl:backdrop-blur-md"
          >
            <MdOutlineHome size={28} />
          </motion.button>
        </div>
        <AnimatePresence>
          <div className="flex h-screen max-h-full w-full">
            {currentAlbum.id && currentAlbum?.images[0]?.url && (
              <div className="flex w-full flex-col gap-4 p-4 xl:flex-row">
                <div className="flex flex-7 flex-col gap-4">
                  <Info />
                  <TopTracks />
                </div>
                <div className="flex flex-3">
                  <Albums />{" "}
                </div>
              </div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

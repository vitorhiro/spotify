import { useTranslation } from "react-i18next";

import backgroundImage from "@/assets/images/background-image.jpg";
import { Button } from "@/components/ui/button";
import { useArtistStore } from "@/stores/artist/useArtistStore";
import { useSearchStore } from "@/stores/search/useSearchStore";
import { AnimatePresence, motion } from "framer-motion";

import CarouselAlbums from "./components/CarouselAlbums";
import CarouselArtists from "./components/CarouselArtists";
import Header from "./components/Header";
import { useHome } from "./context";

export default function HomePage() {
  const { filter, setFilter } = useHome();
  const { search } = useSearchStore();
  const { currentArtist } = useArtistStore();
  const { t } = useTranslation();

  return (
    <div
      className="flex h-dvh w-full flex-col justify-center overflow-hidden bg-cover bg-fixed font-sans text-white md:justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2 md:py-20">
        <Header />
        <div className="flex max-h-[80vh] w-full flex-col px-6 py-6 md:px-40">
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="h-10">
                  <AnimatePresence>
                    {!currentArtist?.id && (
                      <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-4xl font-bold"
                      >
                        {t(`home.${filter}`)}
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>
                {search && (
                  <>
                    <Button
                      variant={filter === "artists" ? "default" : "outline"}
                      className={`cursor-pointer rounded-2xl ${filter === "artists" && "bg-primary-main hover:bg-primary-dark text-white transition"}`}
                      onClick={() => setFilter("artists")}
                    >
                      {t("home.artists")}
                    </Button>
                    <Button
                      variant={filter === "albums" ? "default" : "outline"}
                      className={`cursor-pointer rounded-2xl ${filter === "albums" && "bg-primary-main hover:bg-primary-dark text-white transition"}`}
                      onClick={() => setFilter("albums")}
                    >
                      {t("home.albums")}
                    </Button>
                  </>
                )}
              </div>
              {filter === "albums" ? <CarouselAlbums /> : <CarouselArtists />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useArtistBySearch, useFetchArtists } from "@/api/Artists/artists.hooks";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Artist } from "@/types/artist";
import { AnimatePresence, motion } from "framer-motion";

import { useHome } from "../context";

export default function CarouselArtists() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { searchTerm, currentArtist, setCurrentArtist, setSearch } = useHome();
  const { data: defaultArtists, isLoading: isLoadingDefault } = useFetchArtists();
  const { data: searchedArtists, isLoading: isLoadingSearched } = useArtistBySearch(searchTerm);

  const { t } = useTranslation();

  const artistis: Artist[] | undefined = searchTerm
    ? searchedArtists?.artists?.items
    : defaultArtists?.artists;

  const handleDetails = (artist: Artist) => {
    setCurrentArtist(artist);
    setSearch("");
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-md">
      <div className="flex w-full justify-center gap-4">
        <div className="h-10">
          <AnimatePresence>
            {!currentArtist?.id && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-4xl font-bold"
              >
                {t("home.artists")}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="bg w-10/12">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 py-2">
            {isLoadingDefault || isLoadingSearched ? (
              <div className="flex items-center gap-8">
                {[
                  ...Array(5)
                    .keys()
                    .map(() => (
                      <div className="flex flex-col gap-4">
                        <Skeleton className="h-40 w-40 rounded-xl" />
                        <Skeleton className="h-6 w-40 rounded-xl" />
                      </div>
                    )),
                ]}
              </div>
            ) : (
              artistis?.map((artist) => (
                <CarouselItem
                  key={artist.id}
                  className="pl-2 md:basis-1/3 lg:basis-1/4"
                  onClick={() => handleDetails(artist)}
                >
                  <motion.div
                    onHoverStart={() => setHoveredId(artist.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    animate={{
                      opacity: hoveredId && hoveredId !== artist.id ? 0.6 : 1,
                      scale: hoveredId === artist.id ? 1.05 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 pb-4 shadow-none"
                  >
                    <Card className="hover:text-background w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 pb-4 shadow-none transition hover:bg-neutral-300 hover:shadow-md hover:shadow-neutral-400">
                      <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-0 transition-transform duration-300 ease-in-out">
                        {artist?.images[0] && (
                          <motion.div
                            layoutId={`artist-image-${artist.id}`}
                            className="flex min-h-50 cursor-pointer items-center"
                          >
                            <img
                              src={artist?.images[0].url}
                              className="rounded-2xl shadow-md shadow-neutral-500"
                            />
                          </motion.div>
                        )}
                        <motion.div layoutId={`artist-name-${artist.id}`}>
                          <div>
                            <label className="cursor-pointer font-sans text-xl font-semibold">
                              {artist.name}
                            </label>
                          </div>
                        </motion.div>
                        <span className="hover:text-background">{t("home.artist")}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

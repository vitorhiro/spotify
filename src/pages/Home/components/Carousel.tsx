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

import { useHome } from "../context";

export default function CarouselComponent() {
  const { searchTerm } = useHome();
  const { data: defaultArtists } = useFetchArtists();
  const { data: searchedArtists } = useArtistBySearch(searchTerm);

  const { t } = useTranslation();

  const artistis = searchTerm ? searchedArtists?.artists?.items : defaultArtists?.artists;

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 py-2">
        {artistis?.map((artist) => (
          <CarouselItem key={artist.id} className="pl-2 md:basis-1/3 lg:basis-1/4">
            <Card className="hover:text-background w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 pb-4 shadow-none transition hover:bg-neutral-300 hover:shadow-md hover:shadow-neutral-400">
              <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-1 transition-transform duration-300 ease-in-out hover:scale-105">
                {artist?.images[0] && (
                  <div className="flex min-h-50 items-center">
                    <img
                      src={artist?.images[0].url}
                      className="rounded-2xl shadow-md shadow-neutral-500"
                    />
                  </div>
                )}
                <label className="cursor-pointer text-xl font-semibold">{artist.name}</label>
                <span className="hover:text-background">{t("home.artist")}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

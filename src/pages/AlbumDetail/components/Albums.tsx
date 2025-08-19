import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useAlbumsByArtist } from "@/api/Artists/artists.hooks";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAlbumStore } from "@/stores/album/useAlbumStore";
import { format } from "date-fns";

export default function Albums() {
  const [limit, setLimit] = useState(20);
  const [offset] = useState(0);

  const { t } = useTranslation();

  const { currentAlbum } = useAlbumStore();

  const { data, isLoading, isFetching } = useAlbumsByArtist({
    id: currentAlbum?.artists?.[0]?.id,
    limit,
    offset,
  });

  const filteredAlbums = data?.items.filter((album) => album.id !== currentAlbum?.id);

  const handlePagination = () => {
    setLimit(limit + 10);
  };

  return (
    <div className="h-1full mb-40 flex w-full flex-col gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-xl xl:mb-0">
      <h2 className="text-3xl font-bold">{t("details.related-album")}</h2>
      <div className="flex flex-col gap-4 overflow-y-scroll">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            {[
              ...Array(10)
                .keys()
                .map(() => <Skeleton className="h-24 w-full rounded-xl" />),
            ]}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredAlbums?.map((album) => (
              <div className="flex gap-2">
                <img src={album?.images[0]?.url} className="w-24 rounded-2xl object-cover" />
                <div className="flex flex-col justify-between gap-2 py-4">
                  <span className="text-sm">{album.name}</span>

                  <span className="text-xs">
                    {format(album.release_date, "yyyy")} - {t(`details.${album.album_type}`)}
                  </span>
                </div>
              </div>
            ))}
            {isFetching && (
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full rounded-xl" />
                ))}
              </div>
            )}
            {data && limit < data?.total && (
              <Button
                variant="link"
                className="flex w-full cursor-pointer justify-center p-4"
                onClick={() => handlePagination()}
              >
                ver mais
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

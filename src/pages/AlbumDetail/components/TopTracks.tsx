import { useTranslation } from "react-i18next";
import { MdAccessTime } from "react-icons/md";

import { DataTable } from "@/components/DataTable";
import { useArtistStore } from "@/stores/artist/useArtistStore";
import { Track } from "@/types/track";
import { ColumnDef } from "@tanstack/react-table";

import { useAlbumDetail } from "../context";

export default function TopTracks() {
  const { dataAlbumDetail } = useAlbumDetail();
  const { currentArtist } = useArtistStore();
  const { t } = useTranslation();

  const columns: ColumnDef<Track>[] = [
    {
      header: "#",
      cell: ({ row }) => row.index + 1,
    },
    {
      header: t("details.table.title"),
      cell: ({ row }) => {
        const name = row?.original?.name || "-";
        const artists = row?.original?.artists || [];
        return (
          <div className="flex flex-col">
            <span>{name}</span>
            <span className="text-xs text-neutral-300">
              {artists.length > 1
                ? artists.map((artist) => artist.name).join(", ")
                : artists[0].name !== currentArtist.name
                  ? artists[0].name
                  : ""}
            </span>
          </div>
        );
      },
    },
    {
      header: () => <MdAccessTime />,
      accessorKey: "duration_ms",
      cell: ({ row }) => {
        const totalSeconds = Math.floor(row.original.duration_ms / 1000);
        const seconds = totalSeconds % 60;

        const paddedSeconds = seconds.toString().padStart(2, "0");

        return (
          <div>
            {seconds}:{paddedSeconds}
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex max-h-full w-full flex-col gap-4 overflow-y-scroll rounded-2xl bg-white/5 p-4 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">{t("details.top-tracks")}</h2>
      <div className="max-h-full overflow-y-scroll">
        <DataTable data={dataAlbumDetail?.tracks?.items || []} columns={columns} />
      </div>
    </div>
  );
}

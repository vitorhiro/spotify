import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

import { motion } from "framer-motion";

import { useAlbumDetail } from "../context";

export default function Info() {
  const { dataAlbumDetail } = useAlbumDetail();
  console.log("🚀 ~ Info ~ dataAlbumDetail:", dataAlbumDetail);
  const { t } = useTranslation();

  const stars = Math.round(dataAlbumDetail.popularity / 20);

  return (
    <div className="text-background-app flex w-max flex-col rounded-2xl bg-white p-4">
      <div className="flex gap-8">
        {dataAlbumDetail?.images?.length > 0 && (
          <motion.div className="flex">
            <motion.img
              src={dataAlbumDetail?.images[0]?.url}
              layoutId={`artist-image-${dataAlbumDetail.id}`}
              className="h-20 w-20 rounded-full object-cover shadow-lg"
            />
          </motion.div>
        )}
        <div className="flex flex-col">
          <motion.div layoutId={`artist-name-${dataAlbumDetail.id}`}>
            <h2 className="text-4xl font-bold">{dataAlbumDetail.name}</h2>
          </motion.div>
          <span className="text-neutral-500">{dataAlbumDetail.label}</span>
          <div className="flex items-center">
            {dataAlbumDetail?.artists?.map((artist, index) => (
              <span className="text-lg font-bold text-neutral-500">
                {artist.name} {index > dataAlbumDetail?.artists?.length && ","}
              </span>
            ))}
          </div>
          <span className="text-neutral-500">{t(`home.${dataAlbumDetail.album_type}`)}</span>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5).keys()].map((_, i) => (
                <FaStar key={i} className={i < stars ? "text-primary-main" : "text-gray-300"} />
              ))}
            </div>
            <span className="text-sm text-gray-500">{`${dataAlbumDetail.popularity}/100`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

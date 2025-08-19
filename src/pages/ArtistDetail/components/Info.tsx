import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

import { useArtistStore } from "@/stores/artist/useArtistStore";
import { motion } from "framer-motion";

export default function Info() {
  const { currentArtist } = useArtistStore();
  const { t } = useTranslation();

  const formattedFollowers = new Intl.NumberFormat("pt-BR").format(currentArtist?.followers?.total);
  const stars = Math.round(currentArtist.popularity / 20);

  return (
    <div className="text-background-app flex w-full flex-col rounded-2xl bg-white p-4 xl:w-max">
      <div className="flex flex-col gap-8 xl:flex-row">
        <motion.div className="flex">
          <motion.img
            src={currentArtist?.images[0]?.url}
            layoutId={`artist-image-${currentArtist.id}`}
            className="h-20 w-20 rounded-full object-cover shadow-lg"
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.div layoutId={`artist-name-${currentArtist.id}`}>
            <h2 className="text-4xl font-bold">{currentArtist.name}</h2>
          </motion.div>
          <span className="text-neutral-500">{t("home.artist")}</span>
          <div className="mt-1 flex items-center gap-1">
            <span className="font-bold">{formattedFollowers}</span>
            <label className="text-sm text-gray-500">{t("details.followers")}</label>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5).keys()].map((_, i) => (
                <FaStar key={i} className={i < stars ? "text-primary-main" : "text-gray-300"} />
              ))}
            </div>
            <span className="text-sm text-gray-500">{`${currentArtist.popularity}/100`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

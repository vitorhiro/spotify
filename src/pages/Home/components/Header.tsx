import { useTranslation } from "react-i18next";
import { MdOutlineClose, MdOutlineHome } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useArtistStore } from "@/stores/artist/useArtistStore";
import { useSearchStore } from "@/stores/search/useSearchStore";
import { Artist } from "@/types/artist";
import { motion } from "framer-motion";

import { useHome } from "../context";

export default function Header() {
  const { search, setSearch } = useSearchStore();
  const { setCurrentArtist } = useArtistStore();
  const { setFilter } = useHome();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleHome = () => {
    setSearch("");
    setCurrentArtist({} as Artist);
    setFilter("artists");
    if (!location.pathname.includes("home")) {
      navigate(-1);
    }
  };

  const handleClear = () => {
    setSearch("");
    setFilter("artists");
  };

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <motion.button
        layoutId="button-home"
        onClick={() => handleHome()}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/10"
      >
        <MdOutlineHome size={28} />
      </motion.button>
      <Input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={t("home.search-placeholder")}
        className="w-8/12 bg-white/20 backdrop-blur-xl placeholder:text-white md:w-1/3"
      />
      {search && (
        <Button
          type="button"
          size="icon"
          onClick={() => handleClear()}
          className="h-7 w-7 cursor-pointer bg-white/20 text-white backdrop-blur-xl"
        >
          <div>
            <MdOutlineClose />
          </div>
        </Button>
      )}
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { MdOutlineClose, MdOutlineHome } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Artist } from "@/types/artist";

import { useHome } from "../context";

export default function Header() {
  const { search, setCurrentArtist, setSearch } = useHome();
  const { t } = useTranslation();

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentArtist({} as Artist);
  };

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button
        onClick={() => setCurrentArtist({} as Artist)}
        className="p-04 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/10"
      >
        <MdOutlineHome size={28} />
      </button>

      <Input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={t("home.search-placeholder")}
        className="w-1/3 bg-white/20 backdrop-blur-md placeholder:text-white"
      />
      {search && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setSearch("")}
          className="absolute right-1/4 mt-7 mr-22 h-7 w-7 -translate-y-1/2 cursor-pointer"
        >
          <div>
            <MdOutlineClose />
          </div>
        </Button>
      )}
    </div>
  );
}

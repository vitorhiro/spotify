import { useTranslation } from "react-i18next";
import { MdOutlineHome } from "react-icons/md";

import backgroundImage from "@/assets/images/background-image.jpg";
import { Input } from "@/components/ui/input";

import CarouselComponent from "./components/Carousel";
import { useHome } from "./context";

export default function HomePage() {
  const { setSearch } = useHome();
  const { t } = useTranslation();
  return (
    <div
      className="flex h-screen w-full flex-col bg-cover p-20 font-sans text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="p-04 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/10">
            <MdOutlineHome size={28} />
          </div>

          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("home.search-placeholder")}
            className="w-1/2 bg-white/20 backdrop-blur-md placeholder:text-white"
          />
        </div>

        <div className="flex w-10/12 flex-col items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-md">
          <div className="flex w-full justify-center gap-4">
            <div className="text-2xl font-bold">{t(`home.artists`)}</div>
          </div>
          <div className="bg w-10/12">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

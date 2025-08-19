import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as CarouselShadcn,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

import { CarouselProps, DataGeneric } from "./types";

export default function Carousel<TData extends DataGeneric>({
  loading,
  data,
  type,
  handleClick,
}: CarouselProps<TData>) {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const { t } = useTranslation();

  return (
    <div className="w-full md:w-10/12">
      <CarouselShadcn className="w-full">
        <CarouselContent className="-ml-1 py-2">
          {loading ? (
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
            data.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                className="h-90 max-h-90 basis-1/2 pl-2 md:basis-1/3 lg:basis-1/4"
                onClick={() => handleClick(item)}
              >
                <motion.div
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  animate={{
                    opacity: hoveredId && hoveredId !== item.id ? 0.6 : 1,
                    scale: hoveredId === item.id ? 1.05 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-80 cursor-pointer rounded-2xl border-0 bg-transparent p-0 pb-4 shadow-none xl:w-full"
                >
                  <Card className="hover:text-background w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 pb-4 shadow-none transition hover:bg-neutral-300 hover:shadow-md hover:shadow-neutral-400">
                    <CardContent className="flex flex-col gap-4 p-0 transition-transform duration-300 ease-in-out md:items-center xl:justify-center">
                      {item?.images[0] && (
                        <motion.div
                          layoutId={`${type}-image-${item.id}`}
                          className="flex min-h-50 w-40 cursor-pointer items-center xl:w-10/12"
                        >
                          <img
                            src={item?.images[0].url}
                            className="rounded-2xl shadow-md shadow-neutral-500"
                          />
                        </motion.div>
                      )}
                      <motion.div layoutId={`${type}-name-${item.id}`}>
                        <div className="px-2">
                          <label className="cursor-pointer font-sans text-xl font-semibold">
                            {item.name}
                          </label>
                        </div>
                      </motion.div>
                      <span className="hover:text-background ml-2 md:ml-0">
                        {t(`home.${item.type}`)}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious />
        </div>
        <div className="hidden md:flex">
          <CarouselNext />
        </div>
      </CarouselShadcn>
    </div>
  );
}

import { Image } from "@/types/generics";

export type DataGeneric = {
  id: string | number;
  images: Image[];
  name: string;
  type: "artist" | "album";
};

export interface CarouselProps<TData extends DataGeneric> {
  loading: boolean;
  data: TData[];
  type: "artist" | "album";
  handleClick: (item: TData) => void;
}

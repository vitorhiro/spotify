import { Dispatch, SetStateAction } from "react";

export interface HomeContextValues {
  search: string;
  searchTerm: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

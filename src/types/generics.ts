export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface PaginationInfo {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface ExternalIds {
  isrc?: string;
  ean?: string;
  upc?: string;
}

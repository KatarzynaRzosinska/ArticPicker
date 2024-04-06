import { Pagination } from './pagiantion';

export interface Artist {
  id: number;
  title: string;
}

export interface ArtistList {
  artistList: Array<Artist>;
  pagination: Pagination;
}

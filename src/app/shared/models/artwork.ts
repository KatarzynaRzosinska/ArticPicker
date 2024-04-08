export interface Artwork {
  id: number;
  imageId: string;
  title: string;
  artistDisplay: string;
  artistId: number;
  artistIds: Array<number>;
  artistTitle: string;
  mediumDisplay: string;
  styleTitle: string;
  inscriptions: string;
  dimensions: string;
  dateDisplay: string;
  classification: string;
  publicDomain: boolean;
  placeOfOrigin: string;
  typeTitle: string;
  altText: string;
}

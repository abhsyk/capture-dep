export interface Movie {
  title: string;
  mainImg: string;
  secondaryImg: string;
  slug: string;
  awards: {
    title: string;
    description: string;
  }[];
}

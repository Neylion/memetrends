export interface Meme {
  id: number;
  year: number;
  isTrending: boolean;
  title: string;
  slug: string;
  description: string;
  readMoreUrl: string;
  images: Image[];
}

export interface Image {
  id: string;
  alt: string;
  url: string;
}

export interface IMeme {
  id: number;
  year: number;
  title: string;
  slug: string;
  description: string;
  readMoreLink: string;
  media: { images: IImage[] };
}

export interface IImage {
  id: string;
  alt: string;
  link: string;
}

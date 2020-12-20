import { createClient } from "contentful";
import { Meme, Image } from "../interfaces/meme";

const client = createClient({
  space: "gvdm5qspctwu",
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN || "Unknown!",
});

export default { getAllMemes };

async function getAllMemes(): Promise<Meme[]> {
  // TODO: Cache the response somehow (getAllMemes is reused in multiple localtions)
  const response = await client.getEntries({
    content_type: "meme",
  });

  return response.items.map(
    (meme: any): Meme => {
      const data = meme.fields;
      return {
        id: meme.sys.id,
        title: data.title,
        slug: data.slug,
        year: data.year,
        isTrending: data.isTrending,
        description: data.description,
        readMoreUrl: data.readMoreUrl,
        images: data.images.map(
          (image: any): Image => {
            const data = image.fields;
            return {
              id: image.sys.id,
              alt: data.title,
              url: data.file.url,
            };
          },
        ),
      };
    },
  );
}

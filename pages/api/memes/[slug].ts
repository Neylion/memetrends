import { NextApiRequest, NextApiResponse } from "next";
import { getMemes } from "../../../data/sampleData";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  switch (req.method) {
    case "GET":
      const meme = getMeme(slug);
      return res.send(meme);
    case "POST":
      //Example
      return res.send(`Not implemented! Posting ${slug}`);
    default:
      return res.send(`This endpoint does not support ${req.method} as method`);
  }
};

function getMeme(slug: string | string[]) {
  const meme = getMemes().find((x) => x.slug === slug);
  if (!meme) throw Error(`Could not find meme with slug ${slug}`);
  return meme;
}

export default handler;

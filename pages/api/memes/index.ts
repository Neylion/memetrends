import { NextApiRequest, NextApiResponse } from "next";
import sampleData from "../../../data/sampleData";
import { Meme } from "../../../interfaces/meme";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const memesData = getMemes();
      return res.status(200).json(memesData);
    case "POST":
      const meme: Meme = JSON.parse(req.body);
      // TODO: Validate meme
      addMemes(meme);
      return res.send(`Added meme with the slug '${meme.slug}'`);
    default:
      return res.send(`This endpoint does not support ${req.method} as method`);
  }
};

function getMemes() {
  const memesData = sampleData.getMemes();
  if (!Array.isArray(memesData)) {
    throw new Error("Cannot find memes data");
  }

  return memesData;
}

function addMemes(meme: Meme) {
  const conflictingMeme = sampleData
    .getMemes()
    .find((x) => x.slug === meme.slug || x.id === meme.id);
  if (conflictingMeme) {
    throw new Error(
      `Can't add meme due to conflict with existing meme with id ${conflictingMeme.id}`
    );
  }
  sampleData.addMeme(meme);
}
export default handler;

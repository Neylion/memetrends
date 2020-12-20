import { NextApiRequest, NextApiResponse } from "next";
// import sampleData from "../../../data/sampleData";
import { Meme } from "../../../interfaces/meme";
import contentful from "../../../utils/contentful";

// TODO: Add middleware handling (logging new requests, handling the response etc)
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const memesData = await getMemes();
      return res.status(200).json({
        success: true,
        data: memesData,
      });
    // case "POST":
    //   const meme: Meme = req.body;
    //   // TODO: Validate meme
    //   addMemes(meme);
    //   return res.status(200).json({
    //     success: true,
    //     data: `Added meme with the slug '${meme.slug}'`,
    //   });
    default:
      return res.status(500).json({
        success: false,
        data: `This endpoint does not support ${req.method} as method`,
      });
  }
};

async function getMemes(): Promise<Meme[]> {
  const memesData = await contentful.getAllMemes();
  if (!Array.isArray(memesData)) {
    throw new Error("Cannot find memes data");
  }

  return memesData;
}

// function addMemes(meme: Meme) {
//   const conflictingMeme = sampleData
//     .getMemes()
//     .find((x) => x.slug === meme.slug || x.id === meme.id);
//   if (conflictingMeme) {
//     throw new Error(
//       `Can't add meme due to conflict with existing meme with id ${conflictingMeme.id}`,
//     );
//   }
//   sampleData.addMeme(meme);
// }
export default handler;

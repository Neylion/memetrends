import { IMeme } from "../interfaces/meme";
import config from "../config/handler";

export default {
  getMemes,
  addMeme,
};

async function getMemes(): Promise<IMeme[]> {
  const response = await fetch(config.baseUrl + "/api/memes");
  return response.json();
}

async function addMeme(meme: IMeme): Promise<void> {
  const options = {
    method: "POST",
    body: JSON.stringify(meme),
  };
  await fetch("/api/memes", options);
}

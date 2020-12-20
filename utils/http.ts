import { Meme } from "../interfaces/meme";
// import config from "../config/handler";

export default {
  getMemes,
  addMeme,
};

// TODO: Should all of this be moved to only be used server side? (Frontend calling a proxy?)
async function getMemes(): Promise<Meme[]> {
  const requestConfig: RequestConfig = { context: "Get all memes" };
  const response = await sendRequest("/api/memes", requestConfig);
  return response.data;
}

async function addMeme(meme: Meme): Promise<void> {
  const requestConfig: RequestConfig = {
    method: "POST",
    body: JSON.stringify(meme),
    context: "Add meme",
  };
  await sendRequest("/api/memes", requestConfig);
}

interface RequestConfig extends RequestInit {
  context: string;
}
async function sendRequest(path: string, requestConfig: RequestConfig) {
  // let absoluteUrl = config.baseUrl + path;
  // NOTE: Absolute url (with baseUrl) is required for backend calls, but not for frontend calls
  let absoluteUrl = path;
  requestConfig.method = requestConfig.method || "GET";
  requestConfig.headers = {
    "Content-Type": "application/json",
  };

  let response;
  // TODO: Do not use console.log for this.
  try {
    console.log(`New request sent: ${requestConfig.method} ${absoluteUrl}`);
    // TODO: Add timeout and retry handling
    response = await fetch(absoluteUrl, requestConfig);
    console.log(`Request-Response: Successful request ${requestConfig.method} ${absoluteUrl}`);
  } catch (err) {
    console.log(`Request-Response: Failed request ${absoluteUrl}`, err);
    throw err;
  }
  return await parseResponse(response);
}

async function parseResponse(response: Response | undefined) {
  if (!response) return;

  if (response.ok) {
    if (response.status === 204) return;
    return response.json();
  } else {
    // TODO Better Error handling
    throw Error("Outbound request failed.");
  }
}

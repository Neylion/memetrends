import React, { Fragment, useEffect, useState } from "react";
import { ListMenuItem } from "./MenuItem";
import http from "../../utils/http";
import { IMeme } from "../../interfaces/meme";

// TODO: Is this a suitable way to cache memes (To avoid "Loading" flash on every page request)?
let cachedMemes: IMeme[] = [];
export default function MemeList({
  searchInput,
  whenFilter,
}: {
  searchInput: string;
  whenFilter: string[];
}) {
  const [memes, setMemes] = useState(new Array<IMeme>());

  useEffect(() => {
    http.getMemes().then((response) => {
      setMemes(response);
    });
  }, []);

  if (memes.length <= 0) {
    if (cachedMemes.length > 0) {
      const memeElements = getMemeElements(memes, searchInput, whenFilter);
      return <Fragment>{memeElements}</Fragment>;
    }
    return <div>Loading</div>;
  } else {
    cachedMemes = memes;
    const memeElements = getMemeElements(memes, searchInput, whenFilter);
    return <Fragment>{memeElements}</Fragment>;
  }
}

function getMemeElements(memes: IMeme[], searchInput: string, whenFilter: string[]) {
  let memeElements: JSX.Element[] = [];
  for (let i = 0; i < memes.length; i++) {
    const meme = memes[i];
    if (searchInput && !meme.title.toLowerCase().includes(searchInput.toLowerCase())) continue;
    if (whenFilter.length > 0 && !whenFilter.includes(String(meme.year))) continue;
    memeElements.push(
      <ListMenuItem key={`meme-nav-${meme.id}`} link={`/memes/${meme.slug}`}>
        {meme.title}
      </ListMenuItem>,
    );
  }
  return memeElements;
}

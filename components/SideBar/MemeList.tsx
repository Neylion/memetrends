import React, { Fragment, useEffect, useState } from "react";
import { ListMenuItem } from "./MenuItem";
import http from "../../utils/http";
import { IMeme } from "../../interfaces/meme";

// TODO: Is this a suitable way to cache memes (To avoid "Loading" flash on every page request)?
let cachedMemes: IMeme[] = [];
export default function MemeList({ activeYear }: { activeYear: number }) {
  const [memes, setMemes] = useState(new Array<IMeme>());

  useEffect(() => {
    http.getMemes().then((response) => {
      setMemes(response);
    });
  }, []);

  if (memes.length <= 0) {
    if (cachedMemes.length > 0) {
      const memeElements = getMemeElements(memes, activeYear);
      return <Fragment>{memeElements}</Fragment>;
    }
    return <div>Loading</div>;
  } else {
    cachedMemes = memes;
    const memeElements = getMemeElements(memes, activeYear);
    return <Fragment>{memeElements}</Fragment>;
  }
}

function getMemeElements(memes: IMeme[], activeYear: number) {
  let memeElements: JSX.Element[] = [];
  memes.forEach((meme) => {
    if (meme.year === activeYear) {
      memeElements.push(
        <ListMenuItem key={`meme-nav-${meme.id}`} link={`/memes/${meme.slug}?year=${activeYear}`}>
          {meme.title}
        </ListMenuItem>
      );
    }
  });
  return memeElements;
}

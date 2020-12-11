import React, { Fragment, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import http from "../../utils/http";
import { Meme } from "../../interfaces/meme";

export default function MemeList({ activeYear }: { activeYear: number }) {
  const [memes, setMemes] = useState(new Array<Meme>());
  let memeElements: JSX.Element[] = [];

  useEffect(() => {
    http.getMemes().then((response) => {
      setMemes(response);
    });
  }, []);

  if (memes.length <= 0) {
    return <div>Loading</div>;
  }
  memes.forEach((meme) => {
    if (meme.year === activeYear) {
      memeElements.push(
        <MenuItem key={`meme-nav-${meme.id}`} link={`/memes/${meme.slug}?year=${activeYear}`}>
          {meme.title}
        </MenuItem>
      );
    }
  });
  return <Fragment>{memeElements}</Fragment>;
}

import React, { Fragment } from "react";
import MenuItem from "./MenuItem";
import { memes } from "../../data/sampleData";

export default function MemeList({ activeYear }: { activeYear: number }) {
  let memeElements: JSX.Element[] = [];
  memes.forEach((meme) => {
    if (meme.year === activeYear) {
      memeElements.push(
        <MenuItem link={`/memes/${meme.link}?year=${activeYear}`}>{meme.title}</MenuItem>
      );
    }
  });
  return <Fragment>{memeElements}</Fragment>;
}

import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import { Meme } from "../../interfaces/meme";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import contentful from "../../utils/contentful";

export default function MemePage({ meme, errors }: { meme: Meme; errors: any }) {
  if (!meme || errors) {
    return (
      <Fragment>
        {!meme ? <p style={{ color: "red" }}>Missing meme information!</p> : null}
        <p style={{ color: "red" }}>Error: {errors || "Unknown"}</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>{meme.title}</h1>
      <p>{meme.description}</p>
      {meme.readMoreUrl ? <a href={meme.readMoreUrl}>Read more about this meme</a> : null}
      <hr />
      {meme.images.length > 0 ? (
        <div>
          <h2>Media</h2>
          <ImageGallery images={meme.images} />
        </div>
      ) : null}
    </Fragment>
  );
}

// TODO: Remove comments when no longer just testing around
// Note to self: The following two methods run only at build time normally. However fallback: "blocking" changes this behavior slightly:
// https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
// Note to self2: When in dev mode (npm run dev etc) these actually run on every request. Test actual behavior by building and starting it as a production build.
export const getStaticPaths: GetStaticPaths = async () => {
  let memes = await contentful.getAllMemes();
  let paths = memes.map((meme) => ({ params: { slug: meme.slug } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // TODO: Custom error types
    if (!params) throw new Error("Internal Error. No parameters included!");
    const memes = await contentful.getAllMemes();
    const meme = memes.find((data) => data.slug === params.slug);
    if (!meme) throw new Error("Could not find a meme with matching slug!");

    return { props: { title: meme?.title, meme: meme || null }, revalidate: 60 };
  } catch (err) {
    return { props: { errors: err.message, title: "Meme Error" } };
  }
};

import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import http from "../../utils/http";
import { IMeme } from "../../interfaces/meme";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

export default function MemePage({ meme, errors }: { meme: IMeme; errors: any }) {
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
      {meme.readMoreLink ? <a href={meme.readMoreLink}>Read more about this meme</a> : null}
      <hr />
      {meme.media.images.length > 0 ? (
        <div>
          <h2>Media</h2>
          <ImageGallery images={meme.media.images} />
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
  let memes = await http.getMemes();
  let paths = memes.map((meme) => ({ params: { slug: meme.slug } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params) throw new Error("Internal Error. No parameters included!");
    const link = params.slug;
    const memes = await http.getMemes();
    const meme = memes.find((data) => data.slug === link);

    return { props: { title: meme?.title, meme: meme || null }, revalidate: 60 };
  } catch (err) {
    return { props: { errors: err.message, title: "Meme Error" } };
  }
};

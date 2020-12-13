import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import http from "../../utils/http";
import { IMeme } from "../../interfaces/meme";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const StaticPropsDetail = ({ meme, errors }: { meme: IMeme; errors: any }) => {
  if (!meme || errors) {
    return (
      <Layout title="Error">
        {!meme ? <p style={{ color: "red" }}>Missing meme information!</p> : null}
        <p style={{ color: "red" }}>Error: {errors || "Unknown"}</p>
      </Layout>
    );
  }

  return (
    <Layout title={`${meme.title}`}>
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
    </Layout>
  );
};

export default StaticPropsDetail;

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

    return { props: { meme: meme || null }, revalidate: 60 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

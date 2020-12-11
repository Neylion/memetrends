import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import Layout from "../../components/Layout";
import http from "../../utils/http";
import { Meme } from "../../interfaces/meme";

const StaticPropsDetail = ({ meme, errors }: { meme: Meme; errors: any }) => {
  if (!meme || errors) {
    return (
      <Layout title="Error">
        {!meme ? <p style={{ color: "red" }}>Missing meme information!</p> : null}
        <p style={{ color: "red" }}>Error: {errors || "Unknown"}</p>
      </Layout>
    );
  }

  const mediaLinks = meme.media.map((x, index) => {
    return (
      <a key={`media-${index}`} href={x}>
        {x}
      </a>
    );
  });
  return (
    <Layout title={`${meme.title}`}>
      <h1>{meme.title}</h1>
      <p>{meme.description}</p>
      {meme.readMoreLink ? <a href={meme.readMoreLink}>Read more about this meme</a> : null}
      <hr />
      {mediaLinks.length > 0 ? (
        <Fragment>
          <h2>Media</h2>
          {mediaLinks}
        </Fragment>
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
    console.log("params", params);
    console.log("meme", meme);

    return { props: meme ? { meme } : {} };
  } catch (err) {
    console.log("paramscatch", params);
    return { props: { errors: err.message } };
  }
};

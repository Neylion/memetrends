import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import Layout from "../../components/Layout";
import { memes } from "../../data/sampleData";
import { Meme } from "../../interfaces/meme";

const StaticPropsDetail = ({ meme, errors }: { meme: Meme; errors: any }) => {
  if (!meme || errors) {
    return (
      <Layout title="Error">
        <p>
          {!meme ? <span style={{ color: "red" }}>Missing meme information!</span> : null}
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  const mediaLinks = meme.media.map((x) => {
    return <a href={x}>{x}</a>;
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
  let paths = memes.map((meme) => ({ params: { link: meme.link } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const link = params?.link;
    const meme = memes.find((data) => data.link === link);

    return { props: { meme } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

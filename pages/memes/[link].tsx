import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { memes } from "../../components/SideBar/sampleData";

const StaticPropsDetail = ({ meme, errors }: any) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${meme ? meme.detail : "Meme Detail"}`}>
      <h1>{meme?.title}</h1>
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

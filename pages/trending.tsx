import { GetStaticProps } from "next";
import React, { Fragment } from "react";
import Layout from "../components/Layout";

export default function TrendingPage() {
  return (
    <Fragment>
      <h1>Trending</h1>
      <p>Coming soon...</p>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: "Trending" } };
};

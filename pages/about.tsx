import { GetStaticProps } from "next";
import Link from "next/link";
import React, { Fragment } from "react";

export default function AboutPage() {
  return (
    <Fragment>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: "About" } };
};

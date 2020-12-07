import React, { ReactNode, Fragment } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import SideBar from "./SideBar/SideBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.navbar}>MemeTrends.net</div>
      <div style={{ display: "flex", height: "100%" }}>
        <SideBar />
        <div id={styles.right} className={styles.column}>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}>
            <span>I'm here to stay (Footer)</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

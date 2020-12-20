import React, { ReactNode, Fragment, useState } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import SideBar from "./SideBar/SideBar";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title }: Props) => {
  const [sidebarIsOpen, toggleSidebar] = useState(true);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <div className={styles.page}>
        {sidebarIsOpen ? <SideBar /> : null}
        <div id={styles.right} className={styles.mainColumn}>
          <PageContent>{children}</PageContent>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

function Navbar({ sidebarIsOpen, toggleSidebar }: any) {
  return (
    <div className={styles.navbar}>
      <button onClick={() => toggleSidebar(!sidebarIsOpen)}>
        <span className="openAndClose">{sidebarIsOpen ? "X" : "V"}</span> Menu
      </button>
      <div className={styles.navbarTitle}>MemeTrends.net</div>
    </div>
  );
}

function PageContent({ children }: any) {
  return (
    <Fragment>
      <div className={styles.content}>{children}</div>
    </Fragment>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <span>I'm here to stay (Footer)</span>
    </div>
  );
}

export default Layout;

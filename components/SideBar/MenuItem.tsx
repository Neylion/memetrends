import Link from "next/link";
import React from "react";
import styles from "./MenuItem.module.scss";

export function NavMenuItem({ link, children }: any) {
  return (
    <Link href={link}>
      <div className={styles.navItem}>{children}</div>
    </Link>
  );
}

export function ListMenuItem({ link, children }: any) {
  return (
    <Link href={link}>
      <div className={styles.listItem}>{children}</div>
    </Link>
  );
}

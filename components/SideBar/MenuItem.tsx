import Link from "next/link";
import React from "react";
import styles from "./MenuItem.module.scss";

export default function MenuItem({ link, children }: any) {
  return (
    <Link href={link}>
      <div className={styles.item}>{children}</div>
    </Link>
  );
}

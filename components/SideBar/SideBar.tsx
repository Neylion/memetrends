import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import MenuItem from "./MenuItem";
import MemeList from "./MemeList";
import ListFilter from "./ListFilter";

let trends: JSX.Element[] = [];
for (let i = 100; i <= 200; i++) {
  const link = `/users/${i}`;
  trends.push(<MenuItem link={link}>{`${i}. Trends Testing`}</MenuItem>);
}

export default function SideBar({ isOpen, toggle }: any) {
  const currentYear = new Date().getFullYear();
  const [activeYear, setYear] = useState(currentYear);
  const [isMemesActive, toggleMemes] = useState(true);
  const filterProperties = { currentYear, activeYear, setYear, isMemesActive, toggleMemes };
  return (
    <div style={{ display: isOpen ? "block" : "none" }} className={styles.sideBar}>
      <button className={styles.closeMenu} onClick={() => toggle(false)}>
        X
      </button>
      <ListFilter {...filterProperties} />
      <div className={styles.content}>
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="about">About</MenuItem>
        <MenuItem link="/users">Users</MenuItem>
        {isMemesActive ? <MemeList activeYear={activeYear} /> : trends}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { ListMenuItem, NavMenuItem } from "./MenuItem";
import MemeList from "./MemeList";
import ListFilter from "./ListFilter";

let trends: JSX.Element[] = [];
for (let i = 100; i <= 200; i++) {
  const link = `/users/${i}`;
  trends.push(<ListMenuItem link={link}>{`${i}. Trends Testing`}</ListMenuItem>);
}

const currentYear = new Date().getFullYear();
let activeWhenFilters: string[] = [String(currentYear)];
let setYear;
export default function SideBar() {
  [activeWhenFilters, setYear] = useState(activeWhenFilters);
  const [isMemesActive, toggleMemes] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const filterProperties = {
    currentYear,
    activeWhenFilters,
    setYear,
    isMemesActive,
    toggleMemes,
    searchInput,
    setSearchInput,
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarMain}>
        <NavMenuItem link="/">Home</NavMenuItem>
        <NavMenuItem link="/about">About</NavMenuItem>
      </div>
      <ListFilter {...filterProperties} />
      <div className={styles.content}>
        {isMemesActive ? (
          <MemeList searchInput={searchInput} whenFilter={activeWhenFilters} />
        ) : (
          trends
        )}
      </div>
    </div>
  );
}

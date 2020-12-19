import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { NavMenuItem } from "./MenuItem";
import MemeList from "./MemeList";
import ListFilter from "./ListFilter";

const currentYear = new Date().getFullYear();
let activeWhenFilters: string[] = [String(currentYear)];
let setYear;
export default function SideBar() {
  [activeWhenFilters, setYear] = useState(activeWhenFilters);
  const [searchInput, setSearchInput] = useState("");
  const filterProperties = {
    currentYear,
    activeWhenFilters,
    setYear,
    searchInput,
    setSearchInput,
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarMain}>
        <NavMenuItem link="/">Home</NavMenuItem>
        <NavMenuItem link="/trending">Trending</NavMenuItem>
        <NavMenuItem link="/about">About</NavMenuItem>
      </div>
      <ListFilter {...filterProperties} />
      <div className={styles.content}>
        <MemeList searchInput={searchInput} whenFilter={activeWhenFilters} />
      </div>
    </div>
  );
}

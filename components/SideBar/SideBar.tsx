import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { NavMenuItem } from "./MenuItem";
import MemeList from "./MemeList";
import ListFilter from "./ListFilter";

const currentYear = new Date().getFullYear();
let whenFilterOptions = getWhenFilterOptions(currentYear);
export default function SideBar() {
  // Set all when options as active as default
  const [activeWhenFilters, setActiveWhenFilters] = useState(whenFilterOptions);
  const [searchInput, setSearchInput] = useState("");
  const filterProperties = {
    whenFilterOptions,
    activeWhenFilters,
    setActiveWhenFilters,
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

function getWhenFilterOptions(currentYear: number) {
  // TODO: Better handling of what years to show here (Currently just last 5 years)
  let filterOptions: string[] = [];
  for (let i = 0; i < 5; i++) {
    const year = String(currentYear - i);
    filterOptions.push(year);
  }
  return filterOptions;
}

import React, { Fragment } from "react";
import styles from "./ListFilter.module.scss";

type Props = {
  currentYear: number;
  activeYear: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  isMemesActive: boolean;
  toggleMemes: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ListFilter({
  currentYear,
  activeYear,
  setYear,
  isMemesActive,
  toggleMemes,
}: Props) {
  const toggleMethod = () => toggleMemes(!isMemesActive);
  return (
    <div className={styles.filter}>
      <FilterButton isActive={isMemesActive} setIsActive={toggleMethod}>
        Memes
      </FilterButton>
      <FilterButton isActive={!isMemesActive} setIsActive={toggleMethod}>
        Trends
      </FilterButton>
      <YearFilter currentYear={currentYear} activeYear={activeYear} setYear={setYear} />
    </div>
  );
}

function FilterButton({ isActive, setIsActive, children }: any) {
  return (
    <button
      className={styles.filterChoice}
      style={{ backgroundColor: isActive ? "white" : "lightgray" }}
      onClick={setIsActive}
    >
      {children}
    </button>
  );
}

function YearFilter({ currentYear, activeYear, setYear }: any) {
  return (
    <div className={styles.filterDropdown}>
      <button className={styles.filterDropdownButton}>{activeYear}</button>
      <div className={styles.filterDropdownContent}>
        <YearButton setYear={setYear}>{currentYear}</YearButton>
        <YearButton setYear={setYear}>{currentYear - 1}</YearButton>
        <YearButton setYear={setYear}>{currentYear - 2}</YearButton>
      </div>
    </div>
  );
}

function YearButton({ setYear, children }: any) {
  return (
    <button
      className={styles.filterDropdownContentItem}
      onClick={() => {
        setYear(children);
      }}
    >
      {children}
    </button>
  );
}

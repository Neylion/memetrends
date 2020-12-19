import React from "react";
import { Dropdown, MultipleChoiceCheckbox } from "../Dropdown/Dropdown";
import styles from "./ListFilter.module.scss";

type Props = {
  currentYear: number;
  activeWhenFilters: string[];
  setYear: React.Dispatch<React.SetStateAction<string[]>>;
  isMemesActive: boolean;
  toggleMemes: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};
export default function ListFilter({
  currentYear,
  activeWhenFilters,
  setYear,
  isMemesActive,
  toggleMemes,
  searchInput,
  setSearchInput,
}: Props) {
  return (
    <div className={styles.filter}>
      {/* <FilterButton isActive={isMemesActive} setIsActive={toggleMethod}>
        Memes
      </FilterButton>
      <FilterButton isActive={!isMemesActive} setIsActive={toggleMethod}>
        Trends
      </FilterButton> */}
      <input
        className={styles.filterSearch}
        key="list-search"
        value={searchInput}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <WhenFilter
        currentYear={currentYear}
        activeWhenFilters={activeWhenFilters}
        onToggle={setYear}
      />
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

function WhenFilter({ currentYear, activeWhenFilters, onToggle }: any) {
  // TODO: Better handling of what years to show here (Currently just last 5 years)
  let checkBoxElements: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    const year = String(currentYear - i);
    checkBoxElements.push(
      <MultipleChoiceCheckbox onToggle={onToggle} activeCheckboxes={activeWhenFilters}>
        {year}
      </MultipleChoiceCheckbox>,
    );
  }
  return <Dropdown title="When">{checkBoxElements}</Dropdown>;
}

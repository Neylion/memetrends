import React from "react";
import { Dropdown, MultipleChoiceCheckbox } from "../Dropdown/Dropdown";
import styles from "./ListFilter.module.scss";

type Props = {
  whenFilterOptions: string[];
  activeWhenFilters: string[];
  setActiveWhenFilters: React.Dispatch<React.SetStateAction<string[]>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};
export default function ListFilter({
  whenFilterOptions,
  activeWhenFilters,
  setActiveWhenFilters,
  searchInput,
  setSearchInput,
}: Props) {
  return (
    <div className={styles.filter}>
      <input
        className={styles.filterSearch}
        key="list-search"
        value={searchInput}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <WhenFilter
        activeWhenFilters={activeWhenFilters}
        whenFilterOptions={whenFilterOptions}
        onToggle={setActiveWhenFilters}
      />
    </div>
  );
}

interface WhenFilterProps {
  activeWhenFilters: string[];
  whenFilterOptions: string[];
  onToggle: any;
}
function WhenFilter({ activeWhenFilters, whenFilterOptions, onToggle }: WhenFilterProps) {
  return (
    <Dropdown
      title="When"
      checkboxes={whenFilterOptions}
      activeCheckboxes={activeWhenFilters}
      setActiveCheckboxes={onToggle}
    />
  );
}

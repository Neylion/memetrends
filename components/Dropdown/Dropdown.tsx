import { useState } from "react";
import styles from "./Dropdown.module.scss";

interface Props {
  title: string;
  checkboxes: string[];
  activeCheckboxes: string[];
  setActiveCheckboxes: any;
}
export function Dropdown({ title, checkboxes, activeCheckboxes, setActiveCheckboxes }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  let checkBoxElements: JSX.Element[] = [];
  checkboxes.forEach((checkbox, index) => {
    const isActive = activeCheckboxes.includes(checkbox);
    const onToggle = () =>
      onToggleWrapper(setActiveCheckboxes, checkbox, isActive, activeCheckboxes);
    checkBoxElements.push(
      <MultipleChoiceCheckbox key={`checkbox-${index}`} isActive={isActive} onToggle={onToggle}>
        {checkbox}
      </MultipleChoiceCheckbox>,
    );
  });
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
        <span className="openAndClose">{isOpen ? "X" : "V"}</span> {title}
      </button>
      <div style={{ display: isOpen ? "block" : "none" }} className={styles.dropdownContent}>
        <div className={styles.dropdownContentHelpers}>
          <button onClick={() => setActiveCheckboxes(checkboxes)}>Select all</button>
          <button onClick={() => setActiveCheckboxes([])}>Deselect all</button>
        </div>
        {checkBoxElements}
      </div>
    </div>
  );
}

interface MultipleChoiceCheckboxProps {
  onToggle: () => void;
  isActive: boolean;
  children: string;
}
function MultipleChoiceCheckbox({
  onToggle,
  isActive,
  children: title,
}: MultipleChoiceCheckboxProps) {
  // TODO: Format checkbox
  return (
    <label className={styles.dropdownContentItem}>
      <input type="checkbox" onChange={() => onToggle()} checked={isActive} name={title} />
      <span>{title}</span>
    </label>
  );
}

function onToggleWrapper(
  onToggle: any,
  title: string,
  isActive: boolean,
  activeCheckboxes: string[],
) {
  let filterAfterToggle: string[] = [...activeCheckboxes];
  if (isActive) {
    const index = filterAfterToggle.indexOf(title);
    filterAfterToggle.splice(index, 1);
  } else {
    filterAfterToggle.push(title);
  }
  onToggle(filterAfterToggle);
}

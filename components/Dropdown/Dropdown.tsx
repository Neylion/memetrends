import styles from "./Dropdown.module.scss";

export function Dropdown({ title, children }: any) {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        <span className="openAndClose">{"V"}</span> {title}
      </button>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
}

interface MultipleChoiceCheckboxProps {
  onToggle: React.Dispatch<React.SetStateAction<string[]>>;
  activeCheckboxes: string[];
  children: string;
}
export function MultipleChoiceCheckbox({
  onToggle,
  activeCheckboxes,
  children: title,
}: MultipleChoiceCheckboxProps) {
  const isActive = activeCheckboxes.includes(title);
  // TODO: Format checkbox
  return (
    <label className={styles.dropdownContentItem}>
      <input
        type="checkbox"
        onClick={() =>
          onToggleWrapper(onToggle, title, isActive, activeCheckboxes)
        }
        checked={isActive}
        name={title}
      />
      {title}
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

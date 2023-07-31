import "./TaskFilter.css";

export default function TaskFilter({ text, onFilterSelect }) {
  return (
    <li>
      <button type="button" onClick={onFilterSelect}>
        {text}
      </button>
    </li>
  );
}

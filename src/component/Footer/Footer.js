import "./Footer.css";

import TaskFilter from "../TaskFilter";

export default function Footer({
  itemsLeft,
  filters,
  onFilterSelect,
  deleteCompletedTask,
}) {
  return (
    <footer class="footer">
      <span class="todo-count">{itemsLeft} items left</span>
      <ul className="filters">
        {filters.map((e) => (
          <TaskFilter
            key={e.name}
            text={e.label}
            onFilterSelect={() => onFilterSelect(e.name)}
          />
        ))}
      </ul>
      <button class="clear-completed" onClick={() => deleteCompletedTask()}>
        Clear completed
      </button>
    </footer>
  );
}

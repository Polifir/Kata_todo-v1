import "./Footer.css";

import TaskFilter from "../TaskFilter";
import PropTypes from "prop-types";

export default function Footer({
  itemsLeft,
  filters,
  onFilterSelect,
  deleteCompletedTask,
}) {
  TaskFilter.defaultProps = {
    itemsLeft: "",
    onFilterSelect() {},
    deleteCompletedTask() {},
    filters: [],
  };
  TaskFilter.propTypes = {
    itemsLeft: PropTypes.string,
    onFilterSelect: PropTypes.func,
    deleteCompletedTask: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.object),
  };
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <ul className="filters">
        {filters.map((e) => (
          <TaskFilter
            key={e.name}
            text={e.label}
            onFilterSelect={() => onFilterSelect(e.name)}
          />
        ))}
      </ul>
      <button className="clear-completed" onClick={() => deleteCompletedTask()}>
        Clear completed
      </button>
    </footer>
  );
}

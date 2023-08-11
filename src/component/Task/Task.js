import { useState } from "react";
import PropTypes from "prop-types";
import "./Task.css";
import Timer from "../Timer";

export const Task= ({task, toggleStatus, deleteItem, editTask}) => {
  console.log(task)
  const [item, setItem] = useState({text: task.text,
    editing: false,
    toggle: task.completed,})

  const onChange = (e) => {
    setItem({
      ...item,
      text: e.target.value
    });
  };
  // setDate = (created) => {
  //   return formatDistanceToNow(created, {
  //     addSuffix: true,
  //     includeSeconds: true,
  //   });
  // };

  const onSubmit = (e) => {
    editTask(task.id, item.text);
    setItem({
      ...item,
      editing: false,
    });
    e.preventDefault();
  };

    const { text, time, id, completed } = task;
    const taskClass = item.editing
      ? "editing"
      : completed
      ? "completed"
      : "";
    return (
      <li className={taskClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => toggleStatus(id)}
            checked={completed}
          />
          <label>
            <span className="description">{text}</span>
            {/* <span className="created"> {this.setDate(created)}</span> */}
            <Timer/>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => setItem({...item, editing: true })}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteItem(id)}
          ></button>
        </div>
        {item.editing && (
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              class="edit"
              value={item.text}
              onChange={(e) => onChange(e)}
            />
          </form>
        )}
      </li>
    );
}


Task.defaultProps = {
  task: {},
  toggleStatus() {},
  deleteItem() {},
};

Task.propTypes = {
  deleteItem: PropTypes.func,
  toggleStatus: PropTypes.func,
  task: PropTypes.object,
};
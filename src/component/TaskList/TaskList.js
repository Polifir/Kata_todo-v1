import { Component } from "react";
import PropTypes from "prop-types";
import "./TaskList.css";
import Task from "../Task/Task";

export default class TaskList extends Component {
  static defaultProps = {
    task: {},
    toggleStatus() {},
    deleteItem() {},
    editTask() {},
  };
  static propTypes = {
    deleteItem: PropTypes.func,
    toggleStatus: PropTypes.func,
    task: PropTypes.object,
    editTask: PropTypes.func,
  };
  render() {
    return (
      <ul className="todo-list">
        {this.props.tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleStatus={this.props.toggleStatus(task.id)}
            deleteItem={this.props.deleteItem(task.id)}
            editTask={this.props.editTask}
          />
        ))}
      </ul>
    );
  }
}

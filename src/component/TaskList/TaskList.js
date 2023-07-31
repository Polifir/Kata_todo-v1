import { Component } from "react";

import "./TaskList.css";
import Task from "../Task/Task";

export default class TaskList extends Component {
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

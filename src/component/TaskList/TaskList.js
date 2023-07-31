import { Component } from "react";

import "./TaskList.css";
import Task from "../Task/Task";

export default class TaskList extends Component {
  render() {
    return (
      <ul class="todo-list">
        <Task />
        {/* <li class="editing">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>
              <span class="description">Editing task</span>
              <span class="created">created 5 minutes ago</span>
            </label>
            <button class="icon icon-edit"></button>
            <button class="icon icon-destroy"></button>
          </div>
          <input type="text" class="edit" value="Editing task" />
        </li> */}
      </ul>
    );
  }
}

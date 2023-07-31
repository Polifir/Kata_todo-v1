import { Component } from "react";

import "./Footer.css";

import TaskFilter from "../TaskFilter";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">1 items left</span>
        <TaskFilter />
        <button class="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

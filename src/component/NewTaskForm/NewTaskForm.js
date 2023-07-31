import { Component } from "react";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  render() {
    return (
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    );
  }
}

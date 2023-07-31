import { Component } from "react";

import "./Task.css";

export default class Task extends Component {
  state = {
    text: this.props.task.text,
    editing: false,
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log(this.props.task.id, this.state.text);
    this.props.editTask(this.props.task.id, this.state.text);
    this.setState({
      editing: false,
    });
    e.preventDefault();
  };

  render() {
    const { text, created, id, completed } = this.props.task;
    const { toggleStatus, deleteItem } = this.props;
    const taskClass = this.state.editing
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
            onClick={() => toggleStatus(id)}
            checked={completed}
          />
          <label>
            <span className="description">{text}</span>
            <span className="created">{created}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => this.setState({ editing: true })}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteItem(id)}
          ></button>
        </div>
        {this.state.editing && (
          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              type="text"
              class="edit"
              value={this.state.text}
              onChange={(e) => this.onChange(e)}
            />
          </form>
        )}
      </li>
    );
  }
}

import { Component } from "react";
import PropTypes from "prop-types";
import "./Task.css";
import { formatDistanceToNow } from "date-fns";
import Timer from "../Timer";

export default class Task extends Component {
  static defaultProps = {
    task: {},
    toggleStatus() {},
    deleteItem() {},
  };

  static propTypes = {
    deleteItem: PropTypes.func,
    toggleStatus: PropTypes.func,
    task: PropTypes.object,
  };

  state = {
    text: this.props.task.text,
    editing: false,
    toggle: this.props.task.completed,
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  // setDate = (created) => {
  //   return formatDistanceToNow(created, {
  //     addSuffix: true,
  //     includeSeconds: true,
  //   });
  // };

  onSubmit = (e) => {
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
<<<<<<< HEAD
        <div className='view'>
          <input className='toggle' type='checkbox' onChange={() => toggleStatus(id)} checked={completed} />
=======
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => toggleStatus(id)}
            checked={completed}
          />
>>>>>>> parent of f272c20 (add: lint)
          <label>
            <span className='description'>{text}</span>
            {/* <span className="created"> {this.setDate(created)}</span> */}
            <Timer created={created} />
          </label>
<<<<<<< HEAD
          <button className='icon icon-edit' onClick={() => this.setState({ editing: true })} />
          <button className='icon icon-destroy' onClick={() => deleteItem(id)} />
        </div>
        {this.state.editing && (
          <form onSubmit={(e) => this.onSubmit(e)}>
            <input type='text' className='edit' value={this.state.text} onChange={(e) => this.onChange(e)} />
=======
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
>>>>>>> parent of f272c20 (add: lint)
          </form>
        )}
      </li>
    );
  }
}

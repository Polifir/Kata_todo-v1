import { Component } from "react";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  onSubmit = (event) => {
    console.log(this.state.text);
    this.props.addNewItem(this.state.text);
    this.setState({
      text: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          value={this.state.text}
          onChange={(e) => this.onChange(e)}
        />
      </form>
    );
  }
}

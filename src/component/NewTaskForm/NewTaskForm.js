import { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addNewItem: () => {},
  };
  static propTypes = {
    addNewItem: PropTypes.func,
  };

  state = {
    text: '',
  };
  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  onSubmit = (event) => {
    this.props.addNewItem(this.state.text);
    this.setState({
      text: '',
    });
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={(e) => this.onChange(e)}
        />
      </form>
    );
  }
}

import { formatDistanceToNow } from "date-fns";
import { Component } from "react";

export default class Timer extends Component {
  state = {
    date: this.props.created,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.props.created,
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <span className='created'>
        {' '}
=======
      <span className="created">
        {" "}
>>>>>>> parent of f272c20 (add: lint)
        {formatDistanceToNow(this.state.date, {
          addSuffix: true,
          includeSeconds: true,
        })}
      </span>
    );
  }
}

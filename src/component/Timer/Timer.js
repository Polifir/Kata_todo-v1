import { Component } from 'react';

import { formatDistanceToNow } from 'date-fns';

export default class Timer extends Component {
  static propTypes = {
    created: this.PropTypes.date

  }
  state = {
    date: this.props.created,
  };

  static

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
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
      <span className='created'>
        {' '}
        {formatDistanceToNow(this.state.date, {
          addSuffix: true,
          includeSeconds: true,
        })}
      </span>
    );
  }
}

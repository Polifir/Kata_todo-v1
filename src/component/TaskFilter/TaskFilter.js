import './TaskFilter.css';
import PropTypes from 'prop-types';

export default function TaskFilter({ text, onFilterSelect }) {
  TaskFilter.defaultProps = {
    text: '',
    onFilterSelect() {},
  };
  TaskFilter.propTypes = {
    onFilterSelect: PropTypes.func,
    text: PropTypes.string,
  };
  return (
    <li>
      <button type='button' onClick={onFilterSelect}>
        {text}
      </button>
    </li>
  );
}

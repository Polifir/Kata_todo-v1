import {useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export const NewTaskForm = ({addNewItem}) =>{
  const [text, setText] = useState("")

  
  const onChange = (e) => {
    setText(
      e.target.value,
    );
  };
  const onSubmit = (event) => {
    addNewItem(text);
    setText("");
    event.preventDefault();
  };

    return (
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          value={text}
          onChange={(e) => onChange(e)}
        />
      </form>
    );
}

NewTaskForm.defaultProps = {
  addNewItem: () => {},
};

NewTaskForm.propTypes = {
  addNewItem: PropTypes.func,
};

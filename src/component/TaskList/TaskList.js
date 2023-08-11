
import PropTypes from 'prop-types';
import './TaskList.css';
import Task from '../Task';

export const TaskList = ({  tasks,
  toggleStatus,
  deleteItem,
  editTask,}) => {

    return (
      <ul className='todo-list'>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleStatus={toggleStatus(task.id)}
            deleteItem={deleteItem(task.id)}
            editTask={editTask}
          />
        ))}
      </ul>
    );

}

Task.defaultProps = {
  tasks: {},
  toggleStatus() {},
  deleteItem() {},
  editTask() {},
};

Task.propTypes = {
  deleteItem: PropTypes.func,
  toggleStatus: PropTypes.func,
  task: PropTypes.object,
  editTask: PropTypes.func,
  tasks: PropTypes.array,
};
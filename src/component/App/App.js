import {  useState } from 'react';
import './App.css';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

export const App= () =>{
  const [taskArray, setTaskArray] = useState([
    {
      id: 1,
      text: 'text',
      completed: false,
      time: 0,
    },
    {
      id: 2,
      text: 'text',
      completed: true,
      time: 0,
    },
  ])
  const [filtersArray, setFiltersArray]= useState([
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ],)
  const [activeFilter, setActiveFilter] = useState("all")

   const addNewItem = (text) => {
    const newItem = {
      id: Math.max(...taskArray.map((e) => e.id)) + 1,
      text,
      completed: false,
      time: 0,
    };
    setTaskArray([
      newItem, ...taskArray,
    ]);
  };

   const editTask = (id, prop) => {
    setTaskArray(taskArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: prop,
          completed: false,
          time:  0,
        };
      }
      return item;
    }),) 
  };

   const toggleStatus = (id) => {
    const newArr = taskArray.map((e) => {
      if (e.id === id) {
        return { ...e, completed: !e.completed };
      }
      return e;
    });
    return setTaskArray([...newArr])
  };

   const deleteItem = (id) => {
    const idx = taskArray.findIndex((e) => e.id === id);
    return setTaskArray(
      taskArray.toSpliced(idx, 1),
    );
  };
   const deleteCompletedTask = () => {
    return setTaskArray(
      taskArray.filter((e) => e.completed !== true),
    );
  };

   const itemsLeft = () => {
    return taskArray.filter((e) => e.completed === false).length;
  };

   const filteredTasks = (filter) => {
    switch (filter) {
      case 'all':
        return taskArray;
      case 'active':
        return taskArray.filter((task) => task.completed === false);
      case 'completed':
        return taskArray.filter((task) => task.completed === true);
      default:
        return taskArray;
    }
  };
   const onFilterSelect = (filter) => {
    setActiveFilter(filter)
  };


    const visibleTask = filteredTasks(activeFilter);
    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm addNewItem={addNewItem} />
        </header>
        <section className='main'>
          <TaskList
            TaskArray={taskArray}
            toggleStatus={() => toggleStatus}
            deleteItem={() => deleteItem}
            tasks={visibleTask}
            editTask={editTask}
          />
          <Footer
            itemsLeft={itemsLeft()}
            filters={filtersArray}
            onFilterSelect={onFilterSelect}
            deleteCompletedTask={deleteCompletedTask}
          />
        </section>
      </section>
    );
}

import { Component } from "react";
import "./App.css";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

export default class App extends Component {
  state = {
    taskArray: [
      {
        id: 1,
        text: "text",
        completed: false,
        created: new Date(),
      },
      {
        id: 2,
        text: "text",
        completed: true,
        created: new Date(2023, 4, 15, 3),
      },
    ],
    filters: [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "completed", label: "Completed" },
    ],
    filter: "all",
  };

  addNewItem = (text) => {
    const newItem = {
      id: Math.max(...this.state.taskArray.map((e) => e.id)) + 1,
      text,
      completed: false,
      created: new Date(),
    };
    console.log(newItem);
    this.setState({
      taskArray: [newItem, ...this.state.taskArray],
    });
  };

  editTask = (id, prop) => {
    this.setState(({ taskArray }) => ({
      taskArray: taskArray.map((item) => {
        if (item.id === id) {
          console.log(id, { ...item, text: prop });
          return {
            ...item,
            text: prop,
            completed: false,
            created: new Date(),
          };
        }
        return item;
      }),
    }));
  };

  toggleStatus = (id) => {
    const newArr = this.state.taskArray.map((e) => {
      if (e.id === id) {
        return { ...e, completed: !e.completed };
      }
      return e;
    });
    return this.setState({
      taskArray: [...newArr],
    });
  };

  deleteItem = (id) => {
    const idx = this.state.taskArray.findIndex((e) => e.id === id);
    return this.setState({
      taskArray: this.state.taskArray.toSpliced(idx, 1),
    });
  };
  deleteCompletedTask = () => {
    return this.setState({
      taskArray: this.state.taskArray.filter((e) => e.completed !== true),
    });
  };

  itemsLeft = () => {
    return this.state.taskArray.filter((e) => e.completed === false).length;
  };

  filteredTasks = (filter) => {
    const { taskArray } = this.state;
    switch (filter) {
      case "all":
        return taskArray;
      case "active":
        return taskArray.filter((task) => task.completed === false);
      case "completed":
        return taskArray.filter((task) => task.completed === true);
      default:
        return taskArray;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const visibleTask = this.filteredTasks(filter);
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addNewItem={this.addNewItem} />
        </header>
        <section className="main">
          <TaskList
            TaskArray={this.state.taskArray}
            toggleStatus={() => this.toggleStatus}
            deleteItem={() => this.deleteItem}
            tasks={visibleTask}
            editTask={this.editTask}
          />
          <Footer
            itemsLeft={this.itemsLeft()}
            filters={this.state.filters}
            onFilterSelect={this.onFilterSelect}
            deleteCompletedTask={this.deleteCompletedTask}
          />
        </section>
      </section>
    );
  }
}

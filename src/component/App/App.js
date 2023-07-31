import { Component } from "react";
import "./App.css";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

export default class App extends Component {
  render() {
    return (
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section class="main">
          <TaskList />
          <Footer />
        </section>
      </section>
    );
  }
}

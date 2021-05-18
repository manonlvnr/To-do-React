import React from "react";
import "./App.css";
import SubmitForm from "./Components/SubmitForm/SubmitForm";
import TasksList from "./Components/TaskList/TasksList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task),
      };
    });
  }

  removeTask(id) {
    const tasks = this.state.tasks.filter((element) => element.id !== id);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <h1>TO DO LIST</h1>
          <br></br>
          <br></br>
        </div>
        <div className="App">
          <SubmitForm addTask={this.addTask} />
          <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;

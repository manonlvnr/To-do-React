import React from "react";
import "./SubmitForm.css";

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasksCount: 0 };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this.inputElement.value !== "") {
      var newItem = {
        text: this.inputElement.value,
        id: this.state.tasksCount,
        key: Date.now(),
      };

      this.props.addTask(newItem);

      this.state.tasksCount++;
      this.inputElement.value = "";
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className="from">
        <form onSubmit={this.addItem}>
          <input
            className="input"
            ref={(a) => (this.inputElement = a)}
            placeholder="Add Task"
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitForm;

import React from "react"
import Card from '../Components/Card'

class ToDoContainer extends React.Component {

  tasks = () => {
    return this.props.toDoArray().map(taskObj => <Card changeColumnHandler={this.props.changeColumnHandler} taskObj={taskObj}/>)
  }

  render() {
    return (
      <div class="list-columns">
        <h2> To-Do </h2>
        { this.tasks() }
      </div>
    )
  }
}

export default ToDoContainer
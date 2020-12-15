import React from "react"
import Card from "../Components/Card"

class DoneContainer extends React.Component {

  tasks = () => {
    return this.props.doneArray().map(taskObj => <Card changeColumnHandler={this.props.changeColumnHandler} taskObj={taskObj} />)
  }

  render() {
    return (
      <div class="list-columns">
        <h2>Done</h2>
        { this.tasks()}
      </div>
    )
  }
}

export default DoneContainer
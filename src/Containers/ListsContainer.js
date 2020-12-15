import React from "react"
import ToDoContainer from "./ToDoContainer"
import DoingContainer from "./DoingContainer"
import DoneContainer from "./DoneContainer"

class ListsContainer extends React.Component {

  state = {
    tasksArray: [],
  }

  async componentDidMount() {
    const apiResponse = await fetch('http://localhost:4000/tasks')
    const tasksArray = await apiResponse.json()
    this.setState({ tasksArray })
  }

  filterToDoTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "To-Do")
  }
  filterDoingTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "Doing")
  }
  filterDoneTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "Done")
  }

  render() {
    //   console.log(this.filterToDoTasksArray())
    return (
      <div>
        <div class="row">
          <div class="col s4">
            <ToDoContainer toDoArray={this.filterToDoTasksArray} />
          </div>
          <div class="col s4">
            <DoingContainer doingArray={this.filterDoingTasksArray} />
          </div>
          <div class="col s4">
            <DoneContainer doneArray={this.filterDoneTasksArray}/>
          </div>
        </div>
      </div>
    )
  }

}

export default ListsContainer
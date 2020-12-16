import React from "react"
import ToDoContainer from "./ToDoContainer"
import DoingContainer from "./DoingContainer"
import DoneContainer from "./DoneContainer"

class ListsContainer extends React.Component {
  //STATE
  state = {
    tasksArray: [],
  }

  //API REQUESTS
  async componentDidMount() {
    const apiResponse = await fetch('http://localhost:4000/tasks')
    const tasksArray = await apiResponse.json()
    this.setState({ tasksArray })
  }

  updateStatusFetch = async (taskObj) => {
    const status = {status: taskObj.status}
    const apiResponse = await fetch(`http://localhost:4000/tasks/${taskObj.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(status)
    })
    const updatedTaskObj = await apiResponse.json()
    return updatedTaskObj
  }

  //HELPER FUNCTIONS
  filterToDoTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "To-Do")
  }
  filterDoingTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "Doing")
  }
  filterDoneTasksArray = () => {
    return this.state.tasksArray.filter(task => task.status === "Done")
  }

  //EVENT HANDLERS
  
  changeColumnHandler = (taskObj, e) => {
    if (e === "to-do") {
      taskObj.status = "Doing"
    } else if (e === "doingL") {
      taskObj.status = "To-Do"
    } else if (e === "doingR") {
      taskObj.status = "Done"
    } else if (e === "done") {
      taskObj.status = "Doing"
    }
    this.updateStatusFetch(taskObj)
    let newTasksArray = [...this.state.tasksArray]
    let idx = newTasksArray.findIndex(task => task.id === taskObj.id)
    newTasksArray[idx] = taskObj
    this.setState({tasksArray: newTasksArray})
  }

  //RENDER

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s4">
            <ToDoContainer changeColumnHandler={this.changeColumnHandler} toDoArray={this.filterToDoTasksArray} />
          </div>
          <div class="col s4">
            <DoingContainer changeColumnHandler={this.changeColumnHandler} doingArray={this.filterDoingTasksArray} />
          </div>
          <div class="col s4">
            <DoneContainer changeColumnHandler={this.changeColumnHandler} doneArray={this.filterDoneTasksArray} />
          </div>
        </div>
      </div>
    )
  }

}

export default ListsContainer
import React from "react"
import Card from "../Components/Card"

class DoingContainer extends React.Component {

    tasks = () => {
        return this.props.doingArray().map(taskObj => <Card changeColumnHandler={this.props.changeColumnHandler} taskObj={taskObj}/>)
      }
    
    render() {
        return (
            <div class="list-columns">
                <h2>Doing</h2>
                { this.tasks() }
            </div>
        )
    }
}
export default DoingContainer
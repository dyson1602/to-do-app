import { render } from "@testing-library/react"
import React from "react"

class Card extends React.Component {
    state = {
        beenClicked: false
    }

    localClickHandler = () => {
        this.setState({ beenClicked: !this.state.beenClicked })
    }

    localChangeHandler = () => {
        this.props.changeColumnHandler(this.props.taskObj)
    }

    setButtons = () => {
        if (this.props.taskObj.status === "To-Do") {
            return <button onClick={this.localChangeHandler}>Right</button>
        } else if (this.props.taskObj.status === "Doing") {
            return <><button onClick={this.localChangeHandler}>Left</button>
            <button onClick={this.localChangeHandler}>Right</button></>
        } else {
            return <button onClick={this.localChangeHandler}>Left</button>
        }
    }

    render() {
        return (
            <div>
                {this.state.beenClicked ?
                    <>
                        <h5 onClick={this.localClickHandler}>{this.props.taskObj.title}</h5>
                        <p>{this.props.taskObj.description}</p>
                        <p>Start: {this.props.taskObj.start}</p>
                        <p>End: {this.props.taskObj.end}</p>
                        { this.setButtons()}
                    </>
                    :
                    <h5 onClick={this.localClickHandler}>{this.props.taskObj.title}</h5>
                }
            </div>
        )
    }
}

export default Card
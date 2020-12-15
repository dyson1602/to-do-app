import React from "react" 
import ToDoContainer from "./ToDoContainer"
import DoingContainer from "./DoingContainer"
import DoneContainer from "./DoneContainer"

class ListsContainer extends React.Component {

    render(){
        return (
        <>
        <h1> LISTS CONTAINER </h1>
        <ToDoContainer />
        <DoingContainer />
        <DoneContainer />
        </>
        )
    }

}

export default ListsContainer
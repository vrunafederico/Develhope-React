import React from "react";

export class TodoList extends React.Component{
    state = {
        Todo: ["ciao", "ciao1","ciao2", "ciao3","ciao4"],
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            Todo: [...this.state.Todo, this.state.todo],
            todo: ""
        })
        
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.Todo.map((el) => <li>{el}</li>)
                    }
                </ul>
                
                <input onChange={this.handleChange} value={this.state.todo}name="Todo"></input>
                <button disabled = {!this.state.todo} onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

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

    handleReset = () =>{
        this.setState({
            Todo: [],
            todo: ""
        })
    }
    
    handleDone = (e) =>{
        this.setState({
            Todo: this.state.Todo.filter(el => el !== e.target.name)
        })
    }

    render(){
        return (
            <div>
                <ul>{
                    this.state.Todo.map((el) =>{
                        return( 
                                <li>
                                    <span>{el}</span>
                                    <button name={el} onClick={this.handleDone}> Remove</button>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <input onChange={this.handleChange} value={this.state.todo} name="Todo"></input>
                <button disabled = {!this.state.todo} onClick={this.handleClick}>Add</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

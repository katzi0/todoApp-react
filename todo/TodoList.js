import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
    super(props);
    this.state = {
        todos:[],
        inputValue:''
        }
    }
    handleAdd = (e) =>{
        e.preventDefault();
        this.setState({todos:this.state.todos.concat(this.state.inputValue)});
        this.setState({inputValue:''})
    }
    render(){
        return (
            <div>
                    <h1>Todos List {this.state.todos}</h1>
                <form onSubmit={this.handleAdd}>
                    <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({inputValue:e.target.value})} />
                </form>
                <ul>
                    {this.state.todos.map(todo => <li>{todo}</li>)}
                </ul>
            </div>
            )
    }

}

export default TodoList;

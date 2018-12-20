import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import {guid, testAxios} from '../utils';
import Footer, {filterTypes} from "./Footer";
import AddTodo from "./AddTodo";
import {connect} from "react-redux";
import {getTodos} from "../redux/selectors";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            filterType: filterTypes.ALL
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        let newTodo = {value: this.state.inputValue, id: guid(), isCompleted: false};
        let todos = this.state.todos.slice();
        todos.push(newTodo);
        this.setState({todos});
        this.setState({inputValue: ''})
    };
    handleToggle = (id, isChecked) => {
        const todos = this.state.todos.slice();
        let selected = todos.find(todo => todo.id === id);
        if (selected) {
            selected.isCompleted = isChecked.target.checked ? true : false;
        }
        this.setState({todos})
    }
    handleDelete = (id) => {
        let todos = this.state.todos.slice();
        let selected = todos.findIndex(todo => todo.id === id);
        if (selected) {
            todos.splice(selected, 1);
        }
        this.setState({todos})
    }
    handleClick = (event, filterType) => {
        event.preventDefault();
        this.setState({filterType})
    }
    handleInputChanged = (inputValue) => {
        this.setState({inputValue})
    }

    renderTodos() {
        if (this.state.todos && this.state.todos.length > 0) {
            if (this.state.filterType === filterTypes.ACTIVE) {
                return this.state.todos.map(t =>
                    !t.isCompleted && this.renderTodo(t)
                )
            }
            else if (this.state.filterType === filterTypes.COMPLETED) {
                return this.state.todos.map(t =>
                    t.isCompleted && this.renderTodo(t)
                )
            }
            return this.state.todos.map(t =>
                this.renderTodo(t)
            )
        }
    }

    renderTodo(t) {
        return <TodoItem key={t.id}
                         id={t.id}
                         todo={t.value}
                         checked={t.isCompleted}
                         handleToggle={this.handleToggle}
                         handleDelete={this.handleDelete}/>
    }

    render() {
        return (
            <div className='todoapp'>
                <h1>Todos List</h1>
                <button type='button' onClick={() => testAxios()} >click me</button>
                <AddTodo
                    handleAdd={this.handleAdd}
                    inputValue={this.state.inputValue}
                    handleInputChanged={this.handleInputChanged}
                />
                <ul className="todo-list">
                    {this.props.todos && this.props.todos.length ? this.props.todos.map(t =>
                        <TodoItem key={t.id}
                                  id={t.id}
                                  todo={t.content}
                                  checked={t.isCompleted}
                                  handleToggle={this.handleToggle}
                                  handleDelete={this.handleDelete}/>) : "no todo's yey"}
                    {/*{this.renderTodos()}*/}
                </ul>
                <Footer handleClick={this.handleClick}/>
            </div>
        )
    }
}

// export default connect(mapStateToProps)(TodoList);
export default connect(state => ({todos: getTodos(state)}))(TodoList);

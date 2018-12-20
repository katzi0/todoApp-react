import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import {guid} from "../utils";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue, guid());
        this.setState({inputValue: ''})
    }

    render() {
        return (
            <div className="header">
                <form onSubmit={this.handleAddTodo}>
                    <input className="new-todo" type="text" value={this.state.inputValue}
                           onChange={(e) => {
                               this.setState({inputValue: e.target.value})
                               this.props.handleInputChanged(e.target.value)
                           }
                           }/>
                </form>
            </div>
        )
    }
}


export default connect(
    null,
    {addTodo}
)(AddTodo);





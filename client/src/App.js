import React, {Component} from 'react';
import './App.css';
import '../node_modules/todomvc-app-css/index.css';
import TodoList from "./components/TodoList";

import {Provider} from "react-redux";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <TodoList/>
                </div>

            </Provider>
        );
    }

}

export default App;

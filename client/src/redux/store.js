import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {fetchTodos, getTodos} from "./actions";

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
))
export default store;

store.dispatch(getTodos());
store.dispatch(fetchTodos()).then(res => console.log(res));

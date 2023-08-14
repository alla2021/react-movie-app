import {createStore, applyMiddleware, combineReducers} from 'redux';
import { moviesReducer } from "./moviesReducer";
import {usersReducer} from "./userReduser";
// import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
    movies: moviesReducer,
    users: usersReducer,
});

export const store = createStore(
    rootReducer,
  // applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

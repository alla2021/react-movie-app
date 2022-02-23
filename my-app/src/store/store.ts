import { createStore, applyMiddleware } from 'redux'; 
import { moviesReducer } from "./moviesReducer";
// import thunk from 'redux-thunk'; 

export const store = createStore(
  moviesReducer,
  // applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

import { RootState } from "./storeTypes";

let initialState: RootState = {
  movies: [],
};

export function moviesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "Set movie":
      return { ...state, 
        movies: action.payload};
    case "Add movie":
      return state;
    case "Edit movie":
      return state;
    case "Delete movie":
      return { ...state,
        movies: state.movies.filter((item) => item.id !== action.payload)}
    default:
      return state;
  }
}

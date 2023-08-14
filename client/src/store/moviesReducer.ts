import { RootState } from "./storeTypes";
import {IMovie} from "../types";

const initialMoviesState: IMovie[] = [];
export function moviesReducer(state = initialMoviesState, action: any) {
  switch (action.type) {
    case "Set movie":
      return action.payload;
    case "Add movie":
      return [...state, action.payload];
    case "Edit movie":
      return state.map(movie => {
        if (movie.id === action.payload.id) {
          return { ...movie, ...action.payload };
        } else {
          return movie;
        }
      });
    case "Delete movie":
      return state.filter((item) => item.id !== action.payload);
    case "Search movies":
      const searchTerm = action.payload;
      const filteredMovies = state.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredMovies;
      default:
      return state;
  }
}
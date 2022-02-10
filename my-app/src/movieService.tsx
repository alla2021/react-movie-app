import { movies } from "./data";

export function getMovies(){
  return JSON.parse(localStorage.getItem("movies"));
}

export function addMovies(newMovie) {
  const movies = JSON.parse(localStorage.getItem("movies"));
  localStorage.setItem("movies", JSON.stringify([...movies, newMovie]))
}

export function initMovies() {
  const filmsFromLocalStorage = getMovies();
  if (filmsFromLocalStorage == null) {
    console.log("all films >>>>", filmsFromLocalStorage);
    localStorage.setItem("movies", JSON.stringify(movies));
  }
}




import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviePage from "./components/MoviesPage";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import SignIn from "./components/SignIn";
import { initMovies } from "./movieService";
import "./scss/main.scss";

const App = () => {
  useEffect(() => {
    initMovies();
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/addmovie" element={<AddForm />} />
        <Route path="/editmovie/:id" element={<EditForm />} />
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default App;

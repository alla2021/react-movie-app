import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import MoviePage from "./MoviesPage";
import MovieList from "./MovieList";
import Header from "./Header";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

import {initMovies} from './movieService'
import "./scss/main.scss";

const App = () => {
  useEffect(() => {
    initMovies()
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
      </Routes>
    </>
  );
};

export default App;

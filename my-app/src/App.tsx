import React from "react";
import { Route, Routes } from "react-router-dom";
//
import Homepage from './Homepages';
import MoviePage from './MoviesPage';
import Movies from './Movies';
//


const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </header>
    </>
  );
};

export default App;

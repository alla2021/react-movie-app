import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepages';
import MoviePage from './MoviesPage';
import Movies from './Movies';
import Header from "./Header";
import AddForm from "./AddForm";
import { films } from './data'
import './scss/main.scss'

const App = () => {

  useEffect(() => {
    // console.log(localStorage.getItem('films'));
    const filmsFromLocalStorage = JSON.parse(localStorage.getItem('films'))
    if(filmsFromLocalStorage == null){
      console.log('all films >>>>', filmsFromLocalStorage )
      localStorage.setItem('films', JSON.stringify(films))
    }
  })
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/addmovie" element={<AddForm />} />
        </Routes>
    </>
  );
};

export default App;

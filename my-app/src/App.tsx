import React, { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviePage from "./components/MoviesPage";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import { initMovies } from "./movieService";
import "./scss/main.scss";

const App = () => {

  useEffect(() => {
    initMovies();
  });


  // const handelLog(valueAUth, valueSdnin = false)

  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/addmovie" element={<AddForm />} />
        <Route path="/editmovie/:id" element={<EditForm/>} /> /privite
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
};

export default App;

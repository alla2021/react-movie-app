import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviePage from "./components/MoviesPage";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/RegisterForm";
import { initMovies } from "./movieService";
import "./scss/main.scss";

const App = () => {
  // const [login, setLogin] = useState('');
  // const [password, setPasword] = useState('');
  // const [isLoggedIn, setLoggedIn] = useState(false)

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
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default App;

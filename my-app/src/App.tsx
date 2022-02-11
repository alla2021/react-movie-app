import React, { useEffect, useState } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import UserProfile from "./components/UserProfile";

const App = () => {
const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    initMovies();
  });

  // const checkUser = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   console.log(user, 'ssss')
  //   user.isAdmin ? setAuth(true) : setAuth(false)
  // }
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/addmovie" element={isAuth ? <AddForm />:<Login/> } />
        <Route path="/editmovie/:id" element={isAuth ? (<EditForm />) : <Login />} /> 
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
};

export default App;

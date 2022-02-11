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

const App = () => {
// const [isAuth, setAuth] = useState(false);
const [user, setUserInfo] = useState([]);

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
        <Route path="/addmovie" element={ <AddForm />} />
        <Route path="/editmovie/:id" element={<EditForm />} /> 
        <Route path="/login" element={<Login user={user} setUserInfo={setUserInfo}/>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
};

export default App;

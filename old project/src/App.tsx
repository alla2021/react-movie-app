import React, { useEffect, useState } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviePage from "./components/MoviesPage";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Login from "./components/Login";
import Logout from "./components/Logout";
import RegisterForm from "./components/RegisterForm";
import { initMovies } from "./movieService";
import "./scss/main.scss";

const App = () => {
const [user, setUserInfo] = useState([]);
const [isAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    initMovies();
  },[]);

  return (
    <>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/addmovie" element={isAuth ? <AddForm /> : <Login user={user} setUserInfo={setUserInfo} isAuth={isAuth} setAuth={setAuth}/>} />
        <Route path="/editmovie/:id" element={isAuth ? <EditForm /> : <Login user={user} setUserInfo={setUserInfo} isAuth={isAuth} setAuth={setAuth}/>} /> 
        <Route path="/login" element={<Login user={user} setUserInfo={setUserInfo} isAuth={isAuth} setAuth={setAuth}/>}></Route>
        <Route path="/register" element={<RegisterForm  setAuth={setAuth}/>}></Route>
        <Route path="/logout" element={isAuth ? <Logout setAuth={setAuth}/> : <Homepage /> } />
      </Routes>
    </>
  );
};

export default App;

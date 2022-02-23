import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { getMoviesData, deleteMovieFromBd } from "../movieService";
import { IMovie } from "../types";
import { RootState } from "../store/storeTypes";
import {useSelector, useDispatch} from "react-redux"

const MovieList = () => {
  // const [films, setFilms] = useState<IMovie[]>([]);
  const movies = useSelector((state:RootState) => state.movies)
  const dispatch =  useDispatch();

  useEffect(() => {
    async function getData() {
      const movies = await getMoviesData();
      console.log(movies)
      return dispatch({type: "Set movie", payload: movies});
    }
    getData();
  }, [dispatch]);
  console.log('first, movies', movies)

  // async function removeMovie(movie) {
  //   await deleteMovieFromBd(movie.id);
  //   setFilms((prevFilms) => {
  //     return prevFilms.filter((item) => item.id !== movie.id);
  //   });
  // }

  return (
    <div className="movie-list">
      {movies.map((item) => (
        <div key={item.id} className="movie-list__item">
          <img src={`${item.img}`} alt={`${item.title}`} />
          <div className="movie-list__price">{item.price}</div>
          <div className="movie-list__title">{item.title}</div>
          <div className="movie-list__info">
            <span>
              <PersonIcon />
              {item.director}
            </span>
            <span>
              <AccessTimeIcon />
              {item.duration}
            </span>
          </div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {/* <Button onClick={() => removeMovie(item)}> */}
              <DeleteIcon color="secondary" />
            {/* </Button> */}
            <Link to={`/movies/${item.id}`}>
              <Button>
                <ReadMoreIcon color="success" />
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { getMovies } from "../movieService";
import { IMovie } from "../types";

const MovieList = () => {
  const [films, setFilms] = useState<IMovie[]>(getMovies());
  console.log("ff", films);

  function deleteMovie() {
    setFilms((prevFilms) => {
      const updateFilms = prevFilms.slice(0, prevFilms.length - 1);
      localStorage.setItem("movies", JSON.stringify(updateFilms));
      return updateFilms;
    });
  }

  return (
    <div className="movie-list">
      {films.map((item) => (
        <div key={item._id} className="movie-list__item">
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
            <Button onClick={deleteMovie}>
              <DeleteIcon color="secondary" />
            </Button>
            <Link to={`/movies/${item._id}`}>
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

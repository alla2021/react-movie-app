import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import { getMovies } from "../movieService";

const MoviesPage = () => {
  const { id } = useParams();
  const [info, getInfo] = useState([]);
  console.log(id);
  useEffect(() => {
    getInfo(getMovies());
  }, [id]);

  const movie = info.find((item) => parseInt(id) === item._id);

  return (
    <>
      {movie && (
        <>
          <div className="movie-details">
            <img
              className="movie-details__column"
              src={`${movie.img}`}
              alt={`${movie.title}`}
            />
            <div className="movie-details__column">
              <h2 className="movie-details__title">{movie.title}</h2>
              <div>{movie.director}</div>
              <span>{movie.duration}</span>
              <div>{movie.price}</div>
              <div className="movie-details__description">
                {movie.description}
              </div>
              <Link to={`/editmovie/${movie._id}`}>
                <Button>
                  <EditIcon color="success" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MoviesPage;

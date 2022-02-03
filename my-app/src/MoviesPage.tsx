import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const { id } = useParams();
  const [info, getInfo] = useState([]);

  useEffect(() => {
    getInfo(JSON.parse(localStorage.getItem("films")));
  }, [id]);

  const movie = info.find((item)=> parseInt(id)  === item._id)
  console.log('movie.....', movie)
  console.log('films',info);
  console.log("first", id);

  return (
    <>
      {movie && (
        <>
          <div className="movie-details">
          <img className="movie-details__column" src={`${movie.img}`} alt={`${movie.title}`} />
          <div className="movie-details__column">
            <h2 className="movie-details__title">
              {movie.title}
            </h2>
            <div className="movie-details__description">
              {movie.description}
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default MoviesPage;

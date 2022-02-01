import React from "react";
import { Link } from "react-router-dom";

// {
//   title, image, date, id;
// }
const MovieCart = () => {
  return (
    <Link to={`movies/${id}`} className="movie-card">
      <div className="movie__cart">
        {/* <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
        <p>{title}</p>
        <p>Release date: {date}</p> */}
      </div>
    </Link>
  );
};

export default MovieCart;

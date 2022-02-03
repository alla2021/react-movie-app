import React from "react";
import { Link } from "react-router-dom";
// import MovieList from './MovieList';
import { Button, ButtonGroup } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";

function Header() {
  return (
    <>
    <h1>Movies Watchlist</h1>
    <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Link to="/">
          <Button variant="outlined">
            <HomeIcon color="success" />
            Home
          </Button>
        </Link>
        <Link to="/movies">
          <Button variant="outlined">
           <MovieIcon color="success" />
            Movies
          </Button>
        </Link>
      </ButtonGroup>
    </>
  );
}

export default Header;

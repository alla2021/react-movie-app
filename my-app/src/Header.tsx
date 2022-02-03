import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from '@mui/icons-material/Add';

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
        <Link to="/addmovie">
          <Button variant="outlined">
           <AddIcon color="success" />
            Add movie
          </Button>
        </Link>
      </ButtonGroup>
    </>
  );
}

export default Header;

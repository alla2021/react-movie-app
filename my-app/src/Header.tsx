import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  return (
    <>
      <Container>
        <Typography align="center" variant="h1">
          Movies Watchlist
        </Typography>
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
      </Container>
    </>
  );
}

export default Header;

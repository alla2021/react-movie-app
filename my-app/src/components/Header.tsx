import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  return (
    <>
      <Container>
        <Typography align="center" variant="h1">
          Movies Watchlist
        </Typography>
        <Grid container fontSize='20px'>
          <Grid item xs={2}>
            <Link to="/">
              <HomeIcon color="success" />
              Home
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/movies">
              <MovieIcon color="success" />
              Movies
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/addmovie">
              <AddIcon color="success" />
              Add movie
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/login">
              <LoginIcon />
              Sign in
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/logout">
              <LogoutIcon />
              Log out
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Header;

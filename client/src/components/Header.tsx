import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';

function Header({isAuth}) {
  return (
    <>
      <Container maxWidth="xl">
      <Typography
          align="center"
          variant="h1"
          sx={{
            backgroundColor: 'rgb(0%, 27.058823529%, 0.392156863%, 0.7)',
            color: '#fff',
            padding: '20px',
            borderRadius: '10px',
            fontSize:'50px'
          }}
        >
        My Movie Watchlist
      </Typography>
        <Box sx={{display:"flex", justifyContent:'space-around', alignItems:'center', minHeight:'50px', fontSize:'20px', padding:'20px'}}>
          <Box sx={{padding:'10px'}}>
            <Link to="/">
              <HomeIcon color="success" />
              Home
            </Link>
          </Box>
          <Box sx={{padding:'10px'}}>
            <Link to="/movies">
              <MovieIcon color="success"  />
              Movies
            </Link>
          </Box>
          <Box sx={{padding:'10px'}}>
            <Link to="/addmovie">
              <AddIcon color="success" />
              Add movie
            </Link>
          </Box>
          {!isAuth ? (<Box sx={{padding:'10px'}}>
            <Link to="/login">
              <LoginIcon />
              Sign in
            </Link>
          </Box>) :
          (<Box sx={{padding:'10px'}}>
            <Link to="/logout">
              <LogoutIcon />
              Log out
            </Link>
          </Box>)
}        
          </Box>
      </Container>
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "0.5rem",
  borderRadius: "4px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#4caf50",
  },
};

const iconStyle = {
  marginRight: "0.5rem",
};


export default Header;

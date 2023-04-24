import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { getMoviesData } from "../movieService";
import { Container, Box, Typography, Button } from "@mui/material";

const MoviesPage = () => {
  const { id } = useParams();
  const [info, getInfo] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
      let movieDb = await getMoviesData()
      getInfo(movieDb)
    }
    fetchData()
  }, [id]);

  const movie = info.find((item) => parseInt(id) === item.id);

  return (
    <>
      {movie && (
        <>
        <Container maxWidth="xl">
        <Box sx={{width:"100%", display:'flex', paddingTop:'40px',}}>
            <Box sx={{width:"50%", display:'flex', justifyContent:'center'}}>
            <img  
              className="poster"
              src={`${movie.img}`}
              alt={`${movie.title}`}
            />
            </Box>
            <Box sx={{ width: "40%" }}>
              <Typography variant="h2">{movie.title}</Typography>
              <Typography>Director: {movie.director}</Typography>
              <Typography>Duration: {movie.duration}</Typography>
              <Typography sx={{padding:"20px 0"}}>Price: {movie.price}</Typography>
              <Typography sx={{padding:"0 0 30px"}}>
                {movie.description}
              </Typography>
              <Link to={`/editmovie/${movie.id}`}>
                <Button variant="contained" color="success" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
        </>
      )}
    </>
  );
};

export default MoviesPage;

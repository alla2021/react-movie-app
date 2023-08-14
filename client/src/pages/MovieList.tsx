import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, IconButton } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { getMoviesData, deleteMovieFromBd } from "../movieService";
import { IMovie } from "../types";
import { RootState } from "../store/storeTypes";
import {useSelector, useDispatch} from "react-redux"
import SearchField from "../components/SearchField";

const MovieList = () => {
  const movies = useSelector((state:RootState) => state.movies)
  const dispatch =  useDispatch();
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    async function getData() {
      const movies = await getMoviesData();
      console.log(movies)
      return dispatch({type: "Set movie", payload: movies});
    }
    getData();
  }, [dispatch]);

  async function removeMovie(movie) {
    await deleteMovieFromBd(movie.id);
    console.log(movie.id)
    dispatch({type: "Delete movie", payload: movie.id })
  }

  const handleSearch = () => {
    dispatch({ type: "Search movies", payload: searchText });
  };
  
  //Filtering movies based on searchText from storage
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <SearchField
      value={searchText}
      onSearch={handleSearch}
      onInputChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
    <div className="movie-list">
    {filteredMovies.map((item) => (
          <div key={item.id} className="movie-list__item">
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
          <ButtonGroup sx={{display:"flex", justifyContent:'space-between', padding:'10px 20px'}} variant="outlined" aria-label="outlined button group">
            <IconButton aria-label="delete" onClick={() => removeMovie(item)}>
              <DeleteIcon />
            </IconButton>
            <Link to={`/movies/${item.id}`}>
              <Button color="success" variant="contained" >
                <ReadMoreIcon />
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      ))}
    </div>
    </>
  );
};

export default MovieList;

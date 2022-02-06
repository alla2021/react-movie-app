import React, { useState } from "react";
import { Button, TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { getMovies, addMovies } from "../movieService";

function AddForm() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleClickRedirect() {
    navigate("/movies");
  }

  const handleAddFilmSubmit = (e) => {
    e.preventDefault();
    getMovies();
    let newMovie = {
      _id: Math.trunc(Math.random() * 100),
      title,
      director,
      duration,
      price,
      img,
      featured: false,
      description,
    };
    setMovies([...movies, newMovie]);
    addMovies(newMovie);
    handleClickRedirect();
  };

  return (
    <form className="form" onSubmit={handleAddFilmSubmit}>
      <TextField
        id="filled-basic"
        label="Title"
        variant="outlined"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Director"
        variant="outlined"
        required
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Duration"
        variant="outlined"
        required
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Price"
        variant="outlined"
        required
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Image"
        required
        variant="outlined"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Description"
        required
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add movie
      </Button>
    </form>
  );
}

export default AddForm;

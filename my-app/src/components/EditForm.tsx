import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { getMovies } from "../movieService";

function EditForm() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  console.log('movie id>>>',id);
  
  useEffect(() => {
    const filmsFromLocalStorage = setMovies(getMovies());
    console.log(filmsFromLocalStorage);
  }, [id]);

  const editMovie = movie.find((item) => parseInt(id) === item._id);
  console.log('editMovie', editMovie);

  const handleUpdateMovieItem = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // let newMovie = {
    //   title,
      // director,
      // duration,
      // price,
      // img,
      // description,
    // };

  };

  return (
    <div>
      <h3>Edit movie</h3>
      <form className="form" onClick={handleUpdateMovieItem}>
      <TextField
        id="filled-basic"
        required
        variant="outlined"
        // value={editMovie.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <TextField
        id="filled-basic"
        label="Director"
        variant="outlined
        value={director}
        required
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
        required
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> */}
        <Button variant="contained" type="submit">
          Edit movie
        </Button>
      </form>
    </div>
  );
}

export default EditForm;

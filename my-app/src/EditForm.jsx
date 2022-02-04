import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";

function EditForm() {
  const { id } = useParams();
  const [films, setFilms] = useState([]);
  console.log(id);


  const filmsFromLocalStorage = JSON.parse(localStorage.getItem("films"));
  const movie = filmsFromLocalStorage.find((item) => parseInt(id) === item._id);
  console.log(movie);

  const handleUpdateMovieItem = (e) => {
    e.preventDefault();
    console.log(movie.title);
    console.log(e.target.value);
  };

  const changeInput =() => {
    
  }

  return (
    <div>
      <h3>Edit movie</h3>
      <form className="form" onSubmit={handleUpdateMovieItem}>
        <TextField 
          id="filled-basic"   
          variant="outlined" 
          value={movie.title} />
        <TextField
          id="filled-basic"
          variant="outlined"
          value={movie.director}
        />
        <TextField
          id="filled-basic"
          variant="outlined"
          value={movie.duration}
        />
        <TextField id="filled-basic" variant="outlined" value={movie.price} />
        <TextField id="filled-basic" variant="outlined" value={movie.img} />
        <TextField
          id="filled-basic"
          variant="outlined"
          value={movie.description}
        />
        <Button variant="contained" type="submit">
          Edit movie
        </Button>
      </form>
    </div>
  );
}

export default EditForm;

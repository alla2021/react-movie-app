import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";

function EditForm() {
  const { id } = useParams();
  const [addFormData, setAddFormData] = useState({
    title: "",
    director: "",
    duration: "",
    price: "",
    img: "",
    description: "",
  });
  console.log(addFormData.title);
  const navigate = useNavigate();
  function handleClickRedirect() {
    navigate("/movies");
  }

  const filmsFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
  const movie = filmsFromLocalStorage.find((item) => parseInt(id) === item._id);
  console.log(movie);

  const handleUpdateMovieItem = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const editItem = (e) => {
    setAddFormData(e.target.value);
  };

  return (
    <div>
      <h3>Edit movie</h3>
      <form className="form" onSubmit={handleUpdateMovieItem}>
        <TextField
          id="filled-basic"
          variant="outlined"
          value={movie.title}
        />
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

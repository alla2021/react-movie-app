import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { getMovies} from "../movieService";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../types";

function EditForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    duration: "",
    price: "",
    img: "",
    description: "",
  });

  const navigate = useNavigate();
  function handleClickRedirect() {
    navigate("/home");
  }

  useEffect(() => {
    const filmsFromLocalStorage = getMovies();
    console.log("get", filmsFromLocalStorage);
    const editMovie = filmsFromLocalStorage.find(
      (item) => parseInt(id) === item._id
    );
    setFormData(editMovie);
  }, [id]);

  const handleUpdateMovieItem = (e) => {
    e.preventDefault();
    console.log(formData);
    // updateMovies(formData)
    localStorage.setItem('movies', JSON.stringify([formData]));
  };

  return (
    <div>
      <form className="form" onClick={handleUpdateMovieItem}>
        <TextField
          id="filled-basic"
          required
          variant="outlined"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Director"
          variant="outlined"
          value={formData.director}
          required
          onChange={(e) =>
            setFormData({ ...formData, director: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          label="Duration"
          variant="outlined"
          required
          type="number"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          label="Price"
          variant="outlined"
          required
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Image"
          required
          variant="outlined"
          value={formData.img}
          onChange={(e) => setFormData({ ...formData, img: e.target.value })}
        />
        <TextField
          id="filled-basic"
          required
          variant="outlined"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Button variant="contained" type="submit">
          Edit movie
        </Button>
      </form>
    </div>
  );
}

export default EditForm;

import React, {useState} from "react";
import {
  Button,
  FormGroup,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material/";

function AddForm() {
  const [films, setFilms] = useState([])
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');

  const handleAddFilmSubmit = (e) => {
    e.preventDefault();
    let film = {
      _id: Math.trunc(Math.random() * 1000) + 1,
      title,
      director,
      duration,
      price,
      img,
      featured: false,
      description,
    }
    setFilms([...films, film])
    console.log(setFilms);
    setTitle('');
    setDirector('');
    setDuration('');
    setPrice('');
    setImg('');
    setDescription('');

  }

  return (
    <form className="form" onSubmit={handleAddFilmSubmit}>
      <TextField id="filled-basic" label="Title" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <TextField id="filled-basic" label="Director" variant="outlined" value={director} onChange={(e)=>setDirector(e.target.value)}/>
      <TextField id="filled-basic" label="Duration" variant="outlined" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
      <TextField id="filled-basic" label="Price" variant="outlined" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <TextField id="filled-basic" label="Image" variant="outlined" value={img} onChange={(e)=>setImg(e.target.value)}/>
      <TextField id="filled-basic" label="Description" variant="outlined" value={description} onChange={(e)=> setDescription(e.target.value)}/>
      <Button color="secondary" type='submit' >Add movie</Button>
    </form>
  );
}

export default AddForm;

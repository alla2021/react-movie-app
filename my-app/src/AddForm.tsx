import React from "react";
import {
  Button,
  FormGroup,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material/";

function AddForm() {
  return (
    <form className="form">
      <TextField id="filled-basic" label="Title" variant="outlined" />
      <TextField id="filled-basic" label="Director" variant="outlined" />
      <TextField id="filled-basic" label="Duration" variant="outlined" />
      <TextField id="filled-basic" label="Price" variant="outlined" />
      <TextField id="filled-basic" label="Image" variant="outlined" />
      <TextField id="filled-basic" label="Description" variant="outlined" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="featured"
        />
      </FormGroup>
    </form>
  );
}

export default AddForm;

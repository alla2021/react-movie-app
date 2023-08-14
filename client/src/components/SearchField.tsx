import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, IconButton, Container  } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchField = ({
   value,
   onSearch,
   onInputChange,
   onKeyPress,
 }) => {
   const dispatch = useDispatch();
 
   const handleSearch = () => {
     dispatch({ type: "Search movies", payload: value });
   };
 
   const handleKeyPress = (event) => {
     if (event.key === "Enter") {
       handleSearch();
     }
   };
 
   return (
     <>
       <Container maxWidth="xl" style={{ display: "flex", alignItems: "center" }}>
         <TextField
           fullWidth
           label="Search"
           variant="outlined"
           value={value}
           onChange={onInputChange}
           onKeyPress={onKeyPress}
         />
         <IconButton onClick={onSearch} style={{ padding: "8px" }}>
           <SearchIcon />
         </IconButton>
       </Container>
     </>
   );
 };

export default SearchField;

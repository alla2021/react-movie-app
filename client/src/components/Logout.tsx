import React from "react";
import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const Logout = ({ setAuth }) => {
  const navigate = useNavigate();

  const logoutHandle = () => {
    localStorage.setItem("user", JSON.stringify({}));
    setAuth(false);
    navigate("/login");
  };

  return (
    <>
      <Container>
        <Typography align="center" variant="h4" sx={{marginBottom:"30px"}}>
          Do you want Log Out?
        </Typography>
        <Box sx={{display:"flex", justifyContent:"center"}}>
          <Button
              variant="outlined"
              sx={{ width: "250px", margin:"0 auto" }}
              onClick={logoutHandle}
          >
            Yes
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Logout;

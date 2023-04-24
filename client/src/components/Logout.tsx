import React from "react";
import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// interface Props {
//   setAuth: boolean;
// }

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
        <Typography align="center" variant="h1">
          Log Out?
        </Typography>
        <Button
          variant="outlined"
          sx={{ width: "150px" }}
          onClick={logoutHandle}
        >
          Yes
        </Button>
      </Container>
    </>
  );
};

export default Logout;

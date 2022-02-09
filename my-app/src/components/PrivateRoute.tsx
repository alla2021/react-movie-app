import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  
  function handleClickRedirect() {
    navigate("/");
  }
  return 

};

export default PrivateRoute;

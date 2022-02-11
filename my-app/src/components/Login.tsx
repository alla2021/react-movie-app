import * as React from "react";
import { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Link,
  Button,
  TextField,
  Avatar,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../movieService";
import { useTheme } from "@emotion/react";
import {IUser, IMovie} from '../types';
const theme = createTheme();

interface Props {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUserInfo] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let usersList = getUsers();
    // console.log('first, userList', usersList)
    // console.log('first, user', user)
    // const verifyUser = usersList.find(
    //   (item) => item.email
    // );
  }, [user]);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    setUserInfo([user]);
    localStorage.setItem("user", JSON.stringify(user));
    const usersList = getUsers();
    console.log('userlist>>>>>',usersList)
    let userVerify = usersList.find(
      (item) => user.email === item.email && user.password === item.password
    );
    console.log(userVerify)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={() => navigate("/register")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

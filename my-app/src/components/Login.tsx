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

const theme = createTheme();

export default function Login() {
  const [user, setUserInfo] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    let obj = {
      login,
      password
    }
    setUserInfo([obj])
    console.log(user)
  }

  const navigate = useNavigate();
  function handleClickRedirect() {
    navigate("/register");
  }

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
                <Link onClick={handleClickRedirect}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

import * as React from "react";
import { useState } from "react";
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
import { getUsers } from "../userService";

const Login = ({ user, setUserInfo, setAuth, isAuth }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const theme = createTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    async function fetchUsersList() {
      const users = await getUsers();
      let userVerify = users.find(
        (item) => user.email === item.email && user.password === item.password
      );
      if (userVerify) {
        userVerify.auth = true;
        console.log("userVerify>>>>", userVerify);
        setUserInfo([userVerify]);
        localStorage.setItem("user", JSON.stringify(userVerify));
        setAuth(true);
        navigate("/movies");
      } else {
        console.log("This user does not exist");
      }
    }
    fetchUsersList();
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
            >Sign In
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

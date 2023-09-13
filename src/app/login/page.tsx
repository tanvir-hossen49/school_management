'use client'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import ShowToast from '../utilities/ShowToast';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      setButtonDisabled(true);
      const {data} = await axios.post('/api/users/login', user);

      if(data.success) {
        ShowToast('success', 'log in successful')
        router.push("/");
        return;
      }

      ShowToast('error', data.message);
    } catch (error: any) {
        ShowToast('error', error.message);
    } finally{
      setLoading(false)
      setButtonDisabled(false);
    }
    
  };

  useEffect(() => {
    if (user.username.length > 3 && user.password.length > 4) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  },[user])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={user.username}
              onChange={(e) => setUser({...user, username: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor: '#1565c0'}}
              sx={{ mt: 3, mb: 2 }}
              disabled={buttonDisabled}
            >
              { loading ? "loading..." : "Sign In" }
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
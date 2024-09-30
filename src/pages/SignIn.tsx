import Grid from '@mui/material/Grid2';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Grid2,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import image from '../assets/img-trabalho.png';
import { pink } from '@mui/material/colors';
import HttpsIcon from '@mui/icons-material/Https';
import { addUser } from '../store/models/LoginSlice';
import { useState } from 'react';

import Copyrigth from './Copyright';
import { useAppDispatch } from '../store/hooks';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleSubmit() {
    dispatch(addUser({ email, password, checked }));
    setEmail('');
    setPassword('');
    setChecked(false);
  }

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container minHeight={960} spacing={6} alignContent={'center'}>
            <Grid size={{ xs: 6, md: 6 }} justifyContent={'center'} minHeight={400}>
              <img src={image} style={{ height: '550px' }}></img>
            </Grid>

            <Grid
              container
              spacing={4}
              display={'flex'}
              justifyContent={'flex-start'}
              alignContent={'center'}
              flexDirection={'column'}
              size={{ xs: 6, md: 4 }}
              minWidth={'550px'}
            >
              <Grid size={{ xs: 12, md: 8 }} display={'flex'} alignSelf={'center'} flexDirection={'column'}>
                <Box alignSelf={'center'}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: pink[500] }}>
                    <HttpsIcon />
                  </Avatar>
                </Box>

                <Typography variant="h4" color="black" alignSelf={'center'}>
                  Sign In
                </Typography>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="E-mail*"
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  variant="outlined"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Password*"
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  variant="outlined"
                />
              </Grid>

              <Grid display={'flex'} justifyContent={'start'} size={{ xs: 12, md: 8 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked checked={checked} onChange={ev => setChecked(ev.target.checked)} />}
                    label="Ativo"
                  />
                </FormGroup>
                <Typography variant="h6" sx={{ fontSize: '0.9rem', mt: '9px' }}>
                  Remember me
                </Typography>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                  Entrar
                </Button>
              </Grid>
              <Grid2 alignSelf="center">
                <Typography component="a" href="#" sx={{ fontSize: '0.8rem', color: 'inherit' }}>
                  Ainda nao tem uma conta ? Cadastre-se
                </Typography>
              </Grid2>
              <Grid2 alignSelf="center">
                <Copyrigth />
              </Grid2>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;

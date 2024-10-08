import Grid from '@mui/material/Grid2';
import { Avatar, Box, Button, Container, Grid2, TextField, Typography } from '@mui/material';
import image02 from '../assets/trabalho02.png';
import GppGoodIcon from '@mui/icons-material/GppGood';

import Copyrigth from './Copyright';
import { useAppDispatch } from '../store/hooks';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePass, setRepass] = useState<string>('');

  const dispatch = useAppDispatch();

  function handleSubmit() {
    dispatch(addUser({ email, password, rePass }));
    setEmail('');
    setPassword('');
    setChecked(false);
  }

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container minHeight={960} spacing={10} alignContent={'center'}>
            <Grid size={{ xs: 6, md: 6 }} justifyContent={'center'} minHeight={400}>
              <img src={image02} style={{ height: '550px' }}></img>
            </Grid>

            <Grid
              container
              spacing={4}
              display={'flex'}
              justifyContent={'flex-start'}
              alignContent={'center'}
              flexDirection={'column'}
              size={{ xs: 6, md: 4 }}
              minWidth={'510px'}
            >
              <Grid size={{ xs: 12, md: 8 }} display={'flex'} alignSelf={'center'} flexDirection={'column'}>
                <Box alignSelf={'center'}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: '#4fb056ff' }}>
                    <GppGoodIcon />
                  </Avatar>
                </Box>

                <Typography variant="h4" color="black" alignSelf={'center'}>
                  Sign Up
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
                  variant="outlined"
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Repeat Password*"
                  value={rePass}
                  onChange={ev => setRepass(ev.target.value)}
                  variant="outlined"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Criar Conta
                </Button>
              </Grid>
              <Grid2 alignSelf="center">
                <Typography component="a" href="#" sx={{ fontSize: '0.8rem', color: 'inherit' }}>
                  Ja possui conta ? Va para o Login
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

export default SignUp;

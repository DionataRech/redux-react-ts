import Grid from '@mui/material/Grid2';
import { Avatar, Box, Button, Checkbox, Container, Grid2, Link, TextField, Typography } from '@mui/material';
import image from '../assets/img-trabalho.png';
import { pink } from '@mui/material/colors';
import HttpsIcon from '@mui/icons-material/Https';

import { useState } from 'react';
import ReduxTest from './ReduxTest';
import { Copyright } from '@mui/icons-material';

function SignUp() {
  const [checked, setChecked] = useState<Boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
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
              <Grid size={{ xs: 12, md: 8 }}></Grid>
              <Grid size={{ xs: 12, md: 8 }} display={'flex'} alignSelf={'center'} flexDirection={'column'}>
                <Box alignSelf={'center'}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: pink[500] }}>
                    <HttpsIcon />
                  </Avatar>
                </Box>

                <Typography variant="h4" color="black">
                  Sign In
                </Typography>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField fullWidth type="text" placeholder="E-mail*" variant="outlined" />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField fullWidth type="text" placeholder="Password*" variant="outlined" />
              </Grid>

              <Grid display={'flex'} justifyContent={'start'} size={{ xs: 12, md: 8 }}>
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Typography variant="h6" mt={'5px'}>
                  Remember me
                </Typography>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button variant="outlined" color="info" fullWidth>
                  Entrar
                </Button>
              </Grid>
              <Grid2>
                <Link>Ainda nao tem uma conta ? Cadastre-se</Link>
              </Grid2>
              <Copyright />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;

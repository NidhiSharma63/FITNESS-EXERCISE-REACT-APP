import React from 'react';
import { Stack } from '@mui/material';
import { CradleLoader } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <Oval
     height="100"
     width="100"
     color='grey'
     ariaLabel='loading' />
  </Stack>
);

export default Loader;
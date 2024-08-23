import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css';
import { ThemeProvider } from '@emotion/react';
import { palette } from './styles/paletteTheme'
import router from './Routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <Box 
        bgcolor={'#282c34'} 
        minHeight={'100vh'} 
        alignContent={'center'} 
        textAlign={'center'}
      >
        <RouterProvider router={router} /> 
      </Box>
         
    </ThemeProvider>
   
  </React.StrictMode>
);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductForm from './components/productForm';
import FinalForm from './components/finalForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ProductForm />

        {/* <FinalForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

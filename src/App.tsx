import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Button variant='contained' color='primary'>
          ボタン
        </Button>
        <p>テキストの色も変更</p>
      </div>
    </ThemeProvider>
  );
}

export default App;

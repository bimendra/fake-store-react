import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './App';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './common-styles/Theme';
import { GlobalStyles } from './common-styles/global.styles';
import { Reset } from 'styled-reset';

import { Button } from './components/Button';


const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ThemeProvider theme={theme.light}>
      <Reset />
      <GlobalStyles />
      <Button>Add to Cart</Button>      
      <App name="StackBlitz" />
    </ThemeProvider>
  </StrictMode>
);

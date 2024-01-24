import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './App';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './common-styles/Theme';
import { GlobalStyles } from './common-styles/global.styles';
import { Reset } from 'styled-reset';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('app'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'clothing',
        element: <h1>Clothing</h1>
      }
    ]
  }
  
])

root.render(
  <StrictMode>
    <Reset />
    <GlobalStyles />
    <ThemeProvider theme={theme.light}><RouterProvider router={router} /></ThemeProvider>
  </StrictMode>
);


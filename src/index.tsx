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
    element: <h1>Home</h1>
  },
  {
    path: 'clothing',
    element: <h1>Clothing</h1>
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


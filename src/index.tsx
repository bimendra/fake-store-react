import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './App';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './common-styles/Theme';
import { GlobalStyles } from './common-styles/global.styles';
import { Reset } from 'styled-reset';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductList } from './features/ProductList';
import { Provider } from 'react-redux';
import { store } from './store';
const root = createRoot(document.getElementById('app'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products',
        element: <ProductList />
      }
    ]
  }
  
])

root.render(
  <StrictMode>
   <Provider store={store}>
   <Reset />
    <GlobalStyles />
    <ThemeProvider theme={theme.light}><RouterProvider router={router} /></ThemeProvider>
   </Provider>
  </StrictMode>
);


import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from "./theme";
import RootLayout from "./components/RootLayout";

import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Department from './pages/Department';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
        <RootLayout />
    ),
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: '/departments',
        element: <Department />,
      },
      {
        path: '/products',
        element: <Products />,
      }
    ],
  }
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
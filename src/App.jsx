import './App.scss';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/index';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

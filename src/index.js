import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Search from './Components/Search/Search';
import Error404 from './Components/Error404/Error404';


const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "*",
    element: <Error404/>,
  },
  {
    path: "/search",
    element: <Search />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

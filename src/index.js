import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Search from './Components/Search/Search';
import Error404 from './Components/Error404/Error404';

const router = createBrowserRouter([
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
  <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

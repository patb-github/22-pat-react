import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout.jsx';
import User from './components/User.jsx';
import Admin from './components/Admin.jsx';
import Owner from './components/Owner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "",
      //   element: <App />,
      //   children: [
      //     // {
      //     //   path: "user",
      //     //   element: <User />,
      //     // },
      //     // {
      //     //   path: "admin",
      //     //   element: <Admin />,
      //     // }
      //   ]
      // },
      {
        path: "owner",
        element: <Owner />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

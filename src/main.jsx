import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Route';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Qual from './components/Qual';
import Contactme from './components/Contactme';
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter([
  {
  path:'/',
  element:<Route/>,
  children:[
  {
    path: "/",
    element: <Aboutme />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "Qual",
    element: <Qual />,
  },
  {
    path: "Contactme",
    element: <Contactme />,
  }
]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);

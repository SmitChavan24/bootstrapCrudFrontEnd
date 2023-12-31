import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import RemoveEmployee from './components/RemoveEmployee';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/addEmp",
    element:<AddEmployee/>,

  },
  {
    path:"/removeEmp",
    element:<RemoveEmployee/>,

  },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

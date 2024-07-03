import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/SecondPage/SecondPage';
import UserProfile from './Pages/UserProfile/UserProfile';
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element: <FirstPage></FirstPage>,
      },
      {
        path:'/page1',
        element: <FirstPage></FirstPage>,
      },
      {
        path:'/page2',
        element: <SecondPage></SecondPage>,
      },
    ]
  },
  {
    path:'/:id',
    element:<UserProfile></UserProfile>
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App

import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FirstPage from '../../Pages/FirstPage/FirstPage'
import SecondPage from './../../Pages/SecondPage/SecondPage';
import Footer from '../Footer/Footer';

export default function () {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    
  )
}

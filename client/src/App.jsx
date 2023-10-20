import React, {useState} from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios'
import { Toaster } from 'react-hot-toast';



axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Signin/></div>
  },
  {
    path: '/signup',
    element: <div><Signup/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }

])
 
export default function(){
  return(
      <>
      <Toaster position=' bottom-right' toastOptions={{duration: 2000}}/>
      <RouterProvider router={router} />
      </>
  )
}
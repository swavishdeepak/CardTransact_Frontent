import React from 'react';
//import logo from './logo.svg';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { GoogleAuthentication } from './pages/Auth/GoogleAuthentication';
import { ForgetPassword } from './pages/Auth/ForgetPassword';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AddAgents } from './pages/Users/AddAgents';
import { AddEmployees } from './pages/Users/AddEmployees';
import { MainLayout } from './layouts/MainLayout';
import { ViewAgents } from './pages/Users/ViewAgents';
import { ViewEmployees } from './pages/Users/ViewEmployees';
import { Commission } from './pages/Commission/Commission';
import { Merchant } from './pages/Merchant/Merchant';
import { ViewApplication } from './pages/Applications/ViewApplication';
import './App.css';
import { Addapplication } from './pages/Applications/Addapplication';
import { VerifyOtp } from './pages/Auth/VerifyOtp';
import { ResetPassword } from './pages/Auth/ResetPassword';

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/googleAuthentication",
      element: <GoogleAuthentication />,
    },
    {
      path: "/auth/ForgetPassword",
      element: <ForgetPassword />
    },
    {
      path: "/auth/verifyOtp",
      element: <VerifyOtp/>
    },
    {
      path: "/auth/resetPassword",
      element: <ResetPassword />

    },
    
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/dashboard",
          element: <Dashboard />
        },
        {
          path:"/addAgents",
          element: <AddAgents />
        },
        {
          path: "/addEmployees",
          element: <AddEmployees />
        },
        {
          path: "/viewAgents",
          element: <ViewAgents/>
        },
        {
          path: "/viewEmployees",
          element: <ViewEmployees />
        },
        {

          path: "/addApplication",
          element: <Addapplication/>
        },
        {
          path: "/viewApplications",
          element: <ViewApplication/>

        },
        {
          path: "/merchants",
          element: <Merchant/>
        },
        {
          path: "/commission",
          element: <Commission />
        },
        // {
        //   path: "/All Commission",
        //   element: <Commission />
        // },
        // {
        //   path: "/Commission Structure",
        //   element: <Commission />
        // },
        // {
        //   path: "/View Structure",
        //   element: <Commission />
        // }
      ]
    },
    
    

  ]);

   // export const Commission = [
  //    {
  //     text: "All Commission"
  //     icon: PersonIcon,
  //     link: "/All Commission"
  //    },
  //    {
  //     text: "commission Structure"
  //     icon: PersonIcon,
  //     link: "/Commission Structure"
  //    },
  //    {
  //     text: "View Structure"
  //     icon: PersonIcon,
  //     link: "/View Structure"
  //    },
  // ]

  return <RouterProvider router={router} />
}




export default App;



import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from '../App'

import { Home, Donation, Causes } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/donations',
        element: <Donation/>
    },
    {
        path: '/causes',
        element: <Causes/>
    }
])

const Routers = () => {
    return <RouterProvider router={router}/>
}

export default Routers
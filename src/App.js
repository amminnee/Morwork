import React from "react";
import Main from "./components/Main";
import Jobs from "./components/jobs";
import Notification from "./components/Notification";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Feed from "./components/Feed";
import SideInfo from "./components/SideInfo";
import NewPost from "./components/NewPost";

export default () => {
    // router sets all the paths of the app and assigns them to a component
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main />,
            errorElement:<h1>404 not found 😑</h1>,
            children: [ // these are the children paths of main that get loaded under it
                {
                    path:'/jobs',
                    element:<Jobs />,
                },
                {
                    path:'/notifications',
                    element:<Notification />,
                },
                {
                    path:'/',
                    element:<Feed />,
                },
                {
                    path:'/profile',
                    element:<SideInfo />,
                },
            ]
        }
    ])

    return (
        // in the main we provide routerProvider with the router object
        <RouterProvider router={router} />
    )
}
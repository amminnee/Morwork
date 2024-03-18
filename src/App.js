import React from "react";
import Main from "./components/main-components/Main";
import Jobs from "./components/jobs/Jobs";
import Notification from "./components/notifications/Notification";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Feed from "./components/post-feed/Feed";
import UserProfile from "./components/profile-page/UserProfile";

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
                    element:<UserProfile />,
                },
            ]
        }
    ])

    return (
        // in the main we provide routerProvider with the router object
        <RouterProvider router={router} />
    )
}
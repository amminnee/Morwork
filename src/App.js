import React from "react";
import Main from "./components/main-components/Main";
import Notification from "./components/notifications/Notification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Feed from "./components/post-feed/Feed";
import UserProfile from "./components/profile-page/UserProfile";
import LoginPage from "./components/authentication/LoginPage";
import SignUp from "./components/authentication/SignUp";
import AuthProvider from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import Jobs from "./components/jobs/Jobs";

export default () => {
    // const router = createBrowserRouter([
    //     {
    //         path:'/',
    //         element:<PrivateRoute />,
    //         errorElement:<h1>404 not found 😑</h1>,
    //         children: [
    //             {
    //                 path:'/',
    //                 element:<Main />,
    //                 children: [ // these are the children paths of main that get loaded under it
    //                     {
    //                         path:'/jobs',
    //                         element:<Jobs />,
    //                     },
    //                     {
    //                         path:'/notifications',
    //                         element:<Notification />,
    //                     },
    //                     {
    //                         path:'/',
    //                         element:<Feed />,
    //                     },
    //                     {
    //                         path:'/profile',
    //                         element:<UserProfile />,
    //                     },
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         path:'/login',
    //         element:<LoginPage />,
    //     },
    //     {
    //         path:'/sign-up',
    //         element:<SignUp />,
    //     }
    // ])

    return (
        // <AuthProvider>
        //     <RouterProvider router={router} />
        // </AuthProvider>
        <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route element={<PrivateRoute />}>
                <Route element={<Main />}>
                    <Route path="/" element={<Feed />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/notifications" element={<Notification />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    )
}
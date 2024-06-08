
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
import Settings from "./components/settings/Settings";
import ProfileSettings from "./components/settings/ProfileSettings";
import CommentPage from "./components/post-feed/CommentPage";
import { getNotificationsByUserId } from "./api/app";
import MessagesPage from "./components/messages/MessagesPage";
import OrganizationSettings from "./components/settings/settings_organization/OrganizationSettings";
import OrganizationCont from "./components/organization-page/OrganizationCont";
import SignUpSequence from "./components/authentication/signup-sequence/SignUpSequence";
import ServerTester from "./components/main-components/ServerTester";
import ServerErrorPage from "./components/main-components/ServerErrorPage";

export default () => {

  const [notifications, setNotification] = React.useState([])

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
        const fetchNotifications = () => {
            getNotificationsByUserId(Number(userId))
                .then((res) => {
                    setNotification(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching notifications:", error);
                });
        };

        fetchNotifications();

        const intervalId = setInterval(fetchNotifications, 9000);

        return () => clearInterval(intervalId);
    }
}, []);


    return (
        <div className="app">
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<ServerTester />}> 
                {/* <Route element={<ServerErrorPage />} path="/error" /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/personal-info" element={<SignUpSequence/>} />
                  <Route element={<Settings/>} path="/settings">
                    <Route element={<ProfileSettings />} path="/settings/profile" />
                    <Route element={<OrganizationSettings />} path="/settings/organization" />
                  </Route>
                  <Route path="/comments/:postId/:postType" element={<CommentPage />} />
            
                  <Route path="/messages" element={<MessagesPage />}></Route>
            
                  <Route element={<Main />}>
                      <Route path="/" element={<Feed />} />
                      <Route path="/jobs" element={<Jobs />} />
                      <Route path="/notifications" element={<Notification notifications={notifications} />} />
                      <Route path="/profile/:userId" element={<UserProfile />} />  
                  </Route>
                </Route>
              </Route>
              
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    )
}

/*

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";

const Main = lazy(() => import("./components/main-components/Main"));
const Notification = lazy(() => import("./components/notifications/Notification"));
const Feed = lazy(() => import("./components/post-feed/Feed"));
const UserProfile = lazy(() => import("./components/profile-page/UserProfile"));
const LoginPage = lazy(() => import("./components/authentication/LoginPage"));
const SignUp = lazy(() => import("./components/authentication/SignUp"));
const Jobs = lazy(() => import("./components/jobs/Jobs"));
const Settings = lazy(() => import("./components/settings/Settings"));
const ProfileSettings = lazy(() => import("./components/settings/ProfileSettings"));
const CommentPage = lazy(() => import("./components/post-feed/CommentPage"));

const App = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route element={<PrivateRoute />}>
                <Route element={<Settings/>} path="/settings">
                  <Route element={<ProfileSettings />} path="/settings/profile" />
                </Route>
                <Route path="/comments/:postId/:postType" element={<CommentPage />} />
                <Route element={<Main />}>
                  <Route path="/" element={<Feed />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/notifications" element={<Notification />} />
                  <Route path="/profile/:userId" element={<UserProfile />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;

*/
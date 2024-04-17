
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

export default () => {

    return (
        <div className="app">
        <Router>
          <AuthProvider>
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
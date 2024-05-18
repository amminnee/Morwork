import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { isUserSignedUp } from "../api/app";
import LoadingScreen from "../components/main-components/LoadingScreen";

const PrivateRoute = () => {
  const user = useAuth();
  const [isSignedUp, setSignedUp] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await isUserSignedUp();
        setSignedUp(result);
      } catch (error) {
        console.error("Error checking sign-up status:", error);
        setSignedUp(false);
      }
    };

    getData();
  }, []);

  if (!user || !user.token) {
    return <Navigate to="/login" />;
  }

  if (isSignedUp === null) {
    return <LoadingScreen />;
  }

  if (!isSignedUp) {
    return <Navigate to="/personal-info" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
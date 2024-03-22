import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig"
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState(localStorage.getItem("userId" || ""));
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const loginAction = async (data) => {
    try {
      const res = await api.post("/auth/authenticate", data)
      if (res.data) {
        setUserId(res.data.user_id);
        setToken(res.data.access_token);
        localStorage.setItem("token", res.data.access_token)
        localStorage.setItem("userId", res.data.user_id)
        navigate("/");
      }
      return res.data;
    } catch (err) {
      return err.response;
    }
  };

  const logout = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    await api.post("/auth/logout")

    setUserId(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, userId, loginAction, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}
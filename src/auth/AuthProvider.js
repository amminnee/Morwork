import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig"
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(localStorage.getItem("userId") || null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const loginAction = async (data) => {
    try {
      const res = await api.post("/auth/authenticate", data);
        if (res.data) {
        setUser(res.data.user);
        setToken(res.data.access_token);
        localStorage.setItem("site", res.data.access_token);
        localStorage.setItem("userId", res.data.user_id);
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

    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  console.log(useContext(AuthContext))
  return useContext(AuthContext);
}
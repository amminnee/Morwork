import { useContext, createContext, useState } from "react";
import api from "../api/axiosConfig"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(localStorage.getItem("user_id") || null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const loginAction = async (data) => {
    try {
      const res = await api.post("/auth/authenticate", data);
        if (res.data) {
        setUser(res.data.user_id);
        setToken(res.data.access_token);
        localStorage.setItem("site", res.data.access_token);
        localStorage.setItem("user_id", res.data.user_id);
        navigate("/");
        return;
        }
        throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    // navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  console.log(useContext(AuthContext))
  return useContext(AuthContext);
}
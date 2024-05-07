import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInRequest, recoverUserInfo } from "../services/auth";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      recoverUserInfo(token).then((response) => {
        setUser({ name: response.name, email: response.email });
      });
    }
  }, [token]);

  async function signInUser({ email, password }) {
    const response = await SignInRequest({
      email,
      password,
    });

    console.log("Response: ", response);

    if (!response) {
      console.log("Invalid Credentials");
      return;
    }

    setToken(response.token);
    setUser(response.user);

    navigate("/home");
  }

  async function signOutUser() {
    setUser({ name: "", email: "" });
    setToken(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ signInUser, signOutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

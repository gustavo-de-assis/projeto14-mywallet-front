import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Login from "./login/Login"
import Signup from "./login/Signup"
import Home from "./home/Home"
import Entries from "./cashFlow/Entries"
import Exits from "./cashFlow/Exits"
import { useState } from "react"
import AuthContext from "../contexts/AuthContext"


export default function App() {
    const [token, setToken] = useState("");
    return (
        <AuthContext.Provider value={token}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login setToken={ setToken } />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/incomes" element={<Entries />} />
                    <Route path="/expenses" element={<Exits />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
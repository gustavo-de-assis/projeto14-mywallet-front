import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Login from "./login/Login"
import Signup from "./login/Signup"
import Home from "./home/Home"
import Entries from "./cashFlow/Entries"
import Exits from "./cashFlow/Exits"
import { useState } from "react"
import AuthProvider from "../contexts/AuthContext"


export default function App() {
    const [transactions, setTransactions] = useState([]);

    return (
        <BrowserRouter>
            <AuthProvider>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/home" element={<Home transactions={transactions}/>} />
                    <Route path="/incomes" element={<Entries transactions={transactions} setTransactions={setTransactions}/>} />
                    <Route path="/expenses" element={<Exits transactions={transactions} setTransactions={setTransactions}/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
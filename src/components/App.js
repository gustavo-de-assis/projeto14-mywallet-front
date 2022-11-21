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
    const [total, setTotal] = useState(0);

    return (
        <BrowserRouter>
            <AuthProvider>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/home"
                        element={<Home
                            transactions={transactions}
                            total={total} />} />
                    <Route path="/incomes"
                        element={<Entries
                            transactions={transactions}
                            setTransactions={setTransactions}
                            total={total}
                            setTotal={setTotal} />} />
                    <Route path="/expenses"
                        element={<Exits
                            transactions={transactions}
                            setTransactions={setTransactions}
                            total={total}
                            setTotal={setTotal} />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
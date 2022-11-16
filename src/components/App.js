import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Login from "./login/Login"
import Signup from "./login/Signup"
import Home from "./home/Home"

export default function App(){
    return (<>
    
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}/>  
                <Route path="/sign-up" element={<Signup/>}/> 
                <Route path="/home" element={<Home/>}/> 
            </Routes>
        </BrowserRouter>
    </>)
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Login from "./login/Login"
import Signup from "./login/Signup"
export default function App(){
    return (<>
    
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}/>  
                <Route path="/sign-up" element={<Signup/>}/>  
            </Routes>
        </BrowserRouter>
    </>)
}
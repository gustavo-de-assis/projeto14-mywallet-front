import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import {AuthContext} from "../../contexts/AuthContext";

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({email: "", password: ""});
    const navigate = useNavigate();
    
    useEffect(()=>{
     /*    const localStorageToken = localStorage.getItem("token");
        if(localStorageToken){
            setToken(localStorageToken);
        } */
    },[]);     


    function formHandler(e){
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]:value});
    }

    function loginUser(e){
        e.preventDefault();

        const login = {...loginInfo};
        console.log(loginInfo);

        axios.post("http://localhost:5000/sign-in", login)
        .then((ans)=>{
            console.log(ans.data.token);

            setToken(ans.data.token);
          //  localStorage.setItem("token", token);

            navigate("/home");
        })
        .catch((err)=>{console.log(err)})
        
    }

    return (
        <LoginContainer>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <FormStyle onSubmit={loginUser}>
                <input
                    name="email"
                    type="email"
                    value={loginInfo.email}
                    placeholder="Email"
                    onChange={formHandler}
                    required />
                <input
                    name="password"
                    type="password"
                    value={loginInfo.password}
                    placeholder="Senha"
                    onChange={formHandler}
                    required />
                <button type="submit">Entrar</button>
            </FormStyle>
            <Link to={"/sign-up"}>
                <p>Primeira Vez? Cadastre-se!</p>
            </Link>
        </LoginContainer >
    )
}

const Title = styled.div`
    margin: 25px auto;
`
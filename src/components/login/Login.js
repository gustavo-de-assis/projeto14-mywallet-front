import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
    const { token, setToken } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const navigate = useNavigate();

   /*  useEffect(() => {
         const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            axios.post("http://localhost:5000/sign-in", config)
            .then((ans)=>{
                console.log(ans.data);
            }).catch((err)=> console.log(err.response.data))
        }, []); */


    function formHandler(e) {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    }

    function loginUser(e) {
        e.preventDefault();

        const login = { ...loginInfo };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post("http://localhost:5000/sign-in", login, config)
            .then((ans) => {
                setToken(ans.data.token);
                navigate("/home");
            })
            .catch((err) => { console.log(err.response.data) })

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
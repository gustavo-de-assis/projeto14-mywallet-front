import { Link } from "react-router-dom"
import styled from "styled-components"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Login() {

    

    return (
        <LoginContainer>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <FormStyle>
                <input
                    name="email"
                    type="email"
                   // value={loginInfo.email}
                    placeholder="Email"
                    //onChange={formHandler}
                    required />
                <input
                    name="password"
                    type="password"
                    //value={loginInfo.password}
                    placeholder="Senha"
                    //onChange={formHandler}
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
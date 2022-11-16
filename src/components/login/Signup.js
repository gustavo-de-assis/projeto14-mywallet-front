import { Link } from "react-router-dom"
import styled from "styled-components"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"


export default function Signup() {
    return (
        <LoginContainer>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <FormStyle /* onSubmit={signUser} */>
                <input
                    name="name"
                    type="text"
                    //  value={userInfo.name}
                    placeholder="Nome"
                    // onChange={formHandler}
                    required />
                <input
                    name="email"
                    type="email"
                    //  value={userInfo.email}
                    placeholder="Email"
                    //  onChange={formHandler}
                    required />
                <input
                    name="password"
                    type="password"
                    //value={userInfo.password}
                    placeholder="Senha"
                    //onChange={formHandler}
                    required />
                <input
                    name="password"
                    type="password"
                    //value={userInfo.password}
                    placeholder="Confirme a senha"
                    //onChange={formHandler}
                    required />

                <button type="submit" >Cadastrar</button>
            </FormStyle>
            <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
        </LoginContainer>
    )
}

const Title = styled.div`
    margin: 25px auto;
`

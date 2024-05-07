import { Link } from "react-router-dom";
import styled from "styled-components";
import FormStyle from "../../assets/styles/FormStyle";
import LoginContainer from "../../assets/styles/LoginContainer";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const { signInUser } = useContext(AuthContext);

  function formHandler(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  function loginUser(e) {
    e.preventDefault();
    signInUser(login);
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
          value={login.email}
          placeholder="Email"
          onChange={formHandler}
          required
        />
        <input
          name="password"
          type="password"
          value={login.password}
          placeholder="Senha"
          onChange={formHandler}
          required
        />
        <button type="submit">Entrar</button>
      </FormStyle>
      <Link to={"/sign-up"}>
        <p>Primeira Vez? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}

const Title = styled.div`
  margin: 25px auto;
`;

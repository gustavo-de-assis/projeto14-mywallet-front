import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import styled from "styled-components"



export default function Exits() {
    return (
        <LoginContainer>
            <Title>
                <h1>Nova saída</h1>
            </Title>
            <FormStyle>
                <input
                    name="value"
                    type="text"
                    // value={loginInfo.email}
                    placeholder="Valor"
                    //onChange={formHandler}
                    required />
                <input
                    name="description"
                    type="text"
                    //value={loginInfo.password}
                    placeholder="Descrição"
                    //onChange={formHandler}
                    required />
                <button type="submit">Salvar saída</button>
            </FormStyle>
          
        </LoginContainer >
    )
}

const Title = styled.div`
    display: flex;
    align-self: flex-start;

    padding: 40px;
    h1{

        font-family: "Raleway",sans-serif;
        font-weight: 700;
    }
`
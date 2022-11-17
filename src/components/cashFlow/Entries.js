import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import styled from "styled-components"



export default function Entries() {
    return (
        <LoginContainer>
            <Title>
                <h1>Nova entrada</h1>
            </Title>
            <FormStyle>
                <input
                    name="value"
                    type="number"
                    min="0.1"
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
                <button type="submit">Salvar entrada</button>
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
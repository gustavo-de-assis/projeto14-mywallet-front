import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import styled from "styled-components"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";



export default function Entries({ transactions, setTransactions}) {
    const navigate = useNavigate();
    const [income, setIncome] = useState({value: "", description: ""});

    function formHandler(e){
        const {name, value} = e.target;
        setIncome({...income, [name]:value});
    }

    function submitIncome (e){
        e.preventDefault();
        console.log("entrada", income)
        setTransactions([...transactions, income]);

        navigate("/home");
    }

    return (
        <LoginContainer>
            <Title>
                <h1>Nova entrada</h1>
            </Title>
            <FormStyle onSubmit={submitIncome}>
                <input
                    name="value"
                    type="number"
                    min="1"
                    value={income.value}
                    placeholder="Valor"
                    onChange={formHandler}
                    required />
                <input
                    name="description"
                    type="text"
                    value={income.description}
                    placeholder="Descrição"
                    onChange={formHandler}
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
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Exits(props) {
    const {transactions, setTransactions, total, setTotal} = props;
    const navigate = useNavigate();
    const [expense, setExpense] = useState({value: "", description: ""});

    function formHandler(e){
        const {name, value} = e.target;
        setExpense({...expense, [name]:value});
    }

    function submitExpense (e){
        e.preventDefault();
        console.log("saida: ", expense)
        
        setTransactions([...transactions, expense]);
        setTotal(total + Number(expense.value));
        navigate("/home");
    }
    return (
        <LoginContainer>
            <Title>
                <h1>Nova saída</h1>
            </Title>
            <FormStyle onSubmit={submitExpense}>
                <input
                    name="value"
                    type="number"
                    max="-1"
                    value={expense.value > 0 ? 
                        -expense.value
                        :
                        expense.value}
                    placeholder="Valor"
                    onChange={formHandler}
                    required />
                <input
                    name="description"
                    type="text"
                    value={expense.description}
                    placeholder="Descrição"
                    onChange={formHandler}
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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home({transactions}) {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        console.log("transacoes", transactions);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post("http://localhost:5000/sign-in", config)
            .then(() => console.log(token))
            .catch((err) => console.log(err));

    }, []);


    return (
        <HomeContainer>
            <NavBar>
                <h1>Olá, Fulano</h1>
                <p>Bt</p>
            </NavBar>
            <WhiteBoard>
                {transactions.length === 0 ? 
                <h1> Não há registros de entrada ou saída</h1>
                :
                transactions.map((t,i)=>  <h1>{t.value} {t.description} </h1>)}
                
            </WhiteBoard>
            <Buttons>
                <Link to="/incomes">
                    <Button> Nova entrada </Button>
                </Link>

                <Link to="/expenses">
                    <Button> Nova saída </Button>
                </Link>
            </Buttons>
        </HomeContainer>
    )
}

const NavBar = styled.div`
    width: 327px;
    height: 30px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 20px 0;

    color: #fff;
    font-size: 26px;
    font-weight: 700;
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const WhiteBoard = styled.div`
    width: 326px;
    height: 446px;

    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 10px 0;
    
    border-radius: 5px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`
const Button = styled.button`

    width: 155px;
    height: 114px;

    background-color: #A328D6;

    display: flex;
    flex-direction: row;
    border-radius: 5px;
    margin: 0 5px;
    border: none;

`
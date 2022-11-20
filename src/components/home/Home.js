import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";

export default function Home(){

    const tk = useContext(AuthContext);
    useEffect(()=>{
        
        const config = {
            headers: {
                Authorization: `Bearer ${tk}`
            }
        }

        axios.get("https://localhost:5000/sign-in", config)
        .then(()=> console.log(tk))
        .catch((err)=> console.log(err));
        
    },[])

    return(
        <HomeContainer>
        <NavBar>
            <h1>Olá, Fulano</h1>
            <p>Bt</p>
        </NavBar>
        <WhiteBoard>
            <h1> Não há registros de entrada ou saída</h1>
        </WhiteBoard>
        <Buttons>
            <Button> Nova entrada </Button>
            <Button> Nova saída </Button>
        </Buttons>
        </HomeContainer>
    )
}

const NavBar =styled.div`
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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai"

export default function Home({ transactions, total }) {
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post("http://localhost:5000/sign-in", config)
        .then((ans)=>{
            console.log(ans.data);
        }).catch((err)=> console.log(err.response.data));
        
        axios.get("http://localhost:5000/userInfo")
            .then((ans) => {
                console.log("User", ans.data);
                setUser({...ans.data});
            })
            .catch((err) => console.log(err));

    }, []);
    console.log(user);

    if(user === {}){
        return(<>
            Caregando...
        </>)
    }



    return (
        <HomeContainer>
            <NavBar>
                <h1>Olá, {user.name}</h1>
                <RiLogoutBoxRLine />

            </NavBar>
            <WhiteBoard>
                {transactions.length === 0 ?
                    <h1> Não há registros de entrada ou saída</h1>
                    :
                    <TransactionsContainer>
                        {
                            transactions.map((t, i) => <TransactionBlock>
                                <div>
                                    <p></p>
                                    <p> {t.description}</p>
                                </div>
                                {t.value > 0 ?
                                    <p style={{ color: "#33bb77" }}>R$ {t.value}</p>
                                :
                                <p style={{ color: "#ff4467" }}>R$ {t.value}</p>
                                }
                            </TransactionBlock>
                            )
                        }
                        <h1>Total: {total}</h1>

                    </TransactionsContainer>
                }
            </WhiteBoard>
            <Buttons>
                <Link to="/incomes">
                    <Button>
                        <p>Nova entrada</p>
                        <AiOutlinePlusCircle style={{ color: "white" }} />
                    </Button>
                </Link>

                <Link to="/expenses">
                    <Button>
                        <p>Nova saida</p>
                        <AiOutlinePlusCircle style={{ color: "white" }} />
                    </Button>
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
    /* justify-content: center;
    align-items: center; */
    
    margin: 10px 0;
    
    border-radius: 5px;
    h1{
        width: 60%;
        color: #555;
        align-self: center;
        margin: 0 auto;
        text-align: center;
    }
`
const TransactionsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 10px;
    position: relative;
    h1{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
`
const TransactionBlock = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 5px 0;
    div{
        
    }
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
    justify-content: space-between;
    border-radius: 5px;
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    p{
        color: #fff;
        font-weight: 600;
    }

`
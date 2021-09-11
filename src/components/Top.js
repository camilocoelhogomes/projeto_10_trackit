import React, { useContext } from "react";
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

const Top = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);

    if (!user) {
        history.push('/');
        return <div></div>
    }

    return (
        <Container>
            <div className='space'></div>
            <header>
                <h1>TrackIt</h1>
                <img src={user.image} />
            </header>
        </Container>
    )
}

export default Top;

const Container = styled.div`
    
    .space{
        height: 70px;
        width: 100%;
    }

    header{
        background-color: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 10px 18px;
        justify-content: space-between;
        position: fixed;
        top: 0;

        h1{
            font-family: 'Playball', cursive;
            font-size: 40px;
            color: #ffffff;
        }
        img{
            width: 50px;
            border-radius: 50%;
        }
    }
`;
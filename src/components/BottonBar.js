import React, { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const BottonBar = () => {
    const { concluded } = useContext(UserContext);
    return (
        <BottonBarStyled>
            <Link className='normalButton' to='/habitos'>
                Hábitos
            </Link>
            <Link className='toDay' to='/hoje'>
                <CircularProgressbar
                    value={concluded}
                    maxValue={1}
                    text={'Hoje'}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </Link>
            <Link className='normalButton' to='/historico'>
                Histórico
            </Link>
        </BottonBarStyled>
    );
}

export default BottonBar;

const BottonBarStyled = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    
    .toDay{
        border: none;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: var(--font-body);
        font-size: 18px;
        width: 90px;
        height: 90px;
        position: relative;
        bottom: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .normalButton{
        width: calc(50% - 45px);
        position: relative;
        bottom: 0;
        background-color: #FFFFFF;
        border: none;
        color: #52B6FF;
        font-family: var(--font-body);
        font-size: 18px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
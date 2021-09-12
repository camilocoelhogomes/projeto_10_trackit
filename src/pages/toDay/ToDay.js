import React, { useState } from "react";
import BottonBar from "../../components/BottonBar";
import Top from '../../components/Top';
import styled from 'styled-components';

const ToDay = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Top />
            <Main>
                <header className='header'>
                    <h1>
                        {
                            Intl.DateTimeFormat('pt-br', { weekday: 'long', day: 'numeric', month: 'numeric' })
                                .format(date)
                                .charAt(0)
                                .toUpperCase() +
                            Intl.DateTimeFormat('pt-br', { weekday: 'long', day: 'numeric', month: 'numeric' })
                                .format(date)
                                .slice(1)
                        }
                    </h1>
                    <p>
                        Nenhum hábito concluido ainda
                    </p>
                </header>
            </Main>
            <BottonBar />
        </div>
    );
}

export default ToDay;

const Main = styled.main`
    height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px;

    header {
        padding: 28px 0 0 0;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }

`;

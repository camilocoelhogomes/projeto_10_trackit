import React, { useState } from 'react';
import styled from 'styled-components';
import BottonBar from '../../components/BottonBar';
import Top from '../../components/Top';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const History = () => {
    const [day, setDay] = useState(new Date());

    return <div>
        <Top />
        <Main>
            <header>Histórico</header>
            <Calendar
                onChange={setDay}
                value={day}
            />
        </Main>
        <BottonBar />
    </div>
}

export default History;

const Main = styled.main`
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px;
    display: flex;
    align-items: center;
    flex-direction: column;

    header {
        padding: 28px 0 0 0;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin: 0 0 20px 0;
        width: 100%;
    }

    p {
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;

    }
    .someHabitConcluded{
        color:#8FC549;
    }

`;
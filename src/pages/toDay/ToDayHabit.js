import React from "react";
import styled from 'styled-components';
import { CheckmarkOutline } from 'react-ionicons'



const ToDayHabit = ({ habit, checkHabit }) => {

    return (
        <ToDayHabitStyled done={habit.done}>
            <div className='description'>

                <h1>{habit.name}</h1>

                <div>
                    <p>Sequência atual: <span> {habit.currentSequence} dias</span></p>
                    <p>Seu recorde: {habit.highestSequence} dias</p>
                </div>
            </div>

            <button onClick={() => checkHabit(habit.id)}>
                <CheckmarkOutline
                    color={'#FFFFFF'}
                    height="70px"
                    width="70px"
                />
            </button>
        </ToDayHabitStyled>
    )
}

export default ToDayHabit;

const ToDayHabitStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
    padding: 13px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70px;
    }
    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        color: #666666;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }

    span{
        color: #8FC549;
    }

    button{
        border: none;
        background-color: ${({ done }) => { return (!!done) ? '#8FC549' : '#EBEBEB' }};
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 5px;
    }
`;


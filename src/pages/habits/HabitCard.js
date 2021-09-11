import React from 'react';
import styled from 'styled-components';
import { Day } from '../../components/StyledComponents';
import { TrashOutline } from 'react-ionicons'

const HabitCard = ({ habit, deleteHabit }) => {

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return <HabitCardStyle>
        <h2>
            {habit.name}
        </h2>
        <div>
            {
                days.map((day, key) =>
                    <Day
                        key={key}
                        name={key}
                        selectedDays={habit.days}>
                        {day}
                    </Day>
                )
            }
        </div>
        <button className='trash' onClick={() => { console.log(habit.id); deleteHabit(habit.id) }}>
            <TrashOutline
                color={'#00000'}
                height="20px"
                width="20px"
            />

        </button>
    </HabitCardStyle>
}

export default HabitCard;

const HabitCardStyle = styled.div`
    height: 90px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 30px 0;
    position: relative;
    h2{
        color: #666666;
        font-size: 20px;
    }
    .trash{
        border: none;
        background-color: inherit;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;
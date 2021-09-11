import React from "react";
import styled from 'styled-components';
import { Button, Input } from "../../components/StyledComponents";

const NewHabit = ({ newHabit, setNewHabit }) => {

    if (!newHabit) {
        return <div></div>
    }

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const handleNewHabit = (value) => {
        setNewHabit({ ...newHabit, name: value });
    }

    const handleDays = (key) => {
        const newerHabit = { ...newHabit }

        if (newerHabit.days.includes(key)) {
            newerHabit.days = newerHabit.days.filter(day => day !== key);
        }
        else {
            newerHabit.days.push(key);
        }
        setNewHabit(newerHabit);
    }
    console.log(newHabit);
    return (
        <NewHabitStyle>
            <div>

                <Input width={'100%'}
                    placeholder='Nome do Hábito'
                    onChange={e => handleNewHabit(e.target.value)}
                />
                <div className='days'>
                    {
                        days.map((day, key) =>
                            <Day onClick={() => handleDays(key)}
                                key={key}
                                name={key}
                                selectedDays={newHabit.days}>
                                {day}
                            </Day>
                        )
                    }
                </div>
            </div>
            <div className='buttons'>
                <button className='cancel' onClick={() => setNewHabit(null)}> Cancelar </button>
                <Button width={'84px'} height={'35px'}>Salvar</Button>

            </div>
        </NewHabitStyle>
    )
}

export default NewHabit;

const NewHabitStyle = styled.div`
    height: 180px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .buttons{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .cancel{
            height: 35px;
            color: #52B6FF;
            background-color: #FFFFFF;
            border-radius: 5px;
            border: none;
            font-family: var(--font-body);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 21px;
        }
    }

`;

const Day = styled.button`
    background: ${({ name, selectedDays }) => selectedDays.includes(name) ? '#DBDBDB' : '#FFFFFF'};
    color: ${({ name, selectedDays }) => selectedDays.includes(name) ? '#FFFFFF' : '#DBDBDB'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    margin: 0 4px 0 0;
    font-size: 20px;
    padding: 0;
`

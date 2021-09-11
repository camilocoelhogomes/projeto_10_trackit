import React, { useContext } from "react";
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import { Button, Input, Day } from "../../components/StyledComponents";
import { createNewHabit } from '../../services/server';

const NewHabit = ({ newHabit, setNewHabit, updateHabit }) => {
    const { user } = useContext(UserContext);

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

    const saveHabit = () => {
        createNewHabit(newHabit, user.token).then(() => { setNewHabit(null); updateHabit() });
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
                <Button width={'84px'} height={'35px'} onClick={() => saveHabit()}>Salvar</Button>

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
    margin: 0 0 30px 0;

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
            margin: 0 8px 0 0;
        }
    }

`;


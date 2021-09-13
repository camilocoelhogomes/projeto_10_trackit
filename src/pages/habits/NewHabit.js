import React, { useState } from "react";
import styled from 'styled-components';
import { Button, Input, Day } from "../../components/StyledComponents";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const NewHabit = ({ newHabit, setNewHabit, saveHabit, disabled }) => {


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
        <NewHabitStyle onSubmit={saveHabit}>
            <div>

                <Input width={'100%'}
                    placeholder='Nome do Hábito'
                    onChange={e => handleNewHabit(e.target.value)}
                    required
                    disabled={disabled}
                />
                <div className='days'>
                    {
                        days.map((day, key) =>
                            <Day
                                onClick={() => handleDays(key)}
                                key={key}
                                name={key}
                                selectedDays={newHabit.days}
                                disabled={disabled}
                                type="button"
                            >
                                {day}

                            </Day>
                        )
                    }
                </div>
            </div>
            <div className='buttons'>

                <button className='cancel' onClick={() => setNewHabit(null)}> Cancelar </button>
                <Button disabled={disabled} width={'84px'} height={'35px'}>
                    {!disabled ? 'Salvar' :
                        <Loader
                            type="ThreeDots"
                            color="#FFFFFF"
                            height={50}
                            width={50}
                        />
                    }

                </Button>

            </div>
        </NewHabitStyle>
    )
}

export default NewHabit;

const NewHabitStyle = styled.form`
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


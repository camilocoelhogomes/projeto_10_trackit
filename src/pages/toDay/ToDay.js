import React, { useState, useContext, useEffect } from "react";
import UserContext from '../../contexts/UserContext';
import BottonBar from "../../components/BottonBar";
import Top from '../../components/Top';
import styled from 'styled-components';
import ToDayHabit from "./ToDayHabit";
import { checkHabitSever, getTodayHabits, unCheckHabitSever } from "../../services/server";

const ToDay = () => {
    const { user, concluded, setConcluded } = useContext(UserContext);
    const date = new Date();
    const [toDayHabits, setToDayHabits] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const updateToDay = () => {
        getTodayHabits(user.token).then(res => {
            setToDayHabits(res.data)
            setConcluded(
                toDayHabits.length === 0 ? 0 : toDayHabits.filter(habit => habit.done).length / toDayHabits.length);
            setDisabled(false);
        });
    }

    const updateHabit = (habit, id) => {
        if (habit.id !== id || disabled) {
            return '';
        }

        if (habit.currentSequence === habit.highestSequence && !habit.done) {
            habit.currentSequence++;
            habit.highestSequence++;
        } else if (habit.currentSequence === habit.highestSequence && habit.done) {
            habit.currentSequence--;
            habit.highestSequence--;
        }

        if (habit.currentSequence < habit.highestSequence && !habit.done) {
            habit.currentSequence++;
        } else if (habit.currentSequence < habit.highestSequence && habit.done) {
            habit.currentSequence--;
        }

        habit.done = !habit.done;
    }

    const checkHabit = (id) => {

        const newToDay = [...toDayHabits];

        newToDay.forEach(habit => updateHabit(habit, id));
        setToDayHabits(newToDay);
        setConcluded(toDayHabits.filter(habit => habit.done).length / toDayHabits.length);

        if (!disabled) {
            setDisabled(true);

            if (toDayHabits.filter(habit => habit.id === id)[0].done) {
                checkHabitSever(id, user.token)
                    .then(() => { updateToDay() })
                    .catch(() => { updateToDay() });
            }
            if (!toDayHabits.filter(habit => habit.id === id)[0].done) {
                unCheckHabitSever(id, user.token)
                    .then(() => { updateToDay() })
                    .catch(() => { updateToDay() });
            }
        }
    }

    useEffect(updateToDay, []);
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

                    {
                        !concluded ?
                            <p>Nenhum hábito concluido ainda</p> :
                            <p className='someHabitConcluded'>{Math.round(concluded * 100)}% dos hábitos concluidos</p>
                    }
                </header>
                <ul>
                    {
                        toDayHabits.map((habit) => <ToDayHabit
                            key={habit.id}
                            habit={habit}
                            checkHabit={checkHabit}
                        />)
                    }
                </ul>
            </Main>
            <BottonBar />
        </div>
    );
}

export default ToDay;

const Main = styled.main`
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px;

    header {
        padding: 28px 0 0 0;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin: 0 0 20px 0;
    }

    p {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
    .someHabitConcluded{
        color:#8FC549;
    }

`;

import React, { useContext, useState, useEffect } from "react";
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import { Button } from '../../components/StyledComponents';
import NewHabit from "./NewHabit";
import { getHabits, removeHabit, createNewHabit } from "../../services/server";
import HabitCard from "./HabitCard";
import Top from '../../components/Top';
import BottonBar from "../../components/BottonBar";

const Habits = () => {
    const { user } = useContext(UserContext);

    const [newHabit, setNewHabit] = useState(null);
    const [habits, setHabits] = useState([]);

    const updateHabit = () => {
        getHabits(user.token).then(res => setHabits(res.data));
    }

    const deleteHabit = (id) => {
        const newerHabits = habits.filter(habit => habit.id !== id);
        setHabits(newerHabits);
        removeHabit(id, user.token).then(updateHabit);
    }

    const saveHabit = () => {
        setHabits([...habits, newHabit]);
        setNewHabit(null);
        createNewHabit(newHabit, user.token).then(() => { updateHabit() });
    }
    useEffect(updateHabit, []);

    return (
        <div>
            <Top />
            <Container>
                <header>
                    <h1>Meus Hábitos</h1>
                    <Button
                        height={'35px'}
                        width={'40px'}
                        fontSize={'26px'}
                        onClick={() => setNewHabit({ name: '', days: [] })}>
                        +
                    </Button>
                </header>
                {
                    !newHabit ? '' :
                        <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} saveHabit={saveHabit} />
                }
                {
                    habits.length === 0 ?
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                        habits.map(habit => <HabitCard key={habit.id} habit={habit} deleteHabit={deleteHabit} />)

                }
                <BottonBar />
            </Container>
        </div>
    )

}

export default Habits;

const Container = styled.div`
    padding: 0 18px;
    box-sizing: border-box;
    background-color: #F2F2F2;
    min-height: calc(100vh - 140px);

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 28px 0;
        box-sizing: border-box;
        h1{
            color: #126BA5;
            font-size: 24px;
        }
    }
    p{
        color:#666666;
        line-height: 22px;
    }
`;
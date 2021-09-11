import React, { useState } from "react";
import styled from 'styled-components';
import Top from '../../components/Top';
import { Button } from '../../components/StyledComponents';
import NewHabit from "./NewHabit";

const Habits = () => {
    const [newHabit, setNewHabit] = useState(null);

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
                        <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} />
                }
            </Container>
        </div>
    )

}

export default Habits;

const Container = styled.div`
    padding: 0 18px;
    box-sizing: border-box;
    background-color: #F2F2F2;
    min-height: calc(100vh - 70px);

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
`;
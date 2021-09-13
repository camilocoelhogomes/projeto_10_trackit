import styled from 'styled-components';
import BottonBar from '../../components/BottonBar';
import Top from '../../components/Top';

const History = () => {
    return <div>
        <Top />
        <Main>
            <header>Histórico</header>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Main>
        <BottonBar />
    </div>
}

export default History;

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
        color: #666666;

    }
    .someHabitConcluded{
        color:#8FC549;
    }

`;
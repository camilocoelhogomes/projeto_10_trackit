import styled from 'styled-components';
import img from '../assets/img/Logo.png';

const LoginLogo = () => {
    return (
        <Container>
            <img src={img}></img>
            <h1>TrackIt</h1>
        </Container>
    )
}

export default LoginLogo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 200px;
    }
    h1 {
        font-family: 'Playball', cursive;
        font-size: 70px;
        color: #126BA5;
    }
`;
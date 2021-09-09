import LoginLogo from "../../../components/LoginLogo";
import { Link } from 'react-router-dom';
import { Button, Input } from "../../../components/StyledComponents";
import styled from "styled-components";

const SignUp = () => {
    return (
        <Container>
            <LoginLogo />
            <Input width={'100%'} placeholder='e-mail' />
            <Input width={'100%'} placeholder='senha' />
            <Input width={'100%'} placeholder='nome' />
            <Input width={'100%'} placeholder='foto' />
            <Button width={'100%'} height={'45px'}>Entrar</Button>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </Container>
    )
}

export default SignUp;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 70px 36px 0 36px;
    align-items: center;

    p {
        color: #52B6FF;
        text-decoration-line: underline;
        margin: 25px 0;
    }
`;
import LoginLogo from "../../../components/LoginLogo";
import { Link } from 'react-router-dom';
import { Button, Input } from "../../../components/StyledComponents";
import styled from "styled-components";
import { signUpNewUser } from "../../../services/server";

const SignUp = ({ handleUserLoginChange, userLogin }) => {

    return (
        <Container>
            <LoginLogo />
            <Input width={'100%'} placeholder='e-mail' onChange={(e) => handleUserLoginChange('email', e.target.value)} />
            <Input type='password' width={'100%'} placeholder='senha' onChange={(e) => handleUserLoginChange('password', e.target.value)} />
            <Input width={'100%'} placeholder='nome' onChange={(e) => handleUserLoginChange('name', e.target.value)} />
            <Input width={'100%'} placeholder='foto' onChange={(e) => handleUserLoginChange('image', e.target.value)} />
            <Button onClick={() => signUpNewUser(userLogin)} width={'100%'} height={'45px'}>Cadastrar</Button>
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


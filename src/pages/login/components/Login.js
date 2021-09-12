import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import LoginLogo from "../../../components/LoginLogo";
import { Link } from 'react-router-dom';
import { Button, Input } from "../../../components/StyledComponents";
import styled from "styled-components";
import { loginUser } from "../../../services/server";



const Login = ({ handleUserLoginChange, userLogin }) => {
    const history = useHistory();

    const { setUser } = useContext(UserContext);

    const login = () => {
        loginUser(userLogin).then(res => { setUser(res.data); history.push('/hoje') }
        )
    }

    return (
        <Container>
            <LoginLogo />
            <Input
                width={'100%'}
                placeholder='e-mail'
                onChange={(e) => handleUserLoginChange('email', e.target.value)}
            />

            <Input
                type='password'
                width={'100%'}
                placeholder='senha'
                onChange={(e) => handleUserLoginChange('password', e.target.value)} />
            <Button
                width={'100%'}
                height={'45px'}
                onClick={login}
            >
                Entrar
            </Button>
            <Link to='/cadastro'><p>Não tem conta? cadastra-se</p></Link>
        </Container>
    )
}

export default Login;

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
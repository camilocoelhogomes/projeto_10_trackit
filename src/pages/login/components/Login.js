import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import LoginLogo from "../../../components/LoginLogo";
import { Link } from 'react-router-dom';
import { Button, Input } from "../../../components/StyledComponents";
import styled from "styled-components";
import { loginUser } from "../../../services/server";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Login = ({ handleUserLoginChange, userLogin }) => {
    const history = useHistory();
    const [disabled, setDisabled] = useState(false);
    const { setUser } = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();
        setDisabled(true);
        loginUser(userLogin)
            .then(res => { setUser(res.data); setTimeout(() => history.push('/hoje')) })
            .catch(() => { alert('Falhou!'); setDisabled(false) });
    }

    return (
        <Container onSubmit={login}>
            <LoginLogo />
            <Input
                width={'100%'}
                placeholder='e-mail'
                onChange={(e) => handleUserLoginChange('email', e.target.value)}
                required
                disabled={disabled}
            />
            <Input
                required
                type='password'
                width={'100%'}
                placeholder='senha'
                onChange={(e) => handleUserLoginChange('password', e.target.value)}
                disabled={disabled}
            />
            <Button
                width={'100%'}
                height={'45px'}
                type="submit"
                disabled={disabled}
            >
                {!disabled ? 'Entrar' :
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={70}
                        width={70}
                    />
                }
            </Button>
            <Link to='/cadastro'><p>Não tem conta? cadastra-se</p></Link>
        </Container>
    )
}

export default Login;

const Container = styled.form`
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
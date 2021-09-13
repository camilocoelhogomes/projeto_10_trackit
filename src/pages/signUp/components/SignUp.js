import React, { useState } from "react";
import LoginLogo from "../../../components/LoginLogo";
import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from "../../../components/StyledComponents";
import styled from "styled-components";
import { loginUser, signUpNewUser } from "../../../services/server";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SignUp = ({ handleUserLoginChange, userLogin }) => {
    const history = useHistory();
    const [disabled, setDisabled] = useState(false);

    const registration = (e) => {
        e.preventDefault();
        setDisabled(true);
        signUpNewUser(userLogin).then(
            loginUser(userLogin)
                .then(res => history.push('/'))
                .catch(() => { alert('Não foi dessa vez'); setDisabled(false) })
        )
    }

    return (
        <Container onSubmit={registration}>
            <LoginLogo />
            <Input disabled={disabled} required type='email' width={'100%'} placeholder='e-mail' onChange={(e) => handleUserLoginChange('email', e.target.value)} />
            <Input disabled={disabled} required type='password' width={'100%'} placeholder='senha' onChange={(e) => handleUserLoginChange('password', e.target.value)} />
            <Input disabled={disabled} required width={'100%'} placeholder='nome' onChange={(e) => handleUserLoginChange('name', e.target.value)} />
            <Input disabled={disabled} required width={'100%'} placeholder='foto' onChange={(e) => handleUserLoginChange('image', e.target.value)} />
            <Button disabled={disabled} type='submit' width={'100%'} height={'45px'}>
                {!disabled ? 'Cadastrar' :
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={70}
                        width={70}
                    />
                }
            </Button>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </Container>
    )
}

export default SignUp;

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


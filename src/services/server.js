import axios from "axios";
const API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


const signUpNewUser = (newUser) => {
    const body = newUser;
    const promise = axios.post(`${API}auth/sign-up`, body);
    return promise;
}

const loginUser = (user) => {
    const body = {
        email: user.email,
        password: user.password
    }
    console.log(body);
    const promise = axios.post(`${API}auth/login`, body);
    console.log(promise);
    return promise;
}

export {
    signUpNewUser,
    loginUser
}
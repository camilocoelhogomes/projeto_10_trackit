import axios from "axios";
const API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


const signUpNewUser = (newUser) => {
    const body = newUser;
    console.log(body);
    const promise = axios.post(`${API}auth/sign-up`, body);
    console.log(promise);
    return promise;
}

export {
    signUpNewUser,
}
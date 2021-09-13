import axios from "axios";
const API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


const signUpNewUser = (newUser) => {
    const body = newUser;
    return axios.post(`${API}auth/sign-up`, body);
}

const loginUser = (user) => {
    const body = {
        email: user.email,
        password: user.password
    }
    const promise = axios.post(`${API}auth/login`, body);
    return promise;
}

const createNewHabit = (body, token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.post(`${API}habits`, body, config);
}

const getHabits = (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.get(`${API}habits`, config)
}

const removeHabit = (id, token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.delete(`${API}habits/${id}`, config);
}

const getTodayHabits = (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.get(`${API}habits/today`, config)
}

const checkHabitSever = (id, token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.post(`${API}habits/${id}/check`, {}, config);
}

export {
    signUpNewUser,
    loginUser,
    createNewHabit,
    getHabits,
    removeHabit,
    getTodayHabits,
    checkHabitSever,
}
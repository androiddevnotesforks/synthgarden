import axios from 'axios';

export const setAuthToken = token => {
    console.log(token)
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// sign in
export const login = user => {
    // debugger
    return axios.post('/api/users/login', user)
};

// sign up
export const signup = user => {
    return axios.post('/api/users/register', user)
};
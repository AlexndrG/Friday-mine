import axios from 'axios';

// Test mode
// const baseURL = 'http://localhost:7542/2.0/'
// Normal mode
const baseURL = 'https://neko-back.herokuapp.com/2.0/'

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})
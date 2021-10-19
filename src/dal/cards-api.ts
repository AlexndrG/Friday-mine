import axios from 'axios';

// Test mode
const baseURL = 'http://localhost:7542/2.0/'
// Normal mode
// const baseURL = 'https://neko-back.herokuapp.com/2.0/'

const instance = axios.create({
    baseURL,
    withCredentials: true,
})



export const authAPI = {
    me() {
        return instance.post<LoginResponseType>('auth/me', {});
    },

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe});
    },

    logout() {
        return instance.delete<LogoutResponseType>('auth/me');
    },

    register(email: string, password: string) {
        return instance.post<RegisterResponseType>('auth/register', {email, password});
    },
}




export type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean            // подтвердил ли почту
    rememberMe: boolean
    error?: string
}


type RegisterResponseType = {
    error?: string
}


export type LogoutResponseType = {
    info: string
    error: string
}

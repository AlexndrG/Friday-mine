import axios from 'axios';

// Test mode
// const baseURL = 'http://localhost:7542/2.0/'
// Normal mode
const baseURL = 'https://neko-back.herokuapp.com/2.0/'

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

    editProfile(name: string, avatar: string) {
        return instance.put<EditProfileResponseType>('auth/me', {name, avatar});
    },

    pwdRestore(email: string) {
        return instance.post<PwdRestoreResponseType>('auth/forgot', {email, from, message});
    },

    pwdNew(password: string, resetPasswordToken: string) {
        return instance.post<PwdNewResponseType>('auth/set-new-password', {password, resetPasswordToken});
    },
}


export type PwdNewResponseType = {
    info: string
    error: string
}


export type PwdRestoreResponseType = {
    info: string
    error: string
}

const from = 'test-front-admin <ai73a@yandex.by>'
const message = `<div>Password recovery link: <a href='https://alexndrg.github.io/Friday-mine/#/pwd-new/$token$'>Password recovery link</a></div>`


export type EditProfileResponseType = {
    updatedUser: LoginResponseType
    error?: string
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

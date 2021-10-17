import {instance} from './api-register';

export const profileAPI = {
    logout() {
        return instance.delete<LogoutResponseType>('auth/me');
    },
}

export type LogoutResponseType = {
    info: string
    error: string
}
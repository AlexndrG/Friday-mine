import {Dispatch} from 'redux';
import {authAPI, LoginResponseType} from '../dal/auth-api';

const initialState = {
    isInitialized: false,
    isBusy: false,
    error: '',
    isLogined: false,
    userData: {} as LoginResponseType,
}
type StateType = typeof initialState


export function appReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'APP/SET-INITIALIZED':
            return {
                ...state,
                isInitialized: true,
            }

        case 'APP/SET-BUSY':
            return {
                ...state,
                isBusy: action.value,
            }

        case 'APP/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        case 'APP/SET-LOGIN':
            return {
                ...state,
                isLogined: action.value,
            }

        case 'APP/SET-USER-DATA':
            return {
                ...state,
                isLogined: true,
                userData: {...action.userData},
            }

        default:
            return state
    }
}

export const setAppInitializedAC = () => ({type: 'APP/SET-INITIALIZED'} as const)
export const setAppBusyAC = (value: boolean) => ({type: 'APP/SET-BUSY', value} as const)
export const setAppErrorAC = (errorText: string) => ({type: 'APP/SET-ERROR', errorText} as const)
export const setAppLoginAC = (value: boolean) => ({type: 'APP/SET-LOGIN', value} as const)
export const setUserDataAC = (userData: LoginResponseType) => ({type: 'APP/SET-USER-DATA', userData} as const)

export const initializeTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            dispatch(setUserDataAC(response.data))
        })
        .catch(error => {

        })
        .finally(() => {
            dispatch(setAppInitializedAC())
        })
}

type ActionType =
    | ReturnType<typeof setAppInitializedAC>
    | ReturnType<typeof setAppBusyAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppLoginAC>
    | ReturnType<typeof setUserDataAC>
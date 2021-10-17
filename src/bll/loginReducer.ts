import {Dispatch} from 'redux'
import {loginAPI} from '../dal/api-login';
import {setUserDataAC} from './appReducer';

const initialState = {
    isBusy: false,
    isLogined: false,
    error: '',
}
type StateType = typeof initialState

export function loginReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LOGIN/SET-IS-BUSY':
            return {
                ...state,
                isBusy: action.isBusy,
            }

        case 'LOGIN/SET-IS-LOGINED':
            return {
                ...state,
                isLogined: action.isLogined,
            }

        case 'LOGIN/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        default:
            return state
    }
}


export const setLoginIsBusyAC = (isBusy: boolean) => ({type: 'LOGIN/SET-IS-BUSY', isBusy} as const)
export const setIsLoginedAC = (isLogined: boolean) => ({type: 'LOGIN/SET-IS-LOGINED', isLogined} as const)
export const setLoginErrorAC = (errorText: string) => ({type: 'LOGIN/SET-ERROR', errorText} as const)


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(setLoginErrorAC(''))
    dispatch(setLoginIsBusyAC(true))
    loginAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(setIsLoginedAC(true))
            dispatch(setUserDataAC(res.data))
        })
        .catch(err => {
            dispatch(setLoginErrorAC(err.response.data.error))
        })
        .finally(() => {
            dispatch(setLoginIsBusyAC(false))
        })
}

type ActionType =
    | ReturnType<typeof setLoginIsBusyAC>
    | ReturnType<typeof setIsLoginedAC>
    | ReturnType<typeof setLoginErrorAC>

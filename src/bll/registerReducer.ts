import { Dispatch } from "redux"
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {authAPI} from '../dal/cards-api';

const initialState = {
    isRegistered: false,
}
type StateType = typeof initialState


export function registerReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'REGISTER/SET-REGISTER':
            return {
                ...state,
                isRegistered: action.value,
            }

        default:
            return state
    }
}

export const setRegisteredAC = (value: boolean) => ({type: 'REGISTER/SET-REGISTER', value} as const)

export const registerTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.register(email, password)
        .then(response => {
            dispatch(setRegisteredAC(true))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

type ActionType =
    | ReturnType<typeof setRegisteredAC>

import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {authAPI} from '../dal/auth-api';

const initialState = {
    isPwdNew: false
}

type StateType = typeof initialState


export function passwordNewReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PWD-NEW/SET-PWD-NEW':
            return {
                ...state,
                isPwdNew: action.value,
            }

        default:
            return state
    }
}

export const setPwdNewAC = (value: boolean) => ({type: 'PWD-NEW/SET-PWD-NEW', value} as const)


export const pwdNewTC = (password: string, token: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.pwdNew(password, token)
        .then(response => {
            dispatch(setPwdNewAC(true))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof setPwdNewAC>

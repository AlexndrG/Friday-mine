import {Dispatch} from 'redux';
import {authAPI} from '../dal/cards-api';
import {setAppBusyAC, setAppErrorAC, setUserDataAC} from './appReducer';

const initialState = {
}
type StateType = typeof initialState


export function loginReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {

        default:
            return state
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.login(email,password,rememberMe)
        .then(response => {
            dispatch(setUserDataAC(response.data))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

type ActionType = any

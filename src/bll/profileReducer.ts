import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC, clearAppLoginAC, setUserDataAC} from './appReducer';
import {authAPI} from '../dal/cards-api';

const initialState = {
}
type StateType = typeof initialState


export function profileReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {

        default:
            return state
    }
}

export const changeProfileTC = (name: string, avatar: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.editProfile(name, avatar)
        .then(response => {
            dispatch(setUserDataAC(response.data.updatedUser))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.logout()
        .then(response => {
            dispatch(clearAppLoginAC(false))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

type ActionType = any

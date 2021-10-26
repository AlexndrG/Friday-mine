import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {authAPI} from '../dal/cards-api';

const initialState = {
    isRestoring: false,
}

type StateType = typeof initialState


export function passwordRestoreReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PWD-RESTORE/SET-RESTORING':
            return {
                ...state,
                isRestoring: action.value,
            }

        default:
            return state
    }
}


export const setIsRestoringAC = (value: boolean) => ({type: 'PWD-RESTORE/SET-RESTORING', value} as const)


export const pwdRestoreTC = (email: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))
    authAPI.pwdRestore(email)
        .then(response => {
            dispatch(setIsRestoringAC(true))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof setIsRestoringAC>

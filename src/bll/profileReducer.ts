import {Dispatch} from 'redux';
import {setIsLoginedAC} from './loginReducer';
import {profileAPI} from '../dal/api-profile';

const initialState = {
    isBusy: false,
    error: '',
}

type StateType = typeof initialState

export function profileReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PROFILE/SET-IS-BUSY':
            return {
                ...state,
                isBusy: action.isBusy,
            }

        case 'PROFILE/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        default:
            return state
    }
}

export const setProfileIsBusyAC = (isBusy: boolean) => ({type: 'PROFILE/SET-IS-BUSY', isBusy} as const)
export const setProfileErrorAC = (errorText: string) => ({type: 'PROFILE/SET-ERROR', errorText} as const)

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setProfileIsBusyAC(true))
    profileAPI.logout()
        .then(res => {
            dispatch(setIsLoginedAC(false))
        })
        .catch(err => {
            dispatch(setProfileErrorAC(err.response ? err.response.data.error : err.message))
        })
        .finally(() => {
            dispatch(setProfileIsBusyAC(false))
        })
}

type ActionType =
    | ReturnType<typeof setProfileIsBusyAC>
    | ReturnType<typeof setProfileErrorAC>

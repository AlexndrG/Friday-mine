import {Dispatch} from 'redux'
import {registerAPI} from '../dal/api-register';

const initialState = {
    isBusy: false,
    isRegistered: false,
    error: '',
}
type StateType = typeof initialState

export function registerReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'REGISTER/SET-IS-BUSY':
            return {
                ...state,
                isBusy: action.isBusy,
            }

        case 'REGISTER/SET-IS-REGISTERED':
            return {
                ...state,
                isRegistered: action.isRegistered,
            }

        case 'REGISTER/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        default:
            return state
    }
}

export const setRegisterIsBusyAC = (isBusy: boolean) => ({type: 'REGISTER/SET-IS-BUSY', isBusy} as const)
export const setIsRegisteredAC = (isRegistered: boolean) => ({type: 'REGISTER/SET-IS-REGISTERED', isRegistered} as const)
export const setRegisterErrorAC = (errorText: string) => ({type: 'REGISTER/SET-ERROR', errorText} as const)


export const registerTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setRegisterErrorAC(''))
    dispatch(setRegisterIsBusyAC(true))
    registerAPI.register(email, password)
        .then(res => {
            // console.log('res: ',res.data)
            // console.dir(res)
            dispatch(setIsRegisteredAC(true))
        })
        .catch(err => {
            // console.log('err: ',err.response.data)
            // console.dir(err)
            dispatch(setRegisterErrorAC(err.response.data.error))
        })
        .finally(() => {
            dispatch(setRegisterIsBusyAC(false))
        })
}

type ActionType =
    | ReturnType<typeof setRegisterIsBusyAC>
    | ReturnType<typeof setIsRegisteredAC>
    | ReturnType<typeof setRegisterErrorAC>

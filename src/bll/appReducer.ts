import {LoginResponseType} from '../dal/api-login';

const initialState = {
    userData: {} as LoginResponseType,
}

type StateType = typeof initialState

export function appReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'APP/SET-USER-DATA':
            return {
                ...state,
                userData: {...action.data},
            }

        default:
            return state
    }
}

export const setUserDataAC = (data: LoginResponseType) => ({type: 'APP/SET-USER-DATA', data} as const)

type ActionType =
    | ReturnType<typeof setUserDataAC>
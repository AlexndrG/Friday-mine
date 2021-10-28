import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {GetPacksResponseType, packsAPI, PacksRequestType} from '../dal/packs-api';
import {AppRootStateType} from './store';

const initialState = {
    requestData: {
        packName: '',
        min: 0,
        max: 1000,
        sortPacks: '',
        page: 1,
        pageCount: 10,
        user_id: ''
    } as PacksRequestType,

    packsData: {} as GetPacksResponseType
}
type StateType = typeof initialState


export function packsReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PACKS/SET-PACS-DATA':
            return {
                ...state,
                packsData: {...action.packsData}
            }

        default:
            return state
    }
}


export const setPacksDataAC = (packsData: GetPacksResponseType) => ({type: 'PACKS/SET-PACS-DATA', packsData} as const)


export const getPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    const requestData = getState().packs.requestData
    packsAPI.getPacks(requestData)
        .then(response => {
            dispatch(setPacksDataAC(response.data))

        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof setPacksDataAC>

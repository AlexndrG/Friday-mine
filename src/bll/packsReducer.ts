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

        case 'PACKS/SET-PACS-PER-PAGE':
            return {
                ...state,
                requestData: {
                    ...state.requestData,
                    pageCount: action.pageCount,
                }
            }

        default:
            return state
    }
}


export const setPacksDataAC = (packsData: GetPacksResponseType) => ({type: 'PACKS/SET-PACS-DATA', packsData} as const)
export const setPacksPerPageAC = (pageCount: number) => ({type: 'PACKS/SET-PACS-PER-PAGE', pageCount} as const)


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

// export const addPackTC = () => (dispatch: Dispatch) => {
export const addPackTC = () => (dispatch: any) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    packsAPI.addPack({name: 'SuperPuperName'})
        .then(response => {
            dispatch(getPacksTC())

        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

// export const delPackTC = () => (dispatch: Dispatch) => {
export const delPackTC = (id: string) => (dispatch: any) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    packsAPI.delPack(id)
        .then(response => {
            dispatch(getPacksTC())

        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

// export const updatePackTC = () => (dispatch: Dispatch) => {
export const updatePackTC = (_id: string) => (dispatch: any) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    packsAPI.updatePack({_id, name: 'Updated name!'})
        .then(response => {
            dispatch(getPacksTC())

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
    | ReturnType<typeof setPacksPerPageAC>

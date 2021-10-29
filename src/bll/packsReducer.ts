import {Dispatch} from 'redux';
import {setAppLoginAC, setAppBusyAC, setAppErrorAC} from './appReducer';
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
        user_id: '',
    } as PacksRequestType,

    packsData: {} as GetPacksResponseType
}
type StateType = typeof initialState


export function packsReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PACKS/SET-PACKS-DATA':
            return {
                ...state,
                packsData: {...action.packsData},
            }

        case 'PACKS/SET-PACKS-PER-PAGE':
            return {
                ...state,
                requestData: {
                    ...state.requestData,
                    pageCount: action.pageCount,
                },
            }

        case 'PACKS/SET-MY-PACKS-CHECKBOX':
            return {
                ...state,
                requestData: {
                    ...state.requestData,
                    user_id: action.id,
                }
            }

        case 'APP/SET-LOGIN':
            if (!action.value) {
                return {
                    ...state,
                    requestData: {
                        ...state.requestData,
                        user_id: '',
                    }
                }
            }
            return state

        case 'PACKS/SET-CURRENT-PAGE':
            return {
                ...state,
                requestData: {
                    ...state.requestData,
                    page: action.pageNumber,
                }
            }

        default:
            return state
    }
}


export const setPacksDataAC = (packsData: GetPacksResponseType) => ({type: 'PACKS/SET-PACKS-DATA', packsData} as const)
export const setPacksPerPageAC = (pageCount: number) => ({type: 'PACKS/SET-PACKS-PER-PAGE', pageCount} as const)
export const setMyPacksCheckBoxAC = (id: string) => ({type: 'PACKS/SET-MY-PACKS-CHECKBOX', id} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: 'PACKS/SET-CURRENT-PAGE', pageNumber} as const)


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
/*
            const errorMessage = error.response ? error.response.data.error : error.message
            if (errorMessage.indexOf('you are not authorized') >= 0) {
                dispatch(setAppLoginAC(false))
            } else {
                dispatch(setAppErrorAC(errorMessage))
            }
 */
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

    packsAPI.updatePack({_id, name: 'Updated SuperPuperName!'})
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
    | ReturnType<typeof setAppLoginAC>

    | ReturnType<typeof setPacksDataAC>
    | ReturnType<typeof setPacksPerPageAC>
    | ReturnType<typeof setMyPacksCheckBoxAC>
    | ReturnType<typeof setCurrentPageAC>

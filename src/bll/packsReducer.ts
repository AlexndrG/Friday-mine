import {Dispatch} from 'redux';
import {setAppLoginAC, setAppBusyAC, setAppErrorAC} from './appReducer';
import {GetPacksResponseType, packsAPI, PacksRequestType} from '../dal/packs-api';
import {AppRootStateType} from './store';

const initialState = {
    requestPacksData: {
        packName: '',
        min: 0,
        max: 0,
        sortPacks: '',
        page: 1,
        pageCount: 10,
        user_id: '',
    } as PacksRequestType,

    packsData: {} as GetPacksResponseType,
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
                requestPacksData: {
                    ...state.requestPacksData,
                    pageCount: action.packsCount,
                },
            }

        case 'PACKS/SET-MY-PACKS-CHECKBOX':
            return {
                ...state,
                requestPacksData: {
                    ...state.requestPacksData,
                    user_id: action.id,
                }
            }

        case 'APP/SET-LOGIN':
            if (!action.value) {
                return {
                    ...state,
                    requestPacksData: {
                        ...state.requestPacksData,
                        user_id: '',
                    }
                }
            }
            return state

        case 'PACKS/SET-CURRENT-PAGE':
            return {
                ...state,
                requestPacksData: {
                    ...state.requestPacksData,
                    page: action.pageNumber,
                }
            }

        case 'PACKS/SET-NAME-SEARCH':
            return {
                ...state,
                requestPacksData: {
                    ...state.requestPacksData,
                    packName: action.text,
                }
            }

        case 'PACKS/SET-RANGE-SEARCH':
            return {
                ...state,
                requestPacksData: {
                    ...state.requestPacksData,
                    min: action.min,
                    max: action.max,
                }
            }

        case 'PACKS/SET-SORT-PACKS':
            return {
                ...state,
                requestPacksData: {
                    ...state.requestPacksData,
                    sortPacks: action.sortString,
                }
            }


        default:
            return state
    }
}


export const setPacksDataAC = (packsData: GetPacksResponseType) => ({type: 'PACKS/SET-PACKS-DATA', packsData} as const)
export const setPacksPerPageAC = (packsCount: number) => ({type: 'PACKS/SET-PACKS-PER-PAGE', packsCount} as const)
export const setMyPacksCheckBoxAC = (id: string) => ({type: 'PACKS/SET-MY-PACKS-CHECKBOX', id} as const)
export const setCurrentPackPageAC = (pageNumber: number) => ({type: 'PACKS/SET-CURRENT-PAGE', pageNumber} as const)
export const setPackNameSearchAC = (text: string) => ({type: 'PACKS/SET-NAME-SEARCH', text} as const)
export const setPacksRangeSearchAC = (min: number, max: number) => ({type: 'PACKS/SET-RANGE-SEARCH', min, max} as const)
export const setSortPacksAC = (sortString: string) => ({type: 'PACKS/SET-SORT-PACKS', sortString} as const)

export const getPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    const requestPacksData = getState().packs.requestPacksData
    packsAPI.getPacks(requestPacksData)
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
export const addPackTC = () => (dispatch: Dispatch<any>) => {
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
export const delPackTC = (id: string) => (dispatch: Dispatch<any>) => {
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
export const updatePackTC = (_id: string) => (dispatch: Dispatch<any>) => {
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
    | ReturnType<typeof setCurrentPackPageAC>
    | ReturnType<typeof setPackNameSearchAC>
    | ReturnType<typeof setPacksRangeSearchAC>
    | ReturnType<typeof setSortPacksAC>
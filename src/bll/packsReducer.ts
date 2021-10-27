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

        default:
            return state
    }
}


export const getPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    const requestData = getState().packs.requestData
    packsAPI.getPacks(requestData)
        .then(response => {

            console.log(response.data)

        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType = any

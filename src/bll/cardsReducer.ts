import {Dispatch} from 'redux';
import {cardsAPI, CardsRequestType, GetCardsResponseType} from '../dal/cards-api';
import {AppRootStateType} from './store';
import {setAppBusyAC, setAppErrorAC} from './appReducer';

const initialState = {
    requestCardsData: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 0,
        sortCards: '',
        page: 1,
        pageCount: 10,
    } as CardsRequestType,

    cardsData: {} as GetCardsResponseType
}
type StateType = typeof initialState


export function cardsReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'CARDS/SET-CARDS-DATA':
            return {
                ...state,
                cardsData: {...action.cardsData},
            }

        default:
            return state
    }
}


export const setCardsDataAC = (cardsData: GetCardsResponseType) => ({type: 'CARDS/SET-CARDS-DATA', cardsData} as const)


export const getCardsTC = (cardsPack_id: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    const requestCardsData = getState().cards.requestCardsData
    cardsAPI.getCards({...requestCardsData, cardsPack_id})
        .then(response => {
            dispatch(setCardsDataAC(response.data))

        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof setCardsDataAC>

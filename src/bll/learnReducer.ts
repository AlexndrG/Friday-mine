import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {cardsAPI} from '../dal/cards-api';
import {initRequestCardsData} from './cardsReducer';

type CardInfo = {
    cardId: string
    question: string
    answer: string
}

const initialState = {
    cards: [] as CardInfo[],
}
type StateType = typeof initialState


export function learnReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LEARN/CLEAR-LEARN-DATA':
            return {
                ...state,
                cards: [],
            }




        default:
            return state
    }
}


export const clearLearnDataAC = () => ({type: 'LEARN/CLEAR-LEARN-DATA'} as const)
export const addLearnDataAC = () => ({type: 'LEARN/ADD-LEARN-DATA'} as const)


export const getLearnCardsTC = (cardsPack_id: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.getCards({...initRequestCardsData, pageCount: 20, cardsPack_id})
        .then(response => {
            // dispatch(setCardsDataAC(response.data))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
            dispatch(clearLearnDataAC())
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof clearLearnDataAC>

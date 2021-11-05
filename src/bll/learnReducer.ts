import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {cardsAPI, GetCardsResponseType} from '../dal/cards-api';
import {initRequestCardsData} from './cardsReducer';

type CardInfo = {
    cardId: string
    question: string
    answer: string
    grade: number
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

        case 'LEARN/ADD-LEARN-DATA':
            return {
                ...state,
                cards: [
                    ...state.cards,
                    ...action.cardsData.cards.map(c =>
                        ({
                            cardId: c._id,
                            question: c.question,
                            answer: c.answer,
                            grade: c.grade
                        })
                    )
                ]
            }


        default:
            return state
    }
}


export const clearLearnDataAC = () => ({type: 'LEARN/CLEAR-LEARN-DATA'} as const)
export const addLearnDataAC = (cardsData: GetCardsResponseType) => ({type: 'LEARN/ADD-LEARN-DATA', cardsData} as const)


export const getLearnCardsTC = (cardsPack_id: string, pageToLoad: number, loadedPage: number) => (dispatch: Dispatch<any>) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.getCards({...initRequestCardsData, page: pageToLoad, pageCount: 1, cardsPack_id})
        .then(response => {
            loadedPage = response.data.page
            if (pageToLoad === loadedPage) {
                dispatch(addLearnDataAC(response.data))

                dispatch(setAppBusyAC(true))
                dispatch(getLearnCardsTC(cardsPack_id, pageToLoad + 1, loadedPage))
            }
alert()
            dispatch(setAppBusyAC(false))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
            dispatch(clearLearnDataAC())
            dispatch(setAppBusyAC(false))
        })
        .finally(() => {
        })
}


type ActionType =
    | ReturnType<typeof clearLearnDataAC>
    | ReturnType<typeof addLearnDataAC>

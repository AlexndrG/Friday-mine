import {Dispatch} from 'redux';
import {setAppBusyAC, setAppErrorAC} from './appReducer';
import {cardsAPI, GetCardsResponseType} from '../dal/cards-api';
import {initRequestCardsData} from './cardsReducer';
import {learnAPI} from '../dal/learn-api';

export type CardInfo = {
    cardId: string
    question: string
    answer: string
    grade: number
}

const initialState = {
    learnDataLoaded: false,
    cards: [] as CardInfo[],
    currentLearnCard: {} as CardInfo,
}
type StateType = typeof initialState


export function learnReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LEARN/CLEAR-LEARN-DATA':
            return {
                ...state,
                learnDataLoaded: false,
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
                            grade: c.grade,
                        })
                    ),
                ]
            }

        case 'LEARN/SORT-LEARN-CARDS':
            const copyCards = state.cards.map(c => ({...c}))
            copyCards.sort((a, b) => a.grade - b.grade)
            return {
                ...state,
                cards: copyCards,
                learnDataLoaded: true,
            }

        case 'LEARN/GET-RANDOM-LEARN-CARD':
            const randomLearnCardNumber = Math.trunc(Math.random() * state.cards.length)
            return {
                ...state,
                currentLearnCard: state.cards[randomLearnCardNumber],
            }

        case 'LEARN/SET-NEW-GRADE':
            return {
                ...state,
                cards: state.cards.map(c => c.cardId === action.cardId ? {...c, grade: action.newGrade} : c)
            }


        default:
            return state
    }
}


export const clearLearnDataAC = () => ({type: 'LEARN/CLEAR-LEARN-DATA'} as const)
export const addLearnDataAC = (cardsData: GetCardsResponseType) => ({type: 'LEARN/ADD-LEARN-DATA', cardsData} as const)
export const sortLearnCardsAC = () => ({type: 'LEARN/SORT-LEARN-CARDS'} as const)
export const getRandomLearnCardAC = () => ({type: 'LEARN/GET-RANDOM-LEARN-CARD'} as const)
export const setNewGradeAC = (cardId: string, newGrade: number) => ({
    type: 'LEARN/SET-NEW-GRADE',
    cardId,
    newGrade
} as const)


export const getLearnCardsTC = (cardsPack_id: string, pageToLoad: number, loadedPage: number) => (dispatch: Dispatch<any>) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.getCards({...initRequestCardsData, page: pageToLoad, pageCount: 100, cardsPack_id})
        .then(response => {
            loadedPage = response.data.page
            if (pageToLoad === loadedPage) {
                dispatch(addLearnDataAC(response.data))

                dispatch(getLearnCardsTC(cardsPack_id, pageToLoad + 1, loadedPage))
            } else {
                dispatch(sortLearnCardsAC())
                dispatch(setAppBusyAC(false))
            }
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
            dispatch(clearLearnDataAC())
            dispatch(setAppBusyAC(false))
        })
        .finally(() => {
            // dispatch(setAppBusyAC(false))
        })
}

export const setGradeTC = (grade: number, cardId: string) => (dispatch: Dispatch) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    learnAPI.setGrade(grade, cardId)
        .then(response => {
            dispatch(setNewGradeAC(cardId, response.data.updatedGrade.grade))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}


type ActionType =
    | ReturnType<typeof clearLearnDataAC>
    | ReturnType<typeof addLearnDataAC>
    | ReturnType<typeof sortLearnCardsAC>
    | ReturnType<typeof getRandomLearnCardAC>
    | ReturnType<typeof setNewGradeAC>

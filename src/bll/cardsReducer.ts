import {Dispatch} from 'redux';
import {cardsAPI, CardsRequestType, GetCardsResponseType} from '../dal/cards-api';
import {AppRootStateType} from './store';
import {setAppBusyAC, setAppErrorAC} from './appReducer';

export const initRequestCardsData = {
    cardAnswer: '',
    cardQuestion: '',
    cardsPack_id: '',
    min: 0,
    max: 0,
    sortCards: '',
    page: 1,
    pageCount: 5,
}

const initialState = {
    requestCardsData: initRequestCardsData as CardsRequestType,
    cardsData: {} as GetCardsResponseType,
}
type StateType = typeof initialState


export function cardsReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'CARDS/SET-CARDS-DATA':
            return {
                ...state,
                cardsData: {...action.cardsData},
            }

        case 'CARDS/SET-INIT-CARDS-DATA':
            return {
                ...state,
                requestCardsData: initRequestCardsData,
                cardsData: {} as GetCardsResponseType,
            }

        case 'CARDS/SET-CARDS-PER-PAGE':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    pageCount: action.cardsCount,
                },
            }

        case 'CARDS/SET-CURRENT-PAGE':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    page: action.pageNumber,
                }
            }

        case 'CARDS/SET-QUESTION-SEARCH':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    cardQuestion: action.text,
                }
            }

        case 'CARDS/SET-ANSWER-SEARCH':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    cardAnswer: action.text,
                }
            }

        case 'CARDS/SET-RANGE-SEARCH':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    min: action.min,
                    max: action.max,
                }
            }

        case 'CARDS/SET-SORT-CARDS':
            return {
                ...state,
                requestCardsData: {
                    ...state.requestCardsData,
                    sortCards: action.sortString,
                }
            }


        default:
            return state
    }
}


export const setCardsDataAC = (cardsData: GetCardsResponseType) => ({type: 'CARDS/SET-CARDS-DATA', cardsData} as const)
export const setInitCardsDataAC = () => ({type: 'CARDS/SET-INIT-CARDS-DATA'} as const)
export const setCardsPerPageAC = (cardsCount: number) => ({type: 'CARDS/SET-CARDS-PER-PAGE', cardsCount} as const)
export const setCurrentCardPageAC = (pageNumber: number) => ({type: 'CARDS/SET-CURRENT-PAGE', pageNumber} as const)
export const setCardQuestionSearchAC = (text: string) => ({type: 'CARDS/SET-QUESTION-SEARCH', text} as const)
export const setCardAnswerSearchAC = (text: string) => ({type: 'CARDS/SET-ANSWER-SEARCH', text} as const)
export const setCardsRangeSearchAC = (min: number, max: number) => ({type: 'CARDS/SET-RANGE-SEARCH', min, max} as const)
export const setSortCardsAC = (sortString: string) => ({type: 'CARDS/SET-SORT-CARDS', sortString} as const)


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

// export const addCardTC = () => (dispatch: Dispatch) => {
export const addCardTC = (cardsPack_id: string, question: string, answer: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.addCard({cardsPack_id, question, answer})
        .then(response => {
            dispatch(getCardsTC(cardsPack_id))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

// export const delCardTC = () => (dispatch: Dispatch) => {
export const delCardTC = (cardsPack_id: string, id: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.delCard(id)
        .then(response => {
            dispatch(getCardsTC(cardsPack_id))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response ? error.response.data.error : error.message))
        })
        .finally(() => {
            dispatch(setAppBusyAC(false))
        })
}

// export const updateCardTC = () => (dispatch: Dispatch) => {
export const updateCardTC = (cardsPack_id: string, _id: string, question: string, answer: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppErrorAC(''))
    dispatch(setAppBusyAC(true))

    cardsAPI.updateCard({_id, question, answer})
        .then(response => {
            dispatch(getCardsTC(cardsPack_id))
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
    | ReturnType<typeof setInitCardsDataAC>
    | ReturnType<typeof setCardsPerPageAC>
    | ReturnType<typeof setCurrentCardPageAC>
    | ReturnType<typeof setCardQuestionSearchAC>
    | ReturnType<typeof setCardAnswerSearchAC>
    | ReturnType<typeof setCardsRangeSearchAC>
    | ReturnType<typeof setSortCardsAC>
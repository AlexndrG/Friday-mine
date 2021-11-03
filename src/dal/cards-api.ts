import {instance} from './instance';

export const cardsAPI = {
    getCards(data: CardsRequestType) {
        return instance.get<GetCardsResponseType>('cards/card', {params: data})
    },

    addCard(newCard: NewCardType) {
        return instance.post<AddCardResponseType>('cards/card', {card: newCard})
    },

    delCard(id: string) {
        return instance.delete<DelCardResponseType>('cards/card?id=' + id)
    },

    updateCard(updateCard: UpdateCardType) {
        return instance.put<UpdateCardResponseType>('cards/card', {card: updateCard})
    },
}



export type UpdateCardResponseType = {
    updatedCard: CardType
}

export type UpdateCardType = NewCardType & {
    comments?: string
}


export type DelCardResponseType = {
    deletedCard: CardType
}


export type AddCardResponseType = {
    newCard: CardType
}

export type NewCardType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}


export type CardsRequestType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

export type GetCardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
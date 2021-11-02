import {instance} from './instance';

export const packsAPI = {
    getPacks(data: PacksRequestType) {
        return instance.get<GetPacksResponseType>('cards/pack', {params: data})
    },

    addPack(newPack: NewPackType) {
        return instance.post<AddPackResponseType>('cards/pack', {cardsPack: newPack})
    },

    delPack(id: string) {
        return instance.delete<DelPackResponseType>('cards/pack?id=' + id)
    },

    updatePack(updatePack: UpdatePackType) {
        return instance.put<UpdatePackResponseType>('cards/pack', {cardsPack: updatePack})
    },

}

export type UpdatePackResponseType = {
    updatedCardsPack: PackType
}

export type UpdatePackType = NewPackType & {
    _id: string
}


export type DelPackResponseType = {
    deletedCardsPack: PackType
}


export type AddPackResponseType = {
    newCardsPack: PackType
}

export type NewPackType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}


export type PacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
}

export type PackType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}

export type GetPacksResponseType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
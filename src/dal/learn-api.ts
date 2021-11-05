import {instance} from './instance';

export const learnAPI = {
    setGrade(grade: number, card_id: string) {
        return instance.put<SetGradeResponseType>('cards/grade', {grade, card_id})
    },
}


export type SetGradeResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}
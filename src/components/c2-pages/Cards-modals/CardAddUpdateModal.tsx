import React, {useState} from 'react';
import s from './CardAddUpdateModal.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';

type PropsType = {
    add: boolean
    packId: string
    cardId: string
    question: string
    answer: string
    setActive: (active: boolean) => void
    dispatchFunction: Function
}

export function CardAddUpdateModal(props: PropsType) {
    const dispatch = useDispatch()

    const [questionValue, setQuestionValue] = useState(props.question)
    const [answerValue, setAnswerValue] = useState(props.answer)

    return (
        <div>
            Question: &nbsp;
            <SuperInputText
                value={questionValue}
                onChange={e => setQuestionValue(e.currentTarget.value)}
            />
            <p/>
            Answer: &nbsp;
            <SuperInputText
                value={answerValue}
                onChange={e => setAnswerValue(e.currentTarget.value)}
            />
            <p/>
            <div className={s.modalCenter}>
                <SuperButton
                    onClick={
                        () => {
                            props.setActive(false)
                            if (props.add) {
                                dispatch(props.dispatchFunction(props.packId, questionValue, answerValue))
                            } else {
                                dispatch(props.dispatchFunction(props.packId, props.cardId, questionValue, answerValue))
                            }
                        }
                    }
                >
                    OK
                </SuperButton>
                <SuperButton
                    onClick={() => props.setActive(false)}
                >
                    Cancel
                </SuperButton>
            </div>
        </div>
    )
}
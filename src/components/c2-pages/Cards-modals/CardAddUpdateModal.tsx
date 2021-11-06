import React, {useState} from 'react';
import s from './CardAddUpdateModal.module.css'
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
        <div className={s.main}>
            Question:<br/>
            <textarea
                style={{resize: 'none'}}
                cols={40}
                rows={5}
                wrap={'soft'}
                value={questionValue}
                onChange={e => setQuestionValue(e.currentTarget.value)}
                autoFocus
            />
            <p/>
            Answer:<br/>
            <textarea
                style={{resize: 'none'}}
                cols={40}
                rows={5}
                wrap={'soft'}
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
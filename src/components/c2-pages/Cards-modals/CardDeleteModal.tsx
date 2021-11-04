import React from 'react';
import s from './CardDeleteModal.module.css'
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';

type PropsType = {
    packId: string
    cardId: string
    question: string
    setActive: (active: boolean) => void
    dispatchFunction: (packId: string, cardId: string) => void
}

export function CardDeleteModal(props: PropsType) {
    const dispatch = useDispatch()

    return (
        <div className={s.modalCenter}>
            Are you sure to Delete card with Question:<br/>
            "<b>{props.question}</b>" ?

            <p/>
            <div className={s.modalCenter}>
                <SuperButton
                    onClick={
                        () => {
                            props.setActive(false)
                            dispatch(props.dispatchFunction(props.packId, props.cardId))
                        }
                    }
                >
                    Yes
                </SuperButton>
                <SuperButton
                    onClick={() => props.setActive(false)}
                >
                    No
                </SuperButton>
            </div>
        </div>
    )
}

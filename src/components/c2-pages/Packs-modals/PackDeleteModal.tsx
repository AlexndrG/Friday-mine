import React from 'react';
import s from './PackDeleteModal.module.css'
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';

type PropsType = {
    id: string
    name: string
    setActive: (active: boolean) => void
    dispatchFunction: (id: string) => void
}

export function PackDeleteModal(props: PropsType) {
    const dispatch = useDispatch()

    return (
        <div className={s.modalCenter}>
            Are you sure to Delete pack<br/>
            "<b>{props.name}</b>" ?

            <p/>
            <div className={s.modalCenter}>
                <SuperButton
                    onClick={
                        () => {
                            props.setActive(false)
                            dispatch(props.dispatchFunction(props.id))
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

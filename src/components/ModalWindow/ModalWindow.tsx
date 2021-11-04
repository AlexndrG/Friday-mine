import React, {ReactNode} from 'react';
import s from './ModalWindow.module.css'

type PropsType = {
    active: boolean
    // setActive: (active: boolean) => void
    modalContent: ReactNode
}

// export function ModalWindow({active, setActive, modalContent}: PropsType) {
export function ModalWindow({active, modalContent}: PropsType) {
    if (active) {
        return (
            <div className={s.modal}>
                <div className={s.modalContent}>
                    {modalContent}
                </div>
            </div>
        )
    }

    return <></>
}
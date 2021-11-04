import React, {ReactNode} from 'react';
import s from './ModalWindow.module.css'

type PropsType = {
    active: boolean
    setActive: (active: boolean) => void
    modalContent: ReactNode
}

export function ModalWindow({active, setActive, modalContent}: PropsType) {
    if (active) {
        return (
            <div className={s.modal} onClick={()=>setActive(false)}>
                <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                    {modalContent}
                </div>
            </div>
        )
    }

    return <></>
}

/*
import React, {ReactNode} from 'react';
import s from './ModalWindow.module.css'

type PropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: ReactNode
}

export function ModalWindow({active, setActive, children}: PropsType) {
    console.log('log: ',children)
    console.dir(children)

    if (active) {
        return (
            <div className={s.modal} onClick={()=>setActive(false)}>
                <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }

    return <></>
}
*/
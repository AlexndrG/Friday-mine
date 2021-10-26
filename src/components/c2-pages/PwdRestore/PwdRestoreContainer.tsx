import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './PwdRestore.module.css';
import {PwdRestore} from './PwdRestore';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {setAppErrorAC} from '../../../bll/appReducer';
import {pwdRestoreTC, setIsRestoringAC} from '../../../bll/passwordRestoreReducer';


export function PwdRestoreContainer() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const isRestoring = useSelector<AppRootStateType, boolean>(state => state.passwordRestore.isRestoring)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setAppErrorAC(''))
            dispatch(setIsRestoringAC(false))
        }
    }, [])

    // const [email, setEmail] = useState<string>('dfkcnsldkfj@sdfsifd.ru')
    // const [email, setEmail] = useState<string>('dfkcnsldkfj@yandex.ru')
    const [email, setEmail] = useState<string>('dfkcnsldkfj@mail.ru')

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setEmail(e.currentTarget.value)
    }

    const restorePress = () => {
        if (email === '') {
            dispatch(setAppErrorAC('Fill email field!'))
            return
        }

        dispatch(pwdRestoreTC(email))
    }


    if (isRestoring) {
        return (
            <div className={s.form}>
                Check your e-mail <b>{email}</b> for Restore Password link!
            </div>
        )
    }


    return (
        <>
            <PwdRestore
                email={email}
                isBusy={isBusy}
                error={error}
                emailChange={emailChange}
                restorePress={restorePress}
            />
        </>
    )
}
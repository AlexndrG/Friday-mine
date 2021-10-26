import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './PwdNew.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {setAppErrorAC} from '../../../bll/appReducer';
import {PwdNew} from './PwdNew';
import {pwdNewTC, setPwdNewAC} from '../../../bll/passwordNewReducer';
import {useParams} from 'react-router-dom';

export function PwdNewContainer() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const isPwdNew = useSelector<AppRootStateType, boolean>(state => state.passwordNew.isPwdNew)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)

    const {token} = useParams<{token: string}>()

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setPwdNewAC(false))
            dispatch(setAppErrorAC(''))
        }
    }, [])

    const [password, setPassword] = useState<string>('22222222')
    const [password2, setPassword2] = useState<string>('22222222')

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setPassword(e.currentTarget.value)
    }

    const password2Change = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setPassword2(e.currentTarget.value)
    }

    const newPress = () => {
        if (password === '' || password2 === '') {
            dispatch(setAppErrorAC('Fill all fields!'))
            return
        }

        if (password !== password2) {
            dispatch(setAppErrorAC('Passwords do not match!'))
            return
        }

        dispatch(pwdNewTC(password, token))
    }


    if (isPwdNew) {
        return (
            <div className={s.form}>
                <h2><b>Password changed!</b></h2>
            </div>
        )
    }

    return (
        <PwdNew
            isBusy={isBusy}
            password={password}
            password2={password2}
            passwordChange={passwordChange}
            password2Change={password2Change}
            newPress={newPress}
            error={error}
        />
    )
}
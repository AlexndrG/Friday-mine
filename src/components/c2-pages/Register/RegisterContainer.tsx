import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {setAppErrorAC} from '../../../bll/appReducer';
import { Redirect } from 'react-router-dom';
import { Register } from './Register';
import {registerTC, setRegisteredAC} from '../../../bll/registerReducer';

export function RegisterContainer() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setRegisteredAC(false))
            dispatch(setAppErrorAC(''))
        }
    }, [])

    // const [email, setEmail] = useState<string>('')
    // const [password1, setPassword1] = useState<string>('')
    // const [password2, setPassword2] = useState<string>('')
    const [email, setEmail] = useState<string>('dfkcnsldkfj@sdfsifd.ru')
    const [password, setPassword] = useState<string>('11111111')
    const [password2, setPassword2] = useState<string>('11111111')

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setEmail(e.currentTarget.value)
    }

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setPassword(e.currentTarget.value)
    }

    const password2Change = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setPassword2(e.currentTarget.value)
    }

    const registerPress = () => {
        if (email === '' || password === '' || password2 === '') {
            dispatch(setAppErrorAC('Fill all fields!'))
            return
        }

        if (password !== password2) {
            dispatch(setAppErrorAC('Passwords do not match!'))
            return
        }

        dispatch(registerTC(email, password))
    }


    if (isRegistered) {
        return <Redirect to={'/login'}/>
    }

    return (
        <Register
            isBusy={isBusy}
            email={email}
            password={password}
            password2={password2}
            emailChange={emailChange}
            passwordChange={passwordChange}
            password2Change={password2Change}
            registerPress={registerPress}
            error={error}
        />
    )
}
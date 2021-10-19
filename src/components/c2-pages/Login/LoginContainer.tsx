import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from '../../../bll/store';
import { Login } from './Login';
import {setAppErrorAC} from '../../../bll/appReducer';
import {loginTC} from '../../../bll/loginReducer';

export function LoginContainer() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])

    const [email, setEmail] = useState<string>('dfkcnsldkfj@sdfsifd.ru')
    const [password, setPassword] = useState<string>('11111111')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setEmail(e.currentTarget.value)
    }

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setPassword(e.currentTarget.value)
    }

    const rememberMeChange = (e: MouseEvent<HTMLInputElement>) => {
        if (error) dispatch(setAppErrorAC(''))
        setRememberMe(e.currentTarget.checked)
    }

    const loginPress = () => {
        if (email === '' || password === '') {
            dispatch(setAppErrorAC('Fill email/password fields!'))
            return
        }

        dispatch(loginTC(email, password, rememberMe))
    }


    if (isLogined) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Login
            isBusy={isBusy}
            email={email}
            password={password}
            rememberMe={rememberMe}
            emailChange={emailChange}
            passwordChange={passwordChange}
            rememberMeChange={rememberMeChange}
            loginPress={loginPress}
            error={error}
        />
    )
}

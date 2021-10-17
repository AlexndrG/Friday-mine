import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setRegisterErrorAC} from '../../../bll/registerReducer';
import {AppRootStateType} from '../../../bll/store';
import {Redirect} from 'react-router-dom';
import {Login} from './Login';
import {loginTC, setLoginErrorAC} from '../../../bll/loginReducer';

export function LoginContainer() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.login.isBusy)
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.login.isLogined)
    const error = useSelector<AppRootStateType, string>(state => state.login.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setLoginErrorAC(''))
        }
    }, [])

    const [email, setEmail] = useState<string>('dfkcnsldkfj@sdfsifd.ru')
    const [password, setPassword] = useState<string>('11111111')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setRegisterErrorAC(''))
        setEmail(e.currentTarget.value)
    }

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setRegisterErrorAC(''))
        setPassword(e.currentTarget.value)
    }

    const rememberMeChange = (e: MouseEvent<HTMLInputElement>) => {
        if (error) dispatch(setRegisterErrorAC(''))
        setRememberMe(e.currentTarget.checked)
    }

    const loginPress = () => {
        if (email === '' && password === '') {
            dispatch(setRegisterErrorAC('Fill email/password fields!'))
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
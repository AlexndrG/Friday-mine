import React, {ChangeEvent, MouseEvent} from 'react';
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {Loader} from '../../Loader/Loader';
import s from './Login.module.css'

type PropsType = {
    isBusy: boolean
    email: string
    password: string
    rememberMe: boolean
    error: string
    emailChange: (e: ChangeEvent<HTMLInputElement>) => void
    passwordChange: (e: ChangeEvent<HTMLInputElement>) => void
    rememberMeChange: (e: MouseEvent<HTMLInputElement>) => void
    loginPress: () => void
    loginAsIgnatPress: () => void
}

export function Login(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Login</h1>

            <div className={s.form}>
                <div className={s.item}>
                    E-mail
                    <br/>
                    <SuperInputText
                        value={props.email}
                        onChange={props.emailChange}
                        disabled={props.isBusy}
                    />
                </div>

                <div className={s.item}>
                    Password
                    <br/>
                    <SuperInputText
                        value={props.password}
                        onChange={props.passwordChange}
                        disabled={props.isBusy}
                    />
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperInputText
                        type={'checkbox'}
                        checked={props.rememberMe}
                        onClick={props.rememberMeChange}
                        disabled={props.isBusy}
                    />
                    Remember me
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.loginPress}
                        disabled={props.isBusy}
                    >
                        Login
                    </SuperButton>
                </div>
            </div>

            {/*======================================================*/}

            <div className={s.form}>
                <div className={s.item}>
                    E-mail
                    <br/>
                    <SuperInputText
                        value={'nya-admin@nya.nya'}
                    />
                </div>

                <div className={s.item}>
                    Password
                    <br/>
                    <SuperInputText
                        value={'1qazxcvBG'}
                    />
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperInputText
                        type={'checkbox'}
                        checked={false}
                    />
                    Remember me
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.loginAsIgnatPress}
                        disabled={props.isBusy}
                        red
                    >
                        Login as Ignat
                    </SuperButton>
                </div>
            </div>

            {/*======================================================*/}

            {props.isBusy &&
            <div>
                <Loader/>
            </div>}

            {props.error &&
            <div className={s.error}>
                {props.error}
            </div>}

        </div>
    )
}
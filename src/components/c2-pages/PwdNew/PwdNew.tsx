import React, {ChangeEvent} from 'react';
import s from './PwdNew.module.css';
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {Loader} from '../../Loader/Loader';

type PropsType = {
    isBusy: boolean
    password: string
    password2: string
    error: string
    passwordChange: (e: ChangeEvent<HTMLInputElement>) => void
    password2Change: (e: ChangeEvent<HTMLInputElement>) => void
    newPress: () => void
}

export function PwdNew(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>New password</h1>

            <div className={s.form}>
                <div className={s.item}>
                    New password
                    <br/>
                    <SuperInputText
                        value={props.password}
                        onChange={props.passwordChange}
                        disabled={props.isBusy}
                    />
                </div>

                <div className={s.item}>
                    New password (repeat)
                    <br/>
                    <SuperInputText
                        value={props.password2}
                        onChange={props.password2Change}
                        disabled={props.isBusy}
                    />
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.newPress}
                        disabled={props.isBusy}
                    >
                        Set new password
                    </SuperButton>
                </div>
            </div>

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
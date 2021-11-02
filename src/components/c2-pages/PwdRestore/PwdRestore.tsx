import React, {ChangeEvent} from 'react';
import s from './PwdRestore.module.css';
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {Loader} from '../../Loader/Loader';

type PropsType = {
    isBusy: boolean
    email: string
    error: string
    emailChange: (e: ChangeEvent<HTMLInputElement>) => void
    restorePress: () => void
}

export function PwdRestore(props: PropsType) {
    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
                <h1>Restore Password</h1>
                {
                    props.isBusy &&
                    <div>
                        <Loader/>
                    </div>
                }
                {
                    props.error &&
                    <div className={s.error}>
                        {props.error}
                    </div>
                }
            </div>

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
                    <br/>
                    <SuperButton
                        onClick={props.restorePress}
                        disabled={props.isBusy}
                    >
                        Restore
                    </SuperButton>
                </div>
            </div>

        </div>
    )
}
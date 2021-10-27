import React from 'react';
import s from './Packs.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import {Loader} from '../../Loader/Loader';

type PropsType = {

    isBusy: boolean
    error: string
}

export function Packs(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Packs</h1>

            <div className={s.form}>
                <div className={s.item}>
                    E-mail
                    <br/>
                    <SuperInputText
                    />
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